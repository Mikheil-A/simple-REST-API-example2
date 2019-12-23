import React, {Component} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import User from "./components/User/User";
import Drawer from '@material-ui/core/Drawer';
import axios from "axios";
import UserDrawer from "./components/UserDrawer/UserDrawer";



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpened: false,
      user: {}
    };
  }


  toggleDrawer = (drawerOpenState, userData = {}) => {
    this.setState({
      ...this.state,
      isDrawerOpened: drawerOpenState,
      user: userData
    });
  };

  redirectToUserPage = userId => {
    this.toggleDrawer(false);
    this.fetchUserById(userId);
  };

  userComponent = () => {
    if (this.state.isDrawerOpened) {
      return <UserDrawer user={this.state.user}
                         onCloseDrawer={() => this.toggleDrawer(false)}
                         onSeeMoreInfo={(id) => this.redirectToUserPage(id)}/>;
    }
    return null;
  };

  fetchUserById = (id) => {
    axios.get('https://jsonplaceholder.typicode.com/users/' + id)
      .then((res) => {
        console.log(222222222, res);
        // todo redirect to user page from here
      });
  };


  render() {
    return (
      <div>
        <Users onUserClick={(clickedUserRecord) => this.toggleDrawer(true, clickedUserRecord)}/>

        <Drawer anchor="right" open={this.state.isDrawerOpened} onClose={() => this.toggleDrawer(false)}>
          {this.userComponent()}
        </Drawer>
      </div>
    );
  }
}

export default App;
