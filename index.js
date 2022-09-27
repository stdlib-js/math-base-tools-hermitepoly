// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=1.4142135623730951;function p(r){return r!=r}var v=Math.floor;function b(r){return v(r)===r}function d(r){return b(r/2)}function w(r){return d(r>0?r-1:r+1)}var s=Number.POSITIVE_INFINITY,_=Number.NEGATIVE_INFINITY;function A(r){return r===s||r===_}var m=Math.sqrt;function h(r){return Math.abs(r)}var U,N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),j=Object.prototype.toString,g=Object.prototype.hasOwnProperty,I="function"==typeof Symbol?Symbol.toStringTag:"",O=N&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return j.call(r);t=r[I],u=I,n=null!=(o=r)&&g.call(o,u);try{r[I]=void 0}catch(n){return j.call(r)}return e=j.call(r),n?r[I]=t:delete r[I],e}:function(r){return j.call(r)},S="function"==typeof Uint32Array,E="function"==typeof Uint32Array?Uint32Array:null,F="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(S&&t instanceof Uint32Array||"[object Uint32Array]"===O(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,H=U,G="function"==typeof Float64Array,P="function"==typeof Float64Array?Float64Array:null,x="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P([1,3.14,-3.14,NaN]),t=n,r=(G&&t instanceof Float64Array||"[object Float64Array]"===O(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var L,M=T,V="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,k="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,256,257]),t=n,r=(V&&t instanceof Uint8Array||"[object Uint8Array]"===O(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var Y,q=L,C="function"==typeof Uint16Array,z="function"==typeof Uint16Array?Uint16Array:null,B="function"==typeof Uint16Array?Uint16Array:void 0;Y=function(){var r,n,t;if("function"!=typeof z)return!1;try{n=new z(n=[1,3.14,-3.14,65536,65537]),t=n,r=(C&&t instanceof Uint16Array||"[object Uint16Array]"===O(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?B:function(){throw new Error("not implemented")};var D,J={uint16:Y,uint8:q};(D=new J.uint16(1))[0]=4660;var K,Q,R=52===new J.uint8(D.buffer)[0];!0===R?(K=1,Q=0):(K=0,Q=1);var X={HIGH:K,LOW:Q},Z=new M(1),$=new H(Z.buffer),rr=X.HIGH,nr=X.LOW;function tr(r,n){return Z[0]=n,r[0]=$[rr],r[1]=$[nr],r}function er(r,n){return 1===arguments.length?tr([0,0],r):tr(r,n)}var or=!0===R?0:1,ur=new M(1),ir=new H(ur.buffer);function fr(r,n){return ur[0]=r,ir[or]=n>>>0,ur[0]}function ar(r){return 0|r}var cr,lr,yr=!0===R?1:0,pr=new M(1),vr=new H(pr.buffer);function br(r){return pr[0]=r,vr[yr]}!0===R?(cr=1,lr=0):(cr=0,lr=1);var dr={HIGH:cr,LOW:lr},wr=new M(1),sr=new H(wr.buffer),_r=dr.HIGH,Ar=dr.LOW;function mr(r,n){return sr[_r]=r,sr[Ar]=n,wr[0]}var hr=[0,0];function Ur(r,n){var t,e;return er(hr,r),t=hr[0],t&=2147483647,e=br(n),mr(t|=e&=2147483648,hr[1])}var Nr=!0===R?1:0,jr=new M(1),gr=new H(jr.buffer);function Ir(r,n){return jr[0]=r,gr[Nr]=n>>>0,jr[0]}var Or=1023,Sr=1048576,Er=[1,1.5],Fr=[0,.5849624872207642],Tr=[0,1.350039202129749e-8];function Hr(r,n){return p(n)||A(n)?(r[0]=n,r[1]=0,r):0!==n&&h(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Gr=[0,0],Pr=[0,0];function xr(r,n){var t,e;return 0===n||0===r||p(r)||A(r)?r:(function(r,n){1===arguments.length?Hr([0,0],r):Hr(r,n)}(Gr,r),n+=Gr[1],n+=function(r){var n=br(r);return(n=(2146435072&n)>>>20)-Or|0}(r=Gr[0]),n<-1074?Ur(0,r):n>1023?r<0?_:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,er(Pr,r),t=Pr[0],t&=2148532223,e*mr(t|=n+Or<<20,Pr[1])))}var Lr=2147483647,Mr=1048575,Vr=1048576,Wr=2147483647,kr=1083179008,Yr=1e300,qr=1e-300,Cr=[0,0],zr=[0,0];function Br(r,n){var t,e,o,u,i,f,a,c,l,y,v,d,U,N;if(p(r)||p(n))return NaN;if(er(Cr,n),i=Cr[0],0===Cr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return m(r);if(-.5===n)return 1/m(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(A(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:h(r)<1==(n===s)?0:s}(r,n)}if(er(Cr,r),u=Cr[0],0===Cr[1]){if(0===u)return function(r,n){return n===_?s:n===s?0:n>0?w(n)?r:0:w(n)?Ur(s,r):s}(r,n);if(1===r)return 1;if(-1===r&&w(n))return-1;if(A(r))return r===_?Br(-0,-n):n<0?0:s}if(r<0&&!1===b(n))return(r-r)/(r-r);if(o=h(r),t=u&Wr|0,e=i&Wr|0,a=i>>>31|0,f=(f=u>>>31|0)&&w(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&br(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Yr*Yr:f*qr*qr;if(t>1072693248)return 0===a?f*Yr*Yr:f*qr*qr;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=fr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(zr,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,d,w,s,_,A,m,h,U,N;return m=0,t<Sr&&(m-=53,t=br(n*=9007199254740992)),m+=(t>>20)-Or|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=Sr),i=fr(o=(_=(n=Ir(n,t))-(c=Er[U]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=Ir(0,e+=U<<18),s=(u=o*o)*u*(0===(N=u)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=fr(a=3+(u=i*i)+(s+=(f=A*(_-i*a-i*(n-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=fr(y=(_=i*a)+(A=f*a+(s-(a-3-u))*o),0))+.9617966939259756*(A-(y-_))+Tr[U])-((b=fr(b=(p=.9617967009544373*y)+v+(l=Fr[U])+(w=m),0))-w-l-p),r[0]=b,r[1]=d,r}(zr,o,t);if(y=(n-(c=fr(n,0)))*v[0]+n*v[1],l=c*v[0],er(Cr,d=y+l),U=ar(Cr[0]),N=ar(Cr[1]),U>=kr){if(0!=(U-kr|N))return f*Yr*Yr;if(y+8008566259537294e-32>d-l)return f*Yr*Yr}else if((U&Wr)>=1083231232){if(0!=(U-3230714880|N))return f*qr*qr;if(y<=d-l)return f*qr*qr}return d=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&Lr|0)>>20)-Or|0,c=0,l>1071644672&&(o=Ir(0,((c=r+(Vr>>y+1)>>>0)&~(Mr>>(y=((c&Lr)>>20)-Or|0)))>>>0),c=(c&Mr|Vr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=ar(r=br(a=1-((a=(u=.6931471824645996*(o=fr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?xr(a,c):Ir(a,r)}(U,l,y),f*d}function Dr(r,n){var t,e,o,u;if(p(r)||p(n)||r<0||!b(r))return NaN;if(0===r)return 1;if(1===r)return n;for(e=1,o=0,u=r;u>1;u--)t=n*e-u*o,o=e,e=t;return n*e-o}function Jr(r){return function(){return r}}function Kr(r,n){return Br(2,.5*r)*Dr(r,y*n)}function Qr(r){var n;return r<0||p(r)||!b(r)?Jr(NaN):0===r?Jr(1):(n=Br(2,.5*r),function(t){return n*Dr(r,y*t)})}l(Dr,"factory",(function(r){return r<0||p(r)||!b(r)?Jr(NaN):0===r?Jr(1):function(n){var t,e,o,u;if(p(n))return NaN;for(e=1,o=0,u=r;u>1;u--)t=n*e-u*o,o=e,e=t;return n*e-o}})),l(Kr,"factory",Qr),r.default=Kr,r.factory=Qr,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).hermitepoly={});
//# sourceMappingURL=index.js.map
