import React from 'react'

function About() {
    return (
        // Ghost Element - not showing on DOM
        // but needed for JSX
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0.0. This is part of a React crash course</p>
        </React.Fragment>
    )
}

export default About;
