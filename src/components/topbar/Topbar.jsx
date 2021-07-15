import React from 'react'
import './topbar.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">lamaadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                            <NotificationsNoneIcon/>
                            <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                            <LanguageIcon/>
                            <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                            <SettingsIcon/>

                    </div>
                    <img src="assets/id.jpg" alt="" className="topAvator" />
                </div>
            </div>
        </div>
    )
}
