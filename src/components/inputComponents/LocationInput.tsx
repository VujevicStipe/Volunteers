import axios from "axios";
import { useEffect, useState } from "react";
import apiUrl from "../../util/config";
import SelectInputComponent from "./components/SelectInputComponent";

interface LocationInputProps {
  onChange: (name: string, value: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ onChange }) => {
  const [cities, setCities] = useState<MyCities[]>([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}/cities`)
      .then((res) => setCities(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SelectInputComponent
      data={cities}
      variant="location"
      label="City"
      name="location"
      onChange={onChange}
    />
  );
};

export default LocationInput;
