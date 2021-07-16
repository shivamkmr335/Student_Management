import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppContainerPage from './pages/AppContainer.page';
import AuthPage from './pages/Auth.page';
import LoginPage from './pages/Login.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
        </Route>
        <Route path={["/login","/signup"]}>
          <AuthPage></AuthPage>
        </Route> 
        <Route path={["/dashboard","/recordings"]}>
          <AppContainerPage></AppContainerPage>
        </Route>
        <Route></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
