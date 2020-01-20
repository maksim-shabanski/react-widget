import React from 'react';
import PropTypes from 'prop-types';

import './tags.scss';

const Tags = ({ tags, onClick }) => {
  const handleButtonClick = id => {
    onClick(id);
  };

  return (
    <div className="tags">
      {tags.map(({ id, text }) => (
        <span key={id} className="tags__item">
          {text}
          <button
            className="tags__close"
            type="button"
            onClick={() => handleButtonClick(id)}
            aria-label="Удалить"
          />
        </span>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tags;
