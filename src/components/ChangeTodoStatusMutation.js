/*
 * Created by jemo on 2018-9-2.
 * ChangeTodoStatusMutation
 */

import { graphql, commitMutation } from 'react-relay'

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
  mutation ChangeTodoStatusMutation($input: ChangeTodoStatusInput!) {
    changeTodoStatus(input: $input) {
      todo {
        id
        complete
      }
    }
  }
`

function getOptimisticResponse(complete, todo) {
  return {
    changeTodoStatus: {
      todo: {
        complete: complete,
        id: todo.id,
      },
    },
  }
}

function commit(
  environment,
  complete,
  todo,
) {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: { complete, id: todo.id },
      },
      optimisticResponse: getOptimisticResponse(complete, todo),
    }
  )
}

export default { commit }
