import React from 'react';
import 'assets/sass/tailwind.css';
import { FaRecycle } from 'react-icons/fa'

const BaseItemPanel = () => {
    return (
        <div className='flex flex-row w-[680px] h-[330px] bg-white rounded-3xl absolute left-[23rem] top-[25.75rem]'>
            <div className='item-panel'>
                <ul >
                    <li className='text-xs text-[#B0B0B0] font-medium'>سفارش فعال <span className="bg-[#DB0000] w-[7px] h-[7px] rounded-full absolute top-[1.75rem] right-[0.55rem]  rounded-sm"></span></li>
                    <li className='text-[#DB0000]'>TMN-BTC</li>
                    <li className='text-[#5F9E00]'>TMN-BTC</li>
                    <li className='text-[#DB0000]'>TMN-BTC</li>
                    <li className='text-[#5F9E00]'>TMN-BTC</li>
                    <li className='text-[#5F9E00]'>TMN-BTC</li>
                </ul>
            </div>
            <div className='data-time'>
                <ul >
                    <li className='text-xs text-[#B0B0B0] font-medium'>زمان و تاریخ</li>
                    <li> ۱۴:۳۳ | ۰۰/۱۲/۰۳ </li>
                    <li> ۱۴:۳۳ | ۰۰/۱۲/۰۳ </li>
                    <li> ۱۴:۳۳ | ۰۰/۱۲/۰۳ </li>
                    <li> ۱۴:۳۳ | ۰۰/۱۲/۰۳ </li>
                    <li> ۱۴:۳۳ | ۰۰/۱۲/۰۳ </li>
                </ul>
            </div>
            <div className='type'>
                <ul >
                    <li className='text-xs text-[#B0B0B0] font-medium'>نوع</li>
                    <li>حد</li>
                    <li>حد</li>
                    <li>حد</li>
                    <li>حد</li>
                    <li>حد</li>
                </ul>
            </div>
            <div className='price'>
                <ul >
                    <li className='text-xs text-[#B0B0B0] font-medium'>قیمت واحد</li>
                    <li>۱۰٬۱۱۲٬۴۵۶</li>
                    <li>۱۰٬۱۱۲٬۴۵۶</li>
                    <li>۱۰٬۱۱۲٬۴۵۶</li>
                    <li>۱۰٬۱۱۲٬۴۵۶</li>
                    <li>۱۰٬۱۱۲٬۴۵۶</li>
                </ul>
            </div>
            <div className='amount '>
                <ul >
                    <li className='text-xs text-[#B0B0B0] font-medium'>مقدار</li>
                    <li>۰.۰۱</li>
                    <li>۰.۰۱</li>
                    <li>۰.۰۱</li>
                    <li>۰.۰۱</li>
                    <li>۰.۰۱</li>
                </ul>
            </div>
            <div className='total-price '>
                <ul >
                    <li className='text-xs text-[#B0B0B0] font-medium'>مبلغ کل</li>
                    <li>۱۰٬۱۱۲٬۴۵۶</li>
                    <li>۱۰٬۱۱۲٬۴۵۶</li>
                    <li>۱۰٬۱۱۲٬۴۵۶</li>
                    <li>۱۰٬۱۱۲٬۴۵۶</li>
                    <li>۱۰٬۱۱۲٬۴۵۶</li>
                </ul>
            </div>
            <div className='full'>
                <ul >
                    <li className='text-xs text-[#B0B0B0] font-medium'>پر شده</li>
                    <li>۰ %</li>
                    <li>۰ %</li>
                    <li>۰ %</li>
                    <li>۰ %</li>
                    <li>۰ %</li>
                </ul>
            </div>
            <div className='delete'>
                <ul >
                    <li className='text-xs text-[#DB0000] font-medium'>لغو همه</li>
                    <li><FaRecycle size={21} /></li>
                    <li><FaRecycle size={21} /></li>
                    <li><FaRecycle size={21} /></li>
                    <li><FaRecycle size={21} /></li>
                    <li><FaRecycle size={21} /></li>
                </ul>
            </div>
        </div>
    );
};

export default BaseItemPanel;