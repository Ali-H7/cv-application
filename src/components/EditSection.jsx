import { useState } from 'react';
import Input from './Input';
import addIcon from '../../public/add.svg'
import deleteIcon from '../../public/delete.svg'
import arrowLeft from '../../public/arrow-left.svg'
import arrowDown from '../../public/arrow-down.svg'

function EditSection({ section, data, setter, handlers }) {
    const [entryExpanded, setEntryExpanded] = useState(-1);
    const checkSection = section === 1
    const properties = section === 1 ? ['jobTitle', 'companyName', 'workingDate'] : ['degree', 'institutionName', 'graduationYear']
    const reversedData = [...data].reverse()
    let count = data.length
    return (
        <div className='entry-container'>
            <button className='entry-add' onClick={() => {
                const itemID = handlers.handleEntryAddition(section)
                setEntryExpanded(itemID);
            }}>
                <p>Add Entry</p>
                <img src={addIcon} alt="Add Icon" />
            </button>
            {reversedData.map((item) => {
                return (
                    <div key={item.id} className="entry">
                        <div className="entry-title">
                            <h4>{checkSection ? `Work Experience #${count--}` : `Education #${count--}`}</h4>
                            <div className="entry-buttons">
                                <button onClick={() => {
                                    handlers.handleEntryDeletion(setter, item.id)
                                }}>
                                    <img src={deleteIcon} alt="Delete Icon" />
                                </button>
                                {entryExpanded === item.id ? <button onClick={() => setEntryExpanded(-1)}>
                                    <img src={arrowLeft} alt="Arrow Left" />
                                </button> : <button onClick={() => setEntryExpanded(item.id)}>
                                    <img src={arrowDown} alt="Arrow Down" />
                                </button>}
                            </div>
                        </div>
                        <div className={entryExpanded === item.id ? 'entry-shown' : 'entry-hidden'} >
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
                        </div>
                        {checkSection && <div className='achievement-container'>
                            <div className='achievement-title'>
                                <p>List of Achivements</p>
                                <button onClick={() => handlers.handleAchievementsAddition(item.id)}>
                                    <img src={addIcon} alt="Add Icon" />
                                </button>
                            </div>
                            {item.listOfAchievements.map((achievement, i) => {
                                return (
                                    <div key={achievement.id} className={entryExpanded === item.id ? 'entry-shown' : 'entry-hidden'}>
                                        <div className='achievement-entry'>
                                            <Input
                                                label={'Achivement #' + (i + 1)}
                                                inputType='text'
                                                inputValue={achievement.achievement}
                                                handleOnChange={(e) => handlers.handleEntryEdits(setter, item.id, e.target.value, 'listOfAchievements', achievement.id)}
                                            />
                                            <button onClick={() => handlers.handleAchievementsDeletion(item.id, achievement.id)} className='achievement-delete'>
                                                <img src={deleteIcon} alt="Delete Icon" />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>}
                    </div>
                )
            })}
        </div>
    )
}

export default EditSection