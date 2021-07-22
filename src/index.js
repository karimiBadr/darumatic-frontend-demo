import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store';
import {fetchData} from './actions/actions';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "./pages/home";
import DetailsPage from "./pages/details";

const store = configureStore();

function loadData() {
    store.dispatch(fetchData('https://restcountries.eu/rest/v1/all'));
}

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>

                    <hr />

                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/details">
                            <DetailsPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
