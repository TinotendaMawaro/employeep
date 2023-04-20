
    
import React, { useState } from 'react';
import './App.css';
import Employee from './components/Employee';
import Card from './components/Card';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState([]);

  const handleAddEmployeeClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const employee = {
      id: Date.now(),
      name: formData.get('name'),
      surname: formData.get('surname'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      nationalId: formData.get('nationalId'),
      department: formData.get('department'),
      dob: formData.get('dob')
    };

   
    

    setEmployees([...employees, employee]);
    setShowForm(false);
  };
  let List = [
    {
      _id: 1,
      firstName: "Godknows",
      lastName: "Pesanai",
      phone: "0732266949",
      email: "godknowspesanai@gmail.com",
      nationalId: "03-131449J03",
      department: "Media",
      salary: "50000",
      dob: "30/8/2018"
    },
    {
      _id: 2,
      firstName: "Israel",
      lastName: "Ndamuka",
      phone: "0782266999",
      email: "israel@gmail.com",
      nationalId: "03-131449J03",
      department: "Media",
      salary: "70000",
      dob: "30/8/2017"
    },
    {
      _id: 3,
      firstName: "Godknows",
      lastName: "Pesanai",
      phone: "0732266949",
      email: "godknowspesanai@gmail.com",
      nationalId: "03-131449J03",
      department: "Media",
      salary: "50000",
      dob: "30/8/2018"
    },
    {
      _id: 4,
      firstName: "Israel",
      lastName: "Ndamuka",
      phone: "0782266999",
      email: "israel@gmail.com",
      nationalId: "03-131449J03",
      department: "Media",
      salary: "70000",
      dob: "30/8/2017"
    },
    {
      _id: 5,
      firstName: "Godknows",
      lastName: "Pesanai",
      phone: "0732266949",
      email: "godknowspesanai@gmail.com",
      nationalId: "03-131449J03",
      department: "Media",
      salary: "50000",
      dob: "30/8/2018"
    },
    {
      _id: 6,
      firstName: "Israel",
      lastName: "Ndamuka",
      phone: "0782266999",
      email: "israel@gmail.com",
      nationalId: "03-131449J03",
      department: "Media",
      salary: "70000",
      dob: "30/8/2017"
    },
    {
      _id: 7,
      firstName: "Godknows",
      lastName: "Pesanai",
      phone: "0732266949",
      email: "godknowspesanai@gmail.com",
      nationalId: "03-131449J03",
      department: "Media",
      salary: "50000",
      dob: "30/8/2018"
    },
    {
      _id: 8,
      firstName: "Israel",
      lastName: "Ndamuka",
      phone: "0782266999",
      email: "israel@gmail.com",
      nationalId: "03-131449J03",
      department: "Media",
      salary: "70000",
      dob: "30/8/2017"
    },
    {
      _id: 9,
      firstName: "Godknows",
      lastName: "Pesanai",
      phone: "0732266949",
      email: "godknowspesanai@gmail.com",
      nationalId: "03-131449J03",
      department: "Media",
      salary: "50000",
      dob: "30/8/2018"
    },
    {
      _id: 10,
      firstName: "Israel",
      lastName: "Ndamuka",
      phone: "0782266999",
      email: "israel@gmail.com",
      nationalId: "03-131449J03",
      department: "Media",
      salary: "70000",
      dob: "30/8/2017"
    },
    {
      _id: 11,
      firstName: "Godknows",
      lastName: "Pesanai",
      phone: "0732266949",
      email: "godknowspesanai@gmail.com",
      nationalId: "03-131449J03",
      department: "Media",
      salary: "50000",
      dob: "30/8/2018"
    },
    {
      _id: 12,
      firstName: "Israel",
      lastName: "Ndamuka",
      phone: "0782266999",
      email: "israel@gmail.com",
      nationalId: "03-131449J03",
      department: "Media",
      salary: "70000",
      dob: "30/8/2017"
    },
    {
      _id: 13,
      firstName: "Eunice",
      lastName: "Mhoka",
      phone: "0712266999",
      email: "eunice@gmail.com",
      nationalId: "03-131449J03",
      department: "ICT",
      salary: "90000",
      dob: "30/8/2015"
    }
    
  ];

  return (
    <>
      <div className="App">
        <header className="Employee-header ">
          <h5 className="Employee-header">
            <Employee />
          </h5>
        </header>

        <div className="AddEmployee-btn" onClick={handleAddEmployeeClick}>
          <h5>
            <button className="AddEmployeeButton">Add Employee</button>
          </h5>
        </div>

        {showForm && (
          <div className="Form-container">
            <form className="Form" onSubmit={handleFormSubmit}>
              <div className="Form-header">
                <h5>Add Employee</h5>
              </div>

              <div className="Form-row">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>

              <div className="Form-row">
                <label htmlFor="surname">Surname:</label>
                <input type="text" id="surname" name="surname" />
              </div>

              <div className="Form-row">
                <label htmlFor="phone">Phone:</label>
                <div className="Phone-input-container">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="^\+263\d{8}$"
                    defaultValue="+263"
                  />
                </div>
              </div>

              <div className="Form-row">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>

              <div className="Form-row">
                <label htmlFor="nationalId">National ID:</label>
                <input type="text" id="nationalId" name="nationalId" />
              </div>

              <div className="Form-row">
                <label htmlFor="department">Department:</label>
                <input type="text" id="department" name="department" />
              </div>

              <div className="Form-row">
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" />
              </div>

              <div className="Form-footer">
                <button
                  className="Close-button"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="Submit-button">
                  Submit
                </button>
              </div>
             <div className="side-form"></div>

            </form>
          </div>
        )}

        <div className="Employee-list">
        <Card List={List} />        
        </div>
      </div>
    </>
  );
}

export default App;
