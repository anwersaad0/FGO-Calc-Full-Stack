const GET_ALL_FORUM_POSTS = "/GET_ALL_FORUM_POSTS";
const GET_FORUM_POST = "/GET_FORUM_POST";
const CREATE_FORUM_POST = "/CREATE_FORUM_POST";
const EDIT_FORUM_POST = "/EDIT_FORUM_POST";
const DELETE_FORUM_POST = "/DELETE_FORUM_POST";

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

//thunks

export const allPostsThunk = () => async (dispatch) => {
    const res = await fetch("/api/posts");

    if (res.ok) {
        const { posts } = await res.json();
        await dispatch(getAllPosts(posts));
    } else {
        return ("Response not ok.");
    }
}

export const onePostThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/posts/${id}`);

    if (res.ok) {
        const post = await res.json();
        await dispatch(getOnePost(post));
    }
}

export const createPostThunk = (post) => async (dispatch) => {
    const res = await fetch('/api/posts/new', {
        method: 'POST',
        body: post
    });

    if (res.ok) {
        const post = await res.json();
        await dispatch(createPost(post));
        return post;
    }
}

export const editPostThunk = (post) => async (dispatch) => {
    const res = await fetch(`/api/posts/edit/${post.id}`, {
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
    const res = await fetch(`/api/posts/delete/${id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        await dispatch(deletePost(id));
        return {'message': "Successfully Deleted"}
    } else {
        return ("There was an issue trying to process the request")
    }
}

//reducer

const initState = {}

function forumPostReducer(state = initState, action) {
    let newState;
    switch(action.type) {
        default:
            return state;
    }
}

export default forumPostReducer;