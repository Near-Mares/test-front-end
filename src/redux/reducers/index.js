import { combineReducers } from 'redux';
import hotelsReducer from './hotelsReducer';

const allReducers = combineReducers({
    hotels: hotelsReducer
});

export default allReducers;