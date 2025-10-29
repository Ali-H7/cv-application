import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CV from './components/CV';
import Profile from './components/Profile';


function App() {

  const [editStatus, SetEditStatus] = useState(false);

  function handleEditButton() {
    SetEditStatus(!editStatus);
  }

  function RenderCV() {
    return (<CV>
      <Profile />
    </CV>)
  }

  return (
    <div className='main-container'>
      <Navbar handleEdit={handleEditButton} />
      {!editStatus ? <RenderCV /> : null}
    </div>
  )
}

export default App
