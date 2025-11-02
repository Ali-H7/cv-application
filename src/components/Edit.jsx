import { useState } from 'react';
import '../styles/Edit.css'
import Input from './Input';

function Edit({ profileData, handleUserInput }) {
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
                    handleOnChange={(e) => handleUserInput(e.target.value, "firstName")}
                />
                <Input
                    label='Last Name'
                    inputType='text'
                    inputValue={profileData.lastName}
                    handleOnChange={(e) => handleUserInput(e.target.value, "lastName")}
                />
                <Input
                    label='Job Title'
                    inputType='text'
                    inputValue={profileData.jobTitle}
                    handleOnChange={(e) => handleUserInput(e.target.value, "jobTitle")}
                />
                <Input
                    label='Email'
                    inputType='email'
                    inputValue={profileData.email}
                    handleOnChange={(e) => handleUserInput(e.target.value, "email")}
                />
                <Input
                    label='Phone Number'
                    inputType='text'
                    inputValue={profileData.phoneNumber}
                    handleOnChange={(e) => handleUserInput(e.target.value, "phoneNumber")}
                />
                <Input
                    label='Location'
                    inputType='text'
                    inputValue={profileData.location}
                    handleOnChange={(e) => handleUserInput(e.target.value, "location")}
                />
                <Input
                    label='Website'
                    inputType='url'
                    inputValue={profileData.website}
                    handleOnChange={(e) => handleUserInput(e.target.value, "website")}
                />
                <Input
                    label='About Me'
                    inputType='textarea'
                    inputValue={profileData.aboutMe}
                    handleOnChange={(e) => handleUserInput(e.target.value, "aboutMe")}
                />
            </div>}
        </div>
    )
}

export default Edit