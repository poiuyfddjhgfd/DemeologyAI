var km = (e) => {
  throw TypeError(e);
};
var Rc = (e, t, n) => t.has(e) || km("Cannot " + n);
var A = (e, t, n) => (
  Rc(e, t, "read from private field"),
  n ? n.call(e) : t.get(e)
),
  ce = (e, t, n) =>
    t.has(e)
      ? km("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  J = (e, t, n, r) => (
    Rc(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  Qe = (e, t, n) => (Rc(e, t, "access private method"), n);
var na = (e, t, n, r) => ({
  set _(i) {
    J(e, t, i, n);
  },
  get _() {
    return A(e, t, r);
  },
});
function cC(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Tf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var py = { exports: {} },
  Ul = {},
  my = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $s = Symbol.for("react.element"),
  uC = Symbol.for("react.portal"),
  dC = Symbol.for("react.fragment"),
  fC = Symbol.for("react.strict_mode"),
  pC = Symbol.for("react.profiler"),
  mC = Symbol.for("react.provider"),
  hC = Symbol.for("react.context"),
  gC = Symbol.for("react.forward_ref"),
  vC = Symbol.for("react.suspense"),
  yC = Symbol.for("react.memo"),
  xC = Symbol.for("react.lazy"),
  Tm = Symbol.iterator;
function wC(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Tm && e[Tm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var hy = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () { },
  enqueueReplaceState: function () { },
  enqueueSetState: function () { },
},
  gy = Object.assign,
  vy = {};
function bo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = vy),
    (this.updater = n || hy));
}
bo.prototype.isReactComponent = {};
bo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
bo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function yy() { }
yy.prototype = bo.prototype;
function Pf(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = vy),
    (this.updater = n || hy));
}
var jf = (Pf.prototype = new yy());
jf.constructor = Pf;
gy(jf, bo.prototype);
jf.isPureReactComponent = !0;
var Pm = Array.isArray,
  xy = Object.prototype.hasOwnProperty,
  Af = { current: null },
  wy = { key: !0, ref: !0, __self: !0, __source: !0 };
function by(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t))
      xy.call(t, r) && !wy.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: $s,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Af.current,
  };
}
function bC(e, t) {
  return {
    $$typeof: $s,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Rf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $s;
}
function SC(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var jm = /\/+/g;
function Nc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? SC("" + e.key)
    : t.toString(36);
}
function Oa(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case $s:
          case uC:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Nc(s, 0) : r),
      Pm(i)
        ? ((n = ""),
          e != null && (n = e.replace(jm, "$&/") + "/"),
          Oa(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
        (Rf(i) &&
          (i = bC(
            i,
            n +
            (!i.key || (s && s.key === i.key)
              ? ""
              : ("" + i.key).replace(jm, "$&/") + "/") +
            e,
          )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Pm(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Nc(o, a);
      s += Oa(o, t, n, l, i);
    }
  else if (((l = wC(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done;)
      ((o = o.value), (l = r + Nc(o, a++)), (s += Oa(o, t, n, l, i)));
  else if (o === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
        (t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t) +
        "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function ra(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Oa(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function CC(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var dt = { current: null },
  Ia = { transition: null },
  EC = {
    ReactCurrentDispatcher: dt,
    ReactCurrentBatchConfig: Ia,
    ReactCurrentOwner: Af,
  };
function Sy() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = {
  map: ra,
  forEach: function (e, t, n) {
    ra(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ra(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ra(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Rf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
re.Component = bo;
re.Fragment = dC;
re.Profiler = pC;
re.PureComponent = Pf;
re.StrictMode = fC;
re.Suspense = vC;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = EC;
re.act = Sy;
re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
      e +
      ".",
    );
  var r = gy({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Af.current)),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      xy.call(t, l) &&
        !wy.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: $s, type: e.type, key: i, ref: o, props: r, _owner: s };
};
re.createContext = function (e) {
  return (
    (e = {
      $$typeof: hC,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: mC, _context: e }),
    (e.Consumer = e)
  );
};
re.createElement = by;
re.createFactory = function (e) {
  var t = by.bind(null, e);
  return ((t.type = e), t);
};
re.createRef = function () {
  return { current: null };
};
re.forwardRef = function (e) {
  return { $$typeof: gC, render: e };
};
re.isValidElement = Rf;
re.lazy = function (e) {
  return { $$typeof: xC, _payload: { _status: -1, _result: e }, _init: CC };
};
re.memo = function (e, t) {
  return { $$typeof: yC, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function (e) {
  var t = Ia.transition;
  Ia.transition = {};
  try {
    e();
  } finally {
    Ia.transition = t;
  }
};
re.unstable_act = Sy;
re.useCallback = function (e, t) {
  return dt.current.useCallback(e, t);
};
re.useContext = function (e) {
  return dt.current.useContext(e);
};
re.useDebugValue = function () { };
re.useDeferredValue = function (e) {
  return dt.current.useDeferredValue(e);
};
re.useEffect = function (e, t) {
  return dt.current.useEffect(e, t);
};
re.useId = function () {
  return dt.current.useId();
};
re.useImperativeHandle = function (e, t, n) {
  return dt.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function (e, t) {
  return dt.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function (e, t) {
  return dt.current.useLayoutEffect(e, t);
};
re.useMemo = function (e, t) {
  return dt.current.useMemo(e, t);
};
re.useReducer = function (e, t, n) {
  return dt.current.useReducer(e, t, n);
};
re.useRef = function (e) {
  return dt.current.useRef(e);
};
re.useState = function (e) {
  return dt.current.useState(e);
};
re.useSyncExternalStore = function (e, t, n) {
  return dt.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function () {
  return dt.current.useTransition();
};
re.version = "18.3.1";
my.exports = re;
var g = my.exports;
const O = Tf(g),
  Nf = cC({ __proto__: null, default: O }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kC = g,
  TC = Symbol.for("react.element"),
  PC = Symbol.for("react.fragment"),
  jC = Object.prototype.hasOwnProperty,
  AC = kC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  RC = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cy(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) jC.call(t, r) && !RC.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: TC,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: AC.current,
  };
}
Ul.Fragment = PC;
Ul.jsx = Cy;
Ul.jsxs = Cy;
py.exports = Ul;
var h = py.exports,
  Ey = { exports: {} },
  jt = {},
  ky = { exports: {} },
  Ty = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, j) {
    var L = P.length;
    P.push(j);
    e: for (; 0 < L;) {
      var G = (L - 1) >>> 1,
        H = P[G];
      if (0 < i(H, j)) ((P[G] = j), (P[L] = H), (L = G));
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var j = P[0],
      L = P.pop();
    if (L !== j) {
      P[0] = L;
      e: for (var G = 0, H = P.length, X = H >>> 1; G < X;) {
        var q = 2 * (G + 1) - 1,
          me = P[q],
          ue = q + 1,
          _ = P[ue];
        if (0 > i(me, L))
          ue < H && 0 > i(_, me)
            ? ((P[G] = _), (P[ue] = L), (G = ue))
            : ((P[G] = me), (P[q] = L), (G = q));
        else if (ue < H && 0 > i(_, L)) ((P[G] = _), (P[ue] = L), (G = ue));
        else break e;
      }
    }
    return j;
  }
  function i(P, j) {
    var L = P.sortIndex - j.sortIndex;
    return L !== 0 ? L : P.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    f = 3,
    p = !1,
    b = !1,
    m = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(P) {
    for (var j = n(c); j !== null;) {
      if (j.callback === null) r(c);
      else if (j.startTime <= P)
        (r(c), (j.sortIndex = j.expirationTime), t(l, j));
      else break;
      j = n(c);
    }
  }
  function S(P) {
    if (((m = !1), x(P), !b))
      if (n(l) !== null) ((b = !0), U(C));
      else {
        var j = n(c);
        j !== null && F(S, j.startTime - P);
      }
  }
  function C(P, j) {
    ((b = !1), m && ((m = !1), y(T), (T = -1)), (p = !0));
    var L = f;
    try {
      for (
        x(j), d = n(l);
        d !== null && (!(d.expirationTime > j) || (P && !z()));
      ) {
        var G = d.callback;
        if (typeof G == "function") {
          ((d.callback = null), (f = d.priorityLevel));
          var H = G(d.expirationTime <= j);
          ((j = e.unstable_now()),
            typeof H == "function" ? (d.callback = H) : d === n(l) && r(l),
            x(j));
        } else r(l);
        d = n(l);
      }
      if (d !== null) var X = !0;
      else {
        var q = n(c);
        (q !== null && F(S, q.startTime - j), (X = !1));
      }
      return X;
    } finally {
      ((d = null), (f = L), (p = !1));
    }
  }
  var k = !1,
    E = null,
    T = -1,
    R = 5,
    N = -1;
  function z() {
    return !(e.unstable_now() - N < R);
  }
  function I() {
    if (E !== null) {
      var P = e.unstable_now();
      N = P;
      var j = !0;
      try {
        j = E(!0, P);
      } finally {
        j ? K() : ((k = !1), (E = null));
      }
    } else k = !1;
  }
  var K;
  if (typeof v == "function")
    K = function () {
      v(I);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      W = M.port2;
    ((M.port1.onmessage = I),
      (K = function () {
        W.postMessage(null);
      }));
  } else
    K = function () {
      w(I, 0);
    };
  function U(P) {
    ((E = P), k || ((k = !0), K()));
  }
  function F(P, j) {
    T = w(function () {
      P(e.unstable_now());
    }, j);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || p || ((b = !0), U(C));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
        )
        : (R = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (P) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = f;
      }
      var L = f;
      f = j;
      try {
        return P();
      } finally {
        f = L;
      }
    }),
    (e.unstable_pauseExecution = function () { }),
    (e.unstable_requestPaint = function () { }),
    (e.unstable_runWithPriority = function (P, j) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var L = f;
      f = P;
      try {
        return j();
      } finally {
        f = L;
      }
    }),
    (e.unstable_scheduleCallback = function (P, j, L) {
      var G = e.unstable_now();
      switch (
      (typeof L == "object" && L !== null
        ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? G + L : G))
        : (L = G),
        P)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = L + H),
        (P = {
          id: u++,
          callback: j,
          priorityLevel: P,
          startTime: L,
          expirationTime: H,
          sortIndex: -1,
        }),
        L > G
          ? ((P.sortIndex = L),
            t(c, P),
            n(l) === null &&
            P === n(c) &&
            (m ? (y(T), (T = -1)) : (m = !0), F(S, L - G)))
          : ((P.sortIndex = H), t(l, P), b || p || ((b = !0), U(C))),
        P
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (P) {
      var j = f;
      return function () {
        var L = f;
        f = j;
        try {
          return P.apply(this, arguments);
        } finally {
          f = L;
        }
      };
    }));
})(Ty);
ky.exports = Ty;
var NC = ky.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var MC = g,
  Pt = NC;
function D(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Py = new Set(),
  fs = {};
function hi(e, t) {
  (lo(e, t), lo(e + "Capture", t));
}
function lo(e, t) {
  for (fs[e] = t, e = 0; e < t.length; e++) Py.add(t[e]);
}
var zn = !(
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
),
  Lu = Object.prototype.hasOwnProperty,
  DC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Am = {},
  Rm = {};
function OC(e) {
  return Lu.call(Rm, e)
    ? !0
    : Lu.call(Am, e)
      ? !1
      : DC.test(e)
        ? (Rm[e] = !0)
        : ((Am[e] = !0), !1);
}
function IC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function LC(e, t, n, r) {
  if (t === null || typeof t > "u" || IC(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ft(e, t, n, r, i, o, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s));
}
var qe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    qe[e] = new ft(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  qe[t] = new ft(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  qe[e] = new ft(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  qe[e] = new ft(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    qe[e] = new ft(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  qe[e] = new ft(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  qe[e] = new ft(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  qe[e] = new ft(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  qe[e] = new ft(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Mf = /[\-:]([a-z])/g;
function Df(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Mf, Df);
    qe[t] = new ft(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Mf, Df);
    qe[t] = new ft(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Mf, Df);
  qe[t] = new ft(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  qe[e] = new ft(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
qe.xlinkHref = new ft(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  qe[e] = new ft(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Of(e, t, n, r) {
  var i = qe.hasOwnProperty(t) ? qe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
    !(2 < t.length) ||
    (t[0] !== "o" && t[0] !== "O") ||
    (t[1] !== "n" && t[1] !== "N")) &&
    (LC(t, n, i, r) && (n = null),
      r || i === null
        ? OC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
          ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
          : ((t = i.attributeName),
            (r = i.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((i = i.type),
                (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gn = MC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ia = Symbol.for("react.element"),
  Pi = Symbol.for("react.portal"),
  ji = Symbol.for("react.fragment"),
  If = Symbol.for("react.strict_mode"),
  _u = Symbol.for("react.profiler"),
  jy = Symbol.for("react.provider"),
  Ay = Symbol.for("react.context"),
  Lf = Symbol.for("react.forward_ref"),
  Fu = Symbol.for("react.suspense"),
  Vu = Symbol.for("react.suspense_list"),
  _f = Symbol.for("react.memo"),
  rr = Symbol.for("react.lazy"),
  Ry = Symbol.for("react.offscreen"),
  Nm = Symbol.iterator;
function Oo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Nm && e[Nm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ne = Object.assign,
  Mc;
function Ho(e) {
  if (Mc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Mc = (t && t[1]) || "";
    }
  return (
    `
` +
    Mc +
    e
  );
}
var Dc = !1;
function Oc(e, t) {
  if (!e || Dc) return "";
  Dc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
        o = r.stack.split(`
`),
        s = i.length - 1,
        a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];
      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                  l.includes("<anonymous>") &&
                  (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ((Dc = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Ho(e) : "";
}
function _C(e) {
  switch (e.tag) {
    case 5:
      return Ho(e.type);
    case 16:
      return Ho("Lazy");
    case 13:
      return Ho("Suspense");
    case 19:
      return Ho("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Oc(e.type, !1)), e);
    case 11:
      return ((e = Oc(e.type.render, !1)), e);
    case 1:
      return ((e = Oc(e.type, !0)), e);
    default:
      return "";
  }
}
function zu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ji:
      return "Fragment";
    case Pi:
      return "Portal";
    case _u:
      return "Profiler";
    case If:
      return "StrictMode";
    case Fu:
      return "Suspense";
    case Vu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ay:
        return (e.displayName || "Context") + ".Consumer";
      case jy:
        return (e._context.displayName || "Context") + ".Provider";
      case Lf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
          ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case _f:
        return (
          (t = e.displayName || null),
          t !== null ? t : zu(e.type) || "Memo"
        );
      case rr:
        ((t = e._payload), (e = e._init));
        try {
          return zu(e(t));
        } catch { }
    }
  return null;
}
function FC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return zu(t);
    case 8:
      return t === If ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Er(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ny(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function VC(e) {
  var t = Ny(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          ((r = "" + s), o.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function oa(e) {
  e._valueTracker || (e._valueTracker = VC(e));
}
function My(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ny(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function tl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bu(e, t) {
  var n = t.checked;
  return Ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Mm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Er(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Dy(e, t) {
  ((t = t.checked), t != null && Of(e, "checked", t, !1));
}
function $u(e, t) {
  Dy(e, t);
  var n = Er(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Uu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Uu(e, t.type, Er(t.defaultValue)),
    t.checked == null &&
    t.defaultChecked != null &&
    (e.defaultChecked = !!t.defaultChecked));
}
function Dm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Uu(e, t, n) {
  (t !== "number" || tl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ko = Array.isArray;
function Ui(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Er(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return Ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Om(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(D(92));
      if (Ko(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Er(n) };
}
function Oy(e, t) {
  var n = Er(t.value),
    r = Er(t.defaultValue);
  (n != null &&
    ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Im(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Iy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Iy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var sa,
  Ly = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
          return e(t, n, r, i);
        });
      }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        sa = sa || document.createElement("div"),
        sa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = sa.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild);
    }
  });
function ps(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zo = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0,
},
  zC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zo).forEach(function (e) {
  zC.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zo[t] = Zo[e]));
  });
});
function _y(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Zo.hasOwnProperty(e) && Zo[e])
      ? ("" + t).trim()
      : t + "px";
}
function Fy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = _y(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var BC = Ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Ku(e, t) {
  if (t) {
    if (BC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function Gu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var qu = null;
function Ff(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Yu = null,
  Wi = null,
  Hi = null;
function Lm(e) {
  if ((e = Hs(e))) {
    if (typeof Yu != "function") throw Error(D(280));
    var t = e.stateNode;
    t && ((t = ql(t)), Yu(e.stateNode, e.type, t));
  }
}
function Vy(e) {
  Wi ? (Hi ? Hi.push(e) : (Hi = [e])) : (Wi = e);
}
function zy() {
  if (Wi) {
    var e = Wi,
      t = Hi;
    if (((Hi = Wi = null), Lm(e), t)) for (e = 0; e < t.length; e++) Lm(t[e]);
  }
}
function By(e, t) {
  return e(t);
}
function $y() { }
var Ic = !1;
function Uy(e, t, n) {
  if (Ic) return e(t, n);
  Ic = !0;
  try {
    return By(e, t, n);
  } finally {
    ((Ic = !1), (Wi !== null || Hi !== null) && ($y(), zy()));
  }
}
function ms(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ql(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var Qu = !1;
if (zn)
  try {
    var Io = {};
    (Object.defineProperty(Io, "passive", {
      get: function () {
        Qu = !0;
      },
    }),
      window.addEventListener("test", Io, Io),
      window.removeEventListener("test", Io, Io));
  } catch {
    Qu = !1;
  }
function $C(e, t, n, r, i, o, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Jo = !1,
  nl = null,
  rl = !1,
  Xu = null,
  UC = {
    onError: function (e) {
      ((Jo = !0), (nl = e));
    },
  };
function WC(e, t, n, r, i, o, s, a, l) {
  ((Jo = !1), (nl = null), $C.apply(UC, arguments));
}
function HC(e, t, n, r, i, o, s, a, l) {
  if ((WC.apply(this, arguments), Jo)) {
    if (Jo) {
      var c = nl;
      ((Jo = !1), (nl = null));
    } else throw Error(D(198));
    rl || ((rl = !0), (Xu = c));
  }
}
function gi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return;) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Wy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function _m(e) {
  if (gi(e) !== e) throw Error(D(188));
}
function KC(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gi(e)), t === null)) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ;) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o;) {
        if (o === n) return (_m(i), e);
        if (o === r) return (_m(i), t);
        o = o.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) ((n = i), (r = o));
    else {
      for (var s = !1, a = i.child; a;) {
        if (a === n) {
          ((s = !0), (n = i), (r = o));
          break;
        }
        if (a === r) {
          ((s = !0), (r = i), (n = o));
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a;) {
          if (a === n) {
            ((s = !0), (n = o), (r = i));
            break;
          }
          if (a === r) {
            ((s = !0), (r = o), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function Hy(e) {
  return ((e = KC(e)), e !== null ? Ky(e) : null);
}
function Ky(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = Ky(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Gy = Pt.unstable_scheduleCallback,
  Fm = Pt.unstable_cancelCallback,
  GC = Pt.unstable_shouldYield,
  qC = Pt.unstable_requestPaint,
  Ie = Pt.unstable_now,
  YC = Pt.unstable_getCurrentPriorityLevel,
  Vf = Pt.unstable_ImmediatePriority,
  qy = Pt.unstable_UserBlockingPriority,
  il = Pt.unstable_NormalPriority,
  QC = Pt.unstable_LowPriority,
  Yy = Pt.unstable_IdlePriority,
  Wl = null,
  Sn = null;
function XC(e) {
  if (Sn && typeof Sn.onCommitFiberRoot == "function")
    try {
      Sn.onCommitFiberRoot(Wl, e, void 0, (e.current.flags & 128) === 128);
    } catch { }
}
var on = Math.clz32 ? Math.clz32 : eE,
  ZC = Math.log,
  JC = Math.LN2;
function eE(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((ZC(e) / JC) | 0)) | 0);
}
var aa = 64,
  la = 4194304;
function Go(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ol(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Go(a)) : ((o &= s), o !== 0 && (r = Go(o)));
  } else ((s = n & ~i), s !== 0 ? (r = Go(s)) : o !== 0 && (r = Go(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t;)
      ((n = 31 - on(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function tE(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function nE(e, t) {
  for (
    var n = e.suspendedLanes,
    r = e.pingedLanes,
    i = e.expirationTimes,
    o = e.pendingLanes;
    0 < o;
  ) {
    var s = 31 - on(o),
      a = 1 << s,
      l = i[s];
    (l === -1
      ? (!(a & n) || a & r) && (i[s] = tE(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function Zu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Qy() {
  var e = aa;
  return ((aa <<= 1), !(aa & 4194240) && (aa = 64), e);
}
function Lc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Us(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - on(t)),
    (e[t] = n));
}
function rE(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var i = 31 - on(n),
      o = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
  }
}
function zf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n;) {
    var r = 31 - on(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var fe = 0;
function Xy(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Zy,
  Bf,
  Jy,
  ex,
  tx,
  Ju = !1,
  ca = [],
  gr = null,
  vr = null,
  yr = null,
  hs = new Map(),
  gs = new Map(),
  or = [],
  iE =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Vm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      gr = null;
      break;
    case "dragenter":
    case "dragleave":
      vr = null;
      break;
    case "mouseover":
    case "mouseout":
      yr = null;
      break;
    case "pointerover":
    case "pointerout":
      hs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gs.delete(t.pointerId);
  }
}
function Lo(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [i],
    }),
      t !== null && ((t = Hs(t)), t !== null && Bf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function oE(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((gr = Lo(gr, e, t, n, r, i)), !0);
    case "dragenter":
      return ((vr = Lo(vr, e, t, n, r, i)), !0);
    case "mouseover":
      return ((yr = Lo(yr, e, t, n, r, i)), !0);
    case "pointerover":
      var o = i.pointerId;
      return (hs.set(o, Lo(hs.get(o) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (o = i.pointerId),
        gs.set(o, Lo(gs.get(o) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function nx(e) {
  var t = Kr(e.target);
  if (t !== null) {
    var n = gi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Wy(n)), t !== null)) {
          ((e.blockedOn = t),
            tx(e.priority, function () {
              Jy(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function La(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = ed(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((qu = r), n.target.dispatchEvent(r), (qu = null));
    } else return ((t = Hs(n)), t !== null && Bf(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function zm(e, t, n) {
  La(e) && n.delete(t);
}
function sE() {
  ((Ju = !1),
    gr !== null && La(gr) && (gr = null),
    vr !== null && La(vr) && (vr = null),
    yr !== null && La(yr) && (yr = null),
    hs.forEach(zm),
    gs.forEach(zm));
}
function _o(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
      Ju ||
      ((Ju = !0),
        Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority, sE)));
}
function vs(e) {
  function t(i) {
    return _o(i, e);
  }
  if (0 < ca.length) {
    _o(ca[0], e);
    for (var n = 1; n < ca.length; n++) {
      var r = ca[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    gr !== null && _o(gr, e),
    vr !== null && _o(vr, e),
    yr !== null && _o(yr, e),
    hs.forEach(t),
    gs.forEach(t),
    n = 0;
    n < or.length;
    n++
  )
    ((r = or[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < or.length && ((n = or[0]), n.blockedOn === null);)
    (nx(n), n.blockedOn === null && or.shift());
}
var Ki = Gn.ReactCurrentBatchConfig,
  sl = !0;
function aE(e, t, n, r) {
  var i = fe,
    o = Ki.transition;
  Ki.transition = null;
  try {
    ((fe = 1), $f(e, t, n, r));
  } finally {
    ((fe = i), (Ki.transition = o));
  }
}
function lE(e, t, n, r) {
  var i = fe,
    o = Ki.transition;
  Ki.transition = null;
  try {
    ((fe = 4), $f(e, t, n, r));
  } finally {
    ((fe = i), (Ki.transition = o));
  }
}
function $f(e, t, n, r) {
  if (sl) {
    var i = ed(e, t, n, r);
    if (i === null) (Kc(e, t, r, al, n), Vm(e, r));
    else if (oE(i, e, t, n, r)) r.stopPropagation();
    else if ((Vm(e, r), t & 4 && -1 < iE.indexOf(e))) {
      for (; i !== null;) {
        var o = Hs(i);
        if (
          (o !== null && Zy(o),
            (o = ed(e, t, n, r)),
            o === null && Kc(e, t, r, al, n),
            o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Kc(e, t, r, null, n);
  }
}
var al = null;
function ed(e, t, n, r) {
  if (((al = null), (e = Ff(r)), (e = Kr(e)), e !== null))
    if (((t = gi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Wy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((al = e), null);
}
function rx(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (YC()) {
        case Vf:
          return 1;
        case qy:
          return 4;
        case il:
        case QC:
          return 16;
        case Yy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fr = null,
  Uf = null,
  _a = null;
function ix() {
  if (_a) return _a;
  var e,
    t = Uf,
    n = t.length,
    r,
    i = "value" in fr ? fr.value : fr.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (_a = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Fa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ua() {
  return !0;
}
function Bm() {
  return !1;
}
function At(e) {
  function t(n, r, i, o, s) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ua
        : Bm),
      (this.isPropagationStopped = Bm),
      this
    );
  }
  return (
    Ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ua));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ua));
      },
      persist: function () { },
      isPersistent: ua,
    }),
    t
  );
}
var So = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function (e) {
    return e.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0,
},
  Wf = At(So),
  Ws = Ne({}, So, { view: 0, detail: 0 }),
  cE = At(Ws),
  _c,
  Fc,
  Fo,
  Hl = Ne({}, Ws, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Hf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Fo &&
          (Fo && e.type === "mousemove"
            ? ((_c = e.screenX - Fo.screenX), (Fc = e.screenY - Fo.screenY))
            : (Fc = _c = 0),
            (Fo = e)),
          _c);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Fc;
    },
  }),
  $m = At(Hl),
  uE = Ne({}, Hl, { dataTransfer: 0 }),
  dE = At(uE),
  fE = Ne({}, Ws, { relatedTarget: 0 }),
  Vc = At(fE),
  pE = Ne({}, So, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mE = At(pE),
  hE = Ne({}, So, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gE = At(hE),
  vE = Ne({}, So, { data: 0 }),
  Um = At(vE),
  yE = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  xE = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  wE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function bE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wE[e]) ? !!t[e] : !1;
}
function Hf() {
  return bE;
}
var SE = Ne({}, Ws, {
  key: function (e) {
    if (e.key) {
      var t = yE[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress"
      ? ((e = Fa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
      : e.type === "keydown" || e.type === "keyup"
        ? xE[e.keyCode] || "Unidentified"
        : "";
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: Hf,
  charCode: function (e) {
    return e.type === "keypress" ? Fa(e) : 0;
  },
  keyCode: function (e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  },
  which: function (e) {
    return e.type === "keypress"
      ? Fa(e)
      : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
  },
}),
  CE = At(SE),
  EE = Ne({}, Hl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Wm = At(EE),
  kE = Ne({}, Ws, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hf,
  }),
  TE = At(kE),
  PE = Ne({}, So, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jE = At(PE),
  AE = Ne({}, Hl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  RE = At(AE),
  NE = [9, 13, 27, 32],
  Kf = zn && "CompositionEvent" in window,
  es = null;
zn && "documentMode" in document && (es = document.documentMode);
var ME = zn && "TextEvent" in window && !es,
  ox = zn && (!Kf || (es && 8 < es && 11 >= es)),
  Hm = " ",
  Km = !1;
function sx(e, t) {
  switch (e) {
    case "keyup":
      return NE.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ax(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Ai = !1;
function DE(e, t) {
  switch (e) {
    case "compositionend":
      return ax(t);
    case "keypress":
      return t.which !== 32 ? null : ((Km = !0), Hm);
    case "textInput":
      return ((e = t.data), e === Hm && Km ? null : e);
    default:
      return null;
  }
}
function OE(e, t) {
  if (Ai)
    return e === "compositionend" || (!Kf && sx(e, t))
      ? ((e = ix()), (_a = Uf = fr = null), (Ai = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ox && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var IE = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Gm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!IE[e.type] : t === "textarea";
}
function lx(e, t, n, r) {
  (Vy(r),
    (t = ll(t, "onChange")),
    0 < t.length &&
    ((n = new Wf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var ts = null,
  ys = null;
function LE(e) {
  xx(e, 0);
}
function Kl(e) {
  var t = Mi(e);
  if (My(t)) return e;
}
function _E(e, t) {
  if (e === "change") return t;
}
var cx = !1;
if (zn) {
  var zc;
  if (zn) {
    var Bc = "oninput" in document;
    if (!Bc) {
      var qm = document.createElement("div");
      (qm.setAttribute("oninput", "return;"),
        (Bc = typeof qm.oninput == "function"));
    }
    zc = Bc;
  } else zc = !1;
  cx = zc && (!document.documentMode || 9 < document.documentMode);
}
function Ym() {
  ts && (ts.detachEvent("onpropertychange", ux), (ys = ts = null));
}
function ux(e) {
  if (e.propertyName === "value" && Kl(ys)) {
    var t = [];
    (lx(t, ys, e, Ff(e)), Uy(LE, t));
  }
}
function FE(e, t, n) {
  e === "focusin"
    ? (Ym(), (ts = t), (ys = n), ts.attachEvent("onpropertychange", ux))
    : e === "focusout" && Ym();
}
function VE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Kl(ys);
}
function zE(e, t) {
  if (e === "click") return Kl(t);
}
function BE(e, t) {
  if (e === "input" || e === "change") return Kl(t);
}
function $E(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var an = typeof Object.is == "function" ? Object.is : $E;
function xs(e, t) {
  if (an(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Lu.call(t, i) || !an(e[i], t[i])) return !1;
  }
  return !0;
}
function Qm(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function Xm(e, t) {
  var n = Qm(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Qm(n);
  }
}
function dx(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? dx(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function fx() {
  for (var e = window, t = tl(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = tl(e.document);
  }
  return t;
}
function Gf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function UE(e) {
  var t = fx(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    dx(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Gf(n)) {
      if (
        ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        ((r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Xm(n, o)));
        var s = Xm(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(s.node, s.offset))
              : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode);)
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var WE = zn && "documentMode" in document && 11 >= document.documentMode,
  Ri = null,
  td = null,
  ns = null,
  nd = !1;
function Zm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nd ||
    Ri == null ||
    Ri !== tl(r) ||
    ((r = Ri),
      "selectionStart" in r && Gf(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ns && xs(ns, r)) ||
      ((ns = r),
        (r = ll(td, "onSelect")),
        0 < r.length &&
        ((t = new Wf("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Ri))));
}
function da(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ni = {
  animationend: da("Animation", "AnimationEnd"),
  animationiteration: da("Animation", "AnimationIteration"),
  animationstart: da("Animation", "AnimationStart"),
  transitionend: da("Transition", "TransitionEnd"),
},
  $c = {},
  px = {};
zn &&
  ((px = document.createElement("div").style),
    "AnimationEvent" in window ||
    (delete Ni.animationend.animation,
      delete Ni.animationiteration.animation,
      delete Ni.animationstart.animation),
    "TransitionEvent" in window || delete Ni.transitionend.transition);
function Gl(e) {
  if ($c[e]) return $c[e];
  if (!Ni[e]) return e;
  var t = Ni[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in px) return ($c[e] = t[n]);
  return e;
}
var mx = Gl("animationend"),
  hx = Gl("animationiteration"),
  gx = Gl("animationstart"),
  vx = Gl("transitionend"),
  yx = new Map(),
  Jm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Rr(e, t) {
  (yx.set(e, t), hi(t, [e]));
}
for (var Uc = 0; Uc < Jm.length; Uc++) {
  var Wc = Jm[Uc],
    HE = Wc.toLowerCase(),
    KE = Wc[0].toUpperCase() + Wc.slice(1);
  Rr(HE, "on" + KE);
}
Rr(mx, "onAnimationEnd");
Rr(hx, "onAnimationIteration");
Rr(gx, "onAnimationStart");
Rr("dblclick", "onDoubleClick");
Rr("focusin", "onFocus");
Rr("focusout", "onBlur");
Rr(vx, "onTransitionEnd");
lo("onMouseEnter", ["mouseout", "mouseover"]);
lo("onMouseLeave", ["mouseout", "mouseover"]);
lo("onPointerEnter", ["pointerout", "pointerover"]);
lo("onPointerLeave", ["pointerout", "pointerover"]);
hi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
hi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
hi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
hi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
hi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var qo =
  "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " ",
  ),
  GE = new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));
function eh(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), HC(r, t, void 0, e), (e.currentTarget = null));
}
function xx(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          (eh(i, a, c), (o = l));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
              (l = a.instance),
              (c = a.currentTarget),
              (a = a.listener),
              l !== o && i.isPropagationStopped())
          )
            break e;
          (eh(i, a, c), (o = l));
        }
    }
  }
  if (rl) throw ((e = Xu), (rl = !1), (Xu = null), e);
}
function be(e, t) {
  var n = t[ad];
  n === void 0 && (n = t[ad] = new Set());
  var r = e + "__bubble";
  n.has(r) || (wx(t, e, 2, !1), n.add(r));
}
function Hc(e, t, n) {
  var r = 0;
  (t && (r |= 4), wx(n, e, r, t));
}
var fa = "_reactListening" + Math.random().toString(36).slice(2);
function ws(e) {
  if (!e[fa]) {
    ((e[fa] = !0),
      Py.forEach(function (n) {
        n !== "selectionchange" && (GE.has(n) || Hc(n, !1, e), Hc(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fa] || ((t[fa] = !0), Hc("selectionchange", !1, t));
  }
}
function wx(e, t, n, r) {
  switch (rx(t)) {
    case 1:
      var i = aE;
      break;
    case 4:
      i = lE;
      break;
    default:
      i = $f;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !Qu ||
    (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
    (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function Kc(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (; ;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null;) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
                l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null;) {
          if (((s = Kr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Uy(function () {
    var c = o,
      u = Ff(n),
      d = [];
    e: {
      var f = yx.get(e);
      if (f !== void 0) {
        var p = Wf,
          b = e;
        switch (e) {
          case "keypress":
            if (Fa(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = CE;
            break;
          case "focusin":
            ((b = "focus"), (p = Vc));
            break;
          case "focusout":
            ((b = "blur"), (p = Vc));
            break;
          case "beforeblur":
          case "afterblur":
            p = Vc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = $m;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = dE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = TE;
            break;
          case mx:
          case hx:
          case gx:
            p = mE;
            break;
          case vx:
            p = jE;
            break;
          case "scroll":
            p = cE;
            break;
          case "wheel":
            p = RE;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = gE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Wm;
        }
        var m = (t & 4) !== 0,
          w = !m && e === "scroll",
          y = m ? (f !== null ? f + "Capture" : null) : f;
        m = [];
        for (var v = c, x; v !== null;) {
          x = v;
          var S = x.stateNode;
          if (
            (x.tag === 5 &&
              S !== null &&
              ((x = S),
                y !== null && ((S = ms(v, y)), S != null && m.push(bs(v, S, x)))),
              w)
          )
            break;
          v = v.return;
        }
        0 < m.length &&
          ((f = new p(f, b, null, n, u)), d.push({ event: f, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
            (p = e === "mouseout" || e === "pointerout"),
            f &&
            n !== qu &&
            (b = n.relatedTarget || n.fromElement) &&
            (Kr(b) || b[Bn]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            u.window === u
              ? u
              : (f = u.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
            p
              ? ((b = n.relatedTarget || n.toElement),
                (p = c),
                (b = b ? Kr(b) : null),
                b !== null &&
                ((w = gi(b)), b !== w || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
              : ((p = null), (b = c)),
            p !== b)
        ) {
          if (
            ((m = $m),
              (S = "onMouseLeave"),
              (y = "onMouseEnter"),
              (v = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
              ((m = Wm),
                (S = "onPointerLeave"),
                (y = "onPointerEnter"),
                (v = "pointer")),
              (w = p == null ? f : Mi(p)),
              (x = b == null ? f : Mi(b)),
              (f = new m(S, v + "leave", p, n, u)),
              (f.target = w),
              (f.relatedTarget = x),
              (S = null),
              Kr(u) === c &&
              ((m = new m(y, v + "enter", b, n, u)),
                (m.target = x),
                (m.relatedTarget = w),
                (S = m)),
              (w = S),
              p && b)
          )
            t: {
              for (m = p, y = b, v = 0, x = m; x; x = bi(x)) v++;
              for (x = 0, S = y; S; S = bi(S)) x++;
              for (; 0 < v - x;) ((m = bi(m)), v--);
              for (; 0 < x - v;) ((y = bi(y)), x--);
              for (; v--;) {
                if (m === y || (y !== null && m === y.alternate)) break t;
                ((m = bi(m)), (y = bi(y)));
              }
              m = null;
            }
          else m = null;
          (p !== null && th(d, f, p, m, !1),
            b !== null && w !== null && th(d, w, b, m, !0));
        }
      }
      e: {
        if (
          ((f = c ? Mi(c) : window),
            (p = f.nodeName && f.nodeName.toLowerCase()),
            p === "select" || (p === "input" && f.type === "file"))
        )
          var C = _E;
        else if (Gm(f))
          if (cx) C = BE;
          else {
            C = VE;
            var k = FE;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = zE);
        if (C && (C = C(e, c))) {
          lx(d, C, n, u);
          break e;
        }
        (k && k(e, f, c),
          e === "focusout" &&
          (k = f._wrapperState) &&
          k.controlled &&
          f.type === "number" &&
          Uu(f, "number", f.value));
      }
      switch (((k = c ? Mi(c) : window), e)) {
        case "focusin":
          (Gm(k) || k.contentEditable === "true") &&
            ((Ri = k), (td = c), (ns = null));
          break;
        case "focusout":
          ns = td = Ri = null;
          break;
        case "mousedown":
          nd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((nd = !1), Zm(d, n, u));
          break;
        case "selectionchange":
          if (WE) break;
        case "keydown":
        case "keyup":
          Zm(d, n, u);
      }
      var E;
      if (Kf)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Ai
          ? sx(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      (T &&
        (ox &&
          n.locale !== "ko" &&
          (Ai || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Ai && (E = ix())
            : ((fr = u),
              (Uf = "value" in fr ? fr.value : fr.textContent),
              (Ai = !0))),
          (k = ll(c, T)),
          0 < k.length &&
          ((T = new Um(T, e, null, n, u)),
            d.push({ event: T, listeners: k }),
            E ? (T.data = E) : ((E = ax(n)), E !== null && (T.data = E)))),
        (E = ME ? DE(e, n) : OE(e, n)) &&
        ((c = ll(c, "onBeforeInput")),
          0 < c.length &&
          ((u = new Um("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = E))));
    }
    xx(d, t);
  });
}
function bs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ll(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var i = e,
      o = i.stateNode;
    (i.tag === 5 &&
      o !== null &&
      ((i = o),
        (o = ms(e, n)),
        o != null && r.unshift(bs(e, o, i)),
        (o = ms(e, t)),
        o != null && r.push(bs(e, o, i))),
      (e = e.return));
  }
  return r;
}
function bi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function th(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r;) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
        i
          ? ((l = ms(n, o)), l != null && s.unshift(bs(n, l, a)))
          : i || ((l = ms(n, o)), l != null && s.push(bs(n, l, a)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var qE = /\r\n?/g,
  YE = /\u0000|\uFFFD/g;
function nh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      qE,
      `
`,
    )
    .replace(YE, "");
}
function pa(e, t, n) {
  if (((t = nh(t)), nh(e) !== t && n)) throw Error(D(425));
}
function cl() { }
var rd = null,
  id = null;
function od(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var sd = typeof setTimeout == "function" ? setTimeout : void 0,
  QE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  rh = typeof Promise == "function" ? Promise : void 0,
  XE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof rh < "u"
        ? function (e) {
          return rh.resolve(null).then(e).catch(ZE);
        }
        : sd;
function ZE(e) {
  setTimeout(function () {
    throw e;
  });
}
function Gc(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), vs(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  vs(t);
}
function xr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ih(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Co = Math.random().toString(36).slice(2),
  xn = "__reactFiber$" + Co,
  Ss = "__reactProps$" + Co,
  Bn = "__reactContainer$" + Co,
  ad = "__reactEvents$" + Co,
  JE = "__reactListeners$" + Co,
  ek = "__reactHandles$" + Co;
function Kr(e) {
  var t = e[xn];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if ((t = n[Bn] || n[xn])) {
      if (
        ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ih(e); e !== null;) {
          if ((n = e[xn])) return n;
          e = ih(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Hs(e) {
  return (
    (e = e[xn] || e[Bn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Mi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function ql(e) {
  return e[Ss] || null;
}
var ld = [],
  Di = -1;
function Nr(e) {
  return { current: e };
}
function Se(e) {
  0 > Di || ((e.current = ld[Di]), (ld[Di] = null), Di--);
}
function ve(e, t) {
  (Di++, (ld[Di] = e.current), (e.current = t));
}
var kr = {},
  nt = Nr(kr),
  yt = Nr(!1),
  ai = kr;
function co(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
    ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function xt(e) {
  return ((e = e.childContextTypes), e != null);
}
function ul() {
  (Se(yt), Se(nt));
}
function oh(e, t, n) {
  if (nt.current !== kr) throw Error(D(168));
  (ve(nt, t), ve(yt, n));
}
function bx(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(D(108, FC(e) || "Unknown", i));
  return Ne({}, n, r);
}
function dl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kr),
    (ai = nt.current),
    ve(nt, e),
    ve(yt, yt.current),
    !0
  );
}
function sh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  (n
    ? ((e = bx(e, t, ai)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Se(yt),
      Se(nt),
      ve(nt, e))
    : Se(yt),
    ve(yt, n));
}
var In = null,
  Yl = !1,
  qc = !1;
function Sx(e) {
  In === null ? (In = [e]) : In.push(e);
}
function tk(e) {
  ((Yl = !0), Sx(e));
}
function Mr() {
  if (!qc && In !== null) {
    qc = !0;
    var e = 0,
      t = fe;
    try {
      var n = In;
      for (fe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((In = null), (Yl = !1));
    } catch (i) {
      throw (In !== null && (In = In.slice(e + 1)), Gy(Vf, Mr), i);
    } finally {
      ((fe = t), (qc = !1));
    }
  }
  return null;
}
var Oi = [],
  Ii = 0,
  fl = null,
  pl = 0,
  Mt = [],
  Dt = 0,
  li = null,
  _n = 1,
  Fn = "";
function $r(e, t) {
  ((Oi[Ii++] = pl), (Oi[Ii++] = fl), (fl = e), (pl = t));
}
function Cx(e, t, n) {
  ((Mt[Dt++] = _n), (Mt[Dt++] = Fn), (Mt[Dt++] = li), (li = e));
  var r = _n;
  e = Fn;
  var i = 32 - on(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var o = 32 - on(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    ((o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (_n = (1 << (32 - on(t) + i)) | (n << i) | r),
      (Fn = o + e));
  } else ((_n = (1 << o) | (n << i) | r), (Fn = e));
}
function qf(e) {
  e.return !== null && ($r(e, 1), Cx(e, 1, 0));
}
function Yf(e) {
  for (; e === fl;)
    ((fl = Oi[--Ii]), (Oi[Ii] = null), (pl = Oi[--Ii]), (Oi[Ii] = null));
  for (; e === li;)
    ((li = Mt[--Dt]),
      (Mt[Dt] = null),
      (Fn = Mt[--Dt]),
      (Mt[Dt] = null),
      (_n = Mt[--Dt]),
      (Mt[Dt] = null));
}
var kt = null,
  Et = null,
  ke = !1,
  rn = null;
function Ex(e, t) {
  var n = Ot(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ah(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (kt = e), (Et = xr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (kt = e), (Et = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = li !== null ? { id: _n, overflow: Fn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ot(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (kt = e),
            (Et = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function cd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ud(e) {
  if (ke) {
    var t = Et;
    if (t) {
      var n = t;
      if (!ah(e, t)) {
        if (cd(e)) throw Error(D(418));
        t = xr(n.nextSibling);
        var r = kt;
        t && ah(e, t)
          ? Ex(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ke = !1), (kt = e));
      }
    } else {
      if (cd(e)) throw Error(D(418));
      ((e.flags = (e.flags & -4097) | 2), (ke = !1), (kt = e));
    }
  }
}
function lh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  kt = e;
}
function ma(e) {
  if (e !== kt) return !1;
  if (!ke) return (lh(e), (ke = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
        (t = t !== "head" && t !== "body" && !od(e.type, e.memoizedProps))),
      t && (t = Et))
  ) {
    if (cd(e)) throw (kx(), Error(D(418)));
    for (; t;) (Ex(e, t), (t = xr(t.nextSibling)));
  }
  if ((lh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Et = xr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Et = null;
    }
  } else Et = kt ? xr(e.stateNode.nextSibling) : null;
  return !0;
}
function kx() {
  for (var e = Et; e;) e = xr(e.nextSibling);
}
function uo() {
  ((Et = kt = null), (ke = !1));
}
function Qf(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
var nk = Gn.ReactCurrentBatchConfig;
function Vo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
          var a = i.refs;
          s === null ? delete a[o] : (a[o] = s);
        }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function ha(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function ch(e) {
  var t = e._init;
  return t(e._payload);
}
function Tx(e) {
  function t(y, v) {
    if (e) {
      var x = y.deletions;
      x === null ? ((y.deletions = [v]), (y.flags |= 16)) : x.push(v);
    }
  }
  function n(y, v) {
    if (!e) return null;
    for (; v !== null;) (t(y, v), (v = v.sibling));
    return null;
  }
  function r(y, v) {
    for (y = new Map(); v !== null;)
      (v.key !== null ? y.set(v.key, v) : y.set(v.index, v), (v = v.sibling));
    return y;
  }
  function i(y, v) {
    return ((y = Cr(y, v)), (y.index = 0), (y.sibling = null), y);
  }
  function o(y, v, x) {
    return (
      (y.index = x),
      e
        ? ((x = y.alternate),
          x !== null
            ? ((x = x.index), x < v ? ((y.flags |= 2), v) : x)
            : ((y.flags |= 2), v))
        : ((y.flags |= 1048576), v)
    );
  }
  function s(y) {
    return (e && y.alternate === null && (y.flags |= 2), y);
  }
  function a(y, v, x, S) {
    return v === null || v.tag !== 6
      ? ((v = tu(x, y.mode, S)), (v.return = y), v)
      : ((v = i(v, x)), (v.return = y), v);
  }
  function l(y, v, x, S) {
    var C = x.type;
    return C === ji
      ? u(y, v, x.props.children, S, x.key)
      : v !== null &&
        (v.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === rr &&
            ch(C) === v.type))
        ? ((S = i(v, x.props)), (S.ref = Vo(y, v, x)), (S.return = y), S)
        : ((S = Ha(x.type, x.key, x.props, null, y.mode, S)),
          (S.ref = Vo(y, v, x)),
          (S.return = y),
          S);
  }
  function c(y, v, x, S) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== x.containerInfo ||
      v.stateNode.implementation !== x.implementation
      ? ((v = nu(x, y.mode, S)), (v.return = y), v)
      : ((v = i(v, x.children || [])), (v.return = y), v);
  }
  function u(y, v, x, S, C) {
    return v === null || v.tag !== 7
      ? ((v = ii(x, y.mode, S, C)), (v.return = y), v)
      : ((v = i(v, x)), (v.return = y), v);
  }
  function d(y, v, x) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((v = tu("" + v, y.mode, x)), (v.return = y), v);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ia:
          return (
            (x = Ha(v.type, v.key, v.props, null, y.mode, x)),
            (x.ref = Vo(y, null, v)),
            (x.return = y),
            x
          );
        case Pi:
          return ((v = nu(v, y.mode, x)), (v.return = y), v);
        case rr:
          var S = v._init;
          return d(y, S(v._payload), x);
      }
      if (Ko(v) || Oo(v))
        return ((v = ii(v, y.mode, x, null)), (v.return = y), v);
      ha(y, v);
    }
    return null;
  }
  function f(y, v, x, S) {
    var C = v !== null ? v.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return C !== null ? null : a(y, v, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ia:
          return x.key === C ? l(y, v, x, S) : null;
        case Pi:
          return x.key === C ? c(y, v, x, S) : null;
        case rr:
          return ((C = x._init), f(y, v, C(x._payload), S));
      }
      if (Ko(x) || Oo(x)) return C !== null ? null : u(y, v, x, S, null);
      ha(y, x);
    }
    return null;
  }
  function p(y, v, x, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((y = y.get(x) || null), a(v, y, "" + S, C));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ia:
          return (
            (y = y.get(S.key === null ? x : S.key) || null),
            l(v, y, S, C)
          );
        case Pi:
          return (
            (y = y.get(S.key === null ? x : S.key) || null),
            c(v, y, S, C)
          );
        case rr:
          var k = S._init;
          return p(y, v, x, k(S._payload), C);
      }
      if (Ko(S) || Oo(S)) return ((y = y.get(x) || null), u(v, y, S, C, null));
      ha(v, S);
    }
    return null;
  }
  function b(y, v, x, S) {
    for (
      var C = null, k = null, E = v, T = (v = 0), R = null;
      E !== null && T < x.length;
      T++
    ) {
      E.index > T ? ((R = E), (E = null)) : (R = E.sibling);
      var N = f(y, E, x[T], S);
      if (N === null) {
        E === null && (E = R);
        break;
      }
      (e && E && N.alternate === null && t(y, E),
        (v = o(N, v, T)),
        k === null ? (C = N) : (k.sibling = N),
        (k = N),
        (E = R));
    }
    if (T === x.length) return (n(y, E), ke && $r(y, T), C);
    if (E === null) {
      for (; T < x.length; T++)
        ((E = d(y, x[T], S)),
          E !== null &&
          ((v = o(E, v, T)),
            k === null ? (C = E) : (k.sibling = E),
            (k = E)));
      return (ke && $r(y, T), C);
    }
    for (E = r(y, E); T < x.length; T++)
      ((R = p(E, y, T, x[T], S)),
        R !== null &&
        (e && R.alternate !== null && E.delete(R.key === null ? T : R.key),
          (v = o(R, v, T)),
          k === null ? (C = R) : (k.sibling = R),
          (k = R)));
    return (
      e &&
      E.forEach(function (z) {
        return t(y, z);
      }),
      ke && $r(y, T),
      C
    );
  }
  function m(y, v, x, S) {
    var C = Oo(x);
    if (typeof C != "function") throw Error(D(150));
    if (((x = C.call(x)), x == null)) throw Error(D(151));
    for (
      var k = (C = null), E = v, T = (v = 0), R = null, N = x.next();
      E !== null && !N.done;
      T++, N = x.next()
    ) {
      E.index > T ? ((R = E), (E = null)) : (R = E.sibling);
      var z = f(y, E, N.value, S);
      if (z === null) {
        E === null && (E = R);
        break;
      }
      (e && E && z.alternate === null && t(y, E),
        (v = o(z, v, T)),
        k === null ? (C = z) : (k.sibling = z),
        (k = z),
        (E = R));
    }
    if (N.done) return (n(y, E), ke && $r(y, T), C);
    if (E === null) {
      for (; !N.done; T++, N = x.next())
        ((N = d(y, N.value, S)),
          N !== null &&
          ((v = o(N, v, T)),
            k === null ? (C = N) : (k.sibling = N),
            (k = N)));
      return (ke && $r(y, T), C);
    }
    for (E = r(y, E); !N.done; T++, N = x.next())
      ((N = p(E, y, T, N.value, S)),
        N !== null &&
        (e && N.alternate !== null && E.delete(N.key === null ? T : N.key),
          (v = o(N, v, T)),
          k === null ? (C = N) : (k.sibling = N),
          (k = N)));
    return (
      e &&
      E.forEach(function (I) {
        return t(y, I);
      }),
      ke && $r(y, T),
      C
    );
  }
  function w(y, v, x, S) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === ji &&
        x.key === null &&
        (x = x.props.children),
        typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case ia:
          e: {
            for (var C = x.key, k = v; k !== null;) {
              if (k.key === C) {
                if (((C = x.type), C === ji)) {
                  if (k.tag === 7) {
                    (n(y, k.sibling),
                      (v = i(k, x.props.children)),
                      (v.return = y),
                      (y = v));
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === rr &&
                    ch(C) === k.type)
                ) {
                  (n(y, k.sibling),
                    (v = i(k, x.props)),
                    (v.ref = Vo(y, k, x)),
                    (v.return = y),
                    (y = v));
                  break e;
                }
                n(y, k);
                break;
              } else t(y, k);
              k = k.sibling;
            }
            x.type === ji
              ? ((v = ii(x.props.children, y.mode, S, x.key)),
                (v.return = y),
                (y = v))
              : ((S = Ha(x.type, x.key, x.props, null, y.mode, S)),
                (S.ref = Vo(y, v, x)),
                (S.return = y),
                (y = S));
          }
          return s(y);
        case Pi:
          e: {
            for (k = x.key; v !== null;) {
              if (v.key === k)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === x.containerInfo &&
                  v.stateNode.implementation === x.implementation
                ) {
                  (n(y, v.sibling),
                    (v = i(v, x.children || [])),
                    (v.return = y),
                    (y = v));
                  break e;
                } else {
                  n(y, v);
                  break;
                }
              else t(y, v);
              v = v.sibling;
            }
            ((v = nu(x, y.mode, S)), (v.return = y), (y = v));
          }
          return s(y);
        case rr:
          return ((k = x._init), w(y, v, k(x._payload), S));
      }
      if (Ko(x)) return b(y, v, x, S);
      if (Oo(x)) return m(y, v, x, S);
      ha(y, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        v !== null && v.tag === 6
          ? (n(y, v.sibling), (v = i(v, x)), (v.return = y), (y = v))
          : (n(y, v), (v = tu(x, y.mode, S)), (v.return = y), (y = v)),
        s(y))
      : n(y, v);
  }
  return w;
}
var fo = Tx(!0),
  Px = Tx(!1),
  ml = Nr(null),
  hl = null,
  Li = null,
  Xf = null;
function Zf() {
  Xf = Li = hl = null;
}
function Jf(e) {
  var t = ml.current;
  (Se(ml), (e._currentValue = t));
}
function dd(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
    )
      break;
    e = e.return;
  }
}
function Gi(e, t) {
  ((hl = e),
    (Xf = Li = null),
    (e = e.dependencies),
    e !== null &&
    e.firstContext !== null &&
    (e.lanes & t && (gt = !0), (e.firstContext = null)));
}
function Ft(e) {
  var t = e._currentValue;
  if (Xf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Li === null)) {
      if (hl === null) throw Error(D(308));
      ((Li = e), (hl.dependencies = { lanes: 0, firstContext: e }));
    } else Li = Li.next = e;
  return t;
}
var Gr = null;
function ep(e) {
  Gr === null ? (Gr = [e]) : Gr.push(e);
}
function jx(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), ep(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    $n(e, r)
  );
}
function $n(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var ir = !1;
function tp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ax(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
    (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects,
    }));
}
function Vn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ae & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      $n(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ep(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    $n(e, n)
  );
}
function Va(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), zf(e, n));
  }
}
function uh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (o === null ? (i = o = s) : (o = o.next = s), (n = n.next));
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function gl(e, t, n, r) {
  var i = e.updateQueue;
  ir = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    ((l.next = null), s === null ? (o = c) : (s.next = c), (s = l));
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
        (a = u.lastBaseUpdate),
        a !== s &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
          (u.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    ((s = 0), (u = c = l = null), (a = o));
    do {
      var f = a.lane,
        p = a.eventTime;
      if ((r & f) === f) {
        u !== null &&
          (u = u.next =
          {
            eventTime: p,
            lane: 0,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          });
        e: {
          var b = e,
            m = a;
          switch (((f = t), (p = n), m.tag)) {
            case 1:
              if (((b = m.payload), typeof b == "function")) {
                d = b.call(p, d, f);
                break e;
              }
              d = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = m.payload),
                  (f = typeof b == "function" ? b.call(p, d, f) : b),
                  f == null)
              )
                break e;
              d = Ne({}, d, f);
              break e;
            case 2:
              ir = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
            (f = i.effects),
            f === null ? (i.effects = [a]) : f.push(a));
      } else
        ((p = {
          eventTime: p,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = p), (l = d)) : (u = u.next = p),
          (s |= f));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (u === null && (l = d),
        (i.baseState = l),
        (i.firstBaseUpdate = c),
        (i.lastBaseUpdate = u),
        (t = i.shared.interleaved),
        t !== null)
    ) {
      i = t;
      do ((s |= i.lane), (i = i.next));
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    ((ui |= s), (e.lanes = s), (e.memoizedState = d));
  }
}
function dh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(D(191, i));
        i.call(r);
      }
    }
}
var Ks = {},
  Cn = Nr(Ks),
  Cs = Nr(Ks),
  Es = Nr(Ks);
function qr(e) {
  if (e === Ks) throw Error(D(174));
  return e;
}
function np(e, t) {
  switch ((ve(Es, t), ve(Cs, e), ve(Cn, Ks), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hu(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Hu(t, e)));
  }
  (Se(Cn), ve(Cn, t));
}
function po() {
  (Se(Cn), Se(Cs), Se(Es));
}
function Rx(e) {
  qr(Es.current);
  var t = qr(Cn.current),
    n = Hu(t, e.type);
  t !== n && (ve(Cs, e), ve(Cn, n));
}
function rp(e) {
  Cs.current === e && (Se(Cn), Se(Cs));
}
var je = Nr(0);
function vl(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Yc = [];
function ip() {
  for (var e = 0; e < Yc.length; e++)
    Yc[e]._workInProgressVersionPrimary = null;
  Yc.length = 0;
}
var za = Gn.ReactCurrentDispatcher,
  Qc = Gn.ReactCurrentBatchConfig,
  ci = 0,
  Re = null,
  ze = null,
  Ue = null,
  yl = !1,
  rs = !1,
  ks = 0,
  rk = 0;
function Xe() {
  throw Error(D(321));
}
function op(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!an(e[n], t[n])) return !1;
  return !0;
}
function sp(e, t, n, r, i, o) {
  if (
    ((ci = o),
      (Re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (za.current = e === null || e.memoizedState === null ? ak : lk),
      (e = n(r, i)),
      rs)
  ) {
    o = 0;
    do {
      if (((rs = !1), (ks = 0), 25 <= o)) throw Error(D(301));
      ((o += 1),
        (Ue = ze = null),
        (t.updateQueue = null),
        (za.current = ck),
        (e = n(r, i)));
    } while (rs);
  }
  if (
    ((za.current = xl),
      (t = ze !== null && ze.next !== null),
      (ci = 0),
      (Ue = ze = Re = null),
      (yl = !1),
      t)
  )
    throw Error(D(300));
  return e;
}
function ap() {
  var e = ks !== 0;
  return ((ks = 0), e);
}
function hn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Ue === null ? (Re.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue);
}
function Vt() {
  if (ze === null) {
    var e = Re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ze.next;
  var t = Ue === null ? Re.memoizedState : Ue.next;
  if (t !== null) ((Ue = t), (ze = e));
  else {
    if (e === null) throw Error(D(310));
    ((ze = e),
      (e = {
        memoizedState: ze.memoizedState,
        baseState: ze.baseState,
        baseQueue: ze.baseQueue,
        queue: ze.queue,
        next: null,
      }),
      Ue === null ? (Re.memoizedState = Ue = e) : (Ue = Ue.next = e));
  }
  return Ue;
}
function Ts(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xc(e) {
  var t = Vt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = ze,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      ((i.next = o.next), (o.next = s));
    }
    ((r.baseQueue = i = o), (n.pending = null));
  }
  if (i !== null) {
    ((o = i.next), (r = r.baseState));
    var a = (s = null),
      l = null,
      c = o;
    do {
      var u = c.lane;
      if ((ci & u) === u)
        (l !== null &&
          (l = l.next =
          {
            lane: 0,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null,
          }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (Re.lanes |= u),
          (ui |= u));
      }
      c = c.next;
    } while (c !== null && c !== o);
    (l === null ? (s = r) : (l.next = a),
      an(r, t.memoizedState) || (gt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((o = i.lane), (Re.lanes |= o), (ui |= o), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zc(e) {
  var t = Vt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do ((o = e(o, s.action)), (s = s.next));
    while (s !== i);
    (an(o, t.memoizedState) || (gt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function Nx() { }
function Mx(e, t) {
  var n = Re,
    r = Vt(),
    i = t(),
    o = !an(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (gt = !0)),
      (r = r.queue),
      lp(Ix.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Ue !== null && Ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
        Ps(9, Ox.bind(null, n, r, i, t), void 0, null),
        We === null)
    )
      throw Error(D(349));
    ci & 30 || Dx(n, t, i);
  }
  return i;
}
function Dx(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Ox(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Lx(t) && _x(e));
}
function Ix(e, t, n) {
  return n(function () {
    Lx(t) && _x(e);
  });
}
function Lx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !an(e, n);
  } catch {
    return !0;
  }
}
function _x(e) {
  var t = $n(e, 1);
  t !== null && sn(t, e, 1, -1);
}
function fh(e) {
  var t = hn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ts,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = sk.bind(null, Re, e)),
    [t.memoizedState, e]
  );
}
function Ps(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Fx() {
  return Vt().memoizedState;
}
function Ba(e, t, n, r) {
  var i = hn();
  ((Re.flags |= e),
    (i.memoizedState = Ps(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Ql(e, t, n, r) {
  var i = Vt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ze !== null) {
    var s = ze.memoizedState;
    if (((o = s.destroy), r !== null && op(r, s.deps))) {
      i.memoizedState = Ps(t, n, o, r);
      return;
    }
  }
  ((Re.flags |= e), (i.memoizedState = Ps(1 | t, n, o, r)));
}
function ph(e, t) {
  return Ba(8390656, 8, e, t);
}
function lp(e, t) {
  return Ql(2048, 8, e, t);
}
function Vx(e, t) {
  return Ql(4, 2, e, t);
}
function zx(e, t) {
  return Ql(4, 4, e, t);
}
function Bx(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function $x(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Ql(4, 4, Bx.bind(null, t, e), n)
  );
}
function cp() { }
function Ux(e, t) {
  var n = Vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && op(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Wx(e, t) {
  var n = Vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && op(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Hx(e, t, n) {
  return ci & 21
    ? (an(n, t) || ((n = Qy()), (Re.lanes |= n), (ui |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (gt = !0)), (e.memoizedState = n));
}
function ik(e, t) {
  var n = fe;
  ((fe = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Qc.transition;
  Qc.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((fe = n), (Qc.transition = r));
  }
}
function Kx() {
  return Vt().memoizedState;
}
function ok(e, t, n) {
  var r = Sr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Gx(e))
  )
    qx(t, n);
  else if (((n = jx(e, t, n, r)), n !== null)) {
    var i = ut();
    (sn(n, e, r, i), Yx(n, t, r));
  }
}
function sk(e, t, n) {
  var r = Sr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Gx(e)) qx(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), an(a, s))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), ep(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = jx(e, t, i, r)),
      n !== null && ((i = ut()), sn(n, e, r, i), Yx(n, t, r)));
  }
}
function Gx(e) {
  var t = e.alternate;
  return e === Re || (t !== null && t === Re);
}
function qx(e, t) {
  rs = yl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Yx(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), zf(e, n));
  }
}
var xl = {
  readContext: Ft,
  useCallback: Xe,
  useContext: Xe,
  useEffect: Xe,
  useImperativeHandle: Xe,
  useInsertionEffect: Xe,
  useLayoutEffect: Xe,
  useMemo: Xe,
  useReducer: Xe,
  useRef: Xe,
  useState: Xe,
  useDebugValue: Xe,
  useDeferredValue: Xe,
  useTransition: Xe,
  useMutableSource: Xe,
  useSyncExternalStore: Xe,
  useId: Xe,
  unstable_isNewReconciler: !1,
},
  ak = {
    readContext: Ft,
    useCallback: function (e, t) {
      return ((hn().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ft,
    useEffect: ph,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ba(4194308, 4, Bx.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ba(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ba(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = hn();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = hn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ok.bind(null, Re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = hn();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: fh,
    useDebugValue: cp,
    useDeferredValue: function (e) {
      return (hn().memoizedState = e);
    },
    useTransition: function () {
      var e = fh(!1),
        t = e[0];
      return ((e = ik.bind(null, e[1])), (hn().memoizedState = e), [t, e]);
    },
    useMutableSource: function () { },
    useSyncExternalStore: function (e, t, n) {
      var r = Re,
        i = hn();
      if (ke) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = t()), We === null)) throw Error(D(349));
        ci & 30 || Dx(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        ph(Ix.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ps(9, Ox.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = hn(),
        t = We.identifierPrefix;
      if (ke) {
        var n = Fn,
          r = _n;
        ((n = (r & ~(1 << (32 - on(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ks++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = rk++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  lk = {
    readContext: Ft,
    useCallback: Ux,
    useContext: Ft,
    useEffect: lp,
    useImperativeHandle: $x,
    useInsertionEffect: Vx,
    useLayoutEffect: zx,
    useMemo: Wx,
    useReducer: Xc,
    useRef: Fx,
    useState: function () {
      return Xc(Ts);
    },
    useDebugValue: cp,
    useDeferredValue: function (e) {
      var t = Vt();
      return Hx(t, ze.memoizedState, e);
    },
    useTransition: function () {
      var e = Xc(Ts)[0],
        t = Vt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nx,
    useSyncExternalStore: Mx,
    useId: Kx,
    unstable_isNewReconciler: !1,
  },
  ck = {
    readContext: Ft,
    useCallback: Ux,
    useContext: Ft,
    useEffect: lp,
    useImperativeHandle: $x,
    useInsertionEffect: Vx,
    useLayoutEffect: zx,
    useMemo: Wx,
    useReducer: Zc,
    useRef: Fx,
    useState: function () {
      return Zc(Ts);
    },
    useDebugValue: cp,
    useDeferredValue: function (e) {
      var t = Vt();
      return ze === null ? (t.memoizedState = e) : Hx(t, ze.memoizedState, e);
    },
    useTransition: function () {
      var e = Zc(Ts)[0],
        t = Vt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nx,
    useSyncExternalStore: Mx,
    useId: Kx,
    unstable_isNewReconciler: !1,
  };
function Zt(e, t) {
  if (e && e.defaultProps) {
    ((t = Ne({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function fd(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Xl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gi(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ut(),
      i = Sr(e),
      o = Vn(r, i);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = wr(e, o, i)),
      t !== null && (sn(t, e, i, r), Va(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ut(),
      i = Sr(e),
      o = Vn(r, i);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = wr(e, o, i)),
      t !== null && (sn(t, e, i, r), Va(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ut(),
      r = Sr(e),
      i = Vn(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = wr(e, i, r)),
      t !== null && (sn(t, e, r, n), Va(t, e, r)));
  },
};
function mh(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !xs(n, r) || !xs(i, o)
        : !0
  );
}
function Qx(e, t, n) {
  var r = !1,
    i = kr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ft(o))
      : ((i = xt(t) ? ai : nt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? co(e, i) : kr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
    ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function hh(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
    t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
    t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Xl.enqueueReplaceState(t, t.state, null));
}
function pd(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), tp(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (i.context = Ft(o))
    : ((o = xt(t) ? ai : nt.current), (i.context = co(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (fd(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
    typeof i.getSnapshotBeforeUpdate == "function" ||
    (typeof i.UNSAFE_componentWillMount != "function" &&
      typeof i.componentWillMount != "function") ||
    ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
      i.UNSAFE_componentWillMount(),
      t !== i.state && Xl.enqueueReplaceState(i, i.state, null),
      gl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function mo(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += _C(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Jc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function md(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var uk = typeof WeakMap == "function" ? WeakMap : Map;
function Xx(e, t, n) {
  ((n = Vn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (bl || ((bl = !0), (Ed = r)), md(e, t));
    }),
    n
  );
}
function Zx(e, t, n) {
  ((n = Vn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        md(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
    typeof o.componentDidCatch == "function" &&
    (n.callback = function () {
      (md(e, t),
        typeof r != "function" &&
        (br === null ? (br = new Set([this])) : br.add(this)));
      var s = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: s !== null ? s : "",
      });
    }),
    n
  );
}
function gh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new uk();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = Ek.bind(null, e, t, n)), t.then(e, e));
}
function vh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
        t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function yh(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
      ? (e.flags |= 65536)
      : ((e.flags |= 128),
        (n.flags |= 131072),
        (n.flags &= -52805),
        n.tag === 1 &&
        (n.alternate === null
          ? (n.tag = 17)
          : ((t = Vn(-1, 1)), (t.tag = 2), wr(n, t, 1))),
        (n.lanes |= 1)),
      e);
}
var dk = Gn.ReactCurrentOwner,
  gt = !1;
function st(e, t, n, r) {
  t.child = e === null ? Px(t, null, n, r) : fo(t, e.child, n, r);
}
function xh(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Gi(t, i),
    (r = sp(e, t, n, r, o, i)),
    (n = ap()),
    e !== null && !gt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Un(e, t, i))
      : (ke && n && qf(t), (t.flags |= 1), st(e, t, r, i), t.child)
  );
}
function wh(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !vp(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Jx(e, t, o, r, i))
      : ((e = Ha(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xs), n(s, r) && e.ref === t.ref)
    )
      return Un(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Cr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Jx(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (xs(o, r) && e.ref === t.ref)
      if (((gt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (gt = !0);
      else return ((t.lanes = e.lanes), Un(e, t, i));
  }
  return hd(e, t, n, r, i);
}
function e0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ve(Fi, St),
        (St |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ve(Fi, St),
          (St |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ve(Fi, St),
        (St |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ve(Fi, St),
      (St |= r));
  return (st(e, t, i, n), t.child);
}
function t0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function hd(e, t, n, r, i) {
  var o = xt(n) ? ai : nt.current;
  return (
    (o = co(t, o)),
    Gi(t, i),
    (n = sp(e, t, n, r, o, i)),
    (r = ap()),
    e !== null && !gt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Un(e, t, i))
      : (ke && r && qf(t), (t.flags |= 1), st(e, t, n, i), t.child)
  );
}
function bh(e, t, n, r, i) {
  if (xt(n)) {
    var o = !0;
    dl(t);
  } else o = !1;
  if ((Gi(t, i), t.stateNode === null))
    ($a(e, t), Qx(t, n, r), pd(t, n, r, i), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ft(c))
      : ((c = xt(n) ? ai : nt.current), (c = co(t, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && hh(t, s, r, c)),
      (ir = !1));
    var f = t.memoizedState;
    ((s.state = f),
      gl(t, r, s, i),
      (l = t.memoizedState),
      a !== r || f !== l || yt.current || ir
        ? (typeof u == "function" && (fd(t, n, u, r), (l = t.memoizedState)),
          (a = ir || mh(t, n, a, r, f, l, c))
            ? (d ||
              (typeof s.UNSAFE_componentWillMount != "function" &&
                typeof s.componentWillMount != "function") ||
              (typeof s.componentWillMount == "function" &&
                s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      Ax(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Zt(t.type, a)),
      (s.props = c),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ft(l))
        : ((l = xt(n) ? ai : nt.current), (l = co(t, l))));
    var p = n.getDerivedStateFromProps;
    ((u =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && hh(t, s, r, l)),
      (ir = !1),
      (f = t.memoizedState),
      (s.state = f),
      gl(t, r, s, i));
    var b = t.memoizedState;
    a !== d || f !== b || yt.current || ir
      ? (typeof p == "function" && (fd(t, n, p, r), (b = t.memoizedState)),
        (c = ir || mh(t, n, c, r, f, b, l) || !1)
          ? (u ||
            (typeof s.UNSAFE_componentWillUpdate != "function" &&
              typeof s.componentWillUpdate != "function") ||
            (typeof s.componentWillUpdate == "function" &&
              s.componentWillUpdate(r, b, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
              s.UNSAFE_componentWillUpdate(r, b, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
            (a === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (s.props = r),
        (s.state = b),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
        (a === e.memoizedProps && f === e.memoizedState) ||
        (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
        (a === e.memoizedProps && f === e.memoizedState) ||
        (t.flags |= 1024),
        (r = !1));
  }
  return gd(e, t, n, r, o, i);
}
function gd(e, t, n, r, i, o) {
  t0(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (i && sh(t, n, !1), Un(e, t, o));
  ((r = t.stateNode), (dk.current = t));
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = fo(t, e.child, null, o)), (t.child = fo(t, null, a, o)))
      : st(e, t, a, o),
    (t.memoizedState = r.state),
    i && sh(t, n, !0),
    t.child
  );
}
function n0(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? oh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && oh(e, t.context, !1),
    np(e, t.containerInfo));
}
function Sh(e, t, n, r, i) {
  return (uo(), Qf(i), (t.flags |= 256), st(e, t, n, r), t.child);
}
var vd = { dehydrated: null, treeContext: null, retryLane: 0 };
function yd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function r0(e, t, n) {
  var r = t.pendingProps,
    i = je.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      a
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      ve(je, i & 1),
      e === null)
  )
    return (
      ud(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
          ? e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824)
          : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = ec(s, r, 0, null)),
              (e = ii(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = yd(n)),
              (t.memoizedState = vd),
              e)
            : up(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return fk(e, t, s, r, a, i, n);
  if (o) {
    ((o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Cr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Cr(a, o)) : ((o = ii(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? yd(n)
          : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions,
          }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = vd),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Cr(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
    ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function up(e, t) {
  return (
    (t = ec({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ga(e, t, n, r) {
  return (
    r !== null && Qf(r),
    fo(t, e.child, null, n),
    (e = up(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function fk(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Jc(Error(D(422)))), ga(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = ec({ mode: "visible", children: r.children }, i, 0, null)),
          (o = ii(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && fo(t, e.child, null, s),
          (t.child.memoizedState = yd(s)),
          (t.memoizedState = vd),
          o);
  if (!(t.mode & 1)) return ga(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (o = Error(D(419))),
      (r = Jc(o, r, void 0)),
      ga(e, t, s, r)
    );
  }
  if (((a = (s & e.childLanes) !== 0), gt || a)) {
    if (((r = We), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
        i !== o.retryLane &&
        ((o.retryLane = i), $n(e, i), sn(r, e, i, -1)));
    }
    return (gp(), (r = Jc(Error(D(421)))), ga(e, t, s, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = kk.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Et = xr(i.nextSibling)),
      (kt = t),
      (ke = !0),
      (rn = null),
      e !== null &&
      ((Mt[Dt++] = _n),
        (Mt[Dt++] = Fn),
        (Mt[Dt++] = li),
        (_n = e.id),
        (Fn = e.overflow),
        (li = t)),
      (t = up(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ch(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), dd(e.return, t, n));
}
function eu(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: i,
    })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function i0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((st(e, t, r.children, n), (r = je.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && Ch(e, n, t);
        else if (e.tag === 19) Ch(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((ve(je, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null;)
          ((e = n.alternate),
            e !== null && vl(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          eu(t, !1, i, n, o));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null;) {
          if (((e = i.alternate), e !== null && vl(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        eu(t, !0, n, null, o);
        break;
      case "together":
        eu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $a(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Un(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
      (ui |= t.lanes),
      !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Cr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Cr(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function pk(e, t, n) {
  switch (t.tag) {
    case 3:
      (n0(t), uo());
      break;
    case 5:
      Rx(t);
      break;
    case 1:
      xt(t.type) && dl(t);
      break;
    case 4:
      np(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (ve(ml, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ve(je, je.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? r0(e, t, n)
            : (ve(je, je.current & 1),
              (e = Un(e, t, n)),
              e !== null ? e.sibling : null);
      ve(je, je.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return i0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
          i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          ve(je, je.current),
          r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), e0(e, t, n));
  }
  return Un(e, t, n);
}
var o0, xd, s0, a0;
o0 = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
xd = function () { };
s0 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), qr(Cn.current));
    var o = null;
    switch (n) {
      case "input":
        ((i = Bu(e, i)), (r = Bu(e, r)), (o = []));
        break;
      case "select":
        ((i = Ne({}, i, { value: void 0 })),
          (r = Ne({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((i = Wu(e, i)), (r = Wu(e, r)), (o = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = cl);
    }
    Ku(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (fs.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
          r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else (n || (o || (o = []), o.push(c, n)), (n = l));
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(c, l))
            : c === "children"
              ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(c, "" + l)
              : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (fs.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && be("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(c, l));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
a0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zo(e, t) {
  if (!ke)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null;)
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null;)
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null;)
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null;)
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function mk(e, t, n) {
  var r = t.pendingProps;
  switch ((Yf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Ze(t), null);
    case 1:
      return (xt(t.type) && ul(), Ze(t), null);
    case 3:
      return (
        (r = t.stateNode),
        po(),
        Se(yt),
        Se(nt),
        ip(),
        r.pendingContext &&
        ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
        (ma(t)
          ? (t.flags |= 4)
          : e === null ||
          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
          ((t.flags |= 1024), rn !== null && (Pd(rn), (rn = null)))),
        xd(e, t),
        Ze(t),
        null
      );
    case 5:
      rp(t);
      var i = qr(Es.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (s0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return (Ze(t), null);
        }
        if (((e = qr(Cn.current)), ma(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[xn] = t), (r[Ss] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (be("cancel", r), be("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              be("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < qo.length; i++) be(qo[i], r);
              break;
            case "source":
              be("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (be("error", r), be("load", r));
              break;
            case "details":
              be("toggle", r);
              break;
            case "input":
              (Mm(r, o), be("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                be("invalid", r));
              break;
            case "textarea":
              (Om(r, o), be("invalid", r));
          }
          (Ku(n, o), (i = null));
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                  (o.suppressHydrationWarning !== !0 &&
                    pa(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                  r.textContent !== "" + a &&
                  (o.suppressHydrationWarning !== !0 &&
                    pa(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : fs.hasOwnProperty(s) &&
                a != null &&
                s === "onScroll" &&
                be("scroll", r);
            }
          switch (n) {
            case "input":
              (oa(r), Dm(r, o, !0));
              break;
            case "textarea":
              (oa(r), Im(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = cl);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Iy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                    ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[xn] = t),
            (e[Ss] = r),
            o0(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = Gu(n, r)), n)) {
              case "dialog":
                (be("cancel", e), be("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (be("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < qo.length; i++) be(qo[i], e);
                i = r;
                break;
              case "source":
                (be("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (be("error", e), be("load", e), (i = r));
                break;
              case "details":
                (be("toggle", e), (i = r));
                break;
              case "input":
                (Mm(e, r), (i = Bu(e, r)), be("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ne({}, r, { value: void 0 })),
                  be("invalid", e));
                break;
              case "textarea":
                (Om(e, r), (i = Wu(e, r)), be("invalid", e));
                break;
              default:
                i = r;
            }
            (Ku(n, i), (a = i));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Fy(e, l)
                  : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Ly(e, l))
                    : o === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && ps(e, l)
                        : typeof l == "number" && ps(e, "" + l)
                      : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (fs.hasOwnProperty(o)
                        ? l != null && o === "onScroll" && be("scroll", e)
                        : l != null && Of(e, o, l, s));
              }
            switch (n) {
              case "input":
                (oa(e), Dm(e, r, !1));
                break;
              case "textarea":
                (oa(e), Im(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Er(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Ui(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                    Ui(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = cl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Ze(t), null);
    case 6:
      if (e && t.stateNode != null) a0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (((n = qr(Es.current)), qr(Cn.current), ma(t))) {
          if (
            ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[xn] = t),
              (o = r.nodeValue !== n) && ((e = kt), e !== null))
          )
            switch (e.tag) {
              case 3:
                pa(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pa(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xn] = t),
            (t.stateNode = r));
      }
      return (Ze(t), null);
    case 13:
      if (
        (Se(je),
          (r = t.memoizedState),
          e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ke && Et !== null && t.mode & 1 && !(t.flags & 128))
          (kx(), uo(), (t.flags |= 98560), (o = !1));
        else if (((o = ma(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(D(318));
            if (
              ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
            )
              throw Error(D(317));
            o[xn] = t;
          } else
            (uo(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Ze(t), (o = !1));
        } else (rn !== null && (Pd(rn), (rn = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
          r &&
          ((t.child.flags |= 8192),
            t.mode & 1 &&
            (e === null || je.current & 1 ? Be === 0 && (Be = 3) : gp())),
          t.updateQueue !== null && (t.flags |= 4),
          Ze(t),
          null);
    case 4:
      return (
        po(),
        xd(e, t),
        e === null && ws(t.stateNode.containerInfo),
        Ze(t),
        null
      );
    case 10:
      return (Jf(t.type._context), Ze(t), null);
    case 17:
      return (xt(t.type) && ul(), Ze(t), null);
    case 19:
      if ((Se(je), (o = t.memoizedState), o === null)) return (Ze(t), null);
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) zo(o, !1);
        else {
          if (Be !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null;) {
              if (((s = vl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                  zo(o, !1),
                  r = s.updateQueue,
                  r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                  t.subtreeFlags = 0,
                  r = n,
                  n = t.child;
                  n !== null;
                )
                  ((o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                              lanes: e.lanes,
                              firstContext: e.firstContext,
                            })),
                    (n = n.sibling));
                return (ve(je, (je.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ie() > ho &&
            ((t.flags |= 128), (r = !0), zo(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                zo(o, !0),
                o.tail === null && o.tailMode === "hidden" && !s.alternate && !ke)
            )
              return (Ze(t), null);
          } else
            2 * Ie() - o.renderingStartTime > ho &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), zo(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ie()),
          (t.sibling = null),
          (n = je.current),
          ve(je, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ze(t), null);
    case 22:
    case 23:
      return (
        hp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? St & 1073741824 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ze(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function hk(e, t) {
  switch ((Yf(t), t.tag)) {
    case 1:
      return (
        xt(t.type) && ul(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        po(),
        Se(yt),
        Se(nt),
        ip(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (rp(t), null);
    case 13:
      if (
        (Se(je), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        uo();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (Se(je), null);
    case 4:
      return (po(), null);
    case 10:
      return (Jf(t.type._context), null);
    case 22:
    case 23:
      return (hp(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var va = !1,
  et = !1,
  gk = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function _i(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        De(e, t, r);
      }
    else n.current = null;
}
function wd(e, t, n) {
  try {
    n();
  } catch (r) {
    De(e, t, r);
  }
}
var Eh = !1;
function vk(e, t) {
  if (((rd = sl), (e = fx()), Gf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            d = e,
            f = null;
          t: for (; ;) {
            for (
              var p;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = s + i),
              d !== o || (r !== 0 && d.nodeType !== 3) || (l = s + r),
              d.nodeType === 3 && (s += d.nodeValue.length),
              (p = d.firstChild) !== null;
            )
              ((f = d), (d = p));
            for (; ;) {
              if (d === e) break t;
              if (
                (f === n && ++c === i && (a = s),
                  f === o && ++u === r && (l = s),
                  (p = d.nextSibling) !== null)
              )
                break;
              ((d = f), (f = d.parentNode));
            }
            d = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (id = { focusedElem: e, selectionRange: n }, sl = !1, $ = t; $ !== null;)
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), ($ = e));
    else
      for (; $ !== null;) {
        t = $;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var m = b.memoizedProps,
                    w = b.memoizedState,
                    y = t.stateNode,
                    v = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : Zt(t.type, m),
                      w,
                    );
                  y.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                  x.documentElement &&
                  x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (S) {
          De(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), ($ = e));
          break;
        }
        $ = t.return;
      }
  return ((b = Eh), (Eh = !1), b);
}
function is(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        ((i.destroy = void 0), o !== void 0 && wd(t, n, o));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Zl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function l0(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), l0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
    ((t = e.stateNode),
      t !== null &&
      (delete t[xn], delete t[Ss], delete t[ad], delete t[JE], delete t[ek])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function c0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kh(e) {
  e: for (; ;) {
    for (; e.sibling === null;) {
      if (e.return === null || c0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
          ? ((t = n.parentNode), t.insertBefore(e, n))
          : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = cl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sd(e, t, n), e = e.sibling; e !== null;)
      (Sd(e, t, n), (e = e.sibling));
}
function Cd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cd(e, t, n), e = e.sibling; e !== null;)
      (Cd(e, t, n), (e = e.sibling));
}
var He = null,
  nn = !1;
function Xn(e, t, n) {
  for (n = n.child; n !== null;) (u0(e, t, n), (n = n.sibling));
}
function u0(e, t, n) {
  if (Sn && typeof Sn.onCommitFiberUnmount == "function")
    try {
      Sn.onCommitFiberUnmount(Wl, n);
    } catch { }
  switch (n.tag) {
    case 5:
      et || _i(n, t);
    case 6:
      var r = He,
        i = nn;
      ((He = null),
        Xn(e, t, n),
        (He = r),
        (nn = i),
        He !== null &&
        (nn
          ? ((e = He),
            (n = n.stateNode),
            e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
          : He.removeChild(n.stateNode)));
      break;
    case 18:
      He !== null &&
        (nn
          ? ((e = He),
            (n = n.stateNode),
            e.nodeType === 8
              ? Gc(e.parentNode, n)
              : e.nodeType === 1 && Gc(e, n),
            vs(e))
          : Gc(He, n.stateNode));
      break;
    case 4:
      ((r = He),
        (i = nn),
        (He = n.stateNode.containerInfo),
        (nn = !0),
        Xn(e, t, n),
        (He = r),
        (nn = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !et &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          ((o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && wd(n, t, s),
            (i = i.next));
        } while (i !== r);
      }
      Xn(e, t, n);
      break;
    case 1:
      if (
        !et &&
        (_i(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          De(n, t, a);
        }
      Xn(e, t, n);
      break;
    case 21:
      Xn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((et = (r = et) || n.memoizedState !== null), Xn(e, t, n), (et = r))
        : Xn(e, t, n);
      break;
    default:
      Xn(e, t, n);
  }
}
function Th(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new gk()),
      t.forEach(function (r) {
        var i = Tk.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Gt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null;) {
          switch (a.tag) {
            case 5:
              ((He = a.stateNode), (nn = !1));
              break e;
            case 3:
              ((He = a.stateNode.containerInfo), (nn = !0));
              break e;
            case 4:
              ((He = a.stateNode.containerInfo), (nn = !0));
              break e;
          }
          a = a.return;
        }
        if (He === null) throw Error(D(160));
        (u0(o, s, i), (He = null), (nn = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (c) {
        De(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) (d0(t, e), (t = t.sibling));
}
function d0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Gt(t, e), pn(e), r & 4)) {
        try {
          (is(3, e, e.return), Zl(3, e));
        } catch (m) {
          De(e, e.return, m);
        }
        try {
          is(5, e, e.return);
        } catch (m) {
          De(e, e.return, m);
        }
      }
      break;
    case 1:
      (Gt(t, e), pn(e), r & 512 && n !== null && _i(n, n.return));
      break;
    case 5:
      if (
        (Gt(t, e),
          pn(e),
          r & 512 && n !== null && _i(n, n.return),
          e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ps(i, "");
        } catch (m) {
          De(e, e.return, m);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && o.type === "radio" && o.name != null && Dy(i, o),
              Gu(a, s));
            var c = Gu(a, o);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                d = l[s + 1];
              u === "style"
                ? Fy(i, d)
                : u === "dangerouslySetInnerHTML"
                  ? Ly(i, d)
                  : u === "children"
                    ? ps(i, d)
                    : Of(i, u, d, c);
            }
            switch (a) {
              case "input":
                $u(i, o);
                break;
              case "textarea":
                Oy(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? Ui(i, !!o.multiple, p, !1)
                  : f !== !!o.multiple &&
                  (o.defaultValue != null
                    ? Ui(i, !!o.multiple, o.defaultValue, !0)
                    : Ui(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ss] = o;
          } catch (m) {
            De(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((Gt(t, e), pn(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        ((i = e.stateNode), (o = e.memoizedProps));
        try {
          i.nodeValue = o;
        } catch (m) {
          De(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (Gt(t, e), pn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vs(t.containerInfo);
        } catch (m) {
          De(e, e.return, m);
        }
      break;
    case 4:
      (Gt(t, e), pn(e));
      break;
    case 13:
      (Gt(t, e),
        pn(e),
        (i = e.child),
        i.flags & 8192 &&
        ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
          (i.alternate !== null && i.alternate.memoizedState !== null) ||
          (pp = Ie())),
        r & 4 && Th(e));
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((et = (c = et) || u), Gt(t, e), (et = c)) : Gt(t, e),
          pn(e),
          r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
            (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for ($ = e, u = e.child; u !== null;) {
            for (d = $ = u; $ !== null;) {
              switch (((f = $), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  is(4, f, f.return);
                  break;
                case 1:
                  _i(f, f.return);
                  var b = f.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount());
                    } catch (m) {
                      De(r, n, m);
                    }
                  }
                  break;
                case 5:
                  _i(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    jh(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), ($ = p)) : jh(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ;) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                ((i = d.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = _y("display", s))));
              } catch (m) {
                De(e, e.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (m) {
                De(e, e.return, m);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ((d.child.return = d), (d = d.child));
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null;) {
            if (d.return === null || d.return === e) break e;
            (u === d && (u = null), (d = d.return));
          }
          (u === d && (u = null),
            (d.sibling.return = d.return),
            (d = d.sibling));
        }
      }
      break;
    case 19:
      (Gt(t, e), pn(e), r & 4 && Th(e));
      break;
    case 21:
      break;
    default:
      (Gt(t, e), pn(e));
  }
}
function pn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (c0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ps(i, ""), (r.flags &= -33));
          var o = kh(e);
          Cd(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = kh(e);
          Sd(e, a, s);
          break;
        default:
          throw Error(D(161));
      }
    } catch (l) {
      De(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yk(e, t, n) {
  (($ = e), f0(e));
}
function f0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null;) {
    var i = $,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || va;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || et;
        a = va;
        var c = et;
        if (((va = s), (et = l) && !c))
          for ($ = i; $ !== null;)
            ((s = $),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Ah(i)
                : l !== null
                  ? ((l.return = s), ($ = l))
                  : Ah(i));
        for (; o !== null;) (($ = o), f0(o), (o = o.sibling));
        (($ = i), (va = a), (et = c));
      }
      Ph(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), ($ = o)) : Ph(e);
  }
}
function Ph(e) {
  for (; $ !== null;) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              et || Zl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !et)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Zt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && dh(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                dh(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && vs(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
        et || (t.flags & 512 && bd(t));
      } catch (f) {
        De(t, t.return, f);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), ($ = n));
      break;
    }
    $ = t.return;
  }
}
function jh(e) {
  for (; $ !== null;) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), ($ = n));
      break;
    }
    $ = t.return;
  }
}
function Ah(e) {
  for (; $ !== null;) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Zl(4, t);
          } catch (l) {
            De(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              De(t, i, l);
            }
          }
          var o = t.return;
          try {
            bd(t);
          } catch (l) {
            De(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            bd(t);
          } catch (l) {
            De(t, s, l);
          }
      }
    } catch (l) {
      De(t, t.return, l);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), ($ = a));
      break;
    }
    $ = t.return;
  }
}
var xk = Math.ceil,
  wl = Gn.ReactCurrentDispatcher,
  dp = Gn.ReactCurrentOwner,
  Lt = Gn.ReactCurrentBatchConfig,
  ae = 0,
  We = null,
  _e = null,
  Ge = 0,
  St = 0,
  Fi = Nr(0),
  Be = 0,
  js = null,
  ui = 0,
  Jl = 0,
  fp = 0,
  os = null,
  ht = null,
  pp = 0,
  ho = 1 / 0,
  On = null,
  bl = !1,
  Ed = null,
  br = null,
  ya = !1,
  pr = null,
  Sl = 0,
  ss = 0,
  kd = null,
  Ua = -1,
  Wa = 0;
function ut() {
  return ae & 6 ? Ie() : Ua !== -1 ? Ua : (Ua = Ie());
}
function Sr(e) {
  return e.mode & 1
    ? ae & 2 && Ge !== 0
      ? Ge & -Ge
      : nk.transition !== null
        ? (Wa === 0 && (Wa = Qy()), Wa)
        : ((e = fe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : rx(e.type))),
          e)
    : 1;
}
function sn(e, t, n, r) {
  if (50 < ss) throw ((ss = 0), (kd = null), Error(D(185)));
  (Us(e, n, r),
    (!(ae & 2) || e !== We) &&
    (e === We && (!(ae & 2) && (Jl |= n), Be === 4 && sr(e, Ge)),
      wt(e, r),
      n === 1 && ae === 0 && !(t.mode & 1) && ((ho = Ie() + 500), Yl && Mr())));
}
function wt(e, t) {
  var n = e.callbackNode;
  nE(e, t);
  var r = ol(e, e === We ? Ge : 0);
  if (r === 0)
    (n !== null && Fm(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fm(n), t === 1))
      (e.tag === 0 ? tk(Rh.bind(null, e)) : Sx(Rh.bind(null, e)),
        XE(function () {
          !(ae & 6) && Mr();
        }),
        (n = null));
    else {
      switch (Xy(r)) {
        case 1:
          n = Vf;
          break;
        case 4:
          n = qy;
          break;
        case 16:
          n = il;
          break;
        case 536870912:
          n = Yy;
          break;
        default:
          n = il;
      }
      n = w0(n, p0.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function p0(e, t) {
  if (((Ua = -1), (Wa = 0), ae & 6)) throw Error(D(327));
  var n = e.callbackNode;
  if (qi() && e.callbackNode !== n) return null;
  var r = ol(e, e === We ? Ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cl(e, r);
  else {
    t = r;
    var i = ae;
    ae |= 2;
    var o = h0();
    (We !== e || Ge !== t) && ((On = null), (ho = Ie() + 500), ri(e, t));
    do
      try {
        Sk();
        break;
      } catch (a) {
        m0(e, a);
      }
    while (!0);
    (Zf(),
      (wl.current = o),
      (ae = i),
      _e !== null ? (t = 0) : ((We = null), (Ge = 0), (t = Be)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Zu(e)), i !== 0 && ((r = i), (t = Td(e, i)))), t === 1)
    )
      throw ((n = js), ri(e, 0), sr(e, r), wt(e, Ie()), n);
    if (t === 6) sr(e, r);
    else {
      if (
        ((i = e.current.alternate),
          !(r & 30) &&
          !wk(i) &&
          ((t = Cl(e, r)),
            t === 2 && ((o = Zu(e)), o !== 0 && ((r = o), (t = Td(e, o)))),
            t === 1))
      )
        throw ((n = js), ri(e, 0), sr(e, r), wt(e, Ie()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          Ur(e, ht, On);
          break;
        case 3:
          if (
            (sr(e, r), (r & 130023424) === r && ((t = pp + 500 - Ie()), 10 < t))
          ) {
            if (ol(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (ut(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = sd(Ur.bind(null, e, ht, On), t);
            break;
          }
          Ur(e, ht, On);
          break;
        case 4:
          if ((sr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r;) {
            var s = 31 - on(r);
            ((o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o));
          }
          if (
            ((r = i),
              (r = Ie() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * xk(r / 1960)) - r),
              10 < r)
          ) {
            e.timeoutHandle = sd(Ur.bind(null, e, ht, On), r);
            break;
          }
          Ur(e, ht, On);
          break;
        case 5:
          Ur(e, ht, On);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return (wt(e, Ie()), e.callbackNode === n ? p0.bind(null, e) : null);
}
function Td(e, t) {
  var n = os;
  return (
    e.current.memoizedState.isDehydrated && (ri(e, t).flags |= 256),
    (e = Cl(e, t)),
    e !== 2 && ((t = ht), (ht = n), t !== null && Pd(t)),
    e
  );
}
function Pd(e) {
  ht === null ? (ht = e) : ht.push.apply(ht, e);
}
function wk(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!an(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function sr(e, t) {
  for (
    t &= ~fp,
    t &= ~Jl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - on(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Rh(e) {
  if (ae & 6) throw Error(D(327));
  qi();
  var t = ol(e, 0);
  if (!(t & 1)) return (wt(e, Ie()), null);
  var n = Cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zu(e);
    r !== 0 && ((t = r), (n = Td(e, r)));
  }
  if (n === 1) throw ((n = js), ri(e, 0), sr(e, t), wt(e, Ie()), n);
  if (n === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ur(e, ht, On),
    wt(e, Ie()),
    null
  );
}
function mp(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ((ae = n), ae === 0 && ((ho = Ie() + 500), Yl && Mr()));
  }
}
function di(e) {
  pr !== null && pr.tag === 0 && !(ae & 6) && qi();
  var t = ae;
  ae |= 1;
  var n = Lt.transition,
    r = fe;
  try {
    if (((Lt.transition = null), (fe = 1), e)) return e();
  } finally {
    ((fe = r), (Lt.transition = n), (ae = t), !(ae & 6) && Mr());
  }
}
function hp() {
  ((St = Fi.current), Se(Fi));
}
function ri(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), QE(n)), _e !== null))
    for (n = _e.return; n !== null;) {
      var r = n;
      switch ((Yf(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ul());
          break;
        case 3:
          (po(), Se(yt), Se(nt), ip());
          break;
        case 5:
          rp(r);
          break;
        case 4:
          po();
          break;
        case 13:
          Se(je);
          break;
        case 19:
          Se(je);
          break;
        case 10:
          Jf(r.type._context);
          break;
        case 22:
        case 23:
          hp();
      }
      n = n.return;
    }
  if (
    ((We = e),
      (_e = e = Cr(e.current, null)),
      (Ge = St = t),
      (Be = 0),
      (js = null),
      (fp = Jl = ui = 0),
      (ht = os = null),
      Gr !== null)
  ) {
    for (t = 0; t < Gr.length; t++)
      if (((n = Gr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          ((o.next = i), (r.next = s));
        }
        n.pending = r;
      }
    Gr = null;
  }
  return e;
}
function m0(e, t) {
  do {
    var n = _e;
    try {
      if ((Zf(), (za.current = xl), yl)) {
        for (var r = Re.memoizedState; r !== null;) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        yl = !1;
      }
      if (
        ((ci = 0),
          (Ue = ze = Re = null),
          (rs = !1),
          (ks = 0),
          (dp.current = null),
          n === null || n.return === null)
      ) {
        ((Be = 1), (js = t), (_e = null));
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Ge),
            (a.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = u.alternate;
            f
              ? ((u.updateQueue = f.updateQueue),
                (u.memoizedState = f.memoizedState),
                (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var p = vh(s);
          if (p !== null) {
            ((p.flags &= -257),
              yh(p, s, a, o, t),
              p.mode & 1 && gh(o, c, t),
              (t = p),
              (l = c));
            var b = t.updateQueue;
            if (b === null) {
              var m = new Set();
              (m.add(l), (t.updateQueue = m));
            } else b.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (gh(o, c, t), gp());
              break e;
            }
            l = Error(D(426));
          }
        } else if (ke && a.mode & 1) {
          var w = vh(s);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              yh(w, s, a, o, t),
              Qf(mo(l, a)));
            break e;
          }
        }
        ((o = l = mo(l, a)),
          Be !== 4 && (Be = 2),
          os === null ? (os = [o]) : os.push(o),
          (o = s));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var y = Xx(o, l, t);
              uh(o, y);
              break e;
            case 1:
              a = l;
              var v = o.type,
                x = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (br === null || !br.has(x))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var S = Zx(o, a, t);
                uh(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      v0(n);
    } catch (C) {
      ((t = C), _e === n && n !== null && (_e = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function h0() {
  var e = wl.current;
  return ((wl.current = xl), e === null ? xl : e);
}
function gp() {
  ((Be === 0 || Be === 3 || Be === 2) && (Be = 4),
    We === null || (!(ui & 268435455) && !(Jl & 268435455)) || sr(We, Ge));
}
function Cl(e, t) {
  var n = ae;
  ae |= 2;
  var r = h0();
  (We !== e || Ge !== t) && ((On = null), ri(e, t));
  do
    try {
      bk();
      break;
    } catch (i) {
      m0(e, i);
    }
  while (!0);
  if ((Zf(), (ae = n), (wl.current = r), _e !== null)) throw Error(D(261));
  return ((We = null), (Ge = 0), Be);
}
function bk() {
  for (; _e !== null;) g0(_e);
}
function Sk() {
  for (; _e !== null && !GC();) g0(_e);
}
function g0(e) {
  var t = x0(e.alternate, e, St);
  ((e.memoizedProps = e.pendingProps),
    t === null ? v0(e) : (_e = t),
    (dp.current = null));
}
function v0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = hk(n, t)), n !== null)) {
        ((n.flags &= 32767), (_e = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Be = 6), (_e = null));
        return;
      }
    } else if (((n = mk(n, t, St)), n !== null)) {
      _e = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      _e = t;
      return;
    }
    _e = t = e;
  } while (t !== null);
  Be === 0 && (Be = 5);
}
function Ur(e, t, n) {
  var r = fe,
    i = Lt.transition;
  try {
    ((Lt.transition = null), (fe = 1), Ck(e, t, n, r));
  } finally {
    ((Lt.transition = i), (fe = r));
  }
  return null;
}
function Ck(e, t, n, r) {
  do qi();
  while (pr !== null);
  if (ae & 6) throw Error(D(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(D(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (rE(e, o),
      e === We && ((_e = We = null), (Ge = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ya ||
      ((ya = !0),
        w0(il, function () {
          return (qi(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
  ) {
    ((o = Lt.transition), (Lt.transition = null));
    var s = fe;
    fe = 1;
    var a = ae;
    ((ae |= 4),
      (dp.current = null),
      vk(e, n),
      d0(n, e),
      UE(id),
      (sl = !!rd),
      (id = rd = null),
      (e.current = n),
      yk(n),
      qC(),
      (ae = a),
      (fe = s),
      (Lt.transition = o));
  } else e.current = n;
  if (
    (ya && ((ya = !1), (pr = e), (Sl = i)),
      (o = e.pendingLanes),
      o === 0 && (br = null),
      XC(n.stateNode),
      wt(e, Ie()),
      t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (bl) throw ((bl = !1), (e = Ed), (Ed = null), e);
  return (
    Sl & 1 && e.tag !== 0 && qi(),
    (o = e.pendingLanes),
    o & 1 ? (e === kd ? ss++ : ((ss = 0), (kd = e))) : (ss = 0),
    Mr(),
    null
  );
}
function qi() {
  if (pr !== null) {
    var e = Xy(Sl),
      t = Lt.transition,
      n = fe;
    try {
      if (((Lt.transition = null), (fe = 16 > e ? 16 : e), pr === null))
        var r = !1;
      else {
        if (((e = pr), (pr = null), (Sl = 0), ae & 6)) throw Error(D(331));
        var i = ae;
        for (ae |= 4, $ = e.current; $ !== null;) {
          var o = $,
            s = o.child;
          if ($.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for ($ = c; $ !== null;) {
                  var u = $;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      is(8, u, o);
                  }
                  var d = u.child;
                  if (d !== null) ((d.return = u), ($ = d));
                  else
                    for (; $ !== null;) {
                      u = $;
                      var f = u.sibling,
                        p = u.return;
                      if ((l0(u), u === c)) {
                        $ = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = p), ($ = f));
                        break;
                      }
                      $ = p;
                    }
                }
              }
              var b = o.alternate;
              if (b !== null) {
                var m = b.child;
                if (m !== null) {
                  b.child = null;
                  do {
                    var w = m.sibling;
                    ((m.sibling = null), (m = w));
                  } while (m !== null);
                }
              }
              $ = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) ((s.return = o), ($ = s));
          else
            e: for (; $ !== null;) {
              if (((o = $), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    is(9, o, o.return);
                }
              var y = o.sibling;
              if (y !== null) {
                ((y.return = o.return), ($ = y));
                break e;
              }
              $ = o.return;
            }
        }
        var v = e.current;
        for ($ = v; $ !== null;) {
          s = $;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) ((x.return = s), ($ = x));
          else
            e: for (s = v; $ !== null;) {
              if (((a = $), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zl(9, a);
                  }
                } catch (C) {
                  De(a, a.return, C);
                }
              if (a === s) {
                $ = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                ((S.return = a.return), ($ = S));
                break e;
              }
              $ = a.return;
            }
        }
        if (
          ((ae = i), Mr(), Sn && typeof Sn.onPostCommitFiberRoot == "function")
        )
          try {
            Sn.onPostCommitFiberRoot(Wl, e);
          } catch { }
        r = !0;
      }
      return r;
    } finally {
      ((fe = n), (Lt.transition = t));
    }
  }
  return !1;
}
function Nh(e, t, n) {
  ((t = mo(n, t)),
    (t = Xx(e, t, 1)),
    (e = wr(e, t, 1)),
    (t = ut()),
    e !== null && (Us(e, 1, t), wt(e, t)));
}
function De(e, t, n) {
  if (e.tag === 3) Nh(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        Nh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (br === null || !br.has(r)))
        ) {
          ((e = mo(n, e)),
            (e = Zx(t, e, 1)),
            (t = wr(t, e, 1)),
            (e = ut()),
            t !== null && (Us(t, 1, e), wt(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Ek(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ut()),
    (e.pingedLanes |= e.suspendedLanes & n),
    We === e &&
    (Ge & n) === n &&
    (Be === 4 || (Be === 3 && (Ge & 130023424) === Ge && 500 > Ie() - pp)
      ? ri(e, 0)
      : (fp |= n)),
    wt(e, t));
}
function y0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = la), (la <<= 1), !(la & 130023424) && (la = 4194304))
      : (t = 1));
  var n = ut();
  ((e = $n(e, t)), e !== null && (Us(e, t, n), wt(e, n)));
}
function kk(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), y0(e, n));
}
function Tk(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  (r !== null && r.delete(t), y0(e, n));
}
var x0;
x0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || yt.current) gt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((gt = !1), pk(e, t, n));
      gt = !!(e.flags & 131072);
    }
  else ((gt = !1), ke && t.flags & 1048576 && Cx(t, pl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ($a(e, t), (e = t.pendingProps));
      var i = co(t, nt.current);
      (Gi(t, n), (i = sp(null, t, r, e, i, n)));
      var o = ap();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xt(r) ? ((o = !0), dl(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            tp(t),
            (i.updater = Xl),
            (t.stateNode = i),
            (i._reactInternals = t),
            pd(t, r, e, n),
            (t = gd(null, t, r, !0, o, n)))
          : ((t.tag = 0), ke && o && qf(t), st(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
        ($a(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = jk(r)),
          (e = Zt(r, e)),
          i)
        ) {
          case 0:
            t = hd(null, t, r, e, n);
            break e;
          case 1:
            t = bh(null, t, r, e, n);
            break e;
          case 11:
            t = xh(null, t, r, e, n);
            break e;
          case 14:
            t = wh(null, t, r, Zt(r.type, e), n);
            break e;
        }
        throw Error(D(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Zt(r, i)),
        hd(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Zt(r, i)),
        bh(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((n0(t), e === null)) throw Error(D(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Ax(e, t),
          gl(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
          ) {
            ((i = mo(Error(D(423)), t)), (t = Sh(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = mo(Error(D(424)), t)), (t = Sh(e, t, r, n, i)));
            break e;
          } else
            for (
              Et = xr(t.stateNode.containerInfo.firstChild),
              kt = t,
              ke = !0,
              rn = null,
              n = Px(t, null, r, n),
              t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((uo(), r === i)) {
            t = Un(e, t, n);
            break e;
          }
          st(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Rx(t),
        e === null && ud(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        od(r, i) ? (s = null) : o !== null && od(r, o) && (t.flags |= 32),
        t0(e, t),
        st(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && ud(t), null);
    case 13:
      return r0(e, t, n);
    case 4:
      return (
        np(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fo(t, null, r, n)) : st(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Zt(r, i)),
        xh(e, t, r, i, n)
      );
    case 7:
      return (st(e, t, t.pendingProps, n), t.child);
    case 8:
      return (st(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (st(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
            (i = t.pendingProps),
            (o = t.memoizedProps),
            (s = i.value),
            ve(ml, r._currentValue),
            (r._currentValue = s),
            o !== null)
        )
          if (an(o.value, s)) {
            if (o.children === i.children && !yt.current) {
              t = Un(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null;) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null;) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      ((l = Vn(-1, n & -n)), (l.tag = 2));
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        (u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l));
                      }
                    }
                    ((o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      dd(o.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(D(341));
                ((s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  dd(s, n, t),
                  (s = o.sibling));
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null;) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    ((o.return = s.return), (s = o));
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        (st(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Gi(t, n),
        (i = Ft(i)),
        (r = r(i)),
        (t.flags |= 1),
        st(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Zt(r, t.pendingProps)),
        (i = Zt(r.type, i)),
        wh(e, t, r, i, n)
      );
    case 15:
      return Jx(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Zt(r, i)),
        $a(e, t),
        (t.tag = 1),
        xt(r) ? ((e = !0), dl(t)) : (e = !1),
        Gi(t, n),
        Qx(t, r, i),
        pd(t, r, i, n),
        gd(null, t, r, !0, e, n)
      );
    case 19:
      return i0(e, t, n);
    case 22:
      return e0(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function w0(e, t) {
  return Gy(e, t);
}
function Pk(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
      null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
      null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Ot(e, t, n, r) {
  return new Pk(e, t, n, r);
}
function vp(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function jk(e) {
  if (typeof e == "function") return vp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Lf)) return 11;
    if (e === _f) return 14;
  }
  return 2;
}
function Cr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ot(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ha(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) vp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case ji:
        return ii(n.children, i, o, t);
      case If:
        ((s = 8), (i |= 8));
        break;
      case _u:
        return (
          (e = Ot(12, n, t, i | 2)),
          (e.elementType = _u),
          (e.lanes = o),
          e
        );
      case Fu:
        return ((e = Ot(13, n, t, i)), (e.elementType = Fu), (e.lanes = o), e);
      case Vu:
        return ((e = Ot(19, n, t, i)), (e.elementType = Vu), (e.lanes = o), e);
      case Ry:
        return ec(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case jy:
              s = 10;
              break e;
            case Ay:
              s = 9;
              break e;
            case Lf:
              s = 11;
              break e;
            case _f:
              s = 14;
              break e;
            case rr:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ot(s, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function ii(e, t, n, r) {
  return ((e = Ot(7, e, r, t)), (e.lanes = n), e);
}
function ec(e, t, n, r) {
  return (
    (e = Ot(22, e, r, t)),
    (e.elementType = Ry),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function tu(e, t, n) {
  return ((e = Ot(6, e, null, t)), (e.lanes = n), e);
}
function nu(e, t, n) {
  return (
    (t = Ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ak(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
      null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Lc(0)),
    (this.expirationTimes = Lc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
      0),
    (this.entanglements = Lc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function yp(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new Ak(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ot(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    tp(o),
    e
  );
}
function Rk(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function b0(e) {
  if (!e) return kr;
  e = e._reactInternals;
  e: {
    if (gi(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xt(n)) return bx(e, n, t);
  }
  return t;
}
function S0(e, t, n, r, i, o, s, a, l) {
  return (
    (e = yp(n, r, !0, e, i, o, s, a, l)),
    (e.context = b0(null)),
    (n = e.current),
    (r = ut()),
    (i = Sr(n)),
    (o = Vn(r, i)),
    (o.callback = t ?? null),
    wr(n, o, i),
    (e.current.lanes = i),
    Us(e, i, r),
    wt(e, r),
    e
  );
}
function tc(e, t, n, r) {
  var i = t.current,
    o = ut(),
    s = Sr(i);
  return (
    (n = b0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Vn(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wr(i, t, s)),
    e !== null && (sn(e, i, s, o), Va(e, i, s)),
    s
  );
}
function El(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Mh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function xp(e, t) {
  (Mh(e, t), (e = e.alternate) && Mh(e, t));
}
function Nk() {
  return null;
}
var C0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
      console.error(e);
    };
function wp(e) {
  this._internalRoot = e;
}
nc.prototype.render = wp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  tc(e, t, null, null);
};
nc.prototype.unmount = wp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (di(function () {
      tc(null, e, null, null);
    }),
      (t[Bn] = null));
  }
};
function nc(e) {
  this._internalRoot = e;
}
nc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ex();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < or.length && t !== 0 && t < or[n].priority; n++);
    (or.splice(n, 0, e), n === 0 && nx(e));
  }
};
function bp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function rc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Dh() { }
function Mk(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = El(s);
        o.call(c);
      };
    }
    var s = S0(t, r, e, 0, null, !1, !1, "", Dh);
    return (
      (e._reactRootContainer = s),
      (e[Bn] = s.current),
      ws(e.nodeType === 8 ? e.parentNode : e),
      di(),
      s
    );
  }
  for (; (i = e.lastChild);) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = El(l);
      a.call(c);
    };
  }
  var l = yp(e, 0, !1, null, null, !1, !1, "", Dh);
  return (
    (e._reactRootContainer = l),
    (e[Bn] = l.current),
    ws(e.nodeType === 8 ? e.parentNode : e),
    di(function () {
      tc(t, l, n, r);
    }),
    l
  );
}
function ic(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = El(s);
        a.call(l);
      };
    }
    tc(t, s, e, i);
  } else s = Mk(n, t, e, i, r);
  return El(s);
}
Zy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Go(t.pendingLanes);
        n !== 0 &&
          (zf(t, n | 1), wt(t, Ie()), !(ae & 6) && ((ho = Ie() + 500), Mr()));
      }
      break;
    case 13:
      (di(function () {
        var r = $n(e, 1);
        if (r !== null) {
          var i = ut();
          sn(r, e, 1, i);
        }
      }),
        xp(e, 1));
  }
};
Bf = function (e) {
  if (e.tag === 13) {
    var t = $n(e, 134217728);
    if (t !== null) {
      var n = ut();
      sn(t, e, 134217728, n);
    }
    xp(e, 134217728);
  }
};
Jy = function (e) {
  if (e.tag === 13) {
    var t = Sr(e),
      n = $n(e, t);
    if (n !== null) {
      var r = ut();
      sn(n, e, t, r);
    }
    xp(e, t);
  }
};
ex = function () {
  return fe;
};
tx = function (e, t) {
  var n = fe;
  try {
    return ((fe = e), t());
  } finally {
    fe = n;
  }
};
Yu = function (e, t, n) {
  switch (t) {
    case "input":
      if (($u(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
          t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ql(r);
            if (!i) throw Error(D(90));
            (My(r), $u(r, i));
          }
        }
      }
      break;
    case "textarea":
      Oy(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Ui(e, !!n.multiple, t, !1));
  }
};
By = mp;
$y = di;
var Dk = { usingClientEntryPoint: !1, Events: [Hs, Mi, ql, Vy, zy, mp] },
  Bo = {
    findFiberByHostInstance: Kr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ok = {
    bundleType: Bo.bundleType,
    version: Bo.version,
    rendererPackageName: Bo.rendererPackageName,
    rendererConfig: Bo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Hy(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Bo.findFiberByHostInstance || Nk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xa.isDisabled && xa.supportsFiber)
    try {
      ((Wl = xa.inject(Ok)), (Sn = xa));
    } catch { }
}
jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dk;
jt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bp(t)) throw Error(D(200));
  return Rk(e, t, null, n);
};
jt.createRoot = function (e, t) {
  if (!bp(e)) throw Error(D(299));
  var n = !1,
    r = "",
    i = C0;
  return (
    t != null &&
    (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = yp(e, 1, !1, null, null, n, !1, r, i)),
    (e[Bn] = t.current),
    ws(e.nodeType === 8 ? e.parentNode : e),
    new wp(t)
  );
};
jt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(D(188))
      : ((e = Object.keys(e).join(",")), Error(D(268, e)));
  return ((e = Hy(t)), (e = e === null ? null : e.stateNode), e);
};
jt.flushSync = function (e) {
  return di(e);
};
jt.hydrate = function (e, t, n) {
  if (!rc(t)) throw Error(D(200));
  return ic(null, e, t, !0, n);
};
jt.hydrateRoot = function (e, t, n) {
  if (!bp(e)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = C0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
      (t = S0(t, null, e, 1, n ?? null, i, !1, o, s)),
      (e[Bn] = t.current),
      ws(e),
      r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new nc(t);
};
jt.render = function (e, t, n) {
  if (!rc(t)) throw Error(D(200));
  return ic(null, e, t, !1, n);
};
jt.unmountComponentAtNode = function (e) {
  if (!rc(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (di(function () {
      ic(null, null, e, !1, function () {
        ((e._reactRootContainer = null), (e[Bn] = null));
      });
    }),
      !0)
    : !1;
};
jt.unstable_batchedUpdates = mp;
jt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!rc(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return ic(e, t, n, !1, r);
};
jt.version = "18.3.1-next-f1338f8080-20240426";
function E0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E0);
    } catch (e) {
      console.error(e);
    }
}
(E0(), (Ey.exports = jt));
var vi = Ey.exports;
const k0 = Tf(vi);
var T0,
  Oh = vi;
((T0 = Oh.createRoot), Oh.hydrateRoot);
const Ik = 1,
  Lk = 1e6;
let ru = 0;
function _k() {
  return ((ru = (ru + 1) % Number.MAX_SAFE_INTEGER), ru.toString());
}
const iu = new Map(),
  Ih = (e) => {
    if (iu.has(e)) return;
    const t = setTimeout(() => {
      (iu.delete(e), as({ type: "REMOVE_TOAST", toastId: e }));
    }, Lk);
    iu.set(e, t);
  },
  Fk = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Ik) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Ih(n)
            : e.toasts.forEach((r) => {
              Ih(r.id);
            }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Ka = [];
let Ga = { toasts: [] };
function as(e) {
  ((Ga = Fk(Ga, e)),
    Ka.forEach((t) => {
      t(Ga);
    }));
}
function Vk({ ...e }) {
  const t = _k(),
    n = (i) => as({ type: "UPDATE_TOAST", toast: { ...i, id: t } }),
    r = () => as({ type: "DISMISS_TOAST", toastId: t });
  return (
    as({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (i) => {
          i || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function zk() {
  const [e, t] = g.useState(Ga);
  return (
    g.useEffect(
      () => (
        Ka.push(t),
        () => {
          const n = Ka.indexOf(t);
          n > -1 && Ka.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: Vk,
      dismiss: (n) => as({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function oe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), n === !1 || !i.defaultPrevented))
      return t == null ? void 0 : t(i);
  };
}
function Lh(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function P0(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const o = Lh(i, t);
      return (!n && typeof o == "function" && (n = !0), o);
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const o = r[i];
          typeof o == "function" ? o() : Lh(e[i], null);
        }
      };
  };
}
function Oe(...e) {
  return g.useCallback(P0(...e), e);
}
function Gs(e, t = []) {
  let n = [];
  function r(o, s) {
    const a = g.createContext(s),
      l = n.length;
    n = [...n, s];
    const c = (d) => {
      var y;
      const { scope: f, children: p, ...b } = d,
        m = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a,
        w = g.useMemo(() => b, Object.values(b));
      return h.jsx(m.Provider, { value: w, children: p });
    };
    c.displayName = o + "Provider";
    function u(d, f) {
      var m;
      const p = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a,
        b = g.useContext(p);
      if (b) return b;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${o}\``);
    }
    return [c, u];
  }
  const i = () => {
    const o = n.map((s) => g.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || o;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((i.scopeName = e), [r, Bk(i, ...t)]);
}
function Bk(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (o) {
      const s = r.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(o)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function As(e) {
  const t = Uk(e),
    n = g.forwardRef((r, i) => {
      const { children: o, ...s } = r,
        a = g.Children.toArray(o),
        l = a.find(Hk);
      if (l) {
        const c = l.props.children,
          u = a.map((d) =>
            d === l
              ? g.Children.count(c) > 1
                ? g.Children.only(null)
                : g.isValidElement(c)
                  ? c.props.children
                  : null
              : d,
          );
        return h.jsx(t, {
          ...s,
          ref: i,
          children: g.isValidElement(c) ? g.cloneElement(c, void 0, u) : null,
        });
      }
      return h.jsx(t, { ...s, ref: i, children: o });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var $k = As("Slot");
function Uk(e) {
  const t = g.forwardRef((n, r) => {
    const { children: i, ...o } = n;
    if (g.isValidElement(i)) {
      const s = Gk(i),
        a = Kk(o, i.props);
      return (
        i.type !== g.Fragment && (a.ref = r ? P0(r, s) : s),
        g.cloneElement(i, a)
      );
    }
    return g.Children.count(i) > 1 ? g.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var j0 = Symbol("radix.slottable");
function Wk(e) {
  const t = ({ children: n }) => h.jsx(h.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = j0), t);
}
function Hk(e) {
  return (
    g.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === j0
  );
}
function Kk(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? i && o
        ? (n[r] = (...a) => {
          const l = o(...a);
          return (i(...a), l);
        })
        : i && (n[r] = i)
      : r === "style"
        ? (n[r] = { ...i, ...o })
        : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Gk(e) {
  var r, i;
  let t =
    (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
      ? void 0
      : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
      (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
        ? void 0
        : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function A0(e) {
  const t = e + "CollectionProvider",
    [n, r] = Gs(t),
    [i, o] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (m) => {
      const { scope: w, children: y } = m,
        v = O.useRef(null),
        x = O.useRef(new Map()).current;
      return h.jsx(i, { scope: w, itemMap: x, collectionRef: v, children: y });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = As(a),
    c = O.forwardRef((m, w) => {
      const { scope: y, children: v } = m,
        x = o(a, y),
        S = Oe(w, x.collectionRef);
      return h.jsx(l, { ref: S, children: v });
    });
  c.displayName = a;
  const u = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = As(u),
    p = O.forwardRef((m, w) => {
      const { scope: y, children: v, ...x } = m,
        S = O.useRef(null),
        C = Oe(w, S),
        k = o(u, y);
      return (
        O.useEffect(
          () => (
            k.itemMap.set(S, { ref: S, ...x }),
            () => void k.itemMap.delete(S)
          ),
        ),
        h.jsx(f, { [d]: "", ref: C, children: v })
      );
    });
  p.displayName = u;
  function b(m) {
    const w = o(e + "CollectionConsumer", m);
    return O.useCallback(() => {
      const v = w.collectionRef.current;
      if (!v) return [];
      const x = Array.from(v.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort(
        (k, E) => x.indexOf(k.ref.current) - x.indexOf(E.ref.current),
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: c, ItemSlot: p }, b, r];
}
var qk = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul",
],
  pe = qk.reduce((e, t) => {
    const n = As(`Primitive.${t}`),
      r = g.forwardRef((i, o) => {
        const { asChild: s, ...a } = i,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          h.jsx(l, { ...a, ref: o })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function R0(e, t) {
  e && vi.flushSync(() => e.dispatchEvent(t));
}
function ln(e) {
  const t = g.useRef(e);
  return (
    g.useEffect(() => {
      t.current = e;
    }),
    g.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function Yk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ln(e);
  g.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Qk = "DismissableLayer",
  jd = "dismissableLayer.update",
  Xk = "dismissableLayer.pointerDownOutside",
  Zk = "dismissableLayer.focusOutside",
  _h,
  N0 = g.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  oc = g.forwardRef((e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: i,
      onFocusOutside: o,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e,
      c = g.useContext(N0),
      [u, d] = g.useState(null),
      f =
        (u == null ? void 0 : u.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, p] = g.useState({}),
      b = Oe(t, (E) => d(E)),
      m = Array.from(c.layers),
      [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = m.indexOf(w),
      v = u ? m.indexOf(u) : -1,
      x = c.layersWithOutsidePointerEventsDisabled.size > 0,
      S = v >= y,
      C = eT((E) => {
        const T = E.target,
          R = [...c.branches].some((N) => N.contains(T));
        !S ||
          R ||
          (i == null || i(E),
            s == null || s(E),
            E.defaultPrevented || a == null || a());
      }, f),
      k = tT((E) => {
        const T = E.target;
        [...c.branches].some((N) => N.contains(T)) ||
          (o == null || o(E),
            s == null || s(E),
            E.defaultPrevented || a == null || a());
      }, f);
    return (
      Yk((E) => {
        v === c.layers.size - 1 &&
          (r == null || r(E),
            !E.defaultPrevented && a && (E.preventDefault(), a()));
      }, f),
      g.useEffect(() => {
        if (u)
          return (
            n &&
            (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
              ((_h = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(u)),
            c.layers.add(u),
            Fh(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = _h);
            }
          );
      }, [u, f, n, c]),
      g.useEffect(
        () => () => {
          u &&
            (c.layers.delete(u),
              c.layersWithOutsidePointerEventsDisabled.delete(u),
              Fh());
        },
        [u, c],
      ),
      g.useEffect(() => {
        const E = () => p({});
        return (
          document.addEventListener(jd, E),
          () => document.removeEventListener(jd, E)
        );
      }, []),
      h.jsx(pe.div, {
        ...l,
        ref: b,
        style: {
          pointerEvents: x ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: oe(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: oe(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: oe(
          e.onPointerDownCapture,
          C.onPointerDownCapture,
        ),
      })
    );
  });
oc.displayName = Qk;
var Jk = "DismissableLayerBranch",
  M0 = g.forwardRef((e, t) => {
    const n = g.useContext(N0),
      r = g.useRef(null),
      i = Oe(t, r);
    return (
      g.useEffect(() => {
        const o = r.current;
        if (o)
          return (
            n.branches.add(o),
            () => {
              n.branches.delete(o);
            }
          );
      }, [n.branches]),
      h.jsx(pe.div, { ...e, ref: i })
    );
  });
M0.displayName = Jk;
function eT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ln(e),
    r = g.useRef(!1),
    i = g.useRef(() => { });
  return (
    g.useEffect(() => {
      const o = (a) => {
        if (a.target && !r.current) {
          let l = function () {
            D0(Xk, n, c, { discrete: !0 });
          };
          const c = { originalEvent: a };
          a.pointerType === "touch"
            ? (t.removeEventListener("click", i.current),
              (i.current = l),
              t.addEventListener("click", i.current, { once: !0 }))
            : l();
        } else t.removeEventListener("click", i.current);
        r.current = !1;
      },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", o);
        }, 0);
      return () => {
        (window.clearTimeout(s),
          t.removeEventListener("pointerdown", o),
          t.removeEventListener("click", i.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function tT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ln(e),
    r = g.useRef(!1);
  return (
    g.useEffect(() => {
      const i = (o) => {
        o.target &&
          !r.current &&
          D0(Zk, n, { originalEvent: o }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Fh() {
  const e = new CustomEvent(jd);
  document.dispatchEvent(e);
}
function D0(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? R0(i, o) : i.dispatchEvent(o));
}
var nT = oc,
  rT = M0,
  Ye = globalThis != null && globalThis.document ? g.useLayoutEffect : () => { },
  iT = "Portal",
  Sp = g.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [i, o] = g.useState(!1);
    Ye(() => o(!0), []);
    const s =
      n ||
      (i &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? k0.createPortal(h.jsx(pe.div, { ...r, ref: t }), s) : null;
  });
Sp.displayName = iT;
function oT(e, t) {
  return g.useReducer((n, r) => t[n][r] ?? n, e);
}
var Cp = (e) => {
  const { present: t, children: n } = e,
    r = sT(t),
    i =
      typeof n == "function" ? n({ present: r.isPresent }) : g.Children.only(n),
    o = Oe(r.ref, aT(i));
  return typeof n == "function" || r.isPresent
    ? g.cloneElement(i, { ref: o })
    : null;
};
Cp.displayName = "Presence";
function sT(e) {
  const [t, n] = g.useState(),
    r = g.useRef(null),
    i = g.useRef(e),
    o = g.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = oT(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    g.useEffect(() => {
      const c = wa(r.current);
      o.current = a === "mounted" ? c : "none";
    }, [a]),
    Ye(() => {
      const c = r.current,
        u = i.current;
      if (u !== e) {
        const f = o.current,
          p = wa(c);
        (e
          ? l("MOUNT")
          : p === "none" || (c == null ? void 0 : c.display) === "none"
            ? l("UNMOUNT")
            : l(u && f !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e));
      }
    }, [e, l]),
    Ye(() => {
      if (t) {
        let c;
        const u = t.ownerDocument.defaultView ?? window,
          d = (p) => {
            const m = wa(r.current).includes(p.animationName);
            if (p.target === t && m && (l("ANIMATION_END"), !i.current)) {
              const w = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (c = u.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                })));
            }
          },
          f = (p) => {
            p.target === t && (o.current = wa(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            (u.clearTimeout(c),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: g.useCallback((c) => {
        ((r.current = c ? getComputedStyle(c) : null), n(c));
      }, []),
    }
  );
}
function wa(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function aT(e) {
  var r, i;
  let t =
    (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
      ? void 0
      : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
      (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
        ? void 0
        : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var lT = Nf[" useInsertionEffect ".trim().toString()] || Ye;
function Ad({ prop: e, defaultProp: t, onChange: n = () => { }, caller: r }) {
  const [i, o, s] = cT({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : i;
  {
    const u = g.useRef(e !== void 0);
    g.useEffect(() => {
      const d = u.current;
      (d !== a &&
        console.warn(
          `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (u.current = a));
    }, [a, r]);
  }
  const c = g.useCallback(
    (u) => {
      var d;
      if (a) {
        const f = uT(u) ? u(e) : u;
        f !== e && ((d = s.current) == null || d.call(s, f));
      } else o(u);
    },
    [a, e, o, s],
  );
  return [l, c];
}
function cT({ defaultProp: e, onChange: t }) {
  const [n, r] = g.useState(e),
    i = g.useRef(n),
    o = g.useRef(t);
  return (
    lT(() => {
      o.current = t;
    }, [t]),
    g.useEffect(() => {
      var s;
      i.current !== n &&
        ((s = o.current) == null || s.call(o, n), (i.current = n));
    }, [n, i]),
    [n, r, o]
  );
}
function uT(e) {
  return typeof e == "function";
}
var O0 = Object.freeze({
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal",
}),
  dT = "VisuallyHidden",
  sc = g.forwardRef((e, t) =>
    h.jsx(pe.span, { ...e, ref: t, style: { ...O0, ...e.style } }),
  );
sc.displayName = dT;
var fT = sc,
  Ep = "ToastProvider",
  [kp, pT, mT] = A0("Toast"),
  [I0, z3] = Gs("Toast", [mT]),
  [hT, ac] = I0(Ep),
  L0 = (e) => {
    const {
      __scopeToast: t,
      label: n = "Notification",
      duration: r = 5e3,
      swipeDirection: i = "right",
      swipeThreshold: o = 50,
      children: s,
    } = e,
      [a, l] = g.useState(null),
      [c, u] = g.useState(0),
      d = g.useRef(!1),
      f = g.useRef(!1);
    return (
      n.trim() ||
      console.error(
        `Invalid prop \`label\` supplied to \`${Ep}\`. Expected non-empty \`string\`.`,
      ),
      h.jsx(kp.Provider, {
        scope: t,
        children: h.jsx(hT, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: o,
          toastCount: c,
          viewport: a,
          onViewportChange: l,
          onToastAdd: g.useCallback(() => u((p) => p + 1), []),
          onToastRemove: g.useCallback(() => u((p) => p - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: f,
          children: s,
        }),
      })
    );
  };
L0.displayName = Ep;
var _0 = "ToastViewport",
  gT = ["F8"],
  Rd = "toast.viewportPause",
  Nd = "toast.viewportResume",
  F0 = g.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = gT,
      label: i = "Notifications ({hotkey})",
      ...o
    } = e,
      s = ac(_0, n),
      a = pT(n),
      l = g.useRef(null),
      c = g.useRef(null),
      u = g.useRef(null),
      d = g.useRef(null),
      f = Oe(t, d, s.onViewportChange),
      p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      b = s.toastCount > 0;
    (g.useEffect(() => {
      const w = (y) => {
        var x;
        r.length !== 0 &&
          r.every((S) => y[S] || y.code === S) &&
          ((x = d.current) == null || x.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      g.useEffect(() => {
        const w = l.current,
          y = d.current;
        if (b && w && y) {
          const v = () => {
            if (!s.isClosePausedRef.current) {
              const k = new CustomEvent(Rd);
              (y.dispatchEvent(k), (s.isClosePausedRef.current = !0));
            }
          },
            x = () => {
              if (s.isClosePausedRef.current) {
                const k = new CustomEvent(Nd);
                (y.dispatchEvent(k), (s.isClosePausedRef.current = !1));
              }
            },
            S = (k) => {
              !w.contains(k.relatedTarget) && x();
            },
            C = () => {
              w.contains(document.activeElement) || x();
            };
          return (
            w.addEventListener("focusin", v),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", v),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", v),
            window.addEventListener("focus", x),
            () => {
              (w.removeEventListener("focusin", v),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", v),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", v),
                window.removeEventListener("focus", x));
            }
          );
        }
      }, [b, s.isClosePausedRef]));
    const m = g.useCallback(
      ({ tabbingDirection: w }) => {
        const v = a().map((x) => {
          const S = x.ref.current,
            C = [S, ...AT(S)];
          return w === "forwards" ? C : C.reverse();
        });
        return (w === "forwards" ? v.reverse() : v).flat();
      },
      [a],
    );
    return (
      g.useEffect(() => {
        const w = d.current;
        if (w) {
          const y = (v) => {
            var C, k, E;
            const x = v.altKey || v.ctrlKey || v.metaKey;
            if (v.key === "Tab" && !x) {
              const T = document.activeElement,
                R = v.shiftKey;
              if (v.target === w && R) {
                (C = c.current) == null || C.focus();
                return;
              }
              const I = m({ tabbingDirection: R ? "backwards" : "forwards" }),
                K = I.findIndex((M) => M === T);
              ou(I.slice(K + 1))
                ? v.preventDefault()
                : R
                  ? (k = c.current) == null || k.focus()
                  : (E = u.current) == null || E.focus();
            }
          };
          return (
            w.addEventListener("keydown", y),
            () => w.removeEventListener("keydown", y)
          );
        }
      }, [a, m]),
      h.jsxs(rT, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: b ? void 0 : "none" },
        children: [
          b &&
          h.jsx(Md, {
            ref: c,
            onFocusFromOutsideViewport: () => {
              const w = m({ tabbingDirection: "forwards" });
              ou(w);
            },
          }),
          h.jsx(kp.Slot, {
            scope: n,
            children: h.jsx(pe.ol, { tabIndex: -1, ...o, ref: f }),
          }),
          b &&
          h.jsx(Md, {
            ref: u,
            onFocusFromOutsideViewport: () => {
              const w = m({ tabbingDirection: "backwards" });
              ou(w);
            },
          }),
        ],
      })
    );
  });
F0.displayName = _0;
var V0 = "ToastFocusProxy",
  Md = g.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
      o = ac(V0, n);
    return h.jsx(sc, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...i,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var c;
        const a = s.relatedTarget;
        !((c = o.viewport) != null && c.contains(a)) && r();
      },
    });
  });
Md.displayName = V0;
var qs = "Toast",
  vT = "toast.swipeStart",
  yT = "toast.swipeMove",
  xT = "toast.swipeCancel",
  wT = "toast.swipeEnd",
  z0 = g.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: i, onOpenChange: o, ...s } = e,
      [a, l] = Ad({ prop: r, defaultProp: i ?? !0, onChange: o, caller: qs });
    return h.jsx(Cp, {
      present: n || a,
      children: h.jsx(CT, {
        open: a,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: ln(e.onPause),
        onResume: ln(e.onResume),
        onSwipeStart: oe(e.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: oe(e.onSwipeMove, (c) => {
          const { x: u, y: d } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "move"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${u}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${d}px`,
            ));
        }),
        onSwipeCancel: oe(e.onSwipeCancel, (c) => {
          (c.currentTarget.setAttribute("data-swipe", "cancel"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: oe(e.onSwipeEnd, (c) => {
          const { x: u, y: d } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "end"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${u}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${d}px`,
            ),
            l(!1));
        }),
      }),
    });
  });
z0.displayName = qs;
var [bT, ST] = I0(qs, { onClose() { } }),
  CT = g.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: i,
      open: o,
      onClose: s,
      onEscapeKeyDown: a,
      onPause: l,
      onResume: c,
      onSwipeStart: u,
      onSwipeMove: d,
      onSwipeCancel: f,
      onSwipeEnd: p,
      ...b
    } = e,
      m = ac(qs, n),
      [w, y] = g.useState(null),
      v = Oe(t, (M) => y(M)),
      x = g.useRef(null),
      S = g.useRef(null),
      C = i || m.duration,
      k = g.useRef(0),
      E = g.useRef(C),
      T = g.useRef(0),
      { onToastAdd: R, onToastRemove: N } = m,
      z = ln(() => {
        var W;
        ((w == null ? void 0 : w.contains(document.activeElement)) &&
          ((W = m.viewport) == null || W.focus()),
          s());
      }),
      I = g.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(T.current),
              (k.current = new Date().getTime()),
              (T.current = window.setTimeout(z, M)));
        },
        [z],
      );
    (g.useEffect(() => {
      const M = m.viewport;
      if (M) {
        const W = () => {
          (I(E.current), c == null || c());
        },
          U = () => {
            const F = new Date().getTime() - k.current;
            ((E.current = E.current - F),
              window.clearTimeout(T.current),
              l == null || l());
          };
        return (
          M.addEventListener(Rd, U),
          M.addEventListener(Nd, W),
          () => {
            (M.removeEventListener(Rd, U), M.removeEventListener(Nd, W));
          }
        );
      }
    }, [m.viewport, C, l, c, I]),
      g.useEffect(() => {
        o && !m.isClosePausedRef.current && I(C);
      }, [o, C, m.isClosePausedRef, I]),
      g.useEffect(() => (R(), () => N()), [R, N]));
    const K = g.useMemo(() => (w ? G0(w) : null), [w]);
    return m.viewport
      ? h.jsxs(h.Fragment, {
        children: [
          K &&
          h.jsx(ET, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: K,
          }),
          h.jsx(bT, {
            scope: n,
            onClose: z,
            children: vi.createPortal(
              h.jsx(kp.ItemSlot, {
                scope: n,
                children: h.jsx(nT, {
                  asChild: !0,
                  onEscapeKeyDown: oe(a, () => {
                    (m.isFocusedToastEscapeKeyDownRef.current || z(),
                      (m.isFocusedToastEscapeKeyDownRef.current = !1));
                  }),
                  children: h.jsx(pe.li, {
                    role: "status",
                    "aria-live": "off",
                    "aria-atomic": !0,
                    tabIndex: 0,
                    "data-state": o ? "open" : "closed",
                    "data-swipe-direction": m.swipeDirection,
                    ...b,
                    ref: v,
                    style: {
                      userSelect: "none",
                      touchAction: "none",
                      ...e.style,
                    },
                    onKeyDown: oe(e.onKeyDown, (M) => {
                      M.key === "Escape" &&
                        (a == null || a(M.nativeEvent),
                          M.nativeEvent.defaultPrevented ||
                          ((m.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                    }),
                    onPointerDown: oe(e.onPointerDown, (M) => {
                      M.button === 0 &&
                        (x.current = { x: M.clientX, y: M.clientY });
                    }),
                    onPointerMove: oe(e.onPointerMove, (M) => {
                      if (!x.current) return;
                      const W = M.clientX - x.current.x,
                        U = M.clientY - x.current.y,
                        F = !!S.current,
                        P = ["left", "right"].includes(m.swipeDirection),
                        j = ["left", "up"].includes(m.swipeDirection)
                          ? Math.min
                          : Math.max,
                        L = P ? j(0, W) : 0,
                        G = P ? 0 : j(0, U),
                        H = M.pointerType === "touch" ? 10 : 2,
                        X = { x: L, y: G },
                        q = { originalEvent: M, delta: X };
                      F
                        ? ((S.current = X), ba(yT, d, q, { discrete: !1 }))
                        : Vh(X, m.swipeDirection, H)
                          ? ((S.current = X),
                            ba(vT, u, q, { discrete: !1 }),
                            M.target.setPointerCapture(M.pointerId))
                          : (Math.abs(W) > H || Math.abs(U) > H) &&
                          (x.current = null);
                    }),
                    onPointerUp: oe(e.onPointerUp, (M) => {
                      const W = S.current,
                        U = M.target;
                      if (
                        (U.hasPointerCapture(M.pointerId) &&
                          U.releasePointerCapture(M.pointerId),
                          (S.current = null),
                          (x.current = null),
                          W)
                      ) {
                        const F = M.currentTarget,
                          P = { originalEvent: M, delta: W };
                        (Vh(W, m.swipeDirection, m.swipeThreshold)
                          ? ba(wT, p, P, { discrete: !0 })
                          : ba(xT, f, P, { discrete: !0 }),
                          F.addEventListener(
                            "click",
                            (j) => j.preventDefault(),
                            { once: !0 },
                          ));
                      }
                    }),
                  }),
                }),
              }),
              m.viewport,
            ),
          }),
        ],
      })
      : null;
  }),
  ET = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      i = ac(qs, t),
      [o, s] = g.useState(!1),
      [a, l] = g.useState(!1);
    return (
      PT(() => s(!0)),
      g.useEffect(() => {
        const c = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(c);
      }, []),
      a
        ? null
        : h.jsx(Sp, {
          asChild: !0,
          children: h.jsx(sc, {
            ...r,
            children:
              o && h.jsxs(h.Fragment, { children: [i.label, " ", n] }),
          }),
        })
    );
  },
  kT = "ToastTitle",
  B0 = g.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return h.jsx(pe.div, { ...r, ref: t });
  });
B0.displayName = kT;
var TT = "ToastDescription",
  $0 = g.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return h.jsx(pe.div, { ...r, ref: t });
  });
$0.displayName = TT;
var U0 = "ToastAction",
  W0 = g.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? h.jsx(K0, {
        altText: n,
        asChild: !0,
        children: h.jsx(Tp, { ...r, ref: t }),
      })
      : (console.error(
        `Invalid prop \`altText\` supplied to \`${U0}\`. Expected non-empty \`string\`.`,
      ),
        null);
  });
W0.displayName = U0;
var H0 = "ToastClose",
  Tp = g.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      i = ST(H0, n);
    return h.jsx(K0, {
      asChild: !0,
      children: h.jsx(pe.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: oe(e.onClick, i.onClose),
      }),
    });
  });
Tp.displayName = H0;
var K0 = g.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...i } = e;
  return h.jsx(pe.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...i,
    ref: t,
  });
});
function G0(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
          jT(r))
      ) {
        const i = r.ariaHidden || r.hidden || r.style.display === "none",
          o = r.dataset.radixToastAnnounceExclude === "";
        if (!i)
          if (o) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...G0(r));
      }
    }),
    t
  );
}
function ba(e, t, n, { discrete: r }) {
  const i = n.originalEvent.currentTarget,
    o = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? R0(i, o) : i.dispatchEvent(o));
}
var Vh = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    i = Math.abs(e.y),
    o = r > i;
  return t === "left" || t === "right" ? o && r > n : !o && i > n;
};
function PT(e = () => { }) {
  const t = ln(e);
  Ye(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function jT(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function AT(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const i = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || i
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function ou(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var RT = L0,
  q0 = F0,
  Y0 = z0,
  Q0 = B0,
  X0 = $0,
  Z0 = W0,
  J0 = Tp;
function ew(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = ew(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function tw() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = ew(e)) && (r && (r += " "), (r += t));
  return r;
}
const zh = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Bh = tw,
  Pp = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Bh(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: i, defaultVariants: o } = t,
      s = Object.keys(i).map((c) => {
        const u = n == null ? void 0 : n[c],
          d = o == null ? void 0 : o[c];
        if (u === null) return null;
        const f = zh(u) || zh(d);
        return i[c][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((c, u) => {
          let [d, f] = u;
          return (f === void 0 || (c[d] = f), c);
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, u) => {
            let { class: d, className: f, ...p } = u;
            return Object.entries(p).every((b) => {
              let [m, w] = b;
              return Array.isArray(w)
                ? w.includes({ ...o, ...a }[m])
                : { ...o, ...a }[m] === w;
            })
              ? [...c, d, f]
              : c;
          }, []);
    return Bh(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  nw = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var MT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DT = g.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: o,
      iconNode: s,
      ...a
    },
    l,
  ) =>
    g.createElement(
      "svg",
      {
        ref: l,
        ...MT,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: nw("lucide", i),
        ...a,
      },
      [
        ...s.map(([c, u]) => g.createElement(c, u)),
        ...(Array.isArray(o) ? o : [o]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const de = (e, t) => {
  const n = g.forwardRef(({ className: r, ...i }, o) =>
    g.createElement(DT, {
      ref: o,
      iconNode: t,
      className: nw(`lucide-${NT(e)}`, r),
      ...i,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OT = de("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IT = de("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LT = de("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oi = de("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lc = de("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rw = de("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _T = de("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FT = de("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VT = de("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zT = de("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BT = de("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $T = de("Droplets", [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4",
    },
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const UT = de("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const WT = de("FileWarning", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HT = de("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KT = de("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GT = de("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qT = de("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YT = de("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QT = de("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  [
    "line",
    { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
  ],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iw = de("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dd = de("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XT = de("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZT = de("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JT = de("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $h = de("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eP = de("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jp = de("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uh = de("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tP = de("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
]),
  Ap = "-",
  nP = (e) => {
    const t = iP(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(Ap);
        return (a[0] === "" && a.length !== 1 && a.shift(), ow(a, t) || rP(s));
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  ow = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      i = r ? ow(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    const o = e.join(Ap);
    return (s = t.validators.find(({ validator: a }) => a(o))) == null
      ? void 0
      : s.classGroupId;
  },
  Wh = /^\[(.+)\]$/,
  rP = (e) => {
    if (Wh.test(e)) {
      const t = Wh.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  iP = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      sP(Object.entries(e.classGroups), n).forEach(([o, s]) => {
        Od(s, r, o, t);
      }),
      r
    );
  },
  Od = (e, t, n, r) => {
    e.forEach((i) => {
      if (typeof i == "string") {
        const o = i === "" ? t : Hh(t, i);
        o.classGroupId = n;
        return;
      }
      if (typeof i == "function") {
        if (oP(i)) {
          Od(i(r), t, n, r);
          return;
        }
        t.validators.push({ validator: i, classGroupId: n });
        return;
      }
      Object.entries(i).forEach(([o, s]) => {
        Od(s, Hh(t, o), n, r);
      });
    });
  },
  Hh = (e, t) => {
    let n = e;
    return (
      t.split(Ap).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  oP = (e) => e.isThemeGetter,
  sP = (e, t) =>
    t
      ? e.map(([n, r]) => {
        const i = r.map((o) =>
          typeof o == "string"
            ? t + o
            : typeof o == "object"
              ? Object.fromEntries(
                Object.entries(o).map(([s, a]) => [t + s, a]),
              )
              : o,
        );
        return [n, i];
      })
      : e,
  aP = (e) => {
    if (e < 1) return { get: () => { }, set: () => { } };
    let t = 0,
      n = new Map(),
      r = new Map();
    const i = (o, s) => {
      (n.set(o, s), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(o) {
        let s = n.get(o);
        if (s !== void 0) return s;
        if ((s = r.get(o)) !== void 0) return (i(o, s), s);
      },
      set(o, s) {
        n.has(o) ? n.set(o, s) : i(o, s);
      },
    };
  },
  sw = "!",
  lP = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      i = t[0],
      o = t.length,
      s = (a) => {
        const l = [];
        let c = 0,
          u = 0,
          d;
        for (let w = 0; w < a.length; w++) {
          let y = a[w];
          if (c === 0) {
            if (y === i && (r || a.slice(w, w + o) === t)) {
              (l.push(a.slice(u, w)), (u = w + o));
              continue;
            }
            if (y === "/") {
              d = w;
              continue;
            }
          }
          y === "[" ? c++ : y === "]" && c--;
        }
        const f = l.length === 0 ? a : a.substring(u),
          p = f.startsWith(sw),
          b = p ? f.substring(1) : f,
          m = d && d > u ? d - u : void 0;
        return {
          modifiers: l,
          hasImportantModifier: p,
          baseClassName: b,
          maybePostfixModifierPosition: m,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  cP = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  uP = (e) => ({ cache: aP(e.cacheSize), parseClassName: lP(e), ...nP(e) }),
  dP = /\s+/,
  fP = (e, t) => {
    const {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: i,
    } = t,
      o = [],
      s = e.trim().split(dP);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const c = s[l],
        {
          modifiers: u,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: p,
        } = n(c);
      let b = !!p,
        m = r(b ? f.substring(0, p) : f);
      if (!m) {
        if (!b) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((m = r(f)), !m)) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        b = !1;
      }
      const w = cP(u).join(":"),
        y = d ? w + sw : w,
        v = y + m;
      if (o.includes(v)) continue;
      o.push(v);
      const x = i(m, b);
      for (let S = 0; S < x.length; ++S) {
        const C = x[S];
        o.push(y + C);
      }
      a = c + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function pP() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length;)
    (t = arguments[e++]) && (n = aw(t)) && (r && (r += " "), (r += n));
  return r;
}
const aw = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = aw(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function mP(e, ...t) {
  let n,
    r,
    i,
    o = s;
  function s(l) {
    const c = t.reduce((u, d) => d(u), e());
    return ((n = uP(c)), (r = n.cache.get), (i = n.cache.set), (o = a), a(l));
  }
  function a(l) {
    const c = r(l);
    if (c) return c;
    const u = fP(l, n);
    return (i(l, u), u);
  }
  return function () {
    return o(pP.apply(null, arguments));
  };
}
const we = (e) => {
  const t = (n) => n[e] || [];
  return ((t.isThemeGetter = !0), t);
},
  lw = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  hP = /^\d+\/\d+$/,
  gP = new Set(["px", "full", "screen"]),
  vP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  yP =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  xP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  wP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  bP =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Mn = (e) => Yi(e) || gP.has(e) || hP.test(e),
  Zn = (e) => Eo(e, "length", AP),
  Yi = (e) => !!e && !Number.isNaN(Number(e)),
  su = (e) => Eo(e, "number", Yi),
  $o = (e) => !!e && Number.isInteger(Number(e)),
  SP = (e) => e.endsWith("%") && Yi(e.slice(0, -1)),
  ee = (e) => lw.test(e),
  Jn = (e) => vP.test(e),
  CP = new Set(["length", "size", "percentage"]),
  EP = (e) => Eo(e, CP, cw),
  kP = (e) => Eo(e, "position", cw),
  TP = new Set(["image", "url"]),
  PP = (e) => Eo(e, TP, NP),
  jP = (e) => Eo(e, "", RP),
  Uo = () => !0,
  Eo = (e, t, n) => {
    const r = lw.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  AP = (e) => yP.test(e) && !xP.test(e),
  cw = () => !1,
  RP = (e) => wP.test(e),
  NP = (e) => bP.test(e),
  MP = () => {
    const e = we("colors"),
      t = we("spacing"),
      n = we("blur"),
      r = we("brightness"),
      i = we("borderColor"),
      o = we("borderRadius"),
      s = we("borderSpacing"),
      a = we("borderWidth"),
      l = we("contrast"),
      c = we("grayscale"),
      u = we("hueRotate"),
      d = we("invert"),
      f = we("gap"),
      p = we("gradientColorStops"),
      b = we("gradientColorStopPositions"),
      m = we("inset"),
      w = we("margin"),
      y = we("opacity"),
      v = we("padding"),
      x = we("saturate"),
      S = we("scale"),
      C = we("sepia"),
      k = we("skew"),
      E = we("space"),
      T = we("translate"),
      R = () => ["auto", "contain", "none"],
      N = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", ee, t],
      I = () => [ee, t],
      K = () => ["", Mn, Zn],
      M = () => ["auto", Yi, ee],
      W = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      U = () => ["solid", "dashed", "dotted", "double", "none"],
      F = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      P = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      j = () => ["", "0", ee],
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      G = () => [Yi, ee];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Uo],
        spacing: [Mn, Zn],
        blur: ["none", "", Jn, ee],
        brightness: G(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Jn, ee],
        borderSpacing: I(),
        borderWidth: K(),
        contrast: G(),
        grayscale: j(),
        hueRotate: G(),
        invert: j(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [SP, Zn],
        inset: z(),
        margin: z(),
        opacity: G(),
        padding: I(),
        saturate: G(),
        scale: G(),
        sepia: j(),
        skew: G(),
        space: I(),
        translate: I(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", ee] }],
        container: ["container"],
        columns: [{ columns: [Jn] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...W(), ee] }],
        overflow: [{ overflow: N() }],
        "overflow-x": [{ "overflow-x": N() }],
        "overflow-y": [{ "overflow-y": N() }],
        overscroll: [{ overscroll: R() }],
        "overscroll-x": [{ "overscroll-x": R() }],
        "overscroll-y": [{ "overscroll-y": R() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [m] }],
        "inset-x": [{ "inset-x": [m] }],
        "inset-y": [{ "inset-y": [m] }],
        start: [{ start: [m] }],
        end: [{ end: [m] }],
        top: [{ top: [m] }],
        right: [{ right: [m] }],
        bottom: [{ bottom: [m] }],
        left: [{ left: [m] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", $o, ee] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", ee] }],
        grow: [{ grow: j() }],
        shrink: [{ shrink: j() }],
        order: [{ order: ["first", "last", "none", $o, ee] }],
        "grid-cols": [{ "grid-cols": [Uo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", $o, ee] }, ee] }],
        "col-start": [{ "col-start": M() }],
        "col-end": [{ "col-end": M() }],
        "grid-rows": [{ "grid-rows": [Uo] }],
        "row-start-end": [{ row: ["auto", { span: [$o, ee] }, ee] }],
        "row-start": [{ "row-start": M() }],
        "row-end": [{ "row-end": M() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ee] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ee] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...P()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...P(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...P(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [v] }],
        px: [{ px: [v] }],
        py: [{ py: [v] }],
        ps: [{ ps: [v] }],
        pe: [{ pe: [v] }],
        pt: [{ pt: [v] }],
        pr: [{ pr: [v] }],
        pb: [{ pb: [v] }],
        pl: [{ pl: [v] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [E] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [E] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ee, t] }],
        "min-w": [{ "min-w": [ee, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              ee,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Jn] },
              Jn,
            ],
          },
        ],
        h: [{ h: [ee, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [ee, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Jn, Zn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              su,
            ],
          },
        ],
        "font-family": [{ font: [Uo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              ee,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Yi, su] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Mn,
              ee,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", ee] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", ee] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [y] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [y] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Mn, Zn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Mn, ee] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: I() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ee,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ee] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [y] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...W(), kP] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", EP] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              PP,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [b] }],
        "gradient-via-pos": [{ via: [b] }],
        "gradient-to-pos": [{ to: [b] }],
        "gradient-from": [{ from: [p] }],
        "gradient-via": [{ via: [p] }],
        "gradient-to": [{ to: [p] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [y] }],
        "border-style": [{ border: [...U(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [y] }],
        "divide-style": [{ divide: U() }],
        "border-color": [{ border: [i] }],
        "border-color-x": [{ "border-x": [i] }],
        "border-color-y": [{ "border-y": [i] }],
        "border-color-s": [{ "border-s": [i] }],
        "border-color-e": [{ "border-e": [i] }],
        "border-color-t": [{ "border-t": [i] }],
        "border-color-r": [{ "border-r": [i] }],
        "border-color-b": [{ "border-b": [i] }],
        "border-color-l": [{ "border-l": [i] }],
        "divide-color": [{ divide: [i] }],
        "outline-style": [{ outline: ["", ...U()] }],
        "outline-offset": [{ "outline-offset": [Mn, ee] }],
        "outline-w": [{ outline: [Mn, Zn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: K() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [y] }],
        "ring-offset-w": [{ "ring-offset": [Mn, Zn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Jn, jP] }],
        "shadow-color": [{ shadow: [Uo] }],
        opacity: [{ opacity: [y] }],
        "mix-blend": [{ "mix-blend": [...F(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": F() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Jn, ee] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [u] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [x] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [y] }],
        "backdrop-saturate": [{ "backdrop-saturate": [x] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              ee,
            ],
          },
        ],
        duration: [{ duration: G() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", ee] }],
        delay: [{ delay: G() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ee] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [$o, ee] }],
        "translate-x": [{ "translate-x": [T] }],
        "translate-y": [{ "translate-y": [T] }],
        "skew-x": [{ "skew-x": [k] }],
        "skew-y": [{ "skew-y": [k] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              ee,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ee,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": I() }],
        "scroll-mx": [{ "scroll-mx": I() }],
        "scroll-my": [{ "scroll-my": I() }],
        "scroll-ms": [{ "scroll-ms": I() }],
        "scroll-me": [{ "scroll-me": I() }],
        "scroll-mt": [{ "scroll-mt": I() }],
        "scroll-mr": [{ "scroll-mr": I() }],
        "scroll-mb": [{ "scroll-mb": I() }],
        "scroll-ml": [{ "scroll-ml": I() }],
        "scroll-p": [{ "scroll-p": I() }],
        "scroll-px": [{ "scroll-px": I() }],
        "scroll-py": [{ "scroll-py": I() }],
        "scroll-ps": [{ "scroll-ps": I() }],
        "scroll-pe": [{ "scroll-pe": I() }],
        "scroll-pt": [{ "scroll-pt": I() }],
        "scroll-pr": [{ "scroll-pr": I() }],
        "scroll-pb": [{ "scroll-pb": I() }],
        "scroll-pl": [{ "scroll-pl": I() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", ee] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Mn, Zn, su] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  DP = mP(MP);
function $e(...e) {
  return DP(tw(e));
}
const OP = RT,
  uw = g.forwardRef(({ className: e, ...t }, n) =>
    h.jsx(q0, {
      ref: n,
      className: $e(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
uw.displayName = q0.displayName;
const IP = Pp(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
),
  dw = g.forwardRef(({ className: e, variant: t, ...n }, r) =>
    h.jsx(Y0, { ref: r, className: $e(IP({ variant: t }), e), ...n }),
  );
dw.displayName = Y0.displayName;
const LP = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(Z0, {
    ref: n,
    className: $e(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
LP.displayName = Z0.displayName;
const fw = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(J0, {
    ref: n,
    className: $e(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: h.jsx(jp, { className: "h-4 w-4" }),
  }),
);
fw.displayName = J0.displayName;
const pw = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(Q0, { ref: n, className: $e("text-sm font-semibold", e), ...t }),
);
pw.displayName = Q0.displayName;
const mw = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(X0, { ref: n, className: $e("text-sm opacity-90", e), ...t }),
);
mw.displayName = X0.displayName;
function _P() {
  const { toasts: e } = zk();
  return h.jsxs(OP, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: i, ...o }) {
        return h.jsxs(
          dw,
          {
            ...o,
            children: [
              h.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && h.jsx(pw, { children: n }),
                  r && h.jsx(mw, { children: r }),
                ],
              }),
              i,
              h.jsx(fw, {}),
            ],
          },
          t,
        );
      }),
      h.jsx(uw, {}),
    ],
  });
}
var Kh = ["light", "dark"],
  FP = "(prefers-color-scheme: dark)",
  VP = g.createContext(void 0),
  zP = { setTheme: (e) => { }, themes: [] },
  BP = () => {
    var e;
    return (e = g.useContext(VP)) != null ? e : zP;
  };
g.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: i,
    defaultTheme: o,
    value: s,
    attrs: a,
    nonce: l,
  }) => {
    let c = o === "system",
      u =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((b) => `'${b}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      d = i
        ? Kh.includes(o) && o
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (b, m = !1, w = !0) => {
        let y = s ? s[b] : b,
          v = m ? b + "|| ''" : `'${y}'`,
          x = "";
        return (
          i &&
          w &&
          !m &&
          Kh.includes(b) &&
          (x += `d.style.colorScheme = '${b}';`),
          n === "class"
            ? m || y
              ? (x += `c.add(${v})`)
              : (x += "null")
            : y && (x += `d[s](n,${v})`),
          x
        );
      },
      p = e
        ? `!function(){${u}${f(e)}}()`
        : r
          ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${FP}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}${c ? "" : "else{" + f(o, !1, !1) + "}"}${d}}catch(e){}}()`
          : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}else{${f(o, !1, !1)};}${d}}catch(t){}}();`;
    return g.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: p },
    });
  },
);
var $P = (e) => {
  switch (e) {
    case "success":
      return HP;
    case "info":
      return GP;
    case "warning":
      return KP;
    case "error":
      return qP;
    default:
      return null;
  }
},
  UP = Array(12).fill(0),
  WP = ({ visible: e, className: t }) =>
    O.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      O.createElement(
        "div",
        { className: "sonner-spinner" },
        UP.map((n, r) =>
          O.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  HP = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  KP = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  GP = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  qP = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  YP = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    O.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    O.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  QP = () => {
    let [e, t] = O.useState(document.hidden);
    return (
      O.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Id = 1,
  XP = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            i =
              typeof (e == null ? void 0 : e.id) == "number" ||
                ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Id++,
            o = this.toasts.find((a) => a.id === i),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(i) && this.dismissedToasts.delete(i),
            o
              ? (this.toasts = this.toasts.map((a) =>
                a.id === i
                  ? (this.publish({ ...a, ...e, id: i, title: n }),
                    { ...a, ...e, id: i, dismissible: s, title: n })
                  : a,
              ))
              : this.addToast({ title: n, ...r, dismissible: s, id: i }),
            i
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
          this.toasts.forEach((t) => {
            this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
          }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            i = n !== void 0,
            o,
            s = r
              .then(async (l) => {
                if (((o = ["resolve", l]), O.isValidElement(l)))
                  ((i = !1),
                    this.create({ id: n, type: "default", message: l }));
                else if (JP(l) && !l.ok) {
                  i = !1;
                  let c =
                    typeof t.error == "function"
                      ? await t.error(`HTTP error! status: ${l.status}`)
                      : t.error,
                    u =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: c,
                    description: u,
                  });
                } else if (t.success !== void 0) {
                  i = !1;
                  let c =
                    typeof t.success == "function"
                      ? await t.success(l)
                      : t.success,
                    u =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: c,
                    description: u,
                  });
                }
              })
              .catch(async (l) => {
                if (((o = ["reject", l]), t.error !== void 0)) {
                  i = !1;
                  let c =
                    typeof t.error == "function" ? await t.error(l) : t.error,
                    u =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: c,
                    description: u,
                  });
                }
              })
              .finally(() => {
                var l;
                (i && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t));
              }),
            a = () =>
              new Promise((l, c) =>
                s.then(() => (o[0] === "reject" ? c(o[1]) : l(o[1]))).catch(c),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Id++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  mt = new XP(),
  ZP = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Id++;
    return (mt.addToast({ title: e, ...t, id: n }), n);
  },
  JP = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  e2 = ZP,
  t2 = () => mt.toasts,
  n2 = () => mt.getActiveToasts();
Object.assign(
  e2,
  {
    success: mt.success,
    info: mt.info,
    warning: mt.warning,
    error: mt.error,
    custom: mt.custom,
    message: mt.message,
    promise: mt.promise,
    dismiss: mt.dismiss,
    loading: mt.loading,
  },
  { getHistory: t2, getToasts: n2 },
);
function r2(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
r2(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Sa(e) {
  return e.label !== void 0;
}
var i2 = 3,
  o2 = "32px",
  s2 = "16px",
  Gh = 4e3,
  a2 = 356,
  l2 = 14,
  c2 = 20,
  u2 = 200;
function qt(...e) {
  return e.filter(Boolean).join(" ");
}
function d2(e) {
  let [t, n] = e.split("-"),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var f2 = (e) => {
  var t, n, r, i, o, s, a, l, c, u, d;
  let {
    invert: f,
    toast: p,
    unstyled: b,
    interacting: m,
    setHeights: w,
    visibleToasts: y,
    heights: v,
    index: x,
    toasts: S,
    expanded: C,
    removeToast: k,
    defaultRichColors: E,
    closeButton: T,
    style: R,
    cancelButtonStyle: N,
    actionButtonStyle: z,
    className: I = "",
    descriptionClassName: K = "",
    duration: M,
    position: W,
    gap: U,
    loadingIcon: F,
    expandByDefault: P,
    classNames: j,
    icons: L,
    closeButtonAriaLabel: G = "Close toast",
    pauseWhenPageIsHidden: H,
  } = e,
    [X, q] = O.useState(null),
    [me, ue] = O.useState(null),
    [_, le] = O.useState(!1),
    [ye, ie] = O.useState(!1),
    [te, ne] = O.useState(!1),
    [Fe, rt] = O.useState(!1),
    [dn, zt] = O.useState(!1),
    [pt, Rn] = O.useState(0),
    [Bt, Lr] = O.useState(0),
    _r = O.useRef(p.duration || M || Gh),
    ea = O.useRef(null),
    Nn = O.useRef(null),
    V = x === 0,
    Y = x + 1 <= y,
    se = p.type,
    xe = p.dismissible !== !1,
    it = p.className || "",
    Fr = p.descriptionClassName || "",
    $t = O.useMemo(
      () => v.findIndex((Z) => Z.toastId === p.id) || 0,
      [v, p.id],
    ),
    No = O.useMemo(() => {
      var Z;
      return (Z = p.closeButton) != null ? Z : T;
    }, [p.closeButton, T]),
    xi = O.useMemo(() => p.duration || M || Gh, [p.duration, M]),
    Vr = O.useRef(0),
    Ut = O.useRef(0),
    wi = O.useRef(0),
    fn = O.useRef(null),
    [Mo, Do] = W.split("-"),
    ta = O.useMemo(
      () => v.reduce((Z, he, Ee) => (Ee >= $t ? Z : Z + he.height), 0),
      [v, $t],
    ),
    Em = QP(),
    aC = p.invert || f,
    Ac = se === "loading";
  ((Ut.current = O.useMemo(() => $t * U + ta, [$t, ta])),
    O.useEffect(() => {
      _r.current = xi;
    }, [xi]),
    O.useEffect(() => {
      le(!0);
    }, []),
    O.useEffect(() => {
      let Z = Nn.current;
      if (Z) {
        let he = Z.getBoundingClientRect().height;
        return (
          Lr(he),
          w((Ee) => [
            { toastId: p.id, height: he, position: p.position },
            ...Ee,
          ]),
          () => w((Ee) => Ee.filter((Wt) => Wt.toastId !== p.id))
        );
      }
    }, [w, p.id]),
    O.useLayoutEffect(() => {
      if (!_) return;
      let Z = Nn.current,
        he = Z.style.height;
      Z.style.height = "auto";
      let Ee = Z.getBoundingClientRect().height;
      ((Z.style.height = he),
        Lr(Ee),
        w((Wt) =>
          Wt.find((Ht) => Ht.toastId === p.id)
            ? Wt.map((Ht) => (Ht.toastId === p.id ? { ...Ht, height: Ee } : Ht))
            : [{ toastId: p.id, height: Ee, position: p.position }, ...Wt],
        ));
    }, [_, p.title, p.description, w, p.id]));
  let qn = O.useCallback(() => {
    (ie(!0),
      Rn(Ut.current),
      w((Z) => Z.filter((he) => he.toastId !== p.id)),
      setTimeout(() => {
        k(p);
      }, u2));
  }, [p, k, w, Ut]);
  (O.useEffect(() => {
    if (
      (p.promise && se === "loading") ||
      p.duration === 1 / 0 ||
      p.type === "loading"
    )
      return;
    let Z;
    return (
      C || m || (H && Em)
        ? (() => {
          if (wi.current < Vr.current) {
            let he = new Date().getTime() - Vr.current;
            _r.current = _r.current - he;
          }
          wi.current = new Date().getTime();
        })()
        : _r.current !== 1 / 0 &&
        ((Vr.current = new Date().getTime()),
          (Z = setTimeout(() => {
            var he;
            ((he = p.onAutoClose) == null || he.call(p, p), qn());
          }, _r.current))),
      () => clearTimeout(Z)
    );
  }, [C, m, p, se, H, Em, qn]),
    O.useEffect(() => {
      p.delete && qn();
    }, [qn, p.delete]));
  function lC() {
    var Z, he, Ee;
    return L != null && L.loading
      ? O.createElement(
        "div",
        {
          className: qt(
            j == null ? void 0 : j.loader,
            (Z = p == null ? void 0 : p.classNames) == null
              ? void 0
              : Z.loader,
            "sonner-loader",
          ),
          "data-visible": se === "loading",
        },
        L.loading,
      )
      : F
        ? O.createElement(
          "div",
          {
            className: qt(
              j == null ? void 0 : j.loader,
              (he = p == null ? void 0 : p.classNames) == null
                ? void 0
                : he.loader,
              "sonner-loader",
            ),
            "data-visible": se === "loading",
          },
          F,
        )
        : O.createElement(WP, {
          className: qt(
            j == null ? void 0 : j.loader,
            (Ee = p == null ? void 0 : p.classNames) == null
              ? void 0
              : Ee.loader,
          ),
          visible: se === "loading",
        });
  }
  return O.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Nn,
      className: qt(
        I,
        it,
        j == null ? void 0 : j.toast,
        (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast,
        j == null ? void 0 : j.default,
        j == null ? void 0 : j[se],
        (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[se],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = p.richColors) != null ? r : E,
      "data-styled": !(p.jsx || p.unstyled || b),
      "data-mounted": _,
      "data-promise": !!p.promise,
      "data-swiped": dn,
      "data-removed": ye,
      "data-visible": Y,
      "data-y-position": Mo,
      "data-x-position": Do,
      "data-index": x,
      "data-front": V,
      "data-swiping": te,
      "data-dismissible": xe,
      "data-type": se,
      "data-invert": aC,
      "data-swipe-out": Fe,
      "data-swipe-direction": me,
      "data-expanded": !!(C || (P && _)),
      style: {
        "--index": x,
        "--toasts-before": x,
        "--z-index": S.length - x,
        "--offset": `${ye ? pt : Ut.current}px`,
        "--initial-height": P ? "auto" : `${Bt}px`,
        ...R,
        ...p.style,
      },
      onDragEnd: () => {
        (ne(!1), q(null), (fn.current = null));
      },
      onPointerDown: (Z) => {
        Ac ||
          !xe ||
          ((ea.current = new Date()),
            Rn(Ut.current),
            Z.target.setPointerCapture(Z.pointerId),
            Z.target.tagName !== "BUTTON" &&
            (ne(!0), (fn.current = { x: Z.clientX, y: Z.clientY })));
      },
      onPointerUp: () => {
        var Z, he, Ee, Wt;
        if (Fe || !xe) return;
        fn.current = null;
        let Ht = Number(
          ((Z = Nn.current) == null
            ? void 0
            : Z.style
              .getPropertyValue("--swipe-amount-x")
              .replace("px", "")) || 0,
        ),
          Yn = Number(
            ((he = Nn.current) == null
              ? void 0
              : he.style
                .getPropertyValue("--swipe-amount-y")
                .replace("px", "")) || 0,
          ),
          zr =
            new Date().getTime() -
            ((Ee = ea.current) == null ? void 0 : Ee.getTime()),
          Kt = X === "x" ? Ht : Yn,
          Qn = Math.abs(Kt) / zr;
        if (Math.abs(Kt) >= c2 || Qn > 0.11) {
          (Rn(Ut.current),
            (Wt = p.onDismiss) == null || Wt.call(p, p),
            ue(
              X === "x" ? (Ht > 0 ? "right" : "left") : Yn > 0 ? "down" : "up",
            ),
            qn(),
            rt(!0),
            zt(!1));
          return;
        }
        (ne(!1), q(null));
      },
      onPointerMove: (Z) => {
        var he, Ee, Wt, Ht;
        if (
          !fn.current ||
          !xe ||
          ((he = window.getSelection()) == null
            ? void 0
            : he.toString().length) > 0
        )
          return;
        let Yn = Z.clientY - fn.current.y,
          zr = Z.clientX - fn.current.x,
          Kt = (Ee = e.swipeDirections) != null ? Ee : d2(W);
        !X &&
          (Math.abs(zr) > 1 || Math.abs(Yn) > 1) &&
          q(Math.abs(zr) > Math.abs(Yn) ? "x" : "y");
        let Qn = { x: 0, y: 0 };
        (X === "y"
          ? (Kt.includes("top") || Kt.includes("bottom")) &&
          ((Kt.includes("top") && Yn < 0) ||
            (Kt.includes("bottom") && Yn > 0)) &&
          (Qn.y = Yn)
          : X === "x" &&
          (Kt.includes("left") || Kt.includes("right")) &&
          ((Kt.includes("left") && zr < 0) ||
            (Kt.includes("right") && zr > 0)) &&
          (Qn.x = zr),
          (Math.abs(Qn.x) > 0 || Math.abs(Qn.y) > 0) && zt(!0),
          (Wt = Nn.current) == null ||
          Wt.style.setProperty("--swipe-amount-x", `${Qn.x}px`),
          (Ht = Nn.current) == null ||
          Ht.style.setProperty("--swipe-amount-y", `${Qn.y}px`));
      },
    },
    No && !p.jsx
      ? O.createElement(
        "button",
        {
          "aria-label": G,
          "data-disabled": Ac,
          "data-close-button": !0,
          onClick:
            Ac || !xe
              ? () => { }
              : () => {
                var Z;
                (qn(), (Z = p.onDismiss) == null || Z.call(p, p));
              },
          className: qt(
            j == null ? void 0 : j.closeButton,
            (i = p == null ? void 0 : p.classNames) == null
              ? void 0
              : i.closeButton,
          ),
        },
        (o = L == null ? void 0 : L.close) != null ? o : YP,
      )
      : null,
    p.jsx || g.isValidElement(p.title)
      ? p.jsx
        ? p.jsx
        : typeof p.title == "function"
          ? p.title()
          : p.title
      : O.createElement(
        O.Fragment,
        null,
        se || p.icon || p.promise
          ? O.createElement(
            "div",
            {
              "data-icon": "",
              className: qt(
                j == null ? void 0 : j.icon,
                (s = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : s.icon,
              ),
            },
            p.promise || (p.type === "loading" && !p.icon)
              ? p.icon || lC()
              : null,
            p.type !== "loading"
              ? p.icon || (L == null ? void 0 : L[se]) || $P(se)
              : null,
          )
          : null,
        O.createElement(
          "div",
          {
            "data-content": "",
            className: qt(
              j == null ? void 0 : j.content,
              (a = p == null ? void 0 : p.classNames) == null
                ? void 0
                : a.content,
            ),
          },
          O.createElement(
            "div",
            {
              "data-title": "",
              className: qt(
                j == null ? void 0 : j.title,
                (l = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : l.title,
              ),
            },
            typeof p.title == "function" ? p.title() : p.title,
          ),
          p.description
            ? O.createElement(
              "div",
              {
                "data-description": "",
                className: qt(
                  K,
                  Fr,
                  j == null ? void 0 : j.description,
                  (c = p == null ? void 0 : p.classNames) == null
                    ? void 0
                    : c.description,
                ),
              },
              typeof p.description == "function"
                ? p.description()
                : p.description,
            )
            : null,
        ),
        g.isValidElement(p.cancel)
          ? p.cancel
          : p.cancel && Sa(p.cancel)
            ? O.createElement(
              "button",
              {
                "data-button": !0,
                "data-cancel": !0,
                style: p.cancelButtonStyle || N,
                onClick: (Z) => {
                  var he, Ee;
                  Sa(p.cancel) &&
                    xe &&
                    ((Ee = (he = p.cancel).onClick) == null ||
                      Ee.call(he, Z),
                      qn());
                },
                className: qt(
                  j == null ? void 0 : j.cancelButton,
                  (u = p == null ? void 0 : p.classNames) == null
                    ? void 0
                    : u.cancelButton,
                ),
              },
              p.cancel.label,
            )
            : null,
        g.isValidElement(p.action)
          ? p.action
          : p.action && Sa(p.action)
            ? O.createElement(
              "button",
              {
                "data-button": !0,
                "data-action": !0,
                style: p.actionButtonStyle || z,
                onClick: (Z) => {
                  var he, Ee;
                  Sa(p.action) &&
                    ((Ee = (he = p.action).onClick) == null ||
                      Ee.call(he, Z),
                      !Z.defaultPrevented && qn());
                },
                className: qt(
                  j == null ? void 0 : j.actionButton,
                  (d = p == null ? void 0 : p.classNames) == null
                    ? void 0
                    : d.actionButton,
                ),
              },
              p.action.label,
            )
            : null,
      ),
  );
};
function qh() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function p2(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, i) => {
      let o = i === 1,
        s = o ? "--mobile-offset" : "--offset",
        a = o ? s2 : o2;
      function l(c) {
        ["top", "right", "bottom", "left"].forEach((u) => {
          n[`${s}-${u}`] = typeof c == "number" ? `${c}px` : c;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((c) => {
            r[c] === void 0
              ? (n[`${s}-${c}`] = a)
              : (n[`${s}-${c}`] =
                typeof r[c] == "number" ? `${r[c]}px` : r[c]);
          })
          : l(a);
    }),
    n
  );
}
var m2 = g.forwardRef(function (e, t) {
  let {
    invert: n,
    position: r = "bottom-right",
    hotkey: i = ["altKey", "KeyT"],
    expand: o,
    closeButton: s,
    className: a,
    offset: l,
    mobileOffset: c,
    theme: u = "light",
    richColors: d,
    duration: f,
    style: p,
    visibleToasts: b = i2,
    toastOptions: m,
    dir: w = qh(),
    gap: y = l2,
    loadingIcon: v,
    icons: x,
    containerAriaLabel: S = "Notifications",
    pauseWhenPageIsHidden: C,
  } = e,
    [k, E] = O.useState([]),
    T = O.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(k.filter((H) => H.position).map((H) => H.position)),
          ),
        ),
      [k, r],
    ),
    [R, N] = O.useState([]),
    [z, I] = O.useState(!1),
    [K, M] = O.useState(!1),
    [W, U] = O.useState(
      u !== "system"
        ? u
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    F = O.useRef(null),
    P = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    j = O.useRef(null),
    L = O.useRef(!1),
    G = O.useCallback((H) => {
      E((X) => {
        var q;
        return (
          ((q = X.find((me) => me.id === H.id)) != null && q.delete) ||
          mt.dismiss(H.id),
          X.filter(({ id: me }) => me !== H.id)
        );
      });
    }, []);
  return (
    O.useEffect(
      () =>
        mt.subscribe((H) => {
          if (H.dismiss) {
            E((X) => X.map((q) => (q.id === H.id ? { ...q, delete: !0 } : q)));
            return;
          }
          setTimeout(() => {
            k0.flushSync(() => {
              E((X) => {
                let q = X.findIndex((me) => me.id === H.id);
                return q !== -1
                  ? [...X.slice(0, q), { ...X[q], ...H }, ...X.slice(q + 1)]
                  : [H, ...X];
              });
            });
          });
        }),
      [],
    ),
    O.useEffect(() => {
      if (u !== "system") {
        U(u);
        return;
      }
      if (
        (u === "system" &&
          (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
            ? U("dark")
            : U("light")),
          typeof window > "u")
      )
        return;
      let H = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        H.addEventListener("change", ({ matches: X }) => {
          U(X ? "dark" : "light");
        });
      } catch {
        H.addListener(({ matches: q }) => {
          try {
            U(q ? "dark" : "light");
          } catch (me) {
            console.error(me);
          }
        });
      }
    }, [u]),
    O.useEffect(() => {
      k.length <= 1 && I(!1);
    }, [k]),
    O.useEffect(() => {
      let H = (X) => {
        var q, me;
        (i.every((ue) => X[ue] || X.code === ue) &&
          (I(!0), (q = F.current) == null || q.focus()),
          X.code === "Escape" &&
          (document.activeElement === F.current ||
            ((me = F.current) != null &&
              me.contains(document.activeElement))) &&
          I(!1));
      };
      return (
        document.addEventListener("keydown", H),
        () => document.removeEventListener("keydown", H)
      );
    }, [i]),
    O.useEffect(() => {
      if (F.current)
        return () => {
          j.current &&
            (j.current.focus({ preventScroll: !0 }),
              (j.current = null),
              (L.current = !1));
        };
    }, [F.current]),
    O.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${S} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      T.map((H, X) => {
        var q;
        let [me, ue] = H.split("-");
        return k.length
          ? O.createElement(
            "ol",
            {
              key: H,
              dir: w === "auto" ? qh() : w,
              tabIndex: -1,
              ref: F,
              className: a,
              "data-sonner-toaster": !0,
              "data-theme": W,
              "data-y-position": me,
              "data-lifted": z && k.length > 1 && !o,
              "data-x-position": ue,
              style: {
                "--front-toast-height": `${((q = R[0]) == null ? void 0 : q.height) || 0}px`,
                "--width": `${a2}px`,
                "--gap": `${y}px`,
                ...p,
                ...p2(l, c),
              },
              onBlur: (_) => {
                L.current &&
                  !_.currentTarget.contains(_.relatedTarget) &&
                  ((L.current = !1),
                    j.current &&
                    (j.current.focus({ preventScroll: !0 }),
                      (j.current = null)));
              },
              onFocus: (_) => {
                (_.target instanceof HTMLElement &&
                  _.target.dataset.dismissible === "false") ||
                  L.current ||
                  ((L.current = !0), (j.current = _.relatedTarget));
              },
              onMouseEnter: () => I(!0),
              onMouseMove: () => I(!0),
              onMouseLeave: () => {
                K || I(!1);
              },
              onDragEnd: () => I(!1),
              onPointerDown: (_) => {
                (_.target instanceof HTMLElement &&
                  _.target.dataset.dismissible === "false") ||
                  M(!0);
              },
              onPointerUp: () => M(!1),
            },
            k
              .filter((_) => (!_.position && X === 0) || _.position === H)
              .map((_, le) => {
                var ye, ie;
                return O.createElement(f2, {
                  key: _.id,
                  icons: x,
                  index: le,
                  toast: _,
                  defaultRichColors: d,
                  duration:
                    (ye = m == null ? void 0 : m.duration) != null ? ye : f,
                  className: m == null ? void 0 : m.className,
                  descriptionClassName:
                    m == null ? void 0 : m.descriptionClassName,
                  invert: n,
                  visibleToasts: b,
                  closeButton:
                    (ie = m == null ? void 0 : m.closeButton) != null
                      ? ie
                      : s,
                  interacting: K,
                  position: H,
                  style: m == null ? void 0 : m.style,
                  unstyled: m == null ? void 0 : m.unstyled,
                  classNames: m == null ? void 0 : m.classNames,
                  cancelButtonStyle: m == null ? void 0 : m.cancelButtonStyle,
                  actionButtonStyle: m == null ? void 0 : m.actionButtonStyle,
                  removeToast: G,
                  toasts: k.filter((te) => te.position == _.position),
                  heights: R.filter((te) => te.position == _.position),
                  setHeights: N,
                  expandByDefault: o,
                  gap: y,
                  loadingIcon: v,
                  expanded: z,
                  pauseWhenPageIsHidden: C,
                  swipeDirections: e.swipeDirections,
                });
              }),
          )
          : null;
      }),
    )
  );
});
const h2 = ({ ...e }) => {
  const { theme: t = "system" } = BP();
  return h.jsx(m2, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
var g2 = Nf[" useId ".trim().toString()] || (() => { }),
  v2 = 0;
function Rp(e) {
  const [t, n] = g.useState(g2());
  return (
    Ye(() => {
      n((r) => r ?? String(v2++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const y2 = ["top", "right", "bottom", "left"],
  Tr = Math.min,
  Ct = Math.max,
  kl = Math.round,
  Ca = Math.floor,
  En = (e) => ({ x: e, y: e }),
  x2 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  w2 = { start: "end", end: "start" };
function Ld(e, t, n) {
  return Ct(e, Tr(t, n));
}
function Wn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hn(e) {
  return e.split("-")[0];
}
function ko(e) {
  return e.split("-")[1];
}
function Np(e) {
  return e === "x" ? "y" : "x";
}
function Mp(e) {
  return e === "y" ? "height" : "width";
}
const b2 = new Set(["top", "bottom"]);
function bn(e) {
  return b2.has(Hn(e)) ? "y" : "x";
}
function Dp(e) {
  return Np(bn(e));
}
function S2(e, t, n) {
  n === void 0 && (n = !1);
  const r = ko(e),
    i = Dp(e),
    o = Mp(i);
  let s =
    i === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[o] > t.floating[o] && (s = Tl(s)), [s, Tl(s)]);
}
function C2(e) {
  const t = Tl(e);
  return [_d(e), t, _d(t)];
}
function _d(e) {
  return e.replace(/start|end/g, (t) => w2[t]);
}
const Yh = ["left", "right"],
  Qh = ["right", "left"],
  E2 = ["top", "bottom"],
  k2 = ["bottom", "top"];
function T2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Qh : Yh) : t ? Yh : Qh;
    case "left":
    case "right":
      return t ? E2 : k2;
    default:
      return [];
  }
}
function P2(e, t, n, r) {
  const i = ko(e);
  let o = T2(Hn(e), n === "start", r);
  return (
    i && ((o = o.map((s) => s + "-" + i)), t && (o = o.concat(o.map(_d)))),
    o
  );
}
function Tl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => x2[t]);
}
function j2(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function hw(e) {
  return typeof e != "number"
    ? j2(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Pl(e) {
  const { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function Xh(e, t, n) {
  let { reference: r, floating: i } = e;
  const o = bn(t),
    s = Dp(t),
    a = Mp(s),
    l = Hn(t),
    c = o === "y",
    u = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[a] / 2 - i[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = { x: u, y: r.y - i.height };
      break;
    case "bottom":
      p = { x: u, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: d };
      break;
    case "left":
      p = { x: r.x - i.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (ko(t)) {
    case "start":
      p[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const A2 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: s,
  } = n,
    a = o.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: u, y: d } = Xh(c, r, l),
    f = r,
    p = {},
    b = 0;
  for (let m = 0; m < a.length; m++) {
    const { name: w, fn: y } = a[m],
      {
        x: v,
        y: x,
        data: S,
        reset: C,
      } = await y({
        x: u,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: i,
        middlewareData: p,
        rects: c,
        platform: s,
        elements: { reference: e, floating: t },
      });
    ((u = v ?? u),
      (d = x ?? d),
      (p = { ...p, [w]: { ...p[w], ...S } }),
      C &&
      b <= 50 &&
      (b++,
        typeof C == "object" &&
        (C.placement && (f = C.placement),
          C.rects &&
          (c =
            C.rects === !0
              ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: i,
              })
              : C.rects),
          ({ x: u, y: d } = Xh(c, f, l))),
        (m = -1)));
  }
  return { x: u, y: d, placement: f, strategy: i, middlewareData: p };
};
async function Rs(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: o, rects: s, elements: a, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: p = 0,
    } = Wn(t, e),
    b = hw(p),
    w = a[f ? (d === "floating" ? "reference" : "floating") : d],
    y = Pl(
      await o.getClippingRect({
        element:
          (n = await (o.isElement == null ? void 0 : o.isElement(w))) == null ||
            n
            ? w
            : w.contextElement ||
            (await (o.getDocumentElement == null
              ? void 0
              : o.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: u,
        strategy: l,
      }),
    ),
    v =
      d === "floating"
        ? { x: r, y: i, width: s.floating.width, height: s.floating.height }
        : s.reference,
    x = await (o.getOffsetParent == null
      ? void 0
      : o.getOffsetParent(a.floating)),
    S = (await (o.isElement == null ? void 0 : o.isElement(x)))
      ? (await (o.getScale == null ? void 0 : o.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Pl(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: v,
          offsetParent: x,
          strategy: l,
        })
        : v,
    );
  return {
    top: (y.top - C.top + b.top) / S.y,
    bottom: (C.bottom - y.bottom + b.bottom) / S.y,
    left: (y.left - C.left + b.left) / S.x,
    right: (C.right - y.right + b.right) / S.x,
  };
}
const R2 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: i,
      rects: o,
      platform: s,
      elements: a,
      middlewareData: l,
    } = t,
      { element: c, padding: u = 0 } = Wn(e, t) || {};
    if (c == null) return {};
    const d = hw(u),
      f = { x: n, y: r },
      p = Dp(i),
      b = Mp(p),
      m = await s.getDimensions(c),
      w = p === "y",
      y = w ? "top" : "left",
      v = w ? "bottom" : "right",
      x = w ? "clientHeight" : "clientWidth",
      S = o.reference[b] + o.reference[p] - f[p] - o.floating[b],
      C = f[p] - o.reference[p],
      k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let E = k ? k[x] : 0;
    (!E || !(await (s.isElement == null ? void 0 : s.isElement(k)))) &&
      (E = a.floating[x] || o.floating[b]);
    const T = S / 2 - C / 2,
      R = E / 2 - m[b] / 2 - 1,
      N = Tr(d[y], R),
      z = Tr(d[v], R),
      I = N,
      K = E - m[b] - z,
      M = E / 2 - m[b] / 2 + T,
      W = Ld(I, M, K),
      U =
        !l.arrow &&
        ko(i) != null &&
        M !== W &&
        o.reference[b] / 2 - (M < I ? N : z) - m[b] / 2 < 0,
      F = U ? (M < I ? M - I : M - K) : 0;
    return {
      [p]: f[p] + F,
      data: {
        [p]: W,
        centerOffset: M - W - F,
        ...(U && { alignmentOffset: F }),
      },
      reset: U,
    };
  },
}),
  N2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
            placement: i,
            middlewareData: o,
            rects: s,
            initialPlacement: a,
            platform: l,
            elements: c,
          } = t,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: b = "none",
              flipAlignment: m = !0,
              ...w
            } = Wn(e, t);
          if ((n = o.arrow) != null && n.alignmentOffset) return {};
          const y = Hn(i),
            v = bn(a),
            x = Hn(a) === a,
            S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            C = f || (x || !m ? [Tl(a)] : C2(a)),
            k = b !== "none";
          !f && k && C.push(...P2(a, m, b, S));
          const E = [a, ...C],
            T = await Rs(t, w),
            R = [];
          let N = ((r = o.flip) == null ? void 0 : r.overflows) || [];
          if ((u && R.push(T[y]), d)) {
            const M = S2(i, s, S);
            R.push(T[M[0]], T[M[1]]);
          }
          if (
            ((N = [...N, { placement: i, overflows: R }]),
              !R.every((M) => M <= 0))
          ) {
            var z, I;
            const M = (((z = o.flip) == null ? void 0 : z.index) || 0) + 1,
              W = E[M];
            if (
              W &&
              (!(d === "alignment" ? v !== bn(W) : !1) ||
                N.every((P) => P.overflows[0] > 0 && bn(P.placement) === v))
            )
              return {
                data: { index: M, overflows: N },
                reset: { placement: W },
              };
            let U =
              (I = N.filter((F) => F.overflows[0] <= 0).sort(
                (F, P) => F.overflows[1] - P.overflows[1],
              )[0]) == null
                ? void 0
                : I.placement;
            if (!U)
              switch (p) {
                case "bestFit": {
                  var K;
                  const F =
                    (K = N.filter((P) => {
                      if (k) {
                        const j = bn(P.placement);
                        return j === v || j === "y";
                      }
                      return !0;
                    })
                      .map((P) => [
                        P.placement,
                        P.overflows
                          .filter((j) => j > 0)
                          .reduce((j, L) => j + L, 0),
                      ])
                      .sort((P, j) => P[1] - j[1])[0]) == null
                      ? void 0
                      : K[0];
                  F && (U = F);
                  break;
                }
                case "initialPlacement":
                  U = a;
                  break;
              }
            if (i !== U) return { reset: { placement: U } };
          }
          return {};
        },
      }
    );
  };
function Zh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Jh(e) {
  return y2.some((t) => e[t] >= 0);
}
const M2 = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...i } = Wn(e, t);
        switch (r) {
          case "referenceHidden": {
            const o = await Rs(t, { ...i, elementContext: "reference" }),
              s = Zh(o, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: Jh(s) },
            };
          }
          case "escaped": {
            const o = await Rs(t, { ...i, altBoundary: !0 }),
              s = Zh(o, n.floating);
            return { data: { escapedOffsets: s, escaped: Jh(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
},
  gw = new Set(["left", "top"]);
async function D2(e, t) {
  const { placement: n, platform: r, elements: i } = e,
    o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    s = Hn(n),
    a = ko(n),
    l = bn(n) === "y",
    c = gw.has(s) ? -1 : 1,
    u = o && l ? -1 : 1,
    d = Wn(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: b,
  } = typeof d == "number"
      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
      : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof b == "number" && (p = a === "end" ? b * -1 : b),
    l ? { x: p * u, y: f * c } : { x: f * c, y: p * u }
  );
}
const O2 = function (e) {
  return (
    e === void 0 && (e = 0),
    {
      name: "offset",
      options: e,
      async fn(t) {
        var n, r;
        const { x: i, y: o, placement: s, middlewareData: a } = t,
          l = await D2(t, e);
        return s === ((n = a.offset) == null ? void 0 : n.placement) &&
          (r = a.arrow) != null &&
          r.alignmentOffset
          ? {}
          : { x: i + l.x, y: o + l.y, data: { ...l, placement: s } };
      },
    }
  );
},
  I2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: i } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (w) => {
                  let { x: y, y: v } = w;
                  return { x: y, y: v };
                },
              },
              ...l
            } = Wn(e, t),
            c = { x: n, y: r },
            u = await Rs(t, l),
            d = bn(Hn(i)),
            f = Np(d);
          let p = c[f],
            b = c[d];
          if (o) {
            const w = f === "y" ? "top" : "left",
              y = f === "y" ? "bottom" : "right",
              v = p + u[w],
              x = p - u[y];
            p = Ld(v, p, x);
          }
          if (s) {
            const w = d === "y" ? "top" : "left",
              y = d === "y" ? "bottom" : "right",
              v = b + u[w],
              x = b - u[y];
            b = Ld(v, b, x);
          }
          const m = a.fn({ ...t, [f]: p, [d]: b });
          return {
            ...m,
            data: { x: m.x - n, y: m.y - r, enabled: { [f]: o, [d]: s } },
          };
        },
      }
    );
  },
  L2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: i, rects: o, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = Wn(e, t),
            u = { x: n, y: r },
            d = bn(i),
            f = Np(d);
          let p = u[f],
            b = u[d];
          const m = Wn(a, t),
            w =
              typeof m == "number"
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (l) {
            const x = f === "y" ? "height" : "width",
              S = o.reference[f] - o.floating[x] + w.mainAxis,
              C = o.reference[f] + o.reference[x] - w.mainAxis;
            p < S ? (p = S) : p > C && (p = C);
          }
          if (c) {
            var y, v;
            const x = f === "y" ? "width" : "height",
              S = gw.has(Hn(i)),
              C =
                o.reference[d] -
                o.floating[x] +
                ((S && ((y = s.offset) == null ? void 0 : y[d])) || 0) +
                (S ? 0 : w.crossAxis),
              k =
                o.reference[d] +
                o.reference[x] +
                (S ? 0 : ((v = s.offset) == null ? void 0 : v[d]) || 0) -
                (S ? w.crossAxis : 0);
            b < C ? (b = C) : b > k && (b = k);
          }
          return { [f]: p, [d]: b };
        },
      }
    );
  },
  _2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: i, rects: o, platform: s, elements: a } = t,
            { apply: l = () => { }, ...c } = Wn(e, t),
            u = await Rs(t, c),
            d = Hn(i),
            f = ko(i),
            p = bn(i) === "y",
            { width: b, height: m } = o.floating;
          let w, y;
          d === "top" || d === "bottom"
            ? ((w = d),
              (y =
                f ===
                  ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                    ? "start"
                    : "end")
                  ? "left"
                  : "right"))
            : ((y = d), (w = f === "end" ? "top" : "bottom"));
          const v = m - u.top - u.bottom,
            x = b - u.left - u.right,
            S = Tr(m - u[w], v),
            C = Tr(b - u[y], x),
            k = !t.middlewareData.shift;
          let E = S,
            T = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (T = x),
              (r = t.middlewareData.shift) != null && r.enabled.y && (E = v),
              k && !f)
          ) {
            const N = Ct(u.left, 0),
              z = Ct(u.right, 0),
              I = Ct(u.top, 0),
              K = Ct(u.bottom, 0);
            p
              ? (T = b - 2 * (N !== 0 || z !== 0 ? N + z : Ct(u.left, u.right)))
              : (E =
                m - 2 * (I !== 0 || K !== 0 ? I + K : Ct(u.top, u.bottom)));
          }
          await l({ ...t, availableWidth: T, availableHeight: E });
          const R = await s.getDimensions(a.floating);
          return b !== R.width || m !== R.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function cc() {
  return typeof window < "u";
}
function To(e) {
  return vw(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Tt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function An(e) {
  var t;
  return (t = (vw(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function vw(e) {
  return cc() ? e instanceof Node || e instanceof Tt(e).Node : !1;
}
function cn(e) {
  return cc() ? e instanceof Element || e instanceof Tt(e).Element : !1;
}
function Pn(e) {
  return cc() ? e instanceof HTMLElement || e instanceof Tt(e).HTMLElement : !1;
}
function eg(e) {
  return !cc() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Tt(e).ShadowRoot;
}
const F2 = new Set(["inline", "contents"]);
function Ys(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = un(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !F2.has(i);
}
const V2 = new Set(["table", "td", "th"]);
function z2(e) {
  return V2.has(To(e));
}
const B2 = [":popover-open", ":modal"];
function uc(e) {
  return B2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const $2 = ["transform", "translate", "scale", "rotate", "perspective"],
  U2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  W2 = ["paint", "layout", "strict", "content"];
function Op(e) {
  const t = Ip(),
    n = cn(e) ? un(e) : e;
  return (
    $2.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    U2.some((r) => (n.willChange || "").includes(r)) ||
    W2.some((r) => (n.contain || "").includes(r))
  );
}
function H2(e) {
  let t = Pr(e);
  for (; Pn(t) && !go(t);) {
    if (Op(t)) return t;
    if (uc(t)) return null;
    t = Pr(t);
  }
  return null;
}
function Ip() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const K2 = new Set(["html", "body", "#document"]);
function go(e) {
  return K2.has(To(e));
}
function un(e) {
  return Tt(e).getComputedStyle(e);
}
function dc(e) {
  return cn(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Pr(e) {
  if (To(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (eg(e) && e.host) || An(e);
  return eg(t) ? t.host : t;
}
function yw(e) {
  const t = Pr(e);
  return go(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Pn(t) && Ys(t)
      ? t
      : yw(t);
}
function Ns(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const i = yw(e),
    o = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = Tt(i);
  if (o) {
    const a = Fd(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Ys(i) ? i : [],
      a && n ? Ns(a) : [],
    );
  }
  return t.concat(i, Ns(i, [], n));
}
function Fd(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function xw(e) {
  const t = un(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = Pn(e),
    o = i ? e.offsetWidth : n,
    s = i ? e.offsetHeight : r,
    a = kl(n) !== o || kl(r) !== s;
  return (a && ((n = o), (r = s)), { width: n, height: r, $: a });
}
function Lp(e) {
  return cn(e) ? e : e.contextElement;
}
function Qi(e) {
  const t = Lp(e);
  if (!Pn(t)) return En(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: i, $: o } = xw(t);
  let s = (o ? kl(n.width) : n.width) / r,
    a = (o ? kl(n.height) : n.height) / i;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const G2 = En(0);
function ww(e) {
  const t = Tt(e);
  return !Ip() || !t.visualViewport
    ? G2
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function q2(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== Tt(e)) ? !1 : t);
}
function fi(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const i = e.getBoundingClientRect(),
    o = Lp(e);
  let s = En(1);
  t && (r ? cn(r) && (s = Qi(r)) : (s = Qi(e)));
  const a = q2(o, n, r) ? ww(o) : En(0);
  let l = (i.left + a.x) / s.x,
    c = (i.top + a.y) / s.y,
    u = i.width / s.x,
    d = i.height / s.y;
  if (o) {
    const f = Tt(o),
      p = r && cn(r) ? Tt(r) : r;
    let b = f,
      m = Fd(b);
    for (; m && r && p !== b;) {
      const w = Qi(m),
        y = m.getBoundingClientRect(),
        v = un(m),
        x = y.left + (m.clientLeft + parseFloat(v.paddingLeft)) * w.x,
        S = y.top + (m.clientTop + parseFloat(v.paddingTop)) * w.y;
      ((l *= w.x),
        (c *= w.y),
        (u *= w.x),
        (d *= w.y),
        (l += x),
        (c += S),
        (b = Tt(m)),
        (m = Fd(b)));
    }
  }
  return Pl({ width: u, height: d, x: l, y: c });
}
function _p(e, t) {
  const n = dc(e).scrollLeft;
  return t ? t.left + n : fi(An(e)).left + n;
}
function bw(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    i = r.left + t.scrollLeft - (n ? 0 : _p(e, r)),
    o = r.top + t.scrollTop;
  return { x: i, y: o };
}
function Y2(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
  const o = i === "fixed",
    s = An(r),
    a = t ? uc(t.floating) : !1;
  if (r === s || (a && o)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = En(1);
  const u = En(0),
    d = Pn(r);
  if (
    (d || (!d && !o)) &&
    ((To(r) !== "body" || Ys(s)) && (l = dc(r)), Pn(r))
  ) {
    const p = fi(r);
    ((c = Qi(r)), (u.x = p.x + r.clientLeft), (u.y = p.y + r.clientTop));
  }
  const f = s && !d && !o ? bw(s, l, !0) : En(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + f.y,
  };
}
function Q2(e) {
  return Array.from(e.getClientRects());
}
function X2(e) {
  const t = An(e),
    n = dc(e),
    r = e.ownerDocument.body,
    i = Ct(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    o = Ct(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + _p(e);
  const a = -n.scrollTop;
  return (
    un(r).direction === "rtl" && (s += Ct(t.clientWidth, r.clientWidth) - i),
    { width: i, height: o, x: s, y: a }
  );
}
function Z2(e, t) {
  const n = Tt(e),
    r = An(e),
    i = n.visualViewport;
  let o = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    ((o = i.width), (s = i.height));
    const c = Ip();
    (!c || (c && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: o, height: s, x: a, y: l };
}
const J2 = new Set(["absolute", "fixed"]);
function ej(e, t) {
  const n = fi(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    o = Pn(e) ? Qi(e) : En(1),
    s = e.clientWidth * o.x,
    a = e.clientHeight * o.y,
    l = i * o.x,
    c = r * o.y;
  return { width: s, height: a, x: l, y: c };
}
function tg(e, t, n) {
  let r;
  if (t === "viewport") r = Z2(e, n);
  else if (t === "document") r = X2(An(e));
  else if (cn(t)) r = ej(t, n);
  else {
    const i = ww(e);
    r = { x: t.x - i.x, y: t.y - i.y, width: t.width, height: t.height };
  }
  return Pl(r);
}
function Sw(e, t) {
  const n = Pr(e);
  return n === t || !cn(n) || go(n)
    ? !1
    : un(n).position === "fixed" || Sw(n, t);
}
function tj(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ns(e, [], !1).filter((a) => cn(a) && To(a) !== "body"),
    i = null;
  const o = un(e).position === "fixed";
  let s = o ? Pr(e) : e;
  for (; cn(s) && !go(s);) {
    const a = un(s),
      l = Op(s);
    (!l && a.position === "fixed" && (i = null),
      (
        o
          ? !l && !i
          : (!l && a.position === "static" && !!i && J2.has(i.position)) ||
          (Ys(s) && !l && Sw(e, s))
      )
        ? (r = r.filter((u) => u !== s))
        : (i = a),
      (s = Pr(s)));
  }
  return (t.set(e, r), r);
}
function nj(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const s = [
    ...(n === "clippingAncestors"
      ? uc(t)
        ? []
        : tj(t, this._c)
      : [].concat(n)),
    r,
  ],
    a = s[0],
    l = s.reduce(
      (c, u) => {
        const d = tg(t, u, i);
        return (
          (c.top = Ct(d.top, c.top)),
          (c.right = Tr(d.right, c.right)),
          (c.bottom = Tr(d.bottom, c.bottom)),
          (c.left = Ct(d.left, c.left)),
          c
        );
      },
      tg(t, a, i),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function rj(e) {
  const { width: t, height: n } = xw(e);
  return { width: t, height: n };
}
function ij(e, t, n) {
  const r = Pn(t),
    i = An(t),
    o = n === "fixed",
    s = fi(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = En(0);
  function c() {
    l.x = _p(i);
  }
  if (r || (!r && !o))
    if (((To(t) !== "body" || Ys(i)) && (a = dc(t)), r)) {
      const p = fi(t, !0, o, t);
      ((l.x = p.x + t.clientLeft), (l.y = p.y + t.clientTop));
    } else i && c();
  o && !r && i && c();
  const u = i && !r && !o ? bw(i, a) : En(0),
    d = s.left + a.scrollLeft - l.x - u.x,
    f = s.top + a.scrollTop - l.y - u.y;
  return { x: d, y: f, width: s.width, height: s.height };
}
function au(e) {
  return un(e).position === "static";
}
function ng(e, t) {
  if (!Pn(e) || un(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (An(e) === n && (n = n.ownerDocument.body), n);
}
function Cw(e, t) {
  const n = Tt(e);
  if (uc(e)) return n;
  if (!Pn(e)) {
    let i = Pr(e);
    for (; i && !go(i);) {
      if (cn(i) && !au(i)) return i;
      i = Pr(i);
    }
    return n;
  }
  let r = ng(e, t);
  for (; r && z2(r) && au(r);) r = ng(r, t);
  return r && go(r) && au(r) && !Op(r) ? n : r || H2(e) || n;
}
const oj = async function (e) {
  const t = this.getOffsetParent || Cw,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: ij(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function sj(e) {
  return un(e).direction === "rtl";
}
const aj = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Y2,
  getDocumentElement: An,
  getClippingRect: nj,
  getOffsetParent: Cw,
  getElementRects: oj,
  getClientRects: Q2,
  getDimensions: rj,
  getScale: Qi,
  isElement: cn,
  isRTL: sj,
};
function Ew(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function lj(e, t) {
  let n = null,
    r;
  const i = An(e);
  function o() {
    var a;
    (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
  }
  function s(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), o());
    const c = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = c;
    if ((a || t(), !f || !p)) return;
    const b = Ca(d),
      m = Ca(i.clientWidth - (u + f)),
      w = Ca(i.clientHeight - (d + p)),
      y = Ca(u),
      x = {
        rootMargin: -b + "px " + -m + "px " + -w + "px " + -y + "px",
        threshold: Ct(0, Tr(1, l)) || 1,
      };
    let S = !0;
    function C(k) {
      const E = k[0].intersectionRatio;
      if (E !== l) {
        if (!S) return s();
        E
          ? s(!1, E)
          : (r = setTimeout(() => {
            s(!1, 1e-7);
          }, 1e3));
      }
      (E === 1 && !Ew(c, e.getBoundingClientRect()) && s(), (S = !1));
    }
    try {
      n = new IntersectionObserver(C, { ...x, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, x);
    }
    n.observe(e);
  }
  return (s(!0), o);
}
function cj(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1,
  } = r,
    c = Lp(e),
    u = i || o ? [...(c ? Ns(c) : []), ...Ns(t)] : [];
  u.forEach((y) => {
    (i && y.addEventListener("scroll", n, { passive: !0 }),
      o && y.addEventListener("resize", n));
  });
  const d = c && a ? lj(c, n) : null;
  let f = -1,
    p = null;
  s &&
    ((p = new ResizeObserver((y) => {
      let [v] = y;
      (v &&
        v.target === c &&
        p &&
        (p.unobserve(t),
          cancelAnimationFrame(f),
          (f = requestAnimationFrame(() => {
            var x;
            (x = p) == null || x.observe(t);
          }))),
        n());
    })),
      c && !l && p.observe(c),
      p.observe(t));
  let b,
    m = l ? fi(e) : null;
  l && w();
  function w() {
    const y = fi(e);
    (m && !Ew(m, y) && n(), (m = y), (b = requestAnimationFrame(w)));
  }
  return (
    n(),
    () => {
      var y;
      (u.forEach((v) => {
        (i && v.removeEventListener("scroll", n),
          o && v.removeEventListener("resize", n));
      }),
        d == null || d(),
        (y = p) == null || y.disconnect(),
        (p = null),
        l && cancelAnimationFrame(b));
    }
  );
}
const uj = O2,
  dj = I2,
  fj = N2,
  pj = _2,
  mj = M2,
  rg = R2,
  hj = L2,
  gj = (e, t, n) => {
    const r = new Map(),
      i = { platform: aj, ...n },
      o = { ...i.platform, _c: r };
    return A2(e, t, { ...i, platform: o });
  };
var vj = typeof document < "u",
  yj = function () { },
  qa = vj ? g.useLayoutEffect : yj;
function jl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0;) if (!jl(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0;) {
      const o = i[r];
      if (!(o === "_owner" && e.$$typeof) && !jl(e[o], t[o])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function kw(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ig(e, t) {
  const n = kw(e);
  return Math.round(t * n) / n;
}
function lu(e) {
  const t = g.useRef(e);
  return (
    qa(() => {
      t.current = e;
    }),
    t
  );
}
function xj(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: i,
    elements: { reference: o, floating: s } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c,
  } = e,
    [u, d] = g.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, p] = g.useState(r);
  jl(f, r) || p(r);
  const [b, m] = g.useState(null),
    [w, y] = g.useState(null),
    v = g.useCallback((P) => {
      P !== k.current && ((k.current = P), m(P));
    }, []),
    x = g.useCallback((P) => {
      P !== E.current && ((E.current = P), y(P));
    }, []),
    S = o || b,
    C = s || w,
    k = g.useRef(null),
    E = g.useRef(null),
    T = g.useRef(u),
    R = l != null,
    N = lu(l),
    z = lu(i),
    I = lu(c),
    K = g.useCallback(() => {
      if (!k.current || !E.current) return;
      const P = { placement: t, strategy: n, middleware: f };
      (z.current && (P.platform = z.current),
        gj(k.current, E.current, P).then((j) => {
          const L = { ...j, isPositioned: I.current !== !1 };
          M.current &&
            !jl(T.current, L) &&
            ((T.current = L),
              vi.flushSync(() => {
                d(L);
              }));
        }));
    }, [f, t, n, z, I]);
  qa(() => {
    c === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), d((P) => ({ ...P, isPositioned: !1 })));
  }, [c]);
  const M = g.useRef(!1);
  (qa(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    [],
  ),
    qa(() => {
      if ((S && (k.current = S), C && (E.current = C), S && C)) {
        if (N.current) return N.current(S, C, K);
        K();
      }
    }, [S, C, K, N, R]));
  const W = g.useMemo(
    () => ({ reference: k, floating: E, setReference: v, setFloating: x }),
    [v, x],
  ),
    U = g.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    F = g.useMemo(() => {
      const P = { position: n, left: 0, top: 0 };
      if (!U.floating) return P;
      const j = ig(U.floating, u.x),
        L = ig(U.floating, u.y);
      return a
        ? {
          ...P,
          transform: "translate(" + j + "px, " + L + "px)",
          ...(kw(U.floating) >= 1.5 && { willChange: "transform" }),
        }
        : { position: n, left: j, top: L };
    }, [n, a, U.floating, u.x, u.y]);
  return g.useMemo(
    () => ({ ...u, update: K, refs: W, elements: U, floatingStyles: F }),
    [u, K, W, U, F],
  );
}
const wj = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const { element: r, padding: i } = typeof e == "function" ? e(n) : e;
      return r && t(r)
        ? r.current != null
          ? rg({ element: r.current, padding: i }).fn(n)
          : {}
        : r
          ? rg({ element: r, padding: i }).fn(n)
          : {};
    },
  };
},
  bj = (e, t) => ({ ...uj(e), options: [e, t] }),
  Sj = (e, t) => ({ ...dj(e), options: [e, t] }),
  Cj = (e, t) => ({ ...hj(e), options: [e, t] }),
  Ej = (e, t) => ({ ...fj(e), options: [e, t] }),
  kj = (e, t) => ({ ...pj(e), options: [e, t] }),
  Tj = (e, t) => ({ ...mj(e), options: [e, t] }),
  Pj = (e, t) => ({ ...wj(e), options: [e, t] });
var jj = "Arrow",
  Tw = g.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: i = 5, ...o } = e;
    return h.jsx(pe.svg, {
      ...o,
      ref: t,
      width: r,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : h.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Tw.displayName = jj;
var Aj = Tw;
function Rj(e) {
  const [t, n] = g.useState(void 0);
  return (
    Ye(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((i) => {
          if (!Array.isArray(i) || !i.length) return;
          const o = i[0];
          let s, a;
          if ("borderBoxSize" in o) {
            const l = o.borderBoxSize,
              c = Array.isArray(l) ? l[0] : l;
            ((s = c.inlineSize), (a = c.blockSize));
          } else ((s = e.offsetWidth), (a = e.offsetHeight));
          n({ width: s, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Fp = "Popper",
  [Pw, fc] = Gs(Fp),
  [Nj, jw] = Pw(Fp),
  Aw = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, i] = g.useState(null);
    return h.jsx(Nj, { scope: t, anchor: r, onAnchorChange: i, children: n });
  };
Aw.displayName = Fp;
var Rw = "PopperAnchor",
  Nw = g.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...i } = e,
      o = jw(Rw, n),
      s = g.useRef(null),
      a = Oe(t, s);
    return (
      g.useEffect(() => {
        o.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : h.jsx(pe.div, { ...i, ref: a })
    );
  });
Nw.displayName = Rw;
var Vp = "PopperContent",
  [Mj, Dj] = Pw(Vp),
  Mw = g.forwardRef((e, t) => {
    var _, le, ye, ie, te, ne;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: i = 0,
      align: o = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: b,
      ...m
    } = e,
      w = jw(Vp, n),
      [y, v] = g.useState(null),
      x = Oe(t, (Fe) => v(Fe)),
      [S, C] = g.useState(null),
      k = Rj(S),
      E = (k == null ? void 0 : k.width) ?? 0,
      T = (k == null ? void 0 : k.height) ?? 0,
      R = r + (o !== "center" ? "-" + o : ""),
      N =
        typeof u == "number"
          ? u
          : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      z = Array.isArray(c) ? c : [c],
      I = z.length > 0,
      K = { padding: N, boundary: z.filter(Ij), altBoundary: I },
      {
        refs: M,
        floatingStyles: W,
        placement: U,
        isPositioned: F,
        middlewareData: P,
      } = xj({
        strategy: "fixed",
        placement: R,
        whileElementsMounted: (...Fe) =>
          cj(...Fe, { animationFrame: p === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          bj({ mainAxis: i + T, alignmentAxis: s }),
          l &&
          Sj({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? Cj() : void 0,
            ...K,
          }),
          l && Ej({ ...K }),
          kj({
            ...K,
            apply: ({
              elements: Fe,
              rects: rt,
              availableWidth: dn,
              availableHeight: zt,
            }) => {
              const { width: pt, height: Rn } = rt.reference,
                Bt = Fe.floating.style;
              (Bt.setProperty("--radix-popper-available-width", `${dn}px`),
                Bt.setProperty("--radix-popper-available-height", `${zt}px`),
                Bt.setProperty("--radix-popper-anchor-width", `${pt}px`),
                Bt.setProperty("--radix-popper-anchor-height", `${Rn}px`));
            },
          }),
          S && Pj({ element: S, padding: a }),
          Lj({ arrowWidth: E, arrowHeight: T }),
          f && Tj({ strategy: "referenceHidden", ...K }),
        ],
      }),
      [j, L] = Iw(U),
      G = ln(b);
    Ye(() => {
      F && (G == null || G());
    }, [F, G]);
    const H = (_ = P.arrow) == null ? void 0 : _.x,
      X = (le = P.arrow) == null ? void 0 : le.y,
      q = ((ye = P.arrow) == null ? void 0 : ye.centerOffset) !== 0,
      [me, ue] = g.useState();
    return (
      Ye(() => {
        y && ue(window.getComputedStyle(y).zIndex);
      }, [y]),
      h.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: F ? W.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: me,
          "--radix-popper-transform-origin": [
            (ie = P.transformOrigin) == null ? void 0 : ie.x,
            (te = P.transformOrigin) == null ? void 0 : te.y,
          ].join(" "),
          ...(((ne = P.hide) == null ? void 0 : ne.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: h.jsx(Mj, {
          scope: n,
          placedSide: j,
          onArrowChange: C,
          arrowX: H,
          arrowY: X,
          shouldHideArrow: q,
          children: h.jsx(pe.div, {
            "data-side": j,
            "data-align": L,
            ...m,
            ref: x,
            style: { ...m.style, animation: F ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Mw.displayName = Vp;
var Dw = "PopperArrow",
  Oj = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Ow = g.forwardRef(function (t, n) {
    const { __scopePopper: r, ...i } = t,
      o = Dj(Dw, r),
      s = Oj[o.placedSide];
    return h.jsx("span", {
      ref: o.onArrowChange,
      style: {
        position: "absolute",
        left: o.arrowX,
        top: o.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[o.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[o.placedSide],
        visibility: o.shouldHideArrow ? "hidden" : void 0,
      },
      children: h.jsx(Aj, {
        ...i,
        ref: n,
        style: { ...i.style, display: "block" },
      }),
    });
  });
Ow.displayName = Dw;
function Ij(e) {
  return e !== null;
}
var Lj = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, y, v;
    const { placement: n, rects: r, middlewareData: i } = t,
      s = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [c, u] = Iw(n),
      d = { start: "0%", center: "50%", end: "100%" }[u],
      f = (((y = i.arrow) == null ? void 0 : y.x) ?? 0) + a / 2,
      p = (((v = i.arrow) == null ? void 0 : v.y) ?? 0) + l / 2;
    let b = "",
      m = "";
    return (
      c === "bottom"
        ? ((b = s ? d : `${f}px`), (m = `${-l}px`))
        : c === "top"
          ? ((b = s ? d : `${f}px`), (m = `${r.floating.height + l}px`))
          : c === "right"
            ? ((b = `${-l}px`), (m = s ? d : `${p}px`))
            : c === "left" &&
            ((b = `${r.floating.width + l}px`), (m = s ? d : `${p}px`)),
      { data: { x: b, y: m } }
    );
  },
});
function Iw(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var _j = Aw,
  Lw = Nw,
  _w = Mw,
  Fw = Ow,
  [pc, B3] = Gs("Tooltip", [fc]),
  zp = fc(),
  Vw = "TooltipProvider",
  Fj = 700,
  og = "tooltip.open",
  [Vj, zw] = pc(Vw),
  Bw = (e) => {
    const {
      __scopeTooltip: t,
      delayDuration: n = Fj,
      skipDelayDuration: r = 300,
      disableHoverableContent: i = !1,
      children: o,
    } = e,
      s = g.useRef(!0),
      a = g.useRef(!1),
      l = g.useRef(0);
    return (
      g.useEffect(() => {
        const c = l.current;
        return () => window.clearTimeout(c);
      }, []),
      h.jsx(Vj, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: g.useCallback(() => {
          (window.clearTimeout(l.current), (s.current = !1));
        }, []),
        onClose: g.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (s.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: g.useCallback((c) => {
          a.current = c;
        }, []),
        disableHoverableContent: i,
        children: o,
      })
    );
  };
Bw.displayName = Vw;
var $w = "Tooltip",
  [$3, mc] = pc($w),
  Vd = "TooltipTrigger",
  zj = g.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      i = mc(Vd, n),
      o = zw(Vd, n),
      s = zp(n),
      a = g.useRef(null),
      l = Oe(t, a, i.onTriggerChange),
      c = g.useRef(!1),
      u = g.useRef(!1),
      d = g.useCallback(() => (c.current = !1), []);
    return (
      g.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d],
      ),
      h.jsx(Lw, {
        asChild: !0,
        ...s,
        children: h.jsx(pe.button, {
          "aria-describedby": i.open ? i.contentId : void 0,
          "data-state": i.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: oe(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !u.current &&
              !o.isPointerInTransitRef.current &&
              (i.onTriggerEnter(), (u.current = !0));
          }),
          onPointerLeave: oe(e.onPointerLeave, () => {
            (i.onTriggerLeave(), (u.current = !1));
          }),
          onPointerDown: oe(e.onPointerDown, () => {
            (i.open && i.onClose(),
              (c.current = !0),
              document.addEventListener("pointerup", d, { once: !0 }));
          }),
          onFocus: oe(e.onFocus, () => {
            c.current || i.onOpen();
          }),
          onBlur: oe(e.onBlur, i.onClose),
          onClick: oe(e.onClick, i.onClose),
        }),
      })
    );
  });
zj.displayName = Vd;
var Bj = "TooltipPortal",
  [U3, $j] = pc(Bj, { forceMount: void 0 }),
  vo = "TooltipContent",
  Uw = g.forwardRef((e, t) => {
    const n = $j(vo, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: i = "top", ...o } = e,
      s = mc(vo, e.__scopeTooltip);
    return h.jsx(Cp, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? h.jsx(Ww, { side: i, ...o, ref: t })
        : h.jsx(Uj, { side: i, ...o, ref: t }),
    });
  }),
  Uj = g.forwardRef((e, t) => {
    const n = mc(vo, e.__scopeTooltip),
      r = zw(vo, e.__scopeTooltip),
      i = g.useRef(null),
      o = Oe(t, i),
      [s, a] = g.useState(null),
      { trigger: l, onClose: c } = n,
      u = i.current,
      { onPointerInTransitChange: d } = r,
      f = g.useCallback(() => {
        (a(null), d(!1));
      }, [d]),
      p = g.useCallback(
        (b, m) => {
          const w = b.currentTarget,
            y = { x: b.clientX, y: b.clientY },
            v = qj(y, w.getBoundingClientRect()),
            x = Yj(y, v),
            S = Qj(m.getBoundingClientRect()),
            C = Zj([...x, ...S]);
          (a(C), d(!0));
        },
        [d],
      );
    return (
      g.useEffect(() => () => f(), [f]),
      g.useEffect(() => {
        if (l && u) {
          const b = (w) => p(w, u),
            m = (w) => p(w, l);
          return (
            l.addEventListener("pointerleave", b),
            u.addEventListener("pointerleave", m),
            () => {
              (l.removeEventListener("pointerleave", b),
                u.removeEventListener("pointerleave", m));
            }
          );
        }
      }, [l, u, p, f]),
      g.useEffect(() => {
        if (s) {
          const b = (m) => {
            const w = m.target,
              y = { x: m.clientX, y: m.clientY },
              v =
                (l == null ? void 0 : l.contains(w)) ||
                (u == null ? void 0 : u.contains(w)),
              x = !Xj(y, s);
            v ? f() : x && (f(), c());
          };
          return (
            document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
          );
        }
      }, [l, u, s, c, f]),
      h.jsx(Ww, { ...e, ref: o })
    );
  }),
  [Wj, Hj] = pc($w, { isInside: !1 }),
  Kj = Wk("TooltipContent"),
  Ww = g.forwardRef((e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": i,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      ...a
    } = e,
      l = mc(vo, n),
      c = zp(n),
      { onClose: u } = l;
    return (
      g.useEffect(
        () => (
          document.addEventListener(og, u),
          () => document.removeEventListener(og, u)
        ),
        [u],
      ),
      g.useEffect(() => {
        if (l.trigger) {
          const d = (f) => {
            const p = f.target;
            p != null && p.contains(l.trigger) && u();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [l.trigger, u]),
      h.jsx(oc, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: h.jsxs(_w, {
          "data-state": l.stateAttribute,
          ...c,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            h.jsx(Kj, { children: r }),
            h.jsx(Wj, {
              scope: n,
              isInside: !0,
              children: h.jsx(fT, {
                id: l.contentId,
                role: "tooltip",
                children: i || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Uw.displayName = vo;
var Hw = "TooltipArrow",
  Gj = g.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      i = zp(n);
    return Hj(Hw, n).isInside ? null : h.jsx(Fw, { ...i, ...r, ref: t });
  });
Gj.displayName = Hw;
function qj(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    o = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, o)) {
    case o:
      return "left";
    case i:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Yj(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Qj(e) {
  const { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
function Xj(e, t) {
  const { x: n, y: r } = e;
  let i = !1;
  for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
    const a = t[o],
      l = t[s],
      c = a.x,
      u = a.y,
      d = l.x,
      f = l.y;
    u > r != f > r && n < ((d - c) * (r - u)) / (f - u) + c && (i = !i);
  }
  return i;
}
function Zj(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    Jj(t)
  );
}
function Jj(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    for (; t.length >= 2;) {
      const o = t[t.length - 1],
        s = t[t.length - 2];
      if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    for (; n.length >= 2;) {
      const o = n[n.length - 1],
        s = n[n.length - 2];
      if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) n.pop();
      else break;
    }
    n.push(i);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var eA = Bw,
  Kw = Uw;
const tA = eA,
  nA = g.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    h.jsx(Kw, {
      ref: r,
      sideOffset: t,
      className: $e(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  );
nA.displayName = Kw.displayName;
var hc = class {
  constructor() {
    ((this.listeners = new Set()),
      (this.subscribe = this.subscribe.bind(this)));
  }
  subscribe(e) {
    return (
      this.listeners.add(e),
      this.onSubscribe(),
      () => {
        (this.listeners.delete(e), this.onUnsubscribe());
      }
    );
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() { }
  onUnsubscribe() { }
},
  gc = typeof window > "u" || "Deno" in globalThis;
function Jt() { }
function rA(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function iA(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function oA(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function zd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function sA(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function sg(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: o,
    queryKey: s,
    stale: a,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== Bp(s, t.options)) return !1;
    } else if (!Ds(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (i && i !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function ag(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Ms(t.options.mutationKey) !== Ms(o)) return !1;
    } else if (!Ds(t.options.mutationKey, o)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Bp(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Ms)(e);
}
function Ms(e) {
  return JSON.stringify(e, (t, n) =>
    Bd(n)
      ? Object.keys(n)
        .sort()
        .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n,
  );
}
function Ds(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => Ds(e[n], t[n]))
        : !1;
}
function Gw(e, t) {
  if (e === t) return e;
  const n = lg(e) && lg(t);
  if (n || (Bd(e) && Bd(t))) {
    const r = n ? e : Object.keys(e),
      i = r.length,
      o = n ? t : Object.keys(t),
      s = o.length,
      a = n ? [] : {},
      l = new Set(r);
    let c = 0;
    for (let u = 0; u < s; u++) {
      const d = n ? u : o[u];
      ((!n && l.has(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), c++)
        : ((a[d] = Gw(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && c++);
    }
    return i === s && c === i ? e : a;
  }
  return t;
}
function lg(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Bd(e) {
  if (!cg(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !cg(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function cg(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function aA(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function lA(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? Gw(e, t)
      : t;
}
function cA(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function uA(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var $p = Symbol();
function qw(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === $p
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Xr,
  ar,
  eo,
  oy,
  dA =
    ((oy = class extends hc {
      constructor() {
        super();
        ce(this, Xr);
        ce(this, ar);
        ce(this, eo);
        J(this, eo, (t) => {
          if (!gc && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        A(this, ar) || this.setEventListener(A(this, eo));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = A(this, ar)) == null || t.call(this), J(this, ar, void 0));
      }
      setEventListener(t) {
        var n;
        (J(this, eo, t),
          (n = A(this, ar)) == null || n.call(this),
          J(
            this,
            ar,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        A(this, Xr) !== t && (J(this, Xr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof A(this, Xr) == "boolean"
          ? A(this, Xr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
          "hidden";
      }
    }),
      (Xr = new WeakMap()),
      (ar = new WeakMap()),
      (eo = new WeakMap()),
      oy),
  Yw = new dA(),
  to,
  lr,
  no,
  sy,
  fA =
    ((sy = class extends hc {
      constructor() {
        super();
        ce(this, to, !0);
        ce(this, lr);
        ce(this, no);
        J(this, no, (t) => {
          if (!gc && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        A(this, lr) || this.setEventListener(A(this, no));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = A(this, lr)) == null || t.call(this), J(this, lr, void 0));
      }
      setEventListener(t) {
        var n;
        (J(this, no, t),
          (n = A(this, lr)) == null || n.call(this),
          J(this, lr, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        A(this, to) !== t &&
          (J(this, to, t),
            this.listeners.forEach((r) => {
              r(t);
            }));
      }
      isOnline() {
        return A(this, to);
      }
    }),
      (to = new WeakMap()),
      (lr = new WeakMap()),
      (no = new WeakMap()),
      sy),
  Al = new fA();
function pA() {
  let e, t;
  const n = new Promise((i, o) => {
    ((e = i), (t = o));
  });
  ((n.status = "pending"), n.catch(() => { }));
  function r(i) {
    (Object.assign(n, i), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (i) => {
      (r({ status: "fulfilled", value: i }), e(i));
    }),
    (n.reject = (i) => {
      (r({ status: "rejected", reason: i }), t(i));
    }),
    n
  );
}
function mA(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Qw(e) {
  return (e ?? "online") === "online" ? Al.isOnline() : !0;
}
var Xw = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function cu(e) {
  return e instanceof Xw;
}
function Zw(e) {
  let t = !1,
    n = 0,
    r = !1,
    i;
  const o = pA(),
    s = (m) => {
      var w;
      r || (f(new Xw(m)), (w = e.abort) == null || w.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    c = () =>
      Yw.isFocused() &&
      (e.networkMode === "always" || Al.isOnline()) &&
      e.canRun(),
    u = () => Qw(e.networkMode) && e.canRun(),
    d = (m) => {
      var w;
      r ||
        ((r = !0),
          (w = e.onSuccess) == null || w.call(e, m),
          i == null || i(),
          o.resolve(m));
    },
    f = (m) => {
      var w;
      r ||
        ((r = !0),
          (w = e.onError) == null || w.call(e, m),
          i == null || i(),
          o.reject(m));
    },
    p = () =>
      new Promise((m) => {
        var w;
        ((i = (y) => {
          (r || c()) && m(y);
        }),
          (w = e.onPause) == null || w.call(e));
      }).then(() => {
        var m;
        ((i = void 0), r || (m = e.onContinue) == null || m.call(e));
      }),
    b = () => {
      if (r) return;
      let m;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        m = w ?? e.fn();
      } catch (y) {
        m = Promise.reject(y);
      }
      Promise.resolve(m)
        .then(d)
        .catch((y) => {
          var k;
          if (r) return;
          const v = e.retry ?? (gc ? 0 : 3),
            x = e.retryDelay ?? mA,
            S = typeof x == "function" ? x(n, y) : x,
            C =
              v === !0 ||
              (typeof v == "number" && n < v) ||
              (typeof v == "function" && v(n, y));
          if (t || !C) {
            f(y);
            return;
          }
          (n++,
            (k = e.onFail) == null || k.call(e, n, y),
            aA(S)
              .then(() => (c() ? void 0 : p()))
              .then(() => {
                t ? f(y) : b();
              }));
        });
    };
  return {
    promise: o,
    cancel: s,
    continue: () => (i == null || i(), o),
    cancelRetry: a,
    continueRetry: l,
    canStart: u,
    start: () => (u() ? b() : p().then(b), o),
  };
}
var hA = (e) => setTimeout(e, 0);
function gA() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    i = hA;
  const o = (a) => {
    t
      ? e.push(a)
      : i(() => {
        n(a);
      });
  },
    s = () => {
      const a = e;
      ((e = []),
        a.length &&
        i(() => {
          r(() => {
            a.forEach((l) => {
              n(l);
            });
          });
        }));
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        (t--, t || s());
      }
      return l;
    },
    batchCalls:
      (a) =>
        (...l) => {
          o(() => {
            a(...l);
          });
        },
    schedule: o,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      i = a;
    },
  };
}
var at = gA(),
  Zr,
  ay,
  Jw =
    ((ay = class {
      constructor() {
        ce(this, Zr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          iA(this.gcTime) &&
          J(
            this,
            Zr,
            setTimeout(() => {
              this.optionalRemove();
            }, this.gcTime),
          ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (gc ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        A(this, Zr) && (clearTimeout(A(this, Zr)), J(this, Zr, void 0));
      }
    }),
      (Zr = new WeakMap()),
      ay),
  ro,
  Jr,
  Nt,
  ei,
  Je,
  zs,
  ti,
  en,
  Dn,
  ly,
  vA =
    ((ly = class extends Jw {
      constructor(t) {
        super();
        ce(this, en);
        ce(this, ro);
        ce(this, Jr);
        ce(this, Nt);
        ce(this, ei);
        ce(this, Je);
        ce(this, zs);
        ce(this, ti);
        (J(this, ti, !1),
          J(this, zs, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          J(this, ei, t.client),
          J(this, Nt, A(this, ei).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          J(this, ro, xA(this.options)),
          (this.state = t.state ?? A(this, ro)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = A(this, Je)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...A(this, zs), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          A(this, Nt).remove(this);
      }
      setData(t, n) {
        const r = lA(this.state.data, t, this.options);
        return (
          Qe(this, en, Dn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Qe(this, en, Dn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, i;
        const n = (r = A(this, Je)) == null ? void 0 : r.promise;
        return (
          (i = A(this, Je)) == null || i.cancel(t),
          n ? n.then(Jt).catch(Jt) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(A(this, ro)));
      }
      isActive() {
        return this.observers.some((t) => sA(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === $p ||
          this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
            (t) => zd(t.options.staleTime, this) === "static",
          )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !oA(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = A(this, Je)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = A(this, Je)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
            this.clearGcTimeout(),
            A(this, Nt).notify({
              type: "observerAdded",
              query: this,
              observer: t,
            }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
            this.observers.length ||
            (A(this, Je) &&
              (A(this, ti)
                ? A(this, Je).cancel({ revert: !0 })
                : A(this, Je).cancelRetry()),
              this.scheduleGc()),
            A(this, Nt).notify({
              type: "observerRemoved",
              query: this,
              observer: t,
            }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Qe(this, en, Dn).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var c, u, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (A(this, Je))
            return (A(this, Je).continueRetry(), A(this, Je).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((p) => p.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          i = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (J(this, ti, !0), r.signal),
            });
          },
          o = () => {
            const f = qw(this.options, n),
              b = (() => {
                const m = {
                  client: A(this, ei),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (i(m), m);
              })();
            return (
              J(this, ti, !1),
              this.options.persister ? this.options.persister(f, b, this) : f(b)
            );
          },
          a = (() => {
            const f = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: A(this, ei),
              state: this.state,
              fetchFn: o,
            };
            return (i(f), f);
          })();
        ((c = this.options.behavior) == null || c.onFetch(a, this),
          J(this, Jr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
            ((u = a.fetchOptions) == null ? void 0 : u.meta)) &&
          Qe(this, en, Dn).call(this, {
            type: "fetch",
            meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
          }));
        const l = (f) => {
          var p, b, m, w;
          ((cu(f) && f.silent) ||
            Qe(this, en, Dn).call(this, { type: "error", error: f }),
            cu(f) ||
            ((b = (p = A(this, Nt).config).onError) == null ||
              b.call(p, f, this),
              (w = (m = A(this, Nt).config).onSettled) == null ||
              w.call(m, this.state.data, f, this)),
            this.scheduleGc());
        };
        return (
          J(
            this,
            Je,
            Zw({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var p, b, m, w;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (y) {
                  l(y);
                  return;
                }
                ((b = (p = A(this, Nt).config).onSuccess) == null ||
                  b.call(p, f, this),
                  (w = (m = A(this, Nt).config).onSettled) == null ||
                  w.call(m, f, this.state.error, this),
                  this.scheduleGc());
              },
              onError: l,
              onFail: (f, p) => {
                Qe(this, en, Dn).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: p,
                });
              },
              onPause: () => {
                Qe(this, en, Dn).call(this, { type: "pause" });
              },
              onContinue: () => {
                Qe(this, en, Dn).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          A(this, Je).start()
        );
      }
    }),
      (ro = new WeakMap()),
      (Jr = new WeakMap()),
      (Nt = new WeakMap()),
      (ei = new WeakMap()),
      (Je = new WeakMap()),
      (zs = new WeakMap()),
      (ti = new WeakMap()),
      (en = new WeakSet()),
      (Dn = function (t) {
        const n = (r) => {
          switch (t.type) {
            case "failed":
              return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error,
              };
            case "pause":
              return { ...r, fetchStatus: "paused" };
            case "continue":
              return { ...r, fetchStatus: "fetching" };
            case "fetch":
              return {
                ...r,
                ...yA(r.data, this.options),
                fetchMeta: t.meta ?? null,
              };
            case "success":
              return (
                J(this, Jr, void 0),
                {
                  ...r,
                  data: t.data,
                  dataUpdateCount: r.dataUpdateCount + 1,
                  dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: "success",
                  ...(!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                }
              );
            case "error":
              const i = t.error;
              return cu(i) && i.revert && A(this, Jr)
                ? { ...A(this, Jr), fetchStatus: "idle" }
                : {
                  ...r,
                  error: i,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
            case "invalidate":
              return { ...r, isInvalidated: !0 };
            case "setState":
              return { ...r, ...t.state };
          }
        };
        ((this.state = n(this.state)),
          at.batch(() => {
            (this.observers.forEach((r) => {
              r.onQueryUpdate();
            }),
              A(this, Nt).notify({ query: this, type: "updated", action: t }));
          }));
      }),
      ly);
function yA(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Qw(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function xA(e) {
  const t =
    typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var gn,
  cy,
  wA =
    ((cy = class extends hc {
      constructor(t = {}) {
        super();
        ce(this, gn);
        ((this.config = t), J(this, gn, new Map()));
      }
      build(t, n, r) {
        const i = n.queryKey,
          o = n.queryHash ?? Bp(i, n);
        let s = this.get(o);
        return (
          s ||
          ((s = new vA({
            client: t,
            queryKey: i,
            queryHash: o,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(i),
          })),
            this.add(s)),
          s
        );
      }
      add(t) {
        A(this, gn).has(t.queryHash) ||
          (A(this, gn).set(t.queryHash, t),
            this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = A(this, gn).get(t.queryHash);
        n &&
          (t.destroy(),
            n === t && A(this, gn).delete(t.queryHash),
            this.notify({ type: "removed", query: t }));
      }
      clear() {
        at.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return A(this, gn).get(t);
      }
      getAll() {
        return [...A(this, gn).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => sg(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => sg(t, r)) : n;
      }
      notify(t) {
        at.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        at.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        at.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
      (gn = new WeakMap()),
      cy),
  vn,
  ot,
  ni,
  yn,
  er,
  uy,
  bA =
    ((uy = class extends Jw {
      constructor(t) {
        super();
        ce(this, yn);
        ce(this, vn);
        ce(this, ot);
        ce(this, ni);
        ((this.mutationId = t.mutationId),
          J(this, ot, t.mutationCache),
          J(this, vn, []),
          (this.state = t.state || SA()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        A(this, vn).includes(t) ||
          (A(this, vn).push(t),
            this.clearGcTimeout(),
            A(this, ot).notify({
              type: "observerAdded",
              mutation: this,
              observer: t,
            }));
      }
      removeObserver(t) {
        (J(
          this,
          vn,
          A(this, vn).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          A(this, ot).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        A(this, vn).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : A(this, ot).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = A(this, ni)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, s, a, l, c, u, d, f, p, b, m, w, y, v, x, S, C, k, E, T;
        const n = () => {
          Qe(this, yn, er).call(this, { type: "continue" });
        };
        J(
          this,
          ni,
          Zw({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (R, N) => {
              Qe(this, yn, er).call(this, {
                type: "failed",
                failureCount: R,
                error: N,
              });
            },
            onPause: () => {
              Qe(this, yn, er).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => A(this, ot).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          i = !A(this, ni).canStart();
        try {
          if (r) n();
          else {
            (Qe(this, yn, er).call(this, {
              type: "pending",
              variables: t,
              isPaused: i,
            }),
              await ((s = (o = A(this, ot).config).onMutate) == null
                ? void 0
                : s.call(o, t, this)));
            const N = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            N !== this.state.context &&
              Qe(this, yn, er).call(this, {
                type: "pending",
                context: N,
                variables: t,
                isPaused: i,
              });
          }
          const R = await A(this, ni).start();
          return (
            await ((u = (c = A(this, ot).config).onSuccess) == null
              ? void 0
              : u.call(c, R, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, R, t, this.state.context)),
            await ((b = (p = A(this, ot).config).onSettled) == null
              ? void 0
              : b.call(
                p,
                R,
                null,
                this.state.variables,
                this.state.context,
                this,
              )),
            await ((w = (m = this.options).onSettled) == null
              ? void 0
              : w.call(m, R, null, t, this.state.context)),
            Qe(this, yn, er).call(this, { type: "success", data: R }),
            R
          );
        } catch (R) {
          try {
            throw (
              await ((v = (y = A(this, ot).config).onError) == null
                ? void 0
                : v.call(y, R, t, this.state.context, this)),
              await ((S = (x = this.options).onError) == null
                ? void 0
                : S.call(x, R, t, this.state.context)),
              await ((k = (C = A(this, ot).config).onSettled) == null
                ? void 0
                : k.call(
                  C,
                  void 0,
                  R,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
              await ((T = (E = this.options).onSettled) == null
                ? void 0
                : T.call(E, void 0, R, t, this.state.context)),
              R
            );
          } finally {
            Qe(this, yn, er).call(this, { type: "error", error: R });
          }
        } finally {
          A(this, ot).runNext(this);
        }
      }
    }),
      (vn = new WeakMap()),
      (ot = new WeakMap()),
      (ni = new WeakMap()),
      (yn = new WeakSet()),
      (er = function (t) {
        const n = (r) => {
          switch (t.type) {
            case "failed":
              return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error,
              };
            case "pause":
              return { ...r, isPaused: !0 };
            case "continue":
              return { ...r, isPaused: !1 };
            case "pending":
              return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now(),
              };
            case "success":
              return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1,
              };
            case "error":
              return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error",
              };
          }
        };
        ((this.state = n(this.state)),
          at.batch(() => {
            (A(this, vn).forEach((r) => {
              r.onMutationUpdate(t);
            }),
              A(this, ot).notify({ mutation: this, type: "updated", action: t }));
          }));
      }),
      uy);
function SA() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Ln,
  tn,
  Bs,
  dy,
  CA =
    ((dy = class extends hc {
      constructor(t = {}) {
        super();
        ce(this, Ln);
        ce(this, tn);
        ce(this, Bs);
        ((this.config = t),
          J(this, Ln, new Set()),
          J(this, tn, new Map()),
          J(this, Bs, 0));
      }
      build(t, n, r) {
        const i = new bA({
          mutationCache: this,
          mutationId: ++na(this, Bs)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(i), i);
      }
      add(t) {
        A(this, Ln).add(t);
        const n = Ea(t);
        if (typeof n == "string") {
          const r = A(this, tn).get(n);
          r ? r.push(t) : A(this, tn).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (A(this, Ln).delete(t)) {
          const n = Ea(t);
          if (typeof n == "string") {
            const r = A(this, tn).get(n);
            if (r)
              if (r.length > 1) {
                const i = r.indexOf(t);
                i !== -1 && r.splice(i, 1);
              } else r[0] === t && A(this, tn).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Ea(t);
        if (typeof n == "string") {
          const r = A(this, tn).get(n),
            i =
              r == null ? void 0 : r.find((o) => o.state.status === "pending");
          return !i || i === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Ea(t);
        if (typeof n == "string") {
          const i =
            (r = A(this, tn).get(n)) == null
              ? void 0
              : r.find((o) => o !== t && o.state.isPaused);
          return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        at.batch(() => {
          (A(this, Ln).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            A(this, Ln).clear(),
            A(this, tn).clear());
        });
      }
      getAll() {
        return Array.from(A(this, Ln));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => ag(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => ag(t, n));
      }
      notify(t) {
        at.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return at.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Jt))),
        );
      }
    }),
      (Ln = new WeakMap()),
      (tn = new WeakMap()),
      (Bs = new WeakMap()),
      dy);
function Ea(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function ug(e) {
  return {
    onFetch: (t, n) => {
      var u, d, f, p, b;
      const r = t.options,
        i =
          (f =
            (d = (u = t.fetchOptions) == null ? void 0 : u.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : f.direction,
        o = ((p = t.state.data) == null ? void 0 : p.pages) || [],
        s = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const c = async () => {
        let m = !1;
        const w = (x) => {
          Object.defineProperty(x, "signal", {
            enumerable: !0,
            get: () => (
              t.signal.aborted
                ? (m = !0)
                : t.signal.addEventListener("abort", () => {
                  m = !0;
                }),
              t.signal
            ),
          });
        },
          y = qw(t.options, t.fetchOptions),
          v = async (x, S, C) => {
            if (m) return Promise.reject();
            if (S == null && x.pages.length) return Promise.resolve(x);
            const E = (() => {
              const z = {
                client: t.client,
                queryKey: t.queryKey,
                pageParam: S,
                direction: C ? "backward" : "forward",
                meta: t.options.meta,
              };
              return (w(z), z);
            })(),
              T = await y(E),
              { maxPages: R } = t.options,
              N = C ? uA : cA;
            return {
              pages: N(x.pages, T, R),
              pageParams: N(x.pageParams, S, R),
            };
          };
        if (i && o.length) {
          const x = i === "backward",
            S = x ? EA : dg,
            C = { pages: o, pageParams: s },
            k = S(r, C);
          a = await v(C, k, x);
        } else {
          const x = e ?? o.length;
          do {
            const S = l === 0 ? (s[0] ?? r.initialPageParam) : dg(r, a);
            if (l > 0 && S == null) break;
            ((a = await v(a, S)), l++);
          } while (l < x);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
          var m, w;
          return (w = (m = t.options).persister) == null
            ? void 0
            : w.call(
              m,
              c,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            );
        })
        : (t.fetchFn = c);
    },
  };
}
function dg(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function EA(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var Me,
  cr,
  ur,
  io,
  oo,
  dr,
  so,
  ao,
  fy,
  kA =
    ((fy = class {
      constructor(e = {}) {
        ce(this, Me);
        ce(this, cr);
        ce(this, ur);
        ce(this, io);
        ce(this, oo);
        ce(this, dr);
        ce(this, so);
        ce(this, ao);
        (J(this, Me, e.queryCache || new wA()),
          J(this, cr, e.mutationCache || new CA()),
          J(this, ur, e.defaultOptions || {}),
          J(this, io, new Map()),
          J(this, oo, new Map()),
          J(this, dr, 0));
      }
      mount() {
        (na(this, dr)._++,
          A(this, dr) === 1 &&
          (J(
            this,
            so,
            Yw.subscribe(async (e) => {
              e &&
                (await this.resumePausedMutations(), A(this, Me).onFocus());
            }),
          ),
            J(
              this,
              ao,
              Al.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), A(this, Me).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (na(this, dr)._--,
          A(this, dr) === 0 &&
          ((e = A(this, so)) == null || e.call(this),
            J(this, so, void 0),
            (t = A(this, ao)) == null || t.call(this),
            J(this, ao, void 0)));
      }
      isFetching(e) {
        return A(this, Me).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return A(this, cr).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = A(this, Me).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = A(this, Me).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
            n.isStaleByTime(zd(t.staleTime, n)) &&
            this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return A(this, Me)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          i = A(this, Me).get(r.queryHash),
          o = i == null ? void 0 : i.state.data,
          s = rA(t, o);
        if (s !== void 0)
          return A(this, Me)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return at.batch(() =>
          A(this, Me)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = A(this, Me).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = A(this, Me);
        at.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = A(this, Me);
        return at.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = at.batch(() =>
            A(this, Me)
              .findAll(e)
              .map((i) => i.cancel(n)),
          );
        return Promise.all(r).then(Jt).catch(Jt);
      }
      invalidateQueries(e, t = {}) {
        return at.batch(
          () => (
            A(this, Me)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                {
                  ...e,
                  type:
                    (e == null ? void 0 : e.refetchType) ??
                    (e == null ? void 0 : e.type) ??
                    "active",
                },
                t,
              )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = at.batch(() =>
            A(this, Me)
              .findAll(e)
              .filter((i) => !i.isDisabled() && !i.isStatic())
              .map((i) => {
                let o = i.fetch(void 0, n);
                return (
                  n.throwOnError || (o = o.catch(Jt)),
                  i.state.fetchStatus === "paused" ? Promise.resolve() : o
                );
              }),
          );
        return Promise.all(r).then(Jt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = A(this, Me).build(this, t);
        return n.isStaleByTime(zd(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Jt).catch(Jt);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = ug(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Jt).catch(Jt);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = ug(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Al.isOnline()
          ? A(this, cr).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return A(this, Me);
      }
      getMutationCache() {
        return A(this, cr);
      }
      getDefaultOptions() {
        return A(this, ur);
      }
      setDefaultOptions(e) {
        J(this, ur, e);
      }
      setQueryDefaults(e, t) {
        A(this, io).set(Ms(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...A(this, io).values()],
          n = {};
        return (
          t.forEach((r) => {
            Ds(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        A(this, oo).set(Ms(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...A(this, oo).values()],
          n = {};
        return (
          t.forEach((r) => {
            Ds(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...A(this, ur).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Bp(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === $p && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
            ...A(this, ur).mutations,
            ...((e == null ? void 0 : e.mutationKey) &&
              this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
      }
      clear() {
        (A(this, Me).clear(), A(this, cr).clear());
      }
    }),
      (Me = new WeakMap()),
      (cr = new WeakMap()),
      (ur = new WeakMap()),
      (io = new WeakMap()),
      (oo = new WeakMap()),
      (dr = new WeakMap()),
      (so = new WeakMap()),
      (ao = new WeakMap()),
      fy),
  TA = g.createContext(void 0),
  PA = ({ client: e, children: t }) => (
    g.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    h.jsx(TA.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Rl() {
  return (
    (Rl = Object.assign
      ? Object.assign.bind()
      : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Rl.apply(this, arguments)
  );
}
var mr;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(mr || (mr = {}));
const fg = "popstate";
function jA(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return $d(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : t1(i);
  }
  return RA(t, n, null, e);
}
function bt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function e1(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch { }
  }
}
function AA() {
  return Math.random().toString(36).substr(2, 8);
}
function pg(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function $d(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Rl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? vc(t) : t,
      { state: n, key: (t && t.key) || r || AA() },
    )
  );
}
function t1(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function vc(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function RA(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = mr.Pop,
    l = null,
    c = u();
  c == null && ((c = 0), s.replaceState(Rl({}, s.state, { idx: c }), ""));
  function u() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = mr.Pop;
    let w = u(),
      y = w == null ? null : w - c;
    ((c = w), l && l({ action: a, location: m.location, delta: y }));
  }
  function f(w, y) {
    a = mr.Push;
    let v = $d(m.location, w, y);
    c = u() + 1;
    let x = pg(v, c),
      S = m.createHref(v);
    try {
      s.pushState(x, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(S);
    }
    o && l && l({ action: a, location: m.location, delta: 1 });
  }
  function p(w, y) {
    a = mr.Replace;
    let v = $d(m.location, w, y);
    c = u();
    let x = pg(v, c),
      S = m.createHref(v);
    (s.replaceState(x, "", S),
      o && l && l({ action: a, location: m.location, delta: 0 }));
  }
  function b(w) {
    let y = i.location.origin !== "null" ? i.location.origin : i.location.href,
      v = typeof w == "string" ? w : t1(w);
    return (
      (v = v.replace(/ $/, "%20")),
      bt(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
        v,
      ),
      new URL(v, y)
    );
  }
  let m = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(fg, d),
        (l = w),
        () => {
          (i.removeEventListener(fg, d), (l = null));
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: b,
    encodeLocation(w) {
      let y = b(w);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: f,
    replace: p,
    go(w) {
      return s.go(w);
    },
  };
  return m;
}
var mg;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(mg || (mg = {}));
function NA(e, t, n) {
  return (n === void 0 && (n = "/"), MA(e, t, n, !1));
}
function MA(e, t, n, r) {
  let i = typeof t == "string" ? vc(t) : t,
    o = i1(i.pathname || "/", n);
  if (o == null) return null;
  let s = n1(e);
  DA(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let c = WA(o);
    a = $A(s[l], c, r);
  }
  return a;
}
function n1(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (bt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
        l.relativePath +
        '" nested under path ' +
        ('"' + r + '" is not valid. An absolute child route path ') +
        "must start with the combined path of all its parent routes.",
      ),
        (l.relativePath = l.relativePath.slice(r.length)));
    let c = Xi([r, l.relativePath]),
      u = n.concat(l);
    (o.children &&
      o.children.length > 0 &&
      (bt(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
        ('all child routes from route path "' + c + '".'),
      ),
        n1(o.children, t, u, c)),
      !(o.path == null && !o.index) &&
      t.push({ path: c, score: zA(c, o.index), routesMeta: u }));
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of r1(o.path)) i(o, s, l);
    }),
    t
  );
}
function r1(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = r1(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function DA(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : BA(
        t.routesMeta.map((r) => r.childrenIndex),
        n.routesMeta.map((r) => r.childrenIndex),
      ),
  );
}
const OA = /^:[\w-]+$/,
  IA = 3,
  LA = 2,
  _A = 1,
  FA = 10,
  VA = -2,
  hg = (e) => e === "*";
function zA(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(hg) && (r += VA),
    t && (r += LA),
    n
      .filter((i) => !hg(i))
      .reduce((i, o) => i + (OA.test(o) ? IA : o === "" ? _A : FA), r)
  );
}
function BA(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function $A(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      c = a === r.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      d = gg(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        u,
      ),
      f = l.route;
    if (
      (!d &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (d = gg(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          u,
        )),
        !d)
    )
      return null;
    (Object.assign(i, d.params),
      s.push({
        params: i,
        pathname: Xi([o, d.pathname]),
        pathnameBase: HA(Xi([o, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (o = Xi([o, d.pathnameBase])));
  }
  return s;
}
function gg(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = UA(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((c, u, d) => {
      let { paramName: f, isOptional: p } = u;
      if (f === "*") {
        let m = a[d] || "";
        s = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const b = a[d];
      return (
        p && !b ? (c[f] = void 0) : (c[f] = (b || "").replace(/%2F/g, "/")),
        c
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function UA(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    e1(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
      e +
      '" will be treated as if it were ' +
      ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
      "always follow a `/` in the pattern. To get rid of this warning, " +
      ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function WA(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      e1(
        !1,
        'The URL path "' +
        e +
        '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
        ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function i1(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Xi = (e) => e.join("/").replace(/\/\/+/g, "/"),
  HA = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function KA(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const o1 = ["post", "put", "patch", "delete"];
new Set(o1);
const GA = ["get", ...o1];
new Set(GA);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nl() {
  return (
    (Nl = Object.assign
      ? Object.assign.bind()
      : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Nl.apply(this, arguments)
  );
}
const qA = g.createContext(null),
  YA = g.createContext(null),
  s1 = g.createContext(null),
  yc = g.createContext(null),
  xc = g.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  a1 = g.createContext(null);
function Up() {
  return g.useContext(yc) != null;
}
function l1() {
  return (Up() || bt(!1), g.useContext(yc).location);
}
function QA(e, t) {
  return XA(e, t);
}
function XA(e, t, n, r) {
  Up() || bt(!1);
  let { navigator: i } = g.useContext(s1),
    { matches: o } = g.useContext(xc),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let c = l1(),
    u;
  if (t) {
    var d;
    let w = typeof t == "string" ? vc(t) : t;
    (l === "/" || ((d = w.pathname) != null && d.startsWith(l)) || bt(!1),
      (u = w));
  } else u = c;
  let f = u.pathname || "/",
    p = f;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    p = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let b = NA(e, { pathname: p }),
    m = nR(
      b &&
      b.map((w) =>
        Object.assign({}, w, {
          params: Object.assign({}, a, w.params),
          pathname: Xi([
            l,
            i.encodeLocation
              ? i.encodeLocation(w.pathname).pathname
              : w.pathname,
          ]),
          pathnameBase:
            w.pathnameBase === "/"
              ? l
              : Xi([
                l,
                i.encodeLocation
                  ? i.encodeLocation(w.pathnameBase).pathname
                  : w.pathnameBase,
              ]),
        }),
      ),
      o,
      n,
      r,
    );
  return t && m
    ? g.createElement(
      yc.Provider,
      {
        value: {
          location: Nl(
            {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
            },
            u,
          ),
          navigationType: mr.Pop,
        },
      },
      m,
    )
    : m;
}
function ZA() {
  let e = sR(),
    t = KA(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return g.createElement(
    g.Fragment,
    null,
    g.createElement("h2", null, "Unexpected Application Error!"),
    g.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? g.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const JA = g.createElement(ZA, null);
class eR extends g.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
        error: t.error !== void 0 ? t.error : n.error,
        location: n.location,
        revalidation: t.revalidation || n.revalidation,
      };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? g.createElement(
        xc.Provider,
        { value: this.props.routeContext },
        g.createElement(a1.Provider, {
          value: this.state.error,
          children: this.props.component,
        }),
      )
      : this.props.children;
  }
}
function tR(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = g.useContext(qA);
  return (
    i &&
    i.static &&
    i.staticContext &&
    (n.route.errorElement || n.route.ErrorBoundary) &&
    (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(xc.Provider, { value: t }, r)
  );
}
function nR(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
      n === void 0 && (n = null),
      r === void 0 && (r = null),
      e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let u = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0,
    );
    (u >= 0 || bt(!1), (s = s.slice(0, Math.min(s.length, u + 1))));
  }
  let l = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let u = 0; u < s.length; u++) {
      let d = s[u];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = u),
          d.route.id)
      ) {
        let { loaderData: f, errors: p } = n,
          b =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!p || p[d.route.id] === void 0);
        if (d.route.lazy || b) {
          ((l = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  return s.reduceRight((u, d, f) => {
    let p,
      b = !1,
      m = null,
      w = null;
    n &&
      ((p = a && d.route.id ? a[d.route.id] : void 0),
        (m = d.route.errorElement || JA),
        l &&
        (c < 0 && f === 0
          ? ((b = !0), (w = null))
          : c === f &&
          ((b = !0), (w = d.route.hydrateFallbackElement || null))));
    let y = t.concat(s.slice(0, f + 1)),
      v = () => {
        let x;
        return (
          p
            ? (x = m)
            : b
              ? (x = w)
              : d.route.Component
                ? (x = g.createElement(d.route.Component, null))
                : d.route.element
                  ? (x = d.route.element)
                  : (x = u),
          g.createElement(tR, {
            match: d,
            routeContext: { outlet: u, matches: y, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? g.createElement(eR, {
        location: n.location,
        revalidation: n.revalidation,
        component: m,
        error: p,
        children: v(),
        routeContext: { outlet: null, matches: y, isDataRoute: !0 },
      })
      : v();
  }, null);
}
var Ud = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Ud || {});
function rR(e) {
  let t = g.useContext(YA);
  return (t || bt(!1), t);
}
function iR(e) {
  let t = g.useContext(xc);
  return (t || bt(!1), t);
}
function oR(e) {
  let t = iR(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || bt(!1), n.route.id);
}
function sR() {
  var e;
  let t = g.useContext(a1),
    n = rR(Ud.UseRouteError),
    r = oR(Ud.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function aR(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Wd(e) {
  bt(!1);
}
function lR(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = mr.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  Up() && bt(!1);
  let l = t.replace(/^\/*/, "/"),
    c = g.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: Nl({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s],
    );
  typeof r == "string" && (r = vc(r));
  let {
    pathname: u = "/",
    search: d = "",
    hash: f = "",
    state: p = null,
    key: b = "default",
  } = r,
    m = g.useMemo(() => {
      let w = i1(u, l);
      return w == null
        ? null
        : {
          location: { pathname: w, search: d, hash: f, state: p, key: b },
          navigationType: i,
        };
    }, [l, u, d, f, p, b, i]);
  return m == null
    ? null
    : g.createElement(
      s1.Provider,
      { value: c },
      g.createElement(yc.Provider, { children: n, value: m }),
    );
}
function cR(e) {
  let { children: t, location: n } = e;
  return QA(Hd(t), n);
}
new Promise(() => { });
function Hd(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    g.Children.forEach(e, (r, i) => {
      if (!g.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === g.Fragment) {
        n.push.apply(n, Hd(r.props.children, o));
        return;
      }
      (r.type !== Wd && bt(!1), !r.props.index || !r.props.children || bt(!1));
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (s.children = Hd(r.props.children, o)), n.push(s));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const uR = "6";
try {
  window.__reactRouterVersion = uR;
} catch { }
const dR = "startTransition",
  vg = Nf[dR];
function fR(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = g.useRef();
  o.current == null && (o.current = jA({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = g.useState({ action: s.action, location: s.location }),
    { v7_startTransition: c } = r || {},
    u = g.useCallback(
      (d) => {
        c && vg ? vg(() => l(d)) : l(d);
      },
      [l, c],
    );
  return (
    g.useLayoutEffect(() => s.listen(u), [s, u]),
    g.useEffect(() => aR(r), [r]),
    g.createElement(lR, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var yg;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(yg || (yg = {}));
var xg;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(xg || (xg = {}));
const Wp = g.createContext({});
function Hp(e) {
  const t = g.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const c1 = typeof window < "u",
  u1 = c1 ? g.useLayoutEffect : g.useEffect,
  wc = g.createContext(null);
function Kp(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Gp(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const jn = (e, t, n) => (n > t ? t : n < e ? e : n);
let bc = () => { },
  yo = () => { };
const Kn = {},
  d1 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function f1(e) {
  return typeof e == "object" && e !== null;
}
const p1 = (e) => /^0[^.\s]+$/u.test(e);
function qp(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const _t = (e) => e,
  pR = (e, t) => (n) => t(e(n)),
  Qs = (...e) => e.reduce(pR),
  Os = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class Yp {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Kp(this.subscriptions, t), () => Gp(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const kn = (e) => e * 1e3,
  It = (e) => e / 1e3;
function m1(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const h1 = (e, t, n) =>
  (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  mR = 1e-7,
  hR = 12;
function gR(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do ((s = t + (n - t) / 2), (o = h1(s, r, i) - e), o > 0 ? (n = s) : (t = s));
  while (Math.abs(o) > mR && ++a < hR);
  return s;
}
function Xs(e, t, n, r) {
  if (e === t && n === r) return _t;
  const i = (o) => gR(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : h1(i(o), t, r));
}
const g1 = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  v1 = (e) => (t) => 1 - e(1 - t),
  y1 = Xs(0.33, 1.53, 0.69, 0.99),
  Qp = v1(y1),
  x1 = g1(Qp),
  w1 = (e) =>
    (e *= 2) < 1 ? 0.5 * Qp(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Xp = (e) => 1 - Math.sin(Math.acos(e)),
  b1 = v1(Xp),
  S1 = g1(Xp),
  vR = Xs(0.42, 0, 1, 1),
  yR = Xs(0, 0, 0.58, 1),
  C1 = Xs(0.42, 0, 0.58, 1),
  xR = (e) => Array.isArray(e) && typeof e[0] != "number",
  E1 = (e) => Array.isArray(e) && typeof e[0] == "number",
  wg = {
    linear: _t,
    easeIn: vR,
    easeInOut: C1,
    easeOut: yR,
    circIn: Xp,
    circInOut: S1,
    circOut: b1,
    backIn: Qp,
    backInOut: x1,
    backOut: y1,
    anticipate: w1,
  },
  wR = (e) => typeof e == "string",
  bg = (e) => {
    if (E1(e)) {
      yo(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
        "cubic-bezier-length",
      );
      const [t, n, r, i] = e;
      return Xs(t, n, r, i);
    } else if (wR(e))
      return (
        yo(
          wg[e] !== void 0,
          `Invalid easing type '${e}'`,
          "invalid-easing-type",
        ),
        wg[e]
      );
    return e;
  },
  ka = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Sg = { value: null, addProjectionMetrics: null };
function bR(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    o = !1;
  const s = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function c(d) {
    (s.has(d) && (u.schedule(d), e()), l++, d(a));
  }
  const u = {
    schedule: (d, f = !1, p = !1) => {
      const m = p && i ? n : r;
      return (f && s.add(d), m.has(d) || m.add(d), d);
    },
    cancel: (d) => {
      (r.delete(d), s.delete(d));
    },
    process: (d) => {
      if (((a = d), i)) {
        o = !0;
        return;
      }
      ((i = !0),
        ([n, r] = [r, n]),
        n.forEach(c),
        t && Sg.value && Sg.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (i = !1),
        o && ((o = !1), u.process(d)));
    },
  };
  return u;
}
const SR = 40;
function k1(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = ka.reduce((x, S) => ((x[S] = bR(o, t ? S : void 0)), x), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: c,
      preUpdate: u,
      update: d,
      preRender: f,
      render: p,
      postRender: b,
    } = s,
    m = () => {
      const x = Kn.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        Kn.useManualTiming ||
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, SR), 1)),
        (i.timestamp = x),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        c.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        p.process(i),
        b.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(m)));
    },
    w = () => {
      ((n = !0), (r = !0), i.isProcessing || e(m));
    };
  return {
    schedule: ka.reduce((x, S) => {
      const C = s[S];
      return (
        (x[S] = (k, E = !1, T = !1) => (n || w(), C.schedule(k, E, T))),
        x
      );
    }, {}),
    cancel: (x) => {
      for (let S = 0; S < ka.length; S++) s[ka[S]].cancel(x);
    },
    state: i,
    steps: s,
  };
}
const {
  schedule: Ce,
  cancel: jr,
  state: Ke,
  steps: uu,
} = k1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : _t, !0);
let Ya;
function CR() {
  Ya = void 0;
}
const lt = {
  now: () => (
    Ya === void 0 &&
    lt.set(
      Ke.isProcessing || Kn.useManualTiming
        ? Ke.timestamp
        : performance.now(),
    ),
    Ya
  ),
  set: (e) => {
    ((Ya = e), queueMicrotask(CR));
  },
},
  T1 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  P1 = T1("--"),
  ER = T1("var(--"),
  Zp = (e) => (ER(e) ? kR.test(e.split("/*")[0].trim()) : !1),
  kR =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Cg(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const Po = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e,
},
  Is = { ...Po, transform: (e) => jn(0, 1, e) },
  Ta = { ...Po, default: 1 },
  ls = (e) => Math.round(e * 1e5) / 1e5,
  Jp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function TR(e) {
  return e == null;
}
const PR =
  /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  em = (e, t) => (n) =>
    !!(
      (typeof n == "string" && PR.test(n) && n.startsWith(e)) ||
      (t && !TR(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  j1 = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(Jp);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  jR = (e) => jn(0, 255, e),
  du = { ...Po, transform: (e) => Math.round(jR(e)) },
  Yr = {
    test: em("rgb", "red"),
    parse: j1("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      du.transform(e) +
      ", " +
      du.transform(t) +
      ", " +
      du.transform(n) +
      ", " +
      ls(Is.transform(r)) +
      ")",
  };
function AR(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Kd = { test: em("#"), parse: AR, transform: Yr.transform },
  Zs = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  tr = Zs("deg"),
  Tn = Zs("%"),
  B = Zs("px"),
  RR = Zs("vh"),
  NR = Zs("vw"),
  Eg = {
    ...Tn,
    parse: (e) => Tn.parse(e) / 100,
    transform: (e) => Tn.transform(e * 100),
  },
  Vi = {
    test: em("hsl", "hue"),
    parse: j1("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Tn.transform(ls(t)) +
      ", " +
      Tn.transform(ls(n)) +
      ", " +
      ls(Is.transform(r)) +
      ")",
  },
  Le = {
    test: (e) => Yr.test(e) || Kd.test(e) || Vi.test(e),
    parse: (e) =>
      Yr.test(e) ? Yr.parse(e) : Vi.test(e) ? Vi.parse(e) : Kd.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Yr.transform(e)
          : Vi.transform(e),
    getAnimatableNone: (e) => {
      const t = Le.parse(e);
      return ((t.alpha = 0), Le.transform(t));
    },
  },
  MR =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function DR(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Jp)) == null ? void 0 : t.length) || 0) +
    (((n = e.match(MR)) == null ? void 0 : n.length) || 0) >
    0
  );
}
const A1 = "number",
  R1 = "color",
  OR = "var",
  IR = "var(",
  kg = "${}",
  LR =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ls(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      LR,
      (l) => (
        Le.test(l)
          ? (r.color.push(o), i.push(R1), n.push(Le.parse(l)))
          : l.startsWith(IR)
            ? (r.var.push(o), i.push(OR), n.push(l))
            : (r.number.push(o), i.push(A1), n.push(parseFloat(l))),
        ++o,
        kg
      ),
    )
    .split(kg);
  return { values: n, split: a, indexes: r, types: i };
}
function N1(e) {
  return Ls(e).values;
}
function M1(e) {
  const { split: t, types: n } = Ls(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === A1
          ? (o += ls(i[s]))
          : a === R1
            ? (o += Le.transform(i[s]))
            : (o += i[s]);
      }
    return o;
  };
}
const _R = (e) =>
  typeof e == "number" ? 0 : Le.test(e) ? Le.getAnimatableNone(e) : e;
function FR(e) {
  const t = N1(e);
  return M1(e)(t.map(_R));
}
const Ar = {
  test: DR,
  parse: N1,
  createTransformer: M1,
  getAnimatableNone: FR,
};
function fu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function VR({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = fu(l, a, e + 1 / 3)), (o = fu(l, a, e)), (s = fu(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Ml(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ae = (e, t, n) => e + (t - e) * n,
  pu = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  zR = [Kd, Yr, Vi],
  BR = (e) => zR.find((t) => t.test(e));
function Tg(e) {
  const t = BR(e);
  if (
    (bc(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
      "color-not-animatable",
    ),
      !t)
  )
    return !1;
  let n = t.parse(e);
  return (t === Vi && (n = VR(n)), n);
}
const Pg = (e, t) => {
  const n = Tg(e),
    r = Tg(t);
  if (!n || !r) return Ml(e, t);
  const i = { ...n };
  return (o) => (
    (i.red = pu(n.red, r.red, o)),
    (i.green = pu(n.green, r.green, o)),
    (i.blue = pu(n.blue, r.blue, o)),
    (i.alpha = Ae(n.alpha, r.alpha, o)),
    Yr.transform(i)
  );
},
  Gd = new Set(["none", "hidden"]);
function $R(e, t) {
  return Gd.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function UR(e, t) {
  return (n) => Ae(e, t, n);
}
function tm(e) {
  return typeof e == "number"
    ? UR
    : typeof e == "string"
      ? Zp(e)
        ? Ml
        : Le.test(e)
          ? Pg
          : KR
      : Array.isArray(e)
        ? D1
        : typeof e == "object"
          ? Le.test(e)
            ? Pg
            : WR
          : Ml;
}
function D1(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => tm(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function WR(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = tm(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function HR(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      s = e.indexes[o][r[o]],
      a = e.values[s] ?? 0;
    ((n[i] = a), r[o]++);
  }
  return n;
}
const KR = (e, t) => {
  const n = Ar.createTransformer(t),
    r = Ls(e),
    i = Ls(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Gd.has(e) && !i.values.length) || (Gd.has(t) && !r.values.length)
      ? $R(e, t)
      : Qs(D1(HR(r, i), i.values), n)
    : (bc(
      !0,
      `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
      "complex-values-different",
    ),
      Ml(e, t));
};
function O1(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Ae(e, t, n)
    : tm(e)(e, t);
}
const GR = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => Ce.update(t, n),
    stop: () => jr(t),
    now: () => (Ke.isProcessing ? Ke.timestamp : lt.now()),
  };
},
  I1 = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++)
      r += Math.round(e(o / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Dl = 2e4;
function nm(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Dl;) ((t += n), (r = e.next(t)));
  return t >= Dl ? 1 / 0 : t;
}
function qR(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(nm(r), Dl);
  return {
    type: "keyframes",
    ease: (o) => r.next(i * o).value / t,
    duration: It(i),
  };
}
const YR = 5;
function L1(e, t, n) {
  const r = Math.max(t - YR, 0);
  return m1(n - e(r), t - r);
}
const Pe = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
},
  mu = 0.001;
function QR({
  duration: e = Pe.duration,
  bounce: t = Pe.bounce,
  velocity: n = Pe.velocity,
  mass: r = Pe.mass,
}) {
  let i, o;
  bc(
    e <= kn(Pe.maxDuration),
    "Spring duration must be 10 seconds or less",
    "spring-duration-limit",
  );
  let s = 1 - t;
  ((s = jn(Pe.minDamping, Pe.maxDamping, s)),
    (e = jn(Pe.minDuration, Pe.maxDuration, It(e))),
    s < 1
      ? ((i = (c) => {
        const u = c * s,
          d = u * e,
          f = u - n,
          p = qd(c, s),
          b = Math.exp(-d);
        return mu - (f / p) * b;
      }),
        (o = (c) => {
          const d = c * s * e,
            f = d * n + n,
            p = Math.pow(s, 2) * Math.pow(c, 2) * e,
            b = Math.exp(-d),
            m = qd(Math.pow(c, 2), s);
          return ((-i(c) + mu > 0 ? -1 : 1) * ((f - p) * b)) / m;
        }))
      : ((i = (c) => {
        const u = Math.exp(-c * e),
          d = (c - n) * e + 1;
        return -mu + u * d;
      }),
        (o = (c) => {
          const u = Math.exp(-c * e),
            d = (n - c) * (e * e);
          return u * d;
        })));
  const a = 5 / e,
    l = ZR(i, o, a);
  if (((e = kn(e)), isNaN(l)))
    return { stiffness: Pe.stiffness, damping: Pe.damping, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
const XR = 12;
function ZR(e, t, n) {
  let r = n;
  for (let i = 1; i < XR; i++) r = r - e(r) / t(r);
  return r;
}
function qd(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const JR = ["duration", "bounce"],
  eN = ["stiffness", "damping", "mass"];
function jg(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function tN(e) {
  let t = {
    velocity: Pe.velocity,
    stiffness: Pe.stiffness,
    damping: Pe.damping,
    mass: Pe.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!jg(e, eN) && jg(e, JR))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * jn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Pe.mass, stiffness: i, damping: o };
    } else {
      const n = QR(e);
      ((t = { ...t, ...n, mass: Pe.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Ol(e = Pe.visualDuration, t = Pe.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: c,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = tN({ ...n, velocity: -It(n.velocity || 0) }),
    b = f || 0,
    m = c / (2 * Math.sqrt(l * u)),
    w = s - o,
    y = It(Math.sqrt(l / u)),
    v = Math.abs(w) < 5;
  (r || (r = v ? Pe.restSpeed.granular : Pe.restSpeed.default),
    i || (i = v ? Pe.restDelta.granular : Pe.restDelta.default));
  let x;
  if (m < 1) {
    const C = qd(y, m);
    x = (k) => {
      const E = Math.exp(-m * y * k);
      return (
        s - E * (((b + m * y * w) / C) * Math.sin(C * k) + w * Math.cos(C * k))
      );
    };
  } else if (m === 1) x = (C) => s - Math.exp(-y * C) * (w + (b + y * w) * C);
  else {
    const C = y * Math.sqrt(m * m - 1);
    x = (k) => {
      const E = Math.exp(-m * y * k),
        T = Math.min(C * k, 300);
      return (
        s - (E * ((b + m * y * w) * Math.sinh(T) + C * w * Math.cosh(T))) / C
      );
    };
  }
  const S = {
    calculatedDuration: (p && d) || null,
    next: (C) => {
      const k = x(C);
      if (p) a.done = C >= d;
      else {
        let E = C === 0 ? b : 0;
        m < 1 && (E = C === 0 ? kn(b) : L1(x, C, k));
        const T = Math.abs(E) <= r,
          R = Math.abs(s - k) <= i;
        a.done = T && R;
      }
      return ((a.value = a.done ? s : k), a);
    },
    toString: () => {
      const C = Math.min(nm(S), Dl),
        k = I1((E) => S.next(C * E).value, C, 30);
      return C + "ms " + k;
    },
    toTransition: () => { },
  };
  return S;
}
Ol.applyToOptions = (e) => {
  const t = qR(e, 100, Ol);
  return (
    (e.ease = t.ease),
    (e.duration = kn(t.duration)),
    (e.type = "keyframes"),
    e
  );
};
function Yd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    p = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    b = (T) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - T) < Math.abs(l - T)
          ? a
          : l;
  let m = n * t;
  const w = d + m,
    y = s === void 0 ? w : s(w);
  y !== w && (m = y - d);
  const v = (T) => -m * Math.exp(-T / r),
    x = (T) => y + v(T),
    S = (T) => {
      const R = v(T),
        N = x(T);
      ((f.done = Math.abs(R) <= c), (f.value = f.done ? y : N));
    };
  let C, k;
  const E = (T) => {
    p(f.value) &&
      ((C = T),
        (k = Ol({
          keyframes: [f.value, b(f.value)],
          velocity: L1(x, T, f.value),
          damping: i,
          stiffness: o,
          restDelta: c,
          restSpeed: u,
        })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let R = !1;
        return (
          !k && C === void 0 && ((R = !0), S(T), E(T)),
          C !== void 0 && T >= C ? k.next(T - C) : (!R && S(T), f)
        );
      },
    }
  );
}
function nN(e, t, n) {
  const r = [],
    i = n || Kn.mix || O1,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || _t : t;
      a = Qs(l, a);
    }
    r.push(a);
  }
  return r;
}
function rN(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (
    (yo(
      o === t.length,
      "Both input and output ranges must be the same length",
      "range-length",
    ),
      o === 1)
  )
    return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = nN(t, r, i),
    l = a.length,
    c = (u) => {
      if (s && u < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(u < e[d + 1]); d++);
      const f = Os(e[d], e[d + 1], u);
      return a[d](f);
    };
  return n ? (u) => c(jn(e[0], e[o - 1], u)) : c;
}
function iN(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Os(0, t, r);
    e.push(Ae(n, 1, i));
  }
}
function oN(e) {
  const t = [0];
  return (iN(t, e.length - 1), t);
}
function sN(e, t) {
  return e.map((n) => n * t);
}
function aN(e, t) {
  return e.map(() => t || C1).splice(0, e.length - 1);
}
function cs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = xR(r) ? r.map(bg) : bg(r),
    o = { done: !1, value: t[0] },
    s = sN(n && n.length === t.length ? n : oN(t), e),
    a = rN(s, t, { ease: Array.isArray(i) ? i : aN(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const lN = (e) => e !== null;
function rm(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const o = e.filter(lN),
    a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : o.length - 1;
  return !a || r === void 0 ? o[a] : r;
}
const cN = { decay: Yd, inertia: Yd, tween: cs, keyframes: cs, spring: Ol };
function _1(e) {
  typeof e.type == "string" && (e.type = cN[e.type]);
}
class im {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const uN = (e) => e / 100;
class om extends im {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== lt.now() && this.tick(lt.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
          (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    _1(t);
    const {
      type: n = cs,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o,
      velocity: s = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || cs;
    l !== cs &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = Qs(uN, O1(a[0], a[1]))), (a = [0, 100]));
    const c = l({ ...t, keyframes: a });
    (o === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -s,
      })),
      c.calculatedDuration === null && (c.calculatedDuration = nm(c)));
    const { calculatedDuration: u } = c;
    ((this.calculatedDuration = u),
      (this.resolvedDuration = u + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = c));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: s,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: c = 0,
      keyframes: u,
      repeat: d,
      repeatType: f,
      repeatDelay: p,
      type: b,
      onUpdate: m,
      finalKeyframe: w,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
      (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const y = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
      v = this.playbackSpeed >= 0 ? y < 0 : y > i;
    ((this.currentTime = Math.max(y, 0)),
      this.state === "finished" &&
      this.holdTime === null &&
      (this.currentTime = i));
    let x = this.currentTime,
      S = r;
    if (d) {
      const T = Math.min(this.currentTime, i) / a;
      let R = Math.floor(T),
        N = T % 1;
      (!N && T >= 1 && (N = 1),
        N === 1 && R--,
        (R = Math.min(R, d + 1)),
        !!(R % 2) &&
        (f === "reverse"
          ? ((N = 1 - N), p && (N -= p / a))
          : f === "mirror" && (S = s)),
        (x = jn(0, 1, N) * a));
    }
    const C = v ? { done: !1, value: u[0] } : S.next(x);
    o && (C.value = o(C.value));
    let { done: k } = C;
    !v &&
      l !== null &&
      (k =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && k));
    return (
      E && b !== Yd && (C.value = rm(u, this.options, w, this.speed)),
      m && m(C.value),
      E && this.finish(),
      C
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return It(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + It(t);
  }
  get time() {
    return It(this.currentTime);
  }
  set time(t) {
    var n;
    ((t = kn(t)),
      (this.currentTime = t),
      this.startTime === null ||
        this.holdTime !== null ||
        this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
        (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(lt.now());
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = It(this.currentTime)));
  }
  play() {
    var i, o;
    if (this.isStopped) return;
    const { driver: t = GR, startTime: n } = this.options;
    (this.driver || (this.driver = t((s) => this.tick(s))),
      (o = (i = this.options).onPlay) == null || o.call(i));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
      this.speed < 0 &&
      (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(lt.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
      ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function dN(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Qr = (e) => (e * 180) / Math.PI,
  Qd = (e) => {
    const t = Qr(Math.atan2(e[1], e[0]));
    return Xd(t);
  },
  fN = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Qd,
    rotateZ: Qd,
    skewX: (e) => Qr(Math.atan(e[1])),
    skewY: (e) => Qr(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Xd = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Ag = Qd,
  Rg = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Ng = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  pN = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Rg,
    scaleY: Ng,
    scale: (e) => (Rg(e) + Ng(e)) / 2,
    rotateX: (e) => Xd(Qr(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Xd(Qr(Math.atan2(-e[2], e[0]))),
    rotateZ: Ag,
    rotate: Ag,
    skewX: (e) => Qr(Math.atan(e[4])),
    skewY: (e) => Qr(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Zd(e) {
  return e.includes("scale") ? 1 : 0;
}
function Jd(e, t) {
  if (!e || e === "none") return Zd(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) ((r = pN), (i = n));
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = fN), (i = a));
  }
  if (!i) return Zd(t);
  const o = r[t],
    s = i[1].split(",").map(hN);
  return typeof o == "function" ? o(s) : s[o];
}
const mN = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Jd(n, t);
};
function hN(e) {
  return parseFloat(e.trim());
}
const jo = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY",
],
  Ao = new Set(jo),
  Mg = (e) => e === Po || e === B,
  gN = new Set(["x", "y", "z"]),
  vN = jo.filter((e) => !gN.has(e));
function yN(e) {
  const t = [];
  return (
    vN.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const hr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Jd(t, "x"),
  y: (e, { transform: t }) => Jd(t, "y"),
};
hr.translateX = hr.x;
hr.translateY = hr.y;
const si = new Set();
let ef = !1,
  tf = !1,
  nf = !1;
function F1() {
  if (tf) {
    const e = Array.from(si).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = yN(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) == null || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((tf = !1), (ef = !1), si.forEach((e) => e.complete(nf)), si.clear());
}
function V1() {
  si.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (tf = !0));
  });
}
function xN() {
  ((nf = !0), V1(), F1(), (nf = !1));
}
class sm {
  constructor(t, n, r, i, o, s = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (si.add(this),
          ef || ((ef = !0), Ce.read(V1), Ce.resolveKeyframes(F1)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const o = i == null ? void 0 : i.get(),
        s = t[t.length - 1];
      if (o !== void 0) t[0] = o;
      else if (r && n) {
        const a = r.readValue(n, s);
        a != null && (t[0] = a);
      }
      (t[0] === void 0 && (t[0] = s), i && o === void 0 && i.set(t[0]));
    }
    dN(t);
  }
  setFinalKeyframe() { }
  measureInitialState() { }
  renderEndStyles() { }
  measureEndState() { }
  complete(t = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      si.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (si.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const wN = (e) => e.startsWith("--");
function bN(e, t, n) {
  wN(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const SN = qp(() => window.ScrollTimeline !== void 0),
  CN = {};
function EN(e, t) {
  const n = qp(e);
  return () => CN[t] ?? n();
}
const z1 = EN(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"),
  Yo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Dg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Yo([0, 0.65, 0.55, 1]),
    circOut: Yo([0.55, 0, 1, 0.45]),
    backIn: Yo([0.31, 0.01, 0.66, -0.59]),
    backOut: Yo([0.33, 1.53, 0.69, 0.99]),
  };
function B1(e, t) {
  if (e)
    return typeof e == "function"
      ? z1()
        ? I1(e, t)
        : "ease-out"
      : E1(e)
        ? Yo(e)
        : Array.isArray(e)
          ? e.map((n) => B1(n, t) || Dg.easeOut)
          : Dg[e];
}
function kN(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  c = void 0,
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const d = B1(a, i);
  Array.isArray(d) && (u.easing = d);
  const f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal",
  };
  return (c && (f.pseudoElement = c), e.animate(u, f));
}
function $1(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function TN({ type: e, ...t }) {
  return $1(e) && z1()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class PN extends im {
  constructor(t) {
    if (
      (super(),
        (this.finishedTime = null),
        (this.isStopped = !1),
        (this.manualStartTime = null),
        !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: s = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    ((this.isPseudoElement = !!o),
      (this.allowFlatten = s),
      (this.options = t),
      yo(
        typeof t.type != "string",
        `Mini animate() doesn't support "type" as a string.`,
        "mini-spring",
      ));
    const c = TN(t);
    ((this.animation = kN(n, r, i, c, o)),
      c.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const u = rm(i, this.options, a, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(u) : bN(n, r, u),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
        this.animation.play(),
        this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch { }
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, n;
    this.isPseudoElement ||
      (n = (t = this.animation).commitStyles) == null ||
      n.call(t);
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
        null
        ? void 0
        : r.call(n).duration) || 0;
    return It(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + It(t);
  }
  get time() {
    return It(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = kn(t)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
      ((r = this.animation.effect) == null ||
        r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && SN() ? ((this.animation.timeline = t), _t) : n(this)
    );
  }
}
const U1 = { anticipate: w1, backInOut: x1, circInOut: S1 };
function jN(e) {
  return e in U1;
}
function AN(e) {
  typeof e.ease == "string" && jN(e.ease) && (e.ease = U1[e.ease]);
}
const hu = 10;
class RN extends PN {
  constructor(t) {
    (AN(t),
      _1(t),
      super(t),
      t.startTime !== void 0 && (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: o,
      ...s
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new om({ ...s, autoplay: !1 }),
      l = Math.max(hu, lt.now() - this.startTime),
      c = jn(0, hu, l - hu);
    (n.setWithVelocity(
      a.sample(Math.max(0, l - c)).value,
      a.sample(l).value,
      c,
    ),
      a.stop());
  }
}
const Og = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
      typeof e == "number" ||
      Array.isArray(e) ||
      (typeof e == "string" &&
        (Ar.test(e) || e === "0") &&
        !e.startsWith("url("))
    );
function NN(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function MN(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = Og(i, t),
    a = Og(o, t);
  return (
    bc(
      s === a,
      `You are trying to animate ${t} from "${i}" to "${o}". "${s ? o : i}" is not an animatable value.`,
      "value-not-animatable",
    ),
    !s || !a ? !1 : NN(e) || ((n === "spring" || $1(n)) && r)
  );
}
function rf(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const DN = new Set(["opacity", "clipPath", "filter", "transform"]),
  ON = qp(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function IN(e) {
  var u;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: o,
    type: s,
  } = e;
  if (
    !(
      ((u = t == null ? void 0 : t.owner) == null
        ? void 0
        : u.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: c } = t.owner.getProps();
  return (
    ON() &&
    n &&
    DN.has(n) &&
    (n !== "transform" || !c) &&
    !l &&
    !r &&
    i !== "mirror" &&
    o !== 0 &&
    s !== "inertia"
  );
}
const LN = 40;
class _N extends im {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    keyframes: a,
    name: l,
    motionValue: c,
    element: u,
    ...d
  }) {
    var b;
    (super(),
      (this.stop = () => {
        var m, w;
        (this._animation &&
          (this._animation.stop(),
            (m = this.stopTimeline) == null || m.call(this)),
          (w = this.keyframeResolver) == null || w.cancel());
      }),
      (this.createdAt = lt.now()));
    const f = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: o,
      repeatType: s,
      name: l,
      motionValue: c,
      element: u,
      ...d,
    },
      p = (u == null ? void 0 : u.KeyframeResolver) || sm;
    ((this.keyframeResolver = new p(
      a,
      (m, w, y) => this.onKeyframesResolved(m, w, f, !y),
      l,
      c,
      u,
    )),
      (b = this.keyframeResolver) == null || b.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const {
      name: o,
      type: s,
      velocity: a,
      delay: l,
      isHandoff: c,
      onUpdate: u,
    } = r;
    ((this.resolvedAt = lt.now()),
      MN(t, o, s, a) ||
      ((Kn.instantAnimations || !l) && (u == null || u(rm(t, r, n))),
        (t[0] = t[t.length - 1]),
        rf(r),
        (r.repeat = 0)));
    const f = {
      startTime: i
        ? this.resolvedAt
          ? this.resolvedAt - this.createdAt > LN
            ? this.resolvedAt
            : this.createdAt
          : this.createdAt
        : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t,
    },
      p =
        !c && IN(f)
          ? new RN({ ...f, element: f.motionValue.owner.current })
          : new om(f);
    (p.finished.then(() => this.notifyFinished()).catch(_t),
      this.pendingTimeline &&
      ((this.stopTimeline = p.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = p));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => { });
  }
  get animation() {
    var t;
    return (
      this._animation ||
      ((t = this.keyframeResolver) == null || t.resume(), xN()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel());
  }
}
const FN = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function VN(e) {
  const t = FN.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
const zN = 4;
function W1(e, t, n = 1) {
  yo(
    n <= zN,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
    "max-css-var-depth",
  );
  const [r, i] = VN(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return d1(s) ? parseFloat(s) : s;
  }
  return Zp(i) ? W1(i, t, n + 1) : i;
}
function am(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const BN = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  $N = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  UN = { type: "keyframes", duration: 0.8 },
  WN = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  HN = (e, { keyframes: t }) =>
    t.length > 2
      ? UN
      : Ao.has(e)
        ? e.startsWith("scale")
          ? $N(t[1])
          : BN
        : WN;
function KN({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
const GN = (e) => e !== null;
function qN(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(GN),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
function H1(e, t, n, r = 0, i = 1) {
  const o = Array.from(e)
    .sort((c, u) => c.sortNodePosition(u))
    .indexOf(t),
    s = e.size,
    a = (s - 1) * r;
  return typeof n == "function" ? n(o, s) : i === 1 ? o * r : a - o * r;
}
const lm =
  (e, t, n, r = {}, i, o) =>
    (s) => {
      const a = am(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: c = 0 } = r;
      c = c - kn(l);
      const u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: (f) => {
          (t.set(f), a.onUpdate && a.onUpdate(f));
        },
        onComplete: () => {
          (s(), a.onComplete && a.onComplete());
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      (KN(a) || Object.assign(u, HN(e, u)),
        u.duration && (u.duration = kn(u.duration)),
        u.repeatDelay && (u.repeatDelay = kn(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from));
      let d = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          (rf(u), u.delay === 0 && (d = !0)),
          (Kn.instantAnimations || Kn.skipAnimations) &&
          ((d = !0), rf(u), (u.delay = 0)),
          (u.allowFlatten = !a.type && !a.ease),
          d && !o && t.get() !== void 0)
      ) {
        const f = qN(u.keyframes, a);
        if (f !== void 0) {
          Ce.update(() => {
            (u.onUpdate(f), u.onComplete());
          });
          return;
        }
      }
      return a.isSync ? new om(u) : new _N(u);
    },
  K1 = new Set(["width", "height", "top", "left", "right", "bottom", ...jo]),
  Ig = 30,
  YN = (e) => !isNaN(parseFloat(e));
class QN {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var o;
        const i = lt.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(r),
            this.current !== this.prev &&
            ((o = this.events.change) == null || o.notify(this.current),
              this.dependents))
        )
          for (const s of this.dependents) s.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = lt.now()),
      this.canTrackVelocity === null &&
      t !== void 0 &&
      (this.canTrackVelocity = YN(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Yp());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
        (r(),
          Ce.read(() => {
            this.events.change.getSize() || this.stop();
          }));
      }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = lt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Ig
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ig);
    return m1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function xo(e, t) {
  return new QN(e, t);
}
function Lg(e) {
  const t = [{}, {}];
  return (
    e == null ||
    e.values.forEach((n, r) => {
      ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
    }),
    t
  );
}
function cm(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = Lg(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
      typeof t == "function")
  ) {
    const [i, o] = Lg(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function Zi(e, t, n) {
  const r = e.getProps();
  return cm(r, t, n !== void 0 ? n : r.custom, e);
}
const of = (e) => Array.isArray(e);
function XN(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, xo(n));
}
function ZN(e) {
  return of(e) ? e[e.length - 1] || 0 : e;
}
function JN(e, t) {
  const n = Zi(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = ZN(o[s]);
    XN(e, s, a);
  }
}
const tt = (e) => !!(e && e.getVelocity);
function eM(e) {
  return !!(tt(e) && e.add);
}
function sf(e, t) {
  const n = e.getValue("willChange");
  if (eM(n)) return n.add(t);
  if (!n && Kn.WillChange) {
    const r = new Kn.WillChange("auto");
    (e.addValue("willChange", r), r.add(t));
  }
}
function um(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const tM = "framerAppearId",
  G1 = "data-" + um(tM);
function q1(e) {
  return e.props[G1];
}
function nM({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Y1(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = t;
  r && (o = r);
  const l = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const u in a) {
    const d = e.getValue(u, e.latestValues[u] ?? null),
      f = a[u];
    if (f === void 0 || (c && nM(c, u))) continue;
    const p = { delay: n, ...am(o || {}, u) },
      b = d.get();
    if (
      b !== void 0 &&
      !d.isAnimating &&
      !Array.isArray(f) &&
      f === b &&
      !p.velocity
    )
      continue;
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const y = q1(e);
      if (y) {
        const v = window.MotionHandoffAnimation(y, u, Ce);
        v !== null && ((p.startTime = v), (m = !0));
      }
    }
    (sf(e, u),
      d.start(
        lm(u, d, f, e.shouldReduceMotion && K1.has(u) ? { type: !1 } : p, e, m),
      ));
    const w = d.animation;
    w && l.push(w);
  }
  return (
    s &&
    Promise.all(l).then(() => {
      Ce.update(() => {
        s && JN(e, s);
      });
    }),
    l
  );
}
function af(e, t, n = {}) {
  var l;
  const r = Zi(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Y1(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
          const {
            delayChildren: u = 0,
            staggerChildren: d,
            staggerDirection: f,
          } = i;
          return rM(e, t, c, u, d, f, n);
        }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [c, u] = a === "beforeChildren" ? [o, s] : [s, o];
    return c().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function rM(e, t, n = 0, r = 0, i = 0, o = 1, s) {
  const a = [];
  for (const l of e.variantChildren)
    (l.notify("AnimationStart", t),
      a.push(
        af(l, t, {
          ...s,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            H1(e.variantChildren, l, r, i, o),
        }).then(() => l.notify("AnimationComplete", t)),
      ));
  return Promise.all(a);
}
function iM(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => af(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = af(e, t, n);
  else {
    const i = typeof t == "function" ? Zi(e, t, n.custom) : t;
    r = Promise.all(Y1(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const oM = { test: (e) => e === "auto", parse: (e) => e },
  Q1 = (e) => (t) => t.test(e),
  X1 = [Po, B, Tn, tr, NR, RR, oM],
  _g = (e) => X1.find(Q1(e));
function sM(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || p1(e)
      : !0;
}
const aM = new Set(["brightness", "contrast", "saturate", "opacity"]);
function lM(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Jp) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = aM.has(t) ? 1 : 0;
  return (r !== n && (o *= 100), t + "(" + o + i + ")");
}
const cM = /\b([a-z-]*)\(.*?\)/gu,
  lf = {
    ...Ar,
    getAnimatableNone: (e) => {
      const t = e.match(cM);
      return t ? t.map(lM).join(" ") : e;
    },
  },
  Fg = { ...Po, transform: Math.round },
  uM = {
    rotate: tr,
    rotateX: tr,
    rotateY: tr,
    rotateZ: tr,
    scale: Ta,
    scaleX: Ta,
    scaleY: Ta,
    scaleZ: Ta,
    skew: tr,
    skewX: tr,
    skewY: tr,
    distance: B,
    translateX: B,
    translateY: B,
    translateZ: B,
    x: B,
    y: B,
    z: B,
    perspective: B,
    transformPerspective: B,
    opacity: Is,
    originX: Eg,
    originY: Eg,
    originZ: B,
  },
  dm = {
    borderWidth: B,
    borderTopWidth: B,
    borderRightWidth: B,
    borderBottomWidth: B,
    borderLeftWidth: B,
    borderRadius: B,
    radius: B,
    borderTopLeftRadius: B,
    borderTopRightRadius: B,
    borderBottomRightRadius: B,
    borderBottomLeftRadius: B,
    width: B,
    maxWidth: B,
    height: B,
    maxHeight: B,
    top: B,
    right: B,
    bottom: B,
    left: B,
    inset: B,
    insetBlock: B,
    insetBlockStart: B,
    insetBlockEnd: B,
    insetInline: B,
    insetInlineStart: B,
    insetInlineEnd: B,
    padding: B,
    paddingTop: B,
    paddingRight: B,
    paddingBottom: B,
    paddingLeft: B,
    paddingBlock: B,
    paddingBlockStart: B,
    paddingBlockEnd: B,
    paddingInline: B,
    paddingInlineStart: B,
    paddingInlineEnd: B,
    margin: B,
    marginTop: B,
    marginRight: B,
    marginBottom: B,
    marginLeft: B,
    marginBlock: B,
    marginBlockStart: B,
    marginBlockEnd: B,
    marginInline: B,
    marginInlineStart: B,
    marginInlineEnd: B,
    backgroundPositionX: B,
    backgroundPositionY: B,
    ...uM,
    zIndex: Fg,
    fillOpacity: Is,
    strokeOpacity: Is,
    numOctaves: Fg,
  },
  dM = {
    ...dm,
    color: Le,
    backgroundColor: Le,
    outlineColor: Le,
    fill: Le,
    stroke: Le,
    borderColor: Le,
    borderTopColor: Le,
    borderRightColor: Le,
    borderBottomColor: Le,
    borderLeftColor: Le,
    filter: lf,
    WebkitFilter: lf,
  },
  Z1 = (e) => dM[e];
function J1(e, t) {
  let n = Z1(e);
  return (
    n !== lf && (n = Ar),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const fM = new Set(["auto", "none", "0"]);
function pM(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    const o = e[r];
    (typeof o == "string" && !fM.has(o) && Ls(o).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const o of t) e[o] = J1(n, i);
}
class mM extends sm {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let u = 0; u < t.length; u++) {
      let d = t[u];
      if (typeof d == "string" && ((d = d.trim()), Zp(d))) {
        const f = W1(d, n.current);
        (f !== void 0 && (t[u] = f),
          u === t.length - 1 && (this.finalKeyframe = d));
      }
    }
    if ((this.resolveNoneKeyframes(), !K1.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = _g(i),
      a = _g(o),
      l = Cg(i),
      c = Cg(o);
    if (l !== c && hr[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (s !== a)
      if (Mg(s) && Mg(a))
        for (let u = 0; u < t.length; u++) {
          const d = t[u];
          typeof d == "string" && (t[u] = parseFloat(d));
        }
      else hr[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || sM(t[i])) && r.push(i);
    r.length && pM(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = hr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = r.length - 1,
      s = r[o];
    ((r[o] = hr[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      (a = this.removedTransforms) != null &&
      a.length &&
      this.removedTransforms.forEach(([l, c]) => {
        t.getValue(l).set(c);
      }),
      this.resolveNoneKeyframes());
  }
}
function hM(e, t, n) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const i = document.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const eb = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function tb(e) {
  return f1(e) && "offsetHeight" in e;
}
const { schedule: fm, cancel: W3 } = k1(queueMicrotask, !1),
  Qt = { x: !1, y: !1 };
function nb() {
  return Qt.x || Qt.y;
}
function gM(e) {
  return e === "x" || e === "y"
    ? Qt[e]
      ? null
      : ((Qt[e] = !0),
        () => {
          Qt[e] = !1;
        })
    : Qt.x || Qt.y
      ? null
      : ((Qt.x = Qt.y = !0),
        () => {
          Qt.x = Qt.y = !1;
        });
}
function rb(e, t) {
  const n = hM(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Vg(e) {
  return !(e.pointerType === "touch" || nb());
}
function vM(e, t, n = {}) {
  const [r, i, o] = rb(e, n),
    s = (a) => {
      if (!Vg(a)) return;
      const { target: l } = a,
        c = t(l, a);
      if (typeof c != "function" || !l) return;
      const u = (d) => {
        Vg(d) && (c(d), l.removeEventListener("pointerleave", u));
      };
      l.addEventListener("pointerleave", u, i);
    };
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", s, i);
    }),
    o
  );
}
const ib = (e, t) => (t ? (e === t ? !0 : ib(e, t.parentElement)) : !1),
  pm = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  yM = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function ob(e) {
  return yM.has(e.tagName) || e.isContentEditable === !0;
}
const Qa = new WeakSet();
function zg(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function gu(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const xM = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = zg(() => {
    if (Qa.has(n)) return;
    gu(n, "down");
    const i = zg(() => {
      gu(n, "up");
    }),
      o = () => gu(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function Bg(e) {
  return pm(e) && !nb();
}
function wM(e, t, n = {}) {
  const [r, i, o] = rb(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!Bg(a)) return;
      Qa.add(l);
      const c = t(l, a),
        u = (p, b) => {
          (window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            Qa.has(l) && Qa.delete(l),
            Bg(p) && typeof c == "function" && c(p, { success: b }));
        },
        d = (p) => {
          u(
            p,
            l === window ||
            l === document ||
            n.useGlobalTarget ||
            ib(l, p.target),
          );
        },
        f = (p) => {
          u(p, !1);
        };
      (window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i));
    };
  return (
    r.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
        tb(a) &&
        (a.addEventListener("focus", (c) => xM(c, i)),
          !ob(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    o
  );
}
function sb(e) {
  return f1(e) && "ownerSVGElement" in e;
}
function bM(e) {
  return sb(e) && e.tagName === "svg";
}
const SM = [...X1, Le, Ar],
  CM = (e) => SM.find(Q1(e)),
  $g = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  zi = () => ({ x: $g(), y: $g() }),
  Ug = () => ({ min: 0, max: 0 }),
  Ve = () => ({ x: Ug(), y: Ug() }),
  cf = { current: null },
  ab = { current: !1 },
  EM = typeof window < "u";
function kM() {
  if (((ab.current = !0), !!EM))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (cf.current = e.matches);
      (e.addEventListener("change", t), t());
    } else cf.current = !1;
}
const TM = new WeakMap();
function Sc(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function _s(e) {
  return typeof e == "string" || Array.isArray(e);
}
const mm = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit",
],
  hm = ["initial", ...mm];
function Cc(e) {
  return Sc(e.animate) || hm.some((t) => _s(e[t]));
}
function lb(e) {
  return !!(Cc(e) || e.variants);
}
function PM(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (tt(i)) e.addValue(r, i);
    else if (tt(o)) e.addValue(r, xo(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, xo(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Wg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Il = {};
function cb(e) {
  Il = e;
}
function jM() {
  return Il;
}
class AM {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = sm),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const f = lt.now();
        this.renderScheduledAt < f &&
          ((this.renderScheduledAt = f), Ce.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: c } = s;
    ((this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Cc(n)),
      (this.isVariantNode = lb(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const f in d) {
      const p = d[f];
      l[f] !== void 0 && tt(p) && p.set(l[f]);
    }
  }
  mount(t) {
    var n;
    ((this.current = t),
      TM.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
      this.isVariantNode &&
      !this.isControllingVariants &&
      (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, i) => this.bindToMotionValue(i, r)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (ab.current || kM(), (this.shouldReduceMotion = cf.current)),
      (n = this.parent) == null || n.addChild(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    var t;
    (this.projection && this.projection.unmount(),
      jr(this.notifyUpdate),
      jr(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Ao.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (s) => {
      ((this.latestValues[t] = s),
        this.props.onUpdate && Ce.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let o;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), o && o(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Il) {
      const n = Il[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
          this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ve();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < Wg.length; r++) {
      const i = Wg[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
          delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    ((this.prevMotionValues = PM(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
      n !== void 0 &&
      ((r = xo(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
      (typeof r == "string" && (d1(r) || p1(r))
        ? (r = parseFloat(r))
        : !CM(r) && Ar.test(n) && (r = J1(t, n)),
        this.setBaseTarget(t, tt(r) ? r.get() : r)),
      tt(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var o;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = cm(
        this.props,
        n,
        (o = this.presenceContext) == null ? void 0 : o.custom,
      );
      s && (r = s[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !tt(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new Yp()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    fm.render(this.render);
  }
}
class Dr {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() { }
}
class ub extends AM {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = mM));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    tt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function db({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function RM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function NM(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function vu(e) {
  return e === void 0 || e === 1;
}
function uf({ scale: e, scaleX: t, scaleY: n }) {
  return !vu(e) || !vu(t) || !vu(n);
}
function Wr(e) {
  return (
    uf(e) ||
    fb(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function fb(e) {
  return Hg(e.x) || Hg(e.y);
}
function Hg(e) {
  return e && e !== "0%";
}
function Ll(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Kg(e, t, n, r, i) {
  return (i !== void 0 && (e = Ll(e, i, r)), Ll(e, n, r) + t);
}
function df(e, t = 0, n = 1, r, i) {
  ((e.min = Kg(e.min, t, n, r, i)), (e.max = Kg(e.max, t, n, r, i)));
}
function pb(e, { x: t, y: n }) {
  (df(e.x, t.translate, t.scale, t.originPoint),
    df(e.y, n.translate, n.scale, n.originPoint));
}
const Gg = 0.999999999999,
  qg = 1.0000000000001;
function MM(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    ((o = n[a]), (s = o.projectionDelta));
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        $i(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
        s && ((t.x *= s.x.scale), (t.y *= s.y.scale), pb(e, s)),
        r && Wr(o.latestValues) && $i(e, o.latestValues));
  }
  (t.x < qg && t.x > Gg && (t.x = 1), t.y < qg && t.y > Gg && (t.y = 1));
}
function Bi(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Yg(e, t, n, r, i = 0.5) {
  const o = Ae(e.min, e.max, i);
  df(e, t, n, o, r);
}
function $i(e, t) {
  (Yg(e.x, t.x, t.scaleX, t.scale, t.originX),
    Yg(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function mb(e, t) {
  return db(NM(e.getBoundingClientRect(), t));
}
function DM(e, t, n) {
  const r = mb(e, n),
    { scroll: i } = t;
  return (i && (Bi(r.x, i.offset.x), Bi(r.y, i.offset.y)), r);
}
const OM = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective",
},
  IM = jo.length;
function LM(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < IM; o++) {
    const s = jo[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
        !l || n)
    ) {
      const c = eb(a, dm[s]);
      if (!l) {
        i = !1;
        const u = OM[s] || s;
        r += `${u}(${c}) `;
      }
      n && (t[s] = c);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r);
}
function gm(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if (Ao.has(l)) {
      s = !0;
      continue;
    } else if (P1(l)) {
      i[l] = c;
      continue;
    } else {
      const u = eb(c, dm[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = u)) : (r[l] = u);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = LM(t, e.transform, n))
        : r.transform && (r.transform = "none")),
      a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = o;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
function hb(e, { style: t, vars: n }, r, i) {
  const o = e.style;
  let s;
  for (s in t) o[s] = t[s];
  i == null || i.applyProjectionStyles(o, r);
  for (s in n) o.setProperty(s, n[s]);
}
function Qg(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Wo = {
  correct: (e, t) => {
    if (!t.target) return e;
    if (typeof e == "string")
      if (B.test(e)) e = parseFloat(e);
      else return e;
    const n = Qg(e, t.target.x),
      r = Qg(e, t.target.y);
    return `${n}% ${r}%`;
  },
},
  _M = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ar.parse(e);
      if (i.length > 5) return r;
      const o = Ar.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + s] /= a), (i[1 + s] /= l));
      const c = Ae(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= c),
        typeof i[3 + s] == "number" && (i[3 + s] /= c),
        o(i)
      );
    },
  },
  ff = {
    borderRadius: {
      ...Wo,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Wo,
    borderTopRightRadius: Wo,
    borderBottomLeftRadius: Wo,
    borderBottomRightRadius: Wo,
    boxShadow: _M,
  };
function gb(e, { layout: t, layoutId: n }) {
  return (
    Ao.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ff[e] || e === "opacity"))
  );
}
function vm(e, t, n) {
  var s;
  const r = e.style,
    i = t == null ? void 0 : t.style,
    o = {};
  if (!r) return o;
  for (const a in r)
    (tt(r[a]) ||
      (i && tt(i[a])) ||
      gb(a, e) ||
      ((s = n == null ? void 0 : n.getValue(a)) == null
        ? void 0
        : s.liveStyle) !== void 0) &&
      (o[a] = r[a]);
  return o;
}
function FM(e) {
  return window.getComputedStyle(e);
}
class VM extends ub {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = hb));
  }
  readValueFromInstance(t, n) {
    var r;
    if (Ao.has(n))
      return (r = this.projection) != null && r.isProjecting ? Zd(n) : mN(t, n);
    {
      const i = FM(t),
        o = (P1(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return mb(t, n);
  }
  build(t, n, r) {
    gm(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return vm(t, n, r);
  }
}
const zM = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  BM = { offset: "strokeDashoffset", array: "strokeDasharray" };
function $M(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? zM : BM;
  e[o.offset] = B.transform(-r);
  const s = B.transform(t),
    a = B.transform(n);
  e[o.array] = `${s} ${a}`;
}
const UM = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function vb(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: o = 1,
    pathOffset: s = 0,
    ...a
  },
  l,
  c,
  u,
) {
  if ((gm(e, a, c), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: d, style: f } = e;
  (d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
    ((f.transformOrigin = d.transformOrigin ?? "50% 50%"),
      delete d.transformOrigin),
    f.transform &&
    ((f.transformBox = (u == null ? void 0 : u.transformBox) ?? "fill-box"),
      delete d.transformBox));
  for (const p of UM) d[p] !== void 0 && ((f[p] = d[p]), delete d[p]);
  (t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && $M(d, i, o, s, !1));
}
const yb = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]),
  xb = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function WM(e, t, n, r) {
  hb(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(yb.has(i) ? i : um(i), t.attrs[i]);
}
function wb(e, t, n) {
  const r = vm(e, t, n);
  for (const i in e)
    if (tt(e[i]) || tt(t[i])) {
      const o =
        jo.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
class HM extends ub {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ve));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ao.has(n)) {
      const r = Z1(n);
      return (r && r.default) || 0;
    }
    return ((n = yb.has(n) ? n : um(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return wb(t, n, r);
  }
  build(t, n, r) {
    vb(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    WM(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = xb(t.tagName)), super.mount(t));
  }
}
const KM = hm.length;
function bb(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? bb(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < KM; n++) {
    const r = hm[n],
      i = e.props[r];
    (_s(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function Sb(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const GM = [...mm].reverse(),
  qM = mm.length;
function YM(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => iM(e, n, r)));
}
function QM(e) {
  let t = YM(e),
    n = Xg(),
    r = !0;
  const i = (l) => (c, u) => {
    var f;
    const d = Zi(
      e,
      u,
      l === "exit"
        ? (f = e.presenceContext) == null
          ? void 0
          : f.custom
        : void 0,
    );
    if (d) {
      const { transition: p, transitionEnd: b, ...m } = d;
      c = { ...c, ...m, ...b };
    }
    return c;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: c } = e,
      u = bb(e.parent) || {},
      d = [],
      f = new Set();
    let p = {},
      b = 1 / 0;
    for (let w = 0; w < qM; w++) {
      const y = GM[w],
        v = n[y],
        x = c[y] !== void 0 ? c[y] : u[y],
        S = _s(x),
        C = y === l ? v.isActive : null;
      C === !1 && (b = w);
      let k = x === u[y] && x !== c[y] && S;
      if (
        (k && r && e.manuallyAnimateOnMount && (k = !1),
          (v.protectedKeys = { ...p }),
          (!v.isActive && C === null) ||
          (!x && !v.prevProp) ||
          Sc(x) ||
          typeof x == "boolean")
      )
        continue;
      const E = XM(v.prevProp, x);
      let T = E || (y === l && v.isActive && !k && S) || (w > b && S),
        R = !1;
      const N = Array.isArray(x) ? x : [x];
      let z = N.reduce(i(y), {});
      C === !1 && (z = {});
      const { prevResolvedValues: I = {} } = v,
        K = { ...I, ...z },
        M = (F) => {
          ((T = !0),
            f.has(F) && ((R = !0), f.delete(F)),
            (v.needsAnimating[F] = !0));
          const P = e.getValue(F);
          P && (P.liveStyle = !1);
        };
      for (const F in K) {
        const P = z[F],
          j = I[F];
        if (p.hasOwnProperty(F)) continue;
        let L = !1;
        (of(P) && of(j) ? (L = !Sb(P, j)) : (L = P !== j),
          L
            ? P != null
              ? M(F)
              : f.add(F)
            : P !== void 0 && f.has(F)
              ? M(F)
              : (v.protectedKeys[F] = !0));
      }
      ((v.prevProp = x),
        (v.prevResolvedValues = z),
        v.isActive && (p = { ...p, ...z }),
        r && e.blockInitialAnimation && (T = !1));
      const W = k && E;
      T &&
        (!W || R) &&
        d.push(
          ...N.map((F) => {
            const P = { type: y };
            if (
              typeof F == "string" &&
              r &&
              !W &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: j } = e,
                L = Zi(j, F);
              if (j.enteringChildren && L) {
                const { delayChildren: G } = L.transition || {};
                P.delay = H1(j.enteringChildren, e, G);
              }
            }
            return { animation: F, options: P };
          }),
        );
    }
    if (f.size) {
      const w = {};
      if (typeof c.initial != "boolean") {
        const y = Zi(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        y && y.transition && (w.transition = y.transition);
      }
      (f.forEach((y) => {
        const v = e.getBaseTarget(y),
          x = e.getValue(y);
        (x && (x.liveStyle = !0), (w[y] = v ?? null));
      }),
        d.push({ animation: w }));
    }
    let m = !!d.length;
    return (
      r &&
      (c.initial === !1 || c.initial === c.animate) &&
      !e.manuallyAnimateOnMount &&
      (m = !1),
      (r = !1),
      m ? t(d) : Promise.resolve()
    );
  }
  function a(l, c) {
    var d;
    if (n[l].isActive === c) return Promise.resolve();
    ((d = e.variantChildren) == null ||
      d.forEach((f) => {
        var p;
        return (p = f.animationState) == null ? void 0 : p.setActive(l, c);
      }),
      (n[l].isActive = c));
    const u = s(l);
    for (const f in n) n[f].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Xg();
    },
  };
}
function XM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Sb(t, e) : !1;
}
function Br(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Xg() {
  return {
    animate: Br(!0),
    whileInView: Br(),
    whileHover: Br(),
    whileTap: Br(),
    whileDrag: Br(),
    whileFocus: Br(),
    exit: Br(),
  };
}
const Cb = 1e-4,
  ZM = 1 - Cb,
  JM = 1 + Cb,
  Eb = 0.01,
  eD = 0 - Eb,
  tD = 0 + Eb;
function ct(e) {
  return e.max - e.min;
}
function nD(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Zg(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = Ae(t.min, t.max, e.origin)),
    (e.scale = ct(n) / ct(t)),
    (e.translate = Ae(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= ZM && e.scale <= JM) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= eD && e.translate <= tD) || isNaN(e.translate)) &&
    (e.translate = 0));
}
function us(e, t, n, r) {
  (Zg(e.x, t.x, n.x, r ? r.originX : void 0),
    Zg(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Jg(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + ct(t)));
}
function rD(e, t, n) {
  (Jg(e.x, t.x, n.x), Jg(e.y, t.y, n.y));
}
function ev(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + ct(t)));
}
function _l(e, t, n) {
  (ev(e.x, t.x, n.x), ev(e.y, t.y, n.y));
}
function tv(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Ll(e, 1 / n, r)),
    i !== void 0 && (e = Ll(e, 1 / i, r)),
    e
  );
}
function iD(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Tn.test(t) &&
      ((t = parseFloat(t)), (t = Ae(s.min, s.max, t / 100) - s.min)),
      typeof t != "number")
  )
    return;
  let a = Ae(o.min, o.max, r);
  (e === o && (a -= t),
    (e.min = tv(e.min, t, n, a, i)),
    (e.max = tv(e.max, t, n, a, i)));
}
function nv(e, t, [n, r, i], o, s) {
  iD(e, t[n], t[r], t[i], t.scale, o, s);
}
const oD = ["x", "scaleX", "originX"],
  sD = ["y", "scaleY", "originY"];
function rv(e, t, n, r) {
  (nv(e.x, t, oD, n ? n.x : void 0, r ? r.x : void 0),
    nv(e.y, t, sD, n ? n.y : void 0, r ? r.y : void 0));
}
function iv(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Yt(e, t) {
  (iv(e.x, t.x), iv(e.y, t.y));
}
function ov(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function sv(e) {
  return e.translate === 0 && e.scale === 1;
}
function kb(e) {
  return sv(e.x) && sv(e.y);
}
function av(e, t) {
  return e.min === t.min && e.max === t.max;
}
function aD(e, t) {
  return av(e.x, t.x) && av(e.y, t.y);
}
function lv(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Tb(e, t) {
  return lv(e.x, t.x) && lv(e.y, t.y);
}
function cv(e) {
  return ct(e.x) / ct(e.y);
}
function uv(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function Rt(e) {
  return [e("x"), e("y")];
}
function lD(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
      (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
      n)
  ) {
    const {
      transformPerspective: c,
      rotate: u,
      rotateX: d,
      rotateY: f,
      skewX: p,
      skewY: b,
    } = n;
    (c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      p && (r += `skewX(${p}deg) `),
      b && (r += `skewY(${b}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const Pb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  cD = Pb.length,
  dv = (e) => (typeof e == "string" ? parseFloat(e) : e),
  fv = (e) => typeof e == "number" || B.test(e);
function uD(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Ae(0, n.opacity ?? 1, dD(r))),
      (e.opacityExit = Ae(t.opacity ?? 1, 0, fD(r))))
    : o && (e.opacity = Ae(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < cD; s++) {
    const a = `border${Pb[s]}Radius`;
    let l = pv(t, a),
      c = pv(n, a);
    if (l === void 0 && c === void 0) continue;
    (l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || fv(l) === fv(c)
        ? ((e[a] = Math.max(Ae(dv(l), dv(c), r), 0)),
          (Tn.test(c) || Tn.test(l)) && (e[a] += "%"))
        : (e[a] = c));
  }
  (t.rotate || n.rotate) && (e.rotate = Ae(t.rotate || 0, n.rotate || 0, r));
}
function pv(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const dD = jb(0, 0.5, b1),
  fD = jb(0.5, 0.95, _t);
function jb(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Os(e, t, r)));
}
function pD(e, t) {
  const n = lt.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (jr(r), e(o - t));
    };
  return (Ce.setup(r, !0), () => jr(r));
}
function Fs(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function Xa(e) {
  return tt(e) ? e.get() : e;
}
function mD(e, t, n) {
  const r = tt(e) ? e : xo(e);
  return (r.start(lm("", r, t, n)), r.animation);
}
const hD = (e, t) => e.depth - t.depth;
class gD {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Kp(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Gp(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(hD),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
class vD {
  constructor() {
    this.members = [];
  }
  add(t) {
    (Kp(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (Gp(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
        ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
const Za = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  yu = ["", "X", "Y", "Z"],
  yD = 1e3;
let xD = 0;
function xu(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ab(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = q1(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ce, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Ab(r);
}
function Rb({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      ((this.id = xD++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(SD),
            this.nodes.forEach(TD),
            this.nodes.forEach(PD),
            this.nodes.forEach(CD));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new gD());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Yp()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s) {
      if (this.instance) return;
      ((this.isSVG = sb(s) && !bM(s)), (this.instance = s));
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
          e)
      ) {
        let u,
          d = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        (Ce.read(() => {
          d = window.innerWidth;
        }),
          e(s, () => {
            const p = window.innerWidth;
            p !== d &&
              ((d = p),
                (this.root.updateBlockedByResize = !0),
                u && u(),
                (u = pD(f, 250)),
                Za.hasAnimatedSinceResize &&
                ((Za.hasAnimatedSinceResize = !1), this.nodes.forEach(gv)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
        c &&
        (a || l) &&
        this.addEventListener(
          "didUpdate",
          ({
            delta: u,
            hasLayoutChanged: d,
            hasRelativeLayoutChanged: f,
            layout: p,
          }) => {
            if (this.isTreeAnimationBlocked()) {
              ((this.target = void 0), (this.relativeTarget = void 0));
              return;
            }
            const b =
              this.options.transition || c.getDefaultTransition() || MD,
              { onLayoutAnimationStart: m, onLayoutAnimationComplete: w } =
                c.getProps(),
              y = !this.targetLayout || !Tb(this.targetLayout, p),
              v = !d && f;
            if (
              this.options.layoutRoot ||
              this.resumeFrom ||
              v ||
              (d && (y || !this.currentAnimation))
            ) {
              this.resumeFrom &&
                ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
              const x = { ...am(b, "layout"), onPlay: m, onComplete: w };
              ((c.shouldReduceMotion || this.options.layoutRoot) &&
                ((x.delay = 0), (x.type = !1)),
                this.startAnimation(x),
                this.setAnimationOrigin(u, v));
            } else
              (d || gv(this),
                this.isLead() &&
                this.options.onExitComplete &&
                this.options.onExitComplete());
            this.targetLayout = p;
          },
        ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const s = this.getStack();
      (s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        jr(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(jD),
          this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Ab(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        ((d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = c
        ? c(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(mv));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(hv);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(kD),
            this.nodes.forEach(wD),
            this.nodes.forEach(bD))
          : this.nodes.forEach(hv),
        this.clearAllSnapshots());
      const a = lt.now();
      ((Ke.delta = jn(0, 1e3 / 60, a - Ke.timestamp)),
        (Ke.timestamp = a),
        (Ke.isProcessing = !0),
        uu.update.process(Ke),
        uu.preRender.process(Ke),
        uu.render.process(Ke),
        (Ke.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), fm.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(ED), this.sharedNodes.forEach(AD));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
          Ce.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ce.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
          this.snapshot &&
          !ct(this.snapshot.measuredBox.x) &&
          !ct(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = Ve()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
          a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
        this.isLayoutDirty ||
        this.shouldResetTransform ||
        this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !kb(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      s &&
        this.instance &&
        (a || Wr(this.latestValues) || u) &&
        (i(this.instance, c),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        DD(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var c;
      const { visualElement: s } = this.options;
      if (!s) return Ve();
      const a = s.measureViewportBox();
      if (
        !(
          ((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(OD)
        )
      ) {
        const { scroll: u } = this.root;
        u && (Bi(a.x, u.offset.x), Bi(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = Ve();
      if ((Yt(a, s), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c],
          { scroll: d, options: f } = u;
        u !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && Yt(a, s), Bi(a.x, d.offset.x), Bi(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = Ve();
      Yt(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        (!a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          $i(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          Wr(u.latestValues) && $i(l, u.latestValues));
      }
      return (Wr(this.latestValues) && $i(l, this.latestValues), l);
    }
    removeTransform(s) {
      const a = Ve();
      Yt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Wr(c.latestValues)) continue;
        uf(c.latestValues) && c.updateSnapshot();
        const u = Ve(),
          d = c.measurePageBox();
        (Yt(u, d),
          rv(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u));
      }
      return (Wr(this.latestValues) && rv(a, this.latestValues), a);
    }
    setTargetDelta(s) {
      ((this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ke.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var p;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
        (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((p = this.parent) != null && p.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: u, layoutId: d } = this.options;
      if (!this.layout || !(u || d)) return;
      this.resolvedRelativeTargetAt = Ke.timestamp;
      const f = this.getClosestProjectingParent();
      (f &&
        this.linkedParentVersion !== f.layoutVersion &&
        !f.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
        !this.relativeTarget &&
        (f && f.layout
          ? this.createRelativeTarget(
            f,
            this.layout.layoutBox,
            f.layout.layoutBox,
          )
          : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
        (this.target ||
          ((this.target = Ve()), (this.targetWithTransforms = Ve())),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              rD(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Yt(this.target, this.layout.layoutBox),
                pb(this.target, this.targetDelta))
              : Yt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
          ((this.attemptToResolveRelativeTarget = !1),
            f &&
              !!f.resumingFrom == !!this.resumingFrom &&
              !f.options.layoutScroll &&
              f.target &&
              this.animationProgress !== 1
              ? this.createRelativeTarget(f, this.target, f.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          uf(this.parent.latestValues) ||
          fb(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(s, a, l) {
      ((this.relativeParent = s),
        (this.linkedParentVersion = s.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Ve()),
        (this.relativeTargetOrigin = Ve()),
        _l(this.relativeTargetOrigin, a, l),
        Yt(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var b;
      const s = this.getLead(),
        a = !!this.resumingFrom || this !== s;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((b = this.parent) != null && b.isProjectionDirty)) &&
          (l = !1),
          a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
          this.resolvedRelativeTargetAt === Ke.timestamp && (l = !1),
          l)
      )
        return;
      const { layout: c, layoutId: u } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
          this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(c || u))
      )
        return;
      Yt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      (MM(this.layoutCorrected, this.treeScale, this.path, a),
        s.layout &&
        !s.target &&
        (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
        ((s.target = s.layout.layoutBox), (s.targetWithTransforms = Ve())));
      const { target: p } = s;
      if (!p) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ov(this.prevProjectionDelta.x, this.projectionDelta.x),
          ov(this.prevProjectionDelta.y, this.projectionDelta.y)),
        us(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !uv(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !uv(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
        ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", p)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = zi()),
        (this.projectionDelta = zi()),
        (this.projectionDeltaWithTransform = zi()));
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        d = zi();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const f = Ve(),
        p = l ? l.source : void 0,
        b = this.layout ? this.layout.source : void 0,
        m = p !== b,
        w = this.getStack(),
        y = !w || w.members.length <= 1,
        v = !!(m && !y && this.options.crossfade === !0 && !this.path.some(ND));
      this.animationProgress = 0;
      let x;
      ((this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        (vv(d.x, s.x, C),
          vv(d.y, s.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.layout &&
          this.relativeParent &&
          this.relativeParent.layout &&
          (_l(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            RD(this.relativeTarget, this.relativeTargetOrigin, f, C),
            x && aD(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = Ve()),
            Yt(x, this.relativeTarget)),
          m &&
          ((this.animationValues = u), uD(u, c, this.latestValues, C, v, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(s) {
      var a, l, c;
      (this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
        null || c.stop(),
        this.pendingAnimation &&
        (jr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ce.update(() => {
          ((Za.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = xo(0)),
            (this.currentAnimation = mD(this.motionValue, [0, 1e3], {
              ...s,
              velocity: 0,
              isSync: !0,
              onUpdate: (u) => {
                (this.mixTargetDelta(u), s.onUpdate && s.onUpdate(u));
              },
              onStop: () => { },
              onComplete: () => {
                (s.onComplete && s.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
            (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      (s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
          void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(yD),
          this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u,
      } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          Nb(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || Ve();
          const d = ct(this.layout.layoutBox.x);
          ((l.x.min = s.target.x.min), (l.x.max = l.x.min + d));
          const f = ct(this.layout.layoutBox.y);
          ((l.y.min = s.target.y.min), (l.y.max = l.y.min + f));
        }
        (Yt(a, l),
          $i(a, u),
          us(this.projectionDeltaWithTransform, this.layoutCorrected, a, u));
      }
    }
    registerSharedNode(s, a) {
      (this.sharedNodes.has(s) || this.sharedNodes.set(s, new vD()),
        this.sharedNodes.get(s).add(a));
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      (c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
          !a)
      )
        return;
      const c = {};
      l.z && xu("z", s, c, this.animationValues);
      for (let u = 0; u < yu.length; u++)
        (xu(`rotate${yu[u]}`, s, c, this.animationValues),
          xu(`skew${yu[u]}`, s, c, this.animationValues));
      s.render();
      for (const u in c)
        (s.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]));
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (s.visibility = ""),
          (s.opacity = ""),
          (s.pointerEvents = Xa(a == null ? void 0 : a.pointerEvents) || ""),
          (s.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        (this.options.layoutId &&
          ((s.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
            (s.pointerEvents = Xa(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
          !Wr(this.latestValues) &&
          ((s.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      s.visibility = "";
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let d = lD(this.projectionDeltaWithTransform, this.treeScale, u);
      (l && (d = l(u, d)), (s.transform = d));
      const { x: f, y: p } = this.projectionDelta;
      ((s.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`),
        c.animationValues
          ? (s.opacity =
            c === this
              ? (u.opacity ?? this.latestValues.opacity ?? 1)
              : this.preserveOpacity
                ? this.latestValues.opacity
                : u.opacityExit)
          : (s.opacity =
            c === this
              ? u.opacity !== void 0
                ? u.opacity
                : ""
              : u.opacityExit !== void 0
                ? u.opacityExit
                : 0));
      for (const b in ff) {
        if (u[b] === void 0) continue;
        const { correct: m, applyTo: w, isCSSVariable: y } = ff[b],
          v = d === "none" ? u[b] : m(u[b], c);
        if (w) {
          const x = w.length;
          for (let S = 0; S < x; S++) s[w[S]] = v;
        } else
          y ? (this.options.visualElement.renderState.vars[b] = v) : (s[b] = v);
      }
      this.options.layoutId &&
        (s.pointerEvents =
          c === this ? Xa(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(mv),
        this.root.sharedNodes.clear());
    }
  };
}
function wD(e) {
  e.updateLayout();
}
function bD(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = t.source !== e.layout.source;
    o === "size"
      ? Rt((d) => {
        const f = s ? t.measuredBox[d] : t.layoutBox[d],
          p = ct(f);
        ((f.min = r[d].min), (f.max = f.min + p));
      })
      : Nb(o, t.layoutBox, r) &&
      Rt((d) => {
        const f = s ? t.measuredBox[d] : t.layoutBox[d],
          p = ct(r[d]);
        ((f.max = f.min + p),
          e.relativeTarget &&
          !e.currentAnimation &&
          ((e.isProjectionDirty = !0),
            (e.relativeTarget[d].max = e.relativeTarget[d].min + p)));
      });
    const a = zi();
    us(a, r, t.layoutBox);
    const l = zi();
    s ? us(l, e.applyTransform(i, !0), t.measuredBox) : us(l, r, t.layoutBox);
    const c = !kb(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const b = Ve();
          _l(b, t.layoutBox, f.layoutBox);
          const m = Ve();
          (_l(m, r, p.layoutBox),
            Tb(b, m) || (u = !0),
            d.options.layoutRoot &&
            ((e.relativeTarget = m),
              (e.relativeTargetOrigin = b),
              (e.relativeParent = d)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function SD(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function CD(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function ED(e) {
  e.clearSnapshot();
}
function mv(e) {
  e.clearMeasurements();
}
function hv(e) {
  e.isLayoutDirty = !1;
}
function kD(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function gv(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function TD(e) {
  e.resolveTargetDelta();
}
function PD(e) {
  e.calcProjection();
}
function jD(e) {
  e.resetSkewAndRotation();
}
function AD(e) {
  e.removeLeadSnapshot();
}
function vv(e, t, n) {
  ((e.translate = Ae(t.translate, 0, n)),
    (e.scale = Ae(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function yv(e, t, n, r) {
  ((e.min = Ae(t.min, n.min, r)), (e.max = Ae(t.max, n.max, r)));
}
function RD(e, t, n, r) {
  (yv(e.x, t.x, n.x, r), yv(e.y, t.y, n.y, r));
}
function ND(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const MD = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  xv = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  wv = xv("applewebkit/") && !xv("chrome/") ? Math.round : _t;
function bv(e) {
  ((e.min = wv(e.min)), (e.max = wv(e.max)));
}
function DD(e) {
  (bv(e.x), bv(e.y));
}
function Nb(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !nD(cv(t), cv(n), 0.2))
  );
}
function OD(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const ID = Rb({
  attachResizeListener: (e, t) => Fs(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop,
  }),
  checkIsScrollRoot: () => !0,
}),
  wu = { current: void 0 },
  Mb = Rb({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!wu.current) {
        const e = new ID({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (wu.current = e));
      }
      return wu.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  ym = g.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function Sv(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function LD(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const o = Sv(i, t);
      return (!n && typeof o == "function" && (n = !0), o);
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const o = r[i];
          typeof o == "function" ? o() : Sv(e[i], null);
        }
      };
  };
}
function _D(...e) {
  return g.useCallback(LD(...e), e);
}
class FD extends g.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent,
        i = (tb(r) && r.offsetWidth) || 0,
        o = this.props.sizeRef.current;
      ((o.height = n.offsetHeight || 0),
        (o.width = n.offsetWidth || 0),
        (o.top = n.offsetTop),
        (o.left = n.offsetLeft),
        (o.right = i - o.width - o.left));
    }
    return null;
  }
  componentDidUpdate() { }
  render() {
    return this.props.children;
  }
}
function VD({ children: e, isPresent: t, anchorX: n, root: r }) {
  var u;
  const i = g.useId(),
    o = g.useRef(null),
    s = g.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: a } = g.useContext(ym),
    l =
      ((u = e.props) == null ? void 0 : u.ref) ?? (e == null ? void 0 : e.ref),
    c = _D(o, l);
  return (
    g.useInsertionEffect(() => {
      const { width: d, height: f, top: p, left: b, right: m } = s.current;
      if (t || !o.current || !d || !f) return;
      const w = n === "left" ? `left: ${b}` : `right: ${m}`;
      o.current.dataset.motionPopId = i;
      const y = document.createElement("style");
      a && (y.nonce = a);
      const v = r ?? document.head;
      return (
        v.appendChild(y),
        y.sheet &&
        y.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${f}px !important;
            ${w}px !important;
            top: ${p}px !important;
          }
        `),
        () => {
          v.contains(y) && v.removeChild(y);
        }
      );
    }, [t]),
    h.jsx(FD, {
      isPresent: t,
      childRef: o,
      sizeRef: s,
      children: g.cloneElement(e, { ref: c }),
    })
  );
}
const zD = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
  anchorX: a,
  root: l,
}) => {
  const c = Hp(BD),
    u = g.useId();
  let d = !0,
    f = g.useMemo(
      () => (
        (d = !1),
        {
          id: u,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (p) => {
            c.set(p, !0);
            for (const b of c.values()) if (!b) return;
            r && r();
          },
          register: (p) => (c.set(p, !1), () => c.delete(p)),
        }
      ),
      [n, c, r],
    );
  return (
    o && d && (f = { ...f }),
    g.useMemo(() => {
      c.forEach((p, b) => c.set(b, !1));
    }, [n]),
    g.useEffect(() => {
      !n && !c.size && r && r();
    }, [n]),
    s === "popLayout" &&
    (e = h.jsx(VD, { isPresent: n, anchorX: a, root: l, children: e })),
    h.jsx(wc.Provider, { value: f, children: e })
  );
};
function BD() {
  return new Map();
}
function Db(e = !0) {
  const t = g.useContext(wc);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = g.useId();
  g.useEffect(() => {
    if (e) return i(o);
  }, [e]);
  const s = g.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const Pa = (e) => e.key || "";
function Cv(e) {
  const t = [];
  return (
    g.Children.forEach(e, (n) => {
      g.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const xm = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  presenceAffectsLayout: i = !0,
  mode: o = "sync",
  propagate: s = !1,
  anchorX: a = "left",
  root: l,
}) => {
  const [c, u] = Db(s),
    d = g.useMemo(() => Cv(e), [e]),
    f = s && !c ? [] : d.map(Pa),
    p = g.useRef(!0),
    b = g.useRef(d),
    m = Hp(() => new Map()),
    w = g.useRef(new Set()),
    [y, v] = g.useState(d),
    [x, S] = g.useState(d);
  u1(() => {
    ((p.current = !1), (b.current = d));
    for (let E = 0; E < x.length; E++) {
      const T = Pa(x[E]);
      f.includes(T)
        ? (m.delete(T), w.current.delete(T))
        : m.get(T) !== !0 && m.set(T, !1);
    }
  }, [x, f.length, f.join("-")]);
  const C = [];
  if (d !== y) {
    let E = [...d];
    for (let T = 0; T < x.length; T++) {
      const R = x[T],
        N = Pa(R);
      f.includes(N) || (E.splice(T, 0, R), C.push(R));
    }
    return (o === "wait" && C.length && (E = C), S(Cv(E)), v(d), null);
  }
  const { forceRender: k } = g.useContext(Wp);
  return h.jsx(h.Fragment, {
    children: x.map((E) => {
      const T = Pa(E),
        R = s && !c ? !1 : d === x || f.includes(T),
        N = () => {
          if (w.current.has(T)) return;
          if ((w.current.add(T), m.has(T))) m.set(T, !0);
          else return;
          let z = !0;
          (m.forEach((I) => {
            I || (z = !1);
          }),
            z &&
            (k == null || k(),
              S(b.current),
              s && (u == null || u()),
              r && r()));
        };
      return h.jsx(
        zD,
        {
          isPresent: R,
          initial: !p.current || n ? void 0 : !1,
          custom: t,
          presenceAffectsLayout: i,
          mode: o,
          root: l,
          onExitComplete: R ? void 0 : N,
          anchorX: a,
          children: E,
        },
        T,
      );
    }),
  });
},
  Ob = g.createContext({ strict: !1 }),
  Ev = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let kv = !1;
function $D() {
  if (kv) return;
  const e = {};
  for (const t in Ev) e[t] = { isEnabled: (n) => Ev[t].some((r) => !!n[r]) };
  (cb(e), (kv = !0));
}
function Ib() {
  return ($D(), jM());
}
function UD(e) {
  const t = Ib();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  cb(t);
}
const WD = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Fl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    WD.has(e)
  );
}
let Lb = (e) => !Fl(e);
function HD(e) {
  typeof e == "function" && (Lb = (t) => (t.startsWith("on") ? !Fl(t) : e(t)));
}
try {
  HD(require("@emotion/is-prop-valid").default);
} catch { }
function KD(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Lb(i) ||
        (n === !0 && Fl(i)) ||
        (!t && !Fl(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
const Ec = g.createContext({});
function GD(e, t) {
  if (Cc(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || _s(n) ? n : void 0,
      animate: _s(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function qD(e) {
  const { initial: t, animate: n } = GD(e, g.useContext(Ec));
  return g.useMemo(() => ({ initial: t, animate: n }), [Tv(t), Tv(n)]);
}
function Tv(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const wm = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function _b(e, t, n) {
  for (const r in t) !tt(t[r]) && !gb(r, n) && (e[r] = t[r]);
}
function YD({ transformTemplate: e }, t) {
  return g.useMemo(() => {
    const n = wm();
    return (gm(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function QD(e, t) {
  const n = e.style || {},
    r = {};
  return (_b(r, n, e), Object.assign(r, YD(e, t)), r);
}
function XD(e, t) {
  const n = {},
    r = QD(e, t);
  return (
    e.drag &&
    e.dragListener !== !1 &&
    ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
    (e.onTap || e.onTapStart || e.whileTap) &&
    (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const Fb = () => ({ ...wm(), attrs: {} });
function ZD(e, t, n, r) {
  const i = g.useMemo(() => {
    const o = Fb();
    return (
      vb(o, t, xb(r), e.transformTemplate, e.style),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    (_b(o, e.style, e), (i.style = { ...o, ...i.style }));
  }
  return i;
}
const JD = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function bm(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(JD.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function eO(e, t, n, { latestValues: r }, i, o = !1, s) {
  const l = ((s ?? bm(e)) ? ZD : XD)(t, r, i, e),
    c = KD(t, typeof e == "string", o),
    u = e !== g.Fragment ? { ...c, ...l, ref: n } : {},
    { children: d } = t,
    f = g.useMemo(() => (tt(d) ? d.get() : d), [d]);
  return g.createElement(e, { ...u, children: f });
}
function tO({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: nO(n, r, i, e), renderState: t() };
}
function nO(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const f in o) i[f] = Xa(o[f]);
  let { initial: s, animate: a } = e;
  const l = Cc(e),
    c = lb(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || s === !1;
  const d = u ? a : s;
  if (d && typeof d != "boolean" && !Sc(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let p = 0; p < f.length; p++) {
      const b = cm(e, f[p]);
      if (b) {
        const { transitionEnd: m, transition: w, ...y } = b;
        for (const v in y) {
          let x = y[v];
          if (Array.isArray(x)) {
            const S = u ? x.length - 1 : 0;
            x = x[S];
          }
          x !== null && (i[v] = x);
        }
        for (const v in m) i[v] = m[v];
      }
    }
  }
  return i;
}
const Vb = (e) => (t, n) => {
  const r = g.useContext(Ec),
    i = g.useContext(wc),
    o = () => tO(e, t, r, i);
  return n ? o() : Hp(o);
},
  rO = Vb({ scrapeMotionValuesFromProps: vm, createRenderState: wm }),
  iO = Vb({ scrapeMotionValuesFromProps: wb, createRenderState: Fb }),
  oO = Symbol.for("motionComponentSymbol");
function sO(e, t, n) {
  const r = g.useRef(n);
  g.useInsertionEffect(() => {
    r.current = n;
  });
  const i = g.useRef(null);
  return g.useCallback(
    (o) => {
      var a;
      (o && ((a = e.onMount) == null || a.call(e, o)),
        t && (o ? t.mount(o) : t.unmount()));
      const s = r.current;
      if (typeof s == "function")
        if (o) {
          const l = s(o);
          typeof l == "function" && (i.current = l);
        } else i.current ? (i.current(), (i.current = null)) : s(o);
      else s && (s.current = o);
    },
    [t],
  );
}
const zb = g.createContext({});
function Qo(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function aO(e, t, n, r, i, o) {
  var w, y;
  const { visualElement: s } = g.useContext(Ec),
    a = g.useContext(Ob),
    l = g.useContext(wc),
    c = g.useContext(ym).reducedMotion,
    u = g.useRef(null);
  ((r = r || a.renderer),
    !u.current &&
    r &&
    (u.current = r(e, {
      visualState: t,
      parent: s,
      props: n,
      presenceContext: l,
      blockInitialAnimation: l ? l.initial === !1 : !1,
      reducedMotionConfig: c,
      isSVG: o,
    })));
  const d = u.current,
    f = g.useContext(zb);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    lO(u.current, n, i, f);
  const p = g.useRef(!1);
  g.useInsertionEffect(() => {
    d && p.current && d.update(n, l);
  });
  const b = n[G1],
    m = g.useRef(
      !!b &&
      !((w = window.MotionHandoffIsComplete) != null && w.call(window, b)) &&
      ((y = window.MotionHasOptimisedAnimation) == null
        ? void 0
        : y.call(window, b)),
    );
  return (
    u1(() => {
      d &&
        ((p.current = !0),
          (window.MotionIsMounted = !0),
          d.updateFeatures(),
          d.scheduleRenderMicrotask(),
          m.current && d.animationState && d.animationState.animateChanges());
    }),
    g.useEffect(() => {
      d &&
        (!m.current && d.animationState && d.animationState.animateChanges(),
          m.current &&
          (queueMicrotask(() => {
            var v;
            (v = window.MotionHandoffMarkAsComplete) == null ||
              v.call(window, b);
          }),
            (m.current = !1)),
          (d.enteringChildren = void 0));
    }),
    d
  );
}
function lO(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
    layoutCrossfade: u,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Bb(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && Qo(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      crossfade: u,
      layoutScroll: l,
      layoutRoot: c,
    }));
}
function Bb(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Bb(e.parent);
}
function bu(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && UD(r);
  const o = n ? n === "svg" : bm(e),
    s = o ? iO : rO;
  function a(c, u) {
    let d;
    const f = { ...g.useContext(ym), ...c, layoutId: cO(c) },
      { isStatic: p } = f,
      b = qD(c),
      m = s(c, p);
    if (!p && c1) {
      uO();
      const w = dO(f);
      ((d = w.MeasureLayout),
        (b.visualElement = aO(e, m, f, i, w.ProjectionNode, o)));
    }
    return h.jsxs(Ec.Provider, {
      value: b,
      children: [
        d && b.visualElement
          ? h.jsx(d, { visualElement: b.visualElement, ...f })
          : null,
        eO(e, c, sO(m, b.visualElement, u), m, p, t, o),
      ],
    });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = g.forwardRef(a);
  return ((l[oO] = e), l);
}
function cO({ layoutId: e }) {
  const t = g.useContext(Wp).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function uO(e, t) {
  g.useContext(Ob).strict;
}
function dO(e) {
  const t = Ib(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const i = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function fO(e, t) {
  if (typeof Proxy > "u") return bu;
  const n = new Map(),
    r = (o, s) => bu(o, s, e, t),
    i = (o, s) => r(o, s);
  return new Proxy(i, {
    get: (o, s) =>
      s === "create"
        ? r
        : (n.has(s) || n.set(s, bu(s, void 0, e, t)), n.get(s)),
  });
}
const pO = (e, t) =>
  (t.isSVG ?? bm(e))
    ? new HM(t)
    : new VM(t, { allowProjection: e !== g.Fragment });
class mO extends Dr {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = QM(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Sc(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this));
  }
}
let hO = 0;
class gO extends Dr {
  constructor() {
    (super(...arguments), (this.id = hO++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() { }
}
const vO = { animation: { Feature: mO }, exit: { Feature: gO } };
function Js(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const yO = (e) => (t) => pm(t) && e(t, Js(t));
function ds(e, t, n, r) {
  return Fs(e, t, yO(n), r);
}
const $b = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Pv = (e, t) => Math.abs(e - t);
function xO(e, t) {
  const n = Pv(e.x, t.x),
    r = Pv(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const jv = new Set(["auto", "scroll"]);
class Ub {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: s = 3,
      element: a,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.scrollPositions = new Map()),
        (this.removeScrollListeners = null),
        (this.onElementScroll = (p) => {
          this.handleScroll(p.target);
        }),
        (this.onWindowScroll = () => {
          this.handleScroll(window);
        }),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          const p = Cu(this.lastMoveEventInfo, this.history),
            b = this.startEvent !== null,
            m = xO(p.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
          if (!b && !m) return;
          const { point: w } = p,
            { timestamp: y } = Ke;
          this.history.push({ ...w, timestamp: y });
          const { onStart: v, onMove: x } = this.handlers;
          (b ||
            (v && v(this.lastMoveEvent, p),
              (this.startEvent = this.lastMoveEvent)),
            x && x(this.lastMoveEvent, p));
        }),
        (this.handlePointerMove = (p, b) => {
          ((this.lastMoveEvent = p),
            (this.lastMoveEventInfo = Su(b, this.transformPagePoint)),
            Ce.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (p, b) => {
          this.end();
          const { onEnd: m, onSessionEnd: w, resumeAnimation: y } = this.handlers;
          if (
            ((this.dragSnapToOrigin || !this.startEvent) && y && y(),
              !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          const v = Cu(
            p.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Su(b, this.transformPagePoint),
            this.history,
          );
          (this.startEvent && m && m(p, v), w && w(p, v));
        }),
        !pm(t))
    )
      return;
    ((this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = s),
      (this.contextWindow = i || window));
    const l = Js(t),
      c = Su(l, this.transformPagePoint),
      { point: u } = c,
      { timestamp: d } = Ke;
    this.history = [{ ...u, timestamp: d }];
    const { onSessionStart: f } = n;
    (f && f(t, Cu(c, this.history)),
      (this.removeListeners = Qs(
        ds(this.contextWindow, "pointermove", this.handlePointerMove),
        ds(this.contextWindow, "pointerup", this.handlePointerUp),
        ds(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      a && this.startScrollTracking(a));
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n;) {
      const r = getComputedStyle(n);
      ((jv.has(r.overflowX) || jv.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, {
        capture: !0,
        passive: !0,
      }),
      window.addEventListener("scroll", this.onWindowScroll, { passive: !0 }),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      i = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      o = { x: i.x - n.x, y: i.y - n.y };
    (o.x === 0 && o.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
        ((this.lastMoveEventInfo.point.x += o.x),
          (this.lastMoveEventInfo.point.y += o.y))
        : this.history.length > 0 &&
        ((this.history[0].x -= o.x), (this.history[0].y -= o.y)),
        this.scrollPositions.set(t, i),
        Ce.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      jr(this.updatePoint));
  }
}
function Su(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Av(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Cu({ point: e }, t) {
  return {
    point: e,
    delta: Av(e, Wb(t)),
    offset: Av(e, wO(t)),
    velocity: bO(t, 0.1),
  };
}
function wO(e) {
  return e[0];
}
function Wb(e) {
  return e[e.length - 1];
}
function bO(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Wb(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > kn(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  const o = It(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
}
function SO(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Ae(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Ae(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Rv(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function CO(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Rv(e.x, n, i), y: Rv(e.y, t, r) };
}
function Nv(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function EO(e, t) {
  return { x: Nv(e.x, t.x), y: Nv(e.y, t.y) };
}
function kO(e, t) {
  let n = 0.5;
  const r = ct(e),
    i = ct(t);
  return (
    i > r
      ? (n = Os(t.min, t.max - r, e.min))
      : r > i && (n = Os(e.min, e.max - i, t.min)),
    jn(0, 1, n)
  );
}
function TO(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const pf = 0.35;
function PO(e = pf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = pf),
    { x: Mv(e, "left", "right"), y: Mv(e, "top", "bottom") }
  );
}
function Mv(e, t, n) {
  return { min: Dv(e, t), max: Dv(e, n) };
}
function Dv(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const jO = new WeakMap();
class AO {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ve()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (d) => {
      n
        ? (this.stopAnimation(), this.snapToCursor(Js(d).point))
        : this.pauseAnimation();
    },
      s = (d, f) => {
        this.stopAnimation();
        const { drag: p, dragPropagation: b, onDragStart: m } = this.getProps();
        if (
          p &&
          !b &&
          (this.openDragLock && this.openDragLock(),
            (this.openDragLock = gM(p)),
            !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
          ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Rt((y) => {
            let v = this.getAxisMotionValue(y).get() || 0;
            if (Tn.test(v)) {
              const { projection: x } = this.visualElement;
              if (x && x.layout) {
                const S = x.layout.layoutBox[y];
                S && (v = ct(S) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[y] = v;
          }),
          m && Ce.postRender(() => m(d, f)),
          sf(this.visualElement, "transform"));
        const { animationState: w } = this.visualElement;
        w && w.setActive("whileDrag", !0);
      },
      a = (d, f) => {
        ((this.latestPointerEvent = d), (this.latestPanInfo = f));
        const {
          dragPropagation: p,
          dragDirectionLock: b,
          onDirectionLock: m,
          onDrag: w,
        } = this.getProps();
        if (!p && !this.openDragLock) return;
        const { offset: y } = f;
        if (b && this.currentDirection === null) {
          ((this.currentDirection = RO(y)),
            this.currentDirection !== null && m && m(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, y),
          this.updateAxis("y", f.point, y),
          this.visualElement.render(),
          w && w(d, f));
      },
      l = (d, f) => {
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          this.stop(d, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      c = () =>
        Rt((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) == null
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Ub(
      t,
      {
        onSessionStart: o,
        onStart: s,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        distanceThreshold: r,
        contextWindow: $b(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !r)) return;
    const { velocity: s } = i;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && Ce.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !ja(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (s = SO(s, this.constraints[t], this.elastic[t])),
      o.set(s));
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (o = this.visualElement.projection) == null
            ? void 0
            : o.layout,
      i = this.constraints;
    (t && Qo(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = CO(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = PO(n)),
      i !== this.constraints &&
      r &&
      this.constraints &&
      !this.hasMutatedConstraints &&
      Rt((s) => {
        this.constraints !== !1 &&
          this.getAxisMotionValue(s) &&
          (this.constraints[s] = TO(r.layoutBox[s], this.constraints[s]));
      }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Qo(t)) return !1;
    const r = t.current;
    yo(
      r !== null,
      "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      "drag-constraints-ref",
    );
    const { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = DM(r, i.root, this.visualElement.getTransformPagePoint());
    let s = EO(i.layout.layoutBox, o);
    if (n) {
      const a = n(RM(s));
      ((this.hasMutatedConstraints = !!a), a && (s = db(a)));
    }
    return s;
  }
  startAnimation(t) {
    const {
      drag: n,
      dragMomentum: r,
      dragElastic: i,
      dragTransition: o,
      dragSnapToOrigin: s,
      onDragTransitionEnd: a,
    } = this.getProps(),
      l = this.constraints || {},
      c = Rt((u) => {
        if (!ja(u, n, this.currentDirection)) return;
        let d = (l && l[u]) || {};
        s && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          p = i ? 40 : 1e7,
          b = {
            type: "inertia",
            velocity: r ? t[u] : 0,
            bounceStiffness: f,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(u, b);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      sf(this.visualElement, t),
      r.start(lm(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Rt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Rt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Rt((n) => {
      const { drag: r } = this.getProps();
      if (!ja(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n],
          l = o.get() || 0;
        o.set(t[n] - Ae(s, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Qo(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Rt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = kO({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Rt((s) => {
        if (!ja(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: c } = this.constraints[s];
        a.set(Ae(l, c, i[s]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    jO.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ds(t, "pointerdown", (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && !ob(l.target) && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Qo(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      Ce.read(r));
    const s = Fs(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Rt((u) => {
              const d = this.getAxisMotionValue(u);
              d &&
                ((this.originPoint[u] += l[u].translate),
                  d.set(d.get() + l[u].translate));
            }),
              this.visualElement.render());
        },
      );
    return () => {
      (s(), n(), o(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = pf,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function ja(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function RO(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class NO extends Dr {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = _t),
      (this.removeListeners = _t),
      (this.controls = new AO(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || _t));
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(),
        t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const Ov = (e) => (t, n) => {
  e && Ce.postRender(() => e(t, n));
};
class MO extends Dr {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = _t));
  }
  onPointerDown(t) {
    this.session = new Ub(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: $b(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Ov(t),
      onStart: Ov(n),
      onMove: r,
      onEnd: (o, s) => {
        (delete this.session, i && Ce.postRender(() => i(o, s)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ds(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Eu = !1;
class DO extends g.Component {
  componentDidMount() {
    const {
      visualElement: t,
      layoutGroup: n,
      switchLayoutGroup: r,
      layoutId: i,
    } = this.props,
      { projection: o } = t;
    (o &&
      (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        Eu && o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Za.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
      layoutDependency: n,
      visualElement: r,
      drag: i,
      isPresent: o,
    } = this.props,
      { projection: s } = r;
    return (
      s &&
      ((s.isPresent = o),
        (Eu = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== o
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
        (o
          ? s.promote()
          : s.relegate() ||
          Ce.postRender(() => {
            const a = s.getStack();
            (!a || !a.members.length) && this.safeToRemove();
          }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
        fm.postRender(() => {
          !t.currentAnimation && t.isLead() && this.safeToRemove();
        }));
  }
  componentWillUnmount() {
    const {
      visualElement: t,
      layoutGroup: n,
      switchLayoutGroup: r,
    } = this.props,
      { projection: i } = t;
    ((Eu = !0),
      i &&
      (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Hb(e) {
  const [t, n] = Db(),
    r = g.useContext(Wp);
  return h.jsx(DO, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: g.useContext(zb),
    isPresent: t,
    safeToRemove: n,
  });
}
const OO = {
  pan: { Feature: MO },
  drag: { Feature: NO, ProjectionNode: Mb, MeasureLayout: Hb },
};
function Iv(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = r[i];
  o && Ce.postRender(() => o(t, Js(t)));
}
class IO extends Dr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = vM(
        t,
        (n, r) => (Iv(this.node, r, "Start"), (i) => Iv(this.node, i, "End")),
      ));
  }
  unmount() { }
}
class LO extends Dr {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
  }
  mount() {
    this.unmount = Qs(
      Fs(this.node.current, "focus", () => this.onFocus()),
      Fs(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() { }
}
function Lv(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = r[i];
  o && Ce.postRender(() => o(t, Js(t)));
}
class _O extends Dr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = wM(
        t,
        (n, r) => (
          Lv(this.node, r, "Start"),
          (i, { success: o }) => Lv(this.node, i, o ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() { }
}
const mf = new WeakMap(),
  ku = new WeakMap(),
  FO = (e) => {
    const t = mf.get(e.target);
    t && t(e);
  },
  VO = (e) => {
    e.forEach(FO);
  };
function zO({ root: e, ...t }) {
  const n = e || document;
  ku.has(n) || ku.set(n, {});
  const r = ku.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(VO, { root: e, ...t })),
    r[i]
  );
}
function BO(e, t, n) {
  const r = zO(t);
  return (
    mf.set(e, n),
    r.observe(e),
    () => {
      (mf.delete(e), r.unobserve(e));
    }
  );
}
const $O = { some: 0, all: 1 };
class UO extends Dr {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : $O[i],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), o && !c && this.hasEnteredView)
        )
          return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState &&
          this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(),
          f = c ? u : d;
        f && f(l);
      };
    return BO(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(WO(t, n)) && this.startObserver();
  }
  unmount() { }
}
function WO({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const HO = {
  inView: { Feature: UO },
  tap: { Feature: _O },
  focus: { Feature: LO },
  hover: { Feature: IO },
},
  KO = { layout: { ProjectionNode: Mb, MeasureLayout: Hb } },
  GO = { ...vO, ...HO, ...OO, ...KO },
  Q = fO(GO, pO),
  qO = Pp(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  vt = g.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, o) => {
      const s = r ? $k : "button";
      return h.jsx(s, {
        className: $e(qO({ variant: t, size: n, className: e })),
        ref: o,
        ...i,
      });
    },
  );
vt.displayName = "Button";
const YO = () =>
  h.jsxs("div", {
    className: "absolute inset-0 overflow-hidden pointer-events-none",
    children: [
      h.jsx(Q.div, {
        className:
          "absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-primary-light/40 to-primary-medium/20 blur-3xl",
        animate: { x: [0, 30, 0], y: [0, -20, 0] },
        transition: { duration: 8, repeat: 1 / 0, ease: "easeInOut" },
      }),
      h.jsx(Q.div, {
        className:
          "absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-accent-cyan/20 to-primary-lightest/30 blur-2xl",
        animate: { x: [0, 40, 0], y: [0, 30, 0] },
        transition: {
          duration: 10,
          repeat: 1 / 0,
          ease: "easeInOut",
          delay: 1,
        },
      }),
      h.jsx(Q.div, {
        className:
          "absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-bl from-accent-teal/15 to-primary-light/25 blur-2xl",
        animate: { x: [0, -25, 0], y: [0, 20, 0] },
        transition: {
          duration: 7,
          repeat: 1 / 0,
          ease: "easeInOut",
          delay: 2,
        },
      }),
      h.jsx(Q.div, {
        className:
          "absolute -bottom-32 left-1/3 w-80 h-80 rounded-full bg-gradient-to-t from-primary-vibrant/10 to-transparent blur-3xl",
        animate: { scale: [1, 1.1, 1] },
        transition: { duration: 6, repeat: 1 / 0, ease: "easeInOut" },
      }),
      h.jsx(Q.div, {
        className:
          "absolute top-20 right-1/4 w-4 h-4 rounded-full bg-primary/30",
        animate: { y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] },
        transition: { duration: 3, repeat: 1 / 0, ease: "easeInOut" },
      }),
      h.jsx(Q.div, {
        className:
          "absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-accent-cyan/40",
        animate: { y: [0, 10, 0], opacity: [0.4, 0.7, 0.4] },
        transition: {
          duration: 4,
          repeat: 1 / 0,
          ease: "easeInOut",
          delay: 0.5,
        },
      }),
      h.jsx(Q.div, {
        className:
          "absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-accent-teal/50",
        animate: { y: [0, -12, 0], opacity: [0.5, 0.8, 0.5] },
        transition: {
          duration: 3.5,
          repeat: 1 / 0,
          ease: "easeInOut",
          delay: 1,
        },
      }),
    ],
  }),
  QO = ({ onStartAnalysis: e }) =>
    h.jsxs("section", {
      className:
        "relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden",
      children: [
        h.jsx(YO, {}),
        h.jsx("div", {
          className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          children: h.jsxs("div", {
            className: "max-w-4xl mx-auto text-center",
            children: [
              h.jsxs(Q.div, {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                className:
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 shadow-sm mb-8",
                children: [
                  h.jsx("span", {
                    className:
                      "flex h-2 w-2 rounded-full bg-success animate-pulse",
                  }),
                  h.jsx("span", {
                    className: "text-body-sm text-foreground-muted",
                    children: "Skin Diagnostics",
                  }),
                ],
              }),
              h.jsxs(Q.h1, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.1 },
                className: "font-heading text-hero-mobile md:text-hero mb-6",
                children: [
                  h.jsx("span", {
                    className: "block text-foreground-heading",
                    children: "Advanced AI",
                  }),
                  h.jsx("span", {
                    className:
                      "block bg-gradient-to-r from-primary to-accent-cyan bg-clip-text text-transparent",
                    children: "Skin Analysis",
                  }),
                ],
              }),
              h.jsx(Q.p, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className:
                  "text-body-lg text-foreground-muted max-w-2xl mx-auto mb-10",
                children:
                  "Get professional-grade skin assessment in seconds. Upload a photo and receive instant, AI-powered insights about your skin health.",
              }),
              h.jsx(Q.div, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.3 },
                children: h.jsxs(vt, {
                  onClick: e,
                  size: "lg",
                  className:
                    "h-14 px-10 text-lg font-semibold accent-gradient text-primary-foreground border-0 shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1",
                  children: [
                    "Start Free Analysis",
                    h.jsx(Uh, { className: "ml-2 h-5 w-5" }),
                  ],
                }),
              }),
              h.jsxs(Q.div, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.4 },
                className:
                  "flex flex-wrap items-center justify-center gap-6 mt-12",
                children: [
                  h.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-body-sm text-foreground-muted",
                    children: [
                      h.jsx(iw, { className: "h-4 w-4 text-success" }),
                      h.jsx("span", { children: "Medical-Grade AI" }),
                    ],
                  }),
                  h.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-body-sm text-foreground-muted",
                    children: [
                      h.jsx(YT, { className: "h-4 w-4 text-success" }),
                      h.jsx("span", { children: "Privacy Protected" }),
                    ],
                  }),
                  h.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-body-sm text-foreground-muted",
                    children: [
                      h.jsx(Uh, { className: "h-4 w-4 text-success" }),
                      h.jsx("span", { children: "Instant Results" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        h.jsx(Q.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1, duration: 0.5 },
          className: "absolute bottom-8 left-1/2 -translate-x-1/2",
          children: h.jsxs(Q.div, {
            animate: { y: [0, 8, 0] },
            transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
            className:
              "flex flex-col items-center gap-2 text-foreground-muted cursor-pointer",
            onClick: e,
            children: [
              h.jsx("span", {
                className: "text-caption",
                children: "Scroll to begin",
              }),
              h.jsx(IT, { className: "h-5 w-5" }),
            ],
          }),
        }),
      ],
    });
var Kb = { exports: {} },
  XO = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  ZO = XO,
  JO = ZO;
function Gb() { }
function qb() { }
qb.resetWarningCache = Gb;
var eI = function () {
  function e(r, i, o, s, a, l) {
    if (l !== JO) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: qb,
    resetWarningCache: Gb,
  };
  return ((n.PropTypes = n), n);
};
Kb.exports = eI();
var tI = Kb.exports;
const ge = Tf(tI);
var wn = function () {
  return (
    (wn =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    wn.apply(this, arguments)
  );
};
function Yb(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function yi(e, t, n, r) {
  function i(o) {
    return o instanceof n
      ? o
      : new n(function (s) {
        s(o);
      });
  }
  return new (n || (n = Promise))(function (o, s) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(a, l);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function nI(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
const rI = new Map([
  ["1km", "application/vnd.1000minds.decision-model+xml"],
  ["3dml", "text/vnd.in3d.3dml"],
  ["3ds", "image/x-3ds"],
  ["3g2", "video/3gpp2"],
  ["3gp", "video/3gp"],
  ["3gpp", "video/3gpp"],
  ["3mf", "model/3mf"],
  ["7z", "application/x-7z-compressed"],
  ["7zip", "application/x-7z-compressed"],
  ["123", "application/vnd.lotus-1-2-3"],
  ["aab", "application/x-authorware-bin"],
  ["aac", "audio/x-acc"],
  ["aam", "application/x-authorware-map"],
  ["aas", "application/x-authorware-seg"],
  ["abw", "application/x-abiword"],
  ["ac", "application/vnd.nokia.n-gage.ac+xml"],
  ["ac3", "audio/ac3"],
  ["acc", "application/vnd.americandynamics.acc"],
  ["ace", "application/x-ace-compressed"],
  ["acu", "application/vnd.acucobol"],
  ["acutc", "application/vnd.acucorp"],
  ["adp", "audio/adpcm"],
  ["aep", "application/vnd.audiograph"],
  ["afm", "application/x-font-type1"],
  ["afp", "application/vnd.ibm.modcap"],
  ["ahead", "application/vnd.ahead.space"],
  ["ai", "application/pdf"],
  ["aif", "audio/x-aiff"],
  ["aifc", "audio/x-aiff"],
  ["aiff", "audio/x-aiff"],
  ["air", "application/vnd.adobe.air-application-installer-package+zip"],
  ["ait", "application/vnd.dvb.ait"],
  ["ami", "application/vnd.amiga.ami"],
  ["amr", "audio/amr"],
  ["apk", "application/vnd.android.package-archive"],
  ["apng", "image/apng"],
  ["appcache", "text/cache-manifest"],
  ["application", "application/x-ms-application"],
  ["apr", "application/vnd.lotus-approach"],
  ["arc", "application/x-freearc"],
  ["arj", "application/x-arj"],
  ["asc", "application/pgp-signature"],
  ["asf", "video/x-ms-asf"],
  ["asm", "text/x-asm"],
  ["aso", "application/vnd.accpac.simply.aso"],
  ["asx", "video/x-ms-asf"],
  ["atc", "application/vnd.acucorp"],
  ["atom", "application/atom+xml"],
  ["atomcat", "application/atomcat+xml"],
  ["atomdeleted", "application/atomdeleted+xml"],
  ["atomsvc", "application/atomsvc+xml"],
  ["atx", "application/vnd.antix.game-component"],
  ["au", "audio/x-au"],
  ["avi", "video/x-msvideo"],
  ["avif", "image/avif"],
  ["aw", "application/applixware"],
  ["azf", "application/vnd.airzip.filesecure.azf"],
  ["azs", "application/vnd.airzip.filesecure.azs"],
  ["azv", "image/vnd.airzip.accelerator.azv"],
  ["azw", "application/vnd.amazon.ebook"],
  ["b16", "image/vnd.pco.b16"],
  ["bat", "application/x-msdownload"],
  ["bcpio", "application/x-bcpio"],
  ["bdf", "application/x-font-bdf"],
  ["bdm", "application/vnd.syncml.dm+wbxml"],
  ["bdoc", "application/x-bdoc"],
  ["bed", "application/vnd.realvnc.bed"],
  ["bh2", "application/vnd.fujitsu.oasysprs"],
  ["bin", "application/octet-stream"],
  ["blb", "application/x-blorb"],
  ["blorb", "application/x-blorb"],
  ["bmi", "application/vnd.bmi"],
  ["bmml", "application/vnd.balsamiq.bmml+xml"],
  ["bmp", "image/bmp"],
  ["book", "application/vnd.framemaker"],
  ["box", "application/vnd.previewsystems.box"],
  ["boz", "application/x-bzip2"],
  ["bpk", "application/octet-stream"],
  ["bpmn", "application/octet-stream"],
  ["bsp", "model/vnd.valve.source.compiled-map"],
  ["btif", "image/prs.btif"],
  ["buffer", "application/octet-stream"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["c", "text/x-c"],
  ["c4d", "application/vnd.clonk.c4group"],
  ["c4f", "application/vnd.clonk.c4group"],
  ["c4g", "application/vnd.clonk.c4group"],
  ["c4p", "application/vnd.clonk.c4group"],
  ["c4u", "application/vnd.clonk.c4group"],
  ["c11amc", "application/vnd.cluetrust.cartomobile-config"],
  ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
  ["cab", "application/vnd.ms-cab-compressed"],
  ["caf", "audio/x-caf"],
  ["cap", "application/vnd.tcpdump.pcap"],
  ["car", "application/vnd.curl.car"],
  ["cat", "application/vnd.ms-pki.seccat"],
  ["cb7", "application/x-cbr"],
  ["cba", "application/x-cbr"],
  ["cbr", "application/x-cbr"],
  ["cbt", "application/x-cbr"],
  ["cbz", "application/x-cbr"],
  ["cc", "text/x-c"],
  ["cco", "application/x-cocoa"],
  ["cct", "application/x-director"],
  ["ccxml", "application/ccxml+xml"],
  ["cdbcmsg", "application/vnd.contact.cmsg"],
  ["cda", "application/x-cdf"],
  ["cdf", "application/x-netcdf"],
  ["cdfx", "application/cdfx+xml"],
  ["cdkey", "application/vnd.mediastation.cdkey"],
  ["cdmia", "application/cdmi-capability"],
  ["cdmic", "application/cdmi-container"],
  ["cdmid", "application/cdmi-domain"],
  ["cdmio", "application/cdmi-object"],
  ["cdmiq", "application/cdmi-queue"],
  ["cdr", "application/cdr"],
  ["cdx", "chemical/x-cdx"],
  ["cdxml", "application/vnd.chemdraw+xml"],
  ["cdy", "application/vnd.cinderella"],
  ["cer", "application/pkix-cert"],
  ["cfs", "application/x-cfs-compressed"],
  ["cgm", "image/cgm"],
  ["chat", "application/x-chat"],
  ["chm", "application/vnd.ms-htmlhelp"],
  ["chrt", "application/vnd.kde.kchart"],
  ["cif", "chemical/x-cif"],
  ["cii", "application/vnd.anser-web-certificate-issue-initiation"],
  ["cil", "application/vnd.ms-artgalry"],
  ["cjs", "application/node"],
  ["cla", "application/vnd.claymore"],
  ["class", "application/octet-stream"],
  ["clkk", "application/vnd.crick.clicker.keyboard"],
  ["clkp", "application/vnd.crick.clicker.palette"],
  ["clkt", "application/vnd.crick.clicker.template"],
  ["clkw", "application/vnd.crick.clicker.wordbank"],
  ["clkx", "application/vnd.crick.clicker"],
  ["clp", "application/x-msclip"],
  ["cmc", "application/vnd.cosmocaller"],
  ["cmdf", "chemical/x-cmdf"],
  ["cml", "chemical/x-cml"],
  ["cmp", "application/vnd.yellowriver-custom-menu"],
  ["cmx", "image/x-cmx"],
  ["cod", "application/vnd.rim.cod"],
  ["coffee", "text/coffeescript"],
  ["com", "application/x-msdownload"],
  ["conf", "text/plain"],
  ["cpio", "application/x-cpio"],
  ["cpp", "text/x-c"],
  ["cpt", "application/mac-compactpro"],
  ["crd", "application/x-mscardfile"],
  ["crl", "application/pkix-crl"],
  ["crt", "application/x-x509-ca-cert"],
  ["crx", "application/x-chrome-extension"],
  ["cryptonote", "application/vnd.rig.cryptonote"],
  ["csh", "application/x-csh"],
  ["csl", "application/vnd.citationstyles.style+xml"],
  ["csml", "chemical/x-csml"],
  ["csp", "application/vnd.commonspace"],
  ["csr", "application/octet-stream"],
  ["css", "text/css"],
  ["cst", "application/x-director"],
  ["csv", "text/csv"],
  ["cu", "application/cu-seeme"],
  ["curl", "text/vnd.curl"],
  ["cww", "application/prs.cww"],
  ["cxt", "application/x-director"],
  ["cxx", "text/x-c"],
  ["dae", "model/vnd.collada+xml"],
  ["daf", "application/vnd.mobius.daf"],
  ["dart", "application/vnd.dart"],
  ["dataless", "application/vnd.fdsn.seed"],
  ["davmount", "application/davmount+xml"],
  ["dbf", "application/vnd.dbf"],
  ["dbk", "application/docbook+xml"],
  ["dcr", "application/x-director"],
  ["dcurl", "text/vnd.curl.dcurl"],
  ["dd2", "application/vnd.oma.dd2+xml"],
  ["ddd", "application/vnd.fujixerox.ddd"],
  ["ddf", "application/vnd.syncml.dmddf+xml"],
  ["dds", "image/vnd.ms-dds"],
  ["deb", "application/x-debian-package"],
  ["def", "text/plain"],
  ["deploy", "application/octet-stream"],
  ["der", "application/x-x509-ca-cert"],
  ["dfac", "application/vnd.dreamfactory"],
  ["dgc", "application/x-dgc-compressed"],
  ["dic", "text/x-c"],
  ["dir", "application/x-director"],
  ["dis", "application/vnd.mobius.dis"],
  ["disposition-notification", "message/disposition-notification"],
  ["dist", "application/octet-stream"],
  ["distz", "application/octet-stream"],
  ["djv", "image/vnd.djvu"],
  ["djvu", "image/vnd.djvu"],
  ["dll", "application/octet-stream"],
  ["dmg", "application/x-apple-diskimage"],
  ["dmn", "application/octet-stream"],
  ["dmp", "application/vnd.tcpdump.pcap"],
  ["dms", "application/octet-stream"],
  ["dna", "application/vnd.dna"],
  ["doc", "application/msword"],
  ["docm", "application/vnd.ms-word.template.macroEnabled.12"],
  [
    "docx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  ["dot", "application/msword"],
  ["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
  [
    "dotx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  ],
  ["dp", "application/vnd.osgi.dp"],
  ["dpg", "application/vnd.dpgraph"],
  ["dra", "audio/vnd.dra"],
  ["drle", "image/dicom-rle"],
  ["dsc", "text/prs.lines.tag"],
  ["dssc", "application/dssc+der"],
  ["dtb", "application/x-dtbook+xml"],
  ["dtd", "application/xml-dtd"],
  ["dts", "audio/vnd.dts"],
  ["dtshd", "audio/vnd.dts.hd"],
  ["dump", "application/octet-stream"],
  ["dvb", "video/vnd.dvb.file"],
  ["dvi", "application/x-dvi"],
  ["dwd", "application/atsc-dwd+xml"],
  ["dwf", "model/vnd.dwf"],
  ["dwg", "image/vnd.dwg"],
  ["dxf", "image/vnd.dxf"],
  ["dxp", "application/vnd.spotfire.dxp"],
  ["dxr", "application/x-director"],
  ["ear", "application/java-archive"],
  ["ecelp4800", "audio/vnd.nuera.ecelp4800"],
  ["ecelp7470", "audio/vnd.nuera.ecelp7470"],
  ["ecelp9600", "audio/vnd.nuera.ecelp9600"],
  ["ecma", "application/ecmascript"],
  ["edm", "application/vnd.novadigm.edm"],
  ["edx", "application/vnd.novadigm.edx"],
  ["efif", "application/vnd.picsel"],
  ["ei6", "application/vnd.pg.osasli"],
  ["elc", "application/octet-stream"],
  ["emf", "image/emf"],
  ["eml", "message/rfc822"],
  ["emma", "application/emma+xml"],
  ["emotionml", "application/emotionml+xml"],
  ["emz", "application/x-msmetafile"],
  ["eol", "audio/vnd.digital-winds"],
  ["eot", "application/vnd.ms-fontobject"],
  ["eps", "application/postscript"],
  ["epub", "application/epub+zip"],
  ["es", "application/ecmascript"],
  ["es3", "application/vnd.eszigno3+xml"],
  ["esa", "application/vnd.osgi.subsystem"],
  ["esf", "application/vnd.epson.esf"],
  ["et3", "application/vnd.eszigno3+xml"],
  ["etx", "text/x-setext"],
  ["eva", "application/x-eva"],
  ["evy", "application/x-envoy"],
  ["exe", "application/octet-stream"],
  ["exi", "application/exi"],
  ["exp", "application/express"],
  ["exr", "image/aces"],
  ["ext", "application/vnd.novadigm.ext"],
  ["ez", "application/andrew-inset"],
  ["ez2", "application/vnd.ezpix-album"],
  ["ez3", "application/vnd.ezpix-package"],
  ["f", "text/x-fortran"],
  ["f4v", "video/mp4"],
  ["f77", "text/x-fortran"],
  ["f90", "text/x-fortran"],
  ["fbs", "image/vnd.fastbidsheet"],
  ["fcdt", "application/vnd.adobe.formscentral.fcdt"],
  ["fcs", "application/vnd.isac.fcs"],
  ["fdf", "application/vnd.fdf"],
  ["fdt", "application/fdt+xml"],
  ["fe_launch", "application/vnd.denovo.fcselayout-link"],
  ["fg5", "application/vnd.fujitsu.oasysgp"],
  ["fgd", "application/x-director"],
  ["fh", "image/x-freehand"],
  ["fh4", "image/x-freehand"],
  ["fh5", "image/x-freehand"],
  ["fh7", "image/x-freehand"],
  ["fhc", "image/x-freehand"],
  ["fig", "application/x-xfig"],
  ["fits", "image/fits"],
  ["flac", "audio/x-flac"],
  ["fli", "video/x-fli"],
  ["flo", "application/vnd.micrografx.flo"],
  ["flv", "video/x-flv"],
  ["flw", "application/vnd.kde.kivio"],
  ["flx", "text/vnd.fmi.flexstor"],
  ["fly", "text/vnd.fly"],
  ["fm", "application/vnd.framemaker"],
  ["fnc", "application/vnd.frogans.fnc"],
  ["fo", "application/vnd.software602.filler.form+xml"],
  ["for", "text/x-fortran"],
  ["fpx", "image/vnd.fpx"],
  ["frame", "application/vnd.framemaker"],
  ["fsc", "application/vnd.fsc.weblaunch"],
  ["fst", "image/vnd.fst"],
  ["ftc", "application/vnd.fluxtime.clip"],
  ["fti", "application/vnd.anser-web-funds-transfer-initiation"],
  ["fvt", "video/vnd.fvt"],
  ["fxp", "application/vnd.adobe.fxp"],
  ["fxpl", "application/vnd.adobe.fxp"],
  ["fzs", "application/vnd.fuzzysheet"],
  ["g2w", "application/vnd.geoplan"],
  ["g3", "image/g3fax"],
  ["g3w", "application/vnd.geospace"],
  ["gac", "application/vnd.groove-account"],
  ["gam", "application/x-tads"],
  ["gbr", "application/rpki-ghostbusters"],
  ["gca", "application/x-gca-compressed"],
  ["gdl", "model/vnd.gdl"],
  ["gdoc", "application/vnd.google-apps.document"],
  ["geo", "application/vnd.dynageo"],
  ["geojson", "application/geo+json"],
  ["gex", "application/vnd.geometry-explorer"],
  ["ggb", "application/vnd.geogebra.file"],
  ["ggt", "application/vnd.geogebra.tool"],
  ["ghf", "application/vnd.groove-help"],
  ["gif", "image/gif"],
  ["gim", "application/vnd.groove-identity-message"],
  ["glb", "model/gltf-binary"],
  ["gltf", "model/gltf+json"],
  ["gml", "application/gml+xml"],
  ["gmx", "application/vnd.gmx"],
  ["gnumeric", "application/x-gnumeric"],
  ["gpg", "application/gpg-keys"],
  ["gph", "application/vnd.flographit"],
  ["gpx", "application/gpx+xml"],
  ["gqf", "application/vnd.grafeq"],
  ["gqs", "application/vnd.grafeq"],
  ["gram", "application/srgs"],
  ["gramps", "application/x-gramps-xml"],
  ["gre", "application/vnd.geometry-explorer"],
  ["grv", "application/vnd.groove-injector"],
  ["grxml", "application/srgs+xml"],
  ["gsf", "application/x-font-ghostscript"],
  ["gsheet", "application/vnd.google-apps.spreadsheet"],
  ["gslides", "application/vnd.google-apps.presentation"],
  ["gtar", "application/x-gtar"],
  ["gtm", "application/vnd.groove-tool-message"],
  ["gtw", "model/vnd.gtw"],
  ["gv", "text/vnd.graphviz"],
  ["gxf", "application/gxf"],
  ["gxt", "application/vnd.geonext"],
  ["gz", "application/gzip"],
  ["gzip", "application/gzip"],
  ["h", "text/x-c"],
  ["h261", "video/h261"],
  ["h263", "video/h263"],
  ["h264", "video/h264"],
  ["hal", "application/vnd.hal+xml"],
  ["hbci", "application/vnd.hbci"],
  ["hbs", "text/x-handlebars-template"],
  ["hdd", "application/x-virtualbox-hdd"],
  ["hdf", "application/x-hdf"],
  ["heic", "image/heic"],
  ["heics", "image/heic-sequence"],
  ["heif", "image/heif"],
  ["heifs", "image/heif-sequence"],
  ["hej2", "image/hej2k"],
  ["held", "application/atsc-held+xml"],
  ["hh", "text/x-c"],
  ["hjson", "application/hjson"],
  ["hlp", "application/winhlp"],
  ["hpgl", "application/vnd.hp-hpgl"],
  ["hpid", "application/vnd.hp-hpid"],
  ["hps", "application/vnd.hp-hps"],
  ["hqx", "application/mac-binhex40"],
  ["hsj2", "image/hsj2"],
  ["htc", "text/x-component"],
  ["htke", "application/vnd.kenameaapp"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["hvd", "application/vnd.yamaha.hv-dic"],
  ["hvp", "application/vnd.yamaha.hv-voice"],
  ["hvs", "application/vnd.yamaha.hv-script"],
  ["i2g", "application/vnd.intergeo"],
  ["icc", "application/vnd.iccprofile"],
  ["ice", "x-conference/x-cooltalk"],
  ["icm", "application/vnd.iccprofile"],
  ["ico", "image/x-icon"],
  ["ics", "text/calendar"],
  ["ief", "image/ief"],
  ["ifb", "text/calendar"],
  ["ifm", "application/vnd.shana.informed.formdata"],
  ["iges", "model/iges"],
  ["igl", "application/vnd.igloader"],
  ["igm", "application/vnd.insors.igm"],
  ["igs", "model/iges"],
  ["igx", "application/vnd.micrografx.igx"],
  ["iif", "application/vnd.shana.informed.interchange"],
  ["img", "application/octet-stream"],
  ["imp", "application/vnd.accpac.simply.imp"],
  ["ims", "application/vnd.ms-ims"],
  ["in", "text/plain"],
  ["ini", "text/plain"],
  ["ink", "application/inkml+xml"],
  ["inkml", "application/inkml+xml"],
  ["install", "application/x-install-instructions"],
  ["iota", "application/vnd.astraea-software.iota"],
  ["ipfix", "application/ipfix"],
  ["ipk", "application/vnd.shana.informed.package"],
  ["irm", "application/vnd.ibm.rights-management"],
  ["irp", "application/vnd.irepository.package+xml"],
  ["iso", "application/x-iso9660-image"],
  ["itp", "application/vnd.shana.informed.formtemplate"],
  ["its", "application/its+xml"],
  ["ivp", "application/vnd.immervision-ivp"],
  ["ivu", "application/vnd.immervision-ivu"],
  ["jad", "text/vnd.sun.j2me.app-descriptor"],
  ["jade", "text/jade"],
  ["jam", "application/vnd.jam"],
  ["jar", "application/java-archive"],
  ["jardiff", "application/x-java-archive-diff"],
  ["java", "text/x-java-source"],
  ["jhc", "image/jphc"],
  ["jisp", "application/vnd.jisp"],
  ["jls", "image/jls"],
  ["jlt", "application/vnd.hp-jlyt"],
  ["jng", "image/x-jng"],
  ["jnlp", "application/x-java-jnlp-file"],
  ["joda", "application/vnd.joost.joda-archive"],
  ["jp2", "image/jp2"],
  ["jpe", "image/jpeg"],
  ["jpeg", "image/jpeg"],
  ["jpf", "image/jpx"],
  ["jpg", "image/jpeg"],
  ["jpg2", "image/jp2"],
  ["jpgm", "video/jpm"],
  ["jpgv", "video/jpeg"],
  ["jph", "image/jph"],
  ["jpm", "video/jpm"],
  ["jpx", "image/jpx"],
  ["js", "application/javascript"],
  ["json", "application/json"],
  ["json5", "application/json5"],
  ["jsonld", "application/ld+json"],
  ["jsonl", "application/jsonl"],
  ["jsonml", "application/jsonml+json"],
  ["jsx", "text/jsx"],
  ["jxr", "image/jxr"],
  ["jxra", "image/jxra"],
  ["jxrs", "image/jxrs"],
  ["jxs", "image/jxs"],
  ["jxsc", "image/jxsc"],
  ["jxsi", "image/jxsi"],
  ["jxss", "image/jxss"],
  ["kar", "audio/midi"],
  ["karbon", "application/vnd.kde.karbon"],
  ["kdb", "application/octet-stream"],
  ["kdbx", "application/x-keepass2"],
  ["key", "application/x-iwork-keynote-sffkey"],
  ["kfo", "application/vnd.kde.kformula"],
  ["kia", "application/vnd.kidspiration"],
  ["kml", "application/vnd.google-earth.kml+xml"],
  ["kmz", "application/vnd.google-earth.kmz"],
  ["kne", "application/vnd.kinar"],
  ["knp", "application/vnd.kinar"],
  ["kon", "application/vnd.kde.kontour"],
  ["kpr", "application/vnd.kde.kpresenter"],
  ["kpt", "application/vnd.kde.kpresenter"],
  ["kpxx", "application/vnd.ds-keypoint"],
  ["ksp", "application/vnd.kde.kspread"],
  ["ktr", "application/vnd.kahootz"],
  ["ktx", "image/ktx"],
  ["ktx2", "image/ktx2"],
  ["ktz", "application/vnd.kahootz"],
  ["kwd", "application/vnd.kde.kword"],
  ["kwt", "application/vnd.kde.kword"],
  ["lasxml", "application/vnd.las.las+xml"],
  ["latex", "application/x-latex"],
  ["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
  ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
  ["les", "application/vnd.hhe.lesson-player"],
  ["less", "text/less"],
  ["lgr", "application/lgr+xml"],
  ["lha", "application/octet-stream"],
  ["link66", "application/vnd.route66.link66+xml"],
  ["list", "text/plain"],
  ["list3820", "application/vnd.ibm.modcap"],
  ["listafp", "application/vnd.ibm.modcap"],
  ["litcoffee", "text/coffeescript"],
  ["lnk", "application/x-ms-shortcut"],
  ["log", "text/plain"],
  ["lostxml", "application/lost+xml"],
  ["lrf", "application/octet-stream"],
  ["lrm", "application/vnd.ms-lrm"],
  ["ltf", "application/vnd.frogans.ltf"],
  ["lua", "text/x-lua"],
  ["luac", "application/x-lua-bytecode"],
  ["lvp", "audio/vnd.lucent.voice"],
  ["lwp", "application/vnd.lotus-wordpro"],
  ["lzh", "application/octet-stream"],
  ["m1v", "video/mpeg"],
  ["m2a", "audio/mpeg"],
  ["m2v", "video/mpeg"],
  ["m3a", "audio/mpeg"],
  ["m3u", "text/plain"],
  ["m3u8", "application/vnd.apple.mpegurl"],
  ["m4a", "audio/x-m4a"],
  ["m4p", "application/mp4"],
  ["m4s", "video/iso.segment"],
  ["m4u", "application/vnd.mpegurl"],
  ["m4v", "video/x-m4v"],
  ["m13", "application/x-msmediaview"],
  ["m14", "application/x-msmediaview"],
  ["m21", "application/mp21"],
  ["ma", "application/mathematica"],
  ["mads", "application/mads+xml"],
  ["maei", "application/mmt-aei+xml"],
  ["mag", "application/vnd.ecowin.chart"],
  ["maker", "application/vnd.framemaker"],
  ["man", "text/troff"],
  ["manifest", "text/cache-manifest"],
  ["map", "application/json"],
  ["mar", "application/octet-stream"],
  ["markdown", "text/markdown"],
  ["mathml", "application/mathml+xml"],
  ["mb", "application/mathematica"],
  ["mbk", "application/vnd.mobius.mbk"],
  ["mbox", "application/mbox"],
  ["mc1", "application/vnd.medcalcdata"],
  ["mcd", "application/vnd.mcd"],
  ["mcurl", "text/vnd.curl.mcurl"],
  ["md", "text/markdown"],
  ["mdb", "application/x-msaccess"],
  ["mdi", "image/vnd.ms-modi"],
  ["mdx", "text/mdx"],
  ["me", "text/troff"],
  ["mesh", "model/mesh"],
  ["meta4", "application/metalink4+xml"],
  ["metalink", "application/metalink+xml"],
  ["mets", "application/mets+xml"],
  ["mfm", "application/vnd.mfmp"],
  ["mft", "application/rpki-manifest"],
  ["mgp", "application/vnd.osgeo.mapguide.package"],
  ["mgz", "application/vnd.proteus.magazine"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mie", "application/x-mie"],
  ["mif", "application/vnd.mif"],
  ["mime", "message/rfc822"],
  ["mj2", "video/mj2"],
  ["mjp2", "video/mj2"],
  ["mjs", "application/javascript"],
  ["mk3d", "video/x-matroska"],
  ["mka", "audio/x-matroska"],
  ["mkd", "text/x-markdown"],
  ["mks", "video/x-matroska"],
  ["mkv", "video/x-matroska"],
  ["mlp", "application/vnd.dolby.mlp"],
  ["mmd", "application/vnd.chipnuts.karaoke-mmd"],
  ["mmf", "application/vnd.smaf"],
  ["mml", "text/mathml"],
  ["mmr", "image/vnd.fujixerox.edmics-mmr"],
  ["mng", "video/x-mng"],
  ["mny", "application/x-msmoney"],
  ["mobi", "application/x-mobipocket-ebook"],
  ["mods", "application/mods+xml"],
  ["mov", "video/quicktime"],
  ["movie", "video/x-sgi-movie"],
  ["mp2", "audio/mpeg"],
  ["mp2a", "audio/mpeg"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mp4a", "audio/mp4"],
  ["mp4s", "application/mp4"],
  ["mp4v", "video/mp4"],
  ["mp21", "application/mp21"],
  ["mpc", "application/vnd.mophun.certificate"],
  ["mpd", "application/dash+xml"],
  ["mpe", "video/mpeg"],
  ["mpeg", "video/mpeg"],
  ["mpg", "video/mpeg"],
  ["mpg4", "video/mp4"],
  ["mpga", "audio/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["mpm", "application/vnd.blueice.multipass"],
  ["mpn", "application/vnd.mophun.application"],
  ["mpp", "application/vnd.ms-project"],
  ["mpt", "application/vnd.ms-project"],
  ["mpy", "application/vnd.ibm.minipay"],
  ["mqy", "application/vnd.mobius.mqy"],
  ["mrc", "application/marc"],
  ["mrcx", "application/marcxml+xml"],
  ["ms", "text/troff"],
  ["mscml", "application/mediaservercontrol+xml"],
  ["mseed", "application/vnd.fdsn.mseed"],
  ["mseq", "application/vnd.mseq"],
  ["msf", "application/vnd.epson.msf"],
  ["msg", "application/vnd.ms-outlook"],
  ["msh", "model/mesh"],
  ["msi", "application/x-msdownload"],
  ["msl", "application/vnd.mobius.msl"],
  ["msm", "application/octet-stream"],
  ["msp", "application/octet-stream"],
  ["msty", "application/vnd.muvee.style"],
  ["mtl", "model/mtl"],
  ["mts", "model/vnd.mts"],
  ["mus", "application/vnd.musician"],
  ["musd", "application/mmt-usd+xml"],
  ["musicxml", "application/vnd.recordare.musicxml+xml"],
  ["mvb", "application/x-msmediaview"],
  ["mvt", "application/vnd.mapbox-vector-tile"],
  ["mwf", "application/vnd.mfer"],
  ["mxf", "application/mxf"],
  ["mxl", "application/vnd.recordare.musicxml"],
  ["mxmf", "audio/mobile-xmf"],
  ["mxml", "application/xv+xml"],
  ["mxs", "application/vnd.triscape.mxs"],
  ["mxu", "video/vnd.mpegurl"],
  ["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
  ["n3", "text/n3"],
  ["nb", "application/mathematica"],
  ["nbp", "application/vnd.wolfram.player"],
  ["nc", "application/x-netcdf"],
  ["ncx", "application/x-dtbncx+xml"],
  ["nfo", "text/x-nfo"],
  ["ngdat", "application/vnd.nokia.n-gage.data"],
  ["nitf", "application/vnd.nitf"],
  ["nlu", "application/vnd.neurolanguage.nlu"],
  ["nml", "application/vnd.enliven"],
  ["nnd", "application/vnd.noblenet-directory"],
  ["nns", "application/vnd.noblenet-sealer"],
  ["nnw", "application/vnd.noblenet-web"],
  ["npx", "image/vnd.net-fpx"],
  ["nq", "application/n-quads"],
  ["nsc", "application/x-conference"],
  ["nsf", "application/vnd.lotus-notes"],
  ["nt", "application/n-triples"],
  ["ntf", "application/vnd.nitf"],
  ["numbers", "application/x-iwork-numbers-sffnumbers"],
  ["nzb", "application/x-nzb"],
  ["oa2", "application/vnd.fujitsu.oasys2"],
  ["oa3", "application/vnd.fujitsu.oasys3"],
  ["oas", "application/vnd.fujitsu.oasys"],
  ["obd", "application/x-msbinder"],
  ["obgx", "application/vnd.openblox.game+xml"],
  ["obj", "model/obj"],
  ["oda", "application/oda"],
  ["odb", "application/vnd.oasis.opendocument.database"],
  ["odc", "application/vnd.oasis.opendocument.chart"],
  ["odf", "application/vnd.oasis.opendocument.formula"],
  ["odft", "application/vnd.oasis.opendocument.formula-template"],
  ["odg", "application/vnd.oasis.opendocument.graphics"],
  ["odi", "application/vnd.oasis.opendocument.image"],
  ["odm", "application/vnd.oasis.opendocument.text-master"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogex", "model/vnd.opengex"],
  ["ogg", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["omdoc", "application/omdoc+xml"],
  ["onepkg", "application/onenote"],
  ["onetmp", "application/onenote"],
  ["onetoc", "application/onenote"],
  ["onetoc2", "application/onenote"],
  ["opf", "application/oebps-package+xml"],
  ["opml", "text/x-opml"],
  ["oprc", "application/vnd.palm"],
  ["opus", "audio/ogg"],
  ["org", "text/x-org"],
  ["osf", "application/vnd.yamaha.openscoreformat"],
  ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
  ["osm", "application/vnd.openstreetmap.data+xml"],
  ["otc", "application/vnd.oasis.opendocument.chart-template"],
  ["otf", "font/otf"],
  ["otg", "application/vnd.oasis.opendocument.graphics-template"],
  ["oth", "application/vnd.oasis.opendocument.text-web"],
  ["oti", "application/vnd.oasis.opendocument.image-template"],
  ["otp", "application/vnd.oasis.opendocument.presentation-template"],
  ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
  ["ott", "application/vnd.oasis.opendocument.text-template"],
  ["ova", "application/x-virtualbox-ova"],
  ["ovf", "application/x-virtualbox-ovf"],
  ["owl", "application/rdf+xml"],
  ["oxps", "application/oxps"],
  ["oxt", "application/vnd.openofficeorg.extension"],
  ["p", "text/x-pascal"],
  ["p7a", "application/x-pkcs7-signature"],
  ["p7b", "application/x-pkcs7-certificates"],
  ["p7c", "application/pkcs7-mime"],
  ["p7m", "application/pkcs7-mime"],
  ["p7r", "application/x-pkcs7-certreqresp"],
  ["p7s", "application/pkcs7-signature"],
  ["p8", "application/pkcs8"],
  ["p10", "application/x-pkcs10"],
  ["p12", "application/x-pkcs12"],
  ["pac", "application/x-ns-proxy-autoconfig"],
  ["pages", "application/x-iwork-pages-sffpages"],
  ["pas", "text/x-pascal"],
  ["paw", "application/vnd.pawaafile"],
  ["pbd", "application/vnd.powerbuilder6"],
  ["pbm", "image/x-portable-bitmap"],
  ["pcap", "application/vnd.tcpdump.pcap"],
  ["pcf", "application/x-font-pcf"],
  ["pcl", "application/vnd.hp-pcl"],
  ["pclxl", "application/vnd.hp-pclxl"],
  ["pct", "image/x-pict"],
  ["pcurl", "application/vnd.curl.pcurl"],
  ["pcx", "image/x-pcx"],
  ["pdb", "application/x-pilot"],
  ["pde", "text/x-processing"],
  ["pdf", "application/pdf"],
  ["pem", "application/x-x509-user-cert"],
  ["pfa", "application/x-font-type1"],
  ["pfb", "application/x-font-type1"],
  ["pfm", "application/x-font-type1"],
  ["pfr", "application/font-tdpfr"],
  ["pfx", "application/x-pkcs12"],
  ["pgm", "image/x-portable-graymap"],
  ["pgn", "application/x-chess-pgn"],
  ["pgp", "application/pgp"],
  ["php", "application/x-httpd-php"],
  ["php3", "application/x-httpd-php"],
  ["php4", "application/x-httpd-php"],
  ["phps", "application/x-httpd-php-source"],
  ["phtml", "application/x-httpd-php"],
  ["pic", "image/x-pict"],
  ["pkg", "application/octet-stream"],
  ["pki", "application/pkixcmp"],
  ["pkipath", "application/pkix-pkipath"],
  ["pkpass", "application/vnd.apple.pkpass"],
  ["pl", "application/x-perl"],
  ["plb", "application/vnd.3gpp.pic-bw-large"],
  ["plc", "application/vnd.mobius.plc"],
  ["plf", "application/vnd.pocketlearn"],
  ["pls", "application/pls+xml"],
  ["pm", "application/x-perl"],
  ["pml", "application/vnd.ctc-posml"],
  ["png", "image/png"],
  ["pnm", "image/x-portable-anymap"],
  ["portpkg", "application/vnd.macports.portpkg"],
  ["pot", "application/vnd.ms-powerpoint"],
  ["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  [
    "potx",
    "application/vnd.openxmlformats-officedocument.presentationml.template",
  ],
  ["ppa", "application/vnd.ms-powerpoint"],
  ["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
  ["ppd", "application/vnd.cups-ppd"],
  ["ppm", "image/x-portable-pixmap"],
  ["pps", "application/vnd.ms-powerpoint"],
  ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
  [
    "ppsx",
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
  ],
  ["ppt", "application/powerpoint"],
  ["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  [
    "pptx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ],
  ["pqa", "application/vnd.palm"],
  ["prc", "application/x-pilot"],
  ["pre", "application/vnd.lotus-freelance"],
  ["prf", "application/pics-rules"],
  ["provx", "application/provenance+xml"],
  ["ps", "application/postscript"],
  ["psb", "application/vnd.3gpp.pic-bw-small"],
  ["psd", "application/x-photoshop"],
  ["psf", "application/x-font-linux-psf"],
  ["pskcxml", "application/pskc+xml"],
  ["pti", "image/prs.pti"],
  ["ptid", "application/vnd.pvi.ptid1"],
  ["pub", "application/x-mspublisher"],
  ["pvb", "application/vnd.3gpp.pic-bw-var"],
  ["pwn", "application/vnd.3m.post-it-notes"],
  ["pya", "audio/vnd.ms-playready.media.pya"],
  ["pyv", "video/vnd.ms-playready.media.pyv"],
  ["qam", "application/vnd.epson.quickanime"],
  ["qbo", "application/vnd.intu.qbo"],
  ["qfx", "application/vnd.intu.qfx"],
  ["qps", "application/vnd.publishare-delta-tree"],
  ["qt", "video/quicktime"],
  ["qwd", "application/vnd.quark.quarkxpress"],
  ["qwt", "application/vnd.quark.quarkxpress"],
  ["qxb", "application/vnd.quark.quarkxpress"],
  ["qxd", "application/vnd.quark.quarkxpress"],
  ["qxl", "application/vnd.quark.quarkxpress"],
  ["qxt", "application/vnd.quark.quarkxpress"],
  ["ra", "audio/x-realaudio"],
  ["ram", "audio/x-pn-realaudio"],
  ["raml", "application/raml+yaml"],
  ["rapd", "application/route-apd+xml"],
  ["rar", "application/x-rar"],
  ["ras", "image/x-cmu-raster"],
  ["rcprofile", "application/vnd.ipunplugged.rcprofile"],
  ["rdf", "application/rdf+xml"],
  ["rdz", "application/vnd.data-vision.rdz"],
  ["relo", "application/p2p-overlay+xml"],
  ["rep", "application/vnd.businessobjects"],
  ["res", "application/x-dtbresource+xml"],
  ["rgb", "image/x-rgb"],
  ["rif", "application/reginfo+xml"],
  ["rip", "audio/vnd.rip"],
  ["ris", "application/x-research-info-systems"],
  ["rl", "application/resource-lists+xml"],
  ["rlc", "image/vnd.fujixerox.edmics-rlc"],
  ["rld", "application/resource-lists-diff+xml"],
  ["rm", "audio/x-pn-realaudio"],
  ["rmi", "audio/midi"],
  ["rmp", "audio/x-pn-realaudio-plugin"],
  ["rms", "application/vnd.jcp.javame.midlet-rms"],
  ["rmvb", "application/vnd.rn-realmedia-vbr"],
  ["rnc", "application/relax-ng-compact-syntax"],
  ["rng", "application/xml"],
  ["roa", "application/rpki-roa"],
  ["roff", "text/troff"],
  ["rp9", "application/vnd.cloanto.rp9"],
  ["rpm", "audio/x-pn-realaudio-plugin"],
  ["rpss", "application/vnd.nokia.radio-presets"],
  ["rpst", "application/vnd.nokia.radio-preset"],
  ["rq", "application/sparql-query"],
  ["rs", "application/rls-services+xml"],
  ["rsa", "application/x-pkcs7"],
  ["rsat", "application/atsc-rsat+xml"],
  ["rsd", "application/rsd+xml"],
  ["rsheet", "application/urc-ressheet+xml"],
  ["rss", "application/rss+xml"],
  ["rtf", "text/rtf"],
  ["rtx", "text/richtext"],
  ["run", "application/x-makeself"],
  ["rusd", "application/route-usd+xml"],
  ["rv", "video/vnd.rn-realvideo"],
  ["s", "text/x-asm"],
  ["s3m", "audio/s3m"],
  ["saf", "application/vnd.yamaha.smaf-audio"],
  ["sass", "text/x-sass"],
  ["sbml", "application/sbml+xml"],
  ["sc", "application/vnd.ibm.secure-container"],
  ["scd", "application/x-msschedule"],
  ["scm", "application/vnd.lotus-screencam"],
  ["scq", "application/scvp-cv-request"],
  ["scs", "application/scvp-cv-response"],
  ["scss", "text/x-scss"],
  ["scurl", "text/vnd.curl.scurl"],
  ["sda", "application/vnd.stardivision.draw"],
  ["sdc", "application/vnd.stardivision.calc"],
  ["sdd", "application/vnd.stardivision.impress"],
  ["sdkd", "application/vnd.solent.sdkm+xml"],
  ["sdkm", "application/vnd.solent.sdkm+xml"],
  ["sdp", "application/sdp"],
  ["sdw", "application/vnd.stardivision.writer"],
  ["sea", "application/octet-stream"],
  ["see", "application/vnd.seemail"],
  ["seed", "application/vnd.fdsn.seed"],
  ["sema", "application/vnd.sema"],
  ["semd", "application/vnd.semd"],
  ["semf", "application/vnd.semf"],
  ["senmlx", "application/senml+xml"],
  ["sensmlx", "application/sensml+xml"],
  ["ser", "application/java-serialized-object"],
  ["setpay", "application/set-payment-initiation"],
  ["setreg", "application/set-registration-initiation"],
  ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
  ["sfs", "application/vnd.spotfire.sfs"],
  ["sfv", "text/x-sfv"],
  ["sgi", "image/sgi"],
  ["sgl", "application/vnd.stardivision.writer-global"],
  ["sgm", "text/sgml"],
  ["sgml", "text/sgml"],
  ["sh", "application/x-sh"],
  ["shar", "application/x-shar"],
  ["shex", "text/shex"],
  ["shf", "application/shf+xml"],
  ["shtml", "text/html"],
  ["sid", "image/x-mrsid-image"],
  ["sieve", "application/sieve"],
  ["sig", "application/pgp-signature"],
  ["sil", "audio/silk"],
  ["silo", "model/mesh"],
  ["sis", "application/vnd.symbian.install"],
  ["sisx", "application/vnd.symbian.install"],
  ["sit", "application/x-stuffit"],
  ["sitx", "application/x-stuffitx"],
  ["siv", "application/sieve"],
  ["skd", "application/vnd.koan"],
  ["skm", "application/vnd.koan"],
  ["skp", "application/vnd.koan"],
  ["skt", "application/vnd.koan"],
  ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
  [
    "sldx",
    "application/vnd.openxmlformats-officedocument.presentationml.slide",
  ],
  ["slim", "text/slim"],
  ["slm", "text/slim"],
  ["sls", "application/route-s-tsid+xml"],
  ["slt", "application/vnd.epson.salt"],
  ["sm", "application/vnd.stepmania.stepchart"],
  ["smf", "application/vnd.stardivision.math"],
  ["smi", "application/smil"],
  ["smil", "application/smil"],
  ["smv", "video/x-smv"],
  ["smzip", "application/vnd.stepmania.package"],
  ["snd", "audio/basic"],
  ["snf", "application/x-font-snf"],
  ["so", "application/octet-stream"],
  ["spc", "application/x-pkcs7-certificates"],
  ["spdx", "text/spdx"],
  ["spf", "application/vnd.yamaha.smaf-phrase"],
  ["spl", "application/x-futuresplash"],
  ["spot", "text/vnd.in3d.spot"],
  ["spp", "application/scvp-vp-response"],
  ["spq", "application/scvp-vp-request"],
  ["spx", "audio/ogg"],
  ["sql", "application/x-sql"],
  ["src", "application/x-wais-source"],
  ["srt", "application/x-subrip"],
  ["sru", "application/sru+xml"],
  ["srx", "application/sparql-results+xml"],
  ["ssdl", "application/ssdl+xml"],
  ["sse", "application/vnd.kodak-descriptor"],
  ["ssf", "application/vnd.epson.ssf"],
  ["ssml", "application/ssml+xml"],
  ["sst", "application/octet-stream"],
  ["st", "application/vnd.sailingtracker.track"],
  ["stc", "application/vnd.sun.xml.calc.template"],
  ["std", "application/vnd.sun.xml.draw.template"],
  ["stf", "application/vnd.wt.stf"],
  ["sti", "application/vnd.sun.xml.impress.template"],
  ["stk", "application/hyperstudio"],
  ["stl", "model/stl"],
  ["stpx", "model/step+xml"],
  ["stpxz", "model/step-xml+zip"],
  ["stpz", "model/step+zip"],
  ["str", "application/vnd.pg.format"],
  ["stw", "application/vnd.sun.xml.writer.template"],
  ["styl", "text/stylus"],
  ["stylus", "text/stylus"],
  ["sub", "text/vnd.dvb.subtitle"],
  ["sus", "application/vnd.sus-calendar"],
  ["susp", "application/vnd.sus-calendar"],
  ["sv4cpio", "application/x-sv4cpio"],
  ["sv4crc", "application/x-sv4crc"],
  ["svc", "application/vnd.dvb.service"],
  ["svd", "application/vnd.svd"],
  ["svg", "image/svg+xml"],
  ["svgz", "image/svg+xml"],
  ["swa", "application/x-director"],
  ["swf", "application/x-shockwave-flash"],
  ["swi", "application/vnd.aristanetworks.swi"],
  ["swidtag", "application/swid+xml"],
  ["sxc", "application/vnd.sun.xml.calc"],
  ["sxd", "application/vnd.sun.xml.draw"],
  ["sxg", "application/vnd.sun.xml.writer.global"],
  ["sxi", "application/vnd.sun.xml.impress"],
  ["sxm", "application/vnd.sun.xml.math"],
  ["sxw", "application/vnd.sun.xml.writer"],
  ["t", "text/troff"],
  ["t3", "application/x-t3vm-image"],
  ["t38", "image/t38"],
  ["taglet", "application/vnd.mynfc"],
  ["tao", "application/vnd.tao.intent-module-archive"],
  ["tap", "image/vnd.tencent.tap"],
  ["tar", "application/x-tar"],
  ["tcap", "application/vnd.3gpp2.tcap"],
  ["tcl", "application/x-tcl"],
  ["td", "application/urc-targetdesc+xml"],
  ["teacher", "application/vnd.smart.teacher"],
  ["tei", "application/tei+xml"],
  ["teicorpus", "application/tei+xml"],
  ["tex", "application/x-tex"],
  ["texi", "application/x-texinfo"],
  ["texinfo", "application/x-texinfo"],
  ["text", "text/plain"],
  ["tfi", "application/thraud+xml"],
  ["tfm", "application/x-tex-tfm"],
  ["tfx", "image/tiff-fx"],
  ["tga", "image/x-tga"],
  ["tgz", "application/x-tar"],
  ["thmx", "application/vnd.ms-officetheme"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["tk", "application/x-tcl"],
  ["tmo", "application/vnd.tmobile-livetv"],
  ["toml", "application/toml"],
  ["torrent", "application/x-bittorrent"],
  ["tpl", "application/vnd.groove-tool-template"],
  ["tpt", "application/vnd.trid.tpt"],
  ["tr", "text/troff"],
  ["tra", "application/vnd.trueapp"],
  ["trig", "application/trig"],
  ["trm", "application/x-msterminal"],
  ["ts", "video/mp2t"],
  ["tsd", "application/timestamped-data"],
  ["tsv", "text/tab-separated-values"],
  ["ttc", "font/collection"],
  ["ttf", "font/ttf"],
  ["ttl", "text/turtle"],
  ["ttml", "application/ttml+xml"],
  ["twd", "application/vnd.simtech-mindmapper"],
  ["twds", "application/vnd.simtech-mindmapper"],
  ["txd", "application/vnd.genomatix.tuxedo"],
  ["txf", "application/vnd.mobius.txf"],
  ["txt", "text/plain"],
  ["u8dsn", "message/global-delivery-status"],
  ["u8hdr", "message/global-headers"],
  ["u8mdn", "message/global-disposition-notification"],
  ["u8msg", "message/global"],
  ["u32", "application/x-authorware-bin"],
  ["ubj", "application/ubjson"],
  ["udeb", "application/x-debian-package"],
  ["ufd", "application/vnd.ufdl"],
  ["ufdl", "application/vnd.ufdl"],
  ["ulx", "application/x-glulx"],
  ["umj", "application/vnd.umajin"],
  ["unityweb", "application/vnd.unity"],
  ["uoml", "application/vnd.uoml+xml"],
  ["uri", "text/uri-list"],
  ["uris", "text/uri-list"],
  ["urls", "text/uri-list"],
  ["usdz", "model/vnd.usdz+zip"],
  ["ustar", "application/x-ustar"],
  ["utz", "application/vnd.uiq.theme"],
  ["uu", "text/x-uuencode"],
  ["uva", "audio/vnd.dece.audio"],
  ["uvd", "application/vnd.dece.data"],
  ["uvf", "application/vnd.dece.data"],
  ["uvg", "image/vnd.dece.graphic"],
  ["uvh", "video/vnd.dece.hd"],
  ["uvi", "image/vnd.dece.graphic"],
  ["uvm", "video/vnd.dece.mobile"],
  ["uvp", "video/vnd.dece.pd"],
  ["uvs", "video/vnd.dece.sd"],
  ["uvt", "application/vnd.dece.ttml+xml"],
  ["uvu", "video/vnd.uvvu.mp4"],
  ["uvv", "video/vnd.dece.video"],
  ["uvva", "audio/vnd.dece.audio"],
  ["uvvd", "application/vnd.dece.data"],
  ["uvvf", "application/vnd.dece.data"],
  ["uvvg", "image/vnd.dece.graphic"],
  ["uvvh", "video/vnd.dece.hd"],
  ["uvvi", "image/vnd.dece.graphic"],
  ["uvvm", "video/vnd.dece.mobile"],
  ["uvvp", "video/vnd.dece.pd"],
  ["uvvs", "video/vnd.dece.sd"],
  ["uvvt", "application/vnd.dece.ttml+xml"],
  ["uvvu", "video/vnd.uvvu.mp4"],
  ["uvvv", "video/vnd.dece.video"],
  ["uvvx", "application/vnd.dece.unspecified"],
  ["uvvz", "application/vnd.dece.zip"],
  ["uvx", "application/vnd.dece.unspecified"],
  ["uvz", "application/vnd.dece.zip"],
  ["vbox", "application/x-virtualbox-vbox"],
  ["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
  ["vcard", "text/vcard"],
  ["vcd", "application/x-cdlink"],
  ["vcf", "text/x-vcard"],
  ["vcg", "application/vnd.groove-vcard"],
  ["vcs", "text/x-vcalendar"],
  ["vcx", "application/vnd.vcx"],
  ["vdi", "application/x-virtualbox-vdi"],
  ["vds", "model/vnd.sap.vds"],
  ["vhd", "application/x-virtualbox-vhd"],
  ["vis", "application/vnd.visionary"],
  ["viv", "video/vnd.vivo"],
  ["vlc", "application/videolan"],
  ["vmdk", "application/x-virtualbox-vmdk"],
  ["vob", "video/x-ms-vob"],
  ["vor", "application/vnd.stardivision.writer"],
  ["vox", "application/x-authorware-bin"],
  ["vrml", "model/vrml"],
  ["vsd", "application/vnd.visio"],
  ["vsf", "application/vnd.vsf"],
  ["vss", "application/vnd.visio"],
  ["vst", "application/vnd.visio"],
  ["vsw", "application/vnd.visio"],
  ["vtf", "image/vnd.valve.source.texture"],
  ["vtt", "text/vtt"],
  ["vtu", "model/vnd.vtu"],
  ["vxml", "application/voicexml+xml"],
  ["w3d", "application/x-director"],
  ["wad", "application/x-doom"],
  ["wadl", "application/vnd.sun.wadl+xml"],
  ["war", "application/java-archive"],
  ["wasm", "application/wasm"],
  ["wav", "audio/x-wav"],
  ["wax", "audio/x-ms-wax"],
  ["wbmp", "image/vnd.wap.wbmp"],
  ["wbs", "application/vnd.criticaltools.wbs+xml"],
  ["wbxml", "application/wbxml"],
  ["wcm", "application/vnd.ms-works"],
  ["wdb", "application/vnd.ms-works"],
  ["wdp", "image/vnd.ms-photo"],
  ["weba", "audio/webm"],
  ["webapp", "application/x-web-app-manifest+json"],
  ["webm", "video/webm"],
  ["webmanifest", "application/manifest+json"],
  ["webp", "image/webp"],
  ["wg", "application/vnd.pmi.widget"],
  ["wgt", "application/widget"],
  ["wks", "application/vnd.ms-works"],
  ["wm", "video/x-ms-wm"],
  ["wma", "audio/x-ms-wma"],
  ["wmd", "application/x-ms-wmd"],
  ["wmf", "image/wmf"],
  ["wml", "text/vnd.wap.wml"],
  ["wmlc", "application/wmlc"],
  ["wmls", "text/vnd.wap.wmlscript"],
  ["wmlsc", "application/vnd.wap.wmlscriptc"],
  ["wmv", "video/x-ms-wmv"],
  ["wmx", "video/x-ms-wmx"],
  ["wmz", "application/x-msmetafile"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["word", "application/msword"],
  ["wpd", "application/vnd.wordperfect"],
  ["wpl", "application/vnd.ms-wpl"],
  ["wps", "application/vnd.ms-works"],
  ["wqd", "application/vnd.wqd"],
  ["wri", "application/x-mswrite"],
  ["wrl", "model/vrml"],
  ["wsc", "message/vnd.wfa.wsc"],
  ["wsdl", "application/wsdl+xml"],
  ["wspolicy", "application/wspolicy+xml"],
  ["wtb", "application/vnd.webturbo"],
  ["wvx", "video/x-ms-wvx"],
  ["x3d", "model/x3d+xml"],
  ["x3db", "model/x3d+fastinfoset"],
  ["x3dbz", "model/x3d+binary"],
  ["x3dv", "model/x3d-vrml"],
  ["x3dvz", "model/x3d+vrml"],
  ["x3dz", "model/x3d+xml"],
  ["x32", "application/x-authorware-bin"],
  ["x_b", "model/vnd.parasolid.transmit.binary"],
  ["x_t", "model/vnd.parasolid.transmit.text"],
  ["xaml", "application/xaml+xml"],
  ["xap", "application/x-silverlight-app"],
  ["xar", "application/vnd.xara"],
  ["xav", "application/xcap-att+xml"],
  ["xbap", "application/x-ms-xbap"],
  ["xbd", "application/vnd.fujixerox.docuworks.binder"],
  ["xbm", "image/x-xbitmap"],
  ["xca", "application/xcap-caps+xml"],
  ["xcs", "application/calendar+xml"],
  ["xdf", "application/xcap-diff+xml"],
  ["xdm", "application/vnd.syncml.dm+xml"],
  ["xdp", "application/vnd.adobe.xdp+xml"],
  ["xdssc", "application/dssc+xml"],
  ["xdw", "application/vnd.fujixerox.docuworks"],
  ["xel", "application/xcap-el+xml"],
  ["xenc", "application/xenc+xml"],
  ["xer", "application/patch-ops-error+xml"],
  ["xfdf", "application/vnd.adobe.xfdf"],
  ["xfdl", "application/vnd.xfdl"],
  ["xht", "application/xhtml+xml"],
  ["xhtml", "application/xhtml+xml"],
  ["xhvml", "application/xv+xml"],
  ["xif", "image/vnd.xiff"],
  ["xl", "application/excel"],
  ["xla", "application/vnd.ms-excel"],
  ["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
  ["xlc", "application/vnd.ms-excel"],
  ["xlf", "application/xliff+xml"],
  ["xlm", "application/vnd.ms-excel"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
  ["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xlt", "application/vnd.ms-excel"],
  ["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
  [
    "xltx",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  ],
  ["xlw", "application/vnd.ms-excel"],
  ["xm", "audio/xm"],
  ["xml", "application/xml"],
  ["xns", "application/xcap-ns+xml"],
  ["xo", "application/vnd.olpc-sugar"],
  ["xop", "application/xop+xml"],
  ["xpi", "application/x-xpinstall"],
  ["xpl", "application/xproc+xml"],
  ["xpm", "image/x-xpixmap"],
  ["xpr", "application/vnd.is-xpr"],
  ["xps", "application/vnd.ms-xpsdocument"],
  ["xpw", "application/vnd.intercon.formnet"],
  ["xpx", "application/vnd.intercon.formnet"],
  ["xsd", "application/xml"],
  ["xsl", "application/xml"],
  ["xslt", "application/xslt+xml"],
  ["xsm", "application/vnd.syncml+xml"],
  ["xspf", "application/xspf+xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["xvm", "application/xv+xml"],
  ["xvml", "application/xv+xml"],
  ["xwd", "image/x-xwindowdump"],
  ["xyz", "chemical/x-xyz"],
  ["xz", "application/x-xz"],
  ["yaml", "text/yaml"],
  ["yang", "application/yang"],
  ["yin", "application/yin+xml"],
  ["yml", "text/yaml"],
  ["ymp", "text/x-suse-ymp"],
  ["z", "application/x-compress"],
  ["z1", "application/x-zmachine"],
  ["z2", "application/x-zmachine"],
  ["z3", "application/x-zmachine"],
  ["z4", "application/x-zmachine"],
  ["z5", "application/x-zmachine"],
  ["z6", "application/x-zmachine"],
  ["z7", "application/x-zmachine"],
  ["z8", "application/x-zmachine"],
  ["zaz", "application/vnd.zzazz.deck+xml"],
  ["zip", "application/zip"],
  ["zir", "application/vnd.zul"],
  ["zirz", "application/vnd.zul"],
  ["zmm", "application/vnd.handheld-entertainment+xml"],
  ["zsh", "text/x-scriptzsh"],
]);
function wo(e, t, n) {
  const r = iI(e),
    { webkitRelativePath: i } = e,
    o =
      typeof t == "string"
        ? t
        : typeof i == "string" && i.length > 0
          ? i
          : `./${e.name}`;
  return (
    typeof r.path != "string" && _v(r, "path", o),
    _v(r, "relativePath", o),
    r
  );
}
function iI(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(),
      i = rI.get(r);
    i &&
      Object.defineProperty(e, "type", {
        value: i,
        writable: !1,
        configurable: !1,
        enumerable: !0,
      });
  }
  return e;
}
function _v(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0,
  });
}
const oI = [".DS_Store", "Thumbs.db"];
function sI(e) {
  return yi(this, void 0, void 0, function* () {
    return Vl(e) && aI(e.dataTransfer)
      ? dI(e.dataTransfer, e.type)
      : lI(e)
        ? cI(e)
        : Array.isArray(e) &&
          e.every((t) => "getFile" in t && typeof t.getFile == "function")
          ? uI(e)
          : [];
  });
}
function aI(e) {
  return Vl(e);
}
function lI(e) {
  return Vl(e) && Vl(e.target);
}
function Vl(e) {
  return typeof e == "object" && e !== null;
}
function cI(e) {
  return hf(e.target.files).map((t) => wo(t));
}
function uI(e) {
  return yi(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => wo(n));
  });
}
function dI(e, t) {
  return yi(this, void 0, void 0, function* () {
    if (e.items) {
      const n = hf(e.items).filter((i) => i.kind === "file");
      if (t !== "drop") return n;
      const r = yield Promise.all(n.map(fI));
      return Fv(Qb(r));
    }
    return Fv(hf(e.files).map((n) => wo(n)));
  });
}
function Fv(e) {
  return e.filter((t) => oI.indexOf(t.name) === -1);
}
function hf(e) {
  if (e === null) return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function fI(e) {
  if (typeof e.webkitGetAsEntry != "function") return Vv(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Xb(t) : Vv(e, t);
}
function Qb(e) {
  return e.reduce((t, n) => [...t, ...(Array.isArray(n) ? Qb(n) : [n])], []);
}
function Vv(e, t) {
  return yi(this, void 0, void 0, function* () {
    var n;
    if (
      globalThis.isSecureContext &&
      typeof e.getAsFileSystemHandle == "function"
    ) {
      const o = yield e.getAsFileSystemHandle();
      if (o === null) throw new Error(`${e} is not a File`);
      if (o !== void 0) {
        const s = yield o.getFile();
        return ((s.handle = o), wo(s));
      }
    }
    const r = e.getAsFile();
    if (!r) throw new Error(`${e} is not a File`);
    return wo(
      r,
      (n = t == null ? void 0 : t.fullPath) !== null && n !== void 0
        ? n
        : void 0,
    );
  });
}
function pI(e) {
  return yi(this, void 0, void 0, function* () {
    return e.isDirectory ? Xb(e) : mI(e);
  });
}
function Xb(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const i = [];
    function o() {
      t.readEntries(
        (s) =>
          yi(this, void 0, void 0, function* () {
            if (s.length) {
              const a = Promise.all(s.map(pI));
              (i.push(a), o());
            } else
              try {
                const a = yield Promise.all(i);
                n(a);
              } catch (a) {
                r(a);
              }
          }),
        (s) => {
          r(s);
        },
      );
    }
    o();
  });
}
function mI(e) {
  return yi(this, void 0, void 0, function* () {
    return new Promise((t, n) => {
      e.file(
        (r) => {
          const i = wo(r, e.fullPath);
          t(i);
        },
        (r) => {
          n(r);
        },
      );
    });
  });
}
var Tu = function (e, t) {
  if (e && t) {
    var n = Array.isArray(t) ? t : t.split(",");
    if (n.length === 0) return !0;
    var r = e.name || "",
      i = (e.type || "").toLowerCase(),
      o = i.replace(/\/.*$/, "");
    return n.some(function (s) {
      var a = s.trim().toLowerCase();
      return a.charAt(0) === "."
        ? r.toLowerCase().endsWith(a)
        : a.endsWith("/*")
          ? o === a.replace(/\/.*$/, "")
          : i === a;
    });
  }
  return !0;
};
function zv(e) {
  return vI(e) || gI(e) || Jb(e) || hI();
}
function hI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gI(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function vI(e) {
  if (Array.isArray(e)) return gf(e);
}
function Bv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function $v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bv(Object(n), !0).forEach(function (r) {
        Zb(e, r, n[r]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Zb(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
      : (e[t] = n),
    e
  );
}
function Vs(e, t) {
  return wI(e) || xI(e, t) || Jb(e, t) || yI();
}
function yI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jb(e, t) {
  if (e) {
    if (typeof e == "string") return gf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return gf(e, t);
  }
}
function gf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function xI(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      s,
      a;
    try {
      for (
        n = n.call(e);
        !(i = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t));
        i = !0
      );
    } catch (l) {
      ((o = !0), (a = l));
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw a;
      }
    }
    return r;
  }
}
function wI(e) {
  if (Array.isArray(e)) return e;
}
var bI = typeof Tu == "function" ? Tu : Tu.default,
  SI = "file-invalid-type",
  CI = "file-too-large",
  EI = "file-too-small",
  kI = "too-many-files",
  TI = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
      n = t.split(","),
      r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
    return { code: SI, message: "File type must be ".concat(r) };
  },
  Uv = function (t) {
    return {
      code: CI,
      message: "File is larger than "
        .concat(t, " ")
        .concat(t === 1 ? "byte" : "bytes"),
    };
  },
  Wv = function (t) {
    return {
      code: EI,
      message: "File is smaller than "
        .concat(t, " ")
        .concat(t === 1 ? "byte" : "bytes"),
    };
  },
  PI = { code: kI, message: "Too many files" };
function eS(e, t) {
  var n = e.type === "application/x-moz-file" || bI(e, t);
  return [n, n ? null : TI(t)];
}
function tS(e, t, n) {
  if (Hr(e.size))
    if (Hr(t) && Hr(n)) {
      if (e.size > n) return [!1, Uv(n)];
      if (e.size < t) return [!1, Wv(t)];
    } else {
      if (Hr(t) && e.size < t) return [!1, Wv(t)];
      if (Hr(n) && e.size > n) return [!1, Uv(n)];
    }
  return [!0, null];
}
function Hr(e) {
  return e != null;
}
function jI(e) {
  var t = e.files,
    n = e.accept,
    r = e.minSize,
    i = e.maxSize,
    o = e.multiple,
    s = e.maxFiles,
    a = e.validator;
  return (!o && t.length > 1) || (o && s >= 1 && t.length > s)
    ? !1
    : t.every(function (l) {
      var c = eS(l, n),
        u = Vs(c, 1),
        d = u[0],
        f = tS(l, r, i),
        p = Vs(f, 1),
        b = p[0],
        m = a ? a(l) : null;
      return d && b && !m;
    });
}
function zl(e) {
  return typeof e.isPropagationStopped == "function"
    ? e.isPropagationStopped()
    : typeof e.cancelBubble < "u"
      ? e.cancelBubble
      : !1;
}
function Aa(e) {
  return e.dataTransfer
    ? Array.prototype.some.call(e.dataTransfer.types, function (t) {
      return t === "Files" || t === "application/x-moz-file";
    })
    : !!e.target && !!e.target.files;
}
function Hv(e) {
  e.preventDefault();
}
function AI(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function RI(e) {
  return e.indexOf("Edge/") !== -1;
}
function NI() {
  var e =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : window.navigator.userAgent;
  return AI(e) || RI(e);
}
function mn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    for (
      var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1;
      s < i;
      s++
    )
      o[s - 1] = arguments[s];
    return t.some(function (a) {
      return (!zl(r) && a && a.apply(void 0, [r].concat(o)), zl(r));
    });
  };
}
function MI() {
  return "showOpenFilePicker" in window;
}
function DI(e) {
  if (Hr(e)) {
    var t = Object.entries(e)
      .filter(function (n) {
        var r = Vs(n, 2),
          i = r[0],
          o = r[1],
          s = !0;
        return (
          nS(i) ||
          (console.warn(
            'Skipped "'.concat(
              i,
              '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.',
            ),
          ),
            (s = !1)),
          (!Array.isArray(o) || !o.every(rS)) &&
          (console.warn(
            'Skipped "'.concat(
              i,
              '" because an invalid file extension was provided.',
            ),
          ),
            (s = !1)),
          s
        );
      })
      .reduce(function (n, r) {
        var i = Vs(r, 2),
          o = i[0],
          s = i[1];
        return $v($v({}, n), {}, Zb({}, o, s));
      }, {});
    return [{ description: "Files", accept: t }];
  }
  return e;
}
function OI(e) {
  if (Hr(e))
    return Object.entries(e)
      .reduce(function (t, n) {
        var r = Vs(n, 2),
          i = r[0],
          o = r[1];
        return [].concat(zv(t), [i], zv(o));
      }, [])
      .filter(function (t) {
        return nS(t) || rS(t);
      })
      .join(",");
}
function II(e) {
  return (
    e instanceof DOMException &&
    (e.name === "AbortError" || e.code === e.ABORT_ERR)
  );
}
function LI(e) {
  return (
    e instanceof DOMException &&
    (e.name === "SecurityError" || e.code === e.SECURITY_ERR)
  );
}
function nS(e) {
  return (
    e === "audio/*" ||
    e === "video/*" ||
    e === "image/*" ||
    e === "text/*" ||
    e === "application/*" ||
    /\w+\/[-+.\w]+/g.test(e)
  );
}
function rS(e) {
  return /^.*\.[\w]+$/.test(e);
}
var _I = ["children"],
  FI = ["open"],
  VI = [
    "refKey",
    "role",
    "onKeyDown",
    "onFocus",
    "onBlur",
    "onClick",
    "onDragEnter",
    "onDragOver",
    "onDragLeave",
    "onDrop",
  ],
  zI = ["refKey", "onChange", "onClick"];
function BI(e) {
  return WI(e) || UI(e) || iS(e) || $I();
}
function $I() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UI(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function WI(e) {
  if (Array.isArray(e)) return vf(e);
}
function Pu(e, t) {
  return GI(e) || KI(e, t) || iS(e, t) || HI();
}
function HI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iS(e, t) {
  if (e) {
    if (typeof e == "string") return vf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return vf(e, t);
  }
}
function vf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function KI(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      s,
      a;
    try {
      for (
        n = n.call(e);
        !(i = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t));
        i = !0
      );
    } catch (l) {
      ((o = !0), (a = l));
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw a;
      }
    }
    return r;
  }
}
function GI(e) {
  if (Array.isArray(e)) return e;
}
function Kv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kv(Object(n), !0).forEach(function (r) {
        yf(e, r, n[r]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Kv(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function yf(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
      : (e[t] = n),
    e
  );
}
function Bl(e, t) {
  if (e == null) return {};
  var n = qI(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      ((r = o[i]),
        !(t.indexOf(r) >= 0) &&
        Object.prototype.propertyIsEnumerable.call(e, r) &&
        (n[r] = e[r]));
  }
  return n;
}
function qI(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    ((i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]));
  return n;
}
var Sm = g.forwardRef(function (e, t) {
  var n = e.children,
    r = Bl(e, _I),
    i = sS(r),
    o = i.open,
    s = Bl(i, FI);
  return (
    g.useImperativeHandle(
      t,
      function () {
        return { open: o };
      },
      [o],
    ),
    O.createElement(g.Fragment, null, n(Te(Te({}, s), {}, { open: o })))
  );
});
Sm.displayName = "Dropzone";
var oS = {
  disabled: !1,
  getFilesFromEvent: sI,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !1,
  autoFocus: !1,
};
Sm.defaultProps = oS;
Sm.propTypes = {
  children: ge.func,
  accept: ge.objectOf(ge.arrayOf(ge.string)),
  multiple: ge.bool,
  preventDropOnDocument: ge.bool,
  noClick: ge.bool,
  noKeyboard: ge.bool,
  noDrag: ge.bool,
  noDragEventsBubbling: ge.bool,
  minSize: ge.number,
  maxSize: ge.number,
  maxFiles: ge.number,
  disabled: ge.bool,
  getFilesFromEvent: ge.func,
  onFileDialogCancel: ge.func,
  onFileDialogOpen: ge.func,
  useFsAccessApi: ge.bool,
  autoFocus: ge.bool,
  onDragEnter: ge.func,
  onDragLeave: ge.func,
  onDragOver: ge.func,
  onDrop: ge.func,
  onDropAccepted: ge.func,
  onDropRejected: ge.func,
  onError: ge.func,
  validator: ge.func,
};
var xf = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: [],
};
function sS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = Te(Te({}, oS), e),
    n = t.accept,
    r = t.disabled,
    i = t.getFilesFromEvent,
    o = t.maxSize,
    s = t.minSize,
    a = t.multiple,
    l = t.maxFiles,
    c = t.onDragEnter,
    u = t.onDragLeave,
    d = t.onDragOver,
    f = t.onDrop,
    p = t.onDropAccepted,
    b = t.onDropRejected,
    m = t.onFileDialogCancel,
    w = t.onFileDialogOpen,
    y = t.useFsAccessApi,
    v = t.autoFocus,
    x = t.preventDropOnDocument,
    S = t.noClick,
    C = t.noKeyboard,
    k = t.noDrag,
    E = t.noDragEventsBubbling,
    T = t.onError,
    R = t.validator,
    N = g.useMemo(
      function () {
        return OI(n);
      },
      [n],
    ),
    z = g.useMemo(
      function () {
        return DI(n);
      },
      [n],
    ),
    I = g.useMemo(
      function () {
        return typeof w == "function" ? w : Gv;
      },
      [w],
    ),
    K = g.useMemo(
      function () {
        return typeof m == "function" ? m : Gv;
      },
      [m],
    ),
    M = g.useRef(null),
    W = g.useRef(null),
    U = g.useReducer(YI, xf),
    F = Pu(U, 2),
    P = F[0],
    j = F[1],
    L = P.isFocused,
    G = P.isFileDialogActive,
    H = g.useRef(typeof window < "u" && window.isSecureContext && y && MI()),
    X = function () {
      !H.current &&
        G &&
        setTimeout(function () {
          if (W.current) {
            var Y = W.current.files;
            Y.length || (j({ type: "closeDialog" }), K());
          }
        }, 300);
    };
  g.useEffect(
    function () {
      return (
        window.addEventListener("focus", X, !1),
        function () {
          window.removeEventListener("focus", X, !1);
        }
      );
    },
    [W, G, K, H],
  );
  var q = g.useRef([]),
    me = function (Y) {
      (M.current && M.current.contains(Y.target)) ||
        (Y.preventDefault(), (q.current = []));
    };
  (g.useEffect(
    function () {
      return (
        x &&
        (document.addEventListener("dragover", Hv, !1),
          document.addEventListener("drop", me, !1)),
        function () {
          x &&
            (document.removeEventListener("dragover", Hv),
              document.removeEventListener("drop", me));
        }
      );
    },
    [M, x],
  ),
    g.useEffect(
      function () {
        return (!r && v && M.current && M.current.focus(), function () { });
      },
      [M, v, r],
    ));
  var ue = g.useCallback(
    function (V) {
      T ? T(V) : console.error(V);
    },
    [T],
  ),
    _ = g.useCallback(
      function (V) {
        (V.preventDefault(),
          V.persist(),
          Lr(V),
          (q.current = [].concat(BI(q.current), [V.target])),
          Aa(V) &&
          Promise.resolve(i(V))
            .then(function (Y) {
              if (!(zl(V) && !E)) {
                var se = Y.length,
                  xe =
                    se > 0 &&
                    jI({
                      files: Y,
                      accept: N,
                      minSize: s,
                      maxSize: o,
                      multiple: a,
                      maxFiles: l,
                      validator: R,
                    }),
                  it = se > 0 && !xe;
                (j({
                  isDragAccept: xe,
                  isDragReject: it,
                  isDragActive: !0,
                  type: "setDraggedFiles",
                }),
                  c && c(V));
              }
            })
            .catch(function (Y) {
              return ue(Y);
            }));
      },
      [i, c, ue, E, N, s, o, a, l, R],
    ),
    le = g.useCallback(
      function (V) {
        (V.preventDefault(), V.persist(), Lr(V));
        var Y = Aa(V);
        if (Y && V.dataTransfer)
          try {
            V.dataTransfer.dropEffect = "copy";
          } catch { }
        return (Y && d && d(V), !1);
      },
      [d, E],
    ),
    ye = g.useCallback(
      function (V) {
        (V.preventDefault(), V.persist(), Lr(V));
        var Y = q.current.filter(function (xe) {
          return M.current && M.current.contains(xe);
        }),
          se = Y.indexOf(V.target);
        (se !== -1 && Y.splice(se, 1),
          (q.current = Y),
          !(Y.length > 0) &&
          (j({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1,
          }),
            Aa(V) && u && u(V)));
      },
      [M, u, E],
    ),
    ie = g.useCallback(
      function (V, Y) {
        var se = [],
          xe = [];
        (V.forEach(function (it) {
          var Fr = eS(it, N),
            $t = Pu(Fr, 2),
            No = $t[0],
            xi = $t[1],
            Vr = tS(it, s, o),
            Ut = Pu(Vr, 2),
            wi = Ut[0],
            fn = Ut[1],
            Mo = R ? R(it) : null;
          if (No && wi && !Mo) se.push(it);
          else {
            var Do = [xi, fn];
            (Mo && (Do = Do.concat(Mo)),
              xe.push({
                file: it,
                errors: Do.filter(function (ta) {
                  return ta;
                }),
              }));
          }
        }),
          ((!a && se.length > 1) || (a && l >= 1 && se.length > l)) &&
          (se.forEach(function (it) {
            xe.push({ file: it, errors: [PI] });
          }),
            se.splice(0)),
          j({
            acceptedFiles: se,
            fileRejections: xe,
            isDragReject: xe.length > 0,
            type: "setFiles",
          }),
          f && f(se, xe, Y),
          xe.length > 0 && b && b(xe, Y),
          se.length > 0 && p && p(se, Y));
      },
      [j, a, N, s, o, l, f, p, b, R],
    ),
    te = g.useCallback(
      function (V) {
        (V.preventDefault(),
          V.persist(),
          Lr(V),
          (q.current = []),
          Aa(V) &&
          Promise.resolve(i(V))
            .then(function (Y) {
              (zl(V) && !E) || ie(Y, V);
            })
            .catch(function (Y) {
              return ue(Y);
            }),
          j({ type: "reset" }));
      },
      [i, ie, ue, E],
    ),
    ne = g.useCallback(
      function () {
        if (H.current) {
          (j({ type: "openDialog" }), I());
          var V = { multiple: a, types: z };
          window
            .showOpenFilePicker(V)
            .then(function (Y) {
              return i(Y);
            })
            .then(function (Y) {
              (ie(Y, null), j({ type: "closeDialog" }));
            })
            .catch(function (Y) {
              II(Y)
                ? (K(Y), j({ type: "closeDialog" }))
                : LI(Y)
                  ? ((H.current = !1),
                    W.current
                      ? ((W.current.value = null), W.current.click())
                      : ue(
                        new Error(
                          "Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.",
                        ),
                      ))
                  : ue(Y);
            });
          return;
        }
        W.current &&
          (j({ type: "openDialog" }),
            I(),
            (W.current.value = null),
            W.current.click());
      },
      [j, I, K, y, ie, ue, z, a],
    ),
    Fe = g.useCallback(
      function (V) {
        !M.current ||
          !M.current.isEqualNode(V.target) ||
          ((V.key === " " ||
            V.key === "Enter" ||
            V.keyCode === 32 ||
            V.keyCode === 13) &&
            (V.preventDefault(), ne()));
      },
      [M, ne],
    ),
    rt = g.useCallback(function () {
      j({ type: "focus" });
    }, []),
    dn = g.useCallback(function () {
      j({ type: "blur" });
    }, []),
    zt = g.useCallback(
      function () {
        S || (NI() ? setTimeout(ne, 0) : ne());
      },
      [S, ne],
    ),
    pt = function (Y) {
      return r ? null : Y;
    },
    Rn = function (Y) {
      return C ? null : pt(Y);
    },
    Bt = function (Y) {
      return k ? null : pt(Y);
    },
    Lr = function (Y) {
      E && Y.stopPropagation();
    },
    _r = g.useMemo(
      function () {
        return function () {
          var V =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : {},
            Y = V.refKey,
            se = Y === void 0 ? "ref" : Y,
            xe = V.role,
            it = V.onKeyDown,
            Fr = V.onFocus,
            $t = V.onBlur,
            No = V.onClick,
            xi = V.onDragEnter,
            Vr = V.onDragOver,
            Ut = V.onDragLeave,
            wi = V.onDrop,
            fn = Bl(V, VI);
          return Te(
            Te(
              yf(
                {
                  onKeyDown: Rn(mn(it, Fe)),
                  onFocus: Rn(mn(Fr, rt)),
                  onBlur: Rn(mn($t, dn)),
                  onClick: pt(mn(No, zt)),
                  onDragEnter: Bt(mn(xi, _)),
                  onDragOver: Bt(mn(Vr, le)),
                  onDragLeave: Bt(mn(Ut, ye)),
                  onDrop: Bt(mn(wi, te)),
                  role:
                    typeof xe == "string" && xe !== "" ? xe : "presentation",
                },
                se,
                M,
              ),
              !r && !C ? { tabIndex: 0 } : {},
            ),
            fn,
          );
        };
      },
      [M, Fe, rt, dn, zt, _, le, ye, te, C, k, r],
    ),
    ea = g.useCallback(function (V) {
      V.stopPropagation();
    }, []),
    Nn = g.useMemo(
      function () {
        return function () {
          var V =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : {},
            Y = V.refKey,
            se = Y === void 0 ? "ref" : Y,
            xe = V.onChange,
            it = V.onClick,
            Fr = Bl(V, zI),
            $t = yf(
              {
                accept: N,
                multiple: a,
                type: "file",
                style: {
                  border: 0,
                  clip: "rect(0, 0, 0, 0)",
                  clipPath: "inset(50%)",
                  height: "1px",
                  margin: "0 -1px -1px 0",
                  overflow: "hidden",
                  padding: 0,
                  position: "absolute",
                  width: "1px",
                  whiteSpace: "nowrap",
                },
                onChange: pt(mn(xe, te)),
                onClick: pt(mn(it, ea)),
                tabIndex: -1,
              },
              se,
              W,
            );
          return Te(Te({}, $t), Fr);
        };
      },
      [W, n, a, te, r],
    );
  return Te(
    Te({}, P),
    {},
    {
      isFocused: L && !r,
      getRootProps: _r,
      getInputProps: Nn,
      rootRef: M,
      inputRef: W,
      open: pt(ne),
    },
  );
}
function YI(e, t) {
  switch (t.type) {
    case "focus":
      return Te(Te({}, e), {}, { isFocused: !0 });
    case "blur":
      return Te(Te({}, e), {}, { isFocused: !1 });
    case "openDialog":
      return Te(Te({}, xf), {}, { isFileDialogActive: !0 });
    case "closeDialog":
      return Te(Te({}, e), {}, { isFileDialogActive: !1 });
    case "setDraggedFiles":
      return Te(
        Te({}, e),
        {},
        {
          isDragActive: t.isDragActive,
          isDragAccept: t.isDragAccept,
          isDragReject: t.isDragReject,
        },
      );
    case "setFiles":
      return Te(
        Te({}, e),
        {},
        {
          acceptedFiles: t.acceptedFiles,
          fileRejections: t.fileRejections,
          isDragReject: t.isDragReject,
        },
      );
    case "reset":
      return Te({}, xf);
    default:
      return e;
  }
}
function Gv() { }
const QI = ({ onImageSelect: e, selectedImage: t, onRemoveImage: n }) => {
  const [r, i] = g.useState(!1),
    [o, s] = g.useState(null),
    a = g.useCallback(
      (d, f) => {
        var p, b;
        if ((s(null), f.length > 0)) {
          const m = f[0];
          ((p = m.errors[0]) == null ? void 0 : p.code) === "file-too-large"
            ? s("File is too large. Maximum size is 10MB.")
            : ((b = m.errors[0]) == null ? void 0 : b.code) ===
              "file-invalid-type"
              ? s("Invalid file type. Please upload JPG, PNG, or HEIC.")
              : s("Could not process this file. Please try another.");
          return;
        }
        if (d.length > 0) {
          const m = d[0],
            w = new FileReader();
          ((w.onload = () => {
            e(m, w.result);
          }),
            w.readAsDataURL(m));
        }
      },
      [e],
    ),
    {
      getRootProps: l,
      getInputProps: c,
      open: u,
    } = sS({
      onDrop: a,
      accept: {
        "image/jpeg": [".jpg", ".jpeg"],
        "image/png": [".png"],
        "image/heic": [".heic"],
      },
      maxSize: 10 * 1024 * 1024,
      multiple: !1,
      noClick: !!t,
      onDragEnter: () => i(!0),
      onDragLeave: () => i(!1),
    });
  return h.jsxs("div", {
    className: "glass-card p-6 md:p-8",
    children: [
      h.jsxs("h2", {
        className:
          "font-heading text-h3-mobile md:text-h3 text-foreground-heading mb-6 flex items-center gap-3",
        children: [
          h.jsx("div", {
            className:
              "flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10",
            children: h.jsx(KT, { className: "h-5 w-5 text-primary" }),
          }),
          "Upload Image",
        ],
      }),
      h.jsxs("div", {
        ...l(),
        className: `
          relative min-h-[300px] md:min-h-[400px] rounded-2xl border-2 border-dashed
          transition-all duration-300 cursor-pointer overflow-hidden
          ${r ? "border-primary bg-primary/5 shadow-glow" : t ? "border-transparent" : "border-border hover:border-primary/50 hover:bg-primary-lightest/30"}
          ${o ? "border-error/50 bg-error/5" : ""}
        `,
        children: [
          h.jsx("input", { ...c() }),
          h.jsx(xm, {
            mode: "wait",
            children: t
              ? h.jsxs(
                Q.div,
                {
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.95 },
                  transition: { duration: 0.3 },
                  className:
                    "relative w-full h-full min-h-[300px] md:min-h-[400px] group",
                  children: [
                    h.jsx("img", {
                      src: t,
                      alt: "Skin analysis preview",
                      className: "w-full h-full object-cover rounded-2xl",
                    }),
                    h.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-foreground-heading/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl",
                    }),
                    h.jsxs("div", {
                      className:
                        "absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      children: [
                        h.jsx(vt, {
                          size: "sm",
                          variant: "secondary",
                          className: "glass-card border-0 h-9 w-9 p-0",
                          onClick: (d) => {
                            d.stopPropagation();
                          },
                          children: h.jsx(tP, { className: "h-4 w-4" }),
                        }),
                        h.jsx(vt, {
                          size: "sm",
                          variant: "destructive",
                          className: "h-9 w-9 p-0",
                          onClick: (d) => {
                            (d.stopPropagation(), n());
                          },
                          children: h.jsx(XT, { className: "h-4 w-4" }),
                        }),
                      ],
                    }),
                    h.jsx("div", {
                      className:
                        "absolute bottom-4 left-4 right-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      children: h.jsxs(vt, {
                        variant: "secondary",
                        className: "glass-card border-0",
                        onClick: (d) => {
                          (d.stopPropagation(), u());
                        },
                        children: [
                          h.jsx($h, { className: "h-4 w-4 mr-2" }),
                          "Change Image",
                        ],
                      }),
                    }),
                  ],
                },
                "preview",
              )
              : h.jsxs(
                Q.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className:
                    "absolute inset-0 flex flex-col items-center justify-center p-8",
                  children: [
                    h.jsx(Q.div, {
                      animate: r ? { scale: 1.1 } : { scale: 1 },
                      transition: { duration: 0.2 },
                      className: `
                  flex items-center justify-center w-20 h-20 rounded-2xl mb-6
                  ${r ? "bg-primary/20" : "bg-primary/10"}
                  ${o ? "bg-error/10" : ""}
                `,
                      children: o
                        ? h.jsx(WT, { className: "h-10 w-10 text-error" })
                        : h.jsx(Q.div, {
                          animate: { y: [0, -5, 0] },
                          transition: {
                            duration: 2,
                            repeat: 1 / 0,
                            ease: "easeInOut",
                          },
                          children: h.jsx($h, {
                            className: "h-10 w-10 text-primary",
                          }),
                        }),
                    }),
                    h.jsx("p", {
                      className:
                        "text-body-lg font-medium text-foreground-heading mb-2 text-center",
                      children:
                        o ||
                        (r
                          ? "Drop your image here"
                          : "Drop your image here or click to browse"),
                    }),
                    !o &&
                    h.jsx("p", {
                      className:
                        "text-body-sm text-foreground-muted text-center",
                      children:
                        "Supports: JPG, PNG, HEIC • Max size: 10MB",
                    }),
                    o &&
                    h.jsxs(vt, {
                      variant: "ghost",
                      size: "sm",
                      className: "mt-4",
                      onClick: (d) => {
                        (d.stopPropagation(), s(null));
                      },
                      children: [
                        h.jsx(jp, { className: "h-4 w-4 mr-2" }),
                        "Dismiss",
                      ],
                    }),
                  ],
                },
                "dropzone",
              ),
          }),
        ],
      }),
    ],
  });
},
  Si = [
    { label: "Processing image", duration: 800 },
    { label: "Detecting features", duration: 1e3 },
    { label: "Analyzing patterns", duration: 1200 },
    { label: "Generating insights", duration: 1e3 },
  ],
  XI = ({ isScanning: e, onComplete: t, imagePreview: n }) => {
    var c;
    const [r, i] = g.useState(0),
      [o, s] = g.useState(0),
      [a, l] = g.useState([]);
    return (
      g.useEffect(() => {
        if (!e) {
          (i(0), s(0), l([]));
          return;
        }
        const u = Si.reduce((p, b) => p + b.duration, 0);
        let d = 0;
        const f = setInterval(() => {
          d += 50;
          const p = Math.min((d / u) * 100, 100);
          i(p);
          let b = 0;
          for (let m = 0; m < Si.length; m++)
            ((b += Si[m].duration),
              d >= b &&
              !a.includes(m) &&
              (l((w) => [...w, m]), m + 1 < Si.length && s(m + 1)));
          d >= u && (clearInterval(f), setTimeout(t, 300));
        }, 50);
        return () => clearInterval(f);
      }, [e, t]),
      e
        ? h.jsx(xm, {
          children: h.jsx(Q.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className:
              "fixed inset-0 z-50 flex items-center justify-center bg-foreground-heading/20 backdrop-blur-md",
            children: h.jsxs(Q.div, {
              initial: { scale: 0.9, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.9, opacity: 0 },
              className: "glass-card w-[90%] max-w-lg p-8 mx-4",
              children: [
                n &&
                h.jsxs("div", {
                  className:
                    "relative w-full h-48 mb-8 rounded-xl overflow-hidden",
                  children: [
                    h.jsx("img", {
                      src: n,
                      alt: "Analyzing",
                      className: "w-full h-full object-cover",
                    }),
                    h.jsx(Q.div, {
                      className:
                        "absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent",
                      animate: { top: ["0%", "100%", "0%"] },
                      transition: {
                        duration: 2,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                      },
                    }),
                    h.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5 pointer-events-none",
                    }),
                    h.jsx("div", {
                      className:
                        "absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary",
                    }),
                    h.jsx("div", {
                      className:
                        "absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-primary",
                    }),
                    h.jsx("div", {
                      className:
                        "absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-primary",
                    }),
                    h.jsx("div", {
                      className:
                        "absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary",
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "relative flex items-center justify-center mb-8",
                  children: [
                    h.jsxs("svg", {
                      className: "w-32 h-32 -rotate-90",
                      viewBox: "0 0 120 120",
                      children: [
                        h.jsx("circle", {
                          cx: "60",
                          cy: "60",
                          r: "52",
                          fill: "none",
                          stroke: "hsl(var(--primary-lightest))",
                          strokeWidth: "8",
                        }),
                        h.jsx(Q.circle, {
                          cx: "60",
                          cy: "60",
                          r: "52",
                          fill: "none",
                          stroke: "url(#progressGradient)",
                          strokeWidth: "8",
                          strokeLinecap: "round",
                          strokeDasharray: 327,
                          strokeDashoffset: 327 - (327 * r) / 100,
                        }),
                        h.jsx("defs", {
                          children: h.jsxs("linearGradient", {
                            id: "progressGradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                              h.jsx("stop", {
                                offset: "0%",
                                stopColor: "hsl(var(--primary))",
                              }),
                              h.jsx("stop", {
                                offset: "100%",
                                stopColor: "hsl(var(--accent-cyan))",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    h.jsx("div", {
                      className:
                        "absolute inset-0 flex items-center justify-center",
                      children: h.jsxs("span", {
                        className:
                          "font-heading text-h2-mobile font-bold text-foreground-heading",
                        children: [Math.round(r), "%"],
                      }),
                    }),
                  ],
                }),
                h.jsx(
                  Q.p,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    className:
                      "text-body-lg font-medium text-foreground-heading text-center mb-6",
                    children:
                      ((c = Si[o]) == null ? void 0 : c.label) ||
                      "Analyzing...",
                  },
                  o,
                ),
                h.jsx("div", {
                  className: "space-y-3",
                  children: Si.map((u, d) =>
                    h.jsxs(
                      Q.div,
                      {
                        initial: { opacity: 0.5 },
                        animate: {
                          opacity: a.includes(d) || o === d ? 1 : 0.5,
                        },
                        className: "flex items-center gap-3",
                        children: [
                          h.jsx("div", {
                            className: `
                  flex items-center justify-center w-6 h-6 rounded-full transition-colors duration-300
                  ${a.includes(d) ? "bg-success text-primary-foreground" : o === d ? "bg-primary/20 text-primary" : "bg-border text-foreground-muted"}
                `,
                            children: a.includes(d)
                              ? h.jsx(oi, { className: "h-3.5 w-3.5" })
                              : o === d
                                ? h.jsx(qT, {
                                  className: "h-3.5 w-3.5 animate-spin",
                                })
                                : h.jsx("span", {
                                  className: "text-caption",
                                  children: d + 1,
                                }),
                          }),
                          h.jsx("span", {
                            className: `
                  text-body-sm transition-colors duration-300
                  ${a.includes(d) ? "text-foreground-heading" : o === d ? "text-primary font-medium" : "text-foreground-muted"}
                `,
                            children: u.label,
                          }),
                        ],
                      },
                      u.label,
                    ),
                  ),
                }),
              ],
            }),
          }),
        })
        : null
    );
  },
  ZI = ({ isVisible: e, prediction: t }) => {
    const [n, r] = g.useState(0);
    if (
      (g.useEffect(() => {
        if (e && t) {
          const a = setTimeout(() => {
            let l = 0;
            const c = t.confidence,
              u = setInterval(() => {
                ((l += 2), l >= c ? (r(c), clearInterval(u)) : r(l));
              }, 20);
            return () => clearInterval(u);
          }, 300);
          return () => clearTimeout(a);
        }
      }, [e, t]),
        !e || !t)
    )
      return null;
    const i = (a) =>
      a >= 80 ? "text-success" : a >= 60 ? "text-warning" : "text-error",
      s = ((a) => {
        switch (a) {
          case "low":
            return { color: "bg-success", label: "Low", width: "33%" };
          case "medium":
            return { color: "bg-warning", label: "Medium", width: "66%" };
          case "high":
            return { color: "bg-error", label: "High", width: "100%" };
          default:
            return { color: "bg-muted", label: "Unknown", width: "0%" };
        }
      })(t.severity);
    return h.jsxs(Q.div, {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5, ease: "easeOut" },
      className: "glass-card p-6 md:p-8",
      children: [
        h.jsxs("div", {
          className: "flex items-center justify-between mb-6",
          children: [
            h.jsxs("h2", {
              className:
                "font-heading text-h3-mobile md:text-h3 text-foreground-heading flex items-center gap-3",
              children: [
                h.jsx("div", {
                  className:
                    "flex items-center justify-center w-10 h-10 rounded-xl bg-success/10",
                  children: h.jsx(OT, { className: "h-5 w-5 text-success" }),
                }),
                "Analysis Results",
              ],
            }),
            h.jsxs("div", {
              className:
                "flex items-center gap-1 text-caption text-foreground-muted",
              children: [h.jsx(VT, { className: "h-3.5 w-3.5" }), "Just now"],
            }),
          ],
        }),
        h.jsxs(Q.div, {
          initial: { scale: 0.95, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { delay: 0.2 },
          className:
            "flex flex-col items-center mb-8 p-6 rounded-2xl bg-gradient-to-br from-primary-lightest/50 to-primary-light/30",
          children: [
            h.jsxs("div", {
              className: "relative mb-4",
              children: [
                h.jsxs("svg", {
                  className: "w-28 h-28 -rotate-90",
                  viewBox: "0 0 120 120",
                  children: [
                    h.jsx("circle", {
                      cx: "60",
                      cy: "60",
                      r: "52",
                      fill: "none",
                      stroke: "hsl(var(--primary-lightest))",
                      strokeWidth: "10",
                    }),
                    h.jsx(Q.circle, {
                      cx: "60",
                      cy: "60",
                      r: "52",
                      fill: "none",
                      stroke: "url(#confidenceGradient)",
                      strokeWidth: "10",
                      strokeLinecap: "round",
                      strokeDasharray: 327,
                      initial: { strokeDashoffset: 327 },
                      animate: { strokeDashoffset: 327 - (327 * n) / 100 },
                      transition: { duration: 1, ease: "easeOut" },
                    }),
                    h.jsx("defs", {
                      children: h.jsxs("linearGradient", {
                        id: "confidenceGradient",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "0%",
                        children: [
                          h.jsx("stop", {
                            offset: "0%",
                            stopColor: "hsl(var(--success))",
                          }),
                          h.jsx("stop", {
                            offset: "100%",
                            stopColor: "hsl(var(--accent-teal))",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                h.jsx("div", {
                  className:
                    "absolute inset-0 flex items-center justify-center",
                  children: h.jsxs("span", {
                    className: `font-heading text-h2-mobile font-bold ${i(t.confidence)}`,
                    children: [n, "%"],
                  }),
                }),
              ],
            }),
            h.jsx("span", {
              className: "text-body-sm text-foreground-muted",
              children: "Confidence Score",
            }),
          ],
        }),
        h.jsxs(Q.div, {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className: "mb-6",
          children: [
            h.jsx("p", {
              className:
                "text-caption text-foreground-muted uppercase tracking-wider mb-2",
              children: "Detected Condition",
            }),
            h.jsxs("h3", {
              className:
                "font-heading text-h4 text-foreground-heading flex items-center gap-3",
              children: [
                h.jsx(_T, { className: "h-6 w-6 text-primary" }),
                t.condition,
              ],
            }),
          ],
        }),
        h.jsxs(Q.div, {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.4 },
          className: "mb-8",
          children: [
            h.jsxs("div", {
              className: "flex items-center justify-between mb-2",
              children: [
                h.jsx("span", {
                  className: "text-body-sm text-foreground-muted",
                  children: "Severity Level",
                }),
                h.jsx("span", {
                  className: "text-body-sm font-medium text-foreground-heading",
                  children: s.label,
                }),
              ],
            }),
            h.jsx("div", {
              className: "h-2 bg-border rounded-full overflow-hidden",
              children: h.jsx(Q.div, {
                className: `h-full rounded-full ${s.color}`,
                initial: { width: 0 },
                animate: { width: s.width },
                transition: { duration: 0.8, delay: 0.5, ease: "easeOut" },
              }),
            }),
            h.jsxs("div", {
              className:
                "flex justify-between mt-1 text-caption text-foreground-muted",
              children: [
                h.jsx("span", { children: "Low" }),
                h.jsx("span", { children: "Medium" }),
                h.jsx("span", { children: "High" }),
              ],
            }),
          ],
        }),
        h.jsxs(Q.div, {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 },
          className: "mb-8",
          children: [
            h.jsxs("h4", {
              className:
                "text-body font-semibold text-foreground-heading mb-4 flex items-center gap-2",
              children: [
                h.jsx(ZT, { className: "h-4 w-4 text-primary" }),
                "Key Findings",
              ],
            }),
            h.jsx("ul", {
              className: "space-y-3",
              children: t.findings.map((a, l) =>
                h.jsxs(
                  Q.li,
                  {
                    initial: { opacity: 0, x: -10 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.6 + l * 0.1 },
                    className: "flex items-start gap-3",
                    children: [
                      h.jsx("div", {
                        className:
                          "flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5",
                        children: h.jsx(FT, {
                          className: "h-3 w-3 text-primary",
                        }),
                      }),
                      h.jsx("span", {
                        className: "text-body-sm text-foreground",
                        children: a,
                      }),
                    ],
                  },
                  l,
                ),
              ),
            }),
          ],
        }),
        h.jsxs(Q.div, {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.8 },
          className: "mb-8",
          children: [
            h.jsx("h4", {
              className: "text-body font-semibold text-foreground-heading mb-4",
              children: "Quick Recommendations",
            }),
            h.jsx("div", {
              className: "flex flex-wrap gap-2",
              children: t.recommendations.map((a, l) =>
                h.jsx(
                  Q.span,
                  {
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { delay: 0.9 + l * 0.05 },
                    className:
                      "px-3 py-1.5 rounded-full bg-primary/10 text-primary text-body-sm font-medium",
                    children: a,
                  },
                  l,
                ),
              ),
            }),
          ],
        }),
        h.jsxs("div", {
          className: "flex gap-3",
          children: [
            h.jsxs(vt, {
              variant: "outline",
              className: "flex-1",
              size: "sm",
              children: [h.jsx(QT, { className: "h-4 w-4 mr-2" }), "Share"],
            }),
            h.jsxs(vt, {
              variant: "outline",
              className: "flex-1",
              size: "sm",
              children: [h.jsx(BT, { className: "h-4 w-4 mr-2" }), "Download"],
            }),
          ],
        }),
      ],
    });
  },
  JI = ({ isVisible: e, description: t, isLoading: n }) => {
    const [r, i] = g.useState(!1),
      [o, s] = g.useState(!0);
    if (!e) return null;
    const a = async () => {
      if (t) {
        const l = `
Overview: ${t.overview}

Causes:
${t.causes.map((c) => `• ${c}`).join(`
`)}

Recommended Routine:
${t.routine.map((c, u) => `${u + 1}. ${c}`).join(`
`)}

When to See a Doctor:
${t.whenToSee}

Lifestyle Tips:
${t.tips.map((c) => `• ${c}`).join(`
`)}
      `.trim();
        (await navigator.clipboard.writeText(l),
          i(!0),
          setTimeout(() => i(!1), 2e3));
      }
    };
    return h.jsxs(Q.div, {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: 0.2 },
      className: "glass-card p-6 md:p-8 h-fit",
      children: [
        h.jsxs("div", {
          className: "flex items-center justify-between mb-6",
          children: [
            h.jsxs("h2", {
              className:
                "font-heading text-h4 text-foreground-heading flex items-center gap-3",
              children: [
                h.jsx("div", {
                  className:
                    "flex items-center justify-center w-10 h-10 rounded-xl accent-gradient",
                  children: h.jsx(Dd, {
                    className: "h-5 w-5 text-primary-foreground",
                  }),
                }),
                "Detailed Analysis",
              ],
            }),
            h.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                h.jsx("span", {
                  className:
                    "px-3 py-1 rounded-full text-caption font-medium accent-gradient text-primary-foreground",
                  children: "AI Generated",
                }),
                h.jsx(vt, {
                  variant: "ghost",
                  size: "sm",
                  onClick: a,
                  className: "h-8 w-8 p-0",
                  disabled: n,
                  children: r
                    ? h.jsx(oi, { className: "h-4 w-4 text-success" })
                    : h.jsx(zT, { className: "h-4 w-4" }),
                }),
              ],
            }),
          ],
        }),
        n
          ? h.jsx("div", {
            className: "space-y-4",
            children: [...Array(4)].map((l, c) =>
              h.jsxs(
                "div",
                {
                  className: "space-y-2",
                  children: [
                    h.jsx("div", {
                      className: "h-4 w-32 bg-border rounded animate-pulse",
                    }),
                    h.jsx("div", {
                      className: "h-3 w-full bg-border rounded animate-pulse",
                    }),
                    h.jsx("div", {
                      className: "h-3 w-5/6 bg-border rounded animate-pulse",
                    }),
                  ],
                },
                c,
              ),
            ),
          })
          : t
            ? h.jsxs(Q.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.5 },
              className: "space-y-6",
              children: [
                h.jsxs("div", {
                  children: [
                    h.jsx("h3", {
                      className:
                        "text-body font-semibold text-foreground-heading mb-2",
                      children: "Condition Overview",
                    }),
                    h.jsx("p", {
                      className: "text-body text-foreground leading-relaxed",
                      children: t.overview,
                    }),
                  ],
                }),
                h.jsxs(Q.div, {
                  initial: !1,
                  animate: { height: o ? "auto" : 0, opacity: o ? 1 : 0 },
                  transition: { duration: 0.3 },
                  className: "overflow-hidden space-y-6",
                  children: [
                    h.jsxs("div", {
                      className: "pt-4 border-t border-border",
                      children: [
                        h.jsx("h3", {
                          className:
                            "text-body font-semibold text-foreground-heading mb-3",
                          children: "Possible Causes",
                        }),
                        h.jsx("ul", {
                          className: "space-y-2",
                          children: t.causes.map((l, c) =>
                            h.jsxs(
                              Q.li,
                              {
                                initial: { opacity: 0, x: -10 },
                                animate: { opacity: 1, x: 0 },
                                transition: { delay: c * 0.1 },
                                className:
                                  "flex items-start gap-3 text-body-sm text-foreground",
                                children: [
                                  h.jsx("span", {
                                    className:
                                      "flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2",
                                  }),
                                  l,
                                ],
                              },
                              c,
                            ),
                          ),
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "pt-4 border-t border-border",
                      children: [
                        h.jsx("h3", {
                          className:
                            "text-body font-semibold text-foreground-heading mb-3",
                          children: "Recommended Skincare Routine",
                        }),
                        h.jsx("ol", {
                          className: "space-y-3",
                          children: t.routine.map((l, c) =>
                            h.jsxs(
                              Q.li,
                              {
                                initial: { opacity: 0, x: -10 },
                                animate: { opacity: 1, x: 0 },
                                transition: { delay: c * 0.1 },
                                className: "flex items-start gap-3",
                                children: [
                                  h.jsx("span", {
                                    className:
                                      "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-caption font-semibold text-primary",
                                    children: c + 1,
                                  }),
                                  h.jsx("span", {
                                    className:
                                      "text-body-sm text-foreground pt-0.5",
                                    children: l,
                                  }),
                                ],
                              },
                              c,
                            ),
                          ),
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "pt-4 border-t border-border",
                      children: [
                        h.jsx("h3", {
                          className:
                            "text-body font-semibold text-foreground-heading mb-2",
                          children: "When to See a Dermatologist",
                        }),
                        h.jsx("div", {
                          className:
                            "p-4 rounded-xl bg-warning/10 border border-warning/20",
                          children: h.jsx("p", {
                            className: "text-body-sm text-foreground",
                            children: t.whenToSee,
                          }),
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "pt-4 border-t border-border",
                      children: [
                        h.jsx("h3", {
                          className:
                            "text-body font-semibold text-foreground-heading mb-3",
                          children: "Lifestyle Tips",
                        }),
                        h.jsx("div", {
                          className: "grid gap-2 sm:grid-cols-2",
                          children: t.tips.map((l, c) =>
                            h.jsxs(
                              Q.div,
                              {
                                initial: { opacity: 0, scale: 0.95 },
                                animate: { opacity: 1, scale: 1 },
                                transition: { delay: c * 0.1 },
                                className:
                                  "flex items-center gap-2 p-3 rounded-lg bg-success/5 border border-success/10",
                                children: [
                                  h.jsx(oi, {
                                    className:
                                      "h-4 w-4 text-success flex-shrink-0",
                                  }),
                                  h.jsx("span", {
                                    className: "text-body-sm text-foreground",
                                    children: l,
                                  }),
                                ],
                              },
                              c,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsx(vt, {
                  variant: "ghost",
                  onClick: () => s(!o),
                  className:
                    "w-full text-foreground-muted hover:text-foreground",
                  children: o
                    ? h.jsxs(h.Fragment, {
                      children: [
                        h.jsx(rw, { className: "h-4 w-4 mr-2" }),
                        "Show Less",
                      ],
                    })
                    : h.jsxs(h.Fragment, {
                      children: [
                        h.jsx(lc, { className: "h-4 w-4 mr-2" }),
                        "Show More Details",
                      ],
                    }),
                }),
              ],
            })
            : null,
      ],
    });
  },
  aS = g.forwardRef(({ className: e, type: t, ...n }, r) =>
    h.jsx("input", {
      type: t,
      className: $e(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e,
      ),
      ref: r,
      ...n,
    }),
  );
aS.displayName = "Input";
var eL = "Label",
  lS = g.forwardRef((e, t) =>
    h.jsx(pe.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var i;
        n.target.closest("button, input, select, textarea") ||
          ((i = e.onMouseDown) == null || i.call(e, n),
            !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    }),
  );
lS.displayName = eL;
var cS = lS;
const tL = Pp(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
),
  Ti = g.forwardRef(({ className: e, ...t }, n) =>
    h.jsx(cS, { ref: n, className: $e(tL(), e), ...t }),
  );
Ti.displayName = cS.displayName;
const uS = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx("textarea", {
    className: $e(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e,
    ),
    ref: n,
    ...t,
  }),
);
uS.displayName = "Textarea";
function qv(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var nL = g.createContext(void 0);
function rL(e) {
  const t = g.useContext(nL);
  return e || t || "ltr";
}
var ju = 0;
function iL() {
  g.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Yv()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Yv()),
      ju++,
      () => {
        (ju === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          ju--);
      }
    );
  }, []);
}
function Yv() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Au = "focusScope.autoFocusOnMount",
  Ru = "focusScope.autoFocusOnUnmount",
  Qv = { bubbles: !1, cancelable: !0 },
  oL = "FocusScope",
  dS = g.forwardRef((e, t) => {
    const {
      loop: n = !1,
      trapped: r = !1,
      onMountAutoFocus: i,
      onUnmountAutoFocus: o,
      ...s
    } = e,
      [a, l] = g.useState(null),
      c = ln(i),
      u = ln(o),
      d = g.useRef(null),
      f = Oe(t, (m) => l(m)),
      p = g.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (g.useEffect(() => {
      if (r) {
        let m = function (x) {
          if (p.paused || !a) return;
          const S = x.target;
          a.contains(S) ? (d.current = S) : nr(d.current, { select: !0 });
        },
          w = function (x) {
            if (p.paused || !a) return;
            const S = x.relatedTarget;
            S !== null && (a.contains(S) || nr(d.current, { select: !0 }));
          },
          y = function (x) {
            if (document.activeElement === document.body)
              for (const C of x) C.removedNodes.length > 0 && nr(a);
          };
        (document.addEventListener("focusin", m),
          document.addEventListener("focusout", w));
        const v = new MutationObserver(y);
        return (
          a && v.observe(a, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", m),
              document.removeEventListener("focusout", w),
              v.disconnect());
          }
        );
      }
    }, [r, a, p.paused]),
      g.useEffect(() => {
        if (a) {
          Zv.add(p);
          const m = document.activeElement;
          if (!a.contains(m)) {
            const y = new CustomEvent(Au, Qv);
            (a.addEventListener(Au, c),
              a.dispatchEvent(y),
              y.defaultPrevented ||
              (sL(dL(fS(a)), { select: !0 }),
                document.activeElement === m && nr(a)));
          }
          return () => {
            (a.removeEventListener(Au, c),
              setTimeout(() => {
                const y = new CustomEvent(Ru, Qv);
                (a.addEventListener(Ru, u),
                  a.dispatchEvent(y),
                  y.defaultPrevented || nr(m ?? document.body, { select: !0 }),
                  a.removeEventListener(Ru, u),
                  Zv.remove(p));
              }, 0));
          };
        }
      }, [a, c, u, p]));
    const b = g.useCallback(
      (m) => {
        if ((!n && !r) || p.paused) return;
        const w = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
          y = document.activeElement;
        if (w && y) {
          const v = m.currentTarget,
            [x, S] = aL(v);
          x && S
            ? !m.shiftKey && y === S
              ? (m.preventDefault(), n && nr(x, { select: !0 }))
              : m.shiftKey &&
              y === x &&
              (m.preventDefault(), n && nr(S, { select: !0 }))
            : y === v && m.preventDefault();
        }
      },
      [n, r, p.paused],
    );
    return h.jsx(pe.div, { tabIndex: -1, ...s, ref: f, onKeyDown: b });
  });
dS.displayName = oL;
function sL(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((nr(r, { select: t }), document.activeElement !== n)) return;
}
function aL(e) {
  const t = fS(e),
    n = Xv(t, e),
    r = Xv(t.reverse(), e);
  return [n, r];
}
function fS(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const i = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || i
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function Xv(e, t) {
  for (const n of e) if (!lL(n, { upTo: t })) return n;
}
function lL(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function cL(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function nr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && cL(e) && t && e.select());
  }
}
var Zv = uL();
function uL() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && (n == null || n.pause()), (e = Jv(e, t)), e.unshift(t));
    },
    remove(t) {
      var n;
      ((e = Jv(e, t)), (n = e[0]) == null || n.resume());
    },
  };
}
function Jv(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
function dL(e) {
  return e.filter((t) => t.tagName !== "A");
}
function fL(e) {
  const t = g.useRef({ value: e, previous: e });
  return g.useMemo(
    () => (
      t.current.value !== e &&
      ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var pL = function (e) {
  if (typeof document > "u") return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
},
  Ci = new WeakMap(),
  Ra = new WeakMap(),
  Na = {},
  Nu = 0,
  pS = function (e) {
    return e && (e.host || pS(e.parentNode));
  },
  mL = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = pS(n);
        return r && e.contains(r)
          ? r
          : (console.error(
            "aria-hidden",
            n,
            "in not contained inside",
            e,
            ". Doing nothing",
          ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  hL = function (e, t, n, r) {
    var i = mL(t, Array.isArray(e) ? e : [e]);
    Na[n] || (Na[n] = new WeakMap());
    var o = Na[n],
      s = [],
      a = new Set(),
      l = new Set(i),
      c = function (d) {
        !d || a.has(d) || (a.add(d), c(d.parentNode));
      };
    i.forEach(c);
    var u = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (a.has(f)) u(f);
          else
            try {
              var p = f.getAttribute(r),
                b = p !== null && p !== "false",
                m = (Ci.get(f) || 0) + 1,
                w = (o.get(f) || 0) + 1;
              (Ci.set(f, m),
                o.set(f, w),
                s.push(f),
                m === 1 && b && Ra.set(f, !0),
                w === 1 && f.setAttribute(n, "true"),
                b || f.setAttribute(r, "true"));
            } catch (y) {
              console.error("aria-hidden: cannot operate on ", f, y);
            }
        });
    };
    return (
      u(t),
      a.clear(),
      Nu++,
      function () {
        (s.forEach(function (d) {
          var f = Ci.get(d) - 1,
            p = o.get(d) - 1;
          (Ci.set(d, f),
            o.set(d, p),
            f || (Ra.has(d) || d.removeAttribute(r), Ra.delete(d)),
            p || d.removeAttribute(n));
        }),
          Nu--,
          Nu ||
          ((Ci = new WeakMap()),
            (Ci = new WeakMap()),
            (Ra = new WeakMap()),
            (Na = {})));
      }
    );
  },
  gL = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = pL(e);
    return i
      ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]"))),
        hL(r, i, n, "aria-hidden"))
      : function () {
        return null;
      };
  },
  Ja = "right-scroll-bar-position",
  el = "width-before-scroll-bar",
  vL = "with-scroll-bars-hidden",
  yL = "--removed-body-scroll-bar-size";
function Mu(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function xL(e, t) {
  var n = g.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var i = n.value;
          i !== r && ((n.value = r), n.callback(r, i));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var wL = typeof window < "u" ? g.useLayoutEffect : g.useEffect,
  ey = new WeakMap();
function bL(e, t) {
  var n = xL(null, function (r) {
    return e.forEach(function (i) {
      return Mu(i, r);
    });
  });
  return (
    wL(
      function () {
        var r = ey.get(n);
        if (r) {
          var i = new Set(r),
            o = new Set(e),
            s = n.current;
          (i.forEach(function (a) {
            o.has(a) || Mu(a, null);
          }),
            o.forEach(function (a) {
              i.has(a) || Mu(a, s);
            }));
        }
        ey.set(n, e);
      },
      [e],
    ),
    n
  );
}
function SL(e) {
  return e;
}
function CL(e, t) {
  t === void 0 && (t = SL);
  var n = [],
    r = !1,
    i = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (o) {
        var s = t(o, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (o) {
        for (r = !0; n.length;) {
          var s = n;
          ((n = []), s.forEach(o));
        }
        n = {
          push: function (a) {
            return o(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (o) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          ((n = []), a.forEach(o), (s = n));
        }
        var l = function () {
          var u = s;
          ((s = []), u.forEach(o));
        },
          c = function () {
            return Promise.resolve().then(l);
          };
        (c(),
          (n = {
            push: function (u) {
              (s.push(u), c());
            },
            filter: function (u) {
              return ((s = s.filter(u)), n);
            },
          }));
      },
    };
  return i;
}
function EL(e) {
  e === void 0 && (e = {});
  var t = CL(null);
  return ((t.options = wn({ async: !0, ssr: !1 }, e)), t);
}
var mS = function (e) {
  var t = e.sideCar,
    n = Yb(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return g.createElement(r, wn({}, n));
};
mS.isSideCarExport = !0;
function kL(e, t) {
  return (e.useMedium(t), mS);
}
var hS = EL(),
  Du = function () { },
  kc = g.forwardRef(function (e, t) {
    var n = g.useRef(null),
      r = g.useState({
        onScrollCapture: Du,
        onWheelCapture: Du,
        onTouchMoveCapture: Du,
      }),
      i = r[0],
      o = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      c = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      f = e.sideCar,
      p = e.noRelative,
      b = e.noIsolation,
      m = e.inert,
      w = e.allowPinchZoom,
      y = e.as,
      v = y === void 0 ? "div" : y,
      x = e.gapMode,
      S = Yb(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = f,
      k = bL([n, t]),
      E = wn(wn({}, S), i);
    return g.createElement(
      g.Fragment,
      null,
      u &&
      g.createElement(C, {
        sideCar: hS,
        removeScrollBar: c,
        shards: d,
        noRelative: p,
        noIsolation: b,
        inert: m,
        setCallbacks: o,
        allowPinchZoom: !!w,
        lockRef: n,
        gapMode: x,
      }),
      s
        ? g.cloneElement(g.Children.only(a), wn(wn({}, E), { ref: k }))
        : g.createElement(v, wn({}, E, { className: l, ref: k }), a),
    );
  });
kc.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
kc.classNames = { fullWidth: el, zeroRight: Ja };
var TL = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function PL() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = TL();
  return (t && e.setAttribute("nonce", t), e);
}
function jL(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function AL(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var RL = function () {
  var e = 0,
    t = null;
  return {
    add: function (n) {
      (e == 0 && (t = PL()) && (jL(t, n), AL(t)), e++);
    },
    remove: function () {
      (e--,
        !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
    },
  };
},
  NL = function () {
    var e = RL();
    return function (t, n) {
      g.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  gS = function () {
    var e = NL(),
      t = function (n) {
        var r = n.styles,
          i = n.dynamic;
        return (e(r, i), null);
      };
    return t;
  },
  ML = { left: 0, top: 0, right: 0, gap: 0 },
  Ou = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  DL = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      i = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ou(n), Ou(r), Ou(i)];
  },
  OL = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return ML;
    var t = DL(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  IL = gS(),
  Ji = "data-scroll-locked",
  LL = function (e, t, n, r) {
    var i = e.left,
      o = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          vL,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          Ji,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
            `
    padding-left: `
              .concat(
                i,
                `px;
    padding-top: `,
              )
              .concat(
                o,
                `px;
    padding-right: `,
              )
              .concat(
                s,
                `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
              )
              .concat(a, "px ")
              .concat(
                r,
                `;
    `,
              ),
            n === "padding" &&
            "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Ja,
          ` {
    right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          el,
          ` {
    margin-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Ja, " .")
        .concat(
          Ja,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(el, " .")
        .concat(
          el,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          Ji,
          `] {
    `,
        )
        .concat(yL, ": ")
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  ty = function () {
    var e = parseInt(document.body.getAttribute(Ji) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  _L = function () {
    g.useEffect(function () {
      return (
        document.body.setAttribute(Ji, (ty() + 1).toString()),
        function () {
          var e = ty() - 1;
          e <= 0
            ? document.body.removeAttribute(Ji)
            : document.body.setAttribute(Ji, e.toString());
        }
      );
    }, []);
  },
  FL = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? "margin" : r;
    _L();
    var o = g.useMemo(
      function () {
        return OL(i);
      },
      [i],
    );
    return g.createElement(IL, { styles: LL(o, !t, i, n ? "" : "!important") });
  },
  wf = !1;
if (typeof window < "u")
  try {
    var Ma = Object.defineProperty({}, "passive", {
      get: function () {
        return ((wf = !0), !0);
      },
    });
    (window.addEventListener("test", Ma, Ma),
      window.removeEventListener("test", Ma, Ma));
  } catch {
    wf = !1;
  }
var Ei = wf ? { passive: !1 } : !1,
  VL = function (e) {
    return e.tagName === "TEXTAREA";
  },
  vS = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !VL(e) && n[t] === "visible")
    );
  },
  zL = function (e) {
    return vS(e, "overflowY");
  },
  BL = function (e) {
    return vS(e, "overflowX");
  },
  ny = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var i = yS(e, r);
      if (i) {
        var o = xS(e, r),
          s = o[1],
          a = o[2];
        if (s > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  $L = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  UL = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  yS = function (e, t) {
    return e === "v" ? zL(t) : BL(t);
  },
  xS = function (e, t) {
    return e === "v" ? $L(t) : UL(t);
  },
  WL = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  HL = function (e, t, n, r, i) {
    var o = WL(e, window.getComputedStyle(t).direction),
      s = o * r,
      a = n.target,
      l = t.contains(a),
      c = !1,
      u = s > 0,
      d = 0,
      f = 0;
    do {
      if (!a) break;
      var p = xS(e, a),
        b = p[0],
        m = p[1],
        w = p[2],
        y = m - w - o * b;
      (b || y) && yS(e, a) && ((d += y), (f += b));
      var v = a.parentNode;
      a = v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? v.host : v;
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((u && (Math.abs(d) < 1 || !i)) || (!u && (Math.abs(f) < 1 || !i))) &&
      (c = !0),
      c
    );
  },
  Da = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  ry = function (e) {
    return [e.deltaX, e.deltaY];
  },
  iy = function (e) {
    return e && "current" in e ? e.current : e;
  },
  KL = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  GL = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  qL = 0,
  ki = [];
function YL(e) {
  var t = g.useRef([]),
    n = g.useRef([0, 0]),
    r = g.useRef(),
    i = g.useState(qL++)[0],
    o = g.useState(gS)[0],
    s = g.useRef(e);
  (g.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    g.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(i));
          var m = nI([e.lockRef.current], (e.shards || []).map(iy), !0).filter(
            Boolean,
          );
          return (
            m.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(i));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(i)),
                m.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(i));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var a = g.useCallback(function (m, w) {
    if (
      ("touches" in m && m.touches.length === 2) ||
      (m.type === "wheel" && m.ctrlKey)
    )
      return !s.current.allowPinchZoom;
    var y = Da(m),
      v = n.current,
      x = "deltaX" in m ? m.deltaX : v[0] - y[0],
      S = "deltaY" in m ? m.deltaY : v[1] - y[1],
      C,
      k = m.target,
      E = Math.abs(x) > Math.abs(S) ? "h" : "v";
    if ("touches" in m && E === "h" && k.type === "range") return !1;
    var T = ny(E, k);
    if (!T) return !0;
    if ((T ? (C = E) : ((C = E === "v" ? "h" : "v"), (T = ny(E, k))), !T))
      return !1;
    if (
      (!r.current && "changedTouches" in m && (x || S) && (r.current = C), !C)
    )
      return !0;
    var R = r.current || C;
    return HL(R, w, m, R === "h" ? x : S, !0);
  }, []),
    l = g.useCallback(function (m) {
      var w = m;
      if (!(!ki.length || ki[ki.length - 1] !== o)) {
        var y = "deltaY" in w ? ry(w) : Da(w),
          v = t.current.filter(function (C) {
            return (
              C.name === w.type &&
              (C.target === w.target || w.target === C.shadowParent) &&
              KL(C.delta, y)
            );
          })[0];
        if (v && v.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!v) {
          var x = (s.current.shards || [])
            .map(iy)
            .filter(Boolean)
            .filter(function (C) {
              return C.contains(w.target);
            }),
            S = x.length > 0 ? a(w, x[0]) : !s.current.noIsolation;
          S && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    c = g.useCallback(function (m, w, y, v) {
      var x = { name: m, delta: w, target: y, should: v, shadowParent: QL(y) };
      (t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== x;
          });
        }, 1));
    }, []),
    u = g.useCallback(function (m) {
      ((n.current = Da(m)), (r.current = void 0));
    }, []),
    d = g.useCallback(function (m) {
      c(m.type, ry(m), m.target, a(m, e.lockRef.current));
    }, []),
    f = g.useCallback(function (m) {
      c(m.type, Da(m), m.target, a(m, e.lockRef.current));
    }, []);
  g.useEffect(function () {
    return (
      ki.push(o),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, Ei),
      document.addEventListener("touchmove", l, Ei),
      document.addEventListener("touchstart", u, Ei),
      function () {
        ((ki = ki.filter(function (m) {
          return m !== o;
        })),
          document.removeEventListener("wheel", l, Ei),
          document.removeEventListener("touchmove", l, Ei),
          document.removeEventListener("touchstart", u, Ei));
      }
    );
  }, []);
  var p = e.removeScrollBar,
    b = e.inert;
  return g.createElement(
    g.Fragment,
    null,
    b ? g.createElement(o, { styles: GL(i) }) : null,
    p
      ? g.createElement(FL, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function QL(e) {
  for (var t = null; e !== null;)
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
const XL = kL(hS, YL);
var wS = g.forwardRef(function (e, t) {
  return g.createElement(kc, wn({}, e, { ref: t, sideCar: XL }));
});
wS.classNames = kc.classNames;
var ZL = [" ", "Enter", "ArrowUp", "ArrowDown"],
  JL = [" ", "Enter"],
  pi = "Select",
  [Tc, Pc, e3] = A0(pi),
  [Ro, K3] = Gs(pi, [e3, fc]),
  jc = fc(),
  [t3, Or] = Ro(pi),
  [n3, r3] = Ro(pi),
  bS = (e) => {
    const {
      __scopeSelect: t,
      children: n,
      open: r,
      defaultOpen: i,
      onOpenChange: o,
      value: s,
      defaultValue: a,
      onValueChange: l,
      dir: c,
      name: u,
      autoComplete: d,
      disabled: f,
      required: p,
      form: b,
    } = e,
      m = jc(t),
      [w, y] = g.useState(null),
      [v, x] = g.useState(null),
      [S, C] = g.useState(!1),
      k = rL(c),
      [E, T] = Ad({ prop: r, defaultProp: i ?? !1, onChange: o, caller: pi }),
      [R, N] = Ad({ prop: s, defaultProp: a, onChange: l, caller: pi }),
      z = g.useRef(null),
      I = w ? b || !!w.closest("form") : !0,
      [K, M] = g.useState(new Set()),
      W = Array.from(K)
        .map((U) => U.props.value)
        .join(";");
    return h.jsx(_j, {
      ...m,
      children: h.jsxs(t3, {
        required: p,
        scope: t,
        trigger: w,
        onTriggerChange: y,
        valueNode: v,
        onValueNodeChange: x,
        valueNodeHasChildren: S,
        onValueNodeHasChildrenChange: C,
        contentId: Rp(),
        value: R,
        onValueChange: N,
        open: E,
        onOpenChange: T,
        dir: k,
        triggerPointerDownPosRef: z,
        disabled: f,
        children: [
          h.jsx(Tc.Provider, {
            scope: t,
            children: h.jsx(n3, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: g.useCallback((U) => {
                M((F) => new Set(F).add(U));
              }, []),
              onNativeOptionRemove: g.useCallback((U) => {
                M((F) => {
                  const P = new Set(F);
                  return (P.delete(U), P);
                });
              }, []),
              children: n,
            }),
          }),
          I
            ? h.jsxs(
              HS,
              {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: u,
                autoComplete: d,
                value: R,
                onChange: (U) => N(U.target.value),
                disabled: f,
                form: b,
                children: [
                  R === void 0 ? h.jsx("option", { value: "" }) : null,
                  Array.from(K),
                ],
              },
              W,
            )
            : null,
        ],
      }),
    });
  };
bS.displayName = pi;
var SS = "SelectTrigger",
  CS = g.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...i } = e,
      o = jc(n),
      s = Or(SS, n),
      a = s.disabled || r,
      l = Oe(t, s.onTriggerChange),
      c = Pc(n),
      u = g.useRef("touch"),
      [d, f, p] = GS((m) => {
        const w = c().filter((x) => !x.disabled),
          y = w.find((x) => x.value === s.value),
          v = qS(w, m, y);
        v !== void 0 && s.onValueChange(v.value);
      }),
      b = (m) => {
        (a || (s.onOpenChange(!0), p()),
          m &&
          (s.triggerPointerDownPosRef.current = {
            x: Math.round(m.pageX),
            y: Math.round(m.pageY),
          }));
      };
    return h.jsx(Lw, {
      asChild: !0,
      ...o,
      children: h.jsx(pe.button, {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": KS(s.value) ? "" : void 0,
        ...i,
        ref: l,
        onClick: oe(i.onClick, (m) => {
          (m.currentTarget.focus(), u.current !== "mouse" && b(m));
        }),
        onPointerDown: oe(i.onPointerDown, (m) => {
          u.current = m.pointerType;
          const w = m.target;
          (w.hasPointerCapture(m.pointerId) &&
            w.releasePointerCapture(m.pointerId),
            m.button === 0 &&
            m.ctrlKey === !1 &&
            m.pointerType === "mouse" &&
            (b(m), m.preventDefault()));
        }),
        onKeyDown: oe(i.onKeyDown, (m) => {
          const w = d.current !== "";
          (!(m.ctrlKey || m.altKey || m.metaKey) &&
            m.key.length === 1 &&
            f(m.key),
            !(w && m.key === " ") &&
            ZL.includes(m.key) &&
            (b(), m.preventDefault()));
        }),
      }),
    });
  });
CS.displayName = SS;
var ES = "SelectValue",
  kS = g.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      className: r,
      style: i,
      children: o,
      placeholder: s = "",
      ...a
    } = e,
      l = Or(ES, n),
      { onValueNodeHasChildrenChange: c } = l,
      u = o !== void 0,
      d = Oe(t, l.onValueNodeChange);
    return (
      Ye(() => {
        c(u);
      }, [c, u]),
      h.jsx(pe.span, {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: KS(l.value) ? h.jsx(h.Fragment, { children: s }) : o,
      })
    );
  });
kS.displayName = ES;
var i3 = "SelectIcon",
  TS = g.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...i } = e;
    return h.jsx(pe.span, {
      "aria-hidden": !0,
      ...i,
      ref: t,
      children: r || "▼",
    });
  });
TS.displayName = i3;
var o3 = "SelectPortal",
  PS = (e) => h.jsx(Sp, { asChild: !0, ...e });
PS.displayName = o3;
var mi = "SelectContent",
  jS = g.forwardRef((e, t) => {
    const n = Or(mi, e.__scopeSelect),
      [r, i] = g.useState();
    if (
      (Ye(() => {
        i(new DocumentFragment());
      }, []),
        !n.open)
    ) {
      const o = r;
      return o
        ? vi.createPortal(
          h.jsx(AS, {
            scope: e.__scopeSelect,
            children: h.jsx(Tc.Slot, {
              scope: e.__scopeSelect,
              children: h.jsx("div", { children: e.children }),
            }),
          }),
          o,
        )
        : null;
    }
    return h.jsx(RS, { ...e, ref: t });
  });
jS.displayName = mi;
var Xt = 10,
  [AS, Ir] = Ro(mi),
  s3 = "SelectContentImpl",
  a3 = As("SelectContent.RemoveScroll"),
  RS = g.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: i,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: f,
      collisionPadding: p,
      sticky: b,
      hideWhenDetached: m,
      avoidCollisions: w,
      ...y
    } = e,
      v = Or(mi, n),
      [x, S] = g.useState(null),
      [C, k] = g.useState(null),
      E = Oe(t, (_) => S(_)),
      [T, R] = g.useState(null),
      [N, z] = g.useState(null),
      I = Pc(n),
      [K, M] = g.useState(!1),
      W = g.useRef(!1);
    (g.useEffect(() => {
      if (x) return gL(x);
    }, [x]),
      iL());
    const U = g.useCallback(
      (_) => {
        const [le, ...ye] = I().map((ne) => ne.ref.current),
          [ie] = ye.slice(-1),
          te = document.activeElement;
        for (const ne of _)
          if (
            ne === te ||
            (ne == null || ne.scrollIntoView({ block: "nearest" }),
              ne === le && C && (C.scrollTop = 0),
              ne === ie && C && (C.scrollTop = C.scrollHeight),
              ne == null || ne.focus(),
              document.activeElement !== te)
          )
            return;
      },
      [I, C],
    ),
      F = g.useCallback(() => U([T, x]), [U, T, x]);
    g.useEffect(() => {
      K && F();
    }, [K, F]);
    const { onOpenChange: P, triggerPointerDownPosRef: j } = v;
    (g.useEffect(() => {
      if (x) {
        let _ = { x: 0, y: 0 };
        const le = (ie) => {
          var te, ne;
          _ = {
            x: Math.abs(
              Math.round(ie.pageX) -
              (((te = j.current) == null ? void 0 : te.x) ?? 0),
            ),
            y: Math.abs(
              Math.round(ie.pageY) -
              (((ne = j.current) == null ? void 0 : ne.y) ?? 0),
            ),
          };
        },
          ye = (ie) => {
            (_.x <= 10 && _.y <= 10
              ? ie.preventDefault()
              : x.contains(ie.target) || P(!1),
              document.removeEventListener("pointermove", le),
              (j.current = null));
          };
        return (
          j.current !== null &&
          (document.addEventListener("pointermove", le),
            document.addEventListener("pointerup", ye, {
              capture: !0,
              once: !0,
            })),
          () => {
            (document.removeEventListener("pointermove", le),
              document.removeEventListener("pointerup", ye, { capture: !0 }));
          }
        );
      }
    }, [x, P, j]),
      g.useEffect(() => {
        const _ = () => P(!1);
        return (
          window.addEventListener("blur", _),
          window.addEventListener("resize", _),
          () => {
            (window.removeEventListener("blur", _),
              window.removeEventListener("resize", _));
          }
        );
      }, [P]));
    const [L, G] = GS((_) => {
      const le = I().filter((te) => !te.disabled),
        ye = le.find((te) => te.ref.current === document.activeElement),
        ie = qS(le, _, ye);
      ie && setTimeout(() => ie.ref.current.focus());
    }),
      H = g.useCallback(
        (_, le, ye) => {
          const ie = !W.current && !ye;
          ((v.value !== void 0 && v.value === le) || ie) &&
            (R(_), ie && (W.current = !0));
        },
        [v.value],
      ),
      X = g.useCallback(() => (x == null ? void 0 : x.focus()), [x]),
      q = g.useCallback(
        (_, le, ye) => {
          const ie = !W.current && !ye;
          ((v.value !== void 0 && v.value === le) || ie) && z(_);
        },
        [v.value],
      ),
      me = r === "popper" ? bf : NS,
      ue =
        me === bf
          ? {
            side: a,
            sideOffset: l,
            align: c,
            alignOffset: u,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: b,
            hideWhenDetached: m,
            avoidCollisions: w,
          }
          : {};
    return h.jsx(AS, {
      scope: n,
      content: x,
      viewport: C,
      onViewportChange: k,
      itemRefCallback: H,
      selectedItem: T,
      onItemLeave: X,
      itemTextRefCallback: q,
      focusSelectedItem: F,
      selectedItemText: N,
      position: r,
      isPositioned: K,
      searchRef: L,
      children: h.jsx(wS, {
        as: a3,
        allowPinchZoom: !0,
        children: h.jsx(dS, {
          asChild: !0,
          trapped: v.open,
          onMountAutoFocus: (_) => {
            _.preventDefault();
          },
          onUnmountAutoFocus: oe(i, (_) => {
            var le;
            ((le = v.trigger) == null || le.focus({ preventScroll: !0 }),
              _.preventDefault());
          }),
          children: h.jsx(oc, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            onFocusOutside: (_) => _.preventDefault(),
            onDismiss: () => v.onOpenChange(!1),
            children: h.jsx(me, {
              role: "listbox",
              id: v.contentId,
              "data-state": v.open ? "open" : "closed",
              dir: v.dir,
              onContextMenu: (_) => _.preventDefault(),
              ...y,
              ...ue,
              onPlaced: () => M(!0),
              ref: E,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...y.style,
              },
              onKeyDown: oe(y.onKeyDown, (_) => {
                const le = _.ctrlKey || _.altKey || _.metaKey;
                if (
                  (_.key === "Tab" && _.preventDefault(),
                    !le && _.key.length === 1 && G(_.key),
                    ["ArrowUp", "ArrowDown", "Home", "End"].includes(_.key))
                ) {
                  let ie = I()
                    .filter((te) => !te.disabled)
                    .map((te) => te.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(_.key) &&
                      (ie = ie.slice().reverse()),
                      ["ArrowUp", "ArrowDown"].includes(_.key))
                  ) {
                    const te = _.target,
                      ne = ie.indexOf(te);
                    ie = ie.slice(ne + 1);
                  }
                  (setTimeout(() => U(ie)), _.preventDefault());
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
RS.displayName = s3;
var l3 = "SelectItemAlignedPosition",
  NS = g.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...i } = e,
      o = Or(mi, n),
      s = Ir(mi, n),
      [a, l] = g.useState(null),
      [c, u] = g.useState(null),
      d = Oe(t, (E) => u(E)),
      f = Pc(n),
      p = g.useRef(!1),
      b = g.useRef(!0),
      {
        viewport: m,
        selectedItem: w,
        selectedItemText: y,
        focusSelectedItem: v,
      } = s,
      x = g.useCallback(() => {
        if (o.trigger && o.valueNode && a && c && m && w && y) {
          const E = o.trigger.getBoundingClientRect(),
            T = c.getBoundingClientRect(),
            R = o.valueNode.getBoundingClientRect(),
            N = y.getBoundingClientRect();
          if (o.dir !== "rtl") {
            const te = N.left - T.left,
              ne = R.left - te,
              Fe = E.left - ne,
              rt = E.width + Fe,
              dn = Math.max(rt, T.width),
              zt = window.innerWidth - Xt,
              pt = qv(ne, [Xt, Math.max(Xt, zt - dn)]);
            ((a.style.minWidth = rt + "px"), (a.style.left = pt + "px"));
          } else {
            const te = T.right - N.right,
              ne = window.innerWidth - R.right - te,
              Fe = window.innerWidth - E.right - ne,
              rt = E.width + Fe,
              dn = Math.max(rt, T.width),
              zt = window.innerWidth - Xt,
              pt = qv(ne, [Xt, Math.max(Xt, zt - dn)]);
            ((a.style.minWidth = rt + "px"), (a.style.right = pt + "px"));
          }
          const z = f(),
            I = window.innerHeight - Xt * 2,
            K = m.scrollHeight,
            M = window.getComputedStyle(c),
            W = parseInt(M.borderTopWidth, 10),
            U = parseInt(M.paddingTop, 10),
            F = parseInt(M.borderBottomWidth, 10),
            P = parseInt(M.paddingBottom, 10),
            j = W + U + K + P + F,
            L = Math.min(w.offsetHeight * 5, j),
            G = window.getComputedStyle(m),
            H = parseInt(G.paddingTop, 10),
            X = parseInt(G.paddingBottom, 10),
            q = E.top + E.height / 2 - Xt,
            me = I - q,
            ue = w.offsetHeight / 2,
            _ = w.offsetTop + ue,
            le = W + U + _,
            ye = j - le;
          if (le <= q) {
            const te = z.length > 0 && w === z[z.length - 1].ref.current;
            a.style.bottom = "0px";
            const ne = c.clientHeight - m.offsetTop - m.offsetHeight,
              Fe = Math.max(me, ue + (te ? X : 0) + ne + F),
              rt = le + Fe;
            a.style.height = rt + "px";
          } else {
            const te = z.length > 0 && w === z[0].ref.current;
            a.style.top = "0px";
            const Fe = Math.max(q, W + m.offsetTop + (te ? H : 0) + ue) + ye;
            ((a.style.height = Fe + "px"),
              (m.scrollTop = le - q + m.offsetTop));
          }
          ((a.style.margin = `${Xt}px 0`),
            (a.style.minHeight = L + "px"),
            (a.style.maxHeight = I + "px"),
            r == null || r(),
            requestAnimationFrame(() => (p.current = !0)));
        }
      }, [f, o.trigger, o.valueNode, a, c, m, w, y, o.dir, r]);
    Ye(() => x(), [x]);
    const [S, C] = g.useState();
    Ye(() => {
      c && C(window.getComputedStyle(c).zIndex);
    }, [c]);
    const k = g.useCallback(
      (E) => {
        E && b.current === !0 && (x(), v == null || v(), (b.current = !1));
      },
      [x, v],
    );
    return h.jsx(u3, {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: k,
      children: h.jsx("div", {
        ref: l,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: S,
        },
        children: h.jsx(pe.div, {
          ...i,
          ref: d,
          style: { boxSizing: "border-box", maxHeight: "100%", ...i.style },
        }),
      }),
    });
  });
NS.displayName = l3;
var c3 = "SelectPopperPosition",
  bf = g.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      align: r = "start",
      collisionPadding: i = Xt,
      ...o
    } = e,
      s = jc(n);
    return h.jsx(_w, {
      ...s,
      ...o,
      ref: t,
      align: r,
      collisionPadding: i,
      style: {
        boxSizing: "border-box",
        ...o.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
bf.displayName = c3;
var [u3, Cm] = Ro(mi, {}),
  Sf = "SelectViewport",
  MS = g.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...i } = e,
      o = Ir(Sf, n),
      s = Cm(Sf, n),
      a = Oe(t, o.onViewportChange),
      l = g.useRef(0);
    return h.jsxs(h.Fragment, {
      children: [
        h.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        h.jsx(Tc.Slot, {
          scope: n,
          children: h.jsx(pe.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...i,
            ref: a,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...i.style,
            },
            onScroll: oe(i.onScroll, (c) => {
              const u = c.currentTarget,
                { contentWrapper: d, shouldExpandOnScrollRef: f } = s;
              if (f != null && f.current && d) {
                const p = Math.abs(l.current - u.scrollTop);
                if (p > 0) {
                  const b = window.innerHeight - Xt * 2,
                    m = parseFloat(d.style.minHeight),
                    w = parseFloat(d.style.height),
                    y = Math.max(m, w);
                  if (y < b) {
                    const v = y + p,
                      x = Math.min(b, v),
                      S = v - x;
                    ((d.style.height = x + "px"),
                      d.style.bottom === "0px" &&
                      ((u.scrollTop = S > 0 ? S : 0),
                        (d.style.justifyContent = "flex-end")));
                  }
                }
              }
              l.current = u.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
MS.displayName = Sf;
var DS = "SelectGroup",
  [d3, f3] = Ro(DS),
  p3 = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      i = Rp();
    return h.jsx(d3, {
      scope: n,
      id: i,
      children: h.jsx(pe.div, {
        role: "group",
        "aria-labelledby": i,
        ...r,
        ref: t,
      }),
    });
  });
p3.displayName = DS;
var OS = "SelectLabel",
  IS = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      i = f3(OS, n);
    return h.jsx(pe.div, { id: i.id, ...r, ref: t });
  });
IS.displayName = OS;
var $l = "SelectItem",
  [m3, LS] = Ro($l),
  _S = g.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: i = !1,
      textValue: o,
      ...s
    } = e,
      a = Or($l, n),
      l = Ir($l, n),
      c = a.value === r,
      [u, d] = g.useState(o ?? ""),
      [f, p] = g.useState(!1),
      b = Oe(t, (v) => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, v, r, i);
      }),
      m = Rp(),
      w = g.useRef("touch"),
      y = () => {
        i || (a.onValueChange(r), a.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return h.jsx(m3, {
      scope: n,
      value: r,
      disabled: i,
      textId: m,
      isSelected: c,
      onItemTextChange: g.useCallback((v) => {
        d((x) => x || ((v == null ? void 0 : v.textContent) ?? "").trim());
      }, []),
      children: h.jsx(Tc.ItemSlot, {
        scope: n,
        value: r,
        disabled: i,
        textValue: u,
        children: h.jsx(pe.div, {
          role: "option",
          "aria-labelledby": m,
          "data-highlighted": f ? "" : void 0,
          "aria-selected": c && f,
          "data-state": c ? "checked" : "unchecked",
          "aria-disabled": i || void 0,
          "data-disabled": i ? "" : void 0,
          tabIndex: i ? void 0 : -1,
          ...s,
          ref: b,
          onFocus: oe(s.onFocus, () => p(!0)),
          onBlur: oe(s.onBlur, () => p(!1)),
          onClick: oe(s.onClick, () => {
            w.current !== "mouse" && y();
          }),
          onPointerUp: oe(s.onPointerUp, () => {
            w.current === "mouse" && y();
          }),
          onPointerDown: oe(s.onPointerDown, (v) => {
            w.current = v.pointerType;
          }),
          onPointerMove: oe(s.onPointerMove, (v) => {
            var x;
            ((w.current = v.pointerType),
              i
                ? (x = l.onItemLeave) == null || x.call(l)
                : w.current === "mouse" &&
                v.currentTarget.focus({ preventScroll: !0 }));
          }),
          onPointerLeave: oe(s.onPointerLeave, (v) => {
            var x;
            v.currentTarget === document.activeElement &&
              ((x = l.onItemLeave) == null || x.call(l));
          }),
          onKeyDown: oe(s.onKeyDown, (v) => {
            var S;
            (((S = l.searchRef) == null ? void 0 : S.current) !== "" &&
              v.key === " ") ||
              (JL.includes(v.key) && y(), v.key === " " && v.preventDefault());
          }),
        }),
      }),
    });
  });
_S.displayName = $l;
var Xo = "SelectItemText",
  FS = g.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: i, ...o } = e,
      s = Or(Xo, n),
      a = Ir(Xo, n),
      l = LS(Xo, n),
      c = r3(Xo, n),
      [u, d] = g.useState(null),
      f = Oe(
        t,
        (y) => d(y),
        l.onItemTextChange,
        (y) => {
          var v;
          return (v = a.itemTextRefCallback) == null
            ? void 0
            : v.call(a, y, l.value, l.disabled);
        },
      ),
      p = u == null ? void 0 : u.textContent,
      b = g.useMemo(
        () =>
          h.jsx(
            "option",
            { value: l.value, disabled: l.disabled, children: p },
            l.value,
          ),
        [l.disabled, l.value, p],
      ),
      { onNativeOptionAdd: m, onNativeOptionRemove: w } = c;
    return (
      Ye(() => (m(b), () => w(b)), [m, w, b]),
      h.jsxs(h.Fragment, {
        children: [
          h.jsx(pe.span, { id: l.textId, ...o, ref: f }),
          l.isSelected && s.valueNode && !s.valueNodeHasChildren
            ? vi.createPortal(o.children, s.valueNode)
            : null,
        ],
      })
    );
  });
FS.displayName = Xo;
var VS = "SelectItemIndicator",
  zS = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return LS(VS, n).isSelected
      ? h.jsx(pe.span, { "aria-hidden": !0, ...r, ref: t })
      : null;
  });
zS.displayName = VS;
var Cf = "SelectScrollUpButton",
  BS = g.forwardRef((e, t) => {
    const n = Ir(Cf, e.__scopeSelect),
      r = Cm(Cf, e.__scopeSelect),
      [i, o] = g.useState(!1),
      s = Oe(t, r.onScrollButtonChange);
    return (
      Ye(() => {
        if (n.viewport && n.isPositioned) {
          let a = function () {
            const c = l.scrollTop > 0;
            o(c);
          };
          const l = n.viewport;
          return (
            a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
          );
        }
      }, [n.viewport, n.isPositioned]),
      i
        ? h.jsx(US, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const { viewport: a, selectedItem: l } = n;
            a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
          },
        })
        : null
    );
  });
BS.displayName = Cf;
var Ef = "SelectScrollDownButton",
  $S = g.forwardRef((e, t) => {
    const n = Ir(Ef, e.__scopeSelect),
      r = Cm(Ef, e.__scopeSelect),
      [i, o] = g.useState(!1),
      s = Oe(t, r.onScrollButtonChange);
    return (
      Ye(() => {
        if (n.viewport && n.isPositioned) {
          let a = function () {
            const c = l.scrollHeight - l.clientHeight,
              u = Math.ceil(l.scrollTop) < c;
            o(u);
          };
          const l = n.viewport;
          return (
            a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
          );
        }
      }, [n.viewport, n.isPositioned]),
      i
        ? h.jsx(US, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const { viewport: a, selectedItem: l } = n;
            a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
          },
        })
        : null
    );
  });
$S.displayName = Ef;
var US = g.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...i } = e,
    o = Ir("SelectScrollButton", n),
    s = g.useRef(null),
    a = Pc(n),
    l = g.useCallback(() => {
      s.current !== null &&
        (window.clearInterval(s.current), (s.current = null));
    }, []);
  return (
    g.useEffect(() => () => l(), [l]),
    Ye(() => {
      var u;
      const c = a().find((d) => d.ref.current === document.activeElement);
      (u = c == null ? void 0 : c.ref.current) == null ||
        u.scrollIntoView({ block: "nearest" });
    }, [a]),
    h.jsx(pe.div, {
      "aria-hidden": !0,
      ...i,
      ref: t,
      style: { flexShrink: 0, ...i.style },
      onPointerDown: oe(i.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: oe(i.onPointerMove, () => {
        var c;
        ((c = o.onItemLeave) == null || c.call(o),
          s.current === null && (s.current = window.setInterval(r, 50)));
      }),
      onPointerLeave: oe(i.onPointerLeave, () => {
        l();
      }),
    })
  );
}),
  h3 = "SelectSeparator",
  WS = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return h.jsx(pe.div, { "aria-hidden": !0, ...r, ref: t });
  });
WS.displayName = h3;
var kf = "SelectArrow",
  g3 = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      i = jc(n),
      o = Or(kf, n),
      s = Ir(kf, n);
    return o.open && s.position === "popper"
      ? h.jsx(Fw, { ...i, ...r, ref: t })
      : null;
  });
g3.displayName = kf;
var v3 = "SelectBubbleInput",
  HS = g.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
    const i = g.useRef(null),
      o = Oe(r, i),
      s = fL(t);
    return (
      g.useEffect(() => {
        const a = i.current;
        if (!a) return;
        const l = window.HTMLSelectElement.prototype,
          u = Object.getOwnPropertyDescriptor(l, "value").set;
        if (s !== t && u) {
          const d = new Event("change", { bubbles: !0 });
          (u.call(a, t), a.dispatchEvent(d));
        }
      }, [s, t]),
      h.jsx(pe.select, {
        ...n,
        style: { ...O0, ...n.style },
        ref: o,
        defaultValue: t,
      })
    );
  });
HS.displayName = v3;
function KS(e) {
  return e === "" || e === void 0;
}
function GS(e) {
  const t = ln(e),
    n = g.useRef(""),
    r = g.useRef(0),
    i = g.useCallback(
      (s) => {
        const a = n.current + s;
        (t(a),
          (function l(c) {
            ((n.current = c),
              window.clearTimeout(r.current),
              c !== "" && (r.current = window.setTimeout(() => l(""), 1e3)));
          })(a));
      },
      [t],
    ),
    o = g.useCallback(() => {
      ((n.current = ""), window.clearTimeout(r.current));
    }, []);
  return (
    g.useEffect(() => () => window.clearTimeout(r.current), []),
    [n, i, o]
  );
}
function qS(e, t, n) {
  const i = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t,
    o = n ? e.indexOf(n) : -1;
  let s = y3(e, Math.max(o, 0));
  i.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find((c) =>
    c.textValue.toLowerCase().startsWith(i.toLowerCase()),
  );
  return l !== n ? l : void 0;
}
function y3(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var x3 = bS,
  YS = CS,
  w3 = kS,
  b3 = TS,
  S3 = PS,
  QS = jS,
  C3 = MS,
  XS = IS,
  ZS = _S,
  E3 = FS,
  k3 = zS,
  JS = BS,
  eC = $S,
  tC = WS;
const T3 = x3,
  P3 = w3,
  nC = g.forwardRef(({ className: e, children: t, ...n }, r) =>
    h.jsxs(YS, {
      ref: r,
      className: $e(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e,
      ),
      ...n,
      children: [
        t,
        h.jsx(b3, {
          asChild: !0,
          children: h.jsx(lc, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    }),
  );
nC.displayName = YS.displayName;
const rC = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(JS, {
    ref: n,
    className: $e("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: h.jsx(rw, { className: "h-4 w-4" }),
  }),
);
rC.displayName = JS.displayName;
const iC = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(eC, {
    ref: n,
    className: $e("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: h.jsx(lc, { className: "h-4 w-4" }),
  }),
);
iC.displayName = eC.displayName;
const oC = g.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, i) =>
    h.jsx(S3, {
      children: h.jsxs(QS, {
        ref: i,
        className: $e(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          n === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e,
        ),
        position: n,
        ...r,
        children: [
          h.jsx(rC, {}),
          h.jsx(C3, {
            className: $e(
              "p-1",
              n === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: t,
          }),
          h.jsx(iC, {}),
        ],
      }),
    }),
);
oC.displayName = QS.displayName;
const j3 = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(XS, {
    ref: n,
    className: $e("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t,
  }),
);
j3.displayName = XS.displayName;
const sC = g.forwardRef(({ className: e, children: t, ...n }, r) =>
  h.jsxs(ZS, {
    ref: r,
    className: $e(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e,
    ),
    ...n,
    children: [
      h.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: h.jsx(k3, { children: h.jsx(oi, { className: "h-4 w-4" }) }),
      }),
      h.jsx(E3, { children: t }),
    ],
  }),
);
sC.displayName = ZS.displayName;
const A3 = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(tC, { ref: n, className: $e("-mx-1 my-1 h-px bg-muted", e), ...t }),
);
A3.displayName = tC.displayName;
const R3 = [
  { value: "oily", label: "Oily", icon: "💧" },
  { value: "dry", label: "Dry", icon: "🏜️" },
  { value: "combination", label: "Combination", icon: "⚖️" },
  { value: "sensitive", label: "Sensitive", icon: "🌸" },
  { value: "normal", label: "Normal", icon: "✨" },
],
  N3 = [
    "Acne",
    "Wrinkles",
    "Dark Spots",
    "Redness",
    "Dryness",
    "Oiliness",
    "Large Pores",
    "Uneven Texture",
  ],
  M3 = ({ onUserInfoChange: e }) => {
    const [t, n] = g.useState(!1),
      [r, i] = g.useState({
        age: "",
        gender: "",
        skinType: "",
        concerns: [],
        allergies: "",
      }),
      [o, s] = g.useState(!1);
    g.useEffect(() => {
      const f = localStorage.getItem("skinAnalysisUserInfo");
      f && i(JSON.parse(f));
    }, []);
    const a = (f, p) => {
      const b = { ...r, [f]: p };
      i(b);
    },
      l = (f) => {
        const p = r.concerns.includes(f)
          ? r.concerns.filter((b) => b !== f)
          : [...r.concerns, f];
        a("concerns", p);
      },
      c = () => {
        (localStorage.setItem("skinAnalysisUserInfo", JSON.stringify(r)),
          e(r),
          s(!0),
          setTimeout(() => s(!1), 2e3));
      },
      u = () => {
        const f = {
          age: "",
          gender: "",
          skinType: "",
          concerns: [],
          allergies: "",
        };
        (i(f), localStorage.removeItem("skinAnalysisUserInfo"), e(f));
      },
      d = r.age || r.gender || r.skinType || r.concerns.length > 0;
    return h.jsxs("div", {
      className: "glass-card overflow-hidden",
      children: [
        h.jsxs("button", {
          onClick: () => n(!t),
          className:
            "w-full px-6 py-4 flex items-center justify-between transition-colors hover:bg-primary/5",
          children: [
            h.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                h.jsx("div", {
                  className:
                    "flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10",
                  children: h.jsx(eP, { className: "h-5 w-5 text-primary" }),
                }),
                h.jsxs("div", {
                  className: "text-left",
                  children: [
                    h.jsx("span", {
                      className:
                        "block text-body font-medium text-foreground-heading",
                      children: "Personal Information",
                    }),
                    h.jsx("span", {
                      className: "block text-body-sm text-foreground-muted",
                      children: d
                        ? "Customize your analysis"
                        : "Optional - helps personalize results",
                    }),
                  ],
                }),
              ],
            }),
            h.jsx(Q.div, {
              animate: { rotate: t ? 180 : 0 },
              transition: { duration: 0.3 },
              children: h.jsx(lc, {
                className: "h-5 w-5 text-foreground-muted",
              }),
            }),
          ],
        }),
        d &&
        !t &&
        h.jsx(Q.div, {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          className: "px-6 pb-4",
          children: h.jsxs("div", {
            className:
              "flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10",
            children: [
              h.jsx(GT, { className: "h-4 w-4 text-primary flex-shrink-0" }),
              h.jsxs("span", {
                className: "text-body-sm text-foreground",
                children: [
                  "Analysis personalized for ",
                  r.age ? `${r.age}-year-old ` : "",
                  r.skinType ? `with ${r.skinType} skin` : "your profile",
                ],
              }),
            ],
          }),
        }),
        h.jsx(xm, {
          children:
            t &&
            h.jsx(Q.div, {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.3 },
              className: "overflow-hidden",
              children: h.jsxs("div", {
                className: "px-6 pb-6 space-y-6 border-t border-border",
                children: [
                  h.jsxs("div", {
                    className: "pt-6 grid gap-6 sm:grid-cols-2",
                    children: [
                      h.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          h.jsxs(Ti, {
                            htmlFor: "age",
                            className: "text-body-sm font-medium",
                            children: [
                              "Age",
                              h.jsx("span", {
                                className:
                                  "ml-2 text-caption text-foreground-muted font-normal",
                                children: "Optional",
                              }),
                            ],
                          }),
                          h.jsx(aS, {
                            id: "age",
                            type: "number",
                            min: "1",
                            max: "120",
                            placeholder: "Enter your age",
                            value: r.age,
                            onChange: (f) => a("age", f.target.value),
                            className: "h-11",
                          }),
                          h.jsx("p", {
                            className: "text-caption text-foreground-muted",
                            children:
                              "Helps provide age-appropriate recommendations",
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          h.jsxs(Ti, {
                            className: "text-body-sm font-medium",
                            children: [
                              "Gender",
                              h.jsx("span", {
                                className:
                                  "ml-2 text-caption text-foreground-muted font-normal",
                                children: "Optional",
                              }),
                            ],
                          }),
                          h.jsx("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                              "Male",
                              "Female",
                              "Other",
                              "Prefer not to say",
                            ].map((f) =>
                              h.jsx(
                                "button",
                                {
                                  onClick: () => a("gender", f.toLowerCase()),
                                  className: `
                          px-3 py-2.5 rounded-lg border text-body-sm font-medium transition-all
                          ${r.gender === f.toLowerCase() ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50 text-foreground"}
                        `,
                                  children: f,
                                },
                                f,
                              ),
                            ),
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "space-y-2 sm:col-span-2",
                        children: [
                          h.jsxs(Ti, {
                            className:
                              "text-body-sm font-medium flex items-center gap-2",
                            children: [
                              h.jsx($T, { className: "h-4 w-4 text-primary" }),
                              "Skin Type",
                            ],
                          }),
                          h.jsxs(T3, {
                            value: r.skinType,
                            onValueChange: (f) => a("skinType", f),
                            children: [
                              h.jsx(nC, {
                                className: "h-11",
                                children: h.jsx(P3, {
                                  placeholder: "Select your skin type",
                                }),
                              }),
                              h.jsx(oC, {
                                children: R3.map((f) =>
                                  h.jsx(
                                    sC,
                                    {
                                      value: f.value,
                                      children: h.jsxs("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          h.jsx("span", { children: f.icon }),
                                          h.jsx("span", { children: f.label }),
                                        ],
                                      }),
                                    },
                                    f.value,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "space-y-2 sm:col-span-2",
                        children: [
                          h.jsx(Ti, {
                            className: "text-body-sm font-medium",
                            children: "Current Concerns",
                          }),
                          h.jsx("div", {
                            className: "flex flex-wrap gap-2",
                            children: N3.map((f) =>
                              h.jsxs(
                                "button",
                                {
                                  onClick: () => l(f),
                                  className: `
                          px-3 py-1.5 rounded-full text-body-sm font-medium transition-all
                          ${r.concerns.includes(f) ? "bg-primary text-primary-foreground" : "bg-background border border-border hover:border-primary/50 text-foreground"}
                        `,
                                  children: [
                                    r.concerns.includes(f) &&
                                    h.jsx(oi, {
                                      className: "inline h-3 w-3 mr-1",
                                    }),
                                    f,
                                  ],
                                },
                                f,
                              ),
                            ),
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "space-y-2 sm:col-span-2",
                        children: [
                          h.jsxs(Ti, {
                            htmlFor: "allergies",
                            className:
                              "text-body-sm font-medium flex items-center gap-2",
                            children: [
                              h.jsx(JT, { className: "h-4 w-4 text-warning" }),
                              "Allergies / Sensitivities",
                            ],
                          }),
                          h.jsx(uS, {
                            id: "allergies",
                            placeholder:
                              "Any known allergies to skincare ingredients?",
                            value: r.allergies,
                            onChange: (f) => a("allergies", f.target.value),
                            maxLength: 500,
                            className: "min-h-[80px] resize-none",
                          }),
                          h.jsxs("div", {
                            className:
                              "flex justify-between text-caption text-foreground-muted",
                            children: [
                              h.jsx("span", {
                                children: "Optional but recommended for safety",
                              }),
                              h.jsxs("span", {
                                children: [r.allergies.length, "/500"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className:
                      "flex items-center gap-2 p-3 rounded-lg bg-success/5 border border-success/10",
                    children: [
                      h.jsx(oi, {
                        className: "h-4 w-4 text-success flex-shrink-0",
                      }),
                      h.jsx("span", {
                        className: "text-caption text-foreground-muted",
                        children:
                          "Your data stays on your device and is never shared",
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      h.jsx(vt, {
                        variant: "outline",
                        onClick: u,
                        className: "flex-1",
                        size: "sm",
                        children: "Clear All",
                      }),
                      h.jsx(vt, {
                        onClick: c,
                        className:
                          "flex-1 accent-gradient text-primary-foreground border-0",
                        size: "sm",
                        children: o
                          ? h.jsxs(h.Fragment, {
                            children: [
                              h.jsx(oi, { className: "h-4 w-4 mr-2" }),
                              "Saved!",
                            ],
                          })
                          : "Save & Update",
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
      ],
    });
  },
  D3 = ({ onClick: e, disabled: t, isAnalyzing: n }) =>
    h.jsxs(Q.div, {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: 0.3 },
      className: "mt-6",
      children: [
        h.jsx(vt, {
          onClick: e,
          disabled: t || n,
          size: "lg",
          className: `
          w-full h-14 text-lg font-semibold transition-all duration-300
          ${t ? "bg-muted text-muted-foreground cursor-not-allowed" : "accent-gradient text-primary-foreground shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5"}
        `,
          children: n
            ? h.jsxs(h.Fragment, {
              children: [
                h.jsx(Q.div, {
                  animate: { rotate: 360 },
                  transition: { duration: 1, repeat: 1 / 0, ease: "linear" },
                  children: h.jsx(Dd, { className: "h-5 w-5 mr-2" }),
                }),
                "Analyzing...",
              ],
            })
            : h.jsxs(h.Fragment, {
              children: [
                h.jsx(Dd, { className: "h-5 w-5 mr-2" }),
                "Analyze My Skin",
                h.jsx(LT, { className: "h-5 w-5 ml-2" }),
              ],
            }),
        }),
        !t &&
        h.jsx("p", {
          className: "text-center text-caption text-foreground-muted mt-3",
          children:
            "Free analysis • No account required • Results in seconds",
        }),
      ],
    }),
  Iu = {
    condition: "Mild Acne Vulgaris",
    confidence: 87,
    severity: "low",
    findings: [
      "Multiple small comedones detected on T-zone area",
      "Mild inflammation present around affected regions",
      "No signs of scarring or severe pustules",
      "Skin barrier appears mostly intact",
    ],
    recommendations: [
      "Salicylic Acid",
      "Gentle Cleanser",
      "Non-comedogenic",
      "SPF 30+",
      "Avoid Touching",
    ],
  },
  O3 = {
    overview:
      "Based on the analysis, your skin shows signs of mild acne vulgaris, a common condition affecting the sebaceous glands. The affected areas primarily show comedonal acne (blackheads and whiteheads) with minimal inflammatory lesions. This is a treatable condition that responds well to consistent skincare.",
    causes: [
      "Excess sebum production blocking hair follicles",
      "Hormonal fluctuations affecting oil gland activity",
      "Potential product build-up or inadequate cleansing",
      "Environmental factors including humidity and pollution",
    ],
    routine: [
      "Cleanse twice daily with a gentle, pH-balanced cleanser",
      "Apply a 2% salicylic acid treatment to affected areas",
      "Use a lightweight, oil-free moisturizer",
      "Apply broad-spectrum SPF 30+ sunscreen every morning",
      "Consider retinoid treatment for evening routine (consult dermatologist)",
    ],
    whenToSee:
      "If you notice persistent inflammation, painful cysts, or if over-the-counter treatments don't show improvement within 6-8 weeks, consider consulting a board-certified dermatologist for prescription options.",
    tips: [
      "Stay hydrated with 8+ glasses of water daily",
      "Change pillowcases weekly",
      "Avoid touching your face throughout the day",
    ],
  },
  I3 = () => {
    const [e, t] = g.useState(null),
      [n, r] = g.useState(null),
      [i, o] = g.useState(!1),
      [s, a] = g.useState(!1),
      [l, c] = g.useState(!1),
      [u, d] = g.useState(null),
      f = g.useRef(null),
      p = () => {
        var x;
        (x = f.current) == null || x.scrollIntoView({ behavior: "smooth" });
      },
      b = (x, S) => {
        (r(x), t(S), a(!1));
      },
      m = () => {
        (t(null), r(null), a(!1));
      },
      w = async () => {
        if (!e || !n) return;
        o(!0);
        const x = new FormData();
        x.append("file", n);
        u && (x.append("age", u.age), x.append("gender", u.gender), x.append("skin_type", u.skinType), x.append("history", u.allergies));
        try {
          const C = await (
            await fetch("http://localhost:5001/predict", {
              method: "POST",
              body: x,
            })
          ).json();
          if (C.error) {
            (alert("Error: " + C.error), o(!1));
            return;
          }
          ((Iu.condition = C.prediction),
            (Iu.confidence = C.confidence),
            C.detailed_analysis && Object.assign(O3, C.detailed_analysis),
            setTimeout(() => {
              y();
            }, 2e3));
        } catch (S) {
          (console.error("Error:", S),
            alert(
              "Failed to analyze image. Please ensure the Flask server is running on port 5001.",
            ),
            o(!1));
        }
      },
      y = () => {
        (o(!1),
          a(!0),
          c(!0),
          setTimeout(() => {
            c(!1);
          }, 1500));
      },
      v = (x) => {
        d(x);
      };
    return h.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        h.jsx(QO, { onStartAnalysis: p }),
        h.jsx("section", {
          ref: f,
          className: "py-12 md:py-20 px-4 sm:px-6 lg:px-8",
          children: h.jsxs("div", {
            className: "container mx-auto max-w-7xl",
            children: [
              h.jsxs(Q.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.5 },
                className: "text-center mb-12",
                children: [
                  h.jsx("h2", {
                    className:
                      "font-heading text-h2-mobile md:text-h2 text-foreground-heading mb-4",
                    children: "Start Your Analysis",
                  }),
                  h.jsx("p", {
                    className:
                      "text-body-lg text-foreground-muted max-w-2xl mx-auto",
                    children:
                      "Upload a clear photo of your skin and let our AI provide personalized insights and recommendations.",
                  }),
                ],
              }),
              h.jsx("div", {
                className: "mb-8",
                children: h.jsx(M3, { onUserInfoChange: v }),
              }),
              s
                ? h.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    h.jsxs(Q.div, {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      className: "glass-card p-4 md:p-6 max-w-md mx-auto",
                      children: [
                        h.jsxs("div", {
                          className: "relative rounded-xl overflow-hidden",
                          children: [
                            h.jsx("img", {
                              src: e,
                              alt: "Analyzed skin",
                              className:
                                "w-full h-auto max-h-[300px] object-cover rounded-xl",
                            }),
                            h.jsx("div", {
                              className: "absolute top-3 right-3",
                              children: h.jsxs(vt, {
                                size: "sm",
                                variant: "secondary",
                                className:
                                  "glass-card border-0 h-8 px-3 text-caption",
                                onClick: () => {
                                  (a(!1), t(null), r(null));
                                },
                                children: [
                                  h.jsx(jp, {
                                    className: "h-3.5 w-3.5 mr-1.5",
                                  }),
                                  "New Analysis",
                                ],
                              }),
                            }),
                          ],
                        }),
                        h.jsx("p", {
                          className:
                            "text-center text-caption text-foreground-muted mt-3",
                          children: "Analyzed Image",
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "grid lg:grid-cols-2 gap-6",
                      children: [
                        h.jsx(ZI, { isVisible: s, prediction: Iu }),
                        h.jsx(JI, {
                          isVisible: s,
                          description: O3,
                          isLoading: l,
                        }),
                      ],
                    }),
                  ],
                })
                : h.jsxs("div", {
                  className: "max-w-2xl mx-auto space-y-6",
                  children: [
                    h.jsx(QI, {
                      onImageSelect: b,
                      selectedImage: e,
                      onRemoveImage: m,
                    }),
                    h.jsx(D3, { onClick: w, disabled: !e, isAnalyzing: i }),
                  ],
                }),
            ],
          }),
        }),
        h.jsx("section", {
          className:
            "py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary-lightest/30",
          children: h.jsx("div", {
            className: "container mx-auto max-w-5xl",
            children: h.jsx(Q.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              className: "grid md:grid-cols-3 gap-8",
              children: [
                {
                  icon: iw,
                  title: "Privacy First",
                  description:
                    "Your images are processed securely and never stored on our servers.",
                },
                {
                  icon: HT,
                  title: "Medical-Grade AI",
                  description:
                    "Powered by advanced machine learning trained on dermatological data.",
                },
                {
                  icon: UT,
                  title: "Detailed Reports",
                  description:
                    "Get comprehensive insights with actionable recommendations.",
                },
              ].map((x, S) =>
                h.jsxs(
                  Q.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { delay: S * 0.1 },
                    className: "text-center",
                    children: [
                      h.jsx("div", {
                        className:
                          "inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4",
                        children: h.jsx(x.icon, {
                          className: "h-7 w-7 text-primary",
                        }),
                      }),
                      h.jsx("h3", {
                        className:
                          "font-heading text-h4 text-foreground-heading mb-2",
                        children: x.title,
                      }),
                      h.jsx("p", {
                        className: "text-body-sm text-foreground-muted",
                        children: x.description,
                      }),
                    ],
                  },
                  x.title,
                ),
              ),
            }),
          }),
        }),
        h.jsx("footer", {
          className: "py-8 px-4 border-t border-border",
          children: h.jsxs("div", {
            className: "container mx-auto max-w-5xl text-center",
            children: [
              h.jsxs("p", {
                className: "text-body-sm text-foreground-muted mb-4",
                children: [
                  h.jsx("strong", { children: "Disclaimer:" }),
                  " This tool is for informational purposes only and does not replace professional medical advice. Always consult a dermatologist for proper diagnosis and treatment.",
                ],
              }),
              h.jsx("p", {
                className: "text-caption text-foreground-muted",
                children: "© 2026 SkinAI Analysis. All rights reserved.",
              }),
            ],
          }),
        }),
        h.jsx(XI, { isScanning: i, onComplete: y, imagePreview: e }),
      ],
    });
  },
  L3 = () => {
    const e = l1();
    return (
      g.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname,
        );
      }, [e.pathname]),
      h.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: h.jsxs("div", {
          className: "text-center",
          children: [
            h.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            h.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            h.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  _3 = new kA(),
  F3 = () =>
    h.jsx(PA, {
      client: _3,
      children: h.jsxs(tA, {
        children: [
          h.jsx(_P, {}),
          h.jsx(h2, {}),
          h.jsx(fR, {
            children: h.jsxs(cR, {
              children: [
                h.jsx(Wd, { path: "/", element: h.jsx(I3, {}) }),
                h.jsx(Wd, { path: "*", element: h.jsx(L3, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
T0(document.getElementById("root")).render(h.jsx(F3, {}));
