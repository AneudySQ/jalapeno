import { useState, useRef, useEffect } from "react"
import PhotoImten from "./PhotoImten"
export default function Item({ ItemId, docIdCategory, docId, titleItem, priceItem, descriptionItem, photoItem, onDelete, onUpdate }) {
    const [currentNameItem, setCurrentNameItem] = useState(titleItem)
    const [currentpriceItem, setCurrentPriceItem] = useState(priceItem)
    const [currentdescriptionItem, setCurrentDescriptionItem] = useState(descriptionItem)
    //const [currentphotoItem, setCurrentPhotoItem] = useState(photoItem)

    const [editnameItem, setEditNameItem] = useState(false)
    const [editpriceItem, setEditPriceItem] = useState(false)
    const [editdescriptionItem, setEditDescriptionItem] = useState(false)
    //const [editphotoItem, setEditPhotoItem] = useState(false)

    // const [imgItem, setImgItem] = useState(null)


    const NameItemRef = useRef(null);
    const PriceItemRef = useRef(null);
    const DescriptionItemRef = useRef(null);

    useEffect(() => {
        if (NameItemRef.current) {
            NameItemRef.current.focus();
        }
    }, [editnameItem]);

    useEffect(() => {
        if (PriceItemRef.current) {
            PriceItemRef.current.focus();
        }
    }, [editpriceItem]);

    useEffect(() => {
        if (DescriptionItemRef.current) {
            DescriptionItemRef.current.focus();
        }
    }, [editdescriptionItem]);


    function handleEditNameItem() {
        setEditNameItem(true);
    }
    function handleEditPriceItem() {
        setEditPriceItem(true);
    }
    function handleEditDescriptionItem() {
        setEditDescriptionItem(true);
    }

    function handleChangeNameItem(e) {
        setCurrentNameItem(e.target.value)
    }

    function handleChangePriceItem(e) {
        setCurrentPriceItem(e.target.value)
    }

    function handleChangeDescriptionItem(e) {
        setCurrentDescriptionItem(e.target.value)
    }

    function handlerBlurNameitem(e) {
        setEditNameItem(false)
        onUpdate(docId,
            currentNameItem,
            currentdescriptionItem,
            currentpriceItem);
    }
    function handlerBlurPriceitem(e) {
        setEditPriceItem(false)
        onUpdate(docId,
            currentpriceItem,
            currentNameItem,
            currentdescriptionItem);
    }
    function handlerBlurDescriptionitem(e) {
        setEditDescriptionItem(false)
        onUpdate(docId,
            currentdescriptionItem,
            currentNameItem,
            currentpriceItem);
    }

    function handleDeleteItem() {
        onDelete(docId);

    }


    return (
        <div key={docId}>
            <div className="menu-item-section clearfix">
                <h4>{currentNameItem}</h4>
                <div>
                    <button
                        onClick={handleDeleteItem}
                        className="btn">
                        <i className="icon-cancel-5">Eliminar</i>
                    </button>
                </div>
            </div>

            <div className="strip_menu_items">
                <div className="row">
                    <div className="col-md-3">
                        <PhotoImten
                            ItemId={ItemId}
                        />
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-group">
                                    {editnameItem ? (
                                        <>
                                            <label>Title
                                                <button onClick={handleEditNameItem}
                                                    className="btn">
                                                    <i className="icon-check-1"></i>
                                                </button>
                                            </label>
                                            <input
                                                value={currentNameItem}
                                                onChange={handleChangeNameItem}
                                                onBlur={handlerBlurNameitem}
                                                ref={NameItemRef}
                                                type="text" name="menu_item_title"
                                                className="form-control" />
                                        </>
                                    ) : (
                                        <>
                                            <label>Title
                                                <button onClick={handleEditNameItem}
                                                    className="btn">
                                                    <i className="icon_pencil"></i>
                                                </button>
                                            </label>
                                            <div onClick={handleEditNameItem} className="card  ">
                                                <div className="cart-control ">
                                                    {currentNameItem}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    {editpriceItem ?
                                        (
                                            <>
                                                <label>Price
                                                    <button onClick={handleEditPriceItem}
                                                        className="btn">
                                                        <i className="icon-check-1"></i>
                                                    </button>

                                                </label>
                                                <input
                                                    value={currentpriceItem}
                                                    onChange={handleChangePriceItem}
                                                    onBlur={handlerBlurPriceitem}
                                                    ref={PriceItemRef}
                                                    type="number"
                                                    name="priceItem"
                                                    className="form-control" />
                                            </>
                                        ) : (
                                            <>
                                                <label>Price
                                                    <button
                                                        onClick={handleEditPriceItem}
                                                        className="btn">
                                                        <i className="icon_pencil"></i>
                                                    </button>
                                                </label>
                                                <div onClick={handleEditPriceItem} className="card  ">
                                                    <div className="cart-control ">
                                                        {currentpriceItem}
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            {editdescriptionItem ?
                                (<>
                                    <label>Short description
                                        <button
                                            onClick={handleEditDescriptionItem}
                                            className="btn">
                                            <i className="icon-check-1"></i>
                                        </button>
                                    </label>
                                    <input
                                        value={currentdescriptionItem}
                                        onChange={handleChangeDescriptionItem}
                                        onBlur={handlerBlurDescriptionitem}
                                        ref={DescriptionItemRef}
                                        type="text"
                                        name="menu_item_description"
                                        className="form-control" />

                                </>) : (<>
                                    <label>Short description
                                        <button
                                            onClick={handleEditDescriptionItem}
                                            className="btn">
                                            <i className="icon_pencil"></i>
                                        </button>
                                    </label>
                                    <div onClick={handleEditDescriptionItem} className="card  ">
                                        <div className="cart-control" placeholder="Hola">
                                            {currentdescriptionItem}
                                        </div>
                                    </div>
                                </>)}
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}