import React from 'react';
import PropTypes from 'prop-types';

import TagGroup from 'components/TagGroup';

const Dashboard = ({ items, changeItem }) => {
  const selectedItems = items.filter(item => item.isChecked);
  const countSelectedItems = selectedItems.length;
  let endOfSentence = 'выбрано 0 элементов';

  if (countSelectedItems === 1) {
    endOfSentence = 'выбран 1 элемент';
  } else if (countSelectedItems > 1) {
    endOfSentence = `выбранo ${countSelectedItems} элемента`;
  }

  return (
    <div className="dashboard">
      <h2>Выбор элементов</h2>
      <p>На данный момент выбрано {endOfSentence}.</p>
      {countSelectedItems > 0 && (
        <TagGroup selectedItems={selectedItems} changeItem={changeItem} />
      )}
      <button type="button">Изменить мой выбор</button>
    </div>
  );
};

Dashboard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeItem: PropTypes.func.isRequired,
};

export default Dashboard;
