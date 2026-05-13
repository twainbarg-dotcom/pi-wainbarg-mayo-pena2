import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const authCookie = cookies.get("auth-user");






function Navbar() {
    return (
        <><h1>UdeSA Movies</h1>

            <nav>
                <ul class="nav nav-tabs my-4">
                    <li className="nav-item">
                        <Link to="/" class="nav-link"> Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Peliculas" class="nav-link"> Peliculas</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Series" class="nav-link"> Series</Link>
                    </li>
                    {authCookie == null ? (
                        <>

                            <li class="nav-item ml-auto">
                                <Link to="/Registro" class="nav-link"> Registro</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Login" class="nav-link"> Login</Link>
                            </li>
                        </>
                    ) : (
                        <li class="nav-item">
                            <Link to="/Favoritos" class="nav-link"> Favoritas</Link>
                        </li>

                    )}
                    <li class="nav-item">
                        <Link to="/perfil" class="nav-link"> Mi Perfil</Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default withRouter(Navbar);