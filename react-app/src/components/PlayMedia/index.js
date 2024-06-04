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
    }, [mediaId, media?.url, dispatch]);

    console.log('media detail', media?.type)
    console.log('media url', media?.url);

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
                    {/* <iframe src={media?.url}>
                    {(media?.type === 'video') ? (<video controls> <source src={media?.url} type="video/mp4" /> </video>) : ""}
                    </iframe> */}

                    {
                        (media?.type === 'video') ? (
                            <iframe src={media?.url}>
                                <video controls>
                                    {/* <source src={media?.url} type="video/mp4" /> */}
                                    <meta property="og:video:url" content={media?.url} />
                                </video>
                            </iframe>
                        ) : (
                            <img src={media?.url} alt="Readable media is supposed to be here" />
                        )
                    }

                </div>

            </div>

        </main>
    )
}

export default PlayMediaPage;