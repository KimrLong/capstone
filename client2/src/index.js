import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from'./global-styles'
import App from './App';
import Welcome from './components/Welcome';
import Feature from './components/Feature'; //protect
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';

import Chart from './components/ChartComponents/Chart';

import Forum from './components/Forum';


import BaseLayout from './components/layout/BaseLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import  styled  from  'styled-components';
import  './assets/styles.scss';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import requireAuth from './requireAuth';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


// initializing redux store
// requires a reducer. Second argument is for redux dev-tools extension.
let store = createStore(reducer, {},  
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

//provider hooks react to redux.  
//Must pass redux instance to provider via "store" prop.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/welcome' component={Welcome}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/chart' component={Chart}/>
            <Route path='/feature' component={requireAuth(Feature)}/>
            <Route path='/signout' component={Signout}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/forum' component={requireAuth(Forum)}/>
          </Switch>
      </BaseLayout>
      </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);