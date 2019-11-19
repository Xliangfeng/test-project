import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '@/pages/Home'
import Login from '@/pages/Login'

export default (
    <Suspense >
      <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/' component={Home}/>
      </Switch>
    </Suspense>
)
