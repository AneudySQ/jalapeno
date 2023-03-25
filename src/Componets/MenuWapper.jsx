import { Link } from "react-router-dom";

export default function MenuWapper({ children }) {
  return (
    //Este es el menu que aparesera cuando para cuando la gente ya esta logueada
    <div>

      <nav className="m-2">
        <Link to='/' className="col-md-4 ">Buscadorhome</Link>
        <Link to='/Dasboard' className="col-md-4">Dasboard</Link>
        <Link to='/EditarPerfil' className="col-md-4">Editar Perfil</Link>
        <Link to='/u/Aneudy' className="col-md-4">Perfil Publico</Link>
        <Link to='/Depuracion' className="col-md-4 ">Depurador</Link>
        <Link to="/signout">Signout</Link>

      </nav>
      <div>{children}</div>
    </div>

  )
}