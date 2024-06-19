import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'; // Import createRoot

import Header from './layouts/Header';
import Dashboard from './Accounts/Dashboard';

import { Provider } from 'react-redux';
import store from '../Store';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className='container'>
                     <Dashboard/> 
                    </div>
                </Fragment>
            </Provider>
        );
    }
}

const appDiv = document.getElementById('apps');
const root = ReactDom.createRoot(appDiv); // Correct usage of createRoot
root.render(<App />);
