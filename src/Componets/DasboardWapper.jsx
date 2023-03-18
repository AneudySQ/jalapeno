import { Link } from "react-router-dom";

export default function DasboardWapper({ children }) {
    return (
        //Este es el menu que aparesera cuando para cuando la gente ya esta logueada
        <div>

            <nav>
                <div>Logo</div>

                <Link to='/Buscadorhome' className="col-md-4">Buscadorhome</Link>
                <Link to='/dasboard/Links' className="col-md-4">Links</Link>
                <Link to='/dasboard' className="col-md-4">dasboard</Link>
                <Link to='/Depuravionhtml' className="col-md-4">Deporavion</Link>

            </nav>
            <div>{children}</div>
        </div>

    )
}

