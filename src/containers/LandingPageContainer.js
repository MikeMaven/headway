import React from 'react';

import TaskCard from '../components/TaskCard'
import SearchBar from '../components/SearchBar'
import TaskListsContainer from './TaskListsContainer'
import * as constants from '../constants.js'

class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    let tasksConst = constants.TASKS

    this.setState({
      tasks: tasksConst
    })
  }

  render(){

    let allTasks = this.state.tasks.map((task) => {
      return(
        <TaskCard
          key={task.id}
          name={task.name}
        />
      )
    })

    return(
      <div>
        <p id="sign-in-top-text">Tasks - Filled</p>
        <div id="application-container">
          <div id="app-left-menu">
            <h3>Tasks</h3>
            {allTasks}
          </div>
          <div id="app-task-lists-container">
            <SearchBar />
            <TaskListsContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPageContainer;
