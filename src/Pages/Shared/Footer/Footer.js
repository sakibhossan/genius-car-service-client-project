import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
    <footer className='text-center m-5'>
        <p><small className='text-primary'>Copyright @ {year} </small></p>
    </footer>
    );
};

export default Footer;