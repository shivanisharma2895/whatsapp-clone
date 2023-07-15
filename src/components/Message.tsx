import './message.scss'
import { MessageProps } from '../interfaces/message'

export function Message(props: MessageProps) {
  return (
    <div className='message-container'>
      <div className={props.sender === 'Shivani' ? 'message my-message' : 'message other-message'}>{props.message}</div>
    </div>
  )
}
