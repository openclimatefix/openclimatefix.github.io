import React, { Component } from 'react';
import PostListing from "../../components/PostListing/PostListing";


export default class BlogPosts extends Component {
  render() {
    const { blogPosts } = this.props;
    /*
      Each post has the following structure:
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
    */

    return (
      <React.Fragment>
        <h2>Blog posts</h2>
        <PostListing postEdges={blogPosts} />
      </React.Fragment>
    )
  }
}
