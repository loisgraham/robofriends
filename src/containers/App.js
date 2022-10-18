import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { robots } from '../robots';
import './App.css';

// class App extends React.component {
//   constructor() {
//     super()
//     this.state = {
//       robots: robots,
//       searchfield: ''
//     }
//   }

class App extends React.component {
  constructor(props) {
    super(props)
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

componentDIDMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> {
      return response.json();
    })
    .then(users => {
      this.setState({ robots: robots})
    });
}

  onSearchChange(event) {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
