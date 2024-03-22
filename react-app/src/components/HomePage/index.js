import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";

function HomePage() {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <main className="site-homepage">

            <div className="container-homepage">

                <div className="container-caption">
                    We make comics, cartoons, and more cool stuff! Below are the latest things we have to show!
                </div>

                <div className="container-slides">

                </div>

            </div>

        </main>
    )
}

export default HomePage;