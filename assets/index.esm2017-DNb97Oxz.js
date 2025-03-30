import{L as du,_ as mu,C as pu,r as Ci,F as gu,b as Ut,d as _u,e as yu,f as Tu,h as Eu,j as zt,S as vu,k as Iu,l as Au}from"./index-68602d24-4HnSmC7t.js";let ki,Di,Or;async function wu(){ki=await Ru("https://hadriengardeur.github.io/web-speech-recommended-voices/json/en.json"),Di=Pu(ki);var r=window.speechSynthesis.getVoices();for(const t of r)if(t.name===Di[0].name){Or=t,console.log(Or);break}}wu();async function Ru(r){try{return await(await fetch(r)).json()}catch(t){return console.error("Error loading JSON data:",t),null}}function Pu(r){if(!r)return[];const t=[],e=window.speechSynthesis.getVoices(),n=e.filter(i=>i.name.includes("Google")==!1);return n.length!=0&&(r.voices=n),r.voices.forEach(function(i){e.some(o=>o.name===i.name)?t.push(i):i.altNames&&i.altNames.forEach(function(o){e.some(u=>u.name===o)&&(i.name=o,t.push(i))})}),t}async function xc(r){var t=new SpeechSynthesisUtterance;t.voice=Or,t.volume=1,t.rate=1,t.pitch=1,t.text=r,t.lang="en",speechSynthesis.speak(t)}console.log(window.speechSynthesis.getVoices());var Ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zt,go;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function g(){}g.prototype=m.prototype,E.D=m.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(y,T,I){for(var p=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)p[kt-2]=arguments[kt];return m.prototype[T].apply(y,p)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(T=0;16>T;++T)y[T]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=E.g[0],g=E.g[1],T=E.g[2];var I=E.g[3],p=m+(I^g&(T^I))+y[0]+3614090360&4294967295;m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[1]+3905402710&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[2]+606105819&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[3]+3250441966&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(I^g&(T^I))+y[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[5]+1200080426&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[6]+2821735955&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[7]+4249261313&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(I^g&(T^I))+y[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[9]+2336552879&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[10]+4294925233&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[11]+2304563134&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(I^g&(T^I))+y[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[13]+4254626195&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[14]+2792965006&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[15]+1236535329&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(T^I&(g^T))+y[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[6]+3225465664&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[11]+643717713&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[0]+3921069994&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(g^T))+y[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[10]+38016083&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[15]+3634488961&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[4]+3889429448&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(g^T))+y[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[14]+3275163606&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[3]+4107603335&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[8]+1163531501&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(g^T))+y[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[2]+4243563512&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[7]+1735328473&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[12]+2368359562&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(g^T^I)+y[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[8]+2272392833&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[11]+1839030562&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[14]+4259657740&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(g^T^I)+y[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[4]+1272893353&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[7]+4139469664&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[10]+3200236656&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(g^T^I)+y[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[0]+3936430074&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[3]+3572445317&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[6]+76029189&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(g^T^I)+y[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[12]+3873151461&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[15]+530742520&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[2]+3299628645&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(T^(g|~I))+y[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[7]+1126891415&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[14]+2878612391&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[5]+4237533241&4294967295,g=T+(p<<21&4294967295|p>>>11),p=m+(T^(g|~I))+y[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[3]+2399980690&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[10]+4293915773&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[1]+2240044497&4294967295,g=T+(p<<21&4294967295|p>>>11),p=m+(T^(g|~I))+y[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[15]+4264355552&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[6]+2734768916&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[13]+1309151649&4294967295,g=T+(p<<21&4294967295|p>>>11),p=m+(T^(g|~I))+y[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[11]+3174756917&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[2]+718787259&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+I&4294967295}n.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var g=m-this.blockSize,y=this.B,T=this.h,I=0;I<m;){if(T==0)for(;I<=g;)i(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<m;)if(y[T++]=E.charCodeAt(I++),T==this.blockSize){i(this,y),T=0;break}}else for(;I<m;)if(y[T++]=E[I++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=m},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var g=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=g&255,g/=256;for(this.u(E),E=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)E[g++]=this.g[m]>>>y&255;return E};function o(E,m){var g=h;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=m(E)}function u(E,m){this.h=m;for(var g=[],y=!0,T=E.length-1;0<=T;T--){var I=E[T]|0;y&&I==m||(g[T]=I,y=!1)}this.g=g}var h={};function c(E){return-128<=E&&128>E?o(E,function(m){return new u([m|0],0>m?-1:0)}):new u([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return k(d(-E));for(var m=[],g=1,y=0;E>=g;y++)m[y]=E/g|0,g*=4294967296;return new u(m,0)}function _(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return k(_(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),y=w,T=0;T<E.length;T+=8){var I=Math.min(8,E.length-T),p=parseInt(E.substring(T,T+I),m);8>I?(I=d(Math.pow(m,I)),y=y.j(I).add(d(p))):(y=y.j(g),y=y.add(d(p)))}return y}var w=c(0),R=c(1),S=c(16777216);r=u.prototype,r.m=function(){if(x(this))return-k(this).m();for(var E=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(x(this))return"-"+k(this).toString(E);for(var m=d(Math.pow(E,6)),g=this,y="";;){var T=nt(g,m).g;g=K(g,T.j(m));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=T,D(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=K(this,E),x(E)?-1:D(E)?0:1};function k(E){for(var m=E.g.length,g=[],y=0;y<m;y++)g[y]=~E.g[y];return new u(g,~E.h).add(R)}r.abs=function(){return x(this)?k(this):this},r.add=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0,T=0;T<=m;T++){var I=y+(this.i(T)&65535)+(E.i(T)&65535),p=(I>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=p>>>16,I&=65535,p&=65535,g[T]=p<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function K(E,m){return E.add(k(m))}r.j=function(E){if(D(this)||D(E))return w;if(x(this))return x(E)?k(this).j(k(E)):k(k(this).j(E));if(x(E))return k(this.j(k(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var I=this.i(y)>>>16,p=this.i(y)&65535,kt=E.i(T)>>>16,we=E.i(T)&65535;g[2*y+2*T]+=p*we,$(g,2*y+2*T),g[2*y+2*T+1]+=I*we,$(g,2*y+2*T+1),g[2*y+2*T+1]+=p*kt,$(g,2*y+2*T+1),g[2*y+2*T+2]+=I*kt,$(g,2*y+2*T+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new u(g,0)};function $(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function Q(E,m){this.g=E,this.h=m}function nt(E,m){if(D(m))throw Error("division by zero");if(D(E))return new Q(w,w);if(x(E))return m=nt(k(E),m),new Q(k(m.g),k(m.h));if(x(m))return m=nt(E,k(m)),new Q(k(m.g),m.h);if(30<E.g.length){if(x(E)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=m;0>=y.l(E);)g=Ct(g),y=Ct(y);var T=st(g,1),I=st(y,1);for(y=st(y,2),g=st(g,2);!D(y);){var p=I.add(y);0>=p.l(E)&&(T=T.add(g),I=p),y=st(y,1),g=st(g,1)}return m=K(E,T.j(m)),new Q(T,m)}for(T=w;0<=E.l(m);){for(g=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=d(g),p=I.j(m);x(p)||0<p.l(E);)g-=y,I=d(g),p=I.j(m);D(I)&&(I=R),T=T.add(I),E=K(E,p)}return new Q(T,E)}r.A=function(E){return nt(this,E).h},r.and=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&E.i(y);return new u(g,this.h&E.h)},r.or=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|E.i(y);return new u(g,this.h|E.h)},r.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^E.i(y);return new u(g,this.h^E.h)};function Ct(E){for(var m=E.g.length+1,g=[],y=0;y<m;y++)g[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(g,E.h)}function st(E,m){var g=m>>5;m%=32;for(var y=E.g.length-g,T=[],I=0;I<y;I++)T[I]=0<m?E.i(I+g)>>>m|E.i(I+g+1)<<32-m:E.i(I+g);return new u(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,go=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=_,Zt=u}).apply(typeof Ni<"u"?Ni:typeof self<"u"?self:typeof window<"u"?window:{});var Sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _o,je,yo,bn,Lr,To,Eo,vo;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sn=="object"&&Sn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var v=s[f];if(!(v in l))break t;l=l[v]}s=s[s.length-1],f=l[s],a=a(f),a!=f&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,f=!1,v={next:function(){if(!f&&l<s.length){var A=l++;return{value:a(A,s[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function c(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,l){return s.call.apply(s.bind,arguments)}function w(s,a,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,f),s.apply(a,v)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,R.apply(null,arguments)}function S(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function D(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,v,A){for(var C=Array(arguments.length-2),G=2;G<arguments.length;G++)C[G-2]=arguments[G];return a.prototype[v].apply(f,C)}}function x(s){const a=s.length;if(0<a){const l=Array(a);for(let f=0;f<a;f++)l[f]=s[f];return l}return[]}function k(s,a){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(c(f)){const v=s.length||0,A=f.length||0;s.length=v+A;for(let C=0;C<A;C++)s[v+C]=f[C]}else s.push(f)}}class K{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function $(s){return/^[\s\xa0]*$/.test(s)}function Q(){var s=h.navigator;return s&&(s=s.userAgent)?s:""}function nt(s){return nt[" "](s),s}nt[" "]=function(){};var Ct=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function st(s,a,l){for(const f in s)a.call(l,s[f],f,s)}function E(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function m(s){const a={};for(const l in s)a[l]=s[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(l in f)s[l]=f[l];for(let A=0;A<g.length;A++)l=g[A],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function T(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function I(s){h.setTimeout(()=>{throw s},0)}function p(){var s=ur;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class kt{constructor(){this.h=this.g=null}add(a,l){const f=we.get();f.set(a,l),this.h?this.h.next=f:this.g=f,this.h=f}}var we=new K(()=>new Na,s=>s.reset());class Na{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Pe=!1,ur=new kt,Cs=()=>{const s=h.Promise.resolve(void 0);Re=()=>{s.then(ba)}};var ba=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(l){I(l)}var a=we;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Pe=!1};function Mt(){this.s=this.s,this.C=this.C}Mt.prototype.s=!1,Mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var xa=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};h.addEventListener("test",l,a),h.removeEventListener("test",l,a)}catch{}return s}();function Ve(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Ct){t:{try{nt(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Ma[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ve.aa.h.call(this)}}D(Ve,ht);var Ma={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),Oa=0;function La(s,a,l,f,v){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!f,this.ha=v,this.key=++Oa,this.da=this.fa=!1}function hn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function cn(s){this.src=s,this.g={},this.h=0}cn.prototype.add=function(s,a,l,f,v){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var C=hr(s,a,f,v);return-1<C?(a=s[C],l||(a.fa=!1)):(a=new La(a,this.src,A,!!f,v),a.fa=l,s.push(a)),a};function lr(s,a){var l=a.type;if(l in s.g){var f=s.g[l],v=Array.prototype.indexOf.call(f,a,void 0),A;(A=0<=v)&&Array.prototype.splice.call(f,v,1),A&&(hn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function hr(s,a,l,f){for(var v=0;v<s.length;++v){var A=s[v];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==f)return v}return-1}var cr="closure_lm_"+(1e6*Math.random()|0),fr={};function ks(s,a,l,f,v){if(Array.isArray(a)){for(var A=0;A<a.length;A++)ks(s,a[A],l,f,v);return null}return l=bs(l),s&&s[ln]?s.K(a,l,d(f)?!!f.capture:!1,v):Fa(s,a,l,!1,f,v)}function Fa(s,a,l,f,v,A){if(!a)throw Error("Invalid event type");var C=d(v)?!!v.capture:!!v,G=mr(s);if(G||(s[cr]=G=new cn(s)),l=G.add(a,l,f,C,A),l.proxy)return l;if(f=Ua(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)xa||(v=C),v===void 0&&(v=!1),s.addEventListener(a.toString(),f,v);else if(s.attachEvent)s.attachEvent(Ns(a.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Ua(){function s(l){return a.call(s.src,s.listener,l)}const a=qa;return s}function Ds(s,a,l,f,v){if(Array.isArray(a))for(var A=0;A<a.length;A++)Ds(s,a[A],l,f,v);else f=d(f)?!!f.capture:!!f,l=bs(l),s&&s[ln]?(s=s.i,a=String(a).toString(),a in s.g&&(A=s.g[a],l=hr(A,l,f,v),-1<l&&(hn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete s.g[a],s.h--)))):s&&(s=mr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=hr(a,l,f,v)),(l=-1<s?a[s]:null)&&dr(l))}function dr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[ln])lr(a.i,s);else{var l=s.type,f=s.proxy;a.removeEventListener?a.removeEventListener(l,f,s.capture):a.detachEvent?a.detachEvent(Ns(l),f):a.addListener&&a.removeListener&&a.removeListener(f),(l=mr(a))?(lr(l,s),l.h==0&&(l.src=null,a[cr]=null)):hn(s)}}}function Ns(s){return s in fr?fr[s]:fr[s]="on"+s}function qa(s,a){if(s.da)s=!0;else{a=new Ve(a,this);var l=s.listener,f=s.ha||s.src;s.fa&&dr(s),s=l.call(f,a)}return s}function mr(s){return s=s[cr],s instanceof cn?s:null}var pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function bs(s){return typeof s=="function"?s:(s[pr]||(s[pr]=function(a){return s.handleEvent(a)}),s[pr])}function ct(){Mt.call(this),this.i=new cn(this),this.M=this,this.F=null}D(ct,Mt),ct.prototype[ln]=!0,ct.prototype.removeEventListener=function(s,a,l,f){Ds(this,s,a,l,f)};function _t(s,a){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var v=a;a=new ht(f,s),y(a,v)}if(v=!0,l)for(var A=l.length-1;0<=A;A--){var C=a.g=l[A];v=fn(C,f,!0,a)&&v}if(C=a.g=s,v=fn(C,f,!0,a)&&v,v=fn(C,f,!1,a)&&v,l)for(A=0;A<l.length;A++)C=a.g=l[A],v=fn(C,f,!1,a)&&v}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],f=0;f<l.length;f++)hn(l[f]);delete s.g[a],s.h--}}this.F=null},ct.prototype.K=function(s,a,l,f){return this.i.add(String(s),a,!1,l,f)},ct.prototype.L=function(s,a,l,f){return this.i.add(String(s),a,!0,l,f)};function fn(s,a,l,f){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,A=0;A<a.length;++A){var C=a[A];if(C&&!C.da&&C.capture==l){var G=C.listener,it=C.ha||C.src;C.fa&&lr(s.i,C),v=G.call(it,f)!==!1&&v}}return v&&!f.defaultPrevented}function xs(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(s,a||0)}function Ms(s){s.g=xs(()=>{s.g=null,s.i&&(s.i=!1,Ms(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Ba extends Mt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ms(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Se(s){Mt.call(this),this.h=s,this.g={}}D(Se,Mt);var Os=[];function Ls(s){st(s.g,function(a,l){this.g.hasOwnProperty(l)&&dr(a)},s),s.g={}}Se.prototype.N=function(){Se.aa.N.call(this),Ls(this)},Se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gr=h.JSON.stringify,ja=h.JSON.parse,za=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function _r(){}_r.prototype.h=null;function Fs(s){return s.h||(s.h=s.i())}function Us(){}var Ce={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yr(){ht.call(this,"d")}D(yr,ht);function Tr(){ht.call(this,"c")}D(Tr,ht);var Wt={},qs=null;function dn(){return qs=qs||new ct}Wt.La="serverreachability";function Bs(s){ht.call(this,Wt.La,s)}D(Bs,ht);function ke(s){const a=dn();_t(a,new Bs(a))}Wt.STAT_EVENT="statevent";function js(s,a){ht.call(this,Wt.STAT_EVENT,s),this.stat=a}D(js,ht);function yt(s){const a=dn();_t(a,new js(a,s))}Wt.Ma="timingevent";function zs(s,a){ht.call(this,Wt.Ma,s),this.size=a}D(zs,ht);function De(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},a)}function Ne(){this.g=!0}Ne.prototype.xa=function(){this.g=!1};function Ka(s,a,l,f,v,A){s.info(function(){if(s.g)if(A)for(var C="",G=A.split("&"),it=0;it<G.length;it++){var B=G[it].split("=");if(1<B.length){var ft=B[0];B=B[1];var dt=ft.split("_");C=2<=dt.length&&dt[1]=="type"?C+(ft+"="+B+"&"):C+(ft+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+a+`
`+l+`
`+C})}function $a(s,a,l,f,v,A,C){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+a+`
`+l+`
`+A+" "+C})}function oe(s,a,l,f){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Qa(s,l)+(f?" "+f:"")})}function Ga(s,a){s.info(function(){return"TIMEOUT: "+a})}Ne.prototype.info=function(){};function Qa(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var v=f[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return gr(l)}catch{return a}}var mn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ks={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Er;function pn(){}D(pn,_r),pn.prototype.g=function(){return new XMLHttpRequest},pn.prototype.i=function(){return{}},Er=new pn;function Ot(s,a,l,f){this.j=s,this.i=a,this.l=l,this.R=f||1,this.U=new Se(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $s}function $s(){this.i=null,this.g="",this.h=!1}var Gs={},vr={};function Ir(s,a,l){s.L=1,s.v=Tn(Dt(a)),s.m=l,s.P=!0,Qs(s,null)}function Qs(s,a){s.F=Date.now(),gn(s),s.A=Dt(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ai(l.i,"t",f),s.C=0,l=s.j.J,s.h=new $s,s.g=Ri(s.j,l?a:null,!s.m),0<s.O&&(s.M=new Ba(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,f=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(Os[0]=v.toString()),v=Os);for(var A=0;A<v.length;A++){var C=ks(l,v[A],f||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),ke(),Ka(s.i,s.u,s.A,s.l,s.R,s.m)}Ot.prototype.ca=function(s){s=s.target;const a=this.M;a&&Nt(s)==3?a.j():this.Y(s)},Ot.prototype.Y=function(s){try{if(s==this.g)t:{const dt=Nt(this.g);var a=this.g.Ba();const le=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||mi(this.g)))){this.J||dt!=4||a==7||(a==8||0>=le?ke(3):ke(2)),Ar(this);var l=this.g.Z();this.X=l;e:if(Ws(this)){var f=mi(this.g);s="";var v=f.length,A=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),be(this);var C="";break e}this.h.i=new h.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,s+=this.h.i.decode(f[a],{stream:!(A&&a==v-1)});f.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,$a(this.i,this.u,this.A,this.l,this.R,dt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var G,it=this.g;if((G=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(G)){var B=G;break e}}B=null}if(l=B)oe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wr(this,l);else{this.o=!1,this.s=3,yt(12),Ht(this),be(this);break t}}if(this.P){l=!0;let At;for(;!this.J&&this.C<C.length;)if(At=Wa(this,C),At==vr){dt==4&&(this.s=4,yt(14),l=!1),oe(this.i,this.l,null,"[Incomplete Response]");break}else if(At==Gs){this.s=4,yt(15),oe(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else oe(this.i,this.l,At,null),wr(this,At);if(Ws(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||C.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)oe(this.i,this.l,C,"[Invalid Chunked Response]"),Ht(this),be(this);else if(0<C.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),kr(ft),ft.M=!0,yt(11))}}else oe(this.i,this.l,C,null),wr(this,C);dt==4&&Ht(this),this.o&&!this.J&&(dt==4?vi(this.j,this):(this.o=!1,gn(this)))}else cu(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Ht(this),be(this)}}}catch{}finally{}};function Ws(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Wa(s,a){var l=s.C,f=a.indexOf(`
`,l);return f==-1?vr:(l=Number(a.substring(l,f)),isNaN(l)?Gs:(f+=1,f+l>a.length?vr:(a=a.slice(f,f+l),s.C=f+l,a)))}Ot.prototype.cancel=function(){this.J=!0,Ht(this)};function gn(s){s.S=Date.now()+s.I,Hs(s,s.I)}function Hs(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=De(R(s.ba,s),a)}function Ar(s){s.B&&(h.clearTimeout(s.B),s.B=null)}Ot.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Ga(this.i,this.A),this.L!=2&&(ke(),yt(17)),Ht(this),this.s=2,be(this)):Hs(this,this.S-s)};function be(s){s.j.G==0||s.J||vi(s.j,s)}function Ht(s){Ar(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ls(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function wr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Rr(l.h,s))){if(!s.K&&Rr(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Rn(l),An(l);else break t;Cr(l),yt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=De(R(l.Za,l),6e3));if(1>=Js(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Yt(l,11)}else if((s.K||l.g==s)&&Rn(l),!$(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let B=v[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const ft=B[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const dt=B[4];dt!=null&&(l.Aa=dt,l.j.info("SVER="+l.Aa));const le=B[5];le!=null&&typeof le=="number"&&0<le&&(f=1.5*le,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const At=s.g;if(At){const Vn=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vn){var A=f.h;A.g||Vn.indexOf("spdy")==-1&&Vn.indexOf("quic")==-1&&Vn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Pr(A,A.h),A.h=null))}if(f.D){const Dr=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;Dr&&(f.ya=Dr,W(f.I,f.D,Dr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var C=s;if(f.qa=wi(f,f.J?f.ia:null,f.W),C.K){Zs(f.h,C);var G=C,it=f.L;it&&(G.I=it),G.B&&(Ar(G),gn(G)),f.g=C}else Ti(f);0<l.i.length&&wn(l)}else B[0]!="stop"&&B[0]!="close"||Yt(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Yt(l,7):Sr(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}ke(4)}catch{}}var Ha=class{constructor(s,a){this.g=s,this.map=a}};function Xs(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ys(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Js(s){return s.h?1:s.g?s.g.size:0}function Rr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Pr(s,a){s.g?s.g.add(a):s.h=a}function Zs(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Xs.prototype.cancel=function(){if(this.i=ti(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ti(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return x(s.i)}function Xa(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(c(s)){for(var a=[],l=s.length,f=0;f<l;f++)a.push(s[f]);return a}a=[],l=0;for(f in s)a[l++]=s[f];return a}function Ya(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(c(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const f in s)a[l++]=f;return a}}}function ei(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(c(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=Ya(s),f=Xa(s),v=f.length,A=0;A<v;A++)a.call(void 0,f[A],l&&l[A],s)}var ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ja(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),v=null;if(0<=f){var A=s[l].substring(0,f);v=s[l].substring(f+1)}else A=s[l];a(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Xt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Xt){this.h=s.h,_n(this,s.j),this.o=s.o,this.g=s.g,yn(this,s.s),this.l=s.l;var a=s.i,l=new Oe;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),ri(this,l),this.m=s.m}else s&&(a=String(s).match(ni))?(this.h=!1,_n(this,a[1]||"",!0),this.o=xe(a[2]||""),this.g=xe(a[3]||"",!0),yn(this,a[4]),this.l=xe(a[5]||"",!0),ri(this,a[6]||"",!0),this.m=xe(a[7]||"")):(this.h=!1,this.i=new Oe(null,this.h))}Xt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Me(a,si,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Me(a,si,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Me(l,l.charAt(0)=="/"?eu:tu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Me(l,ru)),s.join("")};function Dt(s){return new Xt(s)}function _n(s,a,l){s.j=l?xe(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function yn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ri(s,a,l){a instanceof Oe?(s.i=a,su(s.i,s.h)):(l||(a=Me(a,nu)),s.i=new Oe(a,s.h))}function W(s,a,l){s.i.set(a,l)}function Tn(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function xe(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Me(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Za),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Za(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var si=/[#\/\?@]/g,tu=/[#\?:]/g,eu=/[#\?]/g,nu=/[#\?@]/g,ru=/#/g;function Oe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Lt(s){s.g||(s.g=new Map,s.h=0,s.i&&Ja(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=Oe.prototype,r.add=function(s,a){Lt(this),this.i=null,s=ae(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function ii(s,a){Lt(s),a=ae(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function oi(s,a){return Lt(s),a=ae(s,a),s.g.has(a)}r.forEach=function(s,a){Lt(this),this.g.forEach(function(l,f){l.forEach(function(v){s.call(a,v,f,this)},this)},this)},r.na=function(){Lt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let f=0;f<a.length;f++){const v=s[f];for(let A=0;A<v.length;A++)l.push(a[f])}return l},r.V=function(s){Lt(this);let a=[];if(typeof s=="string")oi(this,s)&&(a=a.concat(this.g.get(ae(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return Lt(this),this.i=null,s=ae(this,s),oi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function ai(s,a,l){ii(s,a),0<l.length&&(s.i=null,s.g.set(ae(s,a),x(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var f=a[l];const A=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var v=A;C[f]!==""&&(v+="="+encodeURIComponent(String(C[f]))),s.push(v)}}return this.i=s.join("&")};function ae(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function su(s,a){a&&!s.j&&(Lt(s),s.i=null,s.g.forEach(function(l,f){var v=f.toLowerCase();f!=v&&(ii(this,f),ai(this,v,l))},s)),s.j=a}function iu(s,a){const l=new Ne;if(h.Image){const f=new Image;f.onload=S(Ft,l,"TestLoadImage: loaded",!0,a,f),f.onerror=S(Ft,l,"TestLoadImage: error",!1,a,f),f.onabort=S(Ft,l,"TestLoadImage: abort",!1,a,f),f.ontimeout=S(Ft,l,"TestLoadImage: timeout",!1,a,f),h.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else a(!1)}function ou(s,a){const l=new Ne,f=new AbortController,v=setTimeout(()=>{f.abort(),Ft(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:f.signal}).then(A=>{clearTimeout(v),A.ok?Ft(l,"TestPingServer: ok",!0,a):Ft(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Ft(l,"TestPingServer: error",!1,a)})}function Ft(s,a,l,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(l)}catch{}}function au(){this.g=new za}function uu(s,a,l){const f=l||"";try{ei(s,function(v,A){let C=v;d(v)&&(C=gr(v)),a.push(f+A+"="+encodeURIComponent(C))})}catch(v){throw a.push(f+"type="+encodeURIComponent("_badmap")),v}}function En(s){this.l=s.Ub||null,this.j=s.eb||!1}D(En,_r),En.prototype.g=function(){return new vn(this.l,this.j)},En.prototype.i=function(s){return function(){return s}}({});function vn(s,a){ct.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(vn,ct),r=vn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Fe(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Le(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Fe(this)),this.g&&(this.readyState=3,Fe(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ui(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ui(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Le(this):Fe(this),this.readyState==3&&ui(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,Le(this))},r.Qa=function(s){this.g&&(this.response=s,Le(this))},r.ga=function(){this.g&&Le(this)};function Le(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Fe(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Fe(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function li(s){let a="";return st(s,function(l,f){a+=f,a+=":",a+=l,a+=`\r
`}),a}function Vr(s,a,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=li(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):W(s,a,l))}function Y(s){ct.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Y,ct);var lu=/^https?$/i,hu=["POST","PUT"];r=Y.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Er.g(),this.v=this.o?Fs(this.o):Fs(Er),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){hi(this,A);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)l.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())l.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),v=h.FormData&&s instanceof h.FormData,!(0<=Array.prototype.indexOf.call(hu,a,void 0))||f||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of l)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{di(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){hi(this,A)}};function hi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,ci(s),In(s)}function ci(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),In(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),In(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?fi(this):this.bb())},r.bb=function(){fi(this)};function fi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Nt(s)!=4||s.Z()!=2)){if(s.u&&Nt(s)==4)xs(s.Ea,0,s);else if(_t(s,"readystatechange"),Nt(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var f;if(f=C===0){var v=String(s.D).match(ni)[1]||null;!v&&h.self&&h.self.location&&(v=h.self.location.protocol.slice(0,-1)),f=!lu.test(v?v.toLowerCase():"")}l=f}if(l)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var A=2<Nt(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",ci(s)}}finally{In(s)}}}}function In(s,a){if(s.g){di(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||_t(s,"ready");try{l.onreadystatechange=f}catch{}}}function di(s){s.I&&(h.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Nt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),ja(a)}};function mi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function cu(s){const a={};s=(s.g&&2<=Nt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if($(s[f]))continue;var l=T(s[f]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[v]||[];a[v]=A,A.push(l)}E(a,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ue(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function pi(s){this.Aa=0,this.i=[],this.j=new Ne,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ue("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ue("baseRetryDelayMs",5e3,s),this.cb=Ue("retryDelaySeedMs",1e4,s),this.Wa=Ue("forwardChannelMaxRetries",2,s),this.wa=Ue("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Xs(s&&s.concurrentRequestLimit),this.Da=new au,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=pi.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,f){yt(0),this.W=s,this.H=a||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=wi(this,null,this.W),wn(this)};function Sr(s){if(gi(s),s.G==3){var a=s.U++,l=Dt(s.I);if(W(l,"SID",s.K),W(l,"RID",a),W(l,"TYPE","terminate"),qe(s,l),a=new Ot(s,s.j,a),a.L=2,a.v=Tn(Dt(l)),l=!1,h.navigator&&h.navigator.sendBeacon)try{l=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&h.Image&&(new Image().src=a.v,l=!0),l||(a.g=Ri(a.j,null),a.g.ea(a.v)),a.F=Date.now(),gn(a)}Ai(s)}function An(s){s.g&&(kr(s),s.g.cancel(),s.g=null)}function gi(s){An(s),s.u&&(h.clearTimeout(s.u),s.u=null),Rn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&h.clearTimeout(s.s),s.s=null)}function wn(s){if(!Ys(s.h)&&!s.s){s.s=!0;var a=s.Ga;Re||Cs(),Pe||(Re(),Pe=!0),ur.add(a,s),s.B=0}}function fu(s,a){return Js(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=De(R(s.Ga,s,a),Ii(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new Ot(this,this.j,s);let A=this.o;if(this.S&&(A?(A=m(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=yi(this,v,a),l=Dt(this.I),W(l,"RID",s),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),qe(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(li(A)))+"&"+a:this.m&&Vr(l,this.m,A)),Pr(this.h,v),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",a),W(l,"SID","null"),v.T=!0,Ir(v,l,null)):Ir(v,l,a),this.G=2}}else this.G==3&&(s?_i(this,s):this.i.length==0||Ys(this.h)||_i(this))};function _i(s,a){var l;a?l=a.l:l=s.U++;const f=Dt(s.I);W(f,"SID",s.K),W(f,"RID",l),W(f,"AID",s.T),qe(s,f),s.m&&s.o&&Vr(f,s.m,s.o),l=new Ot(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=yi(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Pr(s.h,l),Ir(l,f,a)}function qe(s,a){s.H&&st(s.H,function(l,f){W(a,f,l)}),s.l&&ei({},function(l,f){W(a,f,l)})}function yi(s,a,l){l=Math.min(s.i.length,l);var f=s.l?R(s.l.Na,s.l,s):null;t:{var v=s.i;let A=-1;for(;;){const C=["count="+l];A==-1?0<l?(A=v[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let G=!0;for(let it=0;it<l;it++){let B=v[it].g;const ft=v[it].map;if(B-=A,0>B)A=Math.max(0,v[it].g-100),G=!1;else try{uu(ft,C,"req"+B+"_")}catch{f&&f(ft)}}if(G){f=C.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,f}function Ti(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Re||Cs(),Pe||(Re(),Pe=!0),ur.add(a,s),s.v=0}}function Cr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=De(R(s.Fa,s),Ii(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Ei(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=De(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),An(this),Ei(this))};function kr(s){s.A!=null&&(h.clearTimeout(s.A),s.A=null)}function Ei(s){s.g=new Ot(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Dt(s.qa);W(a,"RID","rpc"),W(a,"SID",s.K),W(a,"AID",s.T),W(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(a,"TO",s.ja),W(a,"TYPE","xmlhttp"),qe(s,a),s.m&&s.o&&Vr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Tn(Dt(a)),l.m=null,l.P=!0,Qs(l,s)}r.Za=function(){this.C!=null&&(this.C=null,An(this),Cr(this),yt(19))};function Rn(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function vi(s,a){var l=null;if(s.g==a){Rn(s),kr(s),s.g=null;var f=2}else if(Rr(s.h,a))l=a.D,Zs(s.h,a),f=1;else return;if(s.G!=0){if(a.o)if(f==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=s.B;f=dn(),_t(f,new zs(f,l)),wn(s)}else Ti(s);else if(v=a.s,v==3||v==0&&0<a.X||!(f==1&&fu(s,a)||f==2&&Cr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),v){case 1:Yt(s,5);break;case 4:Yt(s,10);break;case 3:Yt(s,6);break;default:Yt(s,2)}}}function Ii(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function Yt(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),f=s.Xa;const v=!f;f=new Xt(f||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||_n(f,"https"),Tn(f),v?iu(f.toString(),l):ou(f.toString(),l)}else yt(2);s.G=0,s.l&&s.l.sa(a),Ai(s),gi(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Ai(s){if(s.G=0,s.ka=[],s.l){const a=ti(s.h);(a.length!=0||s.i.length!=0)&&(k(s.ka,a),k(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function wi(s,a,l){var f=l instanceof Xt?Dt(l):new Xt(l);if(f.g!="")a&&(f.g=a+"."+f.g),yn(f,f.s);else{var v=h.location;f=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var A=new Xt(null);f&&_n(A,f),a&&(A.g=a),v&&yn(A,v),l&&(A.l=l),f=A}return l=s.D,a=s.ya,l&&a&&W(f,l,a),W(f,"VER",s.la),qe(s,f),f}function Ri(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Y(new En({eb:l})):new Y(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pi(){}r=Pi.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Pn(){}Pn.prototype.g=function(s,a){return new Et(s,a)};function Et(s,a){ct.call(this),this.g=new pi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!$(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!$(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ue(this)}D(Et,ct),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Sr(this.g)},Et.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=gr(s),s=l);a.i.push(new Ha(a.Ya++,s)),a.G==3&&wn(a)},Et.prototype.N=function(){this.g.l=null,delete this.j,Sr(this.g),delete this.g,Et.aa.N.call(this)};function Vi(s){yr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}D(Vi,yr);function Si(){Tr.call(this),this.status=1}D(Si,Tr);function ue(s){this.g=s}D(ue,Pi),ue.prototype.ua=function(){_t(this.g,"a")},ue.prototype.ta=function(s){_t(this.g,new Vi(s))},ue.prototype.sa=function(s){_t(this.g,new Si)},ue.prototype.ra=function(){_t(this.g,"b")},Pn.prototype.createWebChannel=Pn.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,vo=function(){return new Pn},Eo=function(){return dn()},To=Wt,Lr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mn.NO_ERROR=0,mn.TIMEOUT=8,mn.HTTP_ERROR=6,bn=mn,Ks.COMPLETE="complete",yo=Ks,Us.EventType=Ce,Ce.OPEN="a",Ce.CLOSE="b",Ce.ERROR="c",Ce.MESSAGE="d",ct.prototype.listen=ct.prototype.K,je=Us,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,_o=Y}).apply(typeof Sn<"u"?Sn:typeof self<"u"?self:typeof window<"u"?window:{});const bi="@firebase/firestore";/**
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
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let ve="10.14.0";/**
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
 */const te=new du("@firebase/firestore");function Be(){return te.logLevel}function N(r,...t){if(te.logLevel<=Ut.DEBUG){const e=t.map(Jr);te.debug(`Firestore (${ve}): ${r}`,...e)}}function bt(r,...t){if(te.logLevel<=Ut.ERROR){const e=t.map(Jr);te.error(`Firestore (${ve}): ${r}`,...e)}}function me(r,...t){if(te.logLevel<=Ut.WARN){const e=t.map(Jr);te.warn(`Firestore (${ve}): ${r}`,...e)}}function Jr(r){if(typeof r=="string")return r;try{/**
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
 */function O(r="Unexpected state"){const t=`FIRESTORE (${ve}) INTERNAL ASSERTION FAILED: `+r;throw bt(t),new Error(t)}function z(r,t){r||O()}function F(r,t){return r}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends gu{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Io{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Vu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class Su{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Cu{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let o=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Bt,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const c=o;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},h=c=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(c=>h(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?h(c):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Bt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(z(typeof n.accessToken=="string"),new Io(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string"),new pt(t)}}class ku{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Du{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new ku(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){z(this.o===void 0);const n=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(z(typeof e.token=="string"),this.R=e.token,new Nu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xu(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class Ao{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=xu(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function j(r,t){return r<t?-1:r>t?1:0}function pe(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
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
 */class et{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new et(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new et(0,0))}static max(){return new L(new et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class He{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return He.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof He?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=t.get(i),u=e.get(i);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends He{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new b(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new H(e)}static emptyPath(){return new H([])}}const Mu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends He{construct(t,e,n){return new at(t,e,n)}static isValidIdentifier(t){return Mu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new b(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new b(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new b(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,i+=2}else h==="`"?(u=!u,i++):h!=="."||u?(n+=h,i++):(o(),i++)}if(o(),u)throw new b(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(H.fromString(t))}static fromName(t){return new M(H.fromString(t).popFirst(5))}static empty(){return new M(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new H(t.slice()))}}function Ou(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=L.fromTimestamp(n===1e9?new et(e+1,0):new et(e,n));return new Kt(i,M.empty(),t)}function Lu(r){return new Kt(r.readTime,r.key,-1)}class Kt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Kt(L.min(),M.empty(),-1)}static max(){return new Kt(L.max(),M.empty(),-1)}}function Fu(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:j(r.largestBatchId,t.largestBatchId))}/**
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
 */const Uu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function en(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Uu)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,n)=>{e(t)})}static reject(t){return new P((e,n)=>{n(t)})}static waitFor(t){return new P((e,n)=>{let i=0,o=0,u=!1;t.forEach(h=>{++i,h.next(()=>{++o,u&&o===i&&e()},c=>n(c))}),u=!0,o===i&&e()})}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next(i=>i?P.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new P((n,i)=>{const o=t.length,u=new Array(o);let h=0;for(let c=0;c<o;c++){const d=c;e(t[d]).next(_=>{u[d]=_,++h,h===o&&n(u)},_=>i(_))}})}static doWhile(t,e){return new P((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function Bu(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function nn(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Zr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Zr.oe=-1;function Qn(r){return r==null}function Fn(r){return r===0&&1/r==-1/0}function ju(r){return typeof r=="number"&&Number.isInteger(r)&&!Fn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function xi(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function se(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function wo(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class X{constructor(t,e){this.comparator=t,this.root=e||ot.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cn(this.root,t,this.comparator,!0)}}class Cn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??ot.RED,this.left=i??ot.EMPTY,this.right=o??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new ot(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,i,o){return this}insert(t,e,n){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Mi(this.data.getIterator())}getIteratorFrom(t){return new Mi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class Mi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vt{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new vt([])}unionWith(t){let e=new ut(at.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return pe(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class Ro extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ro("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const zu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(r){if(z(!!r),typeof r=="string"){let t=0;const e=zu.exec(r);if(z(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ee(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
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
 */function ts(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function es(r){const t=r.mapValue.fields.__previous_value__;return ts(t)?es(t):t}function Xe(r){const t=$t(r.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
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
 */class Ku{constructor(t,e,n,i,o,u,h,c,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=c,this.useFetchStreams=d}}class Ye{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ye("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ye&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const kn={mapValue:{}};function ne(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ts(r)?4:Gu(r)?9007199254740991:$u(r)?10:11:O()}function Vt(r,t){if(r===t)return!0;const e=ne(r);if(e!==ne(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Xe(r).isEqual(Xe(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=$t(i.timestampValue),h=$t(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return ee(i.bytesValue).isEqual(ee(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=J(i.doubleValue),h=J(o.doubleValue);return u===h?Fn(u)===Fn(h):isNaN(u)&&isNaN(h)}return!1}(r,t);case 9:return pe(r.arrayValue.values||[],t.arrayValue.values||[],Vt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},h=o.mapValue.fields||{};if(xi(u)!==xi(h))return!1;for(const c in u)if(u.hasOwnProperty(c)&&(h[c]===void 0||!Vt(u[c],h[c])))return!1;return!0}(r,t);default:return O()}}function Je(r,t){return(r.values||[]).find(e=>Vt(e,t))!==void 0}function ge(r,t){if(r===t)return 0;const e=ne(r),n=ne(t);if(e!==n)return j(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,t.booleanValue);case 2:return function(o,u){const h=J(o.integerValue||o.doubleValue),c=J(u.integerValue||u.doubleValue);return h<c?-1:h>c?1:h===c?0:isNaN(h)?isNaN(c)?0:-1:1}(r,t);case 3:return Oi(r.timestampValue,t.timestampValue);case 4:return Oi(Xe(r),Xe(t));case 5:return j(r.stringValue,t.stringValue);case 6:return function(o,u){const h=ee(o),c=ee(u);return h.compareTo(c)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const h=o.split("/"),c=u.split("/");for(let d=0;d<h.length&&d<c.length;d++){const _=j(h[d],c[d]);if(_!==0)return _}return j(h.length,c.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const h=j(J(o.latitude),J(u.latitude));return h!==0?h:j(J(o.longitude),J(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Li(r.arrayValue,t.arrayValue);case 10:return function(o,u){var h,c,d,_;const w=o.fields||{},R=u.fields||{},S=(h=w.value)===null||h===void 0?void 0:h.arrayValue,D=(c=R.value)===null||c===void 0?void 0:c.arrayValue,x=j(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((_=D==null?void 0:D.values)===null||_===void 0?void 0:_.length)||0);return x!==0?x:Li(S,D)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===kn.mapValue&&u===kn.mapValue)return 0;if(o===kn.mapValue)return 1;if(u===kn.mapValue)return-1;const h=o.fields||{},c=Object.keys(h),d=u.fields||{},_=Object.keys(d);c.sort(),_.sort();for(let w=0;w<c.length&&w<_.length;++w){const R=j(c[w],_[w]);if(R!==0)return R;const S=ge(h[c[w]],d[_[w]]);if(S!==0)return S}return j(c.length,_.length)}(r.mapValue,t.mapValue);default:throw O()}}function Oi(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return j(r,t);const e=$t(r),n=$t(t),i=j(e.seconds,n.seconds);return i!==0?i:j(e.nanos,n.nanos)}function Li(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=ge(e[i],n[i]);if(o)return o}return j(e.length,n.length)}function _e(r){return Fr(r)}function Fr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=$t(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ee(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Fr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${Fr(e.fields[u])}`;return i+"}"}(r.mapValue):O()}function Ur(r){return!!r&&"integerValue"in r}function ns(r){return!!r&&"arrayValue"in r}function Fi(r){return!!r&&"nullValue"in r}function Ui(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function xn(r){return!!r&&"mapValue"in r}function $u(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function $e(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return se(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=$e(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=$e(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Gu(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(t){this.value=t}static empty(){return new Tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!xn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=$e(e)}setAll(t){let e=at.emptyPath(),n={},i=[];t.forEach((u,h)=>{if(!e.isImmediateParentOf(h)){const c=this.getFieldsMap(e);this.applyChanges(c,n,i),n={},i=[],e=h.popLast()}u?n[h.lastSegment()]=$e(u):i.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());xn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];xn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){se(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new Tt($e(this.value))}}function Po(r){const t=[];return se(r.fields,(e,n)=>{const i=new at([e]);if(xn(n)){const o=Po(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new vt(t)}/**
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
 */class gt{constructor(t,e,n,i,o,u,h){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(t){return new gt(t,0,L.min(),L.min(),L.min(),Tt.empty(),0)}static newFoundDocument(t,e,n,i){return new gt(t,1,e,L.min(),n,i,0)}static newNoDocument(t,e){return new gt(t,2,e,L.min(),L.min(),Tt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,L.min(),L.min(),Tt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Un{constructor(t,e){this.position=t,this.inclusive=e}}function qi(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=M.comparator(M.fromName(u.referenceValue),e.key):n=ge(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Bi(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Vt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class qn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Qu(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Vo{}class tt extends Vo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Hu(t,e,n):e==="array-contains"?new Ju(t,n):e==="in"?new Zu(t,n):e==="not-in"?new tl(t,n):e==="array-contains-any"?new el(t,n):new tt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Xu(t,n):new Yu(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ge(e,this.value)):e!==null&&ne(this.value)===ne(e)&&this.matchesComparison(ge(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends Vo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new St(t,e)}matches(t){return So(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function So(r){return r.op==="and"}function Co(r){return Wu(r)&&So(r)}function Wu(r){for(const t of r.filters)if(t instanceof St)return!1;return!0}function qr(r){if(r instanceof tt)return r.field.canonicalString()+r.op.toString()+_e(r.value);if(Co(r))return r.filters.map(t=>qr(t)).join(",");{const t=r.filters.map(e=>qr(e)).join(",");return`${r.op}(${t})`}}function ko(r,t){return r instanceof tt?function(n,i){return i instanceof tt&&n.op===i.op&&n.field.isEqual(i.field)&&Vt(n.value,i.value)}(r,t):r instanceof St?function(n,i){return i instanceof St&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,h)=>o&&ko(u,i.filters[h]),!0):!1}(r,t):void O()}function Do(r){return r instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${_e(e.value)}`}(r):r instanceof St?function(e){return e.op.toString()+" {"+e.getFilters().map(Do).join(" ,")+"}"}(r):"Filter"}class Hu extends tt{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Xu extends tt{constructor(t,e){super(t,"in",e),this.keys=No("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Yu extends tt{constructor(t,e){super(t,"not-in",e),this.keys=No("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function No(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class Ju extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ns(e)&&Je(e.arrayValue,this.value)}}class Zu extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Je(this.value.arrayValue,e)}}class tl extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Je(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Je(this.value.arrayValue,e)}}class el extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ns(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Je(this.value.arrayValue,n))}}/**
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
 */class nl{constructor(t,e=null,n=[],i=[],o=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=h,this.ue=null}}function ji(r,t=null,e=[],n=[],i=null,o=null,u=null){return new nl(r,t,e,n,i,o,u)}function rs(r){const t=F(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>qr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Qn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>_e(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>_e(n)).join(",")),t.ue=e}return t.ue}function ss(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Qu(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!ko(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Bi(r.startAt,t.startAt)&&Bi(r.endAt,t.endAt)}function Br(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Wn{constructor(t,e=null,n=[],i=[],o=null,u="F",h=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rl(r,t,e,n,i,o,u,h){return new Wn(r,t,e,n,i,o,u,h)}function bo(r){return new Wn(r)}function zi(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function sl(r){return r.collectionGroup!==null}function Ge(r){const t=F(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new ut(at.comparator);return u.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(h=h.add(d.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new qn(o,n))}),e.has(at.keyField().canonicalString())||t.ce.push(new qn(at.keyField(),n))}return t.ce}function Rt(r){const t=F(r);return t.le||(t.le=il(t,Ge(r))),t.le}function il(r,t){if(r.limitType==="F")return ji(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new qn(i.field,o)});const e=r.endAt?new Un(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Un(r.startAt.position,r.startAt.inclusive):null;return ji(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function jr(r,t,e){return new Wn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Hn(r,t){return ss(Rt(r),Rt(t))&&r.limitType===t.limitType}function xo(r){return`${rs(Rt(r))}|lt:${r.limitType}`}function he(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Do(i)).join(", ")}]`),Qn(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>_e(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>_e(i)).join(",")),`Target(${n})`}(Rt(r))}; limitType=${r.limitType})`}function Xn(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of Ge(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,h,c){const d=qi(u,h,c);return u.inclusive?d<=0:d<0}(n.startAt,Ge(n),i)||n.endAt&&!function(u,h,c){const d=qi(u,h,c);return u.inclusive?d>=0:d>0}(n.endAt,Ge(n),i))}(r,t)}function ol(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Mo(r){return(t,e)=>{let n=!1;for(const i of Ge(r)){const o=al(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function al(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,h){const c=u.data.field(o),d=h.data.field(o);return c!==null&&d!==null?ge(c,d):O()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
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
 */class Ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){se(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return wo(this.inner)}size(){return this.innerSize}}/**
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
 */const ul=new X(M.comparator);function xt(){return ul}const Oo=new X(M.comparator);function ze(...r){let t=Oo;for(const e of r)t=t.insert(e.key,e);return t}function Lo(r){let t=Oo;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Jt(){return Qe()}function Fo(){return Qe()}function Qe(){return new Ie(r=>r.toString(),(r,t)=>r.isEqual(t))}const ll=new X(M.comparator),hl=new ut(M.comparator);function U(...r){let t=hl;for(const e of r)t=t.add(e);return t}const cl=new ut(j);function fl(){return cl}/**
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
 */function is(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fn(t)?"-0":t}}function Uo(r){return{integerValue:""+r}}function dl(r,t){return ju(t)?Uo(t):is(r,t)}/**
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
 */class Yn{constructor(){this._=void 0}}function ml(r,t,e){return r instanceof Bn?function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ts(o)&&(o=es(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof Ze?Bo(r,t):r instanceof tn?jo(r,t):function(i,o){const u=qo(i,o),h=Ki(u)+Ki(i.Pe);return Ur(u)&&Ur(i.Pe)?Uo(h):is(i.serializer,h)}(r,t)}function pl(r,t,e){return r instanceof Ze?Bo(r,t):r instanceof tn?jo(r,t):e}function qo(r,t){return r instanceof jn?function(n){return Ur(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Bn extends Yn{}class Ze extends Yn{constructor(t){super(),this.elements=t}}function Bo(r,t){const e=zo(t);for(const n of r.elements)e.some(i=>Vt(i,n))||e.push(n);return{arrayValue:{values:e}}}class tn extends Yn{constructor(t){super(),this.elements=t}}function jo(r,t){let e=zo(t);for(const n of r.elements)e=e.filter(i=>!Vt(i,n));return{arrayValue:{values:e}}}class jn extends Yn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ki(r){return J(r.integerValue||r.doubleValue)}function zo(r){return ns(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function gl(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof Ze&&i instanceof Ze||n instanceof tn&&i instanceof tn?pe(n.elements,i.elements,Vt):n instanceof jn&&i instanceof jn?Vt(n.Pe,i.Pe):n instanceof Bn&&i instanceof Bn}(r.transform,t.transform)}class _l{constructor(t,e){this.version=t,this.transformResults=e}}class wt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new wt}static exists(t){return new wt(void 0,t)}static updateTime(t){return new wt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Jn{}function Ko(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new os(r.key,wt.none()):new rn(r.key,r.data,wt.none());{const e=r.data,n=Tt.empty();let i=new ut(at.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new Qt(r.key,n,new vt(i.toArray()),wt.none())}}function yl(r,t,e){r instanceof rn?function(i,o,u){const h=i.value.clone(),c=Gi(i.fieldTransforms,o,u.transformResults);h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):r instanceof Qt?function(i,o,u){if(!Mn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const h=Gi(i.fieldTransforms,o,u.transformResults),c=o.data;c.setAll($o(i)),c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function We(r,t,e,n){return r instanceof rn?function(o,u,h,c){if(!Mn(o.precondition,u))return h;const d=o.value.clone(),_=Qi(o.fieldTransforms,c,u);return d.setAll(_),u.convertToFoundDocument(u.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof Qt?function(o,u,h,c){if(!Mn(o.precondition,u))return h;const d=Qi(o.fieldTransforms,c,u),_=u.data;return _.setAll($o(o)),_.setAll(d),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(r,t,e,n):function(o,u,h){return Mn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(r,t,e)}function Tl(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=qo(n.transform,i||null);o!=null&&(e===null&&(e=Tt.empty()),e.set(n.field,o))}return e||null}function $i(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&pe(n,i,(o,u)=>gl(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class rn extends Jn{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qt extends Jn{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function $o(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Gi(r,t,e){const n=new Map;z(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,h=t.data.field(o.field);n.set(o.field,pl(u,h,e[i]))}return n}function Qi(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,ml(o,u,t))}return n}class os extends Jn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class El extends Jn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vl{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&yl(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=We(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=We(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Fo();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=e.has(i.key)?null:h;const c=Ko(u,h);c!==null&&n.set(i.key,c),u.isValidDocument()||u.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&pe(this.mutations,t.mutations,(e,n)=>$i(e,n))&&pe(this.baseMutations,t.baseMutations,(e,n)=>$i(e,n))}}class as{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){z(t.mutations.length===n.length);let i=function(){return ll}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new as(t,e,n,i)}}/**
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
 */class Il{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Al{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Z,q;function wl(r){switch(r){default:return O();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Go(r){if(r===void 0)return bt("GRPC error has no .code"),V.UNKNOWN;switch(r){case Z.OK:return V.OK;case Z.CANCELLED:return V.CANCELLED;case Z.UNKNOWN:return V.UNKNOWN;case Z.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Z.INTERNAL:return V.INTERNAL;case Z.UNAVAILABLE:return V.UNAVAILABLE;case Z.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Z.NOT_FOUND:return V.NOT_FOUND;case Z.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Z.ABORTED:return V.ABORTED;case Z.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Z.DATA_LOSS:return V.DATA_LOSS;default:return O()}}(q=Z||(Z={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Rl(){return new TextEncoder}/**
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
 */const Pl=new Zt([4294967295,4294967295],0);function Wi(r){const t=Rl().encode(r),e=new go;return e.update(t),new Uint8Array(e.digest())}function Hi(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Zt([e,n],0),new Zt([i,o],0)]}class us{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ke(`Invalid padding: ${e}`);if(n<0)throw new Ke(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Ke(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Ke(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Zt.fromNumber(this.Ie)}Ee(t,e,n){let i=t.add(e.multiply(Zt.fromNumber(n)));return i.compare(Pl)===1&&(i=new Zt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Wi(t),[n,i]=Hi(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new us(o,i,e);return n.forEach(h=>u.insert(h)),u}insert(t){if(this.Ie===0)return;const e=Wi(t),[n,i]=Hi(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ke extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zn{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,sn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Zn(L.min(),i,new X(j),xt(),U())}}class sn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new sn(n,e,U(),U(),U())}}/**
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
 */class On{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class Qo{constructor(t,e){this.targetId=t,this.me=e}}class Wo{constructor(t,e,n=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Xi{constructor(){this.fe=0,this.ge=Ji(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),n=U();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:O()}}),new sn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Ji()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Vl{constructor(t){this.Le=t,this.Be=new Map,this.ke=xt(),this.qe=Yi(),this.Qe=new X(j)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,n=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Br(o))if(n===0){const u=new M(o.path);this.Ue(e,u,gt.newNoDocument(u,L.min()))}else z(n===1);else{const u=this.Ye(e);if(u!==n){const h=this.Ze(t),c=h?this.Xe(h,t,u):1;if(c!==0){this.je(e);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,h;try{u=ee(n).toUint8Array()}catch(c){if(c instanceof Ro)return me("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{h=new us(u,i,o)}catch(c){return me(c instanceof Ke?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return h.Ie===0?null:h}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.Le.tt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const h=this.Je(u);if(h){if(o.current&&Br(h.target)){const c=new M(h.target.path);this.ke.get(c)!==null||this.it(u,c)||this.Ue(u,c,gt.newNoDocument(c,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let n=U();this.qe.forEach((o,u)=>{let h=!0;u.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const i=new Zn(t,e,this.Qe,this.ke,n);return this.ke=xt(),this.qe=Yi(),this.Qe=new X(j),i}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Xi,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ut(j),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Xi),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Yi(){return new X(M.comparator)}function Ji(){return new X(M.comparator)}const Sl={asc:"ASCENDING",desc:"DESCENDING"},Cl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kl={and:"AND",or:"OR"};class Dl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function zr(r,t){return r.useProto3Json||Qn(t)?t:{value:t}}function zn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ho(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Nl(r,t){return zn(r,t.toTimestamp())}function Pt(r){return z(!!r),L.fromTimestamp(function(e){const n=$t(e);return new et(n.seconds,n.nanos)}(r))}function ls(r,t){return Kr(r,t).canonicalString()}function Kr(r,t){const e=function(i){return new H(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Xo(r){const t=H.fromString(r);return z(ea(t)),t}function $r(r,t){return ls(r.databaseId,t.path)}function Nr(r,t){const e=Xo(t);if(e.get(1)!==r.databaseId.projectId)throw new b(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new b(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(Jo(e))}function Yo(r,t){return ls(r.databaseId,t)}function bl(r){const t=Xo(r);return t.length===4?H.emptyPath():Jo(t)}function Gr(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Jo(r){return z(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Zi(r,t,e){return{name:$r(r,t),fields:e.value.mapValue.fields}}function xl(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,_){return d.useProto3Json?(z(_===void 0||typeof _=="string"),lt.fromBase64String(_||"")):(z(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),lt.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,h=u&&function(d){const _=d.code===void 0?V.UNKNOWN:Go(d.code);return new b(_,d.message||"")}(u);e=new Wo(n,i,o,h||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Nr(r,n.document.name),o=Pt(n.document.updateTime),u=n.document.createTime?Pt(n.document.createTime):L.min(),h=new Tt({mapValue:{fields:n.document.fields}}),c=gt.newFoundDocument(i,o,u,h),d=n.targetIds||[],_=n.removedTargetIds||[];e=new On(d,_,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Nr(r,n.document),o=n.readTime?Pt(n.readTime):L.min(),u=gt.newNoDocument(i,o),h=n.removedTargetIds||[];e=new On([],h,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Nr(r,n.document),o=n.removedTargetIds||[];e=new On([],o,i,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new Al(i,o),h=n.targetId;e=new Qo(h,u)}}return e}function Ml(r,t){let e;if(t instanceof rn)e={update:Zi(r,t.key,t.value)};else if(t instanceof os)e={delete:$r(r,t.key)};else if(t instanceof Qt)e={update:Zi(r,t.key,t.data),updateMask:Kl(t.fieldMask)};else{if(!(t instanceof El))return O();e={verify:$r(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const h=u.transform;if(h instanceof Bn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Ze)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof tn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof jn)return{fieldPath:u.field.canonicalString(),increment:h.Pe};throw O()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Nl(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(r,t.precondition)),e}function Ol(r,t){return r&&r.length>0?(z(t!==void 0),r.map(e=>function(i,o){let u=i.updateTime?Pt(i.updateTime):Pt(o);return u.isEqual(L.min())&&(u=Pt(o)),new _l(u,i.transformResults||[])}(e,t))):[]}function Ll(r,t){return{documents:[Yo(r,t.path)]}}function Fl(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Yo(r,i);const o=function(d){if(d.length!==0)return ta(St.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(d){if(d.length!==0)return d.map(_=>function(R){return{field:ce(R.field),direction:Bl(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const h=zr(r,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function Ul(r){let t=bl(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){z(n===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(w){const R=Zo(w);return R instanceof St&&Co(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(R=>function(D){return new qn(fe(D.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(R))}(e.orderBy));let h=null;e.limit&&(h=function(w){let R;return R=typeof w=="object"?w.value:w,Qn(R)?null:R}(e.limit));let c=null;e.startAt&&(c=function(w){const R=!!w.before,S=w.values||[];return new Un(S,R)}(e.startAt));let d=null;return e.endAt&&(d=function(w){const R=!w.before,S=w.values||[];return new Un(S,R)}(e.endAt)),rl(t,i,u,o,h,"F",c,d)}function ql(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Zo(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=fe(e.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=fe(e.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=fe(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=fe(e.unaryFilter.field);return tt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(r):r.fieldFilter!==void 0?function(e){return tt.create(fe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return St.create(e.compositeFilter.filters.map(n=>Zo(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(r):O()}function Bl(r){return Sl[r]}function jl(r){return Cl[r]}function zl(r){return kl[r]}function ce(r){return{fieldPath:r.canonicalString()}}function fe(r){return at.fromServerFormat(r.fieldPath)}function ta(r){return r instanceof tt?function(e){if(e.op==="=="){if(Ui(e.value))return{unaryFilter:{field:ce(e.field),op:"IS_NAN"}};if(Fi(e.value))return{unaryFilter:{field:ce(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ui(e.value))return{unaryFilter:{field:ce(e.field),op:"IS_NOT_NAN"}};if(Fi(e.value))return{unaryFilter:{field:ce(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ce(e.field),op:jl(e.op),value:e.value}}}(r):r instanceof St?function(e){const n=e.getFilters().map(i=>ta(i));return n.length===1?n[0]:{compositeFilter:{op:zl(e.op),filters:n}}}(r):O()}function Kl(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ea(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class qt{constructor(t,e,n,i,o=L.min(),u=L.min(),h=lt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=c}withSequenceNumber(t){return new qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class $l{constructor(t){this.ct=t}}function Gl(r){const t=Ul({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?jr(t,t.limit,"L"):t}/**
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
 */class Ql{constructor(){this.un=new Wl}addToCollectionParentIndex(t,e){return this.un.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Kt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Kt.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Wl{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ut(H.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ut(H.comparator)).toArray()}}/**
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
 */class ye{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ye(0)}static kn(){return new ye(-1)}}/**
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
 */class Hl{constructor(){this.changes=new Ie(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Xl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Yl{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&We(n.mutation,i,vt.empty(),et.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,U()).next(()=>n))}getLocalViewOfDocuments(t,e,n=U()){const i=Jt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=ze();return o.forEach((h,c)=>{u=u.insert(h,c.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=Jt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,U()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,h)=>{e.set(u,h)})})}computeViews(t,e,n,i){let o=xt();const u=Qe(),h=function(){return Qe()}();return e.forEach((c,d)=>{const _=n.get(d.key);i.has(d.key)&&(_===void 0||_.mutation instanceof Qt)?o=o.insert(d.key,d):_!==void 0?(u.set(d.key,_.mutation.getFieldMask()),We(_.mutation,d,_.mutation.getFieldMask(),et.now())):u.set(d.key,vt.empty())}),this.recalculateAndSaveOverlays(t,o).next(c=>(c.forEach((d,_)=>u.set(d,_)),e.forEach((d,_)=>{var w;return h.set(d,new Xl(_,(w=u.get(d))!==null&&w!==void 0?w:null))}),h))}recalculateAndSaveOverlays(t,e){const n=Qe();let i=new X((u,h)=>u-h),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const h of u)h.keys().forEach(c=>{const d=e.get(c);if(d===null)return;let _=n.get(c)||vt.empty();_=h.applyToLocalView(d,_),n.set(c,_);const w=(i.get(h.batchId)||U()).add(c);i=i.insert(h.batchId,w)})}).next(()=>{const u=[],h=i.getReverseIterator();for(;h.hasNext();){const c=h.getNext(),d=c.key,_=c.value,w=Fo();_.forEach(R=>{if(!o.has(R)){const S=Ko(e.get(R),n.get(R));S!==null&&w.set(R,S),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,d,w))}return P.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):sl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):P.resolve(Jt());let h=-1,c=o;return u.next(d=>P.forEach(d,(_,w)=>(h<w.largestBatchId&&(h=w.largestBatchId),o.get(_)?P.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{c=c.insert(_,R)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,c,d,U())).next(_=>({batchId:h,changes:Lo(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let i=ze();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=ze();return this.indexManager.getCollectionParents(t,o).next(h=>P.forEach(h,c=>{const d=function(w,R){return new Wn(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,c.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(_=>{_.forEach((w,R)=>{u=u.insert(w,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((c,d)=>{const _=d.getKey();u.get(_)===null&&(u=u.insert(_,gt.newInvalidDocument(_)))});let h=ze();return u.forEach((c,d)=>{const _=o.get(c);_!==void 0&&We(_.mutation,d,vt.empty(),et.now()),Xn(e,d)&&(h=h.insert(c,d))}),h})}}/**
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
 */class Jl{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return P.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Pt(i.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:Gl(i.bundledQuery),readTime:Pt(i.readTime)}}(e)),P.resolve()}}/**
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
 */class Zl{constructor(){this.overlays=new X(M.comparator),this.Ir=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Jt();return P.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const i=Jt(),o=e.length+1,u=new M(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const c=h.getNext().value,d=c.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&c.largestBatchId>n&&i.set(c.getKey(),c)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new X((d,_)=>d-_);const u=this.overlays.getIterator();for(;u.hasNext();){const d=u.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let _=o.get(d.largestBatchId);_===null&&(_=Jt(),o=o.insert(d.largestBatchId,_)),_.set(d.getKey(),d)}}const h=Jt(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,_)=>h.set(d,_)),!(h.size()>=i)););return P.resolve(h)}ht(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Il(e,n));let o=this.Ir.get(e);o===void 0&&(o=U(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class th{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class hs{constructor(){this.Tr=new ut(rt.Er),this.dr=new ut(rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new rt(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new rt(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new M(new H([])),n=new rt(e,t),i=new rt(e,t+1),o=[];return this.dr.forEachInRange([n,i],u=>{this.Vr(u),o.push(u.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new M(new H([])),n=new rt(e,t),i=new rt(e,t+1);let o=U();return this.dr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new rt(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class rt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return M.comparator(t.key,e.key)||j(t.wr,e.wr)}static Ar(t,e){return j(t.wr,e.wr)||M.comparator(t.key,e.key)}}/**
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
 */class eh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ut(rt.Er)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new vl(o,e,n,i);this.mutationQueue.push(u);for(const h of i)this.br=this.br.add(new rt(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return P.resolve(u)}lookupMutationBatch(t,e){return P.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.vr(n),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rt(e,0),i=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,i],u=>{const h=this.Dr(u.wr);o.push(h)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ut(j);return e.forEach(i=>{const o=new rt(i,0),u=new rt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],h=>{n=n.add(h.wr)})}),P.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const u=new rt(new M(o),0);let h=new ut(j);return this.br.forEachWhile(c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(h=h.add(c.wr)),!0)},u),P.resolve(this.Cr(h))}Cr(t){const e=[];return t.forEach(n=>{const i=this.Dr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){z(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return P.forEach(e.mutations,i=>{const o=new rt(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new rt(e,0),i=this.br.firstAfterOrEqual(n);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class nh{constructor(t){this.Mr=t,this.docs=function(){return new X(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let n=xt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():gt.newInvalidDocument(i))}),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=xt();const u=e.path,h=new M(u.child("")),c=this.docs.getIteratorFrom(h);for(;c.hasNext();){const{key:d,value:{document:_}}=c.getNext();if(!u.isPrefixOf(d.path))break;d.path.length>u.length+1||Fu(Lu(_),n)<=0||(i.has(_.key)||Xn(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,i){O()}Or(t,e){return P.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new rh(this)}getSize(t){return P.resolve(this.size)}}class rh extends Hl{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(n)}),P.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class sh{constructor(t){this.persistence=t,this.Nr=new Ie(e=>rs(e),ss),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hs,this.targetCount=0,this.kr=ye.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,i)=>e(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),P.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new ye(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Kn(e),P.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Nr.forEach((u,h)=>{h.sequenceNumber<=e&&n.get(h.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.Br.containsKey(e))}}/**
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
 */class ih{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Zr(0),this.Kr=!1,this.Kr=!0,this.$r=new th,this.referenceDelegate=t(this),this.Ur=new sh(this),this.indexManager=new Ql,this.remoteDocumentCache=function(i){return new nh(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new $l(e),this.Gr=new Jl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Zl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new eh(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const i=new oh(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return P.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class oh extends qu{constructor(t){super(),this.currentSequenceNumber=t}}class cs{constructor(t){this.persistence=t,this.Jr=new hs,this.Yr=null}static Zr(t){return new cs(t)}get Xr(){if(this.Yr)return this.Yr;throw O()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),P.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,n=>{const i=M.fromPath(n);return this.ei(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return P.or([()=>P.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class fs{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=i}static Wi(t,e){let n=U(),i=U();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new fs(t,e.fromCache,n,i)}}/**
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
 */class ah{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class uh{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Iu()?8:Bu(Au())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.Yi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Zi(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new ah;return this.Xi(t,e,u).next(h=>{if(o.result=h,this.zi)return this.es(t,e,u,h.size)})}).next(()=>o.result)}es(t,e,n,i){return n.documentReadCount<this.ji?(Be()<=Ut.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",he(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(Be()<=Ut.DEBUG&&N("QueryEngine","Query:",he(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(Be()<=Ut.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",he(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Rt(e))):P.resolve())}Yi(t,e){if(zi(e))return P.resolve(null);let n=Rt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=jr(e,null,"F"),n=Rt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=U(...o);return this.Ji.getDocuments(t,u).next(h=>this.indexManager.getMinOffset(t,n).next(c=>{const d=this.ts(e,h);return this.ns(e,d,u,c.readTime)?this.Yi(t,jr(e,null,"F")):this.rs(t,d,e,c)}))})))}Zi(t,e,n,i){return zi(e)||i.isEqual(L.min())?P.resolve(null):this.Ji.getDocuments(t,n).next(o=>{const u=this.ts(e,o);return this.ns(e,u,n,i)?P.resolve(null):(Be()<=Ut.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),he(e)),this.rs(t,u,e,Ou(i,-1)).next(h=>h))})}ts(t,e){let n=new ut(Mo(t));return e.forEach((i,o)=>{Xn(t,o)&&(n=n.add(o))}),n}ns(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,n){return Be()<=Ut.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",he(e)),this.Ji.getDocumentsMatchingQuery(t,e,Kt.min(),n)}rs(t,e,n,i){return this.Ji.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */class lh{constructor(t,e,n,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new X(j),this._s=new Ie(o=>rs(o),ss),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Yl(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function hh(r,t,e,n){return new lh(r,t,e,n)}async function na(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],h=[];let c=U();for(const d of i){u.push(d.batchId);for(const _ of d.mutations)c=c.add(_.key)}for(const d of o){h.push(d.batchId);for(const _ of d.mutations)c=c.add(_.key)}return e.localDocuments.getDocuments(n,c).next(d=>({hs:d,removedBatchIds:u,addedBatchIds:h}))})})}function ch(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(h,c,d,_){const w=d.batch,R=w.keys();let S=P.resolve();return R.forEach(D=>{S=S.next(()=>_.getEntry(c,D)).next(x=>{const k=d.docVersions.get(D);z(k!==null),x.version.compareTo(k)<0&&(w.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),_.addEntry(x)))})}),S.next(()=>h.mutationQueue.removeMutationBatch(c,w))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(h){let c=U();for(let d=0;d<h.mutationResults.length;++d)h.mutationResults[d].transformResults.length>0&&(c=c.add(h.batch.mutations[d].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function ra(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function fh(r,t){const e=F(r),n=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const h=[];t.targetChanges.forEach((_,w)=>{const R=i.get(w);if(!R)return;h.push(e.Ur.removeMatchingKeys(o,_.removedDocuments,w).next(()=>e.Ur.addMatchingKeys(o,_.addedDocuments,w)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?S=S.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,n)),i=i.insert(w,S),function(x,k,K){return x.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(R,S,_)&&h.push(e.Ur.updateTargetData(o,S))});let c=xt(),d=U();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),h.push(dh(o,u,t.documentUpdates).next(_=>{c=_.Ps,d=_.Is})),!n.isEqual(L.min())){const _=e.Ur.getLastRemoteSnapshotVersion(o).next(w=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));h.push(_)}return P.waitFor(h).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,c,d)).next(()=>c)}).then(o=>(e.os=i,o))}function dh(r,t,e){let n=U(),i=U();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=xt();return e.forEach((h,c)=>{const d=o.get(h);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(h)),c.isNoDocument()&&c.version.isEqual(L.min())?(t.removeEntry(h,c.readTime),u=u.insert(h,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(c),u=u.insert(h,c)):N("LocalStore","Ignoring outdated watch update for ",h,". Current version:",d.version," Watch version:",c.version)}),{Ps:u,Is:i}})}function mh(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function ph(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Ur.getTargetData(n,t).next(o=>o?(i=o,P.resolve(i)):e.Ur.allocateTargetId(n).next(u=>(i=new qt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function Qr(r,t,e){const n=F(r),i=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!nn(u))throw u;N("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.os=n.os.remove(t),n._s.delete(i.target)}function to(r,t,e){const n=F(r);let i=L.min(),o=U();return n.persistence.runTransaction("Execute query","readwrite",u=>function(c,d,_){const w=F(c),R=w._s.get(_);return R!==void 0?P.resolve(w.os.get(R)):w.Ur.getTargetData(d,_)}(n,u,Rt(t)).next(h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(u,h.targetId).next(c=>{o=c})}).next(()=>n.ss.getDocumentsMatchingQuery(u,t,e?i:L.min(),e?o:U())).next(h=>(gh(n,ol(t),h),{documents:h,Ts:o})))}function gh(r,t,e){let n=r.us.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.us.set(t,n)}class eo{constructor(){this.activeTargetIds=fl()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _h{constructor(){this.so=new eo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new eo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class yh{_o(t){}shutdown(){}}/**
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
 */class no{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Dn=null;function br(){return Dn===null?Dn=function(){return 268435456+Math.round(2147483648*Math.random())}():Dn++,"0x"+Dn.toString(16)}/**
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
 */const Th={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Eh{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const mt="WebChannelConnection";class vh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,n,i,o,u){const h=br(),c=this.xo(e,n.toUriEncodedString());N("RestConnection",`Sending RPC '${e}' ${h}:`,c,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,u),this.No(e,c,d,i).then(_=>(N("RestConnection",`Received RPC '${e}' ${h}: `,_),_),_=>{throw me("RestConnection",`RPC '${e}' ${h} failed with error: `,_,"url: ",c,"request:",i),_})}Lo(e,n,i,o,u,h){return this.Mo(e,n,i,o,u)}Oo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ve}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),i&&i.headers.forEach((o,u)=>e[u]=o)}xo(e,n){const i=Th[e];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,i){const o=br();return new Promise((u,h)=>{const c=new _o;c.setWithCredentials(!0),c.listenOnce(yo.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case bn.NO_ERROR:const _=c.getResponseJson();N(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case bn.TIMEOUT:N(mt,`RPC '${t}' ${o} timed out`),h(new b(V.DEADLINE_EXCEEDED,"Request time out"));break;case bn.HTTP_ERROR:const w=c.getStatus();if(N(mt,`RPC '${t}' ${o} failed with status:`,w,"response text:",c.getResponseText()),w>0){let R=c.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const D=function(k){const K=k.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(K)>=0?K:V.UNKNOWN}(S.status);h(new b(D,S.message))}else h(new b(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else h(new b(V.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{N(mt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);N(mt,`RPC '${t}' ${o} sending request:`,i),c.send(e,"POST",d,n,15)})}Bo(t,e,n){const i=br(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=vo(),h=Eo(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const _=o.join("");N(mt,`Creating RPC '${t}' stream ${i}: ${_}`,c);const w=u.createWebChannel(_,c);let R=!1,S=!1;const D=new Eh({Io:k=>{S?N(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(R||(N(mt,`Opening RPC '${t}' stream ${i} transport.`),w.open(),R=!0),N(mt,`RPC '${t}' stream ${i} sending:`,k),w.send(k))},To:()=>w.close()}),x=(k,K,$)=>{k.listen(K,Q=>{try{$(Q)}catch(nt){setTimeout(()=>{throw nt},0)}})};return x(w,je.EventType.OPEN,()=>{S||(N(mt,`RPC '${t}' stream ${i} transport opened.`),D.yo())}),x(w,je.EventType.CLOSE,()=>{S||(S=!0,N(mt,`RPC '${t}' stream ${i} transport closed`),D.So())}),x(w,je.EventType.ERROR,k=>{S||(S=!0,me(mt,`RPC '${t}' stream ${i} transport errored:`,k),D.So(new b(V.UNAVAILABLE,"The operation could not be completed")))}),x(w,je.EventType.MESSAGE,k=>{var K;if(!S){const $=k.data[0];z(!!$);const Q=$,nt=Q.error||((K=Q[0])===null||K===void 0?void 0:K.error);if(nt){N(mt,`RPC '${t}' stream ${i} received error:`,nt);const Ct=nt.status;let st=function(g){const y=Z[g];if(y!==void 0)return Go(y)}(Ct),E=nt.message;st===void 0&&(st=V.INTERNAL,E="Unknown error status: "+Ct+" with message "+nt.message),S=!0,D.So(new b(st,E)),w.close()}else N(mt,`RPC '${t}' stream ${i} received:`,$),D.bo($)}}),x(h,To.STAT_EVENT,k=>{k.stat===Lr.PROXY?N(mt,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===Lr.NOPROXY&&N(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}function xr(){return typeof document<"u"?document:null}/**
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
 */function tr(r){return new Dl(r,!0)}/**
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
 */class sa{constructor(t,e,n=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-n);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ia{constructor(t,e,n,i,o,u,h,c){this.ui=t,this.Ho=n,this.Jo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new sa(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(bt(e.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===e&&this.P_(n,i)},n=>{t(()=>{const i=new b(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return N("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ih extends ia{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=xl(this.serializer,t),n=function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?Pt(u.readTime):L.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Gr(this.serializer),e.addTarget=function(o,u){let h;const c=u.target;if(h=Br(c)?{documents:Ll(o,c)}:{query:Fl(o,c)._t},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=Ho(o,u.resumeToken);const d=zr(o,u.expectedCount);d!==null&&(h.expectedCount=d)}else if(u.snapshotVersion.compareTo(L.min())>0){h.readTime=zn(o,u.snapshotVersion.toTimestamp());const d=zr(o,u.expectedCount);d!==null&&(h.expectedCount=d)}return h}(this.serializer,t);const n=ql(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Gr(this.serializer),e.removeTarget=t,this.a_(e)}}class Ah extends ia{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return z(!!t.streamToken),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Ol(t.writeResults,t.commitTime),n=Pt(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Gr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Ml(this.serializer,n))};this.a_(e)}}/**
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
 */class wh extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new b(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Mo(t,Kr(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(V.UNKNOWN,o.toString())})}Lo(t,e,n,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Lo(t,Kr(e,n),i,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new b(V.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Rh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(bt(e),this.D_=!1):N("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Ph{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(u=>{n.enqueueAndForget(async()=>{ie(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=F(c);d.L_.add(4),await on(d),d.q_.set("Unknown"),d.L_.delete(4),await er(d)}(this))})}),this.q_=new Rh(n,i)}}async function er(r){if(ie(r))for(const t of r.B_)await t(!0)}async function on(r){for(const t of r.B_)await t(!1)}function oa(r,t){const e=F(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),gs(e)?ps(e):Ae(e).r_()&&ms(e,t))}function ds(r,t){const e=F(r),n=Ae(e);e.N_.delete(t),n.r_()&&aa(e,t),e.N_.size===0&&(n.r_()?n.o_():ie(e)&&e.q_.set("Unknown"))}function ms(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ae(r).A_(t)}function aa(r,t){r.Q_.xe(t),Ae(r).R_(t)}function ps(r){r.Q_=new Vl({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),Ae(r).start(),r.q_.v_()}function gs(r){return ie(r)&&!Ae(r).n_()&&r.N_.size>0}function ie(r){return F(r).L_.size===0}function ua(r){r.Q_=void 0}async function Vh(r){r.q_.set("Online")}async function Sh(r){r.N_.forEach((t,e)=>{ms(r,t)})}async function Ch(r,t){ua(r),gs(r)?(r.q_.M_(t),ps(r)):r.q_.set("Unknown")}async function kh(r,t,e){if(r.q_.set("Online"),t instanceof Wo&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const h of o.targetIds)i.N_.has(h)&&(await i.remoteSyncer.rejectListen(h,u),i.N_.delete(h),i.Q_.removeTarget(h))}(r,t)}catch(n){N("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Kn(r,n)}else if(t instanceof On?r.Q_.Ke(t):t instanceof Qo?r.Q_.He(t):r.Q_.We(t),!e.isEqual(L.min()))try{const n=await ra(r.localStore);e.compareTo(n)>=0&&await function(o,u){const h=o.Q_.rt(u);return h.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const _=o.N_.get(d);_&&o.N_.set(d,_.withResumeToken(c.resumeToken,u))}}),h.targetMismatches.forEach((c,d)=>{const _=o.N_.get(c);if(!_)return;o.N_.set(c,_.withResumeToken(lt.EMPTY_BYTE_STRING,_.snapshotVersion)),aa(o,c);const w=new qt(_.target,c,d,_.sequenceNumber);ms(o,w)}),o.remoteSyncer.applyRemoteEvent(h)}(r,e)}catch(n){N("RemoteStore","Failed to raise snapshot:",n),await Kn(r,n)}}async function Kn(r,t,e){if(!nn(t))throw t;r.L_.add(1),await on(r),r.q_.set("Offline"),e||(e=()=>ra(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await er(r)})}function la(r,t){return t().catch(e=>Kn(r,e,t))}async function nr(r){const t=F(r),e=Gt(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Dh(t);)try{const i=await mh(t.localStore,n);if(i===null){t.O_.length===0&&e.o_();break}n=i.batchId,Nh(t,i)}catch(i){await Kn(t,i)}ha(t)&&ca(t)}function Dh(r){return ie(r)&&r.O_.length<10}function Nh(r,t){r.O_.push(t);const e=Gt(r);e.r_()&&e.V_&&e.m_(t.mutations)}function ha(r){return ie(r)&&!Gt(r).n_()&&r.O_.length>0}function ca(r){Gt(r).start()}async function bh(r){Gt(r).p_()}async function xh(r){const t=Gt(r);for(const e of r.O_)t.m_(e.mutations)}async function Mh(r,t,e){const n=r.O_.shift(),i=as.from(n,t,e);await la(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await nr(r)}async function Oh(r,t){t&&Gt(r).V_&&await async function(n,i){if(function(u){return wl(u)&&u!==V.ABORTED}(i.code)){const o=n.O_.shift();Gt(n).s_(),await la(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await nr(n)}}(r,t),ha(r)&&ca(r)}async function ro(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const n=ie(e);e.L_.add(3),await on(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await er(e)}async function Lh(r,t){const e=F(r);t?(e.L_.delete(2),await er(e)):t||(e.L_.add(2),await on(e),e.q_.set("Unknown"))}function Ae(r){return r.K_||(r.K_=function(e,n,i){const o=F(e);return o.w_(),new Ih(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Eo:Vh.bind(null,r),Ro:Sh.bind(null,r),mo:Ch.bind(null,r),d_:kh.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),gs(r)?ps(r):r.q_.set("Unknown")):(await r.K_.stop(),ua(r))})),r.K_}function Gt(r){return r.U_||(r.U_=function(e,n,i){const o=F(e);return o.w_(),new Ah(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:bh.bind(null,r),mo:Oh.bind(null,r),f_:xh.bind(null,r),g_:Mh.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await nr(r)):(await r.U_.stop(),r.O_.length>0&&(N("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class _s{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,h=new _s(t,e,u,i,o);return h.start(n),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ys(r,t){if(bt("AsyncQueue",`${t}: ${r}`),nn(r))return new b(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class de{constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=ze(),this.sortedSet=new X(this.comparator)}static emptySet(t){return new de(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof de)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new de;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class so{constructor(){this.W_=new X(M.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):O():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Te{constructor(t,e,n,i,o,u,h,c,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(h=>{u.push({type:0,doc:h})}),new Te(t,e,de.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class Fh{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Uh{constructor(){this.queries=io(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const i=F(e),o=i.queries;i.queries=io(),o.forEach((u,h)=>{for(const c of h.j_)c.onError(n)})})(this,new b(V.ABORTED,"Firestore shutting down"))}}function io(){return new Ie(r=>xo(r),Hn)}async function qh(r,t){const e=F(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(n=2):(o=new Fh,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const h=ys(u,`Initialization of query '${he(t.query)}' failed`);return void t.onError(h)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Ts(e)}async function Bh(r,t){const e=F(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.j_.indexOf(t);u>=0&&(o.j_.splice(u,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function jh(r,t){const e=F(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const h of u.j_)h.X_(i)&&(n=!0);u.z_=i}}n&&Ts(e)}function zh(r,t,e){const n=F(r),i=n.queries.get(t);if(i)for(const o of i.j_)o.onError(e);n.queries.delete(t)}function Ts(r){r.Y_.forEach(t=>{t.next()})}var Wr,oo;(oo=Wr||(Wr={})).ea="default",oo.Cache="cache";class Kh{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Te(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Te.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Wr.Cache}}/**
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
 */class fa{constructor(t){this.key=t}}class da{constructor(t){this.key=t}}class $h{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=U(),this.mutatedKeys=U(),this.Aa=Mo(t),this.Ra=new de(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new so,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,h=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,w)=>{const R=i.get(_),S=Xn(this.query,w)?w:null,D=!!R&&this.mutatedKeys.has(R.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;R&&S?R.data.isEqual(S.data)?D!==x&&(n.track({type:3,doc:S}),k=!0):this.ga(R,S)||(n.track({type:2,doc:S}),k=!0,(c&&this.Aa(S,c)>0||d&&this.Aa(S,d)<0)&&(h=!0)):!R&&S?(n.track({type:0,doc:S}),k=!0):R&&!S&&(n.track({type:1,doc:R}),k=!0,(c||d)&&(h=!0)),k&&(S?(u=u.add(S),o=x?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{Ra:u,fa:n,ns:h,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const u=t.fa.G_();u.sort((_,w)=>function(S,D){const x=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return x(S)-x(D)}(_.type,w.type)||this.Aa(_.doc,w.doc)),this.pa(n),i=i!=null&&i;const h=e&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,d=c!==this.Ea;return this.Ea=c,u.length!==0||d?{snapshot:new Te(this.query,t.Ra,o,u,t.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:h}:{wa:h}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new so,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=U(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new da(n))}),this.da.forEach(n=>{t.has(n)||e.push(new fa(n))}),e}ba(t){this.Ta=t.Ts,this.da=U();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Te.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Gh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Qh{constructor(t){this.key=t,this.va=!1}}class Wh{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new Ie(h=>xo(h),Hn),this.Ma=new Map,this.xa=new Set,this.Oa=new X(M.comparator),this.Na=new Map,this.La=new hs,this.Ba={},this.ka=new Map,this.qa=ye.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Hh(r,t,e=!0){const n=Ta(r);let i;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await ma(n,t,e,!0),i}async function Xh(r,t){const e=Ta(r);await ma(e,t,!0,!1)}async function ma(r,t,e,n){const i=await ph(r.localStore,Rt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let h;return n&&(h=await Yh(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&oa(r.remoteStore,i),h}async function Yh(r,t,e,n,i){r.Ka=(w,R,S)=>async function(x,k,K,$){let Q=k.view.ma(K);Q.ns&&(Q=await to(x.localStore,k.query,!1).then(({documents:E})=>k.view.ma(E,Q)));const nt=$&&$.targetChanges.get(k.targetId),Ct=$&&$.targetMismatches.get(k.targetId)!=null,st=k.view.applyChanges(Q,x.isPrimaryClient,nt,Ct);return uo(x,k.targetId,st.wa),st.snapshot}(r,w,R,S);const o=await to(r.localStore,t,!0),u=new $h(t,o.Ts),h=u.ma(o.documents),c=sn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=u.applyChanges(h,r.isPrimaryClient,c);uo(r,e,d.wa);const _=new Gh(t,e,u);return r.Fa.set(t,_),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),d.snapshot}async function Jh(r,t,e){const n=F(r),i=n.Fa.get(t),o=n.Ma.get(i.targetId);if(o.length>1)return n.Ma.set(i.targetId,o.filter(u=>!Hn(u,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Qr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&ds(n.remoteStore,i.targetId),Hr(n,i.targetId)}).catch(en)):(Hr(n,i.targetId),await Qr(n.localStore,i.targetId,!0))}async function Zh(r,t){const e=F(r),n=e.Fa.get(t),i=e.Ma.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ds(e.remoteStore,n.targetId))}async function tc(r,t,e){const n=ac(r);try{const i=await function(u,h){const c=F(u),d=et.now(),_=h.reduce((S,D)=>S.add(D.key),U());let w,R;return c.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=xt(),x=U();return c.cs.getEntries(S,_).next(k=>{D=k,D.forEach((K,$)=>{$.isValidDocument()||(x=x.add(K))})}).next(()=>c.localDocuments.getOverlayedDocuments(S,D)).next(k=>{w=k;const K=[];for(const $ of h){const Q=Tl($,w.get($.key).overlayedDocument);Q!=null&&K.push(new Qt($.key,Q,Po(Q.value.mapValue),wt.exists(!0)))}return c.mutationQueue.addMutationBatch(S,d,K,h)}).next(k=>{R=k;const K=k.applyToLocalDocumentSet(w,x);return c.documentOverlayCache.saveOverlays(S,k.batchId,K)})}).then(()=>({batchId:R.batchId,changes:Lo(w)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,h,c){let d=u.Ba[u.currentUser.toKey()];d||(d=new X(j)),d=d.insert(h,c),u.Ba[u.currentUser.toKey()]=d}(n,i.batchId,e),await an(n,i.changes),await nr(n.remoteStore)}catch(i){const o=ys(i,"Failed to persist write");e.reject(o)}}async function pa(r,t){const e=F(r);try{const n=await fh(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Na.get(o);u&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.va=!0:i.modifiedDocuments.size>0?z(u.va):i.removedDocuments.size>0&&(z(u.va),u.va=!1))}),await an(e,n,t)}catch(n){await en(n)}}function ao(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Fa.forEach((o,u)=>{const h=u.view.Z_(t);h.snapshot&&i.push(h.snapshot)}),function(u,h){const c=F(u);c.onlineState=h;let d=!1;c.queries.forEach((_,w)=>{for(const R of w.j_)R.Z_(h)&&(d=!0)}),d&&Ts(c)}(n.eventManager,t),i.length&&n.Ca.d_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function ec(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Na.get(t),o=i&&i.key;if(o){let u=new X(M.comparator);u=u.insert(o,gt.newNoDocument(o,L.min()));const h=U().add(o),c=new Zn(L.min(),new Map,new X(j),u,h);await pa(n,c),n.Oa=n.Oa.remove(o),n.Na.delete(t),Es(n)}else await Qr(n.localStore,t,!1).then(()=>Hr(n,t,e)).catch(en)}async function nc(r,t){const e=F(r),n=t.batch.batchId;try{const i=await ch(e.localStore,t);_a(e,n,null),ga(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await an(e,i)}catch(i){await en(i)}}async function rc(r,t,e){const n=F(r);try{const i=await function(u,h){const c=F(u);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let _;return c.mutationQueue.lookupMutationBatch(d,h).next(w=>(z(w!==null),_=w.keys(),c.mutationQueue.removeMutationBatch(d,w))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,_,h)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,_)).next(()=>c.localDocuments.getDocuments(d,_))})}(n.localStore,t);_a(n,t,e),ga(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await an(n,i)}catch(i){await en(i)}}function ga(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function _a(r,t,e){const n=F(r);let i=n.Ba[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Ba[n.currentUser.toKey()]=i}}function Hr(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||ya(r,n)})}function ya(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(ds(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),Es(r))}function uo(r,t,e){for(const n of e)n instanceof fa?(r.La.addReference(n.key,t),sc(r,n)):n instanceof da?(N("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||ya(r,n.key)):O()}function sc(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(N("SyncEngine","New document in limbo: "+e),r.xa.add(n),Es(r))}function Es(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new M(H.fromString(t)),n=r.qa.next();r.Na.set(n,new Qh(e)),r.Oa=r.Oa.insert(e,n),oa(r.remoteStore,new qt(Rt(bo(e.path)),n,"TargetPurposeLimboResolution",Zr.oe))}}async function an(r,t,e){const n=F(r),i=[],o=[],u=[];n.Fa.isEmpty()||(n.Fa.forEach((h,c)=>{u.push(n.Ka(c,t,e).then(d=>{var _;if((d||e)&&n.isPrimaryClient){const w=d?!d.fromCache:(_=e==null?void 0:e.targetChanges.get(c.targetId))===null||_===void 0?void 0:_.current;n.sharedClientState.updateQueryState(c.targetId,w?"current":"not-current")}if(d){i.push(d);const w=fs.Wi(c.targetId,d);o.push(w)}}))}),await Promise.all(u),n.Ca.d_(i),await async function(c,d){const _=F(c);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>P.forEach(d,R=>P.forEach(R.$i,S=>_.persistence.referenceDelegate.addReference(w,R.targetId,S)).next(()=>P.forEach(R.Ui,S=>_.persistence.referenceDelegate.removeReference(w,R.targetId,S)))))}catch(w){if(!nn(w))throw w;N("LocalStore","Failed to update sequence numbers: "+w)}for(const w of d){const R=w.targetId;if(!w.fromCache){const S=_.os.get(R),D=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(D);_.os=_.os.insert(R,x)}}}(n.localStore,o))}async function ic(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());const n=await na(e.localStore,t);e.currentUser=t,function(o,u){o.ka.forEach(h=>{h.forEach(c=>{c.reject(new b(V.CANCELLED,u))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await an(e,n.hs)}}function oc(r,t){const e=F(r),n=e.Na.get(t);if(n&&n.va)return U().add(n.key);{let i=U();const o=e.Ma.get(t);if(!o)return i;for(const u of o){const h=e.Fa.get(u);i=i.unionWith(h.view.Va)}return i}}function Ta(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=pa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=oc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ec.bind(null,t),t.Ca.d_=jh.bind(null,t.eventManager),t.Ca.$a=zh.bind(null,t.eventManager),t}function ac(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=nc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=rc.bind(null,t),t}class $n{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=tr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return hh(this.persistence,new uh,t.initialUser,this.serializer)}Ga(t){return new ih(cs.Zr,this.serializer)}Wa(t){return new _h}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$n.provider={build:()=>new $n};class Xr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ao(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=ic.bind(null,this.syncEngine),await Lh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Uh}()}createDatastore(t){const e=tr(t.databaseInfo.databaseId),n=function(o){return new vh(o)}(t.databaseInfo);return function(o,u,h,c){return new wh(o,u,h,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,h){return new Ph(n,i,o,u,h)}(this.localStore,this.datastore,t.asyncQueue,e=>ao(this.syncEngine,e,0),function(){return no.D()?new no:new yh}())}createSyncEngine(t,e){return function(i,o,u,h,c,d,_){const w=new Wh(i,o,u,h,c,d);return _&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);N("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await on(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Xr.provider={build:()=>new Xr};/**
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
 */class uc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):bt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class lc{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=Ao.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{N("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(N("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ys(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Mr(r,t){r.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await na(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function lo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await hc(r);N("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>ro(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>ro(t.remoteStore,i)),r._onlineComponents=t}async function hc(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;me("Error using user provided cache. Falling back to memory cache: "+e),await Mr(r,new $n)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Mr(r,new $n);return r._offlineComponents}async function Ea(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await lo(r,r._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await lo(r,new Xr))),r._onlineComponents}function cc(r){return Ea(r).then(t=>t.syncEngine)}async function fc(r){const t=await Ea(r),e=t.eventManager;return e.onListen=Hh.bind(null,t.syncEngine),e.onUnlisten=Jh.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Xh.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Zh.bind(null,t.syncEngine),e}function dc(r,t,e={}){const n=new Bt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,h,c,d){const _=new uc({next:R=>{_.Za(),u.enqueueAndForget(()=>Bh(o,w)),R.fromCache&&c.source==="server"?d.reject(new b(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(R)},error:R=>d.reject(R)}),w=new Kh(h,_,{includeMetadataChanges:!0,_a:!0});return qh(o,w)}(await fc(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function va(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const ho=new Map;/**
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
 */function Ia(r,t,e){if(!e)throw new b(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function mc(r,t,e,n){if(t===!0&&n===!0)throw new b(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function co(r){if(!M.isDocumentKey(r))throw new b(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function fo(r){if(M.isDocumentKey(r))throw new b(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function vs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O()}function re(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new b(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=vs(r);throw new b(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */class mo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}mc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=va((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new b(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new b(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new b(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class rr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new b(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Vu;switch(n.type){case"firstParty":return new Du(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ho.get(e);n&&(N("ComponentProvider","Removing Datastore"),ho.delete(e),n.terminate())}(this),Promise.resolve()}}function pc(r,t,e,n={}){var i;const o=(r=re(r,rr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&me("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let h,c;if(typeof n.mockUserToken=="string")h=n.mockUserToken,c=pt.MOCK_USER;else{h=Eu(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new b(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new pt(d)}r._authCredentials=new Su(new Io(h,c))}}/**
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
 */class sr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new sr(this.firestore,t,this._query)}}class It{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class jt extends sr{constructor(t,e,n){super(t,e,bo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new M(t))}withConverter(t){return new jt(this.firestore,t,this._path)}}function Fc(r,t,...e){if(r=zt(r),Ia("collection","path",t),r instanceof rr){const n=H.fromString(t,...e);return fo(n),new jt(r,null,n)}{if(!(r instanceof It||r instanceof jt))throw new b(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return fo(n),new jt(r.firestore,null,n)}}function gc(r,t,...e){if(r=zt(r),arguments.length===1&&(t=Ao.newId()),Ia("doc","path",t),r instanceof rr){const n=H.fromString(t,...e);return co(n),new It(r,null,new M(n))}{if(!(r instanceof It||r instanceof jt))throw new b(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return co(n),new It(r.firestore,r instanceof jt?r.converter:null,new M(n))}}/**
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
 */class po{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new sa(this,"async_queue_retry"),this.Vu=()=>{const n=xr();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=xr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=xr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Bt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!nn(t))throw t;N("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const i=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(n);throw bt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=_s.createAndSchedule(this,t,e,n,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&O()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class un extends rr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new po,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new po(t),this._firestoreClient=void 0,await t}}}function Uc(r,t){const e=typeof r=="object"?r:_u(),n=typeof r=="string"?r:"(default)",i=yu(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Tu("firestore");o&&pc(i,...o)}return i}function Aa(r){if(r._terminated)throw new b(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||_c(r),r._firestoreClient}function _c(r){var t,e,n;const i=r._freezeSettings(),o=function(h,c,d,_){return new Ku(h,c,d,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,va(_.experimentalLongPollingOptions),_.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new lc(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(h){const c=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(c),_online:c}}(r._componentsProvider))}/**
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
 */class Ee{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ee(lt.fromBase64String(t))}catch(e){throw new b(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ee(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ir{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new b(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Is{constructor(t){this._methodName=t}}/**
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
 */class As{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ws{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const yc=/^__.*__$/;class Tc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Qt(t,this.data,this.fieldMask,e,this.fieldTransforms):new rn(t,this.data,e,this.fieldTransforms)}}class wa{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Qt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ra(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Rs{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Rs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.Ou(t),i}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Gn(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Ra(this.Cu)&&yc.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Ec{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||tr(t)}Qu(t,e,n,i=!1){return new Rs({Cu:t,methodName:e,qu:n,path:at.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pa(r){const t=r._freezeSettings(),e=tr(r._databaseId);return new Ec(r._databaseId,!!t.ignoreUndefinedProperties,e)}function vc(r,t,e,n,i,o={}){const u=r.Qu(o.merge||o.mergeFields?2:0,t,e,i);Ps("Data must be an object, but it was:",u,n);const h=Va(n,u);let c,d;if(o.merge)c=new vt(u.fieldMask),d=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const w of o.mergeFields){const R=Yr(t,w,e);if(!u.contains(R))throw new b(V.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Ca(_,R)||_.push(R)}c=new vt(_),d=u.fieldTransforms.filter(w=>c.covers(w.field))}else c=null,d=u.fieldTransforms;return new Tc(new Tt(h),c,d)}class or extends Is{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof or}}function Ic(r,t,e,n){const i=r.Qu(1,t,e);Ps("Data must be an object, but it was:",i,n);const o=[],u=Tt.empty();se(n,(c,d)=>{const _=Vs(t,c,e);d=zt(d);const w=i.Nu(_);if(d instanceof or)o.push(_);else{const R=ar(d,w);R!=null&&(o.push(_),u.set(_,R))}});const h=new vt(o);return new wa(u,h,i.fieldTransforms)}function Ac(r,t,e,n,i,o){const u=r.Qu(1,t,e),h=[Yr(t,n,e)],c=[i];if(o.length%2!=0)throw new b(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)h.push(Yr(t,o[R])),c.push(o[R+1]);const d=[],_=Tt.empty();for(let R=h.length-1;R>=0;--R)if(!Ca(d,h[R])){const S=h[R];let D=c[R];D=zt(D);const x=u.Nu(S);if(D instanceof or)d.push(S);else{const k=ar(D,x);k!=null&&(d.push(S),_.set(S,k))}}const w=new vt(d);return new wa(_,w,u.fieldTransforms)}function ar(r,t){if(Sa(r=zt(r)))return Ps("Unsupported field value:",t,r),Va(r,t);if(r instanceof Is)return function(n,i){if(!Ra(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const h of n){let c=ar(h,i.Lu(u));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=zt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return dl(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=et.fromDate(n);return{timestampValue:zn(i.serializer,o)}}if(n instanceof et){const o=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:zn(i.serializer,o)}}if(n instanceof As)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ee)return{bytesValue:Ho(i.serializer,n._byteString)};if(n instanceof It){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.Bu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ls(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof ws)return function(u,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(c=>{if(typeof c!="number")throw h.Bu("VectorValues must only contain numeric values.");return is(h.serializer,c)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${vs(n)}`)}(r,t)}function Va(r,t){const e={};return wo(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):se(r,(n,i)=>{const o=ar(i,t.Mu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Sa(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof As||r instanceof Ee||r instanceof It||r instanceof Is||r instanceof ws)}function Ps(r,t,e){if(!Sa(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=vs(e);throw n==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+n)}}function Yr(r,t,e){if((t=zt(t))instanceof ir)return t._internalPath;if(typeof t=="string")return Vs(r,t);throw Gn("Field path arguments must be of type string or ",r,!1,void 0,e)}const wc=new RegExp("[~\\*/\\[\\]]");function Vs(r,t,e){if(t.search(wc)>=0)throw Gn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new ir(...t.split("."))._internalPath}catch{throw Gn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Gn(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let c="";return(o||u)&&(c+=" (found",o&&(c+=` in field ${n}`),u&&(c+=` in document ${i}`),c+=")"),new b(V.INVALID_ARGUMENT,h+r+c)}function Ca(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class ka{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Rc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Da("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Rc extends ka{data(){return super.data()}}function Da(r,t){return typeof t=="string"?Vs(r,t):t instanceof ir?t._internalPath:t._delegate._internalPath}/**
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
 */function Pc(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new b(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vc{convertValue(t,e="none"){switch(ne(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return se(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(u=>J(u.doubleValue));return new ws(o)}convertGeoPoint(t){return new As(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=es(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Xe(t));default:return null}}convertTimestamp(t){const e=$t(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);z(ea(n));const i=new Ye(n.get(1),n.get(3)),o=new M(n.popFirst(5));return i.isEqual(e)||bt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Sc(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
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
 */class Nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Cc extends ka{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ln(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Da("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ln extends Cc{data(t={}){return super.data(t)}}class kc{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Nn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ln(this._firestore,this._userDataWriter,n.key,n,new Nn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new b(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(h=>{const c=new Ln(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Nn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:c,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const c=new Ln(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Nn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,_=-1;return h.type!==0&&(d=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),_=u.indexOf(h.doc.key)),{type:Dc(h.type),doc:c,oldIndex:d,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Dc(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class Nc extends Vc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ee(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function qc(r){r=re(r,sr);const t=re(r.firestore,un),e=Aa(t),n=new Nc(t);return Pc(r._query),dc(e,r._query).then(i=>new kc(t,n,r,i))}function Bc(r,t,e,...n){r=re(r,It);const i=re(r.firestore,un),o=Pa(i);let u;return u=typeof(t=zt(t))=="string"||t instanceof ir?Ac(o,"updateDoc",r._key,t,e,n):Ic(o,"updateDoc",r._key,t),Ss(i,[u.toMutation(r._key,wt.exists(!0))])}function jc(r){return Ss(re(r.firestore,un),[new os(r._key,wt.none())])}function zc(r,t){const e=re(r.firestore,un),n=gc(r),i=Sc(r.converter,t);return Ss(e,[vc(Pa(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,wt.exists(!1))]).then(()=>n)}function Ss(r,t){return function(n,i){const o=new Bt;return n.asyncQueue.enqueueAndForget(async()=>tc(await cc(n),i,o)),o.promise}(Aa(r),t)}(function(t,e=!0){(function(i){ve=i})(vu),mu(new pu("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),h=new un(new Cu(n.getProvider("auth-internal")),new bu(n.getProvider("app-check-internal")),function(d,_){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new b(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ye(d.options.projectId,_)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Ci(bi,"4.7.3",t),Ci(bi,"4.7.3","esm2017")})();export{et as T,zc as a,gc as b,Fc as c,jc as d,qc as e,Uc as g,xc as s,Bc as u};
