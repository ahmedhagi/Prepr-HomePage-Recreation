import "./sidenav.css"
import { useState, useEffect } from "react";

function Sidebar(props) {
    const [isClosed, setisClosed] = useState(false);

    useEffect(() => {
        setisClosed(props.toggleClosed);
      }, [props.toggleClosed]);


    return (
        <div className={`${
            !isClosed ? "sidebar sidebar-open" : "sidebar sidebar-closed"
          }`}>
            <div className={props.isDark ? "sidebar-dark" : "sidebar-light" }>
            <div className="sidebar-banner">
                <div className="sidebar-searchbar">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search PreprLabs" aria-label="" aria-describedby="basic-addon1"/>
                    </div>
                </div>
                <div className="sidebar-userInfo">
                    <a href="#sidebar" >
                        <span class="sidebar-profilePic">
                        <img alt="" src={require("../../assets/navbar/default-user.png")}/> 
                        </span></a>
                    <div>
                    <a href="#sidebar" ><span class="sidebar-userName">Default User</span></a>
                    <span class="sidebar-learnRankings"><img alt="" src="https://preprlabs.org/assets/images/header/achievement-glyph.svg"></img>Learn Rank 0</span>
                    </div>                
                </div>
            </div>
            <div className="sidebar-content">
                <ul>
                <li>
                    <a href="#link">
                    <img alt="" src="https://preprlabs.org/assets/images/header/explore-icon.svg"></img>
                        Explore
                    </a>
                </li>
                <li>
                    <a href="#link">
                    <img alt="" src="https://preprlabs.org/assets/images/header/dashboard-icon.svg"></img>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#link">
                    <img alt="" src="https://preprlabs.org/assets/images/header/lab-icon.svg"></img>
                        My Labs
                    </a>
                </li>
                <li>
                    <a href="#link">
                    <img alt="" src="https://preprlabs.org/assets/images/header/challenge-icon.svg"></img>
                        My Challenges
                    </a>
                </li>
                <li>
                    <a href="#link">
                    <img alt="" src="https://preprlabs.org/assets/images/header/project-icon.svg"></img>
                        My Project
                    </a>
                </li>
                <li>
                    <a className="dbItem" href="#link">
                        Browse
                        <img alt="" src="https://preprlabs.org/assets/images/header/chevron.svg"></img>
                    </a>
                </li>
                <li>
                    <a className="dbItem" href="#link">
                        Account
                        <img alt="" src="https://preprlabs.org/assets/images/header/chevron.svg"></img>
                    </a>
                </li>
                <li>
                    <a href="#link">
                    <img alt="" src="https://preprlabs.org/assets/images/header/help-icon-green.svg"></img>
                        Help center
                    </a>
                </li>
                <li>
                    <a href="#link">
                    <img alt="" src="https://preprlabs.org/assets/images/header/logout-icon-dark.svg"></img>
                        Log out
                    </a>
                </li>     
                </ul>
            </div>
            </div>
        </div>
  
  
    );
  }
  
  export default Sidebar;
  