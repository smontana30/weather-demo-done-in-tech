import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// todo: make card at top City
// image of weather ie cloud, rain, sunny
// temp 
// min and max temp

function Cards({weather}) {


    const getIcon = (weatherID) => {
        console.log(weatherID.icon)
        return `http://openweathermap.org/img/wn/${weatherID.icon}@2x.png`;
    }

    const kelvinToFahrenheit = (kelvin) => {
        return Math.floor((((kelvin - 273.15) * 9) /5)+ 32);
    }

    console.log(weather);
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Card style={{width: '30vh'}}>
                <CardContent>
                    <img style={{height: '20vh', width: '20vh'}} src={getIcon(weather.weather[0])} alt='oh no' />
                    <Typography variant='h3'>
                        {kelvinToFahrenheit(weather.main.temp)}&deg;
                    </Typography>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography variant='h6' style={{marginRight: '1vh'}}>
                            {kelvinToFahrenheit(weather.main.temp_max)}&deg;
                        </Typography>
                        <Typography variant='h6' style={{marginLeft: '1vh'}}>
                            {kelvinToFahrenheit(weather.main.temp_min)}&deg;
                        </Typography>
                    </div>
                    <Typography variant='h6'>
                        {weather.weather[0].description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Cards;