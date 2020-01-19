import React from 'react';

import WidgetContainer from 'containers/WidgetContainer';
import DashboardContainer from 'containers/DashboardContainer';

const Root = () => {
  return (
    <main>
      <DashboardContainer />
      <WidgetContainer />
    </main>
  );
};

export default Root;
