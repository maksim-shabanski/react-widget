import React from 'react';
import PropTypes from 'prop-types';

const WidgetItem = ({ id, text, isChecked, isDisabled, onChange }) => (
  <div className="widget__list-item">
    <label htmlFor={`item-${id}`}>
      <input
        id={`item-${id}`}
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
      {text}
    </label>
  </div>
);

WidgetItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WidgetItem;
