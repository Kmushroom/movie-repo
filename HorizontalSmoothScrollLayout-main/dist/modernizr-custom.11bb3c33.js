// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/seat/modernizr-custom.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransitions-preserve3d-prefixed-setclasses !*/
!function (e, n, t) {
  function r(e, n) {
    return _typeof(e) === n;
  }
  function o() {
    var e, n, t, o, s, i, a;
    for (var f in C) {
      if (C.hasOwnProperty(f)) {
        if (e = [], n = C[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) {
          e.push(n.options.aliases[t].toLowerCase());
        }
        for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) {
          i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), g.push((o ? "" : "no-") + a.join("-"));
        }
      }
    }
  }
  function s(e) {
    var n = w.className,
      t = Modernizr._config.classPrefix || "";
    if (x && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2");
    }
    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), x ? w.className.baseVal = n : w.className = n);
  }
  function i(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
      return n + t.toUpperCase();
    }).replace(/^-/, "");
  }
  function a(e, n) {
    return !!~("" + e).indexOf(n);
  }
  function f() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }
  function l(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }
  function u(e, n, t) {
    var o;
    for (var s in e) {
      if (e[s] in n) return t === !1 ? e[s] : (o = n[e[s]], r(o, "function") ? l(o, t || n) : o);
    }
    return !1;
  }
  function p(e) {
    return e.replace(/([A-Z])/g, function (e, n) {
      return "-" + n.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }
  function d() {
    var e = n.body;
    return e || (e = f(x ? "svg" : "body"), e.fake = !0), e;
  }
  function c(e, t, r, o) {
    var s,
      i,
      a,
      l,
      u = "modernizr",
      p = f("div"),
      c = d();
    if (parseInt(r, 10)) for (; r--;) {
      a = f("div"), a.id = o ? o[r] : u + (r + 1), p.appendChild(a);
    }
    return s = f("style"), s.type = "text/css", s.id = "s" + u, (c.fake ? c : p).appendChild(s), c.appendChild(p), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), p.id = u, c.fake && (c.style.background = "", c.style.overflow = "hidden", l = w.style.overflow, w.style.overflow = "hidden", w.appendChild(c)), i = t(p, e), c.fake ? (c.parentNode.removeChild(c), w.style.overflow = l, w.offsetHeight) : p.parentNode.removeChild(p), !!i;
  }
  function m(n, r) {
    var o = n.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) {
        if (e.CSS.supports(p(n[o]), r)) return !0;
      }
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var s = []; o--;) {
        s.push("(" + p(n[o]) + ":" + r + ")");
      }
      return s = s.join(" or "), c("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == getComputedStyle(e, null).position;
      });
    }
    return t;
  }
  function v(e, n, o, s) {
    function l() {
      p && (delete N.style, delete N.modElem);
    }
    if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) {
      var u = m(e, o);
      if (!r(u, "undefined")) return u;
    }
    for (var p, d, c, v, h, y = ["modernizr", "tspan"]; !N.style;) {
      p = !0, N.modElem = f(y.shift()), N.style = N.modElem.style;
    }
    for (c = e.length, d = 0; c > d; d++) {
      if (v = e[d], h = N.style[v], a(v, "-") && (v = i(v)), N.style[v] !== t) {
        if (s || r(o, "undefined")) return l(), "pfx" == n ? v : !0;
        try {
          N.style[v] = o;
        } catch (g) {}
        if (N.style[v] != h) return l(), "pfx" == n ? v : !0;
      }
    }
    return l(), !1;
  }
  function h(e, n, t, o, s) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + b.join(i + " ") + i).split(" ");
    return r(n, "string") || r(n, "undefined") ? v(a, n, o, s) : (a = (e + " " + P.join(i + " ") + i).split(" "), u(a, n, t));
  }
  function y(e, n, r) {
    return h(e, t, t, n, r);
  }
  var g = [],
    C = [],
    _ = {
      _version: "3.2.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function on(e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e]);
        }, 0);
      },
      addTest: function addTest(e, n, t) {
        C.push({
          name: e,
          fn: n,
          options: t
        });
      },
      addAsyncTest: function addAsyncTest(e) {
        C.push({
          name: null,
          fn: e
        });
      }
    },
    Modernizr = function Modernizr() {};
  Modernizr.prototype = _, Modernizr = new Modernizr();
  var w = n.documentElement,
    x = "svg" === w.nodeName.toLowerCase(),
    S = "Moz O ms Webkit",
    b = _._config.usePrefixes ? S.split(" ") : [];
  _._cssomPrefixes = b;
  var E = function E(n) {
    var r,
      o = prefixes.length,
      s = e.CSSRule;
    if ("undefined" == typeof s) return t;
    if (!n) return !1;
    if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in s) return "@" + n;
    for (var i = 0; o > i; i++) {
      var a = prefixes[i],
        f = a.toUpperCase() + "_" + r;
      if (f in s) return "@-" + a.toLowerCase() + "-" + n;
    }
    return !1;
  };
  _.atRule = E;
  var P = _._config.usePrefixes ? S.toLowerCase().split(" ") : [];
  _._domPrefixes = P;
  var z = {
    elem: f("modernizr")
  };
  Modernizr._q.push(function () {
    delete z.elem;
  });
  var N = {
    style: z.elem.style
  };
  Modernizr._q.unshift(function () {
    delete N.style;
  }), _.testAllProps = h;
  _.prefixed = function (e, n, t) {
    return 0 === e.indexOf("@") ? E(e) : (-1 != e.indexOf("-") && (e = i(e)), n ? h(e, n, t) : h(e, "pfx"));
  };
  _.testAllProps = y, Modernizr.addTest("csstransitions", y("transition", "all", !0)), Modernizr.addTest("preserve3d", y("transformStyle", "preserve-3d")), o(), s(g), delete _.addTest, delete _.addAsyncTest;
  for (var T = 0; T < Modernizr._q.length; T++) {
    Modernizr._q[T]();
  }
  e.Modernizr = Modernizr;
}(window, document);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58360" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/seat/modernizr-custom.js"], null)
//# sourceMappingURL=/modernizr-custom.11bb3c33.js.map