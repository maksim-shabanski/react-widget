import React from 'react';
import PropTypes from 'prop-types';

const WidgetActions = ({ save, cancel }) => (
  <div className="widget__actions">
    <button type="button" onClick={save}>
      Сохранить
    </button>
    <button type="button" onClick={cancel}>
      Отменить
    </button>
  </div>
);

WidgetActions.propTypes = {
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default WidgetActions;
