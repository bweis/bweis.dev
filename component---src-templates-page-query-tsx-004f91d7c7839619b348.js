(self.webpackChunk_bweis_bweis_dev=self.webpackChunk_bweis_bweis_dev||[]).push([[398],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},23646:function(e,t,r){var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},69100:function(e,t,r){var n=r(99489),o=r(57067);function u(t,r,s){return o()?(e.exports=u=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=u=function(e,t,r){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return r&&n(u,r.prototype),u},e.exports.default=e.exports,e.exports.__esModule=!0),u.apply(null,arguments)}e.exports=u,e.exports.default=e.exports,e.exports.__esModule=!0},57067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(23646),o=r(46860),u=r(60379),s=r(98206);e.exports=function(e){return n(e)||o(e)||u(e)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},60379:function(e,t,r){var n=r(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},75857:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(70977),o=r(35510),u=r(46725),s=r(95752),c=r(32916),p=function(e){var t=e.data.page;return(0,n.tZ)(s.Z,null,(0,n.tZ)(c.Z,{title:t.title,description:t.excerpt}),(0,n.tZ)(o.X6,{variant:"styles.h2"},t.title),(0,n.tZ)("section",{sx:{my:5,variant:"layout.content"}},(0,n.tZ)(u.MDXRenderer,null,t.body)))};var a=function(e){var t=Object.assign({},e);return(0,n.tZ)(p,t)}},46725:function(e,t,r){var n=r(93395);e.exports={MDXRenderer:n}},93395:function(e,t,r){var n=r(69100),o=r(319),u=r(59713),s=r(37316),c=["scope","children"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(67294),l=r(64983).mdx,f=r(89480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=s(e,c),p=f(t),d=i.useMemo((function(){if(!r)return null;var e=a({React:i,mdx:l},p),t=Object.keys(e),u=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(u)))}),[r,t]);return i.createElement(d,a({},u))}}}]);
//# sourceMappingURL=component---src-templates-page-query-tsx-004f91d7c7839619b348.js.map