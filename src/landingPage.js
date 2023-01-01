import React from "react";
import "./LandingPage.css"

export default function landingPage() {
    return (
        <div className="landingPage">
            <nav className="d-flex justify-content-between">
                <a href="/">
                    <img src="https://prytulafoundation.org/assets/logo-black-eng-d0b4255bba4e5d888763183ce22ce1cd2ac0235789cc98cd4f62f68a2d1151ad.svg" alt="" className="w-25"/>
                </a>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">PROJECTS</a></li>
                    <li><a href="/">SUPPORTERS</a></li>
                    <li><button className="btn btn-warning">DONATE</button></li>
                </ul>
            </nav>
            <div className="row text-center">
                <h1>MILITARY AID FOR SOLDIERS IN UKRAINE</h1>
                <p className="opacity-50">The task of the military headquarters of the Serhiy Prytula Charitable Foundation is to save as many lives as possible of the defenders of Ukraine and help them liberate the occupier</p>
                <button className="btn btn-lg btn-warning col-2 mx-auto">DONATE NOW</button>
            </div>
            <div className="row">
                <div className="col-6">
                    <h2>WE BELIEVE IN DOING INCREDIBLE</h2>
                    <div className="opacity-50">Ukrainian Serhiy Prytula put aside his media career to help Ukraine in its war effort. Through his foundation, Prytula has generated nearly €83 million to help the Ukrainian army acquire military equipment.
                        <br /> + OVER 200 VOLUNTEERS
                        <br />We are volunteers, people who help our army to have the equipment that the state does not have the possibility to buy or does but very slowly</div>
                    <button className="btn btn-warning">DONATE</button>
                </div>
                <div className="col-6">
                    <img src="https://img.lemde.fr/2022/10/17/196/0/1500/750/1440/720/60/0/ecda243_233175-3293824.jpg" alt="about" className="w-75"/>
                </div>
            </div>

            <div className="row">
                <h2 className="text-center">ONGOING PROJECTS</h2>
                <p className="text-center">Join our fight for freedom, support our projects!</p>

                <div className="d-flex justify-content-around">
                    <div className="card col-4">
                        <img className="card-img-top" src="./media/opticalDevices.png" alt="#" />
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
                        <img className="card-img-top" src="./media/opticalDevices.png" alt="#" />
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
                        <img className="card-img-top" src="./media/opticalDevices.png" alt="#" />
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

                <a href="/">PAST PROJECTS→</a>
            </div>

            
            <div className="row text-center">
                <h2>BE A BEHEFICIARY</h2>
                <p>There are no more or less important projects!
                    Donate to the fund's general accounts</p>
                <button className="btn btn-warning col-2 mx-auto">DONATE NOW</button>
            </div>
            <footer>
                <div className="row">
                    <div className="col-4">
                        <img src="https://prytulafoundation.org/assets/logo-black-eng-d0b4255bba4e5d888763183ce22ce1cd2ac0235789cc98cd4f62f68a2d1151ad.svg" alt="" className="w-50"/>
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