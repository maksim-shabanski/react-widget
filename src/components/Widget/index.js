import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TagGroupContainer from 'containers/TagGroupConteiner';
import WidgetSearch from 'components/WidgetSearch';
import WidgetFilter from 'components/WidgetFilter';
import WidgetItem from 'components/WidgetItem';
import WidgetActions from 'components/WidgetActions';
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

  const filteredItems = filterItems();

  return (
    <div className="widget">
      <div className="widget__header">
        <WidgetSearch searchText={searchText} onChange={handleSearchChange} />
        <WidgetFilter />
      </div>
      <div className="widget__body">
        {filteredItems.map(item => (
          <WidgetItem
            key={item.id}
            item={item}
            basket={basket}
            selectItem={selectItem}
            addItemToBasket={addItemToBasket}
            removeItemFromBasket={removeItemFromBasket}
          />
        ))}
      </div>
      <div className="widget__footer">
        <div>
          Выбранные элементы на данный момент:
          <TagGroupContainer />
        </div>
        <WidgetActions />
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
