(self.webpackChunkocf_website=self.webpackChunkocf_website||[]).push([[895],{8991:function(e,t,a){"use strict";var n=a(7294),r=a(5444),o=a(1277),s=a(9221),i=a(537);t.Z=function(e){var t=e.children,a=(0,r.useStaticQuery)("3649515864").site.siteMetadata.title;return n.createElement(n.Fragment,null,n.createElement(o.Z,{title:a}),n.createElement(s.Z,null),n.createElement("main",null,t),n.createElement(i.Z,null))}},2404:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(7294),r=a(5444),o=a(6802);function s(e){var t=e.logos||[{name:"ESA Business Applications",image:"esa_space_solutions.png",link:"https://business.esa.int/"},{name:"Google.org",image:"google_org.png",link:"https://www.google.org/"},{name:"NVIDIA Foundation",image:"nvidia.png",link:"https://www.nvidia.com/en-us/foundation/"},{name:"Open Data Institute",image:"odi.png",link:"https://theodi.org/"},{name:"The Alan Turing Institute",image:"turing.png",link:"https://www.turing.ac.uk/"},{name:"UCL",image:"UCL.jpg",link:"https://www.ucl.ac.uk/"},{name:"Innovate UK",image:"innovateuk.png",link:"https://www.gov.uk/government/organisations/innovate-uk"},{name:"The Climate Subak",image:"subak.png",link:"https://www.subak.org/"},{name:"HAO",image:"hao_black.png",link:"https://haocreative.ca/"},{name:"Icebreaker One",image:"icebreakerOneURL.png",link:"https://icebreakerone.org/"},{name:"RAAIS Foundation",image:"raais_foundation.png",link:"https://www.raais.org/"}];return n.createElement(r.StaticQuery,{query:"325818427",render:function(e){return n.createElement("div",{className:"grid grid-cols-2 gap-8 my-2 sm:grid-cols-3 md:grid-cols-4"},t.map((function(t){var a=t.name,r=t.image,s=t.link,i=(0,o.d)(e.allFile.edges.find((function(e){return e.node.relativePath.endsWith(r)})).node);return n.createElement("a",{className:"flex justify-center col-span-1",key:"logo-"+a,href:s,type:"button"},n.createElement(o.G,{className:"h-14",objectFit:"contain",image:i,title:a,alt:"Logo for "+a}))})))}})}},3756:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(18),r=a(7294),o=a(5444),s=function(e){var t=e.post,a=t.frontmatter,n=a.date,s=a.path,i=a.title,l=a.authorName,c=a.authorImage,m=a.coverImageUnsplashId,u=t.excerpt,d=t.fields.readingTime;return r.createElement("li",{className:"list-none mb-4"},r.createElement(o.Link,{to:s},r.createElement("div",{className:"max-w-md w-full sm:max-w-full sm:flex"},r.createElement("img",{className:"h-48 w-full sm:h-auto sm:w-48 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l object-cover",src:"https://source.unsplash.com/"+m+"/400x250"}),r.createElement("div",{className:"border-r border-b border-l border-gray-400 sm:border-l-0 sm:border-t sm:border-gray-400 bg-white rounded-b sm:rounded-b-none sm:rounded-r p-4 flex flex-col justify-between leading-normal"},r.createElement("div",{className:"mb-8"},r.createElement("div",{className:"text-gray-900 font-bold text-xl mb-2"},i),r.createElement("p",{className:"text-gray-700 text-base"},u)),r.createElement("div",{className:"flex items-center"},r.createElement("img",{className:"w-10 h-10 rounded-full mr-4",src:c,alt:"Avatar of author "+l}),r.createElement("div",{className:"text-sm"},r.createElement("p",{className:"text-gray-900 leading-none"},l),r.createElement("p",{className:"text-gray-600"},n," · ",d.text)))))))},i=function(e){var t=e.options,a=e.selected,o=e.setSelected;return r.createElement("div",{className:"mb-4"},[void 0].concat((0,n.Z)(t)).map((function(e){return r.createElement("button",{className:"mr-2 my-1 text-sm py-0 px-2 border border-black-500 rounded \n          "+(a===e?"bg-gray-500 text-white hover:text-black hover:bg-transparent":"bg-transparent text-black hover:text-white hover:bg-gray-500"),onClick:function(){return o(e)}},e||"all posts")})))},l=function(e){var t=e.posts,a=(0,r.useState)(),o=a[0],l=a[1],c=(0,r.useMemo)((function(){return t.reduce((function(e,t){var a=t.node.frontmatter.project;return a&&!e.includes(a)?[].concat((0,n.Z)(e),[a]):e}),[])}),[t]);return r.createElement("div",{className:"mt-6"},r.createElement(i,{options:c,selected:o,setSelected:l}),r.createElement("ul",null,t.filter((function(e){var t=e.node;return!o||o===t.frontmatter.project})).map((function(e){var t=e.node;return r.createElement(s,{key:t.id,post:t})}))))}},3060:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(1277),o=a(8991),s=a(3756),i=a(2404);t.default=function(e){var t=e.data.allMarkdownRemark.edges;return n.createElement(o.Z,null,n.createElement(r.Z,{title:"Project: Forecasting"}),n.createElement("div",{className:"container px-6 mx-auto mb-16 md:max-w-2xl lg:max-w-2xl xl:max-w-2xl"},n.createElement("h1",null,"Forecasting"),n.createElement("div",{className:"prose"},n.createElement("figure",{className:"mb-4"},n.createElement("div",{className:"video-wrapper"},n.createElement("iframe",{title:"Forecasting Video",src:"https://www.youtube.com/embed/IOp-tj-IJpk",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),n.createElement("figcaption",{className:"mt-1 text-xs text-center text-gray-600"},"Video showing energy production of PV systems in the UK as clouds move overhead.")),n.createElement("h2",null,"Why?"),n.createElement("p",null,"Solar Photovoltaics (PV) is one of the most significant sources of uncertainty in the UK’s power forecasts. To mitigate against the risk of a large cloud sweeping across the country (and hence the grid losing gigawatts of PV generation), the Electricity System Operator (National Grid) keeps lots of natural gas generators operating at less than full capacity, so they have headroom to ramp up quickly (spinning reserve)."),n.createElement("p",null,"The physics of the grid dictate that - at every instant - supply must precisely match demand. So, any loss in PV supply must be immediately replaced. These gas turbines are kept idling because they take several hours to start up from cold, but they can be ramped up very quickly from idle. Spinning reserve costs a lot of money and pumps out a lot of CO2."),n.createElement("p",null,"If National Grid had better PV forecasts, even for the next few hours, they could reduce the amount of spinning reserve required, and hence reduce emissions (by about 100,000 tonnes per year for the UK"," ",n.createElement("a",{href:"https://docs.google.com/document/d/1sfBJ48_hxSEH-XFrwmH0leS4rSsrBKgwzfoeoqGRPfg/edit#heading=h.m4udy6vx0t7k"},"[Details]"),") and reduce costs."),n.createElement("p",null,"Electricity traders and PV farm owners will be able to use better short-term PV forecasts to optimise trading decisions in intra-day markets."),n.createElement("p",null,"Further, this unpredictability of PV power inhibits the investment and onboarding of new PV generation farms, as the local and national system operators are concerned about these unexpected weather events destabilising the grid. By providing greater predictability of PV power output, we can make PV power investments lower risk for all stakeholders."),n.createElement("h2",null,"What?"),n.createElement("p",null,'Nowcasting is a bit of an odd term. It means "forecasting for the next few hours". In general, nowcasting doesn\'t use the hugely complex and computationally-expensive numerical weather models that run on supercomputers and constitute the bread-and-butter for most forecasting agencies. Instead, nowcasting usually uses statistical or machine learning techniques to take recent observations and roll them forwards.'),n.createElement("h2",null,"How?"),n.createElement("p",null,"It turns out that most nowcasting research up until now has been done on rainfall (because predicting floods saves lives and property). Relatively little research has been done on nowcasting sunlight."),n.createElement("p",null,"Our main interest is in trying to build machine learning models to forecast solar PV (which basically boils down to trying to predict the movement and evolution of clouds). We will spend the majority of the next year or two writing code to experiment with new ways to predict sunlight for the next few hours. Inputs to the model may include satellite images of clouds, numerical weather predictions, vertical cloud profiles, and geographical information. We will utilize the team’s experience in Machine Learning as well as contributors from the open source community to accelerate progress."),n.createElement("p",null,"As quickly as possible, we'd like to get early-stage prototype PV forecasts used displayed in the National Grid control room, to validate our model’s effectiveness and so we can start measuring the impact on emissions and cost. Beyond that we will release a nowcasting product for general market consumption.")),n.createElement("h2",{className:"mt-16"},"Project Supporters"),n.createElement(i.Z,{logos:[{name:"ESA Business Applications",image:"esa_space_solutions.png",link:"https://business.esa.int/"},{name:"Google.org",image:"google_org.png",link:"https://www.google.org/"},{name:"NVIDIA Foundation",image:"nvidia.png",link:"https://www.nvidia.com/en-us/foundation/"}]}),n.createElement("div",{className:"prose"},n.createElement("p",null,"We are a"," ",n.createElement("a",{href:"https://openclimatefix.org/blog/2021-04-13-googleorg-support"},"successful applicant to the Google.org Impact Challenge on Climate"),". The Google.org Impact Challenge on Climate commits €10M to fund bold ideas that aim to use technology to accelerate Europe’s progress toward a greener, more resilient future. Selected organisations may receive up to €2M in funding and possible customised post-grant support from the Google for Startups Accelerator to help bring their ideas to life."),n.createElement("p",null,n.createElement("a",{href:"https://business.esa.int/"},"ESA Business Applications")," ","awarded us an AI Kick-Start co-funding for six months. Kick-Start activities are compact Feasibility Studies to explore new service concepts that use space tech. We asked potential users of forecasting what they need; and how best to serve those needs."),n.createElement("p",null)),n.createElement("h2",{className:"mt-16"},"Updates"),n.createElement(s.Z,{posts:t})))}}}]);
//# sourceMappingURL=component---src-pages-projects-forecasting-jsx-6d2e3352c165612d73a5.js.map