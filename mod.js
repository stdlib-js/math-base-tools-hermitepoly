// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},l=n()?c:v;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},p=1.4142135623730951;var b=function(r){return r!=r},w=Math.floor;var A=function(r){return w(r)===r},_=A;var m=function(r){return _(r/2)};var d=function(r){return m(r>0?r-1:r+1)},s=Number.POSITIVE_INFINITY,U=Number.NEGATIVE_INFINITY,h=s,N=U;var j=function(r){return r===h||r===N},g=Math.sqrt;var I=function(r){return Math.abs(r)};var O=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var S=function(){return O&&"symbol"==typeof Symbol.toStringTag},E=Object.prototype.toString,F=E;var H=function(r){return F.call(r)},T=Object.prototype.hasOwnProperty;var G=function(r,n){return null!=r&&T.call(r,n)},P="function"==typeof Symbol?Symbol.toStringTag:"",L=G,V=P,W=E;var M=H,k=function(r){var n,t,e;if(null==r)return W.call(r);t=r[V],n=L(r,V);try{r[V]=void 0}catch(n){return W.call(r)}return e=W.call(r),n?r[V]=t:delete r[V],e},x=S()?k:M,Y=x,q="function"==typeof Uint32Array;var C="function"==typeof Uint32Array?Uint32Array:null,z=function(r){return q&&r instanceof Uint32Array||"[object Uint32Array]"===Y(r)},B=C;var D=function(){var r,n;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,4294967296,4294967297]),r=z(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var J="function"==typeof Uint32Array?Uint32Array:void 0,K=function(){throw new Error("not implemented")},Q=D()?J:K,R=x,X="function"==typeof Float64Array;var Z="function"==typeof Float64Array?Float64Array:null,$=function(r){return X&&r instanceof Float64Array||"[object Float64Array]"===R(r)},rr=Z;var nr=function(){var r,n;if("function"!=typeof rr)return!1;try{n=new rr([1,3.14,-3.14,NaN]),r=$(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var tr="function"==typeof Float64Array?Float64Array:void 0,er=function(){throw new Error("not implemented")},ur=nr()?tr:er,or=x,ir="function"==typeof Uint8Array;var ar="function"==typeof Uint8Array?Uint8Array:null,fr=function(r){return ir&&r instanceof Uint8Array||"[object Uint8Array]"===or(r)},cr=ar;var vr=function(){var r,n;if("function"!=typeof cr)return!1;try{n=new cr(n=[1,3.14,-3.14,256,257]),r=fr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var lr="function"==typeof Uint8Array?Uint8Array:void 0,yr=function(){throw new Error("not implemented")},pr=vr()?lr:yr,br=x,wr="function"==typeof Uint16Array;var Ar="function"==typeof Uint16Array?Uint16Array:null,_r=function(r){return wr&&r instanceof Uint16Array||"[object Uint16Array]"===br(r)},mr=Ar;var dr=function(){var r,n;if("function"!=typeof mr)return!1;try{n=new mr(n=[1,3.14,-3.14,65536,65537]),r=_r(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var sr,Ur="function"==typeof Uint16Array?Uint16Array:void 0,hr=function(){throw new Error("not implemented")},Nr={uint16:dr()?Ur:hr,uint8:pr};(sr=new Nr.uint16(1))[0]=4660;var jr,gr,Ir=52===new Nr.uint8(sr.buffer)[0];!0===Ir?(jr=1,gr=0):(jr=0,gr=1);var Or=Q,Sr={HIGH:jr,LOW:gr},Er=new ur(1),Fr=new Or(Er.buffer),Hr=Sr.HIGH,Tr=Sr.LOW;var Gr=function(r,n){return Er[0]=n,r[0]=Fr[Hr],r[1]=Fr[Tr],r};var Pr=function(r,n){return 1===arguments.length?Gr([0,0],r):Gr(r,n)},Lr=Q,Vr=!0===Ir?0:1,Wr=new ur(1),Mr=new Lr(Wr.buffer);var kr=function(r,n){return Wr[0]=r,Mr[Vr]=n>>>0,Wr[0]},xr=kr;var Yr=function(r){return 0|r},qr=Q,Cr=!0===Ir?1:0,zr=new ur(1),Br=new qr(zr.buffer);var Dr,Jr,Kr=function(r){return zr[0]=r,Br[Cr]};!0===Ir?(Dr=1,Jr=0):(Dr=0,Jr=1);var Qr=Q,Rr={HIGH:Dr,LOW:Jr},Xr=new ur(1),Zr=new Qr(Xr.buffer),$r=Rr.HIGH,rn=Rr.LOW;var nn=function(r,n){return Zr[$r]=r,Zr[rn]=n,Xr[0]},tn=nn,en=Pr,un=Kr,on=tn,an=[0,0];var fn=function(r,n){var t,e;return en(an,r),t=an[0],t&=2147483647,e=un(n),on(t|=e&=2147483648,an[1])},cn=d,vn=fn,ln=U,yn=s;var pn=function(r,n){return n===ln?yn:n===yn?0:n>0?cn(n)?r:0:cn(n)?vn(yn,r):yn},bn=Kr;var wn=function(r,n){return(2147483647&bn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},An=I,_n=s;var mn=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:An(r)<1==(n===_n)?0:_n},dn=Q,sn=!0===Ir?1:0,Un=new ur(1),hn=new dn(Un.buffer);var Nn=function(r,n){return Un[0]=r,hn[sn]=n>>>0,Un[0]};var jn=Kr,gn=xr,In=Nn,On=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Sn=[1,1.5],En=[0,.5849624872207642],Fn=[0,1.350039202129749e-8];var Hn=xr,Tn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Gn=j,Pn=b,Ln=I;var Vn=function(r,n){return Pn(n)||Gn(n)?(r[0]=n,r[1]=0,r):0!==n&&Ln(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Wn=Kr;var Mn=function(r){var n=Wn(r);return(n=(2146435072&n)>>>20)-1023|0},kn=s,xn=U,Yn=b,qn=j,Cn=fn,zn=function(r,n){return 1===arguments.length?Vn([0,0],r):Vn(r,n)},Bn=Mn,Dn=Pr,Jn=tn,Kn=[0,0],Qn=[0,0];var Rn=function(r,n){var t,e;return 0===n||0===r||Yn(r)||qn(r)?r:(zn(Kn,r),n+=Kn[1],(n+=Bn(r=Kn[0]))<-1074?Cn(0,r):n>1023?r<0?xn:kn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Dn(Qn,r),t=Qn[0],t&=2148532223,e*Jn(t|=n+1023<<20,Qn[1])))};var Xn=Kr,Zn=Nn,$n=xr,rt=Yr,nt=Rn,tt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var et=b,ut=d,ot=j,it=A,at=g,ft=I,ct=Pr,vt=xr,lt=Yr,yt=U,pt=s,bt=pn,wt=wn,At=mn,_t=function(r,n,t){var e,u,o,i,a,f,c,v,l,y,p,b,w,A,_,m,d,s,U,h;return s=0,t<1048576&&(s-=53,t=jn(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?h=0:U<767610?h=1:(h=0,s+=1,t-=1048576),e=524288+(t>>1|536870912),a=(d=1/((n=In(n,t))+(c=Sn[h])))*((m=n-c)-(i=gn(u=m*d,0))*(f=In(0,e+=h<<18))-i*(n-(f-c))),_=(o=u*u)*o*On(o),f=gn(f=3+(o=i*i)+(_+=a*(i+u)),0),w=(p=-7.028461650952758e-9*(l=gn(l=(m=i*f)+(d=a*f+(_-(f-3-o))*u),0))+.9617966939259756*(d-(l-m))+Fn[h])-((b=gn(b=(y=.9617967009544373*l)+p+(v=En[h])+(A=s),0))-A-v-y),r[0]=b,r[1]=w,r},mt=function(r,n){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*Tn(u)))-((e=Hn(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r},dt=function(r,n,t){var e,u,o,i,a,f,c,v,l,y;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=o=Zn(0,e)),f=(a=.6931471805599453*(t-((o=$n(o=t+n,0))-n))+-1.904654299957768e-9*o)-((c=(i=.6931471824645996*o)+a)-i),u=c-(o=c*c)*tt(o),r=Xn(c=1-(c*u/(u-2)-(f+c*f)-c)),r=rt(r),c=(r+=v<<20>>>0)>>20<=0?nt(c,v):Zn(c,r)},st=1e300,Ut=1e-300,ht=[0,0],Nt=[0,0];var jt=function r(n,t){var e,u,o,i,a,f,c,v,l,y,p,b,w,A;if(et(n)||et(t))return NaN;if(ct(ht,t),a=ht[0],0===ht[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return at(n);if(-.5===t)return 1/at(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(ot(t))return At(n,t)}if(ct(ht,n),i=ht[0],0===ht[1]){if(0===i)return bt(n,t);if(1===n)return 1;if(-1===n&&ut(t))return-1;if(ot(n))return n===yt?r(-0,-t):t<0?0:pt}if(n<0&&!1===it(t))return(n-n)/(n-n);if(o=ft(n),e=2147483647&i|0,u=2147483647&a|0,c=a>>>31|0,f=(f=i>>>31|0)&&ut(t)?-1:1,u>1105199104){if(u>1139802112)return wt(n,t);if(e<1072693247)return 1===c?f*st*st:f*Ut*Ut;if(e>1072693248)return 0===c?f*st*st:f*Ut*Ut;p=mt(Nt,o)}else p=_t(Nt,o,e);if(y=(t-(v=vt(t,0)))*p[0]+t*p[1],l=v*p[0],ct(ht,b=y+l),w=lt(ht[0]),A=lt(ht[1]),w>=1083179008){if(0!=(w-1083179008|A))return f*st*st;if(y+8008566259537294e-32>b-l)return f*st*st}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|A))return f*Ut*Ut;if(y<=b-l)return f*Ut*Ut}return f*(b=dt(w,l,y))},gt=jt,It=b,Ot=A;var St=function(r){return function(){return r}},Et=St,Ft=b,Ht=A;var Tt=function(r,n){var t,e,u,o;if(It(r)||It(n)||r<0||!Ot(r))return NaN;if(0===r)return 1;if(1===r)return n;for(e=1,u=0,o=r;o>1;o--)t=n*e-o*u,u=e,e=t;return n*e-u};y(Tt,"factory",(function(r){return r<0||Ft(r)||!Ht(r)?Et(NaN):0===r?Et(1):function(n){var t,e,u,o;if(Ft(n))return NaN;for(e=1,u=0,o=r;o>1;o--)t=n*e-o*u,u=e,e=t;return n*e-u}}));var Gt=Tt;function Pt(r,n){return gt(2,.5*r)*Gt(r,p*n)}function Lt(r){var n;return r<0||b(r)||!A(r)?St(NaN):0===r?St(1):(n=gt(2,.5*r),function(t){return n*Gt(r,p*t)})}y(Pt,"factory",Lt);export{Pt as default,Lt as factory};
//# sourceMappingURL=mod.js.map
