import Input from './Input';

function EditProfileSection({ profileData, handleProfileEdits }) {
    return (
        <div className="profile">
            <Input
                label='First Name'
                inputType='text'
                inputValue={profileData.firstName}
                handleOnChange={(e) => handleProfileEdits(e.target.value, "firstName")}
            />
            <Input
                label='Last Name'
                inputType='text'
                inputValue={profileData.lastName}
                handleOnChange={(e) => handleProfileEdits(e.target.value, "lastName")}
            />
            <Input
                label='Job Title'
                inputType='text'
                inputValue={profileData.jobTitle}
                handleOnChange={(e) => handleProfileEdits(e.target.value, "jobTitle")}
            />
            <Input
                label='Email'
                inputType='email'
                inputValue={profileData.email}
                handleOnChange={(e) => handleProfileEdits(e.target.value, "email")}
            />
            <Input
                label='Phone Number'
                inputType='text'
                inputValue={profileData.phoneNumber}
                handleOnChange={(e) => handleProfileEdits(e.target.value, "phoneNumber")}
            />
            <Input
                label='Location'
                inputType='text'
                inputValue={profileData.location}
                handleOnChange={(e) => handleProfileEdits(e.target.value, "location")}
            />
            <Input
                label='Website'
                inputType='url'
                inputValue={profileData.website}
                handleOnChange={(e) => handleProfileEdits(e.target.value, "website")}
            />
            <Input
                label='About Me'
                inputType='textarea'
                inputValue={profileData.aboutMe}
                handleOnChange={(e) => handleProfileEdits(e.target.value, "aboutMe")}
            />
        </div>
    )
}

export default EditProfileSection