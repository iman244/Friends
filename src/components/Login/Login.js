import { useContext, useEffect, useState } from "react";
import { FirebaseBackend } from "../Context/FirebaseBackend";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { auth_signInWithEmailAndPassword } = useContext(FirebaseBackend);

  useEffect(() => {
    if (email && password) {
      auth_signInWithEmailAndPassword(email, password);
    }
  }, [email, password]);

  function handleSubmit(event) {
    event.preventDefault();

    let email = event.target.Email.value;
    let password = event.target.Password.value;

    setEmail(email);
    setPassword(password);

    event.target.reset();
  }

  return (
    <div id="Login" className="content">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="error">example error</div>
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" required />
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" name="Password" required />
        </div>

        <div>
          <button className="form-InputsDiv-submitButton">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
