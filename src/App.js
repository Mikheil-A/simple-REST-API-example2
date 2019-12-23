import React, {Component} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import User from "./components/User/User";
import Drawer from '@material-ui/core/Drawer';



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

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>', userId);
    // todo redirect to user page
  };


  render() {
    return (
      <div>
        <Users onUserClick={(clickedUserRecord) => this.toggleDrawer(true, clickedUserRecord)}/>

        <Drawer anchor="right" open={this.state.isDrawerOpened} onClose={() => this.toggleDrawer(false)}>
          <User userDataObj={this.state}
                onCloseDrawer={() => this.toggleDrawer(false)}
                onSeeMoreInfo={(id) => this.redirectToUserPage(id)}/>
        </Drawer>
      </div>
    );
  }
}

export default App;
