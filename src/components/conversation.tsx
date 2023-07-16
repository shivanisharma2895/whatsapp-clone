import { Message } from './Message'
import { conversation } from '../data/conversation'
import './conversation.scss'
import { ChatBox } from './chat-box'
import { ProfileHeader } from './profile-header'

const ConversationComponent = () => {
  return (
    <div id='conversation-component'>
      <ProfileHeader />
      <div className='messageContainer'>
        {conversation.Akash.map((message) => {
          return <Message key={message.id} message={message.message} sender={message.sender} />
        })}
      </div>
      <ChatBox />
    </div>

  )
}
export default ConversationComponent
