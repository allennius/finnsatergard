import React from "react";
import { Link } from 'react-router-dom'


import './footer.css'


const Footer = () => {

    return (
        <footer>
            <div className="footerContent">
                <div className="footerCol">
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                    <h4>Finnsätergård</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#">Djuren</Link></li>
                        <li><Link to="#">Leran</Link></li>
                        <li><Link to="#">Gården</Link></li>
                    </ul>
                </div>
                <div className="footerCol">
                    <h4>Kontakt</h4>
                    <ul>
                        <li><Link to="#">kontaktformulär</Link></li>
                        <li>tel: 02024124123985</li>
                        <li>email: kontakt@kontakt.se</li>
                    </ul>
                </div>
                <div className="footerCol">

                    <h4>Nyhetsbrev</h4>
                    <input type="text" placeholder="email adress" ></input>
                    <button>Submit</button>
                </div>
                <div className="footerColSoc">
                    <h4>Social</h4>
                    <div className="socialLinks">
                            <Link className="instagram"><i class="lni lni-instagram-original"></i></Link>
                            <Link className="facebook"><i class="facebook lni lni-facebook-filled"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer