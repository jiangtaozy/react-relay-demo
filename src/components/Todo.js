/*
 * Created by jemo on 2018-9-2.
 * Todo
 */

// OPTIONAL: Flow type generated after running `yarn relay`, 
// defining an Object type with shape of the fragment:
import type { Todo_todo } from './__generated__/Todo_todo.graphql'

import React, { Component } from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import ChangeTodoStatusMutation from './ChangeTodoStatusMutation'

type Props = {
  todo: Todo_todo,
}

class Todo extends Component<Props> {
  // Add a new event handler that fires off the mutation
  handleOnCheckboxChange = (e) => {
    const complete = e.target.checked
    ChangeTodoStatusMutation.commit(
      this.props.relay.environment,
      complete,
      this.props.todo,
    )
  }
  render() {
    const { todo: { complete, text } } = this.props
    return (
      <li>
        <div>
          <input
            checked={complete}
            type='checkbox'
            onChange={this.handleOnCheckboxChange}
          />
          <label>
            {text}
          </label>
        </div>
      </li>
    )
  }
}

export default createFragmentContainer(
  Todo,
  graphql`
    # As a convention, we name the fragment as
    # '<ComponentFileName>_<propName>'
    fragment Todo_todo on Todo {
      id
      complete
      text
    }
  `
)
