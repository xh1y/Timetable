/**
 * Create time: 2024 07 22  12:29:44
 * File name: sortData.ts
 * Path: src/assets
 * About:
 */
import {
    AllWeekClasses,
    CourseOneDay,
    CoursesOneTime,
    Day,
    IClass,
    IClassLists,
    ICommonThings,
    OneWeekClasses,
    Week,
} from '../types/types.ts'
import { endTimeOfClass, startTimeOfClass } from './constants.ts'

function getWeekType(weeks: number[]): Week {
    // Attention: week数组是连续的，所以只需要判断第一个和第二个
    if (weeks.length == 1) {
        return 'all'
    }
    if (weeks[0] % 2 == 1 && weeks[1] % 2 == 1) {
        return 'odd'
    } else if (weeks[0] % 2 == 0 && weeks[1] % 2 == 0) {
        return 'even'
    } else {
        return 'all'
    }
}

export function sortDataToWeek(data: IClassLists): AllWeekClasses {
    const allWeekClasses: AllWeekClasses = []
    const classData: IClass[] = data.classList
    const commonThings: ICommonThings[] = data.commonThingsList
    for (let currentWeek = 0; currentWeek < data.totalWeek; currentWeek++) {
        const oneWeek: OneWeekClasses = []
        for (const commonThing of commonThings) {
            if (commonThing.week.includes(currentWeek + 1)) {
                oneWeek.push({
                    name: commonThing.title,
                    place: commonThing.detail,
                    teacher:
                        '星期' +
                        changeNumberToChinese(commonThing.day) +
                        ' ' +
                        startTimeOfClass[commonThing.time[0] - 1] +
                        '-' +
                        endTimeOfClass[
                            commonThing.time[commonThing.time.length - 1] - 1
                        ],
                    day: commonThing.day,
                    time: commonThing.time,
                    compulsory: false,
                    startWeek: commonThing.week[0],
                    endWeek: commonThing.week[commonThing.week.length - 1],
                    weekType: 'all',
                    isClass: false,
                })
            }
        }
        for (const classList of classData) {
            for (let j = 0; j < classList.detailTimeAndPlace.length; j++) {
                if (
                    classList.detailTimeAndPlace[j].week.includes(
                        currentWeek + 1
                    )
                ) {
                    oneWeek.push({
                        name: classList.name,
                        teacher: classList.teacher,
                        day: classList.detailTimeAndPlace[j].day,
                        time: classList.detailTimeAndPlace[j].time,
                        place: classList.detailTimeAndPlace[j].places,
                        compulsory: classList.compulsory,
                        startWeek: classList.detailTimeAndPlace[j].week[0],
                        endWeek:
                            classList.detailTimeAndPlace[j].week[
                                classList.detailTimeAndPlace[j].week.length - 1
                            ],
                        weekType: getWeekType(
                            classList.detailTimeAndPlace[j].week
                        ),
                        isClass: true,
                    })
                }
            }
        }
        allWeekClasses.push(oneWeek)
    }

    return allWeekClasses
}

export const emptyItem: CoursesOneTime = {
    name: '',
    teacher: '',
    day: 0,
    timeStart: 0,
    timeDur: 1,
    place: '',
    compulsory: true,
    startWeek: 0,
    endWeek: 0,
    weekType: 'all',
    isClass: true,
}

export function sortDataInTimeForAll(
    data: AllWeekClasses
): CoursesOneTime[][][] {
    const allThings: CoursesOneTime[][][] = []
    for (let i = 0; i < data.length; i++) {
        const firstLoop: CoursesOneTime[][] = []
        for (let j = 0; j < 7; j++) {
            const secondLoop: CoursesOneTime[] = []
            for (let h = 0; h < 12; h++) {
                secondLoop.push(emptyItem)
            }
            firstLoop.push(secondLoop)
        }
        allThings.push(firstLoop)
    }
    // console.log(weekCoursesInformation)

    for (let weekNum = 0; weekNum < 1; weekNum++) {
        for (let courses = 0; courses < data[weekNum].length; courses++) {
            allThings[weekNum][data[weekNum][courses].day - 1][
                data[weekNum][courses].time[0] - 1
            ] = {
                name: data[weekNum][courses].name,
                teacher: data[weekNum][courses].teacher,
                place: data[weekNum][courses].place,
                timeStart: data[weekNum][courses].time[0],
                // @ts-ignore
                timeDur: data[weekNum][courses].time.length,
                day: data[weekNum][courses].day,
                compulsory: data[weekNum][courses].compulsory,
            }
        }
    }
    return allThings
}

export function sortDataInTimeForOneWeek(
    classes: OneWeekClasses
): CoursesOneTime[][] {
    const allThings: CoursesOneTime[][] = []
    for (let i = 0; i < 12; i++) {
        const secondLoop: CoursesOneTime[] = []
        for (let h = 0; h < 7; h++) {
            // @ts-ignore
            secondLoop.push({ ...emptyItem, timeStart: i })
        }
        allThings.push(secondLoop)
    }

    for (let courses = 0; courses < classes.length; courses++) {
        allThings[classes[courses].time[0] - 1][classes[courses].day - 1] = {
            name: classes[courses].name,
            teacher: classes[courses].teacher,
            place: classes[courses].place,
            timeStart: classes[courses].time[0],
            timeDur:
                classes[courses].time.length == 0
                    ? 0
                    : newCourseOneDay(classes[courses].time.length),
            day: classes[courses].day,
            compulsory: classes[courses].compulsory,
            startWeek: classes[courses].startWeek,
            endWeek: classes[courses].endWeek,
            weekType: classes[courses].weekType,
            isClass: classes[courses].isClass,
        }
        for (let j = 1; j < classes[courses].time.length; j++) {
            allThings[classes[courses].time[j] - 1][classes[courses].day - 1] =
                {
                    endWeek: classes[courses].endWeek,
                    startWeek: classes[courses].startWeek,
                    weekType: classes[courses].weekType,
                    name: classes[courses].name,
                    teacher: classes[courses].teacher,
                    place: classes[courses].place,
                    timeStart: classes[courses].time[0],
                    timeDur: 0,
                    day: classes[courses].day,
                    compulsory: classes[courses].compulsory,
                    isClass: classes[courses].isClass,
                }
        }
    }

    return allThings
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
