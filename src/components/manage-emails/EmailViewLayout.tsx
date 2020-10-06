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
      content: "Hi! how are you? I miss you",
      id: 0,
      creationDate: new Date(),
      subject: "cool",
    },
    {
      sender: "123456789",
      receiver: "987654321",
      content: "Hi! how are you? tralalala",
      id: 1,
      creationDate: new Date(),
      subject: "coolio",
    },
    {
      sender: "123456789",
      receiver: "987654321",
      content: "Hi! how are you? aya baya",
      id: 2,
      creationDate: new Date(),
      subject: "coolcool",
    },
  ]);
  const [received, setReceived] = useState<MessageWithId[]>([
    {
      sender: "987654321",
      receiver: "123456789",
      content: "Fine! thanks",
      id: 3,
      creationDate: new Date(),
      subject: "RE: cool",
    },
    {
      sender: "987654321",
      receiver: "123456789",
      content: "Fine! thanks you sweetie",
      id: 4,
      creationDate: new Date(),
      subject: "RE: coolio",
    },
  ]);

  return (
    <Tabs centered defaultActiveKey="inbox">
      <TabPane
        tab={
          <span>
            <MailOutlined />
            INBOX
          </span>
        }
        key="inbox"
      >
        <Emails emails={received} isInbox={true} />
      </TabPane>
      <TabPane
        tab={
          <span>
            <SendOutlined />
            SENT
          </span>
        }
        key="sent"
      >
        <Emails emails={sent} isInbox={false} />
      </TabPane>
    </Tabs>
  );
};
