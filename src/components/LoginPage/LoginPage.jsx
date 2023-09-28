import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const LoginPage = () => {
  const [user, setuser] = useState();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        setuser(logInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google Login</button>
      {user &&
        <div>
          <h3>user: {user.displayName}</h3>
          <h3>youremail: {user.email}</h3>
          <p>yourcreationTime: {user.metadata.creationTime}</p>
          <img src={user.photoURL} alt="" />
          <h2>Password টা বলি : ************** 😂 </h2>
          <h1>Your Account Is Hack</h1>
          <img src="/hack.png"></img>
        </div>
      }
    </div>
  );
};

export default LoginPage;
