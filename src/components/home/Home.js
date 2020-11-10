import React from 'react'
import Dashboard from '../navigation/Dashboard'
import Sidebar from '../navigation/Sidebar'
import MainSection from '../navigation/MainSection'


function Home() {
    return (
        <div>
            <Dashboard />
            <Sidebar />
            <MainSection />
        </div>
    )
}

export default Home
