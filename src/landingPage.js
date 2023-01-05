import React from "react";
import "./LandingPage.css";
import OpticDevices from "./opticDevices.png";
import About from "./about.jpeg";
import Aerial from "./AerialVehicles.png";
import Medical from "./MedicalSupplies.png";
import Logo from "./logo.svg";
import logo1 from "./image6.png";


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
      <li class="nav-item mx-3">
        <a class="nav-link" href="#">HOME <span class="sr-only"></span></a>
      </li>
      <li class="nav-item mx-3">
        <a class="nav-link" href="#">ABOUT</a>
      </li>
      <li class="nav-item mx-3">
        <a class="nav-link" href="#">PROJECTS</a>
      </li>
      <li class="nav-item mx-4">
        <a class="nav-link" href="#">SUPPORTERS</a>
        </li>
    <button class="btn btn-warning mx-2 button-header" type="button">DONATE</button>
    </ul>
  </div>
    </nav>
            
            <div className="row m-5">
                <div className="col text-center">
                <h1><strong>MILITARY AID FOR <span className="green">SOLDIERS</span>
                    <br/> IN UKRAINE</strong></h1>
                <p className="opacity-50 mt-3">The task of the military headquarters of the Serhiy Prytula Charitable<br/>Foundation is to save as many lives as possible of the defenders<br/>of Ukraine and help them liberate the occupier</p>
                    <button className="btn btn-lg btn-warning col-2 m-auto my-5 p-3 button">DONATE NOW</button>
                    </div>
            </div>

            <div className="row text-center about-block">
                <div className="col-6 about-text">
                    <h2 className="mb-4"><strong>WE BELIEVE IN DOING <br/> INCREDIBLE</strong></h2>
                    <div className="opacity-50 w-75">Ukrainian Serhiy Prytula put aside his media career to help Ukraine in its war effort. Through his foundation, Prytula has generated nearly €83 million to help the Ukrainian army acquire military equipment.
                        <br /> <br/> + OVER 200 VOLUNTEERS <br/>
                        <br />We are volunteers, people who help our army to have the equipment that the state does not have the possibility to buy or does but very slowly</div>
                    <button className="btn btn-warning mt-5 button button-about">DONATE</button>
                </div>
                <div className="col-6">
                    <img src={About} alt="about" className="about-image w-100"/>
                </div>
            </div>

            
            <div className="row projects-block">
                <h2 className="text-center"><strong>ONGOING <span className="projects-heading">PROJECTS</span></strong></h2>
                <p className="text-center project-sub">Join our fight for freedom, support our projects!</p>

                <div className="d-flex justify-content-around mt-5">
                    <div className="card col-3 p-4">
                        <img className="card-img-top w-100" src={OpticDevices} alt="#"/>
                        <div className="card-body p-0">
                            <h5 className="card-title m-0"><strong>MILITARY AMUNITION</strong></h5>
                            <p className="card-text">Help in the fight against the occupier</p>
                            <div className="d-flex justify-content-between text-center">
                                <p> <span className="opacity-50">GOAL</span>
                                    <br />
                                    <strong>
                                        $500,000
                                    </strong>
                                </p>
                                <p><span className="opacity-50">RAISED</span>
                                    <br />
                                    <strong>
                                        $150,000
                                    </strong>
                                </p>
                                <p><span className="opacity-50">REMAIN</span>
                                    <br />
                                    <strong>
                                        $350,000
                                    </strong>
                                </p>
                            </div>
                            <a href="/" className="btn btn-warning button mt-1 button-project">DONATE</a>
                        </div>
                    </div>
                    <div className="card col-3 p-4">
                        <img className="card-img-top w-100" src={Medical} alt="#" />
                        <div className="card-body p-0">
                            <h5 className="card-title m-0"><strong>MEDICAL SUPPLIES</strong></h5>
                            <p className="card-text">To save lives of the soldiers</p>
                            <div className="d-flex justify-content-between text-center">
                                <p> <span className="opacity-50">GOAL</span>
                                    <br />
                                    <strong>
                                        $700,000
                                    </strong>
                                </p>
                                <p> <span className="opacity-50">RAISED</span>
                                    <br />
                                    <strong>
                                        $550,000
                                    </strong>
                                </p>
                                <p> <span className="opacity-50">REMAIN</span>
                                    <br />
                                    <strong>
                                        $150,000
                                    </strong>
                                </p>
                            </div>
                            <a href="/" className="btn btn-warning button mt-1 button-project">DONATE</a>
                        </div>
                    </div>
                    <div className="card col-3 p-4">
                        <img className="card-img-top w-100" src={Aerial} alt="#" />
                        <div className="card-body p-0">
                            <h5 className="card-title m-0"><strong>AERIAL VEHICLES</strong></h5>
                            <p className="card-text">Strengthen the Armed Forces</p>
                            <div className="d-flex justify-content-between text-center">
                                <p> <span className="opacity-50">GOAL</span>
                                    <br />
                                    <strong>
                                        $1M
                                    </strong>
                                </p>
                                <p> <span className="opacity-50">RAISED</span>
                                    <br />
                                    <strong>
                                        $489,000
                                    </strong>
                                </p>
                                <p> <span className="opacity-50">REMAIN</span>
                                    <br />
                                    <strong>
                                        $511,000
                                    </strong>
                                </p>
                            </div>
                            <a href="/" className="btn btn-warning button mt-1 button-project">DONATE</a>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="row text-center beneficiary-block">
                <h2><strong>BE A BEHEFICIARY</strong></h2>
                <p>There are no more or less important projects!
                    <br/>Donate to the fund's general accounts</p>
                <button className="btn btn-warning col-2 mx-auto button">DONATE NOW</button>
            </div>


            <footer>
                <div className="row mb-5">
                    <div className="col-4 mt-4">
                        <img src={logo1} alt="" className="w-75"/>
                    </div>
                    <div className="col-4 mt-5">
                        <h5 className="mb-5"><strong>CONTACT INFO:</strong></h5>
                        <p>ADDRESS: 02000, Ukraine, Kyiv, <br/>Oles Honchar st, 65 </p>
                        <p>PHONE: +38 073 310 40 70</p>
                        <a href="/" className="email-link">serhiy.prytula.kyiv@gmail.com</a>
                    </div>
                    <div className="col-4 mt-5 pt-1">
                        <h5 className="mb-5"><strong>NEWSLETTER:</strong></h5>
                        <p className="opacity-50">Join our fight for freedom</p>
                        <form>
                            <input type="text" placeholder="Email Address" />
                            <input type="submit" value="✉️"  />
                        </form>
                    </div>
                </div>
                
            </footer>
            <hr />
            <div className="after-footer">
                <small className="opacity-50">Copyright ©2023 All rights reserved | This ebsite is made by </small>
                <a href="https://github.com/morozovanya" className="opacity-50">Anna Morozova</a>
                </div>
        </div>
    );
}