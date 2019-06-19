import React from 'react'

const TaskCard = props => {
  return(
    <div id="task-card">
      <div id="task-card-left">
        <input type="checkbox"/>
        <div id="task-card-info">
          <span id="task-card-app-designation">Birdseye - Application</span>
          <span id="task-card-name">{props.name}</span>
        </div>
      </div>
      <div id="task-card-right">
        Today<br/>
        8:00 am
      </div>
    </div>
  )
}

export default TaskCard;
