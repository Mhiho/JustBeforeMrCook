import * as actionTypes from '../actions';

const initState = {
  persons: []
}

const personReducer = (state = initState,action) => {
  switch (action.type) {
    case actionTypes.ADD_MAN:
      const newMan = {
        id: Math.random(),
        name: 'Mhiho',
        age: Math.floor( Math.random()* 40),
        super: false
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
