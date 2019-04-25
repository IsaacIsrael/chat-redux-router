import React, { Component } from 'react';
import { connect } from 'react-redux';

import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';


class ChanelPanel extends Component {
  renderHeader = () => {
    return (
      <div className="channel-title">
        <span>Channel #{this.props.channel}</span>
      </div>
    );
  }
  render() {
    return (
      <div className="channel-container">
        {this.renderHeader()}
        <MessageList />
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channel: state.selectedChannel
  };
}


export default connect(mapStateToProps)(ChanelPanel);
