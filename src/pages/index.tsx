import BasicDatePicker from "@/components/DatePicker";
import SwitchLabels from "@/components/Switch";
import { Box, Button, Stack, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [startValue, setStartValue] = useState<Dayjs | null>(dayjs());
  const [endValue, setEndValue] = useState<Dayjs | null>(dayjs().add(1, "day"));
  const [includeEndDay, setIncludeEndDay] = useState<Boolean>(false);
  const [result, setResult] = useState({
    totalDays: 0,
    years: 0,
    months: 0,
    days: 0,
  });

  const changeStartHandler = (value: Dayjs | null) => {
    setStartValue(value);
  };

  const changeEndHandler = (value: Dayjs | null) => {
    setEndValue(value);
  };

  const changeEndDayHandler = () => {
    setIncludeEndDay((prev) => !prev);
  };

  const calculateDateDifferenceInUnits = () => {
    if (endValue !== null && startValue !== null) {
      const adjustedEndDate = includeEndDay ? endValue.add(1, "day") : endValue;

      const totalDays = adjustedEndDate.diff(startValue, "day");
      const years = adjustedEndDate.diff(startValue, "year");
      const months = adjustedEndDate.diff(
        startValue.add(years, "year"),
        "month"
      );
      const days = adjustedEndDate.diff(
        startValue.add(years, "year").add(months, "month"),
        "day"
      );

      setResult({
        totalDays,
        years,
        months,
        days,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Date Difference</title>
        <meta name="description" content="Arborgold Interview Round 2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            width: "500px",
            border: "1px solid",
            padding: "40px 20px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: "column",
            }}
          >
            <BasicDatePicker
              label="Start Date"
              value={startValue}
              changeHandler={changeStartHandler}
            />
            <BasicDatePicker
              label="End Date"
              value={endValue}
              changeHandler={changeEndHandler}
            />
            <SwitchLabels
              label="Include end day?"
              value={includeEndDay}
              changeHandler={changeEndDayHandler}
            />
            <Button
              variant="contained"
              onClick={calculateDateDifferenceInUnits}
            >
              Calculate
            </Button>
          </Box>
          <Box
            sx={{
              mt: "10px",
            }}
          >
            {result.totalDays ? (
              <Typography variant="h5">
                Result: {result.totalDays} days
              </Typography>
            ) : null}
            {result.days || result.months || result.years ? (
              <Typography variant="body1">
                Or {result.days} {result.days === 1 ? "day" : "days"},
                {result.months} {result.months === 1 ? "month" : "months"},
                {result.years} {result.years === 1 ? "year" : "years"}
              </Typography>
            ) : null}
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
