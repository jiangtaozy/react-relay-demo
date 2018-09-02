/*
 * Created by jemo on 2018-9-2.
 * TodoList
 */

// OPTIONAL: Flow type generated after running `yarn relay`,
// defining an Object type with shape of the fragment:
import type { TodoList_userTodoData } from './__generated__/TodoList_userTodoData.graphql'

import React, { Component } from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import Todo from './Todo'

type Props = {
  userTodoData: TodoList_userTodoData,
}

class TodoList extends Component<Props> {
  render() {
    const { userTodoData: { totalCount, completedCount, todos }} = this.props
    return (
      <section>
        <input
          checked={totalCount === completedCount}
          type='checkbox'
          readOnly
        />
        <ul>
          {todos.edges.map(edge => {
            return (
              <Todo
                key={edge.node.id}
                todo={edge.node}
              />
            )
          })}
        </ul>
      </section>
    )
  }
}

export default createFragmentContainer(
  TodoList,
  graphql`
    # As a convention, we name the fragment as
    # '<ComponentFileName>_<PropName>'
    fragment TodoList_userTodoData on User {
      todos(
        first: 2147483647 # max GraphQLInt, to fetch all todos
      ) {
        edges {
          node {
            id,
            # We use the fragment defined by the child Todo componenthere
            ...Todo_todo
          },
        },
      },
      id,
      totalCount,
      completedCount,
    }
  `,
)
