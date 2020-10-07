import React, { useContext } from "react";
import { Button, Input } from "antd";
import "./search-bar.css";
import { RefreshContext, SearchContext } from "../EmailsView";
import { SyncOutlined } from "@ant-design/icons";

const { Search } = Input;

export const SearchBar = () => {
  const [searched, setSearched] = useContext(SearchContext)!;
  const [refresh, toggleRefresh] = useContext(RefreshContext)!;
  return (
    <>
      <Search
        className="search-id"
        placeholder="Enter user id for its messages to appear"
        enterButton={<Button type={"ghost"} icon={<SyncOutlined />} />}
        onSearch={() => {
          toggleRefresh();
        }}
        onChange={(event) => {
          setSearched(event.currentTarget.value);
        }}
      />
    </>
  );
};
