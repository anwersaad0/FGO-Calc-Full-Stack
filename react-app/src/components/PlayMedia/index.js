import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOneMediaThunk } from "../../store/media";

function PlayMediaPage() {
    const dispatch = useDispatch();
    const {mediaId} = useParams();

    const history = useHistory();

    useEffect(() => {
        dispatch(getOneMediaThunk(mediaId));
    }, [mediaId]);

    // if media doesn't exist return null

    return (
        <main>

            <div>

                <div>
                    Media Title Here
                </div>

                <div>
                    Media contents here
                </div>

            </div>

        </main>
    )
}