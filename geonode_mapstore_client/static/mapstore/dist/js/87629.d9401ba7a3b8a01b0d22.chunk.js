(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[87629],{801550:(e,t,n)=>{"use strict";n.d(t,{pP:()=>r,TR:()=>o,N7:()=>i,mq:()=>a,uv:()=>c,Qy:()=>u,IL:()=>s,Li:()=>l,OW:()=>p,ZO:()=>f,Um:()=>y,TF:()=>d,Ls:()=>b,Ec:()=>m,Eu:()=>v,JJ:()=>g,nZ:()=>h,YD:()=>O,GI:()=>w,Jb:()=>P,Uh:()=>E,e$:()=>j,eh:()=>S,$j:()=>_,bJ:()=>N,Mk:()=>C,xy:()=>x,o6:()=>D,NH:()=>T,FP:()=>I,Mo:()=>k,sO:()=>R,Px:()=>M,hd:()=>A,y9:()=>Z,Ju:()=>K,BV:()=>L,SO:()=>V,H0:()=>G,$X:()=>U,ou:()=>B,NE:()=>H,Lq:()=>z,aN:()=>F});var r="CHANGE_MAP_VIEW",o="CLICK_ON_MAP",i="CHANGE_MOUSE_POINTER",a="CHANGE_ZOOM_LVL",c="PAN_TO",u="ZOOM_TO_EXTENT",s="ZOOM_TO_POINT",l="CHANGE_MAP_CRS",p="CHANGE_MAP_SCALES",f="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",d="CREATION_ERROR_LAYER",b="UPDATE_VERSION",m="INIT_MAP",v="RESIZE_MAP",g="CHANGE_MAP_LIMITS",h="SET_MAP_RESOLUTIONS",O="REGISTER_EVENT_LISTENER",w="UNREGISTER_EVENT_LISTENER",P="MOUSE_MOVE",E="MOUSE_OUT",j="MAP:MAP_PLUGIN_LOAD",S="MAP:ORIENTATION",_="MAP:UPDATE_MAP_VIEW",N="MAP:UPDATE_MAP_OPTIONS";function C(e,t,n,r){return{type:j,mapType:t,loading:e,loaded:n,error:r}}function x(e,t,n){return{type:s,pos:e,zoom:t,crs:n}}function D(e,t,n,o,i,a,c,u){return{type:r,center:e,zoom:t,bbox:n,size:o,mapStateSource:i,projection:a,viewerOptions:c,resolution:u}}function T(e){return{type:l,crs:e}}function I(e,t){return{type:o,point:e,layer:t}}function k(e){return{type:i,pointer:e}}function R(e,t){return{type:a,zoom:e,mapStateSource:t}}function M(e,t,n,r){return{type:u,extent:e,crs:t,maxZoom:n,options:r}}function A(e,t){return{type:f,style:e,mapStateSource:t}}function Z(e){return{type:m,disableFeedbackMask:e}}function K(){return{type:v}}function L(e){var t=e.restrictedExtent,n=e.crs,r=e.minZoom;return{type:g,restrictedExtent:t,crs:n,minZoom:r}}function V(e){return{type:h,resolutions:e}}var G=function(e,t){return{type:O,eventName:e,toolName:t}},U=function(e,t){return{type:w,eventName:e,toolName:t}},B=function(e){return{type:P,position:e}},H=function(){return{type:E}},z=function(e){return{type:S,orientation:e}},F=function(e){return{type:N,configUpdate:e}}},38560:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(480681),o=n(124852),i=n.n(o),a=n(294184),c=n.n(a),u=["disabled","className","onClick"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}var l=n(815135);const p=(f=r.zx,i().forwardRef((function(e,t){var n=e.disabled,r=e.className,o=e.onClick,a=void 0===o?function(){}:o,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,u);return i().createElement(f,s({ref:t,className:n?c()("disabled",r):r,onClick:function(){n||a.apply(void 0,arguments)}},l),l.children)})));var f;(0,l.Z)(r.zx)},678635:(e,t,n)=>{"use strict";n.d(t,{Z:()=>se});var r=n(124852),o=n.n(r),i=n(45697),a=n.n(i),c=n(548403),u=n.n(c),s=n(480681),l=n(794192);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function y(e,t,n){return t=b(t),function(e,t){if(t&&("object"==p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,d()?Reflect.construct(t,n||[],b(e).constructor):t.apply(e,n))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t,n){return(t=g(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}var h=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return v(e=y(this,t,[].concat(r)),"verifyOnKeyDownEvent",(function(t){69===t.keyCode&&t.preventDefault(),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown(t))})),v(e,"validateDecimalLon",(function(t){var n=e.props.constraints[e.props.format].lon.min,r=e.props.constraints[e.props.format].lon.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),v(e,"validateDecimalLat",(function(t){var n=e.props.constraints[e.props.format].lat.min,r=e.props.constraints[e.props.format].lat.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props,n=t.coordinate,r=t.value,i=t.onChange,a=t.disabled,c="validateDecimal"+u()(n);return o().createElement(s.cw,{validationState:this[c](r)},o().createElement(l.Z,{disabled:a,key:n,value:r,placeholder:n,onChange:function(t){""===t?i(""):null===e[c](t)?i(t):i(r)},onKeyDown:this.verifyOnKeyDownEvent,step:1,validateNameFunc:this[c],type:"number"}))}}])&&f(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(o().Component);v(h,"propTypes",{idx:a().number,value:a().number,constraints:a().object,format:a().string,coordinate:a().string,onChange:a().func,onKeyDown:a().func,onSubmit:a().func,disabled:a().bool}),v(h,"defaultProps",{format:"decimal",coordinate:"lat",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:function(){},disabled:!1});const O=h;function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,C(r.key),r)}}function E(e,t,n){return t=S(t),function(e,t){if(t&&("object"==w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,j()?Reflect.construct(t,n||[],S(e).constructor):t.apply(e,n))}function j(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(j=function(){return!!e})()}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function N(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=function(e,t){if("object"!=w(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==w(t)?t:t+""}var x=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return N(e=E(this,t,[].concat(r)),"verifyOnKeyDownEvent",(function(t){69===t.keyCode&&t.preventDefault(),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown(t))})),N(e,"validateDecimalX",(function(t){var n=e.props.constraints[e.props.format].xCoord.min,r=e.props.constraints[e.props.format].xCoord.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),N(e,"validateDecimalY",(function(t){var n=e.props.constraints[e.props.format].yCoord.min,r=e.props.constraints[e.props.format].yCoord.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.coordinate,n=e.onChange,r=e.disabled,i=e.value,a="validateDecimal"+u()(t);return o().createElement(s.cw,{validationState:this[a](i)},o().createElement(l.Z,{disabled:r,key:t,value:i,placeholder:t,onChange:function(e){n(""===e?"":e)},onKeyDown:this.verifyOnKeyDownEvent,step:1,validateNameFunc:this[a],type:"number"}))}}])&&P(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(o().Component);N(x,"propTypes",{idx:a().number,value:a().number,constraints:a().object,format:a().string,coordinate:a().string,onChange:a().func,onKeyDown:a().func,onSubmit:a().func,disabled:a().bool,currentMapCRS:a().string}),N(x,"contextTypes",{intl:a().object}),N(x,"defaultProps",{format:"decimal",coordinate:"lat",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:function(){},disabled:!1,currentMapCRS:"EPSG:4326"});const D=x;var T=n(414293),I=n.n(T),k=n(867076);const R=(0,k.withProps)((function(e){var t=e.coordinate,n=void 0===t?"lat":t;return{maxDegrees:"lat"===n?90:180,directions:"lat"===n?["N","S"]:["E","W"]}}));var M=n(562395);const A=(0,k.compose)((0,k.withProps)((function(e){return{isValid:""!==e.value}})),(0,k.withState)("initial","setInitial",{}),(0,k.withProps)((function(e){var t=e.isValid,n=e.initial,r=e.degrees,o=e.minutes,i=e.seconds;return t||""===r&&""===o&&""===i?{}:n})),(0,k.withHandlers)({onChange:function(e){return function(t){var n=t.degrees,r=t.minutes,o=t.seconds,i=t.direction;isNaN(n)?e.setInitial({degrees:"",minutes:r,seconds:o,direction:i}):isNaN(r)?e.setInitial({degrees:n,minutes:"",seconds:o,direction:i}):isNaN(o)&&e.setInitial({degrees:n,minutes:r,seconds:"",direction:i}),e.onChange({degrees:n,minutes:r,seconds:o,direction:i})}}}));function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,F(r.key),r)}}function G(e,t,n){return t=B(t),function(e,t){if(t&&("object"==Z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,U()?Reflect.construct(t,n||[],B(e).constructor):t.apply(e,n))}function U(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(U=function(){return!!e})()}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}function H(e,t){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},H(e,t)}function z(e,t,n){return(t=F(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){var t=function(e,t){if("object"!=Z(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Z(t)?t:t+""}var W="degrees",J="seconds",Y="minutes",$=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return z(e=G(this,t,[].concat(r)),"onChange",(function(t,n){var r=e.getUpdatedCoordinateValue(t,n);e.props.onChange(r)})),z(e,"getUpdatedCoordinateValue",(function(t,n){try{var r=z({degrees:e.props.degrees,minutes:e.props.minutes,seconds:e.props.seconds,direction:e.props.direction},t,t===W?Math.min(n,e.props.maxDegrees):n),o=r.seconds,i=r.minutes+e.getSexagesimalStep(o),a=Math.min(e.props.maxDegrees,r.degrees+e.getSexagesimalStep(i)),c=r.direction;return o=e.roundToNextSexagesimalStep(o),i=e.roundToNextSexagesimalStep(i),a===e.props.maxDegrees&&(i=0,o=0),c=a<0?c===e.props.directions[0]?e.props.directions[1]:e.props.directions[0]:c,-1===a&&(r.degrees<0&&r.minutes>=0?a=r.degrees:r.minutes<0&&r.degrees<=0?(a=0,i=r.minutes):(a=0,i=0,o=1e-4)),{degrees:a,minutes:i,seconds:o,direction:c}}catch(e){return null}})),z(e,"getSexagesimalStep",(function(e){return e>=60?1:e<0?-1:0})),z(e,"getInputStyle",(function(e){return isNaN(e)||""===e?{borderColor:"#a94442"}:{}})),z(e,"getNewValue",(function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W;if(""===t)n="";else{var o=r===J?parseFloat(t):parseInt(t,10),i=r===W?e.props.maxDegrees:60;n=Math.round(10*o)/10<i?o:e.props[r]}return n})),z(e,"verifyOnKeyDownEvent",(function(t){var n;69===t.keyCode&&t.preventDefault(),"0"===(null==t||null===(n=t.target)||void 0===n?void 0:n.value)&&t.target.setSelectionRange(-1,-1),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown())})),z(e,"roundToNextSexagesimalStep",(function(e){return e<0?60+e:e>=60?e-60:e})),z(e,"isValid",(function(t){var n=t.minutes,r=t.seconds,o=t.degrees,i=t.direction;return!I()(n)&&n>0&&n<60&&!I()(r)&&r>0&&r<60&&!I()(o)&&o>0&&o<e.props.maxDegrees&&i})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}(t,e),n=t,r=[{key:"render",value:function(){var e,t,n,r=this,i={padding:0,textAlign:"center",borderRight:"none"},a=this.getInputStyle(this.props.degrees),c=this.getInputStyle(this.props.minutes),u=this.getInputStyle(this.props.seconds),p={position:"relative",top:0,overflow:"visible",zIndex:3,left:-25,width:0,height:0},f=(null!==(e=null==this||null===(t=this.props)||void 0===t||null===(n=t.aeronauticalOptions)||void 0===n?void 0:n.seconds)&&void 0!==e?e:{}).step;return o().createElement(s.cw,{style:{display:"inline-flex"}},o().createElement("div",{className:W,style:{width:40,display:"flex"}},o().createElement(l.Z,{key:this.props.coordinate+W,value:this.props.degrees,disabled:this.props.disabled,placeholder:"d",onChange:function(e){return r.onChange(W,r.getNewValue(e))},step:1,size:3,max:this.props.maxDegrees,min:-1,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},style:L(L({width:"100%"},i),a),type:"number"}),o().createElement("span",{style:p},"°")),o().createElement("div",{className:Y,style:{width:40,display:"flex"}},o().createElement(l.Z,{disabled:this.props.disabled,key:this.props.coordinate+Y,placeholder:"m",size:3,value:this.props.minutes,onChange:function(e){return r.onChange(Y,r.getNewValue(e,Y))},max:60,min:-1,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},style:L(L({width:"100%"},i),c),step:1,type:"number"}),o().createElement("span",{style:p},"′")),o().createElement("div",{className:J,style:{display:"flex"}},o().createElement(l.Z,{disabled:this.props.disabled,key:this.props.coordinate+J,value:this.props.seconds,placeholder:"s",onChange:function(e){return r.onChange(J,r.getNewValue(e,J))},step:f,max:60,onKeyDown:function(e){r.verifyOnKeyDownEvent(e)},min:-1,style:L(L({width:"100%"},i),u),type:"number"}),o().createElement("span",{style:p},"″")),o().createElement("div",{className:"direction-select"},o().createElement(s.NI,{disabled:this.props.disabled,componentClass:"select",placeholder:"select",value:this.props.direction,onChange:function(e){return r.onChange("direction",e.target.value)},style:{paddingLeft:4,paddingRight:4,flex:"1 1 0%"}},this.props.directions.map((function(e){return o().createElement("option",{key:e,value:e},e)})))))}}],r&&V(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(o().Component);z($,"propTypes",{idx:a().number,maxDegrees:a().number,degrees:a().number,minutes:a().number,seconds:a().number,directions:a().array,direction:a().string,aeronauticalOptions:a().object,coordinate:a().string,onChange:a().func,onKeyDown:a().func,disabled:a().bool}),z($,"defaultProps",{coordinate:"lat",maxDegrees:90,directions:["N","S"],aeronauticalOptions:{seconds:{decimals:4,step:1e-4}},onKeyDown:function(){},disabled:!1});const q=(0,k.compose)(R,M.Z,A)($),X=(0,k.compose)((0,k.withHandlers)({onChange:function(e){var t=e.onChange,n=void 0===t?function(){}:t,r=e.maxLatitude,o=void 0===r?89.9997222222:r,i=e.coordinate;return function(e){return n(Math.abs(parseFloat(e))>o&&"lat"===i?Math.sign(e)*o:e)}}}));function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(null,arguments)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ce(r.key),r)}}function ne(e,t,n){return t=oe(t),function(e,t){if(t&&("object"==Q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,re()?Reflect.construct(t,n||[],oe(e).constructor):t.apply(e,n))}function re(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(re=function(){return!!e})()}function oe(e){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},oe(e)}function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ie(e,t)}function ae(e,t,n){return(t=ce(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(e){var t=function(e,t){if("object"!=Q(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Q(t)?t:t+""}var ue=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ne(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ie(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.format,n=e.owner,r=e.currentMapCRS;return"decimal"===t||I()(t)?"search"===n&&r?o().createElement(D,ee({},this.props,{format:this.props.format||"decimal"})):o().createElement(O,ee({},this.props,{format:this.props.format||"decimal"})):o().createElement(q,this.props)}}])&&te(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(o().Component);ae(ue,"propTypes",{idx:a().number,value:a().number,constraints:a().object,format:a().string,aeronauticalOptions:a().object,coordinate:a().string,onChange:a().func,onKeyDown:a().func,owner:a().string}),ae(ue,"defaultProps",{format:"decimal",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},owner:""});const se=X(ue)},562395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(807654),o=n.n(r),i=n(59854),a=n.n(i),c=n(867076);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p=(0,c.compose)((0,c.withProps)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},function(e,t){var n,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).seconds,i=e>=0?Math.floor(e):Math.ceil(e),c=Math.abs(60*(e-i)),u=Math.floor(c),s=60*(c-u),l=a()(s,null!==(n=null==r?void 0:r.decimals)&&void 0!==n?n:4);return i=Math.abs(i),60===l&&(u++,l=0),60===u&&(i++,u=0),o()(i)||""===e?{degrees:"",minutes:"",seconds:"",direction:t?"E":"N"}:{degrees:i,minutes:u,seconds:l,direction:e<0?t?"W":"S":t?"E":"N"}}(e.value,"lon"===e.coordinate,e.aeronauticalOptions))})),(0,c.withHandlers)({onChange:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.degrees,r=t.minutes,i=t.seconds,a=t.direction,c=0,u=0,s=0;void 0===n&&void 0===r&&void 0===i&&e.onChange(void 0),o()(n)||(c=n),o()(r)||(u=r),o()(i)||(s=i);var l=c+u/60+s/3600;(l>0&&("S"===a||"W"===a)||l<0&&("N"===a||"E"===a))&&(l*=-1),e.onChange(l.toPrecision(12))}}}))},212610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(124852),o=n.n(r),i=n(867076),a=n(957557),c=n.n(a),u=n(815135);const s=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,n=e.noTooltipWhenDisabled;return!(void 0!==n&&n&&t)}),u.Z,(function(e){return function(t){return o().createElement(e,c()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},993451:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(86638),o=n(285547),i=n(45697),a=n.n(i),c=n(984596),u=n.n(c),s=n(701469),l=n.n(s),p=n(414293),f=n.n(p),y=n(747037),d=n.n(y),b=n(867076),m=["messages","locale"];function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=v(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==v(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"msgId";return(0,b.compose)((0,b.getContext)({messages:a().object,locale:a().string}),(0,b.mapProps)((function(i){var a=i.messages,c=i.locale,s=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(i,m);return h(h({},s),u()(e).reduce(function(e,t,n){var i=t.messages,a=t.locale,c=t.mode;return function(){var t=arguments.length>1?arguments[1]:void 0;return h(h({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},O({},t,"msgId"===c?function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(l()(t))return t.map((function(o){var i=(0,r.S$)(e,o[n]||d()(o)&&o||"");return h(h({},o),{},O({},n,f()(i)?t:i))}));var o=t?(0,r.S$)(e,t):t;return f()(o)?t:o}(i,e[t],n):function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(l()(e))return e.map((function(r){var i=(0,o.Z)(r[n]||d()(r)&&r||"",t);return h(h({},r),{},O({},n,f()(i)?e:i))}));var r=(0,o.Z)(e,t);return f()(r)?e:r}(e[t],a,n)))}}(s,{locale:c,messages:a,mode:n},t),{}))})))}},617252:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(124852),o=n.n(r),i=n(867076),a=n(45697),c=n.n(a),u=n(957557),s=n.n(u),l=n(480681),p=n(950966);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function d(e,t,n){return t=m(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,b()?Reflect.construct(t,n||[],m(e).constructor):t.apply(e,n))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function g(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}const O=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),d(this,n,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(n,t),r=n,(a=[{key:"renderPopover",value:function(){return o().createElement(l.J2,s()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,s()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(p.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&y(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,a}(o().Component),g(t,"propTypes",{popover:c().object}),g(t,"defaultProps",{popover:{trigger:!0}}),t}))},777900:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(480681),o=n(815135),i=n(124852),a=n.n(i),c=n(423570),u=n.n(c);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}var l=(0,o.Z)(r.PS),p={disabled:!1,className:"square-button-md",noCaret:!0,idDropDown:u()()};const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.menuOptions,n=void 0===t?[]:t,o=e.buttonConfig,i=void 0===o?{}:o;return a().createElement(l,s({},p,i),n.length?n.map((function(e,t){var n=e.glyph,o=e.text,i=e.onClick,c=e.active,u=void 0!==c&&c;return a().createElement(r.sN,{active:u,eventKey:t,onClick:i,key:t},n&&a().createElement(r.gG,{glyph:n})," ",o)})):null)}},80717:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(124852),o=n.n(r),i=n(819081),a=n.n(i),c=n(480681),u=n(90085),s=["visible","Element","renderButton"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(null,arguments)}const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,n=void 0===t?[]:t,r=e.btnGroupProps,i=void 0===r?{}:r,p=e.btnDefaultProps,f=void 0===p?{}:p,y=e.transitionProps,d=void 0===y?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:y,b=function(){return n.map((function(e,t){var n=e.visible,r=void 0===n||n,i=e.Element,a=e.renderButton,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,s);return r?a||i&&o().createElement(i,l({key:c.key||t},c))||o().createElement(u.Z,l({key:c.key||t},f,c)):null}))};return o().createElement(c.hE,i,d?o().createElement(a(),d,b()):b())}},90085:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(124852),o=n.n(r),i=n(867076),a=n(805346),c=n(957557),u=n.n(c),s=n(480681),l=n(532425),p=n(212610),f=n(617252),y=n(38560),d=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(null,arguments)}const m=(0,i.compose)(p.Z,f.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,n=e.loading,r=e.text,i=void 0===r?"":r,c=e.textId,p=e.glyphClassName,f=void 0===p?"":p,m=e.loaderProps,v=void 0===m?{}:m,g=e.children,h=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,d);return o().createElement(y.Z,u()(h,["pullRight","confirmNo","confirmYes"]),t&&!n?o().createElement(s.gG,{glyph:t,className:f}):null,c?o().createElement(a.Z,{msgId:c}):i,n?o().createElement(l.Z,b({className:"ms-loader".concat(h.bsStyle&&" ms-loader-"+h.bsStyle||"").concat(h.bsSize&&" ms-loader-"+h.bsSize||"")},v)):null,g)}))}}]);