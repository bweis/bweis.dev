(self.webpackChunk_bweis_bweis_dev=self.webpackChunk_bweis_bweis_dev||[]).push([[205],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},23646:function(e,t,r){var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},69100:function(e,t,r){var n=r(99489),o=r(57067);function a(t,r,u){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},57067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(23646),o=r(46860),a=r(60379),u=r(98206);e.exports=function(e){return n(e)||o(e)||a(e)||u()},e.exports.default=e.exports,e.exports.__esModule=!0},60379:function(e,t,r){var n=r(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},76416:function(e,t,r){"use strict";var n=r(67294),o=r(9834),a=r(64555),u=r(57315);t.Z=function(e){var t=e.tags,r=(0,o.Z)(),s=r.tagsPath,c=r.basePath;return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(n.Fragment,{key:e.slug},!!t&&", ",n.createElement(u.Z,{to:(0,a.Z)("/"+c+"/"+s+"/"+e.slug)},e.name)," ")})))}},20514:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(70977),o=r(35510),a=r(46725),u=r(67294),s=r(95752),c=r(76416),p=r(32916),i=["32px","16px","8px","4px"].map((function(e){return"rgba(0, 0, 0, 0.15) 0px "+e+" "+e+" 0px"})),l=function(e){var t=e.data.post;return(0,n.tZ)(s.Z,null,(0,n.tZ)(p.Z,{title:t.title,description:t.description?t.description:t.excerpt,image:t.banner?t.banner.childImageSharp.resize.src:void 0,pathname:t.slug}),(0,n.tZ)(o.X6,{variant:"styles.h2"},t.title),(0,n.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,n.tZ)("time",null,t.date),t.tags&&(0,n.tZ)(u.Fragment,null," — ",(0,n.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,n.tZ)("span",null,t.timeToRead," min read")),(0,n.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:i.join(", ")},variant:"layout.content"}},(0,n.tZ)(a.MDXRenderer,null,t.body)))};var f=function(e){var t=Object.assign({},e);return(0,n.tZ)(l,t)}},46725:function(e,t,r){var n=r(93395);e.exports={MDXRenderer:n}},93395:function(e,t,r){var n=r(69100),o=r(319),a=r(59713),u=r(37316),s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(67294),l=r(64983).mdx,f=r(89480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=u(e,s),c=f(t),d=i.useMemo((function(){if(!r)return null;var e=p({React:i,mdx:l},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return i.createElement(d,p({},a))}}}]);
//# sourceMappingURL=component---src-templates-post-query-tsx-3b3d4cc23b08c389018d.js.map