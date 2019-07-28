---
title: "Starting work on solar electricity nowcasting"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "01/07/2019"
category: "PV Nowcasting"
tags:
    - machine learning, 
    - climate change mitigation
    - software engineering
---

At [Open Climate Fix](http://openclimatefix.org), we're about to start work on our solar electricity (PV) nowcasting project.  The aim of this project is to help reduce emissions (and costs) by forecasting solar electricity power production at high temporal and spatial resolution, but with a forecast time horizon of a few hours.  We'll use machine learning to combine satellite images, numerical weather predictions, and live solar PV data.  All our research code will be open source; and we'll blog about our results (including negative results); and we're working hard to make it easy for other researchers to access the data necessary to do this research :)

To be kept up to date, please [sign up to OCF's newsletter](https://eepurl.com/guCjvH) (and/or [follow Jack on Twitter](https://twitter.com/jack_kelly)!).  If you'd like to get involved, please register your interest on [OCF's volunteer register](https://airtable.com/shrl59GJ96csVF4WB) and/or join the conversations on [OCF's forum](http://openclimatefix.discourse.group/).

OCF is also working on mapping the location of PV panels.  We'll blog about the PV mapping project soon :)


## Why is solar electricity nowcasting useful?

There are several uses for better solar forecasts.  One use case that we're focusing on is to help electricity system operators (like the UK National Grid) to schedule spinning reserve.

What does that mean?!

The physics of the electricity grid dictate that, at every moment, supply must exactly match demand.  Small changes in demand are handled automatically: When you turn on your kettle, a generator somewhere on the grid will automatically produce a tiny bit more power.  But what if a large cloud covers hundreds of megawatts of solar PV panels?  The lost PV generation must be replaced within a few seconds.  But it takes many minutes, or even hours, to spin up a natural-gas power plant from cold.  So, whenever any solar PV power is on the system, electricity system operators schedule lots of 'upwards spinning reserve' (typically thermal generators which are operated at less than 100% capacity, and so can be ramped up quickly to replace lost PV generation).

At present, system operators take a fairly crude and conservative approach to deciding how much spinning reserve to schedule.

With better forecasts for solar PV generation, electricity system operators will be able to schedule spinning reserve more efficiently, which will reduce emissions from the spinning reserve, and reduce costs, and enable the electricity system to handle a greater penetration of solar PV.  In particular, we need solar PV nowcasts which do a good job of quantifying _uncertainty_.  If we're confident the day will stay sunny, we can schedule less spinning reserve.

One of our aims is to run a pilot project with at least one electricity system operator, to test if probabilistic PV nowcasts really do help schedule the grid.


## Conventional forecasting techniques aren't well suited for solar nowcasting

Conventional forecasting techniques ('numerical weather predictions') are fantastic at forecasting things like the temperature and wind speeds for tomorrow.  But numerical weather predictions aren't so good at forecasting the amount of sunlight falling on the Earth's surface ('irradiance'), nor are they great at predicting the next few hours ('nowcasting').  This is for several reasons:

* Numerical weather models take at least an hour to run and so, by the time they've finished executing, they are already an hour out of date with respect to the most recent observations.  This isn't a problem for forecasting temperature.  But clouds can change quite dramatically over an hour!
* Solar irradiance is greatly affected by clouds; yet operational numerical weather models can't resolve clouds.  Instead, numerical weather models 'parameterise' clouds.
* The 'radiative transfer codes' in numerical weather models (the bits which simulate light bouncing around the atmosphere) are some of the most computationally expensive bits of numerical weather models, and so might be run infrequently, or might be run in quite a limited fashion.
* Historically, there simply hasn't been much demand for highly accurate forecasts for irradiance.  And so not much research has been done on the topic (although that is changing: We're certainly not the only folks working on solar PV nowcasting!)


## Our planned approach

We'll explore if machine learning (ML) can help nowcast solar PV power production.  There's quite a lot of data available to train ML models; and there are lots of ML engineers who are keen to help.

In particular, we're planning to work on several distinct ML tasks.  In brief, we plan to split the problem into two parts: nowcast the movement of clouds; and then infer solar PV power for a given configuration of the atmosphere.  In a little more detail, the steps are:

1) Infer solar PV yield (normalised by clear-sky PV yield) from satellite images of clouds, and numerical weather predictions.  That is, don't forecast the _future_, 'just' try to learn the 'radiative transfer function' of the atmosphere.  Learn how different types of clouds and aerosols affect the passage of sunlight through the atmosphere.  If this works, then we'll end up with a system which can tell us the solar PV yield for a single site, given a satellite image of cloud cover over that site, and maybe some data about aerosols, ozone, and water vapour.  We can 'sweep' this model across large geographical areas to produce a historical 'solar PV reanalysis' dataset.

2) Learn how clouds move.  We'll start simple, and use conventional 'nowcasting' techniques (Take the most recent satellite image of cloud cover.  For each pixel of cloud, move that pixel according to the wind speed and direction at that pixel).  Then we'll try modelling different vertical cloud decks separately (so if high cloud moves over lower cloud, our model should understand that the low cloud probably still exists, even though it's obscured by the higher cloud).  Finally, we'll try 'pure ML' approaches (such as video prediction).

Once we've built a proof-of-concept models for step 1 and 2, we'll combine these to produce a simple PV nowcasting system.

3) Clouds don't just _move_.  Clouds condense out of 'nothing'; and evaporate / precipitate away into 'nothing'.  Clouds change shape; grow vertically; merge; split; change opacity, etc.  Can we train a machine learning model to predict how clouds will 'evolve' over a few hours?

A more detailed plan is available [here](https://docs.google.com/document/d/1IS0h-W_GyRRUDV8Ur1jiWXYSGZn_Soq-H0UUdvmpXi0/edit?usp=sharing).


## Ultra-open science; and how to get involved

All our code will be open (on GitHub); we'll blog about results (including negative results); we'll openly discuss ideas and concerns; and we'll maintain a public 'leaderboard' to show how well different models have performed (hopefully, over time, many of those models will be built by other people!)

It'll take us another few months to get the project off the ground but, once we do, we'd love people to get involved in the conversations; and to build software tools to help process and visualise the data :)

But, by far the best way to scale this research across multiple people is probably to enable you folks to try your own modelling approaches (i.e. to take Open Climate Fix out of the loop!  You guys just download the data, and maybe use some open-source tools the community develops, and try to beat the current state-of-the-art, and then send your score to the leaderboard)

If we write a paper, then everyone who contributes ideas or code will be listed as an author :)

If you'd like to get involved, please register your interest on [OCF's volunteer register](https://airtable.com/shrl59GJ96csVF4WB) and/or join the conversations on [OCF's forum](http://openclimatefix.discourse.group/).


### Data

When we started Open Climate Fix, we hoped to be able to make life super-easy for researchers by collating all relevant datasets into one location.  Unfortunately, we're strictly not allowed to 'redistribute' the satellite data, so we can't collate the satellite data.  We're working on fixing this!  But this isn't a deal-breaker, as each individual researcher can download the historical satellite data for free from the satellite data provider (EUMETSAT).  We'll try to make tools and documentation to make this as painless as possible.

We're also working hard to get some solar PV power data released into the open.

