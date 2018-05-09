import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewPerson from '../../components/NewPerson/NewPerson';
import AddHimHer from '../../components/AddHimHer/AddHimHer';
import * as actionTypes from '../../store/actions';

class DropingList extends Component {
  conditionHandler(pet) {
    if(pet === 'cat'){
      return "And She is a SuperHERO!!!"
    }else {return null;}
  }
  render() {
    return (
      <div>
        <AddHimHer
          click={this.props.onAddMan}
        />
      { this.props.pers.map(per =>(
        <NewPerson
          key={per.id}
          click={() => this.props.onManDown(per.id)}
          name={per.name}
          age={per.age}
          animal={this.conditionHandler(per.pet)}
        />
      ))
      }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pers: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddMan: (name,age,pet) => dispatch({type:actionTypes.ADD_MAN, data: {nam: name, ag: age, superp: pet}}),
    onManDown: (id) => dispatch({type:actionTypes.MAN_DOWN, Id: id})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DropingList);
