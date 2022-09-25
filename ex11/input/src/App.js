import React from 'react';
import logo from './logo.svg';
import { Form } from './components/Form';
import  List  from './components/List';
import  {Photo}  from './components/Photo';
import  PhotoList  from './components/PhotoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Form />
      <List />
      <Photo />
      <PhotoList/>
    </div>
  );
}

export default App;
