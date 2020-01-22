import React from 'react';
import PropTypes from 'prop-types';

import './dashboard.scss';
import Tags from 'components/Tags';
import Button from 'components/Button';

const Dashboard = ({ items, deselectItem, showWidget }) => {
  const selectedItems = items.filter(item => item.isChecked);
  const countSelectedItems = selectedItems.length;

  return (
    <div className="dashboard">
      <h2>Item selection</h2>
      <p>
        Currently selected {countSelectedItems}
        {countSelectedItems === 1 ? ' item' : ' items'}.
      </p>
      {countSelectedItems > 0 && (
        <Tags tags={selectedItems} onClick={deselectItem} />
      )}
      <Button variant="primary" onClick={showWidget}>
        Change my choice
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
