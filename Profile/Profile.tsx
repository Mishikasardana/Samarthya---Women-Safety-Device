import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileImage from './ProfileImage';
import ProfileField from './ProfileField';
import ProfileSetting from './ProfileSetting';
import ProfileButton from './ProfileButton';
import ProfileFooterIcon from './ProfileFooterIcon';
import { ReactComponent as ProfileIcon } from './icons/profile.svg'; 
import { ReactComponent as MainProfileIcon } from './icons/main-profile.svg'; 
import { ReactComponent as HeaderIcon } from './icons/header.svg'; 

export default function Profile() {
  return (
    <div className="flex overflow-hidden flex-col pt-5 mx-auto w-full bg-orange-100 max-w-[480px] rounded-[30px]">
      <div className="flex flex-col items-start px-5 w-full">
        <ProfileHeader title="Profile" icon={<HeaderIcon />} />
        <ProfileImage mainIcon={<MainProfileIcon />} icon={<ProfileIcon />} />
        <div className="mt-6 text-lg font-bold tracking-tight text-center text-stone-800">
          Name
        </div>
        <ProfileField title="Name" value="Cherry" />
        <ProfileField title="Email" value="cherry@gmail.com" />
        <ProfileSetting title="Emergency Alert Sensitivity" />
        <ProfileSetting title="Location Sharing" />
        <div className="px-2.5 py-4 mt-3.5 max-w-full text-xl font-semibold tracking-tight text-center bg-orange-100 rounded-xl shadow-[0px_1px_4px_rgba(0,0,0,0.25)] text-stone-800">
          Activity Monitor
        </div>
        <div className="flex gap-3.5 items-start mt-4 text-xl font-bold tracking-tight text-center text-orange-100">
          <ProfileButton label="AI SUPPORT CHATBOT" />
          <ProfileButton label="Log Out" />
        </div>
      </div>
      <ProfileFooterIcon icon={<MainProfileIcon />} />
    </div>
  );
}
