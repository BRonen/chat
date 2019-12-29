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
      e.preventDefault();
      this.sendMsg(e.target);
    }
  };
  
  sendMsg = (target) => {
    const {author, text} = this.state;
    socket.emit('send', {author, text});
    target.value = '';
  };

  render(){
    return (
      <div className="sender content-box">
        <input type="text" placeholder="Author:" maxLength="15" className="message-input" onChange={this.authorHandler}/>
        <textarea placeholder="Text:" id='text-input' className="message-input" onChange={this.textHandler} onKeyPress={this.keyPressed}></textarea>
        <button onClick={this.sendMsg.bind(this, document.getElementById('text-input'))}>Send</button>
      </div>
    );
  }
}

export default Sender;
