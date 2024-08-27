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
        if (valErrs.length) return alert('Your post has errors, submit failed');

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

    if (!sessionUser) {
        return (
            <>

                Must be signed in to create a forum post.

            </>
        )
    }

    return (
        <main>

            <div>

                <h1> Upload Forum Post </h1>

            </div>

            {hasSubbed && valErrs.length > 0 && (
                <div className="errors-text">
                    <ul>
                        {valErrs?.map(err => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
                </div>
            )}

            <form onSubmit={(e) => handleSubmit(e)} className="new-post-details">

                <div className="create-detail">
                    <div className="label-div"><label className="title-input-label">Post Title:</label></div>
                    <input
                        type="text"
                        name="title"
                        size="40"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        required={true}
                    ></input>
                </div>

                <div className="create-detail">
                    <div className="label-div"><label className="text-input-label">Post Text:</label></div>
                    <textarea
                        className="text-input"
                        type="text"
                        name="text"
                        cols="40"
                        rows="8"
                        onChange={e => setText(e.target.value)}
                        value={text}
                        required={true}
                    >
                    </textarea>
                </div>

                <div className="create-detail">
                    <button className="confirm-create-post" type="submit">Upload Post</button>
                </div>

            </form>

        </main>
    )
}