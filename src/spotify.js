export const SPOTIFY_LOGO_IMAGE_URL =
  "https://getheavy.com/wp-content/uploads/" +
  "2019/12/spotify2019-830x350.jpg";
export const ALBUM_IMAGE =
  "https://assets.vogue.com/photos/" +
  "5891a3734fe15261130239b8/master/" +
  "w_1600,c_limit/01-usher-confessions.jpg";

export const DISCOVER_WEEKLY_IMAGE =
  "https://encrypted-tbn0.gstatic.com/" +
  "images?q=tbn:ANd9GcQMlarvpiIfu0U_" +
  "OUmoDDMVonnpgU770VHyOx5zMIbtna5jZYFDxUQzCmmkUThezsQKRy8&usqp=CAU";

export const PLAYLIST_ID = "2E7qEEyxqOBewmqQ4CRy3B";
// export const PLAYLIST_ID = "53TI19H3NvWiaBQpbQkiiM";
const REDIRECT_URI = "http://localhost:3000/";
const AUTHORIZATION_ENDPOINT = "https://accounts.spotify.com/authorize";
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const LOGIN_URL = `${AUTHORIZATION_ENDPOINT}
?client_id=${CLIENT_ID}
&redirect_uri=${REDIRECT_URI}
&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;
