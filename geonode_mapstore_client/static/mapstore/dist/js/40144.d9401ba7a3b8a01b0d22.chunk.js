(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[40144,47310],{580416:(e,t,r)=>{"use strict";r.d(t,{yS:()=>n,Zz:()=>o,ms:()=>i,ih:()=>u,OX:()=>a,sb:()=>c,K$:()=>l,k7:()=>f,cX:()=>s,x9:()=>p,vs:()=>y,oE:()=>d,Po:()=>v,qv:()=>b,cI:()=>m,g6:()=>g,I4:()=>E,l$:()=>O,Xv:()=>S,k3:()=>h,CQ:()=>R,R8:()=>L,HN:()=>T,sH:()=>_,c7:()=>A,_7:()=>P,eF:()=>I,O6:()=>D,ED:()=>w,RP:()=>F,sF:()=>M,VP:()=>N,He:()=>j,vO:()=>C,WO:()=>G,bh:()=>x,MK:()=>k,ZF:()=>B,tV:()=>Y,Dv:()=>U,Yz:()=>q,kI:()=>H,XG:()=>W,A4:()=>$,Rp:()=>X,$o:()=>Z,ct:()=>z,oh:()=>K,$h:()=>V,ud:()=>Q,Qr:()=>J,LR:()=>ee,nN:()=>te,UG:()=>re,c9:()=>ne,Xy:()=>oe});var n="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",u="TOGGLE_NODE",a="SORT_NODE",c="REMOVE_NODE",l="UPDATE_NODE",f="MOVE_NODE",s="LAYER_LOADING",p="LAYER_LOAD",y="LAYER_ERROR",d="ADD_LAYER",v="ADD_GROUP",b="REMOVE_LAYER",m="SHOW_SETTINGS",g="HIDE_SETTINGS",E="UPDATE_SETTINGS",O="REFRESH_LAYERS",S="LAYERS:UPDATE_LAYERS_DIMENSION",h="LAYERS_REFRESHED",R="LAYERS_REFRESH_ERROR",L="LAYERS:BROWSE_DATA",T="LAYERS:DOWNLOAD",_="LAYERS:CLEAR_LAYERS",A="LAYERS:SELECT_NODE",P="LAYERS:FILTER_LAYERS",I="LAYERS:SHOW_LAYER_METADATA",D="LAYERS:HIDE_LAYER_METADATA",w="LAYERS:UPDATE_SETTINGS_PARAMS";function F(e,t,r){return{type:m,node:e,nodeType:t,options:r}}function M(){return{type:g}}function N(e){return{type:E,options:e}}function j(e,t){return{type:n,newProperties:t,layer:e}}function C(e,t){return{type:o,layer:e,params:t}}function G(e,t){return{type:i,newProperties:t,group:e}}function x(e,t,r){return{type:u,node:e,nodeType:t,status:!r}}function k(e,t){return{type:a,node:e,order:t,sortLayers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}function B(e,t){return{type:c,node:e,nodeType:t,removeEmpty:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function Y(e,t,r){return{type:l,node:e,nodeType:t,options:r}}function U(e,t,r){return{type:f,node:e,groupId:t,index:r}}function q(e){return{type:s,layerId:e}}function H(e,t){return{type:p,layerId:e,error:t}}function W(e,t,r){return{type:y,layerId:e,tilesCount:t,tilesErrorCount:r}}function $(e){return{type:d,layer:e,foreground:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function X(e,t,r){return{type:v,group:e,parent:t,options:r,asFirst:arguments.length>3&&void 0!==arguments[3]&&arguments[3]}}function Z(e){return{type:b,layerId:e}}function z(e,t){return{type:n,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function K(e){return{type:h,layers:e}}function V(e,t){return{type:R,layers:e,error:t}}function Q(e,t,r,n){return{type:S,dimension:e,value:t,options:r,layers:n}}function J(e){return{type:L,layer:e}}function ee(e){return{type:T,layer:e}}function te(){return{type:_}}function re(e,t,r){return{type:A,id:e,nodeType:t,ctrlKey:r}}function ne(e,t){return{type:I,metadataRecord:e,maskLoading:t}}function oe(e,t){return{type:w,newParams:e,update:t}}},921914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>c,DZ:()=>l,e8:()=>f,E0:()=>s,F9:()=>p,X_:()=>y,pb:()=>d,Re:()=>v,ih:()=>b,xy:()=>m,jL:()=>g,oz:()=>E,ph:()=>O,lF:()=>S,gG:()=>h,cb:()=>R,GI:()=>L,B1:()=>T,fv:()=>_,gc:()=>A,zX:()=>P,ZF:()=>I,Zb:()=>D,DW:()=>w,Xp:()=>F,Fm:()=>M,sV:()=>N,LU:()=>j,XP:()=>C,WU:()=>G,mK:()=>x,g:()=>k,ws:()=>B,HP:()=>Y,aN:()=>U,Pg:()=>H,u0:()=>W,TM:()=>$,PM:()=>X,lK:()=>Z,sv:()=>z,MO:()=>K,oO:()=>V,Mc:()=>Q,Zw:()=>J,RA:()=>ee,am:()=>te,ZM:()=>re,wm:()=>ne,Y$:()=>oe,Qu:()=>ie,kT:()=>ue});var n=r(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",l="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",s="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",v="NO_QUERYABLE_LAYERS",b="CLEAR_WARNING",m="FEATURE_INFO_CLICK",g="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",E="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",O="TOGGLE_MAPINFO_STATE",S="UPDATE_CENTER_TO_MARKER",h="IDENTIFY:CHANGE_PAGE",R="IDENTIFY:CLOSE_IDENTIFY",L="IDENTIFY:CHANGE_FORMAT",T="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",_="IDENTIFY:EDIT_LAYER_FEATURES",A="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",P="IDENTIFY:SET_MAP_TRIGGER",I="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",D="IDENTIFY:SET_SHOW_IN_MAP_POPUP",w="IDENTIFY:IDENTIFY_IS_MOUNTED",F="IDENTIFY:INIT_PLUGIN";function M(e,t,r,n,i){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:i}}function N(e,t,r,n){return{type:i,error:t,reqId:e,requestParams:r,layerMetadata:n}}function j(){return{type:v}}function C(){return{type:b}}function G(e,t){return{type:c,reqId:e,request:t}}function x(e){return{type:a,enabled:e}}function k(){return{type:l}}function B(e){return{type:f,infoFormat:e}}function Y(){return{type:s}}function U(){return{type:p}}function q(e){return{type:y,reverseGeocodeData:e.data}}function H(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(q(e))})).catch((function(e){t(q(e))}))}}function W(){return{type:d}}function $(){return{type:O}}function X(e){return{type:S,status:e}}function Z(e,t){return{type:m,point:e,layer:t,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,ignoreVisibilityLimits:arguments.length>5&&void 0!==arguments[5]&&arguments[5]}}function z(e){return{type:g,point:e}}function K(e){return{type:E,enabled:e}}function V(e){return{type:h,index:e}}var Q=function(){return{type:R}},J=function(e){return{type:L,format:e}},ee=function(e){return{type:T,showCoordinateEditor:e}},te=function(e){return{type:_,layer:e}},re=function(e){return{type:A,query:e}},ne=function(e){return{type:P,trigger:e}},oe=function(e){return{type:D,value:e}},ie=function(e){return{type:w,isMounted:e}},ue=function(e){return{type:F,cfg:e}}},647310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(375875),o=r.n(n),i=r(472500),u=r.n(i),a=r(727418),c=r.n(a),l={format:"json",bounded:0,polygon_geojson:1,priority:5};const f={geocode:function(e,t){var r=c()({q:e},l,t||{}),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=c()({lat:e.lat,lon:e.lng},t||{},l),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},501157:(e,t,r)=>{"use strict";r.d(t,{ID:()=>_,en:()=>A,Xv:()=>I,FU:()=>F,gs:()=>N,tt:()=>j,jY:()=>C,T6:()=>G,hZ:()=>k,ZP:()=>B});var n=r(472500),o=r.n(n),i=r(701469),u=r.n(i),a=r(984596),c=r.n(a),l=r(227361),f=r.n(l),s=r(505055),p=r.n(s),y=r(375875),d=r.n(y),v=r(737275),b=r(916651),m=r(577215);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function E(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=g(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==g(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L={},T="1.3.0",_="1.1.1",A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{service:"WMS",version:T,request:"GetCapabilities"},r=arguments.length>2?arguments[2]:void 0,n=(u()(e)&&e||e.split(","))[0],i=o().parse(n,!0);return o().format(h(h({},i),{},{search:null,query:h(h(h({},t),i.query),(null==r?void 0:r.query)||{})}))},P=function(e){var t=e&&e.Title,r=e.LogoURL&&h(h({},f()(e,"LogoURL.$")||{}),{},{format:f()(e,"LogoURL.Format")}),n=f()(e,'OnlineResource.$["xlink:href"]');return{title:t,logo:r,imageUrl:f()(e,'LogoURL.OnlineResource.$["xlink:href"]'),link:n}},I=function e(t){var r,n,o=null!==(r=null==t?void 0:t.Layer)&&void 0!==r?r:null==t?void 0:t.layer,i=null!==(n=null==t?void 0:t.Name)&&void 0!==n?n:null==t?void 0:t.name;return o?c()(o).reduce((function(t,r){var n,o,i=null!==(n=r.Layer)&&void 0!==n?n:r.layer,u=null!==(o=r.Name)&&void 0!==o?o:r.name;return[].concat(E(t),E(e(r)),E(i&&u?[r]:[]))}),[]):i&&[t]||[]},D=function(e){var t,r,n,o,i=e.Capability;return{imageFormats:c()((null==i||null===(t=i.Request)||void 0===t||null===(r=t.GetMap)||void 0===r?void 0:r.Format)||[]).filter(m.F0),infoFormats:c()((null==i||null===(n=i.Request)||void 0===n||null===(o=n.GetFeatureInfo)||void 0===o?void 0:o.Format)||[]).filter(m.cP)}},w=function(){var e,t,r,n,o,i,a,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},f=arguments.length>1?arguments[1]:void 0,s=arguments.length>2?arguments[2]:void 0,p=arguments.length>3?arguments[3]:void 0,y=l.Capability,d=l.Service,v=(a=y).Request&&a.Request.GetMap&&a.Request.GetMap.DCPType&&a.Request.GetMap.DCPType.HTTP&&a.Request.GetMap.DCPType.HTTP.Get&&a.Request.GetMap.DCPType.HTTP.Get.OnlineResource&&a.Request.GetMap.DCPType.HTTP.Get.OnlineResource.$||void 0,b=y.Layer&&(null===(e=y.Layer.SRS||y.Layer.CRS)||void 0===e?void 0:e.map((function(e){return e.toUpperCase()})))||[],m=y.Layer&&y.Layer.Attribution&&P(y.Layer.Attribution),g=c()((null==y||null===(t=y.Request)||void 0===t||null===(r=t.GetMap)||void 0===r?void 0:r.Format)||[]),E=c()((null==y||null===(n=y.Request)||void 0===n||null===(o=n.GetFeatureInfo)||void 0===o?void 0:o.Format)||[]),O=I(y),S=(u()(O)?O:[O]).filter((function(e){return!p||-1!==e.Name.toLowerCase().indexOf(p.toLowerCase())||e.Title&&-1!==e.Title.toLowerCase().indexOf(p.toLowerCase())||e.Abstract&&-1!==e.Abstract.toLowerCase().indexOf(p.toLowerCase())}));return{numberOfRecordsMatched:S.length,numberOfRecordsReturned:Math.min(s,S.length),nextRecord:f+Math.min(s,S.length)+1,service:d,layerOptions:{version:(null==l||null===(i=l.$)||void 0===i?void 0:i.version)||T},records:S.filter((function(e,t){return t>=f-1&&t<f-1+s})).map((function(e){return h(h({},e),{},{getMapFormats:g,getFeatureInfoFormats:E,onlineResource:v,SRS:b,credits:e.Attribution?P(e.Attribution):m})}))}},F=function(e){return d().get(A(e,{service:"WMS",version:T,request:"GetCapabilities"})).then((function(e){var t;return p().parseString(e.data,{explicitArray:!1},(function(e,r){t=r})),t.WMS_Capabilities||t.WMT_MS_Capabilities||{}}))},M=function(e,t,r,n){var o=L[e];return o&&(new Date).getTime()<o.timestamp+1e3*((0,v.u8)("cacheExpire")||60)?new Promise((function(e){e(w(o.data,t,r,n))})):F(e).then((function(o){return L[e]={timestamp:(new Date).getTime(),data:o},w(o,t,r,n)}))},N=function(e,t){return d().get(A(e,{service:"WMS",version:_,layers:t,request:"DescribeLayer"})).then((function(e){var t;return p().parseString(e.data,{explicitArray:!1},(function(e,r){t=r&&r.WMS_DescribeLayerResponse&&r.WMS_DescribeLayerResponse.LayerDescription})),(t=Array.isArray(t)?t:[t]).map((function(e){return h(h({},e&&e.$||{}),{},{layerName:e&&e.$&&e.$.name,query:h({},e&&e.query&&e.query.$||{})})}))}))},j=function(e,t,r,n){return M(e,t,r,n)},C=function(e,t){for(var r=e,n=r.EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,b.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;!n&&r.Layer&&r.Layer.length;)n=(r=r.Layer[0]).EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,b.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;n||(n={westBoundLongitude:-180,southBoundLatitude:-90,eastBoundLongitude:180,northBoundLatitude:90});var o={extent:[n.westBoundLongitude||n.minx,n.southBoundLatitude||n.miny,n.eastBoundLongitude||n.maxx,n.northBoundLatitude||n.maxy],crs:"EPSG:4326"};return t?{crs:o.crs,bounds:{minx:o.extent[0],miny:o.extent[1],maxx:o.extent[2],maxy:o.extent[3]}}:o},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return F(e).then((function(e){var r=D(e),n=r.imageFormats,o=r.infoFormats;return t?{imageFormats:n,infoFormats:o}:n})).catch((function(){return t?{imageFormats:[],infoFormats:[]}:[]}))},x={},k=function(e){return(x[e]?function(){return Promise.resolve(x[e])}:function(){return d().get(e).then((function(t){var r,n;if("string"==typeof(null==t?void 0:t.data)&&t.data.includes("Exception"))throw new Error("Faild to get json legend");return x[e]=null==t||null===(r=t.data)||void 0===r?void 0:r.Legend,(null==t||null===(n=t.data)||void 0===n?void 0:n.Legend)||[]}))})().then((function(e){return e})).catch((function(e){throw e}))};const B={flatLayers:I,parseUrl:A,getDimensions:function(e){return c()(e.Dimension||e.dimension||[]).map((function(t,r){var n=e.Extent&&c()(e.Extent)[r]||e.extent&&c()(e.extent)[r];return{name:t.$.name,units:t.$.units,unitSymbol:t.$.unitSymbol,default:t.$.default||n&&n.$.default,values:t._&&t._.split(",")||n&&n._&&n._.split(",")}}))},getCapabilities:F,describeLayer:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return d().get(A(e,{service:"WMS",version:_,layers:t,request:"DescribeLayer"},r)).then((function(e){var t,r,n;p().parseString(e.data,{explicitArray:!1},(function(e,t){n=t}));var o=(null===(t=n)||void 0===t||null===(r=t.WMS_DescribeLayerResponse)||void 0===r?void 0:r.LayerDescription)&&c()(n.WMS_DescribeLayerResponse.LayerDescription)[0];return o&&h(h({},null==o?void 0:o.$),(null==o?void 0:o.Query)&&{query:c()(o.Query).map((function(e){return h({},null==e?void 0:e.$)}))})}))},getRecords:M,describeLayers:N,textSearch:j,parseLayerCapabilities:function(e,t){var r=e.Capability,n=I(r).find((function(e){var r=e.Name;return 2===t.name.split(":").length&&r&&2===r.split(":").length?t.name===r&&e:r&&2===r.split(":").length?t.name===r.split(":")[1]&&e:2===t.name.split(":").length?t.name.split(":")[1]===r&&e:t.name===r&&e}));if(n){var o=D(e),i=o.imageFormats,u=o.infoFormats;return h(h({},n),{},{layerOptions:{imageFormats:i,infoFormats:u}})}return null},getBBox:C,reset:function(){Object.keys(L).forEach((function(e){delete L[e]}))},getSupportedFormat:G}},38560:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(480681),o=r(124852),i=r.n(o),u=r(294184),a=r.n(u),c=["disabled","className","onClick"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(null,arguments)}var f=r(815135);const s=(p=n.zx,i().forwardRef((function(e,t){var r=e.disabled,n=e.className,o=e.onClick,u=void 0===o?function(){}:o,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c);return i().createElement(p,l({ref:t,className:r?a()("disabled",n):n,onClick:function(){r||u.apply(void 0,arguments)}},f),f.children)})));var p;(0,f.Z)(n.zx)},879504:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(49977),o=r.n(n),i=r(91175),u=r.n(i),a=r(53001),c=r(782904),l=r(931273),f=r(580416),s=r(675110),p=r(31935),y=r(680833),d=r(577215);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=v(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==v(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const S={accessMetadataExplorer:function(e){return e.ofType(a.xT).switchMap((function(){return o().Observable.of((0,c.Xg)("metadataexplorer","enabled",!0),(0,a.vw)(!1),(0,l.Dw)("default_map_backgrounds"))}))},addBackgroundPropertiesEpic:function(e){return e.ofType(a.oQ).switchMap((function(e){var t=e.modalParams,r=o().Observable.of((0,a.$c)(E(E({},t),{},{loading:!1})));return t.layer&&"wms"===t.layer.type?o().Observable.of((0,a.$c)(E(E({},t),{},{loading:!0}))).concat((0,y.kB)(t.layer).switchMap((function(e){return o().Observable.of((0,a.$c)(E(E({},t),{},{loading:!1,capabilities:(0,d.Br)(e)})))})).catch((function(){return r}))):r}))},setCurrentBackgroundLayerEpic:function(e,t){return e.ofType(a.Wv).switchMap((function(e){var r,n=e.layerId,i=t.getState(),u=(0,s.CA)(i,n);return(r=o().Observable).of.apply(r,b(u&&"background"===u.group?[(0,c.Xg)("backgroundSelector","tempLayer",u),(0,c.Xg)("backgroundSelector","currentLayer",u)]:[]))}))},updateTempBackgroundLayerEpic:function(e,t){return e.ofType(a.R3).take(1).switchMap((function(r){var n=r.id;return e.ofType(f.K$).switchMap((function(){var e,r=t.getState(),i=(0,s.CA)(r,n);return(0,s.DP)(r).id===i.id?(e=o().Observable).of.apply(e,b(i&&"background"===i.group?[(0,c.Xg)("backgroundSelector","tempLayer",i),(0,c.Xg)("backgroundSelector","currentLayer",i)]:[])):o().Observable.of((0,c.Xg)("backgroundSelector","tempLayer",i))}))}))},backgroundAddedEpic:function(e,t){return e.ofType(a.gC).mergeMap((function(e){var r=e.layerId,n=t.getState(),i=(0,s.CA)(n,r);return i?o().Observable.of((0,f.He)(i.id,{visibility:!0}),(0,a.ke)(i.id),(0,a.V3)()):o().Observable.empty()}))},backgroundEditedEpic:function(e,t){return e.ofType(a.dG).mergeMap((function(e){var r=e.layerId,n=t.getState();return(0,s.CA)(n,r)?o().Observable.of((0,a.V3)()):o().Observable.empty()}))},backgroundRemovedEpic:function(e,t){return e.ofType(a.H_).mergeMap((function(e){var r=e.backgroundId,n=t.getState(),i=(0,s.CA)(n,r),c=(0,p.TP)(n)||[],l=(0,s.DP)(n)||{},y=r===l.id?u()(c.filter((function(e){return e.id!==r&&!e.invalid}))):l;return i?o().Observable.of((0,f.ZF)(r,"layers"),(0,f.He)(y.id,{visibility:!0}),(0,a.ke)(y.id)):o().Observable.empty()}))},syncSelectedBackgroundEpic:function(e){return e.ofType(a.K2).take(1).switchMap((function(t){var r=t.id;return e.ofType(f.oE).filter((function(e){return e.layer.id===r})).switchMap((function(){return o().Observable.of((0,a.pW)(r))})).takeUntil(e.ofType(a.gC))}))}}},680833:(e,t,r)=>{"use strict";r.d(t,{kB:()=>g,HI:()=>E});var n=r(472500),o=r.n(n),i=(r(91175),r(490173)),u=r(49977),a=r(501157),c=r(375875),l=r.n(c),f=(r(916651),r(624262)),s=r(510284),p=r(233044),y=r(611847);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=d(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}i.default;var g=function(e){return u.Observable.defer((function(){return a.ZP.getCapabilities((0,f.Fh)(e))})).let(s.oB).map((function(t){return a.ZP.parseLayerCapabilities(t,e)}))},E=function(e){return function(e){return u.Observable.defer((function(){return l().get(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=e.search,n=void 0===r?{}:r,i=e.url,u=o().parse((0,y.eW)(n.url||i),!0);return o().format(b(b({},u),{},{search:void 0,query:b(b({},u.query),{},{service:"WMS",version:a.ID,layers:t,outputFormat:"application/json",request:"DescribeLayer"})}))}(e))})).let(s.oB)}(e).map((function(e){var t=e.data,r=void 0===t?{}:t;return r&&r.layerDescriptions[0]})).map((function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).owsURL;return b(b({},e),{},{params:{},search:t?{type:"wfs",url:(0,p.cleanAuthParamsFromURL)(t)}:void 0})}))}},55105:(e,t,r)=>{"use strict";r.d(t,{Ss:()=>d,Nr:()=>v,QJ:()=>b,ic:()=>m,Jz:()=>g,VM:()=>E,CF:()=>O,Ju:()=>S,Fc:()=>h,gQ:()=>R});var n=r(91175),o=r.n(n),i=r(288306),u=r.n(i),a=r(800827),c=r(552259),l=r(737275);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){return e.maplayout&&e.maplayout.layout||{}},v=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},b=function(e){return e.maplayout&&e.maplayout.boundingSidebarRect||{}},m=u()((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=d(e),o=b(e);return n&&Object.keys(n).filter((function(e){return t[e]})).reduce((function(e,t){var i;return p(p({},e),{},y({},t,r&&null!==(i=o[t])&&void 0!==i?i:n[t]))}),{})||{}}),(function(e,t,r){return JSON.stringify(d(e))+JSON.stringify(b(e))+JSON.stringify(t)+(r?"_isDock":"")})),g=function(e){var t;return!(null===(t=d(e))||void 0===t||!t.rightPanel)},E=function(e){var t,r=l.ZP.getConfigProp("mapLayout")||c.Ur;return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=d(e);return!!o()(t.filter((function(e){return r[e.key]})).map((function(e){return"not"===e.type?r[e.key]!==e.value&&r[e.key]:r[e.key]===e.value})))}(e,[{key:"bottom",value:null!==(t=null==r?void 0:r.bottom.sm)&&void 0!==t?t:0,type:"not"}])},O=function(e){var t=(0,a.Od)(e),r=v(e);return r&&t&&t.size&&{left:(0,c.pb)(r.left,t.size.width),bottom:(0,c.pb)(r.bottom,t.size.height),right:(0,c.pb)(r.right,t.size.width),top:(0,c.pb)(r.top,t.size.height)}},S=function(e){var t,r;return null!==(t=null==e||null===(r=e.maplayout)||void 0===r?void 0:r.dockPanels)&&void 0!==t?t:{left:[],right:[]}},h=function(e){return m(e,{height:!0,right:!0},!0)},R=function(e){return m(e,{right:!0},!0)}}}]);