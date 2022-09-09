import React from 'react';
import speaker from 'assets/images/speaker.svg'
import { FaGift } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'


const TheSideShair = () => {
    return (
        <div>
            <div className='w-[290px] h-[330px] bg-white rounded-3xl absolute left-[4.25rem] top-[26rem]'>
                <h1 className='text-[#5841DA] font-black texr-right text-xl m-4	'>دعوت از دوستان</h1>
                <img src={speaker} alt="speaker" className='mr-[8rem]' />
                <div className='flex flex-row mt-4'>
                    <span className='flex flex-row text-[#707070] text-sm mt-1  font-bold ml-12 mr-4'><FaGift size={25} className="text-[#B6ADEA] ml-2" />سود من </span>
                    <span className='text-[#B0B0B0]'><span className='ml-1 font-black text-xl text-center text-black'>۷۷,۸۸۴,۰۰۰</span>تومان</span>
                </div>
                <div className='flex flex-row mt-4'>
                    <span className='flex flex-row text-[#707070] text-sm mt-1  font-bold ml-32 mr-4'><FaUsers size={25} className="text-[#B6ADEA] ml-2" />دوستان من </span>
                    <span className='text-[#B0B0B0]'><span className='ml-1 font-black text-xl text-center text-black'>۱۲</span>نفر</span>
                    <span className=' bg-[#5841DA] absolute top-[17.35rem] rounded-b-2xl text-white font-black  w-[290px] h-[49px] text-center pt-3	'>دعوت از دوستان</span>

                </div>
            </div>
        </div>

    );
};

export default TheSideShair;

