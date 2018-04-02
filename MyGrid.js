import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class myGrid extends Component {
  constructor () {
    super()
    this.state = {
      departments: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleIdClick = this.handleIdClick.bind(this);
    this.handleDepartmentClick = this.handleDepartmentClick.bind(this);
  }

  handleClick () {
    axios.get('http://localhost:3000/departments')
        .then(response => this.setState({department: response.data}))
        //.then(response => console.log(response))
  }
   handleIdClick(event){
    event.preventDefault();
    let Id = document.getElementsByName("Id")[0].value;
    console.log("Id: "+ Id);
    axios.get('http://localhost:3000/byId?id='+ id, {"Id" : Id} )
     .then(response => this.setState({id: response.data}))
  }

  handleDepartmentClick(event){
   event.preventDefault();
    let departments = document.getElementsByName("Department")[0].value;
   console.log("Department: "+ departments);
  axios.get('http://localhost:3000/byDepartment?department='+ department, {"Department" : department} )
     .then(response => this.setState({departments: response.data}))
  }
  render () {
    return (
      <div>
      <Header />
      <h1>140302199 Grid</h1>
       <button onClick='button' onClick={this.handleClick}>Show all departments</button>
       <form>
         <label htmlFor="departments">Search by department</label>
         <input id="departments" type="text" name="departments" />
         <button onClick = {this.handleDepartmentClick}>Submit</button>
         <label htmlFor= "Id">Search by ID</label>
         <input id="Id" type="text" name="Id"/>
         <button onClick ={this.handleIdClick}>Submit</button>
       </form>
       <table>
        <thead>
         <tr>
          <th>Id</th>
          <th>Department</th>
          <th>Manager</th>
         </tr>
        </thead>
        <tbody>
         { this.state.Department.map((departments, key) => {
                   return (
                      <tr key={key}>
                        <td>{Departments.Id}</td>
                        <td>{Departments.Department}</td>
                        <td>{Departments.Manager}</td>
                      </tr>
                    )
                   })
         }
         </tbody>
        </table>
       </div>
    )
  }
}
export default myGrid
