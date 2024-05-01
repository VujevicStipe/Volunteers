import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

interface CategorySelectComponentProps {
  data: MyJobType[];
  onChange: (name: string, value: string) => void;
}

const CategorySelectComponent: React.FC<CategorySelectComponentProps> = ({
  data,
  onChange,
}) => {
    const [selectedCat, setSelectedCat] = useState<string>('')
  const handleCategChange = (event: SelectChangeEvent<string>) => {
    const newCat = event.target.value;
    setSelectedCat(newCat);
    onChange("jobType", newCat);
  };
  return (
    <FormControl fullWidth>
      <InputLabel>Job Type</InputLabel>
      <Select name="jobType" onChange={handleCategChange} value={selectedCat}>
        <MenuItem value="">Select Category</MenuItem>
        {data.map((data) => (
          <MenuItem key={data.id} value={data.job}>
            {data.job}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelectComponent;
