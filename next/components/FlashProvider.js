import { useState } from 'react'

export const FlashContext = React.createContext()

const FlashProvider = props => {
  const [flash, setFlash] = useState({
    messages: []
  })

  return(
    <FlashContext.Provider value={{ flash, setFlash }} >
      { props.children }
    </FlashContext.Provider>
  )
}

export default FlashProvider
