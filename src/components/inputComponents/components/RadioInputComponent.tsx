import React, { ChangeEvent } from "react";
import styles from '../inputStyles/InputComponents.module.css';
import { Radio, FormControlLabel, RadioGroup } from "@mui/material";

interface RadioInputComponentProps<T> {
  data: T[];
  name: string;
  label: string;
  myRef: React.RefObject<HTMLInputElement>;
  onChange: (name: string, value: string) => void;
}

const RadioInputComponent: React.FC<RadioInputComponentProps<MyJobType>> = ({
  data,
  name,
  label,
  onChange,
  myRef,
}) => {

  if (!data || !label || !name) {
    return null;
  }

  const handleCategChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(name, event.target.value);
  };

  return (
    <div className={styles.categoryFilter}>
      <h4>{label}</h4>
      <RadioGroup defaultValue="">
        <div>
          <FormControlLabel
            control={
              <Radio
                inputRef={myRef}
                sx={{ padding: "7px" }}
                value=""
                name={name}
                onChange={handleCategChange}
              />
            }
            label="Any Category"
          />
        </div>
        {data.map((item) => (
          <div key={item.id}>
            <FormControlLabel
              control={
                <Radio
                  onChange={handleCategChange}
                  value={item.job}
                  name={name}
                  sx={{ padding: "7px" }}
                />
              }
              label={item.job}
            />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioInputComponent;
