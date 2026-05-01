"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=i(function(T,t){
var q=require('@stdlib/constants-float64-sqrt-two/dist'),p=require('@stdlib/math-base-special-pow/dist'),f=require('@stdlib/math-base-tools-normhermitepoly/dist');function y(r,e){return p(2,.5*r)*f(r,q*e)}t.exports=y
});var n=i(function(d,o){
var a=require('@stdlib/utils-constant-function/dist'),l=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-assert-is-integer/dist'),h=require('@stdlib/constants-float64-sqrt-two/dist'),x=require('@stdlib/math-base-special-pow/dist'),R=require('@stdlib/math-base-tools-normhermitepoly/dist');function w(r){var e;if(r<0||l(r)||!m(r))return a(NaN);if(r===0)return a(1);return e=x(2,.5*r),s;function s(c){return e*R(r,h*c)}}o.exports=w
});var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=u(),Q=n();N(v,"factory",Q);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
