import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {
    auth,
    createUserProfileDocument,
    // addCollectionAndDocuments,
} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';
// import { selectCollectionsForPreview } from './redux/shop/shop.selector';

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
            }

            setCurrentUser(userAuth);
            // addCollectionAndDocuments(
            //     'collections',
            //     collectionsArray.map(({ title, items }) => ({ title, items }))
            // );
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
                    <Route
                        exact
                        path="/signin"
                        // component={SignInUpPage}
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInUpPage />
                            )
                        }
                    />
                    <Route exact path="/checkout" component={CheckoutPage} />
                </Switch>
            </div>
        );
    }
}

// Import currentUser from user.reducer.js for redirecting when user signed in
// {user} destructed from state
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    // collectionsArray: selectCollectionsForPreview,
});

// As the second argument passed in to connect,
// mapDispatchToProps is used for dispatching actions to the store.
// dispath is a function of the Redux store,
// the only way to trigger a state change

const mapDispatchToProps = (dispatch) => ({
    // function that gets action object
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
