import React from 'react'

const TaskCard = props => {
  return(
    <div id="task-card">
      <input type="checkbox"/>
      <div id="task-card-info">
        <span id="task-card-app-designation">Birdseye - Application</span>
        <span id="task-card-name">{props.name}</span>
      </div>
    </div>
  )
}

export default TaskCard;
