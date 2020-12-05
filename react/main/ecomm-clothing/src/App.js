import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    // To make app to know any change in user status
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            // console.log(user);
            // this.setState({ currentUser: user });

            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth); // @firebase.utils.js

                // Subscribe to userRef & get data to store in our app
                userRef.onSnapshot((snapshot) => {
                    // console.log(snapshot);
                    // console.log(snapshot.data());
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data(),
                        },
                    });
                });
            } else {
                this.setState({ currentUser: userAuth });
            }
        });
    }

    // Close subscriptions
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInUp} />
                </Switch>
            </div>
        );
    }
}

export default App;
