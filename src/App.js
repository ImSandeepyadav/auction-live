import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Container/Home/index';
import OnlineAb from './Container/Home/onlineAbsolute'

function App() {
  return (
    <Router>
      <Switch>
       <Route exact path="/">
            <Home />
          </Route>
      <Route exact path="/onlineabsolute">
      <OnlineAb />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
