import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import RenderCV from './components/RenderCV';
import Edit from './components/Edit';
import { profileData, workExperienceData } from './cv-data';


function App() {

  const [editStatus, SetEditStatus] = useState(false);
  const [profile, setProfile] = useState(profileData)
  const [workExperience, setWorkExperience] = useState(workExperienceData)


  function handleEditButton() {
    SetEditStatus(!editStatus);
  }

  function handleProfileEdits(userInput, property) {
    setProfile(prev => ({ ...prev, [property]: userInput }));
  };

  function handleWorkExperienceDeletion(id) {
    setWorkExperience(prevItems => prevItems.filter((item) => item.id !== id));
  }

  function handleWorkExperienceAddition() {
    setWorkExperience(prev => [...prev, {
      id: crypto.randomUUID(),
      jobTitle: "",
      companyName: "",
      workingDate: "",
      listOfAchievements: [],
    }])
  }

  function handleWorkAchievementsDeletion(expId, achivementID) {
    setWorkExperience(prev => prev.map((exp) => exp.id === expId ? { ...exp, listOfAchievements: exp.listOfAchievements.filter((item) => item.id !== achivementID) } : exp))
  }

  return (
    <div className='main-container'>
      <Navbar status={editStatus} handleEdit={handleEditButton} />
      {!editStatus ? <RenderCV profileData={profile} workExperienceData={workExperience} />
        : <Edit profileData={profile} handleProfileEdits={handleProfileEdits} workExperienceData={workExperience} deleteWorkExperienceData={handleWorkExperienceDeletion} addWorkExperienceData={handleWorkExperienceAddition} deleteAchivement={handleWorkAchievementsDeletion} />}
    </div>
  )
}

export default App
