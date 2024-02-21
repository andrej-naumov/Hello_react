import ProfileCard from "../../components/ProfileCard/ProfileCard";
import './styles.css';
import {profile1, profile2, profile3} from './data';

function Lesson18() {
    return (
        <div className="profile-cards">
            <ProfileCard profileInfo={profile1}/>
            <ProfileCard profileInfo={profile2}/>
            <ProfileCard profileInfo={profile3}/>
        </div>

    );
}

export default Lesson18;