import '../styles/Profile.css'
import mailIcon from '../../public/mail.svg'
import phoneIcon from '../../public/phone.svg'
import locationIcon from '../../public/location.svg'
import linkIcon from '../../public/link.svg'
function Profile() {

    return (
        <div className='profile'>
            <div className="name-title">
                <div className='name'>Ali Hassan</div>
                <div className='job-title'>Web Developer</div>
            </div>
            <div className='about-me'>Creative and detail-oriented web developer skilled in building responsive, user-friendly websites and apps. Experienced in modern front-end tools and back-end integration, with a focus on clean code, performance, and usability. Passionate about solving problems and delivering polished digital experiences.</div>
            <div className="contact-info">
                <div className='contact-item'>
                    <img src={mailIcon} alt="Mail Icon" />
                    <div className="email">123456@gmail.com</div>
                </div>
                <div className="contact-item">
                    <img src={phoneIcon} alt="Phone Icon" />
                    <div className="phone-number">66110011</div>
                </div>
                <div className="contact-item">
                    <img src={locationIcon} alt="Location Icon" />
                    <div className="location">Sitra, Bahrain</div>
                </div>
                <div className="contact-item">
                    <img src={linkIcon} alt="Location Icon" />
                    <div className="website">https://github.com/Ali-H7/</div>
                </div>
            </div>
        </div>
    )
}

export default Profile