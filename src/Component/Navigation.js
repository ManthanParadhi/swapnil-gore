import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Navigation = () => {
    return (
        <Router>
        <div>
            <nav className="navMenu">
                <ul>
                    <li className="nav-items"><Link>HOME</Link></li>
                    <li className="nav-items"><Link>ABOUT</Link></li>
                    <li className="nav-items"><>EVENTS</></li>
                    <li className="nav-items"><Link>LIBRARY</Link></li>
                    <li className="nav-items"><Link>SUBSCRIBE</Link></li>
                    <li className="nav-items"><Link>CONTACT</Link></li>
                </ul>

                <div className="dot"></div>
            </nav>
        </div>
        </Router>
    )
}
export default Navigation;