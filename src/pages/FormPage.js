import React, { useEffect, useState } from 'react'
import styles from './form_page.module.scss'
import Paper from '@mui/material/Paper';
import { Box, TextField, Button, Typography, FormControl } from '@mui/material';
import { CustomSelect } from '../components/CustomSelect/CustomSelect';
import CustomeDatePicker from '../components/CustomeDatePicker/CustomeDatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';

const FormPage = () => {

    const [tower, setTower] = useState('')
    const [floor, setFloor] = useState('')
    const [room, setRoom] = useState('')
    const [comment, setComment] = useState('')
    const [date, setDate] = useState(null)
    const [timeFrom, setTimeFrom] = useState('')
    const [timeTo, setTimeTo] = useState('')


    const towers = ['A', 'B']
    const floors = [...new Array(28).keys()].filter((v) => (v > 2))
    const rooms = [...new Array(11).keys()].slice(1, 11)
    const timesFrom = [...new Array(48).keys()].slice(14, 48).map((v, i) => {
        let date = ''
        if (v < 20) {
            date += `0${Math.trunc(v / 2)}:`
        } else {
            date += `${Math.trunc(v / 2)}:`
        }

        if (v % 2 == 0) {
            date += '00'
        } else {
            date += '30'
        }

        return date
    })
    const [timesTo, setTimesTo] = useState([...timesFrom])

    useEffect(() => {
        if (timeFrom === '') {
            return
        }
        const secondsTimesFrom = Number(timeFrom.split(':')[0]) * 3600 + Number(timeFrom.split(':')[1]) * 60
        const newTimeTo = timesFrom.filter((v) => {
            const secondsTimesTo = Number(v.split(':')[0]) * 3600 + Number(v.split(':')[1]) * 60
            return secondsTimesFrom < secondsTimesTo
        })
        const secondsTimesTo = Number(timeTo.split(':')[0]) * 3600 + Number(timeTo.split(':')[1]) * 60
        if (secondsTimesFrom >= secondsTimesTo) {
            setTimeTo('')
        }
        setTimesTo(newTimeTo)
    }, [timeFrom])

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
        setTimeFrom('')
        setTimeTo('')
        setDate('')
        setComment('')
    }

    return (
        <Box className={styles['container']}>
            <Paper elevation={3} className={styles['form_container']}>
                <Typography variant="h4" component="h1">
                    Бронирование переговорной
                </Typography>
                <Box className={styles['box_for_selectors']}>
                    <CustomSelect label={'Башня'} value={tower} onChange={createHandChange(setTower)} listItems={towers} />
                    <CustomSelect label={'Этаж'} value={floor} onChange={createHandChange(setFloor)} listItems={floors} />
                    <CustomSelect label={'Комната'} value={room} onChange={createHandChange(setRoom)} listItems={rooms} />
                </Box>
                <Box className={styles['date_container']}>
                    <Box sx={{
                        width: '100%'
                    }}>
                        <Typography sx={{
                            fontSize: '16px',
                            paddingRight: '20px'
                        }} component="h2">
                            Дата бронирования
                        </Typography>
                        <CustomeDatePicker
                            value={date}
                            onChange={(newValue) => setDate(newValue)}

                        />
                    </Box>
                    <Box sx={{
                        width: '100%'
                    }}>
                        <Typography sx={{
                            fontSize: '16px',
                            paddingRight: '20px'
                        }} component="h2">
                            Забронировать с
                        </Typography>
                        <CustomSelect value={timeFrom} onChange={createHandChange(setTimeFrom)} listItems={timesFrom} />
                    </Box>
                    <Box sx={{
                        width: '100%'
                    }}>
                        <Typography sx={{
                            fontSize: '16px',
                            paddingRight: '20px'
                        }} component="h2">
                            Забронировать до
                        </Typography>
                        <CustomSelect value={timeTo} onChange={createHandChange(setTimeTo)} listItems={timesTo} displayEmpty />
                    </Box>

                </Box>
                <TextField
                    id="standard-multiline-static"
                    label="Комментарий"
                    multiline
                    maxRows={Infinity}
                    minRows={4}
                    value={comment}
                    onChange={createHandChange(setComment)}
                />
                <Box sx={{
                    display: 'flex',
                    gap: '10px'
                }}>
                    <Button variant="contained" onClick={() => {
                        console.log({
                            'tower': tower,
                            'floor': floor,
                            'room': room,
                            'date': date?.format('DD/MM/YYYY'),
                            'bookedFrom': timeFrom,
                            'bookedTo': timeTo,
                            'comment': comment
                        })
                    }}>Отправить</Button>
                    <Button variant="outlined" onClick={clearFields}>Очистить</Button>
                </Box>

            </Paper>
        </Box>
    )
}

export default FormPage