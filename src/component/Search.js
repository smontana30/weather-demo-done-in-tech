import react, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Search({city, updateCity}) {
    const [newCity, setNewCity] = useState(city);

    const handleSumbit = () => {
        console.log(newCity);
        updateCity(newCity);
        setNewCity('');
    }

    return (
        <div>
            <TextField 
                value={newCity}
                placeholder='Search'
                onChange={(e) => setNewCity(e.target.value)}
                InputProps={{
                    endAdornment: <Button onClick={handleSumbit}>Sumbit</Button>,
                  }}
            />
        </div>
    );
}

export default Search;