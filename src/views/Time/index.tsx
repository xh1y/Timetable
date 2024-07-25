/*
 * Create time: 2024 07 25  19:14:41*/

import { nowDate } from '../../assets/constant/constants.ts'
import { useState } from 'react'
import { TimeWrapper } from './styles.ts'

function Time() {
    const [time, setTime] = useState(new Date())

    setInterval(() => {
        setTime(new Date())
    }, 1000)

    return (
        <TimeWrapper>
            现在时间：{nowDate.Year}年{nowDate.Month}月{nowDate.Day}日{' '}
            {time.getHours()}:
            {(time.getMinutes() > 10 ? '' : '0') + time.getMinutes()}:
            {(time.getSeconds() > 10 ? '' : '0') + time.getSeconds()}
        </TimeWrapper>
    )
}

export default Time
// Index
