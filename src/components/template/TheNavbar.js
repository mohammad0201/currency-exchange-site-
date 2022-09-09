import React from 'react';
import BaseLogo from 'components/base/BaseLogo';
import BaseItemNavbar from 'components/base/BaseItemNavbar';
import BaseUser from 'components/base/BaseUser';


const TheNavbar = () => {
    return (
        <div className='flex items-center py-[16px] gap-2  '>
            <BaseLogo />
            <BaseItemNavbar />
            <BaseUser />
        </div>
    );
};

export default TheNavbar;