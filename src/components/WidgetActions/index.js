import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

const WidgetActions = ({ save, cancel }) => (
  <div className="widget__actions">
    <Button variant="primary" onClick={save}>
      Сохранить
    </Button>
    <Button variant="danger" onClick={cancel}>
      Отменить
    </Button>
  </div>
);

WidgetActions.propTypes = {
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default WidgetActions;
