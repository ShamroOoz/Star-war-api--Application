import React from 'react';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = (): JSX.Element => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default Layout;
