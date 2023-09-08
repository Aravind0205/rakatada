import React, {useState} from 'react';
import Image from "next/image";
import DonorDay from "../assets/images/DonorDay.svg"
import {useRouter} from 'next/router';
import axios from "axios";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleNavigation = () => {
        console.log("redirect")
        router.push("/register")
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const body = {
            email: email,
            password: password,
        };
        const apiUrl = 'http://localhost:5000/rakadata/login';

        axios.post(apiUrl, body)
            .then((response) => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                router.push("/lookingForBlood");

                console.log('Response:', response.data);
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
                                <Image src={DonorDay} width={450} heigth={450}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <form className="card2 card border-0 px-4 py-5">
                            <div className="row px-3">
                                <label className="mb-1">
                                    <div className="mb-0 text-sm form-color">Email Address</div>
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} className="mb-4 form-input text-dark" type="text" name="email"
                                       placeholder="Enter a valid email address" required={true}/>
                            </div>
                            <div className="row px-3">
                                <label className="mb-1">
                                    <div className="mb-0 text-sm form-color">Password</div>
                                </label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" className={"form-input text-dark"} name="password"
                                       placeholder="Enter password" required={true}/>
                            </div>
                            <div className="row mb-3 px-3 mt-4">
                                <button type="submit" className="btn btn-blue text-center button-theme"
                                        onClick={handleLogin}>Login
                                </button>
                            </div>
                            <div className="row mb-4 px-3">
                                <small className="font-weight-bold form-color ">Don't have an account? <a
                                    className="text-danger" onClick={handleNavigation}>Register</a></small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
