(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[89437,45992],{313647:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(892322),o=r(640271);const i=function(e){if(!e)throw new Error("geojson is required");var t=[];return(0,n.nG)(e,(function(e){t.push(e)})),(0,o.uf)(t)}},61133:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(867076).createSink;const o=function(){return r(854540),{Map:r(872892).Z,Layer:r(2400).Z,Feature:n((function(){}))}}},45992:(e,t,r)=>{"use strict";r.d(t,{h:()=>l,Z:()=>p});var n=r(535937),o=r.n(n),i=r(836882),a=r(737275);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e,t){var r,n,c,u,f=i.Z;if("custom"===e)r=t;else if(c=(u=e.split("."))[0],n=u[1],!(r=f[c]))throw new Error("No such provider ("+c+")");var l={url:r.url,options:r.options||{}};if(n&&"variants"in r){if(!(n in r.variants))throw new Error("No such variant of "+(c||r.url)+" ("+n+")");var p,d=r.variants[n];p="string"==typeof d?{variant:d}:d.options,l={url:d.url||l.url,options:s(s({},l.options||{}),p)}}else"function"==typeof l.url&&(l.url=l.url(u.splice(1,u.length-1).join(".")));var v="file:"===window.location.protocol||l.options.forceHTTP;0===l.url.indexOf("//")&&v&&(l.url="http:"+l.url),l.options.retina&&(t.detectRetina&&a.ZP.getBrowserProperties().retina?t.detectRetina=!1:l.options.retina=""),l.options.attribution&&(l.options.attribution=function e(t){return-1===t.indexOf("{attribution.")?t:t.replace(/\{attribution.(\w*)\}/,(function(t,r){return e(f[r].options.attribution)}))}(l.options.attribution));var b=s(s({},l.options),o()(t,(function(e){return void 0!==e})));return[l.url,b]};const p={getLayerConfig:l}},923645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),t.push(u))}},t}},893379:(e,t,r)=>{"use strict";var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function a(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},n=[],o=0;o<e.length;o++){var c=e[o],u=t.base?c[0]+t.base:c[0],s=r[u]||0,f="".concat(u," ").concat(s);r[u]=s+1;var l=a(f),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:b(p,t),references:1}),n.push(f)}return n}function u(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function l(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d=null,v=0;function b(e,t){var r,n,o;if(t.singleton){var i=v++;r=d||(d=u(t)),n=l.bind(null,r,i,!1),o=l.bind(null,r,i,!0)}else r=u(t),n=p.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=a(r[n]);i[o].references--}for(var u=c(e,t),s=0;s<r.length;s++){var f=a(r[s]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}r=u}}}}}]);