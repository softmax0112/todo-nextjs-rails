import { useContext } from 'react'
import { FlashContext } from './FlashProvider'

const Flash = () => {
  const { flash } = useContext(FlashContext)
  return (
    <div>
      {
        flash.messages.map(
          message => <p key={message}>{ message }</p>
        )
      }
    </div>
  )
}

export default Flash
