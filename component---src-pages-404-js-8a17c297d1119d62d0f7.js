webpackJsonp([0x9427c64ab85d],{47:function(e,t){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,c,i=r(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var s in n)a.call(n,s)&&(i[s]=n[s]);if(o){c=o(n);for(var f=0;f<c.length;f++)u.call(n,c[f])&&(i[c[f]]=n[c[f]])}}return i}},222:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(1),a=n(o),u=function(){return a.default.createElement("div",null,a.default.createElement("h1",null,"NOT FOUND"),a.default.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))};t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-404-js-8a17c297d1119d62d0f7.js.map