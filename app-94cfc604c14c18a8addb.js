webpackJsonp([9],{"./.cache/api-runner-browser.js":function(e,n){"use strict";var o=[];e.exports=function(e,n,t){var s=o.map(function(o){if(o.plugin[e]){var t=o.plugin[e](n,o.options);return t}});return s=s.filter(function(e){return"undefined"!=typeof e}),s.length>0?s:t?[t]:[]}},"./.cache/async-requires.js":function(e,n,o){"use strict";n.components={"page-component---src-pages-404-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js"),"page-component---src-pages-index-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js"),"page-component---src-pages-page-2-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-page-2-js!./src/pages/page-2.js")},n.json={"404.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),"index.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),"page-2.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json"),"404-html.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json")},n.layouts={index:o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js")}},"./.cache/component-renderer.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var s=o("./node_modules/babel-runtime/helpers/extends.js"),a=t(s),r=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),i=t(r),u=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),l=t(u),d=o("./node_modules/babel-runtime/helpers/createClass.js"),c=t(d),p=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=t(p),f=o("./node_modules/babel-runtime/helpers/inherits.js"),g=t(f),h=o("./node_modules/react/react.js"),b=t(h),j=o("./.cache/loader.js"),_=t(j),y=o("./.cache/emitter.js"),x=t(y),v=function(e){function n(e){(0,l.default)(this,n);var o=(0,m.default)(this,(n.__proto__||(0,i.default)(n)).call(this));return o.state={location:e.location,pageResources:_.default.getResourcesForPathname(e.location.pathname)},o}return(0,g.default)(n,e),(0,c.default)(n,[{key:"componentWillReceiveProps",value:function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var o=_.default.getResourcesForPathname(e.location.pathname);o?this.setState({location:e.location,pageResources:o}):_.default.getResourcesForPathname(e.location.pathname,function(o){n.setState({location:e.location,pageResources:o})})}}},{key:"componentDidMount",value:function(){var e=this;x.default.on("onPostLoadPageResources",function(n){n.page.path===_.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})}},{key:"shouldComponentUpdate",value:function(e,n){return this.state.pageResources.component!==n.pageResources.component||this.state.pageResources.json!==n.pageResources.json}},{key:"render",value:function(){return this.state.pageResources?(0,h.createElement)(this.state.pageResources.component,(0,a.default)({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null}}]),n}(b.default.Component);n.default=v},"./.cache/emitter.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=o("./node_modules/mitt/dist/mitt.js"),a=t(s),r=(0,a.default)();e.exports=r},"./.cache/find-page.js":function(e,n,o){"use strict";var t=o("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var a=o.slice(n.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),s[a])return s[a];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(a,{path:e.path})||(0,t.matchPath)(a,{path:e.matchPath}))return r=e,s[a]=e,!0}else if((0,t.matchPath)(a,{path:e.path,exact:!0}))return r=e,s[a]=e,!0;return!1}),r}}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(7,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(6,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(5,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(4,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/page-2.json")})})}},"./.cache/loader.js":function(e,n,o){(function(n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=o("./node_modules/babel-runtime/core-js/get-iterator.js"),a=t(s),r=o("./.cache/find-page.js"),i=t(r),u=o("./.cache/emitter.js"),l=t(u),d=void 0,c={},p={},m={},f={},g={},h=[],b=[],j={},_=[],y={},x=function(e){return e&&e.default||e},v=void 0,R=!0;v=o("./.cache/prefetcher.js")({getNextQueuedResources:function(){return _.slice(-1)[0]},createResourceDownload:function(e){E(e,function(){_=_.filter(function(n){return n!==e}),v.onResourcedFinished(e)})}}),l.default.on("onPreLoadPageResources",function(e){v.onPreLoadPageResources(e)}),l.default.on("onPostLoadPageResources",function(e){v.onPostLoadPageResources(e)});var w=function(e,n){return y[e]>y[n]?1:y[e]<y[n]?-1:0},P=function(e,n){return j[e]>j[n]?1:j[e]<j[n]?-1:0},E=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(f[e])n.nextTick(function(){o(null,f[e])});else{var t="page-c"===e.slice(0,6)?p.components[e]:p.json[e];t(function(n,t){f[e]=t,o(n,t)})}},k=function(e,o){g[e]?n.nextTick(function(){o(null,g[e])}):E(e,function(n,t){if(n)o(n);else{var s=x(t());g[e]=s,o(n,s)}})},U=1,N={empty:function(){b=[],j={},y={},_=[],h=[]},addPagesArray:function(e){h=e;var n="";n=void 0,d=(0,i.default)(e,n)},addDevRequires:function(e){c=e},addProdRequires:function(e){p=e},dequeue:function(e){return b.pop()},enqueue:function(e){if(!h.some(function(n){return n.path===e}))return!1;var n=1/U;U+=1,j[e]?j[e]+=1:j[e]=1,N.has(e)||b.unshift(e),b.sort(P);var o=d(e);return o.jsonName&&(y[o.jsonName]?y[o.jsonName]+=1+n:y[o.jsonName]=1+n,_.indexOf(o.jsonName)!==-1||f[o.jsonName]||_.unshift(o.jsonName)),o.componentChunkName&&(y[o.componentChunkName]?y[o.componentChunkName]+=1+n:y[o.componentChunkName]=1+n,_.indexOf(o.componentChunkName)!==-1||f[o.jsonName]||_.unshift(o.componentChunkName)),_.sort(w),v.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:_,resourcesCount:y}},getPages:function(){return{pathArray:b,pathCount:j}},getPage:function(e){return d(e)},has:function(e){return b.some(function(n){return n===e})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(d(e)||navigator.serviceWorker.getRegistrations().then(function(e){var n=!0,o=!1,t=void 0;try{for(var s,r=(0,a.default)(e);!(n=(s=r.next()).done);n=!0){var i=s.value;i.unregister()}}catch(e){o=!0,t=e}finally{try{!n&&r.return&&r.return()}finally{if(o)throw t}}window.location.reload()})),R=!1;var t=d(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),l.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];l.default.emit("onPreLoadPageResources",{path:e});var s=void 0,r=void 0,i=function(){if(s&&r){m[e]={component:s,json:r};var n={component:s,json:r};o(n),l.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return k(t.componentChunkName,function(e,n){e&&console.log("Loading the component for "+t.path+" failed"),s=n,i()}),void k(t.jsonName,function(e,n){e&&console.log("Loading the JSON for "+t.path+" failed"),r=n,i()})},peek:function(e){return b.slice(-1)[0]},length:function(){return b.length},indexOf:function(e){return b.length-b.indexOf(e)-1}};e.exports=N}).call(n,o("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"page-component---src-pages-404-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"page-component---src-pages-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"page-component---src-pages-page-2-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"page-component---src-pages-404-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,o=e.createResourceDownload,t=[],s=[],a=function(){var e=n();e&&(s.push(e),o(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:s}},empty:function(){t=[],s=[]}}}},0:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e){window.___history||(window.___history=e,e.listen(function(e,n){(0,l.default)("onRouteUpdate",{location:e,action:n})}))}function a(e,n){var o=n.location.pathname,t=(0,l.default)("shouldUpdateScroll",{prevRouterProps:e,pathname:o});if(t.length>0)return t[0];if(e){var s=e.location.pathname;if(s===o)return!1}return!0}var r=o("./node_modules/babel-runtime/helpers/extends.js"),i=t(r),u=o("./.cache/api-runner-browser.js"),l=t(u),d=o("./node_modules/react/react.js"),c=t(d),p=o("./node_modules/react-dom/index.js"),m=t(p),f=o("./node_modules/react-router-dom/index.js"),g=o("./node_modules/react-router-scroll/lib/index.js"),h=o("./node_modules/history/createBrowserHistory.js"),b=t(h),j=o("./.cache/emitter.js"),_=t(j),y=o("./.cache/pages.json"),x=t(y),v=o("./.cache/component-renderer.js"),R=t(v),w=o("./.cache/async-requires.js"),P=t(w),E=o("./.cache/loader.js"),k=t(E);window.___emitter=_.default,k.default.addPagesArray(x.default),k.default.addProdRequires(P.default),window.asyncRequires=P.default,window.___loader=k.default,window.matchPath=f.matchPath,(0,l.default)("onClientEntry"),(0,l.default)("registerServiceWorker").length>0&&o("./.cache/register-service-worker.js");var U=function(e){function n(t){t.page.path===k.default.getPage(e).path&&(_.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}if(window.location.pathname!==e){var o=setTimeout(function(){_.default.off("onPostLoadPageResources",n),_.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);k.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):_.default.on("onPostLoadPageResources",n)}};window.___navigateTo=U;var N=(0,b.default)();(0,l.default)("onRouteUpdate",{location:N.location,action:N.action});var C=(0,l.default)("replaceRouterComponent",{history:N})[0],T=function(e){var n=e.children;return c.default.createElement(f.BrowserRouter,{history:N},n)},S=function(e){P.default.layouts.index?P.default.layouts.index(function(n,o){var t=o();e(t)}):e(function(e){return c.default.createElement("div",null,e.children())})};S(function(e){k.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,d.createElement)(C?C:T,null,(0,d.createElement)(g.ScrollContext,{shouldUpdateScroll:a},(0,d.createElement)((0,f.withRouter)(e),{children:function(e){return(0,d.createElement)(f.Route,{render:function(n){s(n.history);var o=e?e:n;return k.default.getPage(o.location.pathname)?(0,d.createElement)(R.default,(0,i.default)({},o)):(0,d.createElement)(R.default,{location:{pathname:"/404.html"}})}})}})))},o=(0,l.default)("wrapRootComponent",{Root:n},n)[0];m.default.render(c.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0)})})},"./.cache/register-service-worker.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=o("./.cache/emitter.js"),a=t(s),r="/";r=void 0,"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":function(e,n,o){"use strict";function t(){function e(e){var n=t.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,t=document.querySelector("head"),s=o.e,a=o.s;o.e=function(t,r){var i=!1,u=!0,l=function(e){r&&(r(o,e),r=null)};return!a&&n&&n[t]?void l(!0):(s(t,function(){i||(i=!0,u?setTimeout(function(){l()}):l())}),void(i||(u=!1,e(function(){i||(i=!0,a?a[t]=void 0:(n||(n={}),n[t]=!0),l(!0))}))))}}t()},"./node_modules/mitt/dist/mitt.js":function(e,n){function o(e){return e=e||Object.create(null),{on:function(n,o){(e[n]||(e[n]=[])).push(o)},off:function(n,o){e[n]&&e[n].splice(e[n].indexOf(o)>>>0,1)},emit:function(n,o){(e[n]||[]).map(function(e){e(o)}),(e["*"]||[]).map(function(e){e(n,o)})}}}e.exports=o},"./node_modules/process/browser.js":function(e,n){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function s(e){if(d===setTimeout)return setTimeout(e,0);if((d===o||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(n){try{return d.call(null,e,0)}catch(n){return d.call(this,e,0)}}}function a(e){if(c===clearTimeout)return clearTimeout(e);if((c===t||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{return c(e)}catch(n){try{return c.call(null,e)}catch(n){return c.call(this,e)}}}function r(){g&&m&&(g=!1,m.length?f=m.concat(f):h=-1,f.length&&i())}function i(){if(!g){var e=s(r);g=!0;for(var n=f.length;n;){for(m=f,f=[];++h<n;)m&&m[h].run();h=-1,n=f.length}m=null,g=!1,a(e)}}function u(e,n){this.fun=e,this.array=n}function l(){}var d,c,p=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:o}catch(e){d=o}try{c="function"==typeof clearTimeout?clearTimeout:t}catch(e){c=t}}();var m,f=[],g=!1,h=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)n[o-1]=arguments[o];f.push(new u(e,n)),1!==f.length||g||s(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(1,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/athomsen/git/public/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/athomsen/git/public/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/athomsen/git/public/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/athomsen/git/public/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/athomsen/git/public/node_modules/babel-preset-env/lib/index.js","/Users/athomsen/git/public/node_modules/babel-preset-stage-0/lib/index.js","/Users/athomsen/git/public/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(8,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/athomsen/git/public/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/athomsen/git/public/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/athomsen/git/public/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/athomsen/git/public/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/athomsen/git/public/node_modules/babel-preset-env/lib/index.js","/Users/athomsen/git/public/node_modules/babel-preset-stage-0/lib/index.js","/Users/athomsen/git/public/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(3,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/athomsen/git/public/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/athomsen/git/public/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/athomsen/git/public/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/athomsen/git/public/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/athomsen/git/public/node_modules/babel-preset-env/lib/index.js","/Users/athomsen/git/public/node_modules/babel-preset-stage-0/lib/index.js","/Users/athomsen/git/public/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-page-2-js!./src/pages/page-2.js":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(2,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/athomsen/git/public/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/athomsen/git/public/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/athomsen/git/public/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/athomsen/git/public/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/athomsen/git/public/node_modules/babel-preset-env/lib/index.js","/Users/athomsen/git/public/node_modules/babel-preset-stage-0/lib/index.js","/Users/athomsen/git/public/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/page-2.js')})})}}});
//# sourceMappingURL=app-94cfc604c14c18a8addb.js.map