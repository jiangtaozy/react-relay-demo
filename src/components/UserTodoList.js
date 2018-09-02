/*
 * Created by jemo on 2018-9-2.
 * UserTodoList
 */

import React, { Component } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../environment'

type Props = {
  userID: string,
}

class UserTodoList extends Component<Props> {
  render() {
    const { userID } = this.props
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query UserTodoListQuery($userID: ID!) {
            node(id: $userID) {
              id
            }
          }
        `}
        variables={{userID}}
        render={({error, props}) => {
          if(error) {
            return <div>Error!</div>
          }
          if(!props) {
            return <div>Loading...</div>
          }
          return <div>User ID: {props.node.id}</div>
        }}
      />
    )
  }
}

export default UserTodoList
