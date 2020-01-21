import React from 'react';
import PropTypes from 'prop-types';

import WidgetContainer from 'containers/WidgetContainer';
import DashboardContainer from 'containers/DashboardContainer';

import './root.scss';

const Root = ({ isWidgetOpened }) => {
  return (
    <main>
      <DashboardContainer />
      {isWidgetOpened && <WidgetContainer />}
    </main>
  );
};

Root.propTypes = {
  isWidgetOpened: PropTypes.bool.isRequired,
};

export default Root;
