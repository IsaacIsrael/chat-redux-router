import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fecthMessages } from '../actions';

import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    // this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    // clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fecthMessages(this.props.channelFromParams);
  }


  renderMessages = message => (
    <Message message={message} key={message.id} />
  );

  render() {
    return (
      <div className="message-list" ref={(list) => { this.list = list; }}>
        {this.props.messages.map(this.renderMessages)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fecthMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
