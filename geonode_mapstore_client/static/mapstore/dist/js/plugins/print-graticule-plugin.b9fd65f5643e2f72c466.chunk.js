(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[22084],{496829:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(45697),o=r.n(n),i=r(124852),l=r.n(i),a=r(480681);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function f(e,t,r){return t=s(t),function(e,t){if(t&&("object"==c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e,t,r){return(t=m(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}var v=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return b(e=f(this,t,[].concat(n)),"onChange",(function(){e.props.onChange(!e.refs.input.props.checked)})),b(e,"isEnabled",(function(){return e.props.isEnabled?e.props.isEnabled(e.props.layouts):0===e.props.layouts.length||e.props.layouts.some((function(t){return t.name.match(e.props.enableRegex)}))})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return l().createElement(a.XZ,{disabled:!this.isEnabled(),ref:"input",checked:this.props.checked,onChange:this.onChange},this.props.label)}}])&&u(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(l().Component);b(v,"propTypes",{layouts:o().array,enableRegex:o().oneOfType([o().object,o().string]),label:o().string,onChange:o().func,checked:o().bool,isEnabled:o().func}),b(v,"defaultProps",{layouts:[],enableRegex:/^.*$/,label:"Option",onChange:function(){},checked:!1});const d=v},113123:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Graticule:()=>g,default:()=>O});var n=r(124852),o=r.n(n),i=r(322843),l=r(171703),a=r(986069),c=r(832395),u=r(145959),f=r(699573),p=["style","labels","labelStyle","labelXStyle","labelYStyle","frame","frameStyle","labelFormatter"];function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(null,arguments)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){var t=e.style,r=e.labels,i=e.labelStyle,l=e.labelXStyle,a=e.labelYStyle,u=e.frame,s=e.frameStyle,m=e.labelFormatter,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,p);return(0,n.useEffect)((function(){(0,f.addMapTransformer)("graticule",function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,l=arguments.length>6?arguments[6]:void 0;return function(a,c){var u,f,p,s;return null!==(u=a.print)&&void 0!==u&&null!==(f=u.spec)&&void 0!==f&&null!==(p=f.params)&&void 0!==p&&p.graticule?v(v({},c),{},{layers:[].concat((s=c.layers,function(e){if(Array.isArray(e))return b(e)}(s)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(s)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[{type:"graticule",visibility:!0,labels:t,frame:!!o,frameRatio:o,frameStyle:i,style:e,labelXStyle:r,labelYStyle:n,xLabelFormatter:l,yLabelFormatter:l}])}):c}}(t,r,l||i,a||i,null!=u?u:0,s,m))}),[]),o().createElement(c.W,y({property:"graticule",label:"print.graticule"},d))};const O=(0,i.rx)("PrintGraticule",{component:(0,l.connect)((function(e){var t;return{spec:(null==e||null===(t=e.print)||void 0===t?void 0:t.spec)||{}}}),{onChangeParameter:a.d$})(g),reducers:{print:u.Z},containers:{Print:{priority:1,target:"left-panel",position:5}}})},832395:(e,t,r)=>{"use strict";r.d(t,{W:()=>m});var n=r(124852),o=r.n(n),i=r(45697),l=r.n(i),a=r(322843),c=r(86638),u=r(496829),f=r(227361),p=r.n(f);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e,t){var r=e.spec,i=e.property,l=e.label,f=e.onChangeParameter,s=e.enabled,m=void 0===s||s,v=e.actions,d=e.path,g=void 0===d?"params.":d,O=e.additionalProperty,h=void 0===O||O,j=g+i;return(0,n.useEffect)((function(){var e;h&&(null==v||v.addParameter(i,null!==(e=p()(r,j))&&void 0!==e&&e))}),[]),(0,a.CU)({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),"{"+m+"}")?o().createElement(u.Z,{checked:!!p()(r,j),label:(0,c.S$)(t.messages,l),onChange:function(e){return f(j,e)}}):null};m.contextTypes={messages:l().object}}}]);