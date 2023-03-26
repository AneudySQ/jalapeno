import { useState, useRef, useEffect } from "react";

export default function Category({ docId, title, order, descrption, onDelete, onUpdata }) {


    const [currentCategoryTitle, setCurrentCategoryTitle] = useState(title);
    const [currentCategoryOrder, setCurrentCategoryOrder] = useState(order);
    const [currentCategoryDescrption, setCurrentCategoryDescrption] = useState(descrption);

    const [editCategoryTitle, setEditCategoryTitle] = useState(false);
    const [editCategoryOrder, setEditCategoryOrder] = useState(false);
    const [editCategoryDescrption, setEditCategoryDescrption] = useState(false);

    const namecategoryRef = useRef(null)

    useEffect(() => {
        if (namecategoryRef.current) {
            namecategoryRef.current.focus();
        }
    }, [editCategoryTitle])


    function handlerBlurTitle(e) {
        setEditCategoryTitle(false);
        onUpdata(docId, currentCategoryTitle);
    };

    function handlerBlurOrder(e) {
        setEditCategoryTitle(false);
        onUpdata(docId, currentCategoryOrder);
    };

    function handlerBlurDescrption(e) {
        setEditCategoryTitle(false);
        onUpdata(docId, currentCategoryDescrption);
    };

    function handleEditTitle() {
        setEditCategoryTitle(true);
    }

    function handleEditOrder() {
        setEditCategoryOrder(true);
    }

    function handleEditDescreption() {
        setEditCategoryDescrption(true);
    }

    function handleChangeTitle(e) {
        setCurrentCategoryTitle(e.target.value)
    }
    function handleChangeOrder(e) {
        setCurrentCategoryOrder(e.target.value)
    }
    function handleChangeDescrption(e) {
        setCurrentCategoryDescrption(e.target.value)
    }

    function handleDelete() {
        onDelete(docId);
    }

    return (

        <div className=" mb-2" key={docId} >
            <div className="menu-item-section clearfix ">
                <div >
                    {editCategoryTitle ? (
                        <>
                            <input
                                ref={namecategoryRef}
                                value={currentCategoryTitle}
                                onChange={handleChangeTitle}
                                onBlur={handlerBlurTitle}
                            />
                            <input
                                ref={namecategoryRef}
                                value={currentCategoryOrder}
                                onChange={handleChangeOrder}
                                onBlur={handlerBlurOrder}
                            />
                            <input
                                ref={namecategoryRef}
                                value={currentCategoryDescrption}
                                onChange={handleChangeDescrption}
                                onBlur={handlerBlurDescrption}
                            />
                            <button><i className=" icon-check-1"></i> Actualizar</button>

                        </>
                    ) : (
                        <div className="row container">

                            <div className="">
                                {currentCategoryOrder}
                                <button
                                    className="btn"
                                    onClick={handleEditOrder}>
                                    <i className="icon-pencil ">
                                    </i>
                                </button>

                            </div>

                            <div className=" col">
                                {currentCategoryTitle}
                                <button
                                    className="btn"
                                    onClick={handleEditTitle}>
                                    <i className="icon-pencil ">
                                    </i>
                                </button>
                            </div>

                            <div className="">
                                {currentCategoryDescrption}
                                <button
                                    className="btn"
                                    onClick={handleEditDescreption}>
                                    <i className="icon-pencil ">
                                    </i>
                                </button>

                            </div>

                            <div className="">
                                <button onClick={handleDelete} className=" btn-danger btn">
                                    <i className="icon_minus_alt" ></i> Eliminar</button>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}

