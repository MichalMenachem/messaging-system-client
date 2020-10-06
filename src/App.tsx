import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { EmailsView } from "./components/manage-emails/EmailsView";
import { Button, PageHeader } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { EmailWriter } from "./components/write-email/EmailWriter";

function App() {
  return (
    <Router>
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
              <Link to="/view">Mailbox</Link>
            </Button>,
            <Button key="2" type="primary">
              <Link to="/write">Send E-Mail</Link>
            </Button>,
          ]}
        >
          <Switch>
            <Route exact path="/">
              <EmailsView />
            </Route>
            <Route path="/view">
              <EmailsView />
            </Route>
            <Route path="/write">
              <EmailWriter />
            </Route>
          </Switch>
        </PageHeader>
      </div>
    </Router>
  );
}

export default App;
