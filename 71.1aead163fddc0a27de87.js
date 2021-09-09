"use strict";(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[71],{90071:(n,t,e)=>{e.r(t),e.d(t,{createBrowserHistory:()=>k,createHashHistory:()=>S,createLocation:()=>w,createMemoryHistory:()=>U,createPath:()=>p,locationsAreEqual:()=>g,parsePath:()=>v});var o=e(87462);function i(n){return"/"===n.charAt(0)}function r(n,t){for(var e=t,o=e+1,i=n.length;o<i;e+=1,o+=1)n[e]=n[o];n.pop()}const a=function(n,t){void 0===t&&(t="");var e,o=n&&n.split("/")||[],a=t&&t.split("/")||[],c=n&&i(n),u=t&&i(t),s=c||u;if(n&&i(n)?a=o:o.length&&(a.pop(),a=a.concat(o)),!a.length)return"/";if(a.length){var f=a[a.length-1];e="."===f||".."===f||""===f}else e=!1;for(var h=0,l=a.length;l>=0;l--){var d=a[l];"."===d?r(a,l):".."===d?(r(a,l),h++):h&&(r(a,l),h--)}if(!s)for(;h--;h)a.unshift("..");!s||""===a[0]||a[0]&&i(a[0])||a.unshift("");var v=a.join("/");return e&&"/"!==v.substr(-1)&&(v+="/"),v};function c(n){return n.valueOf?n.valueOf():Object.prototype.valueOf.call(n)}const u=function n(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every((function(t,o){return n(t,e[o])}));if("object"==typeof t||"object"==typeof e){var o=c(t),i=c(e);return o!==t||i!==e?n(o,i):Object.keys(Object.assign({},t,e)).every((function(o){return n(t[o],e[o])}))}return!1};var s=e(2177);function f(n){return"/"===n.charAt(0)?n:"/"+n}function h(n){return"/"===n.charAt(0)?n.substr(1):n}function l(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function d(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function v(n){var t=n||"/",e="",o="",i=t.indexOf("#");-1!==i&&(o=t.substr(i),t=t.substr(0,i));var r=t.indexOf("?");return-1!==r&&(e=t.substr(r),t=t.substr(0,r)),{pathname:t,search:"?"===e?"":e,hash:"#"===o?"":o}}function p(n){var t=n.pathname,e=n.search,o=n.hash,i=t||"/";return e&&"?"!==e&&(i+="?"===e.charAt(0)?e:"?"+e),o&&"#"!==o&&(i+="#"===o.charAt(0)?o:"#"+o),i}function w(n,t,e,i){var r;"string"==typeof n?(r=v(n)).state=t:(void 0===(r=(0,o.Z)({},n)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==t&&void 0===r.state&&(r.state=t));try{r.pathname=decodeURI(r.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(r.key=e),i?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=a(r.pathname,i.pathname)):r.pathname=i.pathname:r.pathname||(r.pathname="/"),r}function g(n,t){return n.pathname===t.pathname&&n.search===t.search&&n.hash===t.hash&&n.key===t.key&&u(n.state,t.state)}function m(){var n=null;var t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,o,i){if(null!=n){var r="function"==typeof n?n(t,e):n;"string"==typeof r?"function"==typeof o?o(r,i):i(!0):i(!1!==r)}else i(!0)},appendListener:function(n){var e=!0;function o(){e&&n.apply(void 0,arguments)}return t.push(o),function(){e=!1,t=t.filter((function(n){return n!==o}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];t.forEach((function(n){return n.apply(void 0,e)}))}}}var y=!("undefined"==typeof window||!window.document||!window.document.createElement);function P(n,t){t(window.confirm(n))}var O="popstate",x="hashchange";function b(){try{return window.history.state||{}}catch(n){return{}}}function k(n){void 0===n&&(n={}),y||(0,s.Z)(!1);var t,e=window.history,i=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,r=!(-1===window.navigator.userAgent.indexOf("Trident")),a=n,c=a.forceRefresh,u=void 0!==c&&c,h=a.getUserConfirmation,v=void 0===h?P:h,g=a.keyLength,k=void 0===g?6:g,A=n.basename?d(f(n.basename)):"";function T(n){var t=n||{},e=t.key,o=t.state,i=window.location,r=i.pathname+i.search+i.hash;return A&&(r=l(r,A)),w(r,o,e)}function L(){return Math.random().toString(36).substr(2,k)}var E=m();function C(n){(0,o.Z)(q,n),q.length=e.length,E.notifyListeners(q.location,q.action)}function S(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||I(T(n.state))}function H(){I(T(b()))}var U=!1;function I(n){if(U)U=!1,C();else{E.confirmTransitionTo(n,"POP",v,(function(t){t?C({action:"POP",location:n}):function(n){var t=q.location,e=Z.indexOf(t.key);-1===e&&(e=0);var o=Z.indexOf(n.key);-1===o&&(o=0);var i=e-o;i&&(U=!0,M(i))}(n)}))}}var R=T(b()),Z=[R.key];function j(n){return A+p(n)}function M(n){e.go(n)}var B=0;function F(n){1===(B+=n)&&1===n?(window.addEventListener(O,S),r&&window.addEventListener(x,H)):0===B&&(window.removeEventListener(O,S),r&&window.removeEventListener(x,H))}var _=!1;var q={length:e.length,action:"POP",location:R,createHref:j,push:function(n,t){var o="PUSH",r=w(n,t,L(),q.location);E.confirmTransitionTo(r,o,v,(function(n){if(n){var t=j(r),a=r.key,c=r.state;if(i)if(e.pushState({key:a,state:c},null,t),u)window.location.href=t;else{var s=Z.indexOf(q.location.key),f=Z.slice(0,s+1);f.push(r.key),Z=f,C({action:o,location:r})}else window.location.href=t}}))},replace:function(n,t){var o="REPLACE",r=w(n,t,L(),q.location);E.confirmTransitionTo(r,o,v,(function(n){if(n){var t=j(r),a=r.key,c=r.state;if(i)if(e.replaceState({key:a,state:c},null,t),u)window.location.replace(t);else{var s=Z.indexOf(q.location.key);-1!==s&&(Z[s]=r.key),C({action:o,location:r})}else window.location.replace(t)}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(n){void 0===n&&(n=!1);var t=E.setPrompt(n);return _||(F(1),_=!0),function(){return _&&(_=!1,F(-1)),t()}},listen:function(n){var t=E.appendListener(n);return F(1),function(){F(-1),t()}}};return q}var A="hashchange",T={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+h(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:h,decodePath:f},slash:{encodePath:f,decodePath:f}};function L(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function E(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function C(n){window.location.replace(L(window.location.href)+"#"+n)}function S(n){void 0===n&&(n={}),y||(0,s.Z)(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),i=e.getUserConfirmation,r=void 0===i?P:i,a=e.hashType,c=void 0===a?"slash":a,u=n.basename?d(f(n.basename)):"",h=T[c],v=h.encodePath,g=h.decodePath;function O(){var n=g(E());return u&&(n=l(n,u)),w(n)}var x=m();function b(n){(0,o.Z)(_,n),_.length=t.length,x.notifyListeners(_.location,_.action)}var k=!1,S=null;function H(){var n,t,e=E(),o=v(e);if(e!==o)C(o);else{var i=O(),a=_.location;if(!k&&(t=i,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(S===p(i))return;S=null,function(n){if(k)k=!1,b();else{var t="POP";x.confirmTransitionTo(n,t,r,(function(e){e?b({action:t,location:n}):function(n){var t=_.location,e=Z.lastIndexOf(p(t));-1===e&&(e=0);var o=Z.lastIndexOf(p(n));-1===o&&(o=0);var i=e-o;i&&(k=!0,j(i))}(n)}))}}(i)}}var U=E(),I=v(U);U!==I&&C(I);var R=O(),Z=[p(R)];function j(n){t.go(n)}var M=0;function B(n){1===(M+=n)&&1===n?window.addEventListener(A,H):0===M&&window.removeEventListener(A,H)}var F=!1;var _={length:t.length,action:"POP",location:R,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=L(window.location.href)),e+"#"+v(u+p(n))},push:function(n,t){var e="PUSH",o=w(n,void 0,void 0,_.location);x.confirmTransitionTo(o,e,r,(function(n){if(n){var t=p(o),i=v(u+t);if(E()!==i){S=t,function(n){window.location.hash=n}(i);var r=Z.lastIndexOf(p(_.location)),a=Z.slice(0,r+1);a.push(t),Z=a,b({action:e,location:o})}else b()}}))},replace:function(n,t){var e="REPLACE",o=w(n,void 0,void 0,_.location);x.confirmTransitionTo(o,e,r,(function(n){if(n){var t=p(o),i=v(u+t);E()!==i&&(S=t,C(i));var r=Z.indexOf(p(_.location));-1!==r&&(Z[r]=t),b({action:e,location:o})}}))},go:j,goBack:function(){j(-1)},goForward:function(){j(1)},block:function(n){void 0===n&&(n=!1);var t=x.setPrompt(n);return F||(B(1),F=!0),function(){return F&&(F=!1,B(-1)),t()}},listen:function(n){var t=x.appendListener(n);return B(1),function(){B(-1),t()}}};return _}function H(n,t,e){return Math.min(Math.max(n,t),e)}function U(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,i=t.initialEntries,r=void 0===i?["/"]:i,a=t.initialIndex,c=void 0===a?0:a,u=t.keyLength,s=void 0===u?6:u,f=m();function h(n){(0,o.Z)(P,n),P.length=P.entries.length,f.notifyListeners(P.location,P.action)}function l(){return Math.random().toString(36).substr(2,s)}var d=H(c,0,r.length-1),v=r.map((function(n){return w(n,void 0,"string"==typeof n?l():n.key||l())})),g=p;function y(n){var t=H(P.index+n,0,P.entries.length-1),o=P.entries[t];f.confirmTransitionTo(o,"POP",e,(function(n){n?h({action:"POP",location:o,index:t}):h()}))}var P={length:v.length,action:"POP",location:v[d],index:d,entries:v,createHref:g,push:function(n,t){var o="PUSH",i=w(n,t,l(),P.location);f.confirmTransitionTo(i,o,e,(function(n){if(n){var t=P.index+1,e=P.entries.slice(0);e.length>t?e.splice(t,e.length-t,i):e.push(i),h({action:o,location:i,index:t,entries:e})}}))},replace:function(n,t){var o="REPLACE",i=w(n,t,l(),P.location);f.confirmTransitionTo(i,o,e,(function(n){n&&(P.entries[P.index]=i,h({action:o,location:i}))}))},go:y,goBack:function(){y(-1)},goForward:function(){y(1)},canGo:function(n){var t=P.index+n;return t>=0&&t<P.entries.length},block:function(n){return void 0===n&&(n=!1),f.setPrompt(n)},listen:function(n){return f.appendListener(n)}};return P}},2177:(n,t,e)=>{e.d(t,{Z:()=>i});var o="Invariant failed";const i=function(n,t){if(!n)throw new Error(o)}}}]);
//# sourceMappingURL=71.1aead163fddc0a27de87.js.map