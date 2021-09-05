import React from 'react'
// Config
import { SPOTIFY_LOGO_IMAGE_URL } from '../../spotify'
// Components
import SidebarOption from '../SidebarOption/SidebarOption'
// Styles
import './Sidebar.css'
// Icons
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useStateProviderValue } from '../../StateProvider'

export default function Sidebar() {
    const [{ playlists }, dispatch] = useStateProviderValue()

    console.log('Playlists: ⏯️🎵', playlists)
    return (
        <div className='sidebar'>
            <img
                src={SPOTIFY_LOGO_IMAGE_URL}
                alt="Spotify Logo"
                className="sidebar_logo" />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    )
}
