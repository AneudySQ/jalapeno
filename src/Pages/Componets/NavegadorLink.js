import React from 'react'
import { NavLink } from "react-router-dom"

export const NavegadorLink = () => {
    return (
        <>
            <div className="col-md-4 col-sm-4 col-4">
                <NavLink to="/">

                    <img src="assets/img/logo.png" width="190" height="23" alt="" className="d-none d-sm-block" />
                    <img src="assets/img/logo_mobile.png" width="59" height="23" alt="" className="d-block d-sm-none" />
                </NavLink>
            </div>

            <nav className="col-md-8 col-sm-8 col-8">
                <button className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="javascript:void(0);"><span>Menu mobile</span></button>
                <div className="main-menu">
                    <div id="header_menu">
                        <img src="assets/img/logo.png" width="190" height="23" alt="" />
                    </div>
                    <button href="#" className="open_close" id="close_in"><i className="icon_close"></i></button>
                    <ul>
                        <li><NavLink to="/About">About us</NavLink></li>
                        <li><NavLink to="/Admin">Admin</NavLink></li>
                        <li><NavLink to="/Contacts">Contacts</NavLink></li>
                        <li><NavLink to="#0" data-toggle="modal" data-target="#login_2">Login</NavLink></li>
                        <li><NavLink to="#0" data-toggle="modal" data-target="#register">Registrate</NavLink></li>

                    </ul>
                </div>{/* End main-menu */}
            </nav>

        </>
    )
}
