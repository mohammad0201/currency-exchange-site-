import React from 'react';
import Chart from 'assets/images/Chart.svg';
import ex from 'assets/images/ex.svg';
import inp from 'assets/images/inp.svg';
import 'assets/sass/tailwind.css';

const BaseUserStep = () => {
    return (
        <div className='flex flex-row w-[670px] h-[169px] bg-white rounded-3xl absolute right-[19rem] top-[14rem]'>
            <img src={Chart} alt="chart" className='p-6' />
            <div className='flex flex-col text-center relative left-[8rem] top-14'><span className='font-black text-2xl'>۵۴٪</span> <span className='text-gray-600 text-[14px] font-medium	'>بیت کوین BTC </span></div>
            <div className='item-order'>
                <ul >
                    <li> <span className="bg-[#8DC400] w-2.5 h-2.5 absolute top-[1.15rem] left-[5.15rem]  rounded-sm"></span>دوج کوین</li>
                    <li><span className="bg-[#5841DA] w-2.5 h-2.5 absolute top-[3.15rem] left-[5.15rem]  rounded-sm"></span>بیت کوین</li>
                    <li><span className="bg-[#F069C2] w-2.5 h-2.5 absolute top-[5.25rem] left-[5.15rem]  rounded-sm"></span>اتریوم</li>
                    <li><span className="bg-[#FACA21] w-2.5 h-2.5 absolute top-[7.35rem] left-[5.15rem]  rounded-sm"></span>لایت کوین</li>
                </ul>
            </div>
            <div className='item-name__currency'>
                <ul>
                    <li><span>۷۷۴۸</span>Doge</li>
                    <li><span>۰.۷۷۴۷</span>BTC</li>
                    <li><span>۸۸۵</span>ETH</li>
                    <li><span>۱۲</span>ETH</li>
                </ul>
            </div>
            <div className='relative -left-8 top-2'>
                <div className='w-10 flex flex-row'>
                    <img src={inp} alt="inport" className='ml-3' />
                    <img src={ex} alt="export" />
                </div>
                <div className='flex flex-row mt-1'>
                    <span className='text-[#5F9E00] ml-3 mr-2'>واریز</span>
                    <span className="text-[#DB0000] ">برداشت</span>
                </div>
                <span className='text-[#5841DA] relative top-10 left-1'>مشاهده همه</span>

            </div>
        </div>
    );
};

export default BaseUserStep;