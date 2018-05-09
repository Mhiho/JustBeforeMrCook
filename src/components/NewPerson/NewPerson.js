import React, { Component } from 'react';
import './NewPerson.css';

const NewPerson = (props) => (
  <div onClick={props.click}>
  <h1>Is {props.name} a superhero ? </h1>
  <h2>He is {props.age} years old</h2>
  <h1 className="Super">{props.animal}</h1>
  </div>
);

export default NewPerson;
