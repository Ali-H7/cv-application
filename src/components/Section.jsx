import React from 'react';

function Section({ section, data }) {
    const sectionTitle = section.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const checkSection = section === 'education' || section === 'work-experience';
    const hasAchievement = section === 'work-experience';
    return (
        <div className={section}>
            <h1 className='cv-section'>{sectionTitle}</h1>
            {checkSection ? data.map((item) => {
                return (
                    <div key={item.id} className="section-block">
                        <h2>{hasAchievement ? item.jobTitle : item.degree}</h2>
                        <div>
                            <div className='section-organization'>
                                <h3 >{hasAchievement ? item.companyName : item.institutionName}</h3>
                                <h3>{hasAchievement ? item.workingDate : item.graduationYear}</h3>
                            </div>
                            {hasAchievement && <ul className='section-achivements'>
                                {item.listOfAchievements.map(achievement => <li key={achievement.id}>{achievement.achievement}</li>)}
                            </ul>}
                        </div>
                    </div>
                )
            }
            ) : <div className="section-block">
                <ul className="section-skills">
                    {data.map((item, index) => {
                        const isOuterItem = (index === 0 && data.length < 1) || index === data.length - 1;
                        return (
                            <React.Fragment key={item}>
                                <li>{item.trim()}</li>
                                {!isOuterItem && <span>|</span>}
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>}
        </div>
    )
}

export default Section;