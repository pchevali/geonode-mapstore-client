(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[63564],{134990:(t,e,r)=>{"use strict";r.d(e,{D7:()=>a,mN:()=>s,vb:()=>l,KT:()=>d,QK:()=>O,cc:()=>p,Gx:()=>S,XH:()=>y,lX:()=>E,tP:()=>f,Dq:()=>v,LE:()=>T,SW:()=>m,si:()=>R,i2:()=>g,IY:()=>G,Zf:()=>b,ij:()=>h,Hb:()=>Y,Mk:()=>_,c:()=>I,NZ:()=>C,Cx:()=>A,wb:()=>D,km:()=>P,un:()=>w,Ro:()=>L,jr:()=>N,ZY:()=>j,EQ:()=>U,W$:()=>k,mk:()=>M,U3:()=>V,aF:()=>W,IH:()=>Z,rp:()=>q,D_:()=>x,zJ:()=>z,wJ:()=>F,OS:()=>B,YP:()=>K,Ct:()=>H,Od:()=>X,y6:()=>Q,g5:()=>$,_e:()=>J,DF:()=>tt,GD:()=>et,K0:()=>rt,kB:()=>nt,Xn:()=>ot,G5:()=>ct,Vx:()=>it,RZ:()=>ut,pB:()=>at,$A:()=>st,m7:()=>lt,YM:()=>dt,o2:()=>Ot,ql:()=>pt,c0:()=>St,Fu:()=>yt,WE:()=>Et,fD:()=>ft,EE:()=>vt});var n=r(747037),o=r.n(n),c=r(455877),i=r.n(c),u=r(192579),a="GEOSTORY:ADD",s="GEOSTORY:ADD_RESOURCE",l="GEOSTORY:CHANGE_MODE",d="GEOSTORY:CLEAR_SAVE_ERROR",O="GEOSTORY:EDIT_RESOURCE",p="GEOSTORY:EDIT_WEBPAGE",S="GEOSTORY:SCROLLING",y="GEOSTORY:LOAD_GEOSTORY",E="GEOSTORY:LOADING_GEOSTORY",f="GEOSTORY:MOVE",v="GEOSTORY:REMOVE",T="GEOSTORY:SAVE_STORY",m="GEOSTORY:SAVE_ERROR",R="GEOSTORY:STORY_SAVED",g="GEOSTORY:SELECT_CARD",G="GEOSTORY:SET_CONTROL",b="GEOSTORY:SET_RESOURCE",h="GEOSTORY:SET_CURRENT_STORY",Y="GEOSTORY:SET_WEBPAGE_URL",_="GEOSTORY:TOGGLE_CARD_PREVIEW",I="GEOSTORY:TOGGLE_SETTINGS_PANEL",C="GEOSTORY:TOGGLE_SETTING",A="GEOSTORY:TOGGLE_CONTENT_FOCUS",D="GEOSTORY:UPDATE",P="GEOSTORY:UPDATE_SETTING",w="GEOSTORY:UPDATE_CURRENT_PAGE",L="GEOSTORY:REMOVE_RESOURCE",N="GEOSTORY:SET_PENDING_CHANGES",j="GEOSTORY:SET_UPDATE_URL_SCROLL",U="GEOSTORY:UPDATE_MEDIA_EDITOR_SETTINGS",k="GEOSTORY:HIDE_CAROUSEL_ITEMS",M="GEOSTORY:ENABLE_DRAW",V="GEOSTORY:EXPORT",W="GEOSTORY:IMPORT",Z=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t){return t};return{type:a,id:r&&r.id||i()(),path:t,position:e,element:o()(r)&&(0,u.nq)(r,n)||r}},q=function(t,e,r){return{type:s,id:t,mediaType:e,data:r}},x=function(t){return{type:l,mode:t?u.nl.EDIT:u.nl.VIEW}},z=function(t,e,r){return{type:O,id:t,mediaType:e,data:r}},F=function(t,e){return{type:y,id:t,options:e}},B=function(t){return{type:"GEOSTORY:GEOSTORY_LOADED",id:t}},K=function(){return{type:E,value:arguments.length>0&&void 0!==arguments[0]&&arguments[0],name:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading"}},H=function(t){return{type:"GEOSTORY:LOAD_GEOSTORY_ERROR",error:t}},X=function(t){return{type:v,path:t}},Q=function(t){return{type:m,error:t}},$=function(t,e){return{type:G,control:t,value:e}},J=function(t){return{type:g,card:t}},tt=function(t){return{type:b,resource:t}},et=function(t){return{type:R,id:t}},rt=function(t){return{type:h,story:t}},nt=function(){return{type:_}},ot=function(t){return{type:C,option:t}},ct=function(){return{type:I,withSave:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},it=function(t,e){return{type:D,path:t,element:e,mode:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"replace",options:arguments.length>3?arguments[3]:void 0}},ut=function(t){var e=t.sectionId,r=t.columnId;return{type:w,sectionId:e,columnId:r}},at=function(t,e,r){return{type:f,source:t,target:e,position:r}},st=function(t,e,r,n,o){return{type:A,status:t,target:e,selector:r,hideContent:n,path:o}},lt=function(t,e){return{type:P,prop:t,value:e}},dt=function(t){return{type:Y,src:t}},Ot=function(t){var e=t.path;return{type:p,path:e,owner:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GEOSTORY"}},pt=function(t,e){return{type:L,id:t,mediaType:e}},St=function(t){return{type:N,value:t}},yt=function(t){return{type:U,mediaEditorSettings:t}},Et=function(t){return{type:S,status:t}},ft=function(t,e){return{type:k,sectionId:t,showContentId:e}},vt=function(t){return{type:M,drawOptions:t}}},38560:(t,e,r)=>{"use strict";r.d(e,{Z:()=>d});var n=r(480681),o=r(124852),c=r.n(o),i=r(294184),u=r.n(i),a=["disabled","className","onClick"];function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},s.apply(null,arguments)}var l=r(815135);const d=(O=n.zx,c().forwardRef((function(t,e){var r=t.disabled,n=t.className,o=t.onClick,i=void 0===o?function(){}:o,l=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,a);return c().createElement(O,s({ref:e,className:r?u()("disabled",n):n,onClick:function(){r||i.apply(void 0,arguments)}},l),l.children)})));var O;(0,l.Z)(n.zx)},166190:(t,e,r)=>{"use strict";r.d(e,{Z:()=>P});var n=r(227361),o=r.n(n),c=r(747037),i=r.n(c),u=r(281763),a=r.n(u),s=r(630998),l=r.n(s),d=r(313311),O=r.n(d),p=r(968630),S=r.n(p),y=r(701469),E=r.n(y),f=r(984596),v=r.n(f),T=r(545578),m=r.n(T),R=r(761868),g=r(192579),G=r(134990);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=b(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==b(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return C(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var A=function t(e,r,n){var o=n.contents,c=n.background,i=n.id,u=n.resourceId,a=[],s=r+'{"id": "'.concat(i,'"}]');return u===e?[s]:(c&&c.resourceId===e&&a.push(s+".background"),o?o.reduce((function(r,n){return[].concat(I(r),I(t(e,s+".contents[",n)))}),a):a)},D={mode:"view",isCollapsed:!1,focusedContent:{},currentPage:{},settings:{},oldSettings:{},updateUrlOnScroll:!1};const P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case G.D7:var r=e.id,n=e.path,c=e.position,u=e.element,s=(0,g.Ll)("currentStory.".concat(n),t),d=o()(t,s,[]),p=function(t,e){var r=t.length,n=0;return e||0===e||(n=r),i()(e)?n=l()(t,{id:e})+1:a()(e)&&(n=Math.min(e,t.length)),n}(d,c),y=d.slice();return y.splice(p,0,Y({id:r},u)),(0,R.t8)(s,y,t);case G.mN:var f=e.id,T=e.mediaType,b=e.data;return(0,R.t8)("currentStory.resources",m()([{id:f,type:T,data:b}].concat(I(t.currentStory&&t.currentStory.resources||[])),"id"),t);case G.vb:return(0,R.t8)("mode",e.mode,t);case G.QK:var h=e.id,C=e.mediaType,P=e.data,w=(0,R.cc)("currentStory.resources",{id:h,type:C,data:P},{id:h},t);return C===g.Tr.MAP&&t.currentStory.sections.filter((function(t){return t.type!==g.ID.CAROUSEL})).reduce((function(t,e){return[].concat(I(t),I(A(h,"sections[",e)))}),[]).map((function(e){var r=(0,g.Ll)("currentStory.".concat(e,".map"),t);w=(0,R.t8)(r,void 0,w)})),w;case G.Ro:var L=e.id,N=e.mediaType,j=(0,R.z6)("currentStory.resources",{id:L},t);return t.currentStory.sections.reduce((function(t,e){return[].concat(I(t),I(A(L,"sections[",e)))}),[]).map((function(e){var r=(0,g.Ll)("currentStory.".concat(e,".resourceId"),t);if(j=(0,R.zN)(r,j),N===g.Tr.MAP){var n=(0,g.Ll)("currentStory.".concat(e,".map"),t);j=(0,R.zN)(n,j)}})),j;case G.lX:return(0,R.t8)("loading"===e.name?"loading":"loadFlags.".concat(e.name),e.value,(0,R.t8)("loading",e.value,t));case G.Dq:var U=e.path,k=(0,g.Ll)("currentStory.".concat(U),t),M=I(k),V=M.pop(),W=o()(t,M);return E()(W)?(i()(V)&&(V=parseInt(V,10)),(0,R.t8)(M,[].concat(I(W.slice(0,V)),I(W.slice(V+1))),t)):(0,R.zN)(k,t);case G.ij:var Z,q,x,z,F,B=t.defaultSettings||{},K=e.story.settings||B,H=(null===(Z=K)||void 0===Z||null===(q=Z.theme)||void 0===q?void 0:q.fontFamilies)||[],X=null===(x=t.currentStory)||void 0===x||null===(z=x.settings)||void 0===z||null===(F=z.theme)||void 0===F?void 0:F.fontFamilies;return X&&X.length>0&&(K=(0,R.t8)("theme.fontFamilies",m()([].concat(I(X),I(H)),"family"),K)),(0,R.t8)("currentStory",Y(Y({},e.story),{},{settings:K}),t);case G.i2:return(0,R.t8)("selectedCard",t.selectedCard===e.card?"":e.card,t);case G.IY:var Q=e.control,$=e.value;return(0,R.t8)("controls.".concat(Q),$,t);case G.Zf:var J=e.resource,tt=t.currentStory&&t.currentStory.settings||{};return(0,R.qC)((0,R.t8)("resource",J),(0,R.t8)("currentStory.settings.storyTitle",tt.storyTitle||J.name))(t);case G.si:case G.KT:return(0,R.zN)("errors.save",t);case G.SW:return(0,R.t8)("errors.save",v()(e.error),t);case G.Mk:return(0,R.t8)("isCollapsed",!t.isCollapsed,t);case G.NZ:var et=o()(t,"currentStory.settings.".concat(e.option));return(0,R.t8)("currentStory.settings.".concat(e.option),!et,t);case G.c:var rt=!t.isSettingsEnabled,nt=t.currentStory&&t.currentStory.settings||{};return(0,R.qC)((0,R.t8)("isSettingsEnabled",rt),(0,R.t8)("oldSettings",rt?nt:{}),(0,R.t8)("currentStory.settings",rt?Y({},nt):e.withSave?nt:t.oldSettings))(t);case G.wb:var ot=e.path,ct=e.mode,it=e.options,ut=e.element,at=(0,g.Ll)("currentStory.".concat(ot),t),st=o()(t,at);return S()(st)&&S()(ut)&&"merge"===ct&&(ut=Y(Y({},st),ut)),E()(st)&&E()(ut)&&"merge"===ct&&(ut=null!=it&&it.uniqueByKey?m()([].concat(I(st),I(ut)),it.uniqueByKey):[].concat(I(st),I(ut))),(0,R.t8)(at,ut,t);case G.km:return(0,R.t8)("currentStory.settings.".concat(e.prop),e.value,t);case G.un:if(e.columnId){var lt=O()(t.currentStory.sections,(function(t){return O()(t.contents,{id:e.columnId})}));return lt&&O()(lt.contents,{id:e.columnId})?(0,R.t8)("currentPage",Y(Y({},t.currentPage),{},{columns:Y(Y({},t.currentPage.columns),{},_({},lt.id,e.columnId))}),t):t}return(0,R.t8)("currentPage",Y(Y({},t.currentPage),{},{sectionId:e.sectionId}),t);case G.Cx:var dt=e.status,Ot=e.target,pt=e.selector,St=void 0===pt?"":pt,yt=e.hideContent,Et=void 0!==yt&&yt,ft=e.path,vt=dt?{target:Ot,selector:St,hideContent:Et,path:ft}:void 0;return(0,R.t8)("focusedContent",vt,t);case G.jr:return(0,R.t8)("pendingChanges",e.value,t);case G.ZY:return(0,R.t8)("updateUrlOnScroll",e.value,t);case G.EQ:return(0,R.t8)("mediaEditorSettings",e.mediaEditorSettings,t);case G.W$:if(e.sectionId){var Tt=O()(t.currentStory.sections,(function(t){return O()(t.contents,{id:e.showContentId})}));return Tt&&O()(Tt.contents,{id:e.showContentId})?(0,R.t8)("currentStory",Y(Y({},t.currentStory),{},{sections:(0,g.eI)(t.currentStory.sections,e)}),t):t}return t;case G.mk:return(0,R.t8)("drawOptions",e.drawOptions,t);default:return t}}}}]);