import { useState } from 'react';
import '../styles/Edit.css'
import EditProfileSection from './EditProfileSection';
import EditSection from './EditSection';

function Edit({ data, setters, handlers, handleProfileEdits, }) {
    const editSections = ['Profile', 'Work Experience', 'Education', 'Skills']
    const [selectedSection, setSelectedSection] = useState(0);

    return (
        <div className='edit'>
            <div className="sections">
                {editSections.map((sectionLabel, index) =>
                    <button className={selectedSection === index ? "selected" : ""} onClick={() => { setSelectedSection(index) }}>
                        {sectionLabel}
                    </button>)}
            </div>
            {selectedSection === 0 && <EditProfileSection profileData={data.profile} handleProfileEdits={handleProfileEdits} />}
            {selectedSection === 1 && <EditSection section={selectedSection} data={data.workExperience} setter={setters.setWorkExperience} handlers={handlers} />}
            {selectedSection === 2 && <EditSection section={selectedSection} data={data.education} setter={setters.setEducation} handlers={handlers} />}
        </div>
    )
}

export default Edit