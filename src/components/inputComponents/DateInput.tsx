import React, { useEffect } from "react";
import stlyes from "./InputComponents.module.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import Box from "@mui/material/Box";

interface DateInputProps {
  onChange: (name: string, value: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>();
  const [cleared, setCleared] = React.useState<boolean>(false);

  useEffect(() => {
    if (selectedDate) {
      const dateString = selectedDate ? selectedDate.format("YYYY-MM-DD") : "";
      onChange("date", dateString);
    } else {
      onChange("date", "");
    }
  }, [selectedDate != null]);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <div className={stlyes.dateFilter}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <DatePicker
            label="Date"
            name="date"
            onChange={(newValue) => setSelectedDate(newValue)}
            sx={{ width: '260px' }}
            slotProps={{
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
          />
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default DateInput;
