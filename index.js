// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__,c=t,f=function(e,r,t){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(u.call(e,r)||l.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e},_=r()?c:f,p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=function(e,r,t,n,o,a,i,u){var l,c,f,_;if(e<=0)return a;for(l=t<0?(1-e)*t:0,c=o<0?(1-e)*o:0,f=i<0?(1-e)*i:0,_=0;_<e;_++)0===n[c]&&(a[f]=u(r[l])),l+=t,c+=o,f+=i;return a};p(d,"ndarray",(function(e,r,t,n,o,a,i,u,l,c,f){var _,p,d,y;if(e<=0)return u;for(_=n,p=i,d=c,y=0;y<e;y++)0===o[p]&&(u[d]=f(r[_])),_+=t,p+=a,d+=l;return u}));var y=d,s=Math.ceil;function b(e,r,t,n,o,a,i){return y(e,r,t,n,o,a,i,s)}return p(b,"ndarray",(function(e,r,t,n,o,a,i,u,l,c){return y.ndarray(e,r,t,n,o,a,i,u,l,c,s)})),b},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).smskceil=r();
//# sourceMappingURL=index.js.map
