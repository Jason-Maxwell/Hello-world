// App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson, deletePerson, updatePerson } from './redux/action/actions';

const App = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);

  // State for handling form inputs
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    age: '',
    mobile: '',
  });

  const handleAddPerson = () => {
    dispatch(addPerson(formData));
    setFormData({
      name: '',
      location: '',
      age: '',
      mobile: '',
    });
  };

  const handleDeletePerson = (index) => {
    dispatch(deletePerson(index));
  };

  const handleUpdatePerson = (index) => {
    const updatedPerson = {
      name: 'Updated Name',
      location: 'Updated Location',
      age: 30,
      mobile: 'Updated Mobile',
    };
    dispatch(updatePerson(index, updatedPerson));
  };

  return (
    <div>
      <h1>People List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.location}</td>
              <td>{person.age}</td>
              <td>{person.mobile}</td>
              <td>
                <button onClick={() => handleDeletePerson(index)}>Delete</button>
                <button onClick={() => handleUpdatePerson(index)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add Person</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />
        <button onClick={handleAddPerson}>Add</button>
      </div>
    </div>
  );
};

export default App;
