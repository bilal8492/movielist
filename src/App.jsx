import logo from "./logo.svg";
import "./App.css";
import Movies from "./Components/MoviesList/Movies";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

import { Route, BrowserRouter, Switch, Link, Redirect } from "react-router-dom";
import About from "./Components/About/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <li><Link to='/movies'>Home</Link></li>
          <li><Link to='/about'>Company Info</Link></li>
        </nav>

        <Switch>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path="/">
            {localStorage.getItem('isLoggedIn') ? <Redirect to="/movies" /> : <SignUp />}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
