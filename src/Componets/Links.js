import React from "react";
//import { db } from "../Firebase/Firebase";

import DasboardWapper from "./DasboardWapper";
import LinkForm from "./LinkForm";


export const Links = () => {

    const addOrEditCategory = async (categoryobject) => {
      // await db.colection('Category').doc().set(categoryobject);
       console.log('Nueva tarea gregada')
    }


    return (<DasboardWapper>
        <div className="container">
            <h1>Creac tu menu</h1>
        </div>

        <LinkForm addOrEditCategory={addOrEditCategory } />

    </DasboardWapper>
    )
};

export default Links;



