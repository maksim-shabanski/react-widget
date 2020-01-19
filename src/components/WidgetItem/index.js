import React from 'react';
import PropTypes from 'prop-types';

const WidgetItem = ({
  item,
  basket,
  selectItem,
  addItemToBasket,
  removeItemFromBasket,
}) => {
  const { id, title, isChecked } = item;

  const handleChangeCheckbox = () => {
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
    <div>
      <label htmlFor={`item-${id}`}>
        <input
          id={`item-${id}`}
          type="checkbox"
          checked={isChecked}
          onChange={handleChangeCheckbox}
        />
        {title}
      </label>
    </div>
  );
};

WidgetItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    isChecked: PropTypes.bool,
  }).isRequired,
  basket: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectItem: PropTypes.func.isRequired,
  addItemToBasket: PropTypes.func.isRequired,
  removeItemFromBasket: PropTypes.func.isRequired,
};

export default WidgetItem;
