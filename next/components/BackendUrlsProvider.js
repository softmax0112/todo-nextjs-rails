import { useContext } from 'react'
import { AuthContext } from './AuthProvider'

export const BackendContext = React.createContext()

const BackendUrlsProvider = props => {
  const { auth } = useContext(AuthContext)

  const tasksUrl = `${process.env.BACKEND_HOST}/tasks?token=${auth.token}`

  const taskUrl = task => (
    `${process.env.BACKEND_HOST}/tasks/${task.id}?token=${auth.token}`
  )

  return (
    <BackendContext.Provider value={{ tasksUrl, taskUrl }} >
      { props.children }
    </BackendContext.Provider>
  )
}

export default BackendUrlsProvider
