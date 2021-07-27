import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LS_LOGIN_TOKEN } from './api/base';
import AppContainerPage from './pages/AppContainer.page';
import AuthPage from './pages/Auth.page';
import NotFoundPage from './pages/NotFound.page';

function App() {
  const token=localStorage.getItem(LS_LOGIN_TOKEN);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard"></Redirect> : <Redirect to="/login"></Redirect> }
        </Route>
        <Route path={["/login","/signup"]}>
        {token ? <Redirect to="/dashboard"></Redirect> : <AuthPage/> }
        </Route> 
        <Route path={["/dashboard","/recordings","/lecture/:lectureNumber"]}>
          {token ? <AppContainerPage/> : <Redirect to="/login"></Redirect> }
        </Route>
        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
