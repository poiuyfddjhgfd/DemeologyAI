from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from transformers import AutoImageProcessor, AutoModelForImageClassification
import PIL.Image as Image
import torch
import os
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# OpenAI Client
# AI Client (Groq via OpenAI-compatible endpoint)
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url=os.getenv("GROQ_BASE_URL", "https://api.groq.com/openai/v1")
)
# App directory path
APP_DIR = os.path.dirname(os.path.abspath(__file__))

# Load model once
MODEL_PATH = os.path.join(APP_DIR, "skin-model")

print(f"Loading model from {MODEL_PATH}...")
try:
    processor = AutoImageProcessor.from_pretrained(MODEL_PATH)
    model = AutoModelForImageClassification.from_pretrained(MODEL_PATH)
    model.eval()
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])

def predict():
    if 'file' not in request.files and 'image' not in request.files:
        return jsonify({'error': 'No file uploaded'})
    
    file = request.files.get('file') or request.files.get('image')
    
    # User info from form data
    age = request.form.get('age', 'Not specified')
    gender = request.form.get('gender', 'Not specified')
    skin_type = request.form.get('skin_type', 'Not specified')
    history = request.form.get('history', 'No prior history mentioned')
    
    if file.filename == '':
        return jsonify({'error': 'No file selected'})
    
    try:
        # Load and process image
        image = Image.open(file).convert('RGB')
        inputs = processor(images=image, return_tensors="pt")
        
        with torch.no_grad():
            outputs = model(**inputs)
        
        logits = outputs.logits
        probs = torch.nn.functional.softmax(logits, dim=-1)
        
        # Get top 3 predictions
        top_probs, top_indices = torch.topk(probs, 3)
        top_3 = []
        for i in range(3):
            idx = top_indices[0][i].item()
            conf = top_probs[0][i].item() * 100
            label = model.config.id2label.get(str(idx)) or model.config.id2label.get(idx)
            top_3.append({
                'class': label,
                'confidence': float(conf)
            })
            
        predicted_class = top_3[0]['class']
        confidence = top_3[0]['confidence']
        
        # Generate Detailed Analysis using OpenAI
        detailed_analysis = {
            "overview": "Analysis could not be generated at this time.",
            "causes": ["Wait for AI"],
            "routine": ["Consult a dermatologist"],
            "whenToSee": "Consult a professional.",
            "tips": ["Stay healthy"]
        }
        try:
            prompt = f"""
            As an AI medical assistant, provide a professional but easy-to-understand detailed analysis for the following skin condition prediction:
            - Prediction: {predicted_class}
            - Confidence: {confidence:.2f}%
            
            Patient Information:
            - Age: {age}
            - Gender: {gender}
            - Medical History: {history}
            
            Return the response ONLY as a JSON object with the following keys:
            - "overview": A professional description of the condition (2-3 sentences).
            - "causes": An array of 3-4 common causes.
            - "routine": An array of 4-5 recommended skincare steps.
            - "whenToSee": Advice on when to consult a doctor.
            - "decision": A detailed 3-4 sentence final professional recommendation or "decision" for the patient, explaining the reasoning and immediate next steps.
            - "tips": 2-3 general lifestyle tips.
            
            Keep the content professional and concise.
            """
            
            response = client.chat.completions.create(
                model="llama-3.3-70b-versatile",
                messages=[
                    {"role": "system", "content": "You are a helpful medical assistant specializing in dermatology. You respond only in JSON."},
                    {"role": "user", "content": prompt}
                ],
                response_format={"type": "json_object"}
            )
            import json
            detailed_analysis = json.loads(response.choices[0].message.content)
        except Exception as ai_err:
            print(f"OpenAI Error: {ai_err}")
            if predicted_class == "Unknown Normal":
                detailed_analysis = {
                    "overview": "The AI analysis indicates that your skin appears healthy and no common skin diseases were detected in the provided image.",
                    "causes": ["Normal skin variation", "Healthy skin maintenance"],
                    "routine": ["Continue your regular skincare", "Use sunscreen daily", "Keep skin hydrated"],
                    "whenToSee": "Consult a doctor if you notice new or changing spots.",
                    "decision": "Based on the AI scan, the skin area appears normal. No immediate medical action is required for this specific area, but routine check-ups are always recommended.",
                    "tips": ["Healthy diet", "Hydration"]
                }
            else:
                detailed_analysis = {
                    "overview": f"The AI scan has identified patterns associated with {predicted_class}. Further evaluation is recommended.",
                    "causes": ["Multiple clinical factors", "Environmental triggers"],
                    "routine": ["Gentle cleansing", "Sun protection", "Avoid skin irritants"],
                    "whenToSee": "If symptoms like itching, redness, or growth persist.",
                    "decision": f"The AI has flagged potential {predicted_class}. It is highly recommended to seek professional dermatological evaluation for a definitive diagnosis and treatment plan.",
                    "tips": ["Avoid scratching", "Keep the area clean"]
                }

        return jsonify({
            'prediction': predicted_class,
            'confidence': float(f"{confidence:.2f}"),
            'top_3': top_3,
            'detailed_analysis': detailed_analysis
        })
    
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)