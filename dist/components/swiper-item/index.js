/*!
 * Vux v0.1.3-rc9 (https://vux.li)
 * Licensed under the MIT license
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxSwiperItem=t():e.vuxSwiperItem=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(3)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={ready:function(){this.$parent.rerender()},beforeDestroy:function(){var e=this.$parent;this.$nextTick(function(){e.rerender()})}}},function(e,t){e.exports=" <div class=vux-swiper-item><slot></slot></div> "},function(e,t,o){var r,n;r=o(1),n=o(2),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}])});