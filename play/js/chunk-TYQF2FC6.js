import {a as Vr, c as as, d as Gr, i as zr, t as qr} from "./chunk-GGNNUNFX.js";
import {$a as Wr, Aa as Sr, Ba as ue, Ca as He, Da as sn, Ea as Et, Fa as Ir, Ga as br, H as pr, Ja as Nr, La as Re, Ma as kr, Na as Tt, Oa as re, Pa as is, Qa as Rr, Ra as xr, Sa as Pr, Ta as Ar, Ua as Mr, Va as Dr, Wa as Or, Xa as Lr, Za as Fr, _a as rs, aa as mr, ab as os, cb as Ur, da as v, ea as tt, fa as gr, ga as yr, h as dr, i as ns, ia as vr, jb as $r, ka as wr, l as me, lb as Hr, ma as ge, na as Cr, ob as Br, pa as ss, rb as ls, sa as Er, ua as ye, xa as nn, y as fr, ya as q, z as _r, za as Tr} from "./chunk-YSUX7QB5.js";
import "./chunk-O2XFH626.js";
var Yr = "@firebase/database"
  , jr = "1.1.5";
var _i = "";
function Xa(t) {
    _i = t
}
var ms = class {
    constructor(e) {
        this.domStorage_ = e,
        this.prefix_ = "firebase:"
    }
    set(e, n) {
        n == null ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), q(n))
    }
    get(e) {
        let n = this.domStorage_.getItem(this.prefixedName_(e));
        return n == null ? null : nn(n)
    }
    remove(e) {
        this.domStorage_.removeItem(this.prefixedName_(e))
    }
    prefixedName_(e) {
        return this.prefix_ + e
    }
    toString() {
        return this.domStorage_.toString()
    }
}
;
var gs = class {
    constructor() {
        this.cache_ = {},
        this.isInMemoryStorage = !0
    }
    set(e, n) {
        n == null ? delete this.cache_[e] : this.cache_[e] = n
    }
    get(e) {
        return ue(this.cache_, e) ? this.cache_[e] : null
    }
    remove(e) {
        delete this.cache_[e]
    }
}
;
var ko = function(t) {
    try {
        if (typeof window < "u" && typeof window[t] < "u") {
            let e = window[t];
            return e.setItem("firebase:sentinel", "cache"),
            e.removeItem("firebase:sentinel"),
            new ms(e)
        }
    } catch {}
    return new gs
}
  , Ve = ko("localStorage")
  , ys = ko("sessionStorage");
var it = new Ar("@firebase/database")
  , Ja = (function() {
    let t = 1;
    return function() {
        return t++
    }
}
)()
  , Ro = function(t) {
    let e = kr(t)
      , n = new Nr;
    n.update(e);
    let s = n.digest();
    return gr.encodeByteArray(s)
}
  , Vt = function(...t) {
    let e = "";
    for (let n = 0; n < t.length; n++) {
        let s = t[n];
        Array.isArray(s) || s && typeof s == "object" && typeof s.length == "number" ? e += Vt.apply(null, s) : typeof s == "object" ? e += q(s) : e += s,
        e += " "
    }
    return e
}
  , ze = null
  , Kr = !0
  , Za = function(t, e) {
    v(!e || t === !0 || t === !1, "Can't turn on custom loggers persistently."),
    t === !0 ? (it.logLevel = Pr.VERBOSE,
    ze = it.log.bind(it),
    e && ys.set("logging_enabled", !0)) : typeof t == "function" ? ze = t : (ze = null,
    ys.remove("logging_enabled"))
}
  , Y = function(...t) {
    if (Kr === !0 && (Kr = !1,
    ze === null && ys.get("logging_enabled") === !0 && Za(!0)),
    ze) {
        let e = Vt.apply(null, t);
        ze(e)
    }
}
  , Gt = function(t) {
    return function(...e) {
        Y(t, ...e)
    }
}
  , vs = function(...t) {
    let e = "FIREBASE INTERNAL ERROR: " + Vt(...t);
    it.error(e)
}
  , Se = function(...t) {
    let e = `FIREBASE FATAL ERROR: ${Vt(...t)}`;
    throw it.error(e),
    new Error(e)
}
  , te = function(...t) {
    let e = "FIREBASE WARNING: " + Vt(...t);
    it.warn(e)
}
  , ec = function() {
    typeof window < "u" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1 && te("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")
}
  , An = function(t) {
    return typeof t == "number" && (t !== t || t === Number.POSITIVE_INFINITY || t === Number.NEGATIVE_INFINITY)
}
  , tc = function(t) {
    if (ye() || document.readyState === "complete")
        t();
    else {
        let e = !1
          , n = function() {
            if (!document.body) {
                setTimeout(n, Math.floor(10));
                return
            }
            e || (e = !0,
            t())
        };
        document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1),
        window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", () => {
            document.readyState === "complete" && n()
        }
        ),
        window.attachEvent("onload", n))
    }
}
  , Ye = "[MIN_NAME]"
  , De = "[MAX_NAME]"
  , Xe = function(t, e) {
    if (t === e)
        return 0;
    if (t === Ye || e === De)
        return -1;
    if (e === Ye || t === De)
        return 1;
    {
        let n = Qr(t)
          , s = Qr(e);
        return n !== null ? s !== null ? n - s === 0 ? t.length - e.length : n - s : -1 : s !== null ? 1 : t < e ? -1 : 1
    }
}
  , nc = function(t, e) {
    return t === e ? 0 : t < e ? -1 : 1
}
  , St = function(t, e) {
    if (e && t in e)
        return e[t];
    throw new Error("Missing required key (" + t + ") in object: " + q(e))
}
  , pi = function(t) {
    if (typeof t != "object" || t === null)
        return q(t);
    let e = [];
    for (let s in t)
        e.push(s);
    e.sort();
    let n = "{";
    for (let s = 0; s < e.length; s++)
        s !== 0 && (n += ","),
        n += q(e[s]),
        n += ":",
        n += pi(t[e[s]]);
    return n += "}",
    n
}
  , xo = function(t, e) {
    let n = t.length;
    if (n <= e)
        return [t];
    let s = [];
    for (let i = 0; i < n; i += e)
        i + e > n ? s.push(t.substring(i, n)) : s.push(t.substring(i, i + e));
    return s
};
function j(t, e) {
    for (let n in t)
        t.hasOwnProperty(n) && e(n, t[n])
}
var Po = function(t) {
    v(!An(t), "Invalid JSON number");
    let e = 11, n = 52, s = (1 << e - 1) - 1, i, r, o, l, u;
    t === 0 ? (r = 0,
    o = 0,
    i = 1 / t === -1 / 0 ? 1 : 0) : (i = t < 0,
    t = Math.abs(t),
    t >= Math.pow(2, 1 - s) ? (l = Math.min(Math.floor(Math.log(t) / Math.LN2), s),
    r = l + s,
    o = Math.round(t * Math.pow(2, n - l) - Math.pow(2, n))) : (r = 0,
    o = Math.round(t / Math.pow(2, 1 - s - n))));
    let h = [];
    for (u = n; u; u -= 1)
        h.push(o % 2 ? 1 : 0),
        o = Math.floor(o / 2);
    for (u = e; u; u -= 1)
        h.push(r % 2 ? 1 : 0),
        r = Math.floor(r / 2);
    h.push(i ? 1 : 0),
    h.reverse();
    let p = h.join("")
      , d = "";
    for (u = 0; u < 64; u += 8) {
        let m = parseInt(p.substr(u, 8), 2).toString(16);
        m.length === 1 && (m = "0" + m),
        d = d + m
    }
    return d.toLowerCase()
}
  , sc = function() {
    return !!(typeof window == "object" && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href))
}
  , ic = function() {
    return typeof Windows == "object" && typeof Windows.UI == "object"
};
function rc(t, e) {
    let n = "Unknown Error";
    t === "too_big" ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : t === "permission_denied" ? n = "Client doesn't have permission to access the desired data." : t === "unavailable" && (n = "The service is unavailable");
    let s = new Error(t + " at " + e._path.toString() + ": " + n);
    return s.code = t.toUpperCase(),
    s
}
var oc = new RegExp("^-?(0*)\\d{1,10}$")
  , lc = -2147483648
  , ac = 2147483647
  , Qr = function(t) {
    if (oc.test(t)) {
        let e = Number(t);
        if (e >= lc && e <= ac)
            return e
    }
    return null
}
  , ft = function(t) {
    try {
        t()
    } catch (e) {
        setTimeout( () => {
            let n = e.stack || "";
            throw te("Exception was thrown by user callback.", n),
            e
        }
        , Math.floor(0))
    }
}
  , cc = function() {
    return (typeof window == "object" && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0
}
  , kt = function(t, e) {
    let n = setTimeout(t, e);
    return typeof n == "number" && typeof Deno < "u" && Deno.unrefTimer ? Deno.unrefTimer(n) : typeof n == "object" && n.unref && n.unref(),
    n
};
var ws = class {
    constructor(e, n) {
        this.appCheckProvider = n,
        this.appName = e.name,
        Or(e) && e.settings.appCheckToken && (this.serverAppAppCheckToken = e.settings.appCheckToken),
        this.appCheck = n?.getImmediate({
            optional: !0
        }),
        this.appCheck || n?.get().then(s => this.appCheck = s)
    }
    getToken(e) {
        if (this.serverAppAppCheckToken) {
            if (e)
                throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");
            return Promise.resolve({
                token: this.serverAppAppCheckToken
            })
        }
        return this.appCheck ? this.appCheck.getToken(e) : new Promise( (n, s) => {
            setTimeout( () => {
                this.appCheck ? this.getToken(e).then(n, s) : n(null)
            }
            , 0)
        }
        )
    }
    addTokenChangeListener(e) {
        this.appCheckProvider?.get().then(n => n.addTokenListener(e))
    }
    notifyForInvalidToken() {
        te(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)
    }
}
;
var Cs = class {
    constructor(e, n, s) {
        this.appName_ = e,
        this.firebaseOptions_ = n,
        this.authProvider_ = s,
        this.auth_ = null,
        this.auth_ = s.getImmediate({
            optional: !0
        }),
        this.auth_ || s.onInit(i => this.auth_ = i)
    }
    getToken(e) {
        return this.auth_ ? this.auth_.getToken(e).catch(n => n && n.code === "auth/token-not-initialized" ? (Y("Got auth/token-not-initialized error.  Treating as null token."),
        null) : Promise.reject(n)) : new Promise( (n, s) => {
            setTimeout( () => {
                this.auth_ ? this.getToken(e).then(n, s) : n(null)
            }
            , 0)
        }
        )
    }
    addTokenChangeListener(e) {
        this.auth_ ? this.auth_.addAuthTokenListener(e) : this.authProvider_.get().then(n => n.addAuthTokenListener(e))
    }
    removeTokenChangeListener(e) {
        this.authProvider_.get().then(n => n.removeAuthTokenListener(e))
    }
    notifyForInvalidToken() {
        let e = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
        "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',
        te(e)
    }
}
  , Pe = class {
    constructor(e) {
        this.accessToken = e
    }
    getToken(e) {
        return Promise.resolve({
            accessToken: this.accessToken
        })
    }
    addTokenChangeListener(e) {
        e(this.accessToken)
    }
    removeTokenChangeListener(e) {}
    notifyForInvalidToken() {}
}
;
Pe.OWNER = "owner";
var on = "5"
  , Ao = "v"
  , Mo = "s"
  , Do = "r"
  , Oo = "f"
  , Lo = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/
  , Fo = "ls"
  , Wo = "p"
  , Es = "ac"
  , Uo = "websocket"
  , $o = "long_polling";
var ln = class {
    constructor(e, n, s, i, r=!1, o="", l=!1, u=!1, h=null) {
        this.secure = n,
        this.namespace = s,
        this.webSocketOnly = i,
        this.nodeAdmin = r,
        this.persistenceKey = o,
        this.includeNamespaceInQueryParams = l,
        this.isUsingEmulator = u,
        this.emulatorOptions = h,
        this._host = e.toLowerCase(),
        this._domain = this._host.substr(this._host.indexOf(".") + 1),
        this.internalHost = Ve.get("host:" + e) || this._host
    }
    isCacheableHost() {
        return this.internalHost.substr(0, 2) === "s-"
    }
    isCustomHost() {
        return this._domain !== "firebaseio.com" && this._domain !== "firebaseio-demo.com"
    }
    get host() {
        return this._host
    }
    set host(e) {
        e !== this.internalHost && (this.internalHost = e,
        this.isCacheableHost() && Ve.set("host:" + this._host, this.internalHost))
    }
    toString() {
        let e = this.toURLString();
        return this.persistenceKey && (e += "<" + this.persistenceKey + ">"),
        e
    }
    toURLString() {
        let e = this.secure ? "https://" : "http://"
          , n = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
        return `${e}${this.host}/${n}`
    }
}
;
function uc(t) {
    return t.host !== t.internalHost || t.isCustomHost() || t.includeNamespaceInQueryParams
}
function Ho(t, e, n) {
    v(typeof e == "string", "typeof type must == string"),
    v(typeof n == "object", "typeof params must == object");
    let s;
    if (e === Uo)
        s = (t.secure ? "wss://" : "ws://") + t.internalHost + "/.ws?";
    else if (e === $o)
        s = (t.secure ? "https://" : "http://") + t.internalHost + "/.lp?";
    else
        throw new Error("Unknown connection type: " + e);
    uc(t) && (n.ns = t.namespace);
    let i = [];
    return j(n, (r, o) => {
        i.push(r + "=" + o)
    }
    ),
    s + i.join("&")
}
var Ts = class {
    constructor() {
        this.counters_ = {}
    }
    incrementCounter(e, n=1) {
        ue(this.counters_, e) || (this.counters_[e] = 0),
        this.counters_[e] += n
    }
    get() {
        return vr(this.counters_)
    }
}
;
var cs = {}
  , us = {};
function mi(t) {
    let e = t.toString();
    return cs[e] || (cs[e] = new Ts),
    cs[e]
}
function hc(t, e) {
    let n = t.toString();
    return us[n] || (us[n] = e()),
    us[n]
}
var Ss = class {
    constructor(e) {
        this.onMessage_ = e,
        this.pendingResponses = [],
        this.currentResponseNum = 0,
        this.closeAfterResponse = -1,
        this.onClose = null
    }
    closeAfter(e, n) {
        this.closeAfterResponse = e,
        this.onClose = n,
        this.closeAfterResponse < this.currentResponseNum && (this.onClose(),
        this.onClose = null)
    }
    handleResponse(e, n) {
        for (this.pendingResponses[e] = n; this.pendingResponses[this.currentResponseNum]; ) {
            let s = this.pendingResponses[this.currentResponseNum];
            delete this.pendingResponses[this.currentResponseNum];
            for (let i = 0; i < s.length; ++i)
                s[i] && ft( () => {
                    this.onMessage_(s[i])
                }
                );
            if (this.currentResponseNum === this.closeAfterResponse) {
                this.onClose && (this.onClose(),
                this.onClose = null);
                break
            }
            this.currentResponseNum++
        }
    }
}
;
var Xr = "start"
  , dc = "close"
  , fc = "pLPCommand"
  , _c = "pRTLPCB"
  , Bo = "id"
  , Vo = "pw"
  , Go = "ser"
  , pc = "cb"
  , mc = "seg"
  , gc = "ts"
  , yc = "d"
  , vc = "dframe"
  , zo = 1870
  , qo = 30
  , wc = zo - qo
  , Cc = 25e3
  , Ec = 3e4
  , Is = class t {
    constructor(e, n, s, i, r, o, l) {
        this.connId = e,
        this.repoInfo = n,
        this.applicationId = s,
        this.appCheckToken = i,
        this.authToken = r,
        this.transportSessionId = o,
        this.lastSessionId = l,
        this.bytesSent = 0,
        this.bytesReceived = 0,
        this.everConnected_ = !1,
        this.log_ = Gt(e),
        this.stats_ = mi(n),
        this.urlFn = u => (this.appCheckToken && (u[Es] = this.appCheckToken),
        Ho(n, $o, u))
    }
    open(e, n) {
        this.curSegmentNum = 0,
        this.onDisconnect_ = n,
        this.myPacketOrderer = new Ss(e),
        this.isClosed_ = !1,
        this.connectTimeoutTimer_ = setTimeout( () => {
            this.log_("Timed out trying to connect."),
            this.onClosed_(),
            this.connectTimeoutTimer_ = null
        }
        , Math.floor(Ec)),
        tc( () => {
            if (this.isClosed_)
                return;
            this.scriptTagHolder = new bs( (...r) => {
                let[o,l,u,h,p] = r;
                if (this.incrementIncomingBytes_(r),
                !!this.scriptTagHolder)
                    if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_),
                    this.connectTimeoutTimer_ = null),
                    this.everConnected_ = !0,
                    o === Xr)
                        this.id = l,
                        this.password = u;
                    else if (o === dc)
                        l ? (this.scriptTagHolder.sendNewPolls = !1,
                        this.myPacketOrderer.closeAfter(l, () => {
                            this.onClosed_()
                        }
                        )) : this.onClosed_();
                    else
                        throw new Error("Unrecognized command received: " + o)
            }
            , (...r) => {
                let[o,l] = r;
                this.incrementIncomingBytes_(r),
                this.myPacketOrderer.handleResponse(o, l)
            }
            , () => {
                this.onClosed_()
            }
            ,this.urlFn);
            let s = {};
            s[Xr] = "t",
            s[Go] = Math.floor(Math.random() * 1e8),
            this.scriptTagHolder.uniqueCallbackIdentifier && (s[pc] = this.scriptTagHolder.uniqueCallbackIdentifier),
            s[Ao] = on,
            this.transportSessionId && (s[Mo] = this.transportSessionId),
            this.lastSessionId && (s[Fo] = this.lastSessionId),
            this.applicationId && (s[Wo] = this.applicationId),
            this.appCheckToken && (s[Es] = this.appCheckToken),
            typeof location < "u" && location.hostname && Lo.test(location.hostname) && (s[Do] = Oo);
            let i = this.urlFn(s);
            this.log_("Connecting via long-poll to " + i),
            this.scriptTagHolder.addTag(i, () => {}
            )
        }
        )
    }
    start() {
        this.scriptTagHolder.startLongPoll(this.id, this.password),
        this.addDisconnectPingFrame(this.id, this.password)
    }
    static forceAllow() {
        t.forceAllow_ = !0
    }
    static forceDisallow() {
        t.forceDisallow_ = !0
    }
    static isAvailable() {
        return ye() ? !1 : t.forceAllow_ ? !0 : !t.forceDisallow_ && typeof document < "u" && document.createElement != null && !sc() && !ic()
    }
    markConnectionHealthy() {}
    shutdown_() {
        this.isClosed_ = !0,
        this.scriptTagHolder && (this.scriptTagHolder.close(),
        this.scriptTagHolder = null),
        this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame),
        this.myDisconnFrame = null),
        this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_),
        this.connectTimeoutTimer_ = null)
    }
    onClosed_() {
        this.isClosed_ || (this.log_("Longpoll is closing itself"),
        this.shutdown_(),
        this.onDisconnect_ && (this.onDisconnect_(this.everConnected_),
        this.onDisconnect_ = null))
    }
    close() {
        this.isClosed_ || (this.log_("Longpoll is being closed."),
        this.shutdown_())
    }
    send(e) {
        let n = q(e);
        this.bytesSent += n.length,
        this.stats_.incrementCounter("bytes_sent", n.length);
        let s = yr(n)
          , i = xo(s, wc);
        for (let r = 0; r < i.length; r++)
            this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[r]),
            this.curSegmentNum++
    }
    addDisconnectPingFrame(e, n) {
        if (ye())
            return;
        this.myDisconnFrame = document.createElement("iframe");
        let s = {};
        s[vc] = "t",
        s[Bo] = e,
        s[Vo] = n,
        this.myDisconnFrame.src = this.urlFn(s),
        this.myDisconnFrame.style.display = "none",
        document.body.appendChild(this.myDisconnFrame)
    }
    incrementIncomingBytes_(e) {
        let n = q(e).length;
        this.bytesReceived += n,
        this.stats_.incrementCounter("bytes_received", n)
    }
}
  , bs = class t {
    constructor(e, n, s, i) {
        if (this.onDisconnect = s,
        this.urlFn = i,
        this.outstandingRequests = new Set,
        this.pendingSegs = [],
        this.currentSerial = Math.floor(Math.random() * 1e8),
        this.sendNewPolls = !0,
        ye())
            this.commandCB = e,
            this.onMessageCB = n;
        else {
            this.uniqueCallbackIdentifier = Ja(),
            window[fc + this.uniqueCallbackIdentifier] = e,
            window[_c + this.uniqueCallbackIdentifier] = n,
            this.myIFrame = t.createIFrame_();
            let r = "";
            this.myIFrame.src && this.myIFrame.src.substr(0, 11) === "javascript:" && (r = '<script>document.domain="' + document.domain + '";<\/script>');
            let o = "<html><body>" + r + "</body></html>";
            try {
                this.myIFrame.doc.open(),
                this.myIFrame.doc.write(o),
                this.myIFrame.doc.close()
            } catch (l) {
                Y("frame writing exception"),
                l.stack && Y(l.stack),
                Y(l)
            }
        }
    }
    static createIFrame_() {
        let e = document.createElement("iframe");
        if (e.style.display = "none",
        document.body) {
            document.body.appendChild(e);
            try {
                e.contentWindow.document || Y("No IE domain setting required")
            } catch {
                let s = document.domain;
                e.src = "javascript:void((function(){document.open();document.domain='" + s + "';document.close();})())"
            }
        } else
            throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
        return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document),
        e
    }
    close() {
        this.alive = !1,
        this.myIFrame && (this.myIFrame.doc.body.textContent = "",
        setTimeout( () => {
            this.myIFrame !== null && (document.body.removeChild(this.myIFrame),
            this.myIFrame = null)
        }
        , Math.floor(0)));
        let e = this.onDisconnect;
        e && (this.onDisconnect = null,
        e())
    }
    startLongPoll(e, n) {
        for (this.myID = e,
        this.myPW = n,
        this.alive = !0; this.newRequest_(); )
            ;
    }
    newRequest_() {
        if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
            this.currentSerial++;
            let e = {};
            e[Bo] = this.myID,
            e[Vo] = this.myPW,
            e[Go] = this.currentSerial;
            let n = this.urlFn(e)
              , s = ""
              , i = 0;
            for (; this.pendingSegs.length > 0 && this.pendingSegs[0].d.length + qo + s.length <= zo; ) {
                let o = this.pendingSegs.shift();
                s = s + "&" + mc + i + "=" + o.seg + "&" + gc + i + "=" + o.ts + "&" + yc + i + "=" + o.d,
                i++
            }
            return n = n + s,
            this.addLongPollTag_(n, this.currentSerial),
            !0
        } else
            return !1
    }
    enqueueSegment(e, n, s) {
        this.pendingSegs.push({
            seg: e,
            ts: n,
            d: s
        }),
        this.alive && this.newRequest_()
    }
    addLongPollTag_(e, n) {
        this.outstandingRequests.add(n);
        let s = () => {
            this.outstandingRequests.delete(n),
            this.newRequest_()
        }
          , i = setTimeout(s, Math.floor(Cc))
          , r = () => {
            clearTimeout(i),
            s()
        }
        ;
        this.addTag(e, r)
    }
    addTag(e, n) {
        ye() ? this.doNodeLongPoll(e, n) : setTimeout( () => {
            try {
                if (!this.sendNewPolls)
                    return;
                let s = this.myIFrame.doc.createElement("script");
                s.type = "text/javascript",
                s.async = !0,
                s.src = e,
                s.onload = s.onreadystatechange = function() {
                    let i = s.readyState;
                    (!i || i === "loaded" || i === "complete") && (s.onload = s.onreadystatechange = null,
                    s.parentNode && s.parentNode.removeChild(s),
                    n())
                }
                ,
                s.onerror = () => {
                    Y("Long-poll script failed to load: " + e),
                    this.sendNewPolls = !1,
                    this.close()
                }
                ,
                this.myIFrame.doc.body.appendChild(s)
            } catch {}
        }
        , Math.floor(1))
    }
}
;
var Tc = 16384
  , Sc = 45e3
  , an = null;
typeof MozWebSocket < "u" ? an = MozWebSocket : typeof WebSocket < "u" && (an = WebSocket);
var Te = class t {
    constructor(e, n, s, i, r, o, l) {
        this.connId = e,
        this.applicationId = s,
        this.appCheckToken = i,
        this.authToken = r,
        this.keepaliveTimer = null,
        this.frames = null,
        this.totalFrames = 0,
        this.bytesSent = 0,
        this.bytesReceived = 0,
        this.log_ = Gt(this.connId),
        this.stats_ = mi(n),
        this.connURL = t.connectionURL_(n, o, l, i, s),
        this.nodeAdmin = n.nodeAdmin
    }
    static connectionURL_(e, n, s, i, r) {
        let o = {};
        return o[Ao] = on,
        !ye() && typeof location < "u" && location.hostname && Lo.test(location.hostname) && (o[Do] = Oo),
        n && (o[Mo] = n),
        s && (o[Fo] = s),
        i && (o[Es] = i),
        r && (o[Wo] = r),
        Ho(e, Uo, o)
    }
    open(e, n) {
        this.onDisconnect = n,
        this.onMessage = e,
        this.log_("Websocket connecting to " + this.connURL),
        this.everConnected_ = !1,
        Ve.set("previous_websocket_failure", !0);
        try {
            let s;
            if (ye()) {
                let i = this.nodeAdmin ? "AdminNode" : "Node";
                s = {
                    headers: {
                        "User-Agent": `Firebase/${on}/${_i}/${process.platform}/${i}`,
                        "X-Firebase-GMPID": this.applicationId || ""
                    }
                },
                this.authToken && (s.headers.Authorization = `Bearer ${this.authToken}`),
                this.appCheckToken && (s.headers["X-Firebase-AppCheck"] = this.appCheckToken);
                let r = process.env
                  , o = this.connURL.indexOf("wss://") === 0 ? r.HTTPS_PROXY || r.https_proxy : r.HTTP_PROXY || r.http_proxy;
                o && (s.proxy = {
                    origin: o
                })
            }
            this.mySock = new an(this.connURL,[],s)
        } catch (s) {
            this.log_("Error instantiating WebSocket.");
            let i = s.message || s.data;
            i && this.log_(i),
            this.onClosed_();
            return
        }
        this.mySock.onopen = () => {
            this.log_("Websocket connected."),
            this.everConnected_ = !0
        }
        ,
        this.mySock.onclose = () => {
            this.log_("Websocket connection was disconnected."),
            this.mySock = null,
            this.onClosed_()
        }
        ,
        this.mySock.onmessage = s => {
            this.handleIncomingFrame(s)
        }
        ,
        this.mySock.onerror = s => {
            this.log_("WebSocket error.  Closing connection.");
            let i = s.message || s.data;
            i && this.log_(i),
            this.onClosed_()
        }
    }
    start() {}
    static forceDisallow() {
        t.forceDisallow_ = !0
    }
    static isAvailable() {
        let e = !1;
        if (typeof navigator < "u" && navigator.userAgent) {
            let n = /Android ([0-9]{0,}\.[0-9]{0,})/
              , s = navigator.userAgent.match(n);
            s && s.length > 1 && parseFloat(s[1]) < 4.4 && (e = !0)
        }
        return !e && an !== null && !t.forceDisallow_
    }
    static previouslyFailed() {
        return Ve.isInMemoryStorage || Ve.get("previous_websocket_failure") === !0
    }
    markConnectionHealthy() {
        Ve.remove("previous_websocket_failure")
    }
    appendFrame_(e) {
        if (this.frames.push(e),
        this.frames.length === this.totalFrames) {
            let n = this.frames.join("");
            this.frames = null;
            let s = nn(n);
            this.onMessage(s)
        }
    }
    handleNewFrameCount_(e) {
        this.totalFrames = e,
        this.frames = []
    }
    extractFrameCount_(e) {
        if (v(this.frames === null, "We already have a frame buffer"),
        e.length <= 6) {
            let n = Number(e);
            if (!isNaN(n))
                return this.handleNewFrameCount_(n),
                null
        }
        return this.handleNewFrameCount_(1),
        e
    }
    handleIncomingFrame(e) {
        if (this.mySock === null)
            return;
        let n = e.data;
        if (this.bytesReceived += n.length,
        this.stats_.incrementCounter("bytes_received", n.length),
        this.resetKeepAlive(),
        this.frames !== null)
            this.appendFrame_(n);
        else {
            let s = this.extractFrameCount_(n);
            s !== null && this.appendFrame_(s)
        }
    }
    send(e) {
        this.resetKeepAlive();
        let n = q(e);
        this.bytesSent += n.length,
        this.stats_.incrementCounter("bytes_sent", n.length);
        let s = xo(n, Tc);
        s.length > 1 && this.sendString_(String(s.length));
        for (let i = 0; i < s.length; i++)
            this.sendString_(s[i])
    }
    shutdown_() {
        this.isClosed_ = !0,
        this.keepaliveTimer && (clearInterval(this.keepaliveTimer),
        this.keepaliveTimer = null),
        this.mySock && (this.mySock.close(),
        this.mySock = null)
    }
    onClosed_() {
        this.isClosed_ || (this.log_("WebSocket is closing itself"),
        this.shutdown_(),
        this.onDisconnect && (this.onDisconnect(this.everConnected_),
        this.onDisconnect = null))
    }
    close() {
        this.isClosed_ || (this.log_("WebSocket is being closed"),
        this.shutdown_())
    }
    resetKeepAlive() {
        clearInterval(this.keepaliveTimer),
        this.keepaliveTimer = setInterval( () => {
            this.mySock && this.sendString_("0"),
            this.resetKeepAlive()
        }
        , Math.floor(Sc))
    }
    sendString_(e) {
        try {
            this.mySock.send(e)
        } catch (n) {
            this.log_("Exception thrown from WebSocket.send():", n.message || n.data, "Closing connection."),
            setTimeout(this.onClosed_.bind(this), 0)
        }
    }
}
;
Te.responsesRequiredToBeHealthy = 2;
Te.healthyTimeout = 3e4;
var cn = class t {
    static get ALL_TRANSPORTS() {
        return [Is, Te]
    }
    static get IS_TRANSPORT_INITIALIZED() {
        return this.globalTransportInitialized_
    }
    constructor(e) {
        this.initTransports_(e)
    }
    initTransports_(e) {
        let n = Te && Te.isAvailable()
          , s = n && !Te.previouslyFailed();
        if (e.webSocketOnly && (n || te("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),
        s = !0),
        s)
            this.transports_ = [Te];
        else {
            let i = this.transports_ = [];
            for (let r of t.ALL_TRANSPORTS)
                r && r.isAvailable() && i.push(r);
            t.globalTransportInitialized_ = !0
        }
    }
    initialTransport() {
        if (this.transports_.length > 0)
            return this.transports_[0];
        throw new Error("No transports available")
    }
    upgradeTransport() {
        return this.transports_.length > 1 ? this.transports_[1] : null
    }
}
;
cn.globalTransportInitialized_ = !1;
var Ic = 6e4
  , bc = 5e3
  , Nc = 10 * 1024
  , kc = 100 * 1024
  , hs = "t"
  , Jr = "d"
  , Rc = "s"
  , Zr = "r"
  , xc = "e"
  , eo = "o"
  , to = "a"
  , no = "n"
  , so = "p"
  , Pc = "h"
  , Ns = class {
    constructor(e, n, s, i, r, o, l, u, h, p) {
        this.id = e,
        this.repoInfo_ = n,
        this.applicationId_ = s,
        this.appCheckToken_ = i,
        this.authToken_ = r,
        this.onMessage_ = o,
        this.onReady_ = l,
        this.onDisconnect_ = u,
        this.onKill_ = h,
        this.lastSessionId = p,
        this.connectionCount = 0,
        this.pendingDataMessages = [],
        this.state_ = 0,
        this.log_ = Gt("c:" + this.id + ":"),
        this.transportManager_ = new cn(n),
        this.log_("Connection created"),
        this.start_()
    }
    start_() {
        let e = this.transportManager_.initialTransport();
        this.conn_ = new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),
        this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
        let n = this.connReceiver_(this.conn_)
          , s = this.disconnReceiver_(this.conn_);
        this.tx_ = this.conn_,
        this.rx_ = this.conn_,
        this.secondaryConn_ = null,
        this.isHealthy_ = !1,
        setTimeout( () => {
            this.conn_ && this.conn_.open(n, s)
        }
        , Math.floor(0));
        let i = e.healthyTimeout || 0;
        i > 0 && (this.healthyTimeout_ = kt( () => {
            this.healthyTimeout_ = null,
            this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > kc ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."),
            this.isHealthy_ = !0,
            this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > Nc ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."),
            this.close()))
        }
        , Math.floor(i)))
    }
    nextTransportId_() {
        return "c:" + this.id + ":" + this.connectionCount++
    }
    disconnReceiver_(e) {
        return n => {
            e === this.conn_ ? this.onConnectionLost_(n) : e === this.secondaryConn_ ? (this.log_("Secondary connection lost."),
            this.onSecondaryConnectionLost_()) : this.log_("closing an old connection")
        }
    }
    connReceiver_(e) {
        return n => {
            this.state_ !== 2 && (e === this.rx_ ? this.onPrimaryMessageReceived_(n) : e === this.secondaryConn_ ? this.onSecondaryMessageReceived_(n) : this.log_("message on old connection"))
        }
    }
    sendRequest(e) {
        let n = {
            t: "d",
            d: e
        };
        this.sendData_(n)
    }
    tryCleanupConnection() {
        this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId),
        this.conn_ = this.secondaryConn_,
        this.secondaryConn_ = null)
    }
    onSecondaryControl_(e) {
        if (hs in e) {
            let n = e[hs];
            n === to ? this.upgradeIfSecondaryHealthy_() : n === Zr ? (this.log_("Got a reset on secondary, closing it"),
            this.secondaryConn_.close(),
            (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) && this.close()) : n === eo && (this.log_("got pong on secondary."),
            this.secondaryResponsesRequired_--,
            this.upgradeIfSecondaryHealthy_())
        }
    }
    onSecondaryMessageReceived_(e) {
        let n = St("t", e)
          , s = St("d", e);
        if (n === "c")
            this.onSecondaryControl_(s);
        else if (n === "d")
            this.pendingDataMessages.push(s);
        else
            throw new Error("Unknown protocol layer: " + n)
    }
    upgradeIfSecondaryHealthy_() {
        this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."),
        this.isHealthy_ = !0,
        this.secondaryConn_.markConnectionHealthy(),
        this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."),
        this.secondaryConn_.send({
            t: "c",
            d: {
                t: so,
                d: {}
            }
        }))
    }
    proceedWithUpgrade_() {
        this.secondaryConn_.start(),
        this.log_("sending client ack on secondary"),
        this.secondaryConn_.send({
            t: "c",
            d: {
                t: to,
                d: {}
            }
        }),
        this.log_("Ending transmission on primary"),
        this.conn_.send({
            t: "c",
            d: {
                t: no,
                d: {}
            }
        }),
        this.tx_ = this.secondaryConn_,
        this.tryCleanupConnection()
    }
    onPrimaryMessageReceived_(e) {
        let n = St("t", e)
          , s = St("d", e);
        n === "c" ? this.onControl_(s) : n === "d" && this.onDataMessage_(s)
    }
    onDataMessage_(e) {
        this.onPrimaryResponse_(),
        this.onMessage_(e)
    }
    onPrimaryResponse_() {
        this.isHealthy_ || (this.primaryResponsesRequired_--,
        this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."),
        this.isHealthy_ = !0,
        this.conn_.markConnectionHealthy()))
    }
    onControl_(e) {
        let n = St(hs, e);
        if (Jr in e) {
            let s = e[Jr];
            if (n === Pc) {
                let i = {
                    ...s
                };
                this.repoInfo_.isUsingEmulator && (i.h = this.repoInfo_.host),
                this.onHandshake_(i)
            } else if (n === no) {
                this.log_("recvd end transmission on primary"),
                this.rx_ = this.secondaryConn_;
                for (let i = 0; i < this.pendingDataMessages.length; ++i)
                    this.onDataMessage_(this.pendingDataMessages[i]);
                this.pendingDataMessages = [],
                this.tryCleanupConnection()
            } else
                n === Rc ? this.onConnectionShutdown_(s) : n === Zr ? this.onReset_(s) : n === xc ? vs("Server Error: " + s) : n === eo ? (this.log_("got pong on primary."),
                this.onPrimaryResponse_(),
                this.sendPingOnPrimaryIfNecessary_()) : vs("Unknown control packet command: " + n)
        }
    }
    onHandshake_(e) {
        let n = e.ts
          , s = e.v
          , i = e.h;
        this.sessionId = e.s,
        this.repoInfo_.host = i,
        this.state_ === 0 && (this.conn_.start(),
        this.onConnectionEstablished_(this.conn_, n),
        on !== s && te("Protocol version mismatch detected"),
        this.tryStartUpgrade_())
    }
    tryStartUpgrade_() {
        let e = this.transportManager_.upgradeTransport();
        e && this.startUpgrade_(e)
    }
    startUpgrade_(e) {
        this.secondaryConn_ = new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),
        this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
        let n = this.connReceiver_(this.secondaryConn_)
          , s = this.disconnReceiver_(this.secondaryConn_);
        this.secondaryConn_.open(n, s),
        kt( () => {
            this.secondaryConn_ && (this.log_("Timed out trying to upgrade."),
            this.secondaryConn_.close())
        }
        , Math.floor(Ic))
    }
    onReset_(e) {
        this.log_("Reset packet received.  New host: " + e),
        this.repoInfo_.host = e,
        this.state_ === 1 ? this.close() : (this.closeConnections_(),
        this.start_())
    }
    onConnectionEstablished_(e, n) {
        this.log_("Realtime connection established."),
        this.conn_ = e,
        this.state_ = 1,
        this.onReady_ && (this.onReady_(n, this.sessionId),
        this.onReady_ = null),
        this.primaryResponsesRequired_ === 0 ? (this.log_("Primary connection is healthy."),
        this.isHealthy_ = !0) : kt( () => {
            this.sendPingOnPrimaryIfNecessary_()
        }
        , Math.floor(bc))
    }
    sendPingOnPrimaryIfNecessary_() {
        !this.isHealthy_ && this.state_ === 1 && (this.log_("sending ping on primary."),
        this.sendData_({
            t: "c",
            d: {
                t: so,
                d: {}
            }
        }))
    }
    onSecondaryConnectionLost_() {
        let e = this.secondaryConn_;
        this.secondaryConn_ = null,
        (this.tx_ === e || this.rx_ === e) && this.close()
    }
    onConnectionLost_(e) {
        this.conn_ = null,
        !e && this.state_ === 0 ? (this.log_("Realtime connection failed."),
        this.repoInfo_.isCacheableHost() && (Ve.remove("host:" + this.repoInfo_.host),
        this.repoInfo_.internalHost = this.repoInfo_.host)) : this.state_ === 1 && this.log_("Realtime connection lost."),
        this.close()
    }
    onConnectionShutdown_(e) {
        this.log_("Connection shutdown command received. Shutting down..."),
        this.onKill_ && (this.onKill_(e),
        this.onKill_ = null),
        this.onDisconnect_ = null,
        this.close()
    }
    sendData_(e) {
        if (this.state_ !== 1)
            throw "Connection is not connected";
        this.tx_.send(e)
    }
    close() {
        this.state_ !== 2 && (this.log_("Closing realtime connection."),
        this.state_ = 2,
        this.closeConnections_(),
        this.onDisconnect_ && (this.onDisconnect_(),
        this.onDisconnect_ = null))
    }
    closeConnections_() {
        this.log_("Shutting down all connections"),
        this.conn_ && (this.conn_.close(),
        this.conn_ = null),
        this.secondaryConn_ && (this.secondaryConn_.close(),
        this.secondaryConn_ = null),
        this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_),
        this.healthyTimeout_ = null)
    }
}
;
var un = class {
    put(e, n, s, i) {}
    merge(e, n, s, i) {}
    refreshAuthToken(e) {}
    refreshAppCheckToken(e) {}
    onDisconnectPut(e, n, s) {}
    onDisconnectMerge(e, n, s) {}
    onDisconnectCancel(e, n) {}
    reportStats(e) {}
}
;
var hn = class {
    constructor(e) {
        this.allowedEvents_ = e,
        this.listeners_ = {},
        v(Array.isArray(e) && e.length > 0, "Requires a non-empty array")
    }
    trigger(e, ...n) {
        if (Array.isArray(this.listeners_[e])) {
            let s = [...this.listeners_[e]];
            for (let i = 0; i < s.length; i++)
                s[i].callback.apply(s[i].context, n)
        }
    }
    on(e, n, s) {
        this.validateEventType_(e),
        this.listeners_[e] = this.listeners_[e] || [],
        this.listeners_[e].push({
            callback: n,
            context: s
        });
        let i = this.getInitialEvent(e);
        i && n.apply(s, i)
    }
    off(e, n, s) {
        this.validateEventType_(e);
        let i = this.listeners_[e] || [];
        for (let r = 0; r < i.length; r++)
            if (i[r].callback === n && (!s || s === i[r].context)) {
                i.splice(r, 1);
                return
            }
    }
    validateEventType_(e) {
        v(this.allowedEvents_.find(n => n === e), "Unknown event: " + e)
    }
}
;
var dn = class t extends hn {
    static getInstance() {
        return new t
    }
    constructor() {
        super(["online"]),
        this.online_ = !0,
        typeof window < "u" && typeof window.addEventListener < "u" && !ss() && (window.addEventListener("online", () => {
            this.online_ || (this.online_ = !0,
            this.trigger("online", !0))
        }
        , !1),
        window.addEventListener("offline", () => {
            this.online_ && (this.online_ = !1,
            this.trigger("online", !1))
        }
        , !1))
    }
    getInitialEvent(e) {
        return v(e === "online", "Unknown event type: " + e),
        [this.online_]
    }
    currentlyOnline() {
        return this.online_
    }
}
;
var io = 32
  , ro = 768
  , M = class {
    constructor(e, n) {
        if (n === void 0) {
            this.pieces_ = e.split("/");
            let s = 0;
            for (let i = 0; i < this.pieces_.length; i++)
                this.pieces_[i].length > 0 && (this.pieces_[s] = this.pieces_[i],
                s++);
            this.pieces_.length = s,
            this.pieceNum_ = 0
        } else
            this.pieces_ = e,
            this.pieceNum_ = n
    }
    toString() {
        let e = "";
        for (let n = this.pieceNum_; n < this.pieces_.length; n++)
            this.pieces_[n] !== "" && (e += "/" + this.pieces_[n]);
        return e || "/"
    }
}
;
function A() {
    return new M("")
}
function I(t) {
    return t.pieceNum_ >= t.pieces_.length ? null : t.pieces_[t.pieceNum_]
}
function Oe(t) {
    return t.pieces_.length - t.pieceNum_
}
function W(t) {
    let e = t.pieceNum_;
    return e < t.pieces_.length && e++,
    new M(t.pieces_,e)
}
function gi(t) {
    return t.pieceNum_ < t.pieces_.length ? t.pieces_[t.pieces_.length - 1] : null
}
function Ac(t) {
    let e = "";
    for (let n = t.pieceNum_; n < t.pieces_.length; n++)
        t.pieces_[n] !== "" && (e += "/" + encodeURIComponent(String(t.pieces_[n])));
    return e || "/"
}
function At(t, e=0) {
    return t.pieces_.slice(t.pieceNum_ + e)
}
function Yo(t) {
    if (t.pieceNum_ >= t.pieces_.length)
        return null;
    let e = [];
    for (let n = t.pieceNum_; n < t.pieces_.length - 1; n++)
        e.push(t.pieces_[n]);
    return new M(e,0)
}
function H(t, e) {
    let n = [];
    for (let s = t.pieceNum_; s < t.pieces_.length; s++)
        n.push(t.pieces_[s]);
    if (e instanceof M)
        for (let s = e.pieceNum_; s < e.pieces_.length; s++)
            n.push(e.pieces_[s]);
    else {
        let s = e.split("/");
        for (let i = 0; i < s.length; i++)
            s[i].length > 0 && n.push(s[i])
    }
    return new M(n,0)
}
function b(t) {
    return t.pieceNum_ >= t.pieces_.length
}
function ee(t, e) {
    let n = I(t)
      , s = I(e);
    if (n === null)
        return e;
    if (n === s)
        return ee(W(t), W(e));
    throw new Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")")
}
function Mc(t, e) {
    let n = At(t, 0)
      , s = At(e, 0);
    for (let i = 0; i < n.length && i < s.length; i++) {
        let r = Xe(n[i], s[i]);
        if (r !== 0)
            return r
    }
    return n.length === s.length ? 0 : n.length < s.length ? -1 : 1
}
function yi(t, e) {
    if (Oe(t) !== Oe(e))
        return !1;
    for (let n = t.pieceNum_, s = e.pieceNum_; n <= t.pieces_.length; n++,
    s++)
        if (t.pieces_[n] !== e.pieces_[s])
            return !1;
    return !0
}
function oe(t, e) {
    let n = t.pieceNum_
      , s = e.pieceNum_;
    if (Oe(t) > Oe(e))
        return !1;
    for (; n < t.pieces_.length; ) {
        if (t.pieces_[n] !== e.pieces_[s])
            return !1;
        ++n,
        ++s
    }
    return !0
}
var ks = class {
    constructor(e, n) {
        this.errorPrefix_ = n,
        this.parts_ = At(e, 0),
        this.byteLength_ = Math.max(1, this.parts_.length);
        for (let s = 0; s < this.parts_.length; s++)
            this.byteLength_ += Tt(this.parts_[s]);
        jo(this)
    }
}
;
function Dc(t, e) {
    t.parts_.length > 0 && (t.byteLength_ += 1),
    t.parts_.push(e),
    t.byteLength_ += Tt(e),
    jo(t)
}
function Oc(t) {
    let e = t.parts_.pop();
    t.byteLength_ -= Tt(e),
    t.parts_.length > 0 && (t.byteLength_ -= 1)
}
function jo(t) {
    if (t.byteLength_ > ro)
        throw new Error(t.errorPrefix_ + "has a key path longer than " + ro + " bytes (" + t.byteLength_ + ").");
    if (t.parts_.length > io)
        throw new Error(t.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + io + ") or object contains a cycle " + Be(t))
}
function Be(t) {
    return t.parts_.length === 0 ? "" : "in property '" + t.parts_.join(".") + "'"
}
var Rs = class t extends hn {
    static getInstance() {
        return new t
    }
    constructor() {
        super(["visible"]);
        let e, n;
        typeof document < "u" && typeof document.addEventListener < "u" && (typeof document.hidden < "u" ? (n = "visibilitychange",
        e = "hidden") : typeof document.mozHidden < "u" ? (n = "mozvisibilitychange",
        e = "mozHidden") : typeof document.msHidden < "u" ? (n = "msvisibilitychange",
        e = "msHidden") : typeof document.webkitHidden < "u" && (n = "webkitvisibilitychange",
        e = "webkitHidden")),
        this.visible_ = !0,
        n && document.addEventListener(n, () => {
            let s = !document[e];
            s !== this.visible_ && (this.visible_ = s,
            this.trigger("visible", s))
        }
        , !1)
    }
    getInitialEvent(e) {
        return v(e === "visible", "Unknown event type: " + e),
        [this.visible_]
    }
}
;
var It = 1e3
  , Lc = 300 * 1e3
  , oo = 30 * 1e3
  , Fc = 1.3
  , Wc = 3e4
  , Uc = "server_kill"
  , lo = 3
  , je = class t extends un {
    constructor(e, n, s, i, r, o, l, u) {
        if (super(),
        this.repoInfo_ = e,
        this.applicationId_ = n,
        this.onDataUpdate_ = s,
        this.onConnectStatus_ = i,
        this.onServerInfoUpdate_ = r,
        this.authTokenProvider_ = o,
        this.appCheckTokenProvider_ = l,
        this.authOverride_ = u,
        this.id = t.nextPersistentConnectionId_++,
        this.log_ = Gt("p:" + this.id + ":"),
        this.interruptReasons_ = {},
        this.listens = new Map,
        this.outstandingPuts_ = [],
        this.outstandingGets_ = [],
        this.outstandingPutCount_ = 0,
        this.outstandingGetCount_ = 0,
        this.onDisconnectRequestQueue_ = [],
        this.connected_ = !1,
        this.reconnectDelay_ = It,
        this.maxReconnectDelay_ = Lc,
        this.securityDebugCallback_ = null,
        this.lastSessionId = null,
        this.establishConnectionTimer_ = null,
        this.visible_ = !1,
        this.requestCBHash_ = {},
        this.requestNumber_ = 0,
        this.realtime_ = null,
        this.authToken_ = null,
        this.appCheckToken_ = null,
        this.forceTokenRefresh_ = !1,
        this.invalidAuthTokenCount_ = 0,
        this.invalidAppCheckTokenCount_ = 0,
        this.firstConnection_ = !0,
        this.lastConnectionAttemptTime_ = null,
        this.lastConnectionEstablishedTime_ = null,
        u && !ye())
            throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
        Rs.getInstance().on("visible", this.onVisible_, this),
        e.host.indexOf("fblocal") === -1 && dn.getInstance().on("online", this.onOnline_, this)
    }
    sendRequest(e, n, s) {
        let i = ++this.requestNumber_
          , r = {
            r: i,
            a: e,
            b: n
        };
        this.log_(q(r)),
        v(this.connected_, "sendRequest call when we're not connected not allowed."),
        this.realtime_.sendRequest(r),
        s && (this.requestCBHash_[i] = s)
    }
    get(e) {
        this.initConnection_();
        let n = new ge
          , i = {
            action: "g",
            request: {
                p: e._path.toString(),
                q: e._queryObject
            },
            onComplete: o => {
                let l = o.d;
                o.s === "ok" ? n.resolve(l) : n.reject(l)
            }
        };
        this.outstandingGets_.push(i),
        this.outstandingGetCount_++;
        let r = this.outstandingGets_.length - 1;
        return this.connected_ && this.sendGet_(r),
        n.promise
    }
    listen(e, n, s, i) {
        this.initConnection_();
        let r = e._queryIdentifier
          , o = e._path.toString();
        this.log_("Listen called for " + o + " " + r),
        this.listens.has(o) || this.listens.set(o, new Map),
        v(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"),
        v(!this.listens.get(o).has(r), "listen() called twice for same path/queryId.");
        let l = {
            onComplete: i,
            hashFn: n,
            query: e,
            tag: s
        };
        this.listens.get(o).set(r, l),
        this.connected_ && this.sendListen_(l)
    }
    sendGet_(e) {
        let n = this.outstandingGets_[e];
        this.sendRequest("g", n.request, s => {
            delete this.outstandingGets_[e],
            this.outstandingGetCount_--,
            this.outstandingGetCount_ === 0 && (this.outstandingGets_ = []),
            n.onComplete && n.onComplete(s)
        }
        )
    }
    sendListen_(e) {
        let n = e.query
          , s = n._path.toString()
          , i = n._queryIdentifier;
        this.log_("Listen on " + s + " for " + i);
        let r = {
            p: s
        }
          , o = "q";
        e.tag && (r.q = n._queryObject,
        r.t = e.tag),
        r.h = e.hashFn(),
        this.sendRequest(o, r, l => {
            let u = l.d
              , h = l.s;
            t.warnOnListenWarnings_(u, n),
            (this.listens.get(s) && this.listens.get(s).get(i)) === e && (this.log_("listen response", l),
            h !== "ok" && this.removeListen_(s, i),
            e.onComplete && e.onComplete(h, u))
        }
        )
    }
    static warnOnListenWarnings_(e, n) {
        if (e && typeof e == "object" && ue(e, "w")) {
            let s = He(e, "w");
            if (Array.isArray(s) && ~s.indexOf("no_index")) {
                let i = '".indexOn": "' + n._queryParams.getIndex().toString() + '"'
                  , r = n._path.toString();
                te(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)
            }
        }
    }
    refreshAuthToken(e) {
        this.authToken_ = e,
        this.log_("Auth token refreshed"),
        this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, () => {}
        ),
        this.reduceReconnectDelayIfAdminCredential_(e)
    }
    reduceReconnectDelayIfAdminCredential_(e) {
        (e && e.length === 40 || Sr(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."),
        this.maxReconnectDelay_ = oo)
    }
    refreshAppCheckToken(e) {
        this.appCheckToken_ = e,
        this.log_("App check token refreshed"),
        this.appCheckToken_ ? this.tryAppCheck() : this.connected_ && this.sendRequest("unappeck", {}, () => {}
        )
    }
    tryAuth() {
        if (this.connected_ && this.authToken_) {
            let e = this.authToken_
              , n = Tr(e) ? "auth" : "gauth"
              , s = {
                cred: e
            };
            this.authOverride_ === null ? s.noauth = !0 : typeof this.authOverride_ == "object" && (s.authvar = this.authOverride_),
            this.sendRequest(n, s, i => {
                let r = i.s
                  , o = i.d || "error";
                this.authToken_ === e && (r === "ok" ? this.invalidAuthTokenCount_ = 0 : this.onAuthRevoked_(r, o))
            }
            )
        }
    }
    tryAppCheck() {
        this.connected_ && this.appCheckToken_ && this.sendRequest("appcheck", {
            token: this.appCheckToken_
        }, e => {
            let n = e.s
              , s = e.d || "error";
            n === "ok" ? this.invalidAppCheckTokenCount_ = 0 : this.onAppCheckRevoked_(n, s)
        }
        )
    }
    unlisten(e, n) {
        let s = e._path.toString()
          , i = e._queryIdentifier;
        this.log_("Unlisten called for " + s + " " + i),
        v(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query"),
        this.removeListen_(s, i) && this.connected_ && this.sendUnlisten_(s, i, e._queryObject, n)
    }
    sendUnlisten_(e, n, s, i) {
        this.log_("Unlisten on " + e + " for " + n);
        let r = {
            p: e
        }
          , o = "n";
        i && (r.q = s,
        r.t = i),
        this.sendRequest(o, r)
    }
    onDisconnectPut(e, n, s) {
        this.initConnection_(),
        this.connected_ ? this.sendOnDisconnect_("o", e, n, s) : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "o",
            data: n,
            onComplete: s
        })
    }
    onDisconnectMerge(e, n, s) {
        this.initConnection_(),
        this.connected_ ? this.sendOnDisconnect_("om", e, n, s) : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "om",
            data: n,
            onComplete: s
        })
    }
    onDisconnectCancel(e, n) {
        this.initConnection_(),
        this.connected_ ? this.sendOnDisconnect_("oc", e, null, n) : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "oc",
            data: null,
            onComplete: n
        })
    }
    sendOnDisconnect_(e, n, s, i) {
        let r = {
            p: n,
            d: s
        };
        this.log_("onDisconnect " + e, r),
        this.sendRequest(e, r, o => {
            i && setTimeout( () => {
                i(o.s, o.d)
            }
            , Math.floor(0))
        }
        )
    }
    put(e, n, s, i) {
        this.putInternal("p", e, n, s, i)
    }
    merge(e, n, s, i) {
        this.putInternal("m", e, n, s, i)
    }
    putInternal(e, n, s, i, r) {
        this.initConnection_();
        let o = {
            p: n,
            d: s
        };
        r !== void 0 && (o.h = r),
        this.outstandingPuts_.push({
            action: e,
            request: o,
            onComplete: i
        }),
        this.outstandingPutCount_++;
        let l = this.outstandingPuts_.length - 1;
        this.connected_ ? this.sendPut_(l) : this.log_("Buffering put: " + n)
    }
    sendPut_(e) {
        let n = this.outstandingPuts_[e].action
          , s = this.outstandingPuts_[e].request
          , i = this.outstandingPuts_[e].onComplete;
        this.outstandingPuts_[e].queued = this.connected_,
        this.sendRequest(n, s, r => {
            this.log_(n + " response", r),
            delete this.outstandingPuts_[e],
            this.outstandingPutCount_--,
            this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []),
            i && i(r.s, r.d)
        }
        )
    }
    reportStats(e) {
        if (this.connected_) {
            let n = {
                c: e
            };
            this.log_("reportStats", n),
            this.sendRequest("s", n, s => {
                if (s.s !== "ok") {
                    let r = s.d;
                    this.log_("reportStats", "Error sending stats: " + r)
                }
            }
            )
        }
    }
    onDataMessage_(e) {
        if ("r" in e) {
            this.log_("from server: " + q(e));
            let n = e.r
              , s = this.requestCBHash_[n];
            s && (delete this.requestCBHash_[n],
            s(e.b))
        } else {
            if ("error" in e)
                throw "A server-side error has occurred: " + e.error;
            "a" in e && this.onDataPush_(e.a, e.b)
        }
    }
    onDataPush_(e, n) {
        this.log_("handleServerMessage", e, n),
        e === "d" ? this.onDataUpdate_(n.p, n.d, !1, n.t) : e === "m" ? this.onDataUpdate_(n.p, n.d, !0, n.t) : e === "c" ? this.onListenRevoked_(n.p, n.q) : e === "ac" ? this.onAuthRevoked_(n.s, n.d) : e === "apc" ? this.onAppCheckRevoked_(n.s, n.d) : e === "sd" ? this.onSecurityDebugPacket_(n) : vs("Unrecognized action received from server: " + q(e) + `
Are you using the latest client?`)
    }
    onReady_(e, n) {
        this.log_("connection ready"),
        this.connected_ = !0,
        this.lastConnectionEstablishedTime_ = new Date().getTime(),
        this.handleTimestamp_(e),
        this.lastSessionId = n,
        this.firstConnection_ && this.sendConnectStats_(),
        this.restoreState_(),
        this.firstConnection_ = !1,
        this.onConnectStatus_(!0)
    }
    scheduleConnect_(e) {
        v(!this.realtime_, "Scheduling a connect when we're already connected/ing?"),
        this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_),
        this.establishConnectionTimer_ = setTimeout( () => {
            this.establishConnectionTimer_ = null,
            this.establishConnection_()
        }
        , Math.floor(e))
    }
    initConnection_() {
        !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0)
    }
    onVisible_(e) {
        e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."),
        this.reconnectDelay_ = It,
        this.realtime_ || this.scheduleConnect_(0)),
        this.visible_ = e
    }
    onOnline_(e) {
        e ? (this.log_("Browser went online."),
        this.reconnectDelay_ = It,
        this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."),
        this.realtime_ && this.realtime_.close())
    }
    onRealtimeDisconnect_() {
        if (this.log_("data client disconnected"),
        this.connected_ = !1,
        this.realtime_ = null,
        this.cancelSentTransactions_(),
        this.requestCBHash_ = {},
        this.shouldReconnect_()) {
            this.visible_ ? this.lastConnectionEstablishedTime_ && (new Date().getTime() - this.lastConnectionEstablishedTime_ > Wc && (this.reconnectDelay_ = It),
            this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."),
            this.reconnectDelay_ = this.maxReconnectDelay_,
            this.lastConnectionAttemptTime_ = new Date().getTime());
            let e = Math.max(0, new Date().getTime() - this.lastConnectionAttemptTime_)
              , n = Math.max(0, this.reconnectDelay_ - e);
            n = Math.random() * n,
            this.log_("Trying to reconnect in " + n + "ms"),
            this.scheduleConnect_(n),
            this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * Fc)
        }
        this.onConnectStatus_(!1)
    }
    async establishConnection_() {
        if (this.shouldReconnect_()) {
            this.log_("Making a connection attempt"),
            this.lastConnectionAttemptTime_ = new Date().getTime(),
            this.lastConnectionEstablishedTime_ = null;
            let e = this.onDataMessage_.bind(this)
              , n = this.onReady_.bind(this)
              , s = this.onRealtimeDisconnect_.bind(this)
              , i = this.id + ":" + t.nextConnectionId_++
              , r = this.lastSessionId
              , o = !1
              , l = null
              , u = function() {
                l ? l.close() : (o = !0,
                s())
            }
              , h = function(d) {
                v(l, "sendRequest call when we're not connected not allowed."),
                l.sendRequest(d)
            };
            this.realtime_ = {
                close: u,
                sendRequest: h
            };
            let p = this.forceTokenRefresh_;
            this.forceTokenRefresh_ = !1;
            try {
                let[d,m] = await Promise.all([this.authTokenProvider_.getToken(p), this.appCheckTokenProvider_.getToken(p)]);
                o ? Y("getToken() completed but was canceled") : (Y("getToken() completed. Creating connection."),
                this.authToken_ = d && d.accessToken,
                this.appCheckToken_ = m && m.token,
                l = new Ns(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g => {
                    te(g + " (" + this.repoInfo_.toString() + ")"),
                    this.interrupt(Uc)
                }
                ,r))
            } catch (d) {
                this.log_("Failed to get token: " + d),
                o || (this.repoInfo_.nodeAdmin && te(d),
                u())
            }
        }
    }
    interrupt(e) {
        Y("Interrupting connection for reason: " + e),
        this.interruptReasons_[e] = !0,
        this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_),
        this.establishConnectionTimer_ = null),
        this.connected_ && this.onRealtimeDisconnect_())
    }
    resume(e) {
        Y("Resuming connection for reason: " + e),
        delete this.interruptReasons_[e],
        sn(this.interruptReasons_) && (this.reconnectDelay_ = It,
        this.realtime_ || this.scheduleConnect_(0))
    }
    handleTimestamp_(e) {
        let n = e - new Date().getTime();
        this.onServerInfoUpdate_({
            serverTimeOffset: n
        })
    }
    cancelSentTransactions_() {
        for (let e = 0; e < this.outstandingPuts_.length; e++) {
            let n = this.outstandingPuts_[e];
            n && "h" in n.request && n.queued && (n.onComplete && n.onComplete("disconnect"),
            delete this.outstandingPuts_[e],
            this.outstandingPutCount_--)
        }
        this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = [])
    }
    onListenRevoked_(e, n) {
        let s;
        n ? s = n.map(r => pi(r)).join("$") : s = "default";
        let i = this.removeListen_(e, s);
        i && i.onComplete && i.onComplete("permission_denied")
    }
    removeListen_(e, n) {
        let s = new M(e).toString(), i;
        if (this.listens.has(s)) {
            let r = this.listens.get(s);
            i = r.get(n),
            r.delete(n),
            r.size === 0 && this.listens.delete(s)
        } else
            i = void 0;
        return i
    }
    onAuthRevoked_(e, n) {
        Y("Auth token revoked: " + e + "/" + n),
        this.authToken_ = null,
        this.forceTokenRefresh_ = !0,
        this.realtime_.close(),
        (e === "invalid_token" || e === "permission_denied") && (this.invalidAuthTokenCount_++,
        this.invalidAuthTokenCount_ >= lo && (this.reconnectDelay_ = oo,
        this.authTokenProvider_.notifyForInvalidToken()))
    }
    onAppCheckRevoked_(e, n) {
        Y("App check token revoked: " + e + "/" + n),
        this.appCheckToken_ = null,
        this.forceTokenRefresh_ = !0,
        (e === "invalid_token" || e === "permission_denied") && (this.invalidAppCheckTokenCount_++,
        this.invalidAppCheckTokenCount_ >= lo && this.appCheckTokenProvider_.notifyForInvalidToken())
    }
    onSecurityDebugPacket_(e) {
        this.securityDebugCallback_ ? this.securityDebugCallback_(e) : "msg" in e && console.log("FIREBASE: " + e.msg.replace(`
`, `
FIREBASE: `))
    }
    restoreState_() {
        this.tryAuth(),
        this.tryAppCheck();
        for (let e of this.listens.values())
            for (let n of e.values())
                this.sendListen_(n);
        for (let e = 0; e < this.outstandingPuts_.length; e++)
            this.outstandingPuts_[e] && this.sendPut_(e);
        for (; this.onDisconnectRequestQueue_.length; ) {
            let e = this.onDisconnectRequestQueue_.shift();
            this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete)
        }
        for (let e = 0; e < this.outstandingGets_.length; e++)
            this.outstandingGets_[e] && this.sendGet_(e)
    }
    sendConnectStats_() {
        let e = {}
          , n = "js";
        ye() && (this.repoInfo_.nodeAdmin ? n = "admin_node" : n = "node"),
        e["sdk." + n + "." + _i.replace(/\./g, "-")] = 1,
        ss() ? e["framework.cordova"] = 1 : Er() && (e["framework.reactnative"] = 1),
        this.reportStats(e)
    }
    shouldReconnect_() {
        let e = dn.getInstance().currentlyOnline();
        return sn(this.interruptReasons_) && e
    }
}
;
je.nextPersistentConnectionId_ = 0;
je.nextConnectionId_ = 0;
var k = class t {
    constructor(e, n) {
        this.name = e,
        this.node = n
    }
    static Wrap(e, n) {
        return new t(e,n)
    }
}
;
var rt = class {
    getCompare() {
        return this.compare.bind(this)
    }
    indexedValueChanged(e, n) {
        let s = new k(Ye,e)
          , i = new k(Ye,n);
        return this.compare(s, i) !== 0
    }
    minPost() {
        return k.MIN
    }
}
;
var rn, fn = class extends rt {
    static get __EMPTY_NODE() {
        return rn
    }
    static set __EMPTY_NODE(e) {
        rn = e
    }
    compare(e, n) {
        return Xe(e.name, n.name)
    }
    isDefinedOn(e) {
        throw tt("KeyIndex.isDefinedOn not expected to be called.")
    }
    indexedValueChanged(e, n) {
        return !1
    }
    minPost() {
        return k.MIN
    }
    maxPost() {
        return new k(De,rn)
    }
    makePost(e, n) {
        return v(typeof e == "string", "KeyIndex indexValue must always be a string."),
        new k(e,rn)
    }
    toString() {
        return ".key"
    }
}
, qe = new fn;
var st = class {
    constructor(e, n, s, i, r=null) {
        this.isReverse_ = i,
        this.resultGenerator_ = r,
        this.nodeStack_ = [];
        let o = 1;
        for (; !e.isEmpty(); )
            if (e = e,
            o = n ? s(e.key, n) : 1,
            i && (o *= -1),
            o < 0)
                this.isReverse_ ? e = e.left : e = e.right;
            else if (o === 0) {
                this.nodeStack_.push(e);
                break
            } else
                this.nodeStack_.push(e),
                this.isReverse_ ? e = e.right : e = e.left
    }
    getNext() {
        if (this.nodeStack_.length === 0)
            return null;
        let e = this.nodeStack_.pop(), n;
        if (this.resultGenerator_ ? n = this.resultGenerator_(e.key, e.value) : n = {
            key: e.key,
            value: e.value
        },
        this.isReverse_)
            for (e = e.left; !e.isEmpty(); )
                this.nodeStack_.push(e),
                e = e.right;
        else
            for (e = e.right; !e.isEmpty(); )
                this.nodeStack_.push(e),
                e = e.left;
        return n
    }
    hasNext() {
        return this.nodeStack_.length > 0
    }
    peek() {
        if (this.nodeStack_.length === 0)
            return null;
        let e = this.nodeStack_[this.nodeStack_.length - 1];
        return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
            key: e.key,
            value: e.value
        }
    }
}
  , Z = class t {
    constructor(e, n, s, i, r) {
        this.key = e,
        this.value = n,
        this.color = s ?? t.RED,
        this.left = i ?? le.EMPTY_NODE,
        this.right = r ?? le.EMPTY_NODE
    }
    copy(e, n, s, i, r) {
        return new t(e ?? this.key,n ?? this.value,s ?? this.color,i ?? this.left,r ?? this.right)
    }
    count() {
        return this.left.count() + 1 + this.right.count()
    }
    isEmpty() {
        return !1
    }
    inorderTraversal(e) {
        return this.left.inorderTraversal(e) || !!e(this.key, this.value) || this.right.inorderTraversal(e)
    }
    reverseTraversal(e) {
        return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
    }
    min_() {
        return this.left.isEmpty() ? this : this.left.min_()
    }
    minKey() {
        return this.min_().key
    }
    maxKey() {
        return this.right.isEmpty() ? this.key : this.right.maxKey()
    }
    insert(e, n, s) {
        let i = this
          , r = s(e, i.key);
        return r < 0 ? i = i.copy(null, null, null, i.left.insert(e, n, s), null) : r === 0 ? i = i.copy(null, n, null, null, null) : i = i.copy(null, null, null, null, i.right.insert(e, n, s)),
        i.fixUp_()
    }
    removeMin_() {
        if (this.left.isEmpty())
            return le.EMPTY_NODE;
        let e = this;
        return !e.left.isRed_() && !e.left.left.isRed_() && (e = e.moveRedLeft_()),
        e = e.copy(null, null, null, e.left.removeMin_(), null),
        e.fixUp_()
    }
    remove(e, n) {
        let s, i;
        if (s = this,
        n(e, s.key) < 0)
            !s.left.isEmpty() && !s.left.isRed_() && !s.left.left.isRed_() && (s = s.moveRedLeft_()),
            s = s.copy(null, null, null, s.left.remove(e, n), null);
        else {
            if (s.left.isRed_() && (s = s.rotateRight_()),
            !s.right.isEmpty() && !s.right.isRed_() && !s.right.left.isRed_() && (s = s.moveRedRight_()),
            n(e, s.key) === 0) {
                if (s.right.isEmpty())
                    return le.EMPTY_NODE;
                i = s.right.min_(),
                s = s.copy(i.key, i.value, null, null, s.right.removeMin_())
            }
            s = s.copy(null, null, null, null, s.right.remove(e, n))
        }
        return s.fixUp_()
    }
    isRed_() {
        return this.color
    }
    fixUp_() {
        let e = this;
        return e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()),
        e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()),
        e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()),
        e
    }
    moveRedLeft_() {
        let e = this.colorFlip_();
        return e.right.left.isRed_() && (e = e.copy(null, null, null, null, e.right.rotateRight_()),
        e = e.rotateLeft_(),
        e = e.colorFlip_()),
        e
    }
    moveRedRight_() {
        let e = this.colorFlip_();
        return e.left.left.isRed_() && (e = e.rotateRight_(),
        e = e.colorFlip_()),
        e
    }
    rotateLeft_() {
        let e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null)
    }
    rotateRight_() {
        let e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e)
    }
    colorFlip_() {
        let e = this.left.copy(null, null, !this.left.color, null, null)
          , n = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, e, n)
    }
    checkMaxDepth_() {
        let e = this.check_();
        return Math.pow(2, e) <= this.count() + 1
    }
    check_() {
        if (this.isRed_() && this.left.isRed_())
            throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
        if (this.right.isRed_())
            throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
        let e = this.left.check_();
        if (e !== this.right.check_())
            throw new Error("Black depths differ");
        return e + (this.isRed_() ? 0 : 1)
    }
}
;
Z.RED = !0;
Z.BLACK = !1;
var xs = class {
    copy(e, n, s, i, r) {
        return this
    }
    insert(e, n, s) {
        return new Z(e,n,null)
    }
    remove(e, n) {
        return this
    }
    count() {
        return 0
    }
    isEmpty() {
        return !0
    }
    inorderTraversal(e) {
        return !1
    }
    reverseTraversal(e) {
        return !1
    }
    minKey() {
        return null
    }
    maxKey() {
        return null
    }
    check_() {
        return 0
    }
    isRed_() {
        return !1
    }
}
  , le = class t {
    constructor(e, n=t.EMPTY_NODE) {
        this.comparator_ = e,
        this.root_ = n
    }
    insert(e, n) {
        return new t(this.comparator_,this.root_.insert(e, n, this.comparator_).copy(null, null, Z.BLACK, null, null))
    }
    remove(e) {
        return new t(this.comparator_,this.root_.remove(e, this.comparator_).copy(null, null, Z.BLACK, null, null))
    }
    get(e) {
        let n, s = this.root_;
        for (; !s.isEmpty(); ) {
            if (n = this.comparator_(e, s.key),
            n === 0)
                return s.value;
            n < 0 ? s = s.left : n > 0 && (s = s.right)
        }
        return null
    }
    getPredecessorKey(e) {
        let n, s = this.root_, i = null;
        for (; !s.isEmpty(); )
            if (n = this.comparator_(e, s.key),
            n === 0) {
                if (s.left.isEmpty())
                    return i ? i.key : null;
                for (s = s.left; !s.right.isEmpty(); )
                    s = s.right;
                return s.key
            } else
                n < 0 ? s = s.left : n > 0 && (i = s,
                s = s.right);
        throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
    }
    isEmpty() {
        return this.root_.isEmpty()
    }
    count() {
        return this.root_.count()
    }
    minKey() {
        return this.root_.minKey()
    }
    maxKey() {
        return this.root_.maxKey()
    }
    inorderTraversal(e) {
        return this.root_.inorderTraversal(e)
    }
    reverseTraversal(e) {
        return this.root_.reverseTraversal(e)
    }
    getIterator(e) {
        return new st(this.root_,null,this.comparator_,!1,e)
    }
    getIteratorFrom(e, n) {
        return new st(this.root_,e,this.comparator_,!1,n)
    }
    getReverseIteratorFrom(e, n) {
        return new st(this.root_,e,this.comparator_,!0,n)
    }
    getReverseIterator(e) {
        return new st(this.root_,null,this.comparator_,!0,e)
    }
}
;
le.EMPTY_NODE = new xs;
function $c(t, e) {
    return Xe(t.name, e.name)
}
function vi(t, e) {
    return Xe(t, e)
}
var Ps;
function Hc(t) {
    Ps = t
}
var Ko = function(t) {
    return typeof t == "number" ? "number:" + Po(t) : "string:" + t
}
  , Qo = function(t) {
    if (t.isLeafNode()) {
        let e = t.val();
        v(typeof e == "string" || typeof e == "number" || typeof e == "object" && ue(e, ".sv"), "Priority must be a string or number.")
    } else
        v(t === Ps || t.isEmpty(), "priority of unexpected type.");
    v(t === Ps || t.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
};
var ao, Ie = class t {
    static set __childrenNodeConstructor(e) {
        ao = e
    }
    static get __childrenNodeConstructor() {
        return ao
    }
    constructor(e, n=t.__childrenNodeConstructor.EMPTY_NODE) {
        this.value_ = e,
        this.priorityNode_ = n,
        this.lazyHash_ = null,
        v(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value."),
        Qo(this.priorityNode_)
    }
    isLeafNode() {
        return !0
    }
    getPriority() {
        return this.priorityNode_
    }
    updatePriority(e) {
        return new t(this.value_,e)
    }
    getImmediateChild(e) {
        return e === ".priority" ? this.priorityNode_ : t.__childrenNodeConstructor.EMPTY_NODE
    }
    getChild(e) {
        return b(e) ? this : I(e) === ".priority" ? this.priorityNode_ : t.__childrenNodeConstructor.EMPTY_NODE
    }
    hasChild() {
        return !1
    }
    getPredecessorChildName(e, n) {
        return null
    }
    updateImmediateChild(e, n) {
        return e === ".priority" ? this.updatePriority(n) : n.isEmpty() && e !== ".priority" ? this : t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, n).updatePriority(this.priorityNode_)
    }
    updateChild(e, n) {
        let s = I(e);
        return s === null ? n : n.isEmpty() && s !== ".priority" ? this : (v(s !== ".priority" || Oe(e) === 1, ".priority must be the last token in a path"),
        this.updateImmediateChild(s, t.__childrenNodeConstructor.EMPTY_NODE.updateChild(W(e), n)))
    }
    isEmpty() {
        return !1
    }
    numChildren() {
        return 0
    }
    forEachChild(e, n) {
        return !1
    }
    val(e) {
        return e && !this.getPriority().isEmpty() ? {
            ".value": this.getValue(),
            ".priority": this.getPriority().val()
        } : this.getValue()
    }
    hash() {
        if (this.lazyHash_ === null) {
            let e = "";
            this.priorityNode_.isEmpty() || (e += "priority:" + Ko(this.priorityNode_.val()) + ":");
            let n = typeof this.value_;
            e += n + ":",
            n === "number" ? e += Po(this.value_) : e += this.value_,
            this.lazyHash_ = Ro(e)
        }
        return this.lazyHash_
    }
    getValue() {
        return this.value_
    }
    compareTo(e) {
        return e === t.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof t.__childrenNodeConstructor ? -1 : (v(e.isLeafNode(), "Unknown node type"),
        this.compareToLeafNode_(e))
    }
    compareToLeafNode_(e) {
        let n = typeof e.value_
          , s = typeof this.value_
          , i = t.VALUE_TYPE_ORDER.indexOf(n)
          , r = t.VALUE_TYPE_ORDER.indexOf(s);
        return v(i >= 0, "Unknown leaf type: " + n),
        v(r >= 0, "Unknown leaf type: " + s),
        i === r ? s === "object" ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : r - i
    }
    withIndex() {
        return this
    }
    isIndexed() {
        return !0
    }
    equals(e) {
        if (e === this)
            return !0;
        if (e.isLeafNode()) {
            let n = e;
            return this.value_ === n.value_ && this.priorityNode_.equals(n.priorityNode_)
        } else
            return !1
    }
}
;
Ie.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
var Xo, Jo;
function Bc(t) {
    Xo = t
}
function Vc(t) {
    Jo = t
}
var As = class extends rt {
    compare(e, n) {
        let s = e.node.getPriority()
          , i = n.node.getPriority()
          , r = s.compareTo(i);
        return r === 0 ? Xe(e.name, n.name) : r
    }
    isDefinedOn(e) {
        return !e.getPriority().isEmpty()
    }
    indexedValueChanged(e, n) {
        return !e.getPriority().equals(n.getPriority())
    }
    minPost() {
        return k.MIN
    }
    maxPost() {
        return new k(De,new Ie("[PRIORITY-POST]",Jo))
    }
    makePost(e, n) {
        let s = Xo(e);
        return new k(n,new Ie("[PRIORITY-POST]",s))
    }
    toString() {
        return ".priority"
    }
}
  , U = new As;
var Gc = Math.log(2)
  , Ms = class {
    constructor(e) {
        let n = r => parseInt(Math.log(r) / Gc, 10)
          , s = r => parseInt(Array(r + 1).join("1"), 2);
        this.count = n(e + 1),
        this.current_ = this.count - 1;
        let i = s(this.count);
        this.bits_ = e + 1 & i
    }
    nextBitIsOne() {
        let e = !(this.bits_ & 1 << this.current_);
        return this.current_--,
        e
    }
}
  , _n = function(t, e, n, s) {
    t.sort(e);
    let i = function(u, h) {
        let p = h - u, d, m;
        if (p === 0)
            return null;
        if (p === 1)
            return d = t[u],
            m = n ? n(d) : d,
            new Z(m,d.node,Z.BLACK,null,null);
        {
            let g = parseInt(p / 2, 10) + u
              , C = i(u, g)
              , S = i(g + 1, h);
            return d = t[g],
            m = n ? n(d) : d,
            new Z(m,d.node,Z.BLACK,C,S)
        }
    }
      , r = function(u) {
        let h = null
          , p = null
          , d = t.length
          , m = function(C, S) {
            let O = d - C
              , K = d;
            d -= C;
            let be = i(O + 1, K)
              , et = t[O]
              , Ne = n ? n(et) : et;
            g(new Z(Ne,et.node,S,null,be))
        }
          , g = function(C) {
            h ? (h.left = C,
            h = C) : (p = C,
            h = C)
        };
        for (let C = 0; C < u.count; ++C) {
            let S = u.nextBitIsOne()
              , O = Math.pow(2, u.count - (C + 1));
            S ? m(O, Z.BLACK) : (m(O, Z.BLACK),
            m(O, Z.RED))
        }
        return p
    }
      , o = new Ms(t.length)
      , l = r(o);
    return new le(s || e,l)
};
var ds, nt = {}, ot = class t {
    static get Default() {
        return v(nt && U, "ChildrenNode.ts has not been loaded"),
        ds = ds || new t({
            ".priority": nt
        },{
            ".priority": U
        }),
        ds
    }
    constructor(e, n) {
        this.indexes_ = e,
        this.indexSet_ = n
    }
    get(e) {
        let n = He(this.indexes_, e);
        if (!n)
            throw new Error("No index defined for " + e);
        return n instanceof le ? n : null
    }
    hasIndex(e) {
        return ue(this.indexSet_, e.toString())
    }
    addIndex(e, n) {
        v(e !== qe, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        let s = []
          , i = !1
          , r = n.getIterator(k.Wrap)
          , o = r.getNext();
        for (; o; )
            i = i || e.isDefinedOn(o.node),
            s.push(o),
            o = r.getNext();
        let l;
        i ? l = _n(s, e.getCompare()) : l = nt;
        let u = e.toString()
          , h = {
            ...this.indexSet_
        };
        h[u] = e;
        let p = {
            ...this.indexes_
        };
        return p[u] = l,
        new t(p,h)
    }
    addToIndexes(e, n) {
        let s = Et(this.indexes_, (i, r) => {
            let o = He(this.indexSet_, r);
            if (v(o, "Missing index implementation for " + r),
            i === nt)
                if (o.isDefinedOn(e.node)) {
                    let l = []
                      , u = n.getIterator(k.Wrap)
                      , h = u.getNext();
                    for (; h; )
                        h.name !== e.name && l.push(h),
                        h = u.getNext();
                    return l.push(e),
                    _n(l, o.getCompare())
                } else
                    return nt;
            else {
                let l = n.get(e.name)
                  , u = i;
                return l && (u = u.remove(new k(e.name,l))),
                u.insert(e, e.node)
            }
        }
        );
        return new t(s,this.indexSet_)
    }
    removeFromIndexes(e, n) {
        let s = Et(this.indexes_, i => {
            if (i === nt)
                return i;
            {
                let r = n.get(e.name);
                return r ? i.remove(new k(e.name,r)) : i
            }
        }
        );
        return new t(s,this.indexSet_)
    }
}
;
var bt, T = class t {
    static get EMPTY_NODE() {
        return bt || (bt = new t(new le(vi),null,ot.Default))
    }
    constructor(e, n, s) {
        this.children_ = e,
        this.priorityNode_ = n,
        this.indexMap_ = s,
        this.lazyHash_ = null,
        this.priorityNode_ && Qo(this.priorityNode_),
        this.children_.isEmpty() && v(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
    }
    isLeafNode() {
        return !1
    }
    getPriority() {
        return this.priorityNode_ || bt
    }
    updatePriority(e) {
        return this.children_.isEmpty() ? this : new t(this.children_,e,this.indexMap_)
    }
    getImmediateChild(e) {
        if (e === ".priority")
            return this.getPriority();
        {
            let n = this.children_.get(e);
            return n === null ? bt : n
        }
    }
    getChild(e) {
        let n = I(e);
        return n === null ? this : this.getImmediateChild(n).getChild(W(e))
    }
    hasChild(e) {
        return this.children_.get(e) !== null
    }
    updateImmediateChild(e, n) {
        if (v(n, "We should always be passing snapshot nodes"),
        e === ".priority")
            return this.updatePriority(n);
        {
            let s = new k(e,n), i, r;
            n.isEmpty() ? (i = this.children_.remove(e),
            r = this.indexMap_.removeFromIndexes(s, this.children_)) : (i = this.children_.insert(e, n),
            r = this.indexMap_.addToIndexes(s, this.children_));
            let o = i.isEmpty() ? bt : this.priorityNode_;
            return new t(i,o,r)
        }
    }
    updateChild(e, n) {
        let s = I(e);
        if (s === null)
            return n;
        {
            v(I(e) !== ".priority" || Oe(e) === 1, ".priority must be the last token in a path");
            let i = this.getImmediateChild(s).updateChild(W(e), n);
            return this.updateImmediateChild(s, i)
        }
    }
    isEmpty() {
        return this.children_.isEmpty()
    }
    numChildren() {
        return this.children_.count()
    }
    val(e) {
        if (this.isEmpty())
            return null;
        let n = {}
          , s = 0
          , i = 0
          , r = !0;
        if (this.forEachChild(U, (o, l) => {
            n[o] = l.val(e),
            s++,
            r && t.INTEGER_REGEXP_.test(o) ? i = Math.max(i, Number(o)) : r = !1
        }
        ),
        !e && r && i < 2 * s) {
            let o = [];
            for (let l in n)
                o[l] = n[l];
            return o
        } else
            return e && !this.getPriority().isEmpty() && (n[".priority"] = this.getPriority().val()),
            n
    }
    hash() {
        if (this.lazyHash_ === null) {
            let e = "";
            this.getPriority().isEmpty() || (e += "priority:" + Ko(this.getPriority().val()) + ":"),
            this.forEachChild(U, (n, s) => {
                let i = s.hash();
                i !== "" && (e += ":" + n + ":" + i)
            }
            ),
            this.lazyHash_ = e === "" ? "" : Ro(e)
        }
        return this.lazyHash_
    }
    getPredecessorChildName(e, n, s) {
        let i = this.resolveIndex_(s);
        if (i) {
            let r = i.getPredecessorKey(new k(e,n));
            return r ? r.name : null
        } else
            return this.children_.getPredecessorKey(e)
    }
    getFirstChildName(e) {
        let n = this.resolveIndex_(e);
        if (n) {
            let s = n.minKey();
            return s && s.name
        } else
            return this.children_.minKey()
    }
    getFirstChild(e) {
        let n = this.getFirstChildName(e);
        return n ? new k(n,this.children_.get(n)) : null
    }
    getLastChildName(e) {
        let n = this.resolveIndex_(e);
        if (n) {
            let s = n.maxKey();
            return s && s.name
        } else
            return this.children_.maxKey()
    }
    getLastChild(e) {
        let n = this.getLastChildName(e);
        return n ? new k(n,this.children_.get(n)) : null
    }
    forEachChild(e, n) {
        let s = this.resolveIndex_(e);
        return s ? s.inorderTraversal(i => n(i.name, i.node)) : this.children_.inorderTraversal(n)
    }
    getIterator(e) {
        return this.getIteratorFrom(e.minPost(), e)
    }
    getIteratorFrom(e, n) {
        let s = this.resolveIndex_(n);
        if (s)
            return s.getIteratorFrom(e, i => i);
        {
            let i = this.children_.getIteratorFrom(e.name, k.Wrap)
              , r = i.peek();
            for (; r != null && n.compare(r, e) < 0; )
                i.getNext(),
                r = i.peek();
            return i
        }
    }
    getReverseIterator(e) {
        return this.getReverseIteratorFrom(e.maxPost(), e)
    }
    getReverseIteratorFrom(e, n) {
        let s = this.resolveIndex_(n);
        if (s)
            return s.getReverseIteratorFrom(e, i => i);
        {
            let i = this.children_.getReverseIteratorFrom(e.name, k.Wrap)
              , r = i.peek();
            for (; r != null && n.compare(r, e) > 0; )
                i.getNext(),
                r = i.peek();
            return i
        }
    }
    compareTo(e) {
        return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === zt ? -1 : 0
    }
    withIndex(e) {
        if (e === qe || this.indexMap_.hasIndex(e))
            return this;
        {
            let n = this.indexMap_.addIndex(e, this.children_);
            return new t(this.children_,this.priorityNode_,n)
        }
    }
    isIndexed(e) {
        return e === qe || this.indexMap_.hasIndex(e)
    }
    equals(e) {
        if (e === this)
            return !0;
        if (e.isLeafNode())
            return !1;
        {
            let n = e;
            if (this.getPriority().equals(n.getPriority()))
                if (this.children_.count() === n.children_.count()) {
                    let s = this.getIterator(U)
                      , i = n.getIterator(U)
                      , r = s.getNext()
                      , o = i.getNext();
                    for (; r && o; ) {
                        if (r.name !== o.name || !r.node.equals(o.node))
                            return !1;
                        r = s.getNext(),
                        o = i.getNext()
                    }
                    return r === null && o === null
                } else
                    return !1;
            else
                return !1
        }
    }
    resolveIndex_(e) {
        return e === qe ? null : this.indexMap_.get(e.toString())
    }
}
;
T.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
var Ds = class extends T {
    constructor() {
        super(new le(vi), T.EMPTY_NODE, ot.Default)
    }
    compareTo(e) {
        return e === this ? 0 : 1
    }
    equals(e) {
        return e === this
    }
    getPriority() {
        return this
    }
    getImmediateChild(e) {
        return T.EMPTY_NODE
    }
    isEmpty() {
        return !1
    }
}
  , zt = new Ds;
Object.defineProperties(k, {
    MIN: {
        value: new k(Ye,T.EMPTY_NODE)
    },
    MAX: {
        value: new k(De,zt)
    }
});
fn.__EMPTY_NODE = T.EMPTY_NODE;
Ie.__childrenNodeConstructor = T;
Hc(zt);
Vc(zt);
var zc = !0;
function B(t, e=null) {
    if (t === null)
        return T.EMPTY_NODE;
    if (typeof t == "object" && ".priority" in t && (e = t[".priority"]),
    v(e === null || typeof e == "string" || typeof e == "number" || typeof e == "object" && ".sv" in e, "Invalid priority type found: " + typeof e),
    typeof t == "object" && ".value" in t && t[".value"] !== null && (t = t[".value"]),
    typeof t != "object" || ".sv" in t) {
        let n = t;
        return new Ie(n,B(e))
    }
    if (!(t instanceof Array) && zc) {
        let n = []
          , s = !1;
        if (j(t, (o, l) => {
            if (o.substring(0, 1) !== ".") {
                let u = B(l);
                u.isEmpty() || (s = s || !u.getPriority().isEmpty(),
                n.push(new k(o,u)))
            }
        }
        ),
        n.length === 0)
            return T.EMPTY_NODE;
        let r = _n(n, $c, o => o.name, vi);
        if (s) {
            let o = _n(n, U.getCompare());
            return new T(r,B(e),new ot({
                ".priority": o
            },{
                ".priority": U
            }))
        } else
            return new T(r,B(e),ot.Default)
    } else {
        let n = T.EMPTY_NODE;
        return j(t, (s, i) => {
            if (ue(t, s) && s.substring(0, 1) !== ".") {
                let r = B(i);
                (r.isLeafNode() || !r.isEmpty()) && (n = n.updateImmediateChild(s, r))
            }
        }
        ),
        n.updatePriority(B(e))
    }
}
Bc(B);
var Mt = class extends rt {
    constructor(e) {
        super(),
        this.indexPath_ = e,
        v(!b(e) && I(e) !== ".priority", "Can't create PathIndex with empty path or .priority key")
    }
    extractChild(e) {
        return e.getChild(this.indexPath_)
    }
    isDefinedOn(e) {
        return !e.getChild(this.indexPath_).isEmpty()
    }
    compare(e, n) {
        let s = this.extractChild(e.node)
          , i = this.extractChild(n.node)
          , r = s.compareTo(i);
        return r === 0 ? Xe(e.name, n.name) : r
    }
    makePost(e, n) {
        let s = B(e)
          , i = T.EMPTY_NODE.updateChild(this.indexPath_, s);
        return new k(n,i)
    }
    maxPost() {
        let e = T.EMPTY_NODE.updateChild(this.indexPath_, zt);
        return new k(De,e)
    }
    toString() {
        return At(this.indexPath_, 0).join("/")
    }
}
;
var Os = class extends rt {
    compare(e, n) {
        let s = e.node.compareTo(n.node);
        return s === 0 ? Xe(e.name, n.name) : s
    }
    isDefinedOn(e) {
        return !0
    }
    indexedValueChanged(e, n) {
        return !e.equals(n)
    }
    minPost() {
        return k.MIN
    }
    maxPost() {
        return k.MAX
    }
    makePost(e, n) {
        let s = B(e);
        return new k(n,s)
    }
    toString() {
        return ".value"
    }
}
  , Zo = new Os;
function el(t) {
    return {
        type: "value",
        snapshotNode: t
    }
}
function lt(t, e) {
    return {
        type: "child_added",
        snapshotNode: e,
        childName: t
    }
}
function Dt(t, e) {
    return {
        type: "child_removed",
        snapshotNode: e,
        childName: t
    }
}
function Ot(t, e, n) {
    return {
        type: "child_changed",
        snapshotNode: e,
        childName: t,
        oldSnap: n
    }
}
function qc(t, e) {
    return {
        type: "child_moved",
        snapshotNode: e,
        childName: t
    }
}
var Lt = class {
    constructor(e) {
        this.index_ = e
    }
    updateChild(e, n, s, i, r, o) {
        v(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
        let l = e.getImmediateChild(n);
        return l.getChild(i).equals(s.getChild(i)) && l.isEmpty() === s.isEmpty() || (o != null && (s.isEmpty() ? e.hasChild(n) ? o.trackChildChange(Dt(n, l)) : v(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : l.isEmpty() ? o.trackChildChange(lt(n, s)) : o.trackChildChange(Ot(n, s, l))),
        e.isLeafNode() && s.isEmpty()) ? e : e.updateImmediateChild(n, s).withIndex(this.index_)
    }
    updateFullNode(e, n, s) {
        return s != null && (e.isLeafNode() || e.forEachChild(U, (i, r) => {
            n.hasChild(i) || s.trackChildChange(Dt(i, r))
        }
        ),
        n.isLeafNode() || n.forEachChild(U, (i, r) => {
            if (e.hasChild(i)) {
                let o = e.getImmediateChild(i);
                o.equals(r) || s.trackChildChange(Ot(i, r, o))
            } else
                s.trackChildChange(lt(i, r))
        }
        )),
        n.withIndex(this.index_)
    }
    updatePriority(e, n) {
        return e.isEmpty() ? T.EMPTY_NODE : e.updatePriority(n)
    }
    filtersNodes() {
        return !1
    }
    getIndexedFilter() {
        return this
    }
    getIndex() {
        return this.index_
    }
}
;
var pn = class t {
    constructor(e) {
        this.indexedFilter_ = new Lt(e.getIndex()),
        this.index_ = e.getIndex(),
        this.startPost_ = t.getStartPost_(e),
        this.endPost_ = t.getEndPost_(e),
        this.startIsInclusive_ = !e.startAfterSet_,
        this.endIsInclusive_ = !e.endBeforeSet_
    }
    getStartPost() {
        return this.startPost_
    }
    getEndPost() {
        return this.endPost_
    }
    matches(e) {
        let n = this.startIsInclusive_ ? this.index_.compare(this.getStartPost(), e) <= 0 : this.index_.compare(this.getStartPost(), e) < 0
          , s = this.endIsInclusive_ ? this.index_.compare(e, this.getEndPost()) <= 0 : this.index_.compare(e, this.getEndPost()) < 0;
        return n && s
    }
    updateChild(e, n, s, i, r, o) {
        return this.matches(new k(n,s)) || (s = T.EMPTY_NODE),
        this.indexedFilter_.updateChild(e, n, s, i, r, o)
    }
    updateFullNode(e, n, s) {
        n.isLeafNode() && (n = T.EMPTY_NODE);
        let i = n.withIndex(this.index_);
        i = i.updatePriority(T.EMPTY_NODE);
        let r = this;
        return n.forEachChild(U, (o, l) => {
            r.matches(new k(o,l)) || (i = i.updateImmediateChild(o, T.EMPTY_NODE))
        }
        ),
        this.indexedFilter_.updateFullNode(e, i, s)
    }
    updatePriority(e, n) {
        return e
    }
    filtersNodes() {
        return !0
    }
    getIndexedFilter() {
        return this.indexedFilter_
    }
    getIndex() {
        return this.index_
    }
    static getStartPost_(e) {
        if (e.hasStart()) {
            let n = e.getIndexStartName();
            return e.getIndex().makePost(e.getIndexStartValue(), n)
        } else
            return e.getIndex().minPost()
    }
    static getEndPost_(e) {
        if (e.hasEnd()) {
            let n = e.getIndexEndName();
            return e.getIndex().makePost(e.getIndexEndValue(), n)
        } else
            return e.getIndex().maxPost()
    }
}
;
var Ls = class {
    constructor(e) {
        this.withinDirectionalStart = n => this.reverse_ ? this.withinEndPost(n) : this.withinStartPost(n),
        this.withinDirectionalEnd = n => this.reverse_ ? this.withinStartPost(n) : this.withinEndPost(n),
        this.withinStartPost = n => {
            let s = this.index_.compare(this.rangedFilter_.getStartPost(), n);
            return this.startIsInclusive_ ? s <= 0 : s < 0
        }
        ,
        this.withinEndPost = n => {
            let s = this.index_.compare(n, this.rangedFilter_.getEndPost());
            return this.endIsInclusive_ ? s <= 0 : s < 0
        }
        ,
        this.rangedFilter_ = new pn(e),
        this.index_ = e.getIndex(),
        this.limit_ = e.getLimit(),
        this.reverse_ = !e.isViewFromLeft(),
        this.startIsInclusive_ = !e.startAfterSet_,
        this.endIsInclusive_ = !e.endBeforeSet_
    }
    updateChild(e, n, s, i, r, o) {
        return this.rangedFilter_.matches(new k(n,s)) || (s = T.EMPTY_NODE),
        e.getImmediateChild(n).equals(s) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, n, s, i, r, o) : this.fullLimitUpdateChild_(e, n, s, r, o)
    }
    updateFullNode(e, n, s) {
        let i;
        if (n.isLeafNode() || n.isEmpty())
            i = T.EMPTY_NODE.withIndex(this.index_);
        else if (this.limit_ * 2 < n.numChildren() && n.isIndexed(this.index_)) {
            i = T.EMPTY_NODE.withIndex(this.index_);
            let r;
            this.reverse_ ? r = n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : r = n.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
            let o = 0;
            for (; r.hasNext() && o < this.limit_; ) {
                let l = r.getNext();
                if (this.withinDirectionalStart(l))
                    if (this.withinDirectionalEnd(l))
                        i = i.updateImmediateChild(l.name, l.node),
                        o++;
                    else
                        break;
                else
                    continue
            }
        } else {
            i = n.withIndex(this.index_),
            i = i.updatePriority(T.EMPTY_NODE);
            let r;
            this.reverse_ ? r = i.getReverseIterator(this.index_) : r = i.getIterator(this.index_);
            let o = 0;
            for (; r.hasNext(); ) {
                let l = r.getNext();
                o < this.limit_ && this.withinDirectionalStart(l) && this.withinDirectionalEnd(l) ? o++ : i = i.updateImmediateChild(l.name, T.EMPTY_NODE)
            }
        }
        return this.rangedFilter_.getIndexedFilter().updateFullNode(e, i, s)
    }
    updatePriority(e, n) {
        return e
    }
    filtersNodes() {
        return !0
    }
    getIndexedFilter() {
        return this.rangedFilter_.getIndexedFilter()
    }
    getIndex() {
        return this.index_
    }
    fullLimitUpdateChild_(e, n, s, i, r) {
        let o;
        if (this.reverse_) {
            let d = this.index_.getCompare();
            o = (m, g) => d(g, m)
        } else
            o = this.index_.getCompare();
        let l = e;
        v(l.numChildren() === this.limit_, "");
        let u = new k(n,s)
          , h = this.reverse_ ? l.getFirstChild(this.index_) : l.getLastChild(this.index_)
          , p = this.rangedFilter_.matches(u);
        if (l.hasChild(n)) {
            let d = l.getImmediateChild(n)
              , m = i.getChildAfterChild(this.index_, h, this.reverse_);
            for (; m != null && (m.name === n || l.hasChild(m.name)); )
                m = i.getChildAfterChild(this.index_, m, this.reverse_);
            let g = m == null ? 1 : o(m, u);
            if (p && !s.isEmpty() && g >= 0)
                return r?.trackChildChange(Ot(n, s, d)),
                l.updateImmediateChild(n, s);
            {
                r?.trackChildChange(Dt(n, d));
                let S = l.updateImmediateChild(n, T.EMPTY_NODE);
                return m != null && this.rangedFilter_.matches(m) ? (r?.trackChildChange(lt(m.name, m.node)),
                S.updateImmediateChild(m.name, m.node)) : S
            }
        } else
            return s.isEmpty() ? e : p && o(h, u) >= 0 ? (r != null && (r.trackChildChange(Dt(h.name, h.node)),
            r.trackChildChange(lt(n, s))),
            l.updateImmediateChild(n, s).updateImmediateChild(h.name, T.EMPTY_NODE)) : e
    }
}
;
var Fs = class t {
    constructor() {
        this.limitSet_ = !1,
        this.startSet_ = !1,
        this.startNameSet_ = !1,
        this.startAfterSet_ = !1,
        this.endSet_ = !1,
        this.endNameSet_ = !1,
        this.endBeforeSet_ = !1,
        this.limit_ = 0,
        this.viewFrom_ = "",
        this.indexStartValue_ = null,
        this.indexStartName_ = "",
        this.indexEndValue_ = null,
        this.indexEndName_ = "",
        this.index_ = U
    }
    hasStart() {
        return this.startSet_
    }
    isViewFromLeft() {
        return this.viewFrom_ === "" ? this.startSet_ : this.viewFrom_ === "l"
    }
    getIndexStartValue() {
        return v(this.startSet_, "Only valid if start has been set"),
        this.indexStartValue_
    }
    getIndexStartName() {
        return v(this.startSet_, "Only valid if start has been set"),
        this.startNameSet_ ? this.indexStartName_ : Ye
    }
    hasEnd() {
        return this.endSet_
    }
    getIndexEndValue() {
        return v(this.endSet_, "Only valid if end has been set"),
        this.indexEndValue_
    }
    getIndexEndName() {
        return v(this.endSet_, "Only valid if end has been set"),
        this.endNameSet_ ? this.indexEndName_ : De
    }
    hasLimit() {
        return this.limitSet_
    }
    hasAnchoredLimit() {
        return this.limitSet_ && this.viewFrom_ !== ""
    }
    getLimit() {
        return v(this.limitSet_, "Only valid if limit has been set"),
        this.limit_
    }
    getIndex() {
        return this.index_
    }
    loadsAllData() {
        return !(this.startSet_ || this.endSet_ || this.limitSet_)
    }
    isDefault() {
        return this.loadsAllData() && this.index_ === U
    }
    copy() {
        let e = new t;
        return e.limitSet_ = this.limitSet_,
        e.limit_ = this.limit_,
        e.startSet_ = this.startSet_,
        e.startAfterSet_ = this.startAfterSet_,
        e.indexStartValue_ = this.indexStartValue_,
        e.startNameSet_ = this.startNameSet_,
        e.indexStartName_ = this.indexStartName_,
        e.endSet_ = this.endSet_,
        e.endBeforeSet_ = this.endBeforeSet_,
        e.indexEndValue_ = this.indexEndValue_,
        e.endNameSet_ = this.endNameSet_,
        e.indexEndName_ = this.indexEndName_,
        e.index_ = this.index_,
        e.viewFrom_ = this.viewFrom_,
        e
    }
}
;
function Yc(t) {
    return t.loadsAllData() ? new Lt(t.getIndex()) : t.hasLimit() ? new Ls(t) : new pn(t)
}
function jc(t, e) {
    let n = t.copy();
    return n.limitSet_ = !0,
    n.limit_ = e,
    n.viewFrom_ = "l",
    n
}
function Kc(t, e) {
    let n = t.copy();
    return n.limitSet_ = !0,
    n.limit_ = e,
    n.viewFrom_ = "r",
    n
}
function Qc(t, e, n) {
    let s = t.copy();
    return s.endSet_ = !0,
    e === void 0 && (e = null),
    s.indexEndValue_ = e,
    n !== void 0 ? (s.endNameSet_ = !0,
    s.indexEndName_ = n) : (s.endNameSet_ = !1,
    s.indexEndName_ = ""),
    s
}
function Xc(t, e) {
    let n = t.copy();
    return n.index_ = e,
    n
}
function co(t) {
    let e = {};
    if (t.isDefault())
        return e;
    let n;
    if (t.index_ === U ? n = "$priority" : t.index_ === Zo ? n = "$value" : t.index_ === qe ? n = "$key" : (v(t.index_ instanceof Mt, "Unrecognized index type!"),
    n = t.index_.toString()),
    e.orderBy = q(n),
    t.startSet_) {
        let s = t.startAfterSet_ ? "startAfter" : "startAt";
        e[s] = q(t.indexStartValue_),
        t.startNameSet_ && (e[s] += "," + q(t.indexStartName_))
    }
    if (t.endSet_) {
        let s = t.endBeforeSet_ ? "endBefore" : "endAt";
        e[s] = q(t.indexEndValue_),
        t.endNameSet_ && (e[s] += "," + q(t.indexEndName_))
    }
    return t.limitSet_ && (t.isViewFromLeft() ? e.limitToFirst = t.limit_ : e.limitToLast = t.limit_),
    e
}
function uo(t) {
    let e = {};
    if (t.startSet_ && (e.sp = t.indexStartValue_,
    t.startNameSet_ && (e.sn = t.indexStartName_),
    e.sin = !t.startAfterSet_),
    t.endSet_ && (e.ep = t.indexEndValue_,
    t.endNameSet_ && (e.en = t.indexEndName_),
    e.ein = !t.endBeforeSet_),
    t.limitSet_) {
        e.l = t.limit_;
        let n = t.viewFrom_;
        n === "" && (t.isViewFromLeft() ? n = "l" : n = "r"),
        e.vf = n
    }
    return t.index_ !== U && (e.i = t.index_.toString()),
    e
}
var Ws = class t extends un {
    reportStats(e) {
        throw new Error("Method not implemented.")
    }
    static getListenId_(e, n) {
        return n !== void 0 ? "tag$" + n : (v(e._queryParams.isDefault(), "should have a tag if it's not a default query."),
        e._path.toString())
    }
    constructor(e, n, s, i) {
        super(),
        this.repoInfo_ = e,
        this.onDataUpdate_ = n,
        this.authTokenProvider_ = s,
        this.appCheckTokenProvider_ = i,
        this.log_ = Gt("p:rest:"),
        this.listens_ = {}
    }
    listen(e, n, s, i) {
        let r = e._path.toString();
        this.log_("Listen called for " + r + " " + e._queryIdentifier);
        let o = t.getListenId_(e, s)
          , l = {};
        this.listens_[o] = l;
        let u = co(e._queryParams);
        this.restRequest_(r + ".json", u, (h, p) => {
            let d = p;
            if (h === 404 && (d = null,
            h = null),
            h === null && this.onDataUpdate_(r, d, !1, s),
            He(this.listens_, o) === l) {
                let m;
                h ? h === 401 ? m = "permission_denied" : m = "rest_error:" + h : m = "ok",
                i(m, null)
            }
        }
        )
    }
    unlisten(e, n) {
        let s = t.getListenId_(e, n);
        delete this.listens_[s]
    }
    get(e) {
        let n = co(e._queryParams)
          , s = e._path.toString()
          , i = new ge;
        return this.restRequest_(s + ".json", n, (r, o) => {
            let l = o;
            r === 404 && (l = null,
            r = null),
            r === null ? (this.onDataUpdate_(s, l, !1, null),
            i.resolve(l)) : i.reject(new Error(l))
        }
        ),
        i.promise
    }
    refreshAuthToken(e) {}
    restRequest_(e, n={}, s) {
        return n.format = "export",
        Promise.all([this.authTokenProvider_.getToken(!1), this.appCheckTokenProvider_.getToken(!1)]).then( ([i,r]) => {
            i && i.accessToken && (n.auth = i.accessToken),
            r && r.token && (n.ac = r.token);
            let o = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + br(n);
            this.log_("Sending REST request for " + o);
            let l = new XMLHttpRequest;
            l.onreadystatechange = () => {
                if (s && l.readyState === 4) {
                    this.log_("REST Response for " + o + " received. status:", l.status, "response:", l.responseText);
                    let u = null;
                    if (l.status >= 200 && l.status < 300) {
                        try {
                            u = nn(l.responseText)
                        } catch {
                            te("Failed to parse JSON response for " + o + ": " + l.responseText)
                        }
                        s(null, u)
                    } else
                        l.status !== 401 && l.status !== 404 && te("Got unsuccessful REST response for " + o + " Status: " + l.status),
                        s(l.status);
                    s = null
                }
            }
            ,
            l.open("GET", o, !0),
            l.send()
        }
        )
    }
}
;
var Us = class {
    constructor() {
        this.rootNode_ = T.EMPTY_NODE
    }
    getNode(e) {
        return this.rootNode_.getChild(e)
    }
    updateSnapshot(e, n) {
        this.rootNode_ = this.rootNode_.updateChild(e, n)
    }
}
;
function mn() {
    return {
        value: null,
        children: new Map
    }
}
function _t(t, e, n) {
    if (b(e))
        t.value = n,
        t.children.clear();
    else if (t.value !== null)
        t.value = t.value.updateChild(e, n);
    else {
        let s = I(e);
        t.children.has(s) || t.children.set(s, mn());
        let i = t.children.get(s);
        e = W(e),
        _t(i, e, n)
    }
}
function $s(t, e) {
    if (b(e))
        return t.value = null,
        t.children.clear(),
        !0;
    if (t.value !== null) {
        if (t.value.isLeafNode())
            return !1;
        {
            let n = t.value;
            return t.value = null,
            n.forEachChild(U, (s, i) => {
                _t(t, new M(s), i)
            }
            ),
            $s(t, e)
        }
    } else if (t.children.size > 0) {
        let n = I(e);
        return e = W(e),
        t.children.has(n) && $s(t.children.get(n), e) && t.children.delete(n),
        t.children.size === 0
    } else
        return !0
}
function Hs(t, e, n) {
    t.value !== null ? n(e, t.value) : Jc(t, (s, i) => {
        let r = new M(e.toString() + "/" + s);
        Hs(i, r, n)
    }
    )
}
function Jc(t, e) {
    t.children.forEach( (n, s) => {
        e(s, n)
    }
    )
}
var Bs = class {
    constructor(e) {
        this.collection_ = e,
        this.last_ = null
    }
    get() {
        let e = this.collection_.get()
          , n = {
            ...e
        };
        return this.last_ && j(this.last_, (s, i) => {
            n[s] = n[s] - i
        }
        ),
        this.last_ = e,
        n
    }
}
;
var ho = 10 * 1e3
  , Zc = 30 * 1e3
  , eu = 300 * 1e3
  , Vs = class {
    constructor(e, n) {
        this.server_ = n,
        this.statsToReport_ = {},
        this.statsListener_ = new Bs(e);
        let s = ho + (Zc - ho) * Math.random();
        kt(this.reportStats_.bind(this), Math.floor(s))
    }
    reportStats_() {
        let e = this.statsListener_.get()
          , n = {}
          , s = !1;
        j(e, (i, r) => {
            r > 0 && ue(this.statsToReport_, i) && (n[i] = r,
            s = !0)
        }
        ),
        s && this.server_.reportStats(n),
        kt(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * eu))
    }
}
;
var he;
(function(t) {
    t[t.OVERWRITE = 0] = "OVERWRITE",
    t[t.MERGE = 1] = "MERGE",
    t[t.ACK_USER_WRITE = 2] = "ACK_USER_WRITE",
    t[t.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE"
}
)(he || (he = {}));
function wi() {
    return {
        fromUser: !0,
        fromServer: !1,
        queryId: null,
        tagged: !1
    }
}
function Ci() {
    return {
        fromUser: !1,
        fromServer: !0,
        queryId: null,
        tagged: !1
    }
}
function Ei(t) {
    return {
        fromUser: !1,
        fromServer: !0,
        queryId: t,
        tagged: !0
    }
}
var Gs = class t {
    constructor(e, n, s) {
        this.path = e,
        this.affectedTree = n,
        this.revert = s,
        this.type = he.ACK_USER_WRITE,
        this.source = wi()
    }
    operationForChild(e) {
        if (b(this.path)) {
            if (this.affectedTree.value != null)
                return v(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."),
                this;
            {
                let n = this.affectedTree.subtree(new M(e));
                return new t(A(),n,this.revert)
            }
        } else
            return v(I(this.path) === e, "operationForChild called for unrelated child."),
            new t(W(this.path),this.affectedTree,this.revert)
    }
}
;
var gn = class t {
    constructor(e, n) {
        this.source = e,
        this.path = n,
        this.type = he.LISTEN_COMPLETE
    }
    operationForChild(e) {
        return b(this.path) ? new t(this.source,A()) : new t(this.source,W(this.path))
    }
}
;
var at = class t {
    constructor(e, n, s) {
        this.source = e,
        this.path = n,
        this.snap = s,
        this.type = he.OVERWRITE
    }
    operationForChild(e) {
        return b(this.path) ? new t(this.source,A(),this.snap.getImmediateChild(e)) : new t(this.source,W(this.path),this.snap)
    }
}
;
var Ft = class t {
    constructor(e, n, s) {
        this.source = e,
        this.path = n,
        this.children = s,
        this.type = he.MERGE
    }
    operationForChild(e) {
        if (b(this.path)) {
            let n = this.children.subtree(new M(e));
            return n.isEmpty() ? null : n.value ? new at(this.source,A(),n.value) : new t(this.source,A(),n)
        } else
            return v(I(this.path) === e, "Can't get a merge for a child not on the path of the operation"),
            new t(this.source,W(this.path),this.children)
    }
    toString() {
        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
    }
}
;
var ve = class {
    constructor(e, n, s) {
        this.node_ = e,
        this.fullyInitialized_ = n,
        this.filtered_ = s
    }
    isFullyInitialized() {
        return this.fullyInitialized_
    }
    isFiltered() {
        return this.filtered_
    }
    isCompleteForPath(e) {
        if (b(e))
            return this.isFullyInitialized() && !this.filtered_;
        let n = I(e);
        return this.isCompleteForChild(n)
    }
    isCompleteForChild(e) {
        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e)
    }
    getNode() {
        return this.node_
    }
}
;
var zs = class {
    constructor(e) {
        this.query_ = e,
        this.index_ = this.query_._queryParams.getIndex()
    }
}
;
function tu(t, e, n, s) {
    let i = []
      , r = [];
    return e.forEach(o => {
        o.type === "child_changed" && t.index_.indexedValueChanged(o.oldSnap, o.snapshotNode) && r.push(qc(o.childName, o.snapshotNode))
    }
    ),
    Nt(t, i, "child_removed", e, s, n),
    Nt(t, i, "child_added", e, s, n),
    Nt(t, i, "child_moved", r, s, n),
    Nt(t, i, "child_changed", e, s, n),
    Nt(t, i, "value", e, s, n),
    i
}
function Nt(t, e, n, s, i, r) {
    let o = s.filter(l => l.type === n);
    o.sort( (l, u) => su(t, l, u)),
    o.forEach(l => {
        let u = nu(t, l, r);
        i.forEach(h => {
            h.respondsTo(l.type) && e.push(h.createEvent(u, t.query_))
        }
        )
    }
    )
}
function nu(t, e, n) {
    return e.type === "value" || e.type === "child_removed" || (e.prevName = n.getPredecessorChildName(e.childName, e.snapshotNode, t.index_)),
    e
}
function su(t, e, n) {
    if (e.childName == null || n.childName == null)
        throw tt("Should only compare child_ events.");
    let s = new k(e.childName,e.snapshotNode)
      , i = new k(n.childName,n.snapshotNode);
    return t.index_.compare(s, i)
}
function Mn(t, e) {
    return {
        eventCache: t,
        serverCache: e
    }
}
function Rt(t, e, n, s) {
    return Mn(new ve(e,n,s), t.serverCache)
}
function tl(t, e, n, s) {
    return Mn(t.eventCache, new ve(e,n,s))
}
function yn(t) {
    return t.eventCache.isFullyInitialized() ? t.eventCache.getNode() : null
}
function Ke(t) {
    return t.serverCache.isFullyInitialized() ? t.serverCache.getNode() : null
}
var fs, iu = () => (fs || (fs = new le(nc)),
fs), ne = class t {
    static fromObject(e) {
        let n = new t(null);
        return j(e, (s, i) => {
            n = n.set(new M(s), i)
        }
        ),
        n
    }
    constructor(e, n=iu()) {
        this.value = e,
        this.children = n
    }
    isEmpty() {
        return this.value === null && this.children.isEmpty()
    }
    findRootMostMatchingPathAndValue(e, n) {
        if (this.value != null && n(this.value))
            return {
                path: A(),
                value: this.value
            };
        if (b(e))
            return null;
        {
            let s = I(e)
              , i = this.children.get(s);
            if (i !== null) {
                let r = i.findRootMostMatchingPathAndValue(W(e), n);
                return r != null ? {
                    path: H(new M(s), r.path),
                    value: r.value
                } : null
            } else
                return null
        }
    }
    findRootMostValueAndPath(e) {
        return this.findRootMostMatchingPathAndValue(e, () => !0)
    }
    subtree(e) {
        if (b(e))
            return this;
        {
            let n = I(e)
              , s = this.children.get(n);
            return s !== null ? s.subtree(W(e)) : new t(null)
        }
    }
    set(e, n) {
        if (b(e))
            return new t(n,this.children);
        {
            let s = I(e)
              , r = (this.children.get(s) || new t(null)).set(W(e), n)
              , o = this.children.insert(s, r);
            return new t(this.value,o)
        }
    }
    remove(e) {
        if (b(e))
            return this.children.isEmpty() ? new t(null) : new t(null,this.children);
        {
            let n = I(e)
              , s = this.children.get(n);
            if (s) {
                let i = s.remove(W(e)), r;
                return i.isEmpty() ? r = this.children.remove(n) : r = this.children.insert(n, i),
                this.value === null && r.isEmpty() ? new t(null) : new t(this.value,r)
            } else
                return this
        }
    }
    get(e) {
        if (b(e))
            return this.value;
        {
            let n = I(e)
              , s = this.children.get(n);
            return s ? s.get(W(e)) : null
        }
    }
    setTree(e, n) {
        if (b(e))
            return n;
        {
            let s = I(e), r = (this.children.get(s) || new t(null)).setTree(W(e), n), o;
            return r.isEmpty() ? o = this.children.remove(s) : o = this.children.insert(s, r),
            new t(this.value,o)
        }
    }
    fold(e) {
        return this.fold_(A(), e)
    }
    fold_(e, n) {
        let s = {};
        return this.children.inorderTraversal( (i, r) => {
            s[i] = r.fold_(H(e, i), n)
        }
        ),
        n(e, this.value, s)
    }
    findOnPath(e, n) {
        return this.findOnPath_(e, A(), n)
    }
    findOnPath_(e, n, s) {
        let i = this.value ? s(n, this.value) : !1;
        if (i)
            return i;
        if (b(e))
            return null;
        {
            let r = I(e)
              , o = this.children.get(r);
            return o ? o.findOnPath_(W(e), H(n, r), s) : null
        }
    }
    foreachOnPath(e, n) {
        return this.foreachOnPath_(e, A(), n)
    }
    foreachOnPath_(e, n, s) {
        if (b(e))
            return this;
        {
            this.value && s(n, this.value);
            let i = I(e)
              , r = this.children.get(i);
            return r ? r.foreachOnPath_(W(e), H(n, i), s) : new t(null)
        }
    }
    foreach(e) {
        this.foreach_(A(), e)
    }
    foreach_(e, n) {
        this.children.inorderTraversal( (s, i) => {
            i.foreach_(H(e, s), n)
        }
        ),
        this.value && n(e, this.value)
    }
    foreachChild(e) {
        this.children.inorderTraversal( (n, s) => {
            s.value && e(n, s.value)
        }
        )
    }
}
;
var de = class t {
    constructor(e) {
        this.writeTree_ = e
    }
    static empty() {
        return new t(new ne(null))
    }
}
;
function xt(t, e, n) {
    if (b(e))
        return new de(new ne(n));
    {
        let s = t.writeTree_.findRootMostValueAndPath(e);
        if (s != null) {
            let i = s.path
              , r = s.value
              , o = ee(i, e);
            return r = r.updateChild(o, n),
            new de(t.writeTree_.set(i, r))
        } else {
            let i = new ne(n)
              , r = t.writeTree_.setTree(e, i);
            return new de(r)
        }
    }
}
function qs(t, e, n) {
    let s = t;
    return j(n, (i, r) => {
        s = xt(s, H(e, i), r)
    }
    ),
    s
}
function fo(t, e) {
    if (b(e))
        return de.empty();
    {
        let n = t.writeTree_.setTree(e, new ne(null));
        return new de(n)
    }
}
function Ys(t, e) {
    return Je(t, e) != null
}
function Je(t, e) {
    let n = t.writeTree_.findRootMostValueAndPath(e);
    return n != null ? t.writeTree_.get(n.path).getChild(ee(n.path, e)) : null
}
function _o(t) {
    let e = []
      , n = t.writeTree_.value;
    return n != null ? n.isLeafNode() || n.forEachChild(U, (s, i) => {
        e.push(new k(s,i))
    }
    ) : t.writeTree_.children.inorderTraversal( (s, i) => {
        i.value != null && e.push(new k(s,i.value))
    }
    ),
    e
}
function Ae(t, e) {
    if (b(e))
        return t;
    {
        let n = Je(t, e);
        return n != null ? new de(new ne(n)) : new de(t.writeTree_.subtree(e))
    }
}
function js(t) {
    return t.writeTree_.isEmpty()
}
function ct(t, e) {
    return nl(A(), t.writeTree_, e)
}
function nl(t, e, n) {
    if (e.value != null)
        return n.updateChild(t, e.value);
    {
        let s = null;
        return e.children.inorderTraversal( (i, r) => {
            i === ".priority" ? (v(r.value !== null, "Priority writes must always be leaf nodes"),
            s = r.value) : n = nl(H(t, i), r, n)
        }
        ),
        !n.getChild(t).isEmpty() && s !== null && (n = n.updateChild(H(t, ".priority"), s)),
        n
    }
}
function Dn(t, e) {
    return ol(e, t)
}
function ru(t, e, n, s, i) {
    v(s > t.lastWriteId, "Stacking an older write on top of newer ones"),
    i === void 0 && (i = !0),
    t.allWrites.push({
        path: e,
        snap: n,
        writeId: s,
        visible: i
    }),
    i && (t.visibleWrites = xt(t.visibleWrites, e, n)),
    t.lastWriteId = s
}
function ou(t, e, n, s) {
    v(s > t.lastWriteId, "Stacking an older merge on top of newer ones"),
    t.allWrites.push({
        path: e,
        children: n,
        writeId: s,
        visible: !0
    }),
    t.visibleWrites = qs(t.visibleWrites, e, n),
    t.lastWriteId = s
}
function lu(t, e) {
    for (let n = 0; n < t.allWrites.length; n++) {
        let s = t.allWrites[n];
        if (s.writeId === e)
            return s
    }
    return null
}
function au(t, e) {
    let n = t.allWrites.findIndex(l => l.writeId === e);
    v(n >= 0, "removeWrite called with nonexistent writeId.");
    let s = t.allWrites[n];
    t.allWrites.splice(n, 1);
    let i = s.visible
      , r = !1
      , o = t.allWrites.length - 1;
    for (; i && o >= 0; ) {
        let l = t.allWrites[o];
        l.visible && (o >= n && cu(l, s.path) ? i = !1 : oe(s.path, l.path) && (r = !0)),
        o--
    }
    if (i) {
        if (r)
            return uu(t),
            !0;
        if (s.snap)
            t.visibleWrites = fo(t.visibleWrites, s.path);
        else {
            let l = s.children;
            j(l, u => {
                t.visibleWrites = fo(t.visibleWrites, H(s.path, u))
            }
            )
        }
        return !0
    } else
        return !1
}
function cu(t, e) {
    if (t.snap)
        return oe(t.path, e);
    for (let n in t.children)
        if (t.children.hasOwnProperty(n) && oe(H(t.path, n), e))
            return !0;
    return !1
}
function uu(t) {
    t.visibleWrites = sl(t.allWrites, hu, A()),
    t.allWrites.length > 0 ? t.lastWriteId = t.allWrites[t.allWrites.length - 1].writeId : t.lastWriteId = -1
}
function hu(t) {
    return t.visible
}
function sl(t, e, n) {
    let s = de.empty();
    for (let i = 0; i < t.length; ++i) {
        let r = t[i];
        if (e(r)) {
            let o = r.path, l;
            if (r.snap)
                oe(n, o) ? (l = ee(n, o),
                s = xt(s, l, r.snap)) : oe(o, n) && (l = ee(o, n),
                s = xt(s, A(), r.snap.getChild(l)));
            else if (r.children) {
                if (oe(n, o))
                    l = ee(n, o),
                    s = qs(s, l, r.children);
                else if (oe(o, n))
                    if (l = ee(o, n),
                    b(l))
                        s = qs(s, A(), r.children);
                    else {
                        let u = He(r.children, I(l));
                        if (u) {
                            let h = u.getChild(W(l));
                            s = xt(s, A(), h)
                        }
                    }
            } else
                throw tt("WriteRecord should have .snap or .children")
        }
    }
    return s
}
function il(t, e, n, s, i) {
    if (!s && !i) {
        let r = Je(t.visibleWrites, e);
        if (r != null)
            return r;
        {
            let o = Ae(t.visibleWrites, e);
            if (js(o))
                return n;
            if (n == null && !Ys(o, A()))
                return null;
            {
                let l = n || T.EMPTY_NODE;
                return ct(o, l)
            }
        }
    } else {
        let r = Ae(t.visibleWrites, e);
        if (!i && js(r))
            return n;
        if (!i && n == null && !Ys(r, A()))
            return null;
        {
            let o = function(h) {
                return (h.visible || i) && (!s || !~s.indexOf(h.writeId)) && (oe(h.path, e) || oe(e, h.path))
            }
              , l = sl(t.allWrites, o, e)
              , u = n || T.EMPTY_NODE;
            return ct(l, u)
        }
    }
}
function du(t, e, n) {
    let s = T.EMPTY_NODE
      , i = Je(t.visibleWrites, e);
    if (i)
        return i.isLeafNode() || i.forEachChild(U, (r, o) => {
            s = s.updateImmediateChild(r, o)
        }
        ),
        s;
    if (n) {
        let r = Ae(t.visibleWrites, e);
        return n.forEachChild(U, (o, l) => {
            let u = ct(Ae(r, new M(o)), l);
            s = s.updateImmediateChild(o, u)
        }
        ),
        _o(r).forEach(o => {
            s = s.updateImmediateChild(o.name, o.node)
        }
        ),
        s
    } else {
        let r = Ae(t.visibleWrites, e);
        return _o(r).forEach(o => {
            s = s.updateImmediateChild(o.name, o.node)
        }
        ),
        s
    }
}
function fu(t, e, n, s, i) {
    v(s || i, "Either existingEventSnap or existingServerSnap must exist");
    let r = H(e, n);
    if (Ys(t.visibleWrites, r))
        return null;
    {
        let o = Ae(t.visibleWrites, r);
        return js(o) ? i.getChild(n) : ct(o, i.getChild(n))
    }
}
function _u(t, e, n, s) {
    let i = H(e, n)
      , r = Je(t.visibleWrites, i);
    if (r != null)
        return r;
    if (s.isCompleteForChild(n)) {
        let o = Ae(t.visibleWrites, i);
        return ct(o, s.getNode().getImmediateChild(n))
    } else
        return null
}
function pu(t, e) {
    return Je(t.visibleWrites, e)
}
function mu(t, e, n, s, i, r, o) {
    let l, u = Ae(t.visibleWrites, e), h = Je(u, A());
    if (h != null)
        l = h;
    else if (n != null)
        l = ct(u, n);
    else
        return [];
    if (l = l.withIndex(o),
    !l.isEmpty() && !l.isLeafNode()) {
        let p = []
          , d = o.getCompare()
          , m = r ? l.getReverseIteratorFrom(s, o) : l.getIteratorFrom(s, o)
          , g = m.getNext();
        for (; g && p.length < i; )
            d(g, s) !== 0 && p.push(g),
            g = m.getNext();
        return p
    } else
        return []
}
function gu() {
    return {
        visibleWrites: de.empty(),
        allWrites: [],
        lastWriteId: -1
    }
}
function vn(t, e, n, s) {
    return il(t.writeTree, t.treePath, e, n, s)
}
function Ti(t, e) {
    return du(t.writeTree, t.treePath, e)
}
function po(t, e, n, s) {
    return fu(t.writeTree, t.treePath, e, n, s)
}
function wn(t, e) {
    return pu(t.writeTree, H(t.treePath, e))
}
function yu(t, e, n, s, i, r) {
    return mu(t.writeTree, t.treePath, e, n, s, i, r)
}
function Si(t, e, n) {
    return _u(t.writeTree, t.treePath, e, n)
}
function rl(t, e) {
    return ol(H(t.treePath, e), t.writeTree)
}
function ol(t, e) {
    return {
        treePath: t,
        writeTree: e
    }
}
var Ks = class {
    constructor() {
        this.changeMap = new Map
    }
    trackChildChange(e) {
        let n = e.type
          , s = e.childName;
        v(n === "child_added" || n === "child_changed" || n === "child_removed", "Only child changes supported for tracking"),
        v(s !== ".priority", "Only non-priority child changes can be tracked.");
        let i = this.changeMap.get(s);
        if (i) {
            let r = i.type;
            if (n === "child_added" && r === "child_removed")
                this.changeMap.set(s, Ot(s, e.snapshotNode, i.snapshotNode));
            else if (n === "child_removed" && r === "child_added")
                this.changeMap.delete(s);
            else if (n === "child_removed" && r === "child_changed")
                this.changeMap.set(s, Dt(s, i.oldSnap));
            else if (n === "child_changed" && r === "child_added")
                this.changeMap.set(s, lt(s, e.snapshotNode));
            else if (n === "child_changed" && r === "child_changed")
                this.changeMap.set(s, Ot(s, e.snapshotNode, i.oldSnap));
            else
                throw tt("Illegal combination of changes: " + e + " occurred after " + i)
        } else
            this.changeMap.set(s, e)
    }
    getChanges() {
        return Array.from(this.changeMap.values())
    }
}
;
var Qs = class {
    getCompleteChild(e) {
        return null
    }
    getChildAfterChild(e, n, s) {
        return null
    }
}
  , ll = new Qs
  , Wt = class {
    constructor(e, n, s=null) {
        this.writes_ = e,
        this.viewCache_ = n,
        this.optCompleteServerCache_ = s
    }
    getCompleteChild(e) {
        let n = this.viewCache_.eventCache;
        if (n.isCompleteForChild(e))
            return n.getNode().getImmediateChild(e);
        {
            let s = this.optCompleteServerCache_ != null ? new ve(this.optCompleteServerCache_,!0,!1) : this.viewCache_.serverCache;
            return Si(this.writes_, e, s)
        }
    }
    getChildAfterChild(e, n, s) {
        let i = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : Ke(this.viewCache_)
          , r = yu(this.writes_, i, n, 1, s, e);
        return r.length === 0 ? null : r[0]
    }
}
;
function vu(t) {
    return {
        filter: t
    }
}
function wu(t, e) {
    v(e.eventCache.getNode().isIndexed(t.filter.getIndex()), "Event snap not indexed"),
    v(e.serverCache.getNode().isIndexed(t.filter.getIndex()), "Server snap not indexed")
}
function Cu(t, e, n, s, i) {
    let r = new Ks, o, l;
    if (n.type === he.OVERWRITE) {
        let h = n;
        h.source.fromUser ? o = Xs(t, e, h.path, h.snap, s, i, r) : (v(h.source.fromServer, "Unknown source."),
        l = h.source.tagged || e.serverCache.isFiltered() && !b(h.path),
        o = Cn(t, e, h.path, h.snap, s, i, l, r))
    } else if (n.type === he.MERGE) {
        let h = n;
        h.source.fromUser ? o = Tu(t, e, h.path, h.children, s, i, r) : (v(h.source.fromServer, "Unknown source."),
        l = h.source.tagged || e.serverCache.isFiltered(),
        o = Js(t, e, h.path, h.children, s, i, l, r))
    } else if (n.type === he.ACK_USER_WRITE) {
        let h = n;
        h.revert ? o = bu(t, e, h.path, s, i, r) : o = Su(t, e, h.path, h.affectedTree, s, i, r)
    } else if (n.type === he.LISTEN_COMPLETE)
        o = Iu(t, e, n.path, s, r);
    else
        throw tt("Unknown operation type: " + n.type);
    let u = r.getChanges();
    return Eu(e, o, u),
    {
        viewCache: o,
        changes: u
    }
}
function Eu(t, e, n) {
    let s = e.eventCache;
    if (s.isFullyInitialized()) {
        let i = s.getNode().isLeafNode() || s.getNode().isEmpty()
          , r = yn(t);
        (n.length > 0 || !t.eventCache.isFullyInitialized() || i && !s.getNode().equals(r) || !s.getNode().getPriority().equals(r.getPriority())) && n.push(el(yn(e)))
    }
}
function al(t, e, n, s, i, r) {
    let o = e.eventCache;
    if (wn(s, n) != null)
        return e;
    {
        let l, u;
        if (b(n))
            if (v(e.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"),
            e.serverCache.isFiltered()) {
                let h = Ke(e)
                  , p = h instanceof T ? h : T.EMPTY_NODE
                  , d = Ti(s, p);
                l = t.filter.updateFullNode(e.eventCache.getNode(), d, r)
            } else {
                let h = vn(s, Ke(e));
                l = t.filter.updateFullNode(e.eventCache.getNode(), h, r)
            }
        else {
            let h = I(n);
            if (h === ".priority") {
                v(Oe(n) === 1, "Can't have a priority with additional path components");
                let p = o.getNode();
                u = e.serverCache.getNode();
                let d = po(s, n, p, u);
                d != null ? l = t.filter.updatePriority(p, d) : l = o.getNode()
            } else {
                let p = W(n), d;
                if (o.isCompleteForChild(h)) {
                    u = e.serverCache.getNode();
                    let m = po(s, n, o.getNode(), u);
                    m != null ? d = o.getNode().getImmediateChild(h).updateChild(p, m) : d = o.getNode().getImmediateChild(h)
                } else
                    d = Si(s, h, e.serverCache);
                d != null ? l = t.filter.updateChild(o.getNode(), h, d, p, i, r) : l = o.getNode()
            }
        }
        return Rt(e, l, o.isFullyInitialized() || b(n), t.filter.filtersNodes())
    }
}
function Cn(t, e, n, s, i, r, o, l) {
    let u = e.serverCache, h, p = o ? t.filter : t.filter.getIndexedFilter();
    if (b(n))
        h = p.updateFullNode(u.getNode(), s, null);
    else if (p.filtersNodes() && !u.isFiltered()) {
        let g = u.getNode().updateChild(n, s);
        h = p.updateFullNode(u.getNode(), g, null)
    } else {
        let g = I(n);
        if (!u.isCompleteForPath(n) && Oe(n) > 1)
            return e;
        let C = W(n)
          , O = u.getNode().getImmediateChild(g).updateChild(C, s);
        g === ".priority" ? h = p.updatePriority(u.getNode(), O) : h = p.updateChild(u.getNode(), g, O, C, ll, null)
    }
    let d = tl(e, h, u.isFullyInitialized() || b(n), p.filtersNodes())
      , m = new Wt(i,d,r);
    return al(t, d, n, i, m, l)
}
function Xs(t, e, n, s, i, r, o) {
    let l = e.eventCache, u, h, p = new Wt(i,e,r);
    if (b(n))
        h = t.filter.updateFullNode(e.eventCache.getNode(), s, o),
        u = Rt(e, h, !0, t.filter.filtersNodes());
    else {
        let d = I(n);
        if (d === ".priority")
            h = t.filter.updatePriority(e.eventCache.getNode(), s),
            u = Rt(e, h, l.isFullyInitialized(), l.isFiltered());
        else {
            let m = W(n), g = l.getNode().getImmediateChild(d), C;
            if (b(m))
                C = s;
            else {
                let S = p.getCompleteChild(d);
                S != null ? gi(m) === ".priority" && S.getChild(Yo(m)).isEmpty() ? C = S : C = S.updateChild(m, s) : C = T.EMPTY_NODE
            }
            if (g.equals(C))
                u = e;
            else {
                let S = t.filter.updateChild(l.getNode(), d, C, m, p, o);
                u = Rt(e, S, l.isFullyInitialized(), t.filter.filtersNodes())
            }
        }
    }
    return u
}
function mo(t, e) {
    return t.eventCache.isCompleteForChild(e)
}
function Tu(t, e, n, s, i, r, o) {
    let l = e;
    return s.foreach( (u, h) => {
        let p = H(n, u);
        mo(e, I(p)) && (l = Xs(t, l, p, h, i, r, o))
    }
    ),
    s.foreach( (u, h) => {
        let p = H(n, u);
        mo(e, I(p)) || (l = Xs(t, l, p, h, i, r, o))
    }
    ),
    l
}
function go(t, e, n) {
    return n.foreach( (s, i) => {
        e = e.updateChild(s, i)
    }
    ),
    e
}
function Js(t, e, n, s, i, r, o, l) {
    if (e.serverCache.getNode().isEmpty() && !e.serverCache.isFullyInitialized())
        return e;
    let u = e, h;
    b(n) ? h = s : h = new ne(null).setTree(n, s);
    let p = e.serverCache.getNode();
    return h.children.inorderTraversal( (d, m) => {
        if (p.hasChild(d)) {
            let g = e.serverCache.getNode().getImmediateChild(d)
              , C = go(t, g, m);
            u = Cn(t, u, new M(d), C, i, r, o, l)
        }
    }
    ),
    h.children.inorderTraversal( (d, m) => {
        let g = !e.serverCache.isCompleteForChild(d) && m.value === null;
        if (!p.hasChild(d) && !g) {
            let C = e.serverCache.getNode().getImmediateChild(d)
              , S = go(t, C, m);
            u = Cn(t, u, new M(d), S, i, r, o, l)
        }
    }
    ),
    u
}
function Su(t, e, n, s, i, r, o) {
    if (wn(i, n) != null)
        return e;
    let l = e.serverCache.isFiltered()
      , u = e.serverCache;
    if (s.value != null) {
        if (b(n) && u.isFullyInitialized() || u.isCompleteForPath(n))
            return Cn(t, e, n, u.getNode().getChild(n), i, r, l, o);
        if (b(n)) {
            let h = new ne(null);
            return u.getNode().forEachChild(qe, (p, d) => {
                h = h.set(new M(p), d)
            }
            ),
            Js(t, e, n, h, i, r, l, o)
        } else
            return e
    } else {
        let h = new ne(null);
        return s.foreach( (p, d) => {
            let m = H(n, p);
            u.isCompleteForPath(m) && (h = h.set(p, u.getNode().getChild(m)))
        }
        ),
        Js(t, e, n, h, i, r, l, o)
    }
}
function Iu(t, e, n, s, i) {
    let r = e.serverCache
      , o = tl(e, r.getNode(), r.isFullyInitialized() || b(n), r.isFiltered());
    return al(t, o, n, s, ll, i)
}
function bu(t, e, n, s, i, r) {
    let o;
    if (wn(s, n) != null)
        return e;
    {
        let l = new Wt(s,e,i), u = e.eventCache.getNode(), h;
        if (b(n) || I(n) === ".priority") {
            let p;
            if (e.serverCache.isFullyInitialized())
                p = vn(s, Ke(e));
            else {
                let d = e.serverCache.getNode();
                v(d instanceof T, "serverChildren would be complete if leaf node"),
                p = Ti(s, d)
            }
            p = p,
            h = t.filter.updateFullNode(u, p, r)
        } else {
            let p = I(n)
              , d = Si(s, p, e.serverCache);
            d == null && e.serverCache.isCompleteForChild(p) && (d = u.getImmediateChild(p)),
            d != null ? h = t.filter.updateChild(u, p, d, W(n), l, r) : e.eventCache.getNode().hasChild(p) ? h = t.filter.updateChild(u, p, T.EMPTY_NODE, W(n), l, r) : h = u,
            h.isEmpty() && e.serverCache.isFullyInitialized() && (o = vn(s, Ke(e)),
            o.isLeafNode() && (h = t.filter.updateFullNode(h, o, r)))
        }
        return o = e.serverCache.isFullyInitialized() || wn(s, A()) != null,
        Rt(e, h, o, t.filter.filtersNodes())
    }
}
var Zs = class {
    constructor(e, n) {
        this.query_ = e,
        this.eventRegistrations_ = [];
        let s = this.query_._queryParams
          , i = new Lt(s.getIndex())
          , r = Yc(s);
        this.processor_ = vu(r);
        let o = n.serverCache
          , l = n.eventCache
          , u = i.updateFullNode(T.EMPTY_NODE, o.getNode(), null)
          , h = r.updateFullNode(T.EMPTY_NODE, l.getNode(), null)
          , p = new ve(u,o.isFullyInitialized(),i.filtersNodes())
          , d = new ve(h,l.isFullyInitialized(),r.filtersNodes());
        this.viewCache_ = Mn(d, p),
        this.eventGenerator_ = new zs(this.query_)
    }
    get query() {
        return this.query_
    }
}
;
function Nu(t) {
    return t.viewCache_.serverCache.getNode()
}
function ku(t) {
    return yn(t.viewCache_)
}
function Ru(t, e) {
    let n = Ke(t.viewCache_);
    return n && (t.query._queryParams.loadsAllData() || !b(e) && !n.getImmediateChild(I(e)).isEmpty()) ? n.getChild(e) : null
}
function yo(t) {
    return t.eventRegistrations_.length === 0
}
function xu(t, e) {
    t.eventRegistrations_.push(e)
}
function vo(t, e, n) {
    let s = [];
    if (n) {
        v(e == null, "A cancel should cancel all event registrations.");
        let i = t.query._path;
        t.eventRegistrations_.forEach(r => {
            let o = r.createCancelEvent(n, i);
            o && s.push(o)
        }
        )
    }
    if (e) {
        let i = [];
        for (let r = 0; r < t.eventRegistrations_.length; ++r) {
            let o = t.eventRegistrations_[r];
            if (!o.matches(e))
                i.push(o);
            else if (e.hasAnyCallback()) {
                i = i.concat(t.eventRegistrations_.slice(r + 1));
                break
            }
        }
        t.eventRegistrations_ = i
    } else
        t.eventRegistrations_ = [];
    return s
}
function wo(t, e, n, s) {
    e.type === he.MERGE && e.source.queryId !== null && (v(Ke(t.viewCache_), "We should always have a full cache before handling merges"),
    v(yn(t.viewCache_), "Missing event cache, even though we have a server cache"));
    let i = t.viewCache_
      , r = Cu(t.processor_, i, e, n, s);
    return wu(t.processor_, r.viewCache),
    v(r.viewCache.serverCache.isFullyInitialized() || !i.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"),
    t.viewCache_ = r.viewCache,
    cl(t, r.changes, r.viewCache.eventCache.getNode(), null)
}
function Pu(t, e) {
    let n = t.viewCache_.eventCache
      , s = [];
    return n.getNode().isLeafNode() || n.getNode().forEachChild(U, (r, o) => {
        s.push(lt(r, o))
    }
    ),
    n.isFullyInitialized() && s.push(el(n.getNode())),
    cl(t, s, n.getNode(), e)
}
function cl(t, e, n, s) {
    let i = s ? [s] : t.eventRegistrations_;
    return tu(t.eventGenerator_, e, n, i)
}
var En, Tn = class {
    constructor() {
        this.views = new Map
    }
}
;
function Au(t) {
    v(!En, "__referenceConstructor has already been defined"),
    En = t
}
function Mu() {
    return v(En, "Reference.ts has not been loaded"),
    En
}
function Du(t) {
    return t.views.size === 0
}
function Ii(t, e, n, s) {
    let i = e.source.queryId;
    if (i !== null) {
        let r = t.views.get(i);
        return v(r != null, "SyncTree gave us an op for an invalid query."),
        wo(r, e, n, s)
    } else {
        let r = [];
        for (let o of t.views.values())
            r = r.concat(wo(o, e, n, s));
        return r
    }
}
function ul(t, e, n, s, i) {
    let r = e._queryIdentifier
      , o = t.views.get(r);
    if (!o) {
        let l = vn(n, i ? s : null)
          , u = !1;
        l ? u = !0 : s instanceof T ? (l = Ti(n, s),
        u = !1) : (l = T.EMPTY_NODE,
        u = !1);
        let h = Mn(new ve(l,u,!1), new ve(s,i,!1));
        return new Zs(e,h)
    }
    return o
}
function Ou(t, e, n, s, i, r) {
    let o = ul(t, e, s, i, r);
    return t.views.has(e._queryIdentifier) || t.views.set(e._queryIdentifier, o),
    xu(o, n),
    Pu(o, n)
}
function Lu(t, e, n, s) {
    let i = e._queryIdentifier
      , r = []
      , o = []
      , l = Le(t);
    if (i === "default")
        for (let[u,h] of t.views.entries())
            o = o.concat(vo(h, n, s)),
            yo(h) && (t.views.delete(u),
            h.query._queryParams.loadsAllData() || r.push(h.query));
    else {
        let u = t.views.get(i);
        u && (o = o.concat(vo(u, n, s)),
        yo(u) && (t.views.delete(i),
        u.query._queryParams.loadsAllData() || r.push(u.query)))
    }
    return l && !Le(t) && r.push(new (Mu())(e._repo,e._path)),
    {
        removed: r,
        events: o
    }
}
function hl(t) {
    let e = [];
    for (let n of t.views.values())
        n.query._queryParams.loadsAllData() || e.push(n);
    return e
}
function Me(t, e) {
    let n = null;
    for (let s of t.views.values())
        n = n || Ru(s, e);
    return n
}
function dl(t, e) {
    if (e._queryParams.loadsAllData())
        return On(t);
    {
        let s = e._queryIdentifier;
        return t.views.get(s)
    }
}
function fl(t, e) {
    return dl(t, e) != null
}
function Le(t) {
    return On(t) != null
}
function On(t) {
    for (let e of t.views.values())
        if (e.query._queryParams.loadsAllData())
            return e;
    return null
}
var Sn;
function Fu(t) {
    v(!Sn, "__referenceConstructor has already been defined"),
    Sn = t
}
function Wu() {
    return v(Sn, "Reference.ts has not been loaded"),
    Sn
}
var Uu = 1
  , In = class {
    constructor(e) {
        this.listenProvider_ = e,
        this.syncPointTree_ = new ne(null),
        this.pendingWriteTree_ = gu(),
        this.tagToQueryMap = new Map,
        this.queryToTagMap = new Map
    }
}
;
function _l(t, e, n, s, i) {
    return ru(t.pendingWriteTree_, e, n, s, i),
    i ? pt(t, new at(wi(),e,n)) : []
}
function $u(t, e, n, s) {
    ou(t.pendingWriteTree_, e, n, s);
    let i = ne.fromObject(n);
    return pt(t, new Ft(wi(),e,i))
}
function xe(t, e, n=!1) {
    let s = lu(t.pendingWriteTree_, e);
    if (au(t.pendingWriteTree_, e)) {
        let r = new ne(null);
        return s.snap != null ? r = r.set(A(), !0) : j(s.children, o => {
            r = r.set(new M(o), !0)
        }
        ),
        pt(t, new Gs(s.path,r,n))
    } else
        return []
}
function qt(t, e, n) {
    return pt(t, new at(Ci(),e,n))
}
function Hu(t, e, n) {
    let s = ne.fromObject(n);
    return pt(t, new Ft(Ci(),e,s))
}
function Bu(t, e) {
    return pt(t, new gn(Ci(),e))
}
function Vu(t, e, n) {
    let s = Ni(t, n);
    if (s) {
        let i = ki(s)
          , r = i.path
          , o = i.queryId
          , l = ee(r, e)
          , u = new gn(Ei(o),l);
        return Ri(t, r, u)
    } else
        return []
}
function bn(t, e, n, s, i=!1) {
    let r = e._path
      , o = t.syncPointTree_.get(r)
      , l = [];
    if (o && (e._queryIdentifier === "default" || fl(o, e))) {
        let u = Lu(o, e, n, s);
        Du(o) && (t.syncPointTree_ = t.syncPointTree_.remove(r));
        let h = u.removed;
        if (l = u.events,
        !i) {
            let p = h.findIndex(m => m._queryParams.loadsAllData()) !== -1
              , d = t.syncPointTree_.findOnPath(r, (m, g) => Le(g));
            if (p && !d) {
                let m = t.syncPointTree_.subtree(r);
                if (!m.isEmpty()) {
                    let g = qu(m);
                    for (let C = 0; C < g.length; ++C) {
                        let S = g[C]
                          , O = S.query
                          , K = yl(t, S);
                        t.listenProvider_.startListening(Pt(O), Ut(t, O), K.hashFn, K.onComplete)
                    }
                }
            }
            !d && h.length > 0 && !s && (p ? t.listenProvider_.stopListening(Pt(e), null) : h.forEach(m => {
                let g = t.queryToTagMap.get(Ln(m));
                t.listenProvider_.stopListening(Pt(m), g)
            }
            ))
        }
        Yu(t, h)
    }
    return l
}
function pl(t, e, n, s) {
    let i = Ni(t, s);
    if (i != null) {
        let r = ki(i)
          , o = r.path
          , l = r.queryId
          , u = ee(o, e)
          , h = new at(Ei(l),u,n);
        return Ri(t, o, h)
    } else
        return []
}
function Gu(t, e, n, s) {
    let i = Ni(t, s);
    if (i) {
        let r = ki(i)
          , o = r.path
          , l = r.queryId
          , u = ee(o, e)
          , h = ne.fromObject(n)
          , p = new Ft(Ei(l),u,h);
        return Ri(t, o, p)
    } else
        return []
}
function ei(t, e, n, s=!1) {
    let i = e._path
      , r = null
      , o = !1;
    t.syncPointTree_.foreachOnPath(i, (m, g) => {
        let C = ee(m, i);
        r = r || Me(g, C),
        o = o || Le(g)
    }
    );
    let l = t.syncPointTree_.get(i);
    l ? (o = o || Le(l),
    r = r || Me(l, A())) : (l = new Tn,
    t.syncPointTree_ = t.syncPointTree_.set(i, l));
    let u;
    r != null ? u = !0 : (u = !1,
    r = T.EMPTY_NODE,
    t.syncPointTree_.subtree(i).foreachChild( (g, C) => {
        let S = Me(C, A());
        S && (r = r.updateImmediateChild(g, S))
    }
    ));
    let h = fl(l, e);
    if (!h && !e._queryParams.loadsAllData()) {
        let m = Ln(e);
        v(!t.queryToTagMap.has(m), "View does not exist, but we have a tag");
        let g = ju();
        t.queryToTagMap.set(m, g),
        t.tagToQueryMap.set(g, m)
    }
    let p = Dn(t.pendingWriteTree_, i)
      , d = Ou(l, e, n, p, r, u);
    if (!h && !o && !s) {
        let m = dl(l, e);
        d = d.concat(Ku(t, e, m))
    }
    return d
}
function bi(t, e, n) {
    let i = t.pendingWriteTree_
      , r = t.syncPointTree_.findOnPath(e, (o, l) => {
        let u = ee(o, e)
          , h = Me(l, u);
        if (h)
            return h
    }
    );
    return il(i, e, r, n, !0)
}
function zu(t, e) {
    let n = e._path
      , s = null;
    t.syncPointTree_.foreachOnPath(n, (h, p) => {
        let d = ee(h, n);
        s = s || Me(p, d)
    }
    );
    let i = t.syncPointTree_.get(n);
    i ? s = s || Me(i, A()) : (i = new Tn,
    t.syncPointTree_ = t.syncPointTree_.set(n, i));
    let r = s != null
      , o = r ? new ve(s,!0,!1) : null
      , l = Dn(t.pendingWriteTree_, e._path)
      , u = ul(i, e, l, r ? o.getNode() : T.EMPTY_NODE, r);
    return ku(u)
}
function pt(t, e) {
    return ml(e, t.syncPointTree_, null, Dn(t.pendingWriteTree_, A()))
}
function ml(t, e, n, s) {
    if (b(t.path))
        return gl(t, e, n, s);
    {
        let i = e.get(A());
        n == null && i != null && (n = Me(i, A()));
        let r = []
          , o = I(t.path)
          , l = t.operationForChild(o)
          , u = e.children.get(o);
        if (u && l) {
            let h = n ? n.getImmediateChild(o) : null
              , p = rl(s, o);
            r = r.concat(ml(l, u, h, p))
        }
        return i && (r = r.concat(Ii(i, t, s, n))),
        r
    }
}
function gl(t, e, n, s) {
    let i = e.get(A());
    n == null && i != null && (n = Me(i, A()));
    let r = [];
    return e.children.inorderTraversal( (o, l) => {
        let u = n ? n.getImmediateChild(o) : null
          , h = rl(s, o)
          , p = t.operationForChild(o);
        p && (r = r.concat(gl(p, l, u, h)))
    }
    ),
    i && (r = r.concat(Ii(i, t, s, n))),
    r
}
function yl(t, e) {
    let n = e.query
      , s = Ut(t, n);
    return {
        hashFn: () => (Nu(e) || T.EMPTY_NODE).hash(),
        onComplete: i => {
            if (i === "ok")
                return s ? Vu(t, n._path, s) : Bu(t, n._path);
            {
                let r = rc(i, n);
                return bn(t, n, null, r)
            }
        }
    }
}
function Ut(t, e) {
    let n = Ln(e);
    return t.queryToTagMap.get(n)
}
function Ln(t) {
    return t._path.toString() + "$" + t._queryIdentifier
}
function Ni(t, e) {
    return t.tagToQueryMap.get(e)
}
function ki(t) {
    let e = t.indexOf("$");
    return v(e !== -1 && e < t.length - 1, "Bad queryKey."),
    {
        queryId: t.substr(e + 1),
        path: new M(t.substr(0, e))
    }
}
function Ri(t, e, n) {
    let s = t.syncPointTree_.get(e);
    v(s, "Missing sync point for query tag that we're tracking");
    let i = Dn(t.pendingWriteTree_, e);
    return Ii(s, n, i, null)
}
function qu(t) {
    return t.fold( (e, n, s) => {
        if (n && Le(n))
            return [On(n)];
        {
            let i = [];
            return n && (i = hl(n)),
            j(s, (r, o) => {
                i = i.concat(o)
            }
            ),
            i
        }
    }
    )
}
function Pt(t) {
    return t._queryParams.loadsAllData() && !t._queryParams.isDefault() ? new (Wu())(t._repo,t._path) : t
}
function Yu(t, e) {
    for (let n = 0; n < e.length; ++n) {
        let s = e[n];
        if (!s._queryParams.loadsAllData()) {
            let i = Ln(s)
              , r = t.queryToTagMap.get(i);
            t.queryToTagMap.delete(i),
            t.tagToQueryMap.delete(r)
        }
    }
}
function ju() {
    return Uu++
}
function Ku(t, e, n) {
    let s = e._path
      , i = Ut(t, e)
      , r = yl(t, n)
      , o = t.listenProvider_.startListening(Pt(e), i, r.hashFn, r.onComplete)
      , l = t.syncPointTree_.subtree(s);
    if (i)
        v(!Le(l.value), "If we're adding a query, it shouldn't be shadowed");
    else {
        let u = l.fold( (h, p, d) => {
            if (!b(h) && p && Le(p))
                return [On(p).query];
            {
                let m = [];
                return p && (m = m.concat(hl(p).map(g => g.query))),
                j(d, (g, C) => {
                    m = m.concat(C)
                }
                ),
                m
            }
        }
        );
        for (let h = 0; h < u.length; ++h) {
            let p = u[h];
            t.listenProvider_.stopListening(Pt(p), Ut(t, p))
        }
    }
    return o
}
var ti = class t {
    constructor(e) {
        this.node_ = e
    }
    getImmediateChild(e) {
        let n = this.node_.getImmediateChild(e);
        return new t(n)
    }
    node() {
        return this.node_
    }
}
  , ni = class t {
    constructor(e, n) {
        this.syncTree_ = e,
        this.path_ = n
    }
    getImmediateChild(e) {
        let n = H(this.path_, e);
        return new t(this.syncTree_,n)
    }
    node() {
        return bi(this.syncTree_, this.path_)
    }
}
  , Qu = function(t) {
    return t = t || {},
    t.timestamp = t.timestamp || new Date().getTime(),
    t
}
  , Co = function(t, e, n) {
    if (!t || typeof t != "object")
        return t;
    if (v(".sv" in t, "Unexpected leaf node or priority contents"),
    typeof t[".sv"] == "string")
        return Xu(t[".sv"], e, n);
    if (typeof t[".sv"] == "object")
        return Ju(t[".sv"], e);
    v(!1, "Unexpected server value: " + JSON.stringify(t, null, 2))
}
  , Xu = function(t, e, n) {
    switch (t) {
    case "timestamp":
        return n.timestamp;
    default:
        v(!1, "Unexpected server value: " + t)
    }
}
  , Ju = function(t, e, n) {
    t.hasOwnProperty("increment") || v(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
    let s = t.increment;
    typeof s != "number" && v(!1, "Unexpected increment value: " + s);
    let i = e.node();
    if (v(i !== null && typeof i < "u", "Expected ChildrenNode.EMPTY_NODE for nulls"),
    !i.isLeafNode())
        return s;
    let o = i.getValue();
    return typeof o != "number" ? s : o + s
}
  , vl = function(t, e, n, s) {
    return xi(e, new ni(n,t), s)
}
  , wl = function(t, e, n) {
    return xi(t, new ti(e), n)
};
function xi(t, e, n) {
    let s = t.getPriority().val(), i = Co(s, e.getImmediateChild(".priority"), n), r;
    if (t.isLeafNode()) {
        let o = t
          , l = Co(o.getValue(), e, n);
        return l !== o.getValue() || i !== o.getPriority().val() ? new Ie(l,B(i)) : t
    } else {
        let o = t;
        return r = o,
        i !== o.getPriority().val() && (r = r.updatePriority(new Ie(i))),
        o.forEachChild(U, (l, u) => {
            let h = xi(u, e.getImmediateChild(l), n);
            h !== u && (r = r.updateImmediateChild(l, h))
        }
        ),
        r
    }
}
var $t = class {
    constructor(e="", n=null, s={
        children: {},
        childCount: 0
    }) {
        this.name = e,
        this.parent = n,
        this.node = s
    }
}
;
function Pi(t, e) {
    let n = e instanceof M ? e : new M(e)
      , s = t
      , i = I(n);
    for (; i !== null; ) {
        let r = He(s.node.children, i) || {
            children: {},
            childCount: 0
        };
        s = new $t(i,s,r),
        n = W(n),
        i = I(n)
    }
    return s
}
function mt(t) {
    return t.node.value
}
function Cl(t, e) {
    t.node.value = e,
    si(t)
}
function El(t) {
    return t.node.childCount > 0
}
function Zu(t) {
    return mt(t) === void 0 && !El(t)
}
function Fn(t, e) {
    j(t.node.children, (n, s) => {
        e(new $t(n,t,s))
    }
    )
}
function Tl(t, e, n, s) {
    n && e(t),
    Fn(t, i => {
        Tl(i, e, !0)
    }
    )
}
function eh(t, e, n) {
    let s = t.parent;
    for (; s !== null; ) {
        if (e(s))
            return !0;
        s = s.parent
    }
    return !1
}
function Yt(t) {
    return new M(t.parent === null ? t.name : Yt(t.parent) + "/" + t.name)
}
function si(t) {
    t.parent !== null && th(t.parent, t.name, t)
}
function th(t, e, n) {
    let s = Zu(n)
      , i = ue(t.node.children, e);
    s && i ? (delete t.node.children[e],
    t.node.childCount--,
    si(t)) : !s && !i && (t.node.children[e] = n.node,
    t.node.childCount++,
    si(t))
}
var nh = /[\[\].#$\/\u0000-\u001F\u007F]/
  , sh = /[\[\].#$\u0000-\u001F\u007F]/
  , _s = 10 * 1024 * 1024
  , Wn = function(t) {
    return typeof t == "string" && t.length !== 0 && !nh.test(t)
}
  , Sl = function(t) {
    return typeof t == "string" && t.length !== 0 && !sh.test(t)
}
  , ih = function(t) {
    return t && (t = t.replace(/^\/*\.info(\/|$)/, "/")),
    Sl(t)
}
  , Nn = function(t) {
    return t === null || typeof t == "string" || typeof t == "number" && !An(t) || t && typeof t == "object" && ue(t, ".sv")
}
  , Ht = function(t, e, n, s) {
    s && e === void 0 || Un(Re(t, "value"), e, n)
}
  , Un = function(t, e, n) {
    let s = n instanceof M ? new ks(n,t) : n;
    if (e === void 0)
        throw new Error(t + "contains undefined " + Be(s));
    if (typeof e == "function")
        throw new Error(t + "contains a function " + Be(s) + " with contents = " + e.toString());
    if (An(e))
        throw new Error(t + "contains " + e.toString() + " " + Be(s));
    if (typeof e == "string" && e.length > _s / 3 && Tt(e) > _s)
        throw new Error(t + "contains a string greater than " + _s + " utf8 bytes " + Be(s) + " ('" + e.substring(0, 50) + "...')");
    if (e && typeof e == "object") {
        let i = !1
          , r = !1;
        if (j(e, (o, l) => {
            if (o === ".value")
                i = !0;
            else if (o !== ".priority" && o !== ".sv" && (r = !0,
            !Wn(o)))
                throw new Error(t + " contains an invalid key (" + o + ") " + Be(s) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
            Dc(s, o),
            Un(t, l, s),
            Oc(s)
        }
        ),
        i && r)
            throw new Error(t + ' contains ".value" child ' + Be(s) + " in addition to actual children.")
    }
}
  , rh = function(t, e) {
    let n, s;
    for (n = 0; n < e.length; n++) {
        s = e[n];
        let r = At(s);
        for (let o = 0; o < r.length; o++)
            if (!(r[o] === ".priority" && o === r.length - 1)) {
                if (!Wn(r[o]))
                    throw new Error(t + "contains an invalid key (" + r[o] + ") in path " + s.toString() + `. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)
            }
    }
    e.sort(Mc);
    let i = null;
    for (n = 0; n < e.length; n++) {
        if (s = e[n],
        i !== null && oe(i, s))
            throw new Error(t + "contains a path " + i.toString() + " that is ancestor of another path " + s.toString());
        i = s
    }
}
  , Il = function(t, e, n, s) {
    let i = Re(t, "values");
    if (!(e && typeof e == "object") || Array.isArray(e))
        throw new Error(i + " must be an object containing the children to replace.");
    let r = [];
    j(e, (o, l) => {
        let u = new M(o);
        if (Un(i, l, H(n, u)),
        gi(u) === ".priority" && !Nn(l))
            throw new Error(i + "contains an invalid value for '" + u.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
        r.push(u)
    }
    ),
    rh(i, r)
}
  , oh = function(t, e, n) {
    if (An(e))
        throw new Error(Re(t, "priority") + "is " + e.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
    if (!Nn(e))
        throw new Error(Re(t, "priority") + "must be a valid Firebase priority (a string, finite number, server value, or null).")
}
  , lh = function(t, e, n, s) {
    if (n !== void 0 && !Wn(n))
        throw new Error(Re(t, e) + 'was an invalid key = "' + n + `".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)
}
  , Ai = function(t, e, n, s) {
    if (!(s && n === void 0) && !Sl(n))
        throw new Error(Re(t, e) + 'was an invalid path = "' + n + `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)
}
  , ah = function(t, e, n, s) {
    n && (n = n.replace(/^\/*\.info(\/|$)/, "/")),
    Ai(t, e, n, s)
}
  , Ge = function(t, e) {
    if (I(e) === ".info")
        throw new Error(t + " failed = Can't modify data under /.info/")
}
  , ch = function(t, e) {
    let n = e.path.toString();
    if (typeof e.repoInfo.host != "string" || e.repoInfo.host.length === 0 || !Wn(e.repoInfo.namespace) && e.repoInfo.host.split(":")[0] !== "localhost" || n.length !== 0 && !ih(n))
        throw new Error(Re(t, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)
};
var ii = class {
    constructor() {
        this.eventLists_ = [],
        this.recursionDepth_ = 0
    }
}
;
function $n(t, e) {
    let n = null;
    for (let s = 0; s < e.length; s++) {
        let i = e[s]
          , r = i.getPath();
        n !== null && !yi(r, n.path) && (t.eventLists_.push(n),
        n = null),
        n === null && (n = {
            events: [],
            path: r
        }),
        n.events.push(i)
    }
    n && t.eventLists_.push(n)
}
function bl(t, e, n) {
    $n(t, n),
    Nl(t, s => yi(s, e))
}
function ae(t, e, n) {
    $n(t, n),
    Nl(t, s => oe(s, e) || oe(e, s))
}
function Nl(t, e) {
    t.recursionDepth_++;
    let n = !0;
    for (let s = 0; s < t.eventLists_.length; s++) {
        let i = t.eventLists_[s];
        if (i) {
            let r = i.path;
            e(r) ? (uh(t.eventLists_[s]),
            t.eventLists_[s] = null) : n = !1
        }
    }
    n && (t.eventLists_ = []),
    t.recursionDepth_--
}
function uh(t) {
    for (let e = 0; e < t.events.length; e++) {
        let n = t.events[e];
        if (n !== null) {
            t.events[e] = null;
            let s = n.getEventRunner();
            ze && Y("event: " + n.toString()),
            ft(s)
        }
    }
}
var kl = "repo_interrupt"
  , hh = 25
  , ri = class {
    constructor(e, n, s, i) {
        this.repoInfo_ = e,
        this.forceRestClient_ = n,
        this.authTokenProvider_ = s,
        this.appCheckProvider_ = i,
        this.dataUpdateCount = 0,
        this.statsListener_ = null,
        this.eventQueue_ = new ii,
        this.nextWriteId_ = 1,
        this.interceptServerDataCallback_ = null,
        this.onDisconnect_ = mn(),
        this.transactionQueueTree_ = new $t,
        this.persistentConnection_ = null,
        this.key = this.repoInfo_.toURLString()
    }
    toString() {
        return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
    }
}
;
function dh(t, e, n) {
    if (t.stats_ = mi(t.repoInfo_),
    t.forceRestClient_ || cc())
        t.server_ = new Ws(t.repoInfo_, (s, i, r, o) => {
            Eo(t, s, i, r, o)
        }
        ,t.authTokenProvider_,t.appCheckProvider_),
        setTimeout( () => To(t, !0), 0);
    else {
        if (typeof n < "u" && n !== null) {
            if (typeof n != "object")
                throw new Error("Only objects are supported for option databaseAuthVariableOverride");
            try {
                q(n)
            } catch (s) {
                throw new Error("Invalid authOverride provided: " + s)
            }
        }
        t.persistentConnection_ = new je(t.repoInfo_,e, (s, i, r, o) => {
            Eo(t, s, i, r, o)
        }
        ,s => {
            To(t, s)
        }
        ,s => {
            fh(t, s)
        }
        ,t.authTokenProvider_,t.appCheckProvider_,n),
        t.server_ = t.persistentConnection_
    }
    t.authTokenProvider_.addTokenChangeListener(s => {
        t.server_.refreshAuthToken(s)
    }
    ),
    t.appCheckProvider_.addTokenChangeListener(s => {
        t.server_.refreshAppCheckToken(s.token)
    }
    ),
    t.statsReporter_ = hc(t.repoInfo_, () => new Vs(t.stats_,t.server_)),
    t.infoData_ = new Us,
    t.infoSyncTree_ = new In({
        startListening: (s, i, r, o) => {
            let l = []
              , u = t.infoData_.getNode(s._path);
            return u.isEmpty() || (l = qt(t.infoSyncTree_, s._path, u),
            setTimeout( () => {
                o("ok")
            }
            , 0)),
            l
        }
        ,
        stopListening: () => {}
    }),
    Mi(t, "connected", !1),
    t.serverSyncTree_ = new In({
        startListening: (s, i, r, o) => (t.server_.listen(s, r, i, (l, u) => {
            let h = o(l, u);
            ae(t.eventQueue_, s._path, h)
        }
        ),
        []),
        stopListening: (s, i) => {
            t.server_.unlisten(s, i)
        }
    })
}
function Rl(t) {
    let n = t.infoData_.getNode(new M(".info/serverTimeOffset")).val() || 0;
    return new Date().getTime() + n
}
function Hn(t) {
    return Qu({
        timestamp: Rl(t)
    })
}
function Eo(t, e, n, s, i) {
    t.dataUpdateCount++;
    let r = new M(e);
    n = t.interceptServerDataCallback_ ? t.interceptServerDataCallback_(e, n) : n;
    let o = [];
    if (i)
        if (s) {
            let u = Et(n, h => B(h));
            o = Gu(t.serverSyncTree_, r, u, i)
        } else {
            let u = B(n);
            o = pl(t.serverSyncTree_, r, u, i)
        }
    else if (s) {
        let u = Et(n, h => B(h));
        o = Hu(t.serverSyncTree_, r, u)
    } else {
        let u = B(n);
        o = qt(t.serverSyncTree_, r, u)
    }
    let l = r;
    o.length > 0 && (l = ut(t, r)),
    ae(t.eventQueue_, l, o)
}
function To(t, e) {
    Mi(t, "connected", e),
    e === !1 && gh(t)
}
function fh(t, e) {
    j(e, (n, s) => {
        Mi(t, n, s)
    }
    )
}
function Mi(t, e, n) {
    let s = new M("/.info/" + e)
      , i = B(n);
    t.infoData_.updateSnapshot(s, i);
    let r = qt(t.infoSyncTree_, s, i);
    ae(t.eventQueue_, s, r)
}
function Di(t) {
    return t.nextWriteId_++
}
function _h(t, e, n) {
    let s = zu(t.serverSyncTree_, e);
    return s != null ? Promise.resolve(s) : t.server_.get(e).then(i => {
        let r = B(i).withIndex(e._queryParams.getIndex());
        ei(t.serverSyncTree_, e, n, !0);
        let o;
        if (e._queryParams.loadsAllData())
            o = qt(t.serverSyncTree_, e._path, r);
        else {
            let l = Ut(t.serverSyncTree_, e);
            o = pl(t.serverSyncTree_, e._path, r, l)
        }
        return ae(t.eventQueue_, e._path, o),
        bn(t.serverSyncTree_, e, n, null, !0),
        r
    }
    , i => (jt(t, "get for query " + q(e) + " failed: " + i),
    Promise.reject(new Error(i))))
}
function ph(t, e, n, s, i) {
    jt(t, "set", {
        path: e.toString(),
        value: n,
        priority: s
    });
    let r = Hn(t)
      , o = B(n, s)
      , l = bi(t.serverSyncTree_, e)
      , u = wl(o, l, r)
      , h = Di(t)
      , p = _l(t.serverSyncTree_, e, u, h, !0);
    $n(t.eventQueue_, p),
    t.server_.put(e.toString(), o.val(!0), (m, g) => {
        let C = m === "ok";
        C || te("set at " + e + " failed: " + m);
        let S = xe(t.serverSyncTree_, h, !C);
        ae(t.eventQueue_, e, S),
        Fe(t, i, m, g)
    }
    );
    let d = Li(t, e);
    ut(t, d),
    ae(t.eventQueue_, d, [])
}
function mh(t, e, n, s) {
    jt(t, "update", {
        path: e.toString(),
        value: n
    });
    let i = !0
      , r = Hn(t)
      , o = {};
    if (j(n, (l, u) => {
        i = !1,
        o[l] = vl(H(e, l), B(u), t.serverSyncTree_, r)
    }
    ),
    i)
        Y("update() called with empty data.  Don't do anything."),
        Fe(t, s, "ok", void 0);
    else {
        let l = Di(t)
          , u = $u(t.serverSyncTree_, e, o, l);
        $n(t.eventQueue_, u),
        t.server_.merge(e.toString(), n, (h, p) => {
            let d = h === "ok";
            d || te("update at " + e + " failed: " + h);
            let m = xe(t.serverSyncTree_, l, !d)
              , g = m.length > 0 ? ut(t, e) : e;
            ae(t.eventQueue_, g, m),
            Fe(t, s, h, p)
        }
        ),
        j(n, h => {
            let p = Li(t, H(e, h));
            ut(t, p)
        }
        ),
        ae(t.eventQueue_, e, [])
    }
}
function gh(t) {
    jt(t, "onDisconnectEvents");
    let e = Hn(t)
      , n = mn();
    Hs(t.onDisconnect_, A(), (i, r) => {
        let o = vl(i, r, t.serverSyncTree_, e);
        _t(n, i, o)
    }
    );
    let s = [];
    Hs(n, A(), (i, r) => {
        s = s.concat(qt(t.serverSyncTree_, i, r));
        let o = Li(t, i);
        ut(t, o)
    }
    ),
    t.onDisconnect_ = mn(),
    ae(t.eventQueue_, A(), s)
}
function yh(t, e, n) {
    t.server_.onDisconnectCancel(e.toString(), (s, i) => {
        s === "ok" && $s(t.onDisconnect_, e),
        Fe(t, n, s, i)
    }
    )
}
function So(t, e, n, s) {
    let i = B(n);
    t.server_.onDisconnectPut(e.toString(), i.val(!0), (r, o) => {
        r === "ok" && _t(t.onDisconnect_, e, i),
        Fe(t, s, r, o)
    }
    )
}
function vh(t, e, n, s, i) {
    let r = B(n, s);
    t.server_.onDisconnectPut(e.toString(), r.val(!0), (o, l) => {
        o === "ok" && _t(t.onDisconnect_, e, r),
        Fe(t, i, o, l)
    }
    )
}
function wh(t, e, n, s) {
    if (sn(n)) {
        Y("onDisconnect().update() called with empty data.  Don't do anything."),
        Fe(t, s, "ok", void 0);
        return
    }
    t.server_.onDisconnectMerge(e.toString(), n, (i, r) => {
        i === "ok" && j(n, (o, l) => {
            let u = B(l);
            _t(t.onDisconnect_, H(e, o), u)
        }
        ),
        Fe(t, s, i, r)
    }
    )
}
function Ch(t, e, n) {
    let s;
    I(e._path) === ".info" ? s = ei(t.infoSyncTree_, e, n) : s = ei(t.serverSyncTree_, e, n),
    bl(t.eventQueue_, e._path, s)
}
function Io(t, e, n) {
    let s;
    I(e._path) === ".info" ? s = bn(t.infoSyncTree_, e, n) : s = bn(t.serverSyncTree_, e, n),
    bl(t.eventQueue_, e._path, s)
}
function xl(t) {
    t.persistentConnection_ && t.persistentConnection_.interrupt(kl)
}
function Eh(t) {
    t.persistentConnection_ && t.persistentConnection_.resume(kl)
}
function jt(t, ...e) {
    let n = "";
    t.persistentConnection_ && (n = t.persistentConnection_.id + ":"),
    Y(n, ...e)
}
function Fe(t, e, n, s) {
    e && ft( () => {
        if (n === "ok")
            e(null);
        else {
            let i = (n || "error").toUpperCase()
              , r = i;
            s && (r += ": " + s);
            let o = new Error(r);
            o.code = i,
            e(o)
        }
    }
    )
}
function Pl(t, e, n) {
    return bi(t.serverSyncTree_, e, n) || T.EMPTY_NODE
}
function Oi(t, e=t.transactionQueueTree_) {
    if (e || Bn(t, e),
    mt(e)) {
        let n = Ml(t, e);
        v(n.length > 0, "Sending zero length transaction queue"),
        n.every(i => i.status === 0) && Th(t, Yt(e), n)
    } else
        El(e) && Fn(e, n => {
            Oi(t, n)
        }
        )
}
function Th(t, e, n) {
    let s = n.map(h => h.currentWriteId)
      , i = Pl(t, e, s)
      , r = i
      , o = i.hash();
    for (let h = 0; h < n.length; h++) {
        let p = n[h];
        v(p.status === 0, "tryToSendTransactionQueue_: items in queue should all be run."),
        p.status = 1,
        p.retryCount++;
        let d = ee(e, p.path);
        r = r.updateChild(d, p.currentOutputSnapshotRaw)
    }
    let l = r.val(!0)
      , u = e;
    t.server_.put(u.toString(), l, h => {
        jt(t, "transaction put response", {
            path: u.toString(),
            status: h
        });
        let p = [];
        if (h === "ok") {
            let d = [];
            for (let m = 0; m < n.length; m++)
                n[m].status = 2,
                p = p.concat(xe(t.serverSyncTree_, n[m].currentWriteId)),
                n[m].onComplete && d.push( () => n[m].onComplete(null, !0, n[m].currentOutputSnapshotResolved)),
                n[m].unwatcher();
            Bn(t, Pi(t.transactionQueueTree_, e)),
            Oi(t, t.transactionQueueTree_),
            ae(t.eventQueue_, e, p);
            for (let m = 0; m < d.length; m++)
                ft(d[m])
        } else {
            if (h === "datastale")
                for (let d = 0; d < n.length; d++)
                    n[d].status === 3 ? n[d].status = 4 : n[d].status = 0;
            else {
                te("transaction at " + u.toString() + " failed: " + h);
                for (let d = 0; d < n.length; d++)
                    n[d].status = 4,
                    n[d].abortReason = h
            }
            ut(t, e)
        }
    }
    , o)
}
function ut(t, e) {
    let n = Al(t, e)
      , s = Yt(n)
      , i = Ml(t, n);
    return Sh(t, i, s),
    s
}
function Sh(t, e, n) {
    if (e.length === 0)
        return;
    let s = []
      , i = []
      , o = e.filter(l => l.status === 0).map(l => l.currentWriteId);
    for (let l = 0; l < e.length; l++) {
        let u = e[l], h = ee(n, u.path), p = !1, d;
        if (v(h !== null, "rerunTransactionsUnderNode_: relativePath should not be null."),
        u.status === 4)
            p = !0,
            d = u.abortReason,
            i = i.concat(xe(t.serverSyncTree_, u.currentWriteId, !0));
        else if (u.status === 0)
            if (u.retryCount >= hh)
                p = !0,
                d = "maxretry",
                i = i.concat(xe(t.serverSyncTree_, u.currentWriteId, !0));
            else {
                let m = Pl(t, u.path, o);
                u.currentInputSnapshot = m;
                let g = e[l].update(m.val());
                if (g !== void 0) {
                    Un("transaction failed: Data returned ", g, u.path);
                    let C = B(g);
                    typeof g == "object" && g != null && ue(g, ".priority") || (C = C.updatePriority(m.getPriority()));
                    let O = u.currentWriteId
                      , K = Hn(t)
                      , be = wl(C, m, K);
                    u.currentOutputSnapshotRaw = C,
                    u.currentOutputSnapshotResolved = be,
                    u.currentWriteId = Di(t),
                    o.splice(o.indexOf(O), 1),
                    i = i.concat(_l(t.serverSyncTree_, u.path, be, u.currentWriteId, u.applyLocally)),
                    i = i.concat(xe(t.serverSyncTree_, O, !0))
                } else
                    p = !0,
                    d = "nodata",
                    i = i.concat(xe(t.serverSyncTree_, u.currentWriteId, !0))
            }
        ae(t.eventQueue_, n, i),
        i = [],
        p && (e[l].status = 2,
        (function(m) {
            setTimeout(m, Math.floor(0))
        }
        )(e[l].unwatcher),
        e[l].onComplete && (d === "nodata" ? s.push( () => e[l].onComplete(null, !1, e[l].currentInputSnapshot)) : s.push( () => e[l].onComplete(new Error(d), !1, null))))
    }
    Bn(t, t.transactionQueueTree_);
    for (let l = 0; l < s.length; l++)
        ft(s[l]);
    Oi(t, t.transactionQueueTree_)
}
function Al(t, e) {
    let n, s = t.transactionQueueTree_;
    for (n = I(e); n !== null && mt(s) === void 0; )
        s = Pi(s, n),
        e = W(e),
        n = I(e);
    return s
}
function Ml(t, e) {
    let n = [];
    return Dl(t, e, n),
    n.sort( (s, i) => s.order - i.order),
    n
}
function Dl(t, e, n) {
    let s = mt(e);
    if (s)
        for (let i = 0; i < s.length; i++)
            n.push(s[i]);
    Fn(e, i => {
        Dl(t, i, n)
    }
    )
}
function Bn(t, e) {
    let n = mt(e);
    if (n) {
        let s = 0;
        for (let i = 0; i < n.length; i++)
            n[i].status !== 2 && (n[s] = n[i],
            s++);
        n.length = s,
        Cl(e, n.length > 0 ? n : void 0)
    }
    Fn(e, s => {
        Bn(t, s)
    }
    )
}
function Li(t, e) {
    let n = Yt(Al(t, e))
      , s = Pi(t.transactionQueueTree_, e);
    return eh(s, i => {
        ps(t, i)
    }
    ),
    ps(t, s),
    Tl(s, i => {
        ps(t, i)
    }
    ),
    n
}
function ps(t, e) {
    let n = mt(e);
    if (n) {
        let s = []
          , i = []
          , r = -1;
        for (let o = 0; o < n.length; o++)
            n[o].status === 3 || (n[o].status === 1 ? (v(r === o - 1, "All SENT items should be at beginning of queue."),
            r = o,
            n[o].status = 3,
            n[o].abortReason = "set") : (v(n[o].status === 0, "Unexpected transaction status in abort"),
            n[o].unwatcher(),
            i = i.concat(xe(t.serverSyncTree_, n[o].currentWriteId, !0)),
            n[o].onComplete && s.push(n[o].onComplete.bind(null, new Error("set"), !1, null))));
        r === -1 ? Cl(e, void 0) : n.length = r + 1,
        ae(t.eventQueue_, Yt(e), i);
        for (let o = 0; o < s.length; o++)
            ft(s[o])
    }
}
function Ih(t) {
    let e = ""
      , n = t.split("/");
    for (let s = 0; s < n.length; s++)
        if (n[s].length > 0) {
            let i = n[s];
            try {
                i = decodeURIComponent(i.replace(/\+/g, " "))
            } catch {}
            e += "/" + i
        }
    return e
}
function bh(t) {
    let e = {};
    t.charAt(0) === "?" && (t = t.substring(1));
    for (let n of t.split("&")) {
        if (n.length === 0)
            continue;
        let s = n.split("=");
        s.length === 2 ? e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]) : te(`Invalid query segment '${n}' in query '${t}'`)
    }
    return e
}
var bo = function(t, e) {
    let n = Nh(t)
      , s = n.namespace;
    n.domain === "firebase.com" && Se(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),
    (!s || s === "undefined") && n.domain !== "localhost" && Se("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),
    n.secure || ec();
    let i = n.scheme === "ws" || n.scheme === "wss";
    return {
        repoInfo: new ln(n.host,n.secure,s,i,e,"",s !== n.subdomain),
        path: new M(n.pathString)
    }
}
  , Nh = function(t) {
    let e = ""
      , n = ""
      , s = ""
      , i = ""
      , r = ""
      , o = !0
      , l = "https"
      , u = 443;
    if (typeof t == "string") {
        let h = t.indexOf("//");
        h >= 0 && (l = t.substring(0, h - 1),
        t = t.substring(h + 2));
        let p = t.indexOf("/");
        p === -1 && (p = t.length);
        let d = t.indexOf("?");
        d === -1 && (d = t.length),
        e = t.substring(0, Math.min(p, d)),
        p < d && (i = Ih(t.substring(p, d)));
        let m = bh(t.substring(Math.min(t.length, d)));
        h = e.indexOf(":"),
        h >= 0 ? (o = l === "https" || l === "wss",
        u = parseInt(e.substring(h + 1), 10)) : h = e.length;
        let g = e.slice(0, h);
        if (g.toLowerCase() === "localhost")
            n = "localhost";
        else if (g.split(".").length <= 2)
            n = g;
        else {
            let C = e.indexOf(".");
            s = e.substring(0, C).toLowerCase(),
            n = e.substring(C + 1),
            r = s
        }
        "ns" in m && (r = m.ns)
    }
    return {
        host: e,
        port: u,
        domain: n,
        subdomain: s,
        secure: o,
        scheme: l,
        pathString: i,
        namespace: r
    }
};
var No = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"
  , kh = (function() {
    let t = 0
      , e = [];
    return function(n) {
        let s = n === t;
        t = n;
        let i, r = new Array(8);
        for (i = 7; i >= 0; i--)
            r[i] = No.charAt(n % 64),
            n = Math.floor(n / 64);
        v(n === 0, "Cannot push at time == 0");
        let o = r.join("");
        if (s) {
            for (i = 11; i >= 0 && e[i] === 63; i--)
                e[i] = 0;
            e[i]++
        } else
            for (i = 0; i < 12; i++)
                e[i] = Math.floor(Math.random() * 64);
        for (i = 0; i < 12; i++)
            o += No.charAt(e[i]);
        return v(o.length === 20, "nextPushId: Length should be 20."),
        o
    }
}
)();
var kn = class {
    constructor(e, n, s, i) {
        this.eventType = e,
        this.eventRegistration = n,
        this.snapshot = s,
        this.prevName = i
    }
    getPath() {
        let e = this.snapshot.ref;
        return this.eventType === "value" ? e._path : e.parent._path
    }
    getEventType() {
        return this.eventType
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this)
    }
    toString() {
        return this.getPath().toString() + ":" + this.eventType + ":" + q(this.snapshot.exportVal())
    }
}
  , Rn = class {
    constructor(e, n, s) {
        this.eventRegistration = e,
        this.error = n,
        this.path = s
    }
    getPath() {
        return this.path
    }
    getEventType() {
        return "cancel"
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this)
    }
    toString() {
        return this.path.toString() + ":cancel"
    }
}
;
var xn = class {
    constructor(e, n) {
        this.snapshotCallback = e,
        this.cancelCallback = n
    }
    onValue(e, n) {
        this.snapshotCallback.call(null, e, n)
    }
    onCancel(e) {
        return v(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"),
        this.cancelCallback.call(null, e)
    }
    get hasCancelCallback() {
        return !!this.cancelCallback
    }
    matches(e) {
        return this.snapshotCallback === e.snapshotCallback || this.snapshotCallback.userCallback !== void 0 && this.snapshotCallback.userCallback === e.snapshotCallback.userCallback && this.snapshotCallback.context === e.snapshotCallback.context
    }
}
;
var oi = class {
    constructor(e, n) {
        this._repo = e,
        this._path = n
    }
    cancel() {
        let e = new ge;
        return yh(this._repo, this._path, e.wrapCallback( () => {}
        )),
        e.promise
    }
    remove() {
        Ge("OnDisconnect.remove", this._path);
        let e = new ge;
        return So(this._repo, this._path, null, e.wrapCallback( () => {}
        )),
        e.promise
    }
    set(e) {
        Ge("OnDisconnect.set", this._path),
        Ht("OnDisconnect.set", e, this._path, !1);
        let n = new ge;
        return So(this._repo, this._path, e, n.wrapCallback( () => {}
        )),
        n.promise
    }
    setWithPriority(e, n) {
        Ge("OnDisconnect.setWithPriority", this._path),
        Ht("OnDisconnect.setWithPriority", e, this._path, !1),
        oh("OnDisconnect.setWithPriority", n);
        let s = new ge;
        return vh(this._repo, this._path, e, n, s.wrapCallback( () => {}
        )),
        s.promise
    }
    update(e) {
        Ge("OnDisconnect.update", this._path),
        Il("OnDisconnect.update", e, this._path);
        let n = new ge;
        return wh(this._repo, this._path, e, n.wrapCallback( () => {}
        )),
        n.promise
    }
}
;
var Qe = class t {
    constructor(e, n, s, i) {
        this._repo = e,
        this._path = n,
        this._queryParams = s,
        this._orderByCalled = i
    }
    get key() {
        return b(this._path) ? null : gi(this._path)
    }
    get ref() {
        return new we(this._repo,this._path)
    }
    get _queryIdentifier() {
        let e = uo(this._queryParams)
          , n = pi(e);
        return n === "{}" ? "default" : n
    }
    get _queryObject() {
        return uo(this._queryParams)
    }
    isEqual(e) {
        if (e = re(e),
        !(e instanceof t))
            return !1;
        let n = this._repo === e._repo
          , s = yi(this._path, e._path)
          , i = this._queryIdentifier === e._queryIdentifier;
        return n && s && i
    }
    toJSON() {
        return this.toString()
    }
    toString() {
        return this._repo.toString() + Ac(this._path)
    }
}
;
function Rh(t, e) {
    if (t._orderByCalled === !0)
        throw new Error(e + ": You can't combine multiple orderBy calls.")
}
function Ol(t) {
    let e = null
      , n = null;
    if (t.hasStart() && (e = t.getIndexStartValue()),
    t.hasEnd() && (n = t.getIndexEndValue()),
    t.getIndex() === qe) {
        let s = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo()."
          , i = "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
        if (t.hasStart()) {
            if (t.getIndexStartName() !== Ye)
                throw new Error(s);
            if (typeof e != "string")
                throw new Error(i)
        }
        if (t.hasEnd()) {
            if (t.getIndexEndName() !== De)
                throw new Error(s);
            if (typeof n != "string")
                throw new Error(i)
        }
    } else if (t.getIndex() === U) {
        if (e != null && !Nn(e) || n != null && !Nn(n))
            throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")
    } else if (v(t.getIndex() instanceof Mt || t.getIndex() === Zo, "unknown index type."),
    e != null && typeof e == "object" || n != null && typeof n == "object")
        throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")
}
function xh(t) {
    if (t.hasStart() && t.hasEnd() && t.hasLimit() && !t.hasAnchoredLimit())
        throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")
}
var we = class t extends Qe {
    constructor(e, n) {
        super(e, n, new Fs, !1)
    }
    get parent() {
        let e = Yo(this._path);
        return e === null ? null : new t(this._repo,e)
    }
    get root() {
        let e = this;
        for (; e.parent !== null; )
            e = e.parent;
        return e
    }
}
  , Bt = class t {
    constructor(e, n, s) {
        this._node = e,
        this.ref = n,
        this._index = s
    }
    get priority() {
        return this._node.getPriority().val()
    }
    get key() {
        return this.ref.key
    }
    get size() {
        return this._node.numChildren()
    }
    child(e) {
        let n = new M(e)
          , s = ht(this.ref, e);
        return new t(this._node.getChild(n),s,U)
    }
    exists() {
        return !this._node.isEmpty()
    }
    exportVal() {
        return this._node.val(!0)
    }
    forEach(e) {
        return this._node.isLeafNode() ? !1 : !!this._node.forEachChild(this._index, (s, i) => e(new t(i,ht(this.ref, s),U)))
    }
    hasChild(e) {
        let n = new M(e);
        return !this._node.getChild(n).isEmpty()
    }
    hasChildren() {
        return this._node.isLeafNode() ? !1 : !this._node.isEmpty()
    }
    toJSON() {
        return this.exportVal()
    }
    val() {
        return this._node.val()
    }
}
;
function E(t, e) {
    return t = re(t),
    t._checkNotDeleted("ref"),
    e !== void 0 ? ht(t._root, e) : t._root
}
function ht(t, e) {
    return t = re(t),
    I(t._path) === null ? ah("child", "path", e, !1) : Ai("child", "path", e, !1),
    new we(t._repo,H(t._path, e))
}
function se(t) {
    return t = re(t),
    new oi(t._repo,t._path)
}
function gt(t, e) {
    t = re(t),
    Ge("push", t._path),
    Ht("push", e, t._path, !0);
    let n = Rl(t._repo), s = kh(n), i = ht(t, s), r = ht(t, s), o;
    return e != null ? o = V(r, e).then( () => r) : o = Promise.resolve(r),
    i.then = o.then.bind(o),
    i.catch = o.then.bind(o, void 0),
    i
}
function ce(t) {
    return Ge("remove", t._path),
    V(t, null)
}
function V(t, e) {
    t = re(t),
    Ge("set", t._path),
    Ht("set", e, t._path, !1);
    let n = new ge;
    return ph(t._repo, t._path, e, null, n.wrapCallback( () => {}
    )),
    n.promise
}
function Kt(t, e) {
    Il("update", e, t._path);
    let n = new ge;
    return mh(t._repo, t._path, e, n.wrapCallback( () => {}
    )),
    n.promise
}
function Qt(t) {
    t = re(t);
    let e = new xn( () => {}
    )
      , n = new Pn(e);
    return _h(t._repo, t, n).then(s => new Bt(s,new we(t._repo,t._path),t._queryParams.getIndex()))
}
var Pn = class t {
    constructor(e) {
        this.callbackContext = e
    }
    respondsTo(e) {
        return e === "value"
    }
    createEvent(e, n) {
        let s = n._queryParams.getIndex();
        return new kn("value",this,new Bt(e.snapshotNode,new we(n._repo,n._path),s))
    }
    getEventRunner(e) {
        return e.getEventType() === "cancel" ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null)
    }
    createCancelEvent(e, n) {
        return this.callbackContext.hasCancelCallback ? new Rn(this,e,n) : null
    }
    matches(e) {
        return e instanceof t ? !e.callbackContext || !this.callbackContext ? !0 : e.callbackContext.matches(this.callbackContext) : !1
    }
    hasAnyCallback() {
        return this.callbackContext !== null
    }
}
  , li = class t {
    constructor(e, n) {
        this.eventType = e,
        this.callbackContext = n
    }
    respondsTo(e) {
        let n = e === "children_added" ? "child_added" : e;
        return n = n === "children_removed" ? "child_removed" : n,
        this.eventType === n
    }
    createCancelEvent(e, n) {
        return this.callbackContext.hasCancelCallback ? new Rn(this,e,n) : null
    }
    createEvent(e, n) {
        v(e.childName != null, "Child events should have a childName.");
        let s = ht(new we(n._repo,n._path), e.childName)
          , i = n._queryParams.getIndex();
        return new kn(e.type,this,new Bt(e.snapshotNode,s,i),e.prevName)
    }
    getEventRunner(e) {
        return e.getEventType() === "cancel" ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, e.prevName)
    }
    matches(e) {
        return e instanceof t ? this.eventType === e.eventType && (!this.callbackContext || !e.callbackContext || this.callbackContext.matches(e.callbackContext)) : !1
    }
    hasAnyCallback() {
        return !!this.callbackContext
    }
}
;
function Vn(t, e, n, s, i) {
    let r;
    if (typeof s == "object" && (r = void 0,
    i = s),
    typeof s == "function" && (r = s),
    i && i.onlyOnce) {
        let u = n
          , h = (p, d) => {
            Io(t._repo, t, l),
            u(p, d)
        }
        ;
        h.userCallback = n.userCallback,
        h.context = n.context,
        n = h
    }
    let o = new xn(n,r || void 0)
      , l = e === "value" ? new Pn(o) : new li(e,o);
    return Ch(t._repo, t, l),
    () => Io(t._repo, t, l)
}
function fe(t, e, n, s) {
    return Vn(t, "value", e, n, s)
}
function Ze(t, e, n, s) {
    return Vn(t, "child_added", e, n, s)
}
function Fi(t, e, n, s) {
    return Vn(t, "child_changed", e, n, s)
}
function Gn(t, e, n, s) {
    return Vn(t, "child_removed", e, n, s)
}
var dt = class {
}
  , ai = class extends dt {
    constructor(e, n) {
        super(),
        this._value = e,
        this._key = n,
        this.type = "endAt"
    }
    _apply(e) {
        Ht("endAt", this._value, e._path, !0);
        let n = Qc(e._queryParams, this._value, this._key);
        if (xh(n),
        Ol(n),
        e._queryParams.hasEnd())
            throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");
        return new Qe(e._repo,e._path,n,e._orderByCalled)
    }
}
;
function Ll(t, e) {
    return lh("endAt", "key", e),
    new ai(t,e)
}
var ci = class extends dt {
    constructor(e) {
        super(),
        this._limit = e,
        this.type = "limitToFirst"
    }
    _apply(e) {
        if (e._queryParams.hasLimit())
            throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");
        return new Qe(e._repo,e._path,jc(e._queryParams, this._limit),e._orderByCalled)
    }
}
;
function Fl(t) {
    if (typeof t != "number" || Math.floor(t) !== t || t <= 0)
        throw new Error("limitToFirst: First argument must be a positive integer.");
    return new ci(t)
}
var ui = class extends dt {
    constructor(e) {
        super(),
        this._limit = e,
        this.type = "limitToLast"
    }
    _apply(e) {
        if (e._queryParams.hasLimit())
            throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");
        return new Qe(e._repo,e._path,Kc(e._queryParams, this._limit),e._orderByCalled)
    }
}
;
function Xt(t) {
    if (typeof t != "number" || Math.floor(t) !== t || t <= 0)
        throw new Error("limitToLast: First argument must be a positive integer.");
    return new ui(t)
}
var hi = class extends dt {
    constructor(e) {
        super(),
        this._path = e,
        this.type = "orderByChild"
    }
    _apply(e) {
        Rh(e, "orderByChild");
        let n = new M(this._path);
        if (b(n))
            throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");
        let s = new Mt(n)
          , i = Xc(e._queryParams, s);
        return Ol(i),
        new Qe(e._repo,e._path,i,!0)
    }
}
;
function Wl(t) {
    if (t === "$key")
        throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');
    if (t === "$priority")
        throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');
    if (t === "$value")
        throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');
    return Ai("orderByChild", "path", t, !1),
    new hi(t)
}
function yt(t, ...e) {
    let n = re(t);
    for (let s of e)
        n = s._apply(n);
    return n
}
Au(we);
Fu(we);
var Ph = "FIREBASE_DATABASE_EMULATOR_HOST"
  , di = {}
  , Ah = !1;
function Mh(t, e, n, s) {
    let i = e.lastIndexOf(":")
      , r = e.substring(0, i)
      , o = is(r);
    t.repoInfo_ = new ln(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),
    s && (t.authTokenProvider_ = s)
}
function Dh(t, e, n, s, i) {
    let r = s || t.options.databaseURL;
    r === void 0 && (t.options.projectId || Se("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),
    Y("Using default host for project ", t.options.projectId),
    r = `${t.options.projectId}-default-rtdb.firebaseio.com`);
    let o = bo(r, i), l = o.repoInfo, u, h;
    typeof process < "u" && process.env && (h = process.env[Ph]),
    h ? (u = !0,
    r = `http://${h}?ns=${l.namespace}`,
    o = bo(r, i),
    l = o.repoInfo) : u = !o.repoInfo.secure;
    let p = i && u ? new Pe(Pe.OWNER) : new Cs(t.name,t.options,e);
    ch("Invalid Firebase Database URL", o),
    b(o.path) || Se("Database URL must point to the root of a Firebase Database (not including a child path).");
    let d = Lh(l, t, p, new ws(t,n));
    return new fi(d,t)
}
function Oh(t, e) {
    let n = di[e];
    (!n || n[t.key] !== t) && Se(`Database ${e}(${t.repoInfo_}) has already been deleted.`),
    xl(t),
    delete n[t.key]
}
function Lh(t, e, n, s) {
    let i = di[e.name];
    i || (i = {},
    di[e.name] = i);
    let r = i[t.toURLString()];
    return r && Se("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),
    r = new ri(t,Ah,n,s),
    i[t.toURLString()] = r,
    r
}
var fi = class {
    constructor(e, n) {
        this._repoInternal = e,
        this.app = n,
        this.type = "database",
        this._instanceStarted = !1
    }
    get _repo() {
        return this._instanceStarted || (dh(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride),
        this._instanceStarted = !0),
        this._repoInternal
    }
    get _root() {
        return this._rootInternal || (this._rootInternal = new we(this._repo,A())),
        this._rootInternal
    }
    _delete() {
        return this._rootInternal !== null && (Oh(this._repo, this.app.name),
        this._repoInternal = null,
        this._rootInternal = null),
        Promise.resolve()
    }
    _checkNotDeleted(e) {
        this._rootInternal === null && Se("Cannot call " + e + " on a deleted database.")
    }
}
;
function Ul(t=Fr(), e) {
    let n = Dr(t, "database").getImmediate({
        identifier: e
    });
    if (!n._instanceStarted) {
        let s = wr("database");
        s && Fh(n, ...s)
    }
    return n
}
function Fh(t, e, n, s={}) {
    t = re(t),
    t._checkNotDeleted("useEmulator");
    let i = `${e}:${n}`
      , r = t._repoInternal;
    if (t._instanceStarted) {
        if (i === t._repoInternal.repoInfo_.host && Ir(s, r.repoInfo_.emulatorOptions))
            return;
        Se("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")
    }
    let o;
    if (r.repoInfo_.nodeAdmin)
        s.mockUserToken && Se('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),
        o = new Pe(Pe.OWNER);
    else if (s.mockUserToken) {
        let l = typeof s.mockUserToken == "string" ? s.mockUserToken : Cr(s.mockUserToken, t.app.options.projectId);
        o = new Pe(l)
    }
    is(e) && Rr(e),
    Mh(r, i, s, o)
}
function $l(t) {
    t = re(t),
    t._checkNotDeleted("goOffline"),
    xl(t._repo)
}
function Hl(t) {
    t = re(t),
    t._checkNotDeleted("goOnline"),
    Eh(t._repo)
}
function Wh(t) {
    Xa(Lr),
    Mr(new xr("database", (e, {instanceIdentifier: n}) => {
        let s = e.getProvider("app").getImmediate()
          , i = e.getProvider("auth-internal")
          , r = e.getProvider("app-check-internal");
        return Dh(s, i, r, n)
    }
    ,"PUBLIC").setMultipleInstances(!0)),
    rs(Yr, jr, t),
    rs(Yr, jr, "esm2020")
}
var Uh = {
    ".sv": "timestamp"
};
function $() {
    return Uh
}
je.prototype.simpleListen = function(t, e) {
    this.sendRequest("q", {
        p: t
    }, e)
}
;
je.prototype.echo = function(t, e) {
    this.sendRequest("echo", {
        d: t
    }, e)
}
;
Wh();
var zn = 200
  , $h = 30
  , Hh = t => t >= 30 ? 1500 : t >= 12 ? 1100 : 700
  , Bl = 40
  , Bh = (t, e) => `s${Math.floor(t / zn)}_${Math.floor(e / zn)}`
  , Vh = (t, e) => {
    let n = Math.floor(t / zn)
      , s = Math.floor(e / zn)
      , i = [];
    for (let r = -1; r <= 1; r++)
        for (let o = -1; o <= 1; o++)
            i.push(`s${n + r}_${s + o}`);
    return i
}
  , Gh = ["fuck", "shit", "bitch", "cunt", "dick", "pussy", "nigger", "nigga", "whore", "slut", "bastard", "asshole", "motherfucker", "mumu", "ode", "olodo", "ashawo", "werey", "ewu", "oloshi", "dindin", "your papa", "your mama", "ur papa", "ur mama", "yeye"]
  , zh = new RegExp("\\b(" + Gh.map(t => t.replace(/ /g, "\\s+")).join("|") + ")\\b","gi")
  , We = t => t.replace(zh, e => e[0] + "*".repeat(Math.max(1, e.length - 1)))
  , Wi = (t, e) => {
    let n = Ui.titleOf?.(t);
    if (n)
        return n;
    let s = Ui.crewOf?.(t);
    return "@" + e + (s ? ` \xB7 ${s}` : "")
}
  , Vl = (t, e) => {
    let n = $i(t, {
        size: 34,
        bg: "rgba(255,248,236,.92)",
        fg: "#0f3d2e"
    });
    return n.scale.multiplyScalar(e),
    n.userData.base = n.scale.clone(),
    n
}
  , Ui = {};
function $i(t, {bg: e="rgba(15,61,46,.9)", fg: n="#fff8ec", size: s=40, max: i=360, bubble: r=!1}={}) {
    let o = document.createElement("canvas")
      , l = o.getContext("2d");
    l.font = `700 ${s}px DM Sans, sans-serif`;
    let u = t.split(/\s+/)
      , h = []
      , p = "";
    for (let O of u) {
        let K = p ? p + " " + O : O;
        l.measureText(K).width > i && p ? (h.push(p),
        p = O) : p = K
    }
    p && h.push(p);
    let d = Math.min(i, Math.max(...h.map(O => l.measureText(O).width))) + 36
      , m = s * 1.25
      , g = h.length * m + 22 + (r ? 14 : 0);
    o.width = Math.ceil(d),
    o.height = Math.ceil(g),
    l.font = `700 ${s}px DM Sans, sans-serif`,
    l.fillStyle = e,
    l.beginPath(),
    l.roundRect(0, 0, d, g - (r ? 14 : 0), 22),
    l.fill(),
    r && (l.beginPath(),
    l.moveTo(d / 2 - 12, g - 15),
    l.lineTo(d / 2, g),
    l.lineTo(d / 2 + 12, g - 15),
    l.fill()),
    l.fillStyle = n,
    l.textAlign = "center",
    l.textBaseline = "middle",
    h.forEach( (O, K) => l.fillText(O, d / 2, 11 + m * (K + .5)));
    let C = new pr(o);
    C.colorSpace = dr;
    let S = new _r(new fr({
        map: C,
        depthTest: !1,
        transparent: !0
    }));
    return S.scale.set(d / 100, g / 100, 1),
    S.renderOrder = 20,
    S.userData.base = S.scale.clone(),
    S.center.set(.5, 0),
    S
}
function ad(t) {
    Ui = t;
    let e = matchMedia("(pointer: coarse)").matches || innerWidth < 700
      , n = e ? .48 : .65
      , s = e ? 2.2 : 3.5
      , i = e ? 14 : 8
      , r = 2.1
      , o = a => (a.tag ? a.tag.position.y + a.tag.scale.y : r) + .08
      , {app: l, db: u, scene: h, fuse: p, getMe: d, myPos: m} = t
      , g = Ul(l, "https://abujalife-4f57f-default-rtdb.europe-west1.firebasedatabase.app")
      , C = new Map
      , S = new Map
      , O = new Set(JSON.parse(( () => {
        try {
            return localStorage.getItem("al-muted") || "[]"
        } catch {
            return "[]"
        }
    }
    )()))
      , K = new Map
      , be = 0
      , et = 0
      , Ne = -1e9
      , Jt = null
      , vt = 0
      , qn = NaN
      , Hi = NaN
      , Bi = NaN
      , Vi = null
      , Yn = null
      , Ce = null
      , _e = null
      , Gi = !1
      , F = []
      , zi = "al-profiles"
      , Gl = 1440 * 60 * 1e3
      , Ee = {};
    try {
        Ee = JSON.parse(localStorage.getItem(zi) || "{}")
    } catch {}
    let qi = 0
      , Yi = () => {
        clearTimeout(qi),
        qi = setTimeout( () => {
            let a = Object.keys(Ee);
            a.length > 700 && a.sort( (c, _) => Ee[c].t - Ee[_].t).slice(0, a.length - 700).forEach(c => delete Ee[c]);
            try {
                localStorage.setItem(zi, JSON.stringify(Ee))
            } catch {}
        }
        , 2e3)
    }
      , Ue = a => {
        if (!S.has(a)) {
            let c = Ee[a];
            c && Date.now() - c.t < Gl ? S.set(a, Promise.resolve(c.d)) : S.set(a, $r(os(u, "public", a)).then(_ => {
                let y = _.exists() ? _.data() : null;
                return y && (Ee[a] = {
                    d: y,
                    t: Date.now()
                },
                Yi()),
                y
            }
            ).catch( () => null))
        }
        return S.get(a)
    }
    ;
    async function zl() {
        let a = d();
        if (a)
            try {
                await Hr(os(u, "public", a.uid), {
                    username: a.player.username,
                    look: a.player.look
                }),
                S.delete(a.uid),
                delete Ee[a.uid],
                Yi()
            } catch (c) {
                console.warn("profile", c.code || c)
            }
    }
    function ji(a, c, _) {
        if (C.has(a) || !c || Date.now() + ke - (c.t || 0) > 120 * 1e3)
            return;
        let y = {
            group: null,
            ch: null,
            tag: null,
            bubble: null,
            target: new me(c.x,0,c.z),
            h: c.h,
            w: c.w,
            c: c.c || null,
            zone: _,
            last: Date.now(),
            pending: !0
        };
        C.set(a, y),
        Ue(a).then(f => {
            if (!f || !C.has(a) || C.get(a) !== y) {
                C.delete(a);
                return
            }
            y.ch = ls(f.look),
            p(y.ch.group),
            y.group = y.ch.group,
            y.group.scale.setScalar(1.15),
            y.group.position.copy(y.target),
            y.group.rotation.y = y.h,
            y.group.userData.uid = a,
            y.group.traverse(w => {
                w.isMesh && (w.castShadow = !t.lowGfx,
                w.userData.uid = a)
            }
            ),
            y.username = f.username,
            y.tagText = Wi(a, f.username),
            y.tag = Vl(y.tagText, n),
            y.group.add(y.tag),
            y.tag.position.y = r,
            y.tag.userData.uid = a,
            y.pending = !1,
            h.add(y.group)
        }
        )
    }
    function ql(a, c) {
        let _ = C.get(a);
        if (!_)
            return;
        let y = performance.now();
        _.from = (_.from || new me).copy(_.group ? _.group.position : _.target),
        _.from.y = 0,
        _.dur = Math.min(2e3, Math.max(250, y - (_.at || y - 700))),
        _.at = y,
        _.target.set(c.x, 0, c.z),
        _.h = c.h,
        _.w = c.w,
        _.c = c.c || null,
        _.last = Date.now()
    }
    function Yl(a, c) {
        if (a.c === (a.carKey ?? null))
            return;
        a.car && (h.remove(a.car),
        a.car = null),
        a.carKey = a.c;
        let[_,y,f] = String(a.c || "").split("|");
        a.c && (_ === "taxi" || _ === "keke-ride" || Vr[_] && /^#[0-9a-f]{6}$/i.test(y)) && (a.car = p(_ === "taxi" ? qr() : _ === "keke-ride" ? as("keke") : as(_, y)),
        f === "v" && a.car.add(p(Gr())),
        a.car.traverse(w => {
            w.isMesh && (w.userData.uid = c)
        }
        ),
        h.add(a.car));
        for (let w of a.group.children)
            w.isSprite || (w.visible = !a.car);
        a.tag && (a.tag.position.y = a.car ? 2.6 : r)
    }
    function Ki(a, c) {
        let _ = C.get(a);
        !_ || c && _.zone !== c || (_.group && h.remove(_.group),
        _.car && h.remove(_.car),
        C.delete(a))
    }
    function jn(a, c) {
        let _ = a === d()?.uid ? {
            group: t.myGroup(),
            self: !0
        } : R && J.get(a) || C.get(a);
        if (!_ || !_.group)
            return;
        let y = _.self ? Ce : _.bubble;
        y && y.parent?.remove(y);
        let f = $i(c, {
            bubble: !0,
            size: 36,
            bg: "rgba(255,255,255,.96)",
            fg: "#10231b",
            max: 420
        });
        f.scale.multiplyScalar(.6),
        f.userData.base = f.scale.clone(),
        f.position.y = o(_),
        f.userData.until = performance.now() + 7e3,
        _.group.add(f),
        _.self ? Ce = f : _.bubble = f
    }
    function jl(a) {
        let c = E(g, `presence/${a}`)
          , _ = () => d()?.uid
          , y = Ze(c, N => {
            N.key !== _() && ji(N.key, N.val(), a)
        }
        )
          , f = Fi(c, N => {
            N.key !== _() && (C.has(N.key) ? (C.get(N.key).zone = a,
            ql(N.key, N.val())) : ji(N.key, N.val(), a))
        }
        )
          , w = Gn(c, N => Ki(N.key, a));
        K.set(a, [y, f, w]),
        tr(`presence/${a}`, 300 * 1e3)
    }
    let X = null
      , Zt = null;
    function Kl(a) {
        if (!a || a.id === X?.id)
            return;
        Zt?.(),
        X = a,
        F.length = 0,
        t.onChat?.(F, X);
        let c = Date.now() + ke - 3e3
          , _ = `chat/${X.id}`
          , y = X;
        Zt = Ze(yt(E(g, _), Xt(25)), f => {
            if (X !== y)
                return;
            let w = f.val();
            if (!w || typeof w.m != "string" || O.has(w.u))
                return;
            let N = w.t >= c
              , z = w.u === d()?.uid;
            if (N && z)
                return;
            let Q = We(w.m.slice(0, 140))
              , G = {
                name: "\u2026",
                text: Q,
                uid: w.u,
                old: !N
            };
            for (F.push(G); F.length > 30; )
                F.shift();
            N && Math.hypot(w.x - m.x, w.z - m.z) < $h * 2 && jn(w.u, Q),
            Ue(w.u).then(L => {
                G.name = L?.username || "player",
                X === y && t.onChat?.(F, X)
            }
            )
        }
        ),
        t.onRoom?.(X)
    }
    let Kn = 0;
    function Ql() {
        if (R)
            return;
        let a = performance.now();
        if (a - Kn < 1e3)
            return;
        Kn = a;
        let c = t.chatRoom?.(m);
        c && Kl(c)
    }
    let R = null
      , J = new Map
      , en = new Set;
    function Qi(a, c) {
        let _ = d();
        return Promise.all([V(E(g, `houseAllow/${_.uid}/${a}`), $()), V(E(g, `invites/${a}/${_.uid}`), {
            t: $(),
            n: _.player.username,
            h: c
        })])
    }
    function Xl(a) {
        return fe(E(g, `invites/${d().uid}`), c => a(Object.entries(c.val() || {}).map( ([_,y]) => ({
            host: _,
            t: y.t,
            name: y.n,
            home: y.h
        }))), () => {}
        )
    }
    let Jl = (a, c) => Qi(a, "s:" + c)
      , Zl = (a, c) => V(E(g, `invites/${a}/${d().uid}`), {
        t: $(),
        n: d().player.username,
        h: c ? "y" : "n"
    }).catch( () => {}
    )
      , ea = (a, c) => V(E(g, `invites/${a}/${d().uid}`), {
        t: $(),
        n: d().player.username,
        h: c.slice(0, 20)
    }).catch( () => {}
    )
      , ta = a => [...C.entries()].filter( ([,c]) => c.group?.visible && c.target && c.target.distanceTo(m) < a).map( ([c,_]) => ({
        uid: c,
        username: _.username,
        x: _.target.x,
        z: _.target.z
    }))
      , na = a => ce(E(g, `invites/${d().uid}/${a}`)).catch( () => {}
    )
      , sa = a => ce(E(g, `invites/${d().uid}/${a}`)).catch( () => {}
    );
    function ia(a, c) {
        Xi(),
        en.clear(),
        Zt?.(),
        Zt = null,
        X = null;
        let _ = d().uid
          , y = E(g, `house/${a}/p/${_}`)
          , f = Date.now() + ke - 3e3;
        se(y).remove(),
        R = {
            host: a,
            pRef: y,
            scene: c,
            last: 0,
            lx: NaN,
            lz: NaN
        },
        F.length = 0,
        t.onChat?.(F);
        let w = E(g, `house/${a}/p`)
          , N = (D, x) => {
            if (D === _ || J.has(D) || en.has(D))
                return;
            let P = {
                group: null,
                target: new me(x.x,0,x.z),
                h: x.h,
                w: x.w,
                t: x.t
            };
            J.set(D, P),
            Ue(D).then(ie => {
                !ie || J.get(D) !== P || !R || (P.ch = ls(ie.look),
                p(P.ch.group),
                P.group = P.ch.group,
                P.group.scale.setScalar(1.15),
                P.group.position.copy(P.target),
                P.group.traverse(pe => {
                    pe.isMesh && (pe.castShadow = !0)
                }
                ),
                P.tag = $i(Wi(D, ie.username), {
                    size: 34,
                    bg: "rgba(255,248,236,.92)",
                    fg: "#0f3d2e"
                }),
                P.tag.scale.multiplyScalar(.46),
                P.tag.userData.base = P.tag.scale.clone(),
                P.group.add(P.tag),
                P.tag.position.y = r,
                R.scene.add(P.group))
            }
            )
        }
          , z = Ze(w, D => N(D.key, D.val()))
          , Q = Fi(w, D => {
            if (en.has(D.key))
                return;
            let x = J.get(D.key);
            if (!x)
                return N(D.key, D.val());
            let P = D.val();
            x.target.set(P.x, 0, P.z),
            x.h = P.h,
            x.w = P.w,
            x.t = P.t
        }
        )
          , G = Gn(w, D => {
            let x = J.get(D.key);
            x?.group && x.group.parent?.remove(x.group),
            J.delete(D.key)
        }
        )
          , L = Ze(yt(E(g, `house/${a}/chat`), Xt(25)), D => {
            let x = D.val();
            if (!x || typeof x.m != "string" || !R || R.host !== a)
                return;
            let P = x.t >= f;
            if (P && x.u === _)
                return;
            if (x.m.startsWith("::")) {
                P && t.onHouseCmd?.(x.u, x.m);
                return
            }
            let ie = We(x.m.slice(0, 140))
              , pe = {
                name: "\u2026",
                text: ie,
                uid: x.u,
                old: !P
            };
            for (F.push(pe); F.length > 30; )
                F.shift();
            P && jn(x.u, ie),
            Ue(x.u).then($e => {
                pe.name = $e?.username || "player",
                t.onChat?.(F)
            }
            )
        }
        );
        R.unsubs = [z, Q, G, L],
        tr(`house/${a}/chat`, 3600 * 1e3),
        Ji(!0)
    }
    let ra = (a, c) => V(E(g, `house/${d().uid}/meta`), {
        l: a,
        f: c.join(",").slice(0, 400)
    }).catch(_ => console.warn("house meta", _.code || _))
      , oa = async a => {
        try {
            let c = (await Qt(E(g, `house/${a}/meta`))).val();
            return c ? {
                level: c.l || 1,
                items: String(c.f || "").split(",").filter(Boolean)
            } : null
        } catch {
            return null
        }
    }
      , la = a => {
        let c = J.get(a);
        return !!c && !(c.t && Date.now() + ke - c.t > 45e3)
    }
      , aa = () => [...J.keys()]
      , ca = async a => {
        try {
            return Date.now() + ke - (+(await Qt(E(g, `houseAllow/${a}/${d().uid}`))).val() || 0) < 7200 * 1e3
        } catch {
            return !1
        }
    }
      , ua = a => V(E(g, `visits/${a}/${d().uid}`), {
        t: $(),
        n: d().player.username
    }).catch( () => {}
    )
      , ha = a => fe(E(g, `visits/${d().uid}`), c => a(Object.entries(c.val() || {}).map( ([_,y]) => ({
        uid: _,
        t: +y.t || 0,
        name: y.n
    }))), () => {}
    );
    function Xi() {
        if (R) {
            R.unsubs?.forEach(a => a()),
            se(R.pRef).cancel(),
            ce(R.pRef).catch( () => {}
            );
            for (let a of J.values())
                a.group && a.group.parent?.remove(a.group);
            J.clear(),
            R = null,
            F.length = 0,
            t.onChat?.(F),
            Kn = 0
        }
    }
    function Ji(a) {
        if (!R)
            return;
        let c = performance.now()
          , _ = Math.round(m.x * 10) / 10
          , y = Math.round(m.z * 10) / 10;
        !a && (c - R.last < 700 || Math.hypot(_ - R.lx, y - R.lz) < .2 && c - R.last < 15e3) || (R.last = c,
        R.lx = _,
        R.lz = y,
        V(R.pRef, {
            x: _,
            z: y,
            h: Math.round(t.myHeading() * 100) / 100,
            w: !!t.myWalking(),
            t: $()
        }).catch(f => console.warn("house", f.code || f)))
    }
    let Zi = !1
      , da = a => {
        if (Zi = a,
        !a)
            for (let c of J.values())
                c.group && (c.group.position.y = 0)
    }
    ;
    async function fa(a) {
        let c = d()?.uid;
        !R || R.host !== c || (en.add(a),
        _a(a),
        await er(`::kick:${a}`),
        setTimeout(async () => {
            try {
                await ce(E(g, `houseAllow/${c}/${a}`)),
                await Promise.all([ce(E(g, `invites/${a}/${c}`)), ce(E(g, `house/${c}/p/${a}`))])
            } catch (_) {
                console.warn("kick", _.code || _)
            }
        }
        , 1500))
    }
    function _a(a) {
        let c = J.get(a);
        c?.group && c.group.parent?.remove(c.group),
        J.delete(a)
    }
    let er = a => R ? V(gt(E(g, `house/${R.host}/chat`)), {
        u: d().uid,
        m: a.slice(0, 140),
        t: $()
    }).catch( () => {}
    ) : Promise.resolve();
    function pa(a, c, _) {
        if (!R)
            return;
        let y = Date.now() + ke;
        for (let f of J.values()) {
            if (!f.group)
                continue;
            f.group.visible = !(f.t && y - f.t > 45e3);
            let w = lr.subVectors(f.target, f.group.position)
              , N = w.length();
            N > 15 ? f.group.position.copy(f.target) : f.group.position.addScaledVector(w, Math.min(1, a * 8)),
            f.group.rotation.y += Math.atan2(Math.sin(f.h - f.group.rotation.y), Math.cos(f.h - f.group.rotation.y)) * Math.min(1, a * 10),
            Zi && N < .1 && !f.w ? (f.ch.tick(c * 3, 1),
            f.group.position.y = Math.abs(Math.sin(c * 5.45 + f.h)) * .12,
            f.group.rotation.y += Math.sin(c * 2.7) * .02) : (f.group.position.y = 0,
            f.ch.tick(c, f.w || N > .1 ? 1 : 0)),
            f.bubble && performance.now() > f.bubble.userData.until && (f.group.remove(f.bubble),
            f.bubble = null)
        }
        Ji(!1)
    }
    let ke = 0;
    fe(E(g, ".info/serverTimeOffset"), a => {
        ke = a.val() || 0
    }
    );
    async function tr(a, c) {
        if (d())
            try {
                let _ = await Qt(yt(E(g, a), Wl("t"), Ll(Date.now() + ke - c - 5e3), Fl(50)))
                  , y = {};
                _.forEach(f => {
                    y[`${a}/${f.key}`] = null
                }
                ),
                Object.keys(y).length && await Kt(E(g), y)
            } catch {}
    }
    let Qn = null;
    function ma(a, c) {
        nr();
        let _ = []
          , y = d()?.uid;
        Qn = Ze(yt(E(g, `chat/${a}`), Xt(50)), f => {
            let w = f.val();
            if (!w || typeof w.m != "string" || O.has(w.u))
                return;
            let N = {
                id: f.key,
                uid: w.u,
                mine: w.u === y,
                name: "\u2026",
                text: We(w.m.slice(0, 140)),
                t: w.t
            };
            _.push(N),
            c(_),
            Ue(w.u).then(z => {
                N.name = z?.username || "player",
                c(_)
            }
            )
        }
        )
    }
    function nr() {
        Qn?.(),
        Qn = null
    }
    async function ga(a, c) {
        let _ = d();
        if (!_)
            return {
                ok: !1,
                why: "account"
            };
        if (c = c.trim().slice(0, 140),
        !c)
            return {
                ok: !1
            };
        let y = gt(E(g, `chat/${a}`)).key
          , f = Ne;
        Ne = performance.now();
        try {
            if (await Kt(E(g), {
                [`chat/${a}/${y}`]: {
                    u: _.uid,
                    m: c,
                    x: Math.round(m.x),
                    z: Math.round(m.z),
                    t: $()
                },
                [`lastmsg/${_.uid}`]: $()
            }),
            X?.id === a && !R) {
                for (F.push({
                    name: _.player.username,
                    text: We(c),
                    uid: _.uid
                }); F.length > 30; )
                    F.shift();
                t.onChat?.(F, X)
            }
            return {
                ok: !0
            }
        } catch (w) {
            return {
                ok: !1,
                why: /permission/i.test(String(w.code) + w.message) && Ne - f < 1600 ? "slow" : "error"
            }
        }
    }
    let sr = (a, c) => [a, c].sort().join("_")
      , tn = null
      , ir = null;
    function ya(a, c) {
        let _ = d();
        if (!_)
            return;
        rr();
        let y = `dm/${sr(_.uid, a)}`
          , f = [];
        Jn(a);
        let w = yt(E(g, y), Xt(50))
          , N = Ze(w, Q => {
            let G = Q.val();
            G && (f.push({
                id: Q.key,
                mine: G.u === _.uid,
                text: We(String(G.m)),
                t: G.t
            }),
            c(f))
        }
        )
          , z = Gn(w, Q => {
            let G = f.findIndex(L => L.id === Q.key);
            G >= 0 && f.splice(G, 1),
            c(f)
        }
        );
        tn = () => {
            N(),
            z(),
            Jn(a)
        }
    }
    function rr() {
        tn && (tn(),
        tn = null)
    }
    function or(a, c) {
        if (a.startsWith("::invite:"))
            return c ? "invited them over" : "Invited you over";
        let _ = /^::beg:(\d+)$/.exec(a);
        return _ ? `${c ? "begged them" : "Begging you"} for \u20A6${(+_[1]).toLocaleString()} \u{1F64F}` : a
    }
    async function va(a, c) {
        let _ = d();
        if (!_)
            return {
                ok: !1,
                why: "account"
            };
        if (c = c.trim().slice(0, 500),
        !c)
            return {
                ok: !1
            };
        let y = `dm/${sr(_.uid, a)}`
          , f = gt(E(g, y)).key;
        try {
            return await Kt(E(g), {
                [`${y}/${f}`]: {
                    u: _.uid,
                    m: c,
                    t: $()
                },
                [`lastmsg/${_.uid}`]: $()
            }),
            V(E(g, `inbox/${a}/${_.uid}`), {
                t: $(),
                n: or(c, !1).slice(0, 80),
                u: !0
            }).catch(w => console.warn("inbox note", w.code || w)),
            V(E(g, `inbox/${_.uid}/${a}`), {
                t: $(),
                n: ("You: " + or(c, !0)).slice(0, 80),
                u: !1
            }).catch(w => console.warn("my inbox", w.code || w)),
            {
                ok: !0
            }
        } catch (w) {
            return console.warn("dm", w.code || w),
            {
                ok: !1,
                why: "error"
            }
        }
    }
    let Xn = new Map;
    function Jn(a) {
        let c = d()
          , _ = Xn.get(a);
        !c || !_ || _.u === !1 || V(E(g, `inbox/${c.uid}/${a}`), {
            t: _.t,
            n: _.n,
            u: !1
        }).catch(y => console.warn("mark read", y.code || y))
    }
    function wa(a) {
        let c = d();
        !c || ir || (ir = fe(E(g, `inbox/${c.uid}`), async _ => {
            let y = [];
            Xn.clear(),
            _.forEach(f => {
                let w = f.val() || {};
                Xn.set(f.key, w),
                O.has(f.key) || y.push({
                    uid: f.key,
                    t: w.t || 0,
                    preview: We(String(w.n || "")),
                    unread: w.u !== !1
                })
            }
            );
            for (let f of y)
                f.username = (await Ue(f.uid))?.username || "player";
            y.sort( (f, w) => w.t - f.t),
            a(y)
        }
        ))
    }
    function Ca(a) {
        for (let c of K.get(a) || [])
            c();
        K.delete(a);
        for (let[c,_] of C)
            _.zone === a && Ki(c)
    }
    function Ea() {
        let a = new Set(Vh(m.x, m.z));
        for (let c of [...K.keys()])
            a.has(c) || Ca(c);
        for (let c of a)
            K.has(c) || jl(c)
    }
    async function Zn(a) {
        let c = d();
        if (!c)
            return;
        if (t.isHidden?.()) {
            _e && (se(_e).cancel(),
            ce(_e).catch( () => {}
            ),
            _e = null,
            Jt = null,
            vt = 0,
            qn = NaN);
            return
        }
        let _ = performance.now()
          , y = Math.round(m.x * 10) / 10
          , f = Math.round(m.z * 10) / 10
          , w = Math.round(t.myHeading() * 100) / 100
          , N = !!t.myWalking()
          , z = Gi ? null : t.myCar?.() || null
          , Q = Math.hypot(y - qn, f - Hi) > .8 || Math.abs(w - Bi) > .35 || N !== Vi || z !== Yn;
        if (!a && (!Q || _ - vt < Hh(be)) && _ - vt < 3e4)
            return;
        vt = _,
        qn = y,
        Hi = f,
        Bi = w,
        Vi = N,
        Yn = z;
        let G = Bh(y, f);
        try {
            G !== Jt && (_e && (se(_e).cancel(),
            ce(_e)),
            Jt = G,
            _e = E(g, `presence/${G}/${c.uid}`),
            se(_e).remove()),
            await V(_e, z ? {
                x: y,
                z: f,
                h: w,
                w: N,
                c: z,
                t: $()
            } : {
                x: y,
                z: f,
                h: w,
                w: N,
                t: $()
            })
        } catch (L) {
            console.warn("presence", L.code || L),
            z && /permission/i.test(String(L.code) + L.message) && (Gi = !0,
            Yn = null)
        }
    }
    async function Ta(a) {
        let c = d();
        if (!c)
            return {
                ok: !1,
                why: "account"
            };
        if (a = a.trim().slice(0, 140),
        !a)
            return {
                ok: !1
            };
        if (R)
            try {
                for (await V(gt(E(g, `house/${R.host}/chat`)), {
                    u: c.uid,
                    m: a,
                    t: $()
                }),
                F.push({
                    name: c.player.username,
                    text: We(a),
                    uid: c.uid
                }); F.length > 30; )
                    F.shift();
                return t.onChat?.(F),
                {
                    ok: !0
                }
            } catch (w) {
                return console.warn("house chat", w.code || w),
                {
                    ok: !1,
                    why: "error"
                }
            }
        if (!X)
            return {
                ok: !1,
                why: "error"
            };
        let _ = X.id
          , y = gt(E(g, `chat/${_}`)).key
          , f = Ne;
        Ne = performance.now();
        try {
            for (await Kt(E(g), {
                [`chat/${_}/${y}`]: {
                    u: c.uid,
                    m: a,
                    x: Math.round(m.x),
                    z: Math.round(m.z),
                    t: $()
                },
                [`lastmsg/${c.uid}`]: $()
            }),
            F.push({
                name: c.player.username,
                text: We(a),
                uid: c.uid
            }); F.length > 30; )
                F.shift();
            return t.onChat?.(F),
            {
                ok: !0
            }
        } catch (w) {
            return console.warn("chat", w.code || "", w.message || w),
            {
                ok: !1,
                why: /permission/i.test(String(w.code) + w.message) && Ne - f < 1600 ? "slow" : "error",
                detail: w.code || w.message
            }
        }
    }
    function Sa(a) {
        O.add(a);
        try {
            localStorage.setItem("al-muted", JSON.stringify([...O]))
        } catch {}
        let c = C.get(a);
        c?.bubble && c.bubble.parent?.remove(c.bubble)
    }
    async function Ia(a, c) {
        let _ = d();
        if (!_)
            return !1;
        try {
            return await Br(Wr(u, "reports"), {
                by: _.uid,
                about: a,
                reason: c.slice(0, 300),
                createdAt: Ur()
            }),
            !0
        } catch (y) {
            return console.warn("report", y.code || y),
            !1
        }
    }
    let lr = new me;
    function ba(a, c, _) {
        let y = [...C.values()].filter(f => f.group);
        if (y.sort( (f, w) => f.target.distanceToSquared(m) - w.target.distanceToSquared(m)),
        y.forEach( (f, w) => {
            let N = Date.now() - f.last > 6e4;
            if (f.group.visible = w < Bl && !N,
            Yl(f, f.group.userData.uid),
            f.car && (f.car.visible = f.group.visible),
            !f.group.visible)
                return;
            let z = lr.subVectors(f.target, f.group.position)
              , Q = z.length();
            if (Q > 40 ? (f.group.position.copy(f.target),
            f.from?.copy(f.target)) : f.at ? f.group.position.lerpVectors(f.from, f.target, Math.min(1, (performance.now() - f.at) / f.dur)) : f.group.position.addScaledVector(z, Math.min(1, a * 4.5)),
            f.group.rotation.y += Math.atan2(Math.sin(f.h - f.group.rotation.y), Math.cos(f.h - f.group.rotation.y)) * Math.min(1, a * 10),
            f.car) {
                let L = f.car.position.distanceTo(f.group.position);
                L < 5 && (f.spd = (f.spd || 0) + (L / Math.max(a, .001) - (f.spd || 0)) * Math.min(1, a * 4)),
                f.car.position.copy(f.group.position),
                f.car.rotation.y = f.group.rotation.y
            } else {
                let L = f.c === "dance|"
                  , D = f.c === "fight|"
                  , x = f.c === "bed|"
                  , P = f.c === "down|" || x
                  , ie = f.c === "kneel|"
                  , pe = f.c === "sit|" || ie;
                if (f.group.rotation.order = "YXZ",
                f.group.rotation.z = P && !x ? 1.45 : 0,
                f.group.rotation.x = x ? -Math.PI / 2 : 0,
                P) {
                    f.ch.tick(c, 0),
                    f.group.position.y = x ? zr : 0;
                    return
                }
                if (D) {
                    f.ch.tick(c * 4, 1);
                    let $e = Math.max(0, Math.sin(c * 14)) * .45;
                    f.group.position.x += Math.sin(f.group.rotation.y) * $e * a * 10,
                    f.group.position.z += Math.cos(f.group.rotation.y) * $e * a * 10;
                    return
                }
                f.ch.tick(L ? c * 3 : c, !pe && (L || f.w || Q > .3) ? 1 : 0),
                f.group.position.y = L ? Math.abs(Math.sin(c * 5.45)) * .12 : ie ? -.55 : pe ? -.2 : 0
            }
            let G = _.position.distanceTo(f.group.position);
            for (let L of [f.tag, f.bubble])
                L && L.scale.copy(L.userData.base).multiplyScalar(ns.clamp(G / 14, .7, s));
            f.bubble && (f.bubble.position.y = o(f)),
            f.bubble && performance.now() > f.bubble.userData.until && (f.group.remove(f.bubble),
            f.bubble = null)
        }
        ),
        Ce) {
            let f = _.position.distanceTo(m);
            Ce.scale.copy(Ce.userData.base).multiplyScalar(ns.clamp(f / 14, .7, s)),
            performance.now() > Ce.userData.until && (Ce.parent?.remove(Ce),
            Ce = null)
        }
        if (performance.now() - et > 1e3) {
            et = performance.now(),
            be = 0;
            for (let f of C.values())
                f.target.distanceToSquared(m) < 14400 && be++
        }
        Na(),
        Ql(),
        pa(a, c, _),
        Zn(!1)
    }
    let ar = 0;
    function Na() {
        let a = performance.now();
        a - ar > 1e3 && (ar = a,
        Ea())
    }
    let cr = 0
      , es = !1;
    document.addEventListener("visibilitychange", () => {
        if (clearTimeout(cr),
        document.hidden) {
            cr = setTimeout( () => {
                es = !0,
                $l(g)
            }
            , 12e4);
            return
        }
        es && (es = !1,
        Hl(g),
        Jt = null,
        vt = 0,
        R && (se(R.pRef).remove(),
        R.last = 0),
        Zn(!0))
    }
    );
    let ur = 0;
    fe(E(g, ".info/serverTimeOffset"), a => {
        ur = a.val() || 0
    }
    );
    let ka = () => Date.now() + ur;
    function Ra(a, c) {
        let _ = E(g, `along/${a}/${d().uid}`);
        return se(_).remove(),
        V(_, {
            t: $(),
            to: c
        })
    }
    function xa(a) {
        let c = d();
        if (!c)
            return;
        let _ = E(g, `along/${a}/${c.uid}`);
        se(_).cancel(),
        ce(_).catch( () => {}
        )
    }
    function Pa(a, c) {
        return fe(E(g, `along/${a}`), _ => c(Object.entries(_.val() || {}).map( ([y,f]) => ({
            uid: y,
            t: +f.t || 0,
            to: f.to
        }))), () => c(null))
    }
    function Aa(a, c) {
        let _ = E(g, `lift/${a}/${d().uid}`);
        se(_).remove(),
        V(_, {
            t: $(),
            s: "ask"
        }).catch(f => {
            console.warn("lift", f.code || f),
            c(null, !0)
        }
        );
        let y = !1;
        return fe(_, f => {
            let w = f.val();
            w && (y = !0),
            (w || y) && c(w)
        }
        , () => c(null, !0))
    }
    function Ma(a) {
        let c = d();
        if (!c)
            return;
        let _ = E(g, `lift/${a}/${c.uid}`);
        se(_).cancel(),
        ce(_).catch( () => {}
        )
    }
    function Da(a) {
        let c = E(g, `lift/${d().uid}`);
        return se(c).remove(),
        fe(c, _ => a(Object.entries(_.val() || {}).map( ([y,f]) => ({
            uid: y,
            t: f.t,
            s: f.s
        }))), () => {}
        )
    }
    let Oa = (a, c, _) => V(E(g, `lift/${d().uid}/${a}`), {
        t: _,
        s: c
    }).catch(y => console.warn("lift", y.code || y));
    function La() {
        let a = d();
        if (!a)
            return;
        let c = E(g, `lift/${a.uid}`);
        se(c).cancel(),
        ce(c).catch( () => {}
        )
    }
    function Fa(a) {
        let c = C.get(a);
        return !c || !c.group ? null : {
            x: c.group.position.x,
            z: c.group.position.z,
            h: c.group.rotation.y,
            c: c.c,
            fresh: Date.now() - c.last < 8e3
        }
    }
    let ts = new me
      , hr = new mr
      , wt = new me
      , Ct = new me;
    function Wa(a, c, _, y, f, w) {
        let N = [...C.values()].filter(L => L.group?.visible && L.tag?.visible).map(L => L.tag)
          , z = w.intersectObjects(N, !1)[0];
        if (z)
            return z.object.userData.uid || [...C].find( ([,L]) => L.tag === z.object)?.[0] || null;
        let Q = null
          , G = i;
        for (let[L,D] of C) {
            if (!D.group?.visible || !D.tag?.visible)
                continue;
            D.tag.getWorldPosition(ts);
            let x = D.tag.scale.x * D.group.scale.x / 2
              , P = D.tag.scale.y * D.group.scale.y / 2;
            wt.copy(ts),
            Ct.copy(ts);
            let ie = new me().setFromMatrixColumn(_.matrixWorld, 0).multiplyScalar(x)
              , pe = new me().setFromMatrixColumn(_.matrixWorld, 1).multiplyScalar(P * 2);
            if (wt.sub(ie).project(_),
            Ct.add(ie).add(pe).project(_),
            wt.z > 1 || Ct.z > 1)
                continue;
            hr.makeEmpty().expandByPoint({
                x: (wt.x + 1) / 2 * y,
                y: (1 - wt.y) / 2 * f
            }).expandByPoint({
                x: (Ct.x + 1) / 2 * y,
                y: (1 - Ct.y) / 2 * f
            });
            let $e = hr.distanceToPoint({
                x: a,
                y: c
            });
            $e < G && (G = $e,
            Q = L)
        }
        return Q
    }
    function Ua(a) {
        let c = d();
        if (!c)
            return;
        let _ = E(g, `status/${c.uid}`);
        se(_).remove(),
        V(_, {
            ...a,
            t: $()
        }).catch(y => console.warn("status", y.code || y))
    }
    async function $a(a) {
        let c = E(g, `fights/${a}/${d().uid}`);
        try {
            return await V(c, {
                t: $()
            }),
            (await Qt(c)).val()?.t || Date.now()
        } catch (_) {
            return console.warn("fight", _.code || _),
            null
        }
    }
    function Ha(a) {
        return fe(E(g, `fights/${d().uid}`), c => a(Object.entries(c.val() || {}).map( ([_,y]) => ({
            uid: _,
            t: +y.t || 0
        }))), () => {}
        )
    }
    async function Ba(a) {
        try {
            return await V(E(g, `policeReports/${a}/${d().uid}`), {
                t: $()
            }),
            !0
        } catch (c) {
            return console.warn("police report", c.code || c),
            !1
        }
    }
    function Va(a) {
        return fe(E(g, `policeReports/${d().uid}`), c => a(Object.values(c.val() || {}).map(_ => ({
            t: +_.t || 0
        }))), () => {}
        )
    }
    function Ga(a) {
        for (let c of C.values())
            if (c.car?.visible && c.spd > 7 && Math.hypot(c.group.position.x - a.x, c.group.position.z - a.z) < 2)
                return {
                    name: c.username
                };
        return null
    }
    function za() {
        for (let[a,c] of C) {
            if (!c.group || !c.tag || !c.username)
                continue;
            let _ = Wi(a, c.username);
            if (_ === c.tagText)
                continue;
            let y = c.tag.position.y
              , f = c.tag.parent;
            f?.remove(c.tag),
            c.tagText = _,
            c.tag = Vl(_, n),
            c.tag.position.y = y,
            c.tag.userData.uid = a,
            f?.add(c.tag)
        }
    }
    function qa() {
        return [...C.values()].filter(a => a.group && a.group.visible).length
    }
    function Ya(a) {
        let c = C.get(a);
        return c ? {
            uid: a,
            username: c.username
        } : null
    }
    let ja = a => [...C.entries()].find( ([,c]) => c.username === a)?.[0] || null
      , Ka = (a, c, _) => C.get(a)?.ch?.throwFor?.(c, _);
    function Qa() {
        let a = [];
        for (let c of C.values())
            if (c.group?.visible)
                for (let _ of [c.group, c.car])
                    _?.traverse(y => {
                        y.isMesh && y.visible && a.push(y)
                    }
                    );
        return a
    }
    return {
        update: ba,
        uidByName: ja,
        throwFor: Ka,
        openRoom: ma,
        closeRoom: nr,
        sendRoom: ga,
        openDM: ya,
        closeDM: rr,
        sendDM: va,
        markRead: Jn,
        watchInbox: wa,
        profileOf: Ue,
        sendChat: Ta,
        publishProfile: zl,
        sendNow: () => Zn(!0),
        mute: Sa,
        report: Ia,
        count: qa,
        infoFor: Ya,
        meshes: Qa,
        log: F,
        say: jn,
        setMaxShown: a => {
            Bl = a
        }
        ,
        room: () => X,
        setStatus: Ua,
        carHit: Ga,
        attack: $a,
        watchFights: Ha,
        reportToPolice: Ba,
        watchPoliceReports: Va,
        inviteToHouse: Qi,
        watchInvites: Xl,
        clearInvite: sa,
        seduce: Jl,
        seduceAnswer: Zl,
        clearFrom: na,
        groupInvite: ea,
        nearby: ta,
        joinHouse: ia,
        leaveHouse: Xi,
        setHouseMeta: ra,
        getHouseMeta: oa,
        refreshTags: za,
        houseHas: la,
        housePeople: aa,
        setHouseParty: da,
        sendHouseCmd: er,
        kickGuest: fa,
        houseAllowed: ca,
        noteVisit: ua,
        watchVisits: ha,
        inHouse: () => R?.host,
        alongJoin: Ra,
        alongLeave: xa,
        alongWatch: Pa,
        serverNow: ka,
        liftAsk: Aa,
        liftLeave: Ma,
        liftWatchMine: Da,
        liftAnswer: Oa,
        liftClear: La,
        stateOf: Fa,
        pick: Wa
    }
}
export {We as clean, ad as startMultiplayer};
