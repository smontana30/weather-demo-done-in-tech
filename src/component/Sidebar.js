import react from 'react';
import Typography from '@mui/material/Typography';

// city name
// pressure
// humidity
// feel like 
// wind

function Sidebar({weather}) {

    const kelvinToFahrenheit = (kelvin) => {
        return Math.floor((((kelvin - 273.15) * 9) /5)+ 32);
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h1 style={{fontWeight: 'normal', fontSize: '13vh'}} >{weather.name}</h1>
            <div>
                <ul style={{listStyleType: 'none'}}>
                    <li>
                        <Typography variant='h6'>
                            Feels Like {kelvinToFahrenheit(weather.main.feels_like)}&deg;
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='h6'>
                            Pressure: {weather.main.pressure} md
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='h6'>
                            Humidity: {weather.main.humidity}%
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='h6'>
                            Wind Speed: {weather.wind.speed}m/s
                        </Typography>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;