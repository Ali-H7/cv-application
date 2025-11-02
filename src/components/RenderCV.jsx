import { useState } from 'react';
import CV from './CV';
import Profile from './Profile';


function RenderCV({ profileData, workExperienceData }) {


    return (
        <CV>
            <Profile
                profileData={profileData}
            />
            <div className="cv-sections">
                <div className='work-experience'>
                    <h1 className='cv-section'>Work Experience</h1>
                    {workExperienceData.map((experience) => {
                        return (

                            <div className="work-experience-block">
                                <h2>{experience.jobTitle}</h2>
                                <div>
                                    <div className='work-experience-company'>
                                        <h3 >{experience.companyName}</h3>
                                        <h3>{experience.workingDate}</h3>
                                    </div>
                                    <ul className='work-experience-achivements'>
                                        {experience.listOfAchievements.map(achievement => <li>{achievement.achievement}</li>)}
                                    </ul>
                                </div>
                            </div>

                        )
                    }
                    )}
                </div>
            </div>
        </CV>
    )
}

export default RenderCV