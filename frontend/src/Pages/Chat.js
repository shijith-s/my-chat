import React, { useEffect, useState } from "react";

function Chat({ socket }) {
  const [name, setName] = useState("newUser");
  useEffect(() => {
    const name = prompt("Enter your name:", "new user");
    setName(name);
    console.log(name);
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to backend");
      socket.emit("joined-user", name);
    });

    socket.on("message", (message) => {
      console.log("recieved a message");
      const messageContainer = document.querySelector(".message__container");
      messageContainer.innerHTML += `<div>${message}</div>`;
    });
    // return () => {
    //   cleanup;
    // };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(e.target.message.value);
    const messageContainer = document.querySelector(".message__container");
    socket.emit("message", { message: e.target.message.value });
    messageContainer.innerHTML += `<div>${e.target.message.value}</div>`;
    e.target.message.value = "";
  };

  return (
    <div className="message__box">
      <div className="message__container"></div>
      <form className="message__input" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Enter text message"
          name="message"
          id="message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
