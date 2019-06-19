import React from 'react'

import TaskCard from './TaskCard'
import AddTaskButton from './AddTaskButton'

const TaskList = props => {
  let tasks = props.list.map((task) => {
    return(
      <TaskCard
        key={task.id}
        name={task.name}
      />
    )
  })

  return(
    <div id="task-list">
      <h3 id="task-list-header">
        {props.header}
        <div id="task-list-sub-header">{props.date}</div>
      </h3>
      <AddTaskButton />
      {tasks}
    </div>
  )
}

export default TaskList;
