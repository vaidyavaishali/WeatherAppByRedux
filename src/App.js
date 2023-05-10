// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { weatherData } from './redux/slice/weatherSlice';

function App() {
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  const data = useSelector((state) => state.weather.data)
  console.log(data)
  return (
    <div className="App">
      <input type='text' placeholder='add data' value={search} onChange={(e) => { setSearch(e.target.value) }} />
      <button onClick={() => dispatch(weatherData(search))}>Add</button>

      {data &&
        <div className='display'>
          <p><b>City :- </b>{data.name}</p>
          <p><b>Temp:-</b>  {data.main.temp}</p>
          <p><b>temp_max:-</b>  {data.main.temp_max}</p>
          <p><b>temp_min:- </b> {data.main.temp_min}</p>
          <p><b>humidity:-</b>  {data.main.humidity}</p>
          <p><b>timezone:- </b> {data.timezone}</p>
        </div>
      }



    </div >
  );
}
export default App;
