import React from 'react';
import Receiver from './components/receiver';
import Sender from './components/sender';
import Channel from './components/channel';
import socket from './services/io';

class App extends React.Component{
  state = {
    room: "default",
    online: 0,
    messages: []
  };
  
  recvMethods = {
    updateMsgs: (data) => {
      this.setState((state) => {
        console.log(state.messages);
        return({messages: [...state.messages, data]});
      });
    },
    clear: () => {
      this.setState({messages: []});
    }
  };
  
  counter = (clients) => {
    this.setState({online: clients});
  };
  
  getIn = (nRoom) => {
    console.log(nRoom);
    nRoom = nRoom || "default";
    
    socket.emit('get', nRoom);
    this.setState({room: nRoom});
  };
  
  componentDidMount = () => {
    const recvMethods = this.recvMethods;
    const counter = this.counter;
    socket.on('message', function(data){
      recvMethods.updateMsgs(data);
    });
    socket.on('counter', function(clients){
      counter(clients);
    });
    socket.on('clear', function(){
      recvMethods.clear();
   });
  };

  render(){
    return (
      <div className="App">
        <Receiver mssgs={this.state.messages} clients={this.state.online} name={this.state.room}/>
        <Sender />
        <Channel getIn={this.getIn} />
      </div>
    );
  }
}

export default App;
