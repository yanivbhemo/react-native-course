import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import LoginForm from './components/LoginForm'
import Router from './Router'

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBVKyNAS8-jeG8i4jzYMlQtEgflUmtkJpY",
            authDomain: "manager-app-66028.firebaseapp.com",
            databaseURL: "https://manager-app-66028.firebaseio.com",
            projectId: "manager-app-66028",
            storageBucket: "manager-app-66028.appspot.com",
            messagingSenderId: "211875645016",
        }

        firebase.initializeApp(config)
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App