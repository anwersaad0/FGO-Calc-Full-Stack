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

            <form>

            </form>
        </main>
    )
}

export default UploadMediaPage;