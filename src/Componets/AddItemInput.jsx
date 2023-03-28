import AutProvider from "../Componets/Rutas/AutProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { insertNewItem, } from "../Firebase/Firebase";

export default function AddItemInput() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    const [state, setState] = useState(0);

    const [titleItem, setTitleitem] = useState("");
    const [items, setItems] = useState([]);



    /* Estas son las validaciones dl formulario */
    async function handleUserLoggedIn(user) {
        setCurrentUser(user);
        setState(2);
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
                titleItem: titleItem,
                uid: currentUser.uid,
            };
            const res = insertNewItem(newItem);
            newItem.docId = res.id;
            setTitleitem('');
            setItems([...items, newItem]);
        }
    }

    function handleOnChange(e) {
        const value = e.target.value;
        if (e.target.name === 'nameItem') {
            setTitleitem(value);
        }
    }

    return (

            <div className="container margin_60 " >


                        {/* input para agregar categoria */}
                        <form action="" onSubmit={handleOnSubmit}>

                            <div className="input-group mb-3" >
                                <input
                                    type="number"
                                    name="nameItem"
                                    className="form-control"
                                    placeholder="orden"
                                    onChange={handleOnChange}
                                />
                            </div>

                        </form>


            </div>


    );

}
