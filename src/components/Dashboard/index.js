import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ basket }) => {
  let word = 'элементов';
  const countItems = basket.length;

  if (countItems === 0) {
    word = 'элементов';
  } else if (countItems === 1) {
    word = 'элемент';
  }

  return (
    <div className="dashboard">
      <h2>Выбор элементов</h2>
      <p>На данный момент выбрано {`${countItems} ${word}`}.</p>
      <button type="button">Изменить мой выбор</button>
    </div>
  );
};

Dashboard.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dashboard;
