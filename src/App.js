import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from "./components/Users/Users";

function App() {

  const testMethod = (row) => {
    console.log(2222, row);
  };

  return (
    <div>
      <h1>hi there</h1>
      <Users onRowClick={() => testMethod}/>
    </div>
  );
}

export default App;
