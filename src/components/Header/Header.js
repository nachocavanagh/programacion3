import React, { Component } from 'react';
import './header.css'
import '../Card/card.css'

class Header extends Component {
  constructor(props){
    super(props);
    this.state={  
      valor: "",   
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
      <p></p>
      <div className="icon-container ">
        <i className="fas fa-th" onClick = {() => this.props.toRow()}></i>
        <i className="fas fa-align-justify" onClick = {() => this.props.toColumn()}></i>
      </div>
      <form onSubmit={(event)=>this.evitarSubmit(event)}>
        <input className="search-bar" placeholder="Search..." type="text" onChange={(event)=>this.controlarCambios(event)} value = {this.state.valor}/>
      </form>
    </section>
  </header>

   )
 }
}

export default Header