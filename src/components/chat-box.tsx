import './chat-box.scss'

export const ChatBox = () => {
    return (
        <div className='chatBox'>
            <div className='searchcontainer2'>
                <img
                    className='emoji'
                    src='https://tse4.mm.bing.net/th?id=OIP.FA1O0pvoQo9JFBePBz_R5wHaHa&pid=Api&P=0&h=180'
                    alt=''
                />
                <input className='searchinput' placeholder=' Type a message' />
            </div>
        </div>

    );
}