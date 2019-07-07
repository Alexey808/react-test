import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Crud from "./components/crud/Crud";

function App() {
  return (
  	 <div>

	    <div className="App">
	      <header className="App-header">
	        <img src={logo} className="App-logo" alt="logo" />
	        <p>
	          Test react crud
	        </p>
	        <a
	          className="App-link"
	          href="https://reactjs.org"
	          target="_blank"
	          rel="noopener noreferrer"
	        >
	          Learn React
	        </a>
		      <Main/>
	      </header>
	    </div>

	    <div>
		    <Crud/>
	    </div>
    </div>
  );
}

export default App;
