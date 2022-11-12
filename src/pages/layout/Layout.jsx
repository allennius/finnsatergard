import React from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../../components/navbar/sidebar/SideNavbar";
import Topbar from "../../components/navbar/topbar/TopNavbar";
import "./layout.css"

const Layout = () => {
    return (
        <>      
            <Topbar />
            
            <div className="container">

                <SideNavbar />

                <div className="page">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout