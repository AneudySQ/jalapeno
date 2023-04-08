import AddItemInput from './AddItemInput';
import { useState, useRef, useEffect } from "react";

export default function Category({ docId, order, title, description, onDelete, onUpdata, handleUserLoggedIn, }) {
    const [currentOrder, setCurrenteOrder] = useState(order);
    const [currentTitle, setCurrentTitle] = useState(title);
    const [currentDescription, setCurrenteDescription] = useState(description);

    const [editOrder, setEditOrder] = useState(false);
    const [editTitle, setEditTitle] = useState(false);
    const [editDescription, setEditDescription] = useState(false);


    const orderRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        if (titleRef.current && orderRef && descriptionRef) {
            titleRef.current.focus()
            orderRef.current.focus()
            descriptionRef.current.focus()
        }
    }, [editTitle, editOrder, editDescription]);



    function handleEditTitle() {
        setEditTitle(true);
        setEditOrder(true);
        setEditDescription(true);
    }
    function handleChangeOrder(e) {
        setCurrenteOrder(e.target.value);
    }
    function handleChangeTitle(e) {
        setCurrentTitle(e.target.value);
    }
    function handleChangeDescription(e) {
        setCurrenteDescription(e.target.value);
    }
    function Actualizar(e) {
        setEditOrder(false)
        setEditTitle(false)
        setEditDescription(false)
        onUpdata(docId, currentOrder, currentTitle, currentDescription);
    }

    function handleDelete() {
        onDelete(docId)

    }



    return (
        <div key={docId} className="container">
            <div className="menu-item-section clearfix  ">
                {editTitle && editOrder && editDescription ? (
                    <>
                        <h4 className="m-2">
                            <input ref={orderRef}
                                value={currentOrder}
                                onChange={handleChangeOrder}
                            />
                        </h4>

                        <h4 className="m-2">
                            <input ref={titleRef}
                                value={currentTitle}
                                onChange={handleChangeTitle}
                            />
                        </h4>

                        <h4 className="m-2">
                            <input ref={descriptionRef}
                                value={currentDescription}
                                onChange={handleChangeDescription}
                            />
                        </h4>

                        <button
                            type="button" onClick={Actualizar}
                            className="btn btn btn-outline-primary btn-sm">
                            <i className="icon-spin3"></i>
                            Actualizar
                        </button>
                    </>
                ) : (
                    <div className="">
                        <h4 className="m-2">{currentOrder}</h4>
                        <h4 className="m-2">{currentTitle}</h4>
                        <h4 className="m-2">{currentDescription}</h4>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button
                                type="button"
                                className="btn btn-outline-warning btn-sm"
                                onClick={handleEditTitle}>
                                <i className="icon_pencil"> </i>
                                Editar
                            </button>
                            <button
                                type="button"
                                onClick={handleDelete}
                                className="btn btn-outline-danger btn-sm">
                                <i className="icon-minus"> </i>
                                Edliminar
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <AddItemInput
                docIdCategory={docId}
                handleUserLoggedIn={handleUserLoggedIn}
            />
        </div>
    );
}

