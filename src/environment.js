/*
 * Created by jemo on 2018-9-1.
 * relay environment
 */

import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

function fetchQuery(
  operation,
  variables,
) {
  return fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  })
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  stroe: new Store(new RecordSource()),
})

export default environment
