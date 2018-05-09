import React, {Component} from 'react';
import './AddHimHer.css';

class AddHimHer extends Component {

  state = {
    name: '',
    age: '',
    pet: 'dog'
  }
  changeName = (event) => {
    this.setState({name: event.target.value})
  }
  changeAge = (event) => {
    this.setState({age: event.target.value})
  }
  changePet = (event) => {
    this.setState({pet: event.target.value})
  }
  render(){
    return (
  <div>
  <input
    className="Input"
    type="text"
    onChange={this.changeName}
    value={this.state.name}
  />
  <input
    className="Input"
    type="number"
    onChange={this.changeAge}
    value={this.state.age}
  />
  <label>
  <input
    className="Checkbox"
    type="radio"
    name="pet"
    value={this.state.dog}
    defaultChecked="true"
  />
  Dog
  </label>
  <label>
  <input
    className="Checkbox"
    type="radio"
    name="pet"
    value="cat"
    onChange={this.changePet}
  />
  Cat
  </label>
  <button
    className="Button"
    onClick={() => this.props.click(this.state.name,this.state.age, this.state.pet)}
  >JUST Add
  </button>
  </div>
)
}
}
export default AddHimHer;
