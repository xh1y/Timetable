interface IClass {
    name: string
    teacher: string
    detailTimeAndPlace: {
        places: string
        week: number[]
        day: 1 | 2 | 3 | 4 | 5 | 6 | 7
        time: (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12)[]
    }[]
    compulsory: boolean
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
}

enum colorInList {
    morning = 0,
    afternoon,
    evening,
    defineAfter,
    notNow,
    now,
    nothing,
}
export type { IClass, IMovingBoxProps, IPosition, IBoxProps }
export { colorInList }
