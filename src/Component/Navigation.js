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
                <Link><li className="nav-items"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="40px" height="40px"><path d="M 32 3 L 1 28 L 1.4921875 28.654297 C 2.8591875 30.477297 5.4694688 30.791703 7.2304688 29.345703 L 32 9 L 56.769531 29.345703 C 58.530531 30.791703 61.140812 30.477297 62.507812 28.654297 L 63 28 L 54 20.742188 L 54 8 L 45 8 L 45 13.484375 L 32 3 z M 32 13 L 8 32 L 8 56 L 56 56 L 56 35 L 32 13 z M 26 34 L 38 34 L 38 52 L 26 52 L 26 34 z"/></svg></li></Link>
                    <Link className="navlink"><li className="nav-items">ABOUT</li></Link>
                    <Link className="navlink"><li className="nav-items">EVENTS</li></Link>
                    <Link className="navlink"><li className="nav-items">LIBRARY</li></Link>
                    <Link className="navlink"><li className="nav-items">SUBSCRIBE</li></Link>
                    <Link className="navlink"><li className="nav-items">CONTACT</li></Link>

                </ul>

                <div className="dot"></div>
            </nav>
        </div>
        </Router>
    )
}
export default Navigation;