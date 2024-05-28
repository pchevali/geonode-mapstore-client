/*! For license information please see 90778.b9fd65f5643e2f72c466.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[90778],{584121:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>o})},178598:function(e,t,n){var r,o=o||function(e){"use strict";if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,i=/constructor/i.test(e.HTMLElement)||e.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)((function(){throw t}),0)},s=function(e){setTimeout((function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()}),4e4)},l=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},c=function(t,c,f){f||(t=l(t));var d,p=this,h="application/octet-stream"===t.type,g=function(){!function(e,t,n){for(var r=(t=[].concat(t)).length;r--;){var o=e["on"+t[r]];if("function"==typeof o)try{o.call(e,e)}catch(e){u(e)}}}(p,"writestart progress write writeend".split(" "))};if(p.readyState=p.INIT,o)return d=n().createObjectURL(t),void setTimeout((function(){var e,t;r.href=d,r.download=c,e=r,t=new MouseEvent("click"),e.dispatchEvent(t),g(),s(d),p.readyState=p.DONE}));!function(){if((a||h&&i)&&e.FileReader){var r=new FileReader;return r.onloadend=function(){var t=a?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(t,"_blank")||(e.location.href=t),t=void 0,p.readyState=p.DONE,g()},r.readAsDataURL(t),void(p.readyState=p.INIT)}d||(d=n().createObjectURL(t)),h?e.location.href=d:e.open(d,"_blank")||(e.location.href=d),p.readyState=p.DONE,g(),s(d)}()},f=c.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=l(e)),navigator.msSaveOrOpenBlob(e,t)}:(f.abort=function(){},f.readyState=f.INIT=0,f.WRITING=1,f.DONE=2,f.error=f.onwritestart=f.onprogress=f.onwrite=f.onabort=f.onerror=f.onwriteend=null,function(e,t,n){return new c(e,t||e.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);e.exports?e.exports.saveAs=o:null!==n.amdD&&null!==n.amdO&&(void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r))},819081:(e,t,n)=>{"use strict";e.exports=n(1174)},748759:(e,t,n)=>{"use strict";n.d(t,{df:()=>m,YD:()=>w});var r=n(722122),o=n(419756),i=n(663349),a=n(393552),u=n(584121),s=n(124852),l=n(441143),c=n.n(l),f=new Map,d=new Map,p=new Map,h=0;function g(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,o=r.root,i=r.rootMargin,a=r.threshold;if(c()(!f.has(e),"react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s",e),e){var u=function(e){return e?p.has(e)?p.get(e):(h+=1,p.set(e,h.toString()),p.get(e)+"_"):""}(o)+(i?a.toString()+"_"+i:a.toString()),s=d.get(u);s||(s=new IntersectionObserver(y,n),u&&d.set(u,s));var l={callback:t,element:e,inView:!1,observerId:u,observer:s,thresholds:s.thresholds||(Array.isArray(a)?a:[a])};return f.set(e,l),s.observe(e),l}}function v(e){if(e){var t=f.get(e);if(t){var n=t.observerId,r=t.observer,o=r.root;r.unobserve(e);var i=!1,a=!1;n&&f.forEach((function(t,r){r!==e&&(t.observerId===n&&(i=!0,a=!0),t.observer.root===o&&(a=!0))})),!a&&o&&p.delete(o),r&&!i&&r.disconnect(),f.delete(e)}}}function y(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,o=f.get(r);if(o&&n>=0){var i=o.thresholds.some((function(e){return o.inView?n>e:n>=e}));void 0!==t&&(i=i&&t),o.inView=i,o.callback(i,e)}}))}var m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,(0,u.Z)((0,i.Z)(t),"state",{inView:!1,entry:void 0}),(0,u.Z)((0,i.Z)(t),"node",null),(0,u.Z)((0,i.Z)(t),"handleNode",(function(e){t.node&&v(t.node),t.node=e||null,t.observeNode()})),(0,u.Z)((0,i.Z)(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){},n.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(v(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(v(this.node),this.node=null)},n.componentWillUnmount=function(){this.node&&(v(this.node),this.node=null)},n.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;g(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},n.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var i=this.props,a=i.children,u=i.as,l=i.tag,c=(i.triggerOnce,i.threshold,i.root,i.rootMargin,(0,o.Z)(i,["children","as","tag","triggerOnce","threshold","root","rootMargin"]));return(0,s.createElement)(u||l||"div",(0,r.Z)({ref:this.handleNode},c),a)},t}(s.Component);function w(e){void 0===e&&(e={});var t=(0,s.useRef)(),n=(0,s.useState)({inView:!1,entry:void 0}),r=n[0],o=n[1],i=(0,s.useCallback)((function(n){t.current&&v(t.current),n&&g(n,(function(t,r){o({inView:t,entry:r}),t&&e.triggerOnce&&v(n)}),e),t.current=n}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return(0,s.useDebugValue)(r.inView),[i,r.inView,r.entry]}(0,u.Z)(m,"displayName","InView"),(0,u.Z)(m,"defaultProps",{threshold:0,triggerOnce:!1})},93054:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=function(e){if("function"!=typeof e)throw new TypeError("You must provide a valid moment object");var t="function"==typeof e().locale?"locale":"lang";if(!e.localeData)throw new TypeError("The Moment localizer depends on the `localeData` api, please provide a moment object v2.2.0 or higher");function n(n,r,o){return n?e(r,o)[t](n):e(r,o)}var r={formats:{date:"L",time:"LT",default:"lll",header:"MMMM YYYY",footer:"LL",weekday:"dd",dayOfMonth:"DD",month:"MMM",year:"YYYY",decade:function(t,n,r){return r.format(t,"YYYY",n)+" - "+r.format(function(t){return e(t).add(10,"year").add(-1,"millisecond").toDate()}(t),"YYYY",n)},century:function(t,n,r){return r.format(t,"YYYY",n)+" - "+r.format(function(t){return e(t).add(100,"year").add(-1,"millisecond").toDate()}(t),"YYYY",n)}},firstOfWeek:function(t){return e.localeData(t).firstDayOfWeek()},parse:function(e,t,r){if(!e)return null;var o=n(r,e,t);return o.isValid()?o.toDate():null},format:function(e,t,r){return n(r,e).format(t)}};return o.default.setDateLocalizer(r),r};var r,o=(r=n(577036))&&r.__esModule?r:{default:r};e.exports=t.default},41545:e=>{e.exports=r,e.exports.parse=r,e.exports.stringify=function e(t){function n(e){return e.join(" ")}function r(e){return e.map(n).join(", ")}function o(e){return e.map(r).map(i).join(", ")}function i(e){return"("+e+")"}switch("Feature"===t.type&&(t=t.geometry),t.type){case"Point":return"POINT ("+n(t.coordinates)+")";case"LineString":return"LINESTRING ("+r(t.coordinates)+")";case"Polygon":return"POLYGON ("+o(t.coordinates)+")";case"MultiPoint":return"MULTIPOINT ("+r(t.coordinates)+")";case"MultiPolygon":return"MULTIPOLYGON ("+t.coordinates.map(o).map(i).join(", ")+")";case"MultiLineString":return"MULTILINESTRING ("+o(t.coordinates)+")";case"GeometryCollection":return"GEOMETRYCOLLECTION ("+t.geometries.map(e).join(", ")+")";default:throw new Error("stringify requires a valid GeoJSON Feature or geometry object as input")}};var t=/[-+]?([0-9]*\.[0-9]+|[0-9]+)([eE][-+]?[0-9]+)?/,n=new RegExp("^"+t.source+"(\\s"+t.source+"){1,}");function r(e){var t,r=e.split(";"),o=r.pop(),i=(r.shift()||"").split("=").pop(),a=0;function u(e){var t=o.substring(a).match(e);return t?(a+=t[0].length,t[0]):null}function s(){u(/^\s*/)}function l(){s();for(var e,t=0,r=[],o=[r],i=r;e=u(/^(\()/)||u(/^(\))/)||u(/^(,)/)||u(n);){if("("===e)o.push(i),i=[],o[o.length-1].push(i),t++;else if(")"===e){if(0===i.length)return null;if(!(i=o.pop()))return null;if(0==--t)break}else if(","===e)i=[],o[o.length-1].push(i);else{if(e.split(/\s/g).some(isNaN))return null;Array.prototype.push.apply(i,e.split(/\s/g).map(parseFloat))}s()}return 0!==t?null:r}function c(){for(var e,t,r=[];t=u(n)||u(/^(,)/);)","===t?(r.push(e),e=[]):t.split(/\s/g).some(isNaN)||(e||(e=[]),Array.prototype.push.apply(e,t.split(/\s/g).map(parseFloat))),s();return e?(r.push(e),r.length?r:null):null}return(t=function e(){return function(){if(!u(/^(point(\sz)?)/i))return null;if(s(),!u(/^(\()/))return null;var e=c();return e?(s(),u(/^(\))/)?{type:"Point",coordinates:e[0]}:null):null}()||function(){if(!u(/^(linestring(\sz)?)/i))return null;if(s(),!u(/^(\()/))return null;var e=c();return e&&u(/^(\))/)?{type:"LineString",coordinates:e}:null}()||function(){if(!u(/^(polygon(\sz)?)/i))return null;s();var e=l();return e?{type:"Polygon",coordinates:e}:null}()||function(){if(!u(/^(multipoint)/i))return null;s();var e=o.substring(o.indexOf("(")+1,o.length-1).replace(/\(/g,"").replace(/\)/g,"");o="MULTIPOINT ("+e+")";var t=l();return t?(s(),{type:"MultiPoint",coordinates:t}):null}()||function(){if(!u(/^(multilinestring)/i))return null;s();var e=l();return e?(s(),{type:"MultiLineString",coordinates:e}):null}()||function(){if(!u(/^(multipolygon)/i))return null;s();var e=l();return e?{type:"MultiPolygon",coordinates:e}:null}()||function(){var t,n=[];if(!u(/^(geometrycollection)/i))return null;if(s(),!u(/^(\()/))return null;for(;t=e();)n.push(t),s(),u(/^(,)/),s();return u(/^(\))/)?{type:"GeometryCollection",geometries:n}:null}()}())&&i.match(/\d+/)&&(t.crs={type:"name",properties:{name:"urn:ogc:def:crs:EPSG::"+i}}),t}}}]);