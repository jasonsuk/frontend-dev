import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage.component';

// Temporary DOM - HatsPage
const HatsPage = () => {
    return (
        <div>
            <h1>HATS!</h1>
        </div>
    );
};

function App() {
    return (
        <div>
            {/* <Link to="/hats">To Hats</Link> */}
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop/hats" component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
