import { combineReducers } from 'redux';
import WeatherReducer from './weather_reducer';

const rootReducer = combineReducers({
weatherList:WeatherReducer
});

export default rootReducer;
