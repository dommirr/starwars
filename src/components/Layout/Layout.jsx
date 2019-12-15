import React from 'react';
import Loading from 'components/Loading';
import './styles.css';

const Layout = ({
  panelHeader,
  panelList,
  panelListLoading = false,
  onPanelScroll = () => { },
  children,
}) => (
    <div className="content">
      <div className="content-left-panel">
        <div className="search-input">
          {panelHeader}
        </div>
        <div className="AppTemplate-navbar" onScroll={onPanelScroll}>
          {panelList}
          {panelListLoading && (
            <div className="navbar-item navbar-loading">
              <Loading />
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  );

export default Layout;