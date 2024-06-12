import "./Header.css"
import {  NavLink } from "react-router-dom"


export const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg" id="mainNav">
                <div class="container-fluid">
                    <h1 className="text-white" id="topic">My Portfolio</h1>
                    <div id="navList">
                <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div class="navbar-nav ">
                    <NavLink to={"/home"} className="navItem">Home</NavLink>
                        <NavLink to={"/about"} className="navItem">About</NavLink>
                        <NavLink to={"/experience"} className="navItem">Working Experience</NavLink>
                        <NavLink to={"/education"} className="navItem">Education</NavLink>
                        <NavLink to={"/skills"} className="navItem">Skills</NavLink>
                        <NavLink to={"/assignments"} className="navItem">Assignments</NavLink>
                        <NavLink to={"/projects"} className="navItem">Projects</NavLink>
                        <NavLink to={"/contacts"} className="navItem">Contacts</NavLink>
                    </div>
                </div>
            </div>
                </div>
            </nav>
        </div>
    );
}