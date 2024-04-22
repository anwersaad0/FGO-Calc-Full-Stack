const GET_MEDIA = "/GET_MEDIA";
const GET_MEDIA_LIST = "/GET_MEDIA_LIST";
const GET_MEDIA_BY_IP = "/GET_MEDIA_BY_IP";
const POST_MEDIA = "/POST_MEDIA";
const EDIT_MEDIA = "/EDIT_MEDIA";
const DELETE_MEDIA = "/DELETE_MEDIA";

const getOneMedia = (media) => {
    return {
        type: GET_MEDIA,
        payload: media
    }
}

const getAllMedia = (allMedia) => {
    return {
        type: GET_MEDIA_LIST,
        payload: allMedia
    }
}

//thunk methods here

export const getOneMediaThunk = (mediaId) => async (dispatch) => {
    const res = await fetch(`/api/media/${mediaId}`);

    if (res.ok) {
        const media = await res.json();
        dispatch(getOneMedia(media));
        return media;
    } else {
        return ("Response not ok.");
    }
}

export const getAllMediaThunk = () => async (dispatch) => {
    const res = await fetch("/api/media");

    if (res.ok) {
        const { media } = await res.json();
        dispatch(getAllMedia(media));
    } else {
        return ("Response not ok.");
    }
}

//state and reducer

const initState = {}

function mediaReducer(state = initState, action) {
    let newState;
    switch(action.type) {
        case GET_MEDIA:
            newState = {...state};
            newState[action.media.id] = action.item;
            return newState;
        case GET_MEDIA_LIST:
            newState = {...state};
            action.allMedia.forEach(media => {
                newState[media.id] = media;
            });
            return newState;
        default:
            return state;
    }
}

export default mediaReducer;