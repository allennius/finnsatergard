import React from "react";
import { Link } from "react-router-dom"
import "./topNavbar.css"



const toggleMenuButton = () => {

    // 3 lines in hamburgerButton
    document.querySelector('.menuButtonContainer').childNodes[0].classList.toggle('change')   
    document.querySelector('.menuButtonContainer').childNodes[1].classList.toggle('change')   
    document.querySelector('.menuButtonContainer').childNodes[2].classList.toggle('change')   

    // toggle sideNavbar
    document.querySelector('.topNav').classList.toggle('responsive')
} 

const Topbar = () => {
    return (
        <div className="topNav">
            {/* <div className="navHead">
                <Link className="navLink" to="/"> <span> Finnsätergård</span></Link>
            </div> */}
            <ul className="navList">
                <div className="navHead">
                    <Link className="navLink" to="/"> <span> Finnsätergård</span></Link>
                </div>
                <li className="navItem">
                    <Link className="navLink" to="/">Home</Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" to="/ko">Kossa</Link>
                </li>
                <li className="navItem">
                    <Link className="navLink" to="/sheep">Får</Link>
                </li>
            </ul>
            <div className="menuButtonContainer" onClick={() => toggleMenuButton()}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    )
}

export default Topbar