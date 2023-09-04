// reducer.js
import { ADD_PERSON, DELETE_PERSON, UPDATE_PERSON } from '../action/actions';

const initialState = {
  people: [
    {
      name: 'Max',
      location: 'Kulasekharam',
      age: 24,
      mobile: 1234567890,
    },{
      name: 'Jeff',
      location: 'Bangalore',
      age: 26,
      mobile: 1234567890,
    },
    {
      name: 'Hardy',
      location: 'Nagercoil',
      age: 27,
      mobile: 1234567890,
    },
    {
      name: 'Jey',
      location: 'Marthandam',
      age: 28,
      mobile: 1234567890,
    },
    {
      name: 'Harish',
      location: 'Trivandrum',
      age: 29,
      mobile: 1234567890,
    },

  ],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        people: [...state.people, action.payload],
      };
    case DELETE_PERSON:
      return {
        ...state,
        people: state.people.filter((_, index) => index !== action.payload),
      };
    case UPDATE_PERSON:
      const updatedPeople = [...state.people];
      updatedPeople[action.payload.index] = action.payload.updatedPerson;
      return {
        ...state,
        people: updatedPeople,
      };
    default:
      return state;
  }
};

export default peopleReducer;

