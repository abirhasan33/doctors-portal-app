import React from 'react';
import Baner from './Baner';
import Footer from './Footer';
import Info from './Info';
import Input from './Input';
import MakeAppointement from './MakeAppointement';
import Services from './Services';
import Stat from './Stat';
import Testimoils from './Testimoils';

const Home = () => {
    return (
        <div className='px-12'>
            <Baner></Baner>
            <Info></Info>
            <Services></Services>
            <MakeAppointement></MakeAppointement>
            <Testimoils></Testimoils>
            <Stat></Stat>
            <Input></Input>
            <Footer></Footer>
        </div>
    );
};

export default Home;