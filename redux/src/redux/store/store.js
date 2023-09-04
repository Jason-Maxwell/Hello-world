// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from '../reducer/rootReducer';

// // config the store
// const store = configureStore({
//   reducer: todoReducer
// })

// export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// //import { createStore } from 'redux';
// import rootReducer from '../reducer/rootReducer'; // Import your rootReducer
// import App from '../../App';

// const store = configureStore(rootReducer); // Create the Redux store with your rootReducer

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );


import { configureStore } from '@reduxjs/toolkit';
//import { ConfigureStoreOptions } from '@reduxjs/toolkit';
//import { createStore } from 'redux';
import rootReducer from '../reducer/rootReducer';

const store = configureStore(rootReducer);

export default store;
