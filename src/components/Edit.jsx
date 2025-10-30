import { useState } from 'react';
import '../styles/Edit.css'
import Input from './Input';

function Edit() {
    const editSections = ['Profile', 'Work Experience', 'Education', 'Skills']
    const [section, setSection] = useState(0);

    return (
        <div className='edit'>
            <div className="sections">
                {editSections.map((sectionLabel, index) => <button className={section === index ? "selected" : ""} onClick={() => { setSection(index) }}>{sectionLabel}</button>)}
            </div>
            {section === 0 && <div className="profile">
                <Input
                    label='First Name'
                    inputType='text'
                />
                <Input
                    label='Last Name'
                    inputType='text'
                />
                <Input
                    label='Job Title'
                    inputType='text'
                />
                <Input
                    label='Email'
                    inputType='email'
                />
                <Input
                    label='Phone Number'
                    inputType='text'
                />
                <Input
                    label='Location'
                    inputType='text'
                />
                <Input
                    label='Website'
                    inputType='url'
                />
                <Input
                    label='About Me'
                    inputType='textarea'
                />
            </div>}
        </div>
    )
}

export default Edit