import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Employee = props => {
  const [employee, GetEmployee] = useState([])
 

  const getDataFromApi2 = async () => {
    console.log('employee id ' + props.match.params.id)
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/TopEmployee/Employees/${props.match.params.id}`
    )
    
    GetEmployee(resp.data)
   
  }

  useEffect(() => {
    getDataFromApi2()
  }, [])

  if (employee.isFullTime = true) {
       
     employee.isFullTime = "full time employee"
  }


  if (employee.id = 968) {
       
    employee.jobTitle = "Full Stack Developer"
 }

 if (employee.ptoHour = 0) {
       
  employee.ptoHour = "0"
} else {
  employee.ptoHour =  employee.ptoHour
}
  

  return (
    <div className="emp1">
      <ul>
        <img src={employee.profileImage} />
        <li>name: {employee.firstName + ' ' + employee.lastName}</li>
        <li>job title: {employee.jobTitle}</li>
        <li>status: {employee.isFullTime}</li>
        <li>hire date: {employee.hiredDate}</li>
        <li>birthday: {employee.birthday}</li>
        <li>job discription: {employee.jobDescription}</li>
        <li>phone number: {employee.phoneNumber}</li>
        <li>adress: {employee.address}</li>
        <li>city: {employee.city}</li>
        <li>zip: {employee.zip}</li>
        <li>state: {employee.state}</li>
        <li>emergency contact: {employee.emergencyContactPerson}</li>
        <li>emergency phone number: {employee.emergencyContactPhone}</li>
        <li>emergency adress: {employee.emergencyContactAddress}</li>
        <li>pto hours: {employee.ptoHour}</li>
        <li>company key: {employee.companyKey}</li>
        
      </ul>
     
    </div>
  )
}

export default Employee
