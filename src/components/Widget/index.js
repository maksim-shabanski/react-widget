import React from 'react';
import PropTypes from 'prop-types';

const Widget = ({ items, checkItem }) => {
  const handleChangeCheckbox = id => {
    checkItem(id);
  };

  return (
    <div className="widget">
      {items.map(({ id, title, isChecked }) => (
        <div key={id}>
          <label htmlFor={`item-${id}`}>
            <input
              id={`item-${id}`}
              type="checkbox"
              checked={isChecked}
              onChange={() => handleChangeCheckbox(id)}
            />
            {title}
          </label>
        </div>
      ))}
    </div>
  );
};

Widget.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkItem: PropTypes.func.isRequired,
};

export default Widget;
