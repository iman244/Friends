import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DBContextProvider from './components/Context/DBContext'

import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav.js';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import NewFriend from './components/NewFriend/NewFriend';

function App({ Friends }) {
  return (
    <BrowserRouter>
      <Nav user={null} />
      <Switch>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signUp'>
          <SignUp />
        </Route>

        <DBContextProvider>
          <Route path='/newFriend'>
            <NewFriend />
          </Route>
          {/* </DBContextProvider> */}

          {/* <DBContextProvider> */}
          <Route path='/'>
            <Home />
          </Route>
        </DBContextProvider>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;