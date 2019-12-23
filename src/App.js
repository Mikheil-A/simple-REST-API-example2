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
    console.log(2222222, drawerOpenState, userData);

    this.setState({
      ...this.state,
      isDrawerOpened: drawerOpenState,
      user: userData
    });
  };

  drawerContent = () => {
    let content = null;
    if (this.state.isDrawerOpened) {
      content = <div>
        <h1>User info: </h1>

        <p>{this.state.user.name}</p>
        <p>{this.state.user.username}</p>
        <p>{this.state.user.email}</p>
        <p>{this.state.user.phone}</p>
        <p>{this.state.user.website}</p>
        <p>{this.state.user.company.name}</p>
      </div>
    }

    return (
      <div
        role="presentation"
        onClick={() => this.toggleDrawer(false)}
        onKeyDown={() => this.toggleDrawer(false)}
      >

        {content}
      </div>
    )
  };


  render() {
    return (
      <div>
        <Users onRowClick={(clickedUserRecord) => this.toggleDrawer(true, clickedUserRecord)}/>

        <Drawer anchor="right" open={this.state.isDrawerOpened} onClose={() => this.toggleDrawer(false)}>
          <User userDataObj={this.state.user}/>
          {this.drawerContent()}
        </Drawer>
      </div>
    );
  }
}

export default App;
