import { useState, useRef, useEffect } from "react";

export default function Category({ docId, title, onDelete, onUpdata }) {


    const [currentCategoryName, setCurrentCategoryName] = useState(title);
    const [editCategoryName, setEditCategoryName] = useState(false);

    const namecategoryRef = useRef(null)

    useEffect(() => {
        if (namecategoryRef.current) {
            namecategoryRef.current.focus();
        }
    }, [editCategoryName])


    function handlerBlurNameCategory(e) {
        setEditCategoryName(false);
        onUpdata(docId, currentCategoryName);
    };

    function handleEditNameCategory() {
        setEditCategoryName(true);
    }
    function handleChangeTitle(e) {
        setCurrentCategoryName(e.target.value)
    }

    function handleDelete(){
        onDelete(docId);
    }

    return (

        <div className=" mb-2" key={docId} >
            <div className="menu-item-section clearfix ">
                <div >
                    {editCategoryName ? (
                        <>
                            <input
                                ref={namecategoryRef}
                                value={currentCategoryName}
                                onChange={handleChangeTitle}
                                onBlur={handlerBlurNameCategory}
                            />
                            <button><i className=" icon-check-1"></i> Actualizar</button>
                        </>
                    ) : (
                        <>
                            {currentCategoryName}
                                <button
                                onClick={handleEditNameCategory}>
                                <i className="icon-pencil ">
                                </i>Editar
                                </button>
                                <button><i className="icon_minus_alt" onClick={handleDelete}></i> Eliminar</button>
                        </>
                    )}
                </div>
            </div>
        </div>





    );
}
