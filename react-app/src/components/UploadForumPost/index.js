import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostThunk } from "../../store/forum";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function UploadForumPost() {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const [valErrs, setValErrs] = useState([]);
    const [hasSubbed, setHasSubbed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setHasSubbed(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('text', text);

        const newPost = await dispatch(createPostThunk(formData));

        setTitle('');
        setText('');

        setValErrs([]);
        setHasSubbed(false);

        history.push(`/forum/posts/${newPost.id}`);
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