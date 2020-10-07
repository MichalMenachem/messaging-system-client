import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { EmailViewLayout } from "./EmailViewLayout";
import { SearchBar } from "./search-bar/SearchBar";
import "./emails-view.css";

export const SearchContext = createContext<
  [string, Dispatch<SetStateAction<string>>] | undefined
>(undefined);

export const RefreshContext = createContext<[boolean, () => void] | undefined>(
  undefined
);

export const EmailsView = () => {
  const [searched, setSearched] = useState("");
  const [refresh, setRefresh] = useState<boolean>(false);

  const toggleRefresh = () => setRefresh(!refresh);

  return (
    <div className="emails-view">
      <RefreshContext.Provider value={[refresh, toggleRefresh]}>
        <SearchContext.Provider value={[searched, setSearched]}>
          <SearchBar />
          <EmailViewLayout />
        </SearchContext.Provider>
      </RefreshContext.Provider>
    </div>
  );
};
