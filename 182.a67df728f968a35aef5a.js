"use strict";(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[182],{62182:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(70655),a=n(75418),i=n.n(a),s=n(61084),o=n(68587),u=n(51363),c=n(27571),l=n.n(c),d=n(71987),m=n(96904),h=n(258),v=n(63559),f=n(708),g=n(71355),k=n(62043),p=n(36004),E=n(16530),T=function(){var e=window.insights,t=(0,m.useConfig)();i().useEffect((function(){if(null!=t){(0,r.__awaiter)(void 0,void 0,void 0,(function(){var n,a;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return[4,(0,h.bD)({url:t.masSso.authServerUrl,clientId:t.masSso.clientId,realm:t.masSso.realm},null===(a=e.chrome.auth)||void 0===a?void 0:a.getToken)];case 1:return n=r.sent(),c(n),f(!1),[2]}}))}))}}),[t,e.chrome.auth]);var n=(0,a.useState)(void 0),o=n[0],c=n[1],l=(0,a.useState)(!0),v=l[0],f=l[1],p=(0,s.useDispatch)();if(v||void 0===o)return i().createElement(k.g,null);var T=function(){return(0,h.DP)(e.chrome.auth.getToken)},_={getUsername:function(){return e.chrome.auth.getUser().then((function(e){return e.identity.user.username}))},isOrgAdmin:function(){return e.chrome.auth.getUser().then((function(e){return e.identity.user.is_org_admin}))},kafka:{getToken:T},kas:{getToken:e.chrome.auth.getToken},ams:{getToken:e.chrome.auth.getToken},srs:{getToken:e.chrome.auth.getToken},apicurio_registry:{getToken:T}},w={addAlert:function(e){var t=e.title,n=e.variant,r=e.description,a=e.dataTestId,i=e.autoDismiss,s=e.dismissable,o=e.dismissDelay,u=e.requestId,c=e.sentryId;p((0,g.wN)({title:t,variant:n,description:r,dataTestId:a,autoDismiss:i||!0,dismissable:s||!0,dismissDelay:o||8e3,requestId:u,sentryId:c}))}},S=function(e){var t=e.children,n=(0,E.useHistory)().location;return console.log("Route: "+n.pathname+n.search+", State: "+JSON.stringify(n.state)),t},y=(0,d.Z)(window.location.pathname);return i().createElement(m.AuthContext.Provider,{value:_},i().createElement(m.AlertContext.Provider,{value:w},i().createElement(E.BrowserRouter,{basename:y},i().createElement(E.Route,{render:function(){return i().createElement(S,null,i().createElement(u.Z,null))}}))))};const _=function(){return i().createElement(s.Provider,{store:(0,o.S1)(l()).getStore()},i().createElement(v.I18nextProvider,{i18n:f.Z},i().createElement(p.N,null,i().createElement(T,null))))}}}]);
//# sourceMappingURL=182.a67df728f968a35aef5a.js.map