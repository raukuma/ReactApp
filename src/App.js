import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';
const StyleButton = styled.button`
      background-color: ${props=>props.alt?'red':'green'};
      color:white;
      font:inherit;
      border:1px solid blue;
      padding:8px;
      cursor:pointer;

      &:hover{
        background-color: ${props=>props.alt?'salamon':'lightgreen'};;
        color: black;
      }
`;
class App extends Component {
  state = {
    persons :[
            {id:'101',name:'Raushan',age:30},
            {id:'102',name:'Max',age:12},
            {id:'103',name:'Messi',age:20},
            {id:'104',name:'Neymar',age:29},
            ],
    otherState : 'Some Other Value',
    showPersons:false       

  }

 
  nameChangeHandler = (event,id) =>
  {
    const personIndex =this.state.persons.findIndex(
      p=>{
        return p.id===id;
      }
    );
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;
   //const person =Object.assign({},this.state.persons[personIndex]);
    //console.log("Was Clicked");
   // DO not this we can't mutate this.state.person[0].name='Raushan';
   this.setState({persons:persons})
  }

  togglePersonsHandler = ()=>{
  const doesShow = this.state.showPersons;
   this.setState({
    showPersons:!doesShow
   });
  }
  deletePersonHandler =(personIndex)=>{
    //const persons =this.state.persons.slice();
    //Using Spread operator
    const persons =[...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({persons:persons})
  }

  render() {

    const style ={
      backgroundColor: 'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'Lightgreen',
        color:'black'
      }
    };
    let persons =null;
    if(this.state.showPersons){
      persons = (
        <div>
        {
        this.state.persons.map((person,index) =>{
        return <Person 
        click={()=>this.deletePersonHandler(index)}
        name={person.name}
        age ={person.age}
        key={person.id} 
         changed={(event)=>{this.nameChangeHandler(event,person.id)}}/>
        }
        )}
       </div>
      );
      /*
      style.backgroundColor='red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color: 'black'
      }
      */
    }
     const classes = [];
     if(this.state.persons.length<=2)
     {
      classes.push('red');//classes=['red']
     }
     if(this.state.persons.length<=1){
      classes.push('bold');////classes=['red','bold']
     }
    
    return (
     
      <div className="App"> 
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
       
       
        <StyleButton alt={this.state.showPersons} onClick= {this.togglePersonsHandler}>Toggle Person</StyleButton>
       {persons}
     
      </div>
    
    );
    //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'I am a React App'));
  }
}

export default App;
