(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[73115],{134990:(e,t,n)=>{"use strict";n.d(t,{D7:()=>u,mN:()=>l,vb:()=>s,KT:()=>f,QK:()=>d,cc:()=>m,Gx:()=>p,XH:()=>y,lX:()=>E,tP:()=>O,Dq:()=>v,LE:()=>b,SW:()=>g,si:()=>S,i2:()=>T,IY:()=>h,Zf:()=>I,ij:()=>D,Hb:()=>R,Mk:()=>w,c:()=>A,NZ:()=>_,Cx:()=>P,wb:()=>G,km:()=>C,un:()=>j,Ro:()=>M,jr:()=>N,ZY:()=>Y,EQ:()=>L,W$:()=>k,mk:()=>x,U3:()=>U,aF:()=>V,IH:()=>Z,rp:()=>z,D_:()=>W,zJ:()=>B,wJ:()=>H,OS:()=>F,YP:()=>$,Ct:()=>Q,Od:()=>X,y6:()=>q,g5:()=>K,_e:()=>J,DF:()=>ee,GD:()=>te,K0:()=>ne,kB:()=>re,Xn:()=>oe,G5:()=>ie,Vx:()=>ae,RZ:()=>ce,pB:()=>ue,$A:()=>le,m7:()=>se,YM:()=>fe,o2:()=>de,ql:()=>me,c0:()=>pe,Fu:()=>ye,WE:()=>Ee,fD:()=>Oe,EE:()=>ve});var r=n(747037),o=n.n(r),i=n(455877),a=n.n(i),c=n(192579),u="GEOSTORY:ADD",l="GEOSTORY:ADD_RESOURCE",s="GEOSTORY:CHANGE_MODE",f="GEOSTORY:CLEAR_SAVE_ERROR",d="GEOSTORY:EDIT_RESOURCE",m="GEOSTORY:EDIT_WEBPAGE",p="GEOSTORY:SCROLLING",y="GEOSTORY:LOAD_GEOSTORY",E="GEOSTORY:LOADING_GEOSTORY",O="GEOSTORY:MOVE",v="GEOSTORY:REMOVE",b="GEOSTORY:SAVE_STORY",g="GEOSTORY:SAVE_ERROR",S="GEOSTORY:STORY_SAVED",T="GEOSTORY:SELECT_CARD",h="GEOSTORY:SET_CONTROL",I="GEOSTORY:SET_RESOURCE",D="GEOSTORY:SET_CURRENT_STORY",R="GEOSTORY:SET_WEBPAGE_URL",w="GEOSTORY:TOGGLE_CARD_PREVIEW",A="GEOSTORY:TOGGLE_SETTINGS_PANEL",_="GEOSTORY:TOGGLE_SETTING",P="GEOSTORY:TOGGLE_CONTENT_FOCUS",G="GEOSTORY:UPDATE",C="GEOSTORY:UPDATE_SETTING",j="GEOSTORY:UPDATE_CURRENT_PAGE",M="GEOSTORY:REMOVE_RESOURCE",N="GEOSTORY:SET_PENDING_CHANGES",Y="GEOSTORY:SET_UPDATE_URL_SCROLL",L="GEOSTORY:UPDATE_MEDIA_EDITOR_SETTINGS",k="GEOSTORY:HIDE_CAROUSEL_ITEMS",x="GEOSTORY:ENABLE_DRAW",U="GEOSTORY:EXPORT",V="GEOSTORY:IMPORT",Z=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e};return{type:u,id:n&&n.id||a()(),path:e,position:t,element:o()(n)&&(0,c.nq)(n,r)||n}},z=function(e,t,n){return{type:l,id:e,mediaType:t,data:n}},W=function(e){return{type:s,mode:e?c.nl.EDIT:c.nl.VIEW}},B=function(e,t,n){return{type:d,id:e,mediaType:t,data:n}},H=function(e,t){return{type:y,id:e,options:t}},F=function(e){return{type:"GEOSTORY:GEOSTORY_LOADED",id:e}},$=function(){return{type:E,value:arguments.length>0&&void 0!==arguments[0]&&arguments[0],name:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading"}},Q=function(e){return{type:"GEOSTORY:LOAD_GEOSTORY_ERROR",error:e}},X=function(e){return{type:v,path:e}},q=function(e){return{type:g,error:e}},K=function(e,t){return{type:h,control:e,value:t}},J=function(e){return{type:T,card:e}},ee=function(e){return{type:I,resource:e}},te=function(e){return{type:S,id:e}},ne=function(e){return{type:D,story:e}},re=function(){return{type:w}},oe=function(e){return{type:_,option:e}},ie=function(){return{type:A,withSave:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},ae=function(e,t){return{type:G,path:e,element:t,mode:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"replace",options:arguments.length>3?arguments[3]:void 0}},ce=function(e){var t=e.sectionId,n=e.columnId;return{type:j,sectionId:t,columnId:n}},ue=function(e,t,n){return{type:O,source:e,target:t,position:n}},le=function(e,t,n,r,o){return{type:P,status:e,target:t,selector:n,hideContent:r,path:o}},se=function(e,t){return{type:C,prop:e,value:t}},fe=function(e){return{type:R,src:e}},de=function(e){var t=e.path;return{type:m,path:t,owner:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GEOSTORY"}},me=function(e,t){return{type:M,id:e,mediaType:t}},pe=function(e){return{type:N,value:e}},ye=function(e){return{type:L,mediaEditorSettings:e}},Ee=function(e){return{type:p,status:e}},Oe=function(e,t){return{type:k,sectionId:e,showContentId:t}},ve=function(e){return{type:x,drawOptions:e}}},282385:(e,t,n)=>{"use strict";n.d(t,{nr:()=>r,B8:()=>o,LE:()=>i,$Z:()=>a,Cp:()=>c});var r="MAP_EDITOR:SHOW",o="MAP_EDITOR:HIDE",i="MAP_EDITOR:SAVE",a=function(e,t){return{type:r,owner:e,map:t}},c=function(e){return{type:o,owner:e}}},93848:(e,t,n)=>{"use strict";n.d(t,{Ai:()=>a,AQ:()=>c,Gl:()=>u,wd:()=>l,V9:()=>s,ih:()=>f,B8:()=>d,ww:()=>m,HP:()=>p,ri:()=>y,gd:()=>E,nr:()=>O,ty:()=>v,GZ:()=>b,O6:()=>g,Vt:()=>S,Ug:()=>T,Wp:()=>h,Ke:()=>I,Cp:()=>D,pW:()=>R,Gr:()=>w,gG:()=>A,oo:()=>_,Gh:()=>P,$G:()=>G,I5:()=>C,d8:()=>j,y5:()=>M,Az:()=>N,$Z:()=>Y,Ql:()=>L,Ul:()=>k,TU:()=>x,E0:()=>U,Yt:()=>V,Tk:()=>Z});var r=n(513218),o=n.n(r),i=n(727693),a="MEDIA_EDITOR:ADDING_MEDIA",c="MEDIA_EDITOR:CHOOSE_MEDIA",u="MEDIA_EDITOR:EDITING_MEDIA",l="GEOSTORY:EDIT_MEDIA",s="MEDIA_EDITOR:LOAD_MEDIA",f="MEDIA_EDITOR:LOAD_MEDIA_SUCCESS",d="MEDIA_EDITOR:HIDE",m="MEDIA_EDITOR:SAVE_MEDIA",p="MEDIA_EDITOR:SET_MEDIA_TYPE",y="MEDIA_EDITOR:SET_MEDIA_SERVICE",E="MEDIA_EDITOR:SELECT_ITEM",O="MEDIA_EDITOR:SHOW",v="MEDIA_EDITOR:UPDATE_ITEM",b="MEDIA_EDITOR:IMPORT_IN_LOCAL",g="MEDIA_EDITOR:REMOVE_MEDIA",S="MEDIA_EDITOR:LOADING_SELECTED_MEDIA",T="MEDIA_EDITOR:LOADING_MEDIA_LIST",h="MEDIA_EDITOR:MEDIA_TYPE_DISABLE",I=function(e){return{type:c,resource:e}},D=function(){return{type:d}},R=function(e,t,n){return{type:s,params:e,mediaType:t,sourceId:n}},w=function(e){var t=e.mediaType,n=e.sourceId,r=e.params,o=e.resultData;return{type:f,mediaType:t,sourceId:n,params:r,resultData:o}},A=function(e){var t=e.type,n=e.source,r=e.data;return{type:m,mediaType:t,source:n,data:r}},_=function(e){return{type:"MEDIA_EDITOR:SAVE_MEDIA_SUCCESS",mediaType:e.mediaType,source:e.source,data:e.data,id:e.id}},P=function(e){return{type:E,id:e}},G=function(e){return{type:v,item:e,mode:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"merge"}},C=function(e){return{type:a,adding:e}},j=function(e){return{type:y,id:o()(e)?e.value:e}},M=function(e){return{type:p,mediaType:e}},N=function(e){return{type:u,editing:e}},Y=function(e,t){return{type:O,owner:e,settings:t}},L=function(e,t){var n=e.path,r=e.owner;return{type:l,path:n,owner:void 0===r?"geostory":r,sectionType:t}},k=function(e){var t=e.resource,n=e.sourceType,r=void 0===n?i.r.GEOSTORY:n,o=e.owner;return{type:b,resource:t,sourceType:r,owner:void 0===o?"geostory":o}},x=function(e){return{type:g,mediaType:e,owner:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"geostory"}},U=function(e){return{type:S,loading:e}},V=function(){return{type:T}},Z=function(){return{type:h,mediaTypes:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}},452826:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(124852),o=n.n(r),i=n(218291),a=n(532425),c=n(580628),u=n(480681),l=n(192579),s=n(805346);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var O=(0,i.Z)()((0,r.lazy)((function(){return n.e(70390).then(n.bind(n,970390))}))),v=(0,c.Z)((function(e){var t=e.src,n=e.width,i=e.height,c=e.resolution,l=e.thumbnail,f=e.controls,d=e.play,p=e.onPlay,E=void 0===p?function(){}:p,v=e.onStart,b=void 0===v?function(){}:v,g=e.fit,S=e.loop,T=e.volume,h=void 0===T?1:T,I=e.muted,D=d,R=y((0,r.useState)(D),2),w=R[0],A=R[1],_=y((0,r.useState)(),2),P=_[0],G=_[1],C=y((0,r.useState)(d),2),j=C[0],M=C[1],N="cover"===g,Y=y((0,r.useState)(!1),2),L=Y[0],k=Y[1];(0,r.useEffect)((function(){!w&&D&&(A(!0),M(!0)),w&&b(w)}),[w,D]);var x,U=(x=n/i,N?x<c?[i*c,i]:[n,n/c]:"contain"===g?x<c?[n,n/c]:[i*c,i]:[n,n/c]),V="contain"===g||N?i:U[1],Z=!N&&f,z=!!N||S;return o().createElement("div",{className:"ms-video",style:{position:"relative",width:n,height:V,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}},t&&o().createElement(o().Fragment,null,w&&o().createElement(O,{url:t,width:U[0],height:U[1],playing:D,loop:z,volume:h,muted:I,style:N?{left:"50%",top:"50%",transform:"translate(-50%, -50%)",position:"absolute"}:{},controls:Z,pip:!1,fileConfig:{attributes:{controlsList:"nodownload",disablePictureInPicture:!0}},youtubeConfig:{playerVars:{controls:Z?2:0,modestbranding:1,rel:0}},onReady:function(){return M(!1)},onError:function(e){G(e),(""+e).includes("NotAllowedError")&&(E(!1),k(!0),M(!1))},onPause:function(){E(!1)},onPlay:function(){E(!0),L&&(G(!1),k(!1))}}),(!w||w&&(j||P))&&o().createElement("div",{className:"ms-video-cover",style:m(m({position:"absolute",width:U[0],height:U[1],display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 1.0)"},!(j||P)&&{cursor:"pointer"}),!D&&l&&{backgroundImage:"url(".concat(l,")"),backgroundSize:N?"cover":"640px auto",backgroundPosition:"center",backgroundRepeat:"no-repeat"}),onClick:function(){L?(k(!1),G(!1)):M(!0),A(!0),E(!0)}},j&&o().createElement(a.Z,{size:70}),P&&!L&&o().createElement("div",{className:"text-center"},o().createElement(u.gG,{glyph:"alert",style:{fontSize:U[1]/4>100?100:U[1]/4,mixBlendMode:"difference",color:"#ffffff"}}),o().createElement("h3",null,o().createElement(s.Z,{msgId:"geostory.errors.loading.video"}))," "),(!(j||P)&&!D||P&&L)&&o().createElement(u.gG,{glyph:"play",style:{fontSize:U[1]/4>100?100:U[1]/4,mixBlendMode:"difference",color:"#ffffff"}}))),!Z&&!L&&o().createElement("div",{className:"ms-video-mask-cover",style:{position:"absolute",width:U[0],height:U[1]}}))}));const b=function(e){var t=e.id,n=e.src,i=e.resolution,a=void 0===i?16/9:i,c=e.autoplay,u=e.inView,s=e.description,f=e.showCaption,d=e.caption,m=void 0===d?s:d,p=e.thumbnail,E=e.credits,O=e.controls,b=void 0===O||O,g=e.fit,S=e.loop,T=e.muted,h=e.onPlay,I=void 0===h?function(){}:h,D=e.mode,R=e.containerInView,w=(void 0===R||R)&&u,A=y((0,r.useState)(!1),2),_=A[0],P=A[1],G=function(e){P(e),I(e)};return(0,r.useEffect)((function(){D===l.nl.EDIT&&G(!1)}),[D]),(0,r.useEffect)((function(){D===l.nl.VIEW&&w&&(c||"cover"===g)&&G(!0)}),[w,c,g,D]),(0,r.useEffect)((function(){D===l.nl.VIEW&&!w&&_&&G(!1)}),[w,_,D]),o().createElement("div",{id:t,key:"".concat(t,"-").concat(g,"-").concat(D),className:"ms-media ms-media-video"},o().createElement(v,{src:n,play:_&&D===l.nl.VIEW,resolution:a,thumbnail:p,controls:b&&D===l.nl.VIEW,onPlay:G,fit:g,loop:S,muted:T}),E&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,E)),f&&m&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,m)))}},507848:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(124852),o=n.n(r),i=n(898631);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(null,arguments)}const c=function(e){return function(t){var n;return o().createElement(e,a({mapType:(0,i._1)(null==t||null===(n=t.map)||void 0===n?void 0:n.visualizationMode)},t))}}},819983:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(124852),o=n.n(r),i=n(45697),a=n.n(i),c=n(552259);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){return function(t){var n,i,a,u,l,f,d,m=(null==t||null===(n=t.map)||void 0===n?void 0:n.projection)||"EPSG:3857",p=(null==t||null===(i=t.map)||void 0===i||null===(a=i.mapOptions)||void 0===a||null===(u=a.view)||void 0===u?void 0:u.DPI)||null,y=null==t||null===(l=t.map)||void 0===l||null===(f=l.mapOptions)||void 0===f||null===(d=f.view)||void 0===d?void 0:d.scales,E=(0,r.useMemo)((function(){return y?(0,c.Xf)(y,m,p):null}),[y,m,p]),O=E?s(s({},t),{},{map:s(s({},t.map),{},{mapOptions:s(s({},t.map.mapOptions),{},{view:s(s({},t.map.mapOptions.view),{},{resolutions:E})})})}):t;return o().createElement(e,O)}};d.propTypes={Component:a().element};const m=d},975480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(124852),o=n.n(r);const i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},694745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(124852),o=n.n(r),i=n(294184),a=n.n(i),c=n(480681),u=n(807472),l=n(80717),s=n(867076),f=n(819081),d=n.n(f),m=n(975480),p={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},y={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const E=(0,s.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,i=e.loadingText,s=e.onClose,f=void 0===s?function(){}:s,E=e.title,O=void 0===E?"":E,v=e.clickOutEnabled,b=void 0===v||v,g=e.showClose,S=void 0===g||g,T=e.disabledClose,h=void 0!==T&&T,I=e.showFullscreen,D=void 0!==I&&I,R=e.fullscreenType,w=void 0===R?"full":R,A=e.buttons,_=void 0===A?[]:A,P=e.size,G=void 0===P?"":P,C=e.bodyClassName,j=void 0===C?"":C,M=e.children,N=e.draggable,Y=void 0!==N&&N,L=e.fullscreenState,k=e.onFullscreen,x=e.fade,U=void 0!==x&&x,V=e.fitContent,Z=e.modalClassName,z=void 0===Z?"":Z,W=e.dialogClassName,B=void 0===W?"":W,H=e.enableFooter,F=void 0===H||H,$=p[G]||"",Q=D&&"expanded"===L&&y.className[w]||"",X=n?o().createElement("div",{className:"modal-fixed ".concat(z," ")+(Y?"ms-draggable":"")},o().createElement(u.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:b?f:function(){},containerClassName:"ms-resizable-modal",draggable:Y,modal:!0,className:a()("modal-dialog modal-content",$,Q,B,{"ms-fit-content":V})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},O),D&&y.className[w]&&o().createElement(c.gG,{className:"ms-header-btn",onClick:function(){return k("expanded"===L?"collapsed":"expanded")},glyph:y.glyph[L][w]}),S&&f&&o().createElement(c.gG,{glyph:"1-close",className:"ms-header-btn",onClick:f,disabled:h}))),o().createElement("div",{role:"body",className:j},M),F&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(m.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?i:null),o().createElement(l.Z,{buttons:_})))):null;return U?o().createElement(d(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},X):X}))},697111:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(124852),o=n.n(r),i=n(45697),a=n.n(i),c=n(23279),u=n.n(c);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}const p=function(e,t){return function(n){function i(i){var a,c,l=(0,r.useRef)(),s=(a=(0,r.useState)(i[t]),c=2,function(e){if(Array.isArray(e))return e}(a)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(a,c)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(a,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=s[0],y=s[1],E=(0,r.useRef)();E.current=p,(0,r.useEffect)((function(){if(E.current!==i[t]){y(i[t]);var n=i["".concat(e,"NoDebounce")];n&&n(i[t])}}),[i[t]]),(0,r.useEffect)((function(){return l.current=u()((function(t){var n=t.newProps,r=t.newValue;n[e](r)}),i.debounceTime),function(){l.current.cancel()}}),[i.debounceTime]);var O=f(f({},i),{},d(d({},t,p),e,(function(t){y(t);var n=i["".concat(e,"NoDebounce")];n&&n(t),l.current&&(l.current.cancel(),l.current({newProps:i,newValue:t}))})));return o().createElement(n,O)}return i.propTypes={debounceTime:a().number},i.defaultProps={debounceTime:300},i.displayName=n.displayName+"WithDebounceOnCallback",i}}},312122:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(124852),o=n.n(r),i=n(501262),a=n(399534),c=n(805346),u=n(867076),l=["confirming","confirmYes","confirmNo","confirmTitle","confirmContent","confirmModal","draggable","onConfirm","setConfirming"];function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=(0,u.compose)((0,u.withProps)((function(e){var t=e.setConfirming;return{onClose:function(e){null!=e&&e.stopPropagation&&e.stopPropagation(),t(!1)}}})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.confirmYes,n=void 0===t?o().createElement(c.Z,{msgId:"yes"}):t,r=e.confirmNo,u=void 0===r?o().createElement(c.Z,{msgId:"no"}):r,l=e.confirmTitle,s=void 0===l?o().createElement(c.Z,{msgId:"confirm"}):l,f=e.confirmContent,d=e.confirmButtonBSStyle,m=void 0===d?"primary":d,p=e.show,y=void 0!==p&&p,E=e.confirmModal,O=void 0===E||E,v=e.draggable,b=void 0!==v&&v,g=e.onClose,S=void 0===g?function(){}:g,T=e.onConfirm,h=void 0===T?function(){}:T;return y?o().createElement(a.Z,null,o().createElement("div",{className:"with-confirm-modal"},o().createElement(i.Z,{draggable:b,show:y,modal:O,onClose:S,onConfirm:h,title:s,confirmButtonContent:n,closeText:u,confirmButtonBSStyle:m,closeGlyph:"1-close"},f))):null})),d=function(e){return function(t){var n=t.confirming,r=t.confirmYes,i=t.confirmNo,a=t.confirmTitle,c=t.confirmContent,u=t.confirmModal,s=t.draggable,d=t.onConfirm,m=t.setConfirming,p=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,l);return o().createElement(o().Fragment,null,o().createElement(f,{show:n,setConfirming:m,confirmYes:r,confirmNo:i,confirmTitle:a,confirmContent:c,confirmModal:u,draggable:s,onConfirm:d}),o().createElement(e,p))}};const m=function(e){return(0,u.compose)((0,u.withState)("confirming","setConfirming",!1),(0,u.withHandlers)({onClick:function(e){var t=e.setConfirming,n=void 0===t?function(){}:t,r=e.onClick,o=void 0===r?function(){}:r,i=e.confirmPredicate,a=void 0===i||i;return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i,c,u=(i=t||[],c=1,function(e){if(Array.isArray(e))return e}(i)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(i,c)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(i,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];null!=u&&u.stopPropagation&&u.stopPropagation(),a?n(!0):o.apply(void 0,t)}},onConfirm:function(e){var t=e.onClick,n=void 0===t?function(){}:t,r=e.setConfirming,o=void 0===r?function(){}:r;return function(){o(!1),n.apply(void 0,arguments)}}}),d)(e)}},107501:(e,t,n)=>{"use strict";n.d(t,{hp:()=>m,cM:()=>p,Qi:()=>y,TU:()=>E,IQ:()=>O,hb:()=>v,HL:()=>b,dq:()=>g,Iy:()=>S,Qd:()=>T,ER:()=>h,Gi:()=>I,mA:()=>D,jR:()=>R,mD:()=>w,XG:()=>A,B6:()=>_,f5:()=>P,gW:()=>G});var r=n(227361),o=n.n(r),i=n(313311),a=n.n(i),c=n(22222),u=n(624262);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){return o()(e,"mediaEditor.open")},p=function(e){return o()(e,"mediaEditor.saveState.editing",!1)},y=function(e){return o()(e,"mediaEditor.saveState.addingMedia",!1)},E=function(e){return o()(e,"mediaEditor.saveState")},O=function(e){return o()(e,"mediaEditor.settings.sourceId")},v=function(e){return o()(e,"mediaEditor.settings.mediaType")},b=function(e){return o()(e,"mediaEditor.settings.sources")},g=function(e){return o()(b(e),O(e),{})},S=function(e){return function(e){return o()(function(e){return o()(e,"mediaEditor.settings.mediaTypes")}(e),"".concat(v(e),".sources"),[])}(e).map((function(t){return{id:t,name:(n=t,function(e){return o()(b(e),"".concat(n),{})})(e).name};var n}))},T=function(e){return o()(e,'mediaEditor.data["'.concat(v(e),'"]["').concat(O(e),'"].resultData'))},h=function(e){return o()(e,'mediaEditor.data["'.concat(v(e),'"]["').concat(O(e),'"].params'))},I=function(e){return o()(T(e),"resources")},D=function(e){return o()(T(e),"totalCount")},R=function(e){return o()(e,"mediaEditor.selected")},w=function(e){return o()(e,"mediaEditor.loadingSelected")},A=function(e){return o()(e,"mediaEditor.loadingList")},_=(0,c.P1)(I,R,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=a()(e,{id:t});return n&&"map"===n.type&&n.data.layers?f(f({},n),{},{data:f(f({},n.data),{},{layers:n.data.layers.map((function(e){if((e.tileMatrixSet||e.availableTileMatrixSets)&&n.data.sources){var t=(0,u.gv)(n.data.sources,e);return f(f({},e),t)}return e}))})}):n})),P=function(e){return o()(e,"mediaEditor.disabledMediaType",[])},G=function(e){return P(e).length&&!_(e)&&"map"===v(e)||w(e)}},727693:(e,t,n)=>{"use strict";n.d(t,{r:()=>r,D:()=>o});var r={GEOSTORY:"geostory",GEOSTORE:"geostore"},o={type:"osm",title:"Open Street Map",name:"mapnik",source:"osm",group:"background",visibility:!0,id:"mapnik__0",loading:!1,loadingError:!1}}}]);