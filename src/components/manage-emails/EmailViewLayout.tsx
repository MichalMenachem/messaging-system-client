import { SendOutlined, MailOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { MessageWithId } from "../../models/Message";
import { Emails } from "./emails-display/Emails";

export const RefreshContext = createContext<[boolean, () => void] | null>(null);

const { TabPane } = Tabs;
interface Inbox {
  sent: MessageWithId[];
  received: MessageWithId[];
}

export const EmailViewLayout = () => {
  const [sent, setSent] = useState<MessageWithId[]>([]);
  const [received, setReceived] = useState<MessageWithId[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const userId = 123456789;

  const toggleRefresh = () => setRefresh(!refresh);

  const fetchMessages = async () => {
    try {
      const inbox = await axios.get<Inbox>(
        `http://localhost:8080/messages/${userId}/getAll`
      );
      setSent(inbox.data.sent);
      setReceived(inbox.data.received);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [refresh]);

  return (
    <RefreshContext.Provider value={[refresh, toggleRefresh]}>
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
    </RefreshContext.Provider>
  );
};
