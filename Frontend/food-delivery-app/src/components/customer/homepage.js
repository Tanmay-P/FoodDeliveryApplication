import React from "react";
import NavbarCustomer from "./navbar";
import './homepage.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import dosa from "./images/categories/dosa.png";
import biryani from "./images/categories/biryani.png";
import burger from "./images/categories/burger.png";
import chicken from "./images/categories/chicken.png";
import idli from "./images/categories/idli.png";
import paratha from "./images/categories/paratha.png";
import pizza from "./images/categories/pizza.png";
import rolls from "./images/categories/rolls.png";
import sandwich from "./images/categories/sandwich.png";
import thali from "./images/categories/thali.png";
import vada from "./images/categories/vada.png";

import belgiumwaffle from "./images/brands/belgiumwaffle.png";
import burgerking from "./images/brands/burgerking.png";
import freshmenu from "./images/brands/freshmenu.png";
import lapinoz from "./images/brands/lapinoz.png";
import mcdonalds from "./images/brands/mcdonalds.png";
import merwans from "./images/brands/merwans.png";
import natural from "./images/brands/natural.png";
import pizzahut from "./images/brands/pizzahut.png";
import subway from "./images/brands/subway.png";
import theobroma from "./images/brands/theobroma.png";

import Footer from "../dashboard/footer";
import Menu from "./menu";

function HomepageCustomer() {

    const user = JSON.parse(localStorage.getItem('user'));

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    }

    

    return (
        <div className="">

            <div className="container-fluid section1">
                <NavbarCustomer />
            </div>

            {/* <div className="carousel">
                <Carousel/>
            </div> */}

            {/*  <ModalReview /> */}

            <div className="categories pb-3 mb-3" style={{ position: "relative" }}>

                <div className="text-left ml-5 mt-3">
                    <p>Welcome <b style={{textDecoration:"underline"}}>{user.firstName} {user.lastName}</b> !</p>
                </div>

                <div className="heading text-left p-5">
                    <h1>Our Categories</h1>
                    <hr></hr>
                </div>

                <div className="" >
                    <Carousel responsive={responsive}>
                        <div className="category">
                            <img src={dosa} alt="dosa" />
                            <p>Dosa</p>
                        </div>

                        <div className="category">
                            <img src={idli} alt="idli" />
                            <p>Idli</p>
                        </div>

                        <div className="category">
                            <img src={pizza} alt="pizza" />
                            <p>Pizza</p>
                        </div>

                        <div className="category">
                            <img src={sandwich} alt="sandwich" />
                            <p>Sandwich</p>
                        </div>

                        <div className="category">
                            <img src={burger} alt="burger" />
                            <p>Burger</p>
                        </div>

                        <div className="category">
                            <img src={vada} alt="vada" />
                            <p>Vada</p>
                        </div>

                        <div className="category">
                            <img src={biryani} alt="biryani" />
                            <p>Biryani</p>
                        </div>

                        <div className="category">
                            <img src={thali} alt="thali" />
                            <p>Thali</p>
                        </div>

                        <div className="category">
                            <img src={paratha} alt="paratha" />
                            <p>Pratha</p>
                        </div>

                        <div className="category">
                            <img src={chicken} alt="chicken" />
                            <p>Chicken</p>
                        </div>

                        <div className="category">
                            <img src={rolls} alt="rolls" />
                            <p>Rolls</p>
                        </div>
                    </Carousel>
                </div>
            </div>

            <div className="brands pb-3 mb-3" style={{ position: "relative" }}>
                <div className="heading text-left p-5">
                    <h1>Top Brands for You</h1>
                    <hr></hr>
                </div>

                <Carousel responsive={responsive}>
                    <div className="brand">
                        <div className="brand-img">
                            <img src={mcdonalds} alt="mcdonalds" />
                        </div>
                        <p>McDonald's</p>
                    </div>

                    <div className="brand">
                        <div className="brand-img">
                            <img src={lapinoz} alt="lapinoz" />
                        </div>
                        <p>La Pino'z Pizza</p>
                    </div>

                    <div className="brand">
                        <div className="brand-img">
                            <img src={subway} alt="subway" />
                        </div>
                        <p>Subway</p>
                    </div>

                    <div className="brand">
                        <div className="brand-img">
                            <img src={burgerking} alt="burgerking" />
                        </div>
                        <p>Burger King</p>
                    </div>

                    <div className="brand">
                        <div className="brand-img">
                            <img src={pizzahut} alt="pizzahut" />
                        </div>
                        <p>Pizza Hut</p>
                    </div>

                    <div className="brand">
                        <div className="brand-img">
                            <img src={natural} alt="natural" />
                        </div>
                        <p>Natural Ice Cream</p>
                    </div>

                    <div className="brand">
                        <div className="brand-img">
                            <img src={freshmenu} alt="freshmenu" />
                        </div>
                        <p>FreshMenu</p>
                    </div>

                    <div className="brand">
                        <div className="brand-img">
                            <img src={theobroma} alt="theobroma" />
                        </div>
                        <p>Theobroma</p>
                    </div>

                    <div className="brand">
                        <div className="brand-img">
                            <img src={belgiumwaffle} alt="belgiumwaffle" />
                        </div>
                        <p>The Belgium Waffle Co.</p>
                    </div>

                    <div className="brand">
                        <div className="brand-img">
                            <img src={merwans} alt="merwans" />
                        </div>
                        <p>Merwans Cake Stop</p>
                    </div>
                </Carousel>
            </div>

            <div className="menu-items pb-3 mb-3">
                <div className="heading text-left pl-5 pr-5 pb-3 pt-5">
                    <h1>Best Food</h1>
                    <hr></hr>
                </div>

                <Menu/>
            </div>

            <Footer />

        </div>
    )
}
export default HomepageCustomer;