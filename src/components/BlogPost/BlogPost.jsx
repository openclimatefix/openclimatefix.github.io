/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SEO from '../seo';
import Layout from '../Layout';

import AuthorInline from './AuthorInline';


export default function BlogPost({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark: { frontmatter, html } } = data;
  const {
    authorName,
    authorTwitter,
    title,
    date,
  } = frontmatter;

  return (
    <Layout>
      <SEO title={`Blog: ${title}`} />
      <article className="">
        <h1>{title}</h1>
        <p className="mt-4 text-sm text-gray mb-12">
          {date}
  &nbsp;
          <AuthorInline name={authorName} twitter={authorTwitter} />
        </p>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        authorName
        authorTwitter
      }
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
        authorTwitter: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
