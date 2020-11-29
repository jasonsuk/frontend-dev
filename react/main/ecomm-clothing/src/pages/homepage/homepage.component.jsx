import React from 'react';

import Directory from '../../components/directory/directory.component';

// Load sass styles
import './homepage.styles.scss';

// When the state or lifecyle methods don't need being specified
// functional component (as opposed to class component) would just do!

const HomePage = () => {
    return (
        <div className="homepage">
            <Directory className="directory-menu" />
        </div>
    );
};

export default HomePage;
