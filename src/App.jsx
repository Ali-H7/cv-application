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

  function handleWorkExperienceEdits(expId, userInput, property, achievementId) {
    if (property === 'listOfAchievements') {
      setWorkExperience(prev => prev.map((exp) => exp.id === expId ? { ...exp, listOfAchievements: exp.listOfAchievements.map((achievement) => achievement.id === achievementId ? { ...achievement, achievement: userInput } : achievement) } : exp));

    } else {
      setWorkExperience(prev => prev.map((exp) => exp.id === expId ? { ...exp, [property]: userInput } : exp));
    }
  }

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

  function handleWorkAchievementsDeletion(expId, achivementId) {
    setWorkExperience(prev => prev.map((exp) => exp.id === expId ? { ...exp, listOfAchievements: exp.listOfAchievements.filter((item) => item.id !== achivementId) } : exp))
  }

  function handleWorkAchievementsAddition(expId) {
    setWorkExperience(prev => prev.map(exp => exp.id === expId ? {
      ...exp, listOfAchievements: [...exp.listOfAchievements, {
        id: crypto.randomUUID(),
        achievement: "",
      }]
    } : exp));
  }

  return (
    <div className='main-container'>
      <Navbar status={editStatus} handleEdit={handleEditButton} />
      {!editStatus ? <RenderCV profileData={profile} workExperienceData={workExperience} />
        : <Edit profileData={profile} handleProfileEdits={handleProfileEdits} workExperienceData={workExperience} handleWorkExperienceEdits={handleWorkExperienceEdits} deleteWorkExperienceData={handleWorkExperienceDeletion} addWorkExperienceData={handleWorkExperienceAddition} deleteAchivement={handleWorkAchievementsDeletion} addAchivement={handleWorkAchievementsAddition} />}
    </div>
  )
}

export default App
