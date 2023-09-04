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
const userListReducer= (state =initialData, action) => {

    switch (action.type) {
        case 'addDetails':
          return [...state, action.payload];
        case 'deleteDetails':
          return state.filter((item, index) => index !== action.index);

        case 'updateDetails':
          return action.payload




        default:
          return state;
      }

}
export default userListReducer