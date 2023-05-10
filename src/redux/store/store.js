import {configureStore} from "@reduxjs/toolkit"
import WeatherReducer from "../slice/weatherSlice"
const store = configureStore({
    reducer:{
     weather: WeatherReducer
    }
})
export default store