import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/navbar/footer/Footer";
import Topbar from "../../components/navbar/topbar/TopNavbar";
import "./layout.css"

const Layout = () => {
    return (
        <>      
            <Topbar />  
            <div className="page">
                <Outlet />

            </div>
            <Footer />
        </>
    )
}

export default Layout