<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Physicist's Hermite Polynomial

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate a physicist's [Hermite polynomial][hermite-polynomial].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The physicist's [Hermite polynomials][hermite-polynomial] are given by

<!-- <equation class="equation" label="eq:physicists_hermite_polynomials" align="center" raw="H_{n}(x)=(-1)^{n} e^{x^2} \frac{\mathrm{d}^{n}}{\mathrm{d} x^{n}} e^{-x^2}" alt="Equation for physicist's Hermite polynomials."> -->

```math
H_{n}(x)=(-1)^{n} e^{x^2} \frac{\mathrm{d}^{n}}{\mathrm{d} x^{n}} e^{-x^2}
```

<!-- <div class="equation" align="center" data-raw-text="H_{n}(x)=(-1)^{n} e^{x^2} \frac{\mathrm{d}^{n}}{\mathrm{d}x^n} e^{-x^2}" data-equation="eq:physicists_hermite_polynomials">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@58b02120eb58818177f6767ab495e7afac3618e8/lib/node_modules/@stdlib/math/base/tools/hermitepoly/docs/img/equation_physicists_hermite_polynomials.svg" alt="Equation for physicist's Hermite polynomials.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-tools-hermitepoly
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var hermitepoly = require( '@stdlib/math-base-tools-hermitepoly' );
```

#### hermitepoly( n, x )

Evaluates a physicist's [Hermite polynomial][hermite-polynomial] of degree `n`.

```javascript
var v = hermitepoly( 1, 1.0 );
// returns 2.0

v = hermitepoly( 1, 0.5 );
// returns ~1.0

v = hermitepoly( -1, 0.5 );
// returns NaN

v = hermitepoly( 0, 0.5 );
// returns 1.0

v = hermitepoly( 2, 0.5 );
// returns -1.0
```

#### hermitepoly.factory( n )

Returns a `function` for evaluating a physicist's [Hermite polynomial][hermite-polynomial] of degree `n`.

```javascript
var polyval = hermitepoly.factory( 2 );

var v = polyval( 0.5 );
// returns -1.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu');
var hermitepoly = require( '@stdlib/math-base-tools-hermitepoly' );

var x;
var y;
var i;
var j;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    for ( j = 1; j < 3; j++ ) {
        y = hermitepoly( j, x );
        console.log( 'H_%d( %d ) = %d', j, x.toFixed( 3 ), y.toFixed( 3 ) );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/tools/evalpoly`][@stdlib/math/base/tools/evalpoly]</span><span class="delimiter">: </span><span class="description">evaluate a polynomial using double-precision floating-point arithmetic.</span>
-   <span class="package-name">[`@stdlib/math-base/tools/normhermitepoly`][@stdlib/math/base/tools/normhermitepoly]</span><span class="delimiter">: </span><span class="description">evaluate a normalized Hermite polynomial using double-precision floating-point arithmetic.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools-hermitepoly.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools-hermitepoly

[test-image]: https://github.com/stdlib-js/math-base-tools-hermitepoly/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-tools-hermitepoly/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools-hermitepoly/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools-hermitepoly?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools-hermitepoly.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools-hermitepoly/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-tools-hermitepoly/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-tools-hermitepoly/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-tools-hermitepoly/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-tools-hermitepoly/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-tools-hermitepoly/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-tools-hermitepoly/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-tools-hermitepoly/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-tools-hermitepoly/main/LICENSE

[hermite-polynomial]: https://en.wikipedia.org/wiki/Hermite_polynomials

<!-- <related-links> -->

[@stdlib/math/base/tools/evalpoly]: https://github.com/stdlib-js/math-base-tools-evalpoly

[@stdlib/math/base/tools/normhermitepoly]: https://github.com/stdlib-js/math-base-tools-normhermitepoly

<!-- </related-links> -->

</section>

<!-- /.links -->
