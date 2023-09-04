// actions.js
export const ADD_PERSON = 'ADD_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';
export const UPDATE_PERSON = 'UPDATE_PERSON';

export const addPerson = (person) => ({
  type: ADD_PERSON,
  payload: person,
});

export const deletePerson = (index) => ({
  type: DELETE_PERSON,
  payload: index,
});

export const updatePerson = (index, updatedPerson) => ({
  type: UPDATE_PERSON,
  payload: { index, updatedPerson },
});

