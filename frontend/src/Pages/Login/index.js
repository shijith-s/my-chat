import React, { useState } from "react";
import "./styles.css";
import chat_image from "../../assets/chatting_illustration.jpg";

function Login() {
  const [name, setName] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };
  const submit = () => {
    if (!name) alert("Please enter a name!");
    console.log("submitting name as ", name);
  };
  console.log("name : ", name);
  return (
    <div className="page center_content login_page">
      <div className="left_half">
        <img src={chat_image} alt="two_person_chatting_image" />
      </div>
      <div className="right_half center_content">
        <div className="login_box">
          <h2 className="login_title">Login</h2>
          <div className="text_field">
            <label htmlFor="username">Enter your name</label>
            <input
              type="text"
              id="username"
              value={name}
              onChange={updateName}
            />
          </div>
          <button className="login_button" onClick={submit}>
            Start Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
