import React from 'react'
import Detail from '../pages/Detail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({login, scrollPosition}) => {
  return login === true ? 
    <Detail scrollPosition={scrollPosition}/>
    :
    <Navigate to={'/login'}/>
}

export default PrivateRoute