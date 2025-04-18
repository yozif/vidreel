import React from "react";
import "../css/Navbar.css";
import GoogleSignIn from "../../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => {
      console.error("Error during sign in:", error);
    });
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="navbar">
      <h1>Vidreel</h1>
      {user ? (
        <button className="sign-out" onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignIn}
            alt="sign in with google"
          />
        </button>
      )}
    </div>
  );
};

export default Login;
