import React from "react";
//import { db } from "../Firebase/Firebase";

import LinkForm from "./LinkForm";


export const Links = () => {

    const addOrEditCategory = async (categoryobject) => {
      // await db.colection('Category').doc().set(categoryobject);
       console.log('Nueva tarea gregada')
    }


    return (<>
        <div className="container">
            <h1>Creac tu menu</h1>
        </div>

        <LinkForm addOrEditCategory={addOrEditCategory } />

    </>
    )
};

export default Links;



