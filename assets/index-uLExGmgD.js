function eT(u, n) {
  for (var a = 0; a < n.length; a++) {
    const i = n[a];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const l in i)
        if (l !== "default" && !(l in u)) {
          const o = Object.getOwnPropertyDescriptor(i, l);
          o &&
            Object.defineProperty(
              u,
              l,
              o.get ? o : { enumerable: !0, get: () => i[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(u, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const c of o.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = a(l);
    fetch(l.href, o);
  }
})();
function Cv(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default")
    ? u.default
    : u;
}
var a0 = { exports: {} },
  Ds = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var J1;
function nT() {
  if (J1) return Ds;
  J1 = 1;
  var u = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function a(i, l, o) {
    var c = null;
    if (
      (o !== void 0 && (c = "" + o),
      l.key !== void 0 && (c = "" + l.key),
      "key" in l)
    ) {
      o = {};
      for (var d in l) d !== "key" && (o[d] = l[d]);
    } else o = l;
    return (
      (l = o.ref),
      { $$typeof: u, type: i, key: c, ref: l !== void 0 ? l : null, props: o }
    );
  }
  return (Ds.Fragment = n), (Ds.jsx = a), (Ds.jsxs = a), Ds;
}
var F1;
function iT() {
  return F1 || ((F1 = 1), (a0.exports = nT())), a0.exports;
}
var At = iT(),
  l0 = { exports: {} },
  Ct = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var W1;
function rT() {
  if (W1) return Ct;
  W1 = 1;
  var u = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function b(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (y && T[y]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    _ = {};
  function E(T, Q, tt) {
    (this.props = T),
      (this.context = Q),
      (this.refs = _),
      (this.updater = tt || S);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (T, Q) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, T, Q, "setState");
    }),
    (E.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    });
  function w() {}
  w.prototype = E.prototype;
  function z(T, Q, tt) {
    (this.props = T),
      (this.context = Q),
      (this.refs = _),
      (this.updater = tt || S);
  }
  var D = (z.prototype = new w());
  (D.constructor = z), C(D, E.prototype), (D.isPureReactComponent = !0);
  var R = Array.isArray,
    O = { H: null, A: null, T: null, S: null, V: null },
    k = Object.prototype.hasOwnProperty;
  function N(T, Q, tt, I, it, ct) {
    return (
      (tt = ct.ref),
      {
        $$typeof: u,
        type: T,
        key: Q,
        ref: tt !== void 0 ? tt : null,
        props: ct,
      }
    );
  }
  function Y(T, Q) {
    return N(T.type, Q, void 0, void 0, void 0, T.props);
  }
  function U(T) {
    return typeof T == "object" && T !== null && T.$$typeof === u;
  }
  function x(T) {
    var Q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (tt) {
        return Q[tt];
      })
    );
  }
  var j = /\/+/g;
  function Z(T, Q) {
    return typeof T == "object" && T !== null && T.key != null
      ? x("" + T.key)
      : Q.toString(36);
  }
  function rt() {}
  function ht(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (
          (typeof T.status == "string"
            ? T.then(rt, rt)
            : ((T.status = "pending"),
              T.then(
                function (Q) {
                  T.status === "pending" &&
                    ((T.status = "fulfilled"), (T.value = Q));
                },
                function (Q) {
                  T.status === "pending" &&
                    ((T.status = "rejected"), (T.reason = Q));
                }
              )),
          T.status)
        ) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function at(T, Q, tt, I, it) {
    var ct = typeof T;
    (ct === "undefined" || ct === "boolean") && (T = null);
    var lt = !1;
    if (T === null) lt = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          lt = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case u:
            case n:
              lt = !0;
              break;
            case m:
              return (lt = T._init), at(lt(T._payload), Q, tt, I, it);
          }
      }
    if (lt)
      return (
        (it = it(T)),
        (lt = I === "" ? "." + Z(T, 0) : I),
        R(it)
          ? ((tt = ""),
            lt != null && (tt = lt.replace(j, "$&/") + "/"),
            at(it, Q, tt, "", function (Jt) {
              return Jt;
            }))
          : it != null &&
            (U(it) &&
              (it = Y(
                it,
                tt +
                  (it.key == null || (T && T.key === it.key)
                    ? ""
                    : ("" + it.key).replace(j, "$&/") + "/") +
                  lt
              )),
            Q.push(it)),
        1
      );
    lt = 0;
    var Tt = I === "" ? "." : I + ":";
    if (R(T))
      for (var St = 0; St < T.length; St++)
        (I = T[St]), (ct = Tt + Z(I, St)), (lt += at(I, Q, tt, ct, it));
    else if (((St = b(T)), typeof St == "function"))
      for (T = St.call(T), St = 0; !(I = T.next()).done; )
        (I = I.value), (ct = Tt + Z(I, St++)), (lt += at(I, Q, tt, ct, it));
    else if (ct === "object") {
      if (typeof T.then == "function") return at(ht(T), Q, tt, I, it);
      throw (
        ((Q = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Q === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : Q) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return lt;
  }
  function H(T, Q, tt) {
    if (T == null) return T;
    var I = [],
      it = 0;
    return (
      at(T, I, "", "", function (ct) {
        return Q.call(tt, ct, it++);
      }),
      I
    );
  }
  function K(T) {
    if (T._status === -1) {
      var Q = T._result;
      (Q = Q()),
        Q.then(
          function (tt) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = tt));
          },
          function (tt) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = tt));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = Q));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var et =
    typeof reportError == "function"
      ? reportError
      : function (T) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var Q = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == "object" &&
                T !== null &&
                typeof T.message == "string"
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(Q)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", T);
            return;
          }
          console.error(T);
        };
  function ft() {}
  return (
    (Ct.Children = {
      map: H,
      forEach: function (T, Q, tt) {
        H(
          T,
          function () {
            Q.apply(this, arguments);
          },
          tt
        );
      },
      count: function (T) {
        var Q = 0;
        return (
          H(T, function () {
            Q++;
          }),
          Q
        );
      },
      toArray: function (T) {
        return (
          H(T, function (Q) {
            return Q;
          }) || []
        );
      },
      only: function (T) {
        if (!U(T))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return T;
      },
    }),
    (Ct.Component = E),
    (Ct.Fragment = a),
    (Ct.Profiler = l),
    (Ct.PureComponent = z),
    (Ct.StrictMode = i),
    (Ct.Suspense = p),
    (Ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
    (Ct.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return O.H.useMemoCache(T);
      },
    }),
    (Ct.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (Ct.cloneElement = function (T, Q, tt) {
      if (T == null)
        throw Error(
          "The argument must be a React element, but you passed " + T + "."
        );
      var I = C({}, T.props),
        it = T.key,
        ct = void 0;
      if (Q != null)
        for (lt in (Q.ref !== void 0 && (ct = void 0),
        Q.key !== void 0 && (it = "" + Q.key),
        Q))
          !k.call(Q, lt) ||
            lt === "key" ||
            lt === "__self" ||
            lt === "__source" ||
            (lt === "ref" && Q.ref === void 0) ||
            (I[lt] = Q[lt]);
      var lt = arguments.length - 2;
      if (lt === 1) I.children = tt;
      else if (1 < lt) {
        for (var Tt = Array(lt), St = 0; St < lt; St++)
          Tt[St] = arguments[St + 2];
        I.children = Tt;
      }
      return N(T.type, it, void 0, void 0, ct, I);
    }),
    (Ct.createContext = function (T) {
      return (
        (T = {
          $$typeof: c,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: o, _context: T }),
        T
      );
    }),
    (Ct.createElement = function (T, Q, tt) {
      var I,
        it = {},
        ct = null;
      if (Q != null)
        for (I in (Q.key !== void 0 && (ct = "" + Q.key), Q))
          k.call(Q, I) &&
            I !== "key" &&
            I !== "__self" &&
            I !== "__source" &&
            (it[I] = Q[I]);
      var lt = arguments.length - 2;
      if (lt === 1) it.children = tt;
      else if (1 < lt) {
        for (var Tt = Array(lt), St = 0; St < lt; St++)
          Tt[St] = arguments[St + 2];
        it.children = Tt;
      }
      if (T && T.defaultProps)
        for (I in ((lt = T.defaultProps), lt))
          it[I] === void 0 && (it[I] = lt[I]);
      return N(T, ct, void 0, void 0, null, it);
    }),
    (Ct.createRef = function () {
      return { current: null };
    }),
    (Ct.forwardRef = function (T) {
      return { $$typeof: d, render: T };
    }),
    (Ct.isValidElement = U),
    (Ct.lazy = function (T) {
      return { $$typeof: m, _payload: { _status: -1, _result: T }, _init: K };
    }),
    (Ct.memo = function (T, Q) {
      return { $$typeof: g, type: T, compare: Q === void 0 ? null : Q };
    }),
    (Ct.startTransition = function (T) {
      var Q = O.T,
        tt = {};
      O.T = tt;
      try {
        var I = T(),
          it = O.S;
        it !== null && it(tt, I),
          typeof I == "object" &&
            I !== null &&
            typeof I.then == "function" &&
            I.then(ft, et);
      } catch (ct) {
        et(ct);
      } finally {
        O.T = Q;
      }
    }),
    (Ct.unstable_useCacheRefresh = function () {
      return O.H.useCacheRefresh();
    }),
    (Ct.use = function (T) {
      return O.H.use(T);
    }),
    (Ct.useActionState = function (T, Q, tt) {
      return O.H.useActionState(T, Q, tt);
    }),
    (Ct.useCallback = function (T, Q) {
      return O.H.useCallback(T, Q);
    }),
    (Ct.useContext = function (T) {
      return O.H.useContext(T);
    }),
    (Ct.useDebugValue = function () {}),
    (Ct.useDeferredValue = function (T, Q) {
      return O.H.useDeferredValue(T, Q);
    }),
    (Ct.useEffect = function (T, Q, tt) {
      var I = O.H;
      if (typeof tt == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return I.useEffect(T, Q);
    }),
    (Ct.useId = function () {
      return O.H.useId();
    }),
    (Ct.useImperativeHandle = function (T, Q, tt) {
      return O.H.useImperativeHandle(T, Q, tt);
    }),
    (Ct.useInsertionEffect = function (T, Q) {
      return O.H.useInsertionEffect(T, Q);
    }),
    (Ct.useLayoutEffect = function (T, Q) {
      return O.H.useLayoutEffect(T, Q);
    }),
    (Ct.useMemo = function (T, Q) {
      return O.H.useMemo(T, Q);
    }),
    (Ct.useOptimistic = function (T, Q) {
      return O.H.useOptimistic(T, Q);
    }),
    (Ct.useReducer = function (T, Q, tt) {
      return O.H.useReducer(T, Q, tt);
    }),
    (Ct.useRef = function (T) {
      return O.H.useRef(T);
    }),
    (Ct.useState = function (T) {
      return O.H.useState(T);
    }),
    (Ct.useSyncExternalStore = function (T, Q, tt) {
      return O.H.useSyncExternalStore(T, Q, tt);
    }),
    (Ct.useTransition = function () {
      return O.H.useTransition();
    }),
    (Ct.version = "19.1.0"),
    Ct
  );
}
var I1;
function Tg() {
  return I1 || ((I1 = 1), (l0.exports = rT())), l0.exports;
}
var ot = Tg();
const Av = Cv(ot),
  L0 = eT({ __proto__: null, default: Av }, [ot]);
var u0 = { exports: {} },
  zs = {},
  s0 = { exports: {} },
  o0 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var t_;
function aT() {
  return (
    t_ ||
      ((t_ = 1),
      (function (u) {
        function n(H, K) {
          var et = H.length;
          H.push(K);
          t: for (; 0 < et; ) {
            var ft = (et - 1) >>> 1,
              T = H[ft];
            if (0 < l(T, K)) (H[ft] = K), (H[et] = T), (et = ft);
            else break t;
          }
        }
        function a(H) {
          return H.length === 0 ? null : H[0];
        }
        function i(H) {
          if (H.length === 0) return null;
          var K = H[0],
            et = H.pop();
          if (et !== K) {
            H[0] = et;
            t: for (var ft = 0, T = H.length, Q = T >>> 1; ft < Q; ) {
              var tt = 2 * (ft + 1) - 1,
                I = H[tt],
                it = tt + 1,
                ct = H[it];
              if (0 > l(I, et))
                it < T && 0 > l(ct, I)
                  ? ((H[ft] = ct), (H[it] = et), (ft = it))
                  : ((H[ft] = I), (H[tt] = et), (ft = tt));
              else if (it < T && 0 > l(ct, et))
                (H[ft] = ct), (H[it] = et), (ft = it);
              else break t;
            }
          }
          return K;
        }
        function l(H, K) {
          var et = H.sortIndex - K.sortIndex;
          return et !== 0 ? et : H.id - K.id;
        }
        if (
          ((u.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var o = performance;
          u.unstable_now = function () {
            return o.now();
          };
        } else {
          var c = Date,
            d = c.now();
          u.unstable_now = function () {
            return c.now() - d;
          };
        }
        var p = [],
          g = [],
          m = 1,
          y = null,
          b = 3,
          S = !1,
          C = !1,
          _ = !1,
          E = !1,
          w = typeof setTimeout == "function" ? setTimeout : null,
          z = typeof clearTimeout == "function" ? clearTimeout : null,
          D = typeof setImmediate < "u" ? setImmediate : null;
        function R(H) {
          for (var K = a(g); K !== null; ) {
            if (K.callback === null) i(g);
            else if (K.startTime <= H)
              i(g), (K.sortIndex = K.expirationTime), n(p, K);
            else break;
            K = a(g);
          }
        }
        function O(H) {
          if (((_ = !1), R(H), !C))
            if (a(p) !== null) (C = !0), k || ((k = !0), Z());
            else {
              var K = a(g);
              K !== null && at(O, K.startTime - H);
            }
        }
        var k = !1,
          N = -1,
          Y = 5,
          U = -1;
        function x() {
          return E ? !0 : !(u.unstable_now() - U < Y);
        }
        function j() {
          if (((E = !1), k)) {
            var H = u.unstable_now();
            U = H;
            var K = !0;
            try {
              t: {
                (C = !1), _ && ((_ = !1), z(N), (N = -1)), (S = !0);
                var et = b;
                try {
                  e: {
                    for (
                      R(H), y = a(p);
                      y !== null && !(y.expirationTime > H && x());

                    ) {
                      var ft = y.callback;
                      if (typeof ft == "function") {
                        (y.callback = null), (b = y.priorityLevel);
                        var T = ft(y.expirationTime <= H);
                        if (((H = u.unstable_now()), typeof T == "function")) {
                          (y.callback = T), R(H), (K = !0);
                          break e;
                        }
                        y === a(p) && i(p), R(H);
                      } else i(p);
                      y = a(p);
                    }
                    if (y !== null) K = !0;
                    else {
                      var Q = a(g);
                      Q !== null && at(O, Q.startTime - H), (K = !1);
                    }
                  }
                  break t;
                } finally {
                  (y = null), (b = et), (S = !1);
                }
                K = void 0;
              }
            } finally {
              K ? Z() : (k = !1);
            }
          }
        }
        var Z;
        if (typeof D == "function")
          Z = function () {
            D(j);
          };
        else if (typeof MessageChannel < "u") {
          var rt = new MessageChannel(),
            ht = rt.port2;
          (rt.port1.onmessage = j),
            (Z = function () {
              ht.postMessage(null);
            });
        } else
          Z = function () {
            w(j, 0);
          };
        function at(H, K) {
          N = w(function () {
            H(u.unstable_now());
          }, K);
        }
        (u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (u.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Y = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (u.unstable_next = function (H) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = b;
            }
            var et = b;
            b = K;
            try {
              return H();
            } finally {
              b = et;
            }
          }),
          (u.unstable_requestPaint = function () {
            E = !0;
          }),
          (u.unstable_runWithPriority = function (H, K) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var et = b;
            b = H;
            try {
              return K();
            } finally {
              b = et;
            }
          }),
          (u.unstable_scheduleCallback = function (H, K, et) {
            var ft = u.unstable_now();
            switch (
              (typeof et == "object" && et !== null
                ? ((et = et.delay),
                  (et = typeof et == "number" && 0 < et ? ft + et : ft))
                : (et = ft),
              H)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = et + T),
              (H = {
                id: m++,
                callback: K,
                priorityLevel: H,
                startTime: et,
                expirationTime: T,
                sortIndex: -1,
              }),
              et > ft
                ? ((H.sortIndex = et),
                  n(g, H),
                  a(p) === null &&
                    H === a(g) &&
                    (_ ? (z(N), (N = -1)) : (_ = !0), at(O, et - ft)))
                : ((H.sortIndex = T),
                  n(p, H),
                  C || S || ((C = !0), k || ((k = !0), Z()))),
              H
            );
          }),
          (u.unstable_shouldYield = x),
          (u.unstable_wrapCallback = function (H) {
            var K = b;
            return function () {
              var et = b;
              b = K;
              try {
                return H.apply(this, arguments);
              } finally {
                b = et;
              }
            };
          });
      })(o0)),
    o0
  );
}
var e_;
function lT() {
  return e_ || ((e_ = 1), (s0.exports = aT())), s0.exports;
}
var f0 = { exports: {} },
  wn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n_;
function uT() {
  if (n_) return wn;
  n_ = 1;
  var u = Tg();
  function n(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        g += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var i = {
      d: {
        f: a,
        r: function () {
          throw Error(n(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for("react.portal");
  function o(p, g, m) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: y == null ? null : "" + y,
      children: p,
      containerInfo: g,
      implementation: m,
    };
  }
  var c = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(p, g) {
    if (p === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (wn.createPortal = function (p, g) {
      var m =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(n(299));
      return o(p, g, null, m);
    }),
    (wn.flushSync = function (p) {
      var g = c.T,
        m = i.p;
      try {
        if (((c.T = null), (i.p = 2), p)) return p();
      } finally {
        (c.T = g), (i.p = m), i.d.f();
      }
    }),
    (wn.preconnect = function (p, g) {
      typeof p == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        i.d.C(p, g));
    }),
    (wn.prefetchDNS = function (p) {
      typeof p == "string" && i.d.D(p);
    }),
    (wn.preinit = function (p, g) {
      if (typeof p == "string" && g && typeof g.as == "string") {
        var m = g.as,
          y = d(m, g.crossOrigin),
          b = typeof g.integrity == "string" ? g.integrity : void 0,
          S = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        m === "style"
          ? i.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: y,
              integrity: b,
              fetchPriority: S,
            })
          : m === "script" &&
            i.d.X(p, {
              crossOrigin: y,
              integrity: b,
              fetchPriority: S,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (wn.preinitModule = function (p, g) {
      if (typeof p == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var m = d(g.as, g.crossOrigin);
            i.d.M(p, {
              crossOrigin: m,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && i.d.M(p);
    }),
    (wn.preload = function (p, g) {
      if (
        typeof p == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var m = g.as,
          y = d(m, g.crossOrigin);
        i.d.L(p, m, {
          crossOrigin: y,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (wn.preloadModule = function (p, g) {
      if (typeof p == "string")
        if (g) {
          var m = d(g.as, g.crossOrigin);
          i.d.m(p, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: m,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else i.d.m(p);
    }),
    (wn.requestFormReset = function (p) {
      i.d.r(p);
    }),
    (wn.unstable_batchedUpdates = function (p, g) {
      return p(g);
    }),
    (wn.useFormState = function (p, g, m) {
      return c.H.useFormState(p, g, m);
    }),
    (wn.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (wn.version = "19.1.0"),
    wn
  );
}
var i_;
function sT() {
  if (i_) return f0.exports;
  i_ = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (n) {
        console.error(n);
      }
  }
  return u(), (f0.exports = uT()), f0.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r_;
function oT() {
  if (r_) return zs;
  r_ = 1;
  var u = lT(),
    n = Tg(),
    a = sT();
  function i(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        e += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function o(t) {
    var e = t,
      r = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (r = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? r : null;
  }
  function c(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function d(t) {
    if (o(t) !== t) throw Error(i(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = o(t)), e === null)) throw Error(i(188));
      return e !== t ? null : t;
    }
    for (var r = t, s = e; ; ) {
      var f = r.return;
      if (f === null) break;
      var h = f.alternate;
      if (h === null) {
        if (((s = f.return), s !== null)) {
          r = s;
          continue;
        }
        break;
      }
      if (f.child === h.child) {
        for (h = f.child; h; ) {
          if (h === r) return d(f), t;
          if (h === s) return d(f), e;
          h = h.sibling;
        }
        throw Error(i(188));
      }
      if (r.return !== s.return) (r = f), (s = h);
      else {
        for (var v = !1, A = f.child; A; ) {
          if (A === r) {
            (v = !0), (r = f), (s = h);
            break;
          }
          if (A === s) {
            (v = !0), (s = f), (r = h);
            break;
          }
          A = A.sibling;
        }
        if (!v) {
          for (A = h.child; A; ) {
            if (A === r) {
              (v = !0), (r = h), (s = f);
              break;
            }
            if (A === s) {
              (v = !0), (s = h), (r = f);
              break;
            }
            A = A.sibling;
          }
          if (!v) throw Error(i(189));
        }
      }
      if (r.alternate !== s) throw Error(i(190));
    }
    if (r.tag !== 3) throw Error(i(188));
    return r.stateNode.current === r ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = g(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var m = Object.assign,
    y = Symbol.for("react.element"),
    b = Symbol.for("react.transitional.element"),
    S = Symbol.for("react.portal"),
    C = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    E = Symbol.for("react.profiler"),
    w = Symbol.for("react.provider"),
    z = Symbol.for("react.consumer"),
    D = Symbol.for("react.context"),
    R = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    k = Symbol.for("react.suspense_list"),
    N = Symbol.for("react.memo"),
    Y = Symbol.for("react.lazy"),
    U = Symbol.for("react.activity"),
    x = Symbol.for("react.memo_cache_sentinel"),
    j = Symbol.iterator;
  function Z(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (j && t[j]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var rt = Symbol.for("react.client.reference");
  function ht(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === rt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case C:
        return "Fragment";
      case E:
        return "Profiler";
      case _:
        return "StrictMode";
      case O:
        return "Suspense";
      case k:
        return "SuspenseList";
      case U:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case S:
          return "Portal";
        case D:
          return (t.displayName || "Context") + ".Provider";
        case z:
          return (t._context.displayName || "Context") + ".Consumer";
        case R:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case N:
          return (
            (e = t.displayName || null), e !== null ? e : ht(t.type) || "Memo"
          );
        case Y:
          (e = t._payload), (t = t._init);
          try {
            return ht(t(e));
          } catch {}
      }
    return null;
  }
  var at = Array.isArray,
    H = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    et = { pending: !1, data: null, method: null, action: null },
    ft = [],
    T = -1;
  function Q(t) {
    return { current: t };
  }
  function tt(t) {
    0 > T || ((t.current = ft[T]), (ft[T] = null), T--);
  }
  function I(t, e) {
    T++, (ft[T] = t.current), (t.current = e);
  }
  var it = Q(null),
    ct = Q(null),
    lt = Q(null),
    Tt = Q(null);
  function St(t, e) {
    switch ((I(lt, e), I(ct, t), I(it, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? C1(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = C1(e)), (t = A1(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    tt(it), I(it, t);
  }
  function Jt() {
    tt(it), tt(ct), tt(lt);
  }
  function ae(t) {
    t.memoizedState !== null && I(Tt, t);
    var e = it.current,
      r = A1(e, t.type);
    e !== r && (I(ct, t), I(it, r));
  }
  function ze(t) {
    ct.current === t && (tt(it), tt(ct)),
      Tt.current === t && (tt(Tt), (Es._currentValue = et));
  }
  var Ye = Object.prototype.hasOwnProperty,
    Et = u.unstable_scheduleCallback,
    le = u.unstable_cancelCallback,
    en = u.unstable_shouldYield,
    pn = u.unstable_requestPaint,
    $ = u.unstable_now,
    nn = u.unstable_getCurrentPriorityLevel,
    Se = u.unstable_ImmediatePriority,
    En = u.unstable_UserBlockingPriority,
    Gt = u.unstable_NormalPriority,
    mn = u.unstable_LowPriority,
    ai = u.unstable_IdlePriority,
    Di = u.log,
    Ee = u.unstable_setDisableYieldValue,
    yn = null,
    Dt = null;
  function Oe(t) {
    if (
      (typeof Di == "function" && Ee(t),
      Dt && typeof Dt.setStrictMode == "function")
    )
      try {
        Dt.setStrictMode(yn, t);
      } catch {}
  }
  var ee = Math.clz32 ? Math.clz32 : Ft,
    pe = Math.log,
    ne = Math.LN2;
  function Ft(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((pe(t) / ne) | 0)) | 0;
  }
  var Qe = 256,
    me = 4194304;
  function On(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function tr(t, e, r) {
    var s = t.pendingLanes;
    if (s === 0) return 0;
    var f = 0,
      h = t.suspendedLanes,
      v = t.pingedLanes;
    t = t.warmLanes;
    var A = s & 134217727;
    return (
      A !== 0
        ? ((s = A & ~h),
          s !== 0
            ? (f = On(s))
            : ((v &= A),
              v !== 0
                ? (f = On(v))
                : r || ((r = A & ~t), r !== 0 && (f = On(r)))))
        : ((A = s & ~h),
          A !== 0
            ? (f = On(A))
            : v !== 0
            ? (f = On(v))
            : r || ((r = s & ~t), r !== 0 && (f = On(r)))),
      f === 0
        ? 0
        : e !== 0 &&
          e !== f &&
          (e & h) === 0 &&
          ((h = f & -f),
          (r = e & -e),
          h >= r || (h === 32 && (r & 4194048) !== 0))
        ? e
        : f
    );
  }
  function Zn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Ar(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ot() {
    var t = Qe;
    return (Qe <<= 1), (Qe & 4194048) === 0 && (Qe = 256), t;
  }
  function lr() {
    var t = me;
    return (me <<= 1), (me & 62914560) === 0 && (me = 4194304), t;
  }
  function Ln(t) {
    for (var e = [], r = 0; 31 > r; r++) e.push(t);
    return e;
  }
  function _n(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function li(t, e, r, s, f, h) {
    var v = t.pendingLanes;
    (t.pendingLanes = r),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= r),
      (t.entangledLanes &= r),
      (t.errorRecoveryDisabledLanes &= r),
      (t.shellSuspendCounter = 0);
    var A = t.entanglements,
      M = t.expirationTimes,
      X = t.hiddenUpdates;
    for (r = v & ~r; 0 < r; ) {
      var J = 31 - ee(r),
        W = 1 << J;
      (A[J] = 0), (M[J] = -1);
      var G = X[J];
      if (G !== null)
        for (X[J] = null, J = 0; J < G.length; J++) {
          var V = G[J];
          V !== null && (V.lane &= -536870913);
        }
      r &= ~W;
    }
    s !== 0 && ur(t, s, 0),
      h !== 0 && f === 0 && t.tag !== 0 && (t.suspendedLanes |= h & ~(v & ~e));
  }
  function ur(t, e, r) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var s = 31 - ee(e);
    (t.entangledLanes |= e),
      (t.entanglements[s] = t.entanglements[s] | 1073741824 | (r & 4194090));
  }
  function Er(t, e) {
    var r = (t.entangledLanes |= e);
    for (t = t.entanglements; r; ) {
      var s = 31 - ee(r),
        f = 1 << s;
      (f & e) | (t[s] & e) && (t[s] |= e), (r &= ~f);
    }
  }
  function ui(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Or(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function xt() {
    var t = K.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : V1(t.type));
  }
  function mt(t, e) {
    var r = K.p;
    try {
      return (K.p = t), e();
    } finally {
      K.p = r;
    }
  }
  var Mt = Math.random().toString(36).slice(2),
    nt = "__reactFiber$" + Mt,
    gt = "__reactProps$" + Mt,
    dt = "__reactContainer$" + Mt,
    bt = "__reactEvents$" + Mt,
    Ze = "__reactListeners$" + Mt,
    kt = "__reactHandles$" + Mt,
    xe = "__reactResources$" + Mt,
    Ne = "__reactMarker$" + Mt;
  function ye(t) {
    delete t[nt], delete t[gt], delete t[bt], delete t[Ze], delete t[kt];
  }
  function $t(t) {
    var e = t[nt];
    if (e) return e;
    for (var r = t.parentNode; r; ) {
      if ((e = r[dt] || r[nt])) {
        if (
          ((r = e.alternate),
          e.child !== null || (r !== null && r.child !== null))
        )
          for (t = w1(t); t !== null; ) {
            if ((r = t[nt])) return r;
            t = w1(t);
          }
        return e;
      }
      (t = r), (r = t.parentNode);
    }
    return null;
  }
  function qt(t) {
    if ((t = t[nt] || t[dt])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function vn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(i(33));
  }
  function Wt(t) {
    var e = t[xe];
    return (
      e ||
        (e = t[xe] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function jt(t) {
    t[Ne] = !0;
  }
  var si = new Set(),
    Ke = {};
  function be(t, e) {
    Me(t, e), Me(t + "Capture", e);
  }
  function Me(t, e) {
    for (Ke[t] = e, t = 0; t < e.length; t++) si.add(e[t]);
  }
  var Mr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Xa = {},
    rn = {};
  function qe(t) {
    return Ye.call(rn, t)
      ? !0
      : Ye.call(Xa, t)
      ? !1
      : Mr.test(t)
      ? (rn[t] = !0)
      : ((Xa[t] = !0), !1);
  }
  function Hn(t, e, r) {
    if (qe(e))
      if (r === null) t.removeAttribute(e);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var s = e.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + r);
      }
  }
  function ia(t, e, r) {
    if (r === null) t.removeAttribute(e);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + r);
    }
  }
  function zi(t, e, r, s) {
    if (s === null) t.removeAttribute(r);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(r);
          return;
      }
      t.setAttributeNS(e, r, "" + s);
    }
  }
  var wr, oi;
  function Ni(t) {
    if (wr === void 0)
      try {
        throw Error();
      } catch (r) {
        var e = r.stack.trim().match(/\n( *(at )?)/);
        (wr = (e && e[1]) || ""),
          (oi =
            -1 <
            r.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < r.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      wr +
      t +
      oi
    );
  }
  var ra = !1;
  function Bi(t, e) {
    if (!t || ra) return "";
    ra = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var W = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(W.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(W, []);
                } catch (V) {
                  var G = V;
                }
                Reflect.construct(t, [], W);
              } else {
                try {
                  W.call();
                } catch (V) {
                  G = V;
                }
                t.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                G = V;
              }
              (W = t()) &&
                typeof W.catch == "function" &&
                W.catch(function () {});
            }
          } catch (V) {
            if (V && G && typeof V.stack == "string") return [V.stack, G.stack];
          }
          return [null, null];
        },
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name"
      );
      f &&
        f.configurable &&
        Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var h = s.DetermineComponentFrameRoot(),
        v = h[0],
        A = h[1];
      if (v && A) {
        var M = v.split(`
`),
          X = A.split(`
`);
        for (
          f = s = 0;
          s < M.length && !M[s].includes("DetermineComponentFrameRoot");

        )
          s++;
        for (; f < X.length && !X[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (s === M.length || f === X.length)
          for (
            s = M.length - 1, f = X.length - 1;
            1 <= s && 0 <= f && M[s] !== X[f];

          )
            f--;
        for (; 1 <= s && 0 <= f; s--, f--)
          if (M[s] !== X[f]) {
            if (s !== 1 || f !== 1)
              do
                if ((s--, f--, 0 > f || M[s] !== X[f])) {
                  var J =
                    `
` + M[s].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      J.includes("<anonymous>") &&
                      (J = J.replace("<anonymous>", t.displayName)),
                    J
                  );
                }
              while (1 <= s && 0 <= f);
            break;
          }
      }
    } finally {
      (ra = !1), (Error.prepareStackTrace = r);
    }
    return (r = t ? t.displayName || t.name : "") ? Ni(r) : "";
  }
  function PS(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ni(t.type);
      case 16:
        return Ni("Lazy");
      case 13:
        return Ni("Suspense");
      case 19:
        return Ni("SuspenseList");
      case 0:
      case 15:
        return Bi(t.type, !1);
      case 11:
        return Bi(t.type.render, !1);
      case 1:
        return Bi(t.type, !0);
      case 31:
        return Ni("Activity");
      default:
        return "";
    }
  }
  function _p(t) {
    try {
      var e = "";
      do (e += PS(t)), (t = t.return);
      while (t);
      return e;
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      );
    }
  }
  function ki(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function vp(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function JS(t) {
    var e = vp(t) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      s = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var f = r.get,
        h = r.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (v) {
            (s = "" + v), h.call(this, v);
          },
        }),
        Object.defineProperty(t, e, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (v) {
            s = "" + v;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Do(t) {
    t._valueTracker || (t._valueTracker = JS(t));
  }
  function bp(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var r = e.getValue(),
      s = "";
    return (
      t && (s = vp(t) ? (t.checked ? "true" : "false") : t.value),
      (t = s),
      t !== r ? (e.setValue(t), !0) : !1
    );
  }
  function zo(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var FS = /[\n"\\]/g;
  function Ui(t) {
    return t.replace(FS, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function nd(t, e, r, s, f, h, v, A) {
    (t.name = ""),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.type = v)
        : t.removeAttribute("type"),
      e != null
        ? v === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ki(e))
          : t.value !== "" + ki(e) && (t.value = "" + ki(e))
        : (v !== "submit" && v !== "reset") || t.removeAttribute("value"),
      e != null
        ? id(t, v, ki(e))
        : r != null
        ? id(t, v, ki(r))
        : s != null && t.removeAttribute("value"),
      f == null && h != null && (t.defaultChecked = !!h),
      f != null &&
        (t.checked = f && typeof f != "function" && typeof f != "symbol"),
      A != null &&
      typeof A != "function" &&
      typeof A != "symbol" &&
      typeof A != "boolean"
        ? (t.name = "" + ki(A))
        : t.removeAttribute("name");
  }
  function Sp(t, e, r, s, f, h, v, A) {
    if (
      (h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (t.type = h),
      e != null || r != null)
    ) {
      if (!((h !== "submit" && h !== "reset") || e != null)) return;
      (r = r != null ? "" + ki(r) : ""),
        (e = e != null ? "" + ki(e) : r),
        A || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (s = s ?? f),
      (s = typeof s != "function" && typeof s != "symbol" && !!s),
      (t.checked = A ? t.checked : !!s),
      (t.defaultChecked = !!s),
      v != null &&
        typeof v != "function" &&
        typeof v != "symbol" &&
        typeof v != "boolean" &&
        (t.name = v);
  }
  function id(t, e, r) {
    (e === "number" && zo(t.ownerDocument) === t) ||
      t.defaultValue === "" + r ||
      (t.defaultValue = "" + r);
  }
  function El(t, e, r, s) {
    if (((t = t.options), e)) {
      e = {};
      for (var f = 0; f < r.length; f++) e["$" + r[f]] = !0;
      for (r = 0; r < t.length; r++)
        (f = e.hasOwnProperty("$" + t[r].value)),
          t[r].selected !== f && (t[r].selected = f),
          f && s && (t[r].defaultSelected = !0);
    } else {
      for (r = "" + ki(r), e = null, f = 0; f < t.length; f++) {
        if (t[f].value === r) {
          (t[f].selected = !0), s && (t[f].defaultSelected = !0);
          return;
        }
        e !== null || t[f].disabled || (e = t[f]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function xp(t, e, r) {
    if (
      e != null &&
      ((e = "" + ki(e)), e !== t.value && (t.value = e), r == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = r != null ? "" + ki(r) : "";
  }
  function Tp(t, e, r, s) {
    if (e == null) {
      if (s != null) {
        if (r != null) throw Error(i(92));
        if (at(s)) {
          if (1 < s.length) throw Error(i(93));
          s = s[0];
        }
        r = s;
      }
      r == null && (r = ""), (e = r);
    }
    (r = ki(e)),
      (t.defaultValue = r),
      (s = t.textContent),
      s === r && s !== "" && s !== null && (t.value = s);
  }
  function Ol(t, e) {
    if (e) {
      var r = t.firstChild;
      if (r && r === t.lastChild && r.nodeType === 3) {
        r.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var WS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Cp(t, e, r) {
    var s = e.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === ""
      ? s
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : s
      ? t.setProperty(e, r)
      : typeof r != "number" || r === 0 || WS.has(e)
      ? e === "float"
        ? (t.cssFloat = r)
        : (t[e] = ("" + r).trim())
      : (t[e] = r + "px");
  }
  function Ap(t, e, r) {
    if (e != null && typeof e != "object") throw Error(i(62));
    if (((t = t.style), r != null)) {
      for (var s in r)
        !r.hasOwnProperty(s) ||
          (e != null && e.hasOwnProperty(s)) ||
          (s.indexOf("--") === 0
            ? t.setProperty(s, "")
            : s === "float"
            ? (t.cssFloat = "")
            : (t[s] = ""));
      for (var f in e)
        (s = e[f]), e.hasOwnProperty(f) && r[f] !== s && Cp(t, f, s);
    } else for (var h in e) e.hasOwnProperty(h) && Cp(t, h, e[h]);
  }
  function rd(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var IS = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    t2 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function No(t) {
    return t2.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var ad = null;
  function ld(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ml = null,
    wl = null;
  function Ep(t) {
    var e = qt(t);
    if (e && (t = e.stateNode)) {
      var r = t[gt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (nd(
              t,
              r.value,
              r.defaultValue,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name
            ),
            (e = r.name),
            r.type === "radio" && e != null)
          ) {
            for (r = t; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                'input[name="' + Ui("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < r.length;
              e++
            ) {
              var s = r[e];
              if (s !== t && s.form === t.form) {
                var f = s[gt] || null;
                if (!f) throw Error(i(90));
                nd(
                  s,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name
                );
              }
            }
            for (e = 0; e < r.length; e++)
              (s = r[e]), s.form === t.form && bp(s);
          }
          break t;
        case "textarea":
          xp(t, r.value, r.defaultValue);
          break t;
        case "select":
          (e = r.value), e != null && El(t, !!r.multiple, e, !1);
      }
    }
  }
  var ud = !1;
  function Op(t, e, r) {
    if (ud) return t(e, r);
    ud = !0;
    try {
      var s = t(e);
      return s;
    } finally {
      if (
        ((ud = !1),
        (Ml !== null || wl !== null) &&
          (vf(), Ml && ((e = Ml), (t = wl), (wl = Ml = null), Ep(e), t)))
      )
        for (e = 0; e < t.length; e++) Ep(t[e]);
    }
  }
  function Yu(t, e) {
    var r = t.stateNode;
    if (r === null) return null;
    var s = r[gt] || null;
    if (s === null) return null;
    r = s[e];
    t: switch (e) {
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
        (s = !s.disabled) ||
          ((t = t.type),
          (s = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !s);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (r && typeof r != "function") throw Error(i(231, e, typeof r));
    return r;
  }
  var Rr = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    sd = !1;
  if (Rr)
    try {
      var qu = {};
      Object.defineProperty(qu, "passive", {
        get: function () {
          sd = !0;
        },
      }),
        window.addEventListener("test", qu, qu),
        window.removeEventListener("test", qu, qu);
    } catch {
      sd = !1;
    }
  var aa = null,
    od = null,
    Bo = null;
  function Mp() {
    if (Bo) return Bo;
    var t,
      e = od,
      r = e.length,
      s,
      f = "value" in aa ? aa.value : aa.textContent,
      h = f.length;
    for (t = 0; t < r && e[t] === f[t]; t++);
    var v = r - t;
    for (s = 1; s <= v && e[r - s] === f[h - s]; s++);
    return (Bo = f.slice(t, 1 < s ? 1 - s : void 0));
  }
  function ko(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Uo() {
    return !0;
  }
  function wp() {
    return !1;
  }
  function Kn(t) {
    function e(r, s, f, h, v) {
      (this._reactName = r),
        (this._targetInst = f),
        (this.type = s),
        (this.nativeEvent = h),
        (this.target = v),
        (this.currentTarget = null);
      for (var A in t)
        t.hasOwnProperty(A) && ((r = t[A]), (this[A] = r ? r(h) : h[A]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? Uo
          : wp),
        (this.isPropagationStopped = wp),
        this
      );
    }
    return (
      m(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Uo));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Uo));
        },
        persist: function () {},
        isPersistent: Uo,
      }),
      e
    );
  }
  var Ga = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Lo = Kn(Ga),
    Xu = m({}, Ga, { view: 0, detail: 0 }),
    e2 = Kn(Xu),
    fd,
    cd,
    Gu,
    Ho = m({}, Xu, {
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
      getModifierState: hd,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Gu &&
              (Gu && t.type === "mousemove"
                ? ((fd = t.screenX - Gu.screenX), (cd = t.screenY - Gu.screenY))
                : (cd = fd = 0),
              (Gu = t)),
            fd);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : cd;
      },
    }),
    Rp = Kn(Ho),
    n2 = m({}, Ho, { dataTransfer: 0 }),
    i2 = Kn(n2),
    r2 = m({}, Xu, { relatedTarget: 0 }),
    dd = Kn(r2),
    a2 = m({}, Ga, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    l2 = Kn(a2),
    u2 = m({}, Ga, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    s2 = Kn(u2),
    o2 = m({}, Ga, { data: 0 }),
    Dp = Kn(o2),
    f2 = {
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
    c2 = {
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
    d2 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function h2(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = d2[t])
      ? !!e[t]
      : !1;
  }
  function hd() {
    return h2;
  }
  var g2 = m({}, Xu, {
      key: function (t) {
        if (t.key) {
          var e = f2[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = ko(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? c2[t.keyCode] || "Unidentified"
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
      getModifierState: hd,
      charCode: function (t) {
        return t.type === "keypress" ? ko(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? ko(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    p2 = Kn(g2),
    m2 = m({}, Ho, {
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
    zp = Kn(m2),
    y2 = m({}, Xu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hd,
    }),
    _2 = Kn(y2),
    v2 = m({}, Ga, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    b2 = Kn(v2),
    S2 = m({}, Ho, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    x2 = Kn(S2),
    T2 = m({}, Ga, { newState: 0, oldState: 0 }),
    C2 = Kn(T2),
    A2 = [9, 13, 27, 32],
    gd = Rr && "CompositionEvent" in window,
    ju = null;
  Rr && "documentMode" in document && (ju = document.documentMode);
  var E2 = Rr && "TextEvent" in window && !ju,
    Np = Rr && (!gd || (ju && 8 < ju && 11 >= ju)),
    Bp = " ",
    kp = !1;
  function Up(t, e) {
    switch (t) {
      case "keyup":
        return A2.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Lp(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Rl = !1;
  function O2(t, e) {
    switch (t) {
      case "compositionend":
        return Lp(e);
      case "keypress":
        return e.which !== 32 ? null : ((kp = !0), Bp);
      case "textInput":
        return (t = e.data), t === Bp && kp ? null : t;
      default:
        return null;
    }
  }
  function M2(t, e) {
    if (Rl)
      return t === "compositionend" || (!gd && Up(t, e))
        ? ((t = Mp()), (Bo = od = aa = null), (Rl = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Np && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var w2 = {
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
  function Hp(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!w2[t.type] : e === "textarea";
  }
  function Yp(t, e, r, s) {
    Ml ? (wl ? wl.push(s) : (wl = [s])) : (Ml = s),
      (e = Af(e, "onChange")),
      0 < e.length &&
        ((r = new Lo("onChange", "change", null, r, s)),
        t.push({ event: r, listeners: e }));
  }
  var Vu = null,
    $u = null;
  function R2(t) {
    v1(t, 0);
  }
  function Yo(t) {
    var e = vn(t);
    if (bp(e)) return t;
  }
  function qp(t, e) {
    if (t === "change") return e;
  }
  var Xp = !1;
  if (Rr) {
    var pd;
    if (Rr) {
      var md = "oninput" in document;
      if (!md) {
        var Gp = document.createElement("div");
        Gp.setAttribute("oninput", "return;"),
          (md = typeof Gp.oninput == "function");
      }
      pd = md;
    } else pd = !1;
    Xp = pd && (!document.documentMode || 9 < document.documentMode);
  }
  function jp() {
    Vu && (Vu.detachEvent("onpropertychange", Vp), ($u = Vu = null));
  }
  function Vp(t) {
    if (t.propertyName === "value" && Yo($u)) {
      var e = [];
      Yp(e, $u, t, ld(t)), Op(R2, e);
    }
  }
  function D2(t, e, r) {
    t === "focusin"
      ? (jp(), (Vu = e), ($u = r), Vu.attachEvent("onpropertychange", Vp))
      : t === "focusout" && jp();
  }
  function z2(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Yo($u);
  }
  function N2(t, e) {
    if (t === "click") return Yo(e);
  }
  function B2(t, e) {
    if (t === "input" || t === "change") return Yo(e);
  }
  function k2(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var fi = typeof Object.is == "function" ? Object.is : k2;
  function Qu(t, e) {
    if (fi(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var r = Object.keys(t),
      s = Object.keys(e);
    if (r.length !== s.length) return !1;
    for (s = 0; s < r.length; s++) {
      var f = r[s];
      if (!Ye.call(e, f) || !fi(t[f], e[f])) return !1;
    }
    return !0;
  }
  function $p(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Qp(t, e) {
    var r = $p(t);
    t = 0;
    for (var s; r; ) {
      if (r.nodeType === 3) {
        if (((s = t + r.textContent.length), t <= e && s >= e))
          return { node: r, offset: e - t };
        t = s;
      }
      t: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break t;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = $p(r);
    }
  }
  function Zp(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Zp(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Kp(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = zo(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var r = typeof e.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) t = e.contentWindow;
      else break;
      e = zo(t.document);
    }
    return e;
  }
  function yd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var U2 = Rr && "documentMode" in document && 11 >= document.documentMode,
    Dl = null,
    _d = null,
    Zu = null,
    vd = !1;
  function Pp(t, e, r) {
    var s =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    vd ||
      Dl == null ||
      Dl !== zo(s) ||
      ((s = Dl),
      "selectionStart" in s && yd(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (Zu && Qu(Zu, s)) ||
        ((Zu = s),
        (s = Af(_d, "onSelect")),
        0 < s.length &&
          ((e = new Lo("onSelect", "select", null, e, r)),
          t.push({ event: e, listeners: s }),
          (e.target = Dl))));
  }
  function ja(t, e) {
    var r = {};
    return (
      (r[t.toLowerCase()] = e.toLowerCase()),
      (r["Webkit" + t] = "webkit" + e),
      (r["Moz" + t] = "moz" + e),
      r
    );
  }
  var zl = {
      animationend: ja("Animation", "AnimationEnd"),
      animationiteration: ja("Animation", "AnimationIteration"),
      animationstart: ja("Animation", "AnimationStart"),
      transitionrun: ja("Transition", "TransitionRun"),
      transitionstart: ja("Transition", "TransitionStart"),
      transitioncancel: ja("Transition", "TransitionCancel"),
      transitionend: ja("Transition", "TransitionEnd"),
    },
    bd = {},
    Jp = {};
  Rr &&
    ((Jp = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete zl.animationend.animation,
      delete zl.animationiteration.animation,
      delete zl.animationstart.animation),
    "TransitionEvent" in window || delete zl.transitionend.transition);
  function Va(t) {
    if (bd[t]) return bd[t];
    if (!zl[t]) return t;
    var e = zl[t],
      r;
    for (r in e) if (e.hasOwnProperty(r) && r in Jp) return (bd[t] = e[r]);
    return t;
  }
  var Fp = Va("animationend"),
    Wp = Va("animationiteration"),
    Ip = Va("animationstart"),
    L2 = Va("transitionrun"),
    H2 = Va("transitionstart"),
    Y2 = Va("transitioncancel"),
    tm = Va("transitionend"),
    em = new Map(),
    Sd =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Sd.push("scrollEnd");
  function er(t, e) {
    em.set(t, e), be(e, [t]);
  }
  var nm = new WeakMap();
  function Li(t, e) {
    if (typeof t == "object" && t !== null) {
      var r = nm.get(t);
      return r !== void 0
        ? r
        : ((e = { value: t, source: e, stack: _p(e) }), nm.set(t, e), e);
    }
    return { value: t, source: e, stack: _p(e) };
  }
  var Hi = [],
    Nl = 0,
    xd = 0;
  function qo() {
    for (var t = Nl, e = (xd = Nl = 0); e < t; ) {
      var r = Hi[e];
      Hi[e++] = null;
      var s = Hi[e];
      Hi[e++] = null;
      var f = Hi[e];
      Hi[e++] = null;
      var h = Hi[e];
      if (((Hi[e++] = null), s !== null && f !== null)) {
        var v = s.pending;
        v === null ? (f.next = f) : ((f.next = v.next), (v.next = f)),
          (s.pending = f);
      }
      h !== 0 && im(r, f, h);
    }
  }
  function Xo(t, e, r, s) {
    (Hi[Nl++] = t),
      (Hi[Nl++] = e),
      (Hi[Nl++] = r),
      (Hi[Nl++] = s),
      (xd |= s),
      (t.lanes |= s),
      (t = t.alternate),
      t !== null && (t.lanes |= s);
  }
  function Td(t, e, r, s) {
    return Xo(t, e, r, s), Go(t);
  }
  function Bl(t, e) {
    return Xo(t, null, null, e), Go(t);
  }
  function im(t, e, r) {
    t.lanes |= r;
    var s = t.alternate;
    s !== null && (s.lanes |= r);
    for (var f = !1, h = t.return; h !== null; )
      (h.childLanes |= r),
        (s = h.alternate),
        s !== null && (s.childLanes |= r),
        h.tag === 22 &&
          ((t = h.stateNode), t === null || t._visibility & 1 || (f = !0)),
        (t = h),
        (h = h.return);
    return t.tag === 3
      ? ((h = t.stateNode),
        f &&
          e !== null &&
          ((f = 31 - ee(r)),
          (t = h.hiddenUpdates),
          (s = t[f]),
          s === null ? (t[f] = [e]) : s.push(e),
          (e.lane = r | 536870912)),
        h)
      : null;
  }
  function Go(t) {
    if (50 < _s) throw ((_s = 0), (wh = null), Error(i(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var kl = {};
  function q2(t, e, r, s) {
    (this.tag = t),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ci(t, e, r, s) {
    return new q2(t, e, r, s);
  }
  function Cd(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Dr(t, e) {
    var r = t.alternate;
    return (
      r === null
        ? ((r = ci(t.tag, e, t.key, t.mode)),
          (r.elementType = t.elementType),
          (r.type = t.type),
          (r.stateNode = t.stateNode),
          (r.alternate = t),
          (t.alternate = r))
        : ((r.pendingProps = e),
          (r.type = t.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = t.flags & 65011712),
      (r.childLanes = t.childLanes),
      (r.lanes = t.lanes),
      (r.child = t.child),
      (r.memoizedProps = t.memoizedProps),
      (r.memoizedState = t.memoizedState),
      (r.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (r.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (r.sibling = t.sibling),
      (r.index = t.index),
      (r.ref = t.ref),
      (r.refCleanup = t.refCleanup),
      r
    );
  }
  function rm(t, e) {
    t.flags &= 65011714;
    var r = t.alternate;
    return (
      r === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = r.childLanes),
          (t.lanes = r.lanes),
          (t.child = r.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = r.memoizedProps),
          (t.memoizedState = r.memoizedState),
          (t.updateQueue = r.updateQueue),
          (t.type = r.type),
          (e = r.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function jo(t, e, r, s, f, h) {
    var v = 0;
    if (((s = t), typeof t == "function")) Cd(t) && (v = 1);
    else if (typeof t == "string")
      v = Gx(t, r, it.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case U:
          return (t = ci(31, r, e, f)), (t.elementType = U), (t.lanes = h), t;
        case C:
          return $a(r.children, f, h, e);
        case _:
          (v = 8), (f |= 24);
          break;
        case E:
          return (
            (t = ci(12, r, e, f | 2)), (t.elementType = E), (t.lanes = h), t
          );
        case O:
          return (t = ci(13, r, e, f)), (t.elementType = O), (t.lanes = h), t;
        case k:
          return (t = ci(19, r, e, f)), (t.elementType = k), (t.lanes = h), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case w:
              case D:
                v = 10;
                break t;
              case z:
                v = 9;
                break t;
              case R:
                v = 11;
                break t;
              case N:
                v = 14;
                break t;
              case Y:
                (v = 16), (s = null);
                break t;
            }
          (v = 29),
            (r = Error(i(130, t === null ? "null" : typeof t, ""))),
            (s = null);
      }
    return (
      (e = ci(v, r, e, f)), (e.elementType = t), (e.type = s), (e.lanes = h), e
    );
  }
  function $a(t, e, r, s) {
    return (t = ci(7, t, s, e)), (t.lanes = r), t;
  }
  function Ad(t, e, r) {
    return (t = ci(6, t, null, e)), (t.lanes = r), t;
  }
  function Ed(t, e, r) {
    return (
      (e = ci(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = r),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Ul = [],
    Ll = 0,
    Vo = null,
    $o = 0,
    Yi = [],
    qi = 0,
    Qa = null,
    zr = 1,
    Nr = "";
  function Za(t, e) {
    (Ul[Ll++] = $o), (Ul[Ll++] = Vo), (Vo = t), ($o = e);
  }
  function am(t, e, r) {
    (Yi[qi++] = zr), (Yi[qi++] = Nr), (Yi[qi++] = Qa), (Qa = t);
    var s = zr;
    t = Nr;
    var f = 32 - ee(s) - 1;
    (s &= ~(1 << f)), (r += 1);
    var h = 32 - ee(e) + f;
    if (30 < h) {
      var v = f - (f % 5);
      (h = (s & ((1 << v) - 1)).toString(32)),
        (s >>= v),
        (f -= v),
        (zr = (1 << (32 - ee(e) + f)) | (r << f) | s),
        (Nr = h + t);
    } else (zr = (1 << h) | (r << f) | s), (Nr = t);
  }
  function Od(t) {
    t.return !== null && (Za(t, 1), am(t, 1, 0));
  }
  function Md(t) {
    for (; t === Vo; )
      (Vo = Ul[--Ll]), (Ul[Ll] = null), ($o = Ul[--Ll]), (Ul[Ll] = null);
    for (; t === Qa; )
      (Qa = Yi[--qi]),
        (Yi[qi] = null),
        (Nr = Yi[--qi]),
        (Yi[qi] = null),
        (zr = Yi[--qi]),
        (Yi[qi] = null);
  }
  var Yn = null,
    Be = null,
    Qt = !1,
    Ka = null,
    sr = !1,
    wd = Error(i(519));
  function Pa(t) {
    var e = Error(i(418, ""));
    throw (Ju(Li(e, t)), wd);
  }
  function lm(t) {
    var e = t.stateNode,
      r = t.type,
      s = t.memoizedProps;
    switch (((e[nt] = t), (e[gt] = s), r)) {
      case "dialog":
        Lt("cancel", e), Lt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Lt("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < bs.length; r++) Lt(bs[r], e);
        break;
      case "source":
        Lt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Lt("error", e), Lt("load", e);
        break;
      case "details":
        Lt("toggle", e);
        break;
      case "input":
        Lt("invalid", e),
          Sp(
            e,
            s.value,
            s.defaultValue,
            s.checked,
            s.defaultChecked,
            s.type,
            s.name,
            !0
          ),
          Do(e);
        break;
      case "select":
        Lt("invalid", e);
        break;
      case "textarea":
        Lt("invalid", e), Tp(e, s.value, s.defaultValue, s.children), Do(e);
    }
    (r = s.children),
      (typeof r != "string" && typeof r != "number" && typeof r != "bigint") ||
      e.textContent === "" + r ||
      s.suppressHydrationWarning === !0 ||
      T1(e.textContent, r)
        ? (s.popover != null && (Lt("beforetoggle", e), Lt("toggle", e)),
          s.onScroll != null && Lt("scroll", e),
          s.onScrollEnd != null && Lt("scrollend", e),
          s.onClick != null && (e.onclick = Ef),
          (e = !0))
        : (e = !1),
      e || Pa(t);
  }
  function um(t) {
    for (Yn = t.return; Yn; )
      switch (Yn.tag) {
        case 5:
        case 13:
          sr = !1;
          return;
        case 27:
        case 3:
          sr = !0;
          return;
        default:
          Yn = Yn.return;
      }
  }
  function Ku(t) {
    if (t !== Yn) return !1;
    if (!Qt) return um(t), (Qt = !0), !1;
    var e = t.tag,
      r;
    if (
      ((r = e !== 3 && e !== 27) &&
        ((r = e === 5) &&
          ((r = t.type),
          (r =
            !(r !== "form" && r !== "button") || $h(t.type, t.memoizedProps))),
        (r = !r)),
      r && Be && Pa(t),
      um(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(i(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((r = t.data), r === "/$")) {
              if (e === 0) {
                Be = ir(t.nextSibling);
                break t;
              }
              e--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || e++;
          t = t.nextSibling;
        }
        Be = null;
      }
    } else
      e === 27
        ? ((e = Be), Sa(t.type) ? ((t = Ph), (Ph = null), (Be = t)) : (Be = e))
        : (Be = Yn ? ir(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Pu() {
    (Be = Yn = null), (Qt = !1);
  }
  function sm() {
    var t = Ka;
    return (
      t !== null &&
        (Fn === null ? (Fn = t) : Fn.push.apply(Fn, t), (Ka = null)),
      t
    );
  }
  function Ju(t) {
    Ka === null ? (Ka = [t]) : Ka.push(t);
  }
  var Rd = Q(null),
    Ja = null,
    Br = null;
  function la(t, e, r) {
    I(Rd, e._currentValue), (e._currentValue = r);
  }
  function kr(t) {
    (t._currentValue = Rd.current), tt(Rd);
  }
  function Dd(t, e, r) {
    for (; t !== null; ) {
      var s = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), s !== null && (s.childLanes |= e))
          : s !== null && (s.childLanes & e) !== e && (s.childLanes |= e),
        t === r)
      )
        break;
      t = t.return;
    }
  }
  function zd(t, e, r, s) {
    var f = t.child;
    for (f !== null && (f.return = t); f !== null; ) {
      var h = f.dependencies;
      if (h !== null) {
        var v = f.child;
        h = h.firstContext;
        t: for (; h !== null; ) {
          var A = h;
          h = f;
          for (var M = 0; M < e.length; M++)
            if (A.context === e[M]) {
              (h.lanes |= r),
                (A = h.alternate),
                A !== null && (A.lanes |= r),
                Dd(h.return, r, t),
                s || (v = null);
              break t;
            }
          h = A.next;
        }
      } else if (f.tag === 18) {
        if (((v = f.return), v === null)) throw Error(i(341));
        (v.lanes |= r),
          (h = v.alternate),
          h !== null && (h.lanes |= r),
          Dd(v, r, t),
          (v = null);
      } else v = f.child;
      if (v !== null) v.return = f;
      else
        for (v = f; v !== null; ) {
          if (v === t) {
            v = null;
            break;
          }
          if (((f = v.sibling), f !== null)) {
            (f.return = v.return), (v = f);
            break;
          }
          v = v.return;
        }
      f = v;
    }
  }
  function Fu(t, e, r, s) {
    t = null;
    for (var f = e, h = !1; f !== null; ) {
      if (!h) {
        if ((f.flags & 524288) !== 0) h = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var v = f.alternate;
        if (v === null) throw Error(i(387));
        if (((v = v.memoizedProps), v !== null)) {
          var A = f.type;
          fi(f.pendingProps.value, v.value) ||
            (t !== null ? t.push(A) : (t = [A]));
        }
      } else if (f === Tt.current) {
        if (((v = f.alternate), v === null)) throw Error(i(387));
        v.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (t !== null ? t.push(Es) : (t = [Es]));
      }
      f = f.return;
    }
    t !== null && zd(e, t, r, s), (e.flags |= 262144);
  }
  function Qo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!fi(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Fa(t) {
    (Ja = t),
      (Br = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Mn(t) {
    return om(Ja, t);
  }
  function Zo(t, e) {
    return Ja === null && Fa(t), om(t, e);
  }
  function om(t, e) {
    var r = e._currentValue;
    if (((e = { context: e, memoizedValue: r, next: null }), Br === null)) {
      if (t === null) throw Error(i(308));
      (Br = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Br = Br.next = e;
    return r;
  }
  var X2 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (r, s) {
                  t.push(s);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (r) {
                  return r();
                });
            };
          },
    G2 = u.unstable_scheduleCallback,
    j2 = u.unstable_NormalPriority,
    an = {
      $$typeof: D,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Nd() {
    return { controller: new X2(), data: new Map(), refCount: 0 };
  }
  function Wu(t) {
    t.refCount--,
      t.refCount === 0 &&
        G2(j2, function () {
          t.controller.abort();
        });
  }
  var Iu = null,
    Bd = 0,
    Hl = 0,
    Yl = null;
  function V2(t, e) {
    if (Iu === null) {
      var r = (Iu = []);
      (Bd = 0),
        (Hl = Uh()),
        (Yl = {
          status: "pending",
          value: void 0,
          then: function (s) {
            r.push(s);
          },
        });
    }
    return Bd++, e.then(fm, fm), e;
  }
  function fm() {
    if (--Bd === 0 && Iu !== null) {
      Yl !== null && (Yl.status = "fulfilled");
      var t = Iu;
      (Iu = null), (Hl = 0), (Yl = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function $2(t, e) {
    var r = [],
      s = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          r.push(f);
        },
      };
    return (
      t.then(
        function () {
          (s.status = "fulfilled"), (s.value = e);
          for (var f = 0; f < r.length; f++) (0, r[f])(e);
        },
        function (f) {
          for (s.status = "rejected", s.reason = f, f = 0; f < r.length; f++)
            (0, r[f])(void 0);
        }
      ),
      s
    );
  }
  var cm = H.S;
  H.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      V2(t, e),
      cm !== null && cm(t, e);
  };
  var Wa = Q(null);
  function kd() {
    var t = Wa.current;
    return t !== null ? t : _e.pooledCache;
  }
  function Ko(t, e) {
    e === null ? I(Wa, Wa.current) : I(Wa, e.pool);
  }
  function dm() {
    var t = kd();
    return t === null ? null : { parent: an._currentValue, pool: t };
  }
  var ts = Error(i(460)),
    hm = Error(i(474)),
    Po = Error(i(542)),
    Ud = { then: function () {} };
  function gm(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Jo() {}
  function pm(t, e, r) {
    switch (
      ((r = t[r]),
      r === void 0 ? t.push(e) : r !== e && (e.then(Jo, Jo), (e = r)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), ym(t), t);
      default:
        if (typeof e.status == "string") e.then(Jo, Jo);
        else {
          if (((t = _e), t !== null && 100 < t.shellSuspendCounter))
            throw Error(i(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (s) {
                if (e.status === "pending") {
                  var f = e;
                  (f.status = "fulfilled"), (f.value = s);
                }
              },
              function (s) {
                if (e.status === "pending") {
                  var f = e;
                  (f.status = "rejected"), (f.reason = s);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), ym(t), t);
        }
        throw ((es = e), ts);
    }
  }
  var es = null;
  function mm() {
    if (es === null) throw Error(i(459));
    var t = es;
    return (es = null), t;
  }
  function ym(t) {
    if (t === ts || t === Po) throw Error(i(483));
  }
  var ua = !1;
  function Ld(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Hd(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function sa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function oa(t, e, r) {
    var s = t.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (ie & 2) !== 0)) {
      var f = s.pending;
      return (
        f === null ? (e.next = e) : ((e.next = f.next), (f.next = e)),
        (s.pending = e),
        (e = Go(t)),
        im(t, null, r),
        e
      );
    }
    return Xo(t, s, e, r), Go(t);
  }
  function ns(t, e, r) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (r & 4194048) !== 0))
    ) {
      var s = e.lanes;
      (s &= t.pendingLanes), (r |= s), (e.lanes = r), Er(t, r);
    }
  }
  function Yd(t, e) {
    var r = t.updateQueue,
      s = t.alternate;
    if (s !== null && ((s = s.updateQueue), r === s)) {
      var f = null,
        h = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var v = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null,
          };
          h === null ? (f = h = v) : (h = h.next = v), (r = r.next);
        } while (r !== null);
        h === null ? (f = h = e) : (h = h.next = e);
      } else f = h = e;
      (r = {
        baseState: s.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: h,
        shared: s.shared,
        callbacks: s.callbacks,
      }),
        (t.updateQueue = r);
      return;
    }
    (t = r.lastBaseUpdate),
      t === null ? (r.firstBaseUpdate = e) : (t.next = e),
      (r.lastBaseUpdate = e);
  }
  var qd = !1;
  function is() {
    if (qd) {
      var t = Yl;
      if (t !== null) throw t;
    }
  }
  function rs(t, e, r, s) {
    qd = !1;
    var f = t.updateQueue;
    ua = !1;
    var h = f.firstBaseUpdate,
      v = f.lastBaseUpdate,
      A = f.shared.pending;
    if (A !== null) {
      f.shared.pending = null;
      var M = A,
        X = M.next;
      (M.next = null), v === null ? (h = X) : (v.next = X), (v = M);
      var J = t.alternate;
      J !== null &&
        ((J = J.updateQueue),
        (A = J.lastBaseUpdate),
        A !== v &&
          (A === null ? (J.firstBaseUpdate = X) : (A.next = X),
          (J.lastBaseUpdate = M)));
    }
    if (h !== null) {
      var W = f.baseState;
      (v = 0), (J = X = M = null), (A = h);
      do {
        var G = A.lane & -536870913,
          V = G !== A.lane;
        if (V ? (Xt & G) === G : (s & G) === G) {
          G !== 0 && G === Hl && (qd = !0),
            J !== null &&
              (J = J.next =
                {
                  lane: 0,
                  tag: A.tag,
                  payload: A.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var vt = t,
              yt = A;
            G = e;
            var oe = r;
            switch (yt.tag) {
              case 1:
                if (((vt = yt.payload), typeof vt == "function")) {
                  W = vt.call(oe, W, G);
                  break t;
                }
                W = vt;
                break t;
              case 3:
                vt.flags = (vt.flags & -65537) | 128;
              case 0:
                if (
                  ((vt = yt.payload),
                  (G = typeof vt == "function" ? vt.call(oe, W, G) : vt),
                  G == null)
                )
                  break t;
                W = m({}, W, G);
                break t;
              case 2:
                ua = !0;
            }
          }
          (G = A.callback),
            G !== null &&
              ((t.flags |= 64),
              V && (t.flags |= 8192),
              (V = f.callbacks),
              V === null ? (f.callbacks = [G]) : V.push(G));
        } else
          (V = {
            lane: G,
            tag: A.tag,
            payload: A.payload,
            callback: A.callback,
            next: null,
          }),
            J === null ? ((X = J = V), (M = W)) : (J = J.next = V),
            (v |= G);
        if (((A = A.next), A === null)) {
          if (((A = f.shared.pending), A === null)) break;
          (V = A),
            (A = V.next),
            (V.next = null),
            (f.lastBaseUpdate = V),
            (f.shared.pending = null);
        }
      } while (!0);
      J === null && (M = W),
        (f.baseState = M),
        (f.firstBaseUpdate = X),
        (f.lastBaseUpdate = J),
        h === null && (f.shared.lanes = 0),
        (ya |= v),
        (t.lanes = v),
        (t.memoizedState = W);
    }
  }
  function _m(t, e) {
    if (typeof t != "function") throw Error(i(191, t));
    t.call(e);
  }
  function vm(t, e) {
    var r = t.callbacks;
    if (r !== null)
      for (t.callbacks = null, t = 0; t < r.length; t++) _m(r[t], e);
  }
  var ql = Q(null),
    Fo = Q(0);
  function bm(t, e) {
    (t = Gr), I(Fo, t), I(ql, e), (Gr = t | e.baseLanes);
  }
  function Xd() {
    I(Fo, Gr), I(ql, ql.current);
  }
  function Gd() {
    (Gr = Fo.current), tt(ql), tt(Fo);
  }
  var fa = 0,
    wt = null,
    ue = null,
    Pe = null,
    Wo = !1,
    Xl = !1,
    Ia = !1,
    Io = 0,
    as = 0,
    Gl = null,
    Q2 = 0;
  function Xe() {
    throw Error(i(321));
  }
  function jd(t, e) {
    if (e === null) return !1;
    for (var r = 0; r < e.length && r < t.length; r++)
      if (!fi(t[r], e[r])) return !1;
    return !0;
  }
  function Vd(t, e, r, s, f, h) {
    return (
      (fa = h),
      (wt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (H.H = t === null || t.memoizedState === null ? iy : ry),
      (Ia = !1),
      (h = r(s, f)),
      (Ia = !1),
      Xl && (h = xm(e, r, s, f)),
      Sm(t),
      h
    );
  }
  function Sm(t) {
    H.H = lf;
    var e = ue !== null && ue.next !== null;
    if (((fa = 0), (Pe = ue = wt = null), (Wo = !1), (as = 0), (Gl = null), e))
      throw Error(i(300));
    t === null ||
      on ||
      ((t = t.dependencies), t !== null && Qo(t) && (on = !0));
  }
  function xm(t, e, r, s) {
    wt = t;
    var f = 0;
    do {
      if ((Xl && (Gl = null), (as = 0), (Xl = !1), 25 <= f))
        throw Error(i(301));
      if (((f += 1), (Pe = ue = null), t.updateQueue != null)) {
        var h = t.updateQueue;
        (h.lastEffect = null),
          (h.events = null),
          (h.stores = null),
          h.memoCache != null && (h.memoCache.index = 0);
      }
      (H.H = I2), (h = e(r, s));
    } while (Xl);
    return h;
  }
  function Z2() {
    var t = H.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? ls(e) : e),
      (t = t.useState()[0]),
      (ue !== null ? ue.memoizedState : null) !== t && (wt.flags |= 1024),
      e
    );
  }
  function $d() {
    var t = Io !== 0;
    return (Io = 0), t;
  }
  function Qd(t, e, r) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~r);
  }
  function Zd(t) {
    if (Wo) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Wo = !1;
    }
    (fa = 0), (Pe = ue = wt = null), (Xl = !1), (as = Io = 0), (Gl = null);
  }
  function Pn() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Pe === null ? (wt.memoizedState = Pe = t) : (Pe = Pe.next = t), Pe;
  }
  function Je() {
    if (ue === null) {
      var t = wt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ue.next;
    var e = Pe === null ? wt.memoizedState : Pe.next;
    if (e !== null) (Pe = e), (ue = t);
    else {
      if (t === null)
        throw wt.alternate === null ? Error(i(467)) : Error(i(310));
      (ue = t),
        (t = {
          memoizedState: ue.memoizedState,
          baseState: ue.baseState,
          baseQueue: ue.baseQueue,
          queue: ue.queue,
          next: null,
        }),
        Pe === null ? (wt.memoizedState = Pe = t) : (Pe = Pe.next = t);
    }
    return Pe;
  }
  function Kd() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ls(t) {
    var e = as;
    return (
      (as += 1),
      Gl === null && (Gl = []),
      (t = pm(Gl, t, e)),
      (e = wt),
      (Pe === null ? e.memoizedState : Pe.next) === null &&
        ((e = e.alternate),
        (H.H = e === null || e.memoizedState === null ? iy : ry)),
      t
    );
  }
  function tf(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ls(t);
      if (t.$$typeof === D) return Mn(t);
    }
    throw Error(i(438, String(t)));
  }
  function Pd(t) {
    var e = null,
      r = wt.updateQueue;
    if ((r !== null && (e = r.memoCache), e == null)) {
      var s = wt.alternate;
      s !== null &&
        ((s = s.updateQueue),
        s !== null &&
          ((s = s.memoCache),
          s != null &&
            (e = {
              data: s.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      r === null && ((r = Kd()), (wt.updateQueue = r)),
      (r.memoCache = e),
      (r = e.data[e.index]),
      r === void 0)
    )
      for (r = e.data[e.index] = Array(t), s = 0; s < t; s++) r[s] = x;
    return e.index++, r;
  }
  function Ur(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ef(t) {
    var e = Je();
    return Jd(e, ue, t);
  }
  function Jd(t, e, r) {
    var s = t.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = r;
    var f = t.baseQueue,
      h = s.pending;
    if (h !== null) {
      if (f !== null) {
        var v = f.next;
        (f.next = h.next), (h.next = v);
      }
      (e.baseQueue = f = h), (s.pending = null);
    }
    if (((h = t.baseState), f === null)) t.memoizedState = h;
    else {
      e = f.next;
      var A = (v = null),
        M = null,
        X = e,
        J = !1;
      do {
        var W = X.lane & -536870913;
        if (W !== X.lane ? (Xt & W) === W : (fa & W) === W) {
          var G = X.revertLane;
          if (G === 0)
            M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: X.action,
                  hasEagerState: X.hasEagerState,
                  eagerState: X.eagerState,
                  next: null,
                }),
              W === Hl && (J = !0);
          else if ((fa & G) === G) {
            (X = X.next), G === Hl && (J = !0);
            continue;
          } else
            (W = {
              lane: 0,
              revertLane: X.revertLane,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null,
            }),
              M === null ? ((A = M = W), (v = h)) : (M = M.next = W),
              (wt.lanes |= G),
              (ya |= G);
          (W = X.action),
            Ia && r(h, W),
            (h = X.hasEagerState ? X.eagerState : r(h, W));
        } else
          (G = {
            lane: W,
            revertLane: X.revertLane,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null,
          }),
            M === null ? ((A = M = G), (v = h)) : (M = M.next = G),
            (wt.lanes |= W),
            (ya |= W);
        X = X.next;
      } while (X !== null && X !== e);
      if (
        (M === null ? (v = h) : (M.next = A),
        !fi(h, t.memoizedState) && ((on = !0), J && ((r = Yl), r !== null)))
      )
        throw r;
      (t.memoizedState = h),
        (t.baseState = v),
        (t.baseQueue = M),
        (s.lastRenderedState = h);
    }
    return f === null && (s.lanes = 0), [t.memoizedState, s.dispatch];
  }
  function Fd(t) {
    var e = Je(),
      r = e.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = t;
    var s = r.dispatch,
      f = r.pending,
      h = e.memoizedState;
    if (f !== null) {
      r.pending = null;
      var v = (f = f.next);
      do (h = t(h, v.action)), (v = v.next);
      while (v !== f);
      fi(h, e.memoizedState) || (on = !0),
        (e.memoizedState = h),
        e.baseQueue === null && (e.baseState = h),
        (r.lastRenderedState = h);
    }
    return [h, s];
  }
  function Tm(t, e, r) {
    var s = wt,
      f = Je(),
      h = Qt;
    if (h) {
      if (r === void 0) throw Error(i(407));
      r = r();
    } else r = e();
    var v = !fi((ue || f).memoizedState, r);
    v && ((f.memoizedState = r), (on = !0)), (f = f.queue);
    var A = Em.bind(null, s, f, t);
    if (
      (us(2048, 8, A, [t]),
      f.getSnapshot !== e || v || (Pe !== null && Pe.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        jl(9, nf(), Am.bind(null, s, f, r, e), null),
        _e === null)
      )
        throw Error(i(349));
      h || (fa & 124) !== 0 || Cm(s, e, r);
    }
    return r;
  }
  function Cm(t, e, r) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: r }),
      (e = wt.updateQueue),
      e === null
        ? ((e = Kd()), (wt.updateQueue = e), (e.stores = [t]))
        : ((r = e.stores), r === null ? (e.stores = [t]) : r.push(t));
  }
  function Am(t, e, r, s) {
    (e.value = r), (e.getSnapshot = s), Om(e) && Mm(t);
  }
  function Em(t, e, r) {
    return r(function () {
      Om(e) && Mm(t);
    });
  }
  function Om(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var r = e();
      return !fi(t, r);
    } catch {
      return !0;
    }
  }
  function Mm(t) {
    var e = Bl(t, 2);
    e !== null && mi(e, t, 2);
  }
  function Wd(t) {
    var e = Pn();
    if (typeof t == "function") {
      var r = t;
      if (((t = r()), Ia)) {
        Oe(!0);
        try {
          r();
        } finally {
          Oe(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ur,
        lastRenderedState: t,
      }),
      e
    );
  }
  function wm(t, e, r, s) {
    return (t.baseState = r), Jd(t, ue, typeof s == "function" ? s : Ur);
  }
  function K2(t, e, r, s, f) {
    if (af(t)) throw Error(i(485));
    if (((t = e.action), t !== null)) {
      var h = {
        payload: f,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (v) {
          h.listeners.push(v);
        },
      };
      H.T !== null ? r(!0) : (h.isTransition = !1),
        s(h),
        (r = e.pending),
        r === null
          ? ((h.next = e.pending = h), Rm(e, h))
          : ((h.next = r.next), (e.pending = r.next = h));
    }
  }
  function Rm(t, e) {
    var r = e.action,
      s = e.payload,
      f = t.state;
    if (e.isTransition) {
      var h = H.T,
        v = {};
      H.T = v;
      try {
        var A = r(f, s),
          M = H.S;
        M !== null && M(v, A), Dm(t, e, A);
      } catch (X) {
        Id(t, e, X);
      } finally {
        H.T = h;
      }
    } else
      try {
        (h = r(f, s)), Dm(t, e, h);
      } catch (X) {
        Id(t, e, X);
      }
  }
  function Dm(t, e, r) {
    r !== null && typeof r == "object" && typeof r.then == "function"
      ? r.then(
          function (s) {
            zm(t, e, s);
          },
          function (s) {
            return Id(t, e, s);
          }
        )
      : zm(t, e, r);
  }
  function zm(t, e, r) {
    (e.status = "fulfilled"),
      (e.value = r),
      Nm(e),
      (t.state = r),
      (e = t.pending),
      e !== null &&
        ((r = e.next),
        r === e ? (t.pending = null) : ((r = r.next), (e.next = r), Rm(t, r)));
  }
  function Id(t, e, r) {
    var s = t.pending;
    if (((t.pending = null), s !== null)) {
      s = s.next;
      do (e.status = "rejected"), (e.reason = r), Nm(e), (e = e.next);
      while (e !== s);
    }
    t.action = null;
  }
  function Nm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Bm(t, e) {
    return e;
  }
  function km(t, e) {
    if (Qt) {
      var r = _e.formState;
      if (r !== null) {
        t: {
          var s = wt;
          if (Qt) {
            if (Be) {
              e: {
                for (var f = Be, h = sr; f.nodeType !== 8; ) {
                  if (!h) {
                    f = null;
                    break e;
                  }
                  if (((f = ir(f.nextSibling)), f === null)) {
                    f = null;
                    break e;
                  }
                }
                (h = f.data), (f = h === "F!" || h === "F" ? f : null);
              }
              if (f) {
                (Be = ir(f.nextSibling)), (s = f.data === "F!");
                break t;
              }
            }
            Pa(s);
          }
          s = !1;
        }
        s && (e = r[0]);
      }
    }
    return (
      (r = Pn()),
      (r.memoizedState = r.baseState = e),
      (s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bm,
        lastRenderedState: e,
      }),
      (r.queue = s),
      (r = ty.bind(null, wt, s)),
      (s.dispatch = r),
      (s = Wd(!1)),
      (h = rh.bind(null, wt, !1, s.queue)),
      (s = Pn()),
      (f = { state: e, dispatch: null, action: t, pending: null }),
      (s.queue = f),
      (r = K2.bind(null, wt, f, h, r)),
      (f.dispatch = r),
      (s.memoizedState = t),
      [e, r, !1]
    );
  }
  function Um(t) {
    var e = Je();
    return Lm(e, ue, t);
  }
  function Lm(t, e, r) {
    if (
      ((e = Jd(t, e, Bm)[0]),
      (t = ef(Ur)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var s = ls(e);
      } catch (v) {
        throw v === ts ? Po : v;
      }
    else s = e;
    e = Je();
    var f = e.queue,
      h = f.dispatch;
    return (
      r !== e.memoizedState &&
        ((wt.flags |= 2048), jl(9, nf(), P2.bind(null, f, r), null)),
      [s, h, t]
    );
  }
  function P2(t, e) {
    t.action = e;
  }
  function Hm(t) {
    var e = Je(),
      r = ue;
    if (r !== null) return Lm(e, r, t);
    Je(), (e = e.memoizedState), (r = Je());
    var s = r.queue.dispatch;
    return (r.memoizedState = t), [e, s, !1];
  }
  function jl(t, e, r, s) {
    return (
      (t = { tag: t, create: r, deps: s, inst: e, next: null }),
      (e = wt.updateQueue),
      e === null && ((e = Kd()), (wt.updateQueue = e)),
      (r = e.lastEffect),
      r === null
        ? (e.lastEffect = t.next = t)
        : ((s = r.next), (r.next = t), (t.next = s), (e.lastEffect = t)),
      t
    );
  }
  function nf() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ym() {
    return Je().memoizedState;
  }
  function rf(t, e, r, s) {
    var f = Pn();
    (s = s === void 0 ? null : s),
      (wt.flags |= t),
      (f.memoizedState = jl(1 | e, nf(), r, s));
  }
  function us(t, e, r, s) {
    var f = Je();
    s = s === void 0 ? null : s;
    var h = f.memoizedState.inst;
    ue !== null && s !== null && jd(s, ue.memoizedState.deps)
      ? (f.memoizedState = jl(e, h, r, s))
      : ((wt.flags |= t), (f.memoizedState = jl(1 | e, h, r, s)));
  }
  function qm(t, e) {
    rf(8390656, 8, t, e);
  }
  function Xm(t, e) {
    us(2048, 8, t, e);
  }
  function Gm(t, e) {
    return us(4, 2, t, e);
  }
  function jm(t, e) {
    return us(4, 4, t, e);
  }
  function Vm(t, e) {
    if (typeof e == "function") {
      t = t();
      var r = e(t);
      return function () {
        typeof r == "function" ? r() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function $m(t, e, r) {
    (r = r != null ? r.concat([t]) : null), us(4, 4, Vm.bind(null, e, t), r);
  }
  function th() {}
  function Qm(t, e) {
    var r = Je();
    e = e === void 0 ? null : e;
    var s = r.memoizedState;
    return e !== null && jd(e, s[1]) ? s[0] : ((r.memoizedState = [t, e]), t);
  }
  function Zm(t, e) {
    var r = Je();
    e = e === void 0 ? null : e;
    var s = r.memoizedState;
    if (e !== null && jd(e, s[1])) return s[0];
    if (((s = t()), Ia)) {
      Oe(!0);
      try {
        t();
      } finally {
        Oe(!1);
      }
    }
    return (r.memoizedState = [s, e]), s;
  }
  function eh(t, e, r) {
    return r === void 0 || (fa & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = r), (t = Jy()), (wt.lanes |= t), (ya |= t), r);
  }
  function Km(t, e, r, s) {
    return fi(r, e)
      ? r
      : ql.current !== null
      ? ((t = eh(t, r, s)), fi(t, e) || (on = !0), t)
      : (fa & 42) === 0
      ? ((on = !0), (t.memoizedState = r))
      : ((t = Jy()), (wt.lanes |= t), (ya |= t), e);
  }
  function Pm(t, e, r, s, f) {
    var h = K.p;
    K.p = h !== 0 && 8 > h ? h : 8;
    var v = H.T,
      A = {};
    (H.T = A), rh(t, !1, e, r);
    try {
      var M = f(),
        X = H.S;
      if (
        (X !== null && X(A, M),
        M !== null && typeof M == "object" && typeof M.then == "function")
      ) {
        var J = $2(M, s);
        ss(t, e, J, pi(t));
      } else ss(t, e, s, pi(t));
    } catch (W) {
      ss(t, e, { then: function () {}, status: "rejected", reason: W }, pi());
    } finally {
      (K.p = h), (H.T = v);
    }
  }
  function J2() {}
  function nh(t, e, r, s) {
    if (t.tag !== 5) throw Error(i(476));
    var f = Jm(t).queue;
    Pm(
      t,
      f,
      e,
      et,
      r === null
        ? J2
        : function () {
            return Fm(t), r(s);
          }
    );
  }
  function Jm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: et,
      baseState: et,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ur,
        lastRenderedState: et,
      },
      next: null,
    };
    var r = {};
    return (
      (e.next = {
        memoizedState: r,
        baseState: r,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ur,
          lastRenderedState: r,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Fm(t) {
    var e = Jm(t).next.queue;
    ss(t, e, {}, pi());
  }
  function ih() {
    return Mn(Es);
  }
  function Wm() {
    return Je().memoizedState;
  }
  function Im() {
    return Je().memoizedState;
  }
  function F2(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var r = pi();
          t = sa(r);
          var s = oa(e, t, r);
          s !== null && (mi(s, e, r), ns(s, e, r)),
            (e = { cache: Nd() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function W2(t, e, r) {
    var s = pi();
    (r = {
      lane: s,
      revertLane: 0,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      af(t)
        ? ey(e, r)
        : ((r = Td(t, e, r, s)), r !== null && (mi(r, t, s), ny(r, e, s)));
  }
  function ty(t, e, r) {
    var s = pi();
    ss(t, e, r, s);
  }
  function ss(t, e, r, s) {
    var f = {
      lane: s,
      revertLane: 0,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (af(t)) ey(e, f);
    else {
      var h = t.alternate;
      if (
        t.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = e.lastRenderedReducer), h !== null)
      )
        try {
          var v = e.lastRenderedState,
            A = h(v, r);
          if (((f.hasEagerState = !0), (f.eagerState = A), fi(A, v)))
            return Xo(t, e, f, 0), _e === null && qo(), !1;
        } catch {
        } finally {
        }
      if (((r = Td(t, e, f, s)), r !== null))
        return mi(r, t, s), ny(r, e, s), !0;
    }
    return !1;
  }
  function rh(t, e, r, s) {
    if (
      ((s = {
        lane: 2,
        revertLane: Uh(),
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      af(t))
    ) {
      if (e) throw Error(i(479));
    } else (e = Td(t, r, s, 2)), e !== null && mi(e, t, 2);
  }
  function af(t) {
    var e = t.alternate;
    return t === wt || (e !== null && e === wt);
  }
  function ey(t, e) {
    Xl = Wo = !0;
    var r = t.pending;
    r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
      (t.pending = e);
  }
  function ny(t, e, r) {
    if ((r & 4194048) !== 0) {
      var s = e.lanes;
      (s &= t.pendingLanes), (r |= s), (e.lanes = r), Er(t, r);
    }
  }
  var lf = {
      readContext: Mn,
      use: tf,
      useCallback: Xe,
      useContext: Xe,
      useEffect: Xe,
      useImperativeHandle: Xe,
      useLayoutEffect: Xe,
      useInsertionEffect: Xe,
      useMemo: Xe,
      useReducer: Xe,
      useRef: Xe,
      useState: Xe,
      useDebugValue: Xe,
      useDeferredValue: Xe,
      useTransition: Xe,
      useSyncExternalStore: Xe,
      useId: Xe,
      useHostTransitionStatus: Xe,
      useFormState: Xe,
      useActionState: Xe,
      useOptimistic: Xe,
      useMemoCache: Xe,
      useCacheRefresh: Xe,
    },
    iy = {
      readContext: Mn,
      use: tf,
      useCallback: function (t, e) {
        return (Pn().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Mn,
      useEffect: qm,
      useImperativeHandle: function (t, e, r) {
        (r = r != null ? r.concat([t]) : null),
          rf(4194308, 4, Vm.bind(null, e, t), r);
      },
      useLayoutEffect: function (t, e) {
        return rf(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        rf(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var r = Pn();
        e = e === void 0 ? null : e;
        var s = t();
        if (Ia) {
          Oe(!0);
          try {
            t();
          } finally {
            Oe(!1);
          }
        }
        return (r.memoizedState = [s, e]), s;
      },
      useReducer: function (t, e, r) {
        var s = Pn();
        if (r !== void 0) {
          var f = r(e);
          if (Ia) {
            Oe(!0);
            try {
              r(e);
            } finally {
              Oe(!1);
            }
          }
        } else f = e;
        return (
          (s.memoizedState = s.baseState = f),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: f,
          }),
          (s.queue = t),
          (t = t.dispatch = W2.bind(null, wt, t)),
          [s.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Pn();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Wd(t);
        var e = t.queue,
          r = ty.bind(null, wt, e);
        return (e.dispatch = r), [t.memoizedState, r];
      },
      useDebugValue: th,
      useDeferredValue: function (t, e) {
        var r = Pn();
        return eh(r, t, e);
      },
      useTransition: function () {
        var t = Wd(!1);
        return (
          (t = Pm.bind(null, wt, t.queue, !0, !1)),
          (Pn().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, r) {
        var s = wt,
          f = Pn();
        if (Qt) {
          if (r === void 0) throw Error(i(407));
          r = r();
        } else {
          if (((r = e()), _e === null)) throw Error(i(349));
          (Xt & 124) !== 0 || Cm(s, e, r);
        }
        f.memoizedState = r;
        var h = { value: r, getSnapshot: e };
        return (
          (f.queue = h),
          qm(Em.bind(null, s, h, t), [t]),
          (s.flags |= 2048),
          jl(9, nf(), Am.bind(null, s, h, r, e), null),
          r
        );
      },
      useId: function () {
        var t = Pn(),
          e = _e.identifierPrefix;
        if (Qt) {
          var r = Nr,
            s = zr;
          (r = (s & ~(1 << (32 - ee(s) - 1))).toString(32) + r),
            (e = "«" + e + "R" + r),
            (r = Io++),
            0 < r && (e += "H" + r.toString(32)),
            (e += "»");
        } else (r = Q2++), (e = "«" + e + "r" + r.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: ih,
      useFormState: km,
      useActionState: km,
      useOptimistic: function (t) {
        var e = Pn();
        e.memoizedState = e.baseState = t;
        var r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = r),
          (e = rh.bind(null, wt, !0, r)),
          (r.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Pd,
      useCacheRefresh: function () {
        return (Pn().memoizedState = F2.bind(null, wt));
      },
    },
    ry = {
      readContext: Mn,
      use: tf,
      useCallback: Qm,
      useContext: Mn,
      useEffect: Xm,
      useImperativeHandle: $m,
      useInsertionEffect: Gm,
      useLayoutEffect: jm,
      useMemo: Zm,
      useReducer: ef,
      useRef: Ym,
      useState: function () {
        return ef(Ur);
      },
      useDebugValue: th,
      useDeferredValue: function (t, e) {
        var r = Je();
        return Km(r, ue.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ef(Ur)[0],
          e = Je().memoizedState;
        return [typeof t == "boolean" ? t : ls(t), e];
      },
      useSyncExternalStore: Tm,
      useId: Wm,
      useHostTransitionStatus: ih,
      useFormState: Um,
      useActionState: Um,
      useOptimistic: function (t, e) {
        var r = Je();
        return wm(r, ue, t, e);
      },
      useMemoCache: Pd,
      useCacheRefresh: Im,
    },
    I2 = {
      readContext: Mn,
      use: tf,
      useCallback: Qm,
      useContext: Mn,
      useEffect: Xm,
      useImperativeHandle: $m,
      useInsertionEffect: Gm,
      useLayoutEffect: jm,
      useMemo: Zm,
      useReducer: Fd,
      useRef: Ym,
      useState: function () {
        return Fd(Ur);
      },
      useDebugValue: th,
      useDeferredValue: function (t, e) {
        var r = Je();
        return ue === null ? eh(r, t, e) : Km(r, ue.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Fd(Ur)[0],
          e = Je().memoizedState;
        return [typeof t == "boolean" ? t : ls(t), e];
      },
      useSyncExternalStore: Tm,
      useId: Wm,
      useHostTransitionStatus: ih,
      useFormState: Hm,
      useActionState: Hm,
      useOptimistic: function (t, e) {
        var r = Je();
        return ue !== null
          ? wm(r, ue, t, e)
          : ((r.baseState = t), [t, r.queue.dispatch]);
      },
      useMemoCache: Pd,
      useCacheRefresh: Im,
    },
    Vl = null,
    os = 0;
  function uf(t) {
    var e = os;
    return (os += 1), Vl === null && (Vl = []), pm(Vl, t, e);
  }
  function fs(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function sf(t, e) {
    throw e.$$typeof === y
      ? Error(i(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          i(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function ay(t) {
    var e = t._init;
    return e(t._payload);
  }
  function ly(t) {
    function e(L, B) {
      if (t) {
        var q = L.deletions;
        q === null ? ((L.deletions = [B]), (L.flags |= 16)) : q.push(B);
      }
    }
    function r(L, B) {
      if (!t) return null;
      for (; B !== null; ) e(L, B), (B = B.sibling);
      return null;
    }
    function s(L) {
      for (var B = new Map(); L !== null; )
        L.key !== null ? B.set(L.key, L) : B.set(L.index, L), (L = L.sibling);
      return B;
    }
    function f(L, B) {
      return (L = Dr(L, B)), (L.index = 0), (L.sibling = null), L;
    }
    function h(L, B, q) {
      return (
        (L.index = q),
        t
          ? ((q = L.alternate),
            q !== null
              ? ((q = q.index), q < B ? ((L.flags |= 67108866), B) : q)
              : ((L.flags |= 67108866), B))
          : ((L.flags |= 1048576), B)
      );
    }
    function v(L) {
      return t && L.alternate === null && (L.flags |= 67108866), L;
    }
    function A(L, B, q, F) {
      return B === null || B.tag !== 6
        ? ((B = Ad(q, L.mode, F)), (B.return = L), B)
        : ((B = f(B, q)), (B.return = L), B);
    }
    function M(L, B, q, F) {
      var st = q.type;
      return st === C
        ? J(L, B, q.props.children, F, q.key)
        : B !== null &&
          (B.elementType === st ||
            (typeof st == "object" &&
              st !== null &&
              st.$$typeof === Y &&
              ay(st) === B.type))
        ? ((B = f(B, q.props)), fs(B, q), (B.return = L), B)
        : ((B = jo(q.type, q.key, q.props, null, L.mode, F)),
          fs(B, q),
          (B.return = L),
          B);
    }
    function X(L, B, q, F) {
      return B === null ||
        B.tag !== 4 ||
        B.stateNode.containerInfo !== q.containerInfo ||
        B.stateNode.implementation !== q.implementation
        ? ((B = Ed(q, L.mode, F)), (B.return = L), B)
        : ((B = f(B, q.children || [])), (B.return = L), B);
    }
    function J(L, B, q, F, st) {
      return B === null || B.tag !== 7
        ? ((B = $a(q, L.mode, F, st)), (B.return = L), B)
        : ((B = f(B, q)), (B.return = L), B);
    }
    function W(L, B, q) {
      if (
        (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
      )
        return (B = Ad("" + B, L.mode, q)), (B.return = L), B;
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case b:
            return (
              (q = jo(B.type, B.key, B.props, null, L.mode, q)),
              fs(q, B),
              (q.return = L),
              q
            );
          case S:
            return (B = Ed(B, L.mode, q)), (B.return = L), B;
          case Y:
            var F = B._init;
            return (B = F(B._payload)), W(L, B, q);
        }
        if (at(B) || Z(B))
          return (B = $a(B, L.mode, q, null)), (B.return = L), B;
        if (typeof B.then == "function") return W(L, uf(B), q);
        if (B.$$typeof === D) return W(L, Zo(L, B), q);
        sf(L, B);
      }
      return null;
    }
    function G(L, B, q, F) {
      var st = B !== null ? B.key : null;
      if (
        (typeof q == "string" && q !== "") ||
        typeof q == "number" ||
        typeof q == "bigint"
      )
        return st !== null ? null : A(L, B, "" + q, F);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case b:
            return q.key === st ? M(L, B, q, F) : null;
          case S:
            return q.key === st ? X(L, B, q, F) : null;
          case Y:
            return (st = q._init), (q = st(q._payload)), G(L, B, q, F);
        }
        if (at(q) || Z(q)) return st !== null ? null : J(L, B, q, F, null);
        if (typeof q.then == "function") return G(L, B, uf(q), F);
        if (q.$$typeof === D) return G(L, B, Zo(L, q), F);
        sf(L, q);
      }
      return null;
    }
    function V(L, B, q, F, st) {
      if (
        (typeof F == "string" && F !== "") ||
        typeof F == "number" ||
        typeof F == "bigint"
      )
        return (L = L.get(q) || null), A(B, L, "" + F, st);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case b:
            return (
              (L = L.get(F.key === null ? q : F.key) || null), M(B, L, F, st)
            );
          case S:
            return (
              (L = L.get(F.key === null ? q : F.key) || null), X(B, L, F, st)
            );
          case Y:
            var zt = F._init;
            return (F = zt(F._payload)), V(L, B, q, F, st);
        }
        if (at(F) || Z(F)) return (L = L.get(q) || null), J(B, L, F, st, null);
        if (typeof F.then == "function") return V(L, B, q, uf(F), st);
        if (F.$$typeof === D) return V(L, B, q, Zo(B, F), st);
        sf(B, F);
      }
      return null;
    }
    function vt(L, B, q, F) {
      for (
        var st = null, zt = null, pt = B, _t = (B = 0), cn = null;
        pt !== null && _t < q.length;
        _t++
      ) {
        pt.index > _t ? ((cn = pt), (pt = null)) : (cn = pt.sibling);
        var Vt = G(L, pt, q[_t], F);
        if (Vt === null) {
          pt === null && (pt = cn);
          break;
        }
        t && pt && Vt.alternate === null && e(L, pt),
          (B = h(Vt, B, _t)),
          zt === null ? (st = Vt) : (zt.sibling = Vt),
          (zt = Vt),
          (pt = cn);
      }
      if (_t === q.length) return r(L, pt), Qt && Za(L, _t), st;
      if (pt === null) {
        for (; _t < q.length; _t++)
          (pt = W(L, q[_t], F)),
            pt !== null &&
              ((B = h(pt, B, _t)),
              zt === null ? (st = pt) : (zt.sibling = pt),
              (zt = pt));
        return Qt && Za(L, _t), st;
      }
      for (pt = s(pt); _t < q.length; _t++)
        (cn = V(pt, L, _t, q[_t], F)),
          cn !== null &&
            (t &&
              cn.alternate !== null &&
              pt.delete(cn.key === null ? _t : cn.key),
            (B = h(cn, B, _t)),
            zt === null ? (st = cn) : (zt.sibling = cn),
            (zt = cn));
      return (
        t &&
          pt.forEach(function (Ea) {
            return e(L, Ea);
          }),
        Qt && Za(L, _t),
        st
      );
    }
    function yt(L, B, q, F) {
      if (q == null) throw Error(i(151));
      for (
        var st = null,
          zt = null,
          pt = B,
          _t = (B = 0),
          cn = null,
          Vt = q.next();
        pt !== null && !Vt.done;
        _t++, Vt = q.next()
      ) {
        pt.index > _t ? ((cn = pt), (pt = null)) : (cn = pt.sibling);
        var Ea = G(L, pt, Vt.value, F);
        if (Ea === null) {
          pt === null && (pt = cn);
          break;
        }
        t && pt && Ea.alternate === null && e(L, pt),
          (B = h(Ea, B, _t)),
          zt === null ? (st = Ea) : (zt.sibling = Ea),
          (zt = Ea),
          (pt = cn);
      }
      if (Vt.done) return r(L, pt), Qt && Za(L, _t), st;
      if (pt === null) {
        for (; !Vt.done; _t++, Vt = q.next())
          (Vt = W(L, Vt.value, F)),
            Vt !== null &&
              ((B = h(Vt, B, _t)),
              zt === null ? (st = Vt) : (zt.sibling = Vt),
              (zt = Vt));
        return Qt && Za(L, _t), st;
      }
      for (pt = s(pt); !Vt.done; _t++, Vt = q.next())
        (Vt = V(pt, L, _t, Vt.value, F)),
          Vt !== null &&
            (t &&
              Vt.alternate !== null &&
              pt.delete(Vt.key === null ? _t : Vt.key),
            (B = h(Vt, B, _t)),
            zt === null ? (st = Vt) : (zt.sibling = Vt),
            (zt = Vt));
      return (
        t &&
          pt.forEach(function (tT) {
            return e(L, tT);
          }),
        Qt && Za(L, _t),
        st
      );
    }
    function oe(L, B, q, F) {
      if (
        (typeof q == "object" &&
          q !== null &&
          q.type === C &&
          q.key === null &&
          (q = q.props.children),
        typeof q == "object" && q !== null)
      ) {
        switch (q.$$typeof) {
          case b:
            t: {
              for (var st = q.key; B !== null; ) {
                if (B.key === st) {
                  if (((st = q.type), st === C)) {
                    if (B.tag === 7) {
                      r(L, B.sibling),
                        (F = f(B, q.props.children)),
                        (F.return = L),
                        (L = F);
                      break t;
                    }
                  } else if (
                    B.elementType === st ||
                    (typeof st == "object" &&
                      st !== null &&
                      st.$$typeof === Y &&
                      ay(st) === B.type)
                  ) {
                    r(L, B.sibling),
                      (F = f(B, q.props)),
                      fs(F, q),
                      (F.return = L),
                      (L = F);
                    break t;
                  }
                  r(L, B);
                  break;
                } else e(L, B);
                B = B.sibling;
              }
              q.type === C
                ? ((F = $a(q.props.children, L.mode, F, q.key)),
                  (F.return = L),
                  (L = F))
                : ((F = jo(q.type, q.key, q.props, null, L.mode, F)),
                  fs(F, q),
                  (F.return = L),
                  (L = F));
            }
            return v(L);
          case S:
            t: {
              for (st = q.key; B !== null; ) {
                if (B.key === st)
                  if (
                    B.tag === 4 &&
                    B.stateNode.containerInfo === q.containerInfo &&
                    B.stateNode.implementation === q.implementation
                  ) {
                    r(L, B.sibling),
                      (F = f(B, q.children || [])),
                      (F.return = L),
                      (L = F);
                    break t;
                  } else {
                    r(L, B);
                    break;
                  }
                else e(L, B);
                B = B.sibling;
              }
              (F = Ed(q, L.mode, F)), (F.return = L), (L = F);
            }
            return v(L);
          case Y:
            return (st = q._init), (q = st(q._payload)), oe(L, B, q, F);
        }
        if (at(q)) return vt(L, B, q, F);
        if (Z(q)) {
          if (((st = Z(q)), typeof st != "function")) throw Error(i(150));
          return (q = st.call(q)), yt(L, B, q, F);
        }
        if (typeof q.then == "function") return oe(L, B, uf(q), F);
        if (q.$$typeof === D) return oe(L, B, Zo(L, q), F);
        sf(L, q);
      }
      return (typeof q == "string" && q !== "") ||
        typeof q == "number" ||
        typeof q == "bigint"
        ? ((q = "" + q),
          B !== null && B.tag === 6
            ? (r(L, B.sibling), (F = f(B, q)), (F.return = L), (L = F))
            : (r(L, B), (F = Ad(q, L.mode, F)), (F.return = L), (L = F)),
          v(L))
        : r(L, B);
    }
    return function (L, B, q, F) {
      try {
        os = 0;
        var st = oe(L, B, q, F);
        return (Vl = null), st;
      } catch (pt) {
        if (pt === ts || pt === Po) throw pt;
        var zt = ci(29, pt, null, L.mode);
        return (zt.lanes = F), (zt.return = L), zt;
      } finally {
      }
    };
  }
  var $l = ly(!0),
    uy = ly(!1),
    Xi = Q(null),
    or = null;
  function ca(t) {
    var e = t.alternate;
    I(ln, ln.current & 1),
      I(Xi, t),
      or === null &&
        (e === null || ql.current !== null || e.memoizedState !== null) &&
        (or = t);
  }
  function sy(t) {
    if (t.tag === 22) {
      if ((I(ln, ln.current), I(Xi, t), or === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (or = t);
      }
    } else da();
  }
  function da() {
    I(ln, ln.current), I(Xi, Xi.current);
  }
  function Lr(t) {
    tt(Xi), or === t && (or = null), tt(ln);
  }
  var ln = Q(0);
  function of(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var r = e.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || Kh(r))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function ah(t, e, r, s) {
    (e = t.memoizedState),
      (r = r(s, e)),
      (r = r == null ? e : m({}, e, r)),
      (t.memoizedState = r),
      t.lanes === 0 && (t.updateQueue.baseState = r);
  }
  var lh = {
    enqueueSetState: function (t, e, r) {
      t = t._reactInternals;
      var s = pi(),
        f = sa(s);
      (f.payload = e),
        r != null && (f.callback = r),
        (e = oa(t, f, s)),
        e !== null && (mi(e, t, s), ns(e, t, s));
    },
    enqueueReplaceState: function (t, e, r) {
      t = t._reactInternals;
      var s = pi(),
        f = sa(s);
      (f.tag = 1),
        (f.payload = e),
        r != null && (f.callback = r),
        (e = oa(t, f, s)),
        e !== null && (mi(e, t, s), ns(e, t, s));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var r = pi(),
        s = sa(r);
      (s.tag = 2),
        e != null && (s.callback = e),
        (e = oa(t, s, r)),
        e !== null && (mi(e, t, r), ns(e, t, r));
    },
  };
  function oy(t, e, r, s, f, h, v) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(s, h, v)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Qu(r, s) || !Qu(f, h)
        : !0
    );
  }
  function fy(t, e, r, s) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(r, s),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(r, s),
      e.state !== t && lh.enqueueReplaceState(e, e.state, null);
  }
  function tl(t, e) {
    var r = e;
    if ("ref" in e) {
      r = {};
      for (var s in e) s !== "ref" && (r[s] = e[s]);
    }
    if ((t = t.defaultProps)) {
      r === e && (r = m({}, r));
      for (var f in t) r[f] === void 0 && (r[f] = t[f]);
    }
    return r;
  }
  var ff =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function cy(t) {
    ff(t);
  }
  function dy(t) {
    console.error(t);
  }
  function hy(t) {
    ff(t);
  }
  function cf(t, e) {
    try {
      var r = t.onUncaughtError;
      r(e.value, { componentStack: e.stack });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function gy(t, e, r) {
    try {
      var s = t.onCaughtError;
      s(r.value, {
        componentStack: r.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function uh(t, e, r) {
    return (
      (r = sa(r)),
      (r.tag = 3),
      (r.payload = { element: null }),
      (r.callback = function () {
        cf(t, e);
      }),
      r
    );
  }
  function py(t) {
    return (t = sa(t)), (t.tag = 3), t;
  }
  function my(t, e, r, s) {
    var f = r.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var h = s.value;
      (t.payload = function () {
        return f(h);
      }),
        (t.callback = function () {
          gy(e, r, s);
        });
    }
    var v = r.stateNode;
    v !== null &&
      typeof v.componentDidCatch == "function" &&
      (t.callback = function () {
        gy(e, r, s),
          typeof f != "function" &&
            (_a === null ? (_a = new Set([this])) : _a.add(this));
        var A = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: A !== null ? A : "",
        });
      });
  }
  function tx(t, e, r, s, f) {
    if (
      ((r.flags |= 32768),
      s !== null && typeof s == "object" && typeof s.then == "function")
    ) {
      if (
        ((e = r.alternate),
        e !== null && Fu(e, r, f, !0),
        (r = Xi.current),
        r !== null)
      ) {
        switch (r.tag) {
          case 13:
            return (
              or === null ? Dh() : r.alternate === null && ke === 0 && (ke = 3),
              (r.flags &= -257),
              (r.flags |= 65536),
              (r.lanes = f),
              s === Ud
                ? (r.flags |= 16384)
                : ((e = r.updateQueue),
                  e === null ? (r.updateQueue = new Set([s])) : e.add(s),
                  Nh(t, s, f)),
              !1
            );
          case 22:
            return (
              (r.flags |= 65536),
              s === Ud
                ? (r.flags |= 16384)
                : ((e = r.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([s]),
                      }),
                      (r.updateQueue = e))
                    : ((r = e.retryQueue),
                      r === null ? (e.retryQueue = new Set([s])) : r.add(s)),
                  Nh(t, s, f)),
              !1
            );
        }
        throw Error(i(435, r.tag));
      }
      return Nh(t, s, f), Dh(), !1;
    }
    if (Qt)
      return (
        (e = Xi.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = f),
            s !== wd && ((t = Error(i(422), { cause: s })), Ju(Li(t, r))))
          : (s !== wd && ((e = Error(i(423), { cause: s })), Ju(Li(e, r))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (f &= -f),
            (t.lanes |= f),
            (s = Li(s, r)),
            (f = uh(t.stateNode, s, f)),
            Yd(t, f),
            ke !== 4 && (ke = 2)),
        !1
      );
    var h = Error(i(520), { cause: s });
    if (
      ((h = Li(h, r)),
      ys === null ? (ys = [h]) : ys.push(h),
      ke !== 4 && (ke = 2),
      e === null)
    )
      return !0;
    (s = Li(s, r)), (r = e);
    do {
      switch (r.tag) {
        case 3:
          return (
            (r.flags |= 65536),
            (t = f & -f),
            (r.lanes |= t),
            (t = uh(r.stateNode, s, t)),
            Yd(r, t),
            !1
          );
        case 1:
          if (
            ((e = r.type),
            (h = r.stateNode),
            (r.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (h !== null &&
                  typeof h.componentDidCatch == "function" &&
                  (_a === null || !_a.has(h)))))
          )
            return (
              (r.flags |= 65536),
              (f &= -f),
              (r.lanes |= f),
              (f = py(f)),
              my(f, t, r, s),
              Yd(r, f),
              !1
            );
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var yy = Error(i(461)),
    on = !1;
  function bn(t, e, r, s) {
    e.child = t === null ? uy(e, null, r, s) : $l(e, t.child, r, s);
  }
  function _y(t, e, r, s, f) {
    r = r.render;
    var h = e.ref;
    if ("ref" in s) {
      var v = {};
      for (var A in s) A !== "ref" && (v[A] = s[A]);
    } else v = s;
    return (
      Fa(e),
      (s = Vd(t, e, r, v, h, f)),
      (A = $d()),
      t !== null && !on
        ? (Qd(t, e, f), Hr(t, e, f))
        : (Qt && A && Od(e), (e.flags |= 1), bn(t, e, s, f), e.child)
    );
  }
  function vy(t, e, r, s, f) {
    if (t === null) {
      var h = r.type;
      return typeof h == "function" &&
        !Cd(h) &&
        h.defaultProps === void 0 &&
        r.compare === null
        ? ((e.tag = 15), (e.type = h), by(t, e, h, s, f))
        : ((t = jo(r.type, null, s, e, e.mode, f)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((h = t.child), !ph(t, f))) {
      var v = h.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Qu), r(v, s) && t.ref === e.ref)
      )
        return Hr(t, e, f);
    }
    return (
      (e.flags |= 1),
      (t = Dr(h, s)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function by(t, e, r, s, f) {
    if (t !== null) {
      var h = t.memoizedProps;
      if (Qu(h, s) && t.ref === e.ref)
        if (((on = !1), (e.pendingProps = s = h), ph(t, f)))
          (t.flags & 131072) !== 0 && (on = !0);
        else return (e.lanes = t.lanes), Hr(t, e, f);
    }
    return sh(t, e, r, s, f);
  }
  function Sy(t, e, r) {
    var s = e.pendingProps,
      f = s.children,
      h = t !== null ? t.memoizedState : null;
    if (s.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((s = h !== null ? h.baseLanes | r : r), t !== null)) {
          for (f = e.child = t.child, h = 0; f !== null; )
            (h = h | f.lanes | f.childLanes), (f = f.sibling);
          e.childLanes = h & ~s;
        } else (e.childLanes = 0), (e.child = null);
        return xy(t, e, s, r);
      }
      if ((r & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Ko(e, h !== null ? h.cachePool : null),
          h !== null ? bm(e, h) : Xd(),
          sy(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          xy(t, e, h !== null ? h.baseLanes | r : r, r)
        );
    } else
      h !== null
        ? (Ko(e, h.cachePool), bm(e, h), da(), (e.memoizedState = null))
        : (t !== null && Ko(e, null), Xd(), da());
    return bn(t, e, f, r), e.child;
  }
  function xy(t, e, r, s) {
    var f = kd();
    return (
      (f = f === null ? null : { parent: an._currentValue, pool: f }),
      (e.memoizedState = { baseLanes: r, cachePool: f }),
      t !== null && Ko(e, null),
      Xd(),
      sy(e),
      t !== null && Fu(t, e, s, !0),
      null
    );
  }
  function df(t, e) {
    var r = e.ref;
    if (r === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object") throw Error(i(284));
      (t === null || t.ref !== r) && (e.flags |= 4194816);
    }
  }
  function sh(t, e, r, s, f) {
    return (
      Fa(e),
      (r = Vd(t, e, r, s, void 0, f)),
      (s = $d()),
      t !== null && !on
        ? (Qd(t, e, f), Hr(t, e, f))
        : (Qt && s && Od(e), (e.flags |= 1), bn(t, e, r, f), e.child)
    );
  }
  function Ty(t, e, r, s, f, h) {
    return (
      Fa(e),
      (e.updateQueue = null),
      (r = xm(e, s, r, f)),
      Sm(t),
      (s = $d()),
      t !== null && !on
        ? (Qd(t, e, h), Hr(t, e, h))
        : (Qt && s && Od(e), (e.flags |= 1), bn(t, e, r, h), e.child)
    );
  }
  function Cy(t, e, r, s, f) {
    if ((Fa(e), e.stateNode === null)) {
      var h = kl,
        v = r.contextType;
      typeof v == "object" && v !== null && (h = Mn(v)),
        (h = new r(s, h)),
        (e.memoizedState =
          h.state !== null && h.state !== void 0 ? h.state : null),
        (h.updater = lh),
        (e.stateNode = h),
        (h._reactInternals = e),
        (h = e.stateNode),
        (h.props = s),
        (h.state = e.memoizedState),
        (h.refs = {}),
        Ld(e),
        (v = r.contextType),
        (h.context = typeof v == "object" && v !== null ? Mn(v) : kl),
        (h.state = e.memoizedState),
        (v = r.getDerivedStateFromProps),
        typeof v == "function" && (ah(e, r, v, s), (h.state = e.memoizedState)),
        typeof r.getDerivedStateFromProps == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function" ||
          (typeof h.UNSAFE_componentWillMount != "function" &&
            typeof h.componentWillMount != "function") ||
          ((v = h.state),
          typeof h.componentWillMount == "function" && h.componentWillMount(),
          typeof h.UNSAFE_componentWillMount == "function" &&
            h.UNSAFE_componentWillMount(),
          v !== h.state && lh.enqueueReplaceState(h, h.state, null),
          rs(e, s, h, f),
          is(),
          (h.state = e.memoizedState)),
        typeof h.componentDidMount == "function" && (e.flags |= 4194308),
        (s = !0);
    } else if (t === null) {
      h = e.stateNode;
      var A = e.memoizedProps,
        M = tl(r, A);
      h.props = M;
      var X = h.context,
        J = r.contextType;
      (v = kl), typeof J == "object" && J !== null && (v = Mn(J));
      var W = r.getDerivedStateFromProps;
      (J =
        typeof W == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function"),
        (A = e.pendingProps !== A),
        J ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((A || X !== v) && fy(e, h, s, v)),
        (ua = !1);
      var G = e.memoizedState;
      (h.state = G),
        rs(e, s, h, f),
        is(),
        (X = e.memoizedState),
        A || G !== X || ua
          ? (typeof W == "function" && (ah(e, r, W, s), (X = e.memoizedState)),
            (M = ua || oy(e, r, M, s, G, X, v))
              ? (J ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = s),
                (e.memoizedState = X)),
            (h.props = s),
            (h.state = X),
            (h.context = v),
            (s = M))
          : (typeof h.componentDidMount == "function" && (e.flags |= 4194308),
            (s = !1));
    } else {
      (h = e.stateNode),
        Hd(t, e),
        (v = e.memoizedProps),
        (J = tl(r, v)),
        (h.props = J),
        (W = e.pendingProps),
        (G = h.context),
        (X = r.contextType),
        (M = kl),
        typeof X == "object" && X !== null && (M = Mn(X)),
        (A = r.getDerivedStateFromProps),
        (X =
          typeof A == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function") ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((v !== W || G !== M) && fy(e, h, s, M)),
        (ua = !1),
        (G = e.memoizedState),
        (h.state = G),
        rs(e, s, h, f),
        is();
      var V = e.memoizedState;
      v !== W ||
      G !== V ||
      ua ||
      (t !== null && t.dependencies !== null && Qo(t.dependencies))
        ? (typeof A == "function" && (ah(e, r, A, s), (V = e.memoizedState)),
          (J =
            ua ||
            oy(e, r, J, s, G, V, M) ||
            (t !== null && t.dependencies !== null && Qo(t.dependencies)))
            ? (X ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(s, V, M),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(s, V, M)),
              typeof h.componentDidUpdate == "function" && (e.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (v === t.memoizedProps && G === t.memoizedState) ||
                (e.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (v === t.memoizedProps && G === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = s),
              (e.memoizedState = V)),
          (h.props = s),
          (h.state = V),
          (h.context = M),
          (s = J))
        : (typeof h.componentDidUpdate != "function" ||
            (v === t.memoizedProps && G === t.memoizedState) ||
            (e.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (v === t.memoizedProps && G === t.memoizedState) ||
            (e.flags |= 1024),
          (s = !1));
    }
    return (
      (h = s),
      df(t, e),
      (s = (e.flags & 128) !== 0),
      h || s
        ? ((h = e.stateNode),
          (r =
            s && typeof r.getDerivedStateFromError != "function"
              ? null
              : h.render()),
          (e.flags |= 1),
          t !== null && s
            ? ((e.child = $l(e, t.child, null, f)),
              (e.child = $l(e, null, r, f)))
            : bn(t, e, r, f),
          (e.memoizedState = h.state),
          (t = e.child))
        : (t = Hr(t, e, f)),
      t
    );
  }
  function Ay(t, e, r, s) {
    return Pu(), (e.flags |= 256), bn(t, e, r, s), e.child;
  }
  var oh = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function fh(t) {
    return { baseLanes: t, cachePool: dm() };
  }
  function ch(t, e, r) {
    return (t = t !== null ? t.childLanes & ~r : 0), e && (t |= Gi), t;
  }
  function Ey(t, e, r) {
    var s = e.pendingProps,
      f = !1,
      h = (e.flags & 128) !== 0,
      v;
    if (
      ((v = h) ||
        (v =
          t !== null && t.memoizedState === null ? !1 : (ln.current & 2) !== 0),
      v && ((f = !0), (e.flags &= -129)),
      (v = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Qt) {
        if ((f ? ca(e) : da(), Qt)) {
          var A = Be,
            M;
          if ((M = A)) {
            t: {
              for (M = A, A = sr; M.nodeType !== 8; ) {
                if (!A) {
                  A = null;
                  break t;
                }
                if (((M = ir(M.nextSibling)), M === null)) {
                  A = null;
                  break t;
                }
              }
              A = M;
            }
            A !== null
              ? ((e.memoizedState = {
                  dehydrated: A,
                  treeContext: Qa !== null ? { id: zr, overflow: Nr } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (M = ci(18, null, null, 0)),
                (M.stateNode = A),
                (M.return = e),
                (e.child = M),
                (Yn = e),
                (Be = null),
                (M = !0))
              : (M = !1);
          }
          M || Pa(e);
        }
        if (
          ((A = e.memoizedState),
          A !== null && ((A = A.dehydrated), A !== null))
        )
          return Kh(A) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        Lr(e);
      }
      return (
        (A = s.children),
        (s = s.fallback),
        f
          ? (da(),
            (f = e.mode),
            (A = hf({ mode: "hidden", children: A }, f)),
            (s = $a(s, f, r, null)),
            (A.return = e),
            (s.return = e),
            (A.sibling = s),
            (e.child = A),
            (f = e.child),
            (f.memoizedState = fh(r)),
            (f.childLanes = ch(t, v, r)),
            (e.memoizedState = oh),
            s)
          : (ca(e), dh(e, A))
      );
    }
    if (
      ((M = t.memoizedState), M !== null && ((A = M.dehydrated), A !== null))
    ) {
      if (h)
        e.flags & 256
          ? (ca(e), (e.flags &= -257), (e = hh(t, e, r)))
          : e.memoizedState !== null
          ? (da(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (da(),
            (f = s.fallback),
            (A = e.mode),
            (s = hf({ mode: "visible", children: s.children }, A)),
            (f = $a(f, A, r, null)),
            (f.flags |= 2),
            (s.return = e),
            (f.return = e),
            (s.sibling = f),
            (e.child = s),
            $l(e, t.child, null, r),
            (s = e.child),
            (s.memoizedState = fh(r)),
            (s.childLanes = ch(t, v, r)),
            (e.memoizedState = oh),
            (e = f));
      else if ((ca(e), Kh(A))) {
        if (((v = A.nextSibling && A.nextSibling.dataset), v)) var X = v.dgst;
        (v = X),
          (s = Error(i(419))),
          (s.stack = ""),
          (s.digest = v),
          Ju({ value: s, source: null, stack: null }),
          (e = hh(t, e, r));
      } else if (
        (on || Fu(t, e, r, !1), (v = (r & t.childLanes) !== 0), on || v)
      ) {
        if (
          ((v = _e),
          v !== null &&
            ((s = r & -r),
            (s = (s & 42) !== 0 ? 1 : ui(s)),
            (s = (s & (v.suspendedLanes | r)) !== 0 ? 0 : s),
            s !== 0 && s !== M.retryLane))
        )
          throw ((M.retryLane = s), Bl(t, s), mi(v, t, s), yy);
        A.data === "$?" || Dh(), (e = hh(t, e, r));
      } else
        A.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = M.treeContext),
            (Be = ir(A.nextSibling)),
            (Yn = e),
            (Qt = !0),
            (Ka = null),
            (sr = !1),
            t !== null &&
              ((Yi[qi++] = zr),
              (Yi[qi++] = Nr),
              (Yi[qi++] = Qa),
              (zr = t.id),
              (Nr = t.overflow),
              (Qa = e)),
            (e = dh(e, s.children)),
            (e.flags |= 4096));
      return e;
    }
    return f
      ? (da(),
        (f = s.fallback),
        (A = e.mode),
        (M = t.child),
        (X = M.sibling),
        (s = Dr(M, { mode: "hidden", children: s.children })),
        (s.subtreeFlags = M.subtreeFlags & 65011712),
        X !== null ? (f = Dr(X, f)) : ((f = $a(f, A, r, null)), (f.flags |= 2)),
        (f.return = e),
        (s.return = e),
        (s.sibling = f),
        (e.child = s),
        (s = f),
        (f = e.child),
        (A = t.child.memoizedState),
        A === null
          ? (A = fh(r))
          : ((M = A.cachePool),
            M !== null
              ? ((X = an._currentValue),
                (M = M.parent !== X ? { parent: X, pool: X } : M))
              : (M = dm()),
            (A = { baseLanes: A.baseLanes | r, cachePool: M })),
        (f.memoizedState = A),
        (f.childLanes = ch(t, v, r)),
        (e.memoizedState = oh),
        s)
      : (ca(e),
        (r = t.child),
        (t = r.sibling),
        (r = Dr(r, { mode: "visible", children: s.children })),
        (r.return = e),
        (r.sibling = null),
        t !== null &&
          ((v = e.deletions),
          v === null ? ((e.deletions = [t]), (e.flags |= 16)) : v.push(t)),
        (e.child = r),
        (e.memoizedState = null),
        r);
  }
  function dh(t, e) {
    return (
      (e = hf({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function hf(t, e) {
    return (
      (t = ci(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function hh(t, e, r) {
    return (
      $l(e, t.child, null, r),
      (t = dh(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Oy(t, e, r) {
    t.lanes |= e;
    var s = t.alternate;
    s !== null && (s.lanes |= e), Dd(t.return, e, r);
  }
  function gh(t, e, r, s, f) {
    var h = t.memoizedState;
    h === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: r,
          tailMode: f,
        })
      : ((h.isBackwards = e),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = s),
        (h.tail = r),
        (h.tailMode = f));
  }
  function My(t, e, r) {
    var s = e.pendingProps,
      f = s.revealOrder,
      h = s.tail;
    if ((bn(t, e, s.children, r), (s = ln.current), (s & 2) !== 0))
      (s = (s & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Oy(t, r, e);
          else if (t.tag === 19) Oy(t, r, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      s &= 1;
    }
    switch ((I(ln, s), f)) {
      case "forwards":
        for (r = e.child, f = null; r !== null; )
          (t = r.alternate),
            t !== null && of(t) === null && (f = r),
            (r = r.sibling);
        (r = f),
          r === null
            ? ((f = e.child), (e.child = null))
            : ((f = r.sibling), (r.sibling = null)),
          gh(e, !1, f, r, h);
        break;
      case "backwards":
        for (r = null, f = e.child, e.child = null; f !== null; ) {
          if (((t = f.alternate), t !== null && of(t) === null)) {
            e.child = f;
            break;
          }
          (t = f.sibling), (f.sibling = r), (r = f), (f = t);
        }
        gh(e, !0, r, null, h);
        break;
      case "together":
        gh(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Hr(t, e, r) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (ya |= e.lanes),
      (r & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Fu(t, e, r, !1), (r & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(i(153));
    if (e.child !== null) {
      for (
        t = e.child, r = Dr(t, t.pendingProps), e.child = r, r.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (r = r.sibling = Dr(t, t.pendingProps)),
          (r.return = e);
      r.sibling = null;
    }
    return e.child;
  }
  function ph(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Qo(t)));
  }
  function ex(t, e, r) {
    switch (e.tag) {
      case 3:
        St(e, e.stateNode.containerInfo),
          la(e, an, t.memoizedState.cache),
          Pu();
        break;
      case 27:
      case 5:
        ae(e);
        break;
      case 4:
        St(e, e.stateNode.containerInfo);
        break;
      case 10:
        la(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var s = e.memoizedState;
        if (s !== null)
          return s.dehydrated !== null
            ? (ca(e), (e.flags |= 128), null)
            : (r & e.child.childLanes) !== 0
            ? Ey(t, e, r)
            : (ca(e), (t = Hr(t, e, r)), t !== null ? t.sibling : null);
        ca(e);
        break;
      case 19:
        var f = (t.flags & 128) !== 0;
        if (
          ((s = (r & e.childLanes) !== 0),
          s || (Fu(t, e, r, !1), (s = (r & e.childLanes) !== 0)),
          f)
        ) {
          if (s) return My(t, e, r);
          e.flags |= 128;
        }
        if (
          ((f = e.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          I(ln, ln.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Sy(t, e, r);
      case 24:
        la(e, an, t.memoizedState.cache);
    }
    return Hr(t, e, r);
  }
  function wy(t, e, r) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) on = !0;
      else {
        if (!ph(t, r) && (e.flags & 128) === 0) return (on = !1), ex(t, e, r);
        on = (t.flags & 131072) !== 0;
      }
    else (on = !1), Qt && (e.flags & 1048576) !== 0 && am(e, $o, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var s = e.elementType,
            f = s._init;
          if (((s = f(s._payload)), (e.type = s), typeof s == "function"))
            Cd(s)
              ? ((t = tl(s, t)), (e.tag = 1), (e = Cy(null, e, s, t, r)))
              : ((e.tag = 0), (e = sh(null, e, s, t, r)));
          else {
            if (s != null) {
              if (((f = s.$$typeof), f === R)) {
                (e.tag = 11), (e = _y(null, e, s, t, r));
                break t;
              } else if (f === N) {
                (e.tag = 14), (e = vy(null, e, s, t, r));
                break t;
              }
            }
            throw ((e = ht(s) || s), Error(i(306, e, "")));
          }
        }
        return e;
      case 0:
        return sh(t, e, e.type, e.pendingProps, r);
      case 1:
        return (s = e.type), (f = tl(s, e.pendingProps)), Cy(t, e, s, f, r);
      case 3:
        t: {
          if ((St(e, e.stateNode.containerInfo), t === null))
            throw Error(i(387));
          s = e.pendingProps;
          var h = e.memoizedState;
          (f = h.element), Hd(t, e), rs(e, s, null, r);
          var v = e.memoizedState;
          if (
            ((s = v.cache),
            la(e, an, s),
            s !== h.cache && zd(e, [an], r, !0),
            is(),
            (s = v.element),
            h.isDehydrated)
          )
            if (
              ((h = { element: s, isDehydrated: !1, cache: v.cache }),
              (e.updateQueue.baseState = h),
              (e.memoizedState = h),
              e.flags & 256)
            ) {
              e = Ay(t, e, s, r);
              break t;
            } else if (s !== f) {
              (f = Li(Error(i(424)), e)), Ju(f), (e = Ay(t, e, s, r));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Be = ir(t.firstChild),
                  Yn = e,
                  Qt = !0,
                  Ka = null,
                  sr = !0,
                  r = uy(e, null, s, r),
                  e.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
            }
          else {
            if ((Pu(), s === f)) {
              e = Hr(t, e, r);
              break t;
            }
            bn(t, e, s, r);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          df(t, e),
          t === null
            ? (r = N1(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = r)
              : Qt ||
                ((r = e.type),
                (t = e.pendingProps),
                (s = Of(lt.current).createElement(r)),
                (s[nt] = e),
                (s[gt] = t),
                xn(s, r, t),
                jt(s),
                (e.stateNode = s))
            : (e.memoizedState = N1(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ae(e),
          t === null &&
            Qt &&
            ((s = e.stateNode = R1(e.type, e.pendingProps, lt.current)),
            (Yn = e),
            (sr = !0),
            (f = Be),
            Sa(e.type) ? ((Ph = f), (Be = ir(s.firstChild))) : (Be = f)),
          bn(t, e, e.pendingProps.children, r),
          df(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Qt &&
            ((f = s = Be) &&
              ((s = wx(s, e.type, e.pendingProps, sr)),
              s !== null
                ? ((e.stateNode = s),
                  (Yn = e),
                  (Be = ir(s.firstChild)),
                  (sr = !1),
                  (f = !0))
                : (f = !1)),
            f || Pa(e)),
          ae(e),
          (f = e.type),
          (h = e.pendingProps),
          (v = t !== null ? t.memoizedProps : null),
          (s = h.children),
          $h(f, h) ? (s = null) : v !== null && $h(f, v) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((f = Vd(t, e, Z2, null, null, r)), (Es._currentValue = f)),
          df(t, e),
          bn(t, e, s, r),
          e.child
        );
      case 6:
        return (
          t === null &&
            Qt &&
            ((t = r = Be) &&
              ((r = Rx(r, e.pendingProps, sr)),
              r !== null
                ? ((e.stateNode = r), (Yn = e), (Be = null), (t = !0))
                : (t = !1)),
            t || Pa(e)),
          null
        );
      case 13:
        return Ey(t, e, r);
      case 4:
        return (
          St(e, e.stateNode.containerInfo),
          (s = e.pendingProps),
          t === null ? (e.child = $l(e, null, s, r)) : bn(t, e, s, r),
          e.child
        );
      case 11:
        return _y(t, e, e.type, e.pendingProps, r);
      case 7:
        return bn(t, e, e.pendingProps, r), e.child;
      case 8:
        return bn(t, e, e.pendingProps.children, r), e.child;
      case 12:
        return bn(t, e, e.pendingProps.children, r), e.child;
      case 10:
        return (
          (s = e.pendingProps),
          la(e, e.type, s.value),
          bn(t, e, s.children, r),
          e.child
        );
      case 9:
        return (
          (f = e.type._context),
          (s = e.pendingProps.children),
          Fa(e),
          (f = Mn(f)),
          (s = s(f)),
          (e.flags |= 1),
          bn(t, e, s, r),
          e.child
        );
      case 14:
        return vy(t, e, e.type, e.pendingProps, r);
      case 15:
        return by(t, e, e.type, e.pendingProps, r);
      case 19:
        return My(t, e, r);
      case 31:
        return (
          (s = e.pendingProps),
          (r = e.mode),
          (s = { mode: s.mode, children: s.children }),
          t === null
            ? ((r = hf(s, r)),
              (r.ref = e.ref),
              (e.child = r),
              (r.return = e),
              (e = r))
            : ((r = Dr(t.child, s)),
              (r.ref = e.ref),
              (e.child = r),
              (r.return = e),
              (e = r)),
          e
        );
      case 22:
        return Sy(t, e, r);
      case 24:
        return (
          Fa(e),
          (s = Mn(an)),
          t === null
            ? ((f = kd()),
              f === null &&
                ((f = _e),
                (h = Nd()),
                (f.pooledCache = h),
                h.refCount++,
                h !== null && (f.pooledCacheLanes |= r),
                (f = h)),
              (e.memoizedState = { parent: s, cache: f }),
              Ld(e),
              la(e, an, f))
            : ((t.lanes & r) !== 0 && (Hd(t, e), rs(e, null, null, r), is()),
              (f = t.memoizedState),
              (h = e.memoizedState),
              f.parent !== s
                ? ((f = { parent: s, cache: s }),
                  (e.memoizedState = f),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = f),
                  la(e, an, s))
                : ((s = h.cache),
                  la(e, an, s),
                  s !== f.cache && zd(e, [an], r, !0))),
          bn(t, e, e.pendingProps.children, r),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(i(156, e.tag));
  }
  function Yr(t) {
    t.flags |= 4;
  }
  function Ry(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !H1(e))) {
      if (
        ((e = Xi.current),
        e !== null &&
          ((Xt & 4194048) === Xt
            ? or !== null
            : ((Xt & 62914560) !== Xt && (Xt & 536870912) === 0) || e !== or))
      )
        throw ((es = Ud), hm);
      t.flags |= 8192;
    }
  }
  function gf(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? lr() : 536870912), (t.lanes |= e), (Pl |= e));
  }
  function cs(t, e) {
    if (!Qt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var r = null; e !== null; )
            e.alternate !== null && (r = e), (e = e.sibling);
          r === null ? (t.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = t.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), (r = r.sibling);
          s === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function we(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      r = 0,
      s = 0;
    if (e)
      for (var f = t.child; f !== null; )
        (r |= f.lanes | f.childLanes),
          (s |= f.subtreeFlags & 65011712),
          (s |= f.flags & 65011712),
          (f.return = t),
          (f = f.sibling);
    else
      for (f = t.child; f !== null; )
        (r |= f.lanes | f.childLanes),
          (s |= f.subtreeFlags),
          (s |= f.flags),
          (f.return = t),
          (f = f.sibling);
    return (t.subtreeFlags |= s), (t.childLanes = r), e;
  }
  function nx(t, e, r) {
    var s = e.pendingProps;
    switch ((Md(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return we(e), null;
      case 1:
        return we(e), null;
      case 3:
        return (
          (r = e.stateNode),
          (s = null),
          t !== null && (s = t.memoizedState.cache),
          e.memoizedState.cache !== s && (e.flags |= 2048),
          kr(an),
          Jt(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ku(e)
              ? Yr(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), sm())),
          we(e),
          null
        );
      case 26:
        return (
          (r = e.memoizedState),
          t === null
            ? (Yr(e),
              r !== null ? (we(e), Ry(e, r)) : (we(e), (e.flags &= -16777217)))
            : r
            ? r !== t.memoizedState
              ? (Yr(e), we(e), Ry(e, r))
              : (we(e), (e.flags &= -16777217))
            : (t.memoizedProps !== s && Yr(e), we(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        ze(e), (r = lt.current);
        var f = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== s && Yr(e);
        else {
          if (!s) {
            if (e.stateNode === null) throw Error(i(166));
            return we(e), null;
          }
          (t = it.current),
            Ku(e) ? lm(e) : ((t = R1(f, s, r)), (e.stateNode = t), Yr(e));
        }
        return we(e), null;
      case 5:
        if ((ze(e), (r = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== s && Yr(e);
        else {
          if (!s) {
            if (e.stateNode === null) throw Error(i(166));
            return we(e), null;
          }
          if (((t = it.current), Ku(e))) lm(e);
          else {
            switch (((f = Of(lt.current)), t)) {
              case 1:
                t = f.createElementNS("http://www.w3.org/2000/svg", r);
                break;
              case 2:
                t = f.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                break;
              default:
                switch (r) {
                  case "svg":
                    t = f.createElementNS("http://www.w3.org/2000/svg", r);
                    break;
                  case "math":
                    t = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    (t = f.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof s.is == "string"
                        ? f.createElement("select", { is: s.is })
                        : f.createElement("select")),
                      s.multiple
                        ? (t.multiple = !0)
                        : s.size && (t.size = s.size);
                    break;
                  default:
                    t =
                      typeof s.is == "string"
                        ? f.createElement(r, { is: s.is })
                        : f.createElement(r);
                }
            }
            (t[nt] = e), (t[gt] = s);
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) t.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break t;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            e.stateNode = t;
            t: switch ((xn(t, r, s), r)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!s.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Yr(e);
          }
        }
        return we(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== s && Yr(e);
        else {
          if (typeof s != "string" && e.stateNode === null) throw Error(i(166));
          if (((t = lt.current), Ku(e))) {
            if (
              ((t = e.stateNode),
              (r = e.memoizedProps),
              (s = null),
              (f = Yn),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  s = f.memoizedProps;
              }
            (t[nt] = e),
              (t = !!(
                t.nodeValue === r ||
                (s !== null && s.suppressHydrationWarning === !0) ||
                T1(t.nodeValue, r)
              )),
              t || Pa(e);
          } else (t = Of(t).createTextNode(s)), (t[nt] = e), (e.stateNode = t);
        }
        return we(e), null;
      case 13:
        if (
          ((s = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((f = Ku(e)), s !== null && s.dehydrated !== null)) {
            if (t === null) {
              if (!f) throw Error(i(318));
              if (
                ((f = e.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(i(317));
              f[nt] = e;
            } else
              Pu(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            we(e), (f = !1);
          } else
            (f = sm()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = f),
              (f = !0);
          if (!f) return e.flags & 256 ? (Lr(e), e) : (Lr(e), null);
        }
        if ((Lr(e), (e.flags & 128) !== 0)) return (e.lanes = r), e;
        if (
          ((r = s !== null), (t = t !== null && t.memoizedState !== null), r)
        ) {
          (s = e.child),
            (f = null),
            s.alternate !== null &&
              s.alternate.memoizedState !== null &&
              s.alternate.memoizedState.cachePool !== null &&
              (f = s.alternate.memoizedState.cachePool.pool);
          var h = null;
          s.memoizedState !== null &&
            s.memoizedState.cachePool !== null &&
            (h = s.memoizedState.cachePool.pool),
            h !== f && (s.flags |= 2048);
        }
        return (
          r !== t && r && (e.child.flags |= 8192),
          gf(e, e.updateQueue),
          we(e),
          null
        );
      case 4:
        return Jt(), t === null && qh(e.stateNode.containerInfo), we(e), null;
      case 10:
        return kr(e.type), we(e), null;
      case 19:
        if ((tt(ln), (f = e.memoizedState), f === null)) return we(e), null;
        if (((s = (e.flags & 128) !== 0), (h = f.rendering), h === null))
          if (s) cs(f, !1);
          else {
            if (ke !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((h = of(t)), h !== null)) {
                  for (
                    e.flags |= 128,
                      cs(f, !1),
                      t = h.updateQueue,
                      e.updateQueue = t,
                      gf(e, t),
                      e.subtreeFlags = 0,
                      t = r,
                      r = e.child;
                    r !== null;

                  )
                    rm(r, t), (r = r.sibling);
                  return I(ln, (ln.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            f.tail !== null &&
              $() > yf &&
              ((e.flags |= 128), (s = !0), cs(f, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = of(h)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                gf(e, t),
                cs(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !h.alternate &&
                  !Qt)
              )
                return we(e), null;
            } else
              2 * $() - f.renderingStartTime > yf &&
                r !== 536870912 &&
                ((e.flags |= 128), (s = !0), cs(f, !1), (e.lanes = 4194304));
          f.isBackwards
            ? ((h.sibling = e.child), (e.child = h))
            : ((t = f.last),
              t !== null ? (t.sibling = h) : (e.child = h),
              (f.last = h));
        }
        return f.tail !== null
          ? ((e = f.tail),
            (f.rendering = e),
            (f.tail = e.sibling),
            (f.renderingStartTime = $()),
            (e.sibling = null),
            (t = ln.current),
            I(ln, s ? (t & 1) | 2 : t & 1),
            e)
          : (we(e), null);
      case 22:
      case 23:
        return (
          Lr(e),
          Gd(),
          (s = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== s && (e.flags |= 8192)
            : s && (e.flags |= 8192),
          s
            ? (r & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (we(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : we(e),
          (r = e.updateQueue),
          r !== null && gf(e, r.retryQueue),
          (r = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (r = t.memoizedState.cachePool.pool),
          (s = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (s = e.memoizedState.cachePool.pool),
          s !== r && (e.flags |= 2048),
          t !== null && tt(Wa),
          null
        );
      case 24:
        return (
          (r = null),
          t !== null && (r = t.memoizedState.cache),
          e.memoizedState.cache !== r && (e.flags |= 2048),
          kr(an),
          we(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, e.tag));
  }
  function ix(t, e) {
    switch ((Md(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          kr(an),
          Jt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return ze(e), null;
      case 13:
        if (
          (Lr(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(i(340));
          Pu();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return tt(ln), null;
      case 4:
        return Jt(), null;
      case 10:
        return kr(e.type), null;
      case 22:
      case 23:
        return (
          Lr(e),
          Gd(),
          t !== null && tt(Wa),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return kr(an), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Dy(t, e) {
    switch ((Md(e), e.tag)) {
      case 3:
        kr(an), Jt();
        break;
      case 26:
      case 27:
      case 5:
        ze(e);
        break;
      case 4:
        Jt();
        break;
      case 13:
        Lr(e);
        break;
      case 19:
        tt(ln);
        break;
      case 10:
        kr(e.type);
        break;
      case 22:
      case 23:
        Lr(e), Gd(), t !== null && tt(Wa);
        break;
      case 24:
        kr(an);
    }
  }
  function ds(t, e) {
    try {
      var r = e.updateQueue,
        s = r !== null ? r.lastEffect : null;
      if (s !== null) {
        var f = s.next;
        r = f;
        do {
          if ((r.tag & t) === t) {
            s = void 0;
            var h = r.create,
              v = r.inst;
            (s = h()), (v.destroy = s);
          }
          r = r.next;
        } while (r !== f);
      }
    } catch (A) {
      ce(e, e.return, A);
    }
  }
  function ha(t, e, r) {
    try {
      var s = e.updateQueue,
        f = s !== null ? s.lastEffect : null;
      if (f !== null) {
        var h = f.next;
        s = h;
        do {
          if ((s.tag & t) === t) {
            var v = s.inst,
              A = v.destroy;
            if (A !== void 0) {
              (v.destroy = void 0), (f = e);
              var M = r,
                X = A;
              try {
                X();
              } catch (J) {
                ce(f, M, J);
              }
            }
          }
          s = s.next;
        } while (s !== h);
      }
    } catch (J) {
      ce(e, e.return, J);
    }
  }
  function zy(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var r = t.stateNode;
      try {
        vm(e, r);
      } catch (s) {
        ce(t, t.return, s);
      }
    }
  }
  function Ny(t, e, r) {
    (r.props = tl(t.type, t.memoizedProps)), (r.state = t.memoizedState);
    try {
      r.componentWillUnmount();
    } catch (s) {
      ce(t, e, s);
    }
  }
  function hs(t, e) {
    try {
      var r = t.ref;
      if (r !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var s = t.stateNode;
            break;
          case 30:
            s = t.stateNode;
            break;
          default:
            s = t.stateNode;
        }
        typeof r == "function" ? (t.refCleanup = r(s)) : (r.current = s);
      }
    } catch (f) {
      ce(t, e, f);
    }
  }
  function fr(t, e) {
    var r = t.ref,
      s = t.refCleanup;
    if (r !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (f) {
          ce(t, e, f);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (f) {
          ce(t, e, f);
        }
      else r.current = null;
  }
  function By(t) {
    var e = t.type,
      r = t.memoizedProps,
      s = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && s.focus();
          break t;
        case "img":
          r.src ? (s.src = r.src) : r.srcSet && (s.srcset = r.srcSet);
      }
    } catch (f) {
      ce(t, t.return, f);
    }
  }
  function mh(t, e, r) {
    try {
      var s = t.stateNode;
      Cx(s, t.type, r, e), (s[gt] = e);
    } catch (f) {
      ce(t, t.return, f);
    }
  }
  function ky(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Sa(t.type)) ||
      t.tag === 4
    );
  }
  function yh(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || ky(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Sa(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function _h(t, e, r) {
    var s = t.tag;
    if (s === 5 || s === 6)
      (t = t.stateNode),
        e
          ? (r.nodeType === 9
              ? r.body
              : r.nodeName === "HTML"
              ? r.ownerDocument.body
              : r
            ).insertBefore(t, e)
          : ((e =
              r.nodeType === 9
                ? r.body
                : r.nodeName === "HTML"
                ? r.ownerDocument.body
                : r),
            e.appendChild(t),
            (r = r._reactRootContainer),
            r != null || e.onclick !== null || (e.onclick = Ef));
    else if (
      s !== 4 &&
      (s === 27 && Sa(t.type) && ((r = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (_h(t, e, r), t = t.sibling; t !== null; )
        _h(t, e, r), (t = t.sibling);
  }
  function pf(t, e, r) {
    var s = t.tag;
    if (s === 5 || s === 6)
      (t = t.stateNode), e ? r.insertBefore(t, e) : r.appendChild(t);
    else if (
      s !== 4 &&
      (s === 27 && Sa(t.type) && (r = t.stateNode), (t = t.child), t !== null)
    )
      for (pf(t, e, r), t = t.sibling; t !== null; )
        pf(t, e, r), (t = t.sibling);
  }
  function Uy(t) {
    var e = t.stateNode,
      r = t.memoizedProps;
    try {
      for (var s = t.type, f = e.attributes; f.length; )
        e.removeAttributeNode(f[0]);
      xn(e, s, r), (e[nt] = t), (e[gt] = r);
    } catch (h) {
      ce(t, t.return, h);
    }
  }
  var qr = !1,
    Ge = !1,
    vh = !1,
    Ly = typeof WeakSet == "function" ? WeakSet : Set,
    fn = null;
  function rx(t, e) {
    if (((t = t.containerInfo), (jh = Nf), (t = Kp(t)), yd(t))) {
      if ("selectionStart" in t)
        var r = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          r = ((r = t.ownerDocument) && r.defaultView) || window;
          var s = r.getSelection && r.getSelection();
          if (s && s.rangeCount !== 0) {
            r = s.anchorNode;
            var f = s.anchorOffset,
              h = s.focusNode;
            s = s.focusOffset;
            try {
              r.nodeType, h.nodeType;
            } catch {
              r = null;
              break t;
            }
            var v = 0,
              A = -1,
              M = -1,
              X = 0,
              J = 0,
              W = t,
              G = null;
            e: for (;;) {
              for (
                var V;
                W !== r || (f !== 0 && W.nodeType !== 3) || (A = v + f),
                  W !== h || (s !== 0 && W.nodeType !== 3) || (M = v + s),
                  W.nodeType === 3 && (v += W.nodeValue.length),
                  (V = W.firstChild) !== null;

              )
                (G = W), (W = V);
              for (;;) {
                if (W === t) break e;
                if (
                  (G === r && ++X === f && (A = v),
                  G === h && ++J === s && (M = v),
                  (V = W.nextSibling) !== null)
                )
                  break;
                (W = G), (G = W.parentNode);
              }
              W = V;
            }
            r = A === -1 || M === -1 ? null : { start: A, end: M };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Vh = { focusedElem: t, selectionRange: r }, Nf = !1, fn = e;
      fn !== null;

    )
      if (
        ((e = fn), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (fn = t);
      else
        for (; fn !== null; ) {
          switch (((e = fn), (h = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && h !== null) {
                (t = void 0),
                  (r = e),
                  (f = h.memoizedProps),
                  (h = h.memoizedState),
                  (s = r.stateNode);
                try {
                  var vt = tl(r.type, f, r.elementType === r.type);
                  (t = s.getSnapshotBeforeUpdate(vt, h)),
                    (s.__reactInternalSnapshotBeforeUpdate = t);
                } catch (yt) {
                  ce(r, r.return, yt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (r = t.nodeType), r === 9)
                )
                  Zh(t);
                else if (r === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Zh(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(i(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (fn = t);
            break;
          }
          fn = e.return;
        }
  }
  function Hy(t, e, r) {
    var s = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        ga(t, r), s & 4 && ds(5, r);
        break;
      case 1:
        if ((ga(t, r), s & 4))
          if (((t = r.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (v) {
              ce(r, r.return, v);
            }
          else {
            var f = tl(r.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(f, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              ce(r, r.return, v);
            }
          }
        s & 64 && zy(r), s & 512 && hs(r, r.return);
        break;
      case 3:
        if ((ga(t, r), s & 64 && ((t = r.updateQueue), t !== null))) {
          if (((e = null), r.child !== null))
            switch (r.child.tag) {
              case 27:
              case 5:
                e = r.child.stateNode;
                break;
              case 1:
                e = r.child.stateNode;
            }
          try {
            vm(t, e);
          } catch (v) {
            ce(r, r.return, v);
          }
        }
        break;
      case 27:
        e === null && s & 4 && Uy(r);
      case 26:
      case 5:
        ga(t, r), e === null && s & 4 && By(r), s & 512 && hs(r, r.return);
        break;
      case 12:
        ga(t, r);
        break;
      case 13:
        ga(t, r),
          s & 4 && Xy(t, r),
          s & 64 &&
            ((t = r.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((r = hx.bind(null, r)), Dx(t, r))));
        break;
      case 22:
        if (((s = r.memoizedState !== null || qr), !s)) {
          (e = (e !== null && e.memoizedState !== null) || Ge), (f = qr);
          var h = Ge;
          (qr = s),
            (Ge = e) && !h ? pa(t, r, (r.subtreeFlags & 8772) !== 0) : ga(t, r),
            (qr = f),
            (Ge = h);
        }
        break;
      case 30:
        break;
      default:
        ga(t, r);
    }
  }
  function Yy(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Yy(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && ye(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Te = null,
    Jn = !1;
  function Xr(t, e, r) {
    for (r = r.child; r !== null; ) qy(t, e, r), (r = r.sibling);
  }
  function qy(t, e, r) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(yn, r);
      } catch {}
    switch (r.tag) {
      case 26:
        Ge || fr(r, e),
          Xr(t, e, r),
          r.memoizedState
            ? r.memoizedState.count--
            : r.stateNode && ((r = r.stateNode), r.parentNode.removeChild(r));
        break;
      case 27:
        Ge || fr(r, e);
        var s = Te,
          f = Jn;
        Sa(r.type) && ((Te = r.stateNode), (Jn = !1)),
          Xr(t, e, r),
          xs(r.stateNode),
          (Te = s),
          (Jn = f);
        break;
      case 5:
        Ge || fr(r, e);
      case 6:
        if (
          ((s = Te),
          (f = Jn),
          (Te = null),
          Xr(t, e, r),
          (Te = s),
          (Jn = f),
          Te !== null)
        )
          if (Jn)
            try {
              (Te.nodeType === 9
                ? Te.body
                : Te.nodeName === "HTML"
                ? Te.ownerDocument.body
                : Te
              ).removeChild(r.stateNode);
            } catch (h) {
              ce(r, e, h);
            }
          else
            try {
              Te.removeChild(r.stateNode);
            } catch (h) {
              ce(r, e, h);
            }
        break;
      case 18:
        Te !== null &&
          (Jn
            ? ((t = Te),
              M1(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                r.stateNode
              ),
              Rs(t))
            : M1(Te, r.stateNode));
        break;
      case 4:
        (s = Te),
          (f = Jn),
          (Te = r.stateNode.containerInfo),
          (Jn = !0),
          Xr(t, e, r),
          (Te = s),
          (Jn = f);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ge || ha(2, r, e), Ge || ha(4, r, e), Xr(t, e, r);
        break;
      case 1:
        Ge ||
          (fr(r, e),
          (s = r.stateNode),
          typeof s.componentWillUnmount == "function" && Ny(r, e, s)),
          Xr(t, e, r);
        break;
      case 21:
        Xr(t, e, r);
        break;
      case 22:
        (Ge = (s = Ge) || r.memoizedState !== null), Xr(t, e, r), (Ge = s);
        break;
      default:
        Xr(t, e, r);
    }
  }
  function Xy(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Rs(t);
      } catch (r) {
        ce(e, e.return, r);
      }
  }
  function ax(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Ly()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Ly()),
          e
        );
      default:
        throw Error(i(435, t.tag));
    }
  }
  function bh(t, e) {
    var r = ax(t);
    e.forEach(function (s) {
      var f = gx.bind(null, t, s);
      r.has(s) || (r.add(s), s.then(f, f));
    });
  }
  function di(t, e) {
    var r = e.deletions;
    if (r !== null)
      for (var s = 0; s < r.length; s++) {
        var f = r[s],
          h = t,
          v = e,
          A = v;
        t: for (; A !== null; ) {
          switch (A.tag) {
            case 27:
              if (Sa(A.type)) {
                (Te = A.stateNode), (Jn = !1);
                break t;
              }
              break;
            case 5:
              (Te = A.stateNode), (Jn = !1);
              break t;
            case 3:
            case 4:
              (Te = A.stateNode.containerInfo), (Jn = !0);
              break t;
          }
          A = A.return;
        }
        if (Te === null) throw Error(i(160));
        qy(h, v, f),
          (Te = null),
          (Jn = !1),
          (h = f.alternate),
          h !== null && (h.return = null),
          (f.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Gy(e, t), (e = e.sibling);
  }
  var nr = null;
  function Gy(t, e) {
    var r = t.alternate,
      s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        di(e, t),
          hi(t),
          s & 4 && (ha(3, t, t.return), ds(3, t), ha(5, t, t.return));
        break;
      case 1:
        di(e, t),
          hi(t),
          s & 512 && (Ge || r === null || fr(r, r.return)),
          s & 64 &&
            qr &&
            ((t = t.updateQueue),
            t !== null &&
              ((s = t.callbacks),
              s !== null &&
                ((r = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = r === null ? s : r.concat(s)))));
        break;
      case 26:
        var f = nr;
        if (
          (di(e, t),
          hi(t),
          s & 512 && (Ge || r === null || fr(r, r.return)),
          s & 4)
        ) {
          var h = r !== null ? r.memoizedState : null;
          if (((s = t.memoizedState), r === null))
            if (s === null)
              if (t.stateNode === null) {
                t: {
                  (s = t.type),
                    (r = t.memoizedProps),
                    (f = f.ownerDocument || f);
                  e: switch (s) {
                    case "title":
                      (h = f.getElementsByTagName("title")[0]),
                        (!h ||
                          h[Ne] ||
                          h[nt] ||
                          h.namespaceURI === "http://www.w3.org/2000/svg" ||
                          h.hasAttribute("itemprop")) &&
                          ((h = f.createElement(s)),
                          f.head.insertBefore(
                            h,
                            f.querySelector("head > title")
                          )),
                        xn(h, s, r),
                        (h[nt] = t),
                        jt(h),
                        (s = h);
                      break t;
                    case "link":
                      var v = U1("link", "href", f).get(s + (r.href || ""));
                      if (v) {
                        for (var A = 0; A < v.length; A++)
                          if (
                            ((h = v[A]),
                            h.getAttribute("href") ===
                              (r.href == null || r.href === ""
                                ? null
                                : r.href) &&
                              h.getAttribute("rel") ===
                                (r.rel == null ? null : r.rel) &&
                              h.getAttribute("title") ===
                                (r.title == null ? null : r.title) &&
                              h.getAttribute("crossorigin") ===
                                (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            v.splice(A, 1);
                            break e;
                          }
                      }
                      (h = f.createElement(s)),
                        xn(h, s, r),
                        f.head.appendChild(h);
                      break;
                    case "meta":
                      if (
                        (v = U1("meta", "content", f).get(
                          s + (r.content || "")
                        ))
                      ) {
                        for (A = 0; A < v.length; A++)
                          if (
                            ((h = v[A]),
                            h.getAttribute("content") ===
                              (r.content == null ? null : "" + r.content) &&
                              h.getAttribute("name") ===
                                (r.name == null ? null : r.name) &&
                              h.getAttribute("property") ===
                                (r.property == null ? null : r.property) &&
                              h.getAttribute("http-equiv") ===
                                (r.httpEquiv == null ? null : r.httpEquiv) &&
                              h.getAttribute("charset") ===
                                (r.charSet == null ? null : r.charSet))
                          ) {
                            v.splice(A, 1);
                            break e;
                          }
                      }
                      (h = f.createElement(s)),
                        xn(h, s, r),
                        f.head.appendChild(h);
                      break;
                    default:
                      throw Error(i(468, s));
                  }
                  (h[nt] = t), jt(h), (s = h);
                }
                t.stateNode = s;
              } else L1(f, t.type, t.stateNode);
            else t.stateNode = k1(f, s, t.memoizedProps);
          else
            h !== s
              ? (h === null
                  ? r.stateNode !== null &&
                    ((r = r.stateNode), r.parentNode.removeChild(r))
                  : h.count--,
                s === null
                  ? L1(f, t.type, t.stateNode)
                  : k1(f, s, t.memoizedProps))
              : s === null &&
                t.stateNode !== null &&
                mh(t, t.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        di(e, t),
          hi(t),
          s & 512 && (Ge || r === null || fr(r, r.return)),
          r !== null && s & 4 && mh(t, t.memoizedProps, r.memoizedProps);
        break;
      case 5:
        if (
          (di(e, t),
          hi(t),
          s & 512 && (Ge || r === null || fr(r, r.return)),
          t.flags & 32)
        ) {
          f = t.stateNode;
          try {
            Ol(f, "");
          } catch (V) {
            ce(t, t.return, V);
          }
        }
        s & 4 &&
          t.stateNode != null &&
          ((f = t.memoizedProps), mh(t, f, r !== null ? r.memoizedProps : f)),
          s & 1024 && (vh = !0);
        break;
      case 6:
        if ((di(e, t), hi(t), s & 4)) {
          if (t.stateNode === null) throw Error(i(162));
          (s = t.memoizedProps), (r = t.stateNode);
          try {
            r.nodeValue = s;
          } catch (V) {
            ce(t, t.return, V);
          }
        }
        break;
      case 3:
        if (
          ((Rf = null),
          (f = nr),
          (nr = Mf(e.containerInfo)),
          di(e, t),
          (nr = f),
          hi(t),
          s & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Rs(e.containerInfo);
          } catch (V) {
            ce(t, t.return, V);
          }
        vh && ((vh = !1), jy(t));
        break;
      case 4:
        (s = nr),
          (nr = Mf(t.stateNode.containerInfo)),
          di(e, t),
          hi(t),
          (nr = s);
        break;
      case 12:
        di(e, t), hi(t);
        break;
      case 13:
        di(e, t),
          hi(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (r !== null && r.memoizedState !== null) &&
            (Eh = $()),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), bh(t, s)));
        break;
      case 22:
        f = t.memoizedState !== null;
        var M = r !== null && r.memoizedState !== null,
          X = qr,
          J = Ge;
        if (
          ((qr = X || f),
          (Ge = J || M),
          di(e, t),
          (Ge = J),
          (qr = X),
          hi(t),
          s & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = f ? e._visibility & -2 : e._visibility | 1,
              f && (r === null || M || qr || Ge || el(t)),
              r = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (r === null) {
                M = r = e;
                try {
                  if (((h = M.stateNode), f))
                    (v = h.style),
                      typeof v.setProperty == "function"
                        ? v.setProperty("display", "none", "important")
                        : (v.display = "none");
                  else {
                    A = M.stateNode;
                    var W = M.memoizedProps.style,
                      G =
                        W != null && W.hasOwnProperty("display")
                          ? W.display
                          : null;
                    A.style.display =
                      G == null || typeof G == "boolean" ? "" : ("" + G).trim();
                  }
                } catch (V) {
                  ce(M, M.return, V);
                }
              }
            } else if (e.tag === 6) {
              if (r === null) {
                M = e;
                try {
                  M.stateNode.nodeValue = f ? "" : M.memoizedProps;
                } catch (V) {
                  ce(M, M.return, V);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              r === e && (r = null), (e = e.return);
            }
            r === e && (r = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        s & 4 &&
          ((s = t.updateQueue),
          s !== null &&
            ((r = s.retryQueue),
            r !== null && ((s.retryQueue = null), bh(t, r))));
        break;
      case 19:
        di(e, t),
          hi(t),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), bh(t, s)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        di(e, t), hi(t);
    }
  }
  function hi(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var r, s = t.return; s !== null; ) {
          if (ky(s)) {
            r = s;
            break;
          }
          s = s.return;
        }
        if (r == null) throw Error(i(160));
        switch (r.tag) {
          case 27:
            var f = r.stateNode,
              h = yh(t);
            pf(t, h, f);
            break;
          case 5:
            var v = r.stateNode;
            r.flags & 32 && (Ol(v, ""), (r.flags &= -33));
            var A = yh(t);
            pf(t, A, v);
            break;
          case 3:
          case 4:
            var M = r.stateNode.containerInfo,
              X = yh(t);
            _h(t, X, M);
            break;
          default:
            throw Error(i(161));
        }
      } catch (J) {
        ce(t, t.return, J);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function jy(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        jy(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function ga(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Hy(t, e.alternate, e), (e = e.sibling);
  }
  function el(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ha(4, e, e.return), el(e);
          break;
        case 1:
          fr(e, e.return);
          var r = e.stateNode;
          typeof r.componentWillUnmount == "function" && Ny(e, e.return, r),
            el(e);
          break;
        case 27:
          xs(e.stateNode);
        case 26:
        case 5:
          fr(e, e.return), el(e);
          break;
        case 22:
          e.memoizedState === null && el(e);
          break;
        case 30:
          el(e);
          break;
        default:
          el(e);
      }
      t = t.sibling;
    }
  }
  function pa(t, e, r) {
    for (r = r && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var s = e.alternate,
        f = t,
        h = e,
        v = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          pa(f, h, r), ds(4, h);
          break;
        case 1:
          if (
            (pa(f, h, r),
            (s = h),
            (f = s.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (X) {
              ce(s, s.return, X);
            }
          if (((s = h), (f = s.updateQueue), f !== null)) {
            var A = s.stateNode;
            try {
              var M = f.shared.hiddenCallbacks;
              if (M !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < M.length; f++)
                  _m(M[f], A);
            } catch (X) {
              ce(s, s.return, X);
            }
          }
          r && v & 64 && zy(h), hs(h, h.return);
          break;
        case 27:
          Uy(h);
        case 26:
        case 5:
          pa(f, h, r), r && s === null && v & 4 && By(h), hs(h, h.return);
          break;
        case 12:
          pa(f, h, r);
          break;
        case 13:
          pa(f, h, r), r && v & 4 && Xy(f, h);
          break;
        case 22:
          h.memoizedState === null && pa(f, h, r), hs(h, h.return);
          break;
        case 30:
          break;
        default:
          pa(f, h, r);
      }
      e = e.sibling;
    }
  }
  function Sh(t, e) {
    var r = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (r = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== r && (t != null && t.refCount++, r != null && Wu(r));
  }
  function xh(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Wu(t));
  }
  function cr(t, e, r, s) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Vy(t, e, r, s), (e = e.sibling);
  }
  function Vy(t, e, r, s) {
    var f = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        cr(t, e, r, s), f & 2048 && ds(9, e);
        break;
      case 1:
        cr(t, e, r, s);
        break;
      case 3:
        cr(t, e, r, s),
          f & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Wu(t)));
        break;
      case 12:
        if (f & 2048) {
          cr(t, e, r, s), (t = e.stateNode);
          try {
            var h = e.memoizedProps,
              v = h.id,
              A = h.onPostCommit;
            typeof A == "function" &&
              A(
                v,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (M) {
            ce(e, e.return, M);
          }
        } else cr(t, e, r, s);
        break;
      case 13:
        cr(t, e, r, s);
        break;
      case 23:
        break;
      case 22:
        (h = e.stateNode),
          (v = e.alternate),
          e.memoizedState !== null
            ? h._visibility & 2
              ? cr(t, e, r, s)
              : gs(t, e)
            : h._visibility & 2
            ? cr(t, e, r, s)
            : ((h._visibility |= 2),
              Ql(t, e, r, s, (e.subtreeFlags & 10256) !== 0)),
          f & 2048 && Sh(v, e);
        break;
      case 24:
        cr(t, e, r, s), f & 2048 && xh(e.alternate, e);
        break;
      default:
        cr(t, e, r, s);
    }
  }
  function Ql(t, e, r, s, f) {
    for (f = f && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var h = t,
        v = e,
        A = r,
        M = s,
        X = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Ql(h, v, A, M, f), ds(8, v);
          break;
        case 23:
          break;
        case 22:
          var J = v.stateNode;
          v.memoizedState !== null
            ? J._visibility & 2
              ? Ql(h, v, A, M, f)
              : gs(h, v)
            : ((J._visibility |= 2), Ql(h, v, A, M, f)),
            f && X & 2048 && Sh(v.alternate, v);
          break;
        case 24:
          Ql(h, v, A, M, f), f && X & 2048 && xh(v.alternate, v);
          break;
        default:
          Ql(h, v, A, M, f);
      }
      e = e.sibling;
    }
  }
  function gs(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var r = t,
          s = e,
          f = s.flags;
        switch (s.tag) {
          case 22:
            gs(r, s), f & 2048 && Sh(s.alternate, s);
            break;
          case 24:
            gs(r, s), f & 2048 && xh(s.alternate, s);
            break;
          default:
            gs(r, s);
        }
        e = e.sibling;
      }
  }
  var ps = 8192;
  function Zl(t) {
    if (t.subtreeFlags & ps)
      for (t = t.child; t !== null; ) $y(t), (t = t.sibling);
  }
  function $y(t) {
    switch (t.tag) {
      case 26:
        Zl(t),
          t.flags & ps &&
            t.memoizedState !== null &&
            Vx(nr, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Zl(t);
        break;
      case 3:
      case 4:
        var e = nr;
        (nr = Mf(t.stateNode.containerInfo)), Zl(t), (nr = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = ps), (ps = 16777216), Zl(t), (ps = e))
            : Zl(t));
        break;
      default:
        Zl(t);
    }
  }
  function Qy(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function ms(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var r = 0; r < e.length; r++) {
          var s = e[r];
          (fn = s), Ky(s, t);
        }
      Qy(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Zy(t), (t = t.sibling);
  }
  function Zy(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ms(t), t.flags & 2048 && ha(9, t, t.return);
        break;
      case 3:
        ms(t);
        break;
      case 12:
        ms(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), mf(t))
          : ms(t);
        break;
      default:
        ms(t);
    }
  }
  function mf(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var r = 0; r < e.length; r++) {
          var s = e[r];
          (fn = s), Ky(s, t);
        }
      Qy(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          ha(8, e, e.return), mf(e);
          break;
        case 22:
          (r = e.stateNode),
            r._visibility & 2 && ((r._visibility &= -3), mf(e));
          break;
        default:
          mf(e);
      }
      t = t.sibling;
    }
  }
  function Ky(t, e) {
    for (; fn !== null; ) {
      var r = fn;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ha(8, r, e);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var s = r.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          Wu(r.memoizedState.cache);
      }
      if (((s = r.child), s !== null)) (s.return = r), (fn = s);
      else
        t: for (r = t; fn !== null; ) {
          s = fn;
          var f = s.sibling,
            h = s.return;
          if ((Yy(s), s === r)) {
            fn = null;
            break t;
          }
          if (f !== null) {
            (f.return = h), (fn = f);
            break t;
          }
          fn = h;
        }
    }
  }
  var lx = {
      getCacheForType: function (t) {
        var e = Mn(an),
          r = e.data.get(t);
        return r === void 0 && ((r = t()), e.data.set(t, r)), r;
      },
    },
    ux = typeof WeakMap == "function" ? WeakMap : Map,
    ie = 0,
    _e = null,
    Ut = null,
    Xt = 0,
    re = 0,
    gi = null,
    ma = !1,
    Kl = !1,
    Th = !1,
    Gr = 0,
    ke = 0,
    ya = 0,
    nl = 0,
    Ch = 0,
    Gi = 0,
    Pl = 0,
    ys = null,
    Fn = null,
    Ah = !1,
    Eh = 0,
    yf = 1 / 0,
    _f = null,
    _a = null,
    Sn = 0,
    va = null,
    Jl = null,
    Fl = 0,
    Oh = 0,
    Mh = null,
    Py = null,
    _s = 0,
    wh = null;
  function pi() {
    if ((ie & 2) !== 0 && Xt !== 0) return Xt & -Xt;
    if (H.T !== null) {
      var t = Hl;
      return t !== 0 ? t : Uh();
    }
    return xt();
  }
  function Jy() {
    Gi === 0 && (Gi = (Xt & 536870912) === 0 || Qt ? Ot() : 536870912);
    var t = Xi.current;
    return t !== null && (t.flags |= 32), Gi;
  }
  function mi(t, e, r) {
    ((t === _e && (re === 2 || re === 9)) || t.cancelPendingCommit !== null) &&
      (Wl(t, 0), ba(t, Xt, Gi, !1)),
      _n(t, r),
      ((ie & 2) === 0 || t !== _e) &&
        (t === _e &&
          ((ie & 2) === 0 && (nl |= r), ke === 4 && ba(t, Xt, Gi, !1)),
        dr(t));
  }
  function Fy(t, e, r) {
    if ((ie & 6) !== 0) throw Error(i(327));
    var s = (!r && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Zn(t, e),
      f = s ? fx(t, e) : zh(t, e, !0),
      h = s;
    do {
      if (f === 0) {
        Kl && !s && ba(t, e, 0, !1);
        break;
      } else {
        if (((r = t.current.alternate), h && !sx(r))) {
          (f = zh(t, e, !1)), (h = !1);
          continue;
        }
        if (f === 2) {
          if (((h = e), t.errorRecoveryDisabledLanes & h)) var v = 0;
          else
            (v = t.pendingLanes & -536870913),
              (v = v !== 0 ? v : v & 536870912 ? 536870912 : 0);
          if (v !== 0) {
            e = v;
            t: {
              var A = t;
              f = ys;
              var M = A.current.memoizedState.isDehydrated;
              if ((M && (Wl(A, v).flags |= 256), (v = zh(A, v, !1)), v !== 2)) {
                if (Th && !M) {
                  (A.errorRecoveryDisabledLanes |= h), (nl |= h), (f = 4);
                  break t;
                }
                (h = Fn),
                  (Fn = f),
                  h !== null && (Fn === null ? (Fn = h) : Fn.push.apply(Fn, h));
              }
              f = v;
            }
            if (((h = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          Wl(t, 0), ba(t, e, 0, !0);
          break;
        }
        t: {
          switch (((s = t), (h = f), h)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ba(s, e, Gi, !ma);
              break t;
            case 2:
              Fn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((e & 62914560) === e && ((f = Eh + 300 - $()), 10 < f)) {
            if ((ba(s, e, Gi, !ma), tr(s, 0, !0) !== 0)) break t;
            s.timeoutHandle = E1(
              Wy.bind(null, s, r, Fn, _f, Ah, e, Gi, nl, Pl, ma, h, 2, -0, 0),
              f
            );
            break t;
          }
          Wy(s, r, Fn, _f, Ah, e, Gi, nl, Pl, ma, h, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    dr(t);
  }
  function Wy(t, e, r, s, f, h, v, A, M, X, J, W, G, V) {
    if (
      ((t.timeoutHandle = -1),
      (W = e.subtreeFlags),
      (W & 8192 || (W & 16785408) === 16785408) &&
        ((As = { stylesheets: null, count: 0, unsuspend: jx }),
        $y(e),
        (W = $x()),
        W !== null))
    ) {
      (t.cancelPendingCommit = W(
        a1.bind(null, t, e, h, r, s, f, v, A, M, J, 1, G, V)
      )),
        ba(t, h, v, !X);
      return;
    }
    a1(t, e, h, r, s, f, v, A, M);
  }
  function sx(t) {
    for (var e = t; ; ) {
      var r = e.tag;
      if (
        (r === 0 || r === 11 || r === 15) &&
        e.flags & 16384 &&
        ((r = e.updateQueue), r !== null && ((r = r.stores), r !== null))
      )
        for (var s = 0; s < r.length; s++) {
          var f = r[s],
            h = f.getSnapshot;
          f = f.value;
          try {
            if (!fi(h(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((r = e.child), e.subtreeFlags & 16384 && r !== null))
        (r.return = e), (e = r);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function ba(t, e, r, s) {
    (e &= ~Ch),
      (e &= ~nl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      s && (t.warmLanes |= e),
      (s = t.expirationTimes);
    for (var f = e; 0 < f; ) {
      var h = 31 - ee(f),
        v = 1 << h;
      (s[h] = -1), (f &= ~v);
    }
    r !== 0 && ur(t, r, e);
  }
  function vf() {
    return (ie & 6) === 0 ? (vs(0), !1) : !0;
  }
  function Rh() {
    if (Ut !== null) {
      if (re === 0) var t = Ut.return;
      else (t = Ut), (Br = Ja = null), Zd(t), (Vl = null), (os = 0), (t = Ut);
      for (; t !== null; ) Dy(t.alternate, t), (t = t.return);
      Ut = null;
    }
  }
  function Wl(t, e) {
    var r = t.timeoutHandle;
    r !== -1 && ((t.timeoutHandle = -1), Ex(r)),
      (r = t.cancelPendingCommit),
      r !== null && ((t.cancelPendingCommit = null), r()),
      Rh(),
      (_e = t),
      (Ut = r = Dr(t.current, null)),
      (Xt = e),
      (re = 0),
      (gi = null),
      (ma = !1),
      (Kl = Zn(t, e)),
      (Th = !1),
      (Pl = Gi = Ch = nl = ya = ke = 0),
      (Fn = ys = null),
      (Ah = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var s = t.entangledLanes;
    if (s !== 0)
      for (t = t.entanglements, s &= e; 0 < s; ) {
        var f = 31 - ee(s),
          h = 1 << f;
        (e |= t[f]), (s &= ~h);
      }
    return (Gr = e), qo(), r;
  }
  function Iy(t, e) {
    (wt = null),
      (H.H = lf),
      e === ts || e === Po
        ? ((e = mm()), (re = 3))
        : e === hm
        ? ((e = mm()), (re = 4))
        : (re =
            e === yy
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (gi = e),
      Ut === null && ((ke = 1), cf(t, Li(e, t.current)));
  }
  function t1() {
    var t = H.H;
    return (H.H = lf), t === null ? lf : t;
  }
  function e1() {
    var t = H.A;
    return (H.A = lx), t;
  }
  function Dh() {
    (ke = 4),
      ma || ((Xt & 4194048) !== Xt && Xi.current !== null) || (Kl = !0),
      ((ya & 134217727) === 0 && (nl & 134217727) === 0) ||
        _e === null ||
        ba(_e, Xt, Gi, !1);
  }
  function zh(t, e, r) {
    var s = ie;
    ie |= 2;
    var f = t1(),
      h = e1();
    (_e !== t || Xt !== e) && ((_f = null), Wl(t, e)), (e = !1);
    var v = ke;
    t: do
      try {
        if (re !== 0 && Ut !== null) {
          var A = Ut,
            M = gi;
          switch (re) {
            case 8:
              Rh(), (v = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Xi.current === null && (e = !0);
              var X = re;
              if (((re = 0), (gi = null), Il(t, A, M, X), r && Kl)) {
                v = 0;
                break t;
              }
              break;
            default:
              (X = re), (re = 0), (gi = null), Il(t, A, M, X);
          }
        }
        ox(), (v = ke);
        break;
      } catch (J) {
        Iy(t, J);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Br = Ja = null),
      (ie = s),
      (H.H = f),
      (H.A = h),
      Ut === null && ((_e = null), (Xt = 0), qo()),
      v
    );
  }
  function ox() {
    for (; Ut !== null; ) n1(Ut);
  }
  function fx(t, e) {
    var r = ie;
    ie |= 2;
    var s = t1(),
      f = e1();
    _e !== t || Xt !== e
      ? ((_f = null), (yf = $() + 500), Wl(t, e))
      : (Kl = Zn(t, e));
    t: do
      try {
        if (re !== 0 && Ut !== null) {
          e = Ut;
          var h = gi;
          e: switch (re) {
            case 1:
              (re = 0), (gi = null), Il(t, e, h, 1);
              break;
            case 2:
            case 9:
              if (gm(h)) {
                (re = 0), (gi = null), i1(e);
                break;
              }
              (e = function () {
                (re !== 2 && re !== 9) || _e !== t || (re = 7), dr(t);
              }),
                h.then(e, e);
              break t;
            case 3:
              re = 7;
              break t;
            case 4:
              re = 5;
              break t;
            case 7:
              gm(h)
                ? ((re = 0), (gi = null), i1(e))
                : ((re = 0), (gi = null), Il(t, e, h, 7));
              break;
            case 5:
              var v = null;
              switch (Ut.tag) {
                case 26:
                  v = Ut.memoizedState;
                case 5:
                case 27:
                  var A = Ut;
                  if (!v || H1(v)) {
                    (re = 0), (gi = null);
                    var M = A.sibling;
                    if (M !== null) Ut = M;
                    else {
                      var X = A.return;
                      X !== null ? ((Ut = X), bf(X)) : (Ut = null);
                    }
                    break e;
                  }
              }
              (re = 0), (gi = null), Il(t, e, h, 5);
              break;
            case 6:
              (re = 0), (gi = null), Il(t, e, h, 6);
              break;
            case 8:
              Rh(), (ke = 6);
              break t;
            default:
              throw Error(i(462));
          }
        }
        cx();
        break;
      } catch (J) {
        Iy(t, J);
      }
    while (!0);
    return (
      (Br = Ja = null),
      (H.H = s),
      (H.A = f),
      (ie = r),
      Ut !== null ? 0 : ((_e = null), (Xt = 0), qo(), ke)
    );
  }
  function cx() {
    for (; Ut !== null && !en(); ) n1(Ut);
  }
  function n1(t) {
    var e = wy(t.alternate, t, Gr);
    (t.memoizedProps = t.pendingProps), e === null ? bf(t) : (Ut = e);
  }
  function i1(t) {
    var e = t,
      r = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Ty(r, e, e.pendingProps, e.type, void 0, Xt);
        break;
      case 11:
        e = Ty(r, e, e.pendingProps, e.type.render, e.ref, Xt);
        break;
      case 5:
        Zd(e);
      default:
        Dy(r, e), (e = Ut = rm(e, Gr)), (e = wy(r, e, Gr));
    }
    (t.memoizedProps = t.pendingProps), e === null ? bf(t) : (Ut = e);
  }
  function Il(t, e, r, s) {
    (Br = Ja = null), Zd(e), (Vl = null), (os = 0);
    var f = e.return;
    try {
      if (tx(t, f, e, r, Xt)) {
        (ke = 1), cf(t, Li(r, t.current)), (Ut = null);
        return;
      }
    } catch (h) {
      if (f !== null) throw ((Ut = f), h);
      (ke = 1), cf(t, Li(r, t.current)), (Ut = null);
      return;
    }
    e.flags & 32768
      ? (Qt || s === 1
          ? (t = !0)
          : Kl || (Xt & 536870912) !== 0
          ? (t = !1)
          : ((ma = t = !0),
            (s === 2 || s === 9 || s === 3 || s === 6) &&
              ((s = Xi.current),
              s !== null && s.tag === 13 && (s.flags |= 16384))),
        r1(e, t))
      : bf(e);
  }
  function bf(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        r1(e, ma);
        return;
      }
      t = e.return;
      var r = nx(e.alternate, e, Gr);
      if (r !== null) {
        Ut = r;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Ut = e;
        return;
      }
      Ut = e = t;
    } while (e !== null);
    ke === 0 && (ke = 5);
  }
  function r1(t, e) {
    do {
      var r = ix(t.alternate, t);
      if (r !== null) {
        (r.flags &= 32767), (Ut = r);
        return;
      }
      if (
        ((r = t.return),
        r !== null &&
          ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        Ut = t;
        return;
      }
      Ut = t = r;
    } while (t !== null);
    (ke = 6), (Ut = null);
  }
  function a1(t, e, r, s, f, h, v, A, M) {
    t.cancelPendingCommit = null;
    do Sf();
    while (Sn !== 0);
    if ((ie & 6) !== 0) throw Error(i(327));
    if (e !== null) {
      if (e === t.current) throw Error(i(177));
      if (
        ((h = e.lanes | e.childLanes),
        (h |= xd),
        li(t, r, h, v, A, M),
        t === _e && ((Ut = _e = null), (Xt = 0)),
        (Jl = e),
        (va = t),
        (Fl = r),
        (Oh = h),
        (Mh = f),
        (Py = s),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            px(Gt, function () {
              return f1(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (s = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || s)
      ) {
        (s = H.T), (H.T = null), (f = K.p), (K.p = 2), (v = ie), (ie |= 4);
        try {
          rx(t, e, r);
        } finally {
          (ie = v), (K.p = f), (H.T = s);
        }
      }
      (Sn = 1), l1(), u1(), s1();
    }
  }
  function l1() {
    if (Sn === 1) {
      Sn = 0;
      var t = va,
        e = Jl,
        r = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || r) {
        (r = H.T), (H.T = null);
        var s = K.p;
        K.p = 2;
        var f = ie;
        ie |= 4;
        try {
          Gy(e, t);
          var h = Vh,
            v = Kp(t.containerInfo),
            A = h.focusedElem,
            M = h.selectionRange;
          if (
            v !== A &&
            A &&
            A.ownerDocument &&
            Zp(A.ownerDocument.documentElement, A)
          ) {
            if (M !== null && yd(A)) {
              var X = M.start,
                J = M.end;
              if ((J === void 0 && (J = X), "selectionStart" in A))
                (A.selectionStart = X),
                  (A.selectionEnd = Math.min(J, A.value.length));
              else {
                var W = A.ownerDocument || document,
                  G = (W && W.defaultView) || window;
                if (G.getSelection) {
                  var V = G.getSelection(),
                    vt = A.textContent.length,
                    yt = Math.min(M.start, vt),
                    oe = M.end === void 0 ? yt : Math.min(M.end, vt);
                  !V.extend && yt > oe && ((v = oe), (oe = yt), (yt = v));
                  var L = Qp(A, yt),
                    B = Qp(A, oe);
                  if (
                    L &&
                    B &&
                    (V.rangeCount !== 1 ||
                      V.anchorNode !== L.node ||
                      V.anchorOffset !== L.offset ||
                      V.focusNode !== B.node ||
                      V.focusOffset !== B.offset)
                  ) {
                    var q = W.createRange();
                    q.setStart(L.node, L.offset),
                      V.removeAllRanges(),
                      yt > oe
                        ? (V.addRange(q), V.extend(B.node, B.offset))
                        : (q.setEnd(B.node, B.offset), V.addRange(q));
                  }
                }
              }
            }
            for (W = [], V = A; (V = V.parentNode); )
              V.nodeType === 1 &&
                W.push({ element: V, left: V.scrollLeft, top: V.scrollTop });
            for (
              typeof A.focus == "function" && A.focus(), A = 0;
              A < W.length;
              A++
            ) {
              var F = W[A];
              (F.element.scrollLeft = F.left), (F.element.scrollTop = F.top);
            }
          }
          (Nf = !!jh), (Vh = jh = null);
        } finally {
          (ie = f), (K.p = s), (H.T = r);
        }
      }
      (t.current = e), (Sn = 2);
    }
  }
  function u1() {
    if (Sn === 2) {
      Sn = 0;
      var t = va,
        e = Jl,
        r = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || r) {
        (r = H.T), (H.T = null);
        var s = K.p;
        K.p = 2;
        var f = ie;
        ie |= 4;
        try {
          Hy(t, e.alternate, e);
        } finally {
          (ie = f), (K.p = s), (H.T = r);
        }
      }
      Sn = 3;
    }
  }
  function s1() {
    if (Sn === 4 || Sn === 3) {
      (Sn = 0), pn();
      var t = va,
        e = Jl,
        r = Fl,
        s = Py;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Sn = 5)
        : ((Sn = 0), (Jl = va = null), o1(t, t.pendingLanes));
      var f = t.pendingLanes;
      if (
        (f === 0 && (_a = null),
        Or(r),
        (e = e.stateNode),
        Dt && typeof Dt.onCommitFiberRoot == "function")
      )
        try {
          Dt.onCommitFiberRoot(yn, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (s !== null) {
        (e = H.T), (f = K.p), (K.p = 2), (H.T = null);
        try {
          for (var h = t.onRecoverableError, v = 0; v < s.length; v++) {
            var A = s[v];
            h(A.value, { componentStack: A.stack });
          }
        } finally {
          (H.T = e), (K.p = f);
        }
      }
      (Fl & 3) !== 0 && Sf(),
        dr(t),
        (f = t.pendingLanes),
        (r & 4194090) !== 0 && (f & 42) !== 0
          ? t === wh
            ? _s++
            : ((_s = 0), (wh = t))
          : (_s = 0),
        vs(0);
    }
  }
  function o1(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Wu(e)));
  }
  function Sf(t) {
    return l1(), u1(), s1(), f1();
  }
  function f1() {
    if (Sn !== 5) return !1;
    var t = va,
      e = Oh;
    Oh = 0;
    var r = Or(Fl),
      s = H.T,
      f = K.p;
    try {
      (K.p = 32 > r ? 32 : r), (H.T = null), (r = Mh), (Mh = null);
      var h = va,
        v = Fl;
      if (((Sn = 0), (Jl = va = null), (Fl = 0), (ie & 6) !== 0))
        throw Error(i(331));
      var A = ie;
      if (
        ((ie |= 4),
        Zy(h.current),
        Vy(h, h.current, v, r),
        (ie = A),
        vs(0, !1),
        Dt && typeof Dt.onPostCommitFiberRoot == "function")
      )
        try {
          Dt.onPostCommitFiberRoot(yn, h);
        } catch {}
      return !0;
    } finally {
      (K.p = f), (H.T = s), o1(t, e);
    }
  }
  function c1(t, e, r) {
    (e = Li(r, e)),
      (e = uh(t.stateNode, e, 2)),
      (t = oa(t, e, 2)),
      t !== null && (_n(t, 2), dr(t));
  }
  function ce(t, e, r) {
    if (t.tag === 3) c1(t, t, r);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          c1(e, t, r);
          break;
        } else if (e.tag === 1) {
          var s = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              (_a === null || !_a.has(s)))
          ) {
            (t = Li(r, t)),
              (r = py(2)),
              (s = oa(e, r, 2)),
              s !== null && (my(r, s, e, t), _n(s, 2), dr(s));
            break;
          }
        }
        e = e.return;
      }
  }
  function Nh(t, e, r) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new ux();
      var f = new Set();
      s.set(e, f);
    } else (f = s.get(e)), f === void 0 && ((f = new Set()), s.set(e, f));
    f.has(r) ||
      ((Th = !0), f.add(r), (t = dx.bind(null, t, e, r)), e.then(t, t));
  }
  function dx(t, e, r) {
    var s = t.pingCache;
    s !== null && s.delete(e),
      (t.pingedLanes |= t.suspendedLanes & r),
      (t.warmLanes &= ~r),
      _e === t &&
        (Xt & r) === r &&
        (ke === 4 || (ke === 3 && (Xt & 62914560) === Xt && 300 > $() - Eh)
          ? (ie & 2) === 0 && Wl(t, 0)
          : (Ch |= r),
        Pl === Xt && (Pl = 0)),
      dr(t);
  }
  function d1(t, e) {
    e === 0 && (e = lr()), (t = Bl(t, e)), t !== null && (_n(t, e), dr(t));
  }
  function hx(t) {
    var e = t.memoizedState,
      r = 0;
    e !== null && (r = e.retryLane), d1(t, r);
  }
  function gx(t, e) {
    var r = 0;
    switch (t.tag) {
      case 13:
        var s = t.stateNode,
          f = t.memoizedState;
        f !== null && (r = f.retryLane);
        break;
      case 19:
        s = t.stateNode;
        break;
      case 22:
        s = t.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    s !== null && s.delete(e), d1(t, r);
  }
  function px(t, e) {
    return Et(t, e);
  }
  var xf = null,
    tu = null,
    Bh = !1,
    Tf = !1,
    kh = !1,
    il = 0;
  function dr(t) {
    t !== tu &&
      t.next === null &&
      (tu === null ? (xf = tu = t) : (tu = tu.next = t)),
      (Tf = !0),
      Bh || ((Bh = !0), yx());
  }
  function vs(t, e) {
    if (!kh && Tf) {
      kh = !0;
      do
        for (var r = !1, s = xf; s !== null; ) {
          if (t !== 0) {
            var f = s.pendingLanes;
            if (f === 0) var h = 0;
            else {
              var v = s.suspendedLanes,
                A = s.pingedLanes;
              (h = (1 << (31 - ee(42 | t) + 1)) - 1),
                (h &= f & ~(v & ~A)),
                (h = h & 201326741 ? (h & 201326741) | 1 : h ? h | 2 : 0);
            }
            h !== 0 && ((r = !0), m1(s, h));
          } else
            (h = Xt),
              (h = tr(
                s,
                s === _e ? h : 0,
                s.cancelPendingCommit !== null || s.timeoutHandle !== -1
              )),
              (h & 3) === 0 || Zn(s, h) || ((r = !0), m1(s, h));
          s = s.next;
        }
      while (r);
      kh = !1;
    }
  }
  function mx() {
    h1();
  }
  function h1() {
    Tf = Bh = !1;
    var t = 0;
    il !== 0 && (Ax() && (t = il), (il = 0));
    for (var e = $(), r = null, s = xf; s !== null; ) {
      var f = s.next,
        h = g1(s, e);
      h === 0
        ? ((s.next = null),
          r === null ? (xf = f) : (r.next = f),
          f === null && (tu = r))
        : ((r = s), (t !== 0 || (h & 3) !== 0) && (Tf = !0)),
        (s = f);
    }
    vs(t);
  }
  function g1(t, e) {
    for (
      var r = t.suspendedLanes,
        s = t.pingedLanes,
        f = t.expirationTimes,
        h = t.pendingLanes & -62914561;
      0 < h;

    ) {
      var v = 31 - ee(h),
        A = 1 << v,
        M = f[v];
      M === -1
        ? ((A & r) === 0 || (A & s) !== 0) && (f[v] = Ar(A, e))
        : M <= e && (t.expiredLanes |= A),
        (h &= ~A);
    }
    if (
      ((e = _e),
      (r = Xt),
      (r = tr(
        t,
        t === e ? r : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (s = t.callbackNode),
      r === 0 ||
        (t === e && (re === 2 || re === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        s !== null && s !== null && le(s),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((r & 3) === 0 || Zn(t, r)) {
      if (((e = r & -r), e === t.callbackPriority)) return e;
      switch ((s !== null && le(s), Or(r))) {
        case 2:
        case 8:
          r = En;
          break;
        case 32:
          r = Gt;
          break;
        case 268435456:
          r = ai;
          break;
        default:
          r = Gt;
      }
      return (
        (s = p1.bind(null, t)),
        (r = Et(r, s)),
        (t.callbackPriority = e),
        (t.callbackNode = r),
        e
      );
    }
    return (
      s !== null && s !== null && le(s),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function p1(t, e) {
    if (Sn !== 0 && Sn !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var r = t.callbackNode;
    if (Sf() && t.callbackNode !== r) return null;
    var s = Xt;
    return (
      (s = tr(
        t,
        t === _e ? s : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      s === 0
        ? null
        : (Fy(t, s, e),
          g1(t, $()),
          t.callbackNode != null && t.callbackNode === r
            ? p1.bind(null, t)
            : null)
    );
  }
  function m1(t, e) {
    if (Sf()) return null;
    Fy(t, e, !0);
  }
  function yx() {
    Ox(function () {
      (ie & 6) !== 0 ? Et(Se, mx) : h1();
    });
  }
  function Uh() {
    return il === 0 && (il = Ot()), il;
  }
  function y1(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : No("" + t);
  }
  function _1(t, e) {
    var r = e.ownerDocument.createElement("input");
    return (
      (r.name = e.name),
      (r.value = e.value),
      t.id && r.setAttribute("form", t.id),
      e.parentNode.insertBefore(r, e),
      (t = new FormData(t)),
      r.parentNode.removeChild(r),
      t
    );
  }
  function _x(t, e, r, s, f) {
    if (e === "submit" && r && r.stateNode === f) {
      var h = y1((f[gt] || null).action),
        v = s.submitter;
      v &&
        ((e = (e = v[gt] || null)
          ? y1(e.formAction)
          : v.getAttribute("formAction")),
        e !== null && ((h = e), (v = null)));
      var A = new Lo("action", "action", null, s, f);
      t.push({
        event: A,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (s.defaultPrevented) {
                if (il !== 0) {
                  var M = v ? _1(f, v) : new FormData(f);
                  nh(
                    r,
                    { pending: !0, data: M, method: f.method, action: h },
                    null,
                    M
                  );
                }
              } else
                typeof h == "function" &&
                  (A.preventDefault(),
                  (M = v ? _1(f, v) : new FormData(f)),
                  nh(
                    r,
                    { pending: !0, data: M, method: f.method, action: h },
                    h,
                    M
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var Lh = 0; Lh < Sd.length; Lh++) {
    var Hh = Sd[Lh],
      vx = Hh.toLowerCase(),
      bx = Hh[0].toUpperCase() + Hh.slice(1);
    er(vx, "on" + bx);
  }
  er(Fp, "onAnimationEnd"),
    er(Wp, "onAnimationIteration"),
    er(Ip, "onAnimationStart"),
    er("dblclick", "onDoubleClick"),
    er("focusin", "onFocus"),
    er("focusout", "onBlur"),
    er(L2, "onTransitionRun"),
    er(H2, "onTransitionStart"),
    er(Y2, "onTransitionCancel"),
    er(tm, "onTransitionEnd"),
    Me("onMouseEnter", ["mouseout", "mouseover"]),
    Me("onMouseLeave", ["mouseout", "mouseover"]),
    Me("onPointerEnter", ["pointerout", "pointerover"]),
    Me("onPointerLeave", ["pointerout", "pointerover"]),
    be(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    be(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    be("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    be(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    be(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    be(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var bs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Sx = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(bs)
    );
  function v1(t, e) {
    e = (e & 4) !== 0;
    for (var r = 0; r < t.length; r++) {
      var s = t[r],
        f = s.event;
      s = s.listeners;
      t: {
        var h = void 0;
        if (e)
          for (var v = s.length - 1; 0 <= v; v--) {
            var A = s[v],
              M = A.instance,
              X = A.currentTarget;
            if (((A = A.listener), M !== h && f.isPropagationStopped()))
              break t;
            (h = A), (f.currentTarget = X);
            try {
              h(f);
            } catch (J) {
              ff(J);
            }
            (f.currentTarget = null), (h = M);
          }
        else
          for (v = 0; v < s.length; v++) {
            if (
              ((A = s[v]),
              (M = A.instance),
              (X = A.currentTarget),
              (A = A.listener),
              M !== h && f.isPropagationStopped())
            )
              break t;
            (h = A), (f.currentTarget = X);
            try {
              h(f);
            } catch (J) {
              ff(J);
            }
            (f.currentTarget = null), (h = M);
          }
      }
    }
  }
  function Lt(t, e) {
    var r = e[bt];
    r === void 0 && (r = e[bt] = new Set());
    var s = t + "__bubble";
    r.has(s) || (b1(e, t, 2, !1), r.add(s));
  }
  function Yh(t, e, r) {
    var s = 0;
    e && (s |= 4), b1(r, t, s, e);
  }
  var Cf = "_reactListening" + Math.random().toString(36).slice(2);
  function qh(t) {
    if (!t[Cf]) {
      (t[Cf] = !0),
        si.forEach(function (r) {
          r !== "selectionchange" && (Sx.has(r) || Yh(r, !1, t), Yh(r, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Cf] || ((e[Cf] = !0), Yh("selectionchange", !1, e));
    }
  }
  function b1(t, e, r, s) {
    switch (V1(e)) {
      case 2:
        var f = Kx;
        break;
      case 8:
        f = Px;
        break;
      default:
        f = t0;
    }
    (r = f.bind(null, e, r, t)),
      (f = void 0),
      !sd ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (f = !0),
      s
        ? f !== void 0
          ? t.addEventListener(e, r, { capture: !0, passive: f })
          : t.addEventListener(e, r, !0)
        : f !== void 0
        ? t.addEventListener(e, r, { passive: f })
        : t.addEventListener(e, r, !1);
  }
  function Xh(t, e, r, s, f) {
    var h = s;
    if ((e & 1) === 0 && (e & 2) === 0 && s !== null)
      t: for (;;) {
        if (s === null) return;
        var v = s.tag;
        if (v === 3 || v === 4) {
          var A = s.stateNode.containerInfo;
          if (A === f) break;
          if (v === 4)
            for (v = s.return; v !== null; ) {
              var M = v.tag;
              if ((M === 3 || M === 4) && v.stateNode.containerInfo === f)
                return;
              v = v.return;
            }
          for (; A !== null; ) {
            if (((v = $t(A)), v === null)) return;
            if (((M = v.tag), M === 5 || M === 6 || M === 26 || M === 27)) {
              s = h = v;
              continue t;
            }
            A = A.parentNode;
          }
        }
        s = s.return;
      }
    Op(function () {
      var X = h,
        J = ld(r),
        W = [];
      t: {
        var G = em.get(t);
        if (G !== void 0) {
          var V = Lo,
            vt = t;
          switch (t) {
            case "keypress":
              if (ko(r) === 0) break t;
            case "keydown":
            case "keyup":
              V = p2;
              break;
            case "focusin":
              (vt = "focus"), (V = dd);
              break;
            case "focusout":
              (vt = "blur"), (V = dd);
              break;
            case "beforeblur":
            case "afterblur":
              V = dd;
              break;
            case "click":
              if (r.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = Rp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = i2;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = _2;
              break;
            case Fp:
            case Wp:
            case Ip:
              V = l2;
              break;
            case tm:
              V = b2;
              break;
            case "scroll":
            case "scrollend":
              V = e2;
              break;
            case "wheel":
              V = x2;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = s2;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = zp;
              break;
            case "toggle":
            case "beforetoggle":
              V = C2;
          }
          var yt = (e & 4) !== 0,
            oe = !yt && (t === "scroll" || t === "scrollend"),
            L = yt ? (G !== null ? G + "Capture" : null) : G;
          yt = [];
          for (var B = X, q; B !== null; ) {
            var F = B;
            if (
              ((q = F.stateNode),
              (F = F.tag),
              (F !== 5 && F !== 26 && F !== 27) ||
                q === null ||
                L === null ||
                ((F = Yu(B, L)), F != null && yt.push(Ss(B, F, q))),
              oe)
            )
              break;
            B = B.return;
          }
          0 < yt.length &&
            ((G = new V(G, vt, null, r, J)),
            W.push({ event: G, listeners: yt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((G = t === "mouseover" || t === "pointerover"),
            (V = t === "mouseout" || t === "pointerout"),
            G &&
              r !== ad &&
              (vt = r.relatedTarget || r.fromElement) &&
              ($t(vt) || vt[dt]))
          )
            break t;
          if (
            (V || G) &&
            ((G =
              J.window === J
                ? J
                : (G = J.ownerDocument)
                ? G.defaultView || G.parentWindow
                : window),
            V
              ? ((vt = r.relatedTarget || r.toElement),
                (V = X),
                (vt = vt ? $t(vt) : null),
                vt !== null &&
                  ((oe = o(vt)),
                  (yt = vt.tag),
                  vt !== oe || (yt !== 5 && yt !== 27 && yt !== 6)) &&
                  (vt = null))
              : ((V = null), (vt = X)),
            V !== vt)
          ) {
            if (
              ((yt = Rp),
              (F = "onMouseLeave"),
              (L = "onMouseEnter"),
              (B = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((yt = zp),
                (F = "onPointerLeave"),
                (L = "onPointerEnter"),
                (B = "pointer")),
              (oe = V == null ? G : vn(V)),
              (q = vt == null ? G : vn(vt)),
              (G = new yt(F, B + "leave", V, r, J)),
              (G.target = oe),
              (G.relatedTarget = q),
              (F = null),
              $t(J) === X &&
                ((yt = new yt(L, B + "enter", vt, r, J)),
                (yt.target = q),
                (yt.relatedTarget = oe),
                (F = yt)),
              (oe = F),
              V && vt)
            )
              e: {
                for (yt = V, L = vt, B = 0, q = yt; q; q = eu(q)) B++;
                for (q = 0, F = L; F; F = eu(F)) q++;
                for (; 0 < B - q; ) (yt = eu(yt)), B--;
                for (; 0 < q - B; ) (L = eu(L)), q--;
                for (; B--; ) {
                  if (yt === L || (L !== null && yt === L.alternate)) break e;
                  (yt = eu(yt)), (L = eu(L));
                }
                yt = null;
              }
            else yt = null;
            V !== null && S1(W, G, V, yt, !1),
              vt !== null && oe !== null && S1(W, oe, vt, yt, !0);
          }
        }
        t: {
          if (
            ((G = X ? vn(X) : window),
            (V = G.nodeName && G.nodeName.toLowerCase()),
            V === "select" || (V === "input" && G.type === "file"))
          )
            var st = qp;
          else if (Hp(G))
            if (Xp) st = B2;
            else {
              st = z2;
              var zt = D2;
            }
          else
            (V = G.nodeName),
              !V ||
              V.toLowerCase() !== "input" ||
              (G.type !== "checkbox" && G.type !== "radio")
                ? X && rd(X.elementType) && (st = qp)
                : (st = N2);
          if (st && (st = st(t, X))) {
            Yp(W, st, r, J);
            break t;
          }
          zt && zt(t, G, X),
            t === "focusout" &&
              X &&
              G.type === "number" &&
              X.memoizedProps.value != null &&
              id(G, "number", G.value);
        }
        switch (((zt = X ? vn(X) : window), t)) {
          case "focusin":
            (Hp(zt) || zt.contentEditable === "true") &&
              ((Dl = zt), (_d = X), (Zu = null));
            break;
          case "focusout":
            Zu = _d = Dl = null;
            break;
          case "mousedown":
            vd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (vd = !1), Pp(W, r, J);
            break;
          case "selectionchange":
            if (U2) break;
          case "keydown":
          case "keyup":
            Pp(W, r, J);
        }
        var pt;
        if (gd)
          t: {
            switch (t) {
              case "compositionstart":
                var _t = "onCompositionStart";
                break t;
              case "compositionend":
                _t = "onCompositionEnd";
                break t;
              case "compositionupdate":
                _t = "onCompositionUpdate";
                break t;
            }
            _t = void 0;
          }
        else
          Rl
            ? Up(t, r) && (_t = "onCompositionEnd")
            : t === "keydown" &&
              r.keyCode === 229 &&
              (_t = "onCompositionStart");
        _t &&
          (Np &&
            r.locale !== "ko" &&
            (Rl || _t !== "onCompositionStart"
              ? _t === "onCompositionEnd" && Rl && (pt = Mp())
              : ((aa = J),
                (od = "value" in aa ? aa.value : aa.textContent),
                (Rl = !0))),
          (zt = Af(X, _t)),
          0 < zt.length &&
            ((_t = new Dp(_t, t, null, r, J)),
            W.push({ event: _t, listeners: zt }),
            pt
              ? (_t.data = pt)
              : ((pt = Lp(r)), pt !== null && (_t.data = pt)))),
          (pt = E2 ? O2(t, r) : M2(t, r)) &&
            ((_t = Af(X, "onBeforeInput")),
            0 < _t.length &&
              ((zt = new Dp("onBeforeInput", "beforeinput", null, r, J)),
              W.push({ event: zt, listeners: _t }),
              (zt.data = pt))),
          _x(W, t, X, r, J);
      }
      v1(W, e);
    });
  }
  function Ss(t, e, r) {
    return { instance: t, listener: e, currentTarget: r };
  }
  function Af(t, e) {
    for (var r = e + "Capture", s = []; t !== null; ) {
      var f = t,
        h = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          h === null ||
          ((f = Yu(t, r)),
          f != null && s.unshift(Ss(t, f, h)),
          (f = Yu(t, e)),
          f != null && s.push(Ss(t, f, h))),
        t.tag === 3)
      )
        return s;
      t = t.return;
    }
    return [];
  }
  function eu(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function S1(t, e, r, s, f) {
    for (var h = e._reactName, v = []; r !== null && r !== s; ) {
      var A = r,
        M = A.alternate,
        X = A.stateNode;
      if (((A = A.tag), M !== null && M === s)) break;
      (A !== 5 && A !== 26 && A !== 27) ||
        X === null ||
        ((M = X),
        f
          ? ((X = Yu(r, h)), X != null && v.unshift(Ss(r, X, M)))
          : f || ((X = Yu(r, h)), X != null && v.push(Ss(r, X, M)))),
        (r = r.return);
    }
    v.length !== 0 && t.push({ event: e, listeners: v });
  }
  var xx = /\r\n?/g,
    Tx = /\u0000|\uFFFD/g;
  function x1(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        xx,
        `
`
      )
      .replace(Tx, "");
  }
  function T1(t, e) {
    return (e = x1(e)), x1(t) === e;
  }
  function Ef() {}
  function se(t, e, r, s, f, h) {
    switch (r) {
      case "children":
        typeof s == "string"
          ? e === "body" || (e === "textarea" && s === "") || Ol(t, s)
          : (typeof s == "number" || typeof s == "bigint") &&
            e !== "body" &&
            Ol(t, "" + s);
        break;
      case "className":
        ia(t, "class", s);
        break;
      case "tabIndex":
        ia(t, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ia(t, r, s);
        break;
      case "style":
        Ap(t, s, h);
        break;
      case "data":
        if (e !== "object") {
          ia(t, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (e !== "a" || r !== "href")) {
          t.removeAttribute(r);
          break;
        }
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "symbol" ||
          typeof s == "boolean"
        ) {
          t.removeAttribute(r);
          break;
        }
        (s = No("" + s)), t.setAttribute(r, s);
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
          t.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof h == "function" &&
            (r === "formAction"
              ? (e !== "input" && se(t, e, "name", f.name, f, null),
                se(t, e, "formEncType", f.formEncType, f, null),
                se(t, e, "formMethod", f.formMethod, f, null),
                se(t, e, "formTarget", f.formTarget, f, null))
              : (se(t, e, "encType", f.encType, f, null),
                se(t, e, "method", f.method, f, null),
                se(t, e, "target", f.target, f, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          t.removeAttribute(r);
          break;
        }
        (s = No("" + s)), t.setAttribute(r, s);
        break;
      case "onClick":
        s != null && (t.onclick = Ef);
        break;
      case "onScroll":
        s != null && Lt("scroll", t);
        break;
      case "onScrollEnd":
        s != null && Lt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(i(61));
          if (((r = s.__html), r != null)) {
            if (f.children != null) throw Error(i(60));
            t.innerHTML = r;
          }
        }
        break;
      case "multiple":
        t.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        t.muted = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "boolean" ||
          typeof s == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (r = No("" + s)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        s != null && typeof s != "function" && typeof s != "symbol"
          ? t.setAttribute(r, "" + s)
          : t.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        s && typeof s != "function" && typeof s != "symbol"
          ? t.setAttribute(r, "")
          : t.removeAttribute(r);
        break;
      case "capture":
      case "download":
        s === !0
          ? t.setAttribute(r, "")
          : s !== !1 &&
            s != null &&
            typeof s != "function" &&
            typeof s != "symbol"
          ? t.setAttribute(r, s)
          : t.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        !isNaN(s) &&
        1 <= s
          ? t.setAttribute(r, s)
          : t.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s)
          ? t.removeAttribute(r)
          : t.setAttribute(r, s);
        break;
      case "popover":
        Lt("beforetoggle", t), Lt("toggle", t), Hn(t, "popover", s);
        break;
      case "xlinkActuate":
        zi(t, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
        break;
      case "xlinkArcrole":
        zi(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
        break;
      case "xlinkRole":
        zi(t, "http://www.w3.org/1999/xlink", "xlink:role", s);
        break;
      case "xlinkShow":
        zi(t, "http://www.w3.org/1999/xlink", "xlink:show", s);
        break;
      case "xlinkTitle":
        zi(t, "http://www.w3.org/1999/xlink", "xlink:title", s);
        break;
      case "xlinkType":
        zi(t, "http://www.w3.org/1999/xlink", "xlink:type", s);
        break;
      case "xmlBase":
        zi(t, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
        break;
      case "xmlLang":
        zi(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
        break;
      case "xmlSpace":
        zi(t, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
        break;
      case "is":
        Hn(t, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) ||
          (r[0] !== "o" && r[0] !== "O") ||
          (r[1] !== "n" && r[1] !== "N")) &&
          ((r = IS.get(r) || r), Hn(t, r, s));
    }
  }
  function Gh(t, e, r, s, f, h) {
    switch (r) {
      case "style":
        Ap(t, s, h);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(i(61));
          if (((r = s.__html), r != null)) {
            if (f.children != null) throw Error(i(60));
            t.innerHTML = r;
          }
        }
        break;
      case "children":
        typeof s == "string"
          ? Ol(t, s)
          : (typeof s == "number" || typeof s == "bigint") && Ol(t, "" + s);
        break;
      case "onScroll":
        s != null && Lt("scroll", t);
        break;
      case "onScrollEnd":
        s != null && Lt("scrollend", t);
        break;
      case "onClick":
        s != null && (t.onclick = Ef);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ke.hasOwnProperty(r))
          t: {
            if (
              r[0] === "o" &&
              r[1] === "n" &&
              ((f = r.endsWith("Capture")),
              (e = r.slice(2, f ? r.length - 7 : void 0)),
              (h = t[gt] || null),
              (h = h != null ? h[r] : null),
              typeof h == "function" && t.removeEventListener(e, h, f),
              typeof s == "function")
            ) {
              typeof h != "function" &&
                h !== null &&
                (r in t
                  ? (t[r] = null)
                  : t.hasAttribute(r) && t.removeAttribute(r)),
                t.addEventListener(e, s, f);
              break t;
            }
            r in t
              ? (t[r] = s)
              : s === !0
              ? t.setAttribute(r, "")
              : Hn(t, r, s);
          }
    }
  }
  function xn(t, e, r) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Lt("error", t), Lt("load", t);
        var s = !1,
          f = !1,
          h;
        for (h in r)
          if (r.hasOwnProperty(h)) {
            var v = r[h];
            if (v != null)
              switch (h) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, e));
                default:
                  se(t, e, h, v, r, null);
              }
          }
        f && se(t, e, "srcSet", r.srcSet, r, null),
          s && se(t, e, "src", r.src, r, null);
        return;
      case "input":
        Lt("invalid", t);
        var A = (h = v = f = null),
          M = null,
          X = null;
        for (s in r)
          if (r.hasOwnProperty(s)) {
            var J = r[s];
            if (J != null)
              switch (s) {
                case "name":
                  f = J;
                  break;
                case "type":
                  v = J;
                  break;
                case "checked":
                  M = J;
                  break;
                case "defaultChecked":
                  X = J;
                  break;
                case "value":
                  h = J;
                  break;
                case "defaultValue":
                  A = J;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (J != null) throw Error(i(137, e));
                  break;
                default:
                  se(t, e, s, J, r, null);
              }
          }
        Sp(t, h, A, M, X, v, f, !1), Do(t);
        return;
      case "select":
        Lt("invalid", t), (s = v = h = null);
        for (f in r)
          if (r.hasOwnProperty(f) && ((A = r[f]), A != null))
            switch (f) {
              case "value":
                h = A;
                break;
              case "defaultValue":
                v = A;
                break;
              case "multiple":
                s = A;
              default:
                se(t, e, f, A, r, null);
            }
        (e = h),
          (r = v),
          (t.multiple = !!s),
          e != null ? El(t, !!s, e, !1) : r != null && El(t, !!s, r, !0);
        return;
      case "textarea":
        Lt("invalid", t), (h = f = s = null);
        for (v in r)
          if (r.hasOwnProperty(v) && ((A = r[v]), A != null))
            switch (v) {
              case "value":
                s = A;
                break;
              case "defaultValue":
                f = A;
                break;
              case "children":
                h = A;
                break;
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(i(91));
                break;
              default:
                se(t, e, v, A, r, null);
            }
        Tp(t, s, f, h), Do(t);
        return;
      case "option":
        for (M in r)
          if (r.hasOwnProperty(M) && ((s = r[M]), s != null))
            switch (M) {
              case "selected":
                t.selected =
                  s && typeof s != "function" && typeof s != "symbol";
                break;
              default:
                se(t, e, M, s, r, null);
            }
        return;
      case "dialog":
        Lt("beforetoggle", t), Lt("toggle", t), Lt("cancel", t), Lt("close", t);
        break;
      case "iframe":
      case "object":
        Lt("load", t);
        break;
      case "video":
      case "audio":
        for (s = 0; s < bs.length; s++) Lt(bs[s], t);
        break;
      case "image":
        Lt("error", t), Lt("load", t);
        break;
      case "details":
        Lt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Lt("error", t), Lt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (X in r)
          if (r.hasOwnProperty(X) && ((s = r[X]), s != null))
            switch (X) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, e));
              default:
                se(t, e, X, s, r, null);
            }
        return;
      default:
        if (rd(e)) {
          for (J in r)
            r.hasOwnProperty(J) &&
              ((s = r[J]), s !== void 0 && Gh(t, e, J, s, r, void 0));
          return;
        }
    }
    for (A in r)
      r.hasOwnProperty(A) && ((s = r[A]), s != null && se(t, e, A, s, r, null));
  }
  function Cx(t, e, r, s) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null,
          h = null,
          v = null,
          A = null,
          M = null,
          X = null,
          J = null;
        for (V in r) {
          var W = r[V];
          if (r.hasOwnProperty(V) && W != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = W;
              default:
                s.hasOwnProperty(V) || se(t, e, V, null, s, W);
            }
        }
        for (var G in s) {
          var V = s[G];
          if (((W = r[G]), s.hasOwnProperty(G) && (V != null || W != null)))
            switch (G) {
              case "type":
                h = V;
                break;
              case "name":
                f = V;
                break;
              case "checked":
                X = V;
                break;
              case "defaultChecked":
                J = V;
                break;
              case "value":
                v = V;
                break;
              case "defaultValue":
                A = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(i(137, e));
                break;
              default:
                V !== W && se(t, e, G, V, s, W);
            }
        }
        nd(t, v, A, M, X, J, h, f);
        return;
      case "select":
        V = v = A = G = null;
        for (h in r)
          if (((M = r[h]), r.hasOwnProperty(h) && M != null))
            switch (h) {
              case "value":
                break;
              case "multiple":
                V = M;
              default:
                s.hasOwnProperty(h) || se(t, e, h, null, s, M);
            }
        for (f in s)
          if (
            ((h = s[f]),
            (M = r[f]),
            s.hasOwnProperty(f) && (h != null || M != null))
          )
            switch (f) {
              case "value":
                G = h;
                break;
              case "defaultValue":
                A = h;
                break;
              case "multiple":
                v = h;
              default:
                h !== M && se(t, e, f, h, s, M);
            }
        (e = A),
          (r = v),
          (s = V),
          G != null
            ? El(t, !!r, G, !1)
            : !!s != !!r &&
              (e != null ? El(t, !!r, e, !0) : El(t, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        V = G = null;
        for (A in r)
          if (
            ((f = r[A]),
            r.hasOwnProperty(A) && f != null && !s.hasOwnProperty(A))
          )
            switch (A) {
              case "value":
                break;
              case "children":
                break;
              default:
                se(t, e, A, null, s, f);
            }
        for (v in s)
          if (
            ((f = s[v]),
            (h = r[v]),
            s.hasOwnProperty(v) && (f != null || h != null))
          )
            switch (v) {
              case "value":
                G = f;
                break;
              case "defaultValue":
                V = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(i(91));
                break;
              default:
                f !== h && se(t, e, v, f, s, h);
            }
        xp(t, G, V);
        return;
      case "option":
        for (var vt in r)
          if (
            ((G = r[vt]),
            r.hasOwnProperty(vt) && G != null && !s.hasOwnProperty(vt))
          )
            switch (vt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                se(t, e, vt, null, s, G);
            }
        for (M in s)
          if (
            ((G = s[M]),
            (V = r[M]),
            s.hasOwnProperty(M) && G !== V && (G != null || V != null))
          )
            switch (M) {
              case "selected":
                t.selected =
                  G && typeof G != "function" && typeof G != "symbol";
                break;
              default:
                se(t, e, M, G, s, V);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var yt in r)
          (G = r[yt]),
            r.hasOwnProperty(yt) &&
              G != null &&
              !s.hasOwnProperty(yt) &&
              se(t, e, yt, null, s, G);
        for (X in s)
          if (
            ((G = s[X]),
            (V = r[X]),
            s.hasOwnProperty(X) && G !== V && (G != null || V != null))
          )
            switch (X) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null) throw Error(i(137, e));
                break;
              default:
                se(t, e, X, G, s, V);
            }
        return;
      default:
        if (rd(e)) {
          for (var oe in r)
            (G = r[oe]),
              r.hasOwnProperty(oe) &&
                G !== void 0 &&
                !s.hasOwnProperty(oe) &&
                Gh(t, e, oe, void 0, s, G);
          for (J in s)
            (G = s[J]),
              (V = r[J]),
              !s.hasOwnProperty(J) ||
                G === V ||
                (G === void 0 && V === void 0) ||
                Gh(t, e, J, G, s, V);
          return;
        }
    }
    for (var L in r)
      (G = r[L]),
        r.hasOwnProperty(L) &&
          G != null &&
          !s.hasOwnProperty(L) &&
          se(t, e, L, null, s, G);
    for (W in s)
      (G = s[W]),
        (V = r[W]),
        !s.hasOwnProperty(W) ||
          G === V ||
          (G == null && V == null) ||
          se(t, e, W, G, s, V);
  }
  var jh = null,
    Vh = null;
  function Of(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function C1(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function A1(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function $h(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Qh = null;
  function Ax() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Qh
        ? !1
        : ((Qh = t), !0)
      : ((Qh = null), !1);
  }
  var E1 = typeof setTimeout == "function" ? setTimeout : void 0,
    Ex = typeof clearTimeout == "function" ? clearTimeout : void 0,
    O1 = typeof Promise == "function" ? Promise : void 0,
    Ox =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof O1 < "u"
        ? function (t) {
            return O1.resolve(null).then(t).catch(Mx);
          }
        : E1;
  function Mx(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Sa(t) {
    return t === "head";
  }
  function M1(t, e) {
    var r = e,
      s = 0,
      f = 0;
    do {
      var h = r.nextSibling;
      if ((t.removeChild(r), h && h.nodeType === 8))
        if (((r = h.data), r === "/$")) {
          if (0 < s && 8 > s) {
            r = s;
            var v = t.ownerDocument;
            if ((r & 1 && xs(v.documentElement), r & 2 && xs(v.body), r & 4))
              for (r = v.head, xs(r), v = r.firstChild; v; ) {
                var A = v.nextSibling,
                  M = v.nodeName;
                v[Ne] ||
                  M === "SCRIPT" ||
                  M === "STYLE" ||
                  (M === "LINK" && v.rel.toLowerCase() === "stylesheet") ||
                  r.removeChild(v),
                  (v = A);
              }
          }
          if (f === 0) {
            t.removeChild(h), Rs(e);
            return;
          }
          f--;
        } else
          r === "$" || r === "$?" || r === "$!"
            ? f++
            : (s = r.charCodeAt(0) - 48);
      else s = 0;
      r = h;
    } while (r);
    Rs(e);
  }
  function Zh(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var r = e;
      switch (((e = e.nextSibling), r.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Zh(r), ye(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(r);
    }
  }
  function wx(t, e, r, s) {
    for (; t.nodeType === 1; ) {
      var f = r;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!s && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (s) {
        if (!t[Ne])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((h = t.getAttribute("rel")),
                h === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                h !== f.rel ||
                t.getAttribute("href") !==
                  (f.href == null || f.href === "" ? null : f.href) ||
                t.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                t.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((h = t.getAttribute("src")),
                (h !== (f.src == null ? null : f.src) ||
                  t.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  t.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  h &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var h = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && t.getAttribute("name") === h) return t;
      } else return t;
      if (((t = ir(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Rx(t, e, r) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !r) ||
        ((t = ir(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Kh(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function Dx(t, e) {
    var r = t.ownerDocument;
    if (t.data !== "$?" || r.readyState === "complete") e();
    else {
      var s = function () {
        e(), r.removeEventListener("DOMContentLoaded", s);
      };
      r.addEventListener("DOMContentLoaded", s), (t._reactRetry = s);
    }
  }
  function ir(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Ph = null;
  function w1(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var r = t.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (e === 0) return t;
          e--;
        } else r === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function R1(t, e, r) {
    switch (((e = Of(r)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(i(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(i(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(i(454));
        return t;
      default:
        throw Error(i(451));
    }
  }
  function xs(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    ye(t);
  }
  var ji = new Map(),
    D1 = new Set();
  function Mf(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var jr = K.d;
  K.d = { f: zx, r: Nx, D: Bx, C: kx, L: Ux, m: Lx, X: Yx, S: Hx, M: qx };
  function zx() {
    var t = jr.f(),
      e = vf();
    return t || e;
  }
  function Nx(t) {
    var e = qt(t);
    e !== null && e.tag === 5 && e.type === "form" ? Fm(e) : jr.r(t);
  }
  var nu = typeof document > "u" ? null : document;
  function z1(t, e, r) {
    var s = nu;
    if (s && typeof e == "string" && e) {
      var f = Ui(e);
      (f = 'link[rel="' + t + '"][href="' + f + '"]'),
        typeof r == "string" && (f += '[crossorigin="' + r + '"]'),
        D1.has(f) ||
          (D1.add(f),
          (t = { rel: t, crossOrigin: r, href: e }),
          s.querySelector(f) === null &&
            ((e = s.createElement("link")),
            xn(e, "link", t),
            jt(e),
            s.head.appendChild(e)));
    }
  }
  function Bx(t) {
    jr.D(t), z1("dns-prefetch", t, null);
  }
  function kx(t, e) {
    jr.C(t, e), z1("preconnect", t, e);
  }
  function Ux(t, e, r) {
    jr.L(t, e, r);
    var s = nu;
    if (s && t && e) {
      var f = 'link[rel="preload"][as="' + Ui(e) + '"]';
      e === "image" && r && r.imageSrcSet
        ? ((f += '[imagesrcset="' + Ui(r.imageSrcSet) + '"]'),
          typeof r.imageSizes == "string" &&
            (f += '[imagesizes="' + Ui(r.imageSizes) + '"]'))
        : (f += '[href="' + Ui(t) + '"]');
      var h = f;
      switch (e) {
        case "style":
          h = iu(t);
          break;
        case "script":
          h = ru(t);
      }
      ji.has(h) ||
        ((t = m(
          {
            rel: "preload",
            href: e === "image" && r && r.imageSrcSet ? void 0 : t,
            as: e,
          },
          r
        )),
        ji.set(h, t),
        s.querySelector(f) !== null ||
          (e === "style" && s.querySelector(Ts(h))) ||
          (e === "script" && s.querySelector(Cs(h))) ||
          ((e = s.createElement("link")),
          xn(e, "link", t),
          jt(e),
          s.head.appendChild(e)));
    }
  }
  function Lx(t, e) {
    jr.m(t, e);
    var r = nu;
    if (r && t) {
      var s = e && typeof e.as == "string" ? e.as : "script",
        f =
          'link[rel="modulepreload"][as="' + Ui(s) + '"][href="' + Ui(t) + '"]',
        h = f;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          h = ru(t);
      }
      if (
        !ji.has(h) &&
        ((t = m({ rel: "modulepreload", href: t }, e)),
        ji.set(h, t),
        r.querySelector(f) === null)
      ) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Cs(h))) return;
        }
        (s = r.createElement("link")),
          xn(s, "link", t),
          jt(s),
          r.head.appendChild(s);
      }
    }
  }
  function Hx(t, e, r) {
    jr.S(t, e, r);
    var s = nu;
    if (s && t) {
      var f = Wt(s).hoistableStyles,
        h = iu(t);
      e = e || "default";
      var v = f.get(h);
      if (!v) {
        var A = { loading: 0, preload: null };
        if ((v = s.querySelector(Ts(h)))) A.loading = 5;
        else {
          (t = m({ rel: "stylesheet", href: t, "data-precedence": e }, r)),
            (r = ji.get(h)) && Jh(t, r);
          var M = (v = s.createElement("link"));
          jt(M),
            xn(M, "link", t),
            (M._p = new Promise(function (X, J) {
              (M.onload = X), (M.onerror = J);
            })),
            M.addEventListener("load", function () {
              A.loading |= 1;
            }),
            M.addEventListener("error", function () {
              A.loading |= 2;
            }),
            (A.loading |= 4),
            wf(v, e, s);
        }
        (v = { type: "stylesheet", instance: v, count: 1, state: A }),
          f.set(h, v);
      }
    }
  }
  function Yx(t, e) {
    jr.X(t, e);
    var r = nu;
    if (r && t) {
      var s = Wt(r).hoistableScripts,
        f = ru(t),
        h = s.get(f);
      h ||
        ((h = r.querySelector(Cs(f))),
        h ||
          ((t = m({ src: t, async: !0 }, e)),
          (e = ji.get(f)) && Fh(t, e),
          (h = r.createElement("script")),
          jt(h),
          xn(h, "link", t),
          r.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        s.set(f, h));
    }
  }
  function qx(t, e) {
    jr.M(t, e);
    var r = nu;
    if (r && t) {
      var s = Wt(r).hoistableScripts,
        f = ru(t),
        h = s.get(f);
      h ||
        ((h = r.querySelector(Cs(f))),
        h ||
          ((t = m({ src: t, async: !0, type: "module" }, e)),
          (e = ji.get(f)) && Fh(t, e),
          (h = r.createElement("script")),
          jt(h),
          xn(h, "link", t),
          r.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        s.set(f, h));
    }
  }
  function N1(t, e, r, s) {
    var f = (f = lt.current) ? Mf(f) : null;
    if (!f) throw Error(i(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string"
          ? ((e = iu(r.href)),
            (r = Wt(f).hoistableStyles),
            (s = r.get(e)),
            s ||
              ((s = { type: "style", instance: null, count: 0, state: null }),
              r.set(e, s)),
            s)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          r.rel === "stylesheet" &&
          typeof r.href == "string" &&
          typeof r.precedence == "string"
        ) {
          t = iu(r.href);
          var h = Wt(f).hoistableStyles,
            v = h.get(t);
          if (
            (v ||
              ((f = f.ownerDocument || f),
              (v = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              h.set(t, v),
              (h = f.querySelector(Ts(t))) &&
                !h._p &&
                ((v.instance = h), (v.state.loading = 5)),
              ji.has(t) ||
                ((r = {
                  rel: "preload",
                  as: "style",
                  href: r.href,
                  crossOrigin: r.crossOrigin,
                  integrity: r.integrity,
                  media: r.media,
                  hrefLang: r.hrefLang,
                  referrerPolicy: r.referrerPolicy,
                }),
                ji.set(t, r),
                h || Xx(f, t, r, v.state))),
            e && s === null)
          )
            throw Error(i(528, ""));
          return v;
        }
        if (e && s !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (e = r.async),
          (r = r.src),
          typeof r == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = ru(r)),
              (r = Wt(f).hoistableScripts),
              (s = r.get(e)),
              s ||
                ((s = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                r.set(e, s)),
              s)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, t));
    }
  }
  function iu(t) {
    return 'href="' + Ui(t) + '"';
  }
  function Ts(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function B1(t) {
    return m({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Xx(t, e, r, s) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (s.loading = 1)
      : ((e = t.createElement("link")),
        (s.preload = e),
        e.addEventListener("load", function () {
          return (s.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (s.loading |= 2);
        }),
        xn(e, "link", r),
        jt(e),
        t.head.appendChild(e));
  }
  function ru(t) {
    return '[src="' + Ui(t) + '"]';
  }
  function Cs(t) {
    return "script[async]" + t;
  }
  function k1(t, e, r) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var s = t.querySelector('style[data-href~="' + Ui(r.href) + '"]');
          if (s) return (e.instance = s), jt(s), s;
          var f = m({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null,
          });
          return (
            (s = (t.ownerDocument || t).createElement("style")),
            jt(s),
            xn(s, "style", f),
            wf(s, r.precedence, t),
            (e.instance = s)
          );
        case "stylesheet":
          f = iu(r.href);
          var h = t.querySelector(Ts(f));
          if (h) return (e.state.loading |= 4), (e.instance = h), jt(h), h;
          (s = B1(r)),
            (f = ji.get(f)) && Jh(s, f),
            (h = (t.ownerDocument || t).createElement("link")),
            jt(h);
          var v = h;
          return (
            (v._p = new Promise(function (A, M) {
              (v.onload = A), (v.onerror = M);
            })),
            xn(h, "link", s),
            (e.state.loading |= 4),
            wf(h, r.precedence, t),
            (e.instance = h)
          );
        case "script":
          return (
            (h = ru(r.src)),
            (f = t.querySelector(Cs(h)))
              ? ((e.instance = f), jt(f), f)
              : ((s = r),
                (f = ji.get(h)) && ((s = m({}, r)), Fh(s, f)),
                (t = t.ownerDocument || t),
                (f = t.createElement("script")),
                jt(f),
                xn(f, "link", s),
                t.head.appendChild(f),
                (e.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((s = e.instance), (e.state.loading |= 4), wf(s, r.precedence, t));
    return e.instance;
  }
  function wf(t, e, r) {
    for (
      var s = r.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        f = s.length ? s[s.length - 1] : null,
        h = f,
        v = 0;
      v < s.length;
      v++
    ) {
      var A = s[v];
      if (A.dataset.precedence === e) h = A;
      else if (h !== f) break;
    }
    h
      ? h.parentNode.insertBefore(t, h.nextSibling)
      : ((e = r.nodeType === 9 ? r.head : r), e.insertBefore(t, e.firstChild));
  }
  function Jh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function Fh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Rf = null;
  function U1(t, e, r) {
    if (Rf === null) {
      var s = new Map(),
        f = (Rf = new Map());
      f.set(r, s);
    } else (f = Rf), (s = f.get(r)), s || ((s = new Map()), f.set(r, s));
    if (s.has(t)) return s;
    for (
      s.set(t, null), r = r.getElementsByTagName(t), f = 0;
      f < r.length;
      f++
    ) {
      var h = r[f];
      if (
        !(
          h[Ne] ||
          h[nt] ||
          (t === "link" && h.getAttribute("rel") === "stylesheet")
        ) &&
        h.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var v = h.getAttribute(e) || "";
        v = t + v;
        var A = s.get(v);
        A ? A.push(h) : s.set(v, [h]);
      }
    }
    return s;
  }
  function L1(t, e, r) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        r,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Gx(t, e, r) {
    if (r === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function H1(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var As = null;
  function jx() {}
  function Vx(t, e, r) {
    if (As === null) throw Error(i(475));
    var s = As;
    if (
      e.type === "stylesheet" &&
      (typeof r.media != "string" || matchMedia(r.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var f = iu(r.href),
          h = t.querySelector(Ts(f));
        if (h) {
          (t = h._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (s.count++, (s = Df.bind(s)), t.then(s, s)),
            (e.state.loading |= 4),
            (e.instance = h),
            jt(h);
          return;
        }
        (h = t.ownerDocument || t),
          (r = B1(r)),
          (f = ji.get(f)) && Jh(r, f),
          (h = h.createElement("link")),
          jt(h);
        var v = h;
        (v._p = new Promise(function (A, M) {
          (v.onload = A), (v.onerror = M);
        })),
          xn(h, "link", r),
          (e.instance = h);
      }
      s.stylesheets === null && (s.stylesheets = new Map()),
        s.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (s.count++,
          (e = Df.bind(s)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function $x() {
    if (As === null) throw Error(i(475));
    var t = As;
    return (
      t.stylesheets && t.count === 0 && Wh(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var r = setTimeout(function () {
              if ((t.stylesheets && Wh(t, t.stylesheets), t.unsuspend)) {
                var s = t.unsuspend;
                (t.unsuspend = null), s();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(r);
              }
            );
          }
        : null
    );
  }
  function Df() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Wh(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var zf = null;
  function Wh(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (zf = new Map()),
        e.forEach(Qx, t),
        (zf = null),
        Df.call(t));
  }
  function Qx(t, e) {
    if (!(e.state.loading & 4)) {
      var r = zf.get(t);
      if (r) var s = r.get(null);
      else {
        (r = new Map()), zf.set(t, r);
        for (
          var f = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            h = 0;
          h < f.length;
          h++
        ) {
          var v = f[h];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") &&
            (r.set(v.dataset.precedence, v), (s = v));
        }
        s && r.set(null, s);
      }
      (f = e.instance),
        (v = f.getAttribute("data-precedence")),
        (h = r.get(v) || s),
        h === s && r.set(null, f),
        r.set(v, f),
        this.count++,
        (s = Df.bind(this)),
        f.addEventListener("load", s),
        f.addEventListener("error", s),
        h
          ? h.parentNode.insertBefore(f, h.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(f, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Es = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: et,
    _currentValue2: et,
    _threadCount: 0,
  };
  function Zx(t, e, r, s, f, h, v, A) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ln(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ln(0)),
      (this.hiddenUpdates = Ln(null)),
      (this.identifierPrefix = s),
      (this.onUncaughtError = f),
      (this.onCaughtError = h),
      (this.onRecoverableError = v),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = A),
      (this.incompleteTransitions = new Map());
  }
  function Y1(t, e, r, s, f, h, v, A, M, X, J, W) {
    return (
      (t = new Zx(t, e, r, v, A, M, X, W)),
      (e = 1),
      h === !0 && (e |= 24),
      (h = ci(3, null, null, e)),
      (t.current = h),
      (h.stateNode = t),
      (e = Nd()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (h.memoizedState = { element: s, isDehydrated: r, cache: e }),
      Ld(h),
      t
    );
  }
  function q1(t) {
    return t ? ((t = kl), t) : kl;
  }
  function X1(t, e, r, s, f, h) {
    (f = q1(f)),
      s.context === null ? (s.context = f) : (s.pendingContext = f),
      (s = sa(e)),
      (s.payload = { element: r }),
      (h = h === void 0 ? null : h),
      h !== null && (s.callback = h),
      (r = oa(t, s, e)),
      r !== null && (mi(r, t, e), ns(r, t, e));
  }
  function G1(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var r = t.retryLane;
      t.retryLane = r !== 0 && r < e ? r : e;
    }
  }
  function Ih(t, e) {
    G1(t, e), (t = t.alternate) && G1(t, e);
  }
  function j1(t) {
    if (t.tag === 13) {
      var e = Bl(t, 67108864);
      e !== null && mi(e, t, 67108864), Ih(t, 67108864);
    }
  }
  var Nf = !0;
  function Kx(t, e, r, s) {
    var f = H.T;
    H.T = null;
    var h = K.p;
    try {
      (K.p = 2), t0(t, e, r, s);
    } finally {
      (K.p = h), (H.T = f);
    }
  }
  function Px(t, e, r, s) {
    var f = H.T;
    H.T = null;
    var h = K.p;
    try {
      (K.p = 8), t0(t, e, r, s);
    } finally {
      (K.p = h), (H.T = f);
    }
  }
  function t0(t, e, r, s) {
    if (Nf) {
      var f = e0(s);
      if (f === null) Xh(t, e, s, Bf, r), $1(t, s);
      else if (Fx(f, t, e, r, s)) s.stopPropagation();
      else if (($1(t, s), e & 4 && -1 < Jx.indexOf(t))) {
        for (; f !== null; ) {
          var h = qt(f);
          if (h !== null)
            switch (h.tag) {
              case 3:
                if (((h = h.stateNode), h.current.memoizedState.isDehydrated)) {
                  var v = On(h.pendingLanes);
                  if (v !== 0) {
                    var A = h;
                    for (A.pendingLanes |= 2, A.entangledLanes |= 2; v; ) {
                      var M = 1 << (31 - ee(v));
                      (A.entanglements[1] |= M), (v &= ~M);
                    }
                    dr(h), (ie & 6) === 0 && ((yf = $() + 500), vs(0));
                  }
                }
                break;
              case 13:
                (A = Bl(h, 2)), A !== null && mi(A, h, 2), vf(), Ih(h, 2);
            }
          if (((h = e0(s)), h === null && Xh(t, e, s, Bf, r), h === f)) break;
          f = h;
        }
        f !== null && s.stopPropagation();
      } else Xh(t, e, s, null, r);
    }
  }
  function e0(t) {
    return (t = ld(t)), n0(t);
  }
  var Bf = null;
  function n0(t) {
    if (((Bf = null), (t = $t(t)), t !== null)) {
      var e = o(t);
      if (e === null) t = null;
      else {
        var r = e.tag;
        if (r === 13) {
          if (((t = c(e)), t !== null)) return t;
          t = null;
        } else if (r === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Bf = t), null;
  }
  function V1(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (nn()) {
          case Se:
            return 2;
          case En:
            return 8;
          case Gt:
          case mn:
            return 32;
          case ai:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var i0 = !1,
    xa = null,
    Ta = null,
    Ca = null,
    Os = new Map(),
    Ms = new Map(),
    Aa = [],
    Jx =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function $1(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        xa = null;
        break;
      case "dragenter":
      case "dragleave":
        Ta = null;
        break;
      case "mouseover":
      case "mouseout":
        Ca = null;
        break;
      case "pointerover":
      case "pointerout":
        Os.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ms.delete(e.pointerId);
    }
  }
  function ws(t, e, r, s, f, h) {
    return t === null || t.nativeEvent !== h
      ? ((t = {
          blockedOn: e,
          domEventName: r,
          eventSystemFlags: s,
          nativeEvent: h,
          targetContainers: [f],
        }),
        e !== null && ((e = qt(e)), e !== null && j1(e)),
        t)
      : ((t.eventSystemFlags |= s),
        (e = t.targetContainers),
        f !== null && e.indexOf(f) === -1 && e.push(f),
        t);
  }
  function Fx(t, e, r, s, f) {
    switch (e) {
      case "focusin":
        return (xa = ws(xa, t, e, r, s, f)), !0;
      case "dragenter":
        return (Ta = ws(Ta, t, e, r, s, f)), !0;
      case "mouseover":
        return (Ca = ws(Ca, t, e, r, s, f)), !0;
      case "pointerover":
        var h = f.pointerId;
        return Os.set(h, ws(Os.get(h) || null, t, e, r, s, f)), !0;
      case "gotpointercapture":
        return (
          (h = f.pointerId), Ms.set(h, ws(Ms.get(h) || null, t, e, r, s, f)), !0
        );
    }
    return !1;
  }
  function Q1(t) {
    var e = $t(t.target);
    if (e !== null) {
      var r = o(e);
      if (r !== null) {
        if (((e = r.tag), e === 13)) {
          if (((e = c(r)), e !== null)) {
            (t.blockedOn = e),
              mt(t.priority, function () {
                if (r.tag === 13) {
                  var s = pi();
                  s = ui(s);
                  var f = Bl(r, s);
                  f !== null && mi(f, r, s), Ih(r, s);
                }
              });
            return;
          }
        } else if (e === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function kf(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var r = e0(t.nativeEvent);
      if (r === null) {
        r = t.nativeEvent;
        var s = new r.constructor(r.type, r);
        (ad = s), r.target.dispatchEvent(s), (ad = null);
      } else return (e = qt(r)), e !== null && j1(e), (t.blockedOn = r), !1;
      e.shift();
    }
    return !0;
  }
  function Z1(t, e, r) {
    kf(t) && r.delete(e);
  }
  function Wx() {
    (i0 = !1),
      xa !== null && kf(xa) && (xa = null),
      Ta !== null && kf(Ta) && (Ta = null),
      Ca !== null && kf(Ca) && (Ca = null),
      Os.forEach(Z1),
      Ms.forEach(Z1);
  }
  function Uf(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      i0 ||
        ((i0 = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, Wx)));
  }
  var Lf = null;
  function K1(t) {
    Lf !== t &&
      ((Lf = t),
      u.unstable_scheduleCallback(u.unstable_NormalPriority, function () {
        Lf === t && (Lf = null);
        for (var e = 0; e < t.length; e += 3) {
          var r = t[e],
            s = t[e + 1],
            f = t[e + 2];
          if (typeof s != "function") {
            if (n0(s || r) === null) continue;
            break;
          }
          var h = qt(r);
          h !== null &&
            (t.splice(e, 3),
            (e -= 3),
            nh(h, { pending: !0, data: f, method: r.method, action: s }, s, f));
        }
      }));
  }
  function Rs(t) {
    function e(M) {
      return Uf(M, t);
    }
    xa !== null && Uf(xa, t),
      Ta !== null && Uf(Ta, t),
      Ca !== null && Uf(Ca, t),
      Os.forEach(e),
      Ms.forEach(e);
    for (var r = 0; r < Aa.length; r++) {
      var s = Aa[r];
      s.blockedOn === t && (s.blockedOn = null);
    }
    for (; 0 < Aa.length && ((r = Aa[0]), r.blockedOn === null); )
      Q1(r), r.blockedOn === null && Aa.shift();
    if (((r = (t.ownerDocument || t).$$reactFormReplay), r != null))
      for (s = 0; s < r.length; s += 3) {
        var f = r[s],
          h = r[s + 1],
          v = f[gt] || null;
        if (typeof h == "function") v || K1(r);
        else if (v) {
          var A = null;
          if (h && h.hasAttribute("formAction")) {
            if (((f = h), (v = h[gt] || null))) A = v.formAction;
            else if (n0(f) !== null) continue;
          } else A = v.action;
          typeof A == "function" ? (r[s + 1] = A) : (r.splice(s, 3), (s -= 3)),
            K1(r);
        }
      }
  }
  function r0(t) {
    this._internalRoot = t;
  }
  (Hf.prototype.render = r0.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(i(409));
      var r = e.current,
        s = pi();
      X1(r, s, t, e, null, null);
    }),
    (Hf.prototype.unmount = r0.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          X1(t.current, 2, null, t, null, null), vf(), (e[dt] = null);
        }
      });
  function Hf(t) {
    this._internalRoot = t;
  }
  Hf.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = xt();
      t = { blockedOn: null, target: t, priority: e };
      for (var r = 0; r < Aa.length && e !== 0 && e < Aa[r].priority; r++);
      Aa.splice(r, 0, t), r === 0 && Q1(t);
    }
  };
  var P1 = n.version;
  if (P1 !== "19.1.0") throw Error(i(527, P1, "19.1.0"));
  K.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(i(188))
        : ((t = Object.keys(t).join(",")), Error(i(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Ix = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yf.isDisabled && Yf.supportsFiber)
      try {
        (yn = Yf.inject(Ix)), (Dt = Yf);
      } catch {}
  }
  return (
    (zs.createRoot = function (t, e) {
      if (!l(t)) throw Error(i(299));
      var r = !1,
        s = "",
        f = cy,
        h = dy,
        v = hy,
        A = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (r = !0),
          e.identifierPrefix !== void 0 && (s = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (f = e.onUncaughtError),
          e.onCaughtError !== void 0 && (h = e.onCaughtError),
          e.onRecoverableError !== void 0 && (v = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (A = e.unstable_transitionCallbacks)),
        (e = Y1(t, 1, !1, null, null, r, s, f, h, v, A, null)),
        (t[dt] = e.current),
        qh(t),
        new r0(e)
      );
    }),
    (zs.hydrateRoot = function (t, e, r) {
      if (!l(t)) throw Error(i(299));
      var s = !1,
        f = "",
        h = cy,
        v = dy,
        A = hy,
        M = null,
        X = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (s = !0),
          r.identifierPrefix !== void 0 && (f = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (h = r.onUncaughtError),
          r.onCaughtError !== void 0 && (v = r.onCaughtError),
          r.onRecoverableError !== void 0 && (A = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 &&
            (M = r.unstable_transitionCallbacks),
          r.formState !== void 0 && (X = r.formState)),
        (e = Y1(t, 1, !0, e, r ?? null, s, f, h, v, A, M, X)),
        (e.context = q1(null)),
        (r = e.current),
        (s = pi()),
        (s = ui(s)),
        (f = sa(s)),
        (f.callback = null),
        oa(r, f, s),
        (r = s),
        (e.current.lanes = r),
        _n(e, r),
        dr(e),
        (t[dt] = e.current),
        qh(t),
        new Hf(e)
      );
    }),
    (zs.version = "19.1.0"),
    zs
  );
}
var a_;
function fT() {
  if (a_) return u0.exports;
  a_ = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (n) {
        console.error(n);
      }
  }
  return u(), (u0.exports = oT()), u0.exports;
}
var cT = fT();
const dT = Cv(cT),
  fo = { black: "#000", white: "#fff" },
  au = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828",
  },
  lu = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2",
  },
  uu = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0",
  },
  su = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b",
  },
  ou = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
  Ns = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100",
  },
  hT = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  };
function bl(u, ...n) {
  const a = new URL(`https://mui.com/production-error/?code=${u}`);
  return (
    n.forEach((i) => a.searchParams.append("args[]", i)),
    `Minified MUI error #${u}; visit ${a} for the full message.`
  );
}
const Wr = "$$material";
function H0() {
  return (
    (H0 = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var i in a) ({}).hasOwnProperty.call(a, i) && (u[i] = a[i]);
          }
          return u;
        }),
    H0.apply(null, arguments)
  );
}
function gT(u) {
  if (u.sheet) return u.sheet;
  for (var n = 0; n < document.styleSheets.length; n++)
    if (document.styleSheets[n].ownerNode === u) return document.styleSheets[n];
}
function pT(u) {
  var n = document.createElement("style");
  return (
    n.setAttribute("data-emotion", u.key),
    u.nonce !== void 0 && n.setAttribute("nonce", u.nonce),
    n.appendChild(document.createTextNode("")),
    n.setAttribute("data-s", ""),
    n
  );
}
var mT = (function () {
    function u(a) {
      var i = this;
      (this._insertTag = function (l) {
        var o;
        i.tags.length === 0
          ? i.insertionPoint
            ? (o = i.insertionPoint.nextSibling)
            : i.prepend
            ? (o = i.container.firstChild)
            : (o = i.before)
          : (o = i.tags[i.tags.length - 1].nextSibling),
          i.container.insertBefore(l, o),
          i.tags.push(l);
      }),
        (this.isSpeedy = a.speedy === void 0 ? !0 : a.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = a.nonce),
        (this.key = a.key),
        (this.container = a.container),
        (this.prepend = a.prepend),
        (this.insertionPoint = a.insertionPoint),
        (this.before = null);
    }
    var n = u.prototype;
    return (
      (n.hydrate = function (i) {
        i.forEach(this._insertTag);
      }),
      (n.insert = function (i) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(pT(this));
        var l = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = gT(l);
          try {
            o.insertRule(i, o.cssRules.length);
          } catch {}
        } else l.appendChild(document.createTextNode(i));
        this.ctr++;
      }),
      (n.flush = function () {
        this.tags.forEach(function (i) {
          var l;
          return (l = i.parentNode) == null ? void 0 : l.removeChild(i);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      u
    );
  })(),
  Rn = "-ms-",
  bc = "-moz-",
  Zt = "-webkit-",
  Ev = "comm",
  Cg = "rule",
  Ag = "decl",
  yT = "@import",
  Ov = "@keyframes",
  _T = "@layer",
  vT = Math.abs,
  Yc = String.fromCharCode,
  bT = Object.assign;
function ST(u, n) {
  return Tn(u, 0) ^ 45
    ? (((((((n << 2) ^ Tn(u, 0)) << 2) ^ Tn(u, 1)) << 2) ^ Tn(u, 2)) << 2) ^
        Tn(u, 3)
    : 0;
}
function Mv(u) {
  return u.trim();
}
function xT(u, n) {
  return (u = n.exec(u)) ? u[0] : u;
}
function Kt(u, n, a) {
  return u.replace(n, a);
}
function Y0(u, n) {
  return u.indexOf(n);
}
function Tn(u, n) {
  return u.charCodeAt(n) | 0;
}
function co(u, n, a) {
  return u.slice(n, a);
}
function mr(u) {
  return u.length;
}
function Eg(u) {
  return u.length;
}
function qf(u, n) {
  return n.push(u), u;
}
function TT(u, n) {
  return u.map(n).join("");
}
var qc = 1,
  wu = 1,
  wv = 0,
  ii = 0,
  tn = 0,
  Lu = "";
function Xc(u, n, a, i, l, o, c) {
  return {
    value: u,
    root: n,
    parent: a,
    type: i,
    props: l,
    children: o,
    line: qc,
    column: wu,
    length: c,
    return: "",
  };
}
function Bs(u, n) {
  return bT(Xc("", null, null, "", null, null, 0), u, { length: -u.length }, n);
}
function CT() {
  return tn;
}
function AT() {
  return (
    (tn = ii > 0 ? Tn(Lu, --ii) : 0), wu--, tn === 10 && ((wu = 1), qc--), tn
  );
}
function Ei() {
  return (
    (tn = ii < wv ? Tn(Lu, ii++) : 0), wu++, tn === 10 && ((wu = 1), qc++), tn
  );
}
function Sr() {
  return Tn(Lu, ii);
}
function ac() {
  return ii;
}
function Ao(u, n) {
  return co(Lu, u, n);
}
function ho(u) {
  switch (u) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Rv(u) {
  return (qc = wu = 1), (wv = mr((Lu = u))), (ii = 0), [];
}
function Dv(u) {
  return (Lu = ""), u;
}
function lc(u) {
  return Mv(Ao(ii - 1, q0(u === 91 ? u + 2 : u === 40 ? u + 1 : u)));
}
function ET(u) {
  for (; (tn = Sr()) && tn < 33; ) Ei();
  return ho(u) > 2 || ho(tn) > 3 ? "" : " ";
}
function OT(u, n) {
  for (
    ;
    --n &&
    Ei() &&
    !(tn < 48 || tn > 102 || (tn > 57 && tn < 65) || (tn > 70 && tn < 97));

  );
  return Ao(u, ac() + (n < 6 && Sr() == 32 && Ei() == 32));
}
function q0(u) {
  for (; Ei(); )
    switch (tn) {
      case u:
        return ii;
      case 34:
      case 39:
        u !== 34 && u !== 39 && q0(tn);
        break;
      case 40:
        u === 41 && q0(u);
        break;
      case 92:
        Ei();
        break;
    }
  return ii;
}
function MT(u, n) {
  for (; Ei() && u + tn !== 57; ) if (u + tn === 84 && Sr() === 47) break;
  return "/*" + Ao(n, ii - 1) + "*" + Yc(u === 47 ? u : Ei());
}
function wT(u) {
  for (; !ho(Sr()); ) Ei();
  return Ao(u, ii);
}
function RT(u) {
  return Dv(uc("", null, null, null, [""], (u = Rv(u)), 0, [0], u));
}
function uc(u, n, a, i, l, o, c, d, p) {
  for (
    var g = 0,
      m = 0,
      y = c,
      b = 0,
      S = 0,
      C = 0,
      _ = 1,
      E = 1,
      w = 1,
      z = 0,
      D = "",
      R = l,
      O = o,
      k = i,
      N = D;
    E;

  )
    switch (((C = z), (z = Ei()))) {
      case 40:
        if (C != 108 && Tn(N, y - 1) == 58) {
          Y0((N += Kt(lc(z), "&", "&\f")), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        N += lc(z);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        N += ET(C);
        break;
      case 92:
        N += OT(ac() - 1, 7);
        continue;
      case 47:
        switch (Sr()) {
          case 42:
          case 47:
            qf(DT(MT(Ei(), ac()), n, a), p);
            break;
          default:
            N += "/";
        }
        break;
      case 123 * _:
        d[g++] = mr(N) * w;
      case 125 * _:
      case 59:
      case 0:
        switch (z) {
          case 0:
          case 125:
            E = 0;
          case 59 + m:
            w == -1 && (N = Kt(N, /\f/g, "")),
              S > 0 &&
                mr(N) - y &&
                qf(
                  S > 32
                    ? u_(N + ";", i, a, y - 1)
                    : u_(Kt(N, " ", "") + ";", i, a, y - 2),
                  p
                );
            break;
          case 59:
            N += ";";
          default:
            if (
              (qf((k = l_(N, n, a, g, m, l, d, D, (R = []), (O = []), y)), o),
              z === 123)
            )
              if (m === 0) uc(N, n, k, k, R, o, y, d, O);
              else
                switch (b === 99 && Tn(N, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    uc(
                      u,
                      k,
                      k,
                      i && qf(l_(u, k, k, 0, 0, l, d, D, l, (R = []), y), O),
                      l,
                      O,
                      y,
                      d,
                      i ? R : O
                    );
                    break;
                  default:
                    uc(N, k, k, k, [""], O, 0, d, O);
                }
        }
        (g = m = S = 0), (_ = w = 1), (D = N = ""), (y = c);
        break;
      case 58:
        (y = 1 + mr(N)), (S = C);
      default:
        if (_ < 1) {
          if (z == 123) --_;
          else if (z == 125 && _++ == 0 && AT() == 125) continue;
        }
        switch (((N += Yc(z)), z * _)) {
          case 38:
            w = m > 0 ? 1 : ((N += "\f"), -1);
            break;
          case 44:
            (d[g++] = (mr(N) - 1) * w), (w = 1);
            break;
          case 64:
            Sr() === 45 && (N += lc(Ei())),
              (b = Sr()),
              (m = y = mr((D = N += wT(ac())))),
              z++;
            break;
          case 45:
            C === 45 && mr(N) == 2 && (_ = 0);
        }
    }
  return o;
}
function l_(u, n, a, i, l, o, c, d, p, g, m) {
  for (
    var y = l - 1, b = l === 0 ? o : [""], S = Eg(b), C = 0, _ = 0, E = 0;
    C < i;
    ++C
  )
    for (var w = 0, z = co(u, y + 1, (y = vT((_ = c[C])))), D = u; w < S; ++w)
      (D = Mv(_ > 0 ? b[w] + " " + z : Kt(z, /&\f/g, b[w]))) && (p[E++] = D);
  return Xc(u, n, a, l === 0 ? Cg : d, p, g, m);
}
function DT(u, n, a) {
  return Xc(u, n, a, Ev, Yc(CT()), co(u, 2, -2), 0);
}
function u_(u, n, a, i) {
  return Xc(u, n, a, Ag, co(u, 0, i), co(u, i + 1, -1), i);
}
function bu(u, n) {
  for (var a = "", i = Eg(u), l = 0; l < i; l++) a += n(u[l], l, u, n) || "";
  return a;
}
function zT(u, n, a, i) {
  switch (u.type) {
    case _T:
      if (u.children.length) break;
    case yT:
    case Ag:
      return (u.return = u.return || u.value);
    case Ev:
      return "";
    case Ov:
      return (u.return = u.value + "{" + bu(u.children, i) + "}");
    case Cg:
      u.value = u.props.join(",");
  }
  return mr((a = bu(u.children, i)))
    ? (u.return = u.value + "{" + a + "}")
    : "";
}
function NT(u) {
  var n = Eg(u);
  return function (a, i, l, o) {
    for (var c = "", d = 0; d < n; d++) c += u[d](a, i, l, o) || "";
    return c;
  };
}
function BT(u) {
  return function (n) {
    n.root || ((n = n.return) && u(n));
  };
}
function zv(u) {
  var n = Object.create(null);
  return function (a) {
    return n[a] === void 0 && (n[a] = u(a)), n[a];
  };
}
var kT = function (n, a, i) {
    for (
      var l = 0, o = 0;
      (l = o), (o = Sr()), l === 38 && o === 12 && (a[i] = 1), !ho(o);

    )
      Ei();
    return Ao(n, ii);
  },
  UT = function (n, a) {
    var i = -1,
      l = 44;
    do
      switch (ho(l)) {
        case 0:
          l === 38 && Sr() === 12 && (a[i] = 1), (n[i] += kT(ii - 1, a, i));
          break;
        case 2:
          n[i] += lc(l);
          break;
        case 4:
          if (l === 44) {
            (n[++i] = Sr() === 58 ? "&\f" : ""), (a[i] = n[i].length);
            break;
          }
        default:
          n[i] += Yc(l);
      }
    while ((l = Ei()));
    return n;
  },
  LT = function (n, a) {
    return Dv(UT(Rv(n), a));
  },
  s_ = new WeakMap(),
  HT = function (n) {
    if (!(n.type !== "rule" || !n.parent || n.length < 1)) {
      for (
        var a = n.value,
          i = n.parent,
          l = n.column === i.column && n.line === i.line;
        i.type !== "rule";

      )
        if (((i = i.parent), !i)) return;
      if (
        !(n.props.length === 1 && a.charCodeAt(0) !== 58 && !s_.get(i)) &&
        !l
      ) {
        s_.set(n, !0);
        for (
          var o = [], c = LT(a, o), d = i.props, p = 0, g = 0;
          p < c.length;
          p++
        )
          for (var m = 0; m < d.length; m++, g++)
            n.props[g] = o[p] ? c[p].replace(/&\f/g, d[m]) : d[m] + " " + c[p];
      }
    }
  },
  YT = function (n) {
    if (n.type === "decl") {
      var a = n.value;
      a.charCodeAt(0) === 108 &&
        a.charCodeAt(2) === 98 &&
        ((n.return = ""), (n.value = ""));
    }
  };
function Nv(u, n) {
  switch (ST(u, n)) {
    case 5103:
      return Zt + "print-" + u + u;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Zt + u + u;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Zt + u + bc + u + Rn + u + u;
    case 6828:
    case 4268:
      return Zt + u + Rn + u + u;
    case 6165:
      return Zt + u + Rn + "flex-" + u + u;
    case 5187:
      return (
        Zt + u + Kt(u, /(\w+).+(:[^]+)/, Zt + "box-$1$2" + Rn + "flex-$1$2") + u
      );
    case 5443:
      return Zt + u + Rn + "flex-item-" + Kt(u, /flex-|-self/, "") + u;
    case 4675:
      return (
        Zt +
        u +
        Rn +
        "flex-line-pack" +
        Kt(u, /align-content|flex-|-self/, "") +
        u
      );
    case 5548:
      return Zt + u + Rn + Kt(u, "shrink", "negative") + u;
    case 5292:
      return Zt + u + Rn + Kt(u, "basis", "preferred-size") + u;
    case 6060:
      return (
        Zt +
        "box-" +
        Kt(u, "-grow", "") +
        Zt +
        u +
        Rn +
        Kt(u, "grow", "positive") +
        u
      );
    case 4554:
      return Zt + Kt(u, /([^-])(transform)/g, "$1" + Zt + "$2") + u;
    case 6187:
      return (
        Kt(
          Kt(Kt(u, /(zoom-|grab)/, Zt + "$1"), /(image-set)/, Zt + "$1"),
          u,
          ""
        ) + u
      );
    case 5495:
    case 3959:
      return Kt(u, /(image-set\([^]*)/, Zt + "$1$`$1");
    case 4968:
      return (
        Kt(
          Kt(u, /(.+:)(flex-)?(.*)/, Zt + "box-pack:$3" + Rn + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Zt +
        u +
        u
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Kt(u, /(.+)-inline(.+)/, Zt + "$1$2") + u;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (mr(u) - 1 - n > 6)
        switch (Tn(u, n + 1)) {
          case 109:
            if (Tn(u, n + 4) !== 45) break;
          case 102:
            return (
              Kt(
                u,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Zt +
                  "$2-$3$1" +
                  bc +
                  (Tn(u, n + 3) == 108 ? "$3" : "$2-$3")
              ) + u
            );
          case 115:
            return ~Y0(u, "stretch")
              ? Nv(Kt(u, "stretch", "fill-available"), n) + u
              : u;
        }
      break;
    case 4949:
      if (Tn(u, n + 1) !== 115) break;
    case 6444:
      switch (Tn(u, mr(u) - 3 - (~Y0(u, "!important") && 10))) {
        case 107:
          return Kt(u, ":", ":" + Zt) + u;
        case 101:
          return (
            Kt(
              u,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Zt +
                (Tn(u, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Zt +
                "$2$3$1" +
                Rn +
                "$2box$3"
            ) + u
          );
      }
      break;
    case 5936:
      switch (Tn(u, n + 11)) {
        case 114:
          return Zt + u + Rn + Kt(u, /[svh]\w+-[tblr]{2}/, "tb") + u;
        case 108:
          return Zt + u + Rn + Kt(u, /[svh]\w+-[tblr]{2}/, "tb-rl") + u;
        case 45:
          return Zt + u + Rn + Kt(u, /[svh]\w+-[tblr]{2}/, "lr") + u;
      }
      return Zt + u + Rn + u + u;
  }
  return u;
}
var qT = function (n, a, i, l) {
    if (n.length > -1 && !n.return)
      switch (n.type) {
        case Ag:
          n.return = Nv(n.value, n.length);
          break;
        case Ov:
          return bu([Bs(n, { value: Kt(n.value, "@", "@" + Zt) })], l);
        case Cg:
          if (n.length)
            return TT(n.props, function (o) {
              switch (xT(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return bu(
                    [Bs(n, { props: [Kt(o, /:(read-\w+)/, ":" + bc + "$1")] })],
                    l
                  );
                case "::placeholder":
                  return bu(
                    [
                      Bs(n, {
                        props: [Kt(o, /:(plac\w+)/, ":" + Zt + "input-$1")],
                      }),
                      Bs(n, { props: [Kt(o, /:(plac\w+)/, ":" + bc + "$1")] }),
                      Bs(n, { props: [Kt(o, /:(plac\w+)/, Rn + "input-$1")] }),
                    ],
                    l
                  );
              }
              return "";
            });
      }
  },
  XT = [qT],
  GT = function (n) {
    var a = n.key;
    if (a === "css") {
      var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(i, function (_) {
        var E = _.getAttribute("data-emotion");
        E.indexOf(" ") !== -1 &&
          (document.head.appendChild(_), _.setAttribute("data-s", ""));
      });
    }
    var l = n.stylisPlugins || XT,
      o = {},
      c,
      d = [];
    (c = n.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + a + ' "]'),
        function (_) {
          for (
            var E = _.getAttribute("data-emotion").split(" "), w = 1;
            w < E.length;
            w++
          )
            o[E[w]] = !0;
          d.push(_);
        }
      );
    var p,
      g = [HT, YT];
    {
      var m,
        y = [
          zT,
          BT(function (_) {
            m.insert(_);
          }),
        ],
        b = NT(g.concat(l, y)),
        S = function (E) {
          return bu(RT(E), b);
        };
      p = function (E, w, z, D) {
        (m = z),
          S(E ? E + "{" + w.styles + "}" : w.styles),
          D && (C.inserted[w.name] = !0);
      };
    }
    var C = {
      key: a,
      sheet: new mT({
        key: a,
        container: c,
        nonce: n.nonce,
        speedy: n.speedy,
        prepend: n.prepend,
        insertionPoint: n.insertionPoint,
      }),
      nonce: n.nonce,
      inserted: o,
      registered: {},
      insert: p,
    };
    return C.sheet.hydrate(d), C;
  },
  c0 = { exports: {} },
  It = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var o_;
function jT() {
  if (o_) return It;
  o_ = 1;
  var u = typeof Symbol == "function" && Symbol.for,
    n = u ? Symbol.for("react.element") : 60103,
    a = u ? Symbol.for("react.portal") : 60106,
    i = u ? Symbol.for("react.fragment") : 60107,
    l = u ? Symbol.for("react.strict_mode") : 60108,
    o = u ? Symbol.for("react.profiler") : 60114,
    c = u ? Symbol.for("react.provider") : 60109,
    d = u ? Symbol.for("react.context") : 60110,
    p = u ? Symbol.for("react.async_mode") : 60111,
    g = u ? Symbol.for("react.concurrent_mode") : 60111,
    m = u ? Symbol.for("react.forward_ref") : 60112,
    y = u ? Symbol.for("react.suspense") : 60113,
    b = u ? Symbol.for("react.suspense_list") : 60120,
    S = u ? Symbol.for("react.memo") : 60115,
    C = u ? Symbol.for("react.lazy") : 60116,
    _ = u ? Symbol.for("react.block") : 60121,
    E = u ? Symbol.for("react.fundamental") : 60117,
    w = u ? Symbol.for("react.responder") : 60118,
    z = u ? Symbol.for("react.scope") : 60119;
  function D(O) {
    if (typeof O == "object" && O !== null) {
      var k = O.$$typeof;
      switch (k) {
        case n:
          switch (((O = O.type), O)) {
            case p:
            case g:
            case i:
            case o:
            case l:
            case y:
              return O;
            default:
              switch (((O = O && O.$$typeof), O)) {
                case d:
                case m:
                case C:
                case S:
                case c:
                  return O;
                default:
                  return k;
              }
          }
        case a:
          return k;
      }
    }
  }
  function R(O) {
    return D(O) === g;
  }
  return (
    (It.AsyncMode = p),
    (It.ConcurrentMode = g),
    (It.ContextConsumer = d),
    (It.ContextProvider = c),
    (It.Element = n),
    (It.ForwardRef = m),
    (It.Fragment = i),
    (It.Lazy = C),
    (It.Memo = S),
    (It.Portal = a),
    (It.Profiler = o),
    (It.StrictMode = l),
    (It.Suspense = y),
    (It.isAsyncMode = function (O) {
      return R(O) || D(O) === p;
    }),
    (It.isConcurrentMode = R),
    (It.isContextConsumer = function (O) {
      return D(O) === d;
    }),
    (It.isContextProvider = function (O) {
      return D(O) === c;
    }),
    (It.isElement = function (O) {
      return typeof O == "object" && O !== null && O.$$typeof === n;
    }),
    (It.isForwardRef = function (O) {
      return D(O) === m;
    }),
    (It.isFragment = function (O) {
      return D(O) === i;
    }),
    (It.isLazy = function (O) {
      return D(O) === C;
    }),
    (It.isMemo = function (O) {
      return D(O) === S;
    }),
    (It.isPortal = function (O) {
      return D(O) === a;
    }),
    (It.isProfiler = function (O) {
      return D(O) === o;
    }),
    (It.isStrictMode = function (O) {
      return D(O) === l;
    }),
    (It.isSuspense = function (O) {
      return D(O) === y;
    }),
    (It.isValidElementType = function (O) {
      return (
        typeof O == "string" ||
        typeof O == "function" ||
        O === i ||
        O === g ||
        O === o ||
        O === l ||
        O === y ||
        O === b ||
        (typeof O == "object" &&
          O !== null &&
          (O.$$typeof === C ||
            O.$$typeof === S ||
            O.$$typeof === c ||
            O.$$typeof === d ||
            O.$$typeof === m ||
            O.$$typeof === E ||
            O.$$typeof === w ||
            O.$$typeof === z ||
            O.$$typeof === _))
      );
    }),
    (It.typeOf = D),
    It
  );
}
var f_;
function VT() {
  return f_ || ((f_ = 1), (c0.exports = jT())), c0.exports;
}
var d0, c_;
function $T() {
  if (c_) return d0;
  c_ = 1;
  var u = VT(),
    n = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    a = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    i = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    l = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    o = {};
  (o[u.ForwardRef] = i), (o[u.Memo] = l);
  function c(C) {
    return u.isMemo(C) ? l : o[C.$$typeof] || n;
  }
  var d = Object.defineProperty,
    p = Object.getOwnPropertyNames,
    g = Object.getOwnPropertySymbols,
    m = Object.getOwnPropertyDescriptor,
    y = Object.getPrototypeOf,
    b = Object.prototype;
  function S(C, _, E) {
    if (typeof _ != "string") {
      if (b) {
        var w = y(_);
        w && w !== b && S(C, w, E);
      }
      var z = p(_);
      g && (z = z.concat(g(_)));
      for (var D = c(C), R = c(_), O = 0; O < z.length; ++O) {
        var k = z[O];
        if (!a[k] && !(E && E[k]) && !(R && R[k]) && !(D && D[k])) {
          var N = m(_, k);
          try {
            d(C, k, N);
          } catch {}
        }
      }
    }
    return C;
  }
  return (d0 = S), d0;
}
$T();
var QT = !0;
function Bv(u, n, a) {
  var i = "";
  return (
    a.split(" ").forEach(function (l) {
      u[l] !== void 0 ? n.push(u[l] + ";") : l && (i += l + " ");
    }),
    i
  );
}
var Og = function (n, a, i) {
    var l = n.key + "-" + a.name;
    (i === !1 || QT === !1) &&
      n.registered[l] === void 0 &&
      (n.registered[l] = a.styles);
  },
  Mg = function (n, a, i) {
    Og(n, a, i);
    var l = n.key + "-" + a.name;
    if (n.inserted[a.name] === void 0) {
      var o = a;
      do n.insert(a === o ? "." + l : "", o, n.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function ZT(u) {
  for (var n = 0, a, i = 0, l = u.length; l >= 4; ++i, l -= 4)
    (a =
      (u.charCodeAt(i) & 255) |
      ((u.charCodeAt(++i) & 255) << 8) |
      ((u.charCodeAt(++i) & 255) << 16) |
      ((u.charCodeAt(++i) & 255) << 24)),
      (a = (a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)),
      (a ^= a >>> 24),
      (n =
        ((a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)) ^
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)));
  switch (l) {
    case 3:
      n ^= (u.charCodeAt(i + 2) & 255) << 16;
    case 2:
      n ^= (u.charCodeAt(i + 1) & 255) << 8;
    case 1:
      (n ^= u.charCodeAt(i) & 255),
        (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16));
  }
  return (
    (n ^= n >>> 13),
    (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
    ((n ^ (n >>> 15)) >>> 0).toString(36)
  );
}
var KT = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  PT = /[A-Z]|^ms/g,
  JT = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  kv = function (n) {
    return n.charCodeAt(1) === 45;
  },
  d_ = function (n) {
    return n != null && typeof n != "boolean";
  },
  h0 = zv(function (u) {
    return kv(u) ? u : u.replace(PT, "-$&").toLowerCase();
  }),
  h_ = function (n, a) {
    switch (n) {
      case "animation":
      case "animationName":
        if (typeof a == "string")
          return a.replace(JT, function (i, l, o) {
            return (yr = { name: l, styles: o, next: yr }), l;
          });
    }
    return KT[n] !== 1 && !kv(n) && typeof a == "number" && a !== 0
      ? a + "px"
      : a;
  };
function go(u, n, a) {
  if (a == null) return "";
  var i = a;
  if (i.__emotion_styles !== void 0) return i;
  switch (typeof a) {
    case "boolean":
      return "";
    case "object": {
      var l = a;
      if (l.anim === 1)
        return (yr = { name: l.name, styles: l.styles, next: yr }), l.name;
      var o = a;
      if (o.styles !== void 0) {
        var c = o.next;
        if (c !== void 0)
          for (; c !== void 0; )
            (yr = { name: c.name, styles: c.styles, next: yr }), (c = c.next);
        var d = o.styles + ";";
        return d;
      }
      return FT(u, n, a);
    }
    case "function": {
      if (u !== void 0) {
        var p = yr,
          g = a(u);
        return (yr = p), go(u, n, g);
      }
      break;
    }
  }
  var m = a;
  if (n == null) return m;
  var y = n[m];
  return y !== void 0 ? y : m;
}
function FT(u, n, a) {
  var i = "";
  if (Array.isArray(a))
    for (var l = 0; l < a.length; l++) i += go(u, n, a[l]) + ";";
  else
    for (var o in a) {
      var c = a[o];
      if (typeof c != "object") {
        var d = c;
        n != null && n[d] !== void 0
          ? (i += o + "{" + n[d] + "}")
          : d_(d) && (i += h0(o) + ":" + h_(o, d) + ";");
      } else if (
        Array.isArray(c) &&
        typeof c[0] == "string" &&
        (n == null || n[c[0]] === void 0)
      )
        for (var p = 0; p < c.length; p++)
          d_(c[p]) && (i += h0(o) + ":" + h_(o, c[p]) + ";");
      else {
        var g = go(u, n, c);
        switch (o) {
          case "animation":
          case "animationName": {
            i += h0(o) + ":" + g + ";";
            break;
          }
          default:
            i += o + "{" + g + "}";
        }
      }
    }
  return i;
}
var g_ = /label:\s*([^\s;{]+)\s*(;|$)/g,
  yr;
function wg(u, n, a) {
  if (
    u.length === 1 &&
    typeof u[0] == "object" &&
    u[0] !== null &&
    u[0].styles !== void 0
  )
    return u[0];
  var i = !0,
    l = "";
  yr = void 0;
  var o = u[0];
  if (o == null || o.raw === void 0) (i = !1), (l += go(a, n, o));
  else {
    var c = o;
    l += c[0];
  }
  for (var d = 1; d < u.length; d++)
    if (((l += go(a, n, u[d])), i)) {
      var p = o;
      l += p[d];
    }
  g_.lastIndex = 0;
  for (var g = "", m; (m = g_.exec(l)) !== null; ) g += "-" + m[1];
  var y = ZT(l) + g;
  return { name: y, styles: l, next: yr };
}
var WT = function (n) {
    return n();
  },
  Uv = L0.useInsertionEffect ? L0.useInsertionEffect : !1,
  Lv = Uv || WT,
  p_ = Uv || ot.useLayoutEffect,
  Hv = ot.createContext(typeof HTMLElement < "u" ? GT({ key: "css" }) : null);
Hv.Provider;
var Rg = function (n) {
    return ot.forwardRef(function (a, i) {
      var l = ot.useContext(Hv);
      return n(a, l, i);
    });
  },
  Eo = ot.createContext({}),
  Dg = {}.hasOwnProperty,
  X0 = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  IT = function (n, a) {
    var i = {};
    for (var l in a) Dg.call(a, l) && (i[l] = a[l]);
    return (i[X0] = n), i;
  },
  tC = function (n) {
    var a = n.cache,
      i = n.serialized,
      l = n.isStringTag;
    return (
      Og(a, i, l),
      Lv(function () {
        return Mg(a, i, l);
      }),
      null
    );
  },
  eC = Rg(function (u, n, a) {
    var i = u.css;
    typeof i == "string" && n.registered[i] !== void 0 && (i = n.registered[i]);
    var l = u[X0],
      o = [i],
      c = "";
    typeof u.className == "string"
      ? (c = Bv(n.registered, o, u.className))
      : u.className != null && (c = u.className + " ");
    var d = wg(o, void 0, ot.useContext(Eo));
    c += n.key + "-" + d.name;
    var p = {};
    for (var g in u) Dg.call(u, g) && g !== "css" && g !== X0 && (p[g] = u[g]);
    return (
      (p.className = c),
      a && (p.ref = a),
      ot.createElement(
        ot.Fragment,
        null,
        ot.createElement(tC, {
          cache: n,
          serialized: d,
          isStringTag: typeof l == "string",
        }),
        ot.createElement(l, p)
      )
    );
  }),
  nC = eC,
  m_ = function (n, a) {
    var i = arguments;
    if (a == null || !Dg.call(a, "css"))
      return ot.createElement.apply(void 0, i);
    var l = i.length,
      o = new Array(l);
    (o[0] = nC), (o[1] = IT(n, a));
    for (var c = 2; c < l; c++) o[c] = i[c];
    return ot.createElement.apply(null, o);
  };
(function (u) {
  var n;
  n || (n = u.JSX || (u.JSX = {}));
})(m_ || (m_ = {}));
var iC = Rg(function (u, n) {
    var a = u.styles,
      i = wg([a], void 0, ot.useContext(Eo)),
      l = ot.useRef();
    return (
      p_(
        function () {
          var o = n.key + "-global",
            c = new n.sheet.constructor({
              key: o,
              nonce: n.sheet.nonce,
              container: n.sheet.container,
              speedy: n.sheet.isSpeedy,
            }),
            d = !1,
            p = document.querySelector(
              'style[data-emotion="' + o + " " + i.name + '"]'
            );
          return (
            n.sheet.tags.length && (c.before = n.sheet.tags[0]),
            p !== null &&
              ((d = !0), p.setAttribute("data-emotion", o), c.hydrate([p])),
            (l.current = [c, d]),
            function () {
              c.flush();
            }
          );
        },
        [n]
      ),
      p_(
        function () {
          var o = l.current,
            c = o[0],
            d = o[1];
          if (d) {
            o[1] = !1;
            return;
          }
          if ((i.next !== void 0 && Mg(n, i.next, !0), c.tags.length)) {
            var p = c.tags[c.tags.length - 1].nextElementSibling;
            (c.before = p), c.flush();
          }
          n.insert("", i, c, !1);
        },
        [n, i.name]
      ),
      null
    );
  }),
  rC =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  aC = zv(function (u) {
    return (
      rC.test(u) ||
      (u.charCodeAt(0) === 111 &&
        u.charCodeAt(1) === 110 &&
        u.charCodeAt(2) < 91)
    );
  }),
  lC = aC,
  uC = function (n) {
    return n !== "theme";
  },
  y_ = function (n) {
    return typeof n == "string" && n.charCodeAt(0) > 96 ? lC : uC;
  },
  __ = function (n, a, i) {
    var l;
    if (a) {
      var o = a.shouldForwardProp;
      l =
        n.__emotion_forwardProp && o
          ? function (c) {
              return n.__emotion_forwardProp(c) && o(c);
            }
          : o;
    }
    return typeof l != "function" && i && (l = n.__emotion_forwardProp), l;
  },
  sC = function (n) {
    var a = n.cache,
      i = n.serialized,
      l = n.isStringTag;
    return (
      Og(a, i, l),
      Lv(function () {
        return Mg(a, i, l);
      }),
      null
    );
  },
  oC = function u(n, a) {
    var i = n.__emotion_real === n,
      l = (i && n.__emotion_base) || n,
      o,
      c;
    a !== void 0 && ((o = a.label), (c = a.target));
    var d = __(n, a, i),
      p = d || y_(l),
      g = !p("as");
    return function () {
      var m = arguments,
        y =
          i && n.__emotion_styles !== void 0 ? n.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && y.push("label:" + o + ";"),
        m[0] == null || m[0].raw === void 0)
      )
        y.push.apply(y, m);
      else {
        var b = m[0];
        y.push(b[0]);
        for (var S = m.length, C = 1; C < S; C++) y.push(m[C], b[C]);
      }
      var _ = Rg(function (E, w, z) {
        var D = (g && E.as) || l,
          R = "",
          O = [],
          k = E;
        if (E.theme == null) {
          k = {};
          for (var N in E) k[N] = E[N];
          k.theme = ot.useContext(Eo);
        }
        typeof E.className == "string"
          ? (R = Bv(w.registered, O, E.className))
          : E.className != null && (R = E.className + " ");
        var Y = wg(y.concat(O), w.registered, k);
        (R += w.key + "-" + Y.name), c !== void 0 && (R += " " + c);
        var U = g && d === void 0 ? y_(D) : p,
          x = {};
        for (var j in E) (g && j === "as") || (U(j) && (x[j] = E[j]));
        return (
          (x.className = R),
          z && (x.ref = z),
          ot.createElement(
            ot.Fragment,
            null,
            ot.createElement(sC, {
              cache: w,
              serialized: Y,
              isStringTag: typeof D == "string",
            }),
            ot.createElement(D, x)
          )
        );
      });
      return (
        (_.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof l == "string"
                ? l
                : l.displayName || l.name || "Component") +
              ")"),
        (_.defaultProps = n.defaultProps),
        (_.__emotion_real = _),
        (_.__emotion_base = l),
        (_.__emotion_styles = y),
        (_.__emotion_forwardProp = d),
        Object.defineProperty(_, "toString", {
          value: function () {
            return "." + c;
          },
        }),
        (_.withComponent = function (E, w) {
          var z = u(E, H0({}, a, w, { shouldForwardProp: __(_, w, !0) }));
          return z.apply(void 0, y);
        }),
        _
      );
    };
  },
  fC = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  G0 = oC.bind(null);
fC.forEach(function (u) {
  G0[u] = G0(u);
});
function cC(u) {
  return u == null || Object.keys(u).length === 0;
}
function Yv(u) {
  const { styles: n, defaultTheme: a = {} } = u,
    i = typeof n == "function" ? (l) => n(cC(l) ? a : l) : n;
  return At.jsx(iC, { styles: i });
}
function dC(u, n) {
  return G0(u, n);
}
var g0 = { exports: {} },
  fe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var v_;
function hC() {
  if (v_) return fe;
  v_ = 1;
  var u = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    g = Symbol.for("react.suspense_list"),
    m = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    b = Symbol.for("react.view_transition"),
    S = Symbol.for("react.client.reference");
  function C(_) {
    if (typeof _ == "object" && _ !== null) {
      var E = _.$$typeof;
      switch (E) {
        case u:
          switch (((_ = _.type), _)) {
            case a:
            case l:
            case i:
            case p:
            case g:
            case b:
              return _;
            default:
              switch (((_ = _ && _.$$typeof), _)) {
                case c:
                case d:
                case y:
                case m:
                  return _;
                case o:
                  return _;
                default:
                  return E;
              }
          }
        case n:
          return E;
      }
    }
  }
  return (
    (fe.ContextConsumer = o),
    (fe.ContextProvider = c),
    (fe.Element = u),
    (fe.ForwardRef = d),
    (fe.Fragment = a),
    (fe.Lazy = y),
    (fe.Memo = m),
    (fe.Portal = n),
    (fe.Profiler = l),
    (fe.StrictMode = i),
    (fe.Suspense = p),
    (fe.SuspenseList = g),
    (fe.isContextConsumer = function (_) {
      return C(_) === o;
    }),
    (fe.isContextProvider = function (_) {
      return C(_) === c;
    }),
    (fe.isElement = function (_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === u;
    }),
    (fe.isForwardRef = function (_) {
      return C(_) === d;
    }),
    (fe.isFragment = function (_) {
      return C(_) === a;
    }),
    (fe.isLazy = function (_) {
      return C(_) === y;
    }),
    (fe.isMemo = function (_) {
      return C(_) === m;
    }),
    (fe.isPortal = function (_) {
      return C(_) === n;
    }),
    (fe.isProfiler = function (_) {
      return C(_) === l;
    }),
    (fe.isStrictMode = function (_) {
      return C(_) === i;
    }),
    (fe.isSuspense = function (_) {
      return C(_) === p;
    }),
    (fe.isSuspenseList = function (_) {
      return C(_) === g;
    }),
    (fe.isValidElementType = function (_) {
      return (
        typeof _ == "string" ||
        typeof _ == "function" ||
        _ === a ||
        _ === l ||
        _ === i ||
        _ === p ||
        _ === g ||
        (typeof _ == "object" &&
          _ !== null &&
          (_.$$typeof === y ||
            _.$$typeof === m ||
            _.$$typeof === c ||
            _.$$typeof === o ||
            _.$$typeof === d ||
            _.$$typeof === S ||
            _.getModuleId !== void 0))
      );
    }),
    (fe.typeOf = C),
    fe
  );
}
var b_;
function gC() {
  return b_ || ((b_ = 1), (g0.exports = hC())), g0.exports;
}
var qv = gC();
function Zr(u) {
  if (typeof u != "object" || u === null) return !1;
  const n = Object.getPrototypeOf(u);
  return (
    (n === null ||
      n === Object.prototype ||
      Object.getPrototypeOf(n) === null) &&
    !(Symbol.toStringTag in u) &&
    !(Symbol.iterator in u)
  );
}
function Xv(u) {
  if (ot.isValidElement(u) || qv.isValidElementType(u) || !Zr(u)) return u;
  const n = {};
  return (
    Object.keys(u).forEach((a) => {
      n[a] = Xv(u[a]);
    }),
    n
  );
}
function Oi(u, n, a = { clone: !0 }) {
  const i = a.clone ? { ...u } : u;
  return (
    Zr(u) &&
      Zr(n) &&
      Object.keys(n).forEach((l) => {
        ot.isValidElement(n[l]) || qv.isValidElementType(n[l])
          ? (i[l] = n[l])
          : Zr(n[l]) && Object.prototype.hasOwnProperty.call(u, l) && Zr(u[l])
          ? (i[l] = Oi(u[l], n[l], a))
          : a.clone
          ? (i[l] = Zr(n[l]) ? Xv(n[l]) : n[l])
          : (i[l] = n[l]);
      }),
    i
  );
}
const pC = (u) => {
  const n = Object.keys(u).map((a) => ({ key: a, val: u[a] })) || [];
  return (
    n.sort((a, i) => a.val - i.val),
    n.reduce((a, i) => ({ ...a, [i.key]: i.val }), {})
  );
};
function mC(u) {
  const {
      values: n = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: a = "px",
      step: i = 5,
      ...l
    } = u,
    o = pC(n),
    c = Object.keys(o);
  function d(b) {
    return `@media (min-width:${typeof n[b] == "number" ? n[b] : b}${a})`;
  }
  function p(b) {
    return `@media (max-width:${
      (typeof n[b] == "number" ? n[b] : b) - i / 100
    }${a})`;
  }
  function g(b, S) {
    const C = c.indexOf(S);
    return `@media (min-width:${
      typeof n[b] == "number" ? n[b] : b
    }${a}) and (max-width:${
      (C !== -1 && typeof n[c[C]] == "number" ? n[c[C]] : S) - i / 100
    }${a})`;
  }
  function m(b) {
    return c.indexOf(b) + 1 < c.length ? g(b, c[c.indexOf(b) + 1]) : d(b);
  }
  function y(b) {
    const S = c.indexOf(b);
    return S === 0
      ? d(c[1])
      : S === c.length - 1
      ? p(c[S])
      : g(b, c[c.indexOf(b) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: c,
    values: o,
    up: d,
    down: p,
    between: g,
    only: m,
    not: y,
    unit: a,
    ...l,
  };
}
function yC(u, n) {
  if (!u.containerQueries) return n;
  const a = Object.keys(n)
    .filter((i) => i.startsWith("@container"))
    .sort((i, l) => {
      var c, d;
      const o = /min-width:\s*([0-9.]+)/;
      return (
        +(((c = i.match(o)) == null ? void 0 : c[1]) || 0) -
        +(((d = l.match(o)) == null ? void 0 : d[1]) || 0)
      );
    });
  return a.length
    ? a.reduce(
        (i, l) => {
          const o = n[l];
          return delete i[l], (i[l] = o), i;
        },
        { ...n }
      )
    : n;
}
function _C(u, n) {
  return (
    n === "@" ||
    (n.startsWith("@") &&
      (u.some((a) => n.startsWith(`@${a}`)) || !!n.match(/^@\d/)))
  );
}
function vC(u, n) {
  const a = n.match(/^@([^/]+)?\/?(.+)?$/);
  if (!a) return null;
  const [, i, l] = a,
    o = Number.isNaN(+i) ? i || 0 : +i;
  return u.containerQueries(l).up(o);
}
function bC(u) {
  const n = (o, c) => o.replace("@media", c ? `@container ${c}` : "@container");
  function a(o, c) {
    (o.up = (...d) => n(u.breakpoints.up(...d), c)),
      (o.down = (...d) => n(u.breakpoints.down(...d), c)),
      (o.between = (...d) => n(u.breakpoints.between(...d), c)),
      (o.only = (...d) => n(u.breakpoints.only(...d), c)),
      (o.not = (...d) => {
        const p = n(u.breakpoints.not(...d), c);
        return p.includes("not all and")
          ? p
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : p;
      });
  }
  const i = {},
    l = (o) => (a(i, o), i);
  return a(l), { ...u, containerQueries: l };
}
const SC = { borderRadius: 4 };
function Js(u, n) {
  return n ? Oi(u, n, { clone: !1 }) : u;
}
const Gc = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  S_ = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (u) => `@media (min-width:${Gc[u]}px)`,
  },
  xC = {
    containerQueries: (u) => ({
      up: (n) => {
        let a = typeof n == "number" ? n : Gc[n] || n;
        return (
          typeof a == "number" && (a = `${a}px`),
          u ? `@container ${u} (min-width:${a})` : `@container (min-width:${a})`
        );
      },
    }),
  };
function ta(u, n, a) {
  const i = u.theme || {};
  if (Array.isArray(n)) {
    const o = i.breakpoints || S_;
    return n.reduce((c, d, p) => ((c[o.up(o.keys[p])] = a(n[p])), c), {});
  }
  if (typeof n == "object") {
    const o = i.breakpoints || S_;
    return Object.keys(n).reduce((c, d) => {
      if (_C(o.keys, d)) {
        const p = vC(i.containerQueries ? i : xC, d);
        p && (c[p] = a(n[d], d));
      } else if (Object.keys(o.values || Gc).includes(d)) {
        const p = o.up(d);
        c[p] = a(n[d], d);
      } else {
        const p = d;
        c[p] = n[p];
      }
      return c;
    }, {});
  }
  return a(n);
}
function TC(u = {}) {
  var a;
  return (
    ((a = u.keys) == null
      ? void 0
      : a.reduce((i, l) => {
          const o = u.up(l);
          return (i[o] = {}), i;
        }, {})) || {}
  );
}
function CC(u, n) {
  return u.reduce((a, i) => {
    const l = a[i];
    return (!l || Object.keys(l).length === 0) && delete a[i], a;
  }, n);
}
function Gv(u) {
  if (typeof u != "string") throw new Error(bl(7));
  return u.charAt(0).toUpperCase() + u.slice(1);
}
function jc(u, n, a = !0) {
  if (!n || typeof n != "string") return null;
  if (u && u.vars && a) {
    const i = `vars.${n}`
      .split(".")
      .reduce((l, o) => (l && l[o] ? l[o] : null), u);
    if (i != null) return i;
  }
  return n.split(".").reduce((i, l) => (i && i[l] != null ? i[l] : null), u);
}
function Sc(u, n, a, i = a) {
  let l;
  return (
    typeof u == "function"
      ? (l = u(a))
      : Array.isArray(u)
      ? (l = u[a] || i)
      : (l = jc(u, a) || i),
    n && (l = n(l, i, u)),
    l
  );
}
function $e(u) {
  const { prop: n, cssProperty: a = u.prop, themeKey: i, transform: l } = u,
    o = (c) => {
      if (c[n] == null) return null;
      const d = c[n],
        p = c.theme,
        g = jc(p, i) || {};
      return ta(c, d, (y) => {
        let b = Sc(g, l, y);
        return (
          y === b &&
            typeof y == "string" &&
            (b = Sc(g, l, `${n}${y === "default" ? "" : Gv(y)}`, y)),
          a === !1 ? b : { [a]: b }
        );
      });
    };
  return (o.propTypes = {}), (o.filterProps = [n]), o;
}
function AC(u) {
  const n = {};
  return (a) => (n[a] === void 0 && (n[a] = u(a)), n[a]);
}
const EC = { m: "margin", p: "padding" },
  OC = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  x_ = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  MC = AC((u) => {
    if (u.length > 2)
      if (x_[u]) u = x_[u];
      else return [u];
    const [n, a] = u.split(""),
      i = EC[n],
      l = OC[a] || "";
    return Array.isArray(l) ? l.map((o) => i + o) : [i + l];
  }),
  zg = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Ng = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...zg, ...Ng];
function Oo(u, n, a, i) {
  const l = jc(u, n, !0) ?? a;
  return typeof l == "number" || typeof l == "string"
    ? (o) =>
        typeof o == "string"
          ? o
          : typeof l == "string"
          ? l.startsWith("var(") && o === 0
            ? 0
            : l.startsWith("var(") && o === 1
            ? l
            : `calc(${o} * ${l})`
          : l * o
    : Array.isArray(l)
    ? (o) => {
        if (typeof o == "string") return o;
        const c = Math.abs(o),
          d = l[c];
        return o >= 0
          ? d
          : typeof d == "number"
          ? -d
          : typeof d == "string" && d.startsWith("var(")
          ? `calc(-1 * ${d})`
          : `-${d}`;
      }
    : typeof l == "function"
    ? l
    : () => {};
}
function Bg(u) {
  return Oo(u, "spacing", 8);
}
function Mo(u, n) {
  return typeof n == "string" || n == null ? n : u(n);
}
function wC(u, n) {
  return (a) => u.reduce((i, l) => ((i[l] = Mo(n, a)), i), {});
}
function RC(u, n, a, i) {
  if (!n.includes(a)) return null;
  const l = MC(a),
    o = wC(l, i),
    c = u[a];
  return ta(u, c, o);
}
function jv(u, n) {
  const a = Bg(u.theme);
  return Object.keys(u)
    .map((i) => RC(u, n, i, a))
    .reduce(Js, {});
}
function Ue(u) {
  return jv(u, zg);
}
Ue.propTypes = {};
Ue.filterProps = zg;
function Le(u) {
  return jv(u, Ng);
}
Le.propTypes = {};
Le.filterProps = Ng;
function Vv(u = 8, n = Bg({ spacing: u })) {
  if (u.mui) return u;
  const a = (...i) =>
    (i.length === 0 ? [1] : i)
      .map((o) => {
        const c = n(o);
        return typeof c == "number" ? `${c}px` : c;
      })
      .join(" ");
  return (a.mui = !0), a;
}
function Vc(...u) {
  const n = u.reduce(
      (i, l) => (
        l.filterProps.forEach((o) => {
          i[o] = l;
        }),
        i
      ),
      {}
    ),
    a = (i) => Object.keys(i).reduce((l, o) => (n[o] ? Js(l, n[o](i)) : l), {});
  return (
    (a.propTypes = {}),
    (a.filterProps = u.reduce((i, l) => i.concat(l.filterProps), [])),
    a
  );
}
function $i(u) {
  return typeof u != "number" ? u : `${u}px solid`;
}
function Ii(u, n) {
  return $e({ prop: u, themeKey: "borders", transform: n });
}
const DC = Ii("border", $i),
  zC = Ii("borderTop", $i),
  NC = Ii("borderRight", $i),
  BC = Ii("borderBottom", $i),
  kC = Ii("borderLeft", $i),
  UC = Ii("borderColor"),
  LC = Ii("borderTopColor"),
  HC = Ii("borderRightColor"),
  YC = Ii("borderBottomColor"),
  qC = Ii("borderLeftColor"),
  XC = Ii("outline", $i),
  GC = Ii("outlineColor"),
  $c = (u) => {
    if (u.borderRadius !== void 0 && u.borderRadius !== null) {
      const n = Oo(u.theme, "shape.borderRadius", 4),
        a = (i) => ({ borderRadius: Mo(n, i) });
      return ta(u, u.borderRadius, a);
    }
    return null;
  };
$c.propTypes = {};
$c.filterProps = ["borderRadius"];
Vc(DC, zC, NC, BC, kC, UC, LC, HC, YC, qC, $c, XC, GC);
const Qc = (u) => {
  if (u.gap !== void 0 && u.gap !== null) {
    const n = Oo(u.theme, "spacing", 8),
      a = (i) => ({ gap: Mo(n, i) });
    return ta(u, u.gap, a);
  }
  return null;
};
Qc.propTypes = {};
Qc.filterProps = ["gap"];
const Zc = (u) => {
  if (u.columnGap !== void 0 && u.columnGap !== null) {
    const n = Oo(u.theme, "spacing", 8),
      a = (i) => ({ columnGap: Mo(n, i) });
    return ta(u, u.columnGap, a);
  }
  return null;
};
Zc.propTypes = {};
Zc.filterProps = ["columnGap"];
const Kc = (u) => {
  if (u.rowGap !== void 0 && u.rowGap !== null) {
    const n = Oo(u.theme, "spacing", 8),
      a = (i) => ({ rowGap: Mo(n, i) });
    return ta(u, u.rowGap, a);
  }
  return null;
};
Kc.propTypes = {};
Kc.filterProps = ["rowGap"];
const jC = $e({ prop: "gridColumn" }),
  VC = $e({ prop: "gridRow" }),
  $C = $e({ prop: "gridAutoFlow" }),
  QC = $e({ prop: "gridAutoColumns" }),
  ZC = $e({ prop: "gridAutoRows" }),
  KC = $e({ prop: "gridTemplateColumns" }),
  PC = $e({ prop: "gridTemplateRows" }),
  JC = $e({ prop: "gridTemplateAreas" }),
  FC = $e({ prop: "gridArea" });
Vc(Qc, Zc, Kc, jC, VC, $C, QC, ZC, KC, PC, JC, FC);
function Su(u, n) {
  return n === "grey" ? n : u;
}
const WC = $e({ prop: "color", themeKey: "palette", transform: Su }),
  IC = $e({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Su,
  }),
  t3 = $e({ prop: "backgroundColor", themeKey: "palette", transform: Su });
Vc(WC, IC, t3);
function xi(u) {
  return u <= 1 && u !== 0 ? `${u * 100}%` : u;
}
const e3 = $e({ prop: "width", transform: xi }),
  kg = (u) => {
    if (u.maxWidth !== void 0 && u.maxWidth !== null) {
      const n = (a) => {
        var l, o, c, d, p;
        const i =
          ((c =
            (o = (l = u.theme) == null ? void 0 : l.breakpoints) == null
              ? void 0
              : o.values) == null
            ? void 0
            : c[a]) || Gc[a];
        return i
          ? ((p = (d = u.theme) == null ? void 0 : d.breakpoints) == null
              ? void 0
              : p.unit) !== "px"
            ? { maxWidth: `${i}${u.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: xi(a) };
      };
      return ta(u, u.maxWidth, n);
    }
    return null;
  };
kg.filterProps = ["maxWidth"];
const n3 = $e({ prop: "minWidth", transform: xi }),
  i3 = $e({ prop: "height", transform: xi }),
  r3 = $e({ prop: "maxHeight", transform: xi }),
  a3 = $e({ prop: "minHeight", transform: xi });
$e({ prop: "size", cssProperty: "width", transform: xi });
$e({ prop: "size", cssProperty: "height", transform: xi });
const l3 = $e({ prop: "boxSizing" });
Vc(e3, kg, n3, i3, r3, a3, l3);
const wo = {
  border: { themeKey: "borders", transform: $i },
  borderTop: { themeKey: "borders", transform: $i },
  borderRight: { themeKey: "borders", transform: $i },
  borderBottom: { themeKey: "borders", transform: $i },
  borderLeft: { themeKey: "borders", transform: $i },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: $i },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: $c },
  color: { themeKey: "palette", transform: Su },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Su,
  },
  backgroundColor: { themeKey: "palette", transform: Su },
  p: { style: Le },
  pt: { style: Le },
  pr: { style: Le },
  pb: { style: Le },
  pl: { style: Le },
  px: { style: Le },
  py: { style: Le },
  padding: { style: Le },
  paddingTop: { style: Le },
  paddingRight: { style: Le },
  paddingBottom: { style: Le },
  paddingLeft: { style: Le },
  paddingX: { style: Le },
  paddingY: { style: Le },
  paddingInline: { style: Le },
  paddingInlineStart: { style: Le },
  paddingInlineEnd: { style: Le },
  paddingBlock: { style: Le },
  paddingBlockStart: { style: Le },
  paddingBlockEnd: { style: Le },
  m: { style: Ue },
  mt: { style: Ue },
  mr: { style: Ue },
  mb: { style: Ue },
  ml: { style: Ue },
  mx: { style: Ue },
  my: { style: Ue },
  margin: { style: Ue },
  marginTop: { style: Ue },
  marginRight: { style: Ue },
  marginBottom: { style: Ue },
  marginLeft: { style: Ue },
  marginX: { style: Ue },
  marginY: { style: Ue },
  marginInline: { style: Ue },
  marginInlineStart: { style: Ue },
  marginInlineEnd: { style: Ue },
  marginBlock: { style: Ue },
  marginBlockStart: { style: Ue },
  marginBlockEnd: { style: Ue },
  displayPrint: {
    cssProperty: !1,
    transform: (u) => ({ "@media print": { display: u } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Qc },
  rowGap: { style: Kc },
  columnGap: { style: Zc },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: xi },
  maxWidth: { style: kg },
  minWidth: { transform: xi },
  height: { transform: xi },
  maxHeight: { transform: xi },
  minHeight: { transform: xi },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function u3(...u) {
  const n = u.reduce((i, l) => i.concat(Object.keys(l)), []),
    a = new Set(n);
  return u.every((i) => a.size === Object.keys(i).length);
}
function s3(u, n) {
  return typeof u == "function" ? u(n) : u;
}
function o3() {
  function u(a, i, l, o) {
    const c = { [a]: i, theme: l },
      d = o[a];
    if (!d) return { [a]: i };
    const { cssProperty: p = a, themeKey: g, transform: m, style: y } = d;
    if (i == null) return null;
    if (g === "typography" && i === "inherit") return { [a]: i };
    const b = jc(l, g) || {};
    return y
      ? y(c)
      : ta(c, i, (C) => {
          let _ = Sc(b, m, C);
          return (
            C === _ &&
              typeof C == "string" &&
              (_ = Sc(b, m, `${a}${C === "default" ? "" : Gv(C)}`, C)),
            p === !1 ? _ : { [p]: _ }
          );
        });
  }
  function n(a) {
    const { sx: i, theme: l = {} } = a || {};
    if (!i) return null;
    const o = l.unstable_sxConfig ?? wo;
    function c(d) {
      let p = d;
      if (typeof d == "function") p = d(l);
      else if (typeof d != "object") return d;
      if (!p) return null;
      const g = TC(l.breakpoints),
        m = Object.keys(g);
      let y = g;
      return (
        Object.keys(p).forEach((b) => {
          const S = s3(p[b], l);
          if (S != null)
            if (typeof S == "object")
              if (o[b]) y = Js(y, u(b, S, l, o));
              else {
                const C = ta({ theme: l }, S, (_) => ({ [b]: _ }));
                u3(C, S) ? (y[b] = n({ sx: S, theme: l })) : (y = Js(y, C));
              }
            else y = Js(y, u(b, S, l, o));
        }),
        yC(l, CC(m, y))
      );
    }
    return Array.isArray(i) ? i.map(c) : c(i);
  }
  return n;
}
const Hu = o3();
Hu.filterProps = ["sx"];
function f3(u, n) {
  var i;
  const a = this;
  if (a.vars) {
    if (
      !((i = a.colorSchemes) != null && i[u]) ||
      typeof a.getColorSchemeSelector != "function"
    )
      return {};
    let l = a.getColorSchemeSelector(u);
    return l === "&"
      ? n
      : ((l.includes("data-") || l.includes(".")) &&
          (l = `*:where(${l.replace(/\s*&$/, "")}) &`),
        { [l]: n });
  }
  return a.palette.mode === u ? n : {};
}
function $v(u = {}, ...n) {
  const {
      breakpoints: a = {},
      palette: i = {},
      spacing: l,
      shape: o = {},
      ...c
    } = u,
    d = mC(a),
    p = Vv(l);
  let g = Oi(
    {
      breakpoints: d,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...i },
      spacing: p,
      shape: { ...SC, ...o },
    },
    c
  );
  return (
    (g = bC(g)),
    (g.applyStyles = f3),
    (g = n.reduce((m, y) => Oi(m, y), g)),
    (g.unstable_sxConfig = {
      ...wo,
      ...(c == null ? void 0 : c.unstable_sxConfig),
    }),
    (g.unstable_sx = function (y) {
      return Hu({ sx: y, theme: this });
    }),
    g
  );
}
function c3(u) {
  return Object.keys(u).length === 0;
}
function Ug(u = null) {
  const n = ot.useContext(Eo);
  return !n || c3(n) ? u : n;
}
const d3 = $v();
function Qv(u = d3) {
  return Ug(u);
}
function h3({ styles: u, themeId: n, defaultTheme: a = {} }) {
  const i = Qv(a),
    l = typeof u == "function" ? u((n && i[n]) || i) : u;
  return At.jsx(Yv, { styles: l });
}
const g3 = (u) => {
  var i;
  const n = { systemProps: {}, otherProps: {} },
    a =
      ((i = u == null ? void 0 : u.theme) == null
        ? void 0
        : i.unstable_sxConfig) ?? wo;
  return (
    Object.keys(u).forEach((l) => {
      a[l] ? (n.systemProps[l] = u[l]) : (n.otherProps[l] = u[l]);
    }),
    n
  );
};
function p3(u) {
  const { sx: n, ...a } = u,
    { systemProps: i, otherProps: l } = g3(a);
  let o;
  return (
    Array.isArray(n)
      ? (o = [i, ...n])
      : typeof n == "function"
      ? (o = (...c) => {
          const d = n(...c);
          return Zr(d) ? { ...i, ...d } : i;
        })
      : (o = { ...i, ...n }),
    { ...l, sx: o }
  );
}
const T_ = (u) => u,
  m3 = () => {
    let u = T_;
    return {
      configure(n) {
        u = n;
      },
      generate(n) {
        return u(n);
      },
      reset() {
        u = T_;
      },
    };
  },
  Zv = m3();
function Kv(u) {
  var n,
    a,
    i = "";
  if (typeof u == "string" || typeof u == "number") i += u;
  else if (typeof u == "object")
    if (Array.isArray(u)) {
      var l = u.length;
      for (n = 0; n < l; n++)
        u[n] && (a = Kv(u[n])) && (i && (i += " "), (i += a));
    } else for (a in u) u[a] && (i && (i += " "), (i += a));
  return i;
}
function y3() {
  for (var u, n, a = 0, i = "", l = arguments.length; a < l; a++)
    (u = arguments[a]) && (n = Kv(u)) && (i && (i += " "), (i += n));
  return i;
}
function _3(u = {}) {
  const {
      themeId: n,
      defaultTheme: a,
      defaultClassName: i = "MuiBox-root",
      generateClassName: l,
    } = u,
    o = dC("div", {
      shouldForwardProp: (d) => d !== "theme" && d !== "sx" && d !== "as",
    })(Hu);
  return ot.forwardRef(function (p, g) {
    const m = Qv(a),
      { className: y, component: b = "div", ...S } = p3(p);
    return At.jsx(o, {
      as: b,
      ref: g,
      className: y3(y, l ? l(i) : i),
      theme: (n && m[n]) || m,
      ...S,
    });
  });
}
const v3 = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function b3(u, n, a = "Mui") {
  const i = v3[n];
  return i ? `${a}-${i}` : `${Zv.generate(u)}-${n}`;
}
function S3(u, n, a = "Mui") {
  const i = {};
  return (
    n.forEach((l) => {
      i[l] = b3(u, l, a);
    }),
    i
  );
}
function xc(u, n) {
  const a = { ...n };
  for (const i in u)
    if (Object.prototype.hasOwnProperty.call(u, i)) {
      const l = i;
      if (l === "components" || l === "slots") a[l] = { ...u[l], ...a[l] };
      else if (l === "componentsProps" || l === "slotProps") {
        const o = u[l],
          c = n[l];
        if (!c) a[l] = o || {};
        else if (!o) a[l] = c;
        else {
          a[l] = { ...c };
          for (const d in o)
            if (Object.prototype.hasOwnProperty.call(o, d)) {
              const p = d;
              a[l][p] = xc(o[p], c[p]);
            }
        }
      } else a[l] === void 0 && (a[l] = u[l]);
    }
  return a;
}
function x3(u) {
  const { theme: n, name: a, props: i } = u;
  return !n ||
    !n.components ||
    !n.components[a] ||
    !n.components[a].defaultProps
    ? i
    : xc(n.components[a].defaultProps, i);
}
const Pv = typeof window < "u" ? ot.useLayoutEffect : ot.useEffect;
function T3(u, n, a, i, l) {
  const [o, c] = ot.useState(() =>
    l && a ? a(u).matches : i ? i(u).matches : n
  );
  return (
    Pv(() => {
      if (!a) return;
      const d = a(u),
        p = () => {
          c(d.matches);
        };
      return (
        p(),
        d.addEventListener("change", p),
        () => {
          d.removeEventListener("change", p);
        }
      );
    }, [u, a]),
    o
  );
}
const C3 = { ...L0 },
  Jv = C3.useSyncExternalStore;
function A3(u, n, a, i, l) {
  const o = ot.useCallback(() => n, [n]),
    c = ot.useMemo(() => {
      if (l && a) return () => a(u).matches;
      if (i !== null) {
        const { matches: m } = i(u);
        return () => m;
      }
      return o;
    }, [o, u, i, l, a]),
    [d, p] = ot.useMemo(() => {
      if (a === null) return [o, () => () => {}];
      const m = a(u);
      return [
        () => m.matches,
        (y) => (
          m.addEventListener("change", y),
          () => {
            m.removeEventListener("change", y);
          }
        ),
      ];
    }, [o, a, u]);
  return Jv(p, d, c);
}
function Fv(u = {}) {
  const { themeId: n } = u;
  return function (i, l = {}) {
    let o = Ug();
    o && n && (o = o[n] || o);
    const c = typeof window < "u" && typeof window.matchMedia < "u",
      {
        defaultMatches: d = !1,
        matchMedia: p = c ? window.matchMedia : null,
        ssrMatchMedia: g = null,
        noSsr: m = !1,
      } = x3({ name: "MuiUseMediaQuery", props: l, theme: o });
    let y = typeof i == "function" ? i(o) : i;
    return (
      (y = y.replace(/^@media( ?)/m, "")),
      y.includes("print") &&
        console.warn(
          [
            "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
            "Using the print media query to modify print styles can lead to unexpected results.",
            "Consider using the `displayPrint` field in the `sx` prop instead.",
            "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print.",
          ].join(`
`)
        ),
      (Jv !== void 0 ? A3 : T3)(y, d, p, g, m)
    );
  };
}
Fv();
function E3(u, n = Number.MIN_SAFE_INTEGER, a = Number.MAX_SAFE_INTEGER) {
  return Math.max(n, Math.min(u, a));
}
function Lg(u, n = 0, a = 1) {
  return E3(u, n, a);
}
function O3(u) {
  u = u.slice(1);
  const n = new RegExp(`.{1,${u.length >= 6 ? 2 : 1}}`, "g");
  let a = u.match(n);
  return (
    a && a[0].length === 1 && (a = a.map((i) => i + i)),
    a
      ? `rgb${a.length === 4 ? "a" : ""}(${a
          .map((i, l) =>
            l < 3
              ? parseInt(i, 16)
              : Math.round((parseInt(i, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Ua(u) {
  if (u.type) return u;
  if (u.charAt(0) === "#") return Ua(O3(u));
  const n = u.indexOf("("),
    a = u.substring(0, n);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(a))
    throw new Error(bl(9, u));
  let i = u.substring(n + 1, u.length - 1),
    l;
  if (a === "color") {
    if (
      ((i = i.split(" ")),
      (l = i.shift()),
      i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        l
      ))
    )
      throw new Error(bl(10, l));
  } else i = i.split(",");
  return (
    (i = i.map((o) => parseFloat(o))), { type: a, values: i, colorSpace: l }
  );
}
const M3 = (u) => {
    const n = Ua(u);
    return n.values
      .slice(0, 3)
      .map((a, i) => (n.type.includes("hsl") && i !== 0 ? `${a}%` : a))
      .join(" ");
  },
  Ys = (u, n) => {
    try {
      return M3(u);
    } catch {
      return u;
    }
  };
function Pc(u) {
  const { type: n, colorSpace: a } = u;
  let { values: i } = u;
  return (
    n.includes("rgb")
      ? (i = i.map((l, o) => (o < 3 ? parseInt(l, 10) : l)))
      : n.includes("hsl") && ((i[1] = `${i[1]}%`), (i[2] = `${i[2]}%`)),
    n.includes("color") ? (i = `${a} ${i.join(" ")}`) : (i = `${i.join(", ")}`),
    `${n}(${i})`
  );
}
function Wv(u) {
  u = Ua(u);
  const { values: n } = u,
    a = n[0],
    i = n[1] / 100,
    l = n[2] / 100,
    o = i * Math.min(l, 1 - l),
    c = (g, m = (g + a / 30) % 12) =>
      l - o * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let d = "rgb";
  const p = [
    Math.round(c(0) * 255),
    Math.round(c(8) * 255),
    Math.round(c(4) * 255),
  ];
  return (
    u.type === "hsla" && ((d += "a"), p.push(n[3])), Pc({ type: d, values: p })
  );
}
function j0(u) {
  u = Ua(u);
  let n = u.type === "hsl" || u.type === "hsla" ? Ua(Wv(u)).values : u.values;
  return (
    (n = n.map(
      (a) => (
        u.type !== "color" && (a /= 255),
        a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]).toFixed(3))
  );
}
function w3(u, n) {
  const a = j0(u),
    i = j0(n);
  return (Math.max(a, i) + 0.05) / (Math.min(a, i) + 0.05);
}
function R3(u, n) {
  return (
    (u = Ua(u)),
    (n = Lg(n)),
    (u.type === "rgb" || u.type === "hsl") && (u.type += "a"),
    u.type === "color" ? (u.values[3] = `/${n}`) : (u.values[3] = n),
    Pc(u)
  );
}
function Xf(u, n, a) {
  try {
    return R3(u, n);
  } catch {
    return u;
  }
}
function Hg(u, n) {
  if (((u = Ua(u)), (n = Lg(n)), u.type.includes("hsl"))) u.values[2] *= 1 - n;
  else if (u.type.includes("rgb") || u.type.includes("color"))
    for (let a = 0; a < 3; a += 1) u.values[a] *= 1 - n;
  return Pc(u);
}
function de(u, n, a) {
  try {
    return Hg(u, n);
  } catch {
    return u;
  }
}
function Yg(u, n) {
  if (((u = Ua(u)), (n = Lg(n)), u.type.includes("hsl")))
    u.values[2] += (100 - u.values[2]) * n;
  else if (u.type.includes("rgb"))
    for (let a = 0; a < 3; a += 1) u.values[a] += (255 - u.values[a]) * n;
  else if (u.type.includes("color"))
    for (let a = 0; a < 3; a += 1) u.values[a] += (1 - u.values[a]) * n;
  return Pc(u);
}
function he(u, n, a) {
  try {
    return Yg(u, n);
  } catch {
    return u;
  }
}
function D3(u, n = 0.15) {
  return j0(u) > 0.5 ? Hg(u, n) : Yg(u, n);
}
function Gf(u, n, a) {
  try {
    return D3(u, n);
  } catch {
    return u;
  }
}
const Iv = ot.createContext(null);
function qg() {
  return ot.useContext(Iv);
}
const z3 = typeof Symbol == "function" && Symbol.for,
  N3 = z3 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function B3(u, n) {
  return typeof n == "function" ? n(u) : { ...u, ...n };
}
function k3(u) {
  const { children: n, theme: a } = u,
    i = qg(),
    l = ot.useMemo(() => {
      const o = i === null ? { ...a } : B3(i, a);
      return o != null && (o[N3] = i !== null), o;
    }, [a, i]);
  return At.jsx(Iv.Provider, { value: l, children: n });
}
const U3 = ot.createContext();
function L3({ value: u, ...n }) {
  return At.jsx(U3.Provider, { value: u ?? !0, ...n });
}
const tb = ot.createContext(void 0);
function H3({ value: u, children: n }) {
  return At.jsx(tb.Provider, { value: u, children: n });
}
function Y3(u) {
  const { theme: n, name: a, props: i } = u;
  if (!n || !n.components || !n.components[a]) return i;
  const l = n.components[a];
  return l.defaultProps
    ? xc(l.defaultProps, i)
    : !l.styleOverrides && !l.variants
    ? xc(l, i)
    : i;
}
function q3({ props: u, name: n }) {
  const a = ot.useContext(tb);
  return Y3({ props: u, name: n, theme: { components: a } });
}
const C_ = {};
function A_(u, n, a, i = !1) {
  return ot.useMemo(() => {
    const l = (u && n[u]) || n;
    if (typeof a == "function") {
      const o = a(l),
        c = u ? { ...n, [u]: o } : o;
      return i ? () => c : c;
    }
    return u ? { ...n, [u]: a } : { ...n, ...a };
  }, [u, n, a, i]);
}
function eb(u) {
  const { children: n, theme: a, themeId: i } = u,
    l = Ug(C_),
    o = qg() || C_,
    c = A_(i, l, a),
    d = A_(i, o, a, !0),
    p = (i ? c[i] : c).direction === "rtl";
  return At.jsx(k3, {
    theme: d,
    children: At.jsx(Eo.Provider, {
      value: c,
      children: At.jsx(L3, {
        value: p,
        children: At.jsx(H3, {
          value: i ? c[i].components : c.components,
          children: n,
        }),
      }),
    }),
  });
}
const Xg = "mode",
  Gg = "color-scheme",
  X3 = "data-color-scheme";
function G3(u) {
  const {
    defaultMode: n = "system",
    defaultLightColorScheme: a = "light",
    defaultDarkColorScheme: i = "dark",
    modeStorageKey: l = Xg,
    colorSchemeStorageKey: o = Gg,
    attribute: c = X3,
    colorSchemeNode: d = "document.documentElement",
    nonce: p,
  } = u || {};
  let g = "",
    m = c;
  if (
    (c === "class" && (m = ".%s"),
    c === "data" && (m = "[data-%s]"),
    m.startsWith("."))
  ) {
    const b = m.substring(1);
    g += `${d}.classList.remove('${b}'.replace('%s', light), '${b}'.replace('%s', dark));
      ${d}.classList.add('${b}'.replace('%s', colorScheme));`;
  }
  const y = m.match(/\[([^\]]+)\]/);
  if (y) {
    const [b, S] = y[1].split("=");
    S ||
      (g += `${d}.removeAttribute('${b}'.replace('%s', light));
      ${d}.removeAttribute('${b}'.replace('%s', dark));`),
      (g += `
      ${d}.setAttribute('${b}'.replace('%s', colorScheme), ${
        S ? `${S}.replace('%s', colorScheme)` : '""'
      });`);
  } else g += `${d}.setAttribute('${m}', colorScheme);`;
  return At.jsx(
    "script",
    {
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? p : "",
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${l}') || '${n}';
  const dark = localStorage.getItem('${o}-dark') || '${i}';
  const light = localStorage.getItem('${o}-light') || '${a}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${g}
  }
} catch(e){}})();`,
      },
    },
    "mui-color-scheme-init"
  );
}
function j3() {}
const V3 = ({ key: u, storageWindow: n }) => (
  !n && typeof window < "u" && (n = window),
  {
    get(a) {
      if (typeof window > "u") return;
      if (!n) return a;
      let i;
      try {
        i = n.localStorage.getItem(u);
      } catch {}
      return i || a;
    },
    set: (a) => {
      if (n)
        try {
          n.localStorage.setItem(u, a);
        } catch {}
    },
    subscribe: (a) => {
      if (!n) return j3;
      const i = (l) => {
        const o = l.newValue;
        l.key === u && a(o);
      };
      return (
        n.addEventListener("storage", i),
        () => {
          n.removeEventListener("storage", i);
        }
      );
    },
  }
);
function p0() {}
function E_(u) {
  if (
    typeof window < "u" &&
    typeof window.matchMedia == "function" &&
    u === "system"
  )
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}
function nb(u, n) {
  if (u.mode === "light" || (u.mode === "system" && u.systemMode === "light"))
    return n("light");
  if (u.mode === "dark" || (u.mode === "system" && u.systemMode === "dark"))
    return n("dark");
}
function $3(u) {
  return nb(u, (n) => {
    if (n === "light") return u.lightColorScheme;
    if (n === "dark") return u.darkColorScheme;
  });
}
function Q3(u) {
  const {
      defaultMode: n = "light",
      defaultLightColorScheme: a,
      defaultDarkColorScheme: i,
      supportedColorSchemes: l = [],
      modeStorageKey: o = Xg,
      colorSchemeStorageKey: c = Gg,
      storageWindow: d = typeof window > "u" ? void 0 : window,
      storageManager: p = V3,
      noSsr: g = !1,
    } = u,
    m = l.join(","),
    y = l.length > 1,
    b = ot.useMemo(
      () => (p == null ? void 0 : p({ key: o, storageWindow: d })),
      [p, o, d]
    ),
    S = ot.useMemo(
      () => (p == null ? void 0 : p({ key: `${c}-light`, storageWindow: d })),
      [p, c, d]
    ),
    C = ot.useMemo(
      () => (p == null ? void 0 : p({ key: `${c}-dark`, storageWindow: d })),
      [p, c, d]
    ),
    [_, E] = ot.useState(() => {
      const Y = (b == null ? void 0 : b.get(n)) || n,
        U = (S == null ? void 0 : S.get(a)) || a,
        x = (C == null ? void 0 : C.get(i)) || i;
      return {
        mode: Y,
        systemMode: E_(Y),
        lightColorScheme: U,
        darkColorScheme: x,
      };
    }),
    [w, z] = ot.useState(g || !y);
  ot.useEffect(() => {
    z(!0);
  }, []);
  const D = $3(_),
    R = ot.useCallback(
      (Y) => {
        E((U) => {
          if (Y === U.mode) return U;
          const x = Y ?? n;
          return b == null || b.set(x), { ...U, mode: x, systemMode: E_(x) };
        });
      },
      [b, n]
    ),
    O = ot.useCallback(
      (Y) => {
        Y
          ? typeof Y == "string"
            ? Y && !m.includes(Y)
              ? console.error(
                  `\`${Y}\` does not exist in \`theme.colorSchemes\`.`
                )
              : E((U) => {
                  const x = { ...U };
                  return (
                    nb(U, (j) => {
                      j === "light" &&
                        (S == null || S.set(Y), (x.lightColorScheme = Y)),
                        j === "dark" &&
                          (C == null || C.set(Y), (x.darkColorScheme = Y));
                    }),
                    x
                  );
                })
            : E((U) => {
                const x = { ...U },
                  j = Y.light === null ? a : Y.light,
                  Z = Y.dark === null ? i : Y.dark;
                return (
                  j &&
                    (m.includes(j)
                      ? ((x.lightColorScheme = j), S == null || S.set(j))
                      : console.error(
                          `\`${j}\` does not exist in \`theme.colorSchemes\`.`
                        )),
                  Z &&
                    (m.includes(Z)
                      ? ((x.darkColorScheme = Z), C == null || C.set(Z))
                      : console.error(
                          `\`${Z}\` does not exist in \`theme.colorSchemes\`.`
                        )),
                  x
                );
              })
          : E(
              (U) => (
                S == null || S.set(a),
                C == null || C.set(i),
                { ...U, lightColorScheme: a, darkColorScheme: i }
              )
            );
      },
      [m, S, C, a, i]
    ),
    k = ot.useCallback(
      (Y) => {
        _.mode === "system" &&
          E((U) => {
            const x = Y != null && Y.matches ? "dark" : "light";
            return U.systemMode === x ? U : { ...U, systemMode: x };
          });
      },
      [_.mode]
    ),
    N = ot.useRef(k);
  return (
    (N.current = k),
    ot.useEffect(() => {
      if (typeof window.matchMedia != "function" || !y) return;
      const Y = (...x) => N.current(...x),
        U = window.matchMedia("(prefers-color-scheme: dark)");
      return (
        U.addListener(Y),
        Y(U),
        () => {
          U.removeListener(Y);
        }
      );
    }, [y]),
    ot.useEffect(() => {
      if (y) {
        const Y =
            (b == null
              ? void 0
              : b.subscribe((j) => {
                  (!j || ["light", "dark", "system"].includes(j)) && R(j || n);
                })) || p0,
          U =
            (S == null
              ? void 0
              : S.subscribe((j) => {
                  (!j || m.match(j)) && O({ light: j });
                })) || p0,
          x =
            (C == null
              ? void 0
              : C.subscribe((j) => {
                  (!j || m.match(j)) && O({ dark: j });
                })) || p0;
        return () => {
          Y(), U(), x();
        };
      }
    }, [O, R, m, n, d, y, b, S, C]),
    {
      ..._,
      mode: w ? _.mode : void 0,
      systemMode: w ? _.systemMode : void 0,
      colorScheme: w ? D : void 0,
      setMode: R,
      setColorScheme: O,
    }
  );
}
const Z3 =
  "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function K3(u) {
  const {
      themeId: n,
      theme: a = {},
      modeStorageKey: i = Xg,
      colorSchemeStorageKey: l = Gg,
      disableTransitionOnChange: o = !1,
      defaultColorScheme: c,
      resolveTheme: d,
    } = u,
    p = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {},
      setMode: () => {},
      systemMode: void 0,
    },
    g = ot.createContext(void 0),
    m = () => ot.useContext(g) || p,
    y = {},
    b = {};
  function S(w) {
    var yn, Dt, Oe, ee;
    const {
        children: z,
        theme: D,
        modeStorageKey: R = i,
        colorSchemeStorageKey: O = l,
        disableTransitionOnChange: k = o,
        storageManager: N,
        storageWindow: Y = typeof window > "u" ? void 0 : window,
        documentNode: U = typeof document > "u" ? void 0 : document,
        colorSchemeNode: x = typeof document > "u"
          ? void 0
          : document.documentElement,
        disableNestedContext: j = !1,
        disableStyleSheetGeneration: Z = !1,
        defaultMode: rt = "system",
        forceThemeRerender: ht = !1,
        noSsr: at,
      } = w,
      H = ot.useRef(!1),
      K = qg(),
      et = ot.useContext(g),
      ft = !!et && !j,
      T = ot.useMemo(() => D || (typeof a == "function" ? a() : a), [D]),
      Q = T[n],
      tt = Q || T,
      { colorSchemes: I = y, components: it = b, cssVarPrefix: ct } = tt,
      lt = Object.keys(I)
        .filter((pe) => !!I[pe])
        .join(","),
      Tt = ot.useMemo(() => lt.split(","), [lt]),
      St = typeof c == "string" ? c : c.light,
      Jt = typeof c == "string" ? c : c.dark,
      ae =
        I[St] && I[Jt]
          ? rt
          : ((Dt =
              (yn = I[tt.defaultColorScheme]) == null ? void 0 : yn.palette) ==
            null
              ? void 0
              : Dt.mode) || ((Oe = tt.palette) == null ? void 0 : Oe.mode),
      {
        mode: ze,
        setMode: Ye,
        systemMode: Et,
        lightColorScheme: le,
        darkColorScheme: en,
        colorScheme: pn,
        setColorScheme: $,
      } = Q3({
        supportedColorSchemes: Tt,
        defaultLightColorScheme: St,
        defaultDarkColorScheme: Jt,
        modeStorageKey: R,
        colorSchemeStorageKey: O,
        defaultMode: ae,
        storageManager: N,
        storageWindow: Y,
        noSsr: at,
      });
    let nn = ze,
      Se = pn;
    ft && ((nn = et.mode), (Se = et.colorScheme));
    let En = Se || tt.defaultColorScheme;
    tt.vars && !ht && (En = tt.defaultColorScheme);
    const Gt = ot.useMemo(() => {
        var Ft;
        const pe =
            ((Ft = tt.generateThemeVars) == null ? void 0 : Ft.call(tt)) ||
            tt.vars,
          ne = {
            ...tt,
            components: it,
            colorSchemes: I,
            cssVarPrefix: ct,
            vars: pe,
          };
        if (
          (typeof ne.generateSpacing == "function" &&
            (ne.spacing = ne.generateSpacing()),
          En)
        ) {
          const Qe = I[En];
          Qe &&
            typeof Qe == "object" &&
            Object.keys(Qe).forEach((me) => {
              Qe[me] && typeof Qe[me] == "object"
                ? (ne[me] = { ...ne[me], ...Qe[me] })
                : (ne[me] = Qe[me]);
            });
        }
        return d ? d(ne) : ne;
      }, [tt, En, it, I, ct]),
      mn = tt.colorSchemeSelector;
    Pv(() => {
      if (Se && x && mn && mn !== "media") {
        const pe = mn;
        let ne = mn;
        if (
          (pe === "class" && (ne = ".%s"),
          pe === "data" && (ne = "[data-%s]"),
          pe != null &&
            pe.startsWith("data-") &&
            !pe.includes("%s") &&
            (ne = `[${pe}="%s"]`),
          ne.startsWith("."))
        )
          x.classList.remove(
            ...Tt.map((Ft) => ne.substring(1).replace("%s", Ft))
          ),
            x.classList.add(ne.substring(1).replace("%s", Se));
        else {
          const Ft = ne.replace("%s", Se).match(/\[([^\]]+)\]/);
          if (Ft) {
            const [Qe, me] = Ft[1].split("=");
            me ||
              Tt.forEach((On) => {
                x.removeAttribute(Qe.replace(Se, On));
              }),
              x.setAttribute(Qe, me ? me.replace(/"|'/g, "") : "");
          } else x.setAttribute(ne, Se);
        }
      }
    }, [Se, mn, x, Tt]),
      ot.useEffect(() => {
        let pe;
        if (k && H.current && U) {
          const ne = U.createElement("style");
          ne.appendChild(U.createTextNode(Z3)),
            U.head.appendChild(ne),
            window.getComputedStyle(U.body),
            (pe = setTimeout(() => {
              U.head.removeChild(ne);
            }, 1));
        }
        return () => {
          clearTimeout(pe);
        };
      }, [Se, k, U]),
      ot.useEffect(
        () => (
          (H.current = !0),
          () => {
            H.current = !1;
          }
        ),
        []
      );
    const ai = ot.useMemo(
      () => ({
        allColorSchemes: Tt,
        colorScheme: Se,
        darkColorScheme: en,
        lightColorScheme: le,
        mode: nn,
        setColorScheme: $,
        setMode: Ye,
        systemMode: Et,
      }),
      [Tt, Se, en, le, nn, $, Ye, Et, Gt.colorSchemeSelector]
    );
    let Di = !0;
    (Z ||
      tt.cssVariables === !1 ||
      (ft && (K == null ? void 0 : K.cssVarPrefix) === ct)) &&
      (Di = !1);
    const Ee = At.jsxs(ot.Fragment, {
      children: [
        At.jsx(eb, { themeId: Q ? n : void 0, theme: Gt, children: z }),
        Di &&
          At.jsx(Yv, {
            styles:
              ((ee = Gt.generateStyleSheets) == null ? void 0 : ee.call(Gt)) ||
              [],
          }),
      ],
    });
    return ft ? Ee : At.jsx(g.Provider, { value: ai, children: Ee });
  }
  const C = typeof c == "string" ? c : c.light,
    _ = typeof c == "string" ? c : c.dark;
  return {
    CssVarsProvider: S,
    useColorScheme: m,
    getInitColorSchemeScript: (w) =>
      G3({
        colorSchemeStorageKey: l,
        defaultLightColorScheme: C,
        defaultDarkColorScheme: _,
        modeStorageKey: i,
        ...w,
      }),
  };
}
function P3(u = "") {
  function n(...i) {
    if (!i.length) return "";
    const l = i[0];
    return typeof l == "string" &&
      !l.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${u ? `${u}-` : ""}${l}${n(...i.slice(1))})`
      : `, ${l}`;
  }
  return (i, ...l) => `var(--${u ? `${u}-` : ""}${i}${n(...l)})`;
}
const O_ = (u, n, a, i = []) => {
    let l = u;
    n.forEach((o, c) => {
      c === n.length - 1
        ? Array.isArray(l)
          ? (l[Number(o)] = a)
          : l && typeof l == "object" && (l[o] = a)
        : l &&
          typeof l == "object" &&
          (l[o] || (l[o] = i.includes(o) ? [] : {}), (l = l[o]));
    });
  },
  J3 = (u, n, a) => {
    function i(l, o = [], c = []) {
      Object.entries(l).forEach(([d, p]) => {
        (!a || (a && !a([...o, d]))) &&
          p != null &&
          (typeof p == "object" && Object.keys(p).length > 0
            ? i(p, [...o, d], Array.isArray(p) ? [...c, d] : c)
            : n([...o, d], p, c));
      });
    }
    i(u);
  },
  F3 = (u, n) =>
    typeof n == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((i) =>
          u.includes(i)
        ) || u[u.length - 1].toLowerCase().includes("opacity")
        ? n
        : `${n}px`
      : n;
function m0(u, n) {
  const { prefix: a, shouldSkipGeneratingVar: i } = n || {},
    l = {},
    o = {},
    c = {};
  return (
    J3(
      u,
      (d, p, g) => {
        if (
          (typeof p == "string" || typeof p == "number") &&
          (!i || !i(d, p))
        ) {
          const m = `--${a ? `${a}-` : ""}${d.join("-")}`,
            y = F3(d, p);
          Object.assign(l, { [m]: y }),
            O_(o, d, `var(${m})`, g),
            O_(c, d, `var(${m}, ${y})`, g);
        }
      },
      (d) => d[0] === "vars"
    ),
    { css: l, vars: o, varsWithDefaults: c }
  );
}
function W3(u, n = {}) {
  const {
      getSelector: a = E,
      disableCssColorScheme: i,
      colorSchemeSelector: l,
    } = n,
    {
      colorSchemes: o = {},
      components: c,
      defaultColorScheme: d = "light",
      ...p
    } = u,
    { vars: g, css: m, varsWithDefaults: y } = m0(p, n);
  let b = y;
  const S = {},
    { [d]: C, ..._ } = o;
  if (
    (Object.entries(_ || {}).forEach(([D, R]) => {
      const { vars: O, css: k, varsWithDefaults: N } = m0(R, n);
      (b = Oi(b, N)), (S[D] = { css: k, vars: O });
    }),
    C)
  ) {
    const { css: D, vars: R, varsWithDefaults: O } = m0(C, n);
    (b = Oi(b, O)), (S[d] = { css: D, vars: R });
  }
  function E(D, R) {
    var k, N;
    let O = l;
    if (
      (l === "class" && (O = ".%s"),
      l === "data" && (O = "[data-%s]"),
      l != null &&
        l.startsWith("data-") &&
        !l.includes("%s") &&
        (O = `[${l}="%s"]`),
      D)
    ) {
      if (O === "media")
        return u.defaultColorScheme === D
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((N = (k = o[D]) == null ? void 0 : k.palette) == null
                  ? void 0
                  : N.mode) || D
              })`]: { ":root": R },
            };
      if (O)
        return u.defaultColorScheme === D
          ? `:root, ${O.replace("%s", String(D))}`
          : O.replace("%s", String(D));
    }
    return ":root";
  }
  return {
    vars: b,
    generateThemeVars: () => {
      let D = { ...g };
      return (
        Object.entries(S).forEach(([, { vars: R }]) => {
          D = Oi(D, R);
        }),
        D
      );
    },
    generateStyleSheets: () => {
      var Y, U;
      const D = [],
        R = u.defaultColorScheme || "light";
      function O(x, j) {
        Object.keys(j).length &&
          D.push(typeof x == "string" ? { [x]: { ...j } } : x);
      }
      O(a(void 0, { ...m }), m);
      const { [R]: k, ...N } = S;
      if (k) {
        const { css: x } = k,
          j =
            (U = (Y = o[R]) == null ? void 0 : Y.palette) == null
              ? void 0
              : U.mode,
          Z = !i && j ? { colorScheme: j, ...x } : { ...x };
        O(a(R, { ...Z }), Z);
      }
      return (
        Object.entries(N).forEach(([x, { css: j }]) => {
          var ht, at;
          const Z =
              (at = (ht = o[x]) == null ? void 0 : ht.palette) == null
                ? void 0
                : at.mode,
            rt = !i && Z ? { colorScheme: Z, ...j } : { ...j };
          O(a(x, { ...rt }), rt);
        }),
        D
      );
    },
  };
}
function I3(u) {
  return function (a) {
    return u === "media"
      ? `@media (prefers-color-scheme: ${a})`
      : u
      ? u.startsWith("data-") && !u.includes("%s")
        ? `[${u}="${a}"] &`
        : u === "class"
        ? `.${a} &`
        : u === "data"
        ? `[data-${a}] &`
        : `${u.replace("%s", a)} &`
      : "&";
  };
}
function ib() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: fo.white, default: fo.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const tA = ib();
function rb() {
  return {
    text: {
      primary: fo.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: fo.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const M_ = rb();
function w_(u, n, a, i) {
  const l = i.light || i,
    o = i.dark || i * 1.5;
  u[n] ||
    (u.hasOwnProperty(a)
      ? (u[n] = u[a])
      : n === "light"
      ? (u.light = Yg(u.main, l))
      : n === "dark" && (u.dark = Hg(u.main, o)));
}
function eA(u = "light") {
  return u === "dark"
    ? { main: uu[200], light: uu[50], dark: uu[400] }
    : { main: uu[700], light: uu[400], dark: uu[800] };
}
function nA(u = "light") {
  return u === "dark"
    ? { main: lu[200], light: lu[50], dark: lu[400] }
    : { main: lu[500], light: lu[300], dark: lu[700] };
}
function iA(u = "light") {
  return u === "dark"
    ? { main: au[500], light: au[300], dark: au[700] }
    : { main: au[700], light: au[400], dark: au[800] };
}
function rA(u = "light") {
  return u === "dark"
    ? { main: su[400], light: su[300], dark: su[700] }
    : { main: su[700], light: su[500], dark: su[900] };
}
function aA(u = "light") {
  return u === "dark"
    ? { main: ou[400], light: ou[300], dark: ou[700] }
    : { main: ou[800], light: ou[500], dark: ou[900] };
}
function lA(u = "light") {
  return u === "dark"
    ? { main: Ns[400], light: Ns[300], dark: Ns[700] }
    : { main: "#ed6c02", light: Ns[500], dark: Ns[900] };
}
function jg(u) {
  const {
      mode: n = "light",
      contrastThreshold: a = 3,
      tonalOffset: i = 0.2,
      ...l
    } = u,
    o = u.primary || eA(n),
    c = u.secondary || nA(n),
    d = u.error || iA(n),
    p = u.info || rA(n),
    g = u.success || aA(n),
    m = u.warning || lA(n);
  function y(_) {
    return w3(_, M_.text.primary) >= a ? M_.text.primary : tA.text.primary;
  }
  const b = ({
    color: _,
    name: E,
    mainShade: w = 500,
    lightShade: z = 300,
    darkShade: D = 700,
  }) => {
    if (
      ((_ = { ..._ }),
      !_.main && _[w] && (_.main = _[w]),
      !_.hasOwnProperty("main"))
    )
      throw new Error(bl(11, E ? ` (${E})` : "", w));
    if (typeof _.main != "string")
      throw new Error(bl(12, E ? ` (${E})` : "", JSON.stringify(_.main)));
    return (
      w_(_, "light", z, i),
      w_(_, "dark", D, i),
      _.contrastText || (_.contrastText = y(_.main)),
      _
    );
  };
  let S;
  return (
    n === "light" ? (S = ib()) : n === "dark" && (S = rb()),
    Oi(
      {
        common: { ...fo },
        mode: n,
        primary: b({ color: o, name: "primary" }),
        secondary: b({
          color: c,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: b({ color: d, name: "error" }),
        warning: b({ color: m, name: "warning" }),
        info: b({ color: p, name: "info" }),
        success: b({ color: g, name: "success" }),
        grey: hT,
        contrastThreshold: a,
        getContrastText: y,
        augmentColor: b,
        tonalOffset: i,
        ...S,
      },
      l
    )
  );
}
function uA(u) {
  const n = {};
  return (
    Object.entries(u).forEach((i) => {
      const [l, o] = i;
      typeof o == "object" &&
        (n[l] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${
          o.fontVariant ? `${o.fontVariant} ` : ""
        }${o.fontWeight ? `${o.fontWeight} ` : ""}${
          o.fontStretch ? `${o.fontStretch} ` : ""
        }${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${
          o.fontFamily || ""
        }`);
    }),
    n
  );
}
function sA(u, n) {
  return {
    toolbar: {
      minHeight: 56,
      [u.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [u.up("sm")]: { minHeight: 64 },
    },
    ...n,
  };
}
function oA(u) {
  return Math.round(u * 1e5) / 1e5;
}
const R_ = { textTransform: "uppercase" },
  D_ = '"Roboto", "Helvetica", "Arial", sans-serif';
function ab(u, n) {
  const {
      fontFamily: a = D_,
      fontSize: i = 14,
      fontWeightLight: l = 300,
      fontWeightRegular: o = 400,
      fontWeightMedium: c = 500,
      fontWeightBold: d = 700,
      htmlFontSize: p = 16,
      allVariants: g,
      pxToRem: m,
      ...y
    } = typeof n == "function" ? n(u) : n,
    b = i / 14,
    S = m || ((E) => `${(E / p) * b}rem`),
    C = (E, w, z, D, R) => ({
      fontFamily: a,
      fontWeight: E,
      fontSize: S(w),
      lineHeight: z,
      ...(a === D_ ? { letterSpacing: `${oA(D / w)}em` } : {}),
      ...R,
      ...g,
    }),
    _ = {
      h1: C(l, 96, 1.167, -1.5),
      h2: C(l, 60, 1.2, -0.5),
      h3: C(o, 48, 1.167, 0),
      h4: C(o, 34, 1.235, 0.25),
      h5: C(o, 24, 1.334, 0),
      h6: C(c, 20, 1.6, 0.15),
      subtitle1: C(o, 16, 1.75, 0.15),
      subtitle2: C(c, 14, 1.57, 0.1),
      body1: C(o, 16, 1.5, 0.15),
      body2: C(o, 14, 1.43, 0.15),
      button: C(c, 14, 1.75, 0.4, R_),
      caption: C(o, 12, 1.66, 0.4),
      overline: C(o, 12, 2.66, 1, R_),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Oi(
    {
      htmlFontSize: p,
      pxToRem: S,
      fontFamily: a,
      fontSize: i,
      fontWeightLight: l,
      fontWeightRegular: o,
      fontWeightMedium: c,
      fontWeightBold: d,
      ..._,
    },
    y,
    { clone: !1 }
  );
}
const fA = 0.2,
  cA = 0.14,
  dA = 0.12;
function Ce(...u) {
  return [
    `${u[0]}px ${u[1]}px ${u[2]}px ${u[3]}px rgba(0,0,0,${fA})`,
    `${u[4]}px ${u[5]}px ${u[6]}px ${u[7]}px rgba(0,0,0,${cA})`,
    `${u[8]}px ${u[9]}px ${u[10]}px ${u[11]}px rgba(0,0,0,${dA})`,
  ].join(",");
}
const hA = [
    "none",
    Ce(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Ce(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Ce(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Ce(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Ce(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Ce(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Ce(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Ce(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Ce(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Ce(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Ce(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Ce(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Ce(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Ce(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Ce(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Ce(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Ce(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Ce(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Ce(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Ce(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Ce(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Ce(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Ce(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Ce(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  gA = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  pA = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function z_(u) {
  return `${Math.round(u)}ms`;
}
function mA(u) {
  if (!u) return 0;
  const n = u / 36;
  return Math.min(Math.round((4 + 15 * n ** 0.25 + n / 5) * 10), 3e3);
}
function yA(u) {
  const n = { ...gA, ...u.easing },
    a = { ...pA, ...u.duration };
  return {
    getAutoHeightDuration: mA,
    create: (l = ["all"], o = {}) => {
      const {
        duration: c = a.standard,
        easing: d = n.easeInOut,
        delay: p = 0,
        ...g
      } = o;
      return (Array.isArray(l) ? l : [l])
        .map(
          (m) =>
            `${m} ${typeof c == "string" ? c : z_(c)} ${d} ${
              typeof p == "string" ? p : z_(p)
            }`
        )
        .join(",");
    },
    ...u,
    easing: n,
    duration: a,
  };
}
const _A = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function vA(u) {
  return (
    Zr(u) ||
    typeof u > "u" ||
    typeof u == "string" ||
    typeof u == "boolean" ||
    typeof u == "number" ||
    Array.isArray(u)
  );
}
function lb(u = {}) {
  const n = { ...u };
  function a(i) {
    const l = Object.entries(i);
    for (let o = 0; o < l.length; o++) {
      const [c, d] = l[o];
      !vA(d) || c.startsWith("unstable_")
        ? delete i[c]
        : Zr(d) && ((i[c] = { ...d }), a(i[c]));
    }
  }
  return (
    a(n),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(n, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function V0(u = {}, ...n) {
  const {
    breakpoints: a,
    mixins: i = {},
    spacing: l,
    palette: o = {},
    transitions: c = {},
    typography: d = {},
    shape: p,
    ...g
  } = u;
  if (u.vars && u.generateThemeVars === void 0) throw new Error(bl(20));
  const m = jg(o),
    y = $v(u);
  let b = Oi(y, {
    mixins: sA(y.breakpoints, i),
    palette: m,
    shadows: hA.slice(),
    typography: ab(m, d),
    transitions: yA(c),
    zIndex: { ..._A },
  });
  return (
    (b = Oi(b, g)),
    (b = n.reduce((S, C) => Oi(S, C), b)),
    (b.unstable_sxConfig = {
      ...wo,
      ...(g == null ? void 0 : g.unstable_sxConfig),
    }),
    (b.unstable_sx = function (C) {
      return Hu({ sx: C, theme: this });
    }),
    (b.toRuntimeSource = lb),
    b
  );
}
function bA(u) {
  let n;
  return (
    u < 1 ? (n = 5.11916 * u ** 2) : (n = 4.5 * Math.log(u + 1) + 2),
    Math.round(n * 10) / 1e3
  );
}
const SA = [...Array(25)].map((u, n) => {
  if (n === 0) return "none";
  const a = bA(n);
  return `linear-gradient(rgba(255 255 255 / ${a}), rgba(255 255 255 / ${a}))`;
});
function ub(u) {
  return {
    inputPlaceholder: u === "dark" ? 0.5 : 0.42,
    inputUnderline: u === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: u === "dark" ? 0.2 : 0.12,
    switchTrack: u === "dark" ? 0.3 : 0.38,
  };
}
function sb(u) {
  return u === "dark" ? SA : [];
}
function xA(u) {
  const { palette: n = { mode: "light" }, opacity: a, overlays: i, ...l } = u,
    o = jg(n);
  return {
    palette: o,
    opacity: { ...ub(o.mode), ...a },
    overlays: i || sb(o.mode),
    ...l,
  };
}
function TA(u) {
  var n;
  return (
    !!u[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!u[0].match(/sxConfig$/) ||
    (u[0] === "palette" &&
      !!((n = u[1]) != null && n.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const CA = (u) => [
    ...[...Array(25)].map((n, a) => `--${u ? `${u}-` : ""}overlays-${a}`),
    `--${u ? `${u}-` : ""}palette-AppBar-darkBg`,
    `--${u ? `${u}-` : ""}palette-AppBar-darkColor`,
  ],
  AA = (u) => (n, a) => {
    const i = u.rootSelector || ":root",
      l = u.colorSchemeSelector;
    let o = l;
    if (
      (l === "class" && (o = ".%s"),
      l === "data" && (o = "[data-%s]"),
      l != null &&
        l.startsWith("data-") &&
        !l.includes("%s") &&
        (o = `[${l}="%s"]`),
      u.defaultColorScheme === n)
    ) {
      if (n === "dark") {
        const c = {};
        return (
          CA(u.cssVarPrefix).forEach((d) => {
            (c[d] = a[d]), delete a[d];
          }),
          o === "media"
            ? { [i]: a, "@media (prefers-color-scheme: dark)": { [i]: c } }
            : o
            ? { [o.replace("%s", n)]: c, [`${i}, ${o.replace("%s", n)}`]: a }
            : { [i]: { ...a, ...c } }
        );
      }
      if (o && o !== "media") return `${i}, ${o.replace("%s", String(n))}`;
    } else if (n) {
      if (o === "media")
        return { [`@media (prefers-color-scheme: ${String(n)})`]: { [i]: a } };
      if (o) return o.replace("%s", String(n));
    }
    return i;
  };
function EA(u, n) {
  n.forEach((a) => {
    u[a] || (u[a] = {});
  });
}
function P(u, n, a) {
  !u[n] && a && (u[n] = a);
}
function qs(u) {
  return typeof u != "string" || !u.startsWith("hsl") ? u : Wv(u);
}
function Vr(u, n) {
  `${n}Channel` in u || (u[`${n}Channel`] = Ys(qs(u[n])));
}
function OA(u) {
  return typeof u == "number"
    ? `${u}px`
    : typeof u == "string" || typeof u == "function" || Array.isArray(u)
    ? u
    : "8px";
}
const hr = (u) => {
    try {
      return u();
    } catch {}
  },
  MA = (u = "mui") => P3(u);
function y0(u, n, a, i) {
  if (!n) return;
  n = n === !0 ? {} : n;
  const l = i === "dark" ? "dark" : "light";
  if (!a) {
    u[i] = xA({
      ...n,
      palette: { mode: l, ...(n == null ? void 0 : n.palette) },
    });
    return;
  }
  const { palette: o, ...c } = V0({
    ...a,
    palette: { mode: l, ...(n == null ? void 0 : n.palette) },
  });
  return (
    (u[i] = {
      ...n,
      palette: o,
      opacity: { ...ub(l), ...(n == null ? void 0 : n.opacity) },
      overlays: (n == null ? void 0 : n.overlays) || sb(l),
    }),
    c
  );
}
function wA(u = {}, ...n) {
  const {
      colorSchemes: a = { light: !0 },
      defaultColorScheme: i,
      disableCssColorScheme: l = !1,
      cssVarPrefix: o = "mui",
      shouldSkipGeneratingVar: c = TA,
      colorSchemeSelector: d = a.light && a.dark ? "media" : void 0,
      rootSelector: p = ":root",
      ...g
    } = u,
    m = Object.keys(a)[0],
    y = i || (a.light && m !== "light" ? "light" : m),
    b = MA(o),
    { [y]: S, light: C, dark: _, ...E } = a,
    w = { ...E };
  let z = S;
  if (
    (((y === "dark" && !("dark" in a)) || (y === "light" && !("light" in a))) &&
      (z = !0),
    !z)
  )
    throw new Error(bl(21, y));
  const D = y0(w, z, g, y);
  C && !w.light && y0(w, C, void 0, "light"),
    _ && !w.dark && y0(w, _, void 0, "dark");
  let R = {
    defaultColorScheme: y,
    ...D,
    cssVarPrefix: o,
    colorSchemeSelector: d,
    rootSelector: p,
    getCssVar: b,
    colorSchemes: w,
    font: { ...uA(D.typography), ...D.font },
    spacing: OA(g.spacing),
  };
  Object.keys(R.colorSchemes).forEach((U) => {
    const x = R.colorSchemes[U].palette,
      j = (Z) => {
        const rt = Z.split("-"),
          ht = rt[1],
          at = rt[2];
        return b(Z, x[ht][at]);
      };
    if (
      (x.mode === "light" &&
        (P(x.common, "background", "#fff"),
        P(x.common, "onBackground", "#000")),
      x.mode === "dark" &&
        (P(x.common, "background", "#000"),
        P(x.common, "onBackground", "#fff")),
      EA(x, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      x.mode === "light")
    ) {
      P(x.Alert, "errorColor", de(x.error.light, 0.6)),
        P(x.Alert, "infoColor", de(x.info.light, 0.6)),
        P(x.Alert, "successColor", de(x.success.light, 0.6)),
        P(x.Alert, "warningColor", de(x.warning.light, 0.6)),
        P(x.Alert, "errorFilledBg", j("palette-error-main")),
        P(x.Alert, "infoFilledBg", j("palette-info-main")),
        P(x.Alert, "successFilledBg", j("palette-success-main")),
        P(x.Alert, "warningFilledBg", j("palette-warning-main")),
        P(
          x.Alert,
          "errorFilledColor",
          hr(() => x.getContrastText(x.error.main))
        ),
        P(
          x.Alert,
          "infoFilledColor",
          hr(() => x.getContrastText(x.info.main))
        ),
        P(
          x.Alert,
          "successFilledColor",
          hr(() => x.getContrastText(x.success.main))
        ),
        P(
          x.Alert,
          "warningFilledColor",
          hr(() => x.getContrastText(x.warning.main))
        ),
        P(x.Alert, "errorStandardBg", he(x.error.light, 0.9)),
        P(x.Alert, "infoStandardBg", he(x.info.light, 0.9)),
        P(x.Alert, "successStandardBg", he(x.success.light, 0.9)),
        P(x.Alert, "warningStandardBg", he(x.warning.light, 0.9)),
        P(x.Alert, "errorIconColor", j("palette-error-main")),
        P(x.Alert, "infoIconColor", j("palette-info-main")),
        P(x.Alert, "successIconColor", j("palette-success-main")),
        P(x.Alert, "warningIconColor", j("palette-warning-main")),
        P(x.AppBar, "defaultBg", j("palette-grey-100")),
        P(x.Avatar, "defaultBg", j("palette-grey-400")),
        P(x.Button, "inheritContainedBg", j("palette-grey-300")),
        P(x.Button, "inheritContainedHoverBg", j("palette-grey-A100")),
        P(x.Chip, "defaultBorder", j("palette-grey-400")),
        P(x.Chip, "defaultAvatarColor", j("palette-grey-700")),
        P(x.Chip, "defaultIconColor", j("palette-grey-700")),
        P(x.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        P(x.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        P(x.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        P(x.LinearProgress, "primaryBg", he(x.primary.main, 0.62)),
        P(x.LinearProgress, "secondaryBg", he(x.secondary.main, 0.62)),
        P(x.LinearProgress, "errorBg", he(x.error.main, 0.62)),
        P(x.LinearProgress, "infoBg", he(x.info.main, 0.62)),
        P(x.LinearProgress, "successBg", he(x.success.main, 0.62)),
        P(x.LinearProgress, "warningBg", he(x.warning.main, 0.62)),
        P(x.Skeleton, "bg", `rgba(${j("palette-text-primaryChannel")} / 0.11)`),
        P(x.Slider, "primaryTrack", he(x.primary.main, 0.62)),
        P(x.Slider, "secondaryTrack", he(x.secondary.main, 0.62)),
        P(x.Slider, "errorTrack", he(x.error.main, 0.62)),
        P(x.Slider, "infoTrack", he(x.info.main, 0.62)),
        P(x.Slider, "successTrack", he(x.success.main, 0.62)),
        P(x.Slider, "warningTrack", he(x.warning.main, 0.62));
      const Z = Gf(x.background.default, 0.8);
      P(x.SnackbarContent, "bg", Z),
        P(
          x.SnackbarContent,
          "color",
          hr(() => x.getContrastText(Z))
        ),
        P(x.SpeedDialAction, "fabHoverBg", Gf(x.background.paper, 0.15)),
        P(x.StepConnector, "border", j("palette-grey-400")),
        P(x.StepContent, "border", j("palette-grey-400")),
        P(x.Switch, "defaultColor", j("palette-common-white")),
        P(x.Switch, "defaultDisabledColor", j("palette-grey-100")),
        P(x.Switch, "primaryDisabledColor", he(x.primary.main, 0.62)),
        P(x.Switch, "secondaryDisabledColor", he(x.secondary.main, 0.62)),
        P(x.Switch, "errorDisabledColor", he(x.error.main, 0.62)),
        P(x.Switch, "infoDisabledColor", he(x.info.main, 0.62)),
        P(x.Switch, "successDisabledColor", he(x.success.main, 0.62)),
        P(x.Switch, "warningDisabledColor", he(x.warning.main, 0.62)),
        P(x.TableCell, "border", he(Xf(x.divider, 1), 0.88)),
        P(x.Tooltip, "bg", Xf(x.grey[700], 0.92));
    }
    if (x.mode === "dark") {
      P(x.Alert, "errorColor", he(x.error.light, 0.6)),
        P(x.Alert, "infoColor", he(x.info.light, 0.6)),
        P(x.Alert, "successColor", he(x.success.light, 0.6)),
        P(x.Alert, "warningColor", he(x.warning.light, 0.6)),
        P(x.Alert, "errorFilledBg", j("palette-error-dark")),
        P(x.Alert, "infoFilledBg", j("palette-info-dark")),
        P(x.Alert, "successFilledBg", j("palette-success-dark")),
        P(x.Alert, "warningFilledBg", j("palette-warning-dark")),
        P(
          x.Alert,
          "errorFilledColor",
          hr(() => x.getContrastText(x.error.dark))
        ),
        P(
          x.Alert,
          "infoFilledColor",
          hr(() => x.getContrastText(x.info.dark))
        ),
        P(
          x.Alert,
          "successFilledColor",
          hr(() => x.getContrastText(x.success.dark))
        ),
        P(
          x.Alert,
          "warningFilledColor",
          hr(() => x.getContrastText(x.warning.dark))
        ),
        P(x.Alert, "errorStandardBg", de(x.error.light, 0.9)),
        P(x.Alert, "infoStandardBg", de(x.info.light, 0.9)),
        P(x.Alert, "successStandardBg", de(x.success.light, 0.9)),
        P(x.Alert, "warningStandardBg", de(x.warning.light, 0.9)),
        P(x.Alert, "errorIconColor", j("palette-error-main")),
        P(x.Alert, "infoIconColor", j("palette-info-main")),
        P(x.Alert, "successIconColor", j("palette-success-main")),
        P(x.Alert, "warningIconColor", j("palette-warning-main")),
        P(x.AppBar, "defaultBg", j("palette-grey-900")),
        P(x.AppBar, "darkBg", j("palette-background-paper")),
        P(x.AppBar, "darkColor", j("palette-text-primary")),
        P(x.Avatar, "defaultBg", j("palette-grey-600")),
        P(x.Button, "inheritContainedBg", j("palette-grey-800")),
        P(x.Button, "inheritContainedHoverBg", j("palette-grey-700")),
        P(x.Chip, "defaultBorder", j("palette-grey-700")),
        P(x.Chip, "defaultAvatarColor", j("palette-grey-300")),
        P(x.Chip, "defaultIconColor", j("palette-grey-300")),
        P(x.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        P(x.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        P(x.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        P(x.LinearProgress, "primaryBg", de(x.primary.main, 0.5)),
        P(x.LinearProgress, "secondaryBg", de(x.secondary.main, 0.5)),
        P(x.LinearProgress, "errorBg", de(x.error.main, 0.5)),
        P(x.LinearProgress, "infoBg", de(x.info.main, 0.5)),
        P(x.LinearProgress, "successBg", de(x.success.main, 0.5)),
        P(x.LinearProgress, "warningBg", de(x.warning.main, 0.5)),
        P(x.Skeleton, "bg", `rgba(${j("palette-text-primaryChannel")} / 0.13)`),
        P(x.Slider, "primaryTrack", de(x.primary.main, 0.5)),
        P(x.Slider, "secondaryTrack", de(x.secondary.main, 0.5)),
        P(x.Slider, "errorTrack", de(x.error.main, 0.5)),
        P(x.Slider, "infoTrack", de(x.info.main, 0.5)),
        P(x.Slider, "successTrack", de(x.success.main, 0.5)),
        P(x.Slider, "warningTrack", de(x.warning.main, 0.5));
      const Z = Gf(x.background.default, 0.98);
      P(x.SnackbarContent, "bg", Z),
        P(
          x.SnackbarContent,
          "color",
          hr(() => x.getContrastText(Z))
        ),
        P(x.SpeedDialAction, "fabHoverBg", Gf(x.background.paper, 0.15)),
        P(x.StepConnector, "border", j("palette-grey-600")),
        P(x.StepContent, "border", j("palette-grey-600")),
        P(x.Switch, "defaultColor", j("palette-grey-300")),
        P(x.Switch, "defaultDisabledColor", j("palette-grey-600")),
        P(x.Switch, "primaryDisabledColor", de(x.primary.main, 0.55)),
        P(x.Switch, "secondaryDisabledColor", de(x.secondary.main, 0.55)),
        P(x.Switch, "errorDisabledColor", de(x.error.main, 0.55)),
        P(x.Switch, "infoDisabledColor", de(x.info.main, 0.55)),
        P(x.Switch, "successDisabledColor", de(x.success.main, 0.55)),
        P(x.Switch, "warningDisabledColor", de(x.warning.main, 0.55)),
        P(x.TableCell, "border", de(Xf(x.divider, 1), 0.68)),
        P(x.Tooltip, "bg", Xf(x.grey[700], 0.92));
    }
    Vr(x.background, "default"),
      Vr(x.background, "paper"),
      Vr(x.common, "background"),
      Vr(x.common, "onBackground"),
      Vr(x, "divider"),
      Object.keys(x).forEach((Z) => {
        const rt = x[Z];
        Z !== "tonalOffset" &&
          rt &&
          typeof rt == "object" &&
          (rt.main && P(x[Z], "mainChannel", Ys(qs(rt.main))),
          rt.light && P(x[Z], "lightChannel", Ys(qs(rt.light))),
          rt.dark && P(x[Z], "darkChannel", Ys(qs(rt.dark))),
          rt.contrastText &&
            P(x[Z], "contrastTextChannel", Ys(qs(rt.contrastText))),
          Z === "text" && (Vr(x[Z], "primary"), Vr(x[Z], "secondary")),
          Z === "action" &&
            (rt.active && Vr(x[Z], "active"),
            rt.selected && Vr(x[Z], "selected")));
      });
  }),
    (R = n.reduce((U, x) => Oi(U, x), R));
  const O = {
      prefix: o,
      disableCssColorScheme: l,
      shouldSkipGeneratingVar: c,
      getSelector: AA(R),
    },
    { vars: k, generateThemeVars: N, generateStyleSheets: Y } = W3(R, O);
  return (
    (R.vars = k),
    Object.entries(R.colorSchemes[R.defaultColorScheme]).forEach(([U, x]) => {
      R[U] = x;
    }),
    (R.generateThemeVars = N),
    (R.generateStyleSheets = Y),
    (R.generateSpacing = function () {
      return Vv(g.spacing, Bg(this));
    }),
    (R.getColorSchemeSelector = I3(d)),
    (R.spacing = R.generateSpacing()),
    (R.shouldSkipGeneratingVar = c),
    (R.unstable_sxConfig = {
      ...wo,
      ...(g == null ? void 0 : g.unstable_sxConfig),
    }),
    (R.unstable_sx = function (x) {
      return Hu({ sx: x, theme: this });
    }),
    (R.toRuntimeSource = lb),
    R
  );
}
function N_(u, n, a) {
  u.colorSchemes &&
    a &&
    (u.colorSchemes[n] = {
      ...(a !== !0 && a),
      palette: jg({ ...(a === !0 ? {} : a.palette), mode: n }),
    });
}
function Jc(u = {}, ...n) {
  const {
      palette: a,
      cssVariables: i = !1,
      colorSchemes: l = a ? void 0 : { light: !0 },
      defaultColorScheme: o = a == null ? void 0 : a.mode,
      ...c
    } = u,
    d = o || "light",
    p = l == null ? void 0 : l[d],
    g = {
      ...l,
      ...(a
        ? { [d]: { ...(typeof p != "boolean" && p), palette: a } }
        : void 0),
    };
  if (i === !1) {
    if (!("colorSchemes" in u)) return V0(u, ...n);
    let m = a;
    "palette" in u ||
      (g[d] &&
        (g[d] !== !0
          ? (m = g[d].palette)
          : d === "dark" && (m = { mode: "dark" })));
    const y = V0({ ...u, palette: m }, ...n);
    return (
      (y.defaultColorScheme = d),
      (y.colorSchemes = g),
      y.palette.mode === "light" &&
        ((y.colorSchemes.light = {
          ...(g.light !== !0 && g.light),
          palette: y.palette,
        }),
        N_(y, "dark", g.dark)),
      y.palette.mode === "dark" &&
        ((y.colorSchemes.dark = {
          ...(g.dark !== !0 && g.dark),
          palette: y.palette,
        }),
        N_(y, "light", g.light)),
      y
    );
  }
  return (
    !a && !("light" in g) && d === "light" && (g.light = !0),
    wA(
      {
        ...c,
        colorSchemes: g,
        defaultColorScheme: d,
        ...(typeof i != "boolean" && i),
      },
      ...n
    )
  );
}
const RA = Jc();
function DA({ theme: u, ...n }) {
  const a = Wr in u ? u[Wr] : void 0;
  return At.jsx(eb, { ...n, themeId: a ? Wr : void 0, theme: a || u });
}
const jf = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode",
  },
  { CssVarsProvider: zA } = K3({
    themeId: Wr,
    theme: () => Jc({ cssVariables: !0 }),
    colorSchemeStorageKey: jf.colorSchemeStorageKey,
    modeStorageKey: jf.modeStorageKey,
    defaultColorScheme: {
      light: jf.defaultLightColorScheme,
      dark: jf.defaultDarkColorScheme,
    },
    resolveTheme: (u) => {
      const n = { ...u, typography: ab(u.palette, u.typography) };
      return (
        (n.unstable_sx = function (i) {
          return Hu({ sx: i, theme: this });
        }),
        n
      );
    },
  }),
  NA = zA;
function BA({ theme: u, ...n }) {
  const a = ot.useMemo(() => {
    if (typeof u == "function") return u;
    const i = Wr in u ? u[Wr] : u;
    return "colorSchemes" in i ? null : "vars" in i ? u : { ...u, vars: null };
  }, [u]);
  return a ? At.jsx(DA, { theme: a, ...n }) : At.jsx(NA, { theme: u, ...n });
}
function kA(u) {
  return At.jsx(h3, { ...u, defaultTheme: RA, themeId: Wr });
}
function ob(u) {
  return function (a) {
    return At.jsx(kA, {
      styles: typeof u == "function" ? (i) => u({ theme: i, ...a }) : u,
    });
  };
}
function UA(u) {
  return q3(u);
}
const LA = S3("MuiBox", ["root"]),
  HA = Jc(),
  yi = _3({
    themeId: Wr,
    defaultTheme: HA,
    defaultClassName: LA.root,
    generateClassName: Zv.generate,
  }),
  $0 = typeof ob({}) == "function",
  YA = (u, n) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...(n && !u.vars && { colorScheme: u.palette.mode }),
  }),
  qA = (u) => ({
    color: (u.vars || u).palette.text.primary,
    ...u.typography.body1,
    backgroundColor: (u.vars || u).palette.background.default,
    "@media print": { backgroundColor: (u.vars || u).palette.common.white },
  }),
  fb = (u, n = !1) => {
    var o, c;
    const a = {};
    n &&
      u.colorSchemes &&
      typeof u.getColorSchemeSelector == "function" &&
      Object.entries(u.colorSchemes).forEach(([d, p]) => {
        var m, y;
        const g = u.getColorSchemeSelector(d);
        g.startsWith("@")
          ? (a[g] = {
              ":root": {
                colorScheme: (m = p.palette) == null ? void 0 : m.mode,
              },
            })
          : (a[g.replace(/\s*&/, "")] = {
              colorScheme: (y = p.palette) == null ? void 0 : y.mode,
            });
      });
    let i = {
      html: YA(u, n),
      "*, *::before, *::after": { boxSizing: "inherit" },
      "strong, b": { fontWeight: u.typography.fontWeightBold },
      body: {
        margin: 0,
        ...qA(u),
        "&::backdrop": {
          backgroundColor: (u.vars || u).palette.background.default,
        },
      },
      ...a,
    };
    const l =
      (c = (o = u.components) == null ? void 0 : o.MuiCssBaseline) == null
        ? void 0
        : c.styleOverrides;
    return l && (i = [i, l]), i;
  },
  sc = "mui-ecs",
  XA = (u) => {
    const n = fb(u, !1),
      a = Array.isArray(n) ? n[0] : n;
    return (
      !u.vars &&
        a &&
        (a.html[`:root:has(${sc})`] = { colorScheme: u.palette.mode }),
      u.colorSchemes &&
        Object.entries(u.colorSchemes).forEach(([i, l]) => {
          var c, d;
          const o = u.getColorSchemeSelector(i);
          o.startsWith("@")
            ? (a[o] = {
                [`:root:not(:has(.${sc}))`]: {
                  colorScheme: (c = l.palette) == null ? void 0 : c.mode,
                },
              })
            : (a[o.replace(/\s*&/, "")] = {
                [`&:not(:has(.${sc}))`]: {
                  colorScheme: (d = l.palette) == null ? void 0 : d.mode,
                },
              });
        }),
      n
    );
  },
  GA = ob(
    $0
      ? ({ theme: u, enableColorScheme: n }) => fb(u, n)
      : ({ theme: u }) => XA(u)
  );
function jA(u) {
  const n = UA({ props: u, name: "MuiCssBaseline" }),
    { children: a, enableColorScheme: i = !1 } = n;
  return At.jsxs(ot.Fragment, {
    children: [
      $0 && At.jsx(GA, { enableColorScheme: i }),
      !$0 &&
        !i &&
        At.jsx("span", { className: sc, style: { display: "none" } }),
      a,
    ],
  });
}
const _0 = Fv({ themeId: Wr }),
  VA = Jc({
    palette: {
      mode: "light",
      primary: { main: "#fac8f2", light: "#ffb6d5" },
      secondary: { main: "#ffb6c1" },
      background: { default: "#fff", paper: "#faf6ef" },
      text: { primary: "#000", secondary: "#000" },
      divider: "#e0ddd4",
    },
    typography: {
      fontFamily: "'Schoolbell', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      h1: { fontSize: "3rem", fontWeight: 700 },
      h2: { fontSize: "2.5rem", fontWeight: 600 },
      h3: { fontSize: "2rem", fontWeight: 500 },
      h4: { fontSize: "1.5rem", fontWeight: 500 },
      body1: { fontSize: "1rem" },
      body2: { fontSize: "1rem", fontWeight: "bold" },
      button: { textTransform: "none" },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiTypography: { styleOverrides: { root: {} } },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
            color: "#000",
            fontSize: "3rem",
            fontWeight: 700,
          },
        },
      },
    },
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1540, xl: 1636 } },
  });
function $r(u) {
  if (u === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return u;
}
function cb(u, n) {
  (u.prototype = Object.create(n.prototype)),
    (u.prototype.constructor = u),
    (u.__proto__ = n);
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Mi = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Ru = { duration: 0.5, overwrite: !1, delay: 0 },
  Vg,
  An,
  Ae,
  xr = 1e8,
  kn = 1 / xr,
  Q0 = Math.PI * 2,
  $A = Q0 / 4,
  QA = 0,
  db = Math.sqrt,
  ZA = Math.cos,
  KA = Math.sin,
  gn = function (n) {
    return typeof n == "string";
  },
  He = function (n) {
    return typeof n == "function";
  },
  ea = function (n) {
    return typeof n == "number";
  },
  $g = function (n) {
    return typeof n > "u";
  },
  Cr = function (n) {
    return typeof n == "object";
  },
  In = function (n) {
    return n !== !1;
  },
  Qg = function () {
    return typeof window < "u";
  },
  Vf = function (n) {
    return He(n) || gn(n);
  },
  hb =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Un = Array.isArray,
  Z0 = /(?:-?\.?\d|\.)+/gi,
  gb = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  mu = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  v0 = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  pb = /[+-]=-?[.\d]+/,
  mb = /[^,'"\[\]\s]+/gi,
  PA = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Re,
  gr,
  K0,
  Zg,
  wi = {},
  Tc = {},
  yb,
  _b = function (n) {
    return (Tc = Du(n, wi)) && ri;
  },
  Kg = function (n, a) {
    return console.warn(
      "Invalid property",
      n,
      "set to",
      a,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  po = function (n, a) {
    return !a && console.warn(n);
  },
  vb = function (n, a) {
    return (n && (wi[n] = a) && Tc && (Tc[n] = a)) || wi;
  },
  mo = function () {
    return 0;
  },
  JA = { suppressEvents: !0, isStart: !0, kill: !1 },
  oc = { suppressEvents: !0, kill: !1 },
  FA = { suppressEvents: !0 },
  Pg = {},
  Na = [],
  P0 = {},
  bb,
  bi = {},
  b0 = {},
  B_ = 30,
  fc = [],
  Jg = "",
  Fg = function (n) {
    var a = n[0],
      i,
      l;
    if ((Cr(a) || He(a) || (n = [n]), !(i = (a._gsap || {}).harness))) {
      for (l = fc.length; l-- && !fc[l].targetTest(a); );
      i = fc[l];
    }
    for (l = n.length; l--; )
      (n[l] && (n[l]._gsap || (n[l]._gsap = new Vb(n[l], i)))) ||
        n.splice(l, 1);
    return n;
  },
  cl = function (n) {
    return n._gsap || Fg(Pi(n))[0]._gsap;
  },
  Sb = function (n, a, i) {
    return (i = n[a]) && He(i)
      ? n[a]()
      : ($g(i) && n.getAttribute && n.getAttribute(a)) || i;
  },
  ti = function (n, a) {
    return (n = n.split(",")).forEach(a) || n;
  },
  je = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  Ie = function (n) {
    return Math.round(n * 1e7) / 1e7 || 0;
  },
  xu = function (n, a) {
    var i = a.charAt(0),
      l = parseFloat(a.substr(2));
    return (
      (n = parseFloat(n)),
      i === "+" ? n + l : i === "-" ? n - l : i === "*" ? n * l : n / l
    );
  },
  WA = function (n, a) {
    for (var i = a.length, l = 0; n.indexOf(a[l]) < 0 && ++l < i; );
    return l < i;
  },
  Cc = function () {
    var n = Na.length,
      a = Na.slice(0),
      i,
      l;
    for (P0 = {}, Na.length = 0, i = 0; i < n; i++)
      (l = a[i]),
        l && l._lazy && (l.render(l._lazy[0], l._lazy[1], !0)._lazy = 0);
  },
  Wg = function (n) {
    return !!(n._initted || n._startAt || n.add);
  },
  xb = function (n, a, i, l) {
    Na.length && !An && Cc(),
      n.render(a, i, !!(An && a < 0 && Wg(n))),
      Na.length && !An && Cc();
  },
  Tb = function (n) {
    var a = parseFloat(n);
    return (a || a === 0) && (n + "").match(mb).length < 2
      ? a
      : gn(n)
      ? n.trim()
      : n;
  },
  Cb = function (n) {
    return n;
  },
  Ri = function (n, a) {
    for (var i in a) i in n || (n[i] = a[i]);
    return n;
  },
  IA = function (n) {
    return function (a, i) {
      for (var l in i)
        l in a || (l === "duration" && n) || l === "ease" || (a[l] = i[l]);
    };
  },
  Du = function (n, a) {
    for (var i in a) n[i] = a[i];
    return n;
  },
  k_ = function u(n, a) {
    for (var i in a)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (n[i] = Cr(a[i]) ? u(n[i] || (n[i] = {}), a[i]) : a[i]);
    return n;
  },
  Ac = function (n, a) {
    var i = {},
      l;
    for (l in n) l in a || (i[l] = n[l]);
    return i;
  },
  Fs = function (n) {
    var a = n.parent || Re,
      i = n.keyframes ? IA(Un(n.keyframes)) : Ri;
    if (In(n.inherit))
      for (; a; ) i(n, a.vars.defaults), (a = a.parent || a._dp);
    return n;
  },
  tE = function (n, a) {
    for (var i = n.length, l = i === a.length; l && i-- && n[i] === a[i]; );
    return i < 0;
  },
  Ab = function (n, a, i, l, o) {
    var c = n[l],
      d;
    if (o) for (d = a[o]; c && c[o] > d; ) c = c._prev;
    return (
      c ? ((a._next = c._next), (c._next = a)) : ((a._next = n[i]), (n[i] = a)),
      a._next ? (a._next._prev = a) : (n[l] = a),
      (a._prev = c),
      (a.parent = a._dp = n),
      a
    );
  },
  Fc = function (n, a, i, l) {
    i === void 0 && (i = "_first"), l === void 0 && (l = "_last");
    var o = a._prev,
      c = a._next;
    o ? (o._next = c) : n[i] === a && (n[i] = c),
      c ? (c._prev = o) : n[l] === a && (n[l] = o),
      (a._next = a._prev = a.parent = null);
  },
  La = function (n, a) {
    n.parent &&
      (!a || n.parent.autoRemoveChildren) &&
      n.parent.remove &&
      n.parent.remove(n),
      (n._act = 0);
  },
  dl = function (n, a) {
    if (n && (!a || a._end > n._dur || a._start < 0))
      for (var i = n; i; ) (i._dirty = 1), (i = i.parent);
    return n;
  },
  eE = function (n) {
    for (var a = n.parent; a && a.parent; )
      (a._dirty = 1), a.totalDuration(), (a = a.parent);
    return n;
  },
  J0 = function (n, a, i, l) {
    return (
      n._startAt &&
      (An
        ? n._startAt.revert(oc)
        : (n.vars.immediateRender && !n.vars.autoRevert) ||
          n._startAt.render(a, !0, l))
    );
  },
  nE = function u(n) {
    return !n || (n._ts && u(n.parent));
  },
  U_ = function (n) {
    return n._repeat ? zu(n._tTime, (n = n.duration() + n._rDelay)) * n : 0;
  },
  zu = function (n, a) {
    var i = Math.floor((n = Ie(n / a)));
    return n && i === n ? i - 1 : i;
  },
  Ec = function (n, a) {
    return (
      (n - a._start) * a._ts +
      (a._ts >= 0 ? 0 : a._dirty ? a.totalDuration() : a._tDur)
    );
  },
  Wc = function (n) {
    return (n._end = Ie(
      n._start + (n._tDur / Math.abs(n._ts || n._rts || kn) || 0)
    ));
  },
  Ic = function (n, a) {
    var i = n._dp;
    return (
      i &&
        i.smoothChildTiming &&
        n._ts &&
        ((n._start = Ie(
          i._time -
            (n._ts > 0
              ? a / n._ts
              : ((n._dirty ? n.totalDuration() : n._tDur) - a) / -n._ts)
        )),
        Wc(n),
        i._dirty || dl(i, n)),
      n
    );
  },
  Eb = function (n, a) {
    var i;
    if (
      ((a._time ||
        (!a._dur && a._initted) ||
        (a._start < n._time && (a._dur || !a.add))) &&
        ((i = Ec(n.rawTime(), a)),
        (!a._dur || Ro(0, a.totalDuration(), i) - a._tTime > kn) &&
          a.render(i, !0)),
      dl(n, a)._dp && n._initted && n._time >= n._dur && n._ts)
    ) {
      if (n._dur < n.duration())
        for (i = n; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      n._zTime = -1e-8;
    }
  },
  _r = function (n, a, i, l) {
    return (
      a.parent && La(a),
      (a._start = Ie(
        (ea(i) ? i : i || n !== Re ? Vi(n, i, a) : n._time) + a._delay
      )),
      (a._end = Ie(
        a._start + (a.totalDuration() / Math.abs(a.timeScale()) || 0)
      )),
      Ab(n, a, "_first", "_last", n._sort ? "_start" : 0),
      F0(a) || (n._recent = a),
      l || Eb(n, a),
      n._ts < 0 && Ic(n, n._tTime),
      n
    );
  },
  Ob = function (n, a) {
    return (
      (wi.ScrollTrigger || Kg("scrollTrigger", a)) &&
      wi.ScrollTrigger.create(a, n)
    );
  },
  Mb = function (n, a, i, l, o) {
    if ((tp(n, a, o), !n._initted)) return 1;
    if (
      !i &&
      n._pt &&
      !An &&
      ((n._dur && n.vars.lazy !== !1) || (!n._dur && n.vars.lazy)) &&
      bb !== Ti.frame
    )
      return Na.push(n), (n._lazy = [o, l]), 1;
  },
  iE = function u(n) {
    var a = n.parent;
    return a && a._ts && a._initted && !a._lock && (a.rawTime() < 0 || u(a));
  },
  F0 = function (n) {
    var a = n.data;
    return a === "isFromStart" || a === "isStart";
  },
  rE = function (n, a, i, l) {
    var o = n.ratio,
      c =
        a < 0 ||
        (!a &&
          ((!n._start && iE(n) && !(!n._initted && F0(n))) ||
            ((n._ts < 0 || n._dp._ts < 0) && !F0(n))))
          ? 0
          : 1,
      d = n._rDelay,
      p = 0,
      g,
      m,
      y;
    if (
      (d &&
        n._repeat &&
        ((p = Ro(0, n._tDur, a)),
        (m = zu(p, d)),
        n._yoyo && m & 1 && (c = 1 - c),
        m !== zu(n._tTime, d) &&
          ((o = 1 - c), n.vars.repeatRefresh && n._initted && n.invalidate())),
      c !== o || An || l || n._zTime === kn || (!a && n._zTime))
    ) {
      if (!n._initted && Mb(n, a, l, i, p)) return;
      for (
        y = n._zTime,
          n._zTime = a || (i ? kn : 0),
          i || (i = a && !y),
          n.ratio = c,
          n._from && (c = 1 - c),
          n._time = 0,
          n._tTime = p,
          g = n._pt;
        g;

      )
        g.r(c, g.d), (g = g._next);
      a < 0 && J0(n, a, i, !0),
        n._onUpdate && !i && Ai(n, "onUpdate"),
        p && n._repeat && !i && n.parent && Ai(n, "onRepeat"),
        (a >= n._tDur || a < 0) &&
          n.ratio === c &&
          (c && La(n, 1),
          !i &&
            !An &&
            (Ai(n, c ? "onComplete" : "onReverseComplete", !0),
            n._prom && n._prom()));
    } else n._zTime || (n._zTime = a);
  },
  aE = function (n, a, i) {
    var l;
    if (i > a)
      for (l = n._first; l && l._start <= i; ) {
        if (l.data === "isPause" && l._start > a) return l;
        l = l._next;
      }
    else
      for (l = n._last; l && l._start >= i; ) {
        if (l.data === "isPause" && l._start < a) return l;
        l = l._prev;
      }
  },
  Nu = function (n, a, i, l) {
    var o = n._repeat,
      c = Ie(a) || 0,
      d = n._tTime / n._tDur;
    return (
      d && !l && (n._time *= c / n._dur),
      (n._dur = c),
      (n._tDur = o ? (o < 0 ? 1e10 : Ie(c * (o + 1) + n._rDelay * o)) : c),
      d > 0 && !l && Ic(n, (n._tTime = n._tDur * d)),
      n.parent && Wc(n),
      i || dl(n.parent, n),
      n
    );
  },
  L_ = function (n) {
    return n instanceof $n ? dl(n) : Nu(n, n._dur);
  },
  lE = { _start: 0, endTime: mo, totalDuration: mo },
  Vi = function u(n, a, i) {
    var l = n.labels,
      o = n._recent || lE,
      c = n.duration() >= xr ? o.endTime(!1) : n._dur,
      d,
      p,
      g;
    return gn(a) && (isNaN(a) || a in l)
      ? ((p = a.charAt(0)),
        (g = a.substr(-1) === "%"),
        (d = a.indexOf("=")),
        p === "<" || p === ">"
          ? (d >= 0 && (a = a.replace(/=/, "")),
            (p === "<" ? o._start : o.endTime(o._repeat >= 0)) +
              (parseFloat(a.substr(1)) || 0) *
                (g ? (d < 0 ? o : i).totalDuration() / 100 : 1))
          : d < 0
          ? (a in l || (l[a] = c), l[a])
          : ((p = parseFloat(a.charAt(d - 1) + a.substr(d + 1))),
            g && i && (p = (p / 100) * (Un(i) ? i[0] : i).totalDuration()),
            d > 1 ? u(n, a.substr(0, d - 1), i) + p : c + p))
      : a == null
      ? c
      : +a;
  },
  Ws = function (n, a, i) {
    var l = ea(a[1]),
      o = (l ? 2 : 1) + (n < 2 ? 0 : 1),
      c = a[o],
      d,
      p;
    if ((l && (c.duration = a[1]), (c.parent = i), n)) {
      for (d = c, p = i; p && !("immediateRender" in d); )
        (d = p.vars.defaults || {}), (p = In(p.vars.inherit) && p.parent);
      (c.immediateRender = In(d.immediateRender)),
        n < 2 ? (c.runBackwards = 1) : (c.startAt = a[o - 1]);
    }
    return new We(a[0], c, a[o + 1]);
  },
  qa = function (n, a) {
    return n || n === 0 ? a(n) : a;
  },
  Ro = function (n, a, i) {
    return i < n ? n : i > a ? a : i;
  },
  Nn = function (n, a) {
    return !gn(n) || !(a = PA.exec(n)) ? "" : a[1];
  },
  uE = function (n, a, i) {
    return qa(i, function (l) {
      return Ro(n, a, l);
    });
  },
  W0 = [].slice,
  wb = function (n, a) {
    return (
      n &&
      Cr(n) &&
      "length" in n &&
      ((!a && !n.length) || (n.length - 1 in n && Cr(n[0]))) &&
      !n.nodeType &&
      n !== gr
    );
  },
  sE = function (n, a, i) {
    return (
      i === void 0 && (i = []),
      n.forEach(function (l) {
        var o;
        return (gn(l) && !a) || wb(l, 1)
          ? (o = i).push.apply(o, Pi(l))
          : i.push(l);
      }) || i
    );
  },
  Pi = function (n, a, i) {
    return Ae && !a && Ae.selector
      ? Ae.selector(n)
      : gn(n) && !i && (K0 || !Bu())
      ? W0.call((a || Zg).querySelectorAll(n), 0)
      : Un(n)
      ? sE(n, i)
      : wb(n)
      ? W0.call(n, 0)
      : n
      ? [n]
      : [];
  },
  I0 = function (n) {
    return (
      (n = Pi(n)[0] || po("Invalid scope") || {}),
      function (a) {
        var i = n.current || n.nativeElement || n;
        return Pi(
          a,
          i.querySelectorAll
            ? i
            : i === n
            ? po("Invalid scope") || Zg.createElement("div")
            : n
        );
      }
    );
  },
  Rb = function (n) {
    return n.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Db = function (n) {
    if (He(n)) return n;
    var a = Cr(n) ? n : { each: n },
      i = hl(a.ease),
      l = a.from || 0,
      o = parseFloat(a.base) || 0,
      c = {},
      d = l > 0 && l < 1,
      p = isNaN(l) || d,
      g = a.axis,
      m = l,
      y = l;
    return (
      gn(l)
        ? (m = y = { center: 0.5, edges: 0.5, end: 1 }[l] || 0)
        : !d && p && ((m = l[0]), (y = l[1])),
      function (b, S, C) {
        var _ = (C || a).length,
          E = c[_],
          w,
          z,
          D,
          R,
          O,
          k,
          N,
          Y,
          U;
        if (!E) {
          if (((U = a.grid === "auto" ? 0 : (a.grid || [1, xr])[1]), !U)) {
            for (
              N = -1e8;
              N < (N = C[U++].getBoundingClientRect().left) && U < _;

            );
            U < _ && U--;
          }
          for (
            E = c[_] = [],
              w = p ? Math.min(U, _) * m - 0.5 : l % U,
              z = U === xr ? 0 : p ? (_ * y) / U - 0.5 : (l / U) | 0,
              N = 0,
              Y = xr,
              k = 0;
            k < _;
            k++
          )
            (D = (k % U) - w),
              (R = z - ((k / U) | 0)),
              (E[k] = O = g ? Math.abs(g === "y" ? R : D) : db(D * D + R * R)),
              O > N && (N = O),
              O < Y && (Y = O);
          l === "random" && Rb(E),
            (E.max = N - Y),
            (E.min = Y),
            (E.v = _ =
              (parseFloat(a.amount) ||
                parseFloat(a.each) *
                  (U > _
                    ? _ - 1
                    : g
                    ? g === "y"
                      ? _ / U
                      : U
                    : Math.max(U, _ / U)) ||
                0) * (l === "edges" ? -1 : 1)),
            (E.b = _ < 0 ? o - _ : o),
            (E.u = Nn(a.amount || a.each) || 0),
            (i = i && _ < 0 ? Xb(i) : i);
        }
        return (
          (_ = (E[b] - E.min) / E.max || 0),
          Ie(E.b + (i ? i(_) : _) * E.v) + E.u
        );
      }
    );
  },
  tg = function (n) {
    var a = Math.pow(10, ((n + "").split(".")[1] || "").length);
    return function (i) {
      var l = Ie(Math.round(parseFloat(i) / n) * n * a);
      return (l - (l % 1)) / a + (ea(i) ? 0 : Nn(i));
    };
  },
  zb = function (n, a) {
    var i = Un(n),
      l,
      o;
    return (
      !i &&
        Cr(n) &&
        ((l = i = n.radius || xr),
        n.values
          ? ((n = Pi(n.values)), (o = !ea(n[0])) && (l *= l))
          : (n = tg(n.increment))),
      qa(
        a,
        i
          ? He(n)
            ? function (c) {
                return (o = n(c)), Math.abs(o - c) <= l ? o : c;
              }
            : function (c) {
                for (
                  var d = parseFloat(o ? c.x : c),
                    p = parseFloat(o ? c.y : 0),
                    g = xr,
                    m = 0,
                    y = n.length,
                    b,
                    S;
                  y--;

                )
                  o
                    ? ((b = n[y].x - d), (S = n[y].y - p), (b = b * b + S * S))
                    : (b = Math.abs(n[y] - d)),
                    b < g && ((g = b), (m = y));
                return (
                  (m = !l || g <= l ? n[m] : c),
                  o || m === c || ea(c) ? m : m + Nn(c)
                );
              }
          : tg(n)
      )
    );
  },
  Nb = function (n, a, i, l) {
    return qa(Un(n) ? !a : i === !0 ? !!(i = 0) : !l, function () {
      return Un(n)
        ? n[~~(Math.random() * n.length)]
        : (i = i || 1e-5) &&
            (l = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((n - i / 2 + Math.random() * (a - n + i * 0.99)) / i) *
                i *
                l
            ) / l;
    });
  },
  oE = function () {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return function (l) {
      return a.reduce(function (o, c) {
        return c(o);
      }, l);
    };
  },
  fE = function (n, a) {
    return function (i) {
      return n(parseFloat(i)) + (a || Nn(i));
    };
  },
  cE = function (n, a, i) {
    return kb(n, a, 0, 1, i);
  },
  Bb = function (n, a, i) {
    return qa(i, function (l) {
      return n[~~a(l)];
    });
  },
  dE = function u(n, a, i) {
    var l = a - n;
    return Un(n)
      ? Bb(n, u(0, n.length), a)
      : qa(i, function (o) {
          return ((l + ((o - n) % l)) % l) + n;
        });
  },
  hE = function u(n, a, i) {
    var l = a - n,
      o = l * 2;
    return Un(n)
      ? Bb(n, u(0, n.length - 1), a)
      : qa(i, function (c) {
          return (c = (o + ((c - n) % o)) % o || 0), n + (c > l ? o - c : c);
        });
  },
  yo = function (n) {
    for (var a = 0, i = "", l, o, c, d; ~(l = n.indexOf("random(", a)); )
      (c = n.indexOf(")", l)),
        (d = n.charAt(l + 7) === "["),
        (o = n.substr(l + 7, c - l - 7).match(d ? mb : Z0)),
        (i +=
          n.substr(a, l - a) + Nb(d ? o : +o[0], d ? 0 : +o[1], +o[2] || 1e-5)),
        (a = c + 1);
    return i + n.substr(a, n.length - a);
  },
  kb = function (n, a, i, l, o) {
    var c = a - n,
      d = l - i;
    return qa(o, function (p) {
      return i + (((p - n) / c) * d || 0);
    });
  },
  gE = function u(n, a, i, l) {
    var o = isNaN(n + a)
      ? 0
      : function (S) {
          return (1 - S) * n + S * a;
        };
    if (!o) {
      var c = gn(n),
        d = {},
        p,
        g,
        m,
        y,
        b;
      if ((i === !0 && (l = 1) && (i = null), c))
        (n = { p: n }), (a = { p: a });
      else if (Un(n) && !Un(a)) {
        for (m = [], y = n.length, b = y - 2, g = 1; g < y; g++)
          m.push(u(n[g - 1], n[g]));
        y--,
          (o = function (C) {
            C *= y;
            var _ = Math.min(b, ~~C);
            return m[_](C - _);
          }),
          (i = a);
      } else l || (n = Du(Un(n) ? [] : {}, n));
      if (!m) {
        for (p in a) Ig.call(d, n, p, "get", a[p]);
        o = function (C) {
          return ip(C, d) || (c ? n.p : n);
        };
      }
    }
    return qa(i, o);
  },
  H_ = function (n, a, i) {
    var l = n.labels,
      o = xr,
      c,
      d,
      p;
    for (c in l)
      (d = l[c] - a),
        d < 0 == !!i && d && o > (d = Math.abs(d)) && ((p = c), (o = d));
    return p;
  },
  Ai = function (n, a, i) {
    var l = n.vars,
      o = l[a],
      c = Ae,
      d = n._ctx,
      p,
      g,
      m;
    if (o)
      return (
        (p = l[a + "Params"]),
        (g = l.callbackScope || n),
        i && Na.length && Cc(),
        d && (Ae = d),
        (m = p ? o.apply(g, p) : o.call(g)),
        (Ae = c),
        m
      );
  },
  Xs = function (n) {
    return (
      La(n),
      n.scrollTrigger && n.scrollTrigger.kill(!!An),
      n.progress() < 1 && Ai(n, "onInterrupt"),
      n
    );
  },
  yu,
  Ub = [],
  Lb = function (n) {
    if (n)
      if (((n = (!n.name && n.default) || n), Qg() || n.headless)) {
        var a = n.name,
          i = He(n),
          l =
            a && !i && n.init
              ? function () {
                  this._props = [];
                }
              : n,
          o = {
            init: mo,
            render: ip,
            add: Ig,
            kill: RE,
            modifier: wE,
            rawVars: 0,
          },
          c = {
            targetTest: 0,
            get: 0,
            getSetter: np,
            aliases: {},
            register: 0,
          };
        if ((Bu(), n !== l)) {
          if (bi[a]) return;
          Ri(l, Ri(Ac(n, o), c)),
            Du(l.prototype, Du(o, Ac(n, c))),
            (bi[(l.prop = a)] = l),
            n.targetTest && (fc.push(l), (Pg[a] = 1)),
            (a =
              (a === "css" ? "CSS" : a.charAt(0).toUpperCase() + a.substr(1)) +
              "Plugin");
        }
        vb(a, l), n.register && n.register(ri, l, ei);
      } else Ub.push(n);
  },
  ge = 255,
  Gs = {
    aqua: [0, ge, ge],
    lime: [0, ge, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ge],
    navy: [0, 0, 128],
    white: [ge, ge, ge],
    olive: [128, 128, 0],
    yellow: [ge, ge, 0],
    orange: [ge, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ge, 0, 0],
    pink: [ge, 192, 203],
    cyan: [0, ge, ge],
    transparent: [ge, ge, ge, 0],
  },
  S0 = function (n, a, i) {
    return (
      (n += n < 0 ? 1 : n > 1 ? -1 : 0),
      ((n * 6 < 1
        ? a + (i - a) * n * 6
        : n < 0.5
        ? i
        : n * 3 < 2
        ? a + (i - a) * (2 / 3 - n) * 6
        : a) *
        ge +
        0.5) |
        0
    );
  },
  Hb = function (n, a, i) {
    var l = n ? (ea(n) ? [n >> 16, (n >> 8) & ge, n & ge] : 0) : Gs.black,
      o,
      c,
      d,
      p,
      g,
      m,
      y,
      b,
      S,
      C;
    if (!l) {
      if ((n.substr(-1) === "," && (n = n.substr(0, n.length - 1)), Gs[n]))
        l = Gs[n];
      else if (n.charAt(0) === "#") {
        if (
          (n.length < 6 &&
            ((o = n.charAt(1)),
            (c = n.charAt(2)),
            (d = n.charAt(3)),
            (n =
              "#" +
              o +
              o +
              c +
              c +
              d +
              d +
              (n.length === 5 ? n.charAt(4) + n.charAt(4) : ""))),
          n.length === 9)
        )
          return (
            (l = parseInt(n.substr(1, 6), 16)),
            [l >> 16, (l >> 8) & ge, l & ge, parseInt(n.substr(7), 16) / 255]
          );
        (n = parseInt(n.substr(1), 16)), (l = [n >> 16, (n >> 8) & ge, n & ge]);
      } else if (n.substr(0, 3) === "hsl") {
        if (((l = C = n.match(Z0)), !a))
          (p = (+l[0] % 360) / 360),
            (g = +l[1] / 100),
            (m = +l[2] / 100),
            (c = m <= 0.5 ? m * (g + 1) : m + g - m * g),
            (o = m * 2 - c),
            l.length > 3 && (l[3] *= 1),
            (l[0] = S0(p + 1 / 3, o, c)),
            (l[1] = S0(p, o, c)),
            (l[2] = S0(p - 1 / 3, o, c));
        else if (~n.indexOf("="))
          return (l = n.match(gb)), i && l.length < 4 && (l[3] = 1), l;
      } else l = n.match(Z0) || Gs.transparent;
      l = l.map(Number);
    }
    return (
      a &&
        !C &&
        ((o = l[0] / ge),
        (c = l[1] / ge),
        (d = l[2] / ge),
        (y = Math.max(o, c, d)),
        (b = Math.min(o, c, d)),
        (m = (y + b) / 2),
        y === b
          ? (p = g = 0)
          : ((S = y - b),
            (g = m > 0.5 ? S / (2 - y - b) : S / (y + b)),
            (p =
              y === o
                ? (c - d) / S + (c < d ? 6 : 0)
                : y === c
                ? (d - o) / S + 2
                : (o - c) / S + 4),
            (p *= 60)),
        (l[0] = ~~(p + 0.5)),
        (l[1] = ~~(g * 100 + 0.5)),
        (l[2] = ~~(m * 100 + 0.5))),
      i && l.length < 4 && (l[3] = 1),
      l
    );
  },
  Yb = function (n) {
    var a = [],
      i = [],
      l = -1;
    return (
      n.split(Ba).forEach(function (o) {
        var c = o.match(mu) || [];
        a.push.apply(a, c), i.push((l += c.length + 1));
      }),
      (a.c = i),
      a
    );
  },
  Y_ = function (n, a, i) {
    var l = "",
      o = (n + l).match(Ba),
      c = a ? "hsla(" : "rgba(",
      d = 0,
      p,
      g,
      m,
      y;
    if (!o) return n;
    if (
      ((o = o.map(function (b) {
        return (
          (b = Hb(b, a, 1)) &&
          c +
            (a ? b[0] + "," + b[1] + "%," + b[2] + "%," + b[3] : b.join(",")) +
            ")"
        );
      })),
      i && ((m = Yb(n)), (p = i.c), p.join(l) !== m.c.join(l)))
    )
      for (g = n.replace(Ba, "1").split(mu), y = g.length - 1; d < y; d++)
        l +=
          g[d] +
          (~p.indexOf(d)
            ? o.shift() || c + "0,0,0,0)"
            : (m.length ? m : o.length ? o : i).shift());
    if (!g)
      for (g = n.split(Ba), y = g.length - 1; d < y; d++) l += g[d] + o[d];
    return l + g[y];
  },
  Ba = (function () {
    var u =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      n;
    for (n in Gs) u += "|" + n + "\\b";
    return new RegExp(u + ")", "gi");
  })(),
  pE = /hsl[a]?\(/,
  qb = function (n) {
    var a = n.join(" "),
      i;
    if (((Ba.lastIndex = 0), Ba.test(a)))
      return (
        (i = pE.test(a)),
        (n[1] = Y_(n[1], i)),
        (n[0] = Y_(n[0], i, Yb(n[1]))),
        !0
      );
  },
  _o,
  Ti = (function () {
    var u = Date.now,
      n = 500,
      a = 33,
      i = u(),
      l = i,
      o = 1e3 / 240,
      c = o,
      d = [],
      p,
      g,
      m,
      y,
      b,
      S,
      C = function _(E) {
        var w = u() - l,
          z = E === !0,
          D,
          R,
          O,
          k;
        if (
          ((w > n || w < 0) && (i += w - a),
          (l += w),
          (O = l - i),
          (D = O - c),
          (D > 0 || z) &&
            ((k = ++y.frame),
            (b = O - y.time * 1e3),
            (y.time = O = O / 1e3),
            (c += D + (D >= o ? 4 : o - D)),
            (R = 1)),
          z || (p = g(_)),
          R)
        )
          for (S = 0; S < d.length; S++) d[S](O, b, k, E);
      };
    return (
      (y = {
        time: 0,
        frame: 0,
        tick: function () {
          C(!0);
        },
        deltaRatio: function (E) {
          return b / (1e3 / (E || 60));
        },
        wake: function () {
          yb &&
            (!K0 &&
              Qg() &&
              ((gr = K0 = window),
              (Zg = gr.document || {}),
              (wi.gsap = ri),
              (gr.gsapVersions || (gr.gsapVersions = [])).push(ri.version),
              _b(Tc || gr.GreenSockGlobals || (!gr.gsap && gr) || {}),
              Ub.forEach(Lb)),
            (m = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            p && y.sleep(),
            (g =
              m ||
              function (E) {
                return setTimeout(E, (c - y.time * 1e3 + 1) | 0);
              }),
            (_o = 1),
            C(2));
        },
        sleep: function () {
          (m ? cancelAnimationFrame : clearTimeout)(p), (_o = 0), (g = mo);
        },
        lagSmoothing: function (E, w) {
          (n = E || 1 / 0), (a = Math.min(w || 33, n));
        },
        fps: function (E) {
          (o = 1e3 / (E || 240)), (c = y.time * 1e3 + o);
        },
        add: function (E, w, z) {
          var D = w
            ? function (R, O, k, N) {
                E(R, O, k, N), y.remove(D);
              }
            : E;
          return y.remove(E), d[z ? "unshift" : "push"](D), Bu(), D;
        },
        remove: function (E, w) {
          ~(w = d.indexOf(E)) && d.splice(w, 1) && S >= w && S--;
        },
        _listeners: d,
      }),
      y
    );
  })(),
  Bu = function () {
    return !_o && Ti.wake();
  },
  Yt = {},
  mE = /^[\d.\-M][\d.\-,\s]/,
  yE = /["']/g,
  _E = function (n) {
    for (
      var a = {},
        i = n.substr(1, n.length - 3).split(":"),
        l = i[0],
        o = 1,
        c = i.length,
        d,
        p,
        g;
      o < c;
      o++
    )
      (p = i[o]),
        (d = o !== c - 1 ? p.lastIndexOf(",") : p.length),
        (g = p.substr(0, d)),
        (a[l] = isNaN(g) ? g.replace(yE, "").trim() : +g),
        (l = p.substr(d + 1).trim());
    return a;
  },
  vE = function (n) {
    var a = n.indexOf("(") + 1,
      i = n.indexOf(")"),
      l = n.indexOf("(", a);
    return n.substring(a, ~l && l < i ? n.indexOf(")", i + 1) : i);
  },
  bE = function (n) {
    var a = (n + "").split("("),
      i = Yt[a[0]];
    return i && a.length > 1 && i.config
      ? i.config.apply(
          null,
          ~n.indexOf("{") ? [_E(a[1])] : vE(n).split(",").map(Tb)
        )
      : Yt._CE && mE.test(n)
      ? Yt._CE("", n)
      : i;
  },
  Xb = function (n) {
    return function (a) {
      return 1 - n(1 - a);
    };
  },
  Gb = function u(n, a) {
    for (var i = n._first, l; i; )
      i instanceof $n
        ? u(i, a)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== a &&
          (i.timeline
            ? u(i.timeline, a)
            : ((l = i._ease),
              (i._ease = i._yEase),
              (i._yEase = l),
              (i._yoyo = a))),
        (i = i._next);
  },
  hl = function (n, a) {
    return (n && (He(n) ? n : Yt[n] || bE(n))) || a;
  },
  Al = function (n, a, i, l) {
    i === void 0 &&
      (i = function (p) {
        return 1 - a(1 - p);
      }),
      l === void 0 &&
        (l = function (p) {
          return p < 0.5 ? a(p * 2) / 2 : 1 - a((1 - p) * 2) / 2;
        });
    var o = { easeIn: a, easeOut: i, easeInOut: l },
      c;
    return (
      ti(n, function (d) {
        (Yt[d] = wi[d] = o), (Yt[(c = d.toLowerCase())] = i);
        for (var p in o)
          Yt[
            c + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")
          ] = Yt[d + "." + p] = o[p];
      }),
      o
    );
  },
  jb = function (n) {
    return function (a) {
      return a < 0.5 ? (1 - n(1 - a * 2)) / 2 : 0.5 + n((a - 0.5) * 2) / 2;
    };
  },
  x0 = function u(n, a, i) {
    var l = a >= 1 ? a : 1,
      o = (i || (n ? 0.3 : 0.45)) / (a < 1 ? a : 1),
      c = (o / Q0) * (Math.asin(1 / l) || 0),
      d = function (m) {
        return m === 1 ? 1 : l * Math.pow(2, -10 * m) * KA((m - c) * o) + 1;
      },
      p =
        n === "out"
          ? d
          : n === "in"
          ? function (g) {
              return 1 - d(1 - g);
            }
          : jb(d);
    return (
      (o = Q0 / o),
      (p.config = function (g, m) {
        return u(n, g, m);
      }),
      p
    );
  },
  T0 = function u(n, a) {
    a === void 0 && (a = 1.70158);
    var i = function (c) {
        return c ? --c * c * ((a + 1) * c + a) + 1 : 0;
      },
      l =
        n === "out"
          ? i
          : n === "in"
          ? function (o) {
              return 1 - i(1 - o);
            }
          : jb(i);
    return (
      (l.config = function (o) {
        return u(n, o);
      }),
      l
    );
  };
ti("Linear,Quad,Cubic,Quart,Quint,Strong", function (u, n) {
  var a = n < 5 ? n + 1 : n;
  Al(
    u + ",Power" + (a - 1),
    n
      ? function (i) {
          return Math.pow(i, a);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, a);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, a) / 2
        : 1 - Math.pow((1 - i) * 2, a) / 2;
    }
  );
});
Yt.Linear.easeNone = Yt.none = Yt.Linear.easeIn;
Al("Elastic", x0("in"), x0("out"), x0());
(function (u, n) {
  var a = 1 / n,
    i = 2 * a,
    l = 2.5 * a,
    o = function (d) {
      return d < a
        ? u * d * d
        : d < i
        ? u * Math.pow(d - 1.5 / n, 2) + 0.75
        : d < l
        ? u * (d -= 2.25 / n) * d + 0.9375
        : u * Math.pow(d - 2.625 / n, 2) + 0.984375;
    };
  Al(
    "Bounce",
    function (c) {
      return 1 - o(1 - c);
    },
    o
  );
})(7.5625, 2.75);
Al("Expo", function (u) {
  return Math.pow(2, 10 * (u - 1)) * u + u * u * u * u * u * u * (1 - u);
});
Al("Circ", function (u) {
  return -(db(1 - u * u) - 1);
});
Al("Sine", function (u) {
  return u === 1 ? 1 : -ZA(u * $A) + 1;
});
Al("Back", T0("in"), T0("out"), T0());
Yt.SteppedEase =
  Yt.steps =
  wi.SteppedEase =
    {
      config: function (n, a) {
        n === void 0 && (n = 1);
        var i = 1 / n,
          l = n + (a ? 0 : 1),
          o = a ? 1 : 0,
          c = 1 - kn;
        return function (d) {
          return (((l * Ro(0, c, d)) | 0) + o) * i;
        };
      },
    };
Ru.ease = Yt["quad.out"];
ti(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (u) {
    return (Jg += u + "," + u + "Params,");
  }
);
var Vb = function (n, a) {
    (this.id = QA++),
      (n._gsap = this),
      (this.target = n),
      (this.harness = a),
      (this.get = a ? a.get : Sb),
      (this.set = a ? a.getSetter : np);
  },
  vo = (function () {
    function u(a) {
      (this.vars = a),
        (this._delay = +a.delay || 0),
        (this._repeat = a.repeat === 1 / 0 ? -2 : a.repeat || 0) &&
          ((this._rDelay = a.repeatDelay || 0),
          (this._yoyo = !!a.yoyo || !!a.yoyoEase)),
        (this._ts = 1),
        Nu(this, +a.duration, 1, 1),
        (this.data = a.data),
        Ae && ((this._ctx = Ae), Ae.data.push(this)),
        _o || Ti.wake();
    }
    var n = u.prototype;
    return (
      (n.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (n.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (n.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            Nu(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (n.totalTime = function (i, l) {
        if ((Bu(), !arguments.length)) return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
          for (Ic(this, i), !o._dp || o.parent || Eb(o, this); o && o.parent; )
            o.parent._time !==
              o._start +
                (o._ts >= 0
                  ? o._tTime / o._ts
                  : (o.totalDuration() - o._tTime) / -o._ts) &&
              o.totalTime(o._tTime, !0),
              (o = o.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            _r(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !l) ||
            (this._initted && Math.abs(this._zTime) === kn) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), xb(this, i, l)),
          this
        );
      }),
      (n.time = function (i, l) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + U_(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              l
            )
          : this._time;
      }),
      (n.totalProgress = function (i, l) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, l)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (n.progress = function (i, l) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                U_(this),
              l
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (n.iteration = function (i, l) {
        var o = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * o, l)
          : this._repeat
          ? zu(this._tTime, o) + 1
          : 1;
      }),
      (n.timeScale = function (i, l) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === i) return this;
        var o =
          this.parent && this._ts ? Ec(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
          this.totalTime(
            Ro(-Math.abs(this._delay), this.totalDuration(), o),
            l !== !1
          ),
          Wc(this),
          eE(this)
        );
      }),
      (n.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Bu(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== kn &&
                      (this._tTime -= kn)
                  ))),
            this)
          : this._ps;
      }),
      (n.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var l = this.parent || this._dp;
          return (
            l && (l._sort || !this.parent) && _r(l, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (n.endTime = function (i) {
        return (
          this._start +
          (In(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (n.rawTime = function (i) {
        var l = this.parent || this._dp;
        return l
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Ec(l.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (n.revert = function (i) {
        i === void 0 && (i = FA);
        var l = An;
        return (
          (An = i),
          Wg(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (An = l),
          this
        );
      }),
      (n.globalTime = function (i) {
        for (var l = this, o = arguments.length ? i : l.rawTime(); l; )
          (o = l._start + o / (Math.abs(l._ts) || 1)), (l = l._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : o;
      }),
      (n.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), L_(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (n.repeatDelay = function (i) {
        if (arguments.length) {
          var l = this._time;
          return (this._rDelay = i), L_(this), l ? this.time(l) : this;
        }
        return this._rDelay;
      }),
      (n.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (n.seek = function (i, l) {
        return this.totalTime(Vi(this, i), In(l));
      }),
      (n.restart = function (i, l) {
        return (
          this.play().totalTime(i ? -this._delay : 0, In(l)),
          this._dur || (this._zTime = -1e-8),
          this
        );
      }),
      (n.play = function (i, l) {
        return i != null && this.seek(i, l), this.reversed(!1).paused(!1);
      }),
      (n.reverse = function (i, l) {
        return (
          i != null && this.seek(i || this.totalDuration(), l),
          this.reversed(!0).paused(!1)
        );
      }),
      (n.pause = function (i, l) {
        return i != null && this.seek(i, l), this.paused(!0);
      }),
      (n.resume = function () {
        return this.paused(!1);
      }),
      (n.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -1e-8 : 0)),
            this)
          : this._rts < 0;
      }),
      (n.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }),
      (n.isActive = function () {
        var i = this.parent || this._dp,
          l = this._start,
          o;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (o = i.rawTime(!0)) >= l &&
            o < this.endTime(!0) - kn)
        );
      }),
      (n.eventCallback = function (i, l, o) {
        var c = this.vars;
        return arguments.length > 1
          ? (l
              ? ((c[i] = l),
                o && (c[i + "Params"] = o),
                i === "onUpdate" && (this._onUpdate = l))
              : delete c[i],
            this)
          : c[i];
      }),
      (n.then = function (i) {
        var l = this;
        return new Promise(function (o) {
          var c = He(i) ? i : Cb,
            d = function () {
              var g = l.then;
              (l.then = null),
                He(c) && (c = c(l)) && (c.then || c === l) && (l.then = g),
                o(c),
                (l.then = g);
            };
          (l._initted && l.totalProgress() === 1 && l._ts >= 0) ||
          (!l._tTime && l._ts < 0)
            ? d()
            : (l._prom = d);
        });
      }),
      (n.kill = function () {
        Xs(this);
      }),
      u
    );
  })();
Ri(vo.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var $n = (function (u) {
  cb(n, u);
  function n(i, l) {
    var o;
    return (
      i === void 0 && (i = {}),
      (o = u.call(this, i) || this),
      (o.labels = {}),
      (o.smoothChildTiming = !!i.smoothChildTiming),
      (o.autoRemoveChildren = !!i.autoRemoveChildren),
      (o._sort = In(i.sortChildren)),
      Re && _r(i.parent || Re, $r(o), l),
      i.reversed && o.reverse(),
      i.paused && o.paused(!0),
      i.scrollTrigger && Ob($r(o), i.scrollTrigger),
      o
    );
  }
  var a = n.prototype;
  return (
    (a.to = function (l, o, c) {
      return Ws(0, arguments, this), this;
    }),
    (a.from = function (l, o, c) {
      return Ws(1, arguments, this), this;
    }),
    (a.fromTo = function (l, o, c, d) {
      return Ws(2, arguments, this), this;
    }),
    (a.set = function (l, o, c) {
      return (
        (o.duration = 0),
        (o.parent = this),
        Fs(o).repeatDelay || (o.repeat = 0),
        (o.immediateRender = !!o.immediateRender),
        new We(l, o, Vi(this, c), 1),
        this
      );
    }),
    (a.call = function (l, o, c) {
      return _r(this, We.delayedCall(0, l, o), c);
    }),
    (a.staggerTo = function (l, o, c, d, p, g, m) {
      return (
        (c.duration = o),
        (c.stagger = c.stagger || d),
        (c.onComplete = g),
        (c.onCompleteParams = m),
        (c.parent = this),
        new We(l, c, Vi(this, p)),
        this
      );
    }),
    (a.staggerFrom = function (l, o, c, d, p, g, m) {
      return (
        (c.runBackwards = 1),
        (Fs(c).immediateRender = In(c.immediateRender)),
        this.staggerTo(l, o, c, d, p, g, m)
      );
    }),
    (a.staggerFromTo = function (l, o, c, d, p, g, m, y) {
      return (
        (d.startAt = c),
        (Fs(d).immediateRender = In(d.immediateRender)),
        this.staggerTo(l, o, d, p, g, m, y)
      );
    }),
    (a.render = function (l, o, c) {
      var d = this._time,
        p = this._dirty ? this.totalDuration() : this._tDur,
        g = this._dur,
        m = l <= 0 ? 0 : Ie(l),
        y = this._zTime < 0 != l < 0 && (this._initted || !g),
        b,
        S,
        C,
        _,
        E,
        w,
        z,
        D,
        R,
        O,
        k,
        N;
      if (
        (this !== Re && m > p && l >= 0 && (m = p), m !== this._tTime || c || y)
      ) {
        if (
          (d !== this._time &&
            g &&
            ((m += this._time - d), (l += this._time - d)),
          (b = m),
          (R = this._start),
          (D = this._ts),
          (w = !D),
          y && (g || (d = this._zTime), (l || !o) && (this._zTime = l)),
          this._repeat)
        ) {
          if (
            ((k = this._yoyo),
            (E = g + this._rDelay),
            this._repeat < -1 && l < 0)
          )
            return this.totalTime(E * 100 + l, o, c);
          if (
            ((b = Ie(m % E)),
            m === p
              ? ((_ = this._repeat), (b = g))
              : ((O = Ie(m / E)),
                (_ = ~~O),
                _ && _ === O && ((b = g), _--),
                b > g && (b = g)),
            (O = zu(this._tTime, E)),
            !d &&
              this._tTime &&
              O !== _ &&
              this._tTime - O * E - this._dur <= 0 &&
              (O = _),
            k && _ & 1 && ((b = g - b), (N = 1)),
            _ !== O && !this._lock)
          ) {
            var Y = k && O & 1,
              U = Y === (k && _ & 1);
            if (
              (_ < O && (Y = !Y),
              (d = Y ? 0 : m % g ? g : m),
              (this._lock = 1),
              (this.render(d || (N ? 0 : Ie(_ * E)), o, !g)._lock = 0),
              (this._tTime = m),
              !o && this.parent && Ai(this, "onRepeat"),
              this.vars.repeatRefresh && !N && (this.invalidate()._lock = 1),
              (d && d !== this._time) ||
                w !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((g = this._dur),
              (p = this._tDur),
              U &&
                ((this._lock = 2),
                (d = Y ? g : -1e-4),
                this.render(d, !0),
                this.vars.repeatRefresh && !N && this.invalidate()),
              (this._lock = 0),
              !this._ts && !w)
            )
              return this;
            Gb(this, N);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((z = aE(this, Ie(d), Ie(b))), z && (m -= b - (b = z._start))),
          (this._tTime = m),
          (this._time = b),
          (this._act = !D),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = l),
            (d = 0)),
          !d && m && !o && !O && (Ai(this, "onStart"), this._tTime !== m))
        )
          return this;
        if (b >= d && l >= 0)
          for (S = this._first; S; ) {
            if (
              ((C = S._next), (S._act || b >= S._start) && S._ts && z !== S)
            ) {
              if (S.parent !== this) return this.render(l, o, c);
              if (
                (S.render(
                  S._ts > 0
                    ? (b - S._start) * S._ts
                    : (S._dirty ? S.totalDuration() : S._tDur) +
                        (b - S._start) * S._ts,
                  o,
                  c
                ),
                b !== this._time || (!this._ts && !w))
              ) {
                (z = 0), C && (m += this._zTime = -1e-8);
                break;
              }
            }
            S = C;
          }
        else {
          S = this._last;
          for (var x = l < 0 ? l : b; S; ) {
            if (((C = S._prev), (S._act || x <= S._end) && S._ts && z !== S)) {
              if (S.parent !== this) return this.render(l, o, c);
              if (
                (S.render(
                  S._ts > 0
                    ? (x - S._start) * S._ts
                    : (S._dirty ? S.totalDuration() : S._tDur) +
                        (x - S._start) * S._ts,
                  o,
                  c || (An && Wg(S))
                ),
                b !== this._time || (!this._ts && !w))
              ) {
                (z = 0), C && (m += this._zTime = x ? -1e-8 : kn);
                break;
              }
            }
            S = C;
          }
        }
        if (
          z &&
          !o &&
          (this.pause(),
          (z.render(b >= d ? 0 : -1e-8)._zTime = b >= d ? 1 : -1),
          this._ts)
        )
          return (this._start = R), Wc(this), this.render(l, o, c);
        this._onUpdate && !o && Ai(this, "onUpdate", !0),
          ((m === p && this._tTime >= this.totalDuration()) || (!m && d)) &&
            (R === this._start || Math.abs(D) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((l || !g) &&
                ((m === p && this._ts > 0) || (!m && this._ts < 0)) &&
                La(this, 1),
              !o &&
                !(l < 0 && !d) &&
                (m || d || !p) &&
                (Ai(
                  this,
                  m === p && l >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(m < p && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (a.add = function (l, o) {
      var c = this;
      if ((ea(o) || (o = Vi(this, o, l)), !(l instanceof vo))) {
        if (Un(l))
          return (
            l.forEach(function (d) {
              return c.add(d, o);
            }),
            this
          );
        if (gn(l)) return this.addLabel(l, o);
        if (He(l)) l = We.delayedCall(0, l);
        else return this;
      }
      return this !== l ? _r(this, l, o) : this;
    }),
    (a.getChildren = function (l, o, c, d) {
      l === void 0 && (l = !0),
        o === void 0 && (o = !0),
        c === void 0 && (c = !0),
        d === void 0 && (d = -1e8);
      for (var p = [], g = this._first; g; )
        g._start >= d &&
          (g instanceof We
            ? o && p.push(g)
            : (c && p.push(g), l && p.push.apply(p, g.getChildren(!0, o, c)))),
          (g = g._next);
      return p;
    }),
    (a.getById = function (l) {
      for (var o = this.getChildren(1, 1, 1), c = o.length; c--; )
        if (o[c].vars.id === l) return o[c];
    }),
    (a.remove = function (l) {
      return gn(l)
        ? this.removeLabel(l)
        : He(l)
        ? this.killTweensOf(l)
        : (l.parent === this && Fc(this, l),
          l === this._recent && (this._recent = this._last),
          dl(this));
    }),
    (a.totalTime = function (l, o) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Ie(
              Ti.time -
                (this._ts > 0
                  ? l / this._ts
                  : (this.totalDuration() - l) / -this._ts)
            )),
          u.prototype.totalTime.call(this, l, o),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (a.addLabel = function (l, o) {
      return (this.labels[l] = Vi(this, o)), this;
    }),
    (a.removeLabel = function (l) {
      return delete this.labels[l], this;
    }),
    (a.addPause = function (l, o, c) {
      var d = We.delayedCall(0, o || mo, c);
      return (
        (d.data = "isPause"), (this._hasPause = 1), _r(this, d, Vi(this, l))
      );
    }),
    (a.removePause = function (l) {
      var o = this._first;
      for (l = Vi(this, l); o; )
        o._start === l && o.data === "isPause" && La(o), (o = o._next);
    }),
    (a.killTweensOf = function (l, o, c) {
      for (var d = this.getTweensOf(l, c), p = d.length; p--; )
        Ma !== d[p] && d[p].kill(l, o);
      return this;
    }),
    (a.getTweensOf = function (l, o) {
      for (var c = [], d = Pi(l), p = this._first, g = ea(o), m; p; )
        p instanceof We
          ? WA(p._targets, d) &&
            (g
              ? (!Ma || (p._initted && p._ts)) &&
                p.globalTime(0) <= o &&
                p.globalTime(p.totalDuration()) > o
              : !o || p.isActive()) &&
            c.push(p)
          : (m = p.getTweensOf(d, o)).length && c.push.apply(c, m),
          (p = p._next);
      return c;
    }),
    (a.tweenTo = function (l, o) {
      o = o || {};
      var c = this,
        d = Vi(c, l),
        p = o,
        g = p.startAt,
        m = p.onStart,
        y = p.onStartParams,
        b = p.immediateRender,
        S,
        C = We.to(
          c,
          Ri(
            {
              ease: o.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: d,
              overwrite: "auto",
              duration:
                o.duration ||
                Math.abs(
                  (d - (g && "time" in g ? g.time : c._time)) / c.timeScale()
                ) ||
                kn,
              onStart: function () {
                if ((c.pause(), !S)) {
                  var E =
                    o.duration ||
                    Math.abs(
                      (d - (g && "time" in g ? g.time : c._time)) /
                        c.timeScale()
                    );
                  C._dur !== E && Nu(C, E, 0, 1).render(C._time, !0, !0),
                    (S = 1);
                }
                m && m.apply(C, y || []);
              },
            },
            o
          )
        );
      return b ? C.render(0) : C;
    }),
    (a.tweenFromTo = function (l, o, c) {
      return this.tweenTo(o, Ri({ startAt: { time: Vi(this, l) } }, c));
    }),
    (a.recent = function () {
      return this._recent;
    }),
    (a.nextLabel = function (l) {
      return l === void 0 && (l = this._time), H_(this, Vi(this, l));
    }),
    (a.previousLabel = function (l) {
      return l === void 0 && (l = this._time), H_(this, Vi(this, l), 1);
    }),
    (a.currentLabel = function (l) {
      return arguments.length
        ? this.seek(l, !0)
        : this.previousLabel(this._time + kn);
    }),
    (a.shiftChildren = function (l, o, c) {
      c === void 0 && (c = 0);
      for (var d = this._first, p = this.labels, g; d; )
        d._start >= c && ((d._start += l), (d._end += l)), (d = d._next);
      if (o) for (g in p) p[g] >= c && (p[g] += l);
      return dl(this);
    }),
    (a.invalidate = function (l) {
      var o = this._first;
      for (this._lock = 0; o; ) o.invalidate(l), (o = o._next);
      return u.prototype.invalidate.call(this, l);
    }),
    (a.clear = function (l) {
      l === void 0 && (l = !0);
      for (var o = this._first, c; o; ) (c = o._next), this.remove(o), (o = c);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        l && (this.labels = {}),
        dl(this)
      );
    }),
    (a.totalDuration = function (l) {
      var o = 0,
        c = this,
        d = c._last,
        p = xr,
        g,
        m,
        y;
      if (arguments.length)
        return c.timeScale(
          (c._repeat < 0 ? c.duration() : c.totalDuration()) /
            (c.reversed() ? -l : l)
        );
      if (c._dirty) {
        for (y = c.parent; d; )
          (g = d._prev),
            d._dirty && d.totalDuration(),
            (m = d._start),
            m > p && c._sort && d._ts && !c._lock
              ? ((c._lock = 1), (_r(c, d, m - d._delay, 1)._lock = 0))
              : (p = m),
            m < 0 &&
              d._ts &&
              ((o -= m),
              ((!y && !c._dp) || (y && y.smoothChildTiming)) &&
                ((c._start += m / c._ts), (c._time -= m), (c._tTime -= m)),
              c.shiftChildren(-m, !1, -1 / 0),
              (p = 0)),
            d._end > o && d._ts && (o = d._end),
            (d = g);
        Nu(c, c === Re && c._time > o ? c._time : o, 1, 1), (c._dirty = 0);
      }
      return c._tDur;
    }),
    (n.updateRoot = function (l) {
      if ((Re._ts && (xb(Re, Ec(l, Re)), (bb = Ti.frame)), Ti.frame >= B_)) {
        B_ += Mi.autoSleep || 120;
        var o = Re._first;
        if ((!o || !o._ts) && Mi.autoSleep && Ti._listeners.length < 2) {
          for (; o && !o._ts; ) o = o._next;
          o || Ti.sleep();
        }
      }
    }),
    n
  );
})(vo);
Ri($n.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var SE = function (n, a, i, l, o, c, d) {
    var p = new ei(this._pt, n, a, 0, 1, Jb, null, o),
      g = 0,
      m = 0,
      y,
      b,
      S,
      C,
      _,
      E,
      w,
      z;
    for (
      p.b = i,
        p.e = l,
        i += "",
        l += "",
        (w = ~l.indexOf("random(")) && (l = yo(l)),
        c && ((z = [i, l]), c(z, n, a), (i = z[0]), (l = z[1])),
        b = i.match(v0) || [];
      (y = v0.exec(l));

    )
      (C = y[0]),
        (_ = l.substring(g, y.index)),
        S ? (S = (S + 1) % 5) : _.substr(-5) === "rgba(" && (S = 1),
        C !== b[m++] &&
          ((E = parseFloat(b[m - 1]) || 0),
          (p._pt = {
            _next: p._pt,
            p: _ || m === 1 ? _ : ",",
            s: E,
            c: C.charAt(1) === "=" ? xu(E, C) - E : parseFloat(C) - E,
            m: S && S < 4 ? Math.round : 0,
          }),
          (g = v0.lastIndex));
    return (
      (p.c = g < l.length ? l.substring(g, l.length) : ""),
      (p.fp = d),
      (pb.test(l) || w) && (p.e = 0),
      (this._pt = p),
      p
    );
  },
  Ig = function (n, a, i, l, o, c, d, p, g, m) {
    He(l) && (l = l(o || 0, n, c));
    var y = n[a],
      b =
        i !== "get"
          ? i
          : He(y)
          ? g
            ? n[
                a.indexOf("set") || !He(n["get" + a.substr(3)])
                  ? a
                  : "get" + a.substr(3)
              ](g)
            : n[a]()
          : y,
      S = He(y) ? (g ? EE : Kb) : ep,
      C;
    if (
      (gn(l) &&
        (~l.indexOf("random(") && (l = yo(l)),
        l.charAt(1) === "=" &&
          ((C = xu(b, l) + (Nn(b) || 0)), (C || C === 0) && (l = C))),
      !m || b !== l || eg)
    )
      return !isNaN(b * l) && l !== ""
        ? ((C = new ei(
            this._pt,
            n,
            a,
            +b || 0,
            l - (b || 0),
            typeof y == "boolean" ? ME : Pb,
            0,
            S
          )),
          g && (C.fp = g),
          d && C.modifier(d, this, n),
          (this._pt = C))
        : (!y && !(a in n) && Kg(a, l),
          SE.call(this, n, a, b, l, S, p || Mi.stringFilter, g));
  },
  xE = function (n, a, i, l, o) {
    if (
      (He(n) && (n = Is(n, o, a, i, l)),
      !Cr(n) || (n.style && n.nodeType) || Un(n) || hb(n))
    )
      return gn(n) ? Is(n, o, a, i, l) : n;
    var c = {},
      d;
    for (d in n) c[d] = Is(n[d], o, a, i, l);
    return c;
  },
  $b = function (n, a, i, l, o, c) {
    var d, p, g, m;
    if (
      bi[n] &&
      (d = new bi[n]()).init(
        o,
        d.rawVars ? a[n] : xE(a[n], l, o, c, i),
        i,
        l,
        c
      ) !== !1 &&
      ((i._pt = p = new ei(i._pt, o, n, 0, 1, d.render, d, 0, d.priority)),
      i !== yu)
    )
      for (g = i._ptLookup[i._targets.indexOf(o)], m = d._props.length; m--; )
        g[d._props[m]] = p;
    return d;
  },
  Ma,
  eg,
  tp = function u(n, a, i) {
    var l = n.vars,
      o = l.ease,
      c = l.startAt,
      d = l.immediateRender,
      p = l.lazy,
      g = l.onUpdate,
      m = l.runBackwards,
      y = l.yoyoEase,
      b = l.keyframes,
      S = l.autoRevert,
      C = n._dur,
      _ = n._startAt,
      E = n._targets,
      w = n.parent,
      z = w && w.data === "nested" ? w.vars.targets : E,
      D = n._overwrite === "auto" && !Vg,
      R = n.timeline,
      O,
      k,
      N,
      Y,
      U,
      x,
      j,
      Z,
      rt,
      ht,
      at,
      H,
      K;
    if (
      (R && (!b || !o) && (o = "none"),
      (n._ease = hl(o, Ru.ease)),
      (n._yEase = y ? Xb(hl(y === !0 ? o : y, Ru.ease)) : 0),
      y &&
        n._yoyo &&
        !n._repeat &&
        ((y = n._yEase), (n._yEase = n._ease), (n._ease = y)),
      (n._from = !R && !!l.runBackwards),
      !R || (b && !l.stagger))
    ) {
      if (
        ((Z = E[0] ? cl(E[0]).harness : 0),
        (H = Z && l[Z.prop]),
        (O = Ac(l, Pg)),
        _ &&
          (_._zTime < 0 && _.progress(1),
          a < 0 && m && d && !S ? _.render(-1, !0) : _.revert(m && C ? oc : JA),
          (_._lazy = 0)),
        c)
      ) {
        if (
          (La(
            (n._startAt = We.set(
              E,
              Ri(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: w,
                  immediateRender: !0,
                  lazy: !_ && In(p),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    g &&
                    function () {
                      return Ai(n, "onUpdate");
                    },
                  stagger: 0,
                },
                c
              )
            ))
          ),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          a < 0 && (An || (!d && !S)) && n._startAt.revert(oc),
          d && C && a <= 0 && i <= 0)
        ) {
          a && (n._zTime = a);
          return;
        }
      } else if (m && C && !_) {
        if (
          (a && (d = !1),
          (N = Ri(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: d && !_ && In(p),
              immediateRender: d,
              stagger: 0,
              parent: w,
            },
            O
          )),
          H && (N[Z.prop] = H),
          La((n._startAt = We.set(E, N))),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          a < 0 && (An ? n._startAt.revert(oc) : n._startAt.render(-1, !0)),
          (n._zTime = a),
          !d)
        )
          u(n._startAt, kn, kn);
        else if (!a) return;
      }
      for (
        n._pt = n._ptCache = 0, p = (C && In(p)) || (p && !C), k = 0;
        k < E.length;
        k++
      ) {
        if (
          ((U = E[k]),
          (j = U._gsap || Fg(E)[k]._gsap),
          (n._ptLookup[k] = ht = {}),
          P0[j.id] && Na.length && Cc(),
          (at = z === E ? k : z.indexOf(U)),
          Z &&
            (rt = new Z()).init(U, H || O, n, at, z) !== !1 &&
            ((n._pt = Y =
              new ei(n._pt, U, rt.name, 0, 1, rt.render, rt, 0, rt.priority)),
            rt._props.forEach(function (et) {
              ht[et] = Y;
            }),
            rt.priority && (x = 1)),
          !Z || H)
        )
          for (N in O)
            bi[N] && (rt = $b(N, O, n, at, U, z))
              ? rt.priority && (x = 1)
              : (ht[N] = Y =
                  Ig.call(n, U, N, "get", O[N], at, z, 0, l.stringFilter));
        n._op && n._op[k] && n.kill(U, n._op[k]),
          D &&
            n._pt &&
            ((Ma = n),
            Re.killTweensOf(U, ht, n.globalTime(a)),
            (K = !n.parent),
            (Ma = 0)),
          n._pt && p && (P0[j.id] = 1);
      }
      x && Fb(n), n._onInit && n._onInit(n);
    }
    (n._onUpdate = g),
      (n._initted = (!n._op || n._pt) && !K),
      b && a <= 0 && R.render(xr, !0, !0);
  },
  TE = function (n, a, i, l, o, c, d, p) {
    var g = ((n._pt && n._ptCache) || (n._ptCache = {}))[a],
      m,
      y,
      b,
      S;
    if (!g)
      for (
        g = n._ptCache[a] = [], b = n._ptLookup, S = n._targets.length;
        S--;

      ) {
        if (((m = b[S][a]), m && m.d && m.d._pt))
          for (m = m.d._pt; m && m.p !== a && m.fp !== a; ) m = m._next;
        if (!m)
          return (
            (eg = 1),
            (n.vars[a] = "+=0"),
            tp(n, d),
            (eg = 0),
            p ? po(a + " not eligible for reset") : 1
          );
        g.push(m);
      }
    for (S = g.length; S--; )
      (y = g[S]),
        (m = y._pt || y),
        (m.s = (l || l === 0) && !o ? l : m.s + (l || 0) + c * m.c),
        (m.c = i - m.s),
        y.e && (y.e = je(i) + Nn(y.e)),
        y.b && (y.b = m.s + Nn(y.b));
  },
  CE = function (n, a) {
    var i = n[0] ? cl(n[0]).harness : 0,
      l = i && i.aliases,
      o,
      c,
      d,
      p;
    if (!l) return a;
    o = Du({}, a);
    for (c in l)
      if (c in o) for (p = l[c].split(","), d = p.length; d--; ) o[p[d]] = o[c];
    return o;
  },
  AE = function (n, a, i, l) {
    var o = a.ease || l || "power1.inOut",
      c,
      d;
    if (Un(a))
      (d = i[n] || (i[n] = [])),
        a.forEach(function (p, g) {
          return d.push({ t: (g / (a.length - 1)) * 100, v: p, e: o });
        });
    else
      for (c in a)
        (d = i[c] || (i[c] = [])),
          c === "ease" || d.push({ t: parseFloat(n), v: a[c], e: o });
  },
  Is = function (n, a, i, l, o) {
    return He(n)
      ? n.call(a, i, l, o)
      : gn(n) && ~n.indexOf("random(")
      ? yo(n)
      : n;
  },
  Qb = Jg + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Zb = {};
ti(Qb + ",id,stagger,delay,duration,paused,scrollTrigger", function (u) {
  return (Zb[u] = 1);
});
var We = (function (u) {
  cb(n, u);
  function n(i, l, o, c) {
    var d;
    typeof l == "number" && ((o.duration = l), (l = o), (o = null)),
      (d = u.call(this, c ? l : Fs(l)) || this);
    var p = d.vars,
      g = p.duration,
      m = p.delay,
      y = p.immediateRender,
      b = p.stagger,
      S = p.overwrite,
      C = p.keyframes,
      _ = p.defaults,
      E = p.scrollTrigger,
      w = p.yoyoEase,
      z = l.parent || Re,
      D = (Un(i) || hb(i) ? ea(i[0]) : "length" in l) ? [i] : Pi(i),
      R,
      O,
      k,
      N,
      Y,
      U,
      x,
      j;
    if (
      ((d._targets = D.length
        ? Fg(D)
        : po(
            "GSAP target " + i + " not found. https://gsap.com",
            !Mi.nullTargetWarn
          ) || []),
      (d._ptLookup = []),
      (d._overwrite = S),
      C || b || Vf(g) || Vf(m))
    ) {
      if (
        ((l = d.vars),
        (R = d.timeline =
          new $n({
            data: "nested",
            defaults: _ || {},
            targets: z && z.data === "nested" ? z.vars.targets : D,
          })),
        R.kill(),
        (R.parent = R._dp = $r(d)),
        (R._start = 0),
        b || Vf(g) || Vf(m))
      ) {
        if (((N = D.length), (x = b && Db(b)), Cr(b)))
          for (Y in b) ~Qb.indexOf(Y) && (j || (j = {}), (j[Y] = b[Y]));
        for (O = 0; O < N; O++)
          (k = Ac(l, Zb)),
            (k.stagger = 0),
            w && (k.yoyoEase = w),
            j && Du(k, j),
            (U = D[O]),
            (k.duration = +Is(g, $r(d), O, U, D)),
            (k.delay = (+Is(m, $r(d), O, U, D) || 0) - d._delay),
            !b &&
              N === 1 &&
              k.delay &&
              ((d._delay = m = k.delay), (d._start += m), (k.delay = 0)),
            R.to(U, k, x ? x(O, U, D) : 0),
            (R._ease = Yt.none);
        R.duration() ? (g = m = 0) : (d.timeline = 0);
      } else if (C) {
        Fs(Ri(R.vars.defaults, { ease: "none" })),
          (R._ease = hl(C.ease || l.ease || "none"));
        var Z = 0,
          rt,
          ht,
          at;
        if (Un(C))
          C.forEach(function (H) {
            return R.to(D, H, ">");
          }),
            R.duration();
        else {
          k = {};
          for (Y in C)
            Y === "ease" || Y === "easeEach" || AE(Y, C[Y], k, C.easeEach);
          for (Y in k)
            for (
              rt = k[Y].sort(function (H, K) {
                return H.t - K.t;
              }),
                Z = 0,
                O = 0;
              O < rt.length;
              O++
            )
              (ht = rt[O]),
                (at = {
                  ease: ht.e,
                  duration: ((ht.t - (O ? rt[O - 1].t : 0)) / 100) * g,
                }),
                (at[Y] = ht.v),
                R.to(D, at, Z),
                (Z += at.duration);
          R.duration() < g && R.to({}, { duration: g - R.duration() });
        }
      }
      g || d.duration((g = R.duration()));
    } else d.timeline = 0;
    return (
      S === !0 && !Vg && ((Ma = $r(d)), Re.killTweensOf(D), (Ma = 0)),
      _r(z, $r(d), o),
      l.reversed && d.reverse(),
      l.paused && d.paused(!0),
      (y ||
        (!g &&
          !C &&
          d._start === Ie(z._time) &&
          In(y) &&
          nE($r(d)) &&
          z.data !== "nested")) &&
        ((d._tTime = -1e-8), d.render(Math.max(0, -m) || 0)),
      E && Ob($r(d), E),
      d
    );
  }
  var a = n.prototype;
  return (
    (a.render = function (l, o, c) {
      var d = this._time,
        p = this._tDur,
        g = this._dur,
        m = l < 0,
        y = l > p - kn && !m ? p : l < kn ? 0 : l,
        b,
        S,
        C,
        _,
        E,
        w,
        z,
        D,
        R;
      if (!g) rE(this, l, o, c);
      else if (
        y !== this._tTime ||
        !l ||
        c ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== m) ||
        this._lazy
      ) {
        if (((b = y), (D = this.timeline), this._repeat)) {
          if (((_ = g + this._rDelay), this._repeat < -1 && m))
            return this.totalTime(_ * 100 + l, o, c);
          if (
            ((b = Ie(y % _)),
            y === p
              ? ((C = this._repeat), (b = g))
              : ((E = Ie(y / _)),
                (C = ~~E),
                C && C === E ? ((b = g), C--) : b > g && (b = g)),
            (w = this._yoyo && C & 1),
            w && ((R = this._yEase), (b = g - b)),
            (E = zu(this._tTime, _)),
            b === d && !c && this._initted && C === E)
          )
            return (this._tTime = y), this;
          C !== E &&
            (D && this._yEase && Gb(D, w),
            this.vars.repeatRefresh &&
              !w &&
              !this._lock &&
              b !== _ &&
              this._initted &&
              ((this._lock = c = 1),
              (this.render(Ie(_ * C), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Mb(this, m ? l : b, c, o, y)) return (this._tTime = 0), this;
          if (d !== this._time && !(c && this.vars.repeatRefresh && C !== E))
            return this;
          if (g !== this._dur) return this.render(l, o, c);
        }
        if (
          ((this._tTime = y),
          (this._time = b),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = z = (R || this._ease)(b / g)),
          this._from && (this.ratio = z = 1 - z),
          !d && y && !o && !E && (Ai(this, "onStart"), this._tTime !== y))
        )
          return this;
        for (S = this._pt; S; ) S.r(z, S.d), (S = S._next);
        (D && D.render(l < 0 ? l : D._dur * D._ease(b / this._dur), o, c)) ||
          (this._startAt && (this._zTime = l)),
          this._onUpdate &&
            !o &&
            (m && J0(this, l, o, c), Ai(this, "onUpdate")),
          this._repeat &&
            C !== E &&
            this.vars.onRepeat &&
            !o &&
            this.parent &&
            Ai(this, "onRepeat"),
          (y === this._tDur || !y) &&
            this._tTime === y &&
            (m && !this._onUpdate && J0(this, l, !0, !0),
            (l || !g) &&
              ((y === this._tDur && this._ts > 0) || (!y && this._ts < 0)) &&
              La(this, 1),
            !o &&
              !(m && !d) &&
              (y || d || w) &&
              (Ai(this, y === p ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(y < p && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (a.targets = function () {
      return this._targets;
    }),
    (a.invalidate = function (l) {
      return (
        (!l || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(l),
        u.prototype.invalidate.call(this, l)
      );
    }),
    (a.resetTo = function (l, o, c, d, p) {
      _o || Ti.wake(), this._ts || this.play();
      var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        m;
      return (
        this._initted || tp(this, g),
        (m = this._ease(g / this._dur)),
        TE(this, l, o, c, d, m, g, p)
          ? this.resetTo(l, o, c, d, 1)
          : (Ic(this, 0),
            this.parent ||
              Ab(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (a.kill = function (l, o) {
      if ((o === void 0 && (o = "all"), !l && (!o || o === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Xs(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!An),
          this
        );
      if (this.timeline) {
        var c = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(l, o, Ma && Ma.vars.overwrite !== !0)
            ._first || Xs(this),
          this.parent &&
            c !== this.timeline.totalDuration() &&
            Nu(this, (this._dur * this.timeline._tDur) / c, 0, 1),
          this
        );
      }
      var d = this._targets,
        p = l ? Pi(l) : d,
        g = this._ptLookup,
        m = this._pt,
        y,
        b,
        S,
        C,
        _,
        E,
        w;
      if ((!o || o === "all") && tE(d, p))
        return o === "all" && (this._pt = 0), Xs(this);
      for (
        y = this._op = this._op || [],
          o !== "all" &&
            (gn(o) &&
              ((_ = {}),
              ti(o, function (z) {
                return (_[z] = 1);
              }),
              (o = _)),
            (o = CE(d, o))),
          w = d.length;
        w--;

      )
        if (~p.indexOf(d[w])) {
          (b = g[w]),
            o === "all"
              ? ((y[w] = o), (C = b), (S = {}))
              : ((S = y[w] = y[w] || {}), (C = o));
          for (_ in C)
            (E = b && b[_]),
              E &&
                ((!("kill" in E.d) || E.d.kill(_) === !0) && Fc(this, E, "_pt"),
                delete b[_]),
              S !== "all" && (S[_] = 1);
        }
      return this._initted && !this._pt && m && Xs(this), this;
    }),
    (n.to = function (l, o) {
      return new n(l, o, arguments[2]);
    }),
    (n.from = function (l, o) {
      return Ws(1, arguments);
    }),
    (n.delayedCall = function (l, o, c, d) {
      return new n(o, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: l,
        onComplete: o,
        onReverseComplete: o,
        onCompleteParams: c,
        onReverseCompleteParams: c,
        callbackScope: d,
      });
    }),
    (n.fromTo = function (l, o, c) {
      return Ws(2, arguments);
    }),
    (n.set = function (l, o) {
      return (o.duration = 0), o.repeatDelay || (o.repeat = 0), new n(l, o);
    }),
    (n.killTweensOf = function (l, o, c) {
      return Re.killTweensOf(l, o, c);
    }),
    n
  );
})(vo);
Ri(We.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
ti("staggerTo,staggerFrom,staggerFromTo", function (u) {
  We[u] = function () {
    var n = new $n(),
      a = W0.call(arguments, 0);
    return a.splice(u === "staggerFromTo" ? 5 : 4, 0, 0), n[u].apply(n, a);
  };
});
var ep = function (n, a, i) {
    return (n[a] = i);
  },
  Kb = function (n, a, i) {
    return n[a](i);
  },
  EE = function (n, a, i, l) {
    return n[a](l.fp, i);
  },
  OE = function (n, a, i) {
    return n.setAttribute(a, i);
  },
  np = function (n, a) {
    return He(n[a]) ? Kb : $g(n[a]) && n.setAttribute ? OE : ep;
  },
  Pb = function (n, a) {
    return a.set(a.t, a.p, Math.round((a.s + a.c * n) * 1e6) / 1e6, a);
  },
  ME = function (n, a) {
    return a.set(a.t, a.p, !!(a.s + a.c * n), a);
  },
  Jb = function (n, a) {
    var i = a._pt,
      l = "";
    if (!n && a.b) l = a.b;
    else if (n === 1 && a.e) l = a.e;
    else {
      for (; i; )
        (l =
          i.p +
          (i.m ? i.m(i.s + i.c * n) : Math.round((i.s + i.c * n) * 1e4) / 1e4) +
          l),
          (i = i._next);
      l += a.c;
    }
    a.set(a.t, a.p, l, a);
  },
  ip = function (n, a) {
    for (var i = a._pt; i; ) i.r(n, i.d), (i = i._next);
  },
  wE = function (n, a, i, l) {
    for (var o = this._pt, c; o; )
      (c = o._next), o.p === l && o.modifier(n, a, i), (o = c);
  },
  RE = function (n) {
    for (var a = this._pt, i, l; a; )
      (l = a._next),
        (a.p === n && !a.op) || a.op === n
          ? Fc(this, a, "_pt")
          : a.dep || (i = 1),
        (a = l);
    return !i;
  },
  DE = function (n, a, i, l) {
    l.mSet(n, a, l.m.call(l.tween, i, l.mt), l);
  },
  Fb = function (n) {
    for (var a = n._pt, i, l, o, c; a; ) {
      for (i = a._next, l = o; l && l.pr > a.pr; ) l = l._next;
      (a._prev = l ? l._prev : c) ? (a._prev._next = a) : (o = a),
        (a._next = l) ? (l._prev = a) : (c = a),
        (a = i);
    }
    n._pt = o;
  },
  ei = (function () {
    function u(a, i, l, o, c, d, p, g, m) {
      (this.t = i),
        (this.s = o),
        (this.c = c),
        (this.p = l),
        (this.r = d || Pb),
        (this.d = p || this),
        (this.set = g || ep),
        (this.pr = m || 0),
        (this._next = a),
        a && (a._prev = this);
    }
    var n = u.prototype;
    return (
      (n.modifier = function (i, l, o) {
        (this.mSet = this.mSet || this.set),
          (this.set = DE),
          (this.m = i),
          (this.mt = o),
          (this.tween = l);
      }),
      u
    );
  })();
ti(
  Jg +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (u) {
    return (Pg[u] = 1);
  }
);
wi.TweenMax = wi.TweenLite = We;
wi.TimelineLite = wi.TimelineMax = $n;
Re = new $n({
  sortChildren: !1,
  defaults: Ru,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Mi.stringFilter = qb;
var gl = [],
  cc = {},
  zE = [],
  q_ = 0,
  NE = 0,
  C0 = function (n) {
    return (cc[n] || zE).map(function (a) {
      return a();
    });
  },
  ng = function () {
    var n = Date.now(),
      a = [];
    n - q_ > 2 &&
      (C0("matchMediaInit"),
      gl.forEach(function (i) {
        var l = i.queries,
          o = i.conditions,
          c,
          d,
          p,
          g;
        for (d in l)
          (c = gr.matchMedia(l[d]).matches),
            c && (p = 1),
            c !== o[d] && ((o[d] = c), (g = 1));
        g && (i.revert(), p && a.push(i));
      }),
      C0("matchMediaRevert"),
      a.forEach(function (i) {
        return i.onMatch(i, function (l) {
          return i.add(null, l);
        });
      }),
      (q_ = n),
      C0("matchMedia"));
  },
  Wb = (function () {
    function u(a, i) {
      (this.selector = i && I0(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = NE++),
        a && this.add(a);
    }
    var n = u.prototype;
    return (
      (n.add = function (i, l, o) {
        He(i) && ((o = l), (l = i), (i = He));
        var c = this,
          d = function () {
            var g = Ae,
              m = c.selector,
              y;
            return (
              g && g !== c && g.data.push(c),
              o && (c.selector = I0(o)),
              (Ae = c),
              (y = l.apply(c, arguments)),
              He(y) && c._r.push(y),
              (Ae = g),
              (c.selector = m),
              (c.isReverted = !1),
              y
            );
          };
        return (
          (c.last = d),
          i === He
            ? d(c, function (p) {
                return c.add(null, p);
              })
            : i
            ? (c[i] = d)
            : d
        );
      }),
      (n.ignore = function (i) {
        var l = Ae;
        (Ae = null), i(this), (Ae = l);
      }),
      (n.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (l) {
            return l instanceof u
              ? i.push.apply(i, l.getTweens())
              : l instanceof We &&
                  !(l.parent && l.parent.data === "nested") &&
                  i.push(l);
          }),
          i
        );
      }),
      (n.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (n.kill = function (i, l) {
        var o = this;
        if (
          (i
            ? (function () {
                for (var d = o.getTweens(), p = o.data.length, g; p--; )
                  (g = o.data[p]),
                    g.data === "isFlip" &&
                      (g.revert(),
                      g.getChildren(!0, !0, !1).forEach(function (m) {
                        return d.splice(d.indexOf(m), 1);
                      }));
                for (
                  d
                    .map(function (m) {
                      return {
                        g:
                          m._dur ||
                          m._delay ||
                          (m._sat && !m._sat.vars.immediateRender)
                            ? m.globalTime(0)
                            : -1 / 0,
                        t: m,
                      };
                    })
                    .sort(function (m, y) {
                      return y.g - m.g || -1 / 0;
                    })
                    .forEach(function (m) {
                      return m.t.revert(i);
                    }),
                    p = o.data.length;
                  p--;

                )
                  (g = o.data[p]),
                    g instanceof $n
                      ? g.data !== "nested" &&
                        (g.scrollTrigger && g.scrollTrigger.revert(), g.kill())
                      : !(g instanceof We) && g.revert && g.revert(i);
                o._r.forEach(function (m) {
                  return m(i, o);
                }),
                  (o.isReverted = !0);
              })()
            : this.data.forEach(function (d) {
                return d.kill && d.kill();
              }),
          this.clear(),
          l)
        )
          for (var c = gl.length; c--; )
            gl[c].id === this.id && gl.splice(c, 1);
      }),
      (n.revert = function (i) {
        this.kill(i || {});
      }),
      u
    );
  })(),
  BE = (function () {
    function u(a) {
      (this.contexts = []), (this.scope = a), Ae && Ae.data.push(this);
    }
    var n = u.prototype;
    return (
      (n.add = function (i, l, o) {
        Cr(i) || (i = { matches: i });
        var c = new Wb(0, o || this.scope),
          d = (c.conditions = {}),
          p,
          g,
          m;
        Ae && !c.selector && (c.selector = Ae.selector),
          this.contexts.push(c),
          (l = c.add("onMatch", l)),
          (c.queries = i);
        for (g in i)
          g === "all"
            ? (m = 1)
            : ((p = gr.matchMedia(i[g])),
              p &&
                (gl.indexOf(c) < 0 && gl.push(c),
                (d[g] = p.matches) && (m = 1),
                p.addListener
                  ? p.addListener(ng)
                  : p.addEventListener("change", ng)));
        return (
          m &&
            l(c, function (y) {
              return c.add(null, y);
            }),
          this
        );
      }),
      (n.revert = function (i) {
        this.kill(i || {});
      }),
      (n.kill = function (i) {
        this.contexts.forEach(function (l) {
          return l.kill(i, !0);
        });
      }),
      u
    );
  })(),
  Oc = {
    registerPlugin: function () {
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      a.forEach(function (l) {
        return Lb(l);
      });
    },
    timeline: function (n) {
      return new $n(n);
    },
    getTweensOf: function (n, a) {
      return Re.getTweensOf(n, a);
    },
    getProperty: function (n, a, i, l) {
      gn(n) && (n = Pi(n)[0]);
      var o = cl(n || {}).get,
        c = i ? Cb : Tb;
      return (
        i === "native" && (i = ""),
        n &&
          (a
            ? c(((bi[a] && bi[a].get) || o)(n, a, i, l))
            : function (d, p, g) {
                return c(((bi[d] && bi[d].get) || o)(n, d, p, g));
              })
      );
    },
    quickSetter: function (n, a, i) {
      if (((n = Pi(n)), n.length > 1)) {
        var l = n.map(function (m) {
            return ri.quickSetter(m, a, i);
          }),
          o = l.length;
        return function (m) {
          for (var y = o; y--; ) l[y](m);
        };
      }
      n = n[0] || {};
      var c = bi[a],
        d = cl(n),
        p = (d.harness && (d.harness.aliases || {})[a]) || a,
        g = c
          ? function (m) {
              var y = new c();
              (yu._pt = 0),
                y.init(n, i ? m + i : m, yu, 0, [n]),
                y.render(1, y),
                yu._pt && ip(1, yu);
            }
          : d.set(n, p);
      return c
        ? g
        : function (m) {
            return g(n, p, i ? m + i : m, d, 1);
          };
    },
    quickTo: function (n, a, i) {
      var l,
        o = ri.to(
          n,
          Ri(
            ((l = {}), (l[a] = "+=0.1"), (l.paused = !0), (l.stagger = 0), l),
            i || {}
          )
        ),
        c = function (p, g, m) {
          return o.resetTo(a, p, g, m);
        };
      return (c.tween = o), c;
    },
    isTweening: function (n) {
      return Re.getTweensOf(n, !0).length > 0;
    },
    defaults: function (n) {
      return n && n.ease && (n.ease = hl(n.ease, Ru.ease)), k_(Ru, n || {});
    },
    config: function (n) {
      return k_(Mi, n || {});
    },
    registerEffect: function (n) {
      var a = n.name,
        i = n.effect,
        l = n.plugins,
        o = n.defaults,
        c = n.extendTimeline;
      (l || "").split(",").forEach(function (d) {
        return (
          d && !bi[d] && !wi[d] && po(a + " effect requires " + d + " plugin.")
        );
      }),
        (b0[a] = function (d, p, g) {
          return i(Pi(d), Ri(p || {}, o), g);
        }),
        c &&
          ($n.prototype[a] = function (d, p, g) {
            return this.add(b0[a](d, Cr(p) ? p : (g = p) && {}, this), g);
          });
    },
    registerEase: function (n, a) {
      Yt[n] = hl(a);
    },
    parseEase: function (n, a) {
      return arguments.length ? hl(n, a) : Yt;
    },
    getById: function (n) {
      return Re.getById(n);
    },
    exportRoot: function (n, a) {
      n === void 0 && (n = {});
      var i = new $n(n),
        l,
        o;
      for (
        i.smoothChildTiming = In(n.smoothChildTiming),
          Re.remove(i),
          i._dp = 0,
          i._time = i._tTime = Re._time,
          l = Re._first;
        l;

      )
        (o = l._next),
          (a ||
            !(
              !l._dur &&
              l instanceof We &&
              l.vars.onComplete === l._targets[0]
            )) &&
            _r(i, l, l._start - l._delay),
          (l = o);
      return _r(Re, i, 0), i;
    },
    context: function (n, a) {
      return n ? new Wb(n, a) : Ae;
    },
    matchMedia: function (n) {
      return new BE(n);
    },
    matchMediaRefresh: function () {
      return (
        gl.forEach(function (n) {
          var a = n.conditions,
            i,
            l;
          for (l in a) a[l] && ((a[l] = !1), (i = 1));
          i && n.revert();
        }) || ng()
      );
    },
    addEventListener: function (n, a) {
      var i = cc[n] || (cc[n] = []);
      ~i.indexOf(a) || i.push(a);
    },
    removeEventListener: function (n, a) {
      var i = cc[n],
        l = i && i.indexOf(a);
      l >= 0 && i.splice(l, 1);
    },
    utils: {
      wrap: dE,
      wrapYoyo: hE,
      distribute: Db,
      random: Nb,
      snap: zb,
      normalize: cE,
      getUnit: Nn,
      clamp: uE,
      splitColor: Hb,
      toArray: Pi,
      selector: I0,
      mapRange: kb,
      pipe: oE,
      unitize: fE,
      interpolate: gE,
      shuffle: Rb,
    },
    install: _b,
    effects: b0,
    ticker: Ti,
    updateRoot: $n.updateRoot,
    plugins: bi,
    globalTimeline: Re,
    core: {
      PropTween: ei,
      globals: vb,
      Tween: We,
      Timeline: $n,
      Animation: vo,
      getCache: cl,
      _removeLinkedListItem: Fc,
      reverting: function () {
        return An;
      },
      context: function (n) {
        return n && Ae && (Ae.data.push(n), (n._ctx = Ae)), Ae;
      },
      suppressOverwrites: function (n) {
        return (Vg = n);
      },
    },
  };
ti("to,from,fromTo,delayedCall,set,killTweensOf", function (u) {
  return (Oc[u] = We[u]);
});
Ti.add($n.updateRoot);
yu = Oc.to({}, { duration: 0 });
var kE = function (n, a) {
    for (var i = n._pt; i && i.p !== a && i.op !== a && i.fp !== a; )
      i = i._next;
    return i;
  },
  UE = function (n, a) {
    var i = n._targets,
      l,
      o,
      c;
    for (l in a)
      for (o = i.length; o--; )
        (c = n._ptLookup[o][l]),
          c &&
            (c = c.d) &&
            (c._pt && (c = kE(c, l)),
            c && c.modifier && c.modifier(a[l], n, i[o], l));
  },
  A0 = function (n, a) {
    return {
      name: n,
      headless: 1,
      rawVars: 1,
      init: function (l, o, c) {
        c._onInit = function (d) {
          var p, g;
          if (
            (gn(o) &&
              ((p = {}),
              ti(o, function (m) {
                return (p[m] = 1);
              }),
              (o = p)),
            a)
          ) {
            p = {};
            for (g in o) p[g] = a(o[g]);
            o = p;
          }
          UE(d, o);
        };
      },
    };
  },
  ri =
    Oc.registerPlugin(
      {
        name: "attr",
        init: function (n, a, i, l, o) {
          var c, d, p;
          this.tween = i;
          for (c in a)
            (p = n.getAttribute(c) || ""),
              (d = this.add(
                n,
                "setAttribute",
                (p || 0) + "",
                a[c],
                l,
                o,
                0,
                0,
                c
              )),
              (d.op = c),
              (d.b = p),
              this._props.push(c);
        },
        render: function (n, a) {
          for (var i = a._pt; i; )
            An ? i.set(i.t, i.p, i.b, i) : i.r(n, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (n, a) {
          for (var i = a.length; i--; )
            this.add(n, i, n[i] || 0, a[i], 0, 0, 0, 0, 0, 1);
        },
      },
      A0("roundProps", tg),
      A0("modifiers"),
      A0("snap", zb)
    ) || Oc;
We.version = $n.version = ri.version = "3.13.0";
yb = 1;
Qg() && Bu();
Yt.Power0;
Yt.Power1;
Yt.Power2;
Yt.Power3;
Yt.Power4;
Yt.Linear;
Yt.Quad;
Yt.Cubic;
Yt.Quart;
Yt.Quint;
Yt.Strong;
Yt.Elastic;
Yt.Back;
Yt.SteppedEase;
Yt.Bounce;
Yt.Sine;
Yt.Expo;
Yt.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var X_,
  wa,
  Tu,
  rp,
  ol,
  G_,
  ap,
  LE = function () {
    return typeof window < "u";
  },
  na = {},
  ll = 180 / Math.PI,
  Cu = Math.PI / 180,
  fu = Math.atan2,
  j_ = 1e8,
  lp = /([A-Z])/g,
  HE = /(left|right|width|margin|padding|x)/i,
  YE = /[\s,\(]\S/,
  vr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  ig = function (n, a) {
    return a.set(a.t, a.p, Math.round((a.s + a.c * n) * 1e4) / 1e4 + a.u, a);
  },
  qE = function (n, a) {
    return a.set(
      a.t,
      a.p,
      n === 1 ? a.e : Math.round((a.s + a.c * n) * 1e4) / 1e4 + a.u,
      a
    );
  },
  XE = function (n, a) {
    return a.set(
      a.t,
      a.p,
      n ? Math.round((a.s + a.c * n) * 1e4) / 1e4 + a.u : a.b,
      a
    );
  },
  GE = function (n, a) {
    var i = a.s + a.c * n;
    a.set(a.t, a.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + a.u, a);
  },
  Ib = function (n, a) {
    return a.set(a.t, a.p, n ? a.e : a.b, a);
  },
  tS = function (n, a) {
    return a.set(a.t, a.p, n !== 1 ? a.b : a.e, a);
  },
  jE = function (n, a, i) {
    return (n.style[a] = i);
  },
  VE = function (n, a, i) {
    return n.style.setProperty(a, i);
  },
  $E = function (n, a, i) {
    return (n._gsap[a] = i);
  },
  QE = function (n, a, i) {
    return (n._gsap.scaleX = n._gsap.scaleY = i);
  },
  ZE = function (n, a, i, l, o) {
    var c = n._gsap;
    (c.scaleX = c.scaleY = i), c.renderTransform(o, c);
  },
  KE = function (n, a, i, l, o) {
    var c = n._gsap;
    (c[a] = i), c.renderTransform(o, c);
  },
  De = "transform",
  ni = De + "Origin",
  PE = function u(n, a) {
    var i = this,
      l = this.target,
      o = l.style,
      c = l._gsap;
    if (n in na && o) {
      if (((this.tfm = this.tfm || {}), n !== "transform"))
        (n = vr[n] || n),
          ~n.indexOf(",")
            ? n.split(",").forEach(function (d) {
                return (i.tfm[d] = Qr(l, d));
              })
            : (this.tfm[n] = c.x ? c[n] : Qr(l, n)),
          n === ni && (this.tfm.zOrigin = c.zOrigin);
      else
        return vr.transform.split(",").forEach(function (d) {
          return u.call(i, d, a);
        });
      if (this.props.indexOf(De) >= 0) return;
      c.svg &&
        ((this.svgo = l.getAttribute("data-svg-origin")),
        this.props.push(ni, a, "")),
        (n = De);
    }
    (o || a) && this.props.push(n, a, o[n]);
  },
  eS = function (n) {
    n.translate &&
      (n.removeProperty("translate"),
      n.removeProperty("scale"),
      n.removeProperty("rotate"));
  },
  JE = function () {
    var n = this.props,
      a = this.target,
      i = a.style,
      l = a._gsap,
      o,
      c;
    for (o = 0; o < n.length; o += 3)
      n[o + 1]
        ? n[o + 1] === 2
          ? a[n[o]](n[o + 2])
          : (a[n[o]] = n[o + 2])
        : n[o + 2]
        ? (i[n[o]] = n[o + 2])
        : i.removeProperty(
            n[o].substr(0, 2) === "--"
              ? n[o]
              : n[o].replace(lp, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (c in this.tfm) l[c] = this.tfm[c];
      l.svg &&
        (l.renderTransform(),
        a.setAttribute("data-svg-origin", this.svgo || "")),
        (o = ap()),
        (!o || !o.isStart) &&
          !i[De] &&
          (eS(i),
          l.zOrigin &&
            i[ni] &&
            ((i[ni] += " " + l.zOrigin + "px"),
            (l.zOrigin = 0),
            l.renderTransform()),
          (l.uncache = 1));
    }
  },
  nS = function (n, a) {
    var i = { target: n, props: [], revert: JE, save: PE };
    return (
      n._gsap || ri.core.getCache(n),
      a &&
        n.style &&
        n.nodeType &&
        a.split(",").forEach(function (l) {
          return i.save(l);
        }),
      i
    );
  },
  iS,
  rg = function (n, a) {
    var i = wa.createElementNS
      ? wa.createElementNS(
          (a || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          n
        )
      : wa.createElement(n);
    return i && i.style ? i : wa.createElement(n);
  },
  Ji = function u(n, a, i) {
    var l = getComputedStyle(n);
    return (
      l[a] ||
      l.getPropertyValue(a.replace(lp, "-$1").toLowerCase()) ||
      l.getPropertyValue(a) ||
      (!i && u(n, ku(a) || a, 1)) ||
      ""
    );
  },
  V_ = "O,Moz,ms,Ms,Webkit".split(","),
  ku = function (n, a, i) {
    var l = a || ol,
      o = l.style,
      c = 5;
    if (n in o && !i) return n;
    for (
      n = n.charAt(0).toUpperCase() + n.substr(1);
      c-- && !(V_[c] + n in o);

    );
    return c < 0 ? null : (c === 3 ? "ms" : c >= 0 ? V_[c] : "") + n;
  },
  ag = function () {
    LE() &&
      window.document &&
      ((X_ = window),
      (wa = X_.document),
      (Tu = wa.documentElement),
      (ol = rg("div") || { style: {} }),
      rg("div"),
      (De = ku(De)),
      (ni = De + "Origin"),
      (ol.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (iS = !!ku("perspective")),
      (ap = ri.core.reverting),
      (rp = 1));
  },
  $_ = function (n) {
    var a = n.ownerSVGElement,
      i = rg(
        "svg",
        (a && a.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      l = n.cloneNode(!0),
      o;
    (l.style.display = "block"), i.appendChild(l), Tu.appendChild(i);
    try {
      o = l.getBBox();
    } catch {}
    return i.removeChild(l), Tu.removeChild(i), o;
  },
  Q_ = function (n, a) {
    for (var i = a.length; i--; )
      if (n.hasAttribute(a[i])) return n.getAttribute(a[i]);
  },
  rS = function (n) {
    var a, i;
    try {
      a = n.getBBox();
    } catch {
      (a = $_(n)), (i = 1);
    }
    return (
      (a && (a.width || a.height)) || i || (a = $_(n)),
      a && !a.width && !a.x && !a.y
        ? {
            x: +Q_(n, ["x", "cx", "x1"]) || 0,
            y: +Q_(n, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : a
    );
  },
  aS = function (n) {
    return !!(n.getCTM && (!n.parentNode || n.ownerSVGElement) && rS(n));
  },
  Sl = function (n, a) {
    if (a) {
      var i = n.style,
        l;
      a in na && a !== ni && (a = De),
        i.removeProperty
          ? ((l = a.substr(0, 2)),
            (l === "ms" || a.substr(0, 6) === "webkit") && (a = "-" + a),
            i.removeProperty(
              l === "--" ? a : a.replace(lp, "-$1").toLowerCase()
            ))
          : i.removeAttribute(a);
    }
  },
  Ra = function (n, a, i, l, o, c) {
    var d = new ei(n._pt, a, i, 0, 1, c ? tS : Ib);
    return (n._pt = d), (d.b = l), (d.e = o), n._props.push(i), d;
  },
  Z_ = { deg: 1, rad: 1, turn: 1 },
  FE = { grid: 1, flex: 1 },
  Ha = function u(n, a, i, l) {
    var o = parseFloat(i) || 0,
      c = (i + "").trim().substr((o + "").length) || "px",
      d = ol.style,
      p = HE.test(a),
      g = n.tagName.toLowerCase() === "svg",
      m = (g ? "client" : "offset") + (p ? "Width" : "Height"),
      y = 100,
      b = l === "px",
      S = l === "%",
      C,
      _,
      E,
      w;
    if (l === c || !o || Z_[l] || Z_[c]) return o;
    if (
      (c !== "px" && !b && (o = u(n, a, i, "px")),
      (w = n.getCTM && aS(n)),
      (S || c === "%") && (na[a] || ~a.indexOf("adius")))
    )
      return (
        (C = w ? n.getBBox()[p ? "width" : "height"] : n[m]),
        je(S ? (o / C) * y : (o / 100) * C)
      );
    if (
      ((d[p ? "width" : "height"] = y + (b ? c : l)),
      (_ =
        (l !== "rem" && ~a.indexOf("adius")) ||
        (l === "em" && n.appendChild && !g)
          ? n
          : n.parentNode),
      w && (_ = (n.ownerSVGElement || {}).parentNode),
      (!_ || _ === wa || !_.appendChild) && (_ = wa.body),
      (E = _._gsap),
      E && S && E.width && p && E.time === Ti.time && !E.uncache)
    )
      return je((o / E.width) * y);
    if (S && (a === "height" || a === "width")) {
      var z = n.style[a];
      (n.style[a] = y + l), (C = n[m]), z ? (n.style[a] = z) : Sl(n, a);
    } else
      (S || c === "%") &&
        !FE[Ji(_, "display")] &&
        (d.position = Ji(n, "position")),
        _ === n && (d.position = "static"),
        _.appendChild(ol),
        (C = ol[m]),
        _.removeChild(ol),
        (d.position = "absolute");
    return (
      p && S && ((E = cl(_)), (E.time = Ti.time), (E.width = _[m])),
      je(b ? (C * o) / y : C && o ? (y / C) * o : 0)
    );
  },
  Qr = function (n, a, i, l) {
    var o;
    return (
      rp || ag(),
      a in vr &&
        a !== "transform" &&
        ((a = vr[a]), ~a.indexOf(",") && (a = a.split(",")[0])),
      na[a] && a !== "transform"
        ? ((o = So(n, l)),
          (o =
            a !== "transformOrigin"
              ? o[a]
              : o.svg
              ? o.origin
              : wc(Ji(n, ni)) + " " + o.zOrigin + "px"))
        : ((o = n.style[a]),
          (!o || o === "auto" || l || ~(o + "").indexOf("calc(")) &&
            (o =
              (Mc[a] && Mc[a](n, a, i)) ||
              Ji(n, a) ||
              Sb(n, a) ||
              (a === "opacity" ? 1 : 0))),
      i && !~(o + "").trim().indexOf(" ") ? Ha(n, a, o, i) + i : o
    );
  },
  WE = function (n, a, i, l) {
    if (!i || i === "none") {
      var o = ku(a, n, 1),
        c = o && Ji(n, o, 1);
      c && c !== i
        ? ((a = o), (i = c))
        : a === "borderColor" && (i = Ji(n, "borderTopColor"));
    }
    var d = new ei(this._pt, n.style, a, 0, 1, Jb),
      p = 0,
      g = 0,
      m,
      y,
      b,
      S,
      C,
      _,
      E,
      w,
      z,
      D,
      R,
      O;
    if (
      ((d.b = i),
      (d.e = l),
      (i += ""),
      (l += ""),
      l.substring(0, 6) === "var(--" &&
        (l = Ji(n, l.substring(4, l.indexOf(")")))),
      l === "auto" &&
        ((_ = n.style[a]),
        (n.style[a] = l),
        (l = Ji(n, a) || l),
        _ ? (n.style[a] = _) : Sl(n, a)),
      (m = [i, l]),
      qb(m),
      (i = m[0]),
      (l = m[1]),
      (b = i.match(mu) || []),
      (O = l.match(mu) || []),
      O.length)
    ) {
      for (; (y = mu.exec(l)); )
        (E = y[0]),
          (z = l.substring(p, y.index)),
          C
            ? (C = (C + 1) % 5)
            : (z.substr(-5) === "rgba(" || z.substr(-5) === "hsla(") && (C = 1),
          E !== (_ = b[g++] || "") &&
            ((S = parseFloat(_) || 0),
            (R = _.substr((S + "").length)),
            E.charAt(1) === "=" && (E = xu(S, E) + R),
            (w = parseFloat(E)),
            (D = E.substr((w + "").length)),
            (p = mu.lastIndex - D.length),
            D ||
              ((D = D || Mi.units[a] || R),
              p === l.length && ((l += D), (d.e += D))),
            R !== D && (S = Ha(n, a, _, D) || 0),
            (d._pt = {
              _next: d._pt,
              p: z || g === 1 ? z : ",",
              s: S,
              c: w - S,
              m: (C && C < 4) || a === "zIndex" ? Math.round : 0,
            }));
      d.c = p < l.length ? l.substring(p, l.length) : "";
    } else d.r = a === "display" && l === "none" ? tS : Ib;
    return pb.test(l) && (d.e = 0), (this._pt = d), d;
  },
  K_ = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  IE = function (n) {
    var a = n.split(" "),
      i = a[0],
      l = a[1] || "50%";
    return (
      (i === "top" || i === "bottom" || l === "left" || l === "right") &&
        ((n = i), (i = l), (l = n)),
      (a[0] = K_[i] || i),
      (a[1] = K_[l] || l),
      a.join(" ")
    );
  },
  tO = function (n, a) {
    if (a.tween && a.tween._time === a.tween._dur) {
      var i = a.t,
        l = i.style,
        o = a.u,
        c = i._gsap,
        d,
        p,
        g;
      if (o === "all" || o === !0) (l.cssText = ""), (p = 1);
      else
        for (o = o.split(","), g = o.length; --g > -1; )
          (d = o[g]),
            na[d] && ((p = 1), (d = d === "transformOrigin" ? ni : De)),
            Sl(i, d);
      p &&
        (Sl(i, De),
        c &&
          (c.svg && i.removeAttribute("transform"),
          (l.scale = l.rotate = l.translate = "none"),
          So(i, 1),
          (c.uncache = 1),
          eS(l)));
    }
  },
  Mc = {
    clearProps: function (n, a, i, l, o) {
      if (o.data !== "isFromStart") {
        var c = (n._pt = new ei(n._pt, a, i, 0, 0, tO));
        return (c.u = l), (c.pr = -10), (c.tween = o), n._props.push(i), 1;
      }
    },
  },
  bo = [1, 0, 0, 1, 0, 0],
  lS = {},
  uS = function (n) {
    return n === "matrix(1, 0, 0, 1, 0, 0)" || n === "none" || !n;
  },
  P_ = function (n) {
    var a = Ji(n, De);
    return uS(a) ? bo : a.substr(7).match(gb).map(je);
  },
  up = function (n, a) {
    var i = n._gsap || cl(n),
      l = n.style,
      o = P_(n),
      c,
      d,
      p,
      g;
    return i.svg && n.getAttribute("transform")
      ? ((p = n.transform.baseVal.consolidate().matrix),
        (o = [p.a, p.b, p.c, p.d, p.e, p.f]),
        o.join(",") === "1,0,0,1,0,0" ? bo : o)
      : (o === bo &&
          !n.offsetParent &&
          n !== Tu &&
          !i.svg &&
          ((p = l.display),
          (l.display = "block"),
          (c = n.parentNode),
          (!c || (!n.offsetParent && !n.getBoundingClientRect().width)) &&
            ((g = 1), (d = n.nextElementSibling), Tu.appendChild(n)),
          (o = P_(n)),
          p ? (l.display = p) : Sl(n, "display"),
          g &&
            (d
              ? c.insertBefore(n, d)
              : c
              ? c.appendChild(n)
              : Tu.removeChild(n))),
        a && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
  },
  lg = function (n, a, i, l, o, c) {
    var d = n._gsap,
      p = o || up(n, !0),
      g = d.xOrigin || 0,
      m = d.yOrigin || 0,
      y = d.xOffset || 0,
      b = d.yOffset || 0,
      S = p[0],
      C = p[1],
      _ = p[2],
      E = p[3],
      w = p[4],
      z = p[5],
      D = a.split(" "),
      R = parseFloat(D[0]) || 0,
      O = parseFloat(D[1]) || 0,
      k,
      N,
      Y,
      U;
    i
      ? p !== bo &&
        (N = S * E - C * _) &&
        ((Y = R * (E / N) + O * (-_ / N) + (_ * z - E * w) / N),
        (U = R * (-C / N) + O * (S / N) - (S * z - C * w) / N),
        (R = Y),
        (O = U))
      : ((k = rS(n)),
        (R = k.x + (~D[0].indexOf("%") ? (R / 100) * k.width : R)),
        (O = k.y + (~(D[1] || D[0]).indexOf("%") ? (O / 100) * k.height : O))),
      l || (l !== !1 && d.smooth)
        ? ((w = R - g),
          (z = O - m),
          (d.xOffset = y + (w * S + z * _) - w),
          (d.yOffset = b + (w * C + z * E) - z))
        : (d.xOffset = d.yOffset = 0),
      (d.xOrigin = R),
      (d.yOrigin = O),
      (d.smooth = !!l),
      (d.origin = a),
      (d.originIsAbsolute = !!i),
      (n.style[ni] = "0px 0px"),
      c &&
        (Ra(c, d, "xOrigin", g, R),
        Ra(c, d, "yOrigin", m, O),
        Ra(c, d, "xOffset", y, d.xOffset),
        Ra(c, d, "yOffset", b, d.yOffset)),
      n.setAttribute("data-svg-origin", R + " " + O);
  },
  So = function (n, a) {
    var i = n._gsap || new Vb(n);
    if ("x" in i && !a && !i.uncache) return i;
    var l = n.style,
      o = i.scaleX < 0,
      c = "px",
      d = "deg",
      p = getComputedStyle(n),
      g = Ji(n, ni) || "0",
      m,
      y,
      b,
      S,
      C,
      _,
      E,
      w,
      z,
      D,
      R,
      O,
      k,
      N,
      Y,
      U,
      x,
      j,
      Z,
      rt,
      ht,
      at,
      H,
      K,
      et,
      ft,
      T,
      Q,
      tt,
      I,
      it,
      ct;
    return (
      (m = y = b = _ = E = w = z = D = R = 0),
      (S = C = 1),
      (i.svg = !!(n.getCTM && aS(n))),
      p.translate &&
        ((p.translate !== "none" ||
          p.scale !== "none" ||
          p.rotate !== "none") &&
          (l[De] =
            (p.translate !== "none"
              ? "translate3d(" +
                (p.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (p.rotate !== "none" ? "rotate(" + p.rotate + ") " : "") +
            (p.scale !== "none"
              ? "scale(" + p.scale.split(" ").join(",") + ") "
              : "") +
            (p[De] !== "none" ? p[De] : "")),
        (l.scale = l.rotate = l.translate = "none")),
      (N = up(n, i.svg)),
      i.svg &&
        (i.uncache
          ? ((et = n.getBBox()),
            (g = i.xOrigin - et.x + "px " + (i.yOrigin - et.y) + "px"),
            (K = ""))
          : (K = !a && n.getAttribute("data-svg-origin")),
        lg(n, K || g, !!K || i.originIsAbsolute, i.smooth !== !1, N)),
      (O = i.xOrigin || 0),
      (k = i.yOrigin || 0),
      N !== bo &&
        ((j = N[0]),
        (Z = N[1]),
        (rt = N[2]),
        (ht = N[3]),
        (m = at = N[4]),
        (y = H = N[5]),
        N.length === 6
          ? ((S = Math.sqrt(j * j + Z * Z)),
            (C = Math.sqrt(ht * ht + rt * rt)),
            (_ = j || Z ? fu(Z, j) * ll : 0),
            (z = rt || ht ? fu(rt, ht) * ll + _ : 0),
            z && (C *= Math.abs(Math.cos(z * Cu))),
            i.svg && ((m -= O - (O * j + k * rt)), (y -= k - (O * Z + k * ht))))
          : ((ct = N[6]),
            (I = N[7]),
            (T = N[8]),
            (Q = N[9]),
            (tt = N[10]),
            (it = N[11]),
            (m = N[12]),
            (y = N[13]),
            (b = N[14]),
            (Y = fu(ct, tt)),
            (E = Y * ll),
            Y &&
              ((U = Math.cos(-Y)),
              (x = Math.sin(-Y)),
              (K = at * U + T * x),
              (et = H * U + Q * x),
              (ft = ct * U + tt * x),
              (T = at * -x + T * U),
              (Q = H * -x + Q * U),
              (tt = ct * -x + tt * U),
              (it = I * -x + it * U),
              (at = K),
              (H = et),
              (ct = ft)),
            (Y = fu(-rt, tt)),
            (w = Y * ll),
            Y &&
              ((U = Math.cos(-Y)),
              (x = Math.sin(-Y)),
              (K = j * U - T * x),
              (et = Z * U - Q * x),
              (ft = rt * U - tt * x),
              (it = ht * x + it * U),
              (j = K),
              (Z = et),
              (rt = ft)),
            (Y = fu(Z, j)),
            (_ = Y * ll),
            Y &&
              ((U = Math.cos(Y)),
              (x = Math.sin(Y)),
              (K = j * U + Z * x),
              (et = at * U + H * x),
              (Z = Z * U - j * x),
              (H = H * U - at * x),
              (j = K),
              (at = et)),
            E &&
              Math.abs(E) + Math.abs(_) > 359.9 &&
              ((E = _ = 0), (w = 180 - w)),
            (S = je(Math.sqrt(j * j + Z * Z + rt * rt))),
            (C = je(Math.sqrt(H * H + ct * ct))),
            (Y = fu(at, H)),
            (z = Math.abs(Y) > 2e-4 ? Y * ll : 0),
            (R = it ? 1 / (it < 0 ? -it : it) : 0)),
        i.svg &&
          ((K = n.getAttribute("transform")),
          (i.forceCSS = n.setAttribute("transform", "") || !uS(Ji(n, De))),
          K && n.setAttribute("transform", K))),
      Math.abs(z) > 90 &&
        Math.abs(z) < 270 &&
        (o
          ? ((S *= -1), (z += _ <= 0 ? 180 : -180), (_ += _ <= 0 ? 180 : -180))
          : ((C *= -1), (z += z <= 0 ? 180 : -180))),
      (a = a || i.uncache),
      (i.x =
        m -
        ((i.xPercent =
          m &&
          ((!a && i.xPercent) ||
            (Math.round(n.offsetWidth / 2) === Math.round(-m) ? -50 : 0)))
          ? (n.offsetWidth * i.xPercent) / 100
          : 0) +
        c),
      (i.y =
        y -
        ((i.yPercent =
          y &&
          ((!a && i.yPercent) ||
            (Math.round(n.offsetHeight / 2) === Math.round(-y) ? -50 : 0)))
          ? (n.offsetHeight * i.yPercent) / 100
          : 0) +
        c),
      (i.z = b + c),
      (i.scaleX = je(S)),
      (i.scaleY = je(C)),
      (i.rotation = je(_) + d),
      (i.rotationX = je(E) + d),
      (i.rotationY = je(w) + d),
      (i.skewX = z + d),
      (i.skewY = D + d),
      (i.transformPerspective = R + c),
      (i.zOrigin = parseFloat(g.split(" ")[2]) || (!a && i.zOrigin) || 0) &&
        (l[ni] = wc(g)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = Mi.force3D),
      (i.renderTransform = i.svg ? nO : iS ? sS : eO),
      (i.uncache = 0),
      i
    );
  },
  wc = function (n) {
    return (n = n.split(" "))[0] + " " + n[1];
  },
  E0 = function (n, a, i) {
    var l = Nn(a);
    return je(parseFloat(a) + parseFloat(Ha(n, "x", i + "px", l))) + l;
  },
  eO = function (n, a) {
    (a.z = "0px"),
      (a.rotationY = a.rotationX = "0deg"),
      (a.force3D = 0),
      sS(n, a);
  },
  rl = "0deg",
  ks = "0px",
  al = ") ",
  sS = function (n, a) {
    var i = a || this,
      l = i.xPercent,
      o = i.yPercent,
      c = i.x,
      d = i.y,
      p = i.z,
      g = i.rotation,
      m = i.rotationY,
      y = i.rotationX,
      b = i.skewX,
      S = i.skewY,
      C = i.scaleX,
      _ = i.scaleY,
      E = i.transformPerspective,
      w = i.force3D,
      z = i.target,
      D = i.zOrigin,
      R = "",
      O = (w === "auto" && n && n !== 1) || w === !0;
    if (D && (y !== rl || m !== rl)) {
      var k = parseFloat(m) * Cu,
        N = Math.sin(k),
        Y = Math.cos(k),
        U;
      (k = parseFloat(y) * Cu),
        (U = Math.cos(k)),
        (c = E0(z, c, N * U * -D)),
        (d = E0(z, d, -Math.sin(k) * -D)),
        (p = E0(z, p, Y * U * -D + D));
    }
    E !== ks && (R += "perspective(" + E + al),
      (l || o) && (R += "translate(" + l + "%, " + o + "%) "),
      (O || c !== ks || d !== ks || p !== ks) &&
        (R +=
          p !== ks || O
            ? "translate3d(" + c + ", " + d + ", " + p + ") "
            : "translate(" + c + ", " + d + al),
      g !== rl && (R += "rotate(" + g + al),
      m !== rl && (R += "rotateY(" + m + al),
      y !== rl && (R += "rotateX(" + y + al),
      (b !== rl || S !== rl) && (R += "skew(" + b + ", " + S + al),
      (C !== 1 || _ !== 1) && (R += "scale(" + C + ", " + _ + al),
      (z.style[De] = R || "translate(0, 0)");
  },
  nO = function (n, a) {
    var i = a || this,
      l = i.xPercent,
      o = i.yPercent,
      c = i.x,
      d = i.y,
      p = i.rotation,
      g = i.skewX,
      m = i.skewY,
      y = i.scaleX,
      b = i.scaleY,
      S = i.target,
      C = i.xOrigin,
      _ = i.yOrigin,
      E = i.xOffset,
      w = i.yOffset,
      z = i.forceCSS,
      D = parseFloat(c),
      R = parseFloat(d),
      O,
      k,
      N,
      Y,
      U;
    (p = parseFloat(p)),
      (g = parseFloat(g)),
      (m = parseFloat(m)),
      m && ((m = parseFloat(m)), (g += m), (p += m)),
      p || g
        ? ((p *= Cu),
          (g *= Cu),
          (O = Math.cos(p) * y),
          (k = Math.sin(p) * y),
          (N = Math.sin(p - g) * -b),
          (Y = Math.cos(p - g) * b),
          g &&
            ((m *= Cu),
            (U = Math.tan(g - m)),
            (U = Math.sqrt(1 + U * U)),
            (N *= U),
            (Y *= U),
            m &&
              ((U = Math.tan(m)),
              (U = Math.sqrt(1 + U * U)),
              (O *= U),
              (k *= U))),
          (O = je(O)),
          (k = je(k)),
          (N = je(N)),
          (Y = je(Y)))
        : ((O = y), (Y = b), (k = N = 0)),
      ((D && !~(c + "").indexOf("px")) || (R && !~(d + "").indexOf("px"))) &&
        ((D = Ha(S, "x", c, "px")), (R = Ha(S, "y", d, "px"))),
      (C || _ || E || w) &&
        ((D = je(D + C - (C * O + _ * N) + E)),
        (R = je(R + _ - (C * k + _ * Y) + w))),
      (l || o) &&
        ((U = S.getBBox()),
        (D = je(D + (l / 100) * U.width)),
        (R = je(R + (o / 100) * U.height))),
      (U =
        "matrix(" + O + "," + k + "," + N + "," + Y + "," + D + "," + R + ")"),
      S.setAttribute("transform", U),
      z && (S.style[De] = U);
  },
  iO = function (n, a, i, l, o) {
    var c = 360,
      d = gn(o),
      p = parseFloat(o) * (d && ~o.indexOf("rad") ? ll : 1),
      g = p - l,
      m = l + g + "deg",
      y,
      b;
    return (
      d &&
        ((y = o.split("_")[1]),
        y === "short" &&
          ((g %= c), g !== g % (c / 2) && (g += g < 0 ? c : -360)),
        y === "cw" && g < 0
          ? (g = ((g + c * j_) % c) - ~~(g / c) * c)
          : y === "ccw" && g > 0 && (g = ((g - c * j_) % c) - ~~(g / c) * c)),
      (n._pt = b = new ei(n._pt, a, i, l, g, qE)),
      (b.e = m),
      (b.u = "deg"),
      n._props.push(i),
      b
    );
  },
  J_ = function (n, a) {
    for (var i in a) n[i] = a[i];
    return n;
  },
  rO = function (n, a, i) {
    var l = J_({}, i._gsap),
      o = "perspective,force3D,transformOrigin,svgOrigin",
      c = i.style,
      d,
      p,
      g,
      m,
      y,
      b,
      S,
      C;
    l.svg
      ? ((g = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (c[De] = a),
        (d = So(i, 1)),
        Sl(i, De),
        i.setAttribute("transform", g))
      : ((g = getComputedStyle(i)[De]),
        (c[De] = a),
        (d = So(i, 1)),
        (c[De] = g));
    for (p in na)
      (g = l[p]),
        (m = d[p]),
        g !== m &&
          o.indexOf(p) < 0 &&
          ((S = Nn(g)),
          (C = Nn(m)),
          (y = S !== C ? Ha(i, p, g, C) : parseFloat(g)),
          (b = parseFloat(m)),
          (n._pt = new ei(n._pt, d, p, y, b - y, ig)),
          (n._pt.u = C || 0),
          n._props.push(p));
    J_(d, l);
  };
ti("padding,margin,Width,Radius", function (u, n) {
  var a = "Top",
    i = "Right",
    l = "Bottom",
    o = "Left",
    c = (n < 3 ? [a, i, l, o] : [a + o, a + i, l + i, l + o]).map(function (d) {
      return n < 2 ? u + d : "border" + d + u;
    });
  Mc[n > 1 ? "border" + u : u] = function (d, p, g, m, y) {
    var b, S;
    if (arguments.length < 4)
      return (
        (b = c.map(function (C) {
          return Qr(d, C, g);
        })),
        (S = b.join(" ")),
        S.split(b[0]).length === 5 ? b[0] : S
      );
    (b = (m + "").split(" ")),
      (S = {}),
      c.forEach(function (C, _) {
        return (S[C] = b[_] = b[_] || b[((_ - 1) / 2) | 0]);
      }),
      d.init(p, S, y);
  };
});
var oS = {
  name: "css",
  register: ag,
  targetTest: function (n) {
    return n.style && n.nodeType;
  },
  init: function (n, a, i, l, o) {
    var c = this._props,
      d = n.style,
      p = i.vars.startAt,
      g,
      m,
      y,
      b,
      S,
      C,
      _,
      E,
      w,
      z,
      D,
      R,
      O,
      k,
      N,
      Y;
    rp || ag(),
      (this.styles = this.styles || nS(n)),
      (Y = this.styles.props),
      (this.tween = i);
    for (_ in a)
      if (_ !== "autoRound" && ((m = a[_]), !(bi[_] && $b(_, a, i, l, n, o)))) {
        if (
          ((S = typeof m),
          (C = Mc[_]),
          S === "function" && ((m = m.call(i, l, n, o)), (S = typeof m)),
          S === "string" && ~m.indexOf("random(") && (m = yo(m)),
          C)
        )
          C(this, n, _, m, i) && (N = 1);
        else if (_.substr(0, 2) === "--")
          (g = (getComputedStyle(n).getPropertyValue(_) + "").trim()),
            (m += ""),
            (Ba.lastIndex = 0),
            Ba.test(g) || ((E = Nn(g)), (w = Nn(m))),
            w ? E !== w && (g = Ha(n, _, g, w) + w) : E && (m += E),
            this.add(d, "setProperty", g, m, l, o, 0, 0, _),
            c.push(_),
            Y.push(_, 0, d[_]);
        else if (S !== "undefined") {
          if (
            (p && _ in p
              ? ((g = typeof p[_] == "function" ? p[_].call(i, l, n, o) : p[_]),
                gn(g) && ~g.indexOf("random(") && (g = yo(g)),
                Nn(g + "") ||
                  g === "auto" ||
                  (g += Mi.units[_] || Nn(Qr(n, _)) || ""),
                (g + "").charAt(1) === "=" && (g = Qr(n, _)))
              : (g = Qr(n, _)),
            (b = parseFloat(g)),
            (z = S === "string" && m.charAt(1) === "=" && m.substr(0, 2)),
            z && (m = m.substr(2)),
            (y = parseFloat(m)),
            _ in vr &&
              (_ === "autoAlpha" &&
                (b === 1 && Qr(n, "visibility") === "hidden" && y && (b = 0),
                Y.push("visibility", 0, d.visibility),
                Ra(
                  this,
                  d,
                  "visibility",
                  b ? "inherit" : "hidden",
                  y ? "inherit" : "hidden",
                  !y
                )),
              _ !== "scale" &&
                _ !== "transform" &&
                ((_ = vr[_]), ~_.indexOf(",") && (_ = _.split(",")[0]))),
            (D = _ in na),
            D)
          ) {
            if (
              (this.styles.save(_),
              S === "string" &&
                m.substring(0, 6) === "var(--" &&
                ((m = Ji(n, m.substring(4, m.indexOf(")")))),
                (y = parseFloat(m))),
              R ||
                ((O = n._gsap),
                (O.renderTransform && !a.parseTransform) ||
                  So(n, a.parseTransform),
                (k = a.smoothOrigin !== !1 && O.smooth),
                (R = this._pt =
                  new ei(this._pt, d, De, 0, 1, O.renderTransform, O, 0, -1)),
                (R.dep = 1)),
              _ === "scale")
            )
              (this._pt = new ei(
                this._pt,
                O,
                "scaleY",
                O.scaleY,
                (z ? xu(O.scaleY, z + y) : y) - O.scaleY || 0,
                ig
              )),
                (this._pt.u = 0),
                c.push("scaleY", _),
                (_ += "X");
            else if (_ === "transformOrigin") {
              Y.push(ni, 0, d[ni]),
                (m = IE(m)),
                O.svg
                  ? lg(n, m, 0, k, 0, this)
                  : ((w = parseFloat(m.split(" ")[2]) || 0),
                    w !== O.zOrigin && Ra(this, O, "zOrigin", O.zOrigin, w),
                    Ra(this, d, _, wc(g), wc(m)));
              continue;
            } else if (_ === "svgOrigin") {
              lg(n, m, 1, k, 0, this);
              continue;
            } else if (_ in lS) {
              iO(this, O, _, b, z ? xu(b, z + m) : m);
              continue;
            } else if (_ === "smoothOrigin") {
              Ra(this, O, "smooth", O.smooth, m);
              continue;
            } else if (_ === "force3D") {
              O[_] = m;
              continue;
            } else if (_ === "transform") {
              rO(this, m, n);
              continue;
            }
          } else _ in d || (_ = ku(_) || _);
          if (D || ((y || y === 0) && (b || b === 0) && !YE.test(m) && _ in d))
            (E = (g + "").substr((b + "").length)),
              y || (y = 0),
              (w = Nn(m) || (_ in Mi.units ? Mi.units[_] : E)),
              E !== w && (b = Ha(n, _, g, w)),
              (this._pt = new ei(
                this._pt,
                D ? O : d,
                _,
                b,
                (z ? xu(b, z + y) : y) - b,
                !D && (w === "px" || _ === "zIndex") && a.autoRound !== !1
                  ? GE
                  : ig
              )),
              (this._pt.u = w || 0),
              E !== w && w !== "%" && ((this._pt.b = g), (this._pt.r = XE));
          else if (_ in d) WE.call(this, n, _, g, z ? z + m : m);
          else if (_ in n) this.add(n, _, g || n[_], z ? z + m : m, l, o);
          else if (_ !== "parseTransform") {
            Kg(_, m);
            continue;
          }
          D ||
            (_ in d
              ? Y.push(_, 0, d[_])
              : typeof n[_] == "function"
              ? Y.push(_, 2, n[_]())
              : Y.push(_, 1, g || n[_])),
            c.push(_);
        }
      }
    N && Fb(this);
  },
  render: function (n, a) {
    if (a.tween._time || !ap())
      for (var i = a._pt; i; ) i.r(n, i.d), (i = i._next);
    else a.styles.revert();
  },
  get: Qr,
  aliases: vr,
  getSetter: function (n, a, i) {
    var l = vr[a];
    return (
      l && l.indexOf(",") < 0 && (a = l),
      a in na && a !== ni && (n._gsap.x || Qr(n, "x"))
        ? i && G_ === i
          ? a === "scale"
            ? QE
            : $E
          : (G_ = i || {}) && (a === "scale" ? ZE : KE)
        : n.style && !$g(n.style[a])
        ? jE
        : ~a.indexOf("-")
        ? VE
        : np(n, a)
    );
  },
  core: { _removeProperty: Sl, _getMatrix: up },
};
ri.utils.checkPrefix = ku;
ri.core.getStyleSaver = nS;
(function (u, n, a, i) {
  var l = ti(u + "," + n + "," + a, function (o) {
    na[o] = 1;
  });
  ti(n, function (o) {
    (Mi.units[o] = "deg"), (lS[o] = 1);
  }),
    (vr[l[13]] = u + "," + n),
    ti(i, function (o) {
      var c = o.split(":");
      vr[c[1]] = l[c[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
ti(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (u) {
    Mi.units[u] = "px";
  }
);
ri.registerPlugin(oS);
var fS = ri.registerPlugin(oS) || ri;
fS.core.Tween;
function aO(u, n) {
  for (var a = 0; a < n.length; a++) {
    var i = n[a];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(u, i.key, i);
  }
}
function lO(u, n, a) {
  return n && aO(u.prototype, n), u;
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Cn,
  dc,
  Ci,
  Da,
  za,
  Au,
  cS,
  ul,
  to,
  dS,
  Jr,
  rr,
  hS,
  gS = function () {
    return (
      Cn ||
      (typeof window < "u" && (Cn = window.gsap) && Cn.registerPlugin && Cn)
    );
  },
  pS = 1,
  _u = [],
  Bt = [],
  Tr = [],
  eo = Date.now,
  ug = function (n, a) {
    return a;
  },
  uO = function () {
    var n = to.core,
      a = n.bridge || {},
      i = n._scrollers,
      l = n._proxies;
    i.push.apply(i, Bt),
      l.push.apply(l, Tr),
      (Bt = i),
      (Tr = l),
      (ug = function (c, d) {
        return a[c](d);
      });
  },
  ka = function (n, a) {
    return ~Tr.indexOf(n) && Tr[Tr.indexOf(n) + 1][a];
  },
  no = function (n) {
    return !!~dS.indexOf(n);
  },
  Xn = function (n, a, i, l, o) {
    return n.addEventListener(a, i, { passive: l !== !1, capture: !!o });
  },
  qn = function (n, a, i, l) {
    return n.removeEventListener(a, i, !!l);
  },
  $f = "scrollLeft",
  Qf = "scrollTop",
  sg = function () {
    return (Jr && Jr.isPressed) || Bt.cache++;
  },
  Rc = function (n, a) {
    var i = function l(o) {
      if (o || o === 0) {
        pS && (Ci.history.scrollRestoration = "manual");
        var c = Jr && Jr.isPressed;
        (o = l.v = Math.round(o) || (Jr && Jr.iOS ? 1 : 0)),
          n(o),
          (l.cacheID = Bt.cache),
          c && ug("ss", o);
      } else
        (a || Bt.cache !== l.cacheID || ug("ref")) &&
          ((l.cacheID = Bt.cache), (l.v = n()));
      return l.v + l.offset;
    };
    return (i.offset = 0), n && i;
  },
  Qn = {
    s: $f,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Rc(function (u) {
      return arguments.length
        ? Ci.scrollTo(u, sn.sc())
        : Ci.pageXOffset || Da[$f] || za[$f] || Au[$f] || 0;
    }),
  },
  sn = {
    s: Qf,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Qn,
    sc: Rc(function (u) {
      return arguments.length
        ? Ci.scrollTo(Qn.sc(), u)
        : Ci.pageYOffset || Da[Qf] || za[Qf] || Au[Qf] || 0;
    }),
  },
  Wn = function (n, a) {
    return (
      ((a && a._ctx && a._ctx.selector) || Cn.utils.toArray)(n)[0] ||
      (typeof n == "string" && Cn.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", n)
        : null)
    );
  },
  sO = function (n, a) {
    for (var i = a.length; i--; ) if (a[i] === n || a[i].contains(n)) return !0;
    return !1;
  },
  Ya = function (n, a) {
    var i = a.s,
      l = a.sc;
    no(n) && (n = Da.scrollingElement || za);
    var o = Bt.indexOf(n),
      c = l === sn.sc ? 1 : 2;
    !~o && (o = Bt.push(n) - 1), Bt[o + c] || Xn(n, "scroll", sg);
    var d = Bt[o + c],
      p =
        d ||
        (Bt[o + c] =
          Rc(ka(n, i), !0) ||
          (no(n)
            ? l
            : Rc(function (g) {
                return arguments.length ? (n[i] = g) : n[i];
              })));
    return (
      (p.target = n),
      d || (p.smooth = Cn.getProperty(n, "scrollBehavior") === "smooth"),
      p
    );
  },
  og = function (n, a, i) {
    var l = n,
      o = n,
      c = eo(),
      d = c,
      p = a || 50,
      g = Math.max(500, p * 3),
      m = function (C, _) {
        var E = eo();
        _ || E - c > p
          ? ((o = l), (l = C), (d = c), (c = E))
          : i
          ? (l += C)
          : (l = o + ((C - o) / (E - d)) * (c - d));
      },
      y = function () {
        (o = l = i ? 0 : l), (d = c = 0);
      },
      b = function (C) {
        var _ = d,
          E = o,
          w = eo();
        return (
          (C || C === 0) && C !== l && m(C),
          c === d || w - d > g
            ? 0
            : ((l + (i ? E : -E)) / ((i ? w : c) - _)) * 1e3
        );
      };
    return { update: m, reset: y, getVelocity: b };
  },
  Us = function (n, a) {
    return (
      a && !n._gsapAllow && n.preventDefault(),
      n.changedTouches ? n.changedTouches[0] : n
    );
  },
  F_ = function (n) {
    var a = Math.max.apply(Math, n),
      i = Math.min.apply(Math, n);
    return Math.abs(a) >= Math.abs(i) ? a : i;
  },
  mS = function () {
    (to = Cn.core.globals().ScrollTrigger), to && to.core && uO();
  },
  yS = function (n) {
    return (
      (Cn = n || gS()),
      !dc &&
        Cn &&
        typeof document < "u" &&
        document.body &&
        ((Ci = window),
        (Da = document),
        (za = Da.documentElement),
        (Au = Da.body),
        (dS = [Ci, Da, za, Au]),
        Cn.utils.clamp,
        (hS = Cn.core.context || function () {}),
        (ul = "onpointerenter" in Au ? "pointer" : "mouse"),
        (cS = Ve.isTouch =
          Ci.matchMedia &&
          Ci.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Ci ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (rr = Ve.eventTypes =
          (
            "ontouchstart" in za
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in za
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (pS = 0);
        }, 500),
        mS(),
        (dc = 1)),
      dc
    );
  };
Qn.op = sn;
Bt.cache = 0;
var Ve = (function () {
  function u(a) {
    this.init(a);
  }
  var n = u.prototype;
  return (
    (n.init = function (i) {
      dc || yS(Cn) || console.warn("Please gsap.registerPlugin(Observer)"),
        to || mS();
      var l = i.tolerance,
        o = i.dragMinimum,
        c = i.type,
        d = i.target,
        p = i.lineHeight,
        g = i.debounce,
        m = i.preventDefault,
        y = i.onStop,
        b = i.onStopDelay,
        S = i.ignore,
        C = i.wheelSpeed,
        _ = i.event,
        E = i.onDragStart,
        w = i.onDragEnd,
        z = i.onDrag,
        D = i.onPress,
        R = i.onRelease,
        O = i.onRight,
        k = i.onLeft,
        N = i.onUp,
        Y = i.onDown,
        U = i.onChangeX,
        x = i.onChangeY,
        j = i.onChange,
        Z = i.onToggleX,
        rt = i.onToggleY,
        ht = i.onHover,
        at = i.onHoverEnd,
        H = i.onMove,
        K = i.ignoreCheck,
        et = i.isNormalizer,
        ft = i.onGestureStart,
        T = i.onGestureEnd,
        Q = i.onWheel,
        tt = i.onEnable,
        I = i.onDisable,
        it = i.onClick,
        ct = i.scrollSpeed,
        lt = i.capture,
        Tt = i.allowClicks,
        St = i.lockAxis,
        Jt = i.onLockAxis;
      (this.target = d = Wn(d) || za),
        (this.vars = i),
        S && (S = Cn.utils.toArray(S)),
        (l = l || 1e-9),
        (o = o || 0),
        (C = C || 1),
        (ct = ct || 1),
        (c = c || "wheel,touch,pointer"),
        (g = g !== !1),
        p || (p = parseFloat(Ci.getComputedStyle(Au).lineHeight) || 22);
      var ae,
        ze,
        Ye,
        Et,
        le,
        en,
        pn,
        $ = this,
        nn = 0,
        Se = 0,
        En = i.passive || (!m && i.passive !== !1),
        Gt = Ya(d, Qn),
        mn = Ya(d, sn),
        ai = Gt(),
        Di = mn(),
        Ee =
          ~c.indexOf("touch") &&
          !~c.indexOf("pointer") &&
          rr[0] === "pointerdown",
        yn = no(d),
        Dt = d.ownerDocument || Da,
        Oe = [0, 0, 0],
        ee = [0, 0, 0],
        pe = 0,
        ne = function () {
          return (pe = eo());
        },
        Ft = function (mt, Mt) {
          return (
            (($.event = mt) && S && sO(mt.target, S)) ||
            (Mt && Ee && mt.pointerType !== "touch") ||
            (K && K(mt, Mt))
          );
        },
        Qe = function () {
          $._vx.reset(), $._vy.reset(), ze.pause(), y && y($);
        },
        me = function () {
          var mt = ($.deltaX = F_(Oe)),
            Mt = ($.deltaY = F_(ee)),
            nt = Math.abs(mt) >= l,
            gt = Math.abs(Mt) >= l;
          j && (nt || gt) && j($, mt, Mt, Oe, ee),
            nt &&
              (O && $.deltaX > 0 && O($),
              k && $.deltaX < 0 && k($),
              U && U($),
              Z && $.deltaX < 0 != nn < 0 && Z($),
              (nn = $.deltaX),
              (Oe[0] = Oe[1] = Oe[2] = 0)),
            gt &&
              (Y && $.deltaY > 0 && Y($),
              N && $.deltaY < 0 && N($),
              x && x($),
              rt && $.deltaY < 0 != Se < 0 && rt($),
              (Se = $.deltaY),
              (ee[0] = ee[1] = ee[2] = 0)),
            (Et || Ye) &&
              (H && H($),
              Ye && (E && Ye === 1 && E($), z && z($), (Ye = 0)),
              (Et = !1)),
            en && !(en = !1) && Jt && Jt($),
            le && (Q($), (le = !1)),
            (ae = 0);
        },
        On = function (mt, Mt, nt) {
          (Oe[nt] += mt),
            (ee[nt] += Mt),
            $._vx.update(mt),
            $._vy.update(Mt),
            g ? ae || (ae = requestAnimationFrame(me)) : me();
        },
        tr = function (mt, Mt) {
          St &&
            !pn &&
            (($.axis = pn = Math.abs(mt) > Math.abs(Mt) ? "x" : "y"),
            (en = !0)),
            pn !== "y" && ((Oe[2] += mt), $._vx.update(mt, !0)),
            pn !== "x" && ((ee[2] += Mt), $._vy.update(Mt, !0)),
            g ? ae || (ae = requestAnimationFrame(me)) : me();
        },
        Zn = function (mt) {
          if (!Ft(mt, 1)) {
            mt = Us(mt, m);
            var Mt = mt.clientX,
              nt = mt.clientY,
              gt = Mt - $.x,
              dt = nt - $.y,
              bt = $.isDragging;
            ($.x = Mt),
              ($.y = nt),
              (bt ||
                ((gt || dt) &&
                  (Math.abs($.startX - Mt) >= o ||
                    Math.abs($.startY - nt) >= o))) &&
                ((Ye = bt ? 2 : 1), bt || ($.isDragging = !0), tr(gt, dt));
          }
        },
        Ar = ($.onPress = function (xt) {
          Ft(xt, 1) ||
            (xt && xt.button) ||
            (($.axis = pn = null),
            ze.pause(),
            ($.isPressed = !0),
            (xt = Us(xt)),
            (nn = Se = 0),
            ($.startX = $.x = xt.clientX),
            ($.startY = $.y = xt.clientY),
            $._vx.reset(),
            $._vy.reset(),
            Xn(et ? d : Dt, rr[1], Zn, En, !0),
            ($.deltaX = $.deltaY = 0),
            D && D($));
        }),
        Ot = ($.onRelease = function (xt) {
          if (!Ft(xt, 1)) {
            qn(et ? d : Dt, rr[1], Zn, !0);
            var mt = !isNaN($.y - $.startY),
              Mt = $.isDragging,
              nt =
                Mt &&
                (Math.abs($.x - $.startX) > 3 || Math.abs($.y - $.startY) > 3),
              gt = Us(xt);
            !nt &&
              mt &&
              ($._vx.reset(),
              $._vy.reset(),
              m &&
                Tt &&
                Cn.delayedCall(0.08, function () {
                  if (eo() - pe > 300 && !xt.defaultPrevented) {
                    if (xt.target.click) xt.target.click();
                    else if (Dt.createEvent) {
                      var dt = Dt.createEvent("MouseEvents");
                      dt.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Ci,
                        1,
                        gt.screenX,
                        gt.screenY,
                        gt.clientX,
                        gt.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        xt.target.dispatchEvent(dt);
                    }
                  }
                })),
              ($.isDragging = $.isGesturing = $.isPressed = !1),
              y && Mt && !et && ze.restart(!0),
              Ye && me(),
              w && Mt && w($),
              R && R($, nt);
          }
        }),
        lr = function (mt) {
          return (
            mt.touches &&
            mt.touches.length > 1 &&
            ($.isGesturing = !0) &&
            ft(mt, $.isDragging)
          );
        },
        Ln = function () {
          return ($.isGesturing = !1) || T($);
        },
        _n = function (mt) {
          if (!Ft(mt)) {
            var Mt = Gt(),
              nt = mn();
            On((Mt - ai) * ct, (nt - Di) * ct, 1),
              (ai = Mt),
              (Di = nt),
              y && ze.restart(!0);
          }
        },
        li = function (mt) {
          if (!Ft(mt)) {
            (mt = Us(mt, m)), Q && (le = !0);
            var Mt =
              (mt.deltaMode === 1
                ? p
                : mt.deltaMode === 2
                ? Ci.innerHeight
                : 1) * C;
            On(mt.deltaX * Mt, mt.deltaY * Mt, 0), y && !et && ze.restart(!0);
          }
        },
        ur = function (mt) {
          if (!Ft(mt)) {
            var Mt = mt.clientX,
              nt = mt.clientY,
              gt = Mt - $.x,
              dt = nt - $.y;
            ($.x = Mt),
              ($.y = nt),
              (Et = !0),
              y && ze.restart(!0),
              (gt || dt) && tr(gt, dt);
          }
        },
        Er = function (mt) {
          ($.event = mt), ht($);
        },
        ui = function (mt) {
          ($.event = mt), at($);
        },
        Or = function (mt) {
          return Ft(mt) || (Us(mt, m) && it($));
        };
      (ze = $._dc = Cn.delayedCall(b || 0.25, Qe).pause()),
        ($.deltaX = $.deltaY = 0),
        ($._vx = og(0, 50, !0)),
        ($._vy = og(0, 50, !0)),
        ($.scrollX = Gt),
        ($.scrollY = mn),
        ($.isDragging = $.isGesturing = $.isPressed = !1),
        hS(this),
        ($.enable = function (xt) {
          return (
            $.isEnabled ||
              (Xn(yn ? Dt : d, "scroll", sg),
              c.indexOf("scroll") >= 0 && Xn(yn ? Dt : d, "scroll", _n, En, lt),
              c.indexOf("wheel") >= 0 && Xn(d, "wheel", li, En, lt),
              ((c.indexOf("touch") >= 0 && cS) || c.indexOf("pointer") >= 0) &&
                (Xn(d, rr[0], Ar, En, lt),
                Xn(Dt, rr[2], Ot),
                Xn(Dt, rr[3], Ot),
                Tt && Xn(d, "click", ne, !0, !0),
                it && Xn(d, "click", Or),
                ft && Xn(Dt, "gesturestart", lr),
                T && Xn(Dt, "gestureend", Ln),
                ht && Xn(d, ul + "enter", Er),
                at && Xn(d, ul + "leave", ui),
                H && Xn(d, ul + "move", ur)),
              ($.isEnabled = !0),
              ($.isDragging = $.isGesturing = $.isPressed = Et = Ye = !1),
              $._vx.reset(),
              $._vy.reset(),
              (ai = Gt()),
              (Di = mn()),
              xt && xt.type && Ar(xt),
              tt && tt($)),
            $
          );
        }),
        ($.disable = function () {
          $.isEnabled &&
            (_u.filter(function (xt) {
              return xt !== $ && no(xt.target);
            }).length || qn(yn ? Dt : d, "scroll", sg),
            $.isPressed &&
              ($._vx.reset(), $._vy.reset(), qn(et ? d : Dt, rr[1], Zn, !0)),
            qn(yn ? Dt : d, "scroll", _n, lt),
            qn(d, "wheel", li, lt),
            qn(d, rr[0], Ar, lt),
            qn(Dt, rr[2], Ot),
            qn(Dt, rr[3], Ot),
            qn(d, "click", ne, !0),
            qn(d, "click", Or),
            qn(Dt, "gesturestart", lr),
            qn(Dt, "gestureend", Ln),
            qn(d, ul + "enter", Er),
            qn(d, ul + "leave", ui),
            qn(d, ul + "move", ur),
            ($.isEnabled = $.isPressed = $.isDragging = !1),
            I && I($));
        }),
        ($.kill = $.revert =
          function () {
            $.disable();
            var xt = _u.indexOf($);
            xt >= 0 && _u.splice(xt, 1), Jr === $ && (Jr = 0);
          }),
        _u.push($),
        et && no(d) && (Jr = $),
        $.enable(_);
    }),
    lO(u, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    u
  );
})();
Ve.version = "3.13.0";
Ve.create = function (u) {
  return new Ve(u);
};
Ve.register = yS;
Ve.getAll = function () {
  return _u.slice();
};
Ve.getById = function (u) {
  return _u.filter(function (n) {
    return n.vars.id === u;
  })[0];
};
gS() && Cn.registerPlugin(Ve);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ut,
  hu,
  Nt,
  ve,
  Si,
  te,
  sp,
  Dc,
  xo,
  io,
  js,
  Zf,
  Dn,
  td,
  fg,
  jn,
  W_,
  I_,
  gu,
  _S,
  O0,
  vS,
  Gn,
  cg,
  bS,
  SS,
  Oa,
  dg,
  op,
  Eu,
  fp,
  zc,
  hg,
  M0,
  Kf = 1,
  zn = Date.now,
  w0 = zn(),
  Wi = 0,
  Vs = 0,
  tv = function (n, a, i) {
    var l = vi(n) && (n.substr(0, 6) === "clamp(" || n.indexOf("max") > -1);
    return (i["_" + a + "Clamp"] = l), l ? n.substr(6, n.length - 7) : n;
  },
  ev = function (n, a) {
    return a && (!vi(n) || n.substr(0, 6) !== "clamp(")
      ? "clamp(" + n + ")"
      : n;
  },
  oO = function u() {
    return Vs && requestAnimationFrame(u);
  },
  nv = function () {
    return (td = 1);
  },
  iv = function () {
    return (td = 0);
  },
  pr = function (n) {
    return n;
  },
  $s = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  xS = function () {
    return typeof window < "u";
  },
  TS = function () {
    return ut || (xS() && (ut = window.gsap) && ut.registerPlugin && ut);
  },
  xl = function (n) {
    return !!~sp.indexOf(n);
  },
  CS = function (n) {
    return (
      (n === "Height" ? fp : Nt["inner" + n]) ||
      Si["client" + n] ||
      te["client" + n]
    );
  },
  AS = function (n) {
    return (
      ka(n, "getBoundingClientRect") ||
      (xl(n)
        ? function () {
            return (yc.width = Nt.innerWidth), (yc.height = fp), yc;
          }
        : function () {
            return Kr(n);
          })
    );
  },
  fO = function (n, a, i) {
    var l = i.d,
      o = i.d2,
      c = i.a;
    return (c = ka(n, "getBoundingClientRect"))
      ? function () {
          return c()[l];
        }
      : function () {
          return (a ? CS(o) : n["client" + o]) || 0;
        };
  },
  cO = function (n, a) {
    return !a || ~Tr.indexOf(n)
      ? AS(n)
      : function () {
          return yc;
        };
  },
  br = function (n, a) {
    var i = a.s,
      l = a.d2,
      o = a.d,
      c = a.a;
    return Math.max(
      0,
      (i = "scroll" + l) && (c = ka(n, i))
        ? c() - AS(n)()[o]
        : xl(n)
        ? (Si[i] || te[i]) - CS(l)
        : n[i] - n["offset" + l]
    );
  },
  Pf = function (n, a) {
    for (var i = 0; i < gu.length; i += 3)
      (!a || ~a.indexOf(gu[i + 1])) && n(gu[i], gu[i + 1], gu[i + 2]);
  },
  vi = function (n) {
    return typeof n == "string";
  },
  Bn = function (n) {
    return typeof n == "function";
  },
  Qs = function (n) {
    return typeof n == "number";
  },
  sl = function (n) {
    return typeof n == "object";
  },
  Ls = function (n, a, i) {
    return n && n.progress(a ? 0 : 1) && i && n.pause();
  },
  R0 = function (n, a) {
    if (n.enabled) {
      var i = n._ctx
        ? n._ctx.add(function () {
            return a(n);
          })
        : a(n);
      i && i.totalTime && (n.callbackAnimation = i);
    }
  },
  cu = Math.abs,
  ES = "left",
  OS = "top",
  cp = "right",
  dp = "bottom",
  pl = "width",
  ml = "height",
  ro = "Right",
  ao = "Left",
  lo = "Top",
  uo = "Bottom",
  Fe = "padding",
  Qi = "margin",
  Uu = "Width",
  hp = "Height",
  un = "px",
  Zi = function (n) {
    return Nt.getComputedStyle(n);
  },
  dO = function (n) {
    var a = Zi(n).position;
    n.style.position = a === "absolute" || a === "fixed" ? a : "relative";
  },
  rv = function (n, a) {
    for (var i in a) i in n || (n[i] = a[i]);
    return n;
  },
  Kr = function (n, a) {
    var i =
        a &&
        Zi(n)[fg] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        ut
          .to(n, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      l = n.getBoundingClientRect();
    return i && i.progress(0).kill(), l;
  },
  Nc = function (n, a) {
    var i = a.d2;
    return n["offset" + i] || n["client" + i] || 0;
  },
  MS = function (n) {
    var a = [],
      i = n.labels,
      l = n.duration(),
      o;
    for (o in i) a.push(i[o] / l);
    return a;
  },
  hO = function (n) {
    return function (a) {
      return ut.utils.snap(MS(n), a);
    };
  },
  gp = function (n) {
    var a = ut.utils.snap(n),
      i =
        Array.isArray(n) &&
        n.slice(0).sort(function (l, o) {
          return l - o;
        });
    return i
      ? function (l, o, c) {
          c === void 0 && (c = 0.001);
          var d;
          if (!o) return a(l);
          if (o > 0) {
            for (l -= c, d = 0; d < i.length; d++) if (i[d] >= l) return i[d];
            return i[d - 1];
          } else for (d = i.length, l += c; d--; ) if (i[d] <= l) return i[d];
          return i[0];
        }
      : function (l, o, c) {
          c === void 0 && (c = 0.001);
          var d = a(l);
          return !o || Math.abs(d - l) < c || d - l < 0 == o < 0
            ? d
            : a(o < 0 ? l - n : l + n);
        };
  },
  gO = function (n) {
    return function (a, i) {
      return gp(MS(n))(a, i.direction);
    };
  },
  Jf = function (n, a, i, l) {
    return i.split(",").forEach(function (o) {
      return n(a, o, l);
    });
  },
  hn = function (n, a, i, l, o) {
    return n.addEventListener(a, i, { passive: !l, capture: !!o });
  },
  dn = function (n, a, i, l) {
    return n.removeEventListener(a, i, !!l);
  },
  Ff = function (n, a, i) {
    (i = i && i.wheelHandler), i && (n(a, "wheel", i), n(a, "touchmove", i));
  },
  av = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Wf = { toggleActions: "play", anticipatePin: 0 },
  Bc = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  hc = function (n, a) {
    if (vi(n)) {
      var i = n.indexOf("="),
        l = ~i ? +(n.charAt(i - 1) + 1) * parseFloat(n.substr(i + 1)) : 0;
      ~i && (n.indexOf("%") > i && (l *= a / 100), (n = n.substr(0, i - 1))),
        (n =
          l +
          (n in Bc
            ? Bc[n] * a
            : ~n.indexOf("%")
            ? (parseFloat(n) * a) / 100
            : parseFloat(n) || 0));
    }
    return n;
  },
  If = function (n, a, i, l, o, c, d, p) {
    var g = o.startColor,
      m = o.endColor,
      y = o.fontSize,
      b = o.indent,
      S = o.fontWeight,
      C = ve.createElement("div"),
      _ = xl(i) || ka(i, "pinType") === "fixed",
      E = n.indexOf("scroller") !== -1,
      w = _ ? te : i,
      z = n.indexOf("start") !== -1,
      D = z ? g : m,
      R =
        "border-color:" +
        D +
        ";font-size:" +
        y +
        ";color:" +
        D +
        ";font-weight:" +
        S +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (R += "position:" + ((E || p) && _ ? "fixed;" : "absolute;")),
      (E || p || !_) &&
        (R += (l === sn ? cp : dp) + ":" + (c + parseFloat(b)) + "px;"),
      d &&
        (R +=
          "box-sizing:border-box;text-align:left;width:" +
          d.offsetWidth +
          "px;"),
      (C._isStart = z),
      C.setAttribute("class", "gsap-marker-" + n + (a ? " marker-" + a : "")),
      (C.style.cssText = R),
      (C.innerText = a || a === 0 ? n + "-" + a : n),
      w.children[0] ? w.insertBefore(C, w.children[0]) : w.appendChild(C),
      (C._offset = C["offset" + l.op.d2]),
      gc(C, 0, l, z),
      C
    );
  },
  gc = function (n, a, i, l) {
    var o = { display: "block" },
      c = i[l ? "os2" : "p2"],
      d = i[l ? "p2" : "os2"];
    (n._isFlipped = l),
      (o[i.a + "Percent"] = l ? -100 : 0),
      (o[i.a] = l ? "1px" : 0),
      (o["border" + c + Uu] = 1),
      (o["border" + d + Uu] = 0),
      (o[i.p] = a + "px"),
      ut.set(n, o);
  },
  Rt = [],
  gg = {},
  To,
  lv = function () {
    return zn() - Wi > 34 && (To || (To = requestAnimationFrame(Ir)));
  },
  du = function () {
    (!Gn || !Gn.isPressed || Gn.startX > te.clientWidth) &&
      (Bt.cache++,
      Gn ? To || (To = requestAnimationFrame(Ir)) : Ir(),
      Wi || Cl("scrollStart"),
      (Wi = zn()));
  },
  D0 = function () {
    (SS = Nt.innerWidth), (bS = Nt.innerHeight);
  },
  Zs = function (n) {
    Bt.cache++,
      (n === !0 ||
        (!Dn &&
          !vS &&
          !ve.fullscreenElement &&
          !ve.webkitFullscreenElement &&
          (!cg ||
            SS !== Nt.innerWidth ||
            Math.abs(Nt.innerHeight - bS) > Nt.innerHeight * 0.25))) &&
        Dc.restart(!0);
  },
  Tl = {},
  pO = [],
  wS = function u() {
    return dn(Ht, "scrollEnd", u) || fl(!0);
  },
  Cl = function (n) {
    return (
      (Tl[n] &&
        Tl[n].map(function (a) {
          return a();
        })) ||
      pO
    );
  },
  _i = [],
  RS = function (n) {
    for (var a = 0; a < _i.length; a += 5)
      (!n || (_i[a + 4] && _i[a + 4].query === n)) &&
        ((_i[a].style.cssText = _i[a + 1]),
        _i[a].getBBox && _i[a].setAttribute("transform", _i[a + 2] || ""),
        (_i[a + 3].uncache = 1));
  },
  pp = function (n, a) {
    var i;
    for (jn = 0; jn < Rt.length; jn++)
      (i = Rt[jn]),
        i && (!a || i._ctx === a) && (n ? i.kill(1) : i.revert(!0, !0));
    (zc = !0), a && RS(a), a || Cl("revert");
  },
  DS = function (n, a) {
    Bt.cache++,
      (a || !Vn) &&
        Bt.forEach(function (i) {
          return Bn(i) && i.cacheID++ && (i.rec = 0);
        }),
      vi(n) && (Nt.history.scrollRestoration = op = n);
  },
  Vn,
  yl = 0,
  uv,
  mO = function () {
    if (uv !== yl) {
      var n = (uv = yl);
      requestAnimationFrame(function () {
        return n === yl && fl(!0);
      });
    }
  },
  zS = function () {
    te.appendChild(Eu),
      (fp = (!Gn && Eu.offsetHeight) || Nt.innerHeight),
      te.removeChild(Eu);
  },
  sv = function (n) {
    return xo(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (a) {
      return (a.style.display = n ? "none" : "block");
    });
  },
  fl = function (n, a) {
    if (
      ((Si = ve.documentElement),
      (te = ve.body),
      (sp = [Nt, ve, Si, te]),
      Wi && !n && !zc)
    ) {
      hn(Ht, "scrollEnd", wS);
      return;
    }
    zS(),
      (Vn = Ht.isRefreshing = !0),
      Bt.forEach(function (l) {
        return Bn(l) && ++l.cacheID && (l.rec = l());
      });
    var i = Cl("refreshInit");
    _S && Ht.sort(),
      a || pp(),
      Bt.forEach(function (l) {
        Bn(l) && (l.smooth && (l.target.style.scrollBehavior = "auto"), l(0));
      }),
      Rt.slice(0).forEach(function (l) {
        return l.refresh();
      }),
      (zc = !1),
      Rt.forEach(function (l) {
        if (l._subPinOffset && l.pin) {
          var o = l.vars.horizontal ? "offsetWidth" : "offsetHeight",
            c = l.pin[o];
          l.revert(!0, 1), l.adjustPinSpacing(l.pin[o] - c), l.refresh();
        }
      }),
      (hg = 1),
      sv(!0),
      Rt.forEach(function (l) {
        var o = br(l.scroller, l._dir),
          c = l.vars.end === "max" || (l._endClamp && l.end > o),
          d = l._startClamp && l.start >= o;
        (c || d) &&
          l.setPositions(
            d ? o - 1 : l.start,
            c ? Math.max(d ? o : l.start + 1, o) : l.end,
            !0
          );
      }),
      sv(!1),
      (hg = 0),
      i.forEach(function (l) {
        return l && l.render && l.render(-1);
      }),
      Bt.forEach(function (l) {
        Bn(l) &&
          (l.smooth &&
            requestAnimationFrame(function () {
              return (l.target.style.scrollBehavior = "smooth");
            }),
          l.rec && l(l.rec));
      }),
      DS(op, 1),
      Dc.pause(),
      yl++,
      (Vn = 2),
      Ir(2),
      Rt.forEach(function (l) {
        return Bn(l.vars.onRefresh) && l.vars.onRefresh(l);
      }),
      (Vn = Ht.isRefreshing = !1),
      Cl("refresh");
  },
  pg = 0,
  pc = 1,
  so,
  Ir = function (n) {
    if (n === 2 || (!Vn && !zc)) {
      (Ht.isUpdating = !0), so && so.update(0);
      var a = Rt.length,
        i = zn(),
        l = i - w0 >= 50,
        o = a && Rt[0].scroll();
      if (
        ((pc = pg > o ? -1 : 1),
        Vn || (pg = o),
        l &&
          (Wi && !td && i - Wi > 200 && ((Wi = 0), Cl("scrollEnd")),
          (js = w0),
          (w0 = i)),
        pc < 0)
      ) {
        for (jn = a; jn-- > 0; ) Rt[jn] && Rt[jn].update(0, l);
        pc = 1;
      } else for (jn = 0; jn < a; jn++) Rt[jn] && Rt[jn].update(0, l);
      Ht.isUpdating = !1;
    }
    To = 0;
  },
  mg = [
    ES,
    OS,
    dp,
    cp,
    Qi + uo,
    Qi + ro,
    Qi + lo,
    Qi + ao,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  mc = mg.concat([
    pl,
    ml,
    "boxSizing",
    "max" + Uu,
    "max" + hp,
    "position",
    Qi,
    Fe,
    Fe + lo,
    Fe + ro,
    Fe + uo,
    Fe + ao,
  ]),
  yO = function (n, a, i) {
    Ou(i);
    var l = n._gsap;
    if (l.spacerIsNative) Ou(l.spacerState);
    else if (n._gsap.swappedIn) {
      var o = a.parentNode;
      o && (o.insertBefore(n, a), o.removeChild(a));
    }
    n._gsap.swappedIn = !1;
  },
  z0 = function (n, a, i, l) {
    if (!n._gsap.swappedIn) {
      for (var o = mg.length, c = a.style, d = n.style, p; o--; )
        (p = mg[o]), (c[p] = i[p]);
      (c.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (c.display = "inline-block"),
        (d[dp] = d[cp] = "auto"),
        (c.flexBasis = i.flexBasis || "auto"),
        (c.overflow = "visible"),
        (c.boxSizing = "border-box"),
        (c[pl] = Nc(n, Qn) + un),
        (c[ml] = Nc(n, sn) + un),
        (c[Fe] = d[Qi] = d[OS] = d[ES] = "0"),
        Ou(l),
        (d[pl] = d["max" + Uu] = i[pl]),
        (d[ml] = d["max" + hp] = i[ml]),
        (d[Fe] = i[Fe]),
        n.parentNode !== a &&
          (n.parentNode.insertBefore(a, n), a.appendChild(n)),
        (n._gsap.swappedIn = !0);
    }
  },
  _O = /([A-Z])/g,
  Ou = function (n) {
    if (n) {
      var a = n.t.style,
        i = n.length,
        l = 0,
        o,
        c;
      for ((n.t._gsap || ut.core.getCache(n.t)).uncache = 1; l < i; l += 2)
        (c = n[l + 1]),
          (o = n[l]),
          c
            ? (a[o] = c)
            : a[o] && a.removeProperty(o.replace(_O, "-$1").toLowerCase());
    }
  },
  tc = function (n) {
    for (var a = mc.length, i = n.style, l = [], o = 0; o < a; o++)
      l.push(mc[o], i[mc[o]]);
    return (l.t = n), l;
  },
  vO = function (n, a, i) {
    for (var l = [], o = n.length, c = i ? 8 : 0, d; c < o; c += 2)
      (d = n[c]), l.push(d, d in a ? a[d] : n[c + 1]);
    return (l.t = n.t), l;
  },
  yc = { left: 0, top: 0 },
  ov = function (n, a, i, l, o, c, d, p, g, m, y, b, S, C) {
    Bn(n) && (n = n(p)),
      vi(n) &&
        n.substr(0, 3) === "max" &&
        (n = b + (n.charAt(4) === "=" ? hc("0" + n.substr(3), i) : 0));
    var _ = S ? S.time() : 0,
      E,
      w,
      z;
    if ((S && S.seek(0), isNaN(n) || (n = +n), Qs(n)))
      S &&
        (n = ut.utils.mapRange(
          S.scrollTrigger.start,
          S.scrollTrigger.end,
          0,
          b,
          n
        )),
        d && gc(d, i, l, !0);
    else {
      Bn(a) && (a = a(p));
      var D = (n || "0").split(" "),
        R,
        O,
        k,
        N;
      (z = Wn(a, p) || te),
        (R = Kr(z) || {}),
        (!R || (!R.left && !R.top)) &&
          Zi(z).display === "none" &&
          ((N = z.style.display),
          (z.style.display = "block"),
          (R = Kr(z)),
          N ? (z.style.display = N) : z.style.removeProperty("display")),
        (O = hc(D[0], R[l.d])),
        (k = hc(D[1] || "0", i)),
        (n = R[l.p] - g[l.p] - m + O + o - k),
        d && gc(d, k, l, i - k < 20 || (d._isStart && k > 20)),
        (i -= i - k);
    }
    if ((C && ((p[C] = n || -0.001), n < 0 && (n = 0)), c)) {
      var Y = n + i,
        U = c._isStart;
      (E = "scroll" + l.d2),
        gc(
          c,
          Y,
          l,
          (U && Y > 20) ||
            (!U && (y ? Math.max(te[E], Si[E]) : c.parentNode[E]) <= Y + 1)
        ),
        y &&
          ((g = Kr(d)),
          y && (c.style[l.op.p] = g[l.op.p] - l.op.m - c._offset + un));
    }
    return (
      S &&
        z &&
        ((E = Kr(z)),
        S.seek(b),
        (w = Kr(z)),
        (S._caScrollDist = E[l.p] - w[l.p]),
        (n = (n / S._caScrollDist) * b)),
      S && S.seek(_),
      S ? n : Math.round(n)
    );
  },
  bO = /(webkit|moz|length|cssText|inset)/i,
  fv = function (n, a, i, l) {
    if (n.parentNode !== a) {
      var o = n.style,
        c,
        d;
      if (a === te) {
        (n._stOrig = o.cssText), (d = Zi(n));
        for (c in d)
          !+c &&
            !bO.test(c) &&
            d[c] &&
            typeof o[c] == "string" &&
            c !== "0" &&
            (o[c] = d[c]);
        (o.top = i), (o.left = l);
      } else o.cssText = n._stOrig;
      (ut.core.getCache(n).uncache = 1), a.appendChild(n);
    }
  },
  NS = function (n, a, i) {
    var l = a,
      o = l;
    return function (c) {
      var d = Math.round(n());
      return (
        d !== l &&
          d !== o &&
          Math.abs(d - l) > 3 &&
          Math.abs(d - o) > 3 &&
          ((c = d), i && i()),
        (o = l),
        (l = Math.round(c)),
        l
      );
    };
  },
  ec = function (n, a, i) {
    var l = {};
    (l[a.p] = "+=" + i), ut.set(n, l);
  },
  cv = function (n, a) {
    var i = Ya(n, a),
      l = "_scroll" + a.p2,
      o = function c(d, p, g, m, y) {
        var b = c.tween,
          S = p.onComplete,
          C = {};
        g = g || i();
        var _ = NS(i, g, function () {
          b.kill(), (c.tween = 0);
        });
        return (
          (y = (m && y) || 0),
          (m = m || d - g),
          b && b.kill(),
          (p[l] = d),
          (p.inherit = !1),
          (p.modifiers = C),
          (C[l] = function () {
            return _(g + m * b.ratio + y * b.ratio * b.ratio);
          }),
          (p.onUpdate = function () {
            Bt.cache++, c.tween && Ir();
          }),
          (p.onComplete = function () {
            (c.tween = 0), S && S.call(b);
          }),
          (b = c.tween = ut.to(n, p)),
          b
        );
      };
    return (
      (n[l] = i),
      (i.wheelHandler = function () {
        return o.tween && o.tween.kill() && (o.tween = 0);
      }),
      hn(n, "wheel", i.wheelHandler),
      Ht.isTouch && hn(n, "touchmove", i.wheelHandler),
      o
    );
  },
  Ht = (function () {
    function u(a, i) {
      hu ||
        u.register(ut) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        dg(this),
        this.init(a, i);
    }
    var n = u.prototype;
    return (
      (n.init = function (i, l) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Vs)
        ) {
          this.update = this.refresh = this.kill = pr;
          return;
        }
        i = rv(vi(i) || Qs(i) || i.nodeType ? { trigger: i } : i, Wf);
        var o = i,
          c = o.onUpdate,
          d = o.toggleClass,
          p = o.id,
          g = o.onToggle,
          m = o.onRefresh,
          y = o.scrub,
          b = o.trigger,
          S = o.pin,
          C = o.pinSpacing,
          _ = o.invalidateOnRefresh,
          E = o.anticipatePin,
          w = o.onScrubComplete,
          z = o.onSnapComplete,
          D = o.once,
          R = o.snap,
          O = o.pinReparent,
          k = o.pinSpacer,
          N = o.containerAnimation,
          Y = o.fastScrollEnd,
          U = o.preventOverlaps,
          x =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? Qn
              : sn,
          j = !y && y !== 0,
          Z = Wn(i.scroller || Nt),
          rt = ut.core.getCache(Z),
          ht = xl(Z),
          at =
            ("pinType" in i
              ? i.pinType
              : ka(Z, "pinType") || (ht && "fixed")) === "fixed",
          H = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          K = j && i.toggleActions.split(" "),
          et = "markers" in i ? i.markers : Wf.markers,
          ft = ht ? 0 : parseFloat(Zi(Z)["border" + x.p2 + Uu]) || 0,
          T = this,
          Q =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(T);
            },
          tt = fO(Z, ht, x),
          I = cO(Z, ht),
          it = 0,
          ct = 0,
          lt = 0,
          Tt = Ya(Z, x),
          St,
          Jt,
          ae,
          ze,
          Ye,
          Et,
          le,
          en,
          pn,
          $,
          nn,
          Se,
          En,
          Gt,
          mn,
          ai,
          Di,
          Ee,
          yn,
          Dt,
          Oe,
          ee,
          pe,
          ne,
          Ft,
          Qe,
          me,
          On,
          tr,
          Zn,
          Ar,
          Ot,
          lr,
          Ln,
          _n,
          li,
          ur,
          Er,
          ui;
        if (
          ((T._startClamp = T._endClamp = !1),
          (T._dir = x),
          (E *= 45),
          (T.scroller = Z),
          (T.scroll = N ? N.time.bind(N) : Tt),
          (ze = Tt()),
          (T.vars = i),
          (l = l || i.animation),
          "refreshPriority" in i &&
            ((_S = 1), i.refreshPriority === -9999 && (so = T)),
          (rt.tweenScroll = rt.tweenScroll || {
            top: cv(Z, sn),
            left: cv(Z, Qn),
          }),
          (T.tweenTo = St = rt.tweenScroll[x.p]),
          (T.scrubDuration = function (nt) {
            (lr = Qs(nt) && nt),
              lr
                ? Ot
                  ? Ot.duration(nt)
                  : (Ot = ut.to(l, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: lr,
                      paused: !0,
                      onComplete: function () {
                        return w && w(T);
                      },
                    }))
                : (Ot && Ot.progress(1).kill(), (Ot = 0));
          }),
          l &&
            ((l.vars.lazy = !1),
            (l._initted && !T.isReverted) ||
              (l.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                l.duration() &&
                l.render(0, !0, !0)),
            (T.animation = l.pause()),
            (l.scrollTrigger = T),
            T.scrubDuration(y),
            (Zn = 0),
            p || (p = l.vars.id)),
          R &&
            ((!sl(R) || R.push) && (R = { snapTo: R }),
            "scrollBehavior" in te.style &&
              ut.set(ht ? [te, Si] : Z, { scrollBehavior: "auto" }),
            Bt.forEach(function (nt) {
              return (
                Bn(nt) &&
                nt.target === (ht ? ve.scrollingElement || Si : Z) &&
                (nt.smooth = !1)
              );
            }),
            (ae = Bn(R.snapTo)
              ? R.snapTo
              : R.snapTo === "labels"
              ? hO(l)
              : R.snapTo === "labelsDirectional"
              ? gO(l)
              : R.directional !== !1
              ? function (nt, gt) {
                  return gp(R.snapTo)(nt, zn() - ct < 500 ? 0 : gt.direction);
                }
              : ut.utils.snap(R.snapTo)),
            (Ln = R.duration || { min: 0.1, max: 2 }),
            (Ln = sl(Ln) ? io(Ln.min, Ln.max) : io(Ln, Ln)),
            (_n = ut
              .delayedCall(R.delay || lr / 2 || 0.1, function () {
                var nt = Tt(),
                  gt = zn() - ct < 500,
                  dt = St.tween;
                if (
                  (gt || Math.abs(T.getVelocity()) < 10) &&
                  !dt &&
                  !td &&
                  it !== nt
                ) {
                  var bt = (nt - Et) / Gt,
                    Ze = l && !j ? l.totalProgress() : bt,
                    kt = gt ? 0 : ((Ze - Ar) / (zn() - js)) * 1e3 || 0,
                    xe = ut.utils.clamp(-bt, 1 - bt, (cu(kt / 2) * kt) / 0.185),
                    Ne = bt + (R.inertia === !1 ? 0 : xe),
                    ye,
                    $t,
                    qt = R,
                    vn = qt.onStart,
                    Wt = qt.onInterrupt,
                    jt = qt.onComplete;
                  if (
                    ((ye = ae(Ne, T)),
                    Qs(ye) || (ye = Ne),
                    ($t = Math.max(0, Math.round(Et + ye * Gt))),
                    nt <= le && nt >= Et && $t !== nt)
                  ) {
                    if (dt && !dt._initted && dt.data <= cu($t - nt)) return;
                    R.inertia === !1 && (xe = ye - bt),
                      St(
                        $t,
                        {
                          duration: Ln(
                            cu(
                              (Math.max(cu(Ne - Ze), cu(ye - Ze)) * 0.185) /
                                kt /
                                0.05 || 0
                            )
                          ),
                          ease: R.ease || "power3",
                          data: cu($t - nt),
                          onInterrupt: function () {
                            return _n.restart(!0) && Wt && Wt(T);
                          },
                          onComplete: function () {
                            T.update(),
                              (it = Tt()),
                              l &&
                                !j &&
                                (Ot
                                  ? Ot.resetTo(
                                      "totalProgress",
                                      ye,
                                      l._tTime / l._tDur
                                    )
                                  : l.progress(ye)),
                              (Zn = Ar =
                                l && !j ? l.totalProgress() : T.progress),
                              z && z(T),
                              jt && jt(T);
                          },
                        },
                        nt,
                        xe * Gt,
                        $t - nt - xe * Gt
                      ),
                      vn && vn(T, St.tween);
                  }
                } else T.isActive && it !== nt && _n.restart(!0);
              })
              .pause())),
          p && (gg[p] = T),
          (b = T.trigger = Wn(b || (S !== !0 && S))),
          (ui = b && b._gsap && b._gsap.stRevert),
          ui && (ui = ui(T)),
          (S = S === !0 ? b : Wn(S)),
          vi(d) && (d = { targets: b, className: d }),
          S &&
            (C === !1 ||
              C === Qi ||
              (C =
                !C &&
                S.parentNode &&
                S.parentNode.style &&
                Zi(S.parentNode).display === "flex"
                  ? !1
                  : Fe),
            (T.pin = S),
            (Jt = ut.core.getCache(S)),
            Jt.spacer
              ? (mn = Jt.pinState)
              : (k &&
                  ((k = Wn(k)),
                  k && !k.nodeType && (k = k.current || k.nativeElement),
                  (Jt.spacerIsNative = !!k),
                  k && (Jt.spacerState = tc(k))),
                (Jt.spacer = Ee = k || ve.createElement("div")),
                Ee.classList.add("pin-spacer"),
                p && Ee.classList.add("pin-spacer-" + p),
                (Jt.pinState = mn = tc(S))),
            i.force3D !== !1 && ut.set(S, { force3D: !0 }),
            (T.spacer = Ee = Jt.spacer),
            (tr = Zi(S)),
            (ne = tr[C + x.os2]),
            (Dt = ut.getProperty(S)),
            (Oe = ut.quickSetter(S, x.a, un)),
            z0(S, Ee, tr),
            (Di = tc(S))),
          et)
        ) {
          (Se = sl(et) ? rv(et, av) : av),
            ($ = If("scroller-start", p, Z, x, Se, 0)),
            (nn = If("scroller-end", p, Z, x, Se, 0, $)),
            (yn = $["offset" + x.op.d2]);
          var Or = Wn(ka(Z, "content") || Z);
          (en = this.markerStart = If("start", p, Or, x, Se, yn, 0, N)),
            (pn = this.markerEnd = If("end", p, Or, x, Se, yn, 0, N)),
            N && (Er = ut.quickSetter([en, pn], x.a, un)),
            !at &&
              !(Tr.length && ka(Z, "fixedMarkers") === !0) &&
              (dO(ht ? te : Z),
              ut.set([$, nn], { force3D: !0 }),
              (Qe = ut.quickSetter($, x.a, un)),
              (On = ut.quickSetter(nn, x.a, un)));
        }
        if (N) {
          var xt = N.vars.onUpdate,
            mt = N.vars.onUpdateParams;
          N.eventCallback("onUpdate", function () {
            T.update(0, 0, 1), xt && xt.apply(N, mt || []);
          });
        }
        if (
          ((T.previous = function () {
            return Rt[Rt.indexOf(T) - 1];
          }),
          (T.next = function () {
            return Rt[Rt.indexOf(T) + 1];
          }),
          (T.revert = function (nt, gt) {
            if (!gt) return T.kill(!0);
            var dt = nt !== !1 || !T.enabled,
              bt = Dn;
            dt !== T.isReverted &&
              (dt &&
                ((li = Math.max(Tt(), T.scroll.rec || 0)),
                (lt = T.progress),
                (ur = l && l.progress())),
              en &&
                [en, pn, $, nn].forEach(function (Ze) {
                  return (Ze.style.display = dt ? "none" : "block");
                }),
              dt && ((Dn = T), T.update(dt)),
              S &&
                (!O || !T.isActive) &&
                (dt ? yO(S, Ee, mn) : z0(S, Ee, Zi(S), Ft)),
              dt || T.update(dt),
              (Dn = bt),
              (T.isReverted = dt));
          }),
          (T.refresh = function (nt, gt, dt, bt) {
            if (!((Dn || !T.enabled) && !gt)) {
              if (S && nt && Wi) {
                hn(u, "scrollEnd", wS);
                return;
              }
              !Vn && Q && Q(T),
                (Dn = T),
                St.tween && !dt && (St.tween.kill(), (St.tween = 0)),
                Ot && Ot.pause(),
                _ &&
                  l &&
                  (l.revert({ kill: !1 }).invalidate(),
                  l.getChildren &&
                    l.getChildren(!0, !0, !1).forEach(function (Bi) {
                      return Bi.vars.immediateRender && Bi.render(0, !0, !0);
                    })),
                T.isReverted || T.revert(!0, !0),
                (T._subPinOffset = !1);
              var Ze = tt(),
                kt = I(),
                xe = N ? N.duration() : br(Z, x),
                Ne = Gt <= 0.01 || !Gt,
                ye = 0,
                $t = bt || 0,
                qt = sl(dt) ? dt.end : i.end,
                vn = i.endTrigger || b,
                Wt = sl(dt)
                  ? dt.start
                  : i.start || (i.start === 0 || !b ? 0 : S ? "0 0" : "0 100%"),
                jt = (T.pinnedContainer =
                  i.pinnedContainer && Wn(i.pinnedContainer, T)),
                si = (b && Math.max(0, Rt.indexOf(T))) || 0,
                Ke = si,
                be,
                Me,
                Mr,
                Xa,
                rn,
                qe,
                Hn,
                ia,
                zi,
                wr,
                oi,
                Ni,
                ra;
              for (
                et &&
                sl(dt) &&
                ((Ni = ut.getProperty($, x.p)), (ra = ut.getProperty(nn, x.p)));
                Ke-- > 0;

              )
                (qe = Rt[Ke]),
                  qe.end || qe.refresh(0, 1) || (Dn = T),
                  (Hn = qe.pin),
                  Hn &&
                    (Hn === b || Hn === S || Hn === jt) &&
                    !qe.isReverted &&
                    (wr || (wr = []), wr.unshift(qe), qe.revert(!0, !0)),
                  qe !== Rt[Ke] && (si--, Ke--);
              for (
                Bn(Wt) && (Wt = Wt(T)),
                  Wt = tv(Wt, "start", T),
                  Et =
                    ov(
                      Wt,
                      b,
                      Ze,
                      x,
                      Tt(),
                      en,
                      $,
                      T,
                      kt,
                      ft,
                      at,
                      xe,
                      N,
                      T._startClamp && "_startClamp"
                    ) || (S ? -0.001 : 0),
                  Bn(qt) && (qt = qt(T)),
                  vi(qt) &&
                    !qt.indexOf("+=") &&
                    (~qt.indexOf(" ")
                      ? (qt = (vi(Wt) ? Wt.split(" ")[0] : "") + qt)
                      : ((ye = hc(qt.substr(2), Ze)),
                        (qt = vi(Wt)
                          ? Wt
                          : (N
                              ? ut.utils.mapRange(
                                  0,
                                  N.duration(),
                                  N.scrollTrigger.start,
                                  N.scrollTrigger.end,
                                  Et
                                )
                              : Et) + ye),
                        (vn = b))),
                  qt = tv(qt, "end", T),
                  le =
                    Math.max(
                      Et,
                      ov(
                        qt || (vn ? "100% 0" : xe),
                        vn,
                        Ze,
                        x,
                        Tt() + ye,
                        pn,
                        nn,
                        T,
                        kt,
                        ft,
                        at,
                        xe,
                        N,
                        T._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  ye = 0,
                  Ke = si;
                Ke--;

              )
                (qe = Rt[Ke]),
                  (Hn = qe.pin),
                  Hn &&
                    qe.start - qe._pinPush <= Et &&
                    !N &&
                    qe.end > 0 &&
                    ((be =
                      qe.end -
                      (T._startClamp ? Math.max(0, qe.start) : qe.start)),
                    ((Hn === b && qe.start - qe._pinPush < Et) || Hn === jt) &&
                      isNaN(Wt) &&
                      (ye += be * (1 - qe.progress)),
                    Hn === S && ($t += be));
              if (
                ((Et += ye),
                (le += ye),
                T._startClamp && (T._startClamp += ye),
                T._endClamp &&
                  !Vn &&
                  ((T._endClamp = le || -0.001), (le = Math.min(le, br(Z, x)))),
                (Gt = le - Et || ((Et -= 0.01) && 0.001)),
                Ne &&
                  (lt = ut.utils.clamp(0, 1, ut.utils.normalize(Et, le, li))),
                (T._pinPush = $t),
                en &&
                  ye &&
                  ((be = {}),
                  (be[x.a] = "+=" + ye),
                  jt && (be[x.p] = "-=" + Tt()),
                  ut.set([en, pn], be)),
                S && !(hg && T.end >= br(Z, x)))
              )
                (be = Zi(S)),
                  (Xa = x === sn),
                  (Mr = Tt()),
                  (ee = parseFloat(Dt(x.a)) + $t),
                  !xe &&
                    le > 1 &&
                    ((oi = (ht ? ve.scrollingElement || Si : Z).style),
                    (oi = {
                      style: oi,
                      value: oi["overflow" + x.a.toUpperCase()],
                    }),
                    ht &&
                      Zi(te)["overflow" + x.a.toUpperCase()] !== "scroll" &&
                      (oi.style["overflow" + x.a.toUpperCase()] = "scroll")),
                  z0(S, Ee, be),
                  (Di = tc(S)),
                  (Me = Kr(S, !0)),
                  (ia = at && Ya(Z, Xa ? Qn : sn)()),
                  C
                    ? ((Ft = [C + x.os2, Gt + $t + un]),
                      (Ft.t = Ee),
                      (Ke = C === Fe ? Nc(S, x) + Gt + $t : 0),
                      Ke &&
                        (Ft.push(x.d, Ke + un),
                        Ee.style.flexBasis !== "auto" &&
                          (Ee.style.flexBasis = Ke + un)),
                      Ou(Ft),
                      jt &&
                        Rt.forEach(function (Bi) {
                          Bi.pin === jt &&
                            Bi.vars.pinSpacing !== !1 &&
                            (Bi._subPinOffset = !0);
                        }),
                      at && Tt(li))
                    : ((Ke = Nc(S, x)),
                      Ke &&
                        Ee.style.flexBasis !== "auto" &&
                        (Ee.style.flexBasis = Ke + un)),
                  at &&
                    ((rn = {
                      top: Me.top + (Xa ? Mr - Et : ia) + un,
                      left: Me.left + (Xa ? ia : Mr - Et) + un,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (rn[pl] = rn["max" + Uu] = Math.ceil(Me.width) + un),
                    (rn[ml] = rn["max" + hp] = Math.ceil(Me.height) + un),
                    (rn[Qi] =
                      rn[Qi + lo] =
                      rn[Qi + ro] =
                      rn[Qi + uo] =
                      rn[Qi + ao] =
                        "0"),
                    (rn[Fe] = be[Fe]),
                    (rn[Fe + lo] = be[Fe + lo]),
                    (rn[Fe + ro] = be[Fe + ro]),
                    (rn[Fe + uo] = be[Fe + uo]),
                    (rn[Fe + ao] = be[Fe + ao]),
                    (ai = vO(mn, rn, O)),
                    Vn && Tt(0)),
                  l
                    ? ((zi = l._initted),
                      O0(1),
                      l.render(l.duration(), !0, !0),
                      (pe = Dt(x.a) - ee + Gt + $t),
                      (me = Math.abs(Gt - pe) > 1),
                      at && me && ai.splice(ai.length - 2, 2),
                      l.render(0, !0, !0),
                      zi || l.invalidate(!0),
                      l.parent || l.totalTime(l.totalTime()),
                      O0(0))
                    : (pe = Gt),
                  oi &&
                    (oi.value
                      ? (oi.style["overflow" + x.a.toUpperCase()] = oi.value)
                      : oi.style.removeProperty("overflow-" + x.a));
              else if (b && Tt() && !N)
                for (Me = b.parentNode; Me && Me !== te; )
                  Me._pinOffset &&
                    ((Et -= Me._pinOffset), (le -= Me._pinOffset)),
                    (Me = Me.parentNode);
              wr &&
                wr.forEach(function (Bi) {
                  return Bi.revert(!1, !0);
                }),
                (T.start = Et),
                (T.end = le),
                (ze = Ye = Vn ? li : Tt()),
                !N && !Vn && (ze < li && Tt(li), (T.scroll.rec = 0)),
                T.revert(!1, !0),
                (ct = zn()),
                _n && ((it = -1), _n.restart(!0)),
                (Dn = 0),
                l &&
                  j &&
                  (l._initted || ur) &&
                  l.progress() !== ur &&
                  l.progress(ur || 0, !0).render(l.time(), !0, !0),
                (Ne || lt !== T.progress || N || _ || (l && !l._initted)) &&
                  (l &&
                    !j &&
                    (l._initted || lt || l.vars.immediateRender !== !1) &&
                    l.totalProgress(
                      N && Et < -0.001 && !lt
                        ? ut.utils.normalize(Et, le, 0)
                        : lt,
                      !0
                    ),
                  (T.progress = Ne || (ze - Et) / Gt === lt ? 0 : lt)),
                S && C && (Ee._pinOffset = Math.round(T.progress * pe)),
                Ot && Ot.invalidate(),
                isNaN(Ni) ||
                  ((Ni -= ut.getProperty($, x.p)),
                  (ra -= ut.getProperty(nn, x.p)),
                  ec($, x, Ni),
                  ec(en, x, Ni - (bt || 0)),
                  ec(nn, x, ra),
                  ec(pn, x, ra - (bt || 0))),
                Ne && !Vn && T.update(),
                m && !Vn && !En && ((En = !0), m(T), (En = !1));
            }
          }),
          (T.getVelocity = function () {
            return ((Tt() - Ye) / (zn() - js)) * 1e3 || 0;
          }),
          (T.endAnimation = function () {
            Ls(T.callbackAnimation),
              l &&
                (Ot
                  ? Ot.progress(1)
                  : l.paused()
                  ? j || Ls(l, T.direction < 0, 1)
                  : Ls(l, l.reversed()));
          }),
          (T.labelToScroll = function (nt) {
            return (
              (l &&
                l.labels &&
                (Et || T.refresh() || Et) +
                  (l.labels[nt] / l.duration()) * Gt) ||
              0
            );
          }),
          (T.getTrailing = function (nt) {
            var gt = Rt.indexOf(T),
              dt =
                T.direction > 0 ? Rt.slice(0, gt).reverse() : Rt.slice(gt + 1);
            return (
              vi(nt)
                ? dt.filter(function (bt) {
                    return bt.vars.preventOverlaps === nt;
                  })
                : dt
            ).filter(function (bt) {
              return T.direction > 0 ? bt.end <= Et : bt.start >= le;
            });
          }),
          (T.update = function (nt, gt, dt) {
            if (!(N && !dt && !nt)) {
              var bt = Vn === !0 ? li : T.scroll(),
                Ze = nt ? 0 : (bt - Et) / Gt,
                kt = Ze < 0 ? 0 : Ze > 1 ? 1 : Ze || 0,
                xe = T.progress,
                Ne,
                ye,
                $t,
                qt,
                vn,
                Wt,
                jt,
                si;
              if (
                (gt &&
                  ((Ye = ze),
                  (ze = N ? Tt() : bt),
                  R && ((Ar = Zn), (Zn = l && !j ? l.totalProgress() : kt))),
                E &&
                  S &&
                  !Dn &&
                  !Kf &&
                  Wi &&
                  (!kt && Et < bt + ((bt - Ye) / (zn() - js)) * E
                    ? (kt = 1e-4)
                    : kt === 1 &&
                      le > bt + ((bt - Ye) / (zn() - js)) * E &&
                      (kt = 0.9999)),
                kt !== xe && T.enabled)
              ) {
                if (
                  ((Ne = T.isActive = !!kt && kt < 1),
                  (ye = !!xe && xe < 1),
                  (Wt = Ne !== ye),
                  (vn = Wt || !!kt != !!xe),
                  (T.direction = kt > xe ? 1 : -1),
                  (T.progress = kt),
                  vn &&
                    !Dn &&
                    (($t = kt && !xe ? 0 : kt === 1 ? 1 : xe === 1 ? 2 : 3),
                    j &&
                      ((qt =
                        (!Wt && K[$t + 1] !== "none" && K[$t + 1]) || K[$t]),
                      (si =
                        l &&
                        (qt === "complete" || qt === "reset" || qt in l)))),
                  U &&
                    (Wt || si) &&
                    (si || y || !l) &&
                    (Bn(U)
                      ? U(T)
                      : T.getTrailing(U).forEach(function (Mr) {
                          return Mr.endAnimation();
                        })),
                  j ||
                    (Ot && !Dn && !Kf
                      ? (Ot._dp._time - Ot._start !== Ot._time &&
                          Ot.render(Ot._dp._time - Ot._start),
                        Ot.resetTo
                          ? Ot.resetTo("totalProgress", kt, l._tTime / l._tDur)
                          : ((Ot.vars.totalProgress = kt),
                            Ot.invalidate().restart()))
                      : l && l.totalProgress(kt, !!(Dn && (ct || nt)))),
                  S)
                ) {
                  if ((nt && C && (Ee.style[C + x.os2] = ne), !at))
                    Oe($s(ee + pe * kt));
                  else if (vn) {
                    if (
                      ((jt =
                        !nt && kt > xe && le + 1 > bt && bt + 1 >= br(Z, x)),
                      O)
                    )
                      if (!nt && (Ne || jt)) {
                        var Ke = Kr(S, !0),
                          be = bt - Et;
                        fv(
                          S,
                          te,
                          Ke.top + (x === sn ? be : 0) + un,
                          Ke.left + (x === sn ? 0 : be) + un
                        );
                      } else fv(S, Ee);
                    Ou(Ne || jt ? ai : Di),
                      (me && kt < 1 && Ne) ||
                        Oe(ee + (kt === 1 && !jt ? pe : 0));
                  }
                }
                R && !St.tween && !Dn && !Kf && _n.restart(!0),
                  d &&
                    (Wt || (D && kt && (kt < 1 || !M0))) &&
                    xo(d.targets).forEach(function (Mr) {
                      return Mr.classList[Ne || D ? "add" : "remove"](
                        d.className
                      );
                    }),
                  c && !j && !nt && c(T),
                  vn && !Dn
                    ? (j &&
                        (si &&
                          (qt === "complete"
                            ? l.pause().totalProgress(1)
                            : qt === "reset"
                            ? l.restart(!0).pause()
                            : qt === "restart"
                            ? l.restart(!0)
                            : l[qt]()),
                        c && c(T)),
                      (Wt || !M0) &&
                        (g && Wt && R0(T, g),
                        H[$t] && R0(T, H[$t]),
                        D && (kt === 1 ? T.kill(!1, 1) : (H[$t] = 0)),
                        Wt || (($t = kt === 1 ? 1 : 3), H[$t] && R0(T, H[$t]))),
                      Y &&
                        !Ne &&
                        Math.abs(T.getVelocity()) > (Qs(Y) ? Y : 2500) &&
                        (Ls(T.callbackAnimation),
                        Ot
                          ? Ot.progress(1)
                          : Ls(l, qt === "reverse" ? 1 : !kt, 1)))
                    : j && c && !Dn && c(T);
              }
              if (On) {
                var Me = N ? (bt / N.duration()) * (N._caScrollDist || 0) : bt;
                Qe(Me + ($._isFlipped ? 1 : 0)), On(Me);
              }
              Er && Er((-bt / N.duration()) * (N._caScrollDist || 0));
            }
          }),
          (T.enable = function (nt, gt) {
            T.enabled ||
              ((T.enabled = !0),
              hn(Z, "resize", Zs),
              ht || hn(Z, "scroll", du),
              Q && hn(u, "refreshInit", Q),
              nt !== !1 && ((T.progress = lt = 0), (ze = Ye = it = Tt())),
              gt !== !1 && T.refresh());
          }),
          (T.getTween = function (nt) {
            return nt && St ? St.tween : Ot;
          }),
          (T.setPositions = function (nt, gt, dt, bt) {
            if (N) {
              var Ze = N.scrollTrigger,
                kt = N.duration(),
                xe = Ze.end - Ze.start;
              (nt = Ze.start + (xe * nt) / kt),
                (gt = Ze.start + (xe * gt) / kt);
            }
            T.refresh(
              !1,
              !1,
              {
                start: ev(nt, dt && !!T._startClamp),
                end: ev(gt, dt && !!T._endClamp),
              },
              bt
            ),
              T.update();
          }),
          (T.adjustPinSpacing = function (nt) {
            if (Ft && nt) {
              var gt = Ft.indexOf(x.d) + 1;
              (Ft[gt] = parseFloat(Ft[gt]) + nt + un),
                (Ft[1] = parseFloat(Ft[1]) + nt + un),
                Ou(Ft);
            }
          }),
          (T.disable = function (nt, gt) {
            if (
              T.enabled &&
              (nt !== !1 && T.revert(!0, !0),
              (T.enabled = T.isActive = !1),
              gt || (Ot && Ot.pause()),
              (li = 0),
              Jt && (Jt.uncache = 1),
              Q && dn(u, "refreshInit", Q),
              _n && (_n.pause(), St.tween && St.tween.kill() && (St.tween = 0)),
              !ht)
            ) {
              for (var dt = Rt.length; dt--; )
                if (Rt[dt].scroller === Z && Rt[dt] !== T) return;
              dn(Z, "resize", Zs), ht || dn(Z, "scroll", du);
            }
          }),
          (T.kill = function (nt, gt) {
            T.disable(nt, gt), Ot && !gt && Ot.kill(), p && delete gg[p];
            var dt = Rt.indexOf(T);
            dt >= 0 && Rt.splice(dt, 1),
              dt === jn && pc > 0 && jn--,
              (dt = 0),
              Rt.forEach(function (bt) {
                return bt.scroller === T.scroller && (dt = 1);
              }),
              dt || Vn || (T.scroll.rec = 0),
              l &&
                ((l.scrollTrigger = null),
                nt && l.revert({ kill: !1 }),
                gt || l.kill()),
              en &&
                [en, pn, $, nn].forEach(function (bt) {
                  return bt.parentNode && bt.parentNode.removeChild(bt);
                }),
              so === T && (so = 0),
              S &&
                (Jt && (Jt.uncache = 1),
                (dt = 0),
                Rt.forEach(function (bt) {
                  return bt.pin === S && dt++;
                }),
                dt || (Jt.spacer = 0)),
              i.onKill && i.onKill(T);
          }),
          Rt.push(T),
          T.enable(!1, !1),
          ui && ui(T),
          l && l.add && !Gt)
        ) {
          var Mt = T.update;
          (T.update = function () {
            (T.update = Mt), Bt.cache++, Et || le || T.refresh();
          }),
            ut.delayedCall(0.01, T.update),
            (Gt = 0.01),
            (Et = le = 0);
        } else T.refresh();
        S && mO();
      }),
      (u.register = function (i) {
        return (
          hu ||
            ((ut = i || TS()),
            xS() && window.document && u.enable(),
            (hu = Vs)),
          hu
        );
      }),
      (u.defaults = function (i) {
        if (i) for (var l in i) Wf[l] = i[l];
        return Wf;
      }),
      (u.disable = function (i, l) {
        (Vs = 0),
          Rt.forEach(function (c) {
            return c[l ? "kill" : "disable"](i);
          }),
          dn(Nt, "wheel", du),
          dn(ve, "scroll", du),
          clearInterval(Zf),
          dn(ve, "touchcancel", pr),
          dn(te, "touchstart", pr),
          Jf(dn, ve, "pointerdown,touchstart,mousedown", nv),
          Jf(dn, ve, "pointerup,touchend,mouseup", iv),
          Dc.kill(),
          Pf(dn);
        for (var o = 0; o < Bt.length; o += 3)
          Ff(dn, Bt[o], Bt[o + 1]), Ff(dn, Bt[o], Bt[o + 2]);
      }),
      (u.enable = function () {
        if (
          ((Nt = window),
          (ve = document),
          (Si = ve.documentElement),
          (te = ve.body),
          ut &&
            ((xo = ut.utils.toArray),
            (io = ut.utils.clamp),
            (dg = ut.core.context || pr),
            (O0 = ut.core.suppressOverwrites || pr),
            (op = Nt.history.scrollRestoration || "auto"),
            (pg = Nt.pageYOffset || 0),
            ut.core.globals("ScrollTrigger", u),
            te))
        ) {
          (Vs = 1),
            (Eu = document.createElement("div")),
            (Eu.style.height = "100vh"),
            (Eu.style.position = "absolute"),
            zS(),
            oO(),
            Ve.register(ut),
            (u.isTouch = Ve.isTouch),
            (Oa =
              Ve.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (cg = Ve.isTouch === 1),
            hn(Nt, "wheel", du),
            (sp = [Nt, ve, Si, te]),
            ut.matchMedia
              ? ((u.matchMedia = function (g) {
                  var m = ut.matchMedia(),
                    y;
                  for (y in g) m.add(y, g[y]);
                  return m;
                }),
                ut.addEventListener("matchMediaInit", function () {
                  return pp();
                }),
                ut.addEventListener("matchMediaRevert", function () {
                  return RS();
                }),
                ut.addEventListener("matchMedia", function () {
                  fl(0, 1), Cl("matchMedia");
                }),
                ut.matchMedia().add("(orientation: portrait)", function () {
                  return D0(), D0;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            D0(),
            hn(ve, "scroll", du);
          var i = te.hasAttribute("style"),
            l = te.style,
            o = l.borderTopStyle,
            c = ut.core.Animation.prototype,
            d,
            p;
          for (
            c.revert ||
              Object.defineProperty(c, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              l.borderTopStyle = "solid",
              d = Kr(te),
              sn.m = Math.round(d.top + sn.sc()) || 0,
              Qn.m = Math.round(d.left + Qn.sc()) || 0,
              o ? (l.borderTopStyle = o) : l.removeProperty("border-top-style"),
              i || (te.setAttribute("style", ""), te.removeAttribute("style")),
              Zf = setInterval(lv, 250),
              ut.delayedCall(0.5, function () {
                return (Kf = 0);
              }),
              hn(ve, "touchcancel", pr),
              hn(te, "touchstart", pr),
              Jf(hn, ve, "pointerdown,touchstart,mousedown", nv),
              Jf(hn, ve, "pointerup,touchend,mouseup", iv),
              fg = ut.utils.checkPrefix("transform"),
              mc.push(fg),
              hu = zn(),
              Dc = ut.delayedCall(0.2, fl).pause(),
              gu = [
                ve,
                "visibilitychange",
                function () {
                  var g = Nt.innerWidth,
                    m = Nt.innerHeight;
                  ve.hidden
                    ? ((W_ = g), (I_ = m))
                    : (W_ !== g || I_ !== m) && Zs();
                },
                ve,
                "DOMContentLoaded",
                fl,
                Nt,
                "load",
                fl,
                Nt,
                "resize",
                Zs,
              ],
              Pf(hn),
              Rt.forEach(function (g) {
                return g.enable(0, 1);
              }),
              p = 0;
            p < Bt.length;
            p += 3
          )
            Ff(dn, Bt[p], Bt[p + 1]), Ff(dn, Bt[p], Bt[p + 2]);
        }
      }),
      (u.config = function (i) {
        "limitCallbacks" in i && (M0 = !!i.limitCallbacks);
        var l = i.syncInterval;
        (l && clearInterval(Zf)) || ((Zf = l) && setInterval(lv, l)),
          "ignoreMobileResize" in i &&
            (cg = u.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (Pf(dn) || Pf(hn, i.autoRefreshEvents || "none"),
            (vS = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (u.scrollerProxy = function (i, l) {
        var o = Wn(i),
          c = Bt.indexOf(o),
          d = xl(o);
        ~c && Bt.splice(c, d ? 6 : 2),
          l && (d ? Tr.unshift(Nt, l, te, l, Si, l) : Tr.unshift(o, l));
      }),
      (u.clearMatchMedia = function (i) {
        Rt.forEach(function (l) {
          return l._ctx && l._ctx.query === i && l._ctx.kill(!0, !0);
        });
      }),
      (u.isInViewport = function (i, l, o) {
        var c = (vi(i) ? Wn(i) : i).getBoundingClientRect(),
          d = c[o ? pl : ml] * l || 0;
        return o
          ? c.right - d > 0 && c.left + d < Nt.innerWidth
          : c.bottom - d > 0 && c.top + d < Nt.innerHeight;
      }),
      (u.positionInViewport = function (i, l, o) {
        vi(i) && (i = Wn(i));
        var c = i.getBoundingClientRect(),
          d = c[o ? pl : ml],
          p =
            l == null
              ? d / 2
              : l in Bc
              ? Bc[l] * d
              : ~l.indexOf("%")
              ? (parseFloat(l) * d) / 100
              : parseFloat(l) || 0;
        return o ? (c.left + p) / Nt.innerWidth : (c.top + p) / Nt.innerHeight;
      }),
      (u.killAll = function (i) {
        if (
          (Rt.slice(0).forEach(function (o) {
            return o.vars.id !== "ScrollSmoother" && o.kill();
          }),
          i !== !0)
        ) {
          var l = Tl.killAll || [];
          (Tl = {}),
            l.forEach(function (o) {
              return o();
            });
        }
      }),
      u
    );
  })();
Ht.version = "3.13.0";
Ht.saveStyles = function (u) {
  return u
    ? xo(u).forEach(function (n) {
        if (n && n.style) {
          var a = _i.indexOf(n);
          a >= 0 && _i.splice(a, 5),
            _i.push(
              n,
              n.style.cssText,
              n.getBBox && n.getAttribute("transform"),
              ut.core.getCache(n),
              dg()
            );
        }
      })
    : _i;
};
Ht.revert = function (u, n) {
  return pp(!u, n);
};
Ht.create = function (u, n) {
  return new Ht(u, n);
};
Ht.refresh = function (u) {
  return u ? Zs(!0) : (hu || Ht.register()) && fl(!0);
};
Ht.update = function (u) {
  return ++Bt.cache && Ir(u === !0 ? 2 : 0);
};
Ht.clearScrollMemory = DS;
Ht.maxScroll = function (u, n) {
  return br(u, n ? Qn : sn);
};
Ht.getScrollFunc = function (u, n) {
  return Ya(Wn(u), n ? Qn : sn);
};
Ht.getById = function (u) {
  return gg[u];
};
Ht.getAll = function () {
  return Rt.filter(function (u) {
    return u.vars.id !== "ScrollSmoother";
  });
};
Ht.isScrolling = function () {
  return !!Wi;
};
Ht.snapDirectional = gp;
Ht.addEventListener = function (u, n) {
  var a = Tl[u] || (Tl[u] = []);
  ~a.indexOf(n) || a.push(n);
};
Ht.removeEventListener = function (u, n) {
  var a = Tl[u],
    i = a && a.indexOf(n);
  i >= 0 && a.splice(i, 1);
};
Ht.batch = function (u, n) {
  var a = [],
    i = {},
    l = n.interval || 0.016,
    o = n.batchMax || 1e9,
    c = function (g, m) {
      var y = [],
        b = [],
        S = ut
          .delayedCall(l, function () {
            m(y, b), (y = []), (b = []);
          })
          .pause();
      return function (C) {
        y.length || S.restart(!0),
          y.push(C.trigger),
          b.push(C),
          o <= y.length && S.progress(1);
      };
    },
    d;
  for (d in n)
    i[d] =
      d.substr(0, 2) === "on" && Bn(n[d]) && d !== "onRefreshInit"
        ? c(d, n[d])
        : n[d];
  return (
    Bn(o) &&
      ((o = o()),
      hn(Ht, "refresh", function () {
        return (o = n.batchMax());
      })),
    xo(u).forEach(function (p) {
      var g = {};
      for (d in i) g[d] = i[d];
      (g.trigger = p), a.push(Ht.create(g));
    }),
    a
  );
};
var dv = function (n, a, i, l) {
    return (
      a > l ? n(l) : a < 0 && n(0),
      i > l ? (l - a) / (i - a) : i < 0 ? a / (a - i) : 1
    );
  },
  N0 = function u(n, a) {
    a === !0
      ? n.style.removeProperty("touch-action")
      : (n.style.touchAction =
          a === !0
            ? "auto"
            : a
            ? "pan-" + a + (Ve.isTouch ? " pinch-zoom" : "")
            : "none"),
      n === Si && u(te, a);
  },
  nc = { auto: 1, scroll: 1 },
  SO = function (n) {
    var a = n.event,
      i = n.target,
      l = n.axis,
      o = (a.changedTouches ? a.changedTouches[0] : a).target,
      c = o._gsap || ut.core.getCache(o),
      d = zn(),
      p;
    if (!c._isScrollT || d - c._isScrollT > 2e3) {
      for (
        ;
        o &&
        o !== te &&
        ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
          !(nc[(p = Zi(o)).overflowY] || nc[p.overflowX]));

      )
        o = o.parentNode;
      (c._isScroll =
        o &&
        o !== i &&
        !xl(o) &&
        (nc[(p = Zi(o)).overflowY] || nc[p.overflowX])),
        (c._isScrollT = d);
    }
    (c._isScroll || l === "x") && (a.stopPropagation(), (a._gsapAllow = !0));
  },
  BS = function (n, a, i, l) {
    return Ve.create({
      target: n,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: a,
      onWheel: (l = l && SO),
      onPress: l,
      onDrag: l,
      onScroll: l,
      onEnable: function () {
        return i && hn(ve, Ve.eventTypes[0], gv, !1, !0);
      },
      onDisable: function () {
        return dn(ve, Ve.eventTypes[0], gv, !0);
      },
    });
  },
  xO = /(input|label|select|textarea)/i,
  hv,
  gv = function (n) {
    var a = xO.test(n.target.tagName);
    (a || hv) && ((n._gsapAllow = !0), (hv = a));
  },
  TO = function (n) {
    sl(n) || (n = {}),
      (n.preventDefault = n.isNormalizer = n.allowClicks = !0),
      n.type || (n.type = "wheel,touch"),
      (n.debounce = !!n.debounce),
      (n.id = n.id || "normalizer");
    var a = n,
      i = a.normalizeScrollX,
      l = a.momentum,
      o = a.allowNestedScroll,
      c = a.onRelease,
      d,
      p,
      g = Wn(n.target) || Si,
      m = ut.core.globals().ScrollSmoother,
      y = m && m.get(),
      b =
        Oa &&
        ((n.content && Wn(n.content)) ||
          (y && n.content !== !1 && !y.smooth() && y.content())),
      S = Ya(g, sn),
      C = Ya(g, Qn),
      _ = 1,
      E =
        (Ve.isTouch && Nt.visualViewport
          ? Nt.visualViewport.scale * Nt.visualViewport.width
          : Nt.outerWidth) / Nt.innerWidth,
      w = 0,
      z = Bn(l)
        ? function () {
            return l(d);
          }
        : function () {
            return l || 2.8;
          },
      D,
      R,
      O = BS(g, n.type, !0, o),
      k = function () {
        return (R = !1);
      },
      N = pr,
      Y = pr,
      U = function () {
        (p = br(g, sn)),
          (Y = io(Oa ? 1 : 0, p)),
          i && (N = io(0, br(g, Qn))),
          (D = yl);
      },
      x = function () {
        (b._gsap.y = $s(parseFloat(b._gsap.y) + S.offset) + "px"),
          (b.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(b._gsap.y) +
            ", 0, 1)"),
          (S.offset = S.cacheID = 0);
      },
      j = function () {
        if (R) {
          requestAnimationFrame(k);
          var et = $s(d.deltaY / 2),
            ft = Y(S.v - et);
          if (b && ft !== S.v + S.offset) {
            S.offset = ft - S.v;
            var T = $s((parseFloat(b && b._gsap.y) || 0) - S.offset);
            (b.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              T +
              ", 0, 1)"),
              (b._gsap.y = T + "px"),
              (S.cacheID = Bt.cache),
              Ir();
          }
          return !0;
        }
        S.offset && x(), (R = !0);
      },
      Z,
      rt,
      ht,
      at,
      H = function () {
        U(),
          Z.isActive() &&
            Z.vars.scrollY > p &&
            (S() > p ? Z.progress(1) && S(p) : Z.resetTo("scrollY", p));
      };
    return (
      b && ut.set(b, { y: "+=0" }),
      (n.ignoreCheck = function (K) {
        return (
          (Oa && K.type === "touchmove" && j()) ||
          (_ > 1.05 && K.type !== "touchstart") ||
          d.isGesturing ||
          (K.touches && K.touches.length > 1)
        );
      }),
      (n.onPress = function () {
        R = !1;
        var K = _;
        (_ = $s(((Nt.visualViewport && Nt.visualViewport.scale) || 1) / E)),
          Z.pause(),
          K !== _ && N0(g, _ > 1.01 ? !0 : i ? !1 : "x"),
          (rt = C()),
          (ht = S()),
          U(),
          (D = yl);
      }),
      (n.onRelease = n.onGestureStart =
        function (K, et) {
          if ((S.offset && x(), !et)) at.restart(!0);
          else {
            Bt.cache++;
            var ft = z(),
              T,
              Q;
            i &&
              ((T = C()),
              (Q = T + (ft * 0.05 * -K.velocityX) / 0.227),
              (ft *= dv(C, T, Q, br(g, Qn))),
              (Z.vars.scrollX = N(Q))),
              (T = S()),
              (Q = T + (ft * 0.05 * -K.velocityY) / 0.227),
              (ft *= dv(S, T, Q, br(g, sn))),
              (Z.vars.scrollY = Y(Q)),
              Z.invalidate().duration(ft).play(0.01),
              ((Oa && Z.vars.scrollY >= p) || T >= p - 1) &&
                ut.to({}, { onUpdate: H, duration: ft });
          }
          c && c(K);
        }),
      (n.onWheel = function () {
        Z._ts && Z.pause(), zn() - w > 1e3 && ((D = 0), (w = zn()));
      }),
      (n.onChange = function (K, et, ft, T, Q) {
        if (
          (yl !== D && U(),
          et &&
            i &&
            C(N(T[2] === et ? rt + (K.startX - K.x) : C() + et - T[1])),
          ft)
        ) {
          S.offset && x();
          var tt = Q[2] === ft,
            I = tt ? ht + K.startY - K.y : S() + ft - Q[1],
            it = Y(I);
          tt && I !== it && (ht += it - I), S(it);
        }
        (ft || et) && Ir();
      }),
      (n.onEnable = function () {
        N0(g, i ? !1 : "x"),
          Ht.addEventListener("refresh", H),
          hn(Nt, "resize", H),
          S.smooth &&
            ((S.target.style.scrollBehavior = "auto"),
            (S.smooth = C.smooth = !1)),
          O.enable();
      }),
      (n.onDisable = function () {
        N0(g, !0),
          dn(Nt, "resize", H),
          Ht.removeEventListener("refresh", H),
          O.kill();
      }),
      (n.lockAxis = n.lockAxis !== !1),
      (d = new Ve(n)),
      (d.iOS = Oa),
      Oa && !S() && S(1),
      Oa && ut.ticker.add(pr),
      (at = d._dc),
      (Z = ut.to(d, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: NS(S, S(), function () {
            return Z.pause();
          }),
        },
        onUpdate: Ir,
        onComplete: at.vars.onComplete,
      })),
      d
    );
  };
Ht.sort = function (u) {
  if (Bn(u)) return Rt.sort(u);
  var n = Nt.pageYOffset || 0;
  return (
    Ht.getAll().forEach(function (a) {
      return (a._sortY = a.trigger
        ? n + a.trigger.getBoundingClientRect().top
        : a.start + Nt.innerHeight);
    }),
    Rt.sort(
      u ||
        function (a, i) {
          return (
            (a.vars.refreshPriority || 0) * -1e6 +
            (a.vars.containerAnimation ? 1e6 : a._sortY) -
            ((i.vars.containerAnimation ? 1e6 : i._sortY) +
              (i.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
Ht.observe = function (u) {
  return new Ve(u);
};
Ht.normalizeScroll = function (u) {
  if (typeof u > "u") return Gn;
  if (u === !0 && Gn) return Gn.enable();
  if (u === !1) {
    Gn && Gn.kill(), (Gn = u);
    return;
  }
  var n = u instanceof Ve ? u : TO(u);
  return Gn && Gn.target === n.target && Gn.kill(), xl(n.target) && (Gn = n), n;
};
Ht.core = {
  _getVelocityProp: og,
  _inputObserver: BS,
  _scrollers: Bt,
  _proxies: Tr,
  bridge: {
    ss: function () {
      Wi || Cl("scrollStart"), (Wi = zn());
    },
    ref: function () {
      return Dn;
    },
  },
};
TS() && ut.registerPlugin(Ht);
/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var CO = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  AO = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  EO = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
  OO = /(^[#\.][a-z]|[a-y][a-z])/i,
  MO = Math.PI / 180,
  wO = 180 / Math.PI,
  ic = Math.sin,
  rc = Math.cos,
  Fi = Math.abs,
  Pr = Math.sqrt,
  RO = Math.atan2,
  yg = 1e8,
  pv = function (n) {
    return typeof n == "string";
  },
  kS = function (n) {
    return typeof n == "number";
  },
  DO = function (n) {
    return typeof n > "u";
  },
  zO = {},
  NO = {},
  kc = 1e5,
  US = function (n) {
    return Math.round(((n + yg) % 1) * kc) / kc || (n < 0 ? 0 : 1);
  },
  Pt = function (n) {
    return Math.round(n * kc) / kc || 0;
  },
  mv = function (n) {
    return Math.round(n * 1e10) / 1e10 || 0;
  },
  yv = function (n, a, i, l) {
    var o = n[a],
      c = l === 1 ? 6 : _g(o, i, l);
    if ((c || !l) && c + i + 2 < o.length)
      return n.splice(a, 0, o.slice(0, i + c + 2)), o.splice(0, i + c), 1;
  },
  LS = function (n, a, i) {
    var l = n.length,
      o = ~~(i * l);
    if (n[o] > a) {
      for (; --o && n[o] > a; );
      o < 0 && (o = 0);
    } else for (; n[++o] < a && o < l; );
    return o < l ? o : l - 1;
  },
  BO = function (n, a) {
    var i = n.length;
    for (n.reverse(); i--; ) n[i].reversed || LO(n[i]);
  },
  _v = function (n, a) {
    return (
      (a.totalLength = n.totalLength),
      n.samples
        ? ((a.samples = n.samples.slice(0)),
          (a.lookup = n.lookup.slice(0)),
          (a.minLength = n.minLength),
          (a.resolution = n.resolution))
        : n.totalPoints && (a.totalPoints = n.totalPoints),
      a
    );
  },
  kO = function (n, a) {
    var i = n.length,
      l = n[i - 1] || [],
      o = l.length;
    i &&
      a[0] === l[o - 2] &&
      a[1] === l[o - 1] &&
      ((a = l.concat(a.slice(2))), i--),
      (n[i] = a);
  };
function _c(u) {
  u = (pv(u) && OO.test(u) && document.querySelector(u)) || u;
  var n = u.getAttribute ? u : 0,
    a;
  return n && (u = u.getAttribute("d"))
    ? (n._gsPath || (n._gsPath = {}),
      (a = n._gsPath[u]),
      a && !a._dirty ? a : (n._gsPath[u] = Uc(u)))
    : u
    ? pv(u)
      ? Uc(u)
      : kS(u[0])
      ? [u]
      : u
    : console.warn("Expecting a <path> element or an SVG path data string");
}
function UO(u) {
  for (var n = [], a = 0; a < u.length; a++) n[a] = _v(u[a], u[a].slice(0));
  return _v(u, n);
}
function LO(u) {
  var n = 0,
    a;
  for (u.reverse(); n < u.length; n += 2)
    (a = u[n]), (u[n] = u[n + 1]), (u[n + 1] = a);
  u.reversed = !u.reversed;
}
var HO = function (n, a) {
    var i = document.createElementNS("http://www.w3.org/2000/svg", "path"),
      l = [].slice.call(n.attributes),
      o = l.length,
      c;
    for (a = "," + a + ","; --o > -1; )
      (c = l[o].nodeName.toLowerCase()),
        a.indexOf("," + c + ",") < 0 &&
          i.setAttributeNS(null, c, l[o].nodeValue);
    return i;
  },
  YO = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2",
  },
  qO = function (n, a) {
    for (var i = a ? a.split(",") : [], l = {}, o = i.length; --o > -1; )
      l[i[o]] = +n.getAttribute(i[o]) || 0;
    return l;
  };
function XO(u, n) {
  var a = u.tagName.toLowerCase(),
    i = 0.552284749831,
    l,
    o,
    c,
    d,
    p,
    g,
    m,
    y,
    b,
    S,
    C,
    _,
    E,
    w,
    z,
    D,
    R,
    O,
    k,
    N,
    Y,
    U;
  return a === "path" || !u.getBBox
    ? u
    : ((g = HO(u, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
      (U = qO(u, YO[a])),
      a === "rect"
        ? ((d = U.rx),
          (p = U.ry || d),
          (o = U.x),
          (c = U.y),
          (S = U.width - d * 2),
          (C = U.height - p * 2),
          d || p
            ? ((_ = o + d * (1 - i)),
              (E = o + d),
              (w = E + S),
              (z = w + d * i),
              (D = w + d),
              (R = c + p * (1 - i)),
              (O = c + p),
              (k = O + C),
              (N = k + p * i),
              (Y = k + p),
              (l =
                "M" +
                D +
                "," +
                O +
                " V" +
                k +
                " C" +
                [
                  D,
                  N,
                  z,
                  Y,
                  w,
                  Y,
                  w - (w - E) / 3,
                  Y,
                  E + (w - E) / 3,
                  Y,
                  E,
                  Y,
                  _,
                  Y,
                  o,
                  N,
                  o,
                  k,
                  o,
                  k - (k - O) / 3,
                  o,
                  O + (k - O) / 3,
                  o,
                  O,
                  o,
                  R,
                  _,
                  c,
                  E,
                  c,
                  E + (w - E) / 3,
                  c,
                  w - (w - E) / 3,
                  c,
                  w,
                  c,
                  z,
                  c,
                  D,
                  R,
                  D,
                  O,
                ].join(",") +
                "z"))
            : (l =
                "M" +
                (o + S) +
                "," +
                c +
                " v" +
                C +
                " h" +
                -S +
                " v" +
                -C +
                " h" +
                S +
                "z"))
        : a === "circle" || a === "ellipse"
        ? (a === "circle"
            ? ((d = p = U.r), (y = d * i))
            : ((d = U.rx), (p = U.ry), (y = p * i)),
          (o = U.cx),
          (c = U.cy),
          (m = d * i),
          (l =
            "M" +
            (o + d) +
            "," +
            c +
            " C" +
            [
              o + d,
              c + y,
              o + m,
              c + p,
              o,
              c + p,
              o - m,
              c + p,
              o - d,
              c + y,
              o - d,
              c,
              o - d,
              c - y,
              o - m,
              c - p,
              o,
              c - p,
              o + m,
              c - p,
              o + d,
              c - y,
              o + d,
              c,
            ].join(",") +
            "z"))
        : a === "line"
        ? (l = "M" + U.x1 + "," + U.y1 + " L" + U.x2 + "," + U.y2)
        : (a === "polyline" || a === "polygon") &&
          ((b = (u.getAttribute("points") + "").match(AO) || []),
          (o = b.shift()),
          (c = b.shift()),
          (l = "M" + o + "," + c + " L" + b.join(",")),
          a === "polygon" && (l += "," + o + "," + c + "z")),
      g.setAttribute("d", qS((g._gsRawPath = Uc(l)))),
      n &&
        u.parentNode &&
        (u.parentNode.insertBefore(g, u), u.parentNode.removeChild(u)),
      g);
}
function HS(u, n, a) {
  var i = u[n],
    l = u[n + 2],
    o = u[n + 4],
    c;
  return (
    (i += (l - i) * a),
    (l += (o - l) * a),
    (i += (l - i) * a),
    (c = l + (o + (u[n + 6] - o) * a - l) * a - i),
    (i = u[n + 1]),
    (l = u[n + 3]),
    (o = u[n + 5]),
    (i += (l - i) * a),
    (l += (o - l) * a),
    (i += (l - i) * a),
    Pt(RO(l + (o + (u[n + 7] - o) * a - l) * a - i, c) * wO)
  );
}
function YS(u, n, a) {
  (a = DO(a) ? 1 : mv(a) || 0), (n = mv(n) || 0);
  var i = Math.max(0, ~~(Fi(a - n) - 1e-8)),
    l = UO(u);
  if (
    (n > a && ((n = 1 - n), (a = 1 - a), BO(l), (l.totalLength = 0)),
    n < 0 || a < 0)
  ) {
    var o = Math.abs(~~Math.min(n, a)) + 1;
    (n += o), (a += o);
  }
  l.totalLength || _l(l);
  var c = a > 1,
    d = vv(l, n, zO, !0),
    p = vv(l, a, NO),
    g = p.segment,
    m = d.segment,
    y = p.segIndex,
    b = d.segIndex,
    S = p.i,
    C = d.i,
    _ = b === y,
    E = S === C && _,
    w,
    z,
    D,
    R,
    O,
    k,
    N,
    Y;
  if (c || i) {
    for (
      w = y < b || (_ && S < C) || (E && p.t < d.t),
        yv(l, b, C, d.t) &&
          (b++,
          w ||
            (y++,
            E ? ((p.t = (p.t - d.t) / (1 - d.t)), (S = 0)) : _ && (S -= C))),
        Math.abs(1 - (a - n)) < 1e-5
          ? (y = b - 1)
          : !p.t && y
          ? y--
          : yv(l, y, S, p.t) && w && b++,
        d.t === 1 && (b = (b + 1) % l.length),
        O = [],
        k = l.length,
        N = 1 + k * i,
        Y = b,
        N += (k - b + y) % k,
        R = 0;
      R < N;
      R++
    )
      kO(O, l[Y++ % k]);
    l = O;
  } else if (((D = p.t === 1 ? 6 : _g(g, S, p.t)), n !== a))
    for (
      z = _g(m, C, E ? d.t / p.t : d.t),
        _ && (D += z),
        g.splice(S + D + 2),
        (z || C) && m.splice(0, C + z),
        R = l.length;
      R--;

    )
      (R < b || R > y) && l.splice(R, 1);
  else
    (g.angle = HS(g, S + D, 0)),
      (S += D),
      (d = g[S]),
      (p = g[S + 1]),
      (g.length = g.totalLength = 0),
      (g.totalPoints = l.totalPoints = 8),
      g.push(d, p, d, p, d, p, d, p);
  return (l.totalLength = 0), l;
}
function GO(u, n, a) {
  (n = n || 0), u.samples || ((u.samples = []), (u.lookup = []));
  var i = ~~u.resolution || 12,
    l = 1 / i,
    o = u.length,
    c = u[n],
    d = u[n + 1],
    p = n ? (n / 6) * i : 0,
    g = u.samples,
    m = u.lookup,
    y = (n ? u.minLength : yg) || yg,
    b = g[p + a * i - 1],
    S = n ? g[p - 1] : 0,
    C,
    _,
    E,
    w,
    z,
    D,
    R,
    O,
    k,
    N,
    Y,
    U,
    x,
    j,
    Z,
    rt,
    ht;
  for (g.length = m.length = 0, _ = n + 2; _ < o; _ += 6) {
    if (
      ((E = u[_ + 4] - c),
      (w = u[_ + 2] - c),
      (z = u[_] - c),
      (O = u[_ + 5] - d),
      (k = u[_ + 3] - d),
      (N = u[_ + 1] - d),
      (D = R = Y = U = 0),
      Fi(E) < 0.01 && Fi(O) < 0.01 && Fi(z) + Fi(N) < 0.01)
    )
      u.length > 8 && (u.splice(_, 6), (_ -= 6), (o -= 6));
    else
      for (C = 1; C <= i; C++)
        (j = l * C),
          (x = 1 - j),
          (D = R - (R = (j * j * E + 3 * x * (j * w + x * z)) * j)),
          (Y = U - (U = (j * j * O + 3 * x * (j * k + x * N)) * j)),
          (rt = Pr(Y * Y + D * D)),
          rt < y && (y = rt),
          (S += rt),
          (g[p++] = S);
    (c += E), (d += O);
  }
  if (b) for (b -= S; p < g.length; p++) g[p] += b;
  if (g.length && y) {
    if (
      ((u.totalLength = ht = g[g.length - 1] || 0),
      (u.minLength = y),
      ht / y < 9999)
    )
      for (rt = Z = 0, C = 0; C < ht; C += y) m[rt++] = g[Z] < C ? ++Z : Z;
  } else u.totalLength = g[0] = 0;
  return n ? S - g[n / 2 - 1] : S;
}
function _l(u, n) {
  var a, i, l;
  for (l = a = i = 0; l < u.length; l++)
    (u[l].resolution = ~~n || 12), (i += u[l].length), (a += GO(u[l]));
  return (u.totalPoints = i), (u.totalLength = a), u;
}
function _g(u, n, a) {
  if (a <= 0 || a >= 1) return 0;
  var i = u[n],
    l = u[n + 1],
    o = u[n + 2],
    c = u[n + 3],
    d = u[n + 4],
    p = u[n + 5],
    g = u[n + 6],
    m = u[n + 7],
    y = i + (o - i) * a,
    b = o + (d - o) * a,
    S = l + (c - l) * a,
    C = c + (p - c) * a,
    _ = y + (b - y) * a,
    E = S + (C - S) * a,
    w = d + (g - d) * a,
    z = p + (m - p) * a;
  return (
    (b += (w - b) * a),
    (C += (z - C) * a),
    u.splice(
      n + 2,
      4,
      Pt(y),
      Pt(S),
      Pt(_),
      Pt(E),
      Pt(_ + (b - _) * a),
      Pt(E + (C - E) * a),
      Pt(b),
      Pt(C),
      Pt(w),
      Pt(z)
    ),
    u.samples &&
      u.samples.splice(((n / 6) * u.resolution) | 0, 0, 0, 0, 0, 0, 0, 0),
    6
  );
}
function vv(u, n, a, i) {
  (a = a || {}), u.totalLength || _l(u), (n < 0 || n > 1) && (n = US(n));
  var l = 0,
    o = u[0],
    c,
    d,
    p,
    g,
    m,
    y,
    b;
  if (!n) (b = y = l = 0), (o = u[0]);
  else if (n === 1) (b = 1), (l = u.length - 1), (o = u[l]), (y = o.length - 8);
  else {
    if (u.length > 1) {
      for (p = u.totalLength * n, m = y = 0; (m += u[y++].totalLength) < p; )
        l = y;
      (o = u[l]), (g = m - o.totalLength), (n = (p - g) / (m - g) || 0);
    }
    (c = o.samples),
      (d = o.resolution),
      (p = o.totalLength * n),
      (y = o.lookup.length ? o.lookup[~~(p / o.minLength)] || 0 : LS(c, p, n)),
      (g = y ? c[y - 1] : 0),
      (m = c[y]),
      m < p && ((g = m), (m = c[++y])),
      (b = (1 / d) * ((p - g) / (m - g) + (y % d))),
      (y = ~~(y / d) * 6),
      i &&
        b === 1 &&
        (y + 6 < o.length
          ? ((y += 6), (b = 0))
          : l + 1 < u.length && ((y = b = 0), (o = u[++l])));
  }
  return (
    (a.t = b), (a.i = y), (a.path = u), (a.segment = o), (a.segIndex = l), a
  );
}
function bv(u, n, a, i) {
  var l = u[0],
    o = i || {},
    c,
    d,
    p,
    g,
    m,
    y,
    b,
    S,
    C;
  if (((n < 0 || n > 1) && (n = US(n)), l.lookup || _l(u), u.length > 1)) {
    for (p = u.totalLength * n, m = y = 0; (m += u[y++].totalLength) < p; )
      l = u[y];
    (g = m - l.totalLength), (n = (p - g) / (m - g) || 0);
  }
  return (
    (c = l.samples),
    (d = l.resolution),
    (p = l.totalLength * n),
    (y = l.lookup.length
      ? l.lookup[n < 1 ? ~~(p / l.minLength) : l.lookup.length - 1] || 0
      : LS(c, p, n)),
    (g = y ? c[y - 1] : 0),
    (m = c[y]),
    m < p && ((g = m), (m = c[++y])),
    (b = (1 / d) * ((p - g) / (m - g) + (y % d)) || 0),
    (C = 1 - b),
    (y = ~~(y / d) * 6),
    (S = l[y]),
    (o.x = Pt(
      (b * b * (l[y + 6] - S) +
        3 * C * (b * (l[y + 4] - S) + C * (l[y + 2] - S))) *
        b +
        S
    )),
    (o.y = Pt(
      (b * b * (l[y + 7] - (S = l[y + 1])) +
        3 * C * (b * (l[y + 5] - S) + C * (l[y + 3] - S))) *
        b +
        S
    )),
    a &&
      (o.angle = l.totalLength
        ? HS(l, y, b >= 1 ? 1 - 1e-9 : b || 1e-9)
        : l.angle || 0),
    o
  );
}
function Ks(u, n, a, i, l, o, c) {
  for (var d = u.length, p, g, m, y, b; --d > -1; )
    for (p = u[d], g = p.length, m = 0; m < g; m += 2)
      (y = p[m]),
        (b = p[m + 1]),
        (p[m] = y * n + b * i + o),
        (p[m + 1] = y * a + b * l + c);
  return (u._dirty = 1), u;
}
function jO(u, n, a, i, l, o, c, d, p) {
  if (!(u === d && n === p)) {
    (a = Fi(a)), (i = Fi(i));
    var g = (l % 360) * MO,
      m = rc(g),
      y = ic(g),
      b = Math.PI,
      S = b * 2,
      C = (u - d) / 2,
      _ = (n - p) / 2,
      E = m * C + y * _,
      w = -y * C + m * _,
      z = E * E,
      D = w * w,
      R = z / (a * a) + D / (i * i);
    R > 1 && ((a = Pr(R) * a), (i = Pr(R) * i));
    var O = a * a,
      k = i * i,
      N = (O * k - O * D - k * z) / (O * D + k * z);
    N < 0 && (N = 0);
    var Y = (o === c ? -1 : 1) * Pr(N),
      U = Y * ((a * w) / i),
      x = Y * -((i * E) / a),
      j = (u + d) / 2,
      Z = (n + p) / 2,
      rt = j + (m * U - y * x),
      ht = Z + (y * U + m * x),
      at = (E - U) / a,
      H = (w - x) / i,
      K = (-E - U) / a,
      et = (-w - x) / i,
      ft = at * at + H * H,
      T = (H < 0 ? -1 : 1) * Math.acos(at / Pr(ft)),
      Q =
        (at * et - H * K < 0 ? -1 : 1) *
        Math.acos((at * K + H * et) / Pr(ft * (K * K + et * et)));
    isNaN(Q) && (Q = b),
      !c && Q > 0 ? (Q -= S) : c && Q < 0 && (Q += S),
      (T %= S),
      (Q %= S);
    var tt = Math.ceil(Fi(Q) / (S / 4)),
      I = [],
      it = Q / tt,
      ct = ((4 / 3) * ic(it / 2)) / (1 + rc(it / 2)),
      lt = m * a,
      Tt = y * a,
      St = y * -i,
      Jt = m * i,
      ae;
    for (ae = 0; ae < tt; ae++)
      (l = T + ae * it),
        (E = rc(l)),
        (w = ic(l)),
        (at = rc((l += it))),
        (H = ic(l)),
        I.push(E - ct * w, w + ct * E, at + ct * H, H - ct * at, at, H);
    for (ae = 0; ae < I.length; ae += 2)
      (E = I[ae]),
        (w = I[ae + 1]),
        (I[ae] = E * lt + w * St + rt),
        (I[ae + 1] = E * Tt + w * Jt + ht);
    return (I[ae - 2] = d), (I[ae - 1] = p), I;
  }
}
function Uc(u) {
  var n =
      (u + "")
        .replace(EO, function (U) {
          var x = +U;
          return x < 1e-4 && x > -1e-4 ? 0 : x;
        })
        .match(CO) || [],
    a = [],
    i = 0,
    l = 0,
    o = 2 / 3,
    c = n.length,
    d = 0,
    p = "ERROR: malformed path: " + u,
    g,
    m,
    y,
    b,
    S,
    C,
    _,
    E,
    w,
    z,
    D,
    R,
    O,
    k,
    N,
    Y = function (x, j, Z, rt) {
      (z = (Z - x) / 3),
        (D = (rt - j) / 3),
        _.push(x + z, j + D, Z - z, rt - D, Z, rt);
    };
  if (!u || !isNaN(n[0]) || isNaN(n[1])) return console.log(p), a;
  for (g = 0; g < c; g++)
    if (
      ((O = S),
      isNaN(n[g]) ? ((S = n[g].toUpperCase()), (C = S !== n[g])) : g--,
      (y = +n[g + 1]),
      (b = +n[g + 2]),
      C && ((y += i), (b += l)),
      g || ((E = y), (w = b)),
      S === "M")
    )
      _ && (_.length < 8 ? (a.length -= 1) : (d += _.length)),
        (i = E = y),
        (l = w = b),
        (_ = [y, b]),
        a.push(_),
        (g += 2),
        (S = "L");
    else if (S === "C")
      _ || (_ = [0, 0]),
        C || (i = l = 0),
        _.push(
          y,
          b,
          i + n[g + 3] * 1,
          l + n[g + 4] * 1,
          (i += n[g + 5] * 1),
          (l += n[g + 6] * 1)
        ),
        (g += 6);
    else if (S === "S")
      (z = i),
        (D = l),
        (O === "C" || O === "S") &&
          ((z += i - _[_.length - 4]), (D += l - _[_.length - 3])),
        C || (i = l = 0),
        _.push(z, D, y, b, (i += n[g + 3] * 1), (l += n[g + 4] * 1)),
        (g += 4);
    else if (S === "Q")
      (z = i + (y - i) * o),
        (D = l + (b - l) * o),
        C || (i = l = 0),
        (i += n[g + 3] * 1),
        (l += n[g + 4] * 1),
        _.push(z, D, i + (y - i) * o, l + (b - l) * o, i, l),
        (g += 4);
    else if (S === "T")
      (z = i - _[_.length - 4]),
        (D = l - _[_.length - 3]),
        _.push(
          i + z,
          l + D,
          y + (i + z * 1.5 - y) * o,
          b + (l + D * 1.5 - b) * o,
          (i = y),
          (l = b)
        ),
        (g += 2);
    else if (S === "H") Y(i, l, (i = y), l), (g += 1);
    else if (S === "V") Y(i, l, i, (l = y + (C ? l - i : 0))), (g += 1);
    else if (S === "L" || S === "Z")
      S === "Z" && ((y = E), (b = w), (_.closed = !0)),
        (S === "L" || Fi(i - y) > 0.5 || Fi(l - b) > 0.5) &&
          (Y(i, l, y, b), S === "L" && (g += 2)),
        (i = y),
        (l = b);
    else if (S === "A") {
      if (
        ((k = n[g + 4]),
        (N = n[g + 5]),
        (z = n[g + 6]),
        (D = n[g + 7]),
        (m = 7),
        k.length > 1 &&
          (k.length < 3
            ? ((D = z), (z = N), m--)
            : ((D = N), (z = k.substr(2)), (m -= 2)),
          (N = k.charAt(1)),
          (k = k.charAt(0))),
        (R = jO(
          i,
          l,
          +n[g + 1],
          +n[g + 2],
          +n[g + 3],
          +k,
          +N,
          (C ? i : 0) + z * 1,
          (C ? l : 0) + D * 1
        )),
        (g += m),
        R)
      )
        for (m = 0; m < R.length; m++) _.push(R[m]);
      (i = _[_.length - 2]), (l = _[_.length - 1]);
    } else console.log(p);
  return (
    (g = _.length),
    g < 6
      ? (a.pop(), (g = 0))
      : _[0] === _[g - 2] && _[1] === _[g - 1] && (_.closed = !0),
    (a.totalPoints = d + g),
    a
  );
}
function VO(u, n) {
  n === void 0 && (n = 1);
  for (var a = u[0], i = 0, l = [a, i], o = 2; o < u.length; o += 2)
    l.push(a, i, u[o], (i = ((u[o] - a) * n) / 2), (a = u[o]), -i);
  return l;
}
function vg(u, n) {
  Fi(u[0] - u[2]) < 1e-4 && Fi(u[1] - u[3]) < 1e-4 && (u = u.slice(2));
  var a = u.length - 2,
    i = +u[0],
    l = +u[1],
    o = +u[2],
    c = +u[3],
    d = [i, l, i, l],
    p = o - i,
    g = c - l,
    m = Math.abs(u[a] - i) < 0.001 && Math.abs(u[a + 1] - l) < 0.001,
    y,
    b,
    S,
    C,
    _,
    E,
    w,
    z,
    D,
    R,
    O,
    k,
    N,
    Y,
    U;
  for (
    m &&
      (u.push(o, c),
      (o = i),
      (c = l),
      (i = u[a - 2]),
      (l = u[a - 1]),
      u.unshift(i, l),
      (a += 4)),
      n = n || n === 0 ? +n : 1,
      S = 2;
    S < a;
    S += 2
  )
    (y = i),
      (b = l),
      (i = o),
      (l = c),
      (o = +u[S + 2]),
      (c = +u[S + 3]),
      !(i === o && l === c) &&
        ((C = p),
        (_ = g),
        (p = o - i),
        (g = c - l),
        (E = Pr(C * C + _ * _)),
        (w = Pr(p * p + g * g)),
        (z = Pr(Math.pow(p / w + C / E, 2) + Math.pow(g / w + _ / E, 2))),
        (D = ((E + w) * n * 0.25) / z),
        (R = i - (i - y) * (E ? D / E : 0)),
        (O = i + (o - i) * (w ? D / w : 0)),
        (k = i - (R + (((O - R) * ((E * 3) / (E + w) + 0.5)) / 4 || 0))),
        (N = l - (l - b) * (E ? D / E : 0)),
        (Y = l + (c - l) * (w ? D / w : 0)),
        (U = l - (N + (((Y - N) * ((E * 3) / (E + w) + 0.5)) / 4 || 0))),
        (i !== y || l !== b) &&
          d.push(Pt(R + k), Pt(N + U), Pt(i), Pt(l), Pt(O + k), Pt(Y + U)));
  return (
    i !== o || l !== c || d.length < 4
      ? d.push(Pt(o), Pt(c), Pt(o), Pt(c))
      : (d.length -= 2),
    d.length === 2
      ? d.push(i, l, i, l, i, l)
      : m && (d.splice(0, 6), (d.length = d.length - 6)),
    d
  );
}
function qS(u) {
  kS(u[0]) && (u = [u]);
  var n = "",
    a = u.length,
    i,
    l,
    o,
    c;
  for (l = 0; l < a; l++) {
    for (
      c = u[l],
        n += "M" + Pt(c[0]) + "," + Pt(c[1]) + " C",
        i = c.length,
        o = 2;
      o < i;
      o++
    )
      n +=
        Pt(c[o++]) +
        "," +
        Pt(c[o++]) +
        " " +
        Pt(c[o++]) +
        "," +
        Pt(c[o++]) +
        " " +
        Pt(c[o++]) +
        "," +
        Pt(c[o]) +
        " ";
    c.closed && (n += "z");
  }
  return n;
}
/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Fr,
  vl,
  mp,
  ed,
  Ps,
  vc,
  Lc,
  oo,
  ar = "transform",
  bg = ar + "Origin",
  XS,
  GS = function (n) {
    var a = n.ownerDocument || n;
    for (
      !(ar in n.style) &&
      ("msTransform" in n.style) &&
      ((ar = "msTransform"), (bg = ar + "Origin"));
      a.parentNode && (a = a.parentNode);

    );
    if (((vl = window), (Lc = new Co()), a)) {
      (Fr = a),
        (mp = a.documentElement),
        (ed = a.body),
        (oo = Fr.createElementNS("http://www.w3.org/2000/svg", "g")),
        (oo.style.transform = "none");
      var i = a.createElement("div"),
        l = a.createElement("div"),
        o = a && (a.body || a.firstElementChild);
      o &&
        o.appendChild &&
        (o.appendChild(i),
        i.appendChild(l),
        i.setAttribute(
          "style",
          "position:static;transform:translate3d(0,0,1px)"
        ),
        (XS = l.offsetParent !== i),
        o.removeChild(i));
    }
    return a;
  },
  $O = function (n) {
    for (var a, i; n && n !== ed; )
      (i = n._gsap),
        i && i.uncache && i.get(n, "x"),
        i &&
          !i.scaleX &&
          !i.scaleY &&
          i.renderTransform &&
          ((i.scaleX = i.scaleY = 1e-4),
          i.renderTransform(1, i),
          a ? a.push(i) : (a = [i])),
        (n = n.parentNode);
    return a;
  },
  jS = [],
  VS = [],
  QO = function () {
    return vl.pageYOffset || Fr.scrollTop || mp.scrollTop || ed.scrollTop || 0;
  },
  ZO = function () {
    return (
      vl.pageXOffset || Fr.scrollLeft || mp.scrollLeft || ed.scrollLeft || 0
    );
  },
  yp = function (n) {
    return (
      n.ownerSVGElement || ((n.tagName + "").toLowerCase() === "svg" ? n : null)
    );
  },
  KO = function u(n) {
    if (vl.getComputedStyle(n).position === "fixed") return !0;
    if (((n = n.parentNode), n && n.nodeType === 1)) return u(n);
  },
  B0 = function u(n, a) {
    if (n.parentNode && (Fr || GS(n))) {
      var i = yp(n),
        l = i
          ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        o = i ? (a ? "rect" : "g") : "div",
        c = a !== 2 ? 0 : 100,
        d = a === 3 ? 100 : 0,
        p =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        g = Fr.createElementNS
          ? Fr.createElementNS(l.replace(/^https/, "http"), o)
          : Fr.createElement(o);
      return (
        a &&
          (i
            ? (vc || (vc = u(n)),
              g.setAttribute("width", 0.01),
              g.setAttribute("height", 0.01),
              g.setAttribute("transform", "translate(" + c + "," + d + ")"),
              vc.appendChild(g))
            : (Ps || ((Ps = u(n)), (Ps.style.cssText = p)),
              (g.style.cssText =
                p +
                "width:0.1px;height:0.1px;top:" +
                d +
                "px;left:" +
                c +
                "px"),
              Ps.appendChild(g))),
        g
      );
    }
    throw "Need document and parent.";
  },
  PO = function (n) {
    for (var a = new Co(), i = 0; i < n.numberOfItems; i++)
      a.multiply(n.getItem(i).matrix);
    return a;
  },
  JO = function (n) {
    var a = n.getCTM(),
      i;
    return (
      a ||
        ((i = n.style[ar]),
        (n.style[ar] = "none"),
        n.appendChild(oo),
        (a = oo.getCTM()),
        n.removeChild(oo),
        i
          ? (n.style[ar] = i)
          : n.style.removeProperty(
              ar.replace(/([A-Z])/g, "-$1").toLowerCase()
            )),
      a || Lc.clone()
    );
  },
  FO = function (n, a) {
    var i = yp(n),
      l = n === i,
      o = i ? jS : VS,
      c = n.parentNode,
      d =
        c && !i && c.shadowRoot && c.shadowRoot.appendChild ? c.shadowRoot : c,
      p,
      g,
      m,
      y,
      b,
      S;
    if (n === vl) return n;
    if (
      (o.length || o.push(B0(n, 1), B0(n, 2), B0(n, 3)), (p = i ? vc : Ps), i)
    )
      l
        ? ((m = JO(n)), (y = -m.e / m.a), (b = -m.f / m.d), (g = Lc))
        : n.getBBox
        ? ((m = n.getBBox()),
          (g = n.transform ? n.transform.baseVal : {}),
          (g = g.numberOfItems
            ? g.numberOfItems > 1
              ? PO(g)
              : g.getItem(0).matrix
            : Lc),
          (y = g.a * m.x + g.c * m.y),
          (b = g.b * m.x + g.d * m.y))
        : ((g = new Co()), (y = b = 0)),
        a && n.tagName.toLowerCase() === "g" && (y = b = 0),
        (l ? i : c).appendChild(p),
        p.setAttribute(
          "transform",
          "matrix(" +
            g.a +
            "," +
            g.b +
            "," +
            g.c +
            "," +
            g.d +
            "," +
            (g.e + y) +
            "," +
            (g.f + b) +
            ")"
        );
    else {
      if (((y = b = 0), XS))
        for (
          g = n.offsetParent, m = n;
          m && (m = m.parentNode) && m !== g && m.parentNode;

        )
          (vl.getComputedStyle(m)[ar] + "").length > 4 &&
            ((y = m.offsetLeft), (b = m.offsetTop), (m = 0));
      if (
        ((S = vl.getComputedStyle(n)),
        S.position !== "absolute" && S.position !== "fixed")
      )
        for (g = n.offsetParent; c && c !== g; )
          (y += c.scrollLeft || 0), (b += c.scrollTop || 0), (c = c.parentNode);
      (m = p.style),
        (m.top = n.offsetTop - b + "px"),
        (m.left = n.offsetLeft - y + "px"),
        (m[ar] = S[ar]),
        (m[bg] = S[bg]),
        (m.position = S.position === "fixed" ? "fixed" : "absolute"),
        d.appendChild(p);
    }
    return p;
  },
  k0 = function (n, a, i, l, o, c, d) {
    return (n.a = a), (n.b = i), (n.c = l), (n.d = o), (n.e = c), (n.f = d), n;
  },
  Co = (function () {
    function u(a, i, l, o, c, d) {
      a === void 0 && (a = 1),
        i === void 0 && (i = 0),
        l === void 0 && (l = 0),
        o === void 0 && (o = 1),
        c === void 0 && (c = 0),
        d === void 0 && (d = 0),
        k0(this, a, i, l, o, c, d);
    }
    var n = u.prototype;
    return (
      (n.inverse = function () {
        var i = this.a,
          l = this.b,
          o = this.c,
          c = this.d,
          d = this.e,
          p = this.f,
          g = i * c - l * o || 1e-10;
        return k0(
          this,
          c / g,
          -l / g,
          -o / g,
          i / g,
          (o * p - c * d) / g,
          -(i * p - l * d) / g
        );
      }),
      (n.multiply = function (i) {
        var l = this.a,
          o = this.b,
          c = this.c,
          d = this.d,
          p = this.e,
          g = this.f,
          m = i.a,
          y = i.c,
          b = i.b,
          S = i.d,
          C = i.e,
          _ = i.f;
        return k0(
          this,
          m * l + b * c,
          m * o + b * d,
          y * l + S * c,
          y * o + S * d,
          p + C * l + _ * c,
          g + C * o + _ * d
        );
      }),
      (n.clone = function () {
        return new u(this.a, this.b, this.c, this.d, this.e, this.f);
      }),
      (n.equals = function (i) {
        var l = this.a,
          o = this.b,
          c = this.c,
          d = this.d,
          p = this.e,
          g = this.f;
        return (
          l === i.a &&
          o === i.b &&
          c === i.c &&
          d === i.d &&
          p === i.e &&
          g === i.f
        );
      }),
      (n.apply = function (i, l) {
        l === void 0 && (l = {});
        var o = i.x,
          c = i.y,
          d = this.a,
          p = this.b,
          g = this.c,
          m = this.d,
          y = this.e,
          b = this.f;
        return (
          (l.x = o * d + c * g + y || 0), (l.y = o * p + c * m + b || 0), l
        );
      }),
      u
    );
  })();
function Mu(u, n, a, i) {
  if (!u || !u.parentNode || (Fr || GS(u)).documentElement === u)
    return new Co();
  var l = $O(u),
    o = yp(u),
    c = o ? jS : VS,
    d = FO(u, a),
    p = c[0].getBoundingClientRect(),
    g = c[1].getBoundingClientRect(),
    m = c[2].getBoundingClientRect(),
    y = d.parentNode,
    b = !i && KO(u),
    S = new Co(
      (g.left - p.left) / 100,
      (g.top - p.top) / 100,
      (m.left - p.left) / 100,
      (m.top - p.top) / 100,
      p.left + (b ? 0 : ZO()),
      p.top + (b ? 0 : QO())
    );
  if ((y.removeChild(d), l))
    for (p = l.length; p--; )
      (g = l[p]), (g.scaleX = g.scaleY = 0), g.renderTransform(1, g);
  return n ? S.inverse() : S;
}
/*!
 * MotionPathPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var WO = "x,translateX,left,marginLeft,xPercent".split(","),
  IO = "y,translateY,top,marginTop,yPercent".split(","),
  t5 = Math.PI / 180,
  Ki,
  $S,
  pu,
  Sg,
  U0,
  Sv,
  e5 = function () {
    return (
      Ki ||
      (typeof window < "u" && (Ki = window.gsap) && Ki.registerPlugin && Ki)
    );
  },
  Hs = function (n, a, i, l) {
    for (var o = a.length, c = l === 2 ? 0 : l, d = 0; d < o; d++)
      (n[c] = parseFloat(a[d][i])), l === 2 && (n[c + 1] = 0), (c += 2);
    return n;
  },
  vu = function (n, a, i) {
    return parseFloat(n._gsap.get(n, a, i || "px")) || 0;
  },
  QS = function (n) {
    var a = n[0],
      i = n[1],
      l;
    for (l = 2; l < n.length; l += 2) (a = n[l] += a), (i = n[l + 1] += i);
  },
  xv = function (n, a, i, l, o, c, d, p, g) {
    if (d.type === "cubic") a = [a];
    else {
      d.fromCurrent !== !1 && a.unshift(vu(i, l, p), o ? vu(i, o, g) : 0),
        d.relative && QS(a);
      var m = o ? vg : VO;
      a = [m(a, d.curviness)];
    }
    return (
      (a = c(ZS(a, i, d))),
      Hc(n, i, l, a, "x", p),
      o && Hc(n, i, o, a, "y", g),
      _l(a, d.resolution || (d.curviness === 0 ? 20 : 12))
    );
  },
  n5 = function (n) {
    return n;
  },
  i5 = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
  Tv = function (n, a, i) {
    var l = Mu(n),
      o = 0,
      c = 0,
      d;
    return (
      (n.tagName + "").toLowerCase() === "svg"
        ? ((d = n.viewBox.baseVal),
          d.width ||
            (d = {
              width: +n.getAttribute("width"),
              height: +n.getAttribute("height"),
            }))
        : (d = a && n.getBBox && n.getBBox()),
      a &&
        a !== "auto" &&
        ((o = a.push ? a[0] * (d ? d.width : n.offsetWidth || 0) : a.x),
        (c = a.push ? a[1] * (d ? d.height : n.offsetHeight || 0) : a.y)),
      i.apply(o || c ? l.apply({ x: o, y: c }) : { x: l.e, y: l.f })
    );
  },
  xg = function (n, a, i, l) {
    var o = Mu(n.parentNode, !0, !0),
      c = o.clone().multiply(Mu(a)),
      d = Tv(n, i, o),
      p = Tv(a, l, o),
      g = p.x,
      m = p.y,
      y;
    return (
      (c.e = c.f = 0),
      l === "auto" &&
        a.getTotalLength &&
        a.tagName.toLowerCase() === "path" &&
        ((y = a.getAttribute("d").match(i5) || []),
        (y = c.apply({ x: +y[0], y: +y[1] })),
        (g += y.x),
        (m += y.y)),
      y && ((y = c.apply(a.getBBox())), (g -= y.x), (m -= y.y)),
      (c.e = g - d.x),
      (c.f = m - d.y),
      c
    );
  },
  ZS = function (n, a, i) {
    var l = i.align,
      o = i.matrix,
      c = i.offsetX,
      d = i.offsetY,
      p = i.alignOrigin,
      g = n[0][0],
      m = n[0][1],
      y = vu(a, "x"),
      b = vu(a, "y"),
      S,
      C,
      _;
    return !n || !n.length
      ? _c("M0,0L0,0")
      : (l &&
          (l === "self" || (S = Sg(l)[0] || a) === a
            ? Ks(n, 1, 0, 0, 1, y - g, b - m)
            : (p && p[2] !== !1
                ? Ki.set(a, {
                    transformOrigin: p[0] * 100 + "% " + p[1] * 100 + "%",
                  })
                : (p = [vu(a, "xPercent") / -100, vu(a, "yPercent") / -100]),
              (C = xg(a, S, p, "auto")),
              (_ = C.apply({ x: g, y: m })),
              Ks(
                n,
                C.a,
                C.b,
                C.c,
                C.d,
                y + C.e - (_.x - C.e),
                b + C.f - (_.y - C.f)
              ))),
        o
          ? Ks(n, o.a, o.b, o.c, o.d, o.e, o.f)
          : (c || d) && Ks(n, 1, 0, 0, 1, c || 0, d || 0),
        n);
  },
  Hc = function (n, a, i, l, o, c) {
    var d = a._gsap,
      p = d.harness,
      g = p && p.aliases && p.aliases[i],
      m = g && g.indexOf(",") < 0 ? g : i,
      y = (n._pt = new $S(n._pt, a, m, 0, 0, n5, 0, d.set(a, m, n)));
    (y.u = pu(d.get(a, m, c)) || 0), (y.path = l), (y.pp = o), n._props.push(m);
  },
  r5 = function (n, a) {
    return function (i) {
      return n || a !== 1 ? YS(i, n, a) : i;
    };
  },
  KS = {
    version: "3.13.0",
    name: "motionPath",
    register: function (n, a, i) {
      (Ki = n),
        (pu = Ki.utils.getUnit),
        (Sg = Ki.utils.toArray),
        (U0 = Ki.core.getStyleSaver),
        (Sv = Ki.core.reverting || function () {}),
        ($S = i);
    },
    init: function (n, a, i) {
      if (!Ki)
        return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
      (!(typeof a == "object" && !a.style) || !a.path) && (a = { path: a });
      var l = [],
        o = a,
        c = o.path,
        d = o.autoRotate,
        p = o.unitX,
        g = o.unitY,
        m = o.x,
        y = o.y,
        b = c[0],
        S = r5(a.start, "end" in a ? a.end : 1),
        C,
        _;
      if (
        ((this.rawPaths = l),
        (this.target = n),
        (this.tween = i),
        (this.styles = U0 && U0(n, "transform")),
        (this.rotate = d || d === 0) &&
          ((this.rOffset = parseFloat(d) || 0),
          (this.radians = !!a.useRadians),
          (this.rProp = a.rotation || "rotation"),
          (this.rSet = n._gsap.set(n, this.rProp, this)),
          (this.ru = pu(n._gsap.get(n, this.rProp)) || 0)),
        Array.isArray(c) && !("closed" in c) && typeof b != "number")
      ) {
        for (_ in b)
          !m && ~WO.indexOf(_) ? (m = _) : !y && ~IO.indexOf(_) && (y = _);
        m && y
          ? l.push(
              xv(
                this,
                Hs(Hs([], c, m, 0), c, y, 1),
                n,
                m,
                y,
                S,
                a,
                p || pu(c[0][m]),
                g || pu(c[0][y])
              )
            )
          : (m = y = 0);
        for (_ in b)
          _ !== m &&
            _ !== y &&
            l.push(xv(this, Hs([], c, _, 2), n, _, 0, S, a, pu(c[0][_])));
      } else
        (C = S(ZS(_c(a.path), n, a))),
          _l(C, a.resolution),
          l.push(C),
          Hc(this, n, a.x || "x", C, "x", a.unitX || "px"),
          Hc(this, n, a.y || "y", C, "y", a.unitY || "px");
      i.vars.immediateRender && this.render(i.progress(), this);
    },
    render: function (n, a) {
      var i = a.rawPaths,
        l = i.length,
        o = a._pt;
      if (a.tween._time || !Sv()) {
        for (n > 1 ? (n = 1) : n < 0 && (n = 0); l--; )
          bv(i[l], n, !l && a.rotate, i[l]);
        for (; o; ) o.set(o.t, o.p, o.path[o.pp] + o.u, o.d, n), (o = o._next);
        a.rotate &&
          a.rSet(
            a.target,
            a.rProp,
            i[0].angle * (a.radians ? t5 : 1) + a.rOffset + a.ru,
            a,
            n
          );
      } else a.styles.revert();
    },
    getLength: function (n) {
      return _l(_c(n)).totalLength;
    },
    sliceRawPath: YS,
    getRawPath: _c,
    pointsToSegment: vg,
    stringToRawPath: Uc,
    rawPathToString: qS,
    transformRawPath: Ks,
    getGlobalMatrix: Mu,
    getPositionOnPath: bv,
    cacheRawPathMeasurements: _l,
    convertToPath: function (n, a) {
      return Sg(n).map(function (i) {
        return XO(i, a !== !1);
      });
    },
    convertCoordinates: function (n, a, i) {
      var l = Mu(a, !0, !0).multiply(Mu(n));
      return i ? l.apply(i) : l;
    },
    getAlignMatrix: xg,
    getRelativePosition: function (n, a, i, l) {
      var o = xg(n, a, i, l);
      return { x: o.e, y: o.f };
    },
    arrayToRawPath: function (n, a) {
      a = a || {};
      var i = Hs(Hs([], n, a.x || "x", 0), n, a.y || "y", 1);
      return a.relative && QS(i), [a.type === "cubic" ? i : vg(i, a.curviness)];
    },
  };
e5() && Ki.registerPlugin(KS);
fS.registerPlugin(Ht, KS);
const a5 = () => {
    const u = _0((i) => i.breakpoints.down("md")),
      n = _0((i) => i.breakpoints.up("xl")),
      a = _0((i) => i.breakpoints.up("md"));
    return At.jsxs(yi, {
      minHeight: { xs: "100vh", md: "100vh" },
      position: "relative",
      width: "100%",
      sx: { overflow: "hidden" },
      children: [
        At.jsx(yi, {
          component: "img",
          src: "/pic_4.png",
          sx: {
            position: "absolute",
            top: { xs: "25%", md: "32%", xl: "35%" },
            left: "50%",
            width: { xs: 350, md: 800, xl: 1500 },
            transform: "translateX(-50%)",
            zIndex: 5,
            transition: "0.5s",
            ":hover": { cursor: "pointer" },
          },
          onClick: async (i) => {
            try {
              await navigator.clipboard.writeText(
                "0x00000000000000000000000000000000000000"
              );
              const l = i.target;
              setTimeout(() => {
                (l.style.transform = "translateX(-50%) scale(1.25)"),
                  (l.style.transition = "transform 0.3s ease-out"),
                  setTimeout(() => {
                    (l.style.transform = "translateX(-50%) scale(1)"),
                      (l.style.transition = "transform 0.3s ease-out");
                  }, 300);
              }, 300);
            } catch {}
          },
        }),
        At.jsx(yi, {
          component: "a",
          href: "https://x.com/PickleCooking",
          target: "_blank",
          sx: {
            position: "absolute",
            bottom: { xs: "28%", md: "25%", lg: "25%", xl: "30%" },
            left: { xs: "59%", md: "11%", lg: "11%", xl: "10%" },
            zIndex: 2,
          },
          children: At.jsx(yi, {
            component: "img",
            src: "/pic_8.png",
            sx: {
              height: { xs: "80px", md: 110, xl: 220 },
              transform: { xs: "rotate(50deg)", md: "none" },
              transition: "0.5s",
              ":hover": { cursor: "pointer", transform: { md: "scale(1.2)" } },
            },
          }),
        }),
        At.jsx(yi, {
          component: "a",
          href: "https://t.me/PickleCooking",
          target: "_blank",
          sx: {
            position: "absolute",
            bottom: { xs: "21%", md: "14%", lg: "14%", xl: "20%" },
            left: {
              xs: "36%",
              md: (window.innerHeight > 730, "18%"),
              xl: "12%",
            },
            zIndex: 2,
          },
          children: At.jsx(yi, {
            component: "img",
            src: "/pic_5.png",
            sx: {
              transform: { xs: "rotate(50deg)", md: "none" },
              height: { xs: 100, md: 120, xl: 220 },
              transition: "0.5s",
              ":hover": { cursor: "pointer", transform: { md: "scale(1.2)" } },
            },
          }),
        }),
        At.jsx(yi, {
          component: "a",
          href: "https://dexscreener.com/ethereum/0x00000000000000000000000000000000000000",
          target: "_blank",
          sx: {
            position: "absolute",
            bottom: { xs: "13%", md: "5%", lg: "5%", xl: "10%" },
            left: {
              xs: "22%",
              md: window.innerHeight > 730 ? "29%" : "27%",
              xl: "23%",
            },
            zIndex: 2,
          },
          children: At.jsx(yi, {
            component: "img",
            src: "/pic_6.png",
            sx: {
              height: { xs: 110, md: 150, xl: 250 },
              transform: { xs: "rotate(50deg)", md: "none" },
              transition: "0.5s",
              ":hover": { cursor: "pointer", transform: { md: "scale(1.2)" } },
            },
          }),
        }),
        At.jsx(yi, {
          component: "a",
          href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",
          target: "_blank",
          sx: {
            position: "absolute",
            bottom: { xs: "4%", md: "1.5%", lg: "1.5%", xl: "2%" },
            left: {
              xs: "8%",
              md: window.innerHeight > 730 ? "47%" : "44%",
              xl: "40%",
            },
            zIndex: 2,
          },
          children: At.jsx(yi, {
            component: "img",
            src: "/pic_7.png",
            sx: {
              height: { xs: "120px", md: 160, xl: 380 },
              transform: { xs: "rotate(50deg)", md: "none" },
              transition: "0.5s",
              ":hover": { cursor: "pointer", transform: { md: "scale(1.2)" } },
            },
          }),
        }),
        u &&
          At.jsx(yi, {
            component: "img",
            src: "/rainbow_mobile.gif",
            sx: {
              height: "auto",
              width: "100%",
              display: { xs: "block", md: "none" },
            },
          }),
        a &&
          At.jsx(yi, {
            component: "img",
            src: "/c1440.gif",
            sx: {
              height: "auto",
              width: "100%",
              display: { xs: "none", md: "block", xl: "none" },
            },
          }),
        n &&
          At.jsx(yi, {
            component: "img",
            src: "/c2560.gif",
            sx: {
              width: "100%",
              display: { xs: "none", md: "none", xl: "block" },
            },
          }),
      ],
    });
  },
  l5 = () =>
    At.jsxs(BA, { theme: VA, children: [At.jsx(jA, {}), At.jsx(a5, {})] }),
  u5 = dT.createRoot(document.getElementById("root"));
u5.render(At.jsx(Av.StrictMode, { children: At.jsx(l5, {}) }));
