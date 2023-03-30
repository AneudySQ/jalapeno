import { useState } from "react"
export default function InputNameItem(nameItem, docId) {
    const [currentNameItem, setCurrentNameItem] = useState(nameItem)
    const [editNameItem, setEditNameItem] = useState(false)


    function handleEditNameItem() {
        setEditNameItem(true);
    }

    function handleChangeNameItem(e) {
        setCurrentNameItem(e.target.value)
    }

    return (
        <div className="form-group" key={docId}>
            {
                editNameItem ? (
                    <>
                        <input value={currentNameItem} onChange={handleChangeNameItem} type="text" name="menu_item_title" className="form-control" />

                    </>

                ) : (

                    <>
                        <label>Title
                            <button onClick={handleEditNameItem}
                                className="btn">
                                <i className="icon_pencil"></i>
                            </button>
                        </label>
                        {nameItem}
                    </>
                )}

        </div>

    )
}