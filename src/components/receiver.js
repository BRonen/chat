import React from 'react';
import socket from '../services/io';

class Receiver extends React.Component {
  
  state = {messages: []};
  
  updateMsgs = (data) => {
    this.setState((state) => {
      console.log(state.messages);
      return({messages: [...state.messages, data]});
    });
  };
  
  componentDidMount = () => {
    var update = this.updateMsgs;
    socket.on('message', function(data){
      update(data);
    })
    
  };

  render(){
    return (
      <div className="receiver content-box">
        <h1>{this.state.messages.map((msg) => (
          <p className="mssg">
            {msg.author}: {msg.text}<br />
          </p>
        ))}</h1>
      </div>
    );
  }
}

export default Receiver;
