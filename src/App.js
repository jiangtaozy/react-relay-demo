/*
 * Created by jemo on 2018-9-1.
 * App
 */

import React, { Component } from 'react'
//import User from './components/User'
//import UserTodoList from './components/UserTodoList'
import ViewerTodoList from './components/ViewerTodoList'

class App extends Component {
  render() {
    return (
      <div>
        {/*
        <User />
        <UserTodoList
          userID='VXNlcjptZQ=='
        />
        */}
        <ViewerTodoList />
      </div>
    )
  }
}

export default App
