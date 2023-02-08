import { useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth, registerNewUser, userExists } from '../Firebase/Firebase';

import { useNavigate } from "react-router-dom";

export default function AuthProvider({
    children,
    OnUserLoggeIn,
    onUserNotLoggedIn,
    OnUserNotRegisted
}) {

    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const isRegistered = await userExists(user.uid);
                if (isRegistered) {
                    OnUserLoggeIn(user);
                } else {
                    await registerNewUser({
                        uid: user.uid,
                        displayName: user.displayName,
                        profilePicture: "",
                        username: "",
                        processCompleted: false,

                    });
                    OnUserNotRegisted(user);
                }
            } else {
                onUserNotLoggedIn()
            }
        });

    }, [navigate, OnUserLoggeIn, onUserNotLoggedIn, OnUserNotRegisted]);

    return <div>{children} </div>;
}
