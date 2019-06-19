import React from 'react';
import moment from 'moment';

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
      <div id="task-lists-container">
        <TaskList
          header={"Today"}
          list={this.state.today}
          date={moment(Date.now()).format('MMMM Do YYYY')}
        />
        <TaskList
          header={"Tomorrow"}
          list={this.state.tomorrow}
          date={moment(new Date()).add(1,'days').format('MMMM Do YYYY')}
        />
      </div>
    )
  }
}


export default TaskListsContainer
