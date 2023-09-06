import React from 'react';
import {useRouter} from "next/router";
import Image from "next/image";
import Charity from "../assets/images/Charity.svg";

const Register = () => {
    const router = useRouter();

    const handleNavigation = () => {
        console.log("redirect")
        router.push("/login")
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
                    <div className="col-lg-6 mt-5">
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row px-3">
                                <label className="mb-1"><div className="mb-0 text-sm form-color">User Name</div></label>
                                <input className="mb-4 form-input" type="text" name="username"
                                       placeholder="Enter a valid username"/>
                            </div>
                            <div className="row px-3">
                                <label className="mb-1"><div className="mb-0 text-sm form-color">Email Address</div></label>
                                <input className="mb-4 form-input" type="text" name="email"
                                       placeholder="Enter a valid email address"/>
                            </div>
                            <div className="row px-3">
                                <label className="mb-1"><div className="mb-0 text-sm form-color">Password</div></label>
                                <input type="password"  className={"form-input"} name="password" placeholder="Enter password"/>
                            </div>
                            <div className="row px-3 mt-4">
                                <label className="mb-1"><div className="mb-0 text-sm form-color">Blood Group</div></label>
                                <input className="mb-4 form-input" type="text" name="username"
                                       placeholder="Enter a valid blood group"/>
                            </div>
                            <div className="row mb-3 px-3 mt-4">
                                <button type="submit" className="btn btn-blue text-center button-theme">Login</button>
                            </div>
                            <div className="row mb-4 px-3">
                                <small className="font-weight-bold form-color ">Do have an account? <a
                                    className="text-danger" onClick={handleNavigation}>Login</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
