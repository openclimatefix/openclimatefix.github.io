import React from 'react';

import SEO from '../components/seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CloudHero from '../components/CloudHero';

import '../components/layout.css';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <CloudHero />
    <main className="px-6 container mx-auto md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mb-16">
      <h2 id="about" className="mt-16 mb-2">About</h2>
      <div className="markdown">
        <p>
          Open Climate Fix is a new non-profit research and
          development lab, totally focused on reducing greenhouse gas emissions as
          rapidly as possible. Every part of the organisation is designed to
          maximise climate impact, such as our open and collaborative approach,
          our rapid prototyping, and our attention on finding scalable &amp;
          practical solutions.
        </p>
        <p>
          By using an open-source approach, we can draw upon a much larger pool of
          knowledge and skills than any individual company, so combining existing
          islands of knowledge and accelerating progress.
        </p>
        <p>
          Our approach will be to search for ML (Machine Learning) problems where,
          if we solve a well-defined ML task, then there is likely to be a large
          climate impact. Then, for each of these challenges, we will:
        </p>
        <ol>
          <li>
            <strong>Collate &amp; release data</strong>
            , and write software tools to make it super-easy for people to consume
            this data.
          </li>
          <li>
            <strong>
              Run a collaborative &ldquo;global research project&rdquo;
            </strong>
            {' '}
            where everyone from 16-year-olds to PhD students to corporate research
            labs can help solve the ML task (and, over the last 6 weeks, we have
            received over 300 emails from people who’d love to get involved).
          </li>
          <li>
            <strong>Help to put good solutions into production</strong>
            , once the community has developed them, so we can be reducing
            emissions ASAP.
          </li>
        </ol>
      </div>

      <h2 id="solar-pv" className="mt-16 mb-2">
        Our first area of focus: Solar Photovoltaics
      </h2>
      <div className="markdown">
        <p>
          Solar Photovoltaics (PV) is the largest source of uncertainty in
          electricity system operators&rsquo; forecasts. If a dark cloud moves
          across the sky, the grid can be taken by surprise and lose
          hundreds of megawatts of PV generation within minutes. This
          lost PV generation must be replaced immediately. But thermal
          generators take hours to spin-up from cold. The end result is
          that, whenever the sun is shining, the grid keeps lots of
          spinning-reserve online: mostly gas turbines, which are kept
          idling, but not generating electricity. This is expensive
          and carbon intensive.
        </p>
        <p>
          The grid would require less spinning reserve
          if they had better PV forecasts for the next few hours. That is,
          better PV forecasts would reduce carbon emissions, and save
          money. In the UK, better PV forecasts should save &pound;1-10
          million per year (
          <a href="https://www.researchgate.net/profile/Jamie_Taylor7/project/PV-Live/attachment/58342d5c08ae5e4c8b365783/AS:431187387785227@1479814492614/download/JamieTaylor_PV_Live_v1_20161122.pdf">
            Taylor et al, 2016
          </a>
          ), and about 100,000 tonnes of CO
          <sub>2</sub>
          {' '}
          per year. Scaled up
          globally, the carbon savings should be of the order of tens of millions
          of tonnes per year.
        </p>
        <p>
          <a href="/projects">
            &rarr; Learn more about our projects Solar PV Nowcasting and PV Mapping
          </a>
        </p>
      </div>

      <h2 id="get-involved" className="mt-16 mb-2">Get Involved</h2>
      <div className="markdown">
        <ul>
          <li>
            <a href="https://opencollective.com/openclimatefix">Donate</a>
            {' '}
            to our OpenCollective
          </li>
          <li>
            Follow us by
            {' '}
            <a href="https://eepurl.com/guCjvH">signing up to our newsletter</a>
          </li>
          <li>
            Join the
            {' '}
            <a href="https://openclimatefix.discourse.group/">OCF discussion forum</a>
          </li>
        </ul>
        <p>
          Also check out
          {' '}
          <a href="/blog/2019-03-06-how-to-get-involved">
            Jack&apos;s blog post about getting involved
          </a>
          .
        </p>
      </div>
      <h2 id="funding" className="mt-16 mb-2">Funding</h2>
      <div className="markdown">
        <p>
          Our intention is that Open Climate Fix will reduce emissions by at
          least millions of tonnes, at a cost of a few dollars per tonne, so
          considerably cheaper than most other interventions.
        </p>
        <p>The RAAIS Foundation have very kindly given OCF our first grant!</p>
        <a href="https://www.raais.org/">
          <img
            className="mt-10"
            style={{ maxWidth: '12rem' }}
            alt="Logo RAAIS Foundation"
            src="https://raw.githubusercontent.com/openclimatefix/openclimatefix.github.io/master/src/images/sponsor_raais.png"
          />
        </a>
        <div>
          <p>
            &ldquo;The
            {' '}
            <a href="https://www.raais.org/">RAAIS Foundation</a>
            {' '}
            mission is to advance education and research in artificial intelligence
            for the common good.
          </p>
          <p>
            We believe that the real-world impact of AI research will go well beyond
            solely for-profit applications.
          </p>
          <p>
            The Foundation creates educational content for the general public to
            build awareness and knowledge about AI technology and its impact on the
            world.
          </p>
          <p>
            The Foundation awards grants for open source research and projects that
            align with our mission. In particular, we support communities that would
            otherwise not have a chance to participate in advancing AI.&rdquo;
          </p>
        </div>
        <hr />
        <p>
          If you are into climate philanthropy - or if you know of anyone else who
          is, please
          {' '}
          <a href="mailto:info@openclimatefix.org">get in touch</a>
          .
        </p>
      </div>

      <h2 id="founders" className="mt-16 mb-2">The Founders</h2>
      <div className="markdown">
        <h3>Jack Kelly</h3>
        <p>
          Jack Kelly is terrified by climate change and is determined to
          do everything in his power to reduce emissions, and so he has been
          applying machine learning to climate change mitigation for about
          ten years.
        </p>
        <p>
          Jack left Google DeepMind in December 2018 to build
          Open Climate Fix. At DeepMind, Jack worked as a research
          engineer working
          on
          {' '}
          <a href="https://deepmind.com/blog/machine-learning-can-boost-value-wind-energy/">
            using neural networks to predict wind power
          </a>
          .
        </p>
        <p>
          Prior to DeepMind, Jack did a PhD and postdoc at Imperial College London
          on electricity disaggregation. During his academic work, Jack
          collected and released
          the
          {' '}
          <a href="http://jack-kelly.com/data/">
            UK&rsquo;s largest dataset of domestic appliance-level electricity consumption
          </a>
          ,
          he was the first
          to
          {' '}
          <a href="http://dx.doi.org/10.1145/2821650.2821672">
            apply deep learning to disaggregation
          </a>
          , and he was co-founder and one of three lead developers on the most popular
          {' '}
          <a href="http://nilmtk.github.io/">
            open-source framework for electricity disaggregation
          </a>
          .
        </p>

        <h3>Dan Travers</h3>
        <p>
          Dan Travers has moved to part time in his
          role as Senior Vice President of Product Management in financial
          markets software in order to work on solar energy forecasting in
          which he is currently a part-time PhD student at University of
          Sheffield.
        </p>
        <p>
          Dan has 20 years of experience working in data
          analysis and analytic software engineering for energy and
          derivative markets trading and risk management, and now has a
          passion for using his vast experience to help to mitigate
          climate change.
        </p>
        <p>
          Dan previously worked in an electricity trading
          and supply firm in Australia and has a Masters in Mathematics.
        </p>
      </div>

      <h2 id="newsletter" className="mt-16 mb-2">Newsletter</h2>
      <div id="mc_embed_signup">
        <form
          className="w-full"
          action="https://openclimatefix.us20.list-manage.com/subscribe/post?u=ceb017fe32f0a4620227fda8a&amp;id=d56fc32a31"
          method="post"
          target="_blank"
          noValidate
        >
          <div className="flex items-center border-b border-b-2 border-black py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="john@doe.com"
              aria-label="Email"
              type="email"
              name="EMAIL"
            />
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_ceb017fe32f0a4620227fda8a_d56fc32a31" tabIndex="-1" />
            </div>
            <button
              className="flex-shrink-0 bg-black hover:bg-gray-800 border-black hover:border-gray-800 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
            >
              Subscribe
            </button>
          </div>
        </form>
        <p className="mt-4 text-xs">
          We use Mailchimp as our marketing platform. By clicking above to
          subscribe, you acknowledge that your information will be transferred to
          Mailchimp for processing.
          {' '}
          <a
            href="https://mailchimp.com/legal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Learn more about Mailchimp&apos;s privacy practices here.
          </a>
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default IndexPage;
