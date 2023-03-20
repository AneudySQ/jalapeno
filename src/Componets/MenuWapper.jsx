import { Link } from "react-router-dom";

export default function MenuWapper({ children }) {
    return (
        //Este es el menu que aparesera cuando para cuando la gente ya esta logueada
        <div>

            <nav className="m-2">
                <Link to='/Buscadorhome' className="col-md-4 ">Buscadorhome</Link>
                <Link to='/dasboard/Links' className="col-md-4">Links</Link>
                <Link to='/dasboard' className="col-md-4">Dasboard</Link>
                <Link to='/Depuravionhtml' className="col-md-4">Deporavion</Link>
                <Link to='/Profile' className="col-md-4">Editar Perfil</Link>
                <Link to='/PublicProfileview' className="col-md-4">Perfil Publico</Link>
            </nav>
            <div>{children}</div>
        </div>

    )
}

