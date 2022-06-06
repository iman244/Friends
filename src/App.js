import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FirebaseBackendProvider from './components/Context/FirebaseBackend'

import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav.js';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import NewFriend from './components/NewFriend/NewFriend';

function App({ Friends }) {
  return (
    <BrowserRouter>
    
    <FirebaseBackendProvider>
    
    
      <Nav />
      <Switch>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signUp'>
          <SignUp />
        </Route>


          <Route path='/newFriend'>
            <NewFriend />
          </Route>
          {/* </FirebaseBackendProvider> */}

          {/* <FirebaseBackendProvider> */}
          <Route path='/'>
            <Home />
          </Route>

      </Switch>
      <Footer />
      
      
      </FirebaseBackendProvider>

    </BrowserRouter>
  );
}

export default App;