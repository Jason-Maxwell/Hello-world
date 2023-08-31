import React, { useReducer } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {User_Add, User_Delete} from '../src/redux/action/userActions';

// const initialData = [
//   {
//     name: 'Max',
//     location: 'Kulasekharam',
//     age: 24,
//     mobile: 1234567890,
//   },
//   {
//     name: 'Jeff',
//     location: 'Bangalore',
//     age: 26,
//     mobile: 1234567890,
//   },
//   {
//     name: 'Hardy',
//     location: 'Nagercoil',
//     age: 27,
//     mobile: 1234567890,
//   },
//   {
//     name: 'Jey',
//     location: 'Marthandam',
//     age: 28,
//     mobile: 1234567890,
//   },
//   {
//     name: 'Harish',
//     location: 'Trivandrum',
//     age: 29,
//     mobile: 1234567890,
//   },
// ];


// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'addDetails':
//       return [...state, action.payload];
//     case 'deleteDetails':
//       return state.filter((item, index) => index !== action.index);
//     default:
//       return state;
//   }
// };

const ReducerComponent = () => {
  const userData = useSelector((state)=>state.users);
  // const [state, dispatch] = useReducer(reducer, initialData);
const dispatch = useDispatch();

  const handleAddRowChange = () => {
    dispatch({
      type: 'User_Add',
      payload: {
        name: 'Rock',
        location: 'Chennai',
        age: 25,
        mobile: 4214351313,
      },
    });
  };


  const handleDeleteRow = (index) => {
    dispatch({
      type: 'User_Delete',
      index: index,
    });
  };



  return (
    <div>
      <table>
        {/* ... (table headers) */}
        <tbody>
          {userData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td>{item.age}</td>
              <td>{item.mobile}</td>
              <td>
                <button onClick={() => handleDeleteRow(index)}>Delete</button>
              </td>
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
