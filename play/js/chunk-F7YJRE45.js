import {$ as xt, A as vn, C as Rn, Da as xn, F as Pn, Fa as Ke, G as Sn, Ga as le, H as Ee, Ha as de, I as f, Ia as ue, K as P, Ka as Un, L as Dt, M as ye, N as Lt, Oa as V, P as Ie, Pa as Ye, Qa as Hn, Ra as Ht, S as ze, Sa as Vt, T as je, Ta as Vn, U as he, Ua as Ft, Va as Gt, Wa as D, Xa as pe, Za as Fn, _a as Te, a as ee, b as te, ba as An, e as Ot, h as _e, ha as bn, i as In, j as U, ja as kn, k as Nt, l as k, la as Ut, ma as Mn, oa as O, p as C, pa as Cn, qa as On, ra as Nn, sa as Dn, ta as Ln, va as Be, w as Tn, wa as qe, x as wn} from "./chunk-YSUX7QB5.js";
var Gn = {
    type: "change"
}
  , zt = {
    type: "start"
}
  , jn = {
    type: "end"
}
  , $e = new vn
  , Wn = new wn
  , $i = Math.cos(70 * In.DEG2RAD)
  , b = new k
  , N = 2 * Math.PI
  , T = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
}
  , Wt = 1e-6
  , zn = class extends An {
    constructor(e, t=null) {
        super(e, t),
        this.state = T.NONE,
        this.target = new k,
        this.cursor = new k,
        this.minDistance = 0,
        this.maxDistance = 1 / 0,
        this.minZoom = 0,
        this.maxZoom = 1 / 0,
        this.minTargetRadius = 0,
        this.maxTargetRadius = 1 / 0,
        this.minPolarAngle = 0,
        this.maxPolarAngle = Math.PI,
        this.minAzimuthAngle = -1 / 0,
        this.maxAzimuthAngle = 1 / 0,
        this.enableDamping = !1,
        this.dampingFactor = .05,
        this.enableZoom = !0,
        this.zoomSpeed = 1,
        this.enableRotate = !0,
        this.rotateSpeed = 1,
        this.keyRotateSpeed = 1,
        this.enablePan = !0,
        this.panSpeed = 1,
        this.screenSpacePanning = !0,
        this.keyPanSpeed = 7,
        this.zoomToCursor = !1,
        this.autoRotate = !1,
        this.autoRotateSpeed = 2,
        this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        },
        this.mouseButtons = {
            LEFT: ee.ROTATE,
            MIDDLE: ee.DOLLY,
            RIGHT: ee.PAN
        },
        this.touches = {
            ONE: te.ROTATE,
            TWO: te.DOLLY_PAN
        },
        this.target0 = this.target.clone(),
        this.position0 = this.object.position.clone(),
        this.zoom0 = this.object.zoom,
        this._cursorStyle = "auto",
        this._domElementKeyEvents = null,
        this._lastPosition = new k,
        this._lastQuaternion = new Nt,
        this._lastTargetPosition = new k,
        this._quat = new Nt().setFromUnitVectors(e.up, new k(0,1,0)),
        this._quatInverse = this._quat.clone().invert(),
        this._spherical = new xt,
        this._sphericalDelta = new xt,
        this._scale = 1,
        this._panOffset = new k,
        this._rotateStart = new U,
        this._rotateEnd = new U,
        this._rotateDelta = new U,
        this._panStart = new U,
        this._panEnd = new U,
        this._panDelta = new U,
        this._dollyStart = new U,
        this._dollyEnd = new U,
        this._dollyDelta = new U,
        this._dollyDirection = new k,
        this._mouse = new U,
        this._performCursorZoom = !1,
        this._pointers = [],
        this._pointerPositions = {},
        this._controlActive = !1,
        this._onPointerMove = Xi.bind(this),
        this._onPointerDown = Ji.bind(this),
        this._onPointerUp = Zi.bind(this),
        this._onContextMenu = sr.bind(this),
        this._onMouseWheel = tr.bind(this),
        this._onKeyDown = nr.bind(this),
        this._onTouchStart = ir.bind(this),
        this._onTouchMove = rr.bind(this),
        this._onMouseDown = Qi.bind(this),
        this._onMouseMove = er.bind(this),
        this._interceptControlDown = ar.bind(this),
        this._interceptControlUp = or.bind(this),
        this.domElement !== null && this.connect(this.domElement),
        this.update()
    }
    set cursorStyle(e) {
        this._cursorStyle = e,
        e === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto"
    }
    get cursorStyle() {
        return this._cursorStyle
    }
    connect(e) {
        super.connect(e),
        this.domElement.addEventListener("pointerdown", this._onPointerDown),
        this.domElement.addEventListener("pointercancel", this._onPointerUp),
        this.domElement.addEventListener("contextmenu", this._onContextMenu),
        this.domElement.addEventListener("wheel", this._onMouseWheel, {
            passive: !1
        }),
        this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
            passive: !0,
            capture: !0
        }),
        this.domElement.style.touchAction = "none"
    }
    disconnect() {
        this.state = T.NONE,
        this.domElement.removeEventListener("pointerdown", this._onPointerDown),
        this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp),
        this.domElement.removeEventListener("pointercancel", this._onPointerUp),
        this.domElement.removeEventListener("wheel", this._onMouseWheel),
        this.domElement.removeEventListener("contextmenu", this._onContextMenu),
        this.stopListenToKeyEvents();
        let e = this.domElement.getRootNode();
        e.removeEventListener("keydown", this._interceptControlDown, {
            capture: !0
        }),
        e.removeEventListener("keyup", this._interceptControlUp, {
            capture: !0
        }),
        this._controlActive = !1,
        this._pointers.length = 0,
        this._pointerPositions = {},
        this.domElement.style.touchAction = "",
        this.domElement.style.cursor = "auto"
    }
    dispose() {
        this.disconnect()
    }
    getPolarAngle() {
        return this._spherical.phi
    }
    getAzimuthalAngle() {
        return this._spherical.theta
    }
    getDistance() {
        return this.object.position.distanceTo(this.target)
    }
    listenToKeyEvents(e) {
        e.addEventListener("keydown", this._onKeyDown),
        this._domElementKeyEvents = e
    }
    stopListenToKeyEvents() {
        this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown),
        this._domElementKeyEvents = null)
    }
    saveState() {
        this.target0.copy(this.target),
        this.position0.copy(this.object.position),
        this.zoom0 = this.object.zoom
    }
    reset() {
        this.target.copy(this.target0),
        this.object.position.copy(this.position0),
        this.object.zoom = this.zoom0,
        this.object.updateProjectionMatrix(),
        this.dispatchEvent(Gn),
        this.update(),
        this.state = T.NONE
    }
    pan(e, t) {
        this._pan(e, t),
        this.update()
    }
    dollyIn(e) {
        this._dollyIn(e),
        this.update()
    }
    dollyOut(e) {
        this._dollyOut(e),
        this.update()
    }
    rotateLeft(e) {
        this._rotateLeft(e),
        this.update()
    }
    rotateUp(e) {
        this._rotateUp(e),
        this.update()
    }
    update(e=null) {
        let t = this.object.position;
        b.copy(t).sub(this.target),
        b.applyQuaternion(this._quat),
        this._spherical.setFromVector3(b),
        this.autoRotate && this.state === T.NONE && this._rotateLeft(this._getAutoRotationAngle(e)),
        this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor,
        this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta,
        this._spherical.phi += this._sphericalDelta.phi);
        let i = this.minAzimuthAngle
          , r = this.maxAzimuthAngle;
        isFinite(i) && isFinite(r) && (i < -Math.PI ? i += N : i > Math.PI && (i -= N),
        r < -Math.PI ? r += N : r > Math.PI && (r -= N),
        i <= r ? this._spherical.theta = Math.max(i, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (i + r) / 2 ? Math.max(i, this._spherical.theta) : Math.min(r, this._spherical.theta)),
        this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)),
        this._spherical.makeSafe(),
        this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset),
        this.target.sub(this.cursor),
        this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
        this.target.add(this.cursor);
        let s = !1;
        if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
            this._spherical.radius = this._clampDistance(this._spherical.radius);
        else {
            let a = this._spherical.radius;
            this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale),
            s = a != this._spherical.radius
        }
        if (b.setFromSpherical(this._spherical),
        b.applyQuaternion(this._quatInverse),
        t.copy(this.target).add(b),
        this.object.lookAt(this.target),
        this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor,
        this._sphericalDelta.phi *= 1 - this.dampingFactor,
        this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0),
        this._panOffset.set(0, 0, 0)),
        this.zoomToCursor && this._performCursorZoom) {
            let a = null;
            if (this.object.isPerspectiveCamera) {
                let o = b.length();
                a = this._clampDistance(o * this._scale);
                let c = o - a;
                this.object.position.addScaledVector(this._dollyDirection, c),
                this.object.updateMatrixWorld(),
                s = !!c
            } else if (this.object.isOrthographicCamera) {
                let o = new k(this._mouse.x,this._mouse.y,0);
                o.unproject(this.object);
                let c = this.object.zoom;
                this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
                this.object.updateProjectionMatrix(),
                s = c !== this.object.zoom;
                let h = new k(this._mouse.x,this._mouse.y,0);
                h.unproject(this.object),
                this.object.position.sub(h).add(o),
                this.object.updateMatrixWorld(),
                a = b.length()
            } else
                console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),
                this.zoomToCursor = !1;
            a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : ($e.origin.copy(this.object.position),
            $e.direction.set(0, 0, -1).transformDirection(this.object.matrix),
            Math.abs(this.object.up.dot($e.direction)) < $i ? this.object.lookAt(this.target) : (Wn.setFromNormalAndCoplanarPoint(this.object.up, this.target),
            $e.intersectPlane(Wn, this.target))))
        } else if (this.object.isOrthographicCamera) {
            let a = this.object.zoom;
            this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
            a !== this.object.zoom && (this.object.updateProjectionMatrix(),
            s = !0)
        }
        return this._scale = 1,
        this._performCursorZoom = !1,
        s || this._lastPosition.distanceToSquared(this.object.position) > Wt || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Wt || this._lastTargetPosition.distanceToSquared(this.target) > Wt ? (this.dispatchEvent(Gn),
        this._lastPosition.copy(this.object.position),
        this._lastQuaternion.copy(this.object.quaternion),
        this._lastTargetPosition.copy(this.target),
        !0) : !1
    }
    _getAutoRotationAngle(e) {
        return e !== null ? N / 60 * this.autoRotateSpeed * e : N / 60 / 60 * this.autoRotateSpeed
    }
    _getZoomScale(e) {
        let t = Math.abs(e * .01);
        return Math.pow(.95, this.zoomSpeed * t)
    }
    _rotateLeft(e) {
        this._sphericalDelta.theta -= e
    }
    _rotateUp(e) {
        this._sphericalDelta.phi -= e
    }
    _panLeft(e, t) {
        b.setFromMatrixColumn(t, 0),
        b.multiplyScalar(-e),
        this._panOffset.add(b)
    }
    _panUp(e, t) {
        this.screenSpacePanning === !0 ? b.setFromMatrixColumn(t, 1) : (b.setFromMatrixColumn(t, 0),
        b.crossVectors(this.object.up, b)),
        b.multiplyScalar(e),
        this._panOffset.add(b)
    }
    _pan(e, t) {
        let i = this.domElement;
        if (this.object.isPerspectiveCamera) {
            let r = this.object.position;
            b.copy(r).sub(this.target);
            let s = b.length();
            s *= Math.tan(this.object.fov / 2 * Math.PI / 180),
            this._panLeft(2 * e * s / i.clientHeight, this.object.matrix),
            this._panUp(2 * t * s / i.clientHeight, this.object.matrix)
        } else
            this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / i.clientWidth, this.object.matrix),
            this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / i.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
            this.enablePan = !1)
    }
    _dollyOut(e) {
        this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
        this.enableZoom = !1)
    }
    _dollyIn(e) {
        this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
        this.enableZoom = !1)
    }
    _updateZoomParameters(e, t) {
        if (!this.zoomToCursor)
            return;
        this._performCursorZoom = !0;
        let i = this.domElement.getBoundingClientRect()
          , r = e - i.left
          , s = t - i.top
          , a = i.width
          , o = i.height;
        this._mouse.x = r / a * 2 - 1,
        this._mouse.y = -(s / o) * 2 + 1,
        this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize()
    }
    _clampDistance(e) {
        return Math.max(this.minDistance, Math.min(this.maxDistance, e))
    }
    _handleMouseDownRotate(e) {
        this._rotateStart.set(e.clientX, e.clientY)
    }
    _handleMouseDownDolly(e) {
        this._updateZoomParameters(e.clientX, e.clientX),
        this._dollyStart.set(e.clientX, e.clientY)
    }
    _handleMouseDownPan(e) {
        this._panStart.set(e.clientX, e.clientY)
    }
    _handleMouseMoveRotate(e) {
        this._rotateEnd.set(e.clientX, e.clientY),
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        let t = this.domElement;
        this._rotateLeft(N * this._rotateDelta.x / t.clientHeight),
        this._rotateUp(N * this._rotateDelta.y / t.clientHeight),
        this._rotateStart.copy(this._rotateEnd),
        this.update()
    }
    _handleMouseMoveDolly(e) {
        this._dollyEnd.set(e.clientX, e.clientY),
        this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
        this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
        this._dollyStart.copy(this._dollyEnd),
        this.update()
    }
    _handleMouseMovePan(e) {
        this._panEnd.set(e.clientX, e.clientY),
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd),
        this.update()
    }
    _handleMouseWheel(e) {
        this._updateZoomParameters(e.clientX, e.clientY),
        e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)),
        this.update()
    }
    _handleKeyDown(e) {
        let t = !1;
        switch (e.code) {
        case this.keys.UP:
            e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(N * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed),
            t = !0;
            break;
        case this.keys.BOTTOM:
            e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-N * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed),
            t = !0;
            break;
        case this.keys.LEFT:
            e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(N * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0),
            t = !0;
            break;
        case this.keys.RIGHT:
            e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-N * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0),
            t = !0;
            break
        }
        t && (e.preventDefault(),
        this.update())
    }
    _handleTouchStartRotate(e) {
        if (this._pointers.length === 1)
            this._rotateStart.set(e.pageX, e.pageY);
        else {
            let t = this._getSecondPointerPosition(e)
              , i = .5 * (e.pageX + t.x)
              , r = .5 * (e.pageY + t.y);
            this._rotateStart.set(i, r)
        }
    }
    _handleTouchStartPan(e) {
        if (this._pointers.length === 1)
            this._panStart.set(e.pageX, e.pageY);
        else {
            let t = this._getSecondPointerPosition(e)
              , i = .5 * (e.pageX + t.x)
              , r = .5 * (e.pageY + t.y);
            this._panStart.set(i, r)
        }
    }
    _handleTouchStartDolly(e) {
        let t = this._getSecondPointerPosition(e)
          , i = e.pageX - t.x
          , r = e.pageY - t.y
          , s = Math.sqrt(i * i + r * r);
        this._dollyStart.set(0, s)
    }
    _handleTouchStartDollyPan(e) {
        this.enableZoom && this._handleTouchStartDolly(e),
        this.enablePan && this._handleTouchStartPan(e)
    }
    _handleTouchStartDollyRotate(e) {
        this.enableZoom && this._handleTouchStartDolly(e),
        this.enableRotate && this._handleTouchStartRotate(e)
    }
    _handleTouchMoveRotate(e) {
        if (this._pointers.length == 1)
            this._rotateEnd.set(e.pageX, e.pageY);
        else {
            let i = this._getSecondPointerPosition(e)
              , r = .5 * (e.pageX + i.x)
              , s = .5 * (e.pageY + i.y);
            this._rotateEnd.set(r, s)
        }
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        let t = this.domElement;
        this._rotateLeft(N * this._rotateDelta.x / t.clientHeight),
        this._rotateUp(N * this._rotateDelta.y / t.clientHeight),
        this._rotateStart.copy(this._rotateEnd)
    }
    _handleTouchMovePan(e) {
        if (this._pointers.length === 1)
            this._panEnd.set(e.pageX, e.pageY);
        else {
            let t = this._getSecondPointerPosition(e)
              , i = .5 * (e.pageX + t.x)
              , r = .5 * (e.pageY + t.y);
            this._panEnd.set(i, r)
        }
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd)
    }
    _handleTouchMoveDolly(e) {
        let t = this._getSecondPointerPosition(e)
          , i = e.pageX - t.x
          , r = e.pageY - t.y
          , s = Math.sqrt(i * i + r * r);
        this._dollyEnd.set(0, s),
        this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)),
        this._dollyOut(this._dollyDelta.y),
        this._dollyStart.copy(this._dollyEnd);
        let a = (e.pageX + t.x) * .5
          , o = (e.pageY + t.y) * .5;
        this._updateZoomParameters(a, o)
    }
    _handleTouchMoveDollyPan(e) {
        this.enableZoom && this._handleTouchMoveDolly(e),
        this.enablePan && this._handleTouchMovePan(e)
    }
    _handleTouchMoveDollyRotate(e) {
        this.enableZoom && this._handleTouchMoveDolly(e),
        this.enableRotate && this._handleTouchMoveRotate(e)
    }
    _addPointer(e) {
        this._pointers.push(e.pointerId)
    }
    _removePointer(e) {
        delete this._pointerPositions[e.pointerId];
        for (let t = 0; t < this._pointers.length; t++)
            if (this._pointers[t] == e.pointerId) {
                this._pointers.splice(t, 1);
                return
            }
    }
    _isTrackingPointer(e) {
        for (let t = 0; t < this._pointers.length; t++)
            if (this._pointers[t] == e.pointerId)
                return !0;
        return !1
    }
    _trackPointer(e) {
        let t = this._pointerPositions[e.pointerId];
        t === void 0 && (t = new U,
        this._pointerPositions[e.pointerId] = t),
        t.set(e.pageX, e.pageY)
    }
    _getSecondPointerPosition(e) {
        let t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
        return this._pointerPositions[t]
    }
    _customWheelEvent(e) {
        let t = e.deltaMode
          , i = {
            clientX: e.clientX,
            clientY: e.clientY,
            deltaY: e.deltaY
        };
        switch (t) {
        case 1:
            i.deltaY *= 16;
            break;
        case 2:
            i.deltaY *= 100;
            break
        }
        return e.ctrlKey && !this._controlActive && (i.deltaY *= 10),
        i
    }
}
;
function Ji(n) {
    this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(n.pointerId),
    this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove),
    this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)),
    !this._isTrackingPointer(n) && (this._addPointer(n),
    n.pointerType === "touch" ? this._onTouchStart(n) : this._onMouseDown(n),
    this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")))
}
function Xi(n) {
    this.enabled !== !1 && (n.pointerType === "touch" ? this._onTouchMove(n) : this._onMouseMove(n))
}
function Zi(n) {
    switch (this._removePointer(n),
    this._pointers.length) {
    case 0:
        this.domElement.releasePointerCapture(n.pointerId),
        this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp),
        this.dispatchEvent(jn),
        this.state = T.NONE,
        this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
        break;
    case 1:
        let e = this._pointers[0]
          , t = this._pointerPositions[e];
        this._onTouchStart({
            pointerId: e,
            pageX: t.x,
            pageY: t.y
        });
        break
    }
}
function Qi(n) {
    let e;
    switch (n.button) {
    case 0:
        e = this.mouseButtons.LEFT;
        break;
    case 1:
        e = this.mouseButtons.MIDDLE;
        break;
    case 2:
        e = this.mouseButtons.RIGHT;
        break;
    default:
        e = -1
    }
    switch (e) {
    case ee.DOLLY:
        if (this.enableZoom === !1)
            return;
        this._handleMouseDownDolly(n),
        this.state = T.DOLLY;
        break;
    case ee.ROTATE:
        if (n.ctrlKey || n.metaKey || n.shiftKey) {
            if (this.enablePan === !1)
                return;
            this._handleMouseDownPan(n),
            this.state = T.PAN
        } else {
            if (this.enableRotate === !1)
                return;
            this._handleMouseDownRotate(n),
            this.state = T.ROTATE
        }
        break;
    case ee.PAN:
        if (n.ctrlKey || n.metaKey || n.shiftKey) {
            if (this.enableRotate === !1)
                return;
            this._handleMouseDownRotate(n),
            this.state = T.ROTATE
        } else {
            if (this.enablePan === !1)
                return;
            this._handleMouseDownPan(n),
            this.state = T.PAN
        }
        break;
    default:
        this.state = T.NONE
    }
    this.state !== T.NONE && this.dispatchEvent(zt)
}
function er(n) {
    switch (this.state) {
    case T.ROTATE:
        if (this.enableRotate === !1)
            return;
        this._handleMouseMoveRotate(n);
        break;
    case T.DOLLY:
        if (this.enableZoom === !1)
            return;
        this._handleMouseMoveDolly(n);
        break;
    case T.PAN:
        if (this.enablePan === !1)
            return;
        this._handleMouseMovePan(n);
        break
    }
}
function tr(n) {
    this.enabled === !1 || this.enableZoom === !1 || this.state !== T.NONE || (n.preventDefault(),
    this.dispatchEvent(zt),
    this._handleMouseWheel(this._customWheelEvent(n)),
    this.dispatchEvent(jn))
}
function nr(n) {
    this.enabled !== !1 && this._handleKeyDown(n)
}
function ir(n) {
    switch (this._trackPointer(n),
    this._pointers.length) {
    case 1:
        switch (this.touches.ONE) {
        case te.ROTATE:
            if (this.enableRotate === !1)
                return;
            this._handleTouchStartRotate(n),
            this.state = T.TOUCH_ROTATE;
            break;
        case te.PAN:
            if (this.enablePan === !1)
                return;
            this._handleTouchStartPan(n),
            this.state = T.TOUCH_PAN;
            break;
        default:
            this.state = T.NONE
        }
        break;
    case 2:
        switch (this.touches.TWO) {
        case te.DOLLY_PAN:
            if (this.enableZoom === !1 && this.enablePan === !1)
                return;
            this._handleTouchStartDollyPan(n),
            this.state = T.TOUCH_DOLLY_PAN;
            break;
        case te.DOLLY_ROTATE:
            if (this.enableZoom === !1 && this.enableRotate === !1)
                return;
            this._handleTouchStartDollyRotate(n),
            this.state = T.TOUCH_DOLLY_ROTATE;
            break;
        default:
            this.state = T.NONE
        }
        break;
    default:
        this.state = T.NONE
    }
    this.state !== T.NONE && this.dispatchEvent(zt)
}
function rr(n) {
    switch (this._trackPointer(n),
    this.state) {
    case T.TOUCH_ROTATE:
        if (this.enableRotate === !1)
            return;
        this._handleTouchMoveRotate(n),
        this.update();
        break;
    case T.TOUCH_PAN:
        if (this.enablePan === !1)
            return;
        this._handleTouchMovePan(n),
        this.update();
        break;
    case T.TOUCH_DOLLY_PAN:
        if (this.enableZoom === !1 && this.enablePan === !1)
            return;
        this._handleTouchMoveDollyPan(n),
        this.update();
        break;
    case T.TOUCH_DOLLY_ROTATE:
        if (this.enableZoom === !1 && this.enableRotate === !1)
            return;
        this._handleTouchMoveDollyRotate(n),
        this.update();
        break;
    default:
        this.state = T.NONE
    }
}
function sr(n) {
    this.enabled !== !1 && n.preventDefault()
}
function ar(n) {
    n.key === "Control" && (this._controlActive = !0,
    this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0
    }))
}
function or(n) {
    n.key === "Control" && (this._controlActive = !1,
    this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0
    }))
}
var cr = "firebase"
  , hr = "12.19.0";
Te(cr, hr, "app");
function li() {
    return {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    }
}
var di = li
  , ui = new qe("auth","Firebase",li());
var it = new Vn("@firebase/auth");
function Xe(n, ...e) {
    it.logLevel <= Vt.WARN && it.warn(`Auth (${pe}): ${n}`, ...e)
}
function Ze(n, ...e) {
    it.logLevel <= Vt.ERROR && it.error(`Auth (${pe}): ${n}`, ...e)
}
function H(n, ...e) {
    throw pn(n, ...e)
}
function F(n, ...e) {
    return pn(n, ...e)
}
function St(n, e, t) {
    let i = {
        ...di(),
        [e]: t
    };
    return new qe("auth","Firebase",i).create(e, {
        appName: n.name
    })
}
function q(n) {
    return St(n, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp")
}
function lr(n, e, t) {
    let i = t;
    if (!(e instanceof i))
        throw i.name !== e.constructor.name && H(n, "argument-error"),
        St(n, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
}
function pn(n, ...e) {
    if (typeof n != "string") {
        let t = e[0]
          , i = [...e.slice(1)];
        return i[0] && (i[0].appName = n.name),
        n._errorFactory.create(t, ...i)
    }
    return ui.create(n, ...e)
}
function p(n, e, ...t) {
    if (!n)
        throw pn(e, ...t)
}
function W(n) {
    let e = "INTERNAL ASSERTION FAILED: " + n;
    throw Ze(e),
    new Error(e)
}
function K(n, e) {
    n || W(e)
}
function $t() {
    return typeof self < "u" && self.location?.href || ""
}
function dr() {
    return Bn() === "http:" || Bn() === "https:"
}
function Bn() {
    return typeof self < "u" && self.location?.protocol || null
}
function ur() {
    return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && (dr() || Nn() || "connection" in navigator) ? navigator.onLine : !0
}
function pr() {
    if (typeof navigator > "u")
        return null;
    let n = navigator;
    return n.languages && n.languages[0] || n.language || null
}
var ie = class {
    constructor(e, t) {
        this.shortDelay = e,
        this.longDelay = t,
        K(t > e, "Short delay should be less than long delay!"),
        this.isMobile = Cn() || Dn()
    }
    get() {
        return ur() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
    }
}
;
function fn(n, e) {
    K(n.emulator, "Emulator should always be set here");
    let {url: t} = n.emulator;
    return e ? `${t}${e.startsWith("/") ? e.slice(1) : e}` : t
}
var rt = class {
    static initialize(e, t, i) {
        this.fetchImpl = e,
        t && (this.headersImpl = t),
        i && (this.responseImpl = i)
    }
    static fetch() {
        if (this.fetchImpl)
            return this.fetchImpl;
        if (typeof self < "u" && "fetch" in self)
            return self.fetch;
        if (typeof globalThis < "u" && globalThis.fetch)
            return globalThis.fetch;
        if (typeof fetch < "u")
            return fetch;
        W("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static headers() {
        if (this.headersImpl)
            return this.headersImpl;
        if (typeof self < "u" && "Headers" in self)
            return self.Headers;
        if (typeof globalThis < "u" && globalThis.Headers)
            return globalThis.Headers;
        if (typeof Headers < "u")
            return Headers;
        W("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static response() {
        if (this.responseImpl)
            return this.responseImpl;
        if (typeof self < "u" && "Response" in self)
            return self.Response;
        if (typeof globalThis < "u" && globalThis.Response)
            return globalThis.Response;
        if (typeof Response < "u")
            return Response;
        W("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
}
;
var fr = {
    CREDENTIAL_MISMATCH: "custom-token-mismatch",
    MISSING_CUSTOM_TOKEN: "internal-error",
    INVALID_IDENTIFIER: "invalid-email",
    MISSING_CONTINUE_URI: "internal-error",
    INVALID_PASSWORD: "wrong-password",
    MISSING_PASSWORD: "missing-password",
    INVALID_LOGIN_CREDENTIALS: "invalid-credential",
    EMAIL_EXISTS: "email-already-in-use",
    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
    INVALID_IDP_RESPONSE: "invalid-credential",
    INVALID_PENDING_TOKEN: "invalid-credential",
    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
    MISSING_REQ_TYPE: "internal-error",
    EMAIL_NOT_FOUND: "user-not-found",
    RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
    EXPIRED_OOB_CODE: "expired-action-code",
    INVALID_OOB_CODE: "invalid-action-code",
    MISSING_OOB_CODE: "internal-error",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
    INVALID_ID_TOKEN: "invalid-user-token",
    TOKEN_EXPIRED: "user-token-expired",
    USER_NOT_FOUND: "user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
    PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
    INVALID_CODE: "invalid-verification-code",
    INVALID_SESSION_INFO: "invalid-verification-id",
    INVALID_TEMPORARY_PROOF: "invalid-credential",
    MISSING_SESSION_INFO: "missing-verification-id",
    SESSION_EXPIRED: "code-expired",
    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
    ADMIN_ONLY_OPERATION: "admin-restricted-operation",
    INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
    MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
    MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
    MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
    SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
    BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
    RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
    MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
    INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
    INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
    MISSING_CLIENT_TYPE: "missing-client-type",
    MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
    INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
    INVALID_REQ_TYPE: "invalid-req-type"
};
var mr = ["/v1/accounts:signInWithCustomToken", "/v1/accounts:signInWithEmailLink", "/v1/accounts:signInWithIdp", "/v1/accounts:signInWithPassword", "/v1/accounts:signInWithPhoneNumber", "/v1/token"]
  , gr = new ie(3e4,6e4);
function S(n, e) {
    return n.tenantId && !e.tenantId ? {
        ...e,
        tenantId: n.tenantId
    } : e
}
async function M(n, e, t, i, r={}) {
    return pi(n, r, async () => {
        let s = {}
          , a = {};
        i && (e === "GET" ? a = i : s = {
            body: JSON.stringify(i)
        });
        let o = le({
            ...a,
            key: n.config.apiKey
        }).slice(1)
          , c = await n._getAdditionalHeaders();
        c["Content-Type"] = "application/json",
        n.languageCode && (c["X-Firebase-Locale"] = n.languageCode);
        let h = {
            method: e,
            headers: c,
            ...s
        };
        return On() || (h.referrerPolicy = "strict-origin-when-cross-origin"),
        n.emulatorConfig && Ye(n.emulatorConfig.host) && (h.credentials = "include"),
        rt.fetch()(await fi(n, n.config.apiHost, t, o), h)
    }
    )
}
async function pi(n, e, t) {
    n._canInitEmulator = !1;
    let i = {
        ...fr,
        ...e
    };
    try {
        let r = new Jt(n)
          , s = await Promise.race([t(), r.promise]);
        r.clearNetworkTimeout();
        let a = await s.json();
        if ("needConfirmation" in a)
            throw ve(n, "account-exists-with-different-credential", a);
        if (s.ok && !("errorMessage" in a))
            return a;
        {
            let o = s.ok ? a.errorMessage : a.error.message
              , [c,h] = o.split(" : ");
            if (c === "FEDERATED_USER_ID_ALREADY_LINKED")
                throw ve(n, "credential-already-in-use", a);
            if (c === "EMAIL_EXISTS")
                throw ve(n, "email-already-in-use", a);
            if (c === "USER_DISABLED")
                throw ve(n, "user-disabled", a);
            let d = i[c] || c.toLowerCase().replace(/[_\s]+/g, "-");
            if (h)
                throw St(n, d, h);
            H(n, d)
        }
    } catch (r) {
        if (r instanceof Be)
            throw r;
        H(n, "network-request-failed", {
            message: String(r)
        })
    }
}
async function Q(n, e, t, i, r={}) {
    let s = await M(n, e, t, i, r);
    return "mfaPendingCredential" in s && H(n, "multi-factor-auth-required", {
        _serverResponse: s
    }),
    s
}
async function fi(n, e, t, i) {
    let r = `${e}${t}?${i}`
      , s = n
      , a = s.config.emulator ? fn(n.config, r) : `${n.config.apiScheme}://${r}`;
    return mr.includes(t) && (await s._persistenceManagerAvailable,
    s._getPersistenceType() === "COOKIE") ? s._getPersistence()._getFinalTarget(a).toString() : a
}
function _r(n) {
    switch (n) {
    case "ENFORCE":
        return "ENFORCE";
    case "AUDIT":
        return "AUDIT";
    case "OFF":
        return "OFF";
    default:
        return "ENFORCEMENT_STATE_UNSPECIFIED"
    }
}
var Jt = class {
    clearNetworkTimeout() {
        clearTimeout(this.timer)
    }
    constructor(e) {
        this.auth = e,
        this.timer = null,
        this.promise = new Promise( (t, i) => {
            this.timer = setTimeout( () => i(F(this.auth, "network-request-failed")), gr.get())
        }
        )
    }
}
;
function ve(n, e, t) {
    let i = {
        appName: n.name
    };
    t.email && (i.email = t.email),
    t.phoneNumber && (i.phoneNumber = t.phoneNumber);
    let r = F(n, e, i);
    return r.customData._tokenResponse = t,
    r
}
function qn(n) {
    return n !== void 0 && n.enterprise !== void 0
}
var st = class {
    constructor(e) {
        if (this.siteKey = "",
        this.recaptchaEnforcementState = [],
        e.recaptchaKey === void 0)
            throw new Error("recaptchaKey undefined");
        this.siteKey = e.recaptchaKey.split("/")[3],
        this.recaptchaEnforcementState = e.recaptchaEnforcementState
    }
    getProviderEnforcementState(e) {
        if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0)
            return null;
        for (let t of this.recaptchaEnforcementState)
            if (t.provider && t.provider === e)
                return _r(t.enforcementState);
        return null
    }
    isProviderEnabled(e) {
        return this.getProviderEnforcementState(e) === "ENFORCE" || this.getProviderEnforcementState(e) === "AUDIT"
    }
    isAnyProviderEnabled() {
        return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") || this.isProviderEnabled("PHONE_PROVIDER")
    }
}
;
async function mi(n, e) {
    return M(n, "GET", "/v2/recaptchaConfig", S(n, e))
}
async function Er(n, e) {
    return M(n, "POST", "/v1/accounts:delete", e)
}
async function at(n, e) {
    return M(n, "POST", "/v1/accounts:lookup", e)
}
function Re(n) {
    if (n)
        try {
            let e = new Date(Number(n));
            if (!isNaN(e.getTime()))
                return e.toUTCString()
        } catch {}
}
async function gi(n, e=!1) {
    let t = V(n)
      , i = await t.getIdToken(e)
      , r = mn(i);
    p(r && r.exp && r.auth_time && r.iat, t.auth, "internal-error");
    let s = typeof r.firebase == "object" ? r.firebase : void 0
      , a = s?.sign_in_provider;
    return {
        claims: r,
        token: i,
        authTime: Re(jt(r.auth_time)),
        issuedAtTime: Re(jt(r.iat)),
        expirationTime: Re(jt(r.exp)),
        signInProvider: a || null,
        signInSecondFactor: s?.sign_in_second_factor || null
    }
}
function jt(n) {
    return Number(n) * 1e3
}
function mn(n) {
    let[e,t,i] = n.split(".");
    if (e === void 0 || t === void 0 || i === void 0)
        return Ze("JWT malformed, contained fewer than 3 sections"),
        null;
    try {
        let r = bn(t);
        return r ? JSON.parse(r) : (Ze("Failed to decode base64 JWT payload"),
        null)
    } catch (r) {
        return Ze("Caught error parsing JWT payload as JSON", r?.toString()),
        null
    }
}
function Kn(n) {
    let e = mn(n);
    return p(e, "internal-error"),
    p(typeof e.exp < "u", "internal-error"),
    p(typeof e.iat < "u", "internal-error"),
    Number(e.exp) - Number(e.iat)
}
async function be(n, e, t=!1) {
    if (t)
        return e;
    try {
        return await e
    } catch (i) {
        throw i instanceof Be && yr(i) && n.auth.currentUser === n && await n.auth.signOut(),
        i
    }
}
function yr({code: n}) {
    return n === "auth/user-disabled" || n === "auth/user-token-expired"
}
var Xt = class {
    constructor(e) {
        this.user = e,
        this.isRunning = !1,
        this.timerId = null,
        this.errorBackoff = 3e4
    }
    _start() {
        this.isRunning || (this.isRunning = !0,
        this.schedule())
    }
    _stop() {
        this.isRunning && (this.isRunning = !1,
        this.timerId !== null && clearTimeout(this.timerId))
    }
    getInterval(e) {
        if (e) {
            let t = this.errorBackoff;
            return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4),
            t
        } else {
            this.errorBackoff = 3e4;
            let i = (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
            return Math.max(0, i)
        }
    }
    schedule(e=!1) {
        if (!this.isRunning)
            return;
        let t = this.getInterval(e);
        this.timerId = setTimeout(async () => {
            await this.iteration()
        }
        , t)
    }
    async iteration() {
        try {
            await this.user.getIdToken(!0)
        } catch (e) {
            e?.code === "auth/network-request-failed" && this.schedule(!0);
            return
        }
        this.schedule()
    }
}
;
var ke = class {
    constructor(e, t) {
        this.createdAt = e,
        this.lastLoginAt = t,
        this._initializeTime()
    }
    _initializeTime() {
        this.lastSignInTime = Re(this.lastLoginAt),
        this.creationTime = Re(this.createdAt)
    }
    _copy(e) {
        this.createdAt = e.createdAt,
        this.lastLoginAt = e.lastLoginAt,
        this._initializeTime()
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        }
    }
}
;
async function ot(n) {
    let e = n.auth
      , t = await n.getIdToken()
      , i = await be(n, at(e, {
        idToken: t
    }));
    p(i?.users.length, e, "internal-error");
    let r = i.users[0];
    n._notifyReloadListener(r);
    let s = r.providerUserInfo?.length ? Ei(r.providerUserInfo) : []
      , a = Ir(n.providerData, s)
      , o = n.isAnonymous
      , c = !(n.email && r.passwordHash) && !a?.length
      , h = o ? c : !1
      , d = {
        uid: r.localId,
        displayName: r.displayName || null,
        photoURL: r.photoUrl || null,
        email: r.email || null,
        emailVerified: r.emailVerified || !1,
        phoneNumber: r.phoneNumber || null,
        tenantId: r.tenantId || null,
        providerData: a,
        metadata: new ke(r.createdAt,r.lastLoginAt),
        isAnonymous: h
    };
    Object.assign(n, d)
}
async function _i(n) {
    let e = V(n);
    await ot(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e)
}
function Ir(n, e) {
    return [...n.filter(i => !e.some(r => r.providerId === i.providerId)), ...e]
}
function Ei(n) {
    return n.map( ({providerId: e, ...t}) => ({
        providerId: e,
        uid: t.rawId || "",
        displayName: t.displayName || null,
        email: t.email || null,
        phoneNumber: t.phoneNumber || null,
        photoURL: t.photoUrl || null
    }))
}
async function Tr(n, e) {
    let t = await pi(n, {}, async () => {
        let i = le({
            grant_type: "refresh_token",
            refresh_token: e
        }).slice(1)
          , {tokenApiHost: r, apiKey: s} = n.config
          , a = await fi(n, r, "/v1/token", `key=${s}`)
          , o = await n._getAdditionalHeaders();
        o["Content-Type"] = "application/x-www-form-urlencoded";
        let c = {
            method: "POST",
            headers: o,
            body: i
        };
        return n.emulatorConfig && Ye(n.emulatorConfig.host) && (c.credentials = "include"),
        rt.fetch()(a, c)
    }
    );
    return {
        accessToken: t.access_token,
        expiresIn: t.expires_in,
        refreshToken: t.refresh_token
    }
}
async function wr(n, e) {
    return M(n, "POST", "/v2/accounts:revokeToken", S(n, e))
}
var Pe = class n {
    constructor() {
        this.refreshToken = null,
        this.accessToken = null,
        this.expirationTime = null
    }
    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }
    updateFromServerResponse(e) {
        p(e.idToken, "internal-error"),
        p(typeof e.idToken < "u", "internal-error"),
        p(typeof e.refreshToken < "u", "internal-error");
        let t = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Kn(e.idToken);
        this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
    }
    updateFromIdToken(e) {
        p(e.length !== 0, "internal-error");
        let t = Kn(e);
        this.updateTokensAndExpiration(e, null, t)
    }
    async getToken(e, t=!1) {
        return !t && this.accessToken && !this.isExpired ? this.accessToken : (p(this.refreshToken, e, "user-token-expired"),
        this.refreshToken ? (await this.refresh(e, this.refreshToken),
        this.accessToken) : null)
    }
    clearRefreshToken() {
        this.refreshToken = null
    }
    async refresh(e, t) {
        let {accessToken: i, refreshToken: r, expiresIn: s} = await Tr(e, t);
        this.updateTokensAndExpiration(i, r, Number(s))
    }
    updateTokensAndExpiration(e, t, i) {
        this.refreshToken = t || null,
        this.accessToken = e || null,
        this.expirationTime = Date.now() + i * 1e3
    }
    static fromJSON(e, t) {
        let {refreshToken: i, accessToken: r, expirationTime: s} = t
          , a = new n;
        return i && (p(typeof i == "string", "internal-error", {
            appName: e
        }),
        a.refreshToken = i),
        r && (p(typeof r == "string", "internal-error", {
            appName: e
        }),
        a.accessToken = r),
        s && (p(typeof s == "number", "internal-error", {
            appName: e
        }),
        a.expirationTime = s),
        a
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        }
    }
    _assign(e) {
        this.accessToken = e.accessToken,
        this.refreshToken = e.refreshToken,
        this.expirationTime = e.expirationTime
    }
    _clone() {
        return Object.assign(new n, this.toJSON())
    }
    _performRefresh() {
        return W("not implemented")
    }
}
;
function X(n, e) {
    p(typeof n == "string" || typeof n > "u", "internal-error", {
        appName: e
    })
}
var Z = class n {
    constructor({uid: e, auth: t, stsTokenManager: i, ...r}) {
        this.providerId = "firebase",
        this.proactiveRefresh = new Xt(this),
        this.reloadUserInfo = null,
        this.reloadListener = null,
        this.uid = e,
        this.auth = t,
        this.stsTokenManager = i,
        this.accessToken = i.accessToken,
        this.displayName = r.displayName || null,
        this.email = r.email || null,
        this.emailVerified = r.emailVerified || !1,
        this.phoneNumber = r.phoneNumber || null,
        this.photoURL = r.photoURL || null,
        this.isAnonymous = r.isAnonymous || !1,
        this.tenantId = r.tenantId || null,
        this.providerData = r.providerData ? [...r.providerData] : [],
        this.metadata = new ke(r.createdAt || void 0,r.lastLoginAt || void 0)
    }
    async getIdToken(e) {
        let t = await be(this, this.stsTokenManager.getToken(this.auth, e));
        return p(t, this.auth, "internal-error"),
        this.accessToken !== t && (this.accessToken = t,
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
        t
    }
    getIdTokenResult(e) {
        return gi(this, e)
    }
    reload() {
        return _i(this)
    }
    _assign(e) {
        this !== e && (p(this.uid === e.uid, this.auth, "internal-error"),
        this.displayName = e.displayName,
        this.photoURL = e.photoURL,
        this.email = e.email,
        this.emailVerified = e.emailVerified,
        this.phoneNumber = e.phoneNumber,
        this.isAnonymous = e.isAnonymous,
        this.tenantId = e.tenantId,
        this.providerData = e.providerData.map(t => ({
            ...t
        })),
        this.metadata._copy(e.metadata),
        this.stsTokenManager._assign(e.stsTokenManager))
    }
    _clone(e) {
        let t = new n({
            ...this,
            auth: e,
            stsTokenManager: this.stsTokenManager._clone()
        });
        return t.metadata._copy(this.metadata),
        t
    }
    _onReload(e) {
        p(!this.reloadListener, this.auth, "internal-error"),
        this.reloadListener = e,
        this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo),
        this.reloadUserInfo = null)
    }
    _notifyReloadListener(e) {
        this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start()
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop()
    }
    async _updateTokensIfNecessary(e, t=!1) {
        let i = !1;
        e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e),
        i = !0),
        t && await ot(this),
        await this.auth._persistUserIfCurrent(this),
        i && this.auth._notifyListenersIfCurrent(this)
    }
    async delete() {
        if (D(this.auth.app))
            return Promise.reject(q(this.auth));
        let e = await this.getIdToken();
        return await be(this, Er(this.auth, {
            idToken: e
        })),
        this.stsTokenManager.clearRefreshToken(),
        this.auth.signOut()
    }
    toJSON() {
        return {
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map(e => ({
                ...e
            })),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId,
            ...this.metadata.toJSON(),
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
        }
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || ""
    }
    static _fromJSON(e, t) {
        let i = t.displayName ?? void 0
          , r = t.email ?? void 0
          , s = t.phoneNumber ?? void 0
          , a = t.photoURL ?? void 0
          , o = t.tenantId ?? void 0
          , c = t._redirectEventId ?? void 0
          , h = t.createdAt ?? void 0
          , d = t.lastLoginAt ?? void 0
          , {uid: g, emailVerified: I, isAnonymous: y, providerData: R, stsTokenManager: v} = t;
        p(g && v, e, "internal-error");
        let _ = Pe.fromJSON(this.name, v);
        p(typeof g == "string", e, "internal-error"),
        X(i, e.name),
        X(r, e.name),
        p(typeof I == "boolean", e, "internal-error"),
        p(typeof y == "boolean", e, "internal-error"),
        X(s, e.name),
        X(a, e.name),
        X(o, e.name),
        X(c, e.name),
        X(h, e.name),
        X(d, e.name);
        let u = new n({
            uid: g,
            auth: e,
            email: r,
            emailVerified: I,
            displayName: i,
            isAnonymous: y,
            photoURL: a,
            phoneNumber: s,
            tenantId: o,
            stsTokenManager: _,
            createdAt: h,
            lastLoginAt: d
        });
        return R && Array.isArray(R) && (u.providerData = R.map(E => ({
            ...E
        }))),
        c && (u._redirectEventId = c),
        u
    }
    static async _fromIdTokenResponse(e, t, i=!1) {
        let r = new Pe;
        r.updateFromServerResponse(t);
        let s = new n({
            uid: t.localId,
            auth: e,
            stsTokenManager: r,
            isAnonymous: i
        });
        return await ot(s),
        s
    }
    static async _fromGetAccountInfoResponse(e, t, i) {
        let r = t.users[0];
        p(r.localId !== void 0, "internal-error");
        let s = r.providerUserInfo !== void 0 ? Ei(r.providerUserInfo) : []
          , a = !(r.email && r.passwordHash) && !s?.length
          , o = new Pe;
        o.updateFromIdToken(i);
        let c = new n({
            uid: r.localId,
            auth: e,
            stsTokenManager: o,
            isAnonymous: a
        })
          , h = {
            uid: r.localId,
            displayName: r.displayName || null,
            photoURL: r.photoUrl || null,
            email: r.email || null,
            emailVerified: r.emailVerified || !1,
            phoneNumber: r.phoneNumber || null,
            tenantId: r.tenantId || null,
            providerData: s,
            metadata: new ke(r.createdAt,r.lastLoginAt),
            isAnonymous: !(r.email && r.passwordHash) && !s?.length
        };
        return Object.assign(c, h),
        c
    }
}
;
var Yn = new Map;
function B(n) {
    K(n instanceof Function, "Expected a class definition");
    let e = Yn.get(n);
    return e ? (K(e instanceof n, "Instance stored in cache mismatched with class"),
    e) : (e = new n,
    Yn.set(n, e),
    e)
}
var ct = class {
    constructor() {
        this.type = "NONE",
        this.storage = {}
    }
    async _isAvailable() {
        return !0
    }
    async _set(e, t) {
        this.storage[e] = t
    }
    async _get(e) {
        let t = this.storage[e];
        return t === void 0 ? null : t
    }
    async _remove(e) {
        delete this.storage[e]
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
}
;
ct.type = "NONE";
var Zt = ct;
function Qe(n, e, t) {
    return `firebase:${n}:${e}:${t}`
}
var Se = class n {
    constructor(e, t, i) {
        this.persistence = e,
        this.auth = t,
        this.userKey = i;
        let {config: r, name: s} = this.auth;
        this.fullUserKey = Qe(this.userKey, r.apiKey, s),
        this.fullPersistenceKey = Qe("persistence", r.apiKey, s),
        this.boundEventHandler = t._onStorageEvent.bind(t);
        try {
            this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
        } catch {}
    }
    setCurrentUser(e) {
        return this.persistence._set(this.fullUserKey, e.toJSON())
    }
    async getCurrentUser() {
        let e = await this.persistence._get(this.fullUserKey);
        if (!e)
            return null;
        if (typeof e == "string") {
            let t = await at(this.auth, {
                idToken: e
            }).catch( () => {}
            );
            return t ? Z._fromGetAccountInfoResponse(this.auth, t, e) : null
        }
        return Z._fromJSON(this.auth, e)
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey)
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }
    async setPersistence(e) {
        if (this.persistence === e)
            return;
        let t = await this.getCurrentUser();
        if (await this.removeCurrentUser(),
        this.persistence = e,
        t)
            return this.setCurrentUser(t)
    }
    delete() {
        try {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
        } catch {}
    }
    static async create(e, t, i="authUser") {
        if (!t.length)
            return new n(B(Zt),e,i);
        let r = (await Promise.all(t.map(async h => {
            try {
                if (await h._isAvailable())
                    return h
            } catch {
                return
            }
        }
        ))).filter(h => h)
          , s = r[0] || B(Zt)
          , a = Qe(i, e.config.apiKey, e.name)
          , o = null;
        for (let h of t)
            try {
                let d = await h._get(a);
                if (d) {
                    let g;
                    if (typeof d == "string") {
                        let I = await at(e, {
                            idToken: d
                        }).catch( () => {}
                        );
                        if (!I)
                            break;
                        g = await Z._fromGetAccountInfoResponse(e, I, d)
                    } else
                        g = Z._fromJSON(e, d);
                    h !== s && (o = g),
                    s = h;
                    break
                }
            } catch {}
        let c = r.filter(h => h._shouldAllowMigration);
        return !s._shouldAllowMigration || !c.length ? new n(s,e,i) : (s = c[0],
        o && await s._set(a, o.toJSON()),
        await Promise.all(t.map(async h => {
            if (h !== s)
                try {
                    await h._remove(a)
                } catch {}
        }
        )),
        new n(s,e,i))
    }
}
;
function $n(n) {
    let e = n.toLowerCase();
    if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
        return "Opera";
    if (wi(e))
        return "IEMobile";
    if (e.includes("msie") || e.includes("trident/"))
        return "IE";
    if (e.includes("edge/"))
        return "Edge";
    if (yi(e))
        return "Firefox";
    if (e.includes("silk/"))
        return "Silk";
    if (Ri(e))
        return "Blackberry";
    if (Pi(e))
        return "Webos";
    if (Ii(e))
        return "Safari";
    if ((e.includes("chrome/") || Ti(e)) && !e.includes("edge/"))
        return "Chrome";
    if (vi(e))
        return "Android";
    {
        let t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/
          , i = n.match(t);
        if (i?.length === 2)
            return i[1]
    }
    return "Other"
}
function yi(n=O()) {
    return /firefox\//i.test(n)
}
function Ii(n=O()) {
    let e = n.toLowerCase();
    return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android")
}
function Ti(n=O()) {
    return /crios\//i.test(n)
}
function wi(n=O()) {
    return /iemobile/i.test(n)
}
function vi(n=O()) {
    return /android/i.test(n)
}
function Ri(n=O()) {
    return /blackberry/i.test(n)
}
function Pi(n=O()) {
    return /webos/i.test(n)
}
function gn(n=O()) {
    return /iphone|ipad|ipod/i.test(n) || /macintosh/i.test(n) && /mobile/i.test(n)
}
function vr(n=O()) {
    return gn(n) && !!window.navigator?.standalone
}
function Rr() {
    return Ln() && document.documentMode === 10
}
function Si(n=O()) {
    return gn(n) || vi(n) || Pi(n) || Ri(n) || /windows phone/i.test(n) || wi(n)
}
function Ai(n, e=[]) {
    let t;
    switch (n) {
    case "Browser":
        t = $n(O());
        break;
    case "Worker":
        t = `${$n(O())}-${n}`;
        break;
    default:
        t = n
    }
    let i = e.length ? e.join(",") : "FirebaseCore-web";
    return `${t}/JsCore/${pe}/${i}`
}
var Qt = class {
    constructor(e) {
        this.auth = e,
        this.queue = []
    }
    pushCallback(e, t) {
        let i = s => new Promise( (a, o) => {
            try {
                let c = e(s);
                a(c)
            } catch (c) {
                o(c)
            }
        }
        );
        i.onAbort = t,
        this.queue.push(i);
        let r = this.queue.length - 1;
        return () => {
            this.queue[r] = () => Promise.resolve()
        }
    }
    async runMiddleware(e) {
        if (this.auth.currentUser === e)
            return;
        let t = [];
        try {
            for (let i of this.queue)
                await i(e),
                i.onAbort && t.push(i.onAbort)
        } catch (i) {
            t.reverse();
            for (let r of t)
                try {
                    r()
                } catch {}
            throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: i?.message
            })
        }
    }
}
;
async function Pr(n, e={}) {
    return M(n, "GET", "/v2/passwordPolicy", S(n, e))
}
var Sr = 6
  , en = class {
    constructor(e) {
        let t = e.customStrengthOptions;
        this.customStrengthOptions = {},
        this.customStrengthOptions.minPasswordLength = t.minPasswordLength ?? Sr,
        t.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = t.maxPasswordLength),
        t.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = t.containsLowercaseCharacter),
        t.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = t.containsUppercaseCharacter),
        t.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = t.containsNumericCharacter),
        t.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = t.containsNonAlphanumericCharacter),
        this.enforcementState = e.enforcementState,
        this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"),
        this.allowedNonAlphanumericCharacters = e.allowedNonAlphanumericCharacters?.join("") ?? "",
        this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1,
        this.schemaVersion = e.schemaVersion
    }
    validatePassword(e) {
        let t = {
            isValid: !0,
            passwordPolicy: this
        };
        return this.validatePasswordLengthOptions(e, t),
        this.validatePasswordCharacterOptions(e, t),
        t.isValid && (t.isValid = t.meetsMinPasswordLength ?? !0),
        t.isValid && (t.isValid = t.meetsMaxPasswordLength ?? !0),
        t.isValid && (t.isValid = t.containsLowercaseLetter ?? !0),
        t.isValid && (t.isValid = t.containsUppercaseLetter ?? !0),
        t.isValid && (t.isValid = t.containsNumericCharacter ?? !0),
        t.isValid && (t.isValid = t.containsNonAlphanumericCharacter ?? !0),
        t
    }
    validatePasswordLengthOptions(e, t) {
        let i = this.customStrengthOptions.minPasswordLength
          , r = this.customStrengthOptions.maxPasswordLength;
        i && (t.meetsMinPasswordLength = e.length >= i),
        r && (t.meetsMaxPasswordLength = e.length <= r)
    }
    validatePasswordCharacterOptions(e, t) {
        this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
        let i;
        for (let r = 0; r < e.length; r++)
            i = e.charAt(r),
            this.updatePasswordCharacterOptionsStatuses(t, i >= "a" && i <= "z", i >= "A" && i <= "Z", i >= "0" && i <= "9", this.allowedNonAlphanumericCharacters.includes(i))
    }
    updatePasswordCharacterOptionsStatuses(e, t, i, r, s) {
        this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
        this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = i)),
        this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = r)),
        this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = s))
    }
}
;
var tn = class {
    constructor(e, t, i, r) {
        this.app = e,
        this.heartbeatServiceProvider = t,
        this.appCheckServiceProvider = i,
        this.config = r,
        this.currentUser = null,
        this.emulatorConfig = null,
        this.operations = Promise.resolve(),
        this.authStateSubscription = new ht(this),
        this.idTokenSubscription = new ht(this),
        this.beforeStateQueue = new Qt(this),
        this.redirectUser = null,
        this.isProactiveRefreshEnabled = !1,
        this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1,
        this._canInitEmulator = !0,
        this._isInitialized = !1,
        this._deleted = !1,
        this._initializationPromise = null,
        this._popupRedirectResolver = null,
        this._errorFactory = ui,
        this._agentRecaptchaConfig = null,
        this._tenantRecaptchaConfigs = {},
        this._projectPasswordPolicy = null,
        this._tenantPasswordPolicies = {},
        this._resolvePersistenceManagerAvailable = void 0,
        this.lastNotifiedUid = void 0,
        this.languageCode = null,
        this.tenantId = null,
        this.settings = {
            appVerificationDisabledForTesting: !1
        },
        this.frameworks = [],
        this.name = e.name,
        this.clientVersion = r.sdkClientVersion,
        this._persistenceManagerAvailable = new Promise(s => this._resolvePersistenceManagerAvailable = s)
    }
    _initializeWithPersistence(e, t) {
        return t && (this._popupRedirectResolver = B(t)),
        this._initializationPromise = this.queue(async () => {
            if (!this._deleted) {
                try {
                    this.persistenceManager = await Se.create(this, e)
                } catch (i) {
                    Xe(`Failed to initialize persistence: ${i}`),
                    this.persistenceManager = await Se.create(this, [])
                } finally {
                    this._resolvePersistenceManagerAvailable?.()
                }
                if (!this._deleted) {
                    if (this._popupRedirectResolver?._shouldInitProactively)
                        try {
                            await this._popupRedirectResolver._initialize(this)
                        } catch {}
                    try {
                        await this.initializeCurrentUser(t)
                    } catch (i) {
                        Xe(`Failed to initialize current user: ${i}`),
                        await this.directlySetCurrentUser(null).catch( () => {}
                        )
                    }
                    this.lastNotifiedUid = this.currentUser?.uid || null,
                    !this._deleted && (this._isInitialized = !0)
                }
            }
        }
        ),
        this._initializationPromise
    }
    async _onStorageEvent() {
        if (this._deleted)
            return;
        let e = await this.assertedPersistence.getCurrentUser();
        if (!(!this.currentUser && !e)) {
            if (this.currentUser && e && this.currentUser.uid === e.uid) {
                this._currentUser._assign(e),
                await this.currentUser.getIdToken();
                return
            }
            await this._updateCurrentUser(e, !0)
        }
    }
    async initializeCurrentUserFromIdToken(e) {
        try {
            let t = await at(this, {
                idToken: e
            })
              , i = await Z._fromGetAccountInfoResponse(this, t, e);
            await this.directlySetCurrentUser(i)
        } catch (t) {
            console.warn("FirebaseServerApp could not login user with provided authIdToken: ", t),
            await this.directlySetCurrentUser(null)
        }
    }
    async initializeCurrentUser(e) {
        if (D(this.app)) {
            let s = this.app.settings.authIdToken;
            return s ? new Promise(a => {
                setTimeout( () => this.initializeCurrentUserFromIdToken(s).then(a, a))
            }
            ) : this.directlySetCurrentUser(null)
        }
        let t = await this.assertedPersistence.getCurrentUser()
          , i = t
          , r = !1;
        if (e && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            let s = this.redirectUser?._redirectEventId
              , a = i?._redirectEventId
              , o = await this.tryRedirectSignIn(e);
            (!s || s === a) && o?.user && (i = o.user,
            r = !0)
        }
        if (!i)
            return this.directlySetCurrentUser(null);
        if (!i._redirectEventId) {
            if (r)
                try {
                    await this.beforeStateQueue.runMiddleware(i)
                } catch (s) {
                    i = t,
                    this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(s))
                }
            return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
        }
        return p(this._popupRedirectResolver, this, "argument-error"),
        await this.getOrInitRedirectPersistenceManager(),
        this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i)
    }
    async tryRedirectSignIn(e) {
        let t = null;
        try {
            t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
        } catch {
            await this._setRedirectUser(null)
        }
        return t
    }
    async reloadAndSetCurrentUserOrClear(e) {
        try {
            await ot(e)
        } catch (t) {
            if (t?.code !== "auth/network-request-failed")
                return this.directlySetCurrentUser(null)
        }
        return this.directlySetCurrentUser(e)
    }
    useDeviceLanguage() {
        this.languageCode = pr()
    }
    async _delete() {
        this._deleted = !0
    }
    async updateCurrentUser(e) {
        if (D(this.app))
            return Promise.reject(q(this));
        let t = e ? V(e) : null;
        return t && p(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"),
        this._updateCurrentUser(t && t._clone(this))
    }
    async _updateCurrentUser(e, t=!1) {
        if (!this._deleted)
            return e && p(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
            t || await this.beforeStateQueue.runMiddleware(e),
            this.queue(async () => {
                await this.directlySetCurrentUser(e),
                this.notifyAuthListeners()
            }
            )
    }
    async signOut() {
        return D(this.app) ? Promise.reject(q(this)) : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null),
        this._updateCurrentUser(null, !0))
    }
    setPersistence(e) {
        return D(this.app) ? Promise.reject(q(this)) : this.queue(async () => {
            await this.assertedPersistence.setPersistence(B(e))
        }
        )
    }
    _getRecaptchaConfig() {
        return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
    }
    async validatePassword(e) {
        this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
        let t = this._getPasswordPolicyInternal();
        return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : t.validatePassword(e)
    }
    _getPasswordPolicyInternal() {
        return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
    }
    async _updatePasswordPolicy() {
        let e = await Pr(this)
          , t = new en(e);
        this.tenantId === null ? this._projectPasswordPolicy = t : this._tenantPasswordPolicies[this.tenantId] = t
    }
    _getPersistenceType() {
        return this.assertedPersistence.persistence.type
    }
    _getPersistence() {
        return this.assertedPersistence.persistence
    }
    _updateErrorMap(e) {
        this._errorFactory = new qe("auth","Firebase",e())
    }
    onAuthStateChanged(e, t, i) {
        return this.registerStateListener(this.authStateSubscription, e, t, i)
    }
    beforeAuthStateChanged(e, t) {
        return this.beforeStateQueue.pushCallback(e, t)
    }
    onIdTokenChanged(e, t, i) {
        return this.registerStateListener(this.idTokenSubscription, e, t, i)
    }
    authStateReady() {
        return new Promise( (e, t) => {
            if (this.currentUser)
                e();
            else {
                let i = this.onAuthStateChanged( () => {
                    i(),
                    e()
                }
                , t)
            }
        }
        )
    }
    async revokeAccessToken(e) {
        if (this.currentUser) {
            let t = await this.currentUser.getIdToken()
              , i = {
                providerId: "apple.com",
                tokenType: "ACCESS_TOKEN",
                token: e,
                idToken: t
            };
            this.tenantId != null && (i.tenantId = this.tenantId),
            await wr(this, i)
        }
    }
    toJSON() {
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: this._currentUser?.toJSON()
        }
    }
    async _setRedirectUser(e, t) {
        let i = await this.getOrInitRedirectPersistenceManager(t);
        return e === null ? i.removeCurrentUser() : i.setCurrentUser(e)
    }
    async getOrInitRedirectPersistenceManager(e) {
        if (!this.redirectPersistenceManager) {
            let t = e && B(e) || this._popupRedirectResolver;
            p(t, this, "argument-error"),
            this.redirectPersistenceManager = await Se.create(this, [B(t._redirectPersistence)], "redirectUser"),
            this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
        }
        return this.redirectPersistenceManager
    }
    async _redirectUserForId(e) {
        return this._isInitialized && await this.queue(async () => {}
        ),
        this._currentUser?._redirectEventId === e ? this._currentUser : this.redirectUser?._redirectEventId === e ? this.redirectUser : null
    }
    async _persistUserIfCurrent(e) {
        if (e === this.currentUser)
            return this.queue(async () => this.directlySetCurrentUser(e))
    }
    _notifyListenersIfCurrent(e) {
        e === this.currentUser && this.notifyAuthListeners()
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0,
        this.currentUser && this._currentUser._startProactiveRefresh()
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1,
        this.currentUser && this._currentUser._stopProactiveRefresh()
    }
    get _currentUser() {
        return this.currentUser
    }
    notifyAuthListeners() {
        if (!this._isInitialized)
            return;
        this.idTokenSubscription.next(this.currentUser);
        let e = this.currentUser?.uid ?? null;
        this.lastNotifiedUid !== e && (this.lastNotifiedUid = e,
        this.authStateSubscription.next(this.currentUser))
    }
    registerStateListener(e, t, i, r) {
        if (this._deleted)
            return () => {}
            ;
        let s = typeof t == "function" ? t : t.next.bind(t)
          , a = !1
          , o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        if (p(o, this, "internal-error"),
        o.then( () => {
            a || s(this.currentUser)
        }
        ).catch(c => {
            if (!a)
                if (typeof t != "function" && t.error)
                    t.error(c);
                else if (i)
                    i(c);
                else
                    throw c
        }
        ),
        typeof t == "function") {
            let c = e.addObserver(t, i, r);
            return () => {
                a = !0,
                c()
            }
        } else {
            let c = e.addObserver(t);
            return () => {
                a = !0,
                c()
            }
        }
    }
    async directlySetCurrentUser(e) {
        if (this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(),
        e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
        this.currentUser = e,
        this.persistenceManager)
            try {
                e ? await this.persistenceManager.setCurrentUser(e) : await this.persistenceManager.removeCurrentUser()
            } catch (t) {
                let i = t?.message || String(t)
                  , r = St(this, "internal-error", `An internal AuthError has occurred: ${i}`);
                throw r.customData = {
                    originalError: t
                },
                r
            }
    }
    queue(e) {
        return this.operations = this.operations.then(e, e),
        this.operations
    }
    get assertedPersistence() {
        return p(this.persistenceManager, this, "internal-error"),
        this.persistenceManager
    }
    _logFramework(e) {
        !e || this.frameworks.includes(e) || (this.frameworks.push(e),
        this.frameworks.sort(),
        this.clientVersion = Ai(this.config.clientPlatform, this._getFrameworks()))
    }
    _getFrameworks() {
        return this.frameworks
    }
    async _getAdditionalHeaders() {
        let e = {
            "X-Client-Version": this.clientVersion
        };
        this.app.options.appId && (e["X-Firebase-gmpid"] = this.app.options.appId);
        let t = await this.heartbeatServiceProvider.getImmediate({
            optional: !0
        })?.getHeartbeatsHeader();
        t && (e["X-Firebase-Client"] = t);
        let i = await this._getAppCheckToken();
        return i && (e["X-Firebase-AppCheck"] = i),
        e
    }
    async _getAppCheckToken() {
        if (D(this.app) && this.app.settings.appCheckToken)
            return this.app.settings.appCheckToken;
        let e = await this.appCheckServiceProvider.getImmediate({
            optional: !0
        })?.getToken();
        return e?.error && Xe(`Error while retrieving App Check token: ${e.error}`),
        e?.token
    }
}
;
function G(n) {
    return V(n)
}
var ht = class {
    constructor(e) {
        this.auth = e,
        this.observer = null,
        this.addObserver = Un(t => this.observer = t)
    }
    get next() {
        return p(this.observer, this.auth, "internal-error"),
        this.observer.next.bind(this.observer)
    }
}
;
var At = {
    async loadJS() {
        throw new Error("Unable to load external scripts")
    },
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: "",
    gapiScript: ""
};
function Ar(n) {
    At = n
}
function bi(n) {
    return At.loadJS(n)
}
function br() {
    return At.recaptchaEnterpriseScript
}
function kr() {
    return At.gapiScript
}
function ki(n) {
    return `__${n}${Math.floor(Math.random() * 1e6)}`
}
var nn = class {
    constructor() {
        this.enterprise = new rn
    }
    ready(e) {
        e()
    }
    execute(e, t) {
        return Promise.resolve("token")
    }
    render(e, t) {
        return ""
    }
}
  , rn = class {
    ready(e) {
        e()
    }
    execute(e, t) {
        return Promise.resolve("token")
    }
    render(e, t) {
        return ""
    }
}
;
var Mr = "recaptcha-enterprise"
  , Ae = "NO_RECAPTCHA"
  , Jn = "onFirebaseAuthREInstanceReady"
  , Me = class n {
    constructor(e) {
        this.type = Mr,
        this.auth = G(e)
    }
    async verify(e="verify", t=!1) {
        async function i(s) {
            if (!t) {
                if (s.tenantId == null && s._agentRecaptchaConfig != null)
                    return s._agentRecaptchaConfig.siteKey;
                if (s.tenantId != null && s._tenantRecaptchaConfigs[s.tenantId] !== void 0)
                    return s._tenantRecaptchaConfigs[s.tenantId].siteKey
            }
            return new Promise(async (a, o) => {
                mi(s, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                }).then(c => {
                    if (c.recaptchaKey === void 0)
                        o(new Error("recaptcha Enterprise site key undefined"));
                    else {
                        let h = new st(c);
                        return s.tenantId == null ? s._agentRecaptchaConfig = h : s._tenantRecaptchaConfigs[s.tenantId] = h,
                        a(h.siteKey)
                    }
                }
                ).catch(c => {
                    o(c)
                }
                )
            }
            )
        }
        function r(s, a, o) {
            let c = window.grecaptcha;
            qn(c) ? c.enterprise.ready( () => {
                c.enterprise.execute(s, {
                    action: e
                }).then(h => {
                    a(h)
                }
                ).catch( () => {
                    a(Ae)
                }
                )
            }
            ) : o(Error("No reCAPTCHA enterprise script loaded."))
        }
        return this.auth.settings.appVerificationDisabledForTesting ? new nn().execute("siteKey", {
            action: "verify"
        }) : new Promise( (s, a) => {
            i(this.auth).then(async o => {
                if (!t && qn(window.grecaptcha) && n.scriptInjectionDeferred)
                    await n.scriptInjectionDeferred.promise,
                    r(o, s, a);
                else {
                    if (typeof window > "u") {
                        a(new Error("RecaptchaVerifier is only supported in browser"));
                        return
                    }
                    let c = br();
                    c.length !== 0 && (c += o + `&onload=${Jn}`),
                    n.scriptInjectionDeferred = new Mn,
                    window[Jn] = () => {
                        n.scriptInjectionDeferred?.resolve()
                    }
                    ,
                    bi(c).then( () => n.scriptInjectionDeferred?.promise).then( () => {
                        r(o, s, a)
                    }
                    ).catch(h => {
                        a(h)
                    }
                    )
                }
            }
            ).catch(o => {
                a(o)
            }
            )
        }
        )
    }
}
;
Me.scriptInjectionDeferred = null;
async function we(n, e, t, i=!1, r=!1) {
    let s = new Me(n), a;
    if (r)
        a = Ae;
    else
        try {
            a = await s.verify(t)
        } catch {
            a = await s.verify(t, !0)
        }
    let o = {
        ...e
    };
    if (t === "mfaSmsEnrollment" || t === "mfaSmsSignIn") {
        if ("phoneEnrollmentInfo" in o) {
            let c = o.phoneEnrollmentInfo.phoneNumber
              , h = o.phoneEnrollmentInfo.recaptchaToken;
            Object.assign(o, {
                phoneEnrollmentInfo: {
                    phoneNumber: c,
                    recaptchaToken: h,
                    captchaResponse: a,
                    clientType: "CLIENT_TYPE_WEB",
                    recaptchaVersion: "RECAPTCHA_ENTERPRISE"
                }
            })
        } else if ("phoneSignInInfo" in o) {
            let c = o.phoneSignInInfo.recaptchaToken;
            Object.assign(o, {
                phoneSignInInfo: {
                    recaptchaToken: c,
                    captchaResponse: a,
                    clientType: "CLIENT_TYPE_WEB",
                    recaptchaVersion: "RECAPTCHA_ENTERPRISE"
                }
            })
        }
        return o
    }
    return i ? Object.assign(o, {
        captchaResp: a
    }) : Object.assign(o, {
        captchaResponse: a
    }),
    Object.assign(o, {
        clientType: "CLIENT_TYPE_WEB"
    }),
    Object.assign(o, {
        recaptchaVersion: "RECAPTCHA_ENTERPRISE"
    }),
    o
}
async function ne(n, e, t, i, r) {
    if (r === "EMAIL_PASSWORD_PROVIDER")
        if (n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
            let s = await we(n, e, t, t === "getOobCode");
            return i(n, s)
        } else
            return i(n, e).catch(async s => {
                if (s.code === "auth/missing-recaptcha-token") {
                    console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
                    let a = await we(n, e, t, t === "getOobCode");
                    return i(n, a)
                } else
                    return Promise.reject(s)
            }
            );
    else if (r === "PHONE_PROVIDER")
        if (n._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")) {
            let s = await we(n, e, t);
            return i(n, s).catch(async a => {
                if (n._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER") === "AUDIT" && (a.code === "auth/missing-recaptcha-token" || a.code === "auth/invalid-app-credential")) {
                    console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);
                    let o = await we(n, e, t, !1, !0);
                    return i(n, o)
                }
                return Promise.reject(a)
            }
            )
        } else {
            let s = await we(n, e, t, !1, !0);
            return i(n, s)
        }
    else
        return Promise.reject(r + " provider is not supported.")
}
async function Cr(n) {
    let e = G(n)
      , t = await mi(e, {
        clientType: "CLIENT_TYPE_WEB",
        version: "RECAPTCHA_ENTERPRISE"
    })
      , i = new st(t);
    e.tenantId == null ? e._agentRecaptchaConfig = i : e._tenantRecaptchaConfigs[e.tenantId] = i,
    i.isAnyProviderEnabled() && new Me(e).verify()
}
function bt(n, e) {
    let t = Gt(n, "auth");
    if (t.isInitialized()) {
        let r = t.getImmediate()
          , s = t.getOptions();
        if (Ke(s, e ?? {}))
            return r;
        H(r, "already-initialized")
    }
    return t.initialize({
        options: e
    })
}
function Or(n, e) {
    let t = e?.persistence || []
      , i = (Array.isArray(t) ? t : [t]).map(B);
    e?.errorMap && n._updateErrorMap(e.errorMap),
    n._initializeWithPersistence(i, e?.popupRedirectResolver)
}
function Mi(n, e, t) {
    let i = G(n);
    p(/^https?:\/\//.test(e), i, "invalid-emulator-scheme");
    let r = !!t?.disableWarnings
      , s = Ci(e)
      , {host: a, port: o} = Nr(e)
      , c = o === null ? "" : `:${o}`
      , h = {
        url: `${s}//${a}${c}/`
    }
      , d = Object.freeze({
        host: a,
        port: o,
        protocol: s.replace(":", ""),
        options: Object.freeze({
            disableWarnings: r
        })
    });
    if (!i._canInitEmulator) {
        p(i.config.emulator && i.emulatorConfig, i, "emulator-config-failed"),
        p(Ke(h, i.config.emulator) && Ke(d, i.emulatorConfig), i, "emulator-config-failed");
        return
    }
    i.config.emulator = h,
    i.emulatorConfig = d,
    i.settings.appVerificationDisabledForTesting = !0,
    Ye(a) ? Hn(`${s}//${a}${c}`) : r || Dr()
}
function Ci(n) {
    let e = n.indexOf(":");
    return e < 0 ? "" : n.substr(0, e + 1)
}
function Nr(n) {
    let e = Ci(n)
      , t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
    if (!t)
        return {
            host: "",
            port: null
        };
    let i = t[2].split("@").pop() || ""
      , r = /^(\[[^\]]+\])(:|$)/.exec(i);
    if (r) {
        let s = r[1];
        return {
            host: s,
            port: Xn(i.substr(s.length + 1))
        }
    } else {
        let[s,a] = i.split(":");
        return {
            host: s,
            port: Xn(a)
        }
    }
}
function Xn(n) {
    if (!n)
        return null;
    let e = Number(n);
    return isNaN(e) ? null : e
}
function Dr() {
    function n() {
        let e = document.createElement("p")
          , t = e.style;
        e.innerText = "Running in emulator mode. Do not use with production credentials.",
        t.position = "fixed",
        t.width = "100%",
        t.backgroundColor = "#ffffff",
        t.border = ".1em solid #000000",
        t.color = "#b50000",
        t.bottom = "0px",
        t.left = "0px",
        t.margin = "0px",
        t.zIndex = "10000",
        t.textAlign = "center",
        e.classList.add("firebase-emulator-warning"),
        document.body.appendChild(e)
    }
    typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),
    typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", n) : n())
}
var re = class {
    constructor(e, t) {
        this.providerId = e,
        this.signInMethod = t
    }
    toJSON() {
        return W("not implemented")
    }
    _getIdTokenResponse(e) {
        return W("not implemented")
    }
    _linkToIdToken(e, t) {
        return W("not implemented")
    }
    _getReauthenticationResolver(e) {
        return W("not implemented")
    }
}
;
async function Lr(n, e) {
    return M(n, "POST", "/v1/accounts:signUp", e)
}
async function xr(n, e) {
    return Q(n, "POST", "/v1/accounts:signInWithPassword", S(n, e))
}
async function Ur(n, e) {
    return M(n, "POST", "/v1/accounts:sendOobCode", S(n, e))
}
async function Hr(n, e) {
    return Ur(n, e)
}
async function Vr(n, e) {
    return Q(n, "POST", "/v1/accounts:signInWithEmailLink", S(n, e))
}
async function Fr(n, e) {
    return Q(n, "POST", "/v1/accounts:signInWithEmailLink", S(n, e))
}
var Ce = class n extends re {
    constructor(e, t, i, r=null) {
        super("password", i),
        this._email = e,
        this._password = t,
        this._tenantId = r
    }
    static _fromEmailAndPassword(e, t) {
        return new n(e,t,"password")
    }
    static _fromEmailAndCode(e, t, i=null) {
        return new n(e,t,"emailLink",i)
    }
    toJSON() {
        return {
            email: this._email,
            password: this._password,
            signInMethod: this.signInMethod,
            tenantId: this._tenantId
        }
    }
    static fromJSON(e) {
        let t = typeof e == "string" ? JSON.parse(e) : e;
        if (t?.email && t?.password) {
            if (t.signInMethod === "password")
                return this._fromEmailAndPassword(t.email, t.password);
            if (t.signInMethod === "emailLink")
                return this._fromEmailAndCode(t.email, t.password, t.tenantId)
        }
        return null
    }
    async _getIdTokenResponse(e) {
        switch (this.signInMethod) {
        case "password":
            let t = {
                returnSecureToken: !0,
                email: this._email,
                password: this._password,
                clientType: "CLIENT_TYPE_WEB"
            };
            return ne(e, t, "signInWithPassword", xr, "EMAIL_PASSWORD_PROVIDER");
        case "emailLink":
            return Vr(e, {
                email: this._email,
                oobCode: this._password
            });
        default:
            H(e, "internal-error")
        }
    }
    async _linkToIdToken(e, t) {
        switch (this.signInMethod) {
        case "password":
            let i = {
                idToken: t,
                returnSecureToken: !0,
                email: this._email,
                password: this._password,
                clientType: "CLIENT_TYPE_WEB"
            };
            return ne(e, i, "signUpPassword", Lr, "EMAIL_PASSWORD_PROVIDER");
        case "emailLink":
            return Fr(e, {
                idToken: t,
                email: this._email,
                oobCode: this._password
            });
        default:
            H(e, "internal-error")
        }
    }
    _getReauthenticationResolver(e) {
        return this._getIdTokenResponse(e)
    }
}
;
async function fe(n, e) {
    return Q(n, "POST", "/v1/accounts:signInWithIdp", S(n, e))
}
var Gr = "http://localhost"
  , se = class n extends re {
    constructor() {
        super(...arguments),
        this.pendingToken = null
    }
    static _fromParams(e) {
        let t = new n(e.providerId,e.signInMethod);
        return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken),
        e.accessToken && (t.accessToken = e.accessToken),
        e.nonce && !e.pendingToken && (t.nonce = e.nonce),
        e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken,
        t.secret = e.oauthTokenSecret) : H("argument-error"),
        t
    }
    toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        }
    }
    static fromJSON(e) {
        let t = typeof e == "string" ? JSON.parse(e) : e
          , {providerId: i, signInMethod: r, ...s} = t;
        if (!i || !r)
            return null;
        let a = new n(i,r);
        return a.idToken = s.idToken || void 0,
        a.accessToken = s.accessToken || void 0,
        a.secret = s.secret,
        a.nonce = s.nonce,
        a.pendingToken = s.pendingToken || null,
        a
    }
    _getIdTokenResponse(e) {
        let t = this.buildRequest();
        return fe(e, t)
    }
    _linkToIdToken(e, t) {
        let i = this.buildRequest();
        return i.idToken = t,
        fe(e, i)
    }
    _getReauthenticationResolver(e) {
        let t = this.buildRequest();
        return t.autoCreate = !1,
        fe(e, t)
    }
    buildRequest() {
        let e = {
            requestUri: Gr,
            returnSecureToken: !0
        };
        if (this.pendingToken)
            e.pendingToken = this.pendingToken;
        else {
            let t = {};
            this.idToken && (t.id_token = this.idToken),
            this.accessToken && (t.access_token = this.accessToken),
            this.secret && (t.oauth_token_secret = this.secret),
            t.providerId = this.providerId,
            this.nonce && !this.pendingToken && (t.nonce = this.nonce),
            e.postBody = le(t)
        }
        return e
    }
}
;
async function Zn(n, e) {
    return M(n, "POST", "/v1/accounts:sendVerificationCode", S(n, e))
}
async function Wr(n, e) {
    return Q(n, "POST", "/v1/accounts:signInWithPhoneNumber", S(n, e))
}
async function zr(n, e) {
    let t = await Q(n, "POST", "/v1/accounts:signInWithPhoneNumber", S(n, e));
    if (t.temporaryProof)
        throw ve(n, "account-exists-with-different-credential", t);
    return t
}
var jr = {
    USER_NOT_FOUND: "user-not-found"
};
async function Br(n, e) {
    let t = {
        ...e,
        operation: "REAUTH"
    };
    return Q(n, "POST", "/v1/accounts:signInWithPhoneNumber", S(n, t), jr)
}
var Oe = class n extends re {
    constructor(e) {
        super("phone", "phone"),
        this.params = e
    }
    static _fromVerification(e, t) {
        return new n({
            verificationId: e,
            verificationCode: t
        })
    }
    static _fromTokenResponse(e, t) {
        return new n({
            phoneNumber: e,
            temporaryProof: t
        })
    }
    _getIdTokenResponse(e) {
        return Wr(e, this._makeVerificationRequest())
    }
    _linkToIdToken(e, t) {
        return zr(e, {
            idToken: t,
            ...this._makeVerificationRequest()
        })
    }
    _getReauthenticationResolver(e) {
        return Br(e, this._makeVerificationRequest())
    }
    _makeVerificationRequest() {
        let {temporaryProof: e, phoneNumber: t, verificationId: i, verificationCode: r} = this.params;
        return e && t ? {
            temporaryProof: e,
            phoneNumber: t
        } : {
            sessionInfo: i,
            code: r
        }
    }
    toJSON() {
        let e = {
            providerId: this.providerId
        };
        return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber),
        this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof),
        this.params.verificationCode && (e.verificationCode = this.params.verificationCode),
        this.params.verificationId && (e.verificationId = this.params.verificationId),
        e
    }
    static fromJSON(e) {
        typeof e == "string" && (e = JSON.parse(e));
        let {verificationId: t, verificationCode: i, phoneNumber: r, temporaryProof: s} = e;
        return !i && !t && !r && !s ? null : new n({
            verificationId: t,
            verificationCode: i,
            phoneNumber: r,
            temporaryProof: s
        })
    }
}
;
function qr(n) {
    switch (n) {
    case "recoverEmail":
        return "RECOVER_EMAIL";
    case "resetPassword":
        return "PASSWORD_RESET";
    case "signIn":
        return "EMAIL_SIGNIN";
    case "verifyEmail":
        return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
        return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
        return "REVERT_SECOND_FACTOR_ADDITION";
    default:
        return null
    }
}
function Kr(n) {
    let e = de(ue(n)).link
      , t = e ? de(ue(e)).deep_link_id : null
      , i = de(ue(n)).deep_link_id;
    return (i ? de(ue(i)).link : null) || i || t || e || n
}
var lt = class n {
    constructor(e) {
        let t = de(ue(e))
          , i = t.apiKey ?? null
          , r = t.oobCode ?? null
          , s = qr(t.mode ?? null);
        p(i && r && s, "argument-error"),
        this.apiKey = i,
        this.operation = s,
        this.code = r,
        this.continueUrl = t.continueUrl ?? null,
        this.languageCode = t.lang ?? null,
        this.tenantId = t.tenantId ?? null
    }
    static parseLink(e) {
        let t = Kr(e);
        try {
            return new n(t)
        } catch {
            return null
        }
    }
}
;
var ae = class n {
    constructor() {
        this.providerId = n.PROVIDER_ID
    }
    static credential(e, t) {
        return Ce._fromEmailAndPassword(e, t)
    }
    static credentialWithLink(e, t) {
        let i = lt.parseLink(t);
        return p(i, "argument-error"),
        Ce._fromEmailAndCode(e, i.code, i.tenantId)
    }
}
;
ae.PROVIDER_ID = "password";
ae.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
ae.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
var Ne = class {
    constructor(e) {
        this.providerId = e,
        this.defaultLanguageCode = null,
        this.customParameters = {}
    }
    setDefaultLanguage(e) {
        this.defaultLanguageCode = e
    }
    setCustomParameters(e) {
        return this.customParameters = e,
        this
    }
    getCustomParameters() {
        return this.customParameters
    }
}
;
var oe = class extends Ne {
    constructor() {
        super(...arguments),
        this.scopes = []
    }
    addScope(e) {
        return this.scopes.includes(e) || this.scopes.push(e),
        this
    }
    getScopes() {
        return [...this.scopes]
    }
}
;
var De = class n extends oe {
    constructor() {
        super("facebook.com")
    }
    static credential(e) {
        return se._fromParams({
            providerId: n.PROVIDER_ID,
            signInMethod: n.FACEBOOK_SIGN_IN_METHOD,
            accessToken: e
        })
    }
    static credentialFromResult(e) {
        return n.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return n.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({_tokenResponse: e}) {
        if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
            return null;
        try {
            return n.credential(e.oauthAccessToken)
        } catch {
            return null
        }
    }
}
;
De.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
De.PROVIDER_ID = "facebook.com";
var Le = class n extends oe {
    constructor() {
        super("google.com"),
        this.addScope("profile")
    }
    static credential(e, t) {
        return se._fromParams({
            providerId: n.PROVIDER_ID,
            signInMethod: n.GOOGLE_SIGN_IN_METHOD,
            idToken: e,
            accessToken: t
        })
    }
    static credentialFromResult(e) {
        return n.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return n.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({_tokenResponse: e}) {
        if (!e)
            return null;
        let {oauthIdToken: t, oauthAccessToken: i} = e;
        if (!t && !i)
            return null;
        try {
            return n.credential(t, i)
        } catch {
            return null
        }
    }
}
;
Le.GOOGLE_SIGN_IN_METHOD = "google.com";
Le.PROVIDER_ID = "google.com";
var xe = class n extends oe {
    constructor() {
        super("github.com")
    }
    static credential(e) {
        return se._fromParams({
            providerId: n.PROVIDER_ID,
            signInMethod: n.GITHUB_SIGN_IN_METHOD,
            accessToken: e
        })
    }
    static credentialFromResult(e) {
        return n.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return n.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({_tokenResponse: e}) {
        if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
            return null;
        try {
            return n.credential(e.oauthAccessToken)
        } catch {
            return null
        }
    }
}
;
xe.GITHUB_SIGN_IN_METHOD = "github.com";
xe.PROVIDER_ID = "github.com";
var Ue = class n extends oe {
    constructor() {
        super("twitter.com")
    }
    static credential(e, t) {
        return se._fromParams({
            providerId: n.PROVIDER_ID,
            signInMethod: n.TWITTER_SIGN_IN_METHOD,
            oauthToken: e,
            oauthTokenSecret: t
        })
    }
    static credentialFromResult(e) {
        return n.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return n.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({_tokenResponse: e}) {
        if (!e)
            return null;
        let {oauthAccessToken: t, oauthTokenSecret: i} = e;
        if (!t || !i)
            return null;
        try {
            return n.credential(t, i)
        } catch {
            return null
        }
    }
}
;
Ue.TWITTER_SIGN_IN_METHOD = "twitter.com";
Ue.PROVIDER_ID = "twitter.com";
async function Yr(n, e) {
    return Q(n, "POST", "/v1/accounts:signUp", S(n, e))
}
var me = class n {
    constructor(e) {
        this.user = e.user,
        this.providerId = e.providerId,
        this._tokenResponse = e._tokenResponse,
        this.operationType = e.operationType
    }
    static async _fromIdTokenResponse(e, t, i, r=!1) {
        let s = await Z._fromIdTokenResponse(e, i, r)
          , a = Qn(i);
        return new n({
            user: s,
            providerId: a,
            _tokenResponse: i,
            operationType: t
        })
    }
    static async _forOperation(e, t, i) {
        await e._updateTokensIfNecessary(i, !0);
        let r = Qn(i);
        return new n({
            user: e,
            providerId: r,
            _tokenResponse: i,
            operationType: t
        })
    }
}
;
function Qn(n) {
    return n.providerId ? n.providerId : "phoneNumber" in n ? "phone" : null
}
var sn = class n extends Be {
    constructor(e, t, i, r) {
        super(t.code, t.message),
        this.operationType = i,
        this.user = r,
        Object.setPrototypeOf(this, n.prototype),
        this.customData = {
            appName: e.name,
            tenantId: e.tenantId ?? void 0,
            _serverResponse: t.customData._serverResponse,
            operationType: i
        }
    }
    static _fromErrorAndOperation(e, t, i, r) {
        return new n(e,t,i,r)
    }
}
;
function Oi(n, e, t, i) {
    return (e === "reauthenticate" ? t._getReauthenticationResolver(n) : t._getIdTokenResponse(n)).catch(s => {
        throw s.code === "auth/multi-factor-auth-required" ? sn._fromErrorAndOperation(n, s, e, i) : s
    }
    )
}
async function $r(n, e, t=!1) {
    let i = await be(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
    return me._forOperation(n, "link", i)
}
async function Jr(n, e, t=!1) {
    let {auth: i} = n;
    if (D(i.app))
        return Promise.reject(q(i));
    let r = "reauthenticate";
    try {
        let s = await be(n, Oi(i, r, e, n), t);
        p(s.idToken, i, "internal-error");
        let a = mn(s.idToken);
        p(a, i, "internal-error");
        let {sub: o} = a;
        return p(n.uid === o, i, "user-mismatch"),
        me._forOperation(n, r, s)
    } catch (s) {
        throw s?.code === "auth/user-not-found" && H(i, "user-mismatch"),
        s
    }
}
async function Ni(n, e, t=!1) {
    if (D(n.app))
        return Promise.reject(q(n));
    let i = "signIn"
      , r = await Oi(n, i, e)
      , s = await me._fromIdTokenResponse(n, i, r);
    return t || await n._updateCurrentUser(s.user),
    s
}
async function Di(n, e) {
    return Ni(G(n), e)
}
function Xr(n, e, t) {
    p(t.url?.length > 0, n, "invalid-continue-uri"),
    p(typeof t.dynamicLinkDomain > "u" || t.dynamicLinkDomain.length > 0, n, "invalid-dynamic-link-domain"),
    p(typeof t.linkDomain > "u" || t.linkDomain.length > 0, n, "invalid-hosting-link-domain"),
    e.continueUrl = t.url,
    e.dynamicLinkDomain = t.dynamicLinkDomain,
    e.linkDomain = t.linkDomain,
    e.canHandleCodeInApp = t.handleCodeInApp,
    t.iOS && (p(t.iOS.bundleId.length > 0, n, "missing-ios-bundle-id"),
    e.iOSBundleId = t.iOS.bundleId),
    t.android && (p(t.android.packageName.length > 0, n, "missing-android-pkg-name"),
    e.androidInstallApp = t.android.installApp,
    e.androidMinimumVersionCode = t.android.minimumVersion,
    e.androidPackageName = t.android.packageName)
}
async function Li(n) {
    let e = G(n);
    e._getPasswordPolicyInternal() && await e._updatePasswordPolicy()
}
async function Zr(n, e, t) {
    let i = G(n)
      , r = {
        requestType: "PASSWORD_RESET",
        email: e,
        clientType: "CLIENT_TYPE_WEB"
    };
    t && Xr(i, r, t),
    await ne(i, r, "getOobCode", Hr, "EMAIL_PASSWORD_PROVIDER")
}
async function Qr(n, e, t) {
    if (D(n.app))
        return Promise.reject(q(n));
    let i = G(n)
      , a = await ne(i, {
        returnSecureToken: !0,
        email: e,
        password: t,
        clientType: "CLIENT_TYPE_WEB"
    }, "signUpPassword", Yr, "EMAIL_PASSWORD_PROVIDER").catch(c => {
        throw c.code === "auth/password-does-not-meet-requirements" && Li(n),
        c
    }
    )
      , o = await me._fromIdTokenResponse(i, "signIn", a);
    return await i._updateCurrentUser(o.user),
    o
}
function es(n, e, t) {
    return D(n.app) ? Promise.reject(q(n)) : Di(V(n), ae.credential(e, t)).catch(async i => {
        throw i.code === "auth/password-does-not-meet-requirements" && Li(n),
        i
    }
    )
}
function xi(n, e, t, i) {
    return V(n).onIdTokenChanged(e, t, i)
}
function Ui(n, e, t) {
    return V(n).beforeAuthStateChanged(e, t)
}
function ts(n, e, t, i) {
    return V(n).onAuthStateChanged(e, t, i)
}
function ns(n) {
    return V(n).signOut()
}
function ei(n, e) {
    return M(n, "POST", "/v2/accounts/mfaEnrollment:start", S(n, e))
}
function is(n, e) {
    return M(n, "POST", "/v2/accounts/mfaEnrollment:finalize", S(n, e))
}
function rs(n, e) {
    return M(n, "POST", "/v2/accounts/mfaEnrollment:start", S(n, e))
}
function ss(n, e) {
    return M(n, "POST", "/v2/accounts/mfaEnrollment:finalize", S(n, e))
}
var dt = "__sak";
var ut = class {
    constructor(e, t) {
        this.storageRetriever = e,
        this.type = t
    }
    _isAvailable() {
        try {
            return this.storage ? (this.storage.setItem(dt, "1"),
            this.storage.removeItem(dt),
            Promise.resolve(!0)) : Promise.resolve(!1)
        } catch {
            return Promise.resolve(!1)
        }
    }
    _set(e, t) {
        return this.storage.setItem(e, JSON.stringify(t)),
        Promise.resolve()
    }
    _get(e) {
        let t = this.storage.getItem(e);
        return Promise.resolve(t ? JSON.parse(t) : null)
    }
    _remove(e) {
        return this.storage.removeItem(e),
        Promise.resolve()
    }
    get storage() {
        return this.storageRetriever()
    }
}
;
var as = 1e3
  , os = 10
  , pt = class extends ut {
    constructor() {
        super( () => window.localStorage, "LOCAL"),
        this.boundEventHandler = (e, t) => this.onStorageEvent(e, t),
        this.listeners = {},
        this.localCache = {},
        this.pollTimer = null,
        this.fallbackToPolling = Si(),
        this._shouldAllowMigration = !0
    }
    forAllChangedKeys(e) {
        for (let t of Object.keys(this.listeners)) {
            let i = this.storage.getItem(t)
              , r = this.localCache[t];
            i !== r && e(t, r, i)
        }
    }
    onStorageEvent(e, t=!1) {
        if (!e.key) {
            this.forAllChangedKeys( (a, o, c) => {
                this.notifyListeners(a, c)
            }
            );
            return
        }
        let i = e.key;
        t ? this.detachListener() : this.stopPolling();
        let r = () => {
            let a = this.storage.getItem(i);
            !t && this.localCache[i] === a || this.notifyListeners(i, a)
        }
          , s = this.storage.getItem(i);
        Rr() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, os) : r()
    }
    notifyListeners(e, t) {
        this.localCache[e] = t;
        let i = this.listeners[e];
        if (i)
            for (let r of Array.from(i))
                r(t && JSON.parse(t))
    }
    startPolling() {
        this.stopPolling(),
        this.pollTimer = setInterval( () => {
            this.forAllChangedKeys( (e, t, i) => {
                this.onStorageEvent(new StorageEvent("storage",{
                    key: e,
                    oldValue: t,
                    newValue: i
                }), !0)
            }
            )
        }
        , as)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
        this.pollTimer = null)
    }
    attachListener() {
        window.addEventListener("storage", this.boundEventHandler)
    }
    detachListener() {
        window.removeEventListener("storage", this.boundEventHandler)
    }
    _addListener(e, t) {
        Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
        this.listeners[e] || (this.listeners[e] = new Set,
        this.localCache[e] = this.storage.getItem(e)),
        this.listeners[e].add(t)
    }
    _removeListener(e, t) {
        this.listeners[e] && (this.listeners[e].delete(t),
        this.listeners[e].size === 0 && delete this.listeners[e]),
        Object.keys(this.listeners).length === 0 && (this.detachListener(),
        this.stopPolling())
    }
    async _set(e, t) {
        await super._set(e, t),
        this.localCache[e] = JSON.stringify(t)
    }
    async _get(e) {
        let t = await super._get(e);
        return this.localCache[e] = JSON.stringify(t),
        t
    }
    async _remove(e) {
        await super._remove(e),
        delete this.localCache[e]
    }
}
;
pt.type = "LOCAL";
var kt = pt;
var cs = 1e3;
function Bt(n) {
    let e = n.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
      , t = RegExp(`${e}=([^;]+)`);
    return document.cookie.match(t)?.[1] ?? null
}
function qt(n) {
    return `${window.location.protocol === "http:" ? "__dev_" : "__HOST-"}FIREBASE_${n.split(":")[3]}`
}
var an = class {
    constructor() {
        this.type = "COOKIE",
        this.listenerUnsubscribes = new Map
    }
    _getFinalTarget(e) {
        if (typeof window === void 0)
            return e;
        let t = new URL(`${window.location.origin}/__cookies__`);
        return t.searchParams.set("finalTarget", e),
        t
    }
    async _isAvailable() {
        return typeof isSecureContext == "boolean" && !isSecureContext || typeof navigator > "u" || typeof document > "u" ? !1 : navigator.cookieEnabled ?? !0
    }
    async _set(e, t) {}
    async _get(e) {
        if (!this._isAvailable())
            return null;
        let t = qt(e);
        return window.cookieStore ? (await window.cookieStore.get(t))?.value : Bt(t)
    }
    async _remove(e) {
        if (!this._isAvailable() || !await this._get(e))
            return;
        let i = qt(e);
        document.cookie = `${i}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,
        await fetch("/__cookies__", {
            method: "DELETE"
        }).catch( () => {}
        )
    }
    _addListener(e, t) {
        if (!this._isAvailable())
            return;
        let i = qt(e);
        if (window.cookieStore) {
            let o = (h => {
                let d = h.changed.find(I => I.name === i);
                d && t(d.value),
                h.deleted.find(I => I.name === i) && t(null)
            }
            )
              , c = () => window.cookieStore.removeEventListener("change", o);
            return this.listenerUnsubscribes.set(t, c),
            window.cookieStore.addEventListener("change", o)
        }
        let r = Bt(i)
          , s = setInterval( () => {
            let o = Bt(i);
            o !== r && (t(o),
            r = o)
        }
        , cs)
          , a = () => clearInterval(s);
        this.listenerUnsubscribes.set(t, a)
    }
    _removeListener(e, t) {
        let i = this.listenerUnsubscribes.get(t);
        i && (i(),
        this.listenerUnsubscribes.delete(t))
    }
}
;
an.type = "COOKIE";
var ft = class extends ut {
    constructor() {
        super( () => window.sessionStorage, "SESSION")
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
}
;
ft.type = "SESSION";
var Fe = ft;
function hs(n) {
    return Promise.all(n.map(async e => {
        try {
            return {
                fulfilled: !0,
                value: await e
            }
        } catch (t) {
            return {
                fulfilled: !1,
                reason: t
            }
        }
    }
    ))
}
var mt = class n {
    constructor(e) {
        this.eventTarget = e,
        this.handlersMap = {},
        this.boundEventHandler = this.handleEvent.bind(this)
    }
    static _getInstance(e) {
        let t = this.receivers.find(r => r.isListeningto(e));
        if (t)
            return t;
        let i = new n(e);
        return this.receivers.push(i),
        i
    }
    isListeningto(e) {
        return this.eventTarget === e
    }
    async handleEvent(e) {
        let t = e
          , {eventId: i, eventType: r, data: s} = t.data
          , a = this.handlersMap[r];
        if (!a?.size)
            return;
        t.ports[0].postMessage({
            status: "ack",
            eventId: i,
            eventType: r
        });
        let o = Array.from(a).map(async h => h(t.origin, s))
          , c = await hs(o);
        t.ports[0].postMessage({
            status: "done",
            eventId: i,
            eventType: r,
            response: c
        })
    }
    _subscribe(e, t) {
        Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler),
        this.handlersMap[e] || (this.handlersMap[e] = new Set),
        this.handlersMap[e].add(t)
    }
    _unsubscribe(e, t) {
        this.handlersMap[e] && t && this.handlersMap[e].delete(t),
        (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
        Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler)
    }
}
;
mt.receivers = [];
function _n(n="", e=10) {
    let t = "";
    for (let i = 0; i < e; i++)
        t += Math.floor(Math.random() * 10);
    return n + t
}
var on = class {
    constructor(e) {
        this.target = e,
        this.handlers = new Set
    }
    removeMessageHandler(e) {
        e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage),
        e.messageChannel.port1.close()),
        this.handlers.delete(e)
    }
    async _send(e, t, i=50) {
        let r = typeof MessageChannel < "u" ? new MessageChannel : null;
        if (!r)
            throw new Error("connection_unavailable");
        let s, a;
        return new Promise( (o, c) => {
            let h = _n("", 20);
            r.port1.start();
            let d = setTimeout( () => {
                c(new Error("unsupported_event"))
            }
            , i);
            a = {
                messageChannel: r,
                onMessage(g) {
                    let I = g;
                    if (I.data.eventId === h)
                        switch (I.data.status) {
                        case "ack":
                            clearTimeout(d),
                            s = setTimeout( () => {
                                c(new Error("timeout"))
                            }
                            , 3e3);
                            break;
                        case "done":
                            clearTimeout(s),
                            o(I.data.response);
                            break;
                        default:
                            clearTimeout(d),
                            clearTimeout(s),
                            c(new Error("invalid_response"));
                            break
                        }
                }
            },
            this.handlers.add(a),
            r.port1.addEventListener("message", a.onMessage),
            this.target.postMessage({
                eventType: e,
                eventId: h,
                data: t
            }, [r.port2])
        }
        ).finally( () => {
            a && this.removeMessageHandler(a)
        }
        )
    }
}
;
function z() {
    return window
}
function ls(n) {
    z().location.href = n
}
function Hi() {
    return typeof z().WorkerGlobalScope < "u" && typeof z().importScripts == "function"
}
async function ds() {
    if (!navigator?.serviceWorker)
        return null;
    try {
        return (await navigator.serviceWorker.ready).active
    } catch {
        return null
    }
}
function us() {
    return navigator?.serviceWorker?.controller || null
}
function ps() {
    return Hi() ? self : null
}
var Vi = "firebaseLocalStorageDb"
  , fs = 1
  , gt = "firebaseLocalStorage"
  , Fi = "fbase_key"
  , ce = class {
    constructor(e) {
        this.request = e
    }
    toPromise() {
        return new Promise( (e, t) => {
            this.request.addEventListener("success", () => {
                e(this.request.result)
            }
            ),
            this.request.addEventListener("error", () => {
                t(this.request.error)
            }
            )
        }
        )
    }
}
;
function Mt(n, e) {
    return n.transaction([gt], e ? "readwrite" : "readonly").objectStore(gt)
}
function ms() {
    let n = indexedDB.deleteDatabase(Vi);
    return new ce(n).toPromise()
}
function Gi() {
    let n = indexedDB.open(Vi, fs);
    return new Promise( (e, t) => {
        n.addEventListener("error", () => {
            t(n.error)
        }
        ),
        n.addEventListener("upgradeneeded", () => {
            let i = n.result;
            try {
                i.createObjectStore(gt, {
                    keyPath: Fi
                })
            } catch (r) {
                t(r)
            }
        }
        ),
        n.addEventListener("success", async () => {
            let i = n.result;
            i.objectStoreNames.contains(gt) ? e(i) : (i.close(),
            await ms(),
            e(await Gi()))
        }
        )
    }
    )
}
async function ti(n, e, t) {
    let i = Mt(n, !0).put({
        [Fi]: e,
        value: t
    });
    return new ce(i).toPromise()
}
async function gs(n, e) {
    let t = Mt(n, !1).get(e)
      , i = await new ce(t).toPromise();
    return i === void 0 ? null : i.value
}
function ni(n, e) {
    let t = Mt(n, !0).delete(e);
    return new ce(t).toPromise()
}
var _s = 800
  , Es = 3
  , _t = class {
    registerLifecycleListeners() {
        typeof window < "u" && typeof window.addEventListener == "function" && (window.addEventListener("pagehide", this.onPageHide),
        window.addEventListener("pageshow", this.onPageShow))
    }
    unregisterLifecycleListeners() {
        typeof window < "u" && typeof window.removeEventListener == "function" && (window.removeEventListener("pagehide", this.onPageHide),
        window.removeEventListener("pageshow", this.onPageShow))
    }
    constructor() {
        this.type = "LOCAL",
        this.dbPromise = null,
        this._shouldAllowMigration = !0,
        this.listeners = {},
        this.localCache = {},
        this.pollTimer = null,
        this.isClosing = !1,
        this.pendingWrites = 0,
        this.receiver = null,
        this.sender = null,
        this.serviceWorkerReceiverAvailable = !1,
        this.activeServiceWorker = null,
        this.onPageHide = () => {
            this.isClosing = !0,
            this.stopPolling(),
            this.dbPromise && (this.dbPromise.then(e => e.close()).catch( () => {}
            ),
            this.dbPromise = null)
        }
        ,
        this.onPageShow = () => {
            this.isClosing && (this.isClosing = !1,
            Object.keys(this.listeners).length > 0 && this.startPolling())
        }
        ,
        this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then( () => {}
        , () => {}
        )
    }
    async _openDb() {
        return this.dbPromise ? this.dbPromise : (this.dbPromise = Gi(),
        this.dbPromise.catch( () => {
            this.dbPromise = null
        }
        ),
        this.dbPromise)
    }
    async _withRetries(e) {
        let t = 0;
        for (; ; )
            try {
                let i = await this._openDb();
                return await e(i)
            } catch (i) {
                if (t++ > Es)
                    throw i;
                if (this.dbPromise) {
                    let r = this.dbPromise;
                    this.dbPromise = null;
                    try {
                        (await r).close()
                    } catch {}
                }
            }
    }
    async initializeServiceWorkerMessaging() {
        return Hi() ? this.initializeReceiver() : this.initializeSender()
    }
    async initializeReceiver() {
        this.receiver = mt._getInstance(ps()),
        this.receiver._subscribe("keyChanged", async (e, t) => ({
            keyProcessed: (await this._poll()).includes(t.key)
        })),
        this.receiver._subscribe("ping", async (e, t) => ["keyChanged"])
    }
    async initializeSender() {
        if (this.activeServiceWorker = await ds(),
        !this.activeServiceWorker)
            return;
        this.sender = new on(this.activeServiceWorker);
        let e = await this.sender._send("ping", {}, 800);
        e && e[0]?.fulfilled && e[0]?.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0)
    }
    async notifyServiceWorker(e) {
        if (!(!this.sender || !this.activeServiceWorker || us() !== this.activeServiceWorker))
            try {
                await this.sender._send("keyChanged", {
                    key: e
                }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch {}
    }
    async _isAvailable() {
        try {
            return indexedDB ? (await this._withRetries(async e => {
                await ti(e, dt, "1"),
                await ni(e, dt)
            }
            ),
            !0) : !1
        } catch {}
        return !1
    }
    async _withPendingWrite(e) {
        this.pendingWrites++;
        try {
            await e()
        } finally {
            this.pendingWrites--
        }
    }
    async _set(e, t) {
        return this._withPendingWrite(async () => (await this._withRetries(i => ti(i, e, t)),
        this.localCache[e] = t,
        this.notifyServiceWorker(e)))
    }
    async _get(e) {
        let t = await this._withRetries(i => gs(i, e));
        return this.localCache[e] = t,
        t
    }
    async _remove(e) {
        return this._withPendingWrite(async () => (await this._withRetries(t => ni(t, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)))
    }
    async _poll() {
        if (this.isClosing)
            return [];
        try {
            let e = await this._withRetries(r => {
                let s = Mt(r, !1).getAll();
                return new ce(s).toPromise()
            }
            );
            if (this.isClosing)
                return [];
            if (!e)
                return [];
            if (this.pendingWrites !== 0)
                return [];
            let t = []
              , i = new Set;
            if (e.length !== 0)
                for (let {fbase_key: r, value: s} of e)
                    i.add(r),
                    JSON.stringify(this.localCache[r]) !== JSON.stringify(s) && (this.notifyListeners(r, s),
                    t.push(r));
            for (let r of Object.keys(this.localCache))
                this.localCache[r] && !i.has(r) && (this.notifyListeners(r, null),
                t.push(r));
            return t
        } catch (e) {
            return this.isClosing || Xe(`Firebase Auth cross-tab polling failed with error: ${e}`),
            []
        }
    }
    notifyListeners(e, t) {
        this.localCache[e] = t;
        let i = this.listeners[e];
        if (i)
            for (let r of Array.from(i))
                r(t)
    }
    startPolling() {
        this.stopPolling(),
        this.pollTimer = setInterval(async () => this._poll(), _s)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
        this.pollTimer = null)
    }
    _addListener(e, t) {
        Object.keys(this.listeners).length === 0 && (this.startPolling(),
        this.registerLifecycleListeners()),
        this.listeners[e] || (this.listeners[e] = new Set,
        this._get(e)),
        this.listeners[e].add(t)
    }
    _removeListener(e, t) {
        this.listeners[e] && (this.listeners[e].delete(t),
        this.listeners[e].size === 0 && delete this.listeners[e]),
        Object.keys(this.listeners).length === 0 && (this.stopPolling(),
        this.unregisterLifecycleListeners())
    }
}
;
_t.type = "LOCAL";
var Ct = _t;
function ii(n, e) {
    return M(n, "POST", "/v2/accounts/mfaSignIn:start", S(n, e))
}
function ys(n, e) {
    return M(n, "POST", "/v2/accounts/mfaSignIn:finalize", S(n, e))
}
function Is(n, e) {
    return M(n, "POST", "/v2/accounts/mfaSignIn:finalize", S(n, e))
}
var Ca = ki("rcb")
  , Oa = new ie(3e4,6e4);
var et = "recaptcha";
async function Ts(n, e, t) {
    if (!n._getRecaptchaConfig())
        try {
            await Cr(n)
        } catch {
            console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")
        }
    try {
        let i;
        if (typeof e == "string" ? i = {
            phoneNumber: e
        } : i = e,
        "session" in i) {
            let r = i.session;
            if ("phoneNumber" in i) {
                p(r.type === "enroll", n, "internal-error");
                let s = {
                    idToken: r.credential,
                    phoneEnrollmentInfo: {
                        phoneNumber: i.phoneNumber,
                        clientType: "CLIENT_TYPE_WEB"
                    }
                };
                return (await ne(n, s, "mfaSmsEnrollment", async (h, d) => {
                    if (d.phoneEnrollmentInfo.captchaResponse === Ae) {
                        p(t?.type === et, h, "argument-error");
                        let g = await Kt(h, d, t);
                        return ei(h, g)
                    }
                    return ei(h, d)
                }
                , "PHONE_PROVIDER").catch(h => Promise.reject(h))).phoneSessionInfo.sessionInfo
            } else {
                p(r.type === "signin", n, "internal-error");
                let s = i.multiFactorHint?.uid || i.multiFactorUid;
                p(s, n, "missing-multi-factor-info");
                let a = {
                    mfaPendingCredential: r.credential,
                    mfaEnrollmentId: s,
                    phoneSignInInfo: {
                        clientType: "CLIENT_TYPE_WEB"
                    }
                };
                return (await ne(n, a, "mfaSmsSignIn", async (d, g) => {
                    if (g.phoneSignInInfo.captchaResponse === Ae) {
                        p(t?.type === et, d, "argument-error");
                        let I = await Kt(d, g, t);
                        return ii(d, I)
                    }
                    return ii(d, g)
                }
                , "PHONE_PROVIDER").catch(d => Promise.reject(d))).phoneResponseInfo.sessionInfo
            }
        } else {
            let r = {
                phoneNumber: i.phoneNumber,
                clientType: "CLIENT_TYPE_WEB"
            };
            return (await ne(n, r, "sendVerificationCode", async (c, h) => {
                if (h.captchaResponse === Ae) {
                    p(t?.type === et, c, "argument-error");
                    let d = await Kt(c, h, t);
                    return Zn(c, d)
                }
                return Zn(c, h)
            }
            , "PHONE_PROVIDER").catch(c => Promise.reject(c))).sessionInfo
        }
    } finally {
        t?._reset()
    }
}
async function Kt(n, e, t) {
    p(t.type === et, n, "argument-error");
    let i = await t.verify();
    p(typeof i == "string", n, "argument-error");
    let r = {
        ...e
    };
    if ("phoneEnrollmentInfo" in r) {
        let s = r.phoneEnrollmentInfo.phoneNumber
          , a = r.phoneEnrollmentInfo.captchaResponse
          , o = r.phoneEnrollmentInfo.clientType
          , c = r.phoneEnrollmentInfo.recaptchaVersion;
        return Object.assign(r, {
            phoneEnrollmentInfo: {
                phoneNumber: s,
                recaptchaToken: i,
                captchaResponse: a,
                clientType: o,
                recaptchaVersion: c
            }
        }),
        r
    } else if ("phoneSignInInfo" in r) {
        let s = r.phoneSignInInfo.captchaResponse
          , a = r.phoneSignInInfo.clientType
          , o = r.phoneSignInInfo.recaptchaVersion;
        return Object.assign(r, {
            phoneSignInInfo: {
                recaptchaToken: i,
                captchaResponse: s,
                clientType: a,
                recaptchaVersion: o
            }
        }),
        r
    } else
        return Object.assign(r, {
            recaptchaToken: i
        }),
        r
}
var He = class n {
    constructor(e) {
        this.providerId = n.PROVIDER_ID,
        this.auth = G(e)
    }
    verifyPhoneNumber(e, t) {
        return Ts(this.auth, e, V(t))
    }
    static credential(e, t) {
        return Oe._fromVerification(e, t)
    }
    static credentialFromResult(e) {
        let t = e;
        return n.credentialFromTaggedObject(t)
    }
    static credentialFromError(e) {
        return n.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({_tokenResponse: e}) {
        if (!e)
            return null;
        let {phoneNumber: t, temporaryProof: i} = e;
        return t && i ? Oe._fromTokenResponse(t, i) : null
    }
}
;
He.PROVIDER_ID = "phone";
He.PHONE_SIGN_IN_METHOD = "phone";
function Wi(n, e) {
    return e ? B(e) : (p(n._popupRedirectResolver, n, "argument-error"),
    n._popupRedirectResolver)
}
var Ve = class extends re {
    constructor(e) {
        super("custom", "custom"),
        this.params = e
    }
    _getIdTokenResponse(e) {
        return fe(e, this._buildIdpRequest())
    }
    _linkToIdToken(e, t) {
        return fe(e, this._buildIdpRequest(t))
    }
    _getReauthenticationResolver(e) {
        return fe(e, this._buildIdpRequest())
    }
    _buildIdpRequest(e) {
        let t = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0
        };
        return e && (t.idToken = e),
        t
    }
}
;
function ws(n) {
    return Ni(n.auth, new Ve(n), n.bypassAuthState)
}
function vs(n) {
    let {auth: e, user: t} = n;
    return p(t, e, "internal-error"),
    Jr(t, new Ve(n), n.bypassAuthState)
}
async function Rs(n) {
    let {auth: e, user: t} = n;
    return p(t, e, "internal-error"),
    $r(t, new Ve(n), n.bypassAuthState)
}
var Et = class {
    constructor(e, t, i, r, s=!1) {
        this.auth = e,
        this.resolver = i,
        this.user = r,
        this.bypassAuthState = s,
        this.pendingPromise = null,
        this.eventManager = null,
        this.filter = Array.isArray(t) ? t : [t]
    }
    execute() {
        return new Promise(async (e, t) => {
            this.pendingPromise = {
                resolve: e,
                reject: t
            };
            try {
                this.eventManager = await this.resolver._initialize(this.auth),
                await this.onExecution(),
                this.eventManager.registerConsumer(this)
            } catch (i) {
                this.reject(i)
            }
        }
        )
    }
    async onAuthEvent(e) {
        let {urlResponse: t, sessionId: i, postBody: r, tenantId: s, error: a, type: o} = e;
        if (a) {
            this.reject(a);
            return
        }
        let c = {
            auth: this.auth,
            requestUri: t,
            sessionId: i,
            tenantId: s || void 0,
            postBody: r || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(o)(c))
        } catch (h) {
            this.reject(h)
        }
    }
    onError(e) {
        this.reject(e)
    }
    getIdpTask(e) {
        switch (e) {
        case "signInViaPopup":
        case "signInViaRedirect":
            return ws;
        case "linkViaPopup":
        case "linkViaRedirect":
            return Rs;
        case "reauthViaPopup":
        case "reauthViaRedirect":
            return vs;
        default:
            H(this.auth, "internal-error")
        }
    }
    resolve(e) {
        K(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.resolve(e),
        this.unregisterAndCleanUp()
    }
    reject(e) {
        K(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.reject(e),
        this.unregisterAndCleanUp()
    }
    unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this),
        this.pendingPromise = null,
        this.cleanUp()
    }
}
;
var Ps = new ie(2e3,1e4);
async function Ss(n, e, t) {
    if (D(n.app))
        return Promise.reject(F(n, "operation-not-supported-in-this-environment"));
    let i = G(n);
    lr(n, e, Ne);
    let r = Wi(i, t);
    return new yt(i,"signInViaPopup",e,r).executeNotNull()
}
var yt = class n extends Et {
    constructor(e, t, i, r, s) {
        super(e, t, r, s),
        this.provider = i,
        this.authWindow = null,
        this.pollId = null,
        n.currentPopupAction && n.currentPopupAction.cancel(),
        n.currentPopupAction = this
    }
    async executeNotNull() {
        let e = await this.execute();
        return p(e, this.auth, "internal-error"),
        e
    }
    async onExecution() {
        K(this.filter.length === 1, "Popup operations only handle one event");
        let e = _n();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e),
        this.authWindow.associatedEvent = e,
        this.resolver._originValidation(this.auth).catch(t => {
            this.reject(t)
        }
        ),
        this.resolver._isIframeWebStorageSupported(this.auth, t => {
            t || this.reject(F(this.auth, "web-storage-unsupported"))
        }
        ),
        this.pollUserCancellation()
    }
    get eventId() {
        return this.authWindow?.associatedEvent || null
    }
    cancel() {
        this.reject(F(this.auth, "cancelled-popup-request"))
    }
    cleanUp() {
        this.authWindow && this.authWindow.close(),
        this.pollId && window.clearTimeout(this.pollId),
        this.authWindow = null,
        this.pollId = null,
        n.currentPopupAction = null
    }
    pollUserCancellation() {
        let e = () => {
            if (this.authWindow?.window?.closed) {
                this.pollId = window.setTimeout( () => {
                    this.pollId = null,
                    this.reject(F(this.auth, "popup-closed-by-user"))
                }
                , 8e3);
                return
            }
            this.pollId = window.setTimeout(e, Ps.get())
        }
        ;
        e()
    }
}
;
yt.currentPopupAction = null;
var As = "pendingRedirect"
  , tt = new Map
  , cn = class extends Et {
    constructor(e, t, i=!1) {
        super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, i),
        this.eventId = null
    }
    async execute() {
        let e = tt.get(this.auth._key());
        if (!e) {
            try {
                let i = await bs(this.resolver, this.auth) ? await super.execute() : null;
                e = () => Promise.resolve(i)
            } catch (t) {
                e = () => Promise.reject(t)
            }
            tt.set(this.auth._key(), e)
        }
        return this.bypassAuthState || tt.set(this.auth._key(), () => Promise.resolve(null)),
        e()
    }
    async onAuthEvent(e) {
        if (e.type === "signInViaRedirect")
            return super.onAuthEvent(e);
        if (e.type === "unknown") {
            this.resolve(null);
            return
        }
        if (e.eventId) {
            let t = await this.auth._redirectUserForId(e.eventId);
            if (t)
                return this.user = t,
                super.onAuthEvent(e);
            this.resolve(null)
        }
    }
    async onExecution() {}
    cleanUp() {}
}
;
async function bs(n, e) {
    let t = Cs(e)
      , i = Ms(n);
    if (!await i._isAvailable())
        return !1;
    let r = await i._get(t) === "true";
    return await i._remove(t),
    r
}
function ks(n, e) {
    tt.set(n._key(), e)
}
function Ms(n) {
    return B(n._redirectPersistence)
}
function Cs(n) {
    return Qe(As, n.config.apiKey, n.name)
}
async function Os(n, e, t=!1) {
    if (D(n.app))
        return Promise.reject(q(n));
    let i = G(n)
      , r = Wi(i, e)
      , a = await new cn(i,r,t).execute();
    return a && !t && (delete a.user._redirectEventId,
    await i._persistUserIfCurrent(a.user),
    await i._setRedirectUser(null, e)),
    a
}
var Ns = 600 * 1e3
  , hn = class {
    constructor(e) {
        this.auth = e,
        this.cachedEventUids = new Set,
        this.consumers = new Set,
        this.queuedRedirectEvent = null,
        this.hasHandledPotentialRedirect = !1,
        this.lastProcessedEventTime = Date.now()
    }
    registerConsumer(e) {
        this.consumers.add(e),
        this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        this.queuedRedirectEvent = null)
    }
    unregisterConsumer(e) {
        this.consumers.delete(e)
    }
    onEvent(e) {
        if (this.hasEventBeenHandled(e))
            return !1;
        let t = !1;
        return this.consumers.forEach(i => {
            this.isEventForConsumer(e, i) && (t = !0,
            this.sendToConsumer(e, i),
            this.saveEventToCache(e))
        }
        ),
        this.hasHandledPotentialRedirect || !Ds(e) || (this.hasHandledPotentialRedirect = !0,
        t || (this.queuedRedirectEvent = e,
        t = !0)),
        t
    }
    sendToConsumer(e, t) {
        if (e.error && !zi(e)) {
            let i = e.error.code?.split("auth/")[1] || "internal-error";
            t.onError(F(this.auth, i))
        } else
            t.onAuthEvent(e)
    }
    isEventForConsumer(e, t) {
        let i = t.eventId === null || !!e.eventId && e.eventId === t.eventId;
        return t.filter.includes(e.type) && i
    }
    hasEventBeenHandled(e) {
        return Date.now() - this.lastProcessedEventTime >= Ns && this.cachedEventUids.clear(),
        this.cachedEventUids.has(ri(e))
    }
    saveEventToCache(e) {
        this.cachedEventUids.add(ri(e)),
        this.lastProcessedEventTime = Date.now()
    }
}
;
function ri(n) {
    return [n.type, n.eventId, n.sessionId, n.tenantId].filter(e => e).join("-")
}
function zi({type: n, error: e}) {
    return n === "unknown" && e?.code === "auth/no-auth-event"
}
function Ds(n) {
    switch (n.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
        return !0;
    case "unknown":
        return zi(n);
    default:
        return !1
    }
}
async function Ls(n, e={}) {
    return M(n, "GET", "/v1/projects", e)
}
var xs = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
  , Us = /^https?/;
async function Hs(n) {
    if (n.config.emulator)
        return;
    let {authorizedDomains: e} = await Ls(n);
    for (let t of e)
        try {
            if (Vs(t))
                return
        } catch {}
    H(n, "unauthorized-domain")
}
function Vs(n) {
    let e = $t()
      , {protocol: t, hostname: i} = new URL(e);
    if (n.startsWith("chrome-extension://")) {
        let a = new URL(n);
        return a.hostname === "" && i === "" ? t === "chrome-extension:" && n.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : t === "chrome-extension:" && a.hostname === i
    }
    if (!Us.test(t))
        return !1;
    if (xs.test(n))
        return i === n;
    let r = n.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + r + "|" + r + ")$","i").test(i)
}
var Fs = new ie(3e4,6e4);
function si() {
    let n = z().___jsl;
    if (n?.H) {
        for (let e of Object.keys(n.H))
            if (n.H[e].r = n.H[e].r || [],
            n.H[e].L = n.H[e].L || [],
            n.H[e].r = [...n.H[e].L],
            n.CP)
                for (let t = 0; t < n.CP.length; t++)
                    n.CP[t] = null
    }
}
function Gs(n) {
    return new Promise( (e, t) => {
        function i() {
            si(),
            gapi.load("gapi.iframes", {
                callback: () => {
                    e(gapi.iframes.getContext())
                }
                ,
                ontimeout: () => {
                    si(),
                    t(F(n, "network-request-failed"))
                }
                ,
                timeout: Fs.get()
            })
        }
        if (z().gapi?.iframes?.Iframe)
            e(gapi.iframes.getContext());
        else if (z().gapi?.load)
            i();
        else {
            let r = ki("iframefcb");
            return z()[r] = () => {
                gapi.load ? i() : t(F(n, "network-request-failed"))
            }
            ,
            bi(`${kr()}?onload=${r}`).catch(s => t(s))
        }
    }
    ).catch(e => {
        throw nt = null,
        e
    }
    )
}
var nt = null;
function Ws(n) {
    return nt = nt || Gs(n),
    nt
}
var zs = new ie(5e3,15e3)
  , js = "__/auth/iframe"
  , Bs = "emulator/auth/iframe"
  , qs = {
    style: {
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px"
    },
    "aria-hidden": "true",
    tabindex: "-1"
}
  , Ks = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function Ys(n) {
    let e = n.config;
    p(e.authDomain, n, "auth-domain-config-required");
    let t = e.emulator ? fn(e, Bs) : `https://${n.config.authDomain}/${js}`
      , i = {
        apiKey: e.apiKey,
        appName: n.name,
        v: pe
    }
      , r = Ks.get(n.config.apiHost);
    r && (i.eid = r);
    let s = n._getFrameworks();
    return s.length && (i.fw = s.join(",")),
    `${t}?${le(i).slice(1)}`
}
async function $s(n) {
    let e = await Ws(n)
      , t = z().gapi;
    return p(t, n, "internal-error"),
    e.open({
        where: document.body,
        url: Ys(n),
        messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: qs,
        dontclear: !0
    }, i => new Promise(async (r, s) => {
        await i.restyle({
            setHideOnLeave: !1
        });
        let a = F(n, "network-request-failed")
          , o = z().setTimeout( () => {
            s(a)
        }
        , zs.get());
        function c() {
            z().clearTimeout(o),
            r(i)
        }
        i.ping(c).then(c, () => {
            s(a)
        }
        )
    }
    ))
}
var Js = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no"
}
  , Xs = 500
  , Zs = 600
  , Qs = "_blank"
  , ea = "http://localhost"
  , It = class {
    constructor(e) {
        this.window = e,
        this.associatedEvent = null
    }
    close() {
        if (this.window)
            try {
                this.window.close()
            } catch {}
    }
}
;
function ta(n, e, t, i=Xs, r=Zs) {
    let s = Math.max((window.screen.availHeight - r) / 2, 0).toString()
      , a = Math.max((window.screen.availWidth - i) / 2, 0).toString()
      , o = ""
      , c = {
        ...Js,
        width: i.toString(),
        height: r.toString(),
        top: s,
        left: a
    }
      , h = O().toLowerCase();
    t && (o = Ti(h) ? Qs : t),
    yi(h) && (e = e || ea,
    c.scrollbars = "yes");
    let d = Object.entries(c).reduce( (I, [y,R]) => `${I}${y}=${R},`, "");
    if (vr(h) && o !== "_self")
        return na(e || "", o),
        new It(null);
    let g = window.open(e || "", o, d);
    p(g, n, "popup-blocked");
    try {
        g.focus()
    } catch {}
    return new It(g)
}
function na(n, e) {
    let t = document.createElement("a");
    t.href = n,
    t.target = e;
    let i = document.createEvent("MouseEvent");
    i.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
    t.dispatchEvent(i)
}
var ia = "__/auth/handler"
  , ra = "emulator/auth/handler"
  , sa = encodeURIComponent("fac");
async function ai(n, e, t, i, r, s) {
    p(n.config.authDomain, n, "auth-domain-config-required"),
    p(n.config.apiKey, n, "invalid-api-key");
    let a = {
        apiKey: n.config.apiKey,
        appName: n.name,
        authType: t,
        redirectUrl: i,
        v: pe,
        eventId: r
    };
    if (e instanceof Ne) {
        e.setDefaultLanguage(n.languageCode),
        a.providerId = e.providerId || "",
        xn(e.getCustomParameters()) || (a.customParameters = JSON.stringify(e.getCustomParameters()));
        for (let[d,g] of Object.entries(s || {}))
            a[d] = g
    }
    if (e instanceof oe) {
        let d = e.getScopes().filter(g => g !== "");
        d.length > 0 && (a.scopes = d.join(","))
    }
    n.tenantId && (a.tid = n.tenantId);
    let o = a;
    for (let d of Object.keys(o))
        o[d] === void 0 && delete o[d];
    let c = await n._getAppCheckToken()
      , h = c ? `#${sa}=${encodeURIComponent(c)}` : "";
    return `${aa(n)}?${le(o).slice(1)}${h}`
}
function aa({config: n}) {
    return n.emulator ? fn(n, ra) : `https://${n.authDomain}/${ia}`
}
var Yt = "webStorageSupport"
  , ln = class {
    constructor() {
        this.eventManagers = {},
        this.iframes = {},
        this.originValidationPromises = {},
        this._redirectPersistence = Fe,
        this._completeRedirectFn = Os,
        this._overrideRedirectResult = ks
    }
    async _openPopup(e, t, i, r) {
        K(this.eventManagers[e._key()]?.manager, "_initialize() not called before _openPopup()");
        let s = await ai(e, t, i, $t(), r);
        return ta(e, s, _n())
    }
    async _openRedirect(e, t, i, r) {
        await this._originValidation(e);
        let s = await ai(e, t, i, $t(), r);
        return ls(s),
        new Promise( () => {}
        )
    }
    _initialize(e) {
        let t = e._key();
        if (this.eventManagers[t]) {
            let {manager: r, promise: s} = this.eventManagers[t];
            return r ? Promise.resolve(r) : (K(s, "If manager is not set, promise should be"),
            s)
        }
        let i = this.initAndGetManager(e);
        return this.eventManagers[t] = {
            promise: i
        },
        i.catch( () => {
            delete this.eventManagers[t]
        }
        ),
        i
    }
    async initAndGetManager(e) {
        let t = await $s(e)
          , i = new hn(e);
        return t.register("authEvent", r => (p(r?.authEvent, e, "invalid-auth-event"),
        {
            status: i.onEvent(r.authEvent) ? "ACK" : "ERROR"
        }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),
        this.eventManagers[e._key()] = {
            manager: i
        },
        this.iframes[e._key()] = t,
        i
    }
    _isIframeWebStorageSupported(e, t) {
        this.iframes[e._key()].send(Yt, {
            type: Yt
        }, r => {
            let s = r?.[0]?.[Yt];
            s !== void 0 && t(!!s),
            H(e, "internal-error")
        }
        , gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
    }
    _originValidation(e) {
        let t = e._key();
        return this.originValidationPromises[t] || (this.originValidationPromises[t] = Hs(e)),
        this.originValidationPromises[t]
    }
    get _shouldInitProactively() {
        return Si() || Ii() || gn()
    }
}
  , ji = ln
  , Tt = class {
    constructor(e) {
        this.factorId = e
    }
    _process(e, t, i) {
        switch (t.type) {
        case "enroll":
            return this._finalizeEnroll(e, t.credential, i);
        case "signin":
            return this._finalizeSignIn(e, t.credential);
        default:
            return W("unexpected MultiFactorSessionType")
        }
    }
}
  , dn = class n extends Tt {
    constructor(e) {
        super("phone"),
        this.credential = e
    }
    static _fromCredential(e) {
        return new n(e)
    }
    _finalizeEnroll(e, t, i) {
        return is(e, {
            idToken: t,
            displayName: i,
            phoneVerificationInfo: this.credential._makeVerificationRequest()
        })
    }
    _finalizeSignIn(e, t) {
        return ys(e, {
            mfaPendingCredential: t,
            phoneVerificationInfo: this.credential._makeVerificationRequest()
        })
    }
}
  , wt = class {
    constructor() {}
    static assertion(e) {
        return dn._fromCredential(e)
    }
}
;
wt.FACTOR_ID = "phone";
var vt = class {
    static assertionForEnrollment(e, t) {
        return Rt._fromSecret(e, t)
    }
    static assertionForSignIn(e, t) {
        return Rt._fromEnrollmentId(e, t)
    }
    static async generateSecret(e) {
        let t = e;
        p(typeof t.user?.auth < "u", "internal-error");
        let i = await rs(t.user.auth, {
            idToken: t.credential,
            totpEnrollmentInfo: {}
        });
        return Pt._fromStartTotpMfaEnrollmentResponse(i, t.user.auth)
    }
}
;
vt.FACTOR_ID = "totp";
var Rt = class n extends Tt {
    constructor(e, t, i) {
        super("totp"),
        this.otp = e,
        this.enrollmentId = t,
        this.secret = i
    }
    static _fromSecret(e, t) {
        return new n(t,void 0,e)
    }
    static _fromEnrollmentId(e, t) {
        return new n(t,e)
    }
    async _finalizeEnroll(e, t, i) {
        return p(typeof this.secret < "u", e, "argument-error"),
        ss(e, {
            idToken: t,
            displayName: i,
            totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
        })
    }
    async _finalizeSignIn(e, t) {
        p(this.enrollmentId !== void 0 && this.otp !== void 0, e, "argument-error");
        let i = {
            verificationCode: this.otp
        };
        return Is(e, {
            mfaPendingCredential: t,
            mfaEnrollmentId: this.enrollmentId,
            totpVerificationInfo: i
        })
    }
}
  , Pt = class n {
    constructor(e, t, i, r, s, a, o) {
        this.sessionInfo = a,
        this.auth = o,
        this.secretKey = e,
        this.hashingAlgorithm = t,
        this.codeLength = i,
        this.codeIntervalSeconds = r,
        this.enrollmentCompletionDeadline = s
    }
    static _fromStartTotpMfaEnrollmentResponse(e, t) {
        return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)
    }
    _makeTotpVerificationInfo(e) {
        return {
            sessionInfo: this.sessionInfo,
            verificationCode: e
        }
    }
    generateQrCodeUrl(e, t) {
        let i = !1;
        return (Je(e) || Je(t)) && (i = !0),
        i && (Je(e) && (e = this.auth.currentUser?.email || "unknownuser"),
        Je(t) && (t = this.auth.name)),
        `otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`
    }
}
;
function Je(n) {
    return typeof n > "u" || n?.length === 0
}
var oi = "@firebase/auth"
  , ci = "1.13.6";
var un = class {
    constructor(e) {
        this.auth = e,
        this.internalListeners = new Map
    }
    getUid() {
        return this.assertAuthConfigured(),
        this.auth.currentUser?.uid || null
    }
    async getToken(e) {
        return this.assertAuthConfigured(),
        await this.auth._initializationPromise,
        this.auth.currentUser ? {
            accessToken: await this.auth.currentUser.getIdToken(e)
        } : null
    }
    addAuthTokenListener(e) {
        if (this.assertAuthConfigured(),
        this.internalListeners.has(e))
            return;
        let t = this.auth.onIdTokenChanged(i => {
            e(i?.stsTokenManager.accessToken || null)
        }
        );
        this.internalListeners.set(e, t),
        this.updateProactiveRefresh()
    }
    removeAuthTokenListener(e) {
        this.assertAuthConfigured();
        let t = this.internalListeners.get(e);
        t && (this.internalListeners.delete(e),
        t(),
        this.updateProactiveRefresh())
    }
    assertAuthConfigured() {
        p(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
    }
    updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
    }
}
;
function oa(n) {
    switch (n) {
    case "Node":
        return "node";
    case "ReactNative":
        return "rn";
    case "Worker":
        return "webworker";
    case "Cordova":
        return "cordova";
    case "WebExtension":
        return "web-extension";
    default:
        return
    }
}
function ca(n) {
    Ft(new Ht("auth", (e, {options: t}) => {
        let i = e.getProvider("app").getImmediate()
          , r = e.getProvider("heartbeat")
          , s = e.getProvider("app-check-internal")
          , {apiKey: a, authDomain: o} = i.options;
        p(a && !a.includes(":"), "invalid-api-key", {
            appName: i.name
        });
        let c = {
            apiKey: a,
            authDomain: o,
            clientPlatform: n,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: Ai(n)
        }
          , h = new tn(i,r,s,c);
        return Or(h, t),
        h
    }
    ,"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback( (e, t, i) => {
        e.getProvider("auth-internal").initialize()
    }
    )),
    Ft(new Ht("auth-internal",e => {
        let t = G(e.getProvider("auth").getImmediate());
        return (i => new un(i))(t)
    }
    ,"PRIVATE").setInstantiationMode("EXPLICIT")),
    Te(oi, ci, oa(n)),
    Te(oi, ci, "esm2020")
}
var ha = 300
  , la = Ut("authIdTokenMaxAge") || ha
  , hi = null
  , da = n => async e => {
    let t = e && await e.getIdTokenResult()
      , i = t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
    if (i && i > la)
        return;
    let r = t?.token;
    hi !== r && (hi = r,
    await fetch(n, {
        method: r ? "POST" : "DELETE",
        headers: r ? {
            Authorization: `Bearer ${r}`
        } : {}
    }))
}
;
function ua(n=Fn()) {
    let e = Gt(n, "auth");
    if (e.isInitialized())
        return e.getImmediate();
    let t = bt(n, {
        popupRedirectResolver: ji,
        persistence: [Ct, kt, Fe]
    })
      , i = Ut("authTokenSyncURL");
    if (i && typeof isSecureContext == "boolean" && isSecureContext) {
        let s = new URL(i,location.origin);
        if (location.origin === s.origin) {
            let a = da(s.toString());
            Ui(t, a, () => a(t.currentUser)),
            xi(t, o => a(o))
        }
    }
    let r = kn("auth");
    return r && Mi(t, `http://${r}`),
    t
}
function pa() {
    return document.getElementsByTagName("head")?.[0] ?? document
}
Ar({
    loadJS(n) {
        return new Promise( (e, t) => {
            let i = document.createElement("script");
            i.setAttribute("src", n),
            i.onload = e,
            i.onerror = r => {
                let s = F("internal-error");
                s.customData = r,
                t(s)
            }
            ,
            i.type = "text/javascript",
            i.charset = "UTF-8",
            pa().appendChild(i)
        }
        )
    },
    gapiScript: "https://apis.google.com/js/api.js",
    recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
    recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
ca("Browser");
var fa = 2500
  , Bi = Symbol("late")
  , En = class extends Ct {
    async inTime(e, t) {
        if (this.stuck)
            return t;
        let i = await Promise.race([e(), new Promise(r => setTimeout( () => r(Bi), fa))]);
        return i === Bi ? (this.stuck = !0,
        t) : i
    }
    _isAvailable() {
        return this.inTime( () => super._isAvailable(), !1)
    }
    _get(e) {
        return this.inTime( () => super._get(e), null)
    }
    _remove(e) {
        return this.inTime( () => super._remove(e), void 0)
    }
    _set(e, t) {
        return this.inTime( () => super._set(e, t), void 0)
    }
}
  , Go = n => bt(n, {
    persistence: [En, kt, Fe]
});
var ma = {
    swords: '<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" /> <line x1="13" x2="19" y1="19" y2="13" /> <line x1="16" x2="20" y1="16" y2="20" /> <line x1="19" x2="21" y1="21" y2="19" /> <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" /> <line x1="5" x2="9" y1="14" y2="18" /> <line x1="7" x2="4" y1="17" y2="20" /> <line x1="3" x2="5" y1="19" y2="21" />',
    "hand-heart": '<path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" /> <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /> <path d="m2 15 6 6" /> <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />',
    naira: '<path d="M7 20V4l10 16V4" /> <path d="M4 10h16" /> <path d="M4 14h16" />',
    sofa: '<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" /> <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" /> <path d="M4 18v2" /> <path d="M20 18v2" /> <path d="M12 4v9" />',
    bed: '<path d="M2 4v16" /> <path d="M2 8h18a2 2 0 0 1 2 2v10" /> <path d="M2 17h20" /> <path d="M6 8v9" />',
    tv: '<path d="m17 2-5 5-5-5" /> <rect width="20" height="15" x="2" y="7" rx="2" />',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />',
    briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /> <rect width="20" height="14" x="2" y="6" rx="2" />',
    landmark: '<path d="M10 18v-7" /> <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" /> <path d="M14 18v-7" /> <path d="M18 18v-7" /> <path d="M3 22h18" /> <path d="M6 18v-7" />',
    handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3" /> <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /> <path d="m21 3 1 11h-2" /> <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /> <path d="M3 4h8" />',
    vote: '<path d="m9 12 2 2 4-4" /> <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" /> <path d="M22 19H2" />',
    gem: '<path d="M10.5 3 8 9l4 13 4-13-2.5-6" /> <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" /> <path d="M2 9h20" />',
    "message-circle-heart": '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /> <path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z" />',
    "party-popper": '<path d="M5.8 11.3 2 22l10.7-3.79" /> <path d="M4 3h.01" /> <path d="M22 8h.01" /> <path d="M15 2h.01" /> <path d="M22 20h.01" /> <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" /> <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" /> <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" /> <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />',
    "moon-star": '<path d="M18 5h4" /> <path d="M20 3v4" /> <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />',
    laptop: '<path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" /> <path d="M20.054 15.987H3.946" />',
    "volume-2": '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /> <path d="M16 9a5 5 0 0 1 0 6" /> <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />',
    "volume-x": '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /> <line x1="22" x2="16" y1="9" y2="15" /> <line x1="16" x2="22" y1="9" y2="15" />',
    music: '<path d="M9 18V5l12-2v13" /> <circle cx="6" cy="18" r="3" /> <circle cx="18" cy="16" r="3" />',
    megaphone: '<path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" /> <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" /> <path d="M8 6v8" />',
    "key-round": '<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" /> <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />',
    flag: '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />',
    "briefcase-business": '<path d="M12 12h.01" /> <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /> <path d="M22 13a18.15 18.15 0 0 1-20 0" /> <rect width="20" height="14" x="2" y="6" rx="2" />',
    "building-2": '<path d="M10 12h4" /> <path d="M10 8h4" /> <path d="M14 21v-3a2 2 0 0 0-4 0v3" /> <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" /> <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />',
    castle: '<path d="M10 5V3" /> <path d="M14 5V3" /> <path d="M15 21v-3a3 3 0 0 0-6 0v3" /> <path d="M18 3v8" /> <path d="M18 5H6" /> <path d="M22 11H2" /> <path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" /> <path d="M6 3v8" />',
    gavel: '<path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" /> <path d="m16 16 6-6" /> <path d="m21.5 10.5-8-8" /> <path d="m8 8 6-6" /> <path d="m8.5 7.5 8 8" />',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <path d="M16 3.128a4 4 0 0 1 0 7.744" /> <path d="M22 21v-2a4 4 0 0 0-3-3.87" /> <circle cx="9" cy="7" r="4" />',
    rocket: '<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /> <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" /> <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" /> <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />',
    mic: '<path d="M12 19v3" /> <path d="M19 10v2a7 7 0 0 1-14 0v-2" /> <rect x="9" y="2" width="6" height="13" rx="3" />',
    crown: '<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" /> <path d="M5 21h14" />',
    flame: '<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />',
    shuffle: '<path d="m18 14 4 4-4 4" /> <path d="m18 2 4 4-4 4" /> <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" /> <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" /> <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />',
    "mail-check": '<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" /> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /> <path d="m16 19 2 2 4-4" />',
    check: '<path d="M20 6 9 17l-5-5" />',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 10 0v4" />',
    "share-2": '<circle cx="18" cy="5" r="3" /> <circle cx="6" cy="12" r="3" /> <circle cx="18" cy="19" r="3" /> <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /> <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />',
    "pen-line": '<path d="M13 21h8" /> <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />',
    home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /> <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />',
    map: '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" /> <path d="M15 5.764v15" /> <path d="M9 3.236v15" />',
    footprints: '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" /> <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" /> <path d="M16 17h4" /> <path d="M4 13h4" />',
    "map-pin": '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /> <circle cx="12" cy="10" r="3" />',
    waves: '<path d="M2 12q2.5 2 5 0t5 0 5 0 5 0" /> <path d="M2 19q2.5 2 5 0t5 0 5 0 5 0" /> <path d="M2 5q2.5 2 5 0t5 0 5 0 5 0" />',
    trees: '<path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" /> <path d="M7 16v6" /> <path d="M13 19v3" /> <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />',
    scissors: '<circle cx="6" cy="6" r="3" /> <path d="M8.12 8.12 12 12" /> <path d="M20 4 8.12 15.88" /> <circle cx="6" cy="18" r="3" /> <path d="M14.8 14.8 20 20" />',
    "shopping-cart": '<circle cx="8" cy="21" r="1" /> <circle cx="19" cy="21" r="1" /> <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />',
    search: '<circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" />',
    store: '<path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" /> <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" /> <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />',
    building: '<path d="M12 10h.01" /> <path d="M12 14h.01" /> <path d="M12 6h.01" /> <path d="M16 10h.01" /> <path d="M16 14h.01" /> <path d="M16 6h.01" /> <path d="M8 10h.01" /> <path d="M8 14h.01" /> <path d="M8 6h.01" /> <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" /> <rect x="4" y="2" width="16" height="20" rx="2" />',
    church: '<path d="M10 9h4" /> <path d="M12 7v5" /> <path d="M14 21v-3a2 2 0 0 0-4 0v3" /> <path d="m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9" /> <path d="M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14" />',
    mountain: '<path d="m8 3 4 8 5-5 5 15H2L8 3z" />',
    "ferris-wheel": '<circle cx="12" cy="12" r="2" /> <path d="M12 2v4" /> <path d="m6.8 15-3.5 2" /> <path d="m20.7 7-3.5 2" /> <path d="M6.8 9 3.3 7" /> <path d="m20.7 17-3.5-2" /> <path d="m9 22 3-8 3 8" /> <path d="M8 22h8" /> <path d="M18 18.7a9 9 0 1 0-12 0" />',
    plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />',
    utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /> <path d="M7 2v20" /> <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />',
    hotel: '<path d="M10 22v-6.57" /> <path d="M12 11h.01" /> <path d="M12 7h.01" /> <path d="M14 15.43V22" /> <path d="M15 16a5 5 0 0 0-6 0" /> <path d="M16 11h.01" /> <path d="M16 7h.01" /> <path d="M8 11h.01" /> <path d="M8 7h.01" /> <rect x="4" y="2" width="16" height="20" rx="2" />',
    hospital: '<path d="M12 7v4" /> <path d="M14 21v-3a2 2 0 0 0-4 0v3" /> <path d="M14 9h-4" /> <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" /> <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />',
    "graduation-cap": '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /> <path d="M22 10v6" /> <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />',
    fish: '<path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" /> <path d="M18 12v.5" /> <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" /> <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" /> <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" /> <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />',
    heart: '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />',
    smartphone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2" /> <path d="M12 18h.01" />',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2" /> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />',
    "messages-square": '<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" /> <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />',
    bus: '<path d="M8 6v6" /> <path d="M15 6v6" /> <path d="M2 12h19.6" /> <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" /> <circle cx="7" cy="18" r="2" /> <path d="M9 18h5" /> <circle cx="16" cy="18" r="2" />',
    car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /> <circle cx="7" cy="17" r="2" /> <path d="M9 17h6" /> <circle cx="17" cy="17" r="2" />',
    trophy: '<path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" /> <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" /> <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" /> <path d="M4 22h16" /> <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" /> <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" />',
    shirt: '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />',
    dog: '<path d="M11.25 16.25h1.5L12 17z" /> <path d="M16 14v.5" /> <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" /> <path d="M8 14v.5" /> <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />',
    "gamepad-2": '<line x1="6" x2="10" y1="11" y2="11" /> <line x1="8" x2="8" y1="9" y2="13" /> <line x1="15" x2="15.01" y1="12" y2="12" /> <line x1="18" x2="18.01" y1="10" y2="10" /> <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />',
    "trending-up": '<path d="M16 7h6v6" /> <path d="m22 7-8.5 8.5-5-5L2 17" />',
    "users-round": '<path d="M18 21a8 8 0 0 0-16 0" /> <circle cx="10" cy="8" r="5" /> <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />',
    "message-circle": '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />',
    sparkles: '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" />',
    "arrow-left": '<path d="m12 19-7-7 7-7" /> <path d="M19 12H5" />',
    menu: '<path d="M4 5h16" /> <path d="M4 12h16" /> <path d="M4 19h16" />',
    ambulance: '<path d="M10 10H6" /> <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /> <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" /> <path d="M8 8v4" /> <path d="M9 18h6" /> <circle cx="17" cy="18" r="2" /> <circle cx="7" cy="18" r="2" />',
    siren: '<path d="M7 18v-6a5 5 0 1 1 10 0v6" /> <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" /> <path d="M21 12h1" /> <path d="M18.5 4.5 18 5" /> <path d="M2 12h1" /> <path d="M12 2v1" /> <path d="m4.929 4.929.707.707" /> <path d="M12 12v6" />',
    scale: '<path d="M12 3v18" /> <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" /> <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" /> <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" /> <path d="M7 21h10" />',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />',
    "log-out": '<path d="m16 17 5-5-5-5" /> <path d="M21 12H9" /> <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />',
    wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /> <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />',
    "id-card": '<path d="M13 19a4 4 0 00-8 0" /> <path d="M16 10h2" /> <path d="M16 14h2" /> <circle cx="9" cy="12" r="3" /> <rect x="2" y="5" width="20" height="14" rx="2" />',
    "circle-help": '<circle cx="12" cy="12" r="10" /> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /> <path d="M12 17h.01" />',
    "message-circle-off": '<path d="m2 2 20 20" /> <path d="M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989" /> <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />',
    "maximize-2": '<path d="M15 3h6v6" /> <path d="m21 3-7 7" /> <path d="m3 21 7-7" /> <path d="M9 21H3v-6" />',
    "minimize-2": '<path d="m14 10 7-7" /> <path d="M20 10h-6V4" /> <path d="m3 21 7-7" /> <path d="M4 14h6v6" />',
    x: '<path d="M18 6 6 18" /> <path d="m6 6 12 12" />',
    phone: '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />',
    receipt: '<path d="M12 17V7" /> <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8" /> <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />',
    "user-round": '<circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" />',
    "log-in": '<path d="m10 17 5-5-5-5" /> <path d="M15 12H3" /> <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />'
};
function zo(n, e=20, t="") {
    return `<svg class="ico ${t}" xmlns="http://www.w3.org/2000/svg" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ma[n] || ""}</svg>`
}
var m = (n, e={}) => new he({
    color: n,
    flatShading: !0,
    roughness: .85,
    ...e
});
function l(n, e, t, i=0, r=0, s=0) {
    let a = new Rn(e,t);
    return a.position.set(i, r, s),
    a.castShadow = !0,
    a.receiveShadow = !0,
    n.add(a),
    a
}
function Ge(n, e, t) {
    let i = new P(e / Math.SQRT2,n / Math.SQRT2,t,4,1);
    return i.rotateY(Math.PI / 4),
    i
}
function qo() {
    let n = new C
      , e = m("#c9a274")
      , t = m("#b8915f")
      , i = m("#4e3b2c")
      , r = m("#ece0c8")
      , s = m("#e6b98c")
      , a = m("#e8a628", {
        metalness: .35,
        roughness: .45
    })
      , o = m("#d8c6a5")
      , c = m("#6b665e")
      , h = m("#f4f1ea")
      , d = m("#d99a57")
      , g = m("#4f9a4a")
      , I = m("#c7a77e");
    l(n, new f(118,.4,118), d, 0, .2, 0);
    for (let[u,E] of [[-40, 40], [40, 40], [-40, -40], [40, -40]])
        l(n, new f(26,.5,26), g, u, .3, E);
    for (let u of [-1, 1])
        for (let E of [-1, 1])
            l(n, new f(48,2.4,1.2), I, E * 35, 1.4, u * 59),
            l(n, new f(1.2,2.4,48), I, u * 59, 1.4, E * 35);
    let y = 15;
    l(n, Ge(64, 58, y), e, 0, .4 + y / 2, 0);
    for (let u = 0; u < 4; u++) {
        let E = new C;
        E.rotation.y = u * Math.PI / 2,
        n.add(E);
        for (let w = -4; w <= 4; w++) {
            let j = l(E, new f(4.6,y,1.4), w % 2 ? t : e, w * 6.6, .4 + y / 2, 30.6);
            if (j.rotation.x = -.1,
            w < 4) {
                let $ = l(E, new f(1.5,y - 2,.6), i, w * 6.6 + 3.3, .4 + y / 2, 30.4);
                $.rotation.x = -.1
            }
        }
        for (let w = -14; w <= 14; w++)
            l(E, new f(1.6,w % 2 ? 1.2 : 2,1.2), r, w * 2, y + 1.2, 28.6)
    }
    l(n, new f(58,.8,58), s, 0, y + .6, 0),
    l(n, new f(40,2.2,40), r, 0, y + 2, 0);
    for (let u = 0; u < 4; u++) {
        let E = new C;
        E.rotation.y = u * Math.PI / 2,
        n.add(E);
        for (let w = -9; w <= 9; w++)
            l(E, new f(1.6,w % 2 ? .9 : 1.6,.9), r, w * 2.1, y + 3.6, 19.6)
    }
    let R = y + 3.1;
    l(n, new P(12.5,13,6,28), o, 0, R + 3, 0);
    for (let u = 0; u < 28; u++) {
        let E = u / 28 * Math.PI * 2
          , w = l(n, new f(.9,4.2,.4), i, Math.sin(E) * 13.05, R + 3, Math.cos(E) * 13.05);
        w.rotation.y = E
    }
    let v = l(n, new ze(13.6,20,10,0,Math.PI * 2,0,Math.PI / 2), a, 0, R + 6, 0);
    v.scale.y = 1.18,
    l(n, new P(.25,.4,4,6), h, 0, R + 6 + 16 + 2, 0),
    l(n, new ze(.7,8,6), h, 0, R + 6 + 16 + 4.2, 0);
    let _ = l(n, new je(1.1,.22,6,16,Math.PI * 1.5), h, 0, R + 6 + 16 + 5.8, 0);
    _.rotation.z = Math.PI * .25;
    for (let[u,E] of [[-21, -21], [21, -21], [-21, 21], [21, 21]])
        l(n, new P(3,3.2,2.6,14), o, u, y + 2.3, E),
        l(n, new ze(3.3,12,6,0,Math.PI * 2,0,Math.PI / 2), a, u, y + 3.6, E),
        l(n, new P(.12,.12,1.6,5), h, u, y + 7.4, E);
    for (let[u,E] of [[-37, -37], [37, -37], [-37, 37], [37, 37]])
        l(n, Ge(7, 4.6, 11), o, u, .4 + 5.5, E),
        l(n, new P(1.8,2.1,46,10), m("#dccbaa"), u, 11.4 + 23, E),
        l(n, new P(2.4,1.8,2.2,10), o, u, 11.4 + 46 + 1, E),
        l(n, new P(3,3,1.4,12), c, u, 11.4 + 46 + 2.8, E),
        l(n, new P(1.6,1.6,6,10), m("#e6d9bf"), u, 11.4 + 46 + 6.5, E),
        l(n, new Dt(2.2,6,10), h, u, 11.4 + 46 + 12.5, E),
        l(n, new P(.1,.12,3.5,5), h, u, 11.4 + 46 + 17.2, E);
    for (let u of [-9, 9])
        l(n, new f(6,6.5,4), r, u, .4 + 3.25, 36),
        l(n, new f(3.6,4.2,4.2), i, u, .4 + 2.1, 36),
        l(n, new P(1.8,1.8,4.3,10,1,!1,0,Math.PI), i, u, .4 + 4.2, 36).rotation.set(Math.PI / 2, 0, Math.PI / 2);
    return n
}
function ge(n, e, t=.55) {
    let i = new ye
      , r = e * t;
    return i.moveTo(-n / 2, 0),
    i.lineTo(-n / 2, r),
    i.quadraticCurveTo(-n / 2, r + (e - r) * .75, 0, e),
    i.quadraticCurveTo(n / 2, r + (e - r) * .75, n / 2, r),
    i.lineTo(n / 2, 0),
    i.closePath(),
    i
}
var qi = (n, e) => {
    let t = new ye;
    return t.moveTo(-n / 2, 0),
    t.lineTo(n / 2, 0),
    t.lineTo(0, e),
    t.closePath(),
    t
}
  , Y = (n, e=.4) => new Lt(n,{
    depth: e,
    bevelEnabled: !1
});
function yn(n, e, t, i, r) {
    let s = new k(...e)
      , a = new k(...t)
      , o = l(n, new f(i,i,s.distanceTo(a)), r);
    return o.position.copy(s).add(a).multiplyScalar(.5),
    o.quaternion.setFromUnitVectors(new k(0,0,1), a.clone().sub(s).normalize()),
    o
}
function Ko() {
    let n = new C
      , e = m("#f3efe6")
      , t = m("#9a4a2c")
      , i = m("#e9b949", {
        metalness: .25,
        roughness: .5
    })
      , r = m("#c9952f", {
        metalness: .25,
        roughness: .5
    })
      , s = m("#2f3a46", {
        roughness: .25,
        metalness: .3
    })
      , a = m("#d9d2c4")
      , o = m("#cfc6b4")
      , c = m("#4f9a4a")
      , h = m("#7f8e99", {
        roughness: .3,
        metalness: .3
    })
      , d = 21
      , g = 5
      , I = 34
      , y = 46;
    l(n, new f(150,.4,150), a, 0, .2, 0);
    for (let _ = 0; _ < 4; _++)
        l(n, new f(44 - _ * 2,.35,3), o, 0, .55 + _ * .35, y + 12 - _ * 2.4);
    for (let _ of [-34, 34])
        l(n, new f(22,.6,16), c, _, .5, y + 18);
    let R = 1.8;
    l(n, new f(2 * y + 8,R - .4,2 * y + 8), o, 0, .4 + (R - .4) / 2, 0);
    for (let _ of [0, Math.PI / 2]) {
        let u = new C;
        u.rotation.y = _,
        u.position.y = R,
        n.add(u),
        l(u, new f(2 * d,g,2 * y), e, 0, g / 2, 0);
        let E = new ye;
        E.moveTo(-d - 1.2, g - .6),
        E.lineTo(d + 1.2, g - .6),
        E.lineTo(0, I),
        E.closePath();
        let w = l(u, Y(E, 2 * y - 1), i, 0, 0, -y + .5);
        w.castShadow = !0;
        let j = d + 1.2
          , $ = g - .6
          , We = Math.hypot(I - $, j)
          , J = (L, A, x) => [L * (j * (1 - A) + .25 * (I - $) / We), $ + (I - $) * A + .25 * j / We, x];
        for (let L of [-1, 1])
            for (let A of [-1, 1])
                for (let x = 0; x <= 7; x++)
                    yn(u, J(L, .02, A * (y - 2.5)), J(L, .97, A * (y - 1 - x * 3.6)), .3, r);
        for (let L of [-1, 1]) {
            let A = new C;
            A.position.z = L * (y + .2),
            L < 0 && (A.rotation.y = Math.PI),
            u.add(A),
            l(A, Y(qi(2 * d + 5, I + 2.6), .6), t, 0, -.6, .2),
            l(A, Y(qi(2 * d + 1.4, I), .6), e, 0, 0, .5),
            l(A, Y(ge(11, 21, .5), .4), t, 0, .3, 1),
            l(A, Y(ge(9.6, 19.6, .5), .4), s, 0, .4, 1.2);
            for (let x = 1; x < 6; x++)
                l(A, new f(.25,12,.2), e, -4.8 + x * 1.6, 7.5, 1.7);
            for (let x of [-10.5, 10.5])
                l(A, Y(ge(5.6, 9.5), .4), t, x, 0, 1),
                l(A, Y(ge(4.4, 8.5), .4), s, x, 0, 1.2)
        }
    }
    let v = R + I - 6;
    l(n, Ge(17, .6, 16), h, 0, v + 8, 0);
    for (let[_,u] of [[-8.5, -8.5], [8.5, -8.5], [8.5, 8.5], [-8.5, 8.5]])
        yn(n, [_, v, u], [0, v + 16, 0], .8, i);
    for (let[_,u] of [[[-8.5, -8.5], [8.5, -8.5]], [[8.5, -8.5], [8.5, 8.5]], [[8.5, 8.5], [-8.5, 8.5]], [[-8.5, 8.5], [-8.5, -8.5]]])
        yn(n, [_[0], v + .4, _[1]], [u[0], v + .4, u[1]], .8, i);
    l(n, new f(.9,12,.9), m("#2a2a2a"), 0, v + 16 + 6, 0),
    l(n, new f(6,.9,.9), m("#2a2a2a"), 0, v + 16 + 8.5, 0);
    for (let[_,u] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
        let w = _ * (d + 8)
          , j = u * (d + 16 / 2);
        l(n, new f(16,6,16), e, w, R + 3, j),
        l(n, new f(16 + .6,.8,16 + .6), t, w, R + 6.2, j);
        for (let[$,We,J] of [[0, u * 16 / 2, 0], [_ * 16 / 2, 0, Math.PI / 2]])
            for (let L = -2; L <= 2; L++) {
                let A = l(n, Y(ge(1.8, 3.6), .2), s, w + $ + (J ? 0 : L * 3), R, j + We + (J ? L * 3 : 0) + (J ? 0 : u * .05));
                A.rotation.y = J ? _ * Math.PI / 2 : u > 0 ? 0 : Math.PI,
                J && (A.position.x += _ * .05)
            }
    }
    for (let _ of [-26, 26])
        for (let u of [y + 6, y + 22])
            ga(n, _, u);
    return n
}
function ga(n, e, t) {
    let i = m("#8a6a45")
      , r = m("#2f7a3a");
    l(n, new P(.35,.5,9,6), i, e, 4.5, t);
    for (let s = 0; s < 7; s++) {
        let a = s / 7 * Math.PI * 2;
        l(n, new f(.9,.2,5), r, e + Math.sin(a) * 2, 8.8, t + Math.cos(a) * 2).rotation.set(.35, a, 0)
    }
}
function Yo() {
    let n = new C
      , e = m("#d6bf9c")
      , t = m("#c2a882")
      , i = m("#5a4a3a")
      , r = m("#8d8d8d")
      , s = m("#2a2a2a")
      , a = 9
      , o = 78;
    l(n, new f(a + 3,2,a + 3), t, 0, 1, 0),
    l(n, new f(a,o,a), e, 0, 2 + o / 2, 0);
    for (let c = 0; c < 4; c++) {
        let h = new C;
        h.rotation.y = c * Math.PI / 2,
        n.add(h);
        for (let d of [-2.6, 0, 2.6])
            l(h, Y(ge(1.8, 6.5), .3), i, d, 2, a / 2 + .01);
        for (let d = 12; d < o - 18; d += 3.2)
            l(h, new f(.5,1.6,.2), i, 0, d, a / 2 + .05);
        l(h, new f(3.6,22,1.4), t, 0, o - 9, a / 2 + .6),
        l(h, new f(a + 4.4,3.4,1.4), t, 0, o - 13, a / 2 + .6)
    }
    l(n, new f(a + 4.4,3.4,a + 4.4), t, 0, o - 13, 0),
    l(n, Ge(a + .6, 6.2, 5), e, 0, 2 + o + 2.5, 0),
    l(n, new f(7.6,.4,7.6), r, 0, 2 + o + 5.2, 0);
    for (let[c,h,d,g] of [[0, 3.7, 7.6, .15], [0, -3.7, 7.6, .15], [3.7, 0, .15, 7.6], [-3.7, 0, .15, 7.6]])
        l(n, new f(d,1.2,g), r, c, 2 + o + 5.9, h);
    return l(n, Ge(5, 1, 6), e, 0, 2 + o + 8.2, 0),
    l(n, new f(.6,8,.6), s, 0, 2 + o + 15, 0),
    l(n, new f(4.2,.6,.6), s, 0, 2 + o + 16.5, 0),
    n
}
function $o() {
    let n = new C
      , e = m("#d7d3ca")
      , t = m("#efeae0")
      , i = m("#3f7a52")
      , r = m("#e9e9e9");
    l(n, new f(170,.3,110), e, 0, .15, 0);
    for (let o = 0; o < 5; o++)
        l(n, new f(80,1.2,4), t, 0, .6 + o * 1.2, -58 - o * 4);
    l(n, new f(84,.6,22), i, 0, 12, -66);
    for (let o of [-38, 38])
        l(n, new f(1,11,1), t, o, 6, -58);
    let s = ( () => {
        let o = document.createElement("canvas");
        o.width = 30,
        o.height = 20;
        let c = o.getContext("2d");
        c.fillStyle = "#008751",
        c.fillRect(0, 0, 10, 20),
        c.fillRect(20, 0, 10, 20),
        c.fillStyle = "#fff",
        c.fillRect(10, 0, 10, 20);
        let h = new Ee(o);
        return h.colorSpace = _e,
        h
    }
    )()
      , a = new he({
        map: s,
        side: Ot
    });
    for (let o = -3; o <= 3; o++)
        l(n, new P(.15,.2,16,6), r, o * 14, 8, 50),
        l(n, new Ie(4.5,3), a, o * 14 + 2.3, 14.5, 50);
    return n
}
function Jo() {
    let n = new C
      , e = m("#e3ddd0")
      , t = m("#6fb7e0", {
        roughness: .2
    });
    l(n, new P(14,14,.4,28), e, 0, .2, 0),
    l(n, new P(10,10,.6,28), t, 0, .5, 0),
    l(n, new P(1.2,1.6,4,10), e, 0, 2, 0);
    for (let i = 0; i < 8; i++) {
        let r = i / 8 * Math.PI * 2;
        l(n, new f(4,.5,1.2), e, Math.sin(r) * 17, .5, Math.cos(r) * 17).rotation.y = r
    }
    return n
}
function Xo() {
    let n = new C
      , e = m("#f2efe6")
      , t = m("#1f6fd1")
      , i = m("#d43d3d")
      , r = m("#f3f3f3")
      , s = m("#bdb6a8");
    l(n, new f(26,.3,22), s, 0, .15, 0),
    l(n, new f(16,5,9), e, 0, 2.8, -5),
    l(n, new f(18,.4,7), t, 0, 4.2, 2.5).rotation.x = .12;
    let a = document.createElement("canvas");
    a.width = 512,
    a.height = 128;
    let o = a.getContext("2d");
    o.fillStyle = "#1f6fd1",
    o.fillRect(0, 0, 512, 128),
    o.fillStyle = "#fff",
    o.font = "800 78px DM Sans, sans-serif",
    o.textAlign = "center",
    o.textBaseline = "middle",
    o.fillText("IBRO FISH", 256, 68);
    let c = new Ee(a);
    c.colorSpace = _e,
    l(n, new Ie(12,3), new he({
        map: c
    }), 0, 6.8, -.4),
    l(n, new f(12,3.4,.3), e, 0, 6.8, -.6);
    for (let[h,d] of [[-7, 6], [0, 7], [7, 6], [-4, 10], [4, 10]]) {
        l(n, new P(1.1,1.1,.12,12), i, h, 1.1, d),
        l(n, new P(.12,.12,1,6), i, h, .55, d);
        for (let g of [0, Math.PI / 2, Math.PI, Math.PI * 1.5])
            l(n, new f(.7,.7,.7), r, h + Math.sin(g) * 1.7, .45, d + Math.cos(g) * 1.7)
    }
    return n
}
function Zo() {
    let n = new C
      , e = m("#f7f3ea")
      , t = m("#e7dfd0")
      , i = 2
      , r = 3.2 * i
      , s = v => {
        let _ = new ye
          , u = (E, w) => [v * E * i, w * i];
        return _.moveTo(...u(6.6, 21.2)),
        _.lineTo(...u(5.3, 21.2)),
        _.lineTo(...u(5.3, 9.6)),
        _.lineTo(...u(4.75, 9.6)),
        _.lineTo(...u(4.75, 0)),
        _.lineTo(...u(13.3, 0)),
        _.quadraticCurveTo(...u(6.6, 6.2), ...u(6.6, 14.5)),
        _.lineTo(...u(6.6, 21.2)),
        _
    }
    ;
    for (let v of [-1, 1]) {
        let _ = new Lt(s(v),{
            depth: r,
            bevelEnabled: !1,
            curveSegments: 14
        });
        _.translate(0, 0, -r / 2),
        l(n, _, e),
        l(n, new f(1.3 * i,9.3 * i,1.2 * i), t, v * 6.2 * i, 9.3 * i / 2, r / 2 + .6 * i),
        l(n, new f(1.3 * i,9.3 * i,1.2 * i), t, v * 6.2 * i, 9.3 * i / 2, -r / 2 - .6 * i)
    }
    l(n, new f(10.6 * i,2.9 * i,r), e, 0, 11.05 * i, 0);
    let a = document.createElement("canvas");
    a.width = 1024,
    a.height = 280;
    let o = a.getContext("2d");
    o.fillStyle = "#f7f3ea",
    o.fillRect(0, 0, 1024, 280),
    o.fillStyle = "#222",
    o.font = "500 64px 'DM Sans', sans-serif",
    o.textBaseline = "middle",
    o.textAlign = "right",
    o.fillText("Y O U   A R E", 420, 200),
    o.textAlign = "left",
    o.fillText("W E L C O M E", 604, 200),
    o.fillStyle = "#c0392b",
    o.beginPath(),
    o.ellipse(512, 60, 34, 16, 0, 0, Math.PI * 2),
    o.fill(),
    o.fillStyle = "#1d1d1d",
    o.beginPath(),
    o.moveTo(482, 84),
    o.lineTo(542, 84),
    o.lineTo(542, 140),
    o.quadraticCurveTo(542, 186, 512, 196),
    o.quadraticCurveTo(482, 186, 482, 140),
    o.closePath(),
    o.fill(),
    o.strokeStyle = "#fff",
    o.lineWidth = 9,
    o.beginPath(),
    o.moveTo(492, 98),
    o.lineTo(512, 128),
    o.lineTo(532, 98),
    o.moveTo(512, 128),
    o.lineTo(512, 180),
    o.stroke(),
    o.fillStyle = "#f4efe6",
    o.fillRect(450, 100, 22, 90),
    o.fillRect(552, 100, 22, 90),
    o.fillStyle = "#2f7d32",
    o.beginPath(),
    o.ellipse(512, 210, 90, 14, 0, 0, Math.PI * 2),
    o.fill();
    let c = new Ee(a);
    c.colorSpace = _e;
    let h = new he({
        map: c,
        roughness: .9
    });
    for (let v of [r / 2 + .02, -r / 2 - .02]) {
        let _ = l(n, new Ie(9.4 * i,2.6 * i), h, 0, 11.05 * i, v);
        v < 0 && (_.rotation.y = Math.PI),
        _.castShadow = !1
    }
    let d = document.createElement("canvas");
    d.width = 30,
    d.height = 20;
    let g = d.getContext("2d");
    g.fillStyle = "#008751",
    g.fillRect(0, 0, 10, 20),
    g.fillRect(20, 0, 10, 20),
    g.fillStyle = "#fff",
    g.fillRect(10, 0, 10, 20);
    let I = new Ee(d);
    I.colorSpace = _e;
    let y = l(n, new Ie(2.6 * i,1.7 * i), new he({
        map: I,
        side: Ot
    }), 0, 16.6 * i, 0);
    y.userData.animated = !0;
    let R = new Pn({
        color: 15328474
    });
    for (let[v,_,u,E] of [[-5.3, 19.1, -1.3, 17.4], [-5.3, 13.6, -1.3, 15.8], [5.3, 19.1, 1.3, 17.4], [5.3, 13.6, 1.3, 15.8]])
        n.add(new Sn(new Tn().setFromPoints([new k(v * i,_ * i,0), new k(u * i,E * i,0)]),R));
    return n
}
function Qo() {
    let n = new C
      , e = m("#e9e9ef")
      , t = m("#d43d3d")
      , i = m("#f2b53a")
      , r = m("#1f6fd1")
      , s = m("#1f9d55")
      , a = m("#d9d2c3");
    l(n, new f(90,.3,70), a, 0, .15, 0);
    let o = new C;
    o.position.set(0, 26, -10),
    n.add(o),
    l(o, new je(20,.6,6,32), e),
    l(o, new je(14,.35,6,32), e);
    let c = [t, i, r, s];
    for (let h = 0; h < 16; h++) {
        let d = h / 16 * Math.PI * 2
          , g = l(o, new f(.4,20,.4), e, Math.cos(d) * 10, Math.sin(d) * 10, 0);
        g.rotation.z = d - Math.PI / 2,
        l(o, new f(2.4,2.4,2.4), c[h % 4], Math.cos(d) * 20, Math.sin(d) * 20 - 1.8, 0)
    }
    for (let h of [-1, 1]) {
        let d = l(n, new f(1,28,1), e, h * 9, 13, -10);
        d.rotation.z = h * .32
    }
    o.userData.spin = !0,
    l(n, new P(7,7,1,20), i, 26, .8, 16),
    l(n, new Dt(8,5,20), t, 26, 7, 16),
    l(n, new P(.5,.5,5,8), e, 26, 3.5, 16);
    for (let[h,d] of [[-28, r], [-18, s]])
        l(n, new f(7,3.5,5), m("#f4efe6"), h, 1.75, 22),
        l(n, new f(7.6,.4,6), d, h, 3.7, 22.5);
    return n
}
var _a = ["#e0b08a", "#c98e64", "#a96d45", "#8a5432", "#6e3f22", "#553019", "#3e2312"]
  , Ea = ["#141110", "#2b1d16", "#4a2f1f", "#6b4428", "#9a6a3a", "#c9a46b", "#5b2a86"]
  , Ki = ["#1f6fd1", "#1f9d55", "#d43d3d", "#f08a24", "#7b4dd8", "#e0458c", "#16a39a", "#1c2433", "#f3eee2", "#c99a1e"]
  , tc = {
    woman: "Female",
    man: "Male"
}
  , nc = {
    woman: {
        braids: "Braids",
        weave: "Long weave",
        locs: "Locs",
        afro: "Afro",
        bun: "Bun",
        ponytail: "Ponytail",
        lowcut: "Low cut",
        gele: "Gele",
        hijab: "Hijab"
    },
    man: {
        lowcut: "Low cut",
        bald: "Bald",
        afro: "Afro",
        locs: "Locs",
        braids: "Braids",
        curls: "Curls",
        fila: "Fila cap"
    }
}
  , ic = {
    woman: {
        casual: "Casual",
        office: "Office",
        owambe: "Owambe gown",
        kaftan: "Kaftan",
        corper: "Corper"
    },
    man: {
        casual: "Casual",
        office: "Office",
        kaftan: "Kaftan",
        agbada: "Agbada",
        corper: "Corper",
        hoodie: "Hoodie"
    }
}
  , rc = {
    plain: "Plain",
    ankara: "Ankara",
    adire: "Adire",
    asooke: "Aso-oke",
    lace: "Lace"
}
  , sc = {
    hustler: {
        icon: "briefcase",
        name: "Hustler",
        text: "Sees money everywhere. Business skill grows faster."
    },
    civil: {
        icon: "landmark",
        name: "Civil Servant Energy",
        text: "Work stress drops slower. Promotions\u2026 take their time."
    },
    connected: {
        icon: "handshake",
        name: "Connected",
        text: "Knows somebody for Aso Rock. Favours come easier."
    },
    politician: {
        icon: "vote",
        name: "Politician",
        text: "Can talk anybody into anything. Campaigns and votes come easier."
    },
    bigboy: {
        icon: "gem",
        name: "Abuja Big Boy",
        text: "Expensive taste, big connections. Everyone wants to be seen with you."
    },
    smooth: {
        icon: "message-circle-heart",
        name: "Smooth Talker",
        text: "Mouth sweet like honey. Charisma grows faster."
    },
    owambe: {
        icon: "party-popper",
        name: "Owambe Spirit",
        text: "Ready to spray money any weekend. Parties hit different."
    },
    night: {
        icon: "moon-star",
        name: "Wuse 2 After Dark",
        text: "The night is young. Loves nightlife; mornings are hard."
    },
    tech: {
        icon: "laptop",
        name: "Tech Bro or Sis",
        text: "Three startup ideas before breakfast. Coding grows faster."
    },
    musical: {
        icon: "music",
        name: "Musical",
        text: "Hums all day. Music skill grows faster."
    },
    gist: {
        icon: "megaphone",
        name: "Gist Master",
        text: "Knows everybody's business. Makes friends twice as fast."
    },
    landagent: {
        icon: "key-round",
        name: "Land Agent",
        text: "Can sell sand in the desert. Property deals pay more."
    }
}
  , ac = {
    president: {
        icon: "flag",
        name: "Mr/Madam President",
        text: "Win the presidential election and move into the Villa."
    },
    minister: {
        icon: "briefcase-business",
        name: "Honourable Minister",
        text: "Get appointed Minister and run a ministry."
    },
    permsec: {
        icon: "building-2",
        name: "Perm Sec",
        text: "Reach the top level of any career."
    },
    mansion: {
        icon: "castle",
        name: "Maitama Mansion",
        text: "Build a net worth of \u20A61,000,000,000."
    },
    senator: {
        icon: "gavel",
        name: "Distinguished Senator",
        text: "Win an election in Abuja Life."
    },
    padi: {
        icon: "users",
        name: "Everybody's Padi",
        text: "Become best friends with 5 people."
    },
    unicorn: {
        icon: "rocket",
        name: "Abuja Unicorn",
        text: "Get your startup funded."
    },
    star: {
        icon: "mic",
        name: "Afrobeats Star",
        text: "Max out the Music skill."
    }
}
  , oc = 15e4
  , cc = [{
    id: "eat",
    text: "Eat something",
    pay: 2e3,
    check: "food"
}, {
    id: "chat",
    text: "Say hi in the chat",
    pay: 1e3
}, {
    id: "job",
    text: "Get a job",
    pay: 3e3,
    check: "job"
}, {
    id: "work",
    text: "Work one shift",
    pay: 5e3,
    check: "workDay"
}, {
    id: "ride",
    text: "Take a keke, taxi or Along",
    pay: 2e3
}, {
    id: "home",
    text: "Go to your house",
    pay: 2e3
}]
  , hc = {
    senator: {
        icon: "crown",
        name: "Senator's Pikin!",
        tag: "Born with a silver spoon. Don't waste am.",
        perks: ["\u20A6150,000 to start + first month's rent paid (same as everyone)", "Family allowance: \u20A650,000 every month for your first 6 months", "Police don't stop you at random (they know your papa)", "VIP: free entry to Club Zuma", "Can live anywhere, even Maitama"]
    },
    civil: {
        icon: "landmark",
        name: "Civil Servant's Pikin!",
        tag: "Steady home, steady life.",
        perks: ["\u20A6150,000 to start + first month's rent paid (same as everyone)", "Family allowance: \u20A620,000 every month for your first 3 months", "Food lasts 10% longer (good home training)", "Can live up to Gwarinpa"]
    },
    coop: {
        icon: "flame",
        name: "Hustler's Pikin!",
        tag: "No family money. Self-made hits different.",
        perks: ["\u20A6150,000 to start + first month's rent paid (same as everyone)", "No family allowance: you're on your own", "Hustler: your businesses pay half the tax", "Start in Nyanya or Kubwa and work your way up"]
    }
}
  , ya = {
    senator: {
        allowance: 5e4,
        months: 6,
        noRandomStops: !0,
        freeClub: !0
    },
    civil: {
        allowance: 2e4,
        months: 3,
        foodSlow: 1.1
    },
    coop: {
        halfTax: !0
    }
}
  , lc = n => ya[n]?.foodSlow || 1
  , Ia = "abjlife-birth-v1"
  , Yi = {
    senator: "012",
    civil: "3456789",
    coop: "abcdef"
};
async function dc(n) {
    let e = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n + Ia))
      , t = new Uint8Array(e)[0].toString(16).padStart(2, "0")[0];
    return Object.keys(Yi).find(i => Yi[i].includes(t))
}
var Ta = {
    nyanya: {
        name: "Face-me-I-face-you \xB7 Nyanya",
        tag: "Hard start",
        text: "One room, shared compound, generator noise every night. Cheap rent, big dreams.",
        rentYear: 3e5,
        at: [9.022, 7.5673],
        allowed: ["coop", "civil", "senator"]
    },
    lugbe: {
        name: "Room & parlour \xB7 Lugbe",
        tag: "Airport road",
        text: "Room and parlour off the airport road. New estates going up everywhere, tanker traffic every morning.",
        rentYear: 3e5,
        at: [8.979, 7.379],
        allowed: ["coop", "civil", "senator"]
    },
    kuje: {
        name: "Bungalow \xB7 Kuje",
        tag: "Quiet town",
        text: "A small bungalow in Kuje town. Far from the city, the cheapest rent and peace of mind.",
        rentYear: 24e4,
        at: [8.879, 7.228],
        allowed: ["coop", "civil", "senator"]
    },
    kubwa: {
        name: "Self-contain \xB7 Kubwa",
        tag: "Balanced",
        text: "Your own toilet and kitchen corner. The expressway traffic builds character.",
        rentYear: 72e4,
        at: [9.1527, 7.3411],
        allowed: ["coop", "civil", "senator"]
    },
    gwarinpa: {
        name: "Mini-flat \xB7 Gwarinpa",
        tag: "Comfortable",
        text: "Bedroom, sitting room, real kitchen, in one of Africa's biggest estates.",
        rentYear: 24e5,
        at: [9.11, 7.398],
        allowed: ["civil", "senator"]
    },
    maitama: {
        name: "Duplex \xB7 Maitama",
        tag: "Big spender",
        text: "Embassy neighbours, quiet streets, boys' quarters. Life is sweet.",
        rentYear: 24e6,
        at: [9.0979, 7.4821],
        allowed: ["senator"]
    }
}
  , uc = {
    body: "woman",
    hair: "braids",
    outfit: "casual",
    fabric: "ankara",
    skin: _a[3],
    hairColour: Ea[0],
    top: Ki[3],
    bottom: Ki[7]
}
  , pc = 10080 * 60 * 1e3
  , fc = 1e3
  , mc = [100, 200, 300, 500, 1e3]
  , gc = n => Math.round(Ta[n].rentYear / 12);
export {zn as a, Le as b, Zr as c, Qr as d, es as e, ts as f, ns as g, Ss as h, ji as i, ua as j, Go as k, zo as l, qo as m, Ko as n, Yo as o, $o as p, Jo as q, Xo as r, Zo as s, Qo as t, _a as u, Ea as v, Ki as w, tc as x, nc as y, ic as z, rc as A, sc as B, ac as C, oc as D, cc as E, hc as F, ya as G, lc as H, dc as I, Ta as J, uc as K, pc as L, fc as M, mc as N, gc as O};
