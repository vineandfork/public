webpackJsonp([35783957827783],{320:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(){return"undefined"==typeof N&&"undefined"!=typeof window&&window.IntersectionObserver&&(N=new window.IntersectionObserver(function(e){e.forEach(function(e){S.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),N}t.__esModule=!0;var r=a(24),i=n(r),o=a(38),s=n(o),c=a(37),d=n(c),u=a(116),f=n(u),p=a(72),m=n(p),h=a(1),b=n(h),g=a(2),y=n(g),v=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},N=void 0,S=[],j=function(e,t){l().observe(e),S.push([e,t])},O=null,L=function(){if(null!==O)return O;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return O=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.sizes?'sizes="'+e.sizes+'" ':"",l=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+i+o+t+a+r+l+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},x=function(e){var t=e.style,a=e.onLoad,n=(0,f.default)(e,["style","onLoad"]);return b.default.createElement("img",(0,m.default)({},n,{onLoad:a,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};x.propTypes={style:y.default.object,onLoad:y.default.func};var k=function(e){function t(a){(0,i.default)(this,t);var n=(0,s.default)(this,e.call(this,a)),l=!0,r=!0,o=!1,c=E(a);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=!1,r=!1,o=!0),"undefined"==typeof window&&(l=!1,r=!1),n.state={isVisible:l,imgLoaded:r,IOSupported:o},n.handleRef=n.handleRef.bind(n),n}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&j(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,n=t.alt,l=t.className,r=t.outerWrapperClassName,i=t.style,o=void 0===i?{}:i,s=t.imgStyle,c=void 0===s?{}:s,d=t.sizes,u=t.resolutions,f=t.backgroundColor,p=t.Tag,h=void 0;h="boolean"==typeof f?"lightgray":f;var g=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},c),y=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},c);if(d){var w=d;return w.srcWebp&&w.srcSetWebp&&L()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),b.default.createElement(p,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},b.default.createElement(p,{className:(l?l:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef},b.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&b.default.createElement(x,{alt:n,title:a,src:w.base64,style:g}),w.tracedSVG&&b.default.createElement(x,{alt:n,title:a,src:w.tracedSVG,style:g}),h&&b.default.createElement(p,{title:a,style:{backgroundColor:h,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&b.default.createElement(x,{alt:n,title:a,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:y,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),b.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,m.default)({alt:n,title:a},w))}})))}if(u){var E=u,N=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},o);return"inherit"===o.display&&delete N.display,E.srcWebp&&E.srcSetWebp&&L()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),b.default.createElement(p,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},b.default.createElement(p,{className:(l?l:"")+" gatsby-image-wrapper",style:N,ref:this.handleRef},E.base64&&b.default.createElement(x,{alt:n,title:a,src:E.base64,style:g}),E.tracedSVG&&b.default.createElement(x,{alt:n,title:a,src:E.tracedSVG,style:g}),h&&b.default.createElement(p,{title:a,style:{backgroundColor:h,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&b.default.createElement(x,{alt:n,title:a,width:E.width,height:E.height,srcSet:E.srcSet,src:E.src,style:y,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),b.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,m.default)({alt:n,title:a,width:E.width,height:E.height},E))}})))}return null},t}(b.default.Component);k.defaultProps={fadeIn:!0,alt:"",Tag:"div"},k.propTypes={responsiveResolution:y.default.object,responsiveSizes:y.default.object,resolutions:y.default.object,sizes:y.default.object,fadeIn:y.default.bool,title:y.default.string,alt:y.default.string,className:y.default.oneOfType([y.default.string,y.default.object]),outerWrapperClassName:y.default.oneOfType([y.default.string,y.default.object]),style:y.default.object,imgStyle:y.default.object,position:y.default.string,backgroundColor:y.default.oneOfType([y.default.string,y.default.bool]),onLoad:y.default.func,Tag:y.default.string},t.default=k},47:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(e){l[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},l)).join("")}catch(e){return!1}}var l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,o,s=a(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var d in n)r.call(n,d)&&(s[d]=n[d]);if(l){o=l(n);for(var u=0;u<o.length;u++)i.call(n,o[u])&&(s[o[u]]=n[o[u]])}}return s}},222:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var o=a(1),s=n(o),c=a(320),d=n(c),u=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data;return s.default.createElement(o.Fragment,null,s.default.createElement("header",{className:"masthead"},s.default.createElement(d.default,{style:{position:"absolute",top:0,left:0,right:0,zIndex:-1,height:"100%"},sizes:e.mainImage.sizes}),s.default.createElement("div",{className:"intro-body"},s.default.createElement("div",{className:"container"},s.default.createElement("img",{src:e.logo.resize.src,style:{height:"25vh",marginTop:100},alt:"vine and fork logo"}),s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"mx-auto"},s.default.createElement("h1",{className:"brand-heading "},"vine & fork"),s.default.createElement("p",{className:"intro-text"},"wine concierge service"),s.default.createElement("a",{href:"#about",className:"btn btn-circle js-scroll-trigger","aria-label":"about"},s.default.createElement("i",{className:"fa fa-angle-double-down animated"}))))))),s.default.createElement("section",{id:"about",className:"content-section text-center"},s.default.createElement("div",null,s.default.createElement("div",{className:"container"},s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-lg-8 mx-auto"},s.default.createElement("h2",{style:{color:"black"}},"about"),s.default.createElement("p",null,"At vine & fork we bring Sommelier selected wines directly to the hands of the consumer. Our goal is to bring boutique not commercially distributed wines to meet the everyday consumers need whether it’s for personal use or a large event.")))))),s.default.createElement("section",{id:"contact",className:"download-section content-section text-center",style:{position:"relative",backgroundColor:null}},s.default.createElement(d.default,{style:{position:"absolute",top:0,left:0,right:0,zIndex:-1,height:"100%"},sizes:e.secondaryImage.sizes}),s.default.createElement("div",{className:"container",style:{textShadow:"-1px 0 #00000061, 0 1px #00000061, 1px 0 #00000061, 0 -1px #00000061",fontWeight:"bold",color:"white"}},s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-lg-8 mx-auto"},s.default.createElement("h2",null,"contact"),s.default.createElement("p",null,"Follow us on instagram or reach out by email"),s.default.createElement("ul",{className:"list-inline banner-social-buttons"},s.default.createElement("li",{className:"list-inline-item"},s.default.createElement("a",{href:"https://www.instagram.com/vineandfork/",className:"btn btn-default btn-lg"},s.default.createElement("i",{className:"fa fa-instagram fa-fw"}),s.default.createElement("span",{className:"network-name"},"Instagram"))),s.default.createElement("li",{className:"list-inline-item"},s.default.createElement("a",{href:"mailto:angelina@vineandfork.com",className:"btn btn-default btn-lg"},s.default.createElement("i",{className:"fa fa-envelope fa-fw"}),s.default.createElement("span",{className:"network-name"},"Email")))))))))},t}(s.default.Component);t.default=u;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-0532829f705e595d35d3.js.map