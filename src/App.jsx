import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import Welcome from "./components/js/Welcome";
import Login from "./components/js/LogIn";
import Navbar from "./components/js/Navbar";

function App() {
  const [user] = useAuthState(auth);
  return (
    <main>
      <Navbar />
      {user ? <Welcome /> : <Login />}
    </main>
  );
}

export default App;
