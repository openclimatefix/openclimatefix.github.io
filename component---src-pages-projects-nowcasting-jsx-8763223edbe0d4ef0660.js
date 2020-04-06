(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Open Climate Fix"}}}}')},ITKW:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return i}));var n=a("q1tI"),r=a.n(n),l=a("dmsj"),o=a("L6Je"),s=a("xw3c");t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Project: Nowcasting"}),r.a.createElement("h1",null,"Nowcasting"),r.a.createElement("main",{className:"markdown"},r.a.createElement("div",{className:"video-wrapper"},r.a.createElement("iframe",{title:"nowcasting",src:"https://www.youtube.com/embed/IOp-tj-IJpk",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement("h2",null,"Why?"),r.a.createElement("p",null,"Solar Photovoltaics (PV) is the single biggest source of uncertainty in the National Grid's forecasts. To mitigate against the risk of a large cloud sweeping across the country (and hence the grid losing gigawatts of PV generation), the National Grid keep lots of natural gas generators idling (",r.a.createElement("em",null,"spinning reserve"),")."),r.a.createElement("p",null,"These gas turbines are kept idling because they take several hours to start up from cold, but they can be ramped up very quickly from idle; and the physics of the grid dictate that - at every instant - supply must precisely match demand. So, any loss in PV supply must be immediately replaced. Spinning reserve costs a lot of money and pumps out a lot of CO2."),r.a.createElement("p",null,"If the National Grid had better PV forecasts, even for the next few hours, they could reduce the amount of spinning reserve required, and hence reduce emissions (by about 100,000 tonnes per year) and reduce costs."),r.a.createElement("h2",null,"What?"),r.a.createElement("p",null,'Nowcasting is a bit of an odd term. It means "forecasting for the next few hours". In general, nowcasting doesn\'t use the hugely complex and expensive numerical weather models that run on super computers and constitute the bread-and-butter for most forecasting agencies. Instead, nowcasting usually uses statistical techniques to take recent observations and',r.a.createElement("em",null,"roll them forwards"),"."),r.a.createElement("h2",null,"How?"),r.a.createElement("p",null,"It turns out that most nowcasting research up until now has been done on rainfall (because predicting floods saves lives). Relatively little research has been done on nowcasting sunlight."),r.a.createElement("p",null,"Our main interest is in trying to build machine learning models to nowcast solar PV (which basically boils down to trying to predict the movement and evolution of clouds). We'd like to spend the majority of the next year or two writing code to experiment with new ways to predict sunlight for the next few hours. Inputs to the model may include satellite images of clouds, numerical weather predictions, vertical cloud profiles, and geographical information."),r.a.createElement("p",null,"As quickly as possible, we'd like to get prototype PV nowcasts displayed in the National Grid control room, so we can start measuring the impact on emissions and cost.")),r.a.createElement("p",{className:"text-xl mt-6 mb-1"},"More Information"),r.a.createElement(s.a,{posts:t}))};var i="813981873"},L6Je:function(e,t,a){"use strict";var n=a("IRj2"),r=a("q1tI"),l=a.n(r),o=a("dmsj"),s=a("+3Ox"),i=a("Fzi1");a("8ypT");t.a=function(e){var t=e.children,a=n.data.site.siteMetadata.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:a}),l.a.createElement(s.a,null),l.a.createElement("main",{className:"px-6 container mx-auto md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mb-16"},t),l.a.createElement(i.a,null))}},xw3c:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=function(e){var t=e.post;return r.a.createElement("li",null,r.a.createElement("span",null,t.frontmatter.date," "),r.a.createElement(l.Link,{to:t.frontmatter.path},t.frontmatter.title))};t.a=function(e){var t=e.posts;return r.a.createElement("div",{className:"markdown mt-6"},r.a.createElement("ul",null,t.map((function(e){var t=e.node;return r.a.createElement(o,{key:t.id,post:t})}))))}}}]);
//# sourceMappingURL=component---src-pages-projects-nowcasting-jsx-8763223edbe0d4ef0660.js.map