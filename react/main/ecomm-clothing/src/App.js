import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
    unsubscribeFromAuth = null;

    // To make app to know any change in user status
    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            // console.log(user);
            // this.setState({ currentUser: user });

            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth); // @firebase.utils.js

                // Subscribe to userRef & get data to store in our app
                userRef.onSnapshot((snapshot) => {
                    // dispatch to user.action.js
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                });
            } else {
                setCurrentUser(userAuth);
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
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInUp} />
                </Switch>
            </div>
        );
    }
}

// As the second argument passed in to connect,
// mapDispatchToProps is used for dispatching actions to the store.
// dispath is a function of the Redux store,
// the only way to trigger a state change

const mapDispatchToProps = (dispatch) => ({
    // function that gets action object
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
