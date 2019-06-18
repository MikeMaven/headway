import React from 'react'
import {FormControl, Input, InputLabel} from '@material-ui/core';

import FormInput from '../components/FormInput'


const SignInContainer = props => {
  return(
    <div>
      <p id="sign-in-top-text">Log In - Sign Up</p>
      <div id="sign-in-container">
        <div id="sign-in-input-container">
          <div id="sign-in-input-form">
            <img src="birdseye-logo.png" width="50px" height="50px"/>
            <span id="welcome-text">Welcome to Birdseye!</span>
            <div id="form-container">
              <FormControl>
                <FormInput
                  label={"Email Address"}
                  type={"text"}
                />
                <FormInput
                  label={"Password"}
                  type={"password"}
                />
                <button class="button tiny" id="sign-in-button">SIGN IN</button>
                <button class="button tiny" id="create-account-button">CREATE AN ACCOUNT</button>
              </FormControl>
            </div>
          </div>
        </div>
        <div id="sign-in-splash">

        </div>
      </div>
    </div>
  )
}

export default SignInContainer;
