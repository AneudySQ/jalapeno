import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

export default function LoginView() {
  async function handleOnclick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(GoogleAuthProvider);

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
    <div>
      <button onClick={handleOnclick}>Login with Google</button>
    </div>
  );
}

