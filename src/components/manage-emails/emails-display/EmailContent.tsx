import React from "react";
import { MessageWithId } from "../../../models/Message";
import "./emails.css";

export const EmailContent = (props: MessageWithId) => {
  return <span>{props.content}</span>;
};
