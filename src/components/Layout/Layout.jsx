import React, { useEffect, useRef } from 'react';
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
        <div className="Layout-leftPanel-navbar" ref={panelNode} onScroll={handleScroll}>
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