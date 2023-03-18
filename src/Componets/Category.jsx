import { useState, useRef, useEffect } from "react";

export default function Category({ docId, title, OnDelete, onUpdata }) {


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

    function handlerDelete(){
        OnDelete(docId);
    }

    return (

        <div className=" mb-2" key={docId}>
            <div className="menu-item-section clearfix ">
                <div  >

                    {editCategoryName ? (
                        <>
                            <input
                                ref={namecategoryRef}
                                value={currentCategoryName}
                                onChange={handleChangeTitle}
                                onBlur={handlerBlurNameCategory}
                                className="position-relative"
                            />
                            <a href="#0"><i className=" icon-check-1"></i> Actualizar</a>
                        </>
                    ) : (
                        <>
                            {currentCategoryName}
                            <a href="#0"
                                onClick={handleEditNameCategory}>
                                <i className="icon-pencil ">
                                </i>Editar
                            </a>
                            <a href="#0"><i className="icon_minus_alt" onClick={handlerDelete}></i> Eliminar</a>
                        </>
                    )}
                </div>
            </div>
        </div>





    );
}
