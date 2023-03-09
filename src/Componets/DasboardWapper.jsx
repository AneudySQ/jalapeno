import { Link } from "react-router-dom";

export default function DasboardWapper({ children }) {
    return (
        //Este es el menu que aparesera cuando para cuando la gente ya esta logueada
        <div>
            
            <nav>
                <div>Logo</div>
                <Link to='/dasboard'>Links</Link>
                <Link to='/dasboard/profile'>Profile</Link>
                <Link to='/signout'>Profile</Link>
            </nav>
            <div>{children}</div>
        </div>

    )
}

