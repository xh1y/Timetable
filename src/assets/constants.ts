/**
 * Create time: 2024 07 21  00:45:57
 * File name: constants.ts
 * Path: src/components
 * About: Some constants can be found herr
 */
import { MyDate } from './getAccurateDate.ts'

export const width =
    document.body.clientWidth < 425 ? document.body.clientWidth : 425

export const colorOptions = [
    {
        color: '#ea6667',
        colorBottom: '#ea6667',
        background: '#f9e3e5',
    },
    {
        color: '#eb9347',
        colorBottom: '#eb9347',
        background: '#f9e8d8',
    },
    {
        color: '#4161cb',
        colorBottom: '#4161cb',
        background: '#dde3f9',
    },
    {
        color: '#071c40',
        colorBottom: '#071c40',
        background: '#e4e7ec',
    },
    {
        color: '#112b53',
        colorBottom: '#9cb1ce',
        background: '#fff',
    },
    {
        color: '#efffff',
        colorBottom: '#9cb1ce',
        background: '#2a4d83',
    },
    {
        color: '#fff',
        colorBottom: '#fff',
        background: '#fff',
    },
    {
        color: '#fff',
        colorBottom: '#fff',
        background: '#f2f7fd',
    },
    {
        color: '#fff',
        colorBottom: '#fff',
        background: '#eaecf2',
    },
]

export const startTimeOfClass = [
    '8:00',
    '8:55',
    '10:15',
    '11:10',
    '14:00',
    '14:55',
    '16:15',
    '17:10',
    '19:00',
    '19:55',
    '20:50',
    '21:45',
]
export const endTimeOfClass = [
    '8:45',
    '9:40',
    '11:00',
    '11:55',
    '14:45',
    '15:40',
    '17:00',
    '17:55',
    '19:45',
    '20:30',
    '21:35',
    '22:30',
]

export const nowDate = new MyDate(2024, 11, 8)
export const firstDayDate = new MyDate(2024, 9, 9)
