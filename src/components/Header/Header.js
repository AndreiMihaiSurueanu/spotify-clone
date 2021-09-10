import React from "react";
// Styles
import "./Header.css";
// Icons
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
// State
import { useStateProviderValue } from "../../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateProviderValue();
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or podcasts"
          type="text"
        />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="KM" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
