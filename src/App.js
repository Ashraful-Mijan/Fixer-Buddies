import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Logins/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Logins/PrivateRoute/PrivateRoute';
import Admin from './components/Dashboard/Admin/Admin';
import Nav from './components/Dashboard/Nav/Nav';
import UserBoard from './components/UserBoard/UserBoard';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router >
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/order'>
            <Nav/>
            <UserBoard/>
          </Route>
          <Route path='/makeOrder/:id'>
            <Nav/>
            <UserBoard/>
          </Route>
          <Route path='/admin'>
            <Nav/>
            <Admin/>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
