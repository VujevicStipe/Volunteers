import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

interface SelectInputComponentProps<T> {
  data?: T[];
  variant: "category" | "location" | "gender";
  label: string;
  name: string;
  onChange: (name: string, value: string) => void;
}

const SelectInputComponent: React.FC<
  SelectInputComponentProps<MyJobType | MyCities>
> = ({ data, variant, label, name, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  if (!variant || !label || !name) {
    return null;
  }

  const handleCategChange = (event: SelectChangeEvent<string>) => {
    const newCat = event.target.value;
    setSelectedValue(newCat);
    onChange(name, newCat);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select name={name} onChange={handleCategChange} value={selectedValue}>
        <MenuItem value="">{`Select ${label}`}</MenuItem>
        {variant !== "gender" &&
          data &&
          data.map((item) => (
            <MenuItem
              key={item.id}
              value={"job" in item ? item.job : item.city}
            >
              {"job" in item ? item.job : item.city}
            </MenuItem>
          ))}
        {variant === "gender" && [
          <MenuItem key="men" value="men">
            Male
          </MenuItem>,
          <MenuItem key="women" value="women">
            Female
          </MenuItem>,
        ]}
      </Select>
    </FormControl>
  );
};

export default SelectInputComponent;
