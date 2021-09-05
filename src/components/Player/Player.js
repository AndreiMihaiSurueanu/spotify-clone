import React from 'react'
// Styles
import './Player.css'
// Components
import Sidebar from '../Sidebar/Sidebar'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'

export default function Player({ spotify }) {
    console.log("I am logged in 🥳")
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}
