import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";

import './AboutPage.css';

function AboutPage() {
    const dispatch = useDispatch()

    return (
        <main className="site-about">

            <div className="container-about">

                <div className="container-about-text">
                    Who We Are

                    <div>
                        pic here
                    </div>

                    <div>
                        This is someplaceholder test haha lorem ipsum whatever haha
                    </div>

                </div>

            </div>

        </main>
    )
}

export default AboutPage;