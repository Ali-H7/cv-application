import { useState } from 'react';
import '../styles/Edit.css'
import Input from './Input';
import EditProfileSection from './EditProfileSection';
import deleteIcon from '../../public/delete.svg'
import addIcon from '../../public/add.svg'


function Edit({ profileData, handleProfileEdits, workExperienceData, handleWorkExperienceEdits, deleteWorkExperienceData, addWorkExperienceData, deleteAchivement, addAchivement }) {
    const editSections = ['Profile', 'Work Experience', 'Education', 'Skills']
    const [section, setSection] = useState(0);

    return (
        <div className='edit'>
            <div className="sections">
                {editSections.map((sectionLabel, index) =>
                    <button className={section === index ? "selected" : ""} onClick={() => { setSection(index) }}>
                        {sectionLabel}
                    </button>)}
            </div>
            {section === 0 && <EditProfileSection profileData={profileData} handleProfileEdits={handleProfileEdits} />}
            {section === 1 && <div className='work-experience-edit'>
                <button onClick={addWorkExperienceData}>
                    <img src={addIcon} alt="Add Icon" />
                </button>
                {workExperienceData.map((experience, i) => {
                    return (
                        <div key={experience.id}>
                            <details>
                                <summary>
                                    <h3>Work Experience #{i + 1}</h3>
                                    <button onClick={() => deleteWorkExperienceData(experience.id)}>
                                        <img src={deleteIcon} alt="Delete Icon" />
                                    </button>
                                </summary>
                                <Input
                                    label='Job Title'
                                    inputType='text'
                                    inputValue={experience.jobTitle}
                                    handleOnChange={(e) => handleWorkExperienceEdits(experience.id, e.target.value, "jobTitle")}
                                />
                                <Input
                                    label='Company Name'
                                    inputType='text'
                                    inputValue={experience.companyName}
                                    handleOnChange={(e) => handleWorkExperienceEdits(experience.id, e.target.value, "companyName")}
                                />
                                <Input
                                    label='Working Date'
                                    inputType='text'
                                    inputValue={experience.workingDate}
                                    handleOnChange={(e) => handleWorkExperienceEdits(experience.id, e.target.value, "workingDate")}
                                />
                                <details>
                                    <summary>
                                        List of Achivements
                                        <button onClick={() => addAchivement(experience.id)}>
                                            <img src={addIcon} alt="Add Icon" />
                                        </button>
                                    </summary>
                                    {experience.listOfAchievements.map((achievement, i) => {
                                        return (
                                            <div key={achievement.id}>
                                                <Input
                                                    label={'Achivement #' + (i + 1)}
                                                    inputType='text'
                                                    inputValue={achievement.achievement}
                                                    handleOnChange={(e) => handleWorkExperienceEdits(experience.id, e.target.value, "listOfAchievements", achievement.id)}
                                                />
                                                <button onClick={() => deleteAchivement(experience.id, achievement.id)}>
                                                    <img src={deleteIcon} alt="Delete Icon" />
                                                </button>
                                            </div>
                                        )
                                    })}
                                </details>
                            </details>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Edit