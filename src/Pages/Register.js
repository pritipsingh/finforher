import React from "react";
import "../Components/Register.css";
import illustrationIntro from "../images/illustration-intro.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import logo from "../images/logo.png";
import logo3 from '../images/logo3.png'
import { useAuth0 } from "@auth0/auth0-react";
import finance from '../images/finance.jpeg'
const Register = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            <header>
                {/* ... (rest of the header section) ... */}
                <nav id="nav">
                    <div class="brand">
                        <div className="flex items-center gap-5 ml-[15rem] ">
                            <img src={logo3} className="w-[150px] h-[200px]" alt="manage landing page logo" />

                        </div>

                    </div>


                    <button className="cta cta--nav mr-[15rem] " onClick={() => loginWithRedirect()}>Get Started</button>
                    {/* <div class="overlay"></div> */}
                </nav>
            </header>

            <section classNameNameName="hero">
                <div className="container">
                    <div className="hero__wrapper">
                        <figure className="hero__image">
                            <img src={finance} alt="graph-chart-data" />
                        </figure>
                        <div className="hero__text">
                            <h1 className="title">
                                Bringing All <span className="text-[#D8AE5E]">Homemakers</span> together to <span className="text-[#D8AE5E]">INVEST </span>Better
                            </h1>
                            <p className="subtitle">
                                FinForHer empowers homemaker to make better financial choices by bringing aspects of all the government schemes, low to now risk investment plans
                            </p>
                            <button className="cta cta--header">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
            <section classNameName="features">
                {/* ... (rest of the features section) ... */}
                <div className="container">
                    <div className="features__wrapper">
                        <div className="features__text">
                            <h1>Empower Yourself</h1>

                        </div>
                        <div className="features__list">
                            <div className="features__item">
                                <div className="heading">
                                    <h3 className="feature-number">01</h3>
                                    <h3 className="benefit">Find all government skills</h3>
                                </div>
                                <p className="details">
                                    All available skills for women
                                </p>
                            </div>
                            <div className="features__item">
                                <div className="heading">
                                    <h3 className="feature-number">02</h3>
                                    <h3 className="benefit">Find mutual funds</h3>
                                </div>
                                <p className="details">
                                    Everything Investment
                                </p>
                            </div>
                            <div className="features__item">
                                <div className="heading">
                                    <h3 className="feature-number">03</h3>
                                    <h3 className="benefit">Find Retirement Calculator</h3>
                                </div>
                                <p className="details">
                                    Everything Investment
                                </p>
                            </div>
                            <div className="features__item">
                                <div className="heading">
                                    <h3 className="feature-number">03</h3>
                                    <h3 className="benefit">FianceGpt for women -coming soon</h3>
                                </div>
                                <p className="details">
                                    An AI to help all women access finance, mutual funds, etc
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                {/* ... (rest of the footer section) ... */}
                <div className="container">
                    <div className="wrapper">

                        <div className="footer-menu">


                        </div>
                        <div className="social flex justify-between">
                            <ul className="icons text-center">
                                <li className="">
                                    <a href="#">
                                        <img src={facebook} alt="facebook icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={youtube} alt="youtube icon" className="size" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={twitter} alt="twitter icon" className="size" />
                                    </a>
                                </li>
                            </ul>
                            <img src={logo3} alt="manage landing page logo" className="logo" />
                        </div>

                    </div>
                    <div className="attribution mb-2 text-xl">
                        Made with love by Priti & Kriyanshi for women of the country ❤️

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Register;