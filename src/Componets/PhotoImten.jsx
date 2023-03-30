
import AutProvider from "./Rutas/AutProvider";
import { useState, useRef } from "react"
import { getPhotoItem, setPhotoItem, updateUser } from "../Firebase/Firebase";

export default function PhotoImten() {
    const [currentUser, setCurrentUser] = useState({});
    const [state, setState] = useState(0);

    const [photoItem, setphotoItem] = useState(null)
    const fileRef = useRef();



    async function handleUserLoggedIn(user) {
        setCurrentUser(user);
        setState(2);

    }

    if (state !== 2) {
        return (
            <AutProvider
                onUserLoggedIn={handleUserLoggedIn}
            >
            </AutProvider>
        );
    }



    function handleOpenFilePicker() {
        if (fileRef.current) {
            fileRef.current.click()
        }
    }

    function handleChangeFile(e) {
        const files = e.target.files;
        const fileReader = new FileReader();

        if (fileReader && files && files.length > 0) {
            fileReader.readAsArrayBuffer(files[0]);
            fileReader.onload = async function () {
                const imageData = fileReader.result

                const res = await setPhotoItem(currentUser.uid, imageData)
                if (res) {
                    const tmpUser = { ...currentUser };
                    tmpUser.photoItem = res.metadata.fullPath;
                    await updateUser(tmpUser);
                    setCurrentUser({ ...tmpUser })
                    const url = await getPhotoItem(currentUser.photoItem);
                    setphotoItem(url)
                }
            }
        }
    }

    return (
        <div
            onClick={handleOpenFilePicker}
            className="menu-item-pic dropzone"
            style={{ cursor: "pointer" }}>
            <input
                ref={fileRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleChangeFile} />
            <div className="dz-default dz-message">
{/*                 <span>Seleciona <br />  una foto</span>
 */}                <img src={photoItem}
                    alt=""
                    width= {150} 
                    />
            </div>
        </div>

    )
}