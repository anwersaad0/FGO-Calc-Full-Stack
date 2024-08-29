import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { allPostsThunk } from "../../store/forum";

function ForumPage() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => Object.values(state.forum));

    const [query, setQuery] = useState("");

    useEffect(() => {
        dispatch(allPostsThunk());
    }, [dispatch]);

    if (!posts) return null;

    return (
        <main className="forum-page-root">

            <div>

                <div className="forum-posts-container">

                    {posts?.toReversed().filter(post => {
                        if (query === '') {
                            return post;
                        } else if (post.title.toLowerCase().includes(query.toLocaleLowerCase())) {
                            return post;
                        }
                    }).map(({id, title}) => (
                        <NavLink className='post-mini-details' exact to={`/forum/posts/${id}`}>

                            <div>

                                {title}

                            </div>

                        </NavLink>
                    ))}

                </div>

            </div>

        </main>
    )
}

export default ForumPage;