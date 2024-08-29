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

                <div className="forum-post-detail-container">

                    <div>

                        {post?.title}

                    </div>

                    <div>

                        {post?.text}

                    </div>

                </div>

                <div className="forum-post-reply-container">

                    <div>

                        {sessionUser ? "Post a reply" : "Must be signed in to reply"}

                    </div>

                </div>

            </div>

        </main>
    )
}

export default ForumPost;