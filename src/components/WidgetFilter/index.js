import React from 'react';

const WidgetFilter = () => (
  <div className="widget__filter">
    Фильтр
    <select>
      <option value="0">Без фильтра</option>
      <option value="1">Номер &gt; 10</option>
      <option value="2">Номер &gt; 100</option>
      <option value="3">Номер &gt; 200</option>
    </select>
  </div>
);

export default WidgetFilter;
