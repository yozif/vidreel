import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./App.css";
import Welcome from "./components/js/Welcome";
import GoogleSignIn from "../../img/btn_google_signin_dark_pressed_webp.png";

function App() {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };
  return (
    <div>
      {user ? (
        <div>
          <h3>Log in to use Vidreel</h3>
          <button className="sign-in">
            <img
              onClick={googleSignIn}
              src={GoogleSignIn}
              alt="sign in with google"
            />
          </button>
        </div>
      ) : (
        <Welcome />
      )}
    </div>
  );
}

export default App;
