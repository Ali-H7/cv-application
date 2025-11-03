import { useState } from 'react';
import CV from './CV';
import Profile from './Profile';
import Section from './Section';

function RenderCV({ profileData, workExperienceData, educationData }) {


    return (
        <CV>
            <Profile
                profileData={profileData}
            />
            <div className="cv-sections">
                <Section section="work-experience" data={workExperienceData} />
                <Section section="education" data={educationData} />

            </div>
        </CV>
    )
}

export default RenderCV

