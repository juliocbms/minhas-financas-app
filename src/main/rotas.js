import React from "react"
import Login from "../views/login"
import CadastroUsuario from "../views/cadastroUsuario"
import { Route, Routes, HashRouter } from 'react-router-dom'
import Home from "../views/home"

function Rotas() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
            </Routes>
        </HashRouter>
    );
}

export default Rotas;
