import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  constructor(props){
    super(props);
    this.state={  valor: "",
      
    }
  }


evitarSubmit(event){
  event.preventDefault()

}

controlarCambios (event){
  this.setState({
    valor: event.target.value
  }, () => this.props.filtrar(this.state.valor));

}
 render(){
   return ( 
      <header>
    <img className="logo" src="./assets/images/deezerLogo.png" alt="" />
    <section className="right-nav">
      <p>Ordenar ASC/ DESC</p>
      <i className="fas fa-th"></i>
      <i className="fas fa-align-justify"></i>
      <form onSubmit={(event)=>this.evitarSubmit(event)}>
        <label>Filtrar: </label>
        <input type="text" onChange={(event)=>this.controlarCambios(event)} value = {this.state.valor}/>
          <button type="submit"><i className="fas fa-search"></i></button>
      </form>
    </section>
  </header>

   )
 }
}

export default Header