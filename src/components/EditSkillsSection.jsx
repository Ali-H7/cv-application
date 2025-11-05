import Input from './Input';


function EditSkillsSection({ skillsData, handleInput }) {
    return (
        <div>
            <p>Note: Please enter your skills as a comma-separated list, like: Javascript, CSS, HTML</p>
            <Input
                label='Skills'
                inputType='textarea'
                inputValue={skillsData}
                handleOnChange={(e) => handleInput(e.target.value)}
            />
        </div>
    )
}

export default EditSkillsSection