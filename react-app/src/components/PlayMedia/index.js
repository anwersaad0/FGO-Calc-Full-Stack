import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOneMediaThunk } from "../../store/media";

function PlayMediaPage() {
    const dispatch = useDispatch();
    const {mediaId} = useParams();

    const media = useSelector((state) => state.media[mediaId]);
    const sessionUser = useSelector(state => state.session.user);

    const history = useHistory();

    useEffect(() => {
        dispatch(getOneMediaThunk(mediaId));
    }, [mediaId, dispatch]);

    console.log('media detail', media?.type)

    if (!media) return null;

    return (
        <main>

            <div>

                <div>

                    Media Title Here
                    <div>{media.name}</div>

                    <div></div>

                </div>

                <div>
                    Media contents here
                    <div>{(media?.type === 'video') ? (<video width={640} height={480}> <source src={media?.url} type="video/mp4" /> </video>) : ""}</div>
                </div>

            </div>

        </main>
    )
}

export default PlayMediaPage;