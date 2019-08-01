import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <div className="blog-post__tag_container">
              <span className="blog-post__tag">
                <Link
                  key={tag}
                  style={{ textDecoration: "none" }}
                  to={`/tags/${_.kebabCase(tag)}`}
                >
                  {tag}
                </Link>
              </span>
            </div>
          ))}
      </div>
    );
  }
}

export default PostTags;
