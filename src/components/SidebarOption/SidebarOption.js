import React from 'react'
// Styles
import './SidebarOption.css'

export default function SidebarOption({ title, Icon }) {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className='sidebarOption_icon'/>}
            {Icon ?
                <h4>{title}</h4> :
                <p>{title}</p>}
        </div>
    )
}
