import { useRouter } from 'next/router';
import React from 'react';
import { useAuth } from '~/hooks/use-auth';

type Props ={
  children: React.ReactNode
}


const PrivateRoute: React.FC<Props> = ({children}) => {
const router =  useRouter()

  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) router.replace('/signin')

  return (
    <>{children}</>
  )
}

export default PrivateRoute
