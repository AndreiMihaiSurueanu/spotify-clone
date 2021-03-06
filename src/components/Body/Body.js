import React from "react";
// State
import { useStateProviderValue } from "../../StateProvider";
// Components
import Header from "../Header/Header";
import SongRow from "../SongRow/SongRow";
// Images
import { DISCOVER_WEEKLY_IMAGE } from "../../spotify";
// Styles
import "./Body.css";
// Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateProviderValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map(item =>(
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
