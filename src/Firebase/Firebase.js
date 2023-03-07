import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    getBytes,

} from "firebase/storage";


import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    setDoc,
    deleteDoc,
} from "firebase/firestore";
import { wait } from "@testing-library/user-event/dist/utils";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID,
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export async function userExists(uid) {
    const docRef = doc(db, 'users', uid);
    const res = await getDoc(docRef);
    console.log(res);
    return res.exists();
}
/*
export async function existsUsername(username) {
        const users = [];
        const docsRef = collection(db, 'users');
        const q = query(docsRef, where('username', ' == ', username));

        const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
            users.push(doc.data());
        });
        return users.length > 0 ? users[0].uid : null;
}
*/

export async function existsUsername(username) {
  const users = [];
  const q = query(collection(db, "users"), where("username", "==", username));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    users.push(doc.data());
  });
  return users.length > 0 ? users[0].uid : null;
}

export async function registerNewUser(user) {
    try {
        const usersRef = collection(db, "users");
        await setDoc(doc(usersRef, user.uid), user);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    }

export async function updateUser(user) {
    console.log(user);
    try {
        const usersRef = collection(db, "users");
        await setDoc(doc(usersRef, user.uid), user);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    }


export async function getUserInfo(uid) {
    try {
        const docRef = doc(db, 'users', uid);
        const document = await getDoc(docRef);
        return document.data();
    } catch (error) { }
}