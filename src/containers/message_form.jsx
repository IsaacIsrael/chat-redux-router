import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  componentDidMount() {
    this.input.focus();
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { props } = this;
    props.createMessage(props.channel, props.user, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form className="channel-editor" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}
          ref={(input) => { this.input = input; }}/>
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapStateToProps (state) {
  return {
    channel: state.selectedChannel,
    user: state.currentUser
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
