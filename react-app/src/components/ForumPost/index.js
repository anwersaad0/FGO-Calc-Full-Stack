import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onePostThunk } from "../../store/forum";

function ForumPost() {
    const dispatch = useDispatch();
    const { postId } = useParams();

    const post = useSelector((state) => state.forum[postId]);
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(onePostThunk(postId));
    }, [postId, dispatch]);

    if (!post) return null;

    return (
        <main className="forum-post-root">

            <div className="forum-post-container">

                <div>



                </div>

                <div>



                </div>

            </div>

        </main>
    )
}

export default ForumPost;