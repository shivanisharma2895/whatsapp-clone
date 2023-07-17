import { BiFilter } from "react-icons/bi"
import { BsFillChatLeftTextFill } from "react-icons/bs"
import { AiOutlineMore } from "react-icons/ai"
import { FaUsers } from "react-icons/fa"
import { BiCheckDouble } from "react-icons/bi"
const ContactContainer = () => {
  return (
    <div className="contactItem">
      <img className="profileIcon" src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" alt="" />
      <div className="contactInfo">
        <span className="contactName">Akash</span>
        <BiCheckDouble id="check" /> <span className="messageText">Hello</span>
      </div>
      <span className="messageText">10:30 PM</span>
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
        <BiFilter id="filter" />
        <div className='searchContainer'>
          <img className='searchIcon' src='https://cdn-icons-png.flaticon.com/128/149/149852.png' alt='' />
          <input className='searchInput' placeholder='Search or start new chat' />

        </div>

      </div>
      <ContactContainer />
      <ContactContainer />
      <ContactContainer />
      <ContactContainer />
      <ContactContainer />
      <ContactContainer />
      <ContactContainer />
      <ContactContainer />
      <ContactContainer />
      <ContactContainer />
      <ContactContainer />
    </div>
  )
}
export default ContactList;