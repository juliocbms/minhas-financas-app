import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import { useNavigate } from 'react-router-dom'
import UsuarioService from '../app/service/usuarioService'

class Login extends React.Component {
    state = {
        email: '',
        senha: '',
        mensagemErro: null
    }

constructor(){
    super()
    this.service = new UsuarioService
}

    entrar = async () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then( response => {
                localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
                this.props.navigate('/home')
            }).catch(erro => {
                console.log('entrou no erro')
                this.setState({mensagemErro: erro.response.data})
            })
    }


    prepareCadastrar = () => {
        this.props.navigate('/cadastro-usuarios');
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row" >
                                <span>{this.state.mensagemErro}</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-compnent">
                                        <fieldset>
                                            <FormGroup label="Email *" htmlFor="exampleInputEmail1">
                                                <input
                                                    type="email"
                                                    value={this.state.email}
                                                    onChange={e => this.setState({ email: e.target.value })}
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Digite o Email" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input
                                                    type="password"
                                                    value={this.state.senha}
                                                    onChange={e => this.setState({ senha: e.target.value })}
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </FormGroup>

                                            <button onClick={this.entrar} className="btn btn-success">
                                                Entrar
                                            </button>
                                            <button onClick={this.prepareCadastrar} className="btn btn-danger">
                                                Cadastrar
                                            </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

// Componente wrapper para usar useNavigate com classe
function LoginWithNavigate(props) {
    const navigate = useNavigate();
    return <Login {...props} navigate={navigate} />;
}

export default LoginWithNavigate;
