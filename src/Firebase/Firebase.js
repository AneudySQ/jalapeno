import { initializeApp } from "firebase/app";
import 'firebase/compat/auth'
import { getAuth, FacebookAuthProvider } from "firebase/auth";

import { uuidv4 } from "@firebase/util";

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

/* Facebook */
const provider = new FacebookAuthProvider();
export { provider }


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

/* Insertar Nueva categoria */

export async function insertNewCategory(category) {
    try {
        const docRef = collection(db, 'users', category.uid, "Restaurant", "Menu", "Categories");
        const res = await addDoc(docRef, category)

        // const res = await addDoc(docRef, category)

        return res;
    } catch (error) {
        console.error(error);
    }
}


/* Esta funcionn sube las categorias */
export async function getCategories(uid,) {
    const Categories = [];

    try {
        const collectionRef = collection(db, "users", uid, "Restaurant", "Menu", "Categories",);
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


export async function updateCategory(docId, category, uid) {
    try {
        const docRef = doc(db, "users", category.uid, "Restaurant", "Menu", "Categories", docId);
        const res = await setDoc(docRef, category);
        return res;
    } catch (error) {
        console.error();
        console.log("error")
    }
}

export async function deleteCategory(docId, category) {
    try {
        const docRef = doc(db, "users", category.uid, "Restaurant", "Menu", "Categories", docId);
        const res = await deleteDoc(docRef)
        return res;
    } catch (error) {
        console.error(error);
    }
}

export async function setUserProfilePicture(uid, file) {
    try {
        const imageRef = ref(storage, `images/profilePicture/${uid}`);
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
/* Esta Funcion publica las informaciones en el perfil publico */
export async function getUserPublicProfileInfo(uid) {
    const profileInfo = await getUserInfo(uid);
    const categoriesInfo = await getCategories(uid)
    return {
        profileInfo: profileInfo,
        categoriesInfo: categoriesInfo,
    };
}

export async function logout() {
    await auth.signOut();
}


/* Funciones para insertar nuevo Items dentro de la coleccion  Categories */

export async function insertNewItem(Item) {
    try {
        const docRef = collection(db, 'users', Item.uid, "Restaurant", "Menu", "Categories", Item.docIdCategory, "Item");
        const res = await addDoc(docRef, Item)
        // const usersRef = collection(db, "users");
        //const docRef = await addDoc(collection(db, 'users', Item.uid, "Restaurant", "Menu", "Categories", Item.DocIdCategory, "item"),{Item});
        //const res = setDoc(docRef, Item)
        // const usersRef = collection(db, "users");

        return res;
    } catch (error) {
        console.error(error);
    }
}

/* Esta funcionn sube las Items */
export async function getItems(uid, docIdCategory, Item) {

    const Items = [];
    try {
        const collectionRef = collection(db, 'users', uid, "Restaurant", "Menu", "Categories", docIdCategory, "Item");
        const q = query(collectionRef, where('uid', '==', uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
            const Item = { ...doc.data() };
            Item.docId = doc.id;
            Items.push(Item);
        });
        return Items;
    } catch (error) {
        console.error(error);
    }
}

/* Esta funcion actualiza los ITems */

export async function updateItem(docId, item, uid, ) {
    try {
        const docRef = doc(db, 'users', uid, "Restaurant", "Menu", "Categories", item.docIdCategory, "Item", docId)
        const res = await setDoc(docRef, item)
        return res;

    } catch (error) {
        console.log("error")
        console.error(error);
    }

}

export async function deleteItem(docId, uid,) {
    try {
        const docRef = doc(db, 'users', uid, "Restaurant", "Menu", "Categories", "docIdCategory", "Item",);
        const res = await deleteDoc(doc(db, docRef, docId));
        return res;
    } catch (error) {
        console.error(error);
    }
}


/* Funcion para subior fotos */
export async function setPhotoItem(uid, file, ItemId, username) {
    try {
        const imageRef = ref(storage, `images/ItemsPicture/${ItemId}`)
        const resUpload = await uploadBytes(imageRef, file);
        return resUpload;
    } catch (error) {
        console.error(error);
    }

}



export async function getPhotoItem(ItemId) {
    try {
        const imageRef = ref(storage, ItemId);
        const url = await getDownloadURL(imageRef);
        return url;

    } catch (error) {
        console.error(error)
    }
}

export async function uploadFiles(files) {
    const storageRef = ref(storage, uuidv4())

    await uploadBytes(storageRef, files)
    const url = await getDownloadURL(storageRef)
    return url
}

