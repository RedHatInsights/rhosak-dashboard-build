(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[2556],{12556:function(t,e,n){var r;r=function(t,e,n,r){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=n(6),c=n(1),s=n(3),l=n(7),f=null,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={currentLocation:null},e}return o(e,t),e.getDerivedStateFromProps=function(t,e){var n,r,o,i;return n={location:e.currentLocation,nextLocation:t.location,watchOnlyPathname:t.watchOnlyPathname},r=n.location,o=n.nextLocation,i=n.watchOnlyPathname,null!==r&&o!==r&&(i&&r.pathname===o.pathname||(!l.shouldPrevent(o)||l.hasBeenPrevented(o)?f=a({},r):l.prevent(o))),{currentLocation:t.location}},e.prototype.render=function(){var t=this.props.children;return i.createElement(s.default.Provider,{value:f},t)},e.propTypes={watchOnlyPathname:u.bool,children:u.node.isRequired},e.defaultProps={watchOnlyPathname:!1},e}(i.Component);e.getLastLocation=function(){return f},e.setLastLocation=function(t){f=t},e.default=c.withRouter(p)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0).createContext(null);e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5);e.withLastLocation=r.default;var o=n(2);e.LastLocationProvider=o.default;var a=n(8);e.useLastLocation=a.default;var i=n(9);e.RedirectWithoutLastLocation=i.default},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=n(1),i=n(2);e.default=function(t){var e=function(e){return o.createElement(t,r({lastLocation:i.getLastLocation()},e))};return e.displayName="WithLastLocation("+function(t){return t.displayName||t.name||"Component"}(t)+")",a.withRouter(e)}},function(t,e){t.exports=n},function(t,e,n){"use strict";var r=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var o=["key","pathname","search","hash"],a=[];e.prevent=function(t){t.state;var e=r(t,["state"]);a.push(e)},e.hasBeenPrevented=function(t){return a.some((function(e){return n=t,r=e,o.every((function(t){return n[t]===r[t]}));var n,r}))},e.shouldPrevent=function(t){return Boolean(t.state&&t.state.preventLastLocation)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(3);e.default=function(){return r.useContext(o.default)}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),i=n(1),u=n(10);e.default=function(t){var e,n=t.to,c=o(t,["to"]);return e="string"==typeof n?u.createLocation(n,{preventLastLocation:!0}):r({},n,{state:r({preventLastLocation:!0},n.state)}),a.createElement(i.Redirect,r({},c,{to:e}))}},function(t,e){t.exports=r}])},t.exports=r(n(75418),n(73685),n(45697),n(90071))}}]);
