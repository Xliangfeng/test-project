import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'

export default (
    <Suspense >
      <Switch>
        <Route path='/home' component={Home}/>
      </Switch>
    </Suspense>
)
