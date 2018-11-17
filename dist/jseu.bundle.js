!function(r,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.jseu=n():r.jseu=n()}(this,function(){return function(r){var n={};function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=n,t.d=function(r,n,e){t.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:e})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,n){if(1&n&&(r=t(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var o in r)t.d(e,o,function(n){return r[n]}.bind(null,o));return e},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},t.p="/Users/jun/ProjectJavaScript/js_buffer_utils/dist",t(t.s=0)}([function(r,n,t){r.exports=t(1)},function(r,n,t){"use strict";t.r(n);var e={};t.r(e),t.d(e,"encodeBase64",function(){return i}),t.d(e,"decodeBase64",function(){return a}),t.d(e,"encodeBase64Url",function(){return s}),t.d(e,"decodeBase64Url",function(){return p}),t.d(e,"arrayBufferToHexString",function(){return d}),t.d(e,"hexStringToArrayBuffer",function(){return l}),t.d(e,"arrayBufferToString",function(){return y}),t.d(e,"stringToArrayBuffer",function(){return g});var o={};t.r(o),t.d(o,"pemToBin",function(){return w}),t.d(o,"binToPem",function(){return E});var u=function(r){if("undefined"!=typeof Buffer){var n=Object.prototype.toString.call(r).slice(8,-1);return(Buffer.isBuffer(r)?r:["ArrayBuffer","TypedArray","Uint8Array","Int8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"].indexOf(n)>=0?Buffer.from(r):Buffer.from(r.toString(),"binary")).toString("base64")}throw new Error("UnsupportedEnvironment")},f=function(r){if("undefined"!=typeof Buffer)return Buffer.from(r,"base64").toString("binary");throw new Error("UnsupportedEnvironment")};function i(r){var n="";return n="string"==typeof r?r:y(r),("undefined"!=typeof window?window.btoa:u)(n)}function a(r){return function(r){if(r instanceof Uint8Array){for(var n=!0,t=0;t<r.length;t++)if(r[t]>126||r[t]<32&&13!==r[t]&&10!==r[t]){n=!1;break}var e=null;if(n){e="";for(var o=0;o<r.length;o++)e+=String.fromCharCode(r[o])}else e=r;return e}throw new Error("Input data must be an Uint8Array")}(g(("undefined"!=typeof window?window.atob:f)(r)))}function c(r){if(r instanceof Uint8Array)return r;if(ArrayBuffer.isView(r)&&void 0!==r.buffer)return new Uint8Array(r.buffer);if(r instanceof ArrayBuffer)return new Uint8Array(r);throw new Error("Input must be an ArrayBuffer or a TypedArray")}function s(r){return i(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function p(r){if("string"!=typeof r)throw new Error("Input must be string");return a(r=r.replace(/-/g,"+").replace(/_/g,"/"))}function d(r){for(var n=c(r),t="",e=0;e<n.length;e++){var o=(255&n[e]).toString(16);t+=o=1===o.length?"0".concat(o):o}return t}function l(r){if(!r||"string"!=typeof r)throw new Error("Input arg must be a non-null string");for(var n=[],t=r.length,e=0;e<t;e+=2)n.push(parseInt(r.substr(e,2),16));return new Uint8Array(n)}function y(r){var n=c(r);return String.fromCharCode.apply(null,n)}function g(r){if(!r||"string"!=typeof r)throw new Error("Input arg must be a non-null string");for(var n=new Uint8Array(r.length),t=0;t<r.length;t++)n[t]=r.charCodeAt(t);return n}var b={public:"PUBLIC KEY",private:"PRIVATE KEY",encryptedPrivate:"ENCRYPTED PRIVATE KEY",certificate:"CERTIFICATE",certRequest:"CERTIFICATE REQUEST"};function w(r){return a(function(r){if(!r||"string"!=typeof r)throw new Error("Input arg must be a non-null string");var n=RegExp("^-----[s]*BEGIN[^-]*-----$","gm"),t=RegExp("^-----[s]*END[^-]*-----$","gm");try{var e=r.split(n)[1].split(t)[0];return e=e.replace(/\r?\n/g,"")}catch(r){throw new Error("Invalid format as PEM")}}(r))}function E(r,n){return function(r,n){if(!r||"string"!=typeof r)throw new Error("Input arg must be a non-null string");if(!n||"string"!=typeof n)throw new Error("Input arg must be a non-null string");if(Object.keys(b).indexOf(n)<0)throw new Error("Unsupported type");var t=b[n],e="-----BEGIN ".concat(t,"-----\n");for(;r.length>0;)e+="".concat(r.substring(0,64),"\n"),r=r.substring(64);return e="".concat(e,"-----END ").concat(t,"-----")}(i(r),n)}t.d(n,"encoder",function(){return e}),t.d(n,"formatter",function(){return o});n.default={encoder:e,formatter:o}}])});