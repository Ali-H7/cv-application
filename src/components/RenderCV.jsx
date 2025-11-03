import CV from './CV';
import Profile from './Profile';
import Section from './Section';

function RenderCV({ data }) {
    return (
        <CV>
            <Profile
                profileData={data.profile}
            />
            <div className="cv-sections">
                <Section section="work-experience" data={data.workExperience} />
                <Section section="education" data={data.education} />

            </div>
        </CV>
    )
}

export default RenderCV

