import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function UploadForumPost() {
    const dispatch = useDispatch();
    const history = useHistory();

    //

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const [valErrs, setValErrs] = useState([]);
    const [hasSubbed, setHasSubbed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setHasSubbed(true);
    }

    return (
        <main>

            <div>

                <h1> Upload Forum Post </h1>

            </div>

            <form onSubmit={"n"}>



            </form>

        </main>
    )
}