import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";

function ContactPage() {
    const dispatch = useDispatch();

    return (
        <main>

            <div>

                <h1>Get In Touch!</h1>

                <div>
                    <h2>Already have an account? Contact us directly here!</h2>
                    <div>
                        Placeholder for admin messaging here
                    </div>
                </div>

                <div>
                    <h2>Business Inquiries</h2>
                    <form className="contact-form">
                        <div>
                            <input
                            type="text" 
                            placeholder="First Name"
                            />
                        </div>

                        <div>
                            <input 
                            type="text"
                            placeholder="Last Name"
                            />
                        </div>

                        <div>
                            <input 
                            type="text"
                            placeholder="Email"
                            />
                        </div>

                        <div>
                            <input 
                            type="number"
                            placeholder="Phone Number"
                            />
                        </div>

                        <button>Send</button>
                    </form>
                </div>

            </div>

        </main>
    )
}

export default ContactPage;