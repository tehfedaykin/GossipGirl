(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});a(50);var i=a(7),r=a.n(i),n=a(0),s=a.n(n),l=a(156),o=a(174),c=a.n(o),d=a(173),u=a.n(d),A=(a(158),a(166),a(160)),f=a(171),p=(a(168),a(172)),h=a.n(p),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=c()(this,"props.data.site.siteMetadata.title"),t=c()(this,"props.data.site.siteMetadata.description"),a=c()(this,"props.data.allCastJson.edges");return s.a.createElement(A.a,{location:this.props.location,title:e},s.a.createElement(u.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),s.a.createElement("main",{style:{position:"relative"}},s.a.createElement(h.a,{title:"New York background",alt:"New York background",sizes:this.props.data.bgImage.sizes,style:{width:"100%",position:"absolute",top:"0",left:"0"}}),s.a.createElement("div",{className:"container",style:{position:"relative"}},s.a.createElement("div",{className:"header"},s.a.createElement(l.Link,{style:{boxShadow:"none"},to:"/"},s.a.createElement(h.a,{title:"Gossip Girl",alt:"Gossip Girl",sizes:this.props.data.logoImage.sizes}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-9"},s.a.createElement("h1",null,"The Cast"),a.map(function(e){var t=e.node;return s.a.createElement("div",{key:t.character,style:{display:"block",margin:"3em 0"}},s.a.createElement(h.a,{title:t.character,alt:t.character,sizes:t.characterPhoto.image.sizes,style:{width:"200px"}}),s.a.createElement("h2",null,t.character),s.a.createElement("hr",{style:{border:"none",borderTop:"dotted 5px"}}),s.a.createElement("div",{style:{textAlign:"right"}},s.a.createElement("h3",{style:{display:"inline-block",lineHeight:"100px",margin:"0px 20px",verticalAlign:"top"}},"played by ",t.player),s.a.createElement(h.a,{title:t.player,alt:t.player,sizes:t.playerPhoto.image.sizes,style:{width:"100px",display:"inline-block"}})))})),s.a.createElement("div",{className:"col"},s.a.createElement(f.a,null))))),s.a.createElement("div",null))},t}(s.a.Component);t.default=g;var m="197087158"},156:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return f});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),l=a(155),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(157),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var A=r.a.createContext({}),f=function(e){return r.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},157:function(e,t,a){var i;e.exports=(i=a(159))&&i.default||i},159:function(e,t,a){"use strict";a.r(t);a(35);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),l=a(49),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},160:function(e,t,a){"use strict";var i=a(7),r=a.n(i),n=a(0),s=a.n(n),l=(a(156),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.title,e.children);return s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto"}},t)},t}(s.a.Component));t.a=l},161:function(e,t,a){e.exports=a.p+"static/dylanbeattie-e7aa54377ffb7a1e73b1f06d6f9bc290.png"},162:function(e,t,a){e.exports=a.p+"static/jesswhite-0c415cff98555d14bb9c675c2d542c57.jpg"},163:function(e,t,a){e.exports=a.p+"static/jonskeet-d7613da31824755138feab6910ac1ea8.jpg"},164:function(e,t,a){e.exports=a.p+"static/patriciaaas-c7215f7e74bc8a47a9649def5f18dfdb.jpg"},165:function(e,t){},166:function(e,t,a){"use strict";var i=a(7),r=a.n(i),n=a(0),s=a.n(n),l=(a(175),a(176),a(167)),o=a.n(l),c=a(165);s.a.Component},167:function(e,t){e.exports="data:image/jpeg;base64,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"},168:function(e,t,a){"use strict";var i=a(0),r=a.n(i),n=a(156),s=a(158),l=Object(s.a)("div",{target:"e19x0b1p0"})("border-radius:15px;background:#fff;display:block;padding:20px;margin:2em 0;overflow:hidden;h2,p{color:#000;}h2{margin:.5em 0 1em 0;}small{float:right;}");t.a=function(e){return r.a.createElement(l,null,r.a.createElement(n.Link,{style:{boxShadow:"none"},to:e.slug},r.a.createElement("h2",null,"Spotted: ",e.person),r.a.createElement("img",{title:"Header image",alt:"Hero banner",src:e.image})),r.a.createElement("p",null,"Spotted at ",e.location," "),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.text}}),r.a.createElement("p",null,r.a.createElement("small",null,e.date)))}},171:function(e,t,a){"use strict";var i=a(7),r=a.n(i),n=a(0),s=a.n(n),l=a(156),o=a(158),c=a(162),d=a(161),u=a(163),A=a(164),f=Object(o.a)("div",{target:"e1prkpc70"})("border-radius:50%;background:#b8b365;margin:2em auto;width:50%;display:block;padding:10px;text-align:center;.nav-link{display:inline-block;box-shadow:none;color:#000;}img.circle{border-radius:50%;width:75%;margin:0 auto;display:block;}"),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",null,s.a.createElement(f,null,s.a.createElement(l.Link,{className:"nav-link",to:"/"},s.a.createElement("img",{className:"circle",src:u,alt:"home"})," ","home"," ")),s.a.createElement(f,null,s.a.createElement(l.Link,{className:"nav-link",to:"/posts"},s.a.createElement("img",{className:"circle",src:d,alt:"posts"})," ","posts"," ")),s.a.createElement(f,null,s.a.createElement(l.Link,{className:"nav-link",to:"/pics"},s.a.createElement("img",{className:"circle",src:A,alt:"pics"})," ","pics"," ")),s.a.createElement(f,null,s.a.createElement(l.Link,{className:"nav-link",to:"/cast"},s.a.createElement("img",{className:"circle",src:c,alt:"cast"})," ","cast"," ")))},t}(s.a.Component);t.a=p},172:function(e,t,a){"use strict";var i=a(34);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(48)),l=i(a(169)),o=i(a(170)),c=i(a(0)),d=i(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!A[a]||(A[a]=!0,!1)},p=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+l+o+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,n=(0,l.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({},n,{onLoad:i,onError:r,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!0,n=!1,l=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!1,n=!0),"undefined"==typeof window&&(i=!1,r=!1),t.critical&&(i=!0,r=!1,n=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:r,IOSupported:n,fadeIn:l,hasNoScript:d,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,E=e.backgroundColor,y=e.Tag,b="boolean"==typeof E?"lightgray":E,w=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,A),C=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),S={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var Q=p;return c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(Q.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/Q.aspectRatio+"%"}}),Q.base64&&c.default.createElement(m,(0,o.default)({src:Q.base64},S)),Q.tracedSVG&&c.default.createElement(m,(0,o.default)({src:Q.tracedSVG},S)),b&&c.default.createElement(y,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,Q.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:Q.srcSetWebp,sizes:Q.sizes}),c.default.createElement("source",{srcSet:Q.srcSet,sizes:Q.sizes}),c.default.createElement(m,{alt:a,title:t,src:Q.src,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},Q))}}))}if(h){var v=h,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:v.width,height:v.height},n);return"inherit"===n.display&&delete R.display,c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(v.srcSet)},v.base64&&c.default.createElement(m,(0,o.default)({src:v.base64},S)),v.tracedSVG&&c.default.createElement(m,(0,o.default)({src:v.tracedSVG},S)),b&&c.default.createElement(y,{title:t,style:{backgroundColor:b,width:v.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:v.height}}),this.state.isVisible&&c.default.createElement("picture",null,v.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:v.srcSetWebp,sizes:v.sizes}),c.default.createElement("source",{srcSet:v.srcSet,sizes:v.sizes}),c.default.createElement(m,{alt:a,title:t,width:v.width,height:v.height,src:v.src,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:v.width,height:v.height},v))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),b=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:y,sizes:b,fixed:y,fluid:b,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var w=E;t.default=w}}]);
//# sourceMappingURL=component---src-pages-cast-js-05a397b327acb24faf3c.js.map