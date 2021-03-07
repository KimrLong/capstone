// import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Chat from './pages/Chat';
import Support from './pages/Support';
import Footer from './components/Footer';
import './App.css';
import Chart from './components/ChartComponents/Chart';
import TicketInfo from './pages/TicketInfo';
import Navbar from './components/layout/Navbar';

import React from 'react';
const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/account' component={Account}/>
          <Route path='/chart' component={Chart}/>
          <Route path='/tickets' component={TicketInfo}/>
          <Route path='/Chat' component={Chat}/>
          <Route path='/Support' component={Support}/>
          </Switch>
          </Router>
          </div>
          <Footer/>
          </div>          
  )
}

export default App