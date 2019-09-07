import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium'
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
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
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

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
          classes.push('red');
        }
        if (this.state.persons.length <= 1) {
          classes.push('bold');
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1>Hi, I'm a React App</h1>
                    <p className={classes.join(' ')}>This is really working</p>
                    <button
                        style={style}
                        onClick={this.togglePersonHandler}>
                        Toggle Persons
                    </button>
                    {persons}
                </div>
            </StyleRoot>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
    }

}

export default Radium(App);