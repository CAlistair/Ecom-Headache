import React from "react";
import Undraw from "../assets/undraw_monitor_iqpq.svg"

const Landing = () => {
    return(
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1><span className="blue"> UK's leading monitor distributors</span></h1>
                        <h2>Find your dream monitor with <span className="blue"> View</span></h2>
                        <a href="#features">
                            <button className="btn">Browse Monitors</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={Undraw} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing