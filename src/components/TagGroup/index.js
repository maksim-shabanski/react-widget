import React from 'react';
import PropTypes from 'prop-types';

import Tag from 'components/Tag';

const TagGroup = ({ selectedItems, changeItem }) => {
  const handleButtonClick = id => {
    changeItem(id);
  };

  return (
    <div className="tag-group">
      {selectedItems.map(({ id, title }) => (
        <Tag key={id} text={title} onClick={() => handleButtonClick(id)} />
      ))}
    </div>
  );
};

TagGroup.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeItem: PropTypes.func.isRequired,
};

export default TagGroup;
