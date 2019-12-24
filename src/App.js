import React from 'react';
import './App.css';
import Users from "./components/Users/Users";
import User from "./components/User/User";
import Posts from "./components/Posts/Posts";
import {Route, Switch, Redirect} from 'react-router-dom';



const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => (
        <Redirect to="/users"/>
      )}/>
      <Route path="/users" component={Users}/>
      <Route path="/user/:id" component={User}/>
      <Route path="/posts/:userId" component={Posts}/>
    </Switch>
  )
};

export default App;
