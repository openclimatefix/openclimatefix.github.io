(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{HnL5:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),o=t("pKo1"),i=t.n(o);function s(e){var a=e.logos||[{name:"ESA Business Applications",image:"esa_space_solutions.png",link:"https://business.esa.int/"},{name:"Open Data Institute",image:"odi.png",link:"https://theodi.org/"},{name:"The Alan Turing Institute",image:"turing.png",link:"https://www.turing.ac.uk/"},{name:"UCL",image:"UCL.jpg",link:"https://www.ucl.ac.uk/"},{name:"Innovate UK",image:"innovateuk.png",link:"https://www.gov.uk/government/organisations/innovate-uk"},{name:"Machine Intelligence Garage",image:"MI-Garage_Badge_cohort.png",link:"https://www.migarage.ai/"},{name:"The Climate Subak",image:"subak.png",link:"https://www.subak.org/"},{name:"HAO",image:"hao_black.png",link:"https://haocreative.ca/"},{name:"Icebreaker One",image:"icebreakerOneURL.png",link:"https://icebreakerone.org/"},{name:"RAAIS Foundation",image:"raais_foundation.png",link:"https://www.raais.org/"}];return r.a.createElement(l.StaticQuery,{query:"2197024739",render:function(e){return r.a.createElement("div",{className:i.a.logogrid},a.map((function(a){var t=a.name,n=a.image,l=a.link,o=e.allFile.edges.find((function(e){return e.node.relativePath.endsWith(n)})).node;return r.a.createElement("a",{key:"logo-"+t,href:l,type:"button"},r.a.createElement("img",{src:o.childImageSharp.fixed.src,title:t,alt:"Logo for "+t,style:{filter:"grayscale(100%)"}}))})))}})}},L6Je:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),o=t("dmsj"),i=t("+3Ox"),s=t("Fzi1");t("8ypT");a.a=function(e){var a=e.children,t=Object(l.useStaticQuery)("3649515864").site.siteMetadata.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:t}),r.a.createElement(i.a,null),r.a.createElement("main",{className:"px-6 container mx-auto md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mb-16"},a),r.a.createElement(s.a,null))}},Tb3v:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return m}));var n=t("q1tI"),r=t.n(n),l=t("dmsj"),o=t("L6Je"),i=t("xw3c"),s=t("HnL5");a.default=function(e){var a=e.data.allMarkdownRemark.edges;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Project: Solar Panel Mapping"}),r.a.createElement("h1",null,"Solar Panel Mapping"),r.a.createElement("div",{className:"markdown"},r.a.createElement("figure",{className:"mb-4"},r.a.createElement("img",{style:{maxHeight:"24rem"},className:"object-cover w-full",src:"https://source.unsplash.com/d7FbDJkJSFw/624x384",alt:"Blog Post Cover Image"}),r.a.createElement("figcaption",{className:"text-xs text-gray-600 text-center mt-1"},"Photo by"," ",r.a.createElement("a",{className:"underline",href:"https://unsplash.com/photos/d7FbDJkJSFw"},"Markus Spiske")," ","on"," ",r.a.createElement("a",{className:"underline",href:"https://unsplash.com/"},"Unsplash"))),r.a.createElement("h2",null,"Why?"),r.a.createElement("p",null,"Solar PV mapping is very closely related to our PV Forecasting project. Forecasting will provide solar PV yield predictions for any location. To be able to arrive at an accurate forecast for solar power generation out-turn for entire geographical regions, we need to know where all the PV panels are!"),r.a.createElement("h2",null,"What?"),r.a.createElement("p",null,"The OpenStreetMap (OSM) community has already done an incredible job mapping over 100,000 PV installations in the UK (out of over 1 million we believe to exist in the UK) and many more across the world. Our goal is to help grow the effort and drastically increase the amount of PV mapped in OSM."),r.a.createElement("p",null,"Recent research (",r.a.createElement("a",{href:"http://web.stanford.edu/group/deepsolar/home"},"DeepSolar")," ","and",r.a.createElement("a",{href:"https://arxiv.org/pdf/1902.10895.pdf"},"SolarMapper from DUKE")," ","are just two examples) has shown the power of machine learning (ML) for identifying PV panels in satellite and aerial imagery at scale. We want to help pull together the datasets that are generated into a global open database which can be used for updating OSM."),r.a.createElement("p",null,"By helping to create a comprehensive open database of PV installations, we think that many other people will find interesting ways to use the data."),r.a.createElement("h2",null,"How?"),r.a.createElement("p",null,"Map PV installations manually from street level or satellite imagery directly in OSM. There are"," ",r.a.createElement("a",{href:"https://wiki.openstreetmap.org/wiki/Renewable_energy_in_the_United_Kingdom/Rooftop_Solar_PV"},"more details on the OSM wiki"),".")),r.a.createElement("h2",{className:"mt-16"},"Project Partners"),r.a.createElement(s.a,{logos:[{name:"The Alan Turing Institute",image:"turing.png",link:"https://www.turing.ac.uk/"}]}),r.a.createElement("h2",{className:"mt-16"},"Updates"),r.a.createElement(i.a,{posts:a}))};var m="2484328557"},pKo1:function(e,a,t){e.exports={logogrid:"logocloud-module--logogrid--gkKmS"}},xw3c:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),o=function(e){var a=e.post,t=a.frontmatter,n=t.date,o=t.path,i=t.title,s=t.authorName,m=t.authorImage,c=t.coverImageUnsplashId,u=a.excerpt,p=a.fields.readingTime;return r.a.createElement("li",{className:"list-none mb-4"},r.a.createElement(l.Link,{to:o},r.a.createElement("div",{className:"max-w-md w-full sm:max-w-full sm:flex"},r.a.createElement("img",{className:"h-48 w-full sm:h-auto sm:w-48 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l object-cover",src:"https://source.unsplash.com/"+c+"/400x250"}),r.a.createElement("div",{className:"border-r border-b border-l border-gray-400 sm:border-l-0 sm:border-t sm:border-gray-400 bg-white rounded-b sm:rounded-b-none sm:rounded-r p-4 flex flex-col justify-between leading-normal"},r.a.createElement("div",{className:"mb-8"},r.a.createElement("div",{className:"text-gray-900 font-bold text-xl mb-2"},i),r.a.createElement("p",{className:"text-gray-700 text-base"},u)),r.a.createElement("div",{className:"flex items-center"},r.a.createElement("img",{className:"w-10 h-10 rounded-full mr-4",src:m,alt:"Avatar of author "+s}),r.a.createElement("div",{className:"text-sm"},r.a.createElement("p",{className:"text-gray-900 leading-none"},s),r.a.createElement("p",{className:"text-gray-600"},n," · ",p.text)))))))};a.a=function(e){var a=e.posts;return r.a.createElement("div",{className:"mt-6"},r.a.createElement("ul",null,a.map((function(e){var a=e.node;return r.a.createElement(o,{key:a.id,post:a})}))))}}}]);
//# sourceMappingURL=component---src-pages-projects-pv-mapping-jsx-6794a7696010c41749d6.js.map