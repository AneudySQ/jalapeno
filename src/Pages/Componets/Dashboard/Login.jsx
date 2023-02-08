import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, userExists } from "../../../Firebase/Firebase";

import { useNavigate } from "react-router-dom";
import AuthProvider from "../../../Firebase/AuthProvider";

export default function LoginView() {
  const navigate = useNavigate();
  //const [currentUser, setCurrentUser] = useState(null);*/

  /*
    State
    0: Inicializando
    1:Loading
    2:Login Completo
    3:Login Sin registro
    4: No hay nadie logueado
    4: No hay UserName
    
    */

  const [state, setCurrentState] = useState(0);

  /* useEffect(() => {
        setCurrentState(1);
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const isRegistered = await userExists(user.uid);
                if (isRegistered) {
                    ///TODO:Redirigir a Dashboard
                    navigate("/Dashboard")
                    setCurrentState(2);
                } else {
                    ///TODO:Redirigir a Dashboard
                    navigate("/ChooseUserNameView")
                    setCurrentState(3);
                }
            } else {
                setCurrentState(4);
                console.log("No hay nadie");
            }
        });

    }, [navigate]);
    */

  async function handleOneClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }

  async function signInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  function handleUserLoggedIn(user) {
    navigate("/Dasboard");
  }

  function handleUserNotRegisted(user) {
      navigate("/ChooseUserNameView");
  }

  function handleUserNotLoggedIn() {
    setCurrentState(4);
  }



  if (state === 2) {
         return <div> Estas Autenticado y registro</div>;
     }
     if (state === 3) {
         return <div> Estas Autenticado pero sin registro</div>;
     }
 
     if (state === 4) {
         return (
             <div>
                 <button onClick={handleOneClick}>Login with Google</button>
             </div>
         );
     } 

    return (
        <AuthProvider
            onUserLoggedIn={handleUserLoggedIn}
            OnUserNotRegisted={handleUserNotRegisted}
            onUserNotLoggedIn={handleUserNotLoggedIn}
        >
            <div>Loadin...</div>
        </AuthProvider>
    );
}
