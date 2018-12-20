import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import jsCookie from 'js-cookie'
import { FlashContext } from './FlashProvider'

export const AuthContext = React.createContext()

const emptyAuth = () => ({
  loggedIn: false,
  username: '',
  token: ''
})

const signUpUrl = `${process.env.BACKEND_HOST}/sign_up`
const signInUrl = `${process.env.BACKEND_HOST}/sign_in`

const AuthProvider = props => {
  const [auth, setAuth] = useState({ ...props })
  const { setFlash } = useContext(FlashContext)
  useEffect(
    () => {
      setFlash({
        messages: auth.loggedIn ?
          ['Welcome, you have sucessfully signed in']
        : ['Please sign up or sign in to continue']
      })
    },
    [auth.loggedIn]
  )

  const setCookies = (username, token) => {
    jsCookie.set('loggedIn', true)
    jsCookie.set('username', username)
    jsCookie.set('token', token)
  }

  const removeCookies = () => {
    ['loggedIn', 'username', 'token'].forEach(key => jsCookie.remove(key))
  }

  const signIn = (username, password) => {
    axios.post(signInUrl, { username, password })
      .then(({ data }) => {
        setAuth({ loggedIn: true, username, token: data.token })
        setCookies(username, data.token)
      })
      .catch(({ response }) => {
        setAuth(emptyAuth)
        removeCookies()
        setFlash({
          messages: response.data.errors,
          status:   'danger',
          open:     true
        })
      })
  }

  const signUp = (username, password, password_confirmation) => {
    axios.post(signUpUrl, { username, password, password_confirmation })
      .then(({ data }) => {
        setAuth({ loggedIn: true, username, token: data.token })
        setCookies(username, data.token)
      })
      .catch(({ response }) => {
        setAuth(emptyAuth)
        removeCookies()
        setFlash({
          messages: response.data.errors,
          status:   'danger',
          open:     true
        })
      })
  }

  const signOut = () => {
    removeCookies()
    location.reload()
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, signIn, signUp, signOut }} >
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;
