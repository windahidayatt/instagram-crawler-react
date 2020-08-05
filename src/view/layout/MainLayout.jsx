import React, { Component } from 'react';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

const MainLayout = ({children, ...rest}) => {
    return (
        <div>
            <Navbar />
                <div className="container-fluid">
                    <div className="area-home"></div>
                    <div>{children}</div>
                </div>
            <Footer/>
        </div>
    );
}

export default MainLayout;