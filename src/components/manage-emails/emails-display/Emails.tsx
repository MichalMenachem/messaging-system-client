import React from "react";
import { MessageWithId } from "../../../models/Message";
import { Email } from "./Email";

interface EmailsProps {
  emails: MessageWithId[];
}

export const Emails = (props: EmailsProps) => {
  return (
    <>
      {props.emails.map((email) => (
        <Email email={email} />
      ))}
    </>
  );
};
