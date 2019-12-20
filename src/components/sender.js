import React from 'react';
import socket from '../services/io';

class Sender extends React.Component {
  state={
    author: '',
    text:''
  };
  
  authorHandler = (e) => {
    this.setState({author: e.target.value})
  };
  
  textHandler = (e) => {
    this.setState({text: e.target.value})
  };
  
  keyPressed = (e) => {
    if(e.key === "Enter"){
      this.sendMsg();
    }
  };
  
  sendMsg = () => {
    const {author, text} = this.state;
    socket.emit('send', {author, text});
  };

  render(){
    return (
      <div className="sender">
        <input type="text" placeholder="Author:" onChange={this.authorHandler} onKeyPress={this.keyPressed}/>
        <input type="text" placeholder="Text:" onChange={this.textHandler} onKeyPress={this.keyPressed}/>
        <button onClick={this.sendMsg}>Send</button>
      </div>
    );
  }
}

export default Sender;
