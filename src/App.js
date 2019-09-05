import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: "Manu", age: 29},
            {name: "Stephanie", age: 26}
        ],
        otherState: 'some other value'
    };

    switchNameHandler = (newName) => {
        // this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: "Manu", age: 29},
                {name: "Stephanie", age: 27}
            ]
        })
    };

    nameChangeHandler = event => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: "Stephanie", age: 27}
            ]
        })
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('Maximilian')}>
                    Switch Name
                </button>
                <Person
                    name={(this.state.persons[0].name)}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'Max!')}>
                    Racing, Football
                </Person>
                <Person
                    name={(this.state.persons[1].name)}
                    age={this.state.persons[1].age}
                    changed={this.nameChangeHandler}
                />
                <Person
                    name={(this.state.persons[2].name)}
                    age={this.state.persons[2].age}
                />
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
    }

}

export default App;