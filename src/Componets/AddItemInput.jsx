import { useState } from "react";
import AutProvider from "../Componets/Rutas/AutProvider";
import { v4 as uuidv4 } from 'uuid';
import { insertNewItem } from "../Firebase/Firebase";





export default function AddItemInput() {

    const [currentUser, setCurrentUser] = useState({});
    const [state, setState] = useState(0);
    const [titleItem, setTitleItem] = useState('')
    const [priceItem, setPriceItem] = useState('')
    const [photoItem, setPhotoItem] = useState('')
    const [descriptionItem, setDescriptionItem] = useState('')
    const [Items, setItems] = useState([])


    /* Estas son las validaciones dl formulario */
    async function handleUserLoggedIn(user) {
        setCurrentUser(user);
        setState(2);
    }

    if (state === 0) {
        return (
            <AutProvider
                onUserLoggedIn={handleUserLoggedIn}
            >
            </AutProvider>
        );
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        addItem();
    }

    function addItem() {
        if (titleItem === '') {
            const newItem = {
                id: uuidv4(),
                nameItem: titleItem,
/*              description:description,
                price: price,
                photo: photo,
 */             uid: currentUser.uid,
            }
            const res = insertNewItem(newItem);
            newItem.docId = res.id;
            setTitleItem('');
/*          setDescriptionItem('');
            setPriceItem('');
            setPhotoItem('');
 */         setItems([...Items, newItem])
        }
    }

    function handleOnChange(e) {
        const value = e.target.value;
        if (e.target.name === 'nameItem') {
            setTitleItem(value);
        }
/*         if (e.target.name === 'nameItem') {
            setPriceItem(value);
        }
        if (e.target.name === 'nameItem') {
            setPhotoItem(value);
        }
        if (e.target.name === 'nameItem') {
            setDescriptionItem(value);
        }
 */    }

    return (
        <div>
            <div className="container position-relative">
                <div className=" " >
                    <form action="" onSubmit={handleOnSubmit}>
                        <div className="input-group mb-3">
                            <input
                                type="text" className="form-control"
                                placeholder="Escribe el nombre de tu platillo"
                                name="nameItem"
                                onChange={handleOnChange}
                            />
                            <div className="input-group-append">
                                <input
                                    className="btn btn-outline-secondary"
                                    type="submit" value="crear items"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

