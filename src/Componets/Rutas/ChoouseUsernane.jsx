import AutProvider from "./AutProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { existUsername } from "../../Firebase/Firebase";


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
    if (username != "") {
      const exists = await existUsername(username);
      if (exists) {
        setState(5);
      } else {
          const tmp = {...currentUser};
          tmp.processComplete = true;
      }
    }
  }

  if (state === 3) {
    return (
      <div>
        <h1>Bienvenido {currentUser.displayName}</h1>
        <p>Favor elige un nombre de ususrio</p>
        <div>
          <input type='text' onChange={handleInputUsername} />
        </div>
        <div>
          <button onClick={handleContinue}>Continue</button>
        </div>
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

