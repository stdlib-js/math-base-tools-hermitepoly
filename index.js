// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return r({},"x",{}),!0}catch(n){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__,l=e,y=function(n,r,t){var e,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(n,r)||a.call(n,r)?(e=n.__proto__,n.__proto__=o,delete n[r],n[r]=t.value,n.__proto__=e):n[r]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(n,r,t.get),p&&f&&f.call(n,r,t.set),n},p=t()?l:y,b=function(n,r,t){p(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},v=1.4142135623730951,w=function(n){return n!=n},d=Math.floor,A=function(n){return d(n)===n},s=A,_=function(n){return s(n/2)},m=function(n){return _(n>0?n-1:n+1)},h=Number.POSITIVE_INFINITY,U=Number.NEGATIVE_INFINITY,N=h,g=U,j=function(n){return n===N||n===g},I=Math.sqrt,O=function(n){return Math.abs(n)},S="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),E=Object.prototype.toString,F=E,T=function(n){return F.call(n)},H=Object.prototype.hasOwnProperty,G=function(n,r){return null!=n&&H.call(n,r)},P="function"==typeof Symbol?Symbol.toStringTag:"",L=G,V=P,W=E,x=T,M=function(n){var r,t,e;if(null==n)return W.call(n);t=n[V],r=L(n,V);try{n[V]=void 0}catch(r){return W.call(n)}return e=W.call(n),r?n[V]=t:delete n[V],e},k=S&&"symbol"==typeof Symbol.toStringTag?M:x,Y=k,q="function"==typeof Uint32Array,C="function"==typeof Uint32Array?Uint32Array:null,z=function(n){return q&&n instanceof Uint32Array||"[object Uint32Array]"===Y(n)},B=C,D=function(){var n,r;if("function"!=typeof B)return!1;try{r=new B(r=[1,3.14,-3.14,4294967296,4294967297]),n=z(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},J="function"==typeof Uint32Array?Uint32Array:void 0,K=function(){throw new Error("not implemented")},Q=D()?J:K,R=k,X="function"==typeof Float64Array,Z="function"==typeof Float64Array?Float64Array:null,$=function(n){return X&&n instanceof Float64Array||"[object Float64Array]"===R(n)},nn=Z,rn=function(){var n,r;if("function"!=typeof nn)return!1;try{r=new nn([1,3.14,-3.14,NaN]),n=$(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},tn="function"==typeof Float64Array?Float64Array:void 0,en=function(){throw new Error("not implemented")},on=rn()?tn:en,un=k,fn="function"==typeof Uint8Array,cn="function"==typeof Uint8Array?Uint8Array:null,an=function(n){return fn&&n instanceof Uint8Array||"[object Uint8Array]"===un(n)},ln=cn,yn=function(){var n,r;if("function"!=typeof ln)return!1;try{r=new ln(r=[1,3.14,-3.14,256,257]),n=an(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},pn="function"==typeof Uint8Array?Uint8Array:void 0,bn=function(){throw new Error("not implemented")},vn=yn()?pn:bn,wn=k,dn="function"==typeof Uint16Array,An="function"==typeof Uint16Array?Uint16Array:null,sn=function(n){return dn&&n instanceof Uint16Array||"[object Uint16Array]"===wn(n)},_n=An,mn=function(){var n,r;if("function"!=typeof _n)return!1;try{r=new _n(r=[1,3.14,-3.14,65536,65537]),n=sn(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},hn="function"==typeof Uint16Array?Uint16Array:void 0,Un=function(){throw new Error("not implemented")},Nn={uint16:mn()?hn:Un,uint8:vn};(n=new Nn.uint16(1))[0]=4660;var gn,jn,In=52===new Nn.uint8(n.buffer)[0];!0===In?(gn=1,jn=0):(gn=0,jn=1);var On,Sn,En=Q,Fn={HIGH:gn,LOW:jn},Tn=new on(1),Hn=new En(Tn.buffer),Gn=Fn.HIGH,Pn=Fn.LOW,Ln=function(n,r){return Tn[0]=r,n[0]=Hn[Gn],n[1]=Hn[Pn],n},Vn=function(n,r){return 1===arguments.length?Ln([0,0],n):Ln(n,r)},Wn=Vn,xn=Q,Mn=!0===In?0:1,kn=new on(1),Yn=new xn(kn.buffer),qn=function(n,r){return kn[0]=n,Yn[Mn]=r>>>0,kn[0]},Cn=qn,zn=function(n){return 0|n},Bn=Q,Dn=!0===In?1:0,Jn=new on(1),Kn=new Bn(Jn.buffer),Qn=function(n){return Jn[0]=n,Kn[Dn]};!0===In?(On=1,Sn=0):(On=0,Sn=1);var Rn=Q,Xn={HIGH:On,LOW:Sn},Zn=new on(1),$n=new Rn(Zn.buffer),nr=Xn.HIGH,rr=Xn.LOW,tr=function(n,r){return $n[nr]=n,$n[rr]=r,Zn[0]},er=tr,or=Wn,ur=Qn,ir=er,fr=[0,0],cr=function(n,r){var t,e;return or(fr,n),t=fr[0],t&=2147483647,e=ur(r),ir(t|=e&=2147483648,fr[1])},ar=m,lr=cr,yr=U,pr=h,br=function(n,r){return r===yr?pr:r===pr?0:r>0?ar(r)?n:0:ar(r)?lr(pr,n):pr},vr=Qn,wr=function(n,r){return(2147483647&vr(n))<=1072693247?r<0?1/0:0:r>0?1/0:0},dr=O,Ar=h,sr=function(n,r){return-1===n?(n-n)/(n-n):1===n?1:dr(n)<1==(r===Ar)?0:Ar},_r=Q,mr=!0===In?1:0,hr=new on(1),Ur=new _r(hr.buffer),Nr=function(n,r){return hr[0]=n,Ur[mr]=r>>>0,hr[0]},gr=Qn,jr=Cn,Ir=Nr,Or=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},Sr=1048576,Er=[1,1.5],Fr=[0,.5849624872207642],Tr=[0,1.350039202129749e-8],Hr=Cn,Gr=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},Pr=j,Lr=w,Vr=O,Wr=function(n,r){return Lr(r)||Pr(r)?(n[0]=r,n[1]=0,n):0!==r&&Vr(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},xr=function(n,r){return 1===arguments.length?Wr([0,0],n):Wr(n,r)},Mr=Qn,kr=function(n){var r=Mr(n);return(r=(2146435072&r)>>>20)-1023|0},Yr=h,qr=U,Cr=w,zr=j,Br=cr,Dr=xr,Jr=kr,Kr=Wn,Qr=er,Rr=[0,0],Xr=[0,0],Zr=function(n,r){var t,e;return 0===r||0===n||Cr(n)||zr(n)?n:(Dr(Rr,n),r+=Rr[1],(r+=Jr(n=Rr[0]))<-1074?Br(0,n):r>1023?n<0?qr:Yr:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Kr(Xr,n),t=Xr[0],t&=2148532223,e*Qr(t|=r+1023<<20,Xr[1])))},$r=Qn,nt=Nr,rt=Cn,tt=zn,et=Zr,ot=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},ut=2147483647,it=1048575,ft=1048576,ct=w,at=m,lt=j,yt=A,pt=I,bt=O,vt=Wn,wt=Cn,dt=zn,At=U,st=h,_t=br,mt=wr,ht=sr,Ut=function(n,r,t){var e,o,u,i,f,c,a,l,y,p,b,v,w,d,A,s,_,m,h,U;return m=0,t<Sr&&(m-=53,t=gr(r*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=Sr),e=524288+(t>>1|536870912),f=(_=1/((r=Ir(r,t))+(a=Er[U])))*((s=r-a)-(i=jr(o=s*_,0))*(c=Ir(0,e+=U<<18))-i*(r-(c-a))),A=(u=o*o)*u*Or(u),c=jr(c=3+(u=i*i)+(A+=f*(i+o)),0),w=(b=-7.028461650952758e-9*(y=jr(y=(s=i*c)+(_=f*c+(A-(c-3-u))*o),0))+.9617966939259756*(_-(y-s))+Tr[U])-((v=jr(v=(p=.9617967009544373*y)+b+(l=Fr[U])+(d=m),0))-d-l-p),n[0]=v,n[1]=w,n},Nt=function(n,r){var t,e,o,u,i;return t=(i=1.9259629911266175e-8*(o=r-1)-o*o*Gr(o)*1.4426950408889634)-((e=Hr(e=(u=1.4426950216293335*o)+i,0))-u),n[0]=e,n[1]=t,n},gt=function(n,r,t){var e,o,u,i,f,c,a,l,y;return y=((l=n&ut|0)>>20)-1023|0,a=0,l>1071644672&&(o=nt(0,((a=n+(ft>>y+1)>>>0)&~(it>>(y=((a&ut)>>20)-1023|0)))>>>0),a=(a&it|ft)>>20-y>>>0,n<0&&(a=-a),r-=o),f=(i=.6931471805599453*(t-((o=rt(o=t+r,0))-r))+-1.904654299957768e-9*o)-((c=(u=.6931471824645996*o)+i)-u),e=c-(o=c*c)*ot(o),n=$r(c=1-(c*e/(e-2)-(f+c*f)-c)),n=tt(n),c=(n+=a<<20>>>0)>>20<=0?et(c,a):nt(c,n)},jt=2147483647,It=1083179008,Ot=1e300,St=1e-300,Et=[0,0],Ft=[0,0],Tt=function n(r,t){var e,o,u,i,f,c,a,l,y,p,b,v,w,d;if(ct(r)||ct(t))return NaN;if(vt(Et,t),f=Et[0],0===Et[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return pt(r);if(-.5===t)return 1/pt(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(lt(t))return ht(r,t)}if(vt(Et,r),i=Et[0],0===Et[1]){if(0===i)return _t(r,t);if(1===r)return 1;if(-1===r&&at(t))return-1;if(lt(r))return r===At?n(-0,-t):t<0?0:st}if(r<0&&!1===yt(t))return(r-r)/(r-r);if(u=bt(r),e=i&jt|0,o=f&jt|0,a=f>>>31|0,c=(c=i>>>31|0)&&at(t)?-1:1,o>1105199104){if(o>1139802112)return mt(r,t);if(e<1072693247)return 1===a?c*Ot*Ot:c*St*St;if(e>1072693248)return 0===a?c*Ot*Ot:c*St*St;b=Nt(Ft,u)}else b=Ut(Ft,u,e);if(p=(t-(l=wt(t,0)))*b[0]+t*b[1],y=l*b[0],vt(Et,v=p+y),w=dt(Et[0]),d=dt(Et[1]),w>=It){if(0!=(w-It|d))return c*Ot*Ot;if(p+8008566259537294e-32>v-y)return c*Ot*Ot}else if((w&jt)>=1083231232){if(0!=(w-3230714880|d))return c*St*St;if(p<=v-y)return c*St*St}return c*(v=gt(w,y,p))},Ht=Tt,Gt=w,Pt=A,Lt=function(n){return function(){return n}},Vt=Lt,Wt=w,xt=A,Mt=function(n,r){var t,e,o,u;if(Gt(n)||Gt(r)||n<0||!Pt(n))return NaN;if(0===n)return 1;if(1===n)return r;for(e=1,o=0,u=n;u>1;u--)t=r*e-u*o,o=e,e=t;return r*e-o};b(Mt,"factory",(function(n){return n<0||Wt(n)||!xt(n)?Vt(NaN):0===n?Vt(1):function(r){var t,e,o,u;if(Wt(r))return NaN;for(e=1,o=0,u=n;u>1;u--)t=r*e-u*o,o=e,e=t;return r*e-o}}));var kt=Mt;function Yt(n,r){return Ht(2,.5*n)*kt(n,v*r)}return b(Yt,"factory",(function(n){var r;return n<0||w(n)||!A(n)?Lt(NaN):0===n?Lt(1):(r=Ht(2,.5*n),function(t){return r*kt(n,v*t)})})),Yt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).hermitepoly=r();
//# sourceMappingURL=index.js.map