import React from 'react';
import { useLocation } from "react-router-dom";

import styles from './AppLayout.module.css';

const AppLayout = ({ leftPanel, children }) => {
  const { pathname } = useLocation();
  const isList = pathname === '/';

  return (
    <div className={styles.AppLayout}>
      <div className={`${styles.AppLayoutLeftPanel} ${isList ? styles.active : ''} `}>
        {leftPanel}
      </div>
      <div className={`${styles.AppLayoutContent} ${!isList ? styles.active : ''} `}>
        {children}
      </div>
    </div>
  );
}

export default AppLayout;