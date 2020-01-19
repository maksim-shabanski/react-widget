import React from 'react';
import PropTypes from 'prop-types';

import TagGroupContainer from 'containers/TagGroupConteiner';

const Dashboard = ({ basket }) => {
  const basketLength = basket.length;
  let endOfSentence = 'выбрано 0 элементов';

  if (basketLength === 1) {
    endOfSentence = 'выбран 1 элемент';
  } else if (basketLength > 1) {
    endOfSentence = `выбранo ${basketLength} элемента`;
  }

  return (
    <div className="dashboard">
      <h2>Выбор элементов</h2>
      <p>На данный момент выбрано {endOfSentence}.</p>
      {basketLength > 0 && <TagGroupContainer />}
      <button type="button">Изменить мой выбор</button>
    </div>
  );
};

Dashboard.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dashboard;
