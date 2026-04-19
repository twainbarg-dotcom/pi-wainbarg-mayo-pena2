import React, { Component } from "react";
import Cookies from "universal-cookie";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
const cookies = new Cookies();

class MiPerfil extends Component {
    constructor(props) {
        super(props)

    }

    logout() {
        sessionStorage.removeItem("usuarioEnSesion");
        localStorage.removeItem("favoritosP")
        localStorage.removeItem("favoritosS")

        cookies.remove("auth-user", { path: "/" })

        this.props.history.push("/login")
    }


    render() {
        const userLogueado = cookies.get("auth-user");

        if (!userLogueado) {
            this.props.history.push("/login");
        }
        return (
            <div>
                <h2>Mi perfil</h2>
                <button onClick={() => this.logout()} >Cerrar Sesion</button>
            </div>

        );
    }

}

export default withRouter(MiPerfil);
