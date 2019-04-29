import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { fecthMessages } from '../actions';


class ChanelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.channelFromParams !== nextProps.channelFromParams) {
      this.props.fecthMessages(nextProps.channelFromParams);
    }
  }

  classChanel = (channel) => {
    return this.props.channelFromParams === channel ? 'active' : null;
  }

  renderChanel = channel => (
    <li key={channel} className={this.classChanel(channel)} role="presentation" >
      <Link to={`/${channel}`}>
        #{channel}
      </Link>
    </li>
  );

  render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map(this.renderChanel)}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fecthMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChanelList);
