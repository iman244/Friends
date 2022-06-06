// import './SignUp.css';

import { useContext, useEffect, useState } from "react";
import { FirebaseBackend } from "../Context/FirebaseBackend";

function SignUp() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { auth_createUserWithEmailAndPassword } = useContext(FirebaseBackend);

  useEffect(() => {
    if (email && password) {
      auth_createUserWithEmailAndPassword(email, password);
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
    <div id="SignUp" className="content">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" required />
          <div className="error">example error</div>
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" name="Password" required />
          <div className="error">example error</div>
        </div>

        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
