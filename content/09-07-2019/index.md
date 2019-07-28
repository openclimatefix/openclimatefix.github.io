---
title: "Starting work on solar PV mapping"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "09/07/2019"
category: "PV Mapping"
tags:
    - machine learning
    - climate change mitigation
    - software engineering
---

Solar PV mapping is a sub-project of our [PV nowcasting project](http://jack-kelly.com/blog/2019-07-01-starting-solar-electricity-nowcasting). Nowcasting will provide solar PV yield predictions for any location. To be able to arrive at an accurate forecast for solar power generation (out-turn), we need to know where all the PV panels are!

The OpenStreetMap (OSM) community has already done an incredible job mapping over 10,000 PV installations in the UK (out of over 1 million we believe to exist) and many more across the world. Our goal is to help grow the effort and drastically increase the amount of PV mapped in OSM.

Recent research ([DeepSolar](http://web.stanford.edu/group/deepsolar/home) and [SolarMapper from DUKE](https://arxiv.org/pdf/1902.10895.pdf) are just two examples) has shown the power of machine learning (ML) for identifying PV panels in satellite and aerial imagery at scale. We want to make it easy for anyone to start using ML to map PV across the world, and help pull together the datasets that are generated into a global open database (which can be used for updating OSM).

By creating a comprehensive open database of PV installations, we think that many other people will find interesting ways to use the data.

The UK is our initial focus for the nowcasting project, so we have also focused on mapping PV installations there initially. [Laurence Watson](https://twitter.com/LaurenceWWatson) has taken up the challenge of mapping UK PV using high-resolution 25cm aerial imagery. Although licensing does not allow the aerial imagery to be shared, we will be open sourcing the methods and tools we use. We are using the excellent [Raster Vision](https://rastervision.io/) framework, which will make it easier for anyone to reuse and contribute to the work.

If you are interested in doing a similar ML mapping project in your country (where we can find high resolution imagery), please reach out, as we will be happy to collaborate whilst we do the UK project.

There are other groups doing similar PV mapping projects, and we are excited about the prospect of growing the community, and providing a place for these PV datasets to live.

## How can you contribute?

1. Map PV installations manually from street level or satellite imagery directly in OSM. There are more details on the OSM wiki: [https://wiki.openstreetmap.org/wiki/Renewable_energy_in_the_United_Kingdom/Rooftop_Solar_PV](https://wiki.openstreetmap.org/wiki/Renewable_energy_in_the_United_Kingdom/Rooftop_Solar_PV)
2. Help us clean and organise PV location data. Could involve GIS work or building software to automate things. 
3. Contribute to existing ML PV mapping projects. There is lots of work to be done improving accuracy of the models. Projects include:
    1. UK small scale PV by [Laurence Watson](https://twitter.com/LaurenceWWatson).
    2. Tyler Busby is mapping PV in the USA using Mapbox satellite imagery: [SolarPanelDataWrangler](http://openclimatefix.discourse.group/t/solarpaneldatawrangler/26).
4. Start a new project to map small (residential and business) PV installations in your (or any) country.

If there is a specific area of PV mapping you'd like to get involved in, feel free to reach out to [@dctanner](https://twitter.com/dctanner). Or more generally, if you’d like to get involved, please register your interest on [OCF’s volunteer register](https://airtable.com/shrl59GJ96csVF4WB) and/or join the conversations on [OCF’s forum](http://openclimatefix.discourse.group/).

(This blog post was written by [Damien](https://twitter.com/dctanner), who is leading OCF's PV mapping project!)