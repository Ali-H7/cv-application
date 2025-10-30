import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import RenderCV from './components/RenderCV';
import Edit from './components/Edit';
import { profileData } from './cv-data';


function App() {

  const [editStatus, SetEditStatus] = useState(false);
  const [profile, setProfile] = useState(profileData)

  function handleEditButton() {
    SetEditStatus(!editStatus);
  }

  function handleProfileEdits(userInput, property) {
    setProfile({ ...profile, [property]: userInput });
  };

  return (
    <div className='main-container'>
      <Navbar handleEdit={handleEditButton} />
      {!editStatus ? <RenderCV profileData={profile} /> : <Edit profileData={profile} handleUserInput={handleProfileEdits} />}
    </div>
  )
}

export default App
