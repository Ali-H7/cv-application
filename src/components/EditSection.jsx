import Input from './Input';
import addIcon from '../../public/add.svg'
import deleteIcon from '../../public/delete.svg'

function EditSection({ section, data }) {
    const checkSection = section === 1
    return (
        <div className='work-experience-edit'>
            <button onClick={null}>
                <img src={addIcon} alt="Add Icon" />
            </button>
            {data.map((item, i) => {
                return (
                    <div key={item.id}>
                        <details>
                            <summary>
                                <h3>{checkSection ? `Work Experience #${i + 1}` : `Education Entry #${i + 1}`}</h3>
                                <button onClick={null}>
                                    <img src={deleteIcon} alt="Delete Icon" />
                                </button>
                            </summary>
                            <Input
                                label={checkSection ? 'Job Title' : 'Degree'}
                                inputType='text'
                                inputValue={checkSection ? item.jobTitle : item.degree}
                                handleOnChange={null}
                            />
                            <Input
                                label={checkSection ? 'Company Name' : 'Institution Name'}
                                inputType='text'
                                inputValue={checkSection ? item.companyName : item.institutionName}
                                handleOnChange={null}
                            />
                            <Input
                                label={checkSection ? 'Working Date' : 'Graduation Year'}
                                inputType='text'
                                inputValue={checkSection ? item.workingDate : item.graduationYear}
                                handleOnChange={null}
                            />
                            {checkSection && <details>
                                <summary>
                                    List of Achivements
                                    <button onClick={() => addAchivement(item.id)}>
                                        <img src={addIcon} alt="Add Icon" />
                                    </button>
                                </summary>
                                {item.listOfAchievements.map((achievement, i) => {
                                    return (
                                        <div key={achievement.id}>
                                            <Input
                                                label={'Achivement #' + (i + 1)}
                                                inputType='text'
                                                inputValue={achievement.achievement}
                                                handleOnChange={null}
                                            />
                                            <button onClick={null}>
                                                <img src={deleteIcon} alt="Delete Icon" />
                                            </button>
                                        </div>
                                    )
                                })}
                            </details>}
                        </details>
                    </div>
                )
            })}
        </div>
    )
}

export default EditSection