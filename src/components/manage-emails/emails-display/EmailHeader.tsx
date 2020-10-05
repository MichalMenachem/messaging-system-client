import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { MessageWithId } from "../../../models/Message";
import "./emails.css";

interface EmailHeaderProps extends MessageWithId {
  isInbox: boolean;
}

export const EmailHeader = (props: EmailHeaderProps) => {
  return (
    <div className="email-header">
      <span className="email-header-item">
        {props.isInbox ? `From: ${props.sender}` : `To: ${props.receiver}`}
      </span>
      <b className="email-header-item">{props.subject}</b>
      <span className="email-header-item">
        {props.creationDate.toLocaleDateString()}
      </span>
      <Button
        icon={<DeleteOutlined />}
        onClick={(event) => event.stopPropagation()}
      ></Button>
    </div>
  );
};
