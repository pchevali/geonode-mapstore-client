(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[31232,31351],{587401:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(675263),o=n.n(r),i=n(667294),c=n.n(i),l=n(757588);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function s(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function a(){var e;u(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(m(e=i.call.apply(i,[this].concat(n))),"onChange",(function(t){e.props.onChange(t.target.value)})),e}return t=a,(n=[{key:"render",value:function(){var e=this.props.items.map((function(e){return c().createElement("option",{key:e.value,value:e.value},e.name)}));return c().createElement(l.FormGroup,null,this.props.label?c().createElement(l.ControlLabel,null,this.props.label):null,c().createElement(l.FormControl,{ref:"input",value:this.props.selected,componentClass:"select",onChange:this.onChange},e))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c().Component);v(b,"propTypes",{items:o().array,label:o().string,onChange:o().func,selected:o().string}),v(b,"defaultProps",{items:[],label:"Choice",onChange:function(){},selected:""});const d=b},294883:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Projection:()=>O,default:()=>P});var r=n(667294),o=n.n(r),i=n(675263),c=n.n(i),l=n(533664),a=n(322843),u=n(134049),p=n(986069),f=n(145959),s=n(587401),m=n(86638),y=n(552259),v=n(986267);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){var t,n,r,o,i,c,l;return null!==(t=null!==(n=null==e||null===(r=e.print)||void 0===r||null===(o=r.spec)||void 0===o||null===(i=o.params)||void 0===i?void 0:i.projection)&&void 0!==n?n:null==e||null===(c=e.print)||void 0===c||null===(l=c.map)||void 0===l?void 0:l.projection)&&void 0!==t?t:"EPSG:3857"};function g(e,t){var n=j(e),r=(0,u.mapProjectionSelector)(e),o=(0,v.normalizeSRS)(n),i=(0,v.normalizeSRS)(r);if(o!==i){var c=(0,y.reprojectZoom)(t.scaleZoom,i,o),l=(0,y.getScales)(o);return d(d({},t),{},{zoom:c,scaleZoom:c,scale:l[c],projection:o})}return t}var O=function(e,t){var n,i,c=e.projection,l=e.items,a=e.onChangeParameter,p=e.allowPreview,f=void 0!==p&&p,y=e.projections,b=e.onRefresh,d=void 0===b?function(){}:b;return(0,r.useEffect)((function(){(0,u.addValidator)("projection","map-preview",function(e){return function(t){var n=j(t),r=(0,u.mapProjectionSelector)(t);return e||(0,v.normalizeSRS)(n)===(0,v.normalizeSRS)(r)?{valid:!0}:{valid:!1,errors:["print.projectionmismatch"]}}}(f))}),[f]),(0,r.useEffect)((function(){(0,u.addMapTransformer)("projection",g)}),[]),o().createElement(o().Fragment,null,o().createElement(s.Z,{selected:c,onChange:function(e){a("params.projection",e),d()},items:(n=l,i=y,i?i.filter((function(e){return n.find((function(t){return t.value===e.value}))})):n),label:(0,m.S$)(t.messages,"print.projection")}))};O.contextTypes={messages:c().object};const P=(0,a.rx)("PrintProjection",{component:(0,l.connect)((function(e){var t,n;return{spec:(null==e||null===(t=e.print)||void 0===t?void 0:t.spec)||{},map:null==e||null===(n=e.print)||void 0===n?void 0:n.map,projection:j(e),items:Object.keys((0,v.getAvailableCRS)()).map((function(e){return{name:e,value:e}}))}}),{onChangeParameter:p.d$})(O),reducers:{print:f.Z},containers:{Print:{priority:1,target:"left-panel",position:4}}})},531351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}}}]);