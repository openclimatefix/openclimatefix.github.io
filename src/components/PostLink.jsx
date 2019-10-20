import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';


const PostLink = ({ post }) => (
  <li>
    <span>
      {post.frontmatter.date}
&ensp;
    </span>
    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
  </li>
);

PostLink.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      date: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostLink;
