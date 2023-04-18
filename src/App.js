/*import React, { useState } from 'react';

//import React  from 'react';
import './App.css';
import Employee from './components/Employee';
import AddEmployeeButton from './components/AddEmployeeButton';
import EmployeeList from './components/EmployeeList';

function App() {

  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    nationalID: '',
    department: '',
    dateOfBirth: '',
  });

   const handleFormChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

     const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
          name: '',
          surname: '',
          phone: '',
          email: '',
          nationalID: '',
          department: '',
          dateOfBirth: '',
        });

          setShowForm(false);
          };
        


  return (
    <div className="App">
      <header className="Employee-header ">
        <h5 className="Employee-header">
          <Employee />
        </h5>

        
      </header>
      <div className='AddEmployee-btn'>
        <h5>
        <button className="AddEmployeeButton" onClick={handleAddEmployeeClick}>
          Add Employee
          </button>

        </h5>
      </div>


      {showForm && (
        <div className="Employee-form">
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Surname:
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
              />
            </label>
            <label>
              National ID:
              <input
                type="text"
                name="nationalID"
                value={formData.nationalID}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Department:
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Date of Birth:
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleFormChange}
              />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      )}
      
      <div className="Employee-list">
              <EmployeeList/>
            </div>
    </div>
  );
}

export default App;*/





// import React, { useState } from 'react';
// import './App.css';
// import Employee from './components/Employee';
// import AddEmployeeButton from './components/AddEmployeeButton';
// import EmployeeList from './components/EmployeeList';

// function App() {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <>    
//     <div className="App">
//       <header className="Employee-header ">
//         <h5 className="Employee-header">
//           <Employee />
//         </h5>
//       </header>

      

//       <div className="AddEmployee-btn" onClick={() => setShowForm(true)}>
//         <h5>
//           <button className="AddEmployeeButton">
//             Add Employee
//           </button>
//         </h5>
//       </div>

      

//       {showForm && (
//         <div className="Form-container">
//           <form className="Form">
//             <div className="Form-header">
//               <h5>Add Employee</h5>
//             </div>

//             <div className="Form-row">
//               <label htmlFor="name">Name:</label>
//               <input type="text" id="name" name="name" />
//             </div>

//             <div className="Form-row">
//               <label htmlFor="surname">Surname:</label>
//               <input type="text" id="surname" name="surname" />
//             </div>

//             <div className="Form-row">
//               <label htmlFor="phone">Phone:</label>
//               <div className="Phone-input-container">
//                 <input type="tel" id="phone" name="phone" pattern="^\+263\d{8}$" defaultValue="+263" />
//               </div>
//             </div>

//             <div className="Form-row">
//               <label htmlFor="email">Email:</label>
//               <input type="email" id="email" name="email" />
//             </div>

//             <div className="Form-row">
//               <label htmlFor="nationalId">National ID:</label>
//               <input type="text" id="nationalId" name="nationalId" />
//             </div>

//             <div className="Form-row">
//               <label htmlFor="department">Department:</label>
//               <input type="text" id="department" name="department" />
//             </div>

//             <div className="Form-row">
//               <label htmlFor="dob">Date of Birth:</label>
//               <input type="date" id="dob" name="dob" />
//             </div>

            
//               <div className="Form-footer">
//               <button className="Close-button" onClick={() => setShowForm(false)}>
//                 Cancel
//               </button>

//               <button type="submit" className="Submit-button" enabled={true}>
//                 Submit
//               </button>
//             </div>
//             <div className='side-form'> </div>
//           </form>
      
//         </div>
         
        
//       )}

//       <div className="Employee-list">

//         <EmployeeList/>
//       </div>

      
//     </div>
    
//     </>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import './App.css';
// import Employee from './components/Employee';
// // import AddEmployeeButton from './components/AddEmployeeButton';
// import EmployeeList from './components/EmployeeList';

// function App() {
//   const [showForm, setShowForm] = useState(false);
//   const [employees, setEmployees] = useState([]);

//   const handleAddEmployeeClick = () => {
//     setShowForm(true);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);

//     const employee = {
//       name: formData.get('name'),
//       surname: formData.get('surname'),
//       phone: formData.get('phone'),
//       email: formData.get('email'),
//       nationalId: formData.get('nationalId'),
//       department: formData.get('department'),
//       dob: formData.get('dob')
//     };

//     setEmployees([...employees, employee]);
//     setShowForm(false);
//   };

//   return (
//     <>
//       <div className="App">
//         <header className="Employee-header ">
//           <h5 className="Employee-header">
//             <Employee />
//           </h5>
//         </header>

//         <div className="AddEmployee-btn" onClick={handleAddEmployeeClick}>
//           <h5>
//             <button className="AddEmployeeButton">Add Employee</button>
//           </h5>
//         </div>

//         {showForm && (
//           <div className="Form-container">
//             <form className="Form" onSubmit={handleFormSubmit}>
//               <div className="Form-header">
//                 <h5>Add Employee</h5>
//               </div>

//               <div className="Form-row">
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name" name="name" />
//               </div>

//               <div className="Form-row">
//                 <label htmlFor="surname">Surname:</label>
//                 <input type="text" id="surname" name="surname" />
//               </div>

//               <div className="Form-row">
//                 <label htmlFor="phone">Phone:</label>
//                 <div className="Phone-input-container">
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     pattern="^\+263\d{8}$"
//                     defaultValue="+263"
//                   />
//                 </div>
//               </div>

//               <div className="Form-row">
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" />
//               </div>

//               <div className="Form-row">
//                 <label htmlFor="nationalId">National ID:</label>
//                 <input type="text" id="nationalId" name="nationalId" />
//               </div>

//               <div className="Form-row">
//                 <label htmlFor="department">Department:</label>
//                 <input type="text" id="department" name="department" />
//               </div>

//               <div className="Form-row">
//                 <label htmlFor="dob">Date of Birth:</label>
//                 <input type="date" id="dob" name="dob" />
//               </div>

//               <div className="Form-footer">
//                 <button
//                   className="Close-button"
//                   onClick={() => setShowForm(false)}
//                 >
//                   Cancel
//                 </button>

//                 <button type="submit" className="Submit-button">
//                   Submit
//                 </button>
//               </div>
//               <div className="side-form"></div>
//             </form>
//           </div>
//         )}

//         <div className="Employee-list">
//           <EmployeeList employees={employees} />
//         </div>
//       </div>
//     </>
//     );
//      }
    
//      export default App;
    
import React, { useState } from 'react';
import './App.css';
import Employee from './components/Employee';
import EmployeeList from './components/EmployeeList';

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

    const employees = [
      {
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
    

    setEmployees([...employees, employee]);
    setShowForm(false);
  };

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
          <EmployeeList employees={employees} />
        </div>
      </div>
    </>
  );
}

export default App;
