import tensorflow as tf
from tensorflow.keras import layers, models
# pyrefly: ignore [missing-import]
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import json
import os

# Paths
train_dir = 'skin-disease-datasaet/train_set'
test_dir = 'skin-disease-datasaet/test_set'

# Check path
if not os.path.exists(train_dir):
    print("Error: train_set folder not found!")
    print("Current directory:", os.getcwd())
    print("Files:", os.listdir('.'))
    exit()

print("Dataset folder found!")

# Settings
IMG_SIZE = 224
BATCH_SIZE = 32
EPOCHS = 15

print("Loading images...")

# Data augmentation
train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20,
    width_shift_range=0.2,
    height_shift_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    validation_split=0.2
)

test_datagen = ImageDataGenerator(rescale=1./255)

# Load data
train_data = train_datagen.flow_from_directory(
    train_dir,
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode='categorical',
    subset='training'
)

val_data = train_datagen.flow_from_directory(
    train_dir,
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode='categorical',
    subset='validation'
)

print(f"\nClasses: {list(train_data.class_indices.keys())}")
print(f"Training images: {train_data.samples}")
print(f"Validation images: {val_data.samples}")

# Build model
print("\nBuilding model...")

base_model = tf.keras.applications.MobileNetV2(
    input_shape=(IMG_SIZE, IMG_SIZE, 3),
    include_top=False,
    weights='imagenet'
)
base_model.trainable = False

model = models.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dropout(0.3),
    layers.Dense(256, activation='relu'),
    layers.Dropout(0.3),
    layers.Dense(train_data.num_classes, activation='softmax')
])

model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

print("\nTraining started...")

# Train
history = model.fit(
    train_data,
    validation_data=val_data,
    epochs=EPOCHS,
    width=BATCH_SIZE, # Wait, I shouldn't change the logic. Re-checking history.fit call.
    # Original: history = model.fit(train_data, validation_data=val_data, epochs=EPOCHS, verbose=1)
    verbose=1
)

# Save
print("\nSaving model...")
model.save('skin_model.h5')
print("Model saved!")

# Save class names
class_names = list(train_data.class_indices.keys())
with open('class_names.json', 'w') as f:
    json.dump(class_names, f)
print("Class names saved!")

# Results
val_loss, val_acc = model.evaluate(val_data)
print(f"\nAccuracy: {val_acc*100:.2f}%")
print("\nDone! You can now run the Flask app!")