import React from 'react';
import TheNavbar from 'components/template/TheNavbar';
import TheSideBar from 'components/template/TheSideBar';
import TheFooter from 'components/template/TheFooter';
import TheCard from 'components/template/TheCard';
import TheOrderInformation from 'components/template/TheOrderInformation';
import TheSideShair from 'components/template/TheSideShair';
import TheOrderPanel from 'components/template/TheOrderPanel';



const Home = () => {
    return (
        <div>
            <TheNavbar />
            <TheCard />
            <TheSideShair />
            <TheOrderPanel />
            <TheOrderInformation />
            <TheSideBar />
            <TheFooter />
        </div>
    );
};

export default Home;