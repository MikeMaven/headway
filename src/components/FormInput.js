import React from 'react'

const FormInput = props => {
  return(
    <div>
      <label>{props.label}</label>
      <input type={`${props.type}`} />
    </div>
  )
}

export default FormInput;
