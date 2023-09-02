import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Accountsettings, Editprofile, Leaderboard, Profilenavbar } from './components';
import ProfilePage from './components/profile';

const Mainprofile = () => {
    return (
        <>
            <div className="main-profile flex">
                <Profilenavbar />
                <Routes>
                    <Route path='/' Component={ProfilePage} />
                    <Route path='/leaderboard' Component={Leaderboard} />
                    <Route path='/account' Component={Accountsettings} />
                    <Route path='/editprofile' Component={Editprofile} />

                </Routes>

            </div>
        </>
    )
}

export default Mainprofile;