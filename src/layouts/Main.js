import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>


            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;