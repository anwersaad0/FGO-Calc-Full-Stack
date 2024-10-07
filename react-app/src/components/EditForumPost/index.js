import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPostThunk } from "../../store/forum";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function EditForumPost() {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);

    const [text, setText] = useState("");

    const [valErrs, setValErrs] = useState([]);
    const [hasSubbed, setHasSubbed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    if (!sessionUser) {
        return (
            <>

                Must be signed in to edit a forum post.

            </>
        )
    }

    return (
        <main>

            <div>

                <h1> Edit Forum Post </h1>

            </div>

        </main>
    )
}