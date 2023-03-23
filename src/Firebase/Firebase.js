import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
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
export const db = getFirestore(app);
export const storage = getStorage(app);

export async function userExists(uid) {
    const docRef = doc(db, 'users', uid);
    const res = await getDoc(docRef);
    console.log(res);
    return res.exists();
}

export async function existsUsername(username) {
    const users = [];
    const docsRef = collection(db, 'users')
    const q = query(docsRef, where("username", "==", username));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
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


export async function insertNewCategory(category) {
    try {
        const docRef = collection(db, 'Categories');
        const res = await addDoc(docRef, category);
        return res;
    } catch (error) {
        console.error(error);
    }
}


/* Esta funcionn sube las categorias */
export async function getCategories(uid) {
    const Categories = [];
    try {
        const collectionRef = collection(db, 'Categories');
        const q = query(collectionRef, where('uid', '==', uid));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(doc => {
            const category = { ...doc.data() };
            category.docId = doc.id;
            Categories.push(category);
        });

        return Categories;

    } catch (error) {
        console.error(error);

    }
}
export async function updateCategory(docId, category) {
    try {
        const docRef = doc(db, 'Categories', docId);
        const res = await setDoc(docRef, category);
        return res;
    } catch (error) {
        console.error();
    }
}

export async function deleteCategory(docId) {
    try {
        const docRef = doc(db, 'Categories', docId);
        const res = await deleteDoc(docRef)
        return res;
    } catch (error) {
        console.error(error);
    }
}

export async function setUserProfilePicture(uid, file) {
    try {
        const imageRef = ref(storage, `images/${uid}`);

        const resUpload = await uploadBytes(imageRef, file)
        return resUpload;
    } catch (error) {
        console.error(error);
    }
}

export async function getProfilePhotoUrl(profilePicture) {
    try {
        const imageRef = ref(storage, profilePicture);
        const url = await getDownloadURL(imageRef);
        return url;
    } catch (error) {
        console.error(error);
    }
}

export async function getUserPublicProfileInfo(uid) {
    const profileInfo = await getUserInfo(uid);
    const CategoriesInfo = await getCategories(uid)
    return {
        profileInfo: profileInfo,
        CategoriesInfo: CategoriesInfo,
    };
}