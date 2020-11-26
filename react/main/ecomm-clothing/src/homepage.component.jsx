import React from 'react';

// Load sass styles
import './homepage.styles.scss';

// When the state or lifecyle methods don't need being specified
// functional component (as opposed to class component) would just do!

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Hats</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Jackets</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Sneakers</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Womens</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Mens</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
