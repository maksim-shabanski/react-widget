import React from 'react';
import PropTypes from 'prop-types';

import './dashboard.scss';
import Tags from 'components/Tags';
import Button from 'components/Button';

const Dashboard = ({ items, deselectItem, showWidget }) => {
  const selectedItems = items.filter(item => item.isChecked);
  const countSelectedItems = selectedItems.length;
  let endOfSentence = 'выбрано 0 элементов';

  if (countSelectedItems === 1) {
    endOfSentence = 'выбран 1 элемент';
  } else if (countSelectedItems > 1) {
    endOfSentence = `выбрано ${countSelectedItems} элемента`;
  }

  return (
    <div className="dashboard">
      <h2>Выбор элементов</h2>
      <p>На данный момент выбрано {endOfSentence}.</p>
      {countSelectedItems > 0 && (
        <Tags tags={selectedItems} onClick={deselectItem} />
      )}
      <Button variant="primary" onClick={showWidget}>
        Изменить мой выбор
      </Button>
    </div>
  );
};

Dashboard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  deselectItem: PropTypes.func.isRequired,
  showWidget: PropTypes.func.isRequired,
};

export default Dashboard;
