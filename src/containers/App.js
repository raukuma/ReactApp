import React, {Component} from 'react';
import classes from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
  state = {
    persons :[
      {id:'101', name:'Raushan', age:30},
      {id:'102', name:'Max', age:12},
      {id:'103', name:'Messi', age:20},
      {id:'104', name:'Neymar', age:29},
    ],
    showPersons:false       
  };
  nameChangeHandler = (event, id) => {
    const personIndex =this.state.persons.findIndex(
      p => p.id===id
    );
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  };
  deletePersonHandler =(personIndex)=>{
    const persons =[...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({persons:persons})
  };
  render() {
    let persons =null;
   
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChangeHandler}/>;
      
    }
    
    return (
      <div className={classes.App}> 
        <Cockpit 
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        toggle ={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}
export default App;