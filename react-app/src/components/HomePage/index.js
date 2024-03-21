import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";

function HomePage() {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <main className="site-homepage">
            <div className="site-title">

            </div>
        </main>
    )
}

export default HomePage;