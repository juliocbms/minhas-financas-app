import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import SelectMenu from '../../components/selectMenu'
import LancamentosTable from './lancamentosTable'

class ConsultaLancamentos extends React.Component {

state = {
    ano: '',
    mes: '',
    status: ''
}

buscar = () => {
console.log(this.state)

}

    render() {
        const meses = [
            { label: 'Selecione...', value: '' },
            { label: 'Janeiro', value: '1' },
            { label: 'Fevereiro', value: '2' },
            { label: 'Março', value: '3' },
            { label: 'Abril', value: '4' },
            { label: 'Maio', value: '5' },
            { label: 'Junho', value: '6' },
            { label: 'Julho', value: '7' },
            { label: 'Agosto', value: '8' },
            { label: 'Setembro', value: '9' },
            { label: 'Outubro', value: '10' },
            { label: 'Novembro', value: '11' },
            { label: 'Dezembro', value: '12' },
        ]

        const tipos = [
            { label: 'Selecione...', value: '' },
            { label: 'Despesa', value: 'DESPESA' },
            { label: 'Receita', value: 'Receita' },
        ]

        const lancamentos = [
            {id: 1,descricao: 'Salário', valor:5000, mes:1, tipo:'Receita', status: 'Efetivado'}
        ]

        return (
            <Card title="Consulta Lançamentos">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputAno" label="Ano: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputAno"
                                    value={this.state.ano}
                                    onChange={e => this.setState({ano: e.target.value})}
                                    placeholder="Digite o Ano" />
                            </FormGroup>

                            <FormGroup htmlFor="inputMes" label="Mês: ">
                                <SelectMenu id="inputMes" 
                                value={this.state.mes}
                                onChange={e => this.setState({mes: e.target.value})}
                                className="form-control" 
                                lista={meses} />
                            </FormGroup>

                            <FormGroup htmlFor="inputTipo" label="Tipo Lançamento: ">
                                <SelectMenu 
                                id="inputTipo" 
                                value={this.state.tipo}
                                onChange={e => this.setState({tipo: e.target.value})}
                                className="form-control" lista={tipos} />
                            </FormGroup>

                            <button onClick={this.buscar} className="btn btn-success">
                                Buscar
                            </button>
                            <button onClick={this.prepareCadastrar} className="btn btn-danger">
                                Cadastrar
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentosTable lancamentos={lancamentos}/>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

function ConsultaLancamentosWithNavigate(props) {
    const navigate = useNavigate();
    return <ConsultaLancamentos {...props} navigate={navigate} />;
}

export default ConsultaLancamentosWithNavigate;