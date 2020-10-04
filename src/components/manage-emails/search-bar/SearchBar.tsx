import React from "react";
import { Input } from "antd";
import "./SearchBar.css";

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
