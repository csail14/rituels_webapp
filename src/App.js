import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './containers/home';
import Header from './containers/header';
import Admin from './containers/admin'
import RequireAuth from './helpers/require-auth';
import Login from './containers/login'
import Logout from './containers/logout'
import NonAuth from './containers/nonAuth'
import { CloudinaryContext } from "cloudinary-react";

function App() {
  return (
    <CloudinaryContext cloudName="dmpzubglr">
      <div className="App">
        <Header/>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/non-authorize" component={NonAuth} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/admin" component={RequireAuth(Admin,true)} />
          
        </Switch>
      </div>
    </CloudinaryContext>
  );
}

export default App;
