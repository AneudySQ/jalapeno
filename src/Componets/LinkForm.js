import React, { useState } from "react";





export const LinkForm = (props) => {


    /* Esta es la funcion para capturar la informacion del formulario */

    const initialStateValue = {
        orden: '',
        categoria: '',
        descripcion: ''
    };

    const [values, setValues] = useState(initialStateValue);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addOrEditCategory(values);

    };




    return (
        < div className="container" >
            <form className="card card-body" onSubmit={handleSubmit}>

                <div className="form-group input-group">
                    <input type="number"
                        cols="1"
                        name="orden"
                        min="1"
                        max="15"
                        step="2"
                        placeholder="Orden"
                        onChange={handleInputChange}

                    />
                    <input type="text"
                        className="form-control"
                        placeholder="Categoría"
                        name="categoria"
                        onChange={handleInputChange}

                    />
                    <div className="input-group-text bg-light">
                        <i className="material-icons">create</i>
                    </div>

                </div>


                <div className="form-group">
                    <textarea
                        name="descripcion"
                        id=""
                        rows="3"
                        className="form-control"
                        placeholder="Descripcion de esta categoria"
                        onChange={handleInputChange}
                    >

                    </textarea>
                </div>
                <imput type="submit" value='Crear Categoria' className="btn btn-primary btn-block"/>
                

            </form>
        </div>
    )
};

export default LinkForm;