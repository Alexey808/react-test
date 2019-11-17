import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import ReduxTest from "./components/redux-test/redux-test";
import TestReactFragment from "./components/test-components/react-fragment/react-fragment";
import ListItems from './components/list-items/list-items';
import Events from './components/test-components/events/events';
import TestPackageImmutable from "./components/test-components/test-package-immutable/immutable";
import {SimpleTestComponent} from "./components/test-components/simple-test";
import RenderFunctionsPattern from "./components/test-components/render-functions-pattern/render-functions-pattern";
import PropertyElements from "./components/test-components/property-elements/property-elements";
import Children from "./components/test-components/children/children";
import HigherComponentContainer from "./components/test-components/higher-order-component/higher-componentn-container";
import RenderChildren from "./components/test-components/render-children/render-children";
// import HocCompose, {HocInitComponent} from "./components/test-components/hoc-compose/hoc-compose";
import HocContext from "./components/test-components/hoc-context/hoc-context";

import {BrowserRouter as Router, Route, Switch, Redirect, Link} from "react-router-dom";
import ItemPage1 from "./components/test-components/reoute/item-page1";
import ItemPage2 from "./components/test-components/reoute/item-page2";
import ItemPage from "./components/test-components/reoute/item-page";
import ItemPage3 from "./components/test-components/reoute/item-page3";
import ItemPage4Redirect from "./components/test-components/reoute/item-page4-redirect";

// import './components/redux-test/redux-simple';

function Stack() {
	return (
		<div>
			<div className="App">
				<header className="App-header">
					<div className={'container'}>
						<div className={'left'}></div>
						<div className={'top'}></div>
						<div className={'right'}></div>
						<div className={'bottom'}></div>
						<img src={logo} className="App-logo" alt="logo" />
					</div>
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

			<ListItems/>
			<Events/>
			<TestPackageImmutable/>
			<ReduxTest/>
			<TestReactFragment/>
			<SimpleTestComponent/>
			<RenderFunctionsPattern/>
			<PropertyElements/>
			<Children/>
			<HigherComponentContainer/>
			<HocContext/>
			<RenderChildren/>

			{/*<HocInitComponent/>*/}
			{/*<HocCompose/> /!*не доделанный*!/*/}
		</div>
	);
}

function App() {
  return (
  	 <div>
		<Router>
			<Switch>

				<Route path="/" render={() => (
					<React.Fragment>
						<h4>test url</h4>
						<ul>
							<li><Link to="/itempage1/">/itempage1/</Link> => работа с Link</li>
							<li><Link to="/itempage2/">/itempage2/</Link>  => работа с Link</li>
							<li><Link to="/itempage/123">/itempage/123</Link> => работа с передачей параметров в адресной страке</li>
							<li><Link to="/itempage3/">/itempage3/</Link> => работа с withRouter</li>
							<li><Link to="/itempage4/">/itempage4/</Link> => работа с redirect</li>
						</ul>
					</React.Fragment>
				)} exact/>

				<Route path="/itempage1/" component={ItemPage1} />

				<Route path="/itempage2/" component={ItemPage2} />

				<Route path="/itempage/:id?" render={({match}) => (<ItemPage id={match.params.id}/>)} />

				<Route path="/itempage3/" component={ItemPage3} />

				<Route path="/itempage4/" component={ItemPage4Redirect} />

				{/** Обработка не существующих адресов **/}
				{/*<Redirect to="/"/>*/}
				<Route render={()=>(<h4>page not found</h4>)}/>

			</Switch>
		</Router>
    </div>
  );
}

export default App;



