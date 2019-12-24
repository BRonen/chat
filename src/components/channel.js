import React from 'react';

class Channel extends React.Component {
  state={
    room: ''
  };
  
  channelHandler = (e) => {
    this.setState({room: e.target.value});
  };
  
  keyPressed = (e) => {
    if(e.key === "Enter"){
      this.props.getIn(this.state.room);
    }
  };

  render(){
    return (
      <div className="sender content-box">
        <input type="text" placeholder="Channel:" className="message-input" onChange={this.channelHandler} onKeyPress={this.keyPressed}/>
        <button onClick={() => {this.props.getIn(this.state.room)}}>Send</button>
      </div>
    );
  }
}

export default Channel;
