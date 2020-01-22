import React from 'react';
import PropTypes from 'prop-types';

import './root.scss';
import WidgetContainer from 'containers/WidgetContainer';
import DashboardContainer from 'containers/DashboardContainer';

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
