import { FC  , memo, Suspense, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { me } from './api/auth';
import { LS_LOGIN_TOKEN } from './api/base'; 
import { User } from './models/User';
import AppContainerPageLazy from './pages/AppContainer/AppContainer.lazy';
import AuthPageLazy from './pages/Auth/Auth.lazy';
import NotFoundPage from './pages/NotFound.page';
import { AppState, meFetchAction } from './store';



interface Props {
}

const App: FC<Props> = (props) => {

  const user= useSelector<AppState, User | undefined>((state) => state.me);
  const dispatch = useDispatch();
  
  const token=localStorage.getItem(LS_LOGIN_TOKEN);

  // This useEffect will only run for the first time as it has empty dependency. It there is a login_token of user in local storage then it will fetch user object from server using me() function amd setUser.
  useEffect(() => {    
    if(!token){
      return;
    }
    me().then((u) => dispatch(meFetchAction(u)));
  }, []); //Empty Dependency

  console.log("App rendering and token is "+ token);

  if(!user && token){  // Agar user hai aur token nahi hai , it means me() api call is still running in the background. And when user is returned we call setUser() which rerenders the app component.
    return <div>loading...</div>;
  }

  return (
    
      <Suspense fallback={
        <div className="text-red-500 ">Loading Page...</div>
      }>
        <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                {user ? <Redirect to="/dashboard"></Redirect> : <Redirect to="/login"></Redirect> }
              </Route>
              <Route path={["/login","/signup"]}>
              {user ? <Redirect to="/dashboard"></Redirect> : <AuthPageLazy /> }
              </Route> 
              <Route path={["/dashboard","/recordings","/lecture/:lectureNumber","/editAccount"]}>
                {user ? <AppContainerPageLazy/> : <Redirect to="/login"></Redirect> }
              </Route>
              <Route>
                <NotFoundPage></NotFoundPage>
              </Route>
            </Switch>
      </BrowserRouter>
    </Suspense>
  );
};


export default  memo(App);

