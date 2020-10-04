import { SendOutlined, MailOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React, { useState } from "react";
import { MessageWithId } from "../../models/Message";
import { Emails } from "./emails-display/Emails";

const { TabPane } = Tabs;

export const EmailViewLayout = () => {
  const [sent, setSent] = useState<MessageWithId[]>([
    {
      sender: "123456789",
      receiver: "987654321",
      content: "Hi! how are you?",
      id: 0,
      creationDate: new Date(),
      subject: "cool",
    },
  ]);
  const [received, setReceived] = useState<MessageWithId[]>([
    {
      sender: "987654321",
      receiver: "123456789",
      content: "Fine! thanks",
      id: 1,
      creationDate: new Date(),
      subject: "RE: cool",
    },
  ]);

  return (
    <Tabs defaultActiveKey="2">
      <TabPane
        tab={
          <span>
            <SendOutlined />
            SENT
          </span>
        }
        key="1"
      >
        <Emails emails={sent} />
      </TabPane>
      <TabPane
        tab={
          <span>
            <MailOutlined />
            INBOX
          </span>
        }
        key="2"
      >
        <Emails emails={received} />
      </TabPane>
    </Tabs>
  );
};
