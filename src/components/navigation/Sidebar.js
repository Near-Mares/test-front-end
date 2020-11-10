import React from 'react'

import IosAnalyticsOutline from 'react-ionicons/lib/IosAnalyticsOutline'
import IosMailOutline from 'react-ionicons/lib/IosMailOutline'
import IosCard from 'react-ionicons/lib/IosCard'
import IosAppsOutline from 'react-ionicons/lib/IosAppsOutline'
import IosExitOutline from 'react-ionicons/lib/IosExitOutline'

import { Link } from 'react-router-dom'


function Sidebar() {
    return (
        <div>
            <nav className="h100vh w60 panel bcPurple flexa-jcsb flexa-ai">
                <div className="panel">
                    {/* HOME */}
                    <Link className="mt10 mb30 h50px" to="/">
                        <IosAnalyticsOutline className="cWhite" fontSize="35px" color="#C9C9C9" beat={true}/>
                    </Link>
                    
                    {/* HOTELS   */}
                    <Link className="mt30" to="/hotels">
                        <IosAppsOutline className="cWhite" fontSize="35px" color="#C9C9C9"/>
                    </Link>

                    {/* NOTIFICATIONS */}
                    <Link className="mt30" to="/notifications">
                        <IosMailOutline className="cWhite" fontSize="35px" color="#C9C9C9"/>
                    </Link>
                    
                    {/* PAYMENTS */}
                    <Link className="mt30" to="/payments">
                        <IosCard className="cWhite" fontSize="35px" color="#C9C9C9"/>
                    </Link>
                
                </div>   
                       
                <Link className="mb10" href="#"><IosExitOutline fontSize="35px" color="#C9C9C9"/></Link>
            </nav>
        </div>
    )
}

export default Sidebar
