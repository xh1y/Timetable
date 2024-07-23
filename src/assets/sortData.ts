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
    IClassLists,
    OneWeekClasses,
    Week,
} from '../types'

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
    for (let currentWeek = 0; currentWeek < data.totalWeek; currentWeek++) {
        const oneWeek: OneWeekClasses = []
        for (const classList of data.list) {
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
    data: OneWeekClasses
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

    for (let courses = 0; courses < data.length; courses++) {
        allThings[data[courses].time[0] - 1][data[courses].day - 1] = {
            name: data[courses].name,
            teacher: data[courses].teacher,
            place: data[courses].place,
            timeStart: data[courses].time[0],
            // @ts-ignore
            timeDur: data[courses].time.length,
            day: data[courses].day,
            compulsory: data[courses].compulsory,
            startWeek: data[courses].startWeek,
            endWeek: data[courses].endWeek,
            weekType: data[courses].weekType,
        }
        for (let j = 1; j < data[courses].time.length; j++) {
            allThings[data[courses].time[j] - 1][data[courses].day - 1] = {
                endWeek: data[courses].endWeek,
                startWeek: data[courses].startWeek,
                weekType: data[courses].weekType,
                name: data[courses].name,
                teacher: data[courses].teacher,
                place: data[courses].place,
                timeStart: data[courses].time[0],
                // @ts-ignore
                timeDur: 0,
                day: data[courses].day,
                compulsory: data[courses].compulsory,
            }
        }
    }

    return allThings
}

export function getTime(
    startTime: CourseOneDay,
    timeDur: CourseOneDay
): string {
    const startTimeOfClass = [
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
    const endTimeOfClass = [
        '8:45',
        '9:40',
        '11:00',
        '11:55',
        '14:45',
        '15:40',
        '17:00',
        '19:45',
        '20:30',
        '21:35',
        '22:30',
    ]

    return `${startTimeOfClass[startTime - 1]}-${endTimeOfClass[startTime + timeDur - 2]}`
}
