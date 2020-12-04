import React from 'react';
import './App.css';
import Home from './components/Home';
import { Redirect, Route, Switch} from 'react-router-dom';

class App extends React.Component {
 render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login-spotify" render={() => {
          window.location.href=`${process.env.REACT_APP_PARTYPLAYLIST_API}/api/auth/spotify`;
        }} />
      </Switch>    
      </div>
    );
  }
}

export default App;
