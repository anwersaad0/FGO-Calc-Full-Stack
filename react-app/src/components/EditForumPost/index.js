import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPostThunk, onePostThunk } from "../../store/forum";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function EditForumPost() {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);
    const forumPost = useSelector(state => state.forum[postId]);

    useEffect(() => {
        dispatch(onePostThunk(postId));
    }, [dispatch]);

    const [text, setText] = useState("");

    const [valErrs, setValErrs] = useState([]);
    const [hasSubbed, setHasSubbed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setHasSubbed(true);
        if (valErrs.length) return alert('Your edits have errors, submit changes failed')

        const formData = new FormData();
        formData.append('text', text);

        const editedPost = await dispatch(editPostThunk(formData, postId))
        setText('');

        setValErrs([]);
        setHasSubbed(false);

        history.push(`/forum/posts/${postId}`);
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

                <h1> Edit Forum Post: {forumPost?.title} </h1>

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

            <form onSubmit={(e) => handleSubmit(e)} className="edit-post-details" >

                <div className="edit-detail">
                    <div></div>
                    <textarea
                        className="text-input"
                        type="text"
                        name="text"
                        rows="8"
                        cols="40"
                        onChange={e => setText(e.target.value)}
                        value={text}
                        required={true}
                    ></textarea>
                </div>

                <div className="edit-detail">
                    <button className="confirm-edit-post" type="submit">Submit Edits</button>
                </div>

            </form>

        </main>
    )
}

export default EditForumPost;
