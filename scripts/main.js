"use strict";
var _slicedToArray = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
            var i = [],
                n = !0,
                r = !1,
                s = void 0;
            try {
                for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (i.push(o.value), !t || i.length !== t); n = !0);
            } catch (e) {
                r = !0, s = e
            } finally {
                try {
                    !n && a.return && a.return()
                } finally {
                    if (r) throw s
                }
            }
            return i
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    },
    _createClass = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
    }();

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
        return i
    }
    return Array.from(e)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var AutoHeight = function() {
        function t(e) {
            _classCallCheck(this, t), this.textarea = e, this.createDummy(), this.addListeners(), this.update()
        }
        return _createClass(t, [{
            key: "createDummy",
            value: function() {
                var t = this;
                this.dummy = document.createElement("DIV");
                var e = {
                    position: "absolute",
                    width: "100%",
                    visibility: "hidden",
                    wordBreak: "break-word"
                };
                for (var i in e) this.dummy.style[i] = e[i];
                ["fontSize", "lineHeight", "fontFamily", "fontWeight", "fontStyle", "letterSpacing"].forEach(function(e) {
                    t.dummy.style[e] = getComputedStyle(t.textarea)[e]
                }), this.textarea.parentElement.appendChild(this.dummy)
            }
        }, {
            key: "addListeners",
            value: function() {
                var t = this;
                this.textarea.addEventListener("input", function(e) {
                    t.update()
                })
            }
        }, {
            key: "update",
            value: function() {
                this.dummy.innerText = this.textarea.value, this.textarea.parentElement.style.height = this.dummy.offsetHeight + 10 + "px"
            }
        }]), t
    }(),
    Helpers = function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "getUrlParams",
            value: function(e) {
                var t = e.slice(e.indexOf("?") + 1).split("&"),
                    s = {};
                return t.map(function(e) {
                    var t = e.split("="),
                        i = _slicedToArray(t, 2),
                        n = i[0],
                        r = i[1];
                    s[n] = decodeURIComponent(r)
                }), s
            }
        }, {
            key: "getUrlParamsFromObject",
            value: function(e) {
                var t = "";
                for (var i in e) t += i + "=" + e[i] + "&";
                return t
            }
        }, {
            key: "pad",
            value: function(e, t, i) {
                return i = i || "0", (e += "").length >= t ? e : new Array(t - e.length + 1).join(i) + e
            }
        }, {
            key: "getEaseFunction",
            value: function(e) {
                return {
                    linear: function(e) {
                        return e
                    },
                    easeInQuad: function(e) {
                        return e * e
                    },
                    easeOutQuad: function(e) {
                        return e * (2 - e)
                    },
                    easeInOutQuad: function(e) {
                        return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
                    },
                    easeInCubic: function(e) {
                        return e * e * e
                    },
                    easeOutCubic: function(e) {
                        return --e * e * e + 1
                    },
                    easeInOutCubic: function(e) {
                        return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
                    },
                    easeInQuart: function(e) {
                        return e * e * e * e
                    },
                    easeOutQuart: function(e) {
                        return 1 - --e * e * e * e
                    },
                    easeInOutQuart: function(e) {
                        return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
                    },
                    easeInQuint: function(e) {
                        return e * e * e * e * e
                    },
                    easeOutQuint: function(e) {
                        return 1 + --e * e * e * e * e
                    },
                    easeInOutQuint: function(e) {
                        return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                    }
                } [e]
            }
        }, {
            key: "getTopBottomThresholds",
            value: function(e, t) {
                var i = t || 0,
                    n = e.getBoundingClientRect(),
                    r = window.innerHeight - n.top > i && n.bottom > i,
                    s = window.innerHeight - n.top;
                return {
                    isVisible: r,
                    top: n.bottom,
                    bottom: s
                }
            }
        }, {
            key: "getScrollbarWidth",
            value: function() {
                var e = document.createElement("div");
                e.style.visibility = "hidden", e.style.width = "100px", e.style.msOverflowStyle = "scrollbar", document.body.appendChild(e);
                var t = e.offsetWidth;
                e.style.overflow = "scroll";
                var i = document.createElement("div");
                i.style.width = "100%", e.appendChild(i);
                var n = i.offsetWidth;
                return e.parentNode.removeChild(e), t - n
            }
        }, {
            key: "getScrollPos",
            value: function() {
                return document.body.scrollTop || document.documentElement.scrollTop
            }
        }, {
            key: "getHeight",
            value: function(i, e) {
                return ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"].reduce(e ? function(e, t) {
                    return log(parseFloat(getComputedStyle(i)[t])), e + parseFloat(getComputedStyle(i)[t])
                } : function(e, t) {
                    return e + parseFloat(getComputedStyle(i)[t])
                }, 0)
            }
        }, {
            key: "getOffset",
            value: function(e) {
                return e.getBoundingClientRect ? (t = e.getBoundingClientRect(), i = document.body, n = document.documentElement, r = window.pageYOffset || n.scrollTop || i.scrollTop, s = window.pageXOffset || n.scrollLeft || i.scrollLeft, o = n.clientTop || i.clientTop || 0, a = n.clientLeft || i.clientLeft || 0, l = t.top + r - o, c = t.left + s - a, {
                    top: Math.round(l),
                    left: Math.round(c)
                }) : function(e) {
                    var t = 0,
                        i = 0;
                    for (; e;) t += parseInt(e.offsetTop), i += parseInt(e.offsetLeft), e = e.offsetParent;
                    return {
                        top: t,
                        left: i
                    }
                }(e);
                var t, i, n, r, s, o, a, l, c
            }
        }, {
            key: "getCookie",
            value: function(e) {
                var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
                return t ? decodeURIComponent(t[1]) : void 0
            }
        }, {
            key: "setCookie",
            value: function(e, t, i) {
                var n = (i = i || {}).expires;
                if ("number" == typeof n && n) {
                    var r = new Date;
                    r.setTime(r.getTime() + 1e3 * n), n = i.expires = r
                }
                n && n.toUTCString && (i.expires = n.toUTCString());
                var s = e + "=" + (t = encodeURIComponent(t));
                for (var o in i) {
                    s += "; " + o;
                    var a = i[o];
                    !0 !== a && (s += "=" + a)
                }
                document.cookie = s
            }
        }, {
            key: "debounce",
            value: function(e, t) {
                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this,
                    n = null,
                    r = null,
                    s = function() {
                        return e.apply(i, r)
                    };
                return function() {
                    r = arguments, clearTimeout(n), n = setTimeout(s, t)
                }
            }
        }, {
            key: "getNdsPercentage",
            value: function() {
                return parseInt(window.ndsValue)
            }
        }, {
            key: "getLang",
            value: function() {
                return document.documentElement.lang
            }
        }, {
            key: "setCaptchaId",
            value: function() {
                0 < document.querySelectorAll(".js-captcha-submit").length && [].concat(_toConsumableArray(document.querySelectorAll(".js-captcha-submit"))).forEach(function(e, t) {
                    e.setAttribute("href", e.getAttribute("href") + ++t)
                })
            }
        }, {
            key: "sessidInputs",
            value: function() {
                var e = document.querySelectorAll('input[name="sessid"]');
                if (0 < e.length)
                    for (var t = 0; t < e.length; t++) e[t].value = BX.bitrix_sessid()
            }
        }]), e
    }(),
    Renderer = function() {
        function e() {
            _classCallCheck(this, e), this.rafId = null, this.functions = [], this.observer = new IntersectionObserver(function(e, t) {
                e.forEach(function(e) {
                    0 < e.intersectionRatio ? e.target.isShown = !0 : e.target.isShown = !1
                })
            }, {
                threshold: [0, 1]
            }), this.lastTimeMsec = 0
        }

        return _createClass(e, [
				// 	{
        //     key: "loop",
        //     value: function(i) {
        //         var t = this;
        //         this.rafId = requestAnimationFrame(function(e) {
        //             t.loop(e)
        //         }), this.lastTimeMsec = this.lastTimeMsec || i - 1e3 / 60;
        //         var n = Math.min(200, i - this.lastTimeMsec);
        //         this.lastTimeMsec = i, this.functions.length && this.functions.forEach(function(e, t) {
        //             if (!e.element.isShown) return !1;
        //             e.timer < e.delay ? e.timer += n : (e.timer = 0, e.func(n, i))
        //         })
        //     }
        // },
				{
            key: "add",
            value: function(e, t) {
                var i = this;
                this.functions.push({
                    func: e,
                    delay: t.delay || 0,
                    timer: 0,
                    id: t.id,
                    element: t.element || null,
                    screens: t.screens || 1,
                    isShown: !1
                }), t.element && this.observer.observe(t.element), this.rafId || requestAnimationFrame(function(e) {
                    i.loop(e)
                })
            }
        }, {
            key: "remove",
            value: function(i) {
                var n = -1;
                this.functions.forEach(function(e, t) {
                    e.id === i && (n = t)
                }), -1 !== n && (this.functions[n].element && this.observer.unobserve(this.functions[n].element), this.functions.splice(n, 1))
            }
        }, {
            key: "stop",
            value: function() {
                cancelAnimationFrame(this.rafId)
            }
        }, {
            key: "play",
            value: function() {
                var t = this;
                requestAnimationFrame(function(e) {
                    t.loop(e)
                })
            }
        }]), e
    }(),
    Threesixty = function() {
        function l(e, t) {
            _classCallCheck(this, l);
            var i = e.dataset.path || "./assets/img/360/",
                n = +e.dataset.count || 72,
                r = e.dataset.ext || "jpg",
                s = new Array(n).fill(i).map(function(e, t) {
                    return "" + e + Helpers.pad(t + 1, 3) + "." + r
                }),
                o = +e.dataset.start,
                a = {
                    interactive: !0,
                    currentFrame: o
                };
            this.pauseTime = 5e3, this.startFrame = o, this.progressBar = t, this.progressBar.classList.remove("hide"), this.container = e, this.startImg = this.container.querySelector("img"), this.totalFrames = s.length, this.options = a, this.mouseX = 0, this.oldMouseX = -1, this.id = this.getId(), this.timer = 0, this.duration = 180, this.sID = null, this.imagesCache = [], this.init(s)
        }
        return _createClass(l, [{
            key: "init",
            value: function(e) {
                var t = this;
                this.preloadimages(e, function(e) {
                    t.start(e), t.play()
                })
            }
        }, {
            key: "start",
            value: function(e) {
                if (this.images = e, this.reseted) return !1;
                this.emptyDomNode(this.container), this.container.appendChild(this.images[this.options.currentFrame]), this.options.interactive && this.initListeners()
            }
        }, {
            key: "play",
            value: function(e) {
                var i = this;
                if (this.reseted) return !1;
                e ? (this.sID && clearTimeout(this.sID), this.sID = setTimeout(function(e) {
                    if (i.reseted) return !1;
                    window.renderer && window.renderer.add(function(e, t) {
                        i.tick(e, t)
                    }, {
                        id: i.id,
                        element: i.container
                    })
                }, e)) : window.renderer && window.renderer.add(function(e, t) {
                    i.tick(e, t)
                }, {
                    id: this.id,
                    element: this.container
                })
            }
        }, {
            key: "stop",
            value: function(e) {
                this.sID && clearTimeout(this.sID), renderer.remove(this.id), e && (this.reseted = !0, this.container.replaceChild(this.startImg, this.container.childNodes[0]), this.options.currentFrame = this.startFrame, this.removeListeners())
            }
        }, {
            key: "tick",
            value: function(e, t) {
                this.timer < this.duration ? this.timer += e : (this.timer = 0, this.next())
            }
        }, {
            key: "getId",
            value: function() {
                return "Threesixty-" + Date.now() + 99 * Math.random()
            }
        }, {
            key: "updateProgressBar",
            value: function(e, t) {
                var i = this,
                    n = e / t;
                this.progressBar.style.transform = "scale(" + n + ", 1)", 1 === n && setTimeout(function(e) {
                    i.progressBar.classList.add("hide"), i.progressBar.style.transform = "scale(0, 1)"
                }, 50)
            }
        }, {
            key: "preloadimages",
            value: function(e, t) {
                var i = this,
                    n = e.length,
                    r = 0,
                    s = function() {
                        ++r >= n && t(o), i.updateProgressBar(r, n)
                    },
                    o = e.map(function(e) {
                        var t = new Image;
                        return t.src = e, t.onload = s, t.onerror = s, t.onabort = s, t.draggable = !1, i.imagesCache.push(t), t
                    })
            }
        }, {
            key: "initListeners",
            value: function() {
                var t = this;
                this.drag = function(e) {
                    e.preventDefault(), t.mouseX = void 0 !== e.pageX && e.pageX ? e.pageX : e.changedTouches[0].pageX, t.mouseX < t.oldMouseX ? t.previous() : t.mouseX > t.oldMouseX && t.next(), t.oldMouseX = t.mouseX
                }, this.startDrag = function(e) {
                    e.preventDefault(), t.stop(), document.addEventListener("touchmove", t.drag), document.addEventListener("mousemove", t.drag), document.addEventListener("touchend", t.stopDrag), document.addEventListener("mouseup", t.stopDrag)
                }, this.stopDrag = function(e) {
                    e.preventDefault(), t.play(t.pauseTime), document.removeEventListener("touchmove", t.drag), document.removeEventListener("mousemove", t.drag), document.removeEventListener("touchend", t.stopDrag), document.removeEventListener("mouseup", t.stopDrag)
                }, this.container.addEventListener("touchstart", this.startDrag), this.container.addEventListener("mousedown", this.startDrag)
            }
        }, {
            key: "removeListeners",
            value: function() {
                this.container.removeEventListener("touchstart", this.startDrag), this.container.removeEventListener("mousedown", this.startDrag)
            }
        }, {
            key: "replaceImage",
            value: function() {
                this.container.replaceChild(this.images[this.options.currentFrame], this.container.childNodes[0])
            }
        }, {
            key: "setFrame",
            value: function() {
                this.container.replaceChild(this.images[this.startFrame], this.container.childNodes[0])
            }
        }, {
            key: "previous",
            value: function() {
                this.options.currentFrame--, this.options.currentFrame < 0 && (this.options.currentFrame = this.totalFrames - 1), this.replaceImage()
            }
        }, {
            key: "next",
            value: function() {
                this.options.currentFrame++, this.options.currentFrame === this.totalFrames && (this.options.currentFrame = 0), this.replaceImage()
            }
        }, {
            key: "isInteractive",
            value: function() {
                this.options.interactive
            }
        }, {
            key: "getCurrentFrame",
            value: function() {
                this.options.currentFrame
            }
        }, {
            key: "emptyDomNode",
            value: function(e) {
                if (e.hasChildNodes())
                    for (; e.firstChild;) e.removeChild(e.firstChild)
            }
        }]), l
    }(),
    BuyButton = function() {
        function r(e) {
            var i = this;
            for (var t in _classCallCheck(this, r), this.button = e, void 0 !== window.cartItems && 0 < window.cartItems.length && this.arranger(), this.props = {}, this.props.default = {
                    width: 0,
                    height: 0,
                    borderRadius: 0,
                    padding: 0,
                    color: 0,
                    backgroundColor: 0,
                    borderColor: 0,
                    marginRight: 0
                }, this.props.rounded = {
                    width: 0,
                    height: 0,
                    borderRadius: "150px",
                    padding: 0,
                    color: "transparent",
                    backgroundColor: "transparent",
                    borderColor: "#bfcad9",
                    marginRight: 0
                }, this.props.default) this.props.default[t] = getComputedStyle(this.button)[t];
            var n = (parseFloat(this.props.default.width) - parseFloat(this.props.default.height)) / 2;
            this.props.rounded.marginRight = n + "px", this.props.rounded.height = this.props.default.height, this.props.rounded.width = this.props.default.height, this.done = !0, this.button.addEventListener("click", function(e) {
                if (i.done && !i.button.classList.contains("done") && (e.preventDefault(), i.done = !1, i.r(), dataLayer.push({
                        event: "add_cart"
                    }), void 0 !== i.button.dataset.floatInfo)) {
                    var t = new FloatInfo(i.button);
                    setTimeout(function() {
                        t.open()
                    }, 1100)
                }
            })
        }
        return _createClass(r, [{
            key: "r",
            value: function() {
                var t = this,
                    e = this.button.querySelector("span"),
                    i = "а аКаОбаЗаИаНб";
                for (var n in void 0 !== this.button.dataset.title && (i = this.button.dataset.title), this.props.default) this.button.style[n] = this.props.default[n];
                this.addSVG(), setTimeout(function() {
                    e ? e.innerHTML = i : t.button.childNodes[0].nodeValue = i
                }, 350), requestAnimationFrame(function() {
                    for (var e in t.props.rounded) t.button.style[e] = t.props.rounded[e]
                })
            }
        }, {
            key: "addSVG",
            value: function() {
                var t = this,
                    e = {
                        position: "absolute",
                        width: "calc(100% + 2px)",
                        height: "calc(100% + 2px)",
                        left: "-1px",
                        top: "-1px",
                        overflow: "visible",
                        transform: "rotateZ(-90deg)",
                        transformOrigin: "center",
                        opacity: "0"
                    },
                    i = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                    n = 10 * Math.PI;
                for (var r in e) i.style.setProperty(r, e[r]);
                i.setAttribute("viewBox", "0 0 10 10"), i.innerHTML = '<circle cx="5" cy="5" r="5" fill="none" stroke="#0090f0" stroke-width="0.5" stroke-dasharray="' + n + '" stroke-dashoffset="' + n + '"></circle>', this.button.appendChild(i), requestAnimationFrame(function() {
                    t.button.classList.add("in-progress"), setTimeout(function() {
                        t.button.classList.add("hide-svg"), setTimeout(function() {
                            for (var e in t.button.classList.remove("in-progress", "hide-svg"), t.button.classList.add("done"), t.props.default) t.button.style[e] = t.props.default[e];
                            setTimeout(function(e) {
                                t.button.removeAttribute("style")
                            }, 350), t.removeSVG()
                        }, 350)
                    }, 1100)
                })
            }
        }, {
            key: "removeSVG",
            value: function() {
                this.button.querySelector("SVG:last-of-type").remove()
            }
        }, {
            key: "arranger",
            value: function() {
                for (var e = window.cartItems, t = "а аКаОбаЗаИаНб", i = e.length - 1; 0 <= i; i--)
                    if (this.button.dataset.item === e[i]) {
                        this.button.classList.add("done"), void 0 !== this.button.dataset.title && (t = this.button.dataset.title);
                        var n = this.button.querySelector("span");
                        n ? n.innerHTML = t : this.button.childNodes[0].nodeValue = t
                    }
            }
        }]), r
    }(),
    CardsRotate = function() {
        function r(e, t) {}

        return _createClass(r, [{
            key: "rotateCard"
        }]), r
    }(),

    DetailOrderForm = function() {
        function e() {
            var h = this;
            if (_classCallCheck(this, e), this.form = document.querySelector(".js-order-details"), !this.form) return !1;
            this.initFormSwitch(), this.initTelMask(), this.initTextareas(), this.dropFileZone = this.form.querySelector(".js-drop-file"), this.dropFile = new DropFile(this.dropFileZone), this.form.addEventListener("submit", function(e) {
                e.preventDefault();
                var t = new FormData(h.form),
                    i = h.dropFile.getFile();
                if (i) {
                    var n = h.dropFile.getName();
                    t.append(n, i)
                }
                var r = {},
                    s = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var l, c = t.entries()[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) {
                        var u = l.value;
                        r[u[0]] = u[1]
                    }
                } catch (e) {
                    o = !0, a = e
                } finally {
                    try {
                        !s && c.return && c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                var d = new XMLHttpRequest;
                d.open("POST", h.form.getAttribute("action")), d.onreadystatechange = function() {
                    if (4 == d.readyState && 200 == d.status) {
                        var e = d.responseText,
                            t = $.parseJSON(e);
                        if (t.order.REDIRECT_URL && t.order.REDIRECT_URL.length) window.location.href = t.order.REDIRECT_URL;
                        else {
                            var i = document.querySelector(".js-order-errors");
                            if (!i) return !1;
                            if (t.order.ERROR && t.order.ERROR.PROPERTY.length) {
                                var n = "";
                                t.order.ERROR.PROPERTY.forEach(function(e) {
                                    n += e + "<br>"
                                }), i.innerHTML = n;
                                var r = document.querySelector("#js-userdata"),
                                    s = Helpers.getOffset(r);
                                new ScrollTo({
                                    to: s.top
                                })
                            }
                        }
                    }
                }, d.send(t)
            })
        }
        return _createClass(e, [{
            key: "initFormSwitch",
            value: function() {
                var i = document.querySelector(".js-order-details-switch-forms");
                [].slice.call(document.querySelectorAll(".js-order-details-switch-button input")).forEach(function(e) {
                    e.addEventListener("change", function(e) {
                        var t = e.target.value;
                        i.classList["yes" === t ? "add" : "remove"]("order-details__forms--show-auth")
                    })
                })
            }
        }, {
            key: "initTelMask",
            value: function() {
                [].concat(_toConsumableArray(this.form.querySelectorAll("[type=tel]"))).forEach(function(e) {
                    new IMask(e, {
                        mask: [{
                            mask: "+000 00-000-0000",
                            startsWith: "375",
                            lazy: !1,
                            country: "ааЕаЛаАбббб"
                        }, {
                            mask: "+0 000 000-00-00",
                            startsWith: "7",
                            lazy: !1,
                            country: "Russia"
                        }, {
                            mask: "+# 000 000-00-00",
                            startsWith: "8",
                            lazy: !1,
                            country: "Russia",
                            definitions: {
                                "#": "7"
                            }
                        }, {
                            mask: "+000 00-000000",
                            startsWith: "374",
                            lazy: !1,
                            country: "абаМаЕаНаИб"
                        }, {
                            mask: "+000 00-000-00-00",
                            startsWith: "998",
                            lazy: !1,
                            country: "аЃаЗаБаЕаКаИббаАаН"
                        }, {
                            mask: "+000 00-000-0000",
                            startsWith: "380",
                            lazy: !1,
                            country: "аЃаКбаАаИаНаА"
                        }, {
                            mask: "+000 000-000-000",
                            startsWith: "996",
                            lazy: !1,
                            country: "ааИбаГаИаЗаИб"
                        }, {
                            mask: "+000 000-00-0000",
                            startsWith: "992",
                            lazy: !1,
                            country: "аЂаАаДаЖаИаКаИббаАаН"
                        }, {
                            mask: "+000 000-00-00-00",
                            startsWith: "995",
                            lazy: !1,
                            country: "аббаЗаИб"
                        }, {
                            mask: "0000000000000",
                            startsWith: "",
                            country: "unknown"
                        }],
                        dispatch: function(e, t) {
                            var i = (t.value + e).replace(/\D/g, "");
                            return t.compiledMasks.find(function(e) {
                                return 0 === i.indexOf(e.startsWith)
                            })
                        }
                    })
                })
            }
        }, {
            key: "initTextareas",
            value: function() {
                [].concat(_toConsumableArray(this.form.querySelectorAll("[data-auto-height]"))).forEach(function(e) {
                    e.hasAttribute("data-auto-height") && $(e).autoheight()
                })
            }
        }]), e
    }(),
    FormValidation = function() {
        function t(e) {
            if (_classCallCheck(this, t), !this.grabElements(e)) return !1;
            this.initSelects(), this.initInputs(), this.initTextareas(), this.initValidation(), this.initSubmit(), this.initReCaptcha(), this.isInit = !0
        }
        return _createClass(t, [{
            key: "grabElements",
            value: function(e) {
                return "FORM" === (this.wrapper = e).tagName ? this.form = e : this.form = e.querySelector("form"), !!this.form && (this.submit = e.querySelector('[type="submit"]'), this.inputs = [].slice.call(e.querySelectorAll("input")), this.selects = [].slice.call(e.querySelectorAll("select")), this.textareas = [].slice.call(e.querySelectorAll("textarea")), this.fields = [].concat(this.inputs, this.selects, this.textareas), this.needReplace = Boolean(null !== this.form.getAttribute("data-form-replace")), this.container = e.querySelector(".form__wrapper"), this.submitRedirect = this.form.getAttribute("data-submit-redirect"), this.submitRedirectDelay = Number(this.form.getAttribute("data-submit-redirect-delay")) || 2500, !0)
            }
        }, {
            key: "initReCaptcha",
            value: function() {
                if (this.form.querySelector(".g-recaptcha")) return !1;
                this.isRecapthaInited = !0;
                var e = this,
                    t = this.container || this.form,
                    i = document.createElement("DIV"),
                    n = String(Math.random()).slice(3, 6),
                    r = "g-recaptcha-" + n,
                    s = "onFormSubmitCallback" + n;
                i.setAttribute("id", r), i.setAttribute("data-size", "invisible"), i.setAttribute("data-callback", s), i.setAttribute("data-sitekey", "6LdRPpsUAAAAANfU9RwQ0vTxOD3jsLA4Xhvyibiw"), i.classList.add("g-recaptcha-" + n), t.appendChild(i), window[s] = function() {
                    e.sendData()
                }, this.addReCaptchaAPI(r)
            }
        }, {
            key: "addReCaptchaAPI",
            value: function(t) {
                if (window.reCaptchaAPIinited) {
                    if (window.grecaptcha) {
                        window.grecaptchaIds || (window.grecaptchaIds = []);
                        var e = window.grecaptcha.render(t, {
                            sitekey: document.querySelector("#" + t).getAttribute("data-sitekey"),
                            callback: document.querySelector("#" + t).getAttribute("data-callback")
                        });
                        this.grecaptchaId = e, window.grecaptchaIds.push(e)
                    }
                } else {
                    window.reCaptchaAPIinited = !0;
                    var i = document.createElement("SCRIPT");
                    i.setAttribute("async", !0), i.setAttribute("defer", !0), i.setAttribute("src", "https://www.google.com/recaptcha/api.js?onload=onloadCallback"), window.onloadCallback = function() {
                        window.grecaptchaIds || (window.grecaptchaIds = []);
                        var e = window.grecaptcha.render(t, {
                            sitekey: document.querySelector("#" + t).getAttribute("data-sitekey"),
                            callback: document.querySelector("#" + t).getAttribute("data-callback")
                        });
                        window.grecaptchaIds.push(e)
                    }, document.querySelector("head").appendChild(i)
                }
            }
        }, {
            key: "initValidation",
            value: function() {
                var i = this;
                this.requiredFields = [].concat(this.inputs.filter(function(e) {
                    return e.hasAttribute("required")
                }), this.selects.filter(function(e) {
                    return e.hasAttribute("required")
                }), this.textareas.filter(function(e) {
                    return e.hasAttribute("required")
                })), this.timerId = null, this.requiredFields.forEach(function(t) {
                    t.removeAttribute("required"), ["input", "change"].forEach(function(e) {
                        t.addEventListener(e, function(e) {
                            i.timerId && clearTimeout(i.timerId), i.timerId = setTimeout(function(e) {
                                t.getAttribute("data-is-touched") && i.checkAll(!0)
                            }, 250)
                        })
                    }), t.addEventListener("blur", function(e) {
                        t.getAttribute("data-not-empty") && i.checkAll(!0), t.getAttribute("data-is-touched") || t.setAttribute("data-is-touched", !0)
                    })
                })
            }
        }, {
            key: "initSubmit",
            value: function() {
                var t = this;
                this.form.addEventListener("submit", function(e) {
                    e.preventDefault(), t.triggerSubmit()
                }), this.form.querySelector(".js-subscribe-submit") && this.form.querySelector(".js-subscribe-submit").addEventListener("click", function(e) {
                    t.checkAll()
                })
            }
        }, {
            key: "triggerSubmit",
            value: function() {
                if (this.touchAll(), !this.checkAll()) return !1;
                this.isRecapthaInited && window.reCaptchaAPIinited && window.grecaptcha ? (window.grecaptchaIds && grecaptchaIds.forEach(function(e) {
                    return window.grecaptcha.reset(e)
                }), window.grecaptcha.execute(this.grecaptchaId)) : this.sendData()
            }
        }, {
            key: "sendData",
            value: function() {
                var d = this,
                    e = new FormData(this.form),
                    t = {},
                    i = void 0;
                if (this.needReplace) t = $(this.form).serializeArray();
                else if (i = this.dropFile.getFile()) {
                    var n = this.dropFile.getName();
                    e.append(n, i), t = e
                } else t.FILE = null;
                if ("undefined" == typeof BX) this.submit && this.submit.setAttribute("data-pending", !0), setTimeout(function() {
                    d.submit && d.submit.removeAttribute("data-pending"), d.wrapper.setAttribute("data-form-success", !0)
                }, 1e3);
                else {
                    this.submit && this.submit.setAttribute("data-pending", !0);
                    var r = this.form.getAttribute("action"),
                        s = this.needReplace ? "html" : "json",
                        h = this;
                    $.ajax({
                        url: r,
                        data: e,
                        method: "POST",
                        type: "POST",
                        dataType: s,
                        processData: !1,
                        contentType: !1,
                        beforeSend: function() {
                            h.form.closest(".modal__wrapper") && h.form.closest(".modal__wrapper").classList.add("is-loading")
                        },
                        success: function(e) {
                            if (h.form.closest(".modal__wrapper") && h.form.closest(".modal__wrapper").classList.remove("is-loading"), d.submit && d.submit.removeAttribute("data-pending"), d.needReplace) $(d.wrapper.parentElement).html(e), new FormsValidation(".js-form"), new Modal({
                                selector: "[data-modal]",
                                "dontаЁheckURL": !0
                            });
                            else {
                                if (e && 1 == e.success) {
                                    if (d.wrapper.setAttribute("data-form-success", !0), e.nameGoal)
                                        if (dataLayer.push({
                                                event: e.nameGoal
                                            }), "fast_send" == e.nameGoal) dataLayer.push({
                                            PageType: "TransactionPage",
                                            products_info: JSON.parse(e.criteoData),
                                            transaction_id: e.orderId,
                                            event: "crto_transactionpage"
                                        });
                                        else {
                                            dataLayer.push({
                                                PageType: "TransactionPage",
                                                products_info: [{
                                                    id: "1",
                                                    price: 1,
                                                    quantity: 1
                                                }],
                                                transaction_id: (l = 0, c = 99999999, u = l + Math.random() * (c + 1 - l), u = Math.floor(u)),
                                                event: "crto_transactionpage"
                                            })
                                        } if (d.submit && "captchaId" in d.submit.dataset) {
                                        var t = document.querySelector('.email-subscribe__submit[href*="captchaId=' + d.submit.dataset.captchaId + '"]').closest("form"),
                                            i = new Event("submit"),
                                            n = void 0,
                                            r = void 0;
                                        t.querySelector('input[name="captcha_sid"]') && t.querySelector('input[name="captcha_word"]') && (n = d.form.querySelector('input[name="captcha_sid"]').value, r = d.form.querySelector('input[name="captcha_word"]').value, t.querySelector('input[name="captcha_sid"]').value = n, t.querySelector('input[name="captcha_word"]').value = r), document.querySelector(".modal__close").click(), t.dispatchEvent(i)
                                    }
                                }
                                if (e && 0 == e.success && e.errors && (d.setErrors(e.errors), "captcha_word" in e.errors && d.getInputByName("EMAIL") && d.getInputByName("EMAIL").classList.add("has-error-captcha"), "FILE" in e.errors)) {
                                    var s = d.form.querySelector(".drop-file__delete"),
                                        o = new Event("click");
                                    s.dispatchEvent(o), d.form.closest(".multisteps-form").classList.remove("is-success");
                                    var a = document.querySelector(".drop-file__label");
                                    d.form.querySelector(".drop-file__file-error") && d.form.querySelector(".drop-file__file-error").parentNode.removeChild(d.form.querySelector(".drop-file__file-error")), a.innerHTML = "<span class='drop-file__file-error'>" + e.errors.FILE + "<br/></span>" + a.innerHTML
                                }
                            }
                            var l, c, u;
                            h.submitRedirect && setTimeout(function() {
                                window.location = h.submitRedirect
                            }, h.submitRedirectDelay)
                        },
                        error: function(e) {
                            d.needReplace ? ($(d.wrapper.parentElement).html(e), new FormsValidation(".js-form"), new Modal({
                                selector: "[data-modal]"
                            })) : d.submit && d.submit.removeAttribute("data-pending")
                        }
                    })
                }
                return !0
            }
        }, {
            key: "dispatchSubmit",
            value: function() {
                var e = new Event("submit", {
                    bubbles: !0,
                    cancelable: !0
                });
                this.form.dispatchEvent(e)
            }
        }, {
            key: "setError",
            value: function(e, t) {
                var i = e.parentElement.querySelector(".simple-input__error");
                if (!i) return !1;
                i.innerHTML = t, e.classList.add("has-error"), e.focus()
            }
        }, {
            key: "setErrors",
            value: function(e) {
                for (name in this.fields.forEach(function(e) {
                        e.classList.remove("has-error"), e.classList.remove("has-error-captcha")
                    }), e) {
                    var t = e[name],
                        i = this.getInputByName(name);
                    this.setError(i, t)
                }
            }
        }, {
            key: "getInputByName",
            value: function(t) {
                return this.fields.filter(function(e) {
                    return e.getAttribute("NAME") === t
                })[0]
            }
        }, {
            key: "initInputs",
            value: function() {
                this.isInit || (document.addEventListener("input", function(e) {
                    var t = e.target.getAttribute("type"),
                        i = e.target.tagName;
                    "text" !== t && "email" !== t && "password" !== t && "tel" !== t && "TEXTAREA" !== i || (0 < e.target.value.length ? e.target.setAttribute("data-not-empty", "true") : e.target.removeAttribute("data-not-empty"))
                }), this.dropFileZone = this.form.querySelector(".js-drop-file"), this.dropFile = new DropFile(this.dropFileZone)), this.inputs.forEach(function(e) {
                    if (e.hasAttribute("data-mask-inited")) return !1;
                    "tel" === e.getAttribute("type") && (e.mask = new IMask(e, {
                        mask: [{
                            mask: "+000 00-000-0000",
                            startsWith: "375",
                            lazy: !1,
                            country: "ааЕаЛаАбббб"
                        }, {
                            mask: "+0 000 000-00-00",
                            startsWith: "7",
                            lazy: !1,
                            country: "Russia"
                        }, {
                            mask: "+# 000 000-00-00",
                            startsWith: "8",
                            lazy: !1,
                            country: "Russia",
                            definitions: {
                                "#": "7"
                            }
                        }, {
                            mask: "+000 00-000000",
                            startsWith: "374",
                            lazy: !1,
                            country: "абаМаЕаНаИб"
                        }, {
                            mask: "+000 00-000-00-00",
                            startsWith: "998",
                            lazy: !1,
                            country: "аЃаЗаБаЕаКаИббаАаН"
                        }, {
                            mask: "+000 00-000-0000",
                            startsWith: "380",
                            lazy: !1,
                            country: "аЃаКбаАаИаНаА"
                        }, {
                            mask: "+000 000-000-000",
                            startsWith: "996",
                            lazy: !1,
                            country: "ааИбаГаИаЗаИб"
                        }, {
                            mask: "+000 000-00-0000",
                            startsWith: "992",
                            lazy: !1,
                            country: "аЂаАаДаЖаИаКаИббаАаН"
                        }, {
                            mask: "+000 000-00-00-00",
                            startsWith: "995",
                            lazy: !1,
                            country: "аббаЗаИб"
                        }, {
                            mask: "0000000000000",
                            startsWith: "",
                            country: "unknown"
                        }],
                        dispatch: function(e, t) {
                            var i = (t.value + e).replace(/\D/g, "");
                            return t.compiledMasks.find(function(e) {
                                return 0 === i.indexOf(e.startsWith)
                            })
                        }
                    }), e.setAttribute("data-mask-inited", !0))
                })
            }
        }, {
            key: "initSelects",
            value: function() {
                var e = [].concat(_toConsumableArray(this.wrapper.querySelectorAll("select:not([data-select-inited])")));
                if (!$) return !1;
                e.forEach(function(e) {
                    var t = e.hasAttribute("search");
                    $(e).SumoSelect({
                        search: t,
                        searchText: "ааОаИбаК",
                        noMatch: 'ааО аЗаАаПбаОбб "{0}" аНаИбаЕаГаО аНаЕ аНаАаЙаДаЕаНаО'
                    }), e.setAttribute("data-select-inited", !0)
                }), e.forEach(function(i) {
                    var e = i.getAttribute("data-connect");
                    if (e) {
                        var n = document.querySelector("[data-id=" + e + "]");
                        $(i).on("sumo:closing", function(e) {
                            n.value = "";
                            var t = i.hasAttribute("search");
                            n.sumo && n.sumo.reload({
                                search: t,
                                searchText: "ааОаИбаК",
                                noMatch: 'ааО аЗаАаПбаОбб "{0}" аНаИбаЕаГаО аНаЕ аНаАаЙаДаЕаНаО'
                            }), [].concat(_toConsumableArray(n.parentElement.querySelector(".options").children)).forEach(function(e) {
                                ~e.innerText.indexOf(i.value) ? e.style.display = "block" : e.style.display = "none"
                            })
                        })
                    }
                })
            }
        }, {
            key: "initTextareas",
            value: function() {
                [].concat(_toConsumableArray(this.form.querySelectorAll("[data-auto-height]"))).forEach(function(e) {
                    e.hasAttribute("data-auto-height") && new AutoHeight(e)
                })
            }
        }, {
            key: "touchAll",
            value: function() {
                this.requiredFields.forEach(function(e) {
                    e.setAttribute("data-is-touched", !0)
                })
            }
        }, {
            key: "checkAll",
            value: function(t) {
                var i = this,
                    e = !0;
                return this.requiredFields.length && (e = !this.requiredFields.some(function(e) {
                    return !i.check(e, !t)
                })), e
            }
        }, {
            key: "check",
            value: function(e, t) {
                var i = this.validate(e);
                return i ? (e.classList.remove("has-error"), e.classList.remove("has-error-captcha"), this.form.querySelector(".js-subscribe-submit") && this.form.querySelector(".js-subscribe-submit").classList.remove("is-disabled"), this.form.closest(".js-subscribe-form") && (this.form.closest(".js-subscribe-form").classList.remove("has-error"), this.form.closest(".js-subscribe-form").classList.add("is-success"))) : (e.classList.add("has-error"), this.form.querySelector(".js-subscribe-submit") && this.form.querySelector(".js-subscribe-submit").classList.add("is-disabled"), this.form.closest(".js-subscribe-form") && this.form.closest(".js-subscribe-form").classList.add("has-error"), t && e.focus()), i
            }
        }, {
            key: "validate",
            value: function(e) {
                switch (e.type || e.dataset.type) {
                    case "email":
                        return this.validateEmail(e);
                    case "text":
                    case "password":
                        return this.validateText(e);
                    case "checkbox":
                        return this.validateCheckbox(e);
                    case "tel":
                        return this.validatePhone(e);
                    case "file":
                        return this.validateFile(e);
                    default:
                        return !0
                }
            }
        }, {
            key: "validateFile",
            value: function(e) {
                var t = e.value;
                return Boolean(t)
            }
        }, {
            key: "validateText",
            value: function(e) {
                var t = e.value;
                return Boolean(t.length)
            }
        }, {
            key: "validatePhone",
            value: function(e) {
                var t = e.value;
                return Boolean(16 === t.length)
            }
        }, {
            key: "validateEmail",
            value: function(e) {
                var t = e.value;
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(t)
            }
        }, {
            key: "validateCheckbox",
            value: function(e) {
                return e.checked
            }
        }]), t
    }(),
    FormsValidation = function e(t) {
        _classCallCheck(this, e), [].slice.call(document.querySelectorAll(t)).filter(function(e) {
            return !e.classList.contains("form-is-inited")
        }).forEach(function(e) {
            new FormValidation(e), e.classList.add("form-is-inited")
        })
    },
    FullScreenBlock = function() {
        function i(e) {
            var t = this;
            _classCallCheck(this, i), this.k = Math.max(window.innerHeight, window.innerWidth) / Math.min(window.innerHeight, window.innerWidth), this.block = e, this.tick(), this.fadeUp(), this.id = this.getId(), window.renderer && window.renderer.add(function(e) {
                t.tick()
            }, {
                id: this.id,
                element: e
            })
        }
        return _createClass(i, [{
            key: "fadeUp",
            value: function() {
                this.block.style.setProperty("--playState", "running")
            }
        }, {
            key: "getId",
            value: function() {
                return "FullScreenBlock-" + Date.now() + 99 * Math.random()
            }
        }, {
            key: "tick",
            value: function() {
                var e = window.innerHeight / 1.2,
                    t = this.getDistance(this.block);
                if (Math.abs(t) > e) return !1;
                var i = 1 - Math.min(Math.abs(t), e) / e,
                    n = t < 0,
                    r = void 0,
                    s = void 0;
                this.block.dataset.reverse ? (r = n ? 1 + .2 * i : 1.2, s = n ? 1 + .25 * i : 1.25) : (r = 1 + .2 * i, s = 1 + .25 * i), this.block.style.setProperty("--scaleX", "" + r), this.block.style.setProperty("--scaleY", "" + s)
            }
        }, {
            key: "getDistance",
            value: function(e) {
                return window.pageYOffset + window.innerHeight / 2 - (e.offsetTop + e.offsetHeight / 2)
            }
        }]), i
    }(),
    Maps = function e() {
        _classCallCheck(this, e);
        var i = document.querySelector("#map"),
            n = void 0,
            r = void 0,
            t = void 0;
        if (i && (n = parseFloat(i.dataset.lat), r = parseFloat(i.dataset.lng), t = i.dataset.mapLang ? "&language=" + i.dataset.mapLang : "&language=ru"), !i) return !1;
        window.initMap = function() {
            var e = {
                    lat: n,
                    lng: r
                },
                t = new google.maps.Map(i, {
                    center: e,
                    zoom: 17
                });
            new google.maps.Marker({
                position: e,
                map: t
            })
        };
        var s = document.createElement("script");
        s.setAttribute("async", !0), s.setAttribute("defer", !0), s.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwbkjaxCk01AYKkJJBavU2KcgYb8Dtpfk&callback=initMap" + t), document.head.appendChild(s)
    },
    media = {
        phone: "(max-width: 599px)",
        tabletPortrait: "(min-width: 600px)",
        tabletLandscape: "(min-width: 900px)",
        desktop: "(min-width: 1100px)",
        bigDesktop: "(min-width: 1600px)"
    },
    log = console.log,
    MobileSlider = function e(t) {
        _classCallCheck(this, e);
        var i = t.parentElement,
            n = t.children.length,
            r = ++n - i.offsetWidth / t.offsetWidth;
        new Siema({
            selector: t,
            duration: 200,
            easing: "ease-out",
            perPage: 1,
            startIndex: 0,
            draggable: !0,
            threshold: 20,
            loop: !1,
            onInit: function() {
                t.classList.add("is-init")
            },
            onChange: function() {
                this.currentSlide > r && this.goTo(r)
            }
        })
    },
    Modal = function() {
        function Modal(e) {
            _classCallCheck(this, Modal), this.props = e, this.modalFolder = "/include/modals/", this.initModal(), this.initLinks(e), e.dontаЁheckURL || this.openModalByUrl()
        }
        return _createClass(Modal, [{
            key: "openModalByUrl",
            value: function() {
                var e = Helpers.getUrlParams(window.location.href);
                if ("change_password" === e.modal && e.checkword && e.login) {
                    var t = Helpers.getLang(),
                        i = "";
                    "ru" !== t && "en" !== t && (i = "/" + t), this.prevUrl = "", this.url = window.location.origin + i + "/auth/index.php?change_password=yes&lang=ru&USER_CHECKWORD=" + e.checkword + "&USER_LOGIN=" + e.login, this.open()
                } else if (e.modal) {
                    var n = Helpers.getUrlParamsFromObject(e);
                    this.prevUrl = "", this.url = "" + window.location.origin + this.modalFolder + e.modal + ".php?" + n, this.open()
                }
            }
        }, {
            key: "initModal",
            value: function() {
                var t = this;
                if (this.modal = document.querySelector(".modal"), !this.modal) return !1;
                this.modalContent = this.modal.querySelector(".modal__wrapper"), this.modalWrapper = this.modal.querySelector(".modal__dialog"), this.closeModal = this.modal.querySelector(".modal__close"), this.state = "close", [this.modal, this.closeModal].forEach(function(e) {
                    e.addEventListener("click", function(e) {
                        e.preventDefault(), t.close()
                    })
                }), ["click", "wheel"].forEach(function(e) {
                    t.modalWrapper.addEventListener(e, function(e) {
                        e.stopPropagation()
                    })
                }), this.disableScroll = function(e) {
                    e.preventDefault()
                }
            }
        }, {
            key: "initLinks",
            value: function(e) {
                var o = this,
                    t = [].slice.call(document.querySelectorAll(e.selector + ":not([data-modal-inited])"));
                this.links = this.links ? this.links.concat(t) : t, t.forEach(function(r) {
                    var s = r.getAttribute("href");
                    r.setAttribute("data-modal-inited", !0), r.addEventListener("mouseup", function(e) {
                        e.preventDefault();
                        var t = o;
                        if (e.target.hasAttribute("disabled")) return !1;
                        o.links.forEach(function(e) {
                            o.offModal()
                        });
                        var i = o.mouseLeavePoint.x - o.mouseEntryPoint.x,
                            n = o.mouseLeavePoint.y - o.mouseEntryPoint.y;
                        Math.sqrt(i * i + n * n) < 5 && (o.prevUrl = o.url, o.url = s, "open" === o.overlayState ? setTimeout(function() {
                            o.onModal()
                        }, 250) : r.closest("form") ? setTimeout(function() {
                            r.closest("form").querySelectorAll(".has-error").length < 1 && t.open()
                        }, 10) : o.open()), o.isMouseDown = o.isMouseMove = !1
                    }), r.addEventListener("click", function(e) {
                        e.preventDefault()
                    }), r.addEventListener("mousedown", function(e) {
                        o.isMouseDown = !0, o.mouseEntryPoint = o.mouseLeavePoint = {
                            x: e.pageX,
                            y: e.pageY
                        }
                    }), r.addEventListener("mousemove", function(e) {
                        o.isMouseDown && (o.mouseLeavePoint = {
                            x: e.pageX,
                            y: e.pageY
                        }, o.isMouseMove = !0)
                    })
                })
            }
        }, {
            key: "offOverlay",
            value: function() {
                if ("close" === this.state) return !1;
                this.scrollOn(), this.modal.removeAttribute("data-open"), this.modal.removeAttribute("data-loading"), this.overlayState = "close"
            }
        }, {
            key: "offModal",
            value: function() {
                var t = this;
                if ("closeModal" === this.state) return !1;
                this.modal.removeAttribute("data-show"), this.state = "close", setTimeout(function(e) {
                    t.modalWrapper.style.setProperty("width", "auto")
                }, 250)
            }
        }, {
            key: "close",
            value: function() {
                this.offOverlay(), this.offModal()
            }
        }, {
            key: "onOverlay",
            value: function() {
                if ("open" === this.overlayState) return !1;
                this.scrollOff(), this.modal.setAttribute("data-open", !0), this.overlayState = "open"
            }
        }, {
            key: "onModal",
            value: function() {
                var t = this;
                if ("open" === this.state) return !1;
                this.modalContent.innerHTML = "", this.loadingSucceed = !1;
                var e = new Headers;
                e.append("x-requested-with", "fetch");
                var i = {
                    credentials: "include",
                    method: "GET",
                    headers: e,
                    mode: "cors",
                    cache: "default"
                };
                fetch(this.url, i).then(function(e) {
                    if (e.ok) return e.text();
                    t.close()
                }).then(function(e) {
                    t.modalContent.innerHTML = e, t.loadingSucceed = !0, setTimeout(function(e) {
                        t.initLinks(t.props), new FormsValidation(".js-form"), t.modal.setAttribute("data-show", !0), t.modal.removeAttribute("data-loading"), t.modalWrapper.style.setProperty("width", t.modalWrapper.offsetWidth + "px"), t.executeScrips(), t.props.callback && t.props.callback()
                    }, 25)
                }).catch(function(e) {
                    t.close()
                }), this.modal.setAttribute("data-loading", !0), this.state = "open"
            }
        }, {
            key: "executeScrips",
            value: function executeScrips() {
                [].concat(_toConsumableArray(this.modalContent.querySelectorAll("script"))).forEach(function(scriptTag) {
                    eval(scriptTag.innerHTML)
                })
            }
        }, {
            key: "open",
            value: function() {
                this.onOverlay(), this.onModal()
            }
        }, {
            key: "scrollOff",
            value: function() {
                window.addEventListener("wheel", this.disableScroll), document.documentElement.style.paddingRight = window.innerWidth - document.body.offsetWidth + "px", document.documentElement.style.overflow = "hidden", document.body.style.overflow = "hidden"
            }
        }, {
            key: "scrollOn",
            value: function() {
                window.removeEventListener("wheel", this.disableScroll), document.documentElement.style.overflow = "visible", document.body.style.overflow = "visible", document.documentElement.style.paddingRight = "0"
            }
        }]), Modal
    }(),
    Parallax = function() {
        function i(e) {
            var t = this;
            _classCallCheck(this, i), this.block = e, this.conf = +e.dataset.factor || 4, this.reverse = e.dataset.reverse ? -1 : 1, this.position = Helpers.getOffset(e).top, this.id = this.getId(), this.prevScroll = 0, this.tick(), this.fadeUp(), window.renderer && window.renderer.add(function(e) {
                t.tick()
            }, {
                id: this.id,
                element: this.block,
                screens: 3
            })
        }
        return _createClass(i, [{
            key: "getId",
            value: function() {
                return "Parallax-" + Date.now() + 99 * Math.random()
            }
        }, {
            key: "fadeUp",
            value: function() {
                this.block.style.setProperty("--playState", "running")
            }
        }, {
            key: "tick",
            value: function() {
                var e = window.pageYOffset + window.innerHeight / 2;
                if (this.prevScroll === e) return !1;
                var t = e - (this.position + this.block.offsetHeight / 2),
                    i = window.innerHeight / 2 + this.block.offsetHeight / 2,
                    n = t / this.conf * this.reverse,
                    r = i + Math.abs(n);
                Math.abs(t) < r && this.block.style.setProperty("--scrollY", n + "px"), this.prevScroll = e
            }
        }]), i
    }(),
    ScrollAnchor = function e() {
        _classCallCheck(this, e), [].concat(_toConsumableArray(document.querySelectorAll("[data-scroll-to]"))).forEach(function(e) {
            var t = e.dataset.scrollTo;
            document.querySelector(t) && new ScrollTo({
                from: e,
                to: document.querySelector(t)
            })
        })
    },
    ScrollTo = function() {
        function s(e) {
            var t = this;
            _classCallCheck(this, s);
            var i = e.from,
                n = e.to,
                r = e.offset;
            r = r || 0, this.id = this.getId(), this.timer = 0, this.speed = 1.5, this.scrolling = !1, this.ease = Helpers.getEaseFunction("easeOutQuint"), this.destination = "number" == typeof n ? n + r : Helpers.getOffset(n).top + r, i ? i.addEventListener("click", function(e) {
                if (e.preventDefault(), t.scrolling) return !1;
                t.scrolling = !0, t.scroll = Helpers.getScrollPos(), t.scrollPath = t.destination - t.scroll, t.duration = Math.abs(t.scrollPath / t.speed), window.renderer && window.renderer.add(function(e) {
                    t.tick(e)
                }, {
                    id: t.id,
                    element: document.body
                })
            }) : (this.scroll = Helpers.getScrollPos(), this.scrollPath = this.destination - this.scroll, this.duration = Math.abs(this.scrollPath / this.speed), this.scrolling = !0, window.renderer && window.renderer.add(function(e) {
                t.tick(e)
            }, {
                id: this.id,
                element: document.body
            })), window.addEventListener("resize", function(e) {
                t.destination = Helpers.getOffset(n).top + r
            }), window.addEventListener("wheel", function(e) {
                t.scrolling && (renderer.remove(t.id), t.scrolling = !1, t.timer = 0)
            })
        }
        return _createClass(s, [{
            key: "tick",
            value: function(e) {
                this.timer <= this.duration ? (this.timer += e, window.scrollTo(0, this.scroll + this.ease(this.timer / this.duration) * this.scrollPath)) : (renderer.remove(this.id), this.scrolling = !1, this.timer = 0)
            }
        }, {
            key: "getId",
            value: function() {
                return "ScrollTo-" + Date.now() + 99 * Math.random()
            }
        }]), s
    }(),
    Slider360 = function e(t) {
        _classCallCheck(this, e)
    },
    SmallCart = function() {
        function t(e) {
            _classCallCheck(this, t), this.cart = e, this.count = e.querySelector("span"), this.update()
        }
        return _createClass(t, [{
            key: "set",
            value: function(e) {
                this.count.innerText = e, this.update()
            }
        }, {
            key: "get",
            value: function() {
                return +this.count.innerText
            }
        }, {
            key: "hide",
            value: function() {
                this.cart.classList.add("is-empty")
            }
        }, {
            key: "show",
            value: function() {
                this.cart.classList.remove("is-empty")
            }
        }, {
            key: "update",
            value: function() {
                0 < this.get() ? this.show() : this.hide()
            }
        }]), t
    }(),
    TextFadeup = function() {
        function d(e, t) {
            var i = this;
            _classCallCheck(this, d);
            var n = t = t || {},
                r = n.stepsCount,
                s = n.stepsSpeed,
                o = n.lettersOrNumbers,
                a = n.callback,
                l = n.threshold;
            this.HTMLnode = e, this.text = e.innerText, this.letters = o ? "1234567890+#$тЌ" : "abcefghijklnopqrstuvxyz#%&", this.stepsCount = r || 10, this.stepsCounter = 0, this.steps = this.generateSteps(this.stepsCount), this.timer = 0, this.stepsSpeed = s || 50, this.threshold = l || +this.HTMLnode.dataset.threshold || 0;
            var c = Date.now(),
                u = 99 * Math.random();
            this.id = "TextFadeup-" + c + u, this.callback = a, this.draw(), this.fadeUp(), window.renderer && window.renderer.add(function(e) {
                i.tick(e)
            }, {
                id: this.id,
                element: e.parentElement
            })
        }
        return _createClass(d, [{
            key: "fadeUp",
            value: function() {
                this.HTMLnode.style.setProperty("--playState", "running")
            }
        }, {
            key: "tick",
            value: function(e) {
                var t = Helpers.getTopBottomThresholds(this.HTMLnode);
                return !!t.isVisible && (!(this.threshold && t.bottom < window.innerHeight / this.threshold) && void(this.timer < this.stepsSpeed ? this.timer += e : (this.timer = 0, this.stepsCounter < this.stepsCount ? this.draw() : (this.HTMLnode.innerText = this.text, renderer.remove(this.id), this.callback && this.callback()))))
            }
        }, {
            key: "draw",
            value: function() {
                this.HTMLnode.innerText = this.steps[this.stepsCounter], this.stepsCounter++
            }
        }, {
            key: "generateSteps",
            value: function(e) {
                for (var i = this, n = [], r = this.text.split(" "), t = function(e) {
                        var t = [];
                        r.forEach(function(e) {
                            t.push(i.getRandomString(e.length))
                        }), n.push(t.join(" "))
                    }, s = 0; s < e; s++) t();
                return n
            }
        }, {
            key: "generateSteps2",
            value: function(e) {
                for (var r = this, t = [], s = this.text.split(" "), o = Math.floor(s.length / e), i = function(i) {
                        var n = [];
                        s.forEach(function(e, t) {
                            t < o * i ? n.push(e) : n.push(r.getRandomString(e.length))
                        }), t.push(n.join(" "))
                    }, n = 0; n < e; n++) i(n);
                return t
            }
        }, {
            key: "getRandomString",
            value: function(e) {
                for (var t = "", i = 0; i < e; i++) t += this.getRandomLetter();
                return t
            }
        }, {
            key: "getRandomLetter",
            value: function() {
                var e = Math.floor(Math.random() * this.letters.length);
                return this.letters[e]
            }
        }]), d
    }(),
    TextGlitch = function() {
        function l(e, t) {
            var i = this;
            _classCallCheck(this, l);
            var n = t = t || {},
                r = n.lettersOrNumbers,
                s = n.rhythm,
                o = n.intensity;
            this.HTMLnode = e, this.text = e.innerText, this.chars = r ? "1234567890+#$тЌ" : "abcdefhijklnoprstvxz#%&^+=-", this.bannedChars = [" ", ".", "/", ",", ":", "!", ";"], this.timer = 0, this.rhythm = s || [-500, 250, -250, 100, -100, 100, -100, 100, -5e3], this.currentStep = 0;
            var a = this.getMaxIntensity();
            this.intensity = o ? a < o ? a : o : a, this.lettersIndexes = this.getRandomLettersIndexes(this.intensity), this.letterIndex = this.getRandomLetterIndex(), this.id = this.getId(), window.renderer && window.renderer.add(function(e) {
                i.tick(e)
            }, {
                id: this.id,
                element: e
            })
        }
        return _createClass(l, [{
            key: "getId",
            value: function() {
                return "TextGlitch-" + Date.now() + 99 * Math.random()
            }
        }, {
            key: "getMaxIntensity",
            value: function() {
                var t = this,
                    i = 0;
                return this.text.split("").forEach(function(e) {
                    t.bannedChars.includes(e) || i++
                }), i
            }
        }, {
            key: "remove",
            value: function() {
                this.setText(this.text), renderer.remove(this.id)
            }
        }, {
            key: "tick",
            value: function(e) {
                if (!Helpers.getTopBottomThresholds(this.HTMLnode).isVisible) return !1;
                if (this.timer < Math.abs(this.rhythm[this.currentStep])) this.timer += e;
                else {
                    this.timer = 0, this.currentStep = (this.currentStep + 1) % this.rhythm.length;
                    var t = Math.floor(Math.random() * this.intensity),
                        i = "",
                        n = 0;
                    if (0 < this.rhythm[this.currentStep]) {
                        for (var r = 0; r < t; r++) i += this.text.slice(n, this.lettersIndexes[r]), i += this.getRandomLetter(), n = this.lettersIndexes[r] + 1;
                        i += this.text.slice(n, this.text.length)
                    } else i = this.text;
                    this.setText(i)
                }
                return !0
            }
        }, {
            key: "setText",
            value: function(e) {
                this.HTMLnode.innerText = e
            }
        }, {
            key: "getRandomLettersIndexes",
            value: function(e) {
                for (var t = [], i = 0; i < e; i++) {
                    var n = this.getRandomLetterIndex();
                    ~t.indexOf(n) ? i-- : t.push(n)
                }
                return t.sort(function(e, t) {
                    return e - t
                }), t
            }
        }, {
            key: "getRandomLetterIndex",
            value: function() {
                for (var e = Math.floor(Math.random() * this.text.length); this.bannedChars.includes(this.text[e]);) e = Math.floor(Math.random() * this.text.length);
                return e
            }
        }, {
            key: "getRandomString",
            value: function(e) {
                for (var t = "", i = 0; i < e; i++) t += this.getRandomLetter();
                return t
            }
        }, {
            key: "getRandomLetter",
            value: function() {
                var e = Math.floor(Math.random() * this.chars.length);
                return this.chars[e]
            }
        }]), l
    }();
window, document.addEventListener("input", function(e) {
    var t = e.target.getAttribute("type");
    "text" !== t && "email" !== t && "password" !== t || (0 < e.target.value.length ? e.target.setAttribute("data-not-empty", "true") : e.target.removeAttribute("data-not-empty"))
});
var TextSlider = function() {
        function m(e) {
            var t = this;
            _classCallCheck(this, m);
            var i = e.HTMLnode,
                n = e.words,
                r = e.letterSpeed,
                s = e.typeSpeed,
                o = e.delay,
                a = e.iterationCount,
                l = e.startImmediately,
                c = e.lettersOrNumbers,
                u = e.typingWide,
                d = e.callback;
            this.callback = d || !1, this.words = n, this.HTMLnode = i, this.letters = c ? "abcdefghijklmnopqrstuvwxyz#%&^+=-" : "1234567890+#$тЌ", this.startImmediately = l || !1, this.iterationCount = a || "infinite", this.iteration = 1, this.currentWordIndex = 0, this.prevWordIndex = 0 < this.currentWordIndex ? this.currentWordIndex - 1 : this.words.length - 1, this.nextWordIndex = (this.currentWordIndex + 1) % this.words.length, this.delay = o, this.letterSpeed = r, this.typeSpeed = s, this.delayTimer = 0, this.letterTimer = 0, this.typeTimer = 0, u = u || 1, this.typingDirection = -1 * u, this.animationInProgress = this.startImmediately;
            var h = Date.now(),
                f = 99 * Math.random();
            this.id = "TextSlider-" + h + f, this.setup(), window.renderer && renderer.add(function(e) {
                t.tick(e)
            }, {
                id: this.id,
                element: this.HTMLnode
            })
        }
        return _createClass(m, [{
            key: "setup",
            value: function() {
                var e = Math.abs(this.words[this.nextWordIndex].length - this.words[this.currentWordIndex].length),
                    t = this.words[this.nextWordIndex].length + this.words[this.currentWordIndex].length;
                this.b = this.words[this.currentWordIndex].length, this.r = this.b;
                var i = this.words[this.nextWordIndex].length - this.words[this.currentWordIndex].length;
                this.dDir = 0 < i ? 1 : i < 0 ? -1 : 0, this.step = 0, this.stepWidth = Math.ceil(t / e), this.animationHalf = !1, this.delayTimer = 0, this.letterTimer = 0, this.typeTimer = 0, this.b += this.dDir
            }
        }, {
            key: "upIndexes",
            value: function() {
                this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length, this.prevWordIndex = 0 < this.currentWordIndex ? this.currentWordIndex - 1 : this.words.length - 1, this.nextWordIndex = (this.currentWordIndex + 1) % this.words.length
            }
        }, {
            key: "toggleTypingDirection",
            value: function() {
                this.typingDirection *= -1
            }
        }, {
            key: "checkFirstHalfProgress",
            value: function() {
                0 !== this.r || this.animationHalf || (this.animationHalf = !0, this.toggleTypingDirection(), this.upIndexes())
            }
        }, {
            key: "checkLastHalfProgress",
            value: function() {
                if (this.r === this.b && this.animationHalf) {
                    if (this.animationInProgress = !1, this.toggleTypingDirection(), this.setup(), this.setCurrentText(), "infinite" === this.iterationCount) return !1;
                    this.iteration < this.iterationCount ? this.iteration++ : (renderer.remove(this.id), this.callback && this.callback())
                }
            }
        }, {
            key: "tick",
            value: function(e) {
                if (!Helpers.getTopBottomThresholds(this.HTMLnode).isVisible) return !1;
                this.animationInProgress ? (this.letterTimer < this.letterSpeed ? this.letterTimer += e : (this.letterTimer = 0, this.setText()), this.typeTimer < this.typeSpeed ? this.typeTimer += e : (this.typeTimer = 0, this.checkLastHalfProgress(), this.r + this.typingDirection < 0 ? this.r = 0 : this.r + this.typingDirection > this.b ? this.r = this.b : this.r += this.typingDirection, this.step === this.stepWidth ? (this.step = 0, this.b += this.dDir) : this.step += 1, this.checkFirstHalfProgress())) : this.delayTimer < this.delay ? this.delayTimer += e : (this.delayTimer = 0, this.animationInProgress = !0)
            }
        }, {
            key: "genText",
            value: function() {
                this.firstHalf = this.words[this.currentWordIndex].slice(0, this.r);
                var e = this.words[this.currentWordIndex].slice(this.r, this.b).split("").map(function(e) {
                    return " " === e
                });
                this.lastHalf = this.getRandomString(this.b - this.r, e)
            }
        }, {
            key: "setText",
            value: function() {
                this.genText(), this.HTMLnode.innerHTML = this.firstHalf + this.lastHalf
            }
        }, {
            key: "setCurrentText",
            value: function() {
                this.HTMLnode.innerHTML = this.words[this.currentWordIndex].slice(0, this.words[this.currentWordIndex].length)
            }
        }, {
            key: "getRandomString",
            value: function(e, t) {
                for (var i = "", n = 0; n < e; n++) i += t[n] ? " " : this.getRandomLetter();
                return i
            }
        }, {
            key: "getRandomLetter",
            value: function() {
                var e = Math.floor(Math.random() * this.letters.length);
                return this.letters[e]
            }
        }]), m
    }(),
    Tooltip = function() {
        function e(t) {
            var i = this;
            _classCallCheck(this, e), this.element = t, this.wrapper = t.querySelector(".tooltip__wrapper"), this.calcOffset(), this.element.classList.add("is-init"), t.addEventListener("click", function(e) {
                e.stopPropagation(), i.closeAll(), i.calcOffset(), t.classList.add("is-active")
            }), t.querySelector(".tooltip__close").addEventListener("click", function(e) {
                e.stopPropagation(), t.classList.remove("is-active")
            }), document.addEventListener("click", function(e) {
                i.closeAll()
            })
        }
        return _createClass(e, [{
            key: "closeAll",
            value: function() {
                [].concat(_toConsumableArray(document.querySelectorAll(".tooltip"))).forEach(function(e) {
                    e.classList.remove("is-active")
                })
            }
        }, {
            key: "calcOffset",
            value: function() {
                var e = this.element.getBoundingClientRect();
                e.left < 200 ? (this.element.classList.remove("push-left"), this.element.classList.add("push-right")) : window.innerWidth - e.right < 200 ? (this.element.classList.remove("push-right"), this.element.classList.add("push-left")) : (this.element.classList.remove("push-left"), this.element.classList.remove("push-right"))
            }
        }]), e
    }(),
    Accordion = function() {
        function n(t) {
            var i = this;
            _classCallCheck(this, n), this.HTMLelement = t, this.state = void 0 !== t.dataset.close ? "close" : "open";
            var e = t.dataset.accordion;
            this.group = "" !== e ? [].slice.call(document.querySelectorAll('[data-accordion="' + e + '"]')) : [], this.summary = t.querySelector(".accordion__summary"), this.details = t.querySelector(".accordion__details"), this.wrapper = t.querySelector(".accordion__wrapper"), void 0 !== this.HTMLelement.dataset.accordionSwitch && (this.defaultText = this.summary.innerHTML), "open" === this.state ? (this.wrapper.style.setProperty("display", "block"), this.details.style.height = parseInt(getComputedStyle(this.wrapper).height) + parseInt(getComputedStyle(this.wrapper).paddingTop) + parseInt(getComputedStyle(this.wrapper).paddingBottom) + "px") : this.wrapper.style.setProperty("display", "none"), t.setAttribute("data-inited", !0), this.summary.addEventListener("click", function(e) {
                e.preventDefault(), i.updateState(), i.closeGroup(), "open" === i.state ? (i.close(t), i.state = "close") : (i.wrapper.style.setProperty("display", "block"), i.details.style.height = parseInt(getComputedStyle(i.wrapper).height) + parseInt(getComputedStyle(i.wrapper).paddingTop) + parseInt(getComputedStyle(i.wrapper).paddingBottom) + "px", t.removeAttribute("data-close"), t.setAttribute("data-open", ""), i.state = "open"), i.switchText()
            })
        }
        return _createClass(n, [{
            key: "close",
            value: function(e) {
                var t = e.querySelector(".accordion__details"),
                    i = e.querySelector(".accordion__wrapper");
                t.style = "", e.removeAttribute("data-open"), e.setAttribute("data-close", ""), i.style.setProperty("display", "none")
            }
        }, {
            key: "updateState",
            value: function() {
                this.state = void 0 !== this.HTMLelement.dataset.close ? "close" : "open"
            }
        }, {
            key: "switchText",
            value: function() {
                var e = void 0;
                void 0 !== this.HTMLelement.dataset.accordionSwitch && (e = this.HTMLelement.dataset.accordionSwitch, "open" === this.state ? this.summary.innerHTML = e : this.summary.innerHTML = this.defaultText)
            }
        }, {
            key: "closeGroup",
            value: function() {
                var t = this;
                this.group.forEach(function(e) {
                    t.close(e)
                })
            }
        }]), n
    }(),
    Accordions = function e(t) {
        _classCallCheck(this, e), [].slice.call(document.querySelectorAll(t.selector + ":not([data-inited])")).forEach(function(e) {
            new Accordion(e)
        })
    },
    ArrowDown = function() {
        function r(e, t, i) {
            var n = this;
            _classCallCheck(this, r), this.element = e, this.offsets = this.getOffsets([t, i]), this.downBound = this.offsets[1] < window.innerHeight ? 0 : window.innerHeight - 1, this.currentState = 0, this.addListeners(), this.id = this.getId(), window.renderer && window.renderer.add(function(e) {
                n.tick()
            }, {
                id: this.id,
                delay: 50,
                element: e
            })
        }
        return _createClass(r, [{
            key: "getId",
            value: function() {
                return "ArrowDown-" + Date.now() + 99 * Math.random()
            }
        }, {
            key: "getOffsets",
            value: function(e) {
                return e.map(function(e) {
                    return Helpers.getOffset(e).top
                })
            }
        }, {
            key: "addListeners",
            value: function() {
                var i = this;
                this.element.addEventListener("click", function(e) {
                    e.preventDefault();
                    var t = (i.currentState + 1) % i.offsets.length;
                    new ScrollTo({
                        to: i.offsets[t]
                    })
                })
            }
        }, {
            key: "setState",
            value: function(e) {
                this.currentState = e, 1 === this.currentState && this.element.classList.add("is-clicked"), 0 === this.currentState && this.element.classList.remove("is-clicked")
            }
        }, {
            key: "moveScroll",
            value: function(e) {
                window.scrollTo({
                    top: this.offsets[e],
                    left: 0,
                    behavior: "smooth"
                })
            }
        }, {
            key: "tick",
            value: function() {
                var n = this,
                    e = this.offsets.reduce(function(e, t, i) {
                        return t <= Helpers.getScrollPos() + n.downBound ? i : e
                    }, 0);
                this.currentState !== e && this.setState(e)
            }
        }]), r
    }(),
    Cart = function() {
        function e() {
            if (_classCallCheck(this, e), !document.querySelector(".cart")) return !1;
            this.initDeleteRowAnimation(), this.initNdsAnimation()
        }
        return _createClass(e, [{
            key: "initDeleteRowAnimation",
            value: function() {
                [].slice.call(document.querySelectorAll(".cart__delete")).forEach(function(t) {
                    t.addEventListener("click", function(e) {
                        t.parentElement.classList.add("is-deleted"), setTimeout(function() {
                            t.parentElement.remove()
                        }, 250)
                    })
                })
            }
        }, {
            key: "initNdsAnimation",
            value: function() {
                var t = this;
                this.cartRows = [].slice.call(document.querySelectorAll(".cart__row")), this.isNdsShowing = !1, this.cartTotal = document.querySelector(".cart__total"), this.cartTotalNds = document.querySelector(".cart__total-nds"), this.isTotalNdsShowing = !1;
                var e = document.querySelector(".js-toggle-nds");
                e.checked && (this.showNds(), this.showTotalNds()), e.addEventListener("click", function(e) {
                    t.isNdsShowing ? (t.hideNds(), t.hideTotalNds()) : (t.showNds(), t.showTotalNds())
                }), $(document).on("cartUpdated", function(e) {
                    t.isTotalNdsShowing && t.showTotalNds(), t.isNdsShowing && t.showNds()
                })
            }
        }, {
            key: "showNds",
            value: function() {
                this.isNdsShowing = !0, this.cartRows.forEach(function(e) {
                    var t = +e.dataset.price,
                        i = t / (Helpers.getNdsPercentage() + 100) * Helpers.getNdsPercentage(),
                        n = Math.floor(t - i),
                        r = e.querySelector(".cart__price-container"),
                        s = e.querySelector(".cart__current-price span"),
                        o = [accounting.formatNumber(t, 0, " "), accounting.formatNumber(n, 0, " ")],
                        a = window.language.ndsText;
                    new TextSlider({
                        HTMLnode: s,
                        words: o,
                        letterSpeed: 100,
                        typeSpeed: 30,
                        delay: 0,
                        iterationCount: 1,
                        startImmediately: !0,
                        lettersOrNumbers: !1
                    });
                    var l = r.querySelector(".cart__nds"),
                        c = "+ " + accounting.formatNumber(i, 0, " ") + " " + a;
                    new Array(c.length + 1).join("&nbsp;");
                    l.innerHTML = c, new TextFadeup(l, {
                        stepsCount: 5,
                        stepsSpeed: 100,
                        lettersOrNumbers: !0
                    }), l.style.height = "15px"
                })
            }
        }, {
            key: "hideNds",
            value: function() {
                this.isNdsShowing = !1, this.cartRows.forEach(function(e) {
                    var t = +e.dataset.price,
                        i = t - Math.floor(t * Helpers.getNdsPercentage() / 100),
                        n = e.querySelector(".cart__price-container"),
                        r = e.querySelector(".cart__current-price span"),
                        s = [accounting.formatNumber(i, 0, " "), accounting.formatNumber(t, 0, " ")];
                    new TextSlider({
                        HTMLnode: r,
                        words: s,
                        letterSpeed: 100,
                        typeSpeed: 30,
                        delay: 0,
                        iterationCount: 1,
                        startImmediately: !0,
                        lettersOrNumbers: !1
                    });
                    var o = n.querySelector(".cart__nds"),
                        a = o.innerHTML,
                        l = a.split(" ").map(function(e) {
                            return new Array(e.length + 1).join("&nbsp;")
                        }).join(" ");
                    o && (o.innerHTML = l, new TextFadeup(o, {
                        stepsCount: 5,
                        stepsSpeed: 100,
                        lettersOrNumbers: !0
                    }), o.style.height = "0px")
                })
            }
        }, {
            key: "showTotalNds",
            value: function() {
                this.isTotalNdsShowing = !0;
                var e = +this.cartTotal.dataset.price,
                    t = e / (Helpers.getNdsPercentage() + 100) * Helpers.getNdsPercentage(),
                    i = Math.floor(e - t),
                    n = [accounting.formatNumber(e, 0, " "), accounting.formatNumber(i, 0, " ")];
                "s1" !== window.siteId && (n = ["тЌ" + accounting.formatNumber(e, 0, " "), "тЌ" + accounting.formatNumber(i, 0, " ")]);
                var r = window.language.ndsText;
                new TextSlider({
                    HTMLnode: this.cartTotal.querySelector("span"),
                    words: n,
                    letterSpeed: 100,
                    typeSpeed: 30,
                    delay: 0,
                    iterationCount: 1,
                    startImmediately: !0,
                    lettersOrNumbers: !1
                });
                var s = this.cartTotalNds,
                    o = "+ " + accounting.formatNumber(t, 0, " ") + " " + r;
                new Array(o.length + 1).join("&nbsp;");
                s.innerHTML = o, new TextFadeup(s, {
                    stepsCount: 5,
                    stepsSpeed: 100,
                    lettersOrNumbers: !0
                })
            }
        }, {
            key: "hideTotalNds",
            value: function() {
                this.isTotalNdsShowing = !1;
                var e = +this.cartTotal.dataset.price,
                    t = e - Math.floor(e * Helpers.getNdsPercentage() / 100),
                    i = [accounting.formatNumber(t, 0, " "), accounting.formatNumber(e, 0, " ")];
                "s1" !== window.siteId && (i = ["тЌ" + accounting.formatNumber(t, 0, " "), "тЌ" + accounting.formatNumber(e, 0, " ")]), new TextSlider({
                    HTMLnode: this.cartTotal.querySelector("span"),
                    words: i,
                    letterSpeed: 100,
                    typeSpeed: 30,
                    delay: 0,
                    iterationCount: 1,
                    startImmediately: !0,
                    lettersOrNumbers: !1
                });
                var n = this.cartTotalNds,
                    r = n.innerHTML,
                    s = r.split(" ").map(function(e) {
                        return new Array(e.length + 1).join("&nbsp;")
                    }).join(" ");
                n && (n.innerHTML = s, new TextFadeup(n, {
                    stepsCount: 5,
                    stepsSpeed: 100,
                    lettersOrNumbers: !0
                }))
            }
        }]), e
    }(),
    Configurator = function() {
        function i(e) {
            _classCallCheck(this, i);
            var t = e.HTMLroot;
            this.matchAllHTML(t), this.addListeners(), this.initMobileFixedPrice(), this.ndsButton && this.initNdsAnimation()
        }
        return _createClass(i, [{
            key: "initMobileFixedPrice",
            value: function() {
                var i = this;
                document.body.classList.add("configurator-page"), this.fixedInProgress = !1;
                var n = this.HTMLelement.querySelector(".configurator__wrapper");
                this.fixedInProgress = !0, document.body.classList.add("is-fixed"), setTimeout(function(e) {
                    document.body.classList.add("is-init"), document.body.classList.add("is-shown"), i.fixedInProgress = !1
                }, 150), window.addEventListener("scroll", function(e) {
                    if (i.fixedInProgress) return !1;
                    i.fixedInProgress = !0;
                    var t = Helpers.getOffset(n).top + n.offsetHeight - window.innerHeight - 200;
                    Helpers.getScrollPos() >= t ? (document.body.classList.remove("is-shown"), setTimeout(function(e) {
                        document.body.classList.remove("is-init"), document.body.classList.remove("is-fixed"), i.fixedInProgress = !1
                    }, 250)) : (document.body.classList.add("is-fixed"), setTimeout(function(e) {
                        document.body.classList.add("is-init"), document.body.classList.add("is-shown"), i.fixedInProgress = !1
                    }, 250))
                })
            }
        }, {
            key: "matchAllHTML",
            value: function(e) {
                var t = this;
                this.HTMLelement = e, this.requestButtonHTMLelement = this.HTMLelement.querySelector(".configurator__request .button"), this.totalPriceHTMLelement = this.HTMLelement.querySelector(".configurator__request-price"), this.CPUcountHTMLelement = this.HTMLelement.querySelector(".configurator__main-field"), this.CPUcountInputs = [].slice.call(this.CPUcountHTMLelement.querySelectorAll("input[type=radio]")), this.CPUcountInfos = [].slice.call(this.CPUcountHTMLelement.querySelectorAll("p > span")), this.fieldsetsHTMLelement = [].slice.call(this.HTMLelement.querySelectorAll("fieldset")), this.fieldsetsInputsHTMLelement = [], this.fieldsetsHTMLelement.forEach(function(e) {
                    [].slice.call(e.querySelectorAll("input")).forEach(function(e) {
                        t.fieldsetsInputsHTMLelement.push(e)
                    })
                }), this.resultHTMLelement = this.HTMLelement.querySelector(".configurator__result"), this.gbCounterFieldsetHTMLelement = this.HTMLelement.querySelector(".js-gb-fieldset"), this.gbCounterViewHTMLelement = this.HTMLelement.querySelector(".js-gb-counter"), this.poFirstPayment = [].concat(_toConsumableArray(document.querySelectorAll(".js-purchase-options-fp"))), this.poMonthlyPayment = [].concat(_toConsumableArray(document.querySelectorAll(".js-purchase-options-mp"))), this.poRentPayment = [].concat(_toConsumableArray(document.querySelectorAll(".js-purchase-options-rent"))), this.hiddenInputs = [].concat(_toConsumableArray(document.querySelectorAll(".js-configurator-result-text"))), this.CPUcountGroup = [].concat(_toConsumableArray(document.querySelectorAll("[data-proc-count]"))), this.email = document.querySelector(".configurator__email-subscribe [type=submit]"), this.ndsButton = this.HTMLelement.querySelector(".js-configurator-nds"), this.inputsWithCounts = []
            }
        }, {
            key: "addListeners",
            value: function() {
                var i = this;
                this.CPUcountInputs.some(function(e) {
                    return e.checked
                }) || this._addStepOneListeners(), this._initCPUgroup(), this._formResult(), [].concat(_toConsumableArray(this.CPUcountInputs)).forEach(function(e) {
                    if (e.checked) {
                        i._addStepOneListeners();
                        var t = new Event("change");
                        e.dispatchEvent(t)
                    }
                })
            }
        }, {
            key: "_addStepOneListeners",
            value: function() {
                var n = this,
                    t = function e(t) {
                        n.CPUcountHTMLelement.classList.add("is-checked"), n._enableAllFieldsets(), n._switchCPUinfo(), n.CPUcountInputs.forEach(function(i) {
                            i.removeEventListener("change", e), i.addEventListener("change", function(e) {
                                var t = +i.value;
                                n._setActiveCPUgroup(t)
                            })
                        }), n._formResult(), n._setActiveCPUgroup(+t.target.value), "en" === Helpers.getLang() && (n.ndsButton.click(), n.showNds()), n._addStepTwoListeners()
                    };
                this.CPUcountInputs.forEach(function(e) {
                    e.addEventListener("change", t)
                })
            }
        }, {
            key: "_addStepTwoListeners",
            value: function() {
                var i = this;
                this._setupConfigCondition(), this._enableRequestButton(), this._enableNdsButton(), this.email.disabled = !1;
                var e = [].concat.apply([], this.inputsWithCounts);
                this.fieldsetsInputsHTMLelement.filter(function(t) {
                    return !e.some(function(e) {
                        return e == t
                    })
                }).forEach(function(t) {
                    ["change", "input"].forEach(function(e) {
                        t.addEventListener(e, function(e) {
                            i._formResult(), i._calcPrice(), i.isNdsShowing && i.showNds()
                        })
                    })
                }), this.CPUcountInputs.forEach(function(e) {
                    e.addEventListener("change", function(e) {
                        i._formResult(), i._calcPrice(), i.isNdsShowing && i.showNds()
                    })
                })
            }
        }, {
            key: "_initCPUgroup",
            value: function() {
                var n = this;
                this.CPUcountGroup.forEach(function(e) {
                    [].concat(_toConsumableArray(e.querySelectorAll(".configurator__param input"))).forEach(function(e) {
                        if (e.hasAttribute("checked")) {
                            var t = n._getCountElementByInput(e),
                                i = t ? t.getAttribute("value") : 1;
                            e.setAttribute("data-default", !0), t && t.setAttribute("data-default", i)
                        }
                    })
                })
            }
        }, {
            key: "_setActiveCPUgroup",
            value: function(t) {
                var i = this,
                    e = this.CPUcountGroup.filter(function(e) {
                        return +e.getAttribute("data-proc-count") === t
                    }),
                    n = void 0;
                this.CPUcountGroup.forEach(function(e) {
                    [].concat(_toConsumableArray(e.querySelectorAll(".configurator__param input"))).forEach(function(e) {
                        i._resetInput(e)
                    }), e.removeAttribute("data-is-active")
                }), e.forEach(function(e) {
                    e.setAttribute("data-is-active", !0), (n = [].concat(_toConsumableArray(e.querySelectorAll("input")))).forEach(function(e) {
                        e.hasAttribute("data-default") && i._enableInput(e)
                    })
                }), this._enableInputs(n), this._removeRAMError(), this._recalcRam(), this._formResult(), this._calcPrice()
            }
        }, {
            key: "_initGBcounter",
            value: function(e, t, i) {
                var r = this;
                if (!this.gbCounterFieldsetHTMLelement) return !1;
                var n = e.filter(function(e) {
                        return e.closest('[data-proc-count="' + r._getCurrentCPUCount() + '"]')
                    }),
                    s = n.filter(function(e) {
                        return e !== t
                    });
                this.ramGBcount = 0, this.maxRam = this.gbCounterViewHTMLelement.dataset.maxRam;
                var o = n.reduce(function(e, t) {
                    if (!t.checked) return e;
                    var i = r._getCountElementByInput(t),
                        n = (i ? +i.value : 1) * (t.dataset.gb || 0);
                    return r._getCurrentCPUCount() % 2 == 0 && r.isRAMError ? 0 : e + n
                }, 0);
                this.ramGBcount = o;
                var a = [this.gbCounterViewHTMLelement.innerText, String(o)];
                0 < this.maxRam && (this.ramGBcount > this.maxRam ? (a = [this.gbCounterViewHTMLelement.innerText, window.language.configurator.maxRam + " " + this.maxRam], this.gbCounterViewHTMLelement.parentElement.style.color = "#eb0000", this.isRAMError = !0, this.isGBMaxed = !0, this._disableInputs(s), this._disableRequestButton(), this.email.disabled = !0, this._disableNdsButton(), i.parentElement.classList.add("has-error"), i.parentElement.querySelector("span").style.display = "none", i.parentElement.querySelector(".configurator__field-error").innerHTML = window.language.configurator.maxRam + " " + this.maxRam + " " + window.language.configurator.GB, i.parentElement.querySelector(".configurator__field-error").style.display = "inline") : this.isGBMaxed && (this.isGBMaxed = !1, this._getCurrentCPUCount() % 2 == 0 && this.isRAMError || this._removeRAMError(), this.gbCounterViewHTMLelement.parentElement.style.color = "")), new TextSlider({
                    HTMLnode: this.gbCounterViewHTMLelement,
                    words: a,
                    letterSpeed: 50,
                    typeSpeed: 50,
                    delay: 0,
                    iterationCount: 1,
                    startImmediately: !0,
                    lettersOrNumbers: !1,
                    typingWide: 1
                })
            }
        }, {
            key: "_recalcRam",
            value: function() {
                var n = this;
                if (!this.gbCounterFieldsetHTMLelement) return !1;
                var e = [].slice.call(this.gbCounterFieldsetHTMLelement.querySelectorAll(".configurator__param input")).reduce(function(e, t) {
                    if (!t.checked) return e;
                    var i = n._getCountElementByInput(t);
                    return e + (i ? +i.value : 1) * (t.dataset.gb || 0)
                }, 0);
                this.ramGBcount = e;
                var t = [this.gbCounterViewHTMLelement.innerText, String(e)];
                new TextSlider({
                    HTMLnode: this.gbCounterViewHTMLelement,
                    words: t,
                    letterSpeed: 50,
                    typeSpeed: 50,
                    delay: 0,
                    iterationCount: 1,
                    startImmediately: !0,
                    lettersOrNumbers: !1,
                    typingWide: 1
                })
            }
        }, {
            key: "_setupConfigCondition",
            value: function() {
                var t = this;
                if (!configuratorConfig) return !1;
                configuratorConfig.fieldsets.forEach(function(e) {
                    "maxCount" in e && t._setupMaxCountCondition(e)
                })
            }
        }, {
            key: "_setupMaxCountCondition",
            value: function(r) {
                var s = this,
                    e = "#" + r.fieldsetId + ' input[data-name="' + r.dataName + '"]',
                    o = [].slice.call(this.HTMLelement.querySelectorAll(e));
                this.inputsWithCounts.push(o), o.forEach(function(i) {
                    var n = s._getCountElementByInput(i);
                    s.inputsWithCounts.push(n), i.addEventListener("change", function(e) {
                        if (s._inputHelper(i, n), s._checkMaxLimitInput(o, i, n, r), "conf-ram" === r.dataName && s.isRAMError) {
                            var t = +n.getAttribute("data-default") || +n.getAttribute("step");
                            s._removeRAMError(), s._enableInputs(o), n.value = t || 1
                        }
                        "conf-ram" === r.dataName && s._initGBcounter(o, i, n), s._uptateTips(o, r), s._formResult(), s._calcPrice(), s.isNdsShowing && s.showNds(), window.matchMedia(media.desktop).matches || (i.checked ? +n.value === (+n.max || 1 / 0) && n.parentElement.classList.add("is-plus-disabled") : n.parentElement.classList.remove("is-plus-disabled"))
                    }), n.addEventListener("click", function(e) {}), n.addEventListener("input", function(e) {
                        s._checkRAMError(o, i, n, r), "conf-ram" === r.dataName && s._initGBcounter(o, i, n), s._formResult(), s._calcPrice(), s.isNdsShowing && s.showNds(), s._uptateTips(o, r)
                    }), n.addEventListener("blur", function(e) {
                        s._checkEvenOdd(n), s._uncheckZeroInput(i, n)
                    }), window.matchMedia(media.desktop).matches || n.parentElement.querySelector(".configurator__field-change") && (n.parentElement.querySelector(".configurator__field-change--inc").addEventListener("click", function(e) {
                        s._countInputHelper(e, n, i, n.parentElement.querySelector(".configurator__field-change--inc"), o)
                    }), n.parentElement.querySelector(".configurator__field-change--dec").addEventListener("click", function(e) {
                        s._countInputHelper(e, n, i, n.parentElement.querySelector(".configurator__field-change--dec"), o)
                    }))
                })
            }
        }, {
            key: "_checkEvenOdd",
            value: function(e) {}
        }, {
            key: "_checkMaxLimitInput",
            value: function(e, t, i, n) {
                var r = this._getSumCount(e),
                    s = +i.value,
                    o = n.maxCount["x" + this._getCurrentCPUCount()] - r + s,
                    a = e.filter(function(e) {
                        return !e.checked
                    }),
                    l = e.filter(function(e) {
                        return e !== t
                    });
                o <= s ? (this.isRAMMaxed = !0, i.value = o, this._enableInputs(l), this._disableInputs(a)) : (this._enableInputs(l), this.isRAMMaxed = !1)
            }
        }, {
            key: "_disableInputs",
            value: function(e) {
                e.forEach(function(e) {
                    e.disabled = !0, e.parentElement.classList.add("is-disabled")
                })
            }
        }, {
            key: "_enableInputs",
            value: function(e) {
                e.forEach(function(e) {
                    e.disabled = !1, e.parentElement.classList.remove("is-disabled")
                })
            }
        }, {
            key: "_resetInput",
            value: function(e) {
                var t = this._getCountElementByInput(e);
                e.parentElement.classList.remove("is-checked"), e.checked = !1, t && (t.disabled = !0)
            }
        }, {
            key: "_enableInput",
            value: function(e) {
                var t = this._getCountElementByInput(e);
                if (e.parentElement.classList.add("is-checked"), e.checked = !0, t) {
                    var i = +t.getAttribute("data-default") || +t.getAttribute("step");
                    t.disabled = !1, t.value = i || 1
                }
            }
        }, {
            key: "_inputHelper",
            value: function(e, t) {
                e.parentElement.classList.toggle("is-checked"), t.disabled = !e.checked, this._checkEvenOdd(t)
            }
        }, {
            key: "_countInputHelper",
            value: function(e, t, i, n, r) {
                var s = this,
                    o = 1;
                t.step && (o = t.step), n.classList.contains("configurator__field-change--dec") && 0 < +t.value && (t.value = +t.value - 1 * o), n.classList.contains("configurator__field-change--inc") && +t.value < (+t.max || 1 / 0) && (t.value = +t.value + 1 * o), 0 == +t.value ? t.parentElement.classList.add("is-minus-disabled") : t.parentElement.classList.remove("is-minus-disabled"), +t.value === (+t.max || 1 / 0) ? r.forEach(function(e) {
                    s._getCountElementByInput(e).parentElement.classList.add("is-plus-disabled")
                }) : r.forEach(function(e) {
                    s._getCountElementByInput(e).parentElement.classList.remove("is-plus-disabled")
                }), 0 == i.checked && (i.checked = !0), 0 == t.value && this._uncheckZeroInput(i, t);
                var a = new Event("input");
                t.dispatchEvent(a)
            }
        }, {
            key: "_uptateTips",
            value: function(s, o) {
                var a = this,
                    l = this._getSumCount(s);
                s.forEach(function(e) {
                    if (e.closest(".configurator__field-group")) {
                        if (e.closest(".configurator__field-group").dataset.isActive) {
                            var t = a._getCountTipByInput(e),
                                i = a._getCountElementByInput(e);
                            if (!t) return !1;
                            a._updateTip(s, e, i, t, o, l)
                        }
                    } else {
                        var n = a._getCountTipByInput(e),
                            r = a._getCountElementByInput(e);
                        if (!n) return !1;
                        a._updateTip(s, e, r, n, o, l)
                    }
                })
            }
        }, {
            key: "_updateTip",
            value: function(e, t, i, n, r, s) {
                var o = s || this._getSumCount(e),
                    a = t.checked ? +i.value : 0,
                    l = r.maxCount["x" + this._getCurrentCPUCount()] - o + a;
                i.max = l, n.innerText = r.tipsTmpl.replace("$$", l)
            }
        }, {
            key: "_getCountTipByInput",
            value: function(e) {
                return e.parentElement.parentElement.querySelector(".configurator__field-count span")
            }
        }, {
            key: "_getCountElementByInput",
            value: function(e) {
                return e.parentElement.parentElement.querySelector(".configurator__field-count input")
            }
        }, {
            key: "_getPriceElementByInput",
            value: function(e) {
                return e.parentElement.parentElement.querySelector("[data-price]")
            }
        }, {
            key: "_getFieldByInput",
            value: function(e) {
                for (var t = e.parentElement;
                    "FIELDSET" !== t.tagName;) t = t.parentElement;
                return t
            }
        }, {
            key: "_getSumCount",
            value: function(e) {
                var i = this;
                return e.reduce(function(e, t) {
                    return t.checked ? e + +i._getCountElementByInput(t).value : e
                }, 0)
            }
        }, {
            key: "_uncheckZeroInput",
            value: function(e, t) {
                if (!t) return !1;
                if (+t.value <= 0) {
                    e.checked = !1, t.parentElement.addEventListener("transitionend", function e() {
                        t.value = t.getAttribute("value"), t.parentElement.removeEventListener("transitionend", e)
                    }), e.parentElement.classList.remove("is-checked")
                }
            }
        }, {
            key: "_enableRequestButton",
            value: function() {
                this.requestButtonHTMLelement.removeAttribute("disabled")
            }
        }, {
            key: "_disableRequestButton",
            value: function() {
                this.requestButtonHTMLelement.setAttribute("disabled", !0)
            }
        }, {
            key: "_enableNdsButton",
            value: function() {
                this.ndsButton.parentElement.classList.remove("is-disabled")
            }
        }, {
            key: "_disableNdsButton",
            value: function() {
                this.ndsButton.parentElement.classList.add("is-disabled")
            }
        }, {
            key: "_enableAllFieldsets",
            value: function() {
                this.fieldsetsHTMLelement.forEach(function(e) {
                    e.disabled = !1
                })
            }
        }, {
            key: "_switchCPUinfo",
            value: function() {
                this.CPUcountInfos.forEach(function(e) {
                    var t = [e.innerText, e.dataset.textDone];
                    new TextSlider({
                        HTMLnode: e,
                        words: t,
                        letterSpeed: 25,
                        typeSpeed: 1,
                        delay: 0,
                        iterationCount: 1,
                        startImmediately: !0,
                        lettersOrNumbers: !0,
                        typingWide: 2
                    })
                })
            }
        }, {
            key: "_formResult",
            value: function() {
                var f = this;
                this.resultHTMLelement.innerHTML = "", this.fieldsetsHTMLelement.forEach(function(e) {
                    var s = e.id,
                        t = e.querySelector("legend"),
                        i = t.children.length ? "" + t.children[0].innerText : t.innerText,
                        n = void 0,
                        o = void 0,
                        r = void 0;
                    n = 0 < e.querySelectorAll(".configurator__field-group[data-is-active]").length ? e.querySelectorAll(".configurator__field-group[data-is-active] input:checked ~ p") : e.querySelectorAll("input:checked ~ p"), r = [].slice.call(n).map(function(e) {
                        var t = e.parentElement.parentElement,
                            i = e.innerHTML,
                            n = t.querySelector(".configurator__field-count input"),
                            r = n ? +n.value : 1;
                        return "Ram-legend" === s && f.isRAMError && (r = 0), 1 === (o = r) ? i : 0 === r ? "" : r + " У " + i
                    });
                    var a = document.createElement("DIV");
                    a.classList.add("configurator__result-title"), a.innerText = i;
                    var l = r.map(function(e) {
                            var t = document.createElement("LI");
                            return t.innerText = e, t
                        }),
                        c = document.createElement("UL");
                    if (c.classList.add("configurator__result-list"), l.length && 0 < o) l.forEach(function(e) {
                        c.appendChild(e)
                    });
                    else {
                        var u = document.createElement("LI"),
                            d = document.createElement("A");
                        d.innerText = window.language.configurator.choose, d.href = "#" + s, new ScrollTo({
                            from: d,
                            to: document.querySelector("#" + s),
                            offset: -window.innerHeight / 8
                        }), u.appendChild(d), c.appendChild(d)
                    }
                    var h = document.createElement("DIV");
                    h.classList.add("configurator__result-row"), h.appendChild(a), h.appendChild(c), f.resultHTMLelement.appendChild(h)
                })
            }
        }, {
            key: "_calcPrice",
            value: function() {
                var l = this,
                    n = +configuratorConfig.basePrice + this.fieldsetsHTMLelement.reduce(function(e, t) {
                        return e + [].slice.call(t.querySelectorAll(".configurator__param input")).reduce(function(e, t) {
                            if (!t.checked) return e;
                            var i = l._getPriceElementByInput(t),
                                n = i ? +i.dataset.price : 0,
                                r = l._getCountElementByInput(t),
                                s = r ? +r.value : 1,
                                o = n * s,
                                a = +i.dataset.included;
                            return !isNaN(a) && 1 <= s && (a = 0 === a ? 1 : a, o -= n * Math.min(a, s)), e + o
                        }, 0)
                    }, 0);
                this.isRAMError && (n = "s1" !== window.siteId ? "тЌ### ###" : "### ###"), this.totalPrice = n, document.querySelector('input[name="totalPrice"]').value = n;
                var e, t = void 0;
                if (t = "s1" !== window.siteId ? "тЌ" + accounting.formatNumber(n, 0, " ") + ".т" : accounting.formatNumber(n, 0, " ") + ".т", this.isRAMError && (t = "s1" !== window.siteId ? "тЌ### ###" : "### ###"), e = [this.totalPriceHTMLelement.innerText, t], this.totalPriceHTMLelement.innerText === t) return !1;
                this.isNdsShowing || new TextSlider({
                    HTMLnode: this.totalPriceHTMLelement,
                    words: e,
                    letterSpeed: 50,
                    typeSpeed: 50,
                    delay: 0,
                    iterationCount: 1,
                    startImmediately: !0,
                    lettersOrNumbers: !1,
                    typingWide: 2
                }), this._calcPurchaseOptions(n), this._updateHiddenInputs(n);
                var i = [].slice.call(document.querySelectorAll(".js-configurator-leasing"));
                i.length && i.forEach(function(e) {
                    var t = Math.ceil(.3 * (n + 15 * n / 100)),
                        i = (n + 15 * n / 100 - t) / 12;
                    l.isRAMError && (i = "## ###"), new TextSlider({
                        HTMLnode: e,
                        words: [e.innerText, accounting.formatNumber(i, 0, " ")],
                        letterSpeed: 50,
                        typeSpeed: 50,
                        delay: 0,
                        iterationCount: 1,
                        startImmediately: !0,
                        lettersOrNumbers: !1,
                        typingWide: 2
                    })
                })
            }
        }, {
            key: "_calcPurchaseOptions",
            value: function(e) {
                var t = document.querySelector(".js-count-units").innerText,
                    i = .3 * (e + .15 * e),
                    n = (e + .15 * e - i) / 12,
                    r = n + 2200 * t;
                this.poFirstPayment.forEach(function(e) {
                    e.innerHTML = accounting.formatNumber(i, 0, " ")
                }), this.poMonthlyPayment.forEach(function(e) {
                    e.innerHTML = accounting.formatNumber(n, 0, " ")
                }), this.poRentPayment.forEach(function(e) {
                    e.innerHTML = accounting.formatNumber(r, 0, " ")
                })
            }
        }, {
            key: "_updateHiddenInputs",
            value: function(e) {
                var r = [].concat(_toConsumableArray(document.querySelectorAll("#configurator-form fieldset"))).reduce(function(e, n) {
                        var t = n.getAttribute("data-highload") || n.getAttribute("id"),
                            i = [].concat(_toConsumableArray(n.querySelectorAll("input:checked")));
                        return e[t] = i.map(function(e) {
                            var t = 1;
                            if ("CPU-legend" === n.getAttribute("id")) t = document.querySelector("[data-cpu-count] input:checked").value || 1;
                            else {
                                var i = e.parentElement.parentElement.querySelector(".configurator__field-count input");
                                t = i && i.value || 1
                            }
                            return {
                                id: e.getAttribute("data-id"),
                                count: t
                            }
                        }), e
                    }, {}),
                    t = accounting.formatNumber(document.querySelector('input[name="totalPrice"]').value, 0, " ");
                [].concat(_toConsumableArray(document.querySelectorAll('[name="PRICE"]'))).forEach(function(e) {
                    return e.value = t
                });
                var i = document.querySelector("#configurator-form").getAttribute("data-id") || 0;

                function s(e, t, i, n) {
                    var r = document.createElement("INPUT");
                    r.setAttribute("type", e), r.setAttribute("name", t), r.setAttribute("value", i), n.appendChild(r)
                } [].slice.call(document.querySelectorAll('[name="MODEL"]')).forEach(function(e) {
                    return e.value = i
                }), [].concat(_toConsumableArray(document.querySelectorAll('[name="configurator"]'))).forEach(function(e) {
                    var n = e.closest("form");
                    Object.keys(r).forEach(function(t) {
                        var e = [].concat(_toConsumableArray(n.querySelectorAll('input[name="CONF[' + t + '][ID][]"]'))),
                            i = [].concat(_toConsumableArray(n.querySelectorAll('input[name="CONF[' + t + '][COUNT][]"]')));
                        e.length && e.forEach(function(e) {
                            return e.remove()
                        }), i.length && i.forEach(function(e) {
                            return e.remove()
                        }), s("hidden", "CONF[" + t + "][]", "", n), r[t].forEach(function(e) {
                            s("hidden", "CONF[" + t + "][ID][]", e.id, n), s("hidden", "CONF[" + t + "][COUNT][]", e.count, n)
                        })
                    })
                })
            }
        }, {
            key: "_checkRAMError",
            value: function(e, t, i, n) {
                var r = this,
                    s = e.filter(function(e) {
                        return e.closest('[data-proc-count="' + r._getCurrentCPUCount() + '"]')
                    }).filter(function(e) {
                        return e !== t
                    });
                this._checkMaxLimitInput(e, t, i, n);
                var o = +i.getAttribute("step"),
                    a = +i.value;
                i.value;
                this._getCurrentCPUCount() % 2 == 0 && "conf-ram" === n.dataName && (2 === o && a % 2 != 0 ? (this.isRAMError = !0, this._disableInputs(s), this._disableRequestButton(), this.email.disabled = !0, this._disableNdsButton(), i.parentElement.classList.add("has-error"), i.parentElement.querySelector("span").style.display = "none", i.parentElement.querySelector(".configurator__field-error").innerHTML = window.language.configurator.ramError, i.parentElement.querySelector(".configurator__field-error").style.display = "inline") : (this.isRAMError && !this.isRAMMaxed && this._enableInputs(e), this._removeRAMError()))
            }
        }, {
            key: "_removeRAMError",
            value: function() {
                var e = this.HTMLelement.querySelectorAll(".configurator__field-count input");
                this._enableRequestButton(), this.email.disabled = !1, this._enableNdsButton(), e.forEach(function(e) {
                    e.parentNode.querySelector("span") && (e.parentNode.classList.remove("has-error"), e.parentNode.querySelector("span").style.display = "inline", e.parentElement.querySelector(".configurator__field-error"), e.parentNode.querySelector(".configurator__field-error") && (e.parentNode.querySelector(".configurator__field-error").style.display = "none"))
                }), this.isRAMError = !1
            }
        }, {
            key: "_getCurrentCPUCount",
            value: function() {
                var t = 0;
                return this.CPUcountInputs.forEach(function(e) {
                    1 == e.checked && (t = parseInt(e.value))
                }), t
            }
        }, {
            key: "initNdsAnimation",
            value: function() {
                var t = this;
                this.isNdsShowing = !1, this.ndsButton.checked && this.showNds(), this.ndsButton.addEventListener("click", function(e) {
                    t.isNdsShowing ? t.hideNds() : t.showNds()
                })
            }
        }, {
            key: "showNds",
            value: function() {
                this.isNdsShowing = !0;
                var e = +this.totalPrice,
                    t = e / (Helpers.getNdsPercentage() + 100) * Helpers.getNdsPercentage(),
                    i = Math.floor(e - t),
                    n = [accounting.formatNumber(e, 0, " ") + ".т", accounting.formatNumber(i, 0, " ") + ".т"];
                "s1" !== window.siteId && (n = ["тЌ" + accounting.formatNumber(e, 0, " ") + ".т", "тЌ" + accounting.formatNumber(i, 0, " ") + ".т"]);
                var r = window.language.ndsText;
                this.isRAMError && (n = "s1" !== window.siteId ? ["тЌ" + accounting.formatNumber(e, 0, " ") + ".т", "тЌ### ###.-"] : [accounting.formatNumber(e, 0, " ") + ".т", "### ###.-"]), new TextSlider({
                    HTMLnode: this.totalPriceHTMLelement,
                    words: n,
                    letterSpeed: 100,
                    typeSpeed: 30,
                    delay: 0,
                    iterationCount: 1,
                    startImmediately: !0,
                    lettersOrNumbers: !1
                });
                var s = document.querySelector(".configurator__nds"),
                    o = "+ " + accounting.formatNumber(t, 0, " ") + " " + r;
                new Array(o.length + 1).join("&nbsp;");
                this.isRAMError && (o = "+ ### ###.-"), s.innerHTML = o, new TextFadeup(s, {
                    stepsCount: 5,
                    stepsSpeed: 100,
                    lettersOrNumbers: !0
                }), s.classList.add("is-active")
            }
        }, {
            key: "hideNds",
            value: function() {
                this.isNdsShowing = !1;
                var e = +this.totalPrice,
                    t = e - Math.floor(e * Helpers.getNdsPercentage() / 100),
                    i = [accounting.formatNumber(t, 0, " ") + ".т", accounting.formatNumber(e, 0, " ") + ".т"];
                "s1" !== window.siteId && (i = ["тЌ" + accounting.formatNumber(t, 0, " ") + ".т", "тЌ" + accounting.formatNumber(e, 0, " ") + ".т"]), new TextSlider({
                    HTMLnode: this.totalPriceHTMLelement,
                    words: i,
                    letterSpeed: 100,
                    typeSpeed: 30,
                    delay: 0,
                    iterationCount: 1,
                    startImmediately: !0,
                    lettersOrNumbers: !1
                });
                var n = document.querySelector(".configurator__nds"),
                    r = n.innerHTML,
                    s = r.split(" ").map(function(e) {
                        return new Array(e.length + 1).join("&nbsp;")
                    }).join(" ");
                n && (n.innerHTML = s, new TextFadeup(n, {
                    stepsCount: 5,
                    stepsSpeed: 100,
                    lettersOrNumbers: !0,
                    callback: function() {
                        n.classList.remove("is-active")
                    }
                }))
            }
        }]), i
    }(),
    DropFile = function() {
        function e(s) {
            var o = this;
            if (_classCallCheck(this, e), !s) return !1;
            this.input = s.querySelector("input[type=file]"), this.fileName = s.querySelector(".drop-file__file"), this.cancel = s.querySelector(".drop-file__delete"), this.input.addEventListener("click", function(e) {
                s.classList.contains("is-selected") && e.preventDefault()
            }), this.input.addEventListener("change", function(e) {
                o.file = o.input.files[0], o.fileName.innerHTML = o.input.files[0].name, s.classList.add("is-selected")
            }), this.cancel.addEventListener("click", function(e) {
                e.preventDefault(), o.file = null, o.input.value = "", o.fileName.innerHTML = "", s.classList.remove("is-selected"), s.classList.remove("is-moving")
            }), s.addEventListener("dragenter", function(e) {
                s.classList.add("is-moving")
            }), s.addEventListener("dragexit", function(e) {
                s.classList.remove("is-moving")
            }), s.addEventListener("dragleave", function(e) {
                s.classList.remove("is-moving")
            }), s.addEventListener("drop", function(e) {
                e.preventDefault();
                var t = e.dataTransfer;
                if (t.items) {
                    for (var i = 0; i < t.items.length; i++)
                        if ("file" == t.items[i].kind) {
                            var n = t.items[i].getAsFile();
                            o.file = n
                        }
                } else
                    for (var r = 0; r < t.files.length; r++) o.file = t.files[r];
                o.file && o.file.name && (o.fileName.innerHTML = o.file.name, s.classList.add("is-selected")), s.classList.remove("is-moving")
            }), s.addEventListener("dragover", function(e) {
                e.preventDefault(), s.classList.add("is-moving")
            }), s.addEventListener("dragend", function(e) {
                e.preventDefault(), s.classList.remove("is-moving");
                var t = e.dataTransfer;
                if (t.items)
                    for (var i = 0; i < t.items.length; i++) t.items.remove(i);
                else e.dataTransfer.clearData()
            })
        }
        return _createClass(e, [{
            key: "getFile",
            value: function() {
                return !!this.file && this.file
            }
        }, {
            key: "getName",
            value: function() {
                return !!this.input && this.input.getAttribute("name")
            }
        }]), e
    }(),
    DropFiles = function e() {
        _classCallCheck(this, e), [].slice.call(document.querySelectorAll(".js-drop-file")).forEach(function(e) {
            new DropFile(e)
        })
    },
    Filter = function() {
        function s(e, t) {
            var i = this;
            _classCallCheck(this, s);
            var n = t.additionalParams,
                r = t.additionalToggle;
            this.pointerEvent = media.desktop ? "click" : "touchstart", this.formElement = e, this.toggleButton = e.querySelector(r), this.additionalParams = e.querySelector(n), this.fieldResets = [].concat(_toConsumableArray(e.querySelectorAll(".js-field-reset"))), this.filterReset = document.querySelector(".js-filter-reset-container"), this.filterResetButton = document.querySelector(".js-filter-reset-btn"), this.radios = [].concat(_toConsumableArray(this.formElement.querySelectorAll(".radio > input"))), this.initSelects(), this.initAdditionalToggle(), this.initSelectResets(), this.filterResetBtn(), this.filterResetCounter(), document.addEventListener("filter-loaded", function(e) {
                i.filterResetCounter()
            })
        }
        return _createClass(s, [{
            key: "initSelects",
            value: function() {
                var e = [].concat(_toConsumableArray(this.formElement.querySelectorAll("select:not([data-select-inited])")));
                if (!$) return !1;
                e.forEach(function(e) {
                    $(e).SumoSelect({
                        captionFormat: "абаБбаАаНаО: {0}",
                        captionFormatAllSelected: "абаБбаАаНаО: {0}"
                    }), e.setAttribute("data-select-inited", !0)
                })
            }
        }, {
            key: "initAdditionalToggle",
            value: function() {
                var t = this;
                if (!this.toggleButton && !this.additionalParams) return !1;
                this.calcAdditionalHeight(), this.additionalParams.style.height = "0px", this.additionalParams.style.overflow = "hidden", this.additionalState = !1, this.animatingInProgress = !1, this.toggleButton.addEventListener(this.pointerEvent, function(e) {
                    e.preventDefault(), t.toggleButton.classList.toggle("is-toggle"), t.toggleAdditional()
                })
            }
        }, {
            key: "calcAdditionalHeight",
            value: function() {
                this.additionalHeight = getComputedStyle(this.additionalParams).height
            }
        }, {
            key: "switchButtonText",
            value: function() {
                var e = this.toggleButton.innerHTML,
                    t = this.toggleButton.dataset.text;
                this.toggleButton.dataset.text = e, this.toggleButton.innerHTML = t
            }
        }, {
            key: "toggleAdditional",
            value: function() {
                var e = this;
                if (this.animatingInProgress) return !1;
                this.animatingInProgress = !0, this.additionalState ? (this.switchButtonText(), this.additionalParams.style.height = "0px", this.additionalParams.style.overflow = "hidden", setTimeout(function() {
                    e.additionalState = !1, e.animatingInProgress = !1
                }, 250)) : (this.switchButtonText(), this.additionalParams.style.height = this.additionalHeight, setTimeout(function() {
                    e.additionalParams.style.overflow = "visible", setTimeout(function() {
                        e.additionalParams.style.height = "auto", setTimeout(function() {
                            e.additionalState = !0, e.animatingInProgress = !1, e.calcAdditionalHeight(), e.additionalParams.style.height = e.additionalHeight
                        }, 10)
                    }, 10)
                }, 250))
            }
        }, {
            key: "resetSelect",
            value: function() {
                if (this.fieldResets.length <= 0) return !1;
                this.fieldResets.forEach(function(i) {
                    i.addEventListener("click", function(e) {
                        var t = i.parentElement.querySelector("select");
                        t.selectedIndex = 0, t.hasAttribute("multiple") && (t.selectedIndex = -1), $(t)[0].sumo.reload(), i.classList.remove("is-active"), SendFilterAjax(), $(".js-filter-config").submit()
                    })
                })
            }
        }, {
            key: "initRadioResets",
            value: function() {
                var t = this;
                0 < this.formElement.querySelectorAll(".radio > input").length && [].concat(_toConsumableArray(this.formElement.querySelectorAll(".radio > input"))).forEach(function(e) {
                    e.addEventListener("click", function(e) {
                        t.filterResetCounter()
                    })
                })
            }
        }, {
            key: "initSelectResets",
            value: function() {
                var e = [].concat(_toConsumableArray(this.formElement.querySelectorAll("select"))),
                    i = this;
                $(e).on("change", function(e) {
                    var t = $(this);
                    t.attr("multiple") ? 0 <= t.prop("selectedIndex") ? t.closest(".filter__field").find(".js-field-reset").addClass("is-active") : t.closest(".filter__field").find(".js-field-reset").removeClass("is-active") : 0 < t.prop("selectedIndex") ? t.closest(".filter__field").find(".js-field-reset").addClass("is-active") : t.closest(".filter__field").find(".js-field-reset").removeClass("is-active"), i.filterResetCounter()
                }), e.forEach(function(e) {
                    e.hasAttribute("multiple") ? 0 <= e.selectedIndex && e.closest(".filter__field").querySelector(".js-field-reset").classList.add("is-active") : 0 < e.selectedIndex && e.closest(".filter__field").querySelector(".js-field-reset").classList.add("is-active")
                }), this.resetSelect()
            }
        }, {
            key: "filterResetCounter",
            value: function() {
                var t = this;
                if (!this.filterReset) return !1;
                var e = [].concat(_toConsumableArray(this.formElement.querySelectorAll("select")));
                this.selectedCount = 0, e.forEach(function(e) {
                    e.hasAttribute("multiple") ? 0 <= e.selectedIndex && ++t.selectedCount : 0 < e.selectedIndex && ++t.selectedCount
                }), 0 < this.formElement.querySelectorAll(".radio > input").length && [].concat(_toConsumableArray(this.formElement.querySelectorAll(".radio > input"))).forEach(function(e) {
                    e.checked && !e.disabled && "filter-all" !== e.value && "all" !== e.value && ++t.selectedCount
                }), 0 < this.selectedCount ? (this.filterResetButton.classList.add("is-active"), this.filterReset.querySelector("span").innerHTML = window.language.choosed + ": " + this.selectedCount) : (this.filterResetButton.classList.remove("is-active"), this.filterReset.querySelector("span").innerHTML = window.language.configureFilters)
            }
        }, {
            key: "filterResetBtn",
            value: function() {
                var t = this;
                if (!this.filterResetButton) return !1;
                var i = [].concat(_toConsumableArray(this.formElement.querySelectorAll("select")));
                0 < this.selectedCount && this.filterResetButton.classList.add("is-active"), this.filterResetButton.addEventListener("click", function(e) {
                    i.forEach(function(e) {
                        e.selectedIndex = 0, e.hasAttribute("multiple") && (e.selectedIndex = -1), $(e)[0].sumo.reload(), e.closest(".filter__field").querySelector(".js-field-reset").classList.remove("is-active"), t.filterResetButton.classList.remove("is-active")
                    }), 0 < t.formElement.querySelectorAll(".radio > input").length && [].concat(_toConsumableArray(t.formElement.querySelectorAll(".radio > input"))).forEach(function(e) {
                        "filter-all" !== e.value && "all" !== e.value ? e.checked = !1 : e.checked = !0
                    }), 0 < t.formElement.querySelectorAll(".input > input").length && [].concat(_toConsumableArray(t.formElement.querySelectorAll(".input > input"))).forEach(function(e) {
                        e.value = ""
                    }), SendFilterAjax(), $(".js-filter-config").submit()
                })
            }
        }]), s
    }(),
    FloatAction = function() {
        function i(e) {
            var t = this;
            _classCallCheck(this, i), this.rootElement = e, this._match(), this._checkBanner(), this._calcStartPos(), this._calcFooterOffset(), this._toggle(), this._slider(), this._checkNav(), this._closeLabel(), window.addEventListener("resize", function(e) {
                t.labelHidden || (t._calcStartPos(), t._calcFooterOffset())
            })
        }
        return _createClass(i, [{
            key: "_checkBanner",
            value: function() {
                ((new Date).getTime() - (Helpers.getCookie("float-action-refresh") || 0)) / 1e3 <= 1800 && this.wrapper.classList.add("is-hidden")
            }
        }, {
            key: "_match",
            value: function() {
                this.mainContainer = this.rootElement.querySelector(".float-action__main"), this.button = this.rootElement.querySelector(".float-action__label-wrapper"), this.buttonNoActions = this.rootElement.querySelector(".float-action__link-wrapper"), this.wrapper = this.rootElement.querySelector(".float-action__wrapper"), this.overlay = this.rootElement.querySelector(".float-action__overlay"), this.slider = this.rootElement.querySelector(".float-action__slider"), this.sliderNavs = [].concat(_toConsumableArray(this.rootElement.querySelectorAll(".float-action__control"))), this.closeBtn = this.rootElement.querySelector(".float-action__close")
            }
        }, {
            key: "_calcStartPos",
            value: function() {
                if (!this.mainContainer) return !1;
                var e = this.mainContainer.offsetHeight;
                this.wrapper.style.bottom = -Math.abs(e) + "px"
            }
        }, {
            key: "_calcFooterOffset",
            value: function() {
                if (this.wrapper.classList.contains("is-hidden") || document.body.classList.add("float-action-inited"), window.matchMedia(media.tabletLandscape).matches) document.querySelector("footer").style.paddingBottom = "";
                else {
                    document.querySelector("footer").style.paddingBottom = "";
                    var e = parseInt(getComputedStyle(document.querySelector("footer")).paddingBottom),
                        t = void 0;
                    parseInt(getComputedStyle(document.body).paddingBottom);
                    this.button && (t = e + this.button.offsetHeight), this.buttonNoActions && (t = e + this.buttonNoActions.offsetHeight), this.wrapper.classList.contains("is-hidden") || (document.querySelector("footer").style.paddingBottom = t + "px")
                }
            }
        }, {
            key: "_toggle",
            value: function() {
                var t = this;
                return !!this.button && (this.button.addEventListener("click", function(e) {
                    t.rootElement.classList.toggle("is-expanded")
                }), !!this.overlay && void this.overlay.addEventListener("click", function(e) {
                    t.rootElement.classList.remove("is-expanded")
                }))
            }
        }, {
            key: "_checkNav",
            value: function() {
                if (!this.slider) return !1;
                var e = this.rootElement.querySelector(".float-action__control--next"),
                    t = this.rootElement.querySelector(".float-action__control--prev");
                this.slider.scrollLeft <= 0 && t.classList.add("is-disabled"), 0 < this.slider.scrollLeft && t.classList.remove("is-disabled"), this.slider.scrollWidth - this.slider.scrollLeft == this.slider.offsetWidth ? e.classList.add("is-disabled") : e.classList.remove("is-disabled")
            }
        }, {
            key: "_slider",
            value: function() {
                var i = this;
                if (!this.slider) return !1;
                var n = void 0;
                this.sliderNavs.forEach(function(t) {
                    t.addEventListener("click", function(e) {
                        n = t.classList.contains("float-action__control--prev") ? "-" : "+";
                        anime({
                            targets: i.slider,
                            scrollLeft: n + "=" + i.rootElement.querySelector(".latest-slider-card").offsetWidth,
                            easing: [.25, .1, .25, 1],
                            duration: 500
                        })
                    })
                }), this.slider.addEventListener("scroll", function(e) {
                    i._checkNav()
                })
            }
        }, {
            key: "_closeLabel",
            value: function() {
                var i = this;
                if (!this.closeBtn) return !1;
                this.closeBtn.addEventListener("click", function(e) {
                    i.wrapper.style.bottom = "", i.wrapper.classList.add("is-closed"), document.body.classList.remove("float-action-inited");
                    var t = (new Date).getTime();
                    Helpers.setCookie("float-action-refresh", t, {
                        path: "/"
                    }), i.labelHidden = !0
                })
            }
        }]), i
    }(),
    FloatInfo = function() {
        function i(e) {
            var t = this;
            _classCallCheck(this, i), this.element = e, this.container = document.querySelector(".float-info"), this.closeBtn = this.container.querySelector(".float-info__close"), this.containerTitle = this.container.querySelector(".float-info__title"), this.containerText = this.container.querySelector(".float-info__text"), this.closeBtn.addEventListener("click", function(e) {
                t.close()
            })
        }
        return _createClass(i, [{
            key: "open",
            value: function() {
                var e = JSON.parse(this.element.dataset.floatInfo);
                this.containerTitle.innerHTML = BX.message(e.title), this.containerText.innerHTML = BX.message(e.text), this.container.classList.add("is-active")
            }
        }, {
            key: "close",
            value: function() {
                this.container.classList.remove("is-active")
            }
        }]), i
    }(),
    LeasingCalc = function() {
        function i() {
            _classCallCheck(this, i);
            var e = $(".leasing-calc .leasing-calc__range-slider"),
                t = $('.leasing-calc input[name="handle-input"]');
            this.matchHTML(), this.inputRange && (this.maxValue = parseInt(this.inputRange.max), this.minValue = parseInt(this.inputRange.min), this.stepValue = parseInt(this.inputRange.step), this.startValue = parseInt(this.inputRange.dataset.begin), this.showMsgValue = parseInt(this.inputRange.dataset.showMsg)), 0 < document.querySelectorAll(".leasing-calc").length && this.initRange(e, t), 0 < document.querySelectorAll(".leasing-calc").length && new ScrollTo({
                from: document.querySelector(".leasing-s01__button"),
                to: document.querySelector(".leasing-calc")
            })
        }
        return _createClass(i, [{
            key: "matchHTML",
            value: function() {
                this.inputRange = document.querySelector(".leasing-calc__handle-input")
            }
        }, {
            key: "insertCounter",
            value: function(e, t) {
                e.find(".noUi-handle").html('<div class="rangeslider__counter">' + accounting.formatNumber(t, 0, " ") + "</div>")
            }
        }, {
            key: "initRange",
            value: function(i, t) {
                var n = this,
                    e = i.closest(".leasing-calc").find('input[name="leasing-term"]'),
                    r = i[0],
                    s = this;
                noUiSlider.create(r, {
                    start: [this.startValue],
                    connect: [!0, !1],
                    step: this.stepValue,
                    range: {
                        min: [this.minValue],
                        max: [this.maxValue]
                    }
                }), n.calculate(r.noUiSlider.get(), i.closest(".leasing-calc").find('input[name="leasing-term"]:checked').val()), r.noUiSlider.on("init", this.insertCounter(i, r.noUiSlider.get())), r.noUiSlider.on("init", t.val(accounting.formatNumber(r.noUiSlider.get(), 0, " "))), r.noUiSlider.on("slide", function() {
                    var e = r.noUiSlider.get();
                    e > s.maxValue && (r.noUiSlider.set(s.maxValue), e = s.maxValue), e >= s.showMsgValue ? $(".leasing-calc__special").show() : $(".leasing-calc__special").hide(), n.insertCounter(i, e), t.val(accounting.formatNumber(e, 0, " ")), n.calculate(parseInt(t.val().split(" ").join("")), i.closest(".leasing-calc").find('input[name="leasing-term"]:checked').val())
                }), r.noUiSlider.on("set", function() {
                    var e = r.noUiSlider.get();
                    n.insertCounter(i, e)
                }), e.on("change", function() {
                    n.calculate(parseInt(t.val().split(" ").join("")), i.closest(".leasing-calc").find('input[name="leasing-term"]:checked').val())
                }), t.on("change", function() {
                    var e = $(this),
                        t = parseInt(e.val().split(" ").join(""));
                    t > s.maxValue && e.val(s.maxValue), t < s.minValue && (e.val(s.minValue), t = s.minValue, r.noUiSlider.set(t), n.calculate(t, i.closest(".leasing-calc").find('input[name="leasing-term"]:checked').val()), e.val(accounting.formatNumber(e.val(), 0, " ")), e.removeClass("leasing-calc__handle-input--error")), t >= s.showMsgValue ? $(".leasing-calc__special").show() : $(".leasing-calc__special").hide()
                }), t.on("input", function() {
                    var e = $(this),
                        t = parseInt(e.val().split(" ").join(""));
                    t > s.maxValue && (e.val(s.maxValue), t = s.maxValue), t >= s.showMsgValue ? $(".leasing-calc__special").show() : $(".leasing-calc__special").hide(), t >= s.minValue ? (e.removeClass("leasing-calc__handle-input--error"), r.noUiSlider.set(t), n.insertCounter(i, t), n.calculate(t, i.closest(".leasing-calc").find('input[name="leasing-term"]:checked').val())) : e.addClass("leasing-calc__handle-input--error"), e.val(accounting.formatNumber(e.val(), 0, " "))
                }), t.keydown(function(e) {
                    -1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) || 65 == e.keyCode && (!0 === e.ctrlKey || !0 === e.metaKey) || 67 == e.keyCode && (!0 === e.ctrlKey || !0 === e.metaKey) || 88 == e.keyCode && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && e.keyCode <= 39 || (e.shiftKey || e.keyCode < 48 || 57 < e.keyCode) && (e.keyCode < 96 || 105 < e.keyCode) && e.preventDefault()
                })
            }
        }, {
            key: "calculate",
            value: function(e, t) {
                var i = parseInt(e),
                    n = parseInt(t),
                    r = n / 12 * .15,
                    s = i + i * r,
                    o = .3 * s,
                    a = (i + i * r - o) / n;
                $(".leasing-calc__totalPrice").html(accounting.formatNumber(s, 0, " ")), $(".leasing-calc__firstPayment").html(accounting.formatNumber(o, 0, " ")), $(".leasing-calc__monthlyPayment").html(accounting.formatNumber(a, 0, " "))
            }
        }]), i
    }();
! function(e, s) {
    var d = e.mainSliderImages,
        i = s.querySelector(".main-slider"),
        n = [].slice.call(s.querySelectorAll(".js-main-slider-button")),
        r = null;
    if (!i) return;
    var o = [].slice.call(i.querySelectorAll("[data-slide-type]"));

    function h(e, t, i, n) {
        var r = s.createElement("img");
        r.onload = function() {
            e.dataset.curIndex = i, e.style.backgroundImage = "url(" + t + ")", e.classList.add("show-slide"), r = null, Helpers.setCookie("main-slider-cur-index-" + n, i)
        }, r.src = t
    }

    function f(e, t) {
        return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e
    }
    o.forEach(function(e, t) {
        var i = Number(Helpers.getCookie("main-slider-cur-index-" + t)) || 0,
            n = e.getAttribute("data-slide-type"),
            r = d[n];
        if (r.length <= 1) return h(e, r[i], i, t), !1;
        var s = r.filter(function(e, t) {
                return i !== t
            }),
            o = s.length,
            a = f(0, o - 1),
            l = s[a],
            c = r.reduce(function(e, t, i) {
                return e = t === l ? i : e
            }, 0);
        h(e, l, c, t)
    }), n.forEach(function(e, t) {
        e.addEventListener("mouseenter", function(e) {
            n.forEach(function(e, t) {
                i.classList.remove("main-slider--slide-" + (t + 1))
            }), i.classList.add("main-slider--slide-" + (t + 1)), r && clearTimeout(r), r = setTimeout(function() {
                var u;
                u = t, o.forEach(function(e, t) {
                    if (t === u) return e.classList.add("show-slide"), !1;
                    var i = Number(e.getAttribute("data-cur-index")) || 0,
                        n = e.getAttribute("data-slide-type"),
                        r = d[n];
                    if (r.length <= 1) return !1;
                    e.classList.remove("show-slide");
                    var s = r.filter(function(e, t) {
                            return i !== t
                        }),
                        o = s.length,
                        a = f(0, o - 1),
                        l = s[a],
                        c = r.reduce(function(e, t, i) {
                            return e = t === l ? i : e
                        }, 0);
                    h(e, l, c, t)
                })
            }, 500)
        })
    })
}(window, document);
var MultistepsForm = function() {
    function i(e) {
        var t = this;
        _classCallCheck(this, i), this.root = e, this.formElement = this.root.querySelector("form"), this.back = this.root.querySelector(".multisteps-form__back"), this.forward = this.root.querySelector(".multisteps-form__forward"), this.nav = this.root.querySelector(".multisteps-form__nav"), this.steps = this.root.querySelector(".multisteps-form__steps"), this.stepsArr = [].concat(_toConsumableArray(this.root.querySelectorAll(".multisteps-form__step"))), this.progressBar = this.root.querySelector(".multisteps-form__bar"), this.form = new FormValidation(this.formElement), this.slider = new Siema({
            selector: this.steps,
            duration: 200,
            easing: "ease-out",
            perPage: 1,
            startIndex: 0,
            draggable: !1,
            threshold: 20,
            loop: !1,
            onInit: function() {
                t.root.classList.add("is-init")
            },
            onChange: function() {
                t.update()
            }
        }), this.back.addEventListener("click", function(e) {
            e.preventDefault(), t.slider.prev()
        }), this.forward.addEventListener("click", function(e) {
            e.preventDefault(), t.slider.currentSlide === t.slider.innerElements.length - 1 ? t.form.triggerSubmit() ? t.showSuccess() : t.showErrors() : t.slider.next()
        }), this.update(), this.initTelEmailInput()
    }
    return _createClass(i, [{
        key: "initTelEmailInput",
        value: function() {
            var n = this,
                r = this.root.querySelector(".js-tel-email-input"),
                s = r.querySelector("input"),
                o = [].concat(_toConsumableArray(r.querySelectorAll("p > span"))),
                a = ["type", "placeholder"],
                l = [{
                    type: "tel",
                    placeholder: "ааВаЕаДаИбаЕ аВаАб баЕаЛаЕбаОаН"
                }, {
                    type: "email",
                    placeholder: "ааВаЕаДаИбаЕ аВаАб email"
                }];
            r.setAttribute("data-state", 0), o.forEach(function(i) {
                i.addEventListener("click", function(e) {
                    o.forEach(function(e) {
                        return e.classList.remove("is-active")
                    }), i.classList.add("is-active");
                    var t = 0 == +r.getAttribute("data-state") ? 1 : 0;
                    r.setAttribute("data-state", t), s.value = "", s.hasAttribute("data-mask-inited") && (s.mask.destroy(), s.removeAttribute("data-mask-inited")), a.forEach(function(e) {
                        s.setAttribute(e, l[t][e])
                    }), setTimeout(function() {
                        n.form.initInputs()
                    }, 25)
                })
            })
        }
    }, {
        key: "showErrors",
        value: function() {
            var i = 0;
            this.stepsArr.some(function(e, t) {
                return i = t, [].concat(_toConsumableArray(e.querySelectorAll("input"))).some(function(e) {
                    return e.classList.contains("has-error")
                })
            }) && this.slider.goTo(i)
        }
    }, {
        key: "showSuccess",
        value: function() {
            this.root.classList.add("is-success")
        }
    }, {
        key: "update",
        value: function() {
            this.progressBar.style.width = (this.slider.currentSlide + 1) / this.slider.innerElements.length * 100 + "%", this.nav.innerHTML = this.slider.currentSlide + 1 + "&zwnj;/" + this.slider.innerElements.length, 0 === this.slider.currentSlide ? this.back.classList.remove("is-show") : this.back.classList.add("is-show"), this.slider.currentSlide === this.slider.innerElements.length - 1 ? this.forward.innerHTML = window.language.send : this.forward.innerHTML = window.language.continue, [].concat(_toConsumableArray(this.stepsArr[this.slider.currentSlide].querySelectorAll("input"))).some(function(e) {
                return e.classList.contains("has-error")
            }) ? this.progressBar.classList.add("has-error") : this.progressBar.classList.remove("has-error")
        }
    }]), i
}();
// ! function(e, t) {
//     t.querySelector(".navigation"), t.querySelector(".navigation__overlay"), t.querySelector(".navigation__nav-content");
//     var i = [].slice.call(t.querySelectorAll(".navigation__menu")),
//         n = t.querySelector(".navigation__search"),
//         r = t.querySelector(".search"),
//         s = t.querySelector(".search__input input"),
//         o = [].slice.call(t.querySelectorAll('.l-filter__button button, .filter [type="submit"]')),
//         a = [].slice.call(t.querySelectorAll(".js-toggle-subnav")),
//         l = t.querySelector("body"),
//         c = (getComputedStyle(l).overflow, parseFloat(getComputedStyle(l).paddingRight)),
//         u = Helpers.getScrollbarWidth(),
//         d = !1,
//         h = !1,
//         f = !1,
//         m = !1;
//     if (!i.length) return;
//
//     function p() {
//         return !d && (!h && void(l.classList.toggle("is-filter-open") ? (l.classList.add("show-close-btn"), w(), f = !0, s.focus()) : (l.classList.remove("show-close-btn"), A(), f = !1)))
//     }
//
//     function g() {
//         return !d && (!h && (!f && void(l.classList.toggle("is-subnav-open") ? (l.classList.add("show-close-btn"), w(), m = !0, s.focus()) : (l.classList.remove("show-close-btn"), A(), m = !1))))
//     }
//
//     function v() {
//         return !d && (!f && (!m && void(l.classList.toggle("is-search-open") ? (l.classList.add("show-close-btn"), w(), r.classList.add("is-animate"), h = !0, s.focus()) : (l.classList.remove("show-close-btn"), A(), r.classList.remove("is-animate"), h = !1))))
//     }
//     i.forEach(function(e) {
//         e.addEventListener("click", function(e) {
//             e.preventDefault(),
//                 function() {
//                     if (document.body.classList.contains("slider-360-is-open")) return;
//                     if (h) return v();
//                     if (f) return p();
//                     if (m) return g();
//                     l.classList.toggle("is-menu-open") ? (l.classList.add("show-close-btn"), w(), b.forEach(function(e) {
//                         e.addEventListener("mouseenter", S), e.addEventListener("mouseleave", C)
//                     }), d = !0) : (l.classList.remove("show-close-btn"), A(), b.forEach(function(e) {
//                         e.removeEventListener("mouseenter", S), e.removeEventListener("mouseleave", C)
//                     }), d = !1)
//                 }()
//         })
//     }), [].concat(_toConsumableArray(t.querySelectorAll(".search__row"))).forEach(function(e) {
//         var t = 0,
//             i = e.querySelectorAll("a");
//         0 < i.length ? (i.forEach(function(e) {
//             t += e.innerHTML.length
//         }), t += i.length - 1) : t = e.innerHTML.length, e.style.width = t + "ch", e.style.animationTimingFunction = "steps(" + t + ", end), ease"
//     }), n.addEventListener("click", function(e) {
//         e.preventDefault(), v()
//     }), o.length && o.forEach(function(e) {
//         e.addEventListener("click", function(e) {
//             e.preventDefault(), p()
//         })
//     }), a.length && a.forEach(function(e) {
//         e.addEventListener("click", function(e) {
//             e.preventDefault(), g()
//         })
//     }), E(), window.addEventListener("resize", function(e) {
//         E()
//     });
//
//     function y(e) {
//         (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
//     }
//
//     function w() {
//         window.addEventListener && window.addEventListener("DOMMouseScroll", y, !1), window.addEventListener("scroll", y, !1), l.classList.add("lock-scroll"), l.style.marginRight = u + "px"
//     }
//
//     function A() {
//         window.removeEventListener && window.removeEventListener("DOMMouseScroll", y, !1), window.removeEventListener("scroll", y, !1), l.classList.remove("lock-scroll"), l.style.marginRight = c
//     }
//     var b = [].slice.call(t.querySelectorAll(".menu__link > a"));
//
//     function S() {
//         this.TextGlitch = null, this.TextGlitch = new TextGlitch(this, {
//             rhythm: [100, -100, 250, -250, 100, -100, 100, -100, 100, -1e3]
//         })
//     }
//
//     function C() {
//         this.TextGlitch && this.TextGlitch.remove(), this.TextGlitch = null
//     }
//
//     function E() {
//         [".navigation__search", ".navigation__user", ".navigation__cart", ".navigation__feedback", ".socials"].forEach(function(e) {
//             var t = document.querySelector(e);
//             if (!t) return !1;
//             t.setAttribute("style", ""), t.style.left = t.getBoundingClientRect().left - parseFloat(getComputedStyle(t).marginLeft) + "px", t.style.right = "auto"
//         })
//     }
// }(window, document);
var Offers = function() {
        function e() {
            if (_classCallCheck(this, e), !this.grabElements()) return !1;
            this.calcValues(), window.matchMedia("(min-width: 1100px)").matches && (this.prepareAnimation(), this.startAnimation()), this.initSlider360(), this.buyButtons.forEach(function(e) {
                new BuyButton(e)
            }), -1 < navigator.userAgent.toLowerCase().indexOf("firefox") && -1 === ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) && document.querySelectorAll(".slider360-btn__icon, .offers__360-image") && (document.querySelector('.slider360-btn__icon text[transform="translate(6,3)"]').setAttribute("transform", "translate(6,8)"), document.querySelector('.offers__360-image text[transform="translate(6,3)"]').setAttribute("transform", "translate(6,10)")), "s1" !== window.siteId && this.initNdsAnimation(), this.calcFloatPriceWidth(), this.generateDescPDF()
        }
        return _createClass(e, [{
            key: "grabElements",
            value: function() {
                return this.wrapper = document.querySelector(".offers"), !!this.wrapper && (this.els = [].slice.call(document.querySelectorAll(".js-offers-move")), this.label = document.querySelector(".js-offers-label"), this.offersHeader = this.wrapper.querySelector(".offers__header"), this.header = document.querySelector(".header"), this.offersBottom = this.wrapper.querySelector(".offers__bottom"), this.offersDummy = this.wrapper.querySelector(".offers__dummy"), this.offerImageContainer = this.wrapper.querySelector(".offers__img"), this.offerImage = this.wrapper.querySelector(".offers__image img"), this.scaleWrapper = this.wrapper.querySelector(".offers__scale"), this.sliderButtons = [].slice.call(this.wrapper.querySelectorAll(".js-slider-360")), this.buyButtons = [].concat(_toConsumableArray(document.querySelectorAll(".product-card__button"))), this.totalPriceHTMLelement = this.wrapper.querySelector(".js-offer-total-price"), "s1" !== window.siteId && this.totalPriceHTMLelement && (this.ndsButton = this.wrapper.querySelector(".js-offer-nds"), this.totalPrice = parseInt(this.totalPriceHTMLelement.innerHTML.split(" ").join("").split("тЌ").join(""))), this.descriptionBtn = document.querySelector("[data-product-description]"), this.prevY = 0, this.animRunning = !1, this.position = 0, this.speed = 10, !!this.offerImage)
            }
        }, {
            key: "calcValues",
            value: function() {
                this.offersTopHeight = Helpers.getHeight(this.offersHeader) + Helpers.getHeight(this.offersBottom), this.offersBottomHeight = Helpers.getHeight(this.offersDummy), this.offersDummy.style.height = "0px"
            }
        }, {
            key: "initSlider360",
            value: function() {
                var t = this;
                this.isSliderOpen = !1, this.isCloseOpenProcess = !1, this.disableScroll = function(e) {
                    e.preventDefault()
                }, this.closeSlider = function(e) {
                    e.preventDefault(), this.closeSlider360()
                }, this.scaleFactor = 1, this.dragX = 0, this.dragY = 0, this.pageX = 0, this.pageY = 0, this.wheelScaleHandler = function(e) {
                    t.scaleFactor -= e.deltaY / 100, t.scaleFactor < 1 && (t.scaleFactor = 1), 2 < t.scaleFactor && (t.scaleFactor = 2), t.updateDragCoords()
                }, this.dragScaleHandler = function(e) {
                    t.pageX = e.pageX, t.pageY = e.pageY, t.updateDragCoords()
                }, this.closeButton = document.querySelector(".navigation__menu"), this.progressBar = document.querySelector(".offers__progress"), this.threesixty = null, this.sliderButtons.forEach(function(e) {
                    e.addEventListener("click", function(e) {
                        e.preventDefault(), t.toggleSlider360()
                    })
                })
            }
        }, {
            key: "updateDragCoords",
            value: function() {
                var e = Math.max(this.scaleWrapper.offsetWidth * this.scaleFactor - window.innerWidth, 0),
                    t = -1 * (this.pageX - window.innerWidth / 2) / (window.innerWidth / 2);
                this.dragX = e / 2 * t / this.scaleFactor;
                var i = Math.max(this.scaleWrapper.offsetHeight * this.scaleFactor - window.innerHeight, 0),
                    n = -1 * (this.pageY - Helpers.getScrollPos() - window.innerHeight / 2) / (window.innerHeight / 2);
                this.dragY = this.currentY / this.scaleFactor + i / 2 * n / this.scaleFactor, this.scaleWrapper.style.transform = "scale(" + this.scaleFactor + ") translate3d(" + this.dragX + "px, " + this.dragY + "px, 0)"
            }
        }, {
            key: "toggleSlider360",
            value: function() {
                this.isSliderOpen ? this.closeSlider360() : this.openSlider360()
            }
        }, {
            key: "openSlider360",
            value: function() {
                var t = this;
                if (this.isCloseOpenProcess) return !1;
                if (this.isSliderOpen) return !1;
                this.isCloseOpenProcess = !0, this.isSliderOpen = !0, this.isImageAnimating = !1, this.scrollOff();
                var e = this.scaleWrapper.getBoundingClientRect();
                this.currentY = -1 * e.top + (window.innerHeight - e.height) / 2, this.scaleWrapper.style.transform = "translateY(0px)", document.body.classList.add("slider-360-is-open", "show-close-btn"), setTimeout(function(e) {
                    document.body.classList.add("hide"), t.scaleWrapper.style.transform = "translateY(" + t.currentY + "px)", t.threesixty ? t.threesixty.play() : t.threesixty = new Threesixty(t.offerImageContainer, t.progressBar), t.closeButton.addEventListener("click", t.closeSlider360.bind(t)), document.addEventListener("wheel", t.wheelScaleHandler), document.addEventListener("mousemove", t.dragScaleHandler), t.isCloseOpenProcess = !1
                }, 20), setTimeout(function() {
                    document.body.classList.add("finish")
                }, 500)
            }
        }, {
            key: "closeSlider360",
            value: function() {
                var t = this;
                return !this.isCloseOpenProcess && (!!this.isSliderOpen && (this.isCloseOpenProcess = !0, this.scrollOn(), this.isImageAnimating = !0, this.closeButton.removeEventListener("click", this.closeSlider360.bind(this)), this.scaleFactor = 1, this.scaleWrapper.style.transform = "scale(1) translate3d(0, 0, 0)", this.threesixty.stop(!0), this.threesixty = null, document.removeEventListener("wheel", this.wheelScaleHandler), document.removeEventListener("mousemove", this.dragScaleHandler), document.body.classList.remove("hide", "finish"), void setTimeout(function(e) {
                    document.body.classList.remove("slider-360-is-open", "show-close-btn"), t.isSliderOpen = !1, t.isCloseOpenProcess = !1
                }, 500)))
            }
        }, {
            key: "prepareAnimation",
            value: function() {
                var t = this;
                this.prependScrollAnim(), this.prependLabelAnimation(), this.prependPriceAnimation(), this.prependImageAnim(), this.scroll = Helpers.getScrollPos(), window.addEventListener("resize", Helpers.debounce(function(e) {
                    t.unFixPrice(), t.unFixLabel(), t.prependScrollAnim(), t.prependLabelAnimation(), t.prependPriceAnimation(), t.prependImageAnim(), t.fixPrice(), t.fixLabel()
                }, 200))
            }
        }, {
            key: "startAnimation",
            value: function() {
                var t = this;
                this.animDuration = 1e3, this.animTimer = 0, this.ease = Helpers.getEaseFunction("easeInOutQuart"), this.wheelCounter = 0, this.id = this.getId(), window.addEventListener("scroll", this.throttle(function(e) {
                    t.scroll = window.pageYOffset
                }, 200));
                var i = this;
                requestAnimationFrame(function e() {
                    requestAnimationFrame(e), i.tick()
                })
            }
        }, {
            key: "throttle",
            value: function(e, t) {
                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this,
                    n = null,
                    r = null,
                    s = function() {
                        e.apply(i, r), n = null
                    };
                return function() {
                    n || (r = arguments, n = setTimeout(s, t))
                }
            }
        }, {
            key: "getScrollDelta",
            value: function() {
                var e = window.pageYOffset || document.documentElement.scrollTop,
                    t = e - this.prevY;
                return this.prevY = e, t
            }
        }, {
            key: "getId",
            value: function() {
                return "Offers-" + Date.now() + 99 * Math.random()
            }
        }, {
            key: "prependImageAnim",
            value: function() {
                this.imageTimer = 0, this.imageSpeed = 2e3, this.imageDirection = !1, this.isImageAnimating = !0
            }
        }, {
            key: "prependScrollAnim",
            value: function() {
                this.animInProgress = !1, this.scrollThreshold = 0, this.scrollAnimationStart = 0, this.scrollAnimationEnd = this.offersBottomHeight, this.scrollLabelHeight = this.label.offsetHeight, this.scrollAnimFactor = 1.3
            }
        }, {
            key: "prependLabelAnimation",
            value: function() {
                this.labelText = this.label.querySelector("span:last-child");
                var e = document.querySelector(".l-offers__info");
                this.labelFirstPoint = this.scrollAnimationEnd * this.scrollAnimFactor, this.labelLastPoint = Helpers.getOffset(e).top + Helpers.getHeight(e), this.labelHeight = this.label.offsetHeight, this.labelOffsetTop = parseFloat(getComputedStyle(this.label).top);
                var t = document.querySelector(".offers-s02>*:last-child");
                this.labelFixPoint = Helpers.getOffset(t).top + parseFloat(getComputedStyle(t).height), this.labelEase = BezierEasing(0, .75, .85, .25)
            }
        }, {
            key: "prependPriceAnimation",
            value: function() {
                this.priceElement = document.querySelector(".offers__floating-price");
                var e = this.priceElement.querySelector(".floating-price__bottom"),
                    t = e ? e.offsetHeight : 0,
                    i = Helpers.getOffset(this.priceElement);
                this.priceOffsetTop = i.top, this.priceHeight = Helpers.getHeight(this.priceElement), this.priceMarginTop = parseFloat(getComputedStyle(this.priceElement).marginTop), this.priceFixPosition = {
                    top: window.innerHeight / 2 - this.priceMarginTop - this.priceHeight / 2,
                    left: i.left,
                    width: this.priceElement.offsetWidth,
                    minWidth: this.priceElement.style.minWidth
                }, this.priceTransformOffset = this.scrollAnimationEnd, this.priceTopFixPoint = this.priceOffsetTop, this.priceFixPoint = this.labelFixPoint - this.priceOffsetTop - (this.priceHeight + t) + this.priceMarginTop, this.priceMidOffset = this.priceOffsetTop - window.innerHeight / 2, this.priceLeftOffset = i.left, this.priceFixParams = {
                    priceOffsetTop: i.top,
                    priceOffsetBottom: this.label.offsetTop + this.label.offsetHeight,
                    labelOffset: (window.innerHeight - this.priceElement.offsetHeight - t) / 2
                }
            }
        }, {
            key: "tick",
            value: function(e) {
                this.animateLabel(), this.fixLabel(), this.fixPrice(), this.animateElements()
            }
        }, {
            key: "animateLabel",
            value: function() {
                if (this.labelPrevScrollOffset === window.pageYOffset) return !1;
                if (window.pageYOffset > this.labelLastPoint) return !1;
                var e = Math.min((window.pageYOffset - this.labelFirstPoint + (window.innerHeight / 2 + this.labelHeight / 2)) / (this.labelLastPoint - this.labelFirstPoint), 1),
                    t = Math.max(Math.min(.5, .5 * (1 - this.labelEase(e))), 0);
                this.labelText.style.opacity = t, this.labelPrevScrollOffset = window.pageYOffset
            }
        }, {
            key: "fixLabel",
            value: function() {
                if (window.pageYOffset < this.labelFirstPoint) return !1;
                var e = window.pageYOffset + this.labelHeight + this.labelOffsetTop > this.labelFixPoint,
                    t = "fixed" === getComputedStyle(this.label).position;
                e && t ? (this.label.style.position = "absolute", this.label.style.top = this.labelFixPoint - this.labelHeight + "px") : e || (this.label.style.position = "fixed", this.label.style.top = this.labelOffsetTop + "px")
            }
        }, {
            key: "unFixLabel",
            value: function() {
                this.label.style.position = "fixed", this.label.style.top = this.labelOffsetTop + "px"
            }
        }, {
            key: "fixPrice",
            value: function() {
                var e = window.pageYOffset + this.priceFixParams.labelOffset < this.priceFixParams.priceOffsetTop,
                    t = this.priceElement.querySelector(".floating-price__bottom"),
                    i = t ? t.offsetHeight : 0,
                    n = this.labelFixPoint < window.pageYOffset + this.priceFixParams.labelOffset + this.priceElement.offsetHeight + i,
                    r = Helpers.getOffset(this.priceElement);
                if (e) {
                    if ("top" === this.prevFixPriceState) return !1;
                    this.priceElement.classList.remove("show-bottom"), this.priceElement.style.position = "", this.priceElement.style.top = "", this.priceElement.style.left = "", this.priceElement.style.width = "auto", this.priceElement.style.transform = "translateY(0px)", this.priceFixPosition.width = this.priceElement.offsetWidth, this.priceFixPosition.left = r.left, this.offersBottom.style.height = "auto"
                } else if (n) {
                    if ("bottom" === this.prevFixPriceState) return !1;
                    this.priceElement.classList.add("show-bottom"), this.priceElement.style.position = "relative", this.priceElement.style.top = "auto", this.priceElement.style.left = "auto", this.priceElement.style.transform = "translateY(" + this.priceFixPoint + "px)", this.priceFixPosition.width = this.priceElement.offsetWidth, this.priceFixPosition.left = r.left, this.offersBottom.style.height = this.priceElement.offsetHeight + "px"
                } else {
                    if ("fix" === this.prevFixPriceState) return !1;
                    this.priceElement.classList.add("show-bottom"), this.priceElement.style.position = "fixed", this.priceElement.style.top = this.priceFixParams.labelOffset + "px", this.priceElement.style.left = this.priceFixPosition.left + "px", this.priceElement.style.width = this.priceFixPosition.width + "px", this.priceElement.style.transform = "translateY(0px)", this.offersBottom.style.height = this.priceElement.offsetHeight + "px"
                }
                this.prevFixPriceState = e ? "top" : n ? "bottom" : "fix"
            }
        }, {
            key: "unFixPrice",
            value: function() {
                this.priceElement.removeAttribute("style"), this.prevFixPriceState = null
            }
        }, {
            key: "animateElements",
            value: function() {
                var t = this,
                    e = Math.abs(this.scroll - this.position);
                if (e < this.speed || this.scroll > this.scrollAnimationEnd || this.scroll < this.scrollAnimationStart) return !1;
                var i = this.speed * (e / 100);
                this.position += this.scroll > this.position ? i : -1 * i, this.els.forEach(function(e) {
                    t.setTransform(e), t.setOpacity(e)
                })
            }
        }, {
            key: "setOpacity",
            value: function(e) {
                var t = this.scroll / this.scrollAnimationEnd;
                if (void 0 === e.dataset.opacity) return !1;
                Number(e.dataset.opacity) || 0 ? e.style.opacity = 1 - t : (0 < this.scroll && (e.style.opacity = 0), 0 == this.scroll && (e.style.opacity = 1))
            }
        }, {
            key: "setTransform",
            value: function(e) {
                if (!e.dataset.move) return !1;
                e.style.setProperty("transform", "translateY(" + e.dataset.move * this.position + "px)")
            }
        }, {
            key: "scrollOff",
            value: function() {
                window.addEventListener("wheel", this.disableScroll), document.documentElement.style.paddingRight = window.innerWidth - document.body.offsetWidth + "px", document.documentElement.style.overflow = "hidden", document.body.style.overflow = "hidden"
            }
        }, {
            key: "scrollOn",
            value: function() {
                window.removeEventListener("wheel", this.disableScroll), document.documentElement.style.overflow = "auto", document.body.style.overflow = "auto", document.documentElement.style.paddingRight = "0"
            }
        }, {
            key: "initNdsAnimation",
            value: function() {
                var t = this;
                if (this.isNdsShowing = !1, !this.ndsButton) return !1;
                this.ndsButton.checked && (this.showNds(), setTimeout(function(e) {
                    t.unFixPrice(), t.unFixLabel(), t.prependScrollAnim(), t.prependLabelAnimation(), t.prependPriceAnimation(), t.prependImageAnim(), t.fixPrice(), t.fixLabel()
                }, 1500)), this.ndsButton.addEventListener("click", function(e) {
                    t.isNdsShowing ? t.hideNds() : t.showNds(), setTimeout(function(e) {
                        t.unFixPrice(), t.unFixLabel(), t.prependScrollAnim(), t.prependLabelAnimation(), t.prependPriceAnimation(), t.prependImageAnim(), t.fixPrice(), t.fixLabel()
                    }, 1500)
                })
            }
        }, {
            key: "showNds",
            value: function() {
                this.isNdsShowing = !0;
                var e = +this.totalPrice,
                    t = e / (Helpers.getNdsPercentage() + 100) * Helpers.getNdsPercentage(),
                    i = Math.floor(e - t),
                    n = [accounting.formatNumber(e, 0, " ") + ".т", accounting.formatNumber(i, 0, " ") + ".т"];
                "s1" !== window.siteId && (n = ["тЌ" + accounting.formatNumber(e, 0, " "), "тЌ" + accounting.formatNumber(i, 0, " ")]);
                var r = window.language.ndsText;
                new TextSlider({
                    HTMLnode: this.totalPriceHTMLelement,
                    words: n,
                    letterSpeed: 100,
                    typeSpeed: 30,
                    delay: 0,
                    iterationCount: 1,
                    startImmediately: !0,
                    lettersOrNumbers: !1
                });
                var s = document.querySelector(".js-offer-nds-profit"),
                    o = "+ " + accounting.formatNumber(t, 0, " ") + " " + r;
                new Array(o.length + 1).join("&nbsp;");
                s.innerHTML = o, new TextFadeup(s, {
                    stepsCount: 5,
                    stepsSpeed: 100,
                    lettersOrNumbers: !0
                }), s.classList.add("is-active")
            }
        }, {
            key: "hideNds",
            value: function() {
                this.isNdsShowing = !1;
                var e = +this.totalPrice,
                    t = e - Math.floor(e * Helpers.getNdsPercentage() / 100),
                    i = [accounting.formatNumber(t, 0, " ") + ".т", accounting.formatNumber(e, 0, " ") + ".т"];
                "s1" !== window.siteId && (i = ["тЌ" + accounting.formatNumber(t, 0, " "), "тЌ" + accounting.formatNumber(e, 0, " ")]), new TextSlider({
                    HTMLnode: this.totalPriceHTMLelement,
                    words: i,
                    letterSpeed: 100,
                    typeSpeed: 30,
                    delay: 0,
                    iterationCount: 1,
                    startImmediately: !0,
                    lettersOrNumbers: !1
                });
                var n = document.querySelector(".js-offer-nds-profit"),
                    r = n.innerHTML,
                    s = r.split(" ").map(function(e) {
                        return new Array(e.length + 1).join("&nbsp;")
                    }).join(" ");
                n && (n.innerHTML = s, new TextFadeup(n, {
                    stepsCount: 5,
                    stepsSpeed: 100,
                    lettersOrNumbers: !0,
                    callback: function() {
                        n.classList.remove("is-active")
                    }
                }))
            }
        }, {
            key: "calcFloatPriceWidth",
            value: function() {
                this.priceElement.style.minWidth = this.priceFixPosition.width + "px"
            }
        }, {
            key: "generateDescPDF",
            value: function() {
                var n = this;
                if (!this.descriptionBtn) return !1;
                this.descriptionBtn.addEventListener("click", function(e) {
                    e.preventDefault();
                    var t = n.descriptionBtn.href,
                        i = window.open("about:blank", "_blank");
                    $.ajax({
                        url: t,
                        method: "GET",
                        async: !1,
                        dataType: "json",
                        success: function(e) {
                            e.url && (i.location.href = e.url)
                        }
                    })
                })
            }
        }]), e
    }(),
    ProductCards = function() {
        function n(e, t) {
        }

        return _createClass(n, [{
            key: "addMouseListeners",
        }, {
            key: "clampDescription",
            value: function(e) {
                var t = e.querySelector(".product-card__desc");
                t && window.matchMedia("(max-width: 1099px)").matches && $clamp(t, {
                    clamp: 3
                })
            }
        }]), n
    }();

! function(e, t) {
    [].concat(_toConsumableArray(t.querySelectorAll("[data-mouse-tracking]"))).forEach(function(l) {
        l.addEventListener("mousemove", function(e) {
            var t = l.getBoundingClientRect(),
                i = e.clientX - t.left,
                n = e.clientY - t.top,
                r = l.offsetWidth / 2,
                s = l.offsetHeight / 2,
                o = -1 * ((i - r) / r) * 5,
                a = 5 * ((n - s) / s);
            l.style.setProperty("--rotateY", o + "deg"), l.style.setProperty("--rotateX", a + "deg")
        })
    })
}(window, document);
var ToggleButton = function() {
    function n(e, t) {
        var i = this;
        if (_classCallCheck(this, n), !e) return !1;
        this.cont = t, this.btn = e, this.state = !1, this.transition = getComputedStyle(this.cont).transitionDuration, this.delay = parseFloat(this.transition) * (this.transition.indexOf("ms") ? 1 : 1e3), this.init(), this.cont.style.height = this.startHeight + "px", e.addEventListener("click", function(e) {
            e.preventDefault(), i.toggleHeight()
        }), window.addEventListener("resize", Helpers.debounce(function(e) {
            var t = !i.state;
            t && (i.transitionOff(), i.open(!0)), requestAnimationFrame(function() {
                i.init(), t && (i.close(), i.transitionOn())
            })
        }, 500))
    }
    return _createClass(n, [{
        key: "init",
        value: function() {
            this.fullHeight = this.cont.offsetHeight, this.startHeight = this.getHeight1()
        }
    }, {
        key: "toggleHeight",
        value: function() {
            this.state ? this.close() : this.open()
        }
    }, {
        key: "open",
        value: function(e) {
            this.cont.classList.add("is-open"), this.btn.classList.add("is-toggle"), this.cont.style.height = e ? "auto" : this.fullHeight + "px", this.state = !0
        }
    }, {
        key: "close",
        value: function() {
            this.cont.classList.remove("is-open"), this.btn.classList.remove("is-toggle"), this.cont.style.height = this.startHeight + "px", this.state = !1
        }
    }, {
        key: "getHeight1",
        value: function() {
            return this.getHeight(".l-offers__col:first-child .l-offers__param:not(.js-offer-tog)")
        }
    }, {
        key: "getHeight",
        value: function(e) {
            return [].slice.call(this.cont.querySelectorAll(e)).map(function(e) {
                return e.offsetHeight + parseFloat(getComputedStyle(e).marginBottom)
            }).reduce(function(e, t) {
                return e + t
            }, 0)
        }
    }, {
        key: "transitionOff",
        value: function() {
            this.cont.style.setProperty("transition-duration", "0s")
        }
    }, {
        key: "transitionOn",
        value: function() {
            this.cont.style.setProperty("transition-duration", this.transition)
        }
    }]), n
}();
! function(u, m) {
    var a;

    function l() {
        var e = m.querySelectorAll(".career-s05__row");
        new CardsRotate(e, 200)
    }

    function c() {
        var e = document.body,
            t = document.querySelector("footer");
        if (!t) return !1;
        var i = t.offsetHeight;
        e.style.paddingBottom = i + "px"
    }
    u.renderer = new Renderer, m.addEventListener("DOMContentLoaded", function(e) {
        var t, i, n;
        window.language = {
                ru: {
                    currency: ".т",
                    currencyPos: "right",
                    ndsText: "аааЁ",
                    configurator: {
                        maxRam: "аНаЕ аБаОаЛаЕаЕ",
                        GB: "аа",
                        choose: "абаБбаАбб",
                        ramError: "баОаЛбаКаО баЕбаНаОаЕ аКаОаЛ-аВаО"
                    },
                    send: "абаПбаАаВаИбб",
                    continue: "абаОаДаОаЛаЖаИбб",
                    configureFilters: "ааАбббаОаИбб&nbsp;баИаЛбббб",
                    choosed: "абаБбаАаНаО",
                    warranty: {
                        title: "ааАбаАаНбаИб",
                        value: "5 аЛаЕб аГаАбаАаНбаИаИ"
                    }
                },
                en: {
                    currency: "тЌ",
                    currencyPos: "left",
                    ndsText: "VAT",
                    configurator: {
                        maxRam: "no more than",
                        GB: "GB",
                        choose: "Choose",
                        ramError: "only twin numbers"
                    },
                    send: "Send",
                    continue: "Continue",
                    configureFilters: "Configure&nbsp;filters",
                    choosed: "Choosed",
                    warranty: {
                        title: "Warranty",
                        value: "5 years"
                    }
                },
                de: {
                    currency: "тЌ",
                    currencyPos: "left",
                    ndsText: "MWS",
                    configurator: {
                        maxRam: "nicht mehr als",
                        GB: "GB",
                        choose: "WУЄhlen Sie aus",
                        ramError: "nur Zwillingszahlen"
                    },
                    send: "Zu senden",
                    continue: "Fortsetzen",
                    configureFilters: "Konfigurieren&nbsp;Sie&nbsp;Filter",
                    choosed: "AusgewУЄhlt",
                    warranty: {
                        title: "Garantie",
                        value: "5 Jahre"
                    }
                }
            } [Helpers.getLang()], m.body.classList.add("is-document-ready"),
            function() {
                var e, t = $("#mpS01lCounter"),
                    n = $("#mpS01lMinute"),
                    r = $("#mpS01lHour"),
                    s = $("#mpS01lDay"),
                    o = $("#mpS01lnameMinute"),
                    a = $("#mpS01lnameHour"),
                    l = $("#mpS01lnameDay");
                if (!t.length) return;
                e = t.data("date").split(",");
                var c = function(e, t) {
                    var i = [2, 0, 1, 1, 1, 2];
                    return 4 < e % 100 && e % 100 < 20 ? t[2] : e % 10 < 5 ? t[i[e % 10]] : t[i[5]]
                };
                t.countdown({
                    timestamp: new Date(e[0], e[1] - 1, e[2]),
                    callback: function(e, t, i) {
                        n.text(i), r.text(t), s.text(e), a.text(c(t, ["аЇаАб", "аЇаАбаА", "аЇаАбаОаВ"])), o.text(c(i, ["ааИаНббаА", "ааИаНббб", "ааИаНбб"])), l.text(c(e, ["ааЕаНб", "ааНб", "ааНаЕаЙ"]))
                    }
                })
            }(),
            function() {
                var e = m.querySelector(".service .services"),
                    t = m.querySelector(".service .main-services"),
                    i = !0;
                if (!e || !t) return;
                var n = t.children.length - e.offsetWidth / t.offsetWidth,
                    r = u.matchMedia(media.desktop).matches ? 400 : 200;
                new Siema({
                    selector: t,
                    duration: r,
                    easing: "ease-out",
                    perPage: 1,
                    startIndex: 0,
                    draggable: !0,
                    threshold: 20,
                    loop: !1,
                    onInit: function() {
                        t.classList.add("is-slider-init")
                    },
                    onChange: function() {
                        this.currentSlide > n && this.goTo(n), 4 < this.currentSlide && i && ("why-we" == e.parentElement.id && (dataLayer.push({
                            event: "for_it_scroll"
                        }), i = !1), "retail-advantages" == e.parentElement.id && (dataLayer.push({
                            event: "for_tn_scroll"
                        }), i = !1))
                    }
                });
                [].concat(_toConsumableArray(m.querySelectorAll(".service .services"))).forEach(function(i) {
                    var e = new IntersectionObserver(function(e, t) {
                        e.forEach(function(e) {
                            0 === e.intersectionRatio && i.classList.remove("is-visible"), 1 === e.intersectionRatio && i.classList.add("is-visible")
                        })
                    }, {
                        threshold: [0, 1]
                    });
                    e.observe(i)
                })
            }(),
            function() {
                var e = m.querySelector(".waranty__carousel");
                if (!e) return;
                var t = m.querySelector(".waranty .waranty__carousel__slider"),
                    i = m.querySelector(".waranty .waranty__carousel__nav").children[0],
                    n = m.querySelector(".waranty .waranty__carousel__nav").children[1],
                    r = m.querySelector(".waranty .waranty__carousel__nav").children[2];
                if (!(t || i || n || r)) return;
                var s = t.children.length - e.offsetWidth / t.offsetWidth,
                    o = t.children.length,
                    a = new Siema({
                        selector: t,
                        duration: 200,
                        easing: "ease-in",
                        perPage: 1,
                        startIndex: 1,
                        draggable: 1,
                        threshold: 20,
                        loop: 1,
                        onInit: function() {
                            t.classList.add("is-slider-init"), n.innerHTML = Math.ceil(this.currentSlide) + 1 + "/" + o, c(this)
                        },
                        onChange: function() {
                            n.innerHTML = Math.ceil(this.currentSlide) + 1 + "/" + o, this.currentSlide > s && this.goTo(s), c(this)
                        }
                    }),
                    l = u.matchMedia(media.desktop).matches ? "click" : "touchstart";

                function c(i) {
                    i.innerElements.forEach(function(e, t) {
                        e.classList.remove("is-active", "is-before-active", "is-after-active"), i.currentSlide > t && e.classList.add("is-before-active")
                    }), i.innerElements[Math.floor(i.currentSlide)].classList.add("is-active")
                }
                i.addEventListener(l, function(e) {
                    e.preventDefault(), a.prev()
                }), r.addEventListener(l, function(e) {
                    e.preventDefault(), a.next()
                })
            }(),
            function() {
                var e = m.querySelector(".consultation__slider"),
                    n = m.querySelector(".consultation__dots");
                if (!e || !n) return;
                [].forEach.call(e.children, function(e, t) {
                    var i = m.createElement("SPAN");
                    0 === t && i.classList.add("is-active"), n.appendChild(i)
                });
                var r = new Siema({
                        selector: e,
                        duration: 200,
                        easing: "ease-out",
                        perPage: 1,
                        startIndex: 0,
                        draggable: !0,
                        threshold: 20,
                        loop: !1,
                        onInit: function() {},
                        onChange: function() {
                            [].forEach.call(n.children, function(e) {
                                e.classList.remove("is-active")
                            }), n.children[this.currentSlide].classList.add("is-active")
                        }
                    }),
                    s = u.matchMedia("(max-width: 900px)").matches ? "touchstart" : "click";
                [].forEach.call(n.children, function(t, i) {
                    t.addEventListener(s, function(e) {
                        [].forEach.call(n.children, function(e) {
                            e.classList.remove("is-active")
                        }), r.goTo(i), t.classList.add("is-active")
                    })
                })
            }(),
            function() {
                var e = m.querySelector(".latest-slider"),
                    t = m.querySelector(".latest-slider__wrapper"),
                    n = !1,
                    i = document.querySelector(".latest-slider__controls--prev"),
                    r = document.querySelector(".latest-slider__controls--next");
                if (!(t || i || r || e || s || a || o)) return;
                var s = m.querySelector(".latest-slider .products-nav").children[0],
                    o = m.querySelector(".latest-slider .products-nav").children[1],
                    a = m.querySelector(".latest-slider .products-nav").children[2],
                    l = (t.children.length, e.offsetWidth, t.offsetWidth, new Siema({
                        selector: t,
                        duration: 250,
                        easing: "ease-out",
                        perPage: {
                            600: 2,
                            900: 3,
                            1100: 4,
                            1600: 6
                        },
                        startIndex: 0,
                        draggable: !0,
                        threshold: 20,
                        loop: !1,
                        multipleDrag: !0,
                        onInit: function() {
                            var e = this;
                            t.classList.add("is-slider-init"), this.prevCurrentSlide = this.currentSlide, c(this), document.querySelector(".latest-slider__controls--next").addEventListener("click", function() {
                                e.goTo(e.prevCurrentSlide + e.perPage)
                            }), document.querySelector(".latest-slider__controls--prev").addEventListener("click", function() {
                                e.goTo(e.prevCurrentSlide - e.perPage)
                            }), u(this), o.innerHTML = this.currentSlide + 1 + "/" + this.innerElements.length, Math.ceil(this.innerElements.length / this.perPage) <= 1 && (i.style.display = "none", r.style.display = "none", this.config.draggable = !1, this.navIsHided = !0)
                        },
                        onChange: function() {
                            if (!n) {
                                var e = this.currentSlide - this.prevCurrentSlide;
                                0 < e ? this.goTo(this.prevCurrentSlide + this.perPage) : this.goTo(this.prevCurrentSlide - this.perPage), this.prevCurrentSlide = this.currentSlide
                            }
                            u(this), c(this), this.navIsHided || (0 < this.currentSlide && (i.style.display = "flex"), 0 == this.currentSlide && (i.style.display = "none"), this.prevCurrentSlide + this.perPage >= this.innerElements.length ? r.style.display = "none" : r.style.display = "flex"), o.innerHTML = this.currentSlide + 1 + "/" + this.innerElements.length
                        }
                    }));
                s.addEventListener("touchstart", function(e) {
                    e.preventDefault(), l.prev()
                }), a.addEventListener("touchstart", function(e) {
                    e.preventDefault(), l.next()
                }), Siema.prototype.addPagination = function() {
                    for (var i = this, e = function(e) {
                            var t = document.createElement("div");
                            t.classList.add("latest-slider__pagination-dot"), t.addEventListener("click", function() {
                                n = !0, i.goTo(e * i.perPage), c(l), n = !1
                            }), i.selector.parentElement.querySelector(".latest-slider__pagination").appendChild(t), 0 == e && t.classList.add("is-active")
                        }, t = 0; t < Math.ceil(this.innerElements.length / this.perPage); t++) e(t)
                }, Math.ceil(l.innerElements.length / l.perPage) <= 1 || l.addPagination();

                function c(i) {
                    i.innerElements.forEach(function(e, t) {
                        e.parentElement.classList.remove("is-next", "is-prev"), t >= i.currentSlide + i.perPage && e.parentElement.classList.add("is-next"), t < i.currentSlide && e.parentElement.classList.add("is-prev")
                    })
                }

                function u(i) {
                    i.currentPage = Math.ceil(i.currentSlide / i.perPage), document.querySelectorAll(".latest-slider__pagination-dot").forEach(function(e, t) {
                        e.classList.remove("is-active"), i.currentPage == t && e.classList.add("is-active")
                    })
                }
                window.addEventListener("resize", function(e) {
                    c(l)
                }), h = !1, f = !1, $(".latest-slider__wrapper").on({
                    mousemove: function(e) {
                        f && (h = !0), h && $(this).find("a").css({
                            "pointer-events": "none"
                        })
                    },
                    mousedown: function(e) {
                        e.preventDefault(), d = setTimeout(function() {
                            f = !0
                        }, 100)
                    },
                    mouseup: function(e) {
                        clearTimeout(d), h = f = !1, $(this).find("a").removeAttr("style")
                    }
                });
                var d, h, f
            }(),
            function() {
                var e = [].concat(_toConsumableArray(document.querySelectorAll(".latest-slider-card")));
                if (e.length <= 0) return;
                e.forEach(function(e) {
                    var t = 0;
                    window.matchMedia(media.desktop).matches && (e.addEventListener("mouseenter", function() {
                        e.querySelector(".latest-slider-card__middle") && (t = (e.querySelector(".latest-slider-card__middle").offsetHeight + parseFloat(getComputedStyle(e.querySelector(".latest-slider-card__middle")).marginBottom)) / 2), e.querySelector(".latest-slider-card__wrapper").style.marginTop = -Math.abs(t) + "px", e.querySelector(".latest-slider-card__wrapper").style.marginBottom = -Math.abs(t) + "px"
                    }), e.addEventListener("mouseleave", function() {
                        e.querySelector(".latest-slider-card__wrapper").style.marginTop = 0, e.querySelector(".latest-slider-card__wrapper").style.marginBottom = 0
                    })), e.querySelector(".product-card__button") && new BuyButton(e.querySelector(".product-card__button"))
                })
            }(), new Modal({
                selector: "[data-modal]"
            }), new Modal({
                selector: "[data-config-modal]",
                callback: function() {
                    a._updateHiddenInputs()
                }
            }), new FormsValidation(".js-form"),
            function() {
                var e = m.querySelector(".js-small-cart");
                if (!e) return;
                window.smallCart = new SmallCart(e)
            }(), t = [].slice.call(m.querySelectorAll(".js-text-fadeup")), i = [].slice.call(m.querySelectorAll(".js-glitch-texts")), n = [].slice.call(m.querySelectorAll(".js-section-fadeup")), t.forEach(function(e) {
                new TextFadeup(e)
            }), i.forEach(function(e) {
                new TextGlitch(e)
            }), n.forEach(function(e) {
                [].slice.call(e.querySelectorAll(".js-section-text-fadeup"));
                var t = [].slice.call(e.querySelectorAll(".js-section-glitch-texts"));
                t.forEach(function(e) {
                    new TextGlitch(e)
                })
            }),
            function() {
                var e = m.querySelector(".js-text-slider");
                if (!e) return;
                new TextSlider({
                    HTMLnode: e,
                    words: ["ааОбббаАаНаОаВаЛаЕаНаНаОаЕ", "Refurbished"],
                    letterSpeed: 10,
                    typeSpeed: 30,
                    delay: 2e3,
                    iterationCount: !1,
                    startImmediately: !1,
                    lettersOrNumbers: !0
                })
            }(), [].concat(_toConsumableArray(document.querySelectorAll(".tooltip"))).forEach(function(e) {
                new Tooltip(e)
            }),
            function() {
                var e = m.querySelector(".js-filter");
                if (!e) return;
                new Filter(e, {
                    additionalParams: ".js-additional-params",
                    additionalToggle: ".js-additional-toggle"
                })
            }(), new Maps, [].slice.call(document.querySelectorAll(".js-multisteps-form")).forEach(function(e) {
                new MultistepsForm(e)
            }),
            function() {
                if (window.chrome) {
                    var e = ["font-size:1px;line-height:36px;height:36px;width:118px;padding: 16.2px 59px;background-size:118px 36px;background-repeat:no-repeat;background-image: url(data:image/gif;base64,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)"].join(" ");
                    console.log("%c", e), console.log(atob("aHR0cDovL2JyYWluZC5hZ2VuY3kv"))
                }
            }(), new ScrollAnchor,
            function() {
                var e = [].concat(_toConsumableArray(document.querySelectorAll(".js-custom-select:not([data-select-inited])")));
                if (e.length <= 0) return;
                if (!$) return;
                e.forEach(function(e) {
                    $(e).SumoSelect({
                        captionFormat: "абаБбаАаНаО: {0}",
                        captionFormatAllSelected: "абаБбаАаНаО: {0}"
                    }), e.setAttribute("data-select-inited", !0)
                })
            }(),
            function() {
                if (!document.querySelector(".js-pan")) return;
                [].concat(_toConsumableArray(document.querySelectorAll(".js-pan"))).forEach(function(e) {
                    e.addEventListener("click", function() {
                        e.classList.contains("is-inactive") && e.classList.remove("is-inactive")
                    })
                })
            }(),
            function() {
                var n = document.querySelector(".js-career-filter");
                if (!n) return;
                var r = n.querySelector(".js-career-filter-form"),
                    e = r.querySelectorAll(".js-custom-select");
                $(e).on("change", function(e) {
                    r.dispatchEvent(new Event("submit"))
                }), r.addEventListener("submit", function(e) {
                    var t = r.getAttribute("action"),
                        i = $(r).serializeArray();
                    $.ajax({
                        url: t + "?ajax=Y",
                        data: i,
                        method: "POST",
                        type: "POST",
                        dataType: "html",
                        success: function(e) {
                            n.querySelector(".career-s05__main").innerHTML = e, l()
                        }
                    })
                })
            }(),
            function() {
                var e = m.querySelector(".float-action");
                if (!e) return;
                new FloatAction(e)
            }()
    }), u.addEventListener("load", function(e) {
        var t, i, n, r, s, o;
        Helpers.setCaptchaId(), Helpers.sessidInputs(), [].concat(_toConsumableArray(document.querySelectorAll(".js-toggle-nds"))).forEach(function(e) {
                e.addEventListener("change", function() {
                    dataLayer.push({
                        event: "nds"
                    })
                })
            }), [].concat(_toConsumableArray(document.querySelectorAll('a[href="/catalog/servers/"]'))).forEach(function(e) {
                e.addEventListener("click", function() {
                    dataLayer.push({
                        event: "button_1"
                    })
                })
            }), [].concat(_toConsumableArray(document.querySelectorAll('a[href="/catalog/storage-systems/"]'))).forEach(function(e) {
                e.addEventListener("click", function() {
                    dataLayer.push({
                        event: "button_2"
                    })
                })
            }), [].concat(_toConsumableArray(document.querySelectorAll('a[href="/config/"]'))).forEach(function(e) {
                e.addEventListener("click", function() {
                    dataLayer.push({
                        event: "config"
                    })
                })
            }), [].concat(_toConsumableArray(document.querySelectorAll('a[href*="/catalog/"]'))).forEach(function(e) {
                null !== e.closest(".product-card") && e.addEventListener("click", function() {
                    dataLayer.push({
                        event: "product_card"
                    })
                })
            }), [].concat(_toConsumableArray(document.querySelectorAll('a[href*="/include/modals/buy_one_click.php"]'))).forEach(function(e) {
                e.addEventListener("click", function() {
                    dataLayer.push({
                        event: "fast_open"
                    })
                })
            }), [].concat(_toConsumableArray(document.querySelectorAll(".js-offers-params-toggle"))).forEach(function(e) {
                e.addEventListener("click", function() {
                    dataLayer.push({
                        event: "more"
                    })
                })
            }), [].concat(_toConsumableArray(document.querySelectorAll("a[href^='tel:']"))).forEach(function(e) {
                e.addEventListener("click", function() {
                    dataLayer.push({
                        event: "tell"
                    })
                })
            }), [].concat(_toConsumableArray(document.querySelectorAll(".l-filter__button"))).forEach(function(e) {
                e.addEventListener("click", function() {
                    dataLayer.push({
                        event: "filtr_click"
                    })
                })
            }), t = m.querySelectorAll(".product-card:not(.product-card--link)"), i = m.querySelector(".js-toggle-nds"), new ProductCards(t, i),
            function() {
                var e = m.querySelector(".configurator");
                if (!e) return;
                a = new Configurator({
                    HTMLroot: e
                })
            }(), n = m.querySelector(".js-offers-params-toggle"), r = m.querySelector(".js-offer-toggle"), new ToggleButton(n, r, {
                duration: 500
            }), plyr.setup({
                iconUrl: window.location.origin + "/bitrix/templates/servermall/assets/img/plyr.svg"
            }), new Offers, new Cart, new DetailOrderForm, new Accordions({
                selector: "[data-accordion]"
            }),
            function() {
                if ($) {
                    var e = $(".js-catalog-sort:not([data-select-inited])");
                    e.SumoSelect(), e.attr("data-select-inited", !0)
                }
            }(), new LeasingCalc,
            function() {
                var e = m.querySelectorAll(".js-btn-helper");
                if (e.length <= 0) return;
                e.forEach(function(e) {
                    e.querySelector(".js-btn-helper-text") && new TextGlitch(e.querySelector(".js-btn-helper-text"))
                });
                var t = m.querySelector(".scroll-arrow");

                function i() {
                    t ? t.classList.contains("is-clicked") ? e.forEach(function(e) {
                        e.classList.remove("is-start")
                    }) : e.forEach(function(e) {
                        e.classList.add("is-start")
                    }) : 600 <= window.pageYOffset ? e.forEach(function(e) {
                        e.classList.remove("is-start")
                    }) : e.forEach(function(e) {
                        e.classList.add("is-start")
                    })
                }
                setTimeout(function() {
                    i()
                }, 150), window.addEventListener("scroll", function(e) {
                    setTimeout(function() {
                        i()
                    }, 150)
                })
            }(), c(), u.matchMedia("(max-width: 679px)").matches && (! function() {
                var e = m.querySelector(".js-product-slider .products-wrapper");
                if (!e) return;
                var t = m.querySelector(".js-product-slider .products-nav").children[0],
                    i = m.querySelector(".js-product-slider .products-nav").children[1],
                    n = m.querySelector(".js-product-slider .products-nav").children[2];
                if (!(e || t || i || n)) return;
                var r = e.querySelector(".product-ads");
                r && r.remove();
                var s = e.children.length,
                    o = new Siema({
                        selector: e,
                        duration: 200,
                        easing: "ease-out",
                        perPage: 1,
                        startIndex: 0,
                        draggable: !0,
                        threshold: 20,
                        loop: !1,
                        onInit: function() {
                            i.innerHTML = this.currentSlide + 1 + "/" + s
                        },
                        onChange: function() {
                            i.innerHTML = this.currentSlide + 1 + "/" + s
                        }
                    });
                t.addEventListener("touchstart", function(e) {
                    e.preventDefault(), o.prev()
                }), n.addEventListener("touchstart", function(e) {
                    e.preventDefault(), o.next()
                })
            }(), new Accordions({
                selector: "[data-mobile-accordion]"
            })), u.matchMedia("(min-width: 1100px)").matches && (! function() {
                var e = m.querySelector(".scroll-arrow"),
                    t = m.querySelector("header"),
                    i = m.querySelector(".js-arrow-down-end");
                if (!e || !t || !i) return;
                new ArrowDown(e, t, i)
            }(), o = m.querySelectorAll(".product-card:not(.product-card--link)"), new CardsRotate(o), s = m.querySelectorAll(".blog-list__item"), new CardsRotate(s, 200), [].slice.call(m.querySelectorAll(".js-full-screen-blocks")).forEach(function(e) {
                new FullScreenBlock(e)
            }), [].slice.call(m.querySelectorAll(".catalog-s02 h1 a")).forEach(function(t) {
                t.addEventListener("mouseenter", function(e) {
                    t.TextGlitch = null, t.TextGlitch = new TextGlitch(t, {
                        rhythm: [100, -100, 250, -250, 100, -100, 100, -100, 100, -1e3]
                    })
                }), t.addEventListener("mouseleave", function(e) {
                    t.TextGlitch && t.TextGlitch.remove(), t.TextGlitch = null
                })
            }), function() {
                var i = m.querySelector(".js-catalog-bottom");
                if (!i) return;
                new IntersectionObserver(function(e, t) {
                    e[0].isIntersecting && (i.classList.add("is-animated"), t.disconnect())
                }, {
                    rootMargin: "0px",
                    threshold: .5
                }).observe(i)
            }(), [].slice.call(m.querySelectorAll(".js-parallax")).forEach(function(e) {
                new Parallax(e)
            }), l()), u.matchMedia("(max-width: 1200px)").matches && [].slice.call(document.querySelectorAll(".js-mobile-slider")).forEach(function(e) {
                new MobileSlider(e)
            }), u.matchMedia("(min-width: 1100px)").matches && m.querySelector(".blog__nav") && $(".blog__nav").stick_in_parent(), [].concat(_toConsumableArray(m.querySelectorAll(".scroll-arrow, .feedback-flow__toggle, .socials__toggle, .navigation__feedback"))).forEach(function(e) {
                e.addEventListener("mouseenter", function(e) {
                    m.body.classList.remove("btns-anim")
                }), e.addEventListener("mouseleave", function(e) {
                    m.body.classList.add("btns-anim")
                })
            })
    }), window.addEventListener("resize", Helpers.debounce(function(e) {
        c()
    }, 200))
}(window, document);























$('a.goto, .navbar .nav a').smoothScroll({speed: 1200});

var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/player_api';

var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
		playerDefaults = {
			autoplay: 1,
			loop: 1,
			autohide: 1,
			modestbranding: 1,
			rel: 0,
			showinfo: 0,
			controls: 0,
			enablejsapi: 1,
		};
var vid = [
	{'videoId': 'YWEk1B0Wm6Q', 'startSeconds': 0}
		],
		randomVid = Math.floor(Math.random() * vid.length),
		currVid = randomVid;

$('.hi em:last-of-type').html(vid.length);

function onYouTubePlayerAPIReady(){
	tv = new YT.Player('tv', {
		videoId: 'YWEk1B0Wm6Q',
		height: $('.video-foreground').height,
		width: "100%",
		events: {'onReady': onPlayerReady, onStateChange: handleStateChange},
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			'autohide': 1, // 0,1,2
			'autoplay': 1, // 0,1
			'controls': 0, // 0,1,2
			'disablekb': 0, //0,1
			'enablejsapi': 1, // 0,1
			'fs': 1, // 0,1
			'iv_load_policy': 1, // 1,3
			'loop': 1, // 0,1
			'modestbranding': 1, // 0,1
			'rel': 0, // 0,1
			'showinfo': 0, // 0,1
		},
	});
}

function handleStateChange(e) {
	if (e.data === YT.PlayerState.ENDED) {
		tv.playVideo();
	}
}

function onPlayerReady() {
	tv.loadVideoById(vid[currVid]);
	tv.mute();
}
