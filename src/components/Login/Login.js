import React from 'react'
import { LOGIN_URL, SPOTIFY_LOGO_IMAGE_URL } from '../../spotify'
// Styles
import './Login.css'

export default function Login() {
    return (
        <div className='login'>
            <img src={SPOTIFY_LOGO_IMAGE_URL} alt="Spotify Logo" />
            <a href={LOGIN_URL}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}
