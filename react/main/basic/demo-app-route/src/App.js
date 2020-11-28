import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'; 

import './App.css';

const Homepage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => props.history.push('/links')}>Links</button>
    </div>
  )
}

const Linkpage = ({match}) => {
  console.log({match});
  return (
    <div>
      <h1>Link Page</h1>
      <ul style={{listStyle:'none'}}>
        <li>
          <Link to={`${match.url}/1`}>To Link 1</Link> 
        </li>
        <li>
          <Link to={`${match.url}/2`}>To Link 2</Link>
        </li>
        <li>
          <Link to={`${match.url}/3`}>To Link 3</Link>
        </li>
      </ul>
    </div>
  )
}

const LinkPageDetail = ({history, match}) => {
  console.log({history, match});
  return (
    <div>
    <h1>Link Page Detail {match.params.id}</h1>
      <div>
        <Link to='/links'>To Link Page</Link>
        <br></br>
        <br></br>
        <button onClick={()=>history.push('/')}>To Homepage</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/links' component={Linkpage}/>
        <Route path='/links/:id' component={LinkPageDetail}/>        
      </Switch>
    </div>
  );
}

export default App;
