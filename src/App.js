import React from "react";
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      saque: ""
    }

  }




  render() {

    return (
      <div className="App">
        <h1>Bem vindo ao Banco</h1>
        <button onClick={this.handleSaque}> Saque </button>
        <button onClick={this.handleDeposito}> Depósito </button>
        <button onClick={this.handleConsulta}> Consulta </button>

      </div>
    );

  }
}
export default App;
