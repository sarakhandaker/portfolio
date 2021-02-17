import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/NavBar';
import Header from './components/Header'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Read from './components/Read'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">
        <Navbar></Navbar>
        <div className="App-header">
          <Header></Header>
        </div>
        <div className='About'>
          <About></About>
        </div>
        <div className='Projects'>
          <Projects></Projects>
        </div>
        <div className='Blog'>
          <Blog></Blog>
        </div>
        <div className='Read'>
          <Read></Read>
        </div>
      </div>
    </>
  );
}

export default App;
