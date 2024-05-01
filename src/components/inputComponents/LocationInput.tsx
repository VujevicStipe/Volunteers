import axios from "axios";
import { useEffect, useState } from "react";
import apiUrl from "../../util/config";
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";

interface LocationInputProps {
  onChange: (name: string, value: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ onChange }) => {
  const [cities, setCities] = useState<MyCities[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('')
  useEffect(() => {
    axios
      .get(`${apiUrl}/cities`)
      .then((res) => setCities(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    const newCity = event.target.value
    setSelectedCity(newCity)
    onChange("location", newCity);
  };

  return (
    <FormControl  fullWidth>
      <InputLabel>City</InputLabel>
      <Select name='city' onChange={handleCityChange} value={selectedCity} >
        <MenuItem value="">Select a city</MenuItem>
        {cities.map((city) => (
          <MenuItem key={city.id} value={city.city}>
            {city.city}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LocationInput;
