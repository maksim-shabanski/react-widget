import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TagGroupContainer from 'containers/TagGroupConteiner';
import './widget.scss';

const Widget = ({
  items,
  basket,
  selectItem,
  addItemToBasket,
  removeItemFromBasket,
}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = ({ target: { value } }) => {
    setSearchText(value);
  };

  const filterItems = () => {
    return items.filter(item => item.title.indexOf(searchText) >= 0);
  };

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

  const filteredItems = filterItems();

  return (
    <div className="widget">
      <div className="widget__header">
        <div className="widget__search">
          <label htmlFor="idget-search">
            Поиск
            <input
              id="widget-search"
              value={searchText}
              type="text"
              onChange={handleSearchChange}
            />
          </label>
        </div>
        <div className="widget__filter">
          Фильтр
          <select>
            <option value="0">Без фильтра</option>
            <option value="1">Номер &gt; 10</option>
            <option value="2">Номер &gt; 100</option>
            <option value="3">Номер &gt; 200</option>
          </select>
        </div>
      </div>
      <div className="widget__body">
        {filteredItems.map(({ id, title, isChecked }) => (
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
      <div className="widget__footer">
        <div>
          Выбранные элементы на данный момент:
          <TagGroupContainer />
        </div>
        <div className="widget__actions">
          <button type="button">Сохранить</button>
          <button type="button">Отменить</button>
        </div>
      </div>
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
