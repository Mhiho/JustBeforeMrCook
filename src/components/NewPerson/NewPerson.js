import React, { Component } from 'react';


const NewPerson = (props) => (
  <div onClick={props.click}>
  <h1>Is {props.name} a SUPERHERO? ? ???</h1>
  <h2>He is {props.age} years old</h2>
  <h3>And he had a {props.animal}</h3>
  </div>
);

export default NewPerson;
