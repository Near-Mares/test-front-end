import React ,{ useState, useEffect }from 'react'
import moment from 'moment'

function Payments() {

    const [ payments, setPayments ] = useState([])

    const fetchPayments = () => {
        fetch('http://localhost:3001/payments')
        .then( res => res.json())
        .then( data => {
            console.log(data)
            setPayments(data)
        })
        .catch( err => console.log(err.message))
    }

    useEffect(()=> {
        fetchPayments()
    }, [])

    return (
        <>
        <h1 style={{ marginTop: '30px', marginBottom: '20px'}}>
            Payments
        </h1>
        
        {   
            payments.map( payment => (
                <div
                    className="notification mb30"
                    style={{
                        margin: '15px',
                        padding: '15px',
                        backgroundColor: 'white',
                        height: '160px'
                    }}
                    key={payment.id}
                >
                    <div className="notif-left flex-display flexa-jcsb">
                        <h4 className="textsize-3">
                            Fecha: { moment(payment.date).format("D [ de ] MMM") }
                        </h4>
                    </div>
                    
                    <div className="notif-right">
                        <h4 className="mt4 textsize-2 fs-regular cBlue">
                            Monto: ${payment.price}
                        </h4>
                        <p className="mt4 textsize-3 cGray">
                            Tipo de Pago: {payment.Payments}
                        </p>
                        <p className="mt4 textsize-3 cGray">
                            Id de Reserva: {payment.idReservation}
                        </p>
                    </div>
                </div>
            ))

        }
        </>
    )
}

export default Payments