import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Link, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Users from './components/Users/Users';
import User from './components/User/User';


// const routing = (
//   <Router>
//     <div>
//       <Switch>
//         <Route exact path="/" render={() => (
//           <Redirect to="/users"/>
//         )}/>
//         <Route path="/users" component={Users}/>
//         <Route path="/user/:id" component={User}/>
//       </Switch>
//     </div>
//   </Router>
// );


ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
