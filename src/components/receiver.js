import React from 'react';

function Receiver(props){
    return (
      <div className="receiver content-box">
        <center><h1 className="mssg" id="name">Room: {props.name} - {props.clients} online</h1></center>
        <center><p className="mssg">Server: This chat have been cleared</p></center>
        {props.mssgs.map((mssg) => (
          <p className="mssg">
            {mssg.author}: {mssg.text}<br />
          </p>
        ))}
      </div>
    );
}

export default Receiver;
