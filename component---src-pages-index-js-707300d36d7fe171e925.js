webpackJsonp([35783957827783],{324:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(){return"undefined"==typeof N&&"undefined"!=typeof window&&window.IntersectionObserver&&(N=new window.IntersectionObserver(function(e){e.forEach(function(e){S.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),N}t.__esModule=!0;var o=a(24),i=n(o),r=a(38),s=n(r),c=a(37),d=n(c),u=a(116),f=n(u),p=a(115),m=n(p),h=a(1),b=n(h),g=a(2),y=n(g),w=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},v={},E=function(e){var t=w(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!v[a]||(v[a]=!0,!1)},N=void 0,S=[],O=function(e,t){l().observe(e),S.push([e,t])},j=null,L=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.sizes?'sizes="'+e.sizes+'" ':"",l=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",r=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+i+r+t+a+o+l+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},_=function(e){var t=e.style,a=e.onLoad,n=(0,f.default)(e,["style","onLoad"]);return b.default.createElement("img",(0,m.default)({},n,{onLoad:a,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};_.propTypes={style:y.default.object,onLoad:y.default.func};var z=function(e){function t(a){(0,i.default)(this,t);var n=(0,s.default)(this,e.call(this,a)),l=!0,o=!0,r=!1,c=E(a);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=!1,o=!1,r=!0),"undefined"==typeof window&&(l=!1,o=!1),n.state={isVisible:l,imgLoaded:o,IOSupported:r},n.handleRef=n.handleRef.bind(n),n}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&O(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=w(this.props),a=t.title,n=t.alt,l=t.className,o=t.outerWrapperClassName,i=t.style,r=void 0===i?{}:i,s=t.imgStyle,c=void 0===s?{}:s,d=t.sizes,u=t.resolutions,f=t.backgroundColor,p=t.Tag,h=void 0;h="boolean"==typeof f?"lightgray":f;var g=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},c),y=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},c);if(d){var v=d;return v.srcWebp&&v.srcSetWebp&&L()&&(v.src=v.srcWebp,v.srcSet=v.srcSetWebp),b.default.createElement(p,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},b.default.createElement(p,{className:(l?l:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef},b.default.createElement(p,{style:{width:"100%",paddingBottom:100/v.aspectRatio+"%"}}),v.base64&&b.default.createElement(_,{alt:n,title:a,src:v.base64,style:g}),v.tracedSVG&&b.default.createElement(_,{alt:n,title:a,src:v.tracedSVG,style:g}),h&&b.default.createElement(p,{title:a,style:{backgroundColor:h,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&b.default.createElement(_,{alt:n,title:a,srcSet:v.srcSet,src:v.src,sizes:v.sizes,style:y,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),b.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,m.default)({alt:n,title:a},v))}})))}if(u){var E=u,N=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},r);return"inherit"===r.display&&delete N.display,E.srcWebp&&E.srcSetWebp&&L()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),b.default.createElement(p,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},b.default.createElement(p,{className:(l?l:"")+" gatsby-image-wrapper",style:N,ref:this.handleRef},E.base64&&b.default.createElement(_,{alt:n,title:a,src:E.base64,style:g}),E.tracedSVG&&b.default.createElement(_,{alt:n,title:a,src:E.tracedSVG,style:g}),h&&b.default.createElement(p,{title:a,style:{backgroundColor:h,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&b.default.createElement(_,{alt:n,title:a,width:E.width,height:E.height,srcSet:E.srcSet,src:E.src,style:y,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),b.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,m.default)({alt:n,title:a,width:E.width,height:E.height},E))}})))}return null},t}(b.default.Component);z.defaultProps={fadeIn:!0,alt:"",Tag:"div"},z.propTypes={responsiveResolution:y.default.object,responsiveSizes:y.default.object,resolutions:y.default.object,sizes:y.default.object,fadeIn:y.default.bool,title:y.default.string,alt:y.default.string,className:y.default.oneOfType([y.default.string,y.default.object]),outerWrapperClassName:y.default.oneOfType([y.default.string,y.default.object]),style:y.default.object,imgStyle:y.default.object,position:y.default.string,backgroundColor:y.default.oneOfType([y.default.string,y.default.bool]),onLoad:y.default.func,Tag:y.default.string},t.default=z},47:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(e){l[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},l)).join("")}catch(e){return!1}}var l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,r,s=a(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var d in n)o.call(n,d)&&(s[d]=n[d]);if(l){r=l(n);for(var u=0;u<r.length;u++)i.call(n,r[u])&&(s[r[u]]=n[r[u]])}}return s}},219:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=a(1),s=n(r),c=function(e){function t(a){l(this,t);var n=o(this,e.call(this,a));return n.state={open:!1},n.flipOpen=n.flipOpen.bind(n),n}return i(t,e),t.prototype.flipOpen=function(){console.log(this.state),this.setState(function(e){return{open:!e.open}})},t.prototype.render=function(){return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{onClick:this.flipOpen},this.props.clicker),s.default.createElement("div",{className:this.state.open?"collapse show":"collapse"},this.props.children))},t}(s.default.Component);t.default=c,e.exports=t.default},224:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var l=a(1),o=n(l),i=a(324),r=n(i),s=a(219),c=(n(s),function(e){var t=e.data;return o.default.createElement(l.Fragment,null,o.default.createElement("header",{className:"masthead"},o.default.createElement(r.default,{style:{position:"absolute",top:0,left:0,right:0,zIndex:-1,height:"100%"},sizes:t.mainImage.sizes}),console.log("whaddup"),o.default.createElement("div",{className:"intro-body"},o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-lg-4 mx-auto"},o.default.createElement("h1",{className:"brand-heading"},"vine and fork"),o.default.createElement("p",{className:"intro-text"},"wine concierge service"),o.default.createElement("a",{href:"#about",className:"btn btn-circle js-scroll-trigger"},o.default.createElement("i",{className:"fa fa-angle-double-down animated"}))))))),o.default.createElement("section",{id:"about",className:"content-section text-center"},o.default.createElement("div",null,o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-lg-8 mx-auto"},o.default.createElement("h2",{style:{color:"black"}},"about"),o.default.createElement("p",null,"At Vine and Fork we bring Sommelier selected wines directly to the hands of the consumer. Our goal is to bring boutique not commercially distributed wines to meet the everyday consumers need whether it’s for personal use or a large event.")))))),o.default.createElement("section",{id:"contact",className:"download-section content-section text-center",style:{position:"relative",backgroundColor:null}},o.default.createElement(r.default,{style:{position:"absolute",top:0,left:0,right:0,zIndex:-1,height:"100%"},sizes:t.secondaryImage.sizes}),o.default.createElement("div",{className:"container",style:{textShadow:"-1px 0 #00000061, 0 1px #00000061, 1px 0 #00000061, 0 -1px #00000061",fontWeight:"bold",color:"white"}},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-lg-8 mx-auto"},o.default.createElement("h2",null,"contact"),o.default.createElement("p",null,"Follow us on instagram or reach out by email"),o.default.createElement("ul",{className:"list-inline banner-social-buttons"},o.default.createElement("li",{className:"list-inline-item"},o.default.createElement("a",{href:"https://www.instagram.com/vineandfork/",className:"btn btn-default btn-lg"},o.default.createElement("i",{className:"fa fa-instagram fa-fw"}),o.default.createElement("span",{className:"network-name"},"Instagram"))),o.default.createElement("li",{className:"list-inline-item"},o.default.createElement("a",{href:"mailto:angelina@vineandfork.com",className:"btn btn-default btn-lg"},o.default.createElement("i",{className:"fa fa-envelope fa-fw"}),o.default.createElement("span",{className:"network-name"},"Email")))))))))});t.default=c;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-707300d36d7fe171e925.js.map