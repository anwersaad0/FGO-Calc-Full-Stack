import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onePostThunk, deletePostThunk } from "../../store/forum";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

function DeleteForumPost() {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);
    const forumPost = useSelector(state => state.forum[postId]);

    useEffect(() => {
        dispatch(onePostThunk(postId));
    }, [dispatch]);

    const handleDelete = async (e) => {
        e.preventDefault();

        await dispatch(deletePostThunk(postId));

        history.push('/forum/posts');
    }

    if (!sessionUser) {
        return (
            <>

                Must be signed in to delete a forum post.

            </>
        )
    }

    if (sessionUser?.id !== forumPost?.userId) {
        return (
            <>

                You cannot delete posts from other users.

            </>
        )
    }

    return (

        <main>

            <div>

                <h1> Delete this post? </h1>

            </div>

            <div>

                <h2> Post Details </h2>

                <div> Title: {forumPost?.title} </div>

                <div> Contents: {forumPost?.text} </div>

            </div>

            <div>

                <div>

                    <button onClick={(e) => handleDelete(e)} className="confirm-delete-forum-post"> Yes, delete this post. </button>

                </div>

                <div>

                    <NavLink exact to={`/forum/posts/${postId}`} className="decline-delete-forum-post"> No, keep the post. </NavLink>

                </div>

            </div>

        </main>

    )
}

export default DeleteForumPost;