import { useState } from 'react';
import '../styles/Edit.css'
import Input from './Input';
import EditProfileSection from './EditProfileSection';
import deleteIcon from '../../public/delete.svg'

function Edit({ profileData, handleProfileEdits, workExperienceData, deleteWorkExperienceData }) {
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
                                    handleOnChange={null}
                                />
                                <Input
                                    label='Company Name'
                                    inputType='text'
                                    inputValue={experience.companyName}
                                    handleOnChange={null}
                                />
                                <Input
                                    label='Working Date'
                                    inputType='text'
                                    inputValue={experience.workingDate}
                                    handleOnChange={null}
                                />
                                <details>
                                    <summary>
                                        List of Achivements
                                    </summary>
                                    {experience.listOfAchievements.map((achivement, i) => {
                                        return (
                                            <Input
                                                label={'Achivement #' + (i + 1)}
                                                inputType='text'
                                                inputValue={experience.listOfAchievements[i]}
                                                handleOnChange={null}
                                            />
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