import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SEO from '../../components/seo';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';


const NowcastingPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Project: Nowcasting" />
      <h1>Nowcasting</h1>
      <main className="markdown">
        <h2>Why?</h2>
        <p>
          Solar Photovoltaics (PV) is the single biggest source of uncertainty in
          the National Grid&apos;s forecasts. To mitigate against the risk of a
          large cloud sweeping across the country (and hence the grid losing
          gigawatts of PV generation), the National Grid keep lots of natural gas
          generators idling (
          <em>spinning reserve</em>
          ).
        </p>
        <p>
          These gas turbines are kept idling because they take several hours to
          start up from cold, but they can be ramped up very quickly from idle;
          and the physics of the grid dictate that - at every instant - supply
          must precisely match demand. So, any loss in PV supply must be
          immediately replaced. Spinning reserve costs a lot of money and pumps
          out a lot of CO2.
        </p>
        <p>
          If the National Grid had better PV forecasts, even for the next few
          hours, they could reduce the amount of spinning reserve required, and
          hence reduce emissions (by about 100,000 tonnes per year) and reduce
          costs.
        </p>
        <h2>What?</h2>
        <p>
          Nowcasting is a bit of an odd term. It means &quot;forecasting for the
          next few hours&quot;. In general, nowcasting doesn&apos;t use the hugely
          complex and expensive numerical weather models that run on super
          computers and constitute the bread-and-butter for most forecasting
          agencies. Instead, nowcasting usually uses statistical techniques to take
          recent observations and
          <em>roll them forwards</em>
          .
        </p>
        <h2>How?</h2>
        <p>
          It turns out that most nowcasting research up until now has been done on
          rainfall (because predicting floods saves lives). Relatively little
          research has been done on nowcasting sunlight.
        </p>
        <p>
          Our main interest is in trying to build machine learning models to
          nowcast solar PV (which basically boils down to trying to predict the
          movement and evolution of clouds). We&apos;d like to spend the majority
          of the next year or two writing code to experiment with new ways to
          predict sunlight for the next few hours. Inputs to the model may include
          satellite images of clouds, numerical weather predictions, vertical cloud
          profiles, and geographical information.
        </p>
        <p>
          As quickly as possible, we&apos;d
          like to get prototype PV nowcasts displayed in the National Grid control
          room, so we can start measuring the
          impact on emissions and cost.
        </p>
      </main>
      <p className="text-xl mt-6 mb-1">
        More Information
      </p>
      <PostList posts={edges} />
    </Layout>
  );
};

NowcastingPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string.isRequired,
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired),
    }).isRequired,
  }).isRequired,
};

export default NowcastingPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { project: {eq: "nowcasting"} } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;
