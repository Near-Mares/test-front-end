import React,{ useEffect, useState } from 'react'
import moment from 'moment'


function Notifications() {

    const [ notifications, setNotifications ] = useState([])


    const fetchNotifications = () => {
        fetch('http://localhost:3001/notifications')
        .then( res => res.json())
        .then( data =>{
            console.log(data)
            setNotifications(data)
        })
        .catch( err => console.log(err))
    }

    useEffect( () => {
        fetchNotifications()
    }, [])

    
    return (

        <div>
            <h1 style={{ marginTop: '30px', marginBottom: '30px'}}>Notifications</h1>
            {   
                notifications?.map( notification => (
                    
                    <div 
                        className="notification mb30"
                        style={{
                            margin: '15px',
                            padding: '15px',
                            backgroundColor: 'white',
                            height: '160px'
                        }}
                        key={notification.id}
                    >
                        <div className="notif-left flex-display flexa-jcsb"> 
                            <h4 className="textsize-3">
                                Fecha: { moment(notification.date).format("D [ de ] MMM") }
                            </h4>
                        </div>
                        <div className="notif-right">
                            <h4 className="mt4 textsize-2 fs-regular cBlue">
                                De: {notification.fromUser.name}
                            </h4>
                            <p className="mt4 textsize-3 cGray">
                                Mensaje: <br/>{notification.content}
                            </p>
                        </div>
                    </div>
                    
                ))
            }

        </div>
    )
}

export default Notifications