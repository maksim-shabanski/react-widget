import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MAX_SELECTED_ITEMS } from 'constants/widget';
import WidgetSearch from 'components/WidgetSearch';
import WidgetFilter from 'components/WidgetFilter';
import WidgetList from 'components/WidgetList';
import WidgetActions from 'components/WidgetActions';
import WidgetTags from 'components/WidgetTags';
import './widget.scss';

const Widget = ({ items, selectItem, hideWidget }) => {
  const [selectedItems, setSelectedItems] = useState(
    items.filter(item => item.isChecked)
  );
  const [minID, setMinID] = useState(0);
  const [searchText, setSearchText] = useState('');

  const close = () => {
    hideWidget();
  };

  const save = () => {
    selectItem(selectedItems);
    close();
  };

  const handleSearchChange = value => {
    setSearchText(value);
  };

  const handlerFilterChange = value => {
    setMinID(value);
  };

  const handleItemRemove = id => {
    setSelectedItems(selectedItems.filter(item => item.id !== id));
  };

  const handleItemChange = id => {
    const isChecked = selectedItems.some(item => item.id === id);

    if (isChecked) {
      handleItemRemove(id);
    } else if (selectedItems.length < MAX_SELECTED_ITEMS) {
      setSelectedItems([...selectedItems, items[id - 1]]);
    }
  };

  const filterItems = () => {
    let result = items.filter(item => item.id > minID);

    const trimmedSearchText = searchText.trim();
    if (trimmedSearchText.length > 0) {
      result = result.filter(item => item.text.indexOf(trimmedSearchText) >= 0);
    }

    return result;
  };

  const filteredItems = filterItems();

  return (
    <div className="modal">
      <div className="modal__bg" />
      <div className="widget">
        <div className="widget__header">
          <h3 className="widget__title">Диалог выбора элементов</h3>
          <div className="widget__filters">
            <WidgetSearch
              searchText={searchText}
              onChange={handleSearchChange}
            />
            <WidgetFilter onChange={handlerFilterChange} />
          </div>
          <button
            className="widget__close"
            type="button"
            aria-label="Закрыть виджет"
            onClick={close}
          />
        </div>
        <div className="widget__body">
          <WidgetList
            filteredItems={filteredItems}
            selectedItems={selectedItems}
            itemChange={id => handleItemChange(id)}
          />
        </div>
        <div className="widget__footer">
          <WidgetTags
            tags={selectedItems}
            removeSelectedItem={id => handleItemRemove(id)}
          />
          <WidgetActions save={save} cancel={() => close()} />
        </div>
      </div>
    </div>
  );
};

Widget.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectItem: PropTypes.func.isRequired,
  hideWidget: PropTypes.func.isRequired,
};

export default Widget;
