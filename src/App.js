import logo from './logo.svg';
import './App.css';
import react, {useState, useEffect} from 'react';
import Search from './component/Search';
import Cards from './component/Cards';
import Sidebar from './component/Sidebar';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [city, setCity] = useState('miami');
  const [weatherData, setWeatherData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const apikey = 'db690c96c746078c5e6137873380815f'
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        setIsLoaded(true);
      })
  }, [city])

  return (
    <div className="App">
      
      <Search city={city} updateCity={setCity} />
      <div>
        {isLoaded ? (
          <div>
            <Sidebar weather={weatherData} />
            <Cards weather={weatherData} />
          </div>
        ) : <CircularProgress />}
      </div>
    </div>
  );
}

export default App;
