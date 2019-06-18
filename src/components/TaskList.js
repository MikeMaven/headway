import React from 'react'

import TaskCard from './TaskCard'

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
    <div>
      <h4>{props.header}</h4>
      {tasks}
    </div>
  )
}

export default TaskList;
