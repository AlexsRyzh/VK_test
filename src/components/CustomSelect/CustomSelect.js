import React from 'react'
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};

export const CustomSelect = ({ label, value, onChange = f => f, listItems = [], required = false, ...props }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={label}
                onChange={onChange}
                MenuProps={MenuProps}
                required
            >
                {
                    listItems.map((v, i) => (
                        <MenuItem value={v} key={i}>{v}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}
