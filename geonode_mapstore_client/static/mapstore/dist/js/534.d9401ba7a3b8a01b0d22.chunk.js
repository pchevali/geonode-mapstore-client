(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[534],{313647:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(892322),o=r(640271);const i=function(e){if(!e)throw new Error("geojson is required");var t=[];return(0,n.nG)(e,(function(e){t.push(e)})),(0,o.uf)(t)}},145959:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(986069),o=r(782904),i=r(513218),a=r.n(i),l=r(227361),u=r.n(l),c=r(727418),s=r.n(c),f=r(436968),p=r.n(f);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=y(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b={antiAliasing:!0,iconsWidth:24,iconsHeight:24,legendDpi:96,fontFamily:"Verdana",fontSize:8,bold:!1,italic:!1,resolution:96,name:"",description:"",outputFormat:"pdf",rotation:0},v=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("_")[0]};const h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{spec:b,capabilities:null,map:null,isLoading:!1,pdfUrl:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.kM:return"print"===t.control?s()({},e,{pdfUrl:null,isLoading:!1,error:null}):e;case n.qp:var r=u()(t,"capabilities.layouts",[{name:"A4"}]),i=r.filter((function(t){return v(t.name)===e.spec.sheet})).length?e.spec.sheet:v(r[0].name);return s()({},e,{capabilities:t.capabilities,spec:s()({},e.spec||{},{sheet:i,resolution:t.capabilities&&t.capabilities.dpis&&t.capabilities.dpis.length&&t.capabilities.dpis[0].value})});case n.U6:return d(d({},e),{},{spec:p()(d({},e.spec),t.name,t.value)});case n.rd:return u()(e.spec,t.name)?e:d(d({},e),{},{spec:p()(d({},e.spec),t.name,t.value)});case n.PB:var l,c,f=t.layers.map((function(e){return e.title?s()({},e,{title:a()(e.title)&&t.currentLocale&&e.title[t.currentLocale]||a()(e.title)&&e.title.default||e.title}):e}));return s()({},e,{map:{center:t.center,zoom:t.zoom,scaleZoom:t.scaleZoom,scale:t.scale,layers:f,size:null!==(l=t.size)&&void 0!==l?l:null===(c=e.map)||void 0===c?void 0:c.size,projection:t.projection},error:null});case n.HA:var y=t.zoom-e.map.scaleZoom;return s()({},e,{map:s()({},e.map,{scaleZoom:t.zoom,zoom:e.map.zoom+y,scale:t.scale})});case n.Yk:return s()({},e,{map:s()({},e.map,{size:t.size})});case n.Fp:return s()({},e,{isLoading:!0,pdfUrl:null,error:null});case n.EZ:return s()({},e,{isLoading:!1,pdfUrl:t.url,error:null});case n.WB:case n.aN:return s()({},e,{isLoading:!1,pdfUrl:null,error:t.error});case n.qH:return s()({},e,{isLoading:!1,pdfUrl:null,error:null});default:return e}}},38842:(e,t,r)=>{"use strict";r.d(t,{wk:()=>f,Yf:()=>p,c3:()=>y,fY:()=>m});var n=r(218721),o=r.n(n),i=r(227361),a=r.n(i),l=r(313311),u=r.n(l),c=r(22222),s=r(308316),f=function(e){return o()(e,"localConfig.localizedLayerStyles")},p=function(e){var t=a()(e,"localConfig.plugins.dashboard",[]),r=u()(t,(function(e){return"DashboardEditor"===e.name}))||{};return a()(r,"cfg.catalog.localizedLayerStyles",!1)},y=function(e){return a()(e,"localConfig.localizedLayerStyles.name","mapstore_language")},m=(0,c.P1)(f,y,s.KV,(function(e,t,r){var n=[];return e&&n.push({name:t,value:r}),n}))},650148:(e,t,r)=>{"use strict";r.d(t,{DX:()=>i,p6:()=>a,LI:()=>l});var n=r(727418),o=r.n(n),i=function(e){return e.print&&e.print.spec&&o()({},e.print.spec,e.print.map||{})},a=function(e){return e.print&&e.print.capabilities&&e.print.capabilities.layouts.filter((function(t){return 0===t.name.indexOf(e.print.spec.sheet)}))||[]},l=function(e){return e.print&&e.print.spec&&e.print.spec.includeLegend}},699573:(e,t,r)=>{"use strict";r.r(t),r.d(t,{DEFAULT_PRINT_RATIO:()=>nt,addMapTransformer:()=>et,addTransformer:()=>Qe,addValidator:()=>tt,getDefaultPrintingService:()=>rt,getGeomType:()=>Ce,getLayoutName:()=>Me,getLegendIconsSize:()=>at,getMapSize:()=>Ie,getMapTransformerChain:()=>$e,getMapZoom:()=>De,getMapfishLayersSpecification:()=>lt,getMapfishPrintSpecification:()=>Ge,getNearestZoom:()=>We,getOlDefaultStyle:()=>mt,getOpacity:()=>Ee,getPrintScales:()=>Re,getPrintVendorParams:()=>it,getResolutionMultiplier:()=>ot,getSpecTransformerChain:()=>Je,getValidatorsChain:()=>Be,getWMTSMatrixIds:()=>ct,localizationFilter:()=>Ne,mapProjectionSelector:()=>Ue,normalizeUrl:()=>Ae,preloadData:()=>Te,resetDefaultPrintingService:()=>Ke,rgbaTorgb:()=>st,specCreators:()=>ut,toAbsoluteURL:()=>ze,toMapfish:()=>Ze,toOpenLayers2Style:()=>yt,toOpenLayers2TextStyle:()=>pt,wfsPreloaderFilter:()=>_e});var n=r(916651),o=r(233044),i=r(552259),a=r(143378),l=r(443143),u=r(45992),c=r(218056),s=r(707294),f=r(993201),p=r(218672),y=r(701469),m=r.n(y),d=r(763105),g=r.n(d),b=r(313311),v=r.n(b),h=r(441609),S=r.n(h),O=r(14841),P=r.n(O),L=r(984596),j=r.n(L),w=r(531351),F=r.n(w),x=r(432420),k=r(253231),C=r(624262),E=r(385564),T=r.n(E),z=r(313647),A=r(830049),M=r(507122),R=r(620388);function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_(n.key),n)}}function I(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return(t=_(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){var t=function(e,t){if("object"!=W(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=W(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==W(t)?t:t+""}function Z(e,t){if(e){if("string"==typeof e)return Y(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(e,t):void 0}}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var X=M.v.geojson(),V=function(e){switch(e){case"top-left":return"lt";case"top":return"ct";case"top-right":return"rt";case"left":return"lm";case"center":default:return"cm";case"right":return"rm";case"bottom-left":return"lb";case"bottom":return"cb";case"bottom-right":return"rb"}},q=function(e,t,r,n){var o,i,a,l,u,c,s,f,p=void 0===r.opacity?1:r.opacity;if("Mark"===e.kind){var y=(0,A.kf)(e),m=y.width,d=y.height;return{graphicWidth:m,graphicHeight:d,externalGraphic:y.canvas.toDataURL(),graphicXOffset:-m/2,graphicYOffset:-d/2,rotation:e.rotate||0,graphicOpacity:p}}if("Icon"===e.kind){var g=(0,A.ok)(n),b=g.width,v=void 0===b?e.size:b,h=g.height,S=void 0===h?e.size:h,O=v/S,P=e.size,L=P/O;S>v&&(P=(L=e.size)*O);var j=function(e,t,r){switch(e){case"top-left":return[0,0];case"top":return[-t/2,0];case"top-right":return[-t,0];case"left":return[0,-r/2];case"center":default:return[-t/2,-r/2];case"right":return[-t,-r/2];case"bottom-left":return[0,-r];case"bottom":return[-t/2,-r];case"bottom-right":return[-t,-r]}}(e.anchor,P,L),w=(f=2,function(e){if(Array.isArray(e))return e}(s=j)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(s,f)||Z(s,f)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),F=w[0],x=w[1];return{graphicWidth:P,graphicHeight:L,externalGraphic:e.image,graphicXOffset:F,graphicYOffset:x,rotation:e.rotate||0,graphicOpacity:e.opacity*p}}return"Text"===e.kind?{fontSize:e.size,fontFamily:(e.font||["TIMES_ROMAN"])[0],fontWeight:e.fontWeight,labelAlign:V(e.anchor),labelXOffset:(null==e||null===(o=e.offset)||void 0===o?void 0:o[0])||0,labelYOffset:-((null==e||null===(i=e.offset)||void 0===i?void 0:i[1])||0),rotation:-(e.rotate||0),fontColor:e.color,fontOpacity:1*p,label:(0,A.xV)(t,e.label,""),fillOpacity:0,pointRadius:0,strokeOpacity:0,strokeWidth:0}:"Line"===e.kind?G({strokeColor:e.color,strokeOpacity:e.opacity*p,strokeWidth:e.width},e.dasharray&&{strokeDashstyle:e.dasharray.join(" ")}):"Fill"===e.kind?G(G({strokeColor:e.outlineColor,strokeOpacity:(null!==(a=e.outlineOpacity)&&void 0!==a?a:0)*p,strokeWidth:null!==(l=e.outlineWidth)&&void 0!==l?l:0},e.outlineDasharray&&{strokeDashstyle:e.outlineDasharray.join(" ")}),{},{fillColor:e.color,fillOpacity:e.fillOpacity*p}):"Circle"===e.kind?G(G({strokeColor:e.outlineColor,strokeOpacity:(null!==(u=e.outlineOpacity)&&void 0!==u?u:0)*p,strokeWidth:null!==(c=e.outlineWidth)&&void 0!==c?c:0},e.outlineDasharray&&{strokeDashstyle:e.outlineDasharray.join(" ")}),{},{fillColor:e.color,fillOpacity:e.opacity*p}):{display:"none"}},H=function(e){return function(t){var r=t.layer,n=t.spec,o=void 0===n?{projection:"EPSG:3857"}:n;if(null==r||!r.features)return[];var i=(0,z.Z)({type:"FeatureCollection",features:r.features});return T()(i.features.map((function(t){var n,i=null==e||null===(n=e.rules)||void 0===n?void 0:n.filter((function(e){return!e.filter||(0,A.NG)(t,e.filter)}));if(i.length>0){var a=t.geometry.type,l=i.reduce((function(e,t){return[].concat(I(e),I(null==t?void 0:t.symbolizers))}),[]),u=l.filter((function(e){return["Mark","Icon","Text","Model"].includes(e.kind)&&["Point"].includes(a)})),c=l.filter((function(e){return"Line"===e.kind&&["LineString"].includes(a)})),s=l.filter((function(e){return"Fill"===e.kind&&["Polygon"].includes(a)})),f=l.filter((function(e){return"Circle"===e.kind&&["Point"].includes(a)})),p=l.filter((function(e,t){return["Mark","Icon","Text","Model"].includes(e.kind)&&(["Polygon"].includes(a)||["LineString"].includes(a)||["Point"].includes(a)&&(0!==f.length||t<u.length-1))})),y=f[f.length-1]||u[u.length-1]||c[c.length-1]||s[s.length-1],m=(0,A.mL)(y,t),d=t.geometry,g=X(m);return!g||"LineString"!==a&&"Polygon"!==a||(d={type:a,coordinates:g(t)}),"Point"===a&&f.length&&(d=(0,R.L)(t.geometry.coordinates,m.radius,m.geodesic,{projection:o.projection})),[G(G({},t),{},{geometry:d,properties:G(G({},null==t?void 0:t.properties),{},{ms_style:q(m,t,r,y)})})].concat(I(p.map((function(e){var n=(0,A.mL)(e,t),o=X(G({msGeometry:{name:"centerPoint"}},n));if(o){var i=o(t);if(i)return G(G({},t),{},{geometry:{type:"Point",coordinates:i},properties:G(G({},null==t?void 0:t.properties),{},{ms_style:q(n,t,r,e)})})}return null})).filter((function(e){return!!e}))))}return[]})))}};const J=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},(t=[{key:"readStyle",value:function(){return new Promise((function(e,t){try{e(null)}catch(e){t(e)}}))}},{key:"writeStyle",value:function(e,t){return t?H(e):new Promise((function(t,r){try{t((function(t){return(0,A.vg)(e).then((function(){return H(e)(t)}))}))}catch(e){r(e)}}))}}])&&D(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();var $=r(472500),B=r.n($),K=r(876825),Q=r(38842),ee=r(308316),te=r(650148),re=r(727418),ne=r.n(re),oe=r(189734),ie=r.n(oe),ae=r(91175),le=r.n(ae),ue=r(414293),ce=r.n(ue),se=r(227361),fe=r.n(se),pe=r(253632),ye=r.n(pe),me=r(710691),de=r.n(me),ge=r(984023),be=r(33935),ve=["params"];function he(e){return he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},he(e)}function Se(e){return function(e){if(Array.isArray(e))return Pe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Oe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Oe(e,t){if(e){if("string"==typeof e)return Pe(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Pe(e,t):void 0}}function Pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(r),!0).forEach((function(t){we(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function we(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=he(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=he(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==he(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Fe,xe=(0,i.Z5)(0,21),ke=new J,Ce=function(e){return e.features&&e.features[0]&&e.features[0].geometry?e.features[0].geometry.type:e.features&&e.features[0].features&&e.features[0].style&&e.features[0].style.type?e.features[0].style.type:void 0},Ee=function(e){return e.opacity||(0===e.opacity?0:1)},Te=function(e){var t=g()(e.layers,{type:"wfs"});return t.length>0?Promise.all(t.map((function(t){return(0,x.Bm)(t.url,t.name,je({outputFormat:"application/json",srsName:e.projection},(0,a.v)(t)||{})).then((function(e){var r=e.data;return{id:t.id,geoJson:r}}))}))).then((function(t){return je(je({},e),{},{layers:(e.layers||[]).map((function(e){var r=v()(t,{id:e.id});return"wfs"===e.type&&r?je(je({},e),r):e}))})})):Promise.resolve(e)},ze=function(e,t){return-1!==e.search(/^\/\//)?window.location.protocol+e:-1!==e.search(/:\/\//)?e:-1!==e.search(/^\//)?(t||window.location.origin)+e:e},Ae=function(e){var t=m()(e)?e[0]:e;return-1!==t.indexOf("?")&&(t=t.substring(0,t.indexOf("?"))),Fe.toAbsoluteURL(t)},Me=function(e){var t=[e.sheet];return e.includeLegend?e.twoPages&&t.push("2_pages_legend"):t.push("no_legend"),e.landscape&&t.push("landscape"),t.join("_")},Re=function(e){return e.scales.slice(0).reverse().map((function(e){return parseFloat(e.value)}))||[]},We=function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:xe)[Math.round(e)];return t.reduce((function(e,t,n){return t<r?e:n}),0)},De=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:xe,n=t[Math.round(e)];return r.reduce((function(e,t,r){return t<n?e:r}),0)+1},Ie=function(e,t){if(e){var r=e.rotation?e.map.height:e.map.width;return{width:t,height:(e.rotation?e.map.width:e.map.height)/r*t}}return{width:100,height:100}},Ue=function(e){var t,r,n;return null!==(t=null==e||null===(r=e.print)||void 0===r||null===(n=r.map)||void 0===n?void 0:n.projection)&&void 0!==t?t:"EPSG:3857"},Ge=function(e,t){var r=e.params,o=je(je({},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,ve)),r),a=Ue(t),l=(0,n.reproject)(o.center,"EPSG:4326",o.projection),u=Math.round((0,i.CT)(o.scaleZoom,a,o.projection)),c=(o.scales||(0,i.yu)(o.projection))[u]||xe[u],s=je(je({},o),{},{center:l,scaleZoom:u});return je({units:(0,n.getUnits)(o.projection),srs:(0,n.normalizeSRS)(o.projection||"EPSG:3857"),layout:Fe.getLayoutName(s),dpi:parseInt(o.resolution,10),outputFilename:"mapstore-print",geodetic:!1,mapTitle:o.name||"",comment:o.description||"",layers:Fe.getMapfishLayersSpecification(o.layers,s,t,"map"),pages:[{center:[l.x,l.y],scale:c,rotation:ce()(o.rotation)?0:-Number(o.rotation)}],legends:Fe.getMapfishLayersSpecification(o.layers,s,t,"legend")},r)},Ne=function(e,t){var r=(0,Q.wk)(e),n=(0,Q.fY)(e),o=r?je(je({},t),{},{env:n,currentLanguage:(0,ee.KV)(e)}):t;return Promise.resolve(o)},_e=function(e,t){return Te(t)},Ze=function(e,t){return Promise.resolve(Ge(t,e))},Ye=[{name:"localization",transformer:Ne},{name:"wfspreloader",transformer:_e},{name:"mapfishSpecCreator",transformer:Ze}],Xe=[],Ve=[],qe=[];function He(e,t){return t.reduce((function(e,t){return-1===e.findIndex((function(e){return e.name===t.name}))?[].concat(Se(e),[t]):e.map((function(e){return e.name===t.name?t:e}))}),e)}function Je(){var e=Ye.length;return ie()(He(Ye.map((function(e,t){return je(je({},e),{},{position:t})})),Xe.map((function(t,r){var n;return je(je({},t),{},{position:null!==(n=t.position)&&void 0!==n?n:r+e})}))),["position"])}function $e(){return Ve}function Be(){return qe}function Ke(){Xe=[],Ve=[],qe=[]}function Qe(e,t,r){Xe=He(Xe,[{name:e,transformer:t,position:r}])}function et(e,t){Ve=He(Ve,[{name:e,transformer:t}])}function tt(e,t,r){qe=[{id:e,name:t,validator:r}].reduce((function(e,t){return-1===e.findIndex((function(e){return e.id===t.id}))?[].concat(Se(e),[t]):e.map((function(e){return e.id===t.id?t:e}))}),qe)}var rt=function(){return{print:function(e){var t=(0,K.bh)().getState(),r=(0,te.DX)(t),n=e?je(je({},r),e):r;return Je().map((function(e){return e.transformer})).reduce((function(e,r){return e.then((function(e){return r(t,e)}))}),Promise.resolve(n))},validate:function(){var e=(0,K.bh)().getState();return Be().reduce((function(t,r){var n,o=null!==(n=t[r.name])&&void 0!==n?n:{valid:!0,errors:[]},i=r.validator(e,o);return je(je({},t),{},we({},r.name,{valid:o.valid&&i.valid,errors:[].concat(Se(o.errors),Se(i.errors||[]))}))}),{})},getMapConfiguration:function(){var e,t=(0,K.bh)().getState();return $e().map((function(e){return e.transformer})).reduce((function(e,r){return r(t,e)}),(null==t||null===(e=t.print)||void 0===e?void 0:e.map)||{})}}},nt=96/72;function ot(e,t){return e/t*(arguments.length>2&&void 0!==arguments[2]?arguments[2]:nt)}var it=function(e){return(null==e?void 0:e.serverType)===C.z$.NO_VENDOR?{}:{TILED:!0}},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.forceIconsSize||"background"===t.group,n=r?e.iconsWidth:fe()(t,"legendOptions.legendWidth",12),o=r?e.iconsHeight:fe()(t,"legendOptions.legendHeight",12);return{width:n,height:o,minSymbolSize:ye()([n,o])}},lt=function(e,t,r,n){return e.filter((function(e){return Fe.specCreators[e.type]&&Fe.specCreators[e.type][n]})).map((function(e){return Fe.specCreators[e.type][n](e,t,r)}))},ut={wms:{map:function(e,t){return{baseURL:Fe.normalizeUrl(e.url)+"?",opacity:Ee(e),singleTile:!1,type:"WMS",layers:[e.name],format:e.format||"image/png",styles:[e.style||""],customParams:(0,o.addAuthenticationParameter)(Fe.normalizeUrl(e.url),ne()(je(je({TRANSPARENT:!0},it(e)),{},{EXCEPTIONS:"application/vnd.ogc.se_inimage",scaleMethod:"accurate",ENV:(0,k.h)(t.env)}),e.baseParams||{},e.params||{},je({},(0,a.v)({layerFilter:e.layerFilter,filterObj:e.filterObj}))))}},legend:function(e,t){return{name:e.title||e.name,classes:[{name:"",icons:[Fe.normalizeUrl(e.url)+B().format({query:(0,o.addAuthenticationParameter)(Fe.normalizeUrl(e.url),je(je(je({TRANSPARENT:!0,EXCEPTIONS:"application/vnd.ogc.se_xml",VERSION:"1.1.1",SERVICE:"WMS",REQUEST:"GetLegendGraphic",LAYER:e.name,STYLE:e.style||"",SCALE:t.scale},at(t,e)),{},{LEGEND_OPTIONS:"forceLabels:"+(t.forceLabels?"on":"")+";fontAntialiasing:"+t.antiAliasing+";dpi:"+t.legendDpi+";fontStyle:"+((t.bold?"bold":t.italic&&"italic")||"")+";fontName:"+t.fontFamily+";fontSize:"+t.fontSize,format:"image/png"},t.language?{LANGUAGE:t.language}:{}),null==e?void 0:e.params))})]}]}}},vector:{map:function(e,t){var r,o;return{type:"Vector",name:e.name,opacity:Ee(e),styleProperty:"ms_style",styles:{1:Fe.toOpenLayers2Style(e,e.style),Polygon:Fe.toOpenLayers2Style(e,e.style,"Polygon"),LineString:Fe.toOpenLayers2Style(e,e.style,"LineString"),Point:Fe.toOpenLayers2Style(e,e.style,"Point"),FeatureCollection:Fe.toOpenLayers2Style(e,e.style,"FeatureCollection")},geoJson:(0,n.reprojectGeoJson)({type:"FeatureCollection",features:"geostyler"===(null==e||null===(r=e.style)||void 0===r?void 0:r.format)&&null!=e&&null!==(o=e.style)&&void 0!==o&&o.body?ke.writeStyle(e.style.body,!0)({layer:e,spec:t}):e.features.map((function(e){return je(je({},e),{},{properties:je(je({},e.properties),{},{ms_style:e&&e.geometry&&e.geometry.type&&e.geometry.type.replace("Multi","")||1})})}))},"EPSG:4326",t.projection)}}},graticule:{map:function(e,t,r){var n,o,a,l,u,c=le()(null==r||null===(n=r.print)||void 0===n?void 0:n.capabilities.layouts.filter((function(e){return e.name===Me(t)}))),s=null!==(o=ot(null==c||null===(a=c.map)||void 0===a?void 0:a.width,null!==(l=null===(u=t.size)||void 0===u?void 0:u.width)&&void 0!==l?l:370))&&void 0!==o?o:1,f=(0,i.E_)(t.projection).map((function(e){return e*s})),p=f[t.scaleZoom];return{type:"Vector",name:e.name||"graticule",opacity:Ee(e),styleProperty:"ms_style",styles:{lines:Fe.toOpenLayers2Style(e,e.style,"GraticuleLines"),xlabels:Fe.toOpenLayers2TextStyle(e,e.labelXStyle,"GraticuleXLabels"),ylabels:Fe.toOpenLayers2TextStyle(e,e.labelYStyle,"GraticuleYLabels"),frame:Fe.toOpenLayers2Style(e,e.frameStyle,"GraticuleFrame")},geoJson:(0,ge.XA)({resolutions:f,mapProjection:t.projection,gridProjection:e.srs||t.projection,extent:(0,i.cr)(t.center,p,t.size,t.projection),zoom:t.scaleZoom,withLabels:!0,xLabelFormatter:e.xLabelFormatter,yLabelFormatter:e.yLabelFormatter,xLabelStyle:Fe.toOpenLayers2TextStyle(e,e.labelXStyle,"GraticuleXLabels"),yLabelStyle:Fe.toOpenLayers2TextStyle(e,e.labelYStyle,"GraticuleYLabels"),frameSize:e.frameRatio})}}},wfs:{map:function(e){var t,r;return{type:"Vector",name:e.name,opacity:Ee(e),styleProperty:"ms_style",styles:{1:Fe.toOpenLayers2Style(e,e.style),Polygon:Fe.toOpenLayers2Style(e,e.style,"Polygon"),LineString:Fe.toOpenLayers2Style(e,e.style,"LineString"),Point:Fe.toOpenLayers2Style(e,e.style,"Point"),FeatureCollection:Fe.toOpenLayers2Style(e,e.style,"FeatureCollection")},geoJson:e.geoJson&&{type:"FeatureCollection",features:"geostyler"===(null==e||null===(t=e.style)||void 0===t?void 0:t.format)&&null!=e&&null!==(r=e.style)&&void 0!==r&&r.body?ke.writeStyle(e.style.body,!0)({layer:je(je({},e),{},{features:e.geoJson.features})}):e.geoJson.features.map((function(e){return je(je({},e),{},{properties:je(je({},e.properties),{},{ms_style:e&&e.geometry&&e.geometry.type&&e.geometry.type.replace("Multi","")||1})})}))}}}},osm:{map:function(){return{baseURL:"http://a.tile.openstreetmap.org/",opacity:Ee(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),singleTile:!1,type:"OSM",maxExtent:[-20037508.3392,-20037508.3392,20037508.3392,20037508.3392],tileSize:[256,256],extension:"png",resolutions:[156543.03390625,78271.516953125,39135.7584765625,19567.87923828125,9783.939619140625,4891.9698095703125,2445.9849047851562,1222.9924523925781,611.4962261962891,305.74811309814453,152.87405654907226,76.43702827453613,38.218514137268066,19.109257068634033,9.554628534317017,4.777314267158508,2.388657133579254,1.194328566789627,.5971642833948135]}}},mapquest:{map:function(){return{baseURL:"http://otile1.mqcdn.com/tiles/1.0.0/map/",opacity:Ee(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),singleTile:!1,type:"OSM",maxExtent:[-20037508.3392,-20037508.3392,20037508.3392,20037508.3392],tileSize:[256,256],extension:"png",resolutions:[156543.03390625,78271.516953125,39135.7584765625,19567.87923828125,9783.939619140625,4891.9698095703125,2445.9849047851562,1222.9924523925781,611.4962261962891,305.74811309814453,152.87405654907226,76.43702827453613,38.218514137268066,19.109257068634033,9.554628534317017,4.777314267158508,2.388657133579254,1.194328566789627,.5971642833948135]}}},wmts:{map:function(e,t){var r=t.projection,n=(0,s.h7)(e,r),i=n.tileMatrixSet,a=n.tileMatrixSetName;if(!i)throw Error("tile matrix not found for pdf EPSG"+r);var l=Fe.getWMTSMatrixIds(e,i),u=Fe.normalizeUrl(j()(e.url)[0]),c={};return u.indexOf("{Style}")>=0&&(c={dimensions:["Style"],params:{STYLE:e.style}}),je(je({baseURL:encodeURI(u),format:e.format||"image/png",type:"WMTS",layer:e.name,"customParams ":(0,o.addAuthenticationParameter)(e.capabilitiesURL,ne()({TRANSPARENT:!0}))},c),{},{matrixIds:l,matrixSet:a,style:e.style,name:e.name,requestEncoding:"RESTful"===e.requestEncoding?"REST":e.requestEncoding||"KVP",opacity:Ee(e),version:e.version||"1.0.0"})}},tileprovider:{map:function(e){var t,r,n=(t=(0,u.h)(e.provider,e),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(t,r)||Oe(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];if(!S()(i)){var a,l=(0,c.ut)(je(je({},i),{},{url:null!==(a=null==i?void 0:i.url)&&void 0!==a?a:o}));if(!l)throw Error("No base URL found for this layer");var s=l.indexOf("?"),f=l.indexOf("{"),p=l.slice(0,f),y=s<0?l.slice(f):l.slice(f,s);return{baseURL:p,path_format:y.replace("{x}","${x}").replace("{y}","${y}").replace("{z}","${z}"),type:"xyz",extension:y.split(".").pop()||"png",opacity:Ee(e),tileSize:[256,256],maxExtent:[-20037508.3392,-20037508.3392,20037508.3392,20037508.3392],resolutions:[156543.03390625,78271.516953125,39135.7584765625,19567.87923828125,9783.939619140625,4891.9698095703125,2445.9849047851562,1222.9924523925781,611.4962261962891,305.74811309814453,152.87405654907226,76.43702827453613,38.218514137268066,19.109257068634033,9.554628534317017,4.777314267158508,2.388657133579254,1.194328566789627,.5971642833948135].filter((function(e,t){var r=!0;return i.maxNativeZoom&&(r=r&&t<=i.maxNativeZoom),r})),customParams:Object.fromEntries(new URL(l).searchParams)}}return{}}},tms:{map:function(e){var t=e.tileMapUrl.split(e.tileMapService+"/")[1];return{type:"tms",opacity:Ee(e),layer:t,baseURL:e.tileMapService.substring(0,e.tileMapService.lastIndexOf("/1.0.0")),tileSize:e.tileSize,format:(0,f.A)(e.tileMapUrl),maxExtent:[-20037508.3392,-20037508.3392,20037508.3392,20037508.3392],resolutions:e.tileSets.map((function(e){return e.resolution}))}}},arcgis:{map:function(e,t,r){var n,o,a,l,u,c,s,f,p,y=le()(null==r||null===(n=r.print)||void 0===n?void 0:n.capabilities.layouts.filter((function(e){return e.name===Me(t)}))),m=null!==(o=ot(null==y||null===(a=y.map)||void 0===a?void 0:a.width,null!==(l=null===(u=t.size)||void 0===u?void 0:u.width)&&void 0!==l?l:370))&&void 0!==o?o:1,d=(0,i.E_)(t.projection).map((function(e){return e*m}))[t.scaleZoom],g=(0,i.cr)(t.center,d,t.size,t.projection),b=t.projection.replace("EPSG:","").replace("900913","3857");return{type:"Image",opacity:null!==(c=e.opacity)&&void 0!==c?c:1,name:null!==(s=e.name)&&void 0!==s?s:-1,baseURL:B().format(je(je({},B().parse("".concat(de()(e.url,"/"),"/").concat((0,be.f$)(e.url)?"exportImage":"export"))),{},{query:je(je({F:"image"},void 0!==e.name&&{LAYERS:"show:".concat(e.name)}),{},{FORMAT:e.format||"PNG32",TRANSPARENT:!0,SIZE:"".concat(null==y||null===(f=y.map)||void 0===f?void 0:f.width,",").concat(null==y||null===(p=y.map)||void 0===p?void 0:p.height),bbox:g.join(","),BBOXSR:b,IMAGESR:b,DPI:90})})),extent:g}}}},ct=function(e,t){var r=[],o=(0,n.normalizeSRS)(e.srs||"EPSG:3857",e.allowedSRS),i=(0,p.U2)(o).getMetersPerUnit();return t&&t.TileMatrix.map((function(e){var t=e["ows:Identifier"],n=28e-5*e.ScaleDenominator/i,o=[P()(e.TileWidth),P()(e.TileHeight)],a=e.TopLeftCorner&&e.TopLeftCorner.split(" ").map((function(e){return P()(e)})),l=[P()(e.MatrixWidth),P()(e.MatrixHeight)];return r.push({identifier:t,matrixSize:l,resolution:n,tileSize:o,topLeftCorner:a})})),r},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return-1!==e.indexOf("rgba")?"rgb".concat(e.slice(e.indexOf("("),e.lastIndexOf(",")),")"):e};function ft(e,t){return["start"===e?"l":"end"===e?"r":"c","top"===t?"t":"bottom"===t?"b":"m"].join("")}var pt=function(e,t,r){if(!t)return Fe.getOlDefaultStyle(e,r);switch(r){case"GraticuleXLabels":return{fontColor:t.color||"#000000",fontFamily:t.font||"12px Calibri,sans-serif",fontWeight:t.fontWeight||"bold",fontSize:t.fontSize||"14",label:"{properties.valueText}",labelAlign:ft(t.textAlign||"center",t.verticalAlign||"bottom"),labelOutlineColor:t.labelOutlineColor||"#FFFFFF",labelOutlineWidth:t.labelOutlineWidth/4||.5,rotation:t.rotation?-t.rotation:0};case"GraticuleYLabels":return{fontColor:t.color||"#000000",fontFamily:t.font||"12px Calibri,sans-serif",fontWeight:t.fontWeight||"bold",fontSize:t.fontSize||"14",label:"{properties.valueText}",labelAlign:ft(t.textAlign||"end",t.verticalAlign||"middle"),labelOutlineColor:t.labelOutlineColor||"#FFFFFF",labelOutlineWidth:t.labelOutlineWidth/4||.5,rotation:t.rotation?-t.rotation:0};default:return{fontColor:"#000000",fontFamily:"12px Calibri,sans-serif",fontWeight:"bold",fontSize:"14",label:"{properties.valueText}",labelAlign:"cb",labelOutlineColor:"#FFFFFF",labelOutlineWidth:.5}}},yt=function(e,t,r){return t&&"marker"!==e.styleName?{fillColor:(0,l.qj)(t.fillColor),fillOpacity:t.fillOpacity,externalGraphic:t.iconUrl,pointRadius:t.radius,strokeColor:(0,l.qj)(t.color),strokeOpacity:t.opacity,strokeWidth:t.weight,strokeDashstyle:t.lineDash?F()(t.lineDash).join(" "):void 0}:Fe.getOlDefaultStyle(e,r)},mt=function(e,t){switch(t||Ce(e)||""){case"Polygon":case"MultiPolygon":return{fillColor:"#0000FF",fillOpacity:.1,strokeColor:"#0000FF",strokeOpacity:1,strokeWidth:3,strokeDashstyle:"dash",strokeLinecap:"round"};case"MultiLineString":case"LineString":return{strokeColor:"#0000FF",strokeOpacity:1,strokeWidth:3};case"Point":case"MultiPoint":return"marker"===e.styleName?{externalGraphic:"http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images/marker-icon.png",graphicWidth:25,graphicHeight:41,graphicXOffset:-12,graphicYOffset:-41}:{fillColor:"#FF0000",fillOpacity:0,strokeColor:"#FF0000",pointRadius:5,strokeOpacity:1,strokeWidth:1};case"GraticuleLines":return{strokeColor:"#ff7800",strokeOpacity:.9,strokeWidth:2,strokeDashstyle:"4 0.5"};case"GraticuleFrame":return{strokeColor:"#000000",strokeOpacity:1,strokeWidth:1,fillColor:"#FFFFFF",fillOpacity:1};case"GraticuleXLabels":return{fontColor:"#000000",fontFamily:"12px Calibri,sans-serif",fontWeight:"bold",fontSize:"14",label:"{properties.valueText}",labelAlign:"cb",labelOutlineColor:"#FFFFFF",labelOutlineWidth:.5};case"GraticuleYLabels":return{fontColor:"#000000",fontFamily:"12px Calibri,sans-serif",fontWeight:"bold",fontSize:"14",label:"{properties.valueText}",labelAlign:"rm",labelOutlineColor:"#FFFFFF",labelOutlineWidth:.5};default:return{fillColor:"#0000FF",fillOpacity:.1,strokeColor:"#0000FF",pointRadius:5,strokeOpacity:1,strokeWidth:1}}};Fe={toAbsoluteURL:ze,getLayoutName:Me,getMapfishLayersSpecification:lt,specCreators:ut,normalizeUrl:Ae,toOpenLayers2Style:yt,toOpenLayers2TextStyle:pt,getWMTSMatrixIds:ct,getOlDefaultStyle:mt}},993201:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(264721),o=r.n(n),i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("?")[0].split("@");if(e.length>1){var t=e[e.length-1];if(o()(["png","png8","jpeg","vnd.jpeg-png","gif"],t))return t}return null}},253632:(e,t,r)=>{var n=r(456029),o=r(170433),i=r(406557);e.exports=function(e){return e&&e.length?n(e,i,o):void 0}},531351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}}}]);