"use strict";(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[4163],{78866:(e,n,t)=>{t.d(n,{I:()=>l});var i=t(70655),r=t(85893),s=t(93264),o=t(97644),d=t(68698),a=t(83463);const c=()=>{const e=(0,s.useRef)(!1);return(0,s.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),e};const l=(0,s.memo)((({scope:e,module:n,render:t,fallback:o})=>{console.log("Dynamic federated module",e,n);const a=c(),{getModuleInfo:l,modules:m}=(0,d.N)(),[h,v]=(0,s.useState)();return(0,s.useEffect)((()=>{(0,i.mG)(void 0,void 0,void 0,(function*(){const n=yield l(m[e].basePath,e,m[e].fallbackBasePath);a.current&&v(n)}))}),[e,m,l,a]),void 0!==h?(0,r.jsx)(u,{scope:e,module:n,render:t,moduleInfo:h}):void 0!==o?(0,r.jsx)(r.Fragment,{children:o}):null}),((e,n)=>e.scope===n.scope&&e.module===n.module)),u=({moduleInfo:e,fallback:n,scope:d,render:l,module:u})=>{const{ready:m,failed:h}=(e=>{const n=c(),[t,i]=(0,s.useState)(!1),[r,o]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{let t;if(n.current){if(!e)return void o(!0);t=document.createElement("script"),t.src=e,t.type="text/javascript",t.async=!0,i(!1),o(!1),t.onload=()=>{console.log(`Dynamic federated module Loaded: ${e}`),i(!0)},t.onerror=()=>{console.error(`Dynamic federated module Error: ${e}`),i(!1),o(!0)},document.head.appendChild(t)}return()=>{t&&(console.log(`Dynamic federated module Removed: ${e}`),document.head.removeChild(t))}}),[n,e]),{ready:t,failed:r}})(e.entryPoint);if(m&&!h){const n=(0,s.lazy)(function(e,n){return()=>(0,i.mG)(this,void 0,void 0,(function*(){yield t.I("default");const i=window[e];yield i.init(t.S.default);const r=(yield i.get(n))();return console.debug(`loaded ${n} from ${e}`),r}))}(d,u)),c=()=>e.basePath;return(0,r.jsx)(o.AssetsContext.Provider,Object.assign({value:{getPath:c}},{children:(0,r.jsx)(s.Suspense,Object.assign({fallback:(0,r.jsx)(a.AppServicesLoading,{})},{children:l(n)}))}))}return n?(0,r.jsx)(r.Fragment,{children:n}):null}},75485:(e,n,t)=>{t.r(n);var i=t(85893),r=t(3644),s=t.n(r),o=t(70655),d=t(93264),a=t(86706),c=t(73685),l=t(94500),u=t.n(l),m=t(71631),h=t(76166),v=t(40493),b=t(26836),f=t(18047),g=t(31589),p=t(36494),x=t(37687),j=t(71355),k=t(83463),y=t(97644),w=(t(79658),t(85169)),I=t(68698);null!==window.localStorage.getItem("xstate-inspect")&&(0,m.XY)({iframe:!1});const P=({children:e})=>{const[n,t]=(0,d.useState)(),r=(0,v.aC)(),s=(0,a.useDispatch)(),l=(0,v.gI)();(0,d.useEffect)((()=>{(0,o.mG)(void 0,void 0,void 0,(function*(){const e=yield l();t(e)}))}),[l]);const u={addAlert:({title:e,variant:n,description:t,dataTestId:i,autoDismiss:r,dismissable:o,dismissDelay:d,requestId:a,sentryId:c})=>{s((0,j.addNotification)({title:e,variant:n,description:t,dataTestId:i,autoDismiss:r||!0,dismissable:o||!0,dismissDelay:d||8e3,requestId:a,sentryId:c}))}},m=(0,x.Z)(window.location.pathname),{kas:h,getUsername:b,isOrgAdmin:f}=r;return(0,i.jsx)(y.AuthContext.Provider,Object.assign({value:r},{children:(0,i.jsx)(w.V.Provider,Object.assign({value:{getToken:h.getToken,getUsername:b,isOrgAdmin:f,tokenEndPointUrl:null==n?void 0:n.token_url}},{children:(0,i.jsx)(y.AlertContext.Provider,Object.assign({value:u},{children:(0,i.jsx)(k.ModalProvider,{children:(0,i.jsx)(c.BrowserRouter,Object.assign({basename:m},{children:(0,i.jsx)(I.Gg,{children:e})}))})}))}))}))},C=({children:e})=>void 0===(0,d.useContext)(y.ConfigContext)?(0,i.jsx)(k.AppServicesLoading,{}):(0,i.jsx)(P,{children:e}),O=(0,d.memo)((({children:e})=>(0,i.jsx)(a.Provider,Object.assign({store:(0,p.S)(u()).getStore()},{children:(0,i.jsx)(k.I18nProvider,Object.assign({lng:"en",resources:{en:{common:()=>t.e(3389).then(t.t.bind(t,3389,19)),"create-kafka-instance":()=>t.e(2192).then(t.t.bind(t,12192,19)),kafka:()=>t.e(4309).then(t.t.bind(t,94309,19)),metrics:()=>t.e(4564).then(t.t.bind(t,84564,19)),overview:()=>t.e(6449).then(t.t.bind(t,96449,19)),datascienceoverview:()=>t.e(2844).then(t.t.bind(t,2844,19)),apimgmtoverview:()=>t.e(6651).then(t.t.bind(t,26651,19)),kafkaoverview:()=>t.e(8891).then(t.t.bind(t,18891,19)),"message-browser":()=>t.e(4431).then(t.t.bind(t,24431,19)),appTemporaryFixMe:()=>t.e(5174).then(t.t.bind(t,65174,19)),kafkaTemporaryFixMe:()=>t.e(1517).then(t.t.bind(t,61517,19)),kasTemporaryFixMe:()=>t.e(784).then(t.t.bind(t,784,19)),srsTemporaryFixMe:()=>t.e(9604).then(t.t.bind(t,79604,19)),"manage-kafka-permissions":()=>t.e(3972).then(t.t.bind(t,23972,19)),"overview-v2":()=>t.e(2646).then(t.t.bind(t,2646,19)),"kafkaoverview-v2":()=>t.e(4073).then(t.t.bind(t,64073,19)),"connection-tab-p1":()=>t.e(1465).then(t.t.bind(t,31465,19)),"service-registry":()=>t.e(4767).then(t.t.bind(t,14767,19)),"kafkaoverview-v3":()=>t.e(347).then(t.t.bind(t,20347,19)),"overview-v4":()=>t.e(8275).then(t.t.bind(t,28275,19)),"connection-tab":()=>t.e(9260).then(t.t.bind(t,69260,19)),topic:()=>t.e(1908).then(t.t.bind(t,71908,19))}},debug:!0},{children:(0,i.jsx)(g.O1,{children:(0,i.jsx)(b.N,{children:(0,i.jsx)(f.B,{children:(0,i.jsx)(C,{children:e})})})})}))})))),S=document.getElementById("root");s().render((0,i.jsx)((()=>(0,i.jsx)(O,{children:(0,i.jsx)(h.Z,{})})),{}),S)}}]);
//# sourceMappingURL=4163.a02a0091139c60fcc79f.js.map