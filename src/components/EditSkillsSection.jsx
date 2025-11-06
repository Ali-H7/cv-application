import Input from './Input';
import '../styles/EditSkillsSection.css';

function EditSkillsSection({ skillsData, handleInput }) {
  return (
    <div className='skills-edit'>
      <Input
        label='Skills'
        inputType='textarea'
        inputValue={skillsData}
        handleOnChange={(e) => handleInput(e.target.value)}
      />
      <p>Note: Please enter your skills as a comma separated list</p>
      <p>Example: Javascript, CSS, HTML</p>
    </div>
  );
}

export default EditSkillsSection;
