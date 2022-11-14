import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import "./topNavbar.css"



const closeNavbarOnClick = () => {

    document.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', function() {
            document.querySelector('.topNav').classList.remove('responsive')
            toggleHamburger()

        })
    })

}

const toggleHamburger = () => {

        // 3 lines in hamburgerButton
        const line1 = document.querySelector('.menuButtonContainer').childNodes[0]
        const line2 = document.querySelector('.menuButtonContainer').childNodes[1]
        const line3 = document.querySelector('.menuButtonContainer').childNodes[2]

        if (document.querySelector('.topNav').classList.contains('responsive') ) {

            if (!line1.classList.contains('change')) {

                line1.classList.toggle('change')
                line2.classList.toggle('change')
                line3.classList.toggle('change')

            }
        } else {
            
            if (line1.classList.contains('change')) {

                line1.classList.toggle('change')
                line2.classList.toggle('change')
                line3.classList.toggle('change')
            }
        }



        // 3 lines in hamburgerButton
        // document.querySelector('.menuButtonContainer').childNodes[0].classList.toggle('change')   
        // document.querySelector('.menuButtonContainer').childNodes[1].classList.toggle('change')   
        // document.querySelector('.menuButtonContainer').childNodes[2].classList.toggle('change')   
}


const toggleMenuButton = () => {

    // toggle Navbar
    document.querySelector('.topNav').classList.toggle('responsive')

    toggleHamburger()

} 

const Topbar = () => {

    useEffect(() => {
    
        closeNavbarOnClick()
    
    })


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