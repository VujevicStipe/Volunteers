import React from "react";
import styles from "./InputComponents.module.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface WorkExpInputProps {
  onChange: (name: string, value: string) => void;
}

const WorkExpInput: React.FC<WorkExpInputProps> = ({ onChange }) => {
  const [checked, setChecked] = React.useState<boolean>(false)

  const handleWorkExpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    setChecked(isChecked)
    onChange("workExp", isChecked ? "true" : "");
  };
  return (
    <FormGroup className={styles.workExpFilter}>
      <FormControlLabel
        control={<Checkbox checked={checked} 
        onChange={handleWorkExpChange}/>}
        label="Work Experience"
        value="true"
      />
    </FormGroup>
  );
};

export default WorkExpInput;
