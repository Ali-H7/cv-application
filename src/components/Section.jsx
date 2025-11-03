function Section({ section, data }) {
    const sectionTitle = section.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const checkSection = section === 'education';

    return (
        <div className={section}>
            <h1 className='cv-section'>{sectionTitle}</h1>
            {data.map((item) => {
                return (
                    <div className="section-block">
                        <h2>{checkSection ? item.degree : item.jobTitle}</h2>
                        <div>
                            <div className='section-organization'>
                                <h3 >{checkSection ? item.institutionName : item.companyName}</h3>
                                <h3>{checkSection ? item.graduationYear : item.workingDate}</h3>
                            </div>
                            {checkSection ? null : <ul className='section-achivements'>
                                {item.listOfAchievements.map(achievement => <li>{achievement.achievement}</li>)}
                            </ul>}
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Section;