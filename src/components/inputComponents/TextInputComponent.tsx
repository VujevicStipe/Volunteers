import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface TextInputComponentProps {
  type: "text" | "number";
  label: string;
  name: string;
  multiline: boolean;
  onChange: (name: string, value: string) => void;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  type,
  label,
  name,
  onChange,
  multiline,
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(name, event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        type={type}
        name={name}
        label={label}
        variant="standard"
        multiline={multiline ? true : false}
        onChange={handleChange}
        required
      />
    </Box>
  );
};

export default TextInputComponent;
