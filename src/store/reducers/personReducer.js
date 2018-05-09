import * as actionTypes from '../actions';

const initState = {
  persons: []
}

const personReducer = (state = initState,action) => {
  switch (action.type) {
    case actionTypes.ADD_MAN:
      const newMan = {
        id: Math.random(),
        name: action.data.nam,
        age: action.data.ag,
        pet: action.data.superp
      };
      return {
        ...state,
        persons: state.persons.concat(newMan)
      };
    case actionTypes.MAN_DOWN:
    return {
      ...state,
      persons: state.persons.filter(person => person.id !== action.Id)
    };
  }
  return state;
};

export default personReducer;
