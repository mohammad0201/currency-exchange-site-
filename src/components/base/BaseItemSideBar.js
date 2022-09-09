import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import "assets/sass/tailwind.css";

const BaseItemSideBar = () => {
    return (
        <div>
            <div className="flex flex-row bg-white w-[224px] h-[631px] p-3 rounded-3xl gap-4 mr-[55px] ">
                <FaRegUser className="bg-[#F0EDFF] w-[48px] h-[48px] text-[#5841DA] p-2 rounded-md justify-center items-center	" />
                <div className="flex flex-col -mr-2 ">
                    <span>محمد مقتدایی فر</span>
                    <span className="text-[#5841DA]">سطح ۳ کاربری</span>
                    <span className="bg-[#8DC400] w-2 h-2 relative top-5 -right-[53px] rounded-sm"></span>
                    <span className="border-solid border-[1px] border-[#8DC400] w-[103px]  relative top-[15px] -right-[45px] rounded-sm"></span>
                    <span className="bg-[#8DC400] w-5 h-5 relative top-[3.25px] mr-3  rounded-sm text-center text-white">
                        ۲
                    </span>
                    <span className="border-solid border-[1px] border-gray-200 w-[85px]  relative -top-[7px] -left-14 rounded-sm"></span>
                    <span className="bg-gray-200 w-2 h-2 relative -top-3 -left-[135px] rounded-sm"></span>
                    <span className="bg-gray-200 w-2 h-2 relative -top-5 -left-[82px] rounded-sm"></span>
                    <div className="item-side">
                        <ul className="flex flex-col -mr-12 ">
                            <li>
                                <a href="# ">
                                    <FaQrcode size={20} className="ml-2" />
                                    داشبورد
                                </a>
                            </li>
                            <li>
                                <a href="# ">
                                    <FaRegUser size={20} className="ml-2" />
                                    حساب کاربری
                                </a>
                            </li>
                            <li>
                                <a href="# ">
                                    <FaWallet size={20} className="ml-2" />
                                    کیف پول
                                </a>
                            </li>
                            <li>
                                <a href="# ">
                                    <FaHistory size={20} className="ml-2" />
                                    تاریخچه{" "}
                                </a>
                            </li>
                            <li>
                                <a href="# ">
                                    <FaWrench size={20} className="ml-2" />
                                    تنظیمات
                                </a>
                            </li>
                            <li>
                                <a href="# ">
                                    <FaRegQuestionCircle size={20} className="ml-2" />
                                    پشتیبانی
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BaseItemSideBar;
