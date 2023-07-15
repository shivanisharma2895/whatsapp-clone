import { Message } from "./Message";
import { MessageDiv } from "./MessageDiv";



const ConversationComponent = () => {
    return (
        <div className="container2">
            <div className="profileHeader">
                <img className="profilePic" src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" alt="" />
                Akash
            </div>
            <div className="messageContainer">
                <MessageDiv className="messagediv" >
                    <Message className="message">
                        Hello , how are you?
                    </Message>
                </MessageDiv>

                <MessageDiv className="messagediv" >
                    <Message className="message">
                        Hello , how are you?
                    </Message>
                </MessageDiv>



            </div>
            <div className="chatBox">
                <div className="searchcontainer2">
                    <img className="emoji" src="https://tse4.mm.bing.net/th?id=OIP.FA1O0pvoQo9JFBePBz_R5wHaHa&pid=Api&P=0&h=180" alt="" />
                    <input className="searchInput2" placeholder="Type a message" />
                </div>

            </div>
        </div>

    )
}
export default ConversationComponent;