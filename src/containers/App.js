import React from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import {setRobots, requestRobots} from '../actions';

class App extends React.Component{

  state = {
    robots: [],
    searchField: ''
  }

  componentDidMount(){
    this.props.requestRobots();
  }

  render(){
    const {robots, error, isPending, searchField, setRobots} = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return isPending?
    <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={(e) => setRobots(e.target.value)}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );

  }
}

 
  


const mapStateToProps = ({requestRobots, setRobots}) => ({
  searchField: setRobots.searchField,
  isPending: requestRobots.isPending,
  robots: requestRobots.robots,
  error: requestRobots.error


})



export default connect(mapStateToProps, {setRobots, requestRobots})(App);