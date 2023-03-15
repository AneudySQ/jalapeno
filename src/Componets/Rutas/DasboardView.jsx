import AutProvider from "../Rutas/AutProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DasboardWapper from "../DasboardWapper";
import { v4 as uuidv4 } from 'uuid'
import { deleteLink, getLinks, insertNewLink, updateLink } from "../../Firebase/Firebase";
import Link from '../Link'

export default function DasboardView() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);



  async function handleUserLoggedIn(user) {
    setCurrentUser(user);
    setState(2);
    const resLinks = await getLinks(user.uid);
    setLinks([...resLinks]);
  }
  function handleonUserNotRegistered(user) {
    navigate('/login')
  }

  function handleonUserNotloggedIn() {
    navigate('/login');
  }

  if (state === 0) {
    return (
      <AutProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotloggedIn={handleonUserNotloggedIn}
        onUserNotRegistered={handleonUserNotRegistered}
      >
      </AutProvider>
    );
  }

  return (
    <DasboardWapper>
      <div className="container">
        <h3 className="text-center"> Crea tu menu</h3>
        < div className="container" >
          <form className="card card-body">

            <div className="form-group input-group">
              <input type="number"
                cols="1"
                name="orden"
                min="1"
                max="15"
                step="2"
                placeholder="Orden"
              />
              <input type="text"
                className="form-control"
                placeholder="Categoría"
                name="categoria"
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
              >
              </textarea>
            </div>

            <input
              type="submit"
              value="Crear Categoria"
              className="btn btn-primary btn-block"
            />
          </form>
        </div>

        <div>
          {links.map((link) => (
            <Link
              key={link.docId}
              docId={link.docId}
              url={link.url}
              title={link.title}
/*               onDelete={handleDeleteLink}
              onUpdata={handleUpdateLink}
 */            />
          ))}

        </div>

      </div>
    </DasboardWapper>
  );

}



/* 

        <form action="" onSubmit={}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={handleOnChange} />

          <label htmlFor="url">Url</label>
          <input type="text" name="url" onChange={handleOnChange} />

          <input type="submit" value="Crear nuevo Link" />

        </form>

*/