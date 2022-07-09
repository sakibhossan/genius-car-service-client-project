import React from 'react';
import expert1 from '../../../../Images/AdobeStock_124934014_Preview.jpeg'
import expert2 from '../../../../Images/AdobeStock_173584222_Preview.jpeg'
import expert3 from '../../../../Images/AdobeStock_233327575_Preview.jpeg'
import expert4 from '../../../../Images/AdobeStock_317150530_Preview.jpeg'
import expert5 from '../../../../Images/AdobeStock_340695937_Preview.jpeg'
import expert6 from '../../../../Images/AdobeStock_124934014_Preview.jpeg'
import Expert from '../Expert/Expert';

const experts = [
    {id: 1, name: 'Will Smith', img: expert1},
    {id: 2, name: 'Messi', img: expert2},
    {id: 3, name: 'Ronaldo', img: expert3},
    {id: 4, name: 'Rock', img: expert4},
    {id: 5, name: 'Nobel', img: expert5},
    {id: 6, name: 'Sakib', img: expert6},
]

const Experts = () => {
    return (
        <div id="experts" className='container'>
            <h2 className='text-primary text-center mt-5'>Our experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;