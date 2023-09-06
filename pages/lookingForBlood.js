import React from 'react';

const LookingForBlood = () => {
    return (
        <div className="container mt-5">
           <div>Blood Stock Availability</div>
           <div className="row mt-5">
               <div className="col-2">
                   <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                       <option defaultValue={""}>Select State</option>
                       <option value="1">One</option>
                       <option value="2">Two</option>
                       <option value="3">Three</option>
                   </select>
               </div>
               <div className="col-2">
                   <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                       <option defaultValue={""}>Select State</option>
                       <option value="1">One</option>
                       <option value="2">Two</option>
                       <option value="3">Three</option>
                   </select>
               </div>
               <div className="col-3">
                   <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                       <option defaultValue={""}>Select Blood Group</option>
                       <option value="A%2B">A+</option>
                       <option value="A%2D">A-</option>
                       <option value="B%2B">B+</option>
                       <option value="B%2D">B-</option>
                       <option value="AB%2B">AB+</option>
                       <option value="AB%2D">AB-</option>
                       <option value="O%2B">O+</option>
                       <option value="O%2D">O-</option>
                   </select>
               </div>
               <div className="col-3">
                   <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                       <option defaultValue={""}>Select Blood Component</option>
                       <option value="Whole Blood">Whole Blood</option>
                       <option value=">Single Donor Platelet">Single Donor Platelet</option>
                       <option value="Single Donor Plasma">Single Donor Plasma</option>
                       <option value="Plasma">Plasma</option>
                       <option value="Platelets">Platelets</option>
                   </select>
               </div>
               <div className="col-2 mt-0">
                   <button className="button-theme py-2 px-5">Search</button>
               </div>
           </div>
        </div>
    );
};

export default LookingForBlood;
