import React from 'react';

import TaskList from '../components/TaskList'
import * as constants from '../constants.js'

class TaskListsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: [],
      tomorrow: []
    }
  }

  componentDidMount() {
    let tasksConst = constants.TASKS
    let today = []
    let tomorrow = []

    tasksConst.forEach((task) => {
      if (task.column) {
        (task.column === "today") ? today = today.concat(task) : tomorrow = tomorrow.concat(task)
      }
    })

    this.setState({
      today,
      tomorrow
    })
  }

  render(){

    return(
      <div>
        <TaskList
          header={"Today"}
          list={this.state.today}
        />
        <TaskList
          header={"Tomorrow"}
          list={this.state.tomorrow}
        />
      </div>
    )
  }
}


export default TaskListsContainer
