//Adding Details using useReducer

/*
import React, { useReducer } from 'react';

const initialData = [
  {
    name: 'Max',
    location: 'Kulasekharam',
    age: 24,
    mobile: 1234567890,
  },
  {
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
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'addDetails':
      return [...state, action.payload];
    default:
      return state;
  }
};

const ReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialData);

  const handleAddRowChange = () => {
    dispatch({
      type: 'addDetails',
      payload: {
        name: 'Rock',
        location: 'Chennai',
        age: 25,
        mobile: 4214351313,
      },
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Age</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td>{item.age}</td>
              <td>{item.mobile}</td>
            </tr>
          ))}
          <tr>
            <td>
              <button onClick={handleAddRowChange}>Add Row</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReducerComponent;
*/

//Updating a detail using useReducer:
/*
import React, { useReducer } from 'react';

const initialData = [
  {
    name: 'Max',
    location: 'Kulasekharam',
    age: 24,
    mobile: 1234567890,
  },
  {
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
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'addDetails':
      return [...state, action.payload];
    case 'updateDetails':
      return action.payload;
    default:
      return state;
  }
};

const ReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialData);

  const handleUpdateDetails = (index) => {
    const updatedDetails = {
      name: 'Cm Punk',
      location: 'Chicago',
      age: 30,
      mobile: 1122334455,
    };

    const updatedState = [...state];
    updatedState[index] = updatedDetails;

    dispatch({
      type: 'updateDetails',
      payload: updatedState,
    });
  };

  return (
    <div>
      <table>
        {// ... (table headers) }
        <tbody>
          {state.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td>{item.age}</td>
              <td>{item.mobile}</td>
              <td>
                <button onClick={() => handleUpdateDetails(index)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReducerComponent;
*/

//Deleting a detail using useReducer