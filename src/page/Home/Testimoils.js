import React from 'react';
import quote from '../../assest/icons/quote.svg'
import prpole1 from '../../assest/images/people1.png'
import prpole2 from '../../assest/images/people2.png'
import prpole3 from '../../assest/images/people3.png'
import Review from './Review';

const Testimoils = () => {
    const review = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: prpole1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: prpole2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: prpole3
        }
    ]
    return (
        <section className='my-24'>
            <div className='flex justify-between'>
                <div className=''>
                    <h4 className="text-xl text-primary font-bold">Testimoils</h4>
                    <h2 className='text-3xl'>What our Patients say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-40' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    review.map(review=> <Review kay={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimoils;