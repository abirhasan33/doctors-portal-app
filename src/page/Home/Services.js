import React from 'react';
import fluoride from '../../assest/images/fluoride.png';
import cavity from '../../assest/images/cavity.png';
import whitening from '../../assest/images/whitening.png';
import Service from './Service';
import ServiceCard from './ServiceCard';

const Services = () => {
    const servises = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            deceripion: '',
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            deceripion: '',
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth whitening",
            deceripion: '',
            img: whitening
        }
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h2 className='text-primary text-xl font-bold uppercase'>Our Servics</h2>
            <h2 className='text-2xl'>Services We Provider</h2>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    servises.map(servise =><Service kay={servise._id} servise={servise}></Service>)
                }
            </div>
            <ServiceCard></ServiceCard>
        </div>
    );
};

export default Services;