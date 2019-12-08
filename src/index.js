import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter , useHistory, HashRouter, } from 'react-router-dom';

// const store = configureStore({ history });


ReactDOM.render(<BrowserRouter history={useHistory} basename={process.env.PUBLIC_URL}><App/></BrowserRouter >, document.getElementById('root'));
// ReactDOM.render((
//     <Router history = {browserHistory}>
//        <Route path = "/" component = {App}>
//        </Route>
//     </Router>
//  ), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
