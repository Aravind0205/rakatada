import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Image from "next/image";
import Charity from "../assets/images/Charity.svg";
import axios from "axios";

const Register = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");

    const handleNavigation = () => {
        router.push("/login")
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const body = {
            username: name,
            email: emailAddress,
            password: password,
            bloodGroup: bloodGroup
        };
        const apiUrl = 'http://localhost:5000/rakadata/register';

        axios.post(apiUrl, body)
            .then((response) => {
                // Handle the successful response here.
                localStorage.setItem('token', JSON.stringify(response.data.token));
                router.push("/lookingForBlood");
            })
            .catch((error) => {
                // Handle any errors that occurred during the request.
                console.error('Error:', error);
            });
    }


    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div className="card card0 border-0">
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">
                            <div className="row">
                                <Image src={Charity} width={450} heigth={450}/>
                            </div>
                        </div>
                    </div>
                    <form className="col-lg-6 mt-5">
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row px-3">
                                <label className="mb-1">
                                    <div className="mb-0 text-sm form-color">User Name</div>
                                </label>
                                <input onChange={(e) => setName(e.target.value)}
                                       className="mb-4 form-input text-dark"
                                       type="text" name="username"
                                       placeholder="Enter a valid username" required={true}/>
                            </div>
                            <div className="row px-3">
                                <label className="mb-1">
                                    <div className="mb-0 text-sm form-color">Email Address</div>
                                </label>
                                <input onChange={(e) => setEmailAddress(e.target.value)}
                                       className="mb-4 form-input text-dark" type="text" name="email"
                                       placeholder="Enter a valid email address" required={true}/>
                            </div>
                            <div className="row px-3">
                                <label className="mb-1">
                                    <div className="mb-0 text-sm form-color">Password</div>
                                </label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password"
                                       className={"form-input text-dark"} name="password"
                                       placeholder="Enter password" required={true}/>
                            </div>
                            <div className="row px-3 mt-4">
                                <label className="mb-1">
                                    <div className="mb-0 text-sm form-color">Blood Group</div>
                                </label>
                                <input onChange={(e) => setBloodGroup(e.target.value)}
                                       className="mb-4 form-input text-dark" type="text" name="bloodGroup"
                                       placeholder="Enter a valid blood group" required={true}/>
                            </div>
                            <div className="row mb-3 px-3 mt-4">
                                <button type="submit" className="btn btn-blue text-center button-theme"
                                        onClick={handleRegister}>Register
                                </button>
                            </div>
                            <div className="row mb-4 px-3">
                                <small className="font-weight-bold form-color ">Do have an account? <a
                                    className="text-danger" onClick={handleNavigation}>Login</a></small>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
