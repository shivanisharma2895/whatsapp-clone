import './profile-header.scss'
import { BiSearch } from "react-icons/bi"
import { AiOutlineMore } from "react-icons/ai"
export const ProfileHeader = () => {
    return (
        <div className='profileHeader'>
            <img
                className='profilePic'
                src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
                alt=''
            />
            Akash<BiSearch id='search' />
            <AiOutlineMore id='line-more' />
        </div>
    );
}