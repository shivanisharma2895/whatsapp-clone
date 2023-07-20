import { BiFilter } from "react-icons/bi"
import { BsFillChatLeftTextFill } from "react-icons/bs"
import { AiOutlineMore } from "react-icons/ai"
import { FaUsers } from "react-icons/fa"
import { contactList } from "../data/contact-list-data"
import { userData } from "../interfaces/userData"

const ContactContainer = (props: userData) => {

  return (
    <div className="contactItem">
      <img className="profileIcon" src={props.profilePic} alt="" />
      <div className="contactInfo">
        <span className="contactName">{props.name}</span>

        <span className="messageText"> {props.lastText}</span>
      </div>
      <span className="messageTime">{props.lastTextTime}</span>
    </div>
  );
}




const ContactList = () => {
  return (
    <div className='contact-list'>
      <div className='profileInfo'>
        <img
          className='profileImage'
          src='https://tse4.mm.bing.net/th?id=OIP.37mLTapohqg7soL2wzLFyQAAAA&pid=Api&P=0&h=180'
          alt=''
        />
        <FaUsers id="user" />
        <BsFillChatLeftTextFill id="msg-icn" />
        <AiOutlineMore id="line" />
      </div>
      <div className='searchBox'>

        <div className='searchContainer'>
          <img className='searchIcon' src='https://cdn-icons-png.flaticon.com/128/149/149852.png' alt='' />
          <input className='searchInput' placeholder='Search or start new chat' />

        </div>
        <BiFilter id="filter" />
      </div>
      {contactList.map((userData) => (<ContactContainer name={userData.name} profilePic={userData.profilePic}
        lastText={userData.lastText} lastTextTime={userData.lastTextTime} />))}
    </div>
  )
}
export default ContactList;