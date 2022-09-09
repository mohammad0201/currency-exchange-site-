import React from 'react';
import { FaQrcode } from 'react-icons/fa'
import { FaRegBell } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'


const BaseUser = () => {
    return (
        <div className='flex flex-row text-[#5841DA] cursor-pointer mr-16'>
            <FaQrcode className='bg-white w-[40px] h-[40px] p-2 rounded-md justify-center items-center	' />
            <FaRegBell className='bg-white w-[40px] h-[40px] p-2 rounded-md justify-center items-center	mx-2' />
            <span className='flex bg-white rounded-md w-[166px] h-[40px] pt-1 items-center	' ><FaRegUser className='w-10 h-6' />محمد مقتدایی فر</span>
        </div>
    );
};

export default BaseUser;