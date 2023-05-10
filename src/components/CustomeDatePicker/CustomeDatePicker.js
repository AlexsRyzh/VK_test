import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker, ruRU } from '@mui/x-date-pickers';

const CustomeDatePicker = ({ value, onChange }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}
            adapterLocale="en-gb"
            localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
        >
            <MobileDatePicker
                value={value}
                onChange={onChange}
                disablePast
                sx={{
                    width: '100%'
                }} />
        </LocalizationProvider>
    )
}

export default CustomeDatePicker