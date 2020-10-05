import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { EmailsView } from "./components/manage-emails/EmailsView";
import { Button, PageHeader } from "antd";

function App() {
  return (
    <div className="App">
      <PageHeader
        ghost={false}
        title={
          <h1>
            <i>
              Mailr<span className="purple">o</span>lo
            </i>
          </h1>
        }
        extra={[
          <Button key="1" type="primary">
            Mailbox
          </Button>,
          <Button key="1" type="primary">
            Send email
          </Button>,
        ]}
      >
        <EmailsView />
      </PageHeader>
    </div>
  );
}

export default App;
