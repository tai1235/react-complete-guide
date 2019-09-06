import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 'sfdhmrytj', name: 'Max', age: 28},
            {id: 'asdrtdfhb', name: "Manu", age: 29},
            {id: 'vghjsrtgh', name: "Stephanie", age: 26}
        ],
        otherState: 'some other value',
        showPerson: false
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);

        const person = {...this.state.persons[personIndex]};
        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    };

    deletePersonHandler = index => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons: persons
        })
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({
            showPerson: !doesShow
        })
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

        let persons = null;

        if (this.state.showPerson) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => <Person
                        click={this.deletePersonHandler.bind(this, index)}
                        changed={(event) => {this.nameChangeHandler(event, person.id)}}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                    />)}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working</p>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
    }

}

export default App;