import { Message } from './message'
import { conversation } from '../data/conversation'
import './conversation.scss'

const ConversationComponent = () => {
  return (
    <div id='conversation-component'>
      {/* extract this into component */}
      <div className='profileHeader'>
        <img
          className='profilePic'
          src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
          alt=''
        />
        Akash
      </div>

      <div className='messageContainer'>
        {conversation.Akash.map((message) => {
          return <Message key={message.id} message={message.message} sender={message.sender} />
        })}
      </div>

      {/* extract this into component */}
      <div className='chatBox'>
        <div className='searchcontainer2'>
          <img
            className='emoji'
            src='https://tse4.mm.bing.net/th?id=OIP.FA1O0pvoQo9JFBePBz_R5wHaHa&pid=Api&P=0&h=180'
            alt=''
          />
          <input className='searchInput2' placeholder='Type a message' />
        </div>
      </div>
    </div>
  )
}
export default ConversationComponent
