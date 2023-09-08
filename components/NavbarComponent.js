import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import Link from "next/link";
import BrandLog from "../assets/images/brand.svg"

const NavbarComponent = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Image src={BrandLog} width={65} height={65}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="lookingForBlood">Looking for Blood</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="donateBlood">Donate Blood</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="learn">Learn</Link>
                        </li>
                        {token ? (
                            <li>
                                <div className="nav-link" onClick={handleLogout}>Logout</div>
                            </li>
                        ) : (
                            <li>
                                <Link className="nav-link" href="learn">Login/Sign Up</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
