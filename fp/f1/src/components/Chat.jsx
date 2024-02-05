import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
  const socket = io("http://localhost:5000/");
  const [customerMessage, setCustomerMessage] = useState("");
  const [agentMessage, setAgentMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const consult = () => {
    console.log("Sending customer message:", customerMessage);
    if (customerMessage !== "") {
      socket.emit("message", { type: "customer", content: customerMessage });    
      setCustomerMessage("");
     }

    console.log("Sending agent message:", agentMessage);
    if (agentMessage !== "") {     
      socket.emit("message", { type: "agent", content: agentMessage });
      setAgentMessage("");
    }
};

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("message");
    };
  }, [socket]);

  const onChange = (e, setMessage) => {
    setMessage(e.target.value);
  };

  return (
    <div className='container bg-white mt-3' style={{ width: "1500px", height: "800px" }}>
      <h1 className='fw-bold d-flex justify-content-center align-items-center p-5 fs-3'>Chat With Our Agent</h1>
      <div>
        {/* Display received messages */}
        <div>
          {messages.map((msg, index) => (
            <div key={index}>
              {msg.type === 'customer' ? (
                <p style={{ color: 'blue' }}>Customer: {msg.content}</p>
              ) : (
                <p style={{ color: 'green' }}>Agent: {msg.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Input for customer message */}
        <textarea
          className="form-control"
          value={customerMessage}
          placeholder="Customer Message"
          onChange={(e) => onChange(e, setCustomerMessage)}
          rows="3"
        ></textarea>

        <button
          className='send d-flex justify-content-center align-items-center mt-2 mb-5'
          style={{ height: "20px", width: "40px", background: "orangered", color: "white" }}
          onClick={consult}
        >
          Send
        </button>

        {/* Input for agent message */}
        <textarea
          className="form-control mt-5"
          value={agentMessage}
          placeholder="Agent Message"
          onChange={(e) => onChange(e, setAgentMessage)}
          rows="3"
        ></textarea>

        <button
          className='send d-flex justify-content-center align-items-center mt-2'
          style={{ height: "20px", width: "40px", background: "orangered", color: "white" }}
          onClick={consult}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
