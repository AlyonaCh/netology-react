
// import './style/index.css';
import {React, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Routes, Router, Navigate} from 'react-router-dom'
import Menu from './components/Menu'
import List from './components/List'
import Form from './components/Form'
import Item from './components/Item'
import Error from './components/Error'
import ItemsProvider from './providers/Items'

function App() {

  return (
    <ItemsProvider>
      <BrowserRouter>
        <div>
          <Menu />
          <div className="page">
          <Routes>
            <Route path="/posts" element={<List/>} />
            <Route path="/posts/new" element={<Form/>} />
            <Route path="/posts/:id" element={<Item />} />
            <Route path="*" element={<Error/>}/>
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ItemsProvider>
    
  );
}

export default App;
