import React from 'react';
import Loading from 'components/Loading';
import { useLocation } from "react-router-dom";
import Back from 'components/Back';

import './styles.css';

const Layout = ({
  panelHeader,
  panelList,
  panelListLoading = false,
  onPanelScroll = () => { },
  children,
}) => {
  const { pathname } = useLocation();
  const isDetail = pathname.split('/').length > 2;
  return (
    <div className="Layout">
      <div className={`Layout-leftPanel ${!isDetail ? 'active' : ''} `}>
        <div className="Layout-leftPanel-search">
          <div className="Layout-leftPanel-Back">
            <Back />
          </div>
          <div className="search">
            {panelHeader}
          </div>
        </div>
        <div className="Layout-leftPanel-navbar" onScroll={onPanelScroll}>
          {panelList}
          {panelListLoading && (
            <div className="navbar-item Layout-leftPanel-loading">
              <Loading />
            </div>
          )}
        </div>
      </div>
      <div className={`Layout-content ${isDetail ? 'active' : ''} `}>
        {children}
      </div>
    </div>
  );
};

export default Layout;