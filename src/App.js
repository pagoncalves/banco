import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oper: "menu"

    }

  }

  handleSaque = (event) => {
    this.setState({oper:"saque"})
  }

  handleCanc = (event) => {
    this.setState({oper:"menu"})
  }

  handleInput = (event) => {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  render() {
    if (this.state.oper==="saque")
    return (this.saque())

    return (this.menu())


  }

  menu() {

    return (
      <div className="App">
        <h1>Bem vindo ao Banco!</h1>
        <button onClick={this.handleSaque}> Saque </button>
        <button onClick={this.handleDeposito}> Depósito </button>
        <button onClick={this.handleConsulta}> Consulta </button>

      </div>
    );

  }

  saque() {
    return (
      <div className="App">
        <h1> Você está em: Saque</h1>
        <p>Digite o valor que deseja sacar</p>
        <input name="saq" value={this.state.saq} onChange={this.handleInput}/>
        <button> Sacar </button>
        <button onClick={this.handleCanc}> Cancelar </button>
      </div>

    )
  }
}
export default App;
