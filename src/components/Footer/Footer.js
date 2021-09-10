import React from "react";
// Styles
import "./Footer.css";
// Icons
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
// Elements
import { Grid, Slider } from "@material-ui/core";
// Image
import { ALBUM_IMAGE } from "../../spotify";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img className="footer_albumLogo" src={ALBUM_IMAGE} alt="" />
        <div className="footer_songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
