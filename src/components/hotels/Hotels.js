import React, { useEffect, useState } from 'react'
//Material-ui Modal
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
//redux
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Hotels() {
    
    const [ hotels, setHotels ] = useState([]);
    const [ allHotels, setAllHotels ] = useState([]);
    const [ selectedHotel, setSelectedHotel ] = useState('');
    const hotelTextSearch = useSelector( state => state.hotels);

    //Modal snippet
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = (e) => {
        setOpen(true);
        console.log(e)
        setSelectedHotel( e.target.id )
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const fetchHotels = () => {
        fetch('http://localhost:3001/hotels')
        .then( res => res.json())
        .then( data => {
            console.log(data)
            setHotels(data)
            setAllHotels(data)
        })
        .catch( err => console.log(err))
    };

    useEffect(() => {
        fetchHotels()
    }, []);

    //logica de busqueda
    useEffect( ()=> {
        console.log('searched')
        if (hotelTextSearch === '') {
            setHotels(allHotels)
        } else {
            setHotels( allHotels.filter( hotel => {
                return hotel.name.toLowerCase().includes(hotelTextSearch.toLowerCase())
            }))
        }
    }, [hotelTextSearch])

    return (
        <div
            className="containerCenter"
            style={{
                display: 'flex',
                flexWrap:'wrap',
                justifyContent: 'space-around'
            }}
        >
            <h2 className="ml10px mt10 textsize-1 fs-sbold cBlack" style={{width: '100%'}}>
                Hoteles Disponibles
            </h2>
            
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,  
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <h2 className="textsize-1 fs-sbold cGray" >
                        {`Seguro que desea realizar una reserva en "${selectedHotel}"?`}
                    </h2>
                    
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly',marginTop: '15px'}}>
                        <button onClick={handleClose}>Reservar</button>
                        <button onClick={handleClose}>No Reservar</button>
                    </div>
                </div>
                </Fade>
            </Modal>
            

            {   hotels.map( hotel => (

                <div key={hotel.id} className="row flex-dir-r w96Porc flex-wrap " style={{ width:'300px', maxWidth: '400px',}}>

                    <div
                        className="card row flex-dir-c flexa-jcsb flexa-ai p10 img wMin150 hMin150 m2px mt10"
                        style={{ backgroundImage: `url(${hotel.imgUrl})`, position: 'relative'}}
                    >
                        <h2 className="textsize-1 fs-sbold cWhite">
                            {hotel.name}
                        </h2>
                        <a className="btn bcPurple">
                            <button className="btn bcPurple" onClick={handleOpen} id={hotel.name}>
                                Reservar
                            </button>
                        </a>
                    </div>

                </div>
            ))
            }

        </div>
    )
}

export default Hotels
