import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Employees from '../components/Employees'

const HomePage = () => {
  const [employees, GetEmployees] = useState([])

  const getDataFromApi = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/TopEmployee/Employees'
    )
    const response = resp.data
    GetEmployees(resp.data)
    console.log(resp)
    console.log(response)
  }

  useEffect(() => {
    getDataFromApi()
  }, [])
 
  return (


    <div>
      {employees.map(Emp => {
        return (
          <Employees
            id={Emp.id}
            firstName={Emp.firstName}
            lastName={Emp.lastName}
            profileImage={Emp.profileImage}
            jobTitle={Emp.jobTitle}
            isFullTime={Emp.isFullTime}
          />
        )
      })}
    </div>
  )
}

export default HomePage
