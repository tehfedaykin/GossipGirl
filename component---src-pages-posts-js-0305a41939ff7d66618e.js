(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return E});a(50);var n=a(7),r=a.n(n),i=a(0),s=a.n(i),o=(a(154),a(176)),l=a.n(o),c=a(175),d=a.n(c),u=(a(162),a(166),a(157)),A=a(185),f=a(168),p=a(186),g=a.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=l()(this,"props.data.site.siteMetadata.title"),t=l()(this,"props.data.site.siteMetadata.description"),n=l()(this,"props.data.allMarkdownRemark.edges");return s.a.createElement(u.a,{location:this.props.location,title:e},s.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),s.a.createElement("main",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"header"},s.a.createElement(g.a,{title:"Gossip Girl",alt:"Gossip Girl",sizes:this.props.data.logoImage.sizes})),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-9"},s.a.createElement("h1",null,"Posts"),n.map(function(e){var t=e.node,n=a(169)("./"+t.frontmatter.image);return s.a.createElement(f.a,{key:t.fields.slug,image:n,location:t.frontmatter.location,date:t.frontmatter.date,person:t.frontmatter.person,slug:t.fields.slug,text:t.excerpt})})),s.a.createElement("div",{className:"col"},s.a.createElement(A.a,null))))),s.a.createElement("div",null))},t}(s.a.Component);t.default=h;var E="2785815720"},154:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(153),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(155),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var A=r.a.createContext({}),f=function(e){return r.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},155:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},156:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(49),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},157:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),s=a.n(i),o=(a(154),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.title,e.children);return s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto"}},t)},t}(s.a.Component));t.a=o},158:function(e,t,a){e.exports=a.p+"static/dylanbeattie-e7aa54377ffb7a1e73b1f06d6f9bc290.png"},159:function(e,t,a){e.exports=a.p+"static/jesswhite-0c415cff98555d14bb9c675c2d542c57.jpg"},160:function(e,t,a){e.exports=a.p+"static/jonskeet-d7613da31824755138feab6910ac1ea8.jpg"},161:function(e,t,a){e.exports=a.p+"static/patriciaaas-c7215f7e74bc8a47a9649def5f18dfdb.jpg"},163:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(183),r=a.n(n),i=a(184),s=a.n(i);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new r.a(s.a);var l=o.rhythm;o.scale},166:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),s=a.n(i),o=(a(181),a(182),a(167)),l=a.n(o),c=a(163);s.a.Component},167:function(e,t){e.exports="data:image/jpeg;base64,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"},168:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(154),s=a(162),o=Object(s.a)("div",{target:"e19x0b1p0"})("border-radius:15px;background:#fff;display:block;padding:20px;margin:2em 0;overflow:hidden;h2,p{color:#000;}h2{margin:.5em 0 1em 0;}small{float:right;}");t.a=function(e){return r.a.createElement(o,null,r.a.createElement(i.Link,{style:{boxShadow:"none"},to:e.slug},r.a.createElement("h2",null,"Spotted: ",e.person),r.a.createElement("img",{title:"Header image",alt:"Hero banner",src:e.image})),r.a.createElement("p",null,"Spotted at ",e.location," "),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.text}}),r.a.createElement("p",null,r.a.createElement("small",null,e.date)))}},169:function(e,t,a){var n={"./dylanbeattie.png":158,"./jesstechorama.jpg":170,"./jesswhite.jpg":159,"./jonskeet.jpg":160,"./logo.png":171,"./patriciaaas.jpg":161};function r(e){var t=i(e);return a(t)}function i(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=169},170:function(e,t,a){e.exports=a.p+"static/jesstechorama-f1ef0611dec29b7a2a5cb868b6df239c.jpg"},171:function(e,t,a){e.exports=a.p+"static/logo-74f05c1cddda419f40db42692b9a1780.png"},185:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),s=a.n(i),o=a(154),l=a(162),c=a(159),d=a(158),u=a(160),A=a(161),f=Object(l.a)("div",{target:"ei3djo20"})("border-radius:50%;background:#b8b365;margin:2em auto;width:50%;display:block;padding:10px;text-align:center;.nav-link{display:inline-block;box-shadow:none;color:#000;}"),p=Object(l.a)("img",{target:"ei3djo21"})("border-radius:50%;width:75%;margin:0 auto;display:block;"),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",null,s.a.createElement(f,null,s.a.createElement(o.Link,{className:"nav-link",to:"/"},s.a.createElement(p,{src:u,alt:"home"})," ","home"," ")),s.a.createElement(f,null,s.a.createElement(o.Link,{className:"nav-link",to:"/posts"},s.a.createElement(p,{src:d,alt:"posts"})," ","posts"," ")),s.a.createElement(f,null,s.a.createElement(o.Link,{className:"nav-link",to:"/pics"},s.a.createElement(p,{src:A,alt:"pics"})," ","pics"," ")),s.a.createElement(f,null,s.a.createElement(o.Link,{className:"nav-link",to:"/links"},s.a.createElement(p,{src:c,alt:"links"})," ","links"," ")))},t}(s.a.Component);t.a=g},186:function(e,t,a){"use strict";var n=a(34);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),s=n(a(48)),o=n(a(164)),l=n(a(165)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!A[a]||(A[a]=!0,!1)},p=[];var g=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});E.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var m=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!0,i=!1,o=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!1,i=!0),"undefined"==typeof window&&(n=!1,r=!1),t.critical&&(n=!0,r=!1,i=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:r,IOSupported:i,fadeIn:o,hasNoScript:d,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,b=e.Tag,y="boolean"==typeof m?"lightgray":m,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,A),C=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),S={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var v=p;return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(v.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/v.aspectRatio+"%"}}),v.base64&&c.default.createElement(E,(0,l.default)({src:v.base64},S)),v.tracedSVG&&c.default.createElement(E,(0,l.default)({src:v.tracedSVG},S)),y&&c.default.createElement(b,{title:t,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,v.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:v.srcSetWebp,sizes:v.sizes}),c.default.createElement("source",{srcSet:v.srcSet,sizes:v.sizes}),c.default.createElement(E,{alt:a,title:t,src:v.src,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},v))}}))}if(g){var Q=g,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Q.width,height:Q.height},i);return"inherit"===i.display&&delete R.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(Q.srcSet)},Q.base64&&c.default.createElement(E,(0,l.default)({src:Q.base64},S)),Q.tracedSVG&&c.default.createElement(E,(0,l.default)({src:Q.tracedSVG},S)),y&&c.default.createElement(b,{title:t,style:{backgroundColor:y,width:Q.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:Q.height}}),this.state.isVisible&&c.default.createElement("picture",null,Q.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:Q.srcSetWebp,sizes:Q.sizes}),c.default.createElement("source",{srcSet:Q.srcSet,sizes:Q.sizes}),c.default.createElement(E,{alt:a,title:t,width:Q.width,height:Q.height,src:Q.src,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,width:Q.width,height:Q.height},Q))}}))}return null},t}(c.default.Component);m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});m.propTypes={resolutions:b,sizes:y,fixed:b,fluid:y,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var w=m;t.default=w}}]);
//# sourceMappingURL=component---src-pages-posts-js-0305a41939ff7d66618e.js.map