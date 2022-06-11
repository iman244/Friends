import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Context/FirebaseBackend";
import { useHistory } from "react-router-dom";


function SignUp() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let history = useHistory();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    // useEffect(() => {

    // }, [user])

  async function handleSignUp(event) {
    event.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    if (user) {
      history.push("/");
    }
  }

  return (
    <div id="SignUp" className="content">
      <form>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="text"
            name="Email"
            required
          />
          <div className="error">example error</div>
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
          <div className="error">example error</div>
        </div>

        <div>
          <button
            className={`${loading ? "loading" : ""}`}
            onClick={handleSignUp}
          >
            {`${
              loading ? "loading" : error ? "error happend! retry" : "Sign Up"
            }`}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
