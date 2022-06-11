import { useState } from "react";
import { auth } from "../Context/FirebaseBackend";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let history = useHistory();

  async function handleSignIn(event) {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password);
    if (user) {
      history.push("/");
    }
  }

  return (
    <div id="Login" className="content">
      <form>
        <div>
          <div className="error">example error</div>
          <label htmlFor="Email">Email</label>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="text"
            name="Email"
            required
          />
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            name="Password"
            required
          />
        </div>

        <div>
          <button onClick={handleSignIn}>
            {`${
              loading ? "loading" : error ? "error happend! retry" : "Log In"
            }`}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
