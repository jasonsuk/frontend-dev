import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';
// import { computeHeadingLevel } from '@testing-library/react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    // LIFECYCLE METHOD
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }

    filterMonsters() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return filteredMonsters;
    }

    render() {
        return (
            <div className="App">
                <SearchBox
                    placeholder={'Search monster'}
                    eventHandler={(e) =>
                        this.setState({ searchField: e.target.value })
                    }
                />
                <CardList monsters={this.filterMonsters()} />
            </div>
        );
    }
}

export default App;
