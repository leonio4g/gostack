import React, { Component } from 'react'
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech:'',
    techs:[]
  }

  componentDidMount(){
    //Executado assim que o componente aparece em tela
    const techs = localStorage.getItem('techs');
    if(techs){
      this.setState({techs: JSON.parse(techs)});
    }
  }

  componentDidUpdate(_, prevState){
    //Executado sempre que houver alterações nas props ou state
    //this.props, this.state

    if(prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  componentWillUnmount(){
    //Executado quando componente deixa de existit
  }

 
  handleInputChange = e => {
    this.setState({newTech: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech:'',
     });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} >
      <ul>
       {this.state.techs.map(tech => (
       <TechItem key={tech} 
       tech={tech} 
       onDelete={() => this.handleDelete(tech)}/>))}
      </ul>
      <input 
      type="text" 
      onChange={this.handleInputChange} 
      value={this.state.newTech}
      />
      <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default TechList;