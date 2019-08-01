import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/Header";
import PostListing from "../components/PostListing/PostListing";
import Animation from "../components/Animation";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="blog-post__header">
          <Animation />
        </div>
        <div className="wrap">
          <Header />
          <h1 className="blog-post__title">All posts tagged "{tag}"</h1>
          <div className="blog-post__container">
            <div className="blog-post">
              <Helmet
                title={`Posts tagged as "${tag}" | ${config.siteTitle}`}
              />
              <div className="tag-container">
                <PostListing postEdges={postEdges} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
