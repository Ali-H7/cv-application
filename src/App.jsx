import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import RenderCV from './components/RenderCV';
import Edit from './components/Edit';
import { profileData, workExperienceData } from './cv-data';


function App() {

  const [editStatus, SetEditStatus] = useState(false);
  const [profile, setProfile] = useState(profileData)
  const [workExperience, setworkExperience] = useState(workExperienceData)


  function handleEditButton() {
    SetEditStatus(!editStatus);
  }

  function handleProfileEdits(userInput, property) {
    setProfile(prev => ({ ...prev, [property]: userInput }));
  };

  return (
    <div className='main-container'>
      <Navbar status={editStatus} handleEdit={handleEditButton} />
      {!editStatus ? <RenderCV profileData={profile} workExperienceData={workExperience} />
        : <Edit profileData={profile} handleProfileEdits={handleProfileEdits} workExperienceData={workExperience} />}
    </div>
  )
}

export default App
