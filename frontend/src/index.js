import React from "react";
import reactDOM from "react-dom";
import App from "./App";
import io from "socket.io-client";

const baseUrl = process.env.REACT_APP_BASEURL;

const socket = io(baseUrl);
reactDOM.render(
  <React.StrictMode>
    <App socket={socket} />
  </React.StrictMode>,
  document.getElementById("root")
);
