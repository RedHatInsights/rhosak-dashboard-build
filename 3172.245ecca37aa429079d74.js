(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[3172],{61149:(e,n,t)=>{"use strict";t.r(n),t.d(n,{I18nContext:()=>v,I18nextProvider:()=>Q,Trans:()=>K,Translation:()=>G,composeInitialProps:()=>P,date:()=>re,getDefaults:()=>y,getI18n:()=>j,getInitialProps:()=>x,initReactI18next:()=>w,number:()=>oe,plural:()=>ce,select:()=>ae,selectOrdinal:()=>se,setDefaults:()=>m,setI18n:()=>O,time:()=>ie,useSSR:()=>X,useTranslation:()=>_,withSSR:()=>te,withTranslation:()=>Y});var r=t(45987),i=t(71002),o=t(4942),a=t(99345),c=t.n(a),s=t(81613),u=t(12020),l=t(15671),p=t(43144);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g,h={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},v=c().createContext();function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h=d(d({},h),e)}function y(){return h}var b=function(){function e(){(0,l.Z)(this,e),this.usedNamespaces={}}return(0,p.Z)(e,[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function O(e){g=e}function j(){return g}var w={type:"3rdParty",init:function(e){m(e.options.react),O(e)}};function P(e){return function(n){return new Promise((function(t){var r=x();e.getInitialProps?e.getInitialProps(n).then((function(e){t(d(d({},e),r))})):t(r)}))}}function x(){var e=j(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function E(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var S={};function k(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&S[n[0]]||("string"==typeof n[0]&&(S[n[0]]=new Date),E.apply(void 0,n))}function N(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function I(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],i=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!a(r,e)||i&&!a(o,e))))}function Z(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return k("i18n.languages were undefined or empty",n.languages),!0;var r=void 0!==n.options.ignoreJSONStructure;return r?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):I(e,n,t)}function D(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var C=["format"],R=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function A(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function z(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function B(e){return Array.isArray(e)?e:[e]}function U(e,n){if(!e)return"";var t="",o=B(e),a=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return o.forEach((function(e,o){if("string"==typeof e)t+="".concat(e);else if(c().isValidElement(e)){var s=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)t+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)t+="<".concat(o,"></").concat(o,">");else if(u&&1===s&&"string"==typeof l)t+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var p=U(l,n);t+="<".concat(o,">").concat(p,"</").concat(o,">")}else t+="<".concat(o,"></").concat(o,">")}else if(null===e)E("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,i.Z)(e)){var f=e.format,d=(0,r.Z)(e,C),g=Object.keys(d);if(1===g.length){var h=f?"".concat(g[0],", ").concat(f):g[0];t+="{{".concat(h,"}}")}else E("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else E("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function H(e,n,t,r,o,a){if(""===n)return[];var l=r.transKeepBasicHtmlNodesFor||[],p=n&&new RegExp(l.join("|")).test(n);if(!e&&!p)return[n];var f={};!function e(n){B(n).forEach((function(n){"string"!=typeof n&&(A(n)?e(z(n)):"object"!==(0,i.Z)(n)||c().isValidElement(n)||Object.assign(f,n))}))}(e);var d=s.Z.parse("<0>".concat(n,"</0>")),g=L(L({},f),o);function h(e,n,t){var r=z(e),i=m(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return c().isValidElement(e)}))}(r)&&0===i.length?r:i}function v(e,n,t,r,i){e.dummy&&(e.children=n),t.push(c().cloneElement(e,L(L({},e.props),{},{key:r}),i?void 0:n))}function m(n,o,s){var f=B(n);return B(o).reduce((function(n,o,d){var y,b,O,j=o.children&&o.children[0]&&o.children[0].content&&t.services.interpolator.interpolate(o.children[0].content,g,t.language);if("tag"===o.type){var w=f[parseInt(o.name,10)];!w&&1===s.length&&s[0][o.name]&&(w=s[0][o.name]),w||(w={});var P=0!==Object.keys(o.attrs).length?(y={props:o.attrs},(O=L({},b=w)).props=Object.assign(y.props,b.props),O):w,x=c().isValidElement(P),E=x&&A(o,!0)&&!o.voidElement,S=p&&"object"===(0,i.Z)(P)&&P.dummy&&!x,k="object"===(0,i.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"==typeof P){var N=t.services.interpolator.interpolate(P,g,t.language);n.push(N)}else if(A(P)||E){v(P,h(P,o,s),n,d)}else if(S){var I=m(f,o.children,s);n.push(c().cloneElement(P,L(L({},P.props),{},{key:d}),I))}else if(Number.isNaN(parseFloat(o.name))){if(k)v(P,h(P,o,s),n,d,o.voidElement);else if(r.transSupportBasicHtmlNodes&&l.indexOf(o.name)>-1)if(o.voidElement)n.push(c().createElement(o.name,{key:"".concat(o.name,"-").concat(d)}));else{var Z=m(f,o.children,s);n.push(c().createElement(o.name,{key:"".concat(o.name,"-").concat(d)},Z))}else if(o.voidElement)n.push("<".concat(o.name," />"));else{var D=m(f,o.children,s);n.push("<".concat(o.name,">").concat(D,"</").concat(o.name,">"))}}else if("object"!==(0,i.Z)(P)||x)1===o.children.length&&j?n.push(c().cloneElement(P,L(L({},P.props),{},{key:d}),j)):n.push(c().cloneElement(P,L(L({},P.props),{},{key:d})));else{var C=o.children[0]?j:null;C&&n.push(C)}}else if("text"===o.type){var R=r.transWrapTextNodes,T=a?(0,u.A)(t.services.interpolator.interpolate(o.content,g,t.language)):t.services.interpolator.interpolate(o.content,g,t.language);R?n.push(c().createElement(R,{key:"".concat(o.name,"-").concat(d)},T)):n.push(T)}return n}),[])}return z(m([{dummy:!0,children:e||[]}],d,B(e||[]))[0])}function K(e){var n=e.children,t=e.count,i=e.parent,o=e.i18nKey,s=e.context,u=e.tOptions,l=void 0===u?{}:u,p=e.values,f=e.defaults,d=e.components,g=e.ns,h=e.i18n,m=e.t,b=e.shouldUnescape,O=(0,r.Z)(e,R),w=(0,a.useContext)(v)||{},P=w.i18n,x=w.defaultNS,E=h||P||j();if(!E)return k("You will need to pass in an i18next instance by using i18nextReactModule"),n;var S=m||E.t.bind(E)||function(e){return e};s&&(l.context=s);var N=L(L({},y()),E.options&&E.options.react),I=g||S.ns||x||E.options&&E.options.defaultNS;I="string"==typeof I?[I]:I||["translation"];var Z=f||U(n,N)||N.transEmptyNodeValue||o,D=N.hashTransKey,C=o||(D?D(Z):Z),T=p?l.interpolation:{interpolation:L(L({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},A=L(L(L(L({},l),{},{count:t},p),T),{},{defaultValue:Z,ns:I}),z=H(d||n,C?S(C,A):Z,E,N,A,b),B=void 0!==i?i:N.defaultTransParent;return B?c().createElement(B,O,z):z}var V=t(29439);function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,a.useContext)(v)||{},i=r.i18n,o=r.defaultNS,c=t||i||j();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new b),!c){k("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}c.options.react&&void 0!==c.options.react.wait&&k("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=W(W(W({},y()),c.options.react),n),p=l.useSuspense,f=l.keyPrefix,d=e||o||c.options&&c.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(d);var g=(c.isInitialized||c.initializedStoreOnce)&&d.every((function(e){return Z(e,c,l)}));function h(){return c.getFixedT(null,"fallback"===l.nsMode?d:d[0],f)}var m=(0,a.useState)(h),O=(0,V.Z)(m,2),w=O[0],P=O[1],x=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){x.current&&P(h)}return x.current=!0,g||p||N(c,d,(function(){x.current&&P(h)})),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){x.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[c,d.join()]);var E=(0,a.useRef)(!0);(0,a.useEffect)((function(){x.current&&!E.current&&P(h),E.current=!1}),[c]);var S=[w,c,g];if(S.t=w,S.i18n=c,S.ready=g,g)return S;if(!g&&!p)return S;throw new Promise((function(e){N(c,d,(function(){e()}))}))}var M=["forwardedRef"];function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function i(i){var o=i.forwardedRef,a=(0,r.Z)(i,M),s=_(e,a),u=(0,V.Z)(s,3),l=u[0],p=u[1],f=u[2],d=q(q({},a),{},{t:l,i18n:p,tReady:f});return n.withRef&&o?d.ref=o:!n.withRef&&o&&(d.forwardedRef=o),c().createElement(t,d)}i.displayName="withI18nextTranslation(".concat(D(t),")"),i.WrappedComponent=t;return n.withRef?c().forwardRef((function(e,n){return c().createElement(i,Object.assign({},e,{forwardedRef:n}))})):i}}var J=["ns","children"];function G(e){var n=e.ns,t=e.children,i=_(n,(0,r.Z)(e,J)),o=(0,V.Z)(i,3),a=o[0],c=o[1],s=o[2];return t(a,{i18n:c,lng:c.language},s)}function Q(e){var n=e.i18n,t=e.defaultNS,r=e.children,i=(0,a.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,a.createElement)(v.Provider,{value:i},r)}function X(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.i18n,i=(0,a.useContext)(v)||{},o=i.i18n,c=r||o||j();c.options&&c.options.isClone||(e&&!c.initializedStoreOnce&&(c.services.resourceStore.data=e,c.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),c.options.ns),c.initializedStoreOnce=!0,c.isInitialized=!0),n&&!c.initializedLanguageOnce&&(c.changeLanguage(n),c.initializedLanguageOnce=!0))}var ee=["initialI18nStore","initialLanguage"];function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function te(){return function(e){function n(n){var t=n.initialI18nStore,i=n.initialLanguage,a=(0,r.Z)(n,ee);return X(t,i),c().createElement(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},a))}return n.getInitialProps=P(e),n.displayName="withI18nextSSR(".concat(D(e),")"),n.WrappedComponent=e,n}}var re=function(){return""},ie=function(){return""},oe=function(){return""},ae=function(){return""},ce=function(){return""},se=function(){return""}},12020:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var r="".replace,i=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,o={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'};function a(e){return r.call(e,i,c)}function c(e){return o[e]}},81613:(e,n,t)=>{"use strict";t.d(n,{Z:()=>f});var r=t(71739),i=t.n(r),o=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function a(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(i()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var a=new RegExp(o),c=null;null!==(c=a.exec(e));)if(c[0].trim())if(c[1]){var s=c[1].trim(),u=[s,""];s.indexOf("=")>-1&&(u=s.split("=")),n.attrs[u[0]]=u[1],a.lastIndex--}else c[2]&&(n.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return n}var c=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,s=/^\s*$/,u=Object.create(null);function l(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(l,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var p={parse:function(e,n){n||(n={}),n.components||(n.components=u);var t,r=[],i=[],o=-1,l=!1;if(0!==e.indexOf("<")){var p=e.indexOf("<");r.push({type:"text",content:-1===p?e:e.substring(0,p)})}return e.replace(c,(function(c,u){if(l){if(c!=="</"+t.name+">")return;l=!1}var p,f="/"!==c.charAt(1),d=c.startsWith("\x3c!--"),g=u+c.length,h=e.charAt(g);if(d){var v=a(c);return o<0?(r.push(v),r):((p=i[o]).children.push(v),r)}if(f&&(o++,"tag"===(t=a(c)).type&&n.components[t.name]&&(t.type="component",l=!0),t.voidElement||l||!h||"<"===h||t.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===o&&r.push(t),(p=i[o-1])&&p.children.push(t),i[o]=t),(!f||t.voidElement)&&(o>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(o--,t=-1===o?r:i[o]),!l&&"<"!==h&&h)){p=-1===o?r:i[o].children;var m=e.indexOf("<",g),y=e.slice(g,-1===m?void 0:m);s.test(y)&&(y=" "),(m>-1&&o+p.length>=0||" "!==y)&&p.push({type:"text",content:y})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+l("",n)}),"")}};const f=p},71739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},45987:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(63366);function i(e,n){if(null==e)return{};var t,i,o=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},63366:(e,n,t)=>{"use strict";function r(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}t.d(n,{Z:()=>r})},29439:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r=t(83878);var i=t(88192),o=t(25267);function a(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}}(e,n)||(0,i.Z)(e,n)||(0,o.Z)()}}}]);
//# sourceMappingURL=3172.245ecca37aa429079d74.js.map