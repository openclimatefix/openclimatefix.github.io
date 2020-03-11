(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{195:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(219),i=n(199),l=n(204);n(49);function s(e){var t=e.name,n=e.twitter;return a.a.createElement("span",null,"· ",t," ",n&&a.a.createElement("span",null," ",a.a.createElement("a",{className:"text-blue-600",href:"https://twitter.com/"+n},"@",n)))}s.defaultProps={twitter:"openclimatefix"};var c=n(198),u=n(206),m=function(e){var t=e.prev,n=e.next;return a.a.createElement("div",{className:"flex justify-center h-24"},t&&a.a.createElement(c.a,{to:t.frontmatter.path},a.a.createElement("div",{className:"flex-center items-center px-4 py-2 m-2"},a.a.createElement(u.a,{size:"20",className:"inline mr-0"}),"Next")),n&&a.a.createElement(c.a,{to:n.frontmatter.path},a.a.createElement("div",{className:"flex-center items-center px-4 py-2 m-2"},"Previous",a.a.createElement(u.b,{size:"20",className:"inline mr-0"}))))};function p(e){var t=e.data,n=e.pageContext,r=n.prev,c=n.next,u=t.markdownRemark,p=u.frontmatter,d=u.html,f=p.authorName,h=p.authorTwitter,w=p.path,b=p.title,v=p.date;return a.a.createElement(l.a,null,a.a.createElement(i.a,{title:"Blog: "+b}),a.a.createElement("article",{className:""},a.a.createElement("h1",null,b),a.a.createElement("p",{className:"mt-4 text-sm text-gray mb-12"},v," ",a.a.createElement(s,{name:f,twitter:h})),a.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:d}})),a.a.createElement(m,{prev:r,next:c}),a.a.createElement(o.DiscussionEmbed,{shortname:"open-climate-fix",config:{identifier:w,title:b}}))}n.d(t,"default",function(){return p}),n.d(t,"pageQuery",function(){return d});var d="2787715859"},197:function(e,t,n){var r;e.exports=(r=n(202))&&r.default||r},198:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var r=n(0),a=n.n(r),o=n(66),i=n.n(o);n.d(t,"a",function(){return i.a});n(197),n(9).default.enqueue;var l=a.a.createContext({});function s(e){var t=e.staticQueryData,n=e.data,r=e.query,o=e.render,i=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,i&&o(i),!i&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,n=e.query,r=e.render,o=e.children;return a.a.createElement(l.Consumer,null,function(e){return a.a.createElement(s,{data:t,query:n,render:r||o,staticQueryData:e})})}},199:function(e,t,n){"use strict";var r=n(200),a=n(0),o=n.n(a),i=n(207),l=n.n(i);function s(e){var t=e.description,n=e.lang,a=e.meta,i=e.title,s=r.data.site,c=t||s.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{property:"og:image",content:"https://raw.githubusercontent.com/openclimatefix/website/master/src/images/logo_dark_square%402x.png"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c},{name:"twitter:image",content:"https://raw.githubusercontent.com/openclimatefix/website/master/src/images/logo_dark_square%402x.png"},{name:"twitter:site",content:"@OpenClimateFix"}].concat(a)})}s.defaultProps={lang:"en",meta:[],description:"Open Climate Fix is a new non-profit research and development lab, totally focused on reducing greenhouse gas emissions as rapidly as possible. Every part of the organisation is designed to maximise climate impact, such as our open and collaborative approach, our rapid prototyping, and our attention on finding scalable & practical solutions."},t.a=s},200:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Climate Fix",description:"Open Climate Fix is a new non-profit research and development lab, totally focused on reducing greenhouse gas emissions as rapidly as possible. Every part of the organisation is designed to maximise climate impact, such as our open and collaborative approach, our rapid prototyping, and our attention on finding scalable & practical solutions.",author:"@openclimatefix"}}}}},201:function(e,t,n){"use strict";var r=n(198),a=n(0),o=n.n(a);var i=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).toggleMenu=function(){n.setState(function(e){return{menuClosed:!e.menuClosed}})},n.state={menuClosed:!0},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this,t=this.state.menuClosed;return o.a.createElement("header",{className:"bg-black"},o.a.createElement("nav",{className:"mx-auto md:max-w-4xl lg:max-w-4xl xl:max-w-4xl flex items-center justify-between flex-wrap p-6"},o.a.createElement(r.a,{to:"/"},o.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},o.a.createElement("svg",{className:"fill-current h-8 w-14 mr-4",width:"60",height:"21",viewBox:"0 0 60 21",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M10,20.58a1.08,1.08,0,0,1-.78-.33L.32,11.39a1.12,1.12,0,0,1,0-1.57L9.4.75A1.1,1.1,0,0,1,11,.75a1.09,1.09,0,0,1,0,1.56l-8.29,8.3,8.08,8.08A1.11,1.11,0,0,1,10,20.58Z"}),o.a.createElement("path",{d:"M39.27,20.58a1.1,1.1,0,0,1-.78-.33l-8.86-8.86a1.12,1.12,0,0,1,0-1.57L38.7.75a1.12,1.12,0,0,1,1.57,0,1.1,1.1,0,0,1,0,1.56L32,10.61l8.09,8.08a1.11,1.11,0,0,1-.79,1.89Z"}),o.a.createElement("path",{d:"M53.67,12.46a1.11,1.11,0,0,1-.79-1.89l5.23-5.23a1.11,1.11,0,0,1,1.57,1.57l-5.23,5.22A1.1,1.1,0,0,1,53.67,12.46Z"}),o.a.createElement("path",{d:"M46.79,10.61l8.29-8.3A1.1,1.1,0,0,0,53.52.75L44.44,9.82a1.12,1.12,0,0,0,0,1.57l8.87,8.86a1.08,1.08,0,0,0,.78.33,1.11,1.11,0,0,0,.78-1.89Z"}),o.a.createElement("path",{d:"M15.79,20.58A1.11,1.11,0,0,1,15,18.69l8.09-8.08-8.3-8.3a1.1,1.1,0,0,1,0-1.56,1.12,1.12,0,0,1,1.57,0l9.07,9.07a1.1,1.1,0,0,1,0,1.57l-8.86,8.86A1.1,1.1,0,0,1,15.79,20.58Z"})),o.a.createElement("span",{className:"font-semibold text-xl tracking-tight"},"Open Climate Fix"))),o.a.createElement("div",{className:"block lg:hidden"},o.a.createElement("button",{"aria-expanded":!t,"aria-labelledby":"header--nav-menu",type:"button",onClick:function(){return e.toggleMenu()},className:"flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"},o.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("title",{id:"header--nav-menu"},"Menu"),o.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),o.a.createElement("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto "+(t&&"hidden")},o.a.createElement("div",{className:"text-sm lg:flex-grow"},o.a.createElement(r.a,{to:"/#about",className:"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"},"About"),o.a.createElement(r.a,{to:"/projects",className:"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"},"Projects"),o.a.createElement(r.a,{to:"/blog",className:"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"},"Blog")),o.a.createElement("div",null,o.a.createElement(r.a,{to:"/get-involved",className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"},"Get Involved")))))},a}(a.Component);t.a=i},202:function(e,t,n){"use strict";n.r(t);n(18);var r=n(0),a=n.n(r),o=n(92);t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},203:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(210),i=n(206),l=n(209),s=n(208),c=n.n(s);t.a=function(){return a.a.createElement("footer",{className:"bg-black p-6 text-white text-center"},a.a.createElement("div",{className:c.a.iconList},a.a.createElement("a",{href:"https://github.com/openclimatefix",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(l.a,null)),a.a.createElement("a",{href:"https://twitter.com/openclimatefix",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(i.e,null)),a.a.createElement("a",{href:"mailto:info@openclimatefix.org",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(o.a,null)),a.a.createElement("a",{href:"https://openclimatefix.discourse.group/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(i.c,null)),a.a.createElement("a",{href:"https://www.youtube.com/channel/UCq2-AN_j8BMERxTqdSvtPAg",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(i.f,null)),a.a.createElement("a",{href:"https://opencollective.com/openclimatefix",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(i.d,null))),a.a.createElement("p",{className:"mt-4"},"Open Climate Fix Ltd."))}},204:function(e,t,n){"use strict";var r=n(205),a=n(0),o=n.n(a),i=n(199),l=n(201),s=n(203);n(211);t.a=function(e){var t=e.children,n=r.data.site.siteMetadata.title;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{title:n}),o.a.createElement(l.a,null),o.a.createElement("main",{className:"px-6 container mx-auto md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mb-16"},t),o.a.createElement(s.a,null))}},205:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Climate Fix"}}}}},216:function(e,t,n){"use strict";n(49),n(52),n(38),n(50),n(29),n(30),n(13),n(99),n(98),n(134),n(67),n(91),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var a=this,o=arguments,i=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(a,o)},t),i&&e.apply(a,o)}},t.isReactElement=i,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),r=!0,a=!1,o=void 0;try{for(var l,s=n[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var c=l.value;if(e[c]!==t[c]&&!i(e[c]))return!0}}catch(u){a=!0,o=u}finally{try{!r&&s.return&&s.return()}finally{if(a)throw o}}return!1};var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};function i(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some(function(e){return o.default.isValidElement(e)})}},219:function(e,t,n){"use strict";n(91),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(220),a=n(221),o=n(223);t.CommentCount=r.CommentCount,t.CommentEmbed=a.CommentEmbed,t.DiscussionEmbed=o.DiscussionEmbed;var i={CommentCount:r.CommentCount,CommentEmbed:a.CommentEmbed,DiscussionEmbed:o.DiscussionEmbed};t.default=i},220:function(e,t,n){"use strict";n(133),n(93),n(91),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r},l=n(216);var s=(0,l.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["default"].Component),a(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?s():(0,l.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,l.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},221:function(e,t,n){"use strict";n(222),n(68),n(95),n(13),n(133),n(93),n(91),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["default"].Component),a(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},222:function(e,t,n){"use strict";var r=n(4),a=n(19),o=n(32),i=n(135),l=n(70),s=n(8),c=n(94).f,u=n(97).f,m=n(10).f,p=n(138).trim,d=r.Number,f=d,h=d.prototype,w="Number"==o(n(53)(h)),b="trim"in String.prototype,v=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,o=(t=b?t.trim():p(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var i,s=t.slice(2),c=0,u=s.length;c<u;c++)if((i=s.charCodeAt(c))<48||i>a)return NaN;return parseInt(s,r)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof d&&(w?s(function(){h.valueOf.call(n)}):"Number"!=o(n))?i(new f(v(t)),n,d):v(t)};for(var g,y=n(7)?c(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;y.length>E;E++)a(f,g=y[E])&&!a(d,g)&&m(d,g,u(f,g));d.prototype=h,h.constructor=d,n(12)(r,"Number",d)}},223:function(e,t,n){"use strict";n(133),n(93),n(91),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r},l=n(216);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["default"].Component),a(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,l.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,l.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=component---src-components-blog-post-blog-post-jsx-c29b608549e76dcde97e.js.map