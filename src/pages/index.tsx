import type { NextPage } from 'next'
import Link from 'next/link'
import { useAuth } from '~/hooks/use-auth'
import PrivateRoute from '../components/PrivateRoute'

const Home: NextPage = () => {
  const auth = useAuth()

  if (auth.isLoading) {
    return <div>ローディング</div>
  }

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">
        <p>{auth.isAuthenticated ? 'ログイン済' : '未ログイン'}</p>
        <p>{auth.isAuthenticated}</p>
        <PrivateRoute>ログインしたので見れます</PrivateRoute>
        <Link href="/signin">ログイン</Link>
      </h1>
    </div>
  )
}

export default Home
