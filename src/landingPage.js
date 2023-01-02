import React from "react";
import "./LandingPage.css";
import OpticDevices from "./opticDevices.png";
import About from "./about.jpeg";
import Aerial from "./AerialVehicles.png";
import Medical from "./MedicalSupplies.png";
import Logo from "./logo.svg";


export default function landingPage() {
    return (
        <div className="landingPage">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a href="/">
                    <img src={Logo} alt="" className="logo"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse menu" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">HOME <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">PROJECTS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">SUPPORTERS</a>
        </li>
    <button class="btn btn-outline-warning mx-3" type="button">DONATE</button>
    </ul>
  </div>
        </nav>
            <div className="row text-center m-5">
                <h1>MILITARY AID FOR <span className="green">SOLDIERS</span>
                    <br/> IN UKRAINE</h1>
                <p className="opacity-50">The task of the military headquarters of the Serhiy Prytula Charitable Foundation is to save as many lives as possible of the defenders of Ukraine and help them liberate the occupier</p>
                <button className="btn btn-lg btn-warning col-2 mx-auto">DONATE NOW</button>
            </div>

            <div className="row text-center about-block p-5">
                <div className="col-6 about-text">
                    <h2 className="mb-4">WE BELIEVE IN DOING <br/> INCREDIBLE</h2>
                    <div className="opacity-50">Ukrainian Serhiy Prytula put aside his media career to help Ukraine in its war effort. Through his foundation, Prytula has generated nearly €83 million to help the Ukrainian army acquire military equipment.
                        <br /> <br/> + OVER 200 VOLUNTEERS <br/>
                        <br />We are volunteers, people who help our army to have the equipment that the state does not have the possibility to buy or does but very slowly</div>
                    <button className="btn btn-warning mt-3">DONATE</button>
                </div>
                <div className="col-6">
                    <img src={About} alt="about" className="about-image w-100"/>
                </div>
            </div>

            <div className="row projects-block">
                <h2 className="text-center">ONGOING <span className="projects-heading">PROJECTS</span></h2>
                <p className="text-center">Join our fight for freedom, support our projects!</p>

                <div className="d-flex justify-content-around mt-5">
                    <div className="card col-4">
                        <img className="card-img-top w-75" src={OpticDevices} alt="#"/>
                        <div className="card-body">
                            <h5 className="card-title">MILITARY AMUNITION</h5>
                            <p className="card-text">Help in the fight against the occupier</p>
                            <div className="d-flex justify-content-between text-center">
                                <p opacity-50>GOAL
                                    <br />
                                    <strong>
                                        $500,000
                                    </strong>
                                </p>
                                <p opacity-50>RAISED
                                    <br />
                                    <strong>
                                        $150,000
                                    </strong>
                                </p>
                                <p opacity-50>REMAIN
                                    <br />
                                    <strong>
                                        $350,000
                                    </strong>
                                </p>
                            </div>
                            <a href="/" className="btn btn-warning">DONATE</a>
                        </div>
                    </div>
                    <div className="card col-4">
                        <img className="card-img-top w-75" src={Medical} alt="#" />
                        <div className="card-body">
                            <h5 className="card-title">MEDICAL SUPPLIES</h5>
                            <p className="card-text">To save lives of the soldiers</p>
                            <div className="d-flex justify-content-between text-center">
                                <p opacity-50>GOAL
                                    <br />
                                    <strong>
                                        $700,000
                                    </strong>
                                </p>
                                <p opacity-50>RAISED
                                    <br />
                                    <strong>
                                        $550,000
                                    </strong>
                                </p>
                                <p opacity-50>REMAIN
                                    <br />
                                    <strong>
                                        $150,000
                                    </strong>
                                </p>
                            </div>
                            <a href="/" className="btn btn-warning">DONATE</a>
                        </div>
                    </div>
                    <div className="card col-4">
                        <img className="card-img-top w-75" src={Aerial} alt="#" />
                        <div className="card-body">
                            <h5 className="card-title">AERIAL VEHICLES</h5>
                            <p className="card-text">Strengthen the Armed Forces</p>
                            <div className="d-flex justify-content-between text-center">
                                <p opacity-50>GOAL
                                    <br />
                                    <strong>
                                        $1M
                                    </strong>
                                </p>
                                <p opacity-50>RAISED
                                    <br />
                                    <strong>
                                        $489,000
                                    </strong>
                                </p>
                                <p opacity-50>REMAIN
                                    <br />
                                    <strong>
                                        $511,000
                                    </strong>
                                </p>
                            </div>
                            <a href="/" className="btn btn-warning">DONATE</a>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="row text-center beneficiary-block">
                <h2>BE A BEHEFICIARY</h2>
                <p>There are no more or less important projects!
                    Donate to the fund's general accounts</p>
                <button className="btn btn-warning col-2 mx-auto">DONATE NOW</button>
            </div>
            <footer>
                <div className="row">
                    <div className="col-4">
                        <img src={Logo} alt="" className="w-50"/>
                    </div>
                    <div className="col-4">
                        <h4>CONTACT US:</h4>
                        <p>PHONE:</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}