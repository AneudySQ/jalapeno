import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup
} from "firebase/auth";
import { auth, userExists } from "../../Firebase/Firebase";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import AutProvider from "./AutProvider";






export default function LoginView() {

  const navigate = useNavigate();

  //const [currentUser, setCurrentUser] = useState(null);

  /*
  Estados de la aplicacion:
  1:iniciando
  2:Loging
  3:login pero sin registo
  4:no hay nadie Logueado
  5:ya existe el usuario
  6:Nuevo username, click para continuar
  */
  const [state, setCurrentState] = useState(0);

  const [currentUser, setCurrentUser] = useState(null);




  async function handleOnclick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);

    async function signInWithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  }

  function handleUserLoggedIn(user) {
    navigate('/dasboard');
  }

  function handleonUserNotRegistered(user) {
    //setCurrentUser(user);
    //setCurrentState(3);
    navigate('/chooseusername')
  }

  function handleonUserNotLoggedIn() {
    setCurrentState(4);
  }

  /*
    if (state === 2) {
      return <div>Estas autenticado y  registrado...</div>
    }
  
    if (state === 3) {
      return <div>Estas autenticado pero no registrado...</div>
    }
    */

  if (state === 4) {
    return (
      <div>
        <button onClick={handleOnclick}>Login with Google</button>
      </div>
    );
  }

  if (state === 5) {
    return (
      <div>
        <button onClick={handleOnclick}>Login with Google</button>
      </div>
    );
  }


  return (<AutProvider
    onUserLoggedIn={handleUserLoggedIn}
    onUserNotRegistered={handleonUserNotRegistered}
    onUserNotloggedIn={handleonUserNotLoggedIn}
  >
    <div>Loading...</div>
  </AutProvider>
  );
}


