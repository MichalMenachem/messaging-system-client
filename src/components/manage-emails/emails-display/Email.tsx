import React from "react";
import { MessageWithId } from "../../../models/Message";

interface EmailProps {
  email: MessageWithId;
}

export const Email = (props: EmailProps) => {
  return <>{JSON.stringify(props.email)}</>;
};
