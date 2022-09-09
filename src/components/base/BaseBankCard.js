import React from 'react';
import right from 'assets/images/Bankcard/right.svg'
import left from 'assets/images/Bankcard/left.svg'
import bottom from 'assets/images/Bankcard/bottom.svg'
import square from 'assets/images/Bankcard/square.svg'


const BaseBankCard = () => {
    return (

        <div className='w-[282px] h-[169px] rounded-3xl bg-gradient-to-r from-[#221D3E] to-[#5841DA] absolute left-[4.5rem] top-[14rem]'>
            <div>
                <img src={right} alt="right" className=' mt-1 w-[120.26px] h-[138.28px]' />
                <img src={left} alt="left" className='relative right-[12.5rem] bottom-[8.75rem]  w-[82.32px] h-[134.23px]' />
                <img src={bottom} alt="bottom" className='relative bottom-[11.75rem] right-[5rem] w-[183px] h-[80.28px]' />
                <img src={square} alt="square" className='relative bottom-[22.2rem] right-[8rem] w-[72.5px] h-[27.7px]' />
            </div>
            <div className='flex flex-col relative bottom-[22.5rem] mr-4 text-white'>
                <span>محمد مقتدائی فر</span>
                <span className='font-black	leading-7 text-lg mr-4'><span className='mx-2'>۵۵۴۳</span> <span className='mx-2'>۸۷۷۴</span> <span className='mx-2' >۷۷۴۸</span><span className='mx-2'>۲۱۰۳</span> </span>
                <span className='mr-[4.75rem] mt-2 text-[#FFFFFF80] text-sm'><span className='mr-2'>IR-</span>۷۷۸۳۰۰۰۰۰۰۰۰۷۷۳۷۸۳۳</span>
                <div className='mt-4'>
                    <span className='text-[#FFFFFF80] text-sm ml-10'>ارزش کل دارایی ها</span>
                    <span className='text-sm'>۷۷۴,۷۷۹,۰۰۰ <span className='text-[#FFFFFF80]'>تومان</span></span>
                </div>
            </div>
        </div>

    );
};

export default BaseBankCard;