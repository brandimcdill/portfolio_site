import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return(
        <nav className="navbar">
            <div className="navbar__container">
                <div className="name__container">
                    <h1 className="name">Brandi McDill</h1>
                </div>
                <div className="link__container">
                    <NavLink to="/About" className="navbar__link">About</NavLink>
                    <NavLink to="/Work" className="navbar__link">Work</NavLink>
                    <NavLink to="/Content" className="navbar__link">Content</NavLink>
                    <NavLink to="/Skills" className="navbar__link">Skills</NavLink>
                    <NavLink to="/Contact" className="navbar__link">Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;