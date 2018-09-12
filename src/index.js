import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'
import { BrowserProtocol, queryMiddleware } from 'farce'
import {
  createFarceRouter,
  createRender,
  makeRouteConfig,
  Route,
} from 'found'
import { Resolver } from 'found-relay'
import environment from './environment'
import registerServiceWorker from './registerServiceWorker'
import User from './components/User'
import UserTodoList from './components/UserTodoList'
import ViewerTodoList from './components/ViewerTodoList'

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: makeRouteConfig(
    <Route
      path='/'>
      <Route
        Component={User}
      />
      <Route
        path='todo'
        Component={UserTodoList}
        userID='VXNlcjptZQ=='
      />
      <Route
        path='todos'
        Component={ViewerTodoList}
      />
    </Route>,
  ),
  // todo
  render: createRender({}),
})

ReactDOM.render(
  <Router resolver={new Resolver(environment)} />,
  document.getElementById('root')
)

registerServiceWorker()
