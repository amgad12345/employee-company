import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { setState, useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const AddEmployees = props => {
  const [addemployee, AddEmployee] = useState({})
  const [profileImage, SetProfileImg] = useState('')
  const [firstName, SetFirstName] = useState('')
  const [lastName, SetLastName] = useState('')
  const [jobTitle, SetJobTitle] = useState('')
  const [jobDescription, SetjobDescription] = useState('')
  const [birthday, SetBirthday] = useState('')
  const [phoneNumber, SetPhoneNumber] = useState('')
  const [address, SetAddress] = useState('')
  const [city, SetCity] = useState('')
  const [zip, SetZetzip] = useState('')
  const [state, SetState] = useState('')
  const [ContactPerson, SetContactPerson] = useState('')
  const [emergencyContactPhone, SetEmergencyContactPhone] = useState('')
  const [emergencyContactAddress, SetEmergencyContactAddress] = useState('')
  const [ptoHour, SetPtoHour] = useState()
  const [companyKey, SetCompanyKey] = useState('')
  

  const addemp = async () => {
    console.log(' iam first name' + firstName)
    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/TopEmployee/Employees',
      {
        profileImage:profileImage,
        firstName: firstName,
        lastName: lastName,
        jobDescription: jobDescription,
        jobTitle: jobTitle,
        birthday: birthday,
        phoneNumber: phoneNumber,
        address: address,
        city: city,
        zip: zip,
        state: state,
        ContactPerson: ContactPerson,
        emergencyContactPhone: emergencyContactPhone,
        emergencyContactAddress: emergencyContactAddress,
        ptoHour: ptoHour,
        companyKey: companyKey,
      }
    )

    AddEmployee(resp.data.id)
    console.log('heyyyyyyyyyyy' + resp.data)
  
  }

  return (
    <>
      <div className = "addemp">
        <h2>Add Employee</h2>

        <form>
        <input
            placeholder="profile image url"
            value={profileImage}
            onChange={e => SetProfileImg(e.target.value)}
            name="profileImage"
            type="text"
            
          />
          <input
            placeholder="First name"
            value={firstName}
            onChange={e => SetFirstName(e.target.value)}
            name="firstName"
            type="text"
           
          />
          <input
            placeholder="Last name"
            value={lastName}
            onChange={e => SetLastName(e.target.value)}
            name="lastName"
            type="text"
           
            
          />
         
        
          <input
            placeholder="Job title"
            value={jobTitle}
            onChange={e => SetJobTitle(e.target.value)}
            name="jobTitle"
            type="text"
           
          />
          <input
            placeholder="companyKey"
            value={companyKey}
            onChange={e => SetCompanyKey(e.target.value)}
            name="companyKey"
            type="text"
            
          />
          
          <input
            placeholder="birthday"
            value={birthday}
            onChange={e => SetBirthday(e.target.value)}
            name="birthday"
            type="any"
           
          />
          <input
            placeholder="phone number"
            value={phoneNumber}
            onChange={e => SetPhoneNumber(e.target.value)}
            name="phoneNumber"
            type="number"
          
          />
          <input
            placeholder="address"
            value={address}
            onChange={e => SetAddress(e.target.value)}
            name="address"
            type="text"
           
          />
          <input
            placeholder="city"
            value={city}
            onChange={e => SetCity(e.target.value)}
            name="city"
            type="text"
            
          />
          <input
            placeholder="zip"
            value={zip}
            onChange={e => SetZetzip(e.target.value)}
            name="jobTitle"
            type="number"
          
          />
          <input
            placeholder="state"
            value={state}
            onChange={e => SetState(e.target.value)}
            name="state"
            type="text"
            
          />
          <input
            placeholder="Contact Person"
            value={ContactPerson}
            onChange={e => SetContactPerson(e.target.value)}
            name="ContactPerson"
            type="text"
            
          />
          <input
            placeholder="emergency phone"
            value={emergencyContactPhone}
            onChange={e => SetEmergencyContactPhone(e.target.value)}
            name="emergencyContactPhone"
            type="number"
           
          />
          <input
            placeholder="emergencyContactAddress"
            value={emergencyContactAddress}
            onChange={e => SetEmergencyContactAddress(e.target.value)}
            name="SetEmergencyContactAddress"
            type="text"
            
          />
          <input
            placeholder="ptoHour"
            value={ptoHour}
            onChange={e => SetPtoHour(e.target.value)}
            name="ptoHour"
            type="any"
           
          />
          <input
            className = "jd"
            placeholder="job description"
            value={jobDescription}
            onChange={e => SetjobDescription(e.target.value)}
            name="description"
            type="text"
           
          />

          <button type="submit" onClick={addemp}>
            Add
          </button>
        </form>
            
      </div>
    </>
  )
}

export default AddEmployees
