import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePicking({ setInputData, inputData }: any) {
  const [selectedDate, setSelectedDate] = React.useState(null);

  // const onHandleChange = (event: any, name: string) => {
  //   const { value } = event.target;
  //   console.log("name:", name, "value:", value);
  //   setInputData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));

  const handleDataChange = (date: any) => {
    // setSelectedDate(date);
    setInputData((prevData: any) => ({
      ...prevData,
      ["createdDate"]: date.format("DD-MM-YYYY"),
    }));
    console.log("selected date:", date.format("DD-MM-YYYY"));
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} sx={{ paddingTop: 0 }}>
        <DatePicker
          label="Basic date picker"
          onChange={handleDataChange}
          sx={{
            padding: 0,
            background: "#f0efff",
            border: "none",
            width: 280 + "px",
            // height: 40 + "px",
            borderWidth: "0px",
            outline: "0px",
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
