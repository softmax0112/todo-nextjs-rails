import { useContext, useState } from 'react'
import { AuthContext } from './AuthProvider'

const emptyUser = {
  username: '',
  password: '',
  passwordConfirmation: ''
}

const Authentication = props => {
  const { auth, signIn, signUp } = useContext(AuthContext)
  const [user, setUser] = useState(emptyUser)

  const handleSubmit = event => {
    event.preventDefault()
    if (user.new) {
      signUp(user.username, user.password, user.passwordConfirmation)
    } else {
      signIn(user.username, user.password)
    }
    setUser({ ...user, ...emptyUser })
  }

  const toggleNew = () => {
    setUser({ ...user, new: !user.new  })
  }

  if (auth.loggedIn) return props.children
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          value={user.username}
          onChange={ e => setUser({ ...user, username: e.target.value }) }
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={ e => setUser({ ...user, password: e.target.value }) }
        />
      </div>
      {
        user.new &&
        <div>
          <label htmlFor="passwordConfirmation">Confirm</label>
          <input
            name="passwordConfirmation"
            type="password"
            value={user.passwordConfirmation}
            onChange={ e => setUser({ ...user, passwordConfirmation: e.target.value }) }
          />
        </div>
      }
      <button type="submit">
        { user.new ? "Sign Up" : "Sign In" }
      </button>
      <button type="button" onClick={toggleNew}>
        { user.new ? "Sign In Instead" : "Sign Up Instead" }
      </button>
    </form>
  )
}

export default Authentication
