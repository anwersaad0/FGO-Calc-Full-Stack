const GET_MEDIA = "/GET_MEDIA";
const GET_MEDIA_LIST = "/GET_MEDIA_LIST";
const GET_MEDIA_BY_IP = "/GET_MEDIA_BY_IP";
const POST_MEDIA = "/POST_MEDIA";
const EDIT_MEDIA = "/EDIT_MEDIA";
const DELETE_MEDIA = "/DELETE_MEDIA";

const getOneMedia = (media) => {
    return {
        type: GET_MEDIA,
        media
    }
}

const getAllMedia = (allMedia) => {
    return {
        type: GET_MEDIA_LIST,
        allMedia
    }
}

const getMediaByIP = (media) => {
    return {
        type: GET_MEDIA_BY_IP,
        media
    }
}

const postMedia = (media) => {
    return {
        type: POST_MEDIA,
        media
    }
}

const editMedia = (media) => {
    return {
        type: EDIT_MEDIA,
        media
    }
}

const delMedia = (mediaId) => {
    return {
        type: DELETE_MEDIA,
        mediaId
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

export const getMediaByIpThunk = (ip) => async (dispatch) => {
    const res = await fetch(`/api/media/${ip}`);

    if (res.ok) {
        const { mediaByIP } = await res.json();
        dispatch(getMediaByIP(mediaByIP));
    } else {
        return ("Response not ok.");
    }
}

export const postMediaThunk = (media) => async (dispatch) => {
    const res = await fetch(`/api/media/new`, {
        method: 'POST',
        body: media
    });

    if (res.ok) {
        const media = await res.json();
        await dispatch(postMedia(media));
        return media;
    } else {
        return ("Response not ok.")
    }
}

export const editMediaThunk = (media) => async (dispatch) => {
    const res = await fetch(`api/media/edit/${media.id}`, {
        method: 'PUT',
        body: media
    });

    if (res.ok) {
        const media = await res.json();
        dispatch(editMedia(media));
        return media;
    } else {
        return ("Response not ok.")
    }
}

export const delMediaThunk = (mediaId) => async (dispatch) => {
    const res = await fetch(`/api/media/${mediaId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(delMedia(mediaId));
        return {'message': 'Successfully Deleted'}
    } else {
        return ("There was an issue while trying to process the request")
    }
}

//state and reducer

const initState = {}

function mediaReducer(state = initState, action) {
    let newState;
    switch(action.type) {
        case GET_MEDIA:
            newState = {...state};
            newState[action.media.id] = action.media;
            return newState;
        case GET_MEDIA_LIST:
            newState = {...state};
            action.allMedia.forEach(media => {
                newState[media.id] = media;
            });
            return newState;
        case GET_MEDIA_BY_IP:
            //newState = {...state};
            const ipState = action.media.reduce((ipMedia, med) => {
                ipMedia[med.id] = med;
                return ipMedia;
            }, {});
            return {...ipState};
        case POST_MEDIA:
            newState = {...state};
            newState[action.media.id] = action.media;
            return newState;
        case EDIT_MEDIA:
            newState = {...state};
            newState[action.media.id] = action.media;
            return newState;
        case DELETE_MEDIA:
            newState = {...state};
            delete newState[action.mediaId];
            return newState
        default:
            return state;
    }
}

export default mediaReducer;