import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Employee from './pages/Employee'
import AddEmployees from './pages/AddEmployees'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = props => {
  return (
    <Router>
      <header>
        <h1 className="title">Top Employees</h1>
        <nav className = "navbar">
          <ul className="links">
            <li>
              <Link className="first" to="/">Go Home</Link>
             </li>
             <li>
              <Link className="second"to="/Employees/Add">Add Employee</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/Employee/:id" component={Employee}></Route>
        <Route exact path="/Employees/Add" component={AddEmployees}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
