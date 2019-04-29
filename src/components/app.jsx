import React from 'react';
import ChanelPanel from '../containers/chanel_panel';
import ChanelList from '../containers/channel_list';

const App = (props) => {
  return (
    <div className="app">
      <div className="logo-container">
        <img className="logo" src="assets/images/logo.svg" alt="logo" />
      </div>
      <ChanelList channelFromParams={props.match.params.channel} />
      <ChanelPanel channelFromParams={props.match.params.channel} />
    </div>
  );
};

export default App;
