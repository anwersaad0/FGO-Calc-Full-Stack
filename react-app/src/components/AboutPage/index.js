import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";


function AboutPage() {
    const dispatch = useDispatch()

    return (
        <main className="site-about">

            <div className="container-about">

                <div>
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