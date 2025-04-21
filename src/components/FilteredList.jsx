import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    // Added the "type" state variable with default value "all"
    this.state = {
      search: "",
      type: "all"
    };
  }

  // Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  // Updated to set the state of the "type" state variable
  onFilter = (type) => {
    this.setState({type});
  }

  // Updated to filter by both search term and type
  filterItem = (item) => {
    // First check if the item matches the search text
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    
    // Then check if it matches the selected type or if "all" is selected
    const matchesType = this.state.type === "all" || item.type.toLowerCase() === this.state.type;
    
    // Item must match both conditions
    return matchesSearch && matchesType;
  }

  render() {
    return (
      <div className="filter-list">
        {/* Dropdown menu with three options */}
        <Dropdown onSelect={this.onFilter} className="mb-3">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {this.state.type.charAt(0).toUpperCase() + this.state.type.slice(1)}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="all">All</Dropdown.Item>
            <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item>
            <Dropdown.Item eventKey="vegetable">Vegetables</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;