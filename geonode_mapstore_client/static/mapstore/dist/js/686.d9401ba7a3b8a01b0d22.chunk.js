(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[686],{686:(t,e,r)=>{"use strict";r.d(e,{Z:()=>E});var s=r(623068),i=r(798090),n=r(944538),o=r(525642),h=r(552329),a=r(513987),u=r(752043),c=r(15265),l=r(518334),p=r(949179);class _ extends l.ZP{constructor(){super()}getType(){return"text"}readFeature(t,e){return this.readFeatureFromText(T(t),this.adaptOptions(e))}readFeatureFromText(t,e){return(0,p.O3)()}readFeatures(t,e){return this.readFeaturesFromText(T(t),this.adaptOptions(e))}readFeaturesFromText(t,e){return(0,p.O3)()}readGeometry(t,e){return this.readGeometryFromText(T(t),this.adaptOptions(e))}readGeometryFromText(t,e){return(0,p.O3)()}readProjection(t){return this.readProjectionFromText(T(t))}readProjectionFromText(t){return this.dataProjection}writeFeature(t,e){return this.writeFeatureText(t,this.adaptOptions(e))}writeFeatureText(t,e){return(0,p.O3)()}writeFeatures(t,e){return this.writeFeaturesText(t,this.adaptOptions(e))}writeFeaturesText(t,e){return(0,p.O3)()}writeGeometry(t,e){return this.writeGeometryText(t,this.adaptOptions(e))}writeGeometryText(t,e){return(0,p.O3)()}}function T(t){return"string"==typeof t?t:""}const m=_,x={POINT:u.Z,LINESTRING:n.Z,POLYGON:c.ZP,MULTIPOINT:h.Z,MULTILINESTRING:o.Z,MULTIPOLYGON:a.Z},g="EMPTY",f={Point:"POINT",LineString:"LINESTRING",Polygon:"POLYGON",MultiPoint:"MULTIPOINT",MultiLineString:"MULTILINESTRING",MultiPolygon:"MULTIPOLYGON",GeometryCollection:"GEOMETRYCOLLECTION",Circle:"CIRCLE"};class y{constructor(t){this.wkt=t,this.index_=-1}isAlpha_(t){return t>="a"&&t<="z"||t>="A"&&t<="Z"}isNumeric_(t,e){return e=void 0!==e&&e,t>="0"&&t<="9"||"."==t&&!e}isWhiteSpace_(t){return" "==t||"\t"==t||"\r"==t||"\n"==t}nextChar_(){return this.wkt.charAt(++this.index_)}nextToken(){const t=this.nextChar_(),e=this.index_;let r,s=t;if("("==t)r=2;else if(","==t)r=5;else if(")"==t)r=3;else if(this.isNumeric_(t)||"-"==t)r=4,s=this.readNumber_();else if(this.isAlpha_(t))r=1,s=this.readText_();else{if(this.isWhiteSpace_(t))return this.nextToken();if(""!==t)throw new Error("Unexpected character: "+t);r=6}return{position:e,value:s,type:r}}readNumber_(){let t;const e=this.index_;let r=!1,s=!1;do{"."==t?r=!0:"e"!=t&&"E"!=t||(s=!0),t=this.nextChar_()}while(this.isNumeric_(t,r)||!s&&("e"==t||"E"==t)||s&&("-"==t||"+"==t));return parseFloat(this.wkt.substring(e,this.index_--))}readText_(){let t;const e=this.index_;do{t=this.nextChar_()}while(this.isAlpha_(t));return this.wkt.substring(e,this.index_--).toUpperCase()}}class w{constructor(t){this.lexer_=t,this.token_={position:0,type:0},this.layout_="XY"}consume_(){this.token_=this.lexer_.nextToken()}isTokenType(t){return this.token_.type==t}match(t){const e=this.isTokenType(t);return e&&this.consume_(),e}parse(){return this.consume_(),this.parseGeometry_()}parseGeometryLayout_(){let t="XY";const e=this.token_;if(this.isTokenType(1)){const r=e.value;"Z"===r?t="XYZ":"M"===r?t="XYM":"ZM"===r&&(t="XYZM"),"XY"!==t&&this.consume_()}return t}parseGeometryCollectionText_(){if(this.match(2)){const t=[];do{t.push(this.parseGeometry_())}while(this.match(5));if(this.match(3))return t}throw new Error(this.formatErrorMessage_())}parsePointText_(){if(this.match(2)){const t=this.parsePoint_();if(this.match(3))return t}throw new Error(this.formatErrorMessage_())}parseLineStringText_(){if(this.match(2)){const t=this.parsePointList_();if(this.match(3))return t}throw new Error(this.formatErrorMessage_())}parsePolygonText_(){if(this.match(2)){const t=this.parseLineStringTextList_();if(this.match(3))return t}throw new Error(this.formatErrorMessage_())}parseMultiPointText_(){if(this.match(2)){let t;if(t=2==this.token_.type?this.parsePointTextList_():this.parsePointList_(),this.match(3))return t}throw new Error(this.formatErrorMessage_())}parseMultiLineStringText_(){if(this.match(2)){const t=this.parseLineStringTextList_();if(this.match(3))return t}throw new Error(this.formatErrorMessage_())}parseMultiPolygonText_(){if(this.match(2)){const t=this.parsePolygonTextList_();if(this.match(3))return t}throw new Error(this.formatErrorMessage_())}parsePoint_(){const t=[],e=this.layout_.length;for(let r=0;r<e;++r){const e=this.token_;if(!this.match(4))break;t.push(e.value)}if(t.length==e)return t;throw new Error(this.formatErrorMessage_())}parsePointList_(){const t=[this.parsePoint_()];for(;this.match(5);)t.push(this.parsePoint_());return t}parsePointTextList_(){const t=[this.parsePointText_()];for(;this.match(5);)t.push(this.parsePointText_());return t}parseLineStringTextList_(){const t=[this.parseLineStringText_()];for(;this.match(5);)t.push(this.parseLineStringText_());return t}parsePolygonTextList_(){const t=[this.parsePolygonText_()];for(;this.match(5);)t.push(this.parsePolygonText_());return t}isEmptyGeometry_(){const t=this.isTokenType(1)&&this.token_.value==g;return t&&this.consume_(),t}formatErrorMessage_(){return"Unexpected `"+this.token_.value+"` at position "+this.token_.position+" in `"+this.lexer_.wkt+"`"}parseGeometry_(){const t=this.token_;if(this.match(1)){const e=t.value;this.layout_=this.parseGeometryLayout_();const r=this.isEmptyGeometry_();if("GEOMETRYCOLLECTION"==e){if(r)return new i.Z([]);const t=this.parseGeometryCollectionText_();return new i.Z(t)}const s=x[e];if(!s)throw new Error("Invalid geometry type: "+e);let n;if(r)n="POINT"==e?[NaN,NaN]:[];else switch(e){case"POINT":n=this.parsePointText_();break;case"LINESTRING":n=this.parseLineStringText_();break;case"POLYGON":n=this.parsePolygonText_();break;case"MULTIPOINT":n=this.parseMultiPointText_();break;case"MULTILINESTRING":n=this.parseMultiLineStringText_();break;case"MULTIPOLYGON":n=this.parseMultiPolygonText_()}return new s(n,this.layout_)}throw new Error(this.formatErrorMessage_())}}function L(t){const e=t.getCoordinates();return 0===e.length?"":e.join(" ")}function P(t){const e=t.getCoordinates(),r=[];for(let t=0,s=e.length;t<s;++t)r.push(e[t].join(" "));return r.join(",")}function d(t){const e=[],r=t.getLinearRings();for(let t=0,s=r.length;t<s;++t)e.push("("+P(r[t])+")");return e.join(",")}const G={Point:L,LineString:P,Polygon:d,MultiPoint:function(t){const e=[],r=t.getPoints();for(let t=0,s=r.length;t<s;++t)e.push("("+L(r[t])+")");return e.join(",")},MultiLineString:function(t){const e=[],r=t.getLineStrings();for(let t=0,s=r.length;t<s;++t)e.push("("+P(r[t])+")");return e.join(",")},MultiPolygon:function(t){const e=[],r=t.getPolygons();for(let t=0,s=r.length;t<s;++t)e.push("("+d(r[t])+")");return e.join(",")},GeometryCollection:function(t){const e=[],r=t.getGeometries();for(let t=0,s=r.length;t<s;++t)e.push(M(r[t]));return e.join(",")}};function M(t){const e=t.getType(),r=(0,G[e])(t);let s=f[e];if("function"==typeof t.getFlatCoordinates){const e=function(t){const e=t.getLayout();let r="";return"XYZ"!==e&&"XYZM"!==e||(r+="Z"),"XYM"!==e&&"XYZM"!==e||(r+="M"),r}(t);e.length>0&&(s+=" "+e)}return 0===r.length?s+" "+g:s+"("+r+")"}const E=class extends m{constructor(t){super(),t=t||{},this.splitCollection_=void 0!==t.splitCollection&&t.splitCollection}parse_(t){const e=new y(t);return new w(e).parse()}readFeatureFromText(t,e){const r=this.readGeometryFromText(t,e),i=new s.Z;return i.setGeometry(r),i}readFeaturesFromText(t,e){let r=[];const i=this.readGeometryFromText(t,e);r=this.splitCollection_&&"GeometryCollection"==i.getType()?i.getGeometriesArray():[i];const n=[];for(let t=0,e=r.length;t<e;++t){const e=new s.Z;e.setGeometry(r[t]),n.push(e)}return n}readGeometryFromText(t,e){const r=this.parse_(t);return(0,l.fI)(r,!1,e)}writeFeatureText(t,e){const r=t.getGeometry();return r?this.writeGeometryText(r,e):""}writeFeaturesText(t,e){if(1==t.length)return this.writeFeatureText(t[0],e);const r=[];for(let e=0,s=t.length;e<s;++e)r.push(t[e].getGeometry());const s=new i.Z(r);return this.writeGeometryText(s,e)}writeGeometryText(t,e){return M((0,l.fI)(t,!0,e))}}}}]);