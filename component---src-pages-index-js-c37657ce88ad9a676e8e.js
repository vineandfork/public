webpackJsonp([35783957827783],{320:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(){return"undefined"==typeof N&&"undefined"!=typeof window&&window.IntersectionObserver&&(N=new window.IntersectionObserver(function(e){e.forEach(function(e){S.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),N}t.__esModule=!0;var i=a(24),s=l(i),r=a(38),o=l(r),c=a(37),d=l(c),u=a(116),f=l(u),m=a(115),p=l(m),h=a(1),g=l(h),b=a(2),y=l(b),v=function(e){var t=(0,p.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},N=void 0,S=[],j=function(e,t){n().observe(e),S.push([e,t])},O=null,z=function(){if(null!==O)return O;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return O=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",l=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",r=e.height?'height="'+e.height+'" ':"",o=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+s+r+t+a+i+n+l+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},L=function(e){var t=e.style,a=e.onLoad,l=(0,f.default)(e,["style","onLoad"]);return g.default.createElement("img",(0,p.default)({},l,{onLoad:a,style:(0,p.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};L.propTypes={style:y.default.object,onLoad:y.default.func};var k=function(e){function t(a){(0,s.default)(this,t);var l=(0,o.default)(this,e.call(this,a)),n=!0,i=!0,r=!1,c=E(a);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!1,r=!0),"undefined"==typeof window&&(n=!1,i=!1),l.state={isVisible:n,imgLoaded:i,IOSupported:r},l.handleRef=l.handleRef.bind(l),l}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&j(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,l=t.alt,n=t.className,i=t.outerWrapperClassName,s=t.style,r=void 0===s?{}:s,o=t.imgStyle,c=void 0===o?{}:o,d=t.sizes,u=t.resolutions,f=t.backgroundColor,m=t.Tag,h=void 0;h="boolean"==typeof f?"lightgray":f;var b=(0,p.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},c),y=(0,p.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},c);if(d){var w=d;return w.srcWebp&&w.srcSetWebp&&z()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),g.default.createElement(m,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},g.default.createElement(m,{className:(n?n:"")+" gatsby-image-wrapper",style:(0,p.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef},g.default.createElement(m,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&g.default.createElement(L,{alt:l,title:a,src:w.base64,style:b}),w.tracedSVG&&g.default.createElement(L,{alt:l,title:a,src:w.tracedSVG,style:b}),h&&g.default.createElement(m,{title:a,style:{backgroundColor:h,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(L,{alt:l,title:a,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:y,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,p.default)({alt:l,title:a},w))}})))}if(u){var E=u,N=(0,p.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},r);return"inherit"===r.display&&delete N.display,E.srcWebp&&E.srcSetWebp&&z()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),g.default.createElement(m,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},g.default.createElement(m,{className:(n?n:"")+" gatsby-image-wrapper",style:N,ref:this.handleRef},E.base64&&g.default.createElement(L,{alt:l,title:a,src:E.base64,style:b}),E.tracedSVG&&g.default.createElement(L,{alt:l,title:a,src:E.tracedSVG,style:b}),h&&g.default.createElement(m,{title:a,style:{backgroundColor:h,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&g.default.createElement(L,{alt:l,title:a,width:E.width,height:E.height,srcSet:E.srcSet,src:E.src,style:y,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,p.default)({alt:l,title:a,width:E.width,height:E.height},E))}})))}return null},t}(g.default.Component);k.defaultProps={fadeIn:!0,alt:"",Tag:"div"},k.propTypes={responsiveResolution:y.default.object,responsiveSizes:y.default.object,resolutions:y.default.object,sizes:y.default.object,fadeIn:y.default.bool,title:y.default.string,alt:y.default.string,className:y.default.oneOfType([y.default.string,y.default.object]),outerWrapperClassName:y.default.oneOfType([y.default.string,y.default.object]),style:y.default.object,imgStyle:y.default.object,position:y.default.string,backgroundColor:y.default.oneOfType([y.default.string,y.default.bool]),onLoad:y.default.func,Tag:y.default.string},t.default=k},47:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function l(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var l=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==l.join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}var n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=l()?Object.assign:function(e,t){for(var l,r,o=a(e),c=1;c<arguments.length;c++){l=Object(arguments[c]);for(var d in l)i.call(l,d)&&(o[d]=l[d]);if(n){r=n(l);for(var u=0;u<r.length;u++)s.call(l,r[u])&&(o[r[u]]=l[r[u]])}}return o}},222:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=a(1),i=l(n),s=a(320),r=l(s),o=function(e){var t=e.data;return i.default.createElement(n.Fragment,null,i.default.createElement("header",{className:"masthead"},i.default.createElement(r.default,{style:{position:"absolute",top:0,left:0,right:0,zIndex:-1,height:"100%"},sizes:t.mainImage.sizes}),i.default.createElement("div",{className:"intro-body"},i.default.createElement("div",{className:"container"},i.default.createElement(r.default,{style:{position:"absolute",top:0,left:0,right:0,zIndex:-1,width:200,height:200,margin:"110px auto"},sizes:t.logo.sizes}),i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-lg-4 col-xl-7 mx-auto"},i.default.createElement("h1",{className:"brand-heading mt-9"},"vine & fork"),i.default.createElement("p",{className:"intro-text"},"wine concierge service"),i.default.createElement("a",{href:"#about",className:"btn btn-circle js-scroll-trigger"},i.default.createElement("i",{className:"fa fa-angle-double-down animated"}))))))),i.default.createElement("section",{id:"about",className:"content-section text-center"},i.default.createElement("div",null,i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-lg-8 mx-auto"},i.default.createElement("h2",{style:{color:"black"}},"about"),i.default.createElement("p",null,"At vine & fork we bring Sommelier selected wines directly to the hands of the consumer. Our goal is to bring boutique not commercially distributed wines to meet the everyday consumers need whether it’s for personal use or a large event.")))))),i.default.createElement("section",{id:"contact",className:"download-section content-section text-center",style:{position:"relative",backgroundColor:null}},i.default.createElement(r.default,{style:{position:"absolute",top:0,left:0,right:0,zIndex:-1,height:"100%"},sizes:t.secondaryImage.sizes}),i.default.createElement("div",{className:"container",style:{textShadow:"-1px 0 #00000061, 0 1px #00000061, 1px 0 #00000061, 0 -1px #00000061",fontWeight:"bold",color:"white"}},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-lg-8 mx-auto"},i.default.createElement("h2",null,"contact"),i.default.createElement("p",null,"Follow us on instagram or reach out by email"),i.default.createElement("ul",{className:"list-inline banner-social-buttons"},i.default.createElement("li",{className:"list-inline-item"},i.default.createElement("a",{href:"https://www.instagram.com/vineandfork/",className:"btn btn-default btn-lg"},i.default.createElement("i",{className:"fa fa-instagram fa-fw"}),i.default.createElement("span",{className:"network-name"},"Instagram"))),i.default.createElement("li",{className:"list-inline-item"},i.default.createElement("a",{href:"mailto:angelina@vineandfork.com",className:"btn btn-default btn-lg"},i.default.createElement("i",{className:"fa fa-envelope fa-fw"}),i.default.createElement("span",{className:"network-name"},"Email"))),i.default.createElement("li",{className:"list-inline-item"},i.default.createElement("a",{href:"mailto:angelina@vineandfork.com",className:"btn btn-default btn-lg"},i.default.createElement("i",{className:"fa fa-envelope fa-fw"}),i.default.createElement("span",{className:"network-name"},"Reach")))))))))};t.default=o;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-c37657ce88ad9a676e8e.js.map