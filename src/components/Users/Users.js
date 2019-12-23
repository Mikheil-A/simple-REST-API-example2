import React, {Component} from 'react';
import './Users.scss';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class Users extends Component {
  classes = makeStyles({
    table: {
      minWidth: 650,
    },
  });


  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }


  fetchUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        this.setState({
          users: res.data
        });
      });
  };


  render() {
    return (
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
                    <span id="full-name" onClick={() => this.props.onUserClick(row)}>
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
    );
  }
}

export default Users;
