import React from 'react';
import { Link } from 'gatsby';
import SEO from '../../components/seo';

import Layout from '../../components/Layout';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <main className="markdown">
      <p>
        Currently we are pursuing two projects at OCF, both are focused on Solar
        Photovoltaics (PV).
      </p>
      <p>
        Our first project,&nbsp;
        <Link to="/projects/nowcasting">Solar PV Nowcasting</Link>
        , investigates the possibilities of using Machine Learning Models to forecast
        the output of solar photovoltaic installations for the next few hours.
      </p>
      <p>
        Output of PV is a very uncertain measure: Clouds are moving constantly and
        are influencing electricity generation heavily. To keep the energy grid in
        balance, operators need to have a readily available backup which usually
        comes from fossile sources.
      </p>
      <p>
        Our assumption is the following: If we have more accurate predictions of
        how much electricity a PV installation will produce in a few hours from
        now, less time can be spend on running fossile fuel backups.
      </p>
      <p>
        <Link to="/blog/2019-07-09-solar-pv-mapping">PV Mapping&nbsp;</Link>
        is our second project. We would like to support the
        {' '}
        <a href="https://www.openstreetmap.org/">OpenStreetMap</a>
        {' '}
        community to map the location of the world&apos;s PV panels in
        OpenStreetMap. OpenSteetMap is like the Wikipedia of maps: anyone can edit
        the database. We plan to use a combination of machine learning and the
        wisdom of the crowd to locate PV panels.
      </p>
      <p>
        To be able to arrive at an accurate forecast for solar power generation,
        we need to know where all the PV panels are.
        You can support us in mapping the geographical location of PV Systems by
        using the
        {' '}
        <a href="https://wiki.openstreetmap.org/wiki/Tag:generator:source=solar">
          tag:generator:source=solar
        </a>
        .
      </p>
    </main>
  </Layout>
);

export default ProjectsPage;
