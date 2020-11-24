import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        };
        // this.handleSearch = this.handleSearch.bind(this);
        // instead we use an arrow function for handlesearch func
    }

    // LIFECYCLE METHOD
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value });
    };

    filterMonsters = () => {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return filteredMonsters;
    };

    render() {
        return (
            <div className="App">
                <h1> Monsters Rolodex </h1>
                <SearchBox
                    placeholder={'Search monster'}
                    eventHandler={this.handleSearch}
                />
                <CardList monsters={this.filterMonsters()} />
            </div>
        );
    }
}

export default App;
