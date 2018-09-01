/*
 * Created by jemo on 2018-9-1
 * User
 */

import React, { Component } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import environment from '../environment'

class User extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query UserQuery {
            viewer {
              id
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if(error) {
            return <div>Error!</div>
          }
          if(!props) {
            return <div>Loading...</div>
          }
          return <div>User ID: {props.viewer.id}</div>
        }}
      />
    )
  }
}

export default User
