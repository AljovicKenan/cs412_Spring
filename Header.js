import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {

    render () {
      return (
        <div>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/deparments">department</Link>
          </li>
          <li>
          <Link to = "/MyGrid">myGrid</Link>
          </li>
       </div>
     )
   }
 }
 export default Header
