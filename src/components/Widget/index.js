import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tag from 'components/Tag';
import WidgetSearch from 'components/WidgetSearch';
import WidgetFilter from 'components/WidgetFilter';
import WidgetItem from 'components/WidgetItem';
import WidgetActions from 'components/WidgetActions';
import { MAX_SELECTED_ITEMS } from 'constants/widget';
import './widget.scss';

const Widget = ({ items, selectItem }) => {
  const [selectedItems, setSelectedItems] = useState(
    items.filter(item => item.isChecked).map(item => item.id)
  );
  const [minID, setMinID] = useState(0);
  const [searchText, setSearchText] = useState('');

  const save = () => {
    selectItem(selectedItems);
    // modal close
  };

  const cancel = () => {
    // modal close
  };

  const handleSearchChange = value => {
    setSearchText(value);
  };

  const handlerFilterChange = value => {
    setMinID(value);
  };

  const handleItemRemove = id => {
    setSelectedItems(selectedItems.filter(value => value !== id));
  };

  const handleItemChange = id => {
    const isChecked = selectedItems.includes(id);

    if (isChecked) {
      handleItemRemove(id);
    } else if (selectedItems.length < MAX_SELECTED_ITEMS) {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const filterItems = () => {
    let result = items.filter(item => item.id > minID);

    const trimmedSearchText = searchText.trim();
    if (trimmedSearchText.length > 0) {
      result = result.filter(
        item => item.title.indexOf(trimmedSearchText) >= 0
      );
    }

    return result;
  };

  const filteredItems = filterItems();

  return (
    <div className="widget">
      <div className="widget__header">
        <WidgetSearch searchText={searchText} onChange={handleSearchChange} />
        <WidgetFilter onChange={handlerFilterChange} />
      </div>
      <div className="widget__body">
        {filteredItems.map(({ id, title }) => (
          <WidgetItem
            key={id}
            id={id}
            text={title}
            isChecked={selectedItems.includes(id)}
            isDisabled={
              selectedItems.length === MAX_SELECTED_ITEMS &&
              !selectedItems.includes(id)
            }
            onChange={() => handleItemChange(id)}
          />
        ))}
      </div>
      <div className="widget__footer">
        <div>
          <p>Выбранные элементы на данный момент:</p>
          {selectedItems.map(id => (
            <Tag
              key={id}
              text={items[id].title}
              onClick={() => handleItemRemove(id)}
            />
          ))}
        </div>
        <WidgetActions save={save} cancel={cancel} />
      </div>
    </div>
  );
};

Widget.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectItem: PropTypes.func.isRequired,
};

export default Widget;
