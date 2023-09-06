import React, { useState } from 'react';

const LookingForBlood = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
    const [selectedBloodComponent, setSelectedBloodComponent] = useState('');
    const [isDistrictEnabled, setIsDistrictEnabled] = useState(false);

    const handleStateChange = (event) => {
        const newState = event.target.value;
        setSelectedState(newState);
        setIsDistrictEnabled(newState !== '');
    };

    const handleDistrictChange = (event) => {
        const newDistrict = event.target.value;
        setSelectedDistrict(newDistrict);
    };

    const handleBloodGroupChange = (event) => {
        const newBloodGroup = event.target.value;
        setSelectedBloodGroup(newBloodGroup);
    };

    const handleBloodComponentChange = (event) => {
        const newBloodComponent = event.target.value;
        setSelectedBloodComponent(newBloodComponent);
    };

    const handleSearch = () => {
        if (!selectedState) {
            alert('State is required.');
            return;
        }
        if (!selectedDistrict) {
            alert('District is required.');
            return;
        }
        if (!selectedBloodGroup) {
            alert('Blood Group is required.');
            return;
        }
        if (!selectedBloodComponent) {
            alert('Blood Component is required.');
            return;
        }
        console.log('State:', selectedState);
        console.log('District:', selectedDistrict);
        console.log('Blood Group:', selectedBloodGroup);
        console.log('Blood Component:', selectedBloodComponent);
    };

    return (
        <div className="container mt-5">
            <div>Blood Stock Availability</div>
            <div className="row mt-5">
                <div className="col-2">
                    <select
                        className="form-select form-select-md mb-3"
                        aria-label=".form-select-lg example"
                        onChange={handleStateChange}
                        value={selectedState}
                        required
                    >
                        <option value="">Select State</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-2">
                    <select
                        className="form-select form-select-md mb-3"
                        aria-label=".form-select-lg example"
                        onChange={handleDistrictChange}
                        value={selectedDistrict}
                        disabled={!isDistrictEnabled}
                        required
                    >
                        <option value="">Select District</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-3">
                    <select
                        className="form-select form-select-md mb-3"
                        aria-label=".form-select-lg example"
                        onChange={handleBloodGroupChange}
                        value={selectedBloodGroup}
                        required
                    >
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
                    <select
                        className="form-select form-select-md mb-3"
                        aria-label=".form-select-lg example"
                        onChange={handleBloodComponentChange}
                        value={selectedBloodComponent}
                        required
                    >
                        <option defaultValue={""}>Select Blood Component</option>
                        <option value="Whole Blood">Whole Blood</option>
                        <option value=">Single Donor Platelet">Single Donor Platelet</option>
                        <option value="Single Donor Plasma">Single Donor Plasma</option>
                        <option value="Plasma">Plasma</option>
                        <option value="Platelets">Platelets</option>
                    </select>
                </div>
                <div className="col-2 mt-0">
                    <button className="button-theme py-2 px-5" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LookingForBlood;

