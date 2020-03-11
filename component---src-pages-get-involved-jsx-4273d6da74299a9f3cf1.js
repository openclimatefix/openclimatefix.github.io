(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(204),o=a(214);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement("h1",null,"Get Involved"),r.a.createElement("div",{className:"markdown"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://opencollective.com/openclimatefix"},"Donate")," to our OpenCollective"),r.a.createElement("li",null,"Follow us by"," ",r.a.createElement("a",{href:"https://eepurl.com/guCjvH"},"signing up to our newsletter")),r.a.createElement("li",null,"Join the"," ",r.a.createElement("a",{href:"https://openclimatefix.discourse.group/"},"OCF discussion forum"))),r.a.createElement("p",null,"Also check out"," ",r.a.createElement("a",{href:"/blog/2019-03-06-how-to-get-involved"},"Jack's blog post about getting involved"),"."),r.a.createElement("h2",null,"Contribute to one of our repositories on Github"),r.a.createElement("p",null,"Check out our"," ",r.a.createElement("a",{href:"https://github.com/search?l=&p=1&q=user%3Aopenclimatefix+label%3A%22good+first+issue%22&ref=advsearch&type=Issues&utf8=%E2%9C%93&state=open"},"List of Good First Issues")," ","to get started!"),r.a.createElement(o.a,null)))}},197:function(e,t,a){var n;e.exports=(n=a(202))&&n.default||n},198:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(66),o=a.n(l);a.d(t,"a",function(){return o.a});a(197),a(9).default.enqueue;var i=r.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&l(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:a,render:n||l,staticQueryData:e})})}},199:function(e,t,a){"use strict";var n=a(200),r=a(0),l=a.n(r),o=a(207),i=a.n(o);function c(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=n.data.site,s=t||c.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{property:"og:image",content:"https://raw.githubusercontent.com/openclimatefix/website/master/src/images/logo_dark_square%402x.png"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s},{name:"twitter:image",content:"https://raw.githubusercontent.com/openclimatefix/website/master/src/images/logo_dark_square%402x.png"},{name:"twitter:site",content:"@OpenClimateFix"}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:"Open Climate Fix is a new non-profit research and development lab, totally focused on reducing greenhouse gas emissions as rapidly as possible. Every part of the organisation is designed to maximise climate impact, such as our open and collaborative approach, our rapid prototyping, and our attention on finding scalable & practical solutions."},t.a=c},200:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Climate Fix",description:"Open Climate Fix is a new non-profit research and development lab, totally focused on reducing greenhouse gas emissions as rapidly as possible. Every part of the organisation is designed to maximise climate impact, such as our open and collaborative approach, our rapid prototyping, and our attention on finding scalable & practical solutions.",author:"@openclimatefix"}}}}},201:function(e,t,a){"use strict";var n=a(198),r=a(0),l=a.n(r);var o=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(){a.setState(function(e){return{menuClosed:!e.menuClosed}})},a.state={menuClosed:!0},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this,t=this.state.menuClosed;return l.a.createElement("header",{className:"bg-black"},l.a.createElement("nav",{className:"mx-auto md:max-w-4xl lg:max-w-4xl xl:max-w-4xl flex items-center justify-between flex-wrap p-6"},l.a.createElement(n.a,{to:"/"},l.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},l.a.createElement("svg",{className:"fill-current h-8 w-14 mr-4",width:"60",height:"21",viewBox:"0 0 60 21",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M10,20.58a1.08,1.08,0,0,1-.78-.33L.32,11.39a1.12,1.12,0,0,1,0-1.57L9.4.75A1.1,1.1,0,0,1,11,.75a1.09,1.09,0,0,1,0,1.56l-8.29,8.3,8.08,8.08A1.11,1.11,0,0,1,10,20.58Z"}),l.a.createElement("path",{d:"M39.27,20.58a1.1,1.1,0,0,1-.78-.33l-8.86-8.86a1.12,1.12,0,0,1,0-1.57L38.7.75a1.12,1.12,0,0,1,1.57,0,1.1,1.1,0,0,1,0,1.56L32,10.61l8.09,8.08a1.11,1.11,0,0,1-.79,1.89Z"}),l.a.createElement("path",{d:"M53.67,12.46a1.11,1.11,0,0,1-.79-1.89l5.23-5.23a1.11,1.11,0,0,1,1.57,1.57l-5.23,5.22A1.1,1.1,0,0,1,53.67,12.46Z"}),l.a.createElement("path",{d:"M46.79,10.61l8.29-8.3A1.1,1.1,0,0,0,53.52.75L44.44,9.82a1.12,1.12,0,0,0,0,1.57l8.87,8.86a1.08,1.08,0,0,0,.78.33,1.11,1.11,0,0,0,.78-1.89Z"}),l.a.createElement("path",{d:"M15.79,20.58A1.11,1.11,0,0,1,15,18.69l8.09-8.08-8.3-8.3a1.1,1.1,0,0,1,0-1.56,1.12,1.12,0,0,1,1.57,0l9.07,9.07a1.1,1.1,0,0,1,0,1.57l-8.86,8.86A1.1,1.1,0,0,1,15.79,20.58Z"})),l.a.createElement("span",{className:"font-semibold text-xl tracking-tight"},"Open Climate Fix"))),l.a.createElement("div",{className:"block lg:hidden"},l.a.createElement("button",{"aria-expanded":!t,"aria-labelledby":"header--nav-menu",type:"button",onClick:function(){return e.toggleMenu()},className:"flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"},l.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",{id:"header--nav-menu"},"Menu"),l.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),l.a.createElement("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto "+(t&&"hidden")},l.a.createElement("div",{className:"text-sm lg:flex-grow"},l.a.createElement(n.a,{to:"/#about",className:"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"},"About"),l.a.createElement(n.a,{to:"/projects",className:"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"},"Projects"),l.a.createElement(n.a,{to:"/blog",className:"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"},"Blog")),l.a.createElement("div",null,l.a.createElement(n.a,{to:"/get-involved",className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"},"Get Involved")))))},r}(r.Component);t.a=o},202:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),l=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},203:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(210),o=a(206),i=a(209),c=a(208),s=a.n(c);t.a=function(){return r.a.createElement("footer",{className:"bg-black p-6 text-white text-center"},r.a.createElement("div",{className:s.a.iconList},r.a.createElement("a",{href:"https://github.com/openclimatefix",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,null)),r.a.createElement("a",{href:"https://twitter.com/openclimatefix",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.e,null)),r.a.createElement("a",{href:"mailto:info@openclimatefix.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(l.a,null)),r.a.createElement("a",{href:"https://openclimatefix.discourse.group/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.c,null)),r.a.createElement("a",{href:"https://www.youtube.com/channel/UCq2-AN_j8BMERxTqdSvtPAg",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.f,null)),r.a.createElement("a",{href:"https://opencollective.com/openclimatefix",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.d,null))),r.a.createElement("p",{className:"mt-4"},"Open Climate Fix Ltd."))}},204:function(e,t,a){"use strict";var n=a(205),r=a(0),l=a.n(r),o=a(199),i=a(201),c=a(203);a(211);t.a=function(e){var t=e.children,a=n.data.site.siteMetadata.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:a}),l.a.createElement(i.a,null),l.a.createElement("main",{className:"px-6 container mx-auto md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mb-16"},t),l.a.createElement(c.a,null))}},205:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Climate Fix"}}}}},212:function(e){e.exports={data:{contributorsJson:{contributors:[{name:"Jack Kelly",profile:"http://jack-kelly.com",avatar_url:"https://avatars2.githubusercontent.com/u/460756?v=4"},{name:"Flo",profile:"https://github.com/FWirtz",avatar_url:"https://avatars1.githubusercontent.com/u/6052785?v=4"},{name:"Damien Taner",profile:"http://tanner.me",avatar_url:"https://avatars2.githubusercontent.com/u/227?v=4"},{name:"Kyle Schiller",profile:"https://github.com/schillerk",avatar_url:"https://avatars1.githubusercontent.com/u/8676510?v=4"},{name:"Oliver Boermans",profile:"http://www.ollicle.com",avatar_url:"https://avatars1.githubusercontent.com/u/63586?v=4"},{name:"eambutu",profile:"https://www.phillipkwang.com",avatar_url:"https://avatars3.githubusercontent.com/u/11009767?v=4"},{name:"Hansal Bachkaniwala",profile:"https://github.com/hansal7014",avatar_url:"https://avatars2.githubusercontent.com/u/28968198?v=4"},{name:"David",profile:"https://github.com/drwm-base",avatar_url:"https://avatars3.githubusercontent.com/u/50212366?v=4"},{name:"sukhbeersingh",profile:"https://github.com/sukhbeersingh",avatar_url:"https://avatars2.githubusercontent.com/u/44414281?v=4"}]}}}},214:function(e,t,a){"use strict";a(49);var n=a(212),r=a(198),l=a(0),o=a.n(l),i=a(218),c=a.n(i);var s=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Contributors"),o.a.createElement("p",null,"Join our amazing group of contributors and get involved.",o.a.createElement("br",null),"These people are already contributing to our work."),o.a.createElement(r.b,{query:"2802472179",render:function(e){return o.a.createElement("div",{className:c.a.grid},function(e){var t=[];return e.contributorsJson.contributors.forEach(function(e){t.push(o.a.createElement("div",{className:c.a.griditem,key:e.profile},o.a.createElement("img",{className:c.a.image,alt:e.profile,src:e.avatar_url}),o.a.createElement("a",{href:e.profile},e.name)))}),t}(e))},data:n}))};t.a=s}}]);
//# sourceMappingURL=component---src-pages-get-involved-jsx-4273d6da74299a9f3cf1.js.map