"use strict";(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[636],{86636:(e,t,n)=>{n.r(t);var r=n(75418),a=n.n(r),i=n(66235),o=n.n(i),s=n(70655),u=n(61084),c=n(68587),l=n(51363),m=n(27571),d=n.n(m),h=n(71987),v=n(96904),g=n(258),f=n(63559),k=n(708),E=n(71355),p=n(62043),T=n(36004),_=n(16530),w=function(){var e=window.insights,t=(0,v.useConfig)();a().useEffect((function(){if(null!=t){(0,s.__awaiter)(void 0,void 0,void 0,(function(){var n,r;return(0,s.__generator)(this,(function(a){switch(a.label){case 0:return[4,(0,g.bD)({url:t.masSso.authServerUrl,clientId:t.masSso.clientId,realm:t.masSso.realm},null===(r=e.chrome.auth)||void 0===r?void 0:r.getToken)];case 1:return n=a.sent(),o(n),d(!1),[2]}}))}))}}),[t,e.chrome.auth]);var n=(0,r.useState)(void 0),i=n[0],o=n[1],c=(0,r.useState)(!0),m=c[0],d=c[1],f=(0,u.useDispatch)();if(m||void 0===i)return a().createElement(p.g,null);var k=function(){return(0,g.DP)(e.chrome.auth.getToken)},T={getUsername:function(){return e.chrome.auth.getUser().then((function(e){return e.identity.user.username}))},isOrgAdmin:function(){return e.chrome.auth.getUser().then((function(e){return e.identity.user.is_org_admin}))},kafka:{getToken:k},kas:{getToken:e.chrome.auth.getToken},ams:{getToken:e.chrome.auth.getToken},srs:{getToken:e.chrome.auth.getToken},apicurio_registry:{getToken:k}},w={addAlert:function(e){var t=e.title,n=e.variant,r=e.description,a=e.dataTestId,i=e.autoDismiss,o=e.dismissable,s=e.dismissDelay,u=e.requestId,c=e.sentryId;f((0,E.wN)({title:t,variant:n,description:r,dataTestId:a,autoDismiss:i||!0,dismissable:o||!0,dismissDelay:s||8e3,requestId:u,sentryId:c}))}},y=function(e){var t=e.children,n=(0,_.useHistory)().location;return console.log("Route: "+n.pathname+n.search+", State: "+JSON.stringify(n.state)),t},I=(0,h.Z)(window.location.pathname);return a().createElement(v.AuthContext.Provider,{value:T},a().createElement(v.AlertContext.Provider,{value:w},a().createElement(_.BrowserRouter,{basename:I},a().createElement(_.Route,{render:function(){return a().createElement(y,null,a().createElement(l.Z,null))}}))))};const y=function(){return a().createElement(u.Provider,{store:(0,c.S1)(d()).getStore()},a().createElement(f.I18nextProvider,{i18n:k.Z},a().createElement(T.N,null,a().createElement(w,null))))};var I=document.getElementById("root");o().render(a().createElement(y,null),I)}}]);
//# sourceMappingURL=636.2c519e57dd97f7d883a3.js.map