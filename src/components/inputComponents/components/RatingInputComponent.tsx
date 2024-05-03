import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

interface RatingInputComponentProps {
  readOnly: boolean;
  value: number
  onChange?: (name: string, value: number | null) => void;
}

const RatingInputComponent: React.FC<RatingInputComponentProps> = ({
  readOnly,
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = React.useState<number | null>(2);

  useEffect(() => {
    if(onChange) {
      onChange("grade", inputValue);
    }
  }, [inputValue]);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name={readOnly ? "read-only" : "simple-controlled"}
        value={value}
        onChange={(_, newValue) => {
            setInputValue(newValue);
        }}
        precision={0.5}
        readOnly={readOnly}
      />
    </Box>
  );
};

export default RatingInputComponent;
