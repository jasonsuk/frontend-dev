import React from 'react';

import Directory from '../../components/directory/directory.component';

// Load styled-components
import { HomepageContainer } from './homepage.styles';

// When the state or lifecyle methods don't need being specified
// functional component (as opposed to class component) would just do!\

const HomePage = () => {
    return (
        <HomepageContainer className="homepage">
            <Directory className="directory-menu" />
        </HomepageContainer>
    );
};

export default HomePage;
