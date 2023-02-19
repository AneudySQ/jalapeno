import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, userExists } from "../../Firebase/Firebase";
import { useEffect, useState } from "react";


import { useNavigate } from "react-router-dom";






export default function LoginView() {

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  /*
  Estados de la aplicacion:
  1:iniciando
  2:Loging
  3:login pero sin registo
  4:no hay nadie Logueado
  */
  const [state, setCurrentState] = useState(0);

  useEffect(() => {
    setCurrentState(1);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const isRegistered = await userExists(user.uid);
        if (isRegistered) {
          //TODO: Redirigir a Dasboard
          navigate("/DasboardView");
          setCurrentState(2);
        } else {
          //TODO: Redirigir a choose Username
          navigate("/ChoouseUsernane");
          setCurrentState(3);
        }
      } else {
        setCurrentState(4);
        console.log("No hay nadie autentificado...");
      }
    });
  }, [navigate]);


  /*--------------------- */

  if (state === 2) {
    return <div>Estas autenticado y  registrado...</div>
  }

  if (state === 3) {
    return <div>Estas autenticado pero no registrado...</div>
  }

  if (state === 4) {
    return (
      <div>
        <button onClick={handleOnclick}>Login with Google</button>
      </div>
    );
  }


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


  return <div>Loaging...</div>

}


