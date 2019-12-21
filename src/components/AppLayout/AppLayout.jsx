import React from 'react';
import { useLocation } from "react-router-dom";

import styles from './AppLayout.module.css';

const AppLayout = ({ leftPanel, children }) => {
  const { pathname } = useLocation();
  const isList = pathname === '/';

  return (
    <div className={styles.AppLayout}>
      <div className={`${styles.leftPanel} ${isList ? 'active' : ''} `}>
        {leftPanel}
      </div>
      <div className={`${styles.content} ${!isList ? 'active' : ''} `}>
        {children}
      </div>
    </div>
  );
}

export default AppLayout;