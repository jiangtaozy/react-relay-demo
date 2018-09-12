/*
 * Created by jemo on 2018-9-2.
 * ViewerTodoList
 */

import React, { Component } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import TodoList from './TodoList'
import environment from '../environment'
import { Link } from 'found'

class ViewerTodoList extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ViewerTodoListQuery {
            viewer {
              id
              # Re-use the fragment here
              ...TodoList_userTodoData
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>
          }
          if (!props) {
            return <div>Loading...</div>
          }
          return (
            <div>
              <div>Todo list for User {props.viewer.id}:</div>
              <TodoList userTodoData={props.viewer} />
              <Link
                to='/'>
                go home
              </Link>
            </div>
          )
        }}
      />
    )
  }
}

export default ViewerTodoList
