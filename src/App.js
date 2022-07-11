import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./Context/FirebaseBackend";

import Nav from "./Partials/Nav";
import Footer from "./Partials/Footer";
import Login from "./Partials/components_Nav/Login";
import SignUp from "./Partials/components_Nav/SignUp";
import Profile from "./Partials/components_Nav/Profile";
import Friends from "./components/Friends/Friends";
import NewFriend from "./components/Friends/components_Friends/NewFriend";
import Home from "./components/Home/Home";

import ChatHandler from "./components/Friends/ChatHandler";

function App() {
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/Chat">
          <ChatHandler />
        </Route>

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

        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
