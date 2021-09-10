import { useEffect } from "react";
// Styles
import "./App.css";
// Components
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
// Config
import { getTokenFromUrl, PLAYLIST_ID } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateProviderValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateProviderValue();
  console.log("User 👱: ", user);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log("This is the token 🐙", _token);
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        console.log("Playlists before dispatch: ⏯️🎵", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist(PLAYLIST_ID).then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, [dispatch]);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
