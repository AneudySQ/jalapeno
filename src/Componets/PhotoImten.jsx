import { getPhotoItem, setPhotoItem, updateUser } from "../Firebase/Firebase";
import { useState, useRef } from "react";
import AutProvider from "./Rutas/AutProvider";

export default function PhotoImten({ ItemId }) {
    const [currentUser, setCurrentUser] = useState({});
    const [state, setState] = useState(0);
    const [pictureItem, setpictureItem] = useState(null);
    const fileRef = useRef(null);


    /* Funcion para subior fotos */


    /* Estas son las validaciones dl formulario */
    async function handleUserLoggedIn(user) {
        setCurrentUser(user);
        const url = await getPhotoItem(user.photoItem,);
        setpictureItem(url)
        setState(2);
    }

    function handleOpenFilePicker() {
        if (fileRef.current)
            fileRef.current.click();
    }
    function handleChengeFile(e) {
        const files = e.target.files;
        const fileReader = new FileReader();

        if (fileReader && files && files.length > 0) {
            fileReader.readAsArrayBuffer(files[0]);
            fileReader.onload = async function () {
                const imageData = fileReader.result;

                const res = await setPhotoItem(currentUser.uid, imageData, ItemId);
                if (res) {
                    const tmpUser = { ...currentUser };
                    tmpUser.photoItem = res.metadata.fullPath;
                    await updateUser(tmpUser)
                    setCurrentUser({ ...tmpUser })
                    const url = await getPhotoItem(currentUser.photoItem, ItemId);
                    setpictureItem(url)
                }
            };
        }
    }

    if (state !== 2) {
        return (
            <AutProvider
                onUserLoggedIn={handleUserLoggedIn}
            >
            </AutProvider>
        );
    }

    return (
        <div className="col-md-3">
            <div className="menu-item-pic dropzone">
                <img
                    src={pictureItem}
                    alt="" width={100} />
            </div>
            <button
                onClick={handleOpenFilePicker}
                className="btn">
                Subir Imagen
            </button>
            <input
                name="files"
                type="file"
                ref={fileRef}
                style={{ display: "none" }}
                onChange={handleChengeFile} />
        </div>
    )
}
