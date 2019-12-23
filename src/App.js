import React from 'react';
import './App.css';
import Users from "./components/Users/Users";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';


const App = () => {

  const [state, setState] = React.useState({
    isDrawerOpened: false,
    user: {}
  });

  const toggleDrawer = drawerOpenState => event => {
    console.log('toggleDrawer');


    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    if (state.isDrawerOpened !== drawerOpenState) {

      setState({...state, isDrawerOpened: drawerOpenState});
    }

  };

  const testMethod = () => {
    console.log('tes tmethod');
  };

  const drawerContent = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >

      <h1>it fucking works</h1>

    </div>
  );

  const openUserDrawer = (row) => {
    toggleDrawer(true);
    testMethod();
    console.log(2222, row);
  };

  return (
    <div>
      <Users onRowClick={openUserDrawer}/>

      <Button onClick={toggleDrawer(true)}>Open Right</Button>

      <Drawer anchor="right" open={state.isDrawerOpened} onClose={toggleDrawer(false)}>
        {drawerContent()}
      </Drawer>
    </div>
  );
};

export default App;
