import React from "react";
import "../css/Login.css";
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

  return (
    <div className="login-container">
      <div className="login-content">
      <h3>Log in to use Vidreel</h3>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignIn}
          alt="sign in with google"
        />
      </button>
      </div>
    </div>
  );
};

export default Login;
