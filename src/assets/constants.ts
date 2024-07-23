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

export const nowDate = new MyDate(2024, 11, 8)
export const firstDayDate = new MyDate(2024, 9, 9)
