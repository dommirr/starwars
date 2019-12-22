import React, { useEffect, useRef } from 'react';
import Loading from 'components/Loading';
import { useLocation } from "react-router-dom";
import Back from 'components/Back';
import styles from './Layout.module.css';

const Layout = ({
  panelHeader,
  panelList,
  panelListLoading = false,
  onPanelScroll = () => { },
  children,
}) => {
  const { pathname } = useLocation();
  const isDetail = pathname.split('/').length > 2;

  const panelNode = useRef();

  useEffect(() => {
    const element = panelNode.current;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if (!panelListLoading) {
        onPanelScroll();
      }
    }
  }, [panelListLoading, onPanelScroll]);

  const handleScroll = (e) => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if (!panelListLoading) {
        onPanelScroll();
      }
    }
  }

  return (
    <div className={styles.Layout}>
      <div className={`${styles.LayoutLeftPanel} ${!isDetail ? ' active' : ''} `}>
        <div className={`${styles.LayoutLeftPanelSearch}`}>
          <div className={`${styles.LayoutLeftPanelBack}`}>
            <Back />
          </div>
          <div>
            {panelHeader}
          </div>
        </div>
        <div className={`${styles.LayoutLeftPanelNavbar}`} ref={panelNode} onScroll={handleScroll}>
          {panelList}
          {panelListLoading && (
            <div className={`${styles.LayoutLeftPanelLoading}`}>
              <Loading />
            </div>
          )}
        </div>
      </div>
      <div className={`${styles.LayoutContent} ${isDetail ? ' active' : ''} `}>
        {children}
      </div>
    </div>
  );
};

export default Layout;