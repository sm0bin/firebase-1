import { FcGoogle } from "react-icons/fc";
import { MdLogout } from "react-icons/md";
import { BsGoogle, BsGithub } from "react-icons/bs";
// import { initializeApp } from "firebase/app";
import app from "../firebase/firebase.init";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const SignIn = () => {
  const auth = getAuth(app);
  console.log(app);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        // Sign-out successful.
        setUser(null);
        console.log(result);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="mx-auto place-content-center ">
      <h1>You have been sign in</h1>
      {user ? (
        <button
          className="border border-white rounded-xl p-4"
          onClick={handleSignOut}
        >
          <MdLogout className="w-6 h-6" />
        </button>
      ) : (
        <>
          <button
            className="border border-white rounded-xl p-4"
            onClick={handleGoogleSignIn}
          >
            <BsGoogle className="w-6 h-6" />
          </button>
          <button
            className="border border-white rounded-xl p-4"
            onClick={handleGitHubSignIn}
          >
            <BsGithub className="w-6 h-6" />
          </button>
        </>
      )}
      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <h3>{user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

// Initialize Firebase

// Initialize Firebase Authentication and get a reference to the service

export default SignIn;
