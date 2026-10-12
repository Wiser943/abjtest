import {B as _, C as B, H as P, I as T, K as I, O as k, P as D, U as A, h as z, p as C, q as F} from "./chunk-YSUX7QB5.js";
var J = {
    saloon: {
        name: "Tokunbo saloon",
        price: 45e5,
        top: 32,
        accel: 7,
        colours: ["#c0392b", "#f4f4f0", "#1f6fd1", "#2b2b2b", "#9aa3ab"]
    },
    suv: {
        name: "Family SUV",
        price: 12e6,
        top: 34,
        accel: 7.5,
        colours: ["#f4f4f0", "#2b2b2b", "#5d7189", "#8a5a33", "#1f8a4c"]
    },
    executive: {
        name: "Executive saloon",
        price: 25e6,
        top: 42,
        accel: 9,
        colours: ["#1c1c1c", "#f4f4f0", "#7d8288", "#5b1a22", "#0f3d2e"]
    },
    luxury: {
        name: "Luxury SUV",
        price: 85e6,
        top: 44,
        accel: 10,
        colours: ["#0b0b0b", "#f4f4f0", "#c9a46b", "#3a3f4a", "#7a1f2b"]
    }
}
  , K = {
    "#c0392b": "Red",
    "#f4f4f0": "White",
    "#1f6fd1": "Blue",
    "#2b2b2b": "Black",
    "#9aa3ab": "Silver",
    "#5d7189": "Steel blue",
    "#8a5a33": "Brown",
    "#1f8a4c": "Green",
    "#1c1c1c": "Black",
    "#7d8288": "Grey",
    "#5b1a22": "Wine",
    "#0f3d2e": "Bottle green",
    "#0b0b0b": "Black",
    "#c9a46b": "Champagne",
    "#3a3f4a": "Gunmetal",
    "#7a1f2b": "Maroon",
    "#f2b705": "Yellow"
}
  , G = (l, a={}) => new A({
    color: l,
    flatShading: !0,
    roughness: .5,
    ...a
});
function L(l, a) {
    if (l === "keke")
        return W(a);
    let r = new C
      , s = G(a, {
        metalness: .25,
        roughness: .35
    })
      , u = G(2240573, {
        roughness: .15,
        metalness: .3
    })
      , x = G(1381653)
      , h = G(14211288, {
        metalness: .7,
        roughness: .25
    })
      , m = (n, o, E, p, R) => {
        let c = new B(n,o);
        return c.position.set(E, p, R),
        c.castShadow = !0,
        r.add(c),
        c
    }
      , e = {
        saloon: [1.8, 4.4, .75, 1.35],
        suv: [1.95, 4.7, .95, 1.7],
        executive: [1.9, 5, .72, 1.4],
        luxury: [2.05, 5, 1.05, 1.85]
    }[l] || [1.8, 4.4, .75, 1.35]
      , [t,d,f,i] = e
      , b = l === "suv" || l === "luxury";
    m(new T(t,f,d), s, 0, .45 + f / 2, 0);
    let g = b ? d * .62 : d * .5
      , S = b ? -.25 : -.2;
    m(new T(t * .92,i - f - .45 + .6,g), s, 0, .45 + f + (i - f - .45 + .6) / 2 - .05, S),
    m(new T(t * .94,(i - f - .45 + .6) * .62,g * .96), u, 0, .45 + f + (i - f - .45 + .6) * .42, S),
    m(new T(t * .9,.12,.08), h, 0, .75, d / 2 + .02);
    for (let n of [-1, 1])
        m(new T(.36,.16,.05), G(16774872, {
            emissive: 16773828,
            emissiveIntensity: .6
        }), n * (t / 2 - .3), .85, d / 2 + .01),
        m(new T(.36,.16,.05), G(12597547, {
            emissive: 12597547,
            emissiveIntensity: .4
        }), n * (t / 2 - .3), .9, -d / 2 - .01),
        m(new T(.18,.1,.25), s, n * (t / 2 + .06), .45 + f + .15, S + g / 2 - .2);
    (l === "luxury" || l === "executive") && m(new T(t * .5,.05,.08), h, 0, .55, -d / 2 - .02),
    b && m(new T(t * .8,.06,g * .7), x, 0, i + .62, S);
    for (let[n,o] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) {
        let E = m(new I(b ? .46 : .4,b ? .46 : .4,.3,12), x, n * (t / 2 - .05), b ? .46 : .4, o * (d / 2 - .85));
        E.rotation.z = Math.PI / 2,
        m(new I(.2,.2,.32,10), h, n * (t / 2 - .04), b ? .46 : .4, o * (d / 2 - .85)).rotation.z = Math.PI / 2
    }
    return r
}
var U = G(14689322, {
    emissive: 16719904,
    emissiveIntensity: 1.4
})
  , $ = G(2052064, {
    emissive: 2117887,
    emissiveIntensity: 1.4
});
function j() {
    let l = new C
      , a = L("suv", "#1b2a4a");
    for (let[r,s] of [[-.42, U], [.42, $]]) {
        let u = new B(new T(.7,.18,.36),s);
        u.position.set(r, 2.42, -.25),
        u.userData.animated = !0,
        a.add(u)
    }
    a.position.z = 9,
    l.add(a);
    for (let[r,s,u] of [[-8.5, "luxury", "#0b0b0b"], [-17, "suv", "#2b2b2b"]]) {
        let x = L(s, u);
        x.position.z = r,
        l.add(x)
    }
    return l
}
function Q(l) {
    let a = Math.floor(l * 4) % 2;
    U.emissiveIntensity = a ? 1.6 : .1,
    $.emissiveIntensity = a ? .1 : 1.6
}
function W(l="#f2b705") {
    let a = new C
      , r = G(l, {
        roughness: .4
    })
      , s = G(3023645, {
        roughness: .95
    })
      , u = G(1381653)
      , x = G(4868682)
      , h = G(10466239, {
        roughness: .1,
        metalness: .2,
        transparent: !0,
        opacity: .55
    })
      , m = G(14211288, {
        metalness: .7,
        roughness: .25
    })
      , e = (f, i, b, g, S) => {
        let n = new B(f,i);
        return n.position.set(b, g, S),
        n.castShadow = !0,
        a.add(n),
        n
    }
      , t = (f, i, b) => new T(f,i,b);
    e(t(1.3, .42, 1.9), r, 0, .5, -.3),
    e(t(1.36, 1, .55), r, 0, .74, -1.12),
    e(t(1.26, .06, 1.7), x, 0, .73, -.25),
    e(t(.72, .95, .5), r, 0, .8, .98),
    e(t(1.22, .28, .42), r, 0, 1.12, .74),
    e(t(.42, .18, .05), G(16774872, {
        emissive: 16773828,
        emissiveIntensity: .6
    }), 0, 1.02, 1.24),
    e(t(.3, .1, .6), r, 0, .5, 1.05);
    let d = e(t(1.12, .66, .03), h, 0, 1.6, .74);
    d.rotation.x = -.12;
    for (let f of [-.6, .6])
        e(t(.07, .95, .07), r, f, 1.5, .72);
    for (let f of [-.66, .66])
        e(t(.07, 1.2, .07), r, f, 1.35, -.9);
    e(t(1.22, .08, .1), r, 0, 1.95, .72),
    e(t(1.42, .12, 2.2), s, 0, 2, -.28),
    e(t(1.42, .8, .06), s, 0, 1.62, -1.38),
    e(t(.7, .3, .02), G(14673642, {
        roughness: .2
    }), 0, 1.68, -1.415);
    for (let f of [-.7, .7])
        e(t(.04, .95, .5), s, f, 1.5, -1.12);
    e(t(1.2, .16, .5), u, 0, .92, -.78),
    e(t(1.2, .55, .12), u, 0, 1.25, -1.02),
    e(t(.45, .16, .45), u, 0, .98, .2),
    e(t(.62, .05, .05), u, 0, 1.28, .55);
    for (let f of [-.45, .45]) {
        let i = e(new I(.11,.11,.05,14), G(12597547, {
            emissive: 12597547,
            emissiveIntensity: .4
        }), f, 1, -1.41);
        i.rotation.x = Math.PI / 2
    }
    e(t(.4, .16, .02), G(16053488), 0, .62, -1.41);
    for (let[f,i] of [[0, 1], [-.62, -.95], [.62, -.95]])
        e(new I(.27,.27,.16,12), u, f, .27, i).rotation.z = Math.PI / 2,
        e(new I(.12,.12,.18,10), m, f, .27, i).rotation.z = Math.PI / 2;
    return a
}
var o0 = [1e5, 7e4]
  , t0 = 1e3
  , Y = 34
  , X = 24
  , V = .72
  , y = (l, a, r) => new T(l,a,r)
  , O = new Map
  , M = (l, a={}) => {
    let r = l + JSON.stringify(a);
    return O.has(r) || O.set(r, new A({
        color: l,
        flatShading: !0,
        roughness: .75,
        ...a
    })),
    O.get(r)
}
;
function Z(l, a) {
    let r = document.createElement("canvas");
    r.width = 1024,
    r.height = 192;
    let s = r.getContext("2d");
    s.fillStyle = a,
    s.fillRect(0, 0, 1024, 192),
    s.fillStyle = "#fff8ec",
    s.textAlign = "center",
    s.textBaseline = "middle";
    let u = 110;
    for (s.font = `900 ${u}px DM Sans, sans-serif`; s.measureText(l.toUpperCase()).width > 960 && u > 40; )
        u -= 6,
        s.font = `900 ${u}px DM Sans, sans-serif`;
    s.fillText(l.toUpperCase(), 512, 100);
    let x = new P(r);
    return x.colorSpace = z,
    x
}
function n0({name: l, kind: a="food", accent: r="#0f3d2e"}, s) {
    let u = new C
      , x = Y
      , h = X
      , m = []
      , e = (n, o, E, p, R, c) => {
        let w = new B(n,o);
        if (w.position.set(E, p, R),
        w.castShadow = !0,
        w.receiveShadow = !0,
        u.add(w),
        c) {
            let H = n.parameters;
            m.push([E - H.width / 2, E + H.width / 2, R - H.depth / 2, R + H.depth / 2])
        }
        return w
    }
      , t = new F(r).getHex()
      , d = a === "hospital"
      , f = e(y(x, .2, h), M(a === "food" ? 14272419 : d ? 14674410 : 15131094), 0, -.1, 0);
    for (let n = -x / 2 + 2; n < x / 2; n += 4)
        e(y(.06, .01, h), M(d ? 12899542 : 13218956), n, .01, 0);
    let i = M(d ? 16054520 : 15985888);
    e(y(x, 5, .3), i, 0, 2.5, -h / 2),
    e(y(.3, 5, h), i, -x / 2, 2.5, 0),
    e(y(.3, 5, h), i, x / 2, 2.5, 0),
    e(y(x / 2 - 3, 1, .3), i, -x / 4 - 1.5, .5, h / 2),
    e(y(x / 2 - 3, 1, .3), i, x / 4 + 1.5, .5, h / 2),
    e(y(x, .4, .32), M(t), 0, 4.8, -h / 2 + .01);
    let b = new B(new D(14,2.6),new _({
        map: Z(l, r)
    }));
    b.position.set(0, 3.6, -h / 2 + .2),
    u.add(b),
    e(y(14, 1.1, 1.4), M(t), 0, .55, -h / 2 + 4, !0),
    e(y(14.4, .12, 1.6), M(3877404), 0, 1.16, -h / 2 + 4);
    for (let n of [-4, 4]) {
        let o = s?.();
        o && (o.group.position.set(n, 0, -h / 2 + 2.2),
        u.add(o.group))
    }
    let g = null;
    if (d) {
        g = [];
        let n = M(16777215)
          , o = M(6000598)
          , E = M(12108488, {
            metalness: .6,
            roughness: .3
        })
          , p = M(11130576);
        for (let c of [-1, 1])
            for (let w of [-3.5, .5, 4.5, 8.5]) {
                let H = c * (x / 2 - .2)
                  , v = H - c * 1.25;
                e(y(2.3, .4, 1.1), E, v, .32, w),
                e(y(2.2, .16, 1), n, v, .6, w),
                e(y(.45, .1, .7), n, H - c * .45, .72, w),
                e(y(1.25, .06, 1.04), o, v - c * .45, .7, w),
                e(y(.1, 1.1, 1.1), E, H - c * .12, .75, w),
                e(new I(.03,.03,2,6), E, H - c * .5, 1, w + .75),
                e(y(.25, .35, .08), M(15267071, {
                    transparent: !0,
                    opacity: .8
                }), H - c * .5, 1.85, w + .75),
                e(y(2.5, 2.3, .05), p, v, 1.35, w + 1.45),
                m.push([v - 1.2, v + 1.2, w - .6, w + .6]),
                g.push({
                    x: H - c * 2,
                    z: w,
                    h: c < 0 ? Math.PI / 2 : -Math.PI / 2,
                    out: [H - c * 3.1, w]
                })
            }
        for (let c of [-5, -2.5, 2.5, 5])
            e(y(2, .45, .7), M(3050362), c, .45, 8.5, !0),
            e(y(2, .7, .1), M(3050362), c, .85, 8.85);
        for (let c of [-1, 1])
            for (let[w,H] of [[.5, 1.6], [1.6, .5]]) {
                let v = new B(y(.06, H, w),new _({
                    color: 2071893
                }));
                v.position.set(c * (x / 2 - .2), 3.3, -7.2),
                u.add(v)
            }
        let R = s?.();
        if (R) {
            let c = g[5];
            R.group.position.set(c.x, V, c.z),
            R.group.rotation.order = "YXZ",
            R.group.rotation.set(-Math.PI / 2, c.h, 0),
            u.add(R.group)
        }
    } else if (a === "food") {
        let n = 0;
        for (let o of [-11, -3.5, 3.5, 11])
            for (let E of [-1, 6]) {
                e(new I(1.1,1.1,.1,16), M(9067059), o, .95, E),
                e(new I(.15,.25,.95,8), M(3877404), o, .47, E),
                m.push([o - 1.1, o + 1.1, E - 1.1, E + 1.1]);
                for (let p of [0, Math.PI / 2, Math.PI, Math.PI * 1.5]) {
                    let R = o + Math.sin(p) * 1.7
                      , c = E + Math.cos(p) * 1.7;
                    e(y(.6, .08, .6), M(t), R, .55, c),
                    e(y(.6, .7, .08), M(t), R + Math.sin(p) * .28, .9, c + Math.cos(p) * .28)
                }
                if (n++ % 3 === 0) {
                    let p = s?.();
                    p && (p.group.position.set(o, -.25, E + 1.7),
                    p.group.rotation.y = Math.PI,
                    u.add(p.group))
                }
            }
    } else if (a === "boutique") {
        let n = [13909309, 15906106, 2067020, 2060241, 9059001, 16777215, 998702, 14037892];
        for (let[o,E] of [[-10, -1], [-10, 6], [10, -1], [10, 6], [0, 6]]) {
            e(y(6, .08, .08), M(12105912, {
                metalness: .6
            }), o, 2, E);
            for (let p of [-1, 1])
                e(y(.08, 2, .08), M(12105912, {
                    metalness: .6
                }), o + p * 3, 1, E);
            for (let p = 0; p < 9; p++)
                e(y(.5, 1.1, .12), M(n[p + Math.round(o) & 7]), o - 2.6 + p * .65, 1.4, E);
            m.push([o - 3.1, o + 3.1, E - .5, E + .5])
        }
        for (let o of [-4, 4]) {
            let E = s?.();
            E && (E.group.position.set(o, 0, -2),
            u.add(E.group),
            m.push([o - .5, o + .5, -2.5, -1.5]))
        }
        for (let o of [-x / 2 + .2, x / 2 - .2])
            e(y(.08, 2.6, 3), M(13624302, {
                metalness: .5,
                roughness: .1
            }), o, 1.6, -5)
    } else if (a === "airport") {
        for (let c of [-12, -6, 6, 12])
            e(y(4, 1.1, 1.2), M(15131094), c, .55, -2, !0),
            e(y(4, .5, .1), M(2051740), c, 2.4, -2.6);
        let n = document.createElement("canvas");
        n.width = 512,
        n.height = 256;
        let o = n.getContext("2d");
        o.fillStyle = "#101820",
        o.fillRect(0, 0, 512, 256),
        o.fillStyle = "#f2b53a",
        o.font = "800 30px DM Sans, sans-serif",
        o.fillText("DEPARTURES", 20, 40),
        o.font = "700 24px DM Sans, sans-serif",
        o.fillStyle = "#fff8ec",
        [["LAGOS", "08:15", "BOARDING"], ["KANO", "09:40", "ON TIME"], ["PORT HARCOURT", "11:05", "DELAYED"], ["ACCRA", "13:30", "ON TIME"], ["LONDON", "22:50", "ON TIME"]].forEach( ([c,w,H], v) => {
            o.fillText(c, 20, 86 + v * 36),
            o.fillText(w, 300, 86 + v * 36),
            o.fillStyle = H === "DELAYED" ? "#ff6b5b" : "#7ee08a",
            o.fillText(H, 390, 86 + v * 36),
            o.fillStyle = "#fff8ec"
        }
        );
        let E = new P(n);
        E.colorSpace = z;
        let p = new B(new D(7,3.5),new _({
            map: E
        }));
        p.position.set(x / 2 - .25, 3, 0),
        p.rotation.y = -Math.PI / 2,
        u.add(p);
        for (let c of [4, 7])
            for (let w of [-12, -4, 4, 12])
                e(y(6, .45, .8), M(3817290), w, .45, c, !0),
                e(y(6, .8, .12), M(3817290), w, .9, c + .4);
        let R = 0;
        for (let c of [-12, 4]) {
            let w = s?.();
            w && R++ < 2 && (w.group.position.set(c, .1, 4.2),
            w.group.rotation.y = Math.PI,
            u.add(w.group))
        }
    } else {
        let n = [13909309, 15906106, 2067020, 2060241, 16777215, 9067059];
        for (let[o,E,p,R] of [[-x / 2 + 1.2, 0, 1.2, h - 10], [x / 2 - 1.2, 0, 1.2, h - 10], [-5, 3, 6, 1.2], [5, 3, 6, 1.2]]) {
            e(y(p, 2.2, R), M(13617336), o, 1.1, E, !0);
            for (let c = 0; c < 10; c++) {
                let w = p > R ? o - p / 2 + .4 + c % 5 * (p - .8) / 4 : o
                  , H = p > R ? E : E - R / 2 + .6 + c % 5 * (R - 1.2) / 4;
                e(y(.45, .4, .45), M(n[(c * 7 + Math.round(o)) % n.length]), w, 1.3 + Math.floor(c / 5) * .75, H)
            }
        }
    }
    for (let[n,o] of [[-x / 2 + 1.5, h / 2 - 1.5], [x / 2 - 1.5, h / 2 - 1.5]])
        e(new I(.5,.4,.8,10), M(9067059), n, .4, o, !1),
        e(new k(.9,0), M(3111493), n, 1.5, o);
    for (let n of [-10, 0, 10])
        for (let o of [-4, 5])
            e(y(1.6, .1, .5), new _({
                color: 16773583
            }), n, 4.9, o);
    return {
        group: u,
        floor: f,
        isFree: (n, o) => Math.abs(n) < x / 2 - .6 && Math.abs(o) < h / 2 - .6 && !m.some( ([E,p,R,c]) => n > E - .3 && n < p + .3 && o > R - .3 && o < c + .3),
        spawn: [0, h / 2 - 2.5],
        counter: [0, -h / 2 + 5.4],
        staff: [0, -h / 2 + 2.2],
        beds: g
    }
}
function r0(l) {
    let a = []
      , r = []
      , s = new Map
      , u = (t, d) => `${Math.round(t / 1.5)},${Math.round(d / 1.5)}`
      , x = (t, d) => {
        let f = u(t, d);
        return s.has(f) || (s.set(f, a.length),
        a.push([t, d]),
        r.push([])),
        s.get(f)
    }
    ;
    for (let t of l) {
        if (t.w < 4.5)
            continue;
        let d = null;
        for (let[f,i] of t.p) {
            let b = x(f, i);
            if (d !== null && d !== b) {
                let[g,S] = a[d]
                  , n = Math.hypot(f - g, i - S);
                r[d].push([b, n]),
                r[b].push([d, n])
            }
            d = b
        }
    }
    let h = 100
      , m = new Map;
    return a.forEach( ([t,d], f) => {
        let i = `${Math.floor(t / h)},${Math.floor(d / h)}`;
        m.has(i) || m.set(i, []),
        m.get(i).push(f)
    }
    ),
    {
        nodes: a,
        edges: r,
        nearest: (t, d) => {
            let f = -1
              , i = 1 / 0;
            for (let b = 0; b <= 6 && f < 0; b++)
                for (let g = Math.floor(t / h) - b; g <= Math.floor(t / h) + b; g++)
                    for (let S = Math.floor(d / h) - b; S <= Math.floor(d / h) + b; S++)
                        for (let n of m.get(`${g},${S}`) || []) {
                            if (!r[n].length)
                                continue;
                            let o = Math.hypot(a[n][0] - t, a[n][1] - d);
                            o < i && (i = o,
                            f = n)
                        }
            return f
        }
    }
}
function a0(l, a, r) {
    let {nodes: s, edges: u} = l;
    if (!s[a] || !s[r])
        return null;
    let x = d => Math.hypot(s[d][0] - s[r][0], s[d][1] - s[r][1])
      , h = new Map([[a, 0]])
      , m = new Map
      , e = [[x(a), a]]
      , t = new Set;
    for (; e.length; ) {
        let d = 0;
        for (let i = 1; i < e.length; i++)
            e[i][0] < e[d][0] && (d = i);
        let[,f] = e.splice(d, 1)[0];
        if (f === r) {
            let i = [s[f]]
              , b = f;
            for (; m.has(b); )
                b = m.get(b),
                i.push(s[b]);
            return i.reverse()
        }
        if (!t.has(f)) {
            t.add(f);
            for (let[i,b] of u[f]) {
                let g = h.get(f) + b;
                g < (h.get(i) ?? 1 / 0) && (h.set(i, g),
                m.set(i, f),
                e.push([g + x(i), i]))
            }
        }
    }
    return null
}
var f0 = l => l.reduce( (a, r, s) => s ? a + Math.hypot(r[0] - l[s - 1][0], r[1] - l[s - 1][1]) : 0, 0)
  , c0 = .5
  , q = 1
  , i0 = l => {
    q = l
}
;
var l0 = l => Math.round((200 + l / 1e3 * 150) / 50) * 50;
var x0 = 500
  , d0 = l => Math.round((100 + l / 1e3 * 100) / 50) * 50;
function u0() {
    let l = new C
      , a = (s, u={}) => new A({
        color: s,
        flatShading: !0,
        roughness: .6,
        ...u
    })
      , r = (s, u, x, h, m) => {
        let e = new B(s,u);
        return e.position.set(x, h, m),
        e.castShadow = !0,
        l.add(e),
        e
    }
    ;
    r(new T(2,.85,4.4), a(2067020), 0, .8, 0),
    r(new T(2.04,.22,4.44), a(16777215), 0, 1, 0),
    r(new T(1.8,.7,2.3), a(16053488), 0, 1.58, -.2),
    r(new T(1.82,.48,2), a(2240573, {
        roughness: .2
    }), 0, 1.6, -.2),
    r(new T(.7,.25,.4), a(15906106, {
        emissive: 15906106,
        emissiveIntensity: .4
    }), 0, 2.05, -.2);
    for (let s of [-1, 1])
        r(new T(.35,.2,.05), a(16774872, {
            emissive: 16773828,
            emissiveIntensity: .6
        }), s * .65, .85, 2.21),
        r(new T(.35,.2,.05), a(12597547, {
            emissive: 12597547,
            emissiveIntensity: .5
        }), s * .65, .9, -2.21);
    for (let[s,u] of [[-1, 1.4], [1, 1.4], [-1, -1.4], [1, -1.4]]) {
        let x = r(new I(.4,.4,.3,10), a(1776411), s, .4, u);
        x.rotation.z = Math.PI / 2
    }
    return l
}
export {J as a, K as b, L as c, j as d, Q as e, W as f, o0 as g, t0 as h, V as i, n0 as j, r0 as k, a0 as l, f0 as m, c0 as n, q as o, i0 as p, l0 as q, x0 as r, d0 as s, u0 as t};
