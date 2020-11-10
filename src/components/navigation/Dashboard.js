import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { changeHotels } from '../../redux/actions/index';


function Dashboard() {

    const[ open, setOpen ] = useState(false)

    const dispatch = useDispatch();

    const openSearch = () => {
        setOpen(!open)
        console.log(open)
    }

    return (
        <div className="cardTop bcWhite flex-display flex-dir-r flexa-jcsb">
            <div>
                <h2>Dashboard</h2>
            </div>

            <div>
                <TextField 
                    name='searchText'
                    label='busca hoteles...'
                    onChange={e => {
                        dispatch(changeHotels(e.target.value))
                        console.log(e.target.value)
                    }}
                    floatingLabelText='Search for hotels'
                    fullWidth={true}
                    style={{
                        position: 'absolute',
                        width:'30%',
                        left: '30%',
                        top:'2%',
                        display: open ? 'block' : 'none'
                    }}
                />
            </div>

            <div>
                <Link className="mr2em" to="/hotels">
                    <ion-icon className="icoGray" name="search-outline" onClick={openSearch}></ion-icon>
                </Link>
                <Link className="mr2em" to="/notifications">
                    <ion-icon className="icoGray" name="mail-unread-outline"></ion-icon>
                </Link>
                <Link className="mr2em" to="/">
                    <ion-icon className="icoGray" name="settings-outline"></ion-icon>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard