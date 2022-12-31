import React from "react";
import "./LandingPage.css"

export default function landingPage() {
    return (
        <div className="landingPage">
            <nav className="d-flex justify-content-between">
                <a href="/">logo</a>
                <ul></ul>
            </nav>
            <div className="row text-center">
                <h1>MILITARY AID FOR SOLDIERS IN UKRAINE</h1>
                <p className="opacity-50">The task of the military headquarters of the Serhiy Prytula Charitable Foundation is to save as many lives as possible of the defenders of Ukraine and help them liberate the occupier</p>
                <button className="btn btn-lg btn-warning col-2 mx-auto">DONATE NOW</button>
            </div>
            <div className="row text-center">
                <div className="col-6">About text</div>
                <div className="col-6">About img</div>
            </div>
            <div className="row text-center">
                <h2>ONGOING PROJECTS</h2>
                <p>Join our fight for freedom, support our projects!</p>
                <div className="col-4">block</div>
                <div className="col-4">block</div>
                <div className="col-4">block</div>
                <a href="/">PAST PROJECTS→</a>
            </div>
            <div className="row text-center">
                <h2>BE A BEHEFICIARY</h2>
                <p>There are no more or less important projects!
                    Donate to the fund's general accounts</p>
                <button className="btn btn-warning col-2 mx-auto">DONATE NOW</button>
            </div>
            <footer>
                <div className="d-flex d-flex bd-highlight">
                    <div className="flex-fill bd-highlight">
                        LOGO
                    </div>
                    <div className="flex-fill bd-highlight">
                        <h4>CONTACT US:</h4>
                        <p>PHONE:</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}