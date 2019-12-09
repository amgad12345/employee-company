import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Employees = props => {
 
  return (
    <body>
      <section className="employee">
        <ul>
          <img src={props.profileImage} />
          <li>  Employee id: {props.id}</li>
          <li> Name:  {props.firstName + ' ' + props.lastName}</li>
          <li>Job Title: {props.jobTitle}</li>
          <li>{props.isFullTime === true ? ('full time employee') : ('part time employee')} </li>
          <Link to={`/Employee/${props.id}`}>Employee information</Link>
        </ul>
      </section>
    </body>
  )
}

export default Employees
