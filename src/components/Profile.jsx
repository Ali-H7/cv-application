import '../styles/Profile.css';
import mailIcon from '../../public/mail.svg';
import phoneIcon from '../../public/phone.svg';
import locationIcon from '../../public/location.svg';
import linkIcon from '../../public/link.svg';
function Profile({ profileData }) {
  return (
    <div className='profile'>
      <div className='name-title'>
        <div className='name'>{profileData.firstName + ' ' + profileData.lastName}</div>
        <div className='job-title'>{profileData.jobTitle}</div>
      </div>
      <div className='about-me'>{profileData.aboutMe}</div>
      <div className='contact-info'>
        <div className='contact-item'>
          <img src={mailIcon} alt='Mail Icon' />
          <div className='email'>{profileData.email}</div>
        </div>
        <div className='contact-item'>
          <img src={phoneIcon} alt='Phone Icon' />
          <div className='phone-number'>{profileData.phoneNumber}</div>
        </div>
        <div className='contact-item'>
          <img src={locationIcon} alt='Location Icon' />
          <div className='location'>{profileData.location}</div>
        </div>
        <div className='contact-item'>
          <img src={linkIcon} alt='Location Icon' />
          <div className='website'>{profileData.website}</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
