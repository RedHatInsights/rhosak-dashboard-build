"use strict";(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[7563],{44020:r=>{var e="%[a-f0-9]{2}",t=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function o(r,e){try{return decodeURIComponent(r.join(""))}catch(r){}if(1===r.length)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],o(t),o(n))}function a(r){try{return decodeURIComponent(r)}catch(a){for(var e=r.match(t),n=1;n<e.length;n++)e=(r=o(e,n).join("")).match(t);return r}}r.exports=function(r){if("string"!=typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return function(r){for(var e={"%FE%FF":"��","%FF%FE":"��"},t=n.exec(r);t;){try{e[t[0]]=decodeURIComponent(t[0])}catch(r){var o=a(t[0]);o!==t[0]&&(e[t[0]]=o)}t=n.exec(r)}e["%C2"]="�";for(var s=Object.keys(e),c=0;c<s.length;c++){var i=s[c];r=r.replace(new RegExp(i,"g"),e[i])}return r}(r)}}},92806:r=>{r.exports=function(r,e){for(var t={},n=Object.keys(r),o=Array.isArray(e),a=0;a<n.length;a++){var s=n[a],c=r[s];(o?-1!==e.indexOf(s):e(s,c,r))&&(t[s]=c)}return t}},17563:(r,e,t)=>{const n=t(70610),o=t(44020),a=t(80500),s=t(92806),c=Symbol("encodeFragmentIdentifier");function i(r){if("string"!=typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(r,e){return e.encode?e.strict?n(r):encodeURIComponent(r):r}function u(r,e){return e.decode?o(r):r}function p(r){return Array.isArray(r)?r.sort():"object"==typeof r?p(Object.keys(r)).sort(((r,e)=>Number(r)-Number(e))).map((e=>r[e])):r}function f(r){const e=r.indexOf("#");return-1!==e&&(r=r.slice(0,e)),r}function y(r){const e=(r=f(r)).indexOf("?");return-1===e?"":r.slice(e+1)}function d(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&"string"==typeof r&&""!==r.trim()?r=Number(r):!e.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function m(r,e){i((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const t=function(r){let e;switch(r.arrayFormat){case"index":return(r,t,n)=>{e=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),e?(void 0===n[r]&&(n[r]={}),n[r][e[1]]=t):n[r]=t};case"bracket":return(r,t,n)=>{e=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"colon-list-separator":return(r,t,n)=>{e=/(:list)$/.exec(r),r=r.replace(/:list$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"comma":case"separator":return(e,t,n)=>{const o="string"==typeof t&&t.includes(r.arrayFormatSeparator),a="string"==typeof t&&!o&&u(t,r).includes(r.arrayFormatSeparator);t=a?u(t,r):t;const s=o||a?t.split(r.arrayFormatSeparator).map((e=>u(e,r))):null===t?t:u(t,r);n[e]=s};case"bracket-separator":return(e,t,n)=>{const o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),!o)return void(n[e]=t?u(t,r):t);const a=null===t?[]:t.split(r.arrayFormatSeparator).map((e=>u(e,r)));void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=a};default:return(r,e,t)=>{void 0!==t[r]?t[r]=[].concat(t[r],e):t[r]=e}}}(e),n=Object.create(null);if("string"!=typeof r)return n;if(!(r=r.trim().replace(/^[?#&]/,"")))return n;for(const o of r.split("&")){if(""===o)continue;let[r,s]=a(e.decode?o.replace(/\+/g," "):o,"=");s=void 0===s?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?s:u(s,e),t(u(r,e),s,n)}for(const r of Object.keys(n)){const t=n[r];if("object"==typeof t&&null!==t)for(const r of Object.keys(t))t[r]=d(t[r],e);else n[r]=d(t,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce(((r,e)=>{const t=n[e];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?r[e]=p(t):r[e]=t,r}),Object.create(null))}e.extract=y,e.parse=m,e.stringify=(r,e)=>{if(!r)return"";i((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);const t=t=>e.skipNull&&null==r[t]||e.skipEmptyString&&""===r[t],n=function(r){switch(r.arrayFormat){case"index":return e=>(t,n)=>{const o=t.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,[l(e,r),"[",o,"]"].join("")]:[...t,[l(e,r),"[",l(o,r),"]=",l(n,r)].join("")]};case"bracket":return e=>(t,n)=>void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,[l(e,r),"[]"].join("")]:[...t,[l(e,r),"[]=",l(n,r)].join("")];case"colon-list-separator":return e=>(t,n)=>void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,[l(e,r),":list="].join("")]:[...t,[l(e,r),":list=",l(n,r)].join("")];case"comma":case"separator":case"bracket-separator":{const e="bracket-separator"===r.arrayFormat?"[]=":"=";return t=>(n,o)=>void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[l(t,r),e,l(o,r)].join("")]:[[n,l(o,r)].join(r.arrayFormatSeparator)])}default:return e=>(t,n)=>void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,l(e,r)]:[...t,[l(e,r),"=",l(n,r)].join("")]}}(e),o={};for(const e of Object.keys(r))t(e)||(o[e]=r[e]);const a=Object.keys(o);return!1!==e.sort&&a.sort(e.sort),a.map((t=>{const o=r[t];return void 0===o?"":null===o?l(t,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?l(t,e)+"[]":o.reduce(n(t),[]).join("&"):l(t,e)+"="+l(o,e)})).filter((r=>r.length>0)).join("&")},e.parseUrl=(r,e)=>{e=Object.assign({decode:!0},e);const[t,n]=a(r,"#");return Object.assign({url:t.split("?")[0]||"",query:m(y(r),e)},e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,e)}:{})},e.stringifyUrl=(r,t)=>{t=Object.assign({encode:!0,strict:!0,[c]:!0},t);const n=f(r.url).split("?")[0]||"",o=e.extract(r.url),a=e.parse(o,{sort:!1}),s=Object.assign(a,r.query);let i=e.stringify(s,t);i&&(i=`?${i}`);let u=function(r){let e="";const t=r.indexOf("#");return-1!==t&&(e=r.slice(t)),e}(r.url);return r.fragmentIdentifier&&(u=`#${t[c]?l(r.fragmentIdentifier,t):r.fragmentIdentifier}`),`${n}${i}${u}`},e.pick=(r,t,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[c]:!1},n);const{url:o,query:a,fragmentIdentifier:i}=e.parseUrl(r,n);return e.stringifyUrl({url:o,query:s(a,t),fragmentIdentifier:i},n)},e.exclude=(r,t,n)=>{const o=Array.isArray(t)?r=>!t.includes(r):(r,e)=>!t(r,e);return e.pick(r,o,n)}},80500:r=>{r.exports=(r,e)=>{if("string"!=typeof r||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[r];const t=r.indexOf(e);return-1===t?[r]:[r.slice(0,t),r.slice(t+e.length)]}},70610:r=>{r.exports=r=>encodeURIComponent(r).replace(/[!'()*]/g,(r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
