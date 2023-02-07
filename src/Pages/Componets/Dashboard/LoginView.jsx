import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../Firebase/Firebase';

export default function LoginView() {
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

    return (
        <>
            <button oneClick={handleOneClick}>Login with Google</button>
        </>
    )
}



