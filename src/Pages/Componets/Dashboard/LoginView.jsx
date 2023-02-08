import { useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth, userExists } from '../../../Firebase/Firebase';

import {  useNavigate } from "react-router-dom";

export default function LoginView() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);

    /*
    State
    0: Inicializando
    1:Loading
    2:Login Completo
    3:Login Sin registro
    4: No hya nadie logueado
    
    */

    const [state, setCurrentState] = useState(0);

    useEffect(() => {
        setCurrentState(1);
        onAuthStateChanged(auth, handleUserStateChanged);

    }, []);

    async function handleUserStateChanged(user) {
        if (user) {
            const isRegistered = await userExists(user.uid);
            if (isRegistered) {
                ///TODO:Redirigir a Dashboard
                navigate("/Profile")
                setCurrentState(2);
            } else {
                ///TODO:Redirigir a Dashboard
                navigate("/Dashboard")

                setCurrentState(3);
            }
        } else {
            setCurrentState(4);
            console.log("No hay nadie");
        }
    }

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
}



