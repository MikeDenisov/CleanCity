if (! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length,
            n = st.type(e);
        return "function" === n || st.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (st.isFunction(t)) return st.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return st.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (pt.test(t)) return st.filter(t, e, n);
            t = st.filter(t, e)
        }
        return st.grep(e, function (e) {
            return st.inArray(e, t) >= 0 !== n
        })
    }

    function i(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function s(e) {
        var t = Et[e] = {};
        return st.each(e.match(wt) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function o() {
        vt.addEventListener ? (vt.removeEventListener("DOMContentLoaded", u, !1), e.removeEventListener("load", u, !1)) : (vt.detachEvent("onreadystatechange", u), e.detachEvent("onload", u))
    }

    function u() {
        (vt.addEventListener || "load" === event.type || "complete" === vt.readyState) && (o(), st.ready())
    }

    function a(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ct, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Nt.test(n) ? st.parseJSON(n) : n
                } catch (i) {}
                st.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function f(e) {
        var t;
        for (t in e)
            if (("data" !== t || !st.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function l(e, t, n, r) {
        if (st.acceptData(e)) {
            var i, s, o = st.expando,
                u = e.nodeType,
                a = u ? st.cache : e,
                f = u ? e[o] : e[o] && o;
            if (f && a[f] && (r || a[f].data) || void 0 !== n || "string" != typeof t) return f || (f = u ? e[o] = J.pop() || st.guid++ : o), a[f] || (a[f] = u ? {} : {
                toJSON: st.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? a[f] = st.extend(a[f], t) : a[f].data = st.extend(a[f].data, t)), s = a[f], r || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[st.camelCase(t)] = n), "string" == typeof t ? (i = s[t], null == i && (i = s[st.camelCase(t)])) : i = s, i
        }
    }

    function c(e, t, n) {
        if (st.acceptData(e)) {
            var r, i, s = e.nodeType,
                o = s ? st.cache : e,
                u = s ? e[st.expando] : st.expando;
            if (o[u]) {
                if (t && (r = n ? o[u] : o[u].data)) {
                    st.isArray(t) ? t = t.concat(st.map(t, st.camelCase)) : t in r ? t = [t] : (t = st.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !f(r) : !st.isEmptyObject(r)) return
                }(n || (delete o[u].data, f(o[u]))) && (s ? st.cleanData([e], !0) : rt.deleteExpando || o != o.window ? delete o[u] : o[u] = null)
            }
        }
    }

    function h() {
        return !0
    }

    function p() {
        return !1
    }

    function d() {
        try {
            return vt.activeElement
        } catch (e) {}
    }

    function v(e) {
        var t = jt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function m(e, t) {
        var n, r, i = 0,
            s = typeof e.getElementsByTagName !== xt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== xt ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [], n = e.childNodes || e; null != (r = n[i]); i++)!t || st.nodeName(r, t) ? s.push(r) : st.merge(s, m(r, t));
        return void 0 === t || t && st.nodeName(e, t) ? st.merge([e], s) : s
    }

    function g(e) {
        Mt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return st.nodeName(e, "table") && st.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== st.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Jt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function E(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) st._data(n, "globalEval", !t || st._data(t[r], "globalEval"))
    }

    function S(e, t) {
        if (1 === t.nodeType && st.hasData(e)) {
            var n, r, i, s = st._data(e),
                o = st._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; i > r; r++) st.event.add(t, n, u[n][r])
            }
            o.data && (o.data = st.extend({}, o.data))
        }
    }

    function x(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !rt.noCloneEvent && t[st.expando]) {
                i = st._data(t);
                for (r in i.events) st.removeEvent(t, r, i.handle);
                t.removeAttribute(st.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), rt.html5Clone && e.innerHTML && !st.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Mt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function T(t, n) {
        var r = st(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : st.css(r[0], "display");
        return r.detach(), i
    }

    function N(e) {
        var t = vt,
            n = en[e];
        return n || (n = T(e, t), "none" !== n && n || (Zt = (Zt || st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Zt[0].contentWindow || Zt[0].contentDocument).document, t.write(), t.close(), n = T(e, t), Zt.detach()), en[e] = n), n
    }

    function C(e, t) {
        return {
            get: function () {
                var n = e();
                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function k(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = dn.length; i--;)
            if (t = dn[i] + n, t in e) return t;
        return r
    }

    function L(e, t) {
        for (var n, r, i, s = [], o = 0, u = e.length; u > o; o++) r = e[o], r.style && (s[o] = st._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && At(r) && (s[o] = st._data(r, "olddisplay", N(r.nodeName)))) : s[o] || (i = At(r), (n && "none" !== n || !i) && st._data(r, "olddisplay", i ? n : st.css(r, "display"))));
        for (o = 0; u > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
        return e
    }

    function A(e, t, n) {
        var r = ln.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function O(e, t, n, r, i) {
        for (var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += st.css(e, n + Lt[s], !0, i)), r ? ("content" === n && (o -= st.css(e, "padding" + Lt[s], !0, i)), "margin" !== n && (o -= st.css(e, "border" + Lt[s] + "Width", !0, i))) : (o += st.css(e, "padding" + Lt[s], !0, i), "padding" !== n && (o += st.css(e, "border" + Lt[s] + "Width", !0, i)));
        return o
    }

    function M(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = rn(e),
            o = rt.boxSizing() && "border-box" === st.css(e, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (i = sn(e, t, s), (0 > i || null == i) && (i = e.style[t]), nn.test(i)) return i;
            r = o && (rt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + O(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function _(e, t, n, r, i) {
        return new _.prototype.init(e, t, n, r, i)
    }

    function D() {
        return setTimeout(function () {
            vn = void 0
        }), vn = st.now()
    }

    function P(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Lt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function H(e, t, n) {
        for (var r, i = (En[t] || []).concat(En["*"]), s = 0, o = i.length; o > s; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function B(e, t, n) {
        var r, i, s, o, u, a, f, l, c = this,
            h = {},
            p = e.style,
            d = e.nodeType && At(e),
            v = st._data(e, "fxshow");
        n.queue || (u = st._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function () {
            u.unqueued || a()
        }), u.unqueued++, c.always(function () {
            c.always(function () {
                u.unqueued--, st.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], f = st.css(e, "display"), l = N(e.nodeName), "none" === f && (f = l), "inline" === f && "none" === st.css(e, "float") && (rt.inlineBlockNeedsLayout && "inline" !== l ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", rt.shrinkWrapBlocks() || c.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], gn.exec(i)) {
                if (delete t[r], s = s || "toggle" === i, i === (d ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    d = !0
                }
                h[r] = v && v[r] || st.style(e, r)
            }
        if (!st.isEmptyObject(h)) {
            v ? "hidden" in v && (d = v.hidden) : v = st._data(e, "fxshow", {}), s && (v.hidden = !d), d ? st(e).show() : c.done(function () {
                st(e).hide()
            }), c.done(function () {
                var t;
                st._removeData(e, "fxshow");
                for (t in h) st.style(e, t, h[t])
            });
            for (r in h) o = H(d ? v[r] : 0, r, c), r in v || (v[r] = o.start, d && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function j(e, t) {
        var n, r, i, s, o;
        for (n in e)
            if (r = st.camelCase(n), i = t[r], s = e[n], st.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = st.cssHooks[r], o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
    }

    function F(e, t, n) {
        var r, i, s = 0,
            o = wn.length,
            u = st.Deferred().always(function () {
                delete a.elem
            }),
            a = function () {
                if (i) return !1;
                for (var t = vn || D(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length; a > o; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), 1 > s && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: st.extend({}, t),
                opts: st.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: vn || D(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = st.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        for (j(l, f.opts.specialEasing); o > s; s++)
            if (r = wn[s].call(f, e, l, f.opts)) return r;
        return st.map(l, H, f), st.isFunction(f.opts.start) && f.opts.start.call(e, f), st.fx.timer(st.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function I(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(wt) || [];
            if (st.isFunction(n))
                for (; r = s[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function q(e, t, n, r) {
        function i(u) {
            var a;
            return s[u] = !0, st.each(e[u] || [], function (e, u) {
                var f = u(t, n, r);
                return "string" != typeof f || o || s[f] ? o ? !(a = f) : void 0 : (t.dataTypes.unshift(f), i(f), !1)
            }), a
        }
        var s = {},
            o = e === Xn;
        return i(t.dataTypes[0]) || !s["*"] && i("*")
    }

    function R(e, t) {
        var n, r, i = st.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && st.extend(!0, e, n), e
    }

    function U(e, t, n) {
        for (var r, i, s, o, u = e.contents, a = e.dataTypes;
            "*" === a[0];) a.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    a.unshift(o);
                    break
                }
        if (a[0] in n) s = a[0];
        else {
            for (o in n) {
                if (!a[0] || e.converters[o + " " + a[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        return s ? (s !== a[0] && a.unshift(s), n[s]) : void 0
    }

    function z(e, t, n, r) {
        var i, s, o, u, a, f = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        for (s = l.shift(); s;)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
                if ("*" === s) s = a;
                else if ("*" !== a && a !== s) {
            if (o = f[a + " " + s] || f["* " + s], !o)
                for (i in f)
                    if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
                        o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: o ? c : "No conversion from " + a + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function W(e, t, n, r) {
        var i;
        if (st.isArray(t)) st.each(t, function (t, i) {
            n || Kn.test(e) ? r(e, i) : W(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== st.type(t)) r(e, t);
        else
            for (i in t) W(e + "[" + i + "]", t[i], n, r)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function V() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function $(e) {
        return st.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var J = [],
        K = J.slice,
        Q = J.concat,
        G = J.push,
        Y = J.indexOf,
        Z = {},
        et = Z.toString,
        tt = Z.hasOwnProperty,
        nt = "".trim,
        rt = {},
        it = "1.11.0",
        st = function (e, t) {
            return new st.fn.init(e, t)
        },
        ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ut = /^-ms-/,
        at = /-([\da-z])/gi,
        ft = function (e, t) {
            return t.toUpperCase()
        };
    st.fn = st.prototype = {
        jquery: it,
        constructor: st,
        selector: "",
        length: 0,
        toArray: function () {
            return K.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : K.call(this)
        },
        pushStack: function (e) {
            var t = st.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return st.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(st.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: J.sort,
        splice: J.splice
    }, st.extend = st.fn.extend = function () {
        var e, t, n, r, i, s, o = arguments[0] || {},
            u = 1,
            a = arguments.length,
            f = !1;
        for ("boolean" == typeof o && (f = o, o = arguments[u] || {}, u++), "object" == typeof o || st.isFunction(o) || (o = {}), u === a && (o = this, u--); a > u; u++)
            if (null != (i = arguments[u]))
                for (r in i) e = o[r], n = i[r], o !== n && (f && n && (st.isPlainObject(n) || (t = st.isArray(n))) ? (t ? (t = !1, s = e && st.isArray(e) ? e : []) : s = e && st.isPlainObject(e) ? e : {}, o[r] = st.extend(f, s, n)) : void 0 !== n && (o[r] = n));
        return o
    }, st.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === st.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === st.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function (e) {
            var t;
            if (!e || "object" !== st.type(e) || e.nodeType || st.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (rt.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
        },
        globalEval: function (t) {
            t && st.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(ut, "ms-").replace(at, ft)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, r) {
            var i, s = 0,
                o = e.length,
                u = n(e);
            if (r) {
                if (u)
                    for (; o > s && (i = t.apply(e[s], r), i !== !1); s++);
                else
                    for (s in e)
                        if (i = t.apply(e[s], r), i === !1) break
            } else if (u)
                for (; o > s && (i = t.call(e[s], s, e[s]), i !== !1); s++);
            else
                for (s in e)
                    if (i = t.call(e[s], s, e[s]), i === !1) break; return e
        },
        trim: nt && !nt.call("﻿ ") ? function (e) {
            return null == e ? "" : nt.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(ot, "")
        },
        makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? st.merge(r, "string" == typeof e ? [e] : e) : G.call(r, e)), r
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (Y) return Y.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r, i = [], s = 0, o = e.length, u = !n; o > s; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
            return i
        },
        map: function (e, t, r) {
            var i, s = 0,
                o = e.length,
                u = n(e),
                a = [];
            if (u)
                for (; o > s; s++) i = t(e[s], s, r), null != i && a.push(i);
            else
                for (s in e) i = t(e[s], s, r), null != i && a.push(i);
            return Q.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), st.isFunction(e) ? (n = K.call(arguments, 2), r = function () {
                return e.apply(t || this, n.concat(K.call(arguments)))
            }, r.guid = e.guid = e.guid || st.guid++, r) : void 0
        },
        now: function () {
            return +(new Date)
        },
        support: rt
    }), st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var lt = function (e) {
        function t(e, t, n, r) {
            var i, s, o, u, a, f, c, d, v, m;
            if ((t ? t.ownerDocument || t : q) !== _ && M(t), t = t || _, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (u = t.nodeType) && 9 !== u) return [];
            if (P && !r) {
                if (i = yt.exec(e))
                    if (o = i[1]) {
                        if (9 === u) {
                            if (s = t.getElementById(o), !s || !s.parentNode) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && F(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = i[3]) && x.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(o)), n
                    }
                if (x.qsa && (!H || !H.test(e))) {
                    if (d = c = I, v = t, m = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                        for (f = h(e), (c = t.getAttribute("id")) ? d = c.replace(wt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", a = f.length; a--;) f[a] = d + p(f[a]);
                        v = bt.test(e) && l(t.parentNode) || t, m = f.join(",")
                    }
                    if (m) try {
                        return Z.apply(n, v.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(at, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[I] = !0, e
        }

        function i(e) {
            var t = _.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function s(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function o(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function f(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, s = e([], n.length, t), o = s.length; o--;) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function l(e) {
            return e && typeof e.getElementsByTagName !== $ && e
        }

        function c() {}

        function h(e, n) {
            var r, i, s, o, u, a, f, l = W[e + " "];
            if (l) return n ? 0 : l.slice(0);
            for (u = e, a = [], f = T.preFilter; u;) {
                (!r || (i = ft.exec(u))) && (i && (u = u.slice(i[0].length) || u), a.push(s = [])), r = !1, (i = lt.exec(u)) && (r = i.shift(), s.push({
                    value: r,
                    type: i[0].replace(at, " ")
                }), u = u.slice(r.length));
                for (o in T.filter)!(i = dt[o].exec(u)) || f[o] && !(i = f[o](i)) || (r = i.shift(), s.push({
                    value: r,
                    type: o,
                    matches: i
                }), u = u.slice(r.length));
                if (!r) break
            }
            return n ? u.length : u ? t.error(e) : W(e, a).slice(0)
        }

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                s = U++;
            return t.first ? function (t, n, s) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, s)
            } : function (t, n, o) {
                var u, a, f = [R, s];
                if (o) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, o)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (a = t[I] || (t[I] = {}), (u = a[r]) && u[0] === R && u[1] === s) return f[2] = u[2];
                            if (a[r] = f, f[2] = e(t, n, o)) return !0
                        }
            }
        }

        function v(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, t, n, r, i) {
            for (var s, o = [], u = 0, a = e.length, f = null != t; a > u; u++)(s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
            return o
        }

        function g(e, t, n, i, s, o) {
            return i && !i[I] && (i = g(i)), s && !s[I] && (s = g(s, o)), r(function (r, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = r || w(t || "*", u.nodeType ? [u] : u, []),
                    g = !e || !r && t ? v : m(v, h, e, u, a),
                    y = n ? s || (r ? e : d || i) ? [] : o : g;
                if (n && n(g, y, u, a), i)
                    for (f = m(y, p), i(f, [], u, a), l = f.length; l--;)(c = f[l]) && (y[p[l]] = !(g[p[l]] = c));
                if (r) {
                    if (s || e) {
                        if (s) {
                            for (f = [], l = y.length; l--;)(c = y[l]) && f.push(g[l] = c);
                            s(null, y = [], f, a)
                        }
                        for (l = y.length; l--;)(c = y[l]) && (f = s ? tt.call(r, c) : h[l]) > -1 && (r[f] = !(o[f] = c))
                    }
                } else y = m(y === o ? y.splice(d, y.length) : y), s ? s(null, o, y, a) : Z.apply(o, y)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, s = T.relative[e[0].type], o = s || T.relative[" "], u = s ? 1 : 0, a = d(function (e) {
                return e === t
            }, o, !0), f = d(function (e) {
                return tt.call(t, e) > -1
            }, o, !0), l = [
                function (e, n, r) {
                    return !s && (r || n !== L) || ((t = n).nodeType ? a(e, n, r) : f(e, n, r))
                }
            ]; i > u; u++)
                if (n = T.relative[e[u].type]) l = [d(v(l), n)];
                else {
                    if (n = T.filter[e[u].type].apply(null, e[u].matches), n[I]) {
                        for (r = ++u; i > r && !T.relative[e[r].type]; r++);
                        return g(u > 1 && v(l), u > 1 && p(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, r > u && y(e.slice(u, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                    }
                    l.push(n)
                }
            return v(l)
        }

        function b(e, n) {
            var i = n.length > 0,
                s = e.length > 0,
                o = function (r, o, u, a, f) {
                    var l, c, h, p = 0,
                        d = "0",
                        v = r && [],
                        g = [],
                        y = L,
                        b = r || s && T.find.TAG("*", f),
                        w = R += null == y ? 1 : Math.random() || .1,
                        E = b.length;
                    for (f && (L = o !== _ && o); d !== E && null != (l = b[d]); d++) {
                        if (s && l) {
                            for (c = 0; h = e[c++];)
                                if (h(l, o, u)) {
                                    a.push(l);
                                    break
                                }
                            f && (R = w)
                        }
                        i && ((l = !h && l) && p--, r && v.push(l))
                    }
                    if (p += d, i && d !== p) {
                        for (c = 0; h = n[c++];) h(v, g, o, u);
                        if (r) {
                            if (p > 0)
                                for (; d--;) v[d] || g[d] || (g[d] = G.call(a));
                            g = m(g)
                        }
                        Z.apply(a, g), f && !r && g.length > 0 && p + n.length > 1 && t.uniqueSort(a)
                    }
                    return f && (R = w, L = y), v
                };
            return i ? r(o) : o
        }

        function w(e, n, r) {
            for (var i = 0, s = n.length; s > i; i++) t(e, n[i], r);
            return r
        }

        function E(e, t, n, r) {
            var i, s, o, u, a, f = h(e);
            if (!r && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && x.getById && 9 === t.nodeType && P && T.relative[s[1].type]) {
                    if (t = (T.find.ID(o.matches[0].replace(Et, St), t) || [])[0], !t) return n;
                    e = e.slice(s.shift().value.length)
                }
                for (i = dt.needsContext.test(e) ? 0 : s.length; i-- && (o = s[i], !T.relative[u = o.type]);)
                    if ((a = T.find[u]) && (r = a(o.matches[0].replace(Et, St), bt.test(s[0].type) && l(t.parentNode) || t))) {
                        if (s.splice(i, 1), e = r.length && p(s), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return k(e, f)(r, t, !P, n, bt.test(e) && l(t.parentNode) || t), n
        }
        var S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I = "sizzle" + -(new Date),
            q = e.document,
            R = 0,
            U = 0,
            z = n(),
            W = n(),
            X = n(),
            V = function (e, t) {
                return e === t && (O = !0), 0
            },
            $ = "undefined",
            J = 1 << 31,
            K = {}.hasOwnProperty,
            Q = [],
            G = Q.pop,
            Y = Q.push,
            Z = Q.push,
            et = Q.slice,
            tt = Q.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            rt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            st = it.replace("w", "w#"),
            ot = "\\[" + rt + "*(" + it + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + st + ")|)|)" + rt + "*\\]",
            ut = ":(" + it + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ot.replace(3, 8) + ")*)|.*)\\)|)",
            at = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
            ft = new RegExp("^" + rt + "*," + rt + "*"),
            lt = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
            ct = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
            ht = new RegExp(ut),
            pt = new RegExp("^" + st + "$"),
            dt = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + ut),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
            },
            vt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            wt = /'|\\/g,
            Et = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
            St = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(Q = et.call(q.childNodes), q.childNodes), Q[q.childNodes.length].nodeType
        } catch (xt) {
            Z = {
                apply: Q.length ? function (e, t) {
                    Y.apply(e, et.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, M = t.setDocument = function (e) {
            var t, n = e ? e.ownerDocument || e : q,
                r = n.defaultView;
            return n !== _ && 9 === n.nodeType && n.documentElement ? (_ = n, D = n.documentElement, P = !C(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function () {
                M()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function () {
                M()
            })), x.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = i(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = gt.test(n.getElementsByClassName) && i(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), x.getById = i(function (e) {
                return D.appendChild(e).id = I, !n.getElementsByName || !n.getElementsByName(I).length
            }), x.getById ? (T.find.ID = function (e, t) {
                if (typeof t.getElementById !== $ && P) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(Et, St);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(Et, St);
                return function (e) {
                    var n = typeof e.getAttributeNode !== $ && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = x.getElementsByTagName ? function (e, t) {
                return typeof t.getElementsByTagName !== $ ? t.getElementsByTagName(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = s[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return s
            }, T.find.CLASS = x.getElementsByClassName && function (e, t) {
                return typeof t.getElementsByClassName !== $ && P ? t.getElementsByClassName(e) : void 0
            }, B = [], H = [], (x.qsa = gt.test(n.querySelectorAll)) && (i(function (e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && H.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || H.push(":checked")
            }), i(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
            })), (x.matchesSelector = gt.test(j = D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function (e) {
                x.disconnectedMatch = j.call(e, "div"), j.call(e, "[s!='']:x"), B.push("!=", ut)
            }), H = H.length && new RegExp(H.join("|")), B = B.length && new RegExp(B.join("|")), t = gt.test(D.compareDocumentPosition), F = t || gt.test(D.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function (e, t) {
                if (e === t) return O = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !x.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === q && F(q, e) ? -1 : t === n || t.ownerDocument === q && F(q, t) ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return O = !0, 0;
                var r, i = 0,
                    s = e.parentNode,
                    u = t.parentNode,
                    a = [e],
                    f = [t];
                if (!s || !u) return e === n ? -1 : t === n ? 1 : s ? -1 : u ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0;
                if (s === u) return o(e, t);
                for (r = e; r = r.parentNode;) a.unshift(r);
                for (r = t; r = r.parentNode;) f.unshift(r);
                for (; a[i] === f[i];) i++;
                return i ? o(a[i], f[i]) : a[i] === q ? -1 : f[i] === q ? 1 : 0
            }, n) : _
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== _ && M(e), n = n.replace(ct, "='$1']"), !(!x.matchesSelector || !P || B && B.test(n) || H && H.test(n))) try {
                var r = j.call(e, n);
                if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, _, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== _ && M(e), F(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== _ && M(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && K.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
            return void 0 !== r ? r : x.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (O = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort(V), O) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return A = null, e
        }, N = t.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += N(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += N(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Et, St), e[3] = (e[4] || e[5] || "").replace(Et, St), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return dt.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && ht.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Et, St).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && z(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== $ && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, r) {
                    return function (i) {
                        var s = t.attr(i, e);
                        return null == s ? "!=" === n : n ? (s += "", "=" === n ? s === r : "!=" === n ? s !== r : "^=" === n ? r && 0 === s.indexOf(r) : "*=" === n ? r && s.indexOf(r) > -1 : "$=" === n ? r && s.slice(-r.length) === r : "~=" === n ? (" " + s + " ").indexOf(r) > -1 : "|=" === n ? s === r || s.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        u = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            y = !a && !u;
                        if (m) {
                            if (s) {
                                for (; v;) {
                                    for (c = t; c = c[v];)
                                        if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    d = v = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? m.firstChild : m.lastChild], o && y) {
                                for (l = m[I] || (m[I] = {}), f = l[e] || [], p = f[0] === R && f[1], h = f[0] === R && f[2], c = p && m.childNodes[p]; c = ++p && c && c[v] || (h = p = 0) || d.pop();)
                                    if (1 === c.nodeType && ++h && c === t) {
                                        l[e] = [R, p, h];
                                        break
                                    }
                            } else if (y && (f = (t[I] || (t[I] = {}))[e]) && f[0] === R) h = f[1];
                            else
                                for (;
                                    (c = ++p && c && c[v] || (h = p = 0) || d.pop()) && ((u ? c.nodeName.toLowerCase() !== g : 1 !== c.nodeType) || !++h || (y && ((c[I] || (c[I] = {}))[e] = [R, h]), c !== t)););
                            return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var i, s = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[I] ? s(n) : s.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = s(e, n), o = i.length; o--;) r = tt.call(e, i[o]), e[r] = !(t[r] = i[o])
                    }) : function (e) {
                        return s(e, 0, i)
                    }) : s
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(at, "$1"));
                    return i[I] ? r(function (e, t, n, r) {
                        for (var s, o = i(e, null, r, []), u = e.length; u--;)(s = o[u]) && (e[u] = !(t[u] = s))
                    }) : function (e, r, s) {
                        return t[0] = e, i(t, null, s, n), !n.pop()
                    }
                }),
                has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function (e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Et, St).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === D
                },
                focus: function (e) {
                    return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !T.pseudos.empty(e)
                },
                header: function (e) {
                    return mt.test(e.nodeName)
                },
                input: function (e) {
                    return vt.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: f(function () {
                    return [0]
                }),
                last: f(function (e, t) {
                    return [t - 1]
                }),
                eq: f(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: f(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: f(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: f(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: f(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (S in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[S] = u(S);
        for (S in {
            submit: !0,
            reset: !0
        }) T.pseudos[S] = a(S);
        return c.prototype = T.filters = T.pseudos, T.setFilters = new c, k = t.compile = function (e, t) {
            var n, r = [],
                i = [],
                s = X[e + " "];
            if (!s) {
                for (t || (t = h(e)), n = t.length; n--;) s = y(t[n]), s[I] ? r.push(s) : i.push(s);
                s = X(e, b(i, r))
            }
            return s
        }, x.sortStable = I.split("").sort(V).join("") === I, x.detectDuplicates = !!O, M(), x.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(_.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || s(nt, function (e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    st.find = lt, st.expr = lt.selectors, st.expr[":"] = st.expr.pseudos, st.unique = lt.uniqueSort, st.text = lt.getText, st.isXMLDoc = lt.isXML, st.contains = lt.contains;
    var ct = st.expr.match.needsContext,
        ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pt = /^.[^:#\[\.,]*$/;
    st.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? st.find.matchesSelector(r, e) ? [r] : [] : st.find.matches(e, st.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, st.fn.extend({
        find: function (e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(st(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (st.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) st.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? st.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function (e) {
            return !!r(this, "string" == typeof e && ct.test(e) ? st(e) : e || [], !1).length
        }
    });
    var dt, vt = e.document,
        mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = st.fn.init = function (e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || dt).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof st ? t[0] : t, st.merge(this, st.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : vt, !0)), ht.test(n[1]) && st.isPlainObject(t))
                        for (n in t) st.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = vt.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return dt.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = vt, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : st.isFunction(e) ? "undefined" != typeof dt.ready ? dt.ready(e) : e(st) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), st.makeArray(e, this))
        };
    gt.prototype = st.fn, dt = st(vt);
    var yt = /^(?:parents|prev(?:Until|All))/,
        bt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    st.extend({
        dir: function (e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !st(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), st.fn.extend({
        has: function (e) {
            var t, n = st(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (st.contains(this, n[t])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, r = 0, i = this.length, s = [], o = ct.test(e) || "string" != typeof e ? st(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && st.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? st.unique(s) : s)
        },
        index: function (e) {
            return e ? "string" == typeof e ? st.inArray(this[0], st(e)) : st.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(st.unique(st.merge(this.get(), st(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), st.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return st.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return st.dir(e, "parentNode", n)
        },
        next: function (e) {
            return i(e, "nextSibling")
        },
        prev: function (e) {
            return i(e, "previousSibling")
        },
        nextAll: function (e) {
            return st.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return st.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return st.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return st.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return st.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return st.sibling(e.firstChild)
        },
        contents: function (e) {
            return st.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : st.merge([], e.childNodes)
        }
    }, function (e, t) {
        st.fn[e] = function (n, r) {
            var i = st.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = st.filter(r, i)), this.length > 1 && (bt[e] || (i = st.unique(i)), yt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var wt = /\S+/g,
        Et = {};
    st.Callbacks = function (e) {
        e = "string" == typeof e ? Et[e] || s(e) : st.extend({}, e);
        var t, n, r, i, o, u, a = [],
            f = !e.once && [],
            l = function (s) {
                for (n = e.memory && s, r = !0, o = u || 0, u = 0, i = a.length, t = !0; a && i > o; o++)
                    if (a[o].apply(s[0], s[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            },
            c = {
                add: function () {
                    if (a) {
                        var r = a.length;
                        ! function s(t) {
                            st.each(t, function (t, n) {
                                var r = st.type(n);
                                "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && s(n)
                            })
                        }(arguments), t ? i = a.length : n && (u = r, l(n))
                    }
                    return this
                },
                remove: function () {
                    return a && st.each(arguments, function (e, n) {
                        for (var r;
                            (r = st.inArray(n, a, r)) > -1;) a.splice(r, 1), t && (i >= r && i--, o >= r && o--)
                    }), this
                },
                has: function (e) {
                    return e ? st.inArray(e, a) > -1 : !(!a || !a.length)
                },
                empty: function () {
                    return a = [], i = 0, this
                },
                disable: function () {
                    return a = f = n = void 0, this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return f = void 0, n || c.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (e, n) {
                    return !a || r && !f || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? f.push(n) : l(n)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return c
    }, st.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", st.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", st.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", st.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return st.Deferred(function (n) {
                            st.each(t, function (t, s) {
                                var o = st.isFunction(e[t]) && e[t];
                                i[s[1]](function () {
                                    var e = o && o.apply(this, arguments);
                                    e && st.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? st.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, st.each(t, function (e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function () {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = K.call(arguments),
                r = n.length,
                i = 1 !== r || e && st.isFunction(e.promise) ? r : 0,
                s = 1 === i ? e : st.Deferred(),
                o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? K.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1)
                for (u = new Array(r), a = new Array(r), f = new Array(r); r > t; t++) n[t] && st.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
            return i || s.resolveWith(f, n), s.promise()
        }
    });
    var St;
    st.fn.ready = function (e) {
        return st.ready.promise().done(e), this
    }, st.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? st.readyWait++ : st.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--st.readyWait : !st.isReady) {
                if (!vt.body) return setTimeout(st.ready);
                st.isReady = !0, e !== !0 && --st.readyWait > 0 || (St.resolveWith(vt, [st]), st.fn.trigger && st(vt).trigger("ready").off("ready"))
            }
        }
    }), st.ready.promise = function (t) {
        if (!St)
            if (St = st.Deferred(), "complete" === vt.readyState) setTimeout(st.ready);
            else if (vt.addEventListener) vt.addEventListener("DOMContentLoaded", u, !1), e.addEventListener("load", u, !1);
        else {
            vt.attachEvent("onreadystatechange", u), e.attachEvent("onload", u);
            var n = !1;
            try {
                n = null == e.frameElement && vt.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!st.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    o(), st.ready()
                }
            }()
        }
        return St.promise(t)
    };
    var xt = "undefined",
        Tt;
    for (Tt in st(rt)) break;
    rt.ownLast = "0" !== Tt, rt.inlineBlockNeedsLayout = !1, st(function () {
        var e, t, n = vt.getElementsByTagName("body")[0];
        n && (e = vt.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = vt.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== xt && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (rt.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
    }),
    function () {
        var e = vt.createElement("div");
        if (null == rt.deleteExpando) {
            rt.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                rt.deleteExpando = !1
            }
        }
        e = null
    }(), st.acceptData = function (e) {
        var t = st.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
    var Nt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ct = /([A-Z])/g;
    st.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? st.cache[e[st.expando]] : e[st.expando], !!e && !f(e)
        },
        data: function (e, t, n) {
            return l(e, t, n)
        },
        removeData: function (e, t) {
            return c(e, t)
        },
        _data: function (e, t, n) {
            return l(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return c(e, t, !0)
        }
    }), st.fn.extend({
        data: function (e, t) {
            var n, r, i, s = this[0],
                o = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (i = st.data(s), 1 === s.nodeType && !st._data(s, "parsedAttrs"))) {
                    for (n = o.length; n--;) r = o[n].name, 0 === r.indexOf("data-") && (r = st.camelCase(r.slice(5)), a(s, r, i[r]));
                    st._data(s, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                st.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                st.data(this, e, t)
            }) : s ? a(s, e, st.data(s, e)) : void 0
        },
        removeData: function (e) {
            return this.each(function () {
                st.removeData(this, e)
            })
        }
    }), st.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = st._data(e, t), n && (!r || st.isArray(n) ? r = st._data(e, t, st.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = st.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = st._queueHooks(e, t),
                o = function () {
                    st.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return st._data(e, n) || st._data(e, n, {
                empty: st.Callbacks("once memory").add(function () {
                    st._removeData(e, t + "queue"), st._removeData(e, n)
                })
            })
        }
    }), st.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? st.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = st.queue(this, e, t);
                st._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && st.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                st.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = st.Deferred(),
                s = this,
                o = this.length,
                u = function () {
                    --r || i.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = st._data(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Lt = ["Top", "Right", "Bottom", "Left"],
        At = function (e, t) {
            return e = t || e, "none" === st.css(e, "display") || !st.contains(e.ownerDocument, e)
        },
        Ot = st.access = function (e, t, n, r, i, s, o) {
            var u = 0,
                a = e.length,
                f = null == n;
            if ("object" === st.type(n)) {
                i = !0;
                for (u in n) st.access(e, t, u, n[u], !0, s, o)
            } else if (void 0 !== r && (i = !0, st.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function (e, t, n) {
                return f.call(st(e), n)
            })), t))
                for (; a > u; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)));
            return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
        },
        Mt = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = vt.createDocumentFragment(),
            t = vt.createElement("div"),
            n = vt.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", rt.leadingWhitespace = 3 === t.firstChild.nodeType, rt.tbody = !t.getElementsByTagName("tbody").length, rt.htmlSerialize = !!t.getElementsByTagName("link").length, rt.html5Clone = "<:nav></:nav>" !== vt.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), rt.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", rt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", rt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, rt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
            rt.noCloneEvent = !1
        }), t.cloneNode(!0).click()), null == rt.deleteExpando) {
            rt.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                rt.deleteExpando = !1
            }
        }
        e = t = n = null
    }(),
    function () {
        var t, n, r = vt.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + t, (rt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), rt[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var _t = /^(?:input|select|textarea)$/i,
        Dt = /^key/,
        Pt = /^(?:mouse|contextmenu)|click/,
        Ht = /^(?:focusinfocus|focusoutblur)$/,
        Bt = /^([^.]*)(?:\.(.+)|)$/;
    st.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = st._data(e);
            if (m) {
                for (n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = st.guid++), (o = m.events) || (o = m.events = {}), (l = m.handle) || (l = m.handle = function (e) {
                    return typeof st === xt || e && st.event.triggered === e.type ? void 0 : st.event.dispatch.apply(l.elem, arguments)
                }, l.elem = e), t = (t || "").match(wt) || [""], u = t.length; u--;) s = Bt.exec(t[u]) || [], p = v = s[1], d = (s[2] || "").split(".").sort(), p && (f = st.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = st.event.special[p] || {}, c = st.extend({
                    type: p,
                    origType: v,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && st.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, a), (h = o[p]) || (h = o[p] = [], h.delegateCount = 0, f.setup && f.setup.call(e, r, d, l) !== !1 || (e.addEventListener ? e.addEventListener(p, l, !1) : e.attachEvent && e.attachEvent("on" + p, l))), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), st.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = st.hasData(e) && st._data(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(wt) || [""], f = t.length; f--;)
                    if (u = Bt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort(), p) {
                        for (c = st.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length; s--;) o = h[s], !i && v !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                        a && !h.length && (c.teardown && c.teardown.call(e, d, m.handle) !== !1 || st.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) st.event.remove(e, p + t[f], n, r, !0);
                st.isEmptyObject(l) && (delete m.handle, st._removeData(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var s, o, u, a, f, l, c, h = [r || vt],
                p = tt.call(t, "type") ? t.type : t,
                d = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (u = l = r = r || vt, 3 !== r.nodeType && 8 !== r.nodeType && !Ht.test(p + st.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), o = p.indexOf(":") < 0 && "on" + p, t = t[st.expando] ? t : new st.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = d.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : st.makeArray(n, [t]), f = st.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !st.isWindow(r)) {
                    for (a = f.delegateType || p, Ht.test(a + p) || (u = u.parentNode); u; u = u.parentNode) h.push(u), l = u;
                    l === (r.ownerDocument || vt) && h.push(l.defaultView || l.parentWindow || e)
                }
                for (c = 0;
                    (u = h[c++]) && !t.isPropagationStopped();) t.type = c > 1 ? a : f.bindType || p, s = (st._data(u, "events") || {})[t.type] && st._data(u, "handle"), s && s.apply(u, n), s = o && u[o], s && s.apply && st.acceptData(u) && (t.result = s.apply(u, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!f._default || f._default.apply(h.pop(), n) === !1) && st.acceptData(r) && o && r[p] && !st.isWindow(r)) {
                    l = r[o], l && (r[o] = null), st.event.triggered = p;
                    try {
                        r[p]()
                    } catch (v) {}
                    st.event.triggered = void 0, l && (r[o] = l)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = st.event.fix(e);
            var t, n, r, i, s, o = [],
                u = K.call(arguments),
                a = (st._data(this, "events") || {})[e.type] || [],
                f = st.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, e) !== !1) {
                for (o = st.event.handlers.call(this, e, a), t = 0;
                    (i = o[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, s = 0;
                        (r = i.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((st.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, u), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return f.postDispatch && f.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, s, o = [],
                u = t.delegateCount,
                a = e.target;
            if (u && a.nodeType && (!e.button || "click" !== e.type))
                for (; a != this; a = a.parentNode || this)
                    if (1 === a.nodeType && (a.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], s = 0; u > s; s++) r = t[s], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? st(n, this).index(a) >= 0 : st.find(n, this, null, [a]).length), i[n] && i.push(r);
                        i.length && o.push({
                            elem: a,
                            handlers: i
                        })
                    }
            return u < t.length && o.push({
                elem: this,
                handlers: t.slice(u)
            }), o
        },
        fix: function (e) {
            if (e[st.expando]) return e;
            var t, n, r, i = e.type,
                s = e,
                o = this.fixHooks[i];
            for (o || (this.fixHooks[i] = o = Pt.test(i) ? this.mouseHooks : Dt.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new st.Event(s), t = r.length; t--;) n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || vt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, s = t.button,
                    o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || vt, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== d() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return st.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return st.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = st.extend(new st.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? st.event.trigger(i, null, t) : st.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, st.removeEvent = vt.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === xt && (e[r] = null), e.detachEvent(r, n))
    }, st.Event = function (e, t) {
        return this instanceof st.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? h : p) : this.type = e, t && st.extend(this, t), this.timeStamp = e && e.timeStamp || st.now(), void(this[st.expando] = !0)) : new st.Event(e, t)
    }, st.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = h, this.stopPropagation()
        }
    }, st.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        st.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                return (!i || i !== r && !st.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), rt.submitBubbles || (st.event.special.submit = {
        setup: function () {
            return st.nodeName(this, "form") ? !1 : void st.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target,
                    n = st.nodeName(t, "input") || st.nodeName(t, "button") ? t.form : void 0;
                n && !st._data(n, "submitBubbles") && (st.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), st._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && st.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return st.nodeName(this, "form") ? !1 : void st.event.remove(this, "._submit")
        }
    }), rt.changeBubbles || (st.event.special.change = {
        setup: function () {
            return _t.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (st.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), st.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), st.event.simulate("change", this, e, !0)
            })), !1) : void st.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                _t.test(t.nodeName) && !st._data(t, "changeBubbles") && (st.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || st.event.simulate("change", this.parentNode, e, !0)
                }), st._data(t, "changeBubbles", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return st.event.remove(this, "._change"), !_t.test(this.nodeName)
        }
    }), rt.focusinBubbles || st.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            st.event.simulate(t, e.target, st.event.fix(e), !0)
        };
        st.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = st._data(r, t);
                i || r.addEventListener(e, n, !0), st._data(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = st._data(r, t) - 1;
                i ? st._data(r, t, i) : (r.removeEventListener(e, n, !0), st._removeData(r, t))
            }
        }
    }), st.fn.extend({
        on: function (e, t, n, r, i) {
            var s, o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
            else if (!r) return this;
            return 1 === i && (o = r, r = function (e) {
                return st().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = st.guid++)), this.each(function () {
                st.event.add(this, e, r, n, t)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, st(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function () {
                st.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                st.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? st.event.trigger(e, t, n, !0) : void 0
        }
    });
    var jt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ft = / jQuery\d+="(?:null|\d+)"/g,
        It = new RegExp("<(?:" + jt + ")[\\s/>]", "i"),
        qt = /^\s+/,
        Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ut = /<([\w:]+)/,
        zt = /<tbody/i,
        Wt = /<|&#?\w+;/,
        Xt = /<(?:script|style|link)/i,
        Vt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        $t = /^$|\/(?:java|ecma)script/i,
        Jt = /^true\/(.*)/,
        Kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Qt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: rt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Gt = v(vt),
        Yt = Gt.appendChild(vt.createElement("div"));
    Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td, st.extend({
        clone: function (e, t, n) {
            var r, i, s, o, u, a = st.contains(e.ownerDocument, e);
            if (rt.html5Clone || st.isXMLDoc(e) || !It.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Yt.innerHTML = e.outerHTML, Yt.removeChild(s = Yt.firstChild)), !(rt.noCloneEvent && rt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || st.isXMLDoc(e)))
                for (r = m(s), u = m(e), o = 0; null != (i = u[o]); ++o) r[o] && x(i, r[o]);
            if (t)
                if (n)
                    for (u = u || m(e), r = r || m(s), o = 0; null != (i = u[o]); o++) S(i, r[o]);
                else S(e, s);
            return r = m(s, "script"), r.length > 0 && E(r, !a && m(e, "script")), r = u = i = null, s
        },
        buildFragment: function (e, t, n, r) {
            for (var i, s, o, u, a, f, l, c = e.length, h = v(t), p = [], d = 0; c > d; d++)
                if (s = e[d], s || 0 === s)
                    if ("object" === st.type(s)) st.merge(p, s.nodeType ? [s] : s);
                    else if (Wt.test(s)) {
                for (u = u || h.appendChild(t.createElement("div")), a = (Ut.exec(s) || ["", ""])[1].toLowerCase(), l = Qt[a] || Qt._default, u.innerHTML = l[1] + s.replace(Rt, "<$1></$2>") + l[2], i = l[0]; i--;) u = u.lastChild;
                if (!rt.leadingWhitespace && qt.test(s) && p.push(t.createTextNode(qt.exec(s)[0])), !rt.tbody)
                    for (s = "table" !== a || zt.test(s) ? "<table>" !== l[1] || zt.test(s) ? 0 : u : u.firstChild, i = s && s.childNodes.length; i--;) st.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f);
                for (st.merge(p, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
                u = h.lastChild
            } else p.push(t.createTextNode(s));
            for (u && h.removeChild(u), rt.appendChecked || st.grep(m(p, "input"), g), d = 0; s = p[d++];)
                if ((!r || -1 === st.inArray(s, r)) && (o = st.contains(s.ownerDocument, s), u = m(h.appendChild(s), "script"), o && E(u), n))
                    for (i = 0; s = u[i++];) $t.test(s.type || "") && n.push(s);
            return u = null, h
        },
        cleanData: function (e, t) {
            for (var n, r, i, s, o = 0, u = st.expando, a = st.cache, f = rt.deleteExpando, l = st.event.special; null != (n = e[o]); o++)
                if ((t || st.acceptData(n)) && (i = n[u], s = i && a[i])) {
                    if (s.events)
                        for (r in s.events) l[r] ? st.event.remove(n, r) : st.removeEvent(n, r, s.handle);
                    a[i] && (delete a[i], f ? delete n[u] : typeof n.removeAttribute !== xt ? n.removeAttribute(u) : n[u] = null, J.push(i))
                }
        }
    }), st.fn.extend({
        text: function (e) {
            return Ot(this, function (e) {
                return void 0 === e ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || vt).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, r = e ? st.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || st.cleanData(m(n)), n.parentNode && (t && st.contains(n.ownerDocument, n) && E(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && st.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && st.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return st.clone(this, e, t)
            })
        },
        html: function (e) {
            return Ot(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ft, "") : void 0;
                if (!("string" != typeof e || Xt.test(e) || !rt.htmlSerialize && It.test(e) || !rt.leadingWhitespace && qt.test(e) || Qt[(Ut.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Rt, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (st.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, st.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = Q.apply([], e);
            var n, r, i, s, o, u, a = 0,
                f = this.length,
                l = this,
                c = f - 1,
                h = e[0],
                p = st.isFunction(h);
            if (p || f > 1 && "string" == typeof h && !rt.checkClone && Vt.test(h)) return this.each(function (n) {
                var r = l.eq(n);
                p && (e[0] = h.call(this, n, r.html())), r.domManip(e, t)
            });
            if (f && (u = st.buildFragment(e, this[0].ownerDocument, !1, this), n = u.firstChild, 1 === u.childNodes.length && (u = n), n)) {
                for (s = st.map(m(u, "script"), b), i = s.length; f > a; a++) r = u, a !== c && (r = st.clone(r, !0, !0), i && st.merge(s, m(r, "script"))), t.call(this[a], r, a);
                if (i)
                    for (o = s[s.length - 1].ownerDocument, st.map(s, w), a = 0; i > a; a++) r = s[a], $t.test(r.type || "") && !st._data(r, "globalEval") && st.contains(o, r) && (r.src ? st._evalUrl && st._evalUrl(r.src) : st.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Kt, "")));
                u = n = null
            }
            return this
        }
    }), st.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        st.fn[e] = function (e) {
            for (var n, r = 0, i = [], s = st(e), o = s.length - 1; o >= r; r++) n = r === o ? this : this.clone(!0), st(s[r])[t](n), G.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Zt, en = {};
    ! function () {
        var e, t, n = vt.createElement("div"),
            r = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", rt.opacity = /^0.5/.test(e.style.opacity), rt.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", rt.clearCloneStyle = "content-box" === n.style.backgroundClip, e = n = null, rt.shrinkWrapBlocks = function () {
            var e, n, i, s;
            if (null == t) {
                if (e = vt.getElementsByTagName("body")[0], !e) return;
                s = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = vt.createElement("div"), i = vt.createElement("div"), e.appendChild(n).appendChild(i), t = !1, typeof i.style.zoom !== xt && (i.style.cssText = r + ";width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t = 3 !== i.offsetWidth), e.removeChild(n), e = n = i = null
            }
            return t
        }
    }();
    var tn = /^margin/,
        nn = new RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"),
        rn, sn, on = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (rn = function (e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, sn = function (e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || rn(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || st.contains(e.ownerDocument, e) || (o = st.style(e, t)), nn.test(o) && tn.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), void 0 === o ? o : o + ""
    }) : vt.documentElement.currentStyle && (rn = function (e) {
        return e.currentStyle
    }, sn = function (e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || rn(e), o = n ? n[t] : void 0, null == o && u && u[t] && (o = u[t]), nn.test(o) && !on.test(t) && (r = u.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), u.left = "fontSize" === t ? "1em" : o, o = u.pixelLeft + "px", u.left = r, s && (i.left = s)), void 0 === o ? o : o + "" || "auto"
    }), ! function () {
        function t() {
            var t, n, r = vt.getElementsByTagName("body")[0];
            r && (t = vt.createElement("div"), n = vt.createElement("div"), t.style.cssText = f, r.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", st.swap(r, null != r.style.zoom ? {
                zoom: 1
            } : {}, function () {
                i = 4 === n.offsetWidth
            }), s = !0, o = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(n, null) || {}).top, s = "4px" === (e.getComputedStyle(n, null) || {
                width: "4px"
            }).width), r.removeChild(t), n = r = null)
        }
        var n, r, i, s, o, u, a = vt.createElement("div"),
            f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            l = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = a.getElementsByTagName("a")[0], n.style.cssText = "float:left;opacity:.5", rt.opacity = /^0.5/.test(n.style.opacity), rt.cssFloat = !!n.style.cssFloat, a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", rt.clearCloneStyle = "content-box" === a.style.backgroundClip, n = a = null, st.extend(rt, {
            reliableHiddenOffsets: function () {
                if (null != r) return r;
                var e, t, n, i = vt.createElement("div"),
                    s = vt.getElementsByTagName("body")[0];
                return s ? (i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = vt.createElement("div"), e.style.cssText = f, s.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", r = n && 0 === t[0].offsetHeight, s.removeChild(e), i = s = null, r) : void 0
            },
            boxSizing: function () {
                return null == i && t(), i
            },
            boxSizingReliable: function () {
                return null == s && t(), s
            },
            pixelPosition: function () {
                return null == o && t(), o
            },
            reliableMarginRight: function () {
                var t, n, r, i;
                if (null == u && e.getComputedStyle) {
                    if (t = vt.getElementsByTagName("body")[0], !t) return;
                    n = vt.createElement("div"), r = vt.createElement("div"), n.style.cssText = f, t.appendChild(n).appendChild(r), i = r.appendChild(vt.createElement("div")), i.style.cssText = r.style.cssText = l, i.style.marginRight = i.style.width = "0", r.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(n)
                }
                return u
            }
        })
    }(), st.swap = function (e, t, n, r) {
        var i, s, o = {};
        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
        i = n.apply(e, r || []);
        for (s in t) e.style[s] = o[s];
        return i
    };
    var un = /alpha\([^)]*\)/i,
        an = /opacity\s*=\s*([^)]*)/,
        fn = /^(none|table(?!-c[ea]).+)/,
        ln = new RegExp("^(" + kt + ")(.*)$", "i"),
        cn = new RegExp("^([+-])=(" + kt + ")", "i"),
        hn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pn = {
            letterSpacing: 0,
            fontWeight: 400
        },
        dn = ["Webkit", "O", "Moz", "ms"];
    st.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = sn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": rt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, s, o, u = st.camelCase(t),
                    a = e.style;
                if (t = st.cssProps[u] || (st.cssProps[u] = k(a, u)), o = st.cssHooks[t] || st.cssHooks[u], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : a[t];
                if (s = typeof n, "string" === s && (i = cn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(st.css(e, t)), s = "number"), null != n && n === n && ("number" !== s || st.cssNumber[u] || (n += "px"), rt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (a[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, r))))) try {
                    a[t] = "", a[t] = n
                } catch (f) {}
            }
        },
        css: function (e, t, n, r) {
            var i, s, o, u = st.camelCase(t);
            return t = st.cssProps[u] || (st.cssProps[u] = k(e.style, u)), o = st.cssHooks[t] || st.cssHooks[u], o && "get" in o && (s = o.get(e, !0, n)), void 0 === s && (s = sn(e, t, r)), "normal" === s && t in pn && (s = pn[t]), "" === n || n ? (i = parseFloat(s), n === !0 || st.isNumeric(i) ? i || 0 : s) : s
        }
    }), st.each(["height", "width"], function (e, t) {
        st.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? 0 === e.offsetWidth && fn.test(st.css(e, "display")) ? st.swap(e, hn, function () {
                    return M(e, t, r)
                }) : M(e, t, r) : void 0
            },
            set: function (e, n, r) {
                var i = r && rn(e);
                return A(e, n, r ? O(e, t, r, rt.boxSizing() && "border-box" === st.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), rt.opacity || (st.cssHooks.opacity = {
        get: function (e, t) {
            return an.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = st.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === st.trim(s.replace(un, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = un.test(s) ? s.replace(un, i) : s + " " + i)
        }
    }), st.cssHooks.marginRight = C(rt.reliableMarginRight, function (e, t) {
        return t ? st.swap(e, {
            display: "inline-block"
        }, sn, [e, "marginRight"]) : void 0
    }), st.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        st.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Lt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, tn.test(e) || (st.cssHooks[e + t].set = A)
    }), st.fn.extend({
        css: function (e, t) {
            return Ot(this, function (e, t, n) {
                var r, i, s = {},
                    o = 0;
                if (st.isArray(t)) {
                    for (r = rn(e), i = t.length; i > o; o++) s[t[o]] = st.css(e, t[o], !1, r);
                    return s
                }
                return void 0 !== n ? st.style(e, t, n) : st.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return L(this, !0)
        },
        hide: function () {
            return L(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                At(this) ? st(this).show() : st(this).hide()
            })
        }
    }), st.Tween = _, _.prototype = {
        constructor: _,
        init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (st.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = _.propHooks[this.prop];
            return e && e.get ? e.get(this) : _.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = _.propHooks[this.prop];
            return this.pos = t = this.options.duration ? st.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
        }
    }, _.prototype.init.prototype = _.prototype, _.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = st.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                st.fx.step[e.prop] ? st.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[st.cssProps[e.prop]] || st.cssHooks[e.prop]) ? st.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, st.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, st.fx = _.prototype.init, st.fx.step = {};
    var vn, mn, gn = /^(?:toggle|show|hide)$/,
        yn = new RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"),
        bn = /queueHooks$/,
        wn = [B],
        En = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = yn.exec(t),
                        s = i && i[3] || (st.cssNumber[e] ? "" : "px"),
                        o = (st.cssNumber[e] || "px" !== s && +r) && yn.exec(st.css(n.elem, e)),
                        u = 1,
                        a = 20;
                    if (o && o[3] !== s) {
                        s = s || o[3], i = i || [], o = +r || 1;
                        do u = u || ".5", o /= u, st.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && 1 !== u && --a)
                    }
                    return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };
    st.Animation = st.extend(F, {
        tweener: function (e, t) {
            st.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], En[n] = En[n] || [], En[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? wn.unshift(e) : wn.push(e)
        }
    }), st.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? st.extend({}, e) : {
            complete: n || !n && t || st.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !st.isFunction(t) && t
        };
        return r.duration = st.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in st.fx.speeds ? st.fx.speeds[r.duration] : st.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            st.isFunction(r.old) && r.old.call(this), r.queue && st.dequeue(this, r.queue)
        }, r
    }, st.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(At).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = st.isEmptyObject(e),
                s = st.speed(t, n, r),
                o = function () {
                    var t = F(this, st.extend({}, e), s);
                    (i || st._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    s = st.timers,
                    o = st._data(this);
                if (i) o[i] && o[i].stop && r(o[i]);
                else
                    for (i in o) o[i] && o[i].stop && bn.test(i) && r(o[i]);
                for (i = s.length; i--;) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                (t || !n) && st.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = st._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = st.timers,
                    o = r ? r.length : 0;
                for (n.finish = !0, st.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), st.each(["toggle", "show", "hide"], function (e, t) {
        var n = st.fn[t];
        st.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i)
        }
    }), st.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        st.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), st.timers = [], st.fx.tick = function () {
        var e, t = st.timers,
            n = 0;
        for (vn = st.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || st.fx.stop(), vn = void 0
    }, st.fx.timer = function (e) {
        st.timers.push(e), e() ? st.fx.start() : st.timers.pop()
    }, st.fx.interval = 13, st.fx.start = function () {
        mn || (mn = setInterval(st.fx.tick, st.fx.interval))
    }, st.fx.stop = function () {
        clearInterval(mn), mn = null
    }, st.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, st.fn.delay = function (e, t) {
        return e = st.fx ? st.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    },
    function () {
        var e, t, n, r, i = vt.createElement("div");
        i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = i.getElementsByTagName("a")[0], n = vt.createElement("select"), r = n.appendChild(vt.createElement("option")), t = i.getElementsByTagName("input")[0], e.style.cssText = "top:1px", rt.getSetAttribute = "t" !== i.className, rt.style = /top/.test(e.getAttribute("style")), rt.hrefNormalized = "/a" === e.getAttribute("href"), rt.checkOn = !!t.value, rt.optSelected = r.selected, rt.enctype = !!vt.createElement("form").enctype, n.disabled = !0, rt.optDisabled = !r.disabled, t = vt.createElement("input"), t.setAttribute("value", ""), rt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), rt.radioValue = "t" === t.value, e = t = n = r = i = null
    }();
    var Sn = /\r/g;
    st.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = st.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, st(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : st.isArray(i) && (i = st.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), t = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = st.valHooks[i.type] || st.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Sn, "") : null == n ? "" : n)) : void 0
        }
    }), st.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = st.find.attr(e, "value");
                    return null != t ? t : st.text(e)
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, s = "select-one" === e.type || 0 > i, o = s ? null : [], u = s ? i + 1 : r.length, a = 0 > i ? u : s ? i : 0; u > a; a++)
                        if (n = r[a], !(!n.selected && a !== i || (rt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && st.nodeName(n.parentNode, "optgroup"))) {
                            if (t = st(n).val(), s) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, s = st.makeArray(t), o = i.length; o--;)
                        if (r = i[o], st.inArray(st.valHooks.option.get(r), s) >= 0) try {
                            r.selected = n = !0
                        } catch (u) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), st.each(["radio", "checkbox"], function () {
        st.valHooks[this] = {
            set: function (e, t) {
                return st.isArray(t) ? e.checked = st.inArray(st(e).val(), t) >= 0 : void 0
            }
        }, rt.checkOn || (st.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xn, Tn, Nn = st.expr.attrHandle,
        Cn = /^(?:checked|selected)$/i,
        kn = rt.getSetAttribute,
        Ln = rt.input;
    st.fn.extend({
        attr: function (e, t) {
            return Ot(this, st.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                st.removeAttr(this, e)
            })
        }
    }), st.extend({
        attr: function (e, t, n) {
            var r, i, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === xt ? st.prop(e, t, n) : (1 === s && st.isXMLDoc(e) || (t = t.toLowerCase(), r = st.attrHooks[t] || (st.expr.match.bool.test(t) ? Tn : xn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = st.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void st.removeAttr(e, t)) : void 0
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                s = t && t.match(wt);
            if (s && 1 === e.nodeType)
                for (; n = s[i++];) r = st.propFix[n] || n, st.expr.match.bool.test(n) ? Ln && kn || !Cn.test(n) ? e[r] = !1 : e[st.camelCase("default-" + n)] = e[r] = !1 : st.attr(e, n, ""), e.removeAttribute(kn ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!rt.radioValue && "radio" === t && st.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Tn = {
        set: function (e, t, n) {
            return t === !1 ? st.removeAttr(e, n) : Ln && kn || !Cn.test(n) ? e.setAttribute(!kn && st.propFix[n] || n, n) : e[st.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, st.each(st.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Nn[t] || st.find.attr;
        Nn[t] = Ln && kn || !Cn.test(t) ? function (e, t, r) {
            var i, s;
            return r || (s = Nn[t], Nn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Nn[t] = s), i
        } : function (e, t, n) {
            return n ? void 0 : e[st.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Ln && kn || (st.attrHooks.value = {
        set: function (e, t, n) {
            return st.nodeName(e, "input") ? void(e.defaultValue = t) : xn && xn.set(e, t, n)
        }
    }), kn || (xn = {
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Nn.id = Nn.name = Nn.coords = function (e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, st.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: xn.set
    }, st.attrHooks.contenteditable = {
        set: function (e, t, n) {
            xn.set(e, "" === t ? !1 : t, n)
        }
    }, st.each(["width", "height"], function (e, t) {
        st.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), rt.style || (st.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var An = /^(?:input|select|textarea|button|object)$/i,
        On = /^(?:a|area)$/i;
    st.fn.extend({
        prop: function (e, t) {
            return Ot(this, st.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = st.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), st.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, t, n) {
            var r, i, s, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? (s = 1 !== o || !st.isXMLDoc(e), s && (t = st.propFix[t] || t, i = st.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = st.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : An.test(e.nodeName) || On.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), rt.hrefNormalized || st.each(["href", "src"], function (e, t) {
        st.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), rt.optSelected || (st.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        st.propFix[this.toLowerCase()] = this
    }), rt.enctype || (st.propFix.enctype = "encoding");
    var Mn = /[\t\r\n\f]/g;
    st.fn.extend({
        addClass: function (e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = "string" == typeof e && e;
            if (st.isFunction(e)) return this.each(function (t) {
                st(this).addClass(e.call(this, t, this.className))
            });
            if (f)
                for (t = (e || "").match(wt) || []; a > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mn, " ") : " ")) {
                        for (s = 0; i = t[s++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = st.trim(r), n.className !== o && (n.className = o)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = 0 === arguments.length || "string" == typeof e && e;
            if (st.isFunction(e)) return this.each(function (t) {
                st(this).removeClass(e.call(this, t, this.className))
            });
            if (f)
                for (t = (e || "").match(wt) || []; a > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mn, " ") : "")) {
                        for (s = 0; i = t[s++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        o = e ? st.trim(r) : "", n.className !== o && (n.className = o)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(st.isFunction(e) ? function (n) {
                st(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)
                    for (var t, r = 0, i = st(this), s = e.match(wt) || []; t = s[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === xt || "boolean" === n) && (this.className && st._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : st._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Mn, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        st.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), st.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var _n = st.now(),
        Dn = /\?/,
        Pn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    st.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = st.trim(t + "");
        return i && !st.trim(i.replace(Pn, function (e, t, i, s) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !s - !i, "")
        })) ? Function("return " + i)() : st.error("Invalid JSON: " + t)
    }, st.parseXML = function (t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + t), n
    };
    var Hn, Bn, jn = /#.*$/,
        Fn = /([?&])_=[^&]*/,
        In = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        qn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rn = /^(?:GET|HEAD)$/,
        Un = /^\/\//,
        zn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Wn = {},
        Xn = {},
        Vn = "*/".concat("*");
    try {
        Bn = location.href
    } catch ($n) {
        Bn = vt.createElement("a"), Bn.href = "", Bn = Bn.href
    }
    Hn = zn.exec(Bn.toLowerCase()) || [], st.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Bn,
            type: "GET",
            isLocal: qn.test(Hn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": st.parseJSON,
                "text xml": st.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? R(R(e, st.ajaxSettings), t) : R(st.ajaxSettings, e)
        },
        ajaxPrefilter: I(Wn),
        ajaxTransport: I(Xn),
        ajax: function (e, t) {
            function n(e, t, n, r) {
                var i, l, g, y, w, S = t;
                2 !== b && (b = 2, u && clearTimeout(u), f = void 0, o = r || "", E.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = U(c, E, n)), y = z(c, y, E, i), i ? (c.ifModified && (w = E.getResponseHeader("Last-Modified"), w && (st.lastModified[s] = w), w = E.getResponseHeader("etag"), w && (st.etag[s] = w)), 204 === e || "HEAD" === c.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = y.state, l = y.data, g = y.error, i = !g)) : (g = S, (e || !S) && (S = "error", 0 > e && (e = 0))), E.status = e, E.statusText = (t || S) + "", i ? d.resolveWith(h, [l, S, E]) : d.rejectWith(h, [E, S, g]), E.statusCode(m), m = void 0, a && p.trigger(i ? "ajaxSuccess" : "ajaxError", [E, c, i ? l : g]), v.fireWith(h, [E, S]), a && (p.trigger("ajaxComplete", [E, c]), --st.active || st.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, s, o, u, a, f, l, c = st.ajaxSetup({}, t),
                h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? st(h) : st.event,
                d = st.Deferred(),
                v = st.Callbacks("once memory"),
                m = c.statusCode || {},
                g = {},
                y = {},
                b = 0,
                w = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!l)
                                for (l = {}; t = In.exec(o);) l[t[1].toLowerCase()] = t[2];
                            t = l[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (c.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else E.always(e[E.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        return f && f.abort(t), n(0, t), this
                    }
                };
            if (d.promise(E).complete = v.add, E.success = E.done, E.error = E.fail, c.url = ((e || c.url || Bn) + "").replace(jn, "").replace(Un, Hn[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = st.trim(c.dataType || "*").toLowerCase().match(wt) || [""], null == c.crossDomain && (r = zn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === Hn[1] && r[2] === Hn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Hn[3] || ("http:" === Hn[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = st.param(c.data, c.traditional)), q(Wn, c, t, E), 2 === b) return E;
            a = c.global, a && 0 === st.active++ && st.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Rn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (Dn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Fn.test(s) ? s.replace(Fn, "$1_=" + _n++) : s + (Dn.test(s) ? "&" : "?") + "_=" + _n++)), c.ifModified && (st.lastModified[s] && E.setRequestHeader("If-Modified-Since", st.lastModified[s]), st.etag[s] && E.setRequestHeader("If-None-Match", st.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", c.contentType), E.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Vn + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) E.setRequestHeader(i, c.headers[i]);
            if (c.beforeSend && (c.beforeSend.call(h, E, c) === !1 || 2 === b)) return E.abort();
            w = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) E[i](c[i]);
            if (f = q(Xn, c, t, E)) {
                E.readyState = 1, a && p.trigger("ajaxSend", [E, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                    E.abort("timeout")
                }, c.timeout));
                try {
                    b = 1, f.send(g, n)
                } catch (S) {
                    if (!(2 > b)) throw S;
                    n(-1, S)
                }
            } else n(-1, "No Transport");
            return E
        },
        getJSON: function (e, t, n) {
            return st.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return st.get(e, void 0, t, "script")
        }
    }), st.each(["get", "post"], function (e, t) {
        st[t] = function (e, n, r, i) {
            return st.isFunction(n) && (i = i || r, r = n, n = void 0), st.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        st.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), st._evalUrl = function (e) {
        return st.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, st.fn.extend({
        wrapAll: function (e) {
            if (st.isFunction(e)) return this.each(function (t) {
                st(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = st(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return this.each(st.isFunction(e) ? function (t) {
                st(this).wrapInner(e.call(this, t))
            } : function () {
                var t = st(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = st.isFunction(e);
            return this.each(function (n) {
                st(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
            }).end()
        }
    }), st.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !rt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || st.css(e, "display"))
    }, st.expr.filters.visible = function (e) {
        return !st.expr.filters.hidden(e)
    };
    var Jn = /%20/g,
        Kn = /\[\]$/,
        Qn = /\r?\n/g,
        Gn = /^(?:submit|button|image|reset|file)$/i,
        Yn = /^(?:input|select|textarea|keygen)/i;
    st.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                t = st.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(e) || e.jquery && !st.isPlainObject(e)) st.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) W(n, e[n], t, i);
        return r.join("&").replace(Jn, "+")
    }, st.fn.extend({
        serialize: function () {
            return st.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = st.prop(this, "elements");
                return e ? st.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !st(this).is(":disabled") && Yn.test(this.nodeName) && !Gn.test(e) && (this.checked || !Mt.test(e))
            }).map(function (e, t) {
                var n = st(this).val();
                return null == n ? null : st.isArray(n) ? st.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Qn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Qn, "\r\n")
                }
            }).get()
        }
    }), st.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || V()
    } : X;
    var Zn = 0,
        er = {},
        tr = st.ajaxSettings.xhr();
    e.ActiveXObject && st(e).on("unload", function () {
        for (var e in er) er[e](void 0, !0)
    }), rt.cors = !!tr && "withCredentials" in tr, tr = rt.ajax = !!tr, tr && st.ajaxTransport(function (e) {
        if (!e.crossDomain || rt.cors) {
            var t;
            return {
                send: function (n, r) {
                    var i, s = e.xhr(),
                        o = ++Zn;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) s[i] = e.xhrFields[i];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && s.setRequestHeader(i, n[i] + "");
                    s.send(e.hasContent && e.data || null), t = function (n, i) {
                        var u, a, f;
                        if (t && (i || 4 === s.readyState))
                            if (delete er[o], t = void 0, s.onreadystatechange = st.noop, i) 4 !== s.readyState && s.abort();
                            else {
                                f = {}, u = s.status, "string" == typeof s.responseText && (f.text = s.responseText);
                                try {
                                    a = s.statusText
                                } catch (l) {
                                    a = ""
                                }
                                u || !e.isLocal || e.crossDomain ? 1223 === u && (u = 204) : u = f.text ? 200 : 404
                            }
                        f && r(u, a, f, s.getAllResponseHeaders())
                    }, e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = er[o] = t : t()
                },
                abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), st.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return st.globalEval(e), e
            }
        }
    }), st.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), st.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = vt.head || st("head")[0] || vt.documentElement;
            return {
                send: function (r, i) {
                    t = vt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var nr = [],
        rr = /(=)\?(?=&|$)|\?\?/;
    st.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = nr.pop() || st.expando + "_" + _n++;
            return this[e] = !0, e
        }
    }), st.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, s, o, u = t.jsonp !== !1 && (rr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && rr.test(t.data) && "data");
        return u || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = st.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace(rr, "$1" + i) : t.jsonp !== !1 && (t.url += (Dn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return o || st.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", s = e[i], e[i] = function () {
            o = arguments
        }, r.always(function () {
            e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, nr.push(i)), o && st.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), st.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || vt;
        var r = ht.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = st.buildFragment([e], t, i), i && i.length && st(i).remove(), st.merge([], r.childNodes))
    };
    var ir = st.fn.load;
    st.fn.load = function (e, t, n) {
        if ("string" != typeof e && ir) return ir.apply(this, arguments);
        var r, i, s, o = this,
            u = e.indexOf(" ");
        return u >= 0 && (r = e.slice(u, e.length), e = e.slice(0, u)), st.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), o.length > 0 && st.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function (e) {
            i = arguments, o.html(r ? st("<div>").append(st.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
            o.each(n, i || [e.responseText, t, e])
        }), this
    }, st.expr.filters.animated = function (e) {
        return st.grep(st.timers, function (t) {
            return e === t.elem
        }).length
    };
    var sr = e.document.documentElement;
    st.offset = {
        setOffset: function (e, t, n) {
            var r, i, s, o, u, a, f, l = st.css(e, "position"),
                c = st(e),
                h = {};
            "static" === l && (e.style.position = "relative"), u = c.offset(), s = st.css(e, "top"), a = st.css(e, "left"), f = ("absolute" === l || "fixed" === l) && st.inArray("auto", [s, a]) > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), st.isFunction(t) && (t = t.call(e, n, u)), null != t.top && (h.top = t.top - u.top + o), null != t.left && (h.left = t.left - u.left + i), "using" in t ? t.using.call(e, h) : c.css(h)
        }
    }, st.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                st.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                s = i && i.ownerDocument;
            return s ? (t = s.documentElement, st.contains(t, i) ? (typeof i.getBoundingClientRect !== xt && (r = i.getBoundingClientRect()), n = $(s), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === st.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), st.nodeName(e[0], "html") || (n = e.offset()), n.top += st.css(e[0], "borderTopWidth", !0), n.left += st.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - st.css(r, "marginTop", !0),
                    left: t.left - n.left - st.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || sr; e && !st.nodeName(e, "html") && "static" === st.css(e, "position");) e = e.offsetParent;
                return e || sr
            })
        }
    }), st.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = /Y/.test(t);
        st.fn[e] = function (r) {
            return Ot(this, function (e, r, i) {
                var s = $(e);
                return void 0 === i ? s ? t in s ? s[t] : s.document.documentElement[r] : e[r] : void(s ? s.scrollTo(n ? st(s).scrollLeft() : i, n ? i : st(s).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), st.each(["top", "left"], function (e, t) {
        st.cssHooks[t] = C(rt.pixelPosition, function (e, n) {
            return n ? (n = sn(e, t), nn.test(n) ? st(e).position()[t] + "px" : n) : void 0
        })
    }), st.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        st.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            st.fn[r] = function (r, i) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    o = n || (r === !0 || i === !0 ? "margin" : "border");
                return Ot(this, function (t, n, r) {
                    var i;
                    return st.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? st.css(t, n, o) : st.style(t, n, r, o)
                }, t, s ? r : void 0, s, null)
            }
        })
    }), st.fn.size = function () {
        return this.length
    }, st.fn.andSelf = st.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return st
    });
    var or = e.jQuery,
        ur = e.$;
    return st.noConflict = function (t) {
        return e.$ === st && (e.$ = ur), t && e.jQuery === st && (e.jQuery = or), st
    }, typeof t === xt && (e.jQuery = e.$ = st), st
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function (t) {
        var n = !1,
            r = this;
        e(this).one(e.support.transition.end, function () {
            n = !0
        });
        var i = function () {
            n || e(r).trigger(e.support.transition.end)
        };
        return setTimeout(i, t), this
    }, e(function () {
        e.support.transition = t()
    })
}(jQuery), + function (e) {
    "use strict";
    var t = '[data-dismiss="alert"]',
        n = function (n) {
            e(n).on("click", t, this.close)
        };
    n.prototype.close = function (t) {
        function n() {
            s.trigger("closed.bs.alert").remove()
        }
        var r = e(this),
            i = r.attr("data-target");
        i || (i = r.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, ""));
        var s = e(i);
        t && t.preventDefault(), s.length || (s = r.hasClass("alert") ? r : r.parent()), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one(e.support.transition.end, n).emulateTransitionEnd(150) : n())
    };
    var r = e.fn.alert;
    e.fn.alert = function (t) {
        return this.each(function () {
            var r = e(this),
                i = r.data("bs.alert");
            i || r.data("bs.alert", i = new n(this)), "string" == typeof t && i[t].call(r)
        })
    }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function () {
        return e.fn.alert = r, this
    }, e(document).on("click.bs.alert.data-api", t, n.prototype.close)
}(jQuery), + function (e) {
    "use strict";
    var t = function (n, r) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.isLoading = !1
    };
    t.DEFAULTS = {
        loadingText: "loading..."
    }, t.prototype.setState = function (t) {
        var n = "disabled",
            r = this.$element,
            i = r.is("input") ? "val" : "html",
            s = r.data();
        t += "Text", s.resetText || r.data("resetText", r[i]()), r[i](s[t] || this.options[t]), setTimeout(e.proxy(function () {
            "loadingText" == t ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
        }, this), 0)
    }, t.prototype.toggle = function () {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        e && this.$element.toggleClass("active")
    };
    var n = e.fn.button;
    e.fn.button = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("bs.button"),
                s = "object" == typeof n && n;
            i || r.data("bs.button", i = new t(this, s)), "toggle" == n ? i.toggle() : n && i.setState(n)
        })
    }, e.fn.button.Constructor = t, e.fn.button.noConflict = function () {
        return e.fn.button = n, this
    }, e(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), t.preventDefault()
    })
}(jQuery), + function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, t.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, t.prototype.getActiveIndex = function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, t.prototype.to = function (t) {
        var n = this,
            r = this.getActiveIndex();
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            n.to(t)
        }) : r == t ? this.pause().cycle() : this.slide(t > r ? "next" : "prev", e(this.$items[t]))
    }, t.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, t.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, t.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, t.prototype.slide = function (t, n) {
        var r = this.$element.find(".item.active"),
            i = n || r[t](),
            s = this.interval,
            o = "next" == t ? "left" : "right",
            u = "next" == t ? "first" : "last",
            a = this;
        if (!i.length) {
            if (!this.options.wrap) return;
            i = this.$element.find(".item")[u]()
        }
        if (i.hasClass("active")) return this.sliding = !1;
        var f = e.Event("slide.bs.carousel", {
            relatedTarget: i[0],
            direction: o
        });
        return this.$element.trigger(f), f.isDefaultPrevented() ? void 0 : (this.sliding = !0, s && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () {
            var t = e(a.$indicators.children()[a.getActiveIndex()]);
            t && t.addClass("active")
        })), e.support.transition && this.$element.hasClass("slide") ? (i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), r.one(e.support.transition.end, function () {
            i.removeClass([t, o].join(" ")).addClass("active"), r.removeClass(["active", o].join(" ")), a.sliding = !1, setTimeout(function () {
                a.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * r.css("transition-duration").slice(0, -1))) : (r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), s && this.cycle(), this)
    };
    var n = e.fn.carousel;
    e.fn.carousel = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("bs.carousel"),
                s = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n),
                o = "string" == typeof n ? n : s.slide;
            i || r.data("bs.carousel", i = new t(this, s)), "number" == typeof n ? i.to(n) : o ? i[o]() : s.interval && i.pause().cycle()
        })
    }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function () {
        return e.fn.carousel = n, this
    }, e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (t) {
        var n = e(this),
            r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = e.extend({}, i.data(), n.data()),
            o = n.attr("data-slide-to");
        o && (s.interval = !1), i.carousel(s), (o = n.attr("data-slide-to")) && i.data("bs.carousel").to(o), t.preventDefault()
    }), e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
            var t = e(this);
            t.carousel(t.data())
        })
    })
}(jQuery), + function (e) {
    "use strict";
    var t = function (n, r) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.DEFAULTS = {
        toggle: !0
    }, t.prototype.dimension = function () {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, t.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t = e.Event("show.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var r = n.data("bs.collapse");
                    if (r && r.transitioning) return;
                    n.collapse("hide"), r || n.data("bs.collapse", null)
                }
                var i = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1;
                var s = function () {
                    this.$element.removeClass("collapsing").addClass("collapse in")[i]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!e.support.transition) return s.call(this);
                var o = e.camelCase(["scroll", i].join("-"));
                this.$element.one(e.support.transition.end, e.proxy(s, this)).emulateTransitionEnd(350)[i](this.$element[0][o])
            }
        }
    }, t.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var r = function () {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return e.support.transition ? void this.$element[n](0).one(e.support.transition.end, e.proxy(r, this)).emulateTransitionEnd(350) : r.call(this)
            }
        }
    }, t.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var n = e.fn.collapse;
    e.fn.collapse = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("bs.collapse"),
                s = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n);
            !i && s.toggle && "show" == n && (n = !n), i || r.data("bs.collapse", i = new t(this, s)), "string" == typeof n && i[n]()
        })
    }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function () {
        return e.fn.collapse = n, this
    }, e(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (t) {
        var n = e(this),
            r, i = n.attr("data-target") || t.preventDefault() || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""),
            s = e(i),
            o = s.data("bs.collapse"),
            u = o ? "toggle" : n.data(),
            a = n.attr("data-parent"),
            f = a && e(a);
        o && o.transitioning || (f && f.find('[data-toggle=collapse][data-parent="' + a + '"]').not(n).addClass("collapsed"), n[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), s.collapse(u)
    })
}(jQuery), + function (e) {
    "use strict";

    function t(t) {
        e(r).remove(), e(i).each(function () {
            var r = n(e(this)),
                i = {
                    relatedTarget: this
                };
            r.hasClass("open") && (r.trigger(t = e.Event("hide.bs.dropdown", i)), t.isDefaultPrevented() || r.removeClass("open").trigger("hidden.bs.dropdown", i))
        })
    }

    function n(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
    }
    var r = ".dropdown-backdrop",
        i = "[data-toggle=dropdown]",
        s = function (t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    s.prototype.toggle = function (r) {
        var i = e(this);
        if (!i.is(".disabled, :disabled")) {
            var s = n(i),
                o = s.hasClass("open");
            if (t(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                var u = {
                    relatedTarget: this
                };
                if (s.trigger(r = e.Event("show.bs.dropdown", u)), r.isDefaultPrevented()) return;
                s.toggleClass("open").trigger("shown.bs.dropdown", u), i.focus()
            }
            return !1
        }
    }, s.prototype.keydown = function (t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var r = e(this);
            if (t.preventDefault(), t.stopPropagation(), !r.is(".disabled, :disabled")) {
                var s = n(r),
                    o = s.hasClass("open");
                if (!o || o && 27 == t.keyCode) return 27 == t.which && s.find(i).focus(), r.click();
                var u = " li:not(.divider):visible a",
                    a = s.find("[role=menu]" + u + ", [role=listbox]" + u);
                if (a.length) {
                    var f = a.index(a.filter(":focus"));
                    38 == t.keyCode && f > 0 && f--, 40 == t.keyCode && f < a.length - 1 && f++, ~f || (f = 0), a.eq(f).focus()
                }
            }
        }
    };
    var o = e.fn.dropdown;
    e.fn.dropdown = function (t) {
        return this.each(function () {
            var n = e(this),
                r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new s(this)), "string" == typeof t && r[t].call(n)
        })
    }, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = o, this
    }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, s.prototype.toggle).on("keydown.bs.dropdown.data-api", i + ", [role=menu], [role=listbox]", s.prototype.keydown)
}(jQuery), + function (e) {
    "use strict";
    var t = function (t, n) {
        this.options = n, this.$element = e(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.prototype.toggle = function (e) {
        return this[this.isShown ? "hide" : "show"](e)
    }, t.prototype.show = function (t) {
        var n = this,
            r = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function () {
            var r = e.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show().scrollTop(0), r && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var i = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            r ? n.$element.find(".modal-dialog").one(e.support.transition.end, function () {
                n.$element.focus().trigger(i)
            }).emulateTransitionEnd(300) : n.$element.focus().trigger(i)
        }))
    }, t.prototype.hide = function (t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, t.prototype.enforceFocus = function () {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
        }, this))
    }, t.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function (e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, t.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(), this.backdrop(function () {
            e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
        })
    }, t.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, t.prototype.backdrop = function (t) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && n;
            if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", e.proxy(function (e) {
                e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
    };
    var n = e.fn.modal;
    e.fn.modal = function (n, r) {
        return this.each(function () {
            var s = e(this),
                o = s.data("bs.modal"),
                u = e.extend({}, t.DEFAULTS, s.data(), "object" == typeof n && n);
            o || s.data("bs.modal", o = new t(this, u)), "string" == typeof n ? o[n](r) : u.show && o.show(r)
        })
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function () {
        return e.fn.modal = n, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var n = e(this),
            r = n.attr("href"),
            i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = i.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(r) && r
            }, i.data(), n.data());
        n.is("a") && t.preventDefault(), i.modal(s, this).one("hide", function () {
            n.is(":visible") && n.focus()
        })
    }), e(document).on("show.bs.modal", ".modal", function () {
        e(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function () {
        e(document.body).removeClass("modal-open")
    })
}(jQuery), + function (e) {
    "use strict";
    var t = function (e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    };
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, t.prototype.init = function (t, n, r) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r);
        for (var i = this.options.trigger.split(" "), s = i.length; s--;) {
            var o = i[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != o) {
                var u = "hover" == o ? "mouseenter" : "focusin",
                    a = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, t.prototype.getDefaults = function () {
        return t.DEFAULTS
    }, t.prototype.getOptions = function (t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, t.prototype.getDelegateOptions = function () {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function (e, r) {
            n[e] != r && (t[e] = r)
        }), t
    }, t.prototype.enter = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, t.prototype.leave = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, t.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(t), t.isDefaultPrevented()) return;
            var n = this,
                r = this.tip();
            this.setContent(), this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                s = /\s?auto?\s?/i,
                o = s.test(i);
            o && (i = i.replace(s, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var u = this.getPosition(),
                a = r[0].offsetWidth,
                f = r[0].offsetHeight;
            if (o) {
                var l = this.$element.parent(),
                    c = i,
                    h = document.documentElement.scrollTop || document.body.scrollTop,
                    p = "body" == this.options.container ? window.innerWidth : l.outerWidth(),
                    d = "body" == this.options.container ? window.innerHeight : l.outerHeight(),
                    v = "body" == this.options.container ? 0 : l.offset().left;
                i = "bottom" == i && u.top + u.height + f - h > d ? "top" : "top" == i && u.top - h - f < 0 ? "bottom" : "right" == i && u.right + a > p ? "left" : "left" == i && u.left - a < v ? "right" : i, r.removeClass(c).addClass(i)
            }
            var m = this.getCalculatedOffset(i, u, a, f);
            this.applyPlacement(m, i), this.hoverState = null;
            var g = function () {
                n.$element.trigger("shown.bs." + n.type)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one(e.support.transition.end, g).emulateTransitionEnd(150) : g()
        }
    }, t.prototype.applyPlacement = function (t, n) {
        var r, i = this.tip(),
            s = i[0].offsetWidth,
            o = i[0].offsetHeight,
            u = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(u) && (u = 0), isNaN(a) && (a = 0), t.top = t.top + u, t.left = t.left + a, e.offset.setOffset(i[0], e.extend({
            using: function (e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var f = i[0].offsetWidth,
            l = i[0].offsetHeight;
        if ("top" == n && l != o && (r = !0, t.top = t.top + o - l), /bottom|top/.test(n)) {
            var c = 0;
            t.left < 0 && (c = -2 * t.left, t.left = 0, i.offset(t), f = i[0].offsetWidth, l = i[0].offsetHeight), this.replaceArrow(c - s + f, f, "left")
        } else this.replaceArrow(l - o, l, "top");
        r && i.offset(t)
    }, t.prototype.replaceArrow = function (e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    }, t.prototype.setContent = function () {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function () {
        function t() {
            "in" != n.hoverState && r.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            r = this.tip(),
            i = e.Event("hide.bs." + this.type);
        return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r.one(e.support.transition.end, t).emulateTransitionEnd(150) : t(), this.hoverState = null, this)
    }, t.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, t.prototype.hasContent = function () {
        return this.getTitle()
    }, t.prototype.getPosition = function () {
        var t = this.$element[0];
        return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
            width: t.offsetWidth,
            height: t.offsetHeight
        }, this.$element.offset())
    }, t.prototype.getCalculatedOffset = function (e, t, n, r) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - r,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }, t.prototype.getTitle = function () {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, t.prototype.tip = function () {
        return this.$tip = this.$tip || e(this.options.template)
    }, t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, t.prototype.enable = function () {
        this.enabled = !0
    }, t.prototype.disable = function () {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function (t) {
        var n = t ? e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, t.prototype.destroy = function () {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("bs.tooltip"),
                s = "object" == typeof n && n;
            (i || "destroy" != n) && (i || r.data("bs.tooltip", i = new t(this, s)), "string" == typeof n && i[n]())
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = n, this
    }
}(jQuery), + function (e) {
    "use strict";
    var t = function (e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function () {
        return t.DEFAULTS
    }, t.prototype.setContent = function () {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, t.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, t.prototype.getContent = function () {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, t.prototype.tip = function () {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var n = e.fn.popover;
    e.fn.popover = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("bs.popover"),
                s = "object" == typeof n && n;
            (i || "destroy" != n) && (i || r.data("bs.popover", i = new t(this, s)), "string" == typeof n && i[n]())
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function () {
        return e.fn.popover = n, this
    }
}(jQuery), + function (e) {
    "use strict";

    function t(n, r) {
        var i, s = e.proxy(this.process, this);
        this.$element = e(e(n).is("body") ? window : n), this.$body = e("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", s), this.options = e.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || (i = e(n).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = e([]), this.targets = e([]), this.activeTarget = null, this.refresh(), this.process()
    }
    t.DEFAULTS = {
        offset: 10
    }, t.prototype.refresh = function () {
        var t = this.$element[0] == window ? "offset" : "position";
        this.offsets = e([]), this.targets = e([]);
        var n = this,
            r = this.$body.find(this.selector).map(function () {
                var r = e(this),
                    i = r.data("target") || r.attr("href"),
                    s = /^#./.test(i) && e(i);
                return s && s.length && s.is(":visible") && [
                    [s[t]().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), i]
                ] || null
            }).sort(function (e, t) {
                return e[0] - t[0]
            }).each(function () {
                n.offsets.push(this[0]), n.targets.push(this[1])
            })
    }, t.prototype.process = function () {
        var e = this.$scrollElement.scrollTop() + this.options.offset,
            t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            n = t - this.$scrollElement.height(),
            r = this.offsets,
            i = this.targets,
            s = this.activeTarget,
            o;
        if (e >= n) return s != (o = i.last()[0]) && this.activate(o);
        if (s && e <= r[0]) return s != (o = i[0]) && this.activate(o);
        for (o = r.length; o--;) s != i[o] && e >= r[o] && (!r[o + 1] || e <= r[o + 1]) && this.activate(i[o])
    }, t.prototype.activate = function (t) {
        this.activeTarget = t, e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            r = e(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("bs.scrollspy"),
                s = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new t(this, s)), "string" == typeof n && i[n]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function () {
        return e.fn.scrollspy = n, this
    }, e(window).on("load", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(jQuery), + function (e) {
    "use strict";
    var t = function (t) {
        this.element = e(t)
    };
    t.prototype.show = function () {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            r = t.data("target");
        if (r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a")[0],
                s = e.Event("show.bs.tab", {
                    relatedTarget: i
                });
            if (t.trigger(s), !s.isDefaultPrevented()) {
                var o = e(r);
                this.activate(t.parent("li"), n), this.activate(o, o.parent(), function () {
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i
                    })
                })
            }
        }
    }, t.prototype.activate = function (t, n, r) {
        function i() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
        }
        var s = n.find("> .active"),
            o = r && e.support.transition && s.hasClass("fade");
        o ? s.one(e.support.transition.end, i).emulateTransitionEnd(150) : i(), s.removeClass("in")
    };
    var n = e.fn.tab;
    e.fn.tab = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("bs.tab");
            i || r.data("bs.tab", i = new t(this)), "string" == typeof n && i[n]()
        })
    }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function () {
        return e.fn.tab = n, this
    }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
        t.preventDefault(), e(this).tab("show")
    })
}(jQuery), + function (e) {
    "use strict";
    var t = function (n, r) {
        this.options = e.extend({}, t.DEFAULTS, r), this.$window = e(window).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(n), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
        offset: 0
    }, t.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var e = this.$window.scrollTop(),
            n = this.$element.offset();
        return this.pinnedOffset = n.top - e
    }, t.prototype.checkPositionWithEventLoop = function () {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, t.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var n = e(document).height(),
                r = this.$window.scrollTop(),
                i = this.$element.offset(),
                s = this.options.offset,
                o = s.top,
                u = s.bottom;
            "top" == this.affixed && (i.top += r), "object" != typeof s && (u = o = s), "function" == typeof o && (o = s.top(this.$element)), "function" == typeof u && (u = s.bottom(this.$element));
            var a = null != this.unpin && r + this.unpin <= i.top ? !1 : null != u && i.top + this.$element.height() >= n - u ? "bottom" : null != o && o >= r ? "top" : !1;
            if (this.affixed !== a) {
                this.unpin && this.$element.css("top", "");
                var f = "affix" + (a ? "-" + a : ""),
                    l = e.Event(f + ".bs.affix");
                this.$element.trigger(l), l.isDefaultPrevented() || (this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(f).trigger(e.Event(f.replace("affix", "affixed"))), "bottom" == a && this.$element.offset({
                    top: n - u - this.$element.height()
                }))
            }
        }
    };
    var n = e.fn.affix;
    e.fn.affix = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("bs.affix"),
                s = "object" == typeof n && n;
            i || r.data("bs.affix", i = new t(this, s)), "string" == typeof n && i[n]()
        })
    }, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function () {
        return e.fn.affix = n, this
    }, e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
            var t = e(this),
                n = t.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
        })
    })
}(jQuery), ! function (e) {
    "use strict";

    function t(e) {
        setTimeout(function () {
            n.removeClass("off-canvas"), r = void 0
        }, e)
    }
    var n = e(".app"),
        r, i = e(window),
        s = 300;
    e(".main-content").append('<div class="site-overlay"></div>'), e(document).on("click", "[data-toggle=off-canvas]", function (u) {
        u.preventDefault(), i.width() >= 767 && (s = 0), e(this).data("move") === r && t(s), void 0 !== e(this).data("move") && "rtl" === e(this).data("move") ? (n.toggleClass("move-right").removeClass("move-left"), r = "rtl") : (n.toggleClass("move-left").removeClass("move-right"), r = "ltr"), (n.hasClass("move-right") || n.hasClass("move-left")) && n.addClass("off-canvas")
    }), e(".main-content").on("click", ".site-overlay", function (e) {
        e.preventDefault(), i.width() >= 767 && (s = 0), (n.hasClass("move-right") || n.hasClass("move-left")) && t(s), n.hasClass("move-right") && n.toggleClass("move-right"), n.hasClass("move-left") && n.toggleClass("move-left")
    })
}(window.jQuery),
function () {
    var e, t, n, r, i, s, o;
    r = function (e, t) {
        var n, r, i, s;
        s = [];
        for (r in t.prototype) try {
            i = t.prototype[r], s.push(null == e[r] && "function" != typeof i ? e[r] = i : void 0)
        } catch (o) {
            n = o
        }
        return s
    }, e = {}, null == e.options && (e.options = {}), n = {
        checks: {
            xhr: {
                url: function () {
                    return "/favicon.ico?_=" + Math.floor(1e9 * Math.random())
                },
                timeout: 5e3
            },
            image: {
                url: function () {
                    return "/favicon.ico?_=" + Math.floor(1e9 * Math.random())
                }
            },
            active: "xhr"
        },
        checkOnLoad: !1,
        interceptRequests: !0,
        reconnect: !0
    }, i = function (e, t) {
        var n, r, i, s, o, u;
        for (n = e, s = t.split("."), r = o = 0, u = s.length; u > o && (i = s[r], n = n[i], "object" == typeof n); r = ++o);
        return r === s.length - 1 ? n : void 0
    }, e.getOption = function (t) {
        var r, s;
        return r = null != (s = i(e.options, t)) ? s : i(n, t), "function" == typeof r ? r() : r
    }, "function" == typeof window.addEventListener && window.addEventListener("online", function () {
        return setTimeout(e.confirmUp, 100)
    }, !1), "function" == typeof window.addEventListener && window.addEventListener("offline", function () {
        return e.confirmDown()
    }, !1), e.state = "up", e.markUp = function () {
        return e.trigger("confirmed-up"), "up" !== e.state ? (e.state = "up", e.trigger("up")) : void 0
    }, e.markDown = function () {
        return e.trigger("confirmed-down"), "down" !== e.state ? (e.state = "down", e.trigger("down")) : void 0
    }, s = {}, e.on = function (t, n, r) {
        var i, o, u, a, f;
        if (o = t.split(" "), o.length > 1) {
            for (f = [], u = 0, a = o.length; a > u; u++) i = o[u], f.push(e.on(i, n, r));
            return f
        }
        return null == s[t] && (s[t] = []), s[t].push([r, n])
    }, e.off = function (e, t) {
        var n, r, i, o, u;
        if (null != s[e]) {
            if (t) {
                for (r = 0, u = []; r < s[e].length;) o = s[e][r], n = o[0], i = o[1], u.push(i === t ? s[e].splice(r, 1) : r++);
                return u
            }
            return s[e] = []
        }
    }, e.trigger = function (e) {
        var t, n, r, i, o, u, a;
        if (null != s[e]) {
            for (o = s[e], a = [], r = 0, i = o.length; i > r; r++) u = o[r], t = u[0], n = u[1], a.push(n.call(t));
            return a
        }
    }, t = function (e, t, n) {
        var r, i;
        return r = function () {
            return e.status && e.status < 12e3 ? t() : n()
        }, null === e.onprogress ? (e.addEventListener("error", n, !1), e.addEventListener("timeout", n, !1), e.addEventListener("load", r, !1)) : (i = e.onreadystatechange, e.onreadystatechange = function () {
            return 4 === e.readyState ? r() : 0 === e.readyState && n(), "function" == typeof i ? i.apply(null, arguments) : void 0
        })
    }, e.checks = {}, e.checks.xhr = function () {
        var n, r;
        r = new XMLHttpRequest, r.offline = !1, r.open("HEAD", e.getOption("checks.xhr.url"), !0), null != r.timeout && (r.timeout = e.getOption("checks.xhr.timeout")), t(r, e.markUp, e.markDown);
        try {
            r.send()
        } catch (i) {
            n = i, e.markDown()
        }
        return r
    }, e.checks.image = function () {
        var t;
        return t = document.createElement("img"), t.onerror = e.markDown, t.onload = e.markUp, void(t.src = e.getOption("checks.image.url"))
    }, e.checks.down = e.markDown, e.checks.up = e.markUp, e.check = function () {
        return e.trigger("checking"), e.checks[e.getOption("checks.active")]()
    }, e.confirmUp = e.confirmDown = e.check, e.onXHR = function (e) {
        var t, n, i;
        return t = function (t, n) {
            var r;
            return r = t.open, t.open = function (i, s, o, u, a) {
                return e({
                    type: i,
                    url: s,
                    async: o,
                    flags: n,
                    user: u,
                    password: a,
                    xhr: t
                }), r.apply(t, arguments)
            }
        }, i = window.XMLHttpRequest, window.XMLHttpRequest = function (e) {
            var n, r, s;
            return n = new i(e), t(n, e), s = n.setRequestHeader, n.headers = {}, n.setRequestHeader = function (e, t) {
                return n.headers[e] = t, s.call(n, e, t)
            }, r = n.overrideMimeType, n.overrideMimeType = function (e) {
                return n.mimeType = e, r.call(n, e)
            }, n
        }, r(window.XMLHttpRequest, i), null != window.XDomainRequest ? (n = window.XDomainRequest, window.XDomainRequest = function () {
            var e;
            return e = new n, t(e), e
        }, r(window.XDomainRequest, n)) : void 0
    }, o = function () {
        return e.getOption("interceptRequests") && e.onXHR(function (n) {
            var r;
            return r = n.xhr, r.offline !== !1 ? t(r, e.confirmUp, e.confirmDown) : void 0
        }), e.getOption("checkOnLoad") ? e.check() : void 0
    }, setTimeout(o, 0), window.Offline = e
}.call(this),
function () {
    var e, t, n, r, i, s, o, u, a;
    if (!window.Offline) throw new Error("Offline Reconnect brought in without offline.js");
    r = Offline.reconnect = {}, s = null, i = function () {
        var e;
        return null != r.state && "inactive" !== r.state && Offline.trigger("reconnect:stopped"), r.state = "inactive", r.remaining = r.delay = null != (e = Offline.getOption("reconnect.initialDelay")) ? e : 3
    }, t = function () {
        var e, t;
        return e = null != (t = Offline.getOption("reconnect.delay")) ? t : Math.min(Math.ceil(1.5 * r.delay), 3600), r.remaining = r.delay = e
    }, o = function () {
        return "connecting" !== r.state ? (r.remaining -= 1, Offline.trigger("reconnect:tick"), 0 === r.remaining ? u() : void 0) : void 0
    }, u = function () {
        return "waiting" === r.state ? (Offline.trigger("reconnect:connecting"), r.state = "connecting", Offline.check()) : void 0
    }, e = function () {
        return Offline.getOption("reconnect") ? (i(), r.state = "waiting", Offline.trigger("reconnect:started"), s = setInterval(o, 1e3)) : void 0
    }, a = function () {
        return null != s && clearInterval(s), i()
    }, n = function () {
        return Offline.getOption("reconnect") && "connecting" === r.state ? (Offline.trigger("reconnect:failure"), r.state = "waiting", t()) : void 0
    }, r.tryNow = u, i(), Offline.on("down", e), Offline.on("confirmed-down", n), Offline.on("up", a)
}.call(this),
function () {
    var e, t, n, r, i, s;
    if (!window.Offline) throw new Error("Requests module brought in without offline.js");
    n = [], s = !1, r = function (e) {
        return Offline.trigger("requests:capture"), "down" !== Offline.state && (s = !0), n.push(e)
    }, i = function (e) {
        var t, n, r, i, s, o, u, a, f;
        a = e.xhr, s = e.url, i = e.type, o = e.user, r = e.password, t = e.body, a.abort(), a.open(i, s, !0, o, r), f = a.headers;
        for (n in f) u = f[n], a.setRequestHeader(n, u);
        return a.mimeType && a.overrideMimeType(a.mimeType), a.send(t)
    }, e = function () {
        return n = []
    }, t = function () {
        var t, r, s, u, a, f;
        for (Offline.trigger("requests:flush"), s = {}, a = 0, f = n.length; f > a; a++) r = n[a], u = r.url.replace(/(\?|&)_=[0-9]+/, function (e, t) {
            return "?" === t ? t : ""
        }), s["" + r.type.toUpperCase() + " - " + u] = r;
        for (t in s) r = s[t], i(r);
        return e()
    }, setTimeout(function () {
        return Offline.getOption("requests") !== !1 ? (Offline.on("confirmed-up", function () {
            return s ? (s = !1, e()) : void 0
        }), Offline.on("up", t), Offline.on("down", function () {
            return s = !1
        }), Offline.onXHR(function (e) {
            var t, n, i, s, o;
            return i = e.xhr, t = e.async, i.offline !== !1 && (n = function () {
                return r(e)
            }, o = i.send, i.send = function (t) {
                return e.body = t, o.apply(i, arguments)
            }, t) ? null === i.onprogress ? (i.addEventListener("error", n, !1), i.addEventListener("timeout", n, !1)) : (s = i.onreadystatechange, i.onreadystatechange = function () {
                return 0 === i.readyState ? n() : 4 === i.readyState && (0 === i.status || i.status >= 12e3) && n(), "function" == typeof s ? s.apply(null, arguments) : void 0
            }) : void 0
        }), Offline.requests = {
            flush: t,
            clear: e
        }) : void 0
    }, 0)
}.call(this),
function () {
    var e, t, n, r, i;
    if (!Offline) throw new Error("Offline simulate brought in without offline.js");
    for (i = ["up", "down"], n = 0, r = i.length; r > n; n++) e = i[n], (document.querySelector("script[data-simulate='" + e + "']") || localStorage.OFFLINE_SIMULATE === e) && (null == Offline.options && (Offline.options = {}), null == (t = Offline.options).checks && (t.checks = {}), Offline.options.checks.active = e)
}.call(this);

/*
function () {
    var e, t, n, r, i, s, o, u, a, f, l, c, h;
    if (!window.Offline) throw new Error("Offline UI brought in without offline.js");
    t = '<div class="offline-ui"><div class="offline-ui-content"></div></div>', e = '<a href class="offline-ui-retry"></a>', i = function (e) {
        var t;
        return t = document.createElement("div"), t.innerHTML = e, t.children[0]
    }, s = r = null, n = function (e) {
        return f(e), s.className += " " + e
    }, f = function (e) {
        return s.className = s.className.replace(new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"), " ")
    }, u = {}, o = function (e, t) {
        return n(e), null != u[e] && clearTimeout(u[e]), u[e] = setTimeout(function () {
            return f(e), delete u[e]
        }, 1e3 * t)
    }, c = function (e) {
        var t, n, r, i;
        r = {
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1
        };
        for (n in r)
            if (t = r[n], e >= t) return i = Math.floor(e / t), [i, n];
        return ["now", ""]
    }, l = function () {
        var o, u;
        return s = i(t), document.body.appendChild(s), null != Offline.reconnect && Offline.getOption("reconnect") && (s.appendChild(i(e)), o = s.querySelector(".offline-ui-retry"), u = function (e) {
            return e.preventDefault(), Offline.reconnect.tryNow()
        }, null != o.addEventListener ? o.addEventListener("click", u, !1) : o.attachEvent("click", u)), n("offline-ui-" + Offline.state), r = s.querySelector(".offline-ui-content")
    }, a = function () {
        return l(), Offline.on("up", function () {
            return f("offline-ui-down"), n("offline-ui-up"), o("offline-ui-up-2s", 2), o("offline-ui-up-5s", 5)
        }), Offline.on("down", function () {
            return f("offline-ui-up"), n("offline-ui-down"), o("offline-ui-down-2s", 2), o("offline-ui-down-5s", 5)
        }), Offline.on("reconnect:connecting", function () {
            return n("offline-ui-connecting"), f("offline-ui-waiting")
        }), Offline.on("reconnect:tick", function () {
            var e, t, i;
            return n("offline-ui-waiting"), f("offline-ui-connecting"), i = c(Offline.reconnect.remaining), e = i[0], t = i[1], r.setAttribute("data-retry-in-value", e), r.setAttribute("data-retry-in-unit", t)
        }), Offline.on("reconnect:stopped", function () {
            return f("offline-ui-connecting offline-ui-waiting"), r.setAttribute("data-retry-in-value", null), r.setAttribute("data-retry-in-unit", null)
        }), Offline.on("reconnect:failure", function () {
            return o("offline-ui-reconnect-failed-2s", 2), o("offline-ui-reconnect-failed-5s", 5)
        }), Offline.on("reconnect:success", function () {
            return o("offline-ui-reconnect-succeeded-2s", 2), o("offline-ui-reconnect-succeeded-5s", 5)
        })
    }, "complete" === document.readyState ? a() : null != document.addEventListener ? document.addEventListener("DOMContentLoaded", a, !1) : (h = document.onreadystatechange, document.onreadystatechange = function () {
        return "complete" === document.readyState && a(), "function" == typeof h ? h.apply(null, arguments) : void 0
    })
}.call(this);
*/

var options = {
        storageName: "cameo",
        menuStateStorage: !0
    },
    app = {
        initialize: function () {
            Modernizr.localstorage && "locked" !== $(".app").data("sidebar") && app.menuState()
        },
        menuState: function () {
            null !== window.localStorage.getItem(options.storageName + "_navigation") && options.menuStateStorage === !0 && ("0" === window.localStorage.getItem(options.storageName + "_navigation") ? app.openMenuState() : app.closeMenuState())
        },
        closeMenuState: function () {
            $(".app").addClass("small-sidebar"), $(".toggle-sidebar  i").removeClass("fa-angle-left").addClass("fa-angle-right")
        },
        openMenuState: function () {
            $(".app").removeClass("small-sidebar"), $(".toggle-sidebar i").removeClass("fa-angle-right").addClass("fa-angle-left")
        }
    };
! function (e) {
    "use strict";

    function t(t) {
        e(t).block({
            message: '<div class="loader"><i class="fa fa-spinner fa-spin"></i></div>',
            css: {
                border: "none",
                backgroundColor: "none"
            },
            overlayCSS: {
                backgroundColor: "#fff",
                opacity: .5
            }
        })
    }
    e(function () {
        e.isFunction(e.fn.wizard) && e("#datepicker").datepicker(), e.isFunction(e.fn.wizard) && e(".wizard").wizard(), e.isFunction(e.fn.pillbox) && e(".pillbox").pillbox(), e.isFunction(e.fn.spinner) && e(".spinner").spinner(), e.isFunction(e.fn.selectpicker) && e("select").selectpicker(), e(".no-touch .slimscroll").each(function () {
            var t = e(this).data();
            e(this).slimScroll(t)
        }), e.isFunction(e.fn.audioPlayer) && e("audio").audioPlayer(), e(document).on("click", ".view-options label", function (t) {
            t.preventDefault(), "grid" === e(this).data("view") ? e(".switcher").addClass("view-grid").removeClass("view-list") : "list" === e(this).data("view") && e(".switcher").addClass("view-list").removeClass("view-grid")
        }), e(document).on("click", ".toggle-sidebar ", function (t) {
            t.preventDefault(), e(".app").hasClass("small-sidebar") ? (app.openMenuState(), window.localStorage.setItem(options.storageName + "_navigation", "0")) : (app.closeMenuState(), window.localStorage.setItem(options.storageName + "_navigation", "1"))
        }), e(document).on("click", ".dropdown-menu .settings", function (e) {
            e.stopPropagation()
        }), e(document).on("click", ".toggle-active", function (t) {
            t.preventDefault(), e(this).toggleClass("active")
        }), e(document).on("click", ".help", function (t) {
            t.preventDefault(), t.stopPropagation(), e(this).toggleClass("active"), e(".about-app").hasClass("open") ? (e(".about-app").removeClass("pulse").addClass("bounceOut"), window.setTimeout(function () {
                e(".about-app").removeClass("open")
            }, 1e3)) : e(".about-app").removeClass("bounceOut").addClass("pulse").addClass("open")
        }), e(document).on("click", ".panel-collapsible", function (t) {
            t.preventDefault(), t.stopPropagation();
            var n = e(this).parents(".panel").children(".panel-body");
            e(this).hasClass("fa-chevron-down") ? (e(this).removeClass("fa-chevron-down").addClass("fa-chevron-up"), n.slideUp(200)) : (e(this).removeClass("fa-chevron-up").addClass("fa-chevron-down"), n.slideDown(200))
        }), e(document).on("click", ".panel-remove", function (t) {
            t.preventDefault(), t.stopPropagation(), e(this).parents(".panel").addClass("animated fadeOutRight").attr("id", "obsolete"), setTimeout(function () {
                e("#obsolete").remove()
            }, 600)
        }), e(document).on("click", ".panel-refresh", function (n) {
            n.preventDefault(), n.stopPropagation();
            var r = e(this).parents(".panel");
            t(r), window.setTimeout(function () {
                e(r).unblock()
            }, 3e3)
        }), e(document).on("click", ".collapsible .main-navigation > ul > li > a", function (t) {
            t.stopPropagation();
            var n = e(this).next(),
                r = e(this).closest("li");
            return e(".collapsible li").removeClass("collapse-open"), r.addClass("collapse-open"), n.is("ul") && n.is(":visible") && !e(".app").hasClass("small-sidebar") && (r.removeClass("collapse-open").removeClass("open"), n.slideUp()), !n.is("ul") || n.is(":visible") || e(".app").hasClass("small-sidebar") || (e(".collapsible ul ul:visible").slideUp(), n.slideDown(), r.addClass("collapse-open")), n.is("ul") ? !1 : !0
        }), app.initialize()
    })
}(window.jQuery)