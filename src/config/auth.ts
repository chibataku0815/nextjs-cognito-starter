const Auth = {
  region: process.env.NEXT_AUTH_REGION,
  userPoolId: process.env.NEXT_AUTH_USER_POOL_ID,
  userPoolWebClientId: process.env.NEXT_AUTH_USER_POOL_WEB_CLIENT_ID,
  cookieStorage: {
    domain: 'localhost',
    secure: false
  },
  authenticationFlowType: 'USER_SRP_AUTH',
}

export default Auth
