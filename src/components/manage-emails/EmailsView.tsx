import { Button } from "antd";
import React from "react";
import { EmailViewLayout } from "./EmailViewLayout";
import { SearchBar } from "./search-bar/SearchBar";

export const EmailsView = () => {
  return (
    <div>
      <SearchBar />
      <Button>Send email</Button>
      <EmailViewLayout />
    </div>
  );
};
