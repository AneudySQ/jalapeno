import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, getUserInfo, registerNewUser, userExists } from "../../Firebase/Firebase";
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
                debugger;
                const isRegistered = await userExists(user.uid);
                if (isRegistered) {
                    const userInfo = await getUserInfo(user.uid);
                    if (userInfo.processCompleted) {
                        onUserLoggedIn(userInfo);
                    } else {
                        onUserNotRegistered(userInfo);
                    }
                } else {
                    await registerNewUser({
                        uid: user.uid,
                        displayName: user.displayName,
                        profilePicture: '',
                        username: '',
                        processCompleted: false,
                    });
                    onUserNotRegistered(user);
                }
            } else {
                onUserNotloggedIn();
            }
        });
    }, [navigate, onUserLoggedIn, onUserNotloggedIn, onUserNotRegistered]);

    return <div>{children}</div>;

}


