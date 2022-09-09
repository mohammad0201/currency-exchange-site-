import React from 'react';
import logo from 'assets/images/logo.svg'
import Rectangleleft from 'assets/images/Rectangle left.svg'
import Rectangleright from 'assets/images/Rectangle right.svg'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";




const BaseItemFooter = () => {
    return (
        <div className='w-[1342px] h-[430px] bg-white   '>
            <div className='flex felx-row mr-[110px]'>
                <img src={Rectangleright} alt="Rectang" />
                <span className="bg-[#8DC400] w-2 h-2 relative top-[98px] left-2 rounded-sm"></span>
                <img src={logo} alt="logo" className='w-24 relative top-10 left-2 mx-4' />
                <img src={Rectangleleft} alt="Rectang" />
                <span className="bg-[#8DC400] w-2 h-2 relative top-[98px] left-14 rounded-sm"></span>
            </div>
            <div className='flex flex-col mr-28 mt-20'>
                <h1 className='font-bold font-black	text-[20px]'>صرافی هفت رمز</h1>
                <p>صرافی هفت ارز پلتفرم ایمن و سریع برای <br />انجام معاملات ارز دیجیتال در بستری مطمئن</p>
            </div>
            <div className='flex flex-row mr-[34rem] mt-4 relative bottom-[16rem]'>
                <ul className='item-footer'>
                    <li><h1 className='font-bold font-black	text-[18px]'>ارز های دیجیتال</h1></li>
                    <li>معامله بیت‌کوین</li>
                    <li>معامله لایت‌کوین</li>
                    <li>معامله بایننس‌کوین</li>
                    <li>معامله اتریوم‌</li>
                    <li>معامله دوج‌کوین‌</li>
                </ul>
                <ul className='item-footer'>
                    <li><a href='# ' className='font-bold font-black	text-[18px]'>سایت هفت رمز</a></li>
                    <li>درباره ما</li>
                    <li>تماس با ما</li>
                    <li>سوالات متداول</li>
                    <li>کارمزد معاملات</li>
                    <li>قوانین و مقررات</li>
                </ul>
                <ul className='contact'>
                    <li><h1 className='font-bold font-black	text-[18px]'>هفت رمز در شبکه های اجتماعی</h1></li>
                    <li><FaEnvelope size={20} className="ml-2" />7Arz2022@Gmail.com</li>
                    <li><FaPhoneAlt size={20} className="ml-2" />۴۴۹۸۸۷۵۷ -۰۲۱</li>
                    <li><FaLocationArrow size={20} className="ml-2" />میدان ولی عصر - نرسیده به سینما آفریقا -
                        <br />کوچه عتیقی نژاد ..</li>
                    <div className='flex flex-row mt-6'>
                        <FaTelegramPlane size={35} className="ml-3 text-[#5841DA]" />
                        <FaInstagram size={35} className="ml-3 text-[#5841DA]" />
                        <FaWhatsapp size={35} className="ml-3 text-[#5841DA]" />
                        <FaTwitter size={35} className="ml-3 text-[#5841DA]" />
                    </div>
                </ul>
                <span className="border-solid border-[1px] border-[#B6ADEA] w-[1130px]  rounded-sm absolute -bottom-8 left-24"></span>
                <p className=' absolute -bottom-20 -right-[27rem]'>کلیه حقوق متعلق به شرکت ویستا است. </p>
            </div>

        </div>


    );
};

export default BaseItemFooter;