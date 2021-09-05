export const SPOTIFY_LOGO_IMAGE_URL =
    'https://getheavy.com/wp-content/uploads/' +
    '2019/12/spotify2019-830x350.jpg'
const REDIRECT_URI = 'http://localhost:3000/'
const AUTHORIZATION_ENDPOINT =
    'https://accounts.spotify.com/authorize'
const CLIENT_ID =
    process.env.REACT_APP_SPOTIFY_CLIENT_ID

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=")
            initial[parts[0]] =
                decodeURIComponent(parts[1])
            return initial
        }, {})
}

export const LOGIN_URL = `${AUTHORIZATION_ENDPOINT}
?client_id=${CLIENT_ID}
&redirect_uri=${REDIRECT_URI}
&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`
