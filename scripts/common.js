function throttle(i, o, s, a) {
    var u, l = 0;
    return "boolean" != typeof o && (a = s, s = o, o = void 0),
        function() {
            var e = this,
                t = Number(new Date) - l,
                n = arguments;

            function r() {
                l = Number(new Date), s.apply(e, n)
            }
            a && !u && r(), u && clearTimeout(u), void 0 === a && i < t ? r() : !0 !== o && (u = setTimeout(a ? function() {
                u = void 0
            } : r, void 0 === a ? i - t : i))
        }
}

function debounce(e, t, n) {
    return void 0 === n ? throttle(e, t, !1) : throttle(e, n, !1 !== t)
}! function(e, u) {
    function l() {
        var e = f.elements;
        return "string" == typeof e ? e.split(" ") : e
    }

    function c(e) {
        var t = a[e[n]];
        return t || (t = {}, s++, e[n] = s, a[s] = t), t
    }

    function p(e, t, n) {
        return t || (t = u), h ? t.createElement(e) : (n || (n = c(t)), !(r = n.cache[e] ? n.cache[e].cloneNode() : o.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e)).canHaveChildren || i.test(e) || r.tagUrn ? r : n.frag.appendChild(r));
        var r
    }

    function r(e) {
        e || (e = u);
        var t, n, r, i, o, s, a = c(e);
        return !f.shivCSS || d || a.hasCSS || (a.hasCSS = (i = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", o = (r = e).createElement("p"), s = r.getElementsByTagName("head")[0] || r.documentElement, o.innerHTML = "x<style>" + i + "</style>", !!s.insertBefore(o.lastChild, s.firstChild))), h || (t = e, (n = a).cache || (n.cache = {}, n.createElem = t.createElement, n.createFrag = t.createDocumentFragment, n.frag = n.createFrag()), t.createElement = function(e) {
            return f.shivMethods ? p(e, t, n) : n.createElem(e)
        }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/[\w\-:]+/g, function(e) {
            return n.createElem(e), n.frag.createElement(e), 'c("' + e + '")'
        }) + ");return n}")(f, n.frag)), e
    }
    var d, h, t = e.html5 || {},
        i = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        n = "_html5shiv",
        s = 0,
        a = {};
    ! function() {
        try {
            var e = u.createElement("a");
            e.innerHTML = "<xyz></xyz>", d = "hidden" in e, h = 1 == e.childNodes.length || function() {
                u.createElement("a");
                var e = u.createDocumentFragment();
                return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
            }()
        } catch (e) {
            h = d = !0
        }
    }();
    var f = {
        elements: t.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: "3.7.3",
        shivCSS: !1 !== t.shivCSS,
        supportsUnknownElements: h,
        shivMethods: !1 !== t.shivMethods,
        type: "default",
        shivDocument: r,
        createElement: p,
        createDocumentFragment: function(e, t) {
            if (e || (e = u), h) return e.createDocumentFragment();
            for (var n = (t = t || c(e)).frag.cloneNode(), r = 0, i = l(), o = i.length; r < o; r++) n.createElement(i[r]);
            return n
        },
        addElements: function(e, t) {
            var n = f.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), f.elements = n + " " + e, r(t)
        }
    };
    e.html5 = f, r(u), "object" == typeof module && module.exports && (module.exports = f)
}("undefined" != typeof window ? window : this, document),
function(e) {
    var t = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
    e.matches = e.matchesSelector = t || function(e) {
        var t = document.querySelectorAll(e),
            n = this;
        return Array.prototype.some.call(t, function(e) {
            return e === n
        })
    }
}(Element.prototype),
function(e) {
    e.closest = e.closest || function(e) {
        for (var t = this; t;) {
            if (t.matches(e)) return t;
            t = t.parentElement
        }
        return null
    }
}(Element.prototype), [].includes || (Array.prototype.includes = function(e) {
        "use strict";
        var t = Object(this),
            n = parseInt(t.length) || 0;
        if (0 === n) return !1;
        var r, i = parseInt(arguments[1]) || 0;
        for (0 <= i ? r = i : (r = n + i) < 0 && (r = 0); r < n;) {
            var o = t[r];
            if (e === o || e != e && o != o) return !0;
            r++
        }
        return !1
    }), Array.from || (Array.from = function() {
        var t = Object.prototype.toString,
            u = function(e) {
                return "function" == typeof e || "[object Function]" === t.call(e)
            },
            r = Math.pow(2, 53) - 1,
            l = function(e) {
                var t, n = (t = Number(e), isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (0 < t ? 1 : -1) * Math.floor(Math.abs(t)) : t);
                return Math.min(Math.max(n, 0), r)
            };
        return function(e) {
            var t = Object(e);
            if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var n, r = 1 < arguments.length ? arguments[1] : void 0;
            if (void 0 !== r) {
                if (!u(r)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                2 < arguments.length && (n = arguments[2])
            }
            for (var i, o = l(t.length), s = u(this) ? Object(new this(o)) : new Array(o), a = 0; a < o;) i = t[a], s[a] = r ? void 0 === n ? r(i, a) : r.call(n, i, a) : i, a += 1;
            return s.length = o, s
        }
    }()),
    function(m, v) {
        "use strict";
        if ("IntersectionObserver" in m && "IntersectionObserverEntry" in m && "intersectionRatio" in m.IntersectionObserverEntry.prototype) "isIntersecting" in m.IntersectionObserverEntry.prototype || Object.defineProperty(m.IntersectionObserverEntry.prototype, "isIntersecting", {
            get: function() {
                return 0 < this.intersectionRatio
            }
        });
        else {
            var t = [];
            e.prototype.THROTTLE_TIMEOUT = 100, e.prototype.POLL_INTERVAL = null, e.prototype.USE_MUTATION_OBSERVER = !0, e.prototype.observe = function(t) {
                if (!this._observationTargets.some(function(e) {
                        return e.element === t
                    })) {
                    if (!t || 1 !== t.nodeType) throw new Error("target must be an Element");
                    this._registerInstance(), this._observationTargets.push({
                        element: t,
                        entry: null
                    }), this._monitorIntersections(), this._checkForIntersections()
                }
            }, e.prototype.unobserve = function(t) {
                this._observationTargets = this._observationTargets.filter(function(e) {
                    return e.element !== t
                }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
            }, e.prototype.disconnect = function() {
                this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
            }, e.prototype.takeRecords = function() {
                var e = this._queuedEntries.slice();
                return this._queuedEntries = [], e
            }, e.prototype._initThresholds = function(e) {
                var t = e || [0];
                return Array.isArray(t) || (t = [t]), t.sort().filter(function(e, t, n) {
                    if ("number" != typeof e || isNaN(e) || e < 0 || 1 < e) throw new Error("threshold must be a number between 0 and 1 inclusively");
                    return e !== n[t - 1]
                })
            }, e.prototype._parseRootMargin = function(e) {
                var t = (e || "0px").split(/\s+/).map(function(e) {
                    var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                    if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                    return {
                        value: parseFloat(t[1]),
                        unit: t[2]
                    }
                });
                return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
            }, e.prototype._monitorIntersections = function() {
                this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (n(m, "resize", this._checkForIntersections, !0), n(v, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in m && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(v, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }))))
            }, e.prototype._unmonitorIntersections = function() {
                this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, r(m, "resize", this._checkForIntersections, !0), r(v, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
            }, e.prototype._checkForIntersections = function() {
                var a = this._rootIsInDom(),
                    u = a ? this._getRootRect() : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    };
                this._observationTargets.forEach(function(e) {
                    var t = e.element,
                        n = g(t),
                        r = this._rootContainsTarget(t),
                        i = e.entry,
                        o = a && r && this._computeTargetAndRootIntersection(t, u),
                        s = e.entry = new l({
                            time: m.performance && performance.now && performance.now(),
                            target: t,
                            boundingClientRect: n,
                            rootBounds: u,
                            intersectionRect: o
                        });
                    i ? a && r ? this._hasCrossedThreshold(i, s) && this._queuedEntries.push(s) : i && i.isIntersecting && this._queuedEntries.push(s) : this._queuedEntries.push(s)
                }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
            }, e.prototype._computeTargetAndRootIntersection = function(e, t) {
                if ("none" !== m.getComputedStyle(e).display) {
                    for (var n, r, i, o, s, a, u, l, c = g(e), p = y(e), d = !1; !d;) {
                        var h = null,
                            f = 1 === p.nodeType ? m.getComputedStyle(p) : {};
                        if ("none" === f.display) return;
                        if (p === this.root || p === v ? (d = !0, h = t) : p !== v.body && p !== v.documentElement && "visible" !== f.overflow && (h = g(p)), h && (n = h, r = c, void 0, i = Math.max(n.top, r.top), o = Math.min(n.bottom, r.bottom), s = Math.max(n.left, r.left), a = Math.min(n.right, r.right), l = o - i, !(c = 0 <= (u = a - s) && 0 <= l && {
                                top: i,
                                bottom: o,
                                left: s,
                                right: a,
                                width: u,
                                height: l
                            }))) break;
                        p = y(p)
                    }
                    return c
                }
            }, e.prototype._getRootRect = function() {
                var e;
                if (this.root) e = g(this.root);
                else {
                    var t = v.documentElement,
                        n = v.body;
                    e = {
                        top: 0,
                        left: 0,
                        right: t.clientWidth || n.clientWidth,
                        width: t.clientWidth || n.clientWidth,
                        bottom: t.clientHeight || n.clientHeight,
                        height: t.clientHeight || n.clientHeight
                    }
                }
                return this._expandRectByRootMargin(e)
            }, e.prototype._expandRectByRootMargin = function(n) {
                var e = this._rootMarginValues.map(function(e, t) {
                        return "px" === e.unit ? e.value : e.value * (t % 2 ? n.width : n.height) / 100
                    }),
                    t = {
                        top: n.top - e[0],
                        right: n.right + e[1],
                        bottom: n.bottom + e[2],
                        left: n.left - e[3]
                    };
                return t.width = t.right - t.left, t.height = t.bottom - t.top, t
            }, e.prototype._hasCrossedThreshold = function(e, t) {
                var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                    r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                if (n !== r)
                    for (var i = 0; i < this.thresholds.length; i++) {
                        var o = this.thresholds[i];
                        if (o === n || o === r || o < n != o < r) return !0
                    }
            }, e.prototype._rootIsInDom = function() {
                return !this.root || i(v, this.root)
            }, e.prototype._rootContainsTarget = function(e) {
                return i(this.root || v, e)
            }, e.prototype._registerInstance = function() {
                t.indexOf(this) < 0 && t.push(this)
            }, e.prototype._unregisterInstance = function() {
                var e = t.indexOf(this); - 1 !== e && t.splice(e, 1)
            }, m.IntersectionObserver = e, m.IntersectionObserverEntry = l
        }

        function l(e) {
            this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }, this.isIntersecting = !!e.intersectionRect;
            var t = this.boundingClientRect,
                n = t.width * t.height,
                r = this.intersectionRect,
                i = r.width * r.height;
            this.intersectionRatio = n ? i / n : this.isIntersecting ? 1 : 0
        }

        function e(e, t) {
            var n, r, i, o = t || {};
            if ("function" != typeof e) throw new Error("callback must be a function");
            if (o.root && 1 !== o.root.nodeType) throw new Error("root must be an Element");
            this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, i = null, function() {
                i || (i = setTimeout(function() {
                    n(), i = null
                }, r))
            }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {
                return e.value + e.unit
            }).join(" ")
        }

        function n(e, t, n, r) {
            "function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
        }

        function r(e, t, n, r) {
            "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
        }

        function g(e) {
            var t;
            try {
                t = e.getBoundingClientRect()
            } catch (e) {}
            return t ? (t.width && t.height || (t = {
                top: t.top,
                right: t.right,
                bottom: t.bottom,
                left: t.left,
                width: t.right - t.left,
                height: t.bottom - t.top
            }), t) : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }
        }

        function i(e, t) {
            for (var n = t; n;) {
                if (n === e) return !0;
                n = y(n)
            }
            return !1
        }

        function y(e) {
            var t = e.parentNode;
            return t && 11 === t.nodeType && t.host ? t.host : t
        }
    }(window, document),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Promise = t()
    }(this, function() {
        "use strict";
        var t = setTimeout;

        function r() {}

        function o(e) {
            if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
        }

        function i(n, r) {
            for (; 3 === n._state;) n = n._value;
            0 !== n._state ? (n._handled = !0, o._immediateFn(function() {
                var e = 1 === n._state ? r.onFulfilled : r.onRejected;
                if (null !== e) {
                    var t;
                    try {
                        t = e(n._value)
                    } catch (e) {
                        return void a(r.promise, e)
                    }
                    s(r.promise, t)
                } else(1 === n._state ? s : a)(r.promise, n._value)
            })) : n._deferreds.push(r)
        }

        function s(t, e) {
            try {
                if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" == typeof e || "function" == typeof e)) {
                    var n = e.then;
                    if (e instanceof o) return t._state = 3, t._value = e, void u(t);
                    if ("function" == typeof n) return void c((r = n, i = e, function() {
                        r.apply(i, arguments)
                    }), t)
                }
                t._state = 1, t._value = e, u(t)
            } catch (e) {
                a(t, e)
            }
            var r, i
        }

        function a(e, t) {
            e._state = 2, e._value = t, u(e)
        }

        function u(e) {
            2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                e._handled || o._unhandledRejectionFn(e._value)
            });
            for (var t = 0, n = e._deferreds.length; t < n; t++) i(e, e._deferreds[t]);
            e._deferreds = null
        }

        function l(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }

        function c(e, t) {
            var n = !1;
            try {
                e(function(e) {
                    n || (n = !0, s(t, e))
                }, function(e) {
                    n || (n = !0, a(t, e))
                })
            } catch (e) {
                if (n) return;
                n = !0, a(t, e)
            }
        }
        return o.prototype.catch = function(e) {
            return this.then(null, e)
        }, o.prototype.then = function(e, t) {
            var n = new this.constructor(r);
            return i(this, new l(e, t, n)), n
        }, o.prototype.finally = function(t) {
            var n = this.constructor;
            return this.then(function(e) {
                return n.resolve(t()).then(function() {
                    return e
                })
            }, function(e) {
                return n.resolve(t()).then(function() {
                    return n.reject(e)
                })
            })
        }, o.all = function(t) {
            return new o(function(r, i) {
                if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
                var o = Array.prototype.slice.call(t);
                if (0 === o.length) return r([]);
                var s = o.length;

                function a(t, e) {
                    try {
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if ("function" == typeof n) return void n.call(e, function(e) {
                                a(t, e)
                            }, i)
                        }
                        o[t] = e, 0 == --s && r(o)
                    } catch (e) {
                        i(e)
                    }
                }
                for (var e = 0; e < o.length; e++) a(e, o[e])
            })
        }, o.resolve = function(t) {
            return t && "object" == typeof t && t.constructor === o ? t : new o(function(e) {
                e(t)
            })
        }, o.reject = function(n) {
            return new o(function(e, t) {
                t(n)
            })
        }, o.race = function(i) {
            return new o(function(e, t) {
                for (var n = 0, r = i.length; n < r; n++) i[n].then(e, t)
            })
        }, o._immediateFn = "function" == typeof setImmediate && function(e) {
            setImmediate(e)
        } || function(e) {
            t(e, 0)
        }, o._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }, o
    }),
    function(e) {
        "use strict";
        if (!e.fetch) {
            var s = {
                searchParams: "URLSearchParams" in e,
                iterable: "Symbol" in e && "iterator" in Symbol,
                blob: "FileReader" in e && "Blob" in e && function() {
                    try {
                        return new Blob, !0
                    } catch (e) {
                        return !1
                    }
                }(),
                formData: "FormData" in e,
                arrayBuffer: "ArrayBuffer" in e
            };
            if (s.arrayBuffer) var t = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                n = function(e) {
                    return e && DataView.prototype.isPrototypeOf(e)
                },
                r = ArrayBuffer.isView || function(e) {
                    return e && -1 < t.indexOf(Object.prototype.toString.call(e))
                };
            c.prototype.append = function(e, t) {
                e = a(e), t = u(t);
                var n = this.map[e];
                this.map[e] = n ? n + "," + t : t
            }, c.prototype.delete = function(e) {
                delete this.map[a(e)]
            }, c.prototype.get = function(e) {
                return e = a(e), this.has(e) ? this.map[e] : null
            }, c.prototype.has = function(e) {
                return this.map.hasOwnProperty(a(e))
            }, c.prototype.set = function(e, t) {
                this.map[a(e)] = u(t)
            }, c.prototype.forEach = function(e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            }, c.prototype.keys = function() {
                var n = [];
                return this.forEach(function(e, t) {
                    n.push(t)
                }), l(n)
            }, c.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }), l(t)
            }, c.prototype.entries = function() {
                var n = [];
                return this.forEach(function(e, t) {
                    n.push([t, e])
                }), l(n)
            }, s.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
            var o = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            v.prototype.clone = function() {
                return new v(this, {
                    body: this._bodyInit
                })
            }, m.call(v.prototype), m.call(y.prototype), y.prototype.clone = function() {
                return new y(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new c(this.headers),
                    url: this.url
                })
            }, y.error = function() {
                var e = new y(null, {
                    status: 0,
                    statusText: ""
                });
                return e.type = "error", e
            };
            var i = [301, 302, 303, 307, 308];
            y.redirect = function(e, t) {
                if (-1 === i.indexOf(t)) throw new RangeError("Invalid status code");
                return new y(null, {
                    status: t,
                    headers: {
                        location: e
                    }
                })
            }, e.Headers = c, e.Request = v, e.Response = y, e.fetch = function(n, i) {
                return new Promise(function(r, e) {
                    var t = new v(n, i),
                        o = new XMLHttpRequest;
                    o.onload = function() {
                        var e, i, t = {
                            status: o.status,
                            statusText: o.statusText,
                            headers: (e = o.getAllResponseHeaders() || "", i = new c, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                var t = e.split(":"),
                                    n = t.shift().trim();
                                if (n) {
                                    var r = t.join(":").trim();
                                    i.append(n, r)
                                }
                            }), i)
                        };
                        t.url = "responseURL" in o ? o.responseURL : t.headers.get("X-Request-URL");
                        var n = "response" in o ? o.response : o.responseText;
                        r(new y(n, t))
                    }, o.onerror = function() {
                        e(new TypeError("Network request failed"))
                    }, o.ontimeout = function() {
                        e(new TypeError("Network request failed"))
                    }, o.open(t.method, t.url, !0), "include" === t.credentials ? o.withCredentials = !0 : "omit" === t.credentials && (o.withCredentials = !1), "responseType" in o && s.blob && (o.responseType = "blob"), t.headers.forEach(function(e, t) {
                        o.setRequestHeader(t, e)
                    }), o.send(void 0 === t._bodyInit ? null : t._bodyInit)
                })
            }, e.fetch.polyfill = !0
        }

        function a(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function u(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function l(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return s.iterable && (e[Symbol.iterator] = function() {
                return e
            }), e
        }

        function c(t) {
            this.map = {}, t instanceof c ? t.forEach(function(e, t) {
                this.append(t, e)
            }, this) : Array.isArray(t) ? t.forEach(function(e) {
                this.append(e[0], e[1])
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }

        function p(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function d(n) {
            return new Promise(function(e, t) {
                n.onload = function() {
                    e(n.result)
                }, n.onerror = function() {
                    t(n.error)
                }
            })
        }

        function h(e) {
            var t = new FileReader,
                n = d(t);
            return t.readAsArrayBuffer(e), n
        }

        function f(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
        }

        function m() {
            return this.bodyUsed = !1, this._initBody = function(e) {
                if (this._bodyInit = e)
                    if ("string" == typeof e) this._bodyText = e;
                    else if (s.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (s.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (s.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                else if (s.arrayBuffer && s.blob && n(e)) this._bodyArrayBuffer = f(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!s.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !r(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = f(e)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : s.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, s.blob && (this.blob = function() {
                var e = p(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
            }), this.text = function() {
                var e, t, n, r = p(this);
                if (r) return r;
                if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = d(t), t.readAsText(e), n;
                if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                    for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                    return n.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, s.formData && (this.formData = function() {
                return this.text().then(g)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function v(e, t) {
            var n, r, i = (t = t || {}).body;
            if (e instanceof v) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new c(e.headers)), this.method = e.method, this.mode = e.mode, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new c(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), -1 < o.indexOf(r) ? r : n), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i)
        }

        function g(e) {
            var i = new FormData;
            return e.trim().split("&").forEach(function(e) {
                if (e) {
                    var t = e.split("="),
                        n = t.shift().replace(/\+/g, " "),
                        r = t.join("=").replace(/\+/g, " ");
                    i.append(decodeURIComponent(n), decodeURIComponent(r))
                }
            }), i
        }

        function y(e, t) {
            t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new c(t.headers), this.url = t.url || "", this._initBody(e)
        }
    }("undefined" != typeof self ? self : this),
    function() {
        for (var o = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
            var n = (new Date).getTime(),
                r = Math.max(0, 16 - (n - o)),
                i = window.setTimeout(function() {
                    e(n + r)
                }, r);
            return o = n + r, i
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }(),
    function(e, t) {
        function c(e) {
            return !!("" === e || e && e.charCodeAt && e.substr)
        }

        function p(e) {
            return r ? r(e) : "[object Array]" === i.call(e)
        }

        function d(e) {
            return "[object Object]" === i.call(e)
        }

        function h(e, t) {
            var n;
            e = e || {}, t = t || {};
            for (n in t) t.hasOwnProperty(n) && null == e[n] && (e[n] = t[n]);
            return e
        }

        function f(e, t, n) {
            var r, i, o = [];
            if (!e) return o;
            if (s && e.map === s) return e.map(t, n);
            for (r = 0, i = e.length; r < i; r++) o[r] = t.call(n, e[r], r, e);
            return o
        }

        function m(e, t) {
            return e = Math.round(Math.abs(e)), isNaN(e) ? t : e
        }

        function v(e) {
            var t = g.settings.currency.format;
            return "function" == typeof e && (e = e()), c(e) && e.match("%v") ? {
                pos: e,
                neg: e.replace("-", "").replace("%v", "-%v"),
                zero: e
            } : e && e.pos && e.pos.match("%v") ? e : c(t) ? g.settings.currency.format = {
                pos: t,
                neg: t.replace("%v", "-%v"),
                zero: t
            } : t
        }
        var n, g = {
                version: "0.4.1",
                settings: {
                    currency: {
                        symbol: "$",
                        format: "%s%v",
                        decimal: ".",
                        thousand: ",",
                        precision: 2,
                        grouping: 3
                    },
                    number: {
                        precision: 0,
                        grouping: 3,
                        thousand: ",",
                        decimal: "."
                    }
                }
            },
            s = Array.prototype.map,
            r = Array.isArray,
            i = Object.prototype.toString,
            y = g.unformat = g.parse = function(e, t) {
                if (p(e)) return f(e, function(e) {
                    return y(e, t)
                });
                if ("number" == typeof(e = e || 0)) return e;
                t = t || ".";
                var n = RegExp("[^0-9-" + t + "]", ["g"]);
                n = parseFloat(("" + e).replace(/\((.*)\)/, "-$1").replace(n, "").replace(t, "."));
                return isNaN(n) ? 0 : n
            },
            l = g.toFixed = function(e, t) {
                t = m(t, g.settings.number.precision);
                var n = Math.pow(10, t);
                return (Math.round(g.unformat(e) * n) / n).toFixed(t)
            },
            b = g.formatNumber = g.format = function(e, t, n, r) {
                if (p(e)) return f(e, function(e) {
                    return b(e, t, n, r)
                });
                e = y(e);
                var i = h(d(t) ? t : {
                        precision: t,
                        thousand: n,
                        decimal: r
                    }, g.settings.number),
                    o = m(i.precision),
                    s = e < 0 ? "-" : "",
                    a = parseInt(l(Math.abs(e || 0), o), 10) + "",
                    u = 3 < a.length ? a.length % 3 : 0;
                return s + (u ? a.substr(0, u) + i.thousand : "") + a.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + i.thousand) + (o ? i.decimal + l(Math.abs(e), o).split(".")[1] : "")
            },
            u = g.formatMoney = function(e, t, n, r, i, o) {
                if (p(e)) return f(e, function(e) {
                    return u(e, t, n, r, i, o)
                });
                e = y(e);
                var s = h(d(t) ? t : {
                        symbol: t,
                        precision: n,
                        thousand: r,
                        decimal: i,
                        format: o
                    }, g.settings.currency),
                    a = v(s.format);
                return (0 < e ? a.pos : e < 0 ? a.neg : a.zero).replace("%s", s.symbol).replace("%v", b(Math.abs(e), m(s.precision), s.thousand, s.decimal))
            };
        g.formatColumn = function(e, t, n, r, i, o) {
            if (!e) return [];
            var s = h(d(t) ? t : {
                    symbol: t,
                    precision: n,
                    thousand: r,
                    decimal: i,
                    format: o
                }, g.settings.currency),
                a = v(s.format),
                u = a.pos.indexOf("%s") < a.pos.indexOf("%v"),
                l = 0;
            return f(e = f(e, function(e) {
                return p(e) ? g.formatColumn(e, s) : ((e = (0 < (e = y(e)) ? a.pos : e < 0 ? a.neg : a.zero).replace("%s", s.symbol).replace("%v", b(Math.abs(e), m(s.precision), s.thousand, s.decimal))).length > l && (l = e.length), e)
            }), function(e) {
                return c(e) && e.length < l ? u ? e.replace(s.symbol, s.symbol + Array(l - e.length + 1).join(" ")) : Array(l - e.length + 1).join(" ") + e : e
            })
        }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = g), exports.accounting = g) : "function" == typeof define && define.amd ? define([], function() {
            return g
        }) : (g.noConflict = (n = e.accounting, function() {
            return e.accounting = n, g.noConflict = void 0, g
        }), e.accounting = g)
    }(this),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.IMask = t()
    }(this, function() {
        "use strict";
        var c = function(e) {
                if (null == e) throw TypeError("Can't call method on  " + e);
                return e
            },
            n = {}.hasOwnProperty,
            a = function(e, t) {
                return n.call(e, t)
            },
            r = {}.toString,
            t = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == (t = e, r.call(t).slice(8, -1)) ? e.split("") : Object(e);
                var t
            },
            l = function(e) {
                return t(c(e))
            },
            i = Math.ceil,
            o = Math.floor,
            p = function(e) {
                return isNaN(e = +e) ? 0 : (0 < e ? o : i)(e)
            },
            s = Math.min,
            d = function(e) {
                return 0 < e ? s(p(e), 9007199254740991) : 0
            },
            h = Math.max,
            f = Math.min;

        function e(e, t) {
            return e(t = {
                exports: {}
            }, t.exports), t.exports
        }
        var u, m, v, g = e(function(e) {
                var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = t)
            }),
            y = "__core-js_shared__",
            b = g[y] || (g[y] = {}),
            k = 0,
            w = Math.random(),
            _ = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++k + w).toString(36))
            },
            E = b[u = "keys"] || (b[u] = {}),
            C = (m = !1, function(e, t, n) {
                var r, i, o, s = l(e),
                    a = d(s.length),
                    u = (i = a, (r = p(r = n)) < 0 ? h(r + i, 0) : f(r, i));
                if (m && t != t) {
                    for (; u < a;)
                        if ((o = s[u++]) != o) return !0
                } else
                    for (; u < a; u++)
                        if ((m || u in s) && s[u] === t) return m || u || 0;
                return !m && -1
            }),
            A = E[v = "IE_PROTO"] || (E[v] = _(v)),
            x = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
            S = Object.keys || function(e) {
                return function(e, t) {
                    var n, r = l(e),
                        i = 0,
                        o = [];
                    for (n in r) n != A && a(r, n) && o.push(n);
                    for (; t.length > i;) a(r, n = t[i++]) && (~C(o, n) || o.push(n));
                    return o
                }(e, x)
            },
            F = e(function(e) {
                var t = e.exports = {
                    version: "2.5.3"
                };
                "number" == typeof __e && (__e = t)
            }),
            T = (F.version, function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }),
            P = function(e) {
                if (!T(e)) throw TypeError(e + " is not an object!");
                return e
            },
            D = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            },
            I = !D(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }),
            O = g.document,
            M = T(O) && T(O.createElement),
            j = !I && !D(function() {
                return 7 != Object.defineProperty((e = "div", M ? O.createElement(e) : {}), "a", {
                    get: function() {
                        return 7
                    }
                }).a;
                var e
            }),
            B = Object.defineProperty,
            N = {
                f: I ? Object.defineProperty : function(e, t, n) {
                    if (P(e), t = function(e, t) {
                            if (!T(e)) return e;
                            var n, r;
                            if (t && "function" == typeof(n = e.toString) && !T(r = n.call(e))) return r;
                            if ("function" == typeof(n = e.valueOf) && !T(r = n.call(e))) return r;
                            if (!t && "function" == typeof(n = e.toString) && !T(r = n.call(e))) return r;
                            throw TypeError("Can't convert object to primitive value")
                        }(t, !0), P(n), j) try {
                        return B(e, t, n)
                    } catch (e) {}
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                    return "value" in n && (e[t] = n.value), e
                }
            },
            L = I ? function(e, t, n) {
                return N.f(e, t, {
                    enumerable: !((r = 1) & r),
                    configurable: !(2 & r),
                    writable: !(4 & r),
                    value: n
                });
                var r
            } : function(e, t, n) {
                return e[t] = n, e
            },
            R = e(function(e) {
                var o = _("src"),
                    t = "toString",
                    n = Function[t],
                    s = ("" + n).split(t);
                F.inspectSource = function(e) {
                    return n.call(e)
                }, (e.exports = function(e, t, n, r) {
                    var i = "function" == typeof n;
                    i && (a(n, "name") || L(n, "name", t)), e[t] !== n && (i && (a(n, o) || L(n, o, e[t] ? "" + e[t] : s.join(String(t)))), e === g ? e[t] = n : r ? e[t] ? e[t] = n : L(e, t, n) : (delete e[t], L(e, t, n)))
                })(Function.prototype, t, function() {
                    return "function" == typeof this && this[o] || n.call(this)
                })
            }),
            H = function(r, i, e) {
                if (function(e) {
                        if ("function" != typeof e) throw TypeError(e + " is not a function!")
                    }(r), void 0 === i) return r;
                switch (e) {
                    case 1:
                        return function(e) {
                            return r.call(i, e)
                        };
                    case 2:
                        return function(e, t) {
                            return r.call(i, e, t)
                        };
                    case 3:
                        return function(e, t, n) {
                            return r.call(i, e, t, n)
                        }
                }
                return function() {
                    return r.apply(i, arguments)
                }
            },
            V = "prototype",
            U = function(e, t, n) {
                var r, i, o, s, a = e & U.F,
                    u = e & U.G,
                    l = e & U.S,
                    c = e & U.P,
                    p = e & U.B,
                    d = u ? g : l ? g[t] || (g[t] = {}) : (g[t] || {})[V],
                    h = u ? F : F[t] || (F[t] = {}),
                    f = h[V] || (h[V] = {});
                for (r in u && (n = t), n) o = ((i = !a && d && void 0 !== d[r]) ? d : n)[r], s = p && i ? H(o, g) : c && "function" == typeof o ? H(Function.call, o) : o, d && R(d, r, o, e & U.U), h[r] != o && L(h, r, s), c && f[r] != o && (f[r] = o)
            };
        g.core = F, U.F = 1, U.G = 2, U.S = 4, U.P = 8, U.B = 16, U.W = 32, U.U = 64, U.R = 128;
        var q, $, z, X, Y = U;
        q = "keys", $ = function() {
            return function(e) {
                return S(Object(c(e)))
            }
        }, z = (F.Object || {})[q] || Object[q], (X = {})[q] = $(z), Y(Y.S + Y.F * D(function() {
            z(1)
        }), "Object", X);
        F.Object.keys;
        var W = function(e) {
            var t = String(c(this)),
                n = "",
                r = p(e);
            if (r < 0 || r == 1 / 0) throw RangeError("Count can't be negative");
            for (; 0 < r;
                (r >>>= 1) && (t += t)) 1 & r && (n += t);
            return n
        };
        Y(Y.P, "String", {
            repeat: W
        });
        F.String.repeat;
        var G = function(e, t, n, r) {
                var i = String(c(e)),
                    o = i.length,
                    s = void 0 === n ? " " : String(n),
                    a = d(t);
                if (a <= o || "" == s) return i;
                var u = a - o,
                    l = W.call(s, Math.ceil(u / s.length));
                return l.length > u && (l = l.slice(0, u)), r ? l + i : i + l
            },
            Z = g.navigator,
            Q = Z && Z.userAgent || "";
        Y(Y.P + Y.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(Q), "String", {
            padStart: function(e) {
                return G(this, e, 1 < arguments.length ? arguments[1] : void 0, !0)
            }
        });
        F.String.padStart;
        Y(Y.P + Y.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(Q), "String", {
            padEnd: function(e) {
                return G(this, e, 1 < arguments.length ? arguments[1] : void 0, !1)
            }
        });
        F.String.padEnd;
        var K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            J = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            ee = function() {
                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, n) {
                    return t && r(e.prototype, t), n && r(e, n), e
                }
            }(),
            te = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            ne = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var s = i.get;
                return void 0 !== s ? s.call(r) : void 0
            },
            re = function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            },
            ie = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            },
            oe = function e(t, n, r, i) {
                var o = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === o) {
                    var s = Object.getPrototypeOf(t);
                    null !== s && e(s, n, r, i)
                } else if ("value" in o && o.writable) o.value = r;
                else {
                    var a = o.set;
                    void 0 !== a && a.call(i, r)
                }
                return r
            },
            se = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            ae = function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            };

        function ue(e) {
            return "string" == typeof e || e instanceof String
        }

        function le(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return ue(e) ? e : e ? t : n
        }
        var ce = {
            NONE: 0,
            LEFT: -1,
            RIGHT: 1
        };

        function pe(e, t) {
            return t === ce.LEFT && --e, e
        }

        function de(e) {
            return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
        }
        var he = "undefined" != typeof window && window || "undefined" != typeof global && global.global === global && global || "undefined" != typeof self && self.self === self && self || {},
            fe = function() {
                function i(e, t, n, r) {
                    for (J(this, i), this.value = e, this.cursorPos = t, this.oldValue = n, this.oldSelection = r; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start
                }
                return ee(i, [{
                    key: "startChangePos",
                    get: function() {
                        return Math.min(this.cursorPos, this.oldSelection.start)
                    }
                }, {
                    key: "insertedCount",
                    get: function() {
                        return this.cursorPos - this.startChangePos
                    }
                }, {
                    key: "inserted",
                    get: function() {
                        return this.value.substr(this.startChangePos, this.insertedCount)
                    }
                }, {
                    key: "removedCount",
                    get: function() {
                        return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
                    }
                }, {
                    key: "removed",
                    get: function() {
                        return this.oldValue.substr(this.startChangePos, this.removedCount)
                    }
                }, {
                    key: "head",
                    get: function() {
                        return this.value.substring(0, this.startChangePos)
                    }
                }, {
                    key: "tail",
                    get: function() {
                        return this.value.substring(this.startChangePos + this.insertedCount)
                    }
                }, {
                    key: "removeDirection",
                    get: function() {
                        return !this.removedCount || this.insertedCount ? ce.NONE : this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? ce.RIGHT : ce.LEFT
                    }
                }]), i
            }(),
            me = function() {
                function t(e) {
                    J(this, t), te(this, {
                        inserted: "",
                        overflow: !1,
                        shift: 0
                    }, e)
                }
                return ee(t, [{
                    key: "aggregate",
                    value: function(e) {
                        return e.rawInserted && (this.rawInserted += e.rawInserted), this.inserted += e.inserted, this.shift += e.shift, this.overflow = this.overflow || e.overflow, this
                    }
                }, {
                    key: "offset",
                    get: function() {
                        return this.shift + this.inserted.length
                    }
                }, {
                    key: "rawInserted",
                    get: function() {
                        return null != this._rawInserted ? this._rawInserted : this.inserted
                    },
                    set: function(e) {
                        this._rawInserted = e
                    }
                }]), t
            }(),
            ve = function() {
                function t(e) {
                    J(this, t), this._value = "", this._update(te({}, t.DEFAULTS, e)), this.isInitialized = !0
                }
                return ee(t, [{
                    key: "updateOptions",
                    value: function(e) {
                        this.withValueRefresh(this._update.bind(this, e))
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        te(this, e)
                    }
                }, {
                    key: "clone",
                    value: function() {
                        var e = new t(this);
                        return e._value = this.value.slice(), e
                    }
                }, {
                    key: "assign",
                    value: function(e) {
                        return te(this, e)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this._value = ""
                    }
                }, {
                    key: "resolve",
                    value: function(e) {
                        return this.reset(), this._append(e, {
                            input: !0
                        }), this._appendTail(), this.doCommit(), this.value
                    }
                }, {
                    key: "nearestInputPos",
                    value: function(e, t) {
                        return e
                    }
                }, {
                    key: "extractInput",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        return this.value.slice(e, t)
                    }
                }, {
                    key: "_extractTail",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        return {
                            value: this.extractInput(e, t),
                            fromPos: e,
                            toPos: t
                        }
                    }
                }, {
                    key: "_appendTail",
                    value: function(e) {
                        return this._append(e ? e.value : "", {
                            tail: !0
                        })
                    }
                }, {
                    key: "_append",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this.value.length,
                            r = this.clone(),
                            i = !1;
                        e = this.doPrepare(e, t);
                        for (var o = 0; o < e.length; ++o) {
                            if (this._value += e[o], !1 === this.doValidate(t) && (this.assign(r), !t.input)) {
                                i = !0;
                                break
                            }
                            r = this.clone()
                        }
                        return new me({
                            inserted: this.value.slice(n),
                            overflow: i
                        })
                    }
                }, {
                    key: "appendWithTail",
                    value: function(e, t) {
                        for (var n = new me, r = this.clone(), i = void 0, o = 0; o < e.length; ++o) {
                            var s = e[o],
                                a = this._append(s, {
                                    input: !0
                                });
                            if (i = this.clone(), !(!a.overflow && !this._appendTail(t).overflow) || !1 === this.doValidate({
                                    tail: !0
                                })) {
                                this.assign(r);
                                break
                            }
                            this.assign(i), r = this.clone(), n.aggregate(a)
                        }
                        return n.shift += this._appendTail(t).shift, n
                    }
                }, {
                    key: "remove",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length - e;
                        return this._value = this.value.slice(0, e) + this.value.slice(e + t), new me
                    }
                }, {
                    key: "withValueRefresh",
                    value: function(e) {
                        if (this._refreshing || !this.isInitialized) return e();
                        this._refreshing = !0;
                        var t = this.unmaskedValue,
                            n = e();
                        return this.unmaskedValue = t, delete this._refreshing, n
                    }
                }, {
                    key: "doPrepare",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.prepare(e, this, t)
                    }
                }, {
                    key: "doValidate",
                    value: function(e) {
                        return this.validate(this.value, this, e)
                    }
                }, {
                    key: "doCommit",
                    value: function() {
                        this.commit(this.value, this)
                    }
                }, {
                    key: "splice",
                    value: function(e, t, n, r) {
                        var i = e + t,
                            o = this._extractTail(i),
                            s = this.nearestInputPos(e, r);
                        return new me({
                            shift: s - e
                        }).aggregate(this.remove(s)).aggregate(this.appendWithTail(n, o))
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this._value
                    },
                    set: function(e) {
                        this.resolve(e)
                    }
                }, {
                    key: "unmaskedValue",
                    get: function() {
                        return this.value
                    },
                    set: function(e) {
                        this.reset(), this._append(e), this._appendTail(), this.doCommit()
                    }
                }, {
                    key: "rawInputValue",
                    get: function() {
                        return this.extractInput(0, this.value.length, {
                            raw: !0
                        })
                    },
                    set: function(e) {
                        this.reset(), this._append(e, {
                            raw: !0
                        }), this._appendTail(), this.doCommit()
                    }
                }, {
                    key: "isComplete",
                    get: function() {
                        return !0
                    }
                }]), t
            }();

        function ge(e) {
            if (null == e) throw new Error("mask property should be defined");
            return e instanceof RegExp ? he.IMask.MaskedRegExp : ue(e) ? he.IMask.MaskedPattern : e instanceof Date || e === Date ? he.IMask.MaskedDate : e instanceof Number || "number" == typeof e || e === Number ? he.IMask.MaskedNumber : Array.isArray(e) || e === Array ? he.IMask.MaskedDynamic : e.prototype instanceof he.IMask.Masked ? e : e instanceof Function ? he.IMask.MaskedFunction : (console.warn("Mask not found for mask", e), he.IMask.Masked)
        }

        function ye(e) {
            var t = (e = te({}, e)).mask;
            return t instanceof he.IMask.Masked ? t : new(ge(t))(e)
        }
        ve.DEFAULTS = {
            prepare: function(e) {
                return e
            },
            validate: function() {
                return !0
            },
            commit: function() {}
        };
        var be = function() {
            function t(e) {
                J(this, t), te(this, e), this.mask && (this._masked = ye(e))
            }
            return ee(t, [{
                key: "reset",
                value: function() {
                    this.isHollow = !1, this.isRawInput = !1, this._masked && this._masked.reset()
                }
            }, {
                key: "resolve",
                value: function(e) {
                    return !!this._masked && this._masked.resolve(e)
                }
            }, {
                key: "isInput",
                get: function() {
                    return this.type === t.TYPES.INPUT
                }
            }, {
                key: "isHiddenHollow",
                get: function() {
                    return this.isHollow && this.optional
                }
            }]), t
        }();
        be.DEFAULTS = {
            0: /\d/,
            a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            "*": /./
        }, be.TYPES = {
            INPUT: "input",
            FIXED: "fixed"
        };
        var ke = function() {
                function s(e, t) {
                    var n = t.name,
                        r = t.offset,
                        i = t.mask,
                        o = t.validate;
                    J(this, s), this.masked = e, this.name = n, this.offset = r, this.mask = i, this.validate = o || function() {
                        return !0
                    }
                }
                return ee(s, [{
                    key: "doValidate",
                    value: function(e) {
                        return this.validate(this.value, this, e)
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.masked.value.slice(this.masked.mapDefIndexToPos(this.offset), this.masked.mapDefIndexToPos(this.offset + this.mask.length))
                    }
                }, {
                    key: "unmaskedValue",
                    get: function() {
                        return this.masked.extractInput(this.masked.mapDefIndexToPos(this.offset), this.masked.mapDefIndexToPos(this.offset + this.mask.length))
                    }
                }]), s
            }(),
            we = function() {
                function o(e) {
                    var t = se(e, 2),
                        n = t[0],
                        r = t[1],
                        i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : String(r).length;
                    J(this, o), this._from = n, this._to = r, this._maxLength = i, this.validate = this.validate.bind(this), this._update()
                }
                return ee(o, [{
                    key: "_update",
                    value: function() {
                        this._maxLength = Math.max(this._maxLength, String(this.to).length), this.mask = "0".repeat(this._maxLength)
                    }
                }, {
                    key: "validate",
                    value: function(e) {
                        var t = "",
                            n = "",
                            r = e.match(/^(\D*)(\d*)(\D*)/) || [],
                            i = se(r, 3),
                            o = i[1],
                            s = i[2];
                        return s && (t = "0".repeat(o.length) + s, n = "9".repeat(o.length) + s), -1 === e.search(/[^0]/) && e.length <= this._matchFrom || (t = t.padEnd(this._maxLength, "0"), n = n.padEnd(this._maxLength, "9"), this.from <= Number(n) && Number(t) <= this.to)
                    }
                }, {
                    key: "to",
                    get: function() {
                        return this._to
                    },
                    set: function(e) {
                        this._to = e, this._update()
                    }
                }, {
                    key: "from",
                    get: function() {
                        return this._from
                    },
                    set: function(e) {
                        this._from = e, this._update()
                    }
                }, {
                    key: "maxLength",
                    get: function() {
                        return this._maxLength
                    },
                    set: function(e) {
                        this._maxLength = e, this._update()
                    }
                }, {
                    key: "_matchFrom",
                    get: function() {
                        return this.maxLength - String(this.from).length
                    }
                }]), o
            }();
        ke.Range = we, ke.Enum = function(r) {
            return {
                mask: "*".repeat(r[0].length),
                validate: function(e, t, n) {
                    return r.some(function(e) {
                        return 0 <= e.indexOf(t.unmaskedValue)
                    })
                }
            }
        };
        var _e = function() {
                function t(e) {
                    J(this, t), this.chunks = e
                }
                return ee(t, [{
                    key: "value",
                    get: function() {
                        return this.chunks.map(function(e) {
                            return e.value
                        }).join("")
                    }
                }, {
                    key: "fromPos",
                    get: function() {
                        var e = this.chunks[0];
                        return e && e.stop
                    }
                }, {
                    key: "toPos",
                    get: function() {
                        var e = this.chunks[this.chunks.length - 1];
                        return e && e.stop
                    }
                }]), t
            }(),
            Ee = function(e) {
                function v() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return J(this, v), e.definitions = te({}, be.DEFAULTS, e.definitions), ie(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this, te({}, v.DEFAULTS, e)))
                }
                return re(v, ve), ee(v, [{
                    key: "_update",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        e.definitions = te({}, this.definitions, e.definitions), ne(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "_update", this).call(this, e), this._rebuildMask()
                    }
                }, {
                    key: "_rebuildMask",
                    value: function() {
                        var l = this,
                            c = this.definitions;
                        this._charDefs = [], this._groupDefs = [];
                        var p = this.mask;
                        if (p && c) {
                            var d = !1,
                                h = !1,
                                f = !1,
                                e = function(e) {
                                    if (l.groups) {
                                        var t = p.slice(e),
                                            n = Object.keys(l.groups).filter(function(e) {
                                                return 0 === t.indexOf(e)
                                            });
                                        n.sort(function(e, t) {
                                            return t.length - e.length
                                        });
                                        var r = n[0];
                                        if (r) {
                                            var i = l.groups[r];
                                            l._groupDefs.push(new ke(l, {
                                                name: r,
                                                offset: l._charDefs.length,
                                                mask: i.mask,
                                                validate: i.validate
                                            })), p = p.replace(r, i.mask)
                                        }
                                    }
                                    var o = p[e],
                                        s = o in c ? be.TYPES.INPUT : be.TYPES.FIXED,
                                        a = s === be.TYPES.INPUT || d,
                                        u = s === be.TYPES.INPUT && h;
                                    if (o === v.STOP_CHAR) return f = !0, "continue";
                                    if ("{" === o || "}" === o) return d = !d, "continue";
                                    if ("[" === o || "]" === o) return h = !h, "continue";
                                    if (o === v.ESCAPE_CHAR) {
                                        if (!(o = p[++e])) return "break";
                                        s = be.TYPES.FIXED
                                    }
                                    l._charDefs.push(new be({
                                        char: o,
                                        type: s,
                                        optional: u,
                                        stopAlign: f,
                                        unmasking: a,
                                        mask: s === be.TYPES.INPUT ? c[o] : function(e) {
                                            return e === o
                                        }
                                    })), f = !1, m = e
                                };
                            e: for (var m = 0; m < p.length; ++m) {
                                switch (e(m)) {
                                    case "continue":
                                        continue;
                                    case "break":
                                        break e
                                }
                            }
                        }
                    }
                }, {
                    key: "doValidate",
                    value: function() {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return this._groupDefs.every(function(e) {
                            return e.doValidate.apply(e, ae(n))
                        }) && (e = ne(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "doValidate", this)).call.apply(e, [this].concat(ae(n)))
                    }
                }, {
                    key: "clone",
                    value: function() {
                        var n = this,
                            e = new v(this);
                        return e._value = this.value, e._charDefs.forEach(function(e, t) {
                            return te(e, n._charDefs[t])
                        }), e._groupDefs.forEach(function(e, t) {
                            return te(e, n._groupDefs[t])
                        }), e
                    }
                }, {
                    key: "reset",
                    value: function() {
                        ne(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "reset", this).call(this), this._charDefs.forEach(function(e) {
                            delete e.isHollow
                        })
                    }
                }, {
                    key: "hiddenHollowsBefore",
                    value: function(e) {
                        return this._charDefs.slice(0, e).filter(function(e) {
                            return e.isHiddenHollow
                        }).length
                    }
                }, {
                    key: "mapDefIndexToPos",
                    value: function(e) {
                        return e - this.hiddenHollowsBefore(e)
                    }
                }, {
                    key: "mapPosToDefIndex",
                    value: function(e) {
                        for (var t = e, n = 0; n < this._charDefs.length; ++n) {
                            var r = this._charDefs[n];
                            if (t <= n) break;
                            r.isHiddenHollow && ++t
                        }
                        return t
                    }
                }, {
                    key: "_appendTail",
                    value: function(e) {
                        var t = new me;
                        return e && t.aggregate(e instanceof _e ? this._appendChunks(e.chunks, {
                            tail: !0
                        }) : ne(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "_appendTail", this).call(this, e)), t.aggregate(this._appendPlaceholder())
                    }
                }, {
                    key: "_append",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this.value.length,
                            r = "",
                            i = !1;
                        e = this.doPrepare(e, t);
                        for (var o = 0, s = this.mapPosToDefIndex(this.value.length); o < e.length;) {
                            var a = e[o],
                                u = this._charDefs[s];
                            if (null == u) {
                                i = !0;
                                break
                            }
                            u.isHollow = !1;
                            var l = void 0,
                                c = void 0,
                                p = le(u.resolve(a), a);
                            u.type === be.TYPES.INPUT ? (p && (this._value += p, this.doValidate() || (p = "", this._value = this.value.slice(0, -1))), l = !!p, c = !p && !u.optional, p ? r += p : (u.optional || t.input || this.lazy || (this._value += this.placeholderChar, c = !1), c || (u.isHollow = !0))) : (this._value += u.char, l = p && (u.unmasking || t.input || t.raw) && !t.tail, u.isRawInput = l && (t.raw || t.input), u.isRawInput && (r += u.char)), c || ++s, (l || c) && ++o
                        }
                        return new me({
                            inserted: this.value.slice(n),
                            rawInserted: r,
                            overflow: i
                        })
                    }
                }, {
                    key: "_appendChunks",
                    value: function(e) {
                        for (var t = new me, n = arguments.length, r = Array(1 < n ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                        for (var o = 0; o < e.length; ++o) {
                            var s = e[o],
                                a = s.stop,
                                u = s.value,
                                l = null != a && this._charDefs[a];
                            if (l && l.stopAlign && t.aggregate(this._appendPlaceholder(a)), t.aggregate(this._append.apply(this, [u].concat(ae(r)))).overflow) break
                        }
                        return t
                    }
                }, {
                    key: "_extractTail",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        return new _e(this._extractInputChunks(e, t))
                    }
                }, {
                    key: "extractInput",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        if (e === t) return "";
                        for (var r = this.value, i = "", o = this.mapPosToDefIndex(t), s = e, a = this.mapPosToDefIndex(e); s < t && s < r.length && a < o; ++a) {
                            var u = r[s],
                                l = this._charDefs[a];
                            if (!l) break;
                            l.isHiddenHollow || ((l.isInput && !l.isHollow || n.raw && !l.isInput && l.isRawInput) && (i += u), ++s)
                        }
                        return i
                    }
                }, {
                    key: "_extractInputChunks",
                    value: function() {
                        var n = this,
                            e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        if (e === t) return [];
                        var r = this.mapPosToDefIndex(e),
                            i = this.mapPosToDefIndex(t),
                            o = this._charDefs.map(function(e, t) {
                                return [e, t]
                            }).slice(r, i).filter(function(e) {
                                return se(e, 1)[0].stopAlign
                            }).map(function(e) {
                                return se(e, 2)[1]
                            }),
                            s = [r].concat(ae(o), [i]);
                        return s.map(function(e, t) {
                            return {
                                stop: 0 <= o.indexOf(e) ? e : null,
                                value: n.extractInput(n.mapDefIndexToPos(e), n.mapDefIndexToPos(s[++t]))
                            }
                        }).filter(function(e) {
                            var t = e.stop,
                                n = e.value;
                            return null != t || n
                        })
                    }
                }, {
                    key: "_appendPlaceholder",
                    value: function(e) {
                        for (var t = this.value.length, n = e || this._charDefs.length, r = this.mapPosToDefIndex(this.value.length); r < n; ++r) {
                            var i = this._charDefs[r];
                            i.isInput && (i.isHollow = !0), this.lazy && !e || (this._value += i.isInput || null == i.char ? i.optional ? "" : this.placeholderChar : i.char)
                        }
                        return new me({
                            inserted: this.value.slice(t)
                        })
                    }
                }, {
                    key: "remove",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length - e,
                            n = this.mapPosToDefIndex(e),
                            r = this.mapPosToDefIndex(e + t);
                        return this._charDefs.slice(n, r).forEach(function(e) {
                            return e.reset()
                        }), ne(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "remove", this).call(this, e, t)
                    }
                }, {
                    key: "nearestInputPos",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ce.NONE,
                            n = t || ce.RIGHT,
                            r = this.mapPosToDefIndex(e),
                            i = this._charDefs[r],
                            o = r,
                            s = void 0,
                            a = void 0,
                            u = void 0,
                            l = void 0;
                        if (t !== ce.RIGHT && (i && i.isInput || t === ce.NONE && e === this.value.length) && (s = r, i && !i.isHollow && (a = r)), null == a && t == ce.LEFT || null == s)
                            for (l = pe(o, n); 0 <= l && l < this._charDefs.length; o += n, l += n) {
                                var c = this._charDefs[l];
                                if (null == s && c.isInput && (s = o, t === ce.NONE)) break;
                                if (null == u && c.isHollow && !c.isHiddenHollow && (u = o), c.isInput && !c.isHollow) {
                                    a = o;
                                    break
                                }
                            }
                        if (t !== ce.LEFT || 0 !== o || !this.lazy || this.extractInput() || i && i.isInput || (s = 0), t === ce.LEFT || null == s) {
                            var p = !1;
                            for (l = pe(o, n = -n); 0 <= l && l < this._charDefs.length; o += n, l += n) {
                                var d = this._charDefs[l];
                                if (d.isInput && (s = o, d.isHollow && !d.isHiddenHollow)) break;
                                if (o === r && (p = !0), p && null != s) break
                            }(p = p || l >= this._charDefs.length) && null != s && (o = s)
                        } else null == a && (o = null != u ? u : s);
                        return this.mapDefIndexToPos(o)
                    }
                }, {
                    key: "group",
                    value: function(e) {
                        return this.groupsByName(e)[0]
                    }
                }, {
                    key: "groupsByName",
                    value: function(t) {
                        return this._groupDefs.filter(function(e) {
                            return e.name === t
                        })
                    }
                }, {
                    key: "isComplete",
                    get: function() {
                        var n = this;
                        return !this._charDefs.some(function(e, t) {
                            return e.isInput && !e.optional && (e.isHollow || !n.extractInput(t, t + 1))
                        })
                    }
                }, {
                    key: "unmaskedValue",
                    get: function() {
                        for (var e = this.value, t = "", n = 0, r = 0; n < e.length && r < this._charDefs.length; ++r) {
                            var i = e[n],
                                o = this._charDefs[r];
                            o.isHiddenHollow || (o.unmasking && !o.isHollow && (t += i), ++n)
                        }
                        return t
                    },
                    set: function(e) {
                        oe(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "unmaskedValue", e, this)
                    }
                }]), v
            }();
        Ee.DEFAULTS = {
            lazy: !0,
            placeholderChar: "_"
        }, Ee.STOP_CHAR = "`", Ee.ESCAPE_CHAR = "\\", Ee.Definition = be, Ee.Group = ke;
        var Ce = function(e) {
            function s(e) {
                return J(this, s), ie(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, te({}, s.DEFAULTS, e)))
            }
            return re(s, Ee), ee(s, [{
                key: "_update",
                value: function(e) {
                    e.mask === Date && delete e.mask, e.pattern && (e.mask = e.pattern, delete e.pattern);
                    var t = e.groups;
                    e.groups = te({}, s.GET_DEFAULT_GROUPS()), e.min && (e.groups.Y.from = e.min.getFullYear()), e.max && (e.groups.Y.to = e.max.getFullYear()), te(e.groups, t), ne(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "_update", this).call(this, e)
                }
            }, {
                key: "doValidate",
                value: function() {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var i = (e = ne(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "doValidate", this)).call.apply(e, [this].concat(ae(n))),
                        o = this.date;
                    return i && (!this.isComplete || this.isDateExist(this.value) && o && (null == this.min || this.min <= o) && (null == this.max || o <= this.max))
                }
            }, {
                key: "isDateExist",
                value: function(e) {
                    return this.format(this.parse(e)) === e
                }
            }, {
                key: "date",
                get: function() {
                    return this.isComplete ? this.parse(this.value) : null
                },
                set: function(e) {
                    this.value = this.format(e)
                }
            }]), s
        }();
        Ce.DEFAULTS = {
            pattern: "d{.}`m{.}`Y",
            format: function(e) {
                return [String(e.getDate()).padStart(2, "0"), String(e.getMonth() + 1).padStart(2, "0"), e.getFullYear()].join(".")
            },
            parse: function(e) {
                var t = e.split("."),
                    n = se(t, 3),
                    r = n[0],
                    i = n[1],
                    o = n[2];
                return new Date(o, i - 1, r)
            }
        }, Ce.GET_DEFAULT_GROUPS = function() {
            return {
                d: new ke.Range([1, 31]),
                m: new ke.Range([1, 12]),
                Y: new ke.Range([1900, 9999])
            }
        };
        var Ae = function() {
                function n(e, t) {
                    J(this, n), this.el = e, this.masked = ye(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange()
                }
                return ee(n, [{
                    key: "_bindEvents",
                    value: function() {
                        this.el.addEventListener("keydown", this._saveSelection), this.el.addEventListener("input", this._onInput), this.el.addEventListener("drop", this._onDrop), this.el.addEventListener("click", this.alignCursorFriendly), this.el.addEventListener("change", this._onChange)
                    }
                }, {
                    key: "_unbindEvents",
                    value: function() {
                        this.el.removeEventListener("keydown", this._saveSelection), this.el.removeEventListener("input", this._onInput), this.el.removeEventListener("drop", this._onDrop), this.el.removeEventListener("click", this.alignCursorFriendly), this.el.removeEventListener("change", this._onChange)
                    }
                }, {
                    key: "_fireEvent",
                    value: function(e) {
                        (this._listeners[e] || []).forEach(function(e) {
                            return e()
                        })
                    }
                }, {
                    key: "_saveSelection",
                    value: function() {
                        this.value !== this.el.value && console.warn("Uncontrolled input change, refresh mask manually!"), this._selection = {
                            start: this.selectionStart,
                            end: this.cursorPos
                        }
                    }
                }, {
                    key: "updateValue",
                    value: function() {
                        this.masked.value = this.el.value
                    }
                }, {
                    key: "updateControl",
                    value: function() {
                        var e = this.masked.unmaskedValue,
                            t = this.masked.value,
                            n = this.unmaskedValue !== e || this.value !== t;
                        this._unmaskedValue = e, this._value = t, this.el.value !== t && (this.el.value = t), n && this._fireChangeEvents()
                    }
                }, {
                    key: "updateOptions",
                    value: function(e) {
                        (e = te({}, e)).mask === Date && this.masked instanceof Ce && delete e.mask,
                            function e(t, n) {
                                if (n === t) return !0;
                                var r, i = Array.isArray(n),
                                    o = Array.isArray(t);
                                if (i && o) {
                                    if (n.length != t.length) return !1;
                                    for (r = 0; r < n.length; r++)
                                        if (!e(n[r], t[r])) return !1;
                                    return !0
                                }
                                if (i != o) return !1;
                                if (n && t && "object" === (void 0 === n ? "undefined" : K(n)) && "object" === (void 0 === t ? "undefined" : K(t))) {
                                    var s = Object.keys(n),
                                        a = n instanceof Date,
                                        u = t instanceof Date;
                                    if (a && u) return n.getTime() == t.getTime();
                                    if (a != u) return !1;
                                    var l = n instanceof RegExp,
                                        c = t instanceof RegExp;
                                    if (l && c) return n.toString() == t.toString();
                                    if (l != c) return !1;
                                    for (r = 0; r < s.length; r++)
                                        if (!Object.prototype.hasOwnProperty.call(t, s[r])) return !1;
                                    for (r = 0; r < s.length; r++)
                                        if (!e(n[s[r]], t[s[r]])) return !1;
                                    return !0
                                }
                                return !1
                            }(this.masked, e) || (this.masked.updateOptions(e), this.updateControl())
                    }
                }, {
                    key: "updateCursor",
                    value: function(e) {
                        null != e && (this.cursorPos = e, this._delayUpdateCursor(e))
                    }
                }, {
                    key: "_delayUpdateCursor",
                    value: function(e) {
                        var t = this;
                        this._abortUpdateCursor(), this._changingCursorPos = e, this._cursorChanging = setTimeout(function() {
                            t.el && (t.cursorPos = t._changingCursorPos, t._abortUpdateCursor())
                        }, 10)
                    }
                }, {
                    key: "_fireChangeEvents",
                    value: function() {
                        this._fireEvent("accept"), this.masked.isComplete && this._fireEvent("complete")
                    }
                }, {
                    key: "_abortUpdateCursor",
                    value: function() {
                        this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging)
                    }
                }, {
                    key: "alignCursor",
                    value: function() {
                        this.cursorPos = this.masked.nearestInputPos(this.cursorPos, ce.LEFT)
                    }
                }, {
                    key: "alignCursorFriendly",
                    value: function() {
                        this.selectionStart === this.cursorPos && this.alignCursor()
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        if (this._listeners[e]) {
                            if (t) {
                                var n = this._listeners[e].indexOf(t);
                                return 0 <= n && this._listeners[e].splice(n, 1), this
                            }
                            delete this._listeners[e]
                        }
                    }
                }, {
                    key: "_onInput",
                    value: function() {
                        this._abortUpdateCursor();
                        var e = new fe(this.el.value, this.cursorPos, this.value, this._selection),
                            t = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection).offset,
                            n = this.masked.nearestInputPos(e.startChangePos + t, e.removeDirection);
                        this.updateControl(), this.updateCursor(n)
                    }
                }, {
                    key: "_onChange",
                    value: function() {
                        this.value !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl()
                    }
                }, {
                    key: "_onDrop",
                    value: function(e) {
                        e.preventDefault(), e.stopPropagation()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._unbindEvents(), this._listeners.length = 0, delete this.el
                    }
                }, {
                    key: "mask",
                    get: function() {
                        return this.masked.mask
                    },
                    set: function(e) {
                        if (null != e && e !== this.masked.mask)
                            if (this.masked.constructor !== ge(e)) {
                                var t = ye({
                                    mask: e
                                });
                                t.unmaskedValue = this.masked.unmaskedValue, this.masked = t
                            } else this.masked.mask = e
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this._value
                    },
                    set: function(e) {
                        this.masked.value = e, this.updateControl(), this.alignCursor()
                    }
                }, {
                    key: "unmaskedValue",
                    get: function() {
                        return this._unmaskedValue
                    },
                    set: function(e) {
                        this.masked.unmaskedValue = e, this.updateControl(), this.alignCursor()
                    }
                }, {
                    key: "selectionStart",
                    get: function() {
                        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
                    }
                }, {
                    key: "cursorPos",
                    get: function() {
                        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
                    },
                    set: function(e) {
                        this.el === document.activeElement && (this.el.setSelectionRange(e, e), this._saveSelection())
                    }
                }]), n
            }(),
            xe = function(e) {
                function l(e) {
                    return J(this, l), ie(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, te({}, l.DEFAULTS, e)))
                }
                return re(l, ve), ee(l, [{
                    key: "_update",
                    value: function(e) {
                        ne(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "_update", this).call(this, e), this._updateRegExps()
                    }
                }, {
                    key: "_updateRegExps",
                    value: function() {
                        var e = "",
                            t = "";
                        this.allowNegative ? (e += "([+|\\-]?|([+|\\-]?(0|([1-9]+\\d*))))", t += "[+|\\-]?") : e += "(0|([1-9]+\\d*))", t += "\\d*";
                        var n = (this.scale ? "(" + this.radix + "\\d{0," + this.scale + "})?" : "") + "$";
                        this._numberRegExpInput = new RegExp("^" + e + n), this._numberRegExp = new RegExp("^" + t + n), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(de).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(de(this.thousandsSeparator), "g")
                    }
                }, {
                    key: "_extractTail",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                            n = ne(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "_extractTail", this).call(this, e, t);
                        return te({}, n, {
                            value: this._removeThousandsSeparators(n.value)
                        })
                    }
                }, {
                    key: "_removeThousandsSeparators",
                    value: function(e) {
                        return e.replace(this._thousandsSeparatorRegExp, "")
                    }
                }, {
                    key: "_insertThousandsSeparators",
                    value: function(e) {
                        var t = e.split(this.radix);
                        return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), t.join(this.radix)
                    }
                }, {
                    key: "doPrepare",
                    value: function(e) {
                        for (var t, n = arguments.length, r = Array(1 < n ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                        return (t = ne(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "doPrepare", this)).call.apply(t, [this, this._removeThousandsSeparators(e.replace(this._mapToRadixRegExp, this.radix))].concat(ae(r)))
                    }
                }, {
                    key: "appendWithTail",
                    value: function() {
                        var e, t = this.value;
                        this._value = this._removeThousandsSeparators(this.value);
                        for (var n = this.value.length, r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                        var s = (e = ne(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "appendWithTail", this)).call.apply(e, [this].concat(ae(i)));
                        this._value = this._insertThousandsSeparators(this.value);
                        for (var a = n + s.inserted.length, u = 0; u <= a; ++u) this.value[u] === this.thousandsSeparator && ((u < n || u === n && t[u] === this.thousandsSeparator) && ++n, u < a && ++a);
                        return s.rawInserted = s.inserted, s.inserted = this.value.slice(n, a), s.shift += n - t.length, s
                    }
                }, {
                    key: "nearestInputPos",
                    value: function(e, t) {
                        if (!t) return e;
                        var n = pe(e, t);
                        return this.value[n] === this.thousandsSeparator && (e += t), e
                    }
                }, {
                    key: "doValidate",
                    value: function(e) {
                        var t = (e.input ? this._numberRegExpInput : this._numberRegExp).test(this._removeThousandsSeparators(this.value));
                        if (t) {
                            var n = this.number;
                            t = t && !isNaN(n) && (null == this.min || 0 <= this.min || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max)
                        }
                        return t && ne(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "doValidate", this).call(this, e)
                    }
                }, {
                    key: "doCommit",
                    value: function() {
                        var e = this.number,
                            t = e;
                        null != this.min && (t = Math.max(t, this.min)), null != this.max && (t = Math.min(t, this.max)), t !== e && (this.unmaskedValue = String(t));
                        var n = this.value;
                        this.normalizeZeros && (n = this._normalizeZeros(n)), this.padFractionalZeros && (n = this._padFractionalZeros(n)), this._value = this._insertThousandsSeparators(n), ne(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "doCommit", this).call(this)
                    }
                }, {
                    key: "_normalizeZeros",
                    value: function(e) {
                        var t = this._removeThousandsSeparators(e).split(this.radix);
                        return t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, function(e, t, n, r) {
                            return t + r
                        }), e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + "0"), 1 < t.length && (t[1] = t[1].replace(/0*$/, ""), t[1].length || (t.length = 1)), this._insertThousandsSeparators(t.join(this.radix))
                    }
                }, {
                    key: "_padFractionalZeros",
                    value: function(e) {
                        if (!e) return e;
                        var t = e.split(this.radix);
                        return t.length < 2 && t.push(""), t[1] = t[1].padEnd(this.scale, "0"), t.join(this.radix)
                    }
                }, {
                    key: "unmaskedValue",
                    get: function() {
                        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".")
                    },
                    set: function(e) {
                        oe(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "unmaskedValue", e.replace(".", this.radix), this)
                    }
                }, {
                    key: "number",
                    get: function() {
                        return Number(this.unmaskedValue)
                    },
                    set: function(e) {
                        this.unmaskedValue = String(e)
                    }
                }, {
                    key: "allowNegative",
                    get: function() {
                        return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0
                    }
                }]), l
            }();
        xe.DEFAULTS = {
            radix: ",",
            thousandsSeparator: "",
            mapToRadix: ["."],
            scale: 2,
            signed: !1,
            normalizeZeros: !0,
            padFractionalZeros: !1
        };
        var Se = function(e) {
                function n() {
                    return J(this, n), ie(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                }
                return re(n, ve), ee(n, [{
                    key: "_update",
                    value: function(t) {
                        t.validate = function(e) {
                            return 0 <= e.search(t.mask)
                        }, ne(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "_update", this).call(this, t)
                    }
                }]), n
            }(),
            Fe = function(e) {
                function t() {
                    return J(this, t), ie(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return re(t, ve), ee(t, [{
                    key: "_update",
                    value: function(e) {
                        e.validate = e.mask, ne(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_update", this).call(this, e)
                    }
                }]), t
            }(),
            Te = function(e) {
                function o(e) {
                    J(this, o);
                    var t = ie(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, te({}, o.DEFAULTS, e)));
                    return t.currentMask = null, t
                }
                return re(o, ve), ee(o, [{
                    key: "_update",
                    value: function(e) {
                        ne(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "_update", this).call(this, e), this.compiledMasks = Array.isArray(e.mask) ? e.mask.map(function(e) {
                            return ye(e)
                        }) : []
                    }
                }, {
                    key: "_append",
                    value: function(e) {
                        for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        e = this.doPrepare.apply(this, [e].concat(ae(n)));
                        var i, o = this._applyDispatch.apply(this, [e].concat(ae(n)));
                        this.currentMask && o.aggregate((i = this.currentMask)._append.apply(i, [e].concat(ae(n))));
                        return o
                    }
                }, {
                    key: "_applyDispatch",
                    value: function() {
                        for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = this.value.length, n = this.rawInputValue, r = this.currentMask, i = new me, o = arguments.length, s = Array(1 < o ? o - 1 : 0), a = 1; a < o; a++) s[a - 1] = arguments[a];
                        return this.currentMask = this.doDispatch.apply(this, [e].concat(ae(s))), this.currentMask && this.currentMask !== r && (this.currentMask.reset(), this.currentMask._append(n, {
                            raw: !0
                        }), i.shift = this.value.length - t), i
                    }
                }, {
                    key: "doDispatch",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.dispatch(e, this, t)
                    }
                }, {
                    key: "clone",
                    value: function() {
                        var e = new o(this);
                        e._value = this.value;
                        var t = this.compiledMasks.indexOf(this.currentMask);
                        return this.currentMask && (e.currentMask = 0 <= t ? e.compiledMasks[t].assign(this.currentMask) : this.currentMask.clone()), e
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.currentMask && this.currentMask.reset(), this.compiledMasks.forEach(function(e) {
                            return e.reset()
                        })
                    }
                }, {
                    key: "remove",
                    value: function() {
                        var e, t = new me;
                        this.currentMask && t.aggregate((e = this.currentMask).remove.apply(e, arguments)).aggregate(this._applyDispatch());
                        return t
                    }
                }, {
                    key: "extractInput",
                    value: function() {
                        var e;
                        return this.currentMask ? (e = this.currentMask).extractInput.apply(e, arguments) : ""
                    }
                }, {
                    key: "_extractTail",
                    value: function() {
                        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return this.currentMask ? (e = this.currentMask)._extractTail.apply(e, ae(r)) : (t = ne(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "_extractTail", this)).call.apply(t, [this].concat(ae(r)))
                    }
                }, {
                    key: "_appendTail",
                    value: function(e) {
                        var t = new me;
                        return e && t.aggregate(this._applyDispatch(e.value)), t.aggregate(this.currentMask ? this.currentMask._appendTail(e) : ne(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "_appendTail", this).call(this, e))
                    }
                }, {
                    key: "doCommit",
                    value: function() {
                        this.currentMask && this.currentMask.doCommit(), ne(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "doCommit", this).call(this)
                    }
                }, {
                    key: "nearestInputPos",
                    value: function() {
                        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return this.currentMask ? (e = this.currentMask).nearestInputPos.apply(e, ae(r)) : (t = ne(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "nearestInputPos", this)).call.apply(t, [this].concat(ae(r)))
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this.currentMask ? this.currentMask.value : ""
                    },
                    set: function(e) {
                        oe(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "value", e, this)
                    }
                }, {
                    key: "unmaskedValue",
                    get: function() {
                        return this.currentMask ? this.currentMask.unmaskedValue : ""
                    },
                    set: function(e) {
                        oe(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "unmaskedValue", e, this)
                    }
                }, {
                    key: "isComplete",
                    get: function() {
                        return !!this.currentMask && this.currentMask.isComplete
                    }
                }]), o
            }();

        function Pe(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            return new Ae(e, t)
        }
        return Te.DEFAULTS = {
            dispatch: function(r, e, i) {
                if (e.compiledMasks.length) {
                    var o = e.rawInputValue,
                        t = e.compiledMasks.map(function(e, t) {
                            var n = e.clone();
                            return n.rawInputValue = o, n._append(r, i), {
                                value: n.rawInputValue.length,
                                index: t
                            }
                        });
                    return t.sort(function(e, t) {
                        return t.value - e.value
                    }), e.compiledMasks[t[0].index]
                }
            }
        }, Pe.InputMask = Ae, Pe.Masked = ve, Pe.MaskedPattern = Ee, Pe.MaskedNumber = xe, Pe.MaskedDate = Ce, Pe.MaskedRegExp = Se, Pe.MaskedFunction = Fe, Pe.MaskedDynamic = Te, Pe.createMask = ye, he.IMask = Pe
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(a) {
        "namespace sumo";
        a.fn.SumoSelect = function(e) {
            var s = a.extend({
                    placeholder: "Select Here",
                    csvDispCount: 3,
                    captionFormat: "{0} Selected",
                    captionFormatAllSelected: "{0} all selected!",
                    floatWidth: 400,
                    forceCustomRendering: !1,
                    nativeOnDevice: ["Android", "BlackBerry", "iPhone", "iPad", "iPod", "Opera Mini", "IEMobile", "Silk"],
                    outputAsCSV: !1,
                    csvSepChar: ",",
                    okCancelInMulti: !1,
                    isClickAwayOk: !1,
                    triggerChangeCombined: !0,
                    selectAll: !1,
                    search: !1,
                    searchText: "Search...",
                    noMatch: 'No matches for "{0}"',
                    prefix: "",
                    locale: ["OK", "Cancel", "Select All"],
                    up: !1,
                    showTitle: !0
                }, e),
                t = this.each(function() {
                    var o = this;
                    !this.sumo && a(this).is("select") && (this.sumo = {
                        E: a(o),
                        is_multi: a(o).attr("multiple"),
                        select: "",
                        caption: "",
                        placeholder: "",
                        optDiv: "",
                        CaptionCont: "",
                        ul: "",
                        is_floating: !1,
                        is_opened: !1,
                        mob: !1,
                        Pstate: [],
                        createElems: function() {
                            var e = this;
                            return e.E.wrap('<div class="SumoSelect" tabindex="0" role="button" aria-expanded="false">'), e.select = e.E.parent(), e.caption = a("<span>"), e.CaptionCont = a('<p class="CaptionCont SelectBox" ><label><i></i></label></p>').attr("style", e.E.attr("style")).prepend(e.caption), e.select.append(e.CaptionCont), e.is_multi || (s.okCancelInMulti = !1), e.E.attr("disabled") && e.select.addClass("disabled").removeAttr("tabindex"), s.outputAsCSV && e.is_multi && e.E.attr("name") && (e.select.append(a('<input class="HEMANT123" type="hidden" />').attr("name", e.E.attr("name")).val(e.getSelStr())), e.E.removeAttr("name")), e.isMobile() && !s.forceCustomRendering ? void e.setNativeMobile() : (e.E.attr("name") && e.select.addClass("sumo_" + e.E.attr("name").replace(/\[\]/, "")), e.E.addClass("SumoUnder").attr("tabindex", "-1"), e.optDiv = a('<div class="optWrapper ' + (s.up ? "up" : "") + '">'), e.floatingList(), e.ul = a('<ul class="options">'), e.optDiv.append(e.ul), s.selectAll && e.is_multi && e.SelAll(), s.search && e.Search(), e.ul.append(e.prepItems(e.E.children())), e.is_multi && e.multiSelelect(), e.select.append(e.optDiv), e.basicEvents(), void e.selAllState())
                        },
                        prepItems: function(e, n) {
                            var r = [],
                                i = this;
                            return a(e).each(function(e, t) {
                                t = a(t), r.push(t.is("optgroup") ? a('<li class="group ' + (t[0].disabled ? "disabled" : "") + '"><label>' + t.attr("label") + "</label><ul></ul></li>").find("ul").append(i.prepItems(t.children(), t[0].disabled)).end() : i.createLi(t, n))
                            }), r
                        },
                        createLi: function(e, t) {
                            e.attr("value") || e.attr("value", e.val());
                            var n = a('<li class="opt"><label>' + e.text() + "</label></li>");
                            return n.data("opt", e), e.data("li", n), this.is_multi && n.prepend("<span><i></i></span>"), (e[0].disabled || t) && (n = n.addClass("disabled")), this.onOptClick(n), e[0].selected && n.addClass("selected"), e.attr("class") && n.addClass(e.attr("class")), e.attr("title") && n.attr("title", e.attr("title")), n
                        },
                        getSelStr: function() {
                            return sopt = [], this.E.find("option:selected").each(function() {
                                sopt.push(a(this).val())
                            }), sopt.join(s.csvSepChar)
                        },
                        multiSelelect: function() {
                            var n = this;
                            n.optDiv.addClass("multiple"), n.okbtn = a('<p tabindex="0" class="btnOk">' + s.locale[0] + "</p>").click(function() {
                                n._okbtn(), n.hideOpts()
                            }), n.cancelBtn = a('<p tabindex="0" class="btnCancel">' + s.locale[1] + "</p>").click(function() {
                                n._cnbtn(), n.hideOpts()
                            });
                            var e = n.okbtn.add(n.cancelBtn);
                            n.optDiv.append(a('<div class="MultiControls">').append(e)), e.on("keydown.sumo", function(e) {
                                var t = a(this);
                                switch (e.which) {
                                    case 32:
                                    case 13:
                                        t.trigger("click");
                                        break;
                                    case 9:
                                        if (t.hasClass("btnOk")) return;
                                    case 27:
                                        return n._cnbtn(), void n.hideOpts()
                                }
                                e.stopPropagation(), e.preventDefault()
                            })
                        },
                        _okbtn: function() {
                            var n = this,
                                r = 0;
                            s.triggerChangeCombined && (n.E.find("option:selected").length != n.Pstate.length ? r = 1 : n.E.find("option").each(function(e, t) {
                                t.selected && n.Pstate.indexOf(e) < 0 && (r = 1)
                            }), r && (n.callChange(), n.setText()))
                        },
                        _cnbtn: function() {
                            var e = this;
                            e.E.find("option:selected").each(function() {
                                this.selected = !1
                            }), e.optDiv.find("li.selected").removeClass("selected");
                            for (var t = 0; t < e.Pstate.length; t++) e.E.find("option")[e.Pstate[t]].selected = !0, e.ul.find("li.opt").eq(e.Pstate[t]).addClass("selected");
                            e.selAllState()
                        },
                        SelAll: function() {
                            var e = this;
                            e.is_multi && (e.selAll = a('<p class="select-all"><span><i></i></span><label>' + s.locale[2] + "</label></p>"), e.optDiv.addClass("selall"), e.selAll.on("click", function() {
                                e.selAll.toggleClass("selected"), e.toggSelAll(e.selAll.hasClass("selected"), 1)
                            }), e.optDiv.prepend(e.selAll))
                        },
                        Search: function() {
                            var r = this,
                                e = r.CaptionCont.addClass("search"),
                                t = a('<p class="no-match">');
                            r.ftxt = a('<input type="text" class="search-txt" value="" placeholder="' + s.searchText + '">').on("click", function(e) {
                                e.stopPropagation()
                            }), e.append(r.ftxt), r.optDiv.children("ul").after(t), r.ftxt.on("keyup.sumo", function() {
                                var e = r.optDiv.find("ul.options li.opt").each(function(e, t) {
                                    var n = (t = a(t)).data("opt")[0];
                                    n.hidden = t.text().toLowerCase().indexOf(r.ftxt.val().toLowerCase()) < 0, t.toggleClass("hidden", n.hidden)
                                }).not(".hidden");
                                t.html(s.noMatch.replace(/\{0\}/g, "<em></em>")).toggle(!e.length), t.find("em").text(r.ftxt.val()), r.selAllState()
                            })
                        },
                        selAllState: function() {
                            var e = this;
                            if (s.selectAll && e.is_multi) {
                                var n = 0,
                                    r = 0;
                                e.optDiv.find("li.opt").not(".hidden").each(function(e, t) {
                                    a(t).hasClass("selected") && n++, a(t).hasClass("disabled") || r++
                                }), n == r ? e.selAll.removeClass("partial").addClass("selected") : 0 == n ? e.selAll.removeClass("selected partial") : e.selAll.addClass("partial")
                            }
                        },
                        showOpts: function() {
                            var t = this;
                            t.E.attr("disabled") || (t.E.trigger("sumo:opening", t), t.is_opened = !0, t.select.addClass("open").attr("aria-expanded", "true"), t.E.trigger("sumo:opened", t), t.ftxt ? t.ftxt.focus() : t.select.focus(), a(document).on("click.sumo", function(e) {
                                if (!t.select.is(e.target) && 0 === t.select.has(e.target).length) {
                                    if (!t.is_opened) return;
                                    t.hideOpts(), s.okCancelInMulti && (s.isClickAwayOk ? t._okbtn() : t._cnbtn())
                                }
                            }), t.is_floating && (H = t.optDiv.children("ul").outerHeight() + 2, t.is_multi && (H += parseInt(t.optDiv.css("padding-bottom"))), t.optDiv.css("height", H), a("body").addClass("sumoStopScroll")), t.setPstate())
                        },
                        setPstate: function() {
                            var n = this;
                            n.is_multi && (n.is_floating || s.okCancelInMulti) && (n.Pstate = [], n.E.find("option").each(function(e, t) {
                                t.selected && n.Pstate.push(e)
                            }))
                        },
                        callChange: function() {
                            this.E.trigger("change").trigger("click")
                        },
                        hideOpts: function() {
                            var e = this;
                            e.is_opened && (e.E.trigger("sumo:closing", e), e.is_opened = !1, e.select.removeClass("open").attr("aria-expanded", "true").find("ul li.sel").removeClass("sel"), e.E.trigger("sumo:closed", e), a(document).off("click.sumo"), e.select.focus(), a("body").removeClass("sumoStopScroll"), s.search && (e.ftxt.val(""), e.ftxt.trigger("keyup.sumo")))
                        },
                        setOnOpen: function() {
                            var e = this.optDiv.find("li.opt:not(.hidden)").eq(s.search ? 0 : this.E[0].selectedIndex);
                            e.hasClass("disabled") && !(e = e.next(":not(disabled)")).length || (this.optDiv.find("li.sel").removeClass("sel"), e.addClass("sel"), this.showOpts())
                        },
                        nav: function(e) {
                            var t, n = this,
                                r = n.ul.find("li.opt:not(.disabled, .hidden)"),
                                i = n.ul.find("li.opt.sel:not(.hidden)"),
                                o = r.index(i);
                            if (n.is_opened && i.length) {
                                if (e && 0 < o) t = r.eq(o - 1);
                                else {
                                    if (!(!e && o < r.length - 1 && -1 < o)) return;
                                    t = r.eq(o + 1)
                                }
                                i.removeClass("sel"), i = t.addClass("sel");
                                var s = n.ul,
                                    a = s.scrollTop(),
                                    u = i.position().top + a;
                                u >= a + s.height() - i.outerHeight() && s.scrollTop(u - s.height() + i.outerHeight()), u < a && s.scrollTop(u)
                            } else n.setOnOpen()
                        },
                        basicEvents: function() {
                            var t = this;
                            t.CaptionCont.click(function(e) {
                                t.E.trigger("click"), t.is_opened ? t.hideOpts() : t.showOpts(), e.stopPropagation()
                            }), t.select.on("keydown.sumo", function(e) {
                                switch (e.which) {
                                    case 38:
                                        t.nav(!0);
                                        break;
                                    case 40:
                                        t.nav(!1);
                                        break;
                                    case 65:
                                        if (t.is_multi && e.ctrlKey) {
                                            t.toggSelAll(!e.shiftKey, 1);
                                            break
                                        }
                                        return;
                                    case 32:
                                        if (s.search && t.ftxt.is(e.target)) return;
                                    case 13:
                                        t.is_opened ? t.optDiv.find("ul li.sel").trigger("click") : t.setOnOpen();
                                        break;
                                    case 9:
                                        return void(s.okCancelInMulti || t.hideOpts());
                                    case 27:
                                        return s.okCancelInMulti && t._cnbtn(), void t.hideOpts();
                                    default:
                                        return
                                }
                                e.preventDefault()
                            }), a(window).on("resize.sumo", function() {
                                t.floatingList()
                            })
                        },
                        onOptClick: function(e) {
                            var t = this;
                            e.click(function() {
                                var e = a(this);
                                e.hasClass("disabled") || (t.is_multi ? (e.toggleClass("selected"), e.data("opt")[0].selected = e.hasClass("selected"), t.selAllState()) : (e.parent().find("li.selected").removeClass("selected"), e.toggleClass("selected"), e.data("opt")[0].selected = !0), t.is_multi && s.triggerChangeCombined && (t.is_floating || s.okCancelInMulti) || (t.setText(), t.callChange()), t.is_multi || t.hideOpts())
                            })
                        },
                        setText: function() {
                            var e = this;
                            if (e.placeholder = "", e.is_multi) {
                                for (sels = e.E.find(":selected").not(":disabled"), i = 0; i < sels.length; i++) {
                                    if (i + 1 >= s.csvDispCount && s.csvDispCount) {
                                        sels.length == e.E.find("option").length && s.captionFormatAllSelected ? e.placeholder = s.captionFormatAllSelected.replace(/\{0\}/g, sels.length) + "," : e.placeholder = s.captionFormat.replace(/\{0\}/g, sels.length) + ",";
                                        break
                                    }
                                    e.placeholder += a(sels[i]).text() + ", "
                                }
                                e.placeholder = e.placeholder.replace(/,([^,]*)$/, "$1")
                            } else e.placeholder = e.E.find(":selected").not(":disabled").text();
                            var t = !1;
                            e.placeholder || (t = !0, e.placeholder = e.E.attr("placeholder"), e.placeholder || (e.placeholder = e.E.find("option:disabled:selected").text())), e.placeholder = e.placeholder ? s.prefix + " " + e.placeholder : s.placeholder, e.caption.html(e.placeholder), s.showTitle && e.CaptionCont.attr("title", e.placeholder);
                            var n = e.select.find("input.HEMANT123");
                            return n.length && n.val(e.getSelStr()), t ? e.caption.addClass("placeholder") : e.caption.removeClass("placeholder"), e.placeholder
                        },
                        isMobile: function() {
                            for (var e = navigator.userAgent || navigator.vendor || window.opera, t = 0; t < s.nativeOnDevice.length; t++)
                                if (0 < e.toString().toLowerCase().indexOf(s.nativeOnDevice[t].toLowerCase())) return s.nativeOnDevice[t];
                            return !1
                        },
                        setNativeMobile: function() {
                            var e = this;
                            e.E.addClass("SelectClass"), e.mob = !0, e.E.change(function() {
                                e.setText()
                            })
                        },
                        floatingList: function() {
                            var e = this;
                            e.is_floating = a(window).width() <= s.floatWidth, e.optDiv.toggleClass("isFloating", e.is_floating), e.is_floating || e.optDiv.css("height", ""), e.optDiv.toggleClass("okCancelInMulti", s.okCancelInMulti && !e.is_floating)
                        },
                        vRange: function(e) {
                            if (this.E.find("option").length <= e || e < 0) throw "index out of bounds";
                            return this
                        },
                        toggSel: function(e, t) {
                            var n, r = this;
                            "number" == typeof t ? (r.vRange(t), n = r.E.find("option")[t]) : n = r.E.find('option[value="' + t + '"]')[0] || 0, n && !n.disabled && n.selected != e && (n.selected = e, r.mob || a(n).data("li").toggleClass("selected", e), r.callChange(), r.setPstate(), r.setText(), r.selAllState())
                        },
                        toggDis: function(e, t) {
                            var n = this.vRange(t);
                            (n.E.find("option")[t].disabled = e) && (n.E.find("option")[t].selected = !1), n.mob || n.optDiv.find("ul.options li").eq(t).toggleClass("disabled", e).removeClass("selected"), n.setText()
                        },
                        toggSumo: function(e) {
                            var t = this;
                            return t.enabled = e, t.select.toggleClass("disabled", e), e ? (t.E.attr("disabled", "disabled"), t.select.removeAttr("tabindex")) : (t.E.removeAttr("disabled"), t.select.attr("tabindex", "0")), t
                        },
                        toggSelAll: function(r, e) {
                            var t = this;
                            t.E.find("option:not(:disabled,:hidden)").each(function(e, t) {
                                var n = t.selected;
                                (t = a(t).data("li")).hasClass("hidden") || (r ? n || t.trigger("click") : n && t.trigger("click"))
                            }), e || (!t.mob && t.selAll && t.selAll.removeClass("partial").toggleClass("selected", !!r), t.callChange(), t.setText(), t.setPstate())
                        },
                        reload: function() {
                            var e = this.unload();
                            return a(e).SumoSelect(s)
                        },
                        unload: function() {
                            var e = this;
                            return e.select.before(e.E), e.E.show(), s.outputAsCSV && e.is_multi && e.select.find("input.HEMANT123").length && e.E.attr("name", e.select.find("input.HEMANT123").attr("name")), e.select.remove(), delete o.sumo, o
                        },
                        add: function(e, t, n) {
                            if (void 0 === e) throw "No value to add";
                            var r = this;
                            if (opts = r.E.find("option"), "number" == typeof t && (n = t, t = e), void 0 === t && (t = e), opt = a("<option></option>").val(e).html(t), opts.length < n) throw "index out of bounds";
                            return void 0 === n || opts.length == n ? (r.E.append(opt), r.mob || r.ul.append(r.createLi(opt))) : (opts.eq(n).before(opt), r.mob || r.ul.find("li.opt").eq(n).before(r.createLi(opt))), o
                        },
                        remove: function(e) {
                            var t = this.vRange(e);
                            t.E.find("option").eq(e).remove(), t.mob || t.optDiv.find("ul.options li").eq(e).remove(), t.setText()
                        },
                        selectItem: function(e) {
                            this.toggSel(!0, e)
                        },
                        unSelectItem: function(e) {
                            this.toggSel(!1, e)
                        },
                        selectAll: function() {
                            this.toggSelAll(!0)
                        },
                        unSelectAll: function() {
                            this.toggSelAll(!1)
                        },
                        disableItem: function(e) {
                            this.toggDis(!0, e)
                        },
                        enableItem: function(e) {
                            this.toggDis(!1, e)
                        },
                        enabled: !0,
                        enable: function() {
                            return this.toggSumo(!1)
                        },
                        disable: function() {
                            return this.toggSumo(!0)
                        },
                        init: function() {
                            return this.createElems(), this.setText(), this
                        }
                    }, o.sumo.init())
                });
            return 1 == t.length ? t[0] : t
        }
    }),
    function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, document) : "function" == typeof define && define.amd ? define([], function() {
            return t(e, document)
        }) : e.plyr = t(e, document)
    }("undefined" != typeof window ? window : this, function(ne, re) {
        "use strict";

        function ie() {
            var e, t, n, r = navigator.userAgent,
                i = navigator.appName,
                o = "" + parseFloat(navigator.appVersion),
                s = parseInt(navigator.appVersion, 10),
                a = !1,
                u = !1,
                l = !1,
                c = !1;
            return -1 !== navigator.appVersion.indexOf("Windows NT") && -1 !== navigator.appVersion.indexOf("rv:11") ? (a = !0, i = "IE", o = "11") : -1 !== (t = r.indexOf("MSIE")) ? (a = !0, i = "IE", o = r.substring(t + 5)) : -1 !== (t = r.indexOf("Chrome")) ? (l = !0, i = "Chrome", o = r.substring(t + 7)) : -1 !== (t = r.indexOf("Safari")) ? (c = !0, i = "Safari", o = r.substring(t + 7), -1 !== (t = r.indexOf("Version")) && (o = r.substring(t + 8))) : -1 !== (t = r.indexOf("Firefox")) ? (u = !0, i = "Firefox", o = r.substring(t + 8)) : (e = r.lastIndexOf(" ") + 1) < (t = r.lastIndexOf("/")) && (i = r.substring(e, t), o = r.substring(t + 1), i.toLowerCase() === i.toUpperCase() && (i = navigator.appName)), -1 !== (n = o.indexOf(";")) && (o = o.substring(0, n)), -1 !== (n = o.indexOf(" ")) && (o = o.substring(0, n)), s = parseInt("" + o, 10), isNaN(s) && (o = "" + parseFloat(navigator.appVersion), s = parseInt(navigator.appVersion, 10)), {
                name: i,
                version: s,
                isIE: a,
                isFirefox: u,
                isChrome: l,
                isSafari: c,
                isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
                isIphone: /(iPhone|iPod)/g.test(navigator.userAgent),
                isTouch: "ontouchstart" in re.documentElement
            }
        }

        function oe(e) {
            if (!re.querySelectorAll('script[src="' + e + '"]').length) {
                var t = re.createElement("script");
                t.src = e;
                var n = re.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(t, n)
            }
        }

        function se(e, t) {
            return Array.prototype.indexOf && -1 !== e.indexOf(t)
        }

        function ae(e, t, n) {
            return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), n)
        }

        function ue(e, t) {
            e.length || (e = [e]);
            for (var n = e.length - 1; 0 <= n; n--) {
                var r = 0 < n ? t.cloneNode(!0) : t,
                    i = e[n],
                    o = i.parentNode,
                    s = i.nextSibling;
                return r.appendChild(i), s ? o.insertBefore(r, s) : o.appendChild(r), r
            }
        }

        function le(e) {
            e && e.parentNode.removeChild(e)
        }

        function ce(e, t) {
            e.insertBefore(t, e.firstChild)
        }

        function pe(e, t) {
            for (var n in t) e.setAttribute(n, Fe.boolean(t[n]) && t[n] ? "" : t[n])
        }

        function de(e, t, n) {
            var r = re.createElement(e);
            pe(r, n), ce(t, r)
        }

        function he(e, t, n) {
            if (e)
                if (e.classList) e.classList[n ? "add" : "remove"](t);
                else {
                    var r = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                    e.className = r + (n ? " " + t : "")
                }
        }

        function fe(e, t) {
            return !!e && (e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className))
        }

        function me(e, t) {
            var n = Element.prototype;
            return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function(e) {
                return -1 !== [].indexOf.call(re.querySelectorAll(e), this)
            }).call(e, t)
        }

        function ve(t, e, n, r, i) {
            ge(t, e, function(e) {
                n && n.apply(t, [e]), r.apply(t, [e])
            }, i)
        }

        function ge(e, t, n, r) {
            e && function e(t, n, r, i, o) {
                var s = n.split(" ");
                if (Fe.boolean(o) || (o = !1), t instanceof NodeList)
                    for (var a = 0; a < t.length; a++) t[a] instanceof Node && e(t[a], n, r, i);
                else
                    for (var u = 0; u < s.length; u++) t[i ? "addEventListener" : "removeEventListener"](s[u], r, o)
            }(e, t, n, !0, r)
        }

        function ye(e, t, n, r) {
            if (e && t) {
                Fe.boolean(n) || (n = !1);
                var i = new CustomEvent(t, {
                    bubbles: n,
                    detail: r
                });
                e.dispatchEvent(i)
            }
        }

        function be(e, t) {
            if (e) return t = Fe.boolean(t) ? t : !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t
        }

        function ke(e, t) {
            return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
        }

        function we() {
            var e = arguments;
            if (e.length) {
                if (1 === e.length) return e[0];
                for (var t = Array.prototype.shift.call(e), n = e.length, r = 0; r < n; r++) {
                    var i = e[r];
                    for (var o in i) i[o] && i[o].constructor && i[o].constructor === Object ? (t[o] = t[o] || {}, we(t[o], i[o])) : t[o] = i[o]
                }
                return t
            }
        }

        function c(n, c) {
            function p(e, t, n, r) {
                ye(e, t, n, we({}, r, {
                    plyr: Z
                }))
            }

            function e(e, t) {
                c.debug && ne.console && (t = Array.prototype.slice.call(t), Fe.string(c.logPrefix) && c.logPrefix.length && t.unshift(c.logPrefix), console[e].apply(console, t))
            }

            function l() {
                return {
                    url: c.iconUrl,
                    absolute: 0 === c.iconUrl.indexOf("http") || Q.browser.isIE
                }
            }

            function t() {
                if (Q.supported.full && ("audio" !== Q.type || c.fullscreen.allowAudio) && c.fullscreen.enabled) {
                    var e = Ae.supportsFullScreen;
                    e || c.fullscreen.fallback && ! function() {
                        try {
                            return ne.self !== ne.top
                        } catch (e) {
                            return !0
                        }
                    }() ? (ee((e ? "Native" : "Fallback") + " fullscreen enabled"), e || he(Q.container, c.classes.fullscreen.fallback, !0), he(Q.container, c.classes.fullscreen.enabled, !0)) : ee("Fullscreen not supported and fallback disabled"), Q.buttons && Q.buttons.fullscreen && be(Q.buttons.fullscreen, !1), o()
                }
            }

            function r() {
                if ("video" === Q.type) {
                    f(c.selectors.captions) || Q.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + c.selectors.captions.replace(".", "") + '"></div>'), Q.usingTextTracks = !1, Q.media.textTracks && (Q.usingTextTracks = !0);
                    for (var e, t = "", n = Q.media.childNodes, r = 0; r < n.length; r++) "track" === n[r].nodeName.toLowerCase() && ("captions" !== (e = n[r].kind) && "subtitles" !== e || (t = n[r].getAttribute("src")));
                    if (Q.captionExists = !0, "" === t ? (Q.captionExists = !1, ee("No caption track found")) : ee("Caption track found; URI: " + t), Q.captionExists) {
                        for (var i = Q.media.textTracks, o = 0; o < i.length; o++) i[o].mode = "hidden";
                        if (function() {
                                if (Q.buttons.captions) {
                                    he(Q.container, c.classes.captions.enabled, !0);
                                    var e = Q.storage.captionsEnabled;
                                    Fe.boolean(e) || (e = c.captions.defaultActive), e && (he(Q.container, c.classes.captions.active, !0), be(Q.buttons.captions, !0))
                                }
                            }(), (Q.browser.isIE && 10 <= Q.browser.version || Q.browser.isFirefox && 31 <= Q.browser.version) && (ee("Detected browser with known TextTrack issues - using manual fallback"), Q.usingTextTracks = !1), Q.usingTextTracks) {
                            ee("TextTracks supported");
                            for (var s = 0; s < i.length; s++) {
                                var a = i[s];
                                "captions" !== a.kind && "subtitles" !== a.kind || ge(a, "cuechange", function() {
                                    this.activeCues[0] && "text" in this.activeCues[0] ? d(this.activeCues[0].getCueAsHTML()) : d()
                                })
                            }
                        } else if (ee("TextTracks not supported so rendering captions manually"), Q.currentCaption = "", Q.captions = [], "" !== t) {
                            var u = new XMLHttpRequest;
                            u.onreadystatechange = function() {
                                if (4 === u.readyState)
                                    if (200 === u.status) {
                                        var e, t, n = u.responseText,
                                            r = "\r\n"; - 1 === n.indexOf(r + r) && (r = -1 !== n.indexOf("\r\r") ? "\r" : "\n"), t = n.split(r + r);
                                        for (var i = 0; i < t.length; i++) {
                                            e = t[i], Q.captions[i] = [];
                                            var o = e.split(r),
                                                s = 0; - 1 === o[s].indexOf(":") && (s = 1), Q.captions[i] = [o[s], o[s + 1]]
                                        }
                                        Q.captions.shift(), ee("Successfully loaded the caption file via AJAX")
                                    } else te(c.logPrefix + "There was a problem loading the caption file via AJAX")
                            }, u.open("get", t, !0), u.send()
                        }
                    } else he(Q.container, c.classes.captions.enabled)
                }
            }

            function d(e) {
                var t = f(c.selectors.captions),
                    n = re.createElement("span");
                t.innerHTML = "", Fe.undefined(e) && (e = ""), Fe.string(e) ? n.innerHTML = e.trim() : n.appendChild(e), t.appendChild(n), t.offsetHeight
            }

            function i(e) {
                function t(e, t) {
                    var n = [];
                    n = e.split(" --\x3e ");
                    for (var r = 0; r < n.length; r++) n[r] = n[r].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                    return function(e) {
                        if (null == e) return 0;
                        var t = [],
                            n = [];
                        return t = e.split(","), n = t[0].split(":"), Math.floor(60 * n[0] * 60) + Math.floor(60 * n[1]) + Math.floor(n[2])
                    }(n[t])
                }

                function n(e) {
                    return t(e, 1)
                }
                if (!Q.usingTextTracks && "video" === Q.type && Q.supported.full && (Q.subcount = 0, e = Fe.number(e) ? e : Q.media.currentTime, Q.captions[Q.subcount])) {
                    for (; n(Q.captions[Q.subcount][0]) < e.toFixed(1);)
                        if (Q.subcount++, Q.subcount > Q.captions.length - 1) {
                            Q.subcount = Q.captions.length - 1;
                            break
                        } Q.media.currentTime.toFixed(1) >= t(Q.captions[Q.subcount][0], 0) && Q.media.currentTime.toFixed(1) <= n(Q.captions[Q.subcount][0]) ? (Q.currentCaption = Q.captions[Q.subcount][1], d(Q.currentCaption)) : d()
                }
            }

            function h(e) {
                return Q.container.querySelectorAll(e)
            }

            function f(e) {
                return h(e)[0]
            }

            function o() {
                var e = h("input:not([disabled]), button:not([disabled])"),
                    t = e[0],
                    n = e[e.length - 1];
                ge(Q.container, "keydown", function(e) {
                    9 === e.which && Q.isFullscreen && (e.target !== n || e.shiftKey ? e.target === t && e.shiftKey && (e.preventDefault(), n.focus()) : (e.preventDefault(), t.focus()))
                })
            }

            function s(e, t) {
                if (Fe.string(t)) de(e, Q.media, {
                    src: t
                });
                else if (t.constructor === Array)
                    for (var n = t.length - 1; 0 <= n; n--) de(e, Q.media, t[n])
            }

            function a() {
                if (c.loadSprite) {
                    var e = l();
                    e.absolute ? (ee("AJAX loading absolute SVG sprite" + (Q.browser.isIE ? " (due to IE)" : "")), _e(e.url, "sprite-plyr")) : ee("Sprite will be used as external resource directly")
                }
                var t, n, r, i, o = c.html;
                if (ee("Injecting custom controls"), o || (t = [], n = l(), r = (n.absolute ? "" : n.url) + "#" + c.iconPrefix, se(c.controls, "play-large") && t.push('<button type="button" data-plyr="play" class="plyr__play-large">', '<svg><use xlink:href="' + r + '-play" /></svg>', '<span class="plyr__sr-only">' + c.i18n.play + "</span>", "</button>"), t.push('<div class="plyr__controls">'), se(c.controls, "restart") && t.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + r + '-restart" /></svg>', '<span class="plyr__sr-only">' + c.i18n.restart + "</span>", "</button>"), se(c.controls, "rewind") && t.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + r + '-rewind" /></svg>', '<span class="plyr__sr-only">' + c.i18n.rewind + "</span>", "</button>"), se(c.controls, "play") && t.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + r + '-play" /></svg>', '<span class="plyr__sr-only">' + c.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + r + '-pause" /></svg>', '<span class="plyr__sr-only">' + c.i18n.pause + "</span>", "</button>"), se(c.controls, "fast-forward") && t.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + r + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + c.i18n.forward + "</span>", "</button>"), se(c.controls, "progress") && (t.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + c.i18n.buffered, "</progress>"), c.tooltips.seek && t.push('<span class="plyr__tooltip">00:00</span>'), t.push("</span>")), se(c.controls, "current-time") && t.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + c.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"), se(c.controls, "duration") && t.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + c.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"), se(c.controls, "mute") && t.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + r + '-muted" /></svg>', '<svg><use xlink:href="' + r + '-volume" /></svg>', '<span class="plyr__sr-only">' + c.i18n.toggleMute + "</span>", "</button>"), se(c.controls, "volume") && t.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + c.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + c.volumeMin + '" max="' + c.volumeMax + '" value="' + c.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + c.volumeMax + '" value="' + c.volumeMin + '" role="presentation"></progress>', "</span>"), se(c.controls, "captions") && t.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + r + '-captions-on" /></svg>', '<svg><use xlink:href="' + r + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + c.i18n.toggleCaptions + "</span>", "</button>"), se(c.controls, "fullscreen") && t.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + r + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + r + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + c.i18n.toggleFullscreen + "</span>", "</button>"), t.push("</div>"), o = t.join("")), o = ae(o = ae(o, "{seektime}", c.seekTime), "{id}", Math.floor(1e4 * Math.random())), Fe.string(c.selectors.controls.container) && (i = re.querySelector(c.selectors.controls.container)), Fe.htmlElement(i) || (i = Q.container), i.insertAdjacentHTML("beforeend", o), c.tooltips.controls)
                    for (var s = h([c.selectors.controls.wrapper, " ", c.selectors.labels, " .", c.classes.hidden].join("")), a = s.length - 1; 0 <= a; a--) {
                        var u = s[a];
                        he(u, c.classes.hidden, !1), he(u, c.classes.tooltip, !0)
                    }
            }

            function u() {
                he(Q.container, c.selectors.container.replace(".", ""), Q.supported.full)
            }

            function m(e) {
                e && se(c.types.html5, Q.type) ? Q.media.setAttribute("controls", "") : Q.media.removeAttribute("controls")
            }

            function v(e) {
                var t = c.i18n.play;
                if (Fe.string(c.title) && c.title.length && (t += ", " + c.title, Q.container.setAttribute("aria-label", c.title)), Q.supported.full && Q.buttons.play)
                    for (var n = Q.buttons.play.length - 1; 0 <= n; n--) Q.buttons.play[n].setAttribute("aria-label", t);
                Fe.htmlElement(e) && e.setAttribute("title", c.i18n.frameTitle.replace("{title}", c.title))
            }

            function g(e) {
                Te.supported && c.storage.enabled && (we(Q.storage, e), ne.localStorage.setItem(c.storage.key, JSON.stringify(Q.storage)))
            }

            function y() {
                if (Q.media) {
                    if (Q.supported.full && (he(Q.container, c.classes.type.replace("{0}", Q.type), !0), se(c.types.embed, Q.type) && he(Q.container, c.classes.type.replace("{0}", "video"), !0), he(Q.container, c.classes.stopped, c.autoplay), he(Q.container, c.classes.isIos, Q.browser.isIos), he(Q.container, c.classes.isTouch, Q.browser.isTouch), "video" === Q.type)) {
                        var e = re.createElement("div");
                        e.setAttribute("class", c.classes.videoWrapper), ue(Q.media, e), Q.videoContainer = e
                    }
                    se(c.types.embed, Q.type) && function() {
                        var e, t = re.createElement("div"),
                            n = Q.type + "-" + Math.floor(1e4 * Math.random());
                        switch (Q.type) {
                            case "youtube":
                                i = Q.embedId, e = i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/) ? RegExp.$2 : i;
                                break;
                            case "vimeo":
                                r = Q.embedId, e = r.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : r;
                                break;
                            default:
                                e = Q.embedId
                        }
                        var r;
                        var i;
                        for (var o = h('[id^="' + Q.type + '-"]'), s = o.length - 1; 0 <= s; s--) le(o[s]);
                        if (he(Q.media, c.classes.videoWrapper, !0), he(Q.media, c.classes.embedWrapper, !0), "youtube" === Q.type) Q.media.appendChild(t), t.setAttribute("id", n), Fe.object(ne.YT) ? k(e, t) : (oe(c.urls.youtube.api), ne.onYouTubeReadyCallbacks = ne.onYouTubeReadyCallbacks || [], ne.onYouTubeReadyCallbacks.push(function() {
                            k(e, t)
                        }), ne.onYouTubeIframeAPIReady = function() {
                            ne.onYouTubeReadyCallbacks.forEach(function(e) {
                                e()
                            })
                        });
                        else if ("vimeo" === Q.type)
                            if (Q.supported.full ? Q.media.appendChild(t) : t = Q.media, t.setAttribute("id", n), Fe.object(ne.Vimeo)) w(e, t);
                            else {
                                oe(c.urls.vimeo.api);
                                var a = ne.setInterval(function() {
                                    Fe.object(ne.Vimeo) && (ne.clearInterval(a), w(e, t))
                                }, 50)
                            }
                        else if ("soundcloud" === Q.type) {
                            var u = re.createElement("iframe");
                            u.loaded = !1, ge(u, "load", function() {
                                u.loaded = !0
                            }), pe(u, {
                                src: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + e,
                                id: n
                            }), t.appendChild(u), Q.media.appendChild(t), ne.SC || oe(c.urls.soundcloud.api);
                            var l = ne.setInterval(function() {
                                ne.SC && u.loaded && (ne.clearInterval(l), function() {
                                    Q.embed = ne.SC.Widget(this), Q.embed.bind(ne.SC.Widget.Events.READY, function() {
                                        Q.media.play = function() {
                                            Q.embed.play(), Q.media.paused = !1
                                        }, Q.media.pause = function() {
                                            Q.embed.pause(), Q.media.paused = !0
                                        }, Q.media.stop = function() {
                                            Q.embed.seekTo(0), Q.embed.pause(), Q.media.paused = !0
                                        }, Q.media.paused = !0, Q.media.currentTime = 0, Q.embed.getDuration(function(e) {
                                            Q.media.duration = e / 1e3, b()
                                        }), Q.embed.getPosition(function(e) {
                                            Q.media.currentTime = e, p(Q.media, "timeupdate")
                                        }), Q.embed.bind(ne.SC.Widget.Events.PLAY, function() {
                                            Q.media.paused = !1, p(Q.media, "play"), p(Q.media, "playing")
                                        }), Q.embed.bind(ne.SC.Widget.Events.PAUSE, function() {
                                            Q.media.paused = !0, p(Q.media, "pause")
                                        }), Q.embed.bind(ne.SC.Widget.Events.PLAY_PROGRESS, function(e) {
                                            Q.media.seeking = !1, Q.media.currentTime = e.currentPosition / 1e3, p(Q.media, "timeupdate")
                                        }), Q.embed.bind(ne.SC.Widget.Events.LOAD_PROGRESS, function(e) {
                                            Q.media.buffered = e.loadProgress, p(Q.media, "progress"), 1 === parseInt(e.loadProgress) && p(Q.media, "canplaythrough")
                                        }), Q.embed.bind(ne.SC.Widget.Events.FINISH, function() {
                                            Q.media.paused = !0, p(Q.media, "ended")
                                        })
                                    })
                                }.call(u))
                            }, 50)
                        }
                    }()
                } else te("No media element found!")
            }

            function b() {
                Q.supported.full && (W(), G()), v(f("iframe"))
            }

            function k(e, t) {
                Q.embed = new ne.YT.Player(t.id, {
                    videoId: e,
                    playerVars: {
                        autoplay: c.autoplay ? 1 : 0,
                        controls: Q.supported.full ? 0 : 1,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        cc_load_policy: c.captions.defaultActive ? 1 : 0,
                        cc_lang_pref: "en",
                        wmode: "transparent",
                        modestbranding: 1,
                        disablekb: 1,
                        origin: "*"
                    },
                    events: {
                        onError: function(e) {
                            p(Q.container, "error", !0, {
                                code: e.data,
                                embed: e.target
                            })
                        },
                        onReady: function(e) {
                            var t = e.target;
                            Q.media.play = function() {
                                t.playVideo(), Q.media.paused = !1
                            }, Q.media.pause = function() {
                                t.pauseVideo(), Q.media.paused = !0
                            }, Q.media.stop = function() {
                                t.stopVideo(), Q.media.paused = !0
                            }, Q.media.duration = t.getDuration(), Q.media.paused = !0, Q.media.currentTime = 0, Q.media.muted = t.isMuted(), c.title = t.getVideoData().title, Q.supported.full && Q.media.querySelector("iframe").setAttribute("tabindex", "-1"), b(), p(Q.media, "timeupdate"), p(Q.media, "durationchange"), ne.clearInterval(K.buffering), K.buffering = ne.setInterval(function() {
                                Q.media.buffered = t.getVideoLoadedFraction(), (null === Q.media.lastBuffered || Q.media.lastBuffered < Q.media.buffered) && p(Q.media, "progress"), Q.media.lastBuffered = Q.media.buffered, 1 === Q.media.buffered && (ne.clearInterval(K.buffering), p(Q.media, "canplaythrough"))
                            }, 200)
                        },
                        onStateChange: function(e) {
                            var t = e.target;
                            switch (ne.clearInterval(K.playing), e.data) {
                                case 0:
                                    Q.media.paused = !0, p(Q.media, "ended");
                                    break;
                                case 1:
                                    Q.media.paused = !1, Q.media.seeking && p(Q.media, "seeked"), Q.media.seeking = !1, p(Q.media, "play"), p(Q.media, "playing"), K.playing = ne.setInterval(function() {
                                        Q.media.currentTime = t.getCurrentTime(), p(Q.media, "timeupdate")
                                    }, 100), Q.media.duration !== t.getDuration() && (Q.media.duration = t.getDuration(), p(Q.media, "durationchange"));
                                    break;
                                case 2:
                                    Q.media.paused = !0, p(Q.media, "pause")
                            }
                            p(Q.container, "statechange", !1, {
                                code: e.data
                            })
                        }
                    }
                })
            }

            function w(e, t) {
                Q.embed = new ne.Vimeo.Player(t, {
                    id: parseInt(e),
                    loop: c.loop,
                    autoplay: c.autoplay,
                    byline: !1,
                    portrait: !1,
                    title: !1
                }), Q.media.play = function() {
                    Q.embed.play(), Q.media.paused = !1
                }, Q.media.pause = function() {
                    Q.embed.pause(), Q.media.paused = !0
                }, Q.media.stop = function() {
                    Q.embed.stop(), Q.media.paused = !0
                }, Q.media.paused = !0, Q.media.currentTime = 0, b(), Q.embed.getCurrentTime().then(function(e) {
                    Q.media.currentTime = e, p(Q.media, "timeupdate")
                }), Q.embed.getDuration().then(function(e) {
                    Q.media.duration = e, p(Q.media, "durationchange")
                }), Q.embed.on("loaded", function() {
                    Fe.htmlElement(Q.embed.element) && Q.supported.full && Q.embed.element.setAttribute("tabindex", "-1")
                }), Q.embed.on("play", function() {
                    Q.media.paused = !1, p(Q.media, "play"), p(Q.media, "playing")
                }), Q.embed.on("pause", function() {
                    Q.media.paused = !0, p(Q.media, "pause")
                }), Q.embed.on("timeupdate", function(e) {
                    Q.media.seeking = !1, Q.media.currentTime = e.seconds, p(Q.media, "timeupdate")
                }), Q.embed.on("progress", function(e) {
                    Q.media.buffered = e.percent, p(Q.media, "progress"), 1 === parseInt(e.percent) && p(Q.media, "canplaythrough")
                }), Q.embed.on("seeked", function() {
                    Q.media.seeking = !1, p(Q.media, "seeked"), p(Q.media, "play")
                }), Q.embed.on("ended", function() {
                    Q.media.paused = !0, p(Q.media, "ended")
                })
            }

            function _() {
                "play" in Q.media && Q.media.play()
            }

            function E() {
                "pause" in Q.media && Q.media.pause()
            }

            function C(e) {
                return Fe.boolean(e) || (e = Q.media.paused), e ? _() : E(), e
            }

            function A(e) {
                Fe.number(e) || (e = c.seekTime), S(Q.media.currentTime - e)
            }

            function x(e) {
                Fe.number(e) || (e = c.seekTime), S(Q.media.currentTime + e)
            }

            function S(e) {
                var t = 0,
                    n = Q.media.paused,
                    r = F();
                Fe.number(e) ? t = e : Fe.object(e) && se(["input", "change"], e.type) && (t = e.target.value / e.target.max * r), t < 0 ? t = 0 : r < t && (t = r), q(t);
                try {
                    Q.media.currentTime = t.toFixed(4)
                } catch (e) {}
                if (se(c.types.embed, Q.type)) {
                    switch (Q.type) {
                        case "youtube":
                            Q.embed.seekTo(t);
                            break;
                        case "vimeo":
                            Q.embed.setCurrentTime(t.toFixed(0));
                            break;
                        case "soundcloud":
                            Q.embed.seekTo(1e3 * t)
                    }
                    n && E(), p(Q.media, "timeupdate"), Q.media.seeking = !0, p(Q.media, "seeking")
                }
                ee("Seeking to " + Q.media.currentTime + " seconds"), i(t)
            }

            function F() {
                var e = parseInt(c.duration),
                    t = 0;
                return null === Q.media.duration || isNaN(Q.media.duration) || (t = Q.media.duration), isNaN(e) ? t : e
            }

            function T() {
                he(Q.container, c.classes.playing, !Q.media.paused), he(Q.container, c.classes.stopped, Q.media.paused), z(Q.media.paused)
            }

            function P(e) {
                var t = Ae.supportsFullScreen;
                if (t) {
                    if (!e || e.type !== Ae.fullScreenEventName) return Ae.isFullScreen(Q.container) ? Ae.cancelFullScreen() : (xe = {
                        x: ne.pageXOffset || 0,
                        y: ne.pageYOffset || 0
                    }, Ae.requestFullScreen(Q.container)), void(Q.isFullscreen = Ae.isFullScreen(Q.container));
                    Q.isFullscreen = Ae.isFullScreen(Q.container)
                } else Q.isFullscreen = !Q.isFullscreen, re.body.style.overflow = Q.isFullscreen ? "hidden" : "";
                he(Q.container, c.classes.fullscreen.active, Q.isFullscreen), o(Q.isFullscreen), Q.buttons && Q.buttons.fullscreen && be(Q.buttons.fullscreen, Q.isFullscreen), p(Q.container, Q.isFullscreen ? "enterfullscreen" : "exitfullscreen", !0), !Q.isFullscreen && t && ne.scrollTo(xe.x, xe.y)
            }

            function D(e) {
                if (Fe.boolean(e) || (e = !Q.media.muted), be(Q.buttons.mute, e), Q.media.muted = e, 0 === Q.media.volume && I(c.volume), se(c.types.embed, Q.type)) {
                    switch (Q.type) {
                        case "youtube":
                            Q.embed[Q.media.muted ? "mute" : "unMute"]();
                            break;
                        case "vimeo":
                        case "soundcloud":
                            Q.embed.setVolume(Q.media.muted ? 0 : parseFloat(c.volume / c.volumeMax))
                    }
                    p(Q.media, "volumechange")
                }
            }

            function I(e) {
                var t = c.volumeMax,
                    n = c.volumeMin;
                if (Fe.undefined(e) && (e = Q.storage.volume), (null === e || isNaN(e)) && (e = c.volume), t < e && (e = t), e < n && (e = n), Q.media.volume = parseFloat(e / t), Q.volume.display && (Q.volume.display.value = e), se(c.types.embed, Q.type)) {
                    switch (Q.type) {
                        case "youtube":
                            Q.embed.setVolume(100 * Q.media.volume);
                            break;
                        case "vimeo":
                        case "soundcloud":
                            Q.embed.setVolume(Q.media.volume)
                    }
                    p(Q.media, "volumechange")
                }
                0 === e ? Q.media.muted = !0 : Q.media.muted && 0 < e && D()
            }

            function O(e) {
                var t = Q.media.muted ? 0 : Q.media.volume * c.volumeMax;
                Fe.number(e) || (e = c.volumeStep), I(t + e)
            }

            function M(e) {
                var t = Q.media.muted ? 0 : Q.media.volume * c.volumeMax;
                Fe.number(e) || (e = c.volumeStep), I(t - e)
            }

            function j() {
                var e = Q.media.muted ? 0 : Q.media.volume * c.volumeMax;
                Q.supported.full && (Q.volume.input && (Q.volume.input.value = e), Q.volume.display && (Q.volume.display.value = e)), g({
                    volume: e
                }), he(Q.container, c.classes.muted, 0 === e), Q.supported.full && Q.buttons.mute && be(Q.buttons.mute, 0 === e)
            }

            function B(e) {
                Q.supported.full && Q.buttons.captions && (Fe.boolean(e) || (e = -1 === Q.container.className.indexOf(c.classes.captions.active)), Q.captionsEnabled = e, be(Q.buttons.captions, Q.captionsEnabled), he(Q.container, c.classes.captions.active, Q.captionsEnabled), p(Q.container, Q.captionsEnabled ? "captionsenabled" : "captionsdisabled", !0), g({
                    captionsEnabled: Q.captionsEnabled
                }))
            }

            function N(e) {
                var t = "waiting" === e.type;
                clearTimeout(K.loading), K.loading = setTimeout(function() {
                    he(Q.container, c.classes.loading, t), z(t)
                }, t ? 250 : 0)
            }

            function L(e) {
                if (Q.supported.full) {
                    var t = Q.progress.played,
                        n = 0,
                        r = F();
                    if (e) switch (e.type) {
                        case "timeupdate":
                        case "seeking":
                            if (Q.controls.pressed) return;
                            n = ke(Q.media.currentTime, r), "timeupdate" === e.type && Q.buttons.seek && (Q.buttons.seek.value = n);
                            break;
                        case "playing":
                        case "progress":
                            t = Q.progress.buffer, n = (i = Q.media.buffered) && i.length ? ke(i.end(0), r) : Fe.number(i) ? 100 * i : 0
                    }
                    R(t, n)
                }
                var i
            }

            function R(e, t) {
                if (Q.supported.full) {
                    if (Fe.undefined(t) && (t = 0), Fe.undefined(e)) {
                        if (!Q.progress || !Q.progress.buffer) return;
                        e = Q.progress.buffer
                    }
                    Fe.htmlElement(e) ? e.value = t : e && (e.bar && (e.bar.value = t), e.text && (e.text.innerHTML = t))
                }
            }

            function H(e, t) {
                if (t) {
                    isNaN(e) && (e = 0), Q.secs = parseInt(e % 60), Q.mins = parseInt(e / 60 % 60), Q.hours = parseInt(e / 60 / 60 % 60);
                    var n = 0 < parseInt(F() / 60 / 60 % 60);
                    Q.secs = ("0" + Q.secs).slice(-2), Q.mins = ("0" + Q.mins).slice(-2), t.innerHTML = (n ? Q.hours + ":" : "") + Q.mins + ":" + Q.secs
                }
            }

            function V() {
                if (Q.supported.full) {
                    var e = F() || 0;
                    !Q.duration && c.displayDuration && Q.media.paused && H(e, Q.currentTime), Q.duration && H(e, Q.duration), $()
                }
            }

            function U(e) {
                H(Q.media.currentTime, Q.currentTime), e && "timeupdate" === e.type && Q.media.seeking || L(e)
            }

            function q(e) {
                Fe.number(e) || (e = 0);
                var t = ke(e, F());
                Q.progress && Q.progress.played && (Q.progress.played.value = t), Q.buttons && Q.buttons.seek && (Q.buttons.seek.value = t)
            }

            function $(e) {
                var t = F();
                if (c.tooltips.seek && Q.progress.container && 0 !== t) {
                    var n = Q.progress.container.getBoundingClientRect(),
                        r = 0,
                        i = c.classes.tooltip + "--visible";
                    if (e) r = 100 / n.width * (e.pageX - n.left);
                    else {
                        if (!fe(Q.progress.tooltip, i)) return;
                        r = Q.progress.tooltip.style.left.replace("%", "")
                    }
                    r < 0 ? r = 0 : 100 < r && (r = 100), H(t / 100 * r, Q.progress.tooltip), Q.progress.tooltip.style.left = r + "%", e && se(["mouseenter", "mouseleave"], e.type) && he(Q.progress.tooltip, i, "mouseenter" === e.type)
                }
            }

            function z(e) {
                if (c.hideControls && "audio" !== Q.type) {
                    var t = 0,
                        n = !1,
                        r = e,
                        i = fe(Q.container, c.classes.loading);
                    if (Fe.boolean(e) || (e && e.type ? (n = "enterfullscreen" === e.type, r = se(["mousemove", "touchstart", "mouseenter", "focus"], e.type), se(["mousemove", "touchmove"], e.type) && (t = 2e3), "focus" === e.type && (t = 3e3)) : r = fe(Q.container, c.classes.hideControls)), ne.clearTimeout(K.hover), r || Q.media.paused || i) {
                        if (he(Q.container, c.classes.hideControls, !1), Q.media.paused || i) return;
                        Q.browser.isTouch && (t = 3e3)
                    }
                    r && Q.media.paused || (K.hover = ne.setTimeout(function() {
                        (!Q.controls.pressed && !Q.controls.hover || n) && he(Q.container, c.classes.hideControls, !0)
                    }, t))
                }
            }

            function X() {
                function e() {
                    var e = C(),
                        t = Q.buttons[e ? "play" : "pause"],
                        n = Q.buttons[e ? "pause" : "play"];
                    if (n = n && 1 < n.length ? n[n.length - 1] : n[0]) {
                        var r = fe(t, c.classes.tabFocus);
                        setTimeout(function() {
                            n.focus(), r && (he(t, c.classes.tabFocus, !1), he(n, c.classes.tabFocus, !0))
                        }, 100)
                    }
                }

                function r() {
                    var e = re.activeElement;
                    return e && e !== re.body ? re.querySelector(":focus") : null
                }

                function o(e) {
                    return e.keyCode ? e.keyCode : e.which
                }

                function i(e) {
                    var t, n = o(e),
                        r = "keydown" === e.type,
                        i = r && n === s;
                    if (Fe.number(n))
                        if (r) {
                            switch (se([48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67], n) && (e.preventDefault(), e.stopPropagation()), n) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    i || (t = Q.media.duration, Fe.number(t) && S(t / 10 * (n - 48)));
                                    break;
                                case 32:
                                case 75:
                                    i || C();
                                    break;
                                case 38:
                                    O();
                                    break;
                                case 40:
                                    M();
                                    break;
                                case 77:
                                    i || D();
                                    break;
                                case 39:
                                    x();
                                    break;
                                case 37:
                                    A();
                                    break;
                                case 70:
                                    P();
                                    break;
                                case 67:
                                    i || B()
                            }!Ae.supportsFullScreen && Q.isFullscreen && 27 === n && P(), s = n
                        } else s = null
                }
                var t = Q.browser.isIE ? "change" : "input";
                if (c.keyboardShorcuts.focused) {
                    var s = null;
                    c.keyboardShorcuts.global && ge(ne, "keydown keyup", function(e) {
                        var t = o(e),
                            n = r();
                        1 !== Ce().length || !se([48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67], t) || Fe.htmlElement(n) && me(n, c.selectors.editable) || i(e)
                    }), ge(Q.container, "keydown keyup", i)
                }
                for (var n in ge(ne, "keyup", function(e) {
                        var t = o(e),
                            n = r();
                        9 === t && function(e) {
                            for (var t in Q.buttons) {
                                var n = Q.buttons[t];
                                if (Fe.nodeList(n))
                                    for (var r = 0; r < n.length; r++) he(n[r], c.classes.tabFocus, n[r] === e);
                                else he(n, c.classes.tabFocus, n === e)
                            }
                        }(n)
                    }), ge(re.body, "click", function() {
                        he(f("." + c.classes.tabFocus), c.classes.tabFocus, !1)
                    }), Q.buttons) {
                    var a = Q.buttons[n];
                    ge(a, "blur", function() {
                        he(a, "tab-focus", !1)
                    })
                }
                ve(Q.buttons.play, "click", c.listeners.play, e), ve(Q.buttons.pause, "click", c.listeners.pause, e), ve(Q.buttons.restart, "click", c.listeners.restart, S), ve(Q.buttons.rewind, "click", c.listeners.rewind, A), ve(Q.buttons.forward, "click", c.listeners.forward, x), ve(Q.buttons.seek, t, c.listeners.seek, S), ve(Q.volume.input, t, c.listeners.volume, function() {
                    I(Q.volume.input.value)
                }), ve(Q.buttons.mute, "click", c.listeners.mute, D), ve(Q.buttons.fullscreen, "click", c.listeners.fullscreen, P), Ae.supportsFullScreen && ge(re, Ae.fullScreenEventName, P), ve(Q.buttons.captions, "click", c.listeners.captions, B), ge(Q.progress.container, "mouseenter mouseleave mousemove", $), c.hideControls && (ge(Q.container, "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen", z), ge(Q.controls, "mouseenter mouseleave", function(e) {
                    Q.controls.hover = "mouseenter" === e.type
                }), ge(Q.controls, "mousedown mouseup touchstart touchend touchcancel", function(e) {
                    Q.controls.pressed = se(["mousedown", "touchstart"], e.type)
                }), ge(Q.controls, "focus blur", z, !0)), ge(Q.volume.input, "wheel", function(e) {
                    e.preventDefault();
                    var t = e.webkitDirectionInvertedFromDevice,
                        n = c.volumeStep / 5;
                    (e.deltaY < 0 || 0 < e.deltaX) && (t ? M(n) : O(n)), (0 < e.deltaY || e.deltaX < 0) && (t ? O(n) : M(n))
                })
            }

            function Y(e, t) {
                function n() {
                    clearTimeout(K.cleanUp), Fe.boolean(t) || (t = !0), Fe.function(e) && e.call(J), t && (Q.init = !1, Q.container.parentNode.replaceChild(J, Q.container), re.body.style.overflow = "", p(J, "destroyed", !0))
                }
                if (!Q.init) return null;
                switch (Q.type) {
                    case "youtube":
                        ne.clearInterval(K.buffering), ne.clearInterval(K.playing), Q.embed.destroy(), n();
                        break;
                    case "vimeo":
                        Q.embed.unload().then(n), K.cleanUp = ne.setTimeout(n, 200);
                        break;
                    case "video":
                    case "audio":
                        m(!0), n()
                }
            }

            function W() {
                if (!Q.supported.full) return te("Basic support only", Q.type), le(f(c.selectors.controls.wrapper)), le(f(c.selectors.buttons.play)), void m(!0);
                var e = !h(c.selectors.controls.wrapper).length;
                e && a(),
                    function() {
                        try {
                            return Q.controls = f(c.selectors.controls.wrapper), Q.buttons = {}, Q.buttons.seek = f(c.selectors.buttons.seek), Q.buttons.play = h(c.selectors.buttons.play), Q.buttons.pause = f(c.selectors.buttons.pause), Q.buttons.restart = f(c.selectors.buttons.restart), Q.buttons.rewind = f(c.selectors.buttons.rewind), Q.buttons.forward = f(c.selectors.buttons.forward), Q.buttons.fullscreen = f(c.selectors.buttons.fullscreen), Q.buttons.mute = f(c.selectors.buttons.mute), Q.buttons.captions = f(c.selectors.buttons.captions), Q.progress = {}, Q.progress.container = f(c.selectors.progress.container), Q.progress.buffer = {}, Q.progress.buffer.bar = f(c.selectors.progress.buffer), Q.progress.buffer.text = Q.progress.buffer.bar && Q.progress.buffer.bar.getElementsByTagName("span")[0], Q.progress.played = f(c.selectors.progress.played), Q.progress.tooltip = Q.progress.container && Q.progress.container.querySelector("." + c.classes.tooltip), Q.volume = {}, Q.volume.input = f(c.selectors.volume.input), Q.volume.display = f(c.selectors.volume.display), Q.duration = f(c.selectors.duration), Q.currentTime = f(c.selectors.currentTime), Q.seekTime = h(c.selectors.seekTime), !0
                        } catch (e) {
                            return te("It looks like there is a problem with your controls HTML"), m(!0), !1
                        }
                    }() && (e && X(), function() {
                        if (ge(Q.media, "timeupdate seeking", U), ge(Q.media, "timeupdate", i), ge(Q.media, "durationchange loadedmetadata", V), ge(Q.media, "ended", function() {
                                "video" === Q.type && c.showPosterOnEnd && ("video" === Q.type && d(), S(), Q.media.load())
                            }), ge(Q.media, "progress playing", L), ge(Q.media, "volumechange", j), ge(Q.media, "play pause ended", T), ge(Q.media, "waiting canplay seeked", N), c.clickToPlay && "audio" !== Q.type) {
                            var e = f("." + c.classes.videoWrapper);
                            if (!e) return;
                            e.style.cursor = "pointer", ge(e, "click", function() {
                                c.hideControls && Q.browser.isTouch && !Q.media.paused || (Q.media.paused ? _() : Q.media.ended ? (S(), _()) : E())
                            })
                        }
                        c.disableContextMenu && ge(Q.media, "contextmenu", function(e) {
                            e.preventDefault()
                        }), ge(Q.media, c.events.concat(["keyup", "keydown"]).join(" "), function(e) {
                            p(Q.container, e.type, !0)
                        })
                    }(), m(), t(), r(), I(), j(), U(), T())
            }

            function G() {
                ne.setTimeout(function() {
                    p(Q.media, "ready")
                }, 0), he(Q.media, Se.classes.setup, !0), he(Q.container, c.classes.ready, !0), Q.media.plyr = Z, c.autoplay && _()
            }
            var Z, Q = this,
                K = {},
                J = (Q.media = n).cloneNode(!0),
                ee = function() {
                    e("log", arguments)
                },
                te = function() {
                    e("warn", arguments)
                };
            return ee("Config", c), Z = {
                    getOriginal: function() {
                        return J
                    },
                    getContainer: function() {
                        return Q.container
                    },
                    getEmbed: function() {
                        return Q.embed
                    },
                    getMedia: function() {
                        return Q.media
                    },
                    getType: function() {
                        return Q.type
                    },
                    getDuration: F,
                    getCurrentTime: function() {
                        return Q.media.currentTime
                    },
                    getVolume: function() {
                        return Q.media.volume
                    },
                    isMuted: function() {
                        return Q.media.muted
                    },
                    isReady: function() {
                        return fe(Q.container, c.classes.ready)
                    },
                    isLoading: function() {
                        return fe(Q.container, c.classes.loading)
                    },
                    isPaused: function() {
                        return Q.media.paused
                    },
                    on: function(e, t) {
                        return ge(Q.container, e, t), this
                    },
                    play: _,
                    pause: E,
                    stop: function() {
                        E(), S()
                    },
                    restart: S,
                    rewind: A,
                    forward: x,
                    seek: S,
                    source: function(e) {
                        if (!Fe.undefined(e)) return t = e, void(Fe.object(t) && "sources" in t && t.sources.length ? (he(Q.container, c.classes.ready, !1), E(), q(), R(), function() {
                            if (se(c.types.html5, Q.type)) {
                                for (var e = Q.media.querySelectorAll("source"), t = 0; t < e.length; t++) le(e[t]);
                                Q.media.setAttribute("src", c.blankUrl), Q.media.load(), ee("Cancelled network requests")
                            }
                        }(), Y(function() {
                            if (Q.embed = null, le(Q.media), "video" === Q.type && Q.videoContainer && le(Q.videoContainer), Q.container && Q.container.removeAttribute("class"), "type" in t && (Q.type = t.type, "video" === Q.type)) {
                                var e = t.sources[0];
                                "type" in e && se(c.types.embed, e.type) && (Q.type = e.type)
                            }
                            switch (Q.supported = Ee(Q.type), Q.type) {
                                case "video":
                                    Q.media = re.createElement("video");
                                    break;
                                case "audio":
                                    Q.media = re.createElement("audio");
                                    break;
                                case "youtube":
                                case "vimeo":
                                case "soundcloud":
                                    Q.media = re.createElement("div"), Q.embedId = t.sources[0].src
                            }
                            ce(Q.container, Q.media), Fe.boolean(t.autoplay) && (c.autoplay = t.autoplay), se(c.types.html5, Q.type) && (c.crossorigin && Q.media.setAttribute("crossorigin", ""), c.autoplay && Q.media.setAttribute("autoplay", ""), "poster" in t && Q.media.setAttribute("poster", t.poster), c.loop && Q.media.setAttribute("loop", "")), he(Q.container, c.classes.fullscreen.active, Q.isFullscreen), he(Q.container, c.classes.captions.active, Q.captionsEnabled), u(), se(c.types.html5, Q.type) && s("source", t.sources), y(), se(c.types.html5, Q.type) && ("tracks" in t && s("track", t.tracks), Q.media.load()), (se(c.types.html5, Q.type) || se(c.types.embed, Q.type) && !Q.supported.full) && (W(), G()), c.title = t.title, v()
                        }, !1)) : te("Invalid source format"));
                        var t, n;
                        switch (Q.type) {
                            case "youtube":
                                n = Q.embed.getVideoUrl();
                                break;
                            case "vimeo":
                                Q.embed.getVideoUrl.then(function(e) {
                                    n = e
                                });
                                break;
                            case "soundcloud":
                                Q.embed.getCurrentSound(function(e) {
                                    n = e.permalink_url
                                });
                                break;
                            default:
                                n = Q.media.currentSrc
                        }
                        return n || ""
                    },
                    poster: function(e) {
                        "video" === Q.type && Q.media.setAttribute("poster", e)
                    },
                    setVolume: I,
                    togglePlay: C,
                    toggleMute: D,
                    toggleCaptions: B,
                    toggleFullscreen: P,
                    toggleControls: z,
                    isFullscreen: function() {
                        return Q.isFullscreen || !1
                    },
                    support: function(e) {
                        return function(e, t) {
                            var n = e.media;
                            if ("video" === e.type) switch (t) {
                                case "video/webm":
                                    return !(!n.canPlayType || !n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
                                case "video/mp4":
                                    return !(!n.canPlayType || !n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
                                case "video/ogg":
                                    return !(!n.canPlayType || !n.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
                            } else if ("audio" === e.type) switch (t) {
                                case "audio/mpeg":
                                    return !(!n.canPlayType || !n.canPlayType("audio/mpeg;").replace(/no/, ""));
                                case "audio/ogg":
                                    return !(!n.canPlayType || !n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
                                case "audio/wav":
                                    return !(!n.canPlayType || !n.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
                            }
                            return !1
                        }(Q, e)
                    },
                    destroy: Y
                },
                function() {
                    if (Q.init) return;
                    if (Ae = function() {
                            var e = {
                                    supportsFullScreen: !1,
                                    isFullScreen: function() {
                                        return !1
                                    },
                                    requestFullScreen: function() {},
                                    cancelFullScreen: function() {},
                                    fullScreenEventName: "",
                                    element: null,
                                    prefix: ""
                                },
                                t = "webkit o moz ms khtml".split(" ");
                            if (Fe.undefined(re.cancelFullScreen))
                                for (var n = 0, r = t.length; n < r; n++) {
                                    if (e.prefix = t[n], !Fe.undefined(re[e.prefix + "CancelFullScreen"])) {
                                        e.supportsFullScreen = !0;
                                        break
                                    }
                                    if (!Fe.undefined(re.msExitFullscreen) && re.msFullscreenEnabled) {
                                        e.prefix = "ms", e.supportsFullScreen = !0;
                                        break
                                    }
                                } else e.supportsFullScreen = !0;
                            return e.supportsFullScreen && (e.fullScreenEventName = "ms" === e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen = function(e) {
                                switch (Fe.undefined(e) && (e = re.body), this.prefix) {
                                    case "":
                                        return re.fullscreenElement === e;
                                    case "moz":
                                        return re.mozFullScreenElement === e;
                                    default:
                                        return re[this.prefix + "FullscreenElement"] === e
                                }
                            }, e.requestFullScreen = function(e) {
                                return Fe.undefined(e) && (e = re.body), "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" === this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
                            }, e.cancelFullScreen = function() {
                                return "" === this.prefix ? re.cancelFullScreen() : re[this.prefix + ("ms" === this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
                            }, e.element = function() {
                                return "" === this.prefix ? re.fullscreenElement : re[this.prefix + "FullscreenElement"]
                            }), e
                        }(), Q.browser = ie(), Fe.htmlElement(Q.media)) {
                        t = null, Q.storage = {}, Te.supported && c.storage.enabled && (ne.localStorage.removeItem("plyr-volume"), (t = ne.localStorage.getItem(c.storage.key)) && (/^\d+(\.\d+)?$/.test(t) ? g({
                            volume: parseFloat(t)
                        }) : Q.storage = JSON.parse(t)));
                        var e = n.tagName.toLowerCase();
                        "div" === e ? (Q.type = n.getAttribute("data-type"), Q.embedId = n.getAttribute("data-video-id"), n.removeAttribute("data-type"), n.removeAttribute("data-video-id")) : (Q.type = e, c.crossorigin = null !== n.getAttribute("crossorigin"), c.autoplay = c.autoplay || null !== n.getAttribute("autoplay"), c.loop = c.loop || null !== n.getAttribute("loop")), Q.supported = Ee(Q.type), Q.supported.basic && (Q.container = ue(n, re.createElement("div")), Q.container.setAttribute("tabindex", 0), u(), ee(Q.browser.name + " " + Q.browser.version), y(), (se(c.types.html5, Q.type) || se(c.types.embed, Q.type) && !Q.supported.full) && (W(), G(), v()), Q.init = !0)
                    }
                    var t
                }(), Q.init ? Z : null
        }

        function _e(e, t) {
            var n = new XMLHttpRequest;
            if (!Fe.string(t) || !Fe.htmlElement(re.querySelector("#" + t))) {
                var r = re.createElement("div");
                r.setAttribute("hidden", ""), Fe.string(t) && r.setAttribute("id", t), re.body.insertBefore(r, re.body.childNodes[0]), "withCredentials" in n && (n.open("GET", e, !0), n.onload = function() {
                    r.innerHTML = n.responseText
                }, n.send())
            }
        }

        function Ee(e) {
            var t = ie(),
                n = t.isIE && t.version <= 9,
                r = t.isIos,
                i = t.isIphone,
                o = !!re.createElement("audio").canPlayType,
                s = !!re.createElement("video").canPlayType,
                a = !1,
                u = !1;
            switch (e) {
                case "video":
                    u = (a = s) && !n && !i;
                    break;
                case "audio":
                    u = (a = o) && !n;
                    break;
                case "vimeo":
                    a = !0, u = !n && !r;
                    break;
                case "youtube":
                    a = !0, u = !n && !r, r && !i && 10 <= t.version && (u = !0);
                    break;
                case "soundcloud":
                    a = !0, u = !n && !i;
                    break;
                default:
                    u = (a = o && s) && !n
            }
            return {
                basic: a,
                full: u
            }
        }

        function Ce(e) {
            if (Fe.string(e) ? e = re.querySelector(e) : Fe.undefined(e) && (e = re.body), Fe.htmlElement(e)) {
                var t = e.querySelectorAll("." + Se.classes.setup),
                    n = [];
                return Array.prototype.slice.call(t).forEach(function(e) {
                    Fe.object(e.plyr) && n.push(e.plyr)
                }), n
            }
            return []
        }
        var Ae, xe = {
                x: 0,
                y: 0
            },
            Se = {
                enabled: !0,
                debug: !1,
                autoplay: !1,
                loop: !1,
                seekTime: 10,
                volume: 10,
                volumeMin: 0,
                volumeMax: 10,
                volumeStep: 1,
                duration: null,
                displayDuration: !0,
                loadSprite: !0,
                iconPrefix: "plyr",
                iconUrl: "https://cdn.plyr.io/2.0.15/plyr.svg",
                blankUrl: "https://cdn.plyr.io/static/blank.mp4",
                clickToPlay: !0,
                hideControls: !0,
                showPosterOnEnd: !1,
                disableContextMenu: !0,
                keyboardShorcuts: {
                    focused: !0,
                    global: !1
                },
                tooltips: {
                    controls: !1,
                    seek: !0
                },
                selectors: {
                    html5: "video, audio",
                    embed: "[data-type]",
                    editable: "input, textarea, select, [contenteditable]",
                    container: ".plyr",
                    controls: {
                        container: null,
                        wrapper: ".plyr__controls"
                    },
                    labels: "[data-plyr]",
                    buttons: {
                        seek: '[data-plyr="seek"]',
                        play: '[data-plyr="play"]',
                        pause: '[data-plyr="pause"]',
                        restart: '[data-plyr="restart"]',
                        rewind: '[data-plyr="rewind"]',
                        forward: '[data-plyr="fast-forward"]',
                        mute: '[data-plyr="mute"]',
                        captions: '[data-plyr="captions"]',
                        fullscreen: '[data-plyr="fullscreen"]'
                    },
                    volume: {
                        input: '[data-plyr="volume"]',
                        display: ".plyr__volume--display"
                    },
                    progress: {
                        container: ".plyr__progress",
                        buffer: ".plyr__progress--buffer",
                        played: ".plyr__progress--played"
                    },
                    captions: ".plyr__captions",
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration"
                },
                classes: {
                    setup: "plyr--setup",
                    ready: "plyr--ready",
                    videoWrapper: "plyr__video-wrapper",
                    embedWrapper: "plyr__video-embed",
                    type: "plyr--{0}",
                    stopped: "plyr--stopped",
                    playing: "plyr--playing",
                    muted: "plyr--muted",
                    loading: "plyr--loading",
                    hover: "plyr--hover",
                    tooltip: "plyr__tooltip",
                    hidden: "plyr__sr-only",
                    hideControls: "plyr--hide-controls",
                    isIos: "plyr--is-ios",
                    isTouch: "plyr--is-touch",
                    captions: {
                        enabled: "plyr--captions-enabled",
                        active: "plyr--captions-active"
                    },
                    fullscreen: {
                        enabled: "plyr--fullscreen-enabled",
                        fallback: "plyr--fullscreen-fallback",
                        active: "plyr--fullscreen-active"
                    },
                    tabFocus: "tab-focus"
                },
                captions: {
                    defaultActive: !1
                },
                fullscreen: {
                    enabled: !0,
                    fallback: !0,
                    allowAudio: !1
                },
                storage: {
                    enabled: !0,
                    key: "plyr"
                },
                controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
                i18n: {
                    restart: "Restart",
                    rewind: "Rewind {seektime} secs",
                    play: "Play",
                    pause: "Pause",
                    forward: "Forward {seektime} secs",
                    played: "played",
                    buffered: "buffered",
                    currentTime: "Current time",
                    duration: "Duration",
                    volume: "Volume",
                    toggleMute: "Toggle Mute",
                    toggleCaptions: "Toggle Captions",
                    toggleFullscreen: "Toggle Fullscreen",
                    frameTitle: "Player for {title}"
                },
                types: {
                    embed: ["youtube", "vimeo", "soundcloud"],
                    html5: ["video", "audio"]
                },
                urls: {
                    vimeo: {
                        api: "https://player.vimeo.com/api/player.js"
                    },
                    youtube: {
                        api: "https://www.youtube.com/iframe_api"
                    },
                    soundcloud: {
                        api: "https://w.soundcloud.com/player/api.js"
                    }
                },
                listeners: {
                    seek: null,
                    play: null,
                    pause: null,
                    restart: null,
                    rewind: null,
                    forward: null,
                    mute: null,
                    volume: null,
                    captions: null,
                    fullscreen: null
                },
                events: ["ready", "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied"],
                logPrefix: "[Plyr]"
            },
            Fe = {
                object: function(e) {
                    return null !== e && "object" == typeof e
                },
                array: function(e) {
                    return null !== e && "object" == typeof e && e.constructor === Array
                },
                number: function(e) {
                    return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" == typeof e && e.constructor === Number)
                },
                string: function(e) {
                    return null !== e && ("string" == typeof e || "object" == typeof e && e.constructor === String)
                },
                boolean: function(e) {
                    return null !== e && "boolean" == typeof e
                },
                nodeList: function(e) {
                    return null !== e && e instanceof NodeList
                },
                htmlElement: function(e) {
                    return null !== e && e instanceof HTMLElement
                },
                function: function(e) {
                    return null !== e && "function" == typeof e
                },
                undefined: function(e) {
                    return null !== e && void 0 === e
                }
            },
            Te = {
                supported: function() {
                    try {
                        ne.localStorage.setItem("___test", "OK");
                        var e = ne.localStorage.getItem("___test");
                        return ne.localStorage.removeItem("___test"), "OK" === e
                    } catch (e) {
                        return !1
                    }
                    return !1
                }()
            };
        return {
            setup: function(e, a) {
                function t(e, t) {
                    fe(t, Se.classes.hook) || n.push({
                        target: e,
                        media: t
                    })
                }
                var n = [],
                    u = [],
                    r = [Se.selectors.html5, Se.selectors.embed].join(",");
                if (Fe.string(e) ? e = re.querySelectorAll(e) : Fe.htmlElement(e) ? e = [e] : Fe.nodeList(e) || Fe.array(e) || Fe.string(e) || (Fe.undefined(a) && Fe.object(e) && (a = e), e = re.querySelectorAll(r)), Fe.nodeList(e) && (e = Array.prototype.slice.call(e)), !Ee().basic || !e.length) return !1;
                for (var i = 0; i < e.length; i++) {
                    var o = e[i],
                        s = o.querySelectorAll(r);
                    if (s.length)
                        for (var l = 0; l < s.length; l++) t(o, s[l]);
                    else me(o, r) && t(o, o)
                }
                return n.forEach(function(e) {
                    var t = e.target,
                        n = e.media,
                        r = {};
                    try {
                        r = JSON.parse(t.getAttribute("data-plyr"))
                    } catch (e) {}
                    var i = we({}, Se, a, r);
                    if (!i.enabled) return null;
                    var o = new c(n, i);
                    if (Fe.object(o)) {
                        if (i.debug) {
                            var s = i.events.concat(["setup", "statechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled"]);
                            ge(o.getContainer(), s.join(" "), function(e) {
                                console.log([i.logPrefix, "event:", e.type].join(" "), e.detail.plyr)
                            })
                        }
                        ye(o.getContainer(), "setup", !0, {
                            plyr: o
                        }), u.push(o)
                    }
                }), u
            },
            supported: Ee,
            loadSprite: _e,
            get: Ce
        }
    }),
    function() {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
    }();
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    _createClass = function() {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }
    }();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var alreadyTested = !1,
    passiveSupported = !1;

function isSupported() {
    if (alreadyTested) return passiveSupported;
    alreadyTested = !0;
    try {
        var e = Object.defineProperty({}, "passive", {
            get: function() {
                passiveSupported = !0
            }
        });
        window.addEventListener("test", null, e)
    } catch (e) {}
    return passiveSupported
}

function usePassiveEvent(e) {
    return !!isSupported() && {
        passive: !e
    }
}
var Siema = function() {
    function n(e) {
        var t = this;
        if (_classCallCheck(this, n), this.config = n.mergeSettings(e), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, null === this.selector) throw new Error("Something wrong with your selector рЯШ≠");
        this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.loop ? this.config.startIndex % this.innerElements.length : Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage)), this.transformProperty = n.webkitOrNot(), ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler", "clickHandler"].forEach(function(e) {
            t[e] = t[e].bind(t)
        }), this.init()
    }
    return _createClass(n, [{
        key: "attachEvents",
        value: function() {
            window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = {
                startX: 0,
                endX: 0,
                startY: 0,
                letItGo: null,
                preventClick: !1
            }, this.selector.addEventListener("touchstart", this.touchstartHandler, usePassiveEvent(!0)), this.selector.addEventListener("touchend", this.touchendHandler, usePassiveEvent(!0)), this.selector.addEventListener("touchmove", this.touchmoveHandler, usePassiveEvent(!0)), this.selector.addEventListener("mousedown", this.mousedownHandler, usePassiveEvent(!0)), this.selector.addEventListener("mouseup", this.mouseupHandler, usePassiveEvent(!0)), this.selector.addEventListener("mouseleave", this.mouseleaveHandler, usePassiveEvent(!0)), this.selector.addEventListener("mousemove", this.mousemoveHandler, usePassiveEvent(!0)), this.selector.addEventListener("click", this.clickHandler))
        }
    }, {
        key: "detachEvents",
        value: function() {
            window.removeEventListener("resize", this.resizeHandler), this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), this.selector.removeEventListener("click", this.clickHandler)
        }
    }, {
        key: "init",
        value: function() {
            this.attachEvents(), this.selector.style.overflow = "hidden", this.selector.style.direction = this.config.rtl ? "rtl" : "ltr", this.buildSliderFrame(), this.config.onInit.call(this)
        }
    }, {
        key: "buildSliderFrame",
        value: function() {
            var e = this.selectorWidth / this.perPage,
                t = this.config.loop ? this.innerElements.length + 2 * this.perPage : this.innerElements.length;
            this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = e * t + "px", this.enableTransition(), this.config.draggable && (this.selector.style.cursor = 'url("/local/templates/servermall/assets/img/cursor/grab.cur"), move');
            var n = document.createDocumentFragment();
            if (this.config.loop)
                for (var r = this.innerElements.length - this.perPage; r < this.innerElements.length; r++) {
                    var i = this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));
                    n.appendChild(i)
                }
            for (var o = 0; o < this.innerElements.length; o++) {
                var s = this.buildSliderFrameItem(this.innerElements[o]);
                n.appendChild(s)
            }
            if (this.config.loop)
                for (var a = 0; a < this.perPage; a++) {
                    var u = this.buildSliderFrameItem(this.innerElements[a].cloneNode(!0));
                    n.appendChild(u)
                }
            this.sliderFrame.appendChild(n), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent()
        }
    }, {
        key: "buildSliderFrameItem",
        value: function(e) {
            var t = document.createElement("div");
            return t.style.cssFloat = this.config.rtl ? "right" : "left", t.style.float = this.config.rtl ? "right" : "left", t.style.width = (this.config.loop ? 100 / (this.innerElements.length + 2 * this.perPage) : 100 / this.innerElements.length) + "%", t.appendChild(e), t
        }
    }, {
        key: "resolveSlidesNumber",
        value: function() {
            if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage;
            else if ("object" === _typeof(this.config.perPage))
                for (var e in this.perPage = 1, this.config.perPage) window.innerWidth >= e && (this.perPage = this.config.perPage[e])
        }
    }, {
        key: "prev",
        value: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1,
                t = arguments[1];
            if (!(this.innerElements.length <= this.perPage)) {
                var n = this.currentSlide;
                if (this.config.loop)
                    if (this.currentSlide - e < 0) {
                        this.disableTransition();
                        var r = this.currentSlide + this.innerElements.length,
                            i = r + this.perPage,
                            o = (this.config.rtl ? 1 : -1) * i * (this.selectorWidth / this.perPage),
                            s = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                        this.sliderFrame.style[this.transformProperty] = "translate3d(" + (o + s) + "px, 0, 0)", this.currentSlide = r - e
                    } else this.currentSlide = this.currentSlide - e;
                else this.currentSlide = Math.max(this.currentSlide - e, 0);
                n !== this.currentSlide ? (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this)) : (this.changeFail = "prev", this.config.onChangeFail.call(this))
            }
        }
    }, {
        key: "next",
        value: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1,
                t = arguments[1];
            if (!(this.innerElements.length <= this.perPage)) {
                var n = this.currentSlide;
                if (this.config.loop)
                    if (this.currentSlide + e > this.innerElements.length - this.perPage) {
                        this.disableTransition();
                        var r = this.currentSlide - this.innerElements.length,
                            i = r + this.perPage,
                            o = (this.config.rtl ? 1 : -1) * i * (this.selectorWidth / this.perPage),
                            s = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                        this.sliderFrame.style[this.transformProperty] = "translate3d(" + (o + s) + "px, 0, 0)", this.currentSlide = r + e
                    } else this.currentSlide = this.currentSlide + e;
                else this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage);
                n !== this.currentSlide ? (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this)) : (this.changeFail = "next", this.config.onChangeFail.call(this))
            }
        }
    }, {
        key: "disableTransition",
        value: function() {
            this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing
        }
    }, {
        key: "enableTransition",
        value: function() {
            this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing
        }
    }, {
        key: "goTo",
        value: function(e, t) {
            if (!(this.innerElements.length <= this.perPage)) {
                var n = this.currentSlide;
                this.currentSlide = this.config.loop ? e % this.innerElements.length : Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), n !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this))
            }
        }
    }, {
        key: "slideToCurrent",
        value: function(e) {
            var t = this,
                n = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                r = (this.config.rtl ? 1 : -1) * n * (this.selectorWidth / this.perPage);
            e ? requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    t.enableTransition(), t.sliderFrame.style[t.transformProperty] = "translate3d(" + r + "px, 0, 0)"
                })
            }) : this.sliderFrame.style[this.transformProperty] = "translate3d(" + r + "px, 0, 0)"
        }
    }, {
        key: "updateAfterDrag",
        value: function() {
            var e = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX),
                t = Math.abs(e),
                n = this.config.multipleDrag ? Math.ceil(t / (this.selectorWidth / this.perPage)) : 1,
                r = 0 < e && this.currentSlide - n < 0,
                i = e < 0 && this.currentSlide + n > this.innerElements.length - this.perPage;
            0 < e && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(n) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(n), this.slideToCurrent(r || i)
        }
    }, {
        key: "resizeHandler",
        value: function() {
            this.resolveSlidesNumber(), this.currentSlide + this.perPage > this.innerElements.length && (this.currentSlide = this.innerElements.length <= this.perPage ? 0 : this.innerElements.length - this.perPage), this.selectorWidth = this.selector.offsetWidth, this.buildSliderFrame()
        }
    }, {
        key: "clearDrag",
        value: function() {
            this.drag = {
                startX: 0,
                endX: 0,
                startY: 0,
                letItGo: null,
                preventClick: this.drag.preventClick
            }
        }
    }, {
        key: "touchstartHandler",
        value: function(e) {
            -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY, this.drag.endX = this.drag.startX)
        }
    }, {
        key: "touchendHandler",
        value: function(e) {
            e.stopPropagation(), this.pointerDown = !1, this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag()
        }
    }, {
        key: "touchmoveHandler",
        value: function(e) {
            if (e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo) {
                e.preventDefault(), this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
                var t = (this.config.loop ? this.currentSlide + this.perPage : this.currentSlide) * (this.selectorWidth / this.perPage),
                    n = this.drag.endX - this.drag.startX,
                    r = this.config.rtl ? t + n : t - n;
                this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * r + "px, 0, 0)"
            }
        }
    }, {
        key: "mousedownHandler",
        value: function(e) {
            -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX, this.drag.endX = this.drag.startX)
        }
    }, {
        key: "mouseupHandler",
        value: function(e) {
            e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = 'url("/local/templates/servermall/assets/img/cursor/grab.cur"), move', this.enableTransition(), (this.drag.endX || 0 === this.drag.endX) && this.updateAfterDrag(), this.clearDrag()
        }
    }, {
        key: "mousemoveHandler",
        value: function(e) {
            if (e.preventDefault(), this.pointerDown) {
                "A" === e.target.nodeName && (this.drag.preventClick = !0), this.drag.endX = e.pageX, this.selector.style.cursor = 'url("/local/templates/servermall/assets/img/cursor/grabbing.cur"), move', this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
                var t = (this.config.loop ? this.currentSlide + this.perPage : this.currentSlide) * (this.selectorWidth / this.perPage),
                    n = this.drag.endX - this.drag.startX,
                    r = this.config.rtl ? t + n : t - n;
                this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * r + "px, 0, 0)"
            }
        }
    }, {
        key: "mouseleaveHandler",
        value: function(e) {
            this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = 'url("/local/templates/servermall/assets/img/cursor/grab.cur"), move', this.drag.endX = e.pageX, this.drag.preventClick = !1, this.enableTransition(), this.updateAfterDrag(), this.clearDrag())
        }
    }, {
        key: "clickHandler",
        value: function(e) {
            this.drag.preventClick && e.preventDefault(), this.drag.preventClick = !1
        }
    }, {
        key: "remove",
        value: function(e, t) {
            if (e < 0 || e >= this.innerElements.length) throw new Error("Item to remove doesn't exist рЯШ≠");
            var n = e < this.currentSlide,
                r = this.currentSlide + this.perPage - 1 === e;
            (n || r) && this.currentSlide--, this.innerElements.splice(e, 1), this.buildSliderFrame(), t && t.call(this)
        }
    }, {
        key: "insert",
        value: function(e, t, n) {
            if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index рЯШ≠");
            if (-1 !== this.innerElements.indexOf(e)) throw new Error("The same item in a carousel? Really? Nope рЯШ≠");
            var r = 0 < (t <= this.currentSlide) && this.innerElements.length;
            this.currentSlide = r ? this.currentSlide + 1 : this.currentSlide, this.innerElements.splice(t, 0, e), this.buildSliderFrame(), n && n.call(this)
        }
    }, {
        key: "prepend",
        value: function(e, t) {
            this.insert(e, 0), t && t.call(this)
        }
    }, {
        key: "append",
        value: function(e, t) {
            this.insert(e, this.innerElements.length + 1), t && t.call(this)
        }
    }, {
        key: "destroy",
        value: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                t = arguments[1];
            if (this.detachEvents(), this.selector.style.cursor = "auto", e) {
                for (var n = document.createDocumentFragment(), r = 0; r < this.innerElements.length; r++) n.appendChild(this.innerElements[r]);
                this.selector.innerHTML = "", this.selector.appendChild(n), this.selector.removeAttribute("style")
            }
            t && t.call(this)
        }
    }], [{
        key: "mergeSettings",
        value: function(e) {
            var t = {
                    selector: ".siema",
                    duration: 200,
                    easing: "ease-out",
                    perPage: 1,
                    startIndex: 0,
                    draggable: !0,
                    multipleDrag: !0,
                    threshold: 20,
                    loop: !1,
                    rtl: !1,
                    onInit: function() {},
                    onChange: function() {},
                    onChangeFail: function() {}
                },
                n = e;
            for (var r in n) t[r] = n[r];
            return t
        }
    }, {
        key: "webkitOrNot",
        value: function() {
            return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform"
        }
    }]), n
}();
! function() {
    var e, t = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
            e !== Array.prototype && e !== Object.prototype && (e[t] = n.value)
        },
        r = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null !== global ? global : this;

    function n() {
        n = function() {}, r.Symbol || (r.Symbol = o)
    }
    var i, o = (i = 0, function(e) {
        return "jscomp_symbol_" + (e || "") + i++
    });

    function s() {
        n();
        var e = r.Symbol.iterator;
        e || (e = r.Symbol.iterator = r.Symbol("iterator")), "function" != typeof Array.prototype[e] && t(Array.prototype, e, {
            configurable: !0,
            writable: !0,
            value: function() {
                return a(this)
            }
        }), s = function() {}
    }

    function a(e) {
        var t, n = 0;
        return t = function() {
            return n < e.length ? {
                done: !1,
                value: e[n++]
            } : {
                done: !0
            }
        }, s(), (t = {
            next: t
        })[r.Symbol.iterator] = function() {
            return this
        }, t
    }

    function c(e) {
        s(), n(), s();
        var t = e[Symbol.iterator];
        return t ? t.call(e) : a(e)
    }

    function u() {
        this.g = !1, this.c = null, this.m = void 0, this.b = 1, this.l = this.o = 0, this.f = null
    }

    function l(e) {
        if (e.g) throw new TypeError("Generator is already running");
        e.g = !0
    }

    function p(e, t, n) {
        return e.b = n, {
            value: t
        }
    }

    function d(e) {
        for (var t in this.v = e, this.j = [], e) this.j.push(t);
        this.j.reverse()
    }

    function h(e) {
        this.a = new u, this.w = e
    }

    function f(t, e, n, r) {
        try {
            var i = e.call(t.a.c, n);
            if (!(i instanceof Object)) throw new TypeError("Iterator result " + i + " is not an object");
            if (!i.done) return t.a.g = !1, i;
            var o = i.value
        } catch (e) {
            return t.a.c = null, t.a.i(e), m(t)
        }
        return t.a.c = null, r.call(t.a, o), m(t)
    }

    function m(t) {
        for (; t.a.b;) try {
            var e = t.w(t.a);
            if (e) return t.a.g = !1, {
                value: e.value,
                done: !1
            }
        } catch (e) {
            t.a.m = void 0, t.a.i(e)
        }
        if (t.a.g = !1, t.a.f) {
            if (e = t.a.f, t.a.f = null, e.u) throw e.s;
            return {
                value: e.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function v(t) {
        this.next = function(e) {
            return t.h(e)
        }, this.throw = function(e) {
            return t.i(e)
        }, this.return = function(e) {
            return function(e, t) {
                l(e.a);
                var n = e.a.c;
                return n ? f(e, "return" in n ? n.return : function(e) {
                    return {
                        value: e,
                        done: !0
                    }
                }, t, e.a.return) : (e.a.return(t), m(e))
            }(t, e)
        }, s(), this[Symbol.iterator] = function() {
            return this
        }
    }

    function g(e, t) {
        return v.prototype = e.prototype, new v(new h(t))
    }
    if (u.prototype.h = function(e) {
            this.m = e
        }, u.prototype.i = function(e) {
            this.f = {
                s: e,
                u: !0
            }, this.b = this.o || this.l
        }, u.prototype.return = function(e) {
            this.f = {
                return: e
            }, this.b = this.l
        }, h.prototype.h = function(e) {
            return l(this.a), this.a.c ? f(this, this.a.c.next, e, this.a.h) : (this.a.h(e), m(this))
        }, h.prototype.i = function(e) {
            return l(this.a), this.a.c ? f(this, this.a.c.throw, e, this.a.h) : (this.a.i(e), m(this))
        }, "undefined" == typeof FormData || !FormData.prototype.keys) {
        var y = function(e, t, n) {
                if (arguments.length < 2) throw new TypeError("2 arguments required, but only " + arguments.length + " present.");
                return t instanceof Blob ? [e + "", t, void 0 !== n ? n + "" : "string" == typeof t.name ? t.name : "Blob"] : [e + "", t + ""]
            },
            b = function(e) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                return [e + ""]
            },
            k = function(e) {
                var t = c(e);
                return e = t.next().value, t = t.next().value, e instanceof Blob && (e = new File([e], t, {
                    type: e.type,
                    lastModified: e.lastModified
                })), e
            },
            w = "object" == typeof window ? window : "object" == typeof self ? self : this,
            _ = w.FormData,
            E = w.XMLHttpRequest && w.XMLHttpRequest.prototype.send,
            C = w.Request && w.fetch;
        n();
        var A = w.Symbol && Symbol.toStringTag,
            x = new WeakMap,
            S = Array.from || function(e) {
                return [].slice.call(e)
            };
        A && (Blob.prototype[A] || (Blob.prototype[A] = "Blob"), "File" in w && !File.prototype[A] && (File.prototype[A] = "File"));
        try {
            new File([], "")
        } catch (e) {
            w.File = function(e, t, n) {
                return e = new Blob(e, n), n = n && void 0 !== n.lastModified ? new Date(n.lastModified) : new Date, Object.defineProperties(e, {
                    name: {
                        value: t
                    },
                    lastModifiedDate: {
                        value: n
                    },
                    lastModified: {
                        value: +n
                    },
                    toString: {
                        value: function() {
                            return "[object File]"
                        }
                    }
                }), A && Object.defineProperty(e, A, {
                    value: "File"
                }), e
            }
        }
        var F = function(e) {
            if (x.set(this, Object.create(null)), !e) return this;
            for (var t = (e = c(S(e.elements))).next(); !t.done; t = e.next())
                if ((t = t.value).name && !t.disabled)
                    if ("file" === t.type)
                        for (var n = c(t.files), r = n.next(); !r.done; r = n.next()) this.append(t.name, r.value);
                    else if ("select-multiple" === t.type || "select-one" === t.type)
                for (r = (n = c(S(t.options))).next(); !r.done; r = n.next())(r = r.value).selected && this.append(t.name, r.value);
            else "checkbox" === t.type || "radio" === t.type ? t.checked && this.append(t.name, t.value) : this.append(t.name, t.value)
        };
        if ((e = F.prototype).append = function(e, t, n) {
                var r = x.get(this);
                r[e] || (r[e] = []), r[e].push([t, n])
            }, e.delete = function(e) {
                delete x.get(this)[e]
            }, e.entries = function e() {
                var r, i, o, s, a, u, l = this;
                return g(e, function(e) {
                    switch (e.b) {
                        case 1:
                            r = x.get(l), o = new d(r);
                        case 2:
                            var t;
                            e: {
                                for (t = o; 0 < t.j.length;) {
                                    var n = t.j.pop();
                                    if (n in t.v) {
                                        t = n;
                                        break e
                                    }
                                }
                                t = null
                            }
                            if (null == (i = t)) {
                                e.b = 0;
                                break
                            }
                            s = c(r[i]), a = s.next();
                        case 5:
                            if (a.done) {
                                e.b = 2;
                                break
                            }
                            return u = a.value, p(e, [i, k(u)], 6);
                        case 6:
                            a = s.next(), e.b = 5
                    }
                })
            }, e.forEach = function(e, t) {
                for (var n = c(this), r = n.next(); !r.done; r = n.next()) {
                    var i = c(r.value);
                    r = i.next().value, i = i.next().value, e.call(t, i, r, this)
                }
            }, e.get = function(e) {
                var t = x.get(this);
                return t[e] ? k(t[e][0]) : null
            }, e.getAll = function(e) {
                return (x.get(this)[e] || []).map(k)
            }, e.has = function(e) {
                return e in x.get(this)
            }, e.keys = function e() {
                var t, n, r, i, o = this;
                return g(e, function(e) {
                    switch (e.b) {
                        case 1:
                            t = c(o), n = t.next();
                        case 2:
                            if (n.done) {
                                e.b = 0;
                                break
                            }
                            return r = n.value, i = c(r), p(e, i.next().value, 3);
                        case 3:
                            n = t.next(), e.b = 2
                    }
                })
            }, e.set = function(e, t, n) {
                x.get(this)[e] = [
                    [t, n]
                ]
            }, e.values = function e() {
                var t, n, r, i, o = this;
                return g(e, function(e) {
                    switch (e.b) {
                        case 1:
                            t = c(o), n = t.next();
                        case 2:
                            if (n.done) {
                                e.b = 0;
                                break
                            }
                            return r = n.value, (i = c(r)).next(), p(e, i.next().value, 3);
                        case 3:
                            n = t.next(), e.b = 2
                    }
                })
            }, F.prototype._asNative = function() {
                for (var e = new _, t = c(this), n = t.next(); !n.done; n = t.next()) {
                    var r = c(n.value);
                    n = r.next().value, r = r.next().value, e.append(n, r)
                }
                return e
            }, F.prototype._blob = function() {
                for (var e = "----formdata-polyfill-" + Math.random(), t = [], n = c(this), r = n.next(); !r.done; r = n.next()) {
                    var i = c(r.value);
                    r = i.next().value, i = i.next().value, t.push("--" + e + "\r\n"), i instanceof Blob ? t.push('Content-Disposition: form-data; name="' + r + '"; filename="' + i.name + '"\r\n', "Content-Type: " + (i.type || "application/octet-stream") + "\r\n\r\n", i, "\r\n") : t.push('Content-Disposition: form-data; name="' + r + '"\r\n\r\n' + i + "\r\n")
                }
                return t.push("--" + e + "--"), new Blob(t, {
                    type: "multipart/form-data; boundary=" + e
                })
            }, n(), s(), F.prototype[Symbol.iterator] = function() {
                return this.entries()
            }, F.prototype.toString = function() {
                return "[object FormData]"
            }, A && (F.prototype[A] = "FormData"), [
                ["append", y],
                ["delete", b],
                ["get", b],
                ["getAll", b],
                ["has", b],
                ["set", y]
            ].forEach(function(e) {
                var t = F.prototype[e[0]];
                F.prototype[e[0]] = function() {
                    return t.apply(this, e[1].apply(this, S(arguments)))
                }
            }), E && (XMLHttpRequest.prototype.send = function(e) {
                e instanceof F && (e = e._blob(), this.setRequestHeader("Content-Type", e.type)), E.call(this, e)
            }), C) {
            var T = w.fetch;
            w.fetch = function(e, t) {
                return t && t.body && t.body instanceof F && (t.body = t.body._blob()), T(e, t)
            }
        }
        w.FormData = F
    }
}(),
function() {
    var T, P;
    T = this.jQuery || window.jQuery, P = T(window), T.fn.stick_in_parent = function(e) {
        var w, _, t, n, E, r, C, A, x, S, F;
        for (null == e && (e = {}), F = e.sticky_class, E = e.inner_scrolling, S = e.recalc_every, x = e.parent, A = e.offset_top, C = e.spacer, _ = e.bottoming, null == A && (A = 0), null == x && (x = void 0), null == E && (E = !0), null == F && (F = "is_stuck"), w = T(document), null == _ && (_ = !0), t = function(i, o, s, a, u, l, c, p) {
                var d, e, h, f, m, v, g, y, t, b, k, r;
                if (!i.data("sticky_kit")) {
                    if (i.data("sticky_kit", !0), m = w.height(), g = i.parent(), null != x && (g = g.closest(x)), !g.length) throw "failed to find stick parent";
                    if (d = h = !1, (k = null != C ? C && i.closest(C) : T("<div />")) && k.css("position", i.css("position")), (y = function() {
                            var e, t, n;
                            if (!p && (m = w.height(), e = parseInt(g.css("border-top-width"), 10), t = parseInt(g.css("padding-top"), 10), o = parseInt(g.css("padding-bottom"), 10), s = g.offset().top + e + t, a = g.height(), h && (d = h = !1, null == C && (i.insertAfter(k), k.detach()), i.css({
                                    position: "",
                                    top: "",
                                    width: "",
                                    bottom: ""
                                }).removeClass(F), n = !0), u = i.offset().top - (parseInt(i.css("margin-top"), 10) || 0) - A, l = i.outerHeight(!0), c = i.css("float"), k && k.css({
                                    width: i.outerWidth(!0),
                                    height: l,
                                    display: i.css("display"),
                                    "vertical-align": i.css("vertical-align"),
                                    float: c
                                }), n)) return r()
                        })(), l !== a) return f = void 0, v = A, b = S, r = function() {
                        var e, t, n, r;
                        if (!p && (n = !1, null != b && (--b <= 0 && (b = S, y(), n = !0)), n || w.height() === m || y(), n = P.scrollTop(), null != f && (t = n - f), f = n, h ? (_ && (r = a + s < n + l + v, d && !r && (d = !1, i.css({
                                position: "fixed",
                                bottom: "",
                                top: v
                            }).trigger("sticky_kit:unbottom"))), n < u && (h = !1, v = A, null == C && ("left" !== c && "right" !== c || i.insertAfter(k), k.detach()), e = {
                                position: "",
                                width: "",
                                top: ""
                            }, i.css(e).removeClass(F).trigger("sticky_kit:unstick")), E && ((e = P.height()) < l + A && !d && (v -= t, v = Math.max(e - l, v), v = Math.min(A, v), h && i.css({
                                top: v + "px"
                            })))) : u < n && (h = !0, (e = {
                                position: "fixed",
                                top: v
                            }).width = "border-box" === i.css("box-sizing") ? i.outerWidth() + "px" : i.width() + "px", i.css(e).addClass(F), null == C && (i.after(k), "left" !== c && "right" !== c || k.append(i)), i.trigger("sticky_kit:stick")), h && _ && (null == r && (r = a + s < n + l + v), !d && r))) return d = !0, "static" === g.css("position") && g.css({
                            position: "relative"
                        }), i.css({
                            position: "absolute",
                            bottom: o,
                            top: "auto"
                        }).trigger("sticky_kit:bottom")
                    }, t = function() {
                        return y(), r()
                    }, e = function() {
                        if (p = !0, P.off("touchmove", r), P.off("scroll", r), P.off("resize", t), T(document.body).off("sticky_kit:recalc", t), i.off("sticky_kit:detach", e), i.removeData("sticky_kit"), i.css({
                                position: "",
                                bottom: "",
                                top: "",
                                width: ""
                            }), g.position("position", ""), h) return null == C && ("left" !== c && "right" !== c || i.insertAfter(k), k.remove()), i.removeClass(F)
                    }, P.on("touchmove", r), P.on("scroll", r), P.on("resize", t), T(document.body).on("sticky_kit:recalc", t), i.on("sticky_kit:detach", e), setTimeout(r, 0)
                }
            }, n = 0, r = this.length; n < r; n++) e = this[n], t(T(e));
        return this
    }
}.call(this),
    function(e) {
        "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : window.noUiSlider = e()
    }(function() {
        "use strict";

        function a(e) {
            return null != e
        }

        function Q(e) {
            e.preventDefault()
        }

        function i(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e)
        }

        function K(e, t, n) {
            0 < n && (te(e, t), setTimeout(function() {
                ne(e, t)
            }, n))
        }

        function J(e) {
            return Math.max(Math.min(e, 100), 0)
        }

        function ee(e) {
            return Array.isArray(e) ? e : [e]
        }

        function t(e) {
            var t = (e = String(e)).split(".");
            return 1 < t.length ? t[1].length : 0
        }

        function te(e, t) {
            e.classList ? e.classList.add(t) : e.className += " " + t
        }

        function ne(e, t) {
            e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
        }

        function re(e) {
            var t = void 0 !== window.pageXOffset,
                n = "CSS1Compat" === (e.compatMode || "");
            return {
                x: t ? window.pageXOffset : n ? e.documentElement.scrollLeft : e.body.scrollLeft,
                y: t ? window.pageYOffset : n ? e.documentElement.scrollTop : e.body.scrollTop
            }
        }

        function c(e, t) {
            return 100 / (t - e)
        }

        function p(e, t) {
            return 100 * t / (e[1] - e[0])
        }

        function d(e, t) {
            for (var n = 1; e >= t[n];) n += 1;
            return n
        }

        function n(e, t, n) {
            if (n >= e.slice(-1)[0]) return 100;
            var r, i, o = d(n, e),
                s = e[o - 1],
                a = e[o],
                u = t[o - 1],
                l = t[o];
            return u + (i = n, p(r = [s, a], r[0] < 0 ? i + Math.abs(r[0]) : i - r[0]) / c(u, l))
        }

        function r(e, t, n, r) {
            if (100 === r) return r;
            var i, o, s = d(r, e),
                a = e[s - 1],
                u = e[s];
            return n ? (u - a) / 2 < r - a ? u : a : t[s - 1] ? e[s - 1] + (i = r - e[s - 1], o = t[s - 1], Math.round(i / o) * o) : r
        }

        function o(e, t, n) {
            var r;
            if ("number" == typeof t && (t = [t]), !Array.isArray(t)) throw new Error("noUiSlider (" + oe + "): 'range' contains invalid value.");
            if (!i(r = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e)) || !i(t[0])) throw new Error("noUiSlider (" + oe + "): 'range' value isn't numeric.");
            n.xPct.push(r), n.xVal.push(t[0]), r ? n.xSteps.push(!isNaN(t[1]) && t[1]) : isNaN(t[1]) || (n.xSteps[0] = t[1]), n.xHighestCompleteStep.push(0)
        }

        function s(e, t, n) {
            if (!t) return !0;
            n.xSteps[e] = p([n.xVal[e], n.xVal[e + 1]], t) / c(n.xPct[e], n.xPct[e + 1]);
            var r = (n.xVal[e + 1] - n.xVal[e]) / n.xNumSteps[e],
                i = Math.ceil(Number(r.toFixed(3)) - 1),
                o = n.xVal[e] + n.xNumSteps[e] * i;
            n.xHighestCompleteStep[e] = o
        }

        function u(e, t, n) {
            this.xPct = [], this.xVal = [], this.xSteps = [n || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = t;
            var r, i = [];
            for (r in e) e.hasOwnProperty(r) && i.push([e[r], r]);
            for (i.length && "object" == typeof i[0][0] ? i.sort(function(e, t) {
                    return e[0][0] - t[0][0]
                }) : i.sort(function(e, t) {
                    return e[0] - t[0]
                }), r = 0; r < i.length; r++) o(i[r][1], i[r][0], this);
            for (this.xNumSteps = this.xSteps.slice(0), r = 0; r < this.xNumSteps.length; r++) s(r, this.xNumSteps[r], this)
        }

        function l(e) {
            if ("object" == typeof(t = e) && "function" == typeof t.to && "function" == typeof t.from) return !0;
            var t;
            throw new Error("noUiSlider (" + oe + "): 'format' requires 'to' and 'from' methods.")
        }

        function h(e, t) {
            if (!i(t)) throw new Error("noUiSlider (" + oe + "): 'step' is not numeric.");
            e.singleStep = t
        }

        function f(e, t) {
            if ("object" != typeof t || Array.isArray(t)) throw new Error("noUiSlider (" + oe + "): 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max) throw new Error("noUiSlider (" + oe + "): Missing 'min' or 'max' in 'range'.");
            if (t.min === t.max) throw new Error("noUiSlider (" + oe + "): 'range' 'min' and 'max' cannot be equal.");
            e.spectrum = new u(t, e.snap, e.singleStep)
        }

        function m(e, t) {
            if (t = ee(t), !Array.isArray(t) || !t.length) throw new Error("noUiSlider (" + oe + "): 'start' option is incorrect.");
            e.handles = t.length, e.start = t
        }

        function v(e, t) {
            if ("boolean" != typeof(e.snap = t)) throw new Error("noUiSlider (" + oe + "): 'snap' option must be a boolean.")
        }

        function g(e, t) {
            if ("boolean" != typeof(e.animate = t)) throw new Error("noUiSlider (" + oe + "): 'animate' option must be a boolean.")
        }

        function y(e, t) {
            if ("number" != typeof(e.animationDuration = t)) throw new Error("noUiSlider (" + oe + "): 'animationDuration' option must be a number.")
        }

        function b(e, t) {
            var n, r = [!1];
            if ("lower" === t ? t = [!0, !1] : "upper" === t && (t = [!1, !0]), !0 === t || !1 === t) {
                for (n = 1; n < e.handles; n++) r.push(t);
                r.push(!1)
            } else {
                if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1) throw new Error("noUiSlider (" + oe + "): 'connect' option doesn't match handle count.");
                r = t
            }
            e.connect = r
        }

        function k(e, t) {
            switch (t) {
                case "horizontal":
                    e.ort = 0;
                    break;
                case "vertical":
                    e.ort = 1;
                    break;
                default:
                    throw new Error("noUiSlider (" + oe + "): 'orientation' option is invalid.")
            }
        }

        function w(e, t) {
            if (!i(t)) throw new Error("noUiSlider (" + oe + "): 'margin' option must be numeric.");
            if (0 !== t && (e.margin = e.spectrum.getMargin(t), !e.margin)) throw new Error("noUiSlider (" + oe + "): 'margin' option is only supported on linear sliders.")
        }

        function _(e, t) {
            if (!i(t)) throw new Error("noUiSlider (" + oe + "): 'limit' option must be numeric.");
            if (e.limit = e.spectrum.getMargin(t), !e.limit || e.handles < 2) throw new Error("noUiSlider (" + oe + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
        }

        function E(e, t) {
            if (!i(t) && !Array.isArray(t)) throw new Error("noUiSlider (" + oe + "): 'padding' option must be numeric or array of exactly 2 numbers.");
            if (Array.isArray(t) && 2 !== t.length && !i(t[0]) && !i(t[1])) throw new Error("noUiSlider (" + oe + "): 'padding' option must be numeric or array of exactly 2 numbers.");
            if (0 !== t) {
                if (Array.isArray(t) || (t = [t, t]), !(e.padding = [e.spectrum.getMargin(t[0]), e.spectrum.getMargin(t[1])]) === e.padding[0] || !1 === e.padding[1]) throw new Error("noUiSlider (" + oe + "): 'padding' option is only supported on linear sliders.");
                if (e.padding[0] < 0 || e.padding[1] < 0) throw new Error("noUiSlider (" + oe + "): 'padding' option must be a positive number(s).");
                if (100 <= e.padding[0] + e.padding[1]) throw new Error("noUiSlider (" + oe + "): 'padding' option must not exceed 100% of the range.")
            }
        }

        function C(e, t) {
            switch (t) {
                case "ltr":
                    e.dir = 0;
                    break;
                case "rtl":
                    e.dir = 1;
                    break;
                default:
                    throw new Error("noUiSlider (" + oe + "): 'direction' option was not recognized.")
            }
        }

        function A(e, t) {
            if ("string" != typeof t) throw new Error("noUiSlider (" + oe + "): 'behaviour' must be a string containing options.");
            var n = 0 <= t.indexOf("tap"),
                r = 0 <= t.indexOf("drag"),
                i = 0 <= t.indexOf("fixed"),
                o = 0 <= t.indexOf("snap"),
                s = 0 <= t.indexOf("hover");
            if (i) {
                if (2 !== e.handles) throw new Error("noUiSlider (" + oe + "): 'fixed' behaviour must be used with 2 handles");
                w(e, e.start[1] - e.start[0])
            }
            e.events = {
                tap: n || o,
                drag: r,
                fixed: i,
                snap: o,
                hover: s
            }
        }

        function x(e, t) {
            if (!1 !== t)
                if (!0 === t) {
                    e.tooltips = [];
                    for (var n = 0; n < e.handles; n++) e.tooltips.push(!0)
                } else {
                    if (e.tooltips = ee(t), e.tooltips.length !== e.handles) throw new Error("noUiSlider (" + oe + "): must pass a formatter for all handles.");
                    e.tooltips.forEach(function(e) {
                        if ("boolean" != typeof e && ("object" != typeof e || "function" != typeof e.to)) throw new Error("noUiSlider (" + oe + "): 'tooltips' must be passed a formatter or 'false'.")
                    })
                }
        }

        function S(e, t) {
            l(e.ariaFormat = t)
        }

        function F(e, t) {
            l(e.format = t)
        }

        function T(e, t) {
            if ("string" != typeof t && !1 !== t) throw new Error("noUiSlider (" + oe + "): 'cssPrefix' must be a string or `false`.");
            e.cssPrefix = t
        }

        function P(e, t) {
            if ("object" != typeof t) throw new Error("noUiSlider (" + oe + "): 'cssClasses' must be an object.");
            if ("string" == typeof e.cssPrefix)
                for (var n in e.cssClasses = {}, t) t.hasOwnProperty(n) && (e.cssClasses[n] = e.cssPrefix + t[n]);
            else e.cssClasses = t
        }

        function ie(t) {
            var n = {
                    margin: 0,
                    limit: 0,
                    padding: 0,
                    animate: !0,
                    animationDuration: 300,
                    ariaFormat: I,
                    format: I
                },
                r = {
                    step: {
                        r: !1,
                        t: h
                    },
                    start: {
                        r: !0,
                        t: m
                    },
                    connect: {
                        r: !0,
                        t: b
                    },
                    direction: {
                        r: !0,
                        t: C
                    },
                    snap: {
                        r: !1,
                        t: v
                    },
                    animate: {
                        r: !1,
                        t: g
                    },
                    animationDuration: {
                        r: !1,
                        t: y
                    },
                    range: {
                        r: !0,
                        t: f
                    },
                    orientation: {
                        r: !1,
                        t: k
                    },
                    margin: {
                        r: !1,
                        t: w
                    },
                    limit: {
                        r: !1,
                        t: _
                    },
                    padding: {
                        r: !1,
                        t: E
                    },
                    behaviour: {
                        r: !0,
                        t: A
                    },
                    ariaFormat: {
                        r: !1,
                        t: S
                    },
                    format: {
                        r: !1,
                        t: F
                    },
                    tooltips: {
                        r: !1,
                        t: x
                    },
                    cssPrefix: {
                        r: !0,
                        t: T
                    },
                    cssClasses: {
                        r: !0,
                        t: P
                    }
                },
                i = {
                    connect: !1,
                    direction: "ltr",
                    behaviour: "tap",
                    orientation: "horizontal",
                    cssPrefix: "noUi-",
                    cssClasses: {
                        target: "target",
                        base: "base",
                        origin: "origin",
                        handle: "handle",
                        handleLower: "handle-lower",
                        handleUpper: "handle-upper",
                        horizontal: "horizontal",
                        vertical: "vertical",
                        background: "background",
                        connect: "connect",
                        connects: "connects",
                        ltr: "ltr",
                        rtl: "rtl",
                        draggable: "draggable",
                        drag: "state-drag",
                        tap: "state-tap",
                        active: "active",
                        tooltip: "tooltip",
                        pips: "pips",
                        pipsHorizontal: "pips-horizontal",
                        pipsVertical: "pips-vertical",
                        marker: "marker",
                        markerHorizontal: "marker-horizontal",
                        markerVertical: "marker-vertical",
                        markerNormal: "marker-normal",
                        markerLarge: "marker-large",
                        markerSub: "marker-sub",
                        value: "value",
                        valueHorizontal: "value-horizontal",
                        valueVertical: "value-vertical",
                        valueNormal: "value-normal",
                        valueLarge: "value-large",
                        valueSub: "value-sub"
                    }
                };
            t.format && !t.ariaFormat && (t.ariaFormat = t.format), Object.keys(r).forEach(function(e) {
                if (!a(t[e]) && void 0 === i[e]) {
                    if (r[e].r) throw new Error("noUiSlider (" + oe + "): '" + e + "' is required.");
                    return !0
                }
                r[e].t(n, a(t[e]) ? t[e] : i[e])
            }), n.pips = t.pips;
            var e = document.createElement("div"),
                o = void 0 !== e.style.msTransform,
                s = void 0 !== e.style.transform;
            n.transformRule = s ? "transform" : o ? "msTransform" : "webkitTransform";
            return n.style = [
                ["left", "top"],
                ["right", "bottom"]
            ][n.dir][n.ort], n
        }

        function D(e, p, o) {
            function d(e, t) {
                var n = Y.createElement("div");
                return t && te(n, t), e.appendChild(n), n
            }

            function a(e, t) {
                return !!t && d(e, p.cssClasses.connect)
            }

            function t(e, t) {
                return !!p.tooltips[t] && d(e.firstChild, p.cssClasses.tooltip)
            }

            function c(t, r, i) {
                function o(e, t) {
                    var n = t === p.cssClasses.value,
                        r = n ? a : u;
                    return t + " " + (n ? l : c)[p.ort] + " " + r[e]
                }
                var s = Y.createElement("div"),
                    a = [p.cssClasses.valueNormal, p.cssClasses.valueLarge, p.cssClasses.valueSub],
                    u = [p.cssClasses.markerNormal, p.cssClasses.markerLarge, p.cssClasses.markerSub],
                    l = [p.cssClasses.valueHorizontal, p.cssClasses.valueVertical],
                    c = [p.cssClasses.markerHorizontal, p.cssClasses.markerVertical];
                return te(s, p.cssClasses.pips), te(s, 0 === p.ort ? p.cssClasses.pipsHorizontal : p.cssClasses.pipsVertical), Object.keys(t).forEach(function(e) {
                    ! function(e, t) {
                        t[1] = t[1] && r ? r(t[0], t[1]) : t[1];
                        var n = d(s, !1);
                        n.className = o(t[1], p.cssClasses.marker), n.style[p.style] = e + "%", t[1] && ((n = d(s, !1)).className = o(t[1], p.cssClasses.value), n.setAttribute("data-value", t[0]), n.style[p.style] = e + "%", n.innerText = i.to(t[0]))
                    }(e, t[e])
                }), s
            }

            function k() {
                var e;
                M && ((e = M).parentElement.removeChild(e), M = null)
            }

            function s(e) {
                k();
                var h, f, m, t, v, n, r, g, y, b, i = e.mode,
                    o = e.density || 1,
                    s = e.filter || !1,
                    a = function(e, t, n) {
                        if ("range" === e || "steps" === e) return $.xVal;
                        if ("count" === e) {
                            if (t < 2) throw new Error("noUiSlider (" + oe + "): 'values' (>= 2) required for mode 'count'.");
                            var r = t - 1,
                                i = 100 / r;
                            for (t = []; r--;) t[r] = r * i;
                            t.push(100), e = "positions"
                        }
                        return "positions" === e ? t.map(function(e) {
                            return $.fromStepping(n ? $.getStep(e) : e)
                        }) : "values" === e ? n ? t.map(function(e) {
                            return $.fromStepping($.getStep($.toStepping(e)))
                        }) : t : void 0
                    }(i, e.values || !1, e.stepped || !1),
                    u = (h = o, f = i, m = a, v = {}, n = $.xVal[0], r = $.xVal[$.xVal.length - 1], y = g = !1, b = 0, t = m.slice().sort(function(e, t) {
                        return e - t
                    }), (m = t.filter(function(e) {
                        return !this[e] && (this[e] = !0)
                    }, {}))[0] !== n && (m.unshift(n), g = !0), m[m.length - 1] !== r && (m.push(r), y = !0), m.forEach(function(e, t) {
                        var n, r, i, o, s, a, u, l, c, p = e,
                            d = m[t + 1];
                        if ("steps" === f && (n = $.xNumSteps[t]), n || (n = d - p), !1 !== p && void 0 !== d)
                            for (n = Math.max(n, 1e-7), r = p; r <= d; r = (r + n).toFixed(7) / 1) {
                                for (u = (s = (o = $.toStepping(r)) - b) / h, c = s / (l = Math.round(u)), i = 1; i <= l; i += 1) v[(b + i * c).toFixed(5)] = ["x", 0];
                                a = -1 < m.indexOf(r) ? 1 : "steps" === f ? 2 : 0, !t && g && (a = 0), r === d && y || (v[o.toFixed(5)] = [r, a]), b = o
                            }
                    }), v),
                    l = e.format || {
                        to: Math.round
                    };
                return M = H.appendChild(c(u, s, l))
            }

            function u() {
                var e = P.getBoundingClientRect(),
                    t = "offset" + ["Width", "Height"][p.ort];
                return 0 === p.ort ? e.width || P[t] : e.height || P[t]
            }

            function l(r, i, o, s) {
                var t = function(e) {
                        return !!(e = function(e, t, n) {
                            var r, i, o = 0 === e.type.indexOf("touch"),
                                s = 0 === e.type.indexOf("mouse"),
                                a = 0 === e.type.indexOf("pointer");
                            if (0 === e.type.indexOf("MSPointer") && (a = !0), o) {
                                var u = function(e) {
                                    return e.target === n || n.contains(e.target)
                                };
                                if ("touchstart" === e.type) {
                                    var l = Array.prototype.filter.call(e.touches, u);
                                    if (1 < l.length) return !1;
                                    r = l[0].pageX, i = l[0].pageY
                                } else {
                                    var c = Array.prototype.find.call(e.changedTouches, u);
                                    if (!c) return !1;
                                    r = c.pageX, i = c.pageY
                                }
                            }
                            return t = t || re(Y), (s || a) && (r = e.clientX + t.x, i = e.clientY + t.y), e.pageOffset = t, e.points = [r, i], e.cursor = s || a, e
                        }(e, s.pageOffset, s.target || i)) && !(H.hasAttribute("disabled") && !s.doNotReject) && (t = H, n = p.cssClasses.tap, !((t.classList ? t.classList.contains(n) : new RegExp("\\b" + n + "\\b").test(t.className)) && !s.doNotReject) && !(r === L.start && void 0 !== e.buttons && 1 < e.buttons) && (!s.hover || !e.buttons) && (R || e.preventDefault(), e.calcPoint = e.points[p.ort], void o(e, s)));
                        var t, n
                    },
                    n = [];
                return r.split(" ").forEach(function(e) {
                    i.addEventListener(e, t, !!R && {
                        passive: !0
                    }), n.push([e, t])
                }), n
            }

            function h(e) {
                var t, n, r, i, o, s, a = 100 * (e - (t = P, n = p.ort, r = t.getBoundingClientRect(), i = t.ownerDocument, o = i.documentElement, s = re(i), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (s.x = 0), n ? r.top + s.y - o.clientTop : r.left + s.x - o.clientLeft)) / u();
                return a = J(a), p.dir ? 100 - a : a
            }

            function f(e, t) {
                "mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && v(e, t)
            }

            function m(e, t) {
                if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === e.buttons && 0 !== t.buttonsProperty) return v(e, t);
                var n = (p.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
                E(0 < n, 100 * n / t.baseSize, t.locations, t.handleNumbers)
            }

            function v(e, t) {
                t.handle && (ne(t.handle, p.cssClasses.active), q -= 1), t.listeners.forEach(function(e) {
                    W.removeEventListener(e[0], e[1])
                }), 0 === q && (ne(H, p.cssClasses.drag), A(), e.cursor && (G.style.cursor = "", G.removeEventListener("selectstart", Q))), t.handleNumbers.forEach(function(e) {
                    y("change", e), y("set", e), y("end", e)
                })
            }

            function g(e, t) {
                var n;
                if (1 === t.handleNumbers.length) {
                    var r = D[t.handleNumbers[0]];
                    if (r.hasAttribute("disabled")) return !1;
                    n = r.children[0], q += 1, te(n, p.cssClasses.active)
                }
                e.stopPropagation();
                var i = [],
                    o = l(L.move, W, m, {
                        target: e.target,
                        handle: n,
                        listeners: i,
                        startCalcPoint: e.calcPoint,
                        baseSize: u(),
                        pageOffset: e.pageOffset,
                        handleNumbers: t.handleNumbers,
                        buttonsProperty: e.buttons,
                        locations: V.slice()
                    }),
                    s = l(L.end, W, v, {
                        target: e.target,
                        handle: n,
                        listeners: i,
                        doNotReject: !0,
                        handleNumbers: t.handleNumbers
                    }),
                    a = l("mouseout", W, f, {
                        target: e.target,
                        handle: n,
                        listeners: i,
                        doNotReject: !0,
                        handleNumbers: t.handleNumbers
                    });
                i.push.apply(i, o.concat(s, a)), e.cursor && (G.style.cursor = getComputedStyle(e.target).cursor, 1 < D.length && te(H, p.cssClasses.drag), G.addEventListener("selectstart", Q, !1)), t.handleNumbers.forEach(function(e) {
                    y("start", e)
                })
            }

            function n(e) {
                e.stopPropagation();
                var r, i, o, t = h(e.calcPoint),
                    n = (r = t, o = !(i = 100), D.forEach(function(e, t) {
                        if (!e.hasAttribute("disabled")) {
                            var n = Math.abs(V[t] - r);
                            (n < i || 100 === n && 100 === i) && (o = t, i = n)
                        }
                    }), o);
                if (!1 === n) return !1;
                p.events.snap || K(H, p.cssClasses.tap, p.animationDuration), x(n, t, !0, !0), A(), y("slide", n, !0), y("update", n, !0), y("change", n, !0), y("set", n, !0), p.events.snap && g(e, {
                    handleNumbers: [n]
                })
            }

            function r(e) {
                var t = h(e.calcPoint),
                    n = $.getStep(t),
                    r = $.fromStepping(n);
                Object.keys(X).forEach(function(e) {
                    "hover" === e.split(".")[0] && X[e].forEach(function(e) {
                        e.call(O, r)
                    })
                })
            }

            function i(e, t) {
                X[e] = X[e] || [], X[e].push(t), "update" === e.split(".")[0] && D.forEach(function(e, t) {
                    y("update", t)
                })
            }

            function y(n, r, i) {
                Object.keys(X).forEach(function(e) {
                    var t = e.split(".")[0];
                    n === t && X[e].forEach(function(e) {
                        e.call(O, z.map(p.format.to), r, z.slice(), i || !1, V.slice())
                    })
                })
            }

            function b(e) {
                return e + "%"
            }

            function w(e, t, n, r, i, o) {
                return 1 < D.length && (r && 0 < t && (n = Math.max(n, e[t - 1] + p.margin)), i && t < D.length - 1 && (n = Math.min(n, e[t + 1] - p.margin))), 1 < D.length && p.limit && (r && 0 < t && (n = Math.min(n, e[t - 1] + p.limit)), i && t < D.length - 1 && (n = Math.max(n, e[t + 1] - p.limit))), p.padding && (0 === t && (n = Math.max(n, p.padding[0])), t === D.length - 1 && (n = Math.min(n, 100 - p.padding[1]))), !((n = J(n = $.getStep(n))) === e[t] && !o) && n
            }

            function _(e, t) {
                var n = p.ort;
                return (n ? t : e) + ", " + (n ? e : t)
            }

            function E(e, r, n, t) {
                var i = n.slice(),
                    o = [!e, e],
                    s = [e, !e];
                t = t.slice(), e && t.reverse(), 1 < t.length ? t.forEach(function(e, t) {
                    var n = w(i, e, i[e] + r, o[t], s[t], !1);
                    !1 === n ? r = 0 : (r = n - i[e], i[e] = n)
                }) : o = s = [!0];
                var a = !1;
                t.forEach(function(e, t) {
                    a = x(e, n[e] + r, o[t], s[t]) || a
                }), a && t.forEach(function(e) {
                    y("update", e), y("slide", e)
                })
            }

            function C(e, t) {
                return p.dir ? 100 - e - t : e
            }

            function A() {
                U.forEach(function(e) {
                    var t = 50 < V[e] ? -1 : 1,
                        n = 3 + (D.length + t * e);
                    D[e].style.zIndex = n
                })
            }

            function x(e, t, n, r) {
                return !1 !== (t = w(V, e, t, n, r, !1)) && (function(e, t) {
                    V[e] = t, z[e] = $.fromStepping(t);
                    var n = "translate(" + _(b(C(t, 0) - Z), "0") + ")";
                    D[e].style[p.transformRule] = n, S(e), S(e + 1)
                }(e, t), !0)
            }

            function S(e) {
                if (I[e]) {
                    var t = 0,
                        n = 100;
                    0 !== e && (t = V[e - 1]), e !== I.length - 1 && (n = V[e]);
                    var r = n - t,
                        i = "translate(" + _(b(C(t, r)), "0") + ")",
                        o = "scale(" + _(r / 100, "1") + ")";
                    I[e].style[p.transformRule] = i + " " + o
                }
            }

            function F(e, t) {
                var r = ee(e),
                    n = void 0 === V[0];
                t = void 0 === t || !!t, p.animate && !n && K(H, p.cssClasses.tap, p.animationDuration), U.forEach(function(e) {
                    var t, n;
                    x(e, (t = r[e], n = e, null === t || !1 === t || void 0 === t ? V[n] : ("number" == typeof t && (t = String(t)), t = p.format.from(t), !1 === (t = $.toStepping(t)) || isNaN(t) ? V[n] : t)), !0, !1)
                }), U.forEach(function(e) {
                    x(e, V[e], !0, !0)
                }), A(), U.forEach(function(e) {
                    y("update", e), null !== r[e] && t && y("set", e)
                })
            }

            function T() {
                var e = z.map(p.format.to);
                return 1 === e.length ? e[0] : e
            }
            var P, D, I, O, M, j, B, N, L = window.navigator.pointerEnabled ? {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                } : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                },
                R = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        window.addEventListener("test", null, t)
                    } catch (e) {}
                    return e
                }(),
                H = e,
                V = [],
                U = [],
                q = 0,
                $ = p.spectrum,
                z = [],
                X = {},
                Y = e.ownerDocument,
                W = Y.documentElement,
                G = Y.body,
                Z = "rtl" === Y.dir || 1 === p.ort ? 0 : 100;
            return te(N = H, p.cssClasses.target), 0 === p.dir ? te(N, p.cssClasses.ltr) : te(N, p.cssClasses.rtl), 0 === p.ort ? te(N, p.cssClasses.horizontal) : te(N, p.cssClasses.vertical), P = d(N, p.cssClasses.base),
                function(e, t) {
                    var n, r, i, o = d(t, p.cssClasses.connects);
                    D = [], (I = []).push(a(o, e[0]));
                    for (var s = 0; s < p.handles; s++) D.push((n = s, i = void 0, r = d(t, p.cssClasses.origin), (i = d(r, p.cssClasses.handle)).setAttribute("data-handle", n), i.setAttribute("tabindex", "0"), i.setAttribute("role", "slider"), i.setAttribute("aria-orientation", p.ort ? "vertical" : "horizontal"), 0 === n ? te(i, p.cssClasses.handleLower) : n === p.handles - 1 && te(i, p.cssClasses.handleUpper), r)), U[s] = s, I.push(a(o, e[s + 1]))
                }(p.connect, P), (B = p.events).fixed || D.forEach(function(e, t) {
                    l(L.start, e.children[0], g, {
                        handleNumbers: [t]
                    })
                }), B.tap && l(L.start, P, n, {}), B.hover && l(L.move, P, r, {
                    hover: !0
                }), B.drag && I.forEach(function(e, t) {
                    if (!1 !== e && 0 !== t && t !== I.length - 1) {
                        var n = D[t - 1],
                            r = D[t],
                            i = [e];
                        te(e, p.cssClasses.draggable), B.fixed && (i.push(n.children[0]), i.push(r.children[0])), i.forEach(function(e) {
                            l(L.start, e, g, {
                                handles: [n, r],
                                handleNumbers: [t - 1, t]
                            })
                        })
                    }
                }), F(p.start), O = {
                    destroy: function() {
                        for (var e in p.cssClasses) p.cssClasses.hasOwnProperty(e) && ne(H, p.cssClasses[e]);
                        for (; H.firstChild;) H.removeChild(H.firstChild);
                        delete H.noUiSlider
                    },
                    steps: function() {
                        return V.map(function(e, t) {
                            var n = $.getNearbySteps(e),
                                r = z[t],
                                i = n.thisStep.step,
                                o = null;
                            !1 !== i && r + i > n.stepAfter.startValue && (i = n.stepAfter.startValue - r), o = r > n.thisStep.startValue ? n.thisStep.step : !1 !== n.stepBefore.step && r - n.stepBefore.highestStep, 100 === e ? i = null : 0 === e && (o = null);
                            var s = $.countStepDecimals();
                            return null !== i && !1 !== i && (i = Number(i.toFixed(s))), null !== o && !1 !== o && (o = Number(o.toFixed(s))), [o, i]
                        })
                    },
                    on: i,
                    off: function(e) {
                        var r = e && e.split(".")[0],
                            i = r && e.substring(r.length);
                        Object.keys(X).forEach(function(e) {
                            var t = e.split(".")[0],
                                n = e.substring(t.length);
                            r && r !== t || i && i !== n || delete X[e]
                        })
                    },
                    get: T,
                    set: F,
                    reset: function(e) {
                        F(p.start, e)
                    },
                    __moveHandles: function(e, t, n) {
                        E(e, t, V, n)
                    },
                    options: o,
                    updateOptions: function(t, e) {
                        var n = T(),
                            r = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                        r.forEach(function(e) {
                            void 0 !== t[e] && (o[e] = t[e])
                        });
                        var i = ie(o);
                        r.forEach(function(e) {
                            void 0 !== t[e] && (p[e] = i[e])
                        }), $ = i.spectrum, p.margin = i.margin, p.limit = i.limit, p.padding = i.padding, p.pips && s(p.pips), V = [], F(t.start || n, e)
                    },
                    target: H,
                    removePips: k,
                    pips: s
                }, p.pips && s(p.pips), p.tooltips && (j = D.map(t), i("update", function(e, t, n) {
                    if (j[t]) {
                        var r = e[t];
                        !0 !== p.tooltips[t] && (r = p.tooltips[t].to(n[t])), j[t].innerHTML = r
                    }
                })), i("update", function(e, t, s, n, a) {
                    U.forEach(function(e) {
                        var t = D[e],
                            n = w(V, e, 0, !0, !0, !0),
                            r = w(V, e, 100, !0, !0, !0),
                            i = a[e],
                            o = p.ariaFormat.to(s[e]);
                        t.children[0].setAttribute("aria-valuemin", n.toFixed(1)), t.children[0].setAttribute("aria-valuemax", r.toFixed(1)), t.children[0].setAttribute("aria-valuenow", i.toFixed(1)), t.children[0].setAttribute("aria-valuetext", o)
                    })
                }), O
        }
        var oe = "11.1.0";
        u.prototype.getMargin = function(e) {
            var t = this.xNumSteps[0];
            if (t && e / t % 1 != 0) throw new Error("noUiSlider (" + oe + "): 'limit', 'margin' and 'padding' must be divisible by step.");
            return 2 === this.xPct.length && p(this.xVal, e)
        }, u.prototype.toStepping = function(e) {
            return n(this.xVal, this.xPct, e)
        }, u.prototype.fromStepping = function(e) {
            return function(e, t, n) {
                if (100 <= n) return e.slice(-1)[0];
                var r, i = d(n, t),
                    o = e[i - 1],
                    s = e[i],
                    a = t[i - 1];
                return r = [o, s], (n - a) * c(a, t[i]) * (r[1] - r[0]) / 100 + r[0]
            }(this.xVal, this.xPct, e)
        }, u.prototype.getStep = function(e) {
            return r(this.xPct, this.xSteps, this.snap, e)
        }, u.prototype.getNearbySteps = function(e) {
            var t = d(e, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[t - 2],
                    step: this.xNumSteps[t - 2],
                    highestStep: this.xHighestCompleteStep[t - 2]
                },
                thisStep: {
                    startValue: this.xVal[t - 1],
                    step: this.xNumSteps[t - 1],
                    highestStep: this.xHighestCompleteStep[t - 1]
                },
                stepAfter: {
                    startValue: this.xVal[t - 0],
                    step: this.xNumSteps[t - 0],
                    highestStep: this.xHighestCompleteStep[t - 0]
                }
            }
        }, u.prototype.countStepDecimals = function() {
            var e = this.xNumSteps.map(t);
            return Math.max.apply(null, e)
        }, u.prototype.convert = function(e) {
            return this.getStep(this.toStepping(e))
        };
        var I = {
            to: function(e) {
                return void 0 !== e && e.toFixed(2)
            },
            from: Number
        };
        return {
            version: oe,
            create: function(e, t) {
                if (!e || !e.nodeName) throw new Error("noUiSlider (" + oe + "): create requires a single element, got: " + e);
                if (e.noUiSlider) throw new Error("noUiSlider (" + oe + "): Slider was already initialized.");
                var n = D(e, ie(t), t);
                return e.noUiSlider = n
            }
        }
    });
var $jscomp = {
    scope: {}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
    if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
    e != Array.prototype && e != Object.prototype && (e[t] = n.value)
}, $jscomp.getGlobal = function(e) {
    return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function(e) {
    return $jscomp.SYMBOL_PREFIX + (e || "") + $jscomp.symbolCounter_++
}, $jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var e = $jscomp.global.Symbol.iterator;
    e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), "function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    }), $jscomp.initSymbolIterator = function() {}
}, $jscomp.arrayIterator = function(e) {
    var t = 0;
    return $jscomp.iteratorPrototype(function() {
        return t < e.length ? {
            done: !1,
            value: e[t++]
        } : {
            done: !0
        }
    })
}, $jscomp.iteratorPrototype = function(e) {
    return $jscomp.initSymbolIterator(), (e = {
        next: e
    })[$jscomp.global.Symbol.iterator] = function() {
        return this
    }, e
}, $jscomp.array = $jscomp.array || {}, $jscomp.iteratorFromArray = function(t, n) {
    $jscomp.initSymbolIterator(), t instanceof String && (t += "");
    var r = 0,
        i = {
            next: function() {
                if (r < t.length) {
                    var e = r++;
                    return {
                        value: n(e, t[e]),
                        done: !1
                    }
                }
                return i.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                }, i.next()
            }
        };
    return i[Symbol.iterator] = function() {
        return i
    }, i
}, $jscomp.polyfill = function(e, t, n, r) {
    if (t) {
        for (n = $jscomp.global, e = e.split("."), r = 0; r < e.length - 1; r++) {
            var i = e[r];
            i in n || (n[i] = {}), n = n[i]
        }(t = t(r = n[e = e[e.length - 1]])) != r && null != t && $jscomp.defineProperty(n, e, {
            configurable: !0,
            writable: !0,
            value: t
        })
    }
}, $jscomp.polyfill("Array.prototype.keys", function(e) {
    return e || function() {
        return $jscomp.iteratorFromArray(this, function(e) {
            return e
        })
    }
}, "es6-impl", "es3");
var $jscomp$this = this;
! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.anime = t()
}(this, function() {
    function i(e) {
        if (!D.col(e)) try {
            return document.querySelectorAll(e)
        } catch (e) {}
    }

    function w(e, t) {
        for (var n = e.length, r = 2 <= arguments.length ? t : void 0, i = [], o = 0; o < n; o++)
            if (o in e) {
                var s = e[o];
                t.call(r, s, o, e) && i.push(s)
            } return i
    }

    function p(e) {
        return e.reduce(function(e, t) {
            return e.concat(D.arr(t) ? p(t) : t)
        }, [])
    }

    function o(e) {
        return D.arr(e) ? e : (D.str(e) && (e = i(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
    }

    function s(e, t) {
        return e.some(function(e) {
            return e === t
        })
    }

    function a(e) {
        var t, n = {};
        for (t in e) n[t] = e[t];
        return n
    }

    function d(e, t) {
        var n, r = a(e);
        for (n in e) r[n] = t.hasOwnProperty(n) ? t[n] : e[n];
        return r
    }

    function h(e, t) {
        var n, r = a(e);
        for (n in t) r[n] = D.und(e[n]) ? t[n] : e[n];
        return r
    }

    function u(e) {
        if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e)) return e[2]
    }

    function l(e, t) {
        return D.fnc(e) ? e(t.target, t.id, t.total) : e
    }

    function _(e, t) {
        if (t in e.style) return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
    }

    function f(e, t) {
        return D.dom(e) && s(P, t) ? "transform" : D.dom(e) && (e.getAttribute(t) || D.svg(e) && e[t]) ? "attribute" : D.dom(e) && "transform" !== t && _(e, t) ? "css" : null != e[t] ? "object" : void 0
    }

    function c(e, t) {
        switch (f(e, t)) {
            case "transform":
                return function(e, n) {
                    var t, r = -1 < (t = n).indexOf("translate") || "perspective" === t ? "px" : -1 < t.indexOf("rotate") || -1 < t.indexOf("skew") ? "deg" : void 0;
                    if (r = -1 < n.indexOf("scale") ? 1 : 0 + r, !(e = e.style.transform)) return r;
                    for (var i = [], o = [], s = [], a = /(\w+)\((.+?)\)/g; i = a.exec(e);) o.push(i[1]), s.push(i[2]);
                    return (e = w(s, function(e, t) {
                        return o[t] === n
                    })).length ? e[0] : r
                }(e, t);
            case "css":
                return _(e, t);
            case "attribute":
                return e.getAttribute(t)
        }
        return e[t] || 0
    }

    function m(e, t) {
        var n = /^(\*=|\+=|-=)/.exec(e);
        if (!n) return e;
        var r = u(e) || 0;
        switch (t = parseFloat(t), e = parseFloat(e.replace(n[0], "")), n[0][0]) {
            case "+":
                return t + e + r;
            case "-":
                return t - e + r;
            case "*":
                return t * e + r
        }
    }

    function v(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
    }

    function n(e) {
        e = e.points;
        for (var t, n = 0, r = 0; r < e.numberOfItems; r++) {
            var i = e.getItem(r);
            0 < r && (n += v(t, i)), t = i
        }
        return n
    }

    function g(e) {
        if (e.getTotalLength) return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
            case "circle":
                return 2 * Math.PI * e.getAttribute("r");
            case "rect":
                return 2 * e.getAttribute("width") + 2 * e.getAttribute("height");
            case "line":
                return v({
                    x: e.getAttribute("x1"),
                    y: e.getAttribute("y1")
                }, {
                    x: e.getAttribute("x2"),
                    y: e.getAttribute("y2")
                });
            case "polyline":
                return n(e);
            case "polygon":
                var t = e.points;
                return n(e) + v(t.getItem(t.numberOfItems - 1), t.getItem(0))
        }
    }

    function E(t, n) {
        function e(e) {
            return e = void 0 === e ? 0 : e, t.el.getPointAtLength(1 <= n + e ? n + e : 0)
        }
        var r = e(),
            i = e(-1),
            o = e(1);
        switch (t.property) {
            case "x":
                return r.x;
            case "y":
                return r.y;
            case "angle":
                return 180 * Math.atan2(o.y - i.y, o.x - i.x) / Math.PI
        }
    }

    function y(e, t) {
        var n, r = /-?\d*\.?\d+/g;
        if (n = D.pth(e) ? e.totalLength : e, D.col(n))
            if (D.rgb(n)) {
                var i = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
                n = i ? "rgba(" + i[1] + ",1)" : n
            } else n = D.hex(n) ? function(e) {
                e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
                    return t + t + n + n + r + r
                });
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return "rgba(" + (e = parseInt(t[1], 16)) + "," + parseInt(t[2], 16) + "," + (t = parseInt(t[3], 16)) + ",1)"
            }(n) : D.hsl(n) ? function(e) {
                function t(e, t, n) {
                    return n < 0 && (n += 1), 1 < n && --n, n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                }
                var n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);
                e = parseInt(n[1]) / 360;
                var r = parseInt(n[2]) / 100,
                    i = parseInt(n[3]) / 100;
                if (n = n[4] || 1, 0 == r) i = r = e = i;
                else {
                    var o = i < .5 ? i * (1 + r) : i + r - i * r,
                        s = 2 * i - o;
                    i = t(s, o, e + 1 / 3), r = t(s, o, e), e = t(s, o, e - 1 / 3)
                }
                return "rgba(" + 255 * i + "," + 255 * r + "," + 255 * e + "," + n + ")"
            }(n) : void 0;
        else i = (i = u(n)) ? n.substr(0, n.length - i.length) : n, n = t && !/\s/g.test(n) ? i + t : i;
        return {
            original: n += "",
            numbers: n.match(r) ? n.match(r).map(Number) : [0],
            strings: D.str(e) || t ? n.split(r) : []
        }
    }

    function b(e) {
        return w(e = e ? p(D.arr(e) ? e.map(o) : o(e)) : [], function(e, t, n) {
            return n.indexOf(e) === t
        })
    }

    function k(e, n) {
        var t = a(n);
        if (D.arr(e)) {
            var r = e.length;
            2 !== r || D.obj(e[0]) ? D.fnc(n.duration) || (t.duration = n.duration / r) : e = {
                value: e
            }
        }
        return o(e).map(function(e, t) {
            return t = t ? 0 : n.delay, e = D.obj(e) && !D.pth(e) ? e : {
                value: e
            }, D.und(e.delay) && (e.delay = t), e
        }).map(function(e) {
            return h(e, t)
        })
    }

    function C(o, s) {
        var a;
        return o.tweens.map(function(e) {
            var t = (e = function(e, t) {
                    var n, r = {};
                    for (n in e) {
                        var i = l(e[n], t);
                        D.arr(i) && 1 === (i = i.map(function(e) {
                            return l(e, t)
                        })).length && (i = i[0]), r[n] = i
                    }
                    return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r
                }(e, s)).value,
                n = c(s.target, o.name),
                r = a ? a.to.original : n,
                i = (r = D.arr(t) ? t[0] : r, m(D.arr(t) ? t[1] : t, r));
            n = u(i) || u(r) || u(n);
            return e.from = y(r, n), e.to = y(i, n), e.start = a ? a.end : o.offset, e.end = e.start + e.delay + e.duration, e.easing = function(e) {
                return D.arr(e) ? I.apply(this, e) : O[e]
            }(e.easing), e.elasticity = (1e3 - Math.min(Math.max(e.elasticity, 1), 999)) / 1e3, e.isPath = D.pth(t), e.isColor = D.col(e.from.original), e.isColor && (e.round = 1), a = e
        })
    }

    function A(t, e, n, r) {
        var i = "delay" === t;
        return e.length ? (i ? Math.min : Math.max).apply(Math, e.map(function(e) {
            return e[t]
        })) : i ? r.delay : n.offset + r.delay + r.duration
    }

    function r(e) {
        var t, n, r, i, o, s = d(F, e),
            a = d(T, e),
            u = (n = e.targets, (r = b(n)).map(function(e, t) {
                return {
                    target: e,
                    id: t,
                    total: r.length
                }
            })),
            l = [],
            c = h(s, a);
        for (t in e) c.hasOwnProperty(t) || "targets" === t || l.push({
            name: t,
            offset: c.offset,
            tweens: k(e[t], a)
        });
        return o = l, h(s, {
            children: [],
            animatables: i = u,
            animations: e = w(p(i.map(function(r) {
                return o.map(function(e) {
                    var t = f(r.target, e.name);
                    if (t) {
                        var n = C(e, r);
                        e = {
                            type: t,
                            property: e.name,
                            animatable: r,
                            tweens: n,
                            duration: n[n.length - 1].end,
                            delay: n[0].delay
                        }
                    } else e = void 0;
                    return e
                })
            })), function(e) {
                return !D.und(e)
            }),
            duration: A("duration", e, s, a),
            delay: A("delay", e, s, a)
        })
    }

    function x(e) {
        function c() {
            return window.Promise && new Promise(function(e) {
                return y = e
            })
        }

        function p(e) {
            return k.reversed ? k.duration - e : e
        }

        function d(t) {
            for (var e = 0, n = {}, r = k.animations, i = r.length; e < i;) {
                var o = r[e],
                    s = o.animatable,
                    a = (u = o.tweens)[p = u.length - 1];
                p && (a = w(u, function(e) {
                    return t < e.end
                })[0] || a);
                for (var u = Math.min(Math.max(t - a.start - a.delay, 0), a.duration) / a.duration, l = isNaN(u) ? 1 : a.easing(u, a.elasticity), c = (u = a.to.strings, a.round), p = [], d = void 0, h = (d = a.to.numbers.length, 0); h < d; h++) {
                    var f = void 0,
                        m = (f = a.to.numbers[h], a.from.numbers[h]);
                    f = a.isPath ? E(a.value, l * f) : m + l * (f - m);
                    c && (a.isColor && 2 < h || (f = Math.round(f * c) / c)), p.push(f)
                }
                if (a = u.length)
                    for (d = u[0], l = 0; l < a; l++) c = u[l + 1], h = p[l], isNaN(h) || (d = c ? d + (h + c) : d + (h + " "));
                else d = p[0];
                M[o.type](s.target, o.property, d, n, s.id), o.currentValue = d, e++
            }
            if (e = Object.keys(n).length)
                for (r = 0; r < e; r++) S || (S = _(document.body, "transform") ? "transform" : "-webkit-transform"), k.animatables[r].target.style[S] = n[r].join(" ");
            k.currentTime = t, k.progress = t / k.duration * 100
        }

        function h(e) {
            k[e] && k[e](k)
        }

        function f() {
            k.remaining && !0 !== k.remaining && k.remaining--
        }

        function t(e) {
            var t = k.duration,
                n = k.offset,
                r = n + k.delay,
                i = k.currentTime,
                o = k.reversed,
                s = p(e);
            if (k.children.length) {
                var a = k.children,
                    u = a.length;
                if (s >= k.currentTime)
                    for (var l = 0; l < u; l++) a[l].seek(s);
                else
                    for (; u--;) a[u].seek(s)
            }(r <= s || !t) && (k.began || (k.began = !0, h("begin")), h("run")), n < s && s < t ? d(s) : (s <= n && 0 !== i && (d(0), o && f()), (t <= s && i !== t || !t) && (d(t), o || f())), h("update"), t <= e && (k.remaining ? (v = m, "alternate" === k.direction && (k.reversed = !k.reversed)) : (k.pause(), k.completed || (k.completed = !0, h("complete"), "Promise" in window && (y(), b = c()))), g = 0)
        }
        e = void 0 === e ? {} : e;
        var m, v, g = 0,
            y = null,
            b = c(),
            k = r(e);
        return k.reset = function() {
            var e = k.direction,
                t = k.loop;
            for (k.currentTime = 0, k.progress = 0, k.paused = !0, k.began = !1, k.completed = !1, k.reversed = "reverse" === e, k.remaining = "alternate" === e && 1 === t ? 2 : t, d(0), e = k.children.length; e--;) k.children[e].reset()
        }, k.tick = function(e) {
            m = e, v || (v = m), t((g + m - v) * x.speed)
        }, k.seek = function(e) {
            t(p(e))
        }, k.pause = function() {
            var e = j.indexOf(k); - 1 < e && j.splice(e, 1), k.paused = !0
        }, k.play = function() {
            k.paused && (k.paused = !1, v = 0, g = p(k.currentTime), j.push(k), B || N())
        }, k.reverse = function() {
            k.reversed = !k.reversed, v = 0, g = p(k.currentTime)
        }, k.restart = function() {
            k.pause(), k.reset(), k.play()
        }, k.finished = b, k.reset(), k.autoplay && k.play(), k
    }
    var S, F = {
            update: void 0,
            begin: void 0,
            run: void 0,
            complete: void 0,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            offset: 0
        },
        T = {
            duration: 1e3,
            delay: 0,
            easing: "easeOutElastic",
            elasticity: 500,
            round: 0
        },
        P = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
        D = {
            arr: function(e) {
                return Array.isArray(e)
            },
            obj: function(e) {
                return -1 < Object.prototype.toString.call(e).indexOf("Object")
            },
            pth: function(e) {
                return D.obj(e) && e.hasOwnProperty("totalLength")
            },
            svg: function(e) {
                return e instanceof SVGElement
            },
            dom: function(e) {
                return e.nodeType || D.svg(e)
            },
            str: function(e) {
                return "string" == typeof e
            },
            fnc: function(e) {
                return "function" == typeof e
            },
            und: function(e) {
                return void 0 === e
            },
            hex: function(e) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
            },
            rgb: function(e) {
                return /^rgb/.test(e)
            },
            hsl: function(e) {
                return /^hsl/.test(e)
            },
            col: function(e) {
                return D.hex(e) || D.rgb(e) || D.hsl(e)
            }
        },
        I = function() {
            function p(e, t, n) {
                return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
            }
            return function(s, a, u, l) {
                if (0 <= s && s <= 1 && 0 <= u && u <= 1) {
                    var c = new Float32Array(11);
                    if (s !== a || u !== l)
                        for (var e = 0; e < 11; ++e) c[e] = p(.1 * e, s, u);
                    return function(e) {
                        if (s === a && u === l) return e;
                        if (0 === e) return 0;
                        if (1 === e) return 1;
                        for (var t = 0, n = 1; 10 !== n && c[n] <= e; ++n) t += .1;
                        n = t + (e - c[--n]) / (c[n + 1] - c[n]) * .1;
                        var r = 3 * (1 - 3 * u + 3 * s) * n * n + 2 * (3 * u - 6 * s) * n + 3 * s;
                        if (.001 <= r) {
                            for (t = 0; t < 4 && 0 !== (r = 3 * (1 - 3 * u + 3 * s) * n * n + 2 * (3 * u - 6 * s) * n + 3 * s); ++t) {
                                var i = p(n, s, u) - e;
                                n = n - i / r
                            }
                            e = n
                        } else if (0 === r) e = n;
                        else {
                            n = t, t = t + .1;
                            for (var o = 0; 0 < (r = p(i = n + (t - n) / 2, s, u) - e) ? t = i : n = i, 1e-7 < Math.abs(r) && ++o < 10;);
                            e = i
                        }
                        return p(e, a, l)
                    }
                }
            }
        }(),
        O = function() {
            function n(e, t) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 10 * (e - 1)) * Math.sin(2 * (e - 1 - t / (2 * Math.PI) * Math.asin(1)) * Math.PI / t)
            }
            var e, r = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
                t = {
                    In: [
                        [.55, .085, .68, .53],
                        [.55, .055, .675, .19],
                        [.895, .03, .685, .22],
                        [.755, .05, .855, .06],
                        [.47, 0, .745, .715],
                        [.95, .05, .795, .035],
                        [.6, .04, .98, .335],
                        [.6, -.28, .735, .045], n
                    ],
                    Out: [
                        [.25, .46, .45, .94],
                        [.215, .61, .355, 1],
                        [.165, .84, .44, 1],
                        [.23, 1, .32, 1],
                        [.39, .575, .565, 1],
                        [.19, 1, .22, 1],
                        [.075, .82, .165, 1],
                        [.175, .885, .32, 1.275],
                        function(e, t) {
                            return 1 - n(1 - e, t)
                        }
                    ],
                    InOut: [
                        [.455, .03, .515, .955],
                        [.645, .045, .355, 1],
                        [.77, 0, .175, 1],
                        [.86, 0, .07, 1],
                        [.445, .05, .55, .95],
                        [1, 0, 0, 1],
                        [.785, .135, .15, .86],
                        [.68, -.55, .265, 1.55],
                        function(e, t) {
                            return e < .5 ? n(2 * e, t) / 2 : 1 - n(-2 * e + 2, t) / 2
                        }
                    ]
                },
                i = {
                    linear: I(.25, .25, .75, .75)
                },
                o = {};
            for (e in t) o.type = e, t[o.type].forEach(function(n) {
                return function(e, t) {
                    i["ease" + n.type + r[t]] = D.fnc(e) ? e : I.apply($jscomp$this, e)
                }
            }(o)), o = {
                type: o.type
            };
            return i
        }(),
        M = {
            css: function(e, t, n) {
                return e.style[t] = n
            },
            attribute: function(e, t, n) {
                return e.setAttribute(t, n)
            },
            object: function(e, t, n) {
                return e[t] = n
            },
            transform: function(e, t, n, r, i) {
                r[i] || (r[i] = []), r[i].push(t + "(" + n + ")")
            }
        },
        j = [],
        B = 0,
        N = function() {
            function r() {
                B = requestAnimationFrame(e)
            }

            function e(e) {
                var t = j.length;
                if (t) {
                    for (var n = 0; n < t;) j[n] && j[n].tick(e), n++;
                    r()
                } else cancelAnimationFrame(B), B = 0
            }
            return r
        }();
    return x.version = "2.2.0", x.speed = 1, x.running = j, x.remove = function(e) {
        e = b(e);
        for (var t = j.length; t--;)
            for (var n = j[t], r = n.animations, i = r.length; i--;) s(e, r[i].animatable.target) && (r.splice(i, 1), r.length || n.pause())
    }, x.getValue = c, x.path = function(e, t) {
        var n = D.str(e) ? i(e)[0] : e,
            r = t || 100;
        return function(e) {
            return {
                el: n,
                property: e,
                totalLength: g(n) * (r / 100)
            }
        }
    }, x.setDashoffset = function(e) {
        var t = g(e);
        return e.setAttribute("stroke-dasharray", t), t
    }, x.bezier = I, x.easings = O, x.timeline = function(r) {
        var i = x(r);
        return i.pause(), i.duration = 0, i.add = function(e) {
            return i.children.forEach(function(e) {
                e.began = !0, e.completed = !0
            }), o(e).forEach(function(e) {
                var t = h(e, d(T, r || {}));
                t.targets = t.targets || r.targets, e = i.duration;
                var n = t.offset;
                t.autoplay = !1, t.direction = i.direction, t.offset = D.und(n) ? e : m(n, e), i.began = !0, i.completed = !0, i.seek(t.offset), (t = x(t)).began = !0, t.completed = !0, t.duration > e && (i.duration = t.duration), i.children.push(t)
            }), i.seek(0), i.reset(), i.autoplay && i.restart(), i
        }, i
    }, x.random = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }, x
}),
function(a) {
    a.fn.countdown = function(e) {
        var t, n, r, i, o, s = a.extend({
            callback: function() {},
            timestamp: 0
        }, e);
        return function e() {
            (t = Math.floor((s.timestamp - new Date) / 1e3)) < 0 && (t = 0), n = Math.floor(t / 86400), t -= 86400 * n, r = Math.floor(t / 3600), t -= 3600 * r, i = Math.floor(t / 60), o = t -= 60 * i, s.callback(n, r, i, o), setTimeout(e, 1e3)
        }(), this
    }
}(jQuery),
function(e) {
    var l = 4,
        c = .001,
        p = 1e-7,
        d = 10,
        h = 11,
        f = 1 / (h - 1),
        i = "function" == typeof Float32Array;

    function r(e, t) {
        return 1 - 3 * t + 3 * e
    }

    function o(e, t) {
        return 3 * t - 6 * e
    }

    function s(e) {
        return 3 * e
    }

    function m(e, t, n) {
        return ((r(t, n) * e + o(t, n)) * e + s(t)) * e
    }

    function v(e, t, n) {
        return 3 * r(t, n) * e * e + 2 * o(t, n) * e + s(t)
    }

    function g(e) {
        return e
    }
    e.BezierEasing = function(s, t, a, n) {
        if (!(0 <= s && s <= 1 && 0 <= a && a <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        if (s === t && a === n) return g;
        for (var u = i ? new Float32Array(h) : new Array(h), e = 0; e < h; ++e) u[e] = m(e * f, s, a);

        function r(e) {
            for (var t = 0, n = 1, r = h - 1; n !== r && u[n] <= e; ++n) t += f;
            var i = t + (e - u[--n]) / (u[n + 1] - u[n]) * f,
                o = v(i, s, a);
            return c <= o ? function(e, t, n, r) {
                for (var i = 0; i < l; ++i) {
                    var o = v(t, n, r);
                    if (0 === o) return t;
                    t -= (m(t, n, r) - e) / o
                }
                return t
            }(e, i, s, a) : 0 === o ? i : function(e, t, n, r, i) {
                for (var o, s, a = 0; 0 < (o = m(s = t + (n - t) / 2, r, i) - e) ? n = s : t = s, Math.abs(o) > p && ++a < d;);
                return s
            }(e, t, t + f, s, a)
        }
        return function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : m(r(e), t, n)
        }
    }
}(window), window.$clamp = function(i, e) {
        function n(e, t) {
            return u.getComputedStyle || (u.getComputedStyle = function(n, e) {
                return this.el = n, this.getPropertyValue = function(e) {
                    var t = /(\-([a-z]){1})/g;
                    return "float" == e && (e = "styleFloat"), t.test(e) && (e = e.replace(t, function(e, t, n) {
                        return n.toUpperCase()
                    })), n.currentStyle && n.currentStyle[e] ? n.currentStyle[e] : null
                }, this
            }), u.getComputedStyle(e, null).getPropertyValue(t)
        }

        function t(e) {
            e = e || i.clientHeight;
            var t = r(i);
            return Math.max(Math.floor(e / t), 0)
        }

        function r(e) {
            var t = n(e, "line-height");
            return "normal" == t && (t = 1.2 * parseInt(n(e, "font-size"))), parseInt(t)
        }

        function o(e) {
            return e.lastChild.children && 0 < e.lastChild.children.length ? o(Array.prototype.slice.call(e.children).pop()) : e.lastChild && e.lastChild.nodeValue && "" != e.lastChild.nodeValue && e.lastChild.nodeValue != l.truncationChar ? e.lastChild : (e.lastChild.parentNode.removeChild(e.lastChild), o(i))
        }

        function s(e, t) {
            e.nodeValue = t + l.truncationChar
        }
        e = e || {};
        var a, u = window,
            l = {
                clamp: e.clamp || 2,
                useNativeClamp: void 0 === e.useNativeClamp || e.useNativeClamp,
                splitOnChars: e.splitOnChars || [".", "-", "вАУ", "вАФ", " "],
                animate: e.animate || !1,
                truncationChar: e.truncationChar || "вА¶",
                truncationHTML: e.truncationHTML
            },
            c = i.style,
            p = i.innerHTML,
            d = void 0 !== i.style.webkitLineClamp,
            h = l.clamp,
            f = h.indexOf && (-1 < h.indexOf("px") || -1 < h.indexOf("em"));
        l.truncationHTML && ((a = document.createElement("span")).innerHTML = l.truncationHTML);
        var m, v, g, y, b = l.splitOnChars.slice(0),
            k = b[0];
        return "auto" == h ? h = t() : f && (h = t(parseInt(h))), d && l.useNativeClamp ? (c.overflow = "hidden", c.textOverflow = "ellipsis", c.webkitBoxOrient = "vertical", c.display = "-webkit-box", c.webkitLineClamp = h, f && (c.height = l.clamp + "px")) : (y = h, (c = r(i) * y) <= i.clientHeight && (g = function e(t, n) {
            if (n) {
                var r = t.nodeValue.replace(l.truncationChar, "");
                if (m || (k = 0 < b.length ? b.shift() : "", m = r.split(k)), 1 < m.length ? (v = m.pop(), s(t, m.join(k))) : m = null, a && (t.nodeValue = t.nodeValue.replace(l.truncationChar, ""), i.innerHTML = t.nodeValue + " " + a.innerHTML + l.truncationChar), m) {
                    if (i.clientHeight <= n) {
                        if (!(0 <= b.length && "" != k)) return i.innerHTML;
                        s(t, m.join(k) + k + v), m = null
                    }
                } else "" == k && (s(t, ""), t = o(i), b = l.splitOnChars.slice(0), k = b[0], v = m = null);
                if (!l.animate) return e(t, n);
                setTimeout(function() {
                    e(t, n)
                }, !0 === l.animate ? 10 : l.animate)
            }
        }(o(i), c))), {
            original: p,
            clamped: g
        }
    },
    function(s, e, i) {
        if (null == i) throw new Error("jQuery is not defined!");
        var a = +(/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1];
        isNaN(a) && (a = +(/trident\/.*; rv:(\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]), i.fn.autoheight = function() {
            return this.each(function(e, t) {
                var n = i(t);
                null == n.attr("autoheight") && (n.attr("autoheight", ""), i(t).on("input change", r.bind(null, t))), r(t)
            }), this;

            function r(e) {
                var t, n, r, i = (t = e, n = s.getComputedStyle(t), "normal" === (r = n.lineHeight) ? +n.fontSize.slice(0, -2) : +r.slice(0, -2));
                if (e.offsetHeight || e.offsetWidth) {
                    e.scrollHeight <= e.clientHeight && (e.style.height = "0px");
                    var o = e.scrollHeight + e.offsetHeight - e.clientHeight;
                    e.style.height = Math.max(o, i) + (a && i ? i : 0) + "px"
                }
            }
        }, i(e.head).append("<style>[autoheight]{overflow: hidden; resize: none; box-sizing: border-box;}</style>")
    }(window, document, window.jQuery);
