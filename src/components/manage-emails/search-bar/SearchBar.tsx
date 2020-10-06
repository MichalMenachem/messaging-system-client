import React from "react";
import { Input } from "antd";
import "./search-bar.css";

const { Search } = Input;

export const SearchBar = () => {
  return (
    <>
      <Search
        className="search-id"
        placeholder="Enter user id"
        onSearch={(value) => console.log(value)}
      />
    </>
  );
};
