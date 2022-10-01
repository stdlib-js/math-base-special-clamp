// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return n!=n}var r=Number.NEGATIVE_INFINITY;function t(n){return 0===n&&1/n===r}function u(r,u,e){return n(r)||n(u)||n(e)?NaN:r<u?u:r>e?e:0===u&&t(r)?u:0===r&&t(e)?e:r}export{u as default};
//# sourceMappingURL=mod.js.map
