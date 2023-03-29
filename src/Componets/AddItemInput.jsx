import AutProvider from "../Componets/Rutas/AutProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { insertNewItem, getItems } from "../Firebase/Firebase";

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

        <div className="container  " >

            {/* input para agregar categoria */}

            <form action=""
                onSubmit={handleOnSubmit}
                className="container">

                <div className="input-group mb-3">
                    <input
                        type="text" className="form-control"
                        placeholder="Escribe el nombre de tu platillo"
                        name="nameItem"
                        onChange={handleOnChange}
                    />
                    <div className="  input-group-append">
                        <input
                            className="btn btn-outline-secondary"
                            type="submit" value="crear"
                        />
                    </div>
                </div>

            </form>

            <div className=" container">
                {
                    items.map(item => (
                        <div className="" key={item.id}>
                            <h1>{item.titleItem}</h1>
                        </div>
                    ))
                }

            </div>


        </div>


    );

}