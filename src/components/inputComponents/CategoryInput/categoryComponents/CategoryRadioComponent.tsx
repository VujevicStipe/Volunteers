import React, { ChangeEvent } from "react";
import styles from "../../InputComponents.module.css";
import { Radio, FormControlLabel, RadioGroup } from "@mui/material";

interface CategoryRadioComponentProps {
  data: MyJobType[];
  onChange: (name: string, value: string) => void;
  myRef: React.RefObject<HTMLInputElement>;
}

const CategoryRadioComponent: React.FC<CategoryRadioComponentProps> = ({
  data,
  onChange,
  myRef,
}) => {
  const handleCategChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange("jobType", event.target.value);
  };

  return (
    <div className={styles.categoryFilter}>
      <h4>Categories</h4>
      <RadioGroup defaultValue="">
        <div>
          <FormControlLabel
            control={
              <Radio
                inputRef={myRef}
                sx={{ padding: "7px" }}
                value=""
                name="jobType"
                onChange={handleCategChange}
              />
            }
            label="Any Category"
          />
        </div>
        {data.map((jobType) => (
          <div key={jobType.id}>
            <FormControlLabel
              control={
                <Radio
                  onChange={handleCategChange}
                  value={jobType.job}
                  name="jobType"
                  sx={{ padding: "7px" }}
                />
              }
              label={jobType.job}
            />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default CategoryRadioComponent;
