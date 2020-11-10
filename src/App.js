import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/navigation/Dashboard';
import Sidebar from './components/navigation/Sidebar';
import MainSection from './components/navigation/MainSection';
import Notifications from  './components/notifications/Notifications'
import Hotels from './components/hotels/Hotels'
import Payments from './components/payments/Payments'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Switch>
                
                <Route path='/' exact>
                    <div className='container'>
                            <Sidebar />
                        <section className="wMax1000 panel flex-one pl12em pr12em">
                            <Dashboard />
                            <MainSection />
                        </section>
                    </div>
                </Route>

                <Route path='/hotels' exact>
                    <div className='container'>
                        <Sidebar />                 
                        <section className="wMax1000 panel flex-one pl12em pr12em"> 
                            <Dashboard />
                            <Hotels />
                        </section>

                    </div>
                </Route>

                <Route path='/payments' exact>
                    <div className='container'>
                        <Sidebar />                 
                        <section className="wMax1000 panel flex-one pl12em pr12em"> 
                            <Dashboard />
                            <Payments />
                        </section>

                    </div>
                </Route>

                <Route path='/notifications' exact>
                    <div className='container'>
                        <Sidebar />                 
                        <section className="wMax1000 panel flex-one pl12em pr12em"> 
                            <Dashboard />
                            <Notifications />
                        </section>

                    </div>
                </Route>

            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
