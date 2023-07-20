import { userData } from "../interfaces/userData";
import "./contact-container.scss"



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
export default ContactContainer;