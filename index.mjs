// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two@v0.0.8-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-normhermitepoly@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@esm/index.mjs";function o(t,i){return e(2,.5*t)*n(t,s*i)}function d(t){var o;return t<0||r(t)||!m(t)?i(NaN):0===t?i(1):(o=e(2,.5*t),function(e){return o*n(t,s*e)})}t(o,"factory",d);export{o as default,d as factory};
//# sourceMappingURL=index.mjs.map
