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
    case 'deleteDetails':
      return state.filter((item, index) => index !== action.payload.index);


      case 'updateDetails':
        return action.payload
        

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
        location: 'California',
        age: 25,
        mobile: 4214351313,
      },
    });
  };

  // const DetailComponent = ({ detail, setDetail }) => {
  //   useEffect(() => {
  //     // Simulate fetching detail data (e.g., from an API)
  //     const fetchedDetail = { title: 'Sample Detail', content: 'This is the detail content.' };
  //     setDetail(fetchedDetail);
  //   }, [setDetail]);


  

  const handleDeleteRow = (index) => {
    dispatch({
      type: 'deleteDetails',
      payload: { index },
    });
  };

const handleUpdateDetails = (index) => {
  const updatedDetails = {
    name: 'Cmpunk',
    location: 'Chicago',
    age: 30,
    mobile: 1234567899,
  };

  const updatedState = [...state];
  updatedState[index] = updatedDetails;

dispatch({
  type:'updateDetails',
  payload: updatedState
});
};

  return (



    <div>
      <table>
        <thead>
          {/* ... (table headers) */}
        </thead>
        <tbody>
          {state.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.location}</td>
              {/* Add other table columns here */}
              <td>
                <button onClick={() => handleDeleteRow(index)}>Delete</button>
                <button onClick={() => handleUpdateDetails(index)}>Update</button>
         
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

//export default connect(mapStateToProps, { setDetail })(DetailComponent);