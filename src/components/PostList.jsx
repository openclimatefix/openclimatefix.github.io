import React from 'react';
import PropTypes from 'prop-types';

import PostLink from './PostLink';


const PostList = ({ posts }) => (
  <div className="markdown mt-6">
    <ul>
      {posts.map(({ node: post }) => <PostLink key={post.id} post={post} />)}
    </ul>
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};

export default PostList;
