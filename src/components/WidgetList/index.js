import React from 'react';
import PropTypes from 'prop-types';

import { MAX_SELECTED_ITEMS } from 'constants/widget';

const WidgetList = ({ filteredItems, selectedItems, itemChange }) => (
  <div className="widget__list">
    {filteredItems.map(({ id, text }) => (
      <div key={id} className="widget__item">
        <label htmlFor={`item-${id}`}>
          <input
            id={`item-${id}`}
            type="checkbox"
            checked={selectedItems.some(item => item.id === id)}
            disabled={
              selectedItems.length === MAX_SELECTED_ITEMS &&
              !selectedItems.some(item => item.id === id)
            }
            onChange={() => itemChange(id)}
          />
          <span>{text}</span>
        </label>
      </div>
    ))}
  </div>
);

WidgetList.propTypes = {
  filteredItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemChange: PropTypes.func.isRequired,
};

export default WidgetList;
