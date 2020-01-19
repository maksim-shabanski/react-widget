import React from 'react';
import PropTypes from 'prop-types';

const Widget = ({
  items,
  basket,
  selectItem,
  addItemToBasket,
  removeItemFromBasket,
}) => {
  const handleChangeCheckbox = id => {
    const { title, isChecked } = items[id];

    if (!isChecked && basket.length === 3) {
      return;
    }

    if (isChecked) {
      removeItemFromBasket(id);
    } else {
      addItemToBasket(id, title);
    }

    selectItem(id);
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
  basket: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectItem: PropTypes.func.isRequired,
  addItemToBasket: PropTypes.func.isRequired,
  removeItemFromBasket: PropTypes.func.isRequired,
};

export default Widget;
