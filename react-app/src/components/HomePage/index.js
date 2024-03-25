import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import './HomePage.css';
import { applyMiddleware } from "redux";

function HomePage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const timeRef = useRef(null);

    const [slide, setSlide] = useState(0);

    function resetTimeout() {
        if (timeRef.current) {
            clearTimeout(timeRef.current);
        }
    }

    const slides = ["#0088FE", "#00C49F", "#FFBB28"];

    const slideDelay = 5000;

    useEffect(() => {
        resetTimeout();
        timeRef.current = setTimeout(
            () => {
                setSlide((prevSlide) => prevSlide === slides.length - 1 ? 0 : prevSlide + 1)
            },
            slideDelay
        )
    }, [slide])

    return (
        <main className="site-homepage">

            <div className="container-homepage">

                {/* <div className="container-caption">
                    We make comics, cartoons, and more cool stuff! Below are the latest things we have to show!
                </div> */}

                <div className="container-slides">

                    <div className="slideshow">
                        <div className="slider" style={{ transform: `translate3d(${-slide * 100}%, 0, 0)` }}>
                            {slides.map((backgroundColor, index) => (
                                <div className="slide" key={index} style={{backgroundColor}}></div>
                            ))}
                        </div>
                    </div>

                    <div className="slideshow-marks">
                        {slides.map((_, idx) => (
                            <div key={idx} className={`mark ${slide === idx ? "active" : ""}`} 
                            onClick={() => {
                                setSlide(idx);
                            }}
                            />
                        ))}
                    </div>

                </div>

            </div>

        </main>
    )
}

export default HomePage;