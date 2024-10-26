import React from "react"
import Login from "../views/login"
import CadastroUsuario from "../views/cadastroUsuario"
import { Route, Routes, HashRouter } from 'react-router-dom'
import Home from "../views/home"
import ConsultaLancamentos from "../views/lancamentos/consulta-lancamento"
function Rotas() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
                <Route path="/consulta-lancamentos" element={<ConsultaLancamentos />} />
            </Routes>
        </HashRouter>
    )
}

export default Rotas;
