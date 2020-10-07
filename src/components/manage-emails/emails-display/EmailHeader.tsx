import { DeleteOutlined } from "@ant-design/icons";
import { Button, message, Popconfirm } from "antd";
import axios from "axios";
import React, { useContext } from "react";
import { UrlContext } from "../../..";
import { MessageWithId } from "../../../models/Message";
import { RefreshContext } from "../EmailsView";
import "./emails.css";

interface EmailHeaderProps extends MessageWithId {
  isInbox: boolean;
}

export const EmailHeader = (props: EmailHeaderProps) => {
  const [refresh, toggleRefresh] = useContext(RefreshContext)!;
  const baseUrl = useContext(UrlContext);

  const onDelete = async (
    event?: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    try {
      const userId = props.isInbox ? props.receiver : props.sender;
      await axios.post(
        `${baseUrl}/messages/${userId}/deleteMessage/${props.id}`
      );
      message.success("Message successfuly deleted");
    } catch (error) {
      console.error(error);
      message.error("Oops... Something went wrong");
    }
    toggleRefresh();
  };

  return (
    <div className="email-header">
      <span className="email-header-item">
        {props.isInbox ? `From: ${props.sender}` : `To: ${props.receiver}`}
      </span>
      <b className="email-header-item">{props.subject}</b>
      <span className="email-header-item">
        {new Date(props.creationDate).toLocaleString()}
      </span>
      <div onClick={(event) => event.stopPropagation()}>
        <Popconfirm
          title="Are you sure you wish to delete?"
          onConfirm={onDelete}
          okText="Yes"
          cancelText="Cancel"
        >
          <Button icon={<DeleteOutlined />}></Button>
        </Popconfirm>
      </div>
    </div>
  );
};
