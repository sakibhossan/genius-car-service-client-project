import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetaill = () => {
    const {serviceid} = useParams();
    return (
        <div>
            <h2>Welcome to detail:{serviceid}</h2>
          <div className='text-center'>
          <Link to='/checkout'>
                <button className='btn btn-primary'> Proceed Checkout</button>
            </Link>
          </div>
        </div>
    );
};

export default ServiceDetaill;