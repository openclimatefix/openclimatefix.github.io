(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{HnL5:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),s=a("Wbzz"),o=a("pKo1"),i=a.n(o);function l(e){var t=e.logos||[{name:"ESA Business Applications",image:"esa_space_solutions.png",link:"https://business.esa.int/"},{name:"Open Data Institute",image:"odi.png",link:"https://theodi.org/"},{name:"The Alan Turing Institute",image:"turing.png",link:"https://www.turing.ac.uk/"},{name:"UCL",image:"UCL.jpg",link:"https://www.ucl.ac.uk/"},{name:"Innovate UK",image:"innovateuk.png",link:"https://www.gov.uk/government/organisations/innovate-uk"},{name:"Machine Intelligence Garage",image:"MI-Garage_Badge_cohort.png",link:"https://www.migarage.ai/"},{name:"The Climate Subak",image:"subak.png",link:"https://www.subak.org/"},{name:"HAO",image:"hao_black.png",link:"https://haocreative.ca/"},{name:"Icebreaker One",image:"icebreakerOneURL.png",link:"https://icebreakerone.org/"},{name:"RAAIS Foundation",image:"raais_foundation.png",link:"https://www.raais.org/"}];return r.a.createElement(s.StaticQuery,{query:"2197024739",render:function(e){return r.a.createElement("div",{className:i.a.logogrid},t.map((function(t){var a=t.name,n=t.image,s=t.link,o=e.allFile.edges.find((function(e){return e.node.relativePath.endsWith(n)})).node;return r.a.createElement("a",{key:"logo-"+a,href:s,type:"button"},r.a.createElement("img",{src:o.childImageSharp.fixed.src,title:a,alt:"Logo for "+a,style:{filter:"grayscale(100%)"}}))})))}})}},L6Je:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("Wbzz"),o=a("dmsj"),i=a("+3Ox"),l=a("Fzi1"),c=(a("8ypT"),a("ZOo5"));t.a=function(e){var t=e.children,a=Object(s.useStaticQuery)("3649515864").site.siteMetadata.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:a}),r.a.createElement(c.a,null),r.a.createElement(i.a,null),r.a.createElement("main",{className:"px-6 container mx-auto md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mb-16"},t),r.a.createElement(l.a,null))}},pKo1:function(e,t,a){e.exports={logogrid:"logocloud-module--logogrid--gkKmS"}},"w/OJ":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var n=a("q1tI"),r=a.n(n),s=a("dmsj"),o=a("L6Je"),i=a("xw3c"),l=a("HnL5");t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"Project: Forecasting"}),r.a.createElement("h1",null,"Forecasting"),r.a.createElement("div",{className:"markdown"},r.a.createElement("div",{className:"video-wrapper"},r.a.createElement("iframe",{title:"Forecasting Video",src:"https://www.youtube.com/embed/IOp-tj-IJpk",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement("p",null,"Video showing energy production of PV systems in the UK as clouds move overhead."),r.a.createElement("h2",null,"Why?"),r.a.createElement("p",null,"Solar Photovoltaics (PV) is one of the most significant sources of uncertainty in the UK’s power forecasts. To mitigate against the risk of a large cloud sweeping across the country (and hence the grid losing gigawatts of PV generation), the Electricity System Operator (National Grid) keeps lots of natural gas generators operating at less than full capacity, so they have headroom to ramp up quickly (spinning reserve)."),r.a.createElement("p",null,"The physics of the grid dictate that - at every instant - supply must precisely match demand. So, any loss in PV supply must be immediately replaced. These gas turbines are kept idling because they take several hours to start up from cold, but they can be ramped up very quickly from idle. Spinning reserve costs a lot of money and pumps out a lot of CO2."),r.a.createElement("p",null,"If National Grid had better PV forecasts, even for the next few hours, they could reduce the amount of spinning reserve required, and hence reduce emissions (by about 100,000 tonnes per year for the UK"," ",r.a.createElement("a",{href:"https://docs.google.com/document/d/1sfBJ48_hxSEH-XFrwmH0leS4rSsrBKgwzfoeoqGRPfg/edit#heading=h.m4udy6vx0t7k"},"[Details]"),") and reduce costs."),r.a.createElement("p",null,"Electricity traders and PV farm owners will be able to use better short -term PV forecasts to optimise trading decisions in intra-day markets."),r.a.createElement("p",null,"Further, this unpredictability of PV power inhibits the investment and onboarding of new PV generation farms, as the local and national system operators are concerned about these unexpected weather events destabilising the grid. By providing greater predictability of PV power output, we can make PV power investments lower risk for all stakeholders."),r.a.createElement("h2",null,"What?"),r.a.createElement("p",null,'Nowcasting is a bit of an odd term. It means "forecasting for the next few hours". In general, nowcasting doesn\'t use the hugely complex and computationally-expensive numerical weather models that run on supercomputers and constitute the bread-and-butter for most forecasting agencies. Instead, nowcasting usually uses statistical or machine learning techniques to take recent observations and roll them forwards.'),r.a.createElement("h2",null,"How?"),r.a.createElement("p",null,"It turns out that most nowcasting research up until now has been done on rainfall (because predicting floods saves lives and property). Relatively little research has been done on nowcasting sunlight."),r.a.createElement("p",null,"Our main interest is in trying to build machine learning models to forecast solar PV (which basically boils down to trying to predict the movement and evolution of clouds). We will spend the majority of the next year or two writing code to experiment with new ways to predict sunlight for the next few hours. Inputs to the model may include satellite images of clouds, numerical weather predictions, vertical cloud profiles, and geographical information. We will utilize the team’s experience in Machine Learning as well as contributors from the open source community to accelerate progress."),r.a.createElement("p",null,"As quickly as possible, we'd like to get early-stage prototype PV forecasts used displayed in the National Grid control room, to validate our model’s effectiveness and so we can start measuring the impact on emissions and cost. Beyond that we will release a nowcasting product for general market consumption.")),r.a.createElement("h2",{className:"mt-16"},"Project Partners"),r.a.createElement(l.a,{logos:[{name:"ESA Business Applications",image:"esa_space_solutions.png",link:"https://business.esa.int/"}]}),r.a.createElement("div",{className:"markdown"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://business.esa.int/"},"ESA Business Applications")," aims to show that space is open for business and has the power to improve our everyday lives on Earth. They do this by helping companies to integrate space data and technology into commercial services."),r.a.createElement("p",null,"ESA awarded us an AI Kick-Start co-funding for six months. Kick-Start activities are compact Feasability Studies to explore new service concepts that use space tech. We will ask potential users of forecasting what they need; and how best to serve those needs.")),r.a.createElement("h2",{className:"mt-16"},"Updates"),r.a.createElement(i.a,{posts:t}))};var c="4185856933"},xw3c:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("Wbzz"),o=function(e){var t=e.post,a=t.frontmatter,n=a.date,o=a.path,i=a.title,l=a.authorName,c=a.authorImage,m=a.coverImageUnsplashId,u=t.excerpt,d=t.fields.readingTime;return r.a.createElement("li",{className:"list-none mb-4"},r.a.createElement(s.Link,{to:o},r.a.createElement("div",{className:"max-w-md w-full sm:max-w-full sm:flex"},r.a.createElement("img",{className:"h-48 w-full sm:h-auto sm:w-48 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l object-cover",src:"https://source.unsplash.com/"+m+"/400x250"}),r.a.createElement("div",{className:"border-r border-b border-l border-gray-400 sm:border-l-0 sm:border-t sm:border-gray-400 bg-white rounded-b sm:rounded-b-none sm:rounded-r p-4 flex flex-col justify-between leading-normal"},r.a.createElement("div",{className:"mb-8"},r.a.createElement("div",{className:"text-gray-900 font-bold text-xl mb-2"},i),r.a.createElement("p",{className:"text-gray-700 text-base"},u)),r.a.createElement("div",{className:"flex items-center"},r.a.createElement("img",{className:"w-10 h-10 rounded-full mr-4",src:c,alt:"Avatar of author "+l}),r.a.createElement("div",{className:"text-sm"},r.a.createElement("p",{className:"text-gray-900 leading-none"},l),r.a.createElement("p",{className:"text-gray-600"},n," · ",d.text)))))))};t.a=function(e){var t=e.posts;return r.a.createElement("div",{className:"mt-6"},r.a.createElement("ul",null,t.map((function(e){var t=e.node;return r.a.createElement(o,{key:t.id,post:t})}))))}}}]);
//# sourceMappingURL=component---src-pages-projects-forecasting-jsx-83f8ca5a0a4c10d50278.js.map