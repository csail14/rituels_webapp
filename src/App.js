import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './containers/home';
import Header from './containers/header';
import Footer from './containers/footer';
import Admin from './containers/admin'
import RequireAuth from './helpers/require-auth';
import Login from './containers/login'
import Forgot from './containers/forgotPassword'
import Validate from './containers/validateAccount'
import Contact from './containers/contact';
import Presentation from './containers/presentation'
import Logout from './containers/logout'
import NonAuth from './containers/nonAuth'
import Pack from './containers/pack'
import Condition from './containers/condition'
import { CloudinaryContext } from "cloudinary-react";

function App() {
  return (
    <CloudinaryContext cloudName="dmpzubglr">
      <div className="App">
        <Header/>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/pack" component={Pack} />
          <Route exact path="/changePassword/:key_id" component={Forgot} />
          <Route exact path="/validate/:key_id" component={Validate} />
          <Route exact path="/condition" component={Condition} />
          <Route exact path="/presentation" component={Presentation} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/non-authorize" component={NonAuth} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/admin" component={RequireAuth(Admin,true)} />
          
        </Switch>
        <Footer/>
      </div>
    </CloudinaryContext>
  );
}

export default App;
