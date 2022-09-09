import React from 'react';
import 'assets/sass/tailwind.css'

const BaseItemNavbar = () => {
    return (

        <div className='nav'>
            <ul className='flex flex-row mt-2 ml-60 md:flex-wrap  lg:flex-wrap  '>
                <li><a href='# '>بازارها</a></li>
                <li><a href='# '>معامله پیشرفته</a></li>
                <li><a href='# '>معامله آسان</a></li>
                <li><a href='# '>درباره‌ما</a></li>
                <li><a href='# '>تماس با ما</a></li>
                <li><a href='# '>وبلاگ</a></li>
            </ul>
        </div>
    );
};

export default BaseItemNavbar;