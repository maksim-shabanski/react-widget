import React from 'react';
import PropTypes from 'prop-types';

import Tags from 'components/Tags';

const WidgetTags = ({ tags, removeSelectedItem }) => {
  const handleButtonClick = id => {
    removeSelectedItem(id);
  };

  return (
    <div className="widget__tags">
      <p>
        {tags.length > 0
          ? 'Выбранные элементы на данный момент:'
          : 'Нет выбранных элементов на данный момент.'}
      </p>
      <Tags tags={tags} onClick={id => handleButtonClick(id)} />
    </div>
  );
};

WidgetTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeSelectedItem: PropTypes.func.isRequired,
};

export default WidgetTags;
