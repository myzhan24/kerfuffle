!function(t){function e(e){for(var o,u,c=e[0],a=e[1],s=e[2],l=0,y=[];l<c.length;l++)u=c[l],r[u]&&y.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);for(f&&f(e);y.length;)y.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={0:0},i=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var f=a;i.push([502,1]),n()}({1385:
/*!**********************************!*\
  !*** ./src/main.js + 16 modules ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/phaser/src/phaser.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/webfontloader/webfontloader.js (<- Module is not an ECMAScript module) */function(t,e,n){"use strict";n.r(e);var o=n(11),r=n.n(o),i=n(501),u=n.n(i);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,f(e).call(this,{key:"BootScene"}))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,r.a.Scene),n=e,(o=[{key:"preload",value:function(){this.fontsReady=!1,this.fontsLoaded=this.fontsLoaded.bind(this),this.add.text(100,100,"loading fonts..."),this.load.image("loaderBg","./assets/images/loader-bg.png"),this.load.image("loaderBar","./assets/images/loader-bar.png"),this.load.audio("sfx","./assets/audio/SoundEffects/8.mp3"),this.load.audio("cursor1","./assets/audio/SoundEffects/cursor1.wav"),this.load.audio("cursor2","./assets/audio/SoundEffects/cursor2.wav"),this.load.audio("jump","./assets/audio/SoundEffects/jump.mp3"),this.load.audio("psi","./assets/audio/SoundEffects/psi.wav"),u.a.load({google:{families:["Bangers"]},active:this.fontsLoaded})}},{key:"update",value:function(){this.fontsReady&&this.scene.start("SplashScene")}},{key:"fontsLoaded",value:function(){this.fontsReady=!0}}])&&a(n.prototype,o),i&&a(n,i),e}();function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,d(e).call(this,{key:"SplashScene"}))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,r.a.Scene),n=e,(o=[{key:"preload",value:function(){this.load.image("mushroom","assets/images/mushroom2.png"),this.load.image("platform","assets/images/platform.png"),this.load.image("rain","assets/images/rain.png")}},{key:"create",value:function(){this.scene.start("GameScene")}},{key:"update",value:function(){}}])&&h(n.prototype,o),i&&h(n,i),e}();function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function O(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var _=function(t){function e(t){var n=t.scene,o=t.x,r=t.y,i=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,j(e).call(this,n,o,r,i))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,r.a.GameObjects.Sprite),n=e,(o=[{key:"update",value:function(){this.angle+=1}}])&&w(n.prototype,o),i&&w(n,i),e}();function k(t,e){return r.a.Geom.Intersects.RectangleToRectangle(t.getBounds(),e.getBounds())}function P(t){return null!=t}function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function X(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function E(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Y(t,e){return(Y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var T=function(t){function e(t){var n,o=t.scene,r=t.x,i=t.y,u=t.w,c=t.h,a=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=E(this,M(e).call(this,o,r,i,a)),P(u)&&(n.displayWidth=u),P(c)&&(n.displayHeight=c),n.setOrigin(0,0),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Y(t,e)}(e,r.a.GameObjects.Sprite),n=e,(o=[{key:"isBelow",value:function(t){var e=0;try{e=t.y+t.getHeight()/8}catch(n){e=t.y+t.displayHeight/8}return e<this.y}},{key:"shouldInfluence",value:function(t){return k(this,t)}},{key:"influence",value:function(t){}},{key:"influenceX",value:function(t,e){return e}},{key:"influenceY",value:function(t,e){return e}},{key:"haltsMovement",value:function(){return!1}}])&&X(n.prototype,o),i&&X(n,i),e}(),C={type:r.a.AUTO,parent:"content",width:1600,height:900,localStorageName:"phaseres6webpack"};function I(t,e,n){return t<e?e:t>n?n:t}function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function R(t,e){return!e||"object"!==A(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function K(t){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var G=function(t){function e(t){var n=t.scene,o=t.x,r=t.y,i=t.w,u=t.h,c=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),R(this,K(e).call(this,{scene:n,x:o,y:r,w:i,h:u,asset:c}))}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(e,T),n=e,(o=[{key:"shouldInfluence",value:function(t){return t.vectorY>=0&&k(this,t)&&this.isBelow(t)}},{key:"influence",value:function(t){t.vectorY>=0&&!t.grounded&&(t.vectorY=0,t.grounded=!0)}},{key:"influenceY",value:function(t,e){return I(e,0,this.y-t.getHeight()/2)}}])&&B(n.prototype,o),r&&B(n,r),e}();function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function D(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function q(t,e){return(q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var F=function(t){function e(t){var n,o=t.scene,r=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=D(this,Q(e).call(this,{scene:o,x:0,y:0,w:o.sys.game.config.width,asset:r}))).init(o),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&q(t,e)}(e,G),n=e,(o=[{key:"init",value:function(t){this.y=t.sys.game.config.height-this.displayHeight}},{key:"shouldInfluence",value:function(t){return t.vectorY>=0&&k(this,t)}}])&&L(n.prototype,o),r&&L(n,r),e}(),z=.8,J=.5,W=1,N=.25,U=2,Z=6,$=1,tt=-14,et=8,nt=3;function ot(t){return(ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function rt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function it(t,e){return!e||"object"!==ot(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ut(t){return(ut=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ct(t,e){return(ct=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var at=function(t){function e(t){var n,o=t.scene,r=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=it(this,ut(e).call(this,{scene:o,x:0,y:0,h:o.sys.game.config.height,asset:r}))).init(o),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ct(t,e)}(e,T),n=e,(o=[{key:"init",value:function(t){this.x=t.sys.game.config.width-this.displayWidth}},{key:"influence",value:function(t){t.vectorX-=nt}},{key:"haltsMovement",value:function(){return!0}}])&&rt(n.prototype,o),r&&rt(n,r),e}();function st(t){return(st="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ft(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function lt(t,e){return!e||"object"!==st(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function yt(t){return(yt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function pt(t,e){return(pt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var ht=function(t){function e(t){var n,o=t.scene,r=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=lt(this,yt(e).call(this,{scene:o,x:0,y:0,h:o.sys.game.config.height,asset:r}))).init(o),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&pt(t,e)}(e,T),n=e,(o=[{key:"init",value:function(t){}},{key:"influence",value:function(t){t.vectorX+=nt}},{key:"haltsMovement",value:function(){return!0}}])&&ft(n.prototype,o),r&&ft(n,r),e}();function bt(t){return(bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function dt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function vt(t,e){return!e||"object"!==bt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function mt(t){return(mt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function gt(t,e){return(gt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var wt=function(t){function e(t){var n,o=t.scene,r=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=vt(this,mt(e).call(this,{scene:o,x:0,y:0,w:o.sys.game.config.width,asset:r}))).init(o),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&gt(t,e)}(e,T),n=e,(o=[{key:"init",value:function(t){}},{key:"influence",value:function(t){t.vectorY+=nt}},{key:"haltsMovement",value:function(){return!0}}])&&dt(n.prototype,o),r&&dt(n,r),e}();function Ot(t){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function jt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function St(t,e){return!e||"object"!==Ot(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _t(t){return(_t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function kt(t,e){return(kt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Pt=function(t){function e(t){var n,o=t.scene,r=t.x,i=t.y,u=t.asset,c=t.universe;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=St(this,_t(e).call(this,o,r,i,u))).scene=o,n.universe=c,n.vectorX=0,n.vectorY=0,n.accelX=0,n.accelY=0,n.lastX=r,n.lastY=i,n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&kt(t,e)}(e,r.a.GameObjects.Sprite),n=e,(o=[{key:"ignoreInfluence",value:function(){return!0}},{key:"updateVectorInfluences",value:function(){}},{key:"updatePositionInfluences",value:function(){}},{key:"adjustVectorX",value:function(t){this.vectorX+=t}},{key:"adjustVectorY",value:function(t){this.vectorY+=t}},{key:"setAccelX",value:function(t){this.accelX=t}},{key:"setAccelY",value:function(t){this.accelY=t}}])&&jt(n.prototype,o),i&&jt(n,i),e}();function xt(t){return(xt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Xt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Et(t,e){return!e||"object"!==xt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Mt(t){return(Mt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Yt(t,e){return(Yt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Tt=function(t){function e(t){var n,o=t.scene,r=t.parent,i=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=Et(this,Mt(e).call(this,{scene:o,x:r.x,y:r.y,asset:i}))).parent=r,n.parentMass=500,n.radius=100*Math.random()+n.parent.displayHeight/3,n.putAroundParent(),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Yt(t,e)}(e,Pt),n=e,(o=[{key:"putAroundParent",value:function(){var t=this.radius,e=2*Math.random()*Math.PI,n=Math.cos(e)*t,o=Math.sin(e)*t,r=Math.sqrt(n*n+o*o);this.x=this.parent.x+n,this.y=this.parent.y+o;var i=Math.sqrt(this.parentMass/r);this.vectorX=o/r*i,this.vectorY=n/r*-1*i}},{key:"update",value:function(){var t,e,n,o,r=this.x-this.parent.x,i=this.y-this.parent.y,u=(t=this,e=this.parent,n=t.x-e.x,o=t.y-e.y,Math.sqrt(n*n+o*o)),c=this.parentMass/(u*u),a=Math.asin(i/u);r>0?this.setAccelX(-1*Math.abs(Math.cos(a)*c)):r<0&&this.setAccelX(Math.abs(Math.cos(a)*c)),i>0?this.setAccelY(-1*Math.abs(Math.sin(a)*c)):i<0&&this.setAccelY(Math.abs(Math.sin(a)*c)),this.vectorX+=this.accelX,this.vectorY+=this.accelY,this.x+=this.vectorX,this.y+=this.vectorY,this.vectorX<0?this.rotation=1.5708+Math.atan(this.vectorY/this.vectorX):this.rotation=-1.5708+Math.atan(this.vectorY/this.vectorX)}}])&&Xt(n.prototype,o),r&&Xt(n,r),e}();function Ct(t){return(Ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function It(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function At(t,e){return!e||"object"!==Ct(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Bt(t){return(Bt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Rt(t,e){return(Rt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Kt=function(t){function e(t){var n,o=t.scene,i=t.x,u=t.y;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=At(this,Bt(e).call(this,o,i,u))).vectorX=0,n.vectorY=0,n.accelX=0,n.accelY=0,n.lastX=i,n.lastY=u,n.inputAccelX=0,n.grounded=!1,n.initKeyBinds(o),n.sfx={},n.sfx.jump=o.sound.add("jump"),n.sfx.psi=o.sound.add("psi"),n.influences=new Set,n.player=new r.a.GameObjects.Sprite(o,0,0,"mushroom"),n.add(n.player),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Rt(t,e)}(e,r.a.GameObjects.Container),n=e,(o=[{key:"initKeyBinds",value:function(t){this.keyQ=t.input.keyboard.addKey(r.a.Input.Keyboard.KeyCodes.Q),this.keyQ.emitOnRepeat=!1,this.keySpace=t.input.keyboard.addKey(r.a.Input.Keyboard.KeyCodes.SPACE),this.keyLeft=t.input.keyboard.addKey(r.a.Input.Keyboard.KeyCodes.LEFT),this.keyRight=t.input.keyboard.addKey(r.a.Input.Keyboard.KeyCodes.RIGHT)}},{key:"updateKeyBinds",value:function(){if(this.keySpace.isDown&&this.grounded){this.adjustVectorY(tt);try{this.sfx.jump.play()}catch(t){}}this.keyQ.isDown&&this.add(new Tt({scene:this.scene,asset:"rain",parent:this.player})),this.keyLeft.isDown?this.inputAccelX=-this.getAccelMu()*Z:this.keyRight.isDown?this.inputAccelX=this.getAccelMu()*Z:0===this.getVectorX()||Math.abs(this.getVectorX())<=U*$/2?(this.inputAccelX=0,this.setVectorX(0)):this.inputAccelX=this.getFrictionMu()*$*(this.getVectorX()<0?1:-1)}},{key:"ignoreInfluence",value:function(){return!1}},{key:"updateVectorInfluences",value:function(){if(!this.ignoreInfluence()&&this.influences.size>0){var t=new Set,e=!0,n=!1,o=void 0;try{for(var r,i=this.influences.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var u=r.value;u.shouldInfluence(this)&&(t.add(u),u.influence(this),u.haltsMovement()&&(this.inputAccelX=0))}}catch(t){n=!0,o=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw o}}this.influences=t}}},{key:"updatePositionInfluences",value:function(){if(!this.ignoreInfluence()&&this.influences.size>0){var t=new Set,e=!0,n=!1,o=void 0;try{for(var r,i=this.influences.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var u=r.value;u.shouldInfluence(this)&&(t.add(u),this.x=u.influenceX(this,this.x),this.y=u.influenceY(this,this.y))}}catch(t){n=!0,o=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw o}}this.influences=t}}},{key:"update",value:function(){this.updatePlayer();var t=!0,e=!1,n=void 0;try{for(var o,r=this.list[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){o.value.update()}}catch(t){e=!0,n=t}finally{try{t||null==r.return||r.return()}finally{if(e)throw n}}}},{key:"updatePlayer",value:function(){this.lastX=this.x,this.lastY=this.y,this.updateKeyBinds(),this.grounded=!1,this.updateVectorInfluences(),this.inputAccelX>0?this.vectorX<et&&(this.vectorX+=this.inputAccelX,this.vectorX=I(this.vectorX,-et,et)):this.inputAccelX<0&&this.vectorX>-et&&(this.vectorX+=this.inputAccelX,this.vectorX=I(this.vectorX,-et,et)),this.vectorX+=this.accelX,this.vectorY+=this.accelY+z,this.x+=this.vectorX,this.y+=this.vectorY}},{key:"addInfluence",value:function(t){this.influences.has(t)||this.influences.add(t)}},{key:"getFrictionMu",value:function(){return this.grounded?U:N}},{key:"getAccelMu",value:function(){return this.grounded?W:J}},{key:"setVectorX",value:function(t){this.vectorX=t}},{key:"getVectorX",value:function(){return this.vectorX}},{key:"adjustVectorX",value:function(t){this.vectorX+=t}},{key:"adjustVectorY",value:function(t){this.vectorY+=t}},{key:"setVectorY",value:function(t){this.vectorY=t}},{key:"setAccelX",value:function(t){this.accelX=t}},{key:"setAccelY",value:function(t){this.accelY=t}},{key:"getBounds",value:function(){return this.player.getBounds()}},{key:"getHeight",value:function(){return this.player.displayHeight}}])&&It(n.prototype,o),i&&It(n,i),e}();function Vt(t){return(Vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Gt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Ht(t,e){return!e||"object"!==Vt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Lt(t){return(Lt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Dt(t,e){return(Dt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Qt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Ht(this,Lt(e).call(this,{key:"GameScene"}))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Dt(t,e)}(e,r.a.Scene),n=e,(o=[{key:"init",value:function(){this.initKeyBinds()}},{key:"preload",value:function(){}},{key:"initKeyBinds",value:function(){}},{key:"create",value:function(){this.universe=this.add.group(),this.boundaries=this.add.group(),this.mushroom=new _({scene:this,x:400,y:300,asset:"mushroom"}),this.topBoundary=new wt({scene:this,asset:"platform"}),this.rightBoundary=new at({scene:this,asset:"platform"}),this.bottomBoundary=new F({scene:this,asset:"platform"}),this.leftBoundary=new ht({scene:this,asset:"platform"}),this.test=new G({scene:this,x:200,y:700,w:100,h:20,asset:"platform"}),this.b=new G({scene:this,x:200,y:600,w:100,h:20,asset:"platform"}),this.c=new G({scene:this,x:200,y:500,w:100,h:20,asset:"platform"}),this.d=new G({scene:this,x:200,y:400,w:100,h:20,asset:"platform"}),this.e=new G({scene:this,x:200,y:300,w:100,h:20,asset:"platform"}),this.f=new G({scene:this,x:200,y:200,w:100,h:20,asset:"platform"}),this.boundaries.addMultiple([this.add.existing(this.rightBoundary),this.add.existing(this.leftBoundary),this.add.existing(this.topBoundary),this.add.existing(this.bottomBoundary),this.add.existing(this.test),this.add.existing(this.b),this.add.existing(this.c),this.add.existing(this.d),this.add.existing(this.e),this.add.existing(this.f)]),this.playerContainer=new Kt({scene:this,x:200,y:300}),this.add.existing(this.playerContainer)}},{key:"update",value:function(){this.playerContainer.update();var t=!0,e=!1,n=void 0;try{for(var o,r=this.boundaries.getChildren()[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){var i=o.value;!this.playerContainer.ignoreInfluence()&&i.shouldInfluence(this.playerContainer)&&this.playerContainer.addInfluence(i)}}catch(t){e=!0,n=t}finally{try{t||null==r.return||r.return()}finally{if(e)throw n}}this.playerContainer.updatePositionInfluences()}}])&&Gt(n.prototype,o),i&&Gt(n,i),e}();function qt(t){return(qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ft(t,e){return!e||"object"!==qt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function zt(t){return(zt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Jt(t,e){return(Jt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Wt=Object.assign(C,{scene:[y,m,Qt]}),Nt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Ft(this,zt(e).call(this,Wt))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Jt(t,e)}(e,r.a.Game),e}();window.game=new Nt},502:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){t.exports=n(/*! T:\dev\kerfuffle\src\main.js */1385)}});