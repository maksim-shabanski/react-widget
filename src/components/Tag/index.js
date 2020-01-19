import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ text, onClick }) => (
  <span>
    {text}
    <button type="button" onClick={onClick}>
      x
    </button>
  </span>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tag;
