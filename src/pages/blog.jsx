import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout';
import PostList from '../components/PostList';


const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <p>
      One of our biggest goals at Open Climate Fix is transparency. We want to
      let people take part in the work we do and we think that is only possible
      by openly communicating about it. This blog is one part of how we want
      to achieve that.
    </p>
    <PostList posts={edges} />
  </Layout>
);

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
            }).isRequired,
          }),
        }).isRequired,
      ),
    }),
  }).isRequired,
};

export default BlogPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
