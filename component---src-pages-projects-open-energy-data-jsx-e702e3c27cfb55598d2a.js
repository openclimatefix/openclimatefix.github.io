(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{HnL5:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),r=t.n(n),s=t("Wbzz"),o=t("pKo1"),l=t.n(o);function i(e){var a=e.logos||[{name:"ESA Business Applications",image:"esa_space_solutions.png",link:"https://business.esa.int/"},{name:"Open Data Institute",image:"odi.png",link:"https://theodi.org/"},{name:"The Alan Turing Institute",image:"turing.png",link:"https://www.turing.ac.uk/"},{name:"UCL",image:"UCL.jpg",link:"https://www.ucl.ac.uk/"},{name:"Innovate UK",image:"innovateuk.png",link:"https://www.gov.uk/government/organisations/innovate-uk"},{name:"Machine Intelligence Garage",image:"MI-Garage_Badge_cohort.png",link:"https://www.migarage.ai/"},{name:"The Climate Subak",image:"subak.png",link:"https://www.subak.org/"},{name:"HAO",image:"hao_black.png",link:"https://haocreative.ca/"},{name:"Icebreaker One",image:"icebreakerOneURL.png",link:"https://icebreakerone.org/"},{name:"RAAIS Foundation",image:"raais_foundation.png",link:"https://www.raais.org/"}];return r.a.createElement(s.StaticQuery,{query:"2197024739",render:function(e){return r.a.createElement("div",{className:l.a.logogrid},a.map((function(a){var t=a.name,n=a.image,s=a.link,o=e.allFile.edges.find((function(e){return e.node.relativePath.endsWith(n)})).node;return r.a.createElement("a",{key:"logo-"+t,href:s,type:"button"},r.a.createElement("img",{src:o.childImageSharp.fixed.src,title:t,alt:"Logo for "+t,style:{filter:"grayscale(100%)"}}))})))}})}},L6Je:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),s=t("Wbzz"),o=t("dmsj"),l=t("+3Ox"),i=t("Fzi1");t("8ypT");a.a=function(e){var a=e.children,t=Object(s.useStaticQuery)("3649515864").site.siteMetadata.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:t}),r.a.createElement(l.a,null),r.a.createElement("main",{className:"px-6 container mx-auto md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mb-16"},a),r.a.createElement(i.a,null))}},Nbiw:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return m}));var n=t("q1tI"),r=t.n(n),s=t("dmsj"),o=t("L6Je"),l=t("xw3c"),i=t("HnL5");a.default=function(e){var a=e.data.allMarkdownRemark.edges;return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"Project: Open Energy Data"}),r.a.createElement("h1",null,"Open Energy Data"),r.a.createElement("div",{className:"markdown"},r.a.createElement("figure",{className:"mb-4"},r.a.createElement("img",{style:{maxHeight:"24rem"},className:"object-cover w-full",src:"https://source.unsplash.com/_SFJhRPzJHs/624x384",alt:"Blog Post Cover Image"}),r.a.createElement("figcaption",{className:"text-xs text-gray-600 text-center mt-1"},"Photo by"," ",r.a.createElement("a",{className:"underline",href:"https://unsplash.com/photos/_SFJhRPzJHs"},"NASA")," ","on"," ",r.a.createElement("a",{className:"underline",href:"https://unsplash.com/"},"Unsplash"))),r.a.createElement("h2",null,"Why?"),r.a.createElement("p",null,"We are facing the huge challenge of decarbonizing our electricity grid. The good news is that we're making amazing progress installing renewable generation and batteries and flexing demand. But these millions of diverse, distributed systems must work together by communicating in the same language. The bad news is that today, these systems speak wildly different languages, and so it's very hard for these systems to work together."),r.a.createElement("p",null,"Sharing data in the energy system will reduce costs, lower the barrier to entry for innovators, and - the bit that we at Open Climate Fix are most passionate about - help achieve net-zero emissions"," ",r.a.createElement("a",{href:"https://es.catapult.org.uk/reports/energy-data-taskforce-report/"},"[Energy Data Taskforce report]"),"."),r.a.createElement("h2",null,"What?"),r.a.createElement("p",null,"We need to, as a community, define elegant, open standards to allow energy systems to share data whilst ensuring security, privacy and legal protection, and rewarding data owners for sharing their data."),r.a.createElement("p",null,"For example, we need to decide on how to collaboratively evolve a vocabulary to describe energy assets; how to uniquely identify physical assets; how to express that - for example - only authorised users can access domestic meter data, but everyone can see data from the grid supply point from which that domestic meter is fed. And, crucially,"," ",r.a.createElement("a",{href:"https://medium.com/@agentGav/the-web-of-data-vs-the-web-of-pages-a560f3e73c21"},"there are many non-technical problems to solve to enable this web of data"),"."),r.a.createElement("p",null,"If we - as a community - get these standards right then, over the coming years and decades, open standards will transform everything in the energy system including network management; demand-side flexibility at scale; electric vehicle smart charging; energy forecasting; resource planning; decarbonisation of heating; community energy; research; policy; coordination of heat, power and transport; the list goes on."),r.a.createElement("h2",null,"How?"),r.a.createElement("p",null,"In creating these standards, we must remember that energy companies are already very busy doing a world-class job of keeping the lights on. So any new standard must be as simple to implement as possible. This is a great opportunity to remove the complexity that exists only for historical reasons. What's really needed today? How can we make these standards as easy-to-use as possible, whilst significantly improving the system?"),r.a.createElement("p",null,"We can also make life easier by glueing together existing parts, rather than reinventing the wheel.")),r.a.createElement("h2",{className:"mt-16"},"Project Partners"),r.a.createElement(i.a,{logos:[{name:"Open Data Institute",image:"odi.png",link:"https://theodi.org/"},{name:"Icebreaker One",image:"icebreakerOneURL.png",link:"https://icebreakerone.org/"}]}),r.a.createElement("div",{className:"markdown"},r.a.createElement("p",null,"We have worked with"," ",r.a.createElement("a",{href:"https://icebreakerone.org/"},"Icebreaker One")," on a proposal for how to support opening up energy data with legal and data permissions structures. We are now focussed on opening up additional PV data - both the metadata to describe systems, and the historical generation data as a use-case which will serve as a really focussed example for sharing energy data more generally, and one that supports our other work. We are lucky enough to be supported by the"," ",r.a.createElement("a",{href:"https://theodi.org/"},"Open Data Institute")," in this endeavour.")),r.a.createElement("h2",{className:"mt-16"},"Updates"),r.a.createElement(l.a,{posts:a}))};var m="2684978758"},pKo1:function(e,a,t){e.exports={logogrid:"logocloud-module--logogrid--gkKmS"}},xw3c:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),s=t("Wbzz"),o=function(e){var a=e.post,t=a.frontmatter,n=t.date,o=t.path,l=t.title,i=t.authorName,m=t.authorImage,c=t.coverImageUnsplashId,d=a.excerpt,g=a.fields.readingTime;return r.a.createElement("li",{className:"list-none mb-4"},r.a.createElement(s.Link,{to:o},r.a.createElement("div",{className:"max-w-md w-full sm:max-w-full sm:flex"},r.a.createElement("img",{className:"h-48 w-full sm:h-auto sm:w-48 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l object-cover",src:"https://source.unsplash.com/"+c+"/400x250"}),r.a.createElement("div",{className:"border-r border-b border-l border-gray-400 sm:border-l-0 sm:border-t sm:border-gray-400 bg-white rounded-b sm:rounded-b-none sm:rounded-r p-4 flex flex-col justify-between leading-normal"},r.a.createElement("div",{className:"mb-8"},r.a.createElement("div",{className:"text-gray-900 font-bold text-xl mb-2"},l),r.a.createElement("p",{className:"text-gray-700 text-base"},d)),r.a.createElement("div",{className:"flex items-center"},r.a.createElement("img",{className:"w-10 h-10 rounded-full mr-4",src:m,alt:"Avatar of author "+i}),r.a.createElement("div",{className:"text-sm"},r.a.createElement("p",{className:"text-gray-900 leading-none"},i),r.a.createElement("p",{className:"text-gray-600"},n," · ",g.text)))))))};a.a=function(e){var a=e.posts;return r.a.createElement("div",{className:"mt-6"},r.a.createElement("ul",null,a.map((function(e){var a=e.node;return r.a.createElement(o,{key:a.id,post:a})}))))}}}]);
//# sourceMappingURL=component---src-pages-projects-open-energy-data-jsx-e702e3c27cfb55598d2a.js.map