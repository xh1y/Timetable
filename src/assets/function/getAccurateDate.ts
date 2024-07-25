/*
 Create time: 2024 07 21  17:17:45
 About: functions for dealing the time
 */

import { MyDate } from './MyDate.ts'
import { CourseOneDay, Day } from '../../types/types.ts'
import { endTimeOfClass, startTimeOfClass } from '../constant/constants.ts'

function getAccurateWeek(startDate: MyDate, endDate: MyDate): number {
    const s = startDate.value()
    const e = endDate.value()

    return Math.floor((e - s) / 1000 / 3600 / 24 / 7 + 1)
}

function getFirstDayOfWeek(startDate: MyDate, week: number): MyDate {
    return startDate.add((week - 1) * 7)
}

export function getTime(
    startTime: CourseOneDay,
    timeDur: CourseOneDay
): string {
    return `${startTimeOfClass[startTime - 1]}-${endTimeOfClass[startTime + timeDur - 2]}`
}

export function changeNumberToChinese(day: number | Day) {
    switch (day) {
        case 3:
            return '三'
        case 1:
            return '一'
        case 2:
            return '二'
        case 4:
            return '四'
        case 5:
            return '五'
        case 6:
            return '六'
        case 7:
            return '天'
        default:
            return '错误'
    }
}

export function newDay(num: number): Day {
    return num >= 1 && num <= 7 ? <Day>num : 1
}

export function newCourseOneDay(num: number): CourseOneDay {
    return num >= 1 && num <= 12 ? <CourseOneDay>num : 1
}

export { getAccurateWeek, getFirstDayOfWeek, MyDate }
