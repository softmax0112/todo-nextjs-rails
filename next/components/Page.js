import Authentication from './Authentication'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import Flash from './Flash'

const Page = props => {
  const { auth, signOut } = useContext(AuthContext)
  return(
    <React.Fragment>
      {
        auth.loggedIn &&
        <button onClick={signOut}>Sign Out ({auth.username})</button>
      }
      <Flash />
      <Authentication>
        {props.children}
      </Authentication>
    </React.Fragment>
  )
}

export default Page
