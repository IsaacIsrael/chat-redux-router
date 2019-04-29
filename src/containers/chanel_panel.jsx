import React, { Component } from 'react';

import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';


class ChanelPanel extends Component {
  renderHeader = () => {
    return (
      <div className="channel-title">
        <span>Channel #{this.props.channelFromParams}</span>
      </div>
    );
  }
  render() {
    return (
      <div className="channel-container">
        {this.renderHeader()}
        <MessageList channelFromParams={this.props.channelFromParams} />
        <MessageForm channelFromParams={this.props.channelFromParams} />
      </div>
    );
  }
}


export default ChanelPanel;
