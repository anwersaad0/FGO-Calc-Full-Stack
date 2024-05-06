import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function UploadMediaPage() {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [ip, setIp] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        
    }

    if (!sessionUser || sessionUser?.clearance != 'Admin') {
        return null;
    }

    return (
        <main>
            <h1>
                Post New Media
            </h1>

            <form onSubmit={(e) => handleSubmit(e)} className="new-media-details">
                <div className="create-detail">
                    <div className="label-div"><label>Media Title:</label></div>
                    <input
                        type="text"
                        name="name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        required={true}
                    >
                    </input>
                </div>

                <div>

                </div>

                <div>

                </div>

                <div className="create-detail">
                    <button className="confirm-create-media" type="submit">Upload Media</button>
                </div>
            </form>
        </main>
    )
}

export default UploadMediaPage;