import"./index-BPFUryKd.js";import"./auth-D5lICtj5.js";import{L as wu,_ as Au,C as Ru,r as xi,F as Pu,b as Xt,d as Vu,e as Su,f as Cu,h as $t,j as ku,S as Du,k as Nu,l as bu,i as xu,g as Mu,o as Lu}from"./index-54738136-Bd3ggPxx.js";var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oe,yo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function p(){}p.prototype=m.prototype,T.D=m.prototype,T.prototype=new p,T.prototype.constructor=T,T.C=function(y,E,I){for(var g=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)g[xt-2]=arguments[xt];return m.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,p){p||(p=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(p++)|m.charCodeAt(p++)<<8|m.charCodeAt(p++)<<16|m.charCodeAt(p++)<<24;else for(E=0;16>E;++E)y[E]=m[p++]|m[p++]<<8|m[p++]<<16|m[p++]<<24;m=T.g[0],p=T.g[1],E=T.g[2];var I=T.g[3],g=m+(I^p&(E^I))+y[0]+3614090360&4294967295;m=p+(g<<7&4294967295|g>>>25),g=I+(E^m&(p^E))+y[1]+3905402710&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(p^I&(m^p))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=p+(m^E&(I^m))+y[3]+3250441966&4294967295,p=E+(g<<22&4294967295|g>>>10),g=m+(I^p&(E^I))+y[4]+4118548399&4294967295,m=p+(g<<7&4294967295|g>>>25),g=I+(E^m&(p^E))+y[5]+1200080426&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(p^I&(m^p))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=p+(m^E&(I^m))+y[7]+4249261313&4294967295,p=E+(g<<22&4294967295|g>>>10),g=m+(I^p&(E^I))+y[8]+1770035416&4294967295,m=p+(g<<7&4294967295|g>>>25),g=I+(E^m&(p^E))+y[9]+2336552879&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(p^I&(m^p))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=p+(m^E&(I^m))+y[11]+2304563134&4294967295,p=E+(g<<22&4294967295|g>>>10),g=m+(I^p&(E^I))+y[12]+1804603682&4294967295,m=p+(g<<7&4294967295|g>>>25),g=I+(E^m&(p^E))+y[13]+4254626195&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(p^I&(m^p))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=p+(m^E&(I^m))+y[15]+1236535329&4294967295,p=E+(g<<22&4294967295|g>>>10),g=m+(E^I&(p^E))+y[1]+4129170786&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^E&(m^p))+y[6]+3225465664&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^p&(I^m))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(E^I))+y[0]+3921069994&4294967295,p=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(p^E))+y[5]+3593408605&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^E&(m^p))+y[10]+38016083&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^p&(I^m))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(E^I))+y[4]+3889429448&4294967295,p=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(p^E))+y[9]+568446438&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^E&(m^p))+y[14]+3275163606&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^p&(I^m))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(E^I))+y[8]+1163531501&4294967295,p=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(p^E))+y[13]+2850285829&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^E&(m^p))+y[2]+4243563512&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^p&(I^m))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(E^I))+y[12]+2368359562&4294967295,p=E+(g<<20&4294967295|g>>>12),g=m+(p^E^I)+y[5]+4294588738&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^E)+y[8]+2272392833&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^p)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=p+(E^I^m)+y[14]+4259657740&4294967295,p=E+(g<<23&4294967295|g>>>9),g=m+(p^E^I)+y[1]+2763975236&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^E)+y[4]+1272893353&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^p)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=p+(E^I^m)+y[10]+3200236656&4294967295,p=E+(g<<23&4294967295|g>>>9),g=m+(p^E^I)+y[13]+681279174&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^E)+y[0]+3936430074&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^p)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=p+(E^I^m)+y[6]+76029189&4294967295,p=E+(g<<23&4294967295|g>>>9),g=m+(p^E^I)+y[9]+3654602809&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^E)+y[12]+3873151461&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^p)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=p+(E^I^m)+y[2]+3299628645&4294967295,p=E+(g<<23&4294967295|g>>>9),g=m+(E^(p|~I))+y[0]+4096336452&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~E))+y[7]+1126891415&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~p))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=p+(I^(E|~m))+y[5]+4237533241&4294967295,p=E+(g<<21&4294967295|g>>>11),g=m+(E^(p|~I))+y[12]+1700485571&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~E))+y[3]+2399980690&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~p))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=p+(I^(E|~m))+y[1]+2240044497&4294967295,p=E+(g<<21&4294967295|g>>>11),g=m+(E^(p|~I))+y[8]+1873313359&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~E))+y[15]+4264355552&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~p))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=p+(I^(E|~m))+y[13]+1309151649&4294967295,p=E+(g<<21&4294967295|g>>>11),g=m+(E^(p|~I))+y[4]+4149444226&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~E))+y[11]+3174756917&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~p))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=p+(I^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}n.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var p=m-this.blockSize,y=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=p;)i(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<m;)if(y[E++]=T.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<m;)if(y[E++]=T[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var p=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=p&255,p/=256;for(this.u(T),T=Array(16),m=p=0;4>m;++m)for(var y=0;32>y;y+=8)T[p++]=this.g[m]>>>y&255;return T};function o(T,m){var p=h;return Object.prototype.hasOwnProperty.call(p,T)?p[T]:p[T]=m(T)}function u(T,m){this.h=m;for(var p=[],y=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;y&&I==m||(p[E]=I,y=!1)}this.g=p}var h={};function d(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return A;if(0>T)return k(f(-T));for(var m=[],p=1,y=0;T>=p;y++)m[y]=T/p|0,p*=4294967296;return new u(m,0)}function _(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return k(_(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=f(Math.pow(m,8)),y=A,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),g=parseInt(T.substring(E,E+I),m);8>I?(I=f(Math.pow(m,I)),y=y.j(I).add(f(g))):(y=y.j(p),y=y.add(f(g)))}return y}var A=d(0),R=d(1),S=d(16777216);r=u.prototype,r.m=function(){if(M(this))return-k(this).m();for(var T=0,m=1,p=0;p<this.g.length;p++){var y=this.i(p);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(M(this))return"-"+k(this).toString(T);for(var m=f(Math.pow(T,6)),p=this,y="";;){var E=rt(p,m).g;p=$(p,E.j(m));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(T);if(p=E,N(p))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function M(T){return T.h==-1}r.l=function(T){return T=$(this,T),M(T)?-1:N(T)?0:1};function k(T){for(var m=T.g.length,p=[],y=0;y<m;y++)p[y]=~T.g[y];return new u(p,~T.h).add(R)}r.abs=function(){return M(this)?k(this):this},r.add=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],y=0,E=0;E<=m;E++){var I=y+(this.i(E)&65535)+(T.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,p[E]=g<<16|I}return new u(p,p[p.length-1]&-2147483648?-1:0)};function $(T,m){return T.add(k(m))}r.j=function(T){if(N(this)||N(T))return A;if(M(this))return M(T)?k(this).j(k(T)):k(k(this).j(T));if(M(T))return k(this.j(k(T)));if(0>this.l(S)&&0>T.l(S))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,p=[],y=0;y<2*m;y++)p[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,xt=T.i(E)>>>16,De=T.i(E)&65535;p[2*y+2*E]+=g*De,G(p,2*y+2*E),p[2*y+2*E+1]+=I*De,G(p,2*y+2*E+1),p[2*y+2*E+1]+=g*xt,G(p,2*y+2*E+1),p[2*y+2*E+2]+=I*xt,G(p,2*y+2*E+2)}for(y=0;y<m;y++)p[y]=p[2*y+1]<<16|p[2*y];for(y=m;y<2*m;y++)p[y]=0;return new u(p,0)};function G(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function H(T,m){this.g=T,this.h=m}function rt(T,m){if(N(m))throw Error("division by zero");if(N(T))return new H(A,A);if(M(T))return m=rt(k(T),m),new H(k(m.g),k(m.h));if(M(m))return m=rt(T,k(m)),new H(k(m.g),m.h);if(30<T.g.length){if(M(T)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var p=R,y=m;0>=y.l(T);)p=bt(p),y=bt(y);var E=it(p,1),I=it(y,1);for(y=it(y,2),p=it(p,2);!N(y);){var g=I.add(y);0>=g.l(T)&&(E=E.add(p),I=g),y=it(y,1),p=it(p,1)}return m=$(T,E.j(m)),new H(E,m)}for(E=A;0<=T.l(m);){for(p=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(p)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(p),g=I.j(m);M(g)||0<g.l(T);)p-=y,I=f(p),g=I.j(m);N(I)&&(I=R),E=E.add(I),T=$(T,g)}return new H(E,T)}r.A=function(T){return rt(this,T).h},r.and=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)&T.i(y);return new u(p,this.h&T.h)},r.or=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)|T.i(y);return new u(p,this.h|T.h)},r.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)^T.i(y);return new u(p,this.h^T.h)};function bt(T){for(var m=T.g.length+1,p=[],y=0;y<m;y++)p[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(p,T.h)}function it(T,m){var p=m>>5;m%=32;for(var y=T.g.length-p,E=[],I=0;I<y;I++)E[I]=0<m?T.i(I+p)>>>m|T.i(I+p+1)<<32-m:T.i(I+p);return new u(E,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,yo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,oe=u}).apply(typeof Mi<"u"?Mi:typeof self<"u"?self:typeof window<"u"?window:{});var Ln=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Eo,To,Xe,vo,qn,Gr,Io,wo,Ao;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ln=="object"&&Ln];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var c=0;c<s.length-1;c++){var v=s[c];if(!(v in l))break t;l=l[v]}s=s[s.length-1],c=l[s],a=a(c),a!=c&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,c=!1,v={next:function(){if(!c&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return c=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,l){return s.call.apply(s.bind,arguments)}function A(s,a,l){if(!s)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,c),s.apply(a,v)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,R.apply(null,arguments)}function S(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var c=l.slice();return c.push.apply(c,arguments),s.apply(this,c)}}function N(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(c,v,w){for(var C=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)C[Q-2]=arguments[Q];return a.prototype[v].apply(c,C)}}function M(s){const a=s.length;if(0<a){const l=Array(a);for(let c=0;c<a;c++)l[c]=s[c];return l}return[]}function k(s,a){for(let l=1;l<arguments.length;l++){const c=arguments[l];if(d(c)){const v=s.length||0,w=c.length||0;s.length=v+w;for(let C=0;C<w;C++)s[v+C]=c[C]}else s.push(c)}}class ${constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function G(s){return/^[\s\xa0]*$/.test(s)}function H(){var s=h.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var bt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function it(s,a,l){for(const c in s)a.call(l,s[c],c,s)}function T(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function m(s){const a={};for(const l in s)a[l]=s[l];return a}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,c;for(let v=1;v<arguments.length;v++){c=arguments[v];for(l in c)s[l]=c[l];for(let w=0;w<p.length;w++)l=p[w],Object.prototype.hasOwnProperty.call(c,l)&&(s[l]=c[l])}}function E(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function I(s){h.setTimeout(()=>{throw s},0)}function g(){var s=yr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class xt{constructor(){this.h=this.g=null}add(a,l){const c=De.get();c.set(a,l),this.h?this.h.next=c:this.g=c,this.h=c}}var De=new $(()=>new ja,s=>s.reset());class ja{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,be=!1,yr=new xt,xs=()=>{const s=h.Promise.resolve(void 0);Ne=()=>{s.then(za)}};var za=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){I(l)}var a=De;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}be=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Ka=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};h.addEventListener("test",l,a),h.removeEventListener("test",l,a)}catch{}return s}();function xe(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,c=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(bt){t:{try{rt(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:$a[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&xe.aa.h.call(this)}}N(xe,ht);var $a={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),Ga=0;function Qa(s,a,l,c,v){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!c,this.ha=v,this.key=++Ga,this.da=this.fa=!1}function En(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Tn(s){this.src=s,this.g={},this.h=0}Tn.prototype.add=function(s,a,l,c,v){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var C=Tr(s,a,c,v);return-1<C?(a=s[C],l||(a.fa=!1)):(a=new Qa(a,this.src,w,!!c,v),a.fa=l,s.push(a)),a};function Er(s,a){var l=a.type;if(l in s.g){var c=s.g[l],v=Array.prototype.indexOf.call(c,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(c,v,1),w&&(En(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Tr(s,a,l,c){for(var v=0;v<s.length;++v){var w=s[v];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==c)return v}return-1}var vr="closure_lm_"+(1e6*Math.random()|0),Ir={};function Ms(s,a,l,c,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Ms(s,a[w],l,c,v);return null}return l=Fs(l),s&&s[yn]?s.K(a,l,f(c)?!!c.capture:!!c,v):Ha(s,a,l,!1,c,v)}function Ha(s,a,l,c,v,w){if(!a)throw Error("Invalid event type");var C=f(v)?!!v.capture:!!v,Q=Ar(s);if(Q||(s[vr]=Q=new Tn(s)),l=Q.add(a,l,c,C,w),l.proxy)return l;if(c=Wa(),l.proxy=c,c.src=s,c.listener=l,s.addEventListener)Ka||(v=C),v===void 0&&(v=!1),s.addEventListener(a.toString(),c,v);else if(s.attachEvent)s.attachEvent(Os(a.toString()),c);else if(s.addListener&&s.removeListener)s.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Wa(){function s(l){return a.call(s.src,s.listener,l)}const a=Xa;return s}function Ls(s,a,l,c,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)Ls(s,a[w],l,c,v);else c=f(c)?!!c.capture:!!c,l=Fs(l),s&&s[yn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=Tr(w,l,c,v),-1<l&&(En(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=Ar(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Tr(a,l,c,v)),(l=-1<s?a[s]:null)&&wr(l))}function wr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[yn])Er(a.i,s);else{var l=s.type,c=s.proxy;a.removeEventListener?a.removeEventListener(l,c,s.capture):a.detachEvent?a.detachEvent(Os(l),c):a.addListener&&a.removeListener&&a.removeListener(c),(l=Ar(a))?(Er(l,s),l.h==0&&(l.src=null,a[vr]=null)):En(s)}}}function Os(s){return s in Ir?Ir[s]:Ir[s]="on"+s}function Xa(s,a){if(s.da)s=!0;else{a=new xe(a,this);var l=s.listener,c=s.ha||s.src;s.fa&&wr(s),s=l.call(c,a)}return s}function Ar(s){return s=s[vr],s instanceof Tn?s:null}var Rr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fs(s){return typeof s=="function"?s:(s[Rr]||(s[Rr]=function(a){return s.handleEvent(a)}),s[Rr])}function ct(){Bt.call(this),this.i=new Tn(this),this.M=this,this.F=null}N(ct,Bt),ct.prototype[yn]=!0,ct.prototype.removeEventListener=function(s,a,l,c){Ls(this,s,a,l,c)};function yt(s,a){var l,c=s.F;if(c)for(l=[];c;c=c.F)l.push(c);if(s=s.M,c=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var v=a;a=new ht(c,s),y(a,v)}if(v=!0,l)for(var w=l.length-1;0<=w;w--){var C=a.g=l[w];v=vn(C,c,!0,a)&&v}if(C=a.g=s,v=vn(C,c,!0,a)&&v,v=vn(C,c,!1,a)&&v,l)for(w=0;w<l.length;w++)C=a.g=l[w],v=vn(C,c,!1,a)&&v}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],c=0;c<l.length;c++)En(l[c]);delete s.g[a],s.h--}}this.F=null},ct.prototype.K=function(s,a,l,c){return this.i.add(String(s),a,!1,l,c)},ct.prototype.L=function(s,a,l,c){return this.i.add(String(s),a,!0,l,c)};function vn(s,a,l,c){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var C=a[w];if(C&&!C.da&&C.capture==l){var Q=C.listener,ot=C.ha||C.src;C.fa&&Er(s.i,C),v=Q.call(ot,c)!==!1&&v}}return v&&!c.defaultPrevented}function Us(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(s,a||0)}function Bs(s){s.g=Us(()=>{s.g=null,s.i&&(s.i=!1,Bs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Ya extends Bt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Bs(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Me(s){Bt.call(this),this.h=s,this.g={}}N(Me,Bt);var qs=[];function js(s){it(s.g,function(a,l){this.g.hasOwnProperty(l)&&wr(a)},s),s.g={}}Me.prototype.N=function(){Me.aa.N.call(this),js(this)},Me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pr=h.JSON.stringify,Ja=h.JSON.parse,Za=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function Vr(){}Vr.prototype.h=null;function zs(s){return s.h||(s.h=s.i())}function Ks(){}var Le={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sr(){ht.call(this,"d")}N(Sr,ht);function Cr(){ht.call(this,"c")}N(Cr,ht);var ee={},$s=null;function In(){return $s=$s||new ct}ee.La="serverreachability";function Gs(s){ht.call(this,ee.La,s)}N(Gs,ht);function Oe(s){const a=In();yt(a,new Gs(a))}ee.STAT_EVENT="statevent";function Qs(s,a){ht.call(this,ee.STAT_EVENT,s),this.stat=a}N(Qs,ht);function Et(s){const a=In();yt(a,new Qs(a,s))}ee.Ma="timingevent";function Hs(s,a){ht.call(this,ee.Ma,s),this.size=a}N(Hs,ht);function Fe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},a)}function Ue(){this.g=!0}Ue.prototype.xa=function(){this.g=!1};function tu(s,a,l,c,v,w){s.info(function(){if(s.g)if(w)for(var C="",Q=w.split("&"),ot=0;ot<Q.length;ot++){var j=Q[ot].split("=");if(1<j.length){var dt=j[0];j=j[1];var ft=dt.split("_");C=2<=ft.length&&ft[1]=="type"?C+(dt+"="+j+"&"):C+(dt+"=redacted&")}}else C=null;else C=w;return"XMLHTTP REQ ("+c+") [attempt "+v+"]: "+a+`
`+l+`
`+C})}function eu(s,a,l,c,v,w,C){s.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+v+"]: "+a+`
`+l+`
`+w+" "+C})}function de(s,a,l,c){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+ru(s,l)+(c?" "+c:"")})}function nu(s,a){s.info(function(){return"TIMEOUT: "+a})}Ue.prototype.info=function(){};function ru(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var c=l[s];if(!(2>c.length)){var v=c[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return Pr(l)}catch{return a}}var wn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ws={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kr;function An(){}N(An,Vr),An.prototype.g=function(){return new XMLHttpRequest},An.prototype.i=function(){return{}},kr=new An;function qt(s,a,l,c){this.j=s,this.i=a,this.l=l,this.R=c||1,this.U=new Me(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xs}function Xs(){this.i=null,this.g="",this.h=!1}var Ys={},Dr={};function Nr(s,a,l){s.L=1,s.v=Sn(Mt(a)),s.m=l,s.P=!0,Js(s,null)}function Js(s,a){s.F=Date.now(),Rn(s),s.A=Mt(s.v);var l=s.A,c=s.R;Array.isArray(c)||(c=[String(c)]),di(l.i,"t",c),s.C=0,l=s.j.J,s.h=new Xs,s.g=ki(s.j,l?a:null,!s.m),0<s.O&&(s.M=new Ya(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,c=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(qs[0]=v.toString()),v=qs);for(var w=0;w<v.length;w++){var C=Ms(l,v[w],c||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Oe(),tu(s.i,s.u,s.A,s.l,s.R,s.m)}qt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Lt(s)==3?a.j():this.Y(s)},qt.prototype.Y=function(s){try{if(s==this.g)t:{const ft=Lt(this.g);var a=this.g.Ba();const ge=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Ei(this.g)))){this.J||ft!=4||a==7||(a==8||0>=ge?Oe(3):Oe(2)),br(this);var l=this.g.Z();this.X=l;e:if(Zs(this)){var c=Ei(this.g);s="";var v=c.length,w=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ne(this),Be(this);var C="";break e}this.h.i=new h.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,s+=this.h.i.decode(c[a],{stream:!(w&&a==v-1)});c.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,eu(this.i,this.u,this.A,this.l,this.R,ft,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ot=this.g;if((Q=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Q)){var j=Q;break e}}j=null}if(l=j)de(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xr(this,l);else{this.o=!1,this.s=3,Et(12),ne(this),Be(this);break t}}if(this.P){l=!0;let Pt;for(;!this.J&&this.C<C.length;)if(Pt=su(this,C),Pt==Dr){ft==4&&(this.s=4,Et(14),l=!1),de(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==Ys){this.s=4,Et(15),de(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else de(this.i,this.l,Pt,null),xr(this,Pt);if(Zs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||C.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)de(this.i,this.l,C,"[Invalid Chunked Response]"),ne(this),Be(this);else if(0<C.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Br(dt),dt.M=!0,Et(11))}}else de(this.i,this.l,C,null),xr(this,C);ft==4&&ne(this),this.o&&!this.J&&(ft==4?Pi(this.j,this):(this.o=!1,Rn(this)))}else vu(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ne(this),Be(this)}}}catch{}finally{}};function Zs(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function su(s,a){var l=s.C,c=a.indexOf(`
`,l);return c==-1?Dr:(l=Number(a.substring(l,c)),isNaN(l)?Ys:(c+=1,c+l>a.length?Dr:(a=a.slice(c,c+l),s.C=c+l,a)))}qt.prototype.cancel=function(){this.J=!0,ne(this)};function Rn(s){s.S=Date.now()+s.I,ti(s,s.I)}function ti(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Fe(R(s.ba,s),a)}function br(s){s.B&&(h.clearTimeout(s.B),s.B=null)}qt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(nu(this.i,this.A),this.L!=2&&(Oe(),Et(17)),ne(this),this.s=2,Be(this)):ti(this,this.S-s)};function Be(s){s.j.G==0||s.J||Pi(s.j,s)}function ne(s){br(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,js(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function xr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Mr(l.h,s))){if(!s.K&&Mr(l.h,s)&&l.G==3){try{var c=l.Da.g.parse(a)}catch{c=null}if(Array.isArray(c)&&c.length==3){var v=c;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)bn(l),Dn(l);else break t;Ur(l),Et(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Fe(R(l.Za,l),6e3));if(1>=ri(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else se(l,11)}else if((s.K||l.g==s)&&bn(l),!G(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let j=v[a];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const dt=j[3];dt!=null&&(l.la=dt,l.j.info("VER="+l.la));const ft=j[4];ft!=null&&(l.Aa=ft,l.j.info("SVER="+l.Aa));const ge=j[5];ge!=null&&typeof ge=="number"&&0<ge&&(c=1.5*ge,l.L=c,l.j.info("backChannelRequestTimeoutMs_="+c)),c=l;const Pt=s.g;if(Pt){const Mn=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mn){var w=c.h;w.g||Mn.indexOf("spdy")==-1&&Mn.indexOf("quic")==-1&&Mn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Lr(w,w.h),w.h=null))}if(c.D){const qr=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;qr&&(c.ya=qr,X(c.I,c.D,qr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),c=l;var C=s;if(c.qa=Ci(c,c.J?c.ia:null,c.W),C.K){si(c.h,C);var Q=C,ot=c.L;ot&&(Q.I=ot),Q.B&&(br(Q),Rn(Q)),c.g=C}else Ai(c);0<l.i.length&&Nn(l)}else j[0]!="stop"&&j[0]!="close"||se(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?se(l,7):Fr(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}Oe(4)}catch{}}var iu=class{constructor(s,a){this.g=s,this.map=a}};function ei(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ni(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ri(s){return s.h?1:s.g?s.g.size:0}function Mr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Lr(s,a){s.g?s.g.add(a):s.h=a}function si(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ei.prototype.cancel=function(){if(this.i=ii(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ii(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return M(s.i)}function ou(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],l=s.length,c=0;c<l;c++)a.push(s[c]);return a}a=[],l=0;for(c in s)a[l++]=s[c];return a}function au(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const c in s)a[l++]=c;return a}}}function oi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=au(s),c=ou(s),v=c.length,w=0;w<v;w++)a.call(void 0,c[w],l&&l[w],s)}var ai=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var c=s[l].indexOf("="),v=null;if(0<=c){var w=s[l].substring(0,c);v=s[l].substring(c+1)}else w=s[l];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function re(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof re){this.h=s.h,Pn(this,s.j),this.o=s.o,this.g=s.g,Vn(this,s.s),this.l=s.l;var a=s.i,l=new ze;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),ui(this,l),this.m=s.m}else s&&(a=String(s).match(ai))?(this.h=!1,Pn(this,a[1]||"",!0),this.o=qe(a[2]||""),this.g=qe(a[3]||"",!0),Vn(this,a[4]),this.l=qe(a[5]||"",!0),ui(this,a[6]||"",!0),this.m=qe(a[7]||"")):(this.h=!1,this.i=new ze(null,this.h))}re.prototype.toString=function(){var s=[],a=this.j;a&&s.push(je(a,li,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(je(a,li,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(je(l,l.charAt(0)=="/"?cu:hu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",je(l,fu)),s.join("")};function Mt(s){return new re(s)}function Pn(s,a,l){s.j=l?qe(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Vn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ui(s,a,l){a instanceof ze?(s.i=a,mu(s.i,s.h)):(l||(a=je(a,du)),s.i=new ze(a,s.h))}function X(s,a,l){s.i.set(a,l)}function Sn(s){return X(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function qe(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function je(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,lu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function lu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var li=/[#\/\?@]/g,hu=/[#\?:]/g,cu=/[#\?]/g,du=/[#\?@]/g,fu=/#/g;function ze(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function jt(s){s.g||(s.g=new Map,s.h=0,s.i&&uu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=ze.prototype,r.add=function(s,a){jt(this),this.i=null,s=fe(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function hi(s,a){jt(s),a=fe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function ci(s,a){return jt(s),a=fe(s,a),s.g.has(a)}r.forEach=function(s,a){jt(this),this.g.forEach(function(l,c){l.forEach(function(v){s.call(a,v,c,this)},this)},this)},r.na=function(){jt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let c=0;c<a.length;c++){const v=s[c];for(let w=0;w<v.length;w++)l.push(a[c])}return l},r.V=function(s){jt(this);let a=[];if(typeof s=="string")ci(this,s)&&(a=a.concat(this.g.get(fe(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return jt(this),this.i=null,s=fe(this,s),ci(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function di(s,a,l){hi(s,a),0<l.length&&(s.i=null,s.g.set(fe(s,a),M(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var c=a[l];const w=encodeURIComponent(String(c)),C=this.V(c);for(c=0;c<C.length;c++){var v=w;C[c]!==""&&(v+="="+encodeURIComponent(String(C[c]))),s.push(v)}}return this.i=s.join("&")};function fe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function mu(s,a){a&&!s.j&&(jt(s),s.i=null,s.g.forEach(function(l,c){var v=c.toLowerCase();c!=v&&(hi(this,c),di(this,v,l))},s)),s.j=a}function gu(s,a){const l=new Ue;if(h.Image){const c=new Image;c.onload=S(zt,l,"TestLoadImage: loaded",!0,a,c),c.onerror=S(zt,l,"TestLoadImage: error",!1,a,c),c.onabort=S(zt,l,"TestLoadImage: abort",!1,a,c),c.ontimeout=S(zt,l,"TestLoadImage: timeout",!1,a,c),h.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=s}else a(!1)}function pu(s,a){const l=new Ue,c=new AbortController,v=setTimeout(()=>{c.abort(),zt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:c.signal}).then(w=>{clearTimeout(v),w.ok?zt(l,"TestPingServer: ok",!0,a):zt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),zt(l,"TestPingServer: error",!1,a)})}function zt(s,a,l,c,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),c(l)}catch{}}function _u(){this.g=new Za}function yu(s,a,l){const c=l||"";try{oi(s,function(v,w){let C=v;f(v)&&(C=Pr(v)),a.push(c+w+"="+encodeURIComponent(C))})}catch(v){throw a.push(c+"type="+encodeURIComponent("_badmap")),v}}function Ke(s){this.l=s.Ub||null,this.j=s.eb||!1}N(Ke,Vr),Ke.prototype.g=function(){return new Cn(this.l,this.j)},Ke.prototype.i=function(s){return function(){return s}}({});function Cn(s,a){ct.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Cn,ct),r=Cn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Ge(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$e(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ge(this)),this.g&&(this.readyState=3,Ge(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function fi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?$e(this):Ge(this),this.readyState==3&&fi(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,$e(this))},r.Qa=function(s){this.g&&(this.response=s,$e(this))},r.ga=function(){this.g&&$e(this)};function $e(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ge(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Ge(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function mi(s){let a="";return it(s,function(l,c){a+=c,a+=":",a+=l,a+=`\r
`}),a}function Or(s,a,l){t:{for(c in l){var c=!1;break t}c=!0}c||(l=mi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):X(s,a,l))}function Z(s){ct.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Z,ct);var Eu=/^https?$/i,Tu=["POST","PUT"];r=Z.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kr.g(),this.v=this.o?zs(this.o):zs(kr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){gi(this,w);return}if(s=l||"",l=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var v in c)l.set(v,c[v]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const w of c.keys())l.set(w,c.get(w));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=h.FormData&&s instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Tu,a,void 0))||c||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of l)this.g.setRequestHeader(w,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yi(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){gi(this,w)}};function gi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,pi(s),kn(s)}function pi(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,yt(this,"complete"),yt(this,"abort"),kn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kn(this,!0)),Z.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?_i(this):this.bb())},r.bb=function(){_i(this)};function _i(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Lt(s)!=4||s.Z()!=2)){if(s.u&&Lt(s)==4)Us(s.Ea,0,s);else if(yt(s,"readystatechange"),Lt(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var c;if(c=C===0){var v=String(s.D).match(ai)[1]||null;!v&&h.self&&h.self.location&&(v=h.self.location.protocol.slice(0,-1)),c=!Eu.test(v?v.toLowerCase():"")}l=c}if(l)yt(s,"complete"),yt(s,"success");else{s.m=6;try{var w=2<Lt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",pi(s)}}finally{kn(s)}}}}function kn(s,a){if(s.g){yi(s);const l=s.g,c=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||yt(s,"ready");try{l.onreadystatechange=c}catch{}}}function yi(s){s.I&&(h.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Lt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Ja(a)}};function Ei(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function vu(s){const a={};s=(s.g&&2<=Lt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<s.length;c++){if(G(s[c]))continue;var l=E(s[c]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[v]||[];a[v]=w,w.push(l)}T(a,function(c){return c.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qe(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Ti(s){this.Aa=0,this.i=[],this.j=new Ue,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qe("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qe("baseRetryDelayMs",5e3,s),this.cb=Qe("retryDelaySeedMs",1e4,s),this.Wa=Qe("forwardChannelMaxRetries",2,s),this.wa=Qe("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ei(s&&s.concurrentRequestLimit),this.Da=new _u,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ti.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,c){Et(0),this.W=s,this.H=a||{},l&&c!==void 0&&(this.H.OSID=l,this.H.OAID=c),this.F=this.X,this.I=Ci(this,null,this.W),Nn(this)};function Fr(s){if(vi(s),s.G==3){var a=s.U++,l=Mt(s.I);if(X(l,"SID",s.K),X(l,"RID",a),X(l,"TYPE","terminate"),He(s,l),a=new qt(s,s.j,a),a.L=2,a.v=Sn(Mt(l)),l=!1,h.navigator&&h.navigator.sendBeacon)try{l=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&h.Image&&(new Image().src=a.v,l=!0),l||(a.g=ki(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Rn(a)}Si(s)}function Dn(s){s.g&&(Br(s),s.g.cancel(),s.g=null)}function vi(s){Dn(s),s.u&&(h.clearTimeout(s.u),s.u=null),bn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&h.clearTimeout(s.s),s.s=null)}function Nn(s){if(!ni(s.h)&&!s.s){s.s=!0;var a=s.Ga;Ne||xs(),be||(Ne(),be=!0),yr.add(a,s),s.B=0}}function Iu(s,a){return ri(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Fe(R(s.Ga,s,a),Vi(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new qt(this,this.j,s);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var c=this.i[l];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break e}c=void 0}if(c===void 0)break;if(a+=c,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=wi(this,v,a),l=Mt(this.I),X(l,"RID",s),X(l,"CVER",22),this.D&&X(l,"X-HTTP-Session-Id",this.D),He(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(mi(w)))+"&"+a:this.m&&Or(l,this.m,w)),Lr(this.h,v),this.Ua&&X(l,"TYPE","init"),this.P?(X(l,"$req",a),X(l,"SID","null"),v.T=!0,Nr(v,l,null)):Nr(v,l,a),this.G=2}}else this.G==3&&(s?Ii(this,s):this.i.length==0||ni(this.h)||Ii(this))};function Ii(s,a){var l;a?l=a.l:l=s.U++;const c=Mt(s.I);X(c,"SID",s.K),X(c,"RID",l),X(c,"AID",s.T),He(s,c),s.m&&s.o&&Or(c,s.m,s.o),l=new qt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=wi(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Lr(s.h,l),Nr(l,c,a)}function He(s,a){s.H&&it(s.H,function(l,c){X(a,c,l)}),s.l&&oi({},function(l,c){X(a,c,l)})}function wi(s,a,l){l=Math.min(s.i.length,l);var c=s.l?R(s.l.Na,s.l,s):null;t:{var v=s.i;let w=-1;for(;;){const C=["count="+l];w==-1?0<l?(w=v[0].g,C.push("ofs="+w)):w=0:C.push("ofs="+w);let Q=!0;for(let ot=0;ot<l;ot++){let j=v[ot].g;const dt=v[ot].map;if(j-=w,0>j)w=Math.max(0,v[ot].g-100),Q=!1;else try{yu(dt,C,"req"+j+"_")}catch{c&&c(dt)}}if(Q){c=C.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,c}function Ai(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Ne||xs(),be||(Ne(),be=!0),yr.add(a,s),s.v=0}}function Ur(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Fe(R(s.Fa,s),Vi(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Ri(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Fe(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Dn(this),Ri(this))};function Br(s){s.A!=null&&(h.clearTimeout(s.A),s.A=null)}function Ri(s){s.g=new qt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Mt(s.qa);X(a,"RID","rpc"),X(a,"SID",s.K),X(a,"AID",s.T),X(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&X(a,"TO",s.ja),X(a,"TYPE","xmlhttp"),He(s,a),s.m&&s.o&&Or(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Sn(Mt(a)),l.m=null,l.P=!0,Js(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Dn(this),Ur(this),Et(19))};function bn(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function Pi(s,a){var l=null;if(s.g==a){bn(s),Br(s),s.g=null;var c=2}else if(Mr(s.h,a))l=a.D,si(s.h,a),c=1;else return;if(s.G!=0){if(a.o)if(c==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=s.B;c=In(),yt(c,new Hs(c,l)),Nn(s)}else Ai(s);else if(v=a.s,v==3||v==0&&0<a.X||!(c==1&&Iu(s,a)||c==2&&Ur(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),v){case 1:se(s,5);break;case 4:se(s,10);break;case 3:se(s,6);break;default:se(s,2)}}}function Vi(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function se(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),c=s.Xa;const v=!c;c=new re(c||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Pn(c,"https"),Sn(c),v?gu(c.toString(),l):pu(c.toString(),l)}else Et(2);s.G=0,s.l&&s.l.sa(a),Si(s),vi(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Si(s){if(s.G=0,s.ka=[],s.l){const a=ii(s.h);(a.length!=0||s.i.length!=0)&&(k(s.ka,a),k(s.ka,s.i),s.h.i.length=0,M(s.i),s.i.length=0),s.l.ra()}}function Ci(s,a,l){var c=l instanceof re?Mt(l):new re(l);if(c.g!="")a&&(c.g=a+"."+c.g),Vn(c,c.s);else{var v=h.location;c=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new re(null);c&&Pn(w,c),a&&(w.g=a),v&&Vn(w,v),l&&(w.l=l),c=w}return l=s.D,a=s.ya,l&&a&&X(c,l,a),X(c,"VER",s.la),He(s,c),c}function ki(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Z(new Ke({eb:l})):new Z(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Di(){}r=Di.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function xn(){}xn.prototype.g=function(s,a){return new vt(s,a)};function vt(s,a){ct.call(this),this.g=new Ti(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!G(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!G(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new me(this)}N(vt,ct),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Fr(this.g)},vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Pr(s),s=l);a.i.push(new iu(a.Ya++,s)),a.G==3&&Nn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,Fr(this.g),delete this.g,vt.aa.N.call(this)};function Ni(s){Sr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}N(Ni,Sr);function bi(){Cr.call(this),this.status=1}N(bi,Cr);function me(s){this.g=s}N(me,Di),me.prototype.ua=function(){yt(this.g,"a")},me.prototype.ta=function(s){yt(this.g,new Ni(s))},me.prototype.sa=function(s){yt(this.g,new bi)},me.prototype.ra=function(){yt(this.g,"b")},xn.prototype.createWebChannel=xn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Ao=function(){return new xn},wo=function(){return In()},Io=ee,Gr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wn.NO_ERROR=0,wn.TIMEOUT=8,wn.HTTP_ERROR=6,qn=wn,Ws.COMPLETE="complete",vo=Ws,Ks.EventType=Le,Le.OPEN="a",Le.CLOSE="b",Le.ERROR="c",Le.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Xe=Ks,To=Ke,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Eo=Z}).apply(typeof Ln<"u"?Ln:typeof self<"u"?self:typeof window<"u"?window:{});const Li="@firebase/firestore";/**
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
 */const ae=new wu("@firebase/firestore");function We(){return ae.logLevel}function D(r,...t){if(ae.logLevel<=$t.DEBUG){const e=t.map(as);ae.debug(`Firestore (${Se}): ${r}`,...e)}}function Ft(r,...t){if(ae.logLevel<=$t.ERROR){const e=t.map(as);ae.error(`Firestore (${Se}): ${r}`,...e)}}function Te(r,...t){if(ae.logLevel<=$t.WARN){const e=t.map(as);ae.warn(`Firestore (${Se}): ${r}`,...e)}}function as(r){if(typeof r=="string")return r;try{/**
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
 */function O(r="Unexpected state"){const t=`FIRESTORE (${Se}) INTERNAL ASSERTION FAILED: `+r;throw Ft(t),new Error(t)}function W(r,t){r||O()}function U(r,t){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Pu{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ht{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Ro{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ou{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class Fu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Uu{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=d=>this.i!==n?(n=this.i,e(d)):Promise.resolve();let o=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ht,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},h=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(d=>h(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?h(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ht)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string"),new Ro(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new gt(t)}}class Bu{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class qu{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Bu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ju{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string"),this.R=e.token,new ju(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ku(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class Po{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Ku(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function ve(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
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
 */class K{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return K.fromMillis(Date.now())}static fromDate(t){return K.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new K(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new K(0,0))}static max(){return new F(new K(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class sn{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return sn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof sn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=t.get(i),u=e.get(i);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends sn{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new b(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const $u=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends sn{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return $u.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new b(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new b(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new b(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=d,i+=2}else h==="`"?(u=!u,i++):h!=="."||u?(n+=h,i++):(o(),i++)}if(o(),u)throw new b(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(Y.fromString(t))}static fromName(t){return new x(Y.fromString(t).popFirst(5))}static empty(){return new x(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new Y(t.slice()))}}function Gu(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=F.fromTimestamp(n===1e9?new K(e+1,0):new K(e,n));return new Yt(i,x.empty(),t)}function Qu(r){return new Yt(r.readTime,r.key,-1)}class Yt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Yt(F.min(),x.empty(),-1)}static max(){return new Yt(F.max(),x.empty(),-1)}}function Hu(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
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
 */const Wu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function dn(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Wu)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,n)=>{e(t)})}static reject(t){return new V((e,n)=>{n(t)})}static waitFor(t){return new V((e,n)=>{let i=0,o=0,u=!1;t.forEach(h=>{++i,h.next(()=>{++o,u&&o===i&&e()},d=>n(d))}),u=!0,o===i&&e()})}static or(t){let e=V.resolve(!1);for(const n of t)e=e.next(i=>i?V.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new V((n,i)=>{const o=t.length,u=new Array(o);let h=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{u[f]=_,++h,h===o&&n(u)},_=>i(_))}})}static doWhile(t,e){return new V((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function Yu(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function fn(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class us{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}us.oe=-1;function nr(r){return r==null}function Qn(r){return r===0&&1/r==-1/0}function Ju(r){return typeof r=="number"&&Number.isInteger(r)&&!Qn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Oi(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function he(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Vo(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class J{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new On(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new On(this.root,t,this.comparator,!1)}getReverseIterator(){return new On(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new On(this.root,t,this.comparator,!0)}}class On{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new at(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,i,o){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fi(this.data.getIterator())}getIteratorFrom(t){return new Fi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class Fi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _t{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new So("Invalid base64 string: "+o):o}}(t);return new _t(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new _t(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Zu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(r){if(W(!!r),typeof r=="string"){let t=0;const e=Zu.exec(r);if(W(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:et(r.seconds),nanos:et(r.nanos)}}function et(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ue(r){return typeof r=="string"?_t.fromBase64String(r):_t.fromUint8Array(r)}/**
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
 */function ls(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function hs(r){const t=r.mapValue.fields.__previous_value__;return ls(t)?hs(t):t}function on(r){const t=Jt(r.mapValue.fields.__local_write_time__.timestampValue);return new K(t.seconds,t.nanos)}/**
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
 */class tl{constructor(t,e,n,i,o,u,h,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=f}}class an{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new an("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof an&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Fn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function le(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ls(r)?4:el(r)?9007199254740991:10:O()}function Dt(r,t){if(r===t)return!0;const e=le(r);if(e!==le(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return on(r).isEqual(on(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Jt(i.timestampValue),h=Jt(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return ue(i.bytesValue).isEqual(ue(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return et(i.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return et(i.integerValue)===et(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=et(i.doubleValue),h=et(o.doubleValue);return u===h?Qn(u)===Qn(h):isNaN(u)&&isNaN(h)}return!1}(r,t);case 9:return ve(r.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:return function(i,o){const u=i.mapValue.fields||{},h=o.mapValue.fields||{};if(Oi(u)!==Oi(h))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(h[d]===void 0||!Dt(u[d],h[d])))return!1;return!0}(r,t);default:return O()}}function un(r,t){return(r.values||[]).find(e=>Dt(e,t))!==void 0}function Ie(r,t){if(r===t)return 0;const e=le(r),n=le(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(o,u){const h=et(o.integerValue||o.doubleValue),d=et(u.integerValue||u.doubleValue);return h<d?-1:h>d?1:h===d?0:isNaN(h)?isNaN(d)?0:-1:1}(r,t);case 3:return Ui(r.timestampValue,t.timestampValue);case 4:return Ui(on(r),on(t));case 5:return z(r.stringValue,t.stringValue);case 6:return function(o,u){const h=ue(o),d=ue(u);return h.compareTo(d)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const h=o.split("/"),d=u.split("/");for(let f=0;f<h.length&&f<d.length;f++){const _=z(h[f],d[f]);if(_!==0)return _}return z(h.length,d.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const h=z(et(o.latitude),et(u.latitude));return h!==0?h:z(et(o.longitude),et(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return function(o,u){const h=o.values||[],d=u.values||[];for(let f=0;f<h.length&&f<d.length;++f){const _=Ie(h[f],d[f]);if(_)return _}return z(h.length,d.length)}(r.arrayValue,t.arrayValue);case 10:return function(o,u){if(o===Fn.mapValue&&u===Fn.mapValue)return 0;if(o===Fn.mapValue)return 1;if(u===Fn.mapValue)return-1;const h=o.fields||{},d=Object.keys(h),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let A=0;A<d.length&&A<_.length;++A){const R=z(d[A],_[A]);if(R!==0)return R;const S=Ie(h[d[A]],f[_[A]]);if(S!==0)return S}return z(d.length,_.length)}(r.mapValue,t.mapValue);default:throw O()}}function Ui(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=Jt(r),n=Jt(t),i=z(e.seconds,n.seconds);return i!==0?i:z(e.nanos,n.nanos)}function we(r){return Qr(r)}function Qr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Jt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ue(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return x.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Qr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${Qr(e.fields[u])}`;return i+"}"}(r.mapValue):O()}function Hr(r){return!!r&&"integerValue"in r}function cs(r){return!!r&&"arrayValue"in r}function Bi(r){return!!r&&"nullValue"in r}function qi(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function jn(r){return!!r&&"mapValue"in r}function Ze(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return he(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Ze(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ze(r.arrayValue.values[e]);return t}return Object.assign({},r)}function el(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(t){this.value=t}static empty(){return new Tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!jn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ze(e)}setAll(t){let e=ut.emptyPath(),n={},i=[];t.forEach((u,h)=>{if(!e.isImmediateParentOf(h)){const d=this.getFieldsMap(e);this.applyChanges(d,n,i),n={},i=[],e=h.popLast()}u?n[h.lastSegment()]=Ze(u):i.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());jn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];jn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){he(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new Tt(Ze(this.value))}}function Co(r){const t=[];return he(r.fields,(e,n)=>{const i=new ut([e]);if(jn(n)){const o=Co(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new It(t)}/**
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
 */class pt{constructor(t,e,n,i,o,u,h){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(t){return new pt(t,0,F.min(),F.min(),F.min(),Tt.empty(),0)}static newFoundDocument(t,e,n,i){return new pt(t,1,e,F.min(),n,i,0)}static newNoDocument(t,e){return new pt(t,2,e,F.min(),F.min(),Tt.empty(),0)}static newUnknownDocument(t,e){return new pt(t,3,e,F.min(),F.min(),Tt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hn{constructor(t,e){this.position=t,this.inclusive=e}}function ji(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=x.comparator(x.fromName(u.referenceValue),e.key):n=Ie(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function zi(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Dt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class Wn{constructor(t,e="asc"){this.field=t,this.dir=e}}function nl(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class ko{}class nt extends ko{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new sl(t,e,n):e==="array-contains"?new al(t,n):e==="in"?new ul(t,n):e==="not-in"?new ll(t,n):e==="array-contains-any"?new hl(t,n):new nt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new il(t,n):new ol(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ie(e,this.value)):e!==null&&le(this.value)===le(e)&&this.matchesComparison(Ie(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends ko{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Nt(t,e)}matches(t){return Do(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Do(r){return r.op==="and"}function No(r){return rl(r)&&Do(r)}function rl(r){for(const t of r.filters)if(t instanceof Nt)return!1;return!0}function Wr(r){if(r instanceof nt)return r.field.canonicalString()+r.op.toString()+we(r.value);if(No(r))return r.filters.map(t=>Wr(t)).join(",");{const t=r.filters.map(e=>Wr(e)).join(",");return`${r.op}(${t})`}}function bo(r,t){return r instanceof nt?function(n,i){return i instanceof nt&&n.op===i.op&&n.field.isEqual(i.field)&&Dt(n.value,i.value)}(r,t):r instanceof Nt?function(n,i){return i instanceof Nt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,h)=>o&&bo(u,i.filters[h]),!0):!1}(r,t):void O()}function xo(r){return r instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${we(e.value)}`}(r):r instanceof Nt?function(e){return e.op.toString()+" {"+e.getFilters().map(xo).join(" ,")+"}"}(r):"Filter"}class sl extends nt{constructor(t,e,n){super(t,e,n),this.key=x.fromName(n.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class il extends nt{constructor(t,e){super(t,"in",e),this.keys=Mo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ol extends nt{constructor(t,e){super(t,"not-in",e),this.keys=Mo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Mo(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>x.fromName(n.referenceValue))}class al extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return cs(e)&&un(e.arrayValue,this.value)}}class ul extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&un(this.value.arrayValue,e)}}class ll extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!un(this.value.arrayValue,e)}}class hl extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!cs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>un(this.value.arrayValue,n))}}/**
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
 */class cl{constructor(t,e=null,n=[],i=[],o=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=h,this.ue=null}}function Ki(r,t=null,e=[],n=[],i=null,o=null,u=null){return new cl(r,t,e,n,i,o,u)}function ds(r){const t=U(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Wr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),nr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>we(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>we(n)).join(",")),t.ue=e}return t.ue}function fs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!nl(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!bo(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!zi(r.startAt,t.startAt)&&zi(r.endAt,t.endAt)}function Xr(r){return x.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class rr{constructor(t,e=null,n=[],i=[],o=null,u="F",h=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function dl(r,t,e,n,i,o,u,h){return new rr(r,t,e,n,i,o,u,h)}function Lo(r){return new rr(r)}function $i(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function fl(r){return r.collectionGroup!==null}function tn(r){const t=U(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new lt(ut.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(h=h.add(f.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Wn(o,n))}),e.has(ut.keyField().canonicalString())||t.ce.push(new Wn(ut.keyField(),n))}return t.ce}function St(r){const t=U(r);return t.le||(t.le=ml(t,tn(r))),t.le}function ml(r,t){if(r.limitType==="F")return Ki(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Wn(i.field,o)});const e=r.endAt?new Hn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Hn(r.startAt.position,r.startAt.inclusive):null;return Ki(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Yr(r,t,e){return new rr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function sr(r,t){return fs(St(r),St(t))&&r.limitType===t.limitType}function Oo(r){return`${ds(St(r))}|lt:${r.limitType}`}function pe(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>xo(i)).join(", ")}]`),nr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>we(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>we(i)).join(",")),`Target(${n})`}(St(r))}; limitType=${r.limitType})`}function ir(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):x.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of tn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,h,d){const f=ji(u,h,d);return u.inclusive?f<=0:f<0}(n.startAt,tn(n),i)||n.endAt&&!function(u,h,d){const f=ji(u,h,d);return u.inclusive?f>=0:f>0}(n.endAt,tn(n),i))}(r,t)}function gl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Fo(r){return(t,e)=>{let n=!1;for(const i of tn(r)){const o=pl(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function pl(r,t,e){const n=r.field.isKeyField()?x.comparator(t.key,e.key):function(o,u,h){const d=u.data.field(o),f=h.data.field(o);return d!==null&&f!==null?Ie(d,f):O()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
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
 */class Ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){he(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Vo(this.inner)}size(){return this.innerSize}}/**
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
 */const _l=new J(x.comparator);function Ut(){return _l}const Uo=new J(x.comparator);function Ye(...r){let t=Uo;for(const e of r)t=t.insert(e.key,e);return t}function Bo(r){let t=Uo;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ie(){return en()}function qo(){return en()}function en(){return new Ce(r=>r.toString(),(r,t)=>r.isEqual(t))}const yl=new J(x.comparator),El=new lt(x.comparator);function B(...r){let t=El;for(const e of r)t=t.add(e);return t}const Tl=new lt(z);function vl(){return Tl}/**
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
 */function jo(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qn(t)?"-0":t}}function zo(r){return{integerValue:""+r}}function Il(r,t){return Ju(t)?zo(t):jo(r,t)}/**
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
 */class or{constructor(){this._=void 0}}function wl(r,t,e){return r instanceof Xn?function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ls(o)&&(o=hs(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof ln?$o(r,t):r instanceof hn?Go(r,t):function(i,o){const u=Ko(i,o),h=Gi(u)+Gi(i.Pe);return Hr(u)&&Hr(i.Pe)?zo(h):jo(i.serializer,h)}(r,t)}function Al(r,t,e){return r instanceof ln?$o(r,t):r instanceof hn?Go(r,t):e}function Ko(r,t){return r instanceof Yn?function(n){return Hr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Xn extends or{}class ln extends or{constructor(t){super(),this.elements=t}}function $o(r,t){const e=Qo(t);for(const n of r.elements)e.some(i=>Dt(i,n))||e.push(n);return{arrayValue:{values:e}}}class hn extends or{constructor(t){super(),this.elements=t}}function Go(r,t){let e=Qo(t);for(const n of r.elements)e=e.filter(i=>!Dt(i,n));return{arrayValue:{values:e}}}class Yn extends or{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Gi(r){return et(r.integerValue||r.doubleValue)}function Qo(r){return cs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Rl(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof ln&&i instanceof ln||n instanceof hn&&i instanceof hn?ve(n.elements,i.elements,Dt):n instanceof Yn&&i instanceof Yn?Dt(n.Pe,i.Pe):n instanceof Xn&&i instanceof Xn}(r.transform,t.transform)}class Pl{constructor(t,e){this.version=t,this.transformResults=e}}class Ct{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ct}static exists(t){return new Ct(void 0,t)}static updateTime(t){return new Ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function zn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ar{}function Ho(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Xo(r.key,Ct.none()):new mn(r.key,r.data,Ct.none());{const e=r.data,n=Tt.empty();let i=new lt(ut.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new te(r.key,n,new It(i.toArray()),Ct.none())}}function Vl(r,t,e){r instanceof mn?function(i,o,u){const h=i.value.clone(),d=Hi(i.fieldTransforms,o,u.transformResults);h.setAll(d),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):r instanceof te?function(i,o,u){if(!zn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const h=Hi(i.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Wo(i)),d.setAll(h),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function nn(r,t,e,n){return r instanceof mn?function(o,u,h,d){if(!zn(o.precondition,u))return h;const f=o.value.clone(),_=Wi(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof te?function(o,u,h,d){if(!zn(o.precondition,u))return h;const f=Wi(o.fieldTransforms,d,u),_=u.data;return _.setAll(Wo(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,h){return zn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(r,t,e)}function Sl(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=Ko(n.transform,i||null);o!=null&&(e===null&&(e=Tt.empty()),e.set(n.field,o))}return e||null}function Qi(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&ve(n,i,(o,u)=>Rl(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class mn extends ar{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class te extends ar{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Wo(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Hi(r,t,e){const n=new Map;W(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,h=t.data.field(o.field);n.set(o.field,Al(u,h,e[i]))}return n}function Wi(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,wl(o,u,t))}return n}class Xo extends ar{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cl extends ar{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class kl{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Vl(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=nn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=nn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=qo();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=e.has(i.key)?null:h;const d=Ho(u,h);d!==null&&n.set(i.key,d),u.isValidDocument()||u.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&ve(this.mutations,t.mutations,(e,n)=>Qi(e,n))&&ve(this.baseMutations,t.baseMutations,(e,n)=>Qi(e,n))}}class ms{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){W(t.mutations.length===n.length);let i=function(){return yl}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new ms(t,e,n,i)}}/**
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
 */class Nl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var tt,q;function bl(r){switch(r){default:return O();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Yo(r){if(r===void 0)return Ft("GRPC error has no .code"),P.UNKNOWN;switch(r){case tt.OK:return P.OK;case tt.CANCELLED:return P.CANCELLED;case tt.UNKNOWN:return P.UNKNOWN;case tt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case tt.INTERNAL:return P.INTERNAL;case tt.UNAVAILABLE:return P.UNAVAILABLE;case tt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case tt.NOT_FOUND:return P.NOT_FOUND;case tt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case tt.ABORTED:return P.ABORTED;case tt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case tt.DATA_LOSS:return P.DATA_LOSS;default:return O()}}(q=tt||(tt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xl(){return new TextEncoder}/**
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
 */const Ml=new oe([4294967295,4294967295],0);function Xi(r){const t=xl().encode(r),e=new yo;return e.update(t),new Uint8Array(e.digest())}function Yi(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new oe([e,n],0),new oe([i,o],0)]}class gs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Je(`Invalid padding: ${e}`);if(n<0)throw new Je(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Je(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Je(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=oe.fromNumber(this.Ie)}Ee(t,e,n){let i=t.add(e.multiply(oe.fromNumber(n)));return i.compare(Ml)===1&&(i=new oe([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Xi(t),[n,i]=Yi(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new gs(o,i,e);return n.forEach(h=>u.insert(h)),u}insert(t){if(this.Ie===0)return;const e=Xi(t),[n,i]=Yi(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Je extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ur{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,gn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ur(F.min(),i,new J(z),Ut(),B())}}class gn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new gn(n,e,B(),B(),B())}}/**
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
 */class Kn{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class Jo{constructor(t,e){this.targetId=t,this.me=e}}class Zo{constructor(t,e,n=_t.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Ji{constructor(){this.fe=0,this.ge=to(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=B(),e=B(),n=B();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:O()}}),new gn(this.pe,this.ye,t,e,n)}ve(){this.we=!1,this.ge=to()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ll{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ut(),this.qe=Zi(),this.Qe=new J(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,n=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Xr(o))if(n===0){const u=new x(o.path);this.Ue(e,u,pt.newNoDocument(u,F.min()))}else W(n===1);else{const u=this.Ye(e);if(u!==n){const h=this.Ze(t),d=h?this.Xe(h,t,u):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,h;try{u=ue(n).toUint8Array()}catch(d){if(d instanceof So)return Te("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{h=new gs(u,i,o)}catch(d){return Te(d instanceof Je?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return h.Ie===0?null:h}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.Le.tt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const h=this.Je(u);if(h){if(o.current&&Xr(h.target)){const d=new x(h.target.path);this.ke.get(d)!==null||this.it(u,d)||this.Ue(u,d,pt.newNoDocument(d,t))}o.be&&(e.set(u,o.Ce()),o.ve())}});let n=B();this.qe.forEach((o,u)=>{let h=!0;u.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const i=new ur(t,e,this.Qe,this.ke,n);return this.ke=Ut(),this.qe=Zi(),this.Qe=new J(z),i}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ji,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new lt(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ji),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Zi(){return new J(x.comparator)}function to(){return new J(x.comparator)}const Ol={asc:"ASCENDING",desc:"DESCENDING"},Fl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ul={and:"AND",or:"OR"};class Bl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Jr(r,t){return r.useProto3Json||nr(t)?t:{value:t}}function Jn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ta(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function ql(r,t){return Jn(r,t.toTimestamp())}function kt(r){return W(!!r),F.fromTimestamp(function(e){const n=Jt(e);return new K(n.seconds,n.nanos)}(r))}function ps(r,t){return Zr(r,t).canonicalString()}function Zr(r,t){const e=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function ea(r){const t=Y.fromString(r);return W(oa(t)),t}function ts(r,t){return ps(r.databaseId,t.path)}function jr(r,t){const e=ea(t);if(e.get(1)!==r.databaseId.projectId)throw new b(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new b(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new x(ra(e))}function na(r,t){return ps(r.databaseId,t)}function jl(r){const t=ea(r);return t.length===4?Y.emptyPath():ra(t)}function es(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ra(r){return W(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function eo(r,t,e){return{name:ts(r,t),fields:e.value.mapValue.fields}}function zl(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(W(_===void 0||typeof _=="string"),_t.fromBase64String(_||"")):(W(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),_t.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,h=u&&function(f){const _=f.code===void 0?P.UNKNOWN:Yo(f.code);return new b(_,f.message||"")}(u);e=new Zo(n,i,o,h||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=jr(r,n.document.name),o=kt(n.document.updateTime),u=n.document.createTime?kt(n.document.createTime):F.min(),h=new Tt({mapValue:{fields:n.document.fields}}),d=pt.newFoundDocument(i,o,u,h),f=n.targetIds||[],_=n.removedTargetIds||[];e=new Kn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=jr(r,n.document),o=n.readTime?kt(n.readTime):F.min(),u=pt.newNoDocument(i,o),h=n.removedTargetIds||[];e=new Kn([],h,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=jr(r,n.document),o=n.removedTargetIds||[];e=new Kn([],o,i,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new Nl(i,o),h=n.targetId;e=new Jo(h,u)}}return e}function Kl(r,t){let e;if(t instanceof mn)e={update:eo(r,t.key,t.value)};else if(t instanceof Xo)e={delete:ts(r,t.key)};else if(t instanceof te)e={update:eo(r,t.key,t.data),updateMask:Zl(t.fieldMask)};else{if(!(t instanceof Cl))return O();e={verify:ts(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const h=u.transform;if(h instanceof Xn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof ln)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof hn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Yn)return{fieldPath:u.field.canonicalString(),increment:h.Pe};throw O()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:ql(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(r,t.precondition)),e}function $l(r,t){return r&&r.length>0?(W(t!==void 0),r.map(e=>function(i,o){let u=i.updateTime?kt(i.updateTime):kt(o);return u.isEqual(F.min())&&(u=kt(o)),new Pl(u,i.transformResults||[])}(e,t))):[]}function Gl(r,t){return{documents:[na(r,t.path)]}}function Ql(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=na(r,i);const o=function(f){if(f.length!==0)return ia(Nt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:_e(R.field),direction:Xl(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const h=Jr(r,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function Hl(r){let t=jl(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){W(n===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const R=sa(A);return R instanceof Nt&&No(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(N){return new Wn(ye(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(e.orderBy));let h=null;e.limit&&(h=function(A){let R;return R=typeof A=="object"?A.value:A,nr(R)?null:R}(e.limit));let d=null;e.startAt&&(d=function(A){const R=!!A.before,S=A.values||[];return new Hn(S,R)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const R=!A.before,S=A.values||[];return new Hn(S,R)}(e.endAt)),dl(t,i,u,o,h,"F",d,f)}function Wl(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function sa(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ye(e.unaryFilter.field);return nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=ye(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ye(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ye(e.unaryFilter.field);return nt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(r):r.fieldFilter!==void 0?function(e){return nt.create(ye(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Nt.create(e.compositeFilter.filters.map(n=>sa(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(r):O()}function Xl(r){return Ol[r]}function Yl(r){return Fl[r]}function Jl(r){return Ul[r]}function _e(r){return{fieldPath:r.canonicalString()}}function ye(r){return ut.fromServerFormat(r.fieldPath)}function ia(r){return r instanceof nt?function(e){if(e.op==="=="){if(qi(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NAN"}};if(Bi(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qi(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NOT_NAN"}};if(Bi(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_e(e.field),op:Yl(e.op),value:e.value}}}(r):r instanceof Nt?function(e){const n=e.getFilters().map(i=>ia(i));return n.length===1?n[0]:{compositeFilter:{op:Jl(e.op),filters:n}}}(r):O()}function Zl(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function oa(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Gt{constructor(t,e,n,i,o=F.min(),u=F.min(),h=_t.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=d}withSequenceNumber(t){return new Gt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class th{constructor(t){this.ct=t}}function eh(r){const t=Hl({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Yr(t,t.limit,"L"):t}/**
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
 */class nh{constructor(){this._n=new rh}addToCollectionParentIndex(t,e){return this._n.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Yt.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Yt.min())}updateCollectionGroup(t,e,n){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class rh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new lt(Y.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new lt(Y.comparator)).toArray()}}/**
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
 */class sh{constructor(){this.changes=new Ce(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?V.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class oh{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&nn(n.mutation,i,It.empty(),K.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,B()).next(()=>n))}getLocalViewOfDocuments(t,e,n=B()){const i=ie();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=Ye();return o.forEach((h,d)=>{u=u.insert(h,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=ie();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,B()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,h)=>{e.set(u,h)})})}computeViews(t,e,n,i){let o=Ut();const u=en(),h=function(){return en()}();return e.forEach((d,f)=>{const _=n.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof te)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),nn(_.mutation,f,_.mutation.getFieldMask(),K.now())):u.set(f.key,It.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var A;return h.set(f,new ih(_,(A=u.get(f))!==null&&A!==void 0?A:null))}),h))}recalculateAndSaveOverlays(t,e){const n=en();let i=new J((u,h)=>u-h),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const h of u)h.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=n.get(d)||It.empty();_=h.applyToLocalView(f,_),n.set(d,_);const A=(i.get(h.batchId)||B()).add(d);i=i.insert(h.batchId,A)})}).next(()=>{const u=[],h=i.getReverseIterator();for(;h.hasNext();){const d=h.getNext(),f=d.key,_=d.value,A=qo();_.forEach(R=>{if(!o.has(R)){const S=Ho(e.get(R),n.get(R));S!==null&&A.set(R,S),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return V.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return x.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):fl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):V.resolve(ie());let h=-1,d=o;return u.next(f=>V.forEach(f,(_,A)=>(h<A.largestBatchId&&(h=A.largestBatchId),o.get(_)?V.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{d=d.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,B())).next(_=>({batchId:h,changes:Bo(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(n=>{let i=Ye();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=Ye();return this.indexManager.getCollectionParents(t,o).next(h=>V.forEach(h,d=>{const f=function(A,R){return new rr(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next(_=>{_.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,pt.newInvalidDocument(_)))});let h=Ye();return u.forEach((d,f)=>{const _=o.get(d);_!==void 0&&nn(_.mutation,f,It.empty(),K.now()),ir(e,f)&&(h=h.insert(d,f))}),h})}}/**
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
 */class ah{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return V.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:kt(i.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:eh(i.bundledQuery),readTime:kt(i.readTime)}}(e)),V.resolve()}}/**
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
 */class uh{constructor(){this.overlays=new J(x.comparator),this.hr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ie();return V.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.ht(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.hr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(n)),V.resolve()}getOverlaysForCollection(t,e,n){const i=ie(),o=e.length+1,u=new x(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const d=h.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>n&&i.set(d.getKey(),d)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new J((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let _=o.get(f.largestBatchId);_===null&&(_=ie(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const h=ie(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>h.set(f,_)),!(h.size()>=i)););return V.resolve(h)}ht(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Dl(e,n));let o=this.hr.get(e);o===void 0&&(o=B(),this.hr.set(e,o)),this.hr.set(e,o.add(n.key))}}/**
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
 */class _s{constructor(){this.Pr=new lt(st.Ir),this.Tr=new lt(st.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new st(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Ar(new st(t,e))}Rr(t,e){t.forEach(n=>this.removeReference(n,e))}Vr(t){const e=new x(new Y([])),n=new st(e,t),i=new st(e,t+1),o=[];return this.Tr.forEachInRange([n,i],u=>{this.Ar(u),o.push(u.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new x(new Y([])),n=new st(e,t),i=new st(e,t+1);let o=B();return this.Tr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new st(t,0),n=this.Pr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class st{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return x.comparator(t.key,e.key)||z(t.pr,e.pr)}static Er(t,e){return z(t.pr,e.pr)||x.comparator(t.key,e.key)}}/**
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
 */class lh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new lt(st.Ir)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new kl(o,e,n,i);this.mutationQueue.push(u);for(const h of i)this.wr=this.wr.add(new st(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return V.resolve(u)}lookupMutationBatch(t,e){return V.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.br(n),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([n,i],u=>{const h=this.Sr(u.pr);o.push(h)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new lt(z);return e.forEach(i=>{const o=new st(i,0),u=new st(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,u],h=>{n=n.add(h.pr)})}),V.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;x.isDocumentKey(o)||(o=o.child(""));const u=new st(new x(o),0);let h=new lt(z);return this.wr.forEachWhile(d=>{const f=d.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(h=h.add(d.pr)),!0)},u),V.resolve(this.Dr(h))}Dr(t){const e=[];return t.forEach(n=>{const i=this.Sr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){W(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.wr;return V.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=n})}Mn(t){}containsKey(t,e){const n=new st(e,0),i=this.wr.firstAfterOrEqual(n);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class hh{constructor(t){this.vr=t,this.docs=function(){return new J(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return V.resolve(n?n.document.mutableCopy():pt.newInvalidDocument(e))}getEntries(t,e){let n=Ut();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():pt.newInvalidDocument(i))}),V.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Ut();const u=e.path,h=new x(u.child("")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Hu(Qu(_),n)<=0||(i.has(_.key)||ir(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,n,i){O()}Fr(t,e){return V.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new ch(this)}getSize(t){return V.resolve(this.size)}}class ch extends sh{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(n)}),V.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class dh{constructor(t){this.persistence=t,this.Mr=new Ce(e=>ds(e),fs),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Or=0,this.Nr=new _s,this.targetCount=0,this.Lr=Ae.Nn()}forEachTarget(t,e){return this.Mr.forEach((n,i)=>e(i)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),V.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Ae(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.qn(e),V.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Mr.forEach((u,h)=>{h.sequenceNumber<=e&&n.get(h.targetId)===null&&(this.Mr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return V.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),V.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return V.resolve(n)}containsKey(t,e){return V.resolve(this.Nr.containsKey(e))}}/**
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
 */class fh{constructor(t,e){this.Br={},this.overlays={},this.kr=new us(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new dh(this),this.indexManager=new nh,this.remoteDocumentCache=function(i){return new hh(i)}(n=>this.referenceDelegate.Kr(n)),this.serializer=new th(e),this.$r=new ah(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new uh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new lh(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){D("MemoryPersistence","Starting transaction:",t);const i=new mh(this.kr.next());return this.referenceDelegate.Ur(),n(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return V.or(Object.values(this.Br).map(n=>()=>n.containsKey(t,e)))}}class mh extends Xu{constructor(t){super(),this.currentSequenceNumber=t}}class ys{constructor(t){this.persistence=t,this.zr=new _s,this.jr=null}static Hr(t){return new ys(t)}get Jr(){if(this.jr)return this.jr;throw O()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),V.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),V.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,n=>{const i=x.fromPath(n);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,F.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(n=>{n?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return V.or([()=>V.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class Es{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=i}static Ki(t,e){let n=B(),i=B();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Es(t,e.fromCache,n,i)}}/**
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
 */class gh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class ph{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Nu()?8:Yu(bu())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ji(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Hi(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new gh;return this.Ji(t,e,u).next(h=>{if(o.result=h,this.Ui)return this.Yi(t,e,u,h.size)})}).next(()=>o.result)}Yi(t,e,n,i){return n.documentReadCount<this.Wi?(We()<=$t.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(We()<=$t.DEBUG&&D("QueryEngine","Query:",pe(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(We()<=$t.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(e))):V.resolve())}ji(t,e){if($i(e))return V.resolve(null);let n=St(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Yr(e,null,"F"),n=St(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=B(...o);return this.zi.getDocuments(t,u).next(h=>this.indexManager.getMinOffset(t,n).next(d=>{const f=this.Zi(e,h);return this.Xi(e,f,u,d.readTime)?this.ji(t,Yr(e,null,"F")):this.es(t,f,e,d)}))})))}Hi(t,e,n,i){return $i(e)||i.isEqual(F.min())?V.resolve(null):this.zi.getDocuments(t,n).next(o=>{const u=this.Zi(e,o);return this.Xi(e,u,n,i)?V.resolve(null):(We()<=$t.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pe(e)),this.es(t,u,e,Gu(i,-1)).next(h=>h))})}Zi(t,e){let n=new lt(Fo(t));return e.forEach((i,o)=>{ir(t,o)&&(n=n.add(o))}),n}Xi(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,n){return We()<=$t.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",pe(e)),this.zi.getDocumentsMatchingQuery(t,e,Yt.min(),n)}es(t,e,n,i){return this.zi.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */class _h{constructor(t,e,n,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new J(z),this.rs=new Ce(o=>ds(o),fs),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new oh(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function yh(r,t,e,n){return new _h(r,t,e,n)}async function aa(r,t){const e=U(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],h=[];let d=B();for(const f of i){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){h.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(n,d).next(f=>({us:f,removedBatchIds:u,addedBatchIds:h}))})})}function Eh(r,t){const e=U(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(h,d,f,_){const A=f.batch,R=A.keys();let S=V.resolve();return R.forEach(N=>{S=S.next(()=>_.getEntry(d,N)).next(M=>{const k=f.docVersions.get(N);W(k!==null),M.version.compareTo(k)<0&&(A.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),_.addEntry(M)))})}),S.next(()=>h.mutationQueue.removeMutationBatch(d,A))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(h){let d=B();for(let f=0;f<h.mutationResults.length;++f)h.mutationResults[f].transformResults.length>0&&(d=d.add(h.batch.mutations[f].key));return d}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function ua(r){const t=U(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Th(r,t){const e=U(r),n=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const h=[];t.targetChanges.forEach((_,A)=>{const R=i.get(A);if(!R)return;h.push(e.Qr.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.Qr.addMatchingKeys(o,_.addedDocuments,A)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?S=S.withResumeToken(_t.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,n)),i=i.insert(A,S),function(M,k,$){return M.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(R,S,_)&&h.push(e.Qr.updateTargetData(o,S))});let d=Ut(),f=B();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),h.push(vh(o,u,t.documentUpdates).next(_=>{d=_.cs,f=_.ls})),!n.isEqual(F.min())){const _=e.Qr.getLastRemoteSnapshotVersion(o).next(A=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,n));h.push(_)}return V.waitFor(h).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.ns=i,o))}function vh(r,t,e){let n=B(),i=B();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Ut();return e.forEach((h,d)=>{const f=o.get(h);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(h)),d.isNoDocument()&&d.version.isEqual(F.min())?(t.removeEntry(h,d.readTime),u=u.insert(h,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(h,d)):D("LocalStore","Ignoring outdated watch update for ",h,". Current version:",f.version," Watch version:",d.version)}),{cs:u,ls:i}})}function Ih(r,t){const e=U(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function wh(r,t){const e=U(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Qr.getTargetData(n,t).next(o=>o?(i=o,V.resolve(i)):e.Qr.allocateTargetId(n).next(u=>(i=new Gt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Qr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.ns.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(n.targetId,n),e.rs.set(t,n.targetId)),n})}async function ns(r,t,e){const n=U(r),i=n.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!fn(u))throw u;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.ns=n.ns.remove(t),n.rs.delete(i.target)}function no(r,t,e){const n=U(r);let i=F.min(),o=B();return n.persistence.runTransaction("Execute query","readwrite",u=>function(d,f,_){const A=U(d),R=A.rs.get(_);return R!==void 0?V.resolve(A.ns.get(R)):A.Qr.getTargetData(f,_)}(n,u,St(t)).next(h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,n.Qr.getMatchingKeysForTargetId(u,h.targetId).next(d=>{o=d})}).next(()=>n.ts.getDocumentsMatchingQuery(u,t,e?i:F.min(),e?o:B())).next(h=>(Ah(n,gl(t),h),{documents:h,hs:o})))}function Ah(r,t,e){let n=r.ss.get(t)||F.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.ss.set(t,n)}class ro{constructor(){this.activeTargetIds=vl()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Rh{constructor(){this.no=new ro,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ro,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ph{io(t){}shutdown(){}}/**
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
 */class so{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Un=null;function zr(){return Un===null?Un=function(){return 268435456+Math.round(2147483648*Math.random())}():Un++,"0x"+Un.toString(16)}/**
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
 */const Vh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Sh{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const mt="WebChannelConnection";class Ch extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=n+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,n,i,o,u){const h=zr(),d=this.vo(e,n.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${h}:`,d,i);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,u),this.Mo(e,d,f,i).then(_=>(D("RestConnection",`Received RPC '${e}' ${h}: `,_),_),_=>{throw Te("RestConnection",`RPC '${e}' ${h} failed with error: `,_,"url: ",d,"request:",i),_})}xo(e,n,i,o,u,h){return this.Co(e,n,i,o,u)}Fo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Se}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),i&&i.headers.forEach((o,u)=>e[u]=o)}vo(e,n){const i=Vh[e];return`${this.wo}/v1/${n}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,n,i){const o=zr();return new Promise((u,h)=>{const d=new Eo;d.setWithCredentials(!0),d.listenOnce(vo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case qn.NO_ERROR:const _=d.getResponseJson();D(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case qn.TIMEOUT:D(mt,`RPC '${t}' ${o} timed out`),h(new b(P.DEADLINE_EXCEEDED,"Request time out"));break;case qn.HTTP_ERROR:const A=d.getStatus();if(D(mt,`RPC '${t}' ${o} failed with status:`,A,"response text:",d.getResponseText()),A>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const N=function(k){const $=k.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN}(S.status);h(new b(N,S.message))}else h(new b(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new b(P.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{D(mt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);D(mt,`RPC '${t}' ${o} sending request:`,i),d.send(e,"POST",f,n,15)})}Oo(t,e,n){const i=zr(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Ao(),h=wo(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new To({})),this.Fo(d.initMessageHeaders,e,n),d.encodeInitMessageHeaders=!0;const _=o.join("");D(mt,`Creating RPC '${t}' stream ${i}: ${_}`,d);const A=u.createWebChannel(_,d);let R=!1,S=!1;const N=new Sh({lo:k=>{S?D(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(R||(D(mt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),R=!0),D(mt,`RPC '${t}' stream ${i} sending:`,k),A.send(k))},ho:()=>A.close()}),M=(k,$,G)=>{k.listen($,H=>{try{G(H)}catch(rt){setTimeout(()=>{throw rt},0)}})};return M(A,Xe.EventType.OPEN,()=>{S||(D(mt,`RPC '${t}' stream ${i} transport opened.`),N.mo())}),M(A,Xe.EventType.CLOSE,()=>{S||(S=!0,D(mt,`RPC '${t}' stream ${i} transport closed`),N.po())}),M(A,Xe.EventType.ERROR,k=>{S||(S=!0,Te(mt,`RPC '${t}' stream ${i} transport errored:`,k),N.po(new b(P.UNAVAILABLE,"The operation could not be completed")))}),M(A,Xe.EventType.MESSAGE,k=>{var $;if(!S){const G=k.data[0];W(!!G);const H=G,rt=H.error||(($=H[0])===null||$===void 0?void 0:$.error);if(rt){D(mt,`RPC '${t}' stream ${i} received error:`,rt);const bt=rt.status;let it=function(p){const y=tt[p];if(y!==void 0)return Yo(y)}(bt),T=rt.message;it===void 0&&(it=P.INTERNAL,T="Unknown error status: "+bt+" with message "+rt.message),S=!0,N.po(new b(it,T)),A.close()}else D(mt,`RPC '${t}' stream ${i} received:`,G),N.yo(G)}}),M(h,Io.STAT_EVENT,k=>{k.stat===Gr.PROXY?D(mt,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===Gr.NOPROXY&&D(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.fo()},0),N}}function Kr(){return typeof document<"u"?document:null}/**
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
 */function lr(r){return new Bl(r,!0)}/**
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
 */class la{constructor(t,e,n=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=n,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-n);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class ha{constructor(t,e,n,i,o,u,h,d){this.oi=t,this.Go=n,this.zo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=d,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new la(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Ft(e.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.jo===e&&this.u_(n,i)},n=>{t(()=>{const i=new b(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.c_(i)})})}u_(t,e){const n=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{n(()=>this.listener.Po())}),this.stream.To(()=>{n(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{n(()=>this.c_(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kh extends ha{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=zl(this.serializer,t),n=function(o){if(!("targetChange"in o))return F.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?F.min():u.readTime?kt(u.readTime):F.min()}(t);return this.listener.h_(e,n)}P_(t){const e={};e.database=es(this.serializer),e.addTarget=function(o,u){let h;const d=u.target;if(h=Xr(d)?{documents:Gl(o,d)}:{query:Ql(o,d)._t},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=ta(o,u.resumeToken);const f=Jr(o,u.expectedCount);f!==null&&(h.expectedCount=f)}else if(u.snapshotVersion.compareTo(F.min())>0){h.readTime=Jn(o,u.snapshotVersion.toTimestamp());const f=Jr(o,u.expectedCount);f!==null&&(h.expectedCount=f)}return h}(this.serializer,t);const n=Wl(this.serializer,t);n&&(e.labels=n),this.i_(e)}I_(t){const e={};e.database=es(this.serializer),e.removeTarget=t,this.i_(e)}}class Dh extends ha{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(W(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=$l(t.writeResults,t.commitTime),n=kt(t.commitTime);return this.listener.A_(n,e)}return W(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=es(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Kl(this.serializer,n))};this.i_(e)}}/**
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
 */class Nh extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,n,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Co(t,Zr(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(P.UNKNOWN,o.toString())})}xo(t,e,n,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.xo(t,Zr(e,n),i,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new b(P.UNKNOWN,u.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class bh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Ft(e),this.y_=!1):D("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class xh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(u=>{n.enqueueAndForget(async()=>{ce(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=U(d);f.M_.add(4),await pn(f),f.N_.set("Unknown"),f.M_.delete(4),await hr(f)}(this))})}),this.N_=new bh(n,i)}}async function hr(r){if(ce(r))for(const t of r.x_)await t(!0)}async function pn(r){for(const t of r.x_)await t(!1)}function ca(r,t){const e=U(r);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),ws(e)?Is(e):ke(e).Xo()&&vs(e,t))}function Ts(r,t){const e=U(r),n=ke(e);e.F_.delete(t),n.Xo()&&da(e,t),e.F_.size===0&&(n.Xo()?n.n_():ce(e)&&e.N_.set("Unknown"))}function vs(r,t){if(r.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ke(r).P_(t)}function da(r,t){r.L_.xe(t),ke(r).I_(t)}function Is(r){r.L_=new Ll({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.F_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),ke(r).start(),r.N_.w_()}function ws(r){return ce(r)&&!ke(r).Zo()&&r.F_.size>0}function ce(r){return U(r).M_.size===0}function fa(r){r.L_=void 0}async function Mh(r){r.N_.set("Online")}async function Lh(r){r.F_.forEach((t,e)=>{vs(r,t)})}async function Oh(r,t){fa(r),ws(r)?(r.N_.D_(t),Is(r)):r.N_.set("Unknown")}async function Fh(r,t,e){if(r.N_.set("Online"),t instanceof Zo&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const h of o.targetIds)i.F_.has(h)&&(await i.remoteSyncer.rejectListen(h,u),i.F_.delete(h),i.L_.removeTarget(h))}(r,t)}catch(n){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zn(r,n)}else if(t instanceof Kn?r.L_.Ke(t):t instanceof Jo?r.L_.He(t):r.L_.We(t),!e.isEqual(F.min()))try{const n=await ua(r.localStore);e.compareTo(n)>=0&&await function(o,u){const h=o.L_.rt(u);return h.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.F_.get(f);_&&o.F_.set(f,_.withResumeToken(d.resumeToken,u))}}),h.targetMismatches.forEach((d,f)=>{const _=o.F_.get(d);if(!_)return;o.F_.set(d,_.withResumeToken(_t.EMPTY_BYTE_STRING,_.snapshotVersion)),da(o,d);const A=new Gt(_.target,d,f,_.sequenceNumber);vs(o,A)}),o.remoteSyncer.applyRemoteEvent(h)}(r,e)}catch(n){D("RemoteStore","Failed to raise snapshot:",n),await Zn(r,n)}}async function Zn(r,t,e){if(!fn(t))throw t;r.M_.add(1),await pn(r),r.N_.set("Offline"),e||(e=()=>ua(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),r.M_.delete(1),await hr(r)})}function ma(r,t){return t().catch(e=>Zn(r,e,t))}async function cr(r){const t=U(r),e=Zt(t);let n=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Uh(t);)try{const i=await Ih(t.localStore,n);if(i===null){t.v_.length===0&&e.n_();break}n=i.batchId,Bh(t,i)}catch(i){await Zn(t,i)}ga(t)&&pa(t)}function Uh(r){return ce(r)&&r.v_.length<10}function Bh(r,t){r.v_.push(t);const e=Zt(r);e.Xo()&&e.E_&&e.d_(t.mutations)}function ga(r){return ce(r)&&!Zt(r).Zo()&&r.v_.length>0}function pa(r){Zt(r).start()}async function qh(r){Zt(r).V_()}async function jh(r){const t=Zt(r);for(const e of r.v_)t.d_(e.mutations)}async function zh(r,t,e){const n=r.v_.shift(),i=ms.from(n,t,e);await ma(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await cr(r)}async function Kh(r,t){t&&Zt(r).E_&&await async function(n,i){if(function(u){return bl(u)&&u!==P.ABORTED}(i.code)){const o=n.v_.shift();Zt(n).t_(),await ma(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await cr(n)}}(r,t),ga(r)&&pa(r)}async function io(r,t){const e=U(r);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const n=ce(e);e.M_.add(3),await pn(e),n&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await hr(e)}async function $h(r,t){const e=U(r);t?(e.M_.delete(2),await hr(e)):t||(e.M_.add(2),await pn(e),e.N_.set("Unknown"))}function ke(r){return r.B_||(r.B_=function(e,n,i){const o=U(e);return o.f_(),new kh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Po:Mh.bind(null,r),To:Lh.bind(null,r),Ao:Oh.bind(null,r),h_:Fh.bind(null,r)}),r.x_.push(async t=>{t?(r.B_.t_(),ws(r)?Is(r):r.N_.set("Unknown")):(await r.B_.stop(),fa(r))})),r.B_}function Zt(r){return r.k_||(r.k_=function(e,n,i){const o=U(e);return o.f_(),new Dh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Po:()=>Promise.resolve(),To:qh.bind(null,r),Ao:Kh.bind(null,r),R_:jh.bind(null,r),A_:zh.bind(null,r)}),r.x_.push(async t=>{t?(r.k_.t_(),await cr(r)):(await r.k_.stop(),r.v_.length>0&&(D("RemoteStore",`Stopping write stream with ${r.v_.length} pending writes`),r.v_=[]))})),r.k_}/**
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
 */class As{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,h=new As(t,e,u,i,o);return h.start(n),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rs(r,t){if(Ft("AsyncQueue",`${t}: ${r}`),fn(r))return new b(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ee{constructor(t){this.comparator=t?(e,n)=>t(e,n)||x.comparator(e.key,n.key):(e,n)=>x.comparator(e.key,n.key),this.keyedMap=Ye(),this.sortedSet=new J(this.comparator)}static emptySet(t){return new Ee(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ee)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class oo{constructor(){this.q_=new J(x.comparator)}track(t){const e=t.doc.key,n=this.q_.get(e);n?t.type!==0&&n.type===3?this.q_=this.q_.insert(e,t):t.type===3&&n.type!==1?this.q_=this.q_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.q_=this.q_.remove(e):t.type===1&&n.type===2?this.q_=this.q_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):O():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Re{constructor(t,e,n,i,o,u,h,d,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(h=>{u.push({type:0,doc:h})}),new Re(t,e,Ee.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&sr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class Gh{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Qh{constructor(){this.queries=new Ce(t=>Oo(t),sr),this.onlineState="Unknown",this.z_=new Set}}async function Hh(r,t){const e=U(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.W_()&&t.G_()&&(n=2):(o=new Gh,n=t.G_()?0:1);try{switch(n){case 0:o.K_=await e.onListen(i,!0);break;case 1:o.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const h=Rs(u,`Initialization of query '${pe(t.query)}' failed`);return void t.onError(h)}e.queries.set(i,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Ps(e)}async function Wh(r,t){const e=U(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.U_.indexOf(t);u>=0&&(o.U_.splice(u,1),o.U_.length===0?i=t.G_()?0:1:!o.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Xh(r,t){const e=U(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const h of u.U_)h.H_(i)&&(n=!0);u.K_=i}}n&&Ps(e)}function Yh(r,t,e){const n=U(r),i=n.queries.get(t);if(i)for(const o of i.U_)o.onError(e);n.queries.delete(t)}function Ps(r){r.z_.forEach(t=>{t.next()})}var rs,ao;(ao=rs||(rs={})).J_="default",ao.Cache="cache";class Jh{constructor(t,e,n){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Re(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const n=e!=="Offline";return(!this.options.ra||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Re.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==rs.Cache}}/**
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
 */class _a{constructor(t){this.key=t}}class ya{constructor(t){this.key=t}}class Zh{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=B(),this.mutatedKeys=B(),this.Ia=Fo(t),this.Ta=new Ee(this.Ia)}get Ea(){return this.la}da(t,e){const n=e?e.Aa:new oo,i=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,h=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,A)=>{const R=i.get(_),S=ir(this.query,A)?A:null,N=!!R&&this.mutatedKeys.has(R.key),M=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;R&&S?R.data.isEqual(S.data)?N!==M&&(n.track({type:3,doc:S}),k=!0):this.Ra(R,S)||(n.track({type:2,doc:S}),k=!0,(d&&this.Ia(S,d)>0||f&&this.Ia(S,f)<0)&&(h=!0)):!R&&S?(n.track({type:0,doc:S}),k=!0):R&&!S&&(n.track({type:1,doc:R}),k=!0,(d||f)&&(h=!0)),k&&(S?(u=u.add(S),o=M?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{Ta:u,Aa:n,Xi:h,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const u=t.Aa.Q_();u.sort((_,A)=>function(S,N){const M=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return M(S)-M(N)}(_.type,A.type)||this.Ia(_.doc,A.doc)),this.Va(n),i=i!=null&&i;const h=e&&!i?this.ma():[],d=this.Pa.size===0&&this.current&&!i?1:0,f=d!==this.ha;return this.ha=d,u.length!==0||f?{snapshot:new Re(this.query,t.Ta,o,u,t.mutatedKeys,d===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:h}:{fa:h}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new oo,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=B(),this.Ta.forEach(n=>{this.ga(n.key)&&(this.Pa=this.Pa.add(n.key))});const e=[];return t.forEach(n=>{this.Pa.has(n)||e.push(new ya(n))}),this.Pa.forEach(n=>{t.has(n)||e.push(new _a(n))}),e}pa(t){this.la=t.hs,this.Pa=B();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Re.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class tc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ec{constructor(t){this.key=t,this.wa=!1}}class nc{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Sa={},this.ba=new Ce(h=>Oo(h),sr),this.Da=new Map,this.Ca=new Set,this.va=new J(x.comparator),this.Fa=new Map,this.Ma=new _s,this.xa={},this.Oa=new Map,this.Na=Ae.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function rc(r,t,e=!0){const n=Aa(r);let i;const o=n.ba.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await Ea(n,t,e,!0),i}async function sc(r,t){const e=Aa(r);await Ea(e,t,!0,!1)}async function Ea(r,t,e,n){const i=await wh(r.localStore,St(t)),o=i.targetId,u=e?r.sharedClientState.addLocalQueryTarget(o):"not-current";let h;return n&&(h=await ic(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&ca(r.remoteStore,i),h}async function ic(r,t,e,n,i){r.Ba=(A,R,S)=>async function(M,k,$,G){let H=k.view.da($);H.Xi&&(H=await no(M.localStore,k.query,!1).then(({documents:T})=>k.view.da(T,H)));const rt=G&&G.targetChanges.get(k.targetId),bt=G&&G.targetMismatches.get(k.targetId)!=null,it=k.view.applyChanges(H,M.isPrimaryClient,rt,bt);return lo(M,k.targetId,it.fa),it.snapshot}(r,A,R,S);const o=await no(r.localStore,t,!0),u=new Zh(t,o.hs),h=u.da(o.documents),d=gn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=u.applyChanges(h,r.isPrimaryClient,d);lo(r,e,f.fa);const _=new tc(t,e,u);return r.ba.set(t,_),r.Da.has(e)?r.Da.get(e).push(t):r.Da.set(e,[t]),f.snapshot}async function oc(r,t,e){const n=U(r),i=n.ba.get(t),o=n.Da.get(i.targetId);if(o.length>1)return n.Da.set(i.targetId,o.filter(u=>!sr(u,t))),void n.ba.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ns(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Ts(n.remoteStore,i.targetId),ss(n,i.targetId)}).catch(dn)):(ss(n,i.targetId),await ns(n.localStore,i.targetId,!0))}async function ac(r,t){const e=U(r),n=e.ba.get(t),i=e.Da.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ts(e.remoteStore,n.targetId))}async function uc(r,t,e){const n=gc(r);try{const i=await function(u,h){const d=U(u),f=K.now(),_=h.reduce((S,N)=>S.add(N.key),B());let A,R;return d.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=Ut(),M=B();return d.os.getEntries(S,_).next(k=>{N=k,N.forEach(($,G)=>{G.isValidDocument()||(M=M.add($))})}).next(()=>d.localDocuments.getOverlayedDocuments(S,N)).next(k=>{A=k;const $=[];for(const G of h){const H=Sl(G,A.get(G.key).overlayedDocument);H!=null&&$.push(new te(G.key,H,Co(H.value.mapValue),Ct.exists(!0)))}return d.mutationQueue.addMutationBatch(S,f,$,h)}).next(k=>{R=k;const $=k.applyToLocalDocumentSet(A,M);return d.documentOverlayCache.saveOverlays(S,k.batchId,$)})}).then(()=>({batchId:R.batchId,changes:Bo(A)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,h,d){let f=u.xa[u.currentUser.toKey()];f||(f=new J(z)),f=f.insert(h,d),u.xa[u.currentUser.toKey()]=f}(n,i.batchId,e),await _n(n,i.changes),await cr(n.remoteStore)}catch(i){const o=Rs(i,"Failed to persist write");e.reject(o)}}async function Ta(r,t){const e=U(r);try{const n=await Th(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Fa.get(o);u&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.wa=!0:i.modifiedDocuments.size>0?W(u.wa):i.removedDocuments.size>0&&(W(u.wa),u.wa=!1))}),await _n(e,n,t)}catch(n){await dn(n)}}function uo(r,t,e){const n=U(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.ba.forEach((o,u)=>{const h=u.view.j_(t);h.snapshot&&i.push(h.snapshot)}),function(u,h){const d=U(u);d.onlineState=h;let f=!1;d.queries.forEach((_,A)=>{for(const R of A.U_)R.j_(h)&&(f=!0)}),f&&Ps(d)}(n.eventManager,t),i.length&&n.Sa.h_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function lc(r,t,e){const n=U(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Fa.get(t),o=i&&i.key;if(o){let u=new J(x.comparator);u=u.insert(o,pt.newNoDocument(o,F.min()));const h=B().add(o),d=new ur(F.min(),new Map,new J(z),u,h);await Ta(n,d),n.va=n.va.remove(o),n.Fa.delete(t),Vs(n)}else await ns(n.localStore,t,!1).then(()=>ss(n,t,e)).catch(dn)}async function hc(r,t){const e=U(r),n=t.batch.batchId;try{const i=await Eh(e.localStore,t);Ia(e,n,null),va(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await _n(e,i)}catch(i){await dn(i)}}async function cc(r,t,e){const n=U(r);try{const i=await function(u,h){const d=U(u);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let _;return d.mutationQueue.lookupMutationBatch(f,h).next(A=>(W(A!==null),_=A.keys(),d.mutationQueue.removeMutationBatch(f,A))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,_,h)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,_)).next(()=>d.localDocuments.getDocuments(f,_))})}(n.localStore,t);Ia(n,t,e),va(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await _n(n,i)}catch(i){await dn(i)}}function va(r,t){(r.Oa.get(t)||[]).forEach(e=>{e.resolve()}),r.Oa.delete(t)}function Ia(r,t,e){const n=U(r);let i=n.xa[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.xa[n.currentUser.toKey()]=i}}function ss(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Da.get(t))r.ba.delete(n),e&&r.Sa.ka(n,e);r.Da.delete(t),r.isPrimaryClient&&r.Ma.Vr(t).forEach(n=>{r.Ma.containsKey(n)||wa(r,n)})}function wa(r,t){r.Ca.delete(t.path.canonicalString());const e=r.va.get(t);e!==null&&(Ts(r.remoteStore,e),r.va=r.va.remove(t),r.Fa.delete(e),Vs(r))}function lo(r,t,e){for(const n of e)n instanceof _a?(r.Ma.addReference(n.key,t),dc(r,n)):n instanceof ya?(D("SyncEngine","Document no longer in limbo: "+n.key),r.Ma.removeReference(n.key,t),r.Ma.containsKey(n.key)||wa(r,n.key)):O()}function dc(r,t){const e=t.key,n=e.path.canonicalString();r.va.get(e)||r.Ca.has(n)||(D("SyncEngine","New document in limbo: "+e),r.Ca.add(n),Vs(r))}function Vs(r){for(;r.Ca.size>0&&r.va.size<r.maxConcurrentLimboResolutions;){const t=r.Ca.values().next().value;r.Ca.delete(t);const e=new x(Y.fromString(t)),n=r.Na.next();r.Fa.set(n,new ec(e)),r.va=r.va.insert(e,n),ca(r.remoteStore,new Gt(St(Lo(e.path)),n,"TargetPurposeLimboResolution",us.oe))}}async function _n(r,t,e){const n=U(r),i=[],o=[],u=[];n.ba.isEmpty()||(n.ba.forEach((h,d)=>{u.push(n.Ba(d,t,e).then(f=>{var _;if((f||e)&&n.isPrimaryClient){const A=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;n.sharedClientState.updateQueryState(d.targetId,A?"current":"not-current")}if(f){i.push(f);const A=Es.Ki(d.targetId,f);o.push(A)}}))}),await Promise.all(u),n.Sa.h_(i),await async function(d,f){const _=U(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>V.forEach(f,R=>V.forEach(R.qi,S=>_.persistence.referenceDelegate.addReference(A,R.targetId,S)).next(()=>V.forEach(R.Qi,S=>_.persistence.referenceDelegate.removeReference(A,R.targetId,S)))))}catch(A){if(!fn(A))throw A;D("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const R=A.targetId;if(!A.fromCache){const S=_.ns.get(R),N=S.snapshotVersion,M=S.withLastLimboFreeSnapshotVersion(N);_.ns=_.ns.insert(R,M)}}}(n.localStore,o))}async function fc(r,t){const e=U(r);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const n=await aa(e.localStore,t);e.currentUser=t,function(o,u){o.Oa.forEach(h=>{h.forEach(d=>{d.reject(new b(P.CANCELLED,u))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await _n(e,n.us)}}function mc(r,t){const e=U(r),n=e.Fa.get(t);if(n&&n.wa)return B().add(n.key);{let i=B();const o=e.Da.get(t);if(!o)return i;for(const u of o){const h=e.ba.get(u);i=i.unionWith(h.view.Ea)}return i}}function Aa(r){const t=U(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ta.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=mc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lc.bind(null,t),t.Sa.h_=Xh.bind(null,t.eventManager),t.Sa.ka=Yh.bind(null,t.eventManager),t}function gc(r){const t=U(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cc.bind(null,t),t}class ho{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=lr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return yh(this.persistence,new ph,t.initialUser,this.serializer)}createPersistence(t){return new fh(ys.Hr,this.serializer)}createSharedClientState(t){return new Rh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>uo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=fc.bind(null,this.syncEngine),await $h(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Qh}()}createDatastore(t){const e=lr(t.databaseInfo.databaseId),n=function(o){return new Ch(o)}(t.databaseInfo);return function(o,u,h,d){return new Nh(o,u,h,d)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,h){return new xh(n,i,o,u,h)}(this.localStore,this.datastore,t.asyncQueue,e=>uo(this.syncEngine,e,0),function(){return so.D()?new so:new Ph}())}createSyncEngine(t,e){return function(i,o,u,h,d,f,_){const A=new nc(i,o,u,h,d,f);return _&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(n){const i=U(n);D("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await pn(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class _c{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class yc{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=Po.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async o=>{D("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(D("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Rs(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function $r(r,t){r.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await aa(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function co(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Tc(r);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>io(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>io(t.remoteStore,i)),r._onlineComponents=t}function Ec(r){return r.name==="FirebaseError"?r.code===P.FAILED_PRECONDITION||r.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function Tc(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await $r(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Ec(e))throw e;Te("Error using user provided cache. Falling back to memory cache: "+e),await $r(r,new ho)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await $r(r,new ho);return r._offlineComponents}async function Ra(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await co(r,r._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await co(r,new pc))),r._onlineComponents}function vc(r){return Ra(r).then(t=>t.syncEngine)}async function Ic(r){const t=await Ra(r),e=t.eventManager;return e.onListen=rc.bind(null,t.syncEngine),e.onUnlisten=oc.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=sc.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ac.bind(null,t.syncEngine),e}function wc(r,t,e={}){const n=new Ht;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,h,d,f){const _=new _c({next:R=>{u.enqueueAndForget(()=>Wh(o,A)),R.fromCache&&d.source==="server"?f.reject(new b(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),A=new Jh(h,_,{includeMetadataChanges:!0,ra:!0});return Hh(o,A)}(await Ic(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */const fo=new Map;/**
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
 */function Va(r,t,e){if(!e)throw new b(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Ac(r,t,e,n){if(t===!0&&n===!0)throw new b(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function mo(r){if(!x.isDocumentKey(r))throw new b(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function go(r){if(x.isDocumentKey(r))throw new b(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ss(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O()}function Pe(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new b(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ss(r);throw new b(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */class po{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ac("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pa((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class dr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new po({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new b(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new po(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ou;switch(n.type){case"firstParty":return new qu(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=fo.get(e);n&&(D("ComponentProvider","Removing Datastore"),fo.delete(e),n.terminate())}(this),Promise.resolve()}}function Rc(r,t,e,n={}){var i;const o=(r=Pe(r,dr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&Te("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let h,d;if(typeof n.mockUserToken=="string")h=n.mockUserToken,d=gt.MOCK_USER;else{h=ku(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new b(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new gt(f)}r._authCredentials=new Fu(new Ro(h,d))}}/**
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
 */class fr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new fr(this.firestore,t,this._query)}}class Rt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}}class Wt extends fr{constructor(t,e,n){super(t,e,Lo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new x(t))}withConverter(t){return new Wt(this.firestore,t,this._path)}}function Sa(r,t,...e){if(r=Xt(r),Va("collection","path",t),r instanceof dr){const n=Y.fromString(t,...e);return go(n),new Wt(r,null,n)}{if(!(r instanceof Rt||r instanceof Wt))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return go(n),new Wt(r.firestore,null,n)}}function is(r,t,...e){if(r=Xt(r),arguments.length===1&&(t=Po.newId()),Va("doc","path",t),r instanceof dr){const n=Y.fromString(t,...e);return mo(n),new Rt(r,null,new x(n))}{if(!(r instanceof Rt||r instanceof Wt))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return mo(n),new Rt(r.firestore,r instanceof Wt?r.converter:null,new x(n))}}/**
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
 */class Pc{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new la(this,"async_queue_retry"),this.hu=()=>{const e=Kr();e&&D("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Kr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Kr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Ht;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!fn(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(n=>{this.au=n,this.uu=!1;const i=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(n);throw Ft("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.uu=!1,n))));return this.iu=e,e}enqueueAfterDelay(t,e,n){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=As.createAndSchedule(this,t,e,n,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&O()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class mr extends dr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=function(){return new Pc}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ka(this),this._firestoreClient.terminate()}}function Vc(r,t){const e=typeof r=="object"?r:Vu(),n=typeof r=="string"?r:"(default)",i=Su(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Cu("firestore");o&&Rc(i,...o)}return i}function Ca(r){return r._firestoreClient||ka(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function ka(r){var t,e,n;const i=r._freezeSettings(),o=function(h,d,f,_){return new tl(h,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Pa(_.experimentalLongPollingOptions),_.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._firestoreClient=new yc(r._authCredentials,r._appCheckCredentials,r._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(_t.fromBase64String(t))}catch(e){throw new b(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ve(_t.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class gr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new b(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Cs{constructor(t){this._methodName=t}}/**
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
 */class ks{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
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
 */const Sc=/^__.*__$/;class Cc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new te(t,this.data,this.fieldMask,e,this.fieldTransforms):new mn(t,this.data,e,this.fieldTransforms)}}class Da{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new te(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Na(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Ds{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Ds(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:n,yu:!1});return i.wu(t),i}Su(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:n,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return tr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Na(this.fu)&&Sc.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class kc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||lr(t)}Fu(t,e,n,i=!1){return new Ds({fu:t,methodName:e,vu:n,path:ut.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ba(r){const t=r._freezeSettings(),e=lr(r._databaseId);return new kc(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Dc(r,t,e,n,i,o={}){const u=r.Fu(o.merge||o.mergeFields?2:0,t,e,i);Ns("Data must be an object, but it was:",u,n);const h=xa(n,u);let d,f;if(o.merge)d=new It(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const A of o.mergeFields){const R=os(t,A,e);if(!u.contains(R))throw new b(P.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);La(_,R)||_.push(R)}d=new It(_),f=u.fieldTransforms.filter(A=>d.covers(A.field))}else d=null,f=u.fieldTransforms;return new Cc(new Tt(h),d,f)}class pr extends Cs{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof pr}}function Nc(r,t,e,n){const i=r.Fu(1,t,e);Ns("Data must be an object, but it was:",i,n);const o=[],u=Tt.empty();he(n,(d,f)=>{const _=bs(t,d,e);f=Xt(f);const A=i.Su(_);if(f instanceof pr)o.push(_);else{const R=_r(f,A);R!=null&&(o.push(_),u.set(_,R))}});const h=new It(o);return new Da(u,h,i.fieldTransforms)}function bc(r,t,e,n,i,o){const u=r.Fu(1,t,e),h=[os(t,n,e)],d=[i];if(o.length%2!=0)throw new b(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)h.push(os(t,o[R])),d.push(o[R+1]);const f=[],_=Tt.empty();for(let R=h.length-1;R>=0;--R)if(!La(f,h[R])){const S=h[R];let N=d[R];N=Xt(N);const M=u.Su(S);if(N instanceof pr)f.push(S);else{const k=_r(N,M);k!=null&&(f.push(S),_.set(S,k))}}const A=new It(f);return new Da(_,A,u.fieldTransforms)}function _r(r,t){if(Ma(r=Xt(r)))return Ns("Unsupported field value:",t,r),xa(r,t);if(r instanceof Cs)return function(n,i){if(!Na(i.fu))throw i.Du(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const h of n){let d=_r(h,i.bu(u));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=Xt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Il(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=K.fromDate(n);return{timestampValue:Jn(i.serializer,o)}}if(n instanceof K){const o=new K(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Jn(i.serializer,o)}}if(n instanceof ks)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ve)return{bytesValue:ta(i.serializer,n._byteString)};if(n instanceof Rt){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.Du(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ps(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Du(`Unsupported field value: ${Ss(n)}`)}(r,t)}function xa(r,t){const e={};return Vo(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):he(r,(n,i)=>{const o=_r(i,t.pu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Ma(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof K||r instanceof ks||r instanceof Ve||r instanceof Rt||r instanceof Cs)}function Ns(r,t,e){if(!Ma(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=Ss(e);throw n==="an object"?t.Du(r+" a custom object"):t.Du(r+" "+n)}}function os(r,t,e){if((t=Xt(t))instanceof gr)return t._internalPath;if(typeof t=="string")return bs(r,t);throw tr("Field path arguments must be of type string or ",r,!1,void 0,e)}const xc=new RegExp("[~\\*/\\[\\]]");function bs(r,t,e){if(t.search(xc)>=0)throw tr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new gr(...t.split("."))._internalPath}catch{throw tr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function tr(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let d="";return(o||u)&&(d+=" (found",o&&(d+=` in field ${n}`),u&&(d+=` in document ${i}`),d+=")"),new b(P.INVALID_ARGUMENT,h+r+d)}function La(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class Oa{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Mc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Fa("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Mc extends Oa{data(){return super.data()}}function Fa(r,t){return typeof t=="string"?bs(r,t):t instanceof gr?t._internalPath:t._delegate._internalPath}/**
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
 */function Lc(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new b(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oc{convertValue(t,e="none"){switch(le(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ue(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return he(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertGeoPoint(t){return new ks(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=hs(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(on(t));default:return null}}convertTimestamp(t){const e=Jt(t);return new K(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);W(oa(n));const i=new an(n.get(1),n.get(3)),o=new x(n.popFirst(5));return i.isEqual(e)||Ft(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Fc(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
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
 */class Bn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Uc extends Oa{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $n(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Fa("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class $n extends Uc{data(t={}){return super.data(t)}}class Bc{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Bn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new $n(this._firestore,this._userDataWriter,n.key,n,new Bn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new b(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(h=>{const d=new $n(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Bn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const d=new $n(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Bn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return h.type!==0&&(f=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),_=u.indexOf(h.doc.key)),{type:qc(h.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function qc(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class jc extends Oc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function zc(r){r=Pe(r,fr);const t=Pe(r.firestore,mr),e=Ca(t),n=new jc(t);return Lc(r._query),wc(e,r._query).then(i=>new Bc(t,n,r,i))}function _o(r,t,e,...n){r=Pe(r,Rt);const i=Pe(r.firestore,mr),o=ba(i);let u;return u=typeof(t=Xt(t))=="string"||t instanceof gr?bc(o,"updateDoc",r._key,t,e,n):Nc(o,"updateDoc",r._key,t),Ua(i,[u.toMutation(r._key,Ct.exists(!0))])}function Kc(r,t){const e=Pe(r.firestore,mr),n=is(r),i=Fc(r.converter,t);return Ua(e,[Dc(ba(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Ct.exists(!1))]).then(()=>n)}function Ua(r,t){return function(n,i){const o=new Ht;return n.asyncQueue.enqueueAndForget(async()=>uc(await vc(n),i,o)),o.promise}(Ca(r),t)}(function(t,e=!0){(function(i){Se=i})(Du),Au(new Ru("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),h=new mr(new Uu(n.getProvider("auth-internal")),new zu(n.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new b(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new an(f.options.projectId,_)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),xi(Li,"4.6.4",t),xi(Li,"4.6.4","esm2017")})();var $c={apiKey:"AIzaSyAGz2x2bGOZjgBcUxBV7E4-xLtL0NszImQ",authDomain:"aurora-language-learning-app.firebaseapp.com",projectId:"aurora-language-learning-app",storageBucket:"aurora-language-learning-app.appspot.com",messagingSenderId:"251894860890",appId:"1:251894860890:web:cbc7735ba34d698c56dc63",measurementId:"G-LKN9TF0F4D"};const Ba=xu($c),Gc=Mu(Ba),er=Vc(Ba),Qt=[0,60,120,300,1800,3600,26e3,86400,172800,604800,1209600],Gn=[];let L=[],Vt=[],Ot=[];const At=document.getElementsByClassName("number");[...At][0].innerHTML=localStorage.getItem("green")?JSON.parse(localStorage.getItem("green")).length:"?";[...At][1].innerHTML=localStorage.getItem("yellow")?JSON.parse(localStorage.getItem("yellow")).length:"?";[...At][2].innerHTML=localStorage.getItem("yellow")?JSON.parse(localStorage.getItem("yellow")).length:"?";let cn="";Lu(Gc,async r=>{if(r){cn=r.email;const t=Sa(er,cn);(await zc(t)).forEach(n=>{Gn.push({id:n.id,data:n.data()}),console.log(n.data().stage,Qt[n.data().stage],K.now().seconds-(Qt[n.data().stage]+n.data().time.seconds)),K.now().seconds-(Qt[n.data().stage]+n.data().time.seconds)>=0?L.push({id:n.id,data:n.data()}):n.data().stage<Qt.length-2?Vt.push({id:n.id,data:n.data()}):Ot.push({id:n.id,data:n.data()})}),console.log(Gn),[...At][0].innerHTML=L.length,[...At][1].innerHTML=Vt.length,[...At][2].innerHTML=Ot.length,localStorage.setItem("cards",JSON.stringify(Gn)),localStorage.setItem("green",JSON.stringify(L)),localStorage.setItem("blue",JSON.stringify(Vt)),localStorage.setItem("yellow",JSON.stringify(Ot))}});document.getElementById("word").onkeyup=()=>{const r=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURI(document.getElementById("word").value)}`;fetch(r).then(t=>t.json()).then(t=>{console.log(t[0].map(e=>e[0]).join("")),document.getElementById("meaning").value=t[0].map(e=>e[0]).join("")}).catch(t=>(console.log(t),""))};document.getElementById("meaning").onkeyup=()=>{const r=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=vi&tl=en&dt=t&q=${encodeURI(document.getElementById("meaning").value)}`;fetch(r).then(t=>t.json()).then(t=>{document.getElementById("word").value=t[0].map(e=>e[0]).join("")}).catch(t=>(console.log(t),""))};document.getElementById("submit").onclick=async()=>{const r=document.getElementById("word").value,t=document.getElementById("meaning").value,e=document.getElementById("example").value;r.trim()!=""&&t.trim()!=""&&(document.getElementById("word").value="",document.getElementById("meaning").value="",document.getElementById("example").value="",await Kc(Sa(er,cn),{word:r,meaning:t,example:e,stage:0,time:K.now()}).then(function(n){console.log(n),L.push({id:n.id,data:{word:r,meaning:t,example:e,stage:0,time:K.now()}}),[...At][0].innerHTML=L.length,localStorage.setItem("cards",JSON.stringify(Gn)),localStorage.setItem("green",JSON.stringify(L))}))};document.getElementById("add").onclick=()=>{document.getElementById("add-menu").classList.toggle("show")};document.getElementById("close-add-menu").onclick=()=>{document.getElementById("add-menu").classList.toggle("show")};setInterval(()=>{let r=0;Vt.forEach(t=>{K.now().seconds-(Qt[t.data.stage]+t.data.time.seconds)>=0&&(L.push(t),console.log(t,K.now().seconds,Qt[t.data.stage]+t.data.time.seconds),Vt.splice(r,1)),r++}),r=0,Ot.forEach(t=>{K.now().seconds-(Qt[t.data.stage]+t.data.time.seconds)>=0&&(L.push(t),Ot.splice(r,1)),r++}),[...At][0].innerHTML=L.length,[...At][1].innerHTML=Vt.length,[...At][2].innerHTML=Ot.length},2e3);const wt=document.querySelector(".card").children[0];wt.addEventListener("mousedown",function(){if(!wt.classList.contains("is-flipped")){wt.classList.toggle("is-flipped");const r=wt.getElementsByClassName("back")[0];r.style.color="black",document.getElementById("speaker").onclick=()=>{speaking(L[0].data.word+(L[0].data.example?`... ${L[0].data.example}`:""))},document.getElementById("document").onclick=()=>{window.open(`https://dictionary.cambridge.org/spellcheck/english/?q=${L[0].data.word}`)}}});document.getElementById("close-test-menu").onclick=()=>{document.getElementById("test-menu").classList.toggle("show"),wt.style="",wt.classList="",rn=!1,Kt="none"};document.getElementById("start").onclick=()=>{if(L.length!=0){document.getElementById("test-menu").classList.toggle("show"),L=L.sort((e,n)=>.5-Math.random());const r=wt.getElementsByClassName("front")[0],t=wt.getElementsByClassName("back")[0];qa(r,t)}};function qa(r,t){speaking(L[0].data.word+(L[0].data.example?`... ${L[0].data.example}`:"")),r.innerHTML=`
        <div>
            <h1>${L[0].data.word}</h1>
            ${L[0].data.example?`<h3>${L[0].data.example}</h3>`:""}
        </div>
    `,t.innerHTML=`
        <div>
            <h3>${L[0].data.word}</h3>
            <h1>${L[0].data.meaning}</h1>
            ${L[0].data.example?`<h3>${L[0].data.example}</h3>`:""}
            <hr>
            <span class="material-symbols-outlined" id="speaker">brand_awareness</span>
            <span class="material-symbols-outlined" id="document">description</span>
            <p id="right">Đã nhớ</p>
            <p id="wrong">Học lại</p>
        </div>
    `}let rn=!1,Kt="none";wt.addEventListener("transitionend",function(){rn=!0},!1);Qc(wt);function Qc(r){let t=null,e=null;r.addEventListener("mousedown",n,!1),r.addEventListener("touchstart",n,!1);function n(u){rn&&(t=u.clientX===void 0?u.touches[0].clientX:u.clientX,e=u.clientY===void 0?u.touches[0].clientY:u.clientY,document.addEventListener("mousemove",i,!1),document.addEventListener("touchmove",i,!1),document.addEventListener("mouseup",o,!1),document.addEventListener("touchend",o,!1))}function i(u){if(rn){if(t===null||e===null)return;const h=u.clientX===void 0?u.touches[0].clientX:u.clientX,d=u.clientY===void 0?u.touches[0].clientY:u.clientY,f=h-t,_=d-e;t=h,e=d,r.style.top=r.offsetTop+_+"px",r.style.left=r.offsetLeft+f+"px";const A=r.style.left.slice(0,-2)/window.innerWidth;r.style.transform="rotate("+-A+"rad) rotateY(180deg)",r.style.left.slice(0,-2)>window.innerWidth*15/100?(Kt="right",document.getElementById("right").style.display="initial"):r.style.left.slice(0,-2)<-window.innerWidth*15/100?(Kt="left",document.getElementById("wrong").style.display="initial"):(Kt="none",document.getElementById("right").style.display="none",document.getElementById("wrong").style.display="none")}}function o(){if(t=null,e=null,Kt=="none")r.style.top=0,r.style.left=0,r.style.transform="rotate(0rad) rotateY(180deg)";else{speechSynthesis.cancel(),Kt=="right"?(_o(is(er,cn,L[0].id),{stage:Math.min(Math.max(L[0].data.stage+1,0),9),time:K.now()}),L[0].data.stage=Math.min(Math.max(L[0].data.stage+1,0),9),L[0].data.time=K.now(),L[0].data.stage<=Qt.length-3?Vt.push(L.shift()):Ot.push(L.shift())):Kt=="left"&&(_o(is(er,cn,L[0].id),{stage:Math.min(Math.max(L[0].data.stage-1,0),4),time:K.now()}),L[0].data.stage=Math.min(Math.max(L[0].data.stage-1,0),4),L[0].data.time=K.now(),L[0].data.stage!=0?Vt.push(L.shift()):L.push(L.shift())),[...At][0].innerHTML=L.length,[...At][1].innerHTML=Vt.length,[...At][2].innerHTML=Ot.length,localStorage.setItem("green",JSON.stringify(L)),localStorage.setItem("blue",JSON.stringify(Vt)),localStorage.setItem("yellow",JSON.stringify(Ot)),r.style="",wt.classList="",rn=!1,Kt="none",document.getElementById("right").style.display="none",document.getElementById("wrong").style.display="none";const u=wt.getElementsByClassName("front")[0],h=wt.getElementsByClassName("back")[0];h.style.color="white",L.length!=0?qa(u,h):document.getElementById("test-menu").classList.toggle("show")}document.removeEventListener("mousemove",i,!1),document.removeEventListener("touchmove",i,!1),document.removeEventListener("mouseup",o,!1),document.removeEventListener("touchend",o,!1)}}
