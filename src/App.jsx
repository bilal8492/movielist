import logo from "./logo.svg";
import "./App.css";
import Movies from "./Components/MoviesList/Movies";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path="/">
            <SignUp />
          </Route>
        </Switch>





      </div>
    </BrowserRouter>
  );
}

export default App;
