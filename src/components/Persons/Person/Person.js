import React from 'react';

import classes from './Person.css';



   
const person = (props) => {
    console.log('[Person.js] is rendering')
    return ( <div className = {classes.Person} >
        <p onClick = { props.click } > I am { props.name }!with age { props.age } years old </p> 
        <p> { props.children } </p> <
        input type = "text"
        onChange = { props.changed }
        value = { props.name }
        /> 
        </div>
    )
};

export default person;