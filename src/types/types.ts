type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7
type CourseOneDay = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface IClass {
    name: string
    teacher: string
    detailTimeAndPlace: {
        places: string
        week: number[]
        day: Day
        time: CourseOneDay[]
    }[]
    compulsory: boolean
}

interface IClassLists {
    classList: IClass[]
    commonThingsList: ICommonThings[]
    totalWeek: number
}

interface ICommonThings {
    id: number
    title: string
    detail: string
    week: number[]
    day: Day
    time: CourseOneDay[]
}

interface IMovingBoxProps {
    $offsetx: number
    $offsety: number
}

interface IPosition {
    x: number
    y: number
}

interface IBoxProps {
    $number: number
    // upperInformation: string
    // lowerInformation: string
    // color: "#f9e8d8" | "#f9e3e5" | "#dde3f9"
    $color: colorInList
    $offset?: number
}

enum colorInList {
    morning = 0,
    afternoon,
    evening,
    defineAfter,
    notNow,
    now,
    nothing,
    add,
}

type Week = 'odd' | 'even' | 'all'

interface IClasses {
    name: string
    teacher: string
    day: Day
    time: CourseOneDay[]
    place: string
    compulsory: boolean
    startWeek: number
    endWeek: number
    weekType: Week
    isClass: boolean
}

interface ICommonThingOneWeek {
    title: string
    detail: string
    day: Day
    time: CourseOneDay[]
}

type OneWeekClasses = IClasses[]

type OneWeekCommonThings = ICommonThingOneWeek[]

type AllWeekClasses = OneWeekClasses[]

type AllWeekCommonThings = OneWeekCommonThings[]

interface CoursesOneTime {
    name: string
    teacher: string
    day: Day | 0
    timeStart: CourseOneDay | 0 // add this 0 to identify illegal value
    timeDur: CourseOneDay | 0
    place: string
    compulsory: boolean
    startWeek: number
    endWeek: number
    weekType: Week
    isClass: boolean
}

export type {
    IClass,
    IMovingBoxProps,
    IPosition,
    IBoxProps,
    IClassLists,
    IClasses,
    OneWeekClasses,
    AllWeekClasses,
    Day,
    CourseOneDay,
    CoursesOneTime,
    Week,
    ICommonThings,
    ICommonThingOneWeek,
    OneWeekCommonThings,
    AllWeekCommonThings,
}
export { colorInList }
