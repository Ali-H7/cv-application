import { useState } from 'react';
import '../styles/Edit.css'
import Input from './Input';
import editIcon from '../../public/edit.svg'
import deleteIcon from '../../public/delete.svg'

function Edit({ profileData, handleProfileEdits, workExperienceData }) {
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
            {section === 0 && <div className="profile">
                <Input
                    label='First Name'
                    inputType='text'
                    inputValue={profileData.firstName}
                    handleOnChange={(e) => handleProfileEdits(e.target.value, "firstName")}
                />
                <Input
                    label='Last Name'
                    inputType='text'
                    inputValue={profileData.lastName}
                    handleOnChange={(e) => handleProfileEdits(e.target.value, "lastName")}
                />
                <Input
                    label='Job Title'
                    inputType='text'
                    inputValue={profileData.jobTitle}
                    handleOnChange={(e) => handleProfileEdits(e.target.value, "jobTitle")}
                />
                <Input
                    label='Email'
                    inputType='email'
                    inputValue={profileData.email}
                    handleOnChange={(e) => handleProfileEdits(e.target.value, "email")}
                />
                <Input
                    label='Phone Number'
                    inputType='text'
                    inputValue={profileData.phoneNumber}
                    handleOnChange={(e) => handleProfileEdits(e.target.value, "phoneNumber")}
                />
                <Input
                    label='Location'
                    inputType='text'
                    inputValue={profileData.location}
                    handleOnChange={(e) => handleProfileEdits(e.target.value, "location")}
                />
                <Input
                    label='Website'
                    inputType='url'
                    inputValue={profileData.website}
                    handleOnChange={(e) => handleProfileEdits(e.target.value, "website")}
                />
                <Input
                    label='About Me'
                    inputType='textarea'
                    inputValue={profileData.aboutMe}
                    handleOnChange={(e) => handleProfileEdits(e.target.value, "aboutMe")}
                />
            </div>}
            {section === 1 && <div className='work-experience-edit'>
                {workExperienceData.map((experience, i) => {
                    return (
                        <div>
                            <details>
                                <summary>
                                    <h3>Work Experience #{i + 1}</h3>
                                    <div>
                                        <button>
                                            <img src={editIcon} alt="edit Icon" />
                                        </button>
                                        <button>
                                            <img src={deleteIcon} alt="Delete Icon" />
                                        </button>
                                    </div>
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