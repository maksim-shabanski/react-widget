import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MAX_SELECTED_ITEMS } from 'constants/widget';
import WidgetSearch from 'components/WidgetSearch';
import WidgetFilter from 'components/WidgetFilter';
import WidgetList from 'components/WidgetList';
import WidgetActions from 'components/WidgetActions';
import WidgetTags from 'components/WidgetTags';
import './widget.scss';

const Widget = ({ items, selectItems, hideWidget }) => {
  const [selectedItems, setSelectedItems] = useState(
    items.filter(item => item.isChecked)
  );
  const [filteredMinID, setFilteredMinID] = useState();
  const [searchText, setSearchText] = useState('');

  const close = () => {
    hideWidget();
  };

  const save = () => {
    selectItems(selectedItems);
    close();
  };

  const handleItemRemove = id => {
    setSelectedItems(selectedItems.filter(item => item.id !== id));
  };

  const handleItemChange = id => {
    const isChecked = selectedItems.some(item => item.id === id);

    if (isChecked) {
      handleItemRemove(id);
    } else if (selectedItems.length < MAX_SELECTED_ITEMS) {
      const item = items.find(_item => _item.id === id);
      setSelectedItems([...selectedItems, item]);
    }
  };

  const filterItems = () => {
    let result = items;
    if (filteredMinID) {
      result = items.filter(item => item.id > filteredMinID);
    }

    const trimmedSearchText = searchText.trim();
    if (trimmedSearchText.length > 0) {
      result = result.filter(
        item => item.text.indexOf(trimmedSearchText) !== -1
      );
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
            <WidgetSearch searchText={searchText} onChange={setSearchText} />
            <WidgetFilter onChange={setFilteredMinID} />
          </div>
          <button
            className="widget__close"
            type="button"
            aria-label="Закрыть виджет"
            onClick={close}
          />
        </div>
        <div className="widget__body">
          {filteredItems.length > 0 ? (
            <WidgetList
              filteredItems={filteredItems}
              selectedItems={selectedItems}
              itemChange={handleItemChange}
            />
          ) : (
            'Нет совпадений'
          )}
        </div>
        <div className="widget__footer">
          <WidgetTags
            tags={selectedItems}
            removeSelectedItem={handleItemRemove}
          />
          <WidgetActions save={save} cancel={() => close()} />
        </div>
      </div>
    </div>
  );
};

Widget.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectItems: PropTypes.func.isRequired,
  hideWidget: PropTypes.func.isRequired,
};

export default Widget;
