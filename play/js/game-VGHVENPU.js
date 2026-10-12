import {E as Yt, F as Sl, G as np, H as op, J as Re, K as Qa, L as Wu, M as ap, N as ip, O as Gi, a as F0, f as W0, g as Fu, j as $e, k as q0, l as xe, m as V0, n as J0, o as K0, p as X0, q as Z0, r as Q0, s as ep, t as tp} from "./chunk-F7YJRE45.js";
import {a as bo, b as Al, c as Rl, d as rp, e as sp, f as Hl, g as ei, h as ti, i as lp, j as cp, k as up, l as gn, m as Fo, n as ni, o as dp, p as hp, q as fp, r as qu, s as Uu, t as ji} from "./chunk-GGNNUNFX.js";
import {$a as mt, B as ze, C as ae, D as yo, E as I0, H as Ke, I as fe, J as P0, K as oe, L as Pn, M as Yr, N as Ml, O as wo, P as Ue, Q as L0, R as N0, S as Ln, T as O0, U as Me, V as B0, W as ju, X as _0, Y as G0, Ya as Y0, Z as Du, _ as j0, ab as ee, bb as Wr, c as S0, ca as D0, cb as ie, d as A0, db as Nn, e as tn, eb as U0, f as kl, fb as ka, g as jr, gb as $l, h as qe, hb as Bi, i as Dr, ib as _i, j as Oi, jb as Xn, k as Xa, kb as va, l as Z, m as Kt, mb as mn, n as Fr, nb as qr, o as R0, p as Ae, pb as Yu, q as jo, qb as Xt, r as H0, rb as Do, s as vl, t as Za, u as Gu, v as z0, w as Cl, y as El, z as Tl} from "./chunk-YSUX7QB5.js";
import "./chunk-O2XFH626.js";
function Ca(e, t=!1) {
    let n = e[0].index !== null
      , o = new Set(Object.keys(e[0].attributes))
      , a = new Set(Object.keys(e[0].morphAttributes))
      , i = {}
      , r = {}
      , s = e[0].morphTargetsRelative
      , l = new Cl
      , u = 0;
    for (let d = 0; d < e.length; ++d) {
        let c = e[d]
          , p = 0;
        if (n !== (c.index !== null))
            return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + d + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),
            null;
        for (let f in c.attributes) {
            if (!o.has(f))
                return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + d + '. All geometries must have compatible attributes; make sure "' + f + '" attribute exists among all geometries, or in none of them.'),
                null;
            i[f] === void 0 && (i[f] = []),
            i[f].push(c.attributes[f]),
            p++
        }
        if (p !== o.size)
            return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + d + ". Make sure all geometries have the same number of attributes."),
            null;
        if (s !== c.morphTargetsRelative)
            return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + d + ". .morphTargetsRelative must be consistent throughout all geometries."),
            null;
        for (let f in c.morphAttributes) {
            if (!a.has(f))
                return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + d + ".  .morphAttributes must be consistent throughout all geometries."),
                null;
            r[f] === void 0 && (r[f] = []),
            r[f].push(c.morphAttributes[f])
        }
        if (t) {
            let f;
            if (n)
                f = c.index.count;
            else if (c.attributes.position !== void 0)
                f = c.attributes.position.count;
            else
                return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + d + ". The geometry must have either an index or a position attribute"),
                null;
            l.addGroup(u, f, d),
            u += f
        }
    }
    if (n) {
        let d = 0
          , c = [];
        for (let p = 0; p < e.length; ++p) {
            let f = e[p].index;
            for (let b = 0; b < f.count; ++b)
                c.push(f.getX(b) + d);
            d += e[p].attributes.position.count
        }
        l.setIndex(c)
    }
    for (let d in i) {
        let c = pp(i[d]);
        if (!c)
            return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + d + " attribute."),
            null;
        l.setAttribute(d, c)
    }
    for (let d in r) {
        let c = r[d][0].length;
        if (c !== 0) {
            l.morphAttributes = l.morphAttributes || {},
            l.morphAttributes[d] = [];
            for (let p = 0; p < c; ++p) {
                let f = [];
                for (let $ = 0; $ < r[d].length; ++$)
                    f.push(r[d][$][p]);
                let b = pp(f);
                if (!b)
                    return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + d + " morphAttribute."),
                    null;
                l.morphAttributes[d].push(b)
            }
        }
    }
    return l
}
function pp(e) {
    let t, n, o, a = -1, i = 0;
    for (let u = 0; u < e.length; ++u) {
        let d = e[u];
        if (t === void 0 && (t = d.array.constructor),
        t !== d.array.constructor)
            return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),
            null;
        if (n === void 0 && (n = d.itemSize),
        n !== d.itemSize)
            return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),
            null;
        if (o === void 0 && (o = d.normalized),
        o !== d.normalized)
            return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),
            null;
        if (a === -1 && (a = d.gpuType),
        a !== d.gpuType)
            return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),
            null;
        i += d.count * n
    }
    let r = new t(i)
      , s = new Za(r,n,o)
      , l = 0;
    for (let u = 0; u < e.length; ++u) {
        let d = e[u];
        if (d.isInterleavedBufferAttribute) {
            let c = l / n;
            for (let p = 0, f = d.count; p < f; p++)
                for (let b = 0; b < n; b++) {
                    let $ = d.getComponent(p, b);
                    s.setComponent(p + c, b, $)
                }
        } else
            r.set(d.array, l);
        l += d.count * n
    }
    return a !== void 0 && (s.gpuType = a),
    s
}
var mp = new Z
  , i1 = new Xa
  , gp = new Z
  , zl = class extends R0 {
    constructor(t=document.createElement("div")) {
        super(),
        this.isCSS3DObject = !0,
        this.element = t,
        this.element.style.position = "absolute",
        this.element.style.pointerEvents = "auto",
        this.element.style.userSelect = "none",
        this.element.setAttribute("draggable", !1),
        this.addEventListener("removed", function() {
            this.traverse(function(n) {
                n.element && n.element instanceof n.element.ownerDocument.defaultView.Element && n.element.parentNode !== null && n.element.remove()
            })
        })
    }
    copy(t, n) {
        return super.copy(t, n),
        this.element = t.element.cloneNode(!0),
        this
    }
}
;
var xo = new Kt
  , r1 = new Kt
  , Il = class {
    constructor(t={}) {
        let n = this, o, a, i, r, s = {
            camera: {
                style: ""
            },
            objects: new WeakMap
        }, l = t.element !== void 0 ? t.element : document.createElement("div");
        l.style.overflow = "hidden",
        this.domElement = l;
        let u = document.createElement("div");
        u.style.transformOrigin = "0 0",
        u.style.pointerEvents = "none",
        l.appendChild(u);
        let d = document.createElement("div");
        d.style.transformStyle = "preserve-3d",
        u.appendChild(d),
        this.getSize = function() {
            return {
                width: o,
                height: a
            }
        }
        ,
        this.render = function(T, M) {
            let _ = M.projectionMatrix.elements[5] * r;
            M.view && M.view.enabled ? (u.style.transform = `translate( ${-M.view.offsetX * (o / M.view.width)}px, ${-M.view.offsetY * (a / M.view.height)}px )`,
            u.style.transform += `scale( ${M.view.fullWidth / M.view.width}, ${M.view.fullHeight / M.view.height} )`) : u.style.transform = "",
            T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(),
            M.parent === null && M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld();
            let V, Y;
            M.isOrthographicCamera && (V = -(M.right + M.left) / 2,
            Y = (M.top + M.bottom) / 2);
            let se = M.view && M.view.enabled ? M.view.height / M.view.fullHeight : 1
              , D = M.isOrthographicCamera ? `scale( ${se} )scale(` + _ + ")translate(" + c(V) + "px," + c(Y) + "px)" + p(M.matrixWorldInverse) : `scale( ${se} )translateZ(` + _ + "px)" + p(M.matrixWorldInverse)
              , L = (M.isPerspectiveCamera ? "perspective(" + _ + "px) " : "") + D + "translate(" + i + "px," + r + "px)";
            s.camera.style !== L && (d.style.transform = L,
            s.camera.style = L),
            $(T, T, M, D)
        }
        ,
        this.setSize = function(T, M) {
            o = T,
            a = M,
            i = o / 2,
            r = a / 2,
            l.style.width = T + "px",
            l.style.height = M + "px",
            u.style.width = T + "px",
            u.style.height = M + "px",
            d.style.width = T + "px",
            d.style.height = M + "px"
        }
        ;
        function c(T) {
            return Math.abs(T) < 1e-10 ? 0 : T
        }
        function p(T) {
            let M = T.elements;
            return "matrix3d(" + c(M[0]) + "," + c(-M[1]) + "," + c(M[2]) + "," + c(M[3]) + "," + c(M[4]) + "," + c(-M[5]) + "," + c(M[6]) + "," + c(M[7]) + "," + c(M[8]) + "," + c(-M[9]) + "," + c(M[10]) + "," + c(M[11]) + "," + c(M[12]) + "," + c(-M[13]) + "," + c(M[14]) + "," + c(M[15]) + ")"
        }
        function f(T) {
            let M = T.elements;
            return "translate(-50%,-50%)" + ("matrix3d(" + c(M[0]) + "," + c(M[1]) + "," + c(M[2]) + "," + c(M[3]) + "," + c(-M[4]) + "," + c(-M[5]) + "," + c(-M[6]) + "," + c(-M[7]) + "," + c(M[8]) + "," + c(M[9]) + "," + c(M[10]) + "," + c(M[11]) + "," + c(M[12]) + "," + c(M[13]) + "," + c(M[14]) + "," + c(M[15]) + ")")
        }
        function b(T) {
            T.isCSS3DObject && (T.element.style.display = "none");
            for (let M = 0, _ = T.children.length; M < _; M++)
                b(T.children[M])
        }
        function $(T, M, _, V) {
            if (T.visible === !1) {
                b(T);
                return
            }
            if (T.isCSS3DObject) {
                let Y = T.layers.test(_.layers) === !0
                  , se = T.element;
                if (se.style.display = Y === !0 ? "" : "none",
                Y === !0) {
                    T.onBeforeRender(n, M, _);
                    let D;
                    T.isCSS3DSprite ? (xo.copy(_.matrixWorldInverse),
                    xo.transpose(),
                    T.rotation2D !== 0 && xo.multiply(r1.makeRotationZ(T.rotation2D)),
                    T.matrixWorld.decompose(mp, i1, gp),
                    xo.setPosition(mp),
                    xo.scale(gp),
                    xo.elements[3] = 0,
                    xo.elements[7] = 0,
                    xo.elements[11] = 0,
                    xo.elements[15] = 1,
                    D = f(xo)) : D = f(T.matrixWorld);
                    let K = s.objects.get(T);
                    if (K === void 0 || K.style !== D) {
                        se.style.transform = D;
                        let L = {
                            style: D
                        };
                        s.objects.set(T, L)
                    }
                    se.parentNode !== d && d.appendChild(se),
                    T.onAfterRender(n, M, _)
                }
            }
            for (let Y = 0, se = T.children.length; Y < se; Y++)
                $(T.children[Y], M, _, V)
        }
    }
}
;
var tt = (e, t={}) => new Me({
    color: e,
    flatShading: !0,
    roughness: .85,
    ...t
});
function Di(e, t, n=8) {
    let o = document.createElement("canvas");
    o.width = o.height = 256;
    let a = o.getContext("2d")
      , i = 256 / n;
    for (let s = 0; s < n; s++)
        for (let l = 0; l < n; l++)
            a.fillStyle = (s + l) % 2 ? e : t,
            a.fillRect(s * i, l * i, i, i);
    a.strokeStyle = "rgba(0,0,0,.08)";
    for (let s = 0; s <= n; s++)
        a.beginPath(),
        a.moveTo(s * i, 0),
        a.lineTo(s * i, 256),
        a.moveTo(0, s * i),
        a.lineTo(256, s * i),
        a.stroke();
    let r = new Ke(o);
    return r.colorSpace = qe,
    r.wrapS = r.wrapT = jr,
    r
}
function wp() {
    let e = document.createElement("canvas");
    e.width = e.height = 256;
    let t = e.getContext("2d");
    for (let o = 0; o < 16; o++)
        t.fillStyle = o % 2 ? "#a0703f" : "#946537",
        t.fillRect(0, o * 16, 256, 16);
    t.strokeStyle = "rgba(0,0,0,.12)";
    for (let o = 0; o < 16; o++)
        t.beginPath(),
        t.moveTo(o * 53 % 256, o * 16),
        t.lineTo(o * 53 % 256, o * 16 + 16),
        t.stroke();
    let n = new Ke(e);
    return n.colorSpace = qe,
    n.wrapS = n.wrapT = jr,
    n
}
var yp = {
    nyanya: {
        w: 3.6,
        d: 4,
        h: 2.8,
        wall: "#a9c7d8",
        floor: () => Di("#b9b2a5", "#aca596", 6),
        name: "Face-me-I-face-you"
    },
    lugbe: {
        w: 4.6,
        d: 5.2,
        h: 2.8,
        wall: "#e6d9c2",
        floor: () => Di("#cfc6b6", "#c2b8a6", 8),
        name: "Room & parlour"
    },
    kuje: {
        w: 4.4,
        d: 5,
        h: 2.8,
        wall: "#d9e4d4",
        floor: () => Di("#c9c2b4", "#bcb4a4", 8),
        name: "Bungalow"
    },
    kubwa: {
        w: 5,
        d: 5.6,
        h: 2.9,
        wall: "#efe4cf",
        floor: () => Di("#d8cdb9", "#cbbfa9", 8),
        name: "Self-contain"
    },
    gwarinpa: {
        w: 8,
        d: 7,
        h: 3,
        wall: "#f3ede2",
        floor: () => Di("#e9e4dc", "#dcd5cb", 10),
        name: "Mini-flat"
    },
    maitama: {
        w: 12,
        d: 10,
        h: 3.4,
        wall: "#f7f3ea",
        floor: () => wp(),
        name: "Duplex"
    }
};
function Ur(e, t={}) {
    let n = yp[e] || yp.nyanya
      , o = Math.min(3, Math.max(1, t.level || 1))
      , a = t.items || []
      , i = o > 1 || a.length > 0 || !!t.furnished
      , r = new Ae
      , s = []
      , l = null
      , u = [1, 1.35, 1.7][o - 1]
      , d = +(n.w * u).toFixed(2)
      , c = +(n.d * u).toFixed(2)
      , p = (L, S, C, v, I, z=!1, G=.15) => {
        let O = new ae(L,S);
        if (O.position.set(C, v, I),
        O.castShadow = !0,
        O.receiveShadow = !0,
        r.add(O),
        z) {
            L.computeBoundingBox();
            let q = L.boundingBox;
            s.push([C + q.min.x - G, C + q.max.x + G, I + q.min.z - G, I + q.max.z + G])
        }
        return O
    }
      , f = (L, S, C, v, I, z, G, O=!0) => p(new fe(L,S,C), typeof v == "string" ? tt(v) : v, I, z + S / 2, G, O)
      , b = o === 3 ? wp() : o === 2 ? Di("#efeae0", "#e3ddd1", 10) : n.floor();
    b.repeat.set(d / 2, c / 2);
    let $ = p(new fe(d,.1,c), new Me({
        map: b,
        roughness: o === 3 ? .5 : .8
    }), 0, -.05, 0)
      , T = tt(o === 3 ? "#f4efe6" : o === 2 ? "#e8eef0" : n.wall, {
        side: tn
    });
    f(d, n.h, .15, T, 0, 0, -c / 2 - .075, !1),
    f(.15, n.h, c, T, -d / 2 - .075, 0, 0, !1),
    f(d, .12, .04, "#ffffff", 0, 0, -c / 2 + .02, !1),
    f(.04, .12, c, "#ffffff", -d / 2 + .02, 0, 0, !1);
    let M = tt("#9fd0f5", {
        emissive: 0
    });
    f(1.4, 1.1, .06, M, d * .18, 1.1, -c / 2 + .01, !1),
    f(1.55, .08, .12, "#ffffff", d * .18, 2.2, -c / 2 + .05, !1),
    f(1.55, .08, .16, "#ffffff", d * .18, 1.04, -c / 2 + .07, !1),
    f(.06, 1.1, .08, "#ffffff", d * .18, 1.1, -c / 2 + .04, !1),
    f(.08, 2.1, .95, "#7a4a2a", -d / 2 + .03, 0, c / 2 - .9, !1),
    f(.06, .06, .12, "#d9a93a", -d / 2 + .09, 1, c / 2 - .6, !1);
    let _ = L => tt(L);
    if (i)
        V();
    else if (e === "nyanya") {
        f(1.2, .18, 1.9, "#f1ece2", -d / 2 + .75, 0, -c / 2 + 1.1),
        f(1.2, .02, 1.9, "#d9534f", -d / 2 + .75, .18, -c / 2 + 1.15, !1),
        f(.5, .12, .3, "#ffffff", -d / 2 + .75, .18, -c / 2 + .35, !1),
        f(.45, .45, .45, "#e9e5dc", d / 2 - .5, 0, -c / 2 + .5),
        f(.45, .45, .06, "#e9e5dc", d / 2 - .5, .45, -c / 2 + .3, !1),
        f(.5, .55, .4, "#8a5a33", d / 2 - .45, 0, .2),
        f(.28, .18, .14, "#2b2b2b", d / 2 - .45, .55, .2, !1),
        p(new oe(.03,.03,1.2,6), tt("#d0d0d0"), d / 2 - .4, .6, c / 2 - .6, !0),
        p(new oe(.22,.22,.06,12), tt("#2f6fd1"), d / 2 - .4, 1.25, c / 2 - .55).rotation.x = Math.PI / 2.2,
        p(new oe(.17,.2,.38,10), tt("#1f6fd1"), -d / 2 + .4, .19, c / 2 - 1.8, !0),
        p(new oe(.1,.12,.22,10), tt("#c0392b"), -d / 2 + .75, .11, c / 2 - 1.85, !0),
        f(.12, .25, .12, "#f2b53a", d / 2 - .45, .55, .4, !1),
        f(d - .6, .02, .02, "#444444", 0, 1.9, -c / 2 + .35, !1);
        for (let[L,S] of [["#7b4dd8", -.6], ["#1f9d55", .1], ["#f08a24", .7]])
            f(.4, .55, .03, L, S, 1.35, -c / 2 + .35, !1)
    } else if (e === "kubwa" || e === "lugbe" || e === "kuje") {
        f(1.4, .45, 2, "#6b4a33", -d / 2 + .85, 0, -c / 2 + 1.15),
        f(1.35, .2, 1.95, "#f1ece2", -d / 2 + .85, .45, -c / 2 + 1.15, !1),
        f(1.35, .03, 1.4, "#1f6fd1", -d / 2 + .85, .65, -c / 2 + 1.4, !1),
        f(1.4, .9, .04, "#6b4a33", -d / 2 + .85, .45, -c / 2 + .12, !1),
        f(1.8, .9, .6, "#efe9dc", d / 2 - 1, 0, -c / 2 + .35),
        f(.6, .08, .45, "#2b2b2b", d / 2 - .6, .9, -c / 2 + .35, !1),
        p(new oe(.17,.17,.6,12), tt("#2f7d32"), d / 2 - .3, .3, -c / 2 + 1, !0),
        f(1, 2, .6, "#8a5a33", -d / 2 + .35, 0, .6),
        f(.6, .5, .4, "#5a3a22", d / 2 - .5, 0, .8),
        f(.8, .5, .06, "#111111", d / 2 - .5, .5, .75, !1);
        for (let L of [1.6, 2.2])
            f(.45, .45, .45, "#e9e5dc", .3, 0, L),
            f(.45, .45, .06, "#e9e5dc", .3, .45, L - .2, !1);
        p(new oe(.03,.03,1.2,6), tt("#d0d0d0"), 1.2, .6, -c / 2 + 1.8, !0),
        p(new oe(.22,.22,.06,12), tt("#ffffff"), 1.2, 1.25, -c / 2 + 1.85).rotation.x = Math.PI / 2.2,
        f(.06, 2.1, 1.2, "#efe4cf", d / 2 - 1.6, 0, c / 2 - 1.2, !1)
    } else if (e === "gwarinpa") {
        let L = _("#3f5f8a");
        f(2.4, .45, .9, L, -.4, 0, -c / 2 + .6),
        f(2.4, .5, .2, L, -.4, .45, -c / 2 + .25, !1),
        f(.9, .45, .9, L, -d / 2 + .7, 0, -.5),
        f(.2, .5, .9, L, -d / 2 + .35, .45, -.5, !1),
        f(2.6, .02, 1.8, "#c9963c", -.4, 0, .3, !1),
        f(1.1, .4, .6, "#6b4a33", -.4, 0, .4),
        f(1.6, .5, .4, "#2b2b2b", -.4, 0, 1.9),
        f(1.4, .8, .06, "#111111", -.4, .5, 1.95, !1),
        f(1.4, .75, .9, "#8a5a33", d / 2 - 1.3, 0, -c / 2 + 1.2);
        for (let[S,C] of [[-.5, -.7], [.5, -.7], [-.5, .7], [.5, .7]])
            f(.42, .45, .42, "#5a3a22", d / 2 - 1.3 + S, 0, -c / 2 + 1.2 + C);
        f(.08, 2.4, 2.8, "#efe4cf", d / 2 - 2.6, 0, c / 2 - 1.4, !1),
        f(1.6, .5, 2, "#6b4a33", d / 2 - 1.2, 0, c / 2 - 1.3),
        f(1.55, .2, 1.95, "#f1ece2", d / 2 - 1.2, .5, c / 2 - 1.3, !1),
        f(.9, .25, .5, "#ffffff", -d / 2 + .6, 2.2, -c / 2 + .2, !1);
        for (let[S,C] of [[-d / 2 + .4, -c / 2 + .4], [d / 2 - .4, c / 2 - .4]])
            p(new oe(.18,.14,.4,8), tt("#c96a3a"), S, .2, C, !0),
            p(new wo(.4,0), tt("#3f8a4a"), S, .75, C);
        p(new oe(.6,.6,.04,16), tt("#ffffff"), -.4, n.h - .25, .3)
    } else {
        let L = tt("#e9dcc3");
        f(4, .45, 1, L, -1, 0, -c / 2 + .8),
        f(4, .55, .25, L, -1, .45, -c / 2 + .4, !1),
        f(1, .45, 2.6, L, -d / 2 + .8, 0, .2),
        f(.25, .55, 2.6, L, -d / 2 + .4, .45, .2, !1),
        f(4.2, .02, 3.2, "#7b2d33", -1, 0, .5, !1),
        f(1.6, .38, .9, "#c9a46b", -1, 0, .6),
        f(3, .5, .45, "#1c2433", -1, 0, c / 2 - .5),
        f(2.6, 1.3, .06, "#0b0b0b", -1, .7, c / 2 - .45, !1),
        f(2.4, .76, 1.1, "#3b2a1c", d / 2 - 2.2, 0, -c / 2 + 1.6);
        for (let S of [-.8, 0, .8])
            for (let C of [-1, 1])
                f(.45, .95, .45, "#f3eee2", d / 2 - 2.2 + S, 0, -c / 2 + 1.6 + C * .8);
        for (let S = 0; S < 11; S++)
            f(1.2, .18, .3, "#c9a46b", d / 2 - .8, S * .3, -.5 + S * .3 * .9, S < 4);
        p(new oe(.05,.05,.6,6), tt("#d9a93a"), -1, n.h - .3, .6);
        for (let S = 0; S < 8; S++) {
            let C = S / 8 * Math.PI * 2;
            p(new Ln(.09,8,6), tt("#fff3c4", {
                emissive: 16769162,
                emissiveIntensity: .6
            }), -1 + Math.cos(C) * .45, n.h - .65, .6 + Math.sin(C) * .45)
        }
        for (let[S,C] of [[-d / 2 + .5, -c / 2 + .5], [d / 2 - .5, c / 2 - .6], [1.5, -c / 2 + .5]])
            p(new oe(.25,.2,.5,8), tt("#ffffff"), S, .25, C, !0),
            p(new wo(.55,0), tt("#2f7a45"), S, 1, C);
        f(1.6, 1, .04, "#d9a93a", -1, 1.3, -c / 2 + .02, !1),
        f(1.45, .85, .05, "#1f6fd1", -1, 1.375, -c / 2 + .04, !1);
        for (let S of [-d / 2 + .6, d / 2 - 1.5])
            f(.9, .25, .5, "#ffffff", S, 2.6, -c / 2 + .2, !1)
    }
    function V() {
        let L = he => a.includes(he)
          , S = (...he) => [...he].reverse().find(L)
          , C = (he, Pe) => {
            let Ft = r.children.length;
            Pe();
            for (let Gr of r.children.slice(Ft))
                Gr.userData.item = he
        }
          , v = d * c >= 26
          , I = d >= 6
          , z = S("bed2", "bed3")
          , G = d / 2 - 1.05
          , O = -c / 2 + 1.15;
        C("bed", () => {
            if (!z)
                f(1.2, .18, 1.9, "#f1ece2", G, 0, O),
                f(1.2, .02, 1.9, "#d9534f", G, .18, O + .05, !1);
            else {
                let he = z === "bed3"
                  , Pe = he ? 1.9 : 1.4;
                f(Pe, .45, 2, he ? "#2b2233" : "#6b4a33", G, 0, O),
                f(Pe - .05, .22, 1.95, "#f6f2ea", G, .45, O, !1),
                f(Pe - .05, .04, 1.3, he ? "#c9a46b" : "#1f6fd1", G, .67, O + .3, !1),
                f(Pe, he ? 1.2 : .9, .08, he ? "#2b2233" : "#6b4a33", G, .45, -c / 2 + .1, !1);
                for (let Ft of [-1, 1])
                    f(.5, .12, .3, "#ffffff", G + Ft * Pe * .25, .67, -c / 2 + .35, !1)
            }
        }
        );
        let q = S("fridge1", "fridge2")
          , we = S("cooker1", "cooker2");
        q && C("fridge", () => {
            let he = q === "fridge2";
            f(he ? 1 : .65, he ? 1.85 : 1.3, .7, he ? "#cfd5d8" : "#f4f4f4", -d / 2 + (he ? .6 : .45), 0, -c / 2 + .42),
            he && f(.02, 1.7, .02, "#888888", -d / 2 + .6, .1, -c / 2 + .78, !1)
        }
        ),
        we && C("cooker", () => {
            let he = we === "cooker2"
              , Pe = -d / 2 + (q === "fridge2" ? 1.6 : 1.25);
            he ? (f(.8, .9, .62, "#3a3f4a", Pe, 0, -c / 2 + .4),
            f(.6, .35, .03, "#111111", Pe, .25, -c / 2 + .72, !1)) : (f(.8, .75, .55, "#efe9dc", Pe, 0, -c / 2 + .35),
            p(new oe(.17,.17,.55,12), tt("#2f7d32"), Pe + .55, .28, -c / 2 + .35, !0)),
            f(.6, .06, .45, "#1a1a1a", Pe, he ? .9 : .75, -c / 2 + .38, !1)
        }
        );
        let be = S("tv1", "tv2")
          , ve = Math.min(.6, c / 2 - 1.4);
        L("rug") && C("rug", () => f(2, .02, 2.4, "#7b2d33", -d / 2 + 1.35, 0, ve, !1)),
        (be || L("ps5") || L("speaker") || L("radio")) && C("tv", () => f(.45, .5, 1.6, "#2b2b2b", -d / 2 + .3, 0, ve)),
        be && C("tv", () => {
            let he = be === "tv2"
              , Pe = he ? .95 : .52
              , Ft = he ? .9 : .99;
            f(.06, he ? 1.05 : .6, he ? 1.8 : 1, "#0b0b0b", -d / 2 + .12, he ? .85 : .95, ve, !1),
            f(.02, Pe, he ? 1.7 : .92, "#1f3b57", -d / 2 + .16, Ft, ve, !1),
            l = {
                x: -d / 2 + .175,
                y: Ft + Pe / 2,
                z: ve,
                w: he ? 1.7 : .92,
                h: Pe
            }
        }
        ),
        L("radio") && C("radio", () => {
            f(.24, .2, .4, "#5a3a22", -d / 2 + .3, .5, ve - .55, !1),
            f(.02, .12, .16, "#d9d2c3", -d / 2 + .43, .54, ve - .62, !1),
            p(new oe(.035,.035,.02,10), tt("#c9a46b"), -d / 2 + .43, .64, ve - .45).rotation.z = Math.PI / 2
        }
        ),
        L("ps5") && C("ps5", () => {
            f(.1, .42, .24, "#f4f4f4", -d / 2 + .3, .5, ve + .5, !1),
            f(.12, .05, .18, "#111111", -d / 2 + .55, .5, ve - .4, !1)
        }
        ),
        L("speaker") && C("speaker", () => {
            f(.35, .9, .35, "#151515", -d / 2 + .3, 0, Math.min(ve + 1.15, c / 2 - .3))
        }
        );
        let Dt = S("sofa2", "sofa3")
          , pt = -d / 2 + Math.min(2.4, d * .55);
        C("sofa", () => {
            if (Dt) {
                let he = Dt === "sofa3"
                  , Pe = he ? "#e9dcc3" : "#3f5f8a"
                  , Ft = he ? 2.4 : 1.9;
                f(.9, .45, Ft, Pe, pt, 0, ve),
                f(.22, .5, Ft, Pe, pt + .35, .45, ve, !1);
                for (let Gr of [-1, 1])
                    f(.9, .62, .2, Pe, pt, 0, ve + Gr * (Ft / 2 - .1), !1)
            } else
                for (let he of [-.35, .35])
                    f(.45, .45, .45, "#e9e5dc", pt, 0, ve + he),
                    f(.06, .45, .45, "#e9e5dc", pt + .2, .45, ve + he, !1)
        }
        ),
        L("lamp") && C("lamp", () => {
            let he = Math.min(ve + 1.5, c / 2 - .3);
            p(new oe(.03,.03,1.5,6), tt("#333333"), pt, .75, he, !0),
            p(new oe(.15,.24,.3,10), tt("#fff3c4", {
                emissive: 16769162,
                emissiveIntensity: .5
            }), pt, 1.55, he)
        }
        );
        let Go = S("fan", "ac");
        Go === "fan" && C("cool", () => {
            p(new oe(.03,.03,1.2,6), tt("#d0d0d0"), d / 2 - .4, .6, c / 2 - .45, !0),
            p(new oe(.24,.24,.06,14), tt("#2f6fd1"), d / 2 - .4, 1.25, c / 2 - .42).rotation.x = Math.PI / 2.2
        }
        ),
        Go === "ac" && C("cool", () => f(.25, .3, .95, "#ffffff", -d / 2 + .15, 2.15, -c / 2 + 1.6, !1));
        let Ni = S("gen", "solar");
        Ni === "gen" && C("power", () => {
            f(.8, .6, .55, "#d43d3d", d / 2 + .9, 0, -c / 2 + .8),
            f(.6, .15, .4, "#2b2b2b", d / 2 + .9, .6, -c / 2 + .8, !1)
        }
        ),
        Ni === "solar" && C("power", () => {
            f(.5, .7, .35, "#1c2433", d / 2 + .7, 0, -c / 2 + .6);
            for (let he = 0; he < 2; he++) {
                let Pe = p(new fe(1.2,.05,.8), tt("#1b2a6b", {
                    roughness: .2
                }), d / 2 + 1 + he * 1.3, .9, -c / 2 + 1.8);
                Pe.rotation.x = -.4
            }
        }
        ),
        L("dining") && v && C("dining", () => {
            let he = d / 2 - 1.3
              , Pe = c / 2 - 1.2;
            f(1.4, .75, .9, "#8a5a33", he, 0, Pe);
            for (let[Ft,Gr] of [[-.45, -.65], [.45, -.65], [-.45, .65], [.45, .65]])
                f(.42, .45, .42, "#5a3a22", he + Ft, 0, Pe + Gr)
        }
        ),
        L("wardrobe") && C("wardrobe", () => f(1, 2, .6, "#8a5a33", I ? d / 2 - 2.4 : -d / 2 + .4, 0, I ? -c / 2 + .35 : c / 2 - .4)),
        L("shelf") && I && C("shelf", () => {
            f(1.2, 1.8, .35, "#6b4a33", -.3, 0, -c / 2 + .22);
            let he = ["#c0392b", "#1f6fd1", "#f2b53a", "#1f8a4c"];
            for (let Pe = 0; Pe < 3; Pe++)
                for (let Ft = 0; Ft < 6; Ft++)
                    f(.12, .38, .22, he[(Pe + Ft) % 4], -.75 + Ft * .18, .15 + Pe * .55, -c / 2 + .28, !1)
        }
        ),
        L("art") && C("art", () => {
            f(1.3, .85, .04, "#d9a93a", -d * .15, 1.35, -c / 2 + .02, !1),
            f(1.15, .7, .05, "#c0392b", -d * .15, 1.42, -c / 2 + .04, !1)
        }
        ),
        L("plant") && C("plant", () => {
            let he = d / 2 - .35
              , Pe = v ? -c / 2 + 2.6 : c / 2 - 1.2;
            p(new oe(.2,.16,.4,8), tt("#c96a3a"), he, .2, Pe, !0),
            p(new wo(.42,0), tt("#3f8a4a"), he, .8, Pe)
        }
        )
    }
    let Y = (L, S) => {
        if (L < -d / 2 + .25 || L > d / 2 - .25 || S < -c / 2 + .25 || S > c / 2 - .25)
            return !1;
        for (let[v,I,z,G] of s)
            if (L > v && L < I && S > z && S < G)
                return !1;
        return !0
    }
      , se = [-d / 2 + .8, c / 2 - .9];
    for (let L = 0; L < 60 && !Y(...se); L++)
        se = [-d / 2 + .6 + Math.random() * (d - 1.2), -c / 2 + .6 + Math.random() * (c - 1.2)];
    let D = L => {
        M.color.set(L ? "#1a2245" : "#9fd0f5")
    }
      , K = L => {
        for (; L && L !== r; ) {
            if (L.userData.item)
                return L.userData.item;
            L = L.parent
        }
        return null
    }
    ;
    return {
        group: r,
        floor: $,
        isFree: Y,
        spawn: se,
        size: [d, c, n.h],
        name: n.name + ["", " \xB7 Renovated", " \xB7 Luxury"][o - 1],
        setNight: D,
        itemOf: K,
        level: o,
        tv: l
    }
}
var Pl = {
    nyanya: {
        price: 15e5,
        supply: 400
    },
    lugbe: {
        price: 15e5,
        supply: 300
    },
    kuje: {
        price: 12e5,
        supply: 200
    },
    kubwa: {
        price: 36e5,
        supply: 300
    },
    gwarinpa: {
        price: 12e6,
        supply: 200
    },
    maitama: {
        price: 12e7,
        supply: 40
    }
};
var Xe = {
    water: {
        name: "Pure water",
        price: 50,
        fill: 3
    },
    gala: {
        name: "Gala & zobo",
        price: 500,
        fill: 10
    },
    corn: {
        name: "Roasted corn & ube",
        price: 700,
        fill: 12
    },
    akara: {
        name: "Akara & pap",
        price: 800,
        fill: 18
    },
    bread: {
        name: "Bread & egg",
        price: 1200,
        fill: 22
    },
    noodles: {
        name: "Indomie & egg",
        price: 1500,
        fill: 28
    },
    suya: {
        name: "Suya",
        price: 2e3,
        fill: 25
    },
    chicken: {
        name: "Grilled chicken",
        price: 3500,
        fill: 40
    },
    jollof: {
        name: "Jollof rice & chicken",
        price: 3500,
        fill: 50
    },
    swallow: {
        name: "Pounded yam & egusi",
        price: 4e3,
        fill: 60
    },
    tilapia: {
        name: "Grilled tilapia",
        price: 6e3,
        fill: 45
    },
    catfish: {
        name: "Grilled catfish",
        price: 8e3,
        fill: 55
    },
    croaker: {
        name: "Grilled croaker",
        price: 1e4,
        fill: 60
    },
    pepsoup: {
        name: "Catfish pepper soup",
        price: 5e3,
        fill: 35
    },
    arabtea: {
        name: "Arabian tea",
        price: 1500,
        fill: 5
    },
    mandi: {
        name: "Lamb mandi rice",
        price: 5e3,
        fill: 55
    },
    masa: {
        name: "Masa (5 pieces)",
        price: 1e3,
        fill: 18
    },
    wings: {
        name: "BBQ chicken wings",
        price: 3e3,
        fill: 25
    },
    shawarma: {
        name: "Shawarma",
        price: 3500,
        fill: 35
    },
    burger: {
        name: "Burger & fries",
        price: 6500,
        fill: 45
    },
    icecream: {
        name: "Ice cream",
        price: 2500,
        fill: 6
    },
    cocktail: {
        name: "Frozen cocktail",
        price: 4e3,
        fill: 4
    },
    mezze: {
        name: "Lebanese mezze platter",
        price: 9e3,
        fill: 55
    },
    steak: {
        name: "Tenderloin steak",
        price: 15e3,
        fill: 65
    },
    malt: {
        name: "Malt",
        price: 800,
        fill: 5
    },
    chapman: {
        name: "Chapman",
        price: 1500,
        fill: 6
    },
    smoothie: {
        name: "Fruit smoothie",
        price: 2e3,
        fill: 8
    },
    smallchops: {
        name: "Small chops",
        price: 2500,
        fill: 20
    }
}
  , Bn = [{
    id: "gatemarket",
    name: "City Gate Market",
    near: "gate",
    menu: ["water", "gala", "corn", "akara", "bread"]
}, {
    id: "sahad",
    name: "Sahad Stores",
    at: "Sahad Stores",
    menu: ["water", "gala", "bread", "noodles"],
    pantry: ["indomie", "eggs", "rice"]
}, {
    id: "fouru",
    name: "4U Supermarket",
    at: "4U Supermarket",
    menu: ["water", "gala", "bread", "noodles"],
    pantry: ["indomie", "eggs", "rice"]
}, {
    id: "grills",
    name: "Grills 101",
    at: "Grills 101",
    menu: ["mandi", "masa", "wings", "chicken", "water"]
}, {
    id: "truckcentral",
    name: "Truck Central",
    xz: [-1314, 706],
    menu: ["shawarma", "wings", "burger", "suya", "icecream", "cocktail"]
}, {
    id: "trukadero",
    name: "Trukadero",
    xz: [-1386, -1688],
    menu: ["smallchops", "chicken", "chapman", "malt"]
}, {
    id: "farmcity",
    name: "Farm City",
    xz: [-1905, -2292],
    menu: ["smallchops", "chicken", "chapman", "malt", "smoothie"]
}, {
    id: "blucabana",
    name: "BluCabana",
    xz: [-5844, -2311],
    menu: ["mezze", "steak", "burger", "pepsoup", "cocktail", "smoothie"]
}, {
    id: "airport",
    name: "Nnamdi Azikiwe Airport",
    xz: [-24402, 4364],
    menu: ["water", "gala", "noodles", "smoothie"]
}, {
    id: "ibrofish",
    name: "IbroFish",
    landmark: "IbroFish",
    menu: ["tilapia", "catfish", "croaker", "pepsoup", "arabtea", "water"]
}, {
    id: "ceddi",
    name: "Ceddi Plaza food court",
    at: "Ceddi Plaza",
    menu: ["jollof", "swallow", "noodles", "icecream", "smoothie", "water"],
    pantry: ["indomie", "eggs", "rice"]
}, {
    id: "magicland",
    name: "Magic Land",
    landmark: "Magic Land",
    noStall: !0,
    menu: ["water", "gala", "icecream", "smallchops"]
}, {
    id: "silverbird",
    name: "Silverbird Cinemas",
    at: "Silverbird Cinemas & Shopping Centre",
    noStall: !0,
    menu: ["smallchops", "icecream", "malt", "water"]
}];
function bp(e, t, n=1) {
    if (!e || !e.at)
        return 100;
    let o = e.at.toMillis ? e.at.toMillis() : +e.at;
    return Math.max(0, Math.min(100, e.level - (t - o) / (288e3 * n)))
}
var Ea = {
    farmcity: [{
        id: "bowling",
        name: "Bowling (10 rounds)",
        price: 7500,
        verb: "Bowling"
    }, {
        id: "vr",
        name: "VR game token",
        price: 2500,
        verb: "Playing VR"
    }, {
        id: "snooker",
        name: "Snooker",
        price: 2500,
        verb: "Playing snooker"
    }, {
        id: "airhockey",
        name: "Air hockey",
        price: 2500,
        verb: "Playing air hockey"
    }, {
        id: "ps5",
        name: "PS5 (20 minutes)",
        price: 5e3,
        verb: "Gaming on the PS5"
    }, {
        id: "kart",
        name: "Arcade kart racing",
        price: 2500,
        verb: "Racing"
    }],
    truckcentral: [{
        id: "karaoke",
        name: "Karaoke night",
        price: 0,
        days: [3],
        verb: "Singing karaoke"
    }, {
        id: "movienight",
        name: "Free movie night",
        price: 0,
        days: [5],
        verb: "Watching a movie under the stars"
    }, {
        id: "liveband",
        name: "Live band",
        price: 0,
        days: [6],
        verb: "Vibing to the live band"
    }, {
        id: "arcade",
        name: "Arcade games",
        price: 2e3,
        verb: "Playing arcade games"
    }],
    blucabana: [{
        id: "pool",
        name: "Pool day pass",
        price: 1e4,
        verb: "Swimming and lounging by the pool"
    }, {
        id: "gym",
        name: "Gym session",
        price: 5e3,
        verb: "Working out"
    }, {
        id: "beauty",
        name: "Beauty lounge treatment",
        price: 8e3,
        verb: "Getting pampered"
    }],
    magicland: [{
        id: "carousel",
        name: "Carousel",
        price: 1e3,
        verb: "Riding the carousel"
    }, {
        id: "coaster",
        name: "Roller coaster",
        price: 1500,
        verb: "Screaming on the roller coaster"
    }, {
        id: "pendulum",
        name: "Pendulum",
        price: 2e3,
        verb: "Swinging on the pendulum"
    }, {
        id: "allaccess",
        name: "All-access pass (all rides)",
        price: 18e3,
        verb: "Riding everything"
    }],
    silverbird: [{
        id: "movie",
        name: "Movie ticket (with popcorn & drink)",
        price: 10200,
        verb: "Watching a movie"
    }, {
        id: "moviev",
        name: "VIP movie ticket (with popcorn & drink)",
        price: 11300,
        verb: "Watching a movie in VIP"
    }],
    ceddi: [{
        id: "movie",
        name: "Cinema at Ceddi Plaza",
        price: 8e3,
        verb: "Watching a movie"
    }],
    ibrofish: [{
        id: "football",
        name: "Watch football with the crowd",
        price: 0,
        verb: "Watching the match"
    }],
    trukadero: [{
        id: "bowling",
        name: "Bowling session",
        price: 6e3,
        verb: "Bowling"
    }, {
        id: "snooker",
        name: "Snooker",
        price: 2500,
        verb: "Playing snooker"
    }, {
        id: "cinema9d",
        name: "9D cinema",
        price: 3e3,
        verb: "Watching a 9D movie"
    }, {
        id: "arcade",
        name: "Arcade games",
        price: 2e3,
        verb: "Playing arcade games"
    }]
};
var Tt = 1e3
  , ko = 750;
var s1 = 180 * 1e3
  , BE = 900 * 1e3
  , Fi = 12
  , Yi = 5;
var Vr = {
    taxi: 3,
    keke: 5
};
var Nl = 50
  , Ol = 1e5
  , l1 = 50
  , c1 = 3e3
  , u1 = 5e4
  , d1 = 100;
var h1 = 2e3
  , f1 = 5e3
  , p1 = ["malt", "chapman", "smoothie", "smallchops"]
  , vt = {
    food: {
        name: "Restaurant / shop",
        role: "Waiter",
        icon: "utensils",
        wage: 5e3
    },
    club: {
        name: "Nightclub",
        role: "Bouncer & bartender",
        icon: "music",
        wage: 6e3
    },
    hospital: {
        name: "Hospital",
        role: "Nurse",
        icon: "hospital",
        wage: 6e3
    },
    estate: {
        name: "Real estate",
        role: "Estate agent",
        icon: "building-2",
        wage: 5e3
    },
    taxi: {
        name: "Taxi company",
        role: "Taxi driver",
        icon: "car",
        wage: 5e3,
        perKm: 400
    },
    keke: {
        name: "Keke company",
        role: "Keke rider",
        icon: "bike",
        wage: 4e3,
        perKm: 250
    },
    gov: {
        name: "Government",
        role: "Civil servant",
        icon: "landmark",
        wage: 5e3
    },
    custom: {
        name: "Your own business",
        role: "Staff",
        icon: "store",
        wage: 5e3
    }
}
  , Ma = 1500
  , xp = {
    food: "Food & drinks",
    service: "Service or goods"
}
  , Ju = 8
  , Ku = 80
  , yn = [[-94, 219, "Constitution Avenue"], [150, 49, "Constitution Avenue"], [403, -75, "Constitution Avenue"], [406, -448, "Ahmadu Bello Way"], [659, 638, "Independence Avenue"], [684, -37, "Ahmadu Bello Way"], [700, -265, "Constitution Avenue"], [791, 163, "Ahmadu Bello Way"], [825, 533, "Independence Avenue"], [926, 346, "Ahmadu Bello Way"], [974, -449, "Constitution Avenue"], [1045, 535, "Ahmadu Bello Way"], [-1265, -1179, "Adetokunbo Ademola Crescent", "Wuse 2"], [-723, -1206, "Adetokunbo Ademola Crescent", "Wuse 2"], [-232, -1828, "Adetokunbo Ademola Crescent", "Wuse 2"], [-2426, -1412, "Aminu Kano Crescent", "Wuse 2"], [-1908, -1773, "Aminu Kano Crescent", "Wuse 2"], [-1600, -2571, "Aminu Kano Crescent", "Wuse 2"], [-1599, 2909, "Moshood Abiola Way", "Garki"], [-797, 2520, "Moshood Abiola Way", "Garki"], [-185, 2161, "Moshood Abiola Way", "Garki"], [275, 1111, "Tafawa Balewa Way", "Garki"], [540, 1931, "Tafawa Balewa Way", "Garki"], [964, 3661, "Ladoke Akintola Boulevard", "Garki"], [-5741, -769, "Obafemi Awolowo Way", "Jabi"], [-5178, -865, "Obafemi Awolowo Way", "Jabi"], [-4601, -842, "Obafemi Awolowo Way", "Jabi"], [-5849, -1319, "Augustus Aikhomu Way", "Utako"], [-5234, -1268, "Augustus Aikhomu Way", "Utako"], [-4884, -104, "Ngozi Okonjo-Iweala Way", "Utako"]]
  , Bl = e => yn[e]?.[3] || "CBD"
  , oi = e => `Plot ${e + 1} \xB7 ${yn[e]?.[2] || "CBD"}${yn[e]?.[3] ? `, ${yn[e][3]}` : ""}`
  , gt = {
    food: {
        name: "Restaurants & food",
        icon: "utensils",
        words: "restaurant restaurants food eat chop buka bukka suya grill shawarma jollof rice drink drinks bar cafe bakery kitchen pepper soup fish amala"
    },
    store: {
        name: "Stores & supermarkets",
        icon: "shopping-cart",
        words: "store stores shop shops supermarket supermarkets market groceries provisions mart foodstuff foodstuffs"
    },
    fashion: {
        name: "Fashion & boutiques",
        icon: "shirt",
        words: "boutique boutiques fashion clothes clothing tailor tailoring fabric fabrics shoes bags ankara aso ebi lace wears jewellery"
    },
    beauty: {
        name: "Beauty & barbing",
        icon: "scissors",
        words: "barbing barber barbers barbershop salon salons hair braids weave wig wigs nails spa makeup beauty lashes pedicure manicure"
    },
    fun: {
        name: "Recreation",
        icon: "party-popper",
        words: "recreation fun club clubs nightclub lounge cinema movies park games gaming pool gym fitness sports hangout amusement"
    },
    health: {
        name: "Health",
        icon: "hospital",
        words: "health hospital clinic pharmacy chemist doctor nurse drugs medicine"
    },
    transport: {
        name: "Transport",
        icon: "car",
        words: "transport taxi taxis keke kekes cab ride rides bus logistics delivery airport travel"
    },
    estate: {
        name: "Real estate",
        icon: "building-2",
        words: "real estate house houses home homes rent property land agent district landlord"
    },
    services: {
        name: "Services",
        icon: "briefcase-business",
        words: "service services logistics pos phone phones repair laundry printing invest investment finance delivery tech"
    }
}
  , Jr = Object.keys(gt).filter(e => e !== "estate")
  , m1 = {
    sahad: "store",
    fouru: "store",
    magicland: "fun",
    silverbird: "fun",
    farmcity: "fun",
    airport: "transport"
};
function Zn(e) {
    return e.kind === "custom" ? Jr.includes(e.cat) ? e.cat : e.type === "food" ? "food" : "services" : e.kind === "food" ? m1[e.place] || "food" : {
        club: "fun",
        hospital: "health",
        estate: "estate",
        taxi: "transport",
        keke: "transport"
    }[e.kind] || "services"
}
function kp(e, t) {
    let n = String(t).toLowerCase().split(/[^a-z0-9]+/).filter(a => a.length > 1)
      , o = (gt[e].name + " " + gt[e].words).toLowerCase().split(/[^a-z0-9]+/);
    return n.filter(a => o.some(i => i.startsWith(a) || a.length > 3 && a.startsWith(i) && i.length > 3)).length
}
var vo = ["gatemarket"]
  , Qn = "zuma"
  , Kr = "hospital"
  , g1 = Object.keys(Re)
  , Ll = e => "estate_" + e
  , Ta = e => String(e || "").startsWith("estate_") ? e.slice(7) : null
  , Xu = e => "p_" + Ll(e)
  , y1 = {
    nyanya: 1e3,
    lugbe: 3e3,
    kuje: 3e3,
    kubwa: 1500,
    gwarinpa: 3e3,
    maitama: 1e4
}
  , _l = (e, t) => e === "custom" ? Ma : e === "estate" && y1[Ta(t)] || Tt
  , w1 = e => e[0].toUpperCase() + e.slice(1)
  , b1 = e => e === Qn ? "Club Zuma" : e === Kr ? "General Hospital" : Ta(e) ? `${w1(Ta(e))} Real Estate` : Bn.find(t => t.id === e)?.name || e
  , vp = () => [...Bn.filter(e => !vo.includes(e.id)).map(e => ({
    id: e.id,
    kind: "food",
    name: e.name
})), {
    id: Qn,
    kind: "club",
    name: "Club Zuma"
}, {
    id: Kr,
    kind: "hospital",
    name: "General Hospital"
}, ...g1.map(e => ({
    id: Ll(e),
    kind: "estate",
    name: b1(Ll(e)),
    area: e,
    rent: Gi(e),
    fee: _l("estate", Ll(e))
}))];
function Gl(e, t) {
    let n = {};
    if (e === "food") {
        let o = Bn.find(a => a.id === t);
        for (let a of o?.menu || [])
            n[a] = Xe[a].price;
        for (let a of Ea[t] || [])
            a.price > 0 && (n["a_" + a.id] = a.price)
    }
    if (e === "club") {
        n.gate = h1,
        n.song = f1;
        for (let o of p1)
            n[o] = Xe[o].price
    }
    return e === "hospital" && (n.treat = 8e3,
    n.ambulance = 11e3),
    (e === "taxi" || e === "keke") && (n.km = vt[e].perKm),
    n
}
function $a(e, t) {
    if (t?.labels?.[e])
        return t.labels[e];
    if (e === "gate")
        return "Gate fee";
    if (e === "song")
        return "Song request";
    if (e === "km")
        return "Price per km";
    if (e === "treat")
        return "Treatment";
    if (e === "ambulance")
        return "Ambulance + treatment";
    if (e === "rent")
        return "Rent";
    if (e.startsWith("a_")) {
        for (let n of Object.values(Ea)) {
            let o = n.find(a => "a_" + a.id === e);
            if (o)
                return o.name
        }
        return e.slice(2)
    }
    return Xe[e]?.name || e
}
var Cp = e => e === "km" ? [l1, c1] : e === "gate" ? [0, u1] : [Nl, Ol]
  , Zu = (e, t) => Math.floor(e * t / 1e4)
  , Sa = 3e3
  , Ep = [0, 24]
  , Tp = [[0, 24], [6, 24], [7, 22], [8, 20], [9, 21], [12, 24], [18, 4], [20, 4]]
  , x1 = e => (e + 36e5) % 864e5;
function k1(e, t) {
    let[n,o] = e || Ep
      , a = x1(t);
    return n <= o ? a >= n * 36e5 && a < o * 36e5 : a >= n * 36e5 || a < o * 36e5
}
var Vu = e => e % 24 === 0 ? "midnight" : e === 12 ? "noon" : e < 12 ? `${e}am` : `${e - 12}pm`
  , ai = e => !e || e[0] === 0 && e[1] === 24 ? "24 hours" : `${Vu(e[0])} \u2013 ${Vu(e[1])}`
  , jl = e => Vu((e || Ep)[0]);
var ii = (e, t) => !!e && (e.openAt || 0) + s1 > t
  , Ct = (e, t) => !!e && (ii(e, t) || k1(e.hrs, t))
  , Qu = (e, t) => ii(e, t) ? e.taxBp || ko : Sa
  , v1 = e => Object.keys(e?.staff || {}).length
  , Yo = e => !!e && (e.openings || 0) > v1(e)
  , Mp = (e, t, n, o) => Math.max(d1, Math.round(e * n * o / 1e3 * t / 50) * 50);
var Wi = (e, t, n) => new fe(e,t,n)
  , qi = (e, t={}) => new Me({
    color: e,
    flatShading: !0,
    roughness: .6,
    ...t
})
  , $p = {
    food: {
        wall: 15983555,
        trim: 14246443,
        sign: "#d9622b"
    },
    service: {
        wall: 15003376,
        trim: 883828,
        sign: "#0d7c74"
    }
};
function C1(e, t) {
    let n = document.createElement("canvas");
    n.width = 1024,
    n.height = 160;
    let o = n.getContext("2d");
    o.fillStyle = t,
    o.fillRect(0, 0, n.width, n.height),
    o.fillStyle = "#ffffff",
    o.textAlign = "center",
    o.textBaseline = "middle";
    let a = 96;
    do
        o.font = `900 ${a}px DM Sans, sans-serif`,
        a -= 4;
    while (o.measureText(e).width > n.width - 60 && a > 30);
    o.fillText(e.toUpperCase(), n.width / 2, n.height / 2 + 4);
    let i = new Ke(n);
    return i.colorSpace = qe,
    i
}
function Sp(e, t) {
    let n = $p[t] || $p.service
      , o = new Ae
      , a = (s, l, u, d, c) => {
        let p = new ae(s,l);
        return p.position.set(u, d, c),
        p.castShadow = !0,
        o.add(p),
        p
    }
    ;
    a(Wi(12, 7, 8), qi(n.wall), 0, 3.5, -4),
    a(Wi(12.2, .4, 8.2), qi(n.trim), 0, 7.2, -4),
    a(Wi(10, 2.6, .1), qi(10466239, {
        roughness: .15
    }), 0, 1.5, .02),
    a(Wi(2, 2.6, .12), qi(3877406), 3.6, 1.5, .04);
    for (let s of [5.7])
        for (let l of [-3.5, 0, 3.5])
            a(Wi(2, 1.2, .08), qi(10466239, {
                roughness: .2
            }), l, s, .02);
    let i = a(Wi(12.4, .2, 2.2), qi(n.trim), 0, 3.2, 1);
    i.rotation.x = -.18;
    let r = new ae(new Ue(10,1.56),new ze({
        map: C1(e, n.sign)
    }));
    return r.position.set(0, 3.95, .06),
    o.add(r),
    o
}
var ri = e => new Me({
    color: e,
    flatShading: !0,
    roughness: .85
});
function Zt(e, t, n, o=0, a=0, i=0) {
    let r = new ae(t,n);
    return r.position.set(o, a, i),
    r.castShadow = !0,
    e.add(r),
    r
}
var Ap = ["#f3efe6", "#efe9dc", "#e8dccb", "#c9b59a", "#8a5a3a"];
function E1(e) {
    let t = new Ae
      , n = ri(e)
      , o = ri("#2a211b")
      , a = ri("#efe6d2")
      , i = ri("#c99a8c")
      , r = [];
    Zt(t, new fe(.8,.75,1.7), n, 0, 1.15, 0),
    Zt(t, new fe(.55,.32,.5), n, 0, 1.6, .5);
    let s = new Ae;
    s.position.set(0, 1.35, 1),
    s.userData.part = !0,
    t.add(s),
    Zt(s, new fe(.42,.42,.62), n, 0, 0, .25),
    Zt(s, new fe(.36,.25,.16), i, 0, -.08, .6);
    for (let u of [-1, 1]) {
        Zt(s, new fe(.06,.06,.06), o, u * .15, .08, .5),
        Zt(s, new fe(.22,.08,.1), n, u * .3, .1, .05);
        let d = Zt(s, new oe(.05,.07,.45,5), a, u * .25, .35, .05);
        d.rotation.z = -u * .6;
        let c = Zt(s, new oe(.025,.05,.4,5), a, u * .42, .68, .05);
        c.rotation.z = u * .25
    }
    for (let[u,d] of [[-.28, .6], [.28, .6], [-.28, -.6], [.28, -.6]]) {
        let c = new Ae;
        c.position.set(u, .8, d),
        t.add(c),
        r.push(c),
        Zt(c, new fe(.18,.8,.18), n, 0, -.4, 0),
        Zt(c, new fe(.19,.12,.2), o, 0, -.76, 0)
    }
    let l = Zt(t, new fe(.06,.7,.06), n, 0, 1, -.88);
    return l.rotation.x = .15,
    {
        group: t,
        legs: r,
        head: s
    }
}
function T1() {
    let e = E1("#ffffff");
    e.group.updateMatrixWorld(!0);
    let t = new Kt().copy(e.head.matrixWorld).invert()
      , n = []
      , o = [];
    return e.group.traverse(a => {
        if (!a.isMesh)
            return;
        let i = !1;
        for (let d = a.parent; d; d = d.parent)
            d === e.head && (i = !0);
        let r = a.geometry.index ? a.geometry.toNonIndexed() : a.geometry.clone();
        r.deleteAttribute("uv"),
        r.applyMatrix4(i ? new Kt().multiplyMatrices(t, a.matrixWorld) : a.matrixWorld);
        let s = a.material.color
          , l = r.attributes.position.count
          , u = new Float32Array(l * 3);
        for (let d = 0; d < l; d++)
            u[d * 3] = s.r,
            u[d * 3 + 1] = s.g,
            u[d * 3 + 2] = s.b;
        r.setAttribute("color", new Za(u,3)),
        (i ? o : n).push(r)
    }
    ),
    {
        body: Ca(n),
        head: Ca(o),
        headAt: e.head.position.clone()
    }
}
var ed = class {
    constructor(t, n, o, a, i) {
        this.c = new Z(t,0,n),
        this.dest = null,
        this.isFree = a,
        this.bounds = i,
        this.dir = new Z(1,0,0),
        this.pause = Math.random() * 8,
        this.cows = Array.from({
            length: o
        }, (r, s) => {
            let l = Math.random() * Math.PI * 2
              , u = 3 + Math.sqrt(Math.random()) * (6 + o * .6);
            return {
                off: new Oi(Math.cos(l) * u,Math.sin(l) * u),
                pos: new Z(t + Math.cos(l) * u,0,n + Math.sin(l) * u),
                h: Math.random() * 6.28,
                phase: Math.random() * 10,
                graze: 0,
                coat: Ap[(s * 7 + o) % Ap.length]
            }
        }
        ),
        this.herders = []
    }
    pickDest() {
        let {minx: t, maxx: n, minz: o, maxz: a} = this.bounds;
        for (let i = 0; i < 20; i++) {
            let r = Math.random() * Math.PI * 2
              , s = 150 + Math.random() * 450
              , l = Dr.clamp(this.c.x + Math.cos(r) * s, t, n)
              , u = Dr.clamp(this.c.z + Math.sin(r) * s, o, a);
            if (this.isFree(l, u)) {
                this.dest = new Z(l,0,u);
                return
            }
        }
    }
    update(t) {
        if (this.pause > 0)
            this.pause -= t;
        else if (this.dest || this.pickDest(),
        this.dest) {
            let s = new Z().subVectors(this.dest, this.c)
              , l = s.length();
            if (l < 4)
                this.dest = null,
                this.pause = 10 + Math.random() * 25;
            else {
                s.divideScalar(l);
                let u = .85 * t
                  , d = this.c.x + s.x * u
                  , c = this.c.z + s.z * u;
                this.isFree(d, c) ? (this.c.set(d, 0, c),
                this.dir.lerp(s, Math.min(1, t)).normalize()) : (this.dest = null,
                this.pause = 2)
            }
        }
        let n = this.pause <= 0 && this.dest
          , o = Math.atan2(this.dir.x, this.dir.z)
          , a = Math.cos(o)
          , i = Math.sin(o);
        for (let s of this.cows) {
            s.off.x += (Math.random() - .5) * t * .6,
            s.off.y += (Math.random() - .5) * t * .6;
            let l = this.c.x + s.off.x * a + s.off.y * i
              , u = this.c.z - s.off.x * i + s.off.y * a
              , d = l - s.pos.x
              , c = u - s.pos.z
              , p = Math.hypot(d, c);
            if (p > .6) {
                let f = Math.min(p, (n ? 1.1 : .4) * t * (p > 6 ? 1.6 : 1))
                  , b = s.pos.x + d / p * f
                  , $ = s.pos.z + c / p * f;
                this.isFree(b, $) && (s.pos.x = b,
                s.pos.z = $);
                let T = Math.atan2(d, c);
                s.h += Math.atan2(Math.sin(T - s.h), Math.cos(T - s.h)) * Math.min(1, t * 2),
                s.graze = Math.max(0, s.graze - t * 2)
            } else
                s.graze = Math.min(1, s.graze + t * .8)
        }
        let r = 8 + this.cows.length * .6;
        this.herders.forEach( (s, l) => {
            let u = l === 0 ? 5 : -7
              , d = this.c.x - this.dir.x * r + this.dir.z * u
              , c = this.c.z - this.dir.z * r - this.dir.x * u
              , p = s.ch.group.position
              , f = d - p.x
              , b = c - p.z
              , $ = Math.hypot(f, b);
            if (s.walking = $ > .8,
            s.walking) {
                let T = Math.min($, ($ > 10 ? 2.2 : 1.2) * t)
                  , M = p.x + f / $ * T
                  , _ = p.z + b / $ * T;
                this.isFree(M, _) && (p.x = M,
                p.z = _),
                s.ch.group.rotation.y = Math.atan2(f, b)
            }
        }
        )
    }
}
  , td = class {
    constructor(t, n, o, a, i) {
        Object.assign(this, {
            obj: t,
            home: n.clone(),
            radius: o,
            speed: a,
            isFree: i,
            target: null,
            wait: Math.random() * 3,
            heading: Math.random() * 6.28
        })
    }
    pick() {
        for (let t = 0; t < 8; t++) {
            let n = Math.random() * Math.PI * 2
              , o = Math.sqrt(Math.random()) * this.radius
              , a = this.home.x + Math.cos(n) * o
              , i = this.home.z + Math.sin(n) * o;
            if (this.isFree(a, i)) {
                this.target = new Z(a,0,i);
                return
            }
        }
    }
    update(t) {
        let n = this.obj.position;
        if (!this.target)
            return this.wait -= t,
            this.wait <= 0 && this.pick(),
            0;
        let o = new Z().subVectors(this.target, n);
        o.y = 0;
        let a = o.length();
        if (a < .4)
            return this.target = null,
            this.wait = 2 + Math.random() * 6,
            0;
        let i = Math.min(a, this.speed * t)
          , r = n.x + o.x / a * i
          , s = n.z + o.z / a * i;
        if (!this.isFree(r, s))
            return this.target = null,
            this.wait = 1,
            0;
        n.x = r,
        n.z = s;
        let l = Math.atan2(o.x, o.z);
        return this.heading += Math.atan2(Math.sin(l - this.heading), Math.cos(l - this.heading)) * Math.min(1, t * 4),
        this.obj.rotation.y = this.heading,
        1
    }
}
;
function Rp({scene: e, isFree: t, grassSpots: n, gate: o, patrolSpots: a, fuse: i, bounds: r}) {
    let s = []
      , l = [];
    n.slice(0, 8).forEach( ([D,K], L) => {
        let S = new ed(D,K,10 + L * 5 % 9,t,r);
        for (let C = 0; C < (L % 3 === 0 ? 2 : 1); C++) {
            let v = Do({
                body: "man",
                hair: "fila",
                outfit: "kaftan",
                fabric: "plain",
                skin: ["#6e3f22", "#8a5432", "#553019"][(L + C) % 3],
                hairColour: "#141110",
                top: ["#e8e0cc", "#7a5a3a", "#3f5f8a", "#e8e0cc"][(L + C) % 4],
                bottom: "#e8e0cc"
            })
              , I = Zt(v.chest || v.group, new oe(.025,.025,1.9,5), ri("#6b4a33"), .45, .95, .12);
            I.rotation.x = .2,
            v.group.position.set(D - 12 - C * 4, 0, K + 6),
            v.group.scale.setScalar(1.15),
            i(v.group),
            e.add(v.group),
            S.herders.push({
                ch: v,
                walking: !1
            })
        }
        l.push(S)
    }
    );
    let d = l.reduce( (D, K) => D + K.cows.length, 0)
      , c = T1()
      , p = new Me({
        vertexColors: !0,
        flatShading: !0,
        roughness: .85
    })
      , f = new yo(c.body,p,d)
      , b = new yo(c.head,p,d);
    f.castShadow = b.castShadow = !0,
    f.frustumCulled = b.frustumCulled = !1;
    {
        let D = 0;
        for (let K of l)
            for (let L of K.cows) {
                let S = new jo(L.coat);
                f.setColorAt(D, S),
                b.setColorAt(D, S),
                D++
            }
    }
    e.add(f, b);
    let $ = new Kt
      , T = new Kt
      , M = new Xa
      , _ = new Fr
      , V = new Z(1.05,1.05,1.05)
      , Y = new Z;
    s.push({
        kind: "herds",
        update(D, K, L) {
            let S = 0;
            for (let C of l) {
                C.update(D);
                for (let v of C.cows)
                    Y.set(v.pos.x, Math.abs(Math.sin(K * 4 + v.phase)) * .04 * (1 - v.graze), v.pos.z),
                    $.compose(Y, M.setFromEuler(_.set(0, v.h, 0)), V),
                    f.setMatrixAt(S, $),
                    T.compose(c.headAt, M.setFromEuler(_.set(.55 * v.graze + Math.sin(K * .7 + v.phase) * .08 * v.graze, 0, 0)), new Z(1,1,1)),
                    b.setMatrixAt(S, $.clone().multiply(T)),
                    S++;
                for (let v of C.herders) {
                    let I = v.ch.group.position
                      , z = !L || Math.abs(I.x - L.x) + Math.abs(I.z - L.z) < 320;
                    v.ch.group.visible = z,
                    z && v.ch.tick(K, v.walking ? 1 : 0)
                }
            }
            f.instanceMatrix.needsUpdate = b.instanceMatrix.needsUpdate = !0
        }
    });
    let se = D => Do({
        body: D % 3 === 2 ? "woman" : "man",
        hair: "policecap",
        outfit: "police",
        fabric: "plain",
        skin: ["#6e3f22", "#553019", "#8a5432"][D % 3],
        hairColour: "#141110",
        top: "#1b2030",
        bottom: "#1b2030"
    });
    if (o) {
        let[D,K] = o.dir
          , L = K
          , S = -D
          , C = (be, ve) => new Z(o.x + D * be + L * ve,0,o.z + K * be + S * ve)
          , v = ri("#d64a1f")
          , I = ri("#f4f1ea");
        for (let be = 0; be < 4; be++) {
            let ve = C(60, -6 + be * 3)
              , Dt = Zt(e, new oe(.45,.45,1.1,10), v, ve.x, .55, ve.z);
            Zt(e, new oe(.46,.46,.18,10), I, ve.x, .75, ve.z)
        }
        let z = document.createElement("canvas");
        z.width = 256,
        z.height = 96;
        let G = z.getContext("2d");
        G.fillStyle = "#1b2030",
        G.fillRect(0, 0, 256, 96),
        G.fillStyle = "#fff",
        G.font = "800 52px DM Sans, sans-serif",
        G.textAlign = "center",
        G.textBaseline = "middle",
        G.fillText("POLICE", 128, 50);
        let O = new Ke(z);
        O.colorSpace = qe;
        let q = C(60, 7)
          , we = Zt(e, new Ue(2.2,.85), new Me({
            map: O,
            side: tn
        }), q.x, 1.7, q.z);
        we.rotation.y = Math.atan2(D, K) + Math.PI,
        Zt(e, new oe(.05,.05,1.3,5), I, q.x, .65, q.z);
        for (let be = 0; be < 3; be++) {
            let ve = se(be)
              , Dt = C(58 + be * 2.5, 9 + be % 2 * 2);
            ve.group.position.copy(Dt),
            ve.group.rotation.y = Math.atan2(-L, -S),
            ve.group.scale.setScalar(1.15),
            i(ve.group),
            e.add(ve.group),
            s.push({
                kind: "guard",
                ch: ve
            })
        }
    }
    return a.slice(0, 6).forEach( ([D,K], L) => {
        let S = se(L + 3);
        S.group.position.set(D, 0, K),
        S.group.scale.setScalar(1.15),
        i(S.group),
        e.add(S.group),
        s.push({
            kind: "person",
            w: new td(S.group,new Z(D,0,K),60,1.3,t),
            ch: S
        })
    }
    ),
    {
        update(D, K, L) {
            for (let S of s) {
                if (S.kind === "herds") {
                    S.update(D, K, L);
                    continue
                }
                let C = S.kind === "cow" ? S.c.group : S.ch.group
                  , v = !L || Math.abs(C.position.x - L.x) + Math.abs(C.position.z - L.z) < 320;
                if (C.visible = v,
                !!v)
                    if (S.kind === "cow") {
                        let I = S.w.update(D);
                        S.c.group.children[0].position.y = 1.15 + (I ? Math.abs(Math.sin(K * 4 + S.phase)) * .05 : 0),
                        S.c.head.rotation.x = I ? 0 : .5 + Math.sin(K * .7 + S.phase) * .15
                    } else if (S.kind === "person") {
                        let I = S.w.update(D);
                        S.ch.tick(K, I)
                    } else
                        S.ch.tick(K, 0)
            }
        }
    }
}
function Hp({scene: e, graph: t, findPath: n, lane: o, along: a, models: i, count: r, onArrive: s, onHit: l, onHoot: u, inView: d= () => !0}) {
    let $ = [];
    for (let z = 0; z < r; z++)
        $.push(z % 7 < 4 ? "car" : z % 7 < 6 ? "taxi" : "keke");
    let T = $.map(z => {
        let G = i[z]();
        G.visible = !1,
        e.add(G);
        let O = {
            kind: z,
            mesh: G,
            route: null,
            s: 0,
            v: 0,
            vmax: 0,
            hire: z !== "car",
            hailed: null,
            active: !1,
            wait: Math.random() * 3
        };
        return G.traverse(q => {
            q.isMesh && (q.userData.traffic = O)
        }
        ),
        O
    }
    )
      , M = (z, G) => z + Math.random() * (G - z);
    function _(z, G) {
        for (let O = 0; O < 6; O++) {
            let q = Math.random() * Math.PI * 2
              , we = M(70, 260)
              , be = t.nearest(G.x + Math.cos(q) * we, G.z + Math.sin(q) * we)
              , ve = Math.random() * Math.PI * 2
              , Dt = M(300, 700)
              , [pt,Go] = t.nodes[be] || [];
            if (pt === void 0 || d(pt, Go) && Math.hypot(pt - G.x, Go - G.z) < 200)
                continue;
            let Ni = t.nearest(pt + Math.cos(ve) * Dt, Go + Math.sin(ve) * Dt);
            if (Ni < 0 || Ni === be)
                continue;
            let he = n(t, be, Ni);
            if (!he || he.length < 3)
                continue;
            let Pe = o(he);
            if (!(Pe.total < 150))
                return Object.assign(z, {
                    route: Pe,
                    s: 0,
                    v: 0,
                    vmax: z.kind === "keke" ? M(8, 10) : M(11, 16),
                    hailed: null,
                    active: !0,
                    unseen: 0,
                    age: 0,
                    seen: !1,
                    hootAt: -1e9
                }),
                z.mesh.visible = !0,
                V(z),
                !0
        }
        return !1
    }
    function V(z) {
        let G = a(z.route, z.s);
        z.mesh.position.set(G.x, 0, G.z),
        z.mesh.rotation.y = G.h,
        z.pos = G
    }
    function Y(z) {
        z.active = !1,
        z.mesh.visible = !1,
        z.wait = M(1, 4)
    }
    function se(z, G) {
        for (let O of T) {
            if (O.released)
                continue;
            if (!O.active) {
                O.wait -= z,
                O.wait <= 0 && !_(O, G) && (O.wait = 2);
                continue
            }
            let q = O.vmax
              , we = !1;
            if (!O.hailed) {
                let Dt = 6 + O.v * O.v / 28 + 4;
                for (let pt = 2; pt <= Dt && !we; pt += 2) {
                    let Go = a(O.route, Math.min(O.route.total, O.s + pt));
                    we = Math.hypot(Go.x - G.x, Go.z - G.z) < 2.6
                }
                if (we) {
                    q = 0;
                    let pt = performance.now();
                    pt - O.hootAt > 4e3 && Math.hypot(O.pos.x - G.x, O.pos.z - G.z) < 30 && (O.hootAt = pt,
                    u?.(O))
                }
            }
            if (O.hailed) {
                let Dt = O.hailed.s - O.s;
                if (q = Math.min(q, Math.max(Dt > 1 ? 1.5 : 0, Dt * .9)),
                Dt < 1 && O.v < 1.6) {
                    O.v = 0;
                    let pt = O.hailed;
                    O.hailed = null,
                    s(O, pt);
                    continue
                }
            }
            if (O.v += Math.max((we ? -14 : -9) * z, Math.min(4 * z, q - O.v)),
            O.s += O.v * z,
            O.s >= O.route.total) {
                Y(O);
                continue
            }
            V(O);
            let be = Math.hypot(O.pos.x - G.x, O.pos.z - G.z);
            be < 1.8 && O.v > 6 && l?.(O);
            let ve = d(O.pos.x, O.pos.z);
            O.age += z,
            ve && (O.seen = !0),
            O.unseen = !O.hailed && be > 40 && !ve && (O.seen || O.age > 25) ? O.unseen + z : 0,
            (be > 320 || O.unseen > 2) && Y(O)
        }
    }
    function D(z, G) {
        let O = null;
        for (let q of T) {
            if (!q.active || !q.hire || q.hailed || q.released || G && q !== G || Math.hypot(q.pos.x - z.x, q.pos.z - z.z) > 90)
                continue;
            let we = 14
              , be = null;
            for (let ve = q.s + 10; ve < Math.min(q.route.total - 2, q.s + 120); ve += 3) {
                let Dt = a(q.route, ve)
                  , pt = Math.hypot(Dt.x - z.x, Dt.z - z.z);
                pt < we && (we = pt,
                be = ve)
            }
            be !== null && (!O || be - q.s < O.s - O.v.s) && (O = {
                v: q,
                s: be
            })
        }
        return O
    }
    let K = z => {
        z.v.hailed = {
            s: z.s
        }
    }
      , L = z => {
        z && (z.hailed = null)
    }
    ;
    function S(z) {
        z.released = !0,
        z.active = !1
    }
    function C(z) {
        z.released = !1,
        Y(z),
        z.mesh.visible = !1,
        e.add(z.mesh)
    }
    function v(z) {
        for (let G of T)
            G.released || (G.mesh.visible = z && G.active)
    }
    return {
        update: se,
        hailable: D,
        hail: K,
        cancelHail: L,
        release: S,
        reclaim: C,
        setVisible: v,
        meshes: () => {
            let z = [];
            for (let G of T)
                G.active && !G.released && G.mesh.traverse(O => {
                    O.isMesh && z.push(O)
                }
                );
            return z
        }
    }
}
function Dl(e=13909309) {
    let t = new Ae
      , n = r => new Me({
        color: r,
        flatShading: !0,
        roughness: .8
    })
      , o = (r, s, l, u, d) => {
        let c = new ae(r,s);
        return c.position.set(l, u, d),
        c.castShadow = !0,
        t.add(c),
        c
    }
      , a = n(9067059);
    for (let r of [-1.4, 1.4])
        for (let s of [-.9, .9])
            o(new fe(.1,2.4,.1), a, r, 1.2, s);
    o(new fe(3,.12,1.4), a, 0, .9, .2);
    for (let r = 0; r < 6; r++)
        o(new fe(.5,.08,2.1), n(r % 2 ? 16777215 : e), -1.25 + r * .5, 2.45, 0);
    let i = [15906106, 2067020, 14251782, 12597547, 9067059];
    for (let r = 0; r < 5; r++)
        o(new fe(.4,.25,.4), n(i[r]), -1.1 + r * .55, 1.08, .3);
    return t
}
function zp(e, t, n) {
    let o = document.createElement("canvas");
    o.width = 640,
    o.height = 120;
    let a = o.getContext("2d");
    a.fillStyle = t,
    a.fillRect(0, 0, 640, 120),
    a.fillStyle = n,
    a.font = "900 76px DM Sans, sans-serif",
    a.textAlign = "center",
    a.textBaseline = "middle",
    a.fillText(e, 320, 64);
    let i = new Ke(o);
    return i.colorSpace = qe,
    i
}
function Ip(e) {
    let t = new Ae
      , n = [13909309, 15906106, 2067020, 2060241, 14251782, 9067059];
    for (let i = 0; i < 2; i++)
        for (let r = 0; r < 4; r++) {
            let s = Dl(n[(i * 4 + r) % n.length]);
            s.position.set(-5.4 + r * 3.6, 0, -i * 4.5),
            s.rotation.y = i ? Math.PI : 0,
            t.add(s)
        }
    let o = new Me({
        color: 9067059,
        flatShading: !0
    });
    for (let i of [-7.6, 7.6]) {
        let r = new ae(new fe(.2,4.6,.2),o);
        r.position.set(i, 2.3, 2),
        t.add(r)
    }
    let a = new ae(new Ue(9,1.7),new ze({
        map: zp(e.toUpperCase(), "#1f8a4c", "#ffffff"),
        side: tn
    }));
    return a.position.set(0, 4.3, 2),
    t.add(a),
    t
}
function Pp(e) {
    let t = new Ae
      , n = (r, s, l, u, d) => {
        let c = new ae(r,s);
        return c.position.set(l, u, d),
        c.castShadow = !0,
        t.add(c),
        c
    }
      , o = (r, s={}) => new Me({
        color: r,
        flatShading: !0,
        roughness: .6,
        ...s
    });
    n(new fe(10,5,7), o(2826803), 0, 2.5, -3.5),
    n(new fe(8,3,.08), o(12572384, {
        roughness: .1,
        metalness: .2,
        transparent: !0,
        opacity: .6
    }), 0, 1.7, .02),
    n(new fe(10.2,.3,1.4), o(13938487, {
        metalness: .6
    }), 0, 3.6, .5);
    let a = new ae(new Ue(6.5,1.1),new ze({
        map: zp(e.toUpperCase(), "#2b2233", "#f3dc8c")
    }));
    a.position.set(0, 4.4, .05),
    t.add(a);
    let i = [13909309, 15906106, 7153881];
    for (let r = 0; r < 3; r++) {
        let s = -2.6 + r * 2.6;
        n(new fe(.55,1.1,.3), o(i[r]), s, 1.35, -.6),
        n(new Ln(.16,8,6), o(15261904), s, 2.1, -.6),
        n(new oe(.03,.03,.8,6), o(10066329), s, .4, -.6)
    }
    return t
}
var eo = {
    rice: {
        name: "Rice (paint bucket)",
        price: 4500,
        meals: 3,
        fill: 40
    },
    garri: {
        name: "Garri (paint bucket)",
        price: 2e3,
        meals: 3,
        fill: 30
    },
    beans: {
        name: "Beans (paint bucket)",
        price: 3e3,
        meals: 3,
        fill: 35
    },
    yam: {
        name: "Tuber of yam",
        price: 2500,
        meals: 2,
        fill: 40
    },
    indomie: {
        name: "Carton of Indomie",
        price: 9e3,
        meals: 10,
        fill: 25
    },
    eggs: {
        name: "Crate of eggs",
        price: 4e3,
        meals: 6,
        fill: 15
    }
}
  , Aa = {
    george: {
        name: "George fabric",
        kind: "fabric",
        price: 25e3,
        text: "Rich embroidered wrapper fabric for your outfit."
    },
    sequin: {
        name: "Sequin fabric",
        kind: "fabric",
        price: 4e4,
        text: "Sparkly owambe fabric. All eyes on you."
    },
    shades: {
        name: "Sunglasses",
        kind: "acc",
        price: 8e3,
        text: "Dark shades. Big boy energy."
    },
    cap: {
        name: "Face cap",
        kind: "acc",
        price: 5e3,
        text: "A smart cap."
    },
    chain: {
        name: "Gold chain",
        kind: "acc",
        price: 15e4,
        text: "Heavy gold chain. You've made it."
    }
}
  , nd = ["george", "sequin"]
  , Lp = [{
    id: "garki",
    name: "Area 10 Market (Garki)",
    kind: "market",
    near: [-449, 2295],
    sells: ["rice", "garri", "beans", "yam", "eggs"]
}, {
    id: "boutique",
    name: "Zuma Boutique",
    kind: "boutique",
    near: [160, 430]
}]
  , _n = [{
    id: "bed2",
    cat: "Bedroom",
    name: "Wooden bed",
    price: 8e4
}, {
    id: "bed3",
    cat: "Bedroom",
    name: "King-size bed",
    price: 35e4
}, {
    id: "wardrobe",
    cat: "Bedroom",
    name: "Wardrobe",
    price: 15e4
}, {
    id: "sofa2",
    cat: "Living room",
    name: "Fabric sofa",
    price: 12e4
}, {
    id: "sofa3",
    cat: "Living room",
    name: "Leather sofa",
    price: 45e4
}, {
    id: "rug",
    cat: "Living room",
    name: "Rug",
    price: 4e4
}, {
    id: "lamp",
    cat: "Living room",
    name: "Floor lamp",
    price: 3e4
}, {
    id: "shelf",
    cat: "Living room",
    name: "Bookshelf (bigger rooms)",
    price: 7e4
}, {
    id: "art",
    cat: "Living room",
    name: "Wall art",
    price: 5e4
}, {
    id: "plant",
    cat: "Living room",
    name: "Plant",
    price: 15e3
}, {
    id: "dining",
    cat: "Living room",
    name: "Dining set (bigger rooms)",
    price: 25e4
}, {
    id: "tv1",
    cat: "Entertainment",
    name: "32-inch TV",
    price: 15e4
}, {
    id: "tv2",
    cat: "Entertainment",
    name: "65-inch smart TV",
    price: 7e5
}, {
    id: "ps5",
    cat: "Entertainment",
    name: "PS5",
    price: 85e4
}, {
    id: "speaker",
    cat: "Entertainment",
    name: "Bluetooth speaker",
    price: 9e4
}, {
    id: "radio",
    cat: "Entertainment",
    name: "Radio",
    price: 25e3
}, {
    id: "fridge1",
    cat: "Kitchen",
    name: "Small fridge",
    price: 18e4
}, {
    id: "fridge2",
    cat: "Kitchen",
    name: "Double-door fridge",
    price: 65e4
}, {
    id: "cooker1",
    cat: "Kitchen",
    name: "Gas cooker",
    price: 6e4
}, {
    id: "cooker2",
    cat: "Kitchen",
    name: "Standing cooker + oven",
    price: 35e4
}, {
    id: "fan",
    cat: "Cooling & power",
    name: "Standing fan",
    price: 35e3
}, {
    id: "ac",
    cat: "Cooling & power",
    name: "Split AC (1.5 HP)",
    price: 55e4
}, {
    id: "gen",
    cat: "Cooling & power",
    name: "Generator",
    price: 18e4
}, {
    id: "solar",
    cat: "Cooling & power",
    name: "Inverter + solar panels",
    price: 15e5
}]
  , od = {
    nyanya: [3e5, 9e5],
    lugbe: [3e5, 9e5],
    kuje: [25e4, 75e4],
    kubwa: [6e5, 18e5],
    gwarinpa: [15e5, 45e5],
    maitama: [6e6, 18e6]
}
  , si = {
    arise: {
        name: "Arise News",
        yt: "UCyEJX-kSj0kOOCS7Qlq2G7g"
    },
    channels: {
        name: "Channels TV",
        yt: "UCEXGDNclvmg6RW0vipJYsTQ"
    },
    tvc: {
        name: "TVC News",
        yt: "UCgp4A6I8LCWrhUzn-5SbKvA"
    }
}
  , Np = {
    name: "Koinonia",
    yt: "UCq2ueL6wl7slTuInRbFpe7w"
};
var Xr = [{
    id: "truckcentral",
    name: "Truck Central",
    at: [-1314, 706],
    kind: "trucks",
    far: !1
}, {
    id: "trukadero",
    name: "Trukadero",
    at: [-1386, -1688],
    kind: "bowling",
    far: !1
}, {
    id: "farmcity",
    name: "Farm City",
    at: [-1905, -2292],
    kind: "arcade",
    far: !1
}, {
    id: "blucabana",
    name: "BluCabana",
    at: [-5844, -2311],
    kind: "cabana",
    far: !0
}, {
    id: "airport",
    name: "Nnamdi Azikiwe Airport",
    at: [-24402, 4364],
    kind: "airport",
    far: !0
}, {
    id: "miva",
    name: "Miva Open University",
    short: "MIVA OPEN UNIVERSITY",
    at: [-5067, -933],
    kind: "campus",
    colour: "#6d28d9",
    far: !1
}, {
    id: "nile",
    name: "Nile University",
    short: "NILE UNIVERSITY OF NIGERIA",
    at: [-10162, 5093],
    kind: "campus",
    colour: "#1f4e9c",
    far: !0
}, {
    id: "uniabuja",
    name: "University of Abuja",
    short: "UNIVERSITY OF ABUJA",
    at: [-34563, 8780],
    kind: "campus",
    colour: "#1f8a4c",
    far: !0
}, {
    id: "veritas",
    name: "Veritas University",
    short: "VERITAS UNIVERSITY",
    at: [-7969, -25203],
    kind: "campus",
    colour: "#7a1f2b",
    far: !0
}, {
    id: "bingham",
    name: "Bingham University",
    short: "BINGHAM UNIVERSITY",
    at: [23045, 11524],
    kind: "campus",
    colour: "#c0392b",
    far: !0
}]
  , Ge = (e, t, n) => new fe(e,t,n)
  , ke = (e, t={}) => new Me({
    color: e,
    flatShading: !0,
    roughness: .7,
    ...t
})
  , Fl = e => new ze({
    color: e
});
function li(e, t, n, o=900, a=150) {
    let i = document.createElement("canvas");
    i.width = o,
    i.height = a;
    let r = i.getContext("2d");
    r.fillStyle = t,
    r.fillRect(0, 0, o, a),
    r.fillStyle = n,
    r.font = `900 ${Math.round(a * .6)}px DM Sans, sans-serif`,
    r.textAlign = "center",
    r.textBaseline = "middle",
    r.fillText(e, o / 2, a / 2 + 4);
    let s = new Ke(i);
    return s.colorSpace = qe,
    s
}
var ci = (e, t, n) => new ae(new Ue(t,n),new ze({
    map: e,
    side: tn
}));
function Op(e) {
    let t = new Ae
      , n = (a, i, r, s, l) => {
        let u = new ae(a,i);
        return u.position.set(r, s, l),
        u.castShadow = !0,
        t.add(u),
        u
    }
      , o = n(Ge(30, .12, 22), ke(12170150), 0, .06, 2);
    if (o.castShadow = !1,
    o.receiveShadow = !0,
    e.kind === "trucks") {
        [13909309, 15906106, 2060241, 16739029].forEach( (r, s) => {
            let l = -9 + s * 6;
            n(Ge(2.4, 2.6, 5), ke(r), l, 1.6, -6),
            n(Ge(2.5, .2, 1.4), ke(16777215), l, 2.6, -3.3),
            n(Ge(1.6, 1, .1), ke(2240573), l, 1.9, -3.48);
            for (let u of [-1, 1])
                n(new oe(.42,.42,.3,10), ke(1381653), l + u * 1.2, .42, -7).rotation.z = Math.PI / 2
        }
        );
        for (let r = 0; r < 6; r++) {
            let s = -10 + r % 3 * 10
              , l = 3 + Math.floor(r / 3) * 5;
            n(Ge(1.6, .08, 1.6), ke(9067059), s, .8, l),
            n(new oe(.06,.06,.8,6), ke(5592405), s, .4, l),
            n(new Pn(1.6,.6,8), ke(r % 2 ? 15906106 : 2067020), s, 2.6, l),
            n(new oe(.04,.04,2.3,6), ke(13421772), s, 1.5, l)
        }
        let i = ci(li("TRUCK CENTRAL", "#151515", "#f2b53a"), 10, 1.7);
        i.position.set(0, 5.2, -3.4),
        t.add(i);
        for (let r of [-5.2, 5.2])
            n(Ge(.25, 5.4, .25), ke(1381653), r, 2.7, -3.4)
    } else if (e.kind === "bowling") {
        n(Ge(20, 7, 12), ke(2826803), 0, 3.5, -6),
        n(Ge(6, 3, .1), ke(10466239, {
            roughness: .1
        }), 0, 1.5, .03);
        let a = ci(li("TRUKADERO", "#2b2233", "#ff6ad5"), 9, 1.6);
        a.position.set(0, 5.4, .07),
        t.add(a),
        n(new oe(.5,.9,3.2,12), ke(16777215), 8, 8.6, -4),
        n(new Ln(.62,12,10), ke(16777215), 8, 10.6, -4),
        n(Ge(1.2, .25, 1.25), Fl(13909309), 8, 9.7, -4)
    } else if (e.kind === "arcade") {
        n(Ge(24, 8, 14), ke(1709092), 0, 4, -7);
        let a = ci(li("FARM CITY GAME ARENA", "#1a1424", "#3dd6ff", 1400, 150), 14, 1.5);
        a.position.set(0, 6.4, .06),
        t.add(a),
        [16727480, 4052735, 15906106, 4063098].forEach( (r, s) => n(Ge(24.2, .15, .15), Fl(r), 0, .6 + s * 1.6, .05)),
        n(Ge(6, 3.2, .1), ke(10466239, {
            roughness: .1
        }), 0, 1.6, .04),
        n(Ge(.5, 2.2, .5), Fl(13909309), 9.5, 9.2, -5),
        n(new Ln(.6,10,8), Fl(13909309), 9.5, 10.6, -5),
        n(Ge(2.6, .5, 2.6), ke(1381653), 9.5, 8.2, -5)
    } else if (e.kind === "cabana") {
        n(Ge(16, 5, 10), ke(16777215), 0, 2.5, -6),
        n(Ge(16.4, .5, 10.4), ke(2060241), 0, 5.2, -6),
        n(Ge(12, .15, 6), ke(4175840, {
            roughness: .15
        }), 0, .2, 4);
        for (let i of [-8, 8])
            n(new Pn(2.2,1.2,4), ke(2060241), i, 3.4, 4),
            n(new oe(.1,.1,2.8,6), ke(16777215), i, 1.4, 4);
        let a = ci(li("BLUCABANA", "#1f6fd1", "#ffffff"), 8, 1.4);
        a.position.set(0, 4, -.95),
        t.add(a)
    } else if (e.kind === "campus") {
        let a = n(Ge(70, .08, 50), ke(6265420), 0, .05, -26);
        a.castShadow = !1,
        a.receiveShadow = !0,
        n(Ge(4, .1, 40), ke(12170150), 0, .1, -20);
        for (let l of [-7, 7])
            n(Ge(1.6, 7, 1.6), ke(16052196), l, 3.5, 0);
        n(Ge(16, 1.8, 1.4), ke(e.colour), 0, 7.6, 0);
        let i = ci(li(e.short, e.colour, "#ffffff", 1400, 120), 15, 1.3);
        i.position.set(0, 7.6, .72),
        t.add(i);
        let r = ci(li(e.short, e.colour, "#ffffff", 1400, 120), 15, 1.3);
        r.position.set(0, 7.6, -.72),
        r.rotation.y = Math.PI,
        t.add(r);
        let s = [[-22, -24, 18, 9, 12], [22, -24, 18, 12, 12], [0, -42, 30, 10, 12]];
        for (let[l,u,d,c,p] of s) {
            n(Ge(d, c, p), ke(15327954), l, c / 2, u),
            n(Ge(d + .4, .6, p + .4), ke(e.colour), l, c + .3, u);
            for (let f = 0; f < Math.floor(d / 4); f++)
                for (let b = 0; b < Math.floor(c / 3.5); b++)
                    n(Ge(1.6, 1.4, .08), ke(10466239, {
                        roughness: .2
                    }), l - d / 2 + 2 + f * 4, 2 + b * 3.4, u + p / 2 + .03)
        }
        n(new oe(.08,.08,10,6), ke(13421772), 10, 5, -8),
        n(Ge(2, 1.2, .04), ke(34641), 11, 9.2, -8),
        n(Ge(.68, 1.2, .05), ke(16777215), 11, 9.2, -8)
    } else if (e.kind === "airport") {
        let a = n(Ge(420, .1, 260), ke(10131085), 0, .03, -60);
        a.castShadow = !1,
        a.receiveShadow = !0,
        n(Ge(120, 14, 30), ke(14673642), 0, 7, -20),
        n(Ge(122, 1.2, 32), ke(2060241), 0, 14.6, -20),
        n(Ge(100, 7, .2), ke(10466239, {
            roughness: .1,
            metalness: .2
        }), 0, 6, -4.8);
        let i = ci(li("NNAMDI AZIKIWE INTERNATIONAL AIRPORT", "#1f6fd1", "#ffffff", 1600, 120), 46, 3.4);
        i.position.set(0, 11.5, -4.7),
        t.add(i),
        n(new oe(2.5,3,32,10), ke(15263976), 75, 16, -40),
        n(new oe(5,4,5,10), ke(2240573, {
            roughness: .2
        }), 75, 34.5, -40);
        let r = new Ae;
        r.position.set(-20, 0, -95),
        t.add(r);
        let s = (l, u, d, c, p) => {
            let f = new ae(l,u);
            return f.position.set(d, c, p),
            f.castShadow = !0,
            r.add(f),
            f
        }
        ;
        s(new oe(2.4,2.4,40,14), ke(16053492), 0, 4, 0).rotation.x = Math.PI / 2,
        s(Ge(44, .6, 7), ke(16053492), 0, 3.4, 2),
        s(Ge(16, .5, 4), ke(16053492), 0, 5, -18),
        s(Ge(.6, 7, 5), ke(34641), 0, 8.5, -18),
        s(new Ln(2.4,12,10), ke(16053492), 0, 4, 20);
        for (let l of [-9, 9])
            s(new oe(1.2,1.2,4,10), ke(10134443), l, 2.4, 3).rotation.x = Math.PI / 2;
        for (let l of [-30, -15, 15, 30])
            n(Ge(8, .12, 2.4), ke(16777215), l, .1, 18)
    }
    return t
}
function ad(e) {
    let t = new ae(new Ue(e,e),new Me({
        color: 8366174,
        roughness: 1
    }));
    return t.rotation.x = -Math.PI / 2,
    t.position.y = -.02,
    t.receiveShadow = !0,
    t
}
var _p = 8e3
  , Gp = 11e3
  , Zr = 15e3
  , M1 = 20
  , id = {
    malaria: {
        name: "Malaria",
        feel: "Fever, chills and a headache. Mosquitoes got you."
    },
    flu: {
        name: "Flu",
        feel: "Sneezing, a sore throat and no energy."
    },
    typhoid: {
        name: "Typhoid",
        feel: "High fever and a bad stomach. Something you ate or drank."
    },
    cholera: {
        name: "Cholera",
        feel: "Running stomach. You need treatment fast."
    },
    foodpoison: {
        name: "Food poisoning",
        feel: "That last meal didn't agree with you."
    },
    faint: {
        name: "Fainted",
        title: "You fainted from hunger",
        feel: "You went too long without food and collapsed. Eat something as soon as you can, or it happens again."
    }
}
  , jp = 60 * 1e3
  , Bp = ["malaria", "malaria", "malaria", "malaria", "flu", "flu", "flu", "typhoid", "typhoid", "foodpoison", "cholera"];
function Dp(e, t) {
    let n = 2166136261;
    for (let o of e + ":" + t)
        n = Math.imul(n ^ o.charCodeAt(0), 16777619);
    return n >>>= 0,
    n % 100 >= M1 ? null : {
        kind: Bp[(n >>> 8) % Bp.length],
        afterMin: 5 + (n >>> 16) % 21
    }
}
var dn = {
    name: "General Hospital",
    near: [320, 860]
}
  , nn = (e, t, n) => new fe(e,t,n)
  , Wo = (e, t={}) => new Me({
    color: e,
    flatShading: !0,
    roughness: .6,
    ...t
})
  , Ui = e => new ze({
    color: e
});
function $1(e, t, n) {
    let o = document.createElement("canvas");
    o.width = t,
    o.height = n;
    let a = o.getContext("2d");
    a.fillStyle = "#ffffff",
    a.fillRect(0, 0, t, n),
    a.fillStyle = "#d42a2a",
    a.font = `900 ${Math.round(n * .62)}px DM Sans, sans-serif`,
    a.textAlign = "center",
    a.textBaseline = "middle",
    a.fillText(e, t / 2, n / 2 + 4);
    let i = new Ke(o);
    return i.colorSpace = qe,
    i
}
function Fp() {
    let e = new Ae
      , t = (o, a, i, r, s) => {
        let l = new ae(o,a);
        return l.position.set(i, r, s),
        l.castShadow = !0,
        e.add(l),
        l
    }
    ;
    t(nn(22, 9, 12), Wo(16053488), 0, 4.5, -6),
    t(nn(22.2, .6, 12.2), Wo(2067020), 0, 9.2, -6),
    t(nn(6, 3.4, 3), Wo(15133935), 0, 1.7, 1.2),
    t(nn(3, 2.8, .1), Wo(10466239, {
        roughness: .15
    }), 0, 1.4, 2.72);
    for (let o of [-8, -4.5, 4.5, 8])
        for (let a of [3, 6.5])
            t(nn(2.2, 1.6, .08), Wo(10466239, {
                roughness: .2
            }), o, a, .03);
    let n = new ae(new Ue(9,1.4),new ze({
        map: $1("GENERAL HOSPITAL", 900, 140)
    }));
    return n.position.set(0, 8, .06),
    e.add(n),
    t(nn(2.4, .7, .2), Ui(13904426), 0, 5.2, .1),
    t(nn(.7, 2.4, .2), Ui(13904426), 0, 5.2, .1),
    e
}
function Yp() {
    let e = new Ae
      , t = (a, i, r, s, l) => {
        let u = new ae(a,i);
        return u.position.set(r, s, l),
        u.castShadow = !0,
        e.add(u),
        u
    }
      , n = Wo(16250869)
      , o = Wo(1381653);
    t(nn(2.1, 2.1, 3.4), n, 0, 1.55, -.7),
    t(nn(2, 1.3, 1.6), n, 0, 1.05, 1.7),
    t(nn(1.9, .6, .05), Wo(2240573, {
        roughness: .15
    }), 0, 1.5, 2.52);
    for (let a of [-1.06, 1.06])
        t(nn(.04, .3, 4.9), Wo(13904426), a, 1.25, -.05),
        t(nn(.04, .6, .2), Ui(13904426), a, 2, -.7),
        t(nn(.04, .2, .6), Ui(13904426), a, 2, -.7);
    t(nn(1.2, .18, .3), Ui(2780159), -.35, 2.7, .7),
    t(nn(.6, .18, .3), Ui(16722474), .45, 2.7, .7);
    for (let[a,i] of [[-.95, 1.6], [.95, 1.6], [-.95, -1.5], [.95, -1.5]])
        t(new oe(.42,.42,.3,12), o, a, .42, i).rotation.z = Math.PI / 2;
    return e
}
var qo = [6e4, 61200]
  , S1 = 12
  , A1 = 9
  , qp = 1200 * 1e3
  , Up = 600 * 1e3
  , Vp = {
    rude: {
        mins: 5,
        bail: 1e4,
        reason: "Disrespecting an officer"
    },
    ran: {
        mins: 8,
        bail: 25e3,
        reason: "Running from the police"
    },
    fight: {
        mins: 6,
        bail: 2e4,
        reason: "Fighting in public"
    },
    steal: {
        mins: 8,
        bail: 25e3,
        reason: "Pickpocketing"
    },
    gang: {
        mins: 6,
        bail: 2e4,
        reason: "Gang activity"
    },
    lied: {
        mins: 5,
        bail: 1e4,
        reason: "Lying to an officer"
    }
}
  , Jp = [{
    id: "gate",
    name: "City Gate Police Station",
    near: "gate"
}, {
    id: "cbd",
    name: "Central Police Station",
    near: [700, -300]
}]
  , Ot = (e, t, n) => new fe(e,t,n)
  , hn = (e, t={}) => new Me({
    color: e,
    flatShading: !0,
    roughness: .7,
    ...t
})
  , Wp = e => new ze({
    color: e
});
function Kp(e, t, n, o, a, i) {
    let r = document.createElement("canvas");
    r.width = t,
    r.height = n;
    let s = r.getContext("2d");
    s.fillStyle = o,
    s.fillRect(0, 0, t, n),
    s.fillStyle = a,
    s.font = i,
    s.textAlign = "center",
    s.textBaseline = "middle",
    s.fillText(e, t / 2, n / 2 + 4);
    let l = new Ke(r);
    return l.colorSpace = qe,
    l
}
function Xp() {
    let e = new Ae
      , t = (a, i, r, s, l) => {
        let u = new ae(a,i);
        return u.position.set(r, s, l),
        u.castShadow = !0,
        e.add(u),
        u
    }
    ;
    t(Ot(16, 6, 9), hn(15659250), 0, 3, -4.5),
    t(Ot(16.2, .8, 9.2), hn(1780331), 0, 6.2, -4.5),
    t(Ot(16.1, .5, 9.1), hn(1780331), 0, .25, -4.5),
    t(Ot(2.4, 3, .1), hn(1777712), 0, 1.5, .02);
    for (let a of [-5, -2.5, 2.5, 5])
        t(Ot(1.6, 1.3, .08), hn(10466239, {
            roughness: .2
        }), a, 3.2, .03);
    let n = new ae(new Ue(7,1.2),new ze({
        map: Kp("POLICE", 640, 110, "#1b2a6b", "#ffffff", "900 86px DM Sans, sans-serif")
    }));
    n.position.set(0, 4.8, .06),
    e.add(n),
    t(Ot(.5, .3, .5), Wp(2780159), -7.6, 6.8, -.4),
    t(Ot(.5, .3, .5), Wp(16722474), 7.6, 6.8, -.4),
    t(new oe(.07,.07,8,6), hn(13421772), 7, 4, 2);
    let o = t(Ot(1.6, 1, .03), hn(34641), 7.8, 7.4, 2);
    return t(Ot(.54, 1, .04), hn(16777215), 7.8, 7.4, 2),
    e
}
function Zp(e) {
    let t = new Ae
      , n = S1
      , o = A1
      , a = (c, p, f, b, $) => {
        let T = new ae(c,p);
        return T.position.set(f, b, $),
        t.add(T),
        T
    }
      , i = a(Ot(n + 8, .2, o + 8), hn(7301730), 0, -.1, 2);
    i.receiveShadow = !0;
    let r = hn(10133670);
    a(Ot(n, 3.2, .3), r, 0, 1.6, -o / 2),
    a(Ot(.3, 3.2, o), r, -n / 2, 1.6, 0),
    a(Ot(.3, 3.2, o), r, n / 2, 1.6, 0);
    let s = hn(2829099, {
        metalness: .6,
        roughness: .4
    });
    for (let c = -n / 2 + .3; c <= n / 2 - .2; c += .45)
        a(new oe(.04,.04,3,6), s, c, 1.5, o / 2);
    a(Ot(n, .12, .12), s, 0, 3, o / 2),
    a(Ot(n, .12, .12), s, 0, .1, o / 2);
    for (let c of [-2.5, .5])
        a(Ot(3.5, .45, .8), hn(5916210), -n / 2 + 2.1, .45, c);
    a(Ot(3.5, .45, .8), hn(5916210), n / 2 - 2.1, .45, -2.5),
    a(Ot(3, 1, 1.2), hn(3877402), 2, .5, o / 2 + 3);
    let l = new ae(new Ue(4,.8),new ze({
        map: Kp("POLICE CELL", 512, 100, "#1b2a6b", "#ffffff", "900 64px DM Sans, sans-serif")
    }));
    l.position.set(0, 2.6, -o / 2 + .17),
    t.add(l);
    let u = e?.();
    return u && (u.group.position.set(2, 0, o / 2 + 4.2),
    u.group.rotation.y = Math.PI,
    t.add(u.group)),
    {
        group: t,
        floor: i,
        isFree: (c, p) => Math.abs(c) < n / 2 - .5 && p > -o / 2 + .5 && p < o / 2 - .5,
        spawn: [0, 1.5],
        desk: u
    }
}
function Qp({scene: e, graph: t, findPath: n, lane: o, along: a, makeOfficer: i, count: r}) {
    let s = [];
    for (let b = 0; b < r; b++) {
        let $ = i(b);
        $.group.visible = !1,
        e.add($.group),
        s.push({
            ch: $,
            route: null,
            s: 0,
            active: !1,
            wait: Math.random() * 4
        })
    }
    function l(b, $) {
        for (let T = 0; T < 5; T++) {
            let M = Math.random() * Math.PI * 2
              , _ = 60 + Math.random() * 220
              , V = t.nearest($.x + Math.cos(M) * _, $.z + Math.sin(M) * _);
            if (V < 0)
                continue;
            let[Y,se] = t.nodes[V]
              , D = Math.random() * Math.PI * 2
              , K = t.nearest(Y + Math.cos(D) * 260, se + Math.sin(D) * 260);
            if (K < 0 || K === V)
                continue;
            let L = n(t, V, K);
            if (!(!L || L.length < 2))
                return b.route = o(L, 7),
                b.s = 0,
                b.active = !0,
                b.ch.group.visible = !0,
                !0
        }
        return !1
    }
    function u(b, $, T, M) {
        for (let _ of s) {
            if (_ === M)
                continue;
            if (!_.active) {
                _.wait -= b,
                _.wait <= 0 && !l(_, T) && (_.wait = 3);
                continue
            }
            if (_.s += 1.4 * b,
            _.s >= _.route.total) {
                _.active = !1,
                _.ch.group.visible = !1,
                _.wait = 2 + Math.random() * 4;
                continue
            }
            let V = a(_.route, _.s);
            _.ch.group.position.set(V.x, 0, V.z),
            _.ch.group.rotation.y = V.h,
            _.ch.tick($, 1),
            Math.hypot(V.x - T.x, V.z - T.z) > 500 && (_.active = !1,
            _.ch.group.visible = !1,
            _.wait = 1)
        }
    }
    let d = (b, $) => {
        let T = null
          , M = $;
        for (let _ of s)
            if (_.active) {
                let V = _.ch.group.position
                  , Y = Math.hypot(V.x - b.x, V.z - b.z);
                Y < M && (M = Y,
                T = _)
            }
        return T
    }
    ;
    function c(b) {
        let $ = s.find(M => !M.active) || s[0]
          , T = Math.random() * Math.PI * 2;
        return $.ch.group.position.set(b.x + Math.cos(T) * 35, 0, b.z + Math.sin(T) * 35),
        $.active = !0,
        $.route = null,
        $.ch.group.visible = !0,
        $
    }
    return {
        update: u,
        nearest: d,
        summon: c,
        release: b => {
            b.active = !1,
            b.ch.group.visible = !1,
            b.wait = 4
        }
        ,
        setVisible: b => {
            for (let $ of s)
                $.ch.group.visible = b && $.active
        }
    }
}
var em = [{
    q: "Oga, where you dey go like this?",
    a: [["Just going to see a friend, officer.", "polite"], ["To find money, like everybody \u{1F605}", "funny"], ["Na my business be that.", "rude"]]
}, {
    q: "Show me your ID card.",
    a: [["Here it is, officer.", "polite"], ["Na my fine face be my ID, sir \u{1F60E}", "funny"], ["Wetin you wan use am do?", "rude"]]
}, {
    q: "Open your bag. Wetin dey inside?",
    a: [["Just my things. You can check.", "polite"], ["Only pure water and hope, sir.", "funny"], ["You no get warrant, abeg.", "rude"]]
}, {
    q: "You know say this na high-security zone?",
    a: [["I know, officer. I'm just passing.", "polite"], ["Na why I dress well today na \u{1F57A}", "funny"], ["So? Na your papa get the road?", "rude"]]
}, {
    q: "Why you dey look me like that?",
    a: [["Sorry sir, I was just greeting you. Good day!", "polite"], ["Your uniform fine well well, sir.", "funny"], ["I fit look anybody I like.", "rude"]]
}, {
    q: "Bring your phone. Make I see who you call last.",
    a: [["Here, officer.", "polite"], ["Na my mama. She say make I greet you.", "funny"], ["You no fit check my phone.", "rude"]]
}, {
    q: "Na you I see dey run up and down here since morning?",
    a: [["No sir, I just got here.", "polite"], ["Na exercise, sir. Body must shine \u{1F3C3}", "funny"], ["Mind your business.", "rude"]]
}, {
    q: "Which team you dey support?",
    a: [["Super Eagles, officer!", "polite"], ["Any team wey dey win that day \u{1F605}", "funny"], ["Wetin concern you?", "rude"]]
}, {
    q: "Wetin you carry for that your pocket?",
    a: [["Just my wallet and keys, officer.", "polite"], ["Na only receipts and prayers \u{1F64F}", "funny"], ["Comot your hand for my pocket.", "rude"]]
}, {
    q: "You dey smell like person wey dey smoke. Wetin you smoke?",
    a: [["Nothing, officer. That's the generator smoke.", "polite"], ["Na suya smoke, sir. You want some?", "funny"], ["Na you dey smoke.", "rude"]]
}, {
    q: "Who you know for this Abuja?",
    a: [["Nobody big, officer. I'm just a hard worker.", "polite"], ["I know you now, sir \u{1F601}", "funny"], ["I know people wey fit transfer you.", "rude"]]
}, {
    q: "Why your shirt dey rumpled like this?",
    a: [["Long day, officer. Sorry.", "polite"], ["Na the fashion now, sir. Rough and ready.", "funny"], ["Na you buy am for me?", "rude"]]
}]
  , tm = e => e[Math.floor(Math.random() * e.length)];
function nm(e) {
    let t = []
      , n = (a, i) => tm(a.filter(r => r && r !== i)) || null
      , o = n(e.homes, e.home);
    if (e.home && o && t.push({
        q: "Which area you dey stay?",
        a: [[`${e.home}, officer.`, "polite"], [`${o}, sir.`, "lie"], ["Why you wan know where I dey stay?", "rude"]],
        caught: `${o}? Your ID say ${e.home}. Why you dey lie for police?`
    }),
    e.job) {
        let a = n(e.jobs, e.job);
        t.push({
            q: "Where you dey work?",
            a: [[`I work at ${e.job}.`, "polite"], ...a ? [[`At ${a}, sir.`, "lie"]] : [], ["Na you go pay my salary?", "rude"]],
            caught: `${a}? Na lie. I sabi the people wey dey work there.`
        })
    } else
        t.push({
            q: "Wetin you dey do for work?",
            a: [["I'm still looking for work, officer.", "polite"], ["I be big CEO, sir. Oil and gas.", "lie"], ["Na you go give me work?", "rude"]],
            caught: "CEO? With this your shoe? You no get work. Stop lying."
        });
    return e.biz && t.push({
        q: "You get business for this town?",
        a: [[`Yes sir, I own ${e.biz}.`, "polite"], ["No sir, I no get anything.", "lie"], ["Na tax office you be?", "rude"]],
        caught: `You no get business? Na your name dey ${e.biz} signboard. Why you dey hide am?`
    }),
    e.crew && t.push({
        q: `I hear say you dey roll with ${e.crew}. Na cult?`,
        a: [["No sir, we're just friends from the area.", "polite"], [`${e.crew}? I no know them.`, "lie"], ["Na your business who I roll with?", "rude"]],
        caught: `You no know ${e.crew}? Your name dey their list. You dey lie.`
    }),
    e.rich && t.push({
        q: "See as your pocket fat. Na Yahoo you dey do?",
        a: [["No sir, I worked hard for it.", "polite"], ["Na God's blessing, sir \u{1F64F}", "funny"], ["Na your money?", "rude"]]
    }),
    e.car && t.push({
        q: "You get motor? Where the papers?",
        a: [["Yes officer, the papers are complete.", "polite"], ["No sir, I no get motor.", "lie"], ["You no fit touch my car.", "rude"]],
        caught: "You no get motor? E dey for your name for the register. You dey lie."
    }),
    e.night && t.push({
        q: "Why you dey waka for road this late?",
        a: [["Going home, officer.", "polite"], ["Night crawler, sir \u{1F989}", "funny"], ["Curfew no dey again.", "rude"]]
    }),
    e.hungry && t.push({
        q: "Why you dey look like person wey never chop since yesterday?",
        a: [["Hunger dey catch me, officer.", "polite"], ["I dey fast and pray, sir \u{1F64F}", "funny"], ["You go buy me food?", "rude"]]
    }),
    t
}
var rd = {
    polite: ["Hmm. Okay.", "I hear you.", "Alright.", "Okay, no wahala."],
    funny: ["\u{1F602} You no well. Okay.", "Ehen! You get joke o. Next one.", "Hahaha. This one sabi talk.", "\u{1F602} You for go do comedy."],
    flop: ["You think say na joke I dey make here?", "I dey laugh? Answer me well!", "Na Basketmouth you be? Talk sense!"],
    rude: ["You dey form? Answer me well!", "Who you dey talk to like that?!", "Last warning. Respect yourself!"]
}
  , Yl = tm;
var Qr = {
    nyanya: [8e4, 6e4],
    kubwa: [8e4, 62e3],
    gwarinpa: [8e4, 64e3],
    maitama: [8e4, 66e3],
    lugbe: [8e4, 68e3],
    kuje: [8e4, 7e4]
}
  , Gn = 260
  , We = (e, t, n) => new fe(e,t,n)
  , sd = new Map
  , Ce = (e, t={}) => {
    let n = e + JSON.stringify(t);
    return sd.has(n) || sd.set(n, new Me({
        color: e,
        flatShading: !0,
        roughness: .8,
        ...t
    })),
    sd.get(n)
}
;
function R1(e, t) {
    let n = new Ae
      , o = (i, r, s, l, u) => {
        let d = new ae(i,r);
        return d.position.set(s, l, u),
        d.castShadow = !0,
        d.receiveShadow = !0,
        n.add(d),
        d
    }
      , a = [15326403, 14214120, 15851974, 14930872, 13623503, 15784409][Math.floor(t() * 6)];
    if (e === "nyanya") {
        o(We(18, 3.2, 8), Ce(a), 0, 1.6, 0);
        let i = o(We(19, .25, 9.5), Ce(10133670, {
            metalness: .4
        }), 0, 3.55, 0);
        i.rotation.x = .06;
        for (let r = 0; r < 5; r++)
            o(We(.9, 2, .08), Ce(8014378), -7 + r * 3.5, 1, 4.02),
            o(We(.8, .7, .06), Ce(10466239), -5.6 + r * 3.5, 1.9, 4.02);
        o(new oe(.4,.4,.9,10), Ce(2060241), 8, .45, 5.5)
    } else if (e === "kubwa") {
        o(We(12, 3.4, 9), Ce(a), 0, 1.7, 0);
        let i = o(new Pn(8.6,2.6,4), Ce(8076074), 0, 4.7, 0);
        i.rotation.y = Math.PI / 4,
        i.scale.set(1, 1, .75),
        o(We(1, 2.1, .08), Ce(7031347), 0, 1.05, 4.52);
        for (let r of [-3.5, 3.5])
            o(We(1.4, 1.1, .06), Ce(10466239), r, 1.9, 4.52);
        for (let r of [-1, 1])
            o(We(5.4, 1.1, .2), Ce(16052714), r * 4.3, .55, 9)
    } else if (e === "gwarinpa") {
        o(We(12, 6.6, 10), Ce(a), 0, 3.3, 0),
        o(We(12.4, .4, 10.4), Ce(6123913), 0, 6.8, 0),
        o(We(1.4, 2.3, .08), Ce(3877404), -2, 1.15, 5.02);
        for (let i of [1.8, 4.9])
            for (let r of [-4.2, 2.2, 4.6])
                o(We(1.6, 1.3, .06), Ce(10466239), r, i, 5.02);
        o(We(3.2, .2, 1.6), Ce(6123913), 3.5, 3.3, 5.8)
    } else if (e === "lugbe") {
        o(We(11, 3.4, 9), Ce(a), 0, 1.7, 0),
        o(We(11.4, .5, 9.4), Ce(12169893), 0, 3.65, 0),
        o(We(1, 2.1, .08), Ce(5913122), -2, 1.05, 4.52);
        for (let i of [1.5, 3.8])
            o(We(1.4, 1.1, .06), Ce(10466239), i, 1.9, 4.52);
        o(new oe(.7,.7,1.4,12), Ce(2829099), 3.6, 4.6, -2.5);
        for (let i of [-1, 1])
            o(We(5.2, 1.6, .25), Ce(13222580), i * 4.4, .8, 9)
    } else if (e === "kuje") {
        o(We(10, 3.2, 8), Ce(a), 0, 1.6, 0);
        let i = o(We(11, .25, 10), Ce(10133670, {
            metalness: .4
        }), 0, 3.4, .6);
        i.rotation.x = -.08;
        for (let r of [-4.2, -1.4, 1.4, 4.2])
            o(We(.25, 3, .25), Ce(7031347), r, 1.5, 5.2);
        o(We(1, 2.1, .08), Ce(7031347), 0, 1.05, 4.02);
        for (let r of [-3, 3])
            o(We(1.2, 1, .06), Ce(10466239), r, 1.8, 4.02);
        o(new wo(1.6,0), Ce(4164170), -6.5, 2.4, 3),
        o(new oe(.22,.3,2,7), Ce(9071172), -6.5, 1, 3)
    } else {
        o(We(18, 7.6, 12), Ce(16249834), 0, 3.8, -1),
        o(We(18.6, .5, 12.6), Ce(13214827), 0, 7.85, -1);
        for (let i of [-3, 3])
            o(new oe(.4,.4,7.4,10), Ce(16777215), i, 3.7, 5.6);
        o(We(2, 2.8, .08), Ce(3877404), 0, 1.4, 5.02);
        for (let i of [2, 5.4])
            for (let r of [-6.5, -4.8, 4.8, 6.5])
                o(We(1.4, 1.6, .06), Ce(2240573, {
                    roughness: .2
                }), r, i, 5.02);
        for (let i of [-1, 1])
            o(We(7, 2.4, .4), Ce(16052196), i * 6.5, 1.2, 10),
            o(We(.6, 3, .6), Ce(13214827), i * 2.6, 1.5, 10);
        for (let i of [-1, 1])
            o(new oe(.22,.3,6,7), Ce(9071172), i * 10.5, 3, 8),
            o(new wo(1.8,0), Ce(3111493), i * 10.5, 6.4, 8)
    }
    return n
}
function om(e) {
    let t = new Ae
      , n = e.length * 97 + 13
      , o = () => (n = n * 16807 % 2147483647) / 2147483647
      , a = (c, p, f, b, $) => {
        let T = new ae(c,p);
        return T.position.set(f, b, $),
        T.receiveShadow = !0,
        t.add(T),
        T
    }
      , i = a(new Ue(Gn + 120,140), Ce(8366174, {
        roughness: 1
    }), 0, -.02, 0);
    i.rotation.x = -Math.PI / 2,
    a(We(Gn + 40, .1, 10), Ce(3814975, {
        roughness: .95
    }), 0, .05, 0);
    for (let c = -Gn / 2; c < Gn / 2; c += 9)
        a(We(3.5, .02, .3), Ce(15906106), c, .11, 0);
    for (let c of [-1, 1])
        a(We(Gn + 40, .18, 2.4), Ce(13617336), 0, .09, c * 6.2);
    let r = []
      , s = []
      , l = e === "nyanya" ? 18 : e === "maitama" ? 22 : 13
      , u = l + 8
      , d = e === "maitama" ? 12 : 10;
    for (let c of [-1, 1])
        for (let p = -Gn / 2 + u / 2; p < Gn / 2; p += u) {
            let f = R1(e, o)
              , b = c * (13 + d / 2 + 2);
            f.position.set(p, 0, b),
            c > 0 && (f.rotation.y = Math.PI),
            t.add(f),
            r.push([p - l / 2, p + l / 2, b - d / 2 - 1, b + d / 2 + 1]),
            s.push([p, b - c * (d / 2 + 2.5), c > 0 ? Math.PI : 0])
        }
    for (let c = -Gn / 2 + 10; c < Gn / 2; c += 30)
        for (let p of [-1, 1])
            a(new oe(.08,.12,6,6), Ce(6119784), c, 3, p * 7.6),
            a(We(.5, .15, .7), Ce(14605266, {
                emissive: 16765562,
                emissiveIntensity: .4
            }), c, 6, p * 7.1);
    return {
        group: t,
        ground: i,
        doors: s,
        solids: r
    }
}
function am() {
    let e = document.createElement("canvas");
    e.width = 512,
    e.height = 128;
    let t = e.getContext("2d");
    t.fillStyle = "#0f3d2e",
    t.beginPath(),
    t.roundRect(4, 4, 504, 120, 60),
    t.fill(),
    t.fillStyle = "#fff",
    t.font = "800 64px DM Sans, sans-serif",
    t.textAlign = "center",
    t.textBaseline = "middle",
    t.fillText("Your home", 256, 68);
    let n = new Ke(e);
    n.colorSpace = qe;
    let o = new Tl(new El({
        map: n,
        depthTest: !1
    }));
    return o.scale.set(4, 1, 1),
    o.renderOrder = 5,
    o
}
var Vi = {
    m_open: "Opened the phone menu",
    m_bank: "Bank",
    m_food: "Food",
    m_government: "Government",
    m_shop: "Shop",
    m_manage_government: "Manage government",
    m_manage_business: "Manage business",
    m_ride: "Ride",
    m_parties: "Parties",
    m_home: "Home",
    m_health: "Health",
    m_map: "Map",
    m_politics: "Politics",
    m_rankings: "Rankings",
    m_my_stuff: "My stuff",
    m_crew: "Crew",
    m_police: "Police",
    m_lawyers: "Lawyers",
    m_efcc: "EFCC",
    m_ads: "Ads",
    m_feedback: "Feedback",
    m_help: "Help",
    m_me: "Me",
    m_services: "Services (opened the list)",
    s_taxi: "Services: Taxi",
    s_market: "Services: Market & shops",
    s_trek: "Services: Trek",
    s_keke: "Services: Keke",
    s_along: "Services: Along",
    s_police: "Services: Police",
    s_ambulance: "Services: Ambulance",
    s_lawyer: "Services: Lawyer",
    s_fire: "Services: Fire service",
    s_mechanic: "Services: Mechanic"
}
  , im = e => "m_" + String(e).toLowerCase().replace(/[^a-z]+/g, "_").replace(/^_|_$/g, "")
  , Wl = {
    vote: "Votes cast",
    run: "Ran for office",
    ad_paid: "Ads bought",
    party: "House parties",
    party_open: "Parties opened to everyone",
    party_join: "Joined an open party",
    gist: "Gists",
    game: "House games",
    romance: "Romance requests",
    romance_yes: "Romance yeses",
    seduce: "Seduces",
    crew_trip: "Crew outings (paid)",
    crew_party: "Crew house parties",
    rally: "Crew rallies",
    crew_create: "Crews started",
    crew_join: "Crew joins",
    kick: "Kicked out",
    fight: "Fights",
    steal: "Thefts",
    venue: "Walked into a business",
    street: "Stepped onto their street",
    club: "Club Zuma entries",
    one_chance: "One chance robberies",
    shift: "Shifts started",
    invite: "House invites",
    biz_start: "Businesses started",
    room: "Opened a chat room",
    room_msg: "Room messages sent from the Rooms list",
    beg: "Begs",
    tv: "Turned on the TV",
    tv_arise: "TV: Arise News",
    tv_channels: "TV: Channels TV",
    tv_tvc: "TV: TVC News",
    radio: "Turned on the radio",
    church: "Went to church",
    mosque: "Went to the mosque"
};
var Ra = {
    efcc: {
        title: "EFCC Chairman",
        short: "EFCC Chairman",
        lawyer: !1,
        does: "Opens investigations into officials, sets the plea-bargain share (60\u201380%), and can drop a case under investigation"
    },
    agf: {
        title: "Attorney General of the Federation",
        short: "Attorney General",
        lawyer: !0,
        does: "Leads the prosecution (harder to be acquitted) and can discontinue one case per term (nolle prosequi)"
    },
    igp: {
        title: "Inspector-General of Police",
        short: "IGP",
        lawyer: !1,
        does: "Sets how often police stop and search people: fewer, normal, more, or a crackdown"
    }
}
  , ql = 1e6
  , QE = 24 * 36e5
  , ui = 1e5
  , wn = {
    jail: [5e3, 5e4],
    court: [5e4, 5e5]
};
var eT = 600 * 1e3
  , rm = {
    game: [{
        id: "g1",
        q: "A police officer stops you for a search in Abuja Life. What's the best way to answer?",
        a: ["Politely", "Rudely", "Run away"]
    }, {
        id: "g2",
        q: "An official steals public money. What happens first?",
        a: ["The EFCC may open an investigation that lasts a day", "They go straight to jail", "Nothing ever happens"]
    }, {
        id: "g3",
        q: "What is a plea bargain in Abuja Life?",
        a: ["Return a share of what the EFCC traced, resign, and walk free", "Pay double and stay in office", "A week in jail"]
    }, {
        id: "g4",
        q: "Someone in the police cell hires you. What do you do for them?",
        a: ["Cut what's left of their time in the cell in half", "Free them and pay their bail", "Nothing: lawyers only work in court"]
    }, {
        id: "g5",
        q: "How much may a lawyer charge to help someone in the police cell?",
        a: ["\u20A65,000 to \u20A650,000", "Anything they like", "\u20A61,000,000"]
    }, {
        id: "g6",
        q: "How much may a lawyer charge to defend someone in an EFCC case?",
        a: ["\u20A650,000 to \u20A6500,000", "Anything they like", "\u20A65,000,000"]
    }, {
        id: "g7",
        q: "Who chooses the EFCC Chairman, the Attorney General and the IGP?",
        a: ["The Minister, after the Senators recommend applicants", "Whoever pays the most", "Nobody: they're elected every day"]
    }, {
        id: "g8",
        q: "The EFCC charges you and you do nothing for 6 hours. What happens?",
        a: ["You're convicted", "The case is dropped", "You get a medal"]
    }, {
        id: "g9",
        q: "Who can discontinue one EFCC case per term after it's been charged?",
        a: ["The Attorney General", "Any lawyer", "The IGP"]
    }, {
        id: "g10",
        q: "Where does part of every lawyer's fee go?",
        a: ["Tax to the CBN, like any sale", "To the police", "Nowhere: it's all tax-free"]
    }],
    law: [{
        id: "n1",
        q: "What is the supreme law of Nigeria?",
        a: ["The Constitution of the Federal Republic of Nigeria, 1999 (as amended)", "The Criminal Code", "The rules of the Nigerian Bar Association"]
    }, {
        id: "n2",
        q: "Under the Constitution, a person charged with a crime is\u2026",
        a: ["Presumed innocent until proved guilty", "Presumed guilty until proved innocent", "Guilty if the police say so"]
    }, {
        id: "n3",
        q: "An arrested person has the right to\u2026",
        a: ["Remain silent and to consult a lawyer of their choice", "Nothing until they're charged", "Only a lawyer the police choose"]
    }, {
        id: "n4",
        q: "If there's a court within 40 km, how soon must an arrested person be brought before it (Section 35)?",
        a: ["Within one day (24 hours)", "Within one month", "Whenever the police are ready"]
    }, {
        id: "n5",
        q: "Which is the highest court in Nigeria?",
        a: ["The Supreme Court", "The Federal High Court", "The Magistrate's Court"]
    }, {
        id: "n6",
        q: "Who is the chief law officer of the Federation?",
        a: ["The Attorney General of the Federation", "The Chief Justice of Nigeria", "The Inspector-General of Police"]
    }, {
        id: "n7",
        q: "Which agency investigates economic and financial crimes such as money laundering?",
        a: ["The EFCC", "The FRSC", "NAFDAC"]
    }, {
        id: "n8",
        q: "Which body fights corruption by public officers alongside the EFCC?",
        a: ["The ICPC", "INEC", "The NDLEA"]
    }, {
        id: "n9",
        q: "Who heads the Nigeria Police Force?",
        a: ["The Inspector-General of Police", "The Attorney General", "The Chief of Army Staff"]
    }, {
        id: "n10",
        q: "Which law allows plea bargaining in federal criminal cases?",
        a: ["The Administration of Criminal Justice Act, 2015", "The Land Use Act", "The Electoral Act"]
    }, {
        id: "n11",
        q: "Under the Administration of Criminal Justice Act, can police arrest a relative in place of a suspect?",
        a: ["No: nobody may be arrested in place of a suspect", "Yes, if the suspect can't be found", "Yes, any family member"]
    }, {
        id: "n12",
        q: "What must a law graduate do before practising as a lawyer in Nigeria?",
        a: ["Attend the Nigerian Law School and be called to the Bar", "Nothing: a law degree is enough", "Pass a police exam"]
    }, {
        id: "n13",
        q: "How long is a Senator's term of office?",
        a: ["Four years", "One year", "Ten years"]
    }, {
        id: "n14",
        q: "Who can discontinue a federal criminal case before judgment (nolle prosequi)?",
        a: ["The Attorney General of the Federation", "The Senate President", "Any police officer"]
    }]
}
  , sm = 4
  , lm = 4 * 36e5;
function cm(e, t) {
    let n = 2166136261;
    for (let i of `${e}:${t}`)
        n ^= i.charCodeAt(0),
        n = Math.imul(n, 16777619);
    let o = () => (n ^= n << 13,
    n ^= n >>> 17,
    n ^= n << 5,
    (n >>> 0) / 4294967296)
      , a = (i, r) => {
        let s = [...i];
        for (let l = s.length - 1; l > 0; l--) {
            let u = Math.floor(o() * (l + 1));
            [s[l],s[u]] = [s[u], s[l]]
        }
        return s.slice(0, r)
    }
    ;
    return [...a(rm.game, 3), ...a(rm.law, 2)]
}
var di = {
    investigateMs: 24 * 36e5,
    decideMs: 6 * 36e5,
    trialMs: 48 * 36e5,
    adjournMs: 24 * 36e5,
    plea: .7,
    pleaRange: [.6, .8],
    jailMins: 120,
    fine: .2,
    assets: .5,
    sent: .2
};
var Ul = [{
    x: .5,
    name: "Fewer stops",
    small: "half as many as normal"
}, {
    x: 1,
    name: "Normal",
    small: "the usual stop-and-search"
}, {
    x: 1.5,
    name: "More stops",
    small: "half as many again"
}, {
    x: 2,
    name: "Crackdown",
    small: "twice as many"
}];
var H1 = 30
  , z1 = 40
  , Ve = (e, t, n) => new fe(e,t,n)
  , ld = new Map
  , kt = (e, t={}) => {
    let n = e + JSON.stringify(t);
    return ld.has(n) || ld.set(n, new Me({
        color: e,
        flatShading: !0,
        roughness: .75,
        ...t
    })),
    ld.get(n)
}
  , cd = e => new ze({
    color: e
});
function I1(e) {
    let t = document.createElement("canvas");
    t.width = 1024,
    t.height = 96;
    let n = t.getContext("2d");
    n.fillStyle = "#5b2a86",
    n.fillRect(0, 0, 1024, 96),
    n.fillStyle = "#f2d27a",
    n.textAlign = "center",
    n.textBaseline = "middle",
    n.font = "900 54px DM Sans, sans-serif",
    n.fillText(e, 512, 52);
    let o = new Ke(t);
    return o.colorSpace = qe,
    o
}
function um(e, t) {
    let n = new Ae
      , o = H1
      , a = z1
      , i = 10
      , r = []
      , s = []
      , l = []
      , u = (v, I, z, G, O, q) => {
        let we = new ae(v,I);
        if (we.position.set(z, G, O),
        we.castShadow = !0,
        we.receiveShadow = !0,
        n.add(we),
        q) {
            let be = v.parameters;
            r.push([z - be.width / 2, z + be.width / 2, O - be.depth / 2, O + be.depth / 2])
        }
        return we
    }
      , d = kt(7028514)
      , c = kt(4860438)
      , p = kt(15317321, {
        metalness: .35,
        roughness: .45
    })
      , f = kt(15985888)
      , b = u(Ve(o, .2, a), kt(14207922), 0, -.1, 0);
    for (let v = -a / 2 + 2; v < a / 2; v += 2)
        u(Ve(o, .01, .05), kt(12891543), 0, .01, v);
    u(Ve(2.6, .02, a - 9), kt(10361627), 0, .02, 4.5),
    u(Ve(o - 4, .02, 2.4), kt(10361627), 0, .02, -a / 2 + 9.6),
    u(Ve(o, i, .3), f, 0, i / 2, -a / 2),
    u(Ve(.3, i, a), f, -o / 2, i / 2, 0),
    u(Ve(.3, i, a), f, o / 2, i / 2, 0),
    u(Ve(o / 2 - 2.5, 1, .3), f, -o / 4 - 1.25, .5, a / 2),
    u(Ve(o / 2 - 2.5, 1, .3), f, o / 4 + 1.25, .5, a / 2),
    u(Ve(o, .5, .34), kt(10111532), 0, i - .25, -a / 2 + .01);
    let $ = [13909309, 15906106, 2060241, 2067020, 9059001];
    for (let v of [-1, 1])
        for (let I = 0; I < 5; I++) {
            let z = -a / 2 + 12 + I * 6.2
              , G = v * (o / 2 - .17);
            u(Ve(.06, 4.6, 2.2), kt(10111532), G, 4.6, z);
            for (let q = 0; q < 4; q++)
                for (let we = 0; we < 2; we++) {
                    let be = new ae(Ve(.04, 1, .95),cd($[(I + q + we * 2) % $.length]));
                    be.position.set(G - v * .04, 2.9 + q * 1.1, z - .5 + we * 1),
                    n.add(be)
                }
            let O = new ae(new Pn(1.1,1.2,4,1),cd($[(I + 3) % $.length]));
            O.position.set(G - v * .04, 7.5, z),
            O.rotation.y = Math.PI / 4,
            O.scale.x = .05,
            n.add(O)
        }
    let T = -a / 2 + 4.25
      , M = 8.5;
    u(Ve(o - 4, .9, M), kt(13616040), 0, .45, T, !0),
    u(Ve(o - 4.2, .03, M - .2), kt(8003371), 0, .92, T);
    for (let v = 0; v < 2; v++)
        u(Ve(10 - v * 1.5, .3, .6), kt(13616040), 0, .15 + v * .3, -a / 2 + M + .9 - v * .6, !0);
    let _ = new ae(new Ue(12,.8),new ze({
        map: I1("NATIONAL CHRISTIAN CENTRE \xB7 ABUJA")
    }));
    _.position.set(0, .47, -a / 2 + M + .01),
    n.add(_);
    let V = {
        x: 0,
        y: 5.3,
        z: -a / 2 + .24,
        w: 6.4,
        h: 3.6
    };
    u(Ve(V.w + .5, V.h + .5, .12), kt(723723), V.x, V.y, -a / 2 + .18),
    u(Ve(V.w, V.h, .02), kt(1450542), V.x, V.y, V.z - .01),
    u(Ve(.5, 2.2, .2), p, 0, 8.6, -a / 2 + .25),
    u(Ve(1.5, .45, .2), p, 0, 9, -a / 2 + .25);
    let Y = -a / 2 + 6.4;
    u(Ve(1.5, 1.25, .8), d, 0, .9 + .62, Y, !0);
    let se = u(Ve(1.7, .08, .95), c, 0, .9 + 1.32, Y - .02);
    se.rotation.x = .22,
    u(Ve(.12, .6, .04), p, 0, .9 + .7, Y + .42),
    u(Ve(.36, .1, .04), p, 0, .9 + .82, Y + .42),
    u(Ve(.05, .5, .05), kt(2236962), .35, .9 + 1.55, Y + .1);
    let D = e?.();
    D && (D.group.position.set(0, .9, Y - 1.05),
    n.add(D.group));
    let K = [];
    for (let v of [-1, 1])
        for (let I = 0; I < 2; I++)
            for (let z = 0; z < 4; z++) {
                let G = v * (5.2 + z * 1.3)
                  , O = -a / 2 + 1.6 + I * 1.6;
                if (u(Ve(1, .5, .8), kt(5974662), G, .9 + .25, O),
                (z + I) % 2 === 0) {
                    let q = t?.();
                    q && (q.group.position.set(G, .9, O + .35),
                    n.add(q.group),
                    K.push(q))
                }
            }
    u(Ve(1.6, .12, .5), kt(1907997), 9.5, .9 + 1, -a / 2 + 6.4),
    u(Ve(1.5, .04, .2), kt(16777215), 9.5, .9 + 1.07, -a / 2 + 6.3);
    for (let v of [8.9, 10.1])
        u(Ve(.08, 1, .08), kt(3355443), v, .9 + .5, -a / 2 + 6.4);
    for (let v of [-o / 2 + 3, o / 2 - 3])
        u(new oe(.45,.35,.7,10), p, v, .9 + .35, -a / 2 + 7.6),
        u(new wo(.8,0), kt(3111493), v, .9 + 1.3, -a / 2 + 7.6);
    let L = 10.2;
    for (let v = 0; v < 9; v++)
        for (let I of [-1, 1]) {
            let z = -a / 2 + 12 + v * 2.4
              , G = I * (1.6 + L / 2);
            s.push(u(Ve(L, .12, .6), d, G, .48, z)),
            s.push(u(Ve(L, .75, .1), d, G, .9, z + .33));
            for (let O of [-1, 1])
                u(Ve(.12, .95, .75), c, G + O * L / 2, .48, z + .05);
            r.push([G - L / 2, G + L / 2, z + .28, z + .38]);
            for (let O = 0; O < 9; O++)
                l.push([G - L / 2 + .7 + O * (L - 1.4) / 8, z - .1])
        }
    for (let v of [3, 14, 22, 40, 47, 61, 75, 88, 103, 119, 130, 146]) {
        let I = l[v]
          , z = I && e?.(!0);
        z && (z.group.position.set(I[0], -.2, I[1]),
        z.group.rotation.y = Math.PI,
        n.add(z.group),
        l[v] = null)
    }
    for (let v of [-7, 7])
        for (let I of [-6, 4, 14])
            u(Ve(.04, 1.6, .04), kt(3355443), v, i - .8, I),
            u(new Ln(.45,10,8), cd(16773583), v, i - 1.8, I);
    let S = (v, I) => Math.abs(v) < o / 2 - .6 && Math.abs(I) < a / 2 - .6 && !r.some( ([z,G,O,q]) => v > z - .3 && v < G + .3 && I > O - .3 && I < q + .3)
      , C = v => {
        D && (D.group.rotation.y = Math.sin(v * .5) * .45,
        D.group.position.x = Math.sin(v * .23) * .5,
        D.tick(v, 0));
        for (let I = 0; I < K.length; I++)
            K[I].group.rotation.z = Math.sin(v * 2.2 + I) * .05,
            K[I].tick(v, 0)
    }
    ;
    return {
        group: n,
        floor: b,
        isFree: S,
        spawn: [0, a / 2 - 2.5],
        staff: [0, a / 2 - 2.5],
        tv: V,
        pews: s,
        seats: l.filter(Boolean),
        tick: C
    }
}
var P1 = 36
  , L1 = 32
  , At = (e, t, n) => new fe(e,t,n)
  , ud = new Map
  , on = (e, t={}) => {
    let n = e + JSON.stringify(t);
    return ud.has(n) || ud.set(n, new Me({
        color: e,
        flatShading: !0,
        roughness: .8,
        ...t
    })),
    ud.get(n)
}
  , dm = e => new ze({
    color: e
});
function N1() {
    let e = document.createElement("canvas");
    e.width = 512,
    e.height = 64;
    let t = e.getContext("2d");
    t.fillStyle = "#f3ead6",
    t.fillRect(0, 0, 512, 64),
    t.fillStyle = "#c99a2e",
    t.fillRect(0, 0, 512, 5),
    t.fillRect(0, 59, 512, 5);
    for (let o = 0; o < 8; o++) {
        let a = 32 + o * 64
          , i = 32;
        for (let[r,s] of [["#1f6b4a", 22], ["#c99a2e", 13]]) {
            t.fillStyle = r,
            t.beginPath();
            for (let l = 0; l < 16; l++) {
                let u = l * Math.PI / 8
                  , d = l % 2 ? s * .62 : s;
                t.lineTo(a + Math.cos(u) * d, i + Math.sin(u) * d)
            }
            t.closePath(),
            t.fill()
        }
    }
    let n = new Ke(e);
    return n.colorSpace = qe,
    n.wrapS = jr,
    n
}
var Ha = (e, t) => {
    let n = new Yr;
    return n.moveTo(-e / 2, 0),
    n.lineTo(-e / 2, t * .62),
    n.quadraticCurveTo(-e / 2, t * .9, 0, t),
    n.quadraticCurveTo(e / 2, t * .9, e / 2, t * .62),
    n.lineTo(e / 2, 0),
    n.closePath(),
    n
}
  , za = (e, t) => new Ml(e,{
    depth: t,
    bevelEnabled: !1
});
function hm(e) {
    let t = new Ae
      , n = P1
      , o = L1
      , a = 9
      , i = []
      , r = []
      , s = (C, v, I, z, G, O) => {
        let q = new ae(C,v);
        if (q.position.set(I, z, G),
        q.castShadow = !0,
        q.receiveShadow = !0,
        t.add(q),
        O) {
            let we = C.parameters;
            i.push([I - we.width / 2, I + we.width / 2, G - we.depth / 2, G + we.depth / 2])
        }
        return q
    }
      , l = on(15985366)
      , u = on(13935671, {
        metalness: .35,
        roughness: .45
    })
      , d = on(2059082)
      , c = on(7028514)
      , p = s(At(n, .2, o), on(9313058), 0, -.1, 0)
      , f = -o / 2 + 6.5
      , b = 1.5
      , $ = 14;
    for (let C = 0; C < $; C++) {
        let v = f + C * b;
        s(At(n - 2, .02, .12), on(14267498), 0, .01, v - .65);
        for (let I = -n / 2 + 1.6; I < n / 2 - 1; I += 1.1)
            s(At(.06, .015, 1.2), on(11022906), I, .012, v)
    }
    s(At(n, .03, 3.2), on(5917242), 0, .015, o / 2 - 1.6),
    s(At(n, a, .3), l, 0, a / 2, -o / 2),
    s(At(.3, a, o), l, -n / 2, a / 2, 0),
    s(At(.3, a, o), l, n / 2, a / 2, 0),
    s(At(n / 2 - 2.5, 1, .3), l, -n / 4 - 1.25, .5, o / 2),
    s(At(n / 2 - 2.5, 1, .3), l, n / 4 + 1.25, .5, o / 2);
    let T = N1();
    for (let[C,v,I,z] of [[n, 0, -o / 2 + .17, 0], [o, -n / 2 + .17, 0, Math.PI / 2], [o, n / 2 - .17, 0, -Math.PI / 2]]) {
        let G = T.clone();
        G.repeat.set(C / 8, 1),
        G.needsUpdate = !0;
        let O = new ae(new Ue(C,1),new ze({
            map: G
        }));
        O.position.set(v, a - 1.2, I),
        O.rotation.y = z,
        t.add(O)
    }
    for (let C of [-1, 1])
        for (let v = 0; v < 6; v++) {
            let I = -o / 2 + 4 + v * 5
              , z = C * (n / 2 - 2.2);
            if (s(new oe(.35,.4,a - 1.6,10), l, z, (a - 1.6) / 2, I, !1),
            s(At(.9, .4, .9), u, z, .2, I),
            v < 5) {
                let O = s(za(Ha(4.4, 3), .3), d, z, a - 4.6, I + 2.5);
                O.rotation.y = Math.PI / 2,
                O.position.x -= C * .15
            }
            let G = s(za(Ha(1.4, 3.4), .05), dm(10474470), C * (n / 2 - .2), 2.6, I + 2.5);
            G.rotation.y = C * -Math.PI / 2,
            i.push([z - .5, z + .5, I - .5, I + .5])
        }
    let M = -o / 2 + .16;
    s(za(Ha(3.6, 5.6), .2), u, 0, 0, M),
    s(za(Ha(3, 5), .25), d, 0, 0, M + .05),
    s(za(Ha(2.2, 4.2), .3), on(1328943), 0, 0, M + .08);
    let _ = new ae(new Ue(6,1.1),new ze({
        map: ( () => {
            let C = T.clone();
            return C.repeat.set(.75, 1),
            C.needsUpdate = !0,
            C
        }
        )()
    }));
    _.position.set(0, 6.4, M + .05),
    t.add(_);
    for (let C = 0; C < 6; C++)
        s(At(1.4, .35 * (C + 1), .7), c, 3.6, .175 * (C + 1), -o / 2 + 5.2 - C * .7, !0);
    for (let C of [3, 4.2])
        s(At(.12, 1.5, .12), c, C, 2.1 + .75, -o / 2 + 1.6);
    s(new Pn(.9,.9,8), u, 3.6, 2.1 + 1.95, -o / 2 + 1.6);
    let V = e?.("imam");
    V && (V.group.position.set(0, 0, -o / 2 + 2.6),
    V.group.rotation.y = Math.PI,
    t.add(V.group));
    for (let C of [-6, -4.5, 5.2, 6.7])
        s(At(.5, .06, .35), c, C, .35, -o / 2 + 4.6).rotation.x = -.5,
        s(At(.4, .12, .3), d, C, .42, -o / 2 + 4.62).rotation.x = -.5;
    for (let C = 0; C < 3; C++) {
        s(At(.5, .06, 4), c, -n / 2 + .5, 1 + C * .6, -6);
        for (let v = 0; v < 12; v++)
            s(At(.3, .42, .12), on([2059082, 9313058, 1328943, 13212206][(v + C) % 4]), -n / 2 + .5, 1.25 + C * .6, -7.7 + v * .3)
    }
    i.push([-n / 2, -n / 2 + .9, -8.2, -3.8]);
    for (let C of [-1, 1]) {
        let v = C * 6.5;
        s(At(4, 1, .6), c, v, .5, o / 2 - .8, !0);
        for (let I = 0; I < 8; I++)
            s(At(.32, .12, .2), on([1907997, 7028514, 16777215, 2051740][I % 4]), v - 1.6 + I * .45, 1.06, o / 2 - .8)
    }
    let Y = new ae(new O0(3,.12,6,32),u);
    Y.rotation.x = Math.PI / 2,
    Y.position.set(0, a - .9, 2),
    t.add(Y);
    for (let C = 0; C < 16; C++) {
        let v = C / 16 * Math.PI * 2;
        s(new Ln(.22,8,6), dm(16773583), Math.cos(v) * 3, a - 1.1, 2 + Math.sin(v) * 3)
    }
    let se = [];
    for (let C = -n / 2 + 1.6; C < n / 2 - 1; C += 1.1)
        se.push(C);
    for (let C = 0; C < $; C++)
        for (let v of se)
            (Math.abs(v) > .4 || C > 0) && r.push([v, f + C * b]);
    let D = -.55
      , K = [];
    for (let C of [2, 5, 8, 11, 14, 17, 20, 30, 33, 36, 40, 58, 61, 64, 90, 95]) {
        let v = r[C]
          , I = v && e?.("praying");
        I && (I.group.position.set(v[0], D, v[1]),
        I.group.rotation.order = "YXZ",
        I.group.rotation.y = Math.PI,
        t.add(I.group),
        K.push(I),
        r[C] = null)
    }
    let L = (C, v) => Math.abs(C) < n / 2 - .6 && Math.abs(v) < o / 2 - .6 && !i.some( ([I,z,G,O]) => C > I - .3 && C < z + .3 && v > G - .3 && v < O + .3)
      , S = C => {
        V && V.tick(C, 0);
        for (let v = 0; v < K.length; v++) {
            let I = K[v]
              , z = Math.max(0, Math.sin(C * .35 + v * .7));
            I.group.rotation.x = z * .5,
            I.tick(C, 0)
        }
    }
    ;
    return {
        group: t,
        floor: p,
        isFree: L,
        spawn: [0, o / 2 - 2.5],
        staff: [0, o / 2 - 2.5],
        seats: r.filter(Boolean),
        seatY: D,
        tick: S
    }
}
function fm() {
    let e = new Ae
      , t = (n, o, a, i, r) => {
        let s = new ae(n,o);
        return s.position.set(a, i, r),
        s.castShadow = !0,
        e.add(s),
        s
    }
    ;
    t(za(Ha(7.4, 9.6), .5), on(15246888, {
        metalness: .35,
        roughness: .45
    }), 0, .4, -.5),
    t(za(Ha(6.2, 8.6), .6), on(15524040), 0, .4, -.4),
    t(za(Ha(4.6, 7.4), .7), on(2826520), 0, .4, -.35);
    for (let n = 0; n < 3; n++)
        t(At(9 - n * 1.2, .2, 1.2), on(14206629), 0, .5 + n * .2, 1.6 - n * .6);
    return e
}
var to = {
    street: {
        name: "Street banner",
        small: "On a home street \xB7 seen by residents",
        price: 500,
        slots: 5
    },
    restaurant: {
        name: "Restaurant poster",
        small: "At a popular food spot",
        price: 750,
        slots: 3
    },
    taxi: {
        name: "Taxi ads",
        small: "On every taxi in the city",
        price: 1500,
        slots: 10
    },
    billboard: {
        name: "Billboard",
        small: "At a famous place \xB7 seen by everyone passing",
        price: 2500,
        slots: 3
    },
    everywhere: {
        name: "Everywhere",
        small: "Every billboard, poster, banner and taxi at once \xB7 only one buyer at a time",
        price: 5e3,
        slots: 1
    }
}
  , Co = {
    street: {
        nyanya: "Nyanya street",
        lugbe: "Lugbe street",
        kuje: "Kuje street",
        kubwa: "Kubwa street",
        gwarinpa: "Gwarinpa street",
        maitama: "Maitama street"
    },
    restaurant: {
        ibrofish: "IbroFish",
        sahad: "Sahad Stores",
        grills: "Grills 101",
        ceddi: "Ceddi Plaza food court",
        gatemarket: "City Gate Market",
        silverbird: "Silverbird Cinemas",
        truckcentral: "Truck Central",
        blucabana: "BluCabana",
        fouru: "4U Supermarket",
        magicland: "Magic Land"
    },
    taxi: {
        all: "All taxis"
    },
    everywhere: {
        all: "All ad spaces in Abuja Life"
    },
    billboard: {
        citygate: "City Gate",
        eaglesquare: "Eagle Square",
        millennium: "Millennium Park",
        mosque: "National Mosque",
        hilton: "Transcorp Hilton",
        ceddiplaza: "Ceddi Plaza",
        airport: "Nnamdi Azikiwe Airport",
        farmcity: "Farm City",
        trukadero: "Trukadero",
        christiancentre: "National Christian Centre",
        magicland: "Magic Land",
        yaradua: "Yar'Adua Centre",
        clubzuma: "Club Zuma",
        hospital: "General Hospital",
        area10: "Area 10 Market (Garki)",
        boutique: "Zuma Boutique",
        truckcentral: "Truck Central",
        blucabana: "BluCabana",
        ibrofish: "IbroFish"
    }
}
  , Vl = {
    title: 30,
    line: 60,
    slogan: 50
}
  , dd = 26e4;
function hd(e, t) {
    if (e.clearRect(0, 0, 512, 256),
    !t) {
        e.fillStyle = "#0f3d2e",
        e.fillRect(0, 0, 512, 256),
        e.fillStyle = "#f2b53a",
        e.fillRect(0, 200, 512, 56),
        e.fillStyle = "#fff8ec",
        e.textAlign = "center",
        e.textBaseline = "middle",
        e.font = "900 46px DM Sans, sans-serif",
        e.fillText("ADVERTISE HERE", 512 / 2, 80),
        e.font = "700 26px DM Sans, sans-serif",
        e.fillText("Your business or campaign", 512 / 2, 136),
        e.fillStyle = "#0f3d2e",
        e.font = "800 26px DM Sans, sans-serif",
        e.fillText("Phone \u2192 Ads \xB7 from \u20A6500 a week", 512 / 2, 228);
        return
    }
    if (t.type === "campaign") {
        e.fillStyle = "#008751",
        e.fillRect(0, 0, 512, 256),
        e.fillStyle = "#ffffff",
        e.fillRect(512 / 3, 0, 512 / 3, 256),
        e.fillStyle = "rgba(15,61,46,.92)",
        e.fillRect(0, 34, 512, 188),
        e.textAlign = "center",
        e.textBaseline = "middle",
        e.fillStyle = "#f2b53a",
        e.font = "900 30px DM Sans, sans-serif",
        e.fillText("VOTE", 512 / 2, 62),
        es(e, "@" + t.name, 900, 64, 472),
        e.fillStyle = "#ffffff",
        e.fillText("@" + t.name, 512 / 2, 112),
        e.fillStyle = "#f2b53a",
        es(e, (t.title || "").toUpperCase(), 800, 26, 472),
        e.fillText((t.title || "").toUpperCase(), 512 / 2, 156),
        e.fillStyle = "#fff8ec",
        es(e, t.line || "", 600, 24, 472),
        e.fillText(t.line || "", 512 / 2, 194);
        return
    }
    e.fillStyle = "#fff8ec",
    e.fillRect(0, 0, 512, 256),
    e.fillStyle = "#d43d3d",
    e.fillRect(0, 0, 512, 14),
    e.fillRect(0, 242, 512, 14),
    e.textAlign = "center",
    e.textBaseline = "middle",
    e.fillStyle = "#0f3d2e",
    es(e, t.title || "", 900, 58, 472),
    e.fillText(t.title || "", 512 / 2, 100),
    e.fillStyle = "#3d5249",
    es(e, t.line || "", 600, 28, 472),
    e.fillText(t.line || "", 512 / 2, 166)
}
function es(e, t, n, o, a) {
    for (e.font = `${n} ${o}px DM Sans, sans-serif`; e.measureText(t).width > a && o > 12; )
        o -= 2,
        e.font = `${n} ${o}px DM Sans, sans-serif`
}
var Et = {
    nyanya: "Nyanya",
    lugbe: "Lugbe",
    kuje: "Kuje",
    kubwa: "Kubwa",
    gwarinpa: "Gwarinpa",
    maitama: "Maitama"
}
  , Ie = {
    senator_nyanya: {
        title: "Senator \xB7 Nyanya",
        short: "Senator",
        area: "nyanya",
        fee: 5e6,
        budget: 0
    },
    senator_lugbe: {
        title: "Senator \xB7 Lugbe",
        short: "Senator",
        area: "lugbe",
        fee: 5e6,
        budget: 0
    },
    senator_kuje: {
        title: "Senator \xB7 Kuje",
        short: "Senator",
        area: "kuje",
        fee: 5e6,
        budget: 0
    },
    senator_kubwa: {
        title: "Senator \xB7 Kubwa",
        short: "Senator",
        area: "kubwa",
        fee: 5e6,
        budget: 0
    },
    senator_gwarinpa: {
        title: "Senator \xB7 Gwarinpa",
        short: "Senator",
        area: "gwarinpa",
        fee: 5e6,
        budget: 0
    },
    senator_maitama: {
        title: "Senator \xB7 Maitama",
        short: "Senator",
        area: "maitama",
        fee: 5e6,
        budget: 0
    },
    minister: {
        title: "Minister of the FCT",
        short: "Minister",
        area: null,
        fee: 2e7,
        budget: 1e7
    }
}
  , O1 = {
    senator: 500,
    minister: 2e3
};
var Ji = e => O1[Ie[e]?.short.toLowerCase()] || 0
  , pd = {
    id: "official",
    model: "executive",
    colour: "#1c1c1c",
    official: !0
}
  , Jl = 3;
var pm = 5
  , Kl = {
    mins: 30,
    bail: 0,
    fine: .2
};
var md = {
    fares: {
        who: "minister",
        name: "Cut transport fares",
        small: "Taxi, keke and Along \xB7 24 hours \xB7 everyone \xB7 10% to free",
        cost: 15e5,
        options: {
            10: 15e5,
            20: 3e6,
            30: 4e6,
            50: 6e6,
            100: 1e7
        }
    },
    food: {
        who: "minister",
        name: "Cheaper food",
        small: "Every food place \xB7 24 hours \xB7 everyone \xB7 10% to free",
        cost: 1e6,
        options: {
            10: 1e6,
            20: 2e6,
            30: 3e6,
            50: 5e6,
            100: 8e6
        }
    },
    palliative: {
        who: "senator",
        name: "\u20A610,000 palliative",
        small: "For residents \xB7 first 100 to claim \xB7 24 hours",
        cost: 1e6,
        amount: 1e4,
        count: 100
    },
    homeRides: {
        who: "senator",
        name: "Free rides home",
        small: "For residents \xB7 24 hours",
        cost: 15e5
    },
    health: {
        who: "minister",
        name: "Cheaper healthcare",
        small: "Treatment, ambulance and emergency ward \xB7 24 hours \xB7 20% to free",
        cost: 15e5,
        options: {
            20: 15e5,
            50: 3e6,
            100: 5e6
        }
    }
};
var mm = (e, t) => t >= 100 ? 0 : Math.max(100, Math.round(e * (100 - t) / 100 / 50) * 50)
  , gd = (e, t) => t >= 100 ? 0 : Math.max(10, Math.round(e * (100 - t) / 100 / 10) * 10)
  , ts = (e, t, n) => xd(e, t, n) ? e.deeds[t].pct || (t === "fares" ? 30 : 100) : 0
  , Xl = (e, t) => ts(e, "fares", t)
  , yd = (e, t) => e.options ? e.options[t] || 0 : e.cost
  , ns = (e, t) => ({
    fares: t >= 100 ? "Free transport" : `Transport fares cut by ${t}%`,
    food: t >= 100 ? "Free food" : `Food ${t}% cheaper`,
    health: t >= 100 ? "Free healthcare" : `Healthcare ${t}% cheaper`
})[e] || md[e]?.name || "Good deed"
  , iT = 1440 * 60 * 1e3
  , wd = 200;
var gm = 160
  , rT = 1800 * 1e3
  , bd = (e, t) => Ie[e]?.short === "Senator" ? "minister" : Ie[`senator_${t}`] ? `senator_${t}` : null;
var Zl = 3e6;
var ym = [500, 750, 1e3, 1250, 1500, 2e3, 2500]
  , sT = 1440 * 60 * 1e3;
var Ia = {
    amount: 5e4,
    minStaff: 10,
    gap: 1440 * 60 * 1e3,
    perTerm: 10
}
  , Ql = "gov";
var wm = [100, 150, 200, 300, 400, 500]
  , ec = e => Math.max(2, Math.ceil(e * .8))
  , bm = 1e4
  , xm = (e, t, n) => Math.min(.9, .2 + .7 * (e + t) / Math.max(1, n))
  , km = (e, t) => !!Ie[e] && (!Ie[e].area || Ie[e].area === t)
  , hi = e => {
    let t = (e?.up || 0) + (e?.down || 0);
    return t ? Math.round(100 * (e.up || 0) / t) : null
}
;
var B1 = 36e5
  , vm = 168 * B1
  , Cm = Date.UTC(2026, 9, 7, 19)
  , fd = Date.UTC(2026, 9, 17, 19);
function _1(e) {
    return e < Cm ? 0 : e < fd ? 1 : 2 + Math.floor((e - fd) / vm)
}
function Em(e) {
    let t = _1(e);
    return t === 0 ? 0 : t === 1 ? Cm : fd + (t - 2) * vm
}
var xd = (e, t, n) => {
    let o = e?.deeds?.[t];
    return (o?.until || 0) > n && (o.fund === void 0 || o.fund > 0)
}
;
var ot = "Club Zuma";
var Rt = [6e4, 6e4]
  , G1 = 26
  , j1 = 20
  , Tm = ["malt", "chapman", "smoothie", "smallchops"]
  , D1 = ["DJ Big N", "DJ Consequence", "DJ Kaywise"]
  , Mm = e => (D1.find(t => String(e || "").toLowerCase().includes(t.replace(/^DJ\s+/i, "").toLowerCase())) || "DJ on the decks").toUpperCase();
var it = (e, t, n) => new fe(e,t,n)
  , Qt = (e, t={}) => new Me({
    color: e,
    flatShading: !0,
    roughness: .6,
    ...t
})
  , Uo = e => new ze({
    color: e
});
function kd(e, t, n, o, a, i) {
    let r = document.createElement("canvas");
    r.width = t,
    r.height = n;
    let s = r.getContext("2d");
    s.fillStyle = i,
    s.fillRect(0, 0, t, n),
    s.font = o,
    s.fillStyle = a,
    s.textAlign = "center",
    s.textBaseline = "middle",
    s.shadowColor = a,
    s.shadowBlur = 24,
    s.fillText(e, t / 2, n / 2);
    let l = new Ke(r);
    return l.colorSpace = qe,
    l
}
function $m() {
    let e = new Ae
      , t = (o, a, i, r, s) => {
        let l = new ae(o,a);
        return l.position.set(i, r, s),
        l.castShadow = !0,
        e.add(l),
        l
    }
    ;
    t(it(12, 6, 6), Qt(1709092), 0, 3, -3),
    t(it(2.4, 3, .1), Uo(723723), 0, 1.5, .02),
    t(it(2.8, .12, .12), Uo(12078591), 0, 3.1, .06);
    for (let o of [-5.9, 5.9])
        t(it(.12, 6, .12), Uo(16727480), o, 3, .04);
    let n = new ae(new Ue(7,1.6),new ze({
        map: kd("CLUB ZUMA", 1024, 230, "900 150px DM Sans, sans-serif", "#ff6ad5", "#120c1a")
    }));
    n.position.set(0, 4.7, .05),
    e.add(n);
    for (let o of [-2.4, -4.2, 2.4, 4.2])
        t(new oe(.06,.08,1,8), Qt(13938487, {
            metalness: .6
        }), o, .5, 1.4);
    for (let o of [-1, 1])
        t(it(1.8, .06, .06), Qt(11735598), o * 3.3, .85, 1.4);
    return e
}
function Sm(e) {
    let t = new Ae
      , n = G1
      , o = j1
      , a = (C, v, I, z, G, O=t) => {
        let q = new ae(C,v);
        return q.position.set(I, z, G),
        O.add(q),
        q
    }
      , i = a(it(n, .2, o), Qt(1511967, {
        roughness: .3,
        metalness: .2
    }), 0, -.1, 0);
    i.receiveShadow = !0;
    let r = Qt(2366003);
    a(it(n, 4, .3), r, 0, 2, -o / 2),
    a(it(n, 1, .3), r, 0, .5, o / 2),
    a(it(.3, 4, o), r, -n / 2, 2, 0),
    a(it(.3, 4, o), r, n / 2, 2, 0);
    for (let[C,v,I,z,G] of [[0, -o / 2 + .2, n, .08, 12078591], [0, o / 2 - .2, n, .08, 4052735, .95], [-n / 2 + .2, 0, .08, o, 16727480], [n / 2 - .2, 0, .08, o, 16727480]])
        a(it(I, .08, z), Uo(G), C, v === o / 2 - .2 ? .95 : 3.9, v);
    let s = 10
      , l = new yo(it(.96, .05, .96),new ze,s * s)
      , u = new Kt
      , d = new jo;
    for (let C = 0; C < s; C++)
        for (let v = 0; v < s; v++)
            u.makeTranslation(C - s / 2 + .5, .03, v - s / 2 + .5 - 1),
            l.setMatrixAt(C * s + v, u),
            l.setColorAt(C * s + v, d.set(2236962));
    t.add(l),
    a(it(5, 1.2, 1.4), Qt(855314), 0, .6, -o / 2 + 2),
    a(it(4.6, .06, 1.2), Uo(4052735), 0, 1.23, -o / 2 + 2);
    for (let C of [-1.2, 1.2])
        a(new oe(.35,.35,.08,18), Qt(2236962), C, 1.3, -o / 2 + 2);
    let c = {
        x: 0,
        y: 2.95,
        z: -o / 2 + .24,
        w: 3.2,
        h: 1.8
    };
    a(it(c.w + .3, c.h + .3, .1), Qt(328456), c.x, c.y, -o / 2 + .17);
    for (let[C,v,I,z] of [[c.w + .42, .06, 0, c.h / 2 + .18], [c.w + .42, .06, 0, -c.h / 2 - .18], [.06, c.h + .42, c.w / 2 + .18, 0], [.06, c.h + .42, -c.w / 2 - .18, 0]])
        a(it(C, v, .06), Uo(16727480), c.x + I, c.y + z, -o / 2 + .22);
    for (let[C,v] of [["CLUB", -3.6], ["ZUMA", 3.6]])
        a(new Ue(3,.9), new ze({
            map: kd(C, 512, 154, "900 120px DM Sans, sans-serif", "#ff6ad5", "#0c0812")
        }), v, 3.2, -o / 2 + .2);
    for (let C of [-4.2, 4.2])
        a(it(1.4, 2.6, 1.2), Qt(1118481), C, 1.3, -o / 2 + 1.2),
        a(new oe(.45,.45,.05,18), Qt(3355443), C, 1.6, -o / 2 + 1.82).rotation.x = Math.PI / 2;
    let p = e?.();
    p && (p.group.position.set(0, 0, -o / 2 + 1),
    t.add(p.group));
    let f = document.createElement("canvas");
    f.width = 1024,
    f.height = 160;
    let b = new Ke(f);
    b.colorSpace = qe,
    a(new Ue(4.4,.69), new ze({
        map: b
    }), 0, .62, -o / 2 + 2.71);
    function $(C) {
        let v = f.getContext("2d");
        v.fillStyle = "#0c0812",
        v.fillRect(0, 0, 1024, 160),
        v.textAlign = "center",
        v.textBaseline = "middle",
        v.font = "900 34px DM Sans, sans-serif",
        v.fillStyle = "#3dd6ff",
        v.shadowColor = "#3dd6ff",
        v.shadowBlur = 14,
        v.fillText("ON THE DECKS", 512, 34);
        let I = 84;
        for (v.font = `900 ${I}px DM Sans, sans-serif`; v.measureText(C).width > 980 && I > 40; )
            I -= 4,
            v.font = `900 ${I}px DM Sans, sans-serif`;
        v.fillStyle = "#ff6ad5",
        v.shadowColor = "#ff6ad5",
        v.shadowBlur = 24,
        v.fillText(C, 512, 102),
        b.needsUpdate = !0
    }
    $("CLUB ZUMA");
    let T = -n / 2 + 2;
    a(it(1.4, 1.2, 8), Qt(3877402, {
        roughness: .4
    }), T, .6, 2),
    a(it(1.5, .08, 8.1), Uo(16752410), T, 1.24, 2);
    let M = [2067020, 9067059, 12597547, 15906106, 4052735];
    for (let C = 0; C < 14; C++)
        a(new oe(.07,.09,.4,8), Qt(M[C % 5], {
            roughness: .2
        }), -n / 2 + .5, 1.9 + C % 2 * .6, -1.5 + C * .5);
    a(it(.3, .08, 7.5), Qt(2759956), -n / 2 + .5, 1.68, 2),
    a(it(.3, .08, 7.5), Qt(2759956), -n / 2 + .5, 2.28, 2);
    let _ = e?.();
    _ && (_.group.position.set(-n / 2 + .9, 0, 2),
    _.group.rotation.y = Math.PI / 2,
    t.add(_.group));
    let V = Qt(5970542);
    for (let C of [-4, 2])
        a(it(1, .5, 4), V, n / 2 - 1.2, .25, C),
        a(it(.4, .9, 4), V, n / 2 - .5, .6, C),
        a(it(1.2, .5, 1.2), Qt(1118481), n / 2 - 2.8, .25, C);
    for (let C of [-1.3, 1.3])
        a(it(.15, 2.8, .15), Uo(4063098), C, 1.4, o / 2 - .2);
    a(it(2.75, .15, .15), Uo(4063098), 0, 2.8, o / 2 - .2);
    let Y = a(new Ue(1.2,.4), new ze({
        map: kd("EXIT", 256, 86, "900 64px DM Sans, sans-serif", "#3dff7a", "#06210f"),
        side: tn
    }), 0, 3.15, o / 2 - .2)
      , se = [];
    for (let C = 0; C < 5; C++) {
        let v = new ae(new Pn(1.4,7,20,1,!0),new ze({
            color: [16727480, 4052735, 12078591, 4063098, 16766013][C],
            transparent: !0,
            opacity: .16,
            blending: kl,
            depthWrite: !1,
            side: tn
        }));
        v.geometry.translate(0, -3.5, 0);
        let I = new Ae;
        I.position.set(-6 + C * 3, 6.5, -2),
        I.add(v),
        t.add(I),
        se.push(I)
    }
    let D = [[-2.6, 2.6, -o / 2, -o / 2 + 2.8], [-4.9, -3.5, -o / 2, -o / 2 + 1.9], [3.5, 4.9, -o / 2, -o / 2 + 1.9], [T - .8, T + .8, -2.1, 6.1], [-n / 2, T - .7, -o / 2, o / 2], [n / 2 - 3.5, n / 2, -6.1, -1.9], [n / 2 - 3.5, n / 2, -.1, 4.1]]
      , K = (C, v) => Math.abs(C) < n / 2 - .6 && Math.abs(v) < o / 2 - .6 && !D.some( ([I,z,G,O]) => C > I - .3 && C < z + .3 && v > G - .3 && v < O + .3)
      , L = -1;
    function S(C, v) {
        if (se.forEach( (I, z) => {
            I.rotation.z = Math.sin(C * .9 + z) * .6,
            I.rotation.x = Math.cos(C * .7 + z * 1.3) * .5
        }
        ),
        v !== L) {
            L = v;
            let I = [16727480, 4052735, 12078591, 4063098, 16766013, 1118481, 1118481];
            for (let z = 0; z < s * s; z++)
                l.setColorAt(z, d.set(I[(z * 7 + v * 3 + z % s * v) % I.length]));
            l.instanceColor.needsUpdate = !0
        }
        p && (p.tick(C * 2.2, 0),
        p.group.position.y = Math.abs(Math.sin(C * 5.45)) * .08)
    }
    return {
        group: t,
        floor: i,
        isFree: K,
        spawn: [0, o / 2 - 2.5],
        bar: [T + 1.6, 2],
        screen: c,
        setDj: $,
        tick: S
    }
}
var os = 180 * 1e3;
var Vo = [{
    name: "Lagos to Abuja",
    style: "Afrobeats",
    bpm: 104
}, {
    name: "Log Drum Ting",
    style: "Amapiano",
    bpm: 112
}, {
    name: "Highlife Sunday",
    style: "Highlife",
    bpm: 120
}, {
    name: "Area Boys",
    style: "Street-hop",
    bpm: 96
}, {
    name: "Zuma Nights",
    style: "Afro-house",
    bpm: 122
}];
function Am(e, t) {
    if (t && e >= t.t && e < t.t + os && Vo[t.track])
        return {
            track: t.track,
            offsetMs: e - t.t,
            requestedBy: t.name
        };
    let n = Math.floor(e / os);
    return {
        track: n % Vo.length,
        offsetMs: e - n * os,
        requestedBy: null
    }
}
function vd() {
    let e = null
      , t = null
      , n = 0
      , o = 0
      , a = 0
      , i = 0
      , r = !1
      , s = 0
      , l = 60 / 104 / 4
      , u = .5
      , d = null
      , c = () => {
        let S = e.createBuffer(1, e.sampleRate * .5, e.sampleRate)
          , C = S.getChannelData(0);
        for (let v = 0; v < C.length; v++)
            C[v] = Math.random() * 2 - 1;
        return S
    }
    ;
    function p(S, C, v, I, z) {
        S.gain.setValueAtTime(1e-4, C),
        S.gain.exponentialRampToValueAtTime(I, C + v),
        S.gain.exponentialRampToValueAtTime(1e-4, C + z)
    }
    function f(S, C=.9, v=42) {
        let I = e.createOscillator()
          , z = e.createGain();
        I.frequency.setValueAtTime(140, S),
        I.frequency.exponentialRampToValueAtTime(v, S + .18),
        p(z, S, .005, C, .35),
        I.connect(z).connect(t),
        I.start(S),
        I.stop(S + .4)
    }
    function b(S, C, v, I, z, G="bandpass") {
        let O = e.createBufferSource()
          , q = e.createBiquadFilter()
          , we = e.createGain();
        O.buffer = d,
        q.type = G,
        q.frequency.value = C,
        q.Q.value = v,
        p(we, S, .002, I, z),
        O.connect(q).connect(we).connect(t),
        O.start(S),
        O.stop(S + z + .05)
    }
    function $(S, C, {type: v="sine", peak: I=.3, dec: z=.3, slide: G=0, cut: O=1800}={}) {
        let q = e.createOscillator()
          , we = e.createGain()
          , be = e.createBiquadFilter();
        q.type = v,
        q.frequency.setValueAtTime(C * (G ? 1 + G : 1), S),
        G && q.frequency.exponentialRampToValueAtTime(C, S + .06),
        be.type = "lowpass",
        be.frequency.value = O,
        p(we, S, .005, I, z),
        q.connect(be).connect(we).connect(t),
        q.start(S),
        q.stop(S + z + .05)
    }
    function T(S, C, v, I="triangle", z=.045) {
        for (let G of C) {
            let O = e.createOscillator()
              , q = e.createGain()
              , we = e.createBiquadFilter();
            O.type = I,
            O.frequency.value = G,
            we.type = "lowpass",
            we.frequency.value = 1400,
            q.gain.setValueAtTime(1e-4, S),
            q.gain.linearRampToValueAtTime(z, S + .08),
            q.gain.linearRampToValueAtTime(1e-4, S + v),
            O.connect(we).connect(q).connect(t),
            O.start(S),
            O.stop(S + v + .05)
        }
    }
    let M = [220, 261.6, 329.6]
      , _ = [174.6, 220, 261.6]
      , V = [261.6, 329.6, 392]
      , Y = [196, 246.9, 293.7]
      , se = [146.8, 174.6, 220]
      , D = [164.8, 196, 246.9]
      , K = [ (S, C, v) => {
        (S === 0 || S === 8 || S === 11) && f(v),
        (S === 4 || S === 12 || S === 7) && b(v, 1800, 2.5, S === 7 ? .18 : .35, .09),
        b(v, 9e3, .8, S % 4 === 2 ? .12 : .05, .05, "highpass");
        let I = [55, 0, 0, 65.4, 0, 0, 55, 0, 82.4, 0, 73.4, 0, 0, 65.4, 0, 0][S];
        I && $(v, I * [1, .89, 1.19, 1.06][C % 4], {
            peak: .55,
            dec: .32,
            slide: .5,
            cut: 600
        }),
        S === 0 && T(v, [M, _, V, Y][C % 4], l * 15)
    }
    , (S, C, v) => {
        S % 4 === 0 && f(v, .7, 48),
        (S === 4 || S === 12) && b(v, 2200, 1.5, .3, .12),
        b(v, 7e3, 1, S % 2 ? .07 : .03, .04, "highpass"),
        [0, 3, 6, 10, 13].includes(S) && $(v, [49, 55, 58.3, 65.4][C % 4] * (S === 10 ? 1.5 : 1), {
            peak: .6,
            dec: .45,
            slide: 1.2,
            cut: 500
        }),
        (S === 2 || S === 7 || S === 14) && T(v, [se, M, _, Y][C % 4], l * 1.5, "sine", .06)
    }
    , (S, C, v) => {
        (S === 0 || S === 10) && f(v, .6, 55),
        S === 8 && b(v, 2500, 2, .2, .08),
        (S % 4 === 0 || S === 6 || S === 14) && $(v, 2093, {
            type: "sine",
            peak: .06,
            dec: .12
        });
        let I = [V, Y, M, _][C % 4]
          , z = [0, 1, 2, 1][S % 4]
          , G = S % 8 < 4 ? 2 : 4;
        $(v, I[z] * G, {
            type: "triangle",
            peak: .09,
            dec: .18,
            cut: 3e3
        }),
        (S === 0 || S === 8) && $(v, I[0] / 2, {
            peak: .4,
            dec: .4,
            cut: 500
        })
    }
    , (S, C, v) => {
        (S === 0 || S === 3 || S === 10) && f(v, 1, 38),
        S === 8 && b(v, 1600, 1.2, .45, .16),
        b(v, 8500, .9, .06, .03, "highpass"),
        S % 4 === 3 && b(v + l / 2, 8500, .9, .05, .03, "highpass"),
        (S === 0 || S === 6) && $(v, [41.2, 43.7, 36.7, 49][C % 4], {
            peak: .7,
            dec: .7,
            slide: .8,
            cut: 300
        }),
        S === 0 && C % 2 === 0 && T(v, [D, V][C % 4 < 2 ? 0 : 1], l * 30, "sine", .03)
    }
    , (S, C, v) => {
        S % 4 === 0 && f(v, .85, 45),
        S % 4 === 2 && b(v, 8e3, .7, .14, .12, "highpass"),
        (S === 4 || S === 12) && b(v, 2e3, 2, .22, .1),
        [3, 7, 9, 14].includes(S) && $(v, S === 9 ? 330 : 220, {
            peak: .12,
            dec: .12,
            slide: .3,
            cut: 900
        }),
        S === 0 && T(v, [M, D, _, Y][C % 4], l * 16, "sawtooth", .018),
        S % 8 === 0 && $(v, [55, 41.2, 43.7, 49][C % 4], {
            peak: .45,
            dec: .5,
            cut: 400
        })
    }
    ];
    function L() {
        for (; o < e.currentTime + .12; )
            K[s](a % 16, Math.floor(a / 16), o),
            a++,
            o += l
    }
    return {
        play(S, C=0) {
            e || (e = new (window.AudioContext || window.webkitAudioContext),
            t = e.createGain(),
            t.gain.value = r ? 0 : u,
            t.connect(e.destination),
            d = c()),
            e.resume().catch( () => {}
            ),
            s = S % Vo.length,
            a = Math.floor(C / 1e3 / l),
            o = e.currentTime + .05,
            i = o - a * l,
            clearInterval(n),
            n = setInterval(L, 25)
        },
        start() {
            this.play(s, 0)
        },
        stop() {
            clearInterval(n),
            n = 0,
            e?.suspend().catch( () => {}
            )
        },
        get track() {
            return s
        },
        beat() {
            return e && n && e.state === "running" ? Math.floor((e.currentTime - i) / (l * 4)) : Math.floor(performance.now() / 577)
        },
        setMuted(S) {
            r = S,
            t && (t.gain.value = S ? 0 : u)
        },
        setVolume(S) {
            u = S,
            t && !r && (t.gain.value = S)
        },
        get playing() {
            return !!n
        },
        get muted() {
            return r
        }
    }
}
var tc = 200
  , bn = 4
  , Cd = 45e3
  , Ed = 30
  , Rm = {
    gate: {
        name: "Gate line",
        stops: ["City Gate", "National Christian Centre", "Ceddi Plaza", "National Mosque", "Eagle Square"]
    },
    cbd: {
        name: "CBD line",
        stops: ["Yar'Adua Centre", "IbroFish", "National Mosque", "Eagle Square", "Millennium Park", "Transcorp Hilton"]
    }
}
  , Ki = (e, t) => Math.max(100, Math.round(tc * e * .5 * dp / 1e3 * bn / Math.max(1, Math.min(bn, t)) / 50) * 50);
function Hm(e) {
    let t = new Ae
      , n = p => new Me({
        color: p,
        flatShading: !0,
        roughness: .7
    })
      , o = (p, f, b, $, T) => {
        let M = new ae(p,f);
        return M.position.set(b, $, T),
        M.castShadow = !0,
        t.add(M),
        M
    }
      , a = n(2067020)
      , i = n(13620696)
      , r = n(9067059);
    o(new fe(4.6,.16,2.2), a, 0, 2.6, 0);
    for (let p of [-2.1, 2.1])
        for (let f of [-.9, .9])
            o(new fe(.1,2.6,.1), i, p, 1.3, f);
    o(new fe(4.2,1.6,.06), n(12375759), 0, 1.5, -.95),
    o(new fe(3.4,.1,.5), r, 0, .5, -.6),
    o(new fe(.1,3.4,.1), i, 2.7, 1.7, .8);
    let s = document.createElement("canvas");
    s.width = 512,
    s.height = 256;
    let l = s.getContext("2d");
    l.fillStyle = "#1f8a4c",
    l.fillRect(0, 0, 512, 256),
    l.fillStyle = "#fff",
    l.fillRect(10, 10, 492, 236),
    l.fillStyle = "#1f8a4c",
    l.fillRect(18, 18, 476, 220),
    l.fillStyle = "#fff",
    l.textAlign = "center",
    l.font = "900 92px DM Sans, sans-serif",
    l.fillText("ALONG", 256, 112);
    let u = 46;
    for (l.font = `700 ${u}px DM Sans, sans-serif`; l.measureText(e).width > 450 && u > 22; )
        u -= 2,
        l.font = `700 ${u}px DM Sans, sans-serif`;
    l.fillText(e, 256, 190);
    let d = new Ke(s);
    d.colorSpace = qe;
    let c = o(new fe(1.6,.8,.06), [i, i, i, i, new ze({
        map: d
    }), new ze({
        map: d
    })], 2.7, 3.2, .8);
    return c.rotation.y = Math.PI / 2,
    t
}
var h = e => document.querySelector(e)
  , fa = e => (e * ni / 1e3).toFixed(1)
  , pr = e => e * ni < 1e3 ? Math.round(e * ni) + " m" : fa(e) + " km"
  , Pa = (e, t) => {
    h(".load .bar i").style.width = e + "%",
    t && (h(".load .txt").textContent = t)
}
;
function dy(e, t) {
    Pa(100, e),
    window.__alStep?.(t);
    let n = document.createElement("button");
    n.type = "button",
    n.className = "reload",
    n.textContent = "Reload",
    n.onclick = () => location.reload(),
    h(".load .box").appendChild(n)
}
var en = matchMedia("(max-width: 700px)").matches || (navigator.hardwareConcurrency || 8) <= 4
  , wt = ( () => {
    for (let e of [{
        antialias: !en,
        powerPreference: "high-performance"
    }, {
        antialias: !1
    }])
        try {
            return new D0(e)
        } catch {}
    throw dy("Your browser couldn't start 3D graphics. Close other tabs and reload, or update your browser (Chrome works best).", "no3d"),
    new Error("No 3D: WebGL couldn't start on this device")
}
)()
  , pc = !1;
wt.domElement.addEventListener("webglcontextlost", e => {
    e.preventDefault(),
    pc = !0,
    setTimeout( () => {
        pc && (h("#gl-lost").hidden = !1)
    }
    , 2e3),
    setTimeout( () => {
        pc && !document.hidden && window.__alReport?.("3D stopped mid-game (WebGL context lost)", en ? "phone" : "computer")
    }
    , 5e3)
}
);
wt.domElement.addEventListener("webglcontextrestored", () => {
    pc = !1,
    h("#gl-lost").hidden = !0
}
);
h("#gl-reload").addEventListener("click", () => {
    try {
        gc = 0,
        by(0)
    } catch {}
    setTimeout( () => location.reload(), 300)
}
);
var rh = Math.min(devicePixelRatio, en ? 1.25 : 2);
wt.setPixelRatio(rh);
wt.setSize(innerWidth, innerHeight);
wt.shadowMap.enabled = !0;
wt.shadowMap.type = S0;
h("#stage").appendChild(wt.domElement);
var J = new vl
  , hy = en ? 650 : 900
  , je = new _0(55,innerWidth / innerHeight,.5,hy + 100)
  , X = new F0(je,wt.domElement);
X.enableDamping = !0;
X.enablePan = !1;
X.minDistance = 8;
X.maxDistance = 320;
X.minPolarAngle = .35;
X.maxPolarAngle = 1.35;
addEventListener("resize", () => {
    je.aspect = innerWidth / innerHeight,
    je.updateProjectionMatrix(),
    wt.setSize(innerWidth, innerHeight)
}
);
var iu = new ju(16777215,7307098,1.2);
J.add(iu);
var Vt = new Du(16777215,2.4);
Vt.castShadow = !0;
Vt.shadow.mapSize.set(en ? 1024 : 2048, en ? 1024 : 2048);
Object.assign(Vt.shadow.camera, {
    left: -90,
    right: 90,
    top: 90,
    bottom: -90,
    near: 10,
    far: 600
});
Vt.shadow.bias = -5e-4;
en && (Vt.castShadow = !1);
J.add(Vt, Vt.target);
function F1(e, t) {
    let n = document.createElement("canvas");
    n.width = 2,
    n.height = 256;
    let o = n.getContext("2d")
      , a = o.createLinearGradient(0, 0, 0, 256);
    a.addColorStop(0, e),
    a.addColorStop(1, t),
    o.fillStyle = a,
    o.fillRect(0, 0, 2, 256);
    let i = new Ke(n);
    return i.colorSpace = qe,
    i
}
var zm = {
    morning: {
        sky: ["#9fd0f5", "#ffe3b8"],
        fog: 15262676,
        sun: 16773590,
        si: 2.4,
        hi: 1.2,
        dir: [-1, .7, .6]
    },
    afternoon: {
        sky: ["#5fb4f2", "#d8efff"],
        fog: 14084341,
        sun: 16777215,
        si: 2.8,
        hi: 1.4,
        dir: [-.6, 1, .7]
    },
    evening: {
        sky: ["#ffb27a", "#c4566a"],
        fog: 14916221,
        sun: 16761994,
        si: 2.6,
        hi: 1.2,
        dir: [-.8, .45, .9]
    },
    night: {
        sky: ["#0b1530", "#2c3466"],
        fog: 1712709,
        sun: 10466559,
        si: .55,
        hi: .4,
        dir: [.4, 1, -.3]
    }
}
  , Io = "";
function fy() {
    let e = new Intl.DateTimeFormat("en-GB",{
        timeZone: "Africa/Lagos",
        hour: "numeric",
        minute: "numeric",
        hourCycle: "h23"
    }).formatToParts(new Date);
    return {
        h: +e.find(t => t.type === "hour").value,
        m: +e.find(t => t.type === "minute").value
    }
}
function Sc() {
    let e = new URLSearchParams(location.search).get("sky")
      , {h: t, m: n} = fy();
    h("#clock").textContent = `${String(t).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
    let o = zm[e] ? e : t >= 6 && t < 11 ? "morning" : t >= 11 && t < 16 ? "afternoon" : t >= 16 && t < 19 ? "evening" : "night";
    if (o === Io || w === "club")
        return;
    Io = o;
    let a = zm[o];
    J.background = F1(...a.sky),
    J.fog = new H0(a.fog,en ? 220 : 320,hy),
    Vt.color.set(a.sun),
    Vt.intensity = a.si,
    iu.intensity = a.hi,
    Vt.userData.dir = new Z(...a.dir).normalize(),
    Im && (Im.emissiveIntensity = o === "night" ? 1.2 : 0),
    sh && (sh.material.emissiveIntensity = o === "night" ? 2.2 : o === "evening" ? .6 : 0),
    Ac && (Ac.visible = o === "night")
}
var Im = null
  , ru = new ae(new Ue(2e4,2e4),new Me({
    color: 8366174,
    roughness: 1
}));
ru.rotation.x = -Math.PI / 2;
ru.receiveShadow = !0;
J.add(ru);
var or = 60
  , mc = new Map
  , Y1 = (e, t) => `${Math.floor(e / or)},${Math.floor(t / or)}`;
function Is(e) {
    let t = 1 / 0
      , n = -1 / 0
      , o = 1 / 0
      , a = -1 / 0;
    for (let[r,s] of e)
        t = Math.min(t, r),
        n = Math.max(n, r),
        o = Math.min(o, s),
        a = Math.max(a, s);
    let i = {
        poly: e,
        minx: t,
        maxx: n,
        minz: o,
        maxz: a
    };
    for (let r = Math.floor(t / or); r <= Math.floor(n / or); r++)
        for (let s = Math.floor(o / or); s <= Math.floor(a / or); s++) {
            let l = `${r},${s}`;
            mc.has(l) || mc.set(l, []),
            mc.get(l).push(i)
        }
}
function W1(e, t, n) {
    let o = !1;
    for (let a = 0, i = e.length - 1; a < e.length; i = a++) {
        let[r,s] = e[a]
          , [l,u] = e[i];
        s > n != u > n && t < (l - r) * (n - s) / (u - s) + r && (o = !o)
    }
    return o
}
function De(e, t) {
    for (let n of mc.get(Y1(e, t)) || [])
        if (!(e < n.minx - .4 || e > n.maxx + .4 || t < n.minz - .4 || t > n.maxz + .4) && W1(n.poly, e, t))
            return !0;
    return !1
}
function q1(e) {
    var o;
    let t = {
        green: 6265420,
        water: 7321568,
        parking: 12170667,
        dirt: 13217929
    }
      , n = {};
    for (let a of e) {
        let i = new Yr(a.p.map( ([s,l]) => new Oi(s,-l)))
          , r = new N0(i);
        r.rotateX(-Math.PI / 2),
        r.translate(0, a.k === "green" ? .1 : .15, 0),
        (n[o = a.k] || (n[o] = [])).push(r)
    }
    for (let[a,i] of Object.entries(n)) {
        let r = new ae(Ca(i),new Me({
            color: t[a],
            roughness: 1,
            polygonOffset: !0,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -2
        }));
        r.receiveShadow = !0,
        J.add(r)
    }
}
var vn = () => !1;
function U1(e) {
    let n = new Map;
    for (let o of e)
        for (let a = 0; a < o.p.length - 1; a++) {
            let[i,r] = o.p[a]
              , [s,l] = o.p[a + 1]
              , u = [i, r, s, l, o.w / 2 + 1.2];
            for (let d = Math.floor((Math.min(i, s) - 12) / 40); d <= Math.floor((Math.max(i, s) + 12) / 40); d++)
                for (let c = Math.floor((Math.min(r, l) - 12) / 40); c <= Math.floor((Math.max(r, l) + 12) / 40); c++) {
                    let p = d + "," + c;
                    n.has(p) || n.set(p, []),
                    n.get(p).push(u)
                }
        }
    vn = (o, a) => {
        for (let[i,r,s,l,u] of n.get(Math.floor(o / 40) + "," + Math.floor(a / 40)) || []) {
            let d = s - i
              , c = l - r
              , p = d * d + c * c || 1
              , f = Math.max(0, Math.min(1, ((o - i) * d + (a - r) * c) / p));
            if (Math.hypot(o - i - d * f, a - r - c * f) < u)
                return !0
        }
        return !1
    }
}
var sh = null
  , Ac = null;
function V1(e) {
    let t = []
      , n = 23
      , o = () => (n = n * 16807 % 2147483647) / 2147483647;
    e.forEach( (Y, se) => {
        if (Y.w < 8 || (se * 2654435761 >>> 0) % 100 < 20)
            return;
        let D = 1;
        for (let K = 0; K < Y.p.length - 1; K++) {
            let[L,S] = Y.p[K]
              , [C,v] = Y.p[K + 1]
              , I = Math.hypot(C - L, v - S) || 1
              , z = -(v - S) / I
              , G = (C - L) / I
              , O = Y.w / 2 + 1.4;
            for (let q = 6; q < I; q += 34) {
                let we = L + (C - L) * q / I + z * O * D
                  , be = S + (v - S) * q / I + G * O * D;
                !De(we, be) && !vn(we, be) && t.push([we, be, Math.atan2(-z * D, -G * D)]),
                D = -D
            }
        }
    }
    );
    let a = [[0, 0]];
    window.__gate && a.push(window.__gate);
    let i = ([Y,se]) => Math.min(...a.map( ([D,K]) => Math.hypot(Y - D, se - K))) + o() * 300
      , r = t.map(Y => [i(Y), Y]).sort( (Y, se) => Y[0] - se[0]).slice(0, en ? 1200 : 2500).map(Y => Y[1])
      , s = new oe(.09,.13,7,6);
    s.translate(0, 3.5, 0);
    let l = new fe(.1,.1,1.6);
    l.translate(0, 6.95, .8);
    let u = Ca([s.toNonIndexed(), l.toNonIndexed()].map(Y => (Y.deleteAttribute("uv"),
    Y)))
      , d = new fe(.5,.18,.8);
    d.translate(0, 6.85, 1.5);
    let c = new P0(8,20);
    c.rotateX(-Math.PI / 2),
    c.translate(0, .42, 3);
    let p = new Me({
        color: 6119784,
        flatShading: !0
    })
      , f = new Me({
        color: 14605266,
        emissive: 16765562,
        emissiveIntensity: 0
    })
      , b = new ze({
        color: 16762987,
        transparent: !0,
        opacity: .28,
        blending: kl,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -12,
        polygonOffsetUnits: -12
    });
    sh = {
        material: f
    },
    Ac = {
        list: [],
        set visible(Y) {
            this.list.forEach(se => se.visible = Y)
        }
    };
    let $ = new Map;
    for (let Y of r)
        ds($, Y[0], Y[1]).push(Y);
    let T = new Kt
      , M = new Xa
      , _ = new Z(1,1,1)
      , V = new Fr;
    for (let Y of $.values()) {
        let se = new yo(u,p,Y.length)
          , D = new yo(d,f,Y.length)
          , K = new yo(c,b,Y.length);
        Y.forEach( ([L,S,C], v) => {
            T.compose(new Z(L,0,S), M.setFromEuler(V.set(0, C, 0)), _),
            se.setMatrixAt(v, T),
            D.setMatrixAt(v, T),
            K.setMatrixAt(v, T)
        }
        );
        for (let L of [se, D, K])
            L.computeBoundingSphere();
        se.castShadow = !en,
        K.visible = !1,
        K.renderOrder = 2,
        Ac.list.push(K),
        J.add(se, D, K)
    }
}
var Pm = 600
  , J1 = (e, t) => Math.floor(e / Pm) + "," + Math.floor(t / Pm);
function ds(e, t, n) {
    let o = J1(t, n);
    return e.has(o) || e.set(o, []),
    e.get(o)
}
function Lm(e, t, n={}) {
    for (let o of e.values()) {
        let a = new Cl;
        a.setAttribute("position", new Gu(o,3)),
        a.computeVertexNormals();
        let i = new ae(a,t);
        n.receiveShadow && (i.receiveShadow = !0),
        J.add(i)
    }
}
function K1(e) {
    let t = new Map
      , n = []
      , o = (u, d, c, p, f) => n.push(u[0], f, u[1], d[0], f, d[1], c[0], f, c[1], u[0], f, u[1], c[0], f, c[1], p[0], f, p[1]);
    for (let u of e) {
        let d = u.w / 2
          , c = u.w >= 10 ? .3 : .25
          , p = u.p;
        for (let f = 0; f < p.length - 1; f++) {
            let[b,$] = p[f]
              , [T,M] = p[f + 1];
            n = ds(t, (b + T) / 2, ($ + M) / 2);
            let _ = Math.hypot(T - b, M - $) || 1
              , V = -(M - $) / _ * d
              , Y = (T - b) / _ * d;
            o([b + V, $ + Y], [T + V, M + Y], [T - V, M - Y], [b - V, $ - Y], c)
        }
        for (let[f,b] of p)
            for (let $ = 0; $ < 8; $++) {
                $ === 0 && (n = ds(t, f, b));
                let T = $ / 8 * Math.PI * 2
                  , M = ($ + 1) / 8 * Math.PI * 2;
                n.push(f, c, b, f + Math.cos(M) * d, c, b + Math.sin(M) * d, f + Math.cos(T) * d, c, b + Math.sin(T) * d)
            }
    }
    Lm(t, new Me({
        color: 3814975,
        roughness: .95,
        side: tn,
        polygonOffset: !0,
        polygonOffsetFactor: -4,
        polygonOffsetUnits: -4
    }), {
        receiveShadow: !0
    });
    let a = new Map, i = new Map, r, s, l = (u, d, c, p, f, b) => {
        let[$,T] = d
          , [M,_] = c
          , V = Math.hypot(M - $, _ - T) || 1
          , Y = -(_ - T) / V
          , se = (M - $) / V
          , D = p - f / 2
          , K = p + f / 2
          , L = [$ + Y * D, T + se * D]
          , S = [M + Y * D, _ + se * D]
          , C = [M + Y * K, _ + se * K]
          , v = [$ + Y * K, T + se * K];
        u.push(L[0], b, L[1], S[0], b, S[1], C[0], b, C[1], L[0], b, L[1], C[0], b, C[1], v[0], b, v[1])
    }
    ;
    for (let u of e)
        if (!(u.w < 6))
            for (let d = 0; d < u.p.length - 1; d++) {
                let c = u.p[d]
                  , p = u.p[d + 1];
                r = ds(a, (c[0] + p[0]) / 2, (c[1] + p[1]) / 2),
                s = ds(i, (c[0] + p[0]) / 2, (c[1] + p[1]) / 2);
                for (let f of [-1, 1])
                    l(r, c, p, f * (u.w / 2 - .3), .6, .36);
                if (u.w >= 8) {
                    let f = Math.hypot(p[0] - c[0], p[1] - c[1]);
                    for (let b = 2; b + 3.5 < f; b += 9) {
                        let $ = b / f
                          , T = (b + 3.5) / f;
                        l(s, [c[0] + (p[0] - c[0]) * $, c[1] + (p[1] - c[1]) * $], [c[0] + (p[0] - c[0]) * T, c[1] + (p[1] - c[1]) * T], 0, .35, .38)
                    }
                }
            }
    for (let[u,d] of [[a, 15262422], [i, 15906106]])
        Lm(u, new Me({
            color: d,
            roughness: .9,
            side: tn,
            polygonOffset: !0,
            polygonOffsetFactor: -6,
            polygonOffsetUnits: -6
        }))
}
var Nm = [15854817, 15129803, 14273976, 15656662, 13620696, 14930872, 13812648, 16118506]
  , Om = 500;
function X1(e) {
    let t = new Map
      , n = 7
      , o = () => (n = n * 16807 % 2147483647) / 2147483647;
    for (let i of e) {
        if (i.p.length < 3)
            continue;
        let r;
        try {
            r = new Ml(new Yr(i.p.map( ([$,T]) => new Oi($,-T))),{
                depth: i.h,
                bevelEnabled: !1
            })
        } catch {
            continue
        }
        r.rotateX(-Math.PI / 2);
        let s = i.h >= 28
          , l = new jo(s ? o() < .5 ? 10467017 : 13161434 : Nm[Math.floor(o() * Nm.length)])
          , u = r.attributes.position.count
          , d = new Float32Array(u * 3)
          , c = l.clone().multiplyScalar(.82);
        for (let $ = 0; $ < u; $++) {
            let T = r.attributes.position.getY($) >= i.h - .01 && r.attributes.normal.getY($) > .9 ? c : l;
            d[$ * 3] = T.r,
            d[$ * 3 + 1] = T.g,
            d[$ * 3 + 2] = T.b
        }
        r.setAttribute("color", new Za(d,3)),
        r.deleteAttribute("uv");
        let p = i.p.reduce( ($, T) => $ + T[0], 0) / i.p.length
          , f = i.p.reduce( ($, T) => $ + T[1], 0) / i.p.length
          , b = Math.floor(p / Om) + "," + Math.floor(f / Om);
        t.has(b) || t.set(b, []),
        t.get(b).push(r),
        Is(i.p)
    }
    let a = new Me({
        vertexColors: !0,
        roughness: .85,
        flatShading: !0
    });
    for (let i of t.values()) {
        let r = new ae(Ca(i),a);
        r.castShadow = !0,
        r.receiveShadow = !0,
        J.add(r)
    }
}
var py = [];
function ao(e, t, n, o) {
    let a = document.createElement("canvas")
      , i = a.getContext("2d");
    i.font = "800 44px DM Sans, sans-serif";
    let r = Math.ceil(i.measureText(e).width) + 48;
    a.width = r,
    a.height = 80,
    i.font = "800 44px DM Sans, sans-serif",
    i.fillStyle = "rgba(15,61,46,.88)",
    i.beginPath(),
    i.roundRect(0, 4, r, 70, 35),
    i.fill(),
    i.fillStyle = "#fff8ec",
    i.textAlign = "center",
    i.textBaseline = "middle",
    i.fillText(e, r / 2, 41);
    let s = new Ke(a);
    s.colorSpace = qe;
    let l = new Tl(new El({
        map: s,
        depthTest: !1,
        transparent: !0
    }));
    return l.position.set(t, n, o),
    l.scale.set(r / 80 * 4, 4, 1),
    l.renderOrder = 10,
    l.userData.base = l.scale.clone(),
    J.add(l),
    py.push(l),
    l
}
var le = null
  , Td = {
    ...Qa
}
  , x = new Z(0,0,95)
  , j = Math.PI
  , ce = null
  , hs = 0
  , Rc = new Z;
function Xh(e) {
    Td = e || Td,
    le && J.remove(le.group),
    le = Do(Td),
    Oe(le.group),
    le.group.scale.setScalar(1.15),
    le.group.traverse(t => {
        t.isMesh && (t.castShadow = !0)
    }
    ),
    J.add(le.group)
}
var de = new ae(new L0(.7,1.1,28),new ze({
    color: 15906106,
    transparent: !0,
    opacity: .95,
    depthTest: !1
}));
de.rotation.x = -Math.PI / 2;
de.visible = !1;
de.renderOrder = 5;
J.add(de);
var Ht = new Set;
addEventListener("keydown", e => {
    Ht.add(e.key.toLowerCase()),
    ["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(e.key.toLowerCase()) && e.preventDefault()
}
);
addEventListener("keyup", e => Ht.delete(e.key.toLowerCase()));
var fi = new j0
  , Bm = new Oi
  , fs = null;
wt.domElement.addEventListener("pointerdown", e => {
    fs = {
        x: e.clientX,
        y: e.clientY,
        t: performance.now()
    },
    setTimeout( () => h(".help").classList.add("gone"), 4e3)
}
);
wt.domElement.addEventListener("pointerup", e => {
    if (P?.driving || Ne?.riding || !fs || Math.hypot(e.clientX - fs.x, e.clientY - fs.y) > 8 || performance.now() - fs.t > 400)
        return;
    if (Bm.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1),
    fi.setFromCamera(Bm, je),
    k && (w === "city" || w === "club" || w === "cell" || w === "street" || w === "venue")) {
        let n = k.pick(e.clientX, e.clientY, je, innerWidth, innerHeight, fi);
        if (n) {
            eu(n);
            return
        }
    }
    if (et && w === "city") {
        let n = fi.intersectObjects(et.meshes(), !1)[0]?.object.userData.traffic;
        if (n?.hire) {
            Hb(n);
            return
        }
    }
    if ((w === "city" || w === "street") && xh.length) {
        let n = fi.intersectObjects(xh, !1)[0];
        if (n && n.distance < 140 && n.object.visible) {
            Qx(n.object.userData.adSpot);
            return
        }
    }
    if (w === "home" && me?.itemOf) {
        let n = fi.intersectObjects(me.group.children, !0).find(o => me.itemOf(o.object));
        if (n) {
            Sk(me.itemOf(n.object), n.object);
            return
        }
    }
    if (w === "venue" && ye?.room.pews) {
        let n = fi.intersectObjects(ye.room.pews, !1)[0];
        if (n) {
            Qs(n.point);
            return
        }
    }
    St && (St = !1);
    let t = fi.intersectObject(w === "home" ? me.floor : w === "club" ? kn.floor : w === "cell" ? Oa.floor : w === "street" ? Dn.ground : w === "venue" ? ye.room.floor : ru)[0];
    t && (ce = t.point.clone(),
    ce.y = 0,
    de.position.set(ce.x, w !== "city" ? .06 : .5, ce.z),
    de.scale.setScalar(w !== "city" ? .45 : 1),
    de.visible = !0)
}
);
var Z1 = new Me({
    vertexColors: !0,
    flatShading: !0,
    roughness: .85
});
function Oe(e) {
    e.updateMatrixWorld(!0);
    let t = o => o.userData.part || o.userData.spin
      , n = [e];
    e.traverse(o => {
        o !== e && t(o) && n.push(o)
    }
    );
    for (let o of n) {
        let a = new Kt().copy(o.matrixWorld).invert()
          , i = new Map
          , r = [];
        o.traverse(s => {
            if (!s.isMesh || s.material.map || s.userData.animated || s.userData.fused)
                return;
            let l = s.parent;
            for (; l && l !== o && !t(l); )
                l = l.parent;
            if (l !== o)
                return;
            let u = s.material
              , d = !u.emissive || u.emissiveIntensity === 0 ? u.metalness < .2 && u.side === A0 : !1
              , c = d ? "vc" : u.color.getHexString() + u.metalness + u.roughness + u.side
              , p = s.geometry.index ? s.geometry.toNonIndexed() : s.geometry.clone();
            if (p.deleteAttribute("uv"),
            p.applyMatrix4(new Kt().multiplyMatrices(a, s.matrixWorld)),
            d) {
                let f = p.attributes.position.count
                  , b = new Float32Array(f * 3);
                for (let $ = 0; $ < f; $++)
                    b[$ * 3] = u.color.r,
                    b[$ * 3 + 1] = u.color.g,
                    b[$ * 3 + 2] = u.color.b;
                p.setAttribute("color", new Za(b,3))
            }
            i.has(c) || i.set(c, {
                m: u,
                list: []
            }),
            i.get(c).list.push(p),
            r.push(s)
        }
        ),
        r.forEach(s => s.parent.remove(s));
        for (let[s,{m: l, list: u}] of i) {
            let d = new ae(Ca(u),s === "vc" ? Z1 : l);
            d.castShadow = d.receiveShadow = !0,
            d.userData.fused = !0,
            o.add(d)
        }
    }
    return e
}
var my = [];
function qa(e, t, n, o, a, i, r) {
    let s = Math.cos(n)
      , l = Math.sin(n);
    Is([[o, i], [a, i], [a, r], [o, r]].map( ([u,d]) => [e + u * s + d * l, t - u * l + d * s]))
}
var zt = [559, 971]
  , lh = [565.5, 879]
  , mr = [541, 903]
  , Q1 = [zt, lh];
function ex(e) {
    let t = e.landmarks;
    e.gate && (window.__gate = [e.gate.x, e.gate.z]);
    let n = Oe(V0());
    n.rotation.y = -e.mosque.angle,
    J.add(n),
    Is([[-33, -33], [33, -33], [33, 33], [-33, 33]]);
    for (let[i,r] of [[-37, -37], [37, -37], [-37, 37], [37, 37]])
        Is([[i - 3, r - 3], [i + 3, r - 3], [i + 3, r + 3], [i - 3, r + 3]]);
    ao("National Mosque", 0, 58, 0);
    let o = (i, r, s, l, u=0) => {
        if (!t[r])
            return;
        let[d,c] = t[r]
          , p = Oe(i());
        return p.position.set(d, 0, c),
        p.rotation.y = u,
        J.add(p),
        ao(s, d, l, c),
        p
    }
    ;
    {
        let i = Oe(J0());
        i.position.set(zt[0], 0, zt[1]),
        i.rotation.y = Math.atan2(mr[0] - zt[0], mr[1] - zt[1]),
        J.add(i);
        let r = Oe(K0());
        r.position.set(lh[0], 0, lh[1]),
        r.rotation.y = i.rotation.y,
        J.add(r),
        ao("National Christian Centre", zt[0], 52, zt[1])
    }
    o(X0, "Eagle Square", "Eagle Square", 22),
    o(Z0, "Millennium Park", "Millennium Park", 14),
    o(Q0, "IbroFish", "IbroFish", 12);
    let a = o(tp, "Magic Land", "Magic Land", 52);
    if (a && a.traverse(i => {
        i.userData.spin && my.push(i)
    }
    ),
    e.gate) {
        let {x: i, z: r, angle: s} = e.gate
          , l = Oe(ep());
        l.position.set(i, 0, r),
        l.rotation.y = s,
        J.add(l),
        ao("City Gate", i, 50, r);
        for (let u of [-1, 1])
            qa(i, r, s, u > 0 ? 9.5 : -26.6, u > 0 ? 26.6 : -9.5, -5, 5)
    }
    for (let i of ["Ceddi Plaza", "Shehu Musa Yar'Adua Centre"])
        t[i] && ao(i.replace("Shehu Musa ", ""), t[i][0], 30, t[i][1])
}
var tx = Date.parse("2026-10-14T00:00:00+01:00")
  , _m = () => Date.now() < tx
  , Gm = '<span class="new-tag">NEW</span>'
  , nx = [{
    id: "taxi",
    name: "Taxi",
    icon: "car",
    color: "#1f8a4c",
    ready: !0
}, {
    id: "market",
    name: "Market & shops",
    icon: "store",
    color: "#1f8a4c",
    ready: !0
}, {
    id: "trek",
    name: "Trek",
    icon: "footprints",
    color: "#8a5a33",
    ready: !0
}, {
    id: "keke",
    name: "Keke",
    icon: "car",
    color: "#d9a300",
    ready: !0
}, {
    id: "along",
    name: "Along (shared)",
    icon: "users",
    color: "#0f6b45",
    ready: !0
}, {
    id: "police",
    name: "Police",
    icon: "siren",
    color: "#1b2030",
    ready: !0
}, {
    id: "ambulance",
    name: "Ambulance",
    icon: "ambulance",
    color: "#d43d3d",
    ready: !0
}, {
    id: "lawyer",
    name: "Lawyer",
    icon: "scale",
    color: "#7b4dd8",
    text: "Arrested at a checkpoint or for wandering into Aso Villa? Call a lawyer to get you out faster. Lawyers can be other players doing their job."
}, {
    id: "fire",
    name: "Fire service",
    icon: "flame",
    color: "#f08a24",
    text: "For emergencies at your house or business once you own property. Fast response saves your furniture."
}, {
    id: "mechanic",
    name: "Mechanic",
    icon: "wrench",
    color: "#5d7189",
    text: "Once you own a car, call a mechanic when it breaks down. Some mechanics will be other players."
}]
  , ox = new Set(["Rankings"]);
function re() {
    h("#menu").hidden = !0
}
function ax(e) {
    re(),
    h("#soon-title").textContent = e.name,
    h("#soon-text").textContent = e.text;
    let t = document.querySelector("#soon-sheet .soon-tag");
    t && (t.outerHTML = '<span class="soon-tag">Coming soon</span>'),
    h("#soon-sheet").hidden = !1
}
function Zh() {
    h("#menu-btn").innerHTML = xe("menu", 20),
    h("#menu-close").innerHTML = xe("x", 18);
    let e = h("#call-toggle");
    e.innerHTML = xe("phone", 20) + `<span>Services</span><span class="chev">${xe("trending-up", 0)}</span>`,
    e.querySelector(".chev").innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    e.setAttribute("aria-expanded", "false"),
    h("#calls").hidden = !0,
    e.onclick = () => {
        let l = h("#calls").hidden;
        h("#calls").hidden = !l,
        e.setAttribute("aria-expanded", l),
        l && $s("m_services")
    }
    ;
    let t = h("#calls");
    t.innerHTML = "";
    for (let l of nx) {
        let u = document.createElement("button");
        u.type = "button",
        u.className = "call",
        u.innerHTML = `<span class="ic" style="background:${l.color}">${xe(l.icon, 22)}</span><span></span>${l.ready ? l.isNew && _m() ? Gm : "" : '<span class="soon">Soon</span>'}`,
        u.children[1].textContent = l.name,
        u.addEventListener("click", () => $s("s_" + l.id)),
        u.onclick = () => {
            l.id === "market" ? (re(),
            Gh()) : l.id === "ambulance" ? (re(),
            el()) : l.id === "police" ? (re(),
            kg()) : l.id === "trek" ? (re(),
            h0()) : l.id === "along" ? y0() : l.id === "taxi" || l.id === "keke" ? (re(),
            B ? g("Finish your current ride first.") : Bu(l.id)) : ax(l)
        }
        ,
        t.appendChild(u)
    }
    let n = h("#m-sections");
    n.innerHTML = "";
    let o = null
      , a = () => {
        o || (o = document.createElement("div"),
        o.className = "m-list apps",
        n.appendChild(o))
    }
      , i = (l, u, d, c="", p, f) => {
        let b = document.createElement(p ? "a" : "button");
        if (p ? b.href = p : (b.type = "button",
        b.onclick = d),
        c && (b.className = c),
        b.innerHTML = xe(l, 22) + "<span></span>",
        b.lastChild.textContent = u,
        o.appendChild(b),
        m && b.addEventListener("click", () => $s(im(u))),
        f) {
            let $ = document.createElement("small");
            $.textContent = f,
            b.lastChild.appendChild($)
        }
        ox.has(u) && _m() && b.insertAdjacentHTML("beforeend", Gm)
    }
      , {h: r, m: s} = fy();
    h("#phone-head").innerHTML = `<b>${String(r).padStart(2, "0")}:${String(s).padStart(2, "0")}</b><small>${new Date(Date.now() + 36e5).toUTCString().slice(0, 11)} \xB7 Abuja</small>`,
    a(),
    m ? (i("wallet", "Bank", Ou, "", null, y(A)),
    i("utensils", "Food", ga),
    i("building-2", "Government", () => $n(Bs)),
    i("store", "Shop", () => {
        re(),
        Gh()
    }
    ),
    ft() && i("landmark", "Manage government", () => lw(), "", null, ft() === "minister" ? "Minister" : "Senator"),
    So().length && i("briefcase-business", "Manage business", () => mf(), "", null, So().length > 1 ? `${So().length} businesses` : So()[0].name),
    i("bus", "Ride", () => {
        re(),
        Zf()
    }
    ),
    i("party-popper", "Parties", Uf, "", null, En.length ? `${En.length} on now` : ""),
    i("home", "Home", () => {
        re(),
        pv()
    }
    ),
    i("ambulance", "Health", () => {
        re(),
        el()
    }
    ),
    i("map", "Map", () => {
        re(),
        Ci()
    }
    ),
    i("landmark", "Politics", () => {
        re(),
        la()
    }
    ),
    i("trophy", "Rankings", () => {
        re(),
        ms()
    }
    ),
    i("gem", "My stuff", mv),
    i("flag", "Crew", () => {
        re(),
        jw()
    }
    ),
    i("siren", "Police", () => {
        re(),
        kg()
    }
    ),
    i("scale", "Lawyers", () => {
        re(),
        $i()
    }
    ),
    i("gavel", "EFCC", () => {
        re(),
        xi(Bs)
    }
    , "", null, H && Object.keys(H.cases || {}).length ? `${Object.keys(H.cases).length} open` : ""),
    i("megaphone", "Ads", () => xc()),
    i("sparkles", "Feedback", tu),
    i("circle-help", "Help", () => {
        re(),
        gv()
    }
    ),
    i("user-round", "Me", () => {
        re(),
        yv()
    }
    )) : (i("map", "Map", () => {
        re(),
        Ci()
    }
    ),
    i("sparkles", "Feedback", tu),
    i("circle-help", "Help", () => lu(!1)),
    i("user-round", "Create character", null, "", "/play/create"),
    i("log-in", "Sign in", null, "", "/play/create")),
    m || i("circle-help", "Controls", () => {
        re(),
        g("Tap the ground to walk \xB7 drag to look \xB7 pinch to zoom \xB7 WASD + Shift on computer", 5e3)
    }
    ),
    !m && $e(Te).currentUser && i("log-out", "Log out", async () => {
        await Fu($e(Te));
        try {
            sessionStorage.removeItem("al-guest")
        } catch {}
        location.reload()
    }
    , "danger")
}
h("#menu-btn").innerHTML = xe("menu", 20);
h("#map-btn").innerHTML = xe("map", 20);
h("#map-btn").addEventListener("click", Ci);
h("#menu-btn").addEventListener("click", () => {
    Zh(),
    h("#menu").hidden = !1,
    $s("m_open")
}
);
h("#menu-close").addEventListener("click", re);
h("#menu").addEventListener("click", e => {
    e.target.id === "menu" && re()
}
);
h("#soon-close").addEventListener("click", () => h("#soon-sheet").hidden = !0);
function jm() {
    try {
        if (sessionStorage.getItem("al-guest"))
            return
    } catch {}
    h("#welcome").hidden = !1,
    h("#welcome-guest").onclick = () => {
        h("#welcome").hidden = !0;
        try {
            sessionStorage.setItem("al-guest", "1")
        } catch {}
    }
}
var Te = Y0({
    apiKey: "AIzaSyDlZkXuM4ZfCvlcgFL80_1BCQkB5Nyc6F8",
    authDomain: "abujalife-4f57f.firebaseapp.com",
    projectId: "abujalife-4f57f",
    appId: "1:811321414509:web:4134a99d0e14b183e64064"
});
q0(Te);
var W = U0(Te);
window.__alToken = () => $e(Te).currentUser?.getIdToken() || null;
W0($e(Te), async e => {
    if (!e) {
        m = null,
        h("#m-name").textContent = "Guest",
        oy(),
        jm();
        return
    }
    h("#wallet").textContent = "Connecting\u2026",
    h("#m-name").textContent = "Connecting\u2026";
    let t = null;
    for (let n = 0; !t; n++)
        try {
            t = await Xn(ee(W, "players", e.uid))
        } catch (o) {
            console.warn("player load", o.code || o),
            n === 1 && g("Weak connection. Still trying to load your character\u2026", 4e3),
            await new Promise(a => setTimeout(a, Math.min(15e3, 2e3 * (n + 1))))
        }
    try {
        let n = t.exists() ? t.data() : null;
        n?.look && Xh({
            ...Qa,
            ...n.look
        }),
        h("#m-name").textContent = n?.username ? "@" + n.username : "Guest",
        n?.birth ? (m = {
            uid: e.uid,
            player: n
        },
        A = typeof n.money == "number" ? n.money : 15e4,
        _e(),
        k && (k.publishProfile(),
        k.sendNow(),
        k.watchInbox(qb)),
        kx(),
        S2(),
        $2(),
        _w(),
        dx(),
        qf(!0),
        Vn(!0),
        setInterval( () => !document.hidden && Vn(!0), 600 * 1e3),
        Uy(),
        Qy(),
        Yy(),
        M0(),
        a2(),
        setTimeout(dE, 5e3),
        k0().catch( () => {}
        ),
        sE(),
        z2(),
        Xb(),
        Hw(),
        Sb(),
        Ow(),
        Lu(),
        Ps(lx),
        Ps( () => setTimeout(eC, 3e3))) : (m = null,
        oy(),
        jm())
    } catch (n) {
        console.error(n)
    }
}
);
var ix = performance.now()
  , ch = {}
  , as = e => {
    ch[e] = Math.round(performance.now() - ix)
}
  , st = new URLSearchParams(location.search).has("debug");
st && (window.__scene = J);
var bs = null
  , Md = 0
  , $d = performance.now()
  , nc = 0;
st && (bs = document.createElement("pre"),
bs.style.cssText = "position:fixed;left:8px;bottom:56px;z-index:9;background:rgba(0,0,0,.72);color:#9f9;font:11px/1.45 monospace;padding:8px 10px;border-radius:8px;margin:0;pointer-events:none",
document.body.appendChild(bs));
var Xo = 0
  , is = 0
  , rs = 0;
function rx(e) {
    document.hidden || w !== "city" || (e < 28 ? (is++,
    rs = 0) : e > 55 ? (rs++,
    is = 0) : is = rs = 0,
    is >= 4 && Xo < 2 ? (Xo++,
    is = 0,
    Dm()) : rs >= 8 && Xo > 0 && (Xo--,
    rs = 0,
    Dm()))
}
function Dm() {
    wt.setPixelRatio(Xo === 0 ? rh : Xo === 1 ? Math.min(rh, 1) : .75),
    wt.setSize(innerWidth, innerHeight);
    let e = Xo < 2 && !en;
    Vt.castShadow !== e && (Vt.castShadow = e,
    J.traverse(t => {
        t.material && [].concat(t.material).forEach(n => n.needsUpdate = !0)
    }
    )),
    k?.setMaxShown(Xo === 2 ? 15 : en ? 25 : 40)
}
function Fm() {
    Md++;
    let e = performance.now();
    e - $d < 500 || (nc = Math.round(Md * 1e3 / (e - $d)),
    Md = 0,
    $d = e,
    rx(nc),
    window.__stats = {
        fps: nc,
        drawCalls: wt.info.render.calls,
        triangles: wt.info.render.triangles,
        geometries: wt.info.memory.geometries,
        timing: ch
    },
    bs && (bs.textContent = `fps ${nc}
draw calls ${wt.info.render.calls}
triangles ${wt.info.render.triangles.toLocaleString()}
` + Object.entries(ch).map( ([t,n]) => `${t} ${n} ms`).join(`
`)))
}
(async function() {
    Pa(10, "Loading Abuja\u2026");
    let t = null;
    for (let o = 0; o < 3 && !t; o++) {
        try {
            let a = await fetch("/play/world/central.json");
            a.ok && (t = await a.json())
        } catch {}
        !t && o < 2 && (Pa(10, "Slow connection\u2026 trying again"),
        await new Promise(a => setTimeout(a, 1500 * (o + 1))))
    }
    if (!t)
        throw dy("Couldn't download Abuja. Check your internet and reload the page.", "nomap"),
        new Error("Couldn't download the map (3 tries)");
    gr = t,
    as("data downloaded"),
    Pa(45, "Laying roads\u2026"),
    await new Promise(o => setTimeout(o, 0)),
    q1(t.areas),
    K1(t.roads),
    as("roads built"),
    Pa(65, "Raising buildings\u2026"),
    await new Promise(o => setTimeout(o, 0));
    let n = t.buildings.filter(o => o.p.length > 2 && Q1.some( ([a,i]) => Math.hypot(o.p.reduce( (r, s) => r + s[0], 0) / o.p.length - a, o.p.reduce( (r, s) => r + s[1], 0) / o.p.length - i) < 6));
    for (let o of n)
        Is(o.p);
    X1(t.buildings.filter(o => !n.includes(o))),
    as("buildings built"),
    Pa(85, "Building landmarks\u2026"),
    await new Promise(o => setTimeout(o, 0)),
    ex(t),
    U1(t.roads),
    V1(t.roads),
    sx(t),
    hE(t),
    CC(),
    mC(),
    Cv(),
    H2(t),
    j2(t),
    Pv(),
    Dv(t),
    sk(t),
    Jv(),
    Ev();
    try {
        Hx()
    } catch (o) {
        console.warn("plots", o)
    }
    if (wk(),
    setTimeout( () => YC().catch(o => console.warn("multiplayer", o)), 0),
    as("landmarks, lights, people"),
    Xh(),
    Sc(),
    setInterval(Sc, 3e4),
    FC(t),
    al = !0,
    gy.splice(0).forEach(o => o()),
    st && new URLSearchParams(location.search).get("spawn") === "mosque" && Ob(),
    st && new URLSearchParams(location.search).get("spawn") === "gate" && Qc(t),
    st && new URLSearchParams(location.search).get("spawn") === "club" && ue && Hf(),
    st && new URLSearchParams(location.search).get("spawn") === "clubdoor" && ue && (x.set(ue.x + Math.sin(ue.h) * 8, 0, ue.z + Math.cos(ue.h) * 8),
    j = ue.h + Math.PI,
    ce = null,
    de.visible = !1,
    dt(new Z(Math.sin(j),0,Math.cos(j)), 14, 7, 6, 2)),
    st && new URLSearchParams(location.search).get("spawn") === "mosque" && lt && (x.set(lt.x, 0, lt.z),
    co("mosque", "National Mosque", "mosque", {
        x: lt.x,
        z: lt.z
    }, () => Qs())),
    st && new URLSearchParams(location.search).get("spawn") === "mosquedoor" && lt && (x.set(lt.x, 0, lt.z),
    j = Math.atan2(-x.x, -x.z),
    ce = null,
    de.visible = !1,
    dt(new Z(Math.sin(j),0,Math.cos(j)), 26, 12, 6, 4)),
    st && new URLSearchParams(location.search).get("spawn") === "churchdoor" && nt && (x.set(nt.x, 0, nt.z),
    j = Math.atan2(zt[0] - x.x, zt[1] - x.z),
    ce = null,
    de.visible = !1,
    dt(new Z(Math.sin(j),0,Math.cos(j)), 22, 10, 6, 2)),
    st && new URLSearchParams(location.search).get("spawn") === "church" && nt && (x.set(nt.x, 0, nt.z),
    co("church", "National Christian Centre", "church", {
        x: nt.x,
        z: nt.z
    }, () => Qs())),
    st && new URLSearchParams(location.search).get("spawn") === "ncc") {
        let o = [mr[0] - zt[0], mr[1] - zt[1]]
          , a = Math.hypot(...o);
        x.set(zt[0] + o[0] / a * 120 + o[1] / a * 25, 0, zt[1] + o[1] / a * 120 - o[0] / a * 25),
        j = Math.atan2(zt[0] - x.x, zt[1] - x.z),
        ce = null,
        de.visible = !1,
        dt(new Z(Math.sin(j),0,Math.cos(j)), 40, 22, 30, 22)
    }
    Pa(100, "Welcome to Abuja"),
    as("ready to play"),
    window.__alStep?.("ready", Math.round(performance.now())),
    setTimeout( () => h(".load").classList.add("gone"), 350),
    setTimeout( () => h(".help").classList.add("gone"), 7e3),
    a1()
}
)().catch(e => {
    console.error(e),
    Pa(100, "Couldn't load the city. Refresh to try again.")
}
);
var uh = null;
function sx(e) {
    let t = [[0, 0]]
      , n = null;
    if (e.gate) {
        let {x: c, z: p, angle: f} = e.gate
          , b = Math.sin(f)
          , $ = Math.cos(f);
        b * -c + $ * -p < 0 && (b = -b,
        $ = -$),
        n = {
            x: c,
            z: p,
            angle: f,
            dir: [b, $]
        },
        t.push([c, p])
    }
    let o = [];
    for (let c of e.areas)
        if (c.k === "green") {
            let p = c.p.reduce( (b, $) => b + $[0], 0) / c.p.length
              , f = c.p.reduce( (b, $) => b + $[1], 0) / c.p.length;
            De(p, f) || o.push([p, f])
        }
    if (n) {
        let[c,p] = n.dir
          , f = p
          , b = -c;
        for (let[$,T] of [[90, 70], [140, -80], [40, -60]]) {
            let M = n.x + c * $ + f * T
              , _ = n.z + p * $ + b * T;
            !De(M, _) && !vn(M, _) && o.unshift([M, _])
        }
    }
    let a = ([c,p]) => Math.min(...t.map( ([f,b]) => Math.hypot(c - f, p - b)));
    o.sort( (c, p) => a(c) - a(p));
    let i = [[60, 120], [-120, 60], [150, -90], [-60, -160], [300, 40], [-250, 200], [520, -60], [80, 320]].filter( ([c,p]) => !De(c, p))
      , r = 1 / 0
      , s = -1 / 0
      , l = 1 / 0
      , u = -1 / 0;
    for (let c of e.roads)
        for (let[p,f] of c.p)
            r = Math.min(r, p),
            s = Math.max(s, p),
            l = Math.min(l, f),
            u = Math.max(u, f);
    let d = [];
    for (let c of o)
        d.every(p => Math.hypot(p[0] - c[0], p[1] - c[1]) > 250) && d.push(c);
    uh = Rp({
        scene: J,
        isFree: (c, p) => !De(c, p),
        grassSpots: d,
        gate: n,
        patrolSpots: i,
        fuse: Oe,
        bounds: {
            minx: r,
            maxx: s,
            minz: l,
            maxz: u
        }
    })
}
var gr = null
  , al = !1
  , w = "city"
  , me = null
  , Wt = null
  , gy = []
  , Ps = e => al ? e() : gy.push(e)
  , Mt = new vl
  , yy = e => new Z(e.x * .1,0,e.z * .1);
Mt.background = new jo("#1f2a24");
var Qh = new ju(16777215,9075302,1.35);
Mt.add(Qh);
var Pr = new Du(16777215,1.5);
Pr.position.set(6, 9, 7);
Pr.castShadow = !0;
Pr.shadow.mapSize.set(1024, 1024);
Object.assign(Pr.shadow.camera, {
    left: -9,
    right: 9,
    top: 9,
    bottom: -9,
    near: 1,
    far: 40
});
Mt.add(Pr);
var su = new G0(16766362,0,14,1.6);
su.position.set(0, 2.4, 0);
Mt.add(su);
var _t = {
    dist: [8, 320],
    polar: [.35, 1.35]
}
  , Kn = ([e,t]) => {
    let[n,o] = gr.origin;
    return [(t - o) * Math.cos(n * Math.PI / 180) * 111320, -(e - n) * 110574]
}
  , Ze = e => Re[e].name.split("\xB7")[1].trim()
  , F = null
  , Hn = () => w === "street" ? Oo : F?.type || m.player.home;
function aa(e=null) {
    if (!m)
        return;
    if (w === "cell")
        return g("You're locked up. Pay your bail or wait it out first.", 4e3);
    w === "venue" && un();
    for (let u of ["food-btn", "shop-btn", "hail", "club-btn", "along-btn", "trek", "go-home", "get-in", "walk-btn"])
        h("#" + u).hidden = !0;
    Gs = null,
    Ks = null,
    Xc = null,
    _c = !1,
    w === "street" && Kf(),
    w === "club" && Or(),
    P && OC(),
    sn && w0(),
    Ne && Jo(),
    oo && (et.cancelHail(oo),
    oo = null),
    rn && Js(),
    wa(),
    Br(),
    F = e,
    Wt = e?.type || m.player.home;
    let t = e ? e.meta || {
        level: 1,
        items: []
    } : Su()
      , n = Wt + "|" + t.level + "|" + t.items.join(",");
    (!me || me.key !== n) && (me && Mt.remove(me.group),
    me = Ur(Wt, t),
    me.type = Wt,
    me.key = n,
    Mt.add(me.group)),
    St = !1,
    w = "home",
    e || ln("home"),
    Ho && (Ho.visible = !1),
    Mt.add(le.group),
    Mt.add(de),
    de.visible = !1,
    ce = null,
    x.set(me.spawn[0], 0, me.spawn[1]),
    j = Math.PI * .75;
    let[o,a] = me.size
      , i = Math.max(o, a);
    X.minDistance = 3,
    X.maxDistance = i * 2.2,
    X.minPolarAngle = .45,
    X.maxPolarAngle = 1.2,
    X.minAzimuthAngle = .1,
    X.maxAzimuthAngle = Math.PI / 2 - .1;
    let r = yy(x)
      , s = Math.max(1, .8 / je.aspect);
    je.position.set(r.x + i * .75 * s, i * .85 * s, r.z + i * .95 * s),
    X.target.set(r.x, .8, r.z),
    Rc.copy(r),
    X.update();
    let l = Io === "night" || Io === "evening";
    me.setNight(l),
    su.intensity = l ? 16 : 0,
    Pr.intensity = l ? .25 : 1.5,
    Qh.intensity = l ? .6 : 1.35,
    h("#place").textContent = e ? `@${e.name}'s home \xB7 ${Ze(Wt)}` : `Home \xB7 ${Ze(Wt)}`,
    h("#place").hidden = !1,
    h("#leave-home").hidden = !1,
    h("#chat-btn").hidden = !1,
    h("#chat-input").blur(),
    k?.sendNow(),
    k?.joinHouse(e ? e.host : m.uid, Mt),
    e || k?.setHouseMeta(t.level, Iw(t)),
    !e && Fc && (Fc = !1,
    setTimeout(zu, 900)),
    Av(e ? e.meta?.items || [] : nb()),
    mb(e ? e.meta?.items || [] : t.items),
    h("#place").textContent = e ? `@${e.name}'s ${me.name.toLowerCase()} \xB7 ${Ze(Wt)}` : `${me.name} \xB7 ${Ze(Wt)}`,
    kr()
}
function Da(e, t, n, o) {
    w === "street" && Kf(),
    h("#power").hidden = !0,
    h("#steal-btn").hidden = !0,
    w = "city",
    F = null,
    k?.leaveHouse(),
    qn && (qn = !1,
    No.stop()),
    St = !1,
    J.add(le.group),
    J.add(de),
    de.visible = !1,
    ce = null,
    x.set(e, 0, t),
    X.minDistance = _t.dist[0],
    X.maxDistance = _t.dist[1],
    X.minPolarAngle = _t.polar[0],
    X.maxPolarAngle = _t.polar[1],
    X.minAzimuthAngle = -1 / 0,
    X.maxAzimuthAngle = 1 / 0;
    let a = new Z(n - e,0,o - t).normalize();
    j = Math.atan2(a.x, a.z),
    dt(a, 40, 13, 18, 9),
    h("#place").hidden = !0,
    h("#leave-home").hidden = !0,
    h("#chat-btn").hidden = !1,
    k?.sendNow()
}
function lx() {
    let e = "al-arrived-" + m.uid
      , t = !1;
    try {
        t = !!localStorage.getItem(e),
        localStorage.setItem(e, "1")
    } catch {}
    if (m.player.jail) {
        yk();
        return
    }
    if (!t) {
        Qc(gr),
        k?.sendNow(),
        lu(!0);
        return
    }
    let n = ux(600 * 1e3);
    if (n?.m === "visit")
        return cx(n);
    if (n?.m === "city" && gr) {
        x.set(n.x, 0, n.z),
        j = n.h || 0,
        ce = null,
        dt(new Z(Math.sin(j),0,Math.cos(j)), 22, 10, 8, 2),
        k?.sendNow();
        return
    }
    aa()
}
async function cx(e) {
    for (let t = 0; t < 60 && !k; t++)
        await new Promise(n => setTimeout(n, 250));
    if (k && Re[e.home] && await k.houseAllowed(e.host))
        return bl({
            host: e.host,
            name: e.name,
            home: e.home,
            back: !0
        });
    aa()
}
var wy = () => "al-spot-" + m?.uid;
function ux(e) {
    try {
        let t = JSON.parse(localStorage.getItem(wy()) || "null");
        return t && Date.now() - t.t < e ? t : null
    } catch {
        return null
    }
}
var gc = 0;
function by(e) {
    if (gc -= e,
    gc > 0 || !m || !al)
        return;
    gc = 3;
    let t = null;
    if (w === "home" && F ? t = {
        m: "visit",
        host: F.host,
        name: F.name,
        home: F.type
    } : w === "home" || w === "street" ? t = {
        m: "home"
    } : w === "club" && ue ? t = {
        m: "city",
        x: ue.x,
        z: ue.z,
        h: ue.h
    } : w === "venue" && ye ? t = {
        m: "city",
        x: ye.door.x,
        z: ye.door.z,
        h: 0
    } : w === "city" && (t = {
        m: "city",
        x: Math.round(x.x * 10) / 10,
        z: Math.round(x.z * 10) / 10,
        h: Math.round(j * 100) / 100
    }),
    t)
        try {
            localStorage.setItem(wy(), JSON.stringify({
                ...t,
                t: Date.now()
            }))
        } catch {}
}
var yr = {
    eat: {
        why: "Food keeps you going. City Gate Market is by the gate",
        go: () => ga()
    },
    chat: {
        why: "Everyone near you sees it",
        go: () => Wb()
    },
    job: {
        why: "The civil service or a player's business",
        go: () => sa()
    },
    work: {
        why: "2 minutes \xB7 the free staff bus takes you",
        go: () => {
            let e = il();
            e ? Po(e, !0) : sa()
        }
    },
    ride: {
        why: "The cheapest way around Abuja",
        go: () => Zf()
    },
    home: {
        why: "Tap My house on the bottom bar",
        go: () => pa()
    }
}
  , wr = () => m?.player.goals || {}
  , ef = () => Yt.find(e => !wr()[e.id]) || null
  , dh = () => "al-goal-tips-off-" + m?.uid
  , hh = () => {
    try {
        return !!localStorage.getItem(dh())
    } catch {
        return !1
    }
}
  , Sd = new Set;
async function ln(e) {
    let t = Yt.find(n => n.id === e);
    if (!(!m || !t || wr()[e] || Sd.has(e))) {
        Sd.add(e);
        try {
            let n = await $e(Te).currentUser.getIdToken()
              , o = await (await fetch("/api/perks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + n
                },
                body: JSON.stringify({
                    action: "goal",
                    id: e
                })
            })).json();
            if (!o.ok || (m.player.goals = {
                ...wr(),
                [e]: Date.now()
            },
            typeof o.money == "number" && (A = o.money,
            m.player.money = A,
            _e()),
            As = 0,
            !o.paid))
                return;
            let a = ef();
            setTimeout( () => g(a ? `Goal done: ${t.text} \xB7 +${y(o.paid)}. Next: ${a.text}` : `All first-day goals done \xB7 +${y(o.paid)}. You're a real Abuja person now!`, 5e3), 1500)
        } catch (n) {
            console.warn("goal", n)
        } finally {
            Sd.delete(e)
        }
    }
}
async function dx() {
    let e = m.player;
    e.food?.last && await ln("eat"),
    e.job && await ln("job"),
    e.workDay && await ln("work")
}
function hx() {
    let e = ef();
    return !e || hh() ? null : [`Goal ${Yt.indexOf(e) + 1} of ${Yt.length}: ${e.text}`, `${yr[e.id].why} \xB7 +${y(e.pay)} \xB7 tap here`, yr[e.id].go]
}
function Hc() {
    re();
    let e = wr()
      , t = Yt.filter(o => !e[o.id])
      , n = Yt.reduce( (o, a) => o + a.pay, 0);
    R("Your first days in Abuja", t.length ? `Each goal teaches you part of the game and pays you once. ${Yt.length - t.length} of ${Yt.length} done \xB7 ${y(n)} in all.` : "All done. You know your way around Abuja now!", [...Yt.map(o => {
        let a = !!e[o.id];
        return {
            text: (a ? "\u2713 " : "") + o.text,
            small: yr[o.id].why,
            right: a ? "Done" : "+" + y(o.pay),
            onClick: () => {
                E(),
                a || yr[o.id].go()
            }
        }
    }
    ), ...t.length ? [{
        text: hh() ? "Show the next goal on screen" : "Hide the goal tip from the screen",
        small: "Top left",
        right: "",
        onClick: () => {
            try {
                hh() ? localStorage.removeItem(dh()) : localStorage.setItem(dh(), "1")
            } catch {}
            As = 0,
            Hc()
        }
    }] : []])
}
function lu(e) {
    re();
    let t = e && ef();
    if (t)
        return R("Welcome to Abuja!", "You're at the City Gate. Start with your first-day goals: each one shows you part of the game and pays you cash. The next goal is always at the top left.", [{
            text: `Goal 1: ${t.text}`,
            small: yr[t.id].why,
            right: "+" + y(t.pay),
            main: !0,
            onClick: () => {
                E(),
                yr[t.id].go()
            }
        }, {
            text: "See all goals",
            small: `${Yt.length} goals \xB7 ${y(Yt.reduce( (n, o) => n + o.pay, 0))} in rewards`,
            right: "",
            onClick: () => {
                E(),
                Hc()
            }
        }, {
            text: "How to play",
            small: "Earn, eat, get around, your home",
            right: "",
            onClick: () => {
                E(),
                lu(!1)
            }
        }, {
            text: "Look around first",
            small: "Tap the ground to walk \xB7 drag to look \xB7 pinch to zoom",
            right: "",
            onClick: E
        }]);
    R(e ? "Welcome to Abuja!" : "How to play", "Live your life in Abuja with real players. Here's how it works:", [{
        text: "Earn money",
        small: "Earn money \u2192 Jobs. Get hired by a player's business and work 2-minute shifts, paid from their till. Or own one: Earn money \u2192 Business.",
        right: "Jobs",
        onClick: () => {
            E(),
            sa()
        }
    }, {
        text: "Eat",
        small: "Your food bar empties in about 8 hours. Hungry = slow, and you can't work.",
        right: "Food",
        onClick: () => {
            E(),
            ga()
        }
    }, {
        text: "Get around",
        small: "Walk (tap the ground), Along \u20A6200/km, or taxis and kekes run by players' companies (when a driver is on shift).",
        right: "Map",
        onClick: () => {
            E(),
            Ci()
        }
    }, {
        text: "Your home",
        small: `Rent is due every game month (1 real week). Your home is in ${m ? Ze(m.player.home) : "your district"}.`,
        right: "Home",
        onClick: () => {
            E(),
            pa()
        }
    }, {
        text: "Grow",
        small: "Save up for a car (from \u20A64.5M) or a home of your own (from \u20A61.5M).",
        right: "",
        onClick: E
    }, {
        text: "Have fun",
        small: "Chat with your area, message people, party at Club Zuma at night.",
        right: "",
        onClick: E
    }, ...m ? [{
        text: "Your first-day goals",
        small: `${Yt.filter(n => wr()[n.id]).length} of ${Yt.length} done \xB7 each pays you once`,
        right: "Goals",
        onClick: () => {
            E(),
            Hc()
        }
    }] : []])
}
var Ym = ""
  , Wm = 0
  , Ad = 0
  , Eo = null
  , fx = 0;
function px(e) {
    if (Ad -= e,
    Ad > 0 || !m || !k)
        return;
    Ad = 5;
    let n = {
        s: w === "home" ? F ? "visiting" : "home" : w === "club" ? "club" : w === "cell" ? "cell" : w === "street" ? "street" : "city",
        h: Nt() < 25,
        i: go(),
        w: Date.now() < Ar
    }
      , o = JSON.stringify(n);
    o === Ym && Date.now() - Wm < 6e4 || (Ym = o,
    Wm = Date.now(),
    k.setStatus(n))
}
var xy = [["online", "online now", "Online now"], ["city", "out in the city", "Out in the city"], ["home", "at home", "At home"], ["visiting", "linking up at someone's house", "Linking up at someone's house"], ["street", "outside on their street", "Outside on their street"], ["club", "partying at Club Zuma", "Partying at Club Zuma"], ["cell", "locked up", "Locked up in the police cell"], ["injured", "hurt or sick", "Injured or sick"], ["hungry", "hungry", "Hungry"], ["wanted", "wanted by police", "Wanted by the police"]];
async function ky() {
    if (m?.uid === Li)
        try {
            let e = await $e(Te).currentUser.getIdToken()
              , t = await fetch("/api/stats", {
                headers: {
                    Authorization: "Bearer " + e
                }
            });
            t.ok && (Eo = await t.json(),
            vy())
        } catch {}
}
function vy() {
    if (!Eo || m?.uid !== Li)
        return;
    let e = xy.filter( ([o]) => Eo[o] > 0);
    if (!e.length)
        return;
    let[t,n] = e[fx++ % e.length];
    h("#goals").hidden = !1,
    h("#goals").textContent = `${Eo[t].toLocaleString()} ${n}`
}
function br() {
    if (!Eo)
        return g("Counting\u2026 try again in a moment.");
    let e = Eo.usageYesterday || {}
      , t = Eo.usage2DaysAgo || {}
      , n = r => Object.keys({
        ...Eo.usage || {},
        ...e,
        ...t
    }).filter(s => r[s]).map(s => [s, Eo.usage?.[s] || 0]).sort( (s, l) => l[1] - s[1] || (e[l[0]] || 0) - (e[s[0]] || 0))
      , o = n(Wl).filter( ([r]) => !Vi[r])
      , a = n(Vi)
      , i = a.reduce( (r, [s,l]) => r + (s === "m_open" ? 0 : l), 0);
    R("Abuja right now", "What everyone is up to (updates every 30 seconds).", [{
        text: "Baseline",
        small: "Players each day, who comes back, first-day goals, errors",
        right: "Open",
        onClick: pn
    }, ...xy.map( ([r,,s]) => ({
        text: s,
        right: (Eo[r] || 0).toLocaleString(),
        onClick: () => {}
    })), {
        text: "Where people live",
        small: "Residents in each district \xB7 counted when you tap",
        right: "Count",
        onClick: mx
    }, {
        text: "Phone menu taps",
        small: a.length ? `What people tap in the phone menu \xB7 most tapped: ${a.filter( ([r]) => r !== "m_open").slice(0, 3).map( ([r]) => Vi[r]).join(", ") || "none yet"}` : "Nothing counted yet",
        right: i.toLocaleString(),
        onClick: () => R("Phone menu taps", "Today, most tapped first (signed-in players; sent once a minute, so the last minute isn't in yet). Yesterday and 2 days ago underneath.", a.map( ([r,s]) => ({
            text: Vi[r],
            small: `yesterday ${(e[r] || 0).toLocaleString()} \xB7 2 days ago ${(t[r] || 0).toLocaleString()}`,
            right: s.toLocaleString(),
            onClick: () => {}
        })), br)
    }, {
        text: "Today, people\u2026",
        small: o.length ? "Most popular first \xB7 yesterday and 2 days ago underneath (full days)" : "Nothing counted in the last 3 days",
        onClick: () => {}
    }, ...o.map( ([r,s]) => ({
        text: Wl[r],
        small: `yesterday ${(e[r] || 0).toLocaleString()} \xB7 2 days ago ${(t[r] || 0).toLocaleString()}`,
        right: s.toLocaleString(),
        onClick: () => {}
    }))])
}
async function mx() {
    R("Where people live", "Counting\u2026", [], br);
    let e;
    try {
        e = await Lr("residents")
    } catch {
        return g("Couldn't count. Try again.")
    }
    let t = Object.entries(e.residents || {}).sort( (i, r) => r[1] - i[1])
      , n = t.reduce( (i, [,r]) => i + r, 0)
      , o = e.history || []
      , a = o.find(i => i.day !== o[0]?.day) || null;
    R("Where people live", `${n.toLocaleString()} players have a home. Counted just now.`, [...t.map( ([i,r]) => {
        let s = a?.residents?.[i]
          , l = s == null ? "" : ` \xB7 ${r - s >= 0 ? "+" : ""}${(r - s).toLocaleString()} since ${Ba(a.day)}`;
        return {
            text: Ze(i),
            small: `${Re[i].name.split("\xB7")[0].trim()} \xB7 ${Math.round(100 * r / Math.max(1, n))}%${l}`,
            right: `${r.toLocaleString()} residents`,
            onClick: () => {}
        }
    }
    ), {
        head: !0,
        text: "Each day (saved at the start of the day)"
    }, ...o.length ? o.map(i => ({
        text: Ba(i.day),
        small: t.map( ([r]) => `${Ze(r)} ${(i.residents[r] || 0).toLocaleString()}`).join(" \xB7 "),
        right: Object.values(i.residents).reduce( (r, s) => r + s, 0).toLocaleString(),
        onClick: () => {}
    })) : [{
        text: "Saving starts today",
        small: "Each day's numbers are saved when the first player opens the game after midnight",
        onClick: () => {}
    }]], br)
}
async function Lr(e) {
    let t = await $e(Te).currentUser.getIdToken()
      , n = await fetch(`/api/stats?view=${e}`, {
        headers: {
            Authorization: "Bearer " + t
        }
    });
    if (!n.ok) {
        let o = await n.json().catch( () => ({}));
        throw new Error(o.error || `the server said ${n.status}`)
    }
    return n.json()
}
var Cn = (e, t) => t ? `${Math.round(100 * (e || 0) / t)}%` : "\u2013"
  , pe = e => (e || 0).toLocaleString()
  , Ba = e => new Date(e + "T12:00:00Z").toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: "UTC"
})
  , oc = (e, t) => new Date(Date.parse(e + "T12:00:00Z") + t * 864e5).toISOString().slice(0, 10)
  , xr = e => new Date(e + 36e5).toISOString().slice(11, 16)
  , Ee = () => {}
;
async function pn() {
    if (m?.uid !== Li)
        return;
    R("Baseline", "Counting\u2026", [], br);
    let e;
    try {
        e = await Lr("baseline")
    } catch {
        return g("Couldn't load the baseline. Try again.")
    }
    let[t,n] = e.days
      , o = t.day
      , a = u => u >= e.since
      , i = e.days.filter(u => u.day < o && u.signups && a(oc(u.day, 1))).map(u => {
        let d = u.cohort
          , c = oc(u.day, 7)
          , p = oc(u.day, 7) < o
          , f = c > o ? `day 7 on ${Ba(c)}` : a(c) ? `day 7 ${Cn(d.d7, u.signups)}` : "day 7 not counted";
        return {
            text: `Joined ${Ba(u.day)}`,
            small: `${pe(u.signups)} new \xB7 ${f} \xB7 within a week ${Cn(d.w, u.signups)}${p ? "" : " so far"}${u.day === oc(e.since, -1) ? " \xB7 counting started that day, so a bit low" : ""}`,
            right: `${Cn(d.d1, u.signups)} next day`,
            onClick: Ee
        }
    }
    )
      , r = e.days.filter(u => a(u.day))
      , s = r.reduce( (u, d) => u + (d.signups || 0), 0)
      , l = Yt.map( (u, d) => ({
        text: `${d + 1}. ${u.text}`,
        small: `${pe(r.reduce( (c, p) => c + (p.cohort[`g_${u.id}`] || 0), 0))} of ${pe(s)} new players`,
        right: Cn(r.reduce( (c, p) => c + (p.cohort[`g_${u.id}`] || 0), 0), s),
        onClick: Ee
    }));
    R("Baseline", `Counting players since ${Ba(e.since)}. Earlier days only have new accounts. Updated ${xr(e.at)}.`, [{
        head: !0,
        text: "Today"
    }, {
        text: "Players today",
        small: `${pe(t.new)} new \xB7 ${pe(t.back)} came back \xB7 yesterday ${pe(n.active)}`,
        right: pe(t.active),
        onClick: Ee
    }, {
        text: "New accounts",
        small: `yesterday ${pe(n.signups)}`,
        right: pe(t.signups),
        onClick: Ee
    }, {
        text: "Most online at once",
        small: `${t.peakAt ? `at ${xr(t.peakAt)} \xB7 ` : ""}yesterday ${pe(n.peak)}`,
        right: pe(t.peak),
        onClick: Ee
    }, {
        text: "Getting into the game",
        small: wx(t.funnel, n.funnel),
        right: Cn(Ua(t.funnel).ready, Ua(t.funnel).play),
        onClick: () => Ey(e)
    }, {
        text: "Errors",
        small: `yesterday ${pe(n.errors)} \xB7 tap to see what broke today`,
        right: pe(t.errors),
        onClick: () => tf(e)
    }, {
        text: "Payments",
        small: "A player says they paid and nothing came? Look them up by email",
        right: "Open",
        onClick: yc
    }, {
        head: !0,
        text: "Your best players"
    }, {
        text: "Loyal players",
        small: "Who keeps coming back: username, email, days played \xB7 message them or ask them a question",
        right: "Open",
        onClick: nf
    }, {
        text: "Answers to your questions",
        small: "What loyal players told you",
        right: "",
        onClick: Sy
    }, {
        head: !0,
        text: "All accounts"
    }, {
        text: "Accounts with a character",
        small: `${pe(e.total)} accounts made a username`,
        right: pe(e.withChar),
        onClick: Ee
    }, {
        text: "Played in the last 7 days",
        small: `last 30 days: ${pe(e.active30)} (counted since ${Ba(e.since)})`,
        right: pe(e.active7),
        onClick: Ee
    }, {
        text: "Who played before counting started?",
        small: "Reads every sign-in account: who opened the game lately, who ever came back",
        right: "Count",
        onClick: () => Ay(!1)
    }, {
        head: !0,
        text: "Last 14 days"
    }, ...e.days.map(u => ({
        text: Ba(u.day),
        small: a(u.day) ? `${pe(u.signups)} new accounts \xB7 ${pe(u.back)} came back \xB7 ${pe(u.peak)} most online \xB7 ${pe(u.errors)} errors` : `${pe(u.signups)} new accounts \xB7 before counting`,
        right: a(u.day) ? `${pe(u.active)} played` : "",
        onClick: Ee
    })), {
        head: !0,
        text: "Do new players come back?"
    }, ...i.length ? i : [{
        text: "Tomorrow",
        small: "The first number shows once today's new players have had a day to come back",
        onClick: Ee
    }], {
        head: !0,
        text: "First-day goals: how far new players get"
    }, ...s ? l : [{
        text: "No new players counted yet",
        onClick: Ee
    }], {
        head: !0,
        text: "Costs"
    }, {
        text: "Hosting and database bills",
        small: "Vercel \u2192 Usage, and Firebase console \u2192 Usage and billing",
        right: "",
        onClick: Ee
    }], br)
}
var gx = e => e.v ? e.v === Dc ? "\u26A0 still on the newest version" : "\u2713 only on older versions so far" : "version not known"
  , ar = e => !!e.fix && (e.last <= e.fix.at + 30 * 6e4 || !!e.v && e.v !== Dc)
  , Cy = e => e.fix ? ar(e) ? `\u2713 Fixed ${ho(e.fix.at)}${e.fix.note ? `: ${e.fix.note}` : ""}${e.last > e.fix.at + 30 * 6e4 ? " \xB7 still seen on players' older versions" : ""}` : "\u26A0 Came back after it was fixed (on the newest version)" : gx(e);
function tf(e) {
    let t = [...e.errors].sort( (o, a) => ar(o) - ar(a) || a.n - o.n)
      , n = t.filter(o => !ar(o)).length;
    R("Errors today", t.length ? `${n ? `${pe(n)} to look at` : "All fixed"}, most often first; fixed ones at the bottom. Tap one to see who got it, or to mark it fixed.` : "Nothing has broken today.", t.map(o => ({
        text: (ar(o) ? "\u2713 " : "") + o.msg,
        small: `${Cy(o)} \xB7 ${o.people ? `${pe(o.people)} signed-in player${o.people === 1 ? "" : "s"}` : "nobody signed in"} \xB7 ${o.dev} \xB7 ${o.where} \xB7 last at ${xr(o.last)}`,
        right: `${pe(o.n)}\xD7`,
        onClick: () => Ty(e, o)
    })), pn)
}
async function qm(e, t, n) {
    try {
        let o = await My({
            action: "fixError",
            id: t.id,
            fixed: n
        });
        t.fix = o.fix,
        g(n ? "Marked fixed." : "Marked not fixed.")
    } catch (o) {
        return g(o.message)
    }
    tf(e)
}
function yc() {
    bu("Payments", "The email they sign in with. Shows every payment they started, checks the unfinished ones with Fincra again, and delivers any top-up that was paid but never arrived.", "player@email.com", 120, "Look up", "", async e => {
        R("Payments", "Checking with Fincra\u2026", [], pn);
        let t;
        try {
            t = await Lr("payments&email=" + encodeURIComponent(e.trim()))
        } catch (i) {
            return R("Payments", `Couldn't look that up: ${i.message}`, [{
                text: "Try again",
                right: "",
                onClick: yc
            }], pn)
        }
        if (t.error)
            return R("Payments", t.error, [{
                text: "Try another email",
                right: "",
                onClick: yc
            }], pn);
        let n = t.user
          , o = i => i.note ? `\u2713 Delivered now (${i.note}): it was paid but had never arrived` : i.status === "credited" || i.status === "used" || i.status === "active" ? "\u2713 Delivered" : i.status === "review" ? "\u2713 Paid \xB7 the advert is waiting for your review" : i.status === "paid" ? "\u2713 Paid \xB7 not used yet (it's saved for them)" : i.status === "rejected" ? "Advert rejected" : i.status === "failed" ? "\u2717 Didn't go through \xB7 no money taken" : i.status === "underpaid" ? "\u26A0 Paid less than the price" : i.fincra === "paid" ? "\u2713 Paid \xB7 finishes the next time they open the game" : i.fincra === "failed" ? "\u2717 Didn't go through \xB7 no money taken" : i.fincra === "underpaid" ? "\u26A0 Paid less than the price" : i.fincra === "pending" ? "Not paid \xB7 they opened the checkout but Fincra has no payment" : `Unknown (${i.fincra || i.status})`
          , a = i => i ? `${ho(i)} ${xr(i)}` : "?";
        R(n.username ? `@${n.username}` : n.email, `${n.email} \xB7 wallet ${n.money == null ? "?" : y(n.money)}`, [{
            head: !0,
            text: t.payments.length ? `Payments (${t.payments.length}), newest first` : "Payments: they haven't started any"
        }, ...t.payments.map(i => ({
            text: i.what,
            small: `${y(i.amount)} real \xB7 ${a(i.created)} \xB7 ${o(i)}`,
            right: "",
            onClick: () => R(i.what, `${o(i)}. Fincra reference: ${i.reference || "?"} (search it in your Fincra dashboard).`, [{
                text: "Copy the reference",
                small: i.reference,
                right: "Copy",
                onClick: async () => {
                    try {
                        await navigator.clipboard.writeText(i.reference),
                        g("Copied.")
                    } catch {
                        g(i.reference, 6e3)
                    }
                }
            }, ...n.username ? [{
                text: `Message @${n.username}`,
                small: "Tell them what happened",
                right: "",
                onClick: () => {
                    E(),
                    ba(n.uid, n.username)
                }
            }] : []], yc)
        })), {
            head: !0,
            text: (t.wallet || []).length ? `Wallet: last ${t.wallet.length} transactions, newest first` : "Wallet: no transactions yet"
        }, ...(t.wallet || []).map(i => ({
            text: i.label || i.reason || "Transaction",
            small: `${a(i.at)}${i.reason ? ` \xB7 ${i.reason}` : ""}${i.balance != null ? ` \xB7 balance after ${y(i.balance)}` : ""}`,
            right: `${i.amount >= 0 ? "+" : "\u2212"}${y(Math.abs(i.amount))}`,
            onClick: Ee
        }))], pn)
    }
    , pn)
}
var wc = [["create", "Opened the create page"], ["c_signin", "Saw the sign-in screen"], ["c_name", "Signed in \xB7 choosing a username"], ["c_birth", "Birth lottery"], ["c_look", "Choosing their look"], ["c_personality", "Personality"], ["c_dream", "Dream"], ["c_home", "Choosing a home"], ["made", "Made a character"]];
function Ua(e) {
    let t = {
        play: 0,
        ready: 0,
        ms: 0,
        no3d: 0,
        nomap: 0,
        create: 0,
        made: 0,
        ...Object.fromEntries(wc.map( ([n]) => [n, 0]))
    };
    for (let n of Object.values(e || {}))
        for (let o in t)
            t[o] += n[o] || 0;
    return t
}
var fh = e => e.ready && e.ms ? `${(e.ms / e.ready / 1e3).toFixed(1)} s to load` : "";
function yx(e) {
    let[t,n] = e.days
      , o = Ua(t.funnel)
      , a = Ua(n.funnel)
      , i = wc.slice(1, -1).some( ([s]) => o[s])
      , r = s => wc.map( ([l,u], d) => {
        let c = d ? s[wc[d - 1][0]] : 0
          , p = d && c > s[l] ? c - s[l] : 0;
        return {
            text: `${d + 1}. ${u}`,
            small: d ? `${p ? `${pe(p)} stopped here (${Cn(p, c)} of the step before)` : "nobody lost"}` : "everyone who opened it",
            right: pe(s[l]),
            onClick: Ee
        }
    }
    );
    R("Making a character", i ? `Each visit (one per browser tab) counted at every step it reached. Look for the biggest "stopped here": that's the step to fix. (People who already have a character skip steps.)` : "Step counting starts with this update: the steps fill in from the next visits.", [{
        head: !0,
        text: "Today"
    }, ...r(o), {
        head: !0,
        text: "Yesterday"
    }, ...r(a)], () => Ey(e))
}
var ph = e => Math.max(0, (e.play || 0) - (e.ready || 0) - (e.no3d || 0) - (e.nomap || 0));
function wx(e, t) {
    let n = Ua(e)
      , o = Ua(t);
    return !n.play && !o.play ? "Counting starts with the next visit" : `${pe(n.play)} opened \xB7 ${pe(n.ready)} got in \xB7 ${pe(ph(n))} never got in${fh(n) ? ` \xB7 ${fh(n)}` : ""} \xB7 yesterday ${Cn(o.ready, o.play)} got in`
}
function Ey(e) {
    let[t,n] = e.days
      , o = r => Object.entries(r || {}).sort( (s, l) => (l[1].play || 0) - (s[1].play || 0)).map( ([s,l]) => ({
        text: s,
        right: Cn(l.ready, l.play),
        onClick: Ee,
        small: [`${pe(l.play)} opened`, `${pe(l.ready)} got in`, ph(l) && `${pe(ph(l))} never got in`, l.no3d && `${pe(l.no3d)} no 3D`, l.nomap && `${pe(l.nomap)} map didn't load`, fh(l), l.create && `create page: ${pe(l.create)} opened, ${pe(l.made || 0)} made a character`].filter(Boolean).join(" \xB7 ")
    }))
      , a = Ua(t.funnel)
      , i = Ua(n.funnel);
    R("Getting into the game", 'Each visit (one per browser tab) on the way in: opened the game \u2192 got into the city. "Never got in" = left on the loading or welcome screen without a known problem. Phones first, by visits.', [{
        head: !0,
        text: `Today \xB7 ${Cn(a.ready, a.play)} got in`
    }, {
        text: "Create a character",
        small: `${pe(a.create)} opened the create page \xB7 ${pe(a.made)} made a character \xB7 yesterday ${pe(i.create)} \u2192 ${pe(i.made)} \xB7 tap for each step`,
        right: Cn(a.made, a.create),
        onClick: () => yx(e)
    }, ...o(t.funnel).length ? o(t.funnel) : [{
        text: "Nothing counted yet today",
        onClick: Ee
    }], {
        head: !0,
        text: `Yesterday \xB7 ${Cn(i.ready, i.play)} got in`
    }, ...o(n.funnel).length ? o(n.funnel) : [{
        text: "Not counted yesterday (counting started 11 Oct)",
        onClick: Ee
    }]], pn)
}
function Ty(e, t) {
    let n = () => tf(e);
    R(t.msg, `${Cy(t)}. ${t.who.length ? `${pe(t.people)} player${t.people === 1 ? "" : "s"} got this${t.people > t.who.length ? ` (the latest ${t.who.length} shown)` : ""}. Tap one to contact them.` : "Nobody was signed in when it happened (it broke before or during sign-in), so there's no one to contact."}`, [ar(t) ? {
        text: "Not fixed after all",
        small: "Put it back on the list to look at",
        right: "",
        onClick: () => qm(e, t, !1)
    } : {
        text: "Mark as fixed",
        small: t.fix ? "It came back: mark it fixed again once you've fixed it" : "Moves it to the bottom; it shows again if it happens after now",
        right: "\u2713",
        onClick: () => qm(e, t, !0)
    }, ...t.who.map(o => ({
        text: o.username ? "@" + o.username : "(no username yet)",
        small: `${o.email || "no email"} \xB7 ${o.dev} \xB7 ${pe(o.n)}\xD7 \xB7 last at ${xr(o.last)}`,
        right: "Contact",
        onClick: () => R(o.username ? "@" + o.username : o.email || "Player", `Got "${t.msg}" ${pe(o.n)}\xD7 today on ${o.dev}.`, [...o.username ? [{
            text: `Message @${o.username} in the game`,
            small: "They see it in their Messages",
            right: "",
            onClick: () => {
                E(),
                ba(o.uid, o.username)
            }
        }] : [], ...o.email ? [{
            text: "Copy their email",
            small: o.email,
            right: "Copy",
            onClick: async () => {
                try {
                    await navigator.clipboard.writeText(o.email),
                    g("Email copied.")
                } catch {
                    g(o.email, 6e3)
                }
            }
        }] : []], () => Ty(e, t))
    }))], n)
}
async function My(e) {
    let t = await $e(Te).currentUser.getIdToken()
      , n = await fetch("/api/stats", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + t
        },
        body: JSON.stringify(e)
    })
      , o = await n.json().catch( () => ({}));
    if (!n.ok || o.error)
        throw new Error(o.error || "Couldn't send. Try again.");
    return o
}
var ho = e => e ? new Date(e + 36e5).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    timeZone: "UTC"
}) : "?"
  , mh = e => {
    let t = Math.floor((Date.now() - e) / 864e5);
    return t <= 0 ? "today" : t === 1 ? "yesterday" : `${t} days ago`
}
  , Rd = null;
async function nf() {
    R("Loyal players", "Finding your best players\u2026 (this can take a few seconds)", [], pn);
    try {
        Rd = await Lr("loyal")
    } catch {
        return g("Couldn't load. Try again.")
    }
    let {most: e, longtime: t} = Rd
      , n = (o, a) => ({
        text: o.username ? "@" + o.username : "(no username)",
        small: `${o.email || "no email"} \xB7 ${a}`,
        right: "Contact",
        onClick: () => bx(o)
    });
    R("Loyal players", "Players who keep coming back. Tap one to message them, copy their email or ask them a question.", [{
        text: "Ask them all a question",
        small: `It pops up the next time they open the game \xB7 ${new Set([...e, ...t].map(o => o.uid)).size} players`,
        right: "Ask",
        onClick: () => $y([...e, ...t], "your loyal players")
    }, {
        head: !0,
        text: `Played the most days (since ${Ba(Rd.since)})`
    }, ...e.length ? e.map(o => n(o, `${o.days} days played \xB7 last ${mh(o.last)} \xB7 joined ${ho(o.made)}`)) : [{
        text: "Nobody yet",
        small: "Shows players who've played on 2 or more days. It fills up as the days go by.",
        onClick: Ee
    }], {
        head: !0,
        text: "Joined long ago and still playing"
    }, ...t.length ? t.map(o => n(o, `joined ${ho(o.made)} \xB7 played ${mh(o.last)}`)) : [{
        text: "Nobody yet",
        onClick: Ee
    }]], pn)
}
function bx(e) {
    R(e.username ? "@" + e.username : e.email || "Player", [e.email, e.days ? `${e.days} days played` : "", `joined ${ho(e.made)}`, `last played ${mh(e.last)}`, `${y(e.money ?? 0)} in the bank`].filter(Boolean).join(" \xB7 "), [...e.username ? [{
        text: `Message @${e.username} in the game`,
        small: "They see it in their Messages",
        right: "",
        onClick: () => {
            E(),
            ba(e.uid, e.username)
        }
    }] : [], ...e.email ? [{
        text: "Copy their email",
        small: e.email,
        right: "Copy",
        onClick: async () => {
            try {
                await navigator.clipboard.writeText(e.email),
                g("Email copied.")
            } catch {
                g(e.email, 6e3)
            }
        }
    }] : [], {
        text: "Ask them a question",
        small: "Pops up the next time they open the game",
        right: "Ask",
        onClick: () => $y([e], e.username ? "@" + e.username : "them")
    }], nf)
}
function $y(e, t) {
    let n = [...new Set(e.map(o => o.uid))];
    bu(`Ask ${t}`, `${n.length} player${n.length === 1 ? "" : "s"}. It pops up the next time they open the game, once. Read the answers in Baseline \u2192 Answers.`, "e.g. What would make you play more every day?", 300, "Send question", "", async o => {
        if (o.trim().length < 5)
            return g("Write your question first.");
        try {
            let a = await My({
                action: "ask",
                q: o,
                uids: n
            });
            E(),
            g(`Question sent to ${a.sent} player${a.sent === 1 ? "" : "s"}.`, 4e3)
        } catch (a) {
            g(a.message, 4e3)
        }
    }
    , nf)
}
async function Sy() {
    R("Answers", "Loading\u2026", [], pn);
    let e;
    try {
        e = await Lr("answers")
    } catch {
        return g("Couldn't load. Try again.")
    }
    R("Answers", e.asks.length ? "Your last questions, newest first. Tap one to read the answers." : "You haven't asked anything yet. Go to Loyal players \u2192 Ask.", e.asks.map(t => ({
        text: t.q,
        small: `${ho(t.at)} \xB7 asked ${t.to} \xB7 ${t.answered || 0} answered \xB7 ${t.skipped || 0} skipped`,
        right: `${t.answered || 0}`,
        onClick: () => R(t.q, t.answers.length ? `${t.answers.length} answers. Tap one to message them.` : "No answers yet. They'll see it the next time they open the game.", t.answers.map(n => ({
            text: n.text,
            small: `@${n.username} \xB7 ${ho(n.at)}`,
            right: "",
            onClick: () => {
                n.username && (E(),
                ba(n.uid, n.username))
            }
        })), Sy)
    })), pn)
}
async function Ay(e) {
    R("All accounts", "Reading every account\u2026 this takes a few seconds.", [], pn);
    let t;
    try {
        t = await Lr(e ? "census&force=1" : "census")
    } catch {
        return g("Couldn't count the accounts. Try again.")
    }
    R("All accounts", `Every sign-in account. "Opened the game" means their sign-in was last used then. Counted at ${new Date(t.at + 36e5).toISOString().slice(0, 16).replace("T", " ")}.`, [{
        text: "Accounts",
        small: "Includes a few who never finished their character",
        right: pe(t.accounts),
        onClick: Ee
    }, {
        text: "Opened the game in the last 24 hours",
        right: pe(t.day),
        onClick: Ee
    }, {
        text: "\u2026 in the last 7 days",
        right: pe(t.week),
        onClick: Ee
    }, {
        text: "\u2026 in the last 30 days",
        right: pe(t.month),
        onClick: Ee
    }, {
        text: "Ever came back after their first day",
        small: `${Cn(t.cameBack, t.accounts)} of all accounts`,
        right: pe(t.cameBack),
        onClick: Ee
    }, {
        text: "Joined in the last 30 days",
        small: `${pe(t.new30Back)} of them came back after their first day (${Cn(t.new30Back, t.new30)})`,
        right: pe(t.new30),
        onClick: Ee
    }, {
        text: "Count again",
        small: "Kept for 6 hours otherwise",
        right: "",
        onClick: () => Ay(!0)
    }], pn)
}
ky();
setInterval(ky, 3e4);
setInterval(vy, 4e3);
h("#goals").addEventListener("click", br);
var xx = (e, t) => {
    let[n,o] = Kn(Re[m.player.home].at);
    return Math.hypot(n - e, o - t) * 1.3
}
  , Ry = {
    taxi: {
        name: "Taxi",
        get small() {
            let e = zi("taxi").length
              , t = ia("taxi");
            return t ? `${e > 1 ? `${e} companies \xB7 from` : t.name + " \xB7"} \u20A6${t.menu.km}/km` : "No taxis running"
        },
        fare: e => {
            let t = ia("taxi");
            return t ? Ti(t, e) : 0
        }
        ,
        reason: "taxi",
        ms: 1800,
        verb: "Riding a taxi"
    },
    walk: {
        name: "Walk",
        small: "Free \xB7 slow",
        fare: () => 0,
        reason: null,
        ms: 4e3,
        verb: "Walking"
    }
}
  , of = () => Object.entries(Ry).filter( ([e]) => e !== "taxi" || ia("taxi"));
async function Hy(e, t, n, o) {
    if (e.reason !== "taxi")
        return ol(t, e.reason, n);
    if (!zi("taxi").length)
        return uf("taxi"),
        !1;
    let a = await lf("taxi", o);
    return a ? cf(a, o, "taxi", `${n} \xB7 ${a.name}`) : !1
}
async function pa() {
    if (w === "venue" && un(),
    re(),
    !m)
        return ne("have a home");
    if (w === "home" && !F)
        return g("You're already home.");
    if (w === "street" && Oo === m.player.home)
        return Xf();
    if (w === "cell")
        return g("You're locked up. Wait it out or pay bail.");
    if (!mo())
        return g("Finish your taxi ride first.");
    let[e,t] = F || w === "street" ? Kn(Re[Hn()].at) : [x.x, x.z]
      , n = xx(e, t)
      , o = da()
      , a = Ze(m.player.home);
    R(`Go home to ${a}`, `${fa(n)} km by road. You have ${y(A)}.`, [...o ? [{
        text: "Drive home \xB7 free",
        main: !0,
        onClick: async () => {
            E(),
            await Fe(`Driving home to ${a}\u2026`),
            aa()
        }
    }] : [], ...fv(a), ...of().map( ([,i]) => {
        let r = xd(H, `homeRides_${m.player.home}`, Q())
          , s = r ? 0 : i.fare(n);
        return {
            text: i.name,
            small: i.small,
            right: y(s),
            disabled: s > A,
            onClick: async () => {
                if (E(),
                r && i.reason === "taxi") {
                    let l = ia("taxi");
                    l && wu({
                        kind: "homeRides",
                        bid: l.id,
                        full: Ti(l, n)
                    })
                }
                (i.reason === "taxi" ? !r : s > 0) && !await Hy(i, s, `${i.name} home to ${a}`, n) || (await Fe(`${i.verb} home to ${a}\u2026`, i.ms),
                aa())
            }
        }
    }
    )])
}
function Nr() {
    let e = Ze(Hn());
    R(w === "street" ? "Go into town" : "Going out", w === "street" ? `From ${e} into the city. You have ${y(A)}.` : `Step outside to see your neighbours, or head into town. You have ${y(A)}.`, [...Kw(), ...w === "home" ? [{
        text: "Step outside",
        small: `Your street in ${e} \xB7 meet your neighbours`,
        right: "Free",
        onClick: () => {
            E(),
            Jf()
        }
    }] : [], ...da() ? [{
        text: "Drive into town",
        small: "Your car \xB7 free",
        right: "",
        onClick: () => ly(null)
    }] : [], ...of().map( ([t,n]) => ({
        text: `${n.name} into town`,
        small: n.small,
        right: "",
        onClick: () => ly(t)
    }))])
}
function Fe(e, t=1800) {
    let n = h("#fade");
    return n.textContent = e,
    n.hidden = !1,
    n.classList.add("on"),
    new Promise(o => setTimeout( () => {
        n.classList.remove("on"),
        setTimeout( () => {
            n.hidden = !0,
            o()
        }
        , 400),
        o()
    }
    , t))
}
function R(e, t, n, o, a) {
    if (ea) {
        let r = ea;
        ea = null,
        r(null)
    }
    h("#act-title").textContent = e,
    h("#act-sub").textContent = t,
    h("#act-back").hidden = !o,
    h("#act-back").onclick = o ? () => o() : null;
    let i = h("#act-search");
    i.hidden = !a,
    i.value = "",
    i.oninput = null,
    a && (i.placeholder = a.placeholder || "Search",
    i.oninput = () => {
        clearTimeout(i.t),
        i.t = setTimeout( () => {
            let r = i.value.trim();
            Um(r ? a.find(r) : n, r && a.none)
        }
        , 150)
    }
    ),
    Um(n),
    h("#act-sheet").hidden = !1
}
function Um(e, t) {
    let n = h("#act-list");
    if (n.innerHTML = "",
    !e.length && t) {
        let o = document.createElement("p");
        o.className = "sheet-sub",
        o.textContent = t,
        n.appendChild(o)
    }
    for (let o of e) {
        if (o.head) {
            let i = document.createElement("div");
            i.className = "sheet-label",
            i.textContent = o.text,
            n.appendChild(i);
            continue
        }
        if (o.tiles) {
            let i = document.createElement("div");
            i.className = "cat-grid";
            for (let r of o.tiles) {
                let s = document.createElement("button");
                s.type = "button",
                s.className = "cat-tile",
                s.onclick = r.onClick,
                s.innerHTML = `<span class="ic">${xe(r.icon, 22)}</span><b></b><small></small>`,
                s.querySelector("b").textContent = r.text,
                s.querySelector("small").textContent = r.small || "",
                i.appendChild(s)
            }
            n.appendChild(i);
            continue
        }
        let a = document.createElement("button");
        if (a.type = "button",
        a.className = o.main ? "w-main act-btn" : "dest",
        a.disabled = !!o.disabled,
        o.main)
            a.textContent = o.text;
        else {
            if (a.innerHTML = '<span><b></b><small></small></span><span class="fare"></span>',
            a.querySelector("b").textContent = o.text,
            o.tag) {
                let i = document.createElement("span");
                i.className = "job-tag" + (o.tagCls ? " " + o.tagCls : ""),
                i.textContent = o.tag,
                a.querySelector("b").prepend(i)
            }
            a.querySelector("small").textContent = o.small || (o.disabled ? "not enough money" : ""),
            a.querySelector(".fare").textContent = o.right || ""
        }
        if (o.neg && a.querySelector(".fare")?.classList.add("neg"),
        o.btn) {
            let i = a.querySelector(".fare");
            i.textContent = o.btn,
            i.classList.add("go-btn"),
            i.setAttribute("role", "button"),
            i.onclick = r => {
                r.stopPropagation(),
                o.onBtn()
            }
        }
        if (o.swatch) {
            let i = document.createElement("span");
            i.className = "swatch",
            i.style.background = o.swatch,
            a.prepend(i),
            a.style.justifyContent = "flex-start",
            a.querySelector(".fare").style.marginLeft = "auto"
        }
        a.onclick = o.onClick,
        n.appendChild(a)
    }
}
function E() {
    if (h("#act-sheet").hidden = !0,
    ea) {
        let e = ea;
        ea = null,
        e(null)
    }
}
function af() {
    let e = m?.player;
    if (!e || !e.rentStart || e.owned)
        return null;
    let n = (e.rentStart.toMillis ? e.rentStart.toMillis() : +e.rentStart) + (e.paidWeeks || 0) * Wu
      , o = Date.now()
      , a = o > n ? Math.ceil((o - n) / Wu) : 0;
    return {
        paidUntil: n,
        owedMonths: a,
        monthly: Gi(e.home),
        yearly: Re[e.home].rentYear
    }
}
async function kx() {
    let e = m.player;
    if (!e.rentStart)
        try {
            await mn(ee(W, "players", m.uid), {
                rentStart: ie(),
                paidWeeks: 1,
                updatedAt: ie()
            });
            let t = await Xn(ee(W, "players", m.uid));
            Object.assign(e, t.data())
        } catch (t) {
            console.warn("rent start", t.code || t)
        }
    kr(),
    setInterval(kr, 6e4)
}
function kr() {
    let e = F ? null : af()
      , t = h("#rent-chip");
    if (e?.owedMonths && Iy() && Cx(e),
    !e || !e.owedMonths) {
        t.hidden = !0;
        return
    }
    t.textContent = `Rent overdue \xB7 ${y(e.owedMonths * e.monthly)}`,
    t.hidden = !1
}
var zy = () => "al-autorent-" + m?.uid;
function Iy() {
    try {
        return localStorage.getItem(zy()) !== "off"
    } catch {
        return !0
    }
}
function vx(e) {
    try {
        localStorage.setItem(zy(), e ? "on" : "off")
    } catch {}
}
var Hd = !1
  , Vm = 0;
async function Cx(e) {
    if (Hd || !m || w === "cell")
        return;
    let t = Math.min(12, e.owedMonths, Math.floor(A / e.monthly));
    if (t < 1) {
        Date.now() - Vm > 30 * 6e4 && (Vm = Date.now(),
        g(`Rent due: ${y(e.monthly)}, but your wallet is short. It'll pay itself when you have the money.`, 5e3));
        return
    }
    Hd = !0;
    try {
        await Py(t, !0)
    } finally {
        Hd = !1
    }
}
function cu() {
    if (re(),
    !m)
        return ne("rent a home");
    if (m.player.owned)
        return g(`You own your ${Re[m.player.home].name}. No rent to pay.`, 3500);
    let e = af();
    if (!e)
        return g("Loading your rent\u2026");
    let t = new Date(e.paidUntil).toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short"
    })
      , n = e.owedMonths ? `Overdue: ${e.owedMonths} month${e.owedMonths > 1 ? "s" : ""} (${y(e.owedMonths * e.monthly)}).` : `Paid until ${t}.`
      , o = (l, u) => ({
        text: u,
        right: y(l * e.monthly),
        disabled: l * e.monthly > A,
        small: l * e.monthly > A ? "not enough money" : "",
        onClick: () => Py(l)
    })
      , a = [];
    e.owedMonths && a.push(o(e.owedMonths, `Pay what you owe (${e.owedMonths} month${e.owedMonths > 1 ? "s" : ""})`)),
    a.push(o(1, "Pay 1 month"), o(12, "Pay 1 year (12 months)"));
    let i = Iy();
    a.unshift({
        text: `Auto-pay rent: ${i ? "ON" : "OFF"}`,
        small: i ? "Paid from your wallet when it's due" : "Turn on so you never fall behind",
        right: i ? "Turn off" : "Turn on",
        onClick: () => {
            vx(!i),
            g(i ? "Auto-pay is off. Pay your rent here when it's due." : "Auto-pay is on. Your rent pays itself when it's due."),
            cu(),
            kr()
        }
    });
    let r = He.find(l => l.id === Xu(m.player.home))
      , s = r ? ` Your landlord is @${r.ownerName} (${r.name}).` : "";
    R(`Rent \xB7 ${Re[m.player.home].name}`, `${y(e.monthly)} a month or ${y(e.yearly)} a year. 1 game month = 1 real week. ${n}${s}`, a)
}
async function Py(e, t) {
    let n = af();
    if (!n)
        return;
    let o = e * n.monthly
      , a = m.player;
    if (o > A)
        return g("Not enough money.");
    t || E();
    let i = A;
    A -= o,
    _e();
    try {
        let r = await An(Xu(a.home))
          , s = Xt(W)
          , l = (a.paidWeeks || 0) + e;
        if (r) {
            let d = Zu(o, r.taxBp || ko);
            s.update(ee(W, "businesses", r.id), {
                till: Nn(o - d),
                revenue: Nn(o),
                sales: Nn(1),
                taxPaid: Nn(d),
                lastSale: {
                    by: m.uid,
                    at: ie(),
                    amt: o,
                    item: "rent",
                    tax: d
                }
            }),
            s.update(ee(W, "players", m.uid), {
                money: A,
                paidWeeks: l,
                lastPay: {
                    b: r.id,
                    at: ie()
                },
                updatedAt: ie()
            })
        } else
            s.update(ee(W, "players", m.uid), {
                money: A,
                paidWeeks: l,
                updatedAt: ie()
            });
        s.set(ee(mt(W, "players", m.uid, "transactions")), {
            amount: -o,
            reason: "rent",
            label: `Rent \xB7 ${e} month${e > 1 ? "s" : ""}${r ? ` \xB7 ${r.name}` : ""}`.slice(0, 60),
            balance: A,
            createdAt: ie()
        }),
        await s.commit(),
        a.money = A,
        a.paidWeeks = l;
        let u = `${e} month${e > 1 ? "s" : ""}`;
        g(t ? `Rent auto-paid: ${y(o)} (${u})${r ? ` to @${r.ownerName}` : ""}. Turn off in Phone \u2192 Home \u2192 Rent.` : r ? `Rent paid: ${y(o)} to @${r.ownerName} (${r.name}).` : `Rent paid: ${y(o)}. Thank you!`, t ? 5e3 : 2600),
        kr()
    } catch (r) {
        console.warn("rent", r.code || r),
        A = i,
        _e(),
        t || g("Couldn't pay rent. Check your connection.")
    }
}
h("#leave-home").addEventListener("click", Nr);
function Qo(e, t) {
    for (let n = 6; n < 60; n += 4)
        for (let o = 0; o < Math.PI * 2; o += .4) {
            let a = e + Math.cos(o) * n
              , i = t + Math.sin(o) * n;
            if (!De(a, i))
                return [a, i]
        }
    return [e, t]
}
function rf(e, t, n, o) {
    w === "venue" && un();
    let[a,i] = w === "home" || w === "street" ? Kn(Re[Hn()].at) : [x.x, x.z]
      , r = null;
    if (w === "city" && U) {
        let c = U.nearest(e, t)
          , p = U.nearest(x.x, x.z);
        if (c >= 0 && p >= 0 && Math.hypot(U.nodes[c][0] - e, U.nodes[c][1] - t) < 300) {
            let f = gn(U, p, c);
            f && f.length > 1 && (r = {
                path: f
            })
        }
    }
    let s = ia("taxi")
      , l = r ? Fo(r.path) : Math.hypot(e - a, t - i) * 1.3
      , u = s ? Ti(s, l) : 0
      , d = da();
    R(d ? `Go to ${n}` : `Taxi to ${n}`, d ? `Drive your ${wl(d)} there for free${s ? ", or take a taxi" : ""}.` : s ? `${s.name} \xB7 fare \u20A6${u.toLocaleString()}. You have ${y(A)}.` : "No taxis are running right now. Walk it, or take Along.", [...d ? [{
        text: "Drive there \xB7 free",
        main: !0,
        onClick: async () => {
            E(),
            await Fe(`Driving to ${n}\u2026`);
            let c = U.nearest(e, t)
              , [p,f] = c >= 0 && Math.hypot(U.nodes[c][0] - e, U.nodes[c][1] - t) < 60 ? U.nodes[c] : Qo(e, t);
            Da(p, f, e, t),
            _r(d, !0),
            g(`Welcome to ${n}. Your car is parked here.`),
            o?.()
        }
    }] : [], ...s ? [{
        text: d ? "Take a taxi" : r ? `Call a taxi \xB7 \u20A6${u.toLocaleString()}` : `Pay \u20A6${u.toLocaleString()} and go`,
        main: !d,
        right: d ? "\u20A6" + u.toLocaleString() : "",
        disabled: u > A,
        onClick: async () => {
            if (E(),
            r)
                return P?.driving && Rn(),
                Bu("taxi", {
                    name: n,
                    x: e,
                    z: t,
                    then: o
                });
            let c = await lf("taxi", l);
            if (!c || !await cf(c, l, "taxi", `Taxi to ${n} \xB7 ${c.name}`))
                return;
            P?.driving && Rn(),
            await Fe(`Riding to ${n}\u2026`);
            let[p,f] = Qo(e, t);
            Da(p, f, e, t),
            g(`Welcome to ${n}`),
            o?.()
        }
    }] : [], {
        text: "Walk (trek)",
        small: w === "home" || w === "street" ? "Free \xB7 slow" : "Free \xB7 about 3\xD7 walking pace",
        right: "Free",
        onClick: async () => {
            if (E(),
            w === "city") {
                let f = gn(U, U.nearest(x.x, x.z), U.nearest(e, t));
                return f0({
                    name: n
                }, f || [[x.x, x.z], [e, t]], o)
            }
            await Fe(`Walking to ${n}\u2026`, 4e3);
            let[c,p] = Qo(e, t);
            Da(c, p, e, t),
            g(`Welcome to ${n}`),
            o?.()
        }
    }])
}
var He = []
  , zc = null
  , Jm = 0;
async function bt(e) {
    if (!(!e && Date.now() - Jm < 25e3)) {
        Jm = Date.now();
        try {
            let t = await fetch("/api/business");
            if (t.ok) {
                zc = await t.json(),
                He = zc.businesses || [],
                Zy(),
                Jx(),
                qx();
                try {
                    By()
                } catch (n) {
                    console.warn("shops", n)
                }
            }
        } catch {}
    }
}
bt(!0);
setInterval( () => !document.hidden && bt(), 300 * 1e3);
var jt = e => He.find(t => t.place === e) || null
  , So = () => m ? He.filter(e => e.owner === m.uid) : []
  , vr = e => Math.floor((e + 36e5) / 864e5);
async function An(e) {
    try {
        let t = await Xn(ee(W, "businesses", e));
        if (!t.exists())
            return He = He.filter(i => i.id !== e),
            null;
        let n = t.data()
          , o = {
            ...n,
            id: e,
            hrs: n.hrs || [0, 24],
            taxBp: n.taxBp || ko,
            openAt: n.openAt?.toMillis?.() || 0,
            staff: Object.entries(n.staff || {}).map( ([i,r]) => ({
                uid: i,
                name: r.n
            }))
        }
          , a = He.findIndex(i => i.id === e);
        return a >= 0 ? He[a] = o : He.push(o),
        o
    } catch (t) {
        return console.warn("business", t.code || t),
        He.find(n => n.id === e) || null
    }
}
async function Hi(e, t, n, o, a, i, r) {
    if (!m)
        return ne("pay for things"),
        !1;
    let s = rv(e, t);
    if (s)
        return sv(s, e, t, n, a);
    if (n > A)
        return g("You don't have enough money."),
        !1;
    let l = A
      , u = Qu(e, Q());
    A -= n,
    _e();
    let d = c => {
        let p = Zu(n, c)
          , f = Xt(W);
        f.update(ee(W, "businesses", e.id), {
            till: Nn(n - p),
            revenue: Nn(n),
            sales: Nn(1),
            taxPaid: Nn(p),
            lastSale: {
                by: m.uid,
                at: ie(),
                amt: n,
                item: t,
                tax: p
            }
        });
        let b = {
            money: A,
            lastPay: {
                b: e.id,
                at: ie()
            },
            updatedAt: ie()
        };
        return i !== void 0 && (b.food = {
            level: i,
            at: ie(),
            last: t
        }),
        r && Object.assign(b, r),
        f.update(ee(W, "players", m.uid), b),
        f.set(ee(mt(W, "players", m.uid, "transactions")), {
            amount: -n,
            reason: o,
            label: a.slice(0, 60),
            balance: A,
            createdAt: ie()
        }),
        f.commit()
    }
    ;
    try {
        try {
            await d(u)
        } catch (c) {
            if (c.code !== "permission-denied")
                throw c;
            let p = await An(e.id) || e
              , f = Qu(p, Q());
            try {
                await d(f)
            } catch (b) {
                if (b.code !== "permission-denied")
                    throw b;
                await d(f === Sa ? p.taxBp || ko : Sa)
            }
        }
        if (m.player.money = A,
        i !== void 0) {
            let c = Q();
            m.player.food = {
                level: i,
                at: {
                    toMillis: () => c
                },
                last: t
            },
            Fa = i,
            Ja()
        }
        return !0
    } catch (c) {
        return console.warn("pay business", c.code || c),
        A = l,
        _e(),
        g(`Couldn't pay. ${e.name} may have just closed.`, 4500),
        An(e.id),
        !1
    }
}
function sf(e, t, n=[]) {
    if (!t)
        return R(`${e} \xB7 closed`, `${e} has no owner, so it's closed. Own it for ${y(Tt)} (real money): you set the prices, hire staff and keep the profit.`, [{
            text: `Own ${e}`,
            small: `${y(Tt)} \xB7 Earn money \u2192 Business`,
            right: y(Tt),
            onClick: () => Un()
        }, ...n]);
    let o = t.owner === m.uid
      , a = m.player.job?.b === t.id;
    R(`${t.name} \xB7 closed`, `Owned by @${t.ownerName}. Open ${ai(t.hrs)} (Abuja time): opens at ${jl(t.hrs)}.${o ? " You can open it now by working a shift, or change your hours (Earn money \u2192 Business)." : ""}`, [...o ? [{
        text: "Open now",
        small: "Work a shift here yourself (unpaid)",
        right: "Open",
        onClick: () => {
            E(),
            Po(t, !0)
        }
    }] : [], ...a ? [{
        text: "Start your shift",
        small: `${y(t.wage)} a shift`,
        right: "Work",
        onClick: () => {
            E(),
            Po(t, !0)
        }
    }] : [], ...Yo(t) && !o && !a ? [{
        text: `Hiring: ${vt[t.kind].role}`,
        small: `${y(t.wage)} a shift`,
        right: "Apply",
        onClick: () => ff(t)
    }] : [], ...n])
}
async function Ly(e) {
    let t = await $e(Te).currentUser.getIdToken()
      , n = await fetch("/api/business", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + t
        },
        body: JSON.stringify(e)
    })
      , o = await n.json().catch( () => ({
        error: "Server error"
    }));
    if (!n.ok)
        throw new Error(o.error || "Something went wrong");
    return o
}
async function uu(e, t) {
    E();
    try {
        let n = await Ly(e)
          , o = (await Xn(ee(W, "players", m.uid))).data();
        o && (o.job ? m.player.job = o.job : delete m.player.job,
        typeof o.money == "number" && (A = o.money,
        m.player.money = A,
        _e()));
        let a = e.bid || (e.action === "quit" ? null : void 0);
        a ? await An(a) : bt(!0),
        g(n.msg, 5e3),
        e.action === "apply" && m.player.job && ln("job"),
        t?.()
    } catch (n) {
        g(n.message, 5e3),
        t?.()
    }
}
var zi = e => He.filter(t => t.kind === e && Ct(t, Q())).sort( (t, n) => t.menu.km - n.menu.km || (n.sales || 0) - (t.sales || 0))
  , ia = e => zi(e)[0] || null
  , ea = null;
function lf(e, t) {
    let n = zi(e);
    if (n.length <= 1)
        return Promise.resolve(n[0] || null);
    let o = Q();
    return new Promise(a => {
        R(`Pick a ${e === "keke" ? "keke" : "taxi"} company`, `${n.length} running now. Cheapest first.`, n.map( (i, r) => ({
            text: i.name,
            small: [`\u20A6${i.menu.km}/km`, ii(i, o) ? "driver on duty" : "", `${(i.sales || 0).toLocaleString()} rides`, `@${i.ownerName}`, r === 0 ? "cheapest" : ""].filter(Boolean).join(" \xB7 "),
            right: t ? y(Ti(i, t)) : "",
            disabled: t ? Ti(i, t) > A : !1,
            onClick: () => {
                let s = ea;
                ea = null,
                E(),
                s?.(i)
            }
        }))),
        ea = a
    }
    )
}
var Ic = (e, t) => Mp(t, e.menu.km, ni, 1)
  , Ti = (e, t) => {
    let n = Xl(H, Q());
    return n ? mm(Ic(e, t), n) : Ic(e, t)
}
;
async function cf(e, t, n, o) {
    if (Xl(H, Q())) {
        let a = await wu({
            kind: "fares",
            bid: e.id,
            full: Ic(e, t)
        });
        if (a.ok)
            return !0;
        g(`${a.error || "The fare cut didn't apply"}, so it's the normal fare.`, 4e3)
    }
    return Hi(e, "ride", Ic(e, t), n, o)
}
function uf(e) {
    let t = He.filter(a => a.kind === e).length
      , n = e === "keke" ? "keke" : "taxi"
      , o = e === "keke" ? "taxi" : "keke";
    R(`No ${n}s running`, t ? `Abuja has ${t} ${n} compan${t === 1 ? "y" : "ies"}, but none is open right now.` : `Nobody runs a ${n} company yet. Start one for ${y(Tt)} and hire drivers.`, [...ia(o) ? [{
        text: `Take a ${o} instead`,
        small: ia(o).name,
        right: "",
        onClick: () => {
            E(),
            Bu(o)
        }
    }] : [], {
        text: "Along (shared cab)",
        small: "Government \xB7 cheapest",
        right: "",
        onClick: () => {
            E(),
            y0()
        }
    }, {
        text: "Trek (walk)",
        small: "Free",
        right: "",
        onClick: () => {
            E(),
            h0()
        }
    }, {
        text: `Start a ${n} company`,
        small: `${y(Tt)} \xB7 you set the fare and hire drivers`,
        right: y(Tt),
        onClick: () => Un(e)
    }])
}
var xt = null
  , Ex = {
    x: 1107,
    z: -84,
    name: "the Eagle Square taxi rank"
};
function fo(e) {
    if (e.kind === "food") {
        let t = Lt.find(n => n.id === e.place);
        return t ? {
            x: t.x,
            z: t.z,
            name: t.name
        } : null
    }
    if (e.kind === "club")
        return ue ? {
            x: ue.x,
            z: ue.z,
            name: ot
        } : null;
    if (e.kind === "hospital")
        return Se ? {
            x: Se.x,
            z: Se.z,
            name: dn.name
        } : null;
    if (e.kind === "custom") {
        let t = ht[e.plot];
        return t ? {
            x: t.door.x,
            z: t.door.z,
            name: e.name
        } : null
    }
    if (e.kind === "gov") {
        let t = yl("Eagle Square");
        return t ? {
            x: t.x,
            z: t.z,
            name: "Eagle Square"
        } : null
    }
    return {
        ...Ex,
        anywhere: !0
    }
}
var Ls = e => e.kind === "custom" ? "plot:" + e.plot : e.kind === "food" ? "food:" + e.place : e.kind === "hospital" ? "hospital" : null
  , df = e => e.kind === "club" && w === "club" || w === "venue" && !!Ls(e) && ye?.key === Ls(e);
function ra(e) {
    let t = fo(e);
    if (!t)
        return !1;
    if (t.anywhere)
        return w === "city" || w === "venue";
    if (df(e))
        return !0;
    if (w === "venue" || w !== "city")
        return !1;
    let n = e.kind === "food" && Lt.find(o => o.id === e.place);
    return Math.hypot(x.x - t.x, x.z - t.z) <= 70 || !!n && Math.hypot(x.x - n.cx, x.z - n.cz) <= 70
}
var Tx = e => e.kind === "gov" ? "the FCT Government" : `@${e.ownerName}`
  , Va = () => (H?.taxBp || ko) / 100
  , il = () => {
    let e = m?.player.job;
    return e && He.find(t => t.id === e.b && t.staff.some(n => n.uid === m.uid)) || null
}
;
function hf() {
    if (re(),
    !m)
        return ne("earn money");
    R("Earn money", "Work for someone, or run your own business.", [{
        text: "Jobs",
        small: "Get hired by a business and work 2-minute shifts",
        right: "",
        onClick: sa
    }, {
        text: "Business",
        small: "Start or run your own: you set the prices and wages",
        right: "",
        onClick: Ii
    }], Bs)
}
async function sa() {
    if (re(),
    !m)
        return ne("get a job");
    if (xt)
        return g("You're on a shift. Finish it first.");
    await bt(!0);
    let e = il()
      , t = So()
      , n = [];
    e && n.push({
        text: `Start shift \xB7 ${vt[e.kind].role}`,
        small: `${e.name} \xB7 ${e.till < e.wage ? e.kind === "gov" ? "the payroll is low" : "the till is low: ask your boss to top it up" : ra(e) ? "you're here: start now" : `free staff bus to ${fo(e)?.name || e.name}`}`,
        right: y(e.wage),
        onClick: () => {
            E(),
            Po(e, !0)
        }
    }, {
        text: "Quit my job",
        small: e.name,
        right: "",
        onClick: () => R(`Quit ${e.name}?`, "You can apply somewhere else after.", [{
            text: "Quit",
            main: !0,
            onClick: () => uu({
                action: "quit"
            })
        }], sa)
    });
    let o = i => i.kind === "gov" ? {
        tag: "Government",
        tagCls: "civil"
    } : {
        tag: "Private business"
    };
    e && Object.assign(n[0], o(e));
    for (let i of t)
        n.push({
            text: `Open ${i.name} to customers`,
            small: "Your business: work a shift yourself (unpaid)",
            right: "Open",
            onClick: () => {
                E(),
                Po(i, !0)
            }
        });
    let a = He.filter(i => Yo(i) && i.owner !== m.uid && i.id !== e?.id).sort( (i, r) => r.wage - i.wage);
    a.length ? n.push({
        text: "Hiring now",
        small: "Best pay first",
        right: "",
        onClick: () => {}
    }, ...a.map(i => ({
        ...o(i),
        text: `${vt[i.kind].role} \xB7 ${i.name}`,
        small: `${i.kind === "gov" ? `Eagle Square \xB7 up to ${Yi} shifts a day` : `@${i.ownerName}`} \xB7 ${i.staff.length}/${i.openings} hired${i.till < i.wage ? i.kind === "gov" ? " \xB7 payroll is low" : " \xB7 till is low" : ""}`,
        right: y(i.wage),
        onClick: () => ff(i)
    }))) : e || n.push({
        text: "Nobody is hiring right now",
        small: "Check back soon, or start your own business",
        right: "",
        onClick: () => Ii()
    }),
    R("Jobs", e ? `You work at ${e.name}. Each 2-minute shift is paid from its till. Up to ${Fi} shifts a day.` : `Private businesses are run by players and pay from their till. Government jobs (FCT Civil Service) are paid by the CBN, up to ${Yi} shifts a day. Apply, then work 2-minute shifts.`, n, hf)
}
function ff(e, t=sa) {
    R(`Work at ${e.name}?`, `${vt[e.kind].role} for ${Tx(e)}: ${y(e.wage)} per 2-minute shift, paid from ${e.kind === "gov" ? "the government payroll (the CBN)" : "their till"}${e.till < e.wage ? " (it's low right now)" : ""}. You can have one job at a time.`, [{
        text: "Apply",
        main: !0,
        onClick: () => uu({
            action: "apply",
            bid: e.id
        })
    }], t)
}
var io = null
  , xs = 0;
async function Po(e, t) {
    let n = e.kind === "club" || !!Ls(e);
    if (df(e) || ra(e) && !n) {
        io = null,
        t && ks(e);
        return
    }
    if (ra(e) && w === "city")
        return Km(e, t);
    let o = fo(e);
    if (!o)
        return g("Can't find that workplace right now.");
    if (w === "cell")
        return g("You're locked up.");
    if (w === "venue" && un(),
    !mo() || sn || Ne || Le)
        return g("Finish your trip first.");
    P?.driving && Rn(),
    await Fe(t ? `Going to ${o.name}\u2026 (free staff bus)` : `Your shift is still on. Back to ${o.name}\u2026`, 2200),
    w === "club" && Or();
    let[a,i] = Qo(o.x, o.z);
    if (w === "city" ? (x.set(a, 0, i),
    j = Math.atan2(o.x - a, o.z - i),
    ce = null,
    de.visible = !1,
    dt(new Z(Math.sin(j),0,Math.cos(j)), 22, 10, 6, 2),
    k?.sendNow()) : Da(a, i, o.x, o.z),
    n && w === "city")
        return Km(e, t);
    t && (io = e,
    xs = .6,
    g(`You're at ${o.name}.`, 2500))
}
function Km(e, t) {
    if (t && (io = e,
    xs = 1.6),
    e.kind === "club")
        return Hf();
    let n = () => {}
    ;
    if (e.kind === "food") {
        let o = Lt.find(a => a.id === e.place);
        o && co(Ls(e), o.name, Cu(o), {
            x: o.x,
            z: o.z
        }, () => vu(o), n)
    } else
        e.kind === "custom" && ht[e.plot] ? co(Ls(e), e.name, e.type === "food" ? "food" : "shop", ht[e.plot].door, () => _y(e.id), n) : e.kind === "hospital" && Se && co("hospital", dn.name, "hospital", {
            x: Se.x,
            z: Se.z
        }, Tb, n)
}
function Mx(e) {
    if (!io || xt || !m || (xs -= e,
    xs > 0) || (xs = 1,
    !ra(io)))
        return;
    let t = io
      , n = t.owner === m.uid;
    io = null,
    R(`You're at ${fo(t)?.name || t.name}`, n ? "Open up: customers can buy while you're here." : `${vt[t.kind].role} at ${t.name} \xB7 ${y(t.wage)} for a 2-minute shift. Stay here until it ends: chat with people while you work.`, [{
        text: n ? "Open up" : "Start shift",
        main: !0,
        onClick: () => {
            E(),
            ks(t)
        }
    }, {
        text: "Not now",
        onClick: E
    }])
}
var $x = () => {
    let e = m.player;
    return e.govDay === vr(Q()) && e.govDone || 0
}
;
async function ks(e) {
    if (xt)
        return g("You're already on a shift.");
    if (!ra(e))
        return g(`Go to ${fo(e)?.name || e.name} to start.`);
    if (go())
        return g(`You're ${Hr() ? "sick" : "injured"}. Get treated first (Phone \u2192 Health).`, 4e3);
    if (Nt() < 1)
        return g("You're too hungry to work. Eat something first.", 4e3);
    let t = e.owner === m.uid
      , n = m.player
      , o = vr(Q());
    if (!t && (n.workDay === o && n.workDone || 0) >= Fi)
        return g(`You've worked ${Fi} shifts today. Rest and come back tomorrow.`, 4e3);
    if (e.kind === "gov" && $x() >= Yi)
        return g(`You've worked ${Yi} civil service shifts today, the most the government pays for. Come back tomorrow.`, 4500);
    let a = await An(e.id);
    if (!a)
        return g("That business is gone.");
    if (!t && !a.staff.some(l => l.uid === m.uid))
        return delete n.job,
        g(`You don't work at ${a.name} any more.`, 4e3);
    if (!t && a.till < a.wage)
        return g(a.kind === "gov" ? "The civil service payroll is empty, so you can't be paid. Ask the Minister to fund it." : `${a.name}'s till is empty, so you can't be paid. Ask @${a.ownerName} to top it up.`, 5e3);
    let i = t ? 0 : a.wage
      , r = () => {
        let l = Xt(W);
        return l.set(ee(W, "work", m.uid), {
            b: a.id,
            start: ie(),
            wage: i
        }),
        l.update(ee(W, "businesses", a.id), {
            openAt: ie()
        }),
        l.commit()
    }
    ;
    try {
        await r()
    } catch {
        try {
            await qr(ee(W, "work", m.uid)),
            await r()
        } catch (u) {
            return console.warn("shift start", u.code || u),
            g("Couldn't start the shift. Try again.", 4e3)
        }
    }
    let s = Q();
    a.openAt = s,
    Ny(a, s + 12e4, i),
    Ye("shift"),
    g(t ? `${a.name} is open! Stay 2 minutes: customers can buy while you're here.` : `Shift started: ${vt[a.kind].role} at ${a.name}. ${y(i)} when it ends.`, 4e3)
}
function Ny(e, t, n) {
    xt = {
        b: e,
        wage: n,
        place: fo(e),
        endsAt: t,
        awaySince: 0
    },
    h("#shift-title").textContent = `${e.owner === m.uid ? "Minding the shop" : vt[e.kind].role} \xB7 ${e.name}`,
    h("#shift").hidden = !1
}
function Oy() {
    xt = null,
    h("#shift").hidden = !0
}
async function rl(e) {
    if (xt) {
        sr.delete(xt.b.id),
        Oy();
        try {
            await qr(ee(W, "work", m.uid))
        } catch {}
        g(e || "Shift cancelled. No pay.", 4e3)
    }
}
async function Sx() {
    let e = xt;
    if (!e || e.finishing)
        return;
    if (e.finishing = !0,
    h("#shift-msg").textContent = e.wage ? "Getting paid\u2026" : "Shift over",
    await new Promise(s => setTimeout(s, 2500)),
    Oy(),
    !e.wage)
        return await qr(ee(W, "work", m.uid)).catch( () => {}
        ),
        sr.has(e.b.id) && ra(e.b) ? (g(`${e.b.name} stays open: next shift started.`, 2500),
        ks(e.b)) : R(`Shift over at ${e.b.name}`, "Customers can still buy in your open hours (self-service), but you keep more while someone's on shift.", [{
            text: "Another shift",
            main: !0,
            onClick: () => {
                E(),
                ks(e.b)
            }
        }]);
    let t = m.player
      , n = vr(Q())
      , o = (t.workDay === n && t.workDone || 0) + 1
      , a = e.b.kind === "gov"
      , i = a ? (t.govDay === n && t.govDone || 0) + 1 : 0
      , r = a ? {
        govDay: n,
        govDone: i
    } : {};
    for (let s = 0; s < 3; s++) {
        let l = A + e.wage;
        try {
            let u = Xt(W);
            u.delete(ee(W, "work", m.uid)),
            u.update(ee(W, "businesses", e.b.id), {
                till: Nn(-e.wage),
                wagesPaid: Nn(e.wage),
                shifts: Nn(1),
                lastPayout: {
                    to: m.uid,
                    at: ie(),
                    amt: e.wage
                }
            }),
            u.update(ee(W, "players", m.uid), {
                money: l,
                workDay: n,
                workDone: o,
                ...r,
                updatedAt: ie()
            }),
            u.set(ee(mt(W, "players", m.uid, "transactions")), {
                amount: e.wage,
                reason: "salary",
                label: `${vt[e.b.kind].role} \xB7 ${e.b.name}`.slice(0, 60),
                balance: l,
                createdAt: ie()
            }),
            await u.commit(),
            A = l,
            Object.assign(t, {
                money: A,
                workDay: n,
                workDone: o,
                ...r
            }),
            _e(),
            ln("work");
            let d = a ? Math.min(Fi - o, Yi - i) : Fi - o;
            return R(`Paid ${y(e.wage)}!`, `From ${a ? "the civil service payroll" : `${e.b.name}'s till`}. ${d} shift${d === 1 ? "" : "s"} left today${a ? " in the civil service" : ""}.`, [{
                text: "Work another shift",
                main: !0,
                disabled: d <= 0,
                onClick: () => {
                    E(),
                    ks(e.b)
                }
            }])
        } catch (u) {
            if (console.warn("payday", u.code || u),
            u.code === "permission-denied")
                break;
            await new Promise(d => setTimeout(d, 2e3))
        }
    }
    qr(ee(W, "work", m.uid)).catch( () => {}
    ),
    g(`${e.b.name} couldn't pay you (the till ran dry or you're no longer on the staff). Talk to @${e.b.ownerName}.`, 6e3)
}
function Ax() {
    if (!xt)
        return;
    let e = Date.now()
      , t = xt.endsAt - Q()
      , n = xt;
    h("#shift-time").textContent = t > 0 ? `${Math.floor(t / 6e4)}:${String(Math.floor(t / 1e3) % 60).padStart(2, "0")}` : "0:00",
    h("#shift-bar").style.width = Math.min(100, 100 - t / 12e4 * 100) + "%";
    let o = !ra(n.b)
      , a = n.place?.anywhere ? "town" : n.place?.name || n.b.name;
    if (o) {
        n.awaySince || (n.awaySince = e);
        let i = 20 - Math.floor((e - n.awaySince) / 1e3);
        if (h("#shift-msg").className = "shift-msg warn",
        h("#shift-msg").textContent = `Go back to ${a}! ${i}s before you lose this shift.`,
        i <= 0)
            return rl(`You left ${a}. Shift cancelled, no pay.`)
    } else
        n.awaySince = 0,
        h("#shift-msg").className = "shift-msg",
        h("#shift-msg").textContent = "Working\u2026 stay here till the end. Chat with people while you wait.";
    t <= 0 && Sx()
}
h("#shift-quit").addEventListener("click", () => rl());
setInterval(Ax, 1e3);
var ht = []
  , Xm = new Map
  , Rx = [[0, -4], [-6, -8], [6, -8], [-6, -4], [6, -4], [-6, -1], [6, -1], [0, 3]];
function Hx() {
    for (let[e,t] of yn) {
        let n = Tu(e, t, Rx, ht.filter(Boolean));
        n && (n.door = {
            x: n.x + Math.sin(n.h) * 3,
            z: n.z + Math.cos(n.h) * 3
        }),
        ht.push(n)
    }
    st && (window.__plots = ht),
    By()
}
function By() {
    if (ht.length)
        for (let e of He.filter(t => t.kind === "custom")) {
            let t = ht[e.plot]
              , n = Xm.get(e.plot);
            if (!t || n?.id === e.id && n.name === e.name)
                continue;
            n ? (J.remove(n.mesh),
            J.remove(n.tag)) : qa(t.x, t.z, t.h, -6, 6, -8, 0);
            let o = Oe(Sp(e.name, e.type));
            o.position.set(t.x, 0, t.z),
            o.rotation.y = t.h,
            J.add(o),
            Xm.set(e.plot, {
                id: e.id,
                name: e.name,
                mesh: o,
                tag: ao(e.name, t.x, 10, t.z)
            }),
            Ro.some(a => a.name.toLowerCase() === e.name.toLowerCase()) || Ro.push({
                name: e.name,
                x: t.door.x,
                z: t.door.z,
                kind: "Business"
            })
        }
}
var zx = () => He.find(e => e.kind === "custom" && ht[e.plot] && Math.hypot(ht[e.plot].door.x - x.x, ht[e.plot].door.z - x.z) < 14) || null;
async function _y(e) {
    if (!m)
        return ne("buy things");
    let t = await An(e);
    if (!t)
        return g("This business has closed down.");
    if (!Ct(t, Q()))
        return sf(t.name, t, []);
    let n = Nt() >= 97;
    R(t.name, `${t.about} \xB7 run by @${t.ownerName}. You have ${y(A)}.`, Object.entries(t.menu).map( ([o,a]) => t.type === "food" && Xe[o] ? {
        text: Xe[o].name,
        small: n ? "You're full" : `+${Xe[o].fill}% food \xB7 eat now${$f()}`,
        right: y(lo(a)),
        disabled: n || lo(a) > A,
        onClick: () => Sf(t, o, a)
    } : {
        text: $a(o, t),
        small: "",
        right: y(a),
        disabled: a > A,
        onClick: () => Ix(t, o, a)
    }))
}
async function Ix(e, t, n) {
    E(),
    await Hi(e, t, n, "market", `${$a(t, e)} \xB7 ${e.name}`) && g(`You bought ${$a(t, e)} at ${e.name}. Enjoy!`, 4e3)
}
var Px = e => (e.addEventListener("keydown", t => t.stopPropagation()),
e.addEventListener("keyup", t => t.stopPropagation()),
e)
  , ir = (e, t, n="", o="text") => Px(Object.assign(document.createElement("input"), {
    className: "ad-input",
    placeholder: e,
    maxLength: t,
    value: n,
    type: o
}))
  , du = "al-bizdraft"
  , gh = e => {
    try {
        localStorage.setItem(du, JSON.stringify({
            ...e,
            t: Date.now()
        }))
    } catch {}
}
  , yh = () => {
    try {
        let e = JSON.parse(localStorage.getItem(du) || "null");
        return e && Date.now() - e.t < 7 * 864e5 ? e : null
    } catch {
        return null
    }
}
  , Gy = new Set;
function hu(e=yh() || {
    items: []
}) {
    if (!m)
        return ne("start a business");
    R("Create your own business", `Anything you like: a salon, gym, bukka, laundry, phone shop\u2026 You get a building with your name on a plot (CBD, Wuse 2, Garki or Jabi), set the prices, hire staff and keep the profit. ${y(Ma)} real money.`, Object.entries(xp).map( ([l,u]) => ({
        text: u,
        small: l === "food" ? "Pick from the game's food and drinks: customers fill up when they eat" : "Name your own items (haircut, wash & iron, gym day pass\u2026): bought for the experience",
        right: "Next",
        onClick: () => {
            let d = {
                ...e,
                name: n.value.trim(),
                about: o.value.trim(),
                type: l,
                cat: a
            };
            if (d.name.length < 3)
                return g("Give your business a name (3\u201324 letters).");
            if (d.about.length < 3)
                return g("Say what your business does.");
            if (!d.cat)
                return g("Pick a group: where people will find your business.");
            e.type !== l && (d.items = []),
            gh(d),
            Ns({
                draft: d
            })
        }
    })), () => Un());
    let t = document.createElement("div");
    t.className = "ad-form";
    let n = ir("Business name, e.g. Mama Tee Salon", 24, e.name)
      , o = ir("What it does, e.g. Braids, weaves and nails", Ku, e.about)
      , a = Jr.includes(e.cat) ? e.cat : null
      , i = document.createElement("div");
    i.className = "sheet-label",
    i.style.marginTop = "6px",
    i.textContent = "Group";
    let r = document.createElement("div");
    r.className = "cat-chips";
    for (let l of Jr) {
        let u = document.createElement("button");
        u.type = "button",
        u.className = "cat-chip" + (l === a ? " on" : ""),
        u.innerHTML = xe(gt[l].icon, 16) + "<span></span>",
        u.lastChild.textContent = gt[l].name,
        u.onclick = () => {
            a = l,
            r.querySelectorAll(".cat-chip").forEach(d => d.classList.toggle("on", d === u)),
            gh({
                ...e,
                name: n.value.trim(),
                about: o.value.trim(),
                cat: l
            })
        }
        ,
        r.appendChild(u)
    }
    let s = document.createElement("div");
    s.className = "sheet-label",
    s.style.marginTop = "6px",
    s.textContent = "What you sell",
    t.append(n, o, i, r, s),
    h("#act-list").prepend(t),
    setTimeout( () => n.focus(), 50)
}
function Ns({draft: e, edit: t}) {
    let n = t ? t.type : e.type
      , o = n === "food"
      , a = t ? Object.entries(t.menu).map( ([l,u]) => o ? {
        food: l,
        price: u
    } : {
        label: $a(l, t),
        price: u
    }) : e.items
      , i = () => {
        let l = o ? [...r.querySelectorAll(".cb-food")].filter(u => u.querySelector("input[type=checkbox]").checked).map(u => ({
            food: u.dataset.k,
            price: +u.querySelector("input[type=number]").value
        })) : [...r.querySelectorAll(".cb-item")].map(u => ({
            label: u.children[0].value.trim(),
            price: +u.children[1].value
        })).filter(u => u.label || u.price);
        if (!l.length)
            return g("Add at least one item with a price.");
        if (l.some(u => !(u.price >= Nl && u.price <= Ol)))
            return g(`Prices must be ${y(Nl)}\u2013${y(Ol)}.`);
        if (!o && l.some(u => u.label.length < 2))
            return g("Give every item a name.");
        if (t)
            return uu({
                action: "settings",
                bid: t.id,
                custom: {
                    about: s.value.trim(),
                    items: l
                }
            }, () => bh(t.id));
        gh({
            ...e,
            items: l
        }),
        pf({
            ...e,
            items: l
        })
    }
    ;
    R(t ? "What you sell" : `${e.name}: what you sell`, o ? "Tick what you sell and set your prices (normal Abuja prices are filled in)." : `Up to ${Ju} items. Name each one and set its price.`, [{
        text: t ? "Save" : "Next: pick a plot",
        main: !0,
        onClick: i
    }], t ? () => bh(t.id) : () => hu(e));
    let r = document.createElement("div");
    r.className = "ad-form";
    let s = ir("What it does", Ku, t?.about || "");
    if (t && r.append(s),
    o)
        for (let[l,u] of Object.entries(Xe)) {
            let d = a.find(p => p.food === l)
              , c = document.createElement("label");
            c.className = "cb-food cb-row",
            c.dataset.k = l,
            c.innerHTML = '<input type="checkbox"><span></span>',
            c.children[0].checked = !!d,
            c.children[1].textContent = u.name,
            c.append(ir("Price", 7, String(d?.price || u.price), "number")),
            r.append(c)
        }
    else {
        let l = document.createElement("div");
        l.className = "ad-form";
        let u = (c={}) => {
            if (l.children.length >= Ju)
                return;
            let p = document.createElement("div");
            p.className = "cb-item cb-row",
            p.append(ir("Item, e.g. Braids", 24, c.label || ""), ir("\u20A6 price", 7, c.price ? String(c.price) : "", "number")),
            l.append(p)
        }
        ;
        (a.length ? a : [{}, {}, {}]).forEach(u);
        let d = document.createElement("button");
        d.type = "button",
        d.className = "dest",
        d.textContent = "+ Add an item",
        d.onclick = () => u(),
        r.append(l, d)
    }
    h("#act-list").prepend(r)
}
async function pf(e, t="") {
    R("Pick a plot", "Loading the free plots\u2026", [], () => Ns({
        draft: e
    }));
    let[,n] = await Promise.all([bt(!0), fetch("/api/business?view=held").then(s => s.ok ? s.json() : {}).then(s => s.held || []).catch( () => [])])
      , o = new Map(He.filter(s => s.kind === "custom").map(s => [s.plot, s]))
      , a = new Set([...n.filter(s => s.plot !== void 0 && s.by !== m.uid).map(s => s.plot), ...Gy])
      , i = s => {
        let l = o.get(s)
          , u = ht[s]
          , d = u && w === "city" ? ` \xB7 ${fa(Math.hypot(u.x - x.x, u.z - x.z))} km away` : "";
        return l ? {
            text: oi(s),
            small: `${l.name} \xB7 owned by @${l.ownerName}`,
            right: "Taken",
            disabled: !0,
            onClick: () => {}
        } : a.has(s) ? {
            text: oi(s),
            small: "Someone is paying for it right now \xB7 pick another",
            right: "Reserved",
            disabled: !0,
            onClick: () => {}
        } : {
            text: oi(s),
            small: `Free${d}`,
            right: "Pick",
            disabled: !u,
            onClick: () => Lx({
                ...e,
                plot: s
            })
        }
    }
      , r = [...new Set(yn.map( (s, l) => Bl(l)))].flatMap(s => {
        let l = yn.map( (d, c) => c).filter(d => Bl(d) === s).map(i).sort( (d, c) => d.disabled - c.disabled)
          , u = l.filter(d => !d.disabled).length;
        return [{
            head: !0,
            text: `${s} \xB7 ${u ? `${u} free` : "all taken"}`
        }, ...l]
    }
    );
    R("Pick a plot", `${t ? t + " " : ""}Free plots along big roads in the CBD, Wuse 2, Garki and Jabi. Your building goes up the moment you've paid.`, r, () => Ns({
        draft: e
    }))
}
function Lx(e) {
    let t = e.items.map(n => `${e.type === "food" ? Xe[n.food]?.name : n.label} ${y(n.price)}`).join(" \xB7 ");
    R(`Open ${e.name}?`, `"${e.about}" on ${oi(e.plot)}, in ${gt[e.cat]?.name || gt[e.type === "food" ? "food" : "services"].name}. Selling: ${t}. ${y(Ma)} real money (card or bank transfer), once. You can change prices and items later.`, [{
        text: `Pay ${y(Ma)} and open it`,
        main: !0,
        onClick: () => Fy({
            kind: "custom",
            name: e.name,
            about: e.about,
            type: e.type,
            items: e.items,
            plot: e.plot,
            cat: e.cat
        }, e)
    }], () => pf(e))
}
async function Ii() {
    if (re(),
    !m)
        return ne("start a business");
    await bt(!0);
    let e = So()
      , t = Q();
    R("Business", `Own a restaurant, the club, a real estate firm, or a taxi or keke company: from ${y(Tt)} (real money) to register. You set the prices and wages; ${Va()}% of every sale goes to the CBN as tax (the Minister sets it).`, [...e.map(n => ({
        text: n.name,
        small: n.kind === "estate" ? `Collecting rent \xB7 till ${y(n.till)} \xB7 ${n.sales || 0} rent payments` : `${ii(n, t) ? "OPEN, staffed" : Ct(n, t) ? "OPEN, self-service" : "Closed"} \xB7 till ${y(n.till)} \xB7 ${n.staff.length} staff`,
        right: "Manage",
        onClick: () => bh(n.id)
    })), {
        text: "Start a business",
        small: "Buy a place, or open your own salon, boutique, lounge\u2026 on a free plot \xB7 search by group",
        right: y(Tt),
        onClick: () => Un()
    }, {
        text: "All businesses",
        small: `${He.length} in Abuja \xB7 who owns what and how much they make`,
        right: "",
        onClick: fu
    }, {
        text: "CBN treasury",
        small: `Tax from every sale (${Va()}%) \xB7 see where every naira goes`,
        right: y(zc?.treasury || 0),
        onClick: () => kf(Ii)
    }], hf)
}
var Nx = e => Object.keys(Gl("food", e)).filter(t => Xe[t]).slice(0, 3).map(t => Xe[t].name).join(", ") + "\u2026";
function Os(e, t) {
    e.onOpen?.(t || null);
    let n = e.cats || Object.keys(gt)
      , o = i => e.entries.filter(r => r.cat === i)
      , a = {
        placeholder: e.placeholder || "Search, e.g. barbing salon, supermarket, lounge",
        find: i => Ox(e, n, i),
        none: e.none || "Nothing matches. Try another word."
    };
    if (t) {
        let i = o(t)
          , r = e.extra?.(t) || [];
        return R(gt[t].name, e.catSub?.(t, i) || "", [...r, ...i.map(s => s.row), ...!i.length && !r.length ? [{
            text: "Nothing here yet",
            small: "",
            right: "",
            disabled: !0,
            onClick: () => {}
        }] : []], () => Os(e), a)
    }
    R(e.title, e.sub, [...e.top || [], {
        tiles: n.map(i => ({
            icon: gt[i].icon,
            text: gt[i].name,
            small: e.tileSmall(i, o(i)),
            onClick: () => Os(e, i)
        }))
    }], e.back, a)
}
function Ox(e, t, n) {
    let o = n.toLowerCase().split(/\s+/).filter(Boolean)
      , a = []
      , i = t.map(l => [l, kp(l, n)]).filter( ([,l]) => l).sort( (l, u) => u[1] - l[1]).map( ([l]) => l);
    for (let l of i) {
        let u = e.entries.filter(d => d.cat === l);
        a.push({
            head: !0,
            text: gt[l].name
        }, ...e.extra?.(l, n) || [], ...u.map(d => d.row))
    }
    let r = e.entries.filter(l => !i.includes(l.cat) && o.every(u => l.words.toLowerCase().includes(u)));
    r.length && a.push({
        head: !0,
        text: i.length ? "Also matching" : "Matching"
    }, ...r.map(l => l.row));
    let s = e.create?.(n, i[0]);
    return s && a.push(s),
    a
}
var Pc = e => [e.name, e.ownerName, e.about || "", ...Object.keys(e.menu || {}).map(t => $a(t, e)), vt[e.kind]?.name || "", gt[Zn(e)].name].join(" ")
  , Cr = (e, t, n=t + "s") => `${e} ${e === 1 ? t : n}`
  , jy = null;
function Un(e) {
    if (re(),
    !m)
        return ne("start a business");
    let t = new Map(He.filter(c => c.place).map(c => [c.place, c]))
      , n = []
      , o = c => c.created ? ` \xB7 since ${new Date(c.created).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short"
    })}` : ""
      , a = (c, p) => ({
        text: p?.name || c.name,
        small: `Owned by @${c.ownerName} \xB7 bought for ${y(_l(c.kind, c.place))}${o(c)}`,
        right: "Sold",
        disabled: !0,
        onClick: () => {}
    });
    for (let c of vp()) {
        let p = t.get(c.id)
          , f = Zn({
            kind: c.kind,
            place: c.id
        });
        n.push({
            cat: f,
            free: !p,
            words: `${c.name} ${p?.ownerName || ""} ${gt[f].name}`,
            row: p ? a(p, c) : c.kind === "estate" ? {
                text: c.name,
                small: `Every renter in ${Re[c.area].name.split("\xB7 ")[1] || c.area} pays you ${y(c.rent)} a month (minus ${Va()}% tax)`,
                right: y(c.fee),
                onClick: () => wh({
                    kind: c.kind,
                    place: c.id
                }, c.name)
            } : {
                text: c.name,
                small: c.kind === "club" ? "Nightclub \xB7 gate fee and drinks" : c.kind === "hospital" ? "The only hospital \xB7 treatment and ambulance fees" : Nx(c.id),
                right: y(Tt),
                onClick: () => wh({
                    kind: c.kind,
                    place: c.id
                }, c.name)
            }
        })
    }
    let i = He.filter(c => c.kind === "custom")
      , r = yn.length - i.length;
    for (let c of i)
        n.push({
            cat: Zn(c),
            words: Pc(c),
            row: {
                ...a(c),
                small: `${c.about ? c.about + " \xB7 " : ""}${oi(c.plot)} \xB7 @${c.ownerName}${o(c)}`
            }
        });
    for (let c of ["taxi", "keke"])
        for (let p of He.filter(f => f.kind === c))
            n.push({
                cat: "transport",
                words: Pc(p),
                row: a(p)
            });
    let s = (c, p) => ({
        text: p ? `Start your own ${p} \xB7 NEW` : c ? `Create your own ${gt[c].name.split(" ")[0].toLowerCase()} business \xB7 NEW` : "Create your own business \xB7 NEW",
        small: r ? `You name it and set the prices \xB7 ${r} of ${yn.length} plots free (CBD, Wuse 2, Garki, Jabi)` : "All plots are taken",
        right: y(Ma),
        disabled: !r,
        onClick: () => hu({
            ...yh() || {
                items: []
            },
            ...c ? {
                cat: c
            } : {},
            ...p && !yh()?.about ? {
                about: p[0].toUpperCase() + p.slice(1)
            } : {}
        })
    })
      , l = c => {
        let p = He.filter(f => f.kind === c).length;
        return {
            text: `New ${vt[c].name.toLowerCase()}`,
            small: p >= Vr[c] ? `All ${Vr[c]} licences taken` : `${p}/${Vr[c]} licences taken \xB7 you name it \xB7 riders pay your price per km`,
            right: y(Tt),
            disabled: p >= Vr[c],
            onClick: () => Bx(c)
        }
    }
      , u = n.filter(c => c.free).length
      , d = {
        title: "Start a business",
        back: Ii,
        sub: `${u ? `${Cr(u, "place")} for sale, ` : "Every place has an owner, "}${r} plots free for your own business. Pick a group, or search for what you want to run.`,
        placeholder: "What do you want to run? e.g. barbing salon",
        top: [s()],
        entries: n,
        tileSmall: (c, p) => {
            let f = p.filter(b => b.free).length;
            return [f ? `${f} for sale` : "", p.length - f ? `${p.length - f} running` : "", !f && c !== "estate" && r ? "start yours" : ""].filter(Boolean).join(" \xB7 ") || (c === "estate" ? "all sold" : "none yet")
        }
        ,
        onOpen: c => {
            jy = c
        }
        ,
        catSub: (c, p) => {
            let f = p.filter(b => b.free).length;
            return c === "estate" ? "Own a district: everyone renting there pays their rent to you." : `${f ? `${Cr(f, "place")} for sale. ` : ""}Places with no owner stay closed until someone buys them. Pay once (card or bank transfer).`
        }
        ,
        extra: (c, p) => [...c === "transport" ? [l("taxi"), l("keke")] : [], ...c === "estate" || p ? [] : [s(c)]],
        create: (c, p) => p === "estate" || p === "transport" && /taxi|keke|cab|ride/i.test(c) ? null : p ? s(p, c.trim().toLowerCase().replace(/\s+/g, " ").slice(0, 30)) : s(),
        none: "Nothing matches. Try another word."
    };
    Os(d, !e || e === "custom" ? null : gt[e] ? e : Zn({
        kind: e
    }))
}
var Dy = () => Un(jy || void 0);
function wh(e, t) {
    let n = Ta(e.place)
      , o = _l(e.kind, e.place);
    R(`Own ${t}?`, n ? `${y(o)} real money (card or bank transfer). Everyone renting a home in ${Re[n].name.split("\xB7 ")[1] || n} pays their rent (${y(Gi(n))} a month each) into your till, minus ${ko / 100}% tax. People who own their home pay no rent. Game money can't be cashed out.` : `${y(Tt)} real money (card or bank transfer). You set the prices, hire staff, pay their wages from the till and keep the profit. Game money can't be cashed out.`, [{
        text: `Pay ${y(o)} and own it`,
        main: !0,
        onClick: () => Fy(e)
    }], () => Dy())
}
function Bx(e) {
    R(`Start a ${vt[e].name.toLowerCase()}`, `Name your company (3\u201324 letters). Riders see it when they book. ${y(Tt)} real money.`, [], () => Dy());
    let t = document.createElement("div");
    t.className = "ad-form";
    let n = document.createElement("input");
    n.className = "ad-input",
    n.maxLength = 24,
    n.placeholder = e === "keke" ? "e.g. Nyanya Keke Express" : "e.g. Capital Cabs",
    n.addEventListener("keydown", a => a.stopPropagation()),
    n.addEventListener("keyup", a => a.stopPropagation());
    let o = document.createElement("button");
    o.type = "button",
    o.className = "w-main act-btn",
    o.textContent = `Next \xB7 ${y(Tt)}`,
    o.onclick = () => n.value.trim().length >= 3 ? wh({
        kind: e,
        name: n.value.trim()
    }, n.value.trim()) : g("Pick a name of at least 3 letters."),
    t.append(n, o),
    h("#act-list").append(t),
    setTimeout( () => n.focus(), 50)
}
async function Fy(e, t) {
    E(),
    g("Opening the payment page\u2026");
    try {
        let n = await Ly({
            action: "register",
            ...e
        });
        if (n.url) {
            try {
                localStorage.setItem("al-bizpay", JSON.stringify({
                    id: n.id,
                    t: Date.now()
                }))
            } catch {}
            location.href = n.url;
            return
        }
        if (g(n.msg, 6e3),
        bt(!0),
        t)
            try {
                localStorage.removeItem(du)
            } catch {}
    } catch (n) {
        if (t && /plot/i.test(n.message))
            return Gy.add(t.plot),
            pf(t, `${oi(t.plot)} was just taken. Your details are saved: pick another plot.`);
        if (t && /name is taken/i.test(n.message))
            return g("That business name is taken. Pick another name; everything else is saved.", 5e3),
            hu(t);
        g(n.message, 5e3)
    }
}
async function Yy(e) {
    let t = (new URLSearchParams(location.search).get("biz") || "").split("?")[0] || null
      , n = null;
    try {
        n = JSON.parse(localStorage.getItem("al-bizpay") || "null")
    } catch {}
    let o = e || t || (n && Date.now() - n.t < 24 * 36e5 ? n.id : null);
    if (t && history.replaceState(null, "", location.pathname),
    !!o)
        try {
            let a = await $e(Te).currentUser.getIdToken()
              , i = await fetch("/api/business", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + a
                },
                body: JSON.stringify({
                    action: "verify",
                    id: o
                })
            })
              , r = await i.json().catch( () => ({}));
            if (!r.waiting)
                try {
                    localStorage.removeItem("al-bizpay")
                } catch {}
            if (i.ok && !r.waiting) {
                Ye("biz_start");
                try {
                    localStorage.removeItem(du)
                } catch {}
                setTimeout( () => bt(!0), 1500)
            }
            if (r.waiting && !t)
                return;
            setTimeout( () => g(r.msg || r.error || "Couldn't confirm your registration. Try again later.", 7e3), 2e3)
        } catch {}
}
var ps = e => e.kind === "taxi" || e.kind === "keke";
var sr = new Set
  , Zm = [["overview", "Overview", "store"], ["prices", "Prices", "receipt"], ["staff", "Staff", "users"], ["money", "Money", "wallet"], ["settings", "Settings", "wrench"]]
  , Gt = "gov"
  , _a = "overview"
  , vs = null
  , bc = null;
async function mf(e, t) {
    if (re(),
    E(),
    !m)
        return ne("run a business");
    await bt(!0);
    let n = So();
    if (!n.length)
        return Ii();
    let o = n.find(i => i.id === e) || n.find(i => i.id === vs) || n[0]
      , a = await An(o.id);
    if (!a)
        return g("Couldn't load your business.");
    a.id !== vs && (_a = "overview",
    bc = null),
    vs = a.id,
    t && (_a = t),
    Gt = "biz",
    h("#gov-panel").hidden = !1,
    Mi()
}
var bh = e => mf(e);
async function so(e) {
    await uu(e),
    !h("#gov-panel").hidden && Gt === "biz" && (await An(vs),
    Mi())
}
var Na = e => 100 - (e.taxBp || ko) / 100;
function Mi() {
    let e = He.find(r => r.id === vs);
    if (!e || e.owner !== m?.uid)
        return Yn();
    let t = Q()
      , n = e.kind === "estate"
      , o = n ? Zm.filter( ([r]) => r === "overview" || r === "money") : Zm;
    o.some( ([r]) => r === _a) || (_a = "overview"),
    h("#gov-kicker").textContent = "Manage business",
    h("#gov-title").textContent = e.name,
    h("#gov-sub").textContent = `${vt[e.kind].name}${e.kind === "custom" && e.about ? ` \xB7 ${e.about}` : ""} \xB7 ${n ? "collecting rent" : ii(e, t) ? "open, staffed" : Ct(e, t) ? "open, self-service" : "closed"}`;
    let a = h("#gov-tabs");
    a.innerHTML = "";
    for (let[r,s,l] of o) {
        let u = N("button", "gov-tab" + (r === _a ? " on" : ""));
        u.type = "button",
        u.innerHTML = xe(l, 16) + "<span></span>",
        u.lastChild.textContent = s,
        u.onclick = () => {
            _a = r,
            Mi()
        }
        ,
        a.appendChild(u)
    }
    let i = h("#gov-body");
    i.innerHTML = "",
    i.scrollTop = 0,
    {
        overview: _x,
        prices: jx,
        staff: Dx,
        money: Fx,
        settings: Yx
    }[_a](i, e, t)
}
var zd = e => {
    _a = e,
    Mi()
}
;
function _x(e, t, n) {
    let o = So();
    if (o.length > 1) {
        let f = ge("Your businesses", "");
        f.appendChild(Ut(o.map(b => ({
            label: b.name,
            sub: vt[b.kind].name,
            on: b.id === t.id,
            onClick: () => mf(b.id)
        })))),
        e.appendChild(f)
    }
    let a = N("div", "gov-stats")
      , i = (t.revenue || 0) - (t.taxPaid || 0) - (t.wagesPaid || 0);
    if (t.kind === "estate") {
        let f = Ta(t.place)
          , b = Re[f]?.name.split("\xB7 ")[1] || f;
        a.append(ct("Till", y(t.till), "ready to take out"), ct("Rent collected", y(t.revenue || 0), `${t.sales || 0} payments`), ct("Rent each", y(Gi(f)), "a month per renter"), ct("You keep", `${Na(t)}%`, `${y(t.taxPaid || 0)} tax paid`)),
        e.appendChild(a);
        let $ = ge("How it works", `Everyone renting a home in ${b} pays their rent to you, and you keep ${Na(t)}%. People who own their home pay no rent. There's nothing to run: just take the money out.`, "live");
        t.till > 0 && $.appendChild(at(`Take out ${y(t.till)}`, () => so({
            action: "till",
            bid: t.id,
            amount: -t.till
        }))),
        e.appendChild($);
        return
    }
    let r = ii(t, n)
      , s = Ct(t, n)
      , l = t.till < t.wage;
    if (a.append(ct("Now", r ? "Open, staffed" : s ? "Self-service" : "Closed", r ? `you keep ${Na(t)}%` : s ? `you keep ${100 - Sa / 100}%` : `opens at ${jl(t.hrs)}`, r ? "good" : s ? "" : "bad"), ct("Till", y(t.till), l ? "too low to pay wages" : "wages come from here", l ? "bad" : ""), ct("Staff", `${t.staff.length}`, Yo(t) ? `${t.openings} wanted \xB7 hiring` : `${t.openings} wanted`), ct("Wage", y(t.wage), "per 2-minute shift"), ct("Made", y(t.revenue || 0), `${t.sales || 0} sales`), ct("Profit", y(i), "after tax and wages", i < 0 ? "bad" : "good")),
    e.appendChild(a),
    l) {
        let f = ge("\u26A0 Your till is too low", `Staff can't work a shift until the till has ${y(t.wage)} (one wage). Put money in from your wallet.`, "warn");
        f.appendChild(at("Put money in", () => zd("money"))),
        e.appendChild(f)
    }
    if (s)
        r || e.appendChild(ge("Nobody's on shift", `Customers can still buy, but ${Sa / 100}% of each sale goes to the CBN instead of ${100 - Na(t)}%. Work a shift or hire staff to keep more.`, "warn"));
    else {
        let f = ge("Closed right now", `Outside your hours (${ai(t.hrs)}, Abuja time). Customers can't buy until ${jl(t.hrs)}, unless someone works a shift.`, "warn");
        f.appendChild(at("Change hours", () => zd("settings"), "ghost")),
        e.appendChild(f)
    }
    if (!t.staff.length && !Yo(t)) {
        let f = ge("No staff", `Hire people and they can work shifts while you're away. You pay them ${y(t.wage)} a shift from the till.`);
        f.appendChild(at("Hire staff", () => zd("staff"))),
        e.appendChild(f)
    }
    let u = {
        taxi: "fares",
        keke: "fares",
        food: "food",
        custom: "food",
        hospital: "health"
    }[t.kind]
      , d = u ? ts(H, u, n) : 0;
    d && e.appendChild(ge(`Law in force: ${ns(u, d)}`, `The Minister's law. Your customers pay less, and the government pays you the rest from its fund, so you still get your full price. ${vf(H.deeds[u].until)}.`, "live")),
    e.appendChild(ge("Tax", `${100 - Na(t)}% of each sale goes to the CBN while someone's on shift (the Minister sets it), ${Sa / 100}% when it's self-service.`));
    let c = xt && xt.b.id === t.id
      , p = ge(c ? "You're on shift now" : "Work it yourself", c ? sr.has(t.id) ? "Your shifts keep going until you stop them." : "Ends in a few minutes." : `Work a 2-minute shift: the business is staffed, so you keep ${Na(t)}% of each sale. The staff bus takes you there free.`);
    c || p.appendChild(at(ps(t) ? "Drive a shift" : "Work a shift", () => {
        Yn(),
        Po(t, !0)
    }
    )),
    e.appendChild(p)
}
function Gx(e, t) {
    let n = Gl(e.kind, e.place)[t] ?? e.menu[t]
      , [o,a] = Cp(t);
    return (t === "km" ? [100, 150, 200, 250, 300, 400, 500, 600, 800, 1e3] : t === "gate" ? [0, 500, 1e3, 2e3, 3e3, 5e3, 1e4] : [.5, .75, 1, 1.25, 1.5, 2, 3].map(i => Math.max(o, Math.round(n * i / 50) * 50))).filter( (i, r, s) => i >= o && i <= a && s.indexOf(i) === r)
}
function jx(e, t) {
    let n = ge(ps(t) ? "Fare" : "Prices", ps(t) ? "Riders pick the company when they book; a lower fare wins more rides." : `Tap an item to change its price. Starting prices are the normal Abuja prices. ${100 - Na(t)}% of each sale goes to the CBN.`);
    t.kind === "custom" && n.appendChild(at("Edit what you sell", () => Ns({
        edit: t
    }), "ghost")),
    e.appendChild(n);
    let o = ge("", "");
    for (let[a,i] of Object.entries(t.menu)) {
        if (a === "song")
            continue;
        let r = Gl(t.kind, t.place)[a] ?? i
          , s = bc === a || ps(t);
        o.appendChild($t($a(a, t), a === "km" ? "Per km (riders pay at least \u20A6100)" : i === r ? "Normal price" : `Normal price ${y(r)}`, y(i), ps(t) ? null : () => {
            bc = bc === a ? null : a,
            Mi()
        }
        )),
        s && o.appendChild(Ut(Gx(t, a).map(l => ({
            label: l === 0 ? "Free" : y(l),
            sub: l === r ? "normal" : "",
            on: l === i,
            onClick: () => {
                l !== i && so({
                    action: "settings",
                    bid: t.id,
                    menu: {
                        [a]: l
                    }
                })
            }
        }))))
    }
    e.appendChild(o)
}
function Dx(e, t) {
    let n = vt[t.kind]
      , o = ge("Hiring", `${t.staff.length} hired. While you want more than you have, you're on everyone's Jobs page and players can join straight away.`);
    o.appendChild(Ut([0, 1, 2, 3, 5, 8, 10, 15, 20].map(r => ({
        label: r ? `${r} staff` : "Stop hiring",
        sub: r && r < t.staff.length ? "nobody is fired" : "",
        on: r === t.openings,
        onClick: () => {
            r !== t.openings && so({
                action: "settings",
                bid: t.id,
                openings: r
            })
        }
    })))),
    e.appendChild(o);
    let a = ge("Wage per shift", `What each worker gets for a 2-minute shift, from the till. Suggested: at least ${y(n.wage)}. Pay too little and nobody applies.`);
    a.appendChild(Ut([1e3, 2e3, 3e3, 4e3, 5e3, 7500, 1e4, 15e3, 2e4, 3e4, 5e4].map(r => ({
        label: y(r),
        sub: r === n.wage ? "suggested" : r < n.wage ? "low" : "",
        on: r === t.wage,
        onClick: () => {
            r !== t.wage && so({
                action: "settings",
                bid: t.id,
                wage: r
            })
        }
    })))),
    e.appendChild(a);
    let i = ge(`Your staff (${t.staff.length})`, t.staff.length ? "Tap someone to let them go. They get a message, and a shift they're already working is still paid." : "Nobody yet.");
    for (let r of t.staff)
        i.appendChild($t(`@${r.name}`, n.role, "Fire", () => Qm(t, r), "neg"));
    t.staff.length > 1 && i.appendChild(at(`Fire all ${t.staff.length} staff`, () => Qm(t, null), "danger")),
    e.appendChild(i)
}
function Fx(e, t) {
    let n = t.kind === "estate"
      , o = N("div", "gov-stats");
    if (o.append(ct("Till", y(t.till), n ? "rent collected" : "wages are paid from here"), ct("Your wallet", y(A), "")),
    e.appendChild(o),
    !n) {
        let c = ge("Put money in", "From your wallet, so staff can be paid.");
        c.appendChild(Ut([1e4, 5e4, 1e5, 5e5, 1e6].map(p => ({
            label: y(p),
            disabled: p > A,
            onClick: () => so({
                action: "till",
                bid: t.id,
                amount: p
            })
        })))),
        e.appendChild(c)
    }
    let a = ge("Take money out", "To your wallet.");
    a.appendChild(Ut([t.till, 5e4, 1e5, 5e5].filter( (c, p, f) => c > 0 && f.indexOf(c) === p).map(c => ({
        label: c === t.till ? `All \xB7 ${y(c)}` : y(c),
        disabled: c > t.till,
        onClick: () => so({
            action: "till",
            bid: t.id,
            amount: -c
        })
    })))),
    t.till || a.appendChild(N("p", "gov-note", "The till is empty.")),
    e.appendChild(a);
    let i = ge("Other amount", "")
      , r = N("input", "gov-text");
    r.type = "number",
    r.inputMode = "numeric",
    r.min = "1",
    r.step = "100",
    r.placeholder = "Amount in \u20A6",
    r.style.minHeight = "0",
    r.onkeydown = r.onkeyup = c => c.stopPropagation();
    let s = c => {
        let p = Math.floor(+r.value);
        p > 0 ? so({
            action: "till",
            bid: t.id,
            amount: c * p
        }) : g("Type an amount first.")
    }
      , l = N("div", "gov-actions");
    n || l.appendChild(at("Put in", () => s(1))),
    l.appendChild(at("Take out", () => s(-1), n ? "" : "ghost")),
    i.append(r, l),
    e.appendChild(i);
    let u = ge("The numbers", "Since you opened.")
      , d = (t.revenue || 0) - (t.taxPaid || 0) - (t.wagesPaid || 0);
    u.append($t(n ? "Rent collected" : "Made", `${t.sales || 0} ${n ? "payments" : "sales"}`, y(t.revenue || 0)), $t("Tax to the CBN", "", y(t.taxPaid || 0), null, "neg")),
    n || u.append($t("Wages paid", `${t.shifts || 0} shifts`, y(t.wagesPaid || 0), null, "neg"), $t("Profit", "", y(d), null, d < 0 ? "neg" : "")),
    e.appendChild(u)
}
function Yx(e, t) {
    let n = ge("Open hours", `Abuja time. Inside your hours customers can always buy: with staff on shift you keep ${Na(t)}%, self-service ${100 - Sa / 100}%. Taxis and kekes usually run 24 hours.`);
    n.appendChild(Ut(Tp.map(r => ({
        label: ai(r),
        sub: r[0] > r[1] ? "past midnight" : "",
        on: t.hrs?.[0] === r[0] && t.hrs?.[1] === r[1],
        onClick: () => so({
            action: "settings",
            bid: t.id,
            hours: r
        })
    })))),
    e.appendChild(n);
    let o = sr.has(t.id)
      , a = ge(`Keep me on shift while I play: ${o ? "ON" : "OFF"}`, "Your shifts restart by themselves until you leave the game or tap Quit (this phone only).");
    if (a.appendChild(at(o ? "Turn off" : "Turn on", () => {
        o ? (sr.delete(t.id),
        Mi()) : (sr.add(t.id),
        xt ? Mi() : (Yn(),
        Po(t, !0)))
    }
    , o ? "ghost" : "")),
    e.appendChild(a),
    t.kind === "custom") {
        let r = ge("What you sell", `"${t.about}" \xB7 add, rename or remove items.`);
        r.appendChild(at("Edit", () => Ns({
            edit: t
        }), "ghost")),
        e.appendChild(r)
    }
    if (t.kind === "custom") {
        let r = ge("Group", `People find ${t.name} under ${gt[Zn(t)].name} in Shop and Business.`);
        r.appendChild(Ut(Jr.map(s => ({
            label: gt[s].name,
            on: Zn(t) === s,
            onClick: () => {
                Zn(t) !== s && so({
                    action: "settings",
                    bid: t.id,
                    cat: s
                })
            }
        })))),
        e.appendChild(r)
    }
    let i = ge("More", "");
    i.append($t("All businesses", "Who owns what, and how much they make", "", () => fu()), $t("Start another business", "", "", () => {
        Yn(),
        Un()
    }
    ), $t("CBN treasury", "Where the tax goes", "", () => kf( () => E()))),
    e.appendChild(i)
}
function Wx(e) {
    let t = e.letGo;
    if (!t?.at)
        return;
    let n = "al-letgo-" + m.uid
      , o = 0;
    try {
        o = +(localStorage.getItem(n) || 0)
    } catch {}
    if (!(t.at <= o)) {
        try {
            localStorage.setItem(n, String(t.at))
        } catch {}
        delete m.player.job,
        R("You've been let go", `@${t.by} let you go from ${t.n}.${xt?.b?.name === t.n ? " You'll still be paid for the shift you're on." : ""}`, [{
            text: "Find a new job",
            main: !0,
            onClick: () => {
                E(),
                sa()
            }
        }])
    }
}
function Qm(e, t) {
    let n = t ? {
        action: "fire",
        bid: e.id,
        uid: t.uid
    } : {
        action: "fireAll",
        bid: e.id
    }
      , o = t ? `@${t.name}` : `all ${e.staff.length} staff`;
    R(`Fire ${o}?`, "They'll lose this job and get a message saying you let them go.", [{
        text: `Fire ${o}, keep hiring`,
        small: t ? "The job opens up again on the Jobs page" : `You stay on the Jobs page (${e.openings} wanted)`,
        right: "",
        onClick: () => so(n)
    }, {
        text: `Fire ${o}, stop hiring`,
        small: t ? "One fewer staff wanted" : "Staff wanted goes to 0",
        right: "",
        onClick: () => so({
            ...n,
            stopHiring: !0
        })
    }, {
        text: "Cancel",
        onClick: E
    }])
}
function fu() {
    let e = Q()
      , t = He.filter(o => o.kind !== "gov").sort( (o, a) => (a.revenue || 0) - (o.revenue || 0))
      , n = o => ({
        text: o.name,
        small: `@${o.ownerName} \xB7 ${o.kind === "custom" && o.about ? o.about : vt[o.kind].name} \xB7 made ${y(o.revenue || 0)} \xB7 ${o.kind === "estate" ? "collects rent" : `${o.staff.length} staff \xB7 ${Ct(o, e) ? "open now" : "closed"}`}`,
        right: Yo(o) && o.owner !== m.uid ? "Hiring" : "",
        onClick: () => {
            Yo(o) && o.owner !== m.uid && ff(o, fu)
        }
    });
    Os({
        title: "All businesses",
        sub: `${Cr(t.length, "business", "businesses")} in Abuja, by group. Biggest earners first: who owns what, and how much they've made.`,
        back: Ii,
        placeholder: "Search a business, owner or group",
        entries: t.map(o => ({
            cat: Zn(o),
            words: Pc(o),
            made: o.revenue || 0,
            row: n(o)
        })),
        tileSmall: (o, a) => a.length ? `${Cr(a.length, "business", "businesses")} \xB7 made ${y(a.reduce( (i, r) => i + r.made, 0))}` : "none yet",
        extra: (o, a) => a ? [] : [{
            text: `Start a ${gt[o].name.split(" ")[0].toLowerCase()} business`,
            small: "See what's for sale, or create your own",
            right: "",
            onClick: () => Un(o)
        }]
    })
}
st && (window.__bizView = async (e, t) => {
    m || (m = {
        uid: "debug",
        player: {
            home: "kubwa",
            username: "debug",
            money: 0
        }
    }),
    await bt(!0),
    {
        start: Un,
        all: fu,
        shop: Gh,
        create: hu
    }[e](t)
}
);
async function ms() {
    R("Rankings", "Loading\u2026", []);
    let[,e] = await Promise.all([bt(!0), fetch("/api/business?view=rankings").then(o => o.ok ? o.json() : {}).catch( () => ({}))])
      , t = {
        ...zc || {},
        ...e
    }
      , n = He.filter(o => o.kind !== "gov").sort( (o, a) => (a.revenue || 0) - (o.revenue || 0)).slice(0, 10);
    R("Rankings", "Updated every few minutes.", [{
        text: "Richest people",
        small: "Wallet + business tills",
        right: "",
        onClick: () => R("Richest people", "Wallet plus the tills of the businesses they own.", (t.rich || []).map( (o, a) => ({
            text: `${a + 1}. @${o.name}`,
            right: y(o.worth),
            onClick: () => {}
        })), ms)
    }, {
        text: "Poorest people",
        small: "Wallet + business tills, lowest first",
        right: "",
        onClick: () => R("Poorest people", "Wallet plus the tills of the businesses they own. Send them money from a private chat, or give them a job.", (t.poor || []).length ? t.poor.map( (o, a) => ({
            text: `${a + 1}. @${o.name}`,
            right: y(o.worth),
            onClick: () => {}
        })) : [{
            text: "Nobody yet",
            onClick: () => {}
        }], ms)
    }, {
        text: "Biggest employers",
        small: "Most staff",
        right: "",
        onClick: () => R("Biggest employers", "Most people on their payroll.", (t.employers || []).length ? t.employers.map( (o, a) => ({
            text: `${a + 1}. @${o.name}`,
            small: `${o.businesses} business${o.businesses === 1 ? "" : "es"}`,
            right: `${o.staff} staff`,
            onClick: () => {}
        })) : [{
            text: "Nobody has hired anyone yet",
            onClick: () => {}
        }], ms)
    }, {
        text: "Top businesses",
        small: "Most money made",
        right: "",
        onClick: () => R("Top businesses", "Most money made (before tax and wages).", n.map( (o, a) => ({
            text: `${a + 1}. ${o.name}`,
            small: `@${o.ownerName}`,
            right: y(o.revenue || 0),
            onClick: () => {}
        })), ms)
    }])
}
var eg = new Map;
function qx() {
    if (m)
        for (let e of So()) {
            if (eg.has(e.id))
                continue;
            let t = null;
            eg.set(e.id, Yu(ee(W, "businesses", e.id), n => {
                let o = n.data()?.lastSale
                  , a = o?.at?.toMillis?.();
                !o || !a || (t !== null && a !== t && o.by !== m.uid && g(`+${y(o.amt - o.tax)} \xB7 ${o.item === "ride" ? "ride" : $a(o.item)} \xB7 ${n.data().name}`, 3500),
                t = a)
            }
            , () => {}
            ))
        }
}
var gf = []
  , ac = null
  , pu = []
  , xh = []
  , tg = new Map;
async function mu() {
    try {
        let e = await fetch("/api/ads");
        if (e.ok) {
            gf = (await e.json()).ads || [];
            for (let t of pu)
                t.shown = void 0,
                gu(t)
        }
    } catch {}
}
mu();
setInterval( () => !document.hidden && mu(), 900 * 1e3);
var Ux = !0
  , Vx = () => Ux ? He.filter(e => e.owner && e.kind !== "gov").map(e => ({
    id: "biz_" + e.id,
    bid: e.id,
    kind: "everywhere",
    place: "all",
    type: "business",
    name: e.ownerName,
    title: e.name,
    line: e.kind === "custom" && e.about ? e.about : `${vt[e.kind]?.name || "Business"} \xB7 by @${e.ownerName}`,
    house: !0,
    end: 1 / 0
})) : []
  , Jx = () => {
    for (let e of pu)
        e.shown = void 0,
        gu(e)
}
;
function Kx(e, t) {
    let n = [...gf, ...Vx()].filter(a => a.end > Date.now() && (a.kind === "everywhere" || a.kind === e && (e === "taxi" || a.place === t)))
      , o = n.filter(a => !a.house);
    return o.length ? o : n
}
function yf(e, t) {
    let n = document.createElement("canvas");
    n.width = 512,
    n.height = 256;
    let o = new Ke(n);
    o.colorSpace = qe;
    let a = {
        kind: e,
        place: t,
        canvas: n,
        tex: o,
        mat: new ze({
            map: o
        }),
        idx: 0,
        shown: void 0,
        ad: null
    };
    return pu.push(a),
    gu(a),
    a
}
function gu(e) {
    let t = Kx(e.kind, e.place)
      , n = t.length ? t[e.idx % t.length] : null;
    e.ad = n;
    let o = n ? n.id : "none";
    if (o !== e.shown) {
        if (e.shown = o,
        n?.img) {
            let a = tg.get(n.id);
            a || (a = new B0().load(`/api/ads?img=${n.id}`),
            a.colorSpace = qe,
            tg.set(n.id, a)),
            e.mat.map = a
        } else
            hd(e.canvas.getContext("2d"), n),
            e.tex.needsUpdate = !0,
            e.mat.map = e.tex;
        e.mat.needsUpdate = !0
    }
}
setInterval( () => {
    for (let e of pu)
        e.idx++,
        gu(e)
}
, 8e3);
function Wy(e, t=8, n=4, o=4) {
    let a = new Ae
      , i = new Me({
        color: 6119784,
        flatShading: !0
    });
    for (let s of [-t / 3, t / 3]) {
        let l = new ae(new fe(.3,o + n / 2,.3),i);
        l.position.set(s, (o + n / 2) / 2, -.3),
        a.add(l)
    }
    let r = new ae(new fe(t + .4,n + .4,.25),new Me({
        color: 2830134,
        flatShading: !0
    }));
    r.position.set(0, o + n / 2, -.16),
    a.add(r);
    for (let s of [1, -1]) {
        let l = new ae(new Ue(t,n),e.mat);
        l.position.set(0, o + n / 2, s > 0 ? 0 : -.32),
        l.rotation.y = s > 0 ? 0 : Math.PI,
        l.userData.adSpot = e,
        a.add(l),
        xh.push(l)
    }
    return a
}
function yu(e) {
    ac || (ac = yf("taxi", "all"));
    let t = new Me({
        color: 1776411
    })
      , n = new ae(new fe(.12,.9,2.2),[ac.mat, ac.mat, t, t, t, t]);
    n.position.set(0, 2.6, -.2),
    e.add(n);
    for (let o of [-1, 1]) {
        let a = new ae(new Ue(2.8,.62),ac.mat);
        a.position.set(o * 1.035, .68, .1),
        a.rotation.y = o * Math.PI / 2,
        e.add(a)
    }
}
var ng = {
    citygate: "City Gate",
    eaglesquare: "Eagle Square",
    millennium: "Millennium Park",
    mosque: "National Mosque",
    hilton: "Transcorp Hilton",
    ceddiplaza: "Ceddi Plaza",
    christiancentre: "National Christian Centre",
    magicland: "Magic Land",
    yaradua: "Yar'Adua Centre",
    area10: "Area 10 Market (Garki)",
    boutique: "Zuma Boutique",
    ibrofish: "IbroFish"
}
  , Xx = e => e === "clubzuma" ? ue : e === "hospital" ? Se : ng[e] ? yl(ng[e]) : Fn[e]
  , og = (e, t, n) => vn(e, t) || vn(e + n, t) || vn(e - n, t) || vn(e, t + n) || vn(e, t - n);
function Zx() {
    let e = (a, i, r, s) => {
        let l = U.nearest(a, i)
          , [u,d] = l >= 0 && Math.hypot(U.nodes[l][0] - a, U.nodes[l][1] - i) < 400 ? U.nodes[l] : [a, i + 40]
          , c = a - u
          , p = i - d
          , f = Math.hypot(c, p) || 1;
        c /= f,
        p /= f,
        f < 1 && (c = 1,
        p = 0);
        let b = u + c * r[0]
          , $ = d + p * r[0];
        e: for (let T of r)
            for (let M of [0, .5, -.5, 1, -1, 1.6, -1.6, Math.PI]) {
                let _ = Math.cos(M)
                  , V = Math.sin(M)
                  , Y = u + (c * _ - p * V) * T
                  , se = d + (c * V + p * _) * T;
                if (!De(Y, se) && !og(Y, se, s)) {
                    b = Y,
                    $ = se;
                    break e
                }
            }
        return [b, $, Math.atan2(u - b, d - $)]
    }
      , t = (a, i, r) => !De(a, i) && !De(a + r, i) && !De(a - r, i) && !De(a, i + r) && !De(a, i - r) && !og(a, i, r)
      , n = (a, i, r, s, l) => {
        for (let u = r; u <= s; u += 3)
            for (let d = 0; d < 16; d++) {
                let c = d / 16 * Math.PI * 2
                  , p = a + Math.cos(c) * u
                  , f = i + Math.sin(c) * u;
                if (!t(p, f, l))
                    continue;
                let b = U.nearest(p, f)
                  , [$,T] = b >= 0 ? U.nodes[b] : [a, i];
                return [p, f, Math.hypot($ - p, T - f) > 2 ? Math.atan2($ - p, T - f) : Math.atan2(a - p, i - f)]
            }
        return null
    }
      , o = (a, i, r, s, l, u, d) => {
        let[c,p,f] = n(r, s, d[0], d[1], u[0] / 2 + .5) || e(r, s, l, u[0] / 2 + 1)
          , b = Wy(yf(a, i), ...u);
        b.position.set(c, 0, p),
        b.rotation.y = f,
        J.add(b)
    }
    ;
    for (let a of ["City Gate", "Eagle Square", "Ceddi Plaza", "Transcorp Hilton"]) {
        let i = yl(a);
        if (!i)
            continue;
        let[r,s,l] = e(i.x - 25, i.z + 25, [7, 9, 11, 14], 1.2)
          , u = Oe(ji());
        yu(u),
        u.position.set(r, 0, s),
        u.rotation.y = l + Math.PI / 2,
        J.add(u)
    }
    for (let a of Object.keys(Co.billboard)) {
        let i = Xx(a);
        i && o("billboard", a, i.x, i.z, [14, 18, 24, 30, 38], [8, 4, 4], [10, 40])
    }
    for (let a of Object.keys(Co.restaurant)) {
        let i = Lt.find(r => r.id === a);
        i && o("restaurant", a, i.x, i.z, [8, 11, 14, 18, 24], [6, 3, 2.4], [5, 20])
    }
}
Ps(Zx);
function Qx(e) {
    let t = e.ad
      , n = to[e.kind]
      , o = Co[e.kind][e.place];
    if (!t)
        return R("Advertise here", `${n.name} \xB7 ${o} \xB7 ${y(n.price)} (real money) for 7 days. Every player who passes sees it.`, [{
            text: "Put my ad here",
            main: !0,
            onClick: () => {
                E(),
                xc({
                    kind: e.kind,
                    place: e.place
                })
            }
        }]);
    if (t.bid) {
        let a = He.find(r => r.id === t.bid)
          , i = a && fo(a);
        return R(t.title, t.line, [...i && !i.anywhere ? [{
            text: "Go there",
            main: !0,
            onClick: () => {
                E(),
                cn(i.name, i.x, i.z)
            }
        }] : [], {
            text: "Advertise here too",
            small: `From ${y(to.street.price)} a week`,
            onClick: () => {
                E(),
                xc()
            }
        }])
    }
    if (t.type === "campaign")
        return R(`VOTE @${t.name}`, `${t.title}${t.line ? ` \xB7 "${t.line}"` : ""}`, [{
            text: "See the election",
            main: !0,
            onClick: () => {
                E(),
                la()
            }
        }]);
    R(t.title, t.line || o, [...t.link ? [{
        text: "Visit",
        main: !0,
        onClick: () => {
            E(),
            window.open(t.link, "_blank", "noopener")
        }
    }] : [], {
        text: "Advertise here too",
        small: `From ${y(to.street.price)} a week`,
        onClick: () => {
            E(),
            xc()
        }
    }])
}
var Ko = {}
  , qy = () => ft() || H?.candidates?.find(e => e.uid === m?.uid)?.office || null;
async function xc(e) {
    if (re(),
    !m)
        return ne("advertise");
    Ko = {
        ...e || {}
    },
    H || await Vn(!0);
    let t = qy();
    R("Advertise", "Real ads that every player sees, for 7 days. Paid in real naira by bank transfer or card.", [{
        text: "Campaign poster",
        small: t ? `VOTE @${m.player.username} \xB7 ${Ie[t].title} \xB7 up right after you pay` : "For election candidates. Run first: Phone \u2192 Politics",
        disabled: !t,
        onClick: () => ag("campaign")
    }, {
        text: "Business ad",
        small: "Your photo or logo, name, a line and a link \xB7 live after a quick check",
        onClick: () => ag("business")
    }, {
        text: "My ads",
        small: "What you bought and how long it runs",
        onClick: t2
    }, ...m.uid === Li ? [{
        text: "Review business ads",
        small: "Approve or reject before they show",
        onClick: o2
    }] : []])
}
function ag(e) {
    if (Ko.type = e,
    Ko.kind)
        return Ko.place ? kh() : ig();
    R("Where should it go?", "Prices are for 7 days, in real naira.", Object.entries(to).map( ([t,n]) => ({
        text: n.name,
        small: n.small,
        right: y(n.price),
        onClick: () => {
            Ko.kind = t,
            t === "taxi" || t === "everywhere" ? (Ko.place = "all",
            kh()) : ig()
        }
    })))
}
function ig() {
    let e = Ko.kind
      , t = to[e];
    R(t.name, `Pick a spot \xB7 ${y(t.price)} for 7 days.`, Object.entries(Co[e]).map( ([n,o]) => {
        let a = gf.filter(r => r.kind === e && r.place === n && !r.house).length
          , i = a >= t.slots;
        return {
            text: o,
            small: i ? "Fully booked" : `${t.slots - a} of ${t.slots} spaces free`,
            right: i ? "Full" : "Pick",
            disabled: i,
            onClick: () => {
                Ko.place = n,
                kh()
            }
        }
    }
    ))
}
function e2(e) {
    return new Promise( (t, n) => {
        let o = new Image
          , a = URL.createObjectURL(e);
        o.onload = () => {
            URL.revokeObjectURL(a);
            let i = document.createElement("canvas");
            i.width = 640,
            i.height = 320;
            let r = Math.max(640 / o.width, 320 / o.height)
              , s = o.width * r
              , l = o.height * r;
            i.getContext("2d").drawImage(o, (640 - s) / 2, (320 - l) / 2, s, l);
            let u = .82
              , d = i.toDataURL("image/jpeg", u);
            for (; d.length > dd && u > .4; )
                u -= .12,
                d = i.toDataURL("image/jpeg", u);
            d.length > dd ? n(new Error("too big")) : t([d, i])
        }
        ,
        o.onerror = () => {
            URL.revokeObjectURL(a),
            n(new Error("bad image"))
        }
        ,
        o.src = a
    }
    )
}
function kh() {
    let e = Ko
      , t = to[e.kind]
      , n = Co[e.kind][e.place]
      , o = qy();
    R(e.type === "campaign" ? "Your campaign poster" : "Your business ad", `${t.name} \xB7 ${n} \xB7 7 days \xB7 ${y(t.price)}`, []);
    let a = document.createElement("div");
    a.className = "ad-form";
    let i = document.createElement("canvas");
    i.width = 512,
    i.height = 256,
    i.className = "ad-preview",
    a.appendChild(i);
    let r = (T, M, _="text") => {
        let V = document.createElement("input");
        return V.type = _,
        V.placeholder = T,
        V.maxLength = M,
        V.className = "ad-input",
        V.addEventListener("keydown", Y => Y.stopPropagation()),
        V.addEventListener("keyup", Y => Y.stopPropagation()),
        V.addEventListener("input", () => p()),
        a.appendChild(V),
        V
    }
    , s = "", l = null, u = null, d = null, c;
    if (e.type === "campaign")
        c = r("Your slogan, e.g. Light for every street!", Vl.slogan);
    else {
        u = r("Business name", Vl.title),
        c = r("One line about it (optional)", Vl.line),
        d = r("Link, e.g. https://wa.me/234\u2026 (optional)", 200, "url");
        let T = document.createElement("label");
        T.className = "ad-file",
        T.append("Add a photo or logo (optional)");
        let M = document.createElement("input");
        M.type = "file",
        M.accept = "image/*",
        T.appendChild(M),
        a.appendChild(T),
        M.onchange = async () => {
            let _ = M.files[0];
            if (_)
                try {
                    [s,l] = await e2(_),
                    T.firstChild.textContent = "Photo added \u2713 \xB7 tap to change",
                    p()
                } catch {
                    g("Couldn't use that picture. Try another one.")
                }
        }
    }
    function p() {
        let T = i.getContext("2d");
        if (l)
            return T.drawImage(l, 0, 0, 512, 256);
        hd(T, e.type === "campaign" ? {
            type: "campaign",
            name: m.player.username,
            title: o ? Ie[o].title : "",
            line: c.value
        } : {
            type: "business",
            title: u.value || "Your business",
            line: c.value
        })
    }
    p();
    let f = document.createElement("button");
    f.type = "button",
    f.className = "w-main act-btn";
    let b = `Pay ${y(t.price)} \xB7 bank transfer or card`;
    f.textContent = b,
    f.onclick = async () => {
        if (e.type === "business" && !u.value.trim())
            return g("Add your business name.");
        f.disabled = !0,
        f.textContent = "Opening payment page\u2026";
        try {
            let T = await $e(Te).currentUser.getIdToken()
              , M = await fetch("/api/ads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + T
                },
                body: JSON.stringify({
                    action: "buy",
                    kind: e.kind,
                    place: e.place,
                    type: e.type,
                    title: u?.value || "",
                    line: c.value,
                    link: d?.value || "",
                    img: s
                })
            })
              , _ = await M.json().catch( () => ({}));
            if (!M.ok || !_.url) {
                g(_.error || "Something went wrong. Try again.", 5e3),
                f.disabled = !1,
                f.textContent = b;
                return
            }
            try {
                localStorage.setItem("al-adpay", JSON.stringify({
                    id: _.id,
                    t: Date.now()
                }))
            } catch {}
            location.href = _.url
        } catch {
            g("Network problem. Try again."),
            f.disabled = !1,
            f.textContent = b
        }
    }
    ,
    a.appendChild(f);
    let $ = document.createElement("p");
    $.className = "ad-note",
    $.textContent = e.type === "campaign" ? "Your poster goes up as soon as the payment is confirmed, and runs for 7 days." : "We check business ads before they go live (no scams or rude content). If yours isn't approved, you get your money back.",
    a.appendChild($),
    h("#act-list").append(a)
}
var Er = async e => {
    let t = await $e(Te).currentUser.getIdToken()
      , n = await fetch("/api/ads", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + t
        },
        body: JSON.stringify(e)
    })
      , o = await n.json().catch( () => ({}));
    if (!n.ok)
        throw new Error(o.error || "Something went wrong");
    return o
}
;
async function Uy(e) {
    let t = (new URLSearchParams(location.search).get("ad") || "").split("?")[0] || null
      , n = null;
    try {
        n = JSON.parse(localStorage.getItem("al-adpay") || "null")
    } catch {}
    let o = e || t || (n && Date.now() - n.t < 24 * 36e5 ? n.id : null);
    if (t && history.replaceState(null, "", location.pathname),
    !o)
        return;
    let a = () => {
        try {
            localStorage.removeItem("al-adpay")
        } catch {}
    }
    ;
    try {
        let {status: i} = await Er({
            action: "verify",
            id: o
        });
        (i === "active" || i === "review") && Ye("ad_paid"),
        i === "active" ? (a(),
        g("Payment received! Your poster is up for 7 days \u{1F389}", 7e3),
        setTimeout(mu, 6e4)) : i === "review" ? (a(),
        g("Payment received! Your ad goes live as soon as it's checked.", 7e3)) : i === "failed" ? (a(),
        g("That payment didn't go through, so nothing was charged.", 6e3)) : t && g("Waiting for the bank to confirm your payment. We'll check again next time you open the game.", 6e3)
    } catch (i) {
        /not found/i.test(i.message) && a()
    }
}
async function t2() {
    let e = [];
    try {
        e = (await Er({
            action: "mine"
        })).ads
    } catch (o) {
        return g(o.message)
    }
    let t = {
        active: o => `Live until ${new Date(o.end).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short"
        })}`,
        review: () => "Paid \xB7 waiting for approval",
        pending: () => "Payment not confirmed",
        failed: () => "Payment failed",
        rejected: () => "Not approved \xB7 refund on its way",
        underpaid: () => "Payment amount was wrong \xB7 contact us"
    }
      , n = m.uid === Li;
    R("My ads", e.length ? n ? "Tap a live ad to move it (owner tool)." : "Everything you've bought." : "You haven't bought any ads yet.", e.map(o => ({
        text: `${to[o.kind].name} \xB7 ${Co[o.kind][o.place]}`,
        small: `${o.type === "campaign" ? "Campaign poster" : o.title} \xB7 ${(t[o.status] || ( () => o.status))(o)}`,
        right: n && o.status === "active" ? "Move" : "",
        onClick: () => n && o.status === "active" && n2(o)
    })))
}
function n2(e) {
    let t = async (n, o) => {
        E();
        try {
            await Er({
                action: "move",
                id: e.id,
                kind: n,
                place: o
            }),
            g(`Moved to ${to[n].name} \xB7 ${Co[n][o]}. Showing within a minute.`, 5e3),
            setTimeout(mu, 65e3)
        } catch (a) {
            g(a.message)
        }
    }
    ;
    R("Move this ad to\u2026", `Runs until ${new Date(e.end).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short"
    })}.`, Object.entries(to).map( ([n,o]) => ({
        text: o.name,
        small: o.small,
        onClick: () => {
            let a = Object.entries(Co[n]);
            if (a.length === 1)
                return t(n, a[0][0]);
            R(o.name, "Pick a spot.", a.map( ([i,r]) => ({
                text: r,
                onClick: () => t(n, i)
            })))
        }
    })))
}
async function o2() {
    let e = [];
    try {
        e = (await Er({
            action: "pending"
        })).ads
    } catch (t) {
        return g(t.message)
    }
    R("Review business ads", e.length ? "Approve to put them live for 7 days. Reject = refund them from the Fincra dashboard." : "Nothing waiting.", []);
    for (let t of e) {
        let n = document.createElement("div");
        if (n.className = "ad-review",
        t.img) {
            let i = document.createElement("img");
            i.src = `/api/ads?img=${t.id}`,
            n.appendChild(i)
        }
        let o = document.createElement("div");
        o.innerHTML = "<b></b><br><small></small>",
        o.querySelector("b").textContent = `${t.title} \xB7 ${to[t.kind].name} \xB7 ${Co[t.kind][t.place]}`,
        o.querySelector("small").textContent = [t.line, t.link, `by @${t.name}`, `paid \u20A6${(t.paid || 0).toLocaleString()}`].filter(Boolean).join(" \xB7 "),
        n.appendChild(o);
        let a = document.createElement("div");
        a.className = "row";
        for (let[i,r] of [["Approve", !0], ["Reject", !1]]) {
            let s = document.createElement("button");
            s.type = "button",
            s.className = r ? "act main" : "act danger",
            s.textContent = i,
            s.onclick = async () => {
                try {
                    await Er({
                        action: "review",
                        id: t.id,
                        ok: r
                    }),
                    n.remove(),
                    g(r ? "Approved. It shows within a minute." : "Rejected. Refund it in the Fincra dashboard.")
                } catch (l) {
                    g(l.message)
                }
            }
            ,
            a.appendChild(s)
        }
        n.appendChild(a),
        h("#act-list").append(n)
    }
}
async function a2() {
    if (m?.uid === Li)
        try {
            let e = (await Er({
                action: "pending"
            })).ads.length;
            e && setTimeout( () => g(`${e} business ad${e > 1 ? "s" : ""} waiting for your approval \xB7 Phone \u2192 Ads`, 7e3), 4e3)
        } catch {}
}
var H = null
  , Vy = 0
  , rg = 0;
function i2(e) {
    let t = H && Object.entries(H.offices || {}).find( ([,i]) => i?.uid === e)?.[0]
      , n = H && Object.entries(H.roles || {}).find( ([,i]) => i?.uid === e)?.[0]
      , o = t === "minister" ? "Minister of FCT" : t?.startsWith("senator") ? "Senator of FCT" : n ? Ra[n].short : null
      , a = H?.cases?.[e];
    return a ? `${o ? o + " \xB7 " : ""}${a.stage === "investigating" ? "Under EFCC investigation" : a.stage === "trial" ? "On trial (EFCC)" : "Charged by EFCC"}` : o
}
var Lc = () => H?.roles?.igp && H.police?.x || 1
  , ft = () => m && H && Object.entries(H.offices || {}).find( ([,e]) => e?.uid === m.uid)?.[0] || null
  , Lo = () => H ? new Date(H.ends).toLocaleString("en-GB", {
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: !0,
    timeZone: "Africa/Lagos"
}) : ""
  , Jy = e => `al-pal-${m?.uid}-${e.until}`;
function r2() {
    let e = H?.deeds?.[`palliative_${m?.player.home}`];
    if (!e || e.until < Q() || !(e.left > 0))
        return !1;
    try {
        return !localStorage.getItem(Jy(e))
    } catch {
        return !0
    }
}
async function Vn(e) {
    if (!e && Date.now() - Vy < 6e4)
        return H;
    try {
        let t = await fetch("/api/politics");
        t.ok && sl(await t.json())
    } catch {}
    return H
}
var sg = null;
function sl(e) {
    let t = ft();
    H = e,
    Vy = Date.now();
    let n = Q()
      , o = ft();
    hp(1 - Xl(H, n) / 100),
    Mn && (Mn = Mn.filter(i => !i.official),
    o && Mn.push(pd)),
    o && !t && g(`You are the ${Ie[o].title}! Phone \u2192 Politics to run your office. Your official car is in My stuff \u2192 Cars.`, 7e3),
    Zy(),
    Xy(),
    Ky(),
    s2(),
    k?.refreshTags(),
    Gt === "govview" && !h("#gov-panel").hidden && xf(),
    Gt === "polview" && !h("#gov-panel").hidden && Mr(),
    clearTimeout(rg);
    let a = H.ends - n;
    a > 0 && a < 12 * 36e5 && (rg = setTimeout( () => Vn(!0), a + 25e3 + Math.random() * 6e4))
}
function Ky() {
    if (!m || !H)
        return;
    let t = ["minister", `senator_${m.player.home}`].map(n => [n, H.offices?.[n]]).filter( ([n,o]) => o?.msg && o.uid !== m.uid && Q() - o.msg.at < 3 * 864e5 && ( () => {
        try {
            return +(localStorage.getItem(`al-govmsg-${n}`) || 0) < o.msg.at
        } catch {
            return !1
        }
    }
    )());
    if (t.length) {
        if (!h("#act-sheet").hidden || w === "cell")
            return setTimeout(Ky, 8e3);
        for (let[n,o] of t)
            try {
                localStorage.setItem(`al-govmsg-${n}`, String(o.msg.at))
            } catch {}
        R("\u{1F4E2} Message from your government", "", t.map( ([n,o]) => ({
            text: `"${o.msg.text}"`,
            small: `${Ie[n].short} @${o.name} \xB7 ${ma(o.msg.at)}`,
            onClick: () => {
                E(),
                $n(Bs)
            }
        })))
    }
}
function s2() {
    if (!m || !H)
        return;
    let e = ft()
      , t = e && H.offices[e].complaints || 0
      , n = `al-compl-${m?.uid}-${H?.term}`
      , o = 0;
    try {
        o = +(localStorage.getItem(n) || 0)
    } catch {}
    t > o && g(`\u{1F4E8} ${t - o} new complaint${t - o === 1 ? "" : "s"} for you \xB7 Phone \u2192 Government`, 6e3);
    try {
        localStorage.setItem(n, String(t))
    } catch {}
}
var ma = e => {
    let t = Math.max(0, Math.round((Q() - e) / 6e4));
    return t < 1 ? "just now" : t < 60 ? `${t} min ago` : t < 1440 ? `${Math.round(t / 60)} h ago` : `${Math.round(t / 1440)} d ago`
}
;
function Xy() {
    let e = H?.results;
    if (!e || Q() - e.at > 24 * 36e5)
        return;
    let t = "al-results-" + e.term;
    try {
        if (localStorage.getItem(t))
            return
    } catch {}
    if (!h("#act-sheet").hidden || w === "cell")
        return setTimeout(Xy, 8e3);
    try {
        localStorage.setItem(t, "1")
    } catch {}
    R("\u{1F5F3} Election results", "The polls have closed. Winners take office now, until the next election.", e.list.map( ({office: n, ranked: o}) => {
        let a = Ie[n]
          , i = o[0];
        return {
            text: a.title,
            small: i ? o.length > 1 ? o.slice(1).map(r => `@${r.name} ${r.votes}`).join(" \xB7 ") : "Ran unopposed" : "Nobody ran, so it's vacant",
            right: i ? `@${i.name} \xB7 ${i.votes} vote${i.votes === 1 ? "" : "s"}` : "",
            onClick: () => {
                E(),
                la()
            }
        }
    }
    ))
}
function Zy() {
    let e = h("#ticker .track span");
    if (!e)
        return;
    sg ?? (sg = e.textContent);
    let t = Q()
      , n = 24 * 36e5
      , o = (H?.news || []).filter(c => t - c.t < n).map(c => "POLITICS: " + c.text)
      , a = He.filter(c => t - (c.created || 0) < n).sort( (c, p) => p.created - c.created).slice(0, 6).map(c => `BUSINESS: @${c.ownerName} now owns ${c.name}${c.kind === "estate" ? `: every renter in ${Ta(c.place)[0].toUpperCase() + Ta(c.place).slice(1)} now pays rent to them` : Yo(c) ? ` and is hiring (${y(c.wage)} a shift)` : ""}`)
      , i = H && vr(H.ends) === vr(t)
      , r = H ? `${H.candidates?.length || 0} candidates \xB7 vote now: Phone \u2192 Politics` : ""
      , s = H ? i ? [`ELECTION RESULTS TODAY: polls close at 8 pm and winners are announced right after \xB7 ${r}`] : [`ELECTION: next one closes ${Lo()} \xB7 ${r}`] : []
      , l = H?.offices?.minister
      , u = He.find(c => c.id === Ql)
      , d = [...l?.msg && t - l.msg.at < 3 * n ? [`MINISTER @${l.name}: "${l.msg.text}"`] : [], ...H?.cbn ? [`CBN: ${y(H.cbn)} in the treasury \xB7 tax is ${Va()}% on every sale \xB7 see every naira in Phone \u2192 Government \u2192 Public accounts`] : [], ...u && Yo(u) ? [`JOBS: the FCT Civil Service is hiring ${u.openings - u.staff.length} civil servant${u.openings - u.staff.length === 1 ? "" : "s"} at ${y(u.wage)} a shift (Earn money \u2192 Jobs)`] : []];
    e.textContent = [...o, ...s, ...d, ...a, sg].join(" \xB7 "),
    e.parentElement.style.animationDuration = Math.max(60, Math.round(e.textContent.length / 7)) + "s"
}
async function wu(e) {
    try {
        let t = await $e(Te).currentUser.getIdToken()
          , n = await fetch("/api/politics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + t
            },
            body: JSON.stringify({
                action: "dsale",
                ...e
            })
        })
          , o = await n.json().catch( () => ({}));
        if (!n.ok)
            return {
                error: o.error
            };
        let a = e.kind === "homeRides" ? `homeRides_${m.player.home}` : e.kind;
        return H?.deeds?.[a] && typeof o.left == "number" && (H.deeds[a].fund = o.left),
        typeof o.money == "number" && o.pay && (A = o.money,
        m.player.money = A,
        _e()),
        o
    } catch {
        return {
            error: "Network problem"
        }
    }
}
async function an(e) {
    E();
    try {
        let t = await $e(Te).currentUser.getIdToken()
          , n = await fetch("/api/politics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + t
            },
            body: JSON.stringify(e)
        })
          , o = await n.json().catch( () => ({}));
        if (e.action === "claim" && (n.ok || /already/.test(o.error || ""))) {
            let a = H?.deeds?.[`palliative_${m.player.home}`];
            if (a)
                try {
                    localStorage.setItem(Jy(a), "1")
                } catch {}
        }
        if (!n.ok)
            return g(o.error || "Something went wrong. Try again.", 5e3),
            !1;
        if (o.url) {
            try {
                localStorage.setItem("al-runpay", JSON.stringify({
                    id: o.id,
                    t: Date.now()
                }))
            } catch {}
            location.href = o.url;
            return
        }
        return o.state && sl(o.state),
        e.action === "vote" && Ye("vote"),
        o.msg === "EFCC" ? (g(`\u{1F6A8} EFCC! You were caught embezzling. You've lost your office, everything you took and a ${Kl.fine * 100}% fine on your bank account.`, 7e3),
        !0) : (g(o.msg, 5e3),
        !0)
    } catch {
        return g("Network problem. Try again."),
        !1
    }
}
async function Qy(e) {
    let t = (new URLSearchParams(location.search).get("run") || "").split("?")[0] || null
      , n = null;
    try {
        n = JSON.parse(localStorage.getItem("al-runpay") || "null")
    } catch {}
    let o = e || t || (n && Date.now() - n.t < 24 * 36e5 ? n.id : null);
    if (t && history.replaceState(null, "", location.pathname),
    !!o)
        try {
            let a = await $e(Te).currentUser.getIdToken()
              , i = await fetch("/api/politics", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + a
                },
                body: JSON.stringify({
                    action: "runVerify",
                    id: o
                })
            })
              , r = await i.json().catch( () => ({}));
            if (!r.waiting)
                try {
                    localStorage.removeItem("al-runpay")
                } catch {}
            if (i.ok && !r.waiting && Ye("run"),
            r.state && sl(r.state),
            r.waiting && !t)
                return;
            setTimeout( () => g(r.msg || r.error || "Couldn't confirm your registration. Try again later.", 7e3), 2e3)
        } catch {}
}
var Tr = null
  , vh = -1;
async function la() {
    if (re(),
    E(),
    !m)
        return ne("vote");
    if (await Vn(!0),
    !H)
        return g("Couldn't load politics. Try again.");
    if (Gt = "polview",
    h("#gov-panel").hidden = !1,
    Mr(),
    vh !== H.term) {
        let e = await ll({
            action: "myVotes"
        });
        e && (Tr = e.votes || {},
        vh = H.term,
        Mr())
    }
}
var ew = e => {
    let t = Ie[e];
    R(`Run for ${t.title}?`, `Registration is ${y(Ji(e))} in real money (bank transfer or card), not refunded. Get the most votes by ${Lo()} to win. Then put up campaign posters (Phone \u2192 Ads).`, [{
        text: `Pay ${y(Ji(e))} and register`,
        main: !0,
        onClick: () => an({
            action: "run",
            office: e
        })
    }])
}
;
function l2(e, t) {
    R(`Vote for @${t.name}?`, `For ${Ie[e].title}. Votes are final: you can't change it before the election closes ${Lo()}.`, [{
        text: `Vote for @${t.name}`,
        main: !0,
        onClick: async () => {
            await an({
                action: "vote",
                office: e,
                cand: t.uid
            }) && ((Tr || (Tr = {}))[e] = t.uid,
            Mr())
        }
    }, {
        text: "Cancel",
        onClick: E
    }])
}
function c2(e) {
    let t = Math.max(0, Math.round(e / 6e4))
      , n = Math.floor(t / 1440)
      , o = Math.floor(t % 1440 / 60);
    return n ? `${n} day${n === 1 ? "" : "s"} ${o} h` : o ? `${o} h ${t % 60} min` : `${t} min`
}
function u2(e, t) {
    let n = Ie[e]
      , o = H.offices?.[e]
      , a = m.uid
      , i = m.player.home
      , r = !n.area || n.area === i
      , s = H.candidates.filter(f => f.office === e).sort( (f, b) => b.votes - f.votes)
      , l = s.reduce( (f, b) => f + b.votes, 0)
      , u = H.candidates.find(f => f.uid === a)?.office
      , d = Tr?.[e]
      , c = N("section", "gv-card pv-race" + (t ? " pv-ballot" : ""));
    c.append(N("small", "gv-kick", n.area ? `Senator \xB7 ${Et[n.area]}${n.area === i ? " \xB7 your area" : ""}` : "Minister of the FCT \xB7 everyone votes"));
    let p = N("button", "pv-now");
    if (p.type = "button",
    p.onclick = () => _s(e),
    p.append(N("span", "", o ? `Now: @${o.name}` : H.removed?.[e] ? `Vacant: @${H.removed[e].name} was removed` : "Vacant now"), N("em", "", o ? hi(o) === null ? "no ratings \u2192" : `\u{1F44D} ${hi(o)}% \u2192` : "")),
    c.appendChild(p),
    s.length || c.appendChild(N("p", "gov-note", r ? "Nobody's running yet. Be the first!" : "Nobody's running yet.")),
    s.forEach( (f, b) => {
        let $ = N("div", "pv-cand" + (d === f.uid ? " pv-mine" : ""))
          , T = N("div", "pv-who");
        T.append(Mh(f.name), ( () => {
            let M = N("div");
            M.append(N("b", "", `@${f.name}${f.uid === a ? " (you)" : ""}`));
            let _ = N("div", "gv-bar")
              , V = N("i");
            return V.style.width = `${l ? Math.round(100 * f.votes / l) : 0}%`,
            _.appendChild(V),
            M.append(_, N("small", "", `${f.votes} vote${f.votes === 1 ? "" : "s"}${l ? ` \xB7 ${Math.round(100 * f.votes / l)}%` : ""}`)),
            M
        }
        )()),
        $.appendChild(T),
        b === 0 && f.votes > 0 && (s.length === 1 || f.votes > s[1].votes) && $.appendChild(N("em", "pv-lead", "Leading")),
        d === f.uid ? $.appendChild(N("em", "pv-voted", "\u2713 Your vote")) : r && !d && f.uid !== a && $.appendChild(at("Vote", () => l2(e, f))),
        c.appendChild($)
    }
    ),
    r && d && !s.some(f => f.uid === d) && c.appendChild(N("p", "gov-note", "\u2713 You've voted in this race.")),
    r) {
        let f = N("div", "pv-foot");
        u === e ? f.appendChild(N("span", "pv-you", "You're running in this race: get people to vote for you")) : u || f.appendChild(at(`Run for this office \xB7 ${y(Ji(e))}`, () => ew(e), "ghost")),
        o && o.uid !== a && f.appendChild(at(`Impeach @${o.name}${o.impeach ? ` (${o.impeach})` : ""}`, () => yt(`Vote to impeach @${o.name}?`, `If enough ${n.area ? `${Et[n.area]} residents` : "people"} vote, they lose the office.`, "Vote to impeach", {
            action: "impeach",
            office: e
        }, () => la()), "ghost")),
        f.children.length && c.appendChild(f)
    } else
        c.appendChild(N("p", "gov-note", `Only ${Et[n.area]} residents vote here.`));
    return c
}
function Mr() {
    if (Gt !== "polview" || h("#gov-panel").hidden || !H)
        return;
    let e = m.player.home
      , t = ft()
      , n = Q()
      , o = H.deeds?.[`palliative_${e}`]
      , a = H.candidates.length;
    h("#gov-kicker").textContent = "FCT Election",
    h("#gov-title").textContent = "Vote for Abuja's leaders",
    h("#gov-sub").textContent = `Voting closes ${Lo()} (Abuja time) \xB7 ${a} candidate${a === 1 ? "" : "s"}`,
    h("#gov-tabs").innerHTML = "";
    let i = h("#gov-body");
    i.innerHTML = "";
    let r = Em(n)
      , s = N("section", "gv-card pv-clock");
    if (s.append(N("small", "gv-kick", H.term === 0 ? "The first election" : "This week's election"), N("b", "", `${c2(H.ends - n)} left`)),
    r) {
        let f = N("div", "gv-bar")
          , b = N("i");
        b.style.width = `${Math.min(100, Math.round(100 * (n - r) / (H.ends - r)))}%`,
        f.appendChild(b),
        s.appendChild(f)
    }
    if (s.appendChild(N("span", "", H.term === 0 ? "Nobody's in office yet: run now!" : "The winners take office when it closes and hold it for a week.")),
    i.appendChild(s),
    o && o.until > n && o.left > 0) {
        let f = no("pv-pal", () => an({
            action: "claim"
        }).then( () => Mr()));
        f.append(N("small", "gv-kick", "Palliative for your area"), N("b", "", "Collect \u20A610,000 \u2192"), N("span", "", `From Senator @${o.by} \xB7 ${o.left} left`)),
        i.appendChild(f)
    }
    if (t) {
        let f = no("gv-mine", cw);
        f.append(N("small", "gv-kick", "Your office"), N("b", "", Ie[t].title), N("span", "", `Treasury ${y(H.treasury[t] || 0)} \xB7 message your people, complaints, good deeds \u2192`)),
        i.appendChild(f)
    }
    let l = ["minister", `senator_${e}`].filter(f => Ie[f]).filter(f => !Tr?.[f]).length;
    i.appendChild(N("p", "gov-label", Tr ? l ? `Your ballot \xB7 ${l} vote${l === 1 ? "" : "s"} left` : "Your ballot \xB7 all done \u2713" : "Your ballot"));
    for (let f of ["minister", `senator_${e}`])
        Ie[f] && i.appendChild(u2(f, !0));
    i.appendChild(N("p", "gov-label", "Other areas' Senate races"));
    let u = N("div", "gv-grid");
    for (let[f,b] of Object.entries(Ie)) {
        if (!b.area || b.area === e)
            continue;
        let $ = H.candidates.filter(M => M.office === f).sort( (M, _) => _.votes - M.votes)
          , T = no("gv-sen" + ($.length ? "" : " gv-vacant"), () => Ch(f));
        T.append(N("small", "gv-kick", Et[b.area]), N("b", "", $[0]?.votes ? `@${$[0].name} leads` : $.length ? `${$.length} running` : "Nobody running"), N("span", "", $.length ? `${$.length} candidate${$.length === 1 ? "" : "s"} \xB7 ${$.reduce( (M, _) => M + _.votes, 0)} votes \u2192` : "See the race \u2192")),
        u.appendChild(T)
    }
    i.appendChild(u);
    let d = no("gv-strip pv-link", () => $n(la));
    d.append(N("b", "", "\u{1F3DB}\uFE0F Government"), N("span", "", "Who's in office now, the treasury, ratings, complain to your Senator \u2192")),
    i.appendChild(d);
    let c = Object.keys(H.cases || {}).length
      , p = no("gv-strip", () => xi(la));
    p.append(N("b", "", `\u2696\uFE0F EFCC & courts \xB7 ${c ? `${c} open case${c === 1 ? "" : "s"}` : "no open cases"}`), N("span", "", "Every case is public \u2192")),
    i.appendChild(p)
}
function Ch(e) {
    let t = Ie[e]
      , n = H.offices?.[e]
      , o = !t.area || t.area === m.player.home
      , a = m.uid
      , i = H.candidates.filter(s => s.office === e).sort( (s, l) => l.votes - s.votes)
      , r = H.candidates.find(s => s.uid === a);
    R(t.title, (n ? `Now: @${n.name}, elected with ${n.votes} vote${n.votes === 1 ? "" : "s"}.` : H.removed?.[e] ? bf(e) : "Nobody holds this office right now.") + ` Next election closes ${Lo()}.`, [...n && o && n.uid !== a ? [{
        text: `Impeach @${n.name}`,
        small: `${n.impeach || 0} impeachment vote${n.impeach === 1 ? "" : "s"} so far`,
        right: "Vote",
        onClick: () => an({
            action: "impeach",
            office: e
        })
    }] : [], ...i.map(s => ({
        text: `@${s.name}`,
        small: `${s.votes} vote${s.votes === 1 ? "" : "s"}`,
        right: s.uid === a ? "You" : o ? "Vote" : "",
        disabled: !o || s.uid === a,
        onClick: () => an({
            action: "vote",
            office: e,
            cand: s.uid
        })
    })), ...i.length ? [] : [{
        text: "Nobody is running yet",
        small: "Be the first!",
        onClick: () => {}
    }], o ? {
        text: r ? "You're already running in this election" : "Run for this office",
        small: `Registration ${y(Ji(e))} real money${t.area ? ` \xB7 residents of ${Et[t.area]} vote` : " \xB7 everyone votes"}`,
        right: r ? "" : y(Ji(e)),
        disabled: !!r,
        onClick: () => ew(e)
    } : {
        text: `Only ${Et[t.area]} residents vote for this Senator`,
        small: "You can vote for your own area's Senator and the Minister.",
        onClick: () => {}
    }])
}
var Cs = e => {
    let t = Math.max(0, Math.round((e - Q()) / 6e4));
    return t >= 60 ? `${Math.floor(t / 60)} h ${t % 60} min` : `${t} min`
}
  , Eh = e => e.stage === "investigating" ? `Under investigation \xB7 charges in ${Cs(e.until)}` : e.stage === "charged" ? `Charged \xB7 must answer within ${Cs(e.until)}` : `On trial \xB7 verdict in ${Cs(e.until)}${e.lawyer ? ` \xB7 defended by @${e.lawyer.name}` : " \xB7 no lawyer"}`
  , tw = () => H && m && Object.entries(H.roles || {}).find( ([,e]) => e?.uid === m.uid)?.[0] || null;
async function ll(e) {
    try {
        let t = await $e(Te).currentUser.getIdToken()
          , n = await fetch("/api/politics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + t
            },
            body: JSON.stringify(e)
        })
          , o = await n.json().catch( () => ({}));
        return o.state && sl(o.state),
        n.ok ? o : (g(o.error || "Something went wrong. Try again.", 5e3),
        null)
    } catch {
        return g("Network problem. Try again."),
        null
    }
}
function d2(e, t) {
    let n = H.cases?.[e];
    if (!n)
        return t();
    let o = Math.round((H.efccPlea || di.plea) * 100)
      , a = [{
        text: "1. Investigation",
        small: `Opened ${ho(n.opened)} ${xr(n.opened)}${n.by ? ` by EFCC Chairman @${n.by}` : ""} \xB7 lasts a day`,
        right: n.stage === "investigating" ? "Now" : "\u2713"
    }, {
        text: "2. Charged",
        small: n.traced != null ? `${y(n.owing || 0)} of public money missing \xB7 ${y(n.traced)} traced \xB7 ${n.stage === "charged" ? `plea bargain (return ${o}%) or court, within ${Cs(n.until)}` : "answered"}` : "After the investigation",
        right: n.stage === "charged" ? "Now" : n.stage === "trial" ? "\u2713" : ""
    }, {
        text: "3. Court",
        small: n.stage === "trial" ? `Verdict in ${Cs(n.until)}${n.adjourned ? " (adjourned once)" : ""} \xB7 ${n.lawyer ? `defended by Barrister @${n.lawyer.name} (won ${n.lawyer.won || 0}, lost ${n.lawyer.lost || 0})` : "no lawyer"}${H.roles?.agf ? ` \xB7 prosecuted by AGF @${H.roles.agf.name}` : ""}` : "If they plead not guilty",
        right: n.stage === "trial" ? "Now" : ""
    }];
    R(`EFCC case: @${n.name}`, `${n.office ? `${Ie[n.office]?.title || "Official"} \xB7 ` : ""}over ${n.why}. ${Eh(n)}.`, a.map(i => ({
        ...i,
        onClick: Ee
    })), t)
}
async function xi(e=$n) {
    if (await Vn(!0),
    !H)
        return g("Couldn't load. Try again.");
    let t = m.uid
      , n = H.cases?.[t]
      , o = H.owed?.[t]
      , a = tw()
      , i = Math.round((H.efccPlea || di.plea) * 100)
      , r = [];
    n && (r.push({
        head: !0,
        text: "Your case"
    }, {
        text: `EFCC case: ${n.why}`,
        small: Eh(n),
        onClick: Ee
    }),
    n.stage === "charged" && r.push({
        text: `Plea bargain: return ${y(Math.round((n.traced || 0) * i / 100))}`,
        small: `${i}% of the ${y(n.traced || 0)} traced. You resign and walk free, keeping the rest.`,
        right: "Take it",
        onClick: () => yt("Take the plea bargain?", `You return ${y(Math.round((n.traced || 0) * i / 100))}, resign any office, and the case ends. It's in the news.`, "Take the plea bargain", {
            action: "plea"
        }, () => xi(e))
    }, {
        text: "Go to court",
        small: `A 2-day trial: convicted (${di.jailMins / 60} h in jail, all ${y(n.traced || 0)} taken + a fine, out of office), acquitted (keep it all), or adjourned. A lawyer helps.`,
        right: "Plead not guilty",
        onClick: () => yt("Go to court?", "The trial lasts 2 days. Hire a lawyer to improve your chances. If you're convicted you go to jail and lose your office.", "Go to court", {
            action: "court"
        }, () => xi(e))
    }, {
        text: "Do nothing",
        small: "When the time runs out you're convicted",
        onClick: Ee
    }),
    n.stage === "trial" && !n.lawyer && r.push({
        text: "Hire a lawyer",
        small: `Court fees ${y(wn.court[0])}\u2013${y(wn.court[1])} \xB7 a lawyer who wins more helps more`,
        right: "Lawyers",
        onClick: () => $i("court")
    })),
    o && r.push({
        text: `You owe the EFCC ${y(o.amount)}`,
        small: "Stolen money they couldn't recover. Everyone can see it until you repay.",
        right: "Repay",
        disabled: o.amount > A,
        onClick: () => an({
            action: "repayEfcc"
        })
    }),
    (a === "efcc" || a === "agf") && r.push({
        text: `Your powers as ${Ra[a].short}`,
        small: Ra[a].does,
        right: "Open",
        onClick: () => jn(a)
    });
    let s = Object.entries(H.cases || {}).filter( ([u]) => u !== t);
    r.push({
        head: !0,
        text: s.length ? `Open cases (${s.length})` : "Open cases: none"
    });
    for (let[u,d] of s)
        r.push({
            text: `@${d.name}${d.office ? ` \xB7 ${Ie[d.office]?.short || ""}` : ""}`,
            small: `${d.why} \xB7 ${Eh(d)}`,
            right: "Details",
            onClick: () => d2(u, () => xi(e))
        });
    (H.verdicts || []).length && r.push({
        head: !0,
        text: "Recent outcomes"
    }, ...H.verdicts.map(u => ({
        text: u.text,
        small: ma(u.at),
        onClick: Ee
    })));
    let l = Object.entries(H.owed || {}).filter( ([u]) => u !== t);
    l.length && r.push({
        head: !0,
        text: "Owe the EFCC"
    }, ...l.map( ([,u]) => ({
        text: `@${u.name}`,
        small: "Convicted \xB7 stolen money not yet recovered",
        right: y(u.amount),
        onClick: Ee
    }))),
    R("EFCC & courts", `Officials who take public money aren't arrested on the spot. Each withdrawal may open an EFCC investigation (at least a 50% chance, more the more they take). It lasts a day; they stay free and in office. They choose: a plea bargain (return ${i}%, resign, walk free) or court (a 2-day trial). Doing nothing means conviction.`, r, e)
}
function jn(e) {
    let t = Ra[e]
      , n = H.roles?.[e]
      , o = m.uid
      , a = n?.uid === o
      , i = Object.entries(H.apps?.[e] || {}).sort( ([,c], [,p]) => (p.recs?.length || 0) - (c.recs?.length || 0) || c.at - p.at)
      , r = ft()
      , s = r?.startsWith("senator")
      , l = r === "minister"
      , u = !!H.apps?.[e]?.[o]
      , d = [];
    if (n && d.push({
        text: a ? `You are the ${t.title}` : `@${n.name}`,
        small: `Appointed ${ho(n.since)} \xB7 ${y(ql)} salary every term from the CBN`,
        onClick: Ee
    }),
    a) {
        if (e === "efcc") {
            let c = [...Object.entries(H.offices || {}).filter( ([,p]) => p && p.uid !== o).map( ([p,f]) => [f.uid, `${Ie[p].short} @${f.name}`]), ...Object.entries(H.owed || {}).map( ([p,f]) => [p, `@${f.name} (owes the EFCC)`])].filter( ([p]) => !H.cases?.[p]);
            d.push({
                head: !0,
                text: "Your powers"
            }, {
                text: "Open an investigation",
                small: "Into a sitting official (or anyone owing the EFCC). It runs for a day, then they're charged.",
                right: "Choose",
                onClick: () => R("Open an investigation", "It's in the news and lasts a day.", c.length ? c.map( ([p,f]) => ({
                    text: f,
                    right: "Investigate",
                    onClick: () => yt(`Investigate ${f}?`, "The EFCC investigates for a day, then charges what it can trace.", "Open the investigation", {
                        action: "efccOpen",
                        target: p
                    }, () => jn(e))
                })) : [{
                    text: "Nobody to investigate",
                    onClick: Ee
                }], () => jn(e))
            }, ...Object.entries(H.cases || {}).filter( ([,p]) => p.stage === "investigating").map( ([p,f]) => ({
                text: `Drop the investigation into @${f.name}`,
                small: "It's public: the news will say you dropped it",
                right: "Drop",
                onClick: () => yt(`Drop the case against @${f.name}?`, "Everyone will see that you dropped it.", "Drop it", {
                    action: "efccDrop",
                    target: p
                }, () => jn(e))
            })), {
                text: `Plea-bargain share: ${Math.round((H.efccPlea || di.plea) * 100)}%`,
                small: "What the accused returns in a plea bargain (60\u201380%)",
                right: "Change",
                onClick: () => R("Plea-bargain share", "How much of what's traced the accused must return.", [60, 65, 70, 75, 80].map(p => ({
                    text: `${p}%`,
                    right: Math.round((H.efccPlea || di.plea) * 100) === p ? "\u2713" : "",
                    onClick: () => an({
                        action: "efccPlea",
                        pct: p / 100
                    })
                })), () => jn(e))
            })
        }
        if (e === "agf") {
            let c = H.roles.agf?.dropped === H.term
              , p = Object.entries(H.cases || {}).filter( ([,f]) => f.stage !== "investigating");
            d.push({
                head: !0,
                text: "Your powers"
            }, {
                text: "You lead the prosecution",
                small: "While there's an Attorney General, the accused are less likely to be acquitted",
                onClick: Ee
            }, ...c ? [{
                text: "You've discontinued a case this term",
                small: "Once per term",
                onClick: Ee
            }] : p.map( ([f,b]) => ({
                text: `Discontinue the case against @${b.name}`,
                small: "Nolle prosequi: once per term, and it's in the news",
                right: "Discontinue",
                onClick: () => yt(`Discontinue the case against @${b.name}?`, "The case ends. You can only do this once per term and everyone will see it.", "Discontinue", {
                    action: "agfDrop",
                    target: f
                }, () => jn(e))
            })))
        }
        e === "igp" && d.push({
            head: !0,
            text: "Your powers: how often police stop and search"
        }, ...Ul.map(c => ({
            text: c.name,
            small: `${c.small} \xB7 it's in the news \xB7 change it once an hour`,
            right: Lc() === c.x ? "\u2713 Now" : "Set",
            disabled: Lc() === c.x,
            onClick: () => yt(`Police: ${c.name}?`, `Stop-and-search across the city: ${c.small}. It's in the news.`, "Set it", {
                action: "police",
                x: c.x
            }, () => jn(e))
        }))),
        d.push({
            text: "Resign",
            small: "Leave this office",
            right: "",
            onClick: () => yt(`Resign as ${t.title}?`, "Someone else can apply and be appointed.", "Resign", {
                action: "resignRole"
            }, $n)
        })
    }
    n && l && !a && d.push({
        text: `Remove @${n.name}`,
        small: "As Minister you can remove them; then you can appoint someone else",
        right: "Remove",
        onClick: () => yt(`Remove @${n.name}?`, "It's in the news.", "Remove", {
            action: "sack",
            role: e
        }, () => jn(e))
    }),
    d.push({
        head: !0,
        text: i.length ? `Applicants (${i.length})` : "Applicants: none yet"
    });
    for (let[c,p] of i) {
        let f = (p.recs || []).includes(o);
        d.push({
            text: `@${p.name}${c === o ? " (you)" : ""}`,
            small: `${(p.recs || []).length} Senator recommendation${(p.recs || []).length === 1 ? "" : "s"} \xB7 applied ${ma(p.at)}`,
            right: l && !n ? "Appoint" : s && c !== o ? f ? "Recommended \u2713" : "Recommend" : "",
            onClick: l && !n ? () => yt(`Appoint @${p.name} as ${t.title}?`, `They get ${y(ql)} from the CBN now and every term. It's in the news.`, "Appoint", {
                action: "appoint",
                role: e,
                cand: c
            }, () => jn(e)) : s && c !== o && !f ? () => an({
                action: "recommend",
                role: e,
                cand: c
            }) : Ee
        })
    }
    !a && !n && d.push(u ? {
        text: "Withdraw your application",
        right: "Withdraw",
        onClick: () => an({
            action: "withdraw",
            role: e
        })
    } : {
        text: "Apply for this office",
        small: t.lawyer ? "You must be a lawyer (Phone \u2192 Lawyers)" : "Anyone can apply",
        right: "Apply",
        main: !0,
        onClick: () => an({
            action: "apply",
            role: e
        })
    }),
    R(t.title, `${t.does}. Salary ${y(ql)} every term from the CBN. Anyone can apply${t.lawyer ? " (it must be a lawyer)" : ""}: if more than one applies, the Senators recommend and the Minister chooses. If nobody decides within a day, or there's no Minister, the game appoints the one with the most recommendations.`, d, $n)
}
var ic = null
  , Nc = 0;
async function h2(e) {
    if (!e && ic && Date.now() - Nc < 3e4)
        return ic;
    try {
        let t = await fetch("/api/politics?view=lawyers");
        t.ok && (ic = (await t.json()).lawyers || [],
        Nc = Date.now())
    } catch {}
    return ic || []
}
var wf = () => {
    let e = m?.player.jail;
    return !!e?.at && e.at.toMillis() + e.mins * 6e4 > Q()
}
;
async function $i(e) {
    if (!m)
        return ne("see the lawyers");
    e || (e = wf() ? "jail" : H?.cases?.[m.uid]?.stage === "trial" ? "court" : null),
    R("Lawyers", "Loading\u2026", []);
    let t = await h2(!0)
      , n = t.find(a => a.uid === m.uid)
      , o = [];
    n ? o.push({
        text: "My practice",
        small: `Police cell ${y(n.jailFee)} \xB7 court ${y(n.courtFee)} \xB7 won ${n.won || 0}, lost ${n.lost || 0}`,
        right: "Fees",
        onClick: () => nw(n)
    }) : o.push({
        text: "Become a lawyer",
        small: `The Call to the Bar: ${y(ui)} and a 5-question exam`,
        right: "How",
        main: !0,
        onClick: Th
    }),
    o.push({
        head: !0,
        text: t.length ? `Lawyers in Abuja (${t.length}), best record first` : "No lawyers yet: be the first"
    });
    for (let a of t)
        a.uid !== m.uid && o.push({
            text: `Barrister @${a.name}`,
            small: `Police cell ${y(a.jailFee)} \xB7 court ${y(a.courtFee)} \xB7 won ${a.won || 0}, lost ${a.lost || 0}`,
            right: e ? `Hire \xB7 ${y(e === "jail" ? a.jailFee : a.courtFee)}` : "",
            onClick: e ? () => f2(a, e) : Ee
        });
    R("Lawyers", `Lawyers get people out of the police cell faster (what's left of the time is cut in half) and defend officials in EFCC cases. Police cell ${y(wn.jail[0])}\u2013${y(wn.jail[1])}, court ${y(wn.court[0])}\u2013${y(wn.court[1])}.${e ? " Tap a lawyer to ask them: they'll take it if they're around." : ""}`, o)
}
async function f2(e, t) {
    let n = t === "jail" ? e.jailFee : e.courtFee;
    if (n > A)
        return g(`@${e.name} charges ${y(n)}: you don't have enough.`);
    E();
    let o = await ll({
        action: "callLawyer",
        lawyer: e.uid,
        kind: t
    });
    o?.id && (k?.groupInvite(e.uid, "l:" + o.id),
    g(o.msg, 5e3))
}
async function p2(e, t) {
    if (t - e.t > 10 * 6e4)
        return k.clearFrom(e.host);
    let n;
    try {
        let a = await fetch(`/api/politics?call=${encodeURIComponent(e.home.slice(2))}`);
        a.ok && (n = (await a.json()).call)
    } catch {}
    if (!n || n.status !== "open" || n.lawyer !== m.uid)
        return k.clearFrom(e.host);
    let o = Math.floor(n.fee * (H?.taxBp || 1e3) / 1e4);
    R(`\u2696\uFE0F @${n.clientName} needs a lawyer`, n.kind === "jail" ? "They're in the police cell. Take the case and what's left of their time is cut in half." : "They're on trial in an EFCC case. Take it and you defend them: your record counts in court.", [{
        text: "Take the case",
        small: `${y(n.fee)} fee \xB7 you get ${y(n.fee - o)} after ${y(o)} tax to the CBN`,
        main: !0,
        onClick: async () => {
            E(),
            k.clearFrom(e.host);
            let a = await ll({
                action: "takeCall",
                id: n.id
            });
            a?.msg && g(a.msg, 5e3)
        }
    }, {
        text: "Not now",
        onClick: () => {
            E(),
            k.clearFrom(e.host)
        }
    }])
}
function nw(e) {
    let t = (n, o, a) => R(`${o} fee`, `What you charge (${y(wn[n][0])}\u2013${y(wn[n][1])}).`, a.map(i => ({
        text: y(i),
        right: (n === "jail" ? e.jailFee : e.courtFee) === i ? "\u2713" : "",
        onClick: async () => {
            E();
            let r = await ll({
                action: "lawyerFees",
                jailFee: n === "jail" ? i : e.jailFee,
                courtFee: n === "court" ? i : e.courtFee
            });
            r?.msg && (g(r.msg),
            Nc = 0,
            $i())
        }
    })), () => nw(e));
    R("My practice", `Won ${e.won || 0}, lost ${e.lost || 0}. Clients see your fees and record.`, [{
        text: "Police cell fee",
        small: "Getting someone's time in the cell cut in half",
        right: y(e.jailFee),
        onClick: () => t("jail", "Police cell", [5e3, 1e4, 2e4, 3e4, 5e4])
    }, {
        text: "Court fee",
        small: "Defending someone in an EFCC trial",
        right: y(e.courtFee),
        onClick: () => t("court", "Court", [5e4, 1e5, 2e5, 3e5, 5e5])
    }], () => $i())
}
function Th() {
    R("The Call to the Bar", `Become a lawyer: pay ${y(ui)} (to the CBN) and pass a 5-question exam: 3 questions on Abuja Life's laws and 2 on Nigerian law every lawyer should know. You need ${sm} of 5. Pass and you're listed under Phone \u2192 Lawyers with your own fees and a record of cases won and lost.`, [{
        head: !0,
        text: "Abuja Life's laws to know"
    }, {
        text: "Police stops",
        small: "Answer politely. Rudeness gets you locked up.",
        onClick: Ee
    }, {
        text: "Officials who steal",
        small: `The EFCC may investigate (a day), then charge what it traces. Plea bargain (return ${Math.round((H?.efccPlea || di.plea) * 100)}%, resign, walk free) or court (2 days: convicted, acquitted or adjourned). Ignore it for 6 hours and you're convicted.`,
        onClick: Ee
    }, {
        text: "Lawyers",
        small: `In the police cell a lawyer cuts what's left of the time in half (${y(wn.jail[0])}\u2013${y(wn.jail[1])}). In court a lawyer defends (${y(wn.court[0])}\u2013${y(wn.court[1])}). Part of every fee is tax to the CBN.`,
        onClick: Ee
    }, {
        text: "The appointed offices",
        small: "Players apply to be EFCC Chairman, Attorney General (must be a lawyer) or IGP. The Senators recommend; the Minister chooses. The Attorney General can discontinue one charged case per term.",
        onClick: Ee
    }, {
        head: !0,
        text: "Nigerian law"
    }, {
        text: "Study the basics",
        small: "The Constitution, your rights when arrested, the courts, the EFCC and ICPC, the Attorney General and the IGP, plea bargains under the ACJA 2015",
        onClick: Ee
    }, {
        text: `Take the exam \xB7 ${y(ui)} if you pass`,
        small: A < ui ? `You need ${y(ui)}` : "You only pay if you pass",
        right: "Start",
        main: !0,
        disabled: A < ui,
        onClick: () => m2()
    }], () => $i())
}
function m2() {
    let e = cm(m.uid, Math.floor(Q() / lm))
      , t = {}
      , n = o => {
        if (o >= e.length)
            return ll({
                action: "bar",
                answers: t,
                jailFee: 1e4,
                courtFee: 1e5
            }).then(r => {
                r?.msg ? (g(r.msg, 6e3),
                Nc = 0,
                $i()) : Th()
            }
            );
        let a = e[o]
          , i = a.a.map( (r, s) => s).sort( () => Math.random() - .5);
        R(`Question ${o + 1} of ${e.length}`, a.q, i.map(r => ({
            text: a.a[r],
            right: "",
            onClick: () => {
                t[a.id] = r,
                n(o + 1)
            }
        })), o ? () => n(o - 1) : Th)
    }
    ;
    n(0)
}
var bf = e => {
    let t = H.removed?.[e];
    return t ? `Vacant: @${t.name} was ${t.why} and removed from office.` : "Vacant: nobody won."
}
  , Bs = () => {
    E(),
    Zh(),
    h("#menu").hidden = !1
}
  , ow = Bs;
async function $n(e) {
    if (typeof e == "function" && (ow = e),
    re(),
    E(),
    !m)
        return ne("see the government");
    if (await Vn(!0),
    !H)
        return g("Couldn't load the government. Try again.");
    Gt = "govview",
    h("#gov-panel").hidden = !1,
    xf()
}
st && (window.__polView = async e => (m || (m = {
    uid: "debug",
    player: {
        home: "kubwa",
        username: "debug",
        money: 0
    }
}),
await Vn(!0),
e && (Tr = e,
vh = H.term),
Gt = "polview",
h("#gov-panel").hidden = !1,
Mr(),
H.candidates));
st && (window.__govView = async () => {
    m || (m = {
        uid: "debug",
        player: {
            home: "kubwa",
            username: "debug",
            money: 0
        }
    }),
    await Vn(!0),
    Gt = "govview",
    h("#gov-panel").hidden = !1,
    xf()
}
);
var aw = e => {
    let t = 0;
    for (let n of String(e))
        t = (t * 31 + n.charCodeAt(0)) % 360;
    return t
}
;
function Mh(e) {
    let t = N("span", "gv-avatar", e ? e[0].toUpperCase() : "?");
    return t.style.background = e ? `hsl(${aw(e)} 45% 42%)` : "#c9c1ae",
    t
}
function lg(e) {
    let t = hi(e)
      , n = N("div", "gv-bar")
      , o = N("i");
    o.style.width = `${t ?? 0}%`,
    n.appendChild(o);
    let a = N("div", "gv-approval");
    return a.append(n, N("small", "", t === null ? "No ratings yet" : `\u{1F44D} ${t}% \xB7 ${iw(e)}`)),
    a
}
function no(e, t) {
    let n = N("button", "gv-card " + e);
    return n.type = "button",
    n.onclick = t,
    n
}
function xf() {
    if (Gt !== "govview" || h("#gov-panel").hidden || !H)
        return;
    let e = m.player.home
      , t = ft()
      , n = tw()
      , o = bd(t, e)
      , a = Object.entries(Ie)
      , i = a.filter( ([D]) => H.offices?.[D]).length;
    h("#gov-kicker").textContent = "FCT Government",
    h("#gov-title").textContent = "Who runs Abuja",
    h("#gov-sub").textContent = `${i} of ${a.length} seats filled \xB7 the election closes ${Lo()}`,
    h("#gov-tabs").innerHTML = "";
    let r = h("#gov-body");
    r.innerHTML = "";
    let s = N("div", "gov-stats")
      , l = (D, K, L, S, C="") => {
        let v = N("button", "gov-stat gv-stat " + C);
        return v.type = "button",
        v.onclick = S,
        v.append(N("small", "", D), N("b", "", K), N("span", "", L)),
        v
    }
      , u = Object.keys(H.cases || {}).length
      , d = Ul.find(D => D.x === Lc()) || Ul[1];
    if (s.append(l("CBN treasury", y(H.cbn || 0), "public accounts \u2192", () => kf($n)), l("Tax on every sale", `${Va()}%`, "set by the Minister", Ee), l("EFCC cases", `${u}`, u ? "open now \u2192" : "none open \u2192", () => xi($n), u ? "bad" : ""), l("Police", d.name, H.roles?.igp ? `set by IGP @${H.roles.igp.name}` : "no IGP: normal", () => jn("igp"))),
    r.appendChild(s),
    t || n) {
        let D = no("gv-mine", t ? cw : () => jn(n));
        D.append(N("small", "gv-kick", "Your office"), N("b", "", t ? Ie[t].title : Ra[n].title), N("span", "", t ? "Manage your office, your people's complaints, good deeds \u2192" : "Your powers and your office \u2192")),
        r.appendChild(D)
    }
    r.appendChild(N("p", "gov-label", "Executive"));
    let c = H.offices?.minister
      , p = no("gv-exec", () => _s("minister"))
      , f = N("div", "gv-who");
    f.append(Mh(c?.name), ( () => {
        let D = N("div");
        return D.append(N("small", "gv-kick", "Minister of the FCT"), N("b", "", c ? `@${c.name}` : "Vacant"), N("span", "", c ? `In office since ${ho(c.since)}` : bf("minister"))),
        D
    }
    )()),
    p.appendChild(f),
    c && (p.appendChild(lg(c)),
    c.msg && p.appendChild(N("p", "gv-msg", `"${c.msg.text}"`))),
    r.appendChild(p),
    r.appendChild(N("p", "gov-label", "The Senate"));
    let b = N("div", "gv-grid");
    for (let[D,K] of a.filter( ([L]) => L !== "minister").sort( ([L], [S]) => (S === `senator_${e}`) - (L === `senator_${e}`))) {
        let L = H.offices?.[D]
          , S = K.area === e
          , C = no("gv-sen" + (S ? " gv-yours" : "") + (L ? "" : " gv-vacant"), () => _s(D));
        C.append(N("small", "gv-kick", `${Et[K.area]}${S ? " \xB7 your Senator" : ""}`));
        let v = N("div", "gv-who");
        v.append(Mh(L?.name), N("b", "", L ? `@${L.name}` : "Vacant")),
        C.appendChild(v),
        C.appendChild(L ? lg(L) : N("span", "gv-run", "Run in the next election \u2192")),
        b.appendChild(C)
    }
    r.appendChild(b),
    r.appendChild(N("p", "gov-label", "Justice & security \xB7 appointed"));
    let $ = N("div", "gv-grid gv-grid3")
      , T = {
        efcc: () => `${u} open case${u === 1 ? "" : "s"}`,
        agf: () => H.roles?.agf?.dropped === H.term ? "used this term's discontinuation" : "prosecutes EFCC cases",
        igp: () => `police: ${d.name.toLowerCase()}`
    }
      , M = {
        efcc: "scale",
        agf: "gavel",
        igp: "siren"
    };
    for (let[D,K] of Object.entries(Ra)) {
        let L = H.roles?.[D]
          , S = Object.keys(H.apps?.[D] || {}).length
          , C = no("gv-role" + (L ? "" : " gv-vacant"), () => jn(D))
          , v = !L && S && (t === "minister" ? "Choose one" : t?.startsWith("senator") ? "Recommend" : "")
          , I = N("span", "gv-icon");
        I.innerHTML = xe(M[D], 18),
        C.append(I, N("small", "gv-kick", K.short), N("b", "", L ? `@${L.name}` : "Vacant"), N("span", "", L ? T[D]() : S ? `${S} applied` : "Anyone can apply \u2192")),
        v && C.appendChild(N("em", "gv-badge", v)),
        $.appendChild(C)
    }
    r.appendChild($);
    let _ = no("gv-strip", () => xi($n))
      , V = H.verdicts?.[0];
    _.append(N("b", "", `\u2696\uFE0F EFCC & courts \xB7 ${u ? `${u} open case${u === 1 ? "" : "s"}` : "no open cases"}`), N("span", "", V ? `Latest: ${V.text}` : "Every case is public: tap to see them \u2192")),
    r.appendChild(_);
    let Y = (H.candidates || []).length
      , se = no("gv-strip gv-vote", la);
    se.append(N("b", "", `\u{1F5F3}\uFE0F Election closes ${Lo()}`), N("span", "", `${Y} running \xB7 vote, or run for Senator or Minister \u2192`)),
    r.appendChild(se),
    o && H.offices?.[o] && H.offices[o].uid !== m.uid && r.appendChild(at(`Complain to ${Ie[o].short} @${H.offices[o].name}`, () => sw(o), "ghost"))
}
function _s(e) {
    let t = Ie[e]
      , n = H.offices?.[e]
      , o = m.player.home
      , a = !t.area || t.area === o
      , i = bd(ft(), o);
    if (!n)
        return R(t.title, `${bf(e)} The seat stays empty until the next election closes ${Lo()}.`, [{
            text: "See the election",
            small: "Run, or vote for someone",
            right: "Open",
            onClick: () => Ch(e)
        }], $n);
    let r = t.area ? `${Et[t.area]} residents` : "everyone in Abuja"
      , s = km(e, o) && n.uid !== m.uid
      , l = y2(e);
    R(`${t.short} @${n.name}`, `${t.title} \xB7 ${n.after ? `runner-up with ${n.votes} vote${n.votes === 1 ? "" : "s"}, took over after @${n.after.name} was ${n.after.why}` : `elected with ${n.votes} vote${n.votes === 1 ? "" : "s"}`}. Performance: ${hi(n) === null ? "not rated yet" : `${hi(n)}% approval`} (${iw(n)}).`, [...s ? [{
        text: "\u{1F44D} Doing a good job",
        small: l === 1 ? "Your rating" : `Rate @${n.name}'s performance`,
        right: `${n.up || 0}`,
        disabled: l === 1,
        onClick: () => cg(e, 1)
    }, {
        text: "\u{1F44E} Doing a bad job",
        small: l === -1 ? "Your rating" : "You can change your rating any time this term",
        right: `${n.down || 0}`,
        disabled: l === -1,
        onClick: () => cg(e, -1)
    }] : n.uid === m.uid ? [] : [{
        text: `Only ${Et[t.area]} residents rate this Senator`,
        small: `\u{1F44D} ${n.up || 0} \xB7 \u{1F44E} ${n.down || 0}`,
        onClick: () => {}
    }], ...a ? [{
        text: n.msg ? `"${n.msg.text}"` : "No message yet",
        small: n.msg ? `Message to ${r} \xB7 ${ma(n.msg.at)}` : `${t.short} @${n.name} hasn't posted a message`,
        onClick: () => {}
    }] : [{
        text: `Messages go to ${r} only`,
        small: t.area ? `You live in ${Et[o]}` : "",
        onClick: () => {}
    }], ...i === e && n.uid !== m.uid ? [{
        text: `Complain to @${n.name}`,
        small: e === "minister" ? "As a Senator, you can take issues to the Minister" : `Only ${Et[t.area]} residents can complain to this Senator`,
        right: "Write",
        onClick: () => sw(e)
    }] : e === "minister" ? [{
        text: "Only Senators can complain to the Minister",
        small: "Take your issue to your area's Senator",
        onClick: () => {}
    }] : a ? [] : [{
        text: `Only ${Et[t.area]} residents can complain here`,
        small: "Complain to your own area's Senator",
        onClick: () => {}
    }], ...e === "minister" ? g2(n) : [], {
        text: "Election",
        small: `Impeach, or vote for the next ${t.short}`,
        right: "Open",
        onClick: () => Ch(e)
    }], $n)
}
async function kf(e) {
    if (typeof e != "function" && (e = $n),
    await Vn(),
    !H)
        return g("Couldn't load the public accounts. Try again.");
    await bt(!0);
    let t = He.find(a => a.id === Ql)
      , n = H.ledger || []
      , o = a => a.uid ? `${a.kind === "bail" ? "Police" : Ie[a.office]?.short || "Government"} @${a.by}` : a.by || "FCT Government";
    R("Public accounts", `CBN: ${y(H.cbn || 0)} (the last ${y(Zl)} is a locked reserve). Tax on every sale: ${Va()}%. Everything the government spends or takes in (including police bail) is listed here.`, [{
        text: "CBN",
        small: `Spendable by the Minister: ${y(H.treasury?.minister || 0)}`,
        right: y(H.cbn || 0),
        onClick: () => {}
    }, ...t ? [{
        text: "Civil service payroll",
        small: `${y(t.wagesPaid || 0)} paid in ${t.shifts || 0} shift${t.shifts === 1 ? "" : "s"} \xB7 ${t.staff.length} civil servant${t.staff.length === 1 ? "" : "s"} at ${y(t.wage)} a shift`,
        right: y(t.till),
        onClick: () => {}
    }] : [], ...n.length ? n.map(a => ({
        text: a.what,
        small: `${o(a)} \xB7 ${ma(a.at)}`,
        right: a.amount ? `${a.amount < 0 ? "\u2212" : "+"}${y(Math.abs(a.amount))}` : "",
        neg: a.amount < 0,
        onClick: () => {}
    })) : [{
        text: "No government spending yet",
        small: "Deeds, payroll and withdrawals will show here",
        onClick: () => {}
    }]], e)
}
function g2(e) {
    let t = Object.entries(H.offices || {}).filter( ([r,s]) => s && Ie[r]?.short === "Senator").length
      , n = ec(t)
      , o = (e.senate || []).length
      , a = Ie[ft()]?.short === "Senator"
      , i = (e.senate || []).includes(m.uid);
    return a ? [{
        text: "Senate: impeach the Minister",
        small: t < 2 ? "Needs at least 2 Senators in office" : `${o} of ${n} Senators have voted${i ? " \xB7 you voted" : ""}`,
        right: i ? "Voted" : "Vote",
        disabled: i || t < 2,
        onClick: () => R(`Impeach Minister @${e.name}?`, `If ${n} of the ${t} Senators vote, the Minister is removed and the office is vacant until the next election. Your vote is in the news.`, [{
            text: "Vote to impeach",
            main: !0,
            onClick: () => an({
                action: "senateImpeach"
            })
        }], $n)
    }] : o ? [{
        text: "Senate impeachment",
        small: `${o} of ${n} Senators have voted to remove the Minister`,
        onClick: () => {}
    }] : []
}
var iw = e => {
    let t = (e.up || 0) + (e.down || 0);
    return t ? `${t} rating${t === 1 ? "" : "s"}` : "no ratings yet"
}
  , rw = e => `al-rate-${m?.uid}-${H?.term}-${e}`
  , y2 = e => {
    try {
        return +(localStorage.getItem(rw(e)) || 0)
    } catch {
        return 0
    }
}
;
async function cg(e, t) {
    if (await an({
        action: "rate",
        office: e,
        v: t
    }) && H.offices?.[e]) {
        try {
            localStorage.setItem(rw(e), String(t))
        } catch {}
        _s(e)
    }
}
function bu(e, t, n, o, a, i, r, s) {
    R(e, t, [{
        text: a,
        main: !0,
        onClick: () => r(u.value)
    }], s);
    let l = document.createElement("div");
    l.className = "fb-post";
    let u = document.createElement("textarea");
    u.maxLength = o,
    u.placeholder = n,
    u.value = i || "",
    u.onkeydown = u.onkeyup = p => p.stopPropagation();
    let d = document.createElement("small");
    d.className = "sheet-sub",
    d.style.margin = "0";
    let c = () => {
        d.textContent = `${o - u.value.length} characters left`
    }
    ;
    u.oninput = c,
    c(),
    l.append(u, d),
    h("#act-list").prepend(l),
    setTimeout( () => u.focus(), 50)
}
function sw(e) {
    let t = H.offices?.[e];
    t && bu(`Complain to ${Ie[e].short} @${t.name}`, `They'll see your name and your message. ${e === "minister" ? "Speak for your area." : "Roads, prices, police, palliative\u2026 tell them what's wrong."} Up to 5 per term.`, "What's the problem?", wd, "Send complaint", "", n => {
        if (n.trim().length < 3)
            return g("Write your complaint first.");
        an({
            action: "complain",
            text: n
        })
    }
    , () => _s(e))
}
var w2 = [["overview", "Overview", "landmark"], ["laws", "Laws", "gavel"], ["money", "Money", "wallet"], ["people", "People", "users"], ["powers", "Powers", "siren"]]
  , ki = "overview"
  , wi = null;
async function lw(e) {
    if (re(),
    E(),
    !m)
        return ne("run an office");
    if (await Vn(!0),
    !H || !ft())
        return g("You don't hold an office right now.");
    e && (ki = e),
    wi = null,
    Gt = "gov",
    await bt(!0),
    h("#gov-panel").hidden = !1,
    $r()
}
var cw = () => lw();
function Yn() {
    h("#gov-panel").hidden = !0,
    Gt === "govview" ? (Gt = "gov",
    ow?.()) : Gt === "polview" && (Gt = "gov")
}
h("#gov-close").addEventListener("click", Yn);
var N = (e, t, n) => {
    let o = document.createElement(e);
    return t && (o.className = t),
    n != null && (o.textContent = n),
    o
}
;
function ge(e, t, n="") {
    let o = N("section", "gov-box " + n);
    return e && o.appendChild(N("h3", "", e)),
    t && o.appendChild(N("p", "gov-note", t)),
    o
}
function at(e, t, n="", o=!1) {
    let a = N("button", "gov-btn " + n, e);
    return a.type = "button",
    a.disabled = o,
    a.onclick = t,
    a
}
function Ut(e) {
    let t = N("div", "gov-chips");
    for (let n of e) {
        let o = N("button", "gov-chip" + (n.on ? " on" : ""));
        o.type = "button",
        o.disabled = !!n.disabled,
        o.onclick = n.onClick,
        o.appendChild(N("b", "", n.label)),
        n.sub && o.appendChild(N("small", "", n.sub)),
        t.appendChild(o)
    }
    return t
}
function ct(e, t, n, o="") {
    let a = N("div", "gov-stat " + o);
    return a.append(N("small", "", e), N("b", "", t)),
    n && a.appendChild(N("span", "", n)),
    a
}
function $t(e, t, n, o, a="") {
    let i = N(o ? "button" : "div", "gov-row " + a);
    o && (i.type = "button",
    i.onclick = o);
    let r = N("span");
    return r.append(N("b", "", e)),
    t && r.append(N("small", "", t)),
    i.appendChild(r),
    n && i.appendChild(N("em", "", n)),
    i
}
function uw(e) {
    let t = N("div", "gov-bar")
      , n = N("i");
    return n.style.width = Math.max(0, Math.min(100, e * 100)) + "%",
    t.appendChild(n),
    t
}
function yt(e, t, n, o, a) {
    R(e, t, [{
        text: n,
        main: !0,
        onClick: () => er(o, a)
    }, {
        text: "Cancel",
        onClick: E
    }])
}
async function er(e, t) {
    let n = await an(e);
    return n && (t && await t(),
    await Vn(!0)),
    h("#gov-panel").hidden || $r(),
    n
}
var vf = e => {
    let t = Math.max(0, Math.round((e - Q()) / 6e4));
    return t >= 60 ? `${Math.floor(t / 60)} h ${t % 60} min left` : `${t} min left`
}
;
function b2() {
    let e = ft()
      , t = Ie[e]
      , n = H.offices[e];
    return {
        id: e,
        o: t,
        h: n,
        isMin: e === "minister",
        t: H.treasury[e] || 0,
        now: Q(),
        g: He.find(a => a.id === Ql),
        people: t.area ? `${Et[t.area]} residents` : "everyone in Abuja"
    }
}
function dw(e) {
    return Object.entries(md).filter( ([,t]) => t.who === e.o.short.toLowerCase()).map( ([t,n]) => {
        let o = e.o.area ? `${t}_${e.o.area}` : t
          , a = H.deeds?.[o]
          , i = (a?.until || 0) > e.now;
        return {
            k: t,
            d: n,
            dd: a,
            on: i,
            title: i && a.pct ? ns(t, a.pct) : i && n.options ? ns(t, t === "fares" ? 30 : 100) : n.name
        }
    }
    )
}
function $r() {
    if (Gt !== "gov")
        return;
    if (!ft() || !H)
        return Yn();
    let t = b2();
    h("#gov-kicker").textContent = t.isMin ? "Manage government" : "Manage your Senate seat",
    h("#gov-title").textContent = t.isMin ? "Minister of FCT" : `Senator of FCT \xB7 ${Et[t.o.area]}`,
    h("#gov-sub").textContent = `@${t.h.name} \xB7 in office until ${Lo()}`;
    let n = h("#gov-tabs");
    n.innerHTML = "";
    for (let[a,i,r] of w2) {
        let s = N("button", "gov-tab" + (a === ki ? " on" : ""));
        s.type = "button",
        s.innerHTML = xe(r, 16) + "<span></span>",
        s.lastChild.textContent = i,
        s.onclick = () => {
            ki = a,
            $r()
        }
        ,
        n.appendChild(s)
    }
    let o = h("#gov-body");
    o.innerHTML = "",
    o.scrollTop = 0,
    {
        overview: x2,
        laws: k2,
        money: v2,
        people: C2,
        powers: T2
    }[ki](o, t)
}
function x2(e, t) {
    let {h: n, isMin: o, t: a, g: i} = t
      , r = hi(n)
      , s = N("div", "gov-stats");
    o ? s.append(ct("CBN", y(H.cbn || 0), `${y(Zl)} locked`), ct("You can spend", y(a), "on laws, payroll, Senators"), ct("Tax on sales", `${Va()}%`, "fills the CBN")) : s.append(ct("Your treasury", y(a), a ? "from the Minister" : "ask the Minister for a budget"), ct("Your area", Et[t.o.area], "residents vote for you")),
    s.append(ct("Approval", r === null ? "\u2014" : `${r}%`, `\u{1F44D} ${n.up || 0} \xB7 \u{1F44E} ${n.down || 0}`, r !== null && r < 40 ? "bad" : r !== null && r >= 60 ? "good" : ""), ct("Complaints", String(n.complaints || 0), "this term"), ct("Arrest orders", `${Jl - (n.arrests || 0)} left`, "this term")),
    o && i && s.append(ct("Civil servants", `${i.staff.length}/${i.openings}`, `payroll ${y(i.till)}`)),
    e.appendChild(s);
    let l = Math.max(pm, Math.ceil((n.votes || 0) * .6));
    if (n.impeach && e.appendChild(ge("\u26A0 Impeachment votes", `${n.impeach} of ${l} ${t.o.area ? `${Et[t.o.area]} residents` : "people"} have voted to remove you. Keep them happy: fix complaints, message your people.`, "warn")),
    o && (n.senate || []).length) {
        let p = Object.entries(H.offices || {}).filter( ([f,b]) => b && Ie[f]?.short === "Senator").length;
        e.appendChild(ge("\u26A0 The Senate", `${n.senate.length} of ${ec(p)} Senators have voted to remove you.`, "warn"))
    }
    let u = dw(t).filter(p => p.on)
      , d = ge("Laws in force", u.length ? "" : "Nothing running. Enact one in Laws.");
    for (let p of u) {
        let f = $t(p.title, `${vf(p.dd.until)}${p.dd.fund !== void 0 ? ` \xB7 ${p.dd.n || 0} covered \xB7 ${y(p.dd.fund)} left` : p.dd.left !== void 0 ? ` \xB7 ${p.dd.left} left to claim` : ""}`, "", () => {
            ki = "laws",
            $r()
        }
        );
        if (d.appendChild(f),
        p.dd.fund !== void 0) {
            let b = p.dd.pct ? yd(p.d, p.dd.pct) : p.d.cost;
            d.appendChild(uw(b ? 1 - p.dd.fund / b : 0))
        }
    }
    e.appendChild(d);
    let c = ge("Your message to the people", n.msg ? `"${n.msg.text}" \xB7 ${ma(n.msg.at)}` : `Nothing posted. It pops up for ${t.people}.`);
    c.appendChild(at(n.msg ? "Change it" : "Write one", () => {
        ki = "people",
        $r()
    }
    , "ghost")),
    e.appendChild(c)
}
function k2(e, t) {
    let {isMin: n, t: o, now: a} = t;
    if (n) {
        let r = H.taxSetAt ? H.taxSetAt + 864e5 - a : 0
          , s = H.taxBp || ko
          , l = ge(`Tax on every sale: ${Va()}%`, `It all goes into the CBN (Hustler's Pikin owners pay half). Higher = more to spend, but businesses keep less and may turn on you.${r > 0 ? ` You can change it again in ${Math.ceil(r / 36e5)} h.` : " Once a day."}`);
        l.appendChild(Ut(ym.map(u => ({
            label: `${u / 100}%`,
            sub: u === s ? "now" : u === ko ? "usual" : "",
            on: u === s,
            disabled: u === s || r > 0,
            onClick: () => yt(`Set tax to ${u / 100}%?`, "Everyone sees it in the news.", `Set tax to ${u / 100}%`, {
                action: "setTax",
                bp: u
            })
        })))),
        e.appendChild(l)
    }
    let i = {
        fares: "riders",
        food: "customers",
        health: "patients"
    };
    for (let r of dw(t)) {
        let s = ge(r.on ? `\u2705 ${r.title}` : r.d.name, r.on ? `In force \xB7 ${vf(r.dd.until)}` : r.d.small, r.on ? "live" : "");
        if (r.on)
            if (r.dd.fund !== void 0) {
                let l = r.dd.pct ? yd(r.d, r.dd.pct) : r.d.cost;
                s.appendChild(uw(l ? 1 - r.dd.fund / l : 0)),
                s.appendChild(N("p", "gov-note", `${r.dd.n || 0} covered \xB7 ${y(r.dd.paid || 0)} paid to businesses \xB7 ${y(r.dd.fund)} left (back to the ${n ? "CBN" : "treasury"} when it ends)`))
            } else
                r.dd.left !== void 0 && s.appendChild(N("p", "gov-note", `${r.dd.left} of ${r.d.count} still to claim`));
        else if (r.d.options) {
            let l = i[r.k] || "people";
            s.appendChild(Ut(Object.entries(r.d.options).map( ([u,d]) => ({
                label: +u >= 100 ? "Free" : `${u}% off`,
                sub: y(d),
                disabled: d > o,
                onClick: () => yt(ns(r.k, +u), `For 24 hours ${l} pay ${+u >= 100 ? "nothing" : `${100 - u}%`}. Businesses still get their full price: the difference comes from this ${y(d)}, ${l.slice(0, -1)} by ${l.slice(0, -1)}. What's left after 24 hours goes back to the ${n ? "CBN" : "treasury"}. It's in the news.`, `Enact \xB7 ${y(d)}`, {
                    action: "deed",
                    kind: r.k,
                    pct: +u
                })
            }))))
        } else
            s.appendChild(at(`Enact \xB7 ${y(r.d.cost)}`, () => yt(r.d.name, `${r.d.small}. It's in the news.`, `Enact \xB7 ${y(r.d.cost)}`, {
                action: "deed",
                kind: r.k
            }), "", r.d.cost > o));
        !r.on && (r.d.options,
        r.d.cost > o) && s.appendChild(N("p", "gov-note", n ? `Not enough spendable CBN money (${y(o)}).` : `Your treasury has ${y(o)}. The Minister can give you a budget: complain to the Minister in People.`)),
        e.appendChild(s)
    }
}
function v2(e, t) {
    let {isMin: n, t: o, g: a} = t
      , i = ge(n ? "The CBN" : "Your treasury", n ? `${y(H.cbn || 0)} in the CBN. You can spend ${y(o)}; the last ${y(Zl)} is locked so the economy can't go bankrupt. Tax fills it; laws, payroll, Senators' budgets and embezzling empty it.` : `${y(o)}. The Minister gives Senators their budget. Spend it on your people (palliative, free rides home). What you don't spend goes back to the CBN when the term ends.`);
    if (e.appendChild(i),
    n) {
        let u = a || {
            staff: [],
            openings: 0,
            wage: vt.gov.wage,
            till: 0
        }
          , d = ge("Civil service payroll", `${y(u.till)} in the payroll \xB7 about ${Math.floor(u.till / Math.max(1, u.wage))} shifts at ${y(u.wage)}. Civil servants can only work while it can pay them.`);
        d.appendChild(Ut([1e5, 5e5, 1e6, 2e6, 5e6].map(b => ({
            label: `+${y(b)}`,
            sub: `${Math.floor(b / Math.max(1, u.wage))} shifts`,
            disabled: b > o,
            onClick: () => yt(`Put ${y(b)} into the payroll?`, "From the CBN. It shows in the public accounts.", `Fund ${y(b)}`, {
                action: "payroll",
                amount: b
            }, () => bt(!0))
        })))),
        u.till > 0 && d.appendChild(at(`Return ${y(u.till)} to the CBN`, () => yt("Return the payroll?", "Civil servants can't be paid until you fund it again.", "Return it", {
            action: "payroll",
            amount: -u.till
        }, () => bt(!0)), "ghost")),
        e.appendChild(d);
        let c = Object.entries(Ie).filter( ([,b]) => b.short === "Senator")
          , p = ge("Senators' budgets", "Give Senators money to spend on their areas (palliative, free rides home). Unspent money comes back to the CBN at the end of the term.")
          , f = c.filter( ([b]) => H.offices?.[b]);
        f.length > 1 && (p.appendChild(N("p", "gov-label", `All ${f.length} Senators at once \xB7 each gets`)),
        p.appendChild(Ut([5e5, 1e6, 2e6, 5e6].map(b => ({
            label: `+${y(b)} each`,
            sub: `${y(b * f.length)} in all`,
            disabled: b * f.length > o,
            onClick: () => yt(`Give all ${f.length} Senators ${y(b)} each?`, `${y(b * f.length)} in all, from the CBN. It's in the news and the public accounts.`, `Give ${y(b * f.length)}`, {
                action: "fundSenators",
                amount: b
            })
        })))),
        p.appendChild(N("p", "gov-label", "Or one at a time")));
        for (let[b,$] of c) {
            let T = H.offices?.[b];
            p.appendChild($t(`${Et[$.area]}${T ? ` \xB7 @${T.name}` : ""}`, T ? `Treasury ${y(H.treasury[b] || 0)}` : "Seat empty", "")),
            T && p.appendChild(Ut([5e5, 1e6, 2e6, 5e6].map(M => ({
                label: `+${y(M)}`,
                disabled: M > o,
                onClick: () => yt(`Give @${T.name} ${y(M)}?`, `For ${Et[$.area]}. From the CBN, in the news and the public accounts.`, `Give ${y(M)}`, {
                    action: "fundSenator",
                    office: b,
                    amount: M
                })
            }))))
        }
        e.appendChild(p)
    }
    let r = H.ledger || []
      , s = ge("Public accounts", "Every naira the government spends or takes in. Everyone can see this.")
      , l = u => u.uid ? `${u.kind === "bail" ? "Police" : Ie[u.office]?.short || "Government"} @${u.by}` : u.by || "FCT Government";
    for (let u of r.slice(0, 25))
        s.appendChild($t(u.what, `${l(u)} \xB7 ${ma(u.at)}`, u.amount ? `${u.amount < 0 ? "\u2212" : "+"}${y(Math.abs(u.amount))}` : "", null, u.amount < 0 ? "neg" : "pos"));
    if (r.length || s.appendChild(N("p", "gov-note", "Nothing yet.")),
    e.appendChild(s),
    o >= bm) {
        let u = N("details", "gov-box danger");
        u.appendChild(N("summary", "", "Danger zone: embezzle")),
        u.appendChild(N("p", "gov-note", `Take public money for yourself. It shows in the public accounts and the EFCC can catch you (the risk climbs the more you take): ${Kl.mins} minutes in a cell with no bail, everything back plus ${Kl.fine * 100}% of your bank account, and you lose your office.`)),
        u.appendChild(Ut([1e4, 5e4, 1e5, 5e5, 1e6, 2e6, 5e6].filter(d => d <= o).map(d => ({
            label: y(d),
            sub: `risk \u2265 ${Math.round(xm(0, d, o) * 100)}%`,
            onClick: () => yt(`Take ${y(d)}?`, "It's in the public accounts, and the EFCC may catch you.", `Take ${y(d)}`, {
                action: "embezzle",
                amount: d
            })
        })))),
        e.appendChild(u)
    }
}
function C2(e, t) {
    let {h: n, isMin: o, g: a, people: i} = t
      , r = ge("Message your people", `Pops up once for ${i} and stays in Phone \u2192 Government. One new message every 30 minutes.`)
      , s = N("textarea", "gov-text");
    s.maxLength = gm,
    s.placeholder = o ? "e.g. Fares are 50% off today. Enjoy!" : "e.g. Palliative is out! Collect yours in Phone \u2192 Politics.",
    s.value = n.msg?.text || "",
    s.onkeydown = s.onkeyup = c => c.stopPropagation(),
    r.appendChild(s);
    let l = N("div", "gov-actions");
    l.appendChild(at("Post message", () => er({
        action: "announce",
        text: s.value
    }))),
    n.msg && l.appendChild(at("Take it down", () => er({
        action: "announce",
        text: ""
    }), "ghost")),
    r.appendChild(l),
    e.appendChild(r);
    let u = ge("Complaints", `${n.complaints || 0} this term \xB7 ${t.o.area ? `from ${Et[t.o.area]} residents` : "from Senators"}. Tap one to reply in private.`);
    if (e.appendChild(u),
    ( () => {
        if (!wi)
            return u.appendChild(N("p", "gov-note", "Loading\u2026"));
        if (!wi.length)
            return u.appendChild(N("p", "gov-note", "No complaints this term."));
        for (let c of wi)
            u.appendChild($t(c.text, `@${c.name}${c.from ? ` \xB7 ${Ie[c.from]?.title || "Senator"}` : ` \xB7 ${Et[c.home] || ""}`} \xB7 ${ma(c.at)}`, "Reply", () => {
                Yn(),
                ba(c.uid, c.name)
            }
            ))
    }
    )(),
    wi || E2().then( () => {
        ki === "people" && !h("#gov-panel").hidden && $r()
    }
    ),
    !o && H.offices?.minister && H.offices.minister.uid !== m.uid) {
        let c = ge(`Write to Minister @${H.offices.minister.name}`, "Ask for a budget for your area, or raise your people's problems. Up to 5 per term.")
          , p = N("textarea", "gov-text");
        p.maxLength = wd,
        p.placeholder = "e.g. Kubwa needs a budget for palliative.",
        p.onkeydown = p.onkeyup = f => f.stopPropagation(),
        c.append(p, at("Send to the Minister", () => {
            if (p.value.trim().length < 3)
                return g("Write something first.");
            er({
                action: "complain",
                text: p.value
            })
        }
        )),
        e.appendChild(c)
    }
    if (o) {
        let c = a || {
            staff: [],
            openings: 0,
            wage: vt.gov.wage,
            till: 0
        }
          , p = ge("FCT Civil Service", `${c.staff.length} of ${c.openings} jobs filled \xB7 ${y(c.wage)} a shift. Players apply in Earn money \u2192 Jobs and work at Eagle Square.`);
        if (p.appendChild(N("p", "gov-label", "Jobs to fill")),
        p.appendChild(Ut([...wm, 0].map(f => ({
            label: f ? String(f) : "Stop",
            on: f === c.openings,
            disabled: f === c.openings,
            onClick: () => er({
                action: "govJobs",
                openings: f
            }, () => bt(!0))
        })))),
        p.appendChild(N("p", "gov-label", "Pay per shift")),
        p.appendChild(Ut([2e3, 3e3, 5e3, 8e3, 1e4, 15e3, 2e4].map(f => ({
            label: y(f),
            on: f === c.wage,
            disabled: f === c.wage,
            onClick: () => er({
                action: "govJobs",
                wage: f
            }, () => bt(!0))
        })))),
        c.staff.length) {
            p.appendChild(N("p", "gov-label", `Civil servants (${c.staff.length})`));
            for (let f of c.staff.slice(0, 50))
                p.appendChild($t(`@${f.name}`, "", "Let go", () => yt(`Let @${f.name} go?`, "", "Let go", {
                    action: "govFire",
                    uid: f.uid
                }, () => bt(!0))));
            c.staff.length > 1 && p.appendChild(at(`Let all ${c.staff.length} go`, () => yt("Let every civil servant go?", "", "Let everyone go", {
                action: "govFire",
                all: !0
            }, () => bt(!0)), "ghost"))
        }
        e.appendChild(p)
    }
}
async function E2() {
    try {
        let e = await $e(Te).currentUser.getIdToken()
          , t = await fetch("/api/politics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + e
            },
            body: JSON.stringify({
                action: "complaints"
            })
        })
          , n = await t.json().catch( () => ({}));
        wi = t.ok ? n.list || [] : []
    } catch {
        wi = []
    }
}
function T2(e, t) {
    let {h: n, isMin: o, now: a} = t
      , i = Jl - (n.arrests || 0)
      , r = w === "city" || w === "street" ? k?.nearby(60) || [] : []
      , s = ge(`Order an arrest \xB7 ${i} left this term`, "Police lock them up for 10 minutes (\u20A620,000 bail). It's in the news, and people can impeach you for abusing power. You can also tap a player in the city \u2192 Order arrest.");
    for (let l of r.slice(0, 12))
        s.appendChild($t(`@${l.username}`, "Near you", "Arrest", i > 0 ? () => yt(`Order the arrest of @${l.username}?`, `${i} orders left this term. It's in the news.`, `Arrest @${l.username}`, {
            action: "arrest",
            target: l.uid
        }) : null));
    if (r.length || s.appendChild(N("p", "gov-note", "Nobody is near you right now.")),
    e.appendChild(s),
    o) {
        let l = He.filter(d => d.owner && d.kind !== "gov" && d.kind !== "estate" && d.owner !== m.uid).sort( (d, c) => d.staff.length - c.staff.length)
          , u = ge(`Fine businesses that don't hire \xB7 ${Ia.perTerm - (n.fines || 0)} left`, `Fewer than ${Ia.minStaff} staff: fine them ${y(Ia.amount)} (their till, then the owner's wallet) into the CBN. Once a day each.`);
        for (let d of l.slice(0, 40)) {
            let c = d.staff.length < Ia.minStaff
              , p = a - (d.finedAt || 0) < Ia.gap;
            u.appendChild($t(d.name, `@${d.ownerName} \xB7 ${d.staff.length} staff${p ? " \xB7 fined today" : ""}`, c && !p ? "Fine" : "OK", c && !p ? () => yt(`Fine ${d.name}?`, `${y(Ia.amount)} for not hiring. It's in the news.`, `Fine ${y(Ia.amount)}`, {
                action: "fineBiz",
                bid: d.id
            }, () => bt(!0)) : null))
        }
        l.length || u.appendChild(N("p", "gov-note", "No player businesses yet.")),
        e.appendChild(u)
    } else {
        let l = H.offices?.minister
          , u = Object.entries(H.offices || {}).filter( ([b,$]) => $ && Ie[b]?.short === "Senator").length
          , d = ec(u)
          , c = (l?.senate || []).length
          , p = (l?.senate || []).includes(m.uid)
          , f = ge("Senate: impeach the Minister", l ? `${c} of ${d} Senators have voted to remove Minister @${l.name}${p ? " \xB7 you voted" : ""}.` : "There's no Minister right now.");
        l && f.appendChild(at(p ? "You voted" : "Vote to impeach", () => yt(`Impeach Minister @${l.name}?`, `If ${d} of the ${u} Senators vote, the Minister is removed until the next election. Your vote is in the news.`, "Vote to impeach", {
            action: "senateImpeach"
        }), "danger", p || u < 2)),
        e.appendChild(f)
    }
}
function M2(e, t) {
    let n = ft();
    n && R(`Order the arrest of @${t}?`, `Police lock them up for 10 minutes (\u20A620,000 bail). It's in the news, and players can impeach you for abusing power. ${Jl - (H.offices[n].arrests || 0)} orders left this term.`, [{
        text: `Arrest @${t}`,
        main: !0,
        onClick: () => an({
            action: "arrest",
            target: e
        })
    }])
}
async function $2() {
    if (xu().allowance)
        try {
            let e = await $e(Te).currentUser.getIdToken()
              , t = await (await fetch("/api/perks", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + e
                }
            })).json();
            if (!t.paid)
                return;
            A = t.money,
            m.player.money = A,
            _e();
            let n = m.player.birth === "senator" ? "Papa" : "Your parents";
            setTimeout( () => g(`${n} sent your family allowance: ${y(t.paid)}${t.months > 1 ? ` (${t.months} months)` : ""} \u{1F451}${t.left > 0 ? ` \xB7 ${t.left} more to come` : ""}`, 6e3), 2500)
        } catch (e) {
            console.warn("perks", e)
        }
}
async function S2() {
    try {
        let e = await Xn(ee(W, "work", m.uid));
        if (!e.exists())
            return;
        let t = e.data()
          , n = t.start.toMillis()
          , o = n + 12e4;
        if (Date.now() > o + 12e4 * 2)
            return;
        let a = await An(t.b);
        if (!a)
            return;
        Ps( () => {
            Ny(a, o, t.wage || 0),
            ra(a) || Po(a, !1),
            g(`Welcome back! Your shift at ${a.name} is still on.`, 4e3)
        }
        )
    } catch (e) {
        console.warn("resume shift", e.code || e)
    }
}
var $h = null;
async function hw() {
    return $h = (await va(ka(mt(W, "players", m.uid, "properties"), Bi("boughtAt", "asc")))).docs.map(t => ({
        id: t.id,
        ...t.data()
    })),
    $h
}
async function Cf() {
    if (re(),
    !m)
        return ne("buy property");
    let[e] = await Promise.all([hw().catch( () => [])])
      , t = m.player
      , n = document.createElement("div");
    n.innerHTML = '<div class="sheet-label">My properties</div>',
    e.length || n.insertAdjacentHTML("beforeend", `<p class="sheet-sub">You don't own any property yet. Buy one below and stop paying rent.</p>`),
    e.forEach( (a, i) => {
        let r = document.createElement("div");
        r.className = "prop-row";
        let s = t.owned && t.livingIn === a.id;
        r.innerHTML = '<span><b></b><small></small></span><button type="button"></button>',
        r.querySelector("b").textContent = Re[a.district].name,
        r.querySelector("small").textContent = `Bought for ${y(a.price)}` + (s ? " \xB7 you live here" : "");
        let l = r.querySelector("button");
        s ? (l.textContent = "Home",
        l.className = "here") : (l.textContent = "Live here",
        l.onclick = () => fw(a)),
        n.appendChild(r)
    }
    ),
    n.insertAdjacentHTML("beforeend", '<div class="sheet-label" style="margin-top:14px">Buy</div>');
    let o = {};
    await Promise.all(Object.keys(Pl).map(a => Xn(ee(W, "market", a)).then(i => {
        o[a] = i.exists() ? i.data().sold : 0
    }
    ).catch( () => {
        o[a] = 0
    }
    ))),
    R("Properties", `Own homes and never pay rent where you live. You have ${y(A)}.`, Object.entries(Pl).map( ([a,i]) => {
        let r = i.supply - o[a];
        return {
            text: Re[a].name,
            small: r > 0 ? `${r} of ${i.supply} left` + (i.price > A ? " \xB7 not enough money" : "") : "Sold out",
            right: y(i.price),
            disabled: r <= 0 || i.price > A,
            onClick: () => A2(a, o[a])
        }
    }
    )),
    h("#act-list").prepend(n)
}
function A2(e, t) {
    let n = Pl[e];
    R(`Buy ${Re[e].name}?`, `${y(n.price)} will leave you with ${y(A - n.price)}. It goes into your portfolio; you choose whether to live there.`, [{
        text: `Buy for ${y(n.price)}`,
        main: !0,
        onClick: async () => {
            E();
            let o = A;
            A -= n.price,
            _e();
            try {
                let a = Xt(W)
                  , i = ee(mt(W, "players", m.uid, "properties"))
                  , r = ee(W, "market", e);
                a.set(i, {
                    district: e,
                    price: n.price,
                    boughtAt: ie()
                }),
                a.update(ee(W, "players", m.uid), {
                    money: A,
                    lastPurchase: i.id,
                    updatedAt: ie()
                }),
                t > 0 ? a.update(r, {
                    sold: t + 1
                }) : a.set(r, {
                    sold: 1
                }),
                a.set(ee(mt(W, "players", m.uid, "transactions")), {
                    amount: -n.price,
                    reason: "property",
                    label: `Bought ${Re[e].name}`,
                    balance: A,
                    createdAt: ie()
                }),
                await a.commit(),
                Object.assign(m.player, {
                    money: A,
                    lastPurchase: i.id
                }),
                R(`You now own a ${Re[e].name}!`, "It's in your portfolio (Menu \u2192 Properties). Move in now?", [{
                    text: "Move in now",
                    main: !0,
                    onClick: () => {
                        E(),
                        fw({
                            id: i.id,
                            district: e
                        })
                    }
                }, {
                    text: "Later",
                    onClick: E
                }])
            } catch (a) {
                console.warn("buy", a.code || a),
                A = o,
                _e(),
                g("Couldn't complete the purchase. Someone may have just bought the last one. Try again.")
            }
        }
    }])
}
async function fw(e) {
    E();
    try {
        await mn(ee(W, "players", m.uid), {
            home: e.district,
            owned: !0,
            livingIn: e.id,
            updatedAt: ie()
        }),
        Object.assign(m.player, {
            home: e.district,
            owned: !0,
            livingIn: e.id
        }),
        kr(),
        await Fe(`Moving into your ${Re[e.district].name}\u2026`),
        aa(),
        g("Welcome home. No rent while you live in your own property.", 4e3)
    } catch (t) {
        console.warn("move in", t.code || t),
        g("Couldn't move in. Try again.")
    }
}
var Lt = []
  , Ef = !1
  , Fa = 100
  , Gs = null
  , Id = 0
  , Oc = null
  , Q = () => k?.serverNow ? k.serverNow() : Date.now()
  , R2 = !0
  , Nt = () => m ? bp(m.player.food, Q(), R2 ? op(m.player.birth) : 1) : 100
  , xu = () => np[m?.player.birth] || {};
function H2(e) {
    let t = n => {
        let o = e.buildings.find(a => a.n === n);
        return o && [o.p.reduce( (a, i) => a + i[0], 0) / o.p.length, o.p.reduce( (a, i) => a + i[1], 0) / o.p.length]
    }
    ;
    for (let n of Bn) {
        if (n.xz) {
            let d = Fn[n.id]
              , [c,p] = d ? [d.x, d.z] : n.xz;
            Lt.push({
                ...n,
                x: c,
                z: p,
                cx: n.xz[0],
                cz: n.xz[1]
            });
            continue
        }
        let o = n.at ? t(n.at) : n.landmark && e.landmarks[n.landmark] ? e.landmarks[n.landmark] : null;
        if (n.near === "gate" && e.gate) {
            let {x: d, z: c, angle: p} = e.gate
              , f = [Math.sin(p), Math.cos(p)];
            f[0] * -d + f[1] * -c < 0 && (f[0] = -f[0],
            f[1] = -f[1]),
            o = [d - f[0] * 40 + f[1] * 30, c - f[1] * 40 - f[0] * 30]
        }
        if (!o)
            continue;
        let a = U.nearest(o[0], o[1]);
        if (a < 0)
            continue;
        let[i,r] = U.nodes[a]
          , s = null;
        for (let d = 5; d < 50 && !s; d += 1.5)
            for (let c = 0; c < Math.PI * 2; c += Math.PI / 10) {
                let p = i + Math.cos(c) * d
                  , f = r + Math.sin(c) * d;
                if (!vn(p, f) && !De(p, f) && !De(p + 2, f) && !De(p - 2, f) && !De(p, f + 2)) {
                    s = [p, f];
                    break
                }
            }
        if (!s)
            continue;
        let l = {
            ...n,
            x: s[0],
            z: s[1],
            cx: o[0],
            cz: o[1]
        }
          , u = n.noStall ? new Ae : Oe(Dl(n.near === "gate" ? 2067020 : 13909309));
        if (u.position.set(l.x, 0, l.z),
        u.rotation.y = Math.atan2(i - l.x, r - l.z),
        n.noStall || J.add(u),
        n.near === "gate")
            for (let[d,c,p] of [[3.6, 0, 15906106], [-3.6, .4, 13909309]]) {
                let f = Oe(Dl(p));
                f.position.set(l.x + d * Math.cos(u.rotation.y), 0, l.z - d * Math.sin(u.rotation.y) + c),
                f.rotation.y = u.rotation.y,
                J.add(f)
            }
        Lt.push(l)
    }
}
async function z2() {
    if (!m.player.food)
        try {
            await mn(ee(W, "players", m.uid), {
                food: {
                    level: 100,
                    at: ie()
                },
                updatedAt: ie()
            });
            let e = await Xn(ee(W, "players", m.uid));
            m.player.food = e.data().food
        } catch (e) {
            console.warn("hunger", e.code || e)
        }
    h("#hunger").hidden = !1,
    Ja(),
    setInterval(Ja, 5e3)
}
function Ja() {
    if (!m)
        return;
    let e = Nt()
      , t = h("#hunger i");
    t.style.width = Math.max(4, e) + "%",
    t.style.background = e > 50 ? "#1f8a4c" : e > 20 ? "#f2b53a" : "#d43d3d",
    h("#hunger").title = `Food: ${Math.round(e)}% full`,
    Ef = e < 1,
    e < 25 && Fa >= 25 && g("You're getting hungry. Tap the food bar to find something to eat.", 5e3),
    e < 1 && Fa >= 1 && g("You're starving: you'll walk slower and can't work until you eat.", 6e3),
    Fa = e
}
var ku = e => vo.includes(e.id) || Ct(jt(e.id), Q());
function Bc(e) {
    if (vo.includes(e.id))
        return "Government stall \xB7 always open";
    let t = jt(e.id);
    return t ? Ct(t, Q()) ? `Open \xB7 @${t.ownerName}` : `Closed \xB7 @${t.ownerName}` : "No owner \xB7 closed"
}
async function ga() {
    if (re(),
    !m)
        return ne("eat");
    let e = Math.round(Nt())
      , t = w === "city" && Lt.find(a => Math.hypot(a.x - x.x, a.z - x.z) < 35 || Math.hypot(a.cx - x.x, a.cz - x.z) < 40);
    if (t)
        return vu(t);
    await bt();
    let n = w === "city" ? [x.x, x.z] : Kn(Re[Hn()].at)
      , o = Tf(I2(), a => a.name);
    R("Food", `You're ${e}% full. ${e < 25 ? "Time to eat! " : ""}Places are run by players, each with its own prices and open hours. Open ones first, in no particular order: try somewhere new.`, o.map(a => ({
        text: a.name,
        small: [a.prices.length ? pw(a.prices.map(lo)) : "", pr(Math.hypot(a.x - n[0], a.z - n[1])), a.status].filter(Boolean).join(" \xB7 "),
        right: "Go",
        onClick: () => {
            E(),
            cn(a.name, a.x, a.z)
        }
    })), null, {
        placeholder: "Search a meal or place, e.g. jollof, suya",
        find: a => P2(a, n),
        none: "Nobody sells that right now. Try another meal, e.g. rice, chicken or bread."
    })
}
function Tf(e, t) {
    let n = `${m?.uid || ""}-${Math.floor(Q() / 6e5)}`
      , o = a => {
        let i = 2166136261;
        for (let r = 0; r < a.length; r++)
            i = Math.imul(i ^ a.charCodeAt(r), 16777619);
        return i >>> 0
    }
    ;
    return [...e].sort( (a, i) => i.open - a.open || o(n + t(a)) - o(n + t(i)))
}
var pw = e => {
    let t = e.filter(a => a > 0);
    if (!t.length)
        return e.length ? "Free" : "";
    let n = Math.min(...t)
      , o = Math.max(...t);
    return n === o ? y(n) : `${y(n)}\u2013${y(o)}`
}
;
function I2() {
    let e = Lt.filter(t => t.id !== "airport").map(t => {
        let n = vo.includes(t.id)
          , o = n ? null : jt(t.id)
          , a = n ? t.menu.map(i => Xe[i]?.price || 0) : o ? Object.entries(o.menu).filter( ([i]) => Xe[i]).map( ([,i]) => i) : [];
        return {
            name: t.name,
            x: t.x,
            z: t.z,
            open: ku(t),
            status: Bc(t),
            prices: a
        }
    }
    );
    for (let t of He)
        if (t.kind === "custom" && t.type === "food" && ht[t.plot]) {
            let n = ht[t.plot].door
              , o = Ct(t, Q());
            e.push({
                name: t.name,
                x: n.x,
                z: n.z,
                open: o,
                status: `${o ? "Open" : "Closed"} \xB7 @${t.ownerName}`,
                prices: Object.values(t.menu)
            })
        }
    return e
}
function P2(e, t) {
    let n = e.toLowerCase().split(/\s+/)
      , o = r => n.every(s => r.toLowerCase().includes(s))
      , a = []
      , i = (r, s, l, u, d, c) => {
        let p = Math.hypot(s - t[0], l - t[1])
          , f = () => {
            E(),
            cn(r, s, l)
        }
          , b = o(r)
          , $ = 0;
        for (let[T,M] of c) {
            let _ = Xe[T];
            !_ || !M || !(b || o(_.name)) || ($++,
            a.push({
                open: u,
                d: p,
                price: lo(M),
                a: {
                    text: _.name,
                    small: `${r} \xB7 ${pr(p)} \xB7 ${d}${lo(M) > A ? " \xB7 not enough money" : ""}`,
                    right: y(lo(M)),
                    onClick: f
                }
            }))
        }
        b && !$ && a.push({
            open: u,
            d: p,
            price: 1 / 0,
            a: {
                text: r,
                small: `${pr(p)} \xB7 ${d}`,
                right: "Go",
                onClick: f
            }
        })
    }
    ;
    for (let r of Lt) {
        if (r.id === "airport")
            continue;
        let s = vo.includes(r.id)
          , l = s ? null : jt(r.id);
        i(r.name, r.x, r.z, ku(r), Bc(r), s ? r.menu.map(u => [u, Xe[u]?.price]) : l ? Object.entries(l.menu) : [])
    }
    for (let r of He)
        if (r.kind === "custom" && r.type === "food" && ht[r.plot]) {
            let s = ht[r.plot].door
              , l = Ct(r, Q());
            i(r.name, s.x, s.z, l, `${l ? "Open" : "Closed"} \xB7 @${r.ownerName}`, Object.entries(r.menu))
        }
    return a.sort( (r, s) => s.open - r.open || r.price - s.price || r.d - s.d).slice(0, 30).map(r => r.a)
}
async function vu(e) {
    if (!m)
        return ne("buy food");
    if (!vo.includes(e.id))
        return L2(e);
    let t = Nt();
    R(e.name, `You're ${Math.round(t)}% full. You have ${y(A)}.`, [...e.menu.map(n => {
        let o = Xe[n]
          , a = t >= 97;
        return {
            text: o.name,
            small: a ? "You're full" : `+${o.fill}% food \xB7 eat now${$f()}`,
            right: y(lo(o.price)),
            disabled: a || lo(o.price) > A,
            onClick: () => N2(e, n)
        }
    }
    ), ...(e.pantry || []).map(n => tb(n, e.name)), ...(Ea[e.id] || []).map(n => {
        let o = new Date(Date.now() + 36e5).getUTCDay()
          , a = !n.days || n.days.includes(o)
          , i = n.days ? ["Sundays", "Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays"][n.days[0]] : "";
        return {
            text: n.name,
            small: a ? n.days ? `Tonight! ${i} only` : "Fun" : `${i} only`,
            right: n.price ? y(n.price) : "Free",
            disabled: !a || n.price > A,
            onClick: () => eb(e, n)
        }
    }
    )])
}
async function L2(e) {
    let t = jt(e.id);
    t && (t = await An(t.id) || t);
    let n = {
        text: "Find somewhere open",
        small: "Places open right now",
        right: "Food",
        onClick: () => {
            E(),
            ga()
        }
    };
    if (!t || !Ct(t, Q()))
        return sf(e.name, t, [n]);
    let o = Nt()
      , a = o >= 97
      , i = Object.entries(t.menu).filter( ([s]) => Xe[s]).map( ([s,l]) => ({
        text: Xe[s].name,
        small: a ? "You're full" : `+${Xe[s].fill}% food \xB7 eat now${$f()}`,
        right: y(lo(l)),
        disabled: a || lo(l) > A,
        onClick: () => Sf(t, s, l)
    }))
      , r = (Ea[e.id] || []).map(s => {
        let l = s.price ? t.menu["a_" + s.id] : 0;
        if (s.price && !l)
            return null;
        let u = new Date(Date.now() + 36e5).getUTCDay()
          , d = !s.days || s.days.includes(u)
          , c = s.days ? ["Sundays", "Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays"][s.days[0]] : "";
        return {
            text: s.name,
            small: d ? s.days ? `Tonight! ${c} only` : "Fun" : `${c} only`,
            right: l ? y(l) : "Free",
            disabled: !d || l > A,
            onClick: () => eb(e, s, l, t)
        }
    }
    ).filter(Boolean);
    R(e.name, `Run by @${t.ownerName} \xB7 open ${ai(t.hrs)}. You're ${Math.round(o)}% full. You have ${y(A)}.`, [...i, ...r])
}
var Mf = () => ts(H, "food", Q())
  , lo = e => {
    let t = Mf();
    return t ? gd(e, t) : e
}
  , $f = () => {
    let e = Mf();
    return e ? ` \xB7 ${e >= 100 ? "free" : e + "% off"} today` : ""
}
;
async function mw(e, t, n) {
    if (!Mf())
        return !1;
    let o = await wu({
        kind: "food",
        item: e.item,
        ...e
    });
    if (!o.ok)
        return g(`${o.error || "The food deal didn't apply"}, so it's the normal price.`, 4e3),
        !1;
    if (typeof o.level == "number") {
        let a = Q();
        m.player.food = {
            level: o.level,
            at: {
                toMillis: () => a
            },
            last: e.item
        },
        Fa = o.level,
        Ja()
    }
    return g(`Enjoy your ${t.name.toLowerCase()}${o.pay ? "" : " (free today)"}! You're ${o.level ?? Math.round(Nt())}% full.`),
    ln("eat"),
    !0
}
async function Sf(e, t, n) {
    E();
    let o = Xe[t]
      , a = Math.max(0, Math.min(100, Math.floor(Nt() + o.fill - 2)));
    await mw({
        bid: e.id,
        item: t
    }, o) || await Hi(e, t, n, "food", `${o.name} \xB7 ${e.name}`, a) && (g(`Enjoy your ${o.name.toLowerCase()}! You're ${a}% full.`),
    ln("eat"))
}
async function N2(e, t) {
    if (E(),
    await mw({
        spot: e.id,
        item: t
    }, Xe[t]))
        return;
    let n = Xe[t]
      , o = A
      , a = Math.max(0, Math.min(100, Math.floor(Nt() + n.fill - 2)));
    A -= n.price,
    _e();
    try {
        let i = Xt(W);
        i.update(ee(W, "players", m.uid), {
            money: A,
            food: {
                level: a,
                at: ie(),
                last: t
            },
            updatedAt: ie()
        }),
        i.set(ee(mt(W, "players", m.uid, "transactions")), {
            amount: -n.price,
            reason: "food",
            label: `${n.name} \xB7 ${e.name}`.slice(0, 60),
            balance: A,
            createdAt: ie()
        }),
        await i.commit();
        let r = Q();
        m.player.money = A,
        m.player.food = {
            level: a,
            at: {
                toMillis: () => r
            },
            last: t
        },
        Fa = a,
        Ja(),
        g(`Enjoy your ${n.name.toLowerCase()}! You're ${a}% full.`),
        ln("eat")
    } catch (i) {
        console.warn("eat", i.code || i),
        A = o,
        _e(),
        g("Couldn't buy that. Try again.")
    }
}
function O2(e) {
    if (Id -= e,
    Id > 0)
        return;
    Id = .4;
    let t = m && !P?.driving && !B ? Lt.find(o => Math.hypot(o.x - x.x, o.z - x.z) < 35 || Math.hypot(o.cx - x.x, o.cz - x.z) < 40) : null
      , n = !t && m && !P?.driving && !B ? zx() : null;
    if (!(t === Gs && n?.id === Oc?.id) && (Gs = t,
    Oc = n,
    h("#food-btn").hidden = !t && !n,
    n && (h("#food-btn").innerHTML = xe(n.type === "food" ? "utensils" : "store", 20) + "<span></span>",
    h("#food-btn").lastChild.textContent = `Enter ${n.name}`),
    t)) {
        let o = Cu(t);
        h("#food-btn").innerHTML = xe(o === "airport" ? "plane" : o === "shop" ? "store" : "utensils", 20) + "<span></span>",
        h("#food-btn").lastChild.textContent = `Enter ${jt(t.id)?.name || t.name}`
    }
}
var Cu = e => e.id === "airport" ? "airport" : e.pantry ? "shop" : "food";
h("#food-btn").addEventListener("click", () => {
    let e = Gs
      , t = Oc;
    e ? co("food:" + e.id, e.name, Cu(e), {
        x: e.x,
        z: e.z
    }, () => vu(e)) : t && ht[t.plot] && co("plot:" + t.plot, t.name, t.type === "food" ? "food" : "shop", ht[t.plot].door, () => _y(t.id))
}
);
h("#hunger").addEventListener("click", ga);
var kn = null
  , ue = null
  , _c = !1
  , Pd = 0
  , ta = !1
  , No = vd()
  , gs = vd();
gs.setVolume(.16);
var Ga = ( () => {
    try {
        return localStorage.getItem("al-bgmusic") !== "off"
    } catch {
        return !0
    }
}
)()
  , js = !1
  , Ld = -1;
function Eu() {
    try {
        B2()
    } catch {}
}
function B2() {
    let e = w === "venue" && (ye?.key === "church" || ye?.key === "mosque");
    if (!(Ga && js && !document.hidden && w !== "club" && !e && !qn && !rn && !Bo && !ut)) {
        gs.playing && gs.stop(),
        Ld = -1;
        return
    }
    let n = Am(Q(), null)
      , o = Math.floor(Q() / os);
    (!gs.playing || o !== Ld) && (Ld = o,
    gs.play(n.track, n.offsetMs))
}
function _2() {
    Ga = !Ga;
    try {
        localStorage.setItem("al-bgmusic", Ga ? "on" : "off")
    } catch {}
    js = !0,
    Eu(),
    Af(),
    g(Ga ? "Music on \u{1F3B6}" : "Music off")
}
var Af = () => {
    let e = h("#music-btn");
    e.innerHTML = xe(Ga ? "volume-2" : "volume-x", 20),
    e.setAttribute("aria-label", Ga ? "Mute music" : "Turn music on"),
    e.hidden = w === "club"
}
;
h("#music-btn").addEventListener("click", _2);
Af();
setInterval(Af, 2e3);
for (let e of ["pointerdown", "keydown"])
    addEventListener(e, () => {
        js || (js = !0,
        Eu())
    }
    , {
        passive: !0
    });
document.addEventListener("visibilitychange", () => Eu());
setInterval(Eu, 2e3);
var G2 = 7200 * 1e3
  , gw = () => "al-club-" + m?.uid;
function j2(e) {
    let t = e.buildings.find(s => /Silverbird/.test(s.n || ""));
    if (!t)
        return;
    let n = t.p.reduce( (s, l) => s + l[0], 0) / t.p.length
      , o = t.p.reduce( (s, l) => s + l[1], 0) / t.p.length
      , a = U.nearest(n + 60, o + 40);
    if (a < 0)
        return;
    let[i,r] = U.nodes[a];
    for (let s = 10; s < 70; s += 2)
        for (let l = 0; l < Math.PI * 2; l += Math.PI / 12) {
            let u = i + Math.cos(l) * s
              , d = r + Math.sin(l) * s
              , c = Math.atan2(i - u, r - d);
            if (![[0, -3], [-5, -5], [5, -5], [-5, -1], [5, -1], [0, 2]].every( ([$,T]) => {
                let M = u + Math.cos(c) * $ + Math.sin(c) * T
                  , _ = d - Math.sin(c) * $ + Math.cos(c) * T;
                return !De(M, _) && !vn(M, _)
            }
            ))
                continue;
            let f = Oe($m());
            f.position.set(u, 0, d),
            f.rotation.y = c,
            J.add(f),
            qa(u, d, c, -6, 6, -6, 0);
            let b = new Ae;
            b.position.set(u, 0, d),
            b.rotation.y = c,
            J.add(b);
            for (let[$,T,M] of [[-1.9, "#3d2414", "bald"], [1.9, "#553019", "lowcut"]]) {
                let _ = Do({
                    ...Qa,
                    body: "man",
                    hair: M,
                    outfit: "office",
                    fabric: "plain",
                    top: "#111111",
                    bottom: "#111111",
                    skin: T
                });
                Oe(_.group),
                _.group.scale.setScalar(1.35),
                _.group.position.set($, 0, .9),
                b.add(_.group),
                qa(u, d, c, $ - .5, $ + .5, .4, 1.4)
            }
            ue = {
                x: u + Math.sin(c) * 2.5,
                z: d + Math.cos(c) * 2.5,
                h: c
            },
            ao(ot, u, 12, d);
            return
        }
}
function D2(e) {
    if (Pd -= e,
    Pd > 0 || !ue)
        return;
    Pd = .4;
    let t = !P?.driving && !B && Math.hypot(ue.x - x.x, ue.z - x.z) < 12;
    if (t === _c)
        return;
    _c = t,
    h("#club-btn").hidden = !t;
    let n = jt(Qn)
      , o = n?.menu.gate || 0;
    t && (h("#club-btn").textContent = Ct(n, Q()) ? yw() || ww(n) ? `Enter ${ot}` : xu().freeClub ? `Enter ${ot} \xB7 VIP` : `Enter ${ot} \xB7 ${o ? y(o) : "free"}` : `${ot} \xB7 closed`)
}
function yw() {
    try {
        return Date.now() - +(localStorage.getItem(gw()) || 0) < G2
    } catch {
        return !1
    }
}
var ww = e => !!e && !!m && (e.owner === m.uid || e.staff.some(t => t.uid === m.uid));
async function Rf() {
    if (!m)
        return ne("go clubbing");
    let e = jt(Qn);
    if (e && (e = await An(e.id) || e),
    !e || !Ct(e, Q()))
        return sf(ot, e);
    if (!yw() && !ww(e)) {
        let t = e.menu.gate || 0;
        if (xu().freeClub)
            g("VIP entry. Welcome, Senator's Pikin \u{1F451}", 3e3);
        else if (t > 0 && !await Hi(e, "gate", t, "club", `${ot} gate fee`))
            return;
        try {
            localStorage.setItem(gw(), String(Date.now()))
        } catch {}
    }
    await Fe(`Entering ${ot}\u2026`, 1200),
    Hf()
}
function Hf() {
    kn || (kn = Sm( () => {
        let e = Do({
            ...Qa,
            outfit: "agbada"
        });
        return Oe(e.group),
        e.group.scale.setScalar(1.15),
        e
    }
    ),
    kn.group.position.set(Rt[0], 0, Rt[1]),
    J.add(kn.group)),
    w = "club",
    _c = !1,
    ln("club"),
    Ye("club"),
    h("#club-btn").hidden = !0,
    h("#hail").hidden = !0,
    h("#food-btn").hidden = !0,
    h("#go-home").hidden = !0,
    x.set(Rt[0] + kn.spawn[0], 0, Rt[1] + kn.spawn[1]),
    j = Math.PI,
    ce = null,
    de.visible = !1,
    J.background = new jo(460044),
    J.fog = null,
    iu.intensity = .55,
    Vt.intensity = .25,
    X.minDistance = 4,
    X.maxDistance = 34,
    X.minPolarAngle = .35,
    X.maxPolarAngle = 1.05,
    dt(new Z(0,0,-1), 14, 11, 4, 1),
    h("#club-hud").hidden = !1,
    Pi(),
    nk(),
    et && et.setVisible(!1),
    g(`Welcome to ${ot}! Tap Dance, get a drink at the Bar, and chat with everyone inside.`, 5e3),
    k?.sendNow()
}
function Or() {
    ik(),
    zn(!1),
    W2(),
    h("#club-hud").hidden = !0,
    Pi(),
    Io = "",
    w = "city",
    Sc(),
    X.minDistance = _t.dist[0],
    X.maxDistance = _t.dist[1],
    X.minPolarAngle = _t.polar[0],
    X.maxPolarAngle = _t.polar[1],
    et && et.setVisible(!0)
}
async function F2() {
    await Fe("Heading outside\u2026", 900),
    Or(),
    x.set(ue.x + Math.sin(ue.h) * 3, 0, ue.z + Math.cos(ue.h) * 3),
    j = ue.h,
    dt(new Z(Math.sin(j),0,Math.cos(j)), 22, 10, 6, 2),
    k?.sendNow()
}
function zn(e) {
    ta !== e && (ta = e,
    h("#club-dance").setAttribute("aria-pressed", e),
    h("#club-dance").textContent = e ? "Stop dancing" : "Dance",
    !e && le && (le.group.position.y = 0),
    k?.sendNow())
}
async function Y2() {
    let e = jt(Qn);
    if (e && (e = await An(e.id) || e),
    !e || !Ct(e, Q()))
        return g("The bar is closed: nobody is working tonight.");
    let t = Nt();
    R(`${ot} bar`, `Run by @${e.ownerName}. You have ${y(A)}.`, Tm.filter(n => e.menu[n]).map(n => ({
        text: Xe[n].name,
        small: t >= 97 ? "You're full" : `+${Xe[n].fill}% food`,
        right: y(e.menu[n]),
        disabled: t >= 97 || e.menu[n] > A,
        onClick: () => Sf(e, n, e.menu[n])
    })))
}
var Ds = !1
  , po = () => jt(Qn)?.menu.gate || 0
  , zf = (e=po()) => e ? `gate ${y(e)}` : "free entry";
async function cl(e) {
    let t = await $e(Te).currentUser.getIdToken()
      , n = await fetch("/api/transfer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + t
        },
        body: JSON.stringify(e)
    })
      , o = await n.json().catch( () => ({}));
    if (!n.ok)
        throw new Error(o.error || "Something went wrong. Try again.");
    return o
}
async function ug(e) {
    let t = po();
    try {
        e && t && await cl({
            action: "treatOpenClub",
            each: t,
            max: e
        }),
        await ya({
            action: "clubNight",
            ...e && t ? {
                treat: {
                    each: t,
                    max: e
                }
            } : {}
        }),
        Ds = !0,
        Rr = 0,
        g(e && t ? `\u{1FAA9} Invited! You pay the ${y(t)} gate for the first ${e} who come (only when they walk in).` : "\u{1FAA9} Invited! Everyone online gets a pop-up within a minute, and you're on Phone \u2192 Parties.", 5500)
    } catch (n) {
        g(n.message, 4500)
    }
}
function W2() {
    Ds && (Ds = !1,
    Rr = 0,
    ya({
        action: "endClubNight"
    }).catch( () => {}
    ))
}
setInterval( () => {
    Ds && w === "club" && ya({
        action: "clubNight"
    }).catch( () => {}
    )
}
, 600 * 1e3);
async function dg(e, t) {
    let n = e.filter(a => a.uid && a.uid !== m.uid).slice(0, 20)
      , o = po();
    if (!n.length)
        return g("Nobody to invite.");
    if (t && o) {
        if (o * n.length > A)
            return g(`Paying for ${n.length} costs ${y(o * n.length)}: you don't have enough.`);
        try {
            await cl({
                action: "treat",
                to: n.map(a => a.uid),
                where: "club",
                each: o
            })
        } catch (a) {
            return g(a.message, 4500)
        }
    }
    for (let a of n)
        k?.groupInvite(a.uid, t && o ? "z:t" : "z:club");
    g(`Invited ${n.length === 1 ? `@${n[0].name}` : `${n.length} people`} to ${ot} \u{1FAA9}${t && o ? ` \xB7 you pay their ${y(o)} gate when they walk in` : ""}`, 4500)
}
function bw() {
    if (!m)
        return ne("invite people");
    let e = Ri.get(m.uid)
      , t = (hr || []).slice(0, 15)
      , n = po()
      , o = e ? e.members.filter(i => i.uid !== m.uid) : []
      , a = (i, r) => R(`Invite ${i}`, n ? `The gate fee is ${y(n)} each.` : "Entry is free right now.", [{
        text: "Invite",
        small: n ? `They pay their own ${y(n)} gate` : "Free entry",
        right: "Invite",
        onClick: () => {
            E(),
            dg(r, !1)
        }
    }, ...n ? [{
        text: "Invite and pay their gate",
        small: `${y(n)} each${r.length > 1 ? ` \xB7 ${y(n * r.length)} for all ${r.length}` : ""} \xB7 charged only when they walk in`,
        right: "Pay",
        main: !0,
        onClick: () => {
            E(),
            dg(r, !0)
        }
    }] : []], bw);
    R(`Invite people to ${ot}`, `Even if you're the only one here. They come straight in from anywhere. Gate fee: ${n ? y(n) : "free right now"}.`, [...Ds ? [{
        text: "\u2713 Everyone online has been invited",
        small: "You're also on Phone \u2192 Parties while you stay",
        onClick: Ee
    }] : [{
        text: "Invite everyone online",
        small: `Everyone playing gets a pop-up within a minute \xB7 they pay their own ${zf(n)}`,
        right: "Invite",
        main: !0,
        onClick: () => {
            E(),
            ug(0)
        }
    }, ...n ? [5, 10, 20].map(i => ({
        text: `Invite everyone online and pay for the first ${i}`,
        small: `${y(n)} each, up to ${y(n * i)} \xB7 charged only as they walk in`,
        right: "Pay",
        disabled: n * i > A,
        onClick: () => {
            E(),
            ug(i)
        }
    })) : []], ...o.length ? [{
        text: `Invite your crew (${e.name})`,
        small: `${o.length} member${o.length === 1 ? "" : "s"} get a pop-up`,
        right: "Choose",
        onClick: () => a("your crew", o)
    }] : [], ...t.length ? [{
        head: !0,
        text: "People you chat with"
    }, ...t.map(i => ({
        text: `@${i.username}`,
        small: "Gets a pop-up: come to the club",
        right: "Choose",
        onClick: () => a(`@${i.username}`, [{
            uid: i.uid,
            name: i.username
        }])
    }))] : []])
}
function q2(e, t) {
    if (t - e.t > 30 * 6e4 || w === "club")
        return k.clearFrom(e.host);
    let n = e.home === "z:t"
      , o = po();
    n && (Zo = {
        from: e.host,
        name: e.name,
        where: "club",
        until: Date.now() + 30 * 6e4
    }),
    R(`\u{1FAA9} @${e.name} invited you to ${ot}`, `${n && o ? `Free entry: @${e.name} pays your ${y(o)} gate fee.` : o ? `Gate fee ${y(o)}.` : "Entry is free right now."} Music, dancing and drinks. Getting there is free.`, [{
        text: "Go now",
        main: !0,
        onClick: () => {
            E(),
            k.clearFrom(e.host),
            xw()
        }
    }, {
        text: "No thanks",
        onClick: () => {
            E(),
            k.clearFrom(e.host)
        }
    }])
}
async function If(e) {
    if (e.treat && po())
        try {
            let t = await cl({
                action: "treatClaim",
                from: e.host
            });
            Zo = {
                from: e.host,
                name: t.name,
                where: "club",
                until: Date.now() + 30 * 6e4
            }
        } catch (t) {
            g(`${t.message}. You'll pay the ${y(po())} gate yourself.`, 4500)
        }
    xw()
}
async function xw() {
    if (!m)
        return ne("go clubbing");
    if (!ue)
        return g("The club isn't open yet.");
    if (w === "club")
        return g("You're already in the club!");
    if (w === "cell" || wf())
        return g("You're locked up.");
    if (P?.driving || B || Le)
        return g("Finish your trip first.");
    await Fe(`Heading to ${ot}\u2026`, 1200),
    w === "venue" && un();
    let e = ue.x + Math.sin(ue.h) * 3
      , t = ue.z + Math.cos(ue.h) * 3;
    w === "home" || w === "street" ? Da(e, t, ue.x, ue.z) : (x.set(e, 0, t),
    j = ue.h + Math.PI,
    ce = null,
    de.visible = !1,
    dt(new Z(Math.sin(j),0,Math.cos(j)), 22, 10, 6, 2),
    k?.sendNow()),
    Rf()
}
h("#club-invite").addEventListener("click", bw);
var hg = [1e3, 5e3, 1e4, 2e4, 5e4];
function Sh() {
    if (!m)
        return ne("spray money");
    let e = (k?.nearby(16) || []).filter(t => t.username);
    R("\u{1F4B8} Spray money", `Throw naira at someone dancing, or make it rain over the dance floor. Everyone in the club sees it. You have ${y(A)}.`, [{
        text: "Make it rain",
        small: "Throw it in the air over the dance floor \xB7 it goes to the club",
        right: "Choose",
        main: !0,
        onClick: () => R("\u{1F4B8} Make it rain", "How much do you throw?", hg.map(t => ({
            text: y(t),
            right: "Throw",
            disabled: t > A,
            onClick: () => V2(t)
        })), Sh)
    }, ...e.length ? [{
        head: !0,
        text: "Spray someone near you"
    }, ...e.map(t => ({
        text: `@${t.username}`,
        right: "Spray",
        onClick: () => R(`Spray @${t.username}`, "How much?", hg.map(n => ({
            text: y(n),
            right: "Spray",
            disabled: n > A,
            onClick: () => U2(t, n)
        })), Sh)
    }))] : [{
        text: "Nobody near you to spray",
        small: "Dance closer to people to spray them",
        onClick: Ee
    }]])
}
var kw = () => "spray" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
async function U2(e, t) {
    if (E(),
    t > A)
        return g("You don't have enough money.");
    try {
        let n = await cl({
            to: e.uid,
            amount: t,
            id: kw()
        });
        typeof n.balance == "number" && (A = n.balance,
        m.player.money = A,
        _e()),
        Sr("spray", m.uid, e.uid, t),
        k?.sendChat(`\u{1F4B8} sprayed @${e.username} ${y(t)}!`)
    } catch (n) {
        g(n.message, 4500)
    }
}
async function V2(e) {
    if (E(),
    e > A)
        return g("You don't have enough money.");
    try {
        let t = await cl({
            action: "rain",
            amount: e,
            id: kw()
        });
        typeof t.balance == "number" && (A = t.balance,
        m.player.money = A,
        _e()),
        Sr("up", m.uid, null, e),
        k?.sendChat(`\u{1F4B8} made it rain ${y(e)}!`)
    } catch (t) {
        g(t.message, 4500)
    }
}
var vw = new Ue(.45,.21)
  , Cw = [["#9a6b3c", "#e7d3a8", "1000"], ["#3f8f5a", "#cfe7c8", "500"], ["#7b4dd8", "#e2d4f7", "200"]].map( ([e,t,n]) => {
    let o = document.createElement("canvas");
    o.width = 128,
    o.height = 60;
    let a = o.getContext("2d");
    a.fillStyle = e,
    a.fillRect(0, 0, 128, 60),
    a.fillStyle = t,
    a.fillRect(6, 6, 116, 48),
    a.fillStyle = e,
    a.font = "900 26px DM Sans, sans-serif",
    a.textAlign = "center",
    a.textBaseline = "middle",
    a.fillText("\u20A6" + n, 64, 31);
    let i = new Ke(o);
    return i.colorSpace = qe,
    new ze({
        map: i,
        side: tn
    })
}
)
  , Ew = 300
  , fg = 6e4
  , lr = []
  , J2 = new Kt
  , pg = new Xa
  , mg = new Fr
  , gg = new Z
  , yg = new Z;
function K2(e) {
    if (lr[e])
        return lr[e];
    let t = new yo(vw,Cw[e],Ew);
    return t.count = 0,
    t.frustumCulled = !1,
    J.add(t),
    lr[e] = {
        mesh: t,
        list: []
    }
}
function X2(e, t, n, o) {
    let a = Math.abs(t - Rt[0]) < 5.05 && Math.abs(n - Rt[1] - Tw) < 5.05
      , i = K2(e);
    i.list.push({
        x: t,
        z: n,
        rot: o,
        at: performance.now(),
        y: (a ? .065 : .03) + i.list.length % 9 * .0015
    }),
    i.list.length > Ew && i.list.shift(),
    Pf(i)
}
function Pf(e) {
    let t = performance.now();
    e.list = e.list.filter(n => t - n.at < fg + 1500),
    e.list.forEach( (n, o) => {
        let a = Math.max(0, Math.min(1, (fg + 1500 - (t - n.at)) / 1500));
        mg.set(-Math.PI / 2, 0, n.rot),
        pg.setFromEuler(mg),
        gg.set(n.x, n.y, n.z),
        yg.setScalar(a),
        e.mesh.setMatrixAt(o, J2.compose(gg, pg, yg))
    }
    ),
    e.mesh.count = e.list.length,
    e.mesh.instanceMatrix.needsUpdate = !0
}
function Z2() {
    for (let e of lr)
        e?.list.length && (e.list = [],
        Pf(e))
}
var Nd = 0;
function Q2(e) {
    if (Nd -= e,
    !(Nd > 0)) {
        Nd = .25;
        for (let t of lr)
            t && t.list.length && Pf(t)
    }
}
var Mo = [];
function Sr(e, t, n, o) {
    if (w !== "club" || !kn)
        return;
    let a = m?.uid || "me"
      , i = t === a
      , r = Math.min(70, 8 + Math.round(o / 1e3))
      , s = Math.min(3.5, .8 + r * .045);
    i ? le?.throwFor?.(e, s * 1e3 + 300) : k?.throwFor(t, e, s * 1e3 + 300);
    let l = u => u === a ? {
        x: x.x,
        z: x.z,
        h: j
    } : k?.stateOf(u);
    for (let u = 0; u < r; u++) {
        let d = new ae(vw,Cw[u % 3]);
        d.visible = !1,
        J.add(d),
        Mo.push({
            m: d,
            k: u % 3,
            kind: e,
            who: t,
            at: n,
            t: 0,
            start: u * s / r,
            phase: "wait",
            spin: 4 + Math.random() * 6,
            where: l
        })
    }
    if (Mo.length > 500)
        for (let u of Mo.splice(0, Mo.length - 500))
            J.remove(u.m)
}
var Tw = -1;
function ek(e) {
    for (let t = Mo.length - 1; t >= 0; t--) {
        let n = Mo[t];
        if (n.t += e,
        w !== "club") {
            J.remove(n.m),
            Mo.splice(t, 1);
            continue
        }
        if (n.phase === "wait") {
            if (n.t < n.start)
                continue;
            let o = n.where(n.who);
            if (!o) {
                J.remove(n.m),
                Mo.splice(t, 1);
                continue
            }
            n.from = new Z(o.x + Math.sin(o.h) * .45 + Math.cos(o.h) * .2,1.75,o.z + Math.cos(o.h) * .45 - Math.sin(o.h) * .2);
            let a = n.at ? n.where(n.at) : null;
            n.to = a ? new Z(a.x + (Math.random() - .5) * .6,1.8 + Math.random() * .6,a.z + (Math.random() - .5) * .6) : new Z(Rt[0] + (Math.random() - .5) * 9,4.6 + Math.random() * 1.6,Rt[1] + Tw + (Math.random() - .5) * 9),
            n.fly = n.at ? .35 : .6,
            n.t = 0,
            n.phase = "fly",
            n.m.visible = !0,
            n.m.position.copy(n.from);
            continue
        }
        if (n.phase === "fly") {
            let o = Math.min(1, n.t / n.fly);
            n.m.position.lerpVectors(n.from, n.to, o),
            n.at && (n.m.position.y += Math.sin(o * Math.PI) * .6),
            n.m.rotation.x += n.spin * e,
            n.m.rotation.z += n.spin * .6 * e,
            o >= 1 && (n.phase = "fall",
            n.vx = (Math.random() - .5) * .7,
            n.vz = (Math.random() - .5) * .7);
            continue
        }
        n.phase === "fall" && (n.m.position.x += (n.vx + Math.sin(n.t * 3 + t) * .4) * e,
        n.m.position.z += n.vz * e,
        n.m.position.y -= (n.at ? 1.4 : 1) * e,
        n.m.rotation.x += n.spin * .5 * e,
        n.m.rotation.y += n.spin * .4 * e,
        n.m.position.y <= .03 && (X2(n.k, n.m.position.x, n.m.position.z, Math.random() * Math.PI),
        J.remove(n.m),
        Mo.splice(t, 1)))
    }
}
var wg = new WeakSet;
function tk(e) {
    for (let t of e) {
        if (t.old || wg.has(t) || (wg.add(t),
        t.uid === m?.uid || w !== "club"))
            continue;
        let n = /^💸 sprayed @([\w.]+) (₦[\d,]+)!$/.exec(t.text || "")
          , o = /^💸 made it rain (₦[\d,]+)!$/.exec(t.text || "");
        if (n) {
            let a = +n[2].replace(/[^\d]/g, "")
              , i = n[1] === m?.player.username
              , r = i ? m.uid : k?.uidByName(n[1]);
            r && Sr("spray", t.uid, r, a),
            i && g(`\u{1F4B8} @${t.name} is spraying you ${n[2]}!`, 4e3)
        } else
            o && Sr("up", t.uid, null, +o[1].replace(/[^\d]/g, ""))
    }
}
h("#club-spray").addEventListener("click", Sh);
st && (window.__spray = (e="up", t=2e4) => Sr(e, m?.uid || "me", e === "up" ? null : m?.uid || "me", t));
st && (window.__rainAt = (e, t, n=5e4) => {
    let o = x.clone();
    x.set(Rt[0] + e, 0, Rt[1] + t),
    Sr("up", m?.uid || "me", null, n),
    x.copy(o)
}
);
var Sn = null
  , ys = null
  , bg = 0;
async function Mw() {
    if (ys && Date.now() - bg < 600 * 1e3)
        return ys;
    try {
        let e = await fetch("/api/crowds?club=1");
        e.ok && (ys = await e.json(),
        bg = Date.now())
    } catch {}
    return ys || {}
}
function nk() {
    let e = Sn = {
        vid: null,
        muted: !1,
        timer: 0,
        check: 0
    };
    Nf(),
    cr(),
    e.sync = setInterval( () => ok(e), 6e4)
}
async function ok(e) {
    let t = await Mw();
    if (Sn !== e)
        return;
    let n = Lf(t.vids);
    (!n || n.v[0] !== e.vid) && cr()
}
function Lf(e) {
    let t = e || [];
    if (!t.length)
        return null;
    let n = t.reduce( (l, u) => l + u[1], 0)
      , o = (Q() / 1e3 % n + n) % n
      , a = 0;
    for (; o >= t[a][1]; )
        o -= t[a++][1];
    let i = t[a][1] - o
      , r = a
      , s = 0;
    for (; Zs.has(t[r][0]) && ++s < t.length; )
        r = (r + 1) % t.length;
    return Zs.has(t[r][0]) ? null : {
        v: t[r],
        at: r === a ? o : Math.max(0, t[r][1] - i),
        left: i
    }
}
st && (window.__club = () => ({
    vid: Sn?.vid,
    ytState: Xs,
    ytTime: +(cb + (performance.now() - ub) / 1e3).toFixed(1),
    shouldBe: +(Lf(ys?.vids)?.at || 0).toFixed(1),
    seek: e => ak("seekTo", [e, !0])
}));
var ak = (e, t=[]) => Je?.element.firstChild.contentWindow?.postMessage(JSON.stringify({
    event: "command",
    func: e,
    args: t
}), "*");
async function cr() {
    let e = Sn;
    if (!e)
        return;
    clearTimeout(e.timer),
    clearTimeout(e.check);
    let t = await Mw();
    if (Sn !== e || w !== "club")
        return;
    let n = Lf(t.vids);
    if (!n) {
        e.timer = setTimeout(cr, 6e4);
        return
    }
    e.vid = n.v[0],
    kn.setDj?.(Mm(n.v[2])),
    e.timer = setTimeout(cr, (n.left + 2) * 1e3),
    t0(),
    n0(356, 200);
    let o = Je.element.firstChild
      , a = `https://www.youtube.com/embed/${e.vid}?autoplay=1&mute=${e.muted ? 1 : 0}&controls=0&playsinline=1&rel=0&modestbranding=1&enablejsapi=1&origin=${encodeURIComponent(location.origin)}&start=${Math.floor(n.at)}`;
    Xs = -1,
    o.src !== a && (o.src = a);
    let i = kn.screen;
    Je.position.set(Rt[0] + i.x, i.y, Rt[1] + i.z),
    Je.rotation.set(0, 0, 0),
    Je.scale.setScalar(i.w / 356),
    Je.visible = !0,
    Pt.domElement.hidden = !1,
    e.muted || (e.check = setTimeout( () => {
        Sn !== e || !Wc || Xs === 1 || (e.muted = !0,
        Nf(),
        cr(),
        g("Tap \u{1F50A} to turn the music on.", 4e3))
    }
    , 6e3))
}
function ik() {
    let e = Sn;
    e && (Sn = null,
    clearTimeout(e.timer),
    clearTimeout(e.check),
    clearInterval(e.sync),
    Je && (Je.element.firstChild.src = "about:blank",
    Je.visible = !1),
    Pt && !Qe && (Pt.domElement.hidden = !0))
}
function rk() {
    let e = Sn;
    if (!e)
        return;
    e.muted = !e.muted;
    let t = Je?.element.firstChild.contentWindow;
    for (let[n,o] of e.muted ? [["mute", []]] : [["unMute", []], ["setVolume", [100]], ["playVideo", []]])
        t?.postMessage(JSON.stringify({
            event: "command",
            func: n,
            args: o
        }), "*");
    Nf()
}
function Nf() {
    let e = h("#club-music")
      , t = !!Sn?.muted;
    e.innerHTML = xe(t ? "volume-x" : "volume-2", 18),
    e.setAttribute("aria-label", t ? "Turn the music on" : "Mute the music"),
    e.setAttribute("aria-pressed", !t)
}
h("#club-btn").addEventListener("click", Rf);
h("#club-leave").addEventListener("click", F2);
h("#club-dance").addEventListener("click", () => {
    ce = null,
    zn(!ta)
}
);
h("#club-bar").addEventListener("click", Y2);
h("#club-music").addEventListener("click", rk);
var It = null
  , Si = []
  , Oa = null
  , te = null
  , Of = 0
  , Od = 0
  , Ah = !1
  , Gc = 0
  , Ar = 0
  , xg = performance.now() + (8 + Math.random() * 7) * 6e4
  , $w = () => "al-stop-" + m?.uid
  , Sw = e => {
    let t = Do({
        body: e % 3 === 2 ? "woman" : "man",
        hair: "policecap",
        outfit: "police",
        fabric: "plain",
        skin: ["#6e3f22", "#553019", "#8a5432"][e % 3],
        hairColour: "#141110",
        top: "#1b2030",
        bottom: "#1b2030"
    });
    return Oe(t.group),
    t.group.scale.setScalar(1.15),
    t
}
;
function Tu(e, t, n, o=[]) {
    let a = U.nearest(e, t);
    if (a < 0)
        return null;
    let[i,r] = U.nodes[a];
    for (let s = 12; s < 90; s += 2)
        for (let l = 0; l < Math.PI * 2; l += Math.PI / 12) {
            let u = i + Math.cos(l) * s
              , d = r + Math.sin(l) * s
              , c = Math.atan2(i - u, r - d);
            if (o.some(f => Math.hypot(f.x - u, f.z - d) < 22))
                continue;
            if (n.every( ([f,b]) => {
                let $ = u + Math.cos(c) * f + Math.sin(c) * b
                  , T = d - Math.sin(c) * f + Math.cos(c) * b;
                return !De($, T) && !vn($, T)
            }
            ))
                return {
                    x: u,
                    z: d,
                    h: c
                }
        }
    return null
}
function sk(e) {
    It = Qp({
        scene: J,
        graph: U,
        findPath: gn,
        lane: xa,
        along: Jn,
        makeOfficer: Sw,
        count: en ? 2 : 4
    });
    for (let t of Jp) {
        let n = t.near;
        if (t.near === "gate") {
            if (!e.gate)
                continue;
            let {x: i, z: r, angle: s} = e.gate
              , l = [Math.sin(s), Math.cos(s)];
            l[0] * -i + l[1] * -r < 0 && (l[0] = -l[0],
            l[1] = -l[1]),
            n = [i - l[0] * 90 - l[1] * 45, r - l[1] * 90 + l[0] * 45]
        }
        let o = Tu(n[0], n[1], [[0, -4], [-8, -8], [8, -8], [-8, -1], [8, -1], [0, 2]]);
        if (!o)
            continue;
        let a = Oe(Xp());
        a.position.set(o.x, 0, o.z),
        a.rotation.y = o.h,
        J.add(a),
        qa(o.x, o.z, o.h, -8, 8, -9, 0),
        ao("Police", o.x, 11, o.z),
        Si.push({
            ...t,
            x: o.x + Math.sin(o.h) * 3,
            z: o.z + Math.cos(o.h) * 3,
            h: o.h
        })
    }
}
function kg() {
    let e = [...Si].sort( (t, n) => Math.hypot(t.x - x.x, t.z - x.z) - Math.hypot(n.x - x.x, n.z - x.z));
    R("Police", "To report someone, tap them and choose Report to police. Answer officers politely: running or rudeness gets you locked up.", e.map(t => ({
        text: t.name,
        small: w === "city" ? `${fa(Math.hypot(t.x - x.x, t.z - x.z))} km away` : "",
        right: "Go",
        onClick: () => {
            E(),
            cn(t.name, t.x, t.z)
        }
    })))
}
function lk(e, t) {
    if (!It)
        return;
    It.update(e, t, x, te?.officer);
    let n = Date.now() < Ar;
    if (h("#wanted").hidden = !n,
    n) {
        let u = Math.ceil((Ar - Date.now()) / 1e3);
        h("#wanted").textContent = `WANTED \xB7 ${Math.floor(u / 60)}:${String(u % 60).padStart(2, "0")}`
    }
    if (te)
        return dk(e, t);
    if (Od -= e,
    Od > 0 || (Od = 1,
    !m || B || P?.driving || Ne?.riding || sn || Be))
        return;
    let o = ft() === "minister";
    if (!o && uk())
        return;
    if (Ah && (Ah = !1,
    !o))
        return Es(It.summon(x), "report");
    let a = 0;
    try {
        a = +(localStorage.getItem($w()) || 0)
    } catch {}
    let i = Lc()
      , r = Date.now() - a > qp / i
      , s = It.nearest(x, n ? 45 : 25)
      , l = !!xu().noRandomStops || o;
    if (s && (n || !l && r && Math.random() < i / 120))
        return Es(s, n ? "wanted" : "random");
    !l && r && performance.now() > xg && (xg = performance.now() + (15 + Math.random() * 10) * 6e4 / i,
    Es(It.nearest(x, 150) || It.summon(x), "random"))
}
var rc = 0
  , kc = 0
  , vg = 0;
function ck() {
    let e = m?.player.crew?.id;
    return !e || !k || w !== "city" ? 0 : k.nearby(15).filter(t => Ri.get(t.uid)?.id === e).length
}
function uk() {
    if (Date.now() < vg)
        return !1;
    let e = ck() >= 2;
    return kc ? Date.now() < kc ? !1 : (kc = 0,
    e ? (Es(It.nearest(x, 150) || It.summon(x), "gangarrest"),
    !0) : (vg = Date.now() + 15 * 6e4,
    g("The police are satisfied. Your crew split up.", 3e3),
    !1)) : (rc = e ? rc + 1 : 0,
    rc < 45 ? !1 : (rc = 0,
    Es(It.nearest(x, 150) || It.summon(x), "gang"),
    !0))
}
function Es(e, t) {
    Le && In();
    try {
        localStorage.setItem($w(), String(Date.now()))
    } catch {}
    let n = nm(hk())
      , o = Rh([...n.length ? [Yl(n)] : [], ...Rh(em).slice(0, t === "report" ? 2 : 1)]);
    te = {
        officer: e,
        stage: "approach",
        why: t,
        qs: o,
        step: 0,
        strikes: 0
    },
    g(t === "report" ? "Police! Somebody reported you. Stand there." : t === "wanted" ? "Police! You're the one we're looking for!" : t === "gang" || t === "gangarrest" ? `Police! What is this ${m.player.crew?.name || "crew"} gathering?` : "Police! Stand there.", 3500)
}
function dk(e, t) {
    let n = te.officer.ch.group
      , o = Math.hypot(n.position.x - x.x, n.position.z - x.z)
      , a = Math.atan2(x.x - n.position.x, x.z - n.position.z);
    if (n.rotation.y = a,
    te.stage === "approach" || te.stage === "chase") {
        let i = te.stage === "chase" ? 9 : 3.5
          , r = Math.min(1, i * e / Math.max(o, .01));
        n.position.x += (x.x - n.position.x) * r,
        n.position.z += (x.z - n.position.z) * r,
        te.officer.ch.tick(t * (te.stage === "chase" ? 2.4 : 1.2), 1),
        te.stage === "approach" && o < 2.4 ? (te.stage = "talk",
        j = a + Math.PI,
        te.why === "gang" ? Tn(`Too many ${m.player.crew?.name || "crew"} members gathered here. This looks like a gang. Split up in the next 30 seconds or you're all going to the station.`, [["Okay, we're leaving", "disperse"], ["Run!", "run"]]) : te.why === "gangarrest" ? (Tn("You were warned. Gang activity: you're under arrest.", []),
        setTimeout( () => te?.why === "gangarrest" && Fs("gang"), 2200)) : Hh()) : te.stage === "approach" && o > 45 ? Rw() : te.stage === "chase" && o < 1.6 ? Fs("ran") : te.stage === "chase" && o > 75 && (Ar = Date.now() + Up,
        It.release(te.officer),
        te = null,
        Ya(),
        g("You got away\u2026 but you're WANTED for 10 minutes. Keep away from the police.", 5e3))
    } else
        te.officer.ch.tick(t, 0)
}
var Rh = e => [...e].sort( () => Math.random() - .5);
function hk() {
    let e = m.player
      , t = il()?.name
      , n = new Date(Q() + 36e5).getUTCHours();
    return {
        home: e.home && Re[e.home] ? Ze(e.home) : null,
        homes: Object.keys(Re).map(Ze),
        job: t,
        jobs: He.map(o => o.name).filter(o => o && o !== t),
        biz: He.find(o => o.owner === m.uid)?.name || null,
        crew: e.crew?.name || null,
        rich: A >= 1e6,
        night: n >= 22 || n < 5,
        car: !!da(),
        hungry: Nt() < 20
    }
}
function Tn(e, t) {
    h("#cop-line").textContent = e;
    let n = h("#cop-answers");
    n.innerHTML = "";
    for (let[o,a] of t) {
        let i = document.createElement("button");
        i.type = "button",
        i.textContent = o,
        i.className = a,
        i.onclick = () => fk(a),
        n.appendChild(i)
    }
    h("#cop").hidden = !1
}
var Ya = () => {
    h("#cop").hidden = !0
}
;
function Hh(e="") {
    let t = te.qs[te.step];
    if (!t)
        return pk(e);
    Tn(e + t.q, [...Rh(t.a), ["Run!", "run"]])
}
function fk(e) {
    if (Be && Be.role === "defender" && !Be.done) {
        if (Ya(),
        h("#cop .cop-who").textContent = "Police officer",
        e === "fightback")
            Be.back = !0,
            g(`You're fighting @${Be.name}!`),
            k?.sendNow();
        else if (e === "runaway") {
            Be.done = !0;
            let a = Be;
            Be = null,
            Of = performance.now() + 6e3,
            g("You ran off. Police are dealing with it."),
            k?.sendNow()
        } else
            e === "report" && zw(Be.with, Be.name);
        return
    }
    if (!te)
        return;
    if (e === "run")
        return Rw();
    if (e === "ok") {
        It.release(te.officer),
        te = null,
        Ya();
        return
    }
    if (e === "disperse") {
        It.release(te.officer),
        te = null,
        Ya(),
        kc = Date.now() + 3e4,
        g("Move away from your crew (more than 15 m) within 30 seconds.", 5e3);
        return
    }
    if (te.stage !== "talk")
        return;
    let t = te.qs[te.step++]
      , n = e === "funny" && Math.random() < .25;
    if (e === "polite" || e === "funny" && !n)
        return Hh(Yl(rd[e]) + " ");
    let o = e === "lie" ? t.caught : Yl(rd[n ? "flop" : "rude"]);
    if (++te.strikes < 2)
        return Hh(`${o} One more and you're coming with me. `);
    te.stage = "arresting",
    Tn(`${o} That's it. You're under arrest.`, []),
    setTimeout( () => te?.stage === "arresting" && Fs(e === "lie" ? "lied" : "rude"), 2200)
}
function pk(e="") {
    te.stage = "search",
    Tn(e + "Stand there. Let me search you\u2026", []);
    let t = te
      , n = Aw()
      , o = mk(n);
    setTimeout(async () => {
        let a = await o;
        if (te === t) {
            if (a?.found && a.immune)
                return te.stage = "talk",
                Tn(`This${a.back ? ` ${y(a.back)}` : ""} na ${a.names?.length ? a.names.map(i => "@" + i).join(" and ") : "somebody"} own. We'll give it back to them. You're the ${jc()}, so we can't arrest you\u2026 but this one go reach the news.`, [["Carry on, officer", "ok"]]);
            if (a?.found) {
                if (te.stage = "arresting",
                Tn(`Wetin be this${a.back ? ` ${y(a.back)}` : ""} for your pocket? Na ${a.names?.length ? a.names.map(i => "@" + i).join(" and ") : "somebody"} own! You're under arrest.`, []),
                !m.player.jail) {
                    let i = Q();
                    m.player.jail = {
                        ...a.jail,
                        st: n,
                        at: {
                            toMillis: () => i
                        }
                    }
                }
                return setTimeout( () => {
                    te === t && (It.release(t.officer),
                    te = null,
                    Ya(),
                    Bw())
                }
                , 2600)
            }
            if (te.why === "wanted")
                return Fs("ran");
            Tn("Nothing found. You can go. Safe journey.", [["Thank you, officer", "ok"]])
        }
    }
    , 2500)
}
var Aw = () => [...Si].sort( (e, t) => Math.hypot(e.x - x.x, e.z - x.z) - Math.hypot(t.x - x.x, t.z - x.z))[0]?.id || "cbd";
async function mk(e) {
    try {
        let t = await $e(Te).currentUser.getIdToken()
          , n = await fetch("/api/steal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + t
            },
            body: JSON.stringify({
                action: "search",
                st: e
            })
        });
        return n.ok ? await n.json() : null
    } catch {
        return null
    }
}
function Rw() {
    Ya(),
    te.stage = "chase",
    Of = performance.now() + 12e3,
    g("RUN! Tap far away to get away from the officer.", 3e3)
}
var jc = () => ft() === "minister" ? "Minister" : ft() ? "Senator" : "";
function gk() {
    if (Ar = 0,
    !te)
        return g(`You're a serving ${jc()}: the police can't arrest you.`, 4e3);
    te.stage = "talk",
    Tn(`Ah! Sorry, ${jc()}, I didn't recognise you. You can't be arrested while you're in office. Please go, sir/ma.`, [["Carry on, officer", "ok"]])
}
async function Fs(e) {
    if (ft())
        return gk();
    let t = Vp[e]
      , n = te?.officer;
    te = null,
    Ya(),
    n && It.release(n),
    xt && rl?.("You were arrested, so your shift ended.");
    let o = Aw()
      , a = {
        at: ie(),
        mins: t.mins,
        bail: t.bail,
        reason: t.reason,
        st: o
    };
    try {
        await mn(ee(W, "players", m.uid), {
            jail: a,
            updatedAt: ie()
        })
    } catch (r) {
        console.warn("jail", r.code || r)
    }
    let i = Q();
    m.player.jail = {
        ...a,
        at: {
            toMillis: () => i
        }
    },
    Ar = 0,
    await Fe(`Arrested: ${t.reason.toLowerCase()}\u2026`, 2200),
    Bf()
}
var Mu = () => {
    let e = m?.player.jail;
    return e?.at?.toMillis ? e.at.toMillis() + e.mins * 6e4 - Q() : 0
}
;
function yk() {
    Mu() > 0 ? Bf() : $u(!1)
}
function Bf() {
    w === "venue" && un(),
    P?.driving && Rn(),
    w === "street" && Kf(),
    Oa || (Oa = Zp( () => Sw(4)),
    Oa.group.position.set(qo[0], 0, qo[1]),
    J.add(Oa.group)),
    w = "cell",
    F = null,
    J.add(le.group),
    le.group.visible = !0,
    J.add(de),
    de.visible = !1,
    x.set(qo[0] + Oa.spawn[0], 0, qo[1] + Oa.spawn[1]),
    j = Math.PI,
    ce = null,
    J.background = new jo(1382171),
    J.fog = null,
    iu.intensity = .9,
    Vt.intensity = .6,
    X.minDistance = 4,
    X.maxDistance = 24,
    X.minPolarAngle = .35,
    X.maxPolarAngle = 1,
    dt(new Z(0,0,-1), 11, 9, 2, 1);
    for (let t of ["go-home", "hail", "food-btn", "club-btn", "trek", "leave-home", "place", "rent-chip"])
        h("#" + t).hidden = !0;
    h("#chat-btn").hidden = !1,
    et && et.setVisible(!1),
    It?.setVisible(!1);
    let e = m.player.jail;
    h("#jail-reason").textContent = e.reason,
    h("#jail-bail").textContent = `Pay bail \xB7 ${y(e.bail)}`,
    h("#jail-bail").hidden = !e.bail,
    clearInterval(Gc),
    Gc = setInterval(Cg, 1e3),
    Cg(),
    h("#jail").hidden = !1,
    k?.sendNow()
}
function Cg() {
    let e = Mu();
    if (e <= 0)
        return clearInterval(Gc),
        $u(!1);
    let t = Math.ceil(e / 1e3);
    h("#jail-time").textContent = `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")} left`,
    h("#jail-bail").disabled = m.player.jail.bail > A
}
async function $u(e) {
    let t = m.player.jail;
    if (!t)
        return;
    try {
        if (e) {
            if (t.bail > A)
                return g("Not enough money for bail.");
            let o = await $e(Te).currentUser.getIdToken()
              , a = await fetch("/api/politics", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + o
                },
                body: JSON.stringify({
                    action: "bail"
                })
            })
              , i = await a.json().catch( () => ({}));
            if (!a.ok)
                return g(i.error || "Couldn't pay bail. Try again.");
            typeof i.balance == "number" && (A = i.balance,
            m.player.money = A,
            _e()),
            i.state && sl(i.state)
        } else
            await mn(ee(W, "players", m.uid), {
                jail: Wr(),
                updatedAt: ie()
            })
    } catch (o) {
        if (console.warn("release", o.code || o),
        e)
            return g("Couldn't pay bail. Try again.");
        setTimeout( () => $u(!1), 5e3);
        return
    }
    delete m.player.jail,
    clearInterval(Gc),
    h("#jail").hidden = !0;
    let n = Si.find(o => o.id === t.st) || Si[0];
    w === "cell" && await Fe(e ? "Bail paid. You're free to go." : "Time served. You're free to go.", 1500),
    Io = "",
    w = "city",
    Sc(),
    X.minDistance = _t.dist[0],
    X.maxDistance = _t.dist[1],
    X.minPolarAngle = _t.polar[0],
    X.maxPolarAngle = _t.polar[1],
    et && et.setVisible(!0),
    It?.setVisible(!0),
    n && (x.set(n.x + Math.sin(n.h) * 3, 0, n.z + Math.cos(n.h) * 3),
    j = n.h,
    dt(new Z(Math.sin(j),0,Math.cos(j)), 22, 10, 6, 2)),
    h("#chat-btn").hidden = !1,
    g("You're out. Stay out of trouble!"),
    k?.sendNow()
}
h("#jail-bail").addEventListener("click", () => $u(!0));
h("#jail-lawyer").addEventListener("click", () => $i("jail"));
var Eg = !1;
function Hw() {
    Eg || !k || !m || (Eg = !0,
    k.watchPoliceReports(e => {
        let t = "al-reports-" + m.uid
          , n = 0;
        try {
            n = +(localStorage.getItem(t) || 0)
        } catch {}
        let o = e.filter(a => a.t > n && k.serverNow() - a.t < 600 * 1e3);
        if (o.length) {
            try {
                localStorage.setItem(t, String(Math.max(...o.map(a => a.t))))
            } catch {}
            Ah = !0
        }
    }
    ))
}
async function zw(e, t) {
    if (!m)
        return ne("report people to the police");
    let n = await k.reportToPolice(e);
    g(n ? `Police have been told. An officer will check on @${t}.` : `You already reported @${t} recently.`, 4e3)
}
function wk() {
    let e = (t, n, o, a, i) => {
        if (Ro.some(s => s.name.toLowerCase() === t.toLowerCase()))
            return;
        let r = {
            name: t,
            x: n,
            z: o,
            kind: a
        };
        Ro.push(r),
        i && Jt.push({
            ...r,
            kind: "Popular"
        })
    }
    ;
    ue && e(ot, ue.x, ue.z, "Club", !0),
    Se && e(dn.name, Se.x, Se.z, "Hospital", !0);
    for (let t of Wn)
        e(t.name, t.x, t.z, t.kind === "market" ? "Market" : "Boutique", !0);
    for (let t of Xr) {
        let n = Fn[t.id];
        if (n) {
            e(t.name, n.x, n.z, t.kind === "campus" ? "University" : t.far ? "Outside the city" : "Hangout", t.kind !== "campus");
            for (let o of [...Ro, ...Jt])
                o.name === t.name && (o.far = t.far)
        }
    }
    for (let t of Si)
        e(t.name, t.x, t.z, "Police");
    for (let t of Lt)
        e(t.name, t.x, t.z, "Food");
    for (let t of tl)
        e(`${t.name} Along stop`, t.x, t.z, "Along stop")
}
var St = !1
  , qn = !1
  , Su = () => ({
    level: m?.player.homeLevels?.[m.player.home] || 1,
    items: m?.player.furniture || [],
    furnished: Array.isArray(m?.player.furniture)
})
  , Iw = e => [...e.items, ...nb(), ...e.furnished && !e.items.length ? ["-"] : []]
  , Ai = e => (m?.player.furniture || []).includes(e);
function _f() {
    if (w !== "home" || F || !m)
        return;
    let e = Su()
      , t = Wt + "|" + e.level + "|" + e.items.join(",");
    if (me.key === t)
        return;
    Mt.remove(me.group),
    me = Ur(Wt, e),
    me.type = Wt,
    me.key = t,
    Mt.add(me.group),
    me.isFree(x.x, x.z) || x.set(me.spawn[0], 0, me.spawn[1]);
    let n = Io === "night" || Io === "evening";
    me.setNight(n),
    h("#place").textContent = `${me.name} \xB7 ${Ze(Wt)}`,
    k?.setHouseMeta(e.level, Iw(e)),
    mb(e.items),
    ut && (e0() ? lb() : wa())
}
var bk = {
    bed2: "\u{1F6CF}\uFE0F",
    bed3: "\u{1F6CF}\uFE0F",
    wardrobe: "\u{1F6AA}",
    sofa2: "\u{1F6CB}\uFE0F",
    sofa3: "\u{1F6CB}\uFE0F",
    rug: "\u{1F9F6}",
    lamp: "\u{1F4A1}",
    shelf: "\u{1F4DA}",
    art: "\u{1F5BC}\uFE0F",
    plant: "\u{1FAB4}",
    dining: "\u{1F37D}\uFE0F",
    tv1: "\u{1F4FA}",
    tv2: "\u{1F4FA}",
    ps5: "\u{1F3AE}",
    speaker: "\u{1F50A}",
    radio: "\u{1F4FB}",
    fridge1: "\u{1F9CA}",
    fridge2: "\u{1F9CA}",
    cooker1: "\u{1F525}",
    cooker2: "\u{1F373}",
    fan: "\u{1F300}",
    ac: "\u2744\uFE0F",
    gen: "\u26A1",
    solar: "\u2600\uFE0F"
}
  , Ts = {
    bed3: "bed2",
    sofa3: "sofa2",
    tv2: "tv1",
    fridge2: "fridge1",
    cooker2: "cooker1",
    ac: "fan",
    solar: "gen"
}
  , xk = {
    bed: "Tap it to sleep",
    sofa: "Tap it to sit",
    tv: "Tap it to watch live TV",
    radio: "Tap it for Abuja FM",
    ps5: "Tap it to play",
    speaker: "Tap it for music",
    fridge: "Tap it to cook",
    cooker: "Tap it to cook",
    cool: "Keeps the room cool",
    power: "Light when NEPA takes it",
    wardrobe: "Tap it to change clothes",
    dining: "Tap it to sit",
    shelf: "Tap it to read",
    plant: "Tap it to water",
    lamp: "Cosy light",
    art: "Looks nice",
    rug: "Looks nice"
}
  , kk = e => xk[Object.keys(zh).find(t => zh[t].includes(e))] || ""
  , vc = ["Basic", "Renovated", "Luxury"]
  , Ys = e => /^\d/.test(e.name) ? e.name : e.name[0].toLowerCase() + e.name.slice(1)
  , vk = [["overview", "Overview", "home"], ["shop", "Shop", "store"], ["mine", "My things", "sofa"]]
  , Ms = "overview"
  , tr = "All";
function Au(e) {
    if (re(),
    E(),
    !m)
        return ne("have a home");
    e && (Ms = e),
    Gt = "home",
    h("#gov-panel").hidden = !1,
    Ru()
}
function Ru() {
    if (Gt !== "home" || h("#gov-panel").hidden || !m)
        return;
    let e = m.player.home
      , t = Su().level
      , n = _n.filter(r => Ai(r.id))
      , o = n.reduce( (r, s) => r + s.price, 0);
    h("#gov-kicker").textContent = "My house",
    h("#gov-title").textContent = `${Re[e].name.split("\xB7")[0].trim()} \xB7 ${Ze(e)}`,
    h("#gov-sub").textContent = `${vc[t - 1]} \xB7 ${n.length} ${n.length === 1 ? "thing" : "things"} worth ${y(o)} \xB7 you have ${y(A)}`;
    let a = h("#gov-tabs");
    a.innerHTML = "";
    for (let[r,s,l] of vk) {
        let u = N("button", "gov-tab" + (r === Ms ? " on" : ""));
        u.type = "button",
        u.innerHTML = xe(l, 16) + "<span></span>",
        u.lastChild.textContent = s,
        u.onclick = () => {
            Ms = r,
            Ru()
        }
        ,
        a.appendChild(u)
    }
    let i = h("#gov-body");
    i.innerHTML = "",
    i.scrollTop = 0,
    {
        overview: Ck,
        shop: Ek,
        mine: Tk
    }[Ms](i, {
        d: e,
        lvl: t,
        mine: n,
        worth: o
    })
}
var Gf = (e, t) => {
    Ms = e,
    t && (tr = t),
    Ru()
}
;
function Ck(e, {d: t, lvl: n, mine: o, worth: a}) {
    let i = N("div", "gov-stats");
    if (i.append(ct("Level", vc[n - 1], n < 3 ? "renovate for more room" : "the best there is"), ct("Things", `${o.length} of ${_n.length}`, "furniture & appliances"), ct("Worth", y(a), "what you paid"), ct("Your money", y(A), "")),
    e.appendChild(i),
    w !== "home" || F) {
        let c = ge("You're out", "Things you buy are delivered to your house straight away. Go home to use them.");
        c.appendChild(at("Go home", () => {
            Yn(),
            pa()
        }
        , "ghost")),
        e.appendChild(c)
    }
    let r = m.player.lastTheft
      , s = r?.at?.toMillis ? Date.now() - r.at.toMillis() : 1 / 0
      , l = r && _n.find(c => c.id === r.item);
    if (r && s < 14 * 864e5 && r.item !== "pocket") {
        let c = ge("\u26A0 You were robbed", `@${r.byName} stole ${l ? `your ${Ys(l)}` : r.name} from your house on ${ho(r.at.toMillis())} while you were out.`, "warn");
        l && !Ai(l.id) && c.appendChild(at(`Buy a new ${Ys(l)} \xB7 ${y(l.price)}`, () => Lw(l), "", l.price > A)),
        e.appendChild(c)
    }
    if (n < 3) {
        let c = od[t][n - 1]
          , p = ge(`Renovate to ${vc[n]}`, n === 1 ? "A bigger room, fresh paint and nicer tiles. Bigger rooms fit more things (bookshelf, dining set)." : "Even bigger, with wood floors and a ceiling light.");
        p.appendChild(at(`Renovate \xB7 ${y(c)}`, () => R(`Renovate to ${vc[n]}?`, `${y(c)}. You'll have ${y(A - c)} left.`, [{
            text: `Renovate for ${y(c)}`,
            main: !0,
            onClick: () => {
                Yn(),
                $k()
            }
        }, {
            text: "Cancel",
            onClick: E
        }]), "", c > A)),
        e.appendChild(p)
    }
    let u = ge("Rooms", "Tap a room to shop for it.");
    for (let c of [...new Set(_n.map(p => p.cat))]) {
        let p = _n.filter(b => b.cat === c)
          , f = p.filter(b => Ai(b.id)).length;
        u.appendChild($t(c, p.map(b => b.name).slice(0, 3).join(", ") + "\u2026", `${f}/${p.length}`, () => Gf("shop", c)))
    }
    e.appendChild(u),
    e.appendChild(ge("Keep your things safe", "Thieves can only take things while you're out, and only people you've invited can get in. Party guests lose access when your party ends. Robbed? Report them and the police arrest them."));
    let d = ge("", "");
    d.append(...m.player.owned ? [] : [$t("Rent", "Pay your rent", "", () => {
        Yn(),
        cu()
    }
    )], $t("Houses", "Buy a house, choose where you live", "", () => {
        Yn(),
        Cf()
    }
    ), ...w === "home" && !F ? [$t("Kitchen", "Cook from your foodstuffs", "", () => {
        Yn(),
        ul()
    }
    )] : []),
    e.appendChild(d)
}
function Ek(e) {
    let t = ["All", ...new Set(_n.map(a => a.cat))];
    t.includes(tr) || (tr = "All");
    let n = ge("", `Delivered to your house straight away. You have ${y(A)}.`);
    n.appendChild(Ut(t.map(a => ({
        label: a,
        on: a === tr,
        onClick: () => Gf("shop", a)
    })))),
    e.appendChild(n);
    let o = N("div", "shop-grid");
    for (let a of _n.filter(i => tr === "All" || i.cat === tr))
        o.appendChild(Pw(a, !0));
    e.appendChild(o)
}
function Tk(e, {mine: t, worth: n}) {
    if (!t.length) {
        let a = ge("Nothing yet", "Buy a TV, a fridge, a PS5\u2026 they show up in your house and you can use them (and show them off to guests).");
        a.appendChild(at("Go to the shop", () => Gf("shop", "All"))),
        e.appendChild(a);
        return
    }
    e.appendChild(ge("", `${t.length} ${t.length === 1 ? "thing" : "things"} worth ${y(n)}. Tap them in your house to use them. Stolen things are gone for good: buy them again in Shop.`));
    let o = N("div", "shop-grid");
    for (let a of t)
        o.appendChild(Pw(a, !1));
    e.appendChild(o)
}
function Pw(e, t) {
    let n = Ai(e.id)
      , o = N("button", "shop-item" + (n ? " own" : ""));
    o.type = "button";
    let a = Ts[e.id] && _n.find(i => i.id === Ts[e.id]);
    return o.append(N("span", "em", bk[e.id] || "\u{1F4E6}"), N("b", "", e.name), N("small", "", n ? kk(e.id) : a ? `Upgrade from the ${Ys(a)}` : /bigger rooms/i.test(e.name) ? "Needs a renovated room" : e.cat), N("span", "price", n ? t ? "Yours" : `Worth ${y(e.price)}` : y(e.price))),
    n && o.appendChild(N("span", "tick", "\u2713")),
    o.disabled = n || e.price > A,
    n || (o.onclick = () => Lw(e)),
    o
}
function Lw(e) {
    if (e.price > A)
        return g(`You need ${y(e.price)}. You have ${y(A)}.`);
    let t = Ts[e.id] && Ai(Ts[e.id]) ? _n.find(n => n.id === Ts[e.id]) : null;
    R(`Buy the ${Ys(e)}?`, `${y(e.price)}. You'll have ${y(A - e.price)} left.${t ? ` It goes in the room instead of your ${Ys(t)}.` : ""}`, [{
        text: `Buy for ${y(e.price)}`,
        main: !0,
        onClick: async () => {
            await Mk(e),
            Ru()
        }
    }, {
        text: "Cancel",
        onClick: E
    }])
}
async function Mk(e) {
    E();
    let t = A - e.price
      , n = [...m.player.furniture || [], e.id];
    try {
        let o = Xt(W);
        o.update(ee(W, "players", m.uid), {
            money: t,
            furniture: n,
            updatedAt: ie()
        }),
        o.set(ee(mt(W, "players", m.uid, "transactions")), {
            amount: -e.price,
            reason: "home",
            label: `${e.name} for your home`,
            balance: t,
            createdAt: ie()
        }),
        await o.commit(),
        A = t,
        m.player.money = t,
        m.player.furniture = n,
        _e(),
        g(w === "home" && !F ? `Your ${e.name.toLowerCase()} has been set up!` : `Your ${e.name.toLowerCase()} will be waiting at home.`, 4e3),
        _f()
    } catch (o) {
        console.warn("furniture", o.code || o),
        g("Couldn't buy that. Try again.")
    }
}
async function $k() {
    E();
    let e = m.player.home
      , t = Su().level + 1
      , n = od[e][t - 2]
      , o = A - n;
    try {
        let a = Xt(W);
        a.update(ee(W, "players", m.uid), {
            money: o,
            ["homeLevels." + e]: t,
            updatedAt: ie()
        }),
        a.set(ee(mt(W, "players", m.uid, "transactions")), {
            amount: -n,
            reason: "home",
            label: `Renovated your home in ${Ze(e)}`,
            balance: o,
            createdAt: ie()
        }),
        await a.commit(),
        A = o,
        m.player.money = o,
        m.player.homeLevels = {
            ...m.player.homeLevels || {},
            [e]: t
        },
        _e(),
        w === "home" && !F && await Fe("The builders are working\u2026", 2200),
        g(`Renovation done! Your home is ${t === 2 ? "bigger and fresher" : "now luxury"}.`, 4e3),
        _f()
    } catch (a) {
        console.warn("renovate", a.code || a),
        g("Couldn't renovate. Try again.")
    }
}
var zh = {
    bed: ["bed3", "bed2"],
    sofa: ["sofa3", "sofa2"],
    tv: ["tv2", "tv1"],
    ps5: ["ps5"],
    speaker: ["speaker"],
    fridge: ["fridge2", "fridge1"],
    cooker: ["cooker2", "cooker1"],
    cool: ["ac", "fan"],
    power: ["solar", "gen"],
    radio: ["radio"],
    dining: ["dining"],
    wardrobe: ["wardrobe"],
    shelf: ["shelf"],
    plant: ["plant"],
    lamp: ["lamp"],
    art: ["art"],
    rug: ["rug"]
};
async function Sk(e, t) {
    let n = !F
      , o = a => a[Math.floor(Math.random() * a.length)];
    if (F && !k?.houseHas(F.host)) {
        let a = (zh[e] || []).find(r => (F.meta?.items || []).includes(r))
          , i = a && _n.find(r => r.id === a);
        if (i)
            return R(i.name, `@${F.name} isn't home. You could take it and sell it for ${y(Math.round(i.price * .4 / 50) * 50)}\u2026 but they can report you to the police.`, [{
                text: "Steal it",
                main: !0,
                onClick: () => {
                    E(),
                    Ih(i)
                }
            }, {
                text: "Leave it",
                onClick: E
            }])
    }
    if (e === "bed")
        return n ? (await Fe("Sleeping\u2026", 3e3),
        g("You slept well. Fresh day!")) : g("Not your bed! Ask your host.");
    if (e === "sofa") {
        let a = new Z;
        return t.getWorldPosition(a),
        x.set(a.x - .1, 0, a.z),
        j = -Math.PI / 2,
        ce = null,
        de.visible = !1,
        St = !0,
        g("You sat down. Tap the floor to get up.")
    }
    if (e === "tv")
        return rb();
    if (e === "radio")
        return qv();
    if (e === "ps5")
        return await Fe("Gaming on the PS5\u2026", 2400),
        g(Math.random() < .55 ? `You won ${2 + Math.floor(Math.random() * 3)}\u2013${Math.floor(Math.random() * 2)}!` : "You lost on penalties. Rematch?");
    if (e === "speaker") {
        qn = !qn,
        qn ? (No.play(Math.floor(Math.random() * Vo.length), 0),
        g("Music on. Vibes!")) : (No.stop(),
        g("Music off."));
        return
    }
    if (e === "fridge" || e === "cooker")
        return n ? ul() : g("That's your host's kitchen.");
    if (e === "cool")
        return g(Ai("ac") ? "AC on. Cold, cold air. Ahh." : "The fan is spinning. Small relief from the heat.");
    if (e === "power")
        return g(Ai("solar") ? "Solar and inverter on. Steady light, no noise." : "NEPA took light? Your gen is on. I better pass my neighbour!", 4e3);
    if (e === "wardrobe")
        return n ? i0() : g("That's your host's wardrobe.");
    if (e === "dining")
        return g("You sat at the dining table. Who's cooking?");
    if (e === "shelf")
        return g("You read a few pages. Feeling smart.");
    if (e === "plant")
        return g("You watered the plant.");
    if (e === "lamp")
        return g("Cosy lighting on.");
    if (e === "art")
        return g("Nice art. Very Abuja.")
}
async function Ih(e) {
    await Fe(e ? `Carrying the ${e.name.toLowerCase()} out quietly\u2026` : "Searching the drawers quietly\u2026", 2500);
    try {
        let t = await $e(Te).currentUser.getIdToken()
          , n = await fetch("/api/steal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + t
            },
            body: JSON.stringify(e ? {
                host: F.host,
                item: e.id
            } : {
                host: F.host,
                action: "cash"
            })
        })
          , o = await n.json().catch( () => ({}));
        if (!n.ok)
            return g(o.error || "You couldn't take it.", 4e3);
        A = o.money,
        m.player.money = A,
        _e(),
        Ye("steal");
        let a = F?.name || "the owner";
        if (!e)
            return R(`You took ${y(o.gain)}`, `${y(o.gain)} (20% of @${a}'s money, at most \u20A6500,000) is now in your wallet. They've been told: if they report you, the police arrest you on the spot.`, [{
                text: "OK",
                main: !0,
                onClick: E
            }]);
        if (F?.meta) {
            F.meta.items = F.meta.items.filter(r => r !== e.id),
            F.meta.furnished = !0;
            let i = F;
            Mt.remove(me.group),
            me = Ur(Wt, i.meta),
            me.type = Wt,
            me.key = "visit",
            Mt.add(me.group)
        }
        h("#steal-btn").hidden = !1,
        R(`You sold the ${e.name.toLowerCase()}`, `You can't keep stolen things: a fence bought it straight away for 40% of its price. ${y(o.gain)} is now in your wallet. @${a} has been told: if they report you, the police arrest you on the spot.`, [{
            text: "OK",
            main: !0,
            onClick: E
        }])
    } catch (t) {
        console.warn("steal", t),
        g("Something went wrong.")
    }
}
async function Nw(e) {
    if (F)
        try {
            let t = await $e(Te).currentUser.getIdToken()
              , n = await fetch("/api/steal", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + t
                },
                body: JSON.stringify({
                    action: "look",
                    host: F.host
                })
            })
              , o = await n.json().catch( () => ({}));
            if (!n.ok)
                return g(e ? `@${F.name} isn't home. (${o.error || "You can't search here right now"})` : o.error || "Not now.", 5e3);
            F.meta = {
                level: o.level || 1,
                items: o.items || [],
                furnished: !!o.furnished
            };
            let a = Wt + "|v|" + F.meta.level + "|" + F.meta.items.join(",");
            me.key !== a && (Mt.remove(me.group),
            me = Ur(Wt, F.meta),
            me.type = Wt,
            me.key = a,
            Mt.add(me.group),
            me.isFree(x.x, x.z) || x.set(me.spawn[0], 0, me.spawn[1]));
            let i = _n.filter(r => F.meta.items.includes(r.id));
            h("#steal-btn").hidden = !1,
            e ? g(`@${F.name} isn't home. Their things are right there\u2026 (Look around)`, 5e3) : R("Look around", `@${F.name} isn't home. Take something\u2026 but they can report you to the police.`, [{
                text: "Search the house for cash",
                small: "Take 20% of their money (at most \u20A6500,000). They can report you.",
                right: "Search",
                onClick: () => {
                    E(),
                    Ih(null)
                }
            }, ...i.map(r => ({
                text: r.name,
                small: "A fence buys it for 40%: " + y(Math.round(r.price * .4 / 50) * 50),
                right: "Steal",
                onClick: () => {
                    E(),
                    Ih(r)
                }
            }))])
        } catch (t) {
            console.warn("look", t)
        }
}
h("#steal-btn").addEventListener("click", () => Nw(!1));
var Bd = 0
  , Tg = "";
function Ak(e) {
    if (Bd -= e,
    Bd > 0 || !k)
        return;
    if (Bd = 2,
    F) {
        let n = k.houseHas(F.host);
        n && !h("#steal-btn").hidden ? (h("#steal-btn").hidden = !0,
        g(`@${F.name} just came home!`, 4e3)) : !n && h("#steal-btn").hidden && Date.now() - (F.arrived || 0) > 4e3 && (k.noteVisit(F.host),
        h("#steal-btn").hidden = !1,
        g(`@${F.name} left the house\u2026 Their things are right there \u{1F440} (Look around)`, 5e3));
        return
    }
    let t = m?.player.lastTheft;
    !t?.at?.toMillis || Date.now() - t.at.toMillis() > 1800 * 1e3 || Tg === t.id || k.housePeople().includes(t.by) && (Tg = t.id,
    R("Catch the thief!", `@${t.byName} is still in your house, and they stole ${t.item === "cash" ? t.name : "your " + String(t.name).toLowerCase()}!`, [{
        text: "Beat them up",
        main: !0,
        onClick: () => {
            E(),
            Rk(t)
        }
    }, {
        text: "Call the police",
        onClick: () => {
            E(),
            Ws(t.id, t.byName)
        }
    }]))
}
async function Rk(e) {
    let t = await k.attack(e.by);
    if (!t)
        return Ws(e.id, e.byName);
    Be = {
        with: e.by,
        name: e.byName,
        role: "attacker",
        back: !1,
        selfDefence: !0,
        theftId: e.id,
        t0: performance.now(),
        t: String(t)
    },
    g(`You're beating up @${e.byName}!`, 2500),
    k?.sendNow()
}
async function Ws(e, t) {
    try {
        let n = await $e(Te).currentUser.getIdToken()
          , o = await fetch("/api/steal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + n
            },
            body: JSON.stringify({
                action: "report",
                id: e
            })
        })
          , a = await o.json().catch( () => ({}));
        g(o.ok ? a.demand ? `Police have told @${t} to give back your ${y(a.amount)}. If they refuse, they go to jail.` : a.immune ? `@${t} is the serving ${a.immune} and can't be arrested while in office${a.back ? `, but the police took back ${y(a.back)} of your money` : ""}.` : `Police are on it. @${t} has been arrested${a.back ? ` and ${y(a.back)} of your money is back in your wallet` : ""}.` : a.error || "Couldn't report it.", 6e3)
    } catch {
        g("Couldn't report it. Try again.")
    }
}
var Hk = 120 * 1e3
  , Ph = null
  , Lh = 0;
function zk(e) {
    let t = e.owed;
    if (!t?.id || Ph === t.id || !m)
        return;
    Ph = t.id,
    clearTimeout(Lh);
    let n = Hk - (Q() - (t.at?.toMillis ? t.at.toMillis() : 0));
    if (n <= 0)
        return sc(t, !1);
    Lh = setTimeout( () => {
        m.player.owed?.id === t.id && (E(),
        sc(t, !1))
    }
    , n),
    R("\u{1F6A8} Police: you've been reported", `@${t.toName || "someone"} reported you for picking their pocket. Give back ${y(t.amount)} with an apology and you walk free. ${ft() ? `You can't be jailed while you're ${jc()}, but if you refuse` : "Refuse and you go to jail (10 minutes or \u20A650,000 bail), and"} the police take the money back anyway. You have 2 minutes to answer.`, [{
        text: `Give back ${y(t.amount)} and say sorry`,
        main: !0,
        onClick: () => {
            E(),
            sc(t, !0)
        }
    }, {
        text: "Refuse",
        small: ft() ? "The police take it back" : "Go to jail",
        onClick: () => {
            E(),
            sc(t, !1)
        }
    }])
}
async function sc(e, t) {
    clearTimeout(Lh);
    try {
        let n = await $e(Te).currentUser.getIdToken()
          , o = await fetch("/api/steal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + n
            },
            body: JSON.stringify({
                action: "settle",
                id: e.id,
                pay: t
            })
        })
          , a = await o.json().catch( () => ({}));
        if (!o.ok)
            return g(a.error || "Couldn't reach the police. Try again.", 4e3);
        t && k?.sendDM(e.to, `\u{1F64F} I'm sorry for picking your pocket. I've given you back your ${y(a.back)}.`),
        g(t ? `You gave ${y(a.back)} back to @${e.toName} and said sorry. You're free to go.` : a.immune ? `You refused. You can't be arrested in office, but the police took back ${y(a.back || 0)}.` : `You refused. You're under arrest${a.back ? ` and the police took back ${y(a.back)}` : ""}.`, 6e3)
    } catch {
        Ph = null,
        g("Network problem. Try again.")
    }
}
var ss = null;
function Ik(e) {
    let t = e.lastTheft;
    if (!t?.at?.toMillis || !m)
        return;
    let n = "al-theft-" + m.uid;
    if (ss === null)
        try {
            ss = localStorage.getItem(n) || ""
        } catch {
            ss = ""
        }
    if (ss !== t.id) {
        ss = t.id;
        try {
            localStorage.setItem(n, t.id)
        } catch {}
        if (t.item === "pocket")
            return t.caught ? R("Someone tried to rob you!", `@${t.byName} tried to pick your pocket, but the police caught them. Nothing was taken.`, [{
                text: "OK",
                main: !0,
                onClick: E
            }]) : R("You've been robbed!", `@${t.byName} took ${t.name.replace(" from their pocket", "")} (20% of your money, at most \u20A6500,000) from your pocket. Report them: the police make them give it back, or they go to jail.`, [{
                text: "Report to police",
                main: !0,
                onClick: () => {
                    E(),
                    Ws(t.id, t.byName)
                }
            }, {
                text: "Let it go",
                onClick: E
            }]);
        _f(),
        R("You've been robbed!", t.item === "cash" ? `@${t.byName} stole ${t.name} (20% of your money, at most \u20A6500,000) from your house while you were out. Report them and the police arrest them on the spot, or let it go.` : `@${t.byName} stole your ${String(t.name).toLowerCase()} while you were out and sold it. Buy it again in My house (the sofa button at home). Report them and the police arrest them on the spot, or let it go.`, [{
            text: "Report to police",
            main: !0,
            onClick: () => {
                E(),
                Ws(t.id, t.byName)
            }
        }, {
            text: "Let it go",
            onClick: E
        }])
    }
}
var Mg = !1;
function Ow() {
    Mg || !k || !m || (Mg = !0,
    k.watchVisits(e => {
        let t = "al-visits-" + m.uid
          , n = 0;
        try {
            n = +(localStorage.getItem(t) || 0)
        } catch {}
        let o = e.filter(i => i.t > n).sort( (i, r) => i.t - r.t);
        if (!o.length)
            return;
        try {
            localStorage.setItem(t, String(o[o.length - 1].t))
        } catch {}
        let a = [...new Set(o.map(i => "@" + i.name))];
        setTimeout( () => g(`${a.join(", ")} came into your house while you were out. They could only get in because you invited them.`, 7e3), 1500)
    }
    ))
}
var _d = !1;
async function Bw() {
    _d || w === "cell" || (_d = !0,
    w === "club" && Or(),
    w === "home" && (k?.leaveHouse(),
    F = null,
    h("#leave-home").hidden = !0),
    P?.driving && Rn(),
    await Fe(`Police! You're under arrest: ${m.player.jail.reason.toLowerCase()}.`, 2500),
    Bf(),
    _d = !1)
}
var $g = "";
async function _w() {
    let e = new Date(Q() + 36e5).toISOString().slice(0, 10);
    if (!(!m || e === $g))
        try {
            let t = await $e(Te).currentUser.getIdToken()
              , n = await fetch("/api/track", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + t
                },
                body: JSON.stringify({
                    e: "hello"
                })
            });
            n.ok && ($g = e);
            let o = n.status === 200 ? (await n.json().catch( () => ({}))).ask : null;
            o?.id && Ps( () => setTimeout( () => Pk(o), 6e3))
        } catch {}
}
function Pk(e) {
    let t = o => {
        $e(Te).currentUser?.getIdToken().then(a => fetch("/api/track", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + a
            },
            body: JSON.stringify({
                e: "answer",
                id: e.id,
                ...o
            })
        })).catch( () => {}
        )
    }
    ;
    bu("The Abuja Life team has a question for you", `You're one of our most loyal players, so we'd love your opinion: "${e.q}"`, "Your answer\u2026", 600, "Send my answer", "", o => {
        if (o.trim().length < 2)
            return g("Write your answer first.");
        E(),
        t({
            text: o
        }),
        g("Thank you! The team will read it. \u{1F64F}", 4e3)
    }
    );
    let n = document.createElement("button");
    n.type = "button",
    n.className = "dest",
    n.innerHTML = "<span><b>Not now</b><small>You won't be asked this again</small></span>",
    n.onclick = () => {
        E(),
        t({
            skip: !0
        })
    }
    ,
    h("#act-list").appendChild(n)
}
setInterval(_w, 600 * 1e3);
var bi = {};
function $s(e) {
    if (m) {
        if (!Vi[e]) {
            st && console.warn("menu tap not in MENU_USAGE (usage.js):", e);
            return
        }
        bi[e] = (bi[e] || 0) + 1
    }
}
async function Gw(e=!1) {
    if (!m || !Object.keys(bi).length)
        return;
    let t = {
        ...bi
    };
    for (let n in bi)
        delete bi[n];
    try {
        let n = await $e(Te).currentUser.getIdToken();
        fetch("/api/track", {
            method: "POST",
            keepalive: e,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + n
            },
            body: JSON.stringify({
                e: "taps",
                taps: t
            })
        }).catch( () => {}
        )
    } catch {}
}
setInterval(Gw, 60 * 1e3);
document.addEventListener("visibilitychange", () => {
    document.hidden && Gw(!0)
}
);
st && (window.__menuTaps = () => ({
    ...bi
}));
async function Ye(e) {
    if (!(!m || !Wl[e]))
        try {
            let t = await $e(Te).currentUser.getIdToken();
            fetch("/api/track", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + t
                },
                body: JSON.stringify({
                    e
                })
            }).catch( () => {}
            )
        } catch {}
}
var ro = []
  , Ri = new Map;
async function qs() {
    try {
        let e = await fetch("/api/crews");
        if (!e.ok)
            return;
        ro = (await e.json()).crews || [],
        Ri = new Map;
        for (let t of ro)
            for (let n of t.members)
                Ri.set(n.uid, t);
        k?.refreshTags()
    } catch {}
}
qs();
setInterval( () => !document.hidden && qs(), 600 * 1e3);
var Lk = async e => {
    let t = await $e(Te).currentUser.getIdToken()
      , n = await fetch("/api/crews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + t
        },
        body: JSON.stringify(e)
    })
      , o = await n.json().catch( () => ({}));
    if (!n.ok)
        throw new Error(o.error || "Something went wrong");
    return o
}
;
function Sg() {
    return [...ro].sort( (e, t) => t.members.length - e.members.length).slice(0, 10).map( (e, t) => ({
        text: `${t + 1}. ${e.name}`,
        small: `${e.members.length} member${e.members.length === 1 ? "" : "s"} \xB7 led by @${e.members.find(n => n.uid === e.leader)?.name || "?"}`,
        onClick: () => {}
    }))
}
async function jw() {
    if (!m)
        return ne("join a crew");
    await qs();
    let e = m.player.crew
      , t = e?.id && ro.find(o => o.id === e.id);
    if (!t)
        return R("Crews", "Start a crew with your people, or ask to join one: your crew's name shows over all your heads.", [{
            text: "Start a crew",
            small: "\u20A6100,000 \xB7 you're the leader \xB7 invite people from their player card",
            right: y(1e5),
            disabled: A < 1e5,
            onClick: Bk
        }, {
            text: "Join a crew",
            small: ro.length ? "Ask a crew's leader to let you in \xB7 free" : "No crews yet: start the first one",
            right: "",
            disabled: !ro.length,
            onClick: Nk
        }, ...ro.length ? [{
            text: "Top crews",
            small: "Biggest first",
            onClick: () => {}
        }, ...Sg()] : []]);
    let n = t.leader === m.uid;
    R(t.name, `${t.members.length} member${t.members.length === 1 ? "" : "s"}${n ? " \xB7 you're the leader" : ""}. Invite people: tap a player \u2192 Invite to ${t.name}.`, [{
        text: "Rally the crew",
        small: "Call every member to where you are (free ride for them)",
        right: "\u{1F4E3}",
        onClick: _k
    }, ...t.members.map(o => ({
        text: `@${o.name}${o.uid === t.leader ? " \u{1F451}" : ""}`,
        small: o.uid === m.uid ? "You" : n ? "Tap to remove from the crew" : "",
        right: n && o.uid !== m.uid ? "Remove" : "",
        onClick: () => n && o.uid !== m.uid && R(`Remove @${o.name}?`, `They'll leave ${t.name}.`, [{
            text: `Remove @${o.name}`,
            main: !0,
            onClick: () => Us({
                action: "kick",
                uid: o.uid
            })
        }])
    })), {
        text: "Leave the crew",
        small: n ? "The longest-serving member becomes leader" : "",
        onClick: () => R(`Leave ${t.name}?`, "You can only come back with a new invite.", [{
            text: "Leave",
            main: !0,
            onClick: () => Us({
                action: "leave"
            })
        }])
    }, {
        text: "Top crews",
        small: "Biggest first",
        onClick: () => R("Top crews", "Biggest first.", Sg())
    }])
}
var Cc = null;
function Nk() {
    let e = [...ro].sort( (t, n) => n.members.length - t.members.length);
    R("Join a crew", "Pick one. Its leader gets your request and decides.", e.map(t => {
        let n = t.members.find(a => a.uid === t.leader)
          , o = t.members.length >= 20;
        return {
            text: t.name,
            small: `${t.members.length} member${t.members.length === 1 ? "" : "s"} \xB7 led by @${n?.name || "?"}${o ? " \xB7 full" : ""}`,
            right: o ? "Full" : "Ask",
            disabled: o || !n,
            onClick: () => {
                E(),
                Cc = {
                    id: t.id,
                    at: Date.now()
                },
                k.groupInvite(t.leader, "j:" + t.id),
                g(`Asked @${n.name} to let you into ${t.name}. You'll join as soon as they say yes.`, 5e3)
            }
        }
    }
    ), jw)
}
function Ok(e, t) {
    if (k.clearFrom(e.host),
    t - e.t > 24 * 36e5)
        return;
    let n = e.home.startsWith("jx:")
      , o = e.home.slice(n ? 3 : 2)
      , a = ro.find(i => i.id === o);
    if (n)
        return g(`${a?.name || "The crew"} said no this time.`, 4e3);
    !a || a.leader !== m.uid || R(`@${e.name} wants to join ${a.name}`, `${a.members.length} member${a.members.length === 1 ? "" : "s"} now.`, [{
        text: `Let @${e.name} in`,
        main: !0,
        onClick: () => {
            E(),
            k.groupInvite(e.host, "c:" + o),
            g(`@${e.name} is joining ${a.name}.`, 3500)
        }
    }, {
        text: "No",
        onClick: () => {
            E(),
            k.groupInvite(e.host, "jx:" + o)
        }
    }])
}
function Bk() {
    R("Start a crew", "Pick a name (3\u201320 letters). It shows over all your members' heads. \u20A6100,000.", []);
    let e = document.createElement("div");
    e.className = "ad-form";
    let t = document.createElement("input");
    t.className = "ad-input",
    t.maxLength = 20,
    t.placeholder = "e.g. Kubwa Boys",
    t.addEventListener("keydown", o => o.stopPropagation()),
    t.addEventListener("keyup", o => o.stopPropagation());
    let n = document.createElement("button");
    n.type = "button",
    n.className = "w-main act-btn",
    n.textContent = "Start the crew \xB7 \u20A6100,000",
    n.onclick = () => t.value.trim().length >= 3 ? Us({
        action: "create",
        name: t.value.trim()
    }) : g("Pick a name of at least 3 letters."),
    e.append(t, n),
    h("#act-list").append(e),
    setTimeout( () => t.focus(), 50)
}
async function Us(e) {
    E();
    try {
        let t = await Lk(e);
        e.action === "create" && Ye("crew_create"),
        e.action === "join" && Ye("crew_join");
        let n = (await Xn(ee(W, "players", m.uid))).data();
        n && (m.player.crew = n.crew,
        typeof n.money == "number" && (A = n.money,
        _e())),
        n?.crew || delete m.player.crew,
        g(t.msg, 5e3),
        setTimeout(qs, 1500),
        setTimeout(qs, 65e3)
    } catch (t) {
        g(t.message, 5e3)
    }
}
function _k() {
    E();
    let e = ro.find(n => n.id === m.player.crew?.id);
    if (!e)
        return;
    if (w !== "city")
        return g("Rally from somewhere in town (not at home or inside a place).");
    let t = e.members.filter(n => n.uid !== m.uid);
    if (!t.length)
        return g("Your crew is just you for now. Invite people first!");
    for (let n of t)
        k.groupInvite(n.uid, `r:${Math.round(x.x)},${Math.round(x.z)}`);
    Ye("rally"),
    g(`Called ${t.length} crew member${t.length === 1 ? "" : "s"} to you \u{1F4E3}`, 4e3)
}
var Gk = (e, t) => [...Jt].sort( (n, o) => Math.hypot(n.x - e, n.z - t) - Math.hypot(o.x - e, o.z - t))[0]?.name || "town";
function jk(e, t) {
    if (k.clearFrom(e.host),
    t - e.t > (e.home.startsWith("c:") ? 24 * 36e5 : 600 * 1e3))
        return;
    if (e.home.startsWith("c:")) {
        let i = e.home.slice(2)
          , r = ro.find(l => l.id === i)
          , s = r?.name || "their crew";
        return m.player.crew?.id ? void 0 : Cc?.id === i && Date.now() - Cc.at < 24 * 36e5 ? (Cc = null,
        Us({
            action: "join",
            id: i,
            by: e.host
        })) : R(`@${e.name} invited you to ${s}`, r ? `${r.members.length} members. The crew name shows over your head.` : "Join the crew?", [{
            text: `Join ${s}`,
            main: !0,
            onClick: () => Us({
                action: "join",
                id: i,
                by: e.host
            })
        }, {
            text: "No thanks",
            onClick: E
        }])
    }
    let[n,o] = e.home.slice(2).split(",").map(Number);
    if (!isFinite(n) || !isFinite(o) || w === "cell")
        return;
    let a = Gk(n, o);
    R(`\u{1F4E3} @${e.name} is calling the crew!`, `Meet at ${a}.`, [{
        text: "On my way",
        main: !0,
        onClick: () => {
            E(),
            Dk(n, o, `Heading to ${a} to meet the crew\u2026`)
        }
    }, {
        text: "Can't make it",
        onClick: E
    }])
}
async function Dk(e, t, n) {
    if (w === "cell")
        return;
    w === "venue" && un(),
    mo(),
    Le && In(),
    P?.driving && Rn(),
    await Fe(n, 1500),
    w === "club" && Or();
    let[o,a] = Qo(e, t);
    w === "city" ? (x.set(o, 0, a),
    j = Math.atan2(e - o, t - a),
    ce = null,
    de.visible = !1,
    dt(new Z(Math.sin(j),0,Math.cos(j)), 22, 10, 6, 2),
    k?.sendNow()) : Da(o, a, e, t)
}
var Dc = (document.querySelector('script[src*="/js/game-"]')?.getAttribute("src") || "").match(/game-[A-Z0-9]+/)?.[0]
  , Nh = !1
  , Ag = 0;
async function jf() {
    if (!(!Dc || Nh || Date.now() - Ag < 120 * 1e3)) {
        Ag = Date.now();
        try {
            let t = (await (await fetch("/play?v=" + Date.now(), {
                cache: "no-store"
            })).text()).match(/game-[A-Z0-9]+/)?.[0];
            t && t !== Dc && (Nh = !0,
            h("#update-bar").hidden = !1)
        } catch {}
    }
}
setInterval( () => !document.hidden && jf(), 600 * 1e3);
setTimeout(jf, 6e4);
document.addEventListener("visibilitychange", () => {
    document.hidden || jf()
}
);
h("#update-bar").addEventListener("click", () => location.reload());
document.addEventListener("visibilitychange", () => {
    document.hidden && Nh && !xt && location.reload()
}
);
var ye = null
  , Rg = {}
  , Hg = ["#0f3d2e", "#b83a2e", "#1f4e9c", "#8a3ab9", "#c2620f", "#1f8a4c", "#7a1f2b"]
  , Dw = e => e === "mosque" ? Bn.length + Wn.length + yn.length + 3 : e === "church" ? Bn.length + Wn.length + yn.length + 2 : e === "hospital" ? Bn.length + Wn.length + yn.length + 1 : e.startsWith("plot:") ? Bn.length + Wn.length + +e.slice(5) : Math.max(0, [...Bn.map(t => "food:" + t.id), ...Wn.map(t => "shop:" + t.name)].sort().indexOf(e))
  , zg = ["#6e3f22", "#553019", "#8a5432", "#3d2414", "#a0673f"];
async function co(e, t, n, o, a, i) {
    if (w !== "city" || !m && !(st && (n === "church" || n === "mosque")) || P?.driving || !mo())
        return i ? void 0 : a();
    let r = Dw(e)
      , s = [ei[0] + r % 20 * ti, ei[1] + Math.floor(r / 20) * ti];
    if (await Fe(`Entering ${t}\u2026`, 800),
    w !== "city")
        return;
    let l = Rg[e];
    if (!l) {
        let d = 0
          , c = n === "hospital"
          , p = f => {
            let b = Do({
                ...Qa,
                ...f,
                skin: zg[d++ % zg.length]
            });
            return Oe(b.group),
            b.group.scale.setScalar(1.15),
            b
        }
        ;
        l = n === "mosque" ? hm(f => p(f === "imam" ? {
            body: "man",
            hair: "fila",
            outfit: "kaftan",
            fabric: "plain",
            top: "#ffffff",
            bottom: "#ffffff"
        } : {
            body: "man",
            hair: d % 3 ? "fila" : "lowcut",
            outfit: "kaftan",
            fabric: "plain",
            top: ["#ffffff", "#e8e0cc", "#1f4e9c", "#2e6b4a", "#8a5a33"][d % 5]
        })) : n === "church" ? um(f => p(f ? {
            outfit: ["office", "kaftan", "owambe", "casual"][d % 4],
            body: d % 2 ? "woman" : "man",
            top: ["#ffffff", "#1f4e9c", "#d43d3d", "#f2b53a", "#0f3d2e"][d % 5]
        } : {
            outfit: "office",
            fabric: "plain",
            top: "#2b3f7a",
            bottom: "#2b3f7a"
        }), () => p({
            outfit: "kaftan",
            fabric: "plain",
            top: "#5b2a86",
            body: d % 2 ? "woman" : "man"
        })) : cp({
            name: t,
            kind: n,
            accent: c ? "#1f9d55" : Hg[r % Hg.length]
        }, () => p(c ? {
            outfit: "office",
            fabric: "plain",
            top: "#ffffff",
            bottom: "#e8f1f2",
            hair: d % 2 ? "bun" : "lowcut"
        } : {})),
        l.group.position.set(s[0], 0, s[1]),
        J.add(l.group),
        Rg[e] = l
    }
    l.group.visible = !0,
    ye = {
        key: e,
        name: t,
        at: s,
        room: l,
        door: o,
        open: a
    },
    Ye(n === "church" || n === "mosque" ? n : "venue"),
    w = "venue",
    ce = null,
    de.visible = !1,
    Gs = null,
    Ks = null,
    Oc = null;
    for (let d of ["food-btn", "shop-btn", "hail", "club-btn", "church-btn", "mosque-btn", "along-btn", "get-in"])
        h("#" + d).hidden = !0;
    jh = !1,
    Dh = !1;
    let u = i ? l.staff : l.spawn;
    if (x.set(s[0] + u[0], 0, s[1] + u[1]),
    j = i ? 0 : Math.PI,
    X.minDistance = 4,
    X.maxDistance = 40,
    X.minPolarAngle = .35,
    X.maxPolarAngle = 1.1,
    n === "church" || n === "mosque" ? dt(new Z(0,0,-1), 9, 13, 20, 2.5) : dt(new Z(0,0,-1), 16, 12, 4, 1),
    et && et.setVisible(!1),
    h("#place").textContent = t,
    h("#place").hidden = !1,
    h("#venue-bar").hidden = !1,
    h("#venue-menu").innerHTML = xe(n === "food" ? "utensils" : n === "boutique" ? "shirt" : n === "hospital" ? "ambulance" : n === "church" || n === "mosque" ? "sofa" : "store", 20) + `<span>${n === "food" ? "Menu" : n === "airport" ? "Snacks" : n === "hospital" ? "Treatment" : n === "church" || n === "mosque" ? "Sit" : "Shop"}</span>`,
    k?.sendNow(),
    Oh = null,
    Df(),
    n === "church")
        return Ov();
    if (n === "mosque")
        return Wv();
    setTimeout( () => w === "venue" && ye?.key === e && (i || a)(), 700)
}
function un() {
    if (w !== "venue" || !ye)
        return;
    let e = ye;
    ye = null,
    e.room.group.visible = !1,
    e.key === "church" && Bv(),
    oa && (oa = 0,
    ua = 0),
    w = "city",
    h("#venue-bar").hidden = !0,
    h("#place").hidden = !0,
    E(),
    X.minDistance = _t.dist[0],
    X.maxDistance = _t.dist[1],
    X.minPolarAngle = _t.polar[0],
    X.maxPolarAngle = _t.polar[1],
    et && et.setVisible(!0);
    let[t,n] = Qo(e.door.x, e.door.z);
    x.set(t, 0, n),
    j = Math.atan2(t - e.door.x, n - e.door.z),
    ce = null,
    de.visible = !1,
    dt(new Z(Math.sin(j),0,Math.cos(j)), 22, 10, 6, 2),
    k?.sendNow()
}
async function Fw() {
    let e = ye?.name || "";
    await Fe(`Leaving ${e}\u2026`, 600),
    un()
}
h("#venue-menu").innerHTML = xe("utensils", 20) + "<span>Menu</span>";
var Yw = () => ye?.key === "church" || ye?.key === "mosque";
h("#venue-menu").addEventListener("click", () => {
    Yw() && St ? Fk() : ye?.open()
}
);
function Fk() {
    St = !1,
    k?.sendNow(),
    Df()
}
var Oh = null;
function Df() {
    !Yw() || Oh === St || (Oh = St,
    h("#venue-menu").innerHTML = xe(St ? "footprints" : "sofa", 20) + `<span>${St ? "Stand" : "Sit"}</span>`)
}
h("#venue-leave").innerHTML = xe("log-out", 20) + "<span>Leave</span>";
h("#venue-leave").addEventListener("click", Fw);
var Ww = ["Who are you voting for Minister?", "Which Senator candidate is actually serious?", "Abuja traffic or Lagos traffic: which one worse?", "If you had \u20A6100 million today, what's the first thing you'd buy?", "Best place to eat in Abuja: IbroFish, Grills 101 or Truck Central?", "Who here has been stopped by police this week?", "Kubwa expressway: blessing or punishment?", "Which is better: own a car or keep taking keke?", "Maitama mansion or Gwarinpa duplex?", "Who's the richest person you know in this city?", "Club Zuma: who's going tonight?", "Should we start a business together?", "Japa or stay and hustle?", "Jollof: Nigerian or Ghanaian? Choose carefully.", "Who here can actually cook?", "If you became Minister, what's the first thing you'd change?", "Who's single in this house? Asking for a friend \u{1F440}", "Best Afrobeats song of the year?", "NEPA took light how many times this week?", "Who owes who money here? Speak now."]
  , rn = !1;
function Ff(e) {
    let t = Ww.filter(o => !/house/i.test(o))
      , n = 0;
    for (let o of e + Math.floor(Date.now() / 36e5))
        n = n * 31 + o.charCodeAt(0) | 0;
    return t[(n >>> 0) % t.length]
}
var Gd = 20;
function Yk(e) {
    if (Gd -= e,
    Gd > 0 || (Gd = 150,
    F || (k?.housePeople().length || 0) > 1 || !h("#act-sheet").hidden || !h("#sheet").hidden || !Jt.length))
        return;
    try {
        if (Date.now() - +(localStorage.getItem("al-out-no") || 0) < 600 * 1e3)
            return
    } catch {}
    ou();
    let t = Jt.map(a => ({
        d: a,
        n: au(a.x, a.z, 2)
    })).sort( (a, i) => i.n - a.n)[0];
    if (!t || t.n < 2)
        return;
    let {d: n, n: o} = t;
    R(`${o} people at ${n.name} right now`, `They're gisting: "${Ff(qh(n.x, n.z))}" Go and join the conversation.`, [{
        text: `Go to ${n.name}`,
        main: !0,
        onClick: () => Wk(n)
    }, {
        text: "Read their chat from here",
        small: "See what they're saying, then go and join in",
        right: "\u{1F4AC}",
        onClick: () => {
            E(),
            Gb(Bb(qh(n.x, n.z)))
        }
    }, {
        text: "Not now",
        onClick: () => {
            E();
            try {
                localStorage.setItem("al-out-no", String(Date.now()))
            } catch {}
        }
    }])
}
function Wk(e) {
    let[t,n] = Kn(Re[Hn()].at)
      , o = Math.hypot(e.x - t, e.z - n) * 1.3
      , a = da();
    R(`Go to ${e.name}`, `You have ${y(A)}.`, [...a ? [{
        text: `Drive your ${wl(a)}`,
        small: "Free",
        right: "Drive",
        onClick: () => {
            E(),
            Ir = {
                md: null,
                c: a
            },
            Kh(e, 0)
        }
    }] : [], ...of().map( ([,i]) => {
        let r = i.fare(o);
        return {
            text: i.name,
            small: i.small,
            right: r ? y(r) : "Free",
            disabled: r > A,
            onClick: () => {
                E(),
                Ir = {
                    md: i,
                    c: null
                },
                Kh(e, r)
            }
        }
    }
    )])
}
var Ig = !1;
function qw() {
    let e = k?.housePeople().length || 0
      , t = !F;
    R(rn ? "\u{1F389} Party on" : "Hang out", e ? `${e + 1} people here. Do something together!` : "Just you for now. Throw a party and anyone in Abuja can come.", [...t && !ca ? [{
        text: "Throw a house party",
        small: "Music on \xB7 open to everyone in Abuja \xB7 they join in one tap, no invite",
        right: "\u{1F389}",
        onClick: zu
    }] : [], ...t && ca ? [{
        text: "Your party is open to everyone",
        small: `${e + 1} here \xB7 it's in Phone \u2192 Parties`,
        right: "",
        onClick: () => {
            E(),
            Uf()
        }
    }] : [], ...!t && !rn ? [{
        text: "Start the music",
        small: "Music on and everyone in this house dances",
        right: "\u{1F389}",
        onClick: () => {
            E(),
            Bh()
        }
    }] : [], ...rn ? [{
        text: "Change the song",
        small: "For everyone in the house",
        right: "\u{1F3B5}",
        onClick: () => {
            E(),
            Bh((Hu + 1) % Vo.length)
        }
    }] : [], ...rn && t ? [{
        text: "Stop the party",
        small: "Music off for everyone, and it's off the list",
        right: "\u{1F507}",
        onClick: () => {
            E(),
            k?.sendHouseCmd("::party:off"),
            Js()
        }
    }] : [], {
        text: "Gist",
        small: "Drop a hot topic in the house chat",
        right: "\u{1F5E3}",
        onClick: () => {
            E(),
            Vw()
        }
    }, {
        text: ta ? "Stop dancing" : "Dance",
        small: "Just you",
        right: "\u{1F483}",
        onClick: () => {
            E(),
            zn(!ta)
        }
    }, {
        text: "Play games",
        small: "Dice battle, Abuja trivia, truth or dare",
        right: "\u{1F3B2}",
        onClick: Jk
    }, {
        text: "Romance",
        small: "Cuddle, kiss or spend the night \xB7 they must say yes",
        right: "\u{1F49E}",
        onClick: Zk
    }, ...F ? [] : [{
        text: "Kick someone out",
        small: "They leave and can't come back without a new invite",
        right: "\u{1F6AA}",
        onClick: qk
    }]])
}
async function qk() {
    let e = k?.housePeople() || []
      , t = await Promise.all(e.map(async n => ({
        uid: n,
        name: (await k.profileOf(n))?.username || "player"
    })));
    R("Kick someone out", t.length ? "Tap who should leave your house." : "Nobody else is here.", t.map(n => ({
        text: `@${n.name}`,
        right: "Kick",
        onClick: () => {
            R(`Kick @${n.name} out?`, "They're sent outside and their invite is cancelled.", [{
                text: `Kick @${n.name} out`,
                main: !0,
                onClick: () => {
                    E(),
                    k.kickGuest(n.uid),
                    ca && ya({
                        action: "partyKick",
                        uid: n.uid
                    }).catch( () => {}
                    ),
                    Ye("kick"),
                    g(`@${n.name} has been kicked out.`)
                }
            }])
        }
    })))
}
var Pg = [["What year did Abuja officially become Nigeria's capital?", "1991"], ["Which rock is Abuja famous for (it's on the \u20A6100 note)?", "Zuma Rock"], ["What does FCT stand for?", "Federal Capital Territory"], ["Which gate do you pass when entering Abuja from Lagos/Kaduna side?", "City Gate"], ["What's the name of the big green-domed mosque in Abuja?", "National Mosque"], ["Which lake in Abuja is famous for hangouts and boat rides?", "Jabi Lake"], ["Which area is home to Aso Rock and the Villa?", "Three Arms Zone / Asokoro"], ["What is Abuja's main international airport?", "Nnamdi Azikiwe International Airport"], ["Which Abuja district is known for embassies and mansions?", "Maitama"], ["What's the big square where national parades happen?", "Eagle Square"], ["Which estate is one of the biggest housing estates in Africa?", "Gwarinpa"], ["What do Abuja people call shared cabs on fixed routes?", "Along"], ["Who was Nigeria's head of state when Abuja became capital?", "Ibrahim Babangida"], ["Which park is the biggest in Abuja?", "Millennium Park"]]
  , Uk = ["Who's your crush in this house?", "What's the most money you've ever wasted?", "Have you ever lied to get out of work?", "Who in this house would you take on a date?", "What's your most embarrassing moment?", "Who here do you trust the least?"]
  , Vk = ["Dance for 10 seconds, everyone's watching", "Send \u20A6500 to the person on your left", "Say something nice about everyone here", "Speak only Pidgin until the next game", "Sing your favourite Afrobeats line in the chat", "Change your outfit right now (My look)"];
function Jk() {
    R("Play games", "Everyone in the house sees it in the chat.", [{
        text: "Dice battle",
        small: "Everyone rolls; highest roll wins bragging rights",
        right: "\u{1F3B2}",
        onClick: () => {
            E(),
            k?.sendHouseCmd("::dice:go"),
            Uw()
        }
    }, {
        text: "Abuja trivia",
        small: "A question now, the answer in 20 seconds",
        right: "\u2753",
        onClick: () => {
            E(),
            Kk()
        }
    }, {
        text: "Truth or dare",
        small: "Picks someone in the house at random",
        right: "\u{1F3AD}",
        onClick: () => {
            E(),
            Xk()
        }
    }])
}
function Uw() {
    Ye("game");
    let e = 1 + Math.floor(Math.random() * 6);
    k?.sendChat(`\u{1F3B2} rolled a ${e}${e === 6 ? " \u{1F525}" : ""}`)
}
function Kk() {
    let[e,t] = Pg[Math.floor(Math.random() * Pg.length)];
    k?.sendChat(`\u2753 Trivia: ${e}`),
    Ye("game"),
    setTimeout( () => w === "home" && k?.sendChat(`\u2705 Answer: ${t}`), 2e4)
}
async function Xk() {
    let e = [m.uid, ...k?.housePeople() || []]
      , t = e[Math.floor(Math.random() * e.length)]
      , n = t === m.uid ? m.player.username : (await k.profileOf(t))?.username || "someone"
      , o = Math.random() < .5
      , a = o ? Uk : Vk;
    k?.sendChat(`\u{1F3AD} @${n}, ${o ? "Truth" : "Dare"}: ${a[Math.floor(Math.random() * a.length)]}`)
}
var Vs = {
    cuddle: ["cuddle", "\u{1F917}"],
    kiss: ["kiss", "\u{1F48B}"],
    night: ["spend the night", "\u{1F49E}"]
};
async function Zk() {
    let e = k?.housePeople() || []
      , t = await Promise.all(e.map(async n => ({
        uid: n,
        name: (await k.profileOf(n))?.username || "player"
    })));
    R("Romance", t.length ? "Who with? They have to say yes." : "Nobody else is here.", t.map(n => ({
        text: `@${n.name}`,
        onClick: () => R(`With @${n.name}`, "They'll get your request and choose.", Object.entries(Vs).map( ([o,[a,i]]) => ({
            text: a[0].toUpperCase() + a.slice(1),
            right: i,
            onClick: () => {
                E(),
                Ye("romance"),
                k.sendHouseCmd(`::rom:${n.uid}:${o}`),
                g(`Asked @${n.name} to ${a} ${i} Waiting for an answer\u2026`, 4e3)
            }
        })))
    })))
}
function Lg(e, t) {
    let[n,o] = Vs[e] || Vs.cuddle;
    e === "night" ? (zn(!1),
    Fe(`${o} You and @${t} spent the night together\u2026 Later that night`, 3500).then( () => g("Good morning \u2600\uFE0F", 3e3))) : g(`${o} You and @${t} ${e === "kiss" ? "kissed" : "cuddled"}`, 4e3)
}
function Vw() {
    let e = (H?.candidates || []).map(a => `@${a.name}`)
      , t = e.length ? [`Real talk: ${e.slice(0, 3).join(" or ")}, who's winning?`] : []
      , n = [...Ww, ...t]
      , o = n[Math.floor(Math.random() * n.length)];
    k?.sendChat("\u{1F5E3} " + o),
    Ye("gist")
}
function Bh(e) {
    let t = rn
      , n = k?.serverNow() || Date.now();
    e = e ?? Math.floor(Math.random() * Vo.length),
    k?.sendHouseCmd(`::party:on:${e}:${n}`),
    t || Ye("party"),
    Yf(e, n),
    t || k?.sendChat("\u{1F389} House party! Everybody dance!"),
    ca && ya({
        action: "party",
        track: e,
        start: n
    }).catch( () => {}
    )
}
function Yf(e, t) {
    w === "home" && (rn = !0,
    qn = !1,
    Hu = e,
    Wf = t,
    No.play(e, Math.max(0, (k?.serverNow() || Date.now()) - t)),
    zn(!0),
    k?.setHouseParty(!0))
}
function Js() {
    rn && (rn = !1,
    No.stop(),
    zn(!1),
    k?.setHouseParty(!1),
    F || ev())
}
var Hu = 0
  , Wf = 0
  , ca = !1
  , Fc = !1
  , En = []
  , Rr = 0
  , Ss = new Set;
async function ya(e) {
    let t = await $e(Te).currentUser.getIdToken()
      , n = await fetch("/api/crowds", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + t
        },
        body: JSON.stringify(e)
    })
      , o = await n.json().catch( () => ({}));
    if (!n.ok)
        throw new Error(o.error || "Something went wrong. Try again.");
    return o
}
async function qf(e) {
    if (!m || !e && Date.now() - Rr < 5e4)
        return En;
    Rr = Date.now();
    try {
        let t = await fetch("/api/crowds?parties=1");
        t.ok && (En = (await t.json()).parties || [])
    } catch {}
    return Qk(),
    En
}
var Ng = new Set
  , Og = 0;
function Qk() {
    if (!m || w === "club" || document.hidden)
        return;
    let e = En.find(n => n.kind === "club" && n.host !== m.uid && !Ng.has(n.host + ":" + n.t));
    if (!e || Date.now() - Og < 10 * 6e4 || w === "cell" || wf() || B || xt || Be || te || Ne?.riding || !h("#act-sheet").hidden)
        return;
    Ng.add(e.host + ":" + e.t),
    Og = Date.now(),
    Ss.add("club:" + e.host);
    try {
        navigator.vibrate?.(200)
    } catch {}
    let t = po();
    R(`\u{1FAA9} @${e.name} invites everyone to ${ot}`, `${e.treat && t ? `@${e.name} pays the ${y(t)} gate for the first ${e.treat.max} who come` : t ? `Gate fee ${y(t)}` : "Entry is free right now"}. Music, dancing and drinks.`, [{
        text: "Go now",
        main: !0,
        onClick: () => {
            E(),
            If(e)
        }
    }, {
        text: "Not now",
        onClick: E
    }])
}
setInterval( () => {
    document.hidden || qf()
}
, 6e4);
async function zu() {
    if (re(),
    E(),
    !m)
        return ne("throw a party");
    if (w !== "home" || F)
        return Fc = !0,
        g("Going home to start your party\u2026"),
        pa();
    rn || Bh();
    try {
        await ya({
            action: "party",
            track: Hu,
            start: Wf
        }),
        ca = !0,
        Rr = 0,
        Ye("party_open"),
        g("\u{1F389} Your party is on! Everyone in Abuja can see it in Phone \u2192 Parties and join.", 5e3)
    } catch (e) {
        g(e.message, 4e3)
    }
}
setInterval( () => {
    ca && rn && w === "home" && !F && ya({
        action: "party",
        track: Hu,
        start: Wf
    }).catch( () => {}
    )
}
, 600 * 1e3);
function ev() {
    ca && (ca = !1,
    Rr = 0,
    ya({
        action: "endParty"
    }).catch( () => {}
    ))
}
async function _h(e) {
    if (E(),
    re(),
    !m)
        return ne("join a party");
    if (Ss.add(e.host),
    e.host === m.uid)
        return w === "home" && !F ? qw() : pa();
    if (F?.host === e.host)
        return g("You're already at this party!");
    try {
        let t = await ya({
            action: "joinParty",
            host: e.host
        });
        await bl({
            host: t.host,
            name: t.name,
            home: t.home
        }),
        F?.host === t.host && (Yf(t.track, t.start),
        Ye("party_join"))
    } catch (t) {
        g(t.message, 4e3)
    }
}
async function Uf() {
    if (re(),
    !m)
        return ne("go to parties");
    R("Parties", "Looking for parties\u2026", []),
    await qf(!0);
    let e = En.filter(i => i.host !== m.uid)
      , t = En.find(i => i.host === m.uid)
      , n = i => {
        let r = Math.max(0, Math.round((i.until - Q()) / 6e4));
        return r > 55 ? "just started" : `on for ${r} more min`
    }
      , o = e.filter(i => i.kind !== "club")
      , a = e.filter(i => i.kind === "club");
    R("Parties", e.length ? "Tap one to go. Getting there is free and you don't need an invite (Club Zuma has its gate fee)." : "No parties right now. Throw one, or invite everyone to Club Zuma.", [t || ca && !F && w === "home" ? {
        text: "Your party is on",
        small: t ? `${t.people} ${t.people === 1 ? "person" : "people"} at your place` : "At your place",
        right: "Go",
        onClick: () => _h(t || {
            host: m.uid
        })
    } : {
        text: "Throw a party at my house",
        main: !0,
        onClick: zu
    }, ...a.map(i => ({
        text: `\u{1FAA9} @${i.name} is at ${ot}`,
        small: `${i.treat && po() ? `@${i.name} pays the ${y(po())} gate for the first ${i.treat.max}` : zf()}`,
        right: "Join",
        onClick: () => {
            E(),
            If(i)
        }
    })), ...o.map(i => ({
        text: `@${i.name}'s house party`,
        small: `${Ze(i.home)} \xB7 ${i.people} ${i.people === 1 ? "person" : "people"} there \xB7 ${n(i)}`,
        right: "Join",
        onClick: () => _h(i)
    }))])
}
function tv(e, t) {
    let[n,o,a,i] = t.slice(2).split(":");
    if (n === "party" && o === "on" && (Yf(+a || 0, +i || Date.now()),
    k?.profileOf(e).then(r => g(`@${r?.username || "someone"} started a house party! \u{1F389}`))),
    n === "party" && o === "off" && (Js(),
    g("The party is over.")),
    n === "dice" && o === "go" && Uw(),
    n === "power" && F && e === F.host) {
        let r = o === "1";
        r !== Vc && (Vc = r,
        pb())
    }
    if (n === "tv" && (o === "off" ? wa(ut ? "The TV was turned off." : "") : sb(o, !1)),
    n === "radio" && (o === "off" ? Br() : Fh(+a || 0, +i || Date.now(), !1)),
    n === "rom" && o === m?.uid && Vs[a] && k.profileOf(e).then(r => {
        let s = r?.username || "someone"
          , [l,u] = Vs[a];
        R(`@${s} wants to ${l} ${u}`, "Your choice.", [{
            text: "Yes",
            main: !0,
            onClick: () => {
                E(),
                Ye("romance_yes"),
                k.sendHouseCmd(`::romyes:${e}:${a}`),
                Lg(a, s)
            }
        }, {
            text: "No thanks",
            onClick: () => {
                E(),
                k.sendHouseCmd(`::romno:${e}`)
            }
        }])
    }
    ),
    n === "romyes" && o === m?.uid && k.profileOf(e).then(r => Lg(a, r?.username || "them")),
    n === "romno" && o === m?.uid && k.profileOf(e).then(r => g(`@${r?.username || "They"} said no.`, 3500)),
    n === "kick" && o === m?.uid && F?.host === e) {
        let r = F.name;
        Js(),
        g(`@${r} kicked you out of the house.`, 5e3),
        Jf()
    }
}
var Bg = "";
setInterval( () => {
    let e = w === "home" && !!m && (!F || (k?.housePeople().length || 0) > 0)
      , t = !e && m && (w === "city" || w === "street" || w === "club" || w === "venue") && B?.stage !== "riding" && !P?.driving && k?.nearby(20).length || 0
      , n = e || t >= 1
      , o = e ? "Hang out" : `Crew (${t + 1})`;
    n === h("#hangout").hidden && (h("#hangout").hidden = !n),
    n && o !== Bg && (Bg = o,
    h("#hangout").classList.toggle("wide", !e),
    h("#hangout").innerHTML = xe("users", e ? 24 : 20) + (e ? "" : `<span>Take them out</span><span class="badge-dot">${t + 1}</span>`),
    h("#hangout").setAttribute("aria-label", e ? o : "Take the people near you out, you pay"),
    !e && !Ig && (Ig = !0,
    g(`You're with ${t} ${t === 1 ? "person" : "people"}. Tap "Take them out" to treat them somewhere: you pay, they get a pop-up.`, 6e3))),
    rn && w !== "home" && Js();
    let a = w === "home" && !F && !!m;
    a === h("#house-btn").hidden && (h("#house-btn").hidden = !a)
}
, 1e3);
h("#house-btn").innerHTML = xe("sofa", 24);
h("#house-btn").title = "My house";
h("#house-btn").addEventListener("click", () => Au());
h("#hangout").addEventListener("click", () => w === "home" ? qw() : nv());
var _g = e => {
    let t = vo.includes(e.id) ? null : jt(e.id);
    return Math.max(0, ...t ? Object.entries(t.menu).filter( ([n]) => Xe[n]).map( ([,n]) => n) : e.menu.map(n => Xe[n]?.price || 0))
}
  , lc = () => jt(Qn)?.menu.gate || 0;
function nv() {
    let e = k?.nearby(20) || [];
    if (e.length < 1)
        return g("Your crew walked off. Stand together (2 or more) to plan something.");
    let t = e.length
      , n = e.slice(0, 4).map(o => "@" + o.username).join(", ") + (t > 4 ? "\u2026" : "");
    R(`Take them out (${t + 1} of you)`, `${n}. Everyone gets a pop-up, and you pay for them. What are we doing?`, [{
        text: "Party at my place",
        small: "Invite everyone to your house",
        right: "\u{1F389}",
        onClick: () => ov(e)
    }, {
        text: "Eat out, I'm paying",
        small: "Pick a restaurant \xB7 you cover everyone's meal",
        right: "\u{1F37D}",
        onClick: () => av(e)
    }, {
        text: "Fun outing, I'm paying",
        small: "Bowling, VR, cinema, rides\u2026 \xB7 you cover everyone",
        right: "\u{1F3B3}",
        onClick: () => iv(e)
    }, ...Ct(jt(Qn), Q()) ? [{
        text: "Club Zuma, I'm paying",
        small: `${y(lc())} each \xB7 ${y(lc() * t)} for the crew`,
        right: "\u{1FAA9}",
        disabled: lc() * t > A,
        onClick: () => Vf(e, "club", lc())
    }] : [], {
        text: "Gist",
        small: "Drop a hot topic in the chat",
        right: "\u{1F5E3}",
        onClick: () => {
            E(),
            Vw()
        }
    }])
}
async function ov(e) {
    E(),
    await Promise.all(e.map(t => k.inviteToHouse(t.uid, m.player.home).catch( () => {}
    ))),
    Ye("crew_party"),
    g(`Invited ${e.length} friends to your place! The party starts when you get home.`, 6e3),
    Fc = !0,
    pa()
}
function av(e) {
    let t = w === "city" ? [x.x, x.z] : Kn(Re[Hn()].at)
      , n = Lt.filter(a => !vo.includes(a.id) && ku(a) && _g(a) > 0 && Cu(a) === "food").map(a => ({
        sp: a,
        open: !0,
        each: _g(a),
        d: Math.hypot(a.x - t[0], a.z - t[1])
    }))
      , o = Tf(n, a => a.sp.id);
    if (!n.length)
        return g("Nowhere is open to eat right now.");
    R("Where are we eating?", `You pay one main meal for each of your ${e.length} friends. Open places only. You have ${y(A)}.`, o.map( ({sp: a, each: i, d: r}) => {
        let s = i * e.length;
        return {
            text: a.name,
            small: `${y(i)} each \xB7 ${pr(r)}`,
            right: y(s),
            disabled: s > A,
            onClick: () => Vf(e, a.id, i)
        }
    }
    ))
}
function iv(e) {
    let t = w === "city" ? [x.x, x.z] : Kn(Re[Hn()].at)
      , n = new Date(Date.now() + 36e5).getUTCDay()
      , o = [];
    for (let a of Lt) {
        let i = jt(a.id);
        if (!(!i || !Ct(i, Q())))
            for (let r of Ea[a.id] || []) {
                let s = r.price ? i.menu["a_" + r.id] : 0;
                !s || r.days && !r.days.includes(n) || o.push({
                    sp: a,
                    a: r,
                    price: s,
                    d: Math.hypot(a.x - t[0], a.z - t[1])
                })
            }
    }
    if (!o.length)
        return g("Nowhere fun is open right now. Try eating out or a party.");
    o.sort( (a, i) => a.d - i.d),
    R("What are we doing?", `You pay for each of your ${e.length} friends. Open places only. You have ${y(A)}.`, o.slice(0, 30).map( ({sp: a, a: i, price: r}) => {
        let s = r * e.length;
        return {
            text: `${i.name} \xB7 ${a.name}`,
            small: `${y(r)} each`,
            right: y(s),
            disabled: s > A,
            onClick: () => Vf(e, "f:" + a.id, r)
        }
    }
    ))
}
async function Vf(e, t, n) {
    if (E(),
    n * e.length > A)
        return g("You don't have enough money to treat everyone.");
    try {
        let o = await $e(Te).currentUser.getIdToken()
          , a = await fetch("/api/transfer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + o
            },
            body: JSON.stringify({
                action: "treat",
                to: e.map(r => r.uid),
                where: t,
                each: n
            })
        })
          , i = await a.json().catch( () => ({}));
        if (!a.ok)
            return g(i.error || "Couldn't set up the treat. Try again.", 4500)
    } catch {
        return g("Network problem. Try again.")
    }
    for (let o of e)
        k.groupInvite(o.uid, "g:" + t);
    g(`You're treating ${e.length} friend${e.length > 1 ? "s" : ""}. When they order there, it's charged to you. Let's go!`, 5e3),
    Ye("crew_trip"),
    Jw(t, null)
}
var Zo = null;
function rv(e, t) {
    if (!Zo || Date.now() > Zo.until || !e)
        return null;
    let n = Zo.where
      , o = n === "club" ? Qn : n.replace(/^f:/, "");
    return e.place !== o ? null : (n === "club" ? t === "gate" : n.startsWith("f:") ? t.startsWith("a_") : Xe[t]) ? Zo : null
}
async function sv(e, t, n, o, a) {
    Zo = null;
    try {
        let i = await $e(Te).currentUser.getIdToken()
          , r = await fetch("/api/transfer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + i
            },
            body: JSON.stringify({
                action: "treatPay",
                from: e.from,
                bid: t.id,
                item: n,
                amount: o
            })
        })
          , s = await r.json().catch( () => ({}));
        if (!r.ok)
            return g(`@${e.name}'s treat didn't go through: ${s.error || "try again"}. Order again to pay yourself.`, 5500),
            !1;
        if (s.food) {
            let l = s.food.at;
            m.player.food = {
                level: s.food.level,
                at: {
                    toMillis: () => l
                },
                last: n
            },
            Fa = s.food.level,
            Ja()
        }
        return g(`${a.split(" \xB7 ")[0]}: paid by @${e.name} \u{1F389}`, 3500),
        !0
    } catch {
        return Zo = e,
        g("Network problem. Try again."),
        !1
    }
}
function lv(e, t) {
    if (k.clearFrom(e.host),
    t - e.t > 600 * 1e3)
        return;
    if (e.home === "g:ok")
        return g(`@${e.name} is coming! \u{1F389}`, 4e3);
    if (e.home === "g:no")
        return g(`@${e.name} isn't coming.`, 4e3);
    if (w === "cell")
        return;
    let n = e.home.slice(2)
      , o = n.startsWith("f:")
      , a = n === "club" ? null : Lt.find(r => r.id === n.replace(/^f:/, ""))
      , i = n === "club" ? ot : a?.name;
    i && R(`@${e.name} is taking everyone to ${i}!`, `It's on them: your ${n === "club" ? "gate fee" : o ? "fun there" : "meal"} is charged to @${e.name}'s account, not yours. Go within 30 minutes.`, [{
        text: "Let's go",
        main: !0,
        onClick: () => {
            E(),
            k.groupInvite(e.host, "g:ok"),
            Zo = {
                from: e.host,
                name: e.name,
                where: n,
                until: Date.now() + 1800 * 1e3
            },
            Jw(n, e.name)
        }
    }, {
        text: "Not now",
        onClick: () => {
            E(),
            k.groupInvite(e.host, "g:no")
        }
    }])
}
async function Jw(e, t) {
    if (w === "venue" && un(),
    mo(),
    w === "cell")
        return;
    e = e.replace(/^f:/, "");
    let n = e === "club" ? null : Lt.find(s => s.id === e)
      , o = e === "club" ? ue : n;
    if (!o)
        return;
    let a = e === "club" ? ot : n.name;
    if (e === "club" && w === "club")
        return;
    Le && In(),
    P?.driving && Rn(),
    await Fe(t ? `Off to ${a} with @${t}\u2026` : `Taking the crew to ${a}\u2026`, 1600),
    w === "club" && Or();
    let[i,r] = Qo(o.x, o.z);
    w === "city" ? (x.set(i, 0, r),
    j = Math.atan2(o.x - i, o.z - r),
    ce = null,
    de.visible = !1,
    dt(new Z(Math.sin(j),0,Math.cos(j)), 22, 10, 6, 2),
    k?.sendNow()) : Da(i, r, o.x, o.z),
    setTimeout( () => e === "club" ? Rf() : vu(n), 500)
}
var ws = {}
  , Dn = null
  , Oo = null
  , To = null
  , yi = null
  , Gg = (e, t) => {
    let n = 0;
    for (let o of e)
        n = n * 31 + o.charCodeAt(0) | 0;
    return (n >>> 0) % t
}
;
async function Jf() {
    if (w !== "home")
        return;
    let e = Hn()
      , t = F ? F.host : m.uid;
    re(),
    await Fe("Stepping outside\u2026", 900),
    w === "home" && (h("#power").hidden = !0,
    h("#steal-btn").hidden = !0,
    h("#leave-home").hidden = !0,
    F = null,
    k?.leaveHouse(),
    qn && (qn = !1,
    No.stop()),
    St = !1,
    cv(e, t),
    Ye("street"))
}
function cv(e, t) {
    let[n,o] = Qr[e];
    if (!ws[e]) {
        let l = om(e);
        l.group.position.set(n, 0, o),
        Oe(l.group),
        J.add(l.group),
        ws[e] = l
    }
    for (let[l,u] of Object.entries(ws))
        u.group.visible = l === e;
    if (Dn = ws[e],
    Oo = e,
    w = "street",
    !Dn.ads) {
        Dn.ads = !0;
        for (let[l,u,d] of [[-60, -10, 0], [0, 10, Math.PI], [60, -10, 0]]) {
            let c = Wy(yf("street", e), 6, 3, 2.6);
            c.position.set(l, 0, u),
            c.rotation.y = d,
            Dn.group.add(c)
        }
    }
    let a = e === m.player.home;
    To = a ? Dn.doors[Gg(m.uid, Dn.doors.length)] : null,
    yi || (yi = am(),
    J.add(yi)),
    yi.visible = !!To,
    To && yi.position.set(n + To[0], 9.5, o + To[1] + (To[2] ? 7 : -7));
    let[i,r,s] = Dn.doors[Gg(t, Dn.doors.length)];
    J.add(le.group),
    le.group.visible = !0,
    J.add(de),
    de.visible = !1,
    ce = null,
    x.set(n + i, 0, o + r),
    j = s,
    X.minDistance = 4,
    X.maxDistance = 70,
    X.minPolarAngle = _t.polar[0],
    X.maxPolarAngle = _t.polar[1],
    X.minAzimuthAngle = -1 / 0,
    X.maxAzimuthAngle = 1 / 0,
    dt(new Z(-Math.sin(j),0,-Math.cos(j)), 18, 7, 2, 2.5),
    et && et.setVisible(!1),
    h("#place").textContent = `${Ze(e)} street`,
    h("#place").hidden = !1,
    h("#chat-btn").hidden = !1,
    g(a ? `Your street in ${Ze(e)}. Neighbours who step outside show up here. Say hi!` : `You're on a street in ${Ze(e)}.`, 5e3),
    Pb(),
    k?.sendNow()
}
function Kf() {
    w = "city",
    Dn = null,
    Oo = null,
    To = null;
    for (let e of Object.values(ws))
        e.group.visible = !1;
    yi && (yi.visible = !1),
    h("#street-door").hidden = !0,
    h("#place").hidden = !0,
    et && et.setVisible(!0)
}
async function Xf() {
    w === "street" && (await Fe("Going inside\u2026", 700),
    w === "street" && aa())
}
function uv(e, t) {
    let[n,o] = Qr[Oo]
      , a = e - n
      , i = t - o;
    return Math.abs(a) > Gn / 2 + 12 || Math.abs(i) > 55 ? !0 : Dn.solids.some( ([r,s,l,u]) => a > r && a < s && i > l && i < u)
}
function dv() {
    if (!Dn)
        return;
    let[e,t] = Qr[Oo]
      , n = !!To && Math.hypot(x.x - e - To[0], x.z - t - To[1]) < 7;
    n === h("#street-door").hidden && (h("#street-door").hidden = !n)
}
h("#street-door").addEventListener("click", Xf);
h("#nav-home").innerHTML = xe("home", 22) + "<span>My house</span>";
h("#nav-earn").innerHTML = xe("naira", 22) + "<span>Earn money</span>";
h("#nav-phone").innerHTML = xe("smartphone", 22) + "<span>Phone</span>";
h("#nav-msg").innerHTML = xe("mail", 22) + "<span>Messages</span>";
h("#nav-home").addEventListener("click", () => {
    if (w === "venue")
        return Fw();
    if (!m)
        return ne("have a home");
    w === "home" ? Nr() : w === "street" && Oo === m.player.home ? Xf() : pa()
}
);
h("#nav-earn").addEventListener("click", hf);
h("#nav-phone").addEventListener("click", () => {
    Zh(),
    h("#menu").hidden = !1,
    $s("m_open")
}
);
h("#nav-msg").addEventListener("click", () => m ? Vb() : ne("message people"));
var jg = "";
function hv() {
    let e = w === "home" ? F ? "Leave" : "Leave home" : w === "venue" ? "Leave" : w === "street" && Oo === m?.player.home ? "Go inside" : "My house";
    e !== jg && (jg = e,
    h("#nav-home").innerHTML = xe(w === "home" || w === "venue" ? "log-out" : "home", 22) + "<span></span>",
    h("#nav-home").lastChild.textContent = e)
}
function Kw() {
    let e = m && !xt ? il() : null
      , t = e && fo(e);
    return !t || t.anywhere || df(e) ? [] : [{
        text: `Staff bus to ${t.name}`,
        small: `Free \xB7 you work there (${vt[e.kind].role}) \xB7 Start shift when you arrive`,
        right: "Free",
        onClick: () => {
            E(),
            Po(e, !0)
        }
    }]
}
function fv(e) {
    let t = m && !xt ? il() : null;
    return !t || fo(t)?.anywhere || !ra(t) ? [] : [{
        text: "Staff bus home",
        small: `Free \xB7 from ${fo(t)?.name || t.name}`,
        right: "Free",
        onClick: async () => {
            E(),
            await Fe(`Staff bus home to ${e}\u2026`),
            aa()
        }
    }]
}
function Zf() {
    if (w === "venue" && un(),
    !m)
        return ne("get around");
    if (w === "home" || w === "street")
        return Nr();
    R("Ride", "Where you go, you're there in seconds. Trek if you want to walk it.", [...Kw(), ...["taxi", "keke"].map(e => {
        let t = ia(e)
          , n = zi(e).length;
        return {
            text: xl(e),
            small: t ? n > 1 ? `${n} companies \xB7 from \u20A6${t.menu.km}/km \xB7 you choose` : `${t.name} \xB7 \u20A6${t.menu.km}/km` : "None running right now",
            right: "",
            onClick: () => {
                E(),
                Bu(e)
            }
        }
    }
    ), {
        text: "Along (shared)",
        small: "Cheapest \xB7 \u20A6200/km when full",
        right: "",
        onClick: () => {
            E(),
            y0()
        }
    }, ...da() ? [{
        text: "My car",
        small: "Free",
        right: "",
        onClick: () => {
            E(),
            _r(da())
        }
    }] : [], {
        text: "Trek (walk)",
        small: "Free \xB7 you walk it",
        right: "",
        onClick: () => {
            E(),
            h0()
        }
    }])
}
function pv() {
    let e = w === "home" && !F;
    R("Home", Re[m.player.home] ? `You live in ${Ze(m.player.home)}.` : "", [{
        text: "Kitchen",
        small: e ? "Cook a meal from your foodstuffs" : "Cook at home \xB7 go home first",
        right: "",
        disabled: !e,
        onClick: () => {
            E(),
            ul()
        }
    }, {
        text: "My house",
        small: "Buy furniture and appliances, renovate, see what you own",
        right: "",
        onClick: () => {
            E(),
            Au()
        }
    }, {
        text: "Houses",
        small: "Buy property, choose where you live",
        right: "",
        onClick: () => {
            E(),
            Cf()
        }
    }, ...m.player.owned ? [] : [{
        text: "Rent",
        small: "Pay your rent",
        right: "",
        onClick: () => {
            E(),
            cu()
        }
    }]])
}
async function mv() {
    if (re(),
    !m)
        return ne("own things");
    let e = m.player
      , [t,n] = await Promise.all([k0().catch( () => Mn || []), hw().catch( () => $h || []), bt().catch( () => {}
    )])
      , o = So()
      , a = Object.keys(Aa).filter(rr).length
      , i = (e.furniture || []).length
      , r = Object.values(e.pantry || {}).reduce( (u, d) => u + (d > 0 ? d : 0), 0)
      , s = w === "home" && !F
      , l = (u, d, c) => `${u} ${u === 1 ? d : c}`;
    R("My stuff", `Everything you own. Wallet: ${y(A)}.`, [{
        text: "Cars",
        small: t.length ? t.map(wl).join(" \xB7 ") : "No car yet \xB7 buy one at the car dealer",
        right: l(t.length, "car", "cars"),
        onClick: () => {
            E(),
            Lb()
        }
    }, {
        text: "Houses",
        small: n.length ? n.map(u => Re[u.district]?.name.split("\xB7 ")[1] || u.district).join(" \xB7 ") : "You rent \xB7 buy a house and stop paying rent",
        right: l(n.length, "house", "houses"),
        onClick: () => {
            E(),
            Cf()
        }
    }, {
        text: "Businesses",
        small: o.length ? o.map(u => u.name).join(" \xB7 ") : "You don't own one yet",
        right: l(o.length, "business", "businesses"),
        onClick: () => {
            E(),
            Ii()
        }
    }, {
        text: "Clothes & accessories",
        small: "From Zuma Boutique \xB7 wear or take off",
        right: l(a, "item", "items"),
        onClick: () => {
            E(),
            i0()
        }
    }, {
        text: "Furniture & appliances",
        small: "In your home",
        right: l(i, "item", "items"),
        onClick: () => {
            E(),
            Au("mine")
        }
    }, {
        text: "Foodstuffs",
        small: s ? "Cook a meal" : "In your kitchen at home",
        right: l(r, "meal", "meals"),
        disabled: !s && !r,
        onClick: () => {
            E(),
            s ? ul() : g("Go home to cook.")
        }
    }, {
        text: "Bank",
        small: "Wallet and history",
        right: y(A),
        onClick: () => {
            E(),
            Ou()
        }
    }])
}
function gv() {
    R("Help", "", [{
        text: "How to play",
        small: "Earn, eat, get around, business, politics",
        right: "",
        onClick: () => {
            E(),
            lu(!1)
        }
    }, {
        text: "First-day goals",
        small: `${Yt.filter(e => wr()[e.id]).length} of ${Yt.length} done \xB7 each pays you once`,
        right: "",
        onClick: () => {
            E(),
            Hc()
        }
    }, {
        text: "Controls",
        small: "Tap the ground to walk \xB7 drag to look \xB7 pinch to zoom \xB7 WASD + Shift on computer",
        right: "",
        onClick: () => {}
    }, {
        text: "Send an idea or report a bug",
        small: "Suggestions board",
        right: "",
        onClick: () => {
            E(),
            tu()
        }
    }])
}
function yv() {
    if (!m)
        return ne("have a profile");
    let e = m.player
      , t = Math.round(Nt());
    R(`@${e.username}`, [y(A), `${t}% full`, go() ? "injured" : "", e.jail ? "locked up" : "", Re[e.home] ? `lives in ${Ze(e.home)}` : ""].filter(Boolean).join(" \xB7 "), [...Sl[e.birth] ? [{
        text: Sl[e.birth].name,
        small: Sl[e.birth].perks.slice(1).join(" \xB7 "),
        right: "",
        onClick: () => {}
    }] : [], {
        text: "My profile",
        small: "Your card, traits and dream",
        right: "",
        onClick: () => {
            location.href = "/play/create"
        }
    }, {
        text: "Change my look",
        small: "Hair, outfit, colours",
        right: "",
        onClick: () => {
            location.href = "/play/create"
        }
    }, {
        text: "Wardrobe",
        small: "Boutique things you own",
        right: "",
        onClick: () => {
            E(),
            i0()
        }
    }, {
        text: "Bank",
        small: "Wallet and history",
        right: y(A),
        onClick: () => {
            E(),
            Ou()
        }
    }, {
        text: "Log out",
        small: "",
        right: "",
        onClick: async () => {
            await Fu($e(Te)),
            location.reload()
        }
    }])
}
var wv = () => new Date(Q() + 36e5).getUTCDay()
  , Xw = () => "al-worship-" + new Date(Q() + 36e5).toISOString().slice(0, 10)
  , bv = () => {
    try {
        return !!localStorage.getItem(Xw())
    } catch {
        return !1
    }
}
;
function Zw() {
    try {
        localStorage.setItem(Xw(), "1")
    } catch {}
}
function xv() {
    let e = wv();
    return e !== 0 && e !== 5 || bv() ? null : e === 0 ? w === "venue" && ye?.key === "church" ? null : ["\u26EA It's Sunday: go to church", "Service at the National Christian Centre \xB7 tap to go", () => nt && cn("National Christian Centre", nt.x, nt.z)] : w === "venue" && ye?.key === "mosque" ? null : ["\u{1F54C} It's Friday: Jumu'ah prayers", "At the National Mosque \xB7 tap to go", () => lt && cn("National Mosque", lt.x, lt.z)]
}
var As = 0
  , jd = ""
  , Qw = null
  , kv = 0;
function vv(e) {
    if (As -= e,
    As > 0)
        return;
    As = 3;
    let t = m ? ( () => {
        if (w === "cell" || xt || B || Le || Be || te)
            return null;
        if (_o)
            return ["You fainted", "Get food or help \xB7 tap here", fl];
        if (io)
            return ["Go to work", `${fo(io)?.name || io.name} \xB7 tap to go`, () => Po(io, !0)];
        if (go())
            return [m.player.injury.kind === "faint" ? "You fainted" : Hr() ? `You have ${Hr().name.toLowerCase()}` : "You're hurt", Rs() ? "Eat something, or get treated \xB7 tap here" : d0() ? `A car knocked you down \xB7 better in ${Math.ceil(kb() / 1e3)} s, or get treated` : "Get treated \xB7 tap here", el];
        if (Nt() < 35)
            return w === "home" && !F && Object.values(m.player.pantry || {}).some(l => l > 0) ? ["Eat something", "Tap here to cook", ul] : ["Eat something", "Find food near you \xB7 tap here", ga];
        let o = !rn && !F ? En.find(l => l.host !== m.uid && !Ss.has(l.host) && Q() - l.t < 5 * 6e4) : null;
        if (o)
            return [`\u{1F389} House party at @${o.name}'s`, `${Ze(o.home)} \xB7 ${o.people} there \xB7 tap to join, free`, () => _h(o)];
        let a = w !== "club" ? En.find(l => l.kind === "club" && l.host !== m.uid && !Ss.has("club:" + l.host) && Q() - l.t < 30 * 6e4) : null;
        if (a)
            return [`\u{1FAA9} @${a.name} is at ${ot}`, `${a.treat && po() ? "free entry for the first few" : zf()} \xB7 tap to join`, () => {
                Ss.add("club:" + a.host),
                If(a)
            }
            ];
        let i = hx();
        if (i)
            return i;
        let r = xv();
        if (r)
            return r;
        if (r2())
            return ["Free money!", "Collect your \u20A610,000 palliative \xB7 tap here", la];
        if (A < 2e4)
            return ["Earn money", "Go to work \xB7 tap here", sa];
        if (w === "home" && !F && !m.player.food)
            return null;
        let s = [["Earn money", "Work a 2-minute shift \xB7 tap here", sa], ["Have fun", "Farm City game arena is open 24 hours", () => cn("Farm City", Fn.farmcity?.x, Fn.farmcity?.z)], ["Make friends", "Say hi in the chat \xB7 tap here", Wb], ...H ? [["Vote in the election", `Senators and Minister \xB7 closes ${Lo()}`, la]] : [], ...w === "home" && !F ? [["Meet your neighbours", "Step outside onto your street", Jf], ["Throw a house party", "Anyone in Abuja can join \xB7 tap here", zu]] : [], ...En.some(l => l.host !== m.uid) ? [["Go to a party", `${En.filter(l => l.host !== m.uid).length} house part${En.length === 1 ? "y" : "ies"} on now \xB7 tap here`, Uf]] : [], ...A > 3e5 ? [["Upgrade your home", "Furniture, appliances, renovation", Au]] : [], ...A > 45e5 && !Mn?.length ? [["Buy a car", "Then you go anywhere free", Lb]] : [], ["Party tonight", "Club Zuma \xB7 music and dancing", () => ue && cn(ot, ue.x, ue.z)]];
        return s[Math.floor(kv++ / 10) % s.length]
    }
    )() : null
      , n = h("#hint");
    if (!t) {
        n.hidden = !0,
        jd = "";
        return
    }
    Qw = t[2],
    jd !== t[0] + t[1] && (jd = t[0] + t[1],
    n.innerHTML = "<span></span><small></small>",
    n.firstChild.textContent = t[0],
    n.lastChild.textContent = t[1]),
    n.hidden = !1
}
h("#hint").addEventListener("click", () => Qw?.());
var Fn = {};
function Cv() {
    let e = {
        bowling: [-10, 10, -12, 0],
        arcade: [-12, 12, -14, 0],
        cabana: [-8, 8, -11, -1],
        airport: [-60, 60, -35, -5]
    };
    for (let t of Xr) {
        let[n,o] = t.at
          , a = U.nearest(n, o)
          , r = a >= 0 && Math.hypot(U.nodes[a][0] - n, U.nodes[a][1] - o) < 300 ? Math.atan2(U.nodes[a][0] - n, U.nodes[a][1] - o) : 0;
        if (t.kind === "airport") {
            let u = ad(3e3);
            u.position.set(n, 0, o - 200),
            J.add(u)
        } else if (t.far && (Math.abs(n) > 9e3 || Math.abs(o) > 9e3)) {
            let u = ad(1600);
            u.position.set(n, 0, o),
            J.add(u)
        }
        let s = Oe(Op(t));
        if (s.position.set(n, 0, o),
        s.rotation.y = r,
        J.add(s),
        e[t.kind]) {
            let[u,d,c,p] = e[t.kind];
            qa(n, o, r, u, d, c, p)
        }
        ao(t.name, n, t.kind === "airport" ? 30 : 13, o);
        let l = t.kind === "airport" ? 30 : t.kind === "campus" ? 10 : 14;
        Fn[t.id] = {
            x: n + Math.sin(r) * l,
            z: o + Math.cos(r) * l
        }
    }
}
async function eb(e, t, n, o) {
    if (E(),
    n > 0 && !await Hi(o, "a_" + t.id, n, "club", `${t.name} \xB7 ${e.name}`))
        return;
    await Fe(`${t.verb} at ${e.name}\u2026`, 2600);
    let a = Math.random()
      , i = s => s[Math.floor(Math.random() * s.length)]
      , r = {
        bowling: () => {
            let s = 60 + Math.floor(a * 190)
              , l = Math.floor(s / 55);
            return `You bowled ${s}${l ? ` with ${l} strike${l > 1 ? "s" : ""}` : ""}!`
        }
        ,
        vr: () => i(["You survived the VR drop tower!", "You crashed the VR fighter jet. Try again!", "You won the VR bike race!"]),
        snooker: () => a < .5 ? "You won the frame! Clean potting." : "You lost on the black. So close.",
        airhockey: () => a < .5 ? `You won 7\u2013${Math.floor(a * 10) % 7}!` : "You lost 5\u20137. Rematch?",
        ps5: () => a < .55 ? `You won ${2 + Math.floor(a * 3)}\u2013${Math.floor(a * 2)}!` : "You lost on penalties.",
        kart: () => `You finished ${1 + Math.floor(a * 6)}${["st", "nd", "rd", "th", "th", "th"][Math.floor(a * 6)]} in the kart race!`,
        cinema9d: () => "What a ride! Your seat was shaking the whole time.",
        karaoke: () => i(["The crowd sang along with you!", "You murdered that song (in a good way).", "Someone filmed you. You're going viral."]),
        movienight: () => "Great film under the stars. Free and full vibes.",
        liveband: () => "The band played your favourite song!",
        pool: () => "You spent the afternoon by the pool. Fully relaxed.",
        gym: () => i(["You smashed leg day.", "Great workout. You feel strong.", "You ran 5 km on the treadmill."]),
        beauty: () => "You're looking fresh and glowing.",
        carousel: () => "Round and round. Classic fun.",
        coaster: () => i(["You screamed the whole way. Worth it.", "You rode it with your hands up!"]),
        pendulum: () => "Your stomach is still up there somewhere.",
        allaccess: () => `You went on ${8 + Math.floor(a * 8)} rides. What a day!`,
        movie: () => i(["Great movie! The popcorn was fresh.", "The ending was crazy. Everyone clapped.", "You almost cried. Nobody saw."]),
        moviev: () => "VIP seats, popcorn and a cold drink. Big boy energy.",
        football: () => a < .5 ? "Your team won! The whole place went wild." : "Your team lost. The Arabian tea made it better.",
        arcade: () => `You won ${20 + Math.floor(a * 180)} tickets!`
    }[t.id]?.() || "That was fun!";
    g(r, 5e3)
}
var Wn = []
  , Ks = null
  , Dd = 0;
function Ev() {
    for (let e of Lp) {
        let t = e.kind === "market" ? [[0, -2], [-8, -7], [8, -7], [-8, 2], [8, 2]] : [[0, -3.5], [-5, -7], [5, -7], [-5, 0], [5, 0], [0, 2]]
          , n = Tu(e.near[0], e.near[1], t);
        if (!n)
            continue;
        let o = Oe(e.kind === "market" ? Ip(e.name) : Pp(e.name));
        o.position.set(n.x, 0, n.z),
        o.rotation.y = n.h,
        J.add(o),
        e.kind === "boutique" && qa(n.x, n.z, n.h, -5, 5, -7, 0),
        ao(e.kind === "market" ? "Market" : "Boutique", n.x, 9, n.z),
        Wn.push({
            ...e,
            x: n.x + Math.sin(n.h) * 3,
            z: n.z + Math.cos(n.h) * 3
        })
    }
}
function Tv(e) {
    if (Dd -= e,
    Dd > 0)
        return;
    Dd = .4;
    let t = !P?.driving && !B ? Wn.find(n => Math.hypot(n.x - x.x, n.z - x.z) < 18) : null;
    t !== Ks && (Ks = t,
    h("#shop-btn").hidden = !t,
    t && (h("#shop-btn").innerHTML = xe(t.kind === "market" ? "store" : "shirt", 20) + "<span></span>",
    h("#shop-btn").lastChild.textContent = `Enter ${t.name}`))
}
h("#shop-btn").addEventListener("click", () => {
    let e = Ks;
    e && co("shop:" + e.name, e.name, e.kind === "boutique" ? "boutique" : "shop", {
        x: e.x,
        z: e.z
    }, () => e.kind === "market" ? Mv(e) : Uv())
}
);
async function Gh(e) {
    if (w === "cell")
        return g("You're locked up.");
    await bt();
    let t = w === "city" ? [x.x, x.z] : Kn(Re[Hn()].at)
      , n = Q()
      , o = []
      , a = (s, l, u="") => o.push({
        cat: s,
        words: `${l.name} ${u} ${gt[s].name}`,
        open: l.open,
        row: {
            text: l.name,
            small: [pw(l.prices || []), l.small, pr(Math.hypot(l.x - t[0], l.z - t[1]))].filter(Boolean).join(" \xB7 "),
            right: "Go",
            onClick: () => {
                E(),
                cn(l.name, l.x, l.z)
            }
        }
    });
    for (let s of Wn)
        a(s.kind === "market" ? "store" : "fashion", {
            name: s.name,
            x: s.x,
            z: s.z,
            open: !0,
            small: s.kind === "market" ? "Foodstuffs for your kitchen" : "Fabrics, shades, caps, gold chains",
            prices: s.kind === "market" ? (s.sells || []).map(l => eo[l]?.price || 0) : Object.values(Aa).map(l => l.price)
        }, s.kind === "market" ? (s.sells || []).map(l => eo[l]?.name).join(" ") : "clothes fabric shades cap chain");
    for (let s of Lt) {
        let l = Zn({
            kind: "food",
            place: s.id
        })
          , u = vo.includes(s.id)
          , d = u ? null : jt(s.id)
          , c = ku(s)
          , p = u ? s.menu.map(f => Xe[f]?.price || 0) : d ? Object.entries(d.menu).filter( ([f]) => Xe[f]).map( ([,f]) => lo(f)) : [];
        s.pantry && a("store", {
            name: s.name,
            x: s.x,
            z: s.z,
            open: c,
            small: `Supermarket \xB7 groceries and snacks \xB7 ${Bc(s)}`,
            prices: s.pantry.map(f => eo[f]?.price || 0)
        }, s.pantry.map(f => eo[f]?.name).join(" ")),
        l !== "store" && a(l, {
            name: s.name,
            x: s.x,
            z: s.z,
            open: c,
            small: `${l === "food" ? "Food to eat now" : l === "transport" ? "Flights \xB7 snacks" : "Fun \xB7 snacks"} \xB7 ${Bc(s)}`,
            prices: p
        }, s.menu.map(f => Xe[f]?.name).join(" "))
    }
    if (ue) {
        let s = jt(Qn);
        a("fun", {
            name: ot,
            x: ue.x,
            z: ue.z,
            open: !s || Ct(s, n),
            small: `Nightclub \xB7 dance, drinks, spray money${s ? ` \xB7 @${s.ownerName}` : ""}`,
            prices: s ? Object.values(s.menu) : []
        }, "dance music drinks party")
    }
    if (Se) {
        let s = jt(Kr);
        a("health", {
            name: "General Hospital",
            x: Se.x,
            z: Se.z,
            open: !0,
            small: `Treatment \xB7 ambulance${s ? ` \xB7 @${s.ownerName}` : ""}`,
            prices: s ? Object.values(s.menu) : []
        }, "doctor treatment sick")
    }
    for (let s of He)
        if (s.kind === "custom" && ht[s.plot]) {
            let l = ht[s.plot].door
              , u = Ct(s, n);
            a(Zn(s), {
                name: s.name,
                x: l.x,
                z: l.z,
                open: u,
                small: `${s.about || "Shop"} \xB7 ${u ? "Open" : "Closed"} \xB7 @${s.ownerName} \xB7 ${Bl(s.plot)}`,
                prices: Object.values(s.menu)
            }, Pc(s))
        }
    let i = Tf(o, s => s.row.text);
    Os({
        title: "Shop",
        sub: "Everything you can buy in Abuja, by group: food, groceries for your kitchen, players' own shops and salons. Open ones first, in no particular order.",
        back: null,
        cats: ["food", "store", "fashion", "beauty", "fun", "health", "services"],
        entries: i,
        placeholder: "Search, e.g. barbing salon, rice, boutique",
        tileSmall: (s, l) => l.length ? `${Cr(l.length, "place")}${l.some(u => u.open) ? ` \xB7 ${l.filter(u => u.open).length} open` : ""}` : "none yet",
        catSub: (s, l) => s === "food" ? "Places to eat now. To search meals (jollof, suya\u2026), use Food." : s === "store" ? "Buy foodstuffs to cook at home: much cheaper than eating out." : `${Cr(l.length, "place")}, open ones first.`,
        extra: (s, l) => l ? [] : s === "food" ? [{
            text: "Search meals in Food",
            small: "Every meal, cheapest first",
            right: "",
            onClick: () => ga()
        }] : !o.some(u => u.cat === s) || s === "beauty" || s === "fashion" || s === "services" ? [{
            text: `Open your own ${gt[s].name.split(" ")[0].toLowerCase()} business`,
            small: `${y(Ma)} \xB7 Earn money \u2192 Business`,
            right: "",
            onClick: () => Un(s)
        }] : [],
        create: (s, l) => ({
            text: "Can't find it? Start your own",
            small: `${l ? `Open your own ${gt[l].name.split(" ")[0].toLowerCase()} business` : "Open a business that sells it"} and keep the profit \xB7 ${y(Ma)}`,
            right: "",
            onClick: () => Un(l)
        })
    }, e)
}
var ur = e => m?.player.pantry?.[e] || 0;
function tb(e, t) {
    let n = eo[e];
    return {
        text: n.name,
        small: `${n.meals} meals of +${n.fill}% \xB7 cook at home \xB7 you have ${ur(e)}`,
        right: y(n.price),
        disabled: !m || n.price > A,
        onClick: () => $v(e, t)
    }
}
function Mv(e) {
    if (!m)
        return ne("shop");
    R(e.name, `Foodstuffs for your kitchen. Cook them at home (Phone \u2192 Home \u2192 Kitchen). You have ${y(A)}.`, e.sells.map(t => tb(t, e.name)))
}
async function $v(e, t) {
    E();
    let n = eo[e]
      , o = A - n.price
      , a = ur(e) + n.meals;
    try {
        let i = Xt(W);
        i.update(ee(W, "players", m.uid), {
            money: o,
            ["pantry." + e]: a,
            buy: {
                item: e,
                at: ie()
            },
            updatedAt: ie()
        }),
        i.set(ee(mt(W, "players", m.uid, "transactions")), {
            amount: -n.price,
            reason: "market",
            label: `${n.name} \xB7 ${t}`.slice(0, 60),
            balance: o,
            createdAt: ie()
        }),
        await i.commit(),
        A = o,
        m.player.money = o,
        _e(),
        m.player.pantry = {
            ...m.player.pantry || {},
            [e]: a
        },
        g(`Bought ${n.name.toLowerCase()}. Cook it at home: ${a} meal${a > 1 ? "s" : ""} in your kitchen.`, 4e3)
    } catch (i) {
        console.warn("grocery", i.code || i),
        g("Couldn't buy that. Try again.")
    }
}
function ul() {
    if (!m || w !== "home" || F)
        return g("Cook in your own home.");
    let e = Object.keys(eo).filter(n => ur(n) > 0)
      , t = Nt();
    if (!e.length)
        return R("Kitchen", "Your kitchen is empty. Buy foodstuffs at Garki Market or a supermarket (Menu \u2192 Services \u2192 Market & shops).", []);
    R("Kitchen", `You're ${Math.round(t)}% full. Cook a meal:`, e.map(n => ({
        text: `Cook ${eo[n].name.split(" (")[0].replace(/^(Carton|Crate|Tuber) of /, "").toLowerCase()}`,
        small: `+${eo[n].fill}% food \xB7 ${ur(n)} meal${ur(n) > 1 ? "s" : ""} left`,
        right: "Cook",
        disabled: t >= 97,
        onClick: () => Sv(n)
    })))
}
async function Sv(e) {
    E();
    let t = eo[e]
      , n = ur(e) - 1
      , o = Math.max(0, Math.min(100, Math.floor(Nt() + t.fill - 2)));
    try {
        await mn(ee(W, "players", m.uid), {
            ["pantry." + e]: n,
            food: {
                level: o,
                at: ie(),
                last: e
            },
            updatedAt: ie()
        });
        let a = Q();
        m.player.pantry[e] = n,
        m.player.food = {
            level: o,
            at: {
                toMillis: () => a
            },
            last: e
        },
        Fa = o,
        Ja(),
        ln("eat"),
        g(`You cooked and ate. You're ${o}% full.`)
    } catch (a) {
        console.warn("cook", a.code || a),
        g("Couldn't cook. Try again.")
    }
}
var pi = null
  , nb = () => {
    let e = da();
    return e ? [`car=${e.model}_${e.colour.slice(1)}`] : []
}
;
function Av(e) {
    pi && (Mt.remove(pi),
    pi = null);
    let t = e.find(r => r.startsWith("car="));
    if (!t)
        return;
    let[n,o] = t.slice(4).split("_");
    if (!bo[n] || !/^[0-9a-f]{6}$/i.test(o || ""))
        return;
    pi = Oe(Rl(n, "#" + o));
    let[a,i] = me.size;
    pi.position.set(a / 2 + 3.2, 0, i / 2 - 2.5),
    pi.rotation.y = Math.PI,
    Mt.add(pi)
}
var ut = null
  , cc = null
  , Dg = 0
  , Pt = null
  , Yc = null
  , Je = null
  , Ao = !1
  , ls = null
  , Bo = !1
  , Qf = 0
  , ob = 0
  , ab = () => F ? F.meta?.items || [] : m?.player.furniture || []
  , e0 = () => !!me?.tv && ab().some(e => e === "tv1" || e === "tv2")
  , ib = () => g(`No light: NEPA took it${F ? "" : ", and there's no gen or solar. Buy one in My house"}.`, 4e3);
async function Rv() {
    if (cc && Date.now() - Dg < 5 * 6e4)
        return cc;
    try {
        let e = await fetch("/api/crowds?tv=1");
        e.ok && (cc = (await e.json()).tv || {},
        Dg = Date.now())
    } catch {}
    return cc || {}
}
function rb() {
    if (!e0())
        return g("There's no TV here.");
    if (!hl())
        return ib();
    R("\u{1F4FA} TV", ut ? `On: ${si[ut].name}. Everyone in the house is watching it.` : "Live Nigerian TV. Everyone in the house watches the same channel. It uses data, like YouTube.", [...Object.entries(si).map( ([e,t]) => ({
        text: t.name,
        small: e === ut ? "On now" : "Live",
        right: e === ut ? "\u2713" : "Watch",
        onClick: () => {
            E(),
            e !== ut && Hv(e)
        }
    })), ...ut ? [{
        text: Ao ? "Back to the room" : "Watch big",
        small: Ao ? "" : "Zoom in on the TV",
        right: "",
        onClick: () => {
            E(),
            Iu(!Ao)
        }
    }, {
        text: "Turn the TV off",
        small: "For everyone in the house",
        right: "",
        onClick: () => {
            E(),
            k?.sendHouseCmd("::tv:off"),
            wa()
        }
    }] : []])
}
function Hv(e) {
    k?.sendHouseCmd(`::tv:${e}`),
    Ye("tv"),
    Ye("tv_" + e),
    sb(e, !0)
}
async function sb(e, t) {
    if (w !== "home" || !si[e] || !e0() || !hl() || ut === e && Je?.visible)
        return;
    ut = e,
    Bo && (t && k?.sendHouseCmd("::radio:off"),
    Br()),
    qn && (qn = !1,
    No.stop());
    let n = await Rv();
    if (ut !== e || w !== "home")
        return;
    let o = n[e] ? `https://www.youtube.com/embed/${n[e]}?autoplay=1&playsinline=1&rel=0&modestbranding=1` : `https://www.youtube.com/embed/live_stream?channel=${si[e].yt}&autoplay=1&playsinline=1`;
    t0(),
    n0(640, 360);
    let a = Je.element.firstChild;
    a.src !== o && (a.src = o),
    lb(),
    Pt.domElement.hidden = !1,
    o0(),
    t || g(`\u{1F4FA} ${si[e].name} is on. Tap the TV screen if it doesn't start.`, 4e3)
}
function lb() {
    if (!Je || !ut)
        return;
    let e = me?.tv;
    if (!e)
        return wa();
    Je.position.set(e.x, e.y, e.z),
    Je.rotation.set(0, Math.PI / 2, 0),
    Je.scale.setScalar(e.w / 640),
    Je.visible = !0
}
function wa(e) {
    ut && (ut = null,
    Ao && Iu(!1),
    Je && (Je.element.firstChild.src = "about:blank",
    Je.visible = !1),
    Pt && (Pt.domElement.hidden = !0),
    o0(),
    e && g(e, 4e3))
}
function t0() {
    if (Pt)
        return;
    Pt = new Il,
    Pt.setSize(innerWidth, innerHeight),
    Object.assign(Pt.domElement.style, {
        position: "fixed",
        left: "0",
        top: "0",
        zIndex: "1",
        pointerEvents: "none"
    }),
    document.body.appendChild(Pt.domElement),
    Yc = new vl;
    let e = document.createElement("div");
    e.style.cssText = "width:640px;height:360px;background:#000;pointer-events:auto;backface-visibility:hidden";
    let t = document.createElement("iframe");
    t.title = "TV",
    t.allow = "autoplay; encrypted-media; picture-in-picture",
    t.style.cssText = "border:0;width:640px;height:360px;display:block",
    t.addEventListener("load", () => {
        let n = ++Fg;
        Wc = !1;
        let o = a => {
            if (!(Wc || n !== Fg || a > 30)) {
                try {
                    t.contentWindow.postMessage(JSON.stringify({
                        event: "listening",
                        id: 1,
                        channel: "widget"
                    }), "*")
                } catch {}
                setTimeout( () => o(a + 1), 500)
            }
        }
        ;
        o(0)
    }
    ),
    e.appendChild(t),
    Je = new zl(e),
    Yc.add(Je),
    addEventListener("resize", () => Pt.setSize(innerWidth, innerHeight))
}
function n0(e, t) {
    let n = Je.element
      , o = n.firstChild;
    n.style.width = o.style.width = e + "px",
    n.style.height = o.style.height = t + "px"
}
var Xs = -1
  , Wc = !1
  , Fg = 0
  , cb = 0
  , ub = -1e9
  , Zs = new Set;
addEventListener("message", e => {
    if (e.origin !== "https://www.youtube.com")
        return;
    let t;
    try {
        t = typeof e.data == "string" ? JSON.parse(e.data) : e.data
    } catch {
        return
    }
    Wc = !0,
    t?.event === "infoDelivery" && typeof t.info?.currentTime == "number" && (cb = t.info.currentTime,
    ub = performance.now()),
    t?.event === "infoDelivery" && typeof t.info?.playerState == "number" ? Xs = t.info.playerState : t?.event === "onStateChange" && typeof t.info == "number" ? Xs = t.info : t?.event === "onError" && (Sn?.vid ? (Zs.add(Sn.vid),
    cr()) : Qe?.vid && !Qe.live && (Zs.add(Qe.vid),
    Uc()))
}
);
function zv(e) {
    let t = (e || []).filter(i => !Zs.has(i[0]));
    if (!t.length)
        return null;
    let n = t.reduce( (i, r) => i + r[1], 0)
      , o = Math.floor((k?.serverNow() || Date.now()) / 1e3) % n
      , a = 0;
    for (; o >= t[a][1]; )
        o -= t[a++][1];
    return {
        v: t[a],
        at: o,
        left: t[a][1] - o
    }
}
function Iu(e) {
    e && (!ut || !me?.tv) || (Ao = e,
    e ? (ls = {
        cam: je.position.clone(),
        target: X.target.clone()
    },
    X.enabled = !1) : ls && (je.position.copy(ls.cam),
    X.target.copy(ls.target),
    X.enabled = !0,
    X.update(),
    ls = null),
    o0())
}
var qc = new Z;
function Iv(e) {
    let t = me?.tv;
    if (!t)
        return Iu(!1);
    let n = je.fov * Math.PI / 180
      , o = 2 * Math.atan(Math.tan(n / 2) * je.aspect)
      , a = Math.max(t.h / 2 / Math.tan(n / 2), t.w / 2 / Math.tan(o / 2)) * 1.06;
    qc.set(t.x + a, t.y, t.z),
    je.position.lerp(qc, Math.min(1, e * 4)),
    je.lookAt(t.x, t.y, t.z)
}
function o0() {
    let e = h("#tv-bar");
    e.hidden = !ut,
    ut && (h("#tv-name").textContent = `\u{1F4FA} ${si[ut].name} \xB7 LIVE`,
    h("#tv-big").innerHTML = xe(Ao ? "minimize-2" : "maximize-2", 16),
    h("#tv-big").setAttribute("aria-label", Ao ? "Back to the room" : "Watch big"))
}
h("#tv-big").addEventListener("click", () => Iu(!Ao));
h("#tv-ch").addEventListener("click", rb);
h("#tv-off").addEventListener("click", () => {
    k?.sendHouseCmd("::tv:off"),
    wa()
}
);
var nt = null
  , jh = !1
  , Fd = 0
  , Qe = null
  , uc = null
  , Yg = 0;
function Pv() {
    let e = [mr[0] - zt[0], mr[1] - zt[1]]
      , t = Math.hypot(...e);
    for (let o = 56; o < 100; o += 2) {
        let a = zt[0] + e[0] / t * o
          , i = zt[1] + e[1] / t * o;
        if (!De(a, i)) {
            nt = {
                x: a,
                z: i
            };
            break
        }
    }
    let n = nt && Jt.find(o => o.name === "National Christian Centre");
    n && (n.x = nt.x,
    n.z = nt.z,
    n.node = U.nearest(n.x, n.z)),
    st && (window.__church = {
        door: nt,
        dest: n,
        road: n && U.nodes[n.node]
    })
}
function db(e) {
    let t = e?.name === "National Christian Centre" ? nt : e?.name === "National Mosque" ? lt : null;
    !t || w !== "city" || Math.hypot(t.x - x.x, t.z - x.z) < 10 || (ce = new Z(t.x,0,t.z),
    de.position.set(ce.x, .5, ce.z),
    de.scale.setScalar(1),
    de.visible = !0)
}
function Lv(e) {
    if (Fd -= e,
    Fd > 0 || !nt)
        return;
    Fd = .4;
    let t = !P?.driving && !B && Math.hypot(nt.x - x.x, nt.z - x.z) < 40;
    t !== jh && (jh = t,
    h("#church-btn").hidden = !t)
}
function Nv() {
    if (!m)
        return ne("go to church");
    !nt || w !== "city" || co("church", "National Christian Centre", "church", {
        x: nt.x,
        z: nt.z
    }, () => Qs())
}
async function hb() {
    if (uc && Date.now() - Yg < 5 * 6e4)
        return uc;
    try {
        let e = await fetch("/api/crowds?church=1");
        e.ok && (uc = await e.json(),
        Yg = Date.now())
    } catch {}
    return uc || {}
}
function Ov() {
    Zw(),
    Qe = {
        live: !1,
        vid: null,
        muted: !0,
        big: !1,
        saved: null,
        timer: 0,
        check: 0
    },
    document.body.classList.add("in-church"),
    document.body.classList.toggle("church-chat-off", !a0()),
    h("#church-bar").hidden = !1,
    dl(),
    Pi();
    let e = Qe;
    e.check = setInterval(async () => {
        let t = await hb();
        Qe === e && (t.live || null) !== (e.live ? e.vid : null) && Uc()
    }
    , 5 * 6e4),
    Uc(),
    g("Welcome to church \u{1F64F} The service is on the screen. Tap a pew to sit.", 5e3)
}
async function Uc() {
    let e = Qe;
    if (!e)
        return;
    clearTimeout(e.timer);
    let t = await hb();
    if (Qe !== e)
        return;
    let n = s => `?autoplay=1&mute=${e.muted ? 1 : 0}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1&origin=${encodeURIComponent(location.origin)}${s ? `&start=${s}` : ""}`, o, a;
    t.live ? (e.live = !0,
    e.vid = t.live,
    o = `https://www.youtube.com/embed/${t.live}${n(0)}`) : (a = zv(t.vids)) ? (e.live = !1,
    e.vid = a.v[0],
    o = `https://www.youtube.com/embed/${e.vid}${n(a.at)}`,
    e.timer = setTimeout(Uc, (a.left + 2) * 1e3)) : (e.live = !1,
    e.vid = null,
    o = `https://www.youtube.com/embed/videoseries?list=UU${Np.yt.slice(2)}${n(0).replace("?", "&")}`),
    t0(),
    n0(640, 360);
    let i = Je.element.firstChild;
    i.src !== o && (i.src = o);
    let r = ye.room.tv;
    Je.position.set(ye.at[0] + r.x, r.y, ye.at[1] + r.z),
    Je.rotation.set(0, 0, 0),
    Je.scale.setScalar(r.w / 640),
    Je.visible = !0,
    Pt.domElement.hidden = !1,
    dl()
}
function Bv() {
    let e = Qe;
    e && (e.big && Pu(!1),
    Qe = null,
    clearTimeout(e.timer),
    clearInterval(e.check),
    Je && (Je.element.firstChild.src = "about:blank",
    Je.visible = !1),
    Pt && (Pt.domElement.hidden = !0),
    St && (St = !1),
    document.body.classList.remove("in-church", "church-chat-off"),
    h("#church-bar").hidden = !0,
    Pi())
}
function _v() {
    if (!Qe)
        return;
    Qe.muted = !Qe.muted;
    let e = Je?.element.firstChild.contentWindow;
    for (let[t,n] of Qe.muted ? [["mute", []]] : [["unMute", []], ["setVolume", [100]], ["playVideo", []]])
        e?.postMessage(JSON.stringify({
            event: "command",
            func: t,
            args: n
        }), "*");
    dl(),
    Qe.muted || g("\u{1F50A} Sound on. Can't hear it? Tap the video once.", 3500)
}
var a0 = () => {
    try {
        return localStorage.getItem("al-church-chat") !== "off"
    } catch {
        return !0
    }
}
;
function Gv(e) {
    document.body.classList.toggle("church-chat-off", !e);
    try {
        localStorage.setItem("al-church-chat", e ? "on" : "off")
    } catch {}
    dl(),
    Pi()
}
function Pu(e) {
    let t = Qe;
    if (!(!t || t.big === e)) {
        if (t.big = e,
        e)
            t.saved = {
                cam: je.position.clone(),
                target: X.target.clone(),
                pos: x.clone()
            },
            X.enabled = !1;
        else if (t.saved) {
            let n = x.clone().sub(t.saved.pos);
            je.position.copy(t.saved.cam).add(n),
            X.target.copy(t.saved.target).add(n),
            X.enabled = !0,
            X.update(),
            t.saved = null
        }
        dl()
    }
}
var Yd = null
  , Wg = 0;
function jv(e) {
    let t = ye?.room.tv;
    if (!t)
        return Pu(!1);
    if ((Wg -= e) <= 0 || !Yd) {
        Wg = .3;
        let c = h("#church-bar").getBoundingClientRect().bottom + 8
          , p = h("#chat-log").getBoundingClientRect()
          , f = h("#venue-bar").getBoundingClientRect()
          , b = (p.height ? p.top : f.height ? f.top : innerHeight) - 8;
        Yd = [c, Math.max(c + 120, b)]
    }
    let[n,o] = Yd
      , a = innerHeight
      , i = Math.tan(je.fov * Math.PI / 360)
      , r = i * je.aspect
      , s = Math.max(t.h * 1.04 / (2 * i * (o - n) / a), t.w * 1.04 / (2 * r))
      , l = (1 - (n + o) / a) * s * i
      , u = ye.at[0] + t.x
      , d = ye.at[1] + t.z;
    qc.set(u, t.y - l, d + s),
    je.position.lerp(qc, Math.min(1, e * 4)),
    je.lookAt(u, t.y - l, d)
}
function dl() {
    if (!Qe)
        return;
    let e = a0();
    h("#church-name").textContent = Qe.live ? "\u26EA Koinonia \xB7 LIVE" : "\u26EA Koinonia",
    h("#church-sound").innerHTML = xe(Qe.muted ? "volume-x" : "volume-2", 16),
    h("#church-sound").setAttribute("aria-label", Qe.muted ? "Turn the sound on" : "Mute"),
    h("#church-sound").setAttribute("aria-pressed", !Qe.muted),
    h("#church-big").innerHTML = xe(Qe.big ? "minimize-2" : "maximize-2", 16),
    h("#church-big").setAttribute("aria-label", Qe.big ? "Back to the room" : "Watch big"),
    h("#church-chat").innerHTML = xe(e ? "message-circle" : "message-circle-off", 16),
    h("#church-chat").setAttribute("aria-label", e ? "Hide the chat" : "Show the chat"),
    h("#church-chat").setAttribute("aria-pressed", e)
}
function Qs(e) {
    let t = ye?.room;
    if (!t?.seats)
        return;
    let[n,o] = e ? [e.x, e.z] : [x.x, x.z]
      , a = k?.nearby(30) || []
      , i = null
      , r = 1 / 0;
    for (let[s,l] of t.seats) {
        let u = ye.at[0] + s
          , d = ye.at[1] + l
          , c = Math.hypot(u - n, d - o);
        c < r && !a.some(p => Math.hypot(p.x - u, p.z - d) < .6) && (r = c,
        i = [u, d])
    }
    if (!i)
        return g(ye.key === "mosque" ? "The rows are full!" : "The pews are full!");
    Qe?.big && Pu(!1),
    x.set(i[0], 0, i[1]),
    j = Math.PI,
    ce = null,
    de.visible = !1,
    St = !0,
    k?.sendNow(),
    dt(new Z(0,0,-1), 7, 6, 14, 4.6),
    g(ye.key === "mosque" ? "You joined a row. Tap the floor to get up." : "You sat down. Tap the floor to get up.", 2500)
}
var lt = null
  , Dh = !1
  , Wd = 0;
function Dv(e) {
    if (!e.mosque)
        return;
    let t = [0, 1, 2, 3].map(r => -e.mosque.angle + r * Math.PI / 2).sort( (r, s) => Math.cos(s) - Math.cos(r))[0]
      , n = Math.sin(t)
      , o = Math.cos(t)
      , a = Oe(fm());
    a.position.set(n * 32.4, 0, o * 32.4),
    a.rotation.y = t,
    J.add(a);
    for (let r = 36; r < 56; r += 2)
        if (!De(n * r, o * r)) {
            lt = {
                x: n * r,
                z: o * r
            };
            break
        }
    let i = lt && Jt.find(r => r.name === "National Mosque");
    i && (i.x = lt.x,
    i.z = lt.z,
    i.node = U.nearest(i.x, i.z))
}
function Fv(e) {
    if (Wd -= e,
    Wd > 0 || !lt)
        return;
    Wd = .4;
    let t = !P?.driving && !B && Math.hypot(lt.x - x.x, lt.z - x.z) < 40;
    t !== Dh && (Dh = t,
    h("#mosque-btn").hidden = !t)
}
function Yv() {
    if (!m)
        return ne("go to the mosque");
    !lt || w !== "city" || co("mosque", "National Mosque", "mosque", {
        x: lt.x,
        z: lt.z
    }, () => Qs())
}
function Wv() {
    Zw(),
    g("As-salamu alaykum \u{1F64F} Shoes off at the door. Tap Sit to join a row.", 5e3)
}
h("#mosque-btn").innerHTML = xe("moon-star", 20) + "<span>Enter the mosque</span>";
h("#mosque-btn").addEventListener("click", Yv);
h("#church-btn").innerHTML = xe("church", 20) + "<span>Enter the church</span>";
h("#church-btn").addEventListener("click", Nv);
h("#church-sound").addEventListener("click", _v);
h("#church-big").addEventListener("click", () => Pu(!Qe?.big));
h("#church-chat").addEventListener("click", () => Gv(!a0()));
function qv() {
    if (!hl())
        return ib();
    R("\u{1F4FB} Abuja FM", Bo ? "Playing now. Everyone in the house hears it." : "Afrobeats all day. Everyone in the house hears it.", Bo ? [{
        text: "Next song",
        right: "\u23ED",
        onClick: () => {
            E(),
            Fh((Qf + 1) % Vo.length, k?.serverNow() || Date.now(), !0)
        }
    }, {
        text: "Turn the radio off",
        small: "For everyone in the house",
        right: "",
        onClick: () => {
            E(),
            k?.sendHouseCmd("::radio:off"),
            Br()
        }
    }] : [{
        text: "Turn it on",
        main: !0,
        onClick: () => {
            E(),
            Fh(Math.floor(Math.random() * Vo.length), k?.serverNow() || Date.now(), !0)
        }
    }])
}
function Fh(e, t, n) {
    w !== "home" || !ab().includes("radio") || !hl() || (ut && (n && k?.sendHouseCmd("::tv:off"),
    wa()),
    Bo = !0,
    Qf = e,
    ob = t,
    qn = !1,
    No.play(e, Math.max(0, (k?.serverNow() || Date.now()) - t)),
    n && (k?.sendHouseCmd(`::radio:on:${e}:${t}`),
    Ye("radio"),
    g("\u{1F4FB} Abuja FM is on.", 2500)))
}
function Br(e) {
    Bo && (Bo = !1,
    rn || No.stop(),
    e && g(e, 3500))
}
var qd = new Set;
setInterval( () => {
    if (ut && w !== "home" && wa(),
    Bo && w !== "home" && Br(),
    w !== "home" || F || !k) {
        qd = new Set;
        return
    }
    let e = k.housePeople()
      , t = e.some(n => !qd.has(n));
    qd = new Set(e),
    t && setTimeout( () => {
        w !== "home" || F || (k.sendHouseCmd(`::power:${qt.light ? 1 : 0}`),
        ut && k.sendHouseCmd(`::tv:${ut}`),
        Bo && k.sendHouseCmd(`::radio:on:${Qf}:${ob}`))
    }
    , 1500)
}
, 1e3);
var qt = {
    light: !0,
    until: 0,
    backup: null
}
  , Yh = 0
  , Vc = !0
  , fb = () => F ? Vc : qt.light
  , hl = () => fb() || !!qt.backup;
function pb() {
    let e = ut ? "the TV" : Bo ? "the radio" : ""
      , t = F ? `@${F.name}'s` : "Your"
      , n = qt.backup === "gen" ? "gen" : "solar";
    if (fb())
        g("Up NEPA! Light is back.", 4e3);
    else if (qt.backup)
        g(`NEPA took light. ${t} ${n} took over${e ? `, so ${e} stays on` : ""}.${!F && qt.backup === "gen" ? " I better pass my neighbour!" : ""}`, 5e3);
    else {
        let o = e;
        wa(),
        Br(),
        g(`NEPA don take light!${o ? ` ${o[0].toUpperCase() + o.slice(1)} went off.` : ""}${F ? "" : " Buy a generator or solar (My house)."}`, 5e3)
    }
}
function mb(e) {
    qt.backup = e.includes("solar") ? "solar" : e.includes("gen") ? "gen" : null,
    Vc = !0,
    qt.until || (qt.light = Math.random() < .7,
    qt.until = Date.now() + (qt.light ? 12e4 + Math.random() * 24e4 : 6e4 + Math.random() * 12e4)),
    clearInterval(Yh),
    Yh = setInterval(qg, 2e3),
    qg()
}
function qg() {
    if (w !== "home") {
        clearInterval(Yh);
        return
    }
    !F && Date.now() > qt.until && (qt.light = !qt.light,
    qt.until = Date.now() + (qt.light ? 12e4 + Math.random() * 24e4 : 6e4 + Math.random() * 12e4),
    k?.sendHouseCmd(`::power:${qt.light ? 1 : 0}`),
    pb());
    let e = hl()
      , t = Io === "night" || Io === "evening";
    su.intensity = t ? e ? 16 : .6 : 0,
    me.setNight(t && e ? !0 : t),
    Qh.intensity = t ? e ? .6 : .22 : 1.35
}
var rr = e => (m?.player.wardrobe || []).includes(e);
function Uv() {
    if (!m)
        return ne("shop at the boutique");
    R("Zuma Boutique", `Buy once, wear any time (Menu \u2192 Wardrobe). You have ${y(A)}.`, Object.entries(Aa).map( ([e,t]) => ({
        text: t.name,
        small: rr(e) ? "You own this" : t.text,
        right: rr(e) ? Jc(e) ? "Take off" : "Wear" : y(t.price),
        disabled: !rr(e) && t.price > A,
        onClick: () => rr(e) ? r0(e) : Vv(e)
    })))
}
function i0() {
    if (re(),
    !m)
        return ne("have a wardrobe");
    let e = Object.entries(Aa).filter( ([t]) => rr(t));
    if (!e.length)
        return R("Wardrobe", "Nothing here yet. Buy fabrics, shades, caps and gold chains at Zuma Boutique.", [...Wn.filter(t => t.kind === "boutique").map(t => ({
            text: t.name,
            small: "Fabrics and accessories",
            right: "Go",
            onClick: () => {
                E(),
                cn(t.name, t.x, t.z)
            }
        }))]);
    R("Wardrobe", "Tap to wear or take off.", e.map( ([t,n]) => ({
        text: n.name,
        small: Jc(t) ? "Wearing" : "",
        right: Jc(t) ? "Take off" : "Wear",
        onClick: () => r0(t)
    })))
}
var Jc = e => {
    let t = m?.player.look || {};
    return Aa[e].kind === "fabric" ? t.fabric === e : (t.acc || []).includes(e)
}
;
async function Vv(e) {
    E();
    let t = Aa[e]
      , n = A - t.price
      , o = [...m.player.wardrobe || [], e];
    try {
        let a = Xt(W);
        a.update(ee(W, "players", m.uid), {
            money: n,
            wardrobe: o,
            updatedAt: ie()
        }),
        a.set(ee(mt(W, "players", m.uid, "transactions")), {
            amount: -t.price,
            reason: "boutique",
            label: `${t.name} \xB7 Zuma Boutique`,
            balance: n,
            createdAt: ie()
        }),
        await a.commit(),
        A = n,
        m.player.money = n,
        m.player.wardrobe = o,
        _e(),
        g(`You bought ${t.name.toLowerCase()}!`),
        r0(e)
    } catch (a) {
        console.warn("boutique", a.code || a),
        g("Couldn't buy that. Try again.")
    }
}
async function r0(e) {
    E();
    let t = Aa[e]
      , n = {
        ...m.player.look
    };
    if (t.kind === "fabric")
        if (n.fabric === e) {
            let o = "plain";
            try {
                o = localStorage.getItem("al-fabric-" + m.uid) || "plain"
            } catch {}
            n.fabric = nd.includes(o) ? "plain" : o
        } else {
            if (!nd.includes(n.fabric))
                try {
                    localStorage.setItem("al-fabric-" + m.uid, n.fabric)
                } catch {}
            n.fabric = e
        }
    else {
        let o = new Set(n.acc || []);
        o.has(e) ? o.delete(e) : o.add(e),
        o.size ? n.acc = [...o] : delete n.acc
    }
    try {
        await mn(ee(W, "players", m.uid), {
            look: n,
            updatedAt: ie()
        }),
        m.player.look = n,
        Xh({
            ...Qa,
            ...n
        }),
        k?.publishProfile(),
        g(Jc(e) ? `Wearing your ${t.name.toLowerCase()}.` : `Took off your ${t.name.toLowerCase()}.`)
    } catch (o) {
        console.warn("wear", o.code || o),
        g("Couldn't change that. Try again.")
    }
}
var Se = null
  , ua = 0
  , Ud = 0
  , Ug = !1
  , Bt = null
  , Vg = 0
  , Vd = 0
  , dc = 0
  , Xi = 0
  , go = () => !!m?.player.injury?.at
  , Hr = () => id[m?.player.injury?.kind] || null;
function Jv() {
    let e = Tu(dn.near[0], dn.near[1], [[0, -6], [-11, -12], [11, -12], [-11, -1], [11, -1], [0, 3]]);
    if (!e)
        return;
    let t = Oe(Fp());
    t.position.set(e.x, 0, e.z),
    t.rotation.y = e.h,
    J.add(t),
    qa(e.x, e.z, e.h, -11, 11, -12, 2.8),
    ao("Hospital", e.x, 14, e.z),
    Se = {
        x: e.x + Math.sin(e.h) * 5,
        z: e.z + Math.cos(e.h) * 5,
        h: e.h
    }
}
async function gb(e) {
    !m || w !== "city" || P?.driving || B || te || Be || go() || performance.now() < ua || (ua = performance.now() + 2500,
    Le && In(),
    ce = null,
    de.visible = !1,
    zn(!1),
    k?.sendNow(),
    g(`${e} knocked you down! You'll be OK in a minute.`, 4e3),
    await s0(null, "You got hurt, so your shift ended."))
}
async function s0(e, t) {
    let n = Q();
    m.player.injury = {
        at: {
            toMillis: () => n
        },
        ...e ? {
            kind: e
        } : {}
    },
    Lu();
    try {
        await mn(ee(W, "players", m.uid), {
            injury: {
                at: ie(),
                ...e ? {
                    kind: e
                } : {}
            },
            updatedAt: ie()
        })
    } catch (o) {
        console.warn("injury", o.code || o)
    }
    xt && rl?.(t)
}
function Kv(e) {
    if (!m || w === "cell" || (Vg += e,
    Vd -= e,
    Vd > 0))
        return;
    Vd = 5;
    let t = vr(Q())
      , n = "al-sick-" + m.uid
      , o = "";
    try {
        o = localStorage.getItem(n) || ""
    } catch {}
    if (o === String(t))
        return;
    let a = Dp(m.uid, t);
    if (!(!a || Vg < a.afterMin * 60) && !(Be || te || B || P?.driving || Bt)) {
        try {
            localStorage.setItem(n, String(t))
        } catch {}
        go() || (g(`You're not feeling well\u2026 it's ${id[a.kind].name.toLowerCase()}.`, 4e3),
        s0(a.kind, "You're sick, so your shift ended."),
        setTimeout(el, 2e3))
    }
}
var _o = !1
  , l0 = 0
  , Rs = () => m?.player.injury?.kind === "faint"
  , yb = () => `al-up-${m?.uid}-${m?.player.injury?.at?.toMillis?.() || 0}`;
function Xv() {
    if (!m)
        return;
    let e = m.player.injury;
    if (Nt() > 5 && (_o && zr(Rs() ? void 0 : "You've eaten. You get back up."),
    Rs() && !e.clearing))
        return Qv(e);
    if (w === "cell" || Rs() || _o || Date.now() < l0 || Nt() >= 1) {
        dc = 0,
        Xi = 0;
        return
    }
    let t = Date.now();
    dc || (dc = t);
    let n = jp - (t - dc);
    Xi ? Xi === 1 && n < 2e4 && (Xi = 2,
    g("You're about to faint\u2026 eat now!", 5e3)) : (Xi = 1,
    g("You're starving! Eat something within 1 minute or you'll faint.", 6e3)),
    !(n > 0 || Be || B || P?.driving || Bt) && (dc = 0,
    Xi = 0,
    Zv())
}
function Zv() {
    wb(),
    g("You fainted from hunger!", 4e3),
    go() ? xt && rl?.("You fainted, so your shift ended.") : s0("faint", "You fainted, so your shift ended."),
    setTimeout(fl, 2500)
}
function wb() {
    _o = !0,
    ua = 1 / 0,
    Le && In(),
    ce = null,
    de.visible = !1,
    zn(!1),
    St = !1,
    E(),
    k?.sendNow()
}
function zr(e) {
    if (_o) {
        _o = !1,
        ua = 0,
        l0 = Date.now() + 3 * 6e4,
        k?.sendNow();
        try {
            localStorage.setItem(yb(), "1")
        } catch {}
        e && g(e, 5e3)
    }
}
function fl() {
    if (!_o)
        return;
    let e = ml();
    R("You fainted", `You're lying on the ground, too weak to stand. Get something to eat, or get to the hospital. You have ${y(A)}.`, [{
        text: "Get something to eat",
        small: "Get up slowly and find food near you. Eating brings you round.",
        right: "Food",
        onClick: () => {
            E(),
            zr("You get up slowly. Find food, fast."),
            ga()
        }
    }, ...e ? [{
        text: "Call an ambulance",
        small: "Comes to you, takes you to General Hospital and treats you",
        right: Wa(na("ambulance")),
        disabled: na("ambulance") > A || w !== "city",
        onClick: () => {
            E(),
            xb()
        }
    }] : [], {
        text: "Go to the hospital",
        small: c0() ? `Emergency ward: ${Wa(vi())}` : `Treatment there costs ${Wa(na("treat"))}`,
        right: "Go",
        onClick: () => {
            E(),
            zr(),
            Se && cn(dn.name, Se.x, Se.z)
        }
    }])
}
function Qv(e) {
    e.clearing = !0,
    mn(ee(W, "players", m.uid), {
        injury: Wr(),
        updatedAt: ie()
    }).then( () => {
        gl(),
        zr(),
        g("You feel better now that you've eaten.", 4e3)
    }
    ).catch( () => setTimeout( () => {
        e.clearing = !1
    }
    , 3e4))
}
function eC() {
    if (!Rs())
        return;
    let e = !1;
    try {
        e = !!localStorage.getItem(yb())
    } catch {}
    e || (wb(),
    setTimeout(fl, 1500))
}
function Lu() {
    h("#injured").hidden = !0
}
var c0 = () => !ml() || na("treat") > A
  , u0 = () => ts(H, "health", Q())
  , bb = e => {
    let t = u0();
    return t ? gd(e, t) : e
}
  , vi = () => bb(Math.min(Zr, A))
  , Wa = e => e ? y(e) : "Free";
function tC(e) {
    if (Ud -= e,
    Ud > 0)
        return;
    Ud = 1,
    Lu(),
    aC();
    let t = !!Se && w === "city" && !P?.driving && !B && Math.hypot(Se.x - x.x, Se.z - x.z) < 15;
    t !== Ug && (Ug = t,
    h("#treat-btn").hidden = !t,
    t && (h("#treat-btn").textContent = `Enter ${dn.name}`))
}
var pl = () => jt(Kr)
  , na = e => bb(pl()?.menu[e] || (e === "treat" ? _p : Gp))
  , ml = () => Ct(pl(), Q());
function el() {
    if (!m)
        return ne("use the hospital");
    if (_o)
        return fl();
    if (!go())
        return R("Health", "You're well. If a car knocks you down or you fall sick, get treated at General Hospital or call an ambulance here.", Se ? [{
            text: dn.name,
            small: w === "city" ? `${fa(Math.hypot(Se.x - x.x, Se.z - x.z))} km away` : "",
            right: "Go",
            onClick: () => {
                E(),
                cn(dn.name, Se.x, Se.z)
            }
        }] : []);
    let e = Hr()
      , t = pl()
      , n = ml()
      , o = c0()
      , a = t ? n ? o ? " You can't afford the normal fee, but the emergency ward will still treat you." : "" : ` General Hospital is closed now (open ${ai(t.hrs)}), but its emergency ward is open.` : " General Hospital has no owner, so only its emergency ward is open.";
    R(e ? e.title || `You have ${e.name.toLowerCase()}` : "You're injured", `${e ? e.feel + " " : ""}You walk slowly and can't work until you're treated. Resting won't fix it. You have ${y(A)}.${a}`, [...n ? [{
        text: "Call an ambulance",
        small: `Comes to you and takes you to hospital. Treatment included. Run by @${t.ownerName}.`,
        right: Wa(na("ambulance")),
        disabled: na("ambulance") > A || w !== "city",
        onClick: () => {
            E(),
            xb()
        }
    }] : [], {
        text: "Go to the hospital",
        small: o ? `Emergency ward: ${Wa(vi())}${vi() && vi() < Zr ? " (all you have)" : ""}` : `Treatment there costs ${Wa(na("treat"))}.`,
        right: "Go",
        onClick: () => {
            E(),
            Se && cn(dn.name, Se.x, Se.z)
        }
    }, ...t ? [] : [{
        text: "Own General Hospital",
        small: `${y(Tt)} \xB7 set the fees, hire nurses`,
        right: y(Tt),
        onClick: () => Un("hospital")
    }]])
}
function xb() {
    if (Bt || !U)
        return;
    if (!ml())
        return g("General Hospital is closed, so there's no ambulance. Go to its emergency ward.");
    let e = U.nearest(x.x, x.z)
      , t = e;
    for (let a = 0; a < 30; a++) {
        let i = Math.random() * Math.PI * 2
          , r = U.nearest(x.x + Math.cos(i) * 150, x.z + Math.sin(i) * 150);
        if (r >= 0 && r !== e) {
            t = r;
            break
        }
    }
    let n = gn(U, t, e);
    if (!n || n.length < 2)
        return g("The ambulance can't reach you here. Walk to a road and call again.");
    let o = Oe(Yp());
    J.add(o),
    Bt = {
        route: xa(n),
        s: 0,
        mesh: o
    },
    g("Ambulance on the way. Stay where you are.", 3500)
}
async function nC(e) {
    if (!Bt || Bt.arrived)
        return;
    Bt.s = Math.min(Bt.route.total, Bt.s + 40 * e);
    let t = Jn(Bt.route, Bt.s);
    if (Bt.mesh.position.set(t.x, 0, t.z),
    Bt.mesh.rotation.y = t.h,
    Bt.s < Bt.route.total)
        return;
    Bt.arrived = !0;
    let n = await vb("ambulance", "Ambulance + treatment");
    if (J.remove(Bt.mesh),
    Bt = null,
    !n) {
        _o && setTimeout(fl, 1500);
        return
    }
    await Fe("Ambulance to General Hospital\u2026", 1200),
    Se && (x.set(Se.x + Math.sin(Se.h) * 3, 0, Se.z + Math.cos(Se.h) * 3),
    j = Se.h),
    Eb( () => Mb("You've been treated. Take care out there!"))
}
function gl() {
    delete m.player.injury,
    Lu(),
    l0 = Date.now() + 3 * 6e4,
    zr()
}
var oC = 60 * 1e3
  , d0 = () => go() && !m.player.injury.kind
  , kb = () => d0() ? Math.max(0, oC - (Q() - (m.player.injury.at?.toMillis?.() || Q()))) : 0
  , Jd = !1;
async function aC() {
    if (!(Jd || !d0() || kb() > 0)) {
        Jd = !0;
        try {
            let e = await $e(Te).currentUser.getIdToken();
            (await (await fetch("/api/perks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + e
                },
                body: JSON.stringify({
                    action: "heal"
                })
            })).json().catch( () => ({}))).healed && (gl(),
            g("You feel better now. \u{1FA79}", 3500))
        } catch {}
        setTimeout( () => {
            Jd = !1
        }
        , 1e4)
    }
}
async function vb(e, t) {
    let n = pl();
    if (n && (n = await An(n.id) || n),
    !n || !Ct(n, Q()))
        return g("General Hospital is closed. Go to its emergency ward."),
        !1;
    if (u0() && await Cb({
        bid: n.id,
        item: e
    }))
        return !0;
    let o = n.menu[e];
    if (o > A)
        return g("Not enough money for treatment."),
        !1;
    let a = !!(await Xn(ee(W, "players", m.uid)).catch( () => null))?.data()?.injury;
    return await Hi(n, e, o, "hospital", `${t} \xB7 ${n.name}`, void 0, a ? {
        injury: Wr()
    } : void 0) ? (gl(),
    !0) : !1
}
async function Cb(e) {
    let t = await wu({
        kind: "health",
        ...e
    });
    return t.ok ? (gl(),
    g(`${t.pay ? `Treated for ${y(t.pay)}` : "Free treatment"}, thanks to Minister @${H.deeds.health.by}!`, 4e3),
    !0) : (g(`${t.error || "The healthcare deal didn't apply"}, so it's the normal fee.`, 4e3),
    !1)
}
async function iC() {
    if (u0() && await Cb({}))
        return !0;
    let e = Math.min(Zr, A)
      , t = A;
    A -= e,
    _e();
    try {
        let n = Xt(W);
        return n.update(ee(W, "players", m.uid), {
            money: A,
            injury: Wr(),
            updatedAt: ie()
        }),
        e > 0 && n.set(ee(mt(W, "players", m.uid, "transactions")), {
            amount: -e,
            reason: "hospital",
            label: "Emergency ward \xB7 General Hospital",
            balance: A,
            createdAt: ie()
        }),
        await n.commit(),
        m.player.money = A,
        gl(),
        !0
    } catch (n) {
        return console.warn("emergency ward", n.code || n),
        A = t,
        _e(),
        g("Couldn't pay the emergency ward. Try again."),
        !1
    }
}
h("#treat-btn").addEventListener("click", () => Eb());
var oa = 0;
function Eb(e) {
    Se && (_o && zr(),
    co("hospital", dn.name, "hospital", {
        x: Se.x,
        z: Se.z
    }, e || Tb))
}
function Tb() {
    if (!m)
        return ne("use the hospital");
    let e = pl()
      , t = ml()
      , n = c0()
      , o = e ? t ? `Run by @${e.ownerName}.` : `Closed now (open ${ai(e.hrs)}), but the emergency ward is open.` : "No owner yet, so only the emergency ward is open.";
    if (!go())
        return R(dn.name, `You're well: nothing to treat. ${o} Sick or hurt people come here, pay, and rest in a bed while a nurse treats them.`, [...e ? [] : [{
            text: "Own General Hospital",
            small: `${y(Tt)} \xB7 set the fees, hire nurses`,
            right: y(Tt),
            onClick: () => Un("hospital")
        }], {
            text: "OK",
            main: !0,
            onClick: E
        }]);
    let a = Hr();
    R(a ? a.title || `You have ${a.name.toLowerCase()}` : "You're injured", `${a ? a.feel + " " : ""}${o} You'll rest in a bed while a nurse treats you. You have ${y(A)}.`, [n ? {
        text: "Emergency ward",
        small: vi() < Zr && vi() ? "All you have" : "Nobody is turned away",
        right: Wa(vi()),
        onClick: () => Jg(!0)
    } : {
        text: "Get treated",
        small: `A bed, a nurse and medicine \xB7 @${e.ownerName}`,
        right: Wa(na("treat")),
        disabled: na("treat") > A,
        onClick: () => Jg(!1)
    }])
}
async function Jg(e) {
    E();
    let t = !!Hr();
    await (e ? iC() : vb("treat", "Hospital treatment")) && Mb(t ? "The doctor sorted you out. You feel better now." : "You've been treated. Take care out there!")
}
function Mb(e) {
    if (w !== "venue" || ye?.key !== "hospital" || !ye.room.beds)
        return g(e, 4500);
    let t = ye
      , n = t.room.beds[[0, 1, 2, 3, 4, 6, 7][Math.floor(Math.random() * 7)]];
    E(),
    zn(!1),
    x.set(t.at[0] + n.x, 0, t.at[1] + n.z),
    j = n.h,
    ce = null,
    de.visible = !1,
    oa = ua = performance.now() + 1e4,
    k?.sendNow(),
    g("A nurse is treating you. Lie still\u2026", 4e3),
    setTimeout( () => {
        ye !== t || !oa || (oa = 0,
        ua = 0,
        x.set(t.at[0] + n.out[0], 0, t.at[1] + n.out[1]),
        k?.sendNow(),
        g(e, 4500))
    }
    , 1e4)
}
h("#injured").addEventListener("click", el);
var Be = null
  , rC = 3e3
  , sC = (e, t, n) => {
    let o = 0;
    for (let a of e + t + n)
        o = o * 31 + a.charCodeAt(0) | 0;
    return (o >>> 0) % 2 ? e : t
}
;
function lC(e, t) {
    let n = k?.stateOf(e);
    if (!n)
        return g(`Can't find @${t} right now.`);
    let o = Math.hypot(n.x - x.x, n.z - x.z);
    if (w === "street" && o < 300) {
        ce = new Z(n.x,0,n.z),
        de.position.set(n.x, .06, n.z),
        de.visible = !0;
        return
    }
    if (w !== "city")
        return g(w === "street" ? `@${t} isn't on your street. Go into town to find them.` : "Go outside first.");
    if (o < 300) {
        ce = new Z(n.x,0,n.z),
        de.position.set(n.x, .5, n.z),
        de.scale.setScalar(1),
        de.visible = !0;
        return
    }
    let a = gn(U, U.nearest(x.x, x.z), U.nearest(n.x, n.z));
    f0({
        name: "@" + t
    }, a || [[x.x, x.z], [n.x, n.z]])
}
var $o = null;
function cC(e, t, n) {
    let o = k?.stateOf(e);
    if (!o)
        return g(`Can't find @${t} right now.`);
    if (Math.hypot(o.x - x.x, o.z - x.z) < 7)
        return $o = null,
        n();
    if (Be || te || B || P?.driving || w === "cell")
        return g("You can't do that right now.");
    $o = {
        uid: e,
        name: t,
        then: n,
        until: Date.now() + 9e4,
        t: 0,
        tgt: null
    },
    w === "club" ? $b(o) : (lC(e, t),
    $o.tgt = ce),
    g(`Going to @${t}\u2026`, 2e3)
}
function $b(e) {
    ce = new Z(e.x,0,e.z),
    de.position.set(e.x, w === "city" ? .5 : .06, e.z),
    de.visible = !0,
    $o && ($o.tgt = ce)
}
function uC(e) {
    let t = $o;
    if (!t)
        return;
    if (Date.now() > t.until || Be || te || B || P?.driving || w === "cell" || w === "home") {
        $o = null;
        return
    }
    if (ce && t.tgt && ce !== t.tgt) {
        $o = null;
        return
    }
    if (t.t -= e,
    t.t > 0)
        return;
    t.t = .4;
    let n = k?.stateOf(t.uid);
    if (!n)
        return $o = null,
        g(`@${t.name} has gone.`);
    let o = Math.hypot(n.x - x.x, n.z - x.z);
    if (o < 7)
        return $o = null,
        Le && In(),
        ce = null,
        de.visible = !1,
        t.then();
    !Le && o < 300 && (!ce || Math.hypot(ce.x - n.x, ce.z - n.z) > 3) && $b(n)
}
async function dC(e, t) {
    if (!m)
        return ne("fight");
    if (Be || te || B || P?.driving || w !== "city" && w !== "street")
        return g("You can't fight right now.");
    let n = k?.stateOf(e);
    if (!n || Math.hypot(n.x - x.x, n.z - x.z) > 8)
        return g(`Get closer to @${t} first.`);
    let o = await k.attack(e);
    if (!o)
        return g("Couldn't start the fight. Try again in a minute.");
    Ye("fight"),
    j = Math.atan2(n.x - x.x, n.z - x.z),
    Be = {
        with: e,
        name: t,
        role: "attacker",
        back: !0,
        t0: performance.now(),
        t: String(o)
    },
    zn(!1),
    Le && In(),
    g(`You're fighting @${t}!`, 2500),
    k?.sendNow()
}
var Kg = !1;
function Sb() {
    Kg || !k || !m || (Kg = !0,
    k.watchFights(e => {
        let t = "al-fights-" + m.uid
          , n = 0;
        try {
            n = +(localStorage.getItem(t) || 0)
        } catch {}
        let o = e.filter(a => a.t > n && k.serverNow() - a.t < 15e3).sort( (a, i) => i.t - a.t)[0];
        if (o) {
            try {
                localStorage.setItem(t, String(o.t))
            } catch {}
            Be || w !== "city" && w !== "home" && w !== "street" || k.profileOf(o.uid).then(a => {
                let i = a?.username || "someone"
                  , r = k.stateOf(o.uid);
                r && (j = Math.atan2(r.x - x.x, r.z - x.z)),
                Be = {
                    with: o.uid,
                    name: i,
                    role: "defender",
                    back: !1,
                    t0: performance.now(),
                    t: String(o.t)
                },
                Le && In(),
                zn(!1),
                Tn(`@${i} is attacking you!`, [["Fight back", "fightback"], ["Run away", "runaway"], ["Report to police", "report"]]),
                h("#cop .cop-who").textContent = "Fight!"
            }
            )
        }
    }
    ))
}
function hC(e) {
    if (Be.done || performance.now() - Be.t0 < rC)
        return;
    Be.done = !0,
    Ya(),
    h("#cop .cop-who").textContent = "Police officer";
    let t = Be
      , n = m.uid
      , o = t.role === "attacker" ? n : t.with
      , a = t.role === "attacker" ? t.with : n
      , i = sC(o, a, t.t) === n;
    g(i ? `You knocked @${t.name} down!` : `@${t.name} knocked you down. Ouch.`, 2500),
    i || (p0(15),
    le && (le.group.rotation.z = 1.2)),
    setTimeout( () => {
        le && (le.group.rotation.z = 0);
        let r = It?.summon(x);
        r && (r.ch.group.position.set(x.x + 3, 0, x.z + 2),
        r.ch.group.rotation.y = Math.atan2(x.x - r.ch.group.position.x, x.z - r.ch.group.position.z)),
        Be = null,
        k?.sendNow(),
        t.selfDefence ? (Ws(t.theftId, t.name),
        Tn(`Police! We'll take it from here. @${t.name} is going to the station for stealing.`, [["Thank you, officer", "ok"]]),
        te = {
            officer: r,
            stage: "talk",
            why: "fight",
            qs: [],
            step: 0,
            rude: 0
        }) : t.back ? (te = {
            officer: r,
            stage: "talk",
            why: "fight",
            qs: [],
            step: 0,
            rude: 0
        },
        Tn("Police! Fighting in public? You're under arrest.", []),
        setTimeout( () => Fs("fight"), 2200)) : (Tn(`Police! We saw everything. @${t.name} is going to the station. You can go.`, [["Thank you, officer", "ok"]]),
        te = {
            officer: r,
            stage: "talk",
            why: "fight",
            qs: [],
            step: 0,
            rude: 0
        })
    }
    , 1500 + Math.random() * 1500)
}
var cs = !1;
async function fC(e, t) {
    if (!m)
        return ne("steal");
    if (cs || Be || te || B || P?.driving || w !== "city" && w !== "street")
        return g("You can't do that right now.");
    let n = k?.stateOf(e);
    if (!n || Math.hypot(n.x - x.x, n.z - x.z) > 8)
        return g(`Get closer to @${t} first.`);
    cs = !0,
    j = Math.atan2(n.x - x.x, n.z - x.z),
    zn(!1),
    Le && In();
    let o;
    try {
        let a = await $e(Te).currentUser.getIdToken()
          , i = await fetch("/api/steal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + a
            },
            body: JSON.stringify({
                action: "pickpocket",
                target: e
            })
        });
        if (o = await i.json().catch( () => ({})),
        !i.ok)
            return cs = !1,
            g(o.error || "Couldn't do that. Try again.", 4e3)
    } catch {
        return cs = !1,
        g("Network problem. Try again.")
    }
    Ye("steal"),
    g(`You slip your hand into @${t}'s pocket\u2026`, 1800),
    setTimeout( () => {
        cs = !1,
        A = o.money,
        m.player.money = A,
        _e(),
        R(`You took ${y(o.gain)}`, `20% of @${t}'s money (at most \u20A6500,000) is now in your wallet. They've been told: if they report you, you'll have to give it back or go to jail.`, [{
            text: "OK",
            main: !0,
            onClick: E
        }])
    }
    , 1800)
}
var Ab = 100
  , Rb = 2e5
  , Kd = new Map;
function pC(e, t) {
    if (!m || !k)
        return ne("beg");
    let n = document.createElement("div");
    n.className = "send-money",
    n.innerHTML = `<input type="number" inputmode="numeric" min="${Ab}" max="${Rb}" step="100" placeholder="Other amount (\u20A6100 \u2013 \u20A6200,000)" />`;
    let o = n.querySelector("input");
    o.addEventListener("keydown", i => {
        i.stopPropagation(),
        i.key === "Enter" && +o.value && Xd(e, t, Math.floor(+o.value))
    }
    ),
    o.addEventListener("keyup", i => i.stopPropagation()),
    R(`Beg @${t}`, "How much are you asking for? They decide if they give it.", [500, 1e3, 2e3, 5e3, 1e4].map(i => ({
        text: y(i),
        right: "Ask",
        onClick: () => Xd(e, t, i)
    }))),
    h("#act-list").append(n);
    let a = document.createElement("button");
    a.type = "button",
    a.className = "w-main act-btn",
    a.textContent = "Ask for this amount",
    a.onclick = () => +o.value && Xd(e, t, Math.floor(+o.value)),
    h("#act-list").append(a)
}
async function Xd(e, t, n) {
    if (!(n >= Ab && n <= Rb))
        return g("Ask for between \u20A6100 and \u20A6200,000.");
    if (Date.now() - (Kd.get(e) || 0) < 6e4)
        return g(`Give @${t} a moment to answer.`);
    if (E(),
    Kd.set(e, Date.now()),
    !(await k.sendDM(e, `::beg:${n}`)).ok)
        return Kd.delete(e),
        g("Couldn't ask. Try again.");
    Ye("beg"),
    k.say(m.uid, `Abeg, help me with ${y(n)} \u{1F64F}`),
    g(`You begged @${t} for ${y(n)}. Waiting to see if they give\u2026`, 4e3)
}
var et = null
  , oo = null
  , gi = null
  , Zd = 0;
function mC() {
    let e = n => n[Math.floor(Math.random() * n.length)]
      , t = Object.keys(bo);
    et = Hp({
        scene: J,
        graph: U,
        findPath: gn,
        lane: xa,
        along: Jn,
        count: en ? 8 : 20,
        models: {
            car: () => {
                let n = e(t);
                return Oe(Rl(n, e(bo[n].colours)))
            }
            ,
            taxi: () => {
                let n = Oe(ji());
                return yu(n),
                n
            }
            ,
            keke: () => Oe(Hl())
        },
        onArrive: xC,
        onHit: () => gb("A driver"),
        onHoot: gC,
        inView: wC
    })
}
var mi = null;
function gC() {
    if (!(!Ga || !js || document.hidden))
        try {
            mi || (mi = new (window.AudioContext || window.webkitAudioContext)),
            mi.resume().catch( () => {}
            );
            let e = mi.currentTime;
            for (let t of [0, .22]) {
                let n = e + t
                  , o = mi.createGain()
                  , a = mi.createBiquadFilter();
                a.type = "lowpass",
                a.frequency.value = 1800,
                a.connect(o),
                o.connect(mi.destination),
                o.gain.setValueAtTime(1e-4, n),
                o.gain.exponentialRampToValueAtTime(.09, n + .02),
                o.gain.setValueAtTime(.09, n + .14),
                o.gain.exponentialRampToValueAtTime(1e-4, n + .18);
                for (let i of [392, 494]) {
                    let r = mi.createOscillator();
                    r.type = "square",
                    r.frequency.value = i,
                    r.connect(a),
                    r.start(n),
                    r.stop(n + .2)
                }
            }
        } catch {}
}
var Xg = new I0
  , yC = new Kt
  , Zg = new z0(new Z,5)
  , Qg = -1;
function wC(e, t) {
    return Qg !== wt.info.render.frame && (Qg = wt.info.render.frame,
    Xg.setFromProjectionMatrix(yC.multiplyMatrices(je.projectionMatrix, je.matrixWorldInverse))),
    Zg.center.set(e, 1, t),
    Xg.intersectsSphere(Zg)
}
var Kc = () => m && w === "city" && !B && !P?.driving && !Ne && !sn;
function bC(e) {
    if (Zd -= e,
    Zd > 0)
        return;
    Zd = .3;
    let t = h("#hail");
    if (oo) {
        let n = oo.pos;
        (!oo.hailed || !n || Math.hypot(n.x - x.x, n.z - x.z) > 140 || !Kc()) && (oo.hailed && et.cancelHail(oo),
        oo = null,
        g("The driver didn't stop. Try the next one."));
        return
    }
    if (gi = Kc() ? et.hailable(x) : null,
    gi && !ia(gi.v.kind === "keke" ? "keke" : "taxi") && (gi = null),
    !gi) {
        t.hidden = !0;
        return
    }
    t.hidden = !1,
    t.disabled = !1,
    t.innerHTML = xe("car", 20) + "<span></span>",
    t.lastChild.textContent = gi.v.kind === "keke" ? "Hail keke" : "Hail taxi"
}
function Hb(e) {
    if (!m)
        return ne("hail taxis");
    if (!Kc())
        return g(B ? "Finish your ride first." : "You can't hail right now.");
    let t = e ? et.hailable(x, e) : gi;
    if (!t)
        return g("Wait until it's coming towards you, then wave.");
    et.hail(t),
    oo = t.v;
    let n = h("#hail");
    n.disabled = !0,
    n.lastChild.textContent = t.v.kind === "keke" ? "Keke stopping\u2026" : "Taxi stopping\u2026"
}
function xC(e) {
    if (oo = null,
    h("#hail").hidden = !0,
    !Kc())
        return;
    et.release(e);
    let t = e.kind === "keke" ? "keke" : "taxi"
      , n = zi(t)
      , o = n[Math.floor(Math.random() * n.length)];
    if (!o)
        return et.reclaim?.(e),
        uf(t);
    g(`It's a ${o.name} ${t}. \u20A6${o.menu.km} per km.`, 3e3),
    B = {
        stage: "waiting",
        route: e.route,
        s: e.s,
        speed: 0,
        kind: t,
        mesh: e.mesh,
        trafficV: e,
        co: o
    },
    h("#taxi").hidden = !1,
    h("#taxi").disabled = !1,
    h("#taxi").textContent = `${xl(t)} here`,
    ha(t)
}
h("#hail").addEventListener("click", () => Hb(null));
var Le = null
  , Ec = 0;
h("#walk-btn").innerHTML = xe("footprints", 22);
h("#walk-btn").setAttribute("aria-label", "Transport");
h("#walk-btn").addEventListener("click", () => Zf());
function h0() {
    if (w === "venue" && un(),
    w === "home" || w === "street")
        return Nr();
    if (w === "club")
        return g("Leave the club first.");
    if (w === "cell")
        return g("You're locked up.");
    if (P?.driving)
        return g("You're driving. Get out of your car to walk.");
    if (!mo())
        return g("Finish your ride first.");
    if (!U)
        return g("The city is still loading\u2026");
    ha("trek")
}
function f0(e, t, n) {
    if (h("#sheet").hidden = !0,
    !t)
        return;
    let o = xa([[x.x, x.z], ...t], 6);
    Le = {
        route: o,
        s: 0,
        dest: e,
        then: n,
        from: 0
    },
    ce = null,
    de.visible = !1,
    Ec = 0,
    h("#trek").hidden = !1,
    g(`Trekking to ${e.name} \xB7 ${fa(o.total)} km. Tap Stop any time.`)
}
function kC(e) {
    let t = 40 * (Ef ? .6 : 1);
    Le.s = Math.min(Le.route.total, Le.s + t * e);
    let n = Jn(Le.route, Le.s);
    if (x.set(n.x, 0, n.z),
    j += Math.atan2(Math.sin(n.h - j), Math.cos(n.h - j)) * Math.min(1, e * 8),
    Ec -= e,
    Ec <= 0 && (Ec = .5,
    h("#trek").textContent = `Trekking \xB7 ${fa(Le.route.total - Le.s)} km left \xB7 Stop`),
    Le.s >= Le.route.total) {
        let o = Le.then
          , a = Le.dest;
        In(`You've arrived at ${Le.dest.name}.`),
        o?.(),
        db(a)
    }
}
function In(e) {
    Le && p0((Le.s - Le.from) / vC),
    Le = null,
    h("#trek").hidden = !0,
    e && g(e)
}
var vC = 250;
async function p0(e) {
    if (!m?.player.food || e < 1)
        return;
    let t = m.player.food
      , n = Math.max(0, Math.floor(Nt() - e - 1));
    try {
        let o = {
            level: n,
            at: ie()
        };
        t.last && (o.last = t.last),
        await mn(ee(W, "players", m.uid), {
            food: o,
            updatedAt: ie()
        });
        let a = Q();
        m.player.food = {
            ...o,
            at: {
                toMillis: () => a
            }
        },
        Ja()
    } catch (o) {
        console.warn("burn food", o.code || o)
    }
}
h("#trek").addEventListener("click", () => In("You stopped trekking."));
var nr = null
  , hc = null;
function m0(e, t) {
    if (ue && Math.hypot(e - Rt[0], t - Rt[1]) < 300)
        return ue;
    let n = Math.round((e - ei[0]) / ti)
      , o = Math.round((t - ei[1]) / ti);
    if (n < 0 || n >= 20 || o < 0 || Math.hypot(e - ei[0] - n * ti, t - ei[1] - o * ti) > 150)
        return null;
    if (!hc) {
        if (!al)
            return null;
        hc = new Map;
        let a = (i, r) => {
            r && hc.set(Dw(i), {
                x: r.x,
                z: r.z
            })
        }
        ;
        for (let i of Lt)
            Bn.some(r => r.id === i.id) && a("food:" + i.id, i);
        for (let i of Wn)
            a("shop:" + i.name, i);
        for (let[i,r] of Object.entries(ht))
            a("plot:" + i, r?.door);
        a("hospital", Se),
        a("church", nt),
        a("mosque", lt)
    }
    return hc.get(n + 20 * o) || null
}
st && (window.__map = {
    insideDoor: m0,
    crowdGroups: () => zb(),
    setCrowds: e => {
        zo = e
    }
    ,
    churchDoor: () => nt,
    clubDoor: () => ue
});
function zb() {
    if (!zo || !U)
        return [];
    let e = [];
    for (let[t,n] of Object.entries(zo)) {
        let[o,a] = t.split("_").map(s => +s * 100 + 50)
          , i = m0(o, a);
        if (i)
            o = i.x,
            a = i.z;
        else {
            let s = U.nearest(o, a);
            if (s < 0 || Math.hypot(U.nodes[s][0] - o, U.nodes[s][1] - a) > 300)
                continue
        }
        let r = e.find(s => Math.hypot(s.x - o, s.z - a) < 150);
        r ? (r.x = (r.x * r.n + o * n) / (r.n + n),
        r.z = (r.z * r.n + a * n) / (r.n + n),
        r.n += n) : e.push({
            x: o,
            z: a,
            n
        })
    }
    for (let t of e) {
        let n = Jt.map(o => [o, Math.hypot(o.x - t.x, o.z - t.z)]).sort( (o, a) => o[1] - a[1])[0];
        t.name = n && n[1] < 400 ? n[0].name : "the crowd"
    }
    return e
}
async function Ci() {
    if (!gr || !U)
        return g("The city is still loading\u2026");
    if (!nr) {
        let {createMap: e} = await import("./chunk-ARY4Y464.js")
          , t = [...Jt.map(n => ({
            name: n.name,
            x: n.x,
            z: n.z,
            kind: "landmark"
        })), ...tl.map(n => ({
            name: `Along \xB7 ${n.name}`,
            x: n.x,
            z: n.z,
            kind: "along",
            place: `${n.name} Along stop`
        })), ...Lt.filter(n => n.id !== "airport").map(n => ({
            name: n.name,
            x: n.x,
            z: n.z,
            kind: n.pantry ? "shop" : "food"
        })), ...ue ? [{
            name: ot,
            x: ue.x,
            z: ue.z,
            kind: "club"
        }] : [], ...Si.map(n => ({
            name: n.name,
            x: n.x,
            z: n.z,
            kind: "police"
        })), ...Se ? [{
            name: dn.name,
            x: Se.x,
            z: Se.z,
            kind: "hospital"
        }] : [], ...Wn.map(n => ({
            name: n.name,
            x: n.x,
            z: n.z,
            kind: "shop"
        })), ...He.filter(n => n.kind === "custom" && ht[n.plot]).map(n => ({
            name: n.name,
            x: ht[n.plot].door.x,
            z: ht[n.plot].door.z,
            kind: n.type === "food" ? "food" : "shop"
        })), ...Xr.filter(n => n.kind !== "campus" && Fn[n.id]).map(n => ({
            name: n.name,
            x: Fn[n.id].x,
            z: Fn[n.id].z,
            kind: "landmark"
        })), ...Xr.filter(n => n.kind === "campus" && Fn[n.id]).map(n => ({
            name: n.name,
            x: Fn[n.id].x,
            z: Fn[n.id].z,
            kind: "uni"
        }))];
        if (m) {
            let[n,o] = Kn(Re[m.player.home].at);
            t.push({
                name: `Home \xB7 ${Ze(m.player.home)}`,
                x: n,
                z: o,
                kind: "home"
            })
        }
        nr = e({
            world: gr,
            places: t,
            getMe: () => w === "city" ? {
                x: x.x,
                z: x.z,
                h: j
            } : null,
            onPick: n => {
                nr.close(),
                n.kind === "home" ? pa() : cn(n.place || n.name, n.x, n.z)
            }
            ,
            people: zb
        })
    }
    nr.open(),
    ln("map"),
    ou(),
    clearInterval(Ci.t),
    Ci.t = setInterval( () => {
        if (!nr.isOpen)
            return clearInterval(Ci.t);
        ou()
    }
    , 3e4)
}
function cn(e, t, n) {
    if (w === "venue" && un(),
    !mo())
        return g("Finish your ride first.");
    if (w === "club")
        return g("Leave the club first.");
    if (w === "cell")
        return g("You're locked up.");
    if (w === "city" && Math.hypot(t - x.x, n - x.z) < 60)
        return g(`You're already at ${e}.`);
    if (P?.driving && U) {
        let o = gn(U, U.nearest(x.x, x.z), U.nearest(t, n));
        if (o)
            return Nb({
                name: e,
                x: t,
                z: n
            }, o)
    }
    if (!m)
        return ne("travel around Abuja");
    rf(t, n, e)
}
var tl = []
  , Ka = {}
  , sn = null
  , Xc = null;
function yl(e) {
    let t = e.toLowerCase();
    return Jt.find(n => n.name.toLowerCase() === t) || Ro.find(n => n.name.toLowerCase().startsWith(t))
}
function CC() {
    let e = new Map;
    for (let[t,n] of Object.entries(Rm)) {
        let o = [];
        for (let r of n.stops) {
            let s = e.get(r);
            if (!s) {
                let l = yl(r)
                  , u = l ? U.nearest(l.x, l.z) : -1;
                if (u < 0)
                    continue;
                let[d,c] = U.nodes[u]
                  , p = [d + 8, c];
                e: for (let b = 4; b < 45; b += 1.5)
                    for (let $ = 0; $ < Math.PI * 2; $ += Math.PI / 8) {
                        let T = d + Math.cos($) * b
                          , M = c + Math.sin($) * b;
                        if (!vn(T, M) && !De(T, M) && !De(T + 2.5, M) && !De(T - 2.5, M)) {
                            p = [T, M];
                            break e
                        }
                    }
                s = {
                    name: r,
                    node: u,
                    x: p[0],
                    z: p[1],
                    routes: []
                };
                let f = Oe(Hm(r));
                f.position.set(s.x, 0, s.z),
                f.rotation.y = Math.atan2(d - s.x, c - s.z),
                J.add(f),
                e.set(r, s),
                tl.push(s)
            }
            s.routes.push({
                r: t,
                i: o.length
            }),
            o.push(s)
        }
        let a = []
          , i = [];
        o.forEach( (r, s) => {
            if (!s) {
                a.push(U.nodes[r.node]),
                i.push(0);
                return
            }
            let l = gn(U, o[s - 1].node, r.node) || [U.nodes[o[s - 1].node], U.nodes[r.node]];
            a.push(...l.slice(1)),
            i.push(a.length - 1)
        }
        ),
        Ka[t] = {
            ...n,
            stops: o,
            pts: a,
            at: i
        }
    }
}
function g0(e, t, n) {
    let o = Ka[e]
      , a = o.pts.slice(o.at[Math.min(t, n)], o.at[Math.max(t, n)] + 1);
    return n > t ? a : a.reverse()
}
function y0() {
    if (w === "venue" && un(),
    re(),
    !m)
        return ne("ride Along");
    if (w === "home" || w === "street")
        return g("Go into town first. Along stops are in the city.");
    let e = tl.find(n => Math.hypot(n.x - x.x, n.z - x.z) < Ed);
    if (e)
        return Ib(e);
    let t = [...tl].sort( (n, o) => Math.hypot(n.x - x.x, n.z - x.z) - Math.hypot(o.x - x.x, o.z - x.z));
    R("Along stops", `Shared cabs: \u20A6${tc}/km when all 4 seats are full. Walk to a green ALONG sign, or get there by taxi.`, t.map(n => {
        let o = Math.hypot(n.x - x.x, n.z - x.z);
        return {
            text: n.name,
            small: pr(o) + " away \xB7 " + n.routes.map(a => Ka[a.r].name).join(", "),
            right: "Go",
            onClick: () => {
                E(),
                rf(n.x, n.z, `${n.name} Along stop`)
            }
        }
    }
    ))
}
function Ib(e) {
    if (!m)
        return ne("ride Along");
    if (sn || B)
        return;
    let t = []
      , n = new Set;
    for (let {r: o, i: a} of e.routes)
        Ka[o].stops.forEach( (i, r) => {
            if (r === a || n.has(i.name))
                return;
            n.add(i.name);
            let s = Fo(g0(o, a, r))
              , l = Ki(s, bn)
              , u = Ki(s, 1);
            t.push({
                text: i.name,
                small: `${Ka[o].name} \xB7 ${fa(s)} km \xB7 alone \u20A6${u.toLocaleString()}` + (u > A ? " \xB7 not enough money" : ""),
                right: "\u20A6" + l.toLocaleString(),
                disabled: u > A,
                onClick: () => {
                    E(),
                    EC(e, o, a, r)
                }
            })
        }
        );
    R(`Along \xB7 ${e.name}`, `4 seats, \u20A6${tc}/km each when full. Leaves when full or ${Cd / 1e3} s after the first rider. Empty seats are shared by the riders on board.`, t)
}
async function EC(e, t, n, o) {
    if (!k)
        return g("Still connecting. Try again in a moment.");
    if (P?.driving)
        return g("Get out of your car first.");
    let a = `${t}_${o > n ? "f" : "b"}_${n}`
      , i = g0(t, n, o);
    if (i.length < 2)
        return g("That stop is too close. Walk there!");
    try {
        await k.alongJoin(a, o)
    } catch (u) {
        return console.warn("along", u.code || u),
        g("Couldn't join the queue. Try again.")
    }
    let r = xa(i)
      , s = Jn(r, 0)
      , l = Oe(ji());
    l.position.set(s.x, 0, s.z),
    l.rotation.y = s.h,
    J.add(l),
    sn = {
        st: e,
        r: t,
        i: n,
        j: o,
        qid: a,
        path: i,
        route: r,
        cab: l,
        m: Fo(i),
        entries: [],
        seatsKey: ""
    },
    sn.unsub = k.alongWatch(a, u => {
        sn?.qid === a && u && (sn.entries = u)
    }
    ),
    h("#along-btn").hidden = !0,
    h("#along-panel").hidden = !1,
    h("#along-title").textContent = `Along to ${Ka[t].stops[o].name}`,
    h("#along-msg").textContent = "Joining\u2026",
    h("#along-time").textContent = ""
}
function w0(e) {
    let t = sn;
    t && (sn = null,
    t.unsub?.(),
    k?.alongLeave(t.qid),
    J.remove(t.cab),
    h("#along-panel").hidden = !0,
    e && g(e, 4e3))
}
function TC() {
    let e = sn;
    if (!e || e.departing)
        return;
    if (Math.hypot(e.st.x - x.x, e.st.z - x.z) > Ed + 15)
        return w0("You walked away from the stop, so you left the Along queue.");
    let t = k.serverNow()
      , n = e.entries.filter(d => d.uid === m.uid || d.t > t - 5 * 6e4).sort( (d, c) => d.t - c.t || (d.uid < c.uid ? -1 : 1))
      , o = n.findIndex(d => d.uid === m.uid);
    if (o < 0)
        return;
    let a = Math.floor(o / bn) * bn
      , i = n.slice(a, a + bn)
      , r = i.map(d => d.uid).join();
    if (r !== e.seatsKey) {
        e.seatsKey = r;
        let d = h("#along-seats");
        d.innerHTML = "";
        for (let c = 0; c < bn; c++) {
            let p = i[c]
              , f = document.createElement("div");
            f.className = "seat" + (p ? p.uid === m.uid ? " me" : "" : " empty"),
            f.textContent = p ? p.uid === m.uid ? "You" : "\u2026" : "Empty seat",
            p && p.uid !== m.uid && k.profileOf(p.uid).then(b => {
                f.textContent = "@" + (b?.username || "rider")
            }
            ),
            d.appendChild(f)
        }
    }
    if (a > 0) {
        h("#along-time").textContent = "",
        h("#along-msg").textContent = "This cab is full. You're first for the next one.";
        return
    }
    let s = i[0].t + Cd
      , l = Math.max(0, Math.ceil((s - t) / 1e3))
      , u = Ki(e.m, i.length);
    h("#along-time").textContent = i.length >= bn ? "Leaving" : `0:${String(Math.min(59, l)).padStart(2, "0")}`,
    h("#along-msg").textContent = `${i.length} of ${bn} seats taken \xB7 your fare now \u20A6${u.toLocaleString()}` + (i.length < bn ? ` (\u20A6${Ki(e.m, bn).toLocaleString()} if full)` : ""),
    (i.length >= bn || t >= s) && MC(i)
}
async function MC(e) {
    let t = sn;
    if (!t || t.departing)
        return;
    t.departing = !0;
    let n = Ki(t.m, e.length)
      , o = Ka[t.r].stops[t.j];
    if (t.unsub?.(),
    k.alongLeave(t.qid),
    sn = null,
    h("#along-panel").hidden = !0,
    !await ol(n, "along", `Along to ${o.name}`)) {
        J.remove(t.cab),
        g("Payment failed, so you didn't board. Try again.");
        return
    }
    ln("ride");
    let a = [];
    for (let i of e)
        i.uid === m.uid || typeof i.to != "number" || (t.j > t.i ? i.to > t.i && i.to < t.j : i.to < t.i && i.to > t.j) && a.push({
            s: Fo(g0(t.r, t.i, i.to)),
            stop: Ka[t.r].stops[i.to].name,
            uid: i.uid
        });
    if (J.remove(t.cab),
    h("#along-btn").hidden = !0,
    Xc = null,
    Math.random() < (e.length > 1 ? .15 : .4))
        return $C(t, o);
    await Fe(e.length > 1 ? `Along to ${o.name} with ${e.length} riders\u2026 paid ${y(n)}` : `Along to ${o.name}\u2026 nobody else came, so you paid all 4 seats (${y(n)})`, 2e3),
    $0(t.path),
    g(`Welcome to ${o.name}`)
}
async function $C(e, t) {
    Ye("one_chance");
    let n = Math.min(A, 1e6, Math.max(Math.min(A, 2e3), Math.round(A * (.4 + Math.random() * .3) / 50) * 50));
    await Fe('\u{1F631} ONE CHANCE! The other "passengers" are robbers. They lock the doors\u2026', 3200),
    n > 0 && await ol(n, "along", "One chance: robbed in an Along"),
    await p0(45),
    $0(e.path),
    R("One chance \u{1F631}", `The "passengers" robbed you${n > 0 ? ` of ${y(n)}` : ""} and dumped you near ${t.name}. You're shaken and hungry.`, [{
        text: "Get something to eat",
        main: !0,
        onClick: () => {
            E(),
            ga()
        }
    }, {
        text: "Report to the police",
        small: "They'll take your statement\u2026 don't expect much",
        onClick: () => {
            E(),
            g(`The police took your statement. "We'll get back to you."`, 5e3)
        }
    }])
}
function Pb() {
    hv()
}
function SC() {
    let e = (w === "city" || w === "street" || w === "home" && !F) && !P?.driving && B?.stage !== "riding" && !Ne?.riding && !te && !Le;
    e === h("#walk-btn").hidden && (h("#walk-btn").hidden = !e)
}
h("#go-home").innerHTML = xe("home", 22);
h("#go-home").addEventListener("click", pa);
h("#along-leave").addEventListener("click", () => w0("You left the Along queue."));
h("#along-btn").addEventListener("click", () => Xc && Ib(Xc));
var Qd = 3
  , AC = 15
  , Ne = null
  , Hs = null
  , Zc = []
  , La = null;
function b0(e, t, n) {
    h("#lift-title").textContent = e,
    h("#lift-msg").textContent = t;
    let o = h("#lift-actions");
    o.innerHTML = "";
    for (let a of n) {
        let i = document.createElement("button");
        i.type = "button",
        i.className = a.cls || "quit",
        i.textContent = a.text,
        i.onclick = a.onClick,
        o.appendChild(i)
    }
    h("#lift-panel").hidden = !1
}
var zs = () => {
    h("#lift-panel").hidden = !0
}
;
function RC(e, t) {
    if (!m)
        return ne("get lifts");
    if (P?.driving)
        return g("You're driving your own car.");
    if (B || sn || Ne)
        return g("Finish what you're doing first.");
    let n = k.stateOf(e);
    if (!n?.c)
        return g(`@${t} isn't driving right now.`);
    if (Math.hypot(n.x - x.x, n.z - x.z) > AC)
        return g(`Walk up to @${t}'s car first.`);
    Ne = {
        driver: e,
        name: t,
        riding: !1,
        since: performance.now(),
        v: 0
    },
    Ne.unsub = k.liftAsk(e, (o, a) => {
        if (!(!Ne || Ne.driver !== e)) {
            if (a)
                return Jo(),
                g("Couldn't ask for a lift. Try again.");
            if (!o)
                return Ne.riding ? Jo(`@${t} parked. You got out.`) : Jo(`@${t} can't give you a lift.`);
            if (o.s === "no")
                return Jo(`@${t} said no this time.`);
            o.s === "ok" && !Ne.riding && HC()
        }
    }
    ),
    b0(`Asking @${t}\u2026`, "Waiting for them to accept. Stay close to the car.", [{
        text: "Cancel",
        onClick: () => Jo()
    }]),
    setTimeout( () => {
        Ne && Ne.driver === e && !Ne.riding && Jo(`@${t} didn't answer.`)
    }
    , 3e4)
}
function HC() {
    Ne.riding = !0,
    le && (le.group.visible = !1),
    ce = null,
    de.visible = !1,
    X.enabled = !1,
    h("#chat-btn").hidden = !0,
    h("#chat-input").blur(),
    b0(`Riding with @${Ne.name}`, "Sit back. Get out whenever you like.", [{
        text: "Get out",
        cls: "ok",
        onClick: () => Jo("You got out.")
    }]),
    g(`@${Ne.name} accepted. Welcome aboard!`),
    k?.sendNow()
}
function Jo(e) {
    let t = Ne;
    if (t) {
        if (Ne = null,
        t.unsub?.(),
        k?.liftLeave(t.driver),
        zs(),
        t.riding) {
            let n = j
              , o = Math.cos(n)
              , a = Math.sin(n)
              , i = [[-o * 2.4, a * 2.4], [o * 2.4, -a * 2.4], [-a * 4, -o * 4], [a * 4, o * 4]].find( ([r,s]) => !De(x.x + r, x.z + s)) || [0, 0];
            x.x += i[0],
            x.z += i[1],
            le && (le.group.visible = !0),
            X.enabled = !0,
            w === "city" && (h("#chat-btn").hidden = !1,
            dt(new Z(a,0,o), 20, 9, 6, 2)),
            k?.sendNow()
        }
        e && g(e, 3500)
    }
}
function zC(e) {
    let t = k?.stateOf(Ne.driver);
    if (!t || !t.fresh || !t.c) {
        Ne.lostAt ?? (Ne.lostAt = performance.now()),
        performance.now() - Ne.lostAt > 5e3 && Jo(`You lost @${Ne.name}'s car, so you got out.`);
        return
    }
    Ne.lostAt = null,
    Ne.v += (Math.min(45, Math.hypot(t.x - x.x, t.z - x.z) / Math.max(e, .001)) - Ne.v) * Math.min(1, e * 3),
    x.set(t.x, 0, t.z),
    j += Math.atan2(Math.sin(t.h - j), Math.cos(t.h - j)) * Math.min(1, e * 6)
}
function IC(e) {
    let t = new Map(Zc.map(a => [a.uid, a]));
    Zc = e;
    let n = e.filter(a => a.s === "ok");
    for (let a of t.values())
        a.s === "ok" && !e.some(i => i.uid === a.uid) && k.profileOf(a.uid).then(i => g(`@${i?.username || "Your passenger"} got out.`));
    h("#aboard").hidden = !n.length,
    h("#aboard").textContent = `\xB7 ${n.length} aboard`;
    let o = e.find(a => a.s === "ask");
    if (!o) {
        La && (La = null,
        zs());
        return
    }
    if (La !== o.uid) {
        if (n.length >= Qd) {
            k.liftAnswer(o.uid, "no", o.t);
            return
        }
        La = o.uid,
        k.profileOf(o.uid).then(a => {
            if (La !== o.uid)
                return;
            let i = a?.username || "someone";
            b0(`@${i} wants a lift`, `They'll ride with you for free. ${Qd - n.length} seat${Qd - n.length > 1 ? "s" : ""} free.`, [{
                text: "Accept",
                cls: "ok",
                onClick: () => {
                    k.liftAnswer(o.uid, "ok", o.t),
                    La = null,
                    zs(),
                    g(`@${i} is in your car.`)
                }
            }, {
                text: "No",
                onClick: () => {
                    k.liftAnswer(o.uid, "no", o.t),
                    La = null,
                    zs()
                }
            }])
        }
        )
    }
}
function PC() {
    Hs && (Hs(),
    Hs = null),
    Zc.length && k?.liftClear(),
    Zc = [],
    La = null,
    h("#aboard").hidden = !0,
    Ne || zs()
}
var Mn = null
  , P = null
  , ja = {
    gas: !1,
    brake: !1,
    left: !1,
    right: !1
}
  , x0 = () => "al-car-" + m?.uid
  , wl = e => e.official ? "Official car" : `${Al[e.colour] || ""} ${bo[e.model].name}`.trim();
async function k0() {
    return Mn = [...(await va(ka(mt(W, "players", m.uid, "cars"), Bi("boughtAt", "asc")))).docs.map(t => ({
        id: t.id,
        ...t.data()
    })).filter(t => bo[t.model]), ...ft() ? [pd] : []],
    Mn
}
function da() {
    if (!Mn?.length)
        return null;
    let e = null;
    try {
        e = localStorage.getItem(x0())
    } catch {}
    return Mn.find(t => t.id === e) || Mn[0]
}
async function Lb() {
    if (re(),
    !m)
        return ne("buy a car");
    let e = await k0().catch( () => Mn || [])
      , t = document.createElement("div");
    t.innerHTML = '<div class="sheet-label">My cars</div>',
    e.length || t.insertAdjacentHTML("beforeend", '<p class="sheet-sub">No car yet. With a car you drive yourself around Abuja, and going home or going out is free.</p>');
    for (let n of e) {
        let o = document.createElement("div");
        o.className = "prop-row",
        o.innerHTML = '<span class="swatch"></span><span style="flex:1"><b></b><small></small></span><button type="button"></button>',
        o.querySelector(".swatch").style.background = n.colour,
        o.querySelector("b").textContent = wl(n),
        o.querySelector("small").textContent = n.official ? "Comes with your office \xB7 goes back when you leave it" : `Bought for ${y(n.price)}`;
        let a = o.querySelector("button");
        P?.driving && P.id === n.id ? (a.textContent = "Driving",
        a.className = "here") : (a.textContent = "Drive",
        a.onclick = () => {
            E(),
            _r(n)
        }
        ),
        t.appendChild(o)
    }
    t.insertAdjacentHTML("beforeend", '<div class="sheet-label" style="margin-top:14px">Car dealer</div>'),
    R("Cars", `Buy as many as you like. You have ${y(A)}.`, Object.entries(bo).map( ([n,o]) => ({
        text: o.name,
        small: `Top speed ${Math.round(o.top * 3.6)} km/h` + (o.price > A ? " \xB7 not enough money" : ""),
        right: y(o.price),
        disabled: o.price > A,
        onClick: () => LC(n)
    }))),
    h("#act-list").prepend(t)
}
function LC(e) {
    let t = bo[e];
    R(`${t.name} \xB7 pick a colour`, `${y(t.price)} will leave you with ${y(A - t.price)}.`, t.colours.map(n => ({
        text: Al[n],
        small: " ",
        swatch: n,
        right: y(t.price),
        onClick: () => NC(e, n)
    })))
}
async function NC(e, t) {
    E();
    let n = bo[e]
      , o = A;
    A -= n.price,
    _e();
    try {
        let a = Xt(W)
          , i = ee(mt(W, "players", m.uid, "cars"));
        a.set(i, {
            model: e,
            colour: t,
            price: n.price,
            boughtAt: ie()
        }),
        a.update(ee(W, "players", m.uid), {
            money: A,
            lastCar: i.id,
            updatedAt: ie()
        }),
        a.set(ee(mt(W, "players", m.uid, "transactions")), {
            amount: -n.price,
            reason: "car",
            label: `Bought ${Al[t]} ${n.name}`.slice(0, 60),
            balance: A,
            createdAt: ie()
        }),
        await a.commit(),
        Object.assign(m.player, {
            money: A,
            lastCar: i.id
        });
        let r = {
            id: i.id,
            model: e,
            colour: t,
            price: n.price
        };
        (Mn || (Mn = [])).push(r);
        try {
            localStorage.setItem(x0(), r.id)
        } catch {}
        w === "home" ? R(`Your new ${n.name}!`, "It's parked outside. Next time you leave home, you drive for free.", [{
            text: "Nice",
            main: !0,
            onClick: E
        }]) : R(`Your new ${n.name}!`, "It's parked right here. Drive it now?", [{
            text: "Drive now",
            main: !0,
            onClick: () => {
                E(),
                _r(r)
            }
        }, {
            text: "Later",
            onClick: E
        }])
    } catch (a) {
        console.warn("buy car", a.code || a),
        A = o,
        _e(),
        g("Couldn't complete the purchase. Try again.")
    }
}
function _r(e, t) {
    if (w === "venue" && un(),
    w === "home" || w === "street")
        return Nr();
    if (w === "club")
        return g("Leave the club first. Your car is outside.");
    if (w === "cell")
        return g("You're locked up.");
    if (!mo())
        return g("Finish your taxi ride first.");
    try {
        localStorage.setItem(x0(), e.id)
    } catch {}
    if (P && P.id !== e.id && (J.remove(P.mesh),
    P = null),
    P)
        P.mesh.position.distanceTo(x) > 12 && (P.mesh.position.copy(x),
        P.mesh.rotation.y = j);
    else {
        let n = Oe(Rl(e.model, e.colour));
        J.add(n),
        P = {
            id: e.id,
            model: e.model,
            colour: e.colour,
            spec: bo[e.model],
            mesh: n
        },
        n.position.copy(x),
        n.rotation.y = j
    }
    if (x.set(P.mesh.position.x, 0, P.mesh.position.z),
    j = P.mesh.rotation.y,
    Object.assign(P, {
        driving: !0,
        v: 0,
        steer: 0,
        kmh: -1
    }),
    ce = null,
    de.visible = !1,
    le && (le.group.visible = !1),
    X.enabled = !1,
    h("#drive").hidden = !1,
    h("#get-in").hidden = !0,
    t) {
        Rn();
        return
    }
    P.auto || g("Tap Go to\u2026 to pick where to drive.", 3e3),
    k && m && !Hs && (Hs = k.liftWatchMine(IC)),
    h("#chat-btn").hidden = !0,
    h("#chat-input").blur(),
    h(".help").classList.add("gone"),
    k?.sendNow()
}
function Rn() {
    if (!P?.driving)
        return;
    P.auto && v0(),
    PC(),
    P.driving = !1,
    P.v = 0;
    for (let a in ja)
        ja[a] = !1;
    let e = j
      , t = Math.cos(e)
      , n = Math.sin(e)
      , o = [[t * 2.4, -n * 2.4], [-t * 2.4, n * 2.4], [-n * 4, -t * 4], [n * 4, t * 4]].find( ([a,i]) => !De(x.x + a, x.z + i)) || [0, 0];
    x.x += o[0],
    x.z += o[1],
    le && (le.group.visible = !0),
    X.enabled = !0,
    h("#drive").hidden = !0,
    h("#chat-btn").hidden = !1,
    dt(new Z(n,0,t), 20, 9, 6, 2),
    k?.sendNow()
}
function OC() {
    Rn(),
    J.remove(P.mesh),
    P = null,
    h("#get-in").hidden = !0
}
function BC(e) {
    let t = !!P && w === "city" && ft() === "minister";
    t && !P.convoy ? (P.convoy = Oe(rp()),
    P.mesh.add(P.convoy),
    k?.sendNow()) : !t && P?.convoy && (P.mesh.remove(P.convoy),
    P.convoy = null,
    k?.sendNow()),
    sp(e)
}
function _C() {
    let e = !B && P.mesh.position.distanceTo(x) < 8;
    e !== !h("#get-in").hidden && (h("#get-in").hidden = !e,
    e && (h("#get-in").innerHTML = xe("car", 20) + "<span>Get in</span>"))
}
function GC(e) {
    if (P.auto)
        return DC(e);
    P.v = 0,
    P.mesh.position.set(x.x, 0, x.z),
    P.mesh.rotation.y = j,
    P.kmh !== 0 && (P.kmh = 0,
    h("#speedo").textContent = "0 km/h")
}
function jC() {
    if (P?.driving) {
        if (P.auto)
            return v0(),
            P.v = Math.min(P.v, 8),
            g("Stopped. You're driving again.");
        if (!U)
            return g("Map still loading\u2026");
        ha("car")
    }
}
async function Nb(e, t) {
    if (h("#sheet").hidden = !0,
    !P?.driving || !t)
        return;
    if (ft() === "minister") {
        let o = xa([[x.x, x.z], ...t])
          , a = 35;
        return P.auto = o.total < 2 * a + 20 ? {
            route: o,
            s: 0,
            t: 0,
            phase: "short",
            dest: e
        } : {
            route: o,
            s: 0,
            t: 0,
            phase: "leave",
            L: a,
            dest: e
        },
        h("#drive").classList.add("auto"),
        h("#go-to").textContent = "Stop",
        h("#skip").hidden = !0,
        g(`Your convoy is moving to ${e.name}`, 3e3)
    }
    let n = P;
    await Fe(`Driving to ${e.name}\u2026`, 1600),
    $0([[x.x, x.z], ...t]),
    !(!P || P !== n) && (n.mesh.position.set(x.x, 0, x.z),
    n.mesh.rotation.y = j,
    Rn(),
    g(`You've arrived at ${e.name}. Your car is parked here.`, 4e3))
}
function v0() {
    P.auto = null,
    h("#drive").classList.remove("auto"),
    h("#go-to").textContent = "Go to\u2026",
    h("#skip").hidden = !0
}
function DC(e) {
    let t = P.auto
      , n = t.s
      , o = 5;
    if (t.phase === "fade")
        return;
    t.t = Math.min(t.phase === "short" ? 6 : o, t.t + e);
    let a = t.t / (t.phase === "short" ? 6 : o);
    t.s = t.phase === "leave" ? t.L * a * a : t.phase === "arrive" ? t.route.total - t.L * (1 - a) * (1 - a) : t.route.total * (1 - Math.cos(Math.PI * a)) / 2,
    P.v = (t.s - n) / Math.max(e, .001);
    let i = Jn(t.route, t.s);
    x.set(i.x, 0, i.z),
    j += Math.atan2(Math.sin(i.h - j), Math.cos(i.h - j)) * Math.min(1, e * 6),
    P.mesh.position.set(x.x, 0, x.z),
    P.mesh.rotation.y = j;
    let r = Math.round(P.v * 3.6);
    if (r !== P.kmh && (P.kmh = r,
    h("#speedo").textContent = r + " km/h"),
    !(a < 1)) {
        if (t.phase === "leave") {
            t.phase = "fade",
            Fe(`Convoy to ${t.dest.name}\u2026`, 1200).then( () => {
                if (P?.auto !== t)
                    return;
                t.phase = "arrive",
                t.t = 0,
                t.s = t.route.total - t.L;
                let s = Jn(t.route, t.s);
                x.set(s.x, 0, s.z),
                j = s.h,
                P.mesh.position.set(s.x, 0, s.z),
                P.mesh.rotation.y = s.h,
                k?.sendNow()
            }
            );
            return
        }
        P.v = 0,
        v0(),
        g(`You've arrived at ${t.dest.name}. Tap Get out, or Go to\u2026 for another trip.`, 4500)
    }
}
var ey = new Z
  , ty = new Z;
function ny(e, t) {
    let n = Math.sin(j)
      , o = Math.cos(j)
      , a = 1 - Math.exp(-e * 3)
      , i = 12 + Math.abs(t) * .15;
    ey.set(x.x - n * i, 5.5 + Math.abs(t) * .05, x.z - o * i),
    je.position.lerp(ey, a),
    ty.set(x.x + n * 8, 1.5, x.z + o * 8),
    X.target.lerp(ty, Math.min(1, a * 2)),
    je.lookAt(X.target)
}
document.querySelectorAll("#drive [data-k]").forEach(e => {
    let t = e.dataset.k
      , n = a => {
        a.preventDefault(),
        ja[t] = !0,
        e.classList.add("on");
        try {
            e.setPointerCapture(a.pointerId)
        } catch {}
    }
      , o = () => {
        ja[t] = !1,
        e.classList.remove("on")
    }
    ;
    e.addEventListener("pointerdown", n);
    for (let a of ["pointerup", "pointercancel", "lostpointercapture"])
        e.addEventListener(a, o);
    e.addEventListener("contextmenu", a => a.preventDefault())
}
);
h("#get-out").addEventListener("click", Rn);
h("#go-to").addEventListener("click", jC);
h("#get-in").addEventListener("click", () => P && _r(P));
h("#rent-chip").addEventListener("click", cu);
h("#act-close").addEventListener("click", E);
function FC(e) {
    let t = ["City Gate", "Eagle Square", "Millennium Park", "Ceddi Plaza", "National Mosque", "IbroFish"]
      , n = t[Math.floor(Math.random() * t.length)]
      , o = Jt.find(d => d.name === n);
    if (n === "City Gate" || !o || !U)
        return Qc(e);
    let a = U.nearest(o.x, o.z);
    if (a < 0)
        return Qc(e);
    let[i,r] = U.nodes[a]
      , [s,l] = Qo(i, r);
    x.set(s, 0, l);
    let u = new Z(o.x - s,0,o.z - l);
    u.lengthSq() < 1 && u.set(0, 0, -1),
    u.normalize(),
    j = Math.atan2(u.x, u.z),
    dt(u, 40, 13, 18, 9)
}
function Qc(e) {
    if (!e.gate)
        return Ob();
    let {x: t, z: n, angle: o} = e.gate
      , a = new Z(Math.sin(o),0,Math.cos(o));
    a.x * -t + a.z * -n < 0 && a.negate(),
    x.set(t, 0, n).addScaledVector(a, -32),
    j = Math.atan2(a.x, a.z),
    dt(a, 42, 12, 28, 11)
}
function Ob() {
    let e = null;
    for (let t = 0; t < 360; t += 10) {
        let n = t * Math.PI / 180
          , o = 105
          , a = Math.sin(n) * o
          , i = Math.cos(n) * o
          , r = !0;
        for (let l = o; l > 66 && r; l -= 3)
            De(Math.sin(n) * l, Math.cos(n) * l) && (r = !1);
        for (let l = o; l < o + 25 && r; l += 3)
            De(Math.sin(n) * l, Math.cos(n) * l) && (r = !1);
        let s = Math.min(t, 360 - t);
        r && (!e || s < e.score) && (e = {
            sx: a,
            sz: i,
            a: n,
            score: s
        })
    }
    e && (x.set(e.sx, 0, e.sz),
    j = e.a + Math.PI),
    ce = null,
    de.visible = !1,
    dt(new Z(Math.sin(j),0,Math.cos(j)), 40, 13, 18, 9)
}
function dt(e, t, n, o, a) {
    je.position.copy(x).addScaledVector(e, -t).setY(n),
    X.target.copy(x).addScaledVector(e, o).setY(a),
    Rc.copy(x),
    X.update()
}
var U = null
  , Jt = []
  , Ro = []
  , Ho = null
  , B = null;
var m = null
  , A = 15e4
  , y = e => "\u20A6" + e.toLocaleString()
  , C0 = () => A;
function _e() {
    m ? (h("#wallet").textContent = y(A),
    h("#m-money").textContent = y(A)) : (h("#wallet").textContent = "Sign up \xB7 get \u20A6150k",
    h("#m-money").textContent = "Guest \xB7 walking only")
}
function oy() {
    A = 0,
    _e()
}
var k = null;
async function YC() {
    let {startMultiplayer: e} = await import("./chunk-TYQF2FC6.js");
    k = e({
        app: Te,
        db: W,
        scene: J,
        fuse: Oe,
        getMe: () => m,
        myPos: x,
        myHeading: () => j,
        myWalking: () => hs > .5,
        isHidden: () => w === "home" || !!Ne?.riding,
        myCar: () => P?.driving ? `${P.model}|${P.colour}${P.convoy ? "|v" : ""}` : B?.stage === "riding" ? B.kind === "keke" ? "keke-ride|" : "taxi|" : performance.now() < ua ? oa ? "bed|" : "down|" : Be ? "fight|" : ta ? "dance|" : St && w === "venue" ? ye?.key === "mosque" ? "kneel|" : "sit|" : null,
        myGroup: () => le?.group,
        lowGfx: en,
        onChat: VC,
        onHouseCmd: tv,
        crewOf: t => Ri.get(t)?.name,
        titleOf: i2,
        chatRoom: qC
    }),
    k.setMaxShown(Xo === 2 ? 15 : en ? 25 : 40),
    m && (k.publishProfile(),
    k.sendNow(),
    k.watchInbox(qb),
    Xb(),
    Hw(),
    Sb(),
    Ow(),
    w === "home" && k.joinHouse(F ? F.host : m.uid, Mt))
}
var WC = ["Miva Open University", "Nile University", "University of Abuja", "Veritas University", "Bingham University", "Truck Central", "Trukadero", "Farm City", "BluCabana", "Nnamdi Azikiwe Airport", "City Gate", "National Christian Centre", "Ceddi Plaza", "National Mosque", "IbroFish", "Eagle Square", "Millennium Park", "Yar'Adua Centre", "Transcorp Hilton", "Silverbird"]
  , Wh = null
  , Zi = null
  , dr = e => e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
function E0(e, t) {
    Wh || (Wh = WC.map(a => {
        let i = yl(a) || (a === "Silverbird" && ue ? {
            x: ue.x,
            z: ue.z
        } : null);
        return i && {
            name: a === "Silverbird" ? "Silverbird & Club Zuma" : a,
            x: i.x,
            z: i.z
        }
    }
    ).filter(Boolean));
    let n = null
      , o = 1e3;
    for (let a of Wh) {
        let i = Math.hypot(a.x - e, a.z - t);
        i < o && (o = i,
        n = a)
    }
    return [n, o]
}
var qh = (e, t) => {
    let[n] = E0(e, t);
    return n ? "r_" + dr(n.name) : `a_${Math.floor(e / 1e3)}_${Math.floor(t / 1e3)}`
}
;
function qC(e) {
    if (w === "club")
        return {
            id: "club_zuma",
            name: ot
        };
    if (w === "cell")
        return {
            id: "police_cell",
            name: "Police cell"
        };
    if (w === "street")
        return {
            id: "street_" + Oo,
            name: `${Ze(Oo)} street`
        };
    if (w === "venue" && ye)
        return {
            id: "in_" + dr(ye.key),
            name: ye.name
        };
    if (w === "home" || !al)
        return null;
    let[t,n] = E0(e.x, e.z);
    return Zi && t && t !== Zi && Math.hypot(Zi.x - e.x, Zi.z - e.z) < Math.min(1e3, n + 120) && (t = Zi),
    Zi = t,
    t ? {
        id: "r_" + dr(t.name),
        name: t.name
    } : {
        id: `a_${Math.floor(e.x / 1e3)}_${Math.floor(e.z / 1e3)}`,
        name: "this area"
    }
}
var UC = "#club-hud, #steal-btn, #venue-bar, .get-in";
function Pi() {
    let e = h("#chat-log");
    e.style.bottom = "";
    let t = e.getBoundingClientRect()
      , n = t.bottom;
    for (let o of document.querySelectorAll(UC)) {
        let a = o.getBoundingClientRect();
        !a.width || a.right < t.left || a.left > t.right || a.bottom < t.bottom - 100 || (n = Math.min(n, a.top))
    }
    n < t.bottom && (e.style.bottom = `${Math.ceil(innerHeight - n + 8)}px`)
}
addEventListener("resize", Pi);
setInterval(Pi, 400);
function VC(e, t) {
    tk(e);
    let n = h("#chat-rows");
    if (!n)
        return;
    n.innerHTML = "";
    let o = document.body.classList.contains("in-church");
    for (let i of e.slice(o ? -30 : -8)) {
        let r = document.createElement("div");
        r.className = "chat-row" + (i.old ? " old" : ""),
        r.innerHTML = "<b></b> <span></span>",
        r.children[0].textContent = "@" + i.name,
        r.children[1].textContent = i.text,
        i.uid && i.uid !== m?.uid && (r.children[0].classList.add("who"),
        r.children[0].onclick = () => Yb(i.uid, i.name)),
        n.appendChild(r)
    }
    o && (n.scrollTop = n.scrollHeight);
    let a = [...n.children].reduce( (i, r) => i + r.offsetHeight + 4, 0) > n.clientHeight + 2;
    n.classList.toggle("full", !o && a)
}
function Bb(e) {
    if (e === "club_zuma")
        return {
            id: e,
            name: ot,
            ...ue ? {
                x: ue.x,
                z: ue.z
            } : {}
        };
    if (e.startsWith("street_"))
        return {
            id: e,
            name: `${Ze(e.slice(7))} street`
        };
    if (e.startsWith("in_food_")) {
        let o = Lt.find(a => "in_food_" + dr(a.id) === e);
        return {
            id: e,
            name: o ? `Inside ${o.name}` : "Inside a place",
            ...o ? {
                x: o.x,
                z: o.z
            } : {}
        }
    }
    if (e.startsWith("in_plot_")) {
        let o = He.find(i => i.kind === "custom" && "in_plot_" + dr(String(i.plot)) === e)
          , a = o && ht[o.plot];
        return {
            id: e,
            name: o ? `Inside ${o.name}` : "Inside a shop",
            ...a ? {
                x: a.door.x,
                z: a.door.z
            } : {}
        }
    }
    if (e === "in_mosque")
        return {
            id: e,
            name: "Inside National Mosque",
            ...lt ? {
                x: lt.x,
                z: lt.z
            } : {}
        };
    if (e === "in_church")
        return {
            id: e,
            name: "Inside National Christian Centre",
            ...nt ? {
                x: nt.x,
                z: nt.z
            } : {}
        };
    if (e.startsWith("in_"))
        return {
            id: e,
            name: "Inside a place"
        };
    let t = /^a_(-?\d+)_(-?\d+)$/.exec(e);
    if (t) {
        let o = +t[1] * 1e3 + 500
          , a = +t[2] * 1e3 + 500
          , i = Jt.map(r => [r, Math.hypot(r.x - o, r.z - a)]).sort( (r, s) => r[1] - s[1])[0];
        return {
            id: e,
            name: i ? `Near ${i[0].name}` : "Around town",
            x: o,
            z: a
        }
    }
    E0(0, 0);
    let n = (Wh || []).find(o => "r_" + dr(o.name) === e);
    return n ? {
        id: e,
        name: n.name,
        x: n.x,
        z: n.z
    } : {
        id: e,
        name: e.replace(/^r_/, "").replace(/_/g, " ")
    }
}
function JC() {
    let e = {};
    for (let[t,n] of Object.entries(zo || {})) {
        let[o,a] = t.split("_").map(r => +r * 100 + 50)
          , i = null;
        if (Math.hypot(o - Rt[0], a - Rt[1]) < 300)
            i = "club_zuma";
        else {
            let r = Object.entries(Qr).find( ([,[s,l]]) => Math.abs(o - s) < 300 && Math.abs(a - l) < Gn + 300);
            r && (i = "street_" + r[0])
        }
        !i && Math.hypot(o - qo[0], a - qo[1]) < 300 || !i && o > 3e4 || (i || (i = qh(o, a)),
        e[i] = (e[i] || 0) + n)
    }
    return e
}
var eh = null
  , ay = 0;
async function _b() {
    if (re?.(),
    R("Chat rooms", "Loading\u2026", []),
    await Promise.all([Date.now() - ay > 3e4 ? fetch("/api/crowds?rooms=1").then(i => i.ok ? i.json() : null).then(i => {
        i?.rooms && (eh = i.rooms,
        ay = Date.now())
    }
    ).catch( () => {}
    ) : null, Date.now() - nu > 3e4 ? fetch("/api/crowds").then(i => i.ok ? i.json() : null).then(i => {
        i?.cells && (zo = i.cells,
        nu = Date.now())
    }
    ).catch( () => {}
    ) : null]),
    h("#act-title").textContent !== "Chat rooms")
        return;
    let e = JC()
      , t = k?.room?.()?.id
      , n = new Set([...Object.keys(e), ...Object.keys(eh || {})]);
    t && n.add(t);
    let a = [...n].map(i => ({
        ...Bb(i),
        n: e[i] || 0,
        last: eh?.[i] || null
    })).sort( (i, r) => (r.id === t) - (i.id === t) || r.n - i.n || (r.last?.t || 0) - (i.last?.t || 0)).slice(0, 25).map(i => ({
        text: (i.id === t ? "\u{1F4CD} " : "") + i.name,
        small: [i.n ? `${i.n} here now` : "", i.last ? `"${i.last.m}" \xB7 ${ma(i.last.t)}` : `Gist: ${Ff(i.id)}`].filter(Boolean).join(" \xB7 "),
        right: i.id === t ? "You're here" : "Read",
        onClick: () => {
            E(),
            Gb(i)
        }
        ,
        ...i.id !== t && Db(i) ? {
            btn: "Go there",
            onBtn: () => {
                E(),
                Fb(i)
            }
        } : {}
    }));
    R("Chat rooms", "Read any conversation in Abuja from wherever you are, even from home. Go there to talk. Busiest first.", a.length ? a : [{
        text: "It's quiet right now",
        small: "Start the conversation: open the room where you are and say something",
        onClick: () => {}
    }])
}
var Ei = null;
function Gb(e) {
    if (!k)
        return g("Chat is still loading\u2026");
    Ei = e,
    h("#room-name").textContent = e.name,
    h("#room-topic").textContent = `\u{1F4AC} Gist here: ${Ff(e.id)}`;
    let t = k.room?.()?.id === e.id && w !== "home"
      , n = !t && Db(e);
    h("#room-go").hidden = !0,
    h("#room-send").textContent = n ? "Go there" : "Send",
    h("#room-send").classList.toggle("go", n),
    h("#room-list").innerHTML = '<p class="dm-empty">No messages yet.</p>',
    h("#room-input").disabled = !t,
    h("#room-send").disabled = !t && !n,
    h("#room-input").placeholder = t ? m ? "Say something to the room\u2026" : "Create a character to join the chat" : "Go there to join the conversation",
    h("#room-sheet").hidden = !1,
    k.openRoom(e.id, o => {
        if (Ei?.id !== e.id)
            return;
        let a = h("#room-list")
          , i = a.scrollHeight - a.scrollTop - a.clientHeight < 60;
        a.innerHTML = "";
        for (let r of o) {
            let s = document.createElement("div");
            s.className = "dm-msg" + (r.mine ? " mine" : ""),
            s.innerHTML = '<b class="room-who"></b><span></span>',
            s.children[0].textContent = "@" + r.name,
            s.children[1].textContent = r.text,
            r.mine || (s.children[0].onclick = () => {
                Nu(),
                Yb(r.uid, r.name)
            }
            ),
            a.appendChild(s)
        }
        (i || o.length < 3) && (a.scrollTop = a.scrollHeight)
    }
    ),
    Ye("room")
}
function Nu() {
    h("#room-sheet").hidden = !0,
    k?.closeRoom(),
    Ei = null
}
async function jb() {
    if (!m)
        return ne("chat");
    let e = h("#room-input")
      , t = e.value.trim();
    if (!t || !Ei)
        return;
    if (k.room?.()?.id !== Ei.id || w === "home")
        return g("Go there to join the conversation.");
    e.value = "";
    let n = await k.sendRoom(Ei.id, t);
    n.ok && Ye("room_msg"),
    n.ok || (e.value = t,
    g(n.why === "slow" ? "Slow down a little." : "Couldn't send. Try again."))
}
h("#chat-rooms").addEventListener("click", _b);
h("#room-close").addEventListener("click", Nu);
h("#room-back").addEventListener("click", () => {
    Nu(),
    _b()
}
);
h("#room-send").addEventListener("click", () => {
    let e = Ei;
    e && h("#room-send").classList.contains("go") ? (Nu(),
    Fb(e)) : jb()
}
);
h("#room-input").addEventListener("keydown", e => {
    e.key === "Enter" && (e.preventDefault(),
    jb())
}
);
var Db = e => w !== "cell" && e.x !== void 0
  , Fb = e => cn(e.name.replace(/^Inside /, ""), e.x, e.z);
function Yb(e, t) {
    if (k?.infoFor(e))
        return eu(e);
    if (!m)
        return ne("message people");
    ba(e, t)
}
function Wb() {
    if (!m)
        return ne("talk to people");
    h("#chat-input").focus()
}
async function KC() {
    let e = h("#chat-input")
      , t = e.value.trim();
    if (!t || !k)
        return;
    e.readOnly = !0;
    let n = await k.sendChat(t);
    e.readOnly = !1,
    n.ok ? (e.value = "",
    k.say(m.uid, t),
    e.focus(),
    ln("chat")) : g(n.why === "slow" ? "Slow down a little." : "Couldn't send. Check your connection.")
}
st && (window.__tap = async (e=0) => {
    let t = (k?.nearby(5e3) || []).find(l => l.username);
    if (!t)
        return "nobody online";
    let n = k.stateOf(t.uid);
    Math.hypot(n.x - x.x, n.z - x.z) > 30 && (x.set(n.x + 8, 0, n.z + 8),
    ce = null,
    await new Promise(l => setTimeout(l, 2500)),
    n = k.stateOf(t.uid));
    let o = k.meshes().length
      , a = new Z(n.x,2.6,n.z).project(je)
      , i = (a.x + 1) / 2 * innerWidth
      , r = (1 - a.y) / 2 * innerHeight + e
      , s = wt.domElement;
    return s.dispatchEvent(new PointerEvent("pointerdown",{
        clientX: i,
        clientY: r
    })),
    s.dispatchEvent(new PointerEvent("pointerup",{
        clientX: i,
        clientY: r
    })),
    {
        who: t.username,
        x: Math.round(i),
        y: Math.round(r),
        card: !h("#player-sheet").hidden
    }
}
);
st && (window.__card = () => {
    let e = (k?.nearby(5e3) || []).find(n => n.username);
    if (e)
        return eu(e.uid),
        e.username;
    let t = k;
    k = {
        infoFor: n => ({
            uid: n,
            username: "abujalastborn"
        }),
        stateOf: () => ({
            x: x.x + 7,
            z: x.z,
            c: "dance|"
        }),
        mute() {}
    };
    try {
        eu("debug-player")
    } finally {
        k = t
    }
    return "pretend"
}
);
var iy = !1;
function XC() {
    if (!iy) {
        iy = !0;
        for (let e of document.querySelectorAll("#player-sheet [data-ic]")) {
            let t = e.closest(".pc-grid");
            e.insertAdjacentHTML("afterbegin", t ? `<span class="ic">${xe(e.dataset.ic, 20)}</span>` : xe(e.dataset.ic, t ? 20 : 17))
        }
    }
}
function eu(e) {
    let t = k.infoFor(e);
    if (!t)
        return;
    XC(),
    h("#player-name").textContent = "@" + t.username;
    let n = k.stateOf(e)
      , o = n?.c && !/^(taxi|keke-ride)\|/.test(n.c)
      , a = h("#player-avatar");
    a.textContent = t.username[0].toUpperCase(),
    a.style.background = `hsl(${aw(t.username)} 45% 42%)`;
    let i = Object.entries(H?.offices || {}).find( ([,T]) => T?.uid === e)?.[0]
      , r = Object.entries(H?.roles || {}).find( ([,T]) => T?.uid === e)?.[0]
      , s = Ri.get(e)
      , l = n ? o ? "\u{1F697} Driving" : /^dance\|/.test(n.c || "") ? "\u{1F483} Dancing" : /^sit\|/.test(n.c || "") ? "Sitting" : "" : ""
      , u = n && (w === "city" || w === "street" || w === "club") ? Math.round(Math.hypot(n.x - x.x, n.z - x.z)) : null
      , d = h("#player-tags");
    d.innerHTML = "";
    for (let[T,M] of [[i && Ie[i].title, "gold"], [r && Ra[r].short, "gold"], [s && `\u{1F465} ${s.name}`], [l], [u != null && (u < 3 ? "Right next to you" : `${u} m away`)]])
        if (T) {
            let _ = document.createElement("span");
            _.textContent = T,
            M && (_.className = M),
            d.appendChild(_)
        }
    d.children.length || (d.innerHTML = "<span>Abuja Life player</span>"),
    h("#player-lift").hidden = !o,
    h("#player-lift").onclick = () => {
        h("#player-sheet").hidden = !0,
        RC(e, t.username)
    }
    ,
    h("#player-police").onclick = () => {
        h("#player-sheet").hidden = !0,
        zw(e, t.username)
    }
    ;
    let c = (w === "city" || w === "street" || w === "club") && !!n && !o
      , p = t.username
      , f = T => () => {
        h("#player-sheet").hidden = !0,
        cC(e, p, T)
    }
    ;
    h("#player-goto").hidden = !0,
    h("#player-invite").hidden = !c || !m,
    h("#player-invite").onclick = () => {
        h("#player-sheet").hidden = !0,
        Kb(e, p)
    }
    ,
    h("#player-fight").hidden = !(c && w !== "club"),
    h("#player-fight").onclick = f( () => dC(e, p)),
    h("#player-steal").hidden = h("#player-fight").hidden,
    h("#player-steal").onclick = f( () => fC(e, p)),
    h("#player-beg").hidden = h("#player-fight").hidden,
    h("#player-beg").onclick = () => {
        h("#player-sheet").hidden = !0,
        pC(e, p)
    }
    ,
    h("#player-seduce").hidden = !c;
    let b = m?.player.crew
      , $ = Ri.get(e);
    h("#player-crew").hidden = !b?.id || $?.id === b.id,
    h("#player-crew").lastChild.textContent = b?.id ? `Invite to ${b.name}` : "Invite to my crew",
    h("#player-crew").onclick = () => {
        h("#player-sheet").hidden = !0,
        k.groupInvite(e, "c:" + b.id),
        g(`Invited @${t.username} to ${b.name}.`)
    }
    ,
    h("#player-arrest").hidden = !ft(),
    h("#player-arrest").onclick = () => {
        h("#player-sheet").hidden = !0,
        M2(e, t.username)
    }
    ,
    h("#player-seduce").onclick = f( () => eE(e, p)),
    h("#player-sheet").hidden = !1,
    h("#player-dm").onclick = () => {
        if (h("#player-sheet").hidden = !0,
        !m)
            return ne("send private messages");
        ba(e, t.username)
    }
    ,
    h("#player-mute").onclick = () => {
        k.mute(e),
        h("#player-sheet").hidden = !0,
        g(`Muted @${t.username}`)
    }
    ,
    h("#player-report").onclick = async () => {
        if (!m)
            return ne("report players");
        let T = await k.report(e, "Reported from player card");
        h("#player-sheet").hidden = !0,
        g(T ? `Reported @${t.username}. Thanks for keeping Abuja safe.` : "Couldn't send the report.")
    }
}
h("#chat-btn").addEventListener("submit", e => {
    e.preventDefault(),
    KC()
}
);
h("#chat-input").addEventListener("focus", () => {
    m || (h("#chat-input").blur(),
    ne("talk to people"))
}
);
h("#chat-input").addEventListener("keydown", e => {
    e.key === "Escape" && h("#chat-input").blur(),
    e.stopPropagation()
}
);
h("#chat-input").addEventListener("keyup", e => e.stopPropagation());
h("#player-close").addEventListener("click", () => h("#player-sheet").hidden = !0);
var th = 0
  , hr = []
  , uo = null;
function qb(e) {
    let t = e.filter(r => r.unread && r.uid !== uo?.uid)
      , n = new Map(hr.map(r => [r.uid, r.t]))
      , o = t.find(r => (n.get(r.uid) || 0) < r.t);
    o && hr.length && g(`New message from @${o.username}`);
    let a = t;
    hr = e,
    th = a.length;
    let i = h("#nav-msg");
    i.querySelector(".badge-dot")?.remove(),
    th && i.insertAdjacentHTML("beforeend", `<span class="badge-dot">${th}</span>`),
    h("#inbox-sheet").hidden || Ub()
}
function Ub() {
    let e = h("#inbox-list");
    if (e.innerHTML = "",
    !hr.length) {
        e.innerHTML = '<p class="sheet-sub">No conversations yet. Find someone above, or tap a player in the city and choose Message.</p>';
        return
    }
    for (let t of hr) {
        let n = document.createElement("button");
        n.type = "button",
        n.className = "inbox-row" + (t.unread ? " unread" : ""),
        n.innerHTML = "<b></b><small></small>",
        n.children[0].textContent = "@" + t.username + (t.unread ? "  \u2022  new" : ""),
        n.children[1].textContent = t.preview,
        n.onclick = () => {
            h("#inbox-sheet").hidden = !0,
            ba(t.uid, t.username)
        }
        ,
        e.appendChild(n)
    }
}
function Vb() {
    if (re(),
    !m)
        return ne("send private messages");
    Ub(),
    h("#dm-find").value = "",
    h("#dm-find-list").innerHTML = "",
    h("#inbox-sheet").hidden = !1
}
var Uh = 0
  , nh = "";
async function Jb() {
    let e = h("#dm-find").value.trim().toLowerCase().replace(/^@/, "").replace(/[^a-z0-9_]/g, "")
      , t = h("#dm-find-list");
    if (nh = e,
    e.length < 2) {
        t.innerHTML = "";
        return
    }
    try {
        let n = await va(ka(mt(W, "public"), $l("username", ">=", e), $l("username", "<=", e + "\uF8FF"), _i(8)));
        if (nh !== e)
            return;
        let o = n.docs.filter(a => a.id !== m.uid);
        if (t.innerHTML = "",
        !o.length) {
            t.innerHTML = `<p class="sheet-sub">Nobody called @${e}\u2026</p>`;
            return
        }
        for (let a of o) {
            let i = a.data().username
              , r = document.createElement("button");
            r.type = "button",
            r.className = "inbox-row find",
            r.innerHTML = "<b></b><small>Message</small>",
            r.children[0].textContent = "@" + i,
            r.onclick = () => {
                h("#inbox-sheet").hidden = !0,
                ba(a.id, i)
            }
            ,
            t.appendChild(r)
        }
    } catch (n) {
        console.warn("find players", n.code || n),
        nh === e && (t.innerHTML = `<p class="sheet-sub">Couldn't search. Check your connection.</p>`)
    }
}
h("#dm-find").addEventListener("input", () => {
    clearTimeout(Uh),
    Uh = setTimeout(Jb, 300)
}
);
h("#dm-find").addEventListener("keydown", e => {
    e.key === "Enter" && (clearTimeout(Uh),
    Jb()),
    e.stopPropagation()
}
);
h("#dm-find").addEventListener("keyup", e => e.stopPropagation());
function ba(e, t) {
    k && (uo = {
        uid: e,
        username: t
    },
    h("#dm-name").textContent = "@" + t,
    h("#dm-list").innerHTML = '<p class="dm-empty">Say hello.</p>',
    h("#dm-sheet").hidden = !1,
    k.openDM(e, n => {
        let o = h("#dm-list");
        if (o.innerHTML = "",
        !n.length) {
            o.innerHTML = '<p class="dm-empty">Say hello.</p>';
            return
        }
        for (let a of n) {
            let i = document.createElement("div");
            i.className = "dm-msg" + (a.mine ? " mine" : "");
            let r = /^::invite:([a-z]+)$/.exec(a.text);
            if (r && Re[r[1]])
                if (i.classList.add("dm-invite"),
                i.innerHTML = "<b></b><small></small>",
                i.querySelector("b").textContent = a.mine ? `You invited @${t} over` : `@${t} invited you over`,
                i.querySelector("small").textContent = `House in ${Ze(r[1])}`,
                !a.mine && k.serverNow() - (+a.t || 0) < oE) {
                    let s = document.createElement("button");
                    s.type = "button",
                    s.textContent = "Go now",
                    s.onclick = () => {
                        T0(),
                        bl({
                            host: e,
                            name: t,
                            home: r[1]
                        })
                    }
                    ,
                    i.appendChild(s)
                } else
                    a.mine || i.insertAdjacentHTML("beforeend", "<small>Invite ended</small>");
            else if (/^::beg:\d+$/.test(a.text)) {
                let s = +a.text.slice(6);
                if (i.classList.add("dm-invite"),
                i.innerHTML = "<b></b>",
                i.querySelector("b").textContent = a.mine ? `You begged @${t} for ${y(s)} \u{1F64F}` : `@${t} is begging you for ${y(s)} \u{1F64F}`,
                !a.mine) {
                    let l = document.createElement("button");
                    l.type = "button",
                    l.textContent = `Give ${y(s)}`,
                    l.onclick = () => Tc({
                        uid: e,
                        username: t
                    }, s),
                    i.appendChild(l)
                }
            } else
                i.textContent = a.text;
            o.appendChild(i)
        }
        o.scrollTop = o.scrollHeight
    }
    ),
    setTimeout( () => h("#dm-input").focus(), 50))
}
function T0() {
    h("#dm-sheet").hidden = !0,
    k?.closeDM(),
    uo = null
}
async function ZC() {
    uo && (h("#dm-invite").disabled = !0,
    await Kb(uo.uid, uo.username),
    h("#dm-invite").disabled = !1)
}
async function Kb(e, t) {
    if (!m || !k)
        return ne("invite people over");
    try {
        await k.inviteToHouse(e, m.player.home),
        Ye("invite"),
        await k.sendDM(e, `::invite:${m.player.home}`),
        g(w === "home" && !F ? `Invite sent to @${t}.` : `Invite sent. Go home to welcome @${t}.`, 4e3)
    } catch (n) {
        console.warn("invite", n.code || n),
        g("Couldn't send the invite. Try again.")
    }
}
var ry = !1
  , fn = new Set;
function Xb() {
    ry || !k || !m || (ry = !0,
    k.watchInvites(e => {
        let t = k.serverNow();
        for (let o of e)
            /^(s:|y$|n$)/.test(o.home || "") && !fn.has(o.host + o.t) && (fn.add(o.host + o.t),
            tE(o, t));
        for (let o of e)
            /^g:/.test(o.home || "") && !fn.has(o.host + o.t) && (fn.add(o.host + o.t),
            lv(o, t));
        for (let o of e)
            /^(c|r):/.test(o.home || "") && !fn.has(o.host + o.t) && (fn.add(o.host + o.t),
            jk(o, t));
        for (let o of e)
            /^jx?:/.test(o.home || "") && !fn.has(o.host + o.t) && (fn.add(o.host + o.t),
            Ok(o, t));
        for (let o of e)
            /^l:/.test(o.home || "") && !fn.has(o.host + o.t) && (fn.add(o.host + o.t),
            p2(o, t));
        for (let o of e)
            /^z:/.test(o.home || "") && !fn.has(o.host + o.t) && (fn.add(o.host + o.t),
            q2(o, t));
        let n = e.filter(o => t - o.t < 7200 * 1e3 && !fn.has(o.host + o.t)).sort( (o, a) => a.t - o.t)[0];
        !n || !Re[n.home] || (fn.add(n.host + n.t),
        !(uo?.uid === n.host && !h("#dm-sheet").hidden) && R(`@${n.name} invited you over`, `House in ${Ze(n.home)}.`, [{
            text: "Go now",
            main: !0,
            onClick: () => {
                E(),
                bl(n)
            }
        }, {
            text: "No thanks",
            onClick: () => {
                E(),
                k.clearInvite(n.host)
            }
        }]))
    }
    ))
}
var QC = 120 * 1e3
  , oh = new Map;
async function eE(e, t) {
    if (!m || !k)
        return ne("seduce people");
    if (Be || te || B || P?.driving || w === "cell")
        return g("Not right now.");
    if (Date.now() - (oh.get(e) || 0) < 6e4)
        return g(`Give @${t} a moment to answer.`);
    oh.set(e, Date.now());
    try {
        await k.seduce(e, m.player.home),
        Ye("seduce"),
        g(`You winked at @${t} \u{1F60F} Waiting for an answer\u2026`, 4e3)
    } catch (n) {
        console.warn("seduce", n.code || n),
        oh.delete(e),
        g("Couldn't do that. Try again.")
    }
}
function tE(e, t) {
    if (t - e.t > QC) {
        k.clearFrom(e.host);
        return
    }
    if (e.home.startsWith("s:")) {
        let n = e.home.slice(2);
        if (!Re[n])
            return;
        if (w === "cell" || Be) {
            k.seduceAnswer(e.host, !1),
            k.clearInvite(e.host);
            return
        }
        R(`@${e.name} is trying to seduce you \u{1F60F}`, `Go back to their place in ${Ze(n)}?`, [{
            text: "Go with them",
            main: !0,
            onClick: () => {
                E(),
                k.seduceAnswer(e.host, !0),
                bl({
                    host: e.host,
                    name: e.name,
                    home: n,
                    date: !0
                })
            }
        }, {
            text: "Not interested",
            onClick: () => {
                E(),
                k.seduceAnswer(e.host, !1),
                k.clearInvite(e.host)
            }
        }]);
        return
    }
    if (k.clearFrom(e.host),
    e.home === "n")
        return g(`@${e.name} isn't interested. Maybe next time.`, 4e3);
    g(`@${e.name} said yes! \u{1F60D} Heading to your place\u2026`, 4e3),
    nE(e.name)
}
async function nE(e) {
    if (w !== "cell") {
        if (w === "home" && !F)
            return g(`@${e} is on the way to your place.`);
        B && (_u(),
        B = null,
        le && (le.group.visible = !0),
        h("#taxi").hidden = !0,
        h("#skip").hidden = !0),
        Le && In(),
        P?.driving && Rn(),
        await Fe(`Heading home to ${Ze(m.player.home)} with @${e}\u2026`, 1600),
        aa()
    }
}
var oE = 7200 * 1e3;
async function bl(e) {
    if (w === "cell" || Mu() > 0)
        return g("You're locked up. Pay your bail or wait it out first.", 4e3);
    if (!mo())
        return g("Finish your ride first.");
    if (k.clearInvite(e.host),
    !await k.houseAllowed(e.host))
        return g(`@${e.name}'s invite has ended. Ask them to invite you again.`, 4e3);
    P?.driving && Rn();
    let[t] = await Promise.all([k.getHouseMeta(e.host), Fe(e.back ? `Back at @${e.name}'s house\u2026` : `Going to @${e.name}'s house in ${Ze(e.home)}\u2026`, e.back ? 1200 : 2e3)]);
    aa({
        host: e.host,
        name: e.name,
        type: e.home,
        meta: t,
        arrived: Date.now()
    }),
    setTimeout( () => {
        F && (e.date ? g(`You're at @${e.name}'s place \u{1F60F}`) : k.houseHas(e.host) ? g(`You're at @${e.name}'s house. Say hi!`) : (k.noteVisit(e.host),
        h("#steal-btn").hidden = !1,
        Nw(!0)))
    }
    , 2500)
}
function aE() {
    if (!uo || !m)
        return;
    let e = uo
      , t = document.createElement("div");
    t.className = "send-money",
    t.innerHTML = '<input type="number" inputmode="numeric" min="100" max="200000" step="100" placeholder="Other amount (\u20A6100 \u2013 \u20A6200,000)" />';
    let n = t.querySelector("input");
    n.addEventListener("keydown", a => {
        a.stopPropagation(),
        a.key === "Enter" && +n.value && Tc(e, Math.floor(+n.value))
    }
    ),
    n.addEventListener("keyup", a => a.stopPropagation()),
    R(`Send money to @${e.username}`, `You have ${y(A)}. Up to \u20A6200,000 per transfer and \u20A6500,000 a day.`, [1e3, 5e3, 1e4, 5e4, 1e5, 2e5].map(a => ({
        text: y(a),
        right: "Send",
        disabled: a > A,
        onClick: () => Tc(e, a)
    }))),
    h("#act-list").append(t);
    let o = document.createElement("button");
    o.type = "button",
    o.className = "w-main act-btn",
    o.textContent = "Send other amount",
    o.onclick = () => +n.value && Tc(e, Math.floor(+n.value)),
    h("#act-list").append(o)
}
function Tc(e, t) {
    if (!(t >= 100 && t <= 2e5))
        return g("Send between \u20A6100 and \u20A6200,000.");
    if (t > A)
        return g("You don't have enough money.");
    R(`Send ${y(t)} to @${e.username}?`, `You'll have ${y(A - t)} left. This can't be undone.`, [{
        text: `Send ${y(t)}`,
        main: !0,
        onClick: () => {
            E(),
            iE(e, t)
        }
    }])
}
async function iE(e, t) {
    let n = (crypto.randomUUID?.() || Date.now().toString(36) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)).replace(/-/g, "");
    g(`Sending ${y(t)}\u2026`);
    for (let o = 0; o < 4; o++) {
        try {
            let a = await $e(Te).currentUser.getIdToken()
              , i = await fetch("/api/transfer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + a
                },
                body: JSON.stringify({
                    to: e.uid,
                    amount: t,
                    id: n
                })
            })
              , r = await i.json().catch( () => ({}));
            if (i.ok) {
                typeof r.balance == "number" && (A = r.balance,
                m.player.money = A,
                _e()),
                g(`Sent ${y(t)} to @${e.username}.`, 4e3),
                k?.sendDM(e.uid, `\u{1F4B8} @${m.player.username} sent you ${y(t)}.`);
                return
            }
            if (i.status < 500)
                return g(r.error || "Couldn't send the money.", 4500)
        } catch (a) {
            console.warn("transfer", a)
        }
        await new Promise(a => setTimeout(a, 1500 * (o + 1)))
    }
    g("Couldn't reach the server. If the money left your wallet, it arrived. Check your wallet.", 6e3)
}
h("#dm-invite").addEventListener("click", ZC);
h("#dm-money").addEventListener("click", aE);
async function Zb() {
    let e = h("#dm-input")
      , t = e.value.trim();
    if (!t || !uo)
        return;
    e.disabled = !0;
    let n = await k.sendDM(uo.uid, t);
    e.disabled = !1,
    n.ok ? (e.value = "",
    e.focus()) : g("Couldn't send. Wait a second and try again.")
}
h("#dm-send").addEventListener("click", Zb);
h("#dm-input").addEventListener("keydown", e => {
    e.key === "Enter" && Zb(),
    e.stopPropagation()
}
);
h("#dm-input").addEventListener("keyup", e => e.stopPropagation());
h("#dm-close").addEventListener("click", T0);
h("#dm-back").addEventListener("click", () => {
    T0(),
    Vb()
}
);
h("#inbox-close").addEventListener("click", () => h("#inbox-sheet").hidden = !0);
var fr = "new"
  , Li = "TVYXBUnhyHhgnJEMAv1JRu5GcO03";
async function tu() {
    re(),
    h("#fb-post").style.display = m ? "" : "none",
    h("#fb-sheet").hidden = !1,
    nl()
}
async function nl() {
    let e = h("#fb-list");
    e.innerHTML = '<p class="sheet-sub">Loading\u2026</p>';
    try {
        let t = fr === "done" ? await va(ka(mt(W, "feedback"), $l("done", "==", !0), _i(60))) : await va(ka(mt(W, "feedback"), Bi("createdAt", "desc"), _i(60)))
          , n = [];
        t.forEach(a => n.push({
            id: a.id,
            ...a.data()
        })),
        fr === "done" ? n.sort( (a, i) => (i.doneAt?.toMillis?.() || 0) - (a.doneAt?.toMillis?.() || 0)) : n = n.filter(a => !a.done),
        n = n.slice(0, 30),
        e.innerHTML = n.length ? "" : `<p class="sheet-sub">${fr === "done" ? "Nothing marked done yet." : "Nothing yet. Tell us what's on your mind."}</p>`;
        let o = m ? await Promise.all(n.map(a => Xn(ee(W, "feedback", a.id, "votes", m.uid)).then(i => i.exists() ? i.data().v : 0).catch( () => 0))) : n.map( () => 0);
        n.forEach( (a, i) => e.appendChild(rE(a, o[i])))
    } catch (t) {
        console.warn("feedback", t),
        e.innerHTML = `<p class="sheet-sub">Couldn't load feedback.</p>`
    }
}
function rE(e, t) {
    let n = document.createElement("div");
    n.className = "fb-item",
    n.innerHTML = '<div class="fb-votes"><button type="button" class="up" aria-label="Vote up"></button><b></b><button type="button" class="down" aria-label="Vote down"></button></div><div class="fb-body"><p></p><small></small></div>';
    let[o,a] = n.querySelectorAll(".fb-votes button");
    o.innerHTML = xe("trending-up", 16),
    a.innerHTML = xe("trending-up", 16),
    a.firstChild.style.transform = "scaleY(-1)",
    n.querySelector("p").textContent = e.text;
    let i = e.createdAt?.toDate ? e.createdAt.toDate().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short"
    }) : "";
    n.querySelector("small").textContent = `@${e.username} \xB7 ${i}`;
    let r = n.querySelector(".fb-body");
    if (e.done && n.querySelector("p").insertAdjacentHTML("afterbegin", '<span class="fb-done">Done</span> '),
    e.reply) {
        let u = document.createElement("div");
        u.className = "fb-reply",
        u.innerHTML = "<b>Abuja Life team</b><span></span>",
        u.lastChild.textContent = e.reply,
        r.appendChild(u)
    }
    if (m?.uid === Li) {
        let u = document.createElement("button");
        u.type = "button",
        u.className = "fb-reply-btn",
        u.textContent = e.reply ? "Edit reply" : "Reply",
        u.onclick = () => {
            if (r.querySelector(".fb-reply-form"))
                return;
            let c = document.createElement("div");
            c.className = "fb-reply-form",
            c.innerHTML = '<textarea maxlength="500" placeholder="Reply as the Abuja Life team"></textarea><div><button type="button" class="send">Post reply</button><button type="button" class="cancel">Cancel</button></div>';
            let p = c.querySelector("textarea");
            p.value = e.reply || "",
            p.addEventListener("keydown", f => f.stopPropagation()),
            p.addEventListener("keyup", f => f.stopPropagation()),
            c.querySelector(".cancel").onclick = () => c.remove(),
            c.querySelector(".send").onclick = async () => {
                let f = p.value.trim().slice(0, 500);
                c.querySelector(".send").disabled = !0;
                try {
                    await mn(ee(W, "feedback", e.id), {
                        reply: f,
                        replyAt: ie()
                    }),
                    g(f ? "Reply posted." : "Reply removed."),
                    nl()
                } catch (b) {
                    console.warn("reply", b.code || b),
                    g("Couldn't post the reply. Are the new rules published?"),
                    c.querySelector(".send").disabled = !1
                }
            }
            ,
            r.appendChild(c),
            p.focus()
        }
        ,
        r.appendChild(u);
        let d = document.createElement("button");
        d.type = "button",
        d.className = "fb-reply-btn",
        d.style.marginLeft = "14px",
        d.textContent = e.done ? "Not done" : "Mark done",
        d.onclick = async () => {
            d.disabled = !0;
            try {
                await mn(ee(W, "feedback", e.id), {
                    done: !e.done,
                    doneAt: ie()
                }),
                g(e.done ? "Moved back to the list." : "Marked done. It's in the Done tab now."),
                nl()
            } catch (c) {
                console.warn("done", c.code || c),
                g("Couldn't update. Are the new rules published?"),
                d.disabled = !1
            }
        }
        ,
        r.appendChild(d)
    }
    let s = () => {
        n.querySelector("b").textContent = e.score,
        o.setAttribute("aria-pressed", t === 1),
        a.setAttribute("aria-pressed", t === -1)
    }
    ;
    s();
    let l = async u => {
        if (!m)
            return ne("vote on feedback");
        let d = t === u ? 0 : u
          , c = e.up + (d === 1) - (t === 1)
          , p = e.down + (d === -1) - (t === -1)
          , f = Xt(W)
          , b = ee(W, "feedback", e.id)
          , $ = ee(W, "feedback", e.id, "votes", m.uid);
        f.update(b, {
            up: c,
            down: p,
            score: c - p
        }),
        d ? f.set($, {
            v: d
        }) : f.delete($),
        o.disabled = a.disabled = !0;
        try {
            await f.commit(),
            Object.assign(e, {
                up: c,
                down: p,
                score: c - p
            }),
            t = d,
            s()
        } catch (T) {
            console.warn("vote", T),
            g("Couldn't save your vote. Refresh and try again.")
        }
        o.disabled = a.disabled = !1
    }
    ;
    return o.onclick = () => l(1),
    a.onclick = () => l(-1),
    n
}
h("#fb-send").addEventListener("click", async () => {
    if (!m)
        return ne("send feedback");
    let e = h("#fb-text").value.trim();
    if (e.length < 3)
        return g("Write a little more.");
    h("#fb-send").disabled = !0;
    try {
        let t = Xt(W);
        t.set(ee(mt(W, "feedback")), {
            by: m.uid,
            username: m.player.username,
            text: e,
            up: 0,
            down: 0,
            score: 0,
            createdAt: ie()
        }),
        await t.commit(),
        h("#fb-text").value = "",
        g("Thanks! The team will read it."),
        fr = "new",
        document.querySelectorAll(".fb-tabs button").forEach(n => n.setAttribute("aria-pressed", n.dataset.sort === fr)),
        nl()
    } catch (t) {
        console.warn("post", t),
        g("Couldn't post. Try again.")
    }
    h("#fb-send").disabled = !1
}
);
h("#fb-text").addEventListener("keydown", e => e.stopPropagation());
h("#fb-text").addEventListener("keyup", e => e.stopPropagation());
document.querySelectorAll(".fb-tabs button").forEach(e => e.addEventListener("click", () => {
    fr = e.dataset.sort,
    document.querySelectorAll(".fb-tabs button").forEach(t => t.setAttribute("aria-pressed", t === e)),
    nl()
}
));
h("#fb-close").addEventListener("click", () => h("#fb-sheet").hidden = !0);
h("#ticker").addEventListener("click", tu);
function ne(e) {
    re(),
    h("#soon-title").textContent = "Create your character",
    h("#soon-text").textContent = `Guests can only walk around. Create your character to ${e}, and you'll start with \u20A6150,000.`,
    h(".soon-tag").outerHTML = '<a class="soon-tag join" href="/play/create">Create your character</a>',
    h("#soon-sheet").hidden = !1
}
function sE() {
    let e = !0;
    Yu(ee(W, "players", m.uid), async t => {
        let n = t.data();
        if (!n || t.metadata.hasPendingWrites || typeof n.money != "number")
            return;
        let o = n.money - A;
        if (Object.assign(m.player, n),
        n.jail || delete m.player.jail,
        n.job || delete m.player.job,
        n.owed || delete m.player.owed,
        Wx(n),
        o && (A = n.money,
        _e()),
        Ik(n),
        zk(n),
        n.jail && w !== "cell" && Mu() > 0 && te?.stage !== "search" && te?.stage !== "arresting" && Bw(),
        e) {
            e = !1;
            return
        }
        if (o > 0)
            try {
                let i = (await va(ka(mt(W, "players", m.uid, "transactions"), Bi("createdAt", "desc"), _i(1)))).docs[0]?.data();
                i?.reason !== "salary" && g(`+${y(o)} \xB7 ${i?.label || "Money received"}`, 6e3)
            } catch {}
    }
    , t => console.warn("account watch", t.code || t))
}
async function ol(e, t, n) {
    if (e > A)
        return !1;
    let o = A;
    if (A -= e,
    _e(),
    !m)
        return A = o,
        _e(),
        ne("pay for things"),
        !1;
    try {
        let a = Xt(W);
        return a.update(ee(W, "players", m.uid), {
            money: A,
            updatedAt: ie()
        }),
        a.set(ee(mt(W, "players", m.uid, "transactions")), {
            amount: -e,
            reason: t,
            label: n.slice(0, 60),
            balance: A,
            createdAt: ie()
        }),
        await a.commit(),
        m.player.money = A,
        !0
    } catch (a) {
        return console.error(a),
        A = o,
        _e(),
        g("Couldn't take payment. Check your connection."),
        !1
    }
}
async function Ou() {
    if (!m)
        return ne("get your own wallet");
    re(),
    h("#wallet-balance").textContent = y(A),
    h("#wallet-sub").textContent = m ? "Saved to your account." : "Practice money on this device. Create a character to keep real money.";
    let e = h("#wallet-list");
    if (e.innerHTML = '<p class="sheet-sub">Loading\u2026</p>',
    h("#wallet-sheet").hidden = !1,
    lE(),
    !m) {
        e.innerHTML = '<p class="sheet-sub">No history for guests.</p>';
        return
    }
    try {
        let t = await va(ka(mt(W, "players", m.uid, "transactions"), Bi("createdAt", "desc"), _i(20)));
        e.innerHTML = t.empty ? '<p class="sheet-sub">No spending yet. Take a taxi!</p>' : "",
        t.forEach(n => {
            let o = n.data()
              , a = o.createdAt?.toDate ? o.createdAt.toDate().toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
                hour: "2-digit",
                minute: "2-digit"
            }) : ""
              , i = document.createElement("div");
            i.className = "tx",
            i.innerHTML = '<span><b></b><small></small></span><span class="amt"></span>',
            i.querySelector("b").textContent = o.label || o.reason,
            i.querySelector("small").textContent = a;
            let r = i.querySelector(".amt");
            o.amount > 0 ? (r.textContent = "+" + y(o.amount),
            r.classList.add("in")) : r.textContent = "\u2212" + y(-o.amount),
            e.appendChild(i)
        }
        )
    } catch (t) {
        console.error(t),
        e.innerHTML = `<p class="sheet-sub">Couldn't load history.</p>`
    }
}
function lE() {
    let e = h("#wallet-topup");
    e.innerHTML = "";
    for (let t of ip) {
        let n = document.createElement("button");
        n.type = "button",
        n.innerHTML = "<b></b><small></small>",
        n.children[0].textContent = y(t * ap),
        n.children[1].textContent = `for ${y(t)}`,
        n.onclick = () => cE(t, n),
        e.appendChild(n)
    }
}
async function cE(e, t) {
    for (let n of h("#wallet-topup").children)
        n.disabled = !0;
    g("Opening the payment page\u2026");
    try {
        let n = await $e(Te).currentUser.getIdToken()
          , o = await fetch("/api/perks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + n
            },
            body: JSON.stringify({
                action: "topup",
                amount: e
            })
        })
          , a = await o.json().catch( () => ({}));
        if (!o.ok || !a.url)
            throw new Error(a.error || "Couldn't open the payment page. Try again.");
        try {
            localStorage.setItem("al-topup", JSON.stringify({
                id: a.id,
                t: Date.now()
            }))
        } catch {}
        location.href = a.url
    } catch (n) {
        g(n.message, 5e3);
        for (let o of h("#wallet-topup").children)
            o.disabled = !1
    }
}
var uE = 0;
async function dE() {
    if (m)
        try {
            let e = await $e(Te).currentUser.getIdToken()
              , n = await (await fetch("/api/perks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + e
                },
                body: JSON.stringify({
                    action: "myPayments"
                })
            })).json().catch( () => ({}))
              , o = {
                topup: M0,
                biz: Yy,
                run: Qy,
                ad: Uy
            };
            for (let a of n.pending || [])
                await o[a.type]?.(a.id),
                await new Promise(i => setTimeout(i, 1500))
        } catch {}
}
async function M0(e) {
    let t = (new URLSearchParams(location.search).get("topup") || "").split("?")[0] || null
      , n = null;
    try {
        n = JSON.parse(localStorage.getItem("al-topup") || "null")
    } catch {}
    let o = e || t || (n && Date.now() - n.t < 24 * 36e5 ? n.id : null);
    if (t && history.replaceState(null, "", location.pathname),
    !!o)
        try {
            let a = await $e(Te).currentUser.getIdToken()
              , i = await fetch("/api/perks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + a
                },
                body: JSON.stringify({
                    action: "topupVerify",
                    id: o
                })
            })
              , r = await i.json().catch( () => ({}));
            if (!r.waiting)
                try {
                    localStorage.removeItem("al-topup")
                } catch {}
            if (i.ok && typeof r.money == "number" && (A = r.money,
            m.player.money = A,
            _e()),
            r.waiting && ++uE < 20 && setTimeout(M0, 3e4),
            r.waiting && !t)
                return;
            setTimeout( () => g(r.msg || r.error || "Couldn't confirm your payment. Open the game again in a few minutes.", 6e3), 2e3)
        } catch {}
}
h("#wallet").addEventListener("click", Ou);
h("#wallet-close").addEventListener("click", () => h("#wallet-sheet").hidden = !0);
function g(e, t=2600) {
    let n = h("#toast");
    n.textContent = e,
    n.hidden = !1,
    clearTimeout(g.t),
    g.t = setTimeout( () => n.hidden = !0, t)
}
function hE(e) {
    U = up(e.roads);
    let t = e.landmarks;
    Jt = [["City Gate", e.gate ? [e.gate.x, e.gate.z] : null], ["National Mosque", [0, 95]], ["IbroFish", t.IbroFish], ["Eagle Square", t["Eagle Square"]], ["Millennium Park", t["Millennium Park"]], ["National Christian Centre", t["National Christian Centre"]], ["Magic Land", t["Magic Land"]], ["Ceddi Plaza", t["Ceddi Plaza"]], ["Yar'Adua Centre", t["Shehu Musa Yar'Adua Centre"]]].filter( ([,i]) => i).map( ([i,[r,s]]) => ({
        name: i,
        x: r,
        z: s,
        node: U.nearest(r, s),
        kind: "Popular"
    }));
    let o = new Set(Jt.map(i => i.name.toLowerCase()));
    Ro = [...Jt];
    for (let i of e.buildings) {
        if (!i.n || o.has(i.n.toLowerCase()))
            continue;
        o.add(i.n.toLowerCase());
        let r = i.p.reduce( (l, u) => l + u[0], 0) / i.p.length
          , s = i.p.reduce( (l, u) => l + u[1], 0) / i.p.length;
        Ro.push({
            name: i.n.replace(/\b([A-Z])([A-Z]+)\b/g, (l, u, d) => l.length > 4 ? u + d.toLowerCase() : l),
            x: r,
            z: s,
            kind: "Building"
        })
    }
    let a = new Map;
    for (let i of e.roads)
        i.n && i.w >= 6 && (a.has(i.n) || a.set(i.n, []),
        a.get(i.n).push(...i.p));
    for (let[i,r] of a) {
        if (o.has(i.toLowerCase()))
            continue;
        o.add(i.toLowerCase());
        let[s,l] = r[Math.floor(r.length / 2)];
        Ro.push({
            name: i,
            x: s,
            z: l,
            kind: "Street"
        })
    }
}
function xa(e, t=2.4) {
    let n = e.map( ([a,i], r) => {
        let s = e[Math.max(0, r - 1)]
          , l = e[Math.min(e.length - 1, r + 1)]
          , u = l[0] - s[0]
          , d = l[1] - s[1]
          , c = Math.hypot(u, d) || 1;
        return [a - d / c * t, i + u / c * t]
    }
    )
      , o = [0];
    for (let a = 1; a < n.length; a++)
        o.push(o[a - 1] + Math.hypot(n[a][0] - n[a - 1][0], n[a][1] - n[a - 1][1]));
    return {
        pts: n,
        cum: o,
        total: o[o.length - 1]
    }
}
function Jn(e, t) {
    let {pts: n, cum: o} = e
      , a = 1;
    for (; a < o.length - 1 && o[a] < t; )
        a++;
    let i = (t - o[a - 1]) / (o[a] - o[a - 1] || 1)
      , r = n[a - 1]
      , s = n[a];
    return {
        x: r[0] + (s[0] - r[0]) * i,
        z: r[1] + (s[1] - r[1]) * i,
        h: Math.atan2(s[0] - r[0], s[1] - r[1])
    }
}
var xl = e => e === "keke" ? "Keke" : "Taxi";
function Bu(e="taxi", t=null) {
    if (w === "venue" && un(),
    !m)
        return ne(e === "keke" ? "call a keke" : "call taxis");
    if (w === "home" || w === "street")
        return re(),
        Nr();
    if (w === "club")
        return re(),
        g("Leave the club first, then call a taxi outside.");
    if (w === "cell")
        return re(),
        g("You're locked up.");
    if (P?.driving)
        return g("You're driving. Get out of your car to call a taxi.");
    if (!mo() || !U)
        return;
    if (!zi(e).length)
        return re(),
        uf(e);
    re();
    let n = t ? ( () => {
        let o = gn(U, U.nearest(x.x, x.z), U.nearest(t.x, t.z));
        return o ? Fo(o) : 0
    }
    )() : 0;
    lf(e, n).then(o => {
        if (!o || !mo())
            return;
        let a = fE();
        if (a) {
            let i = Oe(e === "keke" ? Hl() : ji());
            e !== "keke" && yu(i),
            J.add(i);
            let r = Jn(a, 0);
            i.position.set(r.x, 0, r.z),
            i.rotation.y = r.h,
            B = {
                stage: "coming",
                kind: e,
                preset: t,
                co: o,
                route: a,
                s: 0,
                speed: a.total / 2,
                mesh: i
            };
            let s = h("#taxi");
            s.hidden = !1,
            s.disabled = !0,
            s.textContent = `${xl(e)} coming\u2026`;
            return
        }
        if (B = {
            stage: "waiting",
            kind: e,
            preset: t,
            co: o
        },
        t)
            return e1(t);
        ha(e)
    }
    )
}
function fE() {
    let e = U.nearest(x.x, x.z);
    if (e < 0)
        return null;
    let[t,n] = U.nodes[e];
    if (Math.hypot(t - x.x, n - x.z) > 40)
        return null;
    for (let o = 0; o < 8; o++) {
        let a = Math.random() * Math.PI * 2
          , i = U.nearest(t + Math.cos(a) * 60, n + Math.sin(a) * 60);
        if (i < 0 || i === e)
            continue;
        let r = gn(U, i, e);
        if (!r || r.length < 2)
            continue;
        let s = xa(r);
        if (s.total >= 25 && s.total <= 90)
            return s
    }
    return null
}
var xn = "taxi";
function ha(e="taxi") {
    xn = e,
    h("#sheet-title").textContent = e === "car" ? "Drive to\u2026" : e === "trek" ? "Trek to\u2026" : "Where to?",
    h("#sheet-sub").textContent = e === "car" ? "Pick a place and you drive straight there. Free." : e === "trek" ? "Walk there for free, about 3\xD7 your normal pace. Tap Stop any time." : B?.co ? `${B.co.name} \xB7 \u20A6${B.co.menu.km} per km${e === "keke" ? " \xB7 keke napep" : ""}.` : "";
    let t = h("#dest-search");
    t.value = "",
    Mc(Jt),
    h("#sheet").hidden = !1,
    h(".help").classList.add("gone"),
    t.oninput = () => {
        clearTimeout(t.t),
        t.t = setTimeout( () => {
            let n = t.value.trim().toLowerCase();
            if (!n)
                return Mc(Jt);
            let o = n.split(/\s+/)
              , a = Ro.map(i => {
                let r = i.name.toLowerCase();
                return o.every(s => r.includes(s)) ? [r.startsWith(n) ? 0 : r.split(/[\s\-&,.]+/).some(s => s.startsWith(o[0])) ? 1 : 2, i] : null
            }
            ).filter(Boolean).sort( (i, r) => i[0] - r[0] || i[1].name.localeCompare(r[1].name)).slice(0, 8).map(i => i[1]);
            Mc(a, n)
        }
        , 150)
    }
}
var Vh = null
  , Qb = null;
function pE(e) {
    let[t,n] = w === "city" || !m ? [x.x, x.z] : Kn(Re[Hn()].at);
    return [...e].sort( (o, a) => au(a.x, a.z) - au(o.x, o.z) || Math.hypot(o.x - t, o.z - n) - Math.hypot(a.x - t, a.z - n))
}
var Mc = (e, t) => {
    Vh = e,
    Qb = t,
    ou();
    let n = t ? e : pE(e);
    return xn === "home" ? gE(n, t) : yE(n, t)
}
  , zo = null
  , nu = 0
  , fc = !1;
function ou() {
    fc || Date.now() - nu < 3e4 || (fc = !0,
    fetch("/api/crowds").then(e => e.ok ? e.json() : null).then(e => {
        fc = !1,
        e?.cells && (zo = e.cells,
        nu = Date.now(),
        nr?.refresh(),
        !h("#sheet").hidden && Vh && Mc(Vh, Qb))
    }
    ).catch( () => {
        fc = !1
    }
    ))
}
var us = null
  , sy = null;
function mE() {
    if (sy === zo)
        return us;
    us = {},
    sy = zo;
    for (let[e,t] of Object.entries(zo || {})) {
        let[n,o] = e.split("_").map(r => +r * 100 + 50)
          , a = m0(n, o)
          , i = a ? Math.floor(a.x / 100) + "_" + Math.floor(a.z / 100) : e;
        us[i] = (us[i] || 0) + t
    }
    return us
}
function au(e, t, n=3.2) {
    if (!zo)
        return 0;
    let o = mE()
      , a = Math.floor(e / 100)
      , i = Math.floor(t / 100)
      , r = Math.ceil(n)
      , s = 0;
    for (let l = -r; l <= r; l++)
        for (let u = -r; u <= r; u++) {
            let d = o[a + l + "_" + (i + u)];
            d && Math.hypot(l, u) <= n && (s += d)
        }
    return s
}
var Jh = e => {
    let t = au(e.x, e.z);
    return t ? `${t} ${t === 1 ? "person" : "people"} there` : ""
}
  , Ir = null;
function ly(e) {
    Ir = {
        md: e ? Ry[e] : null,
        c: e ? null : da()
    },
    E(),
    ha("home");
    let {md: t, c: n} = Ir;
    h("#sheet-title").textContent = "Where to?",
    h("#sheet-sub").textContent = n ? `Drive your ${wl(n)} for free.` : `${t.name} from ${Ze(Hn())} \xB7 ${t.small.split(" \xB7 ")[1]}. You have ${y(A)}.`
}
function gE(e, t) {
    let n = h("#dest")
      , [o,a] = Kn(Re[Hn()].at)
      , {md: i, c: r} = Ir;
    if (n.innerHTML = "",
    h(".sheet-label").textContent = t ? "Results" : "Busiest right now",
    !e.length) {
        n.innerHTML = '<p class="sheet-sub">No place found. Try another name, e.g. "Club", "Ceddi" or "Hospital".</p>';
        return
    }
    for (let s of e) {
        let l = Math.hypot(s.x - o, s.z - a) * 1.3
          , u = r ? 0 : i.fare(l)
          , d = document.createElement("button");
        d.type = "button",
        d.className = "dest",
        d.innerHTML = '<span><b></b><small></small></span><span class="fare"></span>',
        d.querySelector("b").textContent = s.name,
        d.querySelector("small").textContent = [t ? s.kind : "", fa(l) + " km", Jh(s), u > A ? "not enough money" : ""].filter(Boolean).join(" \xB7 "),
        d.querySelector(".fare").textContent = r ? "Drive" : u ? y(u) : "Free",
        d.disabled = u > A,
        d.onclick = () => Kh(s, u),
        n.appendChild(d)
    }
}
async function Kh(e, t) {
    let {md: n, c: o} = Ir;
    h("#sheet").hidden = !0;
    let[a,i] = Kn(Re[Hn()].at);
    if (!o && (t > 0 || n.reason === "taxi") && !await Hy(n, t, `${n.name} to ${e.name}`.slice(0, 60), Math.hypot(e.x - a, e.z - i) * 1.3))
        return;
    await Fe(o ? `Driving to ${e.name}\u2026` : `${n.verb} to ${e.name}\u2026`, o ? 1800 : n.ms);
    let r = U.nearest(e.x, e.z)
      , [s,l] = r >= 0 ? U.nodes[r] : Qo(e.x, e.z);
    Da(s, l, e.x, e.z),
    o && _r(o, !0),
    g(o ? `Welcome to ${e.name}. Your car is parked here.` : `Welcome to ${e.name}`)
}
function yE(e, t) {
    let n = U.nearest(x.x, x.z)
      , o = h("#dest")
      , a = C0();
    if (o.innerHTML = "",
    h(".sheet-label").textContent = t ? "Results" : "Busiest right now",
    !e.length) {
        o.innerHTML = '<p class="sheet-sub">No place found. Try another name, e.g. "Ceddi", "Transcorp" or "Ahmadu Bello".</p>';
        return
    }
    for (let i of e) {
        if (i.far) {
            let p = Math.hypot(i.x - x.x, i.z - x.z) * 1.3 / 1e3
              , f = document.createElement("button");
            f.type = "button",
            f.className = "dest",
            f.innerHTML = '<span><b></b><small></small></span><span class="fare"></span>',
            f.querySelector("b").textContent = i.name,
            f.querySelector("small").textContent = [`Outside the city \xB7 ${(p * ni).toFixed(1)} km`, Jh(i)].filter(Boolean).join(" \xB7 "),
            f.querySelector(".fare").textContent = "Go",
            f.onclick = () => {
                B?.stage === "waiting" ? o1() : h("#sheet").hidden = !0,
                rf(i.x, i.z, i.name)
            }
            ,
            o.appendChild(f);
            continue
        }
        i.node === void 0 && (i.node = U.nearest(i.x, i.z));
        let r = Math.hypot(i.x - x.x, i.z - x.z) < 120
          , s = r ? null : gn(U, n, i.node);
        !s && !r && xn === "trek" && (s = [[x.x, x.z], [i.x, i.z]]);
        let l = B?.co
          , u = s ? Fo(s) / 1e3 : 0
          , d = !s || !l || xn === "car" || xn === "trek" ? 0 : Ti(l, u * 1e3)
          , c = document.createElement("button");
        c.type = "button",
        c.className = "dest",
        c.innerHTML = `<span><b></b><small></small></span><span class="fare">${s ? xn === "car" || xn === "trek" || !d ? "Free" : "\u20A6" + d.toLocaleString() : ""}</span>`,
        c.querySelector("b").textContent = i.name,
        c.querySelector("small").textContent = [t ? i.kind : "", r ? "You're here" : s ? (u * ni).toFixed(1) + " km" : "No road route", Jh(i), s && d > a ? "not enough money" : ""].filter(Boolean).join(" \xB7 "),
        c.disabled = r || !s || d > a,
        c.onclick = () => xn === "car" ? Nb(i, s) : xn === "trek" ? f0(i, s) : t1(i, s, d),
        o.appendChild(c)
    }
}
async function e1(e) {
    let t = gn(U, U.nearest(x.x, x.z), U.nearest(e.x, e.z));
    if (!t)
        return ha(B.kind);
    let n = Ti(B.co, Fo(t));
    if (n > A)
        return g("Not enough money for that trip."),
        ha(B.kind);
    xn = B.kind,
    await t1({
        name: e.name,
        x: e.x,
        z: e.z
    }, t, n, e.then)
}
function $0(e, t) {
    let n = xa(e)
      , o = Jn(n, n.total)
      , a = o.x + Math.cos(o.h) * 3
      , i = o.z - Math.sin(o.h) * 3
      , r = !De(a, i);
    x.set(r ? a : o.x, 0, r ? i : o.z),
    j = o.h,
    ce = null,
    de.visible = !1,
    le && (le.group.visible = !0);
    let s = new Z(Math.sin(j),0,Math.cos(j));
    dt(s, 22, 10, 6, 2),
    k?.sendNow()
}
async function t1(e, t, n, o) {
    h("#sheet").hidden = !0;
    let a = B?.kind || "taxi"
      , i = B?.co;
    if (!i || !await cf(i, Fo(t), a, `${xl(a)} to ${e.name} \xB7 ${i.name}`)) {
        h("#sheet").hidden = !1;
        return
    }
    ln("ride");
    let r = xa(t)
      , s = B?.mesh || ( () => {
        let l = Oe(a === "keke" ? Hl() : ji());
        return a !== "keke" && yu(l),
        J.add(l),
        l
    }
    )();
    Ho && s !== Ho && (Ho.visible = !1),
    B = {
        stage: "riding",
        route: r,
        s: 0,
        t: 0,
        dur: Math.min(a === "keke" ? 20 : 10, Math.max(3, r.total / 12)),
        dest: e,
        kind: a,
        co: i,
        then: o,
        mesh: s,
        trafficV: B?.trafficV
    },
    le && (le.group.visible = !1),
    ce = null,
    de.visible = !1,
    h("#skip").hidden = !1,
    h("#skip").disabled = !1,
    bE(),
    k?.sendNow(),
    g(`Paid ${y(n)} \xB7 heading to ${e.name}`)
}
function n1() {
    let e = B.early ? null : B.then
      , t = B.early ? null : B.dest;
    setTimeout( () => e?.(), 400);
    let n = Jn(B.route, B.route.total)
      , o = n.x + Math.cos(n.h) * 3
      , a = n.z - Math.sin(n.h) * 3;
    x.set(De(o, a) ? n.x : o, 0, De(o, a) ? n.z : a),
    le && (le.group.visible = !0),
    g(B.early ? "You got off here." : B.paidSkip ? `There in no time (${y(B.paidSkip)}) \xB7 welcome to ${B.dest.name}` : `Welcome to ${B.dest.name}`),
    B = {
        stage: "leaving",
        route: B.route,
        s: B.route.total,
        speed: 18,
        leave: 4,
        mesh: B.mesh,
        trafficV: B.trafficV
    },
    h("#skip").hidden = !0,
    h("#taxi").hidden = !0,
    ce = null,
    de.visible = !1,
    db(t)
}
function o1() {
    h("#sheet").hidden = !0,
    !(xn === "car" || xn === "trek" || xn === "home") && (Ho && (Ho.visible = !1),
    _u(),
    B = null,
    h("#taxi").hidden = !0)
}
function wE(e) {
    let t = B?.mesh || Ho;
    if (!(!B || !t))
        if (st && (e *= +(new URLSearchParams(location.search).get("timescale") || 1)),
        B.stage === "coming") {
            B.s = Math.min(B.route.total, B.s + B.speed * e);
            let n = Jn(B.route, B.s);
            t.position.set(n.x, 0, n.z),
            t.rotation.y = n.h,
            B.s >= B.route.total && (B.stage = "waiting",
            h("#taxi").textContent = `${xl(B.kind)} here`,
            h("#taxi").disabled = !1,
            B.preset ? e1(B.preset) : ha(B.kind))
        } else if (B.stage === "riding") {
            B.t = Math.min(B.dur, B.t + e),
            B.s = B.route.total * (1 - Math.cos(Math.PI * B.t / B.dur)) / 2;
            let n = Jn(B.route, B.s);
            t.position.set(n.x, 0, n.z),
            t.rotation.y = n.h,
            x.set(n.x, 0, n.z),
            j = n.h;
            let o = B.kind === "keke" ? Uu(B.route.total - B.s) : qu
              , a = h("#skip");
            o !== B.skipFee && (B.skipFee = o,
            a.textContent = `Get there now \xB7 ${y(o)}`),
            B.paying || (a.disabled = o > C0()),
            B.t >= B.dur && n1()
        } else
            B.stage === "leaving" && (B.leave -= e,
            t.position.x += Math.sin(t.rotation.y) * B.speed * e,
            t.position.z += Math.cos(t.rotation.y) * B.speed * e,
            B.leave <= 0 && (t.visible = !1,
            _u(),
            B = null))
}
h("#taxi").addEventListener("click", () => {
    B?.stage === "waiting" ? ha(B.kind) : B?.stage === "riding" && xE()
}
);
function mo() {
    return (B?.stage === "waiting" || B?.stage === "coming") && (h("#sheet").hidden = !0,
    Ho && (Ho.visible = !1),
    _u(),
    B = null,
    h("#taxi").hidden = !0),
    !B
}
function _u() {
    B?.trafficV ? et.reclaim(B.trafficV) : B?.mesh && J.remove(B.mesh)
}
function bE() {
    let e = h("#taxi");
    e.hidden = !1,
    e.disabled = !1,
    e.textContent = "Get off here"
}
function xE() {
    B?.stage === "riding" && (B.route = {
        ...B.route,
        total: B.s
    },
    B.pauses = [],
    B.early = !0,
    n1())
}
h("#sheet-close").addEventListener("click", o1);
h("#skip").addEventListener("click", async () => {
    if (P?.auto) {
        let o = P.auto
          , a = fp(o.route.total - o.s);
        if (a > A)
            return g("Not enough money to get there instantly. Enjoy the drive.");
        if (h("#skip").disabled = !0,
        !await ol(a, "taxi-skip", `Instant arrival \xB7 ${o.dest.name}`.slice(0, 60))) {
            h("#skip").disabled = !1;
            return
        }
        P?.auto === o && (o.phase = "arrive",
        o.t = 5);
        return
    }
    if (B?.stage !== "riding" || B.paying)
        return;
    let e = B
      , t = e.kind === "keke" ? Uu(e.route.total - e.s) : qu;
    if (t > C0()) {
        g("Not enough money to get there now. Enjoy the ride.");
        return
    }
    if (t < 100) {
        e.t = e.dur;
        return
    }
    e.paying = !0,
    h("#skip").disabled = !0;
    let n = e.co ? await Hi(e.co, "ride", t, e.kind, `Got there now \xB7 ${e.dest.name}`) : await ol(t, "taxi-skip", `Got there now \xB7 ${e.dest.name}`.slice(0, 60));
    e.paying = !1,
    !(!n || B !== e || e.stage !== "riding") && (e.paidSkip = t,
    e.t = e.dur)
}
);
var cy = performance.now()
  , uy = 0
  , Qi = new Z
  , ah = new Z
  , rt = new Z;
function a1() {
    requestAnimationFrame(a1);
    let e = performance.now()
      , t = Math.min((e - cy) / 1e3, .05);
    cy = e,
    uy += t;
    let n = uy;
    je.getWorldDirection(Qi),
    Qi.y = 0,
    Qi.normalize(),
    ah.crossVectors(Qi, je.up),
    rt.set(0, 0, 0),
    (Ht.has("w") || Ht.has("arrowup")) && rt.add(Qi),
    (Ht.has("s") || Ht.has("arrowdown")) && rt.sub(Qi),
    (Ht.has("d") || Ht.has("arrowright")) && rt.add(ah),
    (Ht.has("a") || Ht.has("arrowleft")) && rt.sub(ah),
    rt.lengthSq() > 0 ? (ce = null,
    de.visible = !1) : ce && (rt.subVectors(ce, x),
    rt.y = 0,
    rt.length() < .6 && (ce = null,
    de.visible = !1,
    rt.set(0, 0, 0)));
    let o = P?.driving && w === "city";
    Le && (rt.lengthSq() > 0 || ce) && In("You stopped trekking.");
    let a = performance.now() < ua;
    (B && B.stage === "riding" || o || Le || Be || a || te && te.stage !== "chase" && te.stage !== "approach") && (rt.set(0, 0, 0),
    te && (ce = null,
    de.visible = !1)),
    Le && kC(t),
    BC(n),
    o ? GC(t) : P && w === "city" && _C(),
    by(t),
    px(t),
    vv(t),
    Mx(t),
    uC(t),
    Kv(t),
    Xv(),
    w === "home" && (Ak(t),
    Yk(t)),
    w === "street" && dv(),
    w === "city" && lk(t, n),
    w === "city" && (TC(),
    O2(t),
    Tv(t),
    D2(t),
    Lv(t),
    Fv(t),
    et && (et.update(t, x),
    bC(t))),
    Pb(),
    SC(),
    Ne?.riding && (rt.set(0, 0, 0),
    zC(t));
    let i = rt.lengthSq() > 0 || !!Le;
    if (i) {
        let u = (Ht.has("shift") ? 24 : 14) * (Ef ? .6 : 1) * (performance.now() < Of ? 2.1 : 1) * (go() ? .5 : 1);
        rt.normalize().multiplyScalar(u * t);
        let d = w === "home" ? (p, f) => !me.isFree(p, f) : w === "club" ? (p, f) => !kn.isFree(p - Rt[0], f - Rt[1]) : w === "cell" ? (p, f) => !Oa.isFree(p - qo[0], f - qo[1]) : w === "street" ? uv : w === "venue" ? (p, f) => !ye.room.isFree(p - ye.at[0], f - ye.at[1]) : De;
        w === "home" && rt.multiplyScalar(.35),
        (w === "club" || w === "cell" || w === "street" || w === "venue") && rt.multiplyScalar(.5),
        d(x.x + rt.x, x.z + rt.z) ? d(x.x + rt.x, x.z) ? d(x.x, x.z + rt.z) ? (ce = null,
        de.visible = !1) : x.z += rt.z : x.x += rt.x : x.add(rt);
        let c = Math.atan2(rt.x, rt.z);
        j += Math.atan2(Math.sin(c - j), Math.cos(c - j)) * Math.min(1, t * 12)
    }
    if (hs += ((i ? 1 : 0) - hs) * Math.min(1, t * 10),
    ta && i && zn(!1),
    St && (i || w !== "home" && w !== "venue") && (St = !1),
    w === "venue" && Df(),
    Be && hC(n),
    le && (le.group.rotation.z = a && !oa ? 1.45 : le.group.rotation.z > 1.4 ? 0 : le.group.rotation.z),
    le && (le.group.rotation.order = "YXZ",
    le.group.rotation.x = oa ? -Math.PI / 2 : 0),
    w === "city") {
        tC(t),
        nC(t);
        let u = !P?.driving && !B && k?.carHit(x);
        u && gb(`@${u.name}'s car`)
    }
    if (le) {
        if (le.group.position.copy(x),
        le.group.rotation.y = j + (ta ? Math.sin(n * 2.7) * .4 : 0),
        Be) {
            le.tick(n * 4, 1);
            let u = Math.max(0, Math.sin(n * 14)) * .45;
            le.group.position.x += Math.sin(j) * u,
            le.group.position.z += Math.cos(j) * u
        } else
            ta ? (le.tick(n * 3, 1),
            le.group.position.y = Math.abs(Math.sin(n * 5.45)) * .12) : le.tick(Le ? n * 3 : n * (hs > .1 ? 1.7 : 1), hs);
        St && (le.group.position.y = w === "venue" && ye?.room.seatY != null ? ye.room.seatY : -.2),
        oa && (le.group.position.y = lp)
    }
    w === "club" && kn && kn.tick(n, No.beat()),
    Mo.length && ek(t),
    lr.length && (w !== "club" ? Z2() : Q2(t)),
    w === "venue" && ye?.room.tick && ye.room.tick(n),
    w === "city" && (uh && uh.update(t, n, x),
    wE(t)),
    k && k.update(t, n, je),
    de.rotation.z += t * 2;
    for (let u of my)
        u.rotation.z += t * .15;
    let r = w === "home" ? yy(x) : x
      , s = r.clone().sub(Rc);
    if (X.target.add(s),
    je.position.add(s),
    Rc.copy(r),
    o ? ny(t, P.v) : Ne?.riding ? ny(t, Ne.v) : !(w === "home" && Ao) && !Qe?.big && X.update(),
    w === "home" && Ao && Iv(t),
    Qe?.big && jv(t),
    w === "home") {
        wt.render(Mt, je),
        ut && Pt && Pt.render(Yc, je),
        Fm();
        return
    }
    let l = Vt.userData.dir || new Z(.3,1,.5);
    Vt.position.copy(x).addScaledVector(l, 250),
    Vt.target.position.copy(x);
    for (let u of py) {
        let d = je.position.distanceTo(u.position);
        u.scale.copy(u.userData.base).multiplyScalar(Dr.clamp(d / 120, .6, 4))
    }
    wt.render(w === "home" ? Mt : J, je),
    (Qe || Sn) && Pt && Pt.render(Yc, je),
    Fm()
}
