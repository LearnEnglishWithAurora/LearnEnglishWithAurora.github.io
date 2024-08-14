import"./index-CiSILCBj.js";import"./auth-_Qlvg1y_.js";import{L as Iu,_ as wu,C as Au,r as Ns,F as Ru,b as Wt,d as Pu,e as Vu,f as Su,h as zt,j as Cu,S as Du,k as ku,l as bu,i as Nu,g as xu,o as Mu}from"./index-54738136-Bd3ggPxx.js";var xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var se,yo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function p(){}p.prototype=m.prototype,T.D=m.prototype,T.prototype=new p,T.prototype.constructor=T,T.C=function(y,E,I){for(var g=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)g[Nt-2]=arguments[Nt];return m.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,p){p||(p=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(p++)|m.charCodeAt(p++)<<8|m.charCodeAt(p++)<<16|m.charCodeAt(p++)<<24;else for(E=0;16>E;++E)y[E]=m[p++]|m[p++]<<8|m[p++]<<16|m[p++]<<24;m=T.g[0],p=T.g[1],E=T.g[2];var I=T.g[3],g=m+(I^p&(E^I))+y[0]+3614090360&4294967295;m=p+(g<<7&4294967295|g>>>25),g=I+(E^m&(p^E))+y[1]+3905402710&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(p^I&(m^p))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=p+(m^E&(I^m))+y[3]+3250441966&4294967295,p=E+(g<<22&4294967295|g>>>10),g=m+(I^p&(E^I))+y[4]+4118548399&4294967295,m=p+(g<<7&4294967295|g>>>25),g=I+(E^m&(p^E))+y[5]+1200080426&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(p^I&(m^p))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=p+(m^E&(I^m))+y[7]+4249261313&4294967295,p=E+(g<<22&4294967295|g>>>10),g=m+(I^p&(E^I))+y[8]+1770035416&4294967295,m=p+(g<<7&4294967295|g>>>25),g=I+(E^m&(p^E))+y[9]+2336552879&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(p^I&(m^p))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=p+(m^E&(I^m))+y[11]+2304563134&4294967295,p=E+(g<<22&4294967295|g>>>10),g=m+(I^p&(E^I))+y[12]+1804603682&4294967295,m=p+(g<<7&4294967295|g>>>25),g=I+(E^m&(p^E))+y[13]+4254626195&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(p^I&(m^p))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=p+(m^E&(I^m))+y[15]+1236535329&4294967295,p=E+(g<<22&4294967295|g>>>10),g=m+(E^I&(p^E))+y[1]+4129170786&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^E&(m^p))+y[6]+3225465664&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^p&(I^m))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(E^I))+y[0]+3921069994&4294967295,p=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(p^E))+y[5]+3593408605&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^E&(m^p))+y[10]+38016083&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^p&(I^m))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(E^I))+y[4]+3889429448&4294967295,p=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(p^E))+y[9]+568446438&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^E&(m^p))+y[14]+3275163606&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^p&(I^m))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(E^I))+y[8]+1163531501&4294967295,p=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(p^E))+y[13]+2850285829&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^E&(m^p))+y[2]+4243563512&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^p&(I^m))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(E^I))+y[12]+2368359562&4294967295,p=E+(g<<20&4294967295|g>>>12),g=m+(p^E^I)+y[5]+4294588738&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^E)+y[8]+2272392833&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^p)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=p+(E^I^m)+y[14]+4259657740&4294967295,p=E+(g<<23&4294967295|g>>>9),g=m+(p^E^I)+y[1]+2763975236&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^E)+y[4]+1272893353&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^p)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=p+(E^I^m)+y[10]+3200236656&4294967295,p=E+(g<<23&4294967295|g>>>9),g=m+(p^E^I)+y[13]+681279174&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^E)+y[0]+3936430074&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^p)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=p+(E^I^m)+y[6]+76029189&4294967295,p=E+(g<<23&4294967295|g>>>9),g=m+(p^E^I)+y[9]+3654602809&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^E)+y[12]+3873151461&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^p)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=p+(E^I^m)+y[2]+3299628645&4294967295,p=E+(g<<23&4294967295|g>>>9),g=m+(E^(p|~I))+y[0]+4096336452&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~E))+y[7]+1126891415&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~p))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=p+(I^(E|~m))+y[5]+4237533241&4294967295,p=E+(g<<21&4294967295|g>>>11),g=m+(E^(p|~I))+y[12]+1700485571&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~E))+y[3]+2399980690&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~p))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=p+(I^(E|~m))+y[1]+2240044497&4294967295,p=E+(g<<21&4294967295|g>>>11),g=m+(E^(p|~I))+y[8]+1873313359&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~E))+y[15]+4264355552&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~p))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=p+(I^(E|~m))+y[13]+1309151649&4294967295,p=E+(g<<21&4294967295|g>>>11),g=m+(E^(p|~I))+y[4]+4149444226&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~E))+y[11]+3174756917&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~p))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=p+(I^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}n.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var p=m-this.blockSize,y=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=p;)s(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<m;)if(y[E++]=T.charCodeAt(I++),E==this.blockSize){s(this,y),E=0;break}}else for(;I<m;)if(y[E++]=T[I++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=m},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var p=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=p&255,p/=256;for(this.u(T),T=Array(16),m=p=0;4>m;++m)for(var y=0;32>y;y+=8)T[p++]=this.g[m]>>>y&255;return T};function o(T,m){var p=h;return Object.prototype.hasOwnProperty.call(p,T)?p[T]:p[T]=m(T)}function u(T,m){this.h=m;for(var p=[],y=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;y&&I==m||(p[E]=I,y=!1)}this.g=p}var h={};function d(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return A;if(0>T)return D(f(-T));for(var m=[],p=1,y=0;T>=p;y++)m[y]=T/p|0,p*=4294967296;return new u(m,0)}function _(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return D(_(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=f(Math.pow(m,8)),y=A,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),g=parseInt(T.substring(E,E+I),m);8>I?(I=f(Math.pow(m,I)),y=y.j(I).add(f(g))):(y=y.j(p),y=y.add(f(g)))}return y}var A=d(0),R=d(1),S=d(16777216);r=u.prototype,r.m=function(){if(M(this))return-D(this).m();for(var T=0,m=1,p=0;p<this.g.length;p++){var y=this.i(p);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(M(this))return"-"+D(this).toString(T);for(var m=f(Math.pow(T,6)),p=this,y="";;){var E=rt(p,m).g;p=$(p,E.j(m));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(T);if(p=E,b(p))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function M(T){return T.h==-1}r.l=function(T){return T=$(this,T),M(T)?-1:b(T)?0:1};function D(T){for(var m=T.g.length,p=[],y=0;y<m;y++)p[y]=~T.g[y];return new u(p,~T.h).add(R)}r.abs=function(){return M(this)?D(this):this},r.add=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],y=0,E=0;E<=m;E++){var I=y+(this.i(E)&65535)+(T.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,p[E]=g<<16|I}return new u(p,p[p.length-1]&-2147483648?-1:0)};function $(T,m){return T.add(D(m))}r.j=function(T){if(b(this)||b(T))return A;if(M(this))return M(T)?D(this).j(D(T)):D(D(this).j(T));if(M(T))return D(this.j(D(T)));if(0>this.l(S)&&0>T.l(S))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,p=[],y=0;y<2*m;y++)p[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,Nt=T.i(E)>>>16,ke=T.i(E)&65535;p[2*y+2*E]+=g*ke,G(p,2*y+2*E),p[2*y+2*E+1]+=I*ke,G(p,2*y+2*E+1),p[2*y+2*E+1]+=g*Nt,G(p,2*y+2*E+1),p[2*y+2*E+2]+=I*Nt,G(p,2*y+2*E+2)}for(y=0;y<m;y++)p[y]=p[2*y+1]<<16|p[2*y];for(y=m;y<2*m;y++)p[y]=0;return new u(p,0)};function G(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function H(T,m){this.g=T,this.h=m}function rt(T,m){if(b(m))throw Error("division by zero");if(b(T))return new H(A,A);if(M(T))return m=rt(D(T),m),new H(D(m.g),D(m.h));if(M(m))return m=rt(T,D(m)),new H(D(m.g),m.h);if(30<T.g.length){if(M(T)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var p=R,y=m;0>=y.l(T);)p=bt(p),y=bt(y);var E=st(p,1),I=st(y,1);for(y=st(y,2),p=st(p,2);!b(y);){var g=I.add(y);0>=g.l(T)&&(E=E.add(p),I=g),y=st(y,1),p=st(p,1)}return m=$(T,E.j(m)),new H(E,m)}for(E=A;0<=T.l(m);){for(p=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(p)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(p),g=I.j(m);M(g)||0<g.l(T);)p-=y,I=f(p),g=I.j(m);b(I)&&(I=R),E=E.add(I),T=$(T,g)}return new H(E,T)}r.A=function(T){return rt(this,T).h},r.and=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)&T.i(y);return new u(p,this.h&T.h)},r.or=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)|T.i(y);return new u(p,this.h|T.h)},r.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)^T.i(y);return new u(p,this.h^T.h)};function bt(T){for(var m=T.g.length+1,p=[],y=0;y<m;y++)p[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(p,T.h)}function st(T,m){var p=m>>5;m%=32;for(var y=T.g.length-p,E=[],I=0;I<y;I++)E[I]=0<m?T.i(I+p)>>>m|T.i(I+p+1)<<32-m:T.i(I+p);return new u(E,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,yo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,se=u}).apply(typeof xs<"u"?xs:typeof self<"u"?self:typeof window<"u"?window:{});var Ln=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Eo,To,Xe,vo,Bn,$r,Io,wo,Ao;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ln=="object"&&Ln];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function s(i,a){if(a)t:{var l=n;i=i.split(".");for(var c=0;c<i.length-1;c++){var v=i[c];if(!(v in l))break t;l=l[v]}i=i[i.length-1],c=l[i],a=a(c),a!=c&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,c=!1,v={next:function(){if(!c&&l<i.length){var w=l++;return{value:a(w,i[w]),done:!1}}return c=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function d(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function _(i,a,l){return i.call.apply(i.bind,arguments)}function A(i,a,l){if(!i)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,c),i.apply(a,v)}}return function(){return i.apply(a,arguments)}}function R(i,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,R.apply(null,arguments)}function S(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var c=l.slice();return c.push.apply(c,arguments),i.apply(this,c)}}function b(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(c,v,w){for(var C=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)C[Q-2]=arguments[Q];return a.prototype[v].apply(c,C)}}function M(i){const a=i.length;if(0<a){const l=Array(a);for(let c=0;c<a;c++)l[c]=i[c];return l}return[]}function D(i,a){for(let l=1;l<arguments.length;l++){const c=arguments[l];if(d(c)){const v=i.length||0,w=c.length||0;i.length=v+w;for(let C=0;C<w;C++)i[v+C]=c[C]}else i.push(c)}}class ${constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function G(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=h.navigator;return i&&(i=i.userAgent)?i:""}function rt(i){return rt[" "](i),i}rt[" "]=function(){};var bt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function st(i,a,l){for(const c in i)a.call(l,i[c],c,i)}function T(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function m(i){const a={};for(const l in i)a[l]=i[l];return a}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let l,c;for(let v=1;v<arguments.length;v++){c=arguments[v];for(l in c)i[l]=c[l];for(let w=0;w<p.length;w++)l=p[w],Object.prototype.hasOwnProperty.call(c,l)&&(i[l]=c[l])}}function E(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function I(i){h.setTimeout(()=>{throw i},0)}function g(){var i=_r;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class Nt{constructor(){this.h=this.g=null}add(a,l){const c=ke.get();c.set(a,l),this.h?this.h.next=c:this.g=c,this.h=c}}var ke=new $(()=>new Ba,i=>i.reset());class Ba{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Ne=!1,_r=new Nt,Ni=()=>{const i=h.Promise.resolve(void 0);be=()=>{i.then(ja)}};var ja=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){I(l)}var a=ke;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Ne=!1};function Ft(){this.s=this.s,this.C=this.C}Ft.prototype.s=!1,Ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var za=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};h.addEventListener("test",l,a),h.removeEventListener("test",l,a)}catch{}return i}();function xe(i,a){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,c=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(bt){t:{try{rt(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ka[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&xe.aa.h.call(this)}}b(xe,ht);var Ka={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),$a=0;function Ga(i,a,l,c,v){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!c,this.ha=v,this.key=++$a,this.da=this.fa=!1}function En(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Tn(i){this.src=i,this.g={},this.h=0}Tn.prototype.add=function(i,a,l,c,v){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var C=Er(i,a,c,v);return-1<C?(a=i[C],l||(a.fa=!1)):(a=new Ga(a,this.src,w,!!c,v),a.fa=l,i.push(a)),a};function yr(i,a){var l=a.type;if(l in i.g){var c=i.g[l],v=Array.prototype.indexOf.call(c,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(c,v,1),w&&(En(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Er(i,a,l,c){for(var v=0;v<i.length;++v){var w=i[v];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==c)return v}return-1}var Tr="closure_lm_"+(1e6*Math.random()|0),vr={};function xi(i,a,l,c,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)xi(i,a[w],l,c,v);return null}return l=Oi(l),i&&i[yn]?i.K(a,l,f(c)?!!c.capture:!!c,v):Qa(i,a,l,!1,c,v)}function Qa(i,a,l,c,v,w){if(!a)throw Error("Invalid event type");var C=f(v)?!!v.capture:!!v,Q=wr(i);if(Q||(i[Tr]=Q=new Tn(i)),l=Q.add(a,l,c,C,w),l.proxy)return l;if(c=Ha(),l.proxy=c,c.src=i,c.listener=l,i.addEventListener)za||(v=C),v===void 0&&(v=!1),i.addEventListener(a.toString(),c,v);else if(i.attachEvent)i.attachEvent(Li(a.toString()),c);else if(i.addListener&&i.removeListener)i.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Ha(){function i(l){return a.call(i.src,i.listener,l)}const a=Wa;return i}function Mi(i,a,l,c,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)Mi(i,a[w],l,c,v);else c=f(c)?!!c.capture:!!c,l=Oi(l),i&&i[yn]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],l=Er(w,l,c,v),-1<l&&(En(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=wr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=Er(a,l,c,v)),(l=-1<i?a[i]:null)&&Ir(l))}function Ir(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[yn])yr(a.i,i);else{var l=i.type,c=i.proxy;a.removeEventListener?a.removeEventListener(l,c,i.capture):a.detachEvent?a.detachEvent(Li(l),c):a.addListener&&a.removeListener&&a.removeListener(c),(l=wr(a))?(yr(l,i),l.h==0&&(l.src=null,a[Tr]=null)):En(i)}}}function Li(i){return i in vr?vr[i]:vr[i]="on"+i}function Wa(i,a){if(i.da)i=!0;else{a=new xe(a,this);var l=i.listener,c=i.ha||i.src;i.fa&&Ir(i),i=l.call(c,a)}return i}function wr(i){return i=i[Tr],i instanceof Tn?i:null}var Ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oi(i){return typeof i=="function"?i:(i[Ar]||(i[Ar]=function(a){return i.handleEvent(a)}),i[Ar])}function ct(){Ft.call(this),this.i=new Tn(this),this.M=this,this.F=null}b(ct,Ft),ct.prototype[yn]=!0,ct.prototype.removeEventListener=function(i,a,l,c){Mi(this,i,a,l,c)};function yt(i,a){var l,c=i.F;if(c)for(l=[];c;c=c.F)l.push(c);if(i=i.M,c=a.type||a,typeof a=="string")a=new ht(a,i);else if(a instanceof ht)a.target=a.target||i;else{var v=a;a=new ht(c,i),y(a,v)}if(v=!0,l)for(var w=l.length-1;0<=w;w--){var C=a.g=l[w];v=vn(C,c,!0,a)&&v}if(C=a.g=i,v=vn(C,c,!0,a)&&v,v=vn(C,c,!1,a)&&v,l)for(w=0;w<l.length;w++)C=a.g=l[w],v=vn(C,c,!1,a)&&v}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],c=0;c<l.length;c++)En(l[c]);delete i.g[a],i.h--}}this.F=null},ct.prototype.K=function(i,a,l,c){return this.i.add(String(i),a,!1,l,c)},ct.prototype.L=function(i,a,l,c){return this.i.add(String(i),a,!0,l,c)};function vn(i,a,l,c){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var C=a[w];if(C&&!C.da&&C.capture==l){var Q=C.listener,ot=C.ha||C.src;C.fa&&yr(i.i,C),v=Q.call(ot,c)!==!1&&v}}return v&&!c.defaultPrevented}function Fi(i,a,l){if(typeof i=="function")l&&(i=R(i,l));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(i,a||0)}function Ui(i){i.g=Fi(()=>{i.g=null,i.i&&(i.i=!1,Ui(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class Xa extends Ft{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ui(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Me(i){Ft.call(this),this.h=i,this.g={}}b(Me,Ft);var qi=[];function Bi(i){st(i.g,function(a,l){this.g.hasOwnProperty(l)&&Ir(a)},i),i.g={}}Me.prototype.N=function(){Me.aa.N.call(this),Bi(this)},Me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rr=h.JSON.stringify,Ya=h.JSON.parse,Ja=class{stringify(i){return h.JSON.stringify(i,void 0)}parse(i){return h.JSON.parse(i,void 0)}};function Pr(){}Pr.prototype.h=null;function ji(i){return i.h||(i.h=i.i())}function zi(){}var Le={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vr(){ht.call(this,"d")}b(Vr,ht);function Sr(){ht.call(this,"c")}b(Sr,ht);var te={},Ki=null;function In(){return Ki=Ki||new ct}te.La="serverreachability";function $i(i){ht.call(this,te.La,i)}b($i,ht);function Oe(i){const a=In();yt(a,new $i(a))}te.STAT_EVENT="statevent";function Gi(i,a){ht.call(this,te.STAT_EVENT,i),this.stat=a}b(Gi,ht);function Et(i){const a=In();yt(a,new Gi(a,i))}te.Ma="timingevent";function Qi(i,a){ht.call(this,te.Ma,i),this.size=a}b(Qi,ht);function Fe(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){i()},a)}function Ue(){this.g=!0}Ue.prototype.xa=function(){this.g=!1};function Za(i,a,l,c,v,w){i.info(function(){if(i.g)if(w)for(var C="",Q=w.split("&"),ot=0;ot<Q.length;ot++){var j=Q[ot].split("=");if(1<j.length){var dt=j[0];j=j[1];var ft=dt.split("_");C=2<=ft.length&&ft[1]=="type"?C+(dt+"="+j+"&"):C+(dt+"=redacted&")}}else C=null;else C=w;return"XMLHTTP REQ ("+c+") [attempt "+v+"]: "+a+`
`+l+`
`+C})}function tu(i,a,l,c,v,w,C){i.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+v+"]: "+a+`
`+l+`
`+w+" "+C})}function de(i,a,l,c){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+nu(i,l)+(c?" "+c:"")})}function eu(i,a){i.info(function(){return"TIMEOUT: "+a})}Ue.prototype.info=function(){};function nu(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var c=l[i];if(!(2>c.length)){var v=c[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return Rr(l)}catch{return a}}var wn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cr;function An(){}b(An,Pr),An.prototype.g=function(){return new XMLHttpRequest},An.prototype.i=function(){return{}},Cr=new An;function Ut(i,a,l,c){this.j=i,this.i=a,this.l=l,this.R=c||1,this.U=new Me(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wi}function Wi(){this.i=null,this.g="",this.h=!1}var Xi={},Dr={};function kr(i,a,l){i.L=1,i.v=Sn(xt(a)),i.m=l,i.P=!0,Yi(i,null)}function Yi(i,a){i.F=Date.now(),Rn(i),i.A=xt(i.v);var l=i.A,c=i.R;Array.isArray(c)||(c=[String(c)]),cs(l.i,"t",c),i.C=0,l=i.j.J,i.h=new Wi,i.g=Cs(i.j,l?a:null,!i.m),0<i.O&&(i.M=new Xa(R(i.Y,i,i.g),i.O)),a=i.U,l=i.g,c=i.ca;var v="readystatechange";Array.isArray(v)||(v&&(qi[0]=v.toString()),v=qi);for(var w=0;w<v.length;w++){var C=xi(l,v[w],c||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Oe(),Za(i.i,i.u,i.A,i.l,i.R,i.m)}Ut.prototype.ca=function(i){i=i.target;const a=this.M;a&&Mt(i)==3?a.j():this.Y(i)},Ut.prototype.Y=function(i){try{if(i==this.g)t:{const ft=Mt(this.g);var a=this.g.Ba();const ge=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||ys(this.g)))){this.J||ft!=4||a==7||(a==8||0>=ge?Oe(3):Oe(2)),br(this);var l=this.g.Z();this.X=l;e:if(Ji(this)){var c=ys(this.g);i="";var v=c.length,w=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ee(this),qe(this);var C="";break e}this.h.i=new h.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,i+=this.h.i.decode(c[a],{stream:!(w&&a==v-1)});c.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,tu(this.i,this.u,this.A,this.l,this.R,ft,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ot=this.g;if((Q=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Q)){var j=Q;break e}}j=null}if(l=j)de(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nr(this,l);else{this.o=!1,this.s=3,Et(12),ee(this),qe(this);break t}}if(this.P){l=!0;let Rt;for(;!this.J&&this.C<C.length;)if(Rt=ru(this,C),Rt==Dr){ft==4&&(this.s=4,Et(14),l=!1),de(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==Xi){this.s=4,Et(15),de(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else de(this.i,this.l,Rt,null),Nr(this,Rt);if(Ji(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||C.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)de(this.i,this.l,C,"[Invalid Chunked Response]"),ee(this),qe(this);else if(0<C.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Ur(dt),dt.M=!0,Et(11))}}else de(this.i,this.l,C,null),Nr(this,C);ft==4&&ee(this),this.o&&!this.J&&(ft==4?Rs(this.j,this):(this.o=!1,Rn(this)))}else Tu(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ee(this),qe(this)}}}catch{}finally{}};function Ji(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function ru(i,a){var l=i.C,c=a.indexOf(`
`,l);return c==-1?Dr:(l=Number(a.substring(l,c)),isNaN(l)?Xi:(c+=1,c+l>a.length?Dr:(a=a.slice(c,c+l),i.C=c+l,a)))}Ut.prototype.cancel=function(){this.J=!0,ee(this)};function Rn(i){i.S=Date.now()+i.I,Zi(i,i.I)}function Zi(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Fe(R(i.ba,i),a)}function br(i){i.B&&(h.clearTimeout(i.B),i.B=null)}Ut.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(eu(this.i,this.A),this.L!=2&&(Oe(),Et(17)),ee(this),this.s=2,qe(this)):Zi(this,this.S-i)};function qe(i){i.j.G==0||i.J||Rs(i.j,i)}function ee(i){br(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Bi(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Nr(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||xr(l.h,i))){if(!i.K&&xr(l.h,i)&&l.G==3){try{var c=l.Da.g.parse(a)}catch{c=null}if(Array.isArray(c)&&c.length==3){var v=c;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Nn(l),kn(l);else break t;Fr(l),Et(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Fe(R(l.Za,l),6e3));if(1>=ns(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else re(l,11)}else if((i.K||l.g==i)&&Nn(l),!G(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let j=v[a];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const dt=j[3];dt!=null&&(l.la=dt,l.j.info("VER="+l.la));const ft=j[4];ft!=null&&(l.Aa=ft,l.j.info("SVER="+l.Aa));const ge=j[5];ge!=null&&typeof ge=="number"&&0<ge&&(c=1.5*ge,l.L=c,l.j.info("backChannelRequestTimeoutMs_="+c)),c=l;const Rt=i.g;if(Rt){const Mn=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mn){var w=c.h;w.g||Mn.indexOf("spdy")==-1&&Mn.indexOf("quic")==-1&&Mn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Mr(w,w.h),w.h=null))}if(c.D){const qr=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;qr&&(c.ya=qr,X(c.I,c.D,qr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),c=l;var C=i;if(c.qa=Ss(c,c.J?c.ia:null,c.W),C.K){rs(c.h,C);var Q=C,ot=c.L;ot&&(Q.I=ot),Q.B&&(br(Q),Rn(Q)),c.g=C}else ws(c);0<l.i.length&&bn(l)}else j[0]!="stop"&&j[0]!="close"||re(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?re(l,7):Or(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}Oe(4)}catch{}}var iu=class{constructor(i,a){this.g=i,this.map=a}};function ts(i){this.l=i||10,h.PerformanceNavigationTiming?(i=h.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function es(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ns(i){return i.h?1:i.g?i.g.size:0}function xr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Mr(i,a){i.g?i.g.add(a):i.h=a}function rs(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}ts.prototype.cancel=function(){if(this.i=is(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function is(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return M(i.i)}function su(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var a=[],l=i.length,c=0;c<l;c++)a.push(i[c]);return a}a=[],l=0;for(c in i)a[l++]=i[c];return a}function ou(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const c in i)a[l++]=c;return a}}}function ss(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=ou(i),c=su(i),v=c.length,w=0;w<v;w++)a.call(void 0,c[w],l&&l[w],i)}var os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function au(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var c=i[l].indexOf("="),v=null;if(0<=c){var w=i[l].substring(0,c);v=i[l].substring(c+1)}else w=i[l];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function ne(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ne){this.h=i.h,Pn(this,i.j),this.o=i.o,this.g=i.g,Vn(this,i.s),this.l=i.l;var a=i.i,l=new ze;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),as(this,l),this.m=i.m}else i&&(a=String(i).match(os))?(this.h=!1,Pn(this,a[1]||"",!0),this.o=Be(a[2]||""),this.g=Be(a[3]||"",!0),Vn(this,a[4]),this.l=Be(a[5]||"",!0),as(this,a[6]||"",!0),this.m=Be(a[7]||"")):(this.h=!1,this.i=new ze(null,this.h))}ne.prototype.toString=function(){var i=[],a=this.j;a&&i.push(je(a,us,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(je(a,us,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(je(l,l.charAt(0)=="/"?hu:lu,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",je(l,du)),i.join("")};function xt(i){return new ne(i)}function Pn(i,a,l){i.j=l?Be(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function Vn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function as(i,a,l){a instanceof ze?(i.i=a,fu(i.i,i.h)):(l||(a=je(a,cu)),i.i=new ze(a,i.h))}function X(i,a,l){i.i.set(a,l)}function Sn(i){return X(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Be(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function je(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,uu),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function uu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var us=/[#\/\?@]/g,lu=/[#\?:]/g,hu=/[#\?]/g,cu=/[#\?@]/g,du=/#/g;function ze(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function qt(i){i.g||(i.g=new Map,i.h=0,i.i&&au(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=ze.prototype,r.add=function(i,a){qt(this),this.i=null,i=fe(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function ls(i,a){qt(i),a=fe(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function hs(i,a){return qt(i),a=fe(i,a),i.g.has(a)}r.forEach=function(i,a){qt(this),this.g.forEach(function(l,c){l.forEach(function(v){i.call(a,v,c,this)},this)},this)},r.na=function(){qt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let c=0;c<a.length;c++){const v=i[c];for(let w=0;w<v.length;w++)l.push(a[c])}return l},r.V=function(i){qt(this);let a=[];if(typeof i=="string")hs(this,i)&&(a=a.concat(this.g.get(fe(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},r.set=function(i,a){return qt(this),this.i=null,i=fe(this,i),hs(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},r.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function cs(i,a,l){ls(i,a),0<l.length&&(i.i=null,i.g.set(fe(i,a),M(l)),i.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var c=a[l];const w=encodeURIComponent(String(c)),C=this.V(c);for(c=0;c<C.length;c++){var v=w;C[c]!==""&&(v+="="+encodeURIComponent(String(C[c]))),i.push(v)}}return this.i=i.join("&")};function fe(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function fu(i,a){a&&!i.j&&(qt(i),i.i=null,i.g.forEach(function(l,c){var v=c.toLowerCase();c!=v&&(ls(this,c),cs(this,v,l))},i)),i.j=a}function mu(i,a){const l=new Ue;if(h.Image){const c=new Image;c.onload=S(Bt,l,"TestLoadImage: loaded",!0,a,c),c.onerror=S(Bt,l,"TestLoadImage: error",!1,a,c),c.onabort=S(Bt,l,"TestLoadImage: abort",!1,a,c),c.ontimeout=S(Bt,l,"TestLoadImage: timeout",!1,a,c),h.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=i}else a(!1)}function gu(i,a){const l=new Ue,c=new AbortController,v=setTimeout(()=>{c.abort(),Bt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:c.signal}).then(w=>{clearTimeout(v),w.ok?Bt(l,"TestPingServer: ok",!0,a):Bt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Bt(l,"TestPingServer: error",!1,a)})}function Bt(i,a,l,c,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),c(l)}catch{}}function pu(){this.g=new Ja}function _u(i,a,l){const c=l||"";try{ss(i,function(v,w){let C=v;f(v)&&(C=Rr(v)),a.push(c+w+"="+encodeURIComponent(C))})}catch(v){throw a.push(c+"type="+encodeURIComponent("_badmap")),v}}function Ke(i){this.l=i.Ub||null,this.j=i.eb||!1}b(Ke,Pr),Ke.prototype.g=function(){return new Cn(this.l,this.j)},Ke.prototype.i=function(i){return function(){return i}}({});function Cn(i,a){ct.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Cn,ct),r=Cn.prototype,r.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,Ge(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$e(this)),this.readyState=0},r.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Ge(this)),this.g&&(this.readyState=3,Ge(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ds(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ds(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}r.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?$e(this):Ge(this),this.readyState==3&&ds(this)}},r.Ra=function(i){this.g&&(this.response=this.responseText=i,$e(this))},r.Qa=function(i){this.g&&(this.response=i,$e(this))},r.ga=function(){this.g&&$e(this)};function $e(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Ge(i)}r.setRequestHeader=function(i,a){this.u.append(i,a)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function Ge(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function fs(i){let a="";return st(i,function(l,c){a+=c,a+=":",a+=l,a+=`\r
`}),a}function Lr(i,a,l){t:{for(c in l){var c=!1;break t}c=!0}c||(l=fs(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):X(i,a,l))}function Z(i){ct.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Z,ct);var yu=/^https?$/i,Eu=["POST","PUT"];r=Z.prototype,r.Ha=function(i){this.J=i},r.ea=function(i,a,l,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cr.g(),this.v=this.o?ji(this.o):ji(Cr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){ms(this,w);return}if(i=l||"",l=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var v in c)l.set(v,c[v]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const w of c.keys())l.set(w,c.get(w));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=h.FormData&&i instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Eu,a,void 0))||c||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of l)this.g.setRequestHeader(w,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_s(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){ms(this,w)}};function ms(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,gs(i),Dn(i)}function gs(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,yt(this,"complete"),yt(this,"abort"),Dn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Dn(this,!0)),Z.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ps(this):this.bb())},r.bb=function(){ps(this)};function ps(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Mt(i)!=4||i.Z()!=2)){if(i.u&&Mt(i)==4)Fi(i.Ea,0,i);else if(yt(i,"readystatechange"),Mt(i)==4){i.h=!1;try{const C=i.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var c;if(c=C===0){var v=String(i.D).match(os)[1]||null;!v&&h.self&&h.self.location&&(v=h.self.location.protocol.slice(0,-1)),c=!yu.test(v?v.toLowerCase():"")}l=c}if(l)yt(i,"complete"),yt(i,"success");else{i.m=6;try{var w=2<Mt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",gs(i)}}finally{Dn(i)}}}}function Dn(i,a){if(i.g){_s(i);const l=i.g,c=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||yt(i,"ready");try{l.onreadystatechange=c}catch{}}}function _s(i){i.I&&(h.clearTimeout(i.I),i.I=null)}r.isActive=function(){return!!this.g};function Mt(i){return i.g?i.g.readyState:0}r.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),Ya(a)}};function ys(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Tu(i){const a={};i=(i.g&&2<=Mt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<i.length;c++){if(G(i[c]))continue;var l=E(i[c]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[v]||[];a[v]=w,w.push(l)}T(a,function(c){return c.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qe(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function Es(i){this.Aa=0,this.i=[],this.j=new Ue,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qe("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qe("baseRetryDelayMs",5e3,i),this.cb=Qe("retryDelaySeedMs",1e4,i),this.Wa=Qe("forwardChannelMaxRetries",2,i),this.wa=Qe("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new ts(i&&i.concurrentRequestLimit),this.Da=new pu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Es.prototype,r.la=8,r.G=1,r.connect=function(i,a,l,c){Et(0),this.W=i,this.H=a||{},l&&c!==void 0&&(this.H.OSID=l,this.H.OAID=c),this.F=this.X,this.I=Ss(this,null,this.W),bn(this)};function Or(i){if(Ts(i),i.G==3){var a=i.U++,l=xt(i.I);if(X(l,"SID",i.K),X(l,"RID",a),X(l,"TYPE","terminate"),He(i,l),a=new Ut(i,i.j,a),a.L=2,a.v=Sn(xt(l)),l=!1,h.navigator&&h.navigator.sendBeacon)try{l=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&h.Image&&(new Image().src=a.v,l=!0),l||(a.g=Cs(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Rn(a)}Vs(i)}function kn(i){i.g&&(Ur(i),i.g.cancel(),i.g=null)}function Ts(i){kn(i),i.u&&(h.clearTimeout(i.u),i.u=null),Nn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&h.clearTimeout(i.s),i.s=null)}function bn(i){if(!es(i.h)&&!i.s){i.s=!0;var a=i.Ga;be||Ni(),Ne||(be(),Ne=!0),_r.add(a,i),i.B=0}}function vu(i,a){return ns(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Fe(R(i.Ga,i,a),Ps(i,i.B)),i.B++,!0)}r.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const v=new Ut(this,this.j,i);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var c=this.i[l];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break e}c=void 0}if(c===void 0)break;if(a+=c,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Is(this,v,a),l=xt(this.I),X(l,"RID",i),X(l,"CVER",22),this.D&&X(l,"X-HTTP-Session-Id",this.D),He(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(fs(w)))+"&"+a:this.m&&Lr(l,this.m,w)),Mr(this.h,v),this.Ua&&X(l,"TYPE","init"),this.P?(X(l,"$req",a),X(l,"SID","null"),v.T=!0,kr(v,l,null)):kr(v,l,a),this.G=2}}else this.G==3&&(i?vs(this,i):this.i.length==0||es(this.h)||vs(this))};function vs(i,a){var l;a?l=a.l:l=i.U++;const c=xt(i.I);X(c,"SID",i.K),X(c,"RID",l),X(c,"AID",i.T),He(i,c),i.m&&i.o&&Lr(c,i.m,i.o),l=new Ut(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=Is(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Mr(i.h,l),kr(l,c,a)}function He(i,a){i.H&&st(i.H,function(l,c){X(a,c,l)}),i.l&&ss({},function(l,c){X(a,c,l)})}function Is(i,a,l){l=Math.min(i.i.length,l);var c=i.l?R(i.l.Na,i.l,i):null;t:{var v=i.i;let w=-1;for(;;){const C=["count="+l];w==-1?0<l?(w=v[0].g,C.push("ofs="+w)):w=0:C.push("ofs="+w);let Q=!0;for(let ot=0;ot<l;ot++){let j=v[ot].g;const dt=v[ot].map;if(j-=w,0>j)w=Math.max(0,v[ot].g-100),Q=!1;else try{_u(dt,C,"req"+j+"_")}catch{c&&c(dt)}}if(Q){c=C.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,c}function ws(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;be||Ni(),Ne||(be(),Ne=!0),_r.add(a,i),i.v=0}}function Fr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Fe(R(i.Fa,i),Ps(i,i.v)),i.v++,!0)}r.Fa=function(){if(this.u=null,As(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Fe(R(this.ab,this),i)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),kn(this),As(this))};function Ur(i){i.A!=null&&(h.clearTimeout(i.A),i.A=null)}function As(i){i.g=new Ut(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=xt(i.qa);X(a,"RID","rpc"),X(a,"SID",i.K),X(a,"AID",i.T),X(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&X(a,"TO",i.ja),X(a,"TYPE","xmlhttp"),He(i,a),i.m&&i.o&&Lr(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Sn(xt(a)),l.m=null,l.P=!0,Yi(l,i)}r.Za=function(){this.C!=null&&(this.C=null,kn(this),Fr(this),Et(19))};function Nn(i){i.C!=null&&(h.clearTimeout(i.C),i.C=null)}function Rs(i,a){var l=null;if(i.g==a){Nn(i),Ur(i),i.g=null;var c=2}else if(xr(i.h,a))l=a.D,rs(i.h,a),c=1;else return;if(i.G!=0){if(a.o)if(c==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=i.B;c=In(),yt(c,new Qi(c,l)),bn(i)}else ws(i);else if(v=a.s,v==3||v==0&&0<a.X||!(c==1&&vu(i,a)||c==2&&Fr(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),v){case 1:re(i,5);break;case 4:re(i,10);break;case 3:re(i,6);break;default:re(i,2)}}}function Ps(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function re(i,a){if(i.j.info("Error code "+a),a==2){var l=R(i.fb,i),c=i.Xa;const v=!c;c=new ne(c||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Pn(c,"https"),Sn(c),v?mu(c.toString(),l):gu(c.toString(),l)}else Et(2);i.G=0,i.l&&i.l.sa(a),Vs(i),Ts(i)}r.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Vs(i){if(i.G=0,i.ka=[],i.l){const a=is(i.h);(a.length!=0||i.i.length!=0)&&(D(i.ka,a),D(i.ka,i.i),i.h.i.length=0,M(i.i),i.i.length=0),i.l.ra()}}function Ss(i,a,l){var c=l instanceof ne?xt(l):new ne(l);if(c.g!="")a&&(c.g=a+"."+c.g),Vn(c,c.s);else{var v=h.location;c=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new ne(null);c&&Pn(w,c),a&&(w.g=a),v&&Vn(w,v),l&&(w.l=l),c=w}return l=i.D,a=i.ya,l&&a&&X(c,l,a),X(c,"VER",i.la),He(i,c),c}function Cs(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new Z(new Ke({eb:l})):new Z(i.pa),a.Ha(i.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ds(){}r=Ds.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function xn(){}xn.prototype.g=function(i,a){return new vt(i,a)};function vt(i,a){ct.call(this),this.g=new Es(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!G(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!G(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new me(this)}b(vt,ct),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Or(this.g)},vt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Rr(i),i=l);a.i.push(new iu(a.Ya++,i)),a.G==3&&bn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,Or(this.g),delete this.g,vt.aa.N.call(this)};function ks(i){Vr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}b(ks,Vr);function bs(){Sr.call(this),this.status=1}b(bs,Sr);function me(i){this.g=i}b(me,Ds),me.prototype.ua=function(){yt(this.g,"a")},me.prototype.ta=function(i){yt(this.g,new ks(i))},me.prototype.sa=function(i){yt(this.g,new bs)},me.prototype.ra=function(){yt(this.g,"b")},xn.prototype.createWebChannel=xn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Ao=function(){return new xn},wo=function(){return In()},Io=te,$r={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wn.NO_ERROR=0,wn.TIMEOUT=8,wn.HTTP_ERROR=6,Bn=wn,Hi.COMPLETE="complete",vo=Hi,zi.EventType=Le,Le.OPEN="a",Le.CLOSE="b",Le.ERROR="c",Le.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Xe=zi,To=Ke,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Eo=Z}).apply(typeof Ln<"u"?Ln:typeof self<"u"?self:typeof window<"u"?window:{});const Ms="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Se="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new Iu("@firebase/firestore");function We(){return ae.logLevel}function k(r,...t){if(ae.logLevel<=zt.DEBUG){const e=t.map(oi);ae.debug(`Firestore (${Se}): ${r}`,...e)}}function Lt(r,...t){if(ae.logLevel<=zt.ERROR){const e=t.map(oi);ae.error(`Firestore (${Se}): ${r}`,...e)}}function Te(r,...t){if(ae.logLevel<=zt.WARN){const e=t.map(oi);ae.warn(`Firestore (${Se}): ${r}`,...e)}}function oi(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(r="Unexpected state"){const t=`FIRESTORE (${Se}) INTERNAL ASSERTION FAILED: `+r;throw Lt(t),new Error(t)}function W(r,t){r||L()}function U(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Ru{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Lu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class Ou{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Fu{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=d=>this.i!==n?(n=this.i,e(d)):Promise.resolve();let o=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Gt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},h=d=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(d=>h(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?h(d):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Gt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string"),new Ro(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new gt(t)}}class Uu{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class qu{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Uu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ju{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string"),this.R=e.token,new Bu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=zu(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%t.length))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function ve(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return K.fromMillis(Date.now())}static fromDate(t){return K.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new K(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.timestamp=t}static fromTimestamp(t){return new O(t)}static min(){return new O(new K(0,0))}static max(){return new O(new K(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(),n===void 0?n=t.length-e:n>t.length-e&&L(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return sn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof sn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends sn{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const Ku=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends sn{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return Ku.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;s<t.length;){const h=t[s];if(h==="\\"){if(s+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=d,s+=2}else h==="`"?(u=!u,s++):h!=="."||u?(n+=h,s++):(o(),s++)}if(o(),u)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(Y.fromString(t))}static fromName(t){return new x(Y.fromString(t).popFirst(5))}static empty(){return new x(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new Y(t.slice()))}}function $u(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=O.fromTimestamp(n===1e9?new K(e+1,0):new K(e,n));return new Xt(s,x.empty(),t)}function Gu(r){return new Xt(r.readTime,r.key,-1)}class Xt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Xt(O.min(),x.empty(),-1)}static max(){return new Xt(O.max(),x.empty(),-1)}}function Qu(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Hu)throw r;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,n)=>{e(t)})}static reject(t){return new V((e,n)=>{n(t)})}static waitFor(t){return new V((e,n)=>{let s=0,o=0,u=!1;t.forEach(h=>{++s,h.next(()=>{++o,u&&o===s&&e()},d=>n(d))}),u=!0,o===s&&e()})}static or(t){let e=V.resolve(!1);for(const n of t)e=e.next(s=>s?V.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new V((n,s)=>{const o=t.length,u=new Array(o);let h=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{u[f]=_,++h,h===o&&n(u)},_=>s(_))}})}static doWhile(t,e){return new V((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function Xu(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function fn(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ai.oe=-1;function er(r){return r==null}function Gn(r){return r===0&&1/r==-1/0}function Yu(r){return typeof r=="number"&&Number.isInteger(r)&&!Gn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function he(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Vo(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new On(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new On(this.root,t,this.comparator,!1)}getReverseIterator(){return new On(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new On(this.root,t,this.comparator,!0)}}class On{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??at.RED,this.left=s??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new at(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return at.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,s,o){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Os(this.data.getIterator())}getIteratorFrom(t){return new Os(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class Os{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new It([])}unionWith(t){let e=new lt(ut.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new It(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ve(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new So("Invalid base64 string: "+o):o}}(t);return new _t(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new _t(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Ju=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(r){if(W(!!r),typeof r=="string"){let t=0;const e=Ju.exec(r);if(W(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:et(r.seconds),nanos:et(r.nanos)}}function et(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ue(r){return typeof r=="string"?_t.fromBase64String(r):_t.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function li(r){const t=r.mapValue.fields.__previous_value__;return ui(t)?li(t):t}function on(r){const t=Yt(r.mapValue.fields.__local_write_time__.timestampValue);return new K(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,e,n,s,o,u,h,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=f}}class an{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new an("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof an&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function le(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ui(r)?4:tl(r)?9007199254740991:10:L()}function Dt(r,t){if(r===t)return!0;const e=le(r);if(e!==le(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return on(r).isEqual(on(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Yt(s.timestampValue),h=Yt(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return ue(s.bytesValue).isEqual(ue(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return et(s.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(s.geoPointValue.longitude)===et(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return et(s.integerValue)===et(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=et(s.doubleValue),h=et(o.doubleValue);return u===h?Gn(u)===Gn(h):isNaN(u)&&isNaN(h)}return!1}(r,t);case 9:return ve(r.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:return function(s,o){const u=s.mapValue.fields||{},h=o.mapValue.fields||{};if(Ls(u)!==Ls(h))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(h[d]===void 0||!Dt(u[d],h[d])))return!1;return!0}(r,t);default:return L()}}function un(r,t){return(r.values||[]).find(e=>Dt(e,t))!==void 0}function Ie(r,t){if(r===t)return 0;const e=le(r),n=le(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(o,u){const h=et(o.integerValue||o.doubleValue),d=et(u.integerValue||u.doubleValue);return h<d?-1:h>d?1:h===d?0:isNaN(h)?isNaN(d)?0:-1:1}(r,t);case 3:return Fs(r.timestampValue,t.timestampValue);case 4:return Fs(on(r),on(t));case 5:return z(r.stringValue,t.stringValue);case 6:return function(o,u){const h=ue(o),d=ue(u);return h.compareTo(d)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const h=o.split("/"),d=u.split("/");for(let f=0;f<h.length&&f<d.length;f++){const _=z(h[f],d[f]);if(_!==0)return _}return z(h.length,d.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const h=z(et(o.latitude),et(u.latitude));return h!==0?h:z(et(o.longitude),et(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return function(o,u){const h=o.values||[],d=u.values||[];for(let f=0;f<h.length&&f<d.length;++f){const _=Ie(h[f],d[f]);if(_)return _}return z(h.length,d.length)}(r.arrayValue,t.arrayValue);case 10:return function(o,u){if(o===Fn.mapValue&&u===Fn.mapValue)return 0;if(o===Fn.mapValue)return 1;if(u===Fn.mapValue)return-1;const h=o.fields||{},d=Object.keys(h),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let A=0;A<d.length&&A<_.length;++A){const R=z(d[A],_[A]);if(R!==0)return R;const S=Ie(h[d[A]],f[_[A]]);if(S!==0)return S}return z(d.length,_.length)}(r.mapValue,t.mapValue);default:throw L()}}function Fs(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=Yt(r),n=Yt(t),s=z(e.seconds,n.seconds);return s!==0?s:z(e.nanos,n.nanos)}function we(r){return Gr(r)}function Gr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Yt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ue(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return x.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=Gr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of n)o?o=!1:s+=",",s+=`${u}:${Gr(e.fields[u])}`;return s+"}"}(r.mapValue):L()}function Qr(r){return!!r&&"integerValue"in r}function hi(r){return!!r&&"arrayValue"in r}function Us(r){return!!r&&"nullValue"in r}function qs(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function jn(r){return!!r&&"mapValue"in r}function Ze(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return he(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Ze(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ze(r.arrayValue.values[e]);return t}return Object.assign({},r)}function tl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.value=t}static empty(){return new Tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!jn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ze(e)}setAll(t){let e=ut.emptyPath(),n={},s=[];t.forEach((u,h)=>{if(!e.isImmediateParentOf(h)){const d=this.getFieldsMap(e);this.applyChanges(d,n,s),n={},s=[],e=h.popLast()}u?n[h.lastSegment()]=Ze(u):s.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());jn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];jn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){he(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new Tt(Ze(this.value))}}function Co(r){const t=[];return he(r.fields,(e,n)=>{const s=new ut([e]);if(jn(n)){const o=Co(n.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new It(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e,n,s,o,u,h){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(t){return new pt(t,0,O.min(),O.min(),O.min(),Tt.empty(),0)}static newFoundDocument(t,e,n,s){return new pt(t,1,e,O.min(),n,s,0)}static newNoDocument(t,e){return new pt(t,2,e,O.min(),O.min(),Tt.empty(),0)}static newUnknownDocument(t,e){return new pt(t,3,e,O.min(),O.min(),Tt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e){this.position=t,this.inclusive=e}}function Bs(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],u=r.position[s];if(o.field.isKeyField()?n=x.comparator(x.fromName(u.referenceValue),e.key):n=Ie(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function js(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Dt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e="asc"){this.field=t,this.dir=e}}function el(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{}class nt extends Do{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new rl(t,e,n):e==="array-contains"?new ol(t,n):e==="in"?new al(t,n):e==="not-in"?new ul(t,n):e==="array-contains-any"?new ll(t,n):new nt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new il(t,n):new sl(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ie(e,this.value)):e!==null&&le(this.value)===le(e)&&this.matchesComparison(Ie(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends Do{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new kt(t,e)}matches(t){return ko(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ko(r){return r.op==="and"}function bo(r){return nl(r)&&ko(r)}function nl(r){for(const t of r.filters)if(t instanceof kt)return!1;return!0}function Hr(r){if(r instanceof nt)return r.field.canonicalString()+r.op.toString()+we(r.value);if(bo(r))return r.filters.map(t=>Hr(t)).join(",");{const t=r.filters.map(e=>Hr(e)).join(",");return`${r.op}(${t})`}}function No(r,t){return r instanceof nt?function(n,s){return s instanceof nt&&n.op===s.op&&n.field.isEqual(s.field)&&Dt(n.value,s.value)}(r,t):r instanceof kt?function(n,s){return s instanceof kt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,u,h)=>o&&No(u,s.filters[h]),!0):!1}(r,t):void L()}function xo(r){return r instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${we(e.value)}`}(r):r instanceof kt?function(e){return e.op.toString()+" {"+e.getFilters().map(xo).join(" ,")+"}"}(r):"Filter"}class rl extends nt{constructor(t,e,n){super(t,e,n),this.key=x.fromName(n.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class il extends nt{constructor(t,e){super(t,"in",e),this.keys=Mo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class sl extends nt{constructor(t,e){super(t,"not-in",e),this.keys=Mo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Mo(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>x.fromName(n.referenceValue))}class ol extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return hi(e)&&un(e.arrayValue,this.value)}}class al extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&un(this.value.arrayValue,e)}}class ul extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!un(this.value.arrayValue,e)}}class ll extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!hi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>un(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,e=null,n=[],s=[],o=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=u,this.endAt=h,this.ue=null}}function zs(r,t=null,e=[],n=[],s=null,o=null,u=null){return new hl(r,t,e,n,s,o,u)}function ci(r){const t=U(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Hr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),er(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>we(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>we(n)).join(",")),t.ue=e}return t.ue}function di(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!el(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!No(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!js(r.startAt,t.startAt)&&js(r.endAt,t.endAt)}function Wr(r){return x.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e=null,n=[],s=[],o=null,u="F",h=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cl(r,t,e,n,s,o,u,h){return new nr(r,t,e,n,s,o,u,h)}function Lo(r){return new nr(r)}function Ks(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function dl(r){return r.collectionGroup!==null}function tn(r){const t=U(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new lt(ut.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(h=h.add(f.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Hn(o,n))}),e.has(ut.keyField().canonicalString())||t.ce.push(new Hn(ut.keyField(),n))}return t.ce}function Pt(r){const t=U(r);return t.le||(t.le=fl(t,tn(r))),t.le}function fl(r,t){if(r.limitType==="F")return zs(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Hn(s.field,o)});const e=r.endAt?new Qn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Qn(r.startAt.position,r.startAt.inclusive):null;return zs(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Xr(r,t,e){return new nr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function rr(r,t){return di(Pt(r),Pt(t))&&r.limitType===t.limitType}function Oo(r){return`${ci(Pt(r))}|lt:${r.limitType}`}function pe(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>xo(s)).join(", ")}]`),er(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>we(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>we(s)).join(",")),`Target(${n})`}(Pt(r))}; limitType=${r.limitType})`}function ir(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):x.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of tn(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(u,h,d){const f=Bs(u,h,d);return u.inclusive?f<=0:f<0}(n.startAt,tn(n),s)||n.endAt&&!function(u,h,d){const f=Bs(u,h,d);return u.inclusive?f>=0:f>0}(n.endAt,tn(n),s))}(r,t)}function ml(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Fo(r){return(t,e)=>{let n=!1;for(const s of tn(r)){const o=gl(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function gl(r,t,e){const n=r.field.isKeyField()?x.comparator(t.key,e.key):function(o,u,h){const d=u.data.field(o),f=h.data.field(o);return d!==null&&f!==null?Ie(d,f):L()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){he(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return Vo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new J(x.comparator);function Ot(){return pl}const Uo=new J(x.comparator);function Ye(...r){let t=Uo;for(const e of r)t=t.insert(e.key,e);return t}function qo(r){let t=Uo;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ie(){return en()}function Bo(){return en()}function en(){return new Ce(r=>r.toString(),(r,t)=>r.isEqual(t))}const _l=new J(x.comparator),yl=new lt(x.comparator);function q(...r){let t=yl;for(const e of r)t=t.add(e);return t}const El=new lt(z);function Tl(){return El}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gn(t)?"-0":t}}function zo(r){return{integerValue:""+r}}function vl(r,t){return Yu(t)?zo(t):jo(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this._=void 0}}function Il(r,t,e){return r instanceof Wn?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ui(o)&&(o=li(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof ln?$o(r,t):r instanceof hn?Go(r,t):function(s,o){const u=Ko(s,o),h=$s(u)+$s(s.Pe);return Qr(u)&&Qr(s.Pe)?zo(h):jo(s.serializer,h)}(r,t)}function wl(r,t,e){return r instanceof ln?$o(r,t):r instanceof hn?Go(r,t):e}function Ko(r,t){return r instanceof Xn?function(n){return Qr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Wn extends sr{}class ln extends sr{constructor(t){super(),this.elements=t}}function $o(r,t){const e=Qo(t);for(const n of r.elements)e.some(s=>Dt(s,n))||e.push(n);return{arrayValue:{values:e}}}class hn extends sr{constructor(t){super(),this.elements=t}}function Go(r,t){let e=Qo(t);for(const n of r.elements)e=e.filter(s=>!Dt(s,n));return{arrayValue:{values:e}}}class Xn extends sr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function $s(r){return et(r.integerValue||r.doubleValue)}function Qo(r){return hi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Al(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof ln&&s instanceof ln||n instanceof hn&&s instanceof hn?ve(n.elements,s.elements,Dt):n instanceof Xn&&s instanceof Xn?Dt(n.Pe,s.Pe):n instanceof Wn&&s instanceof Wn}(r.transform,t.transform)}class Rl{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function zn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class or{}function Ho(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Xo(r.key,Vt.none()):new mn(r.key,r.data,Vt.none());{const e=r.data,n=Tt.empty();let s=new lt(ut.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),s=s.add(o)}return new Zt(r.key,n,new It(s.toArray()),Vt.none())}}function Pl(r,t,e){r instanceof mn?function(s,o,u){const h=s.value.clone(),d=Qs(s.fieldTransforms,o,u.transformResults);h.setAll(d),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):r instanceof Zt?function(s,o,u){if(!zn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const h=Qs(s.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Wo(s)),d.setAll(h),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(r,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function nn(r,t,e,n){return r instanceof mn?function(o,u,h,d){if(!zn(o.precondition,u))return h;const f=o.value.clone(),_=Hs(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof Zt?function(o,u,h,d){if(!zn(o.precondition,u))return h;const f=Hs(o.fieldTransforms,d,u),_=u.data;return _.setAll(Wo(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,h){return zn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(r,t,e)}function Vl(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),o=Ko(n.transform,s||null);o!=null&&(e===null&&(e=Tt.empty()),e.set(n.field,o))}return e||null}function Gs(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ve(n,s,(o,u)=>Al(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class mn extends or{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zt extends or{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Wo(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Qs(r,t,e){const n=new Map;W(r.length===e.length);for(let s=0;s<e.length;s++){const o=r[s],u=o.transform,h=t.data.field(o.field);n.set(o.field,wl(u,h,e[s]))}return n}function Hs(r,t,e){const n=new Map;for(const s of r){const o=s.transform,u=e.data.field(s.field);n.set(s.field,Il(o,u,t))}return n}class Xo extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sl extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Pl(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=nn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=nn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Bo();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=e.has(s.key)?null:h;const d=Ho(u,h);d!==null&&n.set(s.key,d),u.isValidDocument()||u.convertToNoDocument(O.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&ve(this.mutations,t.mutations,(e,n)=>Gs(e,n))&&ve(this.baseMutations,t.baseMutations,(e,n)=>Gs(e,n))}}class fi{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){W(t.mutations.length===n.length);let s=function(){return _l}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,n[u].version);return new fi(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,B;function bl(r){switch(r){default:return L();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Yo(r){if(r===void 0)return Lt("GRPC error has no .code"),P.UNKNOWN;switch(r){case tt.OK:return P.OK;case tt.CANCELLED:return P.CANCELLED;case tt.UNKNOWN:return P.UNKNOWN;case tt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case tt.INTERNAL:return P.INTERNAL;case tt.UNAVAILABLE:return P.UNAVAILABLE;case tt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case tt.NOT_FOUND:return P.NOT_FOUND;case tt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case tt.ABORTED:return P.ABORTED;case tt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case tt.DATA_LOSS:return P.DATA_LOSS;default:return L()}}(B=tt||(tt={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new se([4294967295,4294967295],0);function Ws(r){const t=Nl().encode(r),e=new yo;return e.update(t),new Uint8Array(e.digest())}function Xs(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new se([e,n],0),new se([s,o],0)]}class mi{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Je(`Invalid padding: ${e}`);if(n<0)throw new Je(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Je(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Je(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=se.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(se.fromNumber(n)));return s.compare(xl)===1&&(s=new se([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ws(t),[n,s]=Xs(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new mi(o,s,e);return n.forEach(h=>u.insert(h)),u}insert(t){if(this.Ie===0)return;const e=Ws(t),[n,s]=Xs(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Je extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,gn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ar(O.min(),s,new J(z),Ot(),q())}}class gn{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new gn(n,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class Jo{constructor(t,e){this.targetId=t,this.me=e}}class Zo{constructor(t,e,n=_t.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Ys{constructor(){this.fe=0,this.ge=Zs(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=q(),e=q(),n=q();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:L()}}),new gn(this.pe,this.ye,t,e,n)}ve(){this.we=!1,this.ge=Zs()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ml{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ot(),this.qe=Js(),this.Qe=new J(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Wr(o))if(n===0){const u=new x(o.path);this.Ue(e,u,pt.newNoDocument(u,O.min()))}else W(n===1);else{const u=this.Ye(e);if(u!==n){const h=this.Ze(t),d=h?this.Xe(h,t,u):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let u,h;try{u=ue(n).toUint8Array()}catch(d){if(d instanceof So)return Te("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{h=new mi(u,s,o)}catch(d){return Te(d instanceof Je?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return h.Ie===0?null:h}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const u=this.Le.tt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const h=this.Je(u);if(h){if(o.current&&Wr(h.target)){const d=new x(h.target.path);this.ke.get(d)!==null||this.it(u,d)||this.Ue(u,d,pt.newNoDocument(d,t))}o.be&&(e.set(u,o.Ce()),o.ve())}});let n=q();this.qe.forEach((o,u)=>{let h=!0;u.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new ar(t,e,this.Qe,this.ke,n);return this.ke=Ot(),this.qe=Js(),this.Qe=new J(z),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ys,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new lt(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ys),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Js(){return new J(x.comparator)}function Zs(){return new J(x.comparator)}const Ll={asc:"ASCENDING",desc:"DESCENDING"},Ol={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fl={and:"AND",or:"OR"};class Ul{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Yr(r,t){return r.useProto3Json||er(t)?t:{value:t}}function Yn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ta(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function ql(r,t){return Yn(r,t.toTimestamp())}function St(r){return W(!!r),O.fromTimestamp(function(e){const n=Yt(e);return new K(n.seconds,n.nanos)}(r))}function gi(r,t){return Jr(r,t).canonicalString()}function Jr(r,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function ea(r){const t=Y.fromString(r);return W(oa(t)),t}function Zr(r,t){return gi(r.databaseId,t.path)}function Br(r,t){const e=ea(t);if(e.get(1)!==r.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new x(ra(e))}function na(r,t){return gi(r.databaseId,t)}function Bl(r){const t=ea(r);return t.length===4?Y.emptyPath():ra(t)}function ti(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ra(r){return W(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function to(r,t,e){return{name:Zr(r,t),fields:e.value.mapValue.fields}}function jl(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(W(_===void 0||typeof _=="string"),_t.fromBase64String(_||"")):(W(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),_t.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,h=u&&function(f){const _=f.code===void 0?P.UNKNOWN:Yo(f.code);return new N(_,f.message||"")}(u);e=new Zo(n,s,o,h||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Br(r,n.document.name),o=St(n.document.updateTime),u=n.document.createTime?St(n.document.createTime):O.min(),h=new Tt({mapValue:{fields:n.document.fields}}),d=pt.newFoundDocument(s,o,u,h),f=n.targetIds||[],_=n.removedTargetIds||[];e=new Kn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Br(r,n.document),o=n.readTime?St(n.readTime):O.min(),u=pt.newNoDocument(s,o),h=n.removedTargetIds||[];e=new Kn([],h,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Br(r,n.document),o=n.removedTargetIds||[];e=new Kn([],o,s,null)}else{if(!("filter"in t))return L();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,u=new kl(s,o),h=n.targetId;e=new Jo(h,u)}}return e}function zl(r,t){let e;if(t instanceof mn)e={update:to(r,t.key,t.value)};else if(t instanceof Xo)e={delete:Zr(r,t.key)};else if(t instanceof Zt)e={update:to(r,t.key,t.data),updateMask:Jl(t.fieldMask)};else{if(!(t instanceof Sl))return L();e={verify:Zr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const h=u.transform;if(h instanceof Wn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof ln)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof hn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Xn)return{fieldPath:u.field.canonicalString(),increment:h.Pe};throw L()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:ql(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(r,t.precondition)),e}function Kl(r,t){return r&&r.length>0?(W(t!==void 0),r.map(e=>function(s,o){let u=s.updateTime?St(s.updateTime):St(o);return u.isEqual(O.min())&&(u=St(o)),new Rl(u,s.transformResults||[])}(e,t))):[]}function $l(r,t){return{documents:[na(r,t.path)]}}function Gl(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=na(r,s);const o=function(f){if(f.length!==0)return sa(kt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:_e(R.field),direction:Wl(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const h=Yr(r,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function Ql(r){let t=Bl(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){W(n===1);const _=e.from[0];_.allDescendants?s=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const R=ia(A);return R instanceof kt&&bo(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(b){return new Hn(ye(b.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(R))}(e.orderBy));let h=null;e.limit&&(h=function(A){let R;return R=typeof A=="object"?A.value:A,er(R)?null:R}(e.limit));let d=null;e.startAt&&(d=function(A){const R=!!A.before,S=A.values||[];return new Qn(S,R)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const R=!A.before,S=A.values||[];return new Qn(S,R)}(e.endAt)),cl(t,s,u,o,h,"F",d,f)}function Hl(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ia(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ye(e.unaryFilter.field);return nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ye(e.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ye(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ye(e.unaryFilter.field);return nt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(r):r.fieldFilter!==void 0?function(e){return nt.create(ye(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return kt.create(e.compositeFilter.filters.map(n=>ia(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(r):L()}function Wl(r){return Ll[r]}function Xl(r){return Ol[r]}function Yl(r){return Fl[r]}function _e(r){return{fieldPath:r.canonicalString()}}function ye(r){return ut.fromServerFormat(r.fieldPath)}function sa(r){return r instanceof nt?function(e){if(e.op==="=="){if(qs(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NAN"}};if(Us(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qs(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NOT_NAN"}};if(Us(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_e(e.field),op:Xl(e.op),value:e.value}}}(r):r instanceof kt?function(e){const n=e.getFilters().map(s=>sa(s));return n.length===1?n[0]:{compositeFilter:{op:Yl(e.op),filters:n}}}(r):L()}function Jl(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function oa(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e,n,s,o=O.min(),u=O.min(),h=_t.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=d}withSequenceNumber(t){return new Kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t){this.ct=t}}function th(r){const t=Ql({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Xr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this._n=new nh}addToCollectionParentIndex(t,e){return this._n.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Xt.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Xt.min())}updateCollectionGroup(t,e,n){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class nh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new lt(Y.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new lt(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ae(0)}static Ln(){return new Ae(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.changes=new Ce(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?V.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&nn(n.mutation,s,It.empty(),K.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=q()){const s=ie();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let u=Ye();return o.forEach((h,d)=>{u=u.insert(h,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=ie();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,q()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,h)=>{e.set(u,h)})})}computeViews(t,e,n,s){let o=Ot();const u=en(),h=function(){return en()}();return e.forEach((d,f)=>{const _=n.get(f.key);s.has(f.key)&&(_===void 0||_.mutation instanceof Zt)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),nn(_.mutation,f,_.mutation.getFieldMask(),K.now())):u.set(f.key,It.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var A;return h.set(f,new ih(_,(A=u.get(f))!==null&&A!==void 0?A:null))}),h))}recalculateAndSaveOverlays(t,e){const n=en();let s=new J((u,h)=>u-h),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const h of u)h.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=n.get(d)||It.empty();_=h.applyToLocalView(f,_),n.set(d,_);const A=(s.get(h.batchId)||q()).add(d);s=s.insert(h.batchId,A)})}).next(()=>{const u=[],h=s.getReverseIterator();for(;h.hasNext();){const d=h.getNext(),f=d.key,_=d.value,A=Bo();_.forEach(R=>{if(!o.has(R)){const S=Ho(e.get(R),n.get(R));S!==null&&A.set(R,S),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return V.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(u){return x.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):dl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):V.resolve(ie());let h=-1,d=o;return u.next(f=>V.forEach(f,(_,A)=>(h<A.largestBatchId&&(h=A.largestBatchId),o.get(_)?V.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{d=d.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,q())).next(_=>({batchId:h,changes:qo(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(n=>{let s=Ye();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let u=Ye();return this.indexManager.getCollectionParents(t,o).next(h=>V.forEach(h,d=>{const f=function(A,R){return new nr(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,s).next(_=>{_.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(u=>{o.forEach((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,pt.newInvalidDocument(_)))});let h=Ye();return u.forEach((d,f)=>{const _=o.get(d);_!==void 0&&nn(_.mutation,f,It.empty(),K.now()),ir(e,f)&&(h=h.insert(d,f))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return V.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:St(s.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:th(s.bundledQuery),readTime:St(s.readTime)}}(e)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.overlays=new J(x.comparator),this.hr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ie();return V.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.ht(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.hr.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(n)),V.resolve()}getOverlaysForCollection(t,e,n){const s=ie(),o=e.length+1,u=new x(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const d=h.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>n&&s.set(d.getKey(),d)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new J((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let _=o.get(f.largestBatchId);_===null&&(_=ie(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const h=ie(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>h.set(f,_)),!(h.size()>=s)););return V.resolve(h)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const u=this.hr.get(s.largestBatchId).delete(n.key);this.hr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Dl(e,n));let o=this.hr.get(e);o===void 0&&(o=q(),this.hr.set(e,o)),this.hr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.Pr=new lt(it.Ir),this.Tr=new lt(it.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new it(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Ar(new it(t,e))}Rr(t,e){t.forEach(n=>this.removeReference(n,e))}Vr(t){const e=new x(new Y([])),n=new it(e,t),s=new it(e,t+1),o=[];return this.Tr.forEachInRange([n,s],u=>{this.Ar(u),o.push(u.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new x(new Y([])),n=new it(e,t),s=new it(e,t+1);let o=q();return this.Tr.forEachInRange([n,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new it(t,0),n=this.Pr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class it{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return x.comparator(t.key,e.key)||z(t.pr,e.pr)}static Er(t,e){return z(t.pr,e.pr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new lt(it.Ir)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Cl(o,e,n,s);this.mutationQueue.push(u);for(const h of s)this.wr=this.wr.add(new it(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return V.resolve(u)}lookupMutationBatch(t,e){return V.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.br(n),o=s<0?0:s;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([n,s],u=>{const h=this.Sr(u.pr);o.push(h)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new lt(z);return e.forEach(s=>{const o=new it(s,0),u=new it(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,u],h=>{n=n.add(h.pr)})}),V.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;x.isDocumentKey(o)||(o=o.child(""));const u=new it(new x(o),0);let h=new lt(z);return this.wr.forEachWhile(d=>{const f=d.key.path;return!!n.isPrefixOf(f)&&(f.length===s&&(h=h.add(d.pr)),!0)},u),V.resolve(this.Dr(h))}Dr(t){const e=[];return t.forEach(n=>{const s=this.Sr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){W(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.wr;return V.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=n})}Mn(t){}containsKey(t,e){const n=new it(e,0),s=this.wr.firstAfterOrEqual(n);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.vr=t,this.docs=function(){return new J(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,u=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return V.resolve(n?n.document.mutableCopy():pt.newInvalidDocument(e))}getEntries(t,e){let n=Ot();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():pt.newInvalidDocument(s))}),V.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=Ot();const u=e.path,h=new x(u.child("")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Qu(Gu(_),n)<=0||(s.has(_.key)||ir(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,n,s){L()}Fr(t,e){return V.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new hh(this)}getSize(t){return V.resolve(this.size)}}class hh extends rh{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(n)}),V.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t){this.persistence=t,this.Mr=new Ce(e=>ci(e),di),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Or=0,this.Nr=new pi,this.targetCount=0,this.Lr=Ae.Nn()}forEachTarget(t,e){return this.Mr.forEach((n,s)=>e(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),V.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Ae(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.qn(e),V.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.Mr.forEach((u,h)=>{h.sequenceNumber<=e&&n.get(h.targetId)===null&&(this.Mr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),s++)}),V.waitFor(o).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return V.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),V.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return V.resolve(n)}containsKey(t,e){return V.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,e){this.Br={},this.overlays={},this.kr=new ai(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new ch(this),this.indexManager=new eh,this.remoteDocumentCache=function(s){return new lh(s)}(n=>this.referenceDelegate.Kr(n)),this.serializer=new Zl(e),this.$r=new oh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ah,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new uh(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){k("MemoryPersistence","Starting transaction:",t);const s=new fh(this.kr.next());return this.referenceDelegate.Ur(),n(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return V.or(Object.values(this.Br).map(n=>()=>n.containsKey(t,e)))}}class fh extends Wu{constructor(t){super(),this.currentSequenceNumber=t}}class _i{constructor(t){this.persistence=t,this.zr=new pi,this.jr=null}static Hr(t){return new _i(t)}get Jr(){if(this.jr)return this.jr;throw L()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),V.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),V.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,n=>{const s=x.fromPath(n);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,O.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(n=>{n?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return V.or([()=>V.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=s}static Ki(t,e){let n=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new yi(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return ku()?8:Xu(bu())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.ji(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Hi(t,e,s,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new mh;return this.Ji(t,e,u).next(h=>{if(o.result=h,this.Ui)return this.Yi(t,e,u,h.size)})}).next(()=>o.result)}Yi(t,e,n,s){return n.documentReadCount<this.Wi?(We()<=zt.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(We()<=zt.DEBUG&&k("QueryEngine","Query:",pe(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Gi*s?(We()<=zt.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pt(e))):V.resolve())}ji(t,e){if(Ks(e))return V.resolve(null);let n=Pt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Xr(e,null,"F"),n=Pt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=q(...o);return this.zi.getDocuments(t,u).next(h=>this.indexManager.getMinOffset(t,n).next(d=>{const f=this.Zi(e,h);return this.Xi(e,f,u,d.readTime)?this.ji(t,Xr(e,null,"F")):this.es(t,f,e,d)}))})))}Hi(t,e,n,s){return Ks(e)||s.isEqual(O.min())?V.resolve(null):this.zi.getDocuments(t,n).next(o=>{const u=this.Zi(e,o);return this.Xi(e,u,n,s)?V.resolve(null):(We()<=zt.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pe(e)),this.es(t,u,e,$u(s,-1)).next(h=>h))})}Zi(t,e){let n=new lt(Fo(t));return e.forEach((s,o)=>{ir(t,o)&&(n=n.add(o))}),n}Xi(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,n){return We()<=zt.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",pe(e)),this.zi.getDocumentsMatchingQuery(t,e,Xt.min(),n)}es(t,e,n,s){return this.zi.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(t,e,n,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new J(z),this.rs=new Ce(o=>ci(o),di),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new sh(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function _h(r,t,e,n){return new ph(r,t,e,n)}async function aa(r,t){const e=U(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],h=[];let d=q();for(const f of s){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){h.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(n,d).next(f=>({us:f,removedBatchIds:u,addedBatchIds:h}))})})}function yh(r,t){const e=U(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(h,d,f,_){const A=f.batch,R=A.keys();let S=V.resolve();return R.forEach(b=>{S=S.next(()=>_.getEntry(d,b)).next(M=>{const D=f.docVersions.get(b);W(D!==null),M.version.compareTo(D)<0&&(A.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),_.addEntry(M)))})}),S.next(()=>h.mutationQueue.removeMutationBatch(d,A))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(h){let d=q();for(let f=0;f<h.mutationResults.length;++f)h.mutationResults[f].transformResults.length>0&&(d=d.add(h.batch.mutations[f].key));return d}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function ua(r){const t=U(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Eh(r,t){const e=U(r),n=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const h=[];t.targetChanges.forEach((_,A)=>{const R=s.get(A);if(!R)return;h.push(e.Qr.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.Qr.addMatchingKeys(o,_.addedDocuments,A)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?S=S.withResumeToken(_t.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,n)),s=s.insert(A,S),function(M,D,$){return M.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(R,S,_)&&h.push(e.Qr.updateTargetData(o,S))});let d=Ot(),f=q();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),h.push(Th(o,u,t.documentUpdates).next(_=>{d=_.cs,f=_.ls})),!n.isEqual(O.min())){const _=e.Qr.getLastRemoteSnapshotVersion(o).next(A=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,n));h.push(_)}return V.waitFor(h).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.ns=s,o))}function Th(r,t,e){let n=q(),s=q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Ot();return e.forEach((h,d)=>{const f=o.get(h);d.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(h)),d.isNoDocument()&&d.version.isEqual(O.min())?(t.removeEntry(h,d.readTime),u=u.insert(h,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(h,d)):k("LocalStore","Ignoring outdated watch update for ",h,". Current version:",f.version," Watch version:",d.version)}),{cs:u,ls:s}})}function vh(r,t){const e=U(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Ih(r,t){const e=U(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Qr.getTargetData(n,t).next(o=>o?(s=o,V.resolve(s)):e.Qr.allocateTargetId(n).next(u=>(s=new Kt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Qr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.ns.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(n.targetId,n),e.rs.set(t,n.targetId)),n})}async function ei(r,t,e){const n=U(r),s=n.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!fn(u))throw u;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.ns=n.ns.remove(t),n.rs.delete(s.target)}function eo(r,t,e){const n=U(r);let s=O.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",u=>function(d,f,_){const A=U(d),R=A.rs.get(_);return R!==void 0?V.resolve(A.ns.get(R)):A.Qr.getTargetData(f,_)}(n,u,Pt(t)).next(h=>{if(h)return s=h.lastLimboFreeSnapshotVersion,n.Qr.getMatchingKeysForTargetId(u,h.targetId).next(d=>{o=d})}).next(()=>n.ts.getDocumentsMatchingQuery(u,t,e?s:O.min(),e?o:q())).next(h=>(wh(n,ml(t),h),{documents:h,hs:o})))}function wh(r,t,e){let n=r.ss.get(t)||O.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.ss.set(t,n)}class no{constructor(){this.activeTargetIds=Tl()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ah{constructor(){this.no=new no,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new no,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un=null;function jr(){return Un===null?Un=function(){return 268435456+Math.round(2147483648*Math.random())}():Un++,"0x"+Un.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class Sh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=n+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,n,s,o,u){const h=jr(),d=this.vo(e,n.toUriEncodedString());k("RestConnection",`Sending RPC '${e}' ${h}:`,d,s);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,u),this.Mo(e,d,f,s).then(_=>(k("RestConnection",`Received RPC '${e}' ${h}: `,_),_),_=>{throw Te("RestConnection",`RPC '${e}' ${h} failed with error: `,_,"url: ",d,"request:",s),_})}xo(e,n,s,o,u,h){return this.Co(e,n,s,o,u)}Fo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Se}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}vo(e,n){const s=Ph[e];return`${this.wo}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,n,s){const o=jr();return new Promise((u,h)=>{const d=new Eo;d.setWithCredentials(!0),d.listenOnce(vo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Bn.NO_ERROR:const _=d.getResponseJson();k(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case Bn.TIMEOUT:k(mt,`RPC '${t}' ${o} timed out`),h(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Bn.HTTP_ERROR:const A=d.getStatus();if(k(mt,`RPC '${t}' ${o} failed with status:`,A,"response text:",d.getResponseText()),A>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const b=function(D){const $=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN}(S.status);h(new N(b,S.message))}else h(new N(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(P.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{k(mt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);k(mt,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",f,n,15)})}Oo(t,e,n){const s=jr(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Ao(),h=wo(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new To({})),this.Fo(d.initMessageHeaders,e,n),d.encodeInitMessageHeaders=!0;const _=o.join("");k(mt,`Creating RPC '${t}' stream ${s}: ${_}`,d);const A=u.createWebChannel(_,d);let R=!1,S=!1;const b=new Vh({lo:D=>{S?k(mt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(R||(k(mt,`Opening RPC '${t}' stream ${s} transport.`),A.open(),R=!0),k(mt,`RPC '${t}' stream ${s} sending:`,D),A.send(D))},ho:()=>A.close()}),M=(D,$,G)=>{D.listen($,H=>{try{G(H)}catch(rt){setTimeout(()=>{throw rt},0)}})};return M(A,Xe.EventType.OPEN,()=>{S||(k(mt,`RPC '${t}' stream ${s} transport opened.`),b.mo())}),M(A,Xe.EventType.CLOSE,()=>{S||(S=!0,k(mt,`RPC '${t}' stream ${s} transport closed`),b.po())}),M(A,Xe.EventType.ERROR,D=>{S||(S=!0,Te(mt,`RPC '${t}' stream ${s} transport errored:`,D),b.po(new N(P.UNAVAILABLE,"The operation could not be completed")))}),M(A,Xe.EventType.MESSAGE,D=>{var $;if(!S){const G=D.data[0];W(!!G);const H=G,rt=H.error||(($=H[0])===null||$===void 0?void 0:$.error);if(rt){k(mt,`RPC '${t}' stream ${s} received error:`,rt);const bt=rt.status;let st=function(p){const y=tt[p];if(y!==void 0)return Yo(y)}(bt),T=rt.message;st===void 0&&(st=P.INTERNAL,T="Unknown error status: "+bt+" with message "+rt.message),S=!0,b.po(new N(st,T)),A.close()}else k(mt,`RPC '${t}' stream ${s} received:`,G),b.yo(G)}}),M(h,Io.STAT_EVENT,D=>{D.stat===$r.PROXY?k(mt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===$r.NOPROXY&&k(mt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.fo()},0),b}}function zr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(r){return new Ul(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e,n=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=n,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-n);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,e,n,s,o,u,h,d){this.oi=t,this.Go=n,this.zo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=d,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new la(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Lt(e.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.jo===e&&this.u_(n,s)},n=>{t(()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.c_(s)})})}u_(t,e){const n=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{n(()=>this.listener.Po())}),this.stream.To(()=>{n(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{n(()=>this.c_(s))}),this.stream.onMessage(s=>{n(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ch extends ha{constructor(t,e,n,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=jl(this.serializer,t),n=function(o){if(!("targetChange"in o))return O.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?O.min():u.readTime?St(u.readTime):O.min()}(t);return this.listener.h_(e,n)}P_(t){const e={};e.database=ti(this.serializer),e.addTarget=function(o,u){let h;const d=u.target;if(h=Wr(d)?{documents:$l(o,d)}:{query:Gl(o,d)._t},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=ta(o,u.resumeToken);const f=Yr(o,u.expectedCount);f!==null&&(h.expectedCount=f)}else if(u.snapshotVersion.compareTo(O.min())>0){h.readTime=Yn(o,u.snapshotVersion.toTimestamp());const f=Yr(o,u.expectedCount);f!==null&&(h.expectedCount=f)}return h}(this.serializer,t);const n=Hl(this.serializer,t);n&&(e.labels=n),this.i_(e)}I_(t){const e={};e.database=ti(this.serializer),e.removeTarget=t,this.i_(e)}}class Dh extends ha{constructor(t,e,n,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(W(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Kl(t.writeResults,t.commitTime),n=St(t.commitTime);return this.listener.A_(n,e)}return W(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=ti(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>zl(this.serializer,n))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,n,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Co(t,Jr(e,n),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}xo(t,e,n,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.xo(t,Jr(e,n),s,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(P.UNKNOWN,u.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class bh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Lt(e),this.y_=!1):k("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(u=>{n.enqueueAndForget(async()=>{ce(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=U(d);f.M_.add(4),await pn(f),f.N_.set("Unknown"),f.M_.delete(4),await lr(f)}(this))})}),this.N_=new bh(n,s)}}async function lr(r){if(ce(r))for(const t of r.x_)await t(!0)}async function pn(r){for(const t of r.x_)await t(!1)}function ca(r,t){const e=U(r);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Ii(e)?vi(e):De(e).Xo()&&Ti(e,t))}function Ei(r,t){const e=U(r),n=De(e);e.F_.delete(t),n.Xo()&&da(e,t),e.F_.size===0&&(n.Xo()?n.n_():ce(e)&&e.N_.set("Unknown"))}function Ti(r,t){if(r.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}De(r).P_(t)}function da(r,t){r.L_.xe(t),De(r).I_(t)}function vi(r){r.L_=new Ml({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.F_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),De(r).start(),r.N_.w_()}function Ii(r){return ce(r)&&!De(r).Zo()&&r.F_.size>0}function ce(r){return U(r).M_.size===0}function fa(r){r.L_=void 0}async function xh(r){r.N_.set("Online")}async function Mh(r){r.F_.forEach((t,e)=>{Ti(r,t)})}async function Lh(r,t){fa(r),Ii(r)?(r.N_.D_(t),vi(r)):r.N_.set("Unknown")}async function Oh(r,t,e){if(r.N_.set("Online"),t instanceof Zo&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const h of o.targetIds)s.F_.has(h)&&(await s.remoteSyncer.rejectListen(h,u),s.F_.delete(h),s.L_.removeTarget(h))}(r,t)}catch(n){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Jn(r,n)}else if(t instanceof Kn?r.L_.Ke(t):t instanceof Jo?r.L_.He(t):r.L_.We(t),!e.isEqual(O.min()))try{const n=await ua(r.localStore);e.compareTo(n)>=0&&await function(o,u){const h=o.L_.rt(u);return h.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.F_.get(f);_&&o.F_.set(f,_.withResumeToken(d.resumeToken,u))}}),h.targetMismatches.forEach((d,f)=>{const _=o.F_.get(d);if(!_)return;o.F_.set(d,_.withResumeToken(_t.EMPTY_BYTE_STRING,_.snapshotVersion)),da(o,d);const A=new Kt(_.target,d,f,_.sequenceNumber);Ti(o,A)}),o.remoteSyncer.applyRemoteEvent(h)}(r,e)}catch(n){k("RemoteStore","Failed to raise snapshot:",n),await Jn(r,n)}}async function Jn(r,t,e){if(!fn(t))throw t;r.M_.add(1),await pn(r),r.N_.set("Offline"),e||(e=()=>ua(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await e(),r.M_.delete(1),await lr(r)})}function ma(r,t){return t().catch(e=>Jn(r,e,t))}async function hr(r){const t=U(r),e=Jt(t);let n=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Fh(t);)try{const s=await vh(t.localStore,n);if(s===null){t.v_.length===0&&e.n_();break}n=s.batchId,Uh(t,s)}catch(s){await Jn(t,s)}ga(t)&&pa(t)}function Fh(r){return ce(r)&&r.v_.length<10}function Uh(r,t){r.v_.push(t);const e=Jt(r);e.Xo()&&e.E_&&e.d_(t.mutations)}function ga(r){return ce(r)&&!Jt(r).Zo()&&r.v_.length>0}function pa(r){Jt(r).start()}async function qh(r){Jt(r).V_()}async function Bh(r){const t=Jt(r);for(const e of r.v_)t.d_(e.mutations)}async function jh(r,t,e){const n=r.v_.shift(),s=fi.from(n,t,e);await ma(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await hr(r)}async function zh(r,t){t&&Jt(r).E_&&await async function(n,s){if(function(u){return bl(u)&&u!==P.ABORTED}(s.code)){const o=n.v_.shift();Jt(n).t_(),await ma(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s)),await hr(n)}}(r,t),ga(r)&&pa(r)}async function io(r,t){const e=U(r);e.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const n=ce(e);e.M_.add(3),await pn(e),n&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await lr(e)}async function Kh(r,t){const e=U(r);t?(e.M_.delete(2),await lr(e)):t||(e.M_.add(2),await pn(e),e.N_.set("Unknown"))}function De(r){return r.B_||(r.B_=function(e,n,s){const o=U(e);return o.f_(),new Ch(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Po:xh.bind(null,r),To:Mh.bind(null,r),Ao:Lh.bind(null,r),h_:Oh.bind(null,r)}),r.x_.push(async t=>{t?(r.B_.t_(),Ii(r)?vi(r):r.N_.set("Unknown")):(await r.B_.stop(),fa(r))})),r.B_}function Jt(r){return r.k_||(r.k_=function(e,n,s){const o=U(e);return o.f_(),new Dh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Po:()=>Promise.resolve(),To:qh.bind(null,r),Ao:zh.bind(null,r),R_:Bh.bind(null,r),A_:jh.bind(null,r)}),r.x_.push(async t=>{t?(r.k_.t_(),await hr(r)):(await r.k_.stop(),r.v_.length>0&&(k("RemoteStore",`Stopping write stream with ${r.v_.length} pending writes`),r.v_=[]))})),r.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const u=Date.now()+n,h=new wi(t,e,u,s,o);return h.start(n),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ai(r,t){if(Lt("AsyncQueue",`${t}: ${r}`),fn(r))return new N(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.comparator=t?(e,n)=>t(e,n)||x.comparator(e.key,n.key):(e,n)=>x.comparator(e.key,n.key),this.keyedMap=Ye(),this.sortedSet=new J(this.comparator)}static emptySet(t){return new Ee(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ee)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ee;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.q_=new J(x.comparator)}track(t){const e=t.doc.key,n=this.q_.get(e);n?t.type!==0&&n.type===3?this.q_=this.q_.insert(e,t):t.type===3&&n.type!==1?this.q_=this.q_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.q_=this.q_.remove(e):t.type===1&&n.type===2?this.q_=this.q_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):L():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Re{constructor(t,e,n,s,o,u,h,d,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,s,o){const u=[];return e.forEach(h=>{u.push({type:0,doc:h})}),new Re(t,e,Ee.emptySet(e),u,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&rr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Gh{constructor(){this.queries=new Ce(t=>Oo(t),rr),this.onlineState="Unknown",this.z_=new Set}}async function Qh(r,t){const e=U(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.W_()&&t.G_()&&(n=2):(o=new $h,n=t.G_()?0:1);try{switch(n){case 0:o.K_=await e.onListen(s,!0);break;case 1:o.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const h=Ai(u,`Initialization of query '${pe(t.query)}' failed`);return void t.onError(h)}e.queries.set(s,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Ri(e)}async function Hh(r,t){const e=U(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const u=o.U_.indexOf(t);u>=0&&(o.U_.splice(u,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Wh(r,t){const e=U(r);let n=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const h of u.U_)h.H_(s)&&(n=!0);u.K_=s}}n&&Ri(e)}function Xh(r,t,e){const n=U(r),s=n.queries.get(t);if(s)for(const o of s.U_)o.onError(e);n.queries.delete(t)}function Ri(r){r.z_.forEach(t=>{t.next()})}var ni,oo;(oo=ni||(ni={})).J_="default",oo.Cache="cache";class Yh{constructor(t,e,n){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Re(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const n=e!=="Offline";return(!this.options.ra||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Re.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==ni.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t){this.key=t}}class ya{constructor(t){this.key=t}}class Jh{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=q(),this.mutatedKeys=q(),this.Ia=Fo(t),this.Ta=new Ee(this.Ia)}get Ea(){return this.la}da(t,e){const n=e?e.Aa:new so,s=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,h=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((_,A)=>{const R=s.get(_),S=ir(this.query,A)?A:null,b=!!R&&this.mutatedKeys.has(R.key),M=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;R&&S?R.data.isEqual(S.data)?b!==M&&(n.track({type:3,doc:S}),D=!0):this.Ra(R,S)||(n.track({type:2,doc:S}),D=!0,(d&&this.Ia(S,d)>0||f&&this.Ia(S,f)<0)&&(h=!0)):!R&&S?(n.track({type:0,doc:S}),D=!0):R&&!S&&(n.track({type:1,doc:R}),D=!0,(d||f)&&(h=!0)),D&&(S?(u=u.add(S),o=M?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{Ta:u,Aa:n,Xi:h,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const u=t.Aa.Q_();u.sort((_,A)=>function(S,b){const M=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return M(S)-M(b)}(_.type,A.type)||this.Ia(_.doc,A.doc)),this.Va(n),s=s!=null&&s;const h=e&&!s?this.ma():[],d=this.Pa.size===0&&this.current&&!s?1:0,f=d!==this.ha;return this.ha=d,u.length!==0||f?{snapshot:new Re(this.query,t.Ta,o,u,t.mutatedKeys,d===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:h}:{fa:h}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new so,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=q(),this.Ta.forEach(n=>{this.ga(n.key)&&(this.Pa=this.Pa.add(n.key))});const e=[];return t.forEach(n=>{this.Pa.has(n)||e.push(new ya(n))}),this.Pa.forEach(n=>{t.has(n)||e.push(new _a(n))}),e}pa(t){this.la=t.hs,this.Pa=q();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Re.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Zh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class tc{constructor(t){this.key=t,this.wa=!1}}class ec{constructor(t,e,n,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Sa={},this.ba=new Ce(h=>Oo(h),rr),this.Da=new Map,this.Ca=new Set,this.va=new J(x.comparator),this.Fa=new Map,this.Ma=new pi,this.xa={},this.Oa=new Map,this.Na=Ae.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function nc(r,t,e=!0){const n=Aa(r);let s;const o=n.ba.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await Ea(n,t,e,!0),s}async function rc(r,t){const e=Aa(r);await Ea(e,t,!0,!1)}async function Ea(r,t,e,n){const s=await Ih(r.localStore,Pt(t)),o=s.targetId,u=e?r.sharedClientState.addLocalQueryTarget(o):"not-current";let h;return n&&(h=await ic(r,t,o,u==="current",s.resumeToken)),r.isPrimaryClient&&e&&ca(r.remoteStore,s),h}async function ic(r,t,e,n,s){r.Ba=(A,R,S)=>async function(M,D,$,G){let H=D.view.da($);H.Xi&&(H=await eo(M.localStore,D.query,!1).then(({documents:T})=>D.view.da(T,H)));const rt=G&&G.targetChanges.get(D.targetId),bt=G&&G.targetMismatches.get(D.targetId)!=null,st=D.view.applyChanges(H,M.isPrimaryClient,rt,bt);return uo(M,D.targetId,st.fa),st.snapshot}(r,A,R,S);const o=await eo(r.localStore,t,!0),u=new Jh(t,o.hs),h=u.da(o.documents),d=gn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),f=u.applyChanges(h,r.isPrimaryClient,d);uo(r,e,f.fa);const _=new Zh(t,e,u);return r.ba.set(t,_),r.Da.has(e)?r.Da.get(e).push(t):r.Da.set(e,[t]),f.snapshot}async function sc(r,t,e){const n=U(r),s=n.ba.get(t),o=n.Da.get(s.targetId);if(o.length>1)return n.Da.set(s.targetId,o.filter(u=>!rr(u,t))),void n.ba.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ei(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Ei(n.remoteStore,s.targetId),ri(n,s.targetId)}).catch(dn)):(ri(n,s.targetId),await ei(n.localStore,s.targetId,!0))}async function oc(r,t){const e=U(r),n=e.ba.get(t),s=e.Da.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ei(e.remoteStore,n.targetId))}async function ac(r,t,e){const n=mc(r);try{const s=await function(u,h){const d=U(u),f=K.now(),_=h.reduce((S,b)=>S.add(b.key),q());let A,R;return d.persistence.runTransaction("Locally write mutations","readwrite",S=>{let b=Ot(),M=q();return d.os.getEntries(S,_).next(D=>{b=D,b.forEach(($,G)=>{G.isValidDocument()||(M=M.add($))})}).next(()=>d.localDocuments.getOverlayedDocuments(S,b)).next(D=>{A=D;const $=[];for(const G of h){const H=Vl(G,A.get(G.key).overlayedDocument);H!=null&&$.push(new Zt(G.key,H,Co(H.value.mapValue),Vt.exists(!0)))}return d.mutationQueue.addMutationBatch(S,f,$,h)}).next(D=>{R=D;const $=D.applyToLocalDocumentSet(A,M);return d.documentOverlayCache.saveOverlays(S,D.batchId,$)})}).then(()=>({batchId:R.batchId,changes:qo(A)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(u,h,d){let f=u.xa[u.currentUser.toKey()];f||(f=new J(z)),f=f.insert(h,d),u.xa[u.currentUser.toKey()]=f}(n,s.batchId,e),await _n(n,s.changes),await hr(n.remoteStore)}catch(s){const o=Ai(s,"Failed to persist write");e.reject(o)}}async function Ta(r,t){const e=U(r);try{const n=await Eh(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Fa.get(o);u&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.wa=!0:s.modifiedDocuments.size>0?W(u.wa):s.removedDocuments.size>0&&(W(u.wa),u.wa=!1))}),await _n(e,n,t)}catch(n){await dn(n)}}function ao(r,t,e){const n=U(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.ba.forEach((o,u)=>{const h=u.view.j_(t);h.snapshot&&s.push(h.snapshot)}),function(u,h){const d=U(u);d.onlineState=h;let f=!1;d.queries.forEach((_,A)=>{for(const R of A.U_)R.j_(h)&&(f=!0)}),f&&Ri(d)}(n.eventManager,t),s.length&&n.Sa.h_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function uc(r,t,e){const n=U(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Fa.get(t),o=s&&s.key;if(o){let u=new J(x.comparator);u=u.insert(o,pt.newNoDocument(o,O.min()));const h=q().add(o),d=new ar(O.min(),new Map,new J(z),u,h);await Ta(n,d),n.va=n.va.remove(o),n.Fa.delete(t),Pi(n)}else await ei(n.localStore,t,!1).then(()=>ri(n,t,e)).catch(dn)}async function lc(r,t){const e=U(r),n=t.batch.batchId;try{const s=await yh(e.localStore,t);Ia(e,n,null),va(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await _n(e,s)}catch(s){await dn(s)}}async function hc(r,t,e){const n=U(r);try{const s=await function(u,h){const d=U(u);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let _;return d.mutationQueue.lookupMutationBatch(f,h).next(A=>(W(A!==null),_=A.keys(),d.mutationQueue.removeMutationBatch(f,A))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,_,h)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,_)).next(()=>d.localDocuments.getDocuments(f,_))})}(n.localStore,t);Ia(n,t,e),va(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await _n(n,s)}catch(s){await dn(s)}}function va(r,t){(r.Oa.get(t)||[]).forEach(e=>{e.resolve()}),r.Oa.delete(t)}function Ia(r,t,e){const n=U(r);let s=n.xa[n.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),n.xa[n.currentUser.toKey()]=s}}function ri(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Da.get(t))r.ba.delete(n),e&&r.Sa.ka(n,e);r.Da.delete(t),r.isPrimaryClient&&r.Ma.Vr(t).forEach(n=>{r.Ma.containsKey(n)||wa(r,n)})}function wa(r,t){r.Ca.delete(t.path.canonicalString());const e=r.va.get(t);e!==null&&(Ei(r.remoteStore,e),r.va=r.va.remove(t),r.Fa.delete(e),Pi(r))}function uo(r,t,e){for(const n of e)n instanceof _a?(r.Ma.addReference(n.key,t),cc(r,n)):n instanceof ya?(k("SyncEngine","Document no longer in limbo: "+n.key),r.Ma.removeReference(n.key,t),r.Ma.containsKey(n.key)||wa(r,n.key)):L()}function cc(r,t){const e=t.key,n=e.path.canonicalString();r.va.get(e)||r.Ca.has(n)||(k("SyncEngine","New document in limbo: "+e),r.Ca.add(n),Pi(r))}function Pi(r){for(;r.Ca.size>0&&r.va.size<r.maxConcurrentLimboResolutions;){const t=r.Ca.values().next().value;r.Ca.delete(t);const e=new x(Y.fromString(t)),n=r.Na.next();r.Fa.set(n,new tc(e)),r.va=r.va.insert(e,n),ca(r.remoteStore,new Kt(Pt(Lo(e.path)),n,"TargetPurposeLimboResolution",ai.oe))}}async function _n(r,t,e){const n=U(r),s=[],o=[],u=[];n.ba.isEmpty()||(n.ba.forEach((h,d)=>{u.push(n.Ba(d,t,e).then(f=>{var _;if((f||e)&&n.isPrimaryClient){const A=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;n.sharedClientState.updateQueryState(d.targetId,A?"current":"not-current")}if(f){s.push(f);const A=yi.Ki(d.targetId,f);o.push(A)}}))}),await Promise.all(u),n.Sa.h_(s),await async function(d,f){const _=U(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>V.forEach(f,R=>V.forEach(R.qi,S=>_.persistence.referenceDelegate.addReference(A,R.targetId,S)).next(()=>V.forEach(R.Qi,S=>_.persistence.referenceDelegate.removeReference(A,R.targetId,S)))))}catch(A){if(!fn(A))throw A;k("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const R=A.targetId;if(!A.fromCache){const S=_.ns.get(R),b=S.snapshotVersion,M=S.withLastLimboFreeSnapshotVersion(b);_.ns=_.ns.insert(R,M)}}}(n.localStore,o))}async function dc(r,t){const e=U(r);if(!e.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const n=await aa(e.localStore,t);e.currentUser=t,function(o,u){o.Oa.forEach(h=>{h.forEach(d=>{d.reject(new N(P.CANCELLED,u))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await _n(e,n.us)}}function fc(r,t){const e=U(r),n=e.Fa.get(t);if(n&&n.wa)return q().add(n.key);{let s=q();const o=e.Da.get(t);if(!o)return s;for(const u of o){const h=e.ba.get(u);s=s.unionWith(h.view.Ea)}return s}}function Aa(r){const t=U(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ta.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=uc.bind(null,t),t.Sa.h_=Wh.bind(null,t.eventManager),t.Sa.ka=Xh.bind(null,t.eventManager),t}function mc(r){const t=U(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=lc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hc.bind(null,t),t}class lo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ur(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return _h(this.persistence,new gh,t.initialUser,this.serializer)}createPersistence(t){return new dh(_i.Hr,this.serializer)}createSharedClientState(t){return new Ah}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ao(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=dc.bind(null,this.syncEngine),await Kh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Gh}()}createDatastore(t){const e=ur(t.databaseInfo.databaseId),n=function(o){return new Sh(o)}(t.databaseInfo);return function(o,u,h,d){return new kh(o,u,h,d)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,u,h){return new Nh(n,s,o,u,h)}(this.localStore,this.datastore,t.asyncQueue,e=>ao(this.syncEngine,e,0),function(){return ro.D()?new ro:new Rh}())}createSyncEngine(t,e){return function(s,o,u,h,d,f,_){const A=new ec(s,o,u,h,d,f);return _&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(n){const s=U(n);k("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await pn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Lt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=Po.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async o=>{k("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(k("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ai(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Kr(r,t){r.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await aa(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function ho(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Ec(r);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>io(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>io(t.remoteStore,s)),r._onlineComponents=t}function yc(r){return r.name==="FirebaseError"?r.code===P.FAILED_PRECONDITION||r.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function Ec(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!yc(e))throw e;Te("Error using user provided cache. Falling back to memory cache: "+e),await Kr(r,new lo)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await Kr(r,new lo);return r._offlineComponents}async function Ra(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await ho(r,r._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await ho(r,new gc))),r._onlineComponents}function Tc(r){return Ra(r).then(t=>t.syncEngine)}async function vc(r){const t=await Ra(r),e=t.eventManager;return e.onListen=nc.bind(null,t.syncEngine),e.onUnlisten=sc.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=rc.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=oc.bind(null,t.syncEngine),e}function Ic(r,t,e={}){const n=new Gt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,h,d,f){const _=new pc({next:R=>{u.enqueueAndForget(()=>Hh(o,A)),R.fromCache&&d.source==="server"?f.reject(new N(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),A=new Yh(h,_,{includeMetadataChanges:!0,ra:!0});return Qh(o,A)}(await vc(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(r,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function wc(r,t,e,n){if(t===!0&&n===!0)throw new N(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function fo(r){if(!x.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function mo(r){if(x.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Vi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L()}function Pe(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Vi(r);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pa((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class cr{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new go({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new go(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Lu;switch(n.type){case"firstParty":return new qu(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=co.get(e);n&&(k("ComponentProvider","Removing Datastore"),co.delete(e),n.terminate())}(this),Promise.resolve()}}function Ac(r,t,e,n={}){var s;const o=(r=Pe(r,cr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&Te("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let h,d;if(typeof n.mockUserToken=="string")h=n.mockUserToken,d=gt.MOCK_USER;else{h=Cu(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new gt(f)}r._authCredentials=new Ou(new Ro(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new dr(this.firestore,t,this._query)}}class At{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new At(this.firestore,t,this._key)}}class Qt extends dr{constructor(t,e,n){super(t,e,Lo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new At(this.firestore,null,new x(t))}withConverter(t){return new Qt(this.firestore,t,this._path)}}function Sa(r,t,...e){if(r=Wt(r),Va("collection","path",t),r instanceof cr){const n=Y.fromString(t,...e);return mo(n),new Qt(r,null,n)}{if(!(r instanceof At||r instanceof Qt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return mo(n),new Qt(r.firestore,null,n)}}function ii(r,t,...e){if(r=Wt(r),arguments.length===1&&(t=Po.newId()),Va("doc","path",t),r instanceof cr){const n=Y.fromString(t,...e);return fo(n),new At(r,null,new x(n))}{if(!(r instanceof At||r instanceof Qt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return fo(n),new At(r.firestore,r instanceof Qt?r.converter:null,new x(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new la(this,"async_queue_retry"),this.hu=()=>{const e=zr();e&&k("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=zr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=zr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Gt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!fn(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(n=>{this.au=n,this.uu=!1;const s=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(n);throw Lt("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.uu=!1,n))));return this.iu=e,e}enqueueAfterDelay(t,e,n){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=wi.createAndSchedule(this,t,e,n,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&L()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class fr extends cr{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=function(){return new Rc}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Da(this),this._firestoreClient.terminate()}}function Pc(r,t){const e=typeof r=="object"?r:Pu(),n=typeof r=="string"?r:"(default)",s=Vu(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=Su("firestore");o&&Ac(s,...o)}return s}function Ca(r){return r._firestoreClient||Da(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function Da(r){var t,e,n;const s=r._freezeSettings(),o=function(h,d,f,_){return new Zu(h,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Pa(_.experimentalLongPollingOptions),_.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._firestoreClient=new _c(r._authCredentials,r._appCheckCredentials,r._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(_t.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ve(_t.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=/^__.*__$/;class Sc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Zt(t,this.data,this.fieldMask,e,this.fieldTransforms):new mn(t,this.data,e,this.fieldTransforms)}}class ka{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Zt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ba(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Di{constructor(t,e,n,s,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Di(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:n,yu:!1});return s.wu(t),s}Su(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:n,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Zn(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(ba(this.fu)&&Vc.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Cc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ur(t)}Fu(t,e,n,s=!1){return new Di({fu:t,methodName:e,vu:n,path:ut.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Na(r){const t=r._freezeSettings(),e=ur(r._databaseId);return new Cc(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Dc(r,t,e,n,s,o={}){const u=r.Fu(o.merge||o.mergeFields?2:0,t,e,s);ki("Data must be an object, but it was:",u,n);const h=xa(n,u);let d,f;if(o.merge)d=new It(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const A of o.mergeFields){const R=si(t,A,e);if(!u.contains(R))throw new N(P.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);La(_,R)||_.push(R)}d=new It(_),f=u.fieldTransforms.filter(A=>d.covers(A.field))}else d=null,f=u.fieldTransforms;return new Sc(new Tt(h),d,f)}class gr extends Si{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof gr}}function kc(r,t,e,n){const s=r.Fu(1,t,e);ki("Data must be an object, but it was:",s,n);const o=[],u=Tt.empty();he(n,(d,f)=>{const _=bi(t,d,e);f=Wt(f);const A=s.Su(_);if(f instanceof gr)o.push(_);else{const R=pr(f,A);R!=null&&(o.push(_),u.set(_,R))}});const h=new It(o);return new ka(u,h,s.fieldTransforms)}function bc(r,t,e,n,s,o){const u=r.Fu(1,t,e),h=[si(t,n,e)],d=[s];if(o.length%2!=0)throw new N(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)h.push(si(t,o[R])),d.push(o[R+1]);const f=[],_=Tt.empty();for(let R=h.length-1;R>=0;--R)if(!La(f,h[R])){const S=h[R];let b=d[R];b=Wt(b);const M=u.Su(S);if(b instanceof gr)f.push(S);else{const D=pr(b,M);D!=null&&(f.push(S),_.set(S,D))}}const A=new It(f);return new ka(_,A,u.fieldTransforms)}function pr(r,t){if(Ma(r=Wt(r)))return ki("Unsupported field value:",t,r),xa(r,t);if(r instanceof Si)return function(n,s){if(!ba(s.fu))throw s.Du(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(n,s){const o=[];let u=0;for(const h of n){let d=pr(h,s.bu(u));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,s){if((n=Wt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return vl(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=K.fromDate(n);return{timestampValue:Yn(s.serializer,o)}}if(n instanceof K){const o=new K(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Yn(s.serializer,o)}}if(n instanceof Ci)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ve)return{bytesValue:ta(s.serializer,n._byteString)};if(n instanceof At){const o=s.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw s.Du(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:gi(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Du(`Unsupported field value: ${Vi(n)}`)}(r,t)}function xa(r,t){const e={};return Vo(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):he(r,(n,s)=>{const o=pr(s,t.pu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Ma(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof K||r instanceof Ci||r instanceof Ve||r instanceof At||r instanceof Si)}function ki(r,t,e){if(!Ma(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=Vi(e);throw n==="an object"?t.Du(r+" a custom object"):t.Du(r+" "+n)}}function si(r,t,e){if((t=Wt(t))instanceof mr)return t._internalPath;if(typeof t=="string")return bi(r,t);throw Zn("Field path arguments must be of type string or ",r,!1,void 0,e)}const Nc=new RegExp("[~\\*/\\[\\]]");function bi(r,t,e){if(t.search(Nc)>=0)throw Zn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new mr(...t.split("."))._internalPath}catch{throw Zn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Zn(r,t,e,n,s){const o=n&&!n.isEmpty(),u=s!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let d="";return(o||u)&&(d+=" (found",o&&(d+=` in field ${n}`),u&&(d+=` in document ${s}`),d+=")"),new N(P.INVALID_ARGUMENT,h+r+d)}function La(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new xc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Fa("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class xc extends Oa{data(){return super.data()}}function Fa(r,t){return typeof t=="string"?bi(r,t):t instanceof mr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lc{convertValue(t,e="none"){switch(le(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ue(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return he(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertGeoPoint(t){return new Ci(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=li(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(on(t));default:return null}}convertTimestamp(t){const e=Yt(t);return new K(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);W(oa(n));const s=new an(n.get(1),n.get(3)),o=new x(n.popFirst(5));return s.isEqual(e)||Lt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fc extends Oa{constructor(t,e,n,s,o,u){super(t,e,n,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $n(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Fa("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class $n extends Fc{data(t={}){return super.data(t)}}class Uc{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new qn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new $n(this._firestore,this._userDataWriter,n.key,n,new qn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(h=>{const d=new $n(s._firestore,s._userDataWriter,h.doc.key,h.doc,new qn(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const d=new $n(s._firestore,s._userDataWriter,h.doc.key,h.doc,new qn(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,_=-1;return h.type!==0&&(f=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),_=u.indexOf(h.doc.key)),{type:qc(h.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function qc(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Bc extends Lc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new At(this.firestore,null,e)}}function jc(r){r=Pe(r,dr);const t=Pe(r.firestore,fr),e=Ca(t),n=new Bc(t);return Mc(r._query),Ic(e,r._query).then(s=>new Uc(t,n,r,s))}function po(r,t,e,...n){r=Pe(r,At);const s=Pe(r.firestore,fr),o=Na(s);let u;return u=typeof(t=Wt(t))=="string"||t instanceof mr?bc(o,"updateDoc",r._key,t,e,n):kc(o,"updateDoc",r._key,t),Ua(s,[u.toMutation(r._key,Vt.exists(!0))])}function zc(r,t){const e=Pe(r.firestore,fr),n=ii(r),s=Oc(r.converter,t);return Ua(e,[Dc(Na(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Vt.exists(!1))]).then(()=>n)}function Ua(r,t){return function(n,s){const o=new Gt;return n.asyncQueue.enqueueAndForget(async()=>ac(await Tc(n),s,o)),o.promise}(Ca(r),t)}(function(t,e=!0){(function(s){Se=s})(Du),wu(new Au("firestore",(n,{instanceIdentifier:s,options:o})=>{const u=n.getProvider("app").getImmediate(),h=new fr(new Fu(n.getProvider("auth-internal")),new ju(n.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new an(f.options.projectId,_)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Ns(Ms,"4.6.4",t),Ns(Ms,"4.6.4","esm2017")})();var Kc={apiKey:"AIzaSyAGz2x2bGOZjgBcUxBV7E4-xLtL0NszImQ",authDomain:"aurora-language-learning-app.firebaseapp.com",projectId:"aurora-language-learning-app",storageBucket:"aurora-language-learning-app.appspot.com",messagingSenderId:"251894860890",appId:"1:251894860890:web:cbc7735ba34d698c56dc63",measurementId:"G-LKN9TF0F4D"};const qa=Nu(Kc),$c=xu(qa),tr=Pc(qa),$t=[0,60,120,300,1800,3600,26e3,86400,172800,604800,1209600],_o=[];let F=[],Ht=[],oe=[];const Ct=document.getElementsByClassName("number");let cn="";Mu($c,async r=>{if(r){cn=r.email;const t=Sa(tr,cn);(await jc(t)).forEach(n=>{_o.push({id:n.id,data:n.data()}),console.log(n.data().stage,$t[n.data().stage],K.now().seconds-($t[n.data().stage]+n.data().time.seconds)),K.now().seconds-($t[n.data().stage]+n.data().time.seconds)>=0?F.push({id:n.id,data:n.data()}):n.data().stage<=$t.length-3?Ht.push({id:n.id,data:n.data()}):oe.push({id:n.id,data:n.data()})}),console.log(_o),[...Ct][0].innerHTML=F.length,[...Ct][1].innerHTML=Ht.length,[...Ct][2].innerHTML=oe.length}});document.getElementById("submit").onclick=async()=>{const r=document.getElementById("word").value,t=document.getElementById("meaning").value,e=document.getElementById("example").value;r.trim()!=""&&t.trim()!=""&&(document.getElementById("word").value="",document.getElementById("meaning").value="",document.getElementById("example").value="",await zc(Sa(tr,cn),{word:r,meaning:t,example:e,stage:0,time:K.now()}).then(function(n){console.log(n),F.push({id:n.id,data:{word:r,meaning:t,example:e,stage:0,time:K.now()}}),[...Ct][0].innerHTML=F.length}))};document.getElementById("add").onclick=()=>{document.getElementById("add-menu").classList.toggle("show")};document.getElementById("close-add-menu").onclick=()=>{document.getElementById("add-menu").classList.toggle("show")};setInterval(()=>{let r=0;Ht.forEach(t=>{K.now().seconds-($t[t.data.stage]+t.data.time.seconds)>=0&&(F.push(t),console.log(t,K.now().seconds,$t[t.data.stage]+t.data.time.seconds),Ht.splice(r,1)),r++}),r=0,oe.forEach(t=>{K.now().seconds-($t[t.data.stage]+t.data.time.seconds)>=0&&(F.push(t),oe.splice(r,1)),r++}),[...Ct][0].innerHTML=F.length,[...Ct][1].innerHTML=Ht.length,[...Ct][2].innerHTML=oe.length},1e3);const wt=document.querySelector(".card").children[0];wt.addEventListener("mousedown",function(){if(!wt.classList.contains("is-flipped")){wt.classList.toggle("is-flipped");const r=wt.getElementsByClassName("back")[0];r.style.color="black"}});document.getElementById("close-test-menu").onclick=()=>{document.getElementById("test-menu").classList.toggle("show"),wt.style="",wt.classList="",rn=!1,jt="none"};document.getElementById("start").onclick=()=>{if(F.length!=0){document.getElementById("test-menu").classList.toggle("show"),F=F.sort((e,n)=>.5-Math.random());const r=wt.getElementsByClassName("front")[0],t=wt.getElementsByClassName("back")[0];r.innerHTML=`
                <div>
                    <h1>${F[0].data.word}</h1>
                    ${F[0].data.example?`<br><h3>${F[0].data.example}</h3>`:""}
                </div>
            `,t.innerHTML=`
                <div>
                    <h3>${F[0].data.word}</h3>
                    <br>
                    <h1>${F[0].data.meaning}</h1>
                    ${F[0].data.example?`
                        <br>
                        <hr>
                        <br>
                        <h3>${F[0].data.example}</h3>
                    `:""}
                    <p id="right">Đã nhớ</p>
                    <p id="wrong">Học lại</p>
                </div>
            `}};let rn=!1,jt="none";wt.addEventListener("transitionend",function(){rn=!0},!1);Gc(wt);function Gc(r){let t=null,e=null;r.addEventListener("mousedown",n,!1),r.addEventListener("touchstart",n,!1);function n(u){rn&&(t=u.clientX===void 0?u.touches[0].clientX:u.clientX,e=u.clientY===void 0?u.touches[0].clientY:u.clientY,document.addEventListener("mousemove",s,!1),document.addEventListener("touchmove",s,!1),document.addEventListener("mouseup",o,!1),document.addEventListener("touchend",o,!1))}function s(u){if(rn){if(t===null||e===null)return;const h=u.clientX===void 0?u.touches[0].clientX:u.clientX,d=u.clientY===void 0?u.touches[0].clientY:u.clientY,f=h-t,_=d-e;t=h,e=d,r.style.top=r.offsetTop+_+"px",r.style.left=r.offsetLeft+f+"px";const A=r.style.left.slice(0,-2)/window.innerWidth;r.style.transform="rotate("+-A+"rad) rotateY(180deg)",r.style.left.slice(0,-2)>window.innerWidth*15/100?(jt="right",document.getElementById("right").style.display="initial"):r.style.left.slice(0,-2)<-window.innerWidth*15/100?(jt="left",document.getElementById("wrong").style.display="initial"):(jt="none",document.getElementById("right").style.display="none",document.getElementById("wrong").style.display="none")}}function o(){if(t=null,e=null,jt=="none")r.style.top=0,r.style.left=0,r.style.transform="rotate(0rad) rotateY(180deg)";else{jt=="right"?(po(ii(tr,cn,F[0].id),{stage:Math.min(Math.max(F[0].data.stage+1,0),9),time:K.now()}),F[0].data.stage=Math.min(Math.max(F[0].data.stage+1,0),9),F[0].data.time=K.now(),F[0].data.stage<=$t.length-3?Ht.push(F.shift()):oe.push(F.shift())):jt=="left"&&(po(ii(tr,cn,F[0].id),{stage:Math.min(Math.max(F[0].data.stage-1,0),4),time:K.now()}),F[0].data.stage=Math.min(Math.max(F[0].data.stage-1,0),4),F[0].data.time=K.now(),F[0].data.stage!=0?Ht.push(F.shift()):F.push(F.shift())),[...Ct][0].innerHTML=F.length,[...Ct][1].innerHTML=Ht.length,[...Ct][2].innerHTML=oe.length,r.style="",wt.classList="",rn=!1,jt="none",document.getElementById("right").style.display="none",document.getElementById("wrong").style.display="none";const u=wt.getElementsByClassName("front")[0],h=wt.getElementsByClassName("back")[0];h.style.color="white",F.length!=0?(u.innerHTML=`
                        <div>
                            <h1>${F[0].data.word}</h1>
                            ${F[0].data.example?`<br><h3>${F[0].data.example}</h3>`:""}
                        </div>
                    `,h.innerHTML=`
                        <div>
                            <h3>${F[0].data.word}</h3>
                            <br>
                            <h1>${F[0].data.meaning}</h1>
                            ${F[0].data.example?`
                                <br>
                                <hr>
                                <br>
                                <h3>${F[0].data.example}</h3>
                            `:""}
                            <p id="right">Đã nhớ</p>
                            <p id="wrong">Học lại</p>
                        </div>
                    `):document.getElementById("test-menu").classList.toggle("show")}document.removeEventListener("mousemove",s,!1),document.removeEventListener("touchmove",s,!1),document.removeEventListener("mouseup",o,!1),document.removeEventListener("touchend",o,!1)}}
