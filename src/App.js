import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    person :[
            {name:'Raushan',age:30},
            {name:'Max',age:12},
            {name:'Messi',age:20},
            {name:'Neymar',age:29},
            ],
    otherState : 'Some Other Value'        

  }

  switchNameHandler = () =>
  {
    //console.log("Was Clicked");
   // DO not this we can't mutate this.state.person[0].name='Raushan';
   this.setState({
    person :[
      {name:'Raushan1233',age:30},
      {name:'Max',age:12},
      {name:'Messi',age:24},
      {name:'Neymar',age:24},
      ]
   })
  }
  render() {
    return (
      <div className="App"> 
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <Person 
        name={this.state.person[0].name}
        age={this.state.person[0].age} />
        <button onClick= {this.switchNameHandler}>Click Me</button>
        <Person 
        name={this.state.person[1].name}
        age={this.state.person[1].age} />
        <Person 
        name={this.state.person[2].name}
        age={this.state.person[2].age} 
        click={this.switchNameHandler}>
        Hobbies: play pubg</Person>
        <Person
        name={this.state.person[3].name}
        age={this.state.person[3].age} />
        
      </div>
    );
    //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'I am a React App'));
  }
}

export default App;
