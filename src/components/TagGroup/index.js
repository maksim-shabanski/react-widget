import React from 'react';
import PropTypes from 'prop-types';

import Tag from 'components/Tag';

const TagGroup = ({ basket, selectItem, removeItemFromBasket }) => {
  const handleButtonClick = id => {
    selectItem(id);
    removeItemFromBasket(id);
  };

  return (
    <div className="tag-group">
      {basket.map(({ id, title }) => (
        <Tag key={id} text={title} onClick={() => handleButtonClick(id)} />
      ))}
    </div>
  );
};

TagGroup.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectItem: PropTypes.func.isRequired,
  removeItemFromBasket: PropTypes.func.isRequired,
};

export default TagGroup;
