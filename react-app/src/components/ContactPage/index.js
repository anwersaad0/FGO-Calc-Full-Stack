import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";

function ContactPage() {
    const dispatch = useDispatch();

    return (
        <main>

            <div>

                <h1>Contact Us Here!</h1>

                <div>
                    <form className="contact-form">
                        <div>
                            
                        </div>

                        <div>

                        </div>

                        <div>

                        </div>

                        <button>Send</button>
                    </form>
                </div>

            </div>

        </main>
    )
}

export default ContactPage;