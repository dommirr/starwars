import React from 'react';
import './styles.css';

const AppTemplate = ({ leftPanel, children }) => (
  <div className="AppTemplate">
    {leftPanel}
    {children}
  </div>
);

export default AppTemplate;