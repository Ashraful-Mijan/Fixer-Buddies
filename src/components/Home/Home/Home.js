import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurTeam from '../OurTeam/OurTeam';
import RepairBrands from '../RepairBrands/RepairBrands';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import WorkProcess from '../WorkProcess/WorkProcess';

const Home = () => {
    return (
        <div>
            <Header/>
            <RepairBrands/>
            <Services/>
            <WorkProcess/>
            <OurTeam/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;