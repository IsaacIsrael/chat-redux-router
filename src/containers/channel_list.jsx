import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { selectChannel, fecthMessages } from '../actions';


class ChanelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.selectedChannel !== nextProps.selectedChannel) {
      this.props.fecthMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    if (this.props.selectedChannel !== channel) {
      this.props.selectChannel(channel);
    }
  }

  renderChanel = () => this.props.channels.map(channel => (
    <li className={this.props.selectedChannel === channel ? 'active' : null} key={channel}
      onClick={() => this.handleClick(channel)} role="presentation">
      #{channel}
    </li>
  ));

  render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.renderChanel()}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel, fecthMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChanelList);
