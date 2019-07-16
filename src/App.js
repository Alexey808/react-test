import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Crud from "./components/crud/crud";
import ReduxTest from "./components/redux-test/redux-test";
import TestReactFragment from "./components/test-components/react-fragment/react-fragment";

// import './components/redux-test/redux-simple';

function App() {
  return (
  	 <div>

	    {/*<div className="App">*/}
	      {/*<header className="App-header">*/}
	        {/*<div className={'container'}>*/}
		        {/*<div className={'left'}></div>*/}
		        {/*<div className={'top'}></div>*/}
		        {/*<div className={'right'}></div>*/}
		        {/*<div className={'bottom'}></div>*/}
		        {/*<img src={logo} className="App-logo" alt="logo" />*/}
	        {/*</div>*/}

	        {/*<a*/}
	        {/*  className="App-link"*/}
	        {/*  href="https://reactjs.org"*/}
	        {/*  target="_blank"*/}
	        {/*  rel="noopener noreferrer"*/}
	        {/*>*/}
	        {/*  Learn React*/}
	        {/*</a>*/}
		     {/* <Main/>*/}
	      {/*</header>*/}
	    {/*</div>*/}

	    <Crud/>
		 {/*<ReduxTest/>*/}
		 {/*<TestReactFragment/>*/}
    </div>
  );
}

export default App;



