import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import UserProfile from './components/auth/UserProfile';
import Forum from './components/Forum';

import Header from './components/layout/Header';
import UserProfile from './components/auth/UserProfile';
import Forum from './components/auth/Forum';

import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/styles.scss';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import requireAuth from './requireAuth';
import Navbar from './components/layout/Navbar';
import Footer from './components/Footer';
import Account from './pages/Account'
import Holder from './pages/Holder';
import Event from './pages/Events'
import Chat from './pages/Chat'
import Cart from './pages/Cart'
import Support from './pages/Support'
import SignupForm from './pages/SignupForm'


import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';


import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

const saveToLocalStorage = (reduxGlobalState) => {
  // serialization = converting js object to a string
  try{    
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializeState);
  }
  catch(e){
    console.log(e);
  }}
  const loadFromLocalStorage = (params) => {
  const serializeState = localStorage.getItem('state');  
  if(serializeState === null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState);  //returns JS object reprsenting local storage
  }
}

const persistedState = loadFromLocalStorage();// initializing redux store

// initializing redux store
// requires a reducer. Second argument is for redux dev-tools extension.
let store = createStore(reducer, persistedState,  
  compose(
  applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    store.subscribe(()=>{  saveToLocalStorage(store.getState());
  })
  
//provider hooks react to redux.  
//Must pass redux instance to provider via "store" prop.

ReactDOM.render(
<>
      <React.StrictMode>
      <Provider store={store}>
      <Router>
        <Navbar/>
        {/* <Header/> */}
            <Switch>
              <Route exact path='/' component={App}/>
              <Route path="/account" component={requireAuth(Account)}/>
              <Route path='/events' component={Event}/>


              <Route path='/Chat' component={Chat}/>
              <Route path='/cart' component={Cart}/>
              <Route path='/holder' component={Holder}/>

              <Route path='/Support' component={Support}/>

              <Route path='/signin' component={Signin}/>
              <Route path='/signout' component={Signout}/>

              <Route path='/form' component={SignupForm}/>

            </Switch>
        </Router>
        </Provider>
        {/* <Footer/> */}
  </React.StrictMode>
  </>,
  document.getElementById('root')
);