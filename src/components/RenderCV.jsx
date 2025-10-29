import CV from './CV';
import Profile from './Profile';

function RenderCV({ profileData }) {
    return (
        <CV>
            <Profile
                profileData={profileData}
            />
        </CV>
    )
}

export default RenderCV