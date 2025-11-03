import Input from './Input';
import addIcon from '../../public/add.svg'
import deleteIcon from '../../public/delete.svg'

function EditSection({ section, data, setter, handlers }) {
    const checkSection = section === 1
    const properties = section === 1 ? ['jobTitle', 'companyName', 'workingDate'] : ['degree', 'institutionName', 'graduationYear']
    return (
        <div className='work-experience-edit'>
            <button onClick={() => handlers.handleEntryAddition(section)}>
                <img src={addIcon} alt="Add Icon" />
            </button>
            {data.map((item, i) => {
                return (
                    <div key={item.id}>
                        <details>
                            <summary>
                                <h3>{checkSection ? `Work Experience #${i + 1}` : `Education Entry #${i + 1}`}</h3>
                                <button onClick={() => handlers.handleEntryDeletion(setter, item.id)}>
                                    <img src={deleteIcon} alt="Delete Icon" />
                                </button>
                            </summary>
                            <Input
                                label={checkSection ? 'Job Title' : 'Degree'}
                                inputType='text'
                                inputValue={checkSection ? item.jobTitle : item.degree}
                                handleOnChange={(e) => handlers.handleEntryEdits(setter, item.id, e.target.value, properties[0])}
                            />
                            <Input
                                label={checkSection ? 'Company Name' : 'Institution Name'}
                                inputType='text'
                                inputValue={checkSection ? item.companyName : item.institutionName}
                                handleOnChange={(e) => handlers.handleEntryEdits(setter, item.id, e.target.value, properties[1])}
                            />
                            <Input
                                label={checkSection ? 'Working Date' : 'Graduation Year'}
                                inputType='text'
                                inputValue={checkSection ? item.workingDate : item.graduationYear}
                                handleOnChange={(e) => handlers.handleEntryEdits(setter, item.id, e.target.value, properties[2])}
                            />
                            {checkSection && <details>
                                <summary>
                                    List of Achivements
                                    <button onClick={() => handlers.handleAchievementsAddition(item.id)}>
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
                                                handleOnChange={(e) => handlers.handleEntryEdits(setter, item.id, e.target.value, 'listOfAchievements', achievement.id)}
                                            />
                                            <button onClick={() => handlers.handleAchievementsDeletion(item.id, achievement.id)}>
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