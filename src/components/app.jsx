import React from 'react';
import ChanelPanel from '../containers/chanel_panel';
import ChanelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="app">
      <div className="logo-container">
        <img className="logo" src="assets/images/logo.svg" alt="logo" />
      </div>
      <ChanelList />
      <ChanelPanel />
    </div>
  );
};

export default App;
