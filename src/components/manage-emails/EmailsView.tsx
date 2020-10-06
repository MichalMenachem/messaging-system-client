import React from "react";
import { EmailViewLayout } from "./EmailViewLayout";
import { SearchBar } from "./search-bar/SearchBar";
import "./emails-view.css";

export const EmailsView = () => {
  return (
    <div className="emails-view">
      <SearchBar />
      <EmailViewLayout />
    </div>
  );
};
