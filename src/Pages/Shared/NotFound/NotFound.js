import React from 'react';
import sleeping from '../../../Images/banner/dakota-corbin-5yUPFjGFJoI-unsplash.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Service Man is Sleeping</h2>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;