import React from 'react';
import socket from '../services/io';

class Receiver extends React.Component {
  state={
    messages: []
  };
  
  chat = (ss) => {
    socket.on('message', data => {
      console.log(data);
      console.log(this.state.messages);
      ss(data);
    });
    return this.state.messages;
  };
  
  updateMsgs = (data) => {
    console.log(data);
    this.setState(state => {
      const list = [...state.messages, data];
      return {messages: list};
    });
  };

  render(){
    return (
      <div className="App">
        <h1>{this.chat((data) => { this.updateMsgs( data ) }).map((data) => (
          <p>
            {data.author}: {data.text}<br />
          </p>
        ))}</h1>
      </div>
    );
  }
}

export default Receiver;
