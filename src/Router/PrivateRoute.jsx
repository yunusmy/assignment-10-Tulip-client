/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import LoadingSpinner from '../components/Common/LoadingSpinner'
import AuthContext from '../context/AuthContext/AuthContext'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  const location = useLocation()

  if (loading) return <LoadingSpinner />
  if (user) return children
  return <Navigate to='/signIn' state={location.pathname} />
}

export default PrivateRoute
