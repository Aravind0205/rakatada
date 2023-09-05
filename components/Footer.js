import React from 'react';
import Image from "next/image";
import BrandLogo from '../assets/images/brand.svg'

const Footer = () => {
    return (
        <div className={"hero-section text-center mt-5"}>
            <Image src={BrandLogo} width={65} height={65}/>
            <div>Copyright@2023 Roehampton</div>
        </div>
    );
};

export default Footer;
