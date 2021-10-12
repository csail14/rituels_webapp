import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home";
import Header from "./containers/header";
import Footer from "./containers/footer";
import Admin from "./containers/admin";
import RequireAuth from "./helpers/require-auth";
import Login from "./containers/login";
import ChangeAccount from "./containers/Account/changeAccount";
import Forgot from "./containers/forgotPassword";
import AskNewPassword from "./containers/askNewPassword";
import Validate from "./containers/validateAccount";
import Contact from "./containers/contact";
import Presentation from "./containers/presentation";
import Warroom from "./containers/Account/warroom";
import Logout from "./containers/logout";
import NonAuth from "./containers/nonAuth";
import Pack from "./containers/pack";
import Account from "./containers/Account/myaccount";
import Condition from "./containers/condition";
import Register from "./containers/register";
import { CloudinaryContext } from "cloudinary-react";

function App() {
  return (
    <CloudinaryContext cloudName="dmpzubglr">
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={RequireAuth(Home, false)} />
          <Route exact path="/home" component={RequireAuth(Home, false)} />
          <Route exact path="/pack" component={RequireAuth(Pack, false)} />
          <Route
            exact
            path="/changePassword/:key_id"
            component={RequireAuth(Forgot, false)}
          />
          <Route
            exact
            path="/validate/:key_id"
            component={RequireAuth(Validate, false)}
          />
          <Route
            exact
            path="/condition"
            component={RequireAuth(Condition, false)}
          />
          <Route
            exact
            path="/presentation"
            component={RequireAuth(Presentation, false)}
          />
          <Route
            exact
            path="/contact"
            component={RequireAuth(Contact, false)}
          />
          <Route
            exact
            path="/non-authorize"
            component={RequireAuth(NonAuth, false)}
          />
          <Route exact path="/login" component={RequireAuth(Login, false)} />
          <Route
            exact
            path="/forgot"
            component={RequireAuth(AskNewPassword, false)}
          />
          <Route
            exact
            path="/register"
            component={RequireAuth(Register, false)}
          />
          <Route exact path="/logout" component={RequireAuth(Logout, false)} />
          <Route exact path="/account" component={RequireAuth(Account, true)} />
          <Route
            exact
            path="/change-account"
            component={RequireAuth(ChangeAccount, true)}
          />
          <Route exact path="/warroom" component={RequireAuth(Warroom, true)} />
          <Route
            exact
            path="/admin"
            component={RequireAuth(Admin, true, true)}
          />
        </Switch>
        <Footer />
      </div>
    </CloudinaryContext>
  );
}

export default App;
