const GET_ALL_FORUM_POSTS = "/GET_ALL_FORUM_POSTS";
const GET_FORUM_POST = "/GET_FORUM_POST";
const CREATE_FORUM_POST = "/CREATE_FORUM_POST";
const EDIT_FORUM_POST = "/EDIT_FORUM_POST";
const DELETE_FORUM_POST = "/DELETE_FORUM_POST";

const ADD_DEL_POST_LIKE = "/ADD_DEL_POST_LIKE";

const getAllPosts = (posts) => {
    return {
        type: GET_ALL_FORUM_POSTS,
        posts
    }
}

const getOnePost = (post) => {
    return {
        type: GET_FORUM_POST,
        post
    }
}

const createPost = (post) => {
    return {
        type: CREATE_FORUM_POST,
        post
    }
}

const editPost = (post) => {
    return {
        type: EDIT_FORUM_POST,
        post
    }
}

const deletePost = (post) => {
    return {
        type: DELETE_FORUM_POST,
        post
    }
}

const addDelPostLike = (post) => {
    return {
        type: ADD_DEL_POST_LIKE,
        post
    }
}

//thunks

export const allPostsThunk = () => async (dispatch) => {
    const res = await fetch("/api/forum");

    if (res.ok) {
        const { posts } = await res.json();
        await dispatch(getAllPosts(posts));
    } else {
        return ("Response not ok.");
    }
}

export const onePostThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/forum/${id}`);

    if (res.ok) {
        const post = await res.json();
        await dispatch(getOnePost(post));
    }
}

export const createPostThunk = (post) => async (dispatch) => {
    const res = await fetch('/api/forum/new', {
        method: 'POST',
        body: post
    });

    if (res.ok) {
        const post = await res.json();
        await dispatch(createPost(post));
        return post;
    }
}

export const editPostThunk = (post, postId) => async (dispatch) => {
    console.log("the post", post);

    const res = await fetch(`/api/forum/edit/${postId}`, {
        method: 'PUT',
        body: post
    });

    if (res.ok) {
        const post = await res.json();
        await dispatch(editPost(post));
        return post;
    }
}

export const deletePostThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/forum/delete/${id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        await dispatch(deletePost(id));
        return {'message': "Successfully Deleted"}
    } else {
        return ("There was an issue trying to process the request")
    }
}

export const addDelPostLikeThunk = (userId, postId/*, reaction*/) => async (dispatch) => {
    const res = await fetch(`/api/forum/${postId}/likes/${userId}`, {
        method: 'POST',
        body: userId, postId//, reaction
    });

    if (res.ok) {
        const postLike = await res.json();
        dispatch(addDelPostLike(postLike));
        return postLike;
    }
}

//reducer

const initState = {}

function forumPostReducer(state = initState, action) {
    let newState;
    switch(action.type) {
        case GET_ALL_FORUM_POSTS:
            newState = {...state};
            action.posts.forEach(post => {
                newState[post.id] = post;
            });
            return newState;
        case GET_FORUM_POST:
            newState = {...state};
            newState[action.post.id] = action.post;
            return newState;
        case CREATE_FORUM_POST:
            newState = {...state};
            newState[action.post.id] = action.post;
            return newState;
        case EDIT_FORUM_POST:
            newState = {...state};
            newState[action.post.id] = action.post;
            return newState;
        case DELETE_FORUM_POST:
            newState = {...state};
            delete newState[action.id];
            return newState;
        case ADD_DEL_POST_LIKE:
            newState = {...state};
            newState[action.post.id] = action.post;
            return newState;
        default:
            return state;
    }
}

export default forumPostReducer;
