import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useRouter} from 'next/router';

const LookingForBlood = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
    const [selectedBloodComponent, setSelectedBloodComponent] = useState('');
    const [isDistrictEnabled, setIsDistrictEnabled] = useState(false);
    const [stateData, setStateData] = useState([]);
    const [districtsData, setDistrictsData] = useState([]);
    const [availableBlood, setAvailableBlood] = useState(undefined);
    const [availableError, setAvailableError] = useState("");
    const [loading, setIsLoading] = useState(true);
    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [address, setAddress] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [contact, setContact] = useState("");
    const [token, setToken] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

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
        setAvailableError("");
        setAvailableBlood(undefined);
        setIsLoading(false)
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
        if (selectedState && selectedDistrict && selectedBloodGroup && selectedBloodComponent) {
            axios.get(`http://localhost:5000/rakadata/availableBlood?state=${selectedState}&district=${selectedDistrict}&bloodGroup=${selectedBloodGroup}&componentType=${selectedBloodComponent}`)
                .then(response => setAvailableBlood(response.data))
                .catch(e => setAvailableError(e.response.data.message))
        }
        console.log('State:', selectedState);
        console.log('District:', selectedDistrict);
        console.log('Blood Group:', selectedBloodGroup);
        console.log('Blood Component:', selectedBloodComponent);
    };

    useEffect(() => {
        axios.get('http://localhost:5000/rakadata/states')
            .then(response => setStateData(response.data))
            .catch(e => console.log(e))
    }, [])

    useEffect(() => {
        if (selectedState) {
            axios.get(`http://localhost:5000/rakadata/districts/${selectedState}`)
                .then(response => setDistrictsData(response.data))
                .catch(e => console.log(e))
        }
    }, [selectedState])

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (token) {
            try {
                const formData = {
                    name: name,
                    email: emailAddress,
                    bloodGroup: bloodGroup,
                    address: address,
                    contactNumber: contact
                };
                const apiUrl = 'http://localhost:5000/rakadata/emergencyEmail';
                const response = await axios.post(apiUrl, formData);
                alert(response.data.message)
                window.location.reload();
                console.log('Response:', response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            router.push("/login")
        }
    };


    return (<div className="container mt-5">
        <div>Blood Stock Availability</div>
        {stateData &&
            <div className="row mt-5">
                <div className="col-2">
                    <select
                        className="form-select form-select-md mb-3"
                        aria-label=".form-select-lg example"
                        onChange={handleStateChange}
                        value={selectedState}
                        required
                    >
                        <option defaultValue={""}>Select Blood Group</option>
                        {stateData && stateData.map((item) => (
                            <option value={item}>{item}</option>
                        ))}
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
                        {districtsData && districtsData.map((item) => (
                            <option value={item}>{item}</option>
                        ))}
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
                {loading && <div className="alert alert-primary alert-background mt-5" role="alert">
                    select your requirement and click the button to check the availability
                </div>}
                {availableBlood && <table className="table mt-5">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">District</th>
                        <th scope="col">State</th>
                        <th scope="col">Place Name</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Component Type</th>
                        <th scope="col">UnitsAvailable</th>
                    </tr>
                    </thead>
                    <tbody>
                    {availableBlood && availableBlood.map((item, index) => (
                        <tr>
                            <th scope="row">{index}</th>
                            <td>{item.district}</td>
                            <td>{item.state}</td>
                            <td>
                                {item.places.map((item) => (
                                    <div>
                                        <div>{item.name}</div>
                                        <hr/>
                                    </div>
                                ))}
                            </td>
                            <td>
                                {item.places.map((item) => (
                                    <div>
                                        <div>{item.bloodGroups.map((blood) => (
                                            <div>
                                                <div>{blood.group}</div>
                                            </div>
                                        ))}</div>
                                    </div>
                                ))}
                            </td>
                            <td>
                                {item.places.map((item) => (
                                    <div>
                                        <div>{item.bloodGroups.map((blood) => (
                                            <div>
                                                <div>{blood.component}</div>
                                            </div>
                                        ))}</div>
                                    </div>
                                ))}
                            </td>
                            <td>
                                {item.places.map((item) => (
                                    <div>
                                        <div>{item.bloodGroups.map((blood) => (
                                            <div>
                                                <div>{blood.unitsAvailable}</div>
                                            </div>
                                        ))}</div>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>}
                {availableError && <div className="alert alert-danger alert-background mt-5" role="alert">
                    No units found!
                </div>}
            </div>}
        <div className="h4 mt-3">Request For Urgent Blood Need</div>
        <small>please login or sign up before requesting</small>
        <div className="col-lg-6">
            <form className="card2 card border-0 px-4 py-5 was-validated">
                <div className="row px-3">
                    <label htmlFor={"name"} className="mb-1">
                        <div className="mb-0 text-sm form-color">Name</div>
                    </label>
                    <input id={"name"} onChange={(e) => setName(e.target.value)}
                           className="mb-4 form-input text-dark"
                           type="text" name="name"
                           placeholder="Enter a your Name" required={true}/>
                </div>
                <div className="row px-3">
                    <label htmlFor={"email"} className="mb-1">
                        <div className="mb-0 text-sm form-color">Email Address</div>
                    </label>
                    <input id={"email"} onChange={(e) => setEmailAddress(e.target.value)}
                           className="mb-4 form-input text-dark" type="text" name="email"
                           placeholder="Enter a valid email address" required={true}/>
                </div>
                <div className="row px-3">
                    <label htmlFor={"bloodGroup"} className="mb-1">
                        <div className="mb-0 text-sm form-color">Blood group</div>
                    </label>
                    <input id={"bloodGroup"} onChange={(e) => setBloodGroup(e.target.value)}
                           className="mb-4 form-input text-dark" type="text" name="bloodGroup"
                           placeholder="Enter a required Blood group" required={true}/>
                </div>
                <div className="row px-3">
                    <label htmlFor={"address"} className="mb-1">
                        <div className="mb-0 text-sm form-color">Address</div>
                    </label>
                    <input id={"address"} onChange={(e) => setAddress(e.target.value)}
                           className="mb-4 form-input text-dark" type="text" name="address"
                           placeholder="Enter a full address with pin code, state and district" required={true}/>
                </div>
                <div className="row px-3">
                    <label htmlFor={"contact"} className="mb-1">
                        <div className="mb-0 text-sm form-color">Contact Number</div>
                    </label>
                    <input id={"contact"} onChange={(e) => setContact(e.target.value)}
                           className="mb-4 form-input text-dark" type="text" name="contact"
                           placeholder="Enter a valid contact number" required={true}/>
                </div>
                <div className="row mb-3 px-3 mt-4">
                    <button type="submit" onClick={handleFormSubmit}
                            className="btn btn-blue text-center button-theme">Request
                    </button>
                </div>
            </form>
        </div>
    </div>);
};

export default LookingForBlood;

