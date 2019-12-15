import React from 'react';

const AppLAyout = ({
  leftPanel,
  children,
}) => (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-2">
          {leftPanel}
        </div>
        <div className="col-md-10">
          {children}
        </div>
      </div>
    </div>
  );

export default AppLAyout;
