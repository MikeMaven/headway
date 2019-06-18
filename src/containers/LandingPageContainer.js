import React from 'react';

import TaskCard from '../components/TaskCard'
import * as constants from '../constants.js'

class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      today: [],
      tomorrow: []
    }
  }

  componentDidMount() {
    let tasksConst = constants.TASKS
    let tasks = []
    let today = []
    let tomorrow = []


    tasksConst.forEach((task) => {
      if (task.column === "today") {
        tasks = tasks.concat(task)
        today = today.concat(task)
      } else if (task.column === "tomorrow") {
        tasks = tasks.concat(task)
        tomorrow = tomorrow.concat(task)
      } else {
        tasks = tasks.concat(task)
      }
    })

    this.setState({
      tasks: tasks,
      today: today,
      tomorrow: tomorrow
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

    let todayTasks = this.state.today.map((task) => {
      return(
        <TaskCard
          key={task.id}
          name={task.name}
        />
      )
    })

    let tomorrowTasks = this.state.tomorrow.map((task) => {
      return(
        <TaskCard
          key={task.id}
          name={task.name}
        />
      )
    })

    return(
      <div>
        {allTasks}
        {todayTasks}
        {tomorrowTasks}
      </div>
    )
  }
}

export default LandingPageContainer;
