import AutProvider from "../Componets/Rutas/AutProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { insertNewItem, getItems, updateItem, deleteItem } from "../Firebase/Firebase";
import Item from "../Componets/Item"

export default function AddItemInput() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    const [state, setState] = useState(0);

    const [titleItem, setTitleItem] = useState("");
    const [priceItem, setPriceItem] = useState("");
    const [descriptionItem, setDescriptionItem] = useState("");
    const [photoItem, setPhotoItem] = useState("");
    const [items, setItems] = useState([]);



    /* Estas son las validaciones dl formulario */
    async function handleUserLoggedIn(user) {
        setCurrentUser(user);
        setState(2);
        const resItems = await getItems(user.uid);
        setItems([...resItems]);

    }
    function handleonUserNotRegistered(user) {
        navigate('/login')

    }

    function handleonUserNotloggedIn() {
        navigate('/login');
    }

    if (state === 0) {
        return (
            <AutProvider
                onUserLoggedIn={handleUserLoggedIn}
                onUserNotloggedIn={handleonUserNotloggedIn}
                onUserNotRegistered={handleonUserNotRegistered}
            >
            </AutProvider>
        );
    }


    /* Aqui comienzan las funciones para el formulario */


    function handleOnSubmit(e) {
        e.preventDefault();
        addItems();
    }

    function addItems() {
        if (titleItem !== '') {
            const newItem = {
                id: uuidv4(),
                uid: currentUser.uid,
                titleItem: titleItem,
                priceItem: priceItem,
                photoItem: photoItem,
                descriptionItem: descriptionItem,
            };
            const res = insertNewItem(newItem);
            newItem.docId = res.id;
            setTitleItem('');
            setPriceItem('');
            setDescriptionItem('');
            setPhotoItem('');
            setItems([...items, newItem]);
        }
    }

    function handleOnChange(e) {
        const value = e.target.value;
        if (e.target.name === 'titleItem') {
            setTitleItem(value);
        }
        if (e.target.name === 'priceItem') {
            setPriceItem(value);
        }
        if (e.target.name === 'descriptionItem') {
            setDescriptionItem(value);
        }
        if (e.target.name === 'photoItem') {
            setPhotoItem(value);
        }
    }
   async function handleDeleteItem(docId) {
        await deleteItem(docId);
        const tmp = items.filter(item => item.docId !== docId)
        setItems([...tmp])
    }



    async function handleUpdateItem(docId, titleItem, priceItem, descriptionItem) {
        const item = items.find(item => item.docId ===docId)
        item.titleItem = titleItem;
        item.priceItem = priceItem;
        item.descriptionItem = descriptionItem;
        await updateItem(docId, item);
    }

    return (

        <div className="container  " >

            {/* input para agregar categoria */}

            <form action=""
                onSubmit={handleOnSubmit}
                className="container">

                <div className="input-group mb-3">
                    <input
                        type="text" className="form-control"
                        placeholder="Escribe el nombre de tu platillo"
                        name="titleItem"
                        onChange={handleOnChange}
                    />

{/*                     <input
                        type="text" className="form-control"
                        placeholder="Escribe el nombre de tu platillo"
                        name="priceItem"
                        onChange={handleOnChange}
                    />
                    <input
                        type="text" className="form-control"
                        placeholder="Escribe el nombre de tu platillo"
                        name="descriptionItem"
                        onChange={handleOnChange}
                    />
                    <input
                        type="text" className="form-control"
                        placeholder="Escribe el nombre de tu platillo"
                        name="photoItem"
                        onChange={handleOnChange}
                    />
                    
 */}                    <div className="  input-group-append">
                        <input
                            className="btn btn-outline-secondary"
                            type="submit" value="crear"
                        />
                    </div>
                </div>

            </form>

            <div className=" container">
                {items.map(item => (
                    <Item
                        key={item.docId}
                        docId={item.docId}
                        titleItem={item.titleItem}
                        priceItem={item.priceItem}
                        descriptionItem={item.descriptionItem}
                        photoItem={item.photoItem}
                        onUpdate={handleUpdateItem}
                        onDelete={handleDeleteItem}
                        
                    />
                ))}

            </div>


        </div>


    );

}
