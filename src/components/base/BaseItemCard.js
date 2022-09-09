import React from 'react';
import ETH from 'assets/images/ETH.svg'
import { FaAngleUp } from 'react-icons/fa'

const BaseItemCard = () => {
    return (
        <div className='flex flex-row bg-white w-[231px] h-[108px] gap-2 p-4 rounded-3xl mx-2'>
            <img src={ETH} alt="ETH" className='w-8 h-8' />
            <div className='flex flex-col ml-10'>
                <span>اتریوم</span>
                <span>ETH</span>
                <div className='flex flex-col -mt-[37px]'>
                    <span className='mr-24 flex flex-row mb-2'>۲۳.۳<FaAngleUp size={25} className='text-[#8DC400] mr-2' /></span>
                    <span className='mr-14 ' >۸,۷۷۳,۸۴۳<span className='text-[#B0B0B0] mr-1'>تومان</span></span>
                </div>
            </div>
        </div>
    );
};

export default BaseItemCard;