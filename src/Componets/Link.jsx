import { useState, useRef, useEffect } from "react";

export default function Link({ docId, title, url, onDelete, onUpdata }) {

    const [currentTitle, setCurrentTitle] = useState(title);
    const [currentUrl, setCurrentUrl] = useState(url);

    const [editTitle, setEditTitle] = useState(false);
    const [editUrl, setEditUrl] = useState(false);

    const titleRef = useRef(null);
    const urlRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus()
        }
    }, [editTitle]);

    useEffect(() => {
        if (urlRef.current) {
            urlRef.current.focus()
        }
    }, [editUrl]);

    function handleEditTitle() {
        setEditTitle(true);
    }
    function handleEditUrl() {
        setEditUrl(true)
    }
    function handleChangeTitle(e) {
        setCurrentTitle(e.target.value);
    };

    function handleChangeUrl(e) {
        setCurrentUrl(e.target.value);
    };

    function handlerBlurTitle(e) {
        setEditTitle(false)
        onUpdata(docId, currentTitle, currentUrl);
    }
    function handlerBlurUrl(e) {
        setEditUrl(false)
        onUpdata(docId, currentTitle, currentUrl);

    }

    function handleDelete() {
        onDelete(docId);
    }


    return (
        <div key={docId}>
            <div>

                <div>
                    {editTitle ? (
                        /*  En esta capa vas a calocar la interfaz para cuando el usuario decee editar y esta cambiara a actualizar */
                        <><input ref={titleRef}
                            value={currentTitle}
                            onChange={handleChangeTitle}
                            onBlur={handlerBlurTitle}
                        />

                        </>
                    ) : (
                        <>
                            <button
                                onClick={handleEditTitle}>Editar</button>
                            {currentTitle}
                        </>

                    )}
                </div>

                <div>
                    {
                        editUrl ? (
                            <>
                                <input
                                    ref={urlRef}
                                    value={currentUrl}
                                    onChange={handleChangeUrl}
                                    onBlur={handlerBlurUrl} />
                            </>
                        ) : (
                            <>
                                <button onClick={handleEditUrl}>Editar</button>
                                {url}

                            </>
                        )
                    }
                </div>
            </div>

            {/* Esta es una capa que contiene el boton para eliminar toda la categoria */}
            <button onClick={handleDelete}>Eliminar</button>
        </div >
    );
}