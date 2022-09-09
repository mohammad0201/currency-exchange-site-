import BaseItemCard from 'components/base/BaseItemCard';
import React from 'react';

const TheCard = () => {
    return (
        <div className='inline-flex	 flex-row relative right-72 top-8'>
            <BaseItemCard />
            <BaseItemCard />
            <BaseItemCard />
            <BaseItemCard />
        </div>
    );
};

export default TheCard;