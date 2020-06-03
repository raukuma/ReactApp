import React, {Component} from 'react';
import classes from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] Constructor ');
  }
  state = {
    persons :[
      {id:'101', name:'Raushan', age:30},
      {id:'102', name:'Max', age:12},
      {id:'103', name:'Messi', age:20},
      {id:'104', name:'Neymar', age:29},
    ],
    showPersons:false     
  }
  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }
 
  componentWillMount(){
    console.log('[App.js] componentWillMount')
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
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
    console.log('[App.js] rendering');
    let persons =null;
   
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChangeHandler}/>;
      
    }
    
    return (
      <div className={classes.App}> 
        <Cockpit
        title={this.props.appTitle} 
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        toggle ={this.togglePersonsHandler}/>
        {persons}
        <div style={{ textAlign: "left", whiteSpace: "nowrap",display:"flex" }}>
        <div style={{ display: "inline" }}>
            <div>hello</div>
        </div>
        { }
        <div style={{ display: "inline" }}> secondDiv </div>
        <div style={{ display: "inline" }}> thirdDiv </div>
    </div>
      </div>
      
    );
  }
}
export default App;