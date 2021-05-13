// Landing Page
import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Navbar/NavBar';

function LandingPage(props) {
    return (
        <>
        <NavBar></NavBar>
        <Carousel></Carousel>
        <Footer></Footer>
        </>
    );
}
export default LandingPage;