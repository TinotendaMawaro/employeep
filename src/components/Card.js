import React, { useState } from 'react';


const Card= (props) => {
    const [selectedRows, setSelectedRows] = useState([]);

    const handleCheckboxChange = (event, row) => {
        if (event.target.checked) {
          setSelectedRows([...selectedRows, row]);
        } else {
          setSelectedRows(selectedRows.filter((r) => r._id !== row._id));
        }
      };
    if (props.List && props.List.length > 0) {
        return (
          <div>
            <table className="card">
              <thead>
                <tr className="table_header">
                
                  <th> <input
                        type="checkbox"
                        checked={selectedRows.some((r) => r._id === selectedRows._id)}
                        onChange={(event) => {
                          handleCheckboxChange(event, selectedRows);
                        }}
                      /> </th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Phone </th>
                  <th>Email</th>
                  <th>National ID</th>
                  <th>Department</th>
                  <th>D.O.B</th>
                </tr>
              </thead>
              <tbody>
                {props.List.map((row) => ( 
                  <tr key={row._id}>
                
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedRows.some((r) => r._id === row._id)}
                        onChange={(event) => {
                          handleCheckboxChange(event, row);
                        }}
                      />
                    </td>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td>
                    <td>{row.phone}</td>
                    <td>{row.email}</td>
                    <td>{row.nationalId}</td>
                    <td>{row.department}</td>
                    <td>{row.dob}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
    
           
          
          </div>
        );
      } else {
        return (
            <div className='EmployeeList'>
            <div className="center">
                  <img src="./logo.svg" alt="Company Logo" />
                  </div>

            
          <p>You have no employees</p>
    </div>
        );
      }
    };
    

            
            
      

    


export default Card;

// import React from 'react';
// import Employee from './Employee';

// function EmployeeList({ employees }) {
//   return (
//     <div className="EmployeeList">
//       {employees.length === 0 ? (
//         <div className="center">
//           <img src="./logo.svg" alt="Company Logo" />
//           <p>You have no employees</p>
//         </div>
//       ) : (
//         <ul>
//           {employees.map((employee) => (
//             <li key={employee.email}>
//               <Employee employee={employee} />
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default EmployeeList;
