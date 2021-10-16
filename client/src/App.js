import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Homepage from "./components/Homepage/Homepage"

function App() {
  return (
    <div className="app-container custom-center">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
