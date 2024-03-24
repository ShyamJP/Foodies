import React from "react";
import Navbar from "../Navbar/NavbarResp";
import "./Home.css"

import Footer from "../../UI/Footer/Footer";
const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <div>
                    <div className="front1">
                        <div className="div1"><img src="/Photos/pizzaIcon.png" alt="" /></div>
                        <div className="div2">
                            <h1 data-aos="fade-up" data-aos-offset="0">Welcome to <span >FOODIES</span><span ></span>!</h1>
                            {/* <h5>Eating Well Made Easy – Order, Relax, Enjoy.</h5> */}
                            {/* <h3>Crafting Memories, One Dish at a Time. Order Now</h3> */}
                            <h5>Flavors that Speak for Themselves, Now at Your Fingertips.</h5>
                            {/* <h5>Elevate Your Tastebuds with Every Order.s</h5> */}
                        </div>
                    </div>
                </div>


                {/* offer */}
                <div className="offers">
                    <h1 className="heading">Best Offers And Deals</h1>
                    <div className="offer-card">
                        <span data-aos="fade-up"><img src="/photos/offer1.jpg" alt="" /></span>
                        <span data-aos="fade-up"><img src="/photos/offer3.jpg" alt="" /></span>

                    </div>
                    {/* offer */}
                    <div className="offer-card">
                        <span data-aos="fade-left"><img src="/photos/offer2.jpg" alt="" /></span>
                        <span data-aos="fade-right"><img src="/photos/offer1.jpg" alt="" /></span>
                    </div>
                    <div className="offer-card">
                        <span data-aos="fade-left"><img src="/photos/offer3.jpg" alt="" /></span>
                        <span data-aos="fade-right"><img src="/photos/offer4.jpg" alt="" /></span>
                    </div>
                    <div className="offer-card">
                        <span data-aos="fade-left"><img src="/photos/offer5.jpg" alt="" /></span>
                        <span data-aos="fade-right"><img src="/photos/offer6.jpg" alt="" /></span>
                    </div>
                </div>



                {/* services */}
                <h1 className="heading">Services</h1>
                <div className="services" data-aos="fade-up">
                    <div className="card">
                        <h1><i class="fa-solid fa-utensils"></i></h1>
                        <h2>Quality Food</h2>
                        <p></p>
                    </div>
                    <div className="card">
                        <h1><i class="fa-solid fa-clock-rotate-left"></i></h1>
                        <h2>24 / 7 Service</h2>
                        <p> </p>
                    </div>
                    <div className="card">
                        <h1><i class="fa-solid fa-truck"></i></h1>
                        <h2>Online Order</h2>
                        <p> </p>
                    </div>
                </div>

                {/* footer */}
                <Footer />
            </main>
        </>
    )
}

export default Home;