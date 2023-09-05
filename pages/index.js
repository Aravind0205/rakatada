import Image from "next/image";
import HeroImage from "../assets/images/heroImage.svg";
import Group from "../assets/images/group.svg";
import BloodBag from "../assets/images/bloogBag.svg"

export default function Home() {
    return (
        <div className="home-screen">
            <div className="container-fluid hero-section">
                <div className="container row justify-content-between">
                    <div className="mt-5 text-center col-md-8 col-sm-6">
                        <div className="hero-section-heading-container h2">Give the gift of life to others</div>
                        <div className="hero-section-heading-container h2">Donate Blood !</div>
                        <div className="m-3">
                            <div className="hero-section-des">A single drop of Blood can make a</div>
                            <div className="hero-section-des">huge difference</div>
                        </div>
                        <button className="donate-action">Donate Now</button>
                        <button className="invite-action">Invite Others</button>
                    </div>
                    <div className="mt-5 col-md-4 col-sm-6">
                        <Image src={HeroImage} className="img-fluid" width={450} height={450}/>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3">Learn About Blood Donation</div>
            <div className="text-center hero-section-des">One Blood Donation can save upto Three Lives</div>
            <div className="container row justify-content-between">
                <div className="mt-5 text-center col-md-8">
                    <Image src={BloodBag} className="img-fluid" width={350} height={350}/>
                </div>
                <div className="mt-5 col-md-4 col-sm-6">
                    <Image src={Group} className="img-fluid" width={650} height={650}/>
                </div>
            </div>
            <div className="container">
                <div className="text-center mt-3">Type of Blood Donation</div>
                <div className="text-center mt-2 hero-section-des">The human body contains five litres of blood, which is made of several
                    useful components i.e. Whole blood, Platelet, and Plasma.
                    Each type of component has several medical uses and can be used for different medical treatments.
                    your blood donation determines the best donation for you to make. For plasma and platelet donation
                    you must have donated whole blood in past two years.
                </div>
            </div>
        </div>
    )
}
