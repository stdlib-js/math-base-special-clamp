// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.2.1-esm/index.mjs";function e(e,i,n){return s(e)||s(i)||s(n)?NaN:e<i?i:e>n?n:0===i&&t(e)?i:0===e&&t(n)?n:e}export{e as default};
//# sourceMappingURL=index.mjs.map
