import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../assets/logo.svg';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>
                    Sign Out
                </div>
            ) : (
                <Link className="option" to="/signin">
                    Sign In
                </Link>
            )}
        </div>
    </div>
);

// As the first argument passed in to connect,
// mapStateToProps is used for selecting the part of the data
// from the store that the connected component needs.

// The first argument is state = the entire Redux store state

const mapStateToProps = (state) => ({
    // Return object that gets data to prop of component
    currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
