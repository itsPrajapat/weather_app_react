import React, {useState} from 'react'

const Temperature = () => {

    const [city, setCity] = useState("")
    const [data, setData] = useState({temp:0, max_temp:0, min_temp:0, main:0})

    const onChange=(e)=>{
        setCity(e.target.value);
    }
    
    const handleClick = async (location)=>{
        try {
            if(location){
                let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b8475432c44fecc1bbe1af171cf453a2`)
                response = await response.json()
                setData({temp: response.main.temp, max_temp: response.main.max_temp, min_temp: response.main.min_temp, main:response.weather.main})
                }
        } catch (error) {
            console.log(error)
        }
        
    }
    
    
  return (
    <div>
        <div className="mb-3">
            <label htmlFor="city" className="form-label">Enter the City Name</label>
            <input type="text" name="city" value={city} onChange={onChange} className="form-control" id="city" aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-sm btn-primary" onClick={()=>{handleClick(city)}}>Submit</button>

        {data.temp!==0 ? <div className="card my-4 mx-4"  style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{Math.round(data.temp - 273.15)}°C</h5>
            </div> 
        </div> : <div className="card my-4 mx-4"  style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Enter the city name properly</h5>
            </div> 
        </div>}
    </div>
  )
}


export default Temperature;