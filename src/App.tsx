import { FC , lazy , memo, Suspense} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LS_LOGIN_TOKEN } from './api/base';
import NotFoundPage from './pages/NotFound.page';

const AppContainerPageLazy = lazy(()=> import("./pages/AppContainer.page"));
const AuthPageLazy = lazy(()=> import("./pages/Auth.page"));


interface Props {
}

const App: FC<Props> = (props) => {

  const token=localStorage.getItem(LS_LOGIN_TOKEN);

  return (
    <Suspense fallback={
      <div className="text-red-500 ">Loading Page...</div>
    }>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard"></Redirect> : <Redirect to="/login"></Redirect> }
        </Route>
        <Route path={["/login","/signup"]}>
        {token ? <Redirect to="/dashboard"></Redirect> : <AuthPageLazy/> }
        </Route> 
        <Route path={["/dashboard","/recordings","/lecture/:lectureNumber"]}>
          {token ? <AppContainerPageLazy/> : <Redirect to="/login"></Redirect> }
        </Route>
        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </BrowserRouter>
  </Suspense>
  );
};

App.defaultProps = {
}

export default  memo(App);

