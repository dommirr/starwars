import React from 'react';
import './styles.css';

const Layout = ({
  panelHeader,
  panelList,
  panelListLoading = false,
  onPanelScroll = () => { },
  children,
}) => (
    <div className="card layout">
      <div className="layout-leftpanel border-right">
        <div className="card-body border-bottom">
          {panelHeader}
        </div>
        <div
          onScroll={onPanelScroll}
          className="list-group list-group-flush panel-list">
          {panelList}
          {panelListLoading && (
            <div className="list-group-item">loading...</div>
          )}
        </div>
      </div>
      <div className="layout-content">
        {children}
      </div>
    </div>
  );

export default Layout;