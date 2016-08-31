/*!
 * Vux v0.1.3-rc9 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxProgress=e():t.vuxProgress=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(78)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(55),i=n(15);t.exports=function(t){return r(i(t))}},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(6),i=n(13);t.exports=n(4)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(8),i=n(30),o=n(24),s=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(22)("wks"),i=n(14),o=n(1).Symbol,s="function"==typeof o,u=t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))};u.store=r},function(t,e,n){var r=n(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(35),i=n(16);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(6).f,i=n(2),o=n(7)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(22)("keys"),i=n(14);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(1),i="__core-js_shared__",o=r[i]||(r[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),i=n(9),o=n(18),s=n(26),u=n(6).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:s.f(t)})}},function(t,e,n){e.f=n(7)},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(11),i=n(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(1),i=n(9),o=n(52),s=n(5),u="prototype",f=function(t,e,n){var a,c,l,p=t&f.F,d=t&f.G,h=t&f.S,v=t&f.P,y=t&f.B,m=t&f.W,g=d?i:i[e]||(i[e]={}),b=g[u],_=d?r:h?r[e]:(r[e]||{})[u];d&&(n=e);for(a in n)c=!p&&_&&void 0!==_[a],c&&a in g||(l=c?_[a]:n[a],g[a]=d&&"function"!=typeof _[a]?n[a]:y&&c?o(l,r):m&&_[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[a]=l,t&f.R&&b&&!b[a]&&s(b,a,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,e,n){t.exports=!n(4)&&!n(10)(function(){return 7!=Object.defineProperty(n(28)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(18),i=n(29),o=n(36),s=n(5),u=n(2),f=n(17),a=n(57),c=n(20),l=n(64),p=n(7)("iterator"),d=!([].keys&&"next"in[].keys()),h="@@iterator",v="keys",y="values",m=function(){return this};t.exports=function(t,e,n,g,b,_,S){a(n,e,g);var x,w,O,P=function(t){if(!d&&t in E)return E[t];switch(t){case v:return function(){return new n(this,t)};case y:return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",T=b==y,C=!1,E=t.prototype,M=E[p]||E[h]||b&&E[b],I=M||P(b),k=b?T?P("entries"):I:void 0,N="Array"==e?E.entries||M:M;if(N&&(O=l(N.call(new t)),O!==Object.prototype&&(c(O,j,!0),r||u(O,p)||s(O,p,m))),T&&M&&M.name!==y&&(C=!0,I=function(){return M.call(this)}),r&&!S||!d&&!C&&E[p]||s(E,p,I),f[e]=I,f[j]=m,b)if(x={values:T?I:P(y),keys:_?I:P(v),entries:k},S)for(w in x)w in E||o(E,w,x[w]);else i(i.P+i.F*(d||C),e,x);return x}},function(t,e,n){var r=n(8),i=n(61),o=n(16),s=n(21)("IE_PROTO"),u=function(){},f="prototype",a=function(){var t,e=n(28)("iframe"),r=o.length,i="<",s=">";for(e.style.display="none",n(54).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+s+"document.F=Object"+i+"/script"+s),t.close(),a=t.F;r--;)delete a[f][o[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u[f]=r(t),n=new u,u[f]=null,n[s]=t):n=a(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(35),i=n(16).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(2),i=n(3),o=n(51)(!1),s=n(21)("IE_PROTO");t.exports=function(t,e){var n,u=i(t),f=0,a=[];for(n in u)n!=s&&r(u,n)&&a.push(n);for(;e.length>f;)r(u,n=e[f++])&&(~o(a,n)||a.push(n));return a}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(38),o=r(i),s=n(40),u=r(s);e["default"]={mixins:[u["default"]],props:{template:{type:Number,"default":0},percent:{type:Number,"default":0,twoWay:!0}},ready:function(){var t=this;t.template>0&&(this.progress=new o["default"]({template:t.template,parent:1===t.template?"body":"#vux-progress-"+t.uuid,start:!0}))},methods:{cancel:function(){this.$emit("on-cancel")}},data:function(){return{}},destroyed:function(){if(this.template>0&&this.progress&&(this.progress.destroy(),this.progress.timer&&clearTimeout(this.progress.timer),this.progress=null,document.querySelector("#vux-progress-"+this.uuid).innerHTML=""),1===this.template){var t=document.querySelector("#mprogress1");t&&t.parentNode.removeChild(t)}}}},function(t,e,n){function r(t){return t&&t.__esModule?t:{"default":t}}var i,o,s=n(45),u=(r(s),n(39)),f=r(u);!function(r,s){i=s,o="function"==typeof i?i.call(e,n,e,t):i,!(void 0!==o&&(t.exports=o))}("undefined"!=typeof window?window:void 0,function(){var t={template:1,parent:"body",start:!1,minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800},e="99",n=500,r=1500,i='[role="mpbar"]',o='[role="bufferBar"]',s='[role="dashed"]',u={determinate:'<div class="deter-bar" role="mpbar1"><div class="peg"></div></div><div class="bar-bg"></div>',buffer:'<div class="deter-bar" role="mpbar2"><div class="peg"></div></div><div class="buffer-bg" role="bufferBar"></div><div class="mp-ui-dashed" role="dashed"></div>',indeterminate:'<div class="indeter-bar" role="mpbar3"></div><div class="bar-bg"></div>',query:'<div class="query-bar" role="mpbar4"><div class="peg"></div></div><div class="bar-bg"></div>'},a={},c=function(e){var n=f["default"].extend(e,t),r=n.parent+n.template,i=a[r]||"";return i||(i=new l(n),a[r]=i),"string"==typeof e&&"function"==typeof i[e]?i[e]():n.start&&i.start(),i},l=function(t){this.options=t||{},this.status=null,this.bufferStatus=null};return l.prototype={version:"0.1.0",constructor:l,start:function(){function t(){e.stop||setTimeout(function(){e.status&&(e._trickle(),t())},e.options.trickleSpeed)}if(this.status||this._isBufferStyle()||this.set(0),this._isIndeterminateStyle()||this._isQueryStyle())return this;var e=this;if(this._isBufferStyle()&&!this.bufferStatus){var r=this._render(),i=r.querySelector(s),o=r.querySelector(this._getCurrSelector());f["default"].hideEl(o),f["default"].hideEl(i),this.setBuffer(0),setTimeout(function(){f["default"].showEl(i),f["default"].showEl(o),e.set(0).setBuffer(0)},n)}return this.options.trickle&&t(),this},end:function(t){if(!t&&!this.status)return this;var e=this,i=this.options.speed,o=this._getRenderedId();if(this._isBufferStyle()&&t)return this.set(0).set(1);if(this._isIndeterminateStyle())return!this._isRendered()&&t&&(this.set(0),o=this._getRenderedId(),i=n),f["default"].setcss(o,{transition:"none",opacity:1}),o.offsetWidth,setTimeout(function(){f["default"].setcss(o,{transition:"all "+i+"ms linear",opacity:0}),setTimeout(function(){e._remove()},i)},i),this;if(this._isQueryStyle()){if(this._isRendered()){var s=o.querySelector(this._getCurrSelector());return f["default"].addClass(s,"end"),setTimeout(function(){e._remove()},r),this}if(t)return this.set(0),o=this._getRenderedId(),setTimeout(function(){e._remove()},r),this}return this.inc(.3+.5*Math.random()).set(1)},set:function(t){return t=f["default"].clamp(t,this.options.minimum,1),this.status=1===t?null:t,this._setProgress(this._getCurrSelector(),t),this},setBuffer:function(t){return t=f["default"].clamp(t,this.options.minimum,1),this.bufferStatus=1===t?null:t,this._setProgress(o,t),this},inc:function(t){var e=this.status,n=this.bufferStatus;return e?(e=this._getRandomNum(e,t),this._isBufferStyle()&&(n=this._getRandomNum(n>e?n:e+.1,t),this.setBuffer(n)),this.set(e)):this.start()},_trickle:function(){return this.inc(Math.random()*this.options.trickleRate)},_render:function(t){if(this._isRendered())return this._getRenderedId();var e=document.createElement("div"),n=this._getCurrTemplate()||"",r=document.querySelector(this.options.parent);if(r){var i;if(e.id=this._getRenderedId(!0),e.className="ui-mprogress",e.innerHTML=n,!this._isIndeterminateStyle()&&!this._isQueryStyle()){t||(i=!this._isStarted());var s=e.querySelector(this._getCurrSelector()),u=i?"-100":f["default"].toBarPerc(this.status||0);if(f["default"].setcss(s,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),this._isBufferStyle()){var a=e.querySelector(o),c=i?"-100":f["default"].toBarPerc(this.bufferStatus||0);f["default"].setcss(a,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"})}}return r!==document.body&&f["default"].addClass(r,"mprogress-custom-parent"),r.appendChild(e),e}},_remove:function(){var t=this._getRenderedId(),e=document.querySelector(this.options.parent);e!==document.body&&f["default"].removeClass(e,"mprogress-custom-parent");var n=this.options.parent+this.options.template;a[n]&&(a[n]=null),t&&(this.status=null,this.bufferStatus=null,f["default"].removeElement(t))},_setProgress:function(t,e){if(!this.stop){var n=this._render();if(n){var r=n.querySelector(t),i=this.options.speed,o=this.options.easing,s=this;return n.offsetWidth,this._isIndeterminateStyle()||this._isQueryStyle()?this:void f["default"].queue(function(t){""===s.options.positionUsing&&(s.options.positionUsing=s._getPositioningCSS()),f["default"].setcss(r,s._barPositionCSS(e,i,o)),1===e?(f["default"].setcss(n,{transition:"none",opacity:1}),n.offsetWidth,s.timer=setTimeout(function(){f["default"].setcss(n,{transition:"all "+i+"ms linear",opacity:0}),s.timer=setTimeout(function(){s._remove(),t()},i)},i)):s.timer=setTimeout(t,i)})}}},_getCurrSelector:function(){var t=this._getCurrTplId();return t!==e?'[role="mpbar'+t+'"]':i},_isStarted:function(){return"number"==typeof this.status},_getRandomNum:function(t,e){return"number"!=typeof e&&(e=(1-t)*f["default"].clamp(Math.random()*t,.1,.95)),t=f["default"].clamp(t+e,0,.994)},_isRendered:function(){return!!this._getRenderedId()},_getRenderedId:function(t){var e=this._getCurrTplId(),n="mprogress"+e;return t?n:document.getElementById(n)},_isBufferStyle:function(){return 2===this._getCurrTplId()},_isIndeterminateStyle:function(){return 3===this._getCurrTplId()},_isQueryStyle:function(){return 4===this._getCurrTplId()},_getCurrTplId:function(){var t=~~this.options.template||1;return"number"==typeof t?t:e},_getCurrTemplate:function(){var t,e=this.options.template||1,n=["determinate","buffer","indeterminate","query"];return"number"==typeof~~e?(t=n[e-1],u[t]||""):"string"==typeof e?e:void 0},_getPositioningCSS:function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"},_barPositionCSS:function(t,e,n){var r;return r="translate3d"===this.options.positionUsing?{transform:"translate3d("+f["default"].toBarPerc(t)+"%,0,0)"}:"translate"===this.options.positionUsing?{transform:"translate("+f["default"].toBarPerc(t)+"%,0)"}:{"margin-left":f["default"].toBarPerc(t)+"%"},r.transition="all "+e+"ms "+n,r},destroy:function(){this.timer&&clearTimeout(this.timer),this.stop=!0}},function(){var t=0,e=0;l.prototype.promise=function(n){if(!n||"resolved"===n.state())return this;var r=this;return 0===e&&r.start(),t++,e++,n.always(function(){e--,0===e?(t=0,r.end()):r.set((t-e)/t)}),this}}(),c})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(42),o=r(i),s={extend:function(t,e){if(e=JSON.parse((0,o["default"])(e)),"string"==typeof t)return e;var n;for(var r in t)n=t[r],t.hasOwnProperty(r)&&void 0!==n&&(e[r]=n);return e},queue:function(){function t(){var n=e.shift();n&&n(t)}var e=[];return function(n){e.push(n),1===e.length&&t()}}(),setcss:function(){function t(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}function e(t){var e=document.body.style;if(t in e)return t;for(var n,r=i.length,o=t.charAt(0).toUpperCase()+t.slice(1);r--;)if(n=i[r]+o,n in e)return n;return t}function n(n){return n=t(n),o[n]||(o[n]=e(n))}function r(t,e,r){e=n(e),t.style[e]=r}var i=["Webkit","O","Moz","ms"],o={};return function(t,e){var n,i,o=arguments;if(2===o.length)for(n in e)i=e[n],void 0!==i&&e.hasOwnProperty(n)&&r(t,n,i);else r(t,o[1],o[2])}}(),clamp:function(t,e,n){return t<e?e:t>n?n:t},toBarPerc:function(t){return 100*(-1+t)},hasClass:function(t,e){if(!t)return!1;var n="string"==typeof t?t:s.classList(t);return n.indexOf(" "+e+" ")>=0},addClass:function(t,e){if(t){var n=s.classList(t),r=n+e;s.hasClass(n,e)||(t.className=r.substring(1))}},removeClass:function(t,e){if(t){var n,r=s.classList(t);s.hasClass(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}},showEl:function(t){s.setcss(t,{display:"block"})},hideEl:function(t){s.setcss(t,{display:"none"})},classList:function(t){if(t)return(" "+(t.className||"")+" ").replace(/\s+/gi," ")},removeElement:function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}};e["default"]=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(41),o=r(i);e["default"]={mixins:[o["default"]],props:{required:{type:Boolean,"default":!0}},created:function(){this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$emit("change",t)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},function(t,e,n){t.exports={"default":n(46),__esModule:!0}},function(t,e,n){t.exports={"default":n(47),__esModule:!0}},function(t,e,n){t.exports={"default":n(48),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=n(44),o=r(i),s=n(43),u=r(s),f="function"==typeof u["default"]&&"symbol"==typeof o["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof u["default"]&&t.constructor===u["default"]?"symbol":typeof t};e["default"]="function"==typeof u["default"]&&"symbol"===f(o["default"])?function(t){return"undefined"==typeof t?"undefined":f(t)}:function(t){return t&&"function"==typeof u["default"]&&t.constructor===u["default"]?"symbol":"undefined"==typeof t?"undefined":f(t)}},function(t,e,n){var r=n(9),i=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},function(t,e,n){n(72),n(70),n(73),n(74),t.exports=n(9).Symbol},function(t,e,n){n(71),n(75),t.exports=n(26).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(3),i=n(67),o=n(66);t.exports=function(t){return function(e,n,s){var u,f=r(e),a=i(f.length),c=o(s,a);if(t&&n!=n){for(;a>c;)if(u=f[c++],u!=u)return!0}else for(;a>c;c++)if((t||c in f)&&f[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var r=n(49);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(12),i=n(34),o=n(19);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var s,u=n(t),f=o.f,a=0;u.length>a;)f.call(t,s=u[a++])&&e.push(s);return e}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){var r=n(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(32),i=n(13),o=n(20),s={};n(5)(s,n(7)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(12),i=n(3);t.exports=function(t,e){for(var n,o=i(t),s=r(o),u=s.length,f=0;u>f;)if(o[n=s[f++]]===e)return n}},function(t,e,n){var r=n(14)("meta"),i=n(11),o=n(2),s=n(6).f,u=0,f=Object.isExtensible||function(){return!0},a=!n(10)(function(){return f(Object.preventExtensions({}))}),c=function(t){s(t,r,{value:{i:"O"+ ++u,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!f(t))return"F";if(!e)return"E";c(t)}return t[r].i},p=function(t,e){if(!o(t,r)){if(!f(t))return!0;if(!e)return!1;c(t)}return t[r].w},d=function(t){return a&&h.NEED&&f(t)&&!o(t,r)&&c(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,n){var r=n(6),i=n(8),o=n(12);t.exports=n(4)?Object.defineProperties:function(t,e){i(t);for(var n,s=o(e),u=s.length,f=0;u>f;)r.f(t,n=s[f++],e[n]);return t}},function(t,e,n){var r=n(19),i=n(13),o=n(3),s=n(24),u=n(2),f=n(30),a=Object.getOwnPropertyDescriptor;e.f=n(4)?a:function(t,e){if(t=o(t),e=s(e,!0),f)try{return a(t,e)}catch(n){}if(u(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(3),i=n(33).f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?u(t):i(r(t))}},function(t,e,n){var r=n(2),i=n(68),o=n(21)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var r=n(23),i=n(15);t.exports=function(t){return function(e,n){var o,s,u=String(i(e)),f=r(n),a=u.length;return f<0||f>=a?t?"":void 0:(o=u.charCodeAt(f),o<55296||o>56319||f+1===a||(s=u.charCodeAt(f+1))<56320||s>57343?t?u.charAt(f):o:t?u.slice(f,f+2):(o-55296<<10)+(s-56320)+65536)}}},function(t,e,n){var r=n(23),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(23),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(50),i=n(58),o=n(17),s=n(3);t.exports=n(31)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){},function(t,e,n){"use strict";var r=n(65)(!0);n(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(1),i=n(2),o=n(4),s=n(29),u=n(36),f=n(60).KEY,a=n(10),c=n(22),l=n(20),p=n(14),d=n(7),h=n(26),v=n(25),y=n(59),m=n(53),g=n(56),b=n(8),_=n(3),S=n(24),x=n(13),w=n(32),O=n(63),P=n(62),j=n(6),T=n(12),C=P.f,E=j.f,M=O.f,I=r.Symbol,k=r.JSON,N=k&&k.stringify,R="prototype",B=d("_hidden"),q=d("toPrimitive"),A={}.propertyIsEnumerable,F=c("symbol-registry"),W=c("symbols"),L=c("op-symbols"),J=Object[R],U="function"==typeof I,z=r.QObject,Q=!z||!z[R]||!z[R].findChild,D=o&&a(function(){return 7!=w(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=C(J,e);r&&delete J[e],E(t,e,n),r&&t!==J&&E(J,e,r)}:E,G=function(t){var e=W[t]=w(I[R]);return e._k=t,e},K=U&&"symbol"==typeof I.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof I},H=function(t,e,n){return t===J&&H(L,e,n),b(t),e=S(e,!0),b(n),i(W,e)?(n.enumerable?(i(t,B)&&t[B][e]&&(t[B][e]=!1),n=w(n,{enumerable:x(0,!1)})):(i(t,B)||E(t,B,x(1,{})),t[B][e]=!0),D(t,e,n)):E(t,e,n)},Y=function(t,e){b(t);for(var n,r=m(e=_(e)),i=0,o=r.length;o>i;)H(t,n=r[i++],e[n]);return t},$=function(t,e){return void 0===e?w(t):Y(w(t),e)},V=function(t){var e=A.call(this,t=S(t,!0));return!(this===J&&i(W,t)&&!i(L,t))&&(!(e||!i(this,t)||!i(W,t)||i(this,B)&&this[B][t])||e)},X=function(t,e){if(t=_(t),e=S(e,!0),t!==J||!i(W,e)||i(L,e)){var n=C(t,e);return!n||!i(W,e)||i(t,B)&&t[B][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=M(_(t)),r=[],o=0;n.length>o;)i(W,e=n[o++])||e==B||e==f||r.push(e);return r},tt=function(t){for(var e,n=t===J,r=M(n?L:_(t)),o=[],s=0;r.length>s;)!i(W,e=r[s++])||n&&!i(J,e)||o.push(W[e]);return o};U||(I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===J&&e.call(L,n),i(this,B)&&i(this[B],t)&&(this[B][t]=!1),D(this,t,x(1,n))};return o&&Q&&D(J,t,{configurable:!0,set:e}),G(t)},u(I[R],"toString",function(){return this._k}),P.f=X,j.f=H,n(33).f=O.f=Z,n(19).f=V,n(34).f=tt,o&&!n(18)&&u(J,"propertyIsEnumerable",V,!0),h.f=function(t){return G(d(t))}),s(s.G+s.W+s.F*!U,{Symbol:I});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var et=T(d.store),nt=0;et.length>nt;)v(et[nt++]);s(s.S+s.F*!U,"Symbol",{"for":function(t){return i(F,t+="")?F[t]:F[t]=I(t)},keyFor:function(t){if(K(t))return y(F,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),s(s.S+s.F*!U,"Object",{create:$,defineProperty:H,defineProperties:Y,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),k&&s(s.S+s.F*(!U||a(function(){var t=I();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!K(t)){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);return e=r[1],"function"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!K(e))return e}),r[1]=e,N.apply(k,r)}}}),I[R][q]||n(5)(I[R],q,I[R].valueOf),l(I,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(25)("asyncIterator")},function(t,e,n){n(25)("observable")},function(t,e,n){n(69);for(var r=n(1),i=n(5),o=n(17),s=n(7)("toStringTag"),u=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],f=0;f<5;f++){var a=u[f],c=r[a],l=c&&c.prototype;l&&!l[s]&&i(l,s,a),o[a]=o.Array}},function(t,e){},function(t,e){t.exports=' <div :id="\'vux-progress-\' + uuid" class=vux-progress v-if="template > 0"></div> <div class=weui_progress v-if="template === 0"> <div class=weui_progress_bar> <div class="weui_progress_inner_bar js_progress" :style="{width: percent + \'%\'}"></div> </div> <a href=javascript:; class=weui_progress_opr> <i class=weui_icon_cancel @click=cancel></i> </a> </div> '},function(t,e,n){var r,i;n(76),r=n(37),i=n(77),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});