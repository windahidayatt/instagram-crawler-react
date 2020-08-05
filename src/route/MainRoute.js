import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainLayout from '../view/layout/MainLayout';

const MainRoute = ({component: Component, ...rest}) => {
        return (
            <Route {...rest} render={matchProps => (
                <MainLayout>
                    <Component {...matchProps} />
                </MainLayout>
            )} />
        );
}

export default MainRoute;