import React from 'react';
import PropTypes from 'prop-types';

import Tags from 'components/Tags';

const WidgetTags = ({ tags, removeSelectedItem }) => {
  const handleButtonClick = id => {
    removeSelectedItem(id);
  };

  return (
    <div className="widget__tags">
      {tags.length > 0 ? (
        <>
          <p>Currently selected items:</p>
          <Tags tags={tags} onClick={id => handleButtonClick(id)} />
        </>
      ) : (
        <p>No items selected at the moment.</p>
      )}
    </div>
  );
};

WidgetTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeSelectedItem: PropTypes.func.isRequired,
};

export default WidgetTags;
