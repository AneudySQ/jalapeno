import AutProvider from "./AutProvider";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { existsUsername, updateUser } from "../../Firebase/Firebase";


export default function ChoouseUsernane() {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState('');


  function handleUserLoggedIn(user) {
    navigate('/dasboard');
  }

  function handleonUserNotRegistered(user) {
    setCurrentUser(user);
    setState(3);
  }

  function handleonUserNotloggedIn() {
    navigate('/login');
  }

  function handleInputUsername(e) {
    setUsername(e.target.value);
  }

  async function handleContinue() {


    if (username !== "") {
      const exists = await existsUsername(username);
      if (exists) {
        setState(5);
      } else {
        const tmp = { ...currentUser };
        tmp.username = username;
        tmp.processCompleted = true;
        await updateUser(tmp);
        setState(6);

      }
    }
  }

  if (state === 3 || state === 5) {
    return (
      <div>
        <h1>Bienvenido {currentUser.displayName}</h1>
        <p>Favor elige un nombre de ususrio</p>
        {state === 5 ? <p> el nombre de usuario ya existe, escoge otro</p> : ""}

        <div>
          <input type='text' onClick={handleInputUsername} />
        </div>

        <div>
          <button className="btn badge-dark m-3" onClick={handleContinue}>Continue</button>
        </div>
      </div>
    );
  }
  if (state === 6) {
    return (
      <div>
        <h1>Ya eres miembro, felicidades MMG</h1>
        <Link to="/Dasboard">Continuar</Link>

      </div>
    );
  }

  return (
    <AutProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleonUserNotRegistered}
      onUserNotloggedIn={handleonUserNotloggedIn}
    >
    </AutProvider>
  );
}

