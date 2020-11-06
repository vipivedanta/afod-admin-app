import React, { Component, useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import { Provider } from 'react-redux';
import store from './store';

import Amplify, {Auth} from 'aws-amplify'
import awsconfig from './aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
Amplify.configure(awsconfig);



const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const App = ()=> {

  let [user, setUser] = useState(null)
  const isLoggedIn = async () => {
    try {
      let user = await Auth.currentAuthenticatedUser()
      setUser(user)
    } catch {
      setUser(null)
    }
  }

  useEffect(() => {
    isLoggedIn()
  }, []);

  console.log(user);
    return (
      <Provider store={store}>
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              {/* <AmplifySignOut>
              <TheLayout></TheLayout>
              </AmplifySignOut> */}
              <Route exact path="/" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              { user==null &&
                <Route exact path="/" name="Login Page" render={props => <Login {...props}/>} />
              }

              <Route path="/" name="Home" render={props => <TheLayout {...props}/>}/>
            </Switch>
          </React.Suspense>
      </HashRouter>
      </Provider>
    );
}

export default App;
