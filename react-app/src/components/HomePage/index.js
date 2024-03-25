import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import './HomePage.css';
import { applyMiddleware } from "redux";

function HomePage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [style, setStyle] = useState("block");

    let slideIndex = 0;
    // changeSlide();

    // function changeSlide() {
    //     let slides = document.getElementsByClassName("homeSlides");

    //     for (let slide of slides) {
    //         slide.setStyle("none");
    //     }

    //     slideIndex++;
    //     if (slideIndex > slides.length) slideIndex = 1;
    //     slides[slideIndex-1].setStyle();
    //     setTimeout(changeSlide(), 5000);
    // }

    return (
        <main className="site-homepage">

            <div className="container-homepage">

                {/* <div className="container-caption">
                    We make comics, cartoons, and more cool stuff! Below are the latest things we have to show!
                </div> */}

                <div className="container-slides">

                    <div className="homeSlides fade">
                        <div className="slide-numText-1">1 / 5</div>

                        <div className="square1"></div>

                        <img alt="placeholder1"></img>
                    </div>

                    <div className="homeSlides fade">
                        <div className="slide-numText-3">2 / 5</div>

                        <div className="square2"></div>

                        <img alt="placeholder2"></img>
                    </div>

                    <div className="homeSlides fade">
                        <div className="slide-numText-3">3 / 5</div>

                        <div className="square3"></div>

                        <img alt="placeholder3"></img>
                    </div>

                    <div className="homeSlides fade">
                        <div className="slide-numText-3">4 / 5</div>

                        <div className="square4"></div>

                        <img alt="placeholder3"></img>
                    </div>

                    <div className="homeSlides fade">
                        <div className="slide-numText-3">5 / 5</div>

                        <div className="square5"></div>

                        <img alt="placeholder3"></img>
                    </div>

                    <a className="slide-prev"></a>
                    <a className="slide-next"></a>

                </div>

            </div>

        </main>
    )
}

export default HomePage;