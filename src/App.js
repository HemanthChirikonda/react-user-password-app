import React from 'react';
import UserLoginForm from './components/UserLoginForm';
import {Switch,Route} from "react-router-dom"
import routes from './routes';
import Gencode from './components/Gencode'
import ResetPassword from './components/ResetPassword';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
  <div>
    <Switch>
    
      <Route path={routes.register}>
        <RegisterForm/>
      </Route>
      <Route path={routes.genCode}>
        <Gencode/>
      </Route>
      <Route path={routes.resetpassword}>
        <ResetPassword/>
      </Route>
      <Route path={routes.dashboard}>
        <Dashboard/>
      </Route>
      <Route path={'/'}>
        <UserLoginForm/>
      </Route>
    </Switch>
  </div>

  );
}

export default App;
