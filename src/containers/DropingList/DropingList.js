import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewPerson from '../../components/NewPerson/NewPerson';
import AddHimHer from '../../components/AddHimHer/AddHimHer';
import * as actionTypes from '../../store/actions';

class DropingList extends Component {
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
    onAddMan: () => dispatch({type:actionTypes.ADD_MAN}),
    onManDown: (id) => dispatch({type:actionTypes.MAN_DOWN, Id: id})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DropingList);
