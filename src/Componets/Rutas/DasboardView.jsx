import AutProvider from "../Rutas/AutProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DasboardWapper from "../DasboardWapper";
import { v4 as uuidv4 } from 'uuid'
import { getLinks, insertNewLink } from "../../Firebase/Firebase";
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

  function handleOnSubmit(e) {
    e.preventDefault();
    addLink();
  }

  function addLink() {
    if (title !== "" && url !== "") {
      const newLink = {
        id: uuidv4(),
        title: title,
        url: url,
        uid: currentUser.uid,
      };
      const res = insertNewLink(newLink);
      newLink.docId = res.id;
      setTitle('');
      setUrl('');
      setLinks([...links, newLink]);
    }
  }



  function handleOnChange(e) {
    const value = e.target.value;
    if (e.target.name === "title") {
      setTitle(value);
    }

    if (e.target.name === "url") {
      setUrl(value);
    }
  }
  function handleDeleteLink() { };
  function handleUpdateLink() { };

  //(DasboardWapper)Aqui es donde vas a cargar el menu de logueo que aparecera en totos lados cuando ya el usuario esta registrado
  return (
    <DasboardWapper>
      <div>
        <h1> Dasboard</h1>

        <form action="" onSubmit={handleOnSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={handleOnChange} />

          <label htmlFor="url">Url</label>
          <input type="text" name="url" onChange={handleOnChange} />

          <input type="submit" value="Crear nuevo Link" />

        </form>

        <div>
          {links.map((link) => (
            <div >
              <a hrf={link.url}>{link.title}</a>
            </div>
          ))}
        </div>
      </div>
    </DasboardWapper>
  );

}
/*
          {links.map((link) => (
              <Link
                key={link.docId}
                url={link.url}
                title={link.title}
                onDelete={handleDeleteLink}
                onUpdata={handleUpdateLink} />
            ))}

*/

