import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, } from "../../Firebase/Firebase";
import { useEffect, useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";
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
  6:User name No existe 
  */
  const [state, setCurrentState] = useState(0);

  const [currentUser, setCurrentUser] = useState(null);
  const [esteRegistrando, setEstaregistrando] = useState(false)




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

  async function handleOnclickFacebook() {
    const facebookProvider = new FacebookAuthProvider();
    await signInWithFacebook(facebookProvider);

    async function signInWithFacebook(facebookrovider) {
      try {
        const res = await signInWithPopup(auth, facebookProvider);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  }



  //Si el usuario ha iniciado sesion esta sesion
  function handleUserLoggedIn(user) {
    navigate('/dasboard');
  }

  function handleonUserNotRegistered(user) {
    //setCurrentUser(user);
    //setCurrentState(3);
    navigate('/ChoouseUsernane');
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
    //Inicio de secion con correo//
    async function submitHandler(e) {
      e.preventDefault();
      const email = e.target.emailField.value;
      const password = e.target.passwordField.value;
      if (esteRegistrando) {
        //Si se registra
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        //Si esta iniciando Sesion
        signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }
    }

    return (
      <div className="container">
        <div className="col-md-4 ">
          <h3 className="center">{currentUser ? "Registrate" : " Inisia Sesion"}</h3>
          {/*Formulario Iniciar sesion con correo */}
          <form onSubmit={submitHandler}>
            <div className="col align-self-center">
              <input type="email" placeholder="Correo" id="emailField" />
              <input type="password" placeholder="Contrasena" id="passwordField" />
            </div>
            <div className="col align-self-center">
              <button type="submi">
                {""} {currentUser ? "Registrate" : " Inisia Sesion"}{""}
              </button>
            </div>
          </form>
          {/* Iniciar sesion con Facebook o Google */}
          <div className="col align-self-center">
            <button onClick={handleOnclick}>Login with Google</button>
            <button onClick={handleOnclickFacebook}>Login with Facebook</button>
          </div>
          <div className="col align-self-center">
            <button onClick={() => setCurrentUser(!currentUser)}>
              {""}
              {currentUser ? "¿Ya tienes cuenta?" : " Registrate"}
            </button>
          </div>

        </div>
      </div>


    );


  }

  if (state === 5) {
    return (

      navigate("/index")

/*       <div>
        <button onClick={handleOnclick}>Login with Google</button>
        <button onClick={handleOnclickFacebook}>Login with Facebook</button>
      </div>
 */    );
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
