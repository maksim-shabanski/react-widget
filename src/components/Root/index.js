import React from 'react';
import PropTypes from 'prop-types';

import WidgetContainer from 'containers/WidgetContainer';
import DashboardContainer from 'containers/DashboardContainer';

import './root.scss';

const Root = ({ isWidgetActive }) => {
  return (
    <main>
      <DashboardContainer />
      {isWidgetActive && <WidgetContainer />}
    </main>
  );
};

Root.propTypes = {
  isWidgetActive: PropTypes.bool.isRequired,
};

export default Root;
