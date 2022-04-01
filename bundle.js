// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).clamp=n()}(this,(function(){"use strict";var e=function(e){return e!=e},n=Number.NEGATIVE_INFINITY;var t=e,o=function(e){return 0===e&&1/e===n};return function(e,n,f){return t(e)||t(n)||t(f)?NaN:e<n?n:e>f?f:0===n&&o(e)?n:0===e&&o(f)?f:e}}));
//# sourceMappingURL=bundle.js.map
