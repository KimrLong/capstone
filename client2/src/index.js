import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/styles.css';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import requireAuth from './requireAuth';
import Navbar from './components/layout/Navbar';
import BaseLayout from './components/layout/BaseLayout'
<<<<<<< HEAD
=======
import Purchase from './pages/Purchase';
>>>>>>> 3aacf2bc7a2862e5a2782e47caa1b26a09db49c9
import Account from './pages/Account'
import OtherAccount from './pages/OtherAccount';
import Events from './pages/Events'
import Chat from './pages/postComponents/PostManagement'
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
        {/* <Navbar/> */}
        {/* <Header/> */}
        <BaseLayout>
            <Switch>
              <Route exact path='/' component={App}/>
              <Route path="/account" component={requireAuth(Account)}/>
              <Route path="/otheraccount" component={OtherAccount}/>
              <Route path="/purchase" component={(Purchase)}/>
              <Route path='/chat' component={requireAuth(Chat)}/>
              <Route path='/cart' component={requireAuth(Cart)}/>

              <Route path='/events' component={Events}/>
              <Route path='/Support' component={Support}/>
              <Route path='/signin' component={Signin}/>
              <Route path='/signout' component={Signout}/>
              <Route path='/form' component={SignupForm}/>
            </Switch>
            </BaseLayout>
        </Router>
        {/* <Footer/> */}
        </Provider>
  </React.StrictMode>
  </>,
  document.getElementById('root')
);