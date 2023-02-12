import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

export default function LoginView() {
  async function handlOnclick() {
    const googleProvider = new GoogleAuthProvider();
    await SignInWithGoogle(GoogleAuthProvider);

  }

  async function SignInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div>
      <button onClick={handlOnclick}>Login with Google</button>
    </div>
  );
}
