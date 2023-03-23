var applicationServices;(()=>{"use strict";var e,r,t,a,n,o,i,d,f,c,l,s,u,p,b,h,v,m,g,y={15452:(e,r,t)=>{var a={"./RootApp":()=>Promise.all([t.e(6864),t.e(4018),t.e(8708),t.e(3264),t.e(9038),t.e(5754),t.e(2623)]).then((()=>()=>t(50058))),"./Guides":()=>Promise.all([t.e(6864),t.e(4018),t.e(8708),t.e(3264),t.e(9038),t.e(5754),t.e(1956)]).then((()=>()=>t(62552))),"./TopicSchema":()=>Promise.all([t.e(6864),t.e(4018),t.e(8708),t.e(3264),t.e(9038),t.e(5754),t.e(305)]).then((()=>()=>t(36595)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},w={};function P(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,loaded:!1,exports:{}};return y[e].call(t.exports,t,t.exports,P),t.loaded=!0,t.exports}P.m=y,P.c=w,P.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return P.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,P.t=function(t,a){if(1&a&&(t=this(t)),8&a)return t;if("object"==typeof t&&t){if(4&a&&t.__esModule)return t;if(16&a&&"function"==typeof t.then)return t}var n=Object.create(null);P.r(n);var o={};e=e||[null,r({}),r([]),r(r)];for(var i=2&a&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>t[e]));return o.default=()=>t,P.d(n,o),n},P.d=(e,r)=>{for(var t in r)P.o(r,t)&&!P.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},P.f={},P.e=e=>Promise.all(Object.keys(P.f).reduce(((r,t)=>(P.f[t](e,r),r)),[])),P.u=e=>e+"."+{305:"3156b31ed97febe36cf4",347:"080738f7d8ae16857d8f",784:"fab8a389cd95b455b6c7",1132:"664660127997e9a74527",1165:"32e3d23df13d541a7353",1465:"62aa4e80e4a9b10edd7b",1517:"d477a8311265e9ed509d",1908:"8bb57ec2bbf2fb34d35c",1956:"9806199d2c1bd12e8889",2192:"220820bb3ec671597e52",2352:"df684ba1d6bdaf258b42",2623:"a2b992825f9c7cd67c4a",2646:"4b939c1cdbcda8d40bd3",2844:"edec8fa04e5cf9f60cd2",3264:"a77e5735bb0695cb9556",3389:"8f2ec83d4e86931b440d",3935:"a501fd91a8f9de58fdde",3972:"d90d08e86904fe39ea2b",3998:"c1d14154eb00c218a722",4018:"145476859705414df27f",4035:"5b9676a8f79b7990a272",4073:"6b8fb72e06aa0deb24d3",4309:"034ef6ef8d80fe34cc89",4431:"d40864611ecf9b9a7147",4455:"fe155a8c4e8992e85a37",4564:"eadd5e319e4897b6b2ca",4615:"d3d737d2a6adb9b0b085",4767:"33a381293d5d36b832c6",4809:"7bddd35221d74e73774e",4880:"a2020d0f7f3747089fd5",5110:"5e82caed355188e5f933",5174:"ec53b19c908049ca7d4b",5190:"8b9a0f24b98fc3113681",5754:"0d44d43a401875bced11",6264:"55627626a4ac84a72077",6449:"dc46dced1079925b79a5",6651:"99a2e2df98477eff0891",6864:"4c3203146070dec78751",7294:"2a2a60650f6ae69f9b78",7382:"aa4428a3422fb6455132",7418:"35eff8d4e504ce3008e2",7498:"440eb0f9090412935d09",8007:"8f22a4a9c226ba097b7b",8174:"cd2519350bfc4df73c50",8275:"64b878af737794f150f4",8571:"01b71c396b64d1dd691b",8679:"555acb8de84207fbccd6",8708:"8f11b39942bb71d5006a",8721:"e3fbb201dc9c3edbd96d",8891:"27bb47b3267021fa3821",9038:"8f941f40d36980c3024f",9132:"148ed0f96853c2604ee7",9260:"d5327157b520ff097b56",9604:"4cd626dc60217c1863d8"}[e]+".js",P.miniCssF=e=>({305:"f0272a77",1956:"f0272a77",2623:"f0272a77"}[e]+".css"),P.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),P.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},a="application-services-ui:",P.l=(e,r,n,o)=>{if(t[e])t[e].push(r);else{var i,d;if(void 0!==n)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var l=f[c];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+n){i=l;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,P.nc&&i.setAttribute("nonce",P.nc),i.setAttribute("data-webpack",a+n),i.src=e),t[e]=[r];var s=(r,a)=>{i.onerror=i.onload=null,clearTimeout(u);var n=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},u=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),d&&document.head.appendChild(i)}},P.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{P.S={};var e={},r={};P.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];P.o(P.S,t)||(P.S[t]={});var o=P.S[t],i="application-services-ui",d=(e,r,t,a)=>{var n=o[e]=o[e]||{},d=n[r];(!d||!d.loaded&&(!a!=!d.eager?a:i>d.from))&&(n[r]={get:t,from:i,eager:!!a})},f=[];if("default"===t)d("@rhoas/app-services-ui-components","2.20.7",(()=>Promise.all([P.e(6864),P.e(4018),P.e(7498),P.e(5110),P.e(3264),P.e(9038),P.e(4615)]).then((()=>()=>P(25110))))),d("@rhoas/app-services-ui-shared","0.16.6",(()=>Promise.all([P.e(3264),P.e(5190)]).then((()=>()=>P(35190))))),d("@scalprum/react-core","0.4.1",(()=>Promise.all([P.e(6864),P.e(7498),P.e(4035),P.e(3264),P.e(8721)]).then((()=>()=>P(34035))))),d("react-dom","17.0.2",(()=>Promise.all([P.e(3935),P.e(3264),P.e(7418)]).then((()=>()=>P(73935))))),d("react-i18next","11.18.1",(()=>Promise.all([P.e(3264),P.e(1165)]).then((()=>()=>P(91165))))),d("react-i18next","11.18.6",(()=>Promise.all([P.e(3264),P.e(8174)]).then((()=>()=>P(58174))))),d("react-router-dom","5.2.1",(()=>Promise.all([P.e(7382),P.e(3264),P.e(8679)]).then((()=>()=>P(77382))))),d("react","17.0.2",(()=>P.e(7294).then((()=>()=>P(67294)))));return f.length?e[t]=Promise.all(f).then((()=>e[t]=1)):e[t]=1}}})(),P.p="/apps/application-services/",n=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},o=(e,r)=>{e=n(e),r=n(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var a=e[t],o=(typeof a)[0];if(t>=r.length)return"u"==o;var i=r[t],d=(typeof i)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;t++}},i=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,t+="u"==(typeof(d=e[n]))[0]?"-":(a>0?".":"")+(a=2,d);return t}var o=[];for(n=1;n<e.length;n++){var d=e[n];o.push(0===d?"not("+f()+")":1===d?"("+f()+" || "+f()+")":2===d?o.pop()+" "+o.pop():i(d))}return f();function f(){return o.pop().replace(/^\((.+)\)$/,"$1")}},d=(e,r)=>{if(0 in e){r=n(r);var t=e[0],a=t<0;a&&(t=-t-1);for(var o=0,i=1,f=!0;;i++,o++){var c,l,s=i<e.length?(typeof e[i])[0]:"";if(o>=r.length||"o"==(l=(typeof(c=r[o]))[0]))return!f||("u"==s?i>t&&!a:""==s!=a);if("u"==l){if(!f||"u"!=s)return!1}else if(f)if(s==l)if(i<=t){if(c!=e[i])return!1}else{if(a?c>e[i]:c<e[i])return!1;c!=e[i]&&(f=!1)}else if("s"!=s&&"n"!=s){if(a||i<=t)return!1;f=!1,i--}else{if(i<=t||l<s!=a)return!1;f=!1}else"s"!=s&&"n"!=s&&(f=!1,i--)}}var u=[],p=u.pop.bind(u);for(o=1;o<e.length;o++){var b=e[o];u.push(1==b?p()|p():2==b?p()&p():b?d(b,r):!p())}return!!p()},f=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&o(e,r)?r:e),0)},c=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+i(a)+")",l=(e,r,t,a)=>{var n=f(e,t);return d(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(c(e,t,n,a)),u(e[t][n])},s=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!d(t,r)||e&&!o(e,r)?e:r),0))&&a[r]},u=e=>(e.loaded=1,e.get()),b=(p=e=>function(r,t,a,n){var o=P.I(r);return o&&o.then?o.then(e.bind(e,r,P.S[r],t,a,n)):e(r,P.S[r],t,a,n)})(((e,r,t,a,n)=>r&&P.o(r,t)?l(r,0,t,a):n())),h=p(((e,r,t,a,n)=>{var o=r&&P.o(r,t)&&s(r,t,a);return o?u(o):n()})),v={},m={93264:()=>b("default","react",[4,17,0,2],(()=>P.e(7294).then((()=>()=>P(67294))))),3644:()=>b("default","react-dom",[4,17,0,2],(()=>P.e(3935).then((()=>()=>P(73935))))),73685:()=>h("default","react-router-dom",[4,5,2,1],(()=>P.e(7382).then((()=>()=>P(77382))))),24462:()=>b("default","@rhoas/app-services-ui-shared",[2,0,16,4],(()=>P.e(3998).then((()=>()=>P(35190))))),48955:()=>b("default","react-i18next",[4,11,18,1],(()=>P.e(4455).then((()=>()=>P(91165))))),15847:()=>b("default","react-i18next",[4,11,18,6],(()=>P.e(8007).then((()=>()=>P(58174))))),54025:()=>b("default","@scalprum/react-core",[0],(()=>Promise.all([P.e(7498),P.e(4035)]).then((()=>()=>P(34035))))),70959:()=>b("default","@rhoas/app-services-ui-components",[4,2,20,7],(()=>Promise.all([P.e(7498),P.e(5110),P.e(4615)]).then((()=>()=>P(25110))))),97644:()=>b("default","@rhoas/app-services-ui-shared",[4,0,16,6],(()=>P.e(3998).then((()=>()=>P(35190)))))},g={3264:[93264],4615:[24462,48955],5754:[15847,54025,70959,97644],9038:[3644,73685]},P.f.consumes=(e,r)=>{P.o(g,e)&&g[e].forEach((e=>{if(P.o(v,e))return r.push(v[e]);var t=r=>{v[e]=0,P.m[e]=t=>{delete P.c[e],t.exports=r()}},a=r=>{delete v[e],P.m[e]=t=>{throw delete P.c[e],r}};try{var n=m[e]();n.then?r.push(v[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{if("undefined"!=typeof document){var e=e=>new Promise(((r,t)=>{var a=P.miniCssF(e),n=P.p+a;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var n=(i=t[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var i;if((n=(i=o[a]).getAttribute("data-href"))===e||n===r)return i}})(a,n))return r();((e,r,t,a,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=t=>{if(o.onerror=o.onload=null,"load"===t.type)a();else{var i=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.href||r,f=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=i,f.request=d,o.parentNode&&o.parentNode.removeChild(o),n(f)}},o.href=r,(e=>{const r=document.createElement("link");r.rel="preload",r.as="style",r.href=e.href,document.head.appendChild(r),document.head.appendChild(e)})(o)})(e,n,0,r,t)})),r={8015:0};P.f.miniCss=(t,a)=>{r[t]?a.push(r[t]):0!==r[t]&&{305:1,1956:1,2623:1}[t]&&a.push(r[t]=e(t).then((()=>{r[t]=0}),(e=>{throw delete r[t],e})))}}})(),(()=>{P.b=document.baseURI||self.location.href;var e={8015:0};P.f.j=(r,t)=>{var a=P.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(3264|4615|9038)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=P.p+P.u(r),i=new Error;P.l(o,(t=>{if(P.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,d]=t,f=0;if(o.some((r=>0!==e[r]))){for(a in i)P.o(i,a)&&(P.m[a]=i[a]);if(d)d(P)}for(r&&r(t);f<o.length;f++)n=o[f],P.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var S=P(15452);applicationServices=S})();
