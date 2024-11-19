import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';

export default function BasicDatePicker({value, label, changeHandler}:{value:Dayjs | null, label:string, changeHandler:(newDate: Dayjs|null) => void}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => changeHandler(newValue)}
      />
    </LocalizationProvider>
  );
}
