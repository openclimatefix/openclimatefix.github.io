---
title: 'Solar PV nowcasting'
path: '/blog/2019-01-09-solar-PV-nowcasting'
date: '2019-01-09'
authorName: 'Jack Kelly'
authorTwitter: 'jack_kelly'
project: 'nowcasting'
---

Solar PV is the single biggest source of uncertainty in the National Grid's forecasts. To mitigate against the risk of a large cloud sweeping across the country (and hence the grid losing gigawatts of PV generation), the National Grid keep lots of natural gas generators idling ('spinning reserve'). These gas turbines are kept idling because they take several hours to start up from cold, but they can be ramped up very quickly from idle; and the physics of the grid dictate that - at every instant - supply must precisely match demand. So, any loss in PV supply must be immediately replaced. Spinning reserve costs a lot of money and pumps out a lot of CO2. If the National Grid had better PV forecasts, even for the next few hours, they could reduce the amount of spinning reserve required, and hence reduce emissions (by about 100,000 tonnes per year) and reduce costs.

"Nowcasting" is a bit of an odd term. It means "forecasting for the next few hours". In general, "nowcasting" doesn't use the hugely complex and expensive numerical weather models that run on super computers and constitute the bread-and-butter for most forecasting agencies. Instead, "nowcasting" usually uses statistical techniques to take recent observations and 'roll them forwards'.

It turns out that most nowcasting research up until now has been done on rainfall (because predicting floods saves lives). Relatively little research has been done on nowcasting sunlight.

I'm a machine learning researcher. So, my main interest is in trying to build machine learning models to nowcast solar PV (which basically boils down to trying to predict the movement and evolution of clouds). I'd like to spend the majority of the next year or two writing code to experiment with new ways to predict sunlight for the next few hours. Inputs to the model may include satellite images of clouds, numerical weather predictions, vertical cloud profiles, and geographical information. As quickly as possible, I'd like to get prototype PV nowcasts displayed in the National Grid control room, so we can start measuring the impact on emissions and cost.

Once I and my co-conspiriators got our heads round the datasets, we'd love to create an open dataset, so that _anyone_ can try their hand at beating the state-of-the-art in PV nowcasting :)

**Update** Please see [July 2019's blog post](/blog/2019-07-01-starting-solar-electricity-nowcasting) for more details about PV nowcasting.
