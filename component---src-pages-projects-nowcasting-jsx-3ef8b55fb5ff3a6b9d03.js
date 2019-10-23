(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return s});var n=a(0),r=a.n(n),l=a(196),o=a(202),i=a(211);t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Project: Nowcasting"}),r.a.createElement("h1",null,"Nowcasting"),r.a.createElement("main",{className:"markdown"},r.a.createElement("h2",null,"Why?"),r.a.createElement("p",null,"Solar Photovoltaics (PV) is the single biggest source of uncertainty in the National Grid's forecasts. To mitigate against the risk of a large cloud sweeping across the country (and hence the grid losing gigawatts of PV generation), the National Grid keep lots of natural gas generators idling (",r.a.createElement("em",null,"spinning reserve"),")."),r.a.createElement("p",null,"These gas turbines are kept idling because they take several hours to start up from cold, but they can be ramped up very quickly from idle; and the physics of the grid dictate that - at every instant - supply must precisely match demand. So, any loss in PV supply must be immediately replaced. Spinning reserve costs a lot of money and pumps out a lot of CO2."),r.a.createElement("p",null,"If the National Grid had better PV forecasts, even for the next few hours, they could reduce the amount of spinning reserve required, and hence reduce emissions (by about 100,000 tonnes per year) and reduce costs."),r.a.createElement("h2",null,"What?"),r.a.createElement("p",null,'Nowcasting is a bit of an odd term. It means "forecasting for the next few hours". In general, nowcasting doesn\'t use the hugely complex and expensive numerical weather models that run on super computers and constitute the bread-and-butter for most forecasting agencies. Instead, nowcasting usually uses statistical techniques to take recent observations and',r.a.createElement("em",null,"roll them forwards"),"."),r.a.createElement("h2",null,"How?"),r.a.createElement("p",null,"It turns out that most nowcasting research up until now has been done on rainfall (because predicting floods saves lives). Relatively little research has been done on nowcasting sunlight."),r.a.createElement("p",null,"Our main interest is in trying to build machine learning models to nowcast solar PV (which basically boils down to trying to predict the movement and evolution of clouds). We'd like to spend the majority of the next year or two writing code to experiment with new ways to predict sunlight for the next few hours. Inputs to the model may include satellite images of clouds, numerical weather predictions, vertical cloud profiles, and geographical information."),r.a.createElement("p",null,"As quickly as possible, we'd like to get prototype PV nowcasts displayed in the National Grid control room, so we can start measuring the impact on emissions and cost.")),r.a.createElement("p",{className:"text-xl mt-6 mb-1"},"More Information"),r.a.createElement(i.a,{posts:t}))};var s="2642385371"},195:function(e,t,a){var n;e.exports=(n=a(200))&&n.default||n},196:function(e,t,a){"use strict";var n=a(198),r=a(0),l=a.n(r),o=a(204),i=a.n(o);function s(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,s=n.data.site,c=t||s.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:"Open Climate Fix is a new non-profit research and development lab, totally focused on reducing greenhouse gas emissions as rapidly as possible. Every part of the organisation is designed to maximise climate impact, such as our open and collaborative approach, our rapid prototyping, and our attention on finding scalable & practical solutions."},t.a=s},197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(66),o=a.n(l);a.d(t,"a",function(){return o.a});a(195),a(9).default.enqueue,r.a.createContext({})},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Climate Fix",description:"Open Climate Fix is a new non-profit research and development lab, totally focused on reducing greenhouse gas emissions as rapidly as possible. Every part of the organisation is designed to maximise climate impact, such as our open and collaborative approach, our rapid prototyping, and our attention on finding scalable & practical solutions.",author:"@openclimatefix"}}}}},199:function(e,t,a){"use strict";var n=a(197),r=a(0),l=a.n(r);var o=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(){a.setState(function(e){return{menuClosed:!e.menuClosed}})},a.state={menuClosed:!0},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this,t=this.state.menuClosed;return l.a.createElement("header",{className:"bg-black"},l.a.createElement("nav",{className:"mx-auto md:max-w-4xl lg:max-w-4xl xl:max-w-4xl flex items-center justify-between flex-wrap p-6"},l.a.createElement(n.a,{to:"/"},l.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},l.a.createElement("svg",{className:"fill-current h-8 w-14 mr-4",width:"60",height:"21",viewBox:"0 0 60 21",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M10,20.58a1.08,1.08,0,0,1-.78-.33L.32,11.39a1.12,1.12,0,0,1,0-1.57L9.4.75A1.1,1.1,0,0,1,11,.75a1.09,1.09,0,0,1,0,1.56l-8.29,8.3,8.08,8.08A1.11,1.11,0,0,1,10,20.58Z"}),l.a.createElement("path",{d:"M39.27,20.58a1.1,1.1,0,0,1-.78-.33l-8.86-8.86a1.12,1.12,0,0,1,0-1.57L38.7.75a1.12,1.12,0,0,1,1.57,0,1.1,1.1,0,0,1,0,1.56L32,10.61l8.09,8.08a1.11,1.11,0,0,1-.79,1.89Z"}),l.a.createElement("path",{d:"M53.67,12.46a1.11,1.11,0,0,1-.79-1.89l5.23-5.23a1.11,1.11,0,0,1,1.57,1.57l-5.23,5.22A1.1,1.1,0,0,1,53.67,12.46Z"}),l.a.createElement("path",{d:"M46.79,10.61l8.29-8.3A1.1,1.1,0,0,0,53.52.75L44.44,9.82a1.12,1.12,0,0,0,0,1.57l8.87,8.86a1.08,1.08,0,0,0,.78.33,1.11,1.11,0,0,0,.78-1.89Z"}),l.a.createElement("path",{d:"M15.79,20.58A1.11,1.11,0,0,1,15,18.69l8.09-8.08-8.3-8.3a1.1,1.1,0,0,1,0-1.56,1.12,1.12,0,0,1,1.57,0l9.07,9.07a1.1,1.1,0,0,1,0,1.57l-8.86,8.86A1.1,1.1,0,0,1,15.79,20.58Z"})),l.a.createElement("span",{className:"font-semibold text-xl tracking-tight"},"Open Climate Fix"))),l.a.createElement("div",{className:"block lg:hidden"},l.a.createElement("button",{type:"button",onClick:function(){return e.toggleMenu()},className:"flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"},l.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),l.a.createElement("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto "+(t&&"hidden")},l.a.createElement("div",{className:"text-sm lg:flex-grow"},l.a.createElement(n.a,{to:"/#about",className:"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"},"About"),l.a.createElement(n.a,{to:"/projects",className:"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"},"Projects"),l.a.createElement(n.a,{to:"/blog",className:"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"},"Blog")),l.a.createElement("div",null,l.a.createElement(n.a,{to:"/#get-involved",className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"},"Get Involved")))))},r}(r.Component);t.a=o},200:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},201:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(208),o=a(207),i=a(206),s=a(205),c=a.n(s);t.a=function(){return r.a.createElement("footer",{className:"bg-black p-6 text-white text-center"},r.a.createElement("div",{className:c.a.iconList},r.a.createElement("a",{href:"https://github.com/openclimatefix",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,null)),r.a.createElement("a",{href:"https://twitter.com/openclimatefix",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.d,null)),r.a.createElement("a",{href:"mailto:info@openclimatefix.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(l.a,null)),r.a.createElement("a",{href:"https://medium.com/open-climate-fix",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.c,null)),r.a.createElement("a",{href:"https://openclimatefix.discourse.group/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,null)),r.a.createElement("a",{href:"https://opencollective.com/openclimatefix",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.b,null))),r.a.createElement("p",{className:"mt-4"},"Open Climate Fix Ltd."))}},202:function(e,t,a){"use strict";var n=a(203),r=a(0),l=a.n(r),o=a(196),i=a(199),s=a(201);a(209);t.a=function(e){var t=e.children,a=n.data.site.siteMetadata.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:a}),l.a.createElement(i.a,null),l.a.createElement("main",{className:"px-6 container mx-auto md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mb-16"},t),l.a.createElement(s.a,null))}},203:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Climate Fix"}}}}},211:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(197),o=function(e){var t=e.post;return r.a.createElement("li",null,r.a.createElement("span",null,t.frontmatter.date," "),r.a.createElement(l.a,{to:t.frontmatter.path},t.frontmatter.title))};t.a=function(e){var t=e.posts;return r.a.createElement("div",{className:"markdown mt-6"},r.a.createElement("ul",null,t.map(function(e){var t=e.node;return r.a.createElement(o,{key:t.id,post:t})})))}}}]);
//# sourceMappingURL=component---src-pages-projects-nowcasting-jsx-3ef8b55fb5ff3a6b9d03.js.map