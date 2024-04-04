import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePicking({ setInputData, inputData, item }: any) {
  const handleDataChange = (date: any) => {
    setInputData((prevData: any) => ({
      ...prevData,
      ["createdDate"]: date.format("DD-MM-YYYY"),
    }));
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DatePicker"]}
        sx={{
          paddingTop: 0,
          height: "40px",
          borderRadius: "6px",
          padding: "2px",
        }}
      >
        <DatePicker
          label={item?.created_date}
          onChange={handleDataChange}
          sx={{
            padding: 0,
            background: "#f0efff",
            width: 280 + "px",
            height: "100%",
            outline: "none",
            justifyContent: "center",
          }}
          disableFuture
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
