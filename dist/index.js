"use strict";var t=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var a=t(function(T,u){
var q=require('@stdlib/constants-float64-sqrt-two/dist'),p=require('@stdlib/math-base-special-pow/dist'),f=require('@stdlib/math-base-tools-normhermitepoly/dist');function y(r,e){return p(2,.5*r)*f(r,q*e)}u.exports=y
});var v=t(function(d,n){
var o=require('@stdlib/utils-constant-function/dist'),l=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-assert-is-integer/dist'),h=require('@stdlib/constants-float64-sqrt-two/dist'),x=require('@stdlib/math-base-special-pow/dist'),R=require('@stdlib/math-base-tools-normhermitepoly/dist');function w(r){var e;if(r<0||l(r)||!m(r))return o(NaN);if(r===0)return o(1);return e=x(2,.5*r),i;function i(c){return e*R(r,h*c)}}n.exports=w
});var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=a(),Q=v();N(s,"factory",Q);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
