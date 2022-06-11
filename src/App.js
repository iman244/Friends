import { BrowserRouter, Route, Switch } from "react-router-dom";

import FirebaseBackendProvider, {
  auth,
  db,
} from "./components/Context/FirebaseBackend";

import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav.js";
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import NewFriend from "./components/Friends/NewFriend";
import Test from "./components/Test/Test";
import Profile from "./components/Profile/Profile";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";

function App() {
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <FirebaseBackendProvider>
        <Nav />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signUp">
            <SignUp />
          </Route>

          <Route path="/profile">
            <Profile user={user} />
          </Route>

          <Route path="/newFriend">
            <NewFriend />
          </Route>

          <Route path="/Friends">
            <Friends />
          </Route>

          <Route path="/test">
            <Test />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </FirebaseBackendProvider>
    </BrowserRouter>
  );
}

export default App;
