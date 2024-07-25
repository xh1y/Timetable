/*
 Create time: 2024 07 25  15:14:17
 File name: MyDate.ts
 Path: src/assets/function
 About: Class MyDate
 */

export class MyDate {
    year: number = 1970
    month: number = 0
    day: number = 0

    /**
     * @param year_or_date_num A number, the meaning of which is determined by the parameters passed to this function. date_num if one argument, or year if all three arguments are present
     * @param month A number indicating the month, starting from 1
     * @param day A number indicating the day
     */
    constructor(year_or_date_num: number, month?: number, day?: number) {
        if (typeof month === 'undefined' && typeof day === 'undefined') {
            const d = new Date(year_or_date_num)
            this.year = d.getFullYear()
            this.month = d.getMonth() + 1
            this.day = d.getDate()
        } else if (typeof month === 'number' && typeof day === 'number') {
            this.year = year_or_date_num
            this.month = month
            this.day = day
        } else {
            throw '1 or 3 parameters needed'
        }
    }

    // add one day
    addOne() {
        const s = new Date(this.year, this.month - 1, this.day)
        const newDate = new Date(s.getTime() + 24 * 3600 * 1000)
        return new MyDate(newDate.getTime())
    }

    /**
     * @param day The day you want to add, must be an integer number
     */
    add(day: number) {
        if (day < 0) {
            throw new Error('Day must be positive integer')
        }
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
