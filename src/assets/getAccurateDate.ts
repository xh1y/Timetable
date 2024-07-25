/**
 * Create time: 2024 07 21  17:17:45
 * File name: getAccurateDate.ts
 * Path: src/assets
 * About:
 */
function getAccurateDate(startDate: MyDate, endDate: MyDate): number {
    const s = startDate.value()
    const e = endDate.value()

    return Math.floor((e - s) / 1000 / 3600 / 24 / 7 + 1)
}

function getFirstDayOfWeek(startDate: MyDate, week: number): MyDate {
    return startDate.add((week - 1) * 7)
}

class MyDate {
    year: number = 1970
    month: number = 0
    day: number = 0
    constructor(year_or_date_num: number, month?: number, day?: number) {
        if (typeof month === 'undefined' && typeof day === 'undefined') {
            const d = new Date(year_or_date_num)
            this.year = d.getFullYear()
            this.month = d.getMonth() + 1
            this.day = d.getDate()
        } else if (typeof month === 'number' && typeof day === 'number') {
            this.month = month
            this.day = day
            this.year = year_or_date_num
        } else {
            throw '1 or 3 parameters needed'
        }
    }

    addOne() {
        const s = new Date(this.year, this.month - 1, this.day)
        const newDate = new Date(s.getTime() + 24 * 3600 * 1000)
        return new MyDate(newDate.getTime())
    }

    add(day: number) {
        let s = new MyDate(this.year, this.month, this.day)
        for (let i = 0; i < day; i++) {
            s = s.addOne()
        }

        return s
    }

    get Day() {
        return this.day
    }

    get Month() {
        return this.month
    }

    get Year() {
        return this.year
    }

    set Day(day: number) {
        this.day = day
    }

    set Month(month: number) {
        this.month = month
    }

    set Year(year: number) {
        this.year = year
    }

    value() {
        return new Date(this.year, this.month - 1, this.day).getTime()
    }
}

export { getAccurateDate, getFirstDayOfWeek, MyDate }
