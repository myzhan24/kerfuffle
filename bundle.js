!function(t){function e(e){for(var o,u,c=e[0],s=e[1],a=e[2],l=0,y=[];l<c.length;l++)u=c[l],r[u]&&y.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);for(f&&f(e);y.length;)y.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={0:0},i=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="./kerfuffle/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var f=s;i.push([502,1]),n()}({1385:
/*!**********************************!*\
  !*** ./src/main.js + 16 modules ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/phaser/src/phaser.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/webfontloader/webfontloader.js (<- Module is not an ECMAScript module) */function(t,e,n){"use strict";n.r(e);var o=n(12),r=n.n(o),i=n(501),u=n.n(i);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,f(e).call(this,{key:"BootScene"}))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,r.a.Scene),n=e,(o=[{key:"preload",value:function(){this.fontsReady=!1,this.fontsLoaded=this.fontsLoaded.bind(this),this.add.text(100,100,"loading fonts..."),this.load.image("loaderBg","./assets/images/loader-bg.png"),this.load.image("loaderBar","./assets/images/loader-bar.png"),this.load.audio("sfx","./assets/audio/SoundEffects/8.mp3"),this.load.audio("cursor1","./assets/audio/SoundEffects/cursor1.wav"),this.load.audio("cursor2","./assets/audio/SoundEffects/cursor2.wav"),this.load.audio("jump","./assets/audio/SoundEffects/jump.mp3"),this.load.audio("psi","./assets/audio/SoundEffects/psi.wav"),u.a.load({google:{families:["Bangers"]},active:this.fontsLoaded})}},{key:"update",value:function(){this.fontsReady&&this.scene.start("SplashScene")}},{key:"fontsLoaded",value:function(){this.fontsReady=!0}}])&&s(n.prototype,o),i&&s(n,i),e}();function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,d(e).call(this,{key:"SplashScene"}))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,r.a.Scene),n=e,(o=[{key:"preload",value:function(){this.load.image("mushroom","assets/images/mushroom2.png"),this.load.image("platform","assets/images/platform.png"),this.load.image("rain","assets/images/rain.png")}},{key:"create",value:function(){this.scene.start("GameScene")}},{key:"update",value:function(){}}])&&h(n.prototype,o),i&&h(n,i),e}();function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function O(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var _=function(t){function e(t){var n=t.scene,o=t.x,r=t.y,i=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,S(e).call(this,n,o,r,i))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,r.a.GameObjects.Sprite),n=e,(o=[{key:"update",value:function(){this.angle+=1}}])&&w(n.prototype,o),i&&w(n,i),e}(),k=-.8,P=.5,x=1,X=.25,E=2,M=6,Y=1,T=14,I=8,A=3,R={type:r.a.AUTO,parent:"content",width:1600,height:900,localStorageName:"phaseres6webpack"};function B(t,e,n){return t<e?e:t>n?n:t}function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function V(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function G(t){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var H=function(t){function e(t){var n,o=t.scene,r=t.x,i=t.y,u=t.asset,c=t.universe;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=V(this,G(e).call(this,o,r,i,u))).scene=o,n.universe=c,n.vectorX=0,n.vectorY=0,n.accelX=0,n.accelY=0,n.lastX=r,n.lastY=i,n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(e,r.a.GameObjects.Sprite),n=e,(o=[{key:"ignoreInfluence",value:function(){return!0}},{key:"updateVectorInfluences",value:function(){}},{key:"updatePositionInfluences",value:function(){}},{key:"adjustVectorX",value:function(t){this.vectorX+=t}},{key:"adjustVectorY",value:function(t){this.vectorY+=t}},{key:"setAccelX",value:function(t){this.accelX=t}},{key:"setAccelY",value:function(t){this.accelY=t}}])&&K(n.prototype,o),i&&K(n,i),e}();function D(t,e){return r.a.Geom.Intersects.RectangleToRectangle(t.getBounds(),e.getBounds())}function Q(t){return null!=t}function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function W(t,e){return!e||"object"!==q(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function J(t,e){return(J=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var N=function(t){function e(t){var n,o=t.scene,r=t.parent,i=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=W(this,z(e).call(this,{scene:o,x:r.x,y:r.y,asset:i}))).parent=r,n.parentMass=500,n.putAroundParent(),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&J(t,e)}(e,H),n=e,(o=[{key:"putAroundParent",value:function(){var t=50*Math.random()+this.parent.displayHeight/3,e=2*Math.random()*Math.PI,n=Math.cos(e)*t,o=Math.sin(e)*t,r=Math.sqrt(n*n+o*o);this.x=this.parent.x+n,this.y=this.parent.y+o;var i=Math.sqrt(this.parentMass/r);this.vectorX=o/r*i,this.vectorY=n/r*-1*i}},{key:"update",value:function(){var t,e,n,o,r=this.x-this.parent.x,i=this.y-this.parent.y,u=(t=this,e=this.parent,n=t.x-e.x,o=t.y-e.y,Math.sqrt(n*n+o*o)),c=this.parentMass/(u*u),s=Math.asin(i/u);r>0?this.setAccelX(-1*Math.abs(Math.cos(s)*c)):r<0&&this.setAccelX(Math.abs(Math.cos(s)*c)),i>0?this.setAccelY(-1*Math.abs(Math.sin(s)*c)):i<0&&this.setAccelY(Math.abs(Math.sin(s)*c)),this.vectorX+=this.accelX,this.vectorY+=this.accelY,this.x+=this.vectorX,this.y+=this.vectorY,this.x+=this.parent.x-this.parent.lastX,this.y+=this.parent.y-this.parent.lastY,this.vectorX<0?this.rotation=1.5708+Math.atan(this.vectorY/this.vectorX):this.rotation=-1.5708+Math.atan(this.vectorY/this.vectorX)}}])&&F(n.prototype,o),r&&F(n,r),e}();function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Z(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function $(t,e){return!e||"object"!==U(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function tt(t){return(tt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function et(t,e){return(et=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var nt=function(t){function e(t){var n,o=t.scene,r=t.x,i=t.y,u=t.asset,c=t.universe;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=$(this,tt(e).call(this,{scene:o,x:r,y:i,asset:u,universe:c}))).inputAccelX=0,n.grounded=!1,n.pushRight=!1,n.initKeyBinds(o),n.sfx={},n.sfx.jump=o.sound.add("jump"),n.sfx.psi=o.sound.add("psi"),n.overlappingPlatforms=new Set,n.influences=new Set,n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&et(t,e)}(e,H),n=e,(o=[{key:"initKeyBinds",value:function(t){this.keyQ=t.input.keyboard.addKey(r.a.Input.Keyboard.KeyCodes.Q),this.keyQ.emitOnRepeat=!1,this.keySpace=t.input.keyboard.addKey(r.a.Input.Keyboard.KeyCodes.SPACE),this.keyLeft=t.input.keyboard.addKey(r.a.Input.Keyboard.KeyCodes.LEFT),this.keyRight=t.input.keyboard.addKey(r.a.Input.Keyboard.KeyCodes.RIGHT)}},{key:"updateKeyBinds",value:function(){this.keySpace.isDown&&this.grounded&&(this.adjustVectorY(T),this.sfx.jump.play()),this.keyQ.isDown&&(this.water=new N({scene:this.scene,asset:"rain",parent:this}),this.universe.add(this.scene.add.existing(this.water))),this.keyLeft.isDown?this.inputAccelX=-this.getAccelMu()*M:this.keyRight.isDown?this.inputAccelX=this.getAccelMu()*M:0===this.getVectorX()||Math.abs(this.getVectorX())<=E*Y/2?(this.inputAccelX=0,this.setVectorX(0)):this.inputAccelX=this.getFrictionMu()*Y*(this.getVectorX()<0?1:-1)}},{key:"ignoreInfluence",value:function(){return!1}},{key:"updateVectorInfluences",value:function(){if(!this.ignoreInfluence()&&this.influences.size>0){var t=new Set,e=!0,n=!1,o=void 0;try{for(var r,i=this.influences.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var u=r.value;u.shouldInfluence(this)&&(t.add(u),u.influence(this),u.haltsMovement()&&(this.inputAccelX=0))}}catch(t){n=!0,o=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw o}}this.influences=t}}},{key:"updatePositionInfluences",value:function(){if(!this.ignoreInfluence()&&this.influences.size>0){var t=new Set,e=!0,n=!1,o=void 0;try{for(var r,i=this.influences.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var u=r.value;u.shouldInfluence(this)&&(t.add(u),this.x=u.influenceX(this,this.x),this.y=u.influenceY(this,this.y))}}catch(t){n=!0,o=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw o}}this.influences=t}}},{key:"update",value:function(){this.lastX=this.x,this.lastY=this.y,this.updateKeyBinds(),this.grounded=!1,this.updateVectorInfluences(),this.inputAccelX>0?this.vectorX<I&&(this.vectorX+=this.inputAccelX,this.vectorX=B(this.vectorX,-I,I)):this.inputAccelX<0&&this.vectorX>-I&&(this.vectorX+=this.inputAccelX,this.vectorX=B(this.vectorX,-I,I)),this.vectorX+=this.accelX,this.vectorY+=this.accelY+k,this.x+=this.vectorX,this.y-=this.vectorY}},{key:"addInfluence",value:function(t){this.influences.has(t)||this.influences.add(t)}},{key:"getFrictionMu",value:function(){return this.grounded?E:X}},{key:"getAccelMu",value:function(){return this.grounded?x:P}},{key:"setVectorX",value:function(t){this.vectorX=t}},{key:"getVectorX",value:function(){return this.vectorX}},{key:"adjustVectorX",value:function(t){this.vectorX+=t}},{key:"adjustVectorY",value:function(t){this.vectorY+=t}},{key:"setVectorY",value:function(t){this.vectorY=t}},{key:"setAccelX",value:function(t){this.accelX=t}},{key:"setAccelY",value:function(t){this.accelY=t}}])&&Z(n.prototype,o),i&&Z(n,i),e}();function ot(t){return(ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function rt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function it(t,e){return!e||"object"!==ot(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ut(t){return(ut=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ct(t,e){return(ct=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var st=function(t){function e(t){var n,o=t.scene,r=t.x,i=t.y,u=t.w,c=t.h,s=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=it(this,ut(e).call(this,o,r,i,s)),Q(u)&&(n.displayWidth=u),Q(c)&&(n.displayHeight=c),n.setOrigin(0,0),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ct(t,e)}(e,r.a.GameObjects.Sprite),n=e,(o=[{key:"isBelow",value:function(t){return t.y+t.displayHeight/8<this.y}},{key:"shouldInfluence",value:function(t){return D(this,t)}},{key:"influence",value:function(t){}},{key:"influenceX",value:function(t,e){return e}},{key:"influenceY",value:function(t,e){return e}},{key:"haltsMovement",value:function(){return!1}}])&&rt(n.prototype,o),i&&rt(n,i),e}();function at(t){return(at="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ft(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function lt(t,e){return!e||"object"!==at(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function yt(t){return(yt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function pt(t,e){return(pt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var ht=function(t){function e(t){var n=t.scene,o=t.x,r=t.y,i=t.w,u=t.h,c=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),lt(this,yt(e).call(this,{scene:n,x:o,y:r,w:i,h:u,asset:c}))}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&pt(t,e)}(e,st),n=e,(o=[{key:"shouldInfluence",value:function(t){return t.vectorY<=0&&D(this,t)&&this.isBelow(t)}},{key:"influence",value:function(t){t.vectorY<=0&&!t.grounded&&(t.vectorY=0,t.grounded=!0)}},{key:"influenceY",value:function(t,e){return B(e,0,this.y-t.displayHeight/2)}}])&&ft(n.prototype,o),r&&ft(n,r),e}();function bt(t){return(bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function dt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function vt(t,e){return!e||"object"!==bt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function mt(t){return(mt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function gt(t,e){return(gt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var wt=function(t){function e(t){var n,o=t.scene,r=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=vt(this,mt(e).call(this,{scene:o,x:0,y:0,w:o.sys.game.config.width,asset:r}))).init(o),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&gt(t,e)}(e,ht),n=e,(o=[{key:"init",value:function(t){this.y=t.sys.game.config.height-this.displayHeight}},{key:"shouldInfluence",value:function(t){return t.vectorY<=0&&D(this,t)}}])&&dt(n.prototype,o),r&&dt(n,r),e}();function Ot(t){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function St(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function jt(t,e){return!e||"object"!==Ot(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _t(t){return(_t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function kt(t,e){return(kt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Pt=function(t){function e(t){var n,o=t.scene,r=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=jt(this,_t(e).call(this,{scene:o,x:0,y:0,h:o.sys.game.config.height,asset:r}))).init(o),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&kt(t,e)}(e,st),n=e,(o=[{key:"init",value:function(t){this.x=t.sys.game.config.width-this.displayWidth}},{key:"influence",value:function(t){t.vectorX-=A}},{key:"haltsMovement",value:function(){return!0}}])&&St(n.prototype,o),r&&St(n,r),e}();function xt(t){return(xt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Xt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Et(t,e){return!e||"object"!==xt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Mt(t){return(Mt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Yt(t,e){return(Yt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Tt=function(t){function e(t){var n,o=t.scene,r=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=Et(this,Mt(e).call(this,{scene:o,x:0,y:0,h:o.sys.game.config.height,asset:r}))).init(o),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Yt(t,e)}(e,st),n=e,(o=[{key:"init",value:function(t){}},{key:"influence",value:function(t){t.vectorX+=A}},{key:"haltsMovement",value:function(){return!0}}])&&Xt(n.prototype,o),r&&Xt(n,r),e}();function It(t){return(It="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function At(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Rt(t,e){return!e||"object"!==It(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Bt(t){return(Bt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Ct(t,e){return(Ct=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Kt=function(t){function e(t){var n,o=t.scene,r=t.asset;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=Rt(this,Bt(e).call(this,{scene:o,x:0,y:0,w:o.sys.game.config.width,asset:r}))).init(o),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ct(t,e)}(e,st),n=e,(o=[{key:"init",value:function(t){}},{key:"influence",value:function(t){t.vectorY-=A}},{key:"haltsMovement",value:function(){return!0}}])&&At(n.prototype,o),r&&At(n,r),e}();function Vt(t){return(Vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Gt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Lt(t,e){return!e||"object"!==Vt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Ht(t){return(Ht=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Dt(t,e){return(Dt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Qt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Lt(this,Ht(e).call(this,{key:"GameScene"}))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Dt(t,e)}(e,r.a.Scene),n=e,(o=[{key:"init",value:function(){this.initKeyBinds()}},{key:"preload",value:function(){}},{key:"initKeyBinds",value:function(){}},{key:"create",value:function(){this.universe=this.add.group(),this.boundaries=this.add.group(),this.mushroom=new _({scene:this,x:400,y:300,asset:"mushroom"}),this.player=new nt({scene:this,x:200,y:300,asset:"mushroom",universe:this.universe}),this.topBoundary=new Kt({scene:this,asset:"platform"}),this.rightBoundary=new Pt({scene:this,asset:"platform"}),this.bottomBoundary=new wt({scene:this,asset:"platform"}),this.leftBoundary=new Tt({scene:this,asset:"platform"}),this.universe.add(this.add.existing(this.player)),this.add.text(100,100,"Phaser 3 - ES6 - Webpack ",{font:"64px Bangers",fill:"#7744ff"}),this.test=new ht({scene:this,x:200,y:700,w:100,h:20,asset:"platform"}),this.b=new ht({scene:this,x:200,y:600,w:100,h:20,asset:"platform"}),this.c=new ht({scene:this,x:200,y:500,w:100,h:20,asset:"platform"}),this.d=new ht({scene:this,x:200,y:400,w:100,h:20,asset:"platform"}),this.e=new ht({scene:this,x:200,y:300,w:100,h:20,asset:"platform"}),this.f=new ht({scene:this,x:200,y:200,w:100,h:20,asset:"platform"}),this.boundaries.addMultiple([this.add.existing(this.rightBoundary),this.add.existing(this.leftBoundary),this.add.existing(this.topBoundary),this.add.existing(this.bottomBoundary),this.add.existing(this.test),this.add.existing(this.b),this.add.existing(this.c),this.add.existing(this.d),this.add.existing(this.e),this.add.existing(this.f)])}},{key:"update",value:function(){var t=!0,e=!1,n=void 0;try{for(var o,r=this.universe.getChildren()[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){var i=o.value;i.update();var u=!0,c=!1,s=void 0;try{for(var a,f=this.boundaries.getChildren()[Symbol.iterator]();!(u=(a=f.next()).done);u=!0){var l=a.value;!i.ignoreInfluence()&&l.shouldInfluence(i)&&i.addInfluence(l)}}catch(t){c=!0,s=t}finally{try{u||null==f.return||f.return()}finally{if(c)throw s}}i.updatePositionInfluences()}}catch(t){e=!0,n=t}finally{try{t||null==r.return||r.return()}finally{if(e)throw n}}}}])&&Gt(n.prototype,o),i&&Gt(n,i),e}();function qt(t){return(qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ft(t,e){return!e||"object"!==qt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Wt(t){return(Wt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function zt(t,e){return(zt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Jt=Object.assign(R,{scene:[y,m,Qt]}),Nt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Ft(this,Wt(e).call(this,Jt))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&zt(t,e)}(e,r.a.Game),e}();window.game=new Nt},502:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){t.exports=n(/*! T:\dev\kerfuffle\src\main.js */1385)}});