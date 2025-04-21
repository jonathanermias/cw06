
import React, { Component } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld.jsx';
import Counter from './components/Counter.jsx';
import FilteredList from './components/FilteredList.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';


// Created produce list using const variable keyword
const produceList = [
  { name: "Apple", type: "fruit" },
  { name: "Orange", type: "fruit" },
  { name: "Banana", type: "fruit" },
  { name: "Pear", type: "fruit" },
  { name: "Broccoli", type: "vegetable" },
  { name: "Carrot", type: "vegetable" },
  { name: "Spinach", type: "vegetable" },
  { name: "Cucumber", type: "vegetable" }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Created an instance of the HelloWorld Component */}
                <HelloWorld />

                {/* Created an instance of the Counter Component */}
                <Counter />

                {/* Created an instance of the FilteredList Component with the produce list */}
                <FilteredList items={produceList} />
            </div>
        );
    }
}

export default App;
