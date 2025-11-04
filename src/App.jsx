import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import RenderCV from './components/RenderCV';
import Edit from './components/Edit';
import { profileData, workExperienceData, educationData, skillsData } from './cv-data';


function App() {

  const [editStatus, SetEditStatus] = useState(false);
  const [profile, setProfile] = useState(profileData);
  const [workExperience, setWorkExperience] = useState(workExperienceData);
  const [education, setEducation] = useState(educationData);
  const [skills, setSkills] = useState(skillsData);

  const data = { profile, workExperience, education, skills }
  const setters = { setProfile, setWorkExperience, setEducation }

  function handleEditButton() {
    SetEditStatus(!editStatus);
  }

  function handleProfileEdits(userInput, property) {
    setProfile(prev => ({ ...prev, [property]: userInput }));
  };

  function handleEntryEdits(setter, itemId, userInput, property, achievementId) {
    if (property === 'listOfAchievements') {
      setter(prev => prev.map((exp) => exp.id === itemId ? { ...exp, listOfAchievements: exp.listOfAchievements.map((achievement) => achievement.id === achievementId ? { ...achievement, achievement: userInput } : achievement) } : exp));

    } else {
      setter(prev => prev.map((item) => item.id === itemId ? { ...item, [property]: userInput } : item));
    }
  }

  function handleEntryDeletion(setter, itemID) {
    setter(prevItems => prevItems.filter((item) => item.id !== itemID));
  }

  function handleEntryAddition(section) {
    if (section === 1) {
      setWorkExperience(prev => [...prev, {
        id: crypto.randomUUID(),
        jobTitle: "",
        companyName: "",
        workingDate: "",
        listOfAchievements: [],
      }])
    } else {
      setEducation(prev => [...prev, {
        id: crypto.randomUUID(),
        institutionName: "",
        degree: "",
        graduationYear: "",
      }])
    }
  }

  function handleAchievementsDeletion(expId, achivementId) {
    setWorkExperience(prev => prev.map((exp) => exp.id === expId ? { ...exp, listOfAchievements: exp.listOfAchievements.filter((item) => item.id !== achivementId) } : exp))
  }

  function handleAchievementsAddition(expId) {
    setWorkExperience(prev => prev.map(exp => exp.id === expId ? {
      ...exp, listOfAchievements: [...exp.listOfAchievements, {
        id: crypto.randomUUID(),
        achievement: "",
      }]
    } : exp));
  }

  const handlers = { handleEntryDeletion, handleEntryAddition, handleEntryEdits, handleAchievementsDeletion, handleAchievementsAddition };

  return (
    <div className='main-container'>
      <Navbar status={editStatus} handleEdit={handleEditButton} />
      {!editStatus ? <RenderCV data={data} />
        : <Edit data={data} setters={setters} handlers={handlers} handleProfileEdits={handleProfileEdits} />}
    </div>
  )
}

export default App
