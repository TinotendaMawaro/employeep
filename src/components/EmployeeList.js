// import React from 'react';

// function EmployeeList() {
    

//     return (
//         <div className='EmployeeList'>
//             <div className="center">
//                   <img src="./logo.svg" alt="Company Logo" />
//                   </div>

            
//           <p>You have no employees</p>
//     </div>

//     );
// }

// export default EmployeeList;

import React from 'react';
import Employee from './Employee';

function EmployeeList({ employees }) {
  return (
    <div className="EmployeeList">
      {employees.length === 0 ? (
        <div className="center">
          <img src="./logo.svg" alt="Company Logo" />
          <p>You have no employees</p>
        </div>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.email}>
              <Employee employee={employee} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeList;
