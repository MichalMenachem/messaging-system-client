import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import "antd/dist/antd.css";
import { EmailsView } from "./components/manage-emails/EmailsView";

function App() {
  return (
    <div className="App">
      <Header />
      <EmailsView />
    </div>
  );
}

export default App;
