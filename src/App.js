import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oper: "menu",
      saldo: 1000

    }

  }

  handleSaque = (event) => {
    this.setState({ oper: "saque" })
  }

  handleCanc = (event) => {
    this.setState({ oper: "menu" })
  }

  handleDep = (event) =>{
    this.setState({oper: "deposito"})
  }

  handleInput = (event) => {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  handleSacar = (event) => {
    this.setState((state) => {
      if (this.state.saq < this.state.saldo)
        return { saldo: state.saldo - parseFloat(state.saq), oper: "resultado" }
      else
        return { oper: "insulficiente" }
    })

  }

  handleDeposito = (event) => {
    this.setState((state) =>{
      return {saldo: state.saldo + parseFloat(state.dep), oper:"resultado"}
    
   /*   if (this.state.dep > 0){
        return{oper:"resultado"}}*/
    
          
    
   }
    )
  }


handleConsulta = (event) => {
  this.setState({ oper: "consulta" })
}

render() {
  switch (this.state.oper) {
    case "saque":
      return (this.saque());

    case "consulta":
      return (this.consulta());

    case "resultado":
      return (this.resultado());

    case "insulficiente":
      return (this.insulficiente());

    case "deposito":
      return (this.depositar());  

    default:
      return (this.menu());


  }

}

menu() {

  return (
    <div className="App">
      <h1>Bem vindo ao Banco!</h1>
      <button onClick={this.handleSaque}> Saque </button>
      <button onClick={this.handleDep}> Depósito </button>
      <button onClick={this.handleConsulta}> Consulta </button>

    </div>
  );

}

saque() {
  return (
    <div className="App">
      <h1> Você está em: Saque</h1>
      <p>Digite o valor que deseja sacar</p>
      <input name="saq" value={this.state.saq} onChange={this.handleInput} />
      <button onClick={this.handleSacar}> Sacar </button>
      <button onClick={this.handleCanc}> Cancelar </button>
    </div>

  );
}

consulta() {
  return (
    <div className="App">
      <h1> Você está em: Consulta</h1>
      <p>Seu saldo atual é:R$ {this.state.saldo} </p>
      <button onClick={this.handleCanc}> Voltar </button>
    </div>
  );
}

resultado() {
  return (
    <div className="App">

      <p>Operação realizada com sucesso!</p>

      <button onClick={this.handleCanc}> Voltar </button>
    </div>
  );
}

insulficiente() {
  return (
    <div className="App">

      <p>Saldo insulficiente, consulte seu saldo.</p>

      <button onClick={this.handleCanc}> Voltar </button>
    </div>
  );
}

depositar() {
  return (
    <div className="App">
      <h1> Você está em: Depósito</h1>
      <p>Digite o valor que deseja depositar</p>
      <input name="dep" value={this.state.dep} onChange={this.handleInput} />
      <button onClick={this.handleDeposito}> Depositar </button>
      <button onClick={this.handleCanc}> Cancelar </button>
    </div>

  );
}

}


export default App;
