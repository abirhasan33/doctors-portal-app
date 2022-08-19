import React from 'react';
import doctor from '../../assest/images/doctor.png';
import appointment from '../../assest/images/appointment.png';
import PrimaryButton from '../PrimaryButton';

const MakeAppointement = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1'>
                <img className='mt-[-130px] hidden lg:block w-5/6 ml-10' src={doctor} alt="" />
            </div>
            <div className='lg:flex-1 p-4'>
                <h2 className='text-xl text-primary'>Appointment</h2>
                <h2 className='text-3xl py-2 font-bold text-white'>Make an Appointment Today</h2>
                <p className='text-white pb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, ab! Porro ab ipsam aliquid minus veniam officia error ex dolorum illum maxime expedita esse hic, perferendis quos enim veritatis! Quia dolor corporis expedita, ex labore voluptatum sit enim placeat alias!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointement;