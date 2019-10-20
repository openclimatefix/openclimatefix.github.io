import React from 'react';
import PropTypes from 'prop-types';


export default function AuthorInline({ name, twitter }) {
  return (
    <span>
      ·
      {' '}
      {name}
      &nbsp;
      {twitter && (
      <span>
        {' '}
        <a className="text-blue-600" href={`https://twitter.com/${twitter}`}>
            @
          {twitter}
        </a>
      </span>
      )}
    </span>
  );
}

AuthorInline.propTypes = {
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string,
};

AuthorInline.defaultProps = {
  twitter: 'openclimatefix',
};
