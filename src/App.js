import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Container/Home/index';
import OnlineAb from './Container/Home/onlineAbsolute';
import OnlineTime from './Container/Home/onlineTime'


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
          <Route exact path="/onlineTimed">
            <OnlineTime />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
