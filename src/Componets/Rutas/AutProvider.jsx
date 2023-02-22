import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, userExists } from "../../Firebase/Firebase";
import { useEffect, useState } from "react";


import { useNavigate } from "react-router-dom";

export default function AutProvider({
    children,
    onUserLoggedIn,
    onUserNotloggedIn,
    onUserNotRegistered
}) {
    const navigate = useNavigate();
    
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const isRegistered = await userExists(user.uid);
                if (isRegistered) {
                    onUserLoggedIn(user);
                } else {
                    onUserNotRegistered(user);
                }
            } else {
                onUserNotloggedIn();
            }
        });
    }, [navigate, onUserLoggedIn, onUserNotloggedIn, onUserNotRegistered]);

    return <div>{children}</div>;

}


