import React, { useState } from 'react'
import styles from './form_page.module.scss'
import Paper from '@mui/material/Paper';
import { Box, TextField, Button } from '@mui/material';
import { CustomSelect } from '../components/CustomSelect/CustomSelect';


const FormPage = () => {

    const [tower, setTower] = useState('')
    const [floor, setFloor] = useState('')
    const [room, setRoom] = useState('')

    const floors = [...new Array(28).keys()].filter((v) => (v > 2))
    const rooms = [...new Array(11).keys()].slice(1, 11)

    const createHandChange = (f) => {
        const handleChange = (event) => {
            f(event.target.value)
        }
        return handleChange
    }

    const clearFields = () => {
        setTower('')
        setFloor('')
        setRoom('')
    }

    return (
        <Box className={styles['conatainer']}>
            <Paper elevation={3} className={styles['form_container']}>
                <CustomSelect label={'Tower'} value={tower} onChange={createHandChange(setTower)} listItems={['A', 'B']} />
                <CustomSelect label={'Floor'} value={floor} onChange={createHandChange(setFloor)} listItems={floors} />
                <CustomSelect label={'Room'} value={room} onChange={createHandChange(setRoom)} listItems={rooms} />
                <TextField
                    id="standard-multiline-static"
                    label="Комментарий"
                    multiline
                    maxRows={Infinity}
                    minRows={4}
                />
                <Button variant="contained">Отправить</Button>
                <Button variant="contained" onClick={clearFields}>Очистить</Button>
            </Paper>
        </Box>
    )
}

export default FormPage