import React, {Component} from 'react';
import './Users.scss';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Drawer from "@material-ui/core/Drawer";
import UserDrawer from "../UserDrawer/UserDrawer";
import {jsonplaceholderInstance as axios} from '../../axios';
import {Redirect} from 'react-router-dom';



class Users extends Component {
  classes = makeStyles({
    table: {
      minWidth: 650,
    },
  });


  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isDrawerOpened: false,
      selectedUser: {},
      selectedUserId: null
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }


  fetchUsers = () => {
    axios.get('/users')
      .then((res) => {
        this.setState({
          users: res.data
        });
      });
  };

  toggleDrawer = (drawerOpenState, userData = {}) => {
    this.setState({
      ...this.state,
      isDrawerOpened: drawerOpenState,
      selectedUser: userData
    });
  };

  redirectToSelectedUserPage = userId => {
    this.toggleDrawer(false);
    this.fetchUserById(userId);
  };

  userComponent = () => {
    if (this.state.isDrawerOpened) {
      return <UserDrawer user={this.state.selectedUser}
                         onCloseDrawer={() => this.toggleDrawer(false)}
                         onSeeMoreInfo={(id) => this.redirectToSelectedUserPage(id)}/>;
    }
    return null;
  };

  fetchUserById = (id) => {
    axios.get('/users/' + id)
      .then((res) => {
        this.setState({
          ...this.state,
          selectedUser: res.data,
          selectedUserId: id
        });
      });
  };


  render() {
    if (this.state.selectedUserId) {
      return <Redirect to={{
        pathname: `/user/${this.state.selectedUserId}`,
        state: {user: this.state.selectedUser}
      }}/>;
    }

    return (
      <div>
        <TableContainer component={Paper}>
          <Table className={this.classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Full name</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Website</TableCell>
                <TableCell align="right">Company</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.users.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <span id="full-name" onClick={() => this.toggleDrawer(true, row)}>
                      {row.name}
                    </span>
                  </TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">st. {row.address.street}, {row.address.city}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">{row.website}</TableCell>
                  <TableCell align="right">{row.company.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Drawer anchor="right" open={this.state.isDrawerOpened} onClose={() => this.toggleDrawer(false)}>
          {this.userComponent()}
        </Drawer>
      </div>
    );
  }
}

export default Users;
