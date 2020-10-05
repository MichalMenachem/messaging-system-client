import React from "react";
import { MessageWithId } from "../../../models/Message";
import { Collapse } from "antd";
import { EmailContent } from "./EmailContent";
import { EmailHeader } from "./EmailHeader";

const { Panel } = Collapse;

interface EmailsProps {
  emails: MessageWithId[];
  isInbox: boolean;
}

export const Emails = (props: EmailsProps) => {
  return (
    <Collapse defaultActiveKey={[]}>
      {props.emails.map((email) => (
        <Panel
          showArrow={false}
          key={email.id}
          header={<EmailHeader {...email} isInbox={props.isInbox} />}
        >
          <EmailContent {...email} />
        </Panel>
      ))}
    </Collapse>
  );
};
